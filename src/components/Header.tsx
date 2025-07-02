import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Obseum
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Úvod
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Služby
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              O nás
            </a>
            <Button variant="outline" size="sm">
              Kontakt
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;