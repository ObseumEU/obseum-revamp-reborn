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
      badge: "AI pomocník pro malé a střední firmy",
      title: "Vraťte svému týmu",
      highlight: "čas na to důležité.",
      subtitle: "Pomáháme malým a středním firmám zbavit se zbytečné rutiny.",
      description: "Žádné složité IT projekty. Postavíme vám AI pomocníka, který odpovídá zákazníkům, třídí poptávky a hlídá administrativu — přesně tak, jak to dělá váš nejlepší kolega. Jen 24 hodin denně.",
      ctaPrimary: "Chci nezávazně probrat",
      ctaSecondary: "Jak to funguje",
      stat1: "Spokojených firem",
      stat2: "Hodin ušetřených týdně",
      stat3: "Návratnost investice",
    },
    clients: {
      title: "Naši spokojení zákazníci",
    },
    services: {
      eyebrow: "S čím vám pomůžeme",
      title: "Praktická pomoc, ne sci-fi",
      subtitle: "Nezáleží, jestli máte 5 nebo 500 lidí. Začínáme tam, kde vás to nejvíc tlačí.",
      items: {
        agents: {
          title: "Virtuální asistent pro zákazníky",
          desc: "Odpoví na e-maily a dotazy z webu i v noci, předá vám jen to, co opravdu vyžaduje vaši pozornost. Působí jako další člen týmu — jen nikdy nespí.",
        },
        workflow: {
          title: "Zbavte se přepisování",
          desc: "Údaje z e-mailů, formulářů a faktur poputují tam, kam mají — bez ručního klikání. To, co dnes zabere hodiny, se stane samo na pozadí.",
        },
        leads: {
          title: "Více poptávek od správných lidí",
          desc: "Najdeme firmy, které vaši službu potřebují, oslovíme je za vás a domluvíme schůzku. Vy už si jen sednete a podepíšete.",
        },
        content: {
          title: "Obsah, který se nezastaví",
          desc: "Z jednoho rozhovoru uděláme blog, příspěvky na sociální sítě a krátká videa. Vaše značka je vidět — bez toho, abyste tomu věnovali půl týdne.",
        },
        docs: {
          title: "Faktury a smlouvy v klidu",
          desc: "Přečteme, zkontrolujeme a uložíme každý dokument. Účetní vám poděkuje, vy už nebudete dohledávat, kde co je.",
        },
        software: {
          title: "Jednoduchý nástroj na míru",
          desc: "Když Excel nebo krabicový systém už nestačí, postavíme vám malou aplikaci přesně podle toho, jak pracujete. Bez balastu.",
        },
      },
    },
    usecases: {
      eyebrow: "Kde to dává smysl",
      title: "Inspirace z reálných firem",
      subtitle: "Vyberte si oddělení, které vás dnes nejvíc bolí. Nejspíš v něm umíme ušetřit den práce týdně.",
      items: {
        sales: {
          title: "Obchod",
          desc: "Žádná poptávka už nezapadne. AI zařadí, odpoví během minuty a připraví obchodníkovi všechno, co potřebuje k prvnímu hovoru.",
        },
        marketing: {
          title: "Marketing",
          desc: "Pravidelný obsah, reporty z kampaní a krátká videa bez toho, abyste museli najímat agenturu nebo se v tom utopit sami.",
        },
        support: {
          title: "Zákaznická podpora",
          desc: "Zákazník dostane odpověď okamžitě, vy řešíte jen ty složité případy. Spokojenost roste, e-mailová schránka přestane být noční můrou.",
        },
        ops: {
          title: "Provoz",
          desc: "Upozorníme vás, když se něco děje. Předáme informace mezi směnami a sklady tak, aby na vás nezbyl chaos po víkendu.",
        },
        finance: {
          title: "Administrativa",
          desc: "Faktury se zaúčtují samy, smlouvy se najdou za vteřinu, schvalování běží přes mobil. Konec papírování.",
        },
        management: {
          title: "Vedení firmy",
          desc: "Každé ráno krátký přehled — jak jdou obchody, co potřebuje pozornost, kde nás něco překvapilo. V jednom e-mailu, nikoliv v deseti tabulkách.",
        },
      },
    },
    process: {
      eyebrow: "Jak to spolu rozjedeme",
      title: "Žádné měsíce analýz. Začínáme jednoduše.",
      subtitle: "Krok za krokem, vždy s viditelným výsledkem. Pokud se nedohodneme, nic neplatíte.",
      steps: {
        s1: { title: "Sejdeme se na kávu", desc: "Posloucháme, jak vaše firma funguje a co vás nejvíc zdržuje. Bez prezentací a technického žargonu." },
        s2: { title: "Najdeme rychlou výhru", desc: "Vybereme jednu věc, která se vám vrátí během pár týdnů — ne za rok." },
        s3: { title: "Ukážeme, jak to bude vypadat", desc: "Žádné odhady na 50 stránek. Jednoduchý plán, cena a kdy vám to ulehčí život." },
        s4: { title: "Postavíme a spustíme", desc: "Vy pracujete dál, my to mezitím rozjedeme. Předáme vám hotové řešení a naučíme tým, jak ho používat." },
        s5: { title: "Jsme dál po ruce", desc: "Sledujeme, jestli to opravdu funguje. Postupně přidáváme další věci tam, kde to dává smysl." },
      },
    },
    tools: {
      eyebrow: "Důvěřujte zkušenostem",
      title: "Stavíme na osvědčených věcech",
      subtitle: "Nepotřebujete vědět jak to funguje uvnitř. Stejně jako u auta — důležité je, že vás spolehlivě doveze.",
    },
    faq: {
      eyebrow: "Časté otázky",
      title: "Na co se nás ptáte nejčastěji",
      items: {
        q1: { q: "Nejsme moc malí na AI?", a: "Naopak. Menší firma většinou pocítí přínos rychleji — jeden ušetřený den práce týdně je u vás vidět hned." },
        q2: { q: "Kolik to bude stát?", a: "Záleží, co se rozhodneme řešit. Většina projektů se vrátí do 3–6 měsíců. Konkrétní cenu řekneme po první konzultaci — vždy předem a bez překvapení." },
        q3: { q: "Co když tomu nerozumíme?", a: "To je v pořádku — od toho jsme my. Mluvíme česky, vysvětlíme všechno na vašich konkrétních příkladech. Žádné cizí zkratky." },
        q4: { q: "Jak dlouho to trvá?", a: "Jednodušší věci máte hotové za 2–4 týdny. Větší projekty děláme po kouskách, abyste přínos cítili hned od začátku." },
        q5: { q: "A naše data? Bezpečnost?", a: "Vaše data zůstávají vaše — pracujeme dle GDPR, s jasným přístupem a smlouvou. Stejně přísně, jako řešíte účetnictví." },
      },
    },
    agent: {
      eyebrow: "Jak váš AI pomocník pracuje",
      title1: "Jako kolega,",
      title2: "který nikdy nespí.",
      subtitle: "Představte si zaměstnance, který zvládne odpovědět na e-mail, zapsat schůzku do kalendáře a předat informaci kolegovi — a to vše během vteřiny, ve dne v noci.",
      col1: "Co zachytí",
      col2: "Co s tím udělá",
      kpi1: "Reakce na zákazníka",
      kpi2: "K dispozici",
      kpi3: "Spolehlivost",
      kpi4: "Vše dle GDPR",
    },
    flow: {
      eyebrow: "Den ve firmě — před a po",
      title1: "Stejný den.",
      title2: "Úplně jiný pocit.",
      subtitle: "Podívejte se, jak vypadá běžný den ve firmě, než nasadíme AI pomocníka — a jak vypadá potom.",
    },
    metrics: {
      m1: "Hodin ušetřených týdně",
      m2: "Více domluvených schůzek",
      m3: "Spokojených firem",
      m4: "Doporučení od klientů",
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
      title: "Our happy clients",
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
