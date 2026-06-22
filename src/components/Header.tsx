import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center"><Logo /></a>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollTo('usecases')} className="text-sm text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.usecases')}
            </button>
            <button onClick={() => scrollTo('process')} className="text-sm text-foreground/80 hover:text-primary transition-smooth">
              {t('nav.process')}
            </button>
            <a href="/career" className="text-sm text-foreground/80 hover:text-primary transition-smooth">
              Career
            </a>

            <div className="flex items-center space-x-2 pl-2 border-l border-border/50">
              <button
                onClick={() => setLanguage('cz')}
                className={`text-xs px-2 py-1 rounded transition-colors ${
                  language === 'cz' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                CZ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs px-2 py-1 rounded transition-colors ${
                  language === 'en' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            <Button size="sm" onClick={() => scrollTo('contact')}>
              {t('nav.contact')}
            </Button>
          </div>

          <Button size="sm" className="md:hidden" onClick={() => scrollTo('contact')}>
            {t('nav.contact')}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
