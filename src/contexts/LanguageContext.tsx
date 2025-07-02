import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'cz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Solutions", 
      about: "About",
      contact: "Get Started"
    },
    hero: {
      title: "Enterprise Technology",
      highlight: "Solutions",
      subtitle: "Custom Software | AI Integration | Security Excellence",
      description: "We empower enterprises with cutting-edge technology solutions, delivering scalable software development, intelligent AI integration, and comprehensive cybersecurity services.",
      cta: "Schedule Consultation",
      services: "Explore Solutions"
    },
    services: {
      title: "Enterprise Solutions",
      subtitle: "Comprehensive technology services designed for corporate excellence",
      software: {
        title: "Custom Software Development",
        desc: "Enterprise-grade applications and scalable solutions built with cutting-edge technologies, designed to optimize your business operations and drive digital transformation."
      },
      ai: {
        title: "AI & Machine Learning",
        desc: "Strategic AI implementation and intelligent automation solutions that enhance decision-making, streamline operations, and unlock new business opportunities."
      },
      security: {
        title: "Cybersecurity & Penetration Testing",
        desc: "Comprehensive security assessments, vulnerability testing, and robust protection strategies to safeguard your critical business assets and data."
      }
    },
    clients: {
      title: "Trusted by Industry Leaders",
      subtitle: "Partnering with leading enterprises across telecommunications, finance, real estate, and technology sectors"
    },
    featured: {
      title: "Featured Solution",
      subtitle: "Real-world AI innovation delivering measurable business impact",
      project: {
        title: "Copyright Analyzer",
        subtitle: "AI-Powered Content Protection",
        description: "Automated video analysis system that instantly identifies copyrighted audio content, recognizes artists and distributors, saving 90% analysis time while ensuring full legal compliance.",
        benefits: {
          automation: "90% Time Reduction",
          compliance: "100% Legal Coverage", 
          integration: "Seamless IT Integration",
          savings: "Significant Cost Savings"
        }
      }
    },
    footer: {
      description: "Your strategic technology partner for enterprise digital transformation and innovation excellence.",
      services: "Solutions",
      contact: "Contact",
      copyright: "All rights reserved."
    }
  },
  cz: {
    nav: {
      home: "Domů",
      services: "Řešení",
      about: "O nás", 
      contact: "Kontakt"
    },
    hero: {
      title: "Podniková Technologická",
      highlight: "Řešení",
      subtitle: "Vlastní Software | AI Integrace | Bezpečnostní Excellence",
      description: "Posilujeme podniky špičkovými technologickými řešeními, dodáváme škálovatelný vývoj softwaru, inteligentní AI integraci a komplexní kybernetické bezpečnostní služby.",
      cta: "Naplánovat Konzultaci",
      services: "Prozkoumat Řešení"
    },
    services: {
      title: "Podniková Řešení",
      subtitle: "Komplexní technologické služby navržené pro korporátní excelenci",
      software: {
        title: "Vývoj Vlastního Softwaru",
        desc: "Podnikové aplikace a škálovatelná řešení vytvořená s nejmodernějšími technologiemi, navržená k optimalizaci vašich obchodních operací a řízení digitální transformace."
      },
      ai: {
        title: "AI & Strojové Učení", 
        desc: "Strategická implementace AI a řešení inteligentní automatizace, která zlepšují rozhodování, zefektivňují operace a odemykají nové obchodní příležitosti."
      },
      security: {
        title: "Kybernetická Bezpečnost & Penetrační Testování",
        desc: "Komplexní bezpečnostní hodnocení, testování zranitelností a robustní ochranné strategie k zabezpečení vašich kritických obchodních aktiv a dat."
      }
    },
    clients: {
      title: "Důvěra Lídrů Odvětví",
      subtitle: "Spolupráce s předními podniky v telekomunikacích, financích, nemovitostech a technologických sektorech"
    },
    featured: {
      title: "Ukázkové Řešení",
      subtitle: "Reálná AI inovace přinášející měřitelný obchodní dopad",
      project: {
        title: "Copyright Analyzer",
        subtitle: "AI Ochrana Obsahu",
        description: "Automatizovaný systém analýzy videí, který okamžitě identifikuje autorsky chráněný audio obsah, rozpozná interprety a distributory, šetří 90% času analýzy při zajištění plné právní compliance.",
        benefits: {
          automation: "90% Úspora Času",
          compliance: "100% Právní Pokrytí",
          integration: "Bezproblémová IT Integrace", 
          savings: "Významné Úspory Nákladů"
        }
      }
    },
    footer: {
      description: "Váš strategický technologický partner pro podnikovou digitální transformaci a inovační excelenci.",
      services: "Řešení",
      contact: "Kontakt",
      copyright: "Všechna práva vyhrazena."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('cz');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};