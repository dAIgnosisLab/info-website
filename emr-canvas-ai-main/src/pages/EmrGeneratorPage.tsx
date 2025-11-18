import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaMicrophone, FaBrain, FaFileAlt, FaCheckCircle, FaChartLine, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const features = [
  {
    icon: <FaMicrophone />,
    title: "Voice-to-Text Conversion",
    description: "Advanced speech recognition technology that accurately captures doctor-patient conversations in real-time with medical terminology precision.",
  },
  {
    icon: <FaBrain />,
    title: "AI-Powered Analysis",
    description: "Intelligent natural language processing analyzes conversations to extract key medical information, symptoms, diagnoses, and treatment plans.",
  },
  {
    icon: <FaFileAlt />,
    title: "Automated EMR Generation",
    description: "Instantly transforms conversation data into structured, standardized electronic medical records following industry best practices.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Assurance",
    description: "Built-in validation ensures accuracy and completeness of generated EMR documents, reducing errors and improving patient care.",
  },
];

const benefits = [
  {
    icon: <FaClock />,
    title: "Save Time",
    stat: "70%",
    description: "Reduce documentation time by up to 70%, allowing more focus on patient care",
  },
  {
    icon: <FaChartLine />,
    title: "Improve Accuracy",
    stat: "95%+",
    description: "Achieve 95%+ accuracy in medical documentation with AI-powered validation",
  },
  {
    icon: <FaCheckCircle />,
    title: "HIPAA Compliant",
    stat: "100%",
    description: "Fully compliant with HIPAA regulations ensuring patient data security",
  },
];

export default function EmrGeneratorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Also try with timeout as backup
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, []);

  const handleRequestDemo = () => {
    navigate("/#contact");
    // Scroll to top before navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <div className="pt-32 md:pt-40 pb-16 md:pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                Available Now
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-900">AI-Powered </span>
                <span className="text-green-600">EMR Generation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform doctor-patient conversations into comprehensive electronic medical records instantly. 
                Save time, reduce errors, and focus on what matters most—patient care.
              </p>
            </div>

            {/* Main Image/Demo Placeholder */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
              <div className="aspect-video bg-white rounded-2xl flex items-center justify-center border-2 border-green-200">
                <div className="text-center">
                  <FaFileAlt className="text-8xl text-green-600 mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-gray-900">Product Demo</p>
                  <p className="text-gray-600 mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              How It <span className="text-green-600">Works</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-3xl mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Key <span className="text-green-600">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <div className="text-5xl font-bold text-green-600 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 md:py-20 bg-green-600">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join healthcare professionals who are already saving time and improving patient care with our AI-powered EMR solution.
            </p>
            <button 
              onClick={handleRequestDemo}
              className="px-10 py-5 bg-white text-green-600 text-xl font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Request a Demo
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}