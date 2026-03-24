import { motion } from "framer-motion";
import { Clock, Package, Wrench, ShieldCheck } from "lucide-react";
import belarusMap from "@/assets/belarus-map.png";
import WaterBackground from "../WaterBackground";

const advantages = [
  { icon: Wrench, text: "Сервисная поддержка в каждом областном городе" },
  { icon: Package, text: "Комплектующие всегда в наличии на складах" },
  { icon: Clock, text: "Оперативное решение любых технических вопросов без простоев" },
  { icon: ShieldCheck, text: "Сертифицированное оборудование, соответствующее СанПиН" },
];

const Infrastructure = () => (
  <WaterBackground intensity="medium">
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
        >
          Инфраструктура и <span className="text-gradient-water">сервис</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
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

          <div className="space-y-5">
            {advantages.map((a, i) => (
              <motion.div
                key={a.text}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <a.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-foreground font-body leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </WaterBackground>
);

export default Infrastructure;
