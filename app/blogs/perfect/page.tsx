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

    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <ScrollProgress className="top" />
          
          <div className="relative">
            <main className="max-w-4xl mx-auto py-16 px-4">

              {/* Title section with consistent width */}
              <div className="text-center mb-8">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  The Perfect Day
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  October 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
                <p className="text-sm text-gray-400 mt-6">
                  Press 'P' to {isPaused ? 'resume' : 'pause'} the glitch effect
                </p>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  I open my eyes, and I can see the sunrise. Without looking at the weather app I can tell it's gonna be pretty good weather. I'm on my 20th floor studio apartment balcony and I'm criss-cross apple saucing on my outdoor coach. On my lap is the book I was just reading and just before this I was meditating. I love waking up super early to the sunrise and letting my brain warm up before I start work. There is something so natural to how the sun feels on my pajamas, it's like I'm a plant photosynthesizing. Also, Andrew Huberman told me it has tons of health benefits.
                </p>

                <p className="text-gray-300">
                  After I've read through about 30 pages of "Atomic Habits" by James Clear - I'll get out my laptop, grab a bagel, a banana, a gallon of Poland Spring and a nature valley bar, and start working on whatever I was doing the night before. I'm the CEO of my 20 employee startup called <GlitchText />. Most of my work is management level, or what I like to call 'The Macro' work. The company has been bootstrapped in its entirety; and to this day, my co-founder <GlitchText />, and I, have a 50-50 equity split in the company.
                </p>

                <p className="text-gray-300">
                  Time flies fast when you're <s>working</s> having fun. By now it's lunchtime and I have a client meeting at the local coffee shop. The client's name is <GlitchText /> and he's one of my biggest supporters and fans in the company. We talk a bit, and at this point in my life, I have excellent people skills and can convince people easily. He has major connections with product distributions in the US and after a bit of share negotiations he agrees to sell my product in <GlitchText /> and <GlitchText />.
                </p>

                <p className="text-gray-300">
                  After the coffee chat, I head over to the gym. The gym is my happy place. It serves as a great mediator between the two sections of working hours I have. One cold shower later and I'm back into work. My <s>first</s> <s>second</s> third cup of coffee for the day is now at my desk and I sip it slowly. The rest of the day is consistent work up until about 7 or 8 pm. Everyone in my life knows that I can't be reached until 8 pm, since that's when I "get off work". I like to think that I can disconnect from work but realistically there's always something to do involving the company. My company has fully consumed the free space in my brain, but that's exactly how I like it.
                </p>

                <p className="text-gray-300">
                  Some nights I'll stay up all night just grinding since I have this burning idea on my mind. Those nights usually start out with 30 minutes of restless sleep where my brain just keeps thinking. Publicly, I get around 7-8 hours of sleep, but just between you and me, it's more like 5-6. There's just something so satisfying about working late into the night. I'm either a night owl by birth or it's the college studying nostalgia I just can't shake.
                </p>

                <p className="text-gray-300">
                  Although I have a set schedule, I try to always change things up. Habits are good, but autopilot is horrible. Novelty keeps me from burning out. I have built in checkpoints every month where I check in on my progress and assess how efficient I am. My team and I meet at the end of each week to perform a Weekly Check In, the tally right now is W.C.I. #237. This week in our online weekly check in, <GlitchText /> fell asleep on camera and we all had the funniest time trying to wake them up. When <GlitchText /> finally woke up they chimed into the conversation like nothing happened and we all started dying laughing again. I love the people I work with.
                </p>

                <p className="text-gray-300">
                  I don't have a girlfriend and I don't have any pets. But I do have a group of like-minded friends and mentors that I like to go out with on occasion. The majority of my friends are people in the startup industry. Younger, older, the same age, they all support me and I support them. In the most cliche way possible, it took me a while to find "my people" but I'm glad I finally did.
                </p>

                <p className="text-gray-300">
                  To Be Continued...
                </p>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }