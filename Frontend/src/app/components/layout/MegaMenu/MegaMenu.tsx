'use client';
import { useState } from 'react';
import { MENU_DATA } from '@/data/megaMenuData';
export default function MegaMenu() {
  const [activeCategory] = useState(MENU_DATA[0].id);
  // Find the data for the active category
  const activeData = MENU_DATA.find((c) => c.id === activeCategory) || MENU_DATA[0];
  return (
    <div className="relative group">
      {/* Full Width Dropdown */}
      <div className="fixed left-0 top-[84px] w-full h-[calc(100vh-84px)] bg-black/20 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
        {/* The actual menu container */}
        <div className="bg-white border-t border-gray-100 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-0">
              {/* LEFT: Categories (3 Cols) */}
              <div className="col-span-12 lg:col-span-3">
              </div>
              <div className="col-span-12 lg:col-span-9">
                <div className="p-4">
                  <pre className="text-sm text-gray-700">{JSON.stringify(activeData)}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}