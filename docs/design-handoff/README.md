# Handoff: ApplyOS Landing Page — Variant E (Twilight)

## Overview

This package contains the design for the ApplyOS landing page redesign — **Variant E ("Twilight")**, a warm graphite, editorial direction with serif italic accents and embedded app-screen mockups. The page introduces ApplyOS as an AI career agent and includes an Exclusive Early Access waitlist (closed beta) flow.

The design covers a single-page marketing site with these sections, in order:

1. Navigation
2. Hero (with App-Screen mockups)
3. Features (3 cards, each with an embedded App-Screen)
4. Why ApplyOS (problem ↔ solution + stats)
5. Target Groups (Jobsuchende · Schüler:innen — each with paired App-Screens)
6. How it works (3 steps, each with an embedded App-Screen)
7. Waitlist (with live counter, persists via localStorage)
8. FAQ
9. CTA
10. Footer

Bilingual (DE/EN) — content is centralized.

---

## About the Design Files

The files in `design_files/` are **design references created in HTML/JSX prototypes** — not production code to copy directly. They run via inline Babel for fast iteration and use plain inline styles. **Your job is to recreate these designs in the target codebase's existing environment** (Next.js 15 + Tailwind + shadcn/ui for ApplyOS) using its established patterns.

**Target codebase**: The existing `ApplyOS/` Next.js project (App Router, next-intl i18n, Tailwind v4, shadcn components). Don't ship the JSX prototypes as-is — port them to clean React Server Components/Client Components with Tailwind classes.

`preview.html` is a standalone runner of Variant E (DE/EN toggle in the top-right). Open it in a browser to see the design live.

---

## Fidelity

**High-fidelity.** All colors, spacing, typography, and content are final. Use the exact values listed in the **Design Tokens** section.

---

## Integration into the existing codebase

The current ApplyOS codebase already has the section scaffolding:

```
src/components/sections/
  hero.tsx
  features.tsx
  why-applyos.tsx
  target-groups.tsx
  how-it-works.tsx
  faq.tsx
  cta-banner.tsx        ← keep, but content changes to waitlist CTA
```

**Add a new section**: `src/components/sections/waitlist.tsx` (the early-access form + live counter — slot between `how-it-works` and `faq` per the new order).

**Add an app-screen library**: `src/components/sections/app-screens/` (or similar) containing the phone bezel + each app screen as a separate component.

**Update i18n**: extend `src/messages/de.json` and `en.json` with the new keys from `design_files/content.jsx`.

**Update color palette**: replace the current `--color-brand-teal: #2dd4bf` etc. in `src/app/globals.css` with the Variant E palette (see Design Tokens). The brand teal becomes `#3aab83` (medium green); the hero becomes warm graphite, not slate.

**Fonts**: drop Geist Sans (keep) and add **Source Serif 4** for italic headlines. Suggest using `next/font` for both.

---

## Screens / Views

There's only one page (`src/app/[locale]/page.tsx`) — the landing. Section-by-section below.

### 1. Navigation (sticky)

- Full-width, sticky top, `position: sticky; top: 0; z-index: 30;`
- Background: `rgba(28, 26, 23, 0.88)` with `backdrop-filter: blur(20px)`
- Border-bottom: `1px solid rgba(237, 228, 208, 0.08)`
- Inner container: `max-width: 1180px`, padding `16px 40px`, flex space-between
- **Left**: 28×28 logo (`appi-logo.png`, `border-radius: 6px`) + "ApplyOS" in Source Serif Italic, 16px, weight 600
- **Center**: 4 links (Features · Warum · Ablauf · FAQ), 13px, color `#d4c9b0`, gap `32px`
- **Right CTA button**: "Auf Warteliste" — background `#3aab83`, color `#1c1a17`, padding `9px 18px`, border-radius `99px`, 13px weight 600

### 2. Hero

- Padding `110px 40px 80px`, position relative, overflow hidden
- Background glow: radial gradient at top center, `radial-gradient(ellipse, #3aab8326, transparent 60%)`, 900×600px, top `-160px`
- 2-column grid: `1.1fr .9fr`, gap `40px`, items center, max-width `1180px`

