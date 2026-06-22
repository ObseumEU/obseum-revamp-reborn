import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Coins, ShieldCheck, Sparkles, Zap } from "lucide-react";

const SITE_URL = "https://obseum-revamp-reborn.lovable.app";
const PATH = "/blog/ai-automation-small-business";
const TITLE = "AI automatizace pro malé firmy — praktický průvodce, jak začít";
const DESCRIPTION =
  "Jak malá nebo střední firma bez IT týmu zavede AI automatizaci. Konkrétní příklady, levné nástroje (Zapier, ChatGPT) a první kroky, které se vrátí do 90 dnů.";

const AiAutomationSmallBusiness = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      author: { "@type": "Organization", name: "Obseum" },
      publisher: {
        "@type": "Organization",
        name: "Obseum",
        url: `${SITE_URL}/`,
      },
      mainEntityOfPage: `${SITE_URL}${PATH}`,
      datePublished: "2026-06-22",
      dateModified: "2026-06-22",
      inLanguage: "cs-CZ",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "AI automatizace pro malé firmy", item: `${SITE_URL}${PATH}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-3xl">
            <nav aria-label="Drobečková navigace" className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Domů</Link>
              <span className="mx-2">/</span>
              <span>Blog</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">AI automatizace pro malé firmy</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Průvodce</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI automatizace pro malé firmy: jak začít bez IT týmu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Praktický průvodce pro majitele malých a středních firem. Žádné cizí zkratky — jen
              konkrétní nástroje, ceny a první kroky, které vám vrátí investici do 90 dnů.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 minut čtení</span>
              <span>·</span>
              <span>Aktualizováno 22. 6. 2026</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-6 max-w-3xl prose prose-invert prose-lg max-w-none">
            <div className="space-y-10 text-foreground/90 leading-relaxed">

              <section>
                <h2 className="text-3xl font-bold mb-4">Proč by se vás AI měla týkat</h2>
                <p className="text-lg">
                  Pokud vedete firmu do padesáti lidí, nepotřebujete velký AI projekt.
                  Potřebujete pár chytře nastavených věcí, které vám ušetří 10–20 hodin týdně.
                  Většinou jde o e-maily, faktury, nabídky, odpovědi zákazníkům a hledání ve vlastních dokumentech.
                </p>
                <p>
                  V tomhle průvodci ukážeme přesně, co dnes funguje pro malé české firmy, kolik
                  to stojí a jak se k tomu dostat bez vlastních programátorů.
                </p>
              </section>

              <section className="grid sm:grid-cols-3 gap-4 not-prose">
                {[
                  { icon: Clock, title: "10–20 h týdně", desc: "Typická úspora času u SMB" },
                  { icon: Coins, title: "Od 500 Kč/měs", desc: "Vstupní nástroje (ChatGPT, Zapier)" },
                  { icon: ShieldCheck, title: "GDPR friendly", desc: "Při správném nastavení" },
                ].map((s, i) => (
                  <div key={i} className="glass rounded-2xl p-5 border border-border/40">
                    <s.icon className="w-6 h-6 text-primary mb-3" />
                    <div className="font-bold text-lg">{s.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.desc}</div>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">5 typů úloh, které AI zvládne hned</h2>
                <ol className="space-y-4 list-decimal pl-6">
                  <li><strong>Odpovídání na opakující se e-maily</strong> — virtuální asistent vytáhne objednávky, dotazy ke zboží nebo žádosti o nabídku a buď odpoví sám, nebo připraví draft.</li>
                  <li><strong>Zpracování faktur a dokumentů</strong> — AI přečte PDF, vytáhne částky, IČO, splatnost a hodí to do účetního systému.</li>
                  <li><strong>Hledání ve smlouvách</strong> — místo 40 minut hledání odpověď za 4 vteřiny.</li>
                  <li><strong>Tvorba nabídek a textů</strong> — šablony pro nabídky, sociální sítě, popisky e-shopu.</li>
                  <li><strong>Kvalifikace leadů</strong> — chatbot na webu zjistí, co zákazník potřebuje, a zařadí ho do CRM.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Levné nástroje, kterými můžete začít</h2>
                <p>
                  Pro většinu malých firem stačí kombinace tří kategorií nástrojů:
                </p>
                <div className="grid md:grid-cols-3 gap-4 not-prose mt-6">
                  {[
                    {
                      name: "ChatGPT / Claude",
                      price: "~500 Kč/měs/uživatel",
                      use: "Psaní textů, nabídek, e-mailů, brainstorming, shrnutí dokumentů.",
                    },
                    {
                      name: "Zapier / Make",
                      price: "~600 Kč/měs",
                      use: "Propojení aplikací (e-mail, Google Sheets, CRM) bez programování.",
                    },
                    {
                      name: "n8n / vlastní agent",
                      price: "Self-hosted",
                      use: "Když chcete data držet u sebe a stavět složitější procesy.",
                    },
                  ].map((tool) => (
                    <div key={tool.name} className="glass rounded-2xl p-5 border border-border/40">
                      <div className="font-bold text-lg mb-1">{tool.name}</div>
                      <div className="text-xs text-primary font-medium uppercase tracking-wider mb-3">{tool.price}</div>
                      <div className="text-sm text-muted-foreground">{tool.use}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Jak začít — 4 kroky na prvních 30 dnů</h2>
                <div className="space-y-4 not-prose">
                  {[
                    { n: "01", t: "Zapište 10 činností, které ve firmě nejvíc zdržují", d: "Vy, vaši lidé, účetní. Ke každé připište, kolik hodin týdně to zabere." },
                    { n: "02", t: "Vyberte 2 s nejvyšší úsporou a jasnými vstupy", d: "Ideálně něco, co se opakuje a má strukturovaná data — e-maily, faktury, formuláře." },
                    { n: "03", t: "Postavte nejjednodušší možný prototyp", d: "ChatGPT s šablonou + Zapier propojení. Za týden vidíte první výsledek." },
                    { n: "04", t: "Spočítejte úsporu a rozšiřujte", d: "Když to funguje, přidejte další úlohu. Když ne, zahoďte a zkuste jinou." },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-5 glass rounded-2xl p-5 border border-border/40">
                      <div className="text-3xl font-bold text-primary shrink-0">{step.n}</div>
                      <div>
                        <div className="font-bold text-lg mb-1">{step.t}</div>
                        <div className="text-muted-foreground">{step.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Časté chyby, kterým se vyhněte</h2>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Začínat AI strategií místo konkrétní úlohou. Začněte jedním procesem.",
                    "Kupovat drahý nástroj dřív, než víte, co řešíte. ChatGPT + Zapier vystačí na 80 % případů.",
                    "Posílat citlivá data do veřejných AI bez kontroly. Vždy si pohlídejte, kam data tečou.",
                    "Nechat to viset na jednom nadšenci. Sepište postup, ať to umí použít víc lidí.",
                  ].map((tip) => (
                    <li key={tip} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Časté otázky</h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kolik mě to bude reálně stát?</h3>
                    <p className="text-muted-foreground">U první automatizace počítejte s 15–60 tisíc Kč na nastavení a 1–3 tisíce měsíčně na provoz. Návratnost obvykle do 3–6 měsíců.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nahradí AI moje zaměstnance?</h3>
                    <p className="text-muted-foreground">U malých firem ne — vezme jim nudnou rutinu a oni získají čas na věci, na které dřív nestíhali. Klienti, prodej, péče o lidi.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Co když nejsem technický typ?</h3>
                    <p className="text-muted-foreground">Vůbec nevadí. Stačí, že víte, co ve firmě zdržuje. Nástroje dnes nepotřebují programování — od toho jsou no-code platformy nebo my.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="not-prose">
                <div className="glass rounded-3xl p-8 md:p-10 border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5 text-center">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Chcete vědět, co by AI zvládla u vás?</h2>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Projdeme spolu vaši firmu a do týdne víte, kterých 1–3 věcí vám ušetří nejvíc času.
                    Konzultace je zdarma a bez závazku.
                  </p>
                  <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground font-bold">
                    <Link to="/#contact">
                      Domluvit nezávaznou konzultaci
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </section>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AiAutomationSmallBusiness;
