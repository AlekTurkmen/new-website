import Background from '@/components/Background';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular">
        <Background />

        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex items-center justify-center h-[calc(100vh-200px)]">
          <h1 className="text-[7rem] font-lexend-bold max-w-[1600px] leading-tight">
            Create your own nepotism.
          </h1>
        </main>

        <Footer />
      </div>
    </>
  );
}
