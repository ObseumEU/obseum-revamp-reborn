import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.services')}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.about')}
            </a>
            <a href="/career" className="text-foreground hover:text-primary transition-smooth">
              Career
            </a>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('cz')}
                  className={`text-sm px-2 py-1 rounded transition-colors ${
                    language === 'cz' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  CZ
                </button>
                <span className="text-muted-foreground">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm px-2 py-1 rounded transition-colors ${
                    language === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const footer = document.querySelector('footer');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('nav.contact')}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;