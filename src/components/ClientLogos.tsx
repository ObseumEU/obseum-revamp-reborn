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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-primary font-medium">Our Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('clients.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex items-center justify-center h-28 w-64 flex-shrink-0 p-8 mx-4 rounded-3xl bg-gradient-subtle border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                {client.logo.startsWith('http') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-16 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 brightness-0 invert-[0.6] dark:invert-[0.7]"
                  />
                ) : client.logo.endsWith('.svg') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-16 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 brightness-0 invert-[0.6] dark:invert-[0.7]"
                  />
                ) : (
                  <span className="text-xl md:text-2xl font-bold text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-300 text-center">
                    {client.logo}
                  </span>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex items-center justify-center h-28 w-64 flex-shrink-0 p-8 mx-4 rounded-3xl bg-gradient-subtle border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                {client.logo.startsWith('http') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-16 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 brightness-0 invert-[0.6] dark:invert-[0.7]"
                  />
                ) : client.logo.endsWith('.svg') ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-16 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 brightness-0 invert-[0.6] dark:invert-[0.7]"
                  />
                ) : (
                  <span className="text-xl md:text-2xl font-bold text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-300 text-center">
                    {client.logo}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;