**Left column:**
- **Editorial kicker**: vertical accent bar (2×16px, background `#3aab83`) + label "EXCLUSIVE EARLY ACCESS" — 11px, color `#d4c9b0`, letter-spacing `.22em`, font-weight 500, gap `12px`, margin-bottom `32px`
- **H1**: 72px, line-height `.98`, letter-spacing `-.04em`, font-weight 400, Source Serif 4
  - Line 1: "Dein nächster Karriereschritt." (regular)
  - Line 2: "Proaktiv. Persönlich. KI-gestützt." (italic, color `#3aab83`)
- **Subtitle**: 18px, color `#d4c9b0`, line-height `1.55`, max-width `500px`, margin-top `28px`
- **CTA row**: button "Auf Warteliste setzen" (accent bg, dark text, 14px 600 weight, padding `14px 24px`, border-radius `99px`, gap `10px` with App-Store-style "􀎫" glyph) + meta text "Kostenlos · Limitierte Plätze" at 12px, color `#6b6253`

**Right column** (phone stack):
- Container: `position: relative; height: 600px;`
- **Background phone**: rotated `-6deg`, `opacity: 0.55`, slight blur `.4px`, scale `0.78`, showing `<ScreenJobDetail />`, absolute positioned `left: -10px; top: 80px`
- **Foreground phone**: full scale, `z-index: 2`, showing `<ScreenRadar />`

### 3. Features

- Padding `100px 40px`, background `#2a2620` (slightly elevated paper tone)
- Inner max-width `1180px`
- **Heading**: kicker `— FEATURES` (color accent), H2 48px Source Serif, "Die App, die für dich" + italic "arbeitet"
- 3-column grid, gap `24px`
- Each card:
  - Border `1px solid rgba(237, 228, 208, 0.08)`, border-radius `20px`, background `#1c1a17`, overflow hidden
  - **Top half** (phone preview, min-height `360px`): radial gradient at top + bg gradient, padding `32px 32px 0`, label in top-right at 9px caps `.14em` tracking, phone scaled `0.78`, translated down `36px` to peek out of the card edge
  - **Bottom half** (text, padding `32px`): tag in italic Source Serif 12px accent color "— Jeden Morgen" / "— Im Detail" / "— Im Überblick"; H3 24px Source Serif weight 400; desc 14px `#d4c9b0`

**Feature cards content** (DE / EN):
1. *Proaktive Jobsuche* / *Proactive job search* — Tagesfeed (`<ScreenRadar />`)
2. *Intelligentes Matching* / *Smart matching* — Job-Detail (`<ScreenJobDetail />`)
3. *Kanban-Pipeline* / *Kanban pipeline* — Pipeline (`<ScreenPipeline />`)

### 4. Why ApplyOS

- Padding `100px 40px`, no background change (sits on the `#1c1a17` body)
- Max-width `880px`
- **Centered heading**: italic Source Serif 56px, "Weil du es wert bist."
- Two-column grid (1fr 1fr) with `1px` line gap, rendered as a single bordered card
  - **Left** (Problem): background `#1c1a17` opacity `.85`, padding `32px`, label `— KLASSISCHE KARRIEREPORTALE` in `#d77a7a` caps, body text 15px Source Serif color `#a39782`
  - **Right** (Solution): background `#2a2620` (paper), label `— APPLYOS` in accent color, body text 15px Source Serif color `#ede4d0`
- **Stats row** below (3 columns, hairline gap): 100% (User-fokussiert) · 0 (Unternehmenskunden) · ↓ 85% (Weniger Aufwand)
  - Number: 44px Source Serif italic accent color, label: 12px caps `.12em` `#a39782`

### 5. Target Groups

