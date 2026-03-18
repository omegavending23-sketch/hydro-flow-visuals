import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const comparisonData: { feature: string; wodomat: string; others: string; highlight: boolean; isPrice?: boolean }[] = [
  { feature: "Система обогрева", wodomat: "Точечный нагрев ключевых элементов", others: "Печной / вентиляторный обогрев", highlight: true },
  { feature: "Ремонт системы обогрева", wodomat: "Легко, без специальных знаний", others: "Требует квалификации и времени", highlight: true },
  { feature: "Модуль связи", wodomat: "4G (LTE)", others: "2G (устаревший)", highlight: true },
  { feature: "Сервисный TG-БОТ", wodomat: "Есть (электронная сервисная книга)", others: "Нет", highlight: true },
  { feature: "Ступеней очистки", wodomat: "12 ступеней", others: "До 10 ступеней", highlight: true },
  { feature: "Озонирование", wodomat: "Двойное (вода + тара)", others: "Одиночное (только тара клиента)", highlight: true },
  { feature: "Неоновые фризы", wodomat: "В базовой комплектации", others: "За дополнительную плату", highlight: true },
  { feature: 'ЖКИ-дисплей 21,5"', wodomat: "Есть", others: "Нет", highlight: true },
  { feature: "Система лояльности", wodomat: "Скидочные карты в базе", others: "Нет", highlight: true },
  { feature: "Подготовка под банковский терминал", wodomat: "В базовой комплектации", others: "За дополнительную плату", highlight: true },
  { feature: "Полочка из нержавеющей стали", wodomat: "В базовой комплектации", others: "За дополнительную плату", highlight: true },
  { feature: "Козырёк от осадков", wodomat: "Входит в базовую комплектацию", others: "Нет", highlight: true },
  { feature: "Цена водомата", wodomat: "10 500 руб.", others: "ОТ 15 000 руб.", highlight: true, isPrice: true },
];

const getIcon = (value: string) => {
  if (value === "Нет") return <X className="w-5 h-5 text-destructive mx-auto" />;
  return null;
};

const ComparisonTable = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-4">
            Сравнение
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            <span className="text-gradient-water">WODOMAT X</span> vs другие производители
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Наглядное сравнение ключевых характеристик
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card overflow-hidden"
        >
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 md:p-5 font-heading font-semibold text-muted-foreground text-sm uppercase tracking-wider w-[35%]">
                    Характеристика
                  </th>
                  <th className="p-4 md:p-5 text-center w-[35%]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                      <span className="font-heading font-bold text-primary text-base">WODOMAT X</span>
                    </div>
                  </th>
                  <th className="p-4 md:p-5 text-center font-heading font-semibold text-muted-foreground text-sm w-[30%]">
                    Другие производители
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className={`border-b border-border/30 last:border-0 hover:bg-primary/[0.03] transition-colors ${row.isPrice ? "bg-primary/10" : ""}`}
                  >
                    <td className={`p-4 md:p-5 font-medium text-foreground text-sm ${row.isPrice ? "font-heading font-bold text-base" : ""}`}>
                      {row.feature}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {row.isPrice ? (
                        <span className="inline-flex items-center gap-2 text-base font-heading font-bold text-primary">
                          {row.wodomat}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {row.wodomat}
                        </span>
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      {row.isPrice ? (
                        <span className="inline-flex items-center gap-2 text-base font-heading font-bold text-destructive/80">
                          {row.others}
                        </span>
                      ) : row.others === "Нет" ? (
                        <span className="inline-flex items-center gap-2 text-sm text-destructive/70">
                          <X className="w-5 h-5 flex-shrink-0" />
                          {row.others}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                          <Minus className="w-5 h-5 flex-shrink-0 text-muted-foreground/50" />
                          {row.others}
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-border/30">
            {comparisonData.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className={`p-4 space-y-2 ${row.isPrice ? "bg-primary/10" : ""}`}
              >
                <p className="font-heading font-semibold text-foreground text-sm">{row.feature}</p>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-primary font-medium">{row.wodomat}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  {row.others === "Нет" ? (
                    <X className="w-4 h-4 text-destructive/70 mt-0.5 flex-shrink-0" />
                  ) : (
                    <Minus className="w-4 h-4 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  )}
                  <span className="text-muted-foreground">{row.others}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
