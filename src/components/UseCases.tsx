import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, Megaphone, Headphones, Factory, Calculator, LineChart } from "lucide-react";

const UseCases = () => {
  const { t } = useLanguage();
  const items = [
    { icon: Briefcase, key: "sales" },
    { icon: Megaphone, key: "marketing" },
    { icon: Headphones, key: "support" },
    { icon: Factory, key: "ops" },
    { icon: Calculator, key: "finance" },
    { icon: LineChart, key: "management" },
  ];

  return (
    <section id="usecases" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
            {t('usecases.eyebrow')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('usecases.title')}</h2>
          <p className="text-lg text-muted-foreground">{t('usecases.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50 max-w-6xl mx-auto">
          {items.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="group bg-card p-8 hover:bg-gradient-card transition-all duration-300"
            >
              <Icon className="h-7 w-7 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold mb-2">{t(`usecases.items.${key}.title`)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`usecases.items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
