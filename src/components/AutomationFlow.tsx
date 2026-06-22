import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Filter, Brain, Database, Send, CheckCircle2 } from "lucide-react";

const nodes = [
  { Icon: Mail, label: "Trigger", sub: "Nový e-mail / form", color: "primary" },
  { Icon: Filter, label: "Filter", sub: "Kategorie + priorita", color: "primary" },
  { Icon: Brain, label: "AI", sub: "Klasifikace + návrh", color: "accent" },
  { Icon: Database, label: "CRM", sub: "Vytvoř / aktualizuj lead", color: "primary" },
  { Icon: Send, label: "Reply", sub: "Personalizovaná odpověď", color: "accent" },
  { Icon: CheckCircle2, label: "Done", sub: "Slack notifikace", color: "primary" },
];

const AutomationFlow = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 mask-radial" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "hsl(var(--accent))" }}
            />
            {t("flow.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 text-balance">
            <span className="text-gradient-light">{t("flow.title1")}</span>{" "}
            <span className="text-gradient">{t("flow.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("flow.subtitle")}</p>
        </div>

        <div className="relative max-w-6xl mx-auto glass rounded-3xl p-6 md:p-10 shadow-premium">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                workflow.lead-intake.json
              </span>
            </div>
            <span className="text-[10px] font-mono text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              LIVE · 1,284 runs / 24h
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-2 relative">
            <svg
              className="absolute top-8 left-0 right-0 w-full h-2 hidden md:block pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 600 8"
            >
              <defs>
                <linearGradient id="pipeGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(190 95% 55%)" />
                  <stop offset="100%" stopColor="hsl(265 90% 65%)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="4" x2="600" y2="4" stroke="hsl(var(--border))" strokeWidth="1" />
              <line
                x1="0"
                y1="4"
                x2="600"
                y2="4"
                stroke="url(#pipeGrad)"
                strokeWidth="2"
                strokeDasharray="12 8"
                className="animate-dash-flow"
              />
            </svg>

            {nodes.map(({ Icon, label, sub, color }, i) => (
              <div
                key={label}
                className="relative flex flex-col items-center text-center"
                style={{ animation: `reveal-up 0.5s ${i * 0.08}s both` }}
              >
                <div
                  className={`relative w-16 h-16 rounded-2xl glass flex items-center justify-center mb-3 hover:scale-110 transition-transform ${
                    color === "accent" ? "shadow-glow-violet" : "shadow-glow"
                  }`}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{
                      color: color === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))",
                    }}
                  />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-background border border-border flex items-center justify-center text-[9px] font-mono text-muted-foreground">
                    {i + 1}
                  </span>
                </div>
                <div className="font-bold text-sm">{label}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-background/60 border border-border/40 p-4 font-mono text-[11px] leading-relaxed">
            <div className="text-muted-foreground/70">
              <span className="text-primary">›</span> trigger.email.received{" "}
              <span className="text-muted-foreground/40">→ 142ms</span>
            </div>
            <div className="text-muted-foreground/70">
              <span className="text-primary">›</span> ai.classify("urgent", "lead", confidence=0.94)
            </div>
            <div className="text-muted-foreground/70">
              <span className="text-primary">›</span> crm.lead.create{" "}
              <span className="text-primary">✓</span> id=lead_8421
            </div>
            <div style={{ color: "hsl(var(--accent-glow))" }}>
              <span>›</span> reply.sent <span className="text-primary">✓</span> · pipeline complete in{" "}
              <b>2.1s</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFlow;
