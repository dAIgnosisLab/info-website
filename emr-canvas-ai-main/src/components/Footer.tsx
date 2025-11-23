import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className='bg-white border-t border-gray-200 mt-20'
      id='notify'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12'>
          {/* Brand */}
          <div>
            <img
              src='/logo.png'
              alt='DAIgnosisLab Logo'
              className='h-16 sm:h-20 md:h-24 w-auto mb-4'
            />

            <p className='text-gray-600 text-base md:text-lg leading-relaxed mb-6'>
              AI-powered healthcare innovation focused on empowering clinicians, streamlining workflows, reducing errors, and improving global patient outcomes.
            </p>

            {/* Social Icons */}
            <div className='flex gap-4'>
              <a
                href='#'
                className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300'
              >
                <FaFacebook className='text-2xl' />
              </a>
              <a
                href='#'
                className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300'
              >
                <FaTwitter className='text-2xl' />
              </a>
              <a
                href='#'
                className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300'
              >
                <FaLinkedin className='text-2xl' />
              </a>
              <a
                href='#'
                className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300'
              >
                <FaInstagram className='text-2xl' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
            <div>
              <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>
                Quick Links
              </h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#about'
                    className='text-gray-600 hover:text-green-600 transition-colors duration-300 text-base md:text-lg'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className='text-gray-600 hover:text-green-600 transition-colors duration-300 text-base md:text-lg'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='/Team'
                    className='text-gray-600 hover:text-green-600 transition-colors duration-300 text-base md:text-lg'
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className='text-gray-600 hover:text-green-600 transition-colors duration-300 text-base md:text-lg'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'>
              Get in Touch
            </h3>
            <ul className='space-y-4'>
              <li className='text-gray-600 text-base md:text-lg'>
                <span className='font-semibold text-gray-900'>Email:</span>
                <br />
                daignosislab@gmail.com
              </li>
              <li className='text-gray-600 text-base md:text-lg'>
                <span className='font-semibold text-gray-900'>Phone:</span>
                <br />
                +977-9703895325
              </li>
              <li className='text-gray-600 text-base md:text-lg'>
                <span className='font-semibold text-gray-900'>Location:</span>
                <br />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-200 mt-12 pt-8 text-center'>
          <p className='text-gray-600 text-sm md:text-base'>
            © {new Date().getFullYear()} dAIgnosisLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}