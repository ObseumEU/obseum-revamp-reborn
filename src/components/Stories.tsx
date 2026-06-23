import { Clock, TrendingDown, FileCheck2, Users, Package, Calculator, ArrowRight } from "lucide-react";

const stories = [
  { Icon: FileCheck2, industry: "Účetní kancelář · 8 lidí", problem: "Účetní každý měsíc ručně přepisovala 600+ faktur z e-mailu a PDF do systému Pohoda. 3 dny práce každý měsíc.", solution: "AI přečte fakturu, zkontroluje IČO, DPH a splatnost, sama ji zaúčtuje. Účetní jen schvaluje výjimky.", metric: { value: "22 hodin", label: "ušetřených měsíčně" }, extra: "Návratnost za 2 měsíce", tone: "bg-tone-mint text-tone-mint-ink" },
  { Icon: Users, industry: "Realitní makléř · 12 lidí", problem: "Z webu chodilo 40 poptávek denně, 60 % zůstalo bez odpovědi přes noc. Konkurence stíhala dřív.", solution: "AI asistent odpoví do 30 vteřin, zeptá se na lokalitu a rozpočet, předá makléři brief do CRM.", metric: { value: "+38 %", label: "domluvených prohlídek" }, extra: "Reakce z hodin na vteřiny", tone: "bg-tone-blush text-tone-blush-ink" },
  { Icon: Package, industry: "E-shop s nábytkem · 25 lidí", problem: "Zákaznická podpora odpovídala 8 hodin na typové dotazy: doprava, vrácení, dostupnost. Mailbox stále plný.", solution: "AI asistent v chatu i e-mailu zvládne 70 % dotazů sám. Operátor řeší jen reklamace a složité případy.", metric: { value: "−65 %", label: "tiketů na operátora" }, extra: "Čas odpovědi z 6 h na 12 s", tone: "bg-tone-sky text-tone-sky-ink" },
  { Icon: Calculator, industry: "Strojírenská výroba · 80 lidí", problem: "Mistr na ranní směně ručně sbíral data z 5 strojů a posílal e-mailem do kanceláře. 2 hodiny denně.", solution: "Stroje odesílají data automaticky, AI připraví ranní report a upozorní mistra jen na výpadky.", metric: { value: "9 hodin", label: "ušetřených týdně" }, extra: "Méně chyb v evidenci", tone: "bg-tone-sand text-tone-sand-ink" },
  { Icon: TrendingDown, industry: "Personální agentura · 15 lidí", problem: "Recruiteři ručně procházeli 200 životopisů týdně. Polovina vůbec nesplňovala zadání.", solution: "AI předtřídí životopisy podle požadavků, vytáhne klíčové údaje a vytvoří krátký souhrn ke každému kandidátovi.", metric: { value: "14 hodin", label: "ušetřených týdně" }, extra: "3× rychlejší obsazení pozice", tone: "bg-tone-lilac text-tone-lilac-ink" },
  { Icon: Clock, industry: "Právní kancelář · 6 lidí", problem: "Asistentka hledala v archivu starých smluv konkrétní paragrafy. Jeden dotaz = 40 minut hledání.", solution: "AI prohledá tisíce dokumentů během vteřin a vrátí přesnou pasáž s odkazem na zdroj.", metric: { value: "z 40 min", label: "na 4 vteřiny" }, extra: "Bez chyb v citacích", tone: "bg-tone-lime text-tone-lime-ink" },
];

const Stories = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-ink/50 mb-3 block">
            Konkrétní příběhy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tightest text-ink leading-[1.05] mb-5">
            Co skutečně řešíme ve firmách
          </h2>
          <p className="text-lg text-ink/65 leading-relaxed">
            Žádné obecné fráze. Reálné situace z firem jako je ta vaše — i s ušetřeným časem a penězi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl">
          {stories.map(({ Icon, industry, problem, solution, metric, extra, tone }) => (
            <div
              key={industry}
              className="bg-white rounded-3xl p-7 flex flex-col shadow-soft border border-ink/5 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_hsl(175_60%_8%_/_0.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${tone}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/55 font-semibold">
                  {industry}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink/45 font-bold mb-1.5">
                  Problém
                </div>
                <p className="text-sm text-ink/80 leading-relaxed">{problem}</p>
              </div>

              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink/45 font-bold mb-1.5">
                  Co jsme udělali
                </div>
                <p className="text-sm text-ink/80 leading-relaxed">{solution}</p>
              </div>

              <div className="mt-auto pt-5 border-t border-ink/10 flex items-end justify-between gap-3">
                <div>
                  <div className="text-2xl font-bold tracking-tightest text-ink leading-none">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-ink/55 mt-1.5">{metric.label}</div>
                </div>
                <div className="text-[11px] text-right text-ink/65 max-w-[45%] leading-tight">
                  {extra}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:gap-3 transition-all"
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
