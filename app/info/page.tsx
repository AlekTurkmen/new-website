'use client';
import { useState } from 'react';
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
      title: "$100 / 10 Days Challenge",
      image: "/images/startups/100-10/thumbnail.webp",
      link: "https://www.notion.so/alekturkmen/100-10-Days-Alek-Turkmen-1360c1259cce80aa95ebd4dabd8c379f"
    },
    {
      title: "YT Livestream Dashboard",
      image: "/images/startups/youtube/thumbnail.webp",
      link: "/founder/youtube"
    },
    {
      title: "Project Nepo",
      image: "/images/startups/nepo/thumbnail.webp",
      link: "/founder/nepo"
    },
    {
      title: "Project Belvedere",
      image: "/images/startups/belvedere/thumbnail.webp",
      link: "/founder/belvedere"
    },
    {
      title: "Sticky Chicken!",
      image: "/images/startups/sticky/thumbnail.webp",
      link: "/founder/sticky"
    },
    {
      title: "VY LUXURY",
      image: "/images/startups/vy/logo.webp",
      link: "/founder/vy"
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
      title: "Being In A Frat",
      slug: "frat"
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

  // Engineer section data (formerly Projects)
  const engineer = [
    {
      title: "Queens Sculpture",
      image: "/images/projects/queens/thumbnail.webp",
      link: "/engineer/queens"
    },
    {
      title: "Heat Pump Rig",
      image: "/images/projects/heatpump/thumbnail.webp",
      link: "/engineer/heatpump"
    },
    {
      title: "Mechatronics Robot",
      image: "/images/projects/robot/IMG_2345.webp",
      link: "/engineer/robot"
    },
    {
      title: "LED Name Plate",
      image: "/images/projects/led/IMG_2378.webp",
      link: "/engineer/led"
    },
    {
      title: "Patio Retrofit",
      image: "/images/projects/patio/IMG_2914.webp",
      link: "/engineer/patio"
    },
    {
      title: "Fashion Toolbox",
      image: "/images/projects/fashion/thumbnail.webp",
      link: "/engineer/fashion"
    },
    {
      title: "Flag Frenzy",
      image: "/images/projects/flag/thumbnail.webp",
      link: "/engineer/flag"
    },
    {
      title: "Restoring 1989 BMW",
      image: "/images/projects/bmw/pro-CR.webp",
      link: "/engineer/bmw"
    },
    {
      title: "Retired Esports Pro",
      image: "/images/projects/esports/thumbnail.webp",
      link: "/engineer/esports"
    },
    {
      title: "Computer Assembly",
      image: "/images/projects/computer/thumbnail.webp",
      link: "/engineer/computer"
    },
  ];

  return (
    <>
      <div className={`${boldonse.variable} relative min-h-screen text-white font-lexend-regular bg-black`}>
        
        <main className="max-w-6xl mx-auto py-12 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-boldonse text-white mb-2">
              Alek Turkmen
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {founder.map((item, index) => (
                item.link.startsWith('http') ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                    <MagicCard
                      className="cursor-pointer p-0 bg-black overflow-hidden group relative aspect-[4/3]"
                      gradientColor={"#262626"}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          priority={index < 2}
                          className="object-cover transition-all duration-500 group-hover:opacity-20"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <h3 className="text-2xl font-lexend-bold text-white transform translate-y-[10px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{item.title}</h3>
                        </div>
                      </div>
                    </MagicCard>
                  </a>
                ) : (
                  <Link href={item.link} key={index}>
                    <MagicCard
                      className="cursor-pointer p-0 bg-black overflow-hidden group relative aspect-[4/3]"
                      gradientColor={"#262626"}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          priority={index < 2}
                          className="object-cover transition-all duration-500 group-hover:opacity-20"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <h3 className="text-2xl font-lexend-bold text-white transform translate-y-[10px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{item.title}</h3>
                        </div>
                      </div>
                    </MagicCard>
                  </Link>
                )
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

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
              {writing.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`/writing/${item.slug}`}
                    className="text-sm hover:text-gray-400 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ENGINEER SECTION (formerly PROJECTS) */}
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-lexend-bold text-white mb-2">
                ENGINEER
              </h2>
              <div className="w-full h-[1px] bg-white mt-2"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {engineer.map((item, index) => (
                <Link href={item.link} key={index}>
                  <MagicCard
                    className="cursor-pointer p-0 bg-black overflow-hidden group relative aspect-[4/3]"
                    gradientColor={"#262626"}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:opacity-20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="text-lg font-lexend-bold text-white transform translate-y-[10px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{item.title}</h3>
                      </div>
                    </div>
                  </MagicCard>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
} 