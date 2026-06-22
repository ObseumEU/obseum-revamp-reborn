import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 max-w-md">
            <Logo />
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/90">
              {t('footer.services')}
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.items.agents.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.items.workflow.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.items.leads.title')}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t('services.items.docs.title')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/90">
              {t('footer.company')}
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><a href="mailto:info@obseum.cz" className="hover:text-primary transition-colors">info@obseum.cz</a></li>
              <li><a href="tel:+420724676829" className="hover:text-primary transition-colors">+420 724 676 829</a></li>
              <li>Rybná 716/24, Praha</li>
              <li className="text-xs text-muted-foreground/70 pt-2">IČO: 07098308 · DIČ: CZ07098308</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Obseum s.r.o. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
