import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <span className="text-primary font-medium">Enterprise Technology Partner</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            {t('hero.title')}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.highlight')}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-muted-foreground">
            {t('hero.subtitle')}
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col items-center gap-8 justify-center mb-12">
            <div className="bg-gradient-card border border-border/30 rounded-2xl p-8 backdrop-blur-sm max-w-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">Phone:</span>
                  <a href="tel:+420724676829" className="hover:text-primary transition-colors">+420 724 676 829</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">Email:</span>
                  <a href="mailto:info@obseum.cz" className="hover:text-primary transition-colors">info@obseum.cz</a>
                </div>
                <div className="pt-4 border-t border-border/30">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Obseum s.r.o.</strong></p>
                    <p>IČO: 07098308</p>
                    <p>DIČ: CZ07098308</p>
                    <p>Datová schránka: 7xm8rjr</p>
                    <p>Rybná 716/24, Staré Město, 110 00 Praha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Enterprise Projects</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">System Uptime</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default Hero;