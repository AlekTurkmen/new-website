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
        ALEK TURKMEN
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-lexend-regular">
      <Link 
          href="/projects" 
          className="hover:opacity-80 transition-opacity"
        >
          PROJECTS
        </Link>
        <Link 
          href="/blogs" 
          className="hover:opacity-80 transition-opacity"
        >
          BLOGS
        </Link>
        <Link 
          href="/experience" 
          className="hover:opacity-80 transition-opacity"
        >
          EXPERIENCE
        </Link>
        <Link 
          href="/socials" 
          className="px-6 py-2 rounded-full bg-white text-black hover:bg-opacity-90 transition-colors font-lexend-regular"
        >
          SOCIALS
        </Link>
      </div>
    </nav>
  );
}