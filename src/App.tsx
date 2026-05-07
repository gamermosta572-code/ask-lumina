import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ISO9001 from "./pages/ISO9001";
import ISO27001 from "./pages/ISO27001";
import ISO14001 from "./pages/ISO14001";
import ISO45001 from "./pages/ISO45001";
import ISO22000 from "./pages/ISO22000";
import ISO13485 from "./pages/ISO13485";
import ISO42001 from "./pages/ISO42001";
import OrganisationalCertification from "./pages/OrganisationalCertification";
import PeopleTrainingCertification from "./pages/PeopleTrainingCertification";
import AboutUs from "./pages/AboutUs";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iso-9001" element={<ISO9001 />} />
          <Route path="/iso-27001" element={<ISO27001 />} />
          <Route path="/iso-14001" element={<ISO14001 />} />
          <Route path="/iso-45001" element={<ISO45001 />} />
          <Route path="/iso-22000" element={<ISO22000 />} />
          <Route path="/iso-13485" element={<ISO13485 />} />
          <Route path="/iso-42001" element={<ISO42001 />} />
          <Route path="/organisational-certification" element={<OrganisationalCertification />} />
          <Route path="/people-training-certification" element={<PeopleTrainingCertification />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
