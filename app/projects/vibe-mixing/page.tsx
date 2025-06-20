'use client';
import Footer from '@/components/ui/Footer';

export default function VibeMixing() {
    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          
          <main className="w-full h-screen">
            <div className="w-full h-full">
              <iframe
                src="/promptdj/index.html"
                className="w-full h-full border-0"
                title="PromptDJ - Vibe Mixing Application"
              />
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
}