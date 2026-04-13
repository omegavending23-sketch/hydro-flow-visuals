import { motion } from "framer-motion";
import { Calendar, MapPin, Wrench, Package, ShieldCheck, FileText } from "lucide-react";

const stats = [
  { icon: Calendar, value: "С 2018", label: "года на рынке" },
  { icon: MapPin, value: "160+", label: "водоматов — крупнейшая сеть в Беларуси" },
  { icon: Wrench, value: "6", label: "областных городов с сервисом и складами" },
  { icon: Package, value: "100%", label: "комплектующих в наличии" },
  { icon: ShieldCheck, value: "СанПиН", label: "сертифицированное оборудование" },
  { icon: FileText, value: "Полный", label: "пакет документов строгой отчётности" },
];

const TrustNumbers = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Доверие в <span className="text-gradient-water">цифрах</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 md:p-8 text-center group"
          >
            <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
              {s.value}
            </div>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustNumbers;
