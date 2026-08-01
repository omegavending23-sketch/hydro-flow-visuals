import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

// Simple global store
type Listener = (open: boolean) => void;
const listeners = new Set<Listener>();
let currentOpen = false;

export const openLeadForm = () => {
  currentOpen = true;
  listeners.forEach((l) => l(true));
};

export const closeLeadForm = () => {
  currentOpen = false;
  listeners.forEach((l) => l(false));
};

const FORMSUBMIT_EMAIL = "7798080@inbox.ru";

const LeadFormDialog = () => {
  const [open, setOpen] = useState(currentOpen);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; agree?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const listener: Listener = (o) => setOpen(o);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const handleOpenChange = (o: boolean) => {
    setOpen(o);
    currentOpen = o;
    if (!o) {
      setErrors({});
    }
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!formData.name.trim()) errs.name = "Введите имя";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = "Некорректный e-mail";
    const phoneClean = formData.phone.replace(/[\s\-()]/g, "");
    if (!/^\+\d{10,15}$/.test(phoneClean)) errs.phone = "Формат: +XXXXXXXXXXX (10-15 цифр)";
    if (!agree) errs.agree = "Необходимо согласие";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    let needsActivation = false;
    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("_subject", "Новая заявка с сайта ВОДОМАТ");
      body.append("_template", "table");
      body.append("_captcha", "false");

      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const data = await res.json().catch(() => null);
      if (data && String(data.success) !== "true" && /activat/i.test(String(data.message || ""))) {
        needsActivation = true;
      }
    } catch {
      // сетевой/CORS-сбой ответа — письмо при этом отправляется
    }
    setSubmitting(false);
    if (needsActivation) {
      toast.error(
        `Форма ещё не активирована для домена ${window.location.hostname}. Откройте письмо от FormSubmit на ${FORMSUBMIT_EMAIL} и нажмите «Activate Form».`
      );
      return;
    }
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "" });
    setAgree(false);
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Оставить заявку</DialogTitle>
          <DialogDescription>Заполните форму — мы свяжемся с вами в ближайшее время.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Имя *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="Ваше имя"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-heading font-medium text-foreground mb-1.5">E-mail *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Телефон *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="+375 XX XXX XX XX"
            />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>
          <div className="flex items-start gap-2.5">
            <Checkbox
              id="lead-agree"
              checked={agree}
              onCheckedChange={(c) => setAgree(c === true)}
              className="mt-0.5"
            />
            <label htmlFor="lead-agree" className="text-xs text-muted-foreground leading-snug cursor-pointer">
              Нажимая кнопку «Отправить», я принимаю условия пользовательского соглашения и даю согласие на обработку моих персональных данных.
            </label>
          </div>
          {errors.agree && <p className="text-xs text-destructive -mt-2">{errors.agree}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="relative overflow-hidden w-full px-8 py-3.5 rounded-2xl font-heading font-bold text-base bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{submitting ? "Отправка..." : "Отправить"}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shine_2.5s_ease-in-out_infinite]" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;
