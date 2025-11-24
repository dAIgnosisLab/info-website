import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamPage from "./pages/TeamPage";
import EmrGeneratorPage from "./pages/EmrGeneratorPage";
import XrayTo3DPage from "./pages/Xrayto3d";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Index />}
          />
          <Route
            path='/Team'
            element={<TeamPage />}
          />
          <Route
            path='/emr-generator'
            element={<EmrGeneratorPage />}
          />
          <Route
            path='/xray-to-3d'
            element={<XrayTo3DPage />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
