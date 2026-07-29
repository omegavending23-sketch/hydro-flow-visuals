import Header from "@/components/Header";
import ConsumersSection from "@/components/ConsumersSection";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const ConsumersPage = () => {
  usePageMeta("ВОДОМАТ - потребителям");
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
