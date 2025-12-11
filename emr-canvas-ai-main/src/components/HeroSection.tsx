import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

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
    <section className='relative bg-gradient-to-b from-white to-gray-50 pt-20 overflow-hidden'>
      {/* Subtle background decoration */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-0 w-96 h-96 bg-green-50/40 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-6 lg:px-8 py-16 lg:py-24 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-12rem)]'>
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8 order-2 lg:order-1'
          >
            <div className='inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full'>
              <span className='text-sm font-semibold text-green-700'>
                AI-Powered Healthcare Solutions
              </span>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]'>
              Transforming Healthcare Through{" "}
              <span className='text-green-600 relative'>
                AI Innovation
                <svg
                  className='absolute -bottom-2 left-0 w-full'
                  height='8'
                  viewBox='0 0 200 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 5.5C50 1.5 150 1.5 199 5.5'
                    stroke='#16a34a'
                    strokeWidth='3'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
            </h1>

            <p className='text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl'>
              Pioneering intelligent solutions that bridge artificial
              intelligence and medical practice. From automated documentation to
              diagnostic support, we're revolutionizing healthcare delivery.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onClick={handleViewProducts}
                className='group px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2'
              >
                View Our Products
                <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className='px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-green-600 hover:text-green-600 transition-all duration-300'
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8 border-t border-gray-200'>
              <div>
                <div className='text-3xl md:text-4xl font-bold text-green-600'>
                  1
                </div>
                <div className='text-sm text-gray-600 mt-1'>AI Product</div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold text-green-600'>
                  AI
                </div>
                <div className='text-sm text-gray-600 mt-1'>
                  Powered Solutions
                </div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold text-green-600'>
                  24/7
                </div>
                <div className='text-sm text-gray-600 mt-1'>Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex justify-center lg:justify-end order-1 lg:order-2'
          >
            <div className='relative'>
              {/* Decorative elements */}
              <div className='absolute -top-6 -right-6 w-72 h-72 bg-green-200/30 rounded-full blur-2xl'></div>
              <div className='absolute -bottom-6 -left-6 w-72 h-72 bg-green-100/40 rounded-full blur-2xl'></div>

              {/* Main image container */}
              <div className='relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center border border-gray-100'>
                <img
                  src='/ai_doctor.png'
                  alt='Healthcare AI Innovation'
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
