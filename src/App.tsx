import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CatalogPage from "./pages/CatalogPage";
import RentalPage from "./pages/RentalPage";
import ConsumersPage from "./pages/ConsumersPage";
import ContactsPage from "./pages/ContactsPage";
import WodomatXPage from "./pages/WodomatXPage";
import WodomatSPage from "./pages/WodomatSPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/wodomat-x" element={<WodomatXPage />} />
          <Route path="/catalog/wodomat-s" element={<WodomatSPage />} />
          <Route path="/rental" element={<RentalPage />} />
          <Route path="/consumers" element={<ConsumersPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
