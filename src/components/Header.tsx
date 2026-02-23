import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Каталог", href: "#catalog" },
  { label: "Аренда", href: "#rental" },
  { label: "Потребителям", href: "#consumers" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#hero" onClick={() => scrollTo("#hero")} className="flex items-center gap-2 group">
          <Droplets className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="font-heading font-bold text-xl tracking-tight">
            <span className="text-primary">WODO</span>
            <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>MAT</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#hero")}
            className="ml-2 px-5 py-2.5 rounded-xl font-heading text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Стать партнером
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="px-4 py-3 rounded-xl font-heading text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#hero")}
                className="mt-2 px-5 py-3 rounded-xl font-heading text-sm font-semibold bg-primary text-primary-foreground text-center"
              >
                Стать партнером
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
