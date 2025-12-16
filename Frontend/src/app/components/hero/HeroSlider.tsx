import type { ComponentType } from "react";
import { heroSlides } from "@/data/heroSlides";
import HeroSlideCard from "./HeroSlideCard";

export default function HeroSlider() {
  return (
    <section className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div className="flex h-screen">
        {heroSlides.map((slide) => {
          const Slide: ComponentType<{ slide: typeof heroSlides[number] }> = HeroSlideCard;
          return <Slide key={slide.id} slide={slide} />;
        })}
      </div>
      
    </section>
  );
}
