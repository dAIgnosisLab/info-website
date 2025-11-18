import { FaRocket, FaBrain, FaUsers } from "react-icons/fa";

const aboutItems = [
  {
    icon: <FaRocket />,
    title: "Our Mission",
    description:
      "To revolutionize healthcare documentation in Nepal and beyond by leveraging cutting-edge AI technology that empowers medical professionals to focus on patient care.",
  },
  {
    icon: <FaBrain />,
    title: "Our Vision",
    description:
      "To become the leading AI-powered healthcare technology provider in South Asia, setting new standards for medical documentation accuracy and efficiency.",
  },
  {
    icon: <FaUsers />,
    title: "Our Team",
    description:
      "A passionate team of ML engineers, healthcare experts, and researchers from Nepal, united by the goal of advancing healthcare technology.",
  },
];

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            About <span className="text-gray-900">D<span className="text-green-600">AI</span>GNOSISLAB</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a Nepal-based healthcare technology startup dedicated to transforming medical 
            documentation through artificial intelligence. Our mission is to advance the healthcare 
            system by providing innovative, AI-powered solutions that streamline workflows and 
            enhance patient care quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 relative"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-3xl md:text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}