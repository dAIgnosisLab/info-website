import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MedicalWave from "@/components/MedicalWave";
import { useEffect, useState } from "react";

const advisors = [
  {
    name: "Sunil Aryal",
    credentials: "PhD, FHEA, MIEEE, MACS",
    role: "Technology Advisor",
    organization: "AI Lab Pvt Ltd",
    description:
      "Dr Sunil Aryal is an Associate Professor of Data Science at the Deakin University School of Information Technology. His research interests are in the areas of Machine Learning and Data Mining, with a particular focus on applying advanced analytical techniques to solve real-world problems in Defence, National Intelligence, Engineering, Manufacturing, Healthcare and Education. He co-leads the Machine Learning for Decision Support (MLDS) Research Group at Deakin University and has published over 49 papers in top-tier international venues. He is a named investigator in research grants with over AUD 4 million in funding, supported by US and Australian Defence Agencies and the Australian Office of National Intelligence.",
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
    role: "Co-Founder & Clinical Lead",
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
    linkedin:
      "https://www.linkedin.com/in/prabhat-adhikari-md-infectious-diseases-critical-care-60b97462/",
  },
];

const technicalTeam = [
  {
    name: "Jeevan Neupane",
    credentials: "",
    role: "Co-Founder & CTO",
    organization: "AI Lab Pvt Ltd",
    description:
      "Jeevan Neupane is a final year Computer Engineering student at IOE, Pulchowk Campus and co-founder who leads the technical strategy and product development at AI Lab. With expertise in full-stack development, machine learning, and healthcare technology systems, he focuses on building scalable solutions that transform medical practice. His leadership drives innovation in intelligent healthcare technologies, ensuring robust architecture and seamless user experiences across all product offerings.",
    imageUrl: "/jeevan.jpg",
    github: "https://github.com/jeevan-neupane",
    linkedin: "https://www.linkedin.com/in/jeevan-neupane/",
  },

  {
    name: "Bipin Bashyal",
    credentials: "",
    role: "Co-Founder & Lead Software Engineer",
    organization: "AI Lab Pvt Ltd",
    description:
      "Bipin Bashyal is a final year Computer Engineering student at IOE, Pulchowk Campus, specializing in backend engineering and healthcare technology. He develops and implements robust backend systems and NLP models for intelligent medical documentation, focusing on building accurate and efficient systems for transcription and automated report generation. His work ensures scalable architecture, reliable data processing, and seamless integration of healthcare technology components with high precision and performance.",
    imageUrl: "/bipin.jpg",
    github: "https://github.com/bipinbashyal",
    linkedin: "https://www.linkedin.com/in/bipin-bashyal-896239231/",
  },

  {
    name: "Janardan Bhetwal",
    credentials: "",
    role: "Lead Engineer",
    organization: "AI Lab Pvt Ltd",
    description:
      "Janardan Bhetwal is a final year Computer Engineering student at IOE, Pulchowk Campus and a healthcare technology researcher at AI Lab. He focuses on machine learning applications for medical data analysis and clinical decision support systems. His research explores advanced analytical techniques for healthcare, including predictive modeling, pattern recognition in medical data, and intelligent automation for clinical workflows. He contributes to developing data-driven solutions that improve healthcare delivery and patient outcomes.",
    imageUrl: "/Janardan_Bhetwal.jpeg",
    github: "https://github.com/JanardanBhetwal",
    linkedin: "https://www.linkedin.com/in/janardan-bhetwal",
  },
  {
    name: "Kshitiz Paudel",
    credentials: "AWS Solutions Architect Associate",
    role: "Engineer",
    organization: "AI Lab Pvt Ltd",
    description:
      "Kshitiz Paudel is a final year Computer Engineering student at IOE, Pulchowk Campus and a technology researcher and business strategist at AI Lab. As an AWS-certified Solutions Architect and Cloud Club Captain, he leads technical workshops and training sessions while developing RAG systems, real-time streaming pipelines, and deep learning models. His work bridges technical innovation with business strategy, ensuring AI Lab's solutions are scalable and market-ready. Kshitiz is also passionate about technology education, having reached over 700 students across rural Nepal with programs on Cloud and emerging technology fundamentals.",
    imageUrl: "/kshitiz_paudel.jpeg",
    github: "https://github.com/Zitihsk-leduap",
    linkedin: "https://www.linkedin.com/in/kshitiz-paudel-127b4a280/",
  },
  {
    name: "Apil Chaudhary",
    credentials: "",
    role: "Engineer",
    organization: "AI Lab Pvt Ltd",
    description:
      "Apil Chaudhary is a final year Computer Engineering student at IOE, Pulchowk Campus and a technology researcher at AI Lab specializing in robotics, computer vision, and intelligent systems. As a member of the Robotics Club and AWS Cloud Clubs, he brings hands-on experience from representing Nepal at ABU Robocon competitions in Cambodia and Vietnam. His research explores advanced computational techniques and intelligent systems, contributing to innovative solutions that bridge theoretical concepts with practical applications in healthcare technology.",
    imageUrl: "/apil_chaudhary.png",
    github: "https://github.com/tyro-apil",
    linkedin: "https://www.linkedin.com/in/apil-chaudhary/",
  },
];

