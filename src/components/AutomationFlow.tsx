import { useLanguage } from "@/contexts/LanguageContext";
import { Coffee, Frown, Smile, Clock, Mail, FileText, Search, CheckCircle2, AlertTriangle, Receipt, Users } from "lucide-react";

const before = [
  { time: "08:00", Icon: Mail, text: "47 e-mailů ve schránce — 30 z nich jsou typové dotazy zákazníků." },
  { time: "09:30", Icon: Receipt, text: "Účetní přepisuje 40 faktur z PDF do systému. Ručně." },
  { time: "10:30", Icon: Search, text: "Hledání odstavce ve staré smlouvě — 40 minut, klient čeká." },
  { time: "13:00", Icon: Users, text: "Mistr posílá e-mailem data ze 3 strojů do kanceláře." },
  { time: "16:00", Icon: AlertTriangle, text: "Poptávka z webu zapadla. Konkurence ji vzala." },
  { time: "19:00", Icon: Clock, text: "Práce přetekla do večera. Zase." },
];

const after = [
  { time: "08:00", Icon: Coffee, text: "Káva a krátký přehled: 3 věci, které opravdu potřebují vás." },
  { time: "09:30", Icon: Receipt, text: "Faktury jsou už zaúčtované. Účetní jen schválila 2 výjimky." },
  { time: "10:30", Icon: CheckCircle2, text: "Odstavec ze smlouvy najetý za 4 vteřiny — i s odkazem na zdroj." },
  { time: "13:00", Icon: Users, text: "Data ze strojů přicházejí samy. Mistr řeší jen výpadek lisu." },
  { time: "16:00", Icon: Mail, text: "Nová poptávka? Už je v CRM a obchodník má brief." },
  { time: "19:00", Icon: Clock, text: "Domů včas. K dětem, na trénink, na vás." },
];

const AutomationFlow = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t("flow.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 text-balance">
            <span className="text-gradient-light">{t("flow.title1")}</span>{" "}
            <span className="text-gradient">{t("flow.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("flow.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* BEFORE */}
          <div className="glass rounded-3xl p-7 md:p-9 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-7 pb-5 border-b border-border/40">
              <div className="w-11 h-11 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                <Frown className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold">Bez AI</div>
                <div className="text-lg font-bold">Běžný úterý ve firmě</div>
              </div>
            </div>
            <div className="space-y-4">
              {before.map(({ time, Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group"
                  style={{ animation: `reveal-up 0.5s ${i * 0.08}s both` }}
                >
                  <div className="text-[11px] font-bold text-muted-foreground w-12 pt-2 shrink-0">{time}</div>
                  <div className="w-9 h-9 rounded-lg bg-background/60 border border-border flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-sm text-foreground/80 pt-1.5 leading-relaxed">{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div className="glass rounded-3xl p-7 md:p-9 relative overflow-hidden shadow-glow border-primary/20">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-7 pb-5 border-b border-border/40 relative">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Smile className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">S AI pomocníkem</div>
                <div className="text-lg font-bold">Stejné úterý, jiný klid</div>
              </div>
            </div>
            <div className="space-y-4 relative">
              {after.map(({ time, Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group"
                  style={{ animation: `reveal-up 0.5s ${0.2 + i * 0.08}s both` }}
                >
                  <div className="text-[11px] font-bold text-primary w-12 pt-2 shrink-0">{time}</div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm text-foreground/90 pt-1.5 leading-relaxed">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm">
              <b className="text-gradient">+ 12 hodin týdně</b>
              <span className="text-muted-foreground"> — průměrná úspora našich klientů po prvním měsíci</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFlow;
