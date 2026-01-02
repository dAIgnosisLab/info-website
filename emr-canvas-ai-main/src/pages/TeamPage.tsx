import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const advisors = [
  {
    name: "Sunil Aryal",
    credentials: "PhD, FHEA, MIEEE, MACS",
    role: "AI/ML Technical Advisor",
    organization: "AI Lab Pvt Ltd",
    description:
      "Dr Sunil Aryal is an Associate Professor of Data Science at the Deakin University School of Information Technology. His research interests are in the areas of Artificial Intelligence (AI), Machine Learning (ML) and Data Mining (DM). He is particularly interested in the application of AI/ML/DM models to solve real-world problems in applications such as Defence, National Intelligence, Engineering, Manufacturing, Healthcare and Education. He co-leads the Machine Learning for Decision Support (MLDS) Research Group at Deakin University. He has published over 49 papers in top-tier international venues in AI, ML and DM. He is a named investigator in research grants with over AUD 4 million in funding. His research is supported by US and Australia Defence Agencies, Australian Office of National Intelligence, and multiple international organizations.",
    imageUrl: "/sunil_aryal.jpg",
    github: "https://github.com/sunilaryal",
    linkedin: "https://www.linkedin.com/in/sunil-aryal/",
    twitter: "https://twitter.com/sunilaryal",
    email: "mailto:sunil.aryal@deakin.edu.au",
    scholar: "https://scholar.google.com/citations?user=SCHOLAR_ID",
  },
];

const medicalTeam = [
  {
    name: "Dr. Prakash Kandel",
    credentials: "MD/MBA",
    role: "Clinical & Business Lead",
    organization: "AI Lab Pvt Ltd",
    description:
      "Prakash Kandel is a US board-certified physician and an accomplished physician leader dedicated to advancing clinical excellence, patient experience, safety, and quality of care through clinical redesign. With over two decades of experience, he has served in many leadership roles, including most recently as Vice President of Medical Staff at L&M Hospital / Yale New Haven Health. His extensive experience spans diverse communities—from refugee camps and rural clinics in East Africa to hospitals and nursing homes across the U.S. Dr. Kandel previously contributed to global health efforts by working with the World Health Organization on immunization preventable diseases in Nepal. He champions curiosity, lifelong learning, and exploring innovative approaches to fundamentally improve healthcare delivery.",
    imageUrl: "/prakash_kandel.jpg",
    github: "",
    linkedin: "https://www.linkedin.com/in/prakandel/",
  },
  {
    name: "Dr. Prabhat Adhikari",
    credentials: "MD (Infectious Diseases, Critical Care)",
    role: "Physician Partner",
    organization: "AI Lab Pvt Ltd",
    description:
      "Dr. Prabhat Adhikari is an accomplished infectious disease and ICU specialist with over 15 years of medical expertise. He is an American Board-certified physician and philanthropist, founder of ASK Foundation Nepal, providing telemedicine services to underserved rural communities. As founder & CEO of Center for American Medical Specialists (CAMS) and Medical/Scientific Advisor at Novala Biotech, Dr. Adhikari combines clinical excellence with healthcare innovation. His extensive experience includes Critical Care Fellowship at UTHSC, Infectious Disease Fellowship at UCLA, and consulting roles across Nepal, Israel, and the USA.",
    imageUrl: "/prabhat_adhikari.jpeg",
    github: "",
    linkedin: "https://www.linkedin.com/in/prabhat-adhikari/",
  },
];

const technicalTeam = [
  {
    name: "Jeevan Neupane",
    credentials: "",
    role: "Co-Founder & CTO",
    organization: "AI Lab Pvt Ltd",
    description:
      "Jeevan Neupane is a visionary technologist and co-founder who leads the technical strategy and product development at AI Lab. With expertise in full-stack development, machine learning, and healthcare AI systems, he focuses on building scalable solutions that transform medical practice. His leadership drives innovation in AI-powered healthcare technologies, ensuring robust architecture and seamless user experiences across all product offerings.",
    imageUrl: "/jeevan.jpg",
    github: "https://github.com/jeevan-neupane",
    linkedin: "https://www.linkedin.com/in/jeevan-neupane/",
  },

  {
    name: "Bipin Bashyal",
    credentials: "",
    role: "Co-Founder & Lead Engineer",
    organization: "AI Lab Pvt Ltd",
    description:
      "Bipin Bashyal is a Computer Engineering student at IOE, Pulchowk Campus, specializing in AI-powered healthcare technology. He develops and implements advanced AI and NLP models for intelligent medical documentation, focusing on building accurate and efficient systems for transcription and report generation. His work ensures that healthcare AI can understand medical terminology and clinical context with high precision, enabling reliable and effective documentation workflows.",
    imageUrl: "/bipin.jpg",
    github: "https://github.com/bipinbashyal",
    linkedin: "https://www.linkedin.com/in/bipin-bashyal-896239231/",
  },
];

