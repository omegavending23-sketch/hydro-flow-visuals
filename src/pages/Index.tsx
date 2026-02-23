import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import RentalSection from "@/components/RentalSection";
import ConsumersSection from "@/components/ConsumersSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CatalogSection />
      <RentalSection />
      <ConsumersSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
