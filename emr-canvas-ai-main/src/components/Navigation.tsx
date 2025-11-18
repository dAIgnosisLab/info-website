import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#products", label: "Our Products" },
    { href: "/#about", label: "About us" },
    { href: "/Team", label: "Team" },
    { href: "/#contact", label: "Contact us" },
  ];

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'
      role='navigation'
      aria-label='Main'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-20 sm:h-24 flex items-center justify-between'>
          {/* Logo */}
          <a
            href='/'
            className='flex items-center group'
          >
            <img
              src='/logo.png'
              alt='Logo'
              className='h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110'
            />
          </a>

          {/* Desktop Links */}
          <div className='hidden md:flex items-center gap-6 lg:gap-8'>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className='relative text-gray-700 text-base lg:text-lg font-semibold group px-2 py-1'
              >
                <span className='transition-colors duration-300 group-hover:text-green-600'>
                  {l.label}
                </span>
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-500 ease-out'></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className='md:hidden p-2.5 text-gray-700 hover:bg-green-100 rounded-lg transition-colors duration-200'
            aria-label='Toggle menu'
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className='w-8 h-8'
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className='pt-2 pb-2 space-y-1 bg-white'>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className='block px-4 py-4 text-base font-semibold text-gray-700 relative group rounded-lg hover:bg-green-50 transition-colors duration-200'
              >
                <span className='transition-colors duration-300 group-hover:text-green-600'>
                  {l.label}
                </span>
                <span className='absolute bottom-2 left-4 w-0 h-0.5 bg-green-600 group-hover:w-[calc(100%-2rem)] transition-all duration-500 ease-out'></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;