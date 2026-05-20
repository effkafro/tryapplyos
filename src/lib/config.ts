export const APP_STORE_URL = "https://apps.apple.com";

/**
 * Feature flag: aktiviert den App-Store-CTA in Hero/Navbar/CTA-Banner.
 * Default: false → Waitlist-CTA. Bei App-Store-Launch (Q3 '26) auf `true` stellen.
 */
export const ENABLE_APP_STORE_CTA =
  process.env.NEXT_PUBLIC_ENABLE_APP_STORE_CTA === "true";

/**
 * Sichtbarer Vorab-Buffer für den Waitlist-Counter. Wird zur tatsächlichen
 * DB-Zahl addiert, damit die "Live"-Anzeige nicht bei 1 startet.
 * → Display = WAITLIST_BASE_COUNT + actualDbCount.
 */
export const WAITLIST_BASE_COUNT = 28;
