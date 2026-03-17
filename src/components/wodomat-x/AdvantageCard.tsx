import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { LucideIcon, Zap } from "lucide-react";

export interface AdvantageItem {
  icon: LucideIcon;
  number: number;
  title: string;
  description: string;
  details: string[];
  benefits?: string[];
  accent?: string;
  competitorNote?: string;
}

const AdvantageCard = ({ item, index }: { item: AdvantageItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasCompetitorNote = !!item.competitorNote;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index % 2 * 0.15 }}
      className={`glass-card-hover p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden ${
        hasCompetitorNote ? "ring-1 ring-primary/20" : ""
      }`}
    >
      {/* Gradient accent strip for competitor-differentiated items */}
      {hasCompetitorNote && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      )}

      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
          hasCompetitorNote
            ? "bg-gradient-to-br from-primary/20 to-accent/20"
            : "bg-primary/10"
        }`}>
          <item.icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-heading font-bold text-lg md:text-xl text-foreground">
          <span className="text-primary mr-1">{item.number}.</span> {item.title}
        </h3>
      </div>

      <p className="text-muted-foreground leading-relaxed">{item.description}</p>

      {item.details && item.details.length > 0 && (
        <ul className="space-y-1.5">
          {item.details.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      )}

      {item.benefits && (
        <div className="mt-1 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <p className="text-xs font-heading font-semibold text-primary mb-2">Выгоды для вас:</p>
          <ul className="space-y-1">
            {item.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="text-primary mt-0.5">✓</span> {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.accent && (
        <p className="text-sm font-semibold text-primary italic mt-1">
          💡 {item.accent}
        </p>
      )}

      {/* Competitor comparison badge */}
      {hasCompetitorNote && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + index % 2 * 0.15 }}
          className="mt-2 p-3 rounded-xl bg-gradient-to-r from-destructive/5 via-destructive/10 to-destructive/5 border border-destructive/15"
        >
          <div className="flex items-start gap-2">
            <Zap className="w-4 h-4 text-destructive/70 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-destructive/80 font-medium">
              <span className="font-heading font-semibold">У других производителей:</span> {item.competitorNote}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AdvantageCard;
