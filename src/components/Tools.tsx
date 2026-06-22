import { useLanguage } from "@/contexts/LanguageContext";

const groups = [
  { label: "LLM & AI", items: ["OpenAI", "Anthropic", "Llama", "Gemini", "Mistral", "LangChain", "LlamaIndex"] },
  { label: "Automation", items: ["n8n", "Make", "Zapier", "Pipedream", "Activepieces", "Power Automate"] },
  { label: "Data & Cloud", items: ["Supabase", "PostgreSQL", "Pinecone", "Qdrant", "AWS Bedrock", "Azure AI", "Vertex AI"] },
  { label: "Business", items: ["Pipedrive", "HubSpot", "Slack", "Notion", "Google Workspace", "Microsoft 365"] },
  { label: "Code", items: ["TypeScript", "Python", "Next.js", "React", "Docker", "Vercel"] },
];

const Tools = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 mask-radial" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-bold mb-5 block">
            {t("tools.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 text-balance">
            <span className="text-gradient-light">{t("tools.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("tools.subtitle")}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {groups.map((g, gi) => (
            <div
              key={g.label}
              className="glass rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
              style={{ animation: `reveal-up 0.5s ${gi * 0.08}s both` }}
            >
              <div className="md:w-40 shrink-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                  {String(gi + 1).padStart(2, "0")}
                </div>
                <div className="text-base font-bold">{g.label}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3.5 py-1.5 rounded-full border border-border/60 bg-background/40 text-xs font-mono text-foreground/85 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
