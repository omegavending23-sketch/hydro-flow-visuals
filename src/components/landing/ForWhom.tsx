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
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Для кого <span className="text-primary">подходит</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-6 flex flex-col items-start"
          >
            <s.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhom;
