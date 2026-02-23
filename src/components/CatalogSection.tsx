import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Droplets, Leaf, Clock, Award } from "lucide-react";
import productImg from "@/assets/wodomat-product.jpg";
import WaterBackground from "./WaterBackground";

const features = [
  { icon: Droplets, title: "10 этапов фильтрации", desc: "Многоступенчатая очистка и минерализация воды" },
  { icon: Shield, title: "Без вредных примесей", desc: "Очищена от тяжёлых металлов, вирусов и бактерий" },
  { icon: Zap, title: "Озонирование", desc: "Ёмкости проходят обработку озоном" },
  { icon: Leaf, title: "Экологичность", desc: "Меньше пластиковых бутылок — чище планета" },
  { icon: Clock, title: "Доступ 24/7", desc: "Чистая вода в любое время дня и ночи" },
  { icon: Award, title: "Минерализация", desc: "Оптимальный уровень полезных минералов" },
];

const CatalogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <WaterBackground intensity="light">
      <section id="catalog" className="section-padding" ref={ref}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-4">
              Каталог
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
              Водоматы <span className="text-gradient-water">WODOMAT</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Надёжные вендинговые аппараты по продаже чистой питьевой воды
              с многоступенчатой системой фильтрации
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden glass-card p-8">
                <img
                  src={productImg}
                  alt="Водомат WODOMAT"
                  className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                {/* 3D hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 right-8 glass-card px-6 py-3 rounded-2xl"
              >
                <span className="font-heading font-bold text-primary text-lg">от 14 600 зл</span>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card-hover p-5 cursor-default group"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </WaterBackground>
  );
};

export default CatalogSection;
