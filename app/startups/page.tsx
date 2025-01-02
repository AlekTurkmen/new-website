'use client';
import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isLinkFocused, setIsLinkFocused] = useState(false);
  const { theme } = useTheme();

  const startups = [
    {
      title: "$100 / 10 Days Challenge",
      description: "My indefinite startup challenge",
      image: "/images/startups/100-10/thumbnail.webp",
      link: "https://www.notion.so/alekturkmen/100-10-Days-Alek-Turkmen-1360c1259cce80aa95ebd4dabd8c379f"
    },
    {
      title: "Youtube Livestreams Dashboard",
      description: "All my livestreams in one place",
      image: "/images/startups/youtube/thumbnail.webp",
      link: "/startups/youtube"
    },
    {
      title: "Project Nepo",
      description: "AI Networking Copilot",
      image: "/images/startups/nepo/thumbnail.webp",
      link: "/startups/nepo"
    },
    {
      title: "Project Belvedere",
      description: "Job coaching service for college students",
      image: "/images/startups/belvedere/thumbnail.webp",
      link: "/startups/belvedere"
    },
    {
      title: "Sticky Chicken!",
      description: "Founder led UGC social marketing",
      image: "/images/startups/sticky/thumbnail.webp",
      link: "/startups/sticky"
    },
    {
      title: "VY Luxury",
      description: "D2C Hyper Personalized 3D Printed Eyewear",
      image: "/images/startups/vy/logo.webp",
      link: "/startups/vy"
    }
  ];

  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-5xl sm:text-6xl font-lexend-bold text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.9)] drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]">
                STARTUPS
              </h1>
            </div>
            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {startups.map((startup, index) => (
              startup.link.startsWith('http') ? (
                <a href={startup.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <MagicCard
                    className="cursor-pointer p-0 min-h-[300px] bg-black overflow-hidden group relative"
                    gradientColor={"#262626"}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={startup.image}
                        alt={startup.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:opacity-20"
                      />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h2 className="text-2xl font-lexend-bold text-white transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">{startup.title}</h2>
                        <p className="text-gray-400 text-right self-end transform translate-x-[20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">{startup.description}</p>
                      </div>
                    </div>
                  </MagicCard>
                </a>
              ) : (
                <Link href={startup.link} key={index}>
                  <MagicCard
                    className="cursor-pointer p-0 min-h-[300px] bg-black overflow-hidden group relative"
                    gradientColor={"#262626"}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={startup.image}
                        alt={startup.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:opacity-20"
                      />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h2 className="text-2xl font-lexend-bold text-white transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">{startup.title}</h2>
                        <p className="text-gray-400 text-right self-end transform translate-x-[20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">{startup.description}</p>
                      </div>
                    </div>
                  </MagicCard>
                </Link>
              )
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
