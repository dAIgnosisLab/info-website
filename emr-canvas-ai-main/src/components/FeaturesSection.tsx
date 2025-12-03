import { useRef } from "react";
import { FaRobot, FaHospital, FaChartLine, FaUserMd } from "react-icons/fa";
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
      className='py-20 md:py-28 bg-gray-50 relative overflow-hidden'
    >
      {/* Subtle background decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 right-10 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-30'></div>
        <div className='absolute bottom-20 left-10 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-40'></div>
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
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
              Healthcare AI
              <br />
              <span className='text-green-600'>Made Simple</span>
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
              className='group bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300'
            >
              {/* Icon */}
              <div className='relative mb-5'>
                <div className='w-14 h-14 md:w-16 md:h-16 rounded-xl bg-green-600 flex items-center justify-center text-white text-2xl md:text-3xl shadow-md group-hover:scale-110 transition-transform duration-300'>
                  {f.icon}
                </div>
                {/* Decorative dot */}
                <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Title */}
              <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>
                {f.title}
              </h3>

              {/* Description */}
              <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4'>
                {f.description}
              </p>

              {/* Bottom accent line */}
              <div className='h-1 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;