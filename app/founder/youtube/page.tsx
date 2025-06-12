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
    className="relative block w-full aspect-video hover:transform hover:scale-105 transition-transform"
  >
    <img
      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      alt="Video thumbnail"
      className="w-full h-full object-cover rounded-md"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center">
        <span className="text-white text-xl">▶</span>
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
      'transparent',
      '#ffc1c0',
      '#ff9492',
      '#ff6b6b',
      '#ff0000'
    ],
    dark: [
      'transparent',
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

  // Helper function to adjust timestamp by subtracting 14 hours
  const adjustTimestampBy14Hours = (dateString: string): Date => {
    const originalDate = new Date(dateString);
    return new Date(originalDate.getTime() - (14 * 60 * 60 * 1000));
  };

  const formatDateShort = (dateString: string): string => {
    const adjustedDate = adjustTimestampBy14Hours(dateString);
    return adjustedDate.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit',
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
          // Subtract 14 hours from the timestamp before extracting the date
          const adjustedDate = adjustTimestampBy14Hours(stream.published_at);
          const date = adjustedDate.toISOString().split('T')[0];
          const duration = parseDurationToSeconds(stream.duration);
          const existing = dateMap.get(date) || 0;
          dateMap.set(date, existing + duration);
          maxDuration = Math.max(maxDuration, existing + duration);
        });

        const activities = Array.from(dateMap.entries()).map(([date, duration]) => {
          const hours = duration / 3600;
          let level = 0;
          
          if (hours === 0) {
            level = 0; // Transparent
          } else if (hours > 0 && hours <= 2) {
            level = 1; // >0-2 hours
          } else if (hours > 2 && hours <= 5) {
            level = 2; // 2-5 hours
          } else if (hours > 5 && hours <= 8) {
            level = 3; // 5-8 hours
          } else {
            level = 4; // 8+ hours
          }
          
          return {
            date,
            count: Math.round(hours),
            level
          };
        });

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
        <main className="max-w-7xl mx-auto py-16 px-4">
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
                    fontSize={16}
                    theme={customTheme}
                    showWeekdayLabels
                    labels={{
                      totalCount: '{{count}} hours livestreamed'
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
                  {/* <div className="text-left text-sm mt-2 text-gray-300">
                    Streamed {calculateStreamPercentage(activities)}% of hours awake since November 8th 2024
                  </div> */}
                </>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {livestreams.map(stream => (
                <div key={stream.video_id} className="bg-gray-900 shadow-md rounded-lg p-6">
                  <h2 className="text-l font-semibold text-white mb-4">{stream.title}</h2>
                  <div className="mb-4">
                    <VideoThumbnail videoId={stream.video_id} />
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>{formatDateShort(stream.published_at)}</span>
                    <span>{formatDuration(stream.duration)}</span>
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