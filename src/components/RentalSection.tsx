import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet, Wrench, ShieldCheck, TrendingUp, Clock, FileCheck,
  Droplets, Sparkles, Building2, Truck, Recycle, HeartPulse,
} from "lucide-react";
import WaterBackground from "@/components/WaterBackground";
import { openLeadForm } from "@/components/LeadFormDialog";
import p1 from "@/assets/purifier-1.png";
import p21 from "@/assets/purifier2-1.png";

const CtaButton = ({ label = "Обсудить условия аренды" }: { label?: string }) => (
  <div className="text-center">
    <button
      type="button"
      onClick={() => openLeadForm()}
      className="relative overflow-hidden px-8 md:px-12 py-4 rounded-2xl font-heading font-bold text-base md:text-lg bg-primary text-primary-foreground transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
    </button>
  </div>
);

const benefits = [
  {
    icon: Wallet,
    title: "Без крупных вложений",
    text: "Не нужно выводить деньги из оборота и покупать оборудование за 7 150–9 450 руб. Аренда — фиксированный платёж от 390 руб. в месяц.",
  },
  {
    icon: Wrench,
    title: "Сервис включён в платёж",
    text: "Замена фильтров, санобработка, ремонт и выезд инженера — за наш счёт на весь срок аренды.",
  },
  {
    icon: ShieldCheck,
    title: "Нет рисков поломок",
    text: "Оборудование остаётся нашим: любая неисправность устраняется без дополнительных счетов для вас.",
  },
  {
    icon: FileCheck,
    title: "Простой учёт",
    text: "Аренда — текущие расходы, а не основное средство. Не нужно ставить на баланс и амортизировать.",
  },
  {
    icon: TrendingUp,
    title: "Гибкость и масштабирование",
    text: "Нужно больше точек — добавляем водоматы. Изменились задачи — меняем модель на Пурифайер 2 с газированной водой.",
  },
  {
    icon: Clock,
    title: "Быстрый старт",
    text: "Монтаж и подключение к ХВС без резок и сварок. Вода в офисе появляется в день установки.",
  },
];

const machines = [
  {
    name: "ПУРИФАЙЕР",
    href: "/purifier",
    img: p1,
    alt: "модель Пурифайер от ВОДОМАТ",
    price: "от 390 руб./мес.",
    buy: "Покупка — 7 150 руб.",
    tagline: "Водомат для организаций и предприятий",
    text: "Сочетание передовых технологий водоочистки, стильного дизайна и высокой надёжности. Круглогодичная работа 24/365.",
    specs: [
      { label: "Высота", value: "190 см" },
      { label: "Глубина", value: "65 см" },
      { label: "Ширина", value: "65 см" },
      { label: "Вес", value: "60 кг" },
    ],
    features: [
      "10 ступеней очистки воды",
      "УФ-стерилизация воды и озоновая обработка тары",
      "Запас воды 80 литров, производительность 60 л/час",
      "Антивандальный корпус из высокопрочной стали",
      "Розлив тары от 0,2 до 19 литров",
      "Бесшумный насос и защита от протечек",
    ],
  },
  {
    name: "ПУРИФАЙЕР 2",
    href: "/purifier-2",
    img: p21,
    alt: "модель Пурифайер 2 от ВОДОМАТ",
    price: "от 590 руб./мес.",
    buy: "Покупка — 9 450 руб.",
    tagline: "Премиум-водомат с питьевой и газированной водой",
    text: "Водомат премиум-класса: питьевая и газированная вода в одном аппарате. Идеален для бизнес-центров, гостиниц и производств.",
    specs: [
      { label: "Высота", value: "200 см" },
      { label: "Глубина", value: "80 см" },
      { label: "Ширина", value: "95 см" },
      { label: "Вес", value: "100 кг" },
    ],
    features: [
      "10 ступеней очистки + газированная вода",
      "Баллон на 10 литров — до 1000 литров газировки",
      "УФ-стерилизация воды и озоновая обработка тары",
      "Запас воды 100 литров, производительность 60 л/час",
      "Премиальная неоновая подсветка корпуса",
      "Розлив тары от 0,2 до 19 литров",
    ],
  },
];

const included = [
  { icon: Truck, title: "Доставка и монтаж", text: "Привозим, подключаем к ХВС и запускаем оборудование." },
  { icon: Recycle, title: "Замена фильтров", text: "Плановая замена расходников по регламенту — включена в аренду." },
  { icon: HeartPulse, title: "Санобработка", text: "Регулярная дезинфекция контура и камеры розлива." },
  { icon: Wrench, title: "Ремонт и запчасти", text: "Устраняем неисправности без доплат за работу и детали." },
  { icon: Droplets, title: "Контроль качества", text: "Следим за качеством воды и стабильностью работы аппарата." },
  { icon: Sparkles, title: "Замена оборудования", text: "При необходимости меняем аппарат на аналогичный или другую модель." },
];

const steps = [
  { n: 1, title: "Заявка", text: "Оставляете заявку — уточняем задачи, количество сотрудников и точки установки." },
  { n: 2, title: "Подбор модели", text: "Предлагаем Пурифайер или Пурифайер 2 и рассчитываем ежемесячный платёж." },
  { n: 3, title: "Договор", text: "Заключаем договор аренды с фиксированной стоимостью и сервисом." },
  { n: 4, title: "Монтаж и запуск", text: "Устанавливаем, подключаем и обучаем сотрудников — вода готова к розливу." },
];

