'use client';

import ShaderSphere, { ShaderSphereRef } from '@/components/Threejs/ShaderSphere/ShaderSphere';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { AnimationControl, AnimationControlRef } from '@/components/ui/AnimationControl';
import { useRef, useEffect } from 'react';

export default function Home() {
  const shaderSphereRef = useRef<ShaderSphereRef>(null);
  const animationControlRef = useRef<AnimationControlRef>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.code === 'Space' && !event.repeat) {
        event.preventDefault();
        animationControlRef.current?.togglePlayback();
      } else if (event.code === 'KeyR' && !event.repeat) {
        event.preventDefault();
        shaderSphereRef.current?.randomizeColors();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex flex-col text-white font-lexend-regular">
        <ShaderSphere ref={shaderSphereRef} />
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-lexend-bold max-w-[1600px] leading-tight">
            ALEK TURKMEN
          </h1>
        </main>
        {/* Animation Control Buttons */}
        <div className="flex gap-6">
          <AnimationControl ref={animationControlRef} shaderSphereRef={shaderSphereRef} />
        </div>
        <Footer />
      </div>
    </>
  );
}
