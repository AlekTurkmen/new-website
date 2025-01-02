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
              {/* Title section with consistent width */}
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  [Title]
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  [Date]
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">

                <h3 className="text-xl font-lexend-bold mb-4">
                  [Headers]
                </h3>

                <p className="text-gray-300">
                  [Paragraphs]
                </p>

                <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>


                <div className="bg-gray-900 p-4 rounded-lg my-4">
                this is what code looks like <br></br>
                  <code className="text-sm">
                    Input Q<sub>Cooling</sub> (910 W) + W<sub>Electric</sub> (360 W) = Q<sub>Heating</sub> (1270 W)*
                  </code>
                  <p className="text-xs text-gray-400 mt-2">*This is ideal, meaning it won't actually be 100% efficient like this in the real world.</p>
                </div>
                
                {/* Single featured image with rounded corners */}
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/images/example-featured.webp"
                    alt="Featured image description"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* 2xn Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/grid-1.webp"
                      alt="Grid image 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/grid-2.webp"
                      alt="Grid image 2"
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