import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-vending.jpg";

const theses = [
  "Собственная сеть 160+ водоматов с 2018 года",
  "Окупаемость от 17 месяцев",
  "Сервис и склады в каждом областном городе",
  "Полное сопровождение от запуска до масштабирования",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-water-deep">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 water-drop animate-blob opacity-10" />
        <div className="absolute top-1/3 -left-10 w-64 h-64 water-drop animate-blob-delayed opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/20 text-primary-foreground border border-primary/30 mb-6"
            >
              💧 WODOMAT — Аква-вендинг, проверенный на практике
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
            >
              Аква-вендинг, который мы{" "}
              <span className="text-primary">используем сами</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed"
            >
              С 2018 года развиваем собственную сеть водоматов в Беларуси
              и помогаем предпринимателям запускать и масштабировать прибыльный
              аква-бизнес на основе реальной практики, а не теории.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {theses.map((t) => (
                <li key={t} className="flex items-start gap-3 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-body">{t}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contacts"
                className="relative overflow-hidden px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 text-center"
              >
                <span className="relative z-10">Получить бизнес-план в телеграм</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
              </Link>
              <Link
                to="/contacts"
                className="px-8 py-4 rounded-2xl font-heading font-semibold text-lg border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Получить бизнес-план на e-mail
              </Link>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Действующий водомат WODOMAT"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-water-deep/40 to-transparent" />
            </div>
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
