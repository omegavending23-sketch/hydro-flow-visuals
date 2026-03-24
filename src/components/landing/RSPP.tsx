import { motion } from "framer-motion";
import { Award } from "lucide-react";

const RSPP = () => (
  <section className="py-12 px-4 bg-background">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left group"
      >
        <div className="w-16 h-16 rounded-xl water-gradient-bg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <Award className="w-8 h-8 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            Член Республиканского союза промышленников и предпринимателей
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Членство в РСПП позволяет нам глубоко понимать реальные процессы предпринимательской
            среды, требования законодательства и особенности ведения бизнеса в Беларуси.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default RSPP;
