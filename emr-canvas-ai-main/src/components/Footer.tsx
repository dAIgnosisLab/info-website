import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
  FaHospital,
  FaNotesMedical,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "/Team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer
      className='bg-gradient-to-br from-gray-50 via-green-50/20 to-blue-50/10 border-t border-gray-200 mt-20 relative overflow-hidden'
      id='notify'
    >
      {/* Medical-themed floating icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 right-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30'></div>

        {/* Healthcare logo patterns */}
        <FaStethoscope className='absolute top-16 left-16 text-green-200 text-3xl animate-pulse opacity-30' />
        <FaHeartbeat className='absolute bottom-20 right-20 text-green-300 text-2xl animate-bounce opacity-40' />
        <FaMicroscope className='absolute top-1/2 right-1/3 text-green-200 text-4xl animate-pulse opacity-20' />
        <FaUserMd className='absolute top-1/3 left-1/4 text-green-150 text-2xl opacity-25 animate-bounce delay-500' />
        <FaHospital className='absolute bottom-1/4 left-1/5 text-green-100 text-3xl opacity-20 animate-pulse delay-700' />
        <FaNotesMedical className='absolute top-2/3 right-1/5 text-green-200 text-2xl opacity-25 animate-bounce delay-300' />
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16'>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='mb-6'>
              <img
                src='/ai_lab_logo.png'
                alt='AI Lab Pvt Ltd Logo'
                className='h-16 w-36 md:h-20 md:w-44 object-contain drop-shadow-md'
              />
            </div>

            <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6'>
              Healthcare technology innovation focused on empowering clinicians,
              optimizing workflows, enhancing accuracy, and improving global
              patient outcomes through advanced software solutions.
            </p>

            {/* Social Icons */}
            <div className='flex gap-3'>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className='w-11 h-11 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-500 hover:text-white border border-gray-200 hover:border-green-600 shadow-sm hover:shadow-lg transition-all duration-300'
                  aria-label={social.label}
                >
                  <span className='text-xl'>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-6'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='group text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm md:text-base flex items-center gap-2'
                  >
                    <span className='w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 group-hover:w-4 transition-all duration-300'></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-6'>
              Get in Touch
            </h3>
            <ul className='space-y-4'>
              <li className='text-gray-600 text-sm md:text-base'>
                <span className='font-semibold text-gray-900 block mb-1'>
                  Email
                </span>
                <a
                  href='mailto:daignosislab@gmail.com'
                  className='text-green-600 hover:text-green-700 transition-colors duration-200'
                >
                  daignosislab@gmail.com
                </a>
              </li>
              <li className='text-gray-600 text-sm md:text-base'>
                <span className='font-semibold text-gray-900 block mb-1'>
                  Phone
                </span>
                <a
                  href='tel:+9779745956296'
                  className='text-green-600 hover:text-green-700 transition-colors duration-200'
                >
                  +977-9745956296
                </a>
              </li>
              <li className='text-gray-600 text-sm md:text-base'>
                <span className='font-semibold text-gray-900 block mb-1'>
                  Location
                </span>
                Kathmandu, Nepal
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='border-t border-gray-200 mt-12 pt-8 text-center'
        >
          <p className='text-gray-600 text-sm md:text-base'>
            © {new Date().getFullYear()}{" "}
            <span className='font-semibold text-gray-900'>AI Lab Pvt Ltd</span>.
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
