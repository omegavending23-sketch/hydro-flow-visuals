import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaterBackground from "@/components/WaterBackground";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Filter, ShieldCheck, Sparkles, Gauge, Volume2, Lock,
  Droplets, Zap, Wrench, Building2, Clock, Award,
} from "lucide-react";
import p1 from "@/assets/purifier-1.png";
import p2 from "@/assets/purifier-2.png";
import p3 from "@/assets/purifier-3.png";
import AdvantageCard, { AdvantageItem } from "@/components/wodomat-x/AdvantageCard";
import { openLeadForm } from "@/components/LeadFormDialog";
import { usePageMeta } from "@/hooks/usePageMeta";

const gallery = [p1, p2, p3];

const advantages: AdvantageItem[] = [
  {
    icon: Filter,
    number: 1,
    title: "Многоступенчатая система очистки (10 ступеней)",
    description: "Глубокая очистка воды из системы централизованного питьевого водоснабжения.",
    details: ["Механическая предфильтрация", "Молекулярная очистка", "Минерализация", "Финишная доочистка"],
  },
  {
    icon: ShieldCheck,
    number: 2,
    title: "Встроенная УФ-стерилизация воды",
    description: "Дополнительный барьер микробиологической безопасности на выходе.",
    details: ["Обеззараживание воды перед розливом", "Работа в автоматическом режиме"],
  },
  {
    icon: Droplets,
    number: 3,
    title: "Озоновая стерилизация тары",
    description: "Многоразовая тара обрабатывается озоном перед наполнением.",
    details: ["Санитарная безопасность", "Доверие пользователей"],
  },
  {
    icon: Lock,
    number: 4,
    title: "Антивандальный корпус из высокопрочной стали",
    description: "Надёжная конструкция для эксплуатации в общественных местах.",
    details: ["Высокопрочная сталь", "Защищённая камера розлива", "Долгий срок службы"],
  },
  {
    icon: Sparkles,
    number: 5,
    title: "Современный дизайн с премиальной неоновой подсветкой",
    description: "Элегантный корпус с декоративным фризом из чёрного оргстекла и эффектной неоновой подсветкой.",
    details: ["Привлекает внимание пользователей", "Вписывается в коммерческие пространства", "Подходит для государственных учреждений"],
  },
  {
    icon: ShieldCheck,
    number: 6,
    title: "Система защиты от протечек воды",
    description: "Автоматический контроль исключает аварийные ситуации в помещении.",
    details: ["Датчики протечки", "Автоматическое отключение при отсутствии воды"],
  },
  {
    icon: Gauge,
    number: 7,
    title: "Производительность и запас воды",
    description: "Стабильная подача воды даже при высокой проходимости.",
    details: ["Запас очищенной воды — 80 литров", "Производительность — 60 л/час", "Опционально до 190 л/час"],
  },
  {
    icon: Volume2,
    number: 8,
    title: "Бесшумный подающий насос",
    description: "Комфортная эксплуатация в офисах, холлах и общественных зонах.",
    details: ["Низкий уровень шума", "Стабильное давление"],
  },
  {
    icon: Package(),
    number: 9,
    title: "Розлив тары от 0,2 до 19 литров",
    description: "От стаканчика до 19-литровой бутыли.",
    details: ["Удобство для сотрудников и посетителей", "Универсальность применения"],
  },
  {
    icon: Zap,
    number: 10,
    title: "Низкие эксплуатационные расходы",
    description: "Электропитание 220 В, 50 Гц. Экономичная работа в режиме 24/7.",
    details: ["Непрерывная работа 24/7", "Минимальное обслуживание"],
  },
  {
    icon: Award,
    number: 11,
    title: "Сертифицированное оборудование",
    description: "Гарантия на оборудование — 12 месяцев.",
    details: ["Гарантийное обслуживание при обращении", "Собственная сервисная служба"],
  },
  {
    icon: Wrench,
    number: 12,
    title: "Простое подключение и аренда",
    description: "Подключение к ХВС без резок и сварок — через тройник на существующий отвод с установкой поверенного счётчика.",
    details: ["Монтаж силами нашей организации", "Полное сервисное обслуживание", "Возможна установка в аренду с ежемесячной оплатой"],
    accent: "Можно установить в аренду без покупки оборудования",
  },
];

