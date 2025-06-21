'use client';
import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';

const boldonse = localFont({
  src: '../../public/fonts/Boldonse/Boldonse-Regular.ttf',
  variable: '--font-boldonse',
  display: 'swap',
});

export default function Info() {
  const [isLinkFocused, setIsLinkFocused] = useState(false);
  const { theme } = useTheme();

  // Founder section data
  const founder = [
    {
      title: "Livestreams",
      link: "/founder/youtube"
    },
    {
      title: "Luckily",
      link: "https://www.useluckily.com"
    },
    {
      title: "$100 / 10 Days",
      link: "https://www.notion.so/alekturkmen/100-10-Days-Alek-Turkmen-1360c1259cce80aa95ebd4dabd8c379f"
    },
    {
      title: "Sticky Chicken!",
      link: "/founder/sticky"
    },
    {
      title: "VY LUXURY",
      link: "https://vy.luxury"
    }
  ];

  // Projects section data
  const projects = [
    {
      title: "Vibe Mixing",
      link: "/projects/vibe-mixing"
    },
    {
      title: "Entrepreneurmaxxing",
      link: "https://entrepreneurmaxxing.com"
    },
    {
      title: "SovereignTyper",
      link: "https://sovereigntyper.com"
    },
    {
      title: "Queens Sculpture",
      link: "https://www.queens-nyc.com"
    }
  ];

  // Engineer section data
  const engineer = [
    {
      title: "Parallel Distribution",
      link: "https://paralleldistribution.com"
    },
    {
      title: "Northrop Grumman",
      link: "https://www.northropgrumman.com/"
    },
    {
      title: "JBB",
      link: "https://www.jbb.com/"
    },
    {
      title: "Restoring 1989 BMW",
      link: "/engineer/bmw"
    }
  ];

    // Writing section data
    const writing = [
      {
        title: "For Parents",
        slug: "parents"
      },
      {
        title: "My First Startup Failed",
        slug: "first-fail"
      },
      {
        title: "The Answer To The Universe",
        slug: "universe"
      },
      {
        title: "The Perfect Day",
        slug: "perfect"
      },
      {
        title: "Personality Tests",
        slug: "personality"
      },
      {
        title: "My First Blog",
        slug: "first"
      }
    ];

  return (
    <>
      <div className={`${boldonse.variable} relative min-h-screen text-white font-lexend-regular bg-black`}>
        
        <main className="max-w-6xl mx-auto py-12 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-boldonse text-white mb-2">
              <Link href="/" className="hover:text-red-500 transition-colors duration-200">
                Alek Turkmen
              </Link>
            </h1>
          </div>

          {/* MOBILE LAYOUT - FOUNDER AND PROJECTS STACKED */}
          <div className="mb-10 md:hidden">
            {/* FOUNDER SECTION */}
            <div className="mb-10">
              <div className="mb-4">
                <h2 className="text-xl font-lexend-bold text-white mb-1">
                  FOUNDER
                </h2>
                <div className="w-full h-[1px] bg-white"></div>
              </div>
              
              <div className="ml-4">
                {founder.map((item, index) => (
                  <div key={`founder-item-${index}`} className="mb-2">
                    {item.link.startsWith('http') ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white transition-colors duration-200 underline-dotted-gray"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link 
                        href={item.link} 
                        className="text-white transition-colors duration-200 underline-dotted-gray"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECTS SECTION */}
            <div className="mb-10">
              <div className="mb-4">
                <h2 className="text-xl font-lexend-bold text-white mb-1">
                  PROJECTS
                </h2>
                <div className="w-full h-[1px] bg-white"></div>
              </div>

              <div className="ml-4">
                {projects.map((item, index) => (
                  <div key={`projects-item-${index}`} className="mb-2">
                    <Link href={item.link} className="text-white transition-colors duration-200 underline-dotted-gray">
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - FOUNDER AND PROJECTS SIDE BY SIDE */}
          <div className="mb-10 hidden md:block">
            <div className="flex flex-row gap-8 mb-2">
              <div className="flex-1">
                <h2 className="text-xl font-lexend-bold text-white mb-1">
                  FOUNDER
                </h2>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-lexend-bold text-white mb-1 text-right">
                  PROJECTS
                </h2>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white mb-4"></div>
            
            <div className="flex flex-row gap-8">
              {/* FOUNDER SECTION */}
              <div className="flex-1">
                <div>
                  {founder.map((item, index) => (
                    <div key={`founder-item-${index}`} className="mb-2">
                      {item.link.startsWith('http') ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white transition-colors duration-200 underline-dotted-gray"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link 
                          href={item.link} 
                          className="text-white transition-colors duration-200 underline-dotted-gray"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECTS SECTION */}
              <div className="flex-1">
                <div>
                  {projects.map((item, index) => (
                    <div key={`projects-item-${index}`} className="mb-2 text-right">
                      <Link href={item.link} className="text-white transition-colors duration-200 underline-dotted-gray">
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* MOBILE LAYOUT - ENGINEER AND WRITING STACKED */}
          <div className="mb-8 md:hidden">
            {/* ENGINEER SECTION */}
            <div className="mb-8">
              <div className="mb-4">
                <h2 className="text-xl font-lexend-bold text-white mb-1">
                  ENGINEER
                </h2>
                <div className="w-full h-[1px] bg-white"></div>
              </div>
              
              <div className="ml-4">
                {engineer.map((item, index) => (
                  <div key={`engineer-item-${index}`} className="mb-2">
                    {item.link.startsWith('http') ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white transition-colors duration-200 underline-dotted-gray"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link 
                        href={item.link} 
                        className="text-white transition-colors duration-200 underline-dotted-gray"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* WRITING SECTION */}
            <div className="mb-10">
              <div className="mb-4">
                <h2 className="text-xl font-lexend-bold text-white mb-1">
                  WRITING
                </h2>
                <div className="w-full h-[1px] bg-white"></div>
              </div>

              <div className="ml-4">
                {writing.map((item, index) => (
                  <div key={index} className="mb-2">
                    <Link 
                      href={`/writing/${item.slug}`}
                      className="text-white transition-colors duration-200 underline-dotted-gray"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - ENGINEER AND WRITING SIDE BY SIDE */}
          <div className="mb-8 hidden md:block">
            <div className="flex flex-row gap-8 mb-2">
              <div className="flex-1">
                <h2 className="text-xl font-lexend-bold text-white mb-1">
                  ENGINEER
                </h2>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-lexend-bold text-white mb-1 text-right">
                  WRITING
                </h2>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white mb-4"></div>
            
            <div className="flex flex-row gap-8">
              {/* ENGINEER SECTION */}
              <div className="flex-1">
                <div>
                  {engineer.map((item, index) => (
                    <div key={`engineer-item-${index}`} className="mb-2">
                      {item.link.startsWith('http') ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white transition-colors duration-200 underline-dotted-gray"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link 
                          href={item.link} 
                          className="text-white transition-colors duration-200 underline-dotted-gray"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* WRITING SECTION */}
              <div className="flex-1">
                <div>
                  {writing.map((item, index) => (
                    <div key={index} className="mb-2 text-right">
                      <Link 
                        href={`/writing/${item.slug}`}
                        className="text-white transition-colors duration-200 underline-dotted-gray"
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
} 