import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
  FaHospital,
  FaNotesMedical,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const aboutItems = [
  {
    icon: <FaRocket />,
    title: "Our Mission",
    description:
      "To revolutionize healthcare delivery through innovative technology solutions that empower medical professionals, streamline operations, and improve patient outcomes globally.",
    gradient: "from-green-500 to-emerald-600",
    stats: "Global Impact",
  },
  {
    icon: <FaLightbulb />,
    title: "Our Vision",
    description:
      "To become the leading healthcare technology provider, setting new industry standards for medical innovation, operational efficiency, and patient care excellence worldwide.",
    gradient: "from-blue-500 to-cyan-600",
    stats: "Innovation First",
  },
  {
    icon: <FaUsers />,
    title: "Our Team",
    description:
      "A dedicated team of software engineers, healthcare experts, and clinical researchers united by our commitment to advancing healthcare technology and making it accessible globally.",
    gradient: "from-indigo-500 to-purple-600",
    stats: "Expert Team",
  },
];

export default function AboutUsSection() {
  return (
    <section
      id='about'
      className='py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-green-50/20 relative overflow-hidden'
    >
      {/* Medical-themed floating icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/40 to-blue-100/30 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/40 rounded-full blur-3xl'></div>

        {/* Healthcare logo patterns */}
        <FaStethoscope className='absolute top-24 right-16 text-green-200 text-4xl animate-pulse opacity-40' />
        <FaHeartbeat className='absolute bottom-32 left-20 text-blue-200 text-3xl animate-bounce opacity-30' />
        <FaMicroscope className='absolute top-2/3 right-1/3 text-indigo-200 text-5xl animate-pulse opacity-20' />
        <FaUserMd className='absolute top-1/3 left-1/5 text-purple-200 text-3xl opacity-25 animate-bounce delay-500' />
        <FaHospital className='absolute bottom-1/4 right-1/4 text-green-100 text-4xl opacity-20 animate-pulse delay-700' />
        <FaNotesMedical className='absolute top-1/2 left-1/3 text-blue-200 text-3xl opacity-25 animate-bounce delay-300' />
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
            <div className='inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6'>
              <div className='w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse'></div>
              <span className='text-sm font-semibold text-green-700'>Who We Are</span>
            </div>

            <div className='flex items-center justify-center gap-6 mb-8'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                  About
                </span>
              </h2>

              <div className='shrink-0 h-24 w-32 md:h-28 md:w-40 lg:h-32 lg:w-48'>
                <img
                  src='/ai_logo_new.png'
                  alt='AI Lab Pvt Ltd Logo'
                  className='h-full w-full object-contain drop-shadow-lg'
                />
              </div>
            </div>

            <div className='w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6'></div>

            <p className='text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              We are a healthcare technology company dedicated to transforming
              clinical operations through advanced software solutions. Our
              mission is to enhance the healthcare system globally by providing
              innovative, technology-driven platforms that streamline workflows,
              improve accuracy, and enhance patient care quality.
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
              className='group relative'
            >
              {/* Card */}
              <div className='bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden'>
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>

                {/* Icon Container */}
                <div className='relative mb-6 z-10'>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  {/* Floating Badge */}
                  <div className='absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 shadow-md border border-gray-100'>
                    <span className='text-xs font-bold text-gray-700'>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 relative z-10'>
                  <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.gradient}`}>
                    {item.title}
                  </h3>

                  <p className='text-sm text-gray-600 leading-relaxed mb-4'>
                    {item.description}
                  </p>
                </div>

                {/* Stats Badge */}
                <div className='relative z-10 mt-4'>
                  <div className='flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-colors duration-300'>
                    <span className='text-xs font-semibold text-gray-500'>Focus</span>
                    <span className={`text-sm font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.stats}
                    </span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className='absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300'>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <FaArrowRight className='text-sm' />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
