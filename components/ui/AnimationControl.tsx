'use client';

import { RainbowButton } from '@/components/magicui/rainbow-button';
import { ShaderSphereRef } from '@/components/Threejs/ShaderSphere/ShaderSphere';
import { useRef, useState, useImperativeHandle, forwardRef } from 'react';

export interface AnimationControlRef {
  togglePlayback: () => void;
}

interface AnimationControlProps {
  shaderSphereRef: React.RefObject<ShaderSphereRef>;
}

export const AnimationControl = forwardRef<AnimationControlRef, AnimationControlProps>(
  ({ shaderSphereRef }, ref) => {
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayback = () => {
      shaderSphereRef.current?.toggleAnimation();
      setIsPlaying(!isPlaying);
    };

    const handleRandomize = () => {
      shaderSphereRef.current?.randomizeColors();
    };

    useImperativeHandle(ref, () => ({
      togglePlayback
    }));

    return (
      <div className="flex gap-1">
        <div onClick={togglePlayback}>
          <RainbowButton>
            {isPlaying ? '⏸' : '⏵'}
          </RainbowButton>
        </div>
        <div onClick={handleRandomize}>
          <RainbowButton>
            R
          </RainbowButton>
        </div>
      </div>
    );
  }
);

AnimationControl.displayName = 'AnimationControl'; 