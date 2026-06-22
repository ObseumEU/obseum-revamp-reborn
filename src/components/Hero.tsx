import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Clock, Smile, TrendingUp } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid-sm opacity-40 mask-radial" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] font-bold tracking-widest uppercase mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-foreground/90">{t("hero.badge")}</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tightest text-balance reveal reveal-delay-1">
          <span className="text-gradient-light">{t("hero.title")}</span>
          <br />
          <span className="text-gradient">{t("hero.highlight")}</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-3 max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
          {t("hero.subtitle")}
        </p>
        <p className="text-base text-muted-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20 reveal reveal-delay-3">
          <Button
            size="lg"
            onClick={() => scrollTo("contact")}
            className="text-sm px-8 py-6 rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 font-bold bg-gradient-primary text-primary-foreground hover:scale-[1.03]"
          >
            {t("hero.ctaPrimary")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("agent")}
            className="text-sm px-8 py-6 rounded-2xl font-bold glass hover:border-primary/40"
          >
            {t("hero.ctaSecondary")}
          </Button>
        </div>

        <div className="reveal reveal-delay-4 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {[
            { Icon: Clock, t: "Ušetříte čas", s: "průměrně 12 hodin týdně", c: "primary" },
            { Icon: Smile, t: "Spokojení zákazníci", s: "odpověď do pár vteřin", c: "accent" },
            { Icon: TrendingUp, t: "Více obchodů", s: "žádná poptávka nezapadne", c: "primary" },
          ].map(({ Icon, t: title, s, c }) => (
            <div
              key={title}
              className="glass rounded-2xl p-4 flex items-center gap-3 hover:border-primary/40 transition-all"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  c === "accent" ? "bg-accent/10 border border-accent/20" : "bg-primary/10 border border-primary/20"
                }`}
              >
                <Icon
                  className="h-4 w-4"
                  style={{ color: c === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))" }}
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">{title}</div>
                <div className="text-[11px] text-muted-foreground">{s}</div>
              </div>
              <div
                className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: c === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
