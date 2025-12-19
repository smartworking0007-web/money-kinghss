
"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { servicesData } from "@/data/servicesData"; // Importing the data file

const ServiceGrid = () => {
  return (
    // Section Background - Dark Blue matching the reference image
    <section className="w-full bg-[#0b1c44] py-8 px-4 mt-[-100] sm:px-6 lg:px-16">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-5xl mx-auto text-center mb-6">
        <Typography 
            variant="h2" 
            className="text-white mb-4"
        >
          Apply Today Achieve Tomorrow
        </Typography>  
        <Typography 
            variant="b1" 
            className="text-gray-300 max-w-2xl mx-auto"
        >
          &quot;Quick approvals, flexible options, and loans that work for your goals.&quot;
        </Typography>
      </div>

      {/* --- GRID SECTION --- */}
      <div className="max-w-7xl mx-auto grid gap-3
        /* === MOBILE LAYOUT (1 Column) === */
        grid-cols-1 
        /* === TABLET LAYOUT (2 Columns) === */
        sm:grid-cols-2 
        /* === WEB LAYOUT (4 Columns) === */
        lg:grid-cols-4"
      >
        {servicesData.map((service) => (
          <Link 
            key={service.id} 
            href={service.href} 
            className="group block h-full"
          >
            {/* CARD CONTAINER */}
            <div className="bg-white rounded-md overflow-hidden  h-full flex flex-col">
              {/* IMAGE WRAPPER */}
              <div className="relative w-full aspect-[5/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* TITLE WRAPPER */}
              <div className="p-[-10] flex items-end justify-center  border-gray-100">
                <Typography 
                    variant="h5" 
                    className="text-[#0b1c44] items-end  justify-center font-bold group-hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;