import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Obseum</h3>
            <p className="text-muted-foreground max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.software.title')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.ai.title')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('services.security.title')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">info@obseum.cz</a></li>
              <li><a href="tel:+420724676829" className="hover:text-primary transition-colors">+420 724 676 829</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Obseum. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;