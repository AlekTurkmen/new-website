'use client'

import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8">
      <Link 
        href="/" 
        className="text-2xl font-lexend-bold hover:opacity-80 transition-opacity"
      >
        AT
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 md:gap-8 font-lexend-regular">
      <Link 
          href="/startups" 
          className="hover:opacity-80 transition-opacity"
        >
          STARTUPS
        </Link>
        <Link 
          href="/blogs" 
          className="hover:opacity-80 transition-opacity"
        >
          BLOGS
        </Link>
        <Link 
          href="/projects" 
          className="hover:opacity-80 transition-opacity"
        >
          PROJECTS
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