# ApplyOS Landing — Dual-Audience-Architektur mit Bifurcation zu dedicated URLs

**Status:** Draft (Brainstorming abgeschlossen, Implementation Plan ausstehend)
**Datum:** 2026-05-22
**Verantwortlich:** Florian Krause

## 1. Kontext und Problem

Die ApplyOS-Landingpage muss zwei klar unterschiedliche Zielgruppen bedienen:

- **Jobsuchende** — Druck/Erschöpfung, hoher Conversion-Druck (Bundesagentur-API, KI-Matching, Auto-CV/Anschreiben, Pipeline)
- **Schüler** — Orientierung/Neugier, weicherer Funnel (Persönlichkeitsprofiling, Ausbildungs-/Studienvorschläge)

Beide Zielgruppen sollen auf der **gleichen Waitlist** landen, aber:
- Linear gestapelter Audience-Content (3 Schüler-Sections gefolgt von 3 Jobsuchenden-Sections) zwingt eine Zielgruppe, durch die fremde Story zu scrollen → Bounce-Risiko vor der Conversion.
- Eine doppelt sichtbare Waitlist-Section pro Page-Visit unterbricht den Conversion-Flow.
- Der bisherige Ansatz (HeroAudienceSwitcher mit URL-State `?path=schueler`) wirkt nur in der Hero und liefert keine echte audience-spezifische Tiefe.

## 2. Entscheidung: Bifurcation zu dedicated Audience-URLs

Die Landing wird in **drei eigenständige URLs** aufgeteilt:

```
/                       Main — Two-track Funnel
  ├─ Direkter Conversion-Pfad (Hero → Waitlist)
  └─ Bifurcation-Pfad (TargetGroups → Sub-Page → Waitlist auf Sub-Page)

/fuer-jobsuchende       (DE) / /for-jobseekers (EN)
/fuer-schueler          (DE) / /for-students (EN)
```

**Rationale:**
- Industriestandard für Multi-Audience-SaaS (Slack `/solutions/*`, Vercel `/solutions/*`, Stripe `/atlas`, Notion `/teams` & `/personal`).
- Jede Sub-Page enthält **nur die eigene Zielgruppe** → keine Scroll-Through-Friktion.
- Pro Page-Visit sieht der User die Waitlist **einmal** — sie ist dieselbe Component auf drei Routen, was UX-seitig keine Duplikation darstellt.
- Paid-Ads-Targeting wird optimal: Jobsuchende-Creatives landen auf `/fuer-jobsuchende`, Schüler-Creatives auf `/fuer-schueler` — jeweils mit maximaler Relevanz von der ersten Sekunde.
- SEO-Gewinn durch eigene Keyword-Cluster pro URL.

## 3. Page Composition

### 3.1 Main-Page `/`

**Rolle:** Two-track Funnel — direkte Conversion für Entschlossene + Bifurcation für Sondierer.

| # | Section | Verhalten |
|---|---|---|
| 1 | Hero (generisch) | Universal Value-Prop ("Weil du es wert bist."), Sub-Headline mit dezenter Erwähnung beider Welten. Primary-CTA → `#waitlist`, Secondary-Link → `#groups` ("Welcher Weg passt zu mir?") |
| 2 | TargetGroups | Bifurcation: zwei klickbare Cards → Sub-Pages. Komplette Card klickbar, dezenter Pfeil-Indikator rechts unten. Teaser-Content (Title, Sub, 5 Bullet-Points pro Card) bleibt erhalten. |
| 3 | HowItWorks | **Dual-Path Inline** (Status quo) — bewusster "beide Welten sehen"-Moment. Jeder Step zeigt Jobsuchenden- + Schüler-Lane. Kein Audience-Switch nötig. |
| 4 | WhyApplyOS | Universal USPs. Unverändert. |
| 5 | Waitlist | Universal. Unverändert (selbe Component, selbe DB). |
| 6 | FAQ | **Getrimmt** auf 3-4 universelle Fragen (z.B. Datenschutz, Beta, Preis). Audience-spezifische Fragen wandern in die Sub-Pages. |
| 7 | CtaBanner | Universal (Dual-Phone-Visual). Unverändert. |

