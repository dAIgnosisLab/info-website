import {
  FaSearch,
  FaCogs,
  FaDatabase,
  FaLaptopMedical,
  FaCheckCircle,
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
  FaHospital,
  FaNotesMedical,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Identify Healthcare Challenges",
      desc: "We identify critical operational inefficiencies and time-consuming manual processes in healthcare settings that can benefit from digital transformation.",
      icon: <FaSearch />,
      color: "from-green-500 to-emerald-600",
      percentage: 20,
    },
    {
      step: "02",
      title: "Analyze Technology Solutions",
      desc: "Our expert team evaluates how advanced software and automation technologies can effectively transform clinical and administrative workflows.",
      icon: <FaCogs />,
      color: "from-blue-500 to-cyan-600",
      percentage: 40,
    },
    {
      step: "03",
      title: "Research & Development",
      desc: "We conduct comprehensive research into medical data structures and clinical terminology to build robust, accurate, and compliant healthcare solutions.",
      icon: <FaDatabase />,
      color: "from-indigo-500 to-purple-600",
      percentage: 60,
    },
    {
      step: "04",
      title: "Develop Smart Solutions",
      desc: "Our engineering team creates intelligent software platforms tailored to empower healthcare professionals and significantly enhance patient care delivery.",
      icon: <FaLaptopMedical />,
      color: "from-violet-500 to-fuchsia-600",
      percentage: 80,
    },
    {
      step: "05",
      title: "Deploy & Continuous Support",
      desc: "We seamlessly implement solutions into healthcare environments and provide comprehensive ongoing support, regular updates, and continuous optimization.",
      icon: <FaCheckCircle />,
      color: "from-pink-500 to-rose-600",
      percentage: 100,
    },
  ];

  return (
    <section
      className='py-20 md:py-28 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20 relative overflow-hidden'
      id='how-it-works'
    >
      {/* Medical-themed floating icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30'></div>

        {/* Healthcare logo patterns */}
        <FaStethoscope className='absolute top-40 right-16 text-green-200 text-4xl animate-pulse opacity-40' />
        <FaHeartbeat className='absolute bottom-32 left-20 text-green-300 text-3xl animate-bounce opacity-30' />
        <FaMicroscope className='absolute top-1/3 left-1/4 text-green-200 text-5xl animate-pulse opacity-20' />
        <FaUserMd className='absolute top-1/4 right-1/3 text-green-150 text-3xl opacity-25 animate-bounce delay-500' />
        <FaHospital className='absolute bottom-1/4 right-1/5 text-green-100 text-4xl opacity-20 animate-pulse delay-700' />
        <FaNotesMedical className='absolute top-2/3 left-1/5 text-green-200 text-3xl opacity-25 animate-bounce delay-300' />
      </div>
      
      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-20'>
        <div className='text-center mb-16 md:mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
              How We
            </span>{" "}
            <span className='bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent'>
              Work
            </span>
          </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            From identifying healthcare challenges to delivering innovative
            technology solutions
          </p>
        </div>

        {/* Desktop Flow Visualization */}
        <div className='hidden lg:block mb-16'>
          <div className='relative'>
            {/* Progress Line */}
            <div className='absolute top-20 left-0 right-0 h-1 bg-gray-200'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className='h-full bg-gradient-to-r from-green-500 via-blue-500 to-pink-500'
              />
            </div>

            {/* Steps */}
            <div className='flex justify-between items-start relative'>
              {steps.map((s, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='flex flex-col items-center w-1/5'
                >
                  {/* Icon Circle */}
                  <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-4xl shadow-xl mb-6 relative z-10 group hover:scale-110 transition-transform duration-300`}>
                    {s.icon}
                    <div className='absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 text-sm font-bold shadow-lg'>
                      {s.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className='text-center'>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>
                      {s.title}
                    </h3>
                    <p className='text-sm text-gray-600 leading-relaxed'>
                      {s.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <FaArrowRight className='absolute top-20 -right-12 text-green-400 text-2xl animate-pulse' />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Flow */}
        <div className='lg:hidden space-y-6'>
          {steps.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative'
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className='absolute left-10 top-24 w-1 h-full bg-gradient-to-b from-green-400 to-blue-400 opacity-30' />
              )}

              <div className='flex gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative z-10'>
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-3xl shadow-lg flex-shrink-0 relative`}>
                  {s.icon}
                  <div className='absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 text-xs font-bold shadow-md'>
                    {s.step}
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    {s.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
