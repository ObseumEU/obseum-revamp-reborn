import { useLanguage } from "@/contexts/LanguageContext";
import cancomLogo from "@/assets/Cancom_logo_bw.svg";
import o2Logo from "@/assets/O2-Logo-9.svg";
import heimLogo from "@/assets/HEIM.svg";
import homeCreditLogo from "@/assets/Home_Credit_logo.svg";
import innogyLogo from "@/assets/Innogy_Logo.svg";
import csobLogo from "@/assets/csob-1.svg";
import mycroftmindLogo from "@/assets/mycroftmind.svg";
import idnesLogo from "@/assets/idnes.svg";

const clients = [
  { name: "O2", logo: o2Logo },
  { name: "ČSOB", logo: csobLogo },
  { name: "Heimstaden", logo: heimLogo },
  { name: "Home Credit", logo: homeCreditLogo },
  { name: "Innogy", logo: innogyLogo },
  { name: "Cancom", logo: cancomLogo },
  { name: "MycroftMind", logo: mycroftmindLogo },
  { name: "Idnes", logo: idnesLogo },
];

const ClientLogos = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-cream-2 border-y border-ink/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/50">
            {t("clients.title")}
          </span>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream-2 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream-2 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-[scroll_60s_linear_infinite] items-center">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center justify-center h-16 w-36 sm:w-44 flex-shrink-0 mx-4 sm:mx-6 group"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-9 w-auto object-contain opacity-60 group-hover:opacity-90 transition filter brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
