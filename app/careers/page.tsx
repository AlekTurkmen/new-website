import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto py-16">
          <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
            Careers
          </h1>
        </main>

        <Footer />
      </div>
    </>
  );
}
