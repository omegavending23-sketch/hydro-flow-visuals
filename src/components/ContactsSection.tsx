import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const ContactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      toast.error("Необходимо согласие на обработку персональных данных");
      return;
    }
    const phoneClean = formData.phone.replace(/[\s\-()]/g, "");
    if (formData.phone && !/^\+\d{10,15}$/.test(phoneClean)) {
      toast.error("Некорректный формат телефона");
      return;
    }
    setSubmitting(true);
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      body.append("_subject", "Новая заявка с сайта ВОДОМАТ");
      body.append("_template", "table");
      body.append("_captcha", "false");

      const res = await fetch("https://formsubmit.co/ajax/7798080@inbox.ru", {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || String(data.success) !== "true") {
        console.error("FormSubmit error:", res.status, data);
        throw new Error(data?.message || "Send failed");
      }
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setAgree(false);
    } catch (err) {
      toast.error(
        err instanceof Error && err.message.includes("Activation")
          ? "Форма ожидает активации: перейдите по ссылке в письме от FormSubmit на 7798080@inbox.ru."
          : "Не удалось отправить заявку. Попробуйте позже."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 water-gradient-bg opacity-[0.03]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-primary/10 text-primary mb-4">
            Контакты
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Свяжитесь <span className="text-gradient-water">с нами</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Готовы стать партнёром или хотите узнать больше? Заполните форму или позвоните нам
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Наши контакты</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Общество с ограниченной ответственностью «ОМЕГА ВЕНДИНГ»<br />
                УНП 692 227 000
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">Адрес</div>
                    <div className="text-muted-foreground">Республика Беларусь, Минск,<br />ул. Тимирязева, д.67, оф.1625 (16 этаж)</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">Телефоны</div>
                    <div className="text-muted-foreground">
                      Продажа оборудования: <a href="tel:+375297798080" className="hover:text-primary transition-colors">+375 29 779 80 80</a><br />
                      Техническая поддержка партнёров: <a href="tel:+375257798080" className="hover:text-primary transition-colors">+375 25 779 80 80</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl water-gradient-bg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">
                      <a href="mailto:7798080@inbox.ru" className="hover:text-primary transition-colors">7798080@inbox.ru</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="glass-card p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Почему ВОДОМАТ?</h3>
              <ul className="space-y-3">
                {[
                  "Собственная сеть из 160+ водоматов",
                  "Техническая поддержка",
                  "Обучение и помощь в развитии бизнеса",
                  "Гарантийное и постгарантийное обслуживание",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Оставить заявку</h3>
              <p className="text-muted-foreground text-sm mb-4">Заполните форму и мы свяжемся с вами</p>

              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-2">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-2">Телефон</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="+375 ХХ ХХХ ХХ ХХ"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-2">Сообщение</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Расскажите о вашем интересе..."
                />
              </div>
              <div className="flex items-start gap-2.5">
                <Checkbox
                  id="contact-agree"
                  checked={agree}
                  onCheckedChange={(c) => setAgree(c === true)}
                  className="mt-0.5"
                />
                <label htmlFor="contact-agree" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                  Нажимая кнопку «Отправить заявку», я принимаю условия пользовательского соглашения и даю согласие на обработку моих персональных данных.
                </label>
              </div>
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden w-full px-8 py-4 rounded-2xl font-heading font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{submitting ? "Отправка..." : "Отправить заявку"}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
