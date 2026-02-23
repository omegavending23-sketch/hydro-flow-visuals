import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Animated water blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 water-drop animate-blob opacity-20" />
        <div className="absolute top-1/3 -left-10 w-64 h-64 water-drop animate-blob-delayed opacity-15" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 water-drop animate-float opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/20 text-primary-foreground border border-primary/30 mb-6">
              💧 WODOMAT — Чистая вода рядом
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
          >
            Вендинговые водоматы —{" "}
            <span className="text-gradient-water">будущее бизнеса</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed"
          >
            Станьте партнёром WODOMAT и откройте прибыльный бизнес по продаже чистой питьевой воды.
            Окупаемость от 17 месяцев, поддержка 365 дней в году.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo("#contacts")}
              className="px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Стать партнером
            </button>
            <button
              onClick={() => scrollTo("#catalog")}
              className="px-8 py-4 rounded-2xl font-heading font-semibold text-lg border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 backdrop-blur-sm"
            >
              Каталог водоматов
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { value: "30+", label: "Водоматов в сети" },
              { value: "17", label: "Месяцев окупаемость" },
              { value: "24/7", label: "Доступ к воде" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-primary-foreground/50 text-xs font-heading">Прокрутите вниз</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
