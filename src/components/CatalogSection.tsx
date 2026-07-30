import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Droplets, Leaf, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import wodomatXAsset from "@/assets/wodomat-x3.png";
import wodomatSAsset from "@/assets/s-ai-front.png";
const wodomatX = wodomatXAsset;
const wodomatS = wodomatSAsset;
import WaterBackground from "./WaterBackground";
import { openLeadForm } from "@/components/LeadFormDialog";

const features = [
  { icon: Droplets, title: "12 этапов фильтрации", desc: "Многоступенчатая очистка и минерализация воды" },
  { icon: Shield, title: "Без вредных примесей", desc: "Очищена от тяжёлых металлов, вирусов и бактерий" },
  { icon: Zap, title: "Озонирование", desc: "Ёмкости проходят обработку озоном" },
  { icon: Leaf, title: "Экологичность", desc: "Меньше пластиковых бутылок — чище планета" },
  { icon: Clock, title: "Доступ 24/7", desc: "Свежая вода в любое время дня и ночи" },
  { icon: Award, title: "Минерализация", desc: "Оптимальный уровень полезных минералов" },
];

const products = [
  {
    image: wodomatX,
    name: "WODOMAT X",
    subtitle: "Премиальный интеллектуальный водомат для стабильного и масштабируемого бизнеса вашей собственной сети",
    description: "Комплексная система: технология, цифровой контроль, сервисная дисциплина и поддержка партнёров.",
    dimensions: "200 см · 85 см · 85 см",
    price: "11 450 руб.",
    link: "/catalog/wodomat-x",
  },
  {
    image: wodomatS,
    name: "WODOMAT S",
    subtitle: "Компактное профессиональное решение для аква-вендинга",
    description: "Комплексная система, объединяющая современные технологии очистки воды, цифровой контроль работы оборудования, удобные инструменты управления бизнесом и полноценную поддержку партнёров.\n\nМодель разработана специально для настенного размещения на фасадах зданий, что позволяет эффективно использовать пространство и устанавливать оборудование даже в местах с ограниченной площадью.",
    dimensions: "170 см · 85 см · 60 см",
    price: "10 450 руб.",
    link: "/catalog/wodomat-s",
  },
];

const CatalogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <WaterBackground intensity="light">
      <section id="catalog" className="section-padding" ref={ref}>
        <div className="container mx-auto">
          {/* Header */}
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
              Надёжные вендинговые водоматы по продаже свежей питьевой воды
              с многоступенчатой системой фильтрации
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col items-center text-center group"
              >
                {/* Image */}
                <div className="w-full p-6 pb-0 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[340px] md:h-[400px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 pt-4 flex flex-col items-center flex-1">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-gradient-water mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-4">
                    {product.description}
                  </p>
                  <p className="font-heading font-bold text-2xl text-foreground mb-5">
                    {product.price}
                  </p>

                  {/* Shine button */}
                  <button
                    onClick={() => product.link && navigate(product.link)}
                    className="relative overflow-hidden px-8 py-3 rounded-xl font-heading text-sm font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105 mt-auto"
                  >
                    <span className="relative z-10">Подробнее</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Преимущества наших водоматов
            </h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="glass-card-hover p-5 cursor-default group"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mt-20"
          >
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Не знаете какой выбрать водомат?
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Мы поможем вам выбрать лучший вариант водомата исходя из ваших потребностей
            </p>
            <button onClick={() => openLeadForm()} className="relative overflow-hidden px-10 py-4 rounded-xl font-heading text-base font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="relative z-10">Получить консультацию</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
            </button>
          </motion.div>
        </div>
      </section>
    </WaterBackground>
  );
};

export default CatalogSection;
