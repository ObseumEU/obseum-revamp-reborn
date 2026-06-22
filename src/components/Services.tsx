import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, Workflow, Linkedin, Sparkles, FileText, Code2, ArrowUpRight } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Bot, key: "agents", accent: "primary" },
    { icon: Workflow, key: "workflow", accent: "accent" },
    { icon: Linkedin, key: "leads", accent: "primary" },
    { icon: Sparkles, key: "content", accent: "accent" },
    { icon: FileText, key: "docs", accent: "primary" },
    { icon: Code2, key: "software", accent: "accent" },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-bold mb-5 block">
            {t("services.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 text-balance">
            <span className="text-gradient-light">{t("services.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {services.map(({ icon: Icon, key, accent }, i) => (
            <div
              key={key}
              className="group relative glass rounded-3xl p-7 md:p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-premium overflow-hidden"
              style={{ animation: `reveal-up 0.6s ${i * 0.06}s both` }}
            >
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 ${
                  accent === "accent" ? "bg-accent/30" : "bg-primary/30"
                }`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                      accent === "accent"
                        ? "bg-accent/10 border-accent/30"
                        : "bg-primary/10 border-primary/30"
                    }`}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{
                        color: accent === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))",
                      }}
                    />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>

                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`services.items.${key}.desc`)}
                </p>

                <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  <span>0{i + 1}</span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{
                        background: accent === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))",
                      }}
                    />
                    available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
