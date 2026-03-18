import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaterBackground from "@/components/WaterBackground";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Thermometer, Wifi, Bot, Filter, ShieldCheck, Gauge,
  Volume2, Lock, Sparkles, Monitor, CreditCard, Package,
  GraduationCap, Globe
} from "lucide-react";
import wodomatX from "@/assets/wodomat-x.jpg";
import AdvantageCard, { AdvantageItem } from "@/components/wodomat-x/AdvantageCard";
import ComparisonTable from "@/components/wodomat-x/ComparisonTable";

const advantages: AdvantageItem[] = [
  {
    icon: Thermometer,
    number: 1,
    title: "Умная энергоэффективная система климат-контроля (до –40°C)",
    description: "Уникальная система обогрева нагревает ключевые элементы оборудования, а не воздух внутри корпуса.",
    details: ["Трубопроводы", "Фильтры", "Мембраны", "Насосный узел", "Камеру розлива"],
    benefits: ["Нет лишних энергозатрат", "Быстрый выход на рабочую температуру", "Стабильная работа зимой", "Продление срока службы оборудования", "Ремонт осуществляется легко, без специальных знаний и длительного времени"],
    accent: "Профессиональный точечный нагрев, а не обычный вентиляторный или печной обогрев",
    competitorNote: "Печной и вентиляторный обогрев — неэффективно, дорого в ремонте",
  },
  {
    icon: Wifi,
    number: 2,
    title: "Онлайн-телеметрия на базе 4G",
    description: "WODOMAT X оснащён современным 4G-модулем связи. Используется именно 4G, а не устаревший 2G.",
    details: ["Контроль продаж в реальном времени", "Мониторинг рабочих параметров", "Удалённая диагностика 24/7", "Быстрая и стабильная передача данных"],
    benefits: ["Полный контроль бизнеса из любой точки", "Минимизация выездов", "Современная цифровая инфраструктура"],
    competitorNote: "Устаревший 2G-модуль — медленный и нестабильный",
  },
  {
    icon: Bot,
    number: 3,
    title: "Интеллектуальный сервисный TG-БОТ",
    description: "Полноценная электронная сервисная книга аппарата. Бот заранее напоминает о замене расходников, поверке счётчиков, продлении договоров и важных контрольных датах.",
    details: ["Дата установки", "Замены фильтров", "Плановое обслуживание", "Ремонты и фотоотчёты", "Инкассации"],
    benefits: ["Полный порядок в бизнесе", "Ничего не забывается", "Идеально для масштабирования сети", "Прозрачная история эксплуатации"],
    accent: "Структурированная цифровая история повышает доверие покупателя и стоимость актива",
    competitorNote: "Сервисный TG-БОТ отсутствует",
  },
  {
    icon: Filter,
    number: 4,
    title: "12-ступенчатая система очистки",
    description: "Очистка реализована в 4 технологических блоках — глубже и надёжнее стандартных решений рынка.",
    details: ["Механическая предфильтрация", "Молекулярная очистка (RO)", "Минерализация, структурирование, насыщение", "Микробиологическая защита"],
    competitorNote: "Максимум 10 ступеней очистки",
  },
  {
    icon: ShieldCheck,
    number: 5,
    title: "Двойное озонирование 2O₃",
    description: "Максимальная санитарная безопасность и дополнительное доверие покупателей.",
    details: ["Озонирование воды", "Озонирование тары клиента"],
    competitorNote: "Одиночное озонирование — только тара клиента",
  },
  {
    icon: Gauge,
    number: 6,
    title: "Высокая производительность",
    description: "Стабильная работа даже при высокой нагрузке.",
    details: ["Мембраны 1600 GPD", "До 3 литров в минуту", "Бак 140 литров из пищевой нержавеющей стали"],
  },
  {
    icon: Volume2,
    number: 7,
    title: "Тихая и надёжная насосная часть",
    description: "Комфортная работа во дворах жилых домов.",
    details: ["Низкий уровень шума", "Стабильное давление", "Повышенный ресурс", "Надёжность при постоянной эксплуатации"],
  },
  {
    icon: Lock,
    number: 8,
    title: "Усиленная антивандальная конструкция",
    description: "Максимальная защита оборудования.",
    details: ["Металл корпуса 1 мм", "Трёхслойное покрытие", "Два замка"],
  },
  {
    icon: Sparkles,
    number: 9,
    title: "Премиальный дизайн, который продаёт",
    description: "Аппарат заметен и привлекателен в любое время суток.",
    details: ["Боковые неоновые фризы (в базовой комплектации)", "LED-подсветка", "Удалённое управление подсветкой", "Удлинённый козырёк от осадков"],
    competitorNote: "Светящиеся фризы — за дополнительную плату. Козырёк от осадков за дополнительную плату",
  },
  {
    icon: Monitor,
    number: 10,
    title: 'ЖКИ-дисплей 21,5"',
    description: "Интуитивный интерфейс с возможностью рекламы и дополнительного дохода.",
    details: ["Готовые рекламные ролики", "Обновляемый контент", "Инструкции для пользователей"],
    accent: "Все видеоролики и материалы для дисплея предоставляются бесплатно",
    competitorNote: 'ЖКИ-дисплей 21,5" отсутствует',
  },
  {
    icon: CreditCard,
    number: 11,
    title: "Полный спектр оплат и система лояльности",
    description: "Удобство для B2C и B2B-сегмента.",
    details: ["Монеты", "Банковский терминал", "QR-код", "Скидочные % карты (в базовой комплектации)"],
    benefits: ["Удалённое пополнение карт", "Индивидуальная настройка скидки", "Формирование постоянной базы клиентов", "Удобство для юридических лиц"],
    competitorNote: "Система лояльности отсутствует. Подготовка оборудования для установки банковского терминала — за дополнительную плату",
  },
  {
    icon: Package,
    number: 12,
    title: "Полочка из нержавеющей стали",
    description: "В базовой комплектации.",
    details: [],
    competitorNote: "Полочка — за дополнительную плату",
  },
  {
    icon: GraduationCap,
    number: 13,
    title: "Поддержка и развитие партнёров",
    description: "Вы не остаётесь один на один с бизнесом.",
    details: ["Онлайн-школа аква-вендора", "Юридические шаблоны и договоры", "Инструкции и регламенты", "Постоянная техническая поддержка"],
  },
  {
    icon: Globe,
    number: 14,
    title: "Универсальность эксплуатации",
    description: "Работа в любых условиях.",
    details: ["Температурный режим –40…+40°C", "Для улицы и помещений", "Наземная установка", "Регулируемые ножки и колёса"],
  },
];

