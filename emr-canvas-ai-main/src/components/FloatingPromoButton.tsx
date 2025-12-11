import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

interface FloatingPromoButtonProps {
  text?: string;
  link?: string;
  position?: "right" | "left";
}

export default function FloatingPromoButton({
  text = "Try Laisten",
  link = "https://www.emrgenerator.site",
  position = "right",
}: FloatingPromoButtonProps) {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const positionClasses = position === "right" ? "right-6" : "left-6";

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`fixed bottom-6 ${positionClasses} z-50 group`}
      aria-label={text}
    >
      {/* Pulsing background effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className='absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg'
      />

      {/* Main button */}
      <div className='relative flex flex-col items-center gap-1 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-2xl'>
        <div className='flex items-center gap-3'>
          {/* Animated rocket icon */}
          <motion.div
            animate={{
              y: [0, -3, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaRocket className='text-xl' />
          </motion.div>

          {/* Text */}
          <div className='flex flex-col items-start'>
            <span className='font-bold text-base whitespace-nowrap'>
              {text}
            </span>
            <span className='text-xs opacity-90 whitespace-nowrap'>
              AI EMR Generator
            </span>
          </div>

          {/* NEW badge */}
          <span className='px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold animate-pulse'>
            NEW
          </span>
        </div>

        {/* Shine effect */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className='absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12'
        />
      </div>

      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'
      >
        Click to try now! 🚀
        <div className='absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900' />
      </motion.div>
    </motion.button>
  );
}
