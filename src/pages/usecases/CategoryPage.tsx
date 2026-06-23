import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import UseCasesHero from "@/components/usecases/UseCasesHero";
import SolutionCard from "@/components/usecases/SolutionCard";
import Breadcrumbs from "@/components/usecases/Breadcrumbs";
import { getCategoryBySlug } from "@/data/useCases";

const SITE_URL = "https://obseum-revamp-reborn.lovable.app";

const CategoryPage = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;

  if (!category) return <Navigate to="/use-cases" replace />;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "AI řešení", item: `${SITE_URL}/use-cases` },
        { "@type": "ListItem", position: 3, name: category.title, item: `${SITE_URL}/use-cases/${category.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.title,
      description: category.description,
      url: `${SITE_URL}/use-cases/${category.slug}`,
      hasPart: category.solutions.map((s) => ({
        "@type": "Service",
        name: s.title,
        description: s.tagline,
        url: `${SITE_URL}/use-cases/${category.slug}/${s.slug}`,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Seo
        title={`${category.title} — AI řešení | Obseum`}
        description={`${category.subtitle}. ${category.solutions.length} konkrétních AI řešení pro váš byznys.`}
        path={`/use-cases/${category.slug}`}
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <UseCasesHero eyebrow={category.subtitle} title={category.title} subtitle={category.description}>
          <div className="mt-8">
            <Breadcrumbs
              items={[
                { label: "Domů", to: "/" },
                { label: "AI řešení", to: "/use-cases" },
                { label: category.title },
              ]}
            />
          </div>
        </UseCasesHero>

        <section className="py-16 md:py-20 -mt-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
              {category.solutions.map((s) => (
                <SolutionCard
                  key={s.slug}
                  to={`/use-cases/${category.slug}/${s.slug}`}
                  title={s.title}
                  tagline={s.tagline}
                  tags={s.tags}
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

export default CategoryPage;
