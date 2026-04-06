import { motion } from "framer-motion";
import { Beaker, TrendingUp, HeadphonesIcon, Handshake } from "lucide-react";

const cards = [
  {
    icon: Beaker,
    title: "Практика, а не теория",
    text: "Мы не перепродаём оборудование — мы сами используем его в своём бизнесе каждый день.",
  },
  {
    icon: TrendingUp,
    title: "Понимаем экономику",
    text: "Мы знаем реальные цифры, риски и операционные процессы аква-вендинга изнутри.",
  },
  {
    icon: HeadphonesIcon,
    title: "Поддержка после продажи",
    text: "Не бросаем клиента — обеспечиваем техническое сопровождение и оперативный сервис.",
  },
  {
    icon: Handshake,
    title: "Партнёрская модель",
    text: "Наш интерес совпадает с вашим — чтобы оборудование работало стабильно и приносило прибыль.",
  },
];

const WhySafe = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-4"
      >
        Почему с нами <span className="text-gradient-water">безопасно</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-14"
      >
        Мы находимся с предпринимателями в «одной лодке» и вместе строим этот бизнес.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 flex flex-col items-start group"
          >
            <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <c.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySafe;
