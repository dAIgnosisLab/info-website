import { useRef } from "react";
import { FaRobot, FaHospital, FaChartLine, FaUserMd } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Solutions",
    description: "Leverage cutting-edge artificial intelligence to automate healthcare workflows, from documentation to diagnostics.",
  },
  {
    icon: <FaHospital />,
    title: "Healthcare Integration",
    description: "Seamlessly integrate AI technology into existing healthcare systems, enhancing efficiency without disruption.",
  },
  {
    icon: <FaChartLine />,
    title: "Data-Driven Insights",
    description: "Transform healthcare data into actionable insights that improve patient outcomes and operational efficiency.",
  },
  {
    icon: <FaUserMd />,
    title: "Empowering Medical Professionals",
    description: "Provide doctors and healthcare workers with intelligent tools that support better decision-making and patient care.",
  }
];

const FeaturesSection = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Intelligent Healthcare
            <br />
            <span className="text-green-600">AI Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between artificial intelligence and medical practice to revolutionize healthcare delivery
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-3xl md:text-4xl mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;