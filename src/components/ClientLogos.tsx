import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
  { name: "O2", logo: "O₂" },
  { name: "ČSOB", logo: "ČSOB" },
  { name: "Heimstaden", logo: "Heimstaden" },
  { name: "Home Credit", logo: "Home Credit" },
  { name: "Innogy", logo: "innogy" },
  { name: "Cancom", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
  { name: "Mafra", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" }
];

const ClientLogos = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('clients.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 rounded-lg bg-card/50 border border-border/30 hover:bg-card transition-colors duration-300"
            >
              {client.logo.startsWith('http') ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">
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