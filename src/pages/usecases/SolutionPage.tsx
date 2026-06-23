import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/usecases/Breadcrumbs";
import SolutionCard from "@/components/usecases/SolutionCard";
import { getSolutionBySlug } from "@/data/useCases";

const SITE_URL = "https://obseum-revamp-reborn.lovable.app";

const SolutionPage = () => {
  const { category: categorySlug, solution: solutionSlug } = useParams<{
    category: string;
    solution: string;
  }>();
  const data = categorySlug && solutionSlug ? getSolutionBySlug(categorySlug, solutionSlug) : null;

  if (!data) return <Navigate to="/use-cases" replace />;
  const { category, solution } = data;

  const related = category.solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domů", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "AI řešení", item: `${SITE_URL}/use-cases` },
        {
          "@type": "ListItem",
          position: 3,
          name: category.title,
          item: `${SITE_URL}/use-cases/${category.slug}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: solution.title,
          item: `${SITE_URL}/use-cases/${category.slug}/${solution.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: solution.title,
      description: solution.tagline,
      provider: { "@type": "Organization", name: "Obseum", url: `${SITE_URL}/` },
      serviceType: category.title,
      url: `${SITE_URL}/use-cases/${category.slug}/${solution.slug}`,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Seo
        title={`${solution.title} | Obseum`}
        description={solution.tagline}
        path={`/use-cases/${category.slug}/${solution.slug}`}
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[hsl(var(--teal-deep))] text-cream pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "Domů", to: "/" },
                  { label: "AI řešení", to: "/use-cases" },
                  { label: category.title, to: `/use-cases/${category.slug}` },
                  { label: solution.title },
                ]}
              />
            </div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime/10 border border-lime/30 text-xs font-medium text-lime mb-6">
              {category.title}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05] mb-6">
              {solution.title}
            </h1>
            <p className="text-xl md:text-2xl text-cream/75 max-w-3xl leading-relaxed">{solution.tagline}</p>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              {/* Description */}
              <article className="space-y-6">
                {solution.description.map((para, i) => (
                  <p key={i} className="text-lg text-ink/80 leading-relaxed">
                    {para}
                  </p>
                ))}

                {solution.tags.length > 0 && (
                  <div className="pt-6 border-t border-ink/10">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-ink/60 mb-3">
                      Technologie a oblast
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cream-2 text-ink/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Benefits sidebar */}
              <aside className="bg-white rounded-3xl p-7 shadow-soft border border-ink/5 h-fit lg:sticky lg:top-24">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-ink/60 mb-4">
                  Co získáte
                </h2>
                <ul className="space-y-3 mb-6">
                  {solution.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink">
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-lime/30 text-lime-ink shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full rounded-full bg-lime text-lime-ink hover:bg-lime/90 hover:scale-100 font-semibold"
                >
                  <Link to="/#contact">
                    Domluvit konzultaci
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </aside>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 md:py-20 bg-cream-2">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/50 mb-2 block">
                    Další z kategorie
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-ink">{category.title}</h2>
                </div>
                <Link
                  to={`/use-cases/${category.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink-2 transition"
                >
                  Zobrazit všechna ({category.solutions.length})
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((s) => (
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
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SolutionPage;
