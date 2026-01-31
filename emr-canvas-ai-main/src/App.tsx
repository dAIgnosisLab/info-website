import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamPage from "./pages/TeamPage";
import EmrGeneratorPage from "./pages/EmrGeneratorPage";
import FloatingPromoButton from "./components/FloatingPromoButton";
import XrayTo3DPage from "./pages/Xrayto3d";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Index />
          </motion.div>
        } />
        <Route path='/Team' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <TeamPage />
          </motion.div>
        } />
        <Route path='/emr-generator' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <EmrGeneratorPage />
          </motion.div>
        } />
        <Route path='/radivision-3d' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <XrayTo3DPage />
          </motion.div>
        } />
        <Route path='*' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <NotFound />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
        <FloatingPromoButton
          text='Try Laisten'
          link='https://www.emrgenerator.site'
          position='right'
        />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
