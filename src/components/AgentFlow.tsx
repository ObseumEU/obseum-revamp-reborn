import { Brain, Database, MessageSquare, Mail, Calendar, FileSpreadsheet, Webhook, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const inputs = [
  { Icon: MessageSquare, label: "Chat / Web" },
  { Icon: Mail, label: "E-mail" },
  { Icon: Webhook, label: "API / Webhook" },
];
const tools = [
  { Icon: Database, label: "CRM" },
  { Icon: FileSpreadsheet, label: "Sheets / ERP" },
  { Icon: Calendar, label: "Kalendář" },
  { Icon: Mail, label: "Outreach" },
];

const AgentFlow = () => {
  const { t } = useLanguage();

  return (
    <section id="agent" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm mask-radial opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t("agent.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest text-balance mb-6">
            <span className="text-gradient-light">{t("agent.title1")}</span>{" "}
            <span className="text-gradient">{t("agent.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("agent.subtitle")}</p>
        </div>

        <div className="relative max-w-6xl mx-auto glass rounded-3xl p-6 md:p-12 shadow-premium overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

          <div className="relative grid md:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center min-h-[460px]">
            <div className="flex flex-col gap-3">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold mb-2">
                01 · {t("agent.col1")}
              </div>
              {inputs.map(({ Icon, label }, i) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 glass rounded-xl p-3.5 hover:border-primary/40 transition-all"
                  style={{ animation: `reveal-up 0.6s ${i * 0.1}s both` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="h-[18px] w-[18px] text-primary" />
                  </div>
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
              ))}
            </div>

            <div className="relative flex items-center justify-center py-6">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                viewBox="0 0 400 400"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="flowGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="hsl(190 95% 55%)" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(190 95% 55%)" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(265 90% 65%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[80, 200, 320].map((y) => (
                  <path
                    key={`l-${y}`}
                    d={`M0 ${y} C 100 ${y}, 100 200, 200 200`}
                    stroke="url(#flowGrad)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 6"
                    className="animate-dash-flow"
                  />
                ))}
                {[80, 160, 240, 320].map((y) => (
                  <path
                    key={`r-${y}`}
                    d={`M200 200 C 300 200, 300 ${y}, 400 ${y}`}
                    stroke="url(#flowGrad)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 6"
                    className="animate-dash-flow"
                    style={{ animationDelay: "0.6s" }}
                  />
                ))}
              </svg>

              <div className="absolute w-48 h-48 rounded-full border border-primary/30 animate-pulse-ring" />
              <div
                className="absolute w-48 h-48 rounded-full border border-accent/30 animate-pulse-ring"
                style={{ animationDelay: "1.2s" }}
              />

              <div className="relative w-48 h-48 rounded-full bg-gradient-primary p-[2px] shadow-glow">
                <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center text-center px-4">
                  <Brain className="h-10 w-10 text-primary mb-2 animate-float-slow" />
                  <div className="text-sm font-bold tracking-tight">AI Agent</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    GPT · Claude · Llama
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 left-2 glass rounded-full px-3 py-1 text-[10px] font-mono text-primary flex items-center gap-1.5 animate-float-slow">
                <Sparkles className="h-3 w-3" /> reasoning…
              </div>
              <div
                className="absolute -bottom-2 right-2 glass rounded-full px-3 py-1 text-[10px] font-mono flex items-center gap-1.5 animate-float-slow"
                style={{ animationDelay: "1.5s", color: "hsl(var(--accent))" }}
              >
                tool_call()
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold mb-2 md:text-right">
                02 · {t("agent.col2")}
              </div>
              {tools.map(({ Icon, label }, i) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 glass rounded-xl p-3.5 hover:border-accent/40 transition-all md:flex-row-reverse md:text-right"
                  style={{ animation: `reveal-up 0.6s ${0.4 + i * 0.1}s both` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="h-[18px] w-[18px]" style={{ color: "hsl(var(--accent))" }} />
                  </div>
                  <div className="text-sm font-semibold">{label}</div>
                  <div
                    className="md:ml-0 ml-auto w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "hsl(var(--accent))" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 pt-6 border-t border-border/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {[
              { k: "agent.kpi1", v: "< 2s" },
              { k: "agent.kpi2", v: "24/7" },
              { k: "agent.kpi3", v: "99.9%" },
              { k: "agent.kpi4", v: "GDPR" },
            ].map(({ k, v }) => (
              <div key={k}>
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-gradient">{v}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mt-1">
                  {t(k)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentFlow;
