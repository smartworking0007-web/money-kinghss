import WhyChoose from "./components/Choose/WhyChoose";
import FinancialPartners from "./components/FinancialPartners/FinancialPartners";
import Founders from "./components/founders/Founders";
import HeroSlider from "./components/hero/HeroSlideCard";
import LoanCalculator from "./components/LoanCalculator/LoanCalculator";
import ServiceGrid from "./components/Service/ServiceGrid";
import CompanyIntro from "./components/stats/CompanyIntro";
import Testimonials from "./components/Testimonials/Testimonials";
// import SuccessStories from "./components/success-stories/SuccessStories";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSlider />
      <CompanyIntro/>
      <ServiceGrid/>
      <LoanCalculator/>
      <FinancialPartners/>
      <WhyChoose/>
      <Founders/>
      <Testimonials/>
      {/* <SuccessStories /> */}
    </main>
    
  );
}