const useCases = [
  "государственные учреждения и административные здания",
  "заводы и производственные предприятия",
  "фабрики и промышленные комплексы",
  "санатории, пансионаты и оздоровительные центры",
  "гостиницы и общежития",
  "бизнес-центры и офисы",
  "торговые центры и супермаркеты",
  "жилые комплексы и многоквартирные дома",
  "учебные заведения",
  "медицинские учреждения",
  "спортивные объекты",
  "объекты транспортной инфраструктуры",
];

const ecosystemItems = [
  "Передовые технологии водоочистки", "Стильный дизайн", "Высокая надёжность",
  "Работа 24/365", "Сервис и монтаж", "Аренда без покупки",
];

function Package() {
  return Building2;
}

const PurifierPage = () => {
  usePageMeta(
    "ПУРИФАЙЕР ВОДОМАТ — водомат для организаций и предприятий",
    "Пурифайер от ВОДОМАТ: 10 ступеней очистки, УФ-стерилизация, озонирование тары, работа 24/365. Цена 7 150 руб. Продажа и аренда в Минске."
  );
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const ecoRef = useRef(null);
  const ecoInView = useInView(ecoRef, { once: true, margin: "-80px" });
  const [activeImage, setActiveImage] = useState(gallery[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero */}
        <WaterBackground intensity="light">
          <section className="py-14 md:py-20 px-4 md:px-8" ref={heroRef}>
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              >
                <div className="w-full lg:w-5/12 flex justify-center gap-4">
                  <div className="flex flex-col gap-3">
                    {gallery.map((src) => (
                      <button
                        key={src}
                        onClick={() => setActiveImage(src)}
                        className={`w-16 h-20 md:w-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all bg-white/40 ${activeImage === src ? "border-primary shadow-md" : "border-transparent hover:border-primary/40"}`}
                      >
                        <img src={src} alt="модель Пурифайер от ВОДОМАТ" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt="модель Пурифайер от ВОДОМАТ"
                    className="h-[350px] md:h-[480px] object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="w-full lg:w-7/12 text-center lg:text-left">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-4">
                    Каталог
                  </span>
                  <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                    <span className="text-gradient-water">ПУРИФАЙЕР</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl">
                    Водомат для организаций и предприятий
                  </p>
                  <p className="text-muted-foreground mb-8 max-w-xl">
                    Пурифайер от WODOMAT — это сочетание передовых технологий водоочистки, стильного дизайна и высокой надёжности. Водомат разработан для обеспечения постоянного доступа к качественной питьевой воде для организаций и предприятий и предназначен для круглогодичного использования 24/365.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Высота", value: "190 см" },
                      { label: "Глубина", value: "65 см" },
                      { label: "Ширина", value: "65 см" },
                      { label: "Вес", value: "60 кг" },
                    ].map((s) => (
                      <div key={s.label} className="glass-card p-3 text-center rounded-xl">
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                        <p className="font-heading font-bold text-foreground text-lg">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                    7 150 руб.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </WaterBackground>

        {/* Advantages */}
        <WaterBackground intensity="light">
          <section className="py-14 md:py-20 px-4 md:px-8">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
                  Преимущества <span className="text-gradient-water">ПУРИФАЙЕРА</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Технические характеристики и возможности оборудования
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {advantages.map((item, i) => (
                  <AdvantageCard key={item.number} item={item} index={i} />
                ))}
              </div>
            </div>
          </section>
        </WaterBackground>

        {/* Use cases */}
        <WaterBackground intensity="medium">
          <section className="py-14 md:py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Оборудование идеально подходит для
                </h2>
                <p className="text-muted-foreground mb-10">
                  Любые места, где требуется круглосуточный доступ к качественной питьевой воде — 24 часа в сутки, 7 дней в неделю, 365 дней в году
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-left">
                  {useCases.map((c) => (
                    <div key={c} className="glass-card p-4 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/85">{c}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </WaterBackground>

        {/* Ecosystem + Order Button */}
        <WaterBackground intensity="light">
          <section className="py-14 md:py-20 px-4 md:px-8" ref={ecoRef}>
            <div className="container mx-auto text-center max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ecoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
                  <span className="text-gradient-water">ПУРИФАЙЕР</span> — это
                </h2>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {ecosystemItems.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={ecoInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="px-5 py-2.5 rounded-full glass-card font-heading font-semibold text-sm text-foreground"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={ecoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <button
                    onClick={() => openLeadForm()}
                    className="relative overflow-hidden px-12 py-4 rounded-xl font-heading text-lg font-bold bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <span className="relative z-10">ЗАКАЗАТЬ ПУРИФАЙЕР</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </WaterBackground>
      </div>
      <Footer />
    </div>
  );
};

export default PurifierPage;
