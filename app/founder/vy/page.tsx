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
                  VY LUXURY
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  October 2023 - July 2024
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                {/* Banner Image */}
                <div className="relative w-full aspect-[16/5] rounded-lg overflow-hidden">
                  <Image
                    src="/images/startups/vy/vy-banner.webp"
                    alt="VY Luxury Banner"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <p className="text-gray-300">
                  VY Luxury Eyewear is a consumer facing hyper personalized 3D printing eyewear startup. This was a solo founder experience for me, where I took the startup idea from 0 to 1. Pivoted twice before settling on a final product/service.
                </p>

                <p className="text-gray-300">
                  I built out an online store for customers to create, design, & purchase eyewear through an autonomous product pipeline.
                </p>

                {/* Website Screenshots Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/vy/website1.webp"
                      alt="Website Screenshot 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/vy/website2.webp"
                      alt="Website Screenshot 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/vy/website3.webp"
                      alt="Website Screenshot 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/vy/website4.webp"
                      alt="Website Screenshot 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  Completed iOS app + web store + back-end parameterizing CAD models.
                </p>

                <p className="text-gray-300">
                  My favorite part was the back-end product creation through Fusion {'->'} Re-arrange meshing {'->'} Blender {'->'} Texture mapping {'->'} baking {'->'} 3d print service.
                </p>

                {/* Blender Image */}
                <div className="relative w-full max-w-3xl mx-auto">
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/vy/blender.webp"
                      alt="Blender Workflow"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Lessons Learned</h3>

                <div className="space-y-4">
                  <p className="text-gray-300">Whatever you think product development time is going to take. Double it.</p>
                  
                  <p className="text-gray-300">Never ignore the problems. That sounds obvious but if you become emotional when you realize that a certain part of the business isn't going to work, you need to take responsibility and fix it right away.</p>
                  
                  <p className="text-gray-300">Always say things out loud, to family, to friends. It's rare that an idea or thought that only exists in your head is actually viable, saying things out loud elucidates potential overlooks.</p>
                  
                  <p className="text-gray-300">Unless you want to run a charity, create the business model right away. How will you make money?</p>
                  
                  <p className="text-gray-300">Making money is the most important part, even if you don't care about money. Charge the customer before you even have the full product ready to go. Fulfillment comes second, you can always refund their purchase.</p>
                  
                  <p className="text-gray-300">It's very easy for an engineering mind to iterate over and over again on creating the most perfect product. It's literally what we love doing. But in reality the quality of a product isn't what gets a startup off the ground and profitable. Steve Jobs created the high-end product behemoth that Apple is today only after Apple become a large company. The Apple we know today, is very different from the Apple in 1980 that IPO'd, and even more different from the Apple in 1997 when Steve Jobs came back. Every phase of a companies history will need different plans of attack, don't get caught up in how trillion dollar companies operate, just focus on yours first.</p>
                  
                  <p className="text-gray-300">Get to the PMF as quick as possible. Even if the product is complete dogshit. Try to take a bee line approach from A to B. Once that thin line has been crossed, then you can iterate and improve the product.</p>
                  
                  <p className="text-gray-300">If you aren't obsessed with your startup, don't do it. If you wouldn't use the product, don't do it.</p>
                  
                  <p className="text-gray-300">Sunk cost fallacy is extremely common. Never have emotional attachment to the work you do, that would impair your judgement when deciding the optimal decisions for the company.</p>
                  
                  <p className="text-gray-300">Value attracts money. Money attracts value. It's a two way street and guess what if you don't have money you have to start with providing value to the world first.</p>
                  
                  <p className="text-gray-300">Don't be scared to make someone else rich before you make yourself rich. Wealth is a delayed metric of how much value you brought others in the past.</p>
                  
                  <p className="text-gray-300">People worry all the time about making $1 million dollars. Make someone else $1 million dollars and I guarantee you that that money will be in your pockets next.</p>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">P.S. The original name and concept art before I changed it to VY was called Haestus.</p>

                {/* Haestus Image */}
                <div className="relative w-full max-w-2xl mx-auto">
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/startups/vy/haestus.webp"
                      alt="Original Haestus Concept"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-gray-300">P.S.S. The website is archived, but you can see the original concept <a href="https://vy.luxury/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">here</a>.</p>

              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}