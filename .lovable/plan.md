## Problém
Homepage je mix dvou světů:
- Nový **nobig styl** (cream pozadí, teal-deep, lime, bílé rounded-3xl karty) — Header, UseCasesPreview, /use-cases
- Starý **Neural Noir** (tmavě modré pozadí, neon cyan/violet, glassmorphism) — Hero, Services, AgentFlow, AutomationFlow, Stories, Metrics, Process, Tools, FAQ, Contact, Footer, UseCases

Vypadá to jako dva weby slepené dohromady. Fix: celá homepage = jen nobig styl.

## Co udělám

**1. Globální barvy (`src/index.css`)**
Přepnu `--background` z tmavě modré (`230 25% 4%`) na cream (`36 33% 94%`), `--foreground` na ink (tmavá teal). Tím všechny sekce automaticky dostanou světlé pozadí místo tmavého.

**2. Nová homepage `src/pages/Index.tsx`**
Ponechám jen sekce ve stylu nobig (po restyle):
- `Hero` — kompletně přepsat: cream pozadí, velký ink nadpis, lime CTA pill, jednoduchá ilustrace/badge vlevo nahoře
- `ClientLogos` — bílý/cream proužek, ink loga
- `UseCasesPreview` — už hotové, ponechat
- `Process` — přepsat na bílé rounded-3xl karty s pastelovými ikonami (4 kroky)
- `Stories` / case studies — bílé karty na cream, ink typografie
- `PodcastPlayer` — přebarvit do teal-deep karty s lime accentem
- `FAQ` — accordion na cream, bílé karty, ink text
- `Contact` — teal-deep sekce s lime CTA a bílou kartou formuláře
- `Footer` — teal-deep s cream textem a lime odkazy

**Odstraním z homepage** (zůstanou v repu jako legacy, ale neimportované):
- `AgentFlow`, `AutomationFlow`, `Services` (starý), `UseCases` (starý/duplikuje preview), `Metrics`, `Tools`

**3. Komponenty k restyle**
Vždy stejný princip: pozadí `bg-cream` (nebo `bg-white` střídavě, případně `bg-teal-deep` pro důrazové sekce), nadpisy `text-ink font-bold tracking-tightest`, karty `bg-white rounded-3xl p-7 shadow-soft border border-ink/5`, CTA `bg-lime text-lime-ink rounded-full`. Žádné `text-white`, `bg-background` ani neon glow z původního designu.

**4. SEO/funkčnost**
Beze změny — `Seo`, JSON-LD, routing, jazyky, podcast funkčnost vše ponechám. Pouze vizuál.

## Co NEdělám teď
- Nepřepisuji /use-cases (už je v cílovém stylu)
- Nemažu staré komponenty (zůstanou nepoužité, ať můžeš případně něco recyklovat)
- Neměním obsah textů (jen formátování)

## Otázka pro tebe
Jdu do toho, nebo chceš nejdřív vidět 2-3 varianty Hera v novém stylu (`design directions`) a vybrat?
