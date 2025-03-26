'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

interface Note {
  text: string;
  side: 'left' | 'right';
  referenceId: string;
}

interface NoteOffsets {
  [key: string]: number;
}

// Move notes object outside component to prevent recreation on each render
const notes: { [key: string]: Note } = {
  "1": {
    text: "Fun fact: it's 1,350 times smaller volumetrically than the real thing.",
    side: "right",
    referenceId: "note-1"
  }
};

export default function Home() {
    const [noteOffsets, setNoteOffsets] = useState<NoteOffsets>({});

    // Debounce the update function
    const updateNotePosition = useCallback(() => {
      requestAnimationFrame(() => {
        const offsets: NoteOffsets = {};
        Object.entries(notes).forEach(([key, note]) => {
          const element = document.getElementById(note.referenceId);
          if (element) {
            const rect = element.getBoundingClientRect();
            offsets[key] = rect.top + window.scrollY - 10;
          }
        });
        setNoteOffsets(offsets);
      });
    }, []);

    useEffect(() => {
      // Initial position
      updateNotePosition();

      let scrollTimeout: number;
      const handleScroll = () => {
        if (scrollTimeout) {
          window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(updateNotePosition);
      };

      // Update on scroll and resize
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', updateNotePosition);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateNotePosition);
        if (scrollTimeout) {
          window.cancelAnimationFrame(scrollTimeout);
        }
      };
    }, [updateNotePosition]);

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
                  Queens Sculpture
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  January 2024 | MacDonald Park, Forest Hills | Unveiling Spring 2025
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">

                <p className='text-gray-300'>
                  The Queens Sculpture is a project I've been working on for the past year. It's a 6ft tall sculpture that spells out the word "Queens". It's a symbol for the Queens community to show off their vibrant multiculturalism.
                </p>

                <p className="text-gray-300">
                  Larry Ng is the originator of the idea and very good entrepreneur friend of mine.
                </p>

                <p className="text-gray-300">
                  Before the projects inception, Larry mentioned commissioning a sculpture that spelled out <Link href="https://www.queens-nyc.com" target="_blank" className="text-purple-400 hover:text-purple-300">"Queens" to be placed in MacDonald Park in Forest Hills. </Link>
                I was immediately interested and created my first rendition of the design in Revit.
                </p>

                <h3 className="text-2xl font-lexend-bold mt-12 mb-6">Revit Renderings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/queens/QS-FloorLevel-Noon.webp"
                      alt="Floor level view of Queens Sculpture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/queens/QS-EyeSight-Noon.webp"
                      alt="Eye level view of Queens Sculpture"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  After a couple back and forths between Larry and I, we were already on our second, third, then final renditions of the sculpture. The picture to the right is an HDR from Google Maps with the sculpture rendered into view. I realized Fusion360 was a little easier for me and my workflow so I switched to that. 
                </p>

                <h3 className="text-2xl font-lexend-bold mt-12 mb-6">Fusion360 + Google Maps HDR Renderings</h3>
                <div className="space-y-4">
                  <div className="relative w-full aspect-[16/5] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/queens/QS-noback.webp"
                      alt="Queens Sculpture without background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/queens/QS-realworld.webp"
                      alt="Queens Sculpture in real world context"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  As a visualization tool to help with the approval process, I 3D printed a miniature replica that is 25 times smaller than the planned sculpture. <span id="note-1" className="text-red-500 font-bold relative">[1]</span>
                </p>

                <h3 className="text-2xl font-lexend-bold mt-12 mb-6">Miniature 3D Print + IRL Photo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/queens/QS-3DPrint.webp"
                      alt="3D printed miniature of Queens Sculpture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/queens/QS-realworld2.webp"
                      alt="Queens Sculpture in context"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  And to catch you up to where we are as of writing this, the designs have been sent over to WhiteClouds, a third party company that specializes in outdoor sculptures. The dimensions of the statue will be approximately 6 ft high x 22 ft wide x 1.5 ft deep and weigh in at almost 2 tons.
                </p>

                <p className="text-gray-300">
                  Official unveiling is scheduled for Spring 2025.
                </p>

                {/* Social and Fundraising Section */}
                <div className="mt-16">
                  <h3 className="text-2xl font-lexend-bold text-center mb-8">Support & Follow Us</h3>
                  <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto">
                    {/* GoFundMe */}
                    <a 
                      href="https://gofund.me/51df7ec5" 
                      target="_blank" 
                      className="aspect-square flex items-center justify-center hover:opacity-75 transition-opacity"
                    >
                      <svg className="w-64 h-64" viewBox="0 0 146 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.74389 26.9699C8.52587 26.9699 10.5408 27.719 11.6066 29.2012H11.7397V27.3529H16.569V42.5564C16.569 47.6021 12.406 50 8.27601 50C4.26319 50 0.349611 47.7188 0.316192 43.4391H5.11203C5.22874 45.3538 6.61073 46.2365 8.20968 46.2365C9.80812 46.2365 11.44 45.254 11.44 42.8227V40.4916H11.3068C10.2246 41.7903 8.40917 42.4895 6.74389 42.4895C2.69766 42.4895 0 38.6263 0 34.6798C0 30.7334 2.69766 26.9699 6.74389 26.9699ZM54.6354 27.3365V35.9456C54.6354 37.2279 55.6344 38.2603 56.8832 38.2603C58.132 38.2603 59.1315 37.2279 59.1315 35.9456V27.3365H64.26V35.8624C64.26 40.2253 61.2626 42.8895 56.8832 42.8895C52.5871 42.8895 49.5064 40.325 49.5064 35.8624V27.3365H54.6354ZM137.729 26.9365C142.192 26.9365 145.739 30.267 145.739 34.9297C145.739 35.3642 145.698 35.7317 145.666 35.9706L145.656 36.0454H134.948C135.131 37.9934 136.347 39.0927 137.829 39.0927C138.655 39.0927 139.497 38.7591 140.224 37.961L140.327 37.8438H145.273C143.99 41.2741 140.86 42.8726 137.729 42.8726C133.716 42.8726 129.719 40.2253 129.719 34.9297C129.719 30.267 133.266 26.9365 137.729 26.9365ZM27.1097 26.8033C31.756 26.8033 35.5523 30.084 35.5523 34.813C35.5523 39.5425 31.756 42.8227 27.1097 42.8227C22.4805 42.8227 18.734 39.5754 18.734 34.813C18.734 30.0506 22.4805 26.8033 27.1097 26.8033ZM100.912 18.1443V42.4895H96.0823V40.4746H95.9491C94.6335 41.9569 92.8016 42.7893 90.9533 42.7893C86.7904 42.7893 84.0259 38.9929 84.0259 34.8798C84.0259 30.7668 86.7904 26.9864 90.9533 26.9864C92.5517 26.9864 94.4669 27.5858 95.6494 29.0182H95.7825V18.1443H100.912ZM44.8941 17.7114C45.8432 17.7114 46.8257 17.8276 47.6751 18.0276V22.1741C47.292 22.0743 46.9923 22.0239 46.6592 22.0239C45.2772 22.0239 44.0782 22.5905 44.0782 24.4219V27.3529H47.2088V31.4994H44.0782V42.4895H38.9492V31.4994H36.7179V27.3529H38.9492V23.3566C38.9492 19.5761 41.6304 17.7114 44.8941 17.7114ZM76.3997 26.9365C79.2305 26.9365 81.8614 28.9349 81.8614 32.8315V42.4895H76.7329V33.8973C76.7329 32.3817 75.7169 31.3663 74.4347 31.3663C73.1524 31.3663 72.1365 32.4151 72.1365 33.8973V42.4895H67.008V27.3529H71.8368V29.2511H71.9699C73.119 27.6861 74.9509 26.9365 76.3997 26.9365ZM122.259 26.9365C124.974 26.9365 127.555 28.9683 127.555 32.7817V42.4895H122.426V33.7143C122.426 32.2984 121.493 31.3663 120.328 31.3663C119.145 31.3663 118.213 32.3153 118.213 33.7143V42.4895H113.084V33.7143C113.084 32.2984 112.152 31.3663 110.986 31.3663C109.803 31.3663 108.871 32.3153 108.871 33.7143V42.4895H103.742V27.3529H108.571V29.2511H108.704C109.72 27.719 111.435 26.9534 113.067 26.9534C114.649 26.9534 116.298 27.7858 117.297 29.5678H117.43C118.696 27.7524 120.511 26.9365 122.259 26.9365ZM92.4355 31.4825C90.5538 31.4825 89.0217 33.0146 89.0217 34.8963C89.0217 36.778 90.5538 38.3266 92.4355 38.3266C94.3173 38.3266 95.8489 36.778 95.8489 34.8963C95.8489 33.0146 94.3173 31.4825 92.4355 31.4825ZM27.1432 31.3663C25.2949 31.3663 23.7962 32.8979 23.7962 34.813C23.7962 36.7282 25.2949 38.2603 27.1432 38.2603C28.9915 38.2603 30.4902 36.7282 30.4902 34.813C30.4902 32.8979 28.9915 31.3663 27.1432 31.3663ZM8.25955 31.4825C6.46112 31.4825 4.99583 32.9313 4.99583 34.7297C4.99583 36.5282 6.46112 37.9934 8.25955 37.9934C10.058 37.9934 11.5068 36.5282 11.5068 34.7297C11.5068 32.9313 10.058 31.4825 8.25955 31.4825ZM137.762 30.6999C136.413 30.6999 135.264 31.5657 134.881 33.2979H140.56C140.243 31.5992 139.111 30.6999 137.762 30.6999ZM143.221 22.2486L144.166 25.0285L145.105 22.2486H145.738V25.5365H145.313V23.5956C145.313 23.5288 145.315 23.4178 145.318 23.2625C145.321 23.1072 145.322 22.9406 145.322 22.7633L144.384 25.5365H143.942L142.994 22.7633V22.864C142.994 22.9448 142.997 23.0671 143.001 23.2322C143.006 23.3972 143.008 23.518 143.008 23.5956V25.5365H142.583V22.2486H143.221ZM142.184 22.2486V22.6404H141.076V25.5365H140.626V22.6404H139.518V22.2486H142.184ZM72.8692 14.4173C78.6352 14.4173 83.6654 17.5515 86.3595 22.207H59.3793C62.0734 17.5515 67.1037 14.4173 72.8692 14.4173ZM88.3651 6.94749C89.3646 5.94801 90.9996 5.94801 91.9985 6.94749C92.998 7.94645 92.998 9.58139 91.9985 10.5809L88.1261 14.4533C87.1271 15.4523 85.4922 15.4523 84.4927 14.4533L84.4046 14.3607C83.4946 13.3553 83.524 11.7886 84.4927 10.8199L88.3651 6.94749ZM53.8468 6.85938C54.8522 5.94893 56.4189 5.9783 57.3876 6.94749L61.2605 10.8199C62.2595 11.8189 62.2595 13.4538 61.2605 14.4533C60.2611 15.4523 58.6261 15.4523 57.6272 14.4533L53.7542 10.5809C52.7552 9.58139 52.7552 7.94645 53.7542 6.94749L53.8468 6.85938ZM72.8368 0L72.9478 0.00238588C74.3102 0.0610352 75.4059 1.19348 75.4059 2.56964V8.04568C75.4059 9.45903 74.2501 10.6153 72.8368 10.6153C71.4239 10.6153 70.2676 9.45903 70.2676 8.04568V2.56964C70.2676 1.15629 71.4239 0 72.8368 0Z" fill="#02A95C"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/queenstheworldsborough/" 
                      target="_blank" 
                      className="aspect-square flex items-center justify-center hover:opacity-75 transition-opacity"
                    >
                      <svg className="w-32 h-32" viewBox="0 0 551.034 551.034" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="instagram-gradient" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                            <stop offset="0" style={{ stopColor: '#E09B3D' }}></stop>
                            <stop offset="0.3" style={{ stopColor: '#C74C4D' }}></stop>
                            <stop offset="0.6" style={{ stopColor: '#C21975' }}></stop>
                            <stop offset="1" style={{ stopColor: '#7024C4' }}></stop>
                          </linearGradient>
                        </defs>
                        <g>
                          <path style={{ fill: 'url(#instagram-gradient)' }} d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>
                          <path style={{ fill: 'url(#instagram-gradient)' }} d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"/>
                          <circle style={{ fill: 'url(#instagram-gradient)' }} cx="418.306" cy="134.072" r="34.149"/>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </main>

            {/* Right side notes */}
            <div className="hidden lg:block lg:absolute lg:top-0 lg:left-[calc(50%+400px)] lg:w-64 lg:pl-10">
              {Object.entries(notes)
                .filter(([_, note]) => note.side === "right")
                .map(([key, note]) => (
                  <div 
                    key={key} 
                    className="text-sm absolute transition-all duration-200"
                    style={{
                      top: `${noteOffsets[key] || 0}px`
                    }}
                  >
                    <span className="text-red-500 font-bold">[{key}]</span>{" "}
                    <span className="text-red-500">{note.text}</span>
                  </div>
                ))}
            </div>

            {/* Mobile notes */}
            <div className="lg:hidden mt-8 px-4">
              <div className="space-y-4">
                {Object.entries(notes)
                  .filter(([_, note]) => note.side === "right")
                  .map(([key, note]) => (
                    <div 
                      key={key} 
                      className="text-sm"
                    >
                      <span className="text-red-500 font-bold">[{key}]</span>{" "}
                      <span className="text-red-500">{note.text}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }