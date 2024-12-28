import ShaderSphere from '@/components/Threejs/ShaderSphere/ShaderSphere';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col text-white font-lexend-regular">
        <ShaderSphere />
        <Navbar />
        
        {/* Main Content Area - changed to use flex-grow */}
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-[8rem] font-lexend-bold max-w-[1600px] leading-tight">
            Alek Turkmen
          </h1>
        </main>

        <Footer />
      </div>
    </>
  );
}
