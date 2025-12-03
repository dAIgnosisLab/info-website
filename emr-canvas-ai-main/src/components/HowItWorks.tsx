import { FaSearch, FaBrain, FaDatabase, FaLaptopMedical, FaCheckCircle } from "react-icons/fa";

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
    <section className="py-20 md:py-28 bg-gray-50" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            How We <span className="text-green-600">Work</span>
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
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white text-xl font-bold rounded-full flex items-center justify-center shadow-md">
                {s.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center text-green-600 text-3xl mb-6 mt-4">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}