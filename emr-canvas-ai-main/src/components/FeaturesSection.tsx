import { useRef } from "react";
import { FaRobot, FaHospital, FaChartLine, FaUserMd, FaStethoscope, FaHeartbeat, FaMicroscope, FaNotesMedical, FaAmbulance } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Tools",
    description:
      "Simple AI that helps with patient care, imaging and daily tasks in one place.",
  },
  {
    icon: <FaHospital />,
    title: "Easy Integration",
    description:
      "Connects to existing systems like EHR or PACS without big changes.",
  },
  {
    icon: <FaChartLine />,
    title: "Clear Insights",
    description:
      "Turns health data into easy trends and useful signals you can act on.",
  },
  {
    icon: <FaUserMd />,
    title: "Support for Clinicians",
    description:
      "Reduces manual work and helps doctors focus more on patients.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id='services'
      className='py-20 md:py-28 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20 relative overflow-hidden'
    >
      {/* Medical-themed floating icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 right-10 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-30'></div>
        <div className='absolute bottom-20 left-10 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-40'></div>
        
        {/* Healthcare logo patterns */}
        <FaStethoscope className='absolute top-32 left-16 text-green-200 text-4xl animate-pulse opacity-40' />
        <FaHeartbeat className='absolute bottom-40 right-20 text-green-300 text-3xl animate-bounce opacity-30' />
        <FaMicroscope className='absolute top-1/2 right-1/4 text-green-200 text-5xl animate-pulse opacity-20' />
        <FaNotesMedical className='absolute top-1/4 left-1/3 text-green-150 text-3xl opacity-25 animate-bounce delay-500' />
        <FaAmbulance className='absolute bottom-1/3 left-1/5 text-green-100 text-4xl opacity-20 animate-pulse delay-700' />
        <FaHospital className='absolute top-3/4 right-1/5 text-green-200 text-3xl opacity-25 animate-bounce delay-300' />
      </div>

      <div className='container mx-auto px-6 lg:px-10 relative z-10'>
        {/* Heading */}
        <div className='text-center mb-16 md:mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>Healthcare AI</span>
              <br />
              <span className='bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent'>Made Simple</span>
            </h2>
            <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>
            <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              We build easy AI tools that help improve care, save time and give better results.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 relative overflow-hidden'
            >
              {/* Medical gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              {/* Icon */}
              <div className='relative mb-5 z-10'>
                <div className='w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300'>
                  {f.icon}
                </div>
                {/* Medical cross accent */}
                <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Title */}
              <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2 relative z-10 group-hover:text-green-700 transition-colors duration-300'>
                {f.title}
              </h3>

              {/* Description */}
              <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 relative z-10'>
                {f.description}
              </p>

              {/* Medical-themed bottom accent */}
              <div className='relative z-10'>
                <div className='h-1 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
                <div className='absolute right-0 top-0 w-2 h-1 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300'></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;