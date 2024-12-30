'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';

export default function Home() {

    const notes = {
      "1": {
        text: "This is a margin note that adds additional context to the main text. It's smaller and colored red.",
        side: "right",
        topOffset: 270
      }
    };

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
                  Personality Tests
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  May 2020 - ∞
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  Just a quick tracker of my personality tests I've taken over the years.
                </p>
                <p className="text-gray-300">
                  Updating indefinitely. I used this{' '}
                  <a 
                    href="https://www.16personalities.com/free-personality-test" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    website
                  </a>.
                </p>

                {/* October 2024 */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-lexend-bold">October 26 2024</h3>
                  <p className="text-xl text-gray-300">Architect</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/images/blogs/personality/2024-1.webp"
                        alt="2024 Personality Test Result 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/images/blogs/personality/2024-2.webp"
                        alt="2024 Personality Test Result 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* September 2023 */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-lexend-bold">September 20 2023</h3>
                  <p className="text-xl text-gray-300">Commander</p>
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/personality/2023.webp"
                      alt="2023 Personality Test Result"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* April 2021 */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-lexend-bold">April 12 2021</h3>
                  <p className="text-xl text-gray-300">Entrepreneur</p>
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/personality/2021.webp"
                      alt="2021 Personality Test Result"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* May 2020 */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-lexend-bold">May 2nd 2020</h3>
                  <p className="text-xl text-gray-300">Logician</p>
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/personality/2020.webp"
                      alt="2020 Personality Test Result"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </main>

            <Footer />
          </div>
        </div>
      </>
    );
  }