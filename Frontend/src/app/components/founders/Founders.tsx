"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { Linkedin, Mail, } from "lucide-react";

const Founders = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-16 md:py-24 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4DB6AC]/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#0B1D33]/5 blur-3xl" />

      <div className="container relative mb-[-10] mx-auto max-w-[1300px] px-6">
        {/* Header Section */}
        <div className="mb-10 text-center lg:mb-15">
          <Typography 
            variant="h2" 
            className="mb-1 text-xl font-black  md:text-xl lg:text-4xl uppercase"
          >
            The Visionaries Behind Money King
          </Typography>
          <div className="" />
        </div>

        {/* Founder Card Container */}
        <div className="mx-auto max-w-5xl">
          <div className="group relative flex flex-col items-center gap-8 rounded-[2.5rem] border border-white bg-white/70 p-6 shadow-2xl shadow-blue-900/10 backdrop-blur-xl md:flex-row md:p-10 lg:gap-16">
            
            {/* Image Section - Fully Responsive Aspect Ratio */}
            <div className="relative w-full shrink-0 overflow-hidden rounded-[2rem] md:w-2/5 lg:w-[400px]">
              <div className="aspect-[4/5] w-full bg-[#0B1D33]">
                <Image
                  src="/images/Founders/Sir.jpg"
                  alt="Amarjeet Singh - Founder & CEO"
                  fill
                  className="object-cover transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Floating Social Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between rounded-2xl bg-white/90 p-3 backdrop-blur-md shadow-lg">
                <Typography variant="caption" className="font-bold text-[#0B1D33]">Connect with Founder</Typography>
                <div className="flex gap-2 text-[#4DB6AC]">
                  <Linkedin size={18} className="cursor-pointer hover:text-[#0B1D33] transition-colors" />
                  <Mail size={18} className="cursor-pointer hover:text-[#0B1D33] transition-colors" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <Typography variant="b2" className="font-bold uppercase tracking-[0.2em] text-[#4DB6AC]">
                  Founder & Chief Executive Officer
                </Typography>
                <Typography variant="h3" className="text-3xl font-black text-[#0B1D33] md:text-5xl">
                  AMARJEET SINGH
                </Typography>
              </div>

              <Typography variant="b1" className="text-lg leading-relaxed text-gray-600">
                At <span className="font-bold text-[#0B1D33]">Money King Financial</span>, we believe that wealth management should be transparent, accessible, and smart. Our mission is to bridge the gap between complex financial markets and everyday investors through innovative digital solutions.
              </Typography>

              {/* Stats/Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-2xl bg-[#F1F5F9] p-4 text-center md:text-left">
                  <Typography variant="h5" className="font-bold text-[#0B1D33]">10+ Years</Typography>
                  <Typography variant="caption" className="text-gray-500">Industry Expertise</Typography>
                </div>
              </div>

              {/* Branding and Action */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 md:justify-start">
                <div className="flex items-center gap-3">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;