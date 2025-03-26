'use client';

import ShaderSphere, { ShaderSphereRef } from '@/components/Threejs/ShaderSphere/ShaderSphere';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useRef, useEffect } from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';

const boldonse = localFont({
  src: '../public/fonts/Boldonse/Boldonse-Regular.ttf',
  variable: '--font-boldonse',
  display: 'swap',
});

export default function Home() {
  const shaderSphereRef = useRef<ShaderSphereRef>(null);

  return (
    <>
      <div className={`${boldonse.variable} relative min-h-screen flex flex-col text-white font-lexend-regular`}>
        <ShaderSphere ref={shaderSphereRef} />
        
        {/* Main Content Area */}
        <main className="flex-grow flex items-center justify-center">
          <Link href="/info">
            <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-boldonse max-w-[1600px] leading-tight text-red-100 sm:text-white opacity-100 hover:opacity-100 hover:text-red-600 transition-all duration-300">
              Alek Turkmen
            </h1>
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
