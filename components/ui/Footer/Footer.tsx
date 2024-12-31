'use client';

import Link from 'next/link';
import { MusicControl } from '@/components/ui/MusicControl';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="p-4">
        <div className="flex justify-end items-center gap-2 font-lexend-regular">
          <MusicControl />
          <span className="hover:opacity-80 transition-opacity">
            © Alek Turkmen
          </span>
        </div>
      </div>
    </footer>
  );
}