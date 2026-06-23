import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, Brain, Cpu, Sparkles, Workflow, Zap, Network, Atom } from "lucide-react";

const projects = [
  { name: "Neurova", Icon: Brain },
  { name: "Flowmind", Icon: Workflow },
  { name: "Cortexly", Icon: Cpu },
  { name: "Lumenra", Icon: Sparkles },
  { name: "Synthia", Icon: Atom },
  { name: "Boltix AI", Icon: Zap },
  { name: "Nodewise", Icon: Network },
  { name: "Replyo", Icon: Bot },
];

const ClientLogos = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-cream-2 border-y border-ink/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/50">
            {t("clients.title")}
          </span>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream-2 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream-2 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-[scroll_60s_linear_infinite] items-center">
            {[...projects, ...projects].map(({ name, Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2.5 h-12 px-5 flex-shrink-0 mx-3 text-ink/55 hover:text-ink transition-colors"
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="font-semibold tracking-tight text-lg whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
