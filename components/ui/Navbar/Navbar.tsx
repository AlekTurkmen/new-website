'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-8">
      <Link 
        href="/" 
        className={`text-2xl font-lexend-bold transition-all duration-200
          ${pathname === "/" 
            ? "text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.9)] drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]" 
            : "hover:text-red-500 hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.9)] hover:drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]"
          }`}
      >
        AT
      </Link>

      <div className="flex items-center gap-4 md:gap-8 font-lexend-regular">
        <Link 
          href="/startups" 
          className={`transition-all duration-200
            ${pathname === "/startups" 
              ? "text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.9)] drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]" 
              : "hover:text-sky-400 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.9)] hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]"
            }`}
        >
          STARTUPS
        </Link>
        <Link 
          href="/blogs" 
          className={`transition-all duration-200
            ${pathname === "/blogs" 
              ? "text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.9)] drop-shadow-[0_0_30px_rgba(74,222,128,0.6)]" 
              : "hover:text-green-400 hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.9)] hover:drop-shadow-[0_0_30px_rgba(74,222,128,0.6)]"
            }`}
        >
          BLOGS
        </Link>
        <Link 
          href="/projects" 
          className={`transition-all duration-200
            ${pathname === "/projects" 
              ? "text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.9)] drop-shadow-[0_0_30px_rgba(192,132,252,0.6)]" 
              : "hover:text-purple-400 hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.9)] hover:drop-shadow-[0_0_30px_rgba(192,132,252,0.6)]"
            }`}
        >
          PROJECTS
        </Link>
        <Link 
          href="/socials" 
          className={`transition-all duration-200
            ${pathname === "/socials" 
              ? "text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.9)] drop-shadow-[0_0_30px_rgba(253,224,71,0.6)]" 
              : "hover:text-yellow-300 hover:drop-shadow-[0_0_15px_rgba(253,224,71,0.9)] hover:drop-shadow-[0_0_30px_rgba(253,224,71,0.6)]"
            }`}
        >
          SOCIALS
        </Link>
      </div>
    </nav>
  );
}