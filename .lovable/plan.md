## Vize

Přebudovat web Obseum podle stylu **nobig.deals**: tmavě zelený/teal header, krémové sekce s bílými kartami se zaoblenými rohy, pastelové ikony, limeově zelený akcent, moderní serifovo-bezpatkové typo. Plus přidat kompletní katalog AI řešení (15 kategorií / ~63 řešení) — každé řešení vlastní podstránka.

## Vizuální systém

- **Barvy**: pozadí header `#0f3d3a` (deep teal), accent `#c9f23d` (lime), sekce `#f5f0e8` (cream), karty `#ffffff`, text `#0d2b29`
- **Typografie**: nadpisy bold sans (Outfit/Bricolage), body Inter/Figtree
- **Karty**: `rounded-3xl`, jemný stín, pastelová ikona vlevo, badge "X řešení" vpravo
- **Header**: plovoucí "pill" navigace s zaoblenými konci, lime CTA tlačítko
- Předělám `index.css` tokeny + tailwind config, žádné hardcoded barvy

## Struktura webu (routing)

```
/                           Homepage (redesign)
/use-cases                  Katalog 15 kategorií
/use-cases/[category]       Detail kategorie se seznamem řešení
/use-cases/[category]/[solution]   Detail jednoho řešení (~63 stránek)
/career                     Beze změny (jen nový styl)
/blog/ai-automation-small-business   Beze změny (jen nový styl)
```

## Datová vrstva

Vytvořím `src/data/useCases.ts` — typovaný TypeScript export se všemi 15 kategoriemi a ~63 řešeními. Pole každého řešení: `slug`, `title`, `tagline`, `description` (3 odstavce přepsané vlastními slovy), `benefits[]`, `tags[]`, `icon`. Slugy v češtině bez diakritiky (např. `automatizace-procesu/prediktivni-analyza-chovani`). Data využijí všechny use-case stránky + sitemap + llms.txt.

## Komponenty

Nové:
- `UseCasesHero.tsx` — tmavá hero sekce s eyebrow + velkým nadpisem
- `CategoryCard.tsx` — karta kategorie (ikona, badge počtu, nadpis, popis)
- `SolutionCard.tsx` — karta řešení (nadpis, tagline, "Číst více")
- `SolutionDetail.tsx` — layout detailu řešení (hero, popis, benefity, CTA)
- `CategoryGrid.tsx`, `SolutionsGrid.tsx`

Předělané:
- `Header.tsx` — plovoucí pill nav ve stylu nobig
- `Hero.tsx` — světlejší, prostornější, lime accent
- `Footer.tsx`, `Services.tsx`, `UseCases.tsx`, `FAQ.tsx`, `Contact.tsx` — sladit s novým systémem

Smazat/sloučit: `SolutionsShowcase.tsx`, stará `UseCases.tsx` sekce — nahrazeno novým katalogem.

## SEO

- Každá use-case stránka: `<Seo>` s unikátním title/description, JSON-LD `Service` schema
- `public/sitemap.xml` regenerovat ze zdroje pravdy (data file) — všech ~80 URL
- `public/llms.txt` rozšířit o katalog
- Breadcrumbs JSON-LD na detailech

## i18n

Stávající `LanguageContext` zachovám. Use-cases obsah dodám v češtině jako primární (user upřednostnil češtinu); EN překlady připravím jako placeholdery se stejnou strukturou, doplníme později nebo automaticky.

## Postup (chunky aby šlo iterovat)

1. **Design system** — `index.css` + `tailwind.config.ts` nové tokeny, Header pill nav, ukázat na homepage že vizuál sedí
2. **Data layer** — `src/data/useCases.ts` s 15 kategoriemi a všemi ~63 řešeními (přepsané popisy)
3. **Use-cases stránky** — `/use-cases`, `/use-cases/[category]`, `/use-cases/[category]/[solution]` s dynamickým routováním
4. **Homepage refresh** — Hero, Services, nový "Featured use cases" preview, FAQ, Contact v novém stylu
5. **SEO finalizace** — sitemap, llms.txt, JSON-LD, meta tagy

## Technické detaily

- React Router v6 s parametry: `<Route path="/use-cases/:category/:solution" element={<SolutionPage />} />`
- Lookup helpers v `src/data/useCases.ts`: `getCategoryBySlug`, `getSolutionBySlug`, `getAllSolutions`
- 404 fallback pokud slug neexistuje (redirect na `/use-cases`)
- Ikony z `lucide-react` — namapuju vhodnou ikonu na každou kategorii i řešení
- Žádné nové dependence (vše už máme: tailwind, shadcn, lucide, react-router)

## Co zůstává

- Lovable Cloud / backend — netýká se, čistě prezentační vrstva
- Podcast player na homepage — zachovám
- Career page, blog post — jen převléknou styl
- Stávající logo, klienti, metriky

## Co se NEDĚLÁ v tomto kroku

- EN překlady všech ~63 řešení (struktura připravena, obsah doplníme později)
- Search / filtr v katalogu (může přijít v další iteraci)
- CMS — data jsou v TS souboru, snadno editovatelné

---

**Velikost**: ~63 nových stránek + redesign ~10 komponent + nová data vrstva. Bude to vyžadovat několik kol — začnu krokem 1 (design system) a 2 (data layer) hned po schválení, abys viděl/a postup.
