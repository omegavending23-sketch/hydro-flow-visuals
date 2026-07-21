import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, TrendingUp, Headphones, BookOpen, Scale, Calculator } from "lucide-react";
import { openLeadForm } from "@/components/LeadFormDialog";

const benefits = [
  { icon: TrendingUp, title: "Быстрая окупаемость", desc: "Возврат инвестиций уже через 17-18 месяцев" },
  { icon: Headphones, title: "Техническая поддержка", desc: "Оперативное реагирование 5 дней в неделю, 365 дней в году" },
  { icon: Scale, title: "Юридическая поддержка", desc: "Готовые ответы для клиентов и государственных структур" },
  { icon: Calculator, title: "Бухгалтерский учёт", desc: "Консультации и помощь в ведении документов" },
  { icon: BookOpen, title: "Обучение и развитие", desc: "Доступ к обучающим материалам и опыту компании" },
  { icon: CheckCircle, title: "Надёжный сервис", desc: "Запас фильтров и комплектующих для минимального простоя" },
];

const RentalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rental" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 water-gradient-bg opacity-[0.03]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-4">
            Партнёрство
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Аренда и <span className="text-gradient-water">партнёрство</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Начните прибыльный бизнес с WODOMAT — мы обеспечиваем полную поддержку на каждом этапе
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 group cursor-default"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={() => openLeadForm()}
            className="relative overflow-hidden px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Обсудить условия</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalSection;
