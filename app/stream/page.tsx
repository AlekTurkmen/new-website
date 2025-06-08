'use client';
import React, { useState, useEffect } from 'react';
import localFont from 'next/font/local';

const boldonse = localFont({
  src: '../../public/fonts/Boldonse/Boldonse-Regular.ttf',
  variable: '--font-boldonse',
  display: 'swap',
});

export default function Stream() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [daysUntilMove, setDaysUntilMove] = useState(0);
  const [dayOfBuilding, setDayOfBuilding] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      // Calculate days until July 20th, 2025
      const moveOutDate = new Date('2025-07-20');
      const timeDiffMove = moveOutDate.getTime() - now.getTime();
      const daysMove = Math.ceil(timeDiffMove / (1000 * 3600 * 24));
      setDaysUntilMove(daysMove);

      // Calculate days from June 9th, 2025 (Day 0)
      const buildingStartDate = new Date('2025-06-09');
      const timeDiffBuilding = now.getTime() - buildingStartDate.getTime();
      const daysBuilding = Math.floor(timeDiffBuilding / (1000 * 3600 * 24));
      setDayOfBuilding(daysBuilding);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time to EST
  const formatTimeEST = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className={`${boldonse.variable} relative min-h-screen bg-black text-white font-lexend-regular flex items-center justify-center`}>
      <div className="max-w-md mx-auto text-center space-y-8 px-4">
        {/* Day of building */}
        <div className="text-xl sm:text-2xl font-lexend-regular">
          Building A Startup Day {dayOfBuilding}
        </div>

        {/* Project name */}
        <div className="text-4xl sm:text-5xl font-lexend-regular text-orange-500">
          Project Iris
        </div>

        {/* Username */}
        <div className="text-xl sm:text-2xl font-lexend-regular">
          @alekturkmen
        </div>

        {/* Clock */}
        <div className="relative">
          <div className="w-48 h-48 mx-auto border-2 border-white rounded-full relative flex items-center justify-center">
            {/* Clock markers */}
            <div className="absolute inset-2 rounded-full">
              {/* 12 o'clock marker */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-white"></div>
              {/* 3 o'clock marker */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-0.5 w-4 bg-white"></div>
              {/* 6 o'clock marker */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-white"></div>
              {/* 9 o'clock marker */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 w-4 bg-white"></div>
            </div>
            
            {/* Clock hands */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Hour hand */}
              <div 
                className="absolute w-1 bg-white origin-bottom"
                style={{
                  height: '60px',
                  transform: `rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5}deg)`,
                  top: '50%',
                  marginTop: '-60px'
                }}
              ></div>
              
              {/* Minute hand */}
              <div 
                className="absolute w-0.5 bg-white origin-bottom"
                style={{
                  height: '80px',
                  transform: `rotate(${currentTime.getMinutes() * 6}deg)`,
                  top: '50%',
                  marginTop: '-80px'
                }}
              ></div>
              
              {/* Center dot */}
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Digital time display */}
          <div className="mt-4 text-2xl font-mono">
            {formatTimeEST(currentTime)} EST
          </div>
        </div>

        {/* Days until moving out */}
        <div className="text-lg sm:text-xl font-lexend-regular">
          {daysUntilMove} days until leaving NYC
        </div>
      </div>
    </div>
  );
}
