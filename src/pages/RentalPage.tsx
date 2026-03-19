import Header from "@/components/Header";
import RentalSection from "@/components/RentalSection";
import Footer from "@/components/Footer";

const RentalPage = () => {
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
