export type StudentMatch = {
  title: string;
  sub: string;
  score: number;
};

export const STUDENT_MATCHES: readonly StudentMatch[] = [
  { title: "Fachinformatiker:in", sub: "Anwendungsentwicklung · Ausbildung", score: 92 },
  { title: "Wirtschaftsinformatik", sub: "Bachelor of Science · Universität", score: 87 },
  { title: "Software Engineering", sub: "Duales Studium · Hochschule", score: 81 },
] as const;
