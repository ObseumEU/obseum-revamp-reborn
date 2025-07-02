import { useLanguage } from "@/contexts/LanguageContext";
import cancomLogo from "@/assets/cancom-logo.svg";
import o2Logo from "@/assets/O2-Logo-9.svg";
import heimLogo from "@/assets/HEIM.svg";
import homeCreditLogo from "@/assets/Home_Credit__Finance_Bank.svg";
import innogyLogo from "@/assets/Innogy_Logo.svg";

const clients = [
  { name: "O2", logo: o2Logo },
  { name: "ČSOB", logo: "ČSOB" },
  { name: "Heimstaden", logo: heimLogo },
  { name: "Home Credit", logo: homeCreditLogo },
  { name: "Innogy", logo: innogyLogo },
  { name: "Cancom", logo: cancomLogo },
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-28 w-full p-8 rounded-3xl bg-gradient-subtle border border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              {client.logo.startsWith('http') ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              ) : client.logo.endsWith('.svg') ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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
    </section>
  );
};

export default ClientLogos;