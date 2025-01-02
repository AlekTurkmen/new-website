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
                  Sticky Chicken!
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  September 2024 - October 2024
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <h3 className="text-2xl font-lexend-bold text-white">Overview</h3>
                <p className="text-gray-300">
                  We are Sticky Chicken! We develop and operate founder led organic content social marketing for a variety of entrepreneurial types.
                </p>
                <p className="text-gray-300">
                  Our work is challenging, but we deliver results that a solo founder couldn't achieve on their own. We live and breathe founder-led marketing—it's our specialty. Because of this, we have a DFY (do it for you) model for our clients.
                </p>

                <h3 className="text-2xl font-lexend-bold text-white">Our Full Service Solution</h3>

                {/* 2x2 Grid for Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Branding Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-lexend-bold text-gray-200">Branding</h4>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/sticky/image2.webp"
                        alt="Branding Example"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* LinkedIn/X Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-lexend-bold text-gray-200">LinkedIn/X (Text)</h4>
                    <div className="relative aspect-[5/4] rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/sticky/41f89112-1c79-49c3-a64d-a933c5e11d00.webp"
                        alt="LinkedIn/X Example"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Reels/TikTok Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-lexend-bold text-gray-200">Reels/TikTok (Short Form)</h4>
                    <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/sticky/51c0686f-8b15-4df2-a547-2923cb0bf21b.webp"
                        alt="Reels/TikTok Example"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* YouTube Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-lexend-bold text-gray-200">YouTube/Internal (Long Form)</h4>
                    <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/sticky/7eedd81e-1551-4fd8-bd35-f1bfd8810a7e.webp"
                        alt="YouTube Example"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">The Team</h3>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Alek Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-lexend-bold text-gray-200">Alek (Co-Founder)</h4>
                    <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/sticky/image.webp"
                        alt="Alek"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300">Age: 21</p>
                      <p className="text-gray-300">The social founder. Opinionated.</p>
                      <p className="text-gray-300">College: The Cooper Union</p>
                      <div className="space-y-1">
                        <Link href="https://www.linkedin.com/in/alekturkmen/" target="_blank" className="block text-purple-400 hover:text-purple-300">LinkedIn</Link>
                        <Link href="https://www.instagram.com/alekturkmen/" target="_blank" className="block text-purple-400 hover:text-purple-300">Instagram</Link>
                        <Link href="https://x.com/AlekTurkmen" target="_blank" className="block text-purple-400 hover:text-purple-300">X (Twitter)</Link>
                        <Link href="https://www.youtube.com/@alekturkmen" target="_blank" className="block text-purple-400 hover:text-purple-300">YouTube</Link>
                        <Link href="https://www.alekturkmen.com/" target="_blank" className="block text-purple-400 hover:text-purple-300">Personal Website</Link>
                      </div>
                    </div>
                  </div>

                  {/* Gaudi Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-lexend-bold text-gray-200">Gaudi (Co-Founder)</h4>
                    <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                      <Image
                        src="/images/startups/sticky/image 1.webp"
                        alt="Gaudi"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300">Age: 22</p>
                      <p className="text-gray-300">The calm founder. Technical.</p>
                      <p className="text-gray-300">College: The Cooper Union</p>
                      <div className="space-y-1">
                        <Link href="https://www.linkedin.com/in/gautaman-asirwatham-058037243/" target="_blank" className="block text-purple-400 hover:text-purple-300">LinkedIn</Link>
                        <Link href="https://www.instagram.com/gautaman.asirwatham/" target="_blank" className="block text-purple-400 hover:text-purple-300">Instagram</Link>
                        <Link href="https://discord.com/invite/SPaEneuE" target="_blank" className="block text-purple-400 hover:text-purple-300">Discord</Link>
                        <Link href="https://www.youtube.com/@gaudi9570" target="_blank" className="block text-purple-400 hover:text-purple-300">YouTube</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <p className="text-gray-300">
                    Alek & Gaudi have been working together for over 2 years. They met in ME-103: Statics (back in January 2022). They both study Mechanical Engineering @ The Cooper Union in NYC.
                  </p>
                  <p className="text-gray-300 mt-4">
                    They starting working together on homeworks and projects, then anything entrepreneurial outside of school. Cold calling, side hustles, and now startups.
                  </p>
                  <p className="text-gray-300 mt-4">
                    Their previous venture was a startup called{' '}
                    <Link href="/startups/vy" className="text-purple-400 hover:text-purple-300">VY Luxury</Link>
                    , a consumer facing hyper personalized 3D printing eyewear startup. Their biggest problem with VY was not having an organic client acquisition strategy. Being the sharks that they are, they decided to scrap VY Luxury and pursue client acquistion through founder led organic social media content instead.
                  </p>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Company Timeline</h3>

                {/* September 2024 */}
                <div className="space-y-4">
                  <h4 className="text-xl font-lexend-bold text-gray-200">September 2024</h4>
                  <div className="space-y-2">
                    <p className="text-gray-300"><span className="font-bold">9.1:</span> Original plan was to create client acquisition strategies for youtubers and content creators.</p>
                    <p className="text-gray-300"><span className="font-bold">9.8 - 9.15:</span> Plan changed to building a product/service relating to small business client acquisition on social media.</p>
                    <p className="text-gray-300">We spent an entire day cold calling a specific industry business to see if they were interested:</p>
                    <ul className="list-disc pl-6 text-gray-300">
                      <li>Bars & nightclubs. Nope.</li>
                      <li>Real estate brokers. Nope.</li>
                      <li>Niche doctors. Nope.</li>
                      <li>Country clubs. Nope.</li>
                    </ul>
                    <p className="text-gray-300">Realized we needed our first clients to be warm outreaches.</p>
                    <p className="text-gray-300">NYC rockstar. Yeup.</p>
                    <p className="text-gray-300"><span className="font-bold">9.15:</span> Acquired Client #1</p>
                    <p className="text-gray-300"><span className="font-bold">9.22:</span> First Pitch</p>
                    <p className="text-gray-300"><span className="font-bold">9.25:</span> Acquired Client #2</p>
                    <p className="text-gray-300">Our first dollar</p>
                    <p className="text-gray-300"><span className="font-bold">9.28:</span> By this point our clientele shifted to SaaS founders and artists/influencers</p>
                  </div>
                </div>

                {/* October 2024 */}
                <div className="space-y-4">
                  <h4 className="text-xl font-lexend-bold text-gray-200">October 2024</h4>
                  <div className="space-y-2">
                    <p className="text-gray-300"><span className="font-bold">10.1:</span> Acquired Client #3</p>
                    <p className="text-gray-300"><span className="font-bold">10.8:</span> Lost Client #3</p>
                    <p className="text-gray-300"><span className="font-bold">10.28:</span> Change to Open Source Model</p>
                    <p className="text-gray-300"><span className="font-bold">11.1:</span> Found other projects to work on</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}