- Padding `100px 40px`, background `#2a2620`
- Max-width `1180px`
- **Centered heading**: "Zwei Wege. *Ein Ziel.*"
- 2 stacked cards, vertical gap `24px`
- Each card:
  - Border `1px solid rgba(237, 228, 208, 0.08)`, border-radius `24px`, overflow hidden, min-height `480px`
  - Background `#221f1b`
  - 2-column grid, alternating direction (`1fr 1.1fr` or `1.1fr 1fr`)
  - **Phone column**: radial gradient accent at center, padding `40px`, two phones overlapping with rotation:
    - Phone A: rotate `-4deg`, translateY `12px`, opacity `0.8`, scale `0.7`
    - Phone B: rotate `3deg`, translateY `-12px`, z-index 2, scale `0.78`
  - **Content column**: padding `40px`, vertically centered
    - H3 36px Source Serif weight 400 letter-spacing `-.025em`
    - Sub: 13px caps `.12em` color `#a39782`
    - Hairline divider
    - Bulleted list, each item: italic Source Serif number (12px accent color) + 14px text `#d4c9b0`, padding `12px 0`, hairline between

**Cards content:**
- **Card 1 — Für Jobsuchende** (accent teal):
  - Subline: "Berufsanfänger · Berufserfahrene · Wiedereinsteiger"
  - 5 bullets — see `content.jsx`
  - Phones: `<ScreenPipeline />` + `<ScreenJobDetail />`
- **Card 2 — Für Schüler** (accent `#c9a587` for variety):
  - Subline: "Ausbildung · Studium · Berufsorientierung"
  - 5 bullets
  - Phones: `<ScreenResultImage />` (full-bleed PNG of Troubleshooter result) + `<ScreenStudentResult />` (recreated career-list view)

### 6. How it works

- Padding `100px 40px`, no bg change (`#1c1a17`)
- Max-width `1180px`
- **Centered heading**: italic Source Serif 52px, "In drei Schritten zum Traumjob."
- 3-column grid, gap `24px`
- Each card:
  - Border `1px solid rgba(237, 228, 208, 0.08)`, border-radius `20px`, background `#2a2620`, overflow hidden
  - **Top** (phone): radial gradient bg, min-height `360px`, phone scale `0.78`, translateY `28px`
  - **Bottom** (text, padding `28px`, border-top hairline, background `#2a2620`):
    - Step number: 44px Source Serif italic accent color, e.g. "1."
    - Label "SCHRITT" 10px caps `.14em` `#6b6253`
    - H3 22px Source Serif weight 400
    - Description 14px `#d4c9b0`
- Step phones: `<ScreenOnboarding />` · `<ScreenRadar />` · `<ScreenPipeline />`

### 7. Waitlist (Exclusive Early Access)

- Padding `120px 40px`, background `#2a2620`, overflow hidden, top/bottom hairlines
- Decorative: dotted grid (radial-gradient dots, 32×32px size, opacity .4) + corner glow top-right
- Max-width `1180px`, 2-column grid `1.15fr .85fr`, gap `60px`, items center

**Left column** (form):
- H2 72px Source Serif weight 400 letter-spacing `-.04em`:
  - Line 1: "Exklusiver Early Access." (regular)
  - Line 2: "Limitierte Plätze." (italic, accent color)
- Subtitle 17px Source Serif italic, color `#d4c9b0`, max-width `480px`
- **Email pill form** (max-width `480px`):
  - Container: padding `6px`, border `1px solid rgba(237, 228, 208, 0.14)`, background `#1c1a17`, border-radius `99px`, flex row
  - Input: transparent, no border, `padding: 12px 18px`, font-size 14, placeholder "deine@email.de" (DE) / "your@email.com" (EN)
  - Submit button: accent bg `#3aab83`, dark text, `padding: 12px 22px`, border-radius `99px`, 13px 600, text "Platz sichern →" / "Secure my spot →"
- **Submitted state**:
  - Button text → "Eingetragen ✓" (DE) / "Confirmed ✓" (EN), opacity `0.65`
  - Border of pill turns accent (`#3aab8388`)
  - Below: confirmation row "Du bist dabei — Platz X." in accent color with ✦ glyph
  - Invalid email → form shakes (`shake` keyframes, 0.4s)
- **Stats row** (2 columns, gap 24px, max-width 480, top hairline + 28px padding-top):
  - Stat 1: "100" (accent color, italic Source Serif 28px) + label "FREIE PLÄTZE"
  - Stat 2: live count (default 28) with "● LIVE" indicator next to it — pulsing dot. Persisted in `localStorage` key `applyOS_waitlist_count`. Increments by 1 on each valid submit, animates with `pulse-count` keyframes (0.4s ease).

