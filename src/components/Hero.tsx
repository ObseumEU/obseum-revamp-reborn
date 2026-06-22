import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-bold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t("hero.badge")}
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tightest text-balance">
            <span className="text-foreground">{t("hero.title")}</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
              {t("hero.highlight")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <p className="text-base text-muted-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-24">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="text-sm px-8 py-6 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 font-bold"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("process")}
              className="text-sm px-8 py-6 rounded-xl font-bold bg-secondary/40 border-border hover:bg-secondary"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto pt-12 border-t border-border/60">
            <div className="text-left md:text-center">
              <div className="text-3xl md:text-5xl font-bold tracking-tight mb-2">50+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                {t("hero.stat1")}
              </div>
            </div>
            <div className="text-left md:text-center">
              <div className="text-3xl md:text-5xl font-bold tracking-tight mb-2">70%</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                {t("hero.stat2")}
              </div>
            </div>
            <div className="text-left md:text-center">
              <div className="text-3xl md:text-5xl font-bold tracking-tight mb-2">40+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                {t("hero.stat3")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
