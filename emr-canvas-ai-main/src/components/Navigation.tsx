import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-background/80 backdrop-blur-lg rounded-full px-8 py-4 shadow-lg border border-border/50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img src="/logo.svg" alt="Logo" className="h-16 w-auto " />


            {/* Navigation Links */}
<div className="hidden md:flex items-center gap-10">
  

  <a
  href="/#services"
  className="text-foreground hover:text-green-600 transition-colors px-4 py-2"
>
  Services
</a>

<a
  href="/#about"
  className="text-foreground hover:text-green-600 transition-colors px-4 py-2"
>
  About us
</a>
<a href="/Team" className="ltext-foreground hover:text-green-600 transition-colors px-4 py-2" >Team</a>
<a
  href="/#contact"
  className="text-foreground hover:text-green-600 transition-colors px-4 py-2"
>
  Contact us
</a>

    {/*
  <Button variant="default" className="rounded-full bg-green-600 text-white px-6 py-2"
  onClick={() => {
    const target = document.getElementById("notify");
    target?.scrollIntoView({ behavior: "smooth" });
  }}>
    Get Notified
  </Button>
*/}
</div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
