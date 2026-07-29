import Header from "@/components/Header";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const ContactsPage = () => {
  usePageMeta("ВОДОМАТ - контакты");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[67.2px]">
        <ContactsSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactsPage;
