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
                  Mechatronics - Robot Battles
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  January - May 2024
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  I took a sumo robotics class this semester and built a torque maximizing, center of gravity lowering, opponent capturing and enemy plowing mechatronic robot. Say that 5 times fast.
                </p>

                <p className="text-gray-300">
                  The mechatronics class is a 16 week long course where the first half is devoted to learning the mechanics and electronics (hence mechatronics) that go into sumo robots, and the second half is all about building and testing one.
                </p>

                <p className="text-gray-300">
                  For our competition, we had many constraints to follow. Size, no larger than 10"x10"x6"; Weight, less than 5 lbs; Cost, less than $200; Motor stall current, max 3A; Battery; 12V rechargeable non-lithium-ion no lead-acid battery, only defensive strategy and design.
                </p>

                <h4 className="text-xl font-lexend-bold mt-8 mb-4">Strategy & Mechanical Design</h4>
                <p className="text-gray-300">We had 4 major design pillars.</p>

                <div className="flex justify-between items-center">
                  <p className="text-gray-300 m-0">Plowing Mechanism</p>
                  <p className="text-gray-300 m-0">Maximizing Torque</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/robot/IMG_2342.webp"
                      alt="Plowing Mechanism"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/robot/IMG_2349.webp"
                      alt="Maximizing Torque"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-gray-300 m-0">Low Center of Gravity</p>
                  <p className="text-gray-300 m-0">Opponent Capture System</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/robot/extraweight.webp"
                      alt="Low Center of Gravity"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/robot/IMG_2346.webp"
                      alt="Opponent Capture System"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  Plowing Mechanism: Simple low angle attack to get opponents into the air, making it easier to push them out of the ring.
                  <br />Maximizing Torque: More torque means more pushing power. Torque is influenced by normal force, rolling friction (static friction), and mechanical gear ratio.
                  <br />Low Center of Gravity: Harder for opponent to plow robot, more traction, more control.
                  <br />Opponent Capture System: Cheese grater but for opponent robots. Aim is to get other robots stuck in our mesh and optimize robotic bullying.
                </p>

                <h4 className="text-xl font-lexend-bold mt-8 mb-4">Electronics</h4>
                <p className="text-gray-300">
                  Aside from CADing the design and 3D printing the components, there was also a lot of work that needed to be done on the electronics side. The robot needed to detect the boundaries of the competition arena and make sure not to go out of bounds. So, we used a relay / logic system that communicated IR sensor signals to an ATMega328P then to a motor controller then finally to the two motors (the robot is dual wheel).
                </p>

                <div className="flex justify-between items-center">
                  <p className="text-gray-300 m-0">Microchip, MDriver, IR Sensors, Battery, & Motors</p>
                  <p className="text-gray-300 m-0">Programming of the ATMega</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/robot/circuit-diagram.webp"
                      alt="Circuit Diagram"
                      fill
                      className="object-contain bg-gray-900"
                    />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/robot/circuit-programming.webp"
                      alt="Circuit Programming"
                      fill
                      className="object-contain bg-gray-900"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  Assembly was used to flash the SNAP Programmer. MDE lab x IPE program in C language used to program ATMega328P microcontroller connected to SNAP programmer.
                </p>

                <p className="text-gray-300">IR Sensors (OPB743wz)</p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>890 nm emitter</li>
                  <li>7.62mm range</li>
                </ul>

                <h4 className="text-xl font-lexend-bold mt-8 mb-4">Fixes</h4>
                <p className="text-gray-300">This project had quite a few issues that needed to be worked out.</p>

                <h5 className="text-lg font-lexend-bold mt-8 mb-4">IR Sensor Calibration</h5>
                <p className="text-gray-300">
                  The IR sensors are meant to detect the boundaries of the mat which are covered in white tape. The normal bounds are covered in black tape. A cat and mouse game of calibrating the IR sensors to perfectly react to a change in which tape it was over was crucial for finding the goldilocks of performance.
                </p>

                <p className="text-gray-300">Here's what it shouldn't do.</p>

                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/images/projects/robot/IMG_2351.gif"
                    alt="IR Sensor Wrong"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-300">And here's what it should do.</p>

                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/images/projects/robot/video.gif"
                    alt="IR Sensor Right"
                    fill
                    className="object-cover"
                  />
                </div>

                <h5 className="text-lg font-lexend-bold mt-8 mb-4">Honeycomb Design</h5>
                <p className="text-gray-300">
                  A common question that gets asked in engineering, is how can I maximizing the structural strength of a certain material while also minimizing my material usage? The short answer is, it depends. That's actually why engineering exists in the first place, if there was a straight forward answer to that question the professional of engineering would just be a niche profession like theoretical mathematics or something. Back to the question, there is actually an answer other than "it depends."
                </p>

                <p className="text-gray-300">
                  Of course I wanted my robot to be the next Ali, so I thought honeycomb would be good for this.
                </p>

                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/images/projects/robot/IMG_2223.webp"
                    alt="Honeycomb Design"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-300">
                  I made a couple test prints to see how this would translate to the real world and althought it looks cool, I found out it wasn't as optimal as it could be.
                </p>

                <p className="text-gray-300">
                  A mechatronics robot is expected to have isotropic load resistance (meaning it should be able to take punches from any direction). Now typical load resistance strategies that you've seen are probably in static civil infrastructure. Bridges, buildings, that sort of thing. For the most part these structures only need to deal with gravity. So they are built to be extremely tolerant in the vertical direction. An isotropic load resistance infill that I found to be effective is the Gyroid Infill at around 15%.
                </p>

                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/images/projects/robot/IMG_2286.webp"
                    alt="Gyroid Infill 15%"
                    fill
                    className="object-cover"
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