import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Clock, Smile, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative bg-cream text-ink pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-ink/10 text-xs font-medium text-ink/75 mb-8 shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-tone-lime-ink" />
            {t("hero.badge")}
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.02] tracking-tightest text-ink mb-7 text-balance">
            {t("hero.title")}{" "}
            <span className="inline-block px-3 py-0.5 rounded-2xl bg-lime text-lime-ink">
              {t("hero.highlight")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-ink/65 mb-3 max-w-2xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <p className="text-base text-ink/55 mb-10 max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-ink text-cream hover:bg-ink-2 hover:scale-100 font-semibold text-sm px-6 py-6"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link
              to="/use-cases"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime text-lime-ink hover:bg-lime/90 font-semibold text-sm px-6 py-3.5"
            >
              {t("hero.ctaSecondary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {[
              { Icon: Clock, t: "Ušetříte čas", s: "průměrně 12 hodin týdně", tone: "bg-tone-mint text-tone-mint-ink" },
              { Icon: Smile, t: "Spokojení zákazníci", s: "odpověď do pár vteřin", tone: "bg-tone-sky text-tone-sky-ink" },
              { Icon: TrendingUp, t: "Více obchodů", s: "žádná poptávka nezapadne", tone: "bg-tone-lime text-tone-lime-ink" },
            ].map(({ Icon, t: title, s, tone }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-soft border border-ink/5"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tone}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-ink">{title}</div>
                  <div className="text-[11px] text-ink/55">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
