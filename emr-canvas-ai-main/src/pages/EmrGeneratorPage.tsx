import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FaMicrophone,
  FaBrain,
  FaFileAlt,
  FaCheckCircle,
  FaChartLine,
  FaClock,
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
  FaHospital,
  FaNotesMedical,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaMicrophone />,
    title: "Real‑Time Capture",
    description:
      "Accurate medical speech-to-text for live clinician–patient conversations.",
  },
  {
    icon: <FaBrain />,
    title: "AI Extraction",
    description:
      "Identifies key clinical data: symptoms, history, assessments, plans.",
  },
  {
    icon: <FaFileAlt />,
    title: "Structured Output",
    description:
      "Generates clean, standardized EMR sections ready for review and use.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Validation Layer",
    description:
      "Flags missing clinical elements and improves consistency and completeness.",
  },
];

const benefits = [
  {
    icon: <FaClock />,
    title: "Time Saved",
    stat: "70%",
    description: "Reduced manual entry through automated structuring.",
  },
  {
    icon: <FaChartLine />,
    title: "High Accuracy",
    stat: "95%+",
    description: "Medical terminology handling with adaptive refinement.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Compliance",
    stat: "100%",
    description: "Designed for secure and compliant clinical workflows.",
  },
];

export default function EmrGeneratorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, []);

  const handleRequestDemo = () => {
    navigate("/#contact");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-white via-green-50/20 to-blue-50/10'>
      {/* Healthcare background patterns */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <FaStethoscope className='absolute top-32 left-16 text-green-100 text-6xl opacity-20 animate-pulse' />
        <FaHeartbeat className='absolute bottom-40 right-20 text-green-200 text-5xl opacity-25 animate-bounce' />
        <FaMicroscope className='absolute top-1/2 right-1/4 text-green-100 text-7xl opacity-15 animate-pulse delay-1000' />
        <FaUserMd className='absolute top-1/4 left-1/3 text-green-150 text-4xl opacity-20 animate-bounce delay-500' />
        <FaHospital className='absolute bottom-1/3 left-1/4 text-green-100 text-5xl opacity-15 animate-pulse delay-700' />
        <FaNotesMedical className='absolute top-2/3 right-1/3 text-green-200 text-4xl opacity-20 animate-bounce delay-300' />
      </div>
      
      <Navigation />

      {/* Enhanced Hero */}
      <div className='pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 relative z-10'>
        <div className='max-w-6xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className='inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold tracking-wide mb-4 sm:mb-6 border border-green-200'>
              ✅ Available Now
            </span>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6'>
              <span className='bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent'>Laisten</span>
              <br />
              <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                AI‑Powered EMR Generation
              </span>
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4'>
              🎤 Convert clinical conversations into structured medical records in seconds. Reduce manual workload and keep focus on patient care.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mt-8 sm:mt-10 bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-green-200/50'
          >
            <div className='aspect-video bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-green-200 overflow-hidden shadow-inner'>
              <iframe
                src='https://www.emrgenerator.site'
                title='Laisten - AI EMR Generator Live Demo'
                className='w-full h-full'
                allow='microphone'
              />
            </div>
            <p className='text-xs sm:text-sm text-green-700 mt-3 sm:mt-4 font-medium'>🔴 Live Demo: Try Laisten's AI-powered medical transcription</p>
            
            <div className='mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
              <motion.a
                href='https://www.emrgenerator.site'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='group px-6 sm:px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2'
              >
                <FaFileAlt className='group-hover:scale-110 transition-transform duration-300' />
                <span>Try Laisten Live</span>
              </motion.a>
              <motion.button
                onClick={handleRequestDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-6 sm:px-8 py-3 bg-white/90 backdrop-blur-sm text-green-600 text-sm sm:text-base md:text-lg font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 hover:shadow-lg transition-all duration-300'
              >
                Request Full Access
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Features */}
      <div className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20 relative'>
        {/* Healthcare background elements */}
        <div className='absolute inset-0 pointer-events-none'>
          <FaStethoscope className='absolute top-20 right-16 text-green-200/30 text-4xl animate-pulse' />
          <FaHeartbeat className='absolute bottom-32 left-20 text-green-300/30 text-3xl animate-bounce' />
          <FaMicroscope className='absolute top-1/2 left-1/4 text-green-200/30 text-5xl animate-pulse delay-500' />
        </div>
        
        <div className='max-w-7xl mx-auto px-3 sm:px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-8 sm:mb-12'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>How </span>
              <span className='bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent'>Laisten</span>
              <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'> Works</span>
            </h2>
            <div className='w-16 sm:w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto'></div>
          </motion.div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='group bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 relative overflow-hidden'
              >
                {/* Medical gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                <div className='relative z-10'>
                  <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-green-600 text-xl sm:text-2xl mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300'>
                    {f.icon}
                  </div>
                  <h3 className='text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300'>
                    {f.title}
                  </h3>
                  <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                    {f.description}
                  </p>
                  
                  {/* Step indicator */}
                  <div className='absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center'>
                    {i + 1}
                  </div>
                  
                  {/* Bottom accent */}
                  <div className='mt-4 h-0.5 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Benefits */}
      <div className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-green-50/20 to-blue-50/10 relative'>
        {/* Healthcare background elements */}
        <div className='absolute inset-0 pointer-events-none'>
          <FaUserMd className='absolute top-24 left-16 text-green-200/30 text-4xl animate-bounce delay-300' />
          <FaHospital className='absolute bottom-20 right-20 text-green-100/30 text-5xl animate-pulse delay-700' />
          <FaNotesMedical className='absolute top-1/2 right-1/4 text-green-200/30 text-3xl animate-bounce' />
        </div>
        
        <div className='max-w-7xl mx-auto px-3 sm:px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-8 sm:mb-12'
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>Key </span>
              <span className='bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent'>Benefits</span>
            </h2>
            <div className='w-16 sm:w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto'></div>
          </motion.div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='group text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden'
              >
                {/* Medical gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                <div className='relative z-10'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                    {b.icon}
                  </div>
                  <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2'>
                    {b.stat}
                  </div>
                  <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300'>
                    {b.title}
                  </h3>
                  <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                    {b.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className='mt-4 h-0.5 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500 mx-auto'></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA */}
      <div className='py-12 sm:py-16 md:py-20 bg-gradient-to-r from-green-600 via-green-500 to-green-600 relative overflow-hidden'>
        {/* Healthcare background patterns */}
        <div className='absolute inset-0 pointer-events-none'>
          <FaStethoscope className='absolute top-16 left-16 text-green-300/20 text-6xl animate-pulse' />
          <FaHeartbeat className='absolute bottom-20 right-20 text-green-400/20 text-5xl animate-bounce' />
          <FaMicroscope className='absolute top-1/2 right-1/3 text-green-300/20 text-7xl animate-pulse delay-500' />
        </div>
        
        <div className='max-w-5xl mx-auto px-3 sm:px-4 text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6'>
              🎤 Ready to Experience Laisten?
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed'>
              Join clinicians adopting AI to accelerate care delivery, reduce administrative load, and focus on what matters most - patient care.
            </p>
            <motion.button
              onClick={handleRequestDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group px-6 sm:px-8 lg:px-9 py-3 sm:py-4 bg-white text-green-600 text-sm sm:text-base md:text-lg font-semibold rounded-full hover:bg-gray-100 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto'
            >
              <span>📋 Request a Demo</span>
              <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
