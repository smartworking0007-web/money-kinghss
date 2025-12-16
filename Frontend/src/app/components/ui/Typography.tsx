// src/components/ui/Typography.tsx
import * as React from "react";
import { cn } from "@/app/lib/utils";

type Variant =
  | "d1" | "d2"
  | "h1" | "h2" | "h3" | "h4" | "h5"
  | "s1" | "s2"
  | "b1" | "b2" | "b3" 
  | "caption"
  | "nav-link" | "btn-primary" | "btn-outline" | "price";

const variantStyles: Record<Variant, string> = { 
  // DISPLAY
  d1: "text-[56px] leading-[60px] tracking-[-1.5%] lg:text-[72px] lg:leading-[80px] lg:tracking-[-1.8%] font-bold",
  d2: "text-[48px] leading-[56px] tracking-[-1.5%] lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.5%] font-bold",

  // HEADINGS
  h1: "text-[40px] leading-[48px] tracking-[-1.5%] lg:text-[56px] lg:leading-[60px] lg:tracking-[-1.5%] font-bold",
  h2: "text-[36px] leading-[44px] tracking-[-1.5%] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.5%] font-bold",
  h3: "text-[32px] leading-[40px] tracking-[-1.2%] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1.5%] font-semibold",
  h4: "text-[24px] leading-[32px] tracking-[-1.2%] lg:text-[32px] lg:leading-[40px] lg:tracking-[-1.2%] font-semibold",
  h5: "text-[20px] leading-[28px] tracking-[-1.5%] lg:text-[24px] lg:leading-[32px] lg:tracking-[-1.2%] font-medium",

  // SUB HEADINGS
  s1: "text-[18px] leading-[26px] tracking-[0] lg:text-[20px] lg:leading-[28px] lg:tracking-[-1.5%] font-medium",
  s2: "text-[18px] leading-[26px] tracking-[0] font-medium",

  // BODY
  b1: "text-base leading-6 font-normal text-gray-700",        
  b2: "text-sm leading-5 font-normal text-gray-700",          
  b3: "text-xs leading-4 font-normal text-gray-600",          
  caption: "text-[10px] leading-3 font-normal text-gray-500",  

  // UI TEXT
  "nav-link": "text-base font-medium text-gray-600 hover:text-blue-600 transition-colors",
  "btn-primary": "text-base font-semibold text-white",
  "btn-outline": "text-base font-medium text-blue-600 hover:text-white-600",
  "price": "text-2xl font-bold text-green-600",
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  className?: string;
  children: React.ReactNode;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "b1", as, children, ...props }, ref) => {
    const Component: React.ElementType = as || getDefaultTag(variant);

    const classNames = cn(
      "font-lexend antialiased",
      variantStyles[variant],
      (variant?.startsWith("d") || variant?.startsWith("h")) &&
        "scroll-mt-20 mb-8 mt-12 first:mt-0",
      className
    );

    return React.createElement(
      Component,
      { ref, className: classNames, ...props },
      children
    );
  }
);
Typography.displayName = "Typography";
const getDefaultTag = (variant?: string) => {
  if (variant?.startsWith("d") || variant === "h1") return "h1";
  if (variant === "h2") return "h2";
  if (variant === "h3") return "h3";
  if (variant === "h4") return "h4";
  if (variant === "h5") return "h5";
  return "p";
};