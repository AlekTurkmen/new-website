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
                  Project Nepo
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  December 2024 - January 2025
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <h3 className="text-2xl font-lexend-bold text-white">$100 / 10 Days Challenge</h3>
                <p className="text-gray-300">
                  <Link href="https://www.notion.so/alekturkmen/2nd-Attempt-Project-Nepo-Current-14f0c1259cce800ca744ddb254ff747e" target="_blank" className="text-purple-400 hover:text-purple-300">Link to the challenge</Link>
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Timeline & Events</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-lexend-bold text-gray-200">Day 0</h4>
                    <p className="text-gray-300">Formulate Project Nepo plan - AI Networking Copilot for college students</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-lexend-bold text-gray-200">Day 1-3</h4>
                    <p className="text-gray-300">Offer creation, client acquisition strategy, and go to market plan</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-lexend-bold text-gray-200">Day 4-15</h4>
                    <p className="text-gray-300">Offer Creation - Sourcing emails and linkedin of potential hiring decision makers</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-lexend-bold text-gray-200">Day 4-20</h4>
                    <p className="text-gray-300">Client Acquisition Strategy - Sourcing college students, by scrapping linkedin</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-lexend-bold text-gray-200">Day 4-30</h4>
                    <p className="text-gray-300">Go To Market Plan - Mass emailing college students, onboarding them through website and free leads</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-lexend-bold text-gray-200">Day 9</h4>
                    <p className="text-gray-300">Made $100</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">End Results</h3>

                <h4 className="text-xl font-lexend-bold text-gray-200">Go To Market Plan</h4>
                <p className="text-gray-300">
                  <Link href="https://www.useluckily.com/" target="_blank" className="text-purple-400 hover:text-purple-300">www.useluckily.com</Link>
                </p>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h5 className="text-lg font-lexend-bold text-white mb-4">Cold Email Example</h5>
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
{`Hey <leadFirstName>,

<emailWord1> your linkedin and <emailWord2> to see it <emailWord3> from all the <emailWord4> accounts that are out there.

<emailWord5>, I <emailWord6> you might be looking to get a job/internship. <emailWord7> you're applying to <emailWord8> and sending mass cold emails to <emailWord9>?

Given that you're a student @ NYU looking into <userInterest> jobs, I wanted to share with you some people you should cold email for a job:

<employerName1> | <employerPosition1> @ <employerCompany1> | LinkedIn<"employerLinkedinURL1">

<employerName2> | <employerPosition2> @ <employerCompany2> | LinkedIn<"employerLinkedinURL2">

<employerName3> | <employerPosition3> @ <employerCompany3> | LinkedIn<"employerLinkedinURL3">

I drafted up some cold emails you can send each founder here<"leadLuckilyLink">.

Best,

-Person<"https://www.linkedin.com/in/alekturkmen/"> Who Slides Into DMs (Professionally)`}
                  </pre>
                </div>

                <p className="text-gray-300">Then potential user is brought to this website for onboarding flow:</p>
                <Link href="https://www.useluckily.com/connects/alek-turkmen-001" target="_blank" className="text-purple-400 hover:text-purple-300">
                  www.useluckily.com/connects/alek-turkmen-001
                </Link>

                <h4 className="text-xl font-lexend-bold text-gray-200">Client Acquisition Strategy</h4>
                <p className="text-gray-300">Slack Channels + PhantomBuster + Home made linkedin scrapper</p>

                <h4 className="text-xl font-lexend-bold text-gray-200">Offer Creation</h4>
                <p className="text-gray-300">Apollo / Lead411 / Growjo + Home made website api scrapper</p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Things I Learned</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>I realized again how painful B2C startups are when trying to maximize profit over time</li>
                  <li>Startups must start out solo then evolve over time to add more co-founders</li>
                  <li>Having a full stack website template saves 10 days of work</li>
                  <li>Having a full stack client acquisition template saves 10 days of work</li>
                  <li>Before I go into my next challenge, I want to create a website template and client acquisition template that I can use for every project I have after this</li>
                  <li>A startup can never have multiple end decision makers, there has to be just one</li>
                </ul>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}