import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/landing/AboutUs";
import RSPP from "@/components/landing/RSPP";
import TrustNumbers from "@/components/landing/TrustNumbers";
import WhySafe from "@/components/landing/WhySafe";
import ClientJourney from "@/components/landing/ClientJourney";
import Infrastructure from "@/components/landing/Infrastructure";
import Documents from "@/components/landing/Documents";
import Team from "@/components/landing/Team";
import ForWhom from "@/components/landing/ForWhom";
import Gallery from "@/components/landing/Gallery";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutUs />
      <RSPP />
      <TrustNumbers />
      <WhySafe />
      <ClientJourney />
      <Infrastructure />
      <Documents />
      <Team />
      <ForWhom />
      <Gallery />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
