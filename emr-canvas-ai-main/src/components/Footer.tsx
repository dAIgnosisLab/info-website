import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
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
      className='bg-gray-50 border-t border-gray-200 mt-20 relative overflow-hidden'
      id='notify'
    >
      {/* Subtle background decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 right-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30'></div>
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
                src='/logo.png'
                alt='DAIgnosisLab Logo'
                className='h-20 w-44 md:h-24 md:w-56 object-contain drop-shadow-md'
              />
            </div>

            <p className='text-gray-600 text-sm md:text-base leading-relaxed mb-6'>
              AI-powered healthcare innovation focused on empowering clinicians,
              streamlining workflows, reducing errors, and improving global
              patient outcomes.
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
                  className='w-11 h-11 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white border border-gray-200 hover:border-green-600 shadow-sm hover:shadow-md transition-all duration-300'
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
                    <span className='w-0 h-0.5 bg-green-600 group-hover:w-4 transition-all duration-300'></span>
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
            <span className='font-semibold text-gray-900'>dAIgnosisLab</span>.
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
