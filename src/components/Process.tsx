import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const { t } = useLanguage();
  const steps = ["s1", "s2", "s3", "s4", "s5"];
  const tones = [
    "bg-tone-mint text-tone-mint-ink",
    "bg-tone-blush text-tone-blush-ink",
    "bg-tone-sky text-tone-sky-ink",
    "bg-tone-sand text-tone-sand-ink",
    "bg-tone-lilac text-tone-lilac-ink",
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-cream-2">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-ink/50 mb-3 block">
            {t("process.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tightest text-ink leading-[1.05] mb-5">
            {t("process.title")}
          </h2>
          <p className="text-lg text-ink/65 leading-relaxed">{t("process.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div
              key={s}
              className="bg-white rounded-3xl p-7 shadow-soft border border-ink/5 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg mb-5 ${tones[i]}`}>
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-ink mb-2 leading-tight">
                {t(`process.steps.${s}.title`)}
              </h3>
              <p className="text-ink/65 text-sm leading-relaxed">
                {t(`process.steps.${s}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
