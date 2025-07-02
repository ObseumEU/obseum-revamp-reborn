import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        <div className="absolute inset-0 bg-background/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Specializujeme se na{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              vývoj software
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
            implementaci AI a penetrační testování
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Máme přes 10 let zkušeností v oboru. Pomůžeme i Vám s inovací Vašeho podnikání.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant">
              Kontaktujte nás
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Naše služby
            </Button>
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