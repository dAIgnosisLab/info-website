import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='min-h-screen relative bg-white pt-20'>
      <div className='container mx-auto px-6 lg:px-8 py-12 lg:py-20'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)]'>
          {/* Left side - Text Content */}
          <div className='space-y-8 order-2 lg:order-1'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight'>
              Transforming Healthcare
              <br />
              <span className='text-green-600'>Through AI Innovation</span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-600 leading-relaxed'>
              We are a healthcare AI company pioneering intelligent solutions
              that bridge the gap between artificial intelligence and medical
              practice. From automated documentation to diagnostic support,
              we're revolutionizing how healthcare is delivered.
            </p>

            <div className='pt-4'>
              <button 
                onClick={handleViewProducts}
                className='group relative px-10 py-5 bg-white text-gray-800 text-xl font-semibold rounded-full border-2 border-gray-300 overflow-hidden transition-all duration-300 hover:text-white'
              >
                <span className='relative z-10'>View Our Products</span>
                <span className='absolute inset-0 bg-green-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500'></span>
              </button>
            </div>
          </div>

          {/* Right side - Image Container */}
          <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
            <div className='relative group'>
              {/* Main circle container */}
              <div className='w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-105'>
                {/* Image */}
                <img
                  src='/ai_doctor.png'
                  alt='Healthcare AI Innovation'
                  className='w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[450px] lg:h-[450px] object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;