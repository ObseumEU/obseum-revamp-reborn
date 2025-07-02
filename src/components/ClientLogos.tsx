import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
  { name: "O2", logo: "O₂" },
  { name: "ČSOB", logo: "ČSOB" },
  { name: "Heimstaden", logo: "Heimstaden" },
  { name: "Home Credit", logo: "Home Credit" },
  { name: "Innogy", logo: "Innogy" },
  { 
    name: "Cancom", 
    logo: (
      <svg width="80" height="32" viewBox="0 0 80 32" className="fill-current">
        <circle cx="16" cy="16" r="12" className="fill-primary/20"/>
        <rect x="6" y="6" width="20" height="20" rx="4" className="fill-primary/40"/>
        <text x="35" y="20" className="fill-current text-sm font-bold">CANCOM</text>
      </svg>
    )
  },
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
              {typeof client.logo === 'string' && client.logo.startsWith('http') ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-12 w-auto object-contain opacity-60"
                />
              ) : typeof client.logo === 'string' ? (
                <span className="text-lg md:text-xl font-bold text-muted-foreground text-center">
                  {client.logo}
                </span>
              ) : (
                <div className="opacity-60 text-muted-foreground">
                  {client.logo}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;