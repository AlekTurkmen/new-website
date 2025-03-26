'use client'

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex justify-end items-center p-8 bg-black/50 backdrop-blur-sm">
      {/* Empty navbar - all navigation links removed */}
    </nav>
  );
}