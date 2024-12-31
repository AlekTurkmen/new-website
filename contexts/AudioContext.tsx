'use client';

import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface AudioContextType {
  isPlaying: boolean;
  currentTime: number;
  togglePlayback: () => void;
  isClient: boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startTimeRef = useRef<number>(0);
  const pathname = usePathname();

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true);
    const savedPlayState = localStorage.getItem('musicIsPlaying');
    if (savedPlayState) {
      setIsPlaying(JSON.parse(savedPlayState));
    }
  }, []);

  // Save play state to localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('musicIsPlaying', JSON.stringify(isPlaying));
    }
  }, [isPlaying, isClient]);

  // Initialize audio instance
  useEffect(() => {
    if (!isClient) return;

    const initAudio = async () => {
      try {
        // Store current time before switching tracks
        const currentTime = audioRef.current?.currentTime || startTimeRef.current;

        // Determine which track to play based on the current route
        const audioPath = pathname === '/' ? '/music/ambient.main.mp3' : '/music/ambient.side.wav';

        // Create new audio instance with the appropriate track
        const newAudio = new Audio(audioPath);
        newAudio.loop = true;
        newAudio.volume = 0.2;
        newAudio.currentTime = currentTime;

        // If previous audio exists, clean it up
        if (audioRef.current) {
          audioRef.current.pause();
        }

        audioRef.current = newAudio;

        // If should be playing, attempt to play
        if (isPlaying) {
          try {
            await newAudio.play();
          } catch (error) {
            console.warn("Audio autoplay failed, user interaction required");
            setIsPlaying(false);
          }
        }
      } catch (error) {
        console.warn("Audio initialization failed:", error);
      }
    };

    initAudio();

    const timeInterval = setInterval(() => {
      if (audioRef.current) {
        startTimeRef.current = audioRef.current.currentTime;
      }
    }, 1000);

    return () => {
      clearInterval(timeInterval);
      if (audioRef.current) {
        startTimeRef.current = audioRef.current.currentTime;
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [pathname, isPlaying, isClient]);

  const togglePlayback = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        startTimeRef.current = 0;
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.warn("Audio playback toggle failed:", error);
    }
  };

  const value = {
    isPlaying,
    currentTime: startTimeRef.current,
    togglePlayback,
    isClient
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
} 