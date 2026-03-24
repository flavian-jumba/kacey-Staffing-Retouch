
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import Home from "./pages/Home";
import J1Program from "./pages/Application";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import HealthcareStaffing from "./pages/HealthcareStaffing";
import TeachingOpportunities from "./pages/TeachingOpportunities";
import HospitalityCareers from "./pages/HospitalityCareers";
import Documentation from './pages/Documentation';
import Careers from "./pages/Careers";
import { useScrollAnimations } from "./hooks/useGlobalAnimations";
import TermsConditions from "./pages/TermsConditions";
import DataProtectionPolicy from "./pages/DataProtectionPolicy";
import Reviews from "./pages/Reviews";

const queryClient = new QueryClient();

const App = () => {
  // Initialize global scroll animations
  useScrollAnimations();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{/* Routes content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<J1Program />} />
              <Route path="/application" element={<J1Program />} />
              <Route path="/healthcare-staffing" element={<HealthcareStaffing />} />
              <Route path="/teaching-opportunities" element={<TeachingOpportunities />} />
              <Route path="/hospitality-careers" element={<HospitalityCareers />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/data-protection" element={<DataProtectionPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppChat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
