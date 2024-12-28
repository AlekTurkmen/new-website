'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="p-4">
        <div className="flex justify-between items-center font-lexend-regular">
          {/* Social Links */}
          <div className="flex gap-6">
            {/* <a 
              href="mailto:aleknturkmen@gmail.com"
              className="hover:opacity-80 transition-opacity"
            >
              aleknturkmen@gmail.com
            </a>
            <a 
              href="https://twitter.com/alekturkmen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              X/Twitter
            </a>
            <a 
              href="https://www.linkedin.com/in/alekturkmen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a> */}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            <span className="hover:opacity-80 transition-opacity">
              © Alek Turkmen
            </span>
            {/* <Link 
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
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}