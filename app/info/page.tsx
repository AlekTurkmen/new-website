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
      image: "/images/founder/100-10.webp",
      link: "https://www.notion.so/alekturkmen/100-10-Days-Alek-Turkmen-1360c1259cce80aa95ebd4dabd8c379f"
    },
    {
      title: "Luckily",
      image: "/images/founder/luckily.webp",
      link: "https://www.useluckily.com"
    },
    {
      title: "Project Nepo",
      image: "/images/founder/nepo.webp",
      link: "/founder/nepo"
    },
    {
      title: "Project Belvedere",
      image: "/images/founder/belvedere.webp",
      link: "/founder/belvedere"
    },
    {
      title: "Sticky Chicken!",
      image: "/images/founder/sticky.webp",
      link: "/founder/sticky"
    },
    {
      title: "VY LUXURY",
      image: "/images/founder/vy.webp",
      link: "https://vy.luxury"
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
      title: "Parallel Distribution",
      image: "/images/engineer/parallel.webp",
      link: "https://paralleldistribution.com"
    },
    {
      title: "Queens Sculpture",
      image: "/images/engineer/queens.webp",
      link: "https://www.queens-nyc.com"
    },
    {
      title: "Heat Pump Rig",
      image: "/images/engineer/heatpump/thumbnail.webp",
      link: "/engineer/heatpump"
    },
    {
      title: "Northrop Grumman",
      image: "/images/engineer/NG.webp",
      link: "https://www.northropgrumman.com/"
    },
    {
      title: "LED Name Plate",
      image: "/images/engineer/led/IMG_2378.webp",
      link: "/engineer/led"
    },
    {
      title: "Fashion Toolbox",
      image: "/images/engineer/fashion/thumbnail.webp",
      link: "/engineer/fashion"
    },

    {
      title: "Restoring 1989 BMW",
      image: "/images/engineer/bmw/pro-CR.webp",
      link: "/engineer/bmw"
    },
    {
      title: "JBB",
      image: "/images/engineer/jbb.webp",
      link: "https://www.jbb.com/"
    },
    {
      title: "Computer Assembly",
      image: "/images/engineer/computer.webp",
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