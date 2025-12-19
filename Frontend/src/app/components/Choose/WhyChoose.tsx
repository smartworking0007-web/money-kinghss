"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { whyChooseData } from "@/data/whyChoose";
import { cn } from "@/app/lib/utils";

const WhyChoose = () => {
  return (
    <section className="py-0 md:py-5 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header - Responsive text sizes and alignment */}
        <div className="text-center mb-4 md:mb-16">
          <Typography 
            variant="h3" 
            as="h2" 
            className="text-[#003366] m-0 leading-tight lg:text-[40px]"
          >
            Why Choose <br className="block md:hidden" />
            <span className=" mt-1 md:inline md:mt-0">
              Money King.
            </span>
          </Typography>
        </div>
        <div className="grid grid-cols-1 mt-[-5] sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto justify-items-center">
          {whyChooseData.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative flex items-center p-4 md:p-5 rounded-xl border-2 border-[#D1E5FF] bg-white",
                "w-full max-w-[320px] sm:max-w-none md:w-[280px] h-[80px] md:h-[90px]",
                "transition-all duration-300 hover:shadow-lg hover:border-[#4DB6AC]/30 group"
              )}
            >
              {/* The "Broken Border" White Gaps - Hidden or narrowed on very small screens if needed */}
              <div className="absolute -top-[2px] left-8 w-10 md:w-12 h-[2px] bg-white" />
              <div className="absolute -bottom-[2px] right-8 w-10 md:w-12 h-[2px] bg-white" />

              {/* Icon Container */}
              <div className="flex-shrink-0 mr-4 w-10 h-10 md:w-12 md:h-12 relative transition-transform group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>

              {/* Text - Scaled for mobile */}
              <Typography 
                variant="s2" 
                as="p" 
                className="text-[#003366] text-sm md:text-base leading-tight font-bold m-0"
              >
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;