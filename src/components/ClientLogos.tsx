import { useLanguage } from "@/contexts/LanguageContext";
import o2Logo from "@/assets/O2-Logo-9.svg";
import csobLogo from "@/assets/csob-1.svg";
import cancomLogo from "@/assets/Cancom_logo_bw.svg";
import homeCreditLogo from "@/assets/Home_Credit_logo.svg";
import innogyLogo from "@/assets/Innogy_Logo.svg";
import heimLogo from "@/assets/HEIM.svg";
import idnesLogo from "@/assets/idnes.svg";
import mycroftLogo from "@/assets/mycroftmind.svg";

const logos = [
  { name: "O2", src: o2Logo },
  { name: "ČSOB", src: csobLogo },
  { name: "Cancom", src: cancomLogo },
  { name: "Home Credit", src: homeCreditLogo },
  { name: "Innogy", src: innogyLogo },
  { name: "HEIM", src: heimLogo },
  { name: "iDNES", src: idnesLogo },
  { name: "MycroftMind", src: mycroftLogo },
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
            {[...logos, ...logos].map(({ name, src }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center h-14 px-8 flex-shrink-0 mx-3 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={src}
                  alt={name}
                  className="h-full w-auto max-w-[140px] object-contain grayscale"
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
