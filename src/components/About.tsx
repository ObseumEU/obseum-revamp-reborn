import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const { t, language } = useLanguage();
  
  const stats = [
    { value: "10+", label: language === 'en' ? "Years Experience" : "Let Zkušeností" },
    { value: "100+", label: language === 'en' ? "Projects Delivered" : "Dokončených Projektů" },
    { value: "50+", label: language === 'en' ? "Enterprise Clients" : "Podnikových Klientů" },
    { value: "24/7", label: language === 'en' ? "Technical Support" : "Technická Podpora" }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Azure", 
    "Docker", "Kubernetes", "TensorFlow", "PyTorch", "PostgreSQL", "MongoDB"
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-primary font-medium">
              {language === 'en' ? "About Obseum" : "O Společnosti Obseum"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? "Excellence in Enterprise Technology" : "Excellence v Podnikových Technologiích"}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? "We are a leading technology consulting firm specializing in enterprise-grade solutions that transform businesses and drive digital innovation across industries."
              : "Jsme přední technologická poradenská firma specializující se na podniková řešení, která transformují firmy a řídí digitální inovace napříč odvětvími."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              {language === 'en' ? "Our Approach" : "Náš Přístup"}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {language === 'en'
                ? "We combine deep technical expertise with strategic business insight to deliver solutions that not only meet your current needs but position your organization for future growth and success."
                : "Kombinujeme hluboké technické znalosti se strategickým obchodním pohledem, abychom dodali řešení, která nejen splňují vaše současné potřeby, ale také připravují vaši organizaci na budoucí růst a úspěch."
              }
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === 'en' ? "Strategic Consultation" : "Strategické Poradenství"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'en'
                      ? "Deep analysis of your business requirements and technology roadmap"
                      : "Hluboká analýza vašich obchodních požadavků a technologické strategie"
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === 'en' ? "Agile Implementation" : "Agilní Implementace"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'en'
                      ? "Rapid development cycles with continuous feedback and optimization"
                      : "Rychlé vývojové cykly s průběžným zpětným vazebním a optimalizací"
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {language === 'en' ? "Ongoing Support" : "Průběžná Podpora"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'en'
                      ? "Comprehensive maintenance and scaling support for long-term success"
                      : "Komplexní údržba a podpora škálování pro dlouhodobý úspěch"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-card border-border/50 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'en' ? "Key Metrics" : "Klíčové Metriky"}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">
            {language === 'en' ? "Technologies We Master" : "Technologie, Které Ovládáme"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-base border-primary/30 hover:bg-primary/10 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;