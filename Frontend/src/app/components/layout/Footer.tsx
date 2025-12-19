"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "../ui/Typography";
import { footerData } from "@/data/footerData";
import { FooterItem, SocialItem } from "@/types/footer";
import { 
  Mail, Phone, MapPin, Globe, Send, 
  Facebook, Twitter, Instagram, Youtube, Linkedin, LucideIcon 
} from "lucide-react";

const platformIcons: Record<string, LucideIcon> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1D33] text-white py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Information Column */}
          <div className="flex flex-col space-y-7">
            <Typography variant="h5" className="text-white font-bold border-b-2 border-[#4DB6AC] pb-3 inline-block w-fit">
              Information
            </Typography>
            <ul className="space-y-5">
              {footerData.information.map((item: FooterItem, idx: number) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-2.5 rounded-xl text-[#4DB6AC] group-hover:bg-[#4DB6AC] group-hover:text-white transition-all shrink-0">
                    {item.type === "phone" && <Phone size={18} />}
                    {item.type === "mail" && <Mail size={18} />}
                    {item.type === "map" && <MapPin size={18} />}
                    {item.type === "globe" && <Globe size={18} />}
                  </div>
                  <Link href={item.href} className="pt-1.5 flex-1">
                    <Typography variant="b2" className="text-gray-100 group-hover:text-[#4DB6AC] transition-colors">
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-7">
            <Typography variant="h5" className="text-white font-bold border-b-2 border-[#4DB6AC] pb-3 inline-block w-fit">
              Quick Links
            </Typography>
            <ul className="space-y-4">
              {footerData.quickLinks.map((link: FooterItem, idx: number) => (
                <li key={idx}>
                  <Link href={link.href} className="group flex items-center gap-2">
                    <Typography variant="b2" className="text-white group-hover:text-[#4DB6AC] transition-all group-hover:translate-x-1">
                      <span className="text-[#4DB6AC] text-[10px] mr-2">●</span> {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col space-y-7">
            <Typography variant="h5" className="text-white font-bold border-b-2 border-[#4DB6AC] pb-3 inline-block w-fit">
              Services
            </Typography>
            <ul className="space-y-4">
              {footerData.services.map((service: FooterItem, idx: number) => (
                <li key={idx}>
                  <Link href={service.href} className="group flex items-center gap-2">
                    <Typography variant="b2" className="text-white group-hover:text-[#4DB6AC] transition-all group-hover:translate-x-1">
                      <span className="text-[#4DB6AC] text-[10px] mr-2">●</span> {service.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col space-y-7">
            <Typography variant="h5" className="text-white font-bold border-b-2 border-[#4DB6AC] pb-3 inline-block w-fit">
              Newsletter
            </Typography>
            <div className="relative flex items-center bg-white/10 border border-white/20 rounded-2xl p-1.5 focus-within:border-[#4DB6AC] transition-all">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent text-white px-4 py-3 w-full outline-none text-sm placeholder:text-gray-400"
              />
              <button className="bg-[#4DB6AC] hover:bg-[#3db6a3] p-3 rounded-xl transition-all shadow-lg active:scale-90">
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center lg:items-start space-y-3">
            <Typography variant="h4" className="text-white font-black uppercase">
              Money King Financial
            </Typography>
            <Typography variant="caption" className="text-gray-300">
              © {new Date().getFullYear()} Money King Financial Services PVT.LTD.
            </Typography>
          </div>

          {/* Social Links Mapping */}
          <div className="flex gap-4">
            {footerData.socials.map((social: SocialItem, idx: number) => {
              const Icon = platformIcons[social.platform] || Globe;
              return (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#4DB6AC] hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
