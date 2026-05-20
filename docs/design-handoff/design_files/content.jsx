// Shared content for ApplyOS landing variants — DE + EN.
const CONTENT = {
  de: {
    nav: { features: "Features", why: "Warum", how: "Ablauf", waitlist: "Early Access", faq: "FAQ", download: "Auf Warteliste" },
    hero: {
      eyebrow: "Exclusive Early Access",
      title: ["Dein nächster Karriereschritt.", "Proaktiv. Persönlich. KI-gestützt."],
      subtitle: "ApplyOS lernt, was du wirklich willst — und findet täglich die besten Jobs für dich. Ob Berufserfahrene oder Schüler.",
      cta: "Auf Warteliste setzen",
      meta: "Kostenlos · Limitierte Plätze",
    },
    trust: { label: "Stellendaten von", source: "Bundesagentur für Arbeit", live: "Live-Index" },
    features: {
      eyebrow: "Features",
      title: "Die App, die für dich arbeitet.",
      sub: "Vier Kernfunktionen, die deine Bewerbungsphase neu definieren.",
      items: [
        {
          title: "Proaktive Jobsuche",
          description: "Täglich neue Top-Jobs, automatisch auf dich zugeschnitten"
        },
        {
          title: "Intelligentes Matching",
          description: "KI-Match-Score zeigt, wie gut jede Stelle zu dir passt"
        },
        {
          title: "Kanban-Pipeline",
          description: "Alle Bewerbungen auf einen Blick tracken"
        }
      ],
    },
    why: {
      eyebrow: "Warum ApplyOS",
      title: "Weil du es wert bist.",
      problem: { label: "Klassische Karriereportale", text: "Optimiert für Unternehmenskunden. Du wirst als Ressource vermittelt — so, wie es Arbeitgeber wollen. Dein Profil? Nebensache. Die kognitive Last? Dein Problem." },
      solution: { label: "ApplyOS", text: "Gebaut für dich, nicht für Unternehmen. Die Jobsuche soll für dich so einfach wie möglich sein. Keine Unternehmenskunden. Kein Vermittlungsinteresse." },
      stats: [
        { num: "100%", label: "User-fokussiert" },
        { num: "0", label: "Unternehmenskunden" },
        { num: "↓ 85%", label: "Weniger Aufwand" },
      ],
    },
    groups: {
      eyebrow: "Für wen ist ApplyOS",
      title: "Zwei Wege. Ein Ziel.",
      cards: [
        {
          accent: "teal",
          title: "Für Jobsuchende",
          sub: "Berufsanfänger · Berufserfahrene · Wiedereinsteiger",
          points: [
            "Erstelle ein Profil und finde Stellen die wirklich zu dir passen",
            "Täglich neue Top-Jobs — proaktiv auf dich zugeschnitten",
            "Lebenslauf & Anschreiben automatisch generiert",
            "Auf die Original-Anzeige bewerben — mit einem Klick",
            "Alle Stellen übersichtlich an einem Ort tracken",
          ],
        },
        {
          accent: "indigo",
          title: "Für Schüler",
          sub: "Ausbildung · Studium · Berufsorientierung",
          points: [
            "Psychologisch fundiertes Persönlichkeitsprofiling",
            "Finde heraus, was wirklich zu dir passt",
            "Passende Ausbildungsplätze & Studiengänge",
            "Von \u201EKeine Ahnung\u201C zu einem klaren Plan",
            "Bewerbungsprozess Schritt für Schritt begleitet",
          ],
        },
      ],
    },
    how: {
      eyebrow: "So funktioniert's",
      title: "In drei Schritten zum Traumjob.",
      steps: [
        { title: "Profil erstellen", desc: "Finde heraus, was du wirklich willst. Die App führt dich durch ein interaktives Profiling, welches mehr erfasst als nur deinen CV." },
        { title: "Jobs entdecken", desc: "ApplyOS sucht täglich für dich nach den besten Matches. Swipe durch passende Stellen — mit KI-Score, der zeigt, wie gut sie zu dir passen." },
        { title: "Bewerben & Tracken", desc: "Lass automatisch ein personalisiertes Anschreiben und Interview-Fragen für das Bewerbungsgespräch generieren." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen.",
      items: [
        { q: "Ist ApplyOS kostenlos?", a: "Ja, ApplyOS ist kostenlos im App Store verfügbar. Alle Kernfeatures — CV-Erstellung, Jobsuche, Matching und Pipeline — sind ohne Kosten nutzbar." },
        { q: "Woher kommen die Stellenangebote?", a: "Die Stellenangebote stammen aus einer der größten Jobdatenbanken Deutschlands mit hunderttausenden aktuellen Stellen." },
        { q: "Kann ich mich direkt aus der App bewerben?", a: "ApplyOS leitet dich zur Original-Anzeige weiter, wo du dich direkt bewerben kannst. Vorher generiert die App auf Wunsch ein maßgeschneidertes Anschreiben." },
        { q: "Was ist das psychologische Profiling für Schüler?", a: "Schüler durchlaufen ein wissenschaftlich fundiertes Persönlichkeitsprofiling. Basierend auf den Ergebnissen schlägt die App passende Ausbildungsplätze oder Studiengänge vor." },
        { q: "Werden meine Daten an Unternehmen weitergegeben?", a: "Nein. Deine Daten gehören dir und werden nicht an Dritte verkauft oder weitergegeben." },
      ],
    },
    cta: { title: "Bereit für den nächsten Schritt?", sub: "Ob Jobsuche oder Berufsorientierung — sichere dir jetzt deinen Early-Access-Platz.", btn: "Auf Warteliste setzen" },
    waitlist: {
      eyebrow: "Exclusive Early Access",
      title: ["Exklusiver Early Access.", "Limitierte Plätze."],
      sub: "ApplyOS startet geschlossen. Wir nehmen die Warteliste in Wellen rein — sichere dir deinen Platz.",
      formLabel: "Auf Warteliste setzen",
      emailPlaceholder: "deine@email.de",
      profileLabel: "Ich bin",
      profiles: [
        { id: "job", label: "Berufstätig" },
        { id: "return", label: "Wiedereinsteiger" },
        { id: "student", label: "Schüler:in" },
      ],
      submit: "Platz sichern",
      legal: "Mit Anmeldung akzeptierst du die Datenschutzbestimmungen. Kein Spam.",
      stats: [
        { num: "100", label: "freie Plätze" },
        { num: "2.184", label: "auf der Warteliste" },
      ],
      perks: {
        label: "Was du bekommst",
        items: [
          "Voller Zugang zu ApplyOS — vor dem offiziellen Launch",
          "Direkter Draht zum Team — dein Feedback formt das Produkt",
          "Updates aus der Entwicklung — bevor sie öffentlich sind",
        ],
      },
      confirm: { title: "Willkommen an Bord.", sub: "Du bist auf der Liste.", position: "Platz 2.185" },
    },
    footer: { tagline: "Dein KI-Karriere-Agent. Proaktiv. Persönlich. Einfach.", product: "Produkt", legal: "Rechtliches", links: { privacy: "Datenschutz", terms: "Nutzungsbedingungen", imprint: "Impressum", cookies: "Cookies", features: "Features", how: "Ablauf", faq: "FAQ" }, copyright: "© 2026 ApplyOS. Alle Rechte vorbehalten." },
    screen: {
      jobTitle: "Senior Product Designer",
      company: "Werner & Mertz GmbH · Mainz",
      score: "92",
      scoreLabel: "Match-Score",
      tags: ["Remote", "Vollzeit", "Senior"],
      reasons: ["Passt zu deinem Profil als Designer", "Remote-Option erfüllt deinen Wunsch", "Gehalt im oberen Bereich deiner Range"],
      apply: "Auf Original-Anzeige bewerben",
      generate: "Anschreiben generieren",
      kanban: ["Entdeckt", "Beworben", "Interview", "Angebot"],
      kanbanCounts: [12, 4, 2, 1],
    },
  },
  en: {
    nav: { features: "Features", why: "Why", how: "How it works", waitlist: "Early Access", faq: "FAQ", download: "Join waitlist" },
    hero: {
      eyebrow: "Exclusive Early Access · Closed Beta",
      title: ["Your next career move.", "Proactive. Personal. AI-powered."],
      subtitle: "ApplyOS learns what you actually want — and finds the best jobs for you every day. For experienced professionals and students alike.",
      cta: "Join the waitlist",
      meta: "Free · Limited spots",
    },
    trust: { label: "Job data from", source: "Bundesagentur für Arbeit", live: "Live index" },
    features: {
      eyebrow: "Features",
      title: "The app that works for you.",
      sub: "Four core capabilities that redefine your job search.",
      items: [
        { tag: "Every morning", title: "Proactive job search", desc: "Fresh top matches every day, automatically tailored to you — no filters, no keywords." },
        { tag: "In detail", title: "Smart matching", desc: "An AI score shows at a glance how well each role actually fits your profile." },
        { tag: "At a glance", title: "Kanban pipeline", desc: "All applications at a glance: Discovered, Applied, Interview, Offer." },
      ],
    },
    why: {
      eyebrow: "Why ApplyOS",
      title: "Because you're worth it.",
      problem: { label: "Classic career portals", text: "Optimized for corporate clients. You're brokered as a resource — the way employers want. Your profile? Secondary. The cognitive load? Your problem." },
      solution: { label: "ApplyOS", text: "Built for applicants, not for companies. No corporate clients. No placement incentives. Just the best match for you — with as little effort as possible." },
      stats: [
        { num: "100%", label: "User-focused" },
        { num: "0", label: "Corporate clients" },
        { num: "↓ 85%", label: "Less effort" },
      ],
    },
    groups: {
      eyebrow: "Who ApplyOS is for",
      title: "Two paths. One goal.",
      cards: [
        {
          accent: "teal",
          title: "For job seekers",
          sub: "Experienced · Returnees · Switchers",
          points: [
            "Build a profile and understand what you actually want",
            "Fresh top jobs every day — proactively tailored to you",
            "CV & cover letter generated automatically",
            "Apply on the original listing — one tap",
            "Track every application in the Kanban board",
          ],
        },
        {
          accent: "indigo",
          title: "For students",
          sub: "Apprenticeships · University · Career orientation",
          points: [
            "Psychology-backed personality profiling",
            "Discover what genuinely fits you",
            "Matching apprenticeships & study programs",
            "From \"no idea\" to a clear plan",
            "Step-by-step guidance through every application",
          ],
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps to your dream job.",
      steps: [
        { title: "Build your profile", desc: "Figure out what you actually want. The app walks you through an interactive profiling — students go through a psychology-backed model." },
        { title: "Discover jobs", desc: "ApplyOS searches for the best matches every day. Swipe through curated roles — each with an AI score showing fit." },
        { title: "Apply & track", desc: "Generate an AI cover letter, apply on the original listing, and track everything in your Kanban board." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions.",
      items: [
        { q: "Is ApplyOS free?", a: "Yes — ApplyOS is free on the App Store. Profiling, search, matching and pipeline are all included with no cost." },
        { q: "Where do the listings come from?", a: "Listings come from the Bundesagentur für Arbeit — one of Germany's largest job databases, with hundreds of thousands of live roles." },
        { q: "Can I apply directly from the app?", a: "ApplyOS hands you off to the original listing where you apply directly. The app can generate a tailored cover letter for you first." },
        { q: "What's the psychology profiling for students?", a: "Students go through a scientifically grounded personality assessment. Based on the results, the app suggests fitting apprenticeships or study programs." },
        { q: "Is my data shared with companies?", a: "No. ApplyOS has no corporate clients. Your data is yours — never sold, never shared." },
      ],
    },
    cta: { title: "Ready for what's next?", sub: "Whether job search or career orientation — grab your early-access spot now.", btn: "Join the waitlist" },
    waitlist: {
      eyebrow: "Exclusive Early Access",
      title: ["Exclusive Early Access.", "Limited spots."],
      sub: "ApplyOS is launching closed. We invite the waitlist in waves — grab your spot.",
      formLabel: "Join the waitlist",
      emailPlaceholder: "your@email.com",
      profileLabel: "I am",
      profiles: [
        { id: "job", label: "Working" },
        { id: "return", label: "Returning" },
        { id: "student", label: "Student" },
      ],
      submit: "Secure my spot",
      legal: "By signing up you accept our privacy terms. No spam.",
      stats: [
        { num: "100", label: "spots left" },
        { num: "2,184", label: "on the waitlist" },
      ],
      perks: {
        label: "What you get",
        items: [
          "Full access to ApplyOS — before the official launch",
          "Direct line to the team — your feedback shapes the product",
          "Development updates — before they go public",
        ],
      },
      confirm: { title: "Welcome aboard.", sub: "You're on the list.", position: "Spot #2,185" },
    },
    footer: { tagline: "Your AI career agent. Proactive. Personal. Free.", product: "Product", legal: "Legal", links: { privacy: "Privacy", terms: "Terms", imprint: "Imprint", cookies: "Cookies", features: "Features", how: "How it works", faq: "FAQ" }, copyright: "© 2026 ApplyOS. All rights reserved." },
    screen: {
      jobTitle: "Senior Product Designer",
      company: "Werner & Mertz GmbH · Mainz",
      score: "92",
      scoreLabel: "Match score",
      tags: ["Remote", "Full-time", "Senior"],
      reasons: ["Matches your designer profile", "Remote option matches your preference", "Salary in the upper end of your range"],
      apply: "Apply on original listing",
      generate: "Generate cover letter",
      kanban: ["Discovered", "Applied", "Interview", "Offer"],
      kanbanCounts: [12, 4, 2, 1],
    },
  },
};

window.CONTENT = CONTENT;
