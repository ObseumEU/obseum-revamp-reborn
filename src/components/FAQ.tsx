import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const items = ["q1", "q2", "q3", "q4", "q5"];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-ink/50 mb-3 block">
            {t("faq.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tightest text-ink leading-[1.05]">
            {t("faq.title")}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-2 md:p-4 shadow-soft border border-ink/5">
          <Accordion type="single" collapsible className="w-full">
            {items.map((k) => (
              <AccordionItem key={k} value={k} className="border-ink/10 px-4 last:border-b-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-ink hover:no-underline py-5">
                  {t(`faq.items.${k}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-ink/70 text-base leading-relaxed pb-5">
                  {t(`faq.items.${k}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
