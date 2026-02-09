import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import { PracticeAreasPage, PracticeAreaDetailPage } from "./pages/PracticeAreas";
import BlogPage from "./pages/Blog";
import SchedulePage from "./pages/Schedule";
import ContactPage from "./pages/Contact";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsPage from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/areas-de-atuacao" element={<PracticeAreasPage />} />
          <Route path="/areas-de-atuacao/:slug" element={<PracticeAreaDetailPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/conteudos" element={<BlogPage />} />
          <Route path="/agendar" element={<SchedulePage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;