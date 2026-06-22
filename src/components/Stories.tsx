import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, TrendingDown, FileCheck2, Users, Package, Calculator, ArrowRight } from "lucide-react";

const stories = [
  {
    Icon: FileCheck2,
    industry: "Účetní kancelář · 8 lidí",
    problem: "Účetní každý měsíc ručně přepisovala 600+ faktur z e-mailu a PDF do systému Pohoda. 3 dny práce každý měsíc.",
    solution: "AI přečte fakturu, zkontroluje IČO, DPH a splatnost, sama ji zaúčtuje. Účetní jen schvaluje výjimky.",
    metric: { value: "22 hodin", label: "ušetřených měsíčně" },
    extra: "Návratnost za 2 měsíce",
    accent: "primary",
  },
  {
    Icon: Users,
    industry: "Realitní makléř · 12 lidí",
    problem: "Z webu chodilo 40 poptávek denně, 60 % zůstalo bez odpovědi přes noc. Konkurence stíhala dřív.",
    solution: "AI asistent odpoví do 30 vteřin, zeptá se na lokalitu a rozpočet, předá makléři brief do CRM.",
    metric: { value: "+38 %", label: "domluvených prohlídek" },
    extra: "Reakce z hodin na vteřiny",
    accent: "accent",
  },
  {
    Icon: Package,
    industry: "E-shop s nábytkem · 25 lidí",
    problem: "Zákaznická podpora odpovídala 8 hodin na typové dotazy: doprava, vrácení, dostupnost. Mailbox stále plný.",
    solution: "AI asistent v chatu i e-mailu zvládne 70 % dotazů sám. Operátor řeší jen reklamace a složité případy.",
    metric: { value: "−65 %", label: "tiketů na operátora" },
    extra: "Čas odpovědi z 6 h na 12 s",
    accent: "primary",
  },
  {
    Icon: Calculator,
    industry: "Strojírenská výroba · 80 lidí",
    problem: "Mistr na ranní směně ručně sbíral data z 5 strojů a posílal e-mailem do kanceláře. 2 hodiny denně.",
    solution: "Stroje odesílají data automaticky, AI připraví ranní report a upozorní mistra jen na výpadky.",
    metric: { value: "9 hodin", label: "ušetřených týdně" },
    extra: "Méně chyb v evidenci",
    accent: "accent",
  },
  {
    Icon: TrendingDown,
    industry: "Personální agentura · 15 lidí",
    problem: "Recruiteři ručně procházeli 200 životopisů týdně. Polovina vůbec nesplňovala zadání.",
    solution: "AI předtřídí životopisy podle požadavků, vytáhne klíčové údaje a vytvoří krátký souhrn ke každému kandidátovi.",
    metric: { value: "14 hodin", label: "ušetřených týdně" },
    extra: "3× rychlejší obsazení pozice",
    accent: "primary",
  },
  {
    Icon: Clock,
    industry: "Právní kancelář · 6 lidí",
    problem: "Asistentka hledala v archivu starých smluv konkrétní paragrafy. Jeden dotaz = 40 minut hledání.",
    solution: "AI prohledá tisíce dokumentů během vteřin a vrátí přesnou pasáž s odkazem na zdroj.",
    metric: { value: "z 40 min", label: "na 4 vteřiny" },
    extra: "Bez chyb v citacích",
    accent: "accent",
  },
];

const Stories = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm mask-radial opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Konkrétní příběhy
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 text-balance">
            <span className="text-gradient-light">Co skutečně</span>{" "}
            <span className="text-gradient">řešíme ve firmách</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Žádné obecné fráze. Tady jsou reálné situace z firem jako je ta vaše — i s ušetřeným časem a penězi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {stories.map(({ Icon, industry, problem, solution, metric, extra, accent }, i) => (
            <div
              key={industry}
              className="group glass rounded-3xl p-7 flex flex-col hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-premium"
              style={{ animation: `reveal-up 0.5s ${i * 0.07}s both` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                    accent === "accent"
                      ? "bg-accent/10 border-accent/30"
                      : "bg-primary/10 border-primary/30"
                  }`}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: accent === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))" }}
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-bold">
                  {industry}
                </div>
              </div>

              <div className="mb-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-destructive/80 font-bold mb-1.5">
                  Problém
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">{problem}</p>
              </div>

              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1.5">
                  Co jsme udělali
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">{solution}</p>
              </div>

              <div className="mt-auto pt-5 border-t border-border/40 flex items-end justify-between gap-3">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-gradient leading-none">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1.5">{metric.label}</div>
                </div>
                <div className="text-[11px] text-right text-foreground/70 max-w-[45%] leading-tight">
                  {extra}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
          >
            Najdeme i ve vaší firmě podobnou příležitost
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
