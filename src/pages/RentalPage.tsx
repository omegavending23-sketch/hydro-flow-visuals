import Header from "@/components/Header";
import RentalSection from "@/components/RentalSection";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const RentalPage = () => {
  usePageMeta(
    "ВОДОМАТ - Аренда водоматов для организаций и предприятий",
    "аренда водоматов с питьевой водой для организаций и предприятий, аренда аппаратов с питьевой водой для организаций и предприятий, аренда водоматов с газированной водой для организаций и предприятий, аренда аппаратов с газированной водой для организаций и предприятий, аренда ВОДОМАТ, аренда WODOMAT."
  );
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[67.2px]">
        <RentalSection />
      </div>
      <Footer />
    </div>
  );
};

export default RentalPage;
