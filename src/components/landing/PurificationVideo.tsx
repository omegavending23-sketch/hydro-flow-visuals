import { motion } from "framer-motion";

const PurificationVideo = () => (
  <section className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-10"
      >
        В наших водоматах <span className="text-gradient-water">12 ступеней очистки воды</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card overflow-hidden max-w-5xl mx-auto"
      >
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/02K5S6xf2A8?autoplay=1&mute=1&loop=1&playlist=02K5S6xf2A8&rel=0&modestbranding=1"
            title="12 ступеней очистки воды WODOMAT"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default PurificationVideo;
