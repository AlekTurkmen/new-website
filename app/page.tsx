import Link from "next/link";
import Background from '@/components/Background';

export default function Home() {
  return (
    <>
      <Background />
      <div className="relative min-h-screen p-8 text-white">
        {/* Top Navigation */}
        <nav className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-2xl font-semibold hover:opacity-80 transition-opacity"
          >
            BELVEDERE
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/blog" 
              className="hover:opacity-80 transition-opacity"
            >
              BLOG
            </Link>
            <Link 
              href="/careers" 
              className="hover:opacity-80 transition-opacity"
            >
              CAREERS
            </Link>
            <Link 
              href="/faq" 
              className="hover:opacity-80 transition-opacity"
            >
              FAQ
            </Link>
            <Link 
              href="/try" 
              className="px-6 py-2 rounded-full bg-white text-black hover:bg-opacity-90 transition-colors"
            >
              BE THE FIRST
            </Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex items-center justify-center h-[calc(100vh-200px)]">
          <h1 className="text-[7rem] font-bold max-w-[1600px] leading-tight">
            Create your own nepotism.
          </h1>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex justify-between items-center">
            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="mailto:founders@belvedere.ai"
                className="hover:opacity-80 transition-opacity"
              >
                founders@belvedere.ai
              </a>
              <a 
                href="https://twitter.com/belvedere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                X/Twitter
              </a>
              <a 
                href="https://linkedin.com/company/belvedere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                LinkedIn
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <span className="hover:opacity-80 transition-opacity">
                © Belvedere
              </span>
              <Link 
                href="/privacy" 
                className="hover:opacity-80 transition-opacity"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="hover:opacity-80 transition-opacity"
              >
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
