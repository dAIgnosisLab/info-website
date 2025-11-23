import { useRef } from "react";
import { FaRobot, FaHospital, FaChartLine, FaUserMd } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Tools",
    description:
      "Simple AI that helps with patient care, imaging and daily tasks in one place.",
  },
  {
    icon: <FaHospital />,
    title: "Easy Integration",
    description:
      "Connects to existing systems like EHR or PACS without big changes.",
  },
  {
    icon: <FaChartLine />,
    title: "Clear Insights",
    description:
      "Turns health data into easy trends and useful signals you can act on.",
  },
  {
    icon: <FaUserMd />,
    title: "Support for Clinicians",
    description:
      "Reduces manual work and helps doctors focus more on patients.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id='services'
      className='py-20 md:py-28 bg-white'
    >
      <div className='container mx-auto px-6 lg:px-10'>
        <div className='text-center mb-14 md:mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5'>
            Healthcare AI
            <br />
            <span className='text-green-600'>Made Simple</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            We build easy AI tools that help improve care, save time and give better results.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {features.map((f, i) => (
            <div
              key={i}
              className='rounded-2xl p-6 md:p-7 bg-white border border-gray-200 shadow-sm'
            >
              <div className='w-14 h-14 md:w-16 md:h-16 rounded-xl bg-green-600 flex items-center justify-center text-white text-2xl md:text-3xl mb-5'>
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
    </section>
  );
};

export default FeaturesSection;