import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Heart, Recycle, MapPin, CreditCard, Clock } from "lucide-react";
import WaterBackground from "./WaterBackground";

const advantages = [
  { icon: Droplets, title: "Чистая и вкусная вода", desc: "10 этапов фильтрации и минерализация для идеального вкуса" },
  { icon: Heart, title: "Полезно для здоровья", desc: "Можно пить без кипячения, оптимальный уровень минералов" },
  { icon: Recycle, title: "Экологичность", desc: "Используйте свою тару — сокращайте пластиковые отходы" },
  { icon: MapPin, title: "Удобное расположение", desc: "Водоматы рядом с вашим домом, в шаговой доступности" },
  { icon: CreditCard, title: "Доступная цена", desc: "Значительно дешевле бутилированной воды из магазина" },
  { icon: Clock, title: "Доступ 24/7", desc: "Покупайте свежую воду в любое время дня и ночи" },
];

const steps = [
  { num: "01", title: "Найдите водомат", desc: "Найдите ближайший водомат WODOMAT рядом с вашим домом" },
  { num: "02", title: "Возьмите тару", desc: "Используйте свою бутылку или ёмкость любого объёма" },
  { num: "03", title: "Наберите воду", desc: "Оплатите и наберите свежую, чистую питьевую воду" },
];

const ConsumersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <WaterBackground intensity="medium">
      <section id="consumers" className="section-padding" ref={ref}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-4">
              Для потребителей
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
              Свежая вода — <span className="text-gradient-water">просто и удобно</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Здоровая, свежая и доступная вода прямо рядом с вашим домом
            </p>
          </motion.div>

          {/* How it works */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl water-gradient-bg flex items-center justify-center"
                >
                  <span className="font-heading font-bold text-2xl text-primary-foreground">{step.num}</span>
                </motion.div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Advantages grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card-hover p-6 group cursor-default"
              >
                <adv.icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </WaterBackground>
  );
};

export default ConsumersSection;
