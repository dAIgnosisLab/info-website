import {
  FaFileAlt,
  FaMicroscope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
    icon: <FaFileAlt />,
    title: "LiveNote",
    description: "Generate structured EMR from doctor patient interactions.",
    status: "Available",
    route: "/emr-generator",
    accent: "from-green-500 to-emerald-600",
  },
  {
    icon: <FaMicroscope />,
    title: "X-3D",
    description:
      "Advanced multi‑plane AI-enhanced radiology reconstruction delivering sharper visualization and faster diagnostic review.",
    status: "Available",
    route: "/xray-to-3d",
    accent: "from-pink-500 to-rose-600",
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
      className='py-20 md:py-28 bg-white'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-16 md:mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
            Our <span className='text-green-600'>Products</span>
          </h2>
          <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Simple AI tools that help improve healthcare delivery and patient outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto'>
          {products.map((product, i) => (
            <article
              key={product.title + i}
              className='group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col'
            >
              <div className='p-8 md:p-10 flex flex-col flex-1'>
                {/* Icon */}
                <div className='flex items-center justify-between mb-6'>
                  <div
                    className={clsx(
                      "w-16 h-16 rounded-xl flex items-center justify-center text-3xl text-white shadow-sm",
                      "bg-gradient-to-br",
                      product.accent || "from-green-500 to-emerald-600"
                    )}
                  >
                    {product.icon}
                  </div>

                  <span
                    className={clsx(
                      "px-3 py-1.5 rounded-full text-xs font-semibold",
                      statusStyles[product.status]
                    )}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  {product.title}
                </h3>

                {/* Description */}
                <p className='text-sm md:text-base text-gray-600 leading-relaxed flex-1 mb-6'>
                  {product.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => handleClick(product)}
                  disabled={!product.route || product.status !== "Available"}
                  className={clsx(
                    "w-full px-6 py-3 rounded-lg font-semibold text-base",
                    product.status === "Available"
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed",
                    "transition-colors duration-300"
                  )}
                >
                  {product.status === "Available"
                    ? "Learn More"
                    : product.status === "Beta"
                    ? "Request Access"
                    : "Coming Soon"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}