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
                  Fashion Designer's Toolbox
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  May 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">

                {/* YouTube Video */}
                <div className="relative w-full aspect-video">
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/nV0DiekT1nE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <p className="text-gray-300">Below you will find a more comprehensive and indepth design process.</p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  My friend, who is a fashion designer, is moving to study abroad in Florence and I wanted to give her a gift before she left. Organization is a big thing in my life and so naturally I wondered how I could optimize and upgrade her design set up, specifically for her fashion design workflow. So, I came up with two major concepts to follow: 1) A toolbox to store tools and streamline workflow and 2) a showcase to show off designs and be visually appealing with custom lighting.
                </p>

                <p className="text-gray-300">
                  Firstly, I made a prototype design on OnShape that featured a showcase area and an underneath pull-out drawer to house tools and resources. My first prototype, named 'closed', had a closed look to it with an overhead ceiling that spanned the entire showcase floor and had 8 hidden ceiling lights. Upon reconsideration, I made the roof smaller giving the toolbox a more 'open' feel, this reduced the LEDs to only 4.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* First image grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Slide1.webp"
                      alt="Design Slide 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid2.webp"
                      alt="Grid Design 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  Finalizing the prototypes design, I added hangers for 6 threads to go, and a showcase for a small 3D printed dress form. I removed the basic grid pattern dividers in the drawer, making the drawer dividers have a more purposeful space for tools. Lastly, I made the hidden arduino compartment a little smaller.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* CAD Image */}
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/fashion/Toolbox CAD.webp"
                    alt="Toolbox CAD Design"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-300">
                  Before this, the designs were purely aesthetic and so in my second design iteration I shifted my approach from aesthetics to an assembly process made for laser cut pieces. I planned on using finger edge joints (featured below) to connect pieces together.
                  <br /><br />
                  I also designed 2D .stl files in AutoCAD. I did this so that a laser cutter could follow a vector path and create smaller pieces from a large 32"x18" acrylic board.
                  Before going onto an acrylic laser cut, I would first use cardboard to ensure that my designs translated well into the real world and to make sure I had dimensioned everything correctly.
                  <br /><br />
                  Featured below is my test print with cardboard and below that are the respective CAD files.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* First triple grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid1.webp"
                      alt="Grid Design 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid4.webp"
                      alt="Grid Design 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid5.webp"
                      alt="Grid Design 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Second double grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid3.webp"
                      alt="Grid Design 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid6.webp"
                      alt="Grid Design 6"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  Turns out I made a couple errors with my dimensioning and general fittings for the pieces. Whoops. Looking back on it, the errors were nearly impossible to spot in the .stl files and I'm glad I made a cardboard version first otherwise I would never have spotted the mistakes.
                  <br /><br />
                  During the design process I also had to prototype and build an arduino/LED setup that cycled through a rainbow of colors after a button was pressed. My friend at Cooper introduced me to NeoPixel LED strips which allows each LED to be individually addressable by code. I also wanted the arduino to be able to be plugged in at any time so that the user did not have to use a laptop or separate battery.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* Arduino prototype grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Arduino-proto.webp"
                      alt="Arduino Prototype"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Arduino-proto1.webp"
                      alt="Arduino Prototype 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Arduino-proto2.webp"
                      alt="Arduino Prototype 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  With all of this prototyping and testing I finally felt ready to laser cut into my two 18" x 32" Black/White acrylic boards. After having all of the pieces laser cut, I used a very strong acrylic adhesive to glue the pieces together. Shoutout to Prof. Lima for letting me use ALOT of his tools and laser cutter.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* Final assembly grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid7.webp"
                      alt="Assembly Grid 7"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid8.webp"
                      alt="Assembly Grid 8"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/projects/fashion/Grid9.webp"
                      alt="Assembly Grid 9"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">Below is the final product.</p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                {/* Feature Photo */}
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/fashion/thumbnail.webp"
                    alt="Final Product Feature Photo"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-300">
                  TLDR: I designed and created a customized toolbox and showcase for a fashion designer, optimizing workflow with storage, hangers, and a 3D printed dress form, using laser-cut pieces and an Arduino/LED setup, and assembling the final product with acrylic boards.
                </p>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}