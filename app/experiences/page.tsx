'use client';
import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const [isLinkFocused, setIsLinkFocused] = useState(false);

  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
              EXPERIENCES
            </h1>
            <p className="text-md text-gray-400"></p>
            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>
          
          
        </main>

        <Footer />
      </div>
    </>
  );
}
