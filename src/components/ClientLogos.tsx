const clients = [
  { name: "O2", logo: "O₂" },
  { name: "ČSOB", logo: "ČSOB" },
  { name: "Heimstaden", logo: "Heimstaden" },
  { name: "Home Credit", logo: "Home Credit" },
  { name: "Innogy", logo: "innogy" }
];

const ClientLogos = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Naši zákazníci
          </h2>
          <p className="text-xl text-muted-foreground">
            Společnosti, které nám věří
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 rounded-lg bg-card/50 border border-border/30 hover:bg-card transition-colors duration-300"
            >
              <span className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;