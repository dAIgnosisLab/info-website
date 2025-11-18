import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const products = [
  {
    icon: <FaFileAlt />,
    title: "AI EMR Documentation",
    description:
      "Transform doctor-patient conversations into comprehensive electronic medical records instantly. Our AI-powered solution automates documentation, saving time and improving accuracy.",
    status: "Available Now",
    statusColor: "bg-green-100 text-green-700",
    route: "/emr-generator",
  },
];

export default function OurProducts() {
  const navigate = useNavigate();

  const handleKnowMore = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50" id="products">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Our <span className="text-green-600">Product</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative AI-powered solution designed to transform healthcare documentation and improve efficiency
          </p>
        </div>

        {/* Product Card - Centered */}
        <div className="max-w-2xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 text-4xl mb-6">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Know More Button */}
              <button 
                onClick={() => handleKnowMore(product.route)}
                className="group relative px-6 py-3 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">Know More</span>
                <span className="absolute inset-0 bg-green-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}