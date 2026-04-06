import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MapPin, Truck, GraduationCap, Settings } from "lucide-react";

const steps = [
  { icon: Search, title: "Подбор модели и формата", desc: "Анализируем задачи и подбираем оптимальное оборудование." },
  { icon: MapPin, title: "Анализ локации", desc: "Помогаем выбрать место с высоким трафиком и спросом." },
  { icon: Truck, title: "Поставка и подключение", desc: "Доставляем, монтируем и подключаем оборудование." },
  { icon: GraduationCap, title: "Запуск и обучение", desc: "Обучаем работе с оборудованием и системой мониторинга." },
  { icon: Settings, title: "Сервис и масштабирование", desc: "Обслуживание, запчасти и помощь в расширении сети." },
];

const ClientJourney = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Как мы <span className="text-gradient-water">сопровождаем</span> клиента
      </motion.h2>

      {/* Desktop timeline */}
      <div className="hidden md:flex items-start justify-between relative mb-14">
        <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative flex flex-col items-center text-center w-1/5 px-2 group"
          >
            <div className="w-16 h-16 rounded-full water-gradient-bg border-4 border-background flex items-center justify-center z-10 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xs text-primary mb-1">Шаг {i + 1}</span>
            <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile list */}
      <div className="md:hidden space-y-6 mb-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 items-start group"
          >
            <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-heading font-bold text-xs text-primary">Шаг {i + 1}</span>
              <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/contacts"
          className="relative overflow-hidden inline-block px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Обсудить запуск</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
        </Link>
      </div>
    </div>
  </section>
);

export default ClientJourney;
