'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';

export default function Home() {
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
                  Retired Semi-Pro eSports Athlete
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  2017-2020
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                {/* YouTube Video */}
                <div className="relative w-full aspect-video">
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/pTurWHx6dt4?si=fYDCs_AnW8bK_cgb"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  Alek has a very diverse background and has branched off in many different directions in the past. One of his branch-offs during highschool, was his excessive obsession with becoming an eSports pro. A popular MOBA game called League of Legends was at the front of Alek's brain. And over the course of a couple years of disciplined practice, VOD review, and competing in multiple tournaments Alek became quite skilled and even reached a very high ranking on North American servers.
                </p>

                <p className="text-gray-300">
                  On weekends in between schoolwork, Alek competed in many tournaments in his local area. Creating a team with his friends from high school and in some tournaments winning prize money.
                </p>

                <div className="relative w-full max-w-3xl mx-auto">
                  <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/esports/Tournament.webp"
                      alt="Tournament"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Alek regularly attended bi-weekly Roosevelt Field Mall LoL tournaments with highschool friends.
                  </p>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  Since his middle school days, Alek had been chasing the idea of becoming a professional eSports player and continued to practice and review game footage in his free time outside of school. Unfortunately, or fortunately, depending on which perspective you take, Alek eventually grew out of this dream and instead turned his attention towards career growth and academia towards the end of highschool.
                </p>

                <p className="text-gray-300">
                  Alek's interests in eSports remain to this day, however his days of practicing to become a professional are over.
                </p>

                <p className="text-gray-300">
                  One thing to note before dismissing video games as mindless and stupid, is the potential prize money at pro-level tournaments and an ever increasing salary of professional players in the eSports world. World class eSports tournaments can have prizes ranging from thousands to millions of dollars and salaries of top players easily reach the millions a year mark. Reaching that high of a level of play is nearly impossible and not only takes years of practice and fine tuning of skills, but also takes genetic luck. This "genetic luck" includes someone's innate reaction time (which makes a huge difference in fast paced video games) and fluid IQ (meaning how fast they can think and act in intense situations).
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  When I look back on it, I have no regrets obsessively playing video games in my highschool days. I'm a very competitive person and in my eyes all those years of grinding were simply solidifying my competitive nature as a person. Yes, it's easy to look back and find all of the bad things that came from my time playing video games, but I don't do that. For one, it's already in the past. And secondly, there is always a positive outcome from anything. It's up to the person to find that positive angle and learn from it.
                </p>
                                {/* Banner Image */}
                                <div className="relative w-full aspect-[16/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/esports/lol banner.webp"
                    alt="League of Legends banner"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}