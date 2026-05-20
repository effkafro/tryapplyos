export type Job = {
  title: string;
  company: string;
  location: string;
  date: string;
  score: number;
};

export type StudentMatch = {
  title: string;
  sub: string;
  score: number;
};

// Fiktive Unternehmen — niemals echte Firmen auf der Landing zeigen
export const JOBS: readonly Job[] = [
  {
    title: "Senior Marketing Manager Regional Marketing (m/w/d)",
    company: "Brennstoff Mediengruppe GmbH",
    location: "Düsseldorf, Nordrhein-Westfalen",
    date: "20. Mai 2026",
    score: 52,
  },
  {
    title: "Team Lead Digital Marketing (w/m/x)",
    company: "Vellena SE",
    location: "Düsseldorf, Nordrhein-Westfalen",
    date: "20. Mai 2026",
    score: 66,
  },
  {
    title: "Operations Manager HR & Marketing (m/w/d)",
    company: "Nordpfeil Recruitment GmbH",
    location: "Düsseldorf, Nordrhein-Westfalen",
    date: "Mai 2026",
    score: 63,
  },
  {
    title: "Product Manager Marketplace (m/w/d)",
    company: "Klingenstein & Söhne",
    location: "Köln, Nordrhein-Westfalen",
    date: "18. Mai 2026",
    score: 78,
  },
] as const;

export const STUDENT_MATCHES: readonly StudentMatch[] = [
  { title: "Fachinformatiker:in", sub: "Anwendungsentwicklung · Ausbildung", score: 92 },
  { title: "Wirtschaftsinformatik", sub: "Bachelor of Science · Universität", score: 87 },
  { title: "Software Engineering", sub: "Duales Studium · Hochschule", score: 81 },
] as const;
