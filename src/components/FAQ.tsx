import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const items = ["q1", "q2", "q3", "q4", "q5"];

  return (
    <section className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
            {t('faq.eyebrow')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">{t('faq.title')}</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((k) => (
            <AccordionItem key={k} value={k} className="border-border/50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline">
                {t(`faq.items.${k}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {t(`faq.items.${k}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
