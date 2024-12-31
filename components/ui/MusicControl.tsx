'use client';

import { RainbowButton } from '@/components/magicui/rainbow-button';
import { useAudio } from '@/contexts/AudioContext';
import { useEffect } from 'react';

export function MusicControl() {
  const { isPlaying, togglePlayback, isClient } = useAudio();

  // Add keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'KeyM' && !event.repeat && 
          !(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
        event.preventDefault();
        togglePlayback();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [togglePlayback]);

  // Show current state: 🔊 when playing, 🔇 when muted
  const buttonContent = !isClient ? '🔇' : (isPlaying ? '🔊' : '🔇');

  return (
    <div onClick={togglePlayback}>
      <RainbowButton>
        {buttonContent}
      </RainbowButton>
    </div>
  );
} 