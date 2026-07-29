import Header from "@/components/Header";
import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const CatalogPage = () => {
  usePageMeta(
    "ВОДОМАТ - каталог водоматов",
    "каталог аппаратов по продаже воды ВОДОМАТ, каталог водоматов по продаже воды ВОДОМАТ, каталог аппаратов по продаже воды WODOMAT, каталог водоматов по продаже воды WODOMAT."
  );
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[67.2px]">
        <CatalogSection />
      </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
