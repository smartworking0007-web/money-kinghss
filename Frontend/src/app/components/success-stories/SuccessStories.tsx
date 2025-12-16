'use client';

import React, { useRef, useState, useEffect } from 'react';
import StoryCard from './StoryCard';
import { successStoriesData } from '@/data/successStories';
import { Typography } from '@/app/components/ui/Typography';

const SuccessStories = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        slideRight();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="flex mt-[-90px]  items-center justify-center bg-gray-50 overflow-hidden mx-auto" style={{ maxWidth: '1440px', height: '824px' }}>
      <div className="relative flex flex-col justify-center px-4" style={{ width: '1300px' }}>
        
        {/* Section Header */}
        <div className="mb-10 pl-3">
           <Typography variant="h3" className="text-gray-900">
             Student Success Stories   
           </Typography>
           <Typography variant="b1" className="text-gray-500 mt-2">
             See how our graduates transformed their careers.
           </Typography>
        </div> 

        {/* Slider Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button 
            onClick={slideLeft}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 shadow-lg text-gray-700 rounded-full w-14 h-14 flex items-center justify-center hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all duration-300 opacity-0 group-hover:opacity-100" 
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Scrolling Area */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth hide-scrollbar py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            {successStoriesData.map((story) => (
              <StoryCard key={story.id} data={story} />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={slideRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 shadow-lg text-gray-700 rounded-full w-14 h-14 flex items-center justify-center hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;