**Right column** (phone + perks):
- `<ScreenWaitlistConfirm />` at scale `0.88` showing the user's submitted spot
- Below: perks card, border-radius 16, padding 20, max-width 340
  - Label "WAS DU BEKOMMST" with accent hairline
  - 3 items, each: ✦ glyph (accent) + 12px text, hairlines between items 1↔2 only (none between 2↔3)

### 8. FAQ

- Padding `100px 40px`, background `#2a2620`
- Max-width `920px`, 2-column grid `1fr 1.5fr`, gap `60px`
- **Left**: kicker `— FAQ` + H2 italic Source Serif 44px "Häufige Fragen.", sticky `top: 100px`
- **Right**: list of items, each with top/bottom hairlines:
  - "Q. 01" — accent Source Serif italic 11px
  - Question — 18px weight 400 Source Serif
  - Answer — 14px `#d4c9b0`

### 9. CTA (above footer)

- Padding `110px 40px`, position relative, overflow hidden, radial accent glow at center
- Max-width `1180px`, 2-column grid `1.2fr .8fr`, gap `60px`
- **Left**: H2 italic Source Serif 64px accent, subtitle italic Source Serif 18px, button "Auf Warteliste setzen"
- **Right**: rotated `-3deg` `<ScreenCV />` at scale `0.72`

### 10. Footer

- Padding `60px 40px 32px`, background `#15130f`, top hairline
- Max-width `1180px`
- 3-column grid `2fr 1fr 1fr`:
  - Logo + "ApplyOS" italic + tagline ("Dein KI-Karriere-Agent. Proaktiv. Persönlich. Einfach.")
  - Product links column
  - Legal links column
- Top hairline + 24px padding + copyright "© 2026 ApplyOS. Alle Rechte vorbehalten."

---

## App-Screen Components (mobile mockups inside phone bezels)

All screens render at 264×552 inside a `<PhoneFrame>` and use a **light theme** (`#f4f3ef` background, dark text) — matching the actual app. Each is a self-contained React component in `screens-e.jsx`.

| Component | Purpose | Real-app reference |
|---|---|---|
| `<PhoneFrame scale={1} theme="light">` | Bezel + status bar + notch wrapper | — |
| `<ScreenRadar />` | Daily job swipe view with owl bubble, big job card, action buttons | "Radar" tab |
| `<ScreenPipeline />` | Kanban with 4 colored status tiles + job cards with "Interview-Fragen vorbereiten" CTA | "Pipeline" tab |
| `<ScreenJobDetail />` | Sheet view with "Auf einen Blick" + "Job-Fit im Detail" progress bars | Job detail sheet |
| `<ScreenOnboarding />` | "Was ist dir wichtiger?" — Flexible Zeiten vs. Feste Strukturen | Onboarding flow |
| `<ScreenStudentResult />` | List of matching careers with progress bars | (recreated, not 1:1) |
| `<ScreenResultImage />` | Full-bleed PNG of the real "Troubleshooter" result | Direct screenshot |
| `<ScreenCV />` | Profile/CV view with experience + skills tags | Profile tab |
| `<ScreenWaitlistConfirm />` | "Welcome aboard" + position + Q3 '26 progress | Landing only |

**Helper components** (light theme, see `screens-e.jsx`):
- `<OwlBubble size="md|sm">` — appi avatar + lavender chat bubble
- `<ScoreRing score={n} size={px} fontSize={px} />` — orange conic-gradient progress ring with percentage in center
- `<BottomTabs active="pipeline" pipelineBadge={n} />` — floating pill nav with Profil/Radar/Pipeline/Menü

**Fictional company data** (never use real companies on the landing):
```js
JOBS = [
  { title: "Senior Marketing Manager Regional Marketing (m/w/d)", company: "Brennstoff Mediengruppe GmbH", location: "Düsseldorf, NRW", date: "20. Mai 2026", score: 52 },
  { title: "Team Lead Digital Marketing (w/m/x)",                  company: "Vellena SE",                   location: "Düsseldorf, NRW", date: "20. Mai 2026", score: 66 },
  { title: "Operations Manager HR & Marketing (m/w/d)",            company: "Nordpfeil Recruitment GmbH",   location: "Düsseldorf, NRW", date: "Mai 2026",       score: 63 },
  { title: "Product Manager Marketplace (m/w/d)",                  company: "Klingenstein & Söhne",         location: "Köln, NRW",       date: "18. Mai 2026", score: 78 },
];
```

