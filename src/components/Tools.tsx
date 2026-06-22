import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Zap, Puzzle, HeartHandshake, Sparkles, Clock } from "lucide-react";

const reasons = [
  {
    Icon: Sparkles,
    title: "Pracujeme s tím nejlepším na trhu",
    desc: "Stejné AI technologie, na kterých staví největší firmy světa — jen v podobě, která dává smysl pro vás.",
  },
  {
    Icon: Puzzle,
    title: "Napojíme se na to, co už máte",
    desc: "Nepotřebujete měnit účetní systém, e-shop ani CRM. Stavíme nad tím, s čím už pracujete.",
  },
  {
    Icon: Shield,
    title: "Vaše data zůstávají vaše",
    desc: "GDPR, jasná smlouva a přístupy. Žádné posílání dat zákazníků kam-koliv-do-světa.",
  },
  {
    Icon: Zap,
    title: "Rychle a po krocích",
    desc: "Žádné půlroční projekty. První výsledek vidíte do pár týdnů a postupně přidáváme dál.",
  },
  {
    Icon: HeartHandshake,
    title: "Mluvíme lidsky, ne odbornicky",
    desc: "Žádné technické zkratky. Vysvětlíme všechno na vašich konkrétních příkladech a problémech.",
  },
  {
    Icon: Clock,
    title: "Jsme tu i potom",
    desc: "Po nasazení vás nenecháme. Sledujeme, ladíme a pomáháme růst — jako dlouhodobý partner.",
  },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reasons.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-7 hover:border-primary/40 transition-all group"
              style={{ animation: `reveal-up 0.5s ${i * 0.08}s both` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
