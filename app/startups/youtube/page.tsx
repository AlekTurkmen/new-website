'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import ActivityCalendar, { BlockElement, Activity as CalendarActivityType } from 'react-activity-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import supabase from '@/utils/supabaseClient';
import Image from 'next/image';
import Link from 'next/link';

interface Activity {
  date: string;
  count: number;
  level: number;
}

interface Livestream {
  video_id: string;
  title: string;
  published_at: string;
  duration: string;
}

interface VideoThumbnailProps {
  videoId: string;
}

interface CalendarBlock {
  style: React.CSSProperties;
  'data-tooltip-id'?: string;
  'data-tooltip-html'?: string;
}

interface CalendarActivity extends Activity {
  date: string;
  count: number;
  level: number;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId }) => (
  <a 
    href={`https://youtube.com/watch?v=${videoId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block w-32 h-24 hover:transform hover:scale-105 transition-transform"
  >
    <img
      src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
      alt="Video thumbnail"
      className="w-full h-full object-cover rounded-md"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-60 rounded-full w-8 h-8 flex items-center justify-center">
        <span className="text-white text-lg">▶</span>
      </div>
    </div>
  </a>
);

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [livestreams, setLivestreams] = useState<Livestream[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const customTheme = {
    light: [
      '#ffebe9',
      '#ffc1c0',
      '#ff9492',
      '#ff6b6b',
      '#ff0000'
    ],
    dark: [
      '#ffebe9',
      '#ffc1c0',
      '#ff9492',
      '#ff6b6b',
      '#ff0000'
    ]
  };

  const parseDurationToSeconds = (duration: string): number => {
    if (!duration) return 0;
    const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!matches) return 0;
    const [_, hours, minutes, seconds] = matches;
    return (parseInt(hours || '0') * 3600) + 
           (parseInt(minutes || '0') * 60) + 
           parseInt(seconds || '0');
  };

  const formatDuration = (duration: string): string => {
    const seconds = parseDurationToSeconds(duration);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString + 'T00:00:00Z');
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    });
  };

  const calculateStreamPercentage = (activities: Activity[]): string => {
    const startDate = new Date('2024-11-08');
    const currentDate = new Date();
    const totalDays = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalHours = totalDays * 16;
    const streamedHours = activities.reduce((sum, activity) => sum + activity.count, 0);
    return ((streamedHours / totalHours) * 100).toFixed(1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (!supabase) {
          throw new Error('Supabase client not initialized');
        }

        const { data, error: supabaseError } = await supabase
          .from('livestreams')
          .select('*')
          .gte('published_at', '2024-11-08')
          .order('published_at', { ascending: true });

        if (supabaseError) {
          console.error('Supabase error:', supabaseError);
          throw new Error(supabaseError.message);
        }

        if (!data) {
          throw new Error('No data returned from Supabase');
        }

        const dateMap = new Map<string, number>();
        let maxDuration = 0;

        data.forEach((stream: Livestream) => {
          const date = stream.published_at.split('T')[0];
          const duration = parseDurationToSeconds(stream.duration);
          const existing = dateMap.get(date) || 0;
          dateMap.set(date, existing + duration);
          maxDuration = Math.max(maxDuration, existing + duration);
        });

        const activities = Array.from(dateMap.entries()).map(([date, duration]) => ({
          date,
          count: Math.round(duration / 3600),
          level: Math.min(4, Math.floor((duration / maxDuration) * 4))
        }));

        setActivities(activities);
        setLivestreams(data.reverse());
      } catch (err: any) {
        console.error('Error fetching data:', err);
        setError(err.message || 'An error occurred while fetching data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen text-white font-lexend-regular bg-black">
      <Navbar />
      <ScrollProgress className="top" />
      
      <div className="relative">
        <main className="max-w-4xl mx-auto py-16 px-4">
          {/* Title section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
              Youtube Livestreams Dashboard
            </h1>
            
            <p className="text-md text-gray-400 mb-6 font-lexend-regular">
              November 2024 - Present
            </p>

            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>

          {/* Main content */}
          <div className="space-y-8 font-lexend-regular">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-lexend-bold text-white mb-4">Streaming Activity</h2>
              {isLoading && <div>Loading...</div>}
              {error && <div className="text-red-500">Error: {error}</div>}
              {!isLoading && !error && activities.length > 0 && (
                <>
                  <ActivityCalendar
                    data={activities}
                    blockSize={20}
                    blockMargin={4}
                    fontSize={14}
                    theme={customTheme}
                    showWeekdayLabels
                    labels={{
                      totalCount: '{{count}} hours livestreamed since November 8th {{year}}'
                    }}
                    renderBlock={(block: BlockElement, activity: CalendarActivityType) =>
                      React.cloneElement(block, {
                        'data-tooltip-id': 'activity-tooltip',
                        'data-tooltip-html': `${activity.count} hours on ${formatDate(activity.date)}`
                      })
                    }
                  />
                  <ReactTooltip 
                    id="activity-tooltip"
                    className="bg-white text-gray-800 border border-gray-200 shadow-lg"
                  />
                  <div className="text-left text-sm mt-2 text-gray-300">
                    Streamed {calculateStreamPercentage(activities)}% of hours awake since November 8th 2024
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {livestreams.map(stream => (
                <div key={stream.video_id} className="bg-gray-900 shadow-md rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-l font-semibold text-white">{stream.title}</h2>
                      <p className="text-gray-400">
                        Published: {stream.published_at.split('T')[0]}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center text-gray-300 space-x-4">
                    <div>
                      <strong>Duration:</strong> {formatDuration(stream.duration)}
                    </div>
                    <VideoThumbnail videoId={stream.video_id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}