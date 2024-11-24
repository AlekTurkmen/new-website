'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { useAuth } from '@/components/AuthProvider';

interface NavlinksProps {
  user?: User | null;
}

export default function Navlinks({ user }: NavlinksProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { supabase } = useAuth();

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      
      // Close the menu
      setIsMenuOpen(false);
      
      // Force a hard refresh to clear all states
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  console.log('Avatar URL:', user?.user_metadata?.avatar_url)
  console.log('Full user metadata:', user?.user_metadata)

  return (
    <div className="text-white px-6 py-6">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <div className="flex-1 flex items-center">
          <Link href="/" className="hover:text-zinc-200 transition flex items-center gap-2">
            Belvedere
            <img 
              className="w-6 h-6 brightness-0 invert transform scale-x-[-1]" 
              src="https://www.svgrepo.com/show/322951/penguin.svg" 
              loading="lazy" 
              alt="belvedere penguin"
            />
          </Link>
        </div>
        <div className="flex justify-end flex-1">
          {!user ? (
            <Link href="/login" className="hover:text-zinc-200 transition">
              Sign In
            </Link>
          ) : (
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 hover:text-zinc-200 transition"
              >
                {user?.user_metadata?.avatar_url ? (
                  <img 
                    src={user.user_metadata.avatar_url} 
                    alt={user.user_metadata.full_name || "Profile"} 
                    className="w-8 h-8 rounded-full object-cover"
                    onError={(e) => {
                      // Hide the broken image
                      e.currentTarget.style.display = 'none';
                      // Add the styled container with initials
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.classList.add('w-8', 'h-8', 'rounded-full', 'flex', 'items-center', 'justify-center');
                        parent.style.backgroundColor = '#438361';
                        parent.textContent = user.user_metadata.full_name?.[0] || '?';
                      }
                    }}
                  />
                ) : (
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: '#438361' }}
                  >
                    {user?.user_metadata?.full_name?.[0] || '?'}
                  </div>
                )}
                <span>{user.user_metadata.full_name}</span>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile (coming soon)
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}