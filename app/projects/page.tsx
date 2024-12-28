import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto py-16">  
          {/* Title Section - Centered */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
              PROJECTS
            </h1>
            <p className="text-md text-gray-400">

            </p>
            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>

          
        </main>

        <Footer />
      </div>
    </>
  );
}
