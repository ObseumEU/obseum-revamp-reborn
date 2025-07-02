import { useLanguage } from "@/contexts/LanguageContext";
import cancomLogo from "@/assets/Cancom_logo_bw.svg";
import o2Logo from "@/assets/O2-Logo-9.svg";
import heimLogo from "@/assets/HEIM.svg";
import homeCreditLogo from "@/assets/Home_Credit_logo.svg";
import innogyLogo from "@/assets/Innogy_Logo.svg";
import csobLogo from "@/assets/csob-1.svg";
import mycroftmindLogo from "@/assets/mycroftmind.svg";

const clients = [
  { name: "O2", logo: o2Logo },
  { name: "ČSOB", logo: csobLogo },
  { name: "Heimstaden", logo: heimLogo },
  { name: "Home Credit", logo: homeCreditLogo },
  { name: "Innogy", logo: innogyLogo },
  { name: "Cancom", logo: cancomLogo },
  { name: "MycroftMind", logo: mycroftmindLogo },
  { name: "Mafra", logo: "Mafra" }
];

const ClientLogos = () => {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-gradient-mesh relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-primary/10 border border-primary/20 mb-8 backdrop-blur-lg shadow-elegant">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-primary font-semibold tracking-wide">Trusted Partners</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            {t('clients.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
            {t('clients.subtitle')}
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card/30 backdrop-blur-xl border border-border/20 p-8 shadow-premium">
          {/* Enhanced fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
          
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-[scroll_80s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="group flex items-center justify-center h-32 w-72 flex-shrink-0 p-10 mx-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/20 border border-border/30 hover:border-primary/40 transition-all duration-500 hover:scale-110 hover:shadow-glow backdrop-blur-sm relative overflow-hidden"
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {client.logo.startsWith('http') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="relative z-10 max-w-full max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter brightness-0 contrast-100 group-hover:brightness-100 group-hover:contrast-125 group-hover:drop-shadow-lg"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                  />
                ) : client.logo.endsWith('.svg') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="relative z-10 max-w-full max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter brightness-0 contrast-100 group-hover:brightness-100 group-hover:contrast-125 group-hover:drop-shadow-lg"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                  />
                ) : (
                  <span className="relative z-10 text-2xl md:text-3xl font-bold text-muted-foreground/70 group-hover:text-foreground transition-all duration-500 text-center tracking-wider">
                    {client.logo}
                  </span>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="group flex items-center justify-center h-32 w-72 flex-shrink-0 p-10 mx-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/20 border border-border/30 hover:border-primary/40 transition-all duration-500 hover:scale-110 hover:shadow-glow backdrop-blur-sm relative overflow-hidden"
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {client.logo.startsWith('http') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="relative z-10 max-w-full max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter brightness-0 contrast-100 group-hover:brightness-100 group-hover:contrast-125 group-hover:drop-shadow-lg"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                  />
                ) : client.logo.endsWith('.svg') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="relative z-10 max-w-full max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter brightness-0 contrast-100 group-hover:brightness-100 group-hover:contrast-125 group-hover:drop-shadow-lg"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(0%) hue-rotate(0deg)',
                    }}
                  />
                ) : (
                  <span className="relative z-10 text-2xl md:text-3xl font-bold text-muted-foreground/70 group-hover:text-foreground transition-all duration-500 text-center tracking-wider">
                    {client.logo}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground/60 font-medium tracking-wider uppercase">
            Powering innovation together
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;