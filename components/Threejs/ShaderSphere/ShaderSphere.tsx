'use client';

import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Scene } from './Scene';

export interface ShaderSphereRef {
  toggleAnimation: () => void;
  randomizeColors: () => void;
}

const ShaderSphere = forwardRef<ShaderSphereRef>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useImperativeHandle(ref, () => ({
    toggleAnimation: () => {
      if (!sceneRef.current) return;
      
      if (isAnimating) {
        sceneRef.current.stopAnimation();
      } else {
        sceneRef.current.startAnimation();
      }
      setIsAnimating(!isAnimating);
    },
    randomizeColors: () => {
      if (!sceneRef.current) return;
      sceneRef.current.randomizeColors();
    }
  }));

  useEffect(() => {
    if (!containerRef.current || sceneRef.current) return;

    try {
      sceneRef.current = new Scene(containerRef.current);
      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize scene:', error);
      setIsInitialized(false);
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
        setIsInitialized(false);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
});

ShaderSphere.displayName = 'ShaderSphere';
export default ShaderSphere;
