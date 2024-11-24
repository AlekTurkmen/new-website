'use client'

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8">
      {/* Logo/Brand */}
      <Link 
        href="/" 
        className="text-2xl font-lexend-bold hover:opacity-80 transition-opacity"
      >
        RELEVANCY AI
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-lexend-regular">
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
          className="px-6 py-2 rounded-full bg-white text-black hover:bg-opacity-90 transition-colors font-lexend-regular"
        >
          BE THE FIRST
        </Link>
      </div>
    </nav>
  );
}