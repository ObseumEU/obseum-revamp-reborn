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
              className="group flex items-center justify-center p-8 rounded-2xl bg-gradient-card border border-border/30 hover:border-primary/30 hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              {client.logo.startsWith('http') ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                />
              ) : (
                <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110">
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