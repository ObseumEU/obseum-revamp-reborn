import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'cz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'We specialize in',
    'hero.highlight': 'software development',
    'hero.subtitle': 'AI implementation and penetration testing',
    'hero.description': 'With over 10 years of experience in the industry. We will help you innovate your business too.',
    'hero.cta': 'Contact us',
    'hero.services': 'Our services',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive technology solutions for your business',
    'services.software.title': 'Software Development',
    'services.software.desc': 'Custom applications and systems tailored to your business needs.',
    'services.ai.title': 'Artificial Intelligence',
    'services.ai.desc': 'AI integration and automation solutions to optimize your processes.',
    'services.security.title': 'Penetration Testing',
    'services.security.desc': 'Comprehensive security audits to protect your digital assets.',
    
    // Clients
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Companies that trust us',
    
    // Footer
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.description': 'We specialize in software development, AI implementation and penetration testing. We have over 10 years of experience in the industry.'
  },
  cz: {
    // Header
    'nav.home': 'Úvod',
    'nav.services': 'Služby',
    'nav.about': 'O nás',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Specializujeme se na',
    'hero.highlight': 'vývoj software',
    'hero.subtitle': 'implementaci AI a penetrační testování',
    'hero.description': 'Máme přes 10 let zkušeností v oboru. Pomůžeme i Vám s inovací Vašeho podnikání.',
    'hero.cta': 'Kontaktujte nás',
    'hero.services': 'Naše služby',
    
    // Services
    'services.title': 'Naše služby',
    'services.subtitle': 'Komplexní technologická řešení pro vaše podnikání',
    'services.software.title': 'Vývoj software',
    'services.software.desc': 'Aplikace a systémy na míru vašim obchodním potřebám.',
    'services.ai.title': 'Umělá inteligence',
    'services.ai.desc': 'Integrace AI a automatizační řešení pro optimalizaci procesů.',
    'services.security.title': 'Penetrační testování',
    'services.security.desc': 'Komplexní bezpečnostní audity pro ochranu digitálních aktiv.',
    
    // Clients
    'clients.title': 'Naši zákazníci',
    'clients.subtitle': 'Společnosti, které nám věří',
    
    // Footer
    'footer.services': 'Služby',
    'footer.contact': 'Kontakt',
    'footer.copyright': 'Všechna práva vyhrazena.',
    'footer.description': 'Specializujeme se na vývoj software, implementaci AI a penetrační testování. Máme přes 10 let zkušeností v oboru.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('cz');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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