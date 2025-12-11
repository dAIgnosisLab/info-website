import { FaNotesMedical } from "react-icons/fa";
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
    if (p.route && p.status === "Available") navigate(p.route);
  };

  return (
    <section
      id='products'
      className='py-20 md:py-28 bg-gray-50 relative overflow-hidden'
    >
      {/* Subtle background decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30'></div>
      </div>

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16 md:mb-20'
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
            Our <span className='text-green-600'>Product</span>
          </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Intelligent AI solution transforming healthcare documentation and
            improving patient outcomes.
          </p>
        </motion.div>

        {/* Product Card - Centered and Highlighted */}
        <div className='flex justify-center'>
          {products.map((product, i) => (
            <motion.article
              key={product.title + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='group bg-white rounded-3xl border-2 border-gray-100 hover:border-green-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-2xl w-full'
            >
              <div className='p-10 md:p-12 flex flex-col'>
                {/* Icon and Status */}
                <div className='flex items-center justify-between mb-8'>
                  <div className='relative'>
                    <div
                      className={clsx(
                        "w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-4xl md:text-5xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300",
                        "bg-gradient-to-br",
                        product.accent || "from-green-500 to-emerald-600"
                      )}
                    >
                      {product.icon}
                    </div>
                    {/* Decorative dot */}
                    <div className='absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>

                  <span
                    className={clsx(
                      "px-4 py-2 rounded-full text-sm font-semibold",
                      statusStyles[product.status]
                    )}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  {product.title}
                </h3>

                {/* Description */}
                <p className='text-base md:text-lg text-gray-600 leading-relaxed mb-8'>
                  {product.description}
                </p>

                {/* Features List */}
                <div className='mb-8 space-y-3'>
                  <div className='flex items-center gap-3 text-gray-700'>
                    <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                    <span className='text-sm md:text-base'>
                      Real-time voice-to-text transcription
                    </span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-700'>
                    <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                    <span className='text-sm md:text-base'>
                      AI-powered clinical data extraction
                    </span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-700'>
                    <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                    <span className='text-sm md:text-base'>
                      Structured EMR output ready for use
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleClick(product)}
                  disabled={!product.route || product.status !== "Available"}
                  className={clsx(
                    "w-full px-8 py-4 rounded-xl font-semibold text-lg shadow-md",
                    product.status === "Available"
                      ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed",
                    "transition-all duration-300"
                  )}
                >
                  {product.status === "Available"
                    ? "Explore Laisten →"
                    : product.status === "Beta"
                    ? "Request Access"
                    : "Coming Soon"}
                </button>

                {/* Bottom accent line */}
                <div className='mt-6 h-1 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
