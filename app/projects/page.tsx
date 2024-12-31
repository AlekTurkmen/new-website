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

  const projects = [
    {
      title: "Queens Sculpture",
      description: "NYC Parks sculpture unveiling Spring 2025.",
      image: "/images/projects/queens/thumbnail.webp",
      link: "/projects/queens"
    },
    {
      title: "Heat Pump Rig",
      description: "Using flammable explosives to move thermal energy",
      image: "/images/projects/heatpump/thumbnail.webp",
      link: "/projects/heatpump"
    },
    {
      title: "Mechatronics Robot",
      description: "Description",
      image: "/images/projects/robot/thumbnail.webp",
      link: "/projects/robot"
    },
    {
      title: "LED Name Plate",
      description: "Description",
      image: "/images/projects/led/thumbnail.webp",
      link: "/projects/led"
    },
    {
      title: "Patio Retrofit",
      description: "Description",
      image: "/images/projects/patio/thumbnail.webp",
      link: "/projects/patio"
    },
    {
      title: "Fashion Toolbox",
      description: "Description",
      image: "/images/projects/fashion/thumbnail.webp",
      link: "/projects/fashion"
    },
    {
      title: "Flag Frenzy",
      description: "Description",
      image: "/images/projects/flag/thumbnail.webp",
      link: "/projects/flag"
    },
    {
      title: "Restoring 1989 BMW",
      description: "Description",
      image: "/images/projects/bmw/thumbnail.webp",
      link: "/projects/bmw"
    },
    {
      title: "Retired Esports Pro",
      description: "Description",
      image: "/images/projects/esports/thumbnail.webp",
      link: "/projects/esports"
    },
    {
      title: "Computer Assembly",
      description: "Description",
      image: "/images/projects/computer/thumbnail.webp",
      link: "/projects/computer"
    },
  ];

  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-5xl sm:text-6xl font-lexend-bold text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.9)] drop-shadow-[0_0_30px_rgba(192,132,252,0.6)]">
                PROJECTS
              </h1>
            </div>
            <p className="text-md text-gray-400">Page coming soon.</p>
            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {projects.map((project, index) => (
              <Link href={project.link} key={index}>
                <MagicCard
                  className="cursor-pointer p-0 min-h-[300px] bg-black overflow-hidden group relative"
                  gradientColor={"#262626"}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:opacity-20"
                    />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h2 className="text-2xl font-lexend-bold text-white transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">{project.title}</h2>
                      <p className="text-gray-400 text-right self-end transform translate-x-[20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">{project.description}</p>
                    </div>
                  </div>
                </MagicCard>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
