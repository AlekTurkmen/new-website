'use client';
import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";

export default function Home() {
  const [isLinkFocused, setIsLinkFocused] = useState(false);
  const { theme } = useTheme();

  const projects = [
    {
      title: "Queens Sculpture",
      description: "NYC Parks sculpture unveiling Spring 2025.",
    },
    {
      title: "Heat Pump Rig",
      description: "Description",
    },
    {
      title: "Mechatronics Robot",
      description: "Description",
    },
    {
      title: "LED Name Plate",
      description: "Description",
    },
    {
      title: "Patio Retrofit",
      description: "Description",
    },
    {
      title: "Fashion Toolbox",
      description: "Description",
    },
    {
      title: "Flag Frenzy",
      description: "Description",
    },
    {
      title: "Restoring 1989 BMW",
      description: "Description",
    },
    {
      title: "Retired Esports Pro",
      description: "Description",
    },
    {
      title: "Computer Assembly",
      description: "Description",
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
              <MagicCard
                key={index}
                className="cursor-pointer p-6 min-h-[200px] bg-black"
                gradientColor={"#262626"}
              >
                <div className="flex flex-col h-full justify-between">
                  <h2 className="text-2xl font-lexend-bold">{project.title}</h2>
                  <p className="text-gray-400 text-right self-end">{project.description}</p>
                </div>
              </MagicCard>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
