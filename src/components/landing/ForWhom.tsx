import { motion } from "framer-motion";
import { Rocket, Store, PiggyBank, Building2, Lightbulb } from "lucide-react";

const segments = [
  { icon: Rocket, title: "Начинающие предприниматели", desc: "Ищете первый бизнес с прозрачной экономикой и быстрым стартом." },
  { icon: Store, title: "Владельцы малого бизнеса", desc: "Хотите добавить стабильный источник пассивного дохода." },
  { icon: PiggyBank, title: "Инвесторы", desc: "Ищете окупаемый проект с понятной моделью и минимальным управлением." },
  { icon: Building2, title: "Компании на масштабировании", desc: "Хотите расширить розничный формат или запустить сеть в регионе." },
  { icon: Lightbulb, title: "Те, кто ищет готовую модель", desc: "Не просто оборудование, а проверенную бизнес-систему с поддержкой." },
];

const ForWhom = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Для кого <span className="text-gradient-water">подходит</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-6 flex flex-col items-start group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhom;
