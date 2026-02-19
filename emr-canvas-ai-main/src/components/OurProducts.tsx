import {
  FaNotesMedical,
  FaCube,
  FaMicrochip,
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
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
  image?: string;
}

const products: Product[] = [
  {
    icon: <FaNotesMedical />,
    title: "Laisten",
    description:
      "Advanced EMR generation platform that converts doctor-patient conversations into structured medical records in real-time. Streamline documentation, reduce administrative burden, and enhance clinical efficiency.",
    status: "Available",
    route: "/emr-generator",
    accent: "from-green-500 to-emerald-600",
    image: "/images/laisten.jpg",
    features: [
      "Real-time voice-to-text transcription",
      "Intelligent clinical data extraction",
      "Standards-compliant EMR output",
    ],
  },
  {
    icon: <FaCube />,
    title: "RadiVision 3D",
    description:
      "Advanced medical imaging technology that transforms 2D radiographic images into detailed three-dimensional anatomical models. Improve diagnostic precision and enhance treatment planning capabilities.",
    status: "Beta",
    route: "/radivision-3d",
    accent: "from-blue-500 to-indigo-600",
    image: "/images/radivision.jpg",
    features: [
      "Biplanar X-ray reconstruction",
      "High-fidelity 3D visualization",
      "Enhanced diagnostic capabilities",
    ],
  },
  {
    icon: <FaMicrochip />,
    title: "NeuroSpell BCI",
    description:
      "Brain-Computer Interface platform enabling non-verbal ICU patients to communicate through advanced neural signal processing. Rapid-deployment EEG system designed for critical care environments.",
    status: "Coming Soon",
    accent: "from-purple-500 to-violet-600",
    image: "/images/neurospell.jpg",
    features: [
      "Dry-EEG headset with rapid setup",
      "Motor-imagery signal processing",
      "ICU-optimized communication system",
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
    if (p.route && (p.status === "Available" || p.status === "Beta"))
      navigate(p.route);
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
            Innovative healthcare technology solutions transforming clinical
            workflows, enhancing diagnostic precision, and revolutionizing
            patient care delivery.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto'>
          {products.map((product, i) => (
            <motion.article
              key={product.title + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleClick(product)}
              className={clsx(
                'group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative',
                (product.status === 'Available' || product.status === 'Beta') && 'cursor-pointer'
              )}
            >
              {/* Image Section */}
              <div className='relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50'>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                ) : (
                  <div className={clsx(
                    'w-full h-full flex items-center justify-center bg-gradient-to-br',
                    product.accent
                  )}>
                    <div className='text-white text-6xl opacity-30'>{product.icon}</div>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                
                {/* Status Badge */}
                <div className='absolute top-4 right-4'>
                  <span className={clsx(
                    'px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md',
                    statusStyles[product.status],
                    'shadow-lg'
                  )}>
                    {product.status}
                  </span>
                </div>

                {/* Icon Badge */}
                <div className='absolute bottom-4 left-4'>
                  <div className={clsx(
                    'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-xl backdrop-blur-sm bg-white/20 border border-white/30',
                    'group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'
                  )}>
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-6 sm:p-7'>
                {/* Title */}
                <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300'>
                  {product.title}
                </h3>

                {/* Description */}
                <p className='text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3'>
                  {product.description}
                </p>

                {/* Features List */}
                <div className='space-y-2.5 mb-6'>
                  {product.features.map((feature, index) => (
                    <div key={index} className='flex items-start gap-3'>
                      <div className={clsx(
                        'w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5',
                        'bg-gradient-to-br',
                        product.accent
                      )}>
                        <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                        </svg>
                      </div>
                      <span className='text-sm text-gray-700 leading-relaxed'>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  disabled={product.status === 'Coming Soon'}
                  className={clsx(
                    'w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden',
                    product.status === 'Available' && 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg',
                    product.status === 'Beta' && 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-md hover:shadow-lg',
                    product.status === 'Coming Soon' && 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  )}
                >
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    {product.status === 'Available' && 'Explore Product'}
                    {product.status === 'Beta' && 'Try Beta'}
                    {product.status === 'Coming Soon' && 'Coming Soon'}
                    {product.status !== 'Coming Soon' && (
                      <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    )}
                  </span>
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div className={clsx(
                'h-1 w-0 bg-gradient-to-r transition-all duration-700 group-hover:w-full',
                product.accent
              )}></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
