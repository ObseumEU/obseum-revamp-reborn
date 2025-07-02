import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Brain, Shield } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('services.software.title'),
      description: t('services.software.desc')
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.desc')
    },
    {
      icon: Shield,
      title: t('services.security.title'),
      description: t('services.security.desc')
    }
  ];
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-border/50 bg-gradient-card backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <div className="text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More →
                    </div>
                  </div>
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