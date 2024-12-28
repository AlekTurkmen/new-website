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
              Create your own nepotism.
            </h1>
            <p className="text-md text-gray-400">
              Alek Turkmen · November 24, 2024
            </p>
          </div>

          {/* Blog Content */}
          <div className="space-y-8 text-xl">
            {/* Quote Section */}
            <blockquote className="border-l-4 border-gray-700 pl-6 italic text-gray-300">
              "Developing a network of talented people to work with—sometimes closely, sometimes loosely—is an essential part of a great career. The size of the network of really talented people you know often becomes the limiter for what you can accomplish."
              <footer className="mt-2 text-gray-400 not-italic">
                — Sam Altman
              </footer>
            </blockquote>

            <p className="text-gray-300">
              80% of jobs are filled through connections. And 70% of job openings are not published publicly.{' '}
              <a 
                href="https://www.cnbc.com/2019/12/27/how-to-get-a-job-often-comes-down-to-one-elite-personal-asset.html" 
                className="text-gray-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: CNBC
              </a>
            </p>

            <p className="text-gray-300">
              So why on Earth are you still applying to jobs through job boards?
            </p>

            <p className="text-gray-300">
              I was in the same spot you were, trying to get internships and jobs the old fashion way. Eventually, I figured out the secret formula for maximizing my chances at landing my dream job. The truth is, nepotism—like it or not—is a powerful force. But here’s the catch: most people benefiting from it didn’t inherit it; they built it themselves.
            </p>

            <p className="text-gray-300">
              Building a strong network is the highest-yield investment in your personal and professional growth because it compounds over time in ways no individual effort can. Relationships are multipliers of opportunity, insight, and resilience—offering access to knowledge, collaborations, and resources that no single person can achieve alone.
            </p>

            <h3 className="text-xl font-lexend-bold mb-4">
              We give you the tools to <strong><a href="/try" className="hover:underline">create your own nepotism.</a></strong>
            </h3>

            <p className="text-md text-gray-300">
              P.S. As a part of our marketing budget we literally give every user a portion of the premium service for free. So at the very least spend my API credits and get some value.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
