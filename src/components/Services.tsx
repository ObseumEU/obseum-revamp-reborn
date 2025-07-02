import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brain, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Vývoj software na míru",
    description: "Každý podnik má své jedinečné potřeby a výzvy, proto se specializujeme na vývoj softwaru, který je přizpůsoben přesně vašim potřebám."
  },
  {
    icon: Brain,
    title: "Umělá inteligence",
    description: "Implementujeme umělou inteligenci do podnikových procesů a operací. Rozumíme, že AI je více než jen trend - je to způsob, jak zvýšit efektivitu, inovaci a konkurenceschopnost."
  },
  {
    icon: Shield,
    title: "Penetrační testování",
    description: "Najdeme slabá místa ve vašich systémech, aby vaše data a podnikání zůstaly v bezpečí."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            S čím vám můžeme{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              pomoci?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nabízíme komplexní služby v oblasti technologií a kybernetické bezpečnosti
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;