import { ReactNode } from "react";
import { Lightbulb } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

const UseCasesHero = ({ eyebrow = "AI řešení", title, subtitle, children }: Props) => {
  return (
    <section className="bg-[hsl(var(--teal-deep))] text-cream pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cream/85 mb-8">
            <Lightbulb className="h-3.5 w-3.5 text-lime" />
            {eyebrow}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tightest leading-[1.05] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-cream/70 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default UseCasesHero;
