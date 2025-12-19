"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { partnerLogos } from '@/data/FinancialPartners';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Typography } from '../ui/Typography';

const FinancialPartners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Manual Scroll Logic
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      const currScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      let scrollTo = direction === 'left' 
        ? currScroll - scrollAmount 
        : currScroll + scrollAmount;

      // Loop back logic for manual clicks
      if (scrollTo < 0) scrollTo = maxScroll;
      if (scrollTo > maxScroll) scrollTo = 0;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // 2. Automatic Movement Logic
  useEffect(() => {
    if (isPaused) return; // Stop timer if user is hovering

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we reach the end, reset to start, else move right
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ 
            left: scrollLeft + 250, 
            behavior: 'smooth' 
          });
        }
      }
    }, 3000); // Moves every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <Typography variant="h3" as="h3" className="text-[#1e2e5c] text-center mb-12 font-bold">
          Our Financial Partners
        </Typography>

        <div 
          className="relative flex items-center group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT BUTTON */}
          <button 
            onClick={() => handleScroll('left')}
            className="absolute left-0 z-20 p-2 bg-white/90 shadow-md rounded-full hover:bg-gray-50 transition-all border border-gray-100 hidden md:flex items-center justify-center -translate-x-1/2 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-[#1e2e5c]" />
          </button>

          {/* SCROLL CONTAINER */}
          <div 
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto no-scrollbar gap-12 py-6 px-4 items-center snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partnerLogos.map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 snap-center"
              >
                <Image 
                  src={partner.src} 
                  alt={partner.name} 
                  width={180} 
                  height={70} 
                  className="h-10 md:h-14 w-auto object-contain " 
                />
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button 
            onClick={() => handleScroll('right')}
            className="absolute right-0 z-20 p-2 bg-white/90 shadow-md rounded-full hover:bg-gray-50 transition-all border border-gray-100 hidden md:flex items-center justify-center translate-x-1/2 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-[#1e2e5c]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancialPartners;