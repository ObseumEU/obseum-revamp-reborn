const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Obseum</h3>
            <p className="text-muted-foreground max-w-md">
              Specializujeme se na vývoj software, implementaci AI a penetrační testování. 
              Máme přes 10 let zkušeností v oboru.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Služby</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Vývoj software</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Umělá inteligence</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Penetrační testování</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">info@obseum.cz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">+420 XXX XXX XXX</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Obseum. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;