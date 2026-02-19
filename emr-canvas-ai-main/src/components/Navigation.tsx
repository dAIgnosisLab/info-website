import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStethoscope, FaHeartbeat } from "react-icons/fa";

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
      {/* Enhanced Promotional Banner */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-[length:200%_100%] animate-gradient cursor-pointer shadow-lg'
        onClick={() => window.open("https://www.emrgenerator.site", "_blank")}
      >
        <div className='max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3'>
          <div className='flex items-center justify-center gap-3'>
            <div className='text-white font-semibold text-xs sm:text-sm md:text-base text-center'>
              <span className='hidden sm:inline'>Introducing </span>
              <span className='font-bold bg-white/20 px-2 py-1 rounded-md'>
                Laisten
              </span>{" "}
              - Smart EMR Platform
              <span className='ml-1 sm:ml-2 text-xs sm:text-sm opacity-90 bg-white/10 px-1 sm:px-2 py-1 rounded-full'>
                Click to try now →
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Main Navigation */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 top-[52px] ${
          hideNav ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-green-100"
            : "bg-white shadow-lg border-b border-gray-100"
        }`}
        role='navigation'
        aria-label='Main'
      >
        <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
          <div className='h-16 sm:h-20 md:h-24 flex items-center justify-between'>
            {/* Enhanced Logo */}
            <a
              href='/'
              className='flex items-center group relative z-50'
            >
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
                <img
                  src='/ai_lab_logo.png'
                  alt='AI Lab - Healthcare AI Solutions'
                  className='h-10 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32 lg:h-16 lg:w-36 object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-lg relative z-10'
                />
                {/* Medical cross accent */}
                <div className='absolute -top-1 -right-1 w-3 h-3 text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <div className='w-full h-0.5 bg-current absolute top-1/2 transform -translate-y-1/2'></div>
                  <div className='h-full w-0.5 bg-current absolute left-1/2 transform -translate-x-1/2'></div>
                </div>
              </div>
            </a>

            <div className='hidden md:flex lg:hidden items-center gap-1'>
              {links.slice(0, 3).map((l, index) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className='text-gray-700 text-xs font-semibold px-2 py-2 rounded-lg hover:text-green-600 hover:bg-green-50 transition-all duration-300'
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            {/* Enhanced Desktop Links */}
            <div className='hidden lg:flex items-center gap-2'>
              {links.map((l, index) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='relative text-gray-700 text-sm xl:text-base font-semibold px-4 py-3 rounded-xl group transition-all duration-300 hover:text-green-600 hover:bg-green-50'
                >
                  {l.label}
                  <span className='absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full'></span>

                  {/* Hover glow effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-green-100/0 to-blue-100/0 group-hover:from-green-100/50 group-hover:to-blue-100/50 rounded-xl transition-all duration-300 -z-10'></div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              type='button'
              className='md:hidden p-2 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-600 rounded-lg transition-all duration-300 relative z-50 border border-transparent hover:border-green-200'
              aria-label='Toggle menu'
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className='w-5 h-5 transition-transform duration-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {open ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2.5}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2.5}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden'
                onClick={() => setOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", damping: 25 }}
                className='absolute top-full left-0 right-0 md:hidden bg-white/98 backdrop-blur-xl border-t border-green-100 shadow-2xl'
              >
                <div className='max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 space-y-2 sm:space-y-3'>
                  {links.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.08,
                        type: "spring",
                        damping: 20,
                      }}
                      onClick={() => setOpen(false)}
                      className='flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-700 rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-600 transition-all duration-300 border border-transparent hover:border-green-200 hover:shadow-md'
                    >
                      <span>{l.label}</span>
                      <div className='ml-auto w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </motion.a>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className='pt-4 border-t border-gray-200'
                  >
                    <div className='text-center text-sm text-gray-600 mb-3'>
                      Healthcare AI Solutions
                    </div>
                    <div className='flex justify-center gap-2'>
                      <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                      <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200'></div>
                      <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400'></div>
                    </div>
                  </motion.div>
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
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;
