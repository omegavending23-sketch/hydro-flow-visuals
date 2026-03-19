import Header from "@/components/Header";
import ConsumersSection from "@/components/ConsumersSection";
import Footer from "@/components/Footer";

const ConsumersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[67.2px]">
        <ConsumersSection />
      </div>
      <Footer />
    </div>
  );
};

export default ConsumersPage;
