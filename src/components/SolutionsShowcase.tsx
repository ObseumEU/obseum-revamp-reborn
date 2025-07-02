import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Play, Shield, Zap, TrendingUp, FileText, Clock, Users, BarChart3 } from "lucide-react";

const SolutionsShowcase = () => {
  const { t, language } = useLanguage();

  const solutions = [
    {
      title: language === 'en' ? "Copyright Analyzer" : "Copyright Analyzer",
      subtitle: language === 'en' ? "AI-Powered Content Protection" : "AI Ochrana Obsahu",
      description: language === 'en' 
        ? "Automated OSA compliance reporting system that monitors internet copyright protected content in real-time, generating detailed legal reports and ensuring 100% regulatory compliance."
        : "Automatizovaný systém OSA compliance reportingu, který monitoruje autorsky chráněný obsah na internetu v reálném čase, generuje detailní právní reporty a zajišťuje 100% regulatorní compliance.",
      benefits: [
        {
          icon: Zap,
          title: language === 'en' ? "90% Time Reduction" : "90% Úspora Času",
          color: "text-yellow-400"
        },
        {
          icon: Shield,
          title: language === 'en' ? "100% Legal Coverage" : "100% Právní Pokrytí",
          color: "text-green-400"
        },
        {
          icon: TrendingUp,
          title: language === 'en' ? "Real-time Monitoring" : "Monitoring v Reálném Čase",
          color: "text-blue-400"
        },
        {
          icon: FileText,
          title: language === 'en' ? "Automated OSA Reports" : "Automatické OSA Reporty",
          color: "text-purple-400"
        }
      ],
      tags: ["AI/ML Integration", "OSA Compliance", "Real-time Analysis", "Legal Automation"]
    },
    {
      title: language === 'en' ? "Cadastral Process Automation" : "Automatizace Katastrálních Procesů",
      subtitle: language === 'en' ? "Complete Land Registry Automation" : "Kompletní Automatizace Katastru",
      description: language === 'en'
        ? "End-to-end automation of complex cadastral contract processing, including communication orchestration with land registry offices, legal entities, and property owners. Reduces processing time from weeks to hours while ensuring full compliance with cadastral regulations."
        : "Kompletní automatizace složitých katastrálních smluv včetně orchestrace komunikace s katastrálními úřady, právními subjekty a vlastníky nemovitostí. Zkracuje dobu zpracování z týdnů na hodiny při zajištění plné compliance s katastrálními předpisy.",
      benefits: [
        {
          icon: Clock,
          title: language === 'en' ? "85% Process Acceleration" : "85% Zrychlení Procesů",
          color: "text-blue-400"
        },
        {
          icon: Users,
          title: language === 'en' ? "Multi-party Coordination" : "Koordinace Více Stran",
          color: "text-purple-400"
        },
        {
          icon: Shield,
          title: language === 'en' ? "Legal Compliance" : "Právní Compliance",
          color: "text-green-400"
        },
        {
          icon: FileText,
          title: language === 'en' ? "Automated Documentation" : "Automatická Dokumentace",
          color: "text-orange-400"
        }
      ],
      tags: ["Process Automation", "Cadastral Integration", "Communication Orchestration", "Legal Compliance", "NLP Processing"]
    },
    {
      title: language === 'en' ? "Smart Document Processor" : "Inteligentní Procesor Dokumentů",
      subtitle: language === 'en' ? "AI Document Automation" : "AI Automatizace Dokumentů",
      description: language === 'en'
        ? "Advanced AI system that automatically processes, categorizes, and extracts key information from thousands of documents daily, reducing manual processing time by 95% while maintaining 99.9% accuracy."
        : "Pokročilý AI systém, který automaticky zpracovává, kategorizuje a extrahuje klíčové informace z tisíců dokumentů denně, snižuje čas manuálního zpracování o 95% při zachování 99,9% přesnosti.",
      benefits: [
        {
          icon: Clock,
          title: language === 'en' ? "95% Faster Processing" : "95% Rychlejší Zpracování",
          color: "text-emerald-400"
        },
        {
          icon: BarChart3,
          title: language === 'en' ? "99.9% Accuracy" : "99,9% Přesnost",
          color: "text-blue-400"
        },
        {
          icon: Users,
          title: language === 'en' ? "Multi-language Support" : "Vícejazyčná Podpora",
          color: "text-orange-400"
        },
        {
          icon: Zap,
          title: language === 'en' ? "Instant Classification" : "Okamžitá Klasifikace",
          color: "text-cyan-400"
        }
      ],
      tags: ["NLP Processing", "OCR Technology", "Azure AI", "Document Intelligence"]
    }
  ];

  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-primary font-medium">
              {language === 'en' ? "Sample Solutions" : "Ukázková Řešení"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? "AI Automation in Action" : "AI Automatizace v Praxi"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en'
              ? "Real-world implementations showcasing the transformative power of AI-driven automation"
              : "Reálné implementace ukazující transformační sílu AI-řízené automatizace"
            }
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-gradient-card border-border/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0"></div>
              
              <CardHeader className="relative z-10 pb-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                      {solution.subtitle}
                    </Badge>
                    <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                      {solution.title}
                    </CardTitle>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {solution.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-80">
                    <div className="grid grid-cols-2 gap-4">
                      {solution.benefits.map((benefit, benefitIndex) => {
                        const IconComponent = benefit.icon;
                        return (
                          <div 
                            key={benefitIndex}
                            className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center"
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;