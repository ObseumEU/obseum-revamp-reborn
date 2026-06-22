import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Clock, Zap, Users } from "lucide-react";

const useCountUp = (target: number, duration = 1600) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { val, ref };
};

const Counter = ({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) => {
  const { val, ref } = useCountUp(to);
  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold tracking-tightest text-gradient">
      {val.toFixed(decimals)}
      {suffix}
    </div>
  );
};

const Metrics = () => {
  const { t } = useLanguage();
  const items = [
    { Icon: Clock, to: 70, suffix: "%", labelKey: "metrics.m1" },
    { Icon: TrendingUp, to: 3.5, suffix: "×", decimals: 1, labelKey: "metrics.m2" },
    { Icon: Zap, to: 50, suffix: "+", labelKey: "metrics.m3" },
    { Icon: Users, to: 40, suffix: "+", labelKey: "metrics.m4" },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden border border-border/40 max-w-6xl mx-auto">
          {items.map(({ Icon, to, suffix, decimals, labelKey }) => (
            <div key={labelKey} className="bg-card p-8 md:p-10 hover:bg-gradient-card transition-all">
              <Icon className="h-6 w-6 text-primary mb-5" />
              <Counter to={to} suffix={suffix} decimals={decimals} />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mt-3">
                {t(labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
