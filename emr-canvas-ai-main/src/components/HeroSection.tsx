import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";

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
    <section className='relative bg-gradient-to-br from-white via-green-50/30 to-blue-50/20 pt-16 sm:pt-20 overflow-hidden'>
      {/* Enhanced Medical Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-green-100/40 to-blue-100/30 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-green-100/40 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-green-50/50 rounded-full blur-2xl animate-pulse delay-500'></div>
        
        {/* Medical Icons Floating */}
        <div className='absolute top-32 left-20 text-green-200/30 animate-bounce'>
          <FaStethoscope className='w-8 h-8' />
        </div>
        <div className='absolute bottom-32 right-20 text-blue-200/30 animate-bounce delay-300'>
          <FaHeartbeat className='w-10 h-10' />
        </div>
        <div className='absolute top-1/2 right-1/4 text-green-200/30 animate-bounce delay-700'>
          <FaUserMd className='w-6 h-6' />
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-12rem)]'>
          {/* Left side - Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left'
          >
            {/* Professional Medical Badge */}
            <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-full shadow-md'>
              <div className='w-3 h-3 bg-green-600 rounded-full mr-3 animate-pulse'></div>
              <span className='text-sm font-bold text-green-800 tracking-wide'>
                🏥 AI-Powered Healthcare Solutions
              </span>
            </div>

            {/* Enhanced Title with Medical Theme */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1]'>
              <span className='text-gray-900'>Transforming </span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-green-700'>
                Healthcare
              </span>
              <br />
              <span className='text-gray-900'>Through </span>
              <span className='text-green-600 relative'>
                AI Innovation
                {/* Enhanced underline */}
                <svg
                  className='absolute -bottom-3 left-0 w-full'
                  height='12'
                  viewBox='0 0 300 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 8C75 2 225 2 298 8'
                    stroke='url(#gradient)'
                    strokeWidth='4'
                    strokeLinecap='round'
                  />
                  <defs>
                    <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='#16a34a' />
                      <stop offset='50%' stopColor='#2563eb' />
                      <stop offset='100%' stopColor='#16a34a' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className='text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl'>
              Pioneering intelligent solutions that bridge artificial intelligence and medical practice. 
              From automated documentation to diagnostic support, we're revolutionizing healthcare delivery 
              with precision, efficiency, and care.
            </p>

            {/* Professional CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start'>
              <button
                onClick={handleViewProducts}
                className='group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3'
              >
                <span>📊 View Our Products</span>
                <FaArrowRight className='group-hover:translate-x-2 transition-transform duration-300' />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className='px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-2xl border-2 border-gray-300 hover:border-green-500 hover:text-green-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
              >
                <span>📞 Get in Touch</span>
              </button>
            </div>

            {/* Enhanced Stats with Medical Icons */}
            <div className='grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t-2 border-gray-200'>
              <div className='text-center group'>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 group-hover:scale-110 transition-transform duration-300'>
                  3
                </div>
                <div className='text-xs sm:text-sm font-semibold text-gray-600 mt-1 sm:mt-2'>AI Products</div>
                <div className='text-xs text-gray-500 hidden sm:block'>Healthcare Solutions</div>
              </div>
              <div className='text-center group'>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 group-hover:scale-110 transition-transform duration-300'>
                  AI
                </div>
                <div className='text-xs sm:text-sm font-semibold text-gray-600 mt-1 sm:mt-2'>Powered Solutions</div>
                <div className='text-xs text-gray-500 hidden sm:block'>Advanced Technology</div>
              </div>
              <div className='text-center group'>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 group-hover:scale-110 transition-transform duration-300'>
                  24/7
                </div>
                <div className='text-xs sm:text-sm font-semibold text-gray-600 mt-1 sm:mt-2'>Support</div>
                <div className='text-xs text-gray-500 hidden sm:block'>Always Available</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Enhanced Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex justify-center lg:justify-end order-1 lg:order-2 px-4 sm:px-0'
          >
            <div className='relative'>
              <div className='absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-green-200/40 to-blue-200/30 rounded-full blur-3xl animate-pulse'></div>
              <div className='absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-blue-200/30 to-green-200/40 rounded-full blur-3xl animate-pulse delay-1000'></div>
              
              <div className='absolute top-2 sm:top-4 right-2 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 text-green-400/60'>
                <div className='w-full h-1 bg-current absolute top-1/2 transform -translate-y-1/2'></div>
                <div className='h-full w-1 bg-current absolute left-1/2 transform -translate-x-1/2'></div>
              </div>

              <div className='relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[520px] xl:h-[520px] bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 flex items-center justify-center border-2 border-gray-100 hover:shadow-3xl hover:scale-105 transition-all duration-500'>
                <div className='absolute inset-0 bg-gradient-to-br from-green-50/20 to-blue-50/20 rounded-2xl sm:rounded-3xl'></div>
                <img
                  src='/ai_doctor.png'
                  alt='Healthcare AI Innovation'
                  className='w-full h-full object-contain relative z-10 drop-shadow-lg'
                />
                
                <div className='absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full animate-ping'></div>
                <div className='absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full animate-ping delay-500'></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
