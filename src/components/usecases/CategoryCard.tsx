import { Link } from "react-router-dom";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type Tone = "mint" | "blush" | "sky" | "sand" | "lilac" | "lime";

const toneClasses: Record<Tone, string> = {
  mint: "bg-tone-mint text-tone-mint-ink",
  blush: "bg-tone-blush text-tone-blush-ink",
  sky: "bg-tone-sky text-tone-sky-ink",
  sand: "bg-tone-sand text-tone-sand-ink",
  lilac: "bg-tone-lilac text-tone-lilac-ink",
  lime: "bg-tone-lime text-tone-lime-ink",
};

type Props = {
  to: string;
  icon: LucideIcon;
  tone: Tone;
  title: string;
  description: string;
  count: number;
};

const CategoryCard = ({ to, icon: Icon, tone, title, description, count }: Props) => {
  return (
    <Link
      to={to}
      className="group block bg-white rounded-3xl p-7 shadow-soft hover:shadow-[0_20px_60px_-20px_hsl(175_60%_8%_/_0.25)] hover:-translate-y-1 transition-all duration-300 border border-ink/5"
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${toneClasses[tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${toneClasses[tone]}`}>
          {count} řešení
        </span>
      </div>
      <h3 className="text-2xl font-bold text-ink mb-2 leading-tight">{title}</h3>
      <p className="text-ink/65 text-sm leading-relaxed mb-5">{description}</p>
      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:gap-2.5 transition-all">
        Zobrazit kategorii
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </Link>
  );
};

export default CategoryCard;
