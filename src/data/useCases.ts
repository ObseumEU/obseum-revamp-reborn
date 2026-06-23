// Centrální zdroj pravdy pro katalog AI řešení Obseum.
// Použito v: /use-cases, /use-cases/:category, /use-cases/:category/:slug,
// sitemap.xml a llms.txt.

import {
  Workflow, BarChart3, Headphones, FileText, ShieldCheck, Users,
  Factory, Wallet, Megaphone, FlaskConical, Briefcase, Scale,
  Boxes, KanbanSquare, Sparkles, type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  benefits: string[];
  tags: string[];
};

export type Category = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tone: "mint" | "blush" | "sky" | "sand" | "lilac" | "lime";
  solutions: Solution[];
};

const cat = (c: Category): Category => c;

export const categories: Category[] = [
  cat({
    slug: "automatizace-procesu",
    title: "Automatizace procesů",
    subtitle: "Automatizace firemních procesů pomocí AI",
    description: "Eliminujte rutinní úkony, zrychlete provoz a uvolněte týmu kapacitu na strategickou práci.",
    icon: Workflow,
    tone: "blush",
    solutions: [
      {
        slug: "prediktivni-analyza-chovani-zakazniku",
        title: "Prediktivní analýza spotřebitelského chování",
        tagline: "Předpovídá nákupní chování dříve, než se projeví v číslech.",
        description: [
          "Strojové učení vyhodnocuje historická data o nákupech, interakcích a kampaních a odhaluje vzorce, které lidský pohled snadno přehlédne.",
          "Pro každý zákaznický segment dodává konkrétní doporučení — kdy oslovit, jaký produkt nabídnout, jakou cenu nastavit.",
          "Marketing i obchod tak přestávají hádat a začínají rozhodovat na základě dat. Výsledkem je vyšší konverze a nižší náklady na získání zákazníka.",
        ],
        benefits: ["Vyšší konverze", "Přesnější segmentace", "Datově řízená rozhodnutí", "Snížení CAC"],
        tags: ["Machine Learning", "Prediktivní analytika", "CRM"],
      },
      {
        slug: "predikce-fluktuace-zamestnancu",
        title: "Predikce fluktuace zaměstnanců",
        tagline: "Upozorní HR tým dřív, než klíčový člověk podá výpověď.",
        description: [
          "Model průběžně vyhodnocuje rizikové signály — změny v aktivitě, výkonu, docházce i tonalitě komunikace.",
          "U konkrétních lidí identifikuje pravděpodobné příčiny nespokojenosti a navrhuje cílená retenční opatření.",
          "Místo reaktivního řešení odchodů získáte preventivní nástroj, který šetří náklady na nábor a zachová know-how ve firmě.",
        ],
        benefits: ["Nižší fluktuace", "Udržení know-how", "Cílená opatření", "Úspora náborových nákladů"],
        tags: ["HR Analytics", "Predikce", "People Ops"],
      },
      {
        slug: "optimalizace-energetickych-siti",
        title: "Real-time optimalizace energetických sítí",
        tagline: "Inteligentní řízení toků energie a prevence výpadků.",
        description: [
          "Systém průběžně analyzuje data ze senzorů, detekuje anomálie a optimalizuje distribuci v reálném čase.",
          "Prediktivní modely předcházejí výpadkům dříve, než nastanou, a snižují provozní náklady o desítky procent.",
          "Integruje se do stávající infrastruktury bez nutnosti kompletní výměny hardwaru.",
        ],
        benefits: ["Prevence výpadků", "Úspora nákladů", "Bez výměny HW", "Real-time řízení"],
        tags: ["IoT", "Energetika", "Edge AI"],
      },
      {
        slug: "detekce-vzorcu-big-data",
        title: "Detekce skrytých vzorců v Big Data",
        tagline: "Odhaluje souvislosti, které manuální analýza přehlédne.",
        description: [
          "Automatizovaná AI analýza prochází velké datové sady a identifikuje vzorce, trendy a anomálie napříč zdroji.",
          "Systém upozorňuje na relevantní souvislosti v reálném čase a dodává hotové podklady pro rozhodování.",
          "Manažerům šetří desítky hodin a dramaticky zkracuje cestu od dat k akci.",
        ],
        benefits: ["Skryté insighty", "Real-time alerty", "Rychlejší rozhodování", "Multi-zdrojová analýza"],
        tags: ["Big Data", "Anomaly Detection", "Analytics"],
      },
      {
        slug: "robotic-process-automation",
        title: "Automatizace opakovaných back-office úkonů",
        tagline: "AI agenti zastanou rutinní administrativu.",
        description: [
          "RPA s AI vrstvou převezme přepisování dat mezi systémy, kontroly faktur, párování objednávek a další rutinní procesy.",
          "Agenti pracují 24/7, nedělají překlepy a zvládnou špičky bez nutnosti dočasných posil.",
          "Tým se uvolní pro práci, která skutečně vyžaduje lidský úsudek.",
        ],
        benefits: ["24/7 provoz", "Nula chyb z nepozornosti", "Škálování bez náboru", "Měřitelná ROI"],
        tags: ["RPA", "AI Agents", "Back Office"],
      },
    ],
  }),

  cat({
    slug: "analyza-dat",
    title: "Analýza dat",
    subtitle: "Pokročilá analýza dat a prediktivní modelování",
    description: "Z dat, která už dnes máte, vytěžíme konkrétní rozhodnutí a předpovědi.",
    icon: BarChart3,
    tone: "mint",
    solutions: [
      {
        slug: "prediktivni-modelovani-poptavky",
        title: "Prediktivní modelování poptávky",
        tagline: "Přesné odhady prodejů, zásob a kapacit na týdny dopředu.",
        description: [
          "Model kombinuje historická prodejní data se sezónními trendy, marketingovým kalendářem i externími faktory.",
          "Plánování zásob, výroby i lidských kapacit se opírá o konkrétní čísla, ne o pocit.",
          "Výsledkem jsou nižší skladové zásoby a méně výpadků dostupnosti.",
        ],
        benefits: ["Nižší zásoby", "Méně výpadků", "Lepší plánování", "Vyšší marže"],
        tags: ["Forecasting", "ML", "Supply Chain"],
      },
      {
        slug: "real-time-business-intelligence",
        title: "Real-time business intelligence",
        tagline: "Živý přehled klíčových metrik napříč firmou.",
        description: [
          "Datové toky z různých systémů sjednotíme do jednoho dashboardu, který se aktualizuje v reálném čase.",
          "Vedení vidí, kde firma stojí — bez čekání na měsíční reporty.",
          "Anomálie a odchylky systém aktivně upozorňuje, takže nereagujete pozdě.",
        ],
        benefits: ["Živé metriky", "Jednotný pohled", "Proaktivní alerty", "Rychlejší rozhodování"],
        tags: ["BI", "Dashboards", "Real-time"],
      },
      {
        slug: "customer-segmentace-ai",
        title: "AI segmentace zákazníků",
        tagline: "Mikrosegmenty postavené na skutečném chování, ne na demografii.",
        description: [
          "Algoritmy clustering a deep learning rozdělí zákaznickou bázi do segmentů s podobným chováním a hodnotou.",
          "Pro každý segment získáte popis, doporučenou strategii a očekávaný přínos.",
          "Marketing dostává přesné cíle, obchod prioritizuje účty s nejvyšším potenciálem.",
        ],
        benefits: ["Behaviorální segmenty", "Vyšší relevance", "Lepší ROI kampaní", "Priorizace účtů"],
        tags: ["Clustering", "Customer Data", "Personalizace"],
      },
      {
        slug: "anomalie-v-provoznich-datech",
        title: "Detekce anomálií v provozních datech",
        tagline: "Najdeme problém dřív, než se projeví jako výpadek.",
        description: [
          "Modely se naučí, jak vypadá normální provoz ve vašich systémech, a okamžitě hlásí odchylky.",
          "Funguje napříč zdroji — logy aplikací, IoT senzory, finanční toky, telemetrie.",
          "Snižuje falešné alarmy a směruje pozornost tam, kde skutečně hrozí riziko.",
        ],
        benefits: ["Prevence incidentů", "Méně falešných alarmů", "Multi-zdroj", "Vyšší dostupnost"],
        tags: ["Anomaly Detection", "Observability", "MLOps"],
      },
    ],
  }),

  cat({
    slug: "zakaznicka-podpora",
    title: "Zákaznická podpora",
    subtitle: "AI řešení pro zlepšení zákaznické podpory",
    description: "Zvládněte víc požadavků s menším týmem a vyšší spokojeností.",
    icon: Headphones,
    tone: "sky",
    solutions: [
      {
        slug: "prioritizace-pozadavku",
        title: "AI prioritizace zákaznických požadavků",
        tagline: "Naléhavé případy se nikdy neztratí ve frontě.",
        description: [
          "Inteligentní systém třídí příchozí požadavky podle urgentnosti, kontextu a obchodní hodnoty.",
          "Kritické případy jdou na začátek fronty, opakující se dotazy řeší automatika.",
          "Měřitelně zkracuje reakční dobu a zvyšuje spokojenost klíčových účtů.",
        ],
        benefits: ["Nižší reakční doba", "Lepší NPS", "Smart routing", "Méně eskalací"],
        tags: ["NLP", "Routing", "Support Ops"],
      },
      {
        slug: "ai-chatbot-24-7",
        title: "AI chatbot pro proaktivní podporu",
        tagline: "Odpovídá zákazníkům 24/7 a eskaluje jen to podstatné.",
        description: [
          "Chatbot trénovaný na vašich datech automatizuje zákaznickou podporu nepřetržitě.",
          "Řeší opakující se dotazy, sbírá kontext a předává složité případy operátorům.",
          "Zkracuje průměrnou dobu odpovědi o desítky procent a uvolňuje support tým.",
        ],
        benefits: ["24/7 dostupnost", "Rychlejší odpovědi", "Nižší zátěž týmu", "Vyšší CSAT"],
        tags: ["Chatbot", "LLM", "Customer Support"],
      },
      {
        slug: "optimalizace-zakaznicke-zkusenosti",
        title: "AI konzultant pro optimalizaci CX",
        tagline: "Najdeme přesné místo, kde zákazník odpadá.",
        description: [
          "Systém analyzuje zákaznická data napříč body kontaktu a identifikuje slabá místa v cestě.",
          "Na základě měřitelných vzorců navrhuje konkrétní opatření, ne obecná doporučení.",
          "Zlepšení CX se opírá o data, ne o intuici, a dá se měřit kampaň od kampaně.",
        ],
        benefits: ["Měřitelná zlepšení", "Identifikace dropoutů", "Konkrétní opatření", "Vyšší retence"],
        tags: ["CX Analytics", "Customer Journey", "Conversion"],
      },
    ],
  }),

  cat({
    slug: "dokumenty-obsah",
    title: "Dokumenty a obsah",
    subtitle: "Zpracování dokumentů a generování obsahu",
    description: "Automatizujte těžkou administrativu i tvorbu obsahu ve velkém měřítku.",
    icon: FileText,
    tone: "sand",
    solutions: [
      {
        slug: "extrakce-a-klasifikace-dokumentu",
        title: "Extrakce a klasifikace dokumentů",
        tagline: "Z naskenovaných papírů strukturovaná data bez ručního přepisu.",
        description: [
          "AI s OCR vrstvou extrahuje, třídí a zpracovává dokumenty bez manuálního zásahu.",
          "Faktury, smlouvy, formuláře — systém pozná typ a vytáhne přesně to, co potřebujete.",
          "Výrazně zkracuje čas zpracování, snižuje chybovost a uvolňuje kapacity pro hodnotnější práci.",
        ],
        benefits: ["Nula přepisování", "Nižší chybovost", "Rychlejší zpracování", "Škálovatelné"],
        tags: ["OCR", "Document AI", "NLP"],
      },
      {
        slug: "spravce-znalostni-baze",
        title: "AI manažer znalostní báze",
        tagline: "Znalosti firmy konečně přístupné komukoli během vteřin.",
        description: [
          "Systém třídí, kategorizuje a zpřístupňuje firemní dokumenty pomocí přirozeného jazyka.",
          "Místo hledání ve složkách napíšete dotaz — AI najde odpověď i s odkazem na zdroj.",
          "Nový kolega se zaučuje rychleji, zkušení nestrávávají dny vysvětlováním stejných věcí.",
        ],
        benefits: ["Rychlejší onboarding", "Žádné ztracené informace", "Semantic search", "Citace zdrojů"],
        tags: ["RAG", "Knowledge Management", "LLM"],
      },
      {
        slug: "generator-obchodnich-nabidek",
        title: "Generátor personalizovaných obchodních nabídek",
        tagline: "Profesionální nabídka na míru klientovi za pár minut.",
        description: [
          "AI vytvoří kompletní obchodní nabídku přizpůsobenou konkrétnímu klientovi a kontextu jednání.",
          "Šablony, ceníky a case studies se propojí automaticky — obchodník dolaďuje, ne píše od nuly.",
          "Zkrácený čas zpracování a vyšší úspěšnost konverzí díky relevantnímu obsahu.",
        ],
        benefits: ["Rychlejší příprava", "Vyšší konverze", "Konzistentní brand", "Méně rutinní práce"],
        tags: ["Sales Enablement", "LLM", "Personalizace"],
      },
      {
        slug: "preklady-technicke-dokumentace",
        title: "Překlady a validace technické dokumentace",
        tagline: "Konzistentní terminologie napříč všemi jazyky a verzemi.",
        description: [
          "Systém překládá technickou dokumentaci a hlídá konzistenci terminologie podle vašeho slovníku.",
          "Validační vrstva upozorní na rozpory mezi verzemi a chybějící části před vydáním.",
          "Místo dlouhých korektur dostávate hotové dokumenty připravené k publikaci.",
        ],
        benefits: ["Konzistentní termíny", "Méně korektur", "Rychlejší release", "Multi-language"],
        tags: ["MT", "QA", "Localization"],
      },
    ],
  }),

  cat({
    slug: "bezpecnost",
    title: "Bezpečnost",
    subtitle: "AI pro kybernetickou bezpečnost a detekci hrozeb",
    description: "Detekujte a zastavte hrozby v reálném čase, bez nutnosti nepřetržitého lidského dohledu.",
    icon: ShieldCheck,
    tone: "blush",
    solutions: [
      {
        slug: "fyzicka-bezpecnost-prostor",
        title: "Detekce a prevence fyzických bezpečnostních rizik",
        tagline: "Inteligentní vyhodnocení kamer a senzorů v reálném čase.",
        description: [
          "AI kontinuálně analyzuje kamerové záznamy, senzorová data a historické vzorce.",
          "Bezpečnostní incidenty rozpozná dříve, než vzniknou, a aktivuje preventivní opatření.",
          "Výsledkem je vyšší ochrana osob i majetku při nižší zátěži ostrahy.",
        ],
        benefits: ["Prevence incidentů", "24/7 monitoring", "Nižší náklady na ostrahu", "Vyšší ochrana"],
        tags: ["Computer Vision", "Security", "Edge AI"],
      },
      {
        slug: "threat-detection-prevention",
        title: "AI Threat Detection & Prevention",
        tagline: "Detekce kybernetických hrozeb v reálném čase.",
        description: [
          "Pokročilý systém identifikuje podezřelé aktivity v síti i koncových zařízeních.",
          "Automaticky reaguje na incidenty a izoluje napadené uzly dříve, než se hrozba rozšíří.",
          "Minimalizuje rizika bez nutnosti nepřetržitého manuálního dohledu.",
        ],
        benefits: ["Real-time detekce", "Automatická reakce", "Méně false-positive", "Lepší MTTR"],
        tags: ["Cybersecurity", "SOC", "EDR"],
      },
      {
        slug: "behavioralni-hrozby",
        title: "Rozpoznávání behaviorálních hrozeb",
        tagline: "Detekce útoků bez závislosti na známých signaturách.",
        description: [
          "Systém analyzuje vzorce chování uživatelů, zařízení i síťového provozu.",
          "Anomálie indikující kybernetický útok hlásí okamžitě, i když jde o nový typ hrozby.",
          "Získáte proaktivní ochranu, která zachytí to, co tradiční nástroje propustí.",
        ],
        benefits: ["Zero-day ochrana", "Behaviorální analýza", "Proaktivní detekce", "Nižší riziko průniku"],
        tags: ["UEBA", "Anomaly Detection", "Security"],
      },
      {
        slug: "detekce-utoku-v-realnem-case",
        title: "Detekce kybernetických útoků v reálném čase",
        tagline: "Monitoring sítě 24/7 s automatickým blokováním.",
        description: [
          "Systém monitoruje síťový provoz nepřetržitě a automaticky detekuje i blokuje hrozby.",
          "Eliminuje závislost na manuální analýze a zkracuje dobu reakce na útok na vteřiny.",
          "Integruje se do stávající infrastruktury bez nutnosti zásadních změn.",
        ],
        benefits: ["Auto-blokování", "Rychlá reakce", "Bez náhrad HW", "Network monitoring"],
        tags: ["NDR", "Network Security", "Automation"],
      },
    ],
  }),

  cat({
    slug: "personalistika",
    title: "Personalistika",
    subtitle: "Transformace řízení lidských zdrojů a talent managementu",
    description: "Najděte, rozvíjejte a udržte správné lidi pomocí dat, ne tabulek v Excelu.",
    icon: Users,
    tone: "lilac",
    solutions: [
      {
        slug: "ai-mentor-kariera",
        title: "AI mentor pro kariérní plánování",
        tagline: "Strukturovaná cesta růstu na míru každému zaměstnanci.",
        description: [
          "AI analyzuje dovednosti, zkušenosti a cíle a sestaví konkrétní plán rozvoje.",
          "Průběžně vyhodnocuje pokrok a přizpůsobuje doporučení aktuální situaci na trhu.",
          "Lidé dostávají individuální vedení, HR má přehled o rozvojových potřebách.",
        ],
        benefits: ["Personalizovaný plán", "Vyšší engagement", "Lepší retence", "Datový přehled"],
        tags: ["Talent Development", "Career", "L&D"],
      },
      {
        slug: "talent-match-nabor",
        title: "AI Talent Match: automatizace náboru",
        tagline: "Páruje kandidáty s pozicemi v zlomku času ručního třídění.",
        description: [
          "Systém analyzuje dovednosti, zkušenosti a požadavky role a automaticky doporučuje nejlepší kandidáty.",
          "Učí se z vašich rozhodnutí a průběžně zlepšuje přesnost párování.",
          "HR tým má víc času na rozhovory a méně na třídění životopisů.",
        ],
        benefits: ["Rychlejší nábor", "Vyšší kvalita kandidátů", "Nižší cost-per-hire", "Bez bias"],
        tags: ["HR Tech", "ATS", "ML"],
      },
      {
        slug: "hodnoceni-kompetenci",
        title: "Hodnocení a rozvoj kompetencí",
        tagline: "Objektivní měření dovedností napříč organizací.",
        description: [
          "AI měří kompetence zaměstnanců a identifikuje rozvojové příležitosti na základě dat.",
          "Nahrazuje subjektivní hodnocení manažery konzistentními metrikami.",
          "Výsledkem je rychlejší růst lidí a vyšší efektivita HR procesů.",
        ],
        benefits: ["Objektivní data", "Rychlejší růst", "Méně subjektivity", "Strukturovaný proces"],
        tags: ["Skills", "Performance", "HR Analytics"],
      },
      {
        slug: "personalizace-vzdelavani",
        title: "Personalizace vzdělávacích plánů",
        tagline: "Učení přizpůsobené individuálnímu tempu a stylu.",
        description: [
          "Systém analyzuje výsledky a tempo studenta a dynamicky upravuje obsah i obtížnost.",
          "Vzdělávací cesta se přizpůsobuje v reálném čase podle pokroku.",
          "Měřitelně vyšší efektivita učení a nižší administrativní zátěž lektorů.",
        ],
        benefits: ["Personalizované tempo", "Vyšší efektivita", "Méně admin", "Adaptive learning"],
        tags: ["EdTech", "Adaptive Learning", "LMS"],
      },
    ],
  }),

  cat({
    slug: "vyroba-logistika",
    title: "Výroba a logistika",
    subtitle: "Digitální transformace výrobních procesů a dodavatelského řetězce",
    description: "Méně prostojů, nižší zmetkovitost, předvídatelnější dodávky.",
    icon: Factory,
    tone: "sky",
    solutions: [
      {
        slug: "prediktivni-udrzba-stroju",
        title: "Správce flotily a prediktivní údržba",
        tagline: "Předejdete poruchám dříve, než zastaví výrobu.",
        description: [
          "Strojové učení analyzuje data ze senzorů, telematiky a provozních logů.",
          "Modely detekují anomálie dříve, než způsobí výpadek, a plánují servis ve správný čas.",
          "Snižuje neplánované prostoje, prodlužuje životnost zařízení a šetří provozní náklady.",
        ],
        benefits: ["Méně prostojů", "Delší životnost HW", "Nižší náklady", "Plánovaný servis"],
        tags: ["Predictive Maintenance", "IoT", "Industry 4.0"],
      },
      {
        slug: "optimalizace-vyrobnich-linek",
        title: "Optimalizace výrobních linek a skladů",
        tagline: "Identifikace úzkých hrdel v reálném čase.",
        description: [
          "Systém využívá ML a prediktivní analytiku k optimalizaci linek a skladových operací.",
          "Identifikuje úzká hrdla, předpovídá prostoje a přizpůsobuje plánování kapacit.",
          "Měřitelně vyšší průchodnost výroby a efektivnější řízení zásob.",
        ],
        benefits: ["Vyšší průchodnost", "Méně prostojů", "Lepší zásoby", "Real-time řízení"],
        tags: ["Manufacturing", "Optimization", "MES"],
      },
      {
        slug: "automatizovana-kontrola-kvality",
        title: "Automatizovaná kontrola kvality",
        tagline: "Vizuální inspekce výrobků v reálném čase.",
        description: [
          "AI Inspektor provádí vizuální kontrolu a identifikuje vady přímo na výrobní lince.",
          "Nahrazuje nebo doplňuje manuální inspekci, snižuje počet reklamací.",
          "Vyšší konzistence kvality bez závislosti na lidském faktoru.",
        ],
        benefits: ["Nižší zmetkovitost", "Konzistentní QA", "Méně reklamací", "100% kontrola"],
        tags: ["Computer Vision", "QA", "Manufacturing"],
      },
      {
        slug: "dodavatelsky-retezec",
        title: "Optimalizace dodavatelského řetězce",
        tagline: "Štíhlejší sklad, kratší dodací lhůty, vyšší dostupnost.",
        description: [
          "Systém analyzuje historická data, sezónní vzorce a externí faktory pro predikci poptávky.",
          "Automatické řízení objednávek snižuje přebytečné zásoby i výpadky dostupnosti.",
          "Štíhlejší sklad a měřitelné snížení provozních nákladů.",
        ],
        benefits: ["Nižší zásoby", "Méně výpadků", "Auto-objednávky", "Predikce poptávky"],
        tags: ["Supply Chain", "Forecasting", "Inventory"],
      },
      {
        slug: "robotizace-montaznich-linek",
        title: "Robotická automatizace montážních linek",
        tagline: "Optimalizace pro Průmysl 4.0 s integrací do stávající infrastruktury.",
        description: [
          "Systém optimalizuje montážní linky v reálném čase a zvyšuje produktivitu až o 40 %.",
          "Kombinuje počítačové vidění, prediktivní analytiku a robotické řízení.",
          "Snižuje chybovost na minimum a integruje se s existující výrobní infrastrukturou.",
        ],
        benefits: ["Vyšší produktivita", "Nižší chybovost", "Industry 4.0", "Snadná integrace"],
        tags: ["Robotics", "Industry 4.0", "Automation"],
      },
    ],
  }),

  cat({
    slug: "finance",
    title: "Finance",
    subtitle: "Transformace finančních operací pro digitální éru",
    description: "Predikce, automatizace a řízení rizik na úrovni nadnárodních korporací.",
    icon: Wallet,
    tone: "mint",
    solutions: [
      {
        slug: "hedging-menova-rizika",
        title: "Hedging a řízení měnových rizik",
        tagline: "Chrání cashflow před kurzovými výkyvy.",
        description: [
          "Prediktivní modely analyzují tržní data a navrhují hedgingové strategie přizpůsobené portfoliu.",
          "Systém reaguje v reálném čase a automatizuje doporučení pro tradera.",
          "Výsledkem je snížení měnových ztrát a vyšší předvídatelnost cashflow.",
        ],
        benefits: ["Nižší FX ztráty", "Předvídatelný cashflow", "Auto-doporučení", "Real-time"],
        tags: ["Treasury", "FX", "Risk Management"],
      },
      {
        slug: "portfoliovy-manazer",
        title: "AI portfoliový manažer",
        tagline: "Optimalizace portfolia podle definované rizikové strategie.",
        description: [
          "Systém průběžně analyzuje tržní data a automaticky rebalancuje portfolio.",
          "Zpracovává stovky datových zdrojů v reálném čase a reaguje na změny rychleji, než je manuálně možné.",
          "Konzistentní optimalizace výnosů při aktivním řízení rizika.",
        ],
        benefits: ["Auto-rebalance", "Aktivní risk", "Multi-source data", "24/7 monitoring"],
        tags: ["Investment", "Portfolio", "Quant"],
      },
      {
        slug: "predikce-fuzi-akvizic",
        title: "Prognóza korporátních fúzí a akvizic",
        tagline: "Identifikace M&A příležitostí dříve, než jsou veřejně známé.",
        description: [
          "AI analyzuje big data a předpovídá potenciální fúze a akvizice s vysokou přesností.",
          "Zpracovává stovky datových zdrojů v reálném čase a dodává akční výstupy.",
          "Získáte náskok před konkurencí v identifikaci strategických příležitostí.",
        ],
        benefits: ["Náskok před trhem", "Akční insights", "Multi-source", "Strategický edge"],
        tags: ["M&A", "Strategy", "Big Data"],
      },
      {
        slug: "predikce-financnich-trendu",
        title: "Predikce finančních trendů a arbitráží",
        tagline: "Odhalí obchodní příležitosti dříve než tradiční nástroje.",
        description: [
          "Strojové učení zpracovává historická i živá data pro predikci trendů.",
          "Identifikuje arbitrážní situace a varuje před zvýšeným rizikem.",
          "Systematické zvyšování výnosnosti portfolia podložené daty.",
        ],
        benefits: ["Trend prediction", "Arbitrage detection", "Risk alerts", "Vyšší výnosy"],
        tags: ["Trading", "ML", "Markets"],
      },
      {
        slug: "rizeni-derivatu",
        title: "Řízení finančních derivátů a opcí",
        tagline: "Automatizované obchodování s prediktivní analýzou.",
        description: [
          "Systém vyhodnocuje tržní podmínky, identifikuje příležitosti a řídí rizika v reálném čase.",
          "Vyšší přesnost rozhodování a snížení operačních rizik.",
          "Měřitelné zlepšení výnosnosti portfolia derivátů.",
        ],
        benefits: ["Auto-trading", "Risk control", "Vyšší přesnost", "Real-time"],
        tags: ["Derivatives", "Options", "Algo Trading"],
      },
      {
        slug: "analyza-financnich-toku",
        title: "Analýza a řízení finančních toků",
        tagline: "Plná kontrola nad cashflow bez manuálních výkazů.",
        description: [
          "Inteligentní systém automatizuje analýzu cash flow a optimalizuje náklady.",
          "Předvídá finanční trendy na základě dat v reálném čase.",
          "Eliminuje manuální zpracování výkazů a snižuje riziko chybných rozhodnutí.",
        ],
        benefits: ["Auto-reporting", "Cashflow predikce", "Méně chyb", "Real-time"],
        tags: ["FP&A", "Cashflow", "Finance Ops"],
      },
    ],
  }),

  cat({
    slug: "marketing",
    title: "Marketing",
    subtitle: "Personalizace komunikace a prediktivní targeting",
    description: "Oslovte správného člověka ve správný čas se správnou zprávou.",
    icon: Megaphone,
    tone: "lime",
    solutions: [
      {
        slug: "ai-copywriter",
        title: "AI copywriter pro personalizované kampaně",
        tagline: "Cílené texty pro každý segment v měřítku, které ručně nezvládnete.",
        description: [
          "AI generuje marketingové texty přizpůsobené konkrétním segmentům zákazníků.",
          "Zkracuje čas tvorby kampaní a zvyšuje konverze díky relevanci.",
          "Konzistentní brand voice ve velkém měřítku.",
        ],
        benefits: ["Rychlejší kampaně", "Vyšší konverze", "Brand voice", "Personalizace"],
        tags: ["Content", "LLM", "Personalization"],
      },
      {
        slug: "influencer-marketing",
        title: "Optimalizace influencer strategií",
        tagline: "Datová doporučení místo ručního vyhodnocování.",
        description: [
          "Systém analyzuje výkonnost influencerů, sleduje trendy a optimalizuje kampaně pro ROI.",
          "Dodává přesná doporučení podložená daty v reálném čase.",
          "Efektivnější alokace rozpočtu a měřitelné výsledky každé spolupráce.",
        ],
        benefits: ["Vyšší ROI", "Datová doporučení", "Trend tracking", "Real-time"],
        tags: ["Influencer", "Marketing Analytics", "ROI"],
      },
      {
        slug: "personalizace-strategii",
        title: "AI personalizátor marketingových strategií",
        tagline: "Strategie přizpůsobené každému segmentu automaticky.",
        description: [
          "Systém analyzuje zákaznická data a přizpůsobuje marketingové strategie každému segmentu.",
          "Prediktivní modely chování zvyšují konverze.",
          "Měřitelné zlepšení ROI a efektivnější oslovení.",
        ],
        benefits: ["Personalizace", "Vyšší ROI", "Behaviorální data", "Auto-optimalizace"],
        tags: ["Marketing Automation", "Personalization", "CDP"],
      },
      {
        slug: "navigator-influencer",
        title: "Navigátor pro influencer personalizaci",
        tagline: "Každá spolupráce zasáhne přesně definovaný segment.",
        description: [
          "AI analyzuje influencery podle relevance, publika a výkonnostních dat.",
          "Páruje kampaně s influencery, kteří přinesou maximální dopad.",
          "Konec slepých voleb na základě počtu sledujících.",
        ],
        benefits: ["Přesný match", "Vyšší dopad", "Datová volba", "Měřitelný ROI"],
        tags: ["Influencer", "Audience", "Matching"],
      },
    ],
  }),

  cat({
    slug: "vyzkum-vyvoj",
    title: "Výzkum a vývoj",
    subtitle: "Akcelerace inovačního cyklu a transformace produktového vývoje",
    description: "Zkracujte vývojové cykly a posuňte výzkum o řád dál.",
    icon: FlaskConical,
    tone: "lilac",
    solutions: [
      {
        slug: "materialovy-vyzkum",
        title: "Akcelerátor materiálového výzkumu",
        tagline: "Identifikuje perspektivní materiály dříve, než vstoupíte do laboratoře.",
        description: [
          "Prediktivní modely vyhodnocují tisíce experimentů a optimalizují vlastnosti materiálů.",
          "Vývojový cyklus se zkracuje a náklady na celý proces klesají.",
          "Výzkumný tým se soustředí na práci, ne na rutinní zkoušení.",
        ],
        benefits: ["Kratší cyklus", "Nižší náklady", "Více iterací", "Datové vedení"],
        tags: ["Materials", "R&D", "Simulation"],
      },
      {
        slug: "kvantove-technologie",
        title: "Akcelerátor kvantového výzkumu",
        tagline: "Pokročilé simulace a automatizovaná optimalizace experimentů.",
        description: [
          "Specializovaná AI platforma zpracovává rozsáhlá vědecká data a identifikuje klíčové vzory.",
          "Tým se soustředí na interpretaci výsledků místo rutinní datové práce.",
          "Násobné zkrácení času od hypotézy k výsledku.",
        ],
        benefits: ["Rychlejší výzkum", "Více insights", "Méně rutiny", "Lepší fokus"],
        tags: ["Quantum", "Scientific Computing", "Research"],
      },
      {
        slug: "biokompatibilni-materialy",
        title: "Výzkum biokompatibilních materiálů",
        tagline: "Identifikace perspektivních materiálových kombinací před fyzickými testy.",
        description: [
          "Platforma urychluje výzkum biokompatibilních materiálů pomocí prediktivní analýzy.",
          "Optimalizuje experimentální procesy a zkracuje dobu vývoje.",
          "Vyšší úspěšnost projektů a nižší náklady na laboratorní testy.",
        ],
        benefits: ["Méně testů", "Vyšší úspěšnost", "Kratší vývoj", "Nižší náklady"],
        tags: ["Biomaterials", "MedTech", "Simulation"],
      },
      {
        slug: "simulace-vyrobnich-materialu",
        title: "Simulace a optimalizace výrobních materiálů",
        tagline: "Chování materiálu předem, bez nákladných prototypů.",
        description: [
          "AI kombinuje prediktivní analýzu a ML pro simulaci materiálů před zahájením výroby.",
          "Zkracuje vývojové cykly, snižuje zmetkovitost a optimalizuje spotřebu.",
          "Měřitelné snížení nákladů a zkrácení time-to-market.",
        ],
        benefits: ["Méně prototypů", "Nižší zmetkovitost", "Time-to-market", "Optimalizace spotřeby"],
        tags: ["Simulation", "Manufacturing", "Materials"],
      },
      {
        slug: "genomicka-data",
        title: "Průzkum a modelování genomických dat",
        tagline: "Efektivní výzkum DNA a predikce genetických onemocnění.",
        description: [
          "Systém automatizuje zpracování rozsáhlých genomických datasetů.",
          "Identifikuje vzory a koreláty, které manuální analýza přehlédne.",
          "Zrychluje výzkum a otevírá nové diagnostické možnosti.",
        ],
        benefits: ["Rychlejší výzkum", "Hluboké insights", "Auto-processing", "Nové diagnostiky"],
        tags: ["Genomics", "Bioinformatics", "Health AI"],
      },
    ],
  }),

  cat({
    slug: "prodej-obchod",
    title: "Prodej a obchod",
    subtitle: "Transformace prodejních strategií a řízení vztahů s klienty",
    description: "Obchodní tým se soustředí na uzavírání obchodů, ne na administrativu.",
    icon: Briefcase,
    tone: "sand",
    solutions: [
      {
        slug: "predikce-cen",
        title: "Predikce cen a cenové strategie",
        tagline: "Automatizovaná cenotvorba reagující na trh v reálném čase.",
        description: [
          "Prediktivní algoritmy analyzují tržní data a navrhují optimální cenové strategie.",
          "Cenotvorba reaguje na změny poptávky, konkurence i sezónních vzorců bez manuálního zásahu.",
          "Vyšší marže, lepší konverze a konkurenční výhoda postavená na datech.",
        ],
        benefits: ["Vyšší marže", "Auto-pricing", "Trend reaction", "Konkurenční výhoda"],
        tags: ["Pricing", "Revenue", "Dynamic Pricing"],
      },
      {
        slug: "prodejni-teritoria",
        title: "Predikce a optimalizace prodejních teritorií",
        tagline: "Datově podložené rozdělení území napříč týmem.",
        description: [
          "Systém analyzuje historická data, tržní potenciál a výkonnost obchodníků.",
          "Navrhuje optimální přiřazení teritorií podle skutečných příležitostí.",
          "Vyšší efektivita týmu, nižší provozní náklady a měřitelný růst tržeb.",
        ],
        benefits: ["Vyšší efektivita", "Růst tržeb", "Datové rozdělení", "Nižší náklady"],
        tags: ["Sales Ops", "Territory", "Planning"],
      },
      {
        slug: "b2b-strategie",
        title: "Personalizátor B2B prodejních strategií",
        tagline: "Strategie přizpůsobené segmentu i konkrétnímu kontaktu.",
        description: [
          "Systém analyzuje chování zákazníků v reálném čase a přizpůsobuje prodejní strategie.",
          "Vyšší konverzní poměry a zkrácení prodejního cyklu bez manuální práce.",
          "Integruje se do stávajících CRM a sales nástrojů.",
        ],
        benefits: ["Vyšší konverze", "Kratší cyklus", "CRM integrace", "Real-time"],
        tags: ["B2B Sales", "CRM", "Personalization"],
      },
      {
        slug: "lead-scoring",
        title: "Prediktor obchodních příležitostí a lead scoring",
        tagline: "Obchodní tým se soustředí na leady s nejvyšší pravděpodobností konverze.",
        description: [
          "Strojové učení automaticky hodnotí leady a predikuje obchodní příležitosti.",
          "Identifikuje perspektivní kontakty na základě dat z CRM, webu a externích zdrojů.",
          "Vyšší produktivita obchodníků a lepší využití pipeline.",
        ],
        benefits: ["Lepší priorizace", "Vyšší produktivita", "Multi-source data", "Vyšší win rate"],
        tags: ["Lead Scoring", "Sales Ops", "ML"],
      },
      {
        slug: "cross-sell-up-sell",
        title: "AI asistent pro cross-sell a up-sell",
        tagline: "Doporučení produktů přímo v průběhu obchodní interakce.",
        description: [
          "AI identifikuje cross-sell a up-sell příležitosti během kontaktu se zákazníkem.",
          "Na základě analýzy nákupního chování doporučuje relevantní produkty ve správný moment.",
          "Vyšší průměrná hodnota objednávky a efektivnější využití zákaznické báze.",
        ],
        benefits: ["Vyšší AOV", "Real-time tipy", "Lepší využití báze", "Konzistentní pitch"],
        tags: ["Sales Enablement", "Recommendations", "AI Assistant"],
      },
    ],
  }),

  cat({
    slug: "pravni-sluzby",
    title: "Právní služby",
    subtitle: "Digitální transformace právních procesů",
    description: "Méně rutinní rešerše, víc strategie a poradenství.",
    icon: Scale,
    tone: "sky",
    solutions: [
      {
        slug: "predikce-soudnich-rozhodnuti",
        title: "Predikce soudních rozhodnutí",
        tagline: "Datový základ pro strategická rozhodnutí ve sporu.",
        description: [
          "Systém analyzuje právní precedenty a predikuje pravděpodobné výsledky sporů.",
          "Zpracovává tisíce rozsudků a identifikuje vzory rozhodování konkrétních soudců.",
          "Objektivní odhad rizik před zahájením sporu.",
        ],
        benefits: ["Datový odhad rizik", "Strategická rozhodnutí", "Analýza precedentů", "Lepší příprava"],
        tags: ["LegalTech", "NLP", "Litigation"],
      },
      {
        slug: "analyza-smluv",
        title: "Právní asistent pro analýzu smluv",
        tagline: "Automatizovaná identifikace rizik ve smlouvách.",
        description: [
          "AI rychle identifikuje rizikové klauzule a neobvyklé podmínky ve smlouvách.",
          "Šetří čas právníkům i firmám a snižuje pravděpodobnost přehlédnutí kritických ustanovení.",
          "Nasaditelné samostatně nebo jako součást interních systémů.",
        ],
        benefits: ["Rychlejší review", "Méně přehlédnutí", "Konzistentní kontrola", "Auditní stopa"],
        tags: ["Contract Review", "LegalTech", "NLP"],
      },
      {
        slug: "pravni-precedenty",
        title: "Automatické zpracování právních precedentů",
        tagline: "Strukturované přehledy judikatury připravené k použití.",
        description: [
          "Systém analyzuje a kategorizuje judikáty z dostupných databází.",
          "Šetří desítky hodin manuální rešerše a snižuje náklady na právní research.",
          "Výstupem jsou strukturované přehledy relevantních precedentů.",
        ],
        benefits: ["Úspora času", "Nižší náklady", "Strukturované výstupy", "Pokrytí databází"],
        tags: ["LegalTech", "Research", "NLP"],
      },
      {
        slug: "due-diligence",
        title: "Due Diligence a M&A analýzy",
        tagline: "Stovky dokumentů a klíčová rizika v zlomku času.",
        description: [
          "Automatizujte zpracování dokumentů v M&A a odhalte rizika rychle.",
          "AI dodává přesné finanční insights pro informovanější rozhodování.",
          "Zkrácení due diligence z týdnů na dny.",
        ],
        benefits: ["Rychlejší DD", "Identifikace rizik", "Insight do financí", "Lepší rozhodnutí"],
        tags: ["M&A", "Due Diligence", "Document AI"],
      },
    ],
  }),

  cat({
    slug: "sprava-majetku",
    title: "Správa majetku",
    subtitle: "Transformace správy firemního majetku pro chytřejší využití zdrojů",
    description: "Předcházejte poruchám a mějte inventář pod kontrolou v reálném čase.",
    icon: Boxes,
    tone: "mint",
    solutions: [
      {
        slug: "udrzba-inventarizace",
        title: "Optimalizace údržby a inventarizace majetku",
        tagline: "AI předvídá poruchy dříve, než nastanou.",
        description: [
          "Automatizujte správu firemního majetku, optimalizujte plánování údržby a snižte provozní náklady.",
          "Chytrá evidence eliminuje manuální chyby a šetří stovky hodin ročně.",
          "Inventář pod kontrolou v reálném čase.",
        ],
        benefits: ["Predikce poruch", "Nižší náklady", "Auto-evidence", "Méně chyb"],
        tags: ["Asset Management", "Predictive Maintenance", "IoT"],
      },
      {
        slug: "digitalni-inspekce",
        title: "Digitální správa a optimalizace majetku",
        tagline: "Předchází poruchám a optimalizuje plány údržby.",
        description: [
          "Inspektor automatizuje kontrolu a správu majetku pomocí ML a analýzy dat.",
          "Přehledná digitální evidence s měřitelnými úsporami.",
          "Vyšší spolehlivost provozu bez zvýšení personálních nákladů.",
        ],
        benefits: ["Digital twin", "Vyšší spolehlivost", "Úspora času", "Lepší přehled"],
        tags: ["Digital Twin", "Asset", "ML"],
      },
      {
        slug: "revize-technologii",
        title: "Správa údržby a revizí technologií",
        tagline: "Soulad s legislativou a eliminace neplánovaných prostojů.",
        description: [
          "Automatizujte plánování revizí pomocí AI a senzorových dat.",
          "Prediktivní analýza prodlužuje životnost zařízení a vytíženost servisních týmů.",
          "Soulad s legislativními požadavky bez manuální administrace.",
        ],
        benefits: ["Compliance", "Méně prostojů", "Delší životnost", "Optimal scheduling"],
        tags: ["Maintenance", "Compliance", "IoT"],
      },
    ],
  }),

  cat({
    slug: "rizeni-projektu",
    title: "Řízení projektů",
    subtitle: "Transformace projektového řízení pro agilní éru",
    description: "Predikce, koordinace a včasné varování o rizicích.",
    icon: KanbanSquare,
    tone: "blush",
    solutions: [
      {
        slug: "orchestrator-zdroju",
        title: "Orchestrátor projektových zdrojů a termínů",
        tagline: "Konec manuálního plánování a kolizí kapacit.",
        description: [
          "Systém koordinuje přidělování týmových kapacit, termíny i čerpání rozpočtů napříč projekty.",
          "Odhaluje kolize zdrojů dříve, než způsobí zpoždění.",
          "Vyšší předvídatelnost dodávek a snížení provozních nákladů.",
        ],
        benefits: ["Bez kolizí", "Předvídatelné dodávky", "Auto-plánování", "Nižší náklady"],
        tags: ["PPM", "Resource Planning", "Automation"],
      },
      {
        slug: "milniky-rezerv",
        title: "Koordinátor milníků a zdrojových rezerv",
        tagline: "Predikce rizik dřív, než ovlivní harmonogram.",
        description: [
          "Systém koordinuje milníky a optimalizuje přidělování zdrojů.",
          "Předvídá rizika a snižuje operativní zátěž projektových manažerů.",
          "Vyšší úspěšnost projektů a prokazatelné snížení nákladů.",
        ],
        benefits: ["Risk prediction", "Vyšší úspěšnost", "Méně admin", "Lepší marže"],
        tags: ["Project Management", "Risk", "PMO"],
      },
      {
        slug: "agilni-rizeni",
        title: "Agilní řízení projektů a predikce dopadů",
        tagline: "Lepší rozhodování na základě dat.",
        description: [
          "Platforma predikuje dopady rozhodnutí, optimalizuje procesy a snižuje rizika.",
          "Přizpůsobuje se specifickým potřebám organizace a integruje se do stávajících nástrojů.",
          "Vyšší úspěšnost dodávek a kratší čas k hotovému výsledku.",
        ],
        benefits: ["Datové rozhodování", "Auto-optimalizace", "Vyšší úspěšnost", "Integrace"],
        tags: ["Agile", "PM Tools", "Decision Support"],
      },
    ],
  }),

  cat({
    slug: "zakaznicka-zkusenost",
    title: "Zákaznická zkušenost",
    subtitle: "Personalizace služeb a inovace zákaznické cesty",
    description: "Loajalita a růst tržeb postavený na konzistentně skvělém zážitku.",
    icon: Sparkles,
    tone: "lilac",
    solutions: [
      {
        slug: "predikce-retence",
        title: "Predikce a redukce churnu",
        tagline: "Identifikace rizikových signálů odchodu dříve, než nastanou.",
        description: [
          "AI analyzuje chování zákazníků v reálném čase a hlásí rizikové vzorce.",
          "Pro každého zákazníka navrhuje konkrétní retenční kroky.",
          "Prokazatelně vyšší loajalita a snížení churn rate o desítky procent.",
        ],
        benefits: ["Nižší churn", "Vyšší loajalita", "Cílená retence", "Real-time signály"],
        tags: ["Retention", "Churn", "CX Analytics"],
      },
      {
        slug: "virtualni-ambasador",
        title: "Virtuální ambasador značky",
        tagline: "Autentická komunikace 24/7 v hlasu vaší značky.",
        description: [
          "Virtuální ambasador zajišťuje personalizovanou komunikaci nepřetržitě.",
          "Konzistentní a kontextově relevantní interakce prohlubují loajalitu.",
          "Reflektuje jedinečný hlas a hodnoty vaší značky bez generických odpovědí.",
        ],
        benefits: ["24/7 komunikace", "Brand voice", "Personalizace", "Vyšší loajalita"],
        tags: ["Brand", "Conversational AI", "CX"],
      },
    ],
  }),
];

export const getAllSolutions = () =>
  categories.flatMap((c) =>
    c.solutions.map((s) => ({ ...s, category: c }))
  );

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getSolutionBySlug = (categorySlug: string, solutionSlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  const solution = category.solutions.find((s) => s.slug === solutionSlug);
  if (!solution) return null;
  return { category, solution };
};

export const totalSolutionsCount = () =>
  categories.reduce((acc, c) => acc + c.solutions.length, 0);
