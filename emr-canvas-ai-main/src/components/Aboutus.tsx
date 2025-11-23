import { FaRocket, FaBrain, FaUsers } from "react-icons/fa";

const aboutItems = [
  {
    icon: <FaRocket />,
    title: "Our Mission",
    description:
      "To revolutionize healthcare by leveraging cutting-edge AI technology that empowers medical professionals to focus on patient care and improve healthcare outcomes.",
  },
  {
    icon: <FaBrain />,
    title: "Our Vision",
    description:
      "To become a leading AI-powered healthcare technology provider globally, setting new standards for medical innovation, efficiency, and patient care excellence.",
  },
  {
    icon: <FaUsers />,
    title: "Our Team",
    description:
      "A passionate team of ML engineers, healthcare experts, and researchers united by the goal of advancing healthcare technology and making it accessible worldwide.",
  },
];

export default function AboutUsSection() {
  return (
    <section
      id='about'
      className='py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-16 md:mb-24'>
          <div className='flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900'>
              About
            </h2>

          
            <div className='shrink-0 h-[8rem] w-[12rem] md:h-[10rem] md:w-[15rem] lg:h-[12rem] lg:w-[18rem]'>
              <img
                src='/logo.png'
                alt='DAIgnosisLab Logo'
                className='h-full w-full object-contain transition-transform duration-300 hover:scale-105'
              />
            </div>
          </div>

          <p className='text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
            We are a healthcare technology startup dedicated to transforming
            healthcare through artificial intelligence. Our mission is to
            advance the healthcare system globally by providing innovative,
            AI-powered solutions that streamline workflows and enhance patient
            care quality.
          </p>
        </div>

        {/* Grid */}
        <div className='grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-2'
            >
              <div className='w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-green-600 text-4xl md:text-5xl mb-6 transition-transform duration-300 hover:scale-110'>
                {item.icon}
              </div>

              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                {item.title}
              </h3>

              <p className='text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
