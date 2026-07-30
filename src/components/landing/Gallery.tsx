import { motion } from "framer-motion";

import { openLeadForm } from "@/components/LeadFormDialog";
import obj1 from "@/assets/object-1.jpg";
import obj2 from "@/assets/object-2.jpg";
import obj3 from "@/assets/object-3.jpg";
import obj4 from "@/assets/object-4.jpg";

const images = [
  { src: obj1, alt: "Водомат ВОДОМАТ на объекте" },
  { src: obj2, alt: "Водомат ВОДОМАТ на объекте" },
  { src: obj3, alt: "Водомат ВОДОМАТ на объекте" },
  { src: obj4, alt: "Водомат ВОДОМАТ на объекте" },
];

const Gallery = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Реальные <span className="text-gradient-water">объекты</span>
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden aspect-square group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
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

export default Gallery;
