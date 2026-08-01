import { motion } from "framer-motion";

import { openLeadForm } from "@/components/LeadFormDialog";

const FinalCTA = () => (
  <section className="py-20 md:py-28 px-4 bg-water-deep text-primary-foreground">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6 break-words hyphens-auto"
      >
        Хотите запустить аква-вендинг или масштабировать действующий проект?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto"
      >
        Получите консультацию и разбор формата под вашу задачу.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          type="button"
          onClick={() => openLeadForm()}
          className="relative overflow-hidden px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Оставить заявку</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
        </button>
        <a
          href="https://t.me/AlivewaterByBot?start=66041a6bf5013bc4e20fff50"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
        >
          <span className="relative z-10">Бизнес-план в телеграм</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite_0.5s]" />
        </a>
        <button
          type="button"
          onClick={() => openLeadForm()}
          className="px-8 py-4 rounded-2xl font-heading font-semibold text-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
        >
          Бизнес-план на e-mail
        </button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
