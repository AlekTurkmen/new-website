'use client';
import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import NumberTicker from "@/components/magicui/number-ticker";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function Home() {
  const [isLinkFocused, setIsLinkFocused] = useState(false);
  const { theme } = useTheme();

  const startups = [
    {
      title: "$100 / 10 Days Challenge",
      description: "My indefinite startup challenge.",
      isSpecial: true
    },
    {
      title: "Youtube Livestreams",
      description: "36.3% chance I'm live now.",
      isSpecial: false
    },
    {
      title: "Project Nepo",
      description: "Current challenge.",
      isSpecial: false
    },
    {
      title: "Project Belvedere",
      description: "Paid internship coaching service for college students.",
      isSpecial: false
    },
    {
      title: "MoCreCo",
      description: "Description",
      isSpecial: false
    },
    {
      title: "VY Luxury",
      description: "Description",
      isSpecial: false
    },
  ];

  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <p className="text-5xl sm:text-6xl font-lexend-bold">
                <NumberTicker value={100} />
              </p>
              <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold">
                STARTUPS
              </h1>
            </div>
            <p className="text-md text-gray-400"></p>
            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {startups.map((startup, index) => (
              startup.isSpecial ? (
                <NeonGradientCard
                  key={index}
                  className="min-h-[200px]"
                  neonColors={{
                    firstColor: "#ff00aa",
                    secondColor: "#00FFF1"
                  }}
                >
                  <div className="flex flex-col h-full justify-between">
                    <h2 className="text-2xl font-lexend-bold text-black dark:text-white">
                      {startup.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-right self-end">
                      {startup.description}
                    </p>
                  </div>
                </NeonGradientCard>
              ) : (
                <MagicCard
                  key={index}
                  className="cursor-pointer p-6 min-h-[200px] bg-black"
                  gradientColor={"#262626"}
                >
                  <div className="flex flex-col h-full justify-between">
                    <h2 className="text-2xl font-lexend-bold">{startup.title}</h2>
                    <p className="text-gray-400 text-right self-end">{startup.description}</p>
                  </div>
                </MagicCard>
              )
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
