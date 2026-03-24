import { motion } from "framer-motion";
import rsppLogo from "@/assets/rspp-logo.png";

const RSPP = () => (
  <section className="py-12 px-4 bg-background">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left group"
      >
        <motion.img
          src={rsppLogo}
          alt="РСПП Беларуси"
          className="w-20 h-20 object-contain shrink-0 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            Член Республиканского союза промышленников и предпринимателей
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Мы являемся действующими членами Республиканского союза промышленников и предпринимателей (РСПП), что позволяет нам глубоко понимать реальные процессы предпринимательской среды, требования законодательства и особенности ведения бизнеса в стране.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default RSPP;
