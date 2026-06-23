import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CategoryCard from "@/components/usecases/CategoryCard";
import { categories, totalSolutionsCount } from "@/data/useCases";

const UseCasesPreview = () => {
  const total = totalSolutionsCount();
  // Featured: take 6 most relevant SME-friendly categories
  const featured = categories.filter((c) =>
    ["automatizace-procesu", "dokumenty-obsah", "zakaznicka-podpora", "marketing", "prodej-obchod", "finance"].includes(c.slug)
  );

  return (
    <section id="usecases" className="py-24 md:py-32 bg-cream text-ink">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-ink/50 mb-3 block">
              AI řešení
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tightest leading-[1.05] mb-4 text-ink">
              Jak pomáháme firmám napříč obory
            </h2>
            <p className="text-lg text-ink/65 leading-relaxed">
              {total} konkrétních AI řešení ve {categories.length} oblastech — od automatizace
              procesů po prediktivní analytiku.
            </p>
          </div>
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-cream text-sm font-semibold hover:bg-ink-2 transition shrink-0"
          >
            Zobrazit všech {categories.length} kategorií
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {featured.map((cat) => (
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
  );
};

export default UseCasesPreview;
