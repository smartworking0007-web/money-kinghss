import Image from "next/image";
import { Typography } from "../ui/Typography";

const CompanyIntro = () => {
  return (
    <section className="w-full bg-white mb-10
      /* === MOBILE VIEW SPACING === */
      py-12 px-4 
      /* === WEB VIEW SPACING === */
      lg:py-32 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid items-center
        /* === GRID LAYOUT === */
        grid-cols-1 gap-12
        lg:grid-cols-2 lg:gap-0"
      >
        
        {/* ========================================= */}
        {/* LEFT SIDE: IMAGE SECTION                  */}
        {/* ========================================= */}
        <div className="relative flex justify-center lg:justify-start">
            
            {/* FRAME CONTAINER (The Border Box) */}
            <div className="relative  border-[#1f3c4e] w-full 
              /* Mobile Dimensions */
              p-3 max-w-[350px] sm:max-w-[450px] h-auto
              /* Web Dimensions */
              lg:max-w-[500px] lg:h-[400px]"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative w-full overflow-hidden shadow-xl
                /* === MOBILE IMAGE POSITIONING === */
                /* Height badha kar 350px kar di taaki image kam pichke */
                -mt-[40px] h-[350px]
                /* === WEB IMAGE POSITIONING === */
                lg:-mt-[80px] lg:w-[520px] lg:h-[500px]"
              >
                <Image
                  src="/images/Company.jpg" 
                  alt="Business Growth and Capital"
                  fill
                  /* CHANGE: 'object-cover' hata kar 'object-fill' kiya.
                     Isse image stretch hokar box mein fit ho jayegi par KATEGI NAHI.
                  */
                  className="object-fill"
                />
              </div>
            </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT SIDE: TEXT SECTION                  */}
        {/* ========================================= */}
        <div className="flex flex-col gap-6 
          /* === WEB ALIGNMENT === */
          mt-1 lg:-mt-[80px] lg:pl-10"
        >
          <Typography 
            variant="h2" 
            className="text-[#0b1c44] mb-0 mt-2
            /* Mobile Text Alignment */
            text-align mt-5 mb-[-15] lg:text-left" 
          >
            Your Growth, Our Capital 
            Trusted Loan Solutions For Every Need
          </Typography>
          <Typography variant="b1" className="text-gray-600 leading-relaxed text-align lg:text-left">
            Welcome to <span className="font-bold text-black">Money King Financial services pvt ltd</span>, 
            your trusted partner for financial solutions. We&apos;re dedicated to empowering businesses 
            with accessible and flexible loan options, helping them grow, expand, and thrive.
            With <span className="font-bold text-black">years of experience</span> in the finance 
            industry, our team of experts provides personalized support and tailored loan solutions 
            to meet the unique needs of each business. Our mission is to bridge the financial gap 
            for businesses, providing them with the necessary funds to achieve their goals. 
          </Typography>

          {/* Button Container */}
          <div className="pt-2 flex justify-align lg:justify-start">
            <button className="bg-[#009b4d] cursor-pointer mb-4 hover:bg-[#008240] px-9 py-3 rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              <Typography variant="btn-primary">
                Read More
              </Typography>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyIntro;