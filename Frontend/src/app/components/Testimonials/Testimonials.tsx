"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { testimonialData } from "@/data/testimonials";
import { cn } from "@/app/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUser = testimonialData[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonialData.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);

  return (
    <section className="py-20 bg-[#FDFCFD] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <Typography variant="h2" className="text-[#1A1A37] mb-12">
          Testimonials<br/>
          What My Clients Say?
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 relative">
            <div className="flex gap-4 mb-8">
              <button onClick={handlePrev} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button onClick={handleNext} className="p-3 rounded-full bg-[#3D1DFF] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Active Image Card */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`img-${activeUser.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-[280px] bg-[#E0D9FF] p-4 rounded-[32px] shrink-0"
                >
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border-2 border-white shadow-sm">
                    <Image 
                      src={activeUser.image} 
                      alt={activeUser.name} 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <Typography variant="s1" className="text-[#1A1A37] font-bold m-0">{activeUser.name}</Typography>
                    <Typography variant="caption" className="text-gray-500 m-0">{activeUser.role}</Typography>
                    <div className="flex justify-center mt-2 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < activeUser.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Chat Bubble Content */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`content-${activeUser.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="relative bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm max-w-lg mt-12 md:mt-16"
                >
                  <div className="absolute -left-3 top-10 w-6 h-6 bg-white border-l border-t border-gray-100 rotate-[-45deg] hidden md:block" />
                  
                  <Typography variant="b1" className="text-[#4F4F6B] leading-relaxed">
                    &ldquo;{activeUser.content.split('Thank you').map((part, i) => (
                      <React.Fragment key={i}>
                        {part}{i === 0 && activeUser.content.includes('Thank you') && (
                          <span className="text-[#3D1DFF] font-bold italic">Thank you</span>
                        )}
                      </React.Fragment>
                    ))}&rdquo;
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start">
            <div className="border border-blue-600 rounded-full px-4 py-1 mb-6">
              <Typography variant="caption" className="text-blue-600 font-bold m-0">
                {activeIndex + 1} / {testimonialData.length}
              </Typography>
            </div>
            
            <div className="flex gap-4">
              {testimonialData.map((user, idx) => (
                <button
                  key={user.id}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "w-16 h-16 relative rounded-xl overflow-hidden border-2 transition-all",
                    activeIndex === idx ? "border-blue-600 scale-110 shadow-md" : "border-gray-200 grayscale opacity-60"
                  )}
                >
                  <Image src={user.image} alt={user.name} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;