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
    <div className="w-full flex justify-center mt-2 mb-6 sm:mb-10 px-2 sm:px-6">
      <div 
        className="relative w-full max-w-7xl bg-white overflow-hidden group
        
        /* === ASPECT RATIO === */
        /* Mobile ke liye 16:9 aur Desktop ke liye 21:9 standard hai */
        aspect-[16/9] sm:aspect-[21/9] 
        rounded-lg sm:rounded-3xl
        "
      >
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
                /* === SOLUTION FOR CUTTING ===
                   'object-fill': Ye image ko kheench kar (stretch karke) 
                   box ke andar poora fit kar dega.
                   Ab image ka koi bhi hissa nahi katega.
                */
                className="object-fill"
                priority={slide.id === 1}
              />
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-4 h-1 sm:w-8 sm:h-2 bg-blue-600" 
                  : "w-1 h-1 sm:w-2 sm:h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}