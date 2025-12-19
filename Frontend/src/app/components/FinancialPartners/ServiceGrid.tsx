"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/FinancialPartners';
import { Typography } from '../ui/Typography';

const ServiceGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Typography variant="h2" as="h2" className="text-[#1e2e5c] font-bold mb-4">Our Loan Products</Typography>
          <div className="w-20 h-1.5 bg-[#586ca0] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <Link 
              href={service.href} 
              key={service.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 text-center">
                <Typography variant="s1" className="text-[#1e2e5c] group-hover:text-[#586ca0] transition-colors">
                  {service.title}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;