import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Props = {
  to: string;
  title: string;
  tagline: string;
  tags?: string[];
};

const SolutionCard = ({ to, title, tagline, tags }: Props) => {
  return (
    <Link
      to={to}
      className="group flex flex-col h-full bg-white rounded-3xl p-7 shadow-soft hover:shadow-[0_20px_60px_-20px_hsl(175_60%_8%_/_0.25)] hover:-translate-y-1 transition-all duration-300 border border-ink/5"
    >
      <h3 className="text-xl font-bold text-ink mb-3 leading-tight">{title}</h3>
      <p className="text-ink/65 text-sm leading-relaxed mb-5 flex-1">{tagline}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-cream-2 text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:gap-2.5 transition-all">
        Číst více
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </Link>
  );
};

export default SolutionCard;
