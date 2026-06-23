import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import UseCasesHero from "@/components/usecases/UseCasesHero";
import CategoryCard from "@/components/usecases/CategoryCard";
import { categories, totalSolutionsCount } from "@/data/useCases";

const SITE_URL = "https://obseum-revamp-reborn.lovable.app";

const UseCasesIndex = () => {
  const total = totalSolutionsCount();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI řešení",
    url: `${SITE_URL}/use-cases`,
    description: `Katalog ${total}+ AI řešení napříč ${categories.length} kategoriemi — od automatizace procesů po prediktivní analytiku.`,
    hasPart: categories.map((c) => ({
      "@type": "CreativeWork",
      name: c.title,
      url: `${SITE_URL}/use-cases/${c.slug}`,
      description: c.description,
    })),
  };

  return (
    <div className="min-h-screen bg-cream">
      <Seo
        title="AI řešení pro váš byznys | Obseum"
        description={`${total}+ konkrétních AI řešení v ${categories.length} oborech. Automatizace, prediktivní analytika, dokumenty, bezpečnost a další.`}
        path="/use-cases"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <UseCasesHero
          title="AI řešení"
          subtitle={`Jak pomáháme firmám v různých odvětvích s digitální transformací. ${total} konkrétních řešení napříč ${categories.length} oblastmi.`}
        />

        <section className="py-16 md:py-20 -mt-12">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
              {categories.map((cat) => (
                <CategoryCard
                  key={cat.slug}
                  to={`/use-cases/${cat.slug}`}
                  icon={cat.icon}
                  tone={cat.tone}
                  title={cat.title}
                  description={cat.subtitle}
                  count={cat.solutions.length}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesIndex;
