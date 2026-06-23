import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[hsl(var(--teal-deep))] text-cream border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 max-w-md">
            <Logo />
            <p className="text-cream/70 mt-5 leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.18em] text-cream/55">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li><a href="/use-cases/automatizace-procesu" className="hover:text-lime transition-colors">Automatizace procesů</a></li>
              <li><a href="/use-cases/zakaznicka-podpora" className="hover:text-lime transition-colors">Zákaznická podpora</a></li>
              <li><a href="/use-cases/dokumenty-obsah" className="hover:text-lime transition-colors">Dokumenty a obsah</a></li>
              <li><a href="/use-cases" className="hover:text-lime transition-colors">Všechna AI řešení</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.18em] text-cream/55">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li><a href="mailto:info@obseum.cz" className="hover:text-lime transition-colors">info@obseum.cz</a></li>
              <li><a href="tel:+420724676829" className="hover:text-lime transition-colors">+420 724 676 829</a></li>
              <li>Rybná 716/24, Praha</li>
              <li className="text-xs text-cream/50 pt-2">IČO: 07098308 · DIČ: CZ07098308</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-cream/55 text-sm">
          <p>&copy; {new Date().getFullYear()} Obseum s.r.o. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
