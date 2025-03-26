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
                  Restoring BMW 1989 E32
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  May 2022
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">

                {/* YouTube Video */}
                <div className="relative w-full aspect-video">
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/oijohfj3Rp8?si=GXalvOTavqlYepwb"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <p className="text-gray-300">
                  Restoring BMW's flagship sedan to it's near-original.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Background of Car</h3>

                <p className="text-gray-300">
                  The BMW E32 is the second generation of the BMW 7 Series luxury cars and this specific model was made in 1989. This model also came with a straight-six engine, which is a piston engine with six cylinders arranged in a straight line along the car's crankshaft. Interestingly enough, the straight-six engine is much longer than a V6 and that's what gives the BMW E32 its long look. The E32 was among the most technologically advanced series of cars in its day and introduced many new features like dual climate control and traction control. Nowadays it's quite old, but it still handles pretty well in fast and windy road conditions.
                </p>

                <p className="text-gray-300">
                  My dad has had this car for quite a while and it spends most of its time in the garage. It's not a commuter car and it hasn't been properly maintained over the years. Given the green light from my dad, he's allowed me to work on the car and make any changes I deem necessary. I spent the last summer repairing and replacing many things and here's what that looked like.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Seat Twist Fix</h3>

                <p className="text-gray-300">
                  The BMW E32 and many cars made during this time faced an extremely common defect in the front two seats. The problem, known as seat twist, is relatively straightforward in concept but tricky to fix. It involves taking the seat out of the car, pulling out the drive cables that mechanically adjust the seat, and cutting/heating up/twisting the drive cables back into their original condition. I'll explain more in-depth in the next paragraph, but this was by far the hardest task I faced when restoring my BMW.
                </p>

                <p className="text-gray-300">
                  So seat twist is when the electric motors in the seat are misaligned on either side causing the seat to not be square with the steering wheel. This problem isn't going to hinder someone from driving a car but if left unrepaired it can get very annoying and uncomfortable for the driver.
                </p>

                <p className="text-gray-300">
                  The infamous seat-back twist is a common issue that can be caused by either the outer sheath of the drive cable(s) stretching or the inner cable shortening due to wind-up, resulting in disengagement either at the motor or the worm drive responsible for adjusting the seat back. Fortunately, there are several approaches to fix this problem. The repair process can be carried out with the seat either in or out of the car. In my case, as it was my first attempt, I opted to remove the seat and work on it upside down on a pad for better access and visibility.
                </p>

                <div className="relative w-full max-w-3xl mx-auto">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/bmw/Seat Repair.webp"
                      alt="Seat Repair"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Flipped drivers seat.
                  </p>
                </div>

                <p className="text-gray-300">
                  I used a method involving heating up the casing of the drive cables to disengage them from the seat. By carefully heating the thimble, it became easier to remove it. Once the drive cables were disengaged I manually aligned the seat to fix the twist. The difficulty comes into play when putting the cables back into the motors, so I measured and cut a section of the tube to the appropriate length. And afterward, I used heat once again to fuse the thimble back onto the tube (motor). Luckily I got it right the first time, and putting the seat back into the car was simply following the steps I had done before in reverse order.
                </p>

                <div className="relative w-full max-w-3xl mx-auto">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/bmw/Seat Removal.webp"
                      alt="Seat Removal"
                      fill
                      className="object-cover rotate-90"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Above is what a back seat passanger would see without the driver's seat in the car.
                  </p>
                </div>

                <p className="text-gray-300">
                  I am pretty happy with how this came out and I'm most proud of this repair, ensuring a secure and reliable fix for the seat-back twist problem.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Battery Replacement</h3>

                <p className="text-gray-300">
                  The BMW needed a complete battery replacement so I ordered a BMW 61212353809 Ep Battery 85Ah{' '}
                  <Link href="https://www.bmwpartsdeal.com/parts/bmw-ep_battery_85ah-61212353809.html" target="_blank" className="text-purple-400 hover:text-purple-300">
                    link
                  </Link>
                  {' '}from online.
                </p>

                <div className="relative w-full max-w-lg mx-auto">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/bmw/Battery Model.webp"
                      alt="Battery Model"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    CAD of battery.
                  </p>
                </div>

                <p className="text-gray-300">
                  In my case, the battery for the E32 is kept under the second row passenger seat. Usually on combustion engine cars they are found within the front engine compartment.
                </p>

                <div className="relative w-full max-w-3xl mx-auto">
                  <div className="relative w-full aspect-[6/5] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/bmw/Open Battery.webp"
                      alt="Open Battery"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Back row with seat cushion removed revealing battery.
                  </p>
                </div>

                <p className="text-gray-300">
                  One thing to note when completing a direct battery replacement, always take the negative terminal connection off the old battery first, and always place the positive terminal connection on the new battery first.
                </p>

                <p className="text-gray-300">
                  Other than that, the replacement for batteries is very straightforward. In my specific case, the battery housing was slightly rusted and slight signs of acid burn due to very slow acid leakage could be seen. The damage wasn't significant enough to be deemed replaceable.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Driving Lights Replacement</h3>

                <p className="text-gray-300">
                  The BMW's rear brake lights were either not working at all or were not reliable enough for safe road use. Even after replacing the bulbs, the issue persisted. Eventually, I identified the problem: a damaged fuse in the fuse box located in the front engine compartment. The car still had its original spare fuses and they worked perfectly, although I would recommend buying brand new ones.
                </p>

                <p className="text-gray-300">
                  What intrigued me was the variety of electrical components in the car for a vehicle made in the 80s. Each electrical component requires different currents, ranging from 7.5A to 30A. And I also found it fascinating that the fuse box was not located near the onboard battery, but instead under the front hood.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/bmw/Fuse Box.webp"
                      alt="Fuse Box"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/bmw/Fuse Instructions.webp"
                      alt="Fuse Instructions"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/bmw/Hidden Cables.webp"
                      alt="Hidden Cables"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-400 text-center">
                  Fuse box, fuse instructions, and internal wiring of car (from left to right).
                </p>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}