type TeamFilter = "all" | "medical" | "technical" | "advisors";

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<TeamFilter>("all");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const renderMember = (m: any, isLarge: boolean = false) => (
    <div
      className={`bg-white rounded-xl ${
        isLarge ? "p-8 md:p-10" : "p-6 md:p-8"
      } shadow-sm border border-gray-200 h-full flex flex-col`}
    >
      {/* Circular Image */}
      <div className='flex justify-center mb-6'>
        <div
          className={`relative ${
            isLarge ? "w-40 h-40 md:w-48 md:h-48" : "w-32 h-32 md:w-36 md:h-36"
          }`}
        >
          <img
            src={m.imageUrl}
            alt={m.name}
            loading='lazy'
            className='w-full h-full rounded-full object-cover border-4 border-gray-100'
          />
        </div>
      </div>

      {/* Name & Credentials */}
      <div className='text-center mb-4'>
        <h3
          className={`${
            isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          } font-bold text-gray-900 mb-1`}
        >
          {m.name}
        </h3>
        {m.credentials && (
          <p
            className={`${
              isLarge ? "text-sm md:text-base" : "text-sm"
            } text-gray-600 font-medium`}
          >
            {m.credentials}
          </p>
        )}
      </div>

      {/* Role & Organization */}
      <div className='text-center mb-6'>
        <p
          className={`${
            isLarge ? "text-base md:text-lg" : "text-sm md:text-base"
          } font-semibold text-gray-900`}
        >
          {m.role}
        </p>
        {m.organization && (
          <p
            className={`${
              isLarge ? "text-sm md:text-base" : "text-xs md:text-sm"
            } text-gray-600 mt-1`}
          >
            {m.organization}
          </p>
        )}
      </div>

      {/* Description */}
      <p
        className={`${
          isLarge ? "text-sm md:text-base" : "text-xs md:text-sm"
        } text-gray-600 text-center leading-relaxed mb-6`}
      >
        {m.description}
      </p>

      {/* Social Links */}
      {(m.github || m.linkedin || m.twitter || m.email || m.scholar) && (
        <div className='flex justify-center gap-3 pt-4 border-t border-gray-100'>
          {m.github && (
            <a
              href={m.github}
              target='_blank'
              rel='noopener noreferrer'
              className={`${
                isLarge ? "w-10 h-10" : "w-9 h-9"
              } bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors`}
              aria-label='GitHub'
            >
              <FaGithub className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
            </a>
          )}
          {m.linkedin && (
            <a
              href={m.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className={`${
                isLarge ? "w-10 h-10" : "w-9 h-9"
              } bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors`}
              aria-label='LinkedIn'
            >
              <FaLinkedin className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
            </a>
          )}
          {m.twitter && (
            <a
              href={m.twitter}
              target='_blank'
              rel='noopener noreferrer'
              className={`${
                isLarge ? "w-10 h-10" : "w-9 h-9"
              } bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-sky-500 hover:text-white transition-colors`}
              aria-label='Twitter'
            >
              <FaTwitter className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
            </a>
          )}
          {m.email && (
            <a
              href={m.email}
              className={`${
                isLarge ? "w-10 h-10" : "w-9 h-9"
              } bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors`}
              aria-label='Email'
            >
              <FaEnvelope className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
            </a>
          )}
          {m.scholar && (
            <a
              href={m.scholar}
              target='_blank'
              rel='noopener noreferrer'
              className={`${
                isLarge ? "w-10 h-10" : "w-9 h-9"
              } bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors`}
              aria-label='Google Scholar'
            >
              <FaGraduationCap className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section className='relative min-h-screen bg-gray-50'>
      <Navigation />

      {/* Main Heading */}
      <div className='text-center pt-32 md:pt-40 pb-12 md:pb-16 px-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
          <span className='text-gray-900'>Meet Our </span>
          <span className='text-green-600'>Team</span>
        </h1>
        <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
          Passionate experts dedicated to transforming healthcare through AI
          innovation
        </p>
      </div>

      {/* Filter Toggle */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-12'>
        <div className='flex flex-wrap justify-center gap-3'>
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeFilter === "all"
                ? "bg-green-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-green-600 hover:text-green-600"
            }`}
          >
            All Teams
          </button>
          <button
            onClick={() => setActiveFilter("medical")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeFilter === "medical"
                ? "bg-green-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-green-600 hover:text-green-600"
            }`}
          >
            Medical Team
          </button>
          <button
            onClick={() => setActiveFilter("technical")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeFilter === "technical"
                ? "bg-green-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-green-600 hover:text-green-600"
            }`}
          >
            Technical Team
          </button>
          <button
            onClick={() => setActiveFilter("advisors")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeFilter === "advisors"
                ? "bg-green-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-green-600 hover:text-green-600"
            }`}
          >
            Advisors
          </button>
        </div>
      </div>

      {/* MEDICAL TEAM SECTION */}
      {(activeFilter === "all" || activeFilter === "medical") && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
              Medical Team
            </h2>
            <div className='w-16 h-1 bg-green-600 mx-auto mb-3'></div>
            <p className='text-sm md:text-base text-gray-600'>
              Clinical expertise guiding our healthcare solutions
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {medicalTeam.map((m, i) => (
              <div key={i}>{renderMember(m, false)}</div>
            ))}
          </div>
        </div>
      )}

      {/* TECHNICAL TEAM SECTION */}
      {(activeFilter === "all" || activeFilter === "technical") && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
              Technical Team
            </h2>
            <div className='w-16 h-1 bg-green-600 mx-auto mb-3'></div>
            <p className='text-sm md:text-base text-gray-600'>
              Engineering excellence driving healthcare AI innovation
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {technicalTeam.map((m, i) => (
              <div key={i}>{renderMember(m, false)}</div>
            ))}
          </div>
        </div>
      )}

      {/* ADVISORS SECTION */}
      {(activeFilter === "all" || activeFilter === "advisors") && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
              Advisors
            </h2>
            <div className='w-16 h-1 bg-green-600 mx-auto mb-3'></div>
            <p className='text-sm md:text-base text-gray-600'>
              World-class technical guidance shaping our AI innovation
            </p>
          </div>

          <div className='max-w-3xl mx-auto'>
            {advisors.map((m, i) => (
              <div key={i}>{renderMember(m, true)}</div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
}
