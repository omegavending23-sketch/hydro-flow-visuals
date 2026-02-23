import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WaterDrops = () => {
  const drops = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 40 + Math.random() * 120,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 6 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute water-drop"
          style={{
            width: drop.size,
            height: drop.size,
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            animation: `morphDrop ${drop.duration}s ease-in-out ${drop.delay}s infinite`,
          }}
          animate={{
            y: [0, -20, 5, -10, 0],
            x: [0, 10, -5, 8, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: drop.delay,
          }}
        />
      ))}
    </div>
  );
};

interface WaterBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

const WaterBackground = ({ children, className = "", intensity = "medium" }: WaterBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const dropCount = intensity === "light" ? 4 : intensity === "heavy" ? 12 : 8;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <WaterDrops />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export { WaterDrops, WaterBackground };
export default WaterBackground;
