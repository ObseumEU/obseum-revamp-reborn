import { useLanguage } from "@/contexts/LanguageContext";
import cancomLogo from "@/assets/Cancom_logo_bw.svg";
import o2Logo from "@/assets/O2-Logo-9.svg";
import heimLogo from "@/assets/HEIM.svg";
import homeCreditLogo from "@/assets/Home_Credit_logo.svg";
import innogyLogo from "@/assets/Innogy_Logo.svg";
import csobLogo from "@/assets/csob-1.svg";
import mycroftmindLogo from "@/assets/mycroftmind.svg";
import idnesLogo from "@/assets/idnes.svg";

const clients = [
  { name: "O2", logo: o2Logo },
  { name: "ČSOB", logo: csobLogo },
  { name: "Heimstaden", logo: heimLogo },
  { name: "Home Credit", logo: homeCreditLogo },
  { name: "Innogy", logo: innogyLogo },
  { name: "Cancom", logo: cancomLogo },
  { name: "MycroftMind", logo: mycroftmindLogo },
  { name: "Idnes", logo: idnesLogo }
];

const ClientLogos = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground/80 font-medium mb-4 block">
            {t('clients.title')}
          </span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-[scroll_50s_linear_infinite] md:animate-[scroll_70s_linear_infinite] will-change-transform items-center">
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 md:w-48 flex-shrink-0 mx-3 sm:mx-6 md:mx-8 group cursor-default"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-10 sm:max-h-12 w-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 filter brightness-0 invert-[0.7] group-hover:invert-[0.8]"
                />
              </div>
            ))}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 md:w-48 flex-shrink-0 mx-3 sm:mx-6 md:mx-8 group cursor-default"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-10 sm:max-h-12 w-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 filter brightness-0 invert-[0.7] group-hover:invert-[0.8]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
