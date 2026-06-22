import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src={heroBackground} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight">
            {t('hero.title')}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.highlight')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium">
            {t('hero.subtitle')}
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollTo('contact')}
              className="text-base px-8 py-6 shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('process')}
              className="text-base px-8 py-6"
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t('hero.stat1')}</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1">70%</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t('hero.stat2')}</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1">40+</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t('hero.stat3')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
