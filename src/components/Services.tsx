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