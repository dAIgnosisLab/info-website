import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#products", label: "Our Products" },
    { href: "/#about", label: "About us" },
    { href: "/Team", label: "Team" },
    { href: "/#contact", label: "Contact us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
      role='navigation'
      aria-label='Main'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-24 md:h-28 flex items-center justify-between'>
          {/* Logo */}
          <a
            href='/'
            className='flex items-center group relative z-50'
          >
            <div className='relative'>
              <img
                src='/logo.png'
                alt='DAIgnosisLab Logo'
                className='h-20 w-44 md:h-24 md:w-56 lg:h-28 lg:w-64 object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-md'
              />
              {/* Optional glow effect on hover */}
              <div className='absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 rounded-lg transition-all duration-300 blur-xl'></div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className='hidden lg:flex items-center gap-1'>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className='relative text-gray-700 text-sm xl:text-base font-semibold px-4 py-2 rounded-lg group transition-colors duration-300 hover:text-green-600'
              >
                {l.label}
                <span className='absolute bottom-1 left-4 right-4 h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
              </a>
            ))}
            <a
              href='/#contact'
              className='ml-3 px-6 py-2.5 bg-green-600 text-white text-sm xl:text-base font-semibold rounded-lg hover:bg-green-700 shadow-sm hover:shadow-md transition-all duration-300'
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className='lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative z-50'
            aria-label='Toggle menu'
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className='w-7 h-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {open ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden'
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='absolute top-full left-0 right-0 lg:hidden bg-white border-t border-gray-100 shadow-xl'
            >
              <div className='max-w-7xl mx-auto px-4 py-6 space-y-2'>
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setOpen(false)}
                    className='block px-4 py-3 text-base font-semibold text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-all duration-200'
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href='/#contact'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05 }}
                  onClick={() => setOpen(false)}
                  className='block px-4 py-3 mt-2 bg-green-600 text-white text-base font-semibold rounded-lg hover:bg-green-700 text-center transition-colors duration-200'
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;