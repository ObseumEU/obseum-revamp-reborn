import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const { t } = useLanguage();
  const steps = ["s1", "s2", "s3", "s4", "s5"];

  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-subtle relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
            {t('process.eyebrow')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('process.title')}</h2>
          <p className="text-lg text-muted-foreground">{t('process.subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>

          {steps.map((s, i) => (
            <div
              key={s}
              className={`relative flex md:items-center gap-6 md:gap-12 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary z-10">
                {i + 1}
              </div>
              <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {t(`process.steps.${s}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`process.steps.${s}.desc`)}
                </p>
              </div>
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
