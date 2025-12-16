// src/components/stats/StatsCard.tsx
import { Typography } from "../ui/Typography";

type StatsCardProps = {
  number: string;
  label: string;
};

export default function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="text-center">
      {/* Mobile 80px → Desktop 108px */}
      <Typography
        as="div"
        variant="d1"
        className="text-gray-500 
                   text-[40px] leading-[30px]
                   md:text-[96px] md:leading-[40px]
                   lg:w-[94px] lg:h-[70px]"
      >
        {number}
      </Typography>

      {/* Label (Active Students, etc.) */}
      <Typography
        as="p"
        variant="b1"
        className="mt-3 text-gray-500  md:text-lg "
      >
        {label}
      </Typography>
    </div>
  );
}