const ecosystemItems = [
  "Технология", "Контроль", "Сервисная дисциплина", "Поддержка",
  "Прозрачность бизнеса", "Инвестиционная привлекательность", "Готовая экосистема для роста"
];

const WodomatXPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const ecoRef = useRef(null);
  const ecoInView = useInView(ecoRef, { once: true, margin: "-80px" });
  const navigate = useNavigate();

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
                <div className="w-full lg:w-5/12 flex justify-center">
                  <motion.img
                    src={wodomatX}
                    alt="WODOMAT X"
                    className="h-[350px] md:h-[480px] object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>

                <div className="w-full lg:w-7/12 text-center lg:text-left">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-4">
                    Каталог
                  </span>
                  <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                    <span className="text-gradient-water">WODOMAT X</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl">
                    Премиальный интеллектуальный водомат для стабильного и масштабируемого бизнеса вашей собственной сети
                  </p>
                  <p className="text-muted-foreground mb-8 max-w-xl">
                    Комплексная система: технология, цифровой контроль, сервисная дисциплина и поддержка партнёров.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Высота", value: "200 см" },
                      { label: "Глубина", value: "85 см" },
                      { label: "Ширина", value: "85 см" },
                      { label: "Вес", value: "180 кг" },
                    ].map((s) => (
                      <div key={s.label} className="glass-card p-3 text-center rounded-xl">
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                        <p className="font-heading font-bold text-foreground text-lg">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                    10 500 руб.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </WaterBackground>

        {/* Advantages */}
        <WaterBackground intensity="light">
          <section className="section-padding">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
                  Преимущества <span className="text-gradient-water">WODOMAT X</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  14 причин выбрать именно этот водомат для вашего бизнеса
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

        {/* Comparison Table */}
        <WaterBackground intensity="medium">
          <ComparisonTable />
        </WaterBackground>

        {/* Ecosystem */}
        <WaterBackground intensity="light">
          <section className="section-padding" ref={ecoRef}>
            <div className="container mx-auto text-center max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ecoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
                  <span className="text-gradient-water">WODOMAT X</span> — это
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
                    onClick={() => navigate("/contacts")}
                    className="relative overflow-hidden px-12 py-4 rounded-xl font-heading text-lg font-bold bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <span className="relative z-10">ЗАКАЗАТЬ WODOMAT X</span>
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

export default WodomatXPage;
