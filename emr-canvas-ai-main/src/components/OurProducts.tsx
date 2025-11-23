import {
  FaFileAlt,
  FaStethoscope,
  FaBrain,
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
  Available: "bg-green-100 text-green-700 border border-green-200",
  Beta: "bg-indigo-100 text-indigo-700 border border-indigo-200",
  "Coming Soon": "bg-gray-100 text-gray-600 border border-gray-200",
};

export default function OurProducts() {
  const navigate = useNavigate();
  const handleClick = (p: Product) => {
    if (p.route && p.status === "Available") navigate(p.route);
  };

  return (
    <section
      id='products'
      className='py-20 md:py-24 bg-gray-50'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-12 md:mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6'>
            Our <span className='text-green-600'>Products</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Scalable AI solutions advancing healthcare intelligence, workflow
            efficiency, and clinical outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {products.map((product, i) => (
            <article
              key={product.title + i}
              className={clsx(
                "group relative rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl",
                "transition-all duration-300 overflow-hidden flex flex-col"
              )}
            >
              {/* Accent gradient bar */}
              <div
                className={clsx(
                  "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r",
                  product.accent || "from-green-500 to-emerald-600"
                )}
              />

              <div className='p-6 md:p-7 flex flex-col flex-1'>
                <div className='flex items-start justify-between mb-5'>
                  <div
                    className={clsx(
                      "w-16 h-16 rounded-xl flex items-center justify-center text-3xl text-white",
                      "bg-gradient-to-br",
                      product.accent || "from-green-500 to-emerald-600",
                      "shadow-md group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300"
                    )}
                    aria-hidden='true'
                  >
                    {product.icon}
                  </div>

                  <span
                    className={clsx(
                      "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap",
                      "tracking-wide",
                      statusStyles[product.status]
                    )}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug'>
                  {product.title}
                </h3>

                <p className='text-sm md:text-base text-gray-600 leading-relaxed flex-1'>
                  {product.description}
                </p>

                {/* Action */}
                <div className='mt-6'>
                  <button
                    onClick={() => handleClick(product)}
                    disabled={!product.route || product.status !== "Available"}
                    className={clsx(
                      "relative w-full px-5 py-3 rounded-lg font-semibold text-sm md:text-base",
                      "border-2 overflow-hidden",
                      product.status === "Available"
                        ? "border-green-600 text-green-600 hover:text-white"
                        : "border-gray-300 text-gray-400 cursor-not-allowed",
                      "transition-colors duration-300"
                    )}
                  >
                    <span className='relative z-10'>
                      {product.status === "Available"
                        ? "Explore"
                        : product.status === "Beta"
                        ? "Request Access"
                        : "Notify Me"}
                    </span>
                    {product.status === "Available" && (
                      <span className='absolute inset-0 bg-green-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500' />
                    )}
                  </button>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={clsx(
                  "pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-10",
                  "bg-gradient-to-br",
                  product.accent || "from-green-500 to-emerald-600",
                  "blur-2xl transition-opacity duration-500"
                )}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