**Was entfällt auf `/`:** Die bisherige `Features`-Section. Begründung: Features sind stark audience-spezifisch — auf `/` reicht HowItWorks (Dual-Path) als universelle Substanz; die ausgearbeiteten Features leben auf den Sub-Pages.

### 3.2 `/fuer-jobsuchende` (DE) / `/for-jobseekers` (EN)

**Rolle:** Dedizierte Landing für Jobsuchende mit voller Audience-Tiefe.

| # | Section | Verhalten |
|---|---|---|
| 1 | Hero (jobseeker) | Aus heutigem `HeroAudienceSwitcher` — Jobseeker-Variante ohne Switcher-UI. Teal-Akzent, Radar + JobDetail Phones. CTA → `#waitlist` auf dieser Page. |
| 2 | Features (jobseeker) | 3 Cards: Bundesagentur-Feed · KI-CV + Anschreiben · Kanban-Pipeline. |
| 3 | HowItWorks (focused) | **Single-Lane Variante** — nur die Jobsuchenden-Story der 3 Steps. |
| 4 | FAQ (jobseeker) | 5-7 audience-spezifische Fragen (Job-Sourcing, CV-Quali, Pipeline-Logik, Original-Anzeige-Weiterleitung etc.). |
| 5 | WhyApplyOS | Universal (selbe Component). |
| 6 | Waitlist | Universal. |
| 7 | CtaBanner | Universal. |

### 3.3 `/fuer-schueler` (DE) / `/for-students` (EN)

**Rolle:** Dedizierte Landing für Schüler mit voller Audience-Tiefe.

| # | Section | Verhalten |
|---|---|---|
| 1 | Hero (schueler) | Aus heutigem `HeroAudienceSwitcher` — Schüler-Variante ohne Switcher-UI. Terracotta-Akzent, ResultImage + StudentResult Phones. CTA → `#waitlist`. |
| 2 | Features (schueler) | 3 Cards: Persönlichkeitsprofiling · Ausbildungs-/Studienvorschläge · Orientierungs-Tools. |
| 3 | HowItWorks (focused) | Single-Lane — nur die Schüler-Story. |
| 4 | FAQ (schueler) | 5-7 audience-spezifische Fragen (Profiling-Methodik, Datenschutz für Minderjährige, Eltern-Frage, etc.). |
| 5 | WhyApplyOS | Universal. |
| 6 | Waitlist | Universal. |
| 7 | CtaBanner | Universal. |

## 4. Component-Strategie

### 4.1 Refactor — `HeroAudienceSwitcher`

Aktuell vereint die Component Switcher-UI, State-Management, URL-Sync und beide Audience-Renderings. Zerlegen in:

- **`HeroGeneric`** *(neu)* — Server-Component für `/`. Universelle Headline + Sub-Headline, ein App-Visual (dual-phone möglich), primary + secondary CTA.
- **`HeroJobseeker`** *(extrahiert)* — Server-Component für `/fuer-jobsuchende`. Aktuelle Jobseeker-Rendering-Logik der `HeroAudienceSwitcher`, ohne Switcher-Pill, ohne `useState`/`useEffect`/URL-Sync.
- **`HeroSchüler`** *(extrahiert)* — analog für `/fuer-schueler`.

Die heutige `HeroAudienceSwitcher`-Component wird **entfernt** (kein Switcher mehr in der finalen Architektur).

### 4.2 Refactor — `TargetGroups`

- Cards werden zu vollwertigen Bifurcation-CTAs:
  - Komplette Card ist klickbar (Wrapping `<Link>` via `next-intl/navigation`).
  - Dezenter Pfeil-Indikator (z.B. rechts unten der Content-Column).
  - Hover-State: subtle Border-Shift oder Akzent-Glow.
- Content bleibt: Title, Sub, 5 Points pro Card, dual-phone Visual links.
- Card 1 → `/fuer-jobsuchende`, Card 2 → `/fuer-schueler`.

### 4.3 Fork — `Features`

- Bestehende `Features`-Component wird umbenannt/aufgeteilt:
  - `FeaturesJobseeker` — Server-Component, jobseeker-spezifische 3 Cards.
  - `FeaturesSchueler` — Server-Component, schueler-spezifische 3 Cards.
- Auf `/` wird Features **entfernt** (siehe Page Composition).

