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
              {/* Title section with consistent width */}
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  My First Startup Failed
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  April 2024
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">
                <p className="text-gray-300">
                  My first startup failed and it was because of pricing/cost issues. I figured I would share what the startup was about, what I learned, and what I would have done differently.
                </p>

                <p className="text-gray-300">
                  I've been surrounded by sports and athletics my whole life and my favorite sport to watch by far is the NHL. It's a combination of ice skating, high impact collisions, and a carbon fiber flexible stick that you use to push around a puck.
                </p>

                <p className="text-gray-300">
                  The sports industry has always been about gaining a competitive advantage by any means necessary. Whether that's paying higher contracts for promising players or investing into any kind of technologies that gives teams a greater advantage, teams are constantly pouring tons of money into gaining a competitive advantage.
                </p>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Problem
                </h3>

                <p className="text-gray-300">
                  Now the issue in hockey is that sticks break quite often and it's almost always unpredictable. Hockey sticks break without any early detection warning signs and this can cause major disadvantages, sometimes goals being scored or saved.
                </p>

                {/* First 2x1 GIF Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/1.gif"
                      alt="NHL Stick Breaking Example 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/2.gif"
                      alt="NHL Stick Breaking Example 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Solution
                </h3>

                <p className="text-gray-300">
                  Using the natural frequency readings of a hockey stick from an accelerometer and structural excitement, it's possible to determine the current durability of a hockey stick, using mechanical vibration structural health monitoring techniques.
                </p>

                <p className="text-gray-300">
                  Imagine a world in which just lightly tapping a hockey stick against the ground would give you a read out of your sticks current durability and expected lifespan until it breaks. This would be a game changer for hockey and in-game stick breakage would be heavily reduced, if not removed entirely.
                </p>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Product
                </h3>

                <p className="text-gray-300">
                  Attached to the hockey stick is a small accelerometer which remotely transmits signals to be analyzed and compared with a factory new sticks mechanical and material properties.
                </p>

                <p className="text-gray-300">
                  The durabilities would be fed into a live info stats system and displayed to coaches and staff. The integration of real-time Structural Health Monitoring (SHM) systems into professional hockey games, by leveraging advancements in vibration analysis, teams can preemptively identify sticks with compromised structural integrity, thus averting potential game-altering stick breaks
                </p>

                {/* Second 2x1 Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/3.webp"
                      alt="In-game stats display"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/4.webp"
                      alt="Coaches and staff interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-lexend-bold mb-4">
                  My Personal Competitive Advantages
                </h3>

                <p className="text-gray-300">
                  When building a startup, it's very important to understand your own advantages. What makes YOU the person for the job? And why can't everyone else just do what your doing? It's a metaphorical moat that only you or a handful of others can cross. And so this creates not only a high level of safety for your company in the future but also means a lot of the spaces in that moat have been relatively unexplored.
                </p>

                <p className="text-gray-300">
                  For me and my metaphorical moat, it came down to knowing a handful of things all in the over arching mechanical engineering umbrella. Vibrations, material science, and access to equipment / software.
                </p>

                <h4 className="text-lg font-lexend-bold mb-4">
                  Vibrations
                </h4>

                <p className="text-gray-300">
                  Let's start with mechanical vibrations, and by far the most conceptually difficult part.
                </p>

                {/* Third 2x1 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/5.webp"
                      alt="FRF Graph"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/6.gif"
                      alt="Impact hammer demonstration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  The above graph on the left is a FRF (Frequency Response Function) graph that displays the generated magnitude vs natural frequency of an entire hockey stick (system). This graph represents the "physical reaction" that a stick would have to a small vibration. A lot of what I just said, stands on mountains of technical knowledge. So, from start to finish, (1) hockey stick gets impact, (2) accelerometer within hockey stick measures energy impulse, (3) impact measurements are calculated into FRF, (4) new FRF (dependent variable) is compared to brand new stick's FRF (control variable).
                </p>

                <p className="text-gray-300">
                  A couple other concepts to know include, Mechanical Vibrations, Natural Frequencies, Mode Shapes, Damping, Wave Propagation, Longitudinal Waves, Transverse Waves, Wave Speed, Dynamics, Harmonic Motion, Resonance, Forced and Free Vibrations, Signal Processing, Fourier Transform, Signal Filtering, and Spectral Analysis.
                </p>

                <h4 className="text-lg font-lexend-bold mb-4">
                  Material Science
                </h4>

                <p className="text-gray-300">
                  Having the knowledge and know how of what makes up the material properties and physics of a hockey stick is also pre requisite for this startup.
                </p>

                <p className="text-gray-300">
                  This includes: Strain Gauges, Accelerometers, Piezoelectric Sensors, Data Acquisition Systems, Sampling Rate, Analog-to-Digital Conversion (ADC), Young's Modulus, Shear Modulus, Poisson's Ratio, Tensile Strength, Compressive Strength, Flexural Strength, Toughness, Hardness, Material Fatigue, Fatigue Life, S-N Curves, Fracture Mechanics, Crack Propagation, Fracture Toughness, Composite Materials, and Material Damping.
                </p>

                <h4 className="text-lg font-lexend-bold mb-4">
                  Equipment / Software
                </h4>

                <p className="text-gray-300">
                  The final moat I had was the equipment and software that I had access to while testing.
                </p>

                <p className="text-gray-300">
                  I used a PCB Model 333B31 accelerometer (SN 37005) to collect the deflection data from the hockey sticks, while a PCB impact hammer with a (red rubber tip) force transducer embedded in the tip was used to measure the input force and frequency spectrum. A NI-9234 data acquisition module relayed the data from the accelerometers and the impact hammer to the computer and LabView virtual instrument would help get our FRF graph read outs.
                </p>

                {/* Fourth 2x1 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/7.webp"
                      alt="Testing Clamp Rig"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/blogs/first-fail/8.webp"
                      alt="Equipment Setup"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Business Model / Financial
                </h3>

                <p className="text-gray-300">
                  This is where shit starts to hit the fan.
                </p>

                <p className="text-gray-300">
                  A quick cost analysis of all the equipment used will get you to about $500/stick + a back end equipment / software system. Hockey professionals use sticks that are easily worth close to $500, and go through these sticks like crazy. But doubling the price tag in order to just predict when the stick will break is not enough to justify teams to purchase this technology.
                </p>

                <p className="text-gray-300">
                  The pcb piezoelectric accelerometer that we were using, as incredibly accurate as it is, is extremely expensive. The fine tuning of the accelerometer which inevitably drives the manufacturing price up is the only reason we are able to get such accurate readings on the durability of the hockey stick in the first place. So finding a cheaper alternative to the accelerometer gave us wacky results that just couldn't be used in professional play. At that point, just replace player's sticks every shift to offset the cost of what would be our durability indicator.
                </p>

                <h3 className="text-xl font-lexend-bold mb-4">
                  Things Learned
                </h3>

                <p className="text-gray-300">
                  The most important take away was of course doing a cost analysis earlier in the product development process. Finding out that quality results could only be acquired using high end accelerometers was obviously not something you can just find out right away, but cost analysis was not on my mind at all during the R&D phase. Approaching NHL teams and saying "you will never have a broken stick again for just $50 extra per stick" vs "$500 extra per stick" is a huge difference and one that completely fails a startup.
                </p>

                <p className="text-gray-300">
                  The second takeaway is, to find your MVP as fast as possible. Take a bee line approach to the bare bones version of your product and get it into a market. Then from their you can back track on your product and make it better / fill in the gaps you missed. It's far more efficient to sprint to the finish line, then walk backwards and find all of the shortcuts / improvements you missed.
                </p>

                <p className="text-gray-300">
                  And finally, surround yourself with people who are going to push you to be your best, and vise versa.
                </p>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
  }