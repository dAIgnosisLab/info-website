import { FaRocket, FaBrain, FaUsers } from "react-icons/fa";
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
      className='py-20 md:py-28 bg-white relative overflow-hidden'
    >
      {/* Subtle background decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40'></div>
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
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900'>
                About
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
              className='group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300'
            >
              {/* Icon container */}
              <div className='relative mb-6'>
                <div className='w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-md group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </div>
                {/* Decorative dot */}
                <div className='absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Title */}
              <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>
                {item.title}
              </h3>

              {/* Description */}
              <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className='mt-6 h-1 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}