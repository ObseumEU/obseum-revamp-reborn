import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'cz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  cz: {
    nav: {
      home: "Úvod",
      services: "Služby",
      usecases: "Využití",
      process: "Postup",
      about: "O nás",
      contact: "Kontakt",
    },
    hero: {
      badge: "AI automatizace pro B2B i SMB",
      title: "Automatizujte rutinu.",
      highlight: "Pracujte chytřeji s AI.",
      subtitle: "Implementace AI a procesní automatizace pro malé, střední i velké firmy",
      description: "Pomáháme firmám reálně nasadit AI – ne jako experiment, ale jako nástroj, který šetří hodiny práce týdně, zrychluje obchod a snižuje provozní náklady.",
      ctaPrimary: "Nezávazná konzultace",
      ctaSecondary: "Jak postupujeme",
      stat1: "AI projektů nasazeno",
      stat2: "Průměrná úspora času",
      stat3: "Spokojených klientů",
    },
    clients: {
      title: "Naši spokojení zákazníci",
    },
    services: {
      eyebrow: "Co umíme",
      title: "AI a automatizace na míru",
      subtitle: "Od obsahu a leadů přes interní procesy až po samostatné AI agenty.",
      items: {
        agents: {
          title: "AI agenti a asistenti",
          desc: "Stavíme AI asistenty napojené na vaše data, CRM, dokumenty i nástroje. Odpovídají zákazníkům, kvalifikují leady a samostatně provádí úkoly.",
        },
        workflow: {
          title: "Procesní automatizace",
          desc: "Propojujeme vaše systémy přes n8n, Make a vlastní integrace. Z opakované ruční práce se stává tichý workflow na pozadí.",
        },
        leads: {
          title: "Lead generation & LinkedIn",
          desc: "Automatizovaná akvizice na LinkedIn a webu: vyhledání rozhodovatelů, personalizované oslovení, sekvence a předání kvalifikovaného leadu do CRM.",
        },
        content: {
          title: "Obsah a video s AI",
          desc: "Škálovatelná produkce B2B obsahu, blogů, kampaní a krátkých videí. Z jednoho natočeného materiálu desítky výstupů pro distribuci.",
        },
        docs: {
          title: "Zpracování dokumentů",
          desc: "OCR + LLM pipeline na faktury, smlouvy a formuláře. Extrakce dat, kontrola, schvalování a zápis přímo do vašich systémů.",
        },
        software: {
          title: "AI software na míru",
          desc: "Vyvíjíme webové aplikace, dashboardy a interní nástroje s AI uvnitř. Tam, kde běžné platformy nestačí.",
        },
      },
    },
    usecases: {
      eyebrow: "Kde AI dává smysl",
      title: "Využití podle oddělení",
      subtitle: "Největší dopad má AI tam, kde se opakují úkoly a informace ručně putují mezi lidmi a systémy.",
      items: {
        sales: {
          title: "Obchod",
          desc: "Třídění poptávek, zápis do CRM, automatický follow-up, příprava podkladů pro obchodníky a scoring leadů.",
        },
        marketing: {
          title: "Marketing",
          desc: "Generování a publikace obsahu, kampaně, reporting napříč kanály, krátká videa a sociální upoutávky.",
        },
        support: {
          title: "Zákaznická podpora",
          desc: "AI asistent na první linii, návrhy odpovědí, třídění tiketů a okamžitá reakce na opakované dotazy.",
        },
        ops: {
          title: "Provoz & výroba",
          desc: "Zpracování výrobních dat, notifikace o výkyvech, evidence úkolů a předávání informací mezi týmy.",
        },
        finance: {
          title: "Administrativa & finance",
          desc: "Faktury, smlouvy, schvalování, interní žádosti a opakující se evidence bez ručního přepisování.",
        },
        management: {
          title: "Management & reporting",
          desc: "Sjednocení dat z více systémů, pravidelné přehledy, upozornění na změny a podklady pro rozhodování.",
        },
      },
    },
    process: {
      eyebrow: "Jak spolupracujeme",
      title: "Od konzultace po dlouhodobý rozvoj",
      subtitle: "Žádné prodávání nástrojů. Začínáme od vašeho byznysu a končíme měřitelným dopadem.",
      steps: {
        s1: { title: "Konzultace", desc: "Pochopíme, jak firma funguje, co používáte a kde vzniká zbytečná rutina." },
        s2: { title: "Analýza příležitostí", desc: "Vybereme procesy s největším poměrem dopad / náklady na nasazení." },
        s3: { title: "Návrh řešení", desc: "Připravíme architekturu, technologie, integrace a očekávané přínosy." },
        s4: { title: "Vývoj & nasazení", desc: "Postavíme, otestujeme a plynule nasadíme do provozu – bez výpadku." },
        s5: { title: "Provoz & rozvoj", desc: "Měříme výsledky, ladíme a postupně rozšiřujeme automatizace dál." },
      },
    },
    tools: {
      eyebrow: "Stack",
      title: "Nástroje, na kterých stavíme",
      subtitle: "Kombinujeme to nejlepší z open-source, no-code a vlastního vývoje.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Časté otázky",
      items: {
        q1: { q: "Jak poznám, že se AI v našem případě vyplatí?", a: "Během úvodní konzultace projdeme vaše procesy a otevřeně řekneme, kde má automatizace největší přínos – a kde ne." },
        q2: { q: "Jak složité je napojení na naše systémy?", a: "Stavíme nad tím, co už používáte: web, e-shop, CRM, ERP, marketingové nástroje. Nic netlačíme měnit zbytečně." },
        q3: { q: "Jak dlouho trvá nasazení?", a: "Jednodušší automatizace běží během pár týdnů. Komplexnější projekty po fázích – vždy víte, co a kdy." },
        q4: { q: "Budeme uzamčeni v jednom nástroji?", a: "Ne. Pracujeme s otevřenými technologiemi a integracemi, aby řešení bylo dlouhodobě udržitelné." },
        q5: { q: "Co bezpečnost a GDPR?", a: "Bezpečnost a přístupová práva řešíme od návrhu. Data zůstávají pod vaší kontrolou, v souladu s GDPR." },
      },
    },
    agent: {
      eyebrow: "Jak AI agent funguje",
      title1: "Vstup, myšlení,",
      title2: "akce napříč systémy.",
      subtitle: "AI agent přijímá podněty z různých kanálů, rozhoduje na základě vašich dat a sám vykonává úkoly ve vašich nástrojích.",
      col1: "Vstupy",
      col2: "Akce & nástroje",
      kpi1: "Reakce",
      kpi2: "Dostupnost",
      kpi3: "Uptime",
      kpi4: "Compliance",
    },
    flow: {
      eyebrow: "Automatizace v praxi",
      title1: "Z e-mailu lead v CRM",
      title2: "za 2 vteřiny.",
      subtitle: "Ukázka skutečné pipeline: trigger → AI klasifikace → zápis do CRM → personalizovaná odpověď → notifikace týmu.",
    },
    metrics: {
      m1: "Průměrná úspora času",
      m2: "Růst konverzí",
      m3: "Nasazených workflow",
      m4: "Aktivních klientů",
    },
    contact: {
      eyebrow: "Pojďme to probrat",
      title: "Domluvte si nezávaznou konzultaci",
      subtitle: "Řekněte nám, kde dnes ztrácíte čas. Vrátíme se s konkrétním návrhem, kde AI dává smysl.",
      name: "Jméno a příjmení",
      company: "Firma",
      email: "E-mail",
      message: "S čím vám můžeme pomoci?",
      submit: "Odeslat poptávku",
      phone: "Zavolejte nám",
      mail: "Napište nám",
      address: "Adresa",
    },
    footer: {
      tagline: "Strategický partner pro AI automatizaci a digitální transformaci.",
      services: "Služby",
      company: "Společnost",
      copyright: "Všechna práva vyhrazena.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      usecases: "Use cases",
      process: "Process",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "AI automation for B2B & SMB",
      title: "Automate the routine.",
      highlight: "Work smarter with AI.",
      subtitle: "AI implementation and process automation for small, mid and large companies",
      description: "We help companies actually deploy AI – not as an experiment, but as a tool that saves hours every week, accelerates sales and lowers operating cost.",
      ctaPrimary: "Free consultation",
      ctaSecondary: "How we work",
      stat1: "AI projects shipped",
      stat2: "Average time saved",
      stat3: "Happy clients",
    },
    clients: {
      title: "Trusted by leaders across industries",
    },
    services: {
      eyebrow: "What we do",
      title: "AI & automation, tailored",
      subtitle: "From content and leads to internal processes and autonomous AI agents.",
      items: {
        agents: {
          title: "AI agents & assistants",
          desc: "Custom AI assistants wired into your data, CRM, docs and tools. They answer customers, qualify leads and execute tasks autonomously.",
        },
        workflow: {
          title: "Process automation",
          desc: "We connect your systems via n8n, Make and custom integrations. Repetitive manual work becomes a quiet background workflow.",
        },
        leads: {
          title: "Lead gen & LinkedIn",
          desc: "Automated LinkedIn and web acquisition: find decision makers, personalize outreach, run sequences, hand qualified leads to CRM.",
        },
        content: {
          title: "Content & video with AI",
          desc: "Scalable B2B content, blogs, campaigns and short-form video. One shoot, dozens of distribution-ready outputs.",
        },
        docs: {
          title: "Document processing",
          desc: "OCR + LLM pipelines for invoices, contracts and forms. Extract, validate, approve and push straight into your systems.",
        },
        software: {
          title: "Custom AI software",
          desc: "We build web apps, dashboards and internal tools with AI inside – when off-the-shelf platforms aren't enough.",
        },
      },
    },
    usecases: {
      eyebrow: "Where AI pays off",
      title: "Use cases by department",
      subtitle: "AI delivers most where work repeats and information moves manually between people and systems.",
      items: {
        sales: { title: "Sales", desc: "Inbound triage, CRM logging, auto follow-ups, briefing docs for reps and lead scoring." },
        marketing: { title: "Marketing", desc: "Content generation and publishing, campaigns, cross-channel reporting, short-form video." },
        support: { title: "Customer support", desc: "First-line AI assistant, reply drafting, ticket triage and instant answers to repeated questions." },
        ops: { title: "Operations", desc: "Production data processing, alerts on anomalies, task tracking and handoffs between teams." },
        finance: { title: "Finance & admin", desc: "Invoices, contracts, approvals, internal requests and recurring records without manual re-typing." },
        management: { title: "Management & reporting", desc: "Unified data from multiple systems, recurring reports, change alerts and decision-ready briefings." },
      },
    },
    process: {
      eyebrow: "How we work",
      title: "From consultation to long-term growth",
      subtitle: "No tool-selling. We start from your business and end with measurable impact.",
      steps: {
        s1: { title: "Consultation", desc: "We learn how your company operates, what you use and where waste lives." },
        s2: { title: "Opportunity analysis", desc: "We pick processes with the best impact / cost-to-ship ratio." },
        s3: { title: "Solution design", desc: "Architecture, tech stack, integrations and expected outcomes – in plain language." },
        s4: { title: "Build & deploy", desc: "We build, test and roll out smoothly into operations – without downtime." },
        s5: { title: "Run & expand", desc: "We measure results, tune the system and gradually expand automation further." },
      },
    },
    tools: {
      eyebrow: "Stack",
      title: "What we build on",
      subtitle: "A mix of best-in-class open-source, no-code and custom development.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      items: {
        q1: { q: "How do I know AI will pay off for us?", a: "In the first consultation we walk through your processes and openly say where automation wins – and where it doesn't." },
        q2: { q: "How hard is integration with our systems?", a: "We build on what you already use: website, e-shop, CRM, ERP, marketing tools. No change for the sake of change." },
        q3: { q: "How long does deployment take?", a: "Simpler automations ship in a few weeks. Bigger projects roll out in phases with a clear timeline." },
        q4: { q: "Will we be locked into one vendor?", a: "No. We work with open technologies and integrations so the solution stays maintainable long-term." },
        q5: { q: "What about security and GDPR?", a: "Security and access control are designed in from day one. Your data stays under your control, GDPR-compliant." },
      },
    },
    agent: {
      eyebrow: "How an AI agent works",
      title1: "Input, reasoning,",
      title2: "action across systems.",
      subtitle: "An AI agent receives signals from multiple channels, decides based on your data and acts inside your tools — autonomously.",
      col1: "Inputs",
      col2: "Actions & tools",
      kpi1: "Response",
      kpi2: "Availability",
      kpi3: "Uptime",
      kpi4: "Compliance",
    },
    flow: {
      eyebrow: "Automation in practice",
      title1: "From email to CRM lead",
      title2: "in 2 seconds.",
      subtitle: "A real pipeline: trigger → AI classification → CRM write → personalized reply → team notification.",
    },
    metrics: {
      m1: "Average time saved",
      m2: "Conversion lift",
      m3: "Workflows shipped",
      m4: "Active clients",
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Book a free consultation",
      subtitle: "Tell us where your team loses time. We'll come back with a concrete proposal of where AI fits.",
      name: "Full name",
      company: "Company",
      email: "Email",
      message: "How can we help?",
      submit: "Send request",
      phone: "Call us",
      mail: "Email us",
      address: "Address",
    },
    footer: {
      tagline: "Strategic partner for AI automation and digital transformation.",
      services: "Services",
      company: "Company",
      copyright: "All rights reserved.",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('cz');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) value = value?.[k];
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
