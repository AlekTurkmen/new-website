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

  // Founder section data (formerly Startups)
  const founder = [
    {
      title: "Youtube Livestreams",
      link: "/founder/youtube"
    },
    {
      title: "Luckily",
      link: "https://www.useluckily.com"
    },
    {
      title: "Project Nepo",
      link: "https://www.notion.so/alekturkmen/2nd-Attempt-Project-Nepo-12-24-14f0c1259cce800ca744ddb254ff747e"
    },
    {
      title: "Project Belvedere",
      link: "https://www.notion.so/alekturkmen/1st-Attempt-Project-Belvedere-11-24-1360c1259cce8014b2c1db6d89874096"
    },
    {
      title: "$100 / 10 Days Challenge",
      link: "https://www.notion.so/alekturkmen/100-10-Days-Alek-Turkmen-1360c1259cce80aa95ebd4dabd8c379f"
    },
    {
      title: "Sticky Chicken!",
      link: "/founder/sticky"
    },
    {
      title: "VY LUXURY (Acquired)",
      link: "https://vy.luxury"
    }
  ];

  // Engineer section data (formerly Projects)
  const engineer = [
    {
      title: "Parallel Distribution",
      link: "https://paralleldistribution.com"
    },
    {
      title: "Queens Sculpture",
      link: "https://www.queens-nyc.com"
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
    },
    {
      title: "Heat Pump Rig",
      link: "/engineer/heatpump"
    }
  ];

    // Writing section data (formerly Blogs)
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

          {/* FOUNDER SECTION (formerly STARTUPS) */}
          <div className="mb-10">
            <div className="mb-4">
              <h2 className="text-xl font-lexend-bold text-white mb-2">
                FOUNDER
              </h2>
              <div className="w-full h-[1px] bg-white mt-2"></div>
            </div>
            
            <div className="ml-4">
              {founder.map((item, index) => (
                <div key={`founder-item-${index}`} className="mb-2">
                  {item.link.startsWith('http') ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-red-500 transition-colors duration-200 underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link 
                      href={item.link} 
                      className="text-white hover:text-red-500 transition-colors duration-200 underline"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ENGINEER SECTION (formerly PROJECTS) */}
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-lexend-bold text-white mb-2">
                ENGINEER
              </h2>
              <div className="w-full h-[1px] bg-white mt-2"></div>
            </div>
            
            <div className="ml-4">
              {engineer.map((item, index) => (
                <div key={`engineer-item-${index}`} className="mb-2">
                  {item.link.startsWith('http') ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-red-500 transition-colors duration-200 underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link 
                      href={item.link} 
                      className="text-white hover:text-red-500 transition-colors duration-200 underline"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

                    {/* WRITING SECTION (formerly BLOGS) */}
                    <div className="mb-10">
            <div className="mb-4">
              <h2 className="text-xl font-lexend-bold text-white mb-2">
                WRITING
              </h2>
              <div className="w-full h-[1px] bg-white mt-2"></div>
            </div>

            <div className="ml-4">
              {writing.map((item, index) => (
                <div key={index} className="mb-2">
                  <Link 
                    href={`/writing/${item.slug}`}
                    className="text-white hover:text-red-500 transition-colors duration-200 underline"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
} 