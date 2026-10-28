// PROMO 11.11 — временная акция (28.10–11.11.2026). Откат: "откатить изменения к 11.11"
import { motion } from "framer-motion";
import promoImg from "@/assets/promo-1111.png";
import { openLeadForm } from "@/components/LeadFormDialog";

export const PROMO_1111_PRICES = {
  x: { old: "11 450 руб.", promo: "10 950 руб." },
  s: { old: "10 450 руб.", promo: "9 950 руб." },
};

export const PromoPrice = ({ old, promo, className = "" }: { old: string; promo: string; className?: string }) => (
  <span className={`inline-flex flex-wrap items-baseline justify-center gap-x-3 ${className}`}>
    <s className="text-muted-foreground text-[0.7em] font-semibold">{old}</s>
    <span className="text-gradient-water">{promo}</span>
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary self-center">Акция 11.11</span>
  </span>
);

const lines = [
  "🎁 Заказывайте водомат и получайте дополнительную скидку 500 рублей!",
  "А самое приятное — ждать поставку не придётся! 🚚",
];
const checks = [
  "Водоматы уже в наличии на складе в Минске.",
  "Дополнительная скидка 500 рублей при заказе.",
  "Не нужно ждать — можно оформить заказ уже сейчас!",
];

const Promo1111 = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-6 md:p-10 grid md:grid-cols-[2fr_3fr] gap-8 items-center"
      >
        <img src={promoImg} alt="Акция 11.11 ВОДОМАТ" className="w-full max-w-sm mx-auto rounded-2xl object-contain" />
        <div className="space-y-4 text-foreground">
          <h2 className="font-heading font-bold text-2xl md:text-4xl">
            АКЦИЯ 11.11 — <span className="text-gradient-water">ЗАБИРАЙТЕ ВОДОМАТ ВЫГОДНЕЕ!</span>
          </h2>
          <p className="text-muted-foreground">Ищете повод купить водомат? Вот он! 😉 Специально к распродаже 11.11 мы подготовили для вас приятный бонус.</p>
          {lines.map((l) => <p key={l} className="font-semibold">{l}</p>)}
          <ul className="space-y-1">{checks.map((c) => <li key={c}>✅ {c}</li>)}</ul>
          <p className="font-semibold">📅 Акция действует с 28 октября по 11 ноября 2026 года включительно.</p>
          <p className="text-muted-foreground">Не откладывайте покупку на потом — воспользуйтесь специальным предложением и сэкономьте 500 рублей! 💰</p>
          <p className="text-muted-foreground">📩 Пишите нам в сообщения или звоните прямо сейчас — поможем выбрать водомат и расскажем, как воспользоваться скидкой!</p>
          <p className="font-semibold">💧 Ваш водомат уже ждёт вас на складе в Минске!</p>
          <button onClick={() => openLeadForm()} className="px-8 py-3 rounded-xl font-heading font-semibold bg-primary text-primary-foreground transition-all hover:shadow-lg hover:scale-105">
            Воспользоваться скидкой
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Promo1111;
