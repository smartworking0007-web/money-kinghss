"use client";

import * as React from "react";
import { X } from "lucide-react";

// 1. Context banaya
const SheetContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <SheetContext.Provider value={{ open, setOpen: onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
};

// 2. SheetContent (YAHAN LOGIC HAI LEFT/RIGHT KA)
interface SheetContentProps {
  side?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export const SheetContent: React.FC<SheetContentProps> = ({ 
  side = "right", 
  children, 
  className 
}) => {
  const context = React.useContext(SheetContext);
  
  if (!context) throw new Error("SheetContent must be used within Sheet");
  if (!context.open) return null; 

  // Agar side="left" hai to 'left-0', nahi to 'right-0'
  const positionClass = side === "left" ? "left-0 border-r" : "right-0 border-l";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => context.setOpen(false)}
      />
      
      {/* Dynamic Class: ${positionClass} */}
      <div 
        className={`fixed inset-y-0 ${positionClass} z-50 bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${className || ""}`}
      >
        {children}
      </div>
    </>
  );
};

// 3. Types Fix & Trigger
interface ChildWithOnClick {
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: unknown;
}

export const SheetTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children, asChild }) => {
  const context = React.useContext(SheetContext);
  
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<ChildWithOnClick>;
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
         child.props.onClick?.(e);
         context?.setOpen(true);
      }
    });
  }
  
  return (
    <button onClick={() => context?.setOpen(true)}>
      {children}
    </button>
  );
};

export const SheetHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-between p-6 border-b border-gray-100">
    {children}
  </div>
);

export const SheetTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3 font-semibold text-lg">
    {children}
  </div>
);

export const SheetClose: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = React.useContext(SheetContext);
  return (
    <button onClick={() => context?.setOpen(false)}>
      {children || <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />}
    </button>
  );
};