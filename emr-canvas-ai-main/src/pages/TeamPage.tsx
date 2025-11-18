import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const communityMembers = [
  {
    name: "Prakash Kandel",
    credentials: "MD/MBA",
    role: "Clinical & Business Lead",
    organization: "CAMS",
    description:
      "Dr. Prakash Kandel is a hospital medicine physician and Associate Medical Director at L&M Hospital under Yale New Haven Health. With over two decades of experience in healthcare, he has served diverse communities—from refugee camps and rural clinics in East Africa to hospitals and nursing homes across the U.S. He previously worked with the World Health Organization on polio eradication efforts in Nepal. Dr. Kandel values curiosity, lifelong learning, and exploring new approaches to improve healthcare delivery.",
    imageUrl: "/prakash_kandel.jpg",
    github: "",
    linkedin: "https://www.linkedin.com/in/prakandel/",
  },
  {
    name: "Jeevan Neupane",
    credentials: "",
    role: "Engineering/Technical Lead",
    organization: "",
    description:
      "Jeevan Neupane is a fourth-year Computer Engineering student at IOE, Pulchowk Campus who believes technology should solve real problems. He serves as the Engineering and Technical Lead at dAIgnosisLab, where he oversees the architecture of AI-powered healthcare solutions. He is also a Research Intern at NAAMII working on X-ray to 3D bone reconstruction and a Software Engineering Intern at IOE developing examination systems. With experience in full-stack development and machine learning, Jeevan focuses on building practical, impactful tools for healthcare.",
    imageUrl: "/jeevan_neupane.png",
    github: "https://github.com/jeevan-neupane",
    linkedin: "https://www.linkedin.com/in/jeevan-neupane/",
  },
  {
    name: "Apurva Koirala",
    credentials: "",
    role: "AI/ML Research",
    organization: "",
    description:
      "Apurba Koirala is a Computer Science and Engineering student at VIT, Vellore, specializing in AI, machine learning, and data-driven systems. He has interned at Grande International Hospital, Labmentix EdTech, and WebTech, working on AI research, predictive modeling, and full-stack development. His work spans healthcare AI, federated learning, and cloud-based applications, with multiple research manuscripts and a published book chapter to his name.",
    imageUrl: "/apoorva_koirala.png",
    github: "https://github.com/apurbaaaa",
    linkedin: "https://www.linkedin.com/in/apurbak/",
  },
  {
    name: "Bipin Bashyal",
    credentials: "",
    role: "Backend Engineer",
    organization: "",
    description:
      "Bipin Bashyal is a Computer Engineering student at IOE, Pulchowk Campus, specializing in AI-powered healthcare technology. He develops and implements advanced AI and NLP models for intelligent medical documentation, focusing on building accurate and efficient systems for transcription and report generation. His work ensures that healthcare AI can understand medical terminology and clinical context with high precision, enabling reliable and effective documentation workflows.",
    imageUrl: "/bipin_bashyal.png",
    github: "https://github.com/bipinbashyal",
    linkedin: "https://www.linkedin.com/in/bipin-bashyal-896239231/",
  },
  {
    name: "Samyam Budhathoki",
    credentials: "",
    role: "Backend Engineer",
    organization: "",
    description:
      "Samyam Budhathoki is a Computer Science and Engineering student at VIT, Vellore, specializing in AI and machine learning for healthcare innovation. He focuses on building intelligent systems that enhance the accuracy and efficiency of medical documentation, developing models capable of handling complex clinical scenarios, multilingual data, and diverse healthcare environments. His work emphasizes secure, compliant, and scalable AI solutions designed to support real-world medical workflows.",
    imageUrl: "/samyam_budathoki.png",
    github: "https://github.com/Samyam30",
    linkedin: "https://www.linkedin.com/in/samyam-budhathoki-b55160322/",
  },
];

export default function TeamPage() {
  return (
    <section className='relative min-h-screen overflow-hidden'>
      {/* BACKGROUND (Z-0 BEHIND EVERYTHING) */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 bg-white' />
      </div>

      {/* FOREGROUND CONTENT (Z-10 ABOVE BACKGROUND) */}
      <div className='relative z-10'>
        <Navigation />

        {/* Heading */}
        <div className='text-center pt-32 md:pt-40 pb-12 md:pb-16 px-4'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6'>
            <span className='text-gray-900'>Meet Our </span>
            <span className='text-gray-900'>Team</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Passionate experts dedicated to transforming healthcare through AI
            innovation
          </p>
        </div>

        {/* Cards */}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='grid gap-10 md:gap-12 sm:grid-cols-1 lg:grid-cols-2'>
            {communityMembers.map((m, i) => (
              <div
                key={i}
                className='bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100 
                           hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]
                           flex flex-col'
              >
                {/* Image */}
                <div className='relative mb-8 rounded-xl overflow-hidden border-4 border-gray-100 bg-gray-50 h-80 md:h-96 lg:h-[28rem]'>
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    loading='lazy'
                    decoding='async'
                    className='absolute inset-0 w-full h-full object-contain'
                  />
                </div>

                {/* Name & Credentials */}
                <div className='text-center mb-4'>
                  <h3 className='text-3xl md:text-4xl font-bold text-gray-900'>
                    {m.name}
                  </h3>
                  {m.credentials && (
                    <p className='text-lg md:text-xl text-gray-600 font-semibold mt-2'>
                      {m.credentials}
                    </p>
                  )}
                </div>

                {/* Role & Organization */}
                <div className='text-center mb-6'>
                  <p className='text-xl md:text-2xl font-semibold text-gray-900'>
                    {m.role}
                  </p>
                  {m.organization && (
                    <p className='text-base md:text-lg text-gray-600 mt-1'>
                      {m.organization}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className='text-base md:text-lg text-gray-600 text-justify leading-relaxed mb-8 flex-grow'>
                  {m.description}
                </p>

                {/* Social Links - Only show if links are provided */}
                {(m.github || m.linkedin) && (
                  <div className='flex justify-center gap-4 pt-6 border-t border-gray-100'>
                    {m.github && (
                      <a
                        href={m.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300'
                        aria-label={`${m.name}'s GitHub`}
                      >
                        <FaGithub className='w-6 h-6' />
                      </a>
                    )}
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300'
                        aria-label={`${m.name}'s LinkedIn`}
                      >
                        <FaLinkedin className='w-6 h-6' />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
}
