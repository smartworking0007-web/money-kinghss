import HeroSlider from "./components/hero/HeroSlideCard";
import { StatsSection } from "./components/stats";
// import SuccessStories from "./components/success-stories/successStories";
import SuccessStories from "./components/success-stories/SuccessStories";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSlider />
      
      <StatsSection />
      <SuccessStories />
    </main>
    
  );
}