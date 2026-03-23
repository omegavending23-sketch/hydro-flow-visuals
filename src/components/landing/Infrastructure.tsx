import { motion } from "framer-motion";
import { Clock, Package, Wrench, ShieldCheck } from "lucide-react";
import belarusMap from "@/assets/belarus-map.png";

const advantages = [
  { icon: Wrench, text: "Сервисная поддержка в каждом областном городе" },
  { icon: Package, text: "Комплектующие всегда в наличии на складах" },
  { icon: Clock, text: "Оперативное решение любых технических вопросов без простоев" },
  { icon: ShieldCheck, text: "Сертифицированное оборудование, соответствующее СанПиН" },
];

const Infrastructure = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Инфраструктура и <span className="text-primary">сервис</span>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={belarusMap}
            alt="Карта сервисных точек WODOMAT в Беларуси"
            className="max-w-sm w-full"
          />
        </motion.div>

        {/* Cards */}
        <div className="space-y-5">
          {advantages.map((a, i) => (
            <motion.div
              key={a.text}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-body leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Infrastructure;
