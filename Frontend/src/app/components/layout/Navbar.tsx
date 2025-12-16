"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/Sheet";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import MegaMenu from "./MegaMenu/MegaMenu";

// jay

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/Services" },
    { name: "Contact Us", href: "/contact" },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-[#F0F5FF] border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto h-[84px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 justify-between h-full relative">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="SkillGroww"
              width={200.89}
              height={39.84}
              priority
            />
          </Link>
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center h-full flex-1"> 
            {/* Mega Menu */}
            <MegaMenu />
            {/* Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="h-full flex items-center px-5"
              >
                <Typography variant="nav-link">{link.name}</Typography>
              </Link>
            ))}
            {/* Right Side: Search + Buttons */}
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center w-[210px] h-11 rounded-md border border-gray-300 bg-white shadow-sm hover:shadow-md focus-within:border-blue-500 transition-all duration-200">
                <Image
                  src="/images/search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className="ml-4 text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Search, Loan..."
                  className="ml-3 flex-1 bg-transparent text-base outline-none placeholder:text-gray-400"
                />
              </div>
              {/* Apply Now Button */}
              <Button className="w-[145px] h-11 rounded-md">
                <Typography variant="btn-primary">Sign Up</Typography>
              </Button>
              {/* LOGIN BUTTON  */}
              <Button
                variant="ghost"
                className="w-[100px] h-11 rounded-md bg-[#E7EDF0] text-blue-600 hover:bg-[#d0dfe6] active:bg-[#c0d4dd] shadow-sm hover:shadow-md transition-all duration-200 font-medium border border-transparent hover:border-[#c0d4dd]/30"
              >
                <Typography variant="nav-link" as="span" className="!text-blue-600 font-medium">
                  Login
                </Typography>
              </Button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-3 rounded-md bg-white shadow-lg hover:bg-gray-100 transition active:scale-95">
                  <Menu className="w-7 h-7 text-gray-900" />
                </button>
              </SheetTrigger>
              <SheetContent className="w-[405px] p-0 bg-white">
                <div className="flex items-center justify-between p-6 border-b">
                  <Image src="/images/logo.svg" alt="SkillGroww" width={160} height={36} className="h-9"/>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="py-8 px-6 space-y-6">
                  {navLinks.map(link => (
                    <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                      <Typography variant="nav-link" className="text-xl font-semibold block">
                        {link.name}
                      </Typography>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}