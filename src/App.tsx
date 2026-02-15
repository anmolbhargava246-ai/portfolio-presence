import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import CaseStudyPersonalLoans from "./pages/CaseStudyPersonalLoans";
import CaseStudyCreativeEducation from "./pages/CaseStudyCreativeEducation";
import CaseStudyUrbanPlanning from "./pages/CaseStudyUrbanPlanning";
import CaseStudyAirlineBooking from "./pages/CaseStudyAirlineBooking";
import CaseStudyBrandPerception from "./pages/CaseStudyBrandPerception";
import CaseStudySensoryPreference from "./pages/CaseStudySensoryPreference";
import CaseStudyDigitalWallet from "./pages/CaseStudyDigitalWallet";
import CaseStudyAIAssistant from "./pages/CaseStudyAIAssistant";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/personal-loans" element={<CaseStudyPersonalLoans />} />
          <Route path="/projects/creative-education" element={<CaseStudyCreativeEducation />} />
          <Route path="/projects/urban-planning" element={<CaseStudyUrbanPlanning />} />
          <Route path="/projects/airline-booking" element={<CaseStudyAirlineBooking />} />
          <Route path="/projects/brand-perception" element={<CaseStudyBrandPerception />} />
          <Route path="/projects/sensory-preference" element={<CaseStudySensoryPreference />} />
          <Route path="/projects/digital-wallet" element={<CaseStudyDigitalWallet />} />
          <Route path="/projects/ai-assistant" element={<CaseStudyAIAssistant />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
