import { FaSearch, FaBrain, FaDatabase, FaLaptopMedical, FaCheckCircle } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Identify Healthcare Challenges",
      desc: "We identify critical pain points and time-consuming manual tasks in the healthcare sector that can benefit from AI automation and optimization.",
      icon: <FaSearch />,
    },
    {
      step: "02",
      title: "Analyze AI Potential",
      desc: "Our expert team evaluates how cutting-edge AI and machine learning technologies can effectively transform these healthcare workflows and improve outcomes.",
      icon: <FaBrain />,
    },
    {
      step: "03",
      title: "Data Collection & Research",
      desc: "We gather comprehensive medical data, clinical terminology, and real-world healthcare scenarios to build robust and accurate AI models.",
      icon: <FaDatabase />,
    },
    {
      step: "04",
      title: "Develop Intelligent Solutions",
      desc: "Our engineering team creates innovative AI-powered tools tailored to empower healthcare professionals and enhance patient care quality.",
      icon: <FaLaptopMedical />,
    },
    {
      step: "05",
      title: "Deploy & Continuous Support",
      desc: "We seamlessly implement solutions into healthcare environments and provide ongoing support, updates, and optimization for sustained excellence.",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white" id="how-it-works">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            Our Innovation <span className="text-green-600">Process</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From identifying healthcare challenges to delivering transformative AI-powered solutions
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 sm:left-8 md:left-12 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-600"></div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {steps.map((s, index) => (
              <div 
                key={index}
                className="group relative flex items-start gap-4 sm:gap-6 md:gap-8"
              >
                {/* Step number badge */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-600 text-white text-lg sm:text-2xl md:text-3xl font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                  {s.step}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-gray-50 shadow-lg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-green-600/50 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                  
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600 text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {s.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-green-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}