---

## Interactions & Behavior

- **Sticky nav**: position sticky, becomes opaque-blurred when content scrolls behind it (currently always blurred).
- **Email form**:
  - Validate with `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` regex
  - Invalid → shake animation (translateX -6px → 6px → 0, 0.4s ease)
  - Valid → increment waitlist count, persist to localStorage (`applyOS_waitlist_count`), update confirm phone position, button to "Eingetragen ✓", show success row, disable form
  - **On real backend**: replace `handleSubmit` with a POST request to your waitlist endpoint
- **Live count pulse**: number element animates `pulse-count` (scale 1 → 1.06 → 1, 0.4s) on each increment.
- **"● LIVE" dot**: continuous `ping` animation (scale 1 → 2.2, opacity 1 → 0, 2s infinite cubic-bezier).
- **Language toggle**: in the demo, hardcoded DE/EN button top-right. In the real codebase, use `next-intl` — content already maps directly to message keys.

No other animations. No hover micro-interactions defined (links can use a subtle color shift to `text` from `text2` on hover).

---

## State Management

Minimal — only the waitlist section has state:
- `waitlistCount: number` (default 28, persists via `localStorage`)
- `email: string`
- `submitted: boolean`
- `shake: boolean` (transient, 0.4s)

The language is route-based via `next-intl` (existing locale routing in `[locale]/`).

---

## Design Tokens

### Colors (Variant E — Twilight)

```css
/* Surfaces — warm graphite + cream */
--e-bg:        #1c1a17;              /* page background */
--e-paper:     #2a2620;               /* elevated paper (Features, Target Groups, FAQ, Waitlist) */
--e-paper-hi:  #3a342c;               /* highest elevation (not heavily used) */
--e-footer:    #15130f;               /* footer */

/* Text */
--e-text:      #ede4d0;              /* main */
--e-text-2:    #d4c9b0;              /* secondary */
--e-dim:       #a39782;              /* tertiary, muted body */
--e-faint:     #6b6253;              /* hint */

/* Lines */
--e-line:      rgba(237, 228, 208, 0.08);
--e-line-hi:   rgba(237, 228, 208, 0.14);

/* Brand accent (Variant E) */
--e-accent:    #3aab83;              /* user-chosen green */

/* Secondary accent for diversifying group/step colors */
--e-accent-2:  #c9a587;              /* warm sand */

/* App-screen palette (light, mirrors actual app) */
--app-bg:      #f4f3ef;
--app-card:    #ffffff;
--app-text:    #0a0a0a;
--app-text-2:  #3a3a3a;
--app-dim:     #888;
--app-faint:   #bbb;
--app-teal:        #0d9c81;
--app-teal-soft:   #dbeee4;
--app-orange:      #d77b1c;
--app-orange-soft: #f7e9d5;
--app-blue:        #5a6cff;
--app-blue-soft:   #e7eaff;
--app-purple:      #8b69d6;
--app-purple-soft: #efe9f7;
--app-green:       #3a8568;
--app-green-soft:  #e0f1e7;
--app-divider:     #f1efe7;
```

### Typography

| Use | Family | Sizes |
|---|---|---|
| Body / UI | **Geist** (already in codebase) | 13, 14, 15, 17, 18 |
| Display / Headlines / Italics | **Source Serif 4** (new — add via `next/font`) | 22, 24, 28, 36, 44, 48, 52, 56, 64, 72 |
| Mono / Hairline accents | — (none, use tracked caps with Geist) | — |

- Body `letter-spacing: -0.005em`
- Headlines `letter-spacing: -0.03em` to `-0.04em`
- Caps tracking `0.12em` to `0.22em`

### Spacing scale (used throughout)