const useCases = [
  "государственные учреждения", "заводы и производства", "бизнес-центры и офисы",
  "гостиницы и общежития", "торговые центры", "санатории и пансионаты",
  "учебные заведения", "медицинские учреждения", "спортивные объекты",
];

const RentalSection = () => {
  return (
    <>
      {/* HERO */}
      <WaterBackground intensity="medium">
        <section className="py-16 md:py-28 px-4 md:px-8">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-5">
                Аренда водоматов
              </span>
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Аренда водоматов для <span className="text-gradient-water">организаций и предприятий</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10">
                Предоставляем водоматы для организаций и предприятий в долгосрочную аренду. Производим полное сервисное обслуживание водоматов на весь период аренды.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                {[
                  { v: "от 390 руб./мес.", l: "Пурифайер" },
                  { v: "от 590 руб./мес.", l: "Пурифайер 2" },
                  { v: "0 руб.", l: "за сервис и ремонт" },
                ].map((s) => (
                  <div key={s.l} className="glass-card p-5 rounded-2xl">
                    <p className="font-heading font-bold text-xl md:text-2xl text-foreground">{s.v}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
              <CtaButton />
            </motion.div>
          </div>
        </section>
      </WaterBackground>

      {/* BENEFITS: аренда vs покупка */}
      <WaterBackground intensity="light">
        <section className="py-14 md:py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Почему <span className="text-gradient-water">аренда выгоднее покупки</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Вы платите за воду и сервис, а не за оборудование, склад и ремонт
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className="glass-card-hover p-6 rounded-2xl flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground break-words hyphens-auto">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </div>

            <CtaButton />
          </div>
        </section>
      </WaterBackground>

      {/* MODELS */}
      <WaterBackground intensity="medium">
        <section className="py-14 md:py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Две модели <span className="text-gradient-water">в аренду</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Подберём аппарат под проходимость объекта и задачи вашей компании
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {machines.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="glass-card-hover p-6 md:p-8 rounded-3xl flex flex-col"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <Link to={m.href} className="flex-shrink-0">
                      <img
                        src={m.img}
                        alt={m.alt}
                        className="h-56 md:h-64 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                    <div className="text-center sm:text-left min-w-0">
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2 break-words">
                        <span className="text-gradient-water">{m.name}</span>
                      </h3>
                      <p className="text-muted-foreground mb-3">{m.tagline}</p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{m.text}</p>
                      <p className="font-heading font-bold text-2xl md:text-3xl text-foreground">{m.price}</p>
                      <p className="text-xs text-muted-foreground mt-1">{m.buy}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 my-6">
                    {m.specs.map((s) => (
                      <div key={s.label} className="glass-card p-2.5 text-center rounded-xl">
                        <p className="text-[11px] text-muted-foreground">{s.label}</p>
                        <p className="font-heading font-bold text-foreground text-sm">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => openLeadForm()}
                      className="relative overflow-hidden flex-1 px-6 py-3.5 rounded-2xl font-heading font-bold bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      <span className="relative z-10">Обсудить условия аренды</span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
                    </button>
                    <Link
                      to={m.href}
                      className="px-6 py-3.5 rounded-2xl font-heading font-semibold border-2 border-primary/30 text-primary text-center transition-all duration-300 hover:bg-primary/10"
                    >
                      Подробнее
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <CtaButton />
          </div>
        </section>
      </WaterBackground>

      {/* WHAT'S INCLUDED */}
      <WaterBackground intensity="light">
        <section className="py-14 md:py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Что входит в <span className="text-gradient-water">ежемесячный платёж</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Полное сервисное обслуживание водоматов на весь период аренды
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
              {included.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="glass-card p-5 rounded-2xl flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <it.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-foreground mb-1 break-words">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">{it.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <CtaButton />
          </div>
        </section>
      </WaterBackground>

      {/* HOW IT WORKS */}
      <WaterBackground intensity="medium">
        <section className="py-14 md:py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 text-center"
            >
              Как начать <span className="text-gradient-water">аренду</span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="glass-card-hover p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-lg">
                    {s.n}
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 break-words">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </motion.div>
              ))}
            </div>

            <CtaButton />
          </div>
        </section>
      </WaterBackground>

      {/* USE CASES + FINAL CTA */}
      <WaterBackground intensity="light">
        <section className="py-14 md:py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Кому подходит <span className="text-gradient-water">аренда водоматов</span>
              </h2>
              <p className="text-muted-foreground mb-10">
                Любые объекты, где нужен круглосуточный доступ к свежей питьевой воде — 24/7/365
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {useCases.map((c) => (
                  <span key={c} className="px-5 py-2.5 rounded-full glass-card font-heading font-semibold text-sm text-foreground">
                    <Building2 className="w-4 h-4 text-primary inline mr-2 -mt-0.5" />
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-8">
                Рассчитаем ежемесячный платёж под ваш объект и количество сотрудников
              </p>
              <CtaButton label="Обсудить условия аренды" />
            </motion.div>
          </div>
        </section>
      </WaterBackground>
    </>
  );
};

export default RentalSection;
