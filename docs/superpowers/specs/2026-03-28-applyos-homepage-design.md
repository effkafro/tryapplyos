# ApplyOS Homepage — Design Spec

## Kontext

ApplyOS ist eine iOS-App (SwiftUI) — ein KI-Karriere-Agent für deutschsprachige Jobsuchende und Schüler. Die App verlinkt bereits auf `tryapplyos.app/datenschutz` und `tryapplyos.app/nutzungsbedingungen`, die Seiten existieren aber noch nicht. Es wird eine vollwertige SaaS-Landingpage mit rechtlichen Unterseiten benötigt.

## Ziel

Marketing-Landingpage die die App vorstellt und neue Nutzer überzeugt, plus rechtliche Dokumente als eigenständige Unterseiten. Hosting auf Vercel unter `tryapplyos.app`.

---

## Tech-Stack

| Kategorie | Technologie |
|-----------|-------------|
| Framework | Next.js (App Router) |
| Sprache | TypeScript |
| Styling | Tailwind CSS v4 |
| UI-Komponenten | shadcn/ui |
| Icons | Lucide React |
| i18n | next-intl (DE + EN, URL-Prefix `/de`, `/en`) |
| Hosting | Vercel |
| Font | Plus Jakarta Sans (Google Fonts) |

## Visueller Stil — Bold Gradient

- **Hero-Gradient**: Teal `#0f766e` → Indigo `#1e1b4b`
- **Hintergrund**: Dark (`#0f172a`, `#020617`)
- **Primär-Akzent**: Teal `#2dd4bf` (hell), `#0f766e` (dunkel)
- **Sekundär-Akzent**: Indigo `#818cf8` / `#6366f1`
- **Text**: Weiß `#ffffff`, Sekundär `#94a3b8`, Gedämpft `#64748b`
- **Glassmorphism**: `rgba(255,255,255,0.04)` Hintergrund, `rgba(255,255,255,0.08)` Border
- **Radien**: Cards `12px`, große Cards `16px`, Buttons `8-10px`, Pills `20px`
- **Effekte**: Subtile radiale Glows, keine Schatten, saubere Transitions (150-200ms)

## Seitenstruktur

### Hauptseite `/`

**Navigation** (sticky, glassmorphism):
- Logo + „ApplyOS"
- Links: Features, Warum ApplyOS, FAQ
- Sprachumschalter DE | EN
- CTA-Button: „Download"

**1. Hero**
- Badge: „Dein KI-Karriere-Agent"
- Headline: „Dein nächster Karriereschritt. Proaktiv. Persönlich. KI-gestützt."
- Subline: „ApplyOS lernt, was du wirklich willst — und findet täglich die besten Jobs für dich. Ob Berufserfahrene oder Schüler."
- App Store Button (weiß)
- iPhone-Mockup mit App-Screenshot

**2. Features** — „Die App, die für dich arbeitet"
- 2x2 Grid mit 4 Feature-Cards:
  1. **Proaktive Jobsuche** (Teal-Gradient Icon) — Täglich neue Top-Jobs, automatisch auf dich zugeschnitten
  2. **Intelligentes Matching** (Indigo-Gradient Icon) — KI-Match-Score zeigt, wie gut jede Stelle zu dir passt
  3. **Auto-Dokumente** (Violet-Gradient Icon) — Lebenslauf & Anschreiben generiert aus deinem Profil
  4. **Kanban-Pipeline** (Cyan-Gradient Icon) — Alle Bewerbungen auf einen Blick tracken

**3. Warum ApplyOS?** — „Weil du es wert bist."
- Gegenüberstellung Problem → Lösung:
  - **Klassische Karriereportale** (rot, subtiler Hintergrund): Optimiert für Unternehmenskunden, User als Ressource vermittelt, hohe kognitive Last
  - **Pfeil ↓**
  - **ApplyOS** (teal, subtiler Hintergrund): Gebaut für Bewerber, nicht für Unternehmen. Keine Unternehmenskunden. Bestes Matching + minimaler Aufwand
