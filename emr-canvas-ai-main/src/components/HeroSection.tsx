import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeartWave from "./HeartWave";
import MedicalWave from "./MedicalWave";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
  {/* Base green background */}
  <div className="absolute inset-0 bg-[#c8eec3]" />

  {/* Diagonal overlay (like TotalAV) */}
  <div className="absolute inset-y-0 right-0 w-[60%] bg-[#b9e6b1] rotate-2 origin-bottom-right" />

  {/* Decorative hearts + wave line (SVG repeated) */}
  <div className="absolute bottom-0 left-0 w-full flex justify-between px-10 pb-6 opacity-60">

    
  </div>
</div>



      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left side - Circular Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
              className="relative"
            >
              {/* Outer white circle */}
              <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-hero-circle-bg rounded-full flex items-center justify-center shadow-2xl">
                {/* Inner coral circle - can hold image */}
                <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] bg-hero-circle rounded-full overflow-hidden shadow-inner flex items-center justify-center">
                  {/* Placeholder for image - you can replace this with an actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-32 h-32 opacity-50"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.402 1.402M5 14.5V12m14.8 3.8V12m0 0H5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-end/30 rounded-full blur-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              AI-Powered EMR
              <br />
              <span className="text-primary">Report Generation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Transform doctor-patient conversations into comprehensive medical
              reports instantly. Our AI-driven platform streamlines healthcare
              documentation, saving time and improving accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-background/80 backdrop-blur-sm text-foreground rounded-full font-semibold border-2 border-border hover:border-primary transition-all hover:scale-105">
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10x</div>
                <div className="text-sm text-muted-foreground">Faster</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
