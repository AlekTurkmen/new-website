'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';
import Link from 'next/link';

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
                  Computer Assembly
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  September 2015
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">

                <p className="text-gray-300">
                  During middle school, all of my friends were getting their own personal computers and of course I wanted one too. I remember I would plead with my parents to buy me a PC, and after some persistence, they eventually agreed.
                </p>

                <p className="text-gray-300">
                  At that time, constructing a computer using individual components was more economical than purchasing a pre-made one (this was back when graphics cards and processors had reasonable prices). With a checklist of the parts we needed to buy, I went with my Dad to Microcenter to get all the components. Before going, I used{' '}
                  <Link href="https://pcpartpicker.com/" target="_blank" className="text-purple-400 hover:text-purple-300">
                    PCPartPicker
                  </Link>
                  {' '}to make sure that all the components I was buying were compatible with each other.
                </p>

                <p className="text-gray-300">
                  At the store, my Dad and I found someone to help us pick out each of the parts. Recalling this information is a bit hazy, but I think one or two of the parts were out of stock and I ended up with a pre-owner graphics card and an extra $60 antivirus. The staff who was helping us managed to convince my Dad that I desperately needed to get an antivirus on my computer, "for my protection". I would have done the same thing if I was buying a computer for my son, but I remember thinking strongly that we spent an extra and pointless $60 on an antivirus.
                </p>

                <p className="text-gray-300">
                  In all honesty, I wish I never got that anti-virus. Not just because it was a pointless way to spend money but also because it would safe guard me from all of the dangers of the internet. Yes, getting hacked is bad. Yes, having undetectable malware is awful. But having antivirus wouldn't have forced me to accelerate my learning by navigating all of the dangers of the internet.
                </p>

                <p className="text-gray-300">
                  To continue, I left Microcenter that day feeling absolutely elated. Upon reaching home, I delved straight into learning how to construct a computer, relying solely on Youtube videos for guidance. For six continuous hours, I persevered through the process, which, for the most part, was relatively uncomplicated. However, attaching the CPU to the motherboard proved to be a crucial moment that could not be messed up. I had a one-shot-don't-mess-this-up moment with the thermal glue gun and my CPU. After completely botching the glue job, I managed to attach my CPU to the motherboard, officially completing my first ever computer build.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  Here is a time-lapse video of my 12 year old self building a computer. I took this on September 17, 2015.
                </p>

                {/* YouTube Video */}
                <div className="relative w-full aspect-video">
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/ipKpffc1yOo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <h3 className="text-xl font-lexend-bold text-white">PC Specs List:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Processor: Intel Core i5-6500 @ 3.20GHz</li>
                  <li>Motherboard: Gigabyte AB350-Gaming 3</li>
                  <li>Graphics: NVIDIA GeForce GTX 960 4GB GDDR5</li>
                  <li>Power Supply: CX Series CX650M</li>
                  <li>RAM: 16GB DDR4</li>
                  <li>Case Tower: Corsair Carbide Series SPEC-02</li>
                  <li>HDD: Toshiba 1 TB</li>
                  <li>Monitor: ASUS VS239</li>
                </ul>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  Its really satisfying knowing that once I took that leap of faith into completely new territory, I felt confident enough to guide my friends build their computers. I would go on to build and assistance several more computer builds for my friends all the way until the end of highschool.
                </p>

                <p className="text-gray-300">
                  Something I would take away from this is that building a computer from parts is a challenging yet rewarding experience that provides a practical and valuable lesson in perseverance, problem-solving, and attention to detail. Nothing feels better than when the computer you just spent 6 hours straight building successfully boots up for the first time. But that rush of dopamine at the end isn't why I build computers. I build computers because I love the process of struggling through a problem and figuring out what's wrong. Taking ownership of a solution is what in the end drives me.
                </p>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}