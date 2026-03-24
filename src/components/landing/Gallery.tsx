import { motion } from "framer-motion";
import heroVending from "@/assets/hero-vending.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import WaterBackground from "../WaterBackground";

const images = [
  { src: heroVending, alt: "Водомат WODOMAT в работе" },
  { src: heroBg, alt: "Объект WODOMAT" },
  { src: heroVending, alt: "Сервисное обслуживание" },
  { src: heroBg, alt: "Склад комплектующих WODOMAT" },
];

const Gallery = () => (
  <WaterBackground intensity="light">
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
      </div>
    </section>
  </WaterBackground>
);

export default Gallery;
