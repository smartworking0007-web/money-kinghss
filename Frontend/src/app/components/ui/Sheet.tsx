// src/components/ui/Sheet.tsx
import * as React from "react";
import { X } from "lucide-react";

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

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => onOpenChange(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-50 flex flex-col">
        {children}
      </div>
    </>
  );
};

export const SheetContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={`flex flex-col h-full ${className || ""}`}>{children}</div>;

export const SheetTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({
  children,
}) => <>{children}</>;

export const SheetHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-between p-6 border-b">
    {children}
  </div>
);

// YE THA MISSING — AB ADD KAR DIYA!
export const SheetTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3">
    {children}
  </div>
);

export const SheetClose: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}>
    {children || <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />}
  </button>
);