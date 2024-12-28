'use client'

import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";

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
      <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-8 font-lexend-regular">
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
          className="hover:opacity-80 transition-opacity"
        >
          SOCIALS
        </Link>
      </div>
    </nav>
  );
}