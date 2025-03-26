'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <ScrollProgress className="top" />
          
          <div className="relative">
            <main className="max-w-4xl mx-auto py-16 px-4">
              {/* Title section */}
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  LED Name Plate
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  December 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  My sister's birthday is coming up soon so I wanted to make her a cool gift.
                </p>

                <p className="text-gray-300">
                  I have some previous experience with building <Link href="/projects/fashion" className="text-blue-400 hover:text-blue-300">LED based gifts</Link>, but for this one I wanted the main focus to be centered around the lighting and just an absolutely in your face bright name plate. I made a quick OnShape rendering of what I was envisioning, then translated that to an AutoCAD 2D laser cut instruction set.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/Part Studio 1.webp"
                      alt="OnShape Prototype"
                      fill
                      className="object-contain bg-gray-900"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/Black Acrylic.webp"
                      alt="Black Acrylic"
                      fill
                      className="object-contain bg-gray-900"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  My first instinct as an engineer is to create a prototype. So I did. Out of cardboard and a hot glue gun.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/IMG_2365.webp"
                      alt="Cardboard Prototype"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/IMG_2370.webp"
                      alt="Cardboard Prototype"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  The prototyping went pretty well and I'm glad I make a prototype since the objects center of gravity was a little off center. The protruding letters would make it really easy for the object to tip forward. Easy fix, just added more weight to the other side.
                </p>

                <p className="text-gray-300">
                  The internal component is a simple arduino connected with a button and an LED strip. The button controls which colors the LEDs should display (essentially clicking through the rainbow). For material, the entire thing is made from either black or white acrylic and the pieces are connected via glue or geometry tolerancing.
                </p>

                <p className="text-gray-300">
                  I used a 6"x12" white acrylic board and a 18"x12" black acrylic board, and I absolutely packed these boards to the brim with cutouts. For the white acrylic board I used 72% material and the black acrylic board I came in at 94.6% material usage.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/IMG_2367.webp"
                      alt="Laser Cut Machine"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/White Acrylic.webp"
                      alt="White Acrylic 2D"
                      fill
                      className="object-contain bg-gray-900"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/Black Acrylic.webp"
                      alt="Black Acrylic 2D"
                      fill
                      className="object-contain bg-gray-900"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  After a little bit of LED soldering (6 hours straight) and glueing the pieces together (2 hours) the build was finally complete and ready for gifting.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/IMG_2372.webp"
                      alt="Soldering the LEDs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/IMG_2377.webp"
                      alt="Final Assembly"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/IMG_2378.webp"
                      alt="LED Demo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/led/IMG_6285.webp"
                      alt="Final Product"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }