import { useLanguage } from "@/contexts/LanguageContext";
import cancomLogo from "@/assets/cancom-logo.svg";

const clients = [
  { name: "O2", logo: "O₂" },
  { name: "ČSOB", logo: "ČSOB" },
  { name: "Heimstaden", logo: "Heimstaden" },
  { name: "Home Credit", logo: "Home Credit" },
  { name: "Innogy", logo: "Innogy" },
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-24 w-full p-6 rounded-2xl bg-gradient-card border border-border/30"
            >
              {client.logo.startsWith('http') ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-12 w-auto object-contain opacity-60"
                />
              ) : client.logo.endsWith('.svg') ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-12 w-auto object-contain opacity-60 text-muted-foreground"
                />
              ) : (
                <span className="text-lg md:text-xl font-bold text-muted-foreground text-center">
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