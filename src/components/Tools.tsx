import { useLanguage } from "@/contexts/LanguageContext";

const tools = [
  "n8n", "Make", "Zapier", "OpenAI", "Anthropic Claude",
  "LangChain", "Pinecone", "Supabase", "Pipedream", "Activepieces",
  "Microsoft Power Automate", "Azure AI", "AWS Bedrock", "Google Vertex AI",
  "Pipedrive", "HubSpot", "Slack", "Notion", "Google Workspace",
  "Python", "TypeScript", "Next.js", "PostgreSQL", "Docker",
];

const Tools = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
            {t('tools.eyebrow')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('tools.title')}</h2>
          <p className="text-lg text-muted-foreground">{t('tools.subtitle')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-5 py-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm font-medium text-foreground/80 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
