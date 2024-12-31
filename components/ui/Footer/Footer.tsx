'use client';

import Link from 'next/link';
import { RainbowButton } from '@/components/magicui/rainbow-button';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="p-4">
        <div className="flex justify-end items-center font-lexend-regular">
          <span className="hover:opacity-80 transition-opacity">
            © Alek Turkmen
          </span>
        </div>
      </div>
    </footer>
  );
}