- 3 Kennzahlen: 100% User-fokussiert / 0 Unternehmenskunden / ↓ Weniger Aufwand

**4. Für wen ist ApplyOS?** — „Zwei Wege. Ein Ziel."
- Vertikal gestapelt, horizontales Layout pro Karte (Mockup links, Content rechts):
  - **Für Jobsuchende** (Teal-Akzent): Profil erstellen, tägliche Top-Jobs, Auto-Lebenslauf & Anschreiben, Original-Anzeige bewerben, Kanban-Board
  - **Für Schüler** (Indigo-Akzent): Psychologisch fundiertes Profiling, persönlichkeitsbasierte Empfehlungen, Ausbildungsplätze & Studiengänge, von „Keine Ahnung" zu klarem Plan, Schritt-für-Schritt-Begleitung

**5. So funktioniert's** — „In 3 Schritten zum Traumjob"
- Vertikale Timeline mit verbindenden Linien:
  1. **Profil erstellen** — Interaktives Profiling, Schüler mit psychologischem Modell
  2. **Jobs entdecken** — Tägliche Suche, Swipe-Interface, KI-Match-Score
  3. **Bewerben & Tracken** — KI-Anschreiben, Original-Anzeige, Kanban-Pipeline

**6. FAQ** — „Häufige Fragen"
- Accordion-Komponente, ein Item standardmäßig offen:
  - Ist ApplyOS kostenlos?
  - Woher kommen die Stellenangebote?
  - Kann ich mich direkt aus der App bewerben?
  - Was ist das psychologische Profiling für Schüler?
  - Werden meine Daten an Unternehmen weitergegeben?

**7. CTA-Banner**
- Gradient-Hintergrund (Teal → Indigo)
- „Bereit für den nächsten Schritt?"
- App Store Download-Button

**8. Footer**
- Logo + Tagline
- Rechtliches: Datenschutz, Nutzungsbedingungen, Impressum, Cookie-Richtlinie
- Produkt: Features, So funktioniert's, FAQ
- Sprachumschalter DE | EN
- Copyright

### Rechtliche Unterseiten

Alle mit einheitlichem Layout: Nav + Content (Prosa, max-w-3xl, zentriert) + Footer.

| Route | Titel | Inhalt |
|-------|-------|--------|
| `/datenschutz` | Datenschutzerklärung | DSGVO-konforme Privacy Policy |
| `/nutzungsbedingungen` | Nutzungsbedingungen | AGB für die App |
| `/impressum` | Impressum | Anbieterkennzeichnung §5 DDG |
| `/cookies` | Cookie-Richtlinie | Cookie-Policy für die Website |

Rechtliche Inhalte werden als Platzhalter-Texte angelegt — der finale juristische Text wird separat erstellt.

## i18n

- URL-basiert: `/de/...` und `/en/...`
- Default-Locale: `de`
- Redirect von `/` → `/de`
- Alle UI-Texte in JSON-Dateien (`messages/de.json`, `messages/en.json`)
- Legal-Seiten: Separate Markdown- oder Content-Dateien pro Sprache

## Responsive Breakpoints

| Breakpoint | Verhalten |
|------------|-----------|
| `< 640px` (Mobile) | Single Column, Nav als Hamburger-Menü, Feature-Cards 1-spaltig |
| `640-1024px` (Tablet) | 2-Spalten Feature-Grid, Zielgruppen-Cards vertikal |
| `> 1024px` (Desktop) | Volles Layout wie im Mockup, max-w-6xl Container |

## Verifikation

- `npm run build` erfolgreich
- Alle Seiten unter `/de` und `/en` erreichbar
- Legal-Seiten crawlbar (SSG/SSR)
- Lighthouse Score > 90 (Performance, Accessibility, SEO)
- Responsive auf 375px, 768px, 1440px testen
- Nav-Links scrollen zu korrekten Sektionen
- App Store Link funktioniert
- Sprachumschalter wechselt korrekt
