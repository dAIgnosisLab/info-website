import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FaCamera,
  FaLayerGroup,
  FaCube,
  FaDownload,
  FaShapes,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Feature = { icon: JSX.Element; title: string; description: string };

const workflow: Feature[] = [
  {
    icon: <FaCamera />,
    title: "Biplanar Input",
    description: "Two orthogonal calibrated X‑Ray views (e.g. AP + lateral) uploaded.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Depth Inference",
    description: "Dual‑projection fusion with learned anatomical priors for depth estimation.",
  },
  {
    icon: <FaCube />,
    title: "3D Reconstruction",
    description: "Voxel + optional mesh generation with tunable resolution and smoothing.",
  },
  {
    icon: <FaCube />,
    title: "Interactive Visualization",
    description: "Rotate, slice, window/level adjust, and focus regions for spatial insight.",
  },
  {
    icon: <FaDownload />,
    title: "Export & Integration",
    description: "Export volume/mesh for PACS, planning, or downstream AI modules.",
  },
];

const benefits = [
  {
    icon: <FaShapes />,
    stat: "3D",
    title: "Spatial Context",
    description: "Depth perspective beyond isolated 2D projections.",
  },
  {
    icon: <FaChartBar />,
    stat: "Fast",
    title: "Rapid Pipeline",
    description: "Optimized stages reduce turnaround time.",
  },
  {
    icon: <FaCheckCircle />,
    stat: "Focus",
    title: "Efficient Review",
    description: "Streamlines interpretation and reduces manual correlation.",
  },
];

export default function XrayTo3DPage() {
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
          <span className='inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold tracking-wide mb-6'>
            Beta
          </span>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'>
            <span className='text-gray-900'>AI‑Powered </span>
            <span className='text-green-600'>Biplanar X‑Ray → 3D</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Upload two orthogonal clinical X‑Ray views; the system infers depth and reconstructs an interactive 3D volume to enhance spatial interpretation.
          </p>

          <div className='mt-10 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 md:p-12 shadow-md'>
            <div className='aspect-video bg-white rounded-2xl overflow-hidden border border-green-200'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/EzRBS_2HfiQ?autoplay=1&mute=1&loop=1&playlist=EzRBS_2HfiQ'
                title='RadiVision 3D Demo'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className='py-16 md:py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-12'>
            Workflow <span className='text-green-600'>Pipeline</span>
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {workflow.map((step, i) => (
              <div
                key={i}
                className='bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300'
              >
                <div className='w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-5'>
                  {step.icon}
                </div>
                <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>{step.title}</h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>{step.description}</p>
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
                <div className='text-4xl font-bold text-green-600 mb-2'>{b.stat}</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{b.title}</h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='py-16 md:py-20 bg-green-600'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>Explore 3D Imaging</h2>
          <p className='text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto'>
            Adopt AI‑assisted volumetric reconstruction to enhance precision and confidence.
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