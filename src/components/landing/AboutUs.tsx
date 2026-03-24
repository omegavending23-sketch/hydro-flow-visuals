import { motion } from "framer-motion";
import WaterBackground from "../WaterBackground";
import logoWodomat from "@/assets/logo-wodomat.jpg";

const AboutUs = () => (
  <WaterBackground intensity="light">
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
        >
          О <span className="text-gradient-water">нас</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-foreground leading-relaxed">
              Мы являемся владельцами самой большой сети аква-вендинговых водоматов в Республике Беларусь с 2018 года, поэтому каждое техническое решение, каждую модель оборудования и каждую доработку мы проверяем на себе.
            </p>
            <p className="text-foreground leading-relaxed">
              Философия нашей компании строится на простом и честном принципе: мы предлагаем рынку только тот продукт, которым пользуемся сами. Наш аква-бизнес — это не теория и не перепродажа оборудования «по каталогу». Это ежедневная практика, собственная эксплуатация, собственные объекты, собственный опыт.
            </p>
            <p className="text-foreground leading-relaxed">
              Мы не продаем «железо» — мы создаем устойчивую бизнес-модель и сопровождаем предпринимателя на всем пути развития аква-вендинга.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src={logoWodomat}
              alt="WODOMAT"
              className="max-w-xs w-full rounded-2xl shadow-xl cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  </WaterBackground>
);

export default AboutUs;
