import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { openLeadForm } from "@/components/LeadFormDialog";

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
            Аренда
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Аренда водоматов для <span className="text-gradient-water">организаций и предприятий</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Предоставляем водоматы для организаций и предприятий в долгосрочную аренду. Производим полное сервисное обслуживание водоматов на весь период аренды.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
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
