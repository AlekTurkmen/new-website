'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";

export default function Home() {

    const notes = {
      "1": {
        text: "This is a margin note that adds additional context to the main text. It's smaller and colored red.",
        side: "right",
        topOffset: 270
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
                  [Title]
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  [Date]
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">

                <h3 className="text-xl font-lexend-bold mb-4">
                  [Headers]
                </h3>

                <p className="text-gray-300">
                  [Paragraphs]
                </p>

                <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <span className="text-red-500 font-bold">[1]</span>
                </p>

              </div>
            </main>

            {/* Left side notes */}
            <div className="lg:absolute lg:top-[200px] lg:right-[calc(50%+400px)] lg:w-64 lg:pr-10 mt-8 lg:mt-0 px-4 lg:px-0">
              {Object.entries(notes)
                .filter(([_, note]) => note.side === "left")
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