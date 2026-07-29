import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { openLeadForm } from "@/components/LeadFormDialog";
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
      >
        <a
          href="https://t.me/AlivewaterByBot?start=66041a6bf5013bc4e20fff50"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 text-center"
        >
          <span className="relative z-10">Получить бизнес-план в телеграм</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
        </a>
        <button
          type="button"
          onClick={() => openLeadForm()}
          className="relative overflow-hidden px-8 py-4 rounded-2xl font-heading font-semibold text-lg border-2 border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm text-center"
        >
          <span className="relative z-10">Получить бизнес-план на e-mail</span>
        </button>
      </motion.div>
    </div>
  </section>
);

export default Documents;
