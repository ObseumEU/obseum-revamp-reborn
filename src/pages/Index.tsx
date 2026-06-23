import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Stories from "@/components/Stories";
import PodcastPlayer from "@/components/PodcastPlayer";
import UseCasesPreview from "@/components/UseCasesPreview";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const SITE_URL = "https://obseum-revamp-reborn.lovable.app";

const faqs = [
  { q: "Nejsme moc malí na AI?", a: "Naopak. Menší firma většinou pocítí přínos rychleji — jeden ušetřený den práce týdně je u vás vidět hned." },
  { q: "Kolik to bude stát?", a: "Záleží, co se rozhodneme řešit. Většina projektů se vrátí do 3–6 měsíců. Konkrétní cenu řekneme po první konzultaci — vždy předem a bez překvapení." },
  { q: "Co když tomu nerozumíme?", a: "To je v pořádku — od toho jsme my. Mluvíme česky, vysvětlíme všechno na vašich konkrétních příkladech. Žádné cizí zkratky." },
  { q: "Jak dlouho to trvá?", a: "Jednodušší věci máte hotové za 2–4 týdny. Větší projekty děláme po kouskách, abyste přínos cítili hned od začátku." },
  { q: "A naše data? Bezpečnost?", a: "Vaše data zůstávají vaše — pracujeme dle GDPR, s jasným přístupem a smlouvou. Stejně přísně, jako řešíte účetnictví." },
];

const Index = () => {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Organization", name: "Obseum", url: `${SITE_URL}/`, description: "Implementace AI a procesní automatizace pro malé a střední firmy." },
    { "@context": "https://schema.org", "@type": "WebSite", name: "Obseum", url: `${SITE_URL}/` },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Seo
        title="Obseum — AI automatizace pro malé a střední firmy"
        description="Šetříme českým firmám hodiny denně. AI agenti, automatizace dokumentů, lead generation a virtuální asistenti pro zákazníky."
        path="/"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <UseCasesPreview />
        <Stories />
        <PodcastPlayer />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
