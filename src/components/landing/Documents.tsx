import { motion } from "framer-motion";
import { FileCheck, FileText, ClipboardCheck, BookOpen } from "lucide-react";

const docs = [
  { icon: FileCheck, text: "Сертификаты соответствия требованиям СанПиН" },
  { icon: FileText, text: "Полный пакет отгрузочных документов строгой отчётности" },
  { icon: ClipboardCheck, text: "Документы для корректной работы вашей бухгалтерии" },
  { icon: BookOpen, text: "Техническая документация и руководства по эксплуатации" },
];

const Documents = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-4"
      >
        Документы и <span className="text-gradient-water">соответствие</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
      >
        Всё подготовлено для корректной работы бухгалтерии и соблюдения требований законодательства.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6">
        {docs.map((d, i) => (
          <motion.div
            key={d.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 glass-card group"
          >
            <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <d.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-foreground text-sm leading-relaxed">{d.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Documents;
