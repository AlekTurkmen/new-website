'use client';

import { useEffect, useRef, useState } from 'react';
import { Scene } from './Scene';

export default function ShaderSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

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
}
