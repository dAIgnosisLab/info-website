import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FaMicrophone,
  FaBrain,
  FaFileAlt,
  FaCheckCircle,
  FaChartLine,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const features = [
  {
    icon: <FaMicrophone />,
    title: "Real‑Time Capture",
    description:
      "Accurate medical speech-to-text for live clinician–patient conversations.",
  },
  {
    icon: <FaBrain />,
    title: "AI Extraction",
    description:
      "Identifies key clinical data: symptoms, history, assessments, plans.",
  },
  {
    icon: <FaFileAlt />,
    title: "Structured Output",
    description:
      "Generates clean, standardized EMR sections ready for review and use.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Validation Layer",
    description:
      "Flags missing clinical elements and improves consistency and completeness.",
  },
];

const benefits = [
  {
    icon: <FaClock />,
    title: "Time Saved",
    stat: "70%",
    description: "Reduced manual entry through automated structuring.",
  },
  {
    icon: <FaChartLine />,
    title: "High Accuracy",
    stat: "95%+",
    description: "Medical terminology handling with adaptive refinement.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Compliance",
    stat: "100%",
    description: "Designed for secure and compliant clinical workflows.",
  },
];

export default function EmrGeneratorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, []);

  const handleRequestDemo = () => {
    navigate("/#contact");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <section className='relative min-h-screen bg-white'>
      <Navigation />

      {/* Hero */}
      <div className='pt-32 md:pt-40 pb-16 md:pb-20 px-4'>
        <div className='max-w-5xl mx-auto text-center'>
          <span className='inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold tracking-wide mb-6'>
            Available Now
          </span>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'>
            <span className='text-green-600'>MediSun</span>
            <br />
            <span className='text-gray-900 text-4xl md:text-5xl lg:text-6xl'>AI‑Powered EMR Generation</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Convert clinical conversations into structured medical records in
            seconds. Reduce manual workload and keep focus on patient care.
          </p>

          <div className='mt-10 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 shadow-md'>
            <div className='aspect-video bg-white rounded-2xl flex items-center justify-center border border-green-200 overflow-hidden'>
              <iframe
                src='https://www.emrgenerator.site'
                title='MediSun - EMR Generator Demo'
                className='w-full h-full'
                allow='microphone'
              />
            </div>
            <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://www.emrgenerator.site'
                target='_blank'
                rel='noopener noreferrer'
                className='px-8 py-3 bg-green-600 text-white text-base md:text-lg font-semibold rounded-lg hover:bg-green-700 shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2'
              >
                <FaFileAlt />
                Try MediSun Live
              </a>
              <button
                onClick={handleRequestDemo}
                className='px-8 py-3 bg-white text-green-600 text-base md:text-lg font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-all duration-300'
              >
                Request Full Access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='py-16 md:py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-12'>
            How <span className='text-green-600'>MediSun</span> Works
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {features.map((f, i) => (
              <div
                key={i}
                className='bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300'
              >
                <div className='w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-5'>
                  {f.icon}
                </div>
                <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>
                  {f.title}
                </h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className='py-16 md:py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-12'>
            Key <span className='text-green-600'>Benefits</span>
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {benefits.map((b, i) => (
              <div
                key={i}
                className='text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300'
              >
                <div className='w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-5'>
                  {b.icon}
                </div>
                <div className='text-4xl font-bold text-green-600 mb-2'>
                  {b.stat}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {b.title}
                </h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='py-16 md:py-20 bg-green-600'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Ready to Experience MediSun?
          </h2>
          <p className='text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto'>
            Join clinicians adopting AI to accelerate care delivery and reduce
            administrative load.
          </p>
          <button
            onClick={handleRequestDemo}
            className='px-9 py-4 bg-white text-green-600 text-base md:text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300'
          >
            Request a Demo
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
}