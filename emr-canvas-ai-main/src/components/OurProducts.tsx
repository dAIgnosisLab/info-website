import { FaNotesMedical, FaCube, FaBrain, FaStethoscope, FaHeartbeat, FaMicroscope, FaUserMd, FaHospital } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

type ProductStatus = "Available" | "Beta" | "Coming Soon";

interface Product {
  icon: JSX.Element;
  title: string;
  description: string;
  status: ProductStatus;
  route?: string;
  accent?: string;
  features: string[];
}

const products: Product[] = [
  {
    icon: <FaNotesMedical />,
    title: "Laisten",
    description:
      "AI-powered EMR generation that converts doctor-patient conversations into structured medical records instantly. Save time, reduce errors, and focus on patient care.",
    status: "Available",
    route: "/emr-generator",
    accent: "from-green-500 to-emerald-600",
    features: [
      "Real-time voice-to-text transcription",
      "AI-powered clinical data extraction",
      "Structured EMR output ready for use"
    ],
  },
  {
    icon: <FaCube />,
    title: "RadiVision 3D",
    description:
      "Advanced X-ray to 3D reconstruction technology that transforms 2D radiographic images into detailed three-dimensional models for enhanced diagnostic accuracy and treatment planning.",
    status: "Beta",
    route: "/radivision-3d",
    accent: "from-blue-500 to-indigo-600",
    features: [
      "Biplanar X-ray reconstruction",
      "Real-time 3D model generation",
      "Enhanced diagnostic accuracy"
    ],
  },
  {
    icon: <FaBrain />,
    title: "NeuroSpell BCI",
    description:
      "Brain-Computer Interface technology enabling intubated ICU patients to communicate through thought-controlled spelling. Revolutionary dry-EEG system for rapid patient-caregiver interaction.",
    status: "Coming Soon",
    accent: "from-purple-500 to-violet-600",
    features: [
      "Dry-EEG headset with <5min setup",
      "Motor-imagery based communication",
      "ICU-optimized signal processing"
    ],
  },
];

const statusStyles: Record<ProductStatus, string> = {
  Available: "bg-green-50 text-green-700 border border-green-200",
  Beta: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  "Coming Soon": "bg-gray-50 text-gray-600 border border-gray-200",
};

export default function OurProducts() {
  const navigate = useNavigate();
  const handleClick = (p: Product) => {
    if (p.route && (p.status === "Available" || p.status === "Beta")) navigate(p.route);
  };

  return (
    <section
      id='products'
      className='py-16 sm:py-20 md:py-28 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20 relative overflow-hidden'
    >
      {/* Healthcare-themed background decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30'></div>
        
        {/* Healthcare logo patterns */}
        <FaStethoscope className='absolute top-32 left-16 text-green-100 text-6xl opacity-20 animate-pulse' />
        <FaHeartbeat className='absolute bottom-40 right-20 text-green-200 text-5xl opacity-25 animate-bounce' />
        <FaMicroscope className='absolute top-1/2 right-1/4 text-green-100 text-7xl opacity-15 animate-pulse delay-1000' />
        <FaUserMd className='absolute top-1/4 left-1/3 text-green-150 text-4xl opacity-20 animate-bounce delay-500' />
        <FaHospital className='absolute bottom-1/3 left-1/4 text-green-100 text-5xl opacity-15 animate-pulse delay-700' />
        <FaNotesMedical className='absolute top-2/3 right-1/3 text-green-200 text-4xl opacity-20 animate-bounce delay-300' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-16 md:mb-20'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
            Our <span className='text-green-600'>Products</span>
          </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4'>
            Cutting-edge AI solutions transforming healthcare workflows, enhancing diagnostic accuracy, and revolutionizing patient care delivery.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto'>
          {products.map((product, i) => (
            <motion.article
              key={product.title + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative'
            >
              {/* Medical gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              <div className='p-4 sm:p-6 md:p-8 flex flex-col h-full relative z-10'>
                {/* Status Badge */}
                <div className='flex justify-end mb-3 sm:mb-4'>
                  <span
                    className={clsx(
                      "px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
                      statusStyles[product.status]
                    )}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Icon */}
                <div className='mb-4 sm:mb-6'>
                  <div
                    className={clsx(
                      "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-2xl sm:text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300",
                      "bg-gradient-to-br",
                      product.accent || "from-green-500 to-emerald-600"
                    )}
                  >
                    {product.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors duration-300'>
                  {product.title}
                </h3>

                {/* Description */}
                <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow'>
                  {product.description}
                </p>

                {/* Features List */}
                <div className='mb-4 sm:mb-6 space-y-1.5 sm:space-y-2'>
                  {product.features.map((feature, index) => (
                    <div key={index} className='flex items-start gap-2 text-gray-700'>
                      <div className='w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0'></div>
                      <span className='text-xs sm:text-sm leading-relaxed'>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => handleClick(product)}
                  disabled={!product.route || product.status === "Coming Soon"}
                  className={clsx(
                    "w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-sm",
                    product.status === "Available"
                      ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-md"
                      : product.status === "Beta"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed",
                    "transition-all duration-300"
                  )}
                >
                  {product.status === "Available"
                    ? "Explore Laisten"
                    : product.status === "Beta"
                    ? "Try Beta Version"
                    : "Coming Soon"}
                </button>

                {/* Medical-themed bottom accent */}
                <div className='mt-3 sm:mt-4'>
                  <div className='h-0.5 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
