"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/heroSlides";
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full flex justify-center mt-2 mb-10 px-4 sm:px-6">
      <div className="relative w-full max-w-7xl aspect-[21/9] bg-white rounded-3xl  overflow-hidden group">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div 
              key={slide.id} 
              className="min-w-full flex-shrink-0 h-full relative"
            >
              <Image
                src={slide.imageUrl}
                alt={slide.imageAlt}
                fill
                className="object-cover object-center"
                priority={slide.id === 1}
              />
            </div>
          ))}
        </div>
        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}