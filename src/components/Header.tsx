import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "Аренда", href: "/rental" },
  { label: "Потребителям", href: "/consumers" },
  { label: "Контакты", href: "/contacts" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "glass-card border-b py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Droplets className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="font-heading font-bold text-xl tracking-tight">
            <span className="text-primary">ВОДО</span>
            <span className={scrolled || !isHome ? "text-foreground" : "text-primary-foreground"}>МАТ</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                isActive(item.href)
                  ? "text-primary bg-primary/10"
                  : scrolled || !isHome
                  ? "text-foreground"
                  : "text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://cloudwodomat.by/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 rounded-xl font-heading text-sm font-semibold bg-white text-primary hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Мониторинг
          </a>
          <Link
            to="/contacts"
            className="relative overflow-hidden ml-2 px-5 py-2.5 rounded-xl font-heading text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10">Стать партнером</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled || !isHome ? "text-foreground" : "text-primary-foreground"}`}
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
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-heading text-sm font-medium transition-all text-left ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://cloudwodomat.by/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-3 rounded-xl font-heading text-sm font-semibold bg-white text-primary text-center border border-primary/20"
              >
                Мониторинг
              </a>
              <Link
                to="/contacts"
                onClick={() => setIsOpen(false)}
                className="relative overflow-hidden mt-2 px-5 py-3 rounded-xl font-heading text-sm font-semibold bg-primary text-primary-foreground text-center"
              >
                <span className="relative z-10">Стать партнером</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
