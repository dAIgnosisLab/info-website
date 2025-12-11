import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for styling
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down past 100px, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setHideNav(true); // Scrolling down
        } else {
          setHideNav(false); // Scrolling up
        }
      } else {
        setHideNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#products", label: "Our Products" },
    { href: "/#about", label: "About us" },
    { href: "/Team", label: "Team" },
    { href: "/#contact", label: "Contact us" },
  ];

  return (
    <>
      {/* Promotional Banner - Always visible */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-[length:200%_100%] animate-gradient cursor-pointer'
        onClick={() => window.open("https://www.emrgenerator.site", "_blank")}
      >
        <div className='max-w-7xl mx-auto px-4 py-3'>
          <div className='flex items-center justify-center gap-3'>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className='text-2xl'
            ></motion.div>
            <div className='text-white font-semibold text-sm md:text-base text-center'>
              <span className='hidden sm:inline'>Introducing </span>
              <span className='font-bold'>Laisten</span> - AI EMR Generator
              <span className='ml-2 text-xs md:text-sm opacity-90'>
                Click to try now →
              </span>
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.5,
              }}
              className='text-2xl'
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation - Hides on scroll down */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 top-[52px] ${
          hideNav ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
        role='navigation'
        aria-label='Main'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='h-20 md:h-24 flex items-center justify-between'>
            {/* Logo */}
            <a
              href='/'
              className='flex items-center group relative z-50'
            >
              <div className='relative'>
                <img
                  src='/logo.png'
                  alt='DAIgnosisLab Logo'
                  className='h-16 w-36 md:h-20 md:w-48 lg:h-24 lg:w-56 object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-md'
                />
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden'
                onClick={() => setOpen(false)}
              />

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
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;
