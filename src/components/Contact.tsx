import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Poptávka: ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nFirma: ${form.company}\nE-mail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:info@obseum.cz?subject=${subject}&body=${body}`;
    toast({ title: "Otevírám e-mailového klienta…" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[hsl(var(--teal-deep))] text-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-cream/55 mb-3 block">
              {t("contact.eyebrow")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tightest mb-6 leading-[1.05]">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-cream/70 mb-10 leading-relaxed">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-4">
              <a href="tel:+420724676829" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-lime text-lime-ink flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-cream/55">{t("contact.phone")}</div>
                  <div className="font-semibold group-hover:text-lime transition-colors">+420 724 676 829</div>
                </div>
              </a>
              <a href="mailto:info@obseum.cz" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-lime text-lime-ink flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-cream/55">{t("contact.mail")}</div>
                  <div className="font-semibold group-hover:text-lime transition-colors">info@obseum.cz</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-lime text-lime-ink flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-cream/55">{t("contact.address")}</div>
                  <div className="font-semibold">Rybná 716/24, 110 00 Praha</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white text-ink rounded-3xl p-6 md:p-8 shadow-soft"
          >
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-ink">{t("contact.name")} *</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-cream border-ink/10 text-ink" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-ink">{t("contact.company")}</label>
                <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="bg-cream border-ink/10 text-ink" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-ink">{t("contact.email")} *</label>
                <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-cream border-ink/10 text-ink" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-ink">{t("contact.message")}</label>
                <Textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-cream border-ink/10 text-ink" />
              </div>
              <Button type="submit" size="lg" className="w-full text-base py-6 rounded-full bg-lime text-lime-ink hover:bg-lime/90 font-semibold hover:scale-100">
                {t("contact.submit")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