const interns = [
  {
    name: "Nishan Kharel",
    credentials: "",
    role: "Research Intern",
    organization: "AI Lab Pvt Ltd",
    description:
      "Nishan Kharel is a technology consultant dedicated to building intelligent, data-driven systems that solve real-world business and societal problems. With experience across machine learning, NLP, and analytics, he has developed and deployed software solutions spanning recruitment intelligence, document understanding, and large-scale data processing. His work bridges research and practice, combining modern frameworks with practical system design to deliver scalable, high-impact solutions. Nishan is passionate about continuous learning, knowledge sharing, and exploring innovative approaches to create meaningful, real-world impact.",
    imageUrl: "/nishan_kharel.jpeg",
    github: "https://github.com/nishankhareln",
    linkedin: "https://www.linkedin.com/in/nkharel/",
  },
  {
    name: "Avishek Guragain",
    credentials: "",
    role: "Research Intern",
    organization: "AI Lab Pvt Ltd",
    description:
      "Avishek Guragain is a Research-Based Engineer and Data Scientist dedicated to architecting intelligent, data-driven systems that bridge the gap between theoretical research and real-world application. Specialized in advanced software development and R&D, he focuses on developing and deploying sophisticated models, including Large Language Models (LLMs) and RAG (Retrieval-Augmented Generation) systems, to solve complex business and societal problems. His expertise spans the full development lifecycle, from engineering robust machine learning pipelines and performing high-level data analysis to implementing research-based architectures derived from technical documentation.",
    imageUrl: "/abhishek_gurgain.jpeg",
    github: "",
    linkedin: "https://www.linkedin.com/in/avishek-guragain-b6a776340/",
  },
];

