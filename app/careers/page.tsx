'use client';
import { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const [isLinkFocused, setIsLinkFocused] = useState(false);

  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
              Join Us
            </h1>
            
            <p className="text-md text-gray-400 mb-6 font-lexend-regular">
              Help us build the future of recruiting.
            </p>

            <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-lexend-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-gray-600 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-lexend-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-gray-600 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="link" className="block text-lg font-lexend-bold">
                Link that best represents you
              </label>
              <div className="flex items-center bg-gray-900 rounded-lg border border-gray-800">
                {!isLinkFocused && (
                  <span className="text-gray-500 pl-3">https://</span>
                )}
                <input
                  type="text"
                  id="link"
                  className="w-full p-3 bg-transparent focus:outline-none"
                  onFocus={() => setIsLinkFocused(true)}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      setIsLinkFocused(false);
                    }
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="accomplishment" className="block text-lg font-lexend-bold">
                What's your most impressive accomplishment?
              </label>
              <textarea
                id="accomplishment"
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-gray-600 focus:outline-none resize-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="rejection" className="block text-lg font-lexend-bold">
                Tell us about a time you got rejected
              </label>
              <textarea
                id="rejection"
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-gray-600 focus:outline-none resize-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="missing" className="block text-lg font-lexend-bold">
                What's the biggest thing we're missing that you can add?
              </label>
              <p className="text-sm text-gray-400 mb-2">
                Be specific. Links to working demos are best.
              </p>
              <textarea
                id="missing"
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-gray-600 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-white text-black hover:bg-opacity-90 transition-colors font-lexend-regular"
            >
              SUBMIT
            </button>
          </form>
        </main>

        <Footer />
      </div>
    </>
  );
}
