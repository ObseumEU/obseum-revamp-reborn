import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goToAnchor = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 md:px-6">
      <nav
        className="mx-auto max-w-6xl flex items-center justify-between gap-3 rounded-full pl-5 pr-3 py-2.5
                   bg-[hsl(var(--teal-deep))]/95 backdrop-blur-xl border border-white/10
                   shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]"
      >
        <Link to="/" className="flex items-center shrink-0">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm text-cream/85">
          <button
            onClick={() => goToAnchor("services")}
            className="px-3 py-1.5 rounded-full hover:text-lime hover:bg-white/5 transition"
          >
            {t("nav.services")}
          </button>
          <Link
            to="/use-cases"
            className="px-3 py-1.5 rounded-full hover:text-lime hover:bg-white/5 transition inline-flex items-center gap-2"
          >
            AI řešení
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-lime text-lime-ink">63</span>
          </Link>
          <button
            onClick={() => goToAnchor("process")}
            className="px-3 py-1.5 rounded-full hover:text-lime hover:bg-white/5 transition"
          >
            {t("nav.process")}
          </button>
          <Link
            to="/career"
            className="px-3 py-1.5 rounded-full hover:text-lime hover:bg-white/5 transition"
          >
            Career
          </Link>

          <div className="flex items-center gap-1 pl-2 ml-1 border-l border-white/10">
            <button
              onClick={() => setLanguage("cz")}
              className={`text-[11px] px-2 py-1 rounded-full transition-colors ${
                language === "cz" ? "text-lime font-semibold" : "text-cream/60 hover:text-cream"
              }`}
            >
              CZ
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-[11px] px-2 py-1 rounded-full transition-colors ${
                language === "en" ? "text-lime font-semibold" : "text-cream/60 hover:text-cream"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <Button
          size="sm"
          onClick={() => goToAnchor("contact")}
          className="rounded-full bg-lime text-lime-ink hover:bg-lime/90 hover:scale-100 font-semibold px-4 shrink-0"
        >
          {t("nav.contact")}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
