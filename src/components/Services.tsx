import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, Workflow, Linkedin, Sparkles, FileText, Code2 } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Bot, key: "agents" },
    { icon: Workflow, key: "workflow" },
    { icon: Linkedin, key: "leads" },
    { icon: Sparkles, key: "content" },
    { icon: FileText, key: "docs" },
    { icon: Code2, key: "software" },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-subtle relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
            {t('services.eyebrow')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map(({ icon: Icon, key }) => (
            <Card
              key={key}
              className="group relative p-8 bg-gradient-card border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-premium overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`services.items.${key}.desc`)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
