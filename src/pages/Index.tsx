import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TrustSection from "@/components/TrustSection";
import ClientsSection from "@/components/ClientsSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <ServicesSection />
    <IndustriesSection />
    <TrustSection />
    <ClientsSection />
    <ResourcesSection />
    <Footer />
  </div>
);

export default Index;
