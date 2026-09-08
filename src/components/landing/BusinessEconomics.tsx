import { motion } from "framer-motion";

import img4 from "@/assets/4.png.asset.json";
import img5 from "@/assets/5.png.asset.json";
import img6 from "@/assets/6.png.asset.json";

const cards = [
  { src: img4.url, alt: "Экономика бизнеса ВОДОМАТ" },
  { src: img5.url, alt: "Экономика бизнеса ВОДОМАТ" },
  { src: img6.url, alt: "Экономика бизнеса ВОДОМАТ" },
];

const BusinessEconomics = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Экономика бизнеса{" "}
        <span className="text-gradient-water">ВОДОМАТ</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden glass-card-hover"
          >
            <img
              src={card.src}
              alt={card.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessEconomics;