### 4.4 Add — `HowItWorksFocused`

- Neue Single-Lane-Variante für Sub-Pages.
- Prop `audience: "jobseeker" | "schueler"` bestimmt den Pfad.
- Steps und Phone-Screens bleiben gleich, aber pro Step wird **nur die jeweilige Lane** gezeigt (kein Badge-Paar).
- Die bestehende `HowItWorks` (Dual-Path) bleibt unverändert für `/`.

### 4.5 Trim — `Faq`

- Auf `/` wird die FAQ-Liste reduziert auf 3-4 universelle Fragen (Datenschutz, Beta-Zugang, Preis, App-Store-Verfügbarkeit).
- Audience-spezifische FAQs werden in `FaqJobseeker` und `FaqSchueler` ausgelagert (entweder als neue Components oder via `audience`-Prop der bestehenden `Faq`).

### 4.6 Unverändert

`Waitlist`, `WhyApplyOS`, `CtaBanner`, `Navbar`, `Footer`, alle `app-screens/*` Phone-Screens.

## 5. Routing und i18n

### 5.1 next-intl `pathnames`-Config

In `src/i18n/routing.ts`:

```ts
export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  pathnames: {
    "/": "/",
    "/fuer-jobsuchende": {
      de: "/fuer-jobsuchende",
      en: "/for-jobseekers",
    },
    "/fuer-schueler": {
      de: "/fuer-schueler",
      en: "/for-students",
    },
    // bestehende Legal-Routen unverändert
    "/datenschutz": { de: "/datenschutz", en: "/privacy" },
    "/nutzungsbedingungen": { de: "/nutzungsbedingungen", en: "/terms" },
    "/impressum": { de: "/impressum", en: "/imprint" },
    "/cookies": "/cookies",
  },
});
```

### 5.2 File-Struktur

```
src/app/[locale]/
├── page.tsx                       # Main /
├── fuer-jobsuchende/
│   └── page.tsx                   # Jobseeker-Page
├── fuer-schueler/
│   └── page.tsx                   # Schüler-Page
├── (bestehende Legal- und Auth-Pages unverändert)
```

Next.js routet über den **canonical Slug** (DE) — die EN-Variante wird vom Middleware auf das richtige File gemapped.

### 5.3 Backward-Compatibility — `?path=schueler`

Falls bestehende Links mit `?path=schueler` zirkulieren: In `src/app/[locale]/page.tsx` ein Server-seitiges `redirect()` auf `/fuer-schueler` auslösen, wenn der Query-Param vorhanden ist. Analog für `?path=jobseeker` → `/fuer-jobsuchende` (falls überhaupt verwendet).

### 5.4 Navbar-Verlinkung

Die Navbar bekommt zwei neue Items (DE + EN lokalisiert):
- "Für Jobsuchende" → `/fuer-jobsuchende`
- "Für Schüler" → `/fuer-schueler`

Plazierung und Styling werden im Implementation Plan entschieden (z.B. als Dropdown unter einem "Lösungen"-Eintrag, oder als zwei eigene Top-Level-Items).

## 6. Content-Anforderungen (i18n)

Folgende neue Copy wird benötigt — jeweils DE + EN:

| Bereich | Inhalt |
|---|---|
| Hero generic (`/`) | Eyebrow, Headline (Line 1 + 2), Sub-Headline (mit dezenter beider-Welten-Erwähnung), Primary-CTA, Secondary-Link, Meta |
| TargetGroups Cards | Bestehende Texte bleiben, **plus** ein "→ Mehr für X"-Akzent (optional, je nach finalem Card-Design) |
| FeaturesJobseeker | 3 Cards: Tag, Title, Description, Badges, Phone-Screen-Referenz |
| FeaturesSchüler | 3 Cards: analog |
| HowItWorksFocused (jobseeker) | 3 Steps: Title, Description (single-lane, Jobsuchenden-Variante) |
| HowItWorksFocused (schueler) | 3 Steps: analog |
| FaqJobseeker | 5-7 Q+A-Paare |
| FaqSchüler | 5-7 Q+A-Paare |
| Faq Main (`/`) | 3-4 universelle Q+A-Paare |
| Sub-Page Metadata | Title, Description, OG-Image-Alt-Text für beide Sub-Pages, jeweils DE + EN |

