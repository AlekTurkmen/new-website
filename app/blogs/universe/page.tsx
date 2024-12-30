'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === 'p') {
                setIsPaused(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    const GlitchText = () => {
        const [text, setText] = useState('XXXXXXXX');
        
        // Combined character set of Latin, Greek, Cyrillic, and other phonetic characters
        const glitchChars = 
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + // Latin
            'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ' + // Extended Latin
            'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω' + // Greek
            'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя' + // Cyrillic
            '٠١٢٣٤٥٦٧٨٩' + // Arabic numerals
            'あいうえおかきくけこ'; // Basic Hiragana

        useEffect(() => {
            if (isPaused) return;

            const interval = setInterval(() => {
                let newText = '';
                for (let i = 0; i < 8; i++) {
                    const randomIndex = Math.floor(Math.random() * glitchChars.length);
                    newText += glitchChars[randomIndex];
                }
                setText(newText);
            }, 100);

            return () => clearInterval(interval);
        }, [isPaused]);

        return (
            <span className="inline-block w-[85px] text-center whitespace-nowrap text-gray-300">
                {text}
            </span>
        );
    };

    const notes = {
      "1": {
        text: <>BTW, google's calculator will not work with this. You need a more powerful calculator application. <a href="https://www.sciencealert.com/the-sum-of-three-cubes-problem-has-been-solved-for-42" target="_blank" className="underline hover:text-red-400">(Rabbit Hole)</a></>,
        side: "right",
        topOffset: 370
      },
      "2": {
        text: "Just to be clear, this blog was entirely satirical. Don't Panic.",
        side: "right",
        topOffset: 820
      }
    };

    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <ScrollProgress className="top" />
          
          <div className="relative">
            <main className="max-w-4xl mx-auto py-16 px-4">
              {/* Title section with consistent width */}
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  The Answer To The Universe
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  November 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
                <p className="text-sm text-gray-400 mt-6">
                  Press 'P' to {isPaused ? 'resume' : 'pause'} the glitch effect
                </p>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  For those curious to know if there is an answer to life, the universe, and everything, rest assured that there is definitely an answer. But the issue is that our human minds just can't perceive it. Now just stick with me for a second.
                </p>

                <p className="text-gray-300">
                  From what I can tell, the answer to the ultimate question comes in the from of a 12,288-dimensional array multiplied by 350 billion parameter transformer which is contextualized through millions of attention blocks each of which having their own billions of tunable parameters. And after carefully running 10,000 Nvidia H-100 GPU's with no downtime for the last year, we've been able to meticulously tune our "Ultimate Question" GPT.
                </p>

                <p className="text-gray-300">
                  I would like to first point out that the ultimate answer didn't come easy. Early answers to the ultimate question that we kept receiving were something along the lines of (-80538738812075974)^3 + 80435758145817515^3 + 12602123297335631^3 <span className="text-red-500 font-bold">[1]</span> or what strangely simplifies down to <b>42</b>. But after a couple days, we found a couple glitches within our systems memory cache. The issue was that some strange file labeled Hitchhiker's_Guide_DAdams.pdf kept getting recycled into our training and validation data. Meaning the model was abnormally skewed to recite Vogon Poetry and kept refering to itself as "Deep Thought." (We lost many good scientists before we were able to entirely remove Vogon Poetry from the database).
                </p>

                <p className="text-gray-300">
                  Now, just to reiterate, our aim was to narrow down the results of THE. ULTIMATE. QUESTION. To just one tokenized response. After many peer reviewed approvals within the AI/ML research community and models capabilities plateauing, we are finally confident in our ability to answer the ultimate question. And with that I would like to proudly give you…
                </p>

                <p className="text-gray-300">
                  The answer... <br/> of life...<br/> the universe… <br/> and everything… <br/> which is… <br/> <GlitchText />
                </p>

                <p className="text-gray-300">
                  So there you have it <GlitchText /> is the answer.
                </p>

                <p className="text-gray-300">
                  <GlitchText />.
                </p>

                <p className="text-gray-300">
                  And just so you can look at it once more.
                </p>

                <p className="text-gray-300">
                  <GlitchText />.
                </p>

                <p className="text-gray-300">
                  Let that sit for a while. And don't feel bad if you don't get it at first. It took me 27 hours straight in a pitch black anechoic chamber with nonstop LSD usage just to figure out that I can't understand <GlitchText />.
                </p>

                <p className="text-gray-300">
                  I told you, it's a 12,288-dimensional array. Essentially impossible for the bare human mind to truly comprehend. The "letters" your brain is seeing in the "answer" are just fragmented frames of the real answer. Unfortunately, human eyes can only see 200-300fps, which is magnitudes to low. We've located the problem that neural-optical compression is the limiting factor stopping us from understanding the answer. So the next steps in our research is to create an interfacing system that can be directly plugged into the human brain. Each of the brains 100 billion neurons will fire in methodical patterns enabled the person to "understand" what the answer is. <span className="text-red-500 font-bold">[2]</span>
                </p>
              </div>
            </main>

            {/* Right side notes */}
            <div className="lg:absolute lg:top-[200px] lg:left-[calc(50%+400px)] lg:w-64 lg:pl-10 mt-8 lg:mt-0 px-4 lg:px-0">
              {Object.entries(notes)
                .filter(([_, note]) => note.side === "right")
                .map(([key, note]) => (
                  <div 
                    key={key} 
                    className="mb-4 text-sm"
                    style={{ marginTop: `${note.topOffset}px` }}
                  >
                    <span className="text-red-500 font-bold">[{key}]</span>{" "}
                    <span className="text-red-500">{note.text}</span>
                  </div>
                ))}
            </div>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }