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
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
              {t('contact.eyebrow')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-5">
              <a href="tel:+420724676829" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t('contact.phone')}</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">+420 724 676 829</div>
                </div>
              </a>
              <a href="mailto:info@obseum.cz" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t('contact.mail')}</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">info@obseum.cz</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t('contact.address')}</div>
                  <div className="font-semibold">Rybná 716/24, 110 00 Praha</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-card border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-card"
          >
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.name')} *</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.company')}</label>
                <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.email')} *</label>
                <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t('contact.message')}</label>
                <Textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <Button type="submit" size="lg" className="w-full text-base py-6">
                {t('contact.submit')}
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
