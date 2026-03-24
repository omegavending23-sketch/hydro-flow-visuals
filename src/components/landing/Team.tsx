import { motion } from "framer-motion";
import { Wrench, Headphones, BarChart3, Users } from "lucide-react";
import WaterBackground from "../WaterBackground";

const members = [
  { icon: Wrench, role: "Сервисные инженеры", desc: "Ежедневно работают с оборудованием и знают его в мельчайших деталях." },
  { icon: Headphones, role: "Техническая поддержка", desc: "Оперативно решают вопросы партнёров в каждом регионе." },
  { icon: BarChart3, role: "Бизнес-аналитики", desc: "Понимают экономику аква-вендинга и помогают масштабироваться." },
  { icon: Users, role: "Команда на объектах", desc: "Монтаж, запуск и обслуживание водоматов по всей Беларуси." },
];

const Team = () => (
  <WaterBackground intensity="medium">
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-4"
        >
          Наша команда знает бизнес <span className="text-gradient-water">изнутри</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-14"
        >
          Наши специалисты понимают оборудование не только технически, но и как бизнес-инструмент.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-xl water-gradient-bg flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <m.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{m.role}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </WaterBackground>
);

export default Team;