type TeamFilter = "all" | "medical" | "technical" | "advisors" | "interns";

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<TeamFilter>("all");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const renderMember = (m: any, isLarge: boolean = false) => (
    <div
      className={`group bg-white rounded-2xl ${
        isLarge ? "p-8 md:p-10" : "p-6 md:p-8"
      } shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 h-full flex flex-col transition-all duration-300 relative overflow-hidden`}
    >
      {/* Subtle gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col h-full'>
        {/* Professional Image with Medical Cross Accent */}
        <div className='flex justify-center mb-6 relative'>
          <div
            className={`relative ${
              isLarge
                ? "w-40 h-40 md:w-48 md:h-48"
                : "w-32 h-32 md:w-36 md:h-36"
            }`}
          >
            <img
              src={m.imageUrl}
              alt={m.name}
              loading='lazy'
              className='w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300'
            />
            {/* Professional status indicator */}
            <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg'>
              <div className='w-3 h-3 bg-white rounded-full'></div>
            </div>
          </div>
        </div>

        {/* Name & Credentials with Medical Typography */}
        <div className='text-center mb-4'>
          <h3
            className={`${
              isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            } font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300`}
          >
            {m.name}
          </h3>
          {m.credentials && (
            <div className='inline-flex items-center px-3 py-1 bg-green-50 border border-green-200 rounded-full'>
              <p
                className={`${
                  isLarge ? "text-sm md:text-base" : "text-xs md:text-sm"
                } text-green-700 font-semibold`}
              >
                {m.credentials}
              </p>
            </div>
          )}
        </div>

        {/* Role & Organization with Healthcare Styling */}
        <div className='text-center mb-6'>
          <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg mb-2'>
            <p
              className={`${
                isLarge ? "text-base md:text-lg" : "text-sm md:text-base"
              } font-bold text-blue-800`}
            >
              {m.role}
            </p>
          </div>
          {m.organization && (
            <p
              className={`${
                isLarge ? "text-sm md:text-base" : "text-xs md:text-sm"
              } text-gray-600 font-medium`}
            >
              {m.organization}
            </p>
          )}
        </div>

        {/* Description with Medical Professional Styling */}
        <div className='flex-grow'>
          <p
            className={`${
              isLarge ? "text-sm md:text-base" : "text-xs md:text-sm"
            } text-gray-700 text-center leading-relaxed mb-6`}
          >
            {m.description}
          </p>
        </div>

        {/* Enhanced Social Links */}
        {(m.github || m.linkedin || m.twitter || m.email || m.scholar) && (
          <div className='flex justify-center gap-3 pt-6 border-t border-gray-100'>
            {m.github && (
              <a
                href={m.github}
                target='_blank'
                rel='noopener noreferrer'
                className={`${
                  isLarge ? "w-12 h-12" : "w-10 h-10"
                } bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-800 hover:to-gray-900 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
                aria-label='GitHub'
              >
                <FaGithub className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
              </a>
            )}
            {m.linkedin && (
              <a
                href={m.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className={`${
                  isLarge ? "w-12 h-12" : "w-10 h-10"
                } bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center text-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
                aria-label='LinkedIn'
              >
                <FaLinkedin className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
              </a>
            )}
            {m.twitter && (
              <a
                href={m.twitter}
                target='_blank'
                rel='noopener noreferrer'
                className={`${
                  isLarge ? "w-12 h-12" : "w-10 h-10"
                } bg-gradient-to-br from-sky-100 to-sky-200 hover:from-sky-500 hover:to-sky-600 rounded-xl flex items-center justify-center text-sky-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
                aria-label='Twitter'
              >
                <FaTwitter className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
              </a>
            )}
            {m.email && (
              <a
                href={m.email}
                className={`${
                  isLarge ? "w-12 h-12" : "w-10 h-10"
                } bg-gradient-to-br from-red-100 to-red-200 hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center text-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
                aria-label='Email'
              >
                <FaEnvelope className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
              </a>
            )}
            {m.scholar && (
              <a
                href={m.scholar}
                target='_blank'
                rel='noopener noreferrer'
                className={`${
                  isLarge ? "w-12 h-12" : "w-10 h-10"
                } bg-gradient-to-br from-green-100 to-green-200 hover:from-green-600 hover:to-green-700 rounded-xl flex items-center justify-center text-green-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
                aria-label='Google Scholar'
              >
                <FaGraduationCap className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50'>
      <Navigation />

      {/* Enhanced Hero Section with Medical Theme */}
      <div className='relative pt-32 md:pt-40 pb-12 md:pb-16 px-4 overflow-hidden'>
        {/* Medical-themed background elements */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-20 left-10 w-96 h-96 bg-green-100/30 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-50/40 rounded-full blur-2xl'></div>
        </div>

        <div className='relative z-10 text-center'>
          {/* Medical badge */}
          <div className='inline-flex items-center px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-6'>
            <div className='w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse'></div>
            <span className='text-sm font-semibold text-green-800'>
              Healthcare Technology Professionals
            </span>
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            <span className='text-gray-900'>Meet Our </span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600'>
              Expert Team
            </span>
          </h1>

          {/* Enhanced divider */}
          <div className='flex items-center justify-center mb-6'>
            <div className='w-16 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full'></div>
            <div className='w-3 h-3 bg-green-600 rounded-full mx-4'></div>
            <div className='w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full'></div>
          </div>

          <p className='text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Passionate healthcare professionals and technology experts dedicated
            to transforming medical practice through innovative software
            solutions
          </p>
        </div>
      </div>

      {/* Medical Wave Separator */}
      <div className='relative z-10 -mb-1'>
        <MedicalWave />
      </div>

      {/* Enhanced Filter Toggle */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-12'>
        <div className='flex flex-wrap justify-center gap-4'>
          {[
            { key: "all", label: "All Teams", icon: "" },
            { key: "medical", label: "Medical Team", icon: "" },
            { key: "technical", label: "Technical Team", icon: "" },
            { key: "advisors", label: "Advisors", icon: "" },
            { key: "interns", label: "Interns", icon: "" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key as TeamFilter)}
              className={`group flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                activeFilter === key
                  ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-green-400 hover:text-green-600 hover:scale-105"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* MEDICAL TEAM SECTION */}
      {(activeFilter === "all" || activeFilter === "medical") && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-4'>
              <span className='text-sm font-semibold text-red-700'>
                Medical Professionals
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Medical Team
            </h2>
            <div className='flex items-center justify-center mb-4'>
              <div className='w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full'></div>
              <div className='w-2 h-2 bg-red-500 rounded-full mx-3'></div>
              <div className='w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full'></div>
            </div>
            <p className='text-base text-gray-600 max-w-2xl mx-auto'>
              Board-certified physicians and clinical experts providing medical
              leadership and ensuring our AI solutions meet the highest
              healthcare standards
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {medicalTeam.map((m, i) => (
              <div
                key={i}
                className='transform hover:scale-105 transition-transform duration-300'
              >
                {renderMember(m, false)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TECHNICAL TEAM SECTION */}
      {(activeFilter === "all" || activeFilter === "technical") && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4'>
              <span className='text-sm font-semibold text-blue-700'>
                Technology Innovators
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Technical Team
            </h2>
            <div className='flex items-center justify-center mb-4'>
              <div className='w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full'></div>
              <div className='w-2 h-2 bg-blue-500 rounded-full mx-3'></div>
              <div className='w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full'></div>
            </div>
            <p className='text-base text-gray-600 max-w-2xl mx-auto'>
              Skilled engineers and AI specialists developing cutting-edge
              healthcare technology solutions with precision and innovation
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {technicalTeam.map((m, i) => (
              <div
                key={i}
                className='transform hover:scale-105 transition-transform duration-300'
              >
                {renderMember(m, false)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* INTERNS SECTION */}
      {(activeFilter === "all" || activeFilter === "interns") && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-4'>
              <span className='text-sm font-semibold text-orange-700'>
                Future Innovators
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Interns
            </h2>
            <div className='flex items-center justify-center mb-4'>
              <div className='w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full'></div>
              <div className='w-2 h-2 bg-orange-500 rounded-full mx-3'></div>
              <div className='w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full'></div>
            </div>
            <p className='text-base text-gray-600 max-w-2xl mx-auto'>
              Talented interns contributing fresh perspectives and innovative
              solutions to our healthcare AI initiatives
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {interns.map((m, i) => (
              <div
                key={i}
                className='transform hover:scale-105 transition-transform duration-300'
              >
                {renderMember(m, false)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ADVISORS SECTION */}
      {(activeFilter === "all" || activeFilter === "advisors") && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-4'>
              <span className='text-sm font-semibold text-purple-700'>
                Strategic Advisors
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Advisory Board
            </h2>
            <div className='flex items-center justify-center mb-4'>
              <div className='w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full'></div>
              <div className='w-2 h-2 bg-purple-500 rounded-full mx-3'></div>
              <div className='w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full'></div>
            </div>
            <p className='text-base text-gray-600 max-w-2xl mx-auto'>
              Distinguished academics and industry leaders providing strategic
              guidance and technical expertise to advance our healthcare AI
              mission
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            {advisors.map((m, i) => (
              <div
                key={i}
                className='transform hover:scale-102 transition-transform duration-300'
              >
                {renderMember(m, true)}
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
}
