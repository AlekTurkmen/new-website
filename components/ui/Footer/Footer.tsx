'use client';

import Link from 'next/link';
import { RainbowButton } from '@/components/magicui/rainbow-button';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="p-4">
        <div className="flex justify-between items-center font-lexend-regular">
          {/* Social Links */}
          <div className="flex gap-6">
          <Link href="/#">
          <RainbowButton>
            
          </RainbowButton>
        </Link>
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