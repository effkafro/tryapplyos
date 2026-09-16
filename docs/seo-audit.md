# SEO-Audit Landingpage (Stand: 2026-09-16)

Anlass: Die Seite ist bei Google nicht sichtbar.

## Hauptursache: globales `noindex, nofollow`

In `src/app/[locale]/layout.tsx` setzt `generateMetadata` für alle Seiten:

```ts
robots: { index: false, follow: false }
```

Live bestätigt auf `/de` und `/en`:

```html
<meta name="robots" content="noindex, nofollow"/>
```

Herkunft: Commit `6546a07` („temporärer Basic-Auth-Schutz via Middleware + global noindex“).
Der Basic-Auth wurde zum Launch entfernt (`9622e52`), das `noindex` blieb versehentlich stehen.
Solange das gesetzt ist, nimmt Google die Seite nicht auf, unabhängig von allen anderen Maßnahmen.

Die Auth-Seiten (`/auth/reset`, `/auth/confirm`) setzen `noindex` zusätzlich
lokal in ihrer eigenen `generateMetadata`. Das soll so bleiben.

## Weitere Lücken

| Punkt | Befund | Auswirkung |
|---|---|---|
| `robots.txt` | 404 | Kein Hinweis auf Sitemap, keine Crawl-Regeln |
| `sitemap.xml` | 404 | Google muss alle Seiten über Links entdecken |
| Canonical-URLs | fehlen | Duplicate-Content-Risiko zwischen Apex/www und DE/EN |
| `hreflang`-Alternates | fehlen | DE/EN nicht verknüpft, falsche Sprache in Suchergebnissen möglich |
| Domain-Konsistenz | Apex `tryapplyos.app` → 307 auf `www.tryapplyos.app`; `metadataBase` und `og:url` zeigen aber auf die Apex-Domain | Widersprüchliche Signale an Google |
| OG-Image | `/og-image.png` wird referenziert, Datei existiert nicht (404) | Kaputte Social-Previews (LinkedIn, WhatsApp, X) |
| Google Search Console | nicht eingerichtet (Annahme) | Keine Sicht auf Crawling/Indexierung |

Hinweis: Das HTML wird mit `cache-control: private, no-store` ausgeliefert, weil
die Startseite `searchParams` und einen DB-Count liest. Für die Indexierung ist
das kein Blocker, aber statisches Rendern wäre für Performance und Crawl-Budget besser.

## Empfohlene Maßnahmen (Reihenfolge)

1. **`noindex` entfernen** in `src/app/[locale]/layout.tsx` (`robots`-Block streichen).
   Die Auth-Seiten behalten ihr lokales `noindex`.
2. **`src/app/robots.ts`** anlegen: alles erlauben außer `/auth/*`, Sitemap-URL eintragen.
3. **`src/app/sitemap.ts`** anlegen mit allen öffentlichen Routen aus `src/i18n/routing.ts`
   in beiden Sprachen (inkl. lokalisierten Pfaden wie `/for-jobseekers`).
4. **Canonical + hreflang** pro Seite über `alternates` in `generateMetadata` setzen;
   `metadataBase` auf `https://www.tryapplyos.app` umstellen (oder Redirect-Richtung
   in Vercel auf Apex drehen, dann alles ohne www).
5. **OG-Image** (1200×630) unter `public/og-image.png` ablegen.
6. **Search Console**: Domain-Property verifizieren, Sitemap einreichen,
   Startseite manuell zur Indexierung anfordern.

## Erwartung nach dem Fix

Indexierung dauert typischerweise einige Tage bis Wochen. Über die Search Console
(„URL-Prüfung“ → „Indexierung beantragen“) lässt sich das beschleunigen.
Ranking für generische Begriffe („KI Jobsuche“, „Bewerbungs-App“) braucht danach
Inhalte und Backlinks; die Maßnahmen oben stellen nur die Auffindbarkeit sicher.
