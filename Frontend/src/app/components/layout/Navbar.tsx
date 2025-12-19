"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronRight, LogIn } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/Sheet";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import MegaMenu from "./MegaMenu/MegaMenu";

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
          {/* ========================================= */}
          {/* LOGO (DESKTOP)                          */}
          {/* ========================================= */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Money King"
              width={200}
              height={40}
              className="w-[160px] sm:w-[200px] h-auto"
              priority
            />
          </Link>

          {/* ========================================= */}
          {/* DESKTOP NAVIGATION (> 1024px)           */}
          {/* ========================================= */}
          <nav className="hidden lg:flex items-center h-full flex-1">
            <MegaMenu />

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="h-full flex items-center px-5 group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Typography>
              </Link>
            ))}

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
              <Button className="w-[145px] h-11 rounded-md">
                <Typography variant="btn-primary">Sign Up</Typography>
              </Button>
              <Button
                variant="ghost"
                className="w-[100px] h-11 rounded-md bg-[#E7EDF0] text-blue-600 hover:bg-[#d0dfe6] active:bg-[#c0d4dd] shadow-sm hover:shadow-md transition-all duration-200 font-medium border border-transparent hover:border-[#c0d4dd]/30"
              >
                <Typography
                  variant="nav-link"
                  as="span"
                  className="!text-blue-600 font-medium"
                >
                  Login
                </Typography>
              </Button>
            </div>
          </nav>
          {/* ========================================= */}
          {/* MOBILE MENU (< 1024px)                  */}
          {/* ========================================= */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-3 ransition active:scale-95 border border-gray-100">
                  <Menu className="w-5 h-7 text-gray" />
                </button>
              </SheetTrigger>
              {/* Mobile Sidebar */}
              <SheetContent
                side="left"
                className="w-full sm:w-[540px] p-0 bg-white flex flex-col h-full border-r border-gray-500"
              >
                {/* 1. MOBILE HEADER (Absolute Positioning) */}
                {/* 'relative' allows children to use absolute positioning inside this box */}
                <div className="relative h-20 w-full border-b border-gray-100 bg-gray-50/50">
                  {/* LOGO: Pinned to the Left using absolute positioning */}
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute left-[-5] top-1/2 -translate-y-1/2"
                  >
                    <Image
                      src="/images/logo.svg"
                      alt="Money King"
                      width={160}
                      height={50}
                      className="h-35 w-auto object-contain object-left"
                      priority
                    />
                  </Link>

                  {/* CLOSE BUTTON: Pinned to the Right */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute right-10 top-1/2 -translate-y-1/2 p-2.5"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                {/* 2. Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col px-10 py-10 gap-4">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        className="w-full h-14 pl-12 pr-4 rounded-md bg-gray-100/80 border border-transparent focus:bg-white focus:border-blue-500 text-lg outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    {/* Mobile Nav Links */}
                    <nav className="flex flex-col space-y-1">
                      <Typography
                        variant="caption"
                        className="uppercase tracking-widest text-gray-400 font-bold mb-2 ml-1"
                      >
                        Navigation
                      </Typography>
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-4 rounded-md hover:bg-blue-50 group transition-all duration-200 border border-transparent hover:border-blue-100"
                        >
                          <Typography
                            variant="s1"
                            className="text-gray-700 text-lg font-semibold group-hover:text-blue-700"
                          >
                            {link.name}
                          </Typography>
                          <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-blue-500" />
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="p-8 border-t border-gray-100 bg-gray-50 pb-8 safe-area-bottom">
                    <div className="flex flex-col gap-4">
                      <Button className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 text-lg font-semibold">
                        Sign Up
                      </Button> 
                      <Button
                        variant="ghost"
                        className="w-full h-14 rounded-xl bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 text-lg font-medium"
                      >
                        <LogIn className="w-5 h-5 mr-3" />
                        Login
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 3. Mobile Footer */}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
