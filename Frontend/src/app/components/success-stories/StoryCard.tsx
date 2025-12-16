import React from 'react';
import Image from 'next/image';
import { Typography } from '@/app/components/ui/Typography';

interface SuccessStory {
  id: string | number;
  name: string;
  role: string;
  company: string;
  description: string;
  imageUrl?: string;
} 

interface StoryCardProps {
  data: SuccessStory;
}

const StoryCard: React.FC<StoryCardProps> = ({ data }) => {
  return (
    <div className="min-w-[350px] w-[350px] h-[450px] bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col mx-3 select-none relative group">
      {/* Image Container */}
      <div className="relative h-[280px]  w-full bg-gray-200 overflow-hidden">
        <Image
          src={data.imageUrl || "https://placehold.co/600x400/png"}
          alt={data.name}
          fill
          sizes="(max-width: 640px) 100vw, 380px"
          className="object-cover object-top duration-700 group-hover:scale-120 pointer-events-none"
        />
        
        {/* Watch Story Button */}
        <div className="absolute bottom-4 left-4 z-10">
          <button className="flex items-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-4 py-1.5 rounded-md transition-colors shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            <Typography variant="b2" as="span" className="text-white ">
              Watch my story
            </Typography>
          </button>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <Typography variant="s1" as="h3" className="text-gray-900 leading-snug line-clamp-3">
          {data.description}
        </Typography>
        
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <Typography variant="b2" className="font-bold text-gray-900">
            {data.name}
          </Typography>
          
          <Typography variant="b3" className="mt-1 text-gray-500">
            {data.role} <span className="text-gray-400">@{data.company}</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;