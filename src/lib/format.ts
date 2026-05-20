export function formatWaitlistNumber(n: number, locale: string): string {
  return n.toLocaleString(locale === "en" ? "en-US" : "de-DE");
}