Common values: `4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 20 · 24 · 28 · 32 · 36 · 40 · 56 · 60 · 80 · 100 · 110 · 120` (px).
Section vertical rhythm: `100px` padding top + bottom (`110-120px` on hero/waitlist/CTA).

### Border radius

- Small (chips, pills): `99px`
- Card buttons: `8-12px`
- Cards: `16-24px`
- Section pill containers: `20-24px`
- App phone bezel: outer `42px`, inner screen `36px`

### Shadows

- Phone bezels: `0 30px 80px -20px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.06)`
- App cards: `0 4px 16px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)`
- App buttons (boosted): `0 8px 20px -5px <accent>66`

### Animations

```css
@keyframes ping       { 75%, 100% { transform: scale(2.2); opacity: 0; } }
@keyframes shake      { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
@keyframes pulse-count{ 0% { transform: scale(1); } 50% { transform: scale(1.06); } 100% { transform: scale(1); } }
```

---

## Assets

| File | Source | Where used |
|---|---|---|
| `assets/appi-logo.png` | Existing codebase (`public/appi-logo.png`) | Nav + Footer + small in-app avatars |
| `assets/app-result.png` | User-supplied real app screenshot (Troubleshooter result) | Left phone of Schüler card in Target Groups |

No other binary assets — everything else (icons, illustrations, score rings) is drawn inline with React/SVG/Unicode glyphs. Owl avatar in `<OwlBubble>` reuses `appi-logo.png` at small size.

**The "App Store" glyph** `􀎫` is an SF Symbol (Apple Private Use Area). If you want a real Apple-style App Store badge, swap in Apple's official `<svg>` or PNG asset. For non-Apple display, replace with a generic download icon.

---

## Content (DE/EN)

Full source of truth is in `design_files/content.jsx`. Port the entire structure into `src/messages/de.json` and `src/messages/en.json`. The data shape:

```ts
type LandingContent = {
  nav: { features, why, how, waitlist, faq, download };
  hero: { eyebrow, title: [string, string], subtitle, cta, meta };
  trust?: { label, source, live };  // unused on Variant E — kept for compatibility
  features: { eyebrow, title, sub, items: { tag, title, desc }[] };
  why: { eyebrow, title, problem: {label, text}, solution: {label, text}, stats: {num, label}[] };
  groups: { eyebrow, title, cards: { accent, title, sub, points: string[] }[] };
  how: { eyebrow, title, steps: { title, desc }[] };
  faq: { eyebrow, title, items: { q, a }[] };
  cta: { title, sub, btn };
  waitlist: {
    eyebrow, title: [string, string], sub,
    emailPlaceholder, submit, legal,
    stats: { num, label }[],
    perks: { label, items: string[] },
    confirm: { title, sub, position },
  };
  footer: { tagline, product, legal, links: {...}, copyright };
};
```

---

## Files in this package

```
design_handoff_landing_variant_e/
├── README.md                       ← this file
├── preview.html                    ← standalone DE/EN runner (open in browser)
└── design_files/
    ├── variant-e.jsx               ← the full landing page
    ├── screens-e.jsx               ← all app-screen components + phone bezel
    ├── content.jsx                 ← DE/EN content (i18n source of truth)
    └── assets/
        ├── appi-logo.png
        └── app-result.png
```

---

## Open questions for the developer

- **Backend endpoint for waitlist**: the demo uses `localStorage`. Wire up a POST to your real backend (Supabase, Resend, Formspree, etc.) inside `handleSubmit` in the new `waitlist.tsx`.
- **Real waitlist count source**: the live count should ideally come from an API/edge function, not localStorage. Decide if you want SSR (number is fresh on page load) or client-side fetch (more dynamic).
- **App store URL**: the existing `src/lib/config.ts` exports `APP_STORE_URL = "https://apps.apple.com"`. For the closed-beta phase, this can be removed/replaced with the waitlist signup anchor (or keep but only enable on hero CTA after Q3 '26).
- **More app screenshots**: only `app-result.png` is a real screenshot. The rest are high-fidelity recreations. Replace them with real screenshots when available — keep the bezel wrapper and just swap the children for `<img>` like `ScreenResultImage` does.
