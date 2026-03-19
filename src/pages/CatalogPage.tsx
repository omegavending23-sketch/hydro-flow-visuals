import Header from "@/components/Header";
import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";

const CatalogPage = () => {
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
