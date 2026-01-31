import { FaSearch, FaBrain, FaDatabase, FaLaptopMedical, FaCheckCircle, FaStethoscope, FaHeartbeat, FaMicroscope, FaUserMd, FaHospital, FaNotesMedical } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Identify Healthcare Challenges",
      desc: "We identify critical pain points and time-consuming manual tasks in the healthcare sector that can benefit from AI automation.",
      icon: <FaSearch />,
    },
    {
      step: "02",
      title: "Analyze AI Potential",
      desc: "Our expert team evaluates how AI and machine learning technologies can effectively transform healthcare workflows.",
      icon: <FaBrain />,
    },
    {
      step: "03",
      title: "Data Collection & Research",
      desc: "We gather comprehensive medical data and clinical terminology to build robust and accurate AI models.",
      icon: <FaDatabase />,
    },
    {
      step: "04",
      title: "Develop Intelligent Solutions",
      desc: "Our engineering team creates AI-powered tools tailored to empower healthcare professionals and enhance patient care.",
      icon: <FaLaptopMedical />,
    },
    {
      step: "05",
      title: "Deploy & Continuous Support",
      desc: "We implement solutions into healthcare environments and provide ongoing support, updates, and optimization.",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20 relative overflow-hidden" id="how-it-works">
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
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>How We</span> <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From identifying healthcare challenges to delivering AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Medical gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 text-white text-xl font-bold rounded-full flex items-center justify-center shadow-lg z-10">
                {s.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center text-green-600 text-3xl mb-6 mt-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-green-700 transition-colors duration-300">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">
                {s.desc}
              </p>
              
              {/* Medical-themed bottom accent */}
              <div className='mt-6 relative z-10'>
                <div className='h-1 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
                <div className='absolute right-0 top-0 w-2 h-1 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300'></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}