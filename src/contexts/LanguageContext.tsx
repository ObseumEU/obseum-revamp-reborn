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
    podcast: {
      eyebrow: "Podcast",
      title: "Nechce se vám číst? Poslechněte si nás.",
      subtitle: "6 minut, které vám ušetří měsíce zkoumání, jak AI funguje ve firmách jako ta vaše.",
      episodeTitle: "AI agenti ukončí éru digitálních kurýrů",
      episodeDesc: "Jak přestat kopírovat data z okna do okna a nechat stroj dělat rutinu za vás.",
      duration: "5:57",
      play: "Přehrát",
      pause: "Pozastavit",
      seekLabel: "Pozice v audiu",
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
      badge: "AI helper for small & mid-sized businesses",
      title: "Give your team back",
      highlight: "time for what matters.",
      subtitle: "We help small and mid-sized companies get rid of pointless routine.",
      description: "No complicated IT projects. We'll set up an AI helper that answers customers, sorts inquiries and handles paperwork — like your best employee. Only it never sleeps.",
      ctaPrimary: "Book a friendly chat",
      ctaSecondary: "How it works",
      stat1: "Happy companies",
      stat2: "Hours saved per week",
      stat3: "Return on investment",
    },
    clients: {
      title: "Our happy clients",
    },
    services: {
      eyebrow: "How we can help",
      title: "Practical help, not sci-fi",
      subtitle: "Whether you have 5 or 500 people. We start where it hurts the most.",
      items: {
        agents: {
          title: "Virtual assistant for customers",
          desc: "Answers emails and website inquiries even at night, only forwards what truly needs your attention. Acts like another team member — one that never sleeps.",
        },
        workflow: {
          title: "Stop the copy-pasting",
          desc: "Data from emails, forms and invoices flows where it should — no manual clicking. What takes hours today happens by itself in the background.",
        },
        leads: {
          title: "More inquiries from the right people",
          desc: "We find companies that need what you offer, reach out for you and book the meeting. You just sit down and close.",
        },
        content: {
          title: "Content that never stops",
          desc: "From a single conversation we make a blog post, social posts and short videos. Your brand stays visible — without you losing half a week to it.",
        },
        docs: {
          title: "Invoices and contracts under control",
          desc: "We read, check and file every document. Your accountant will thank you, you won't be hunting through folders anymore.",
        },
        software: {
          title: "Simple custom tool",
          desc: "When Excel or off-the-shelf software no longer cuts it, we build a small app exactly the way you work. No bloat.",
        },
      },
    },
    usecases: {
      eyebrow: "Where it pays off",
      title: "Real-world inspiration",
      subtitle: "Pick the area that hurts you most today. Chances are we can save you a workday a week there.",
      items: {
        sales: { title: "Sales", desc: "No inquiry gets lost. AI sorts it, replies within a minute and prepares everything your sales rep needs for the first call." },
        marketing: { title: "Marketing", desc: "Regular content, campaign reports and short videos — without hiring an agency or burning out doing it yourself." },
        support: { title: "Customer support", desc: "Customers get an instant answer, you only deal with the tricky cases. Satisfaction goes up, the inbox stops being a nightmare." },
        ops: { title: "Operations", desc: "We alert you when something happens. Information flows between shifts and warehouses so Monday morning isn't chaos." },
        finance: { title: "Admin", desc: "Invoices file themselves, contracts found in seconds, approvals on your phone. No more paperwork." },
        management: { title: "Leadership", desc: "Every morning a short summary — how sales are going, what needs your attention. One email, not ten spreadsheets." },
      },
    },
    process: {
      eyebrow: "How we start together",
      title: "No months of analysis. We start small.",
      subtitle: "Step by step, always with a visible result. If we don't agree, you pay nothing.",
      steps: {
        s1: { title: "Grab a coffee", desc: "We listen to how your business runs and what slows you down. No slides, no jargon." },
        s2: { title: "Find a quick win", desc: "We pick one thing that pays for itself in weeks — not a year." },
        s3: { title: "Show you the plan", desc: "No 50-page estimates. A simple plan, a price and when it will make your life easier." },
        s4: { title: "Build and launch", desc: "You keep working, we get it running. We hand it over ready and train the team." },
        s5: { title: "We stay close", desc: "We track that it really works. We gradually add more where it makes sense." },
      },
    },
    tools: {
      eyebrow: "Trust the experience",
      title: "Built on what's proven",
      subtitle: "You don't need to know what's under the hood. Just like a car — what matters is that it gets you there reliably.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "What people ask us most",
      items: {
        q1: { q: "Aren't we too small for AI?", a: "Quite the opposite. A smaller company usually feels the benefit faster — one extra workday per week is visible immediately." },
        q2: { q: "How much will it cost?", a: "Depends on what we tackle. Most projects pay for themselves in 3–6 months. We always give the exact price after the first chat — upfront, no surprises." },
        q3: { q: "What if we don't get the tech?", a: "That's fine — that's what we're here for. We speak plain language and explain everything on your own examples. No buzzwords." },
        q4: { q: "How long does it take?", a: "Simpler things are done in 2–4 weeks. Bigger projects we deliver in pieces, so you feel the benefit right from the start." },
        q5: { q: "And our data? Is it secure?", a: "Your data stays yours — we work under GDPR with a clear contract. As strict as your accounting." },
      },
    },
    agent: {
      eyebrow: "How your AI helper works",
      title1: "Like a colleague",
      title2: "who never sleeps.",
      subtitle: "Imagine an employee who can answer an email, book a meeting and pass info to a teammate — in a second, day or night.",
      col1: "What it picks up",
      col2: "What it does with it",
      kpi1: "Customer reply",
      kpi2: "Always on",
      kpi3: "Reliability",
      kpi4: "GDPR ready",
    },
    flow: {
      eyebrow: "A day at the office — before and after",
      title1: "Same day.",
      title2: "Totally different feeling.",
      subtitle: "Here's what a normal workday looks like before we set up your AI helper — and what it looks like after.",
    },
    metrics: {
      m1: "Hours saved per week",
      m2: "More meetings booked",
      m3: "Happy companies",
      m4: "Referrals from clients",
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
    podcast: {
      eyebrow: "Podcast",
      title: "Rather listen than read? Hit play.",
      subtitle: "6 minutes that save you months of figuring out how AI works in a business like yours.",
      episodeTitle: "AI Agents End the Era of Digital Couriers",
      episodeDesc: "How to stop copying data window-to-window and let the machine do the routine for you.",
      duration: "5:40",
      play: "Play",
      pause: "Pause",
      seekLabel: "Audio position",
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
