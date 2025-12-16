// src/components/stats/StatsSection.tsx
import Image from 'next/image';
import StatsCard from './StatsCard';


const statsData = [
  { number: '50,00+', label: 'Active Students' },
  { number: '95%',      label: 'Completion Rate' },
  { number: '500+',     label: 'Expert Instructors' },
  { number: '85%',      label: 'Career Advancement' },
];

// Tere public/images/ folder mein yeh SVGs hone chahiye
const partners = [
  { name: 'Google',    logo: '/images/google.svg' },
  { name: 'Microsoft', logo: '/images/microsoft.svg' },
  { name: 'Amazon',    logo: '/images/amazon.svg' },
  { name: 'Apple',     logo: '/images/apple.svg' },
];

export default function StatsSection() {
  return (
    //background gray-50 
    <section className="bg-gray-50 py-12 md:py-16">

      {/* Full width background (1440px 1920px ) */}
      <div className="w-full">

        {/*  — EXACT 1280px width + center  */}
        {/* Side padding: mobile pe 32px, desktop pe 80px */}
        <div className="mx-auto max-w-[1280px] px-8 md:px-20">

          {/* 4 Stats Cards — mobile  2 column, desktop  4 column */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-15 lg:gap-20 mb-16 text-center">
            {statsData.map((stat) => (
              <StatsCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
          <div className="text-center">
            {/* Partner logos — */}
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-28">
              {partners.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={48}
                  unoptimized 
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}