Bestehende Translations in `src/messages/de.json` und `src/messages/en.json` werden zu größeren Teilen wiederverwendet (Hero-Jobseeker/Schüler-Texte sind schon da).

## 7. SEO und Metadata

Pro Sub-Page eigene Next.js `generateMetadata()`-Funktion:

- **`/fuer-jobsuchende`** — Title z.B. "ApplyOS für Jobsuchende — automatische Jobsuche mit KI", Description fokussiert auf Jobsuche-Pain-Points.
- **`/fuer-schueler`** — Title z.B. "ApplyOS für Schüler — finde Ausbildung & Studium mit Profiling", Description fokussiert auf Orientierung.
- OG-Images: Jeweils audience-spezifisches Phone-Visual (kann gleiches Asset wie Hero-Visual sein).

Sitemap (`sitemap.ts`) wird um die zwei neuen Routen ergänzt — pro Locale.

## 8. Tracking und Analytics

Falls Tracking vorhanden ist (zu prüfen in Implementation Plan): Page-Views für `/fuer-jobsuchende` und `/fuer-schueler` separat tracken, um Funnel-Performance pro Audience messbar zu machen. Conversion-Event (Waitlist-Submit) sollte einen `audience`-Parameter mitschicken (`generic | jobseeker | schueler`), je nach Herkunfts-Page.

## 9. Out of Scope

- A/B-Tests zwischen Bifurcation-Designs (kommt später wenn Traffic da ist).
- Audience-spezifische `WhyApplyOS`-Variante (universelle Variante ist explizit gewollt — die USPs sind universell).
- Persistent Audience-State über URL-Wechsel hinweg (z.B. via Cookie) — nicht nötig, da jede Page autark ist.
- Sprachsteuerung-Messaging (per `project_applyos_product`-Memo nicht im Scope).

## 10. Risiken und Mitigations

| Risiko | Mitigation |
|---|---|
| Hohe Content-Pflegelast durch 3 Pages | Maximaler Wiederverwendung: WhyApplyOS, Waitlist, CtaBanner sind universal. Nur Hero/Features/HowItWorks/FAQ-Varianten brauchen eigene Texte. |
| User landet auf falscher Audience-Page (z.B. Schüler auf `/fuer-jobsuchende`) | Each Sub-Page hat einen subtilen Cross-Link am Fuss (z.B. "Bist du Schüler? → Hier entlang") — wird im Implementation Plan ausgearbeitet. |
| Search-Engine-Indexing-Verzögerung für neue Routen | Sitemap-Update + manueller Submit in Search Console nach Deploy. |
| Bestehende Backlinks/Bookmarks auf `?path=schueler` brechen | Redirect-Logik in `/` (siehe 5.3). |

## 11. Acceptance Criteria

Die Implementierung gilt als erfolgreich, wenn:

1. `/` zeigt einen generischen Hero mit Direct-Conversion-CTA und Bifurcation via TargetGroups.
2. `/fuer-jobsuchende` und `/fuer-schueler` (mit jeweiligen EN-Slugs) existieren und enthalten ausschließlich audience-spezifischen Content + universelle Closer.
3. Die Waitlist-Component wird pro Page-Visit nur einmal gerendert und schreibt in die selbe DB.
4. Der bisherige `HeroAudienceSwitcher` ist entfernt; keine Switcher-UI mehr in Produktion.
5. `?path=schueler` und `?path=jobseeker` (falls verwendet) leiten auf die jeweilige Sub-Page um.
6. Beide Locales (DE/EN) funktionieren mit lokalisierten Pfaden.
7. SEO: Jede neue Route hat eigene `<title>`, `<meta description>`, OG-Image.
8. Lighthouse-Scores für alle 3 Pages bleiben gleichwertig zur aktuellen `/` (Performance, Accessibility, SEO).

## 12. Nächste Schritte

1. Approval dieses Specs durch Florian.
2. Implementation Plan via `superpowers:writing-plans` Skill.
3. Umsetzung in Phasen (z.B. Phase 1: Refactor Hero-Components, Phase 2: Sub-Pages anlegen, Phase 3: Main-Page-Update, Phase 4: Content + i18n, Phase 5: Redirects + SEO).
