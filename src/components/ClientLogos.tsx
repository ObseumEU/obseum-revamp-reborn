import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import o2Logo from "@/assets/O2-Logo-9.svg";
import csobLogo from "@/assets/csob-1.svg";
import cancomLogo from "@/assets/Cancom_logo_bw.svg";
import homeCreditLogo from "@/assets/Home_Credit_logo.svg";
import innogyLogo from "@/assets/Innogy_Logo.svg";
import heimLogo from "@/assets/HEIM.svg";
import idnesLogo from "@/assets/idnes.svg";
import mycroftLogo from "@/assets/mycroftmind.svg";
import clientLogo1 from "@/assets/client-logo-1.svg";
import bakLogo from "@/assets/client-logo-bak.png";

const logos = [
  { name: "O2", src: o2Logo },
  { name: "ČSOB", src: csobLogo },
  { name: "Cancom", src: cancomLogo },
  { name: "Home Credit", src: homeCreditLogo },
  { name: "Innogy", src: innogyLogo },
  { name: "HEIM", src: heimLogo },
  { name: "iDNES", src: idnesLogo },
  { name: "MycroftMind", src: mycroftLogo },
  { name: "Client", src: clientLogo1 },
  { name: "BAK stavební společnost", src: bakLogo },
];

const ClientLogos = () => {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const dragRef = useRef<{ active: boolean; startX: number; startOffset: number }>({
    active: false,
    startX: 0,
    startOffset: 0,
  });

  useEffect(() => {
    let raf = 0;
    const speed = 25; // px/s

    const tick = (ts: number) => {
      const track = trackRef.current;
      if (track) {
        if (lastTsRef.current == null) lastTsRef.current = ts;
        const dt = (ts - lastTsRef.current) / 1000;
        lastTsRef.current = ts;

        if (!paused && !dragRef.current.active) {
          offsetRef.current -= speed * dt;
        }
        const half = track.scrollWidth / 2;
        if (half > 0) {
          if (offsetRef.current <= -half) offsetRef.current += half;
          if (offsetRef.current > 0) offsetRef.current -= half;
        }
        track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startOffset: offsetRef.current,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    offsetRef.current = dragRef.current.startOffset + dx;
  };
  const endDrag = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <section className="py-16 bg-cream-2 border-y border-ink/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink/50">
            {t("clients.title")}
          </span>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream-2 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream-2 to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex items-center will-change-transform"
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map(({ name, src }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center h-14 px-8 flex-shrink-0 mx-3 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={src}
                  alt={name}
                  draggable={false}
                  className="h-full w-auto max-w-[140px] object-contain grayscale pointer-events-none"
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
