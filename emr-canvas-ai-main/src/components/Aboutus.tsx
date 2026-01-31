import { FaRocket, FaBrain, FaUsers, FaStethoscope, FaHeartbeat, FaMicroscope, FaUserMd, FaHospital, FaNotesMedical } from "react-icons/fa";
import { motion } from "framer-motion";

const aboutItems = [
  {
    icon: <FaRocket />,
    title: "Our Mission",
    description:
      "To revolutionize healthcare by leveraging cutting-edge AI technology that empowers medical professionals to focus on patient care and improve healthcare outcomes.",
  },
  {
    icon: <FaBrain />,
    title: "Our Vision",
    description:
      "To become a leading AI-powered healthcare technology provider globally, setting new standards for medical innovation, efficiency, and patient care excellence.",
  },
  {
    icon: <FaUsers />,
    title: "Our Team",
    description:
      "A passionate team of ML engineers, healthcare experts, and researchers united by the goal of advancing healthcare technology and making it accessible worldwide.",
  },
];

export default function AboutUsSection() {
  return (
    <section
      id='about'
      className='py-20 md:py-28 bg-gradient-to-br from-white via-green-50/20 to-blue-50/10 relative overflow-hidden'
    >
      {/* Medical-themed floating icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40'></div>
        
        {/* Healthcare logo patterns */}
        <FaStethoscope className='absolute top-24 right-16 text-green-200 text-4xl animate-pulse opacity-40' />
        <FaHeartbeat className='absolute bottom-32 left-20 text-green-300 text-3xl animate-bounce opacity-30' />
        <FaMicroscope className='absolute top-2/3 right-1/3 text-green-200 text-5xl animate-pulse opacity-20' />
        <FaUserMd className='absolute top-1/3 left-1/5 text-green-150 text-3xl opacity-25 animate-bounce delay-500' />
        <FaHospital className='absolute bottom-1/4 right-1/4 text-green-100 text-4xl opacity-20 animate-pulse delay-700' />
        <FaNotesMedical className='absolute top-1/2 left-1/3 text-green-200 text-3xl opacity-25 animate-bounce delay-300' />
      </div>

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        {/* Heading */}
        <div className='text-center mb-16 md:mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center justify-center gap-6 mb-8'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>About</span>
              </h2>

              <div className='shrink-0 h-24 w-32 md:h-28 md:w-40 lg:h-32 lg:w-48'>
                <img
                  src='/logo.png'
                  alt='DAIgnosisLab Logo'
                  className='h-full w-full object-contain drop-shadow-lg'
                />
              </div>
            </div>

            <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>

            <p className='text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              We are a healthcare technology startup dedicated to transforming
              healthcare through artificial intelligence. Our mission is to
              advance the healthcare system globally by providing innovative,
              AI-powered solutions that streamline workflows and enhance patient
              care quality.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 relative overflow-hidden'
            >
              {/* Medical gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              {/* Icon container */}
              <div className='relative mb-6 z-10'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </div>
                {/* Medical cross accent */}
                <div className='absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute -top-1.5 -right-1.5 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Title */}
              <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-green-700 transition-colors duration-300'>
                {item.title}
              </h3>

              {/* Description */}
              <p className='text-sm md:text-base text-gray-600 leading-relaxed relative z-10'>
                {item.description}
              </p>

              {/* Medical-themed bottom accent */}
              <div className='mt-6 relative z-10'>
                <div className='h-1 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
                <div className='absolute right-0 top-0 w-2 h-1 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300'></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}