import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Play, Shield, Zap, TrendingUp } from "lucide-react";

const FeaturedProject = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      title: t('featured.project.benefits.automation'),
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: t('featured.project.benefits.compliance'),
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      title: t('featured.project.benefits.integration'),
      color: "text-blue-400"
    },
    {
      icon: Play,
      title: t('featured.project.benefits.savings'),
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-primary font-medium">{t('featured.title')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('featured.subtitle')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-card border-border/30 overflow-hidden group hover:shadow-premium transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
            
            <CardHeader className="relative z-10 pb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                    {t('featured.project.subtitle')}
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {t('featured.project.title')}
                  </CardTitle>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {t('featured.project.description')}
                  </p>
                </div>
                
                <div className="w-full md:w-80">
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => {
                      const IconComponent = benefit.icon;
                      return (
                        <div 
                          key={index}
                          className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center group-hover:bg-background/70 transition-all duration-300"
                        >
                          <IconComponent className={`h-6 w-6 mx-auto mb-2 ${benefit.color}`} />
                          <p className="text-sm font-medium">{benefit.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 pt-0">
              <div className="border-t border-border/30 pt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      AI/ML Integration
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Docker Deployment
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/50 border-secondary/30">
                      REST API
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;