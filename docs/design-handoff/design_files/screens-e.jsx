// Variant E — Light-themed app screen library
// Mirrors the actual ApplyOS app layouts (Pipeline · Job-Detail · Radar)
// with fictional German companies. All screens render light-on-light
// against the warm-graphite landing background.

const APP_LIGHT = {
  bg: "#f4f3ef",        // main app bg (warm light gray)
  card: "#ffffff",      // white card
  text: "#0a0a0a",
  text2: "#3a3a3a",
  dim: "#888",
  faint: "#bbb",
  // Brand
  teal: "#0d9c81",      // primary brand teal
  tealSoft: "#dbeee4",  // light teal bg
  tealMid: "#a8d8c5",
  // Score ring (orange)
  orange: "#d77b1c",
  orangeSoft: "#f7e9d5",
  // Pastel tiles
  blue: "#5a6cff",
  blueSoft: "#e7eaff",
  purple: "#8b69d6",
  purpleSoft: "#efe9f7",
  green: "#3a8568",
  greenSoft: "#e0f1e7",
  // Owl chat bubble
  owlBubble: "#eceff5",
  line: "rgba(0,0,0,.06)",
  divider: "#f1efe7",
};

// E_PALETTE stays for landing-page chrome (kept from previous version)
const E_PALETTE = {
  bg: "#1c1a17", paper: "#2a2620", paperHi: "#3a342c",
  text: "#ede4d0", text2: "#d4c9b0", dim: "#a39782", faint: "#6b6253",
  line: "rgba(237,228,208,.08)", lineHi: "rgba(237,228,208,.14)",
  card: "rgba(237,228,208,.025)",
};

// Fictional German jobs/companies — no real entities
const JOBS = [
  { title: "Senior Marketing Manager Regional Marketing (m/w/d)", company: "Brennstoff Mediengruppe GmbH", location: "Düsseldorf, Nordrhein-Westfalen", date: "20. Mai 2026", score: 52 },
  { title: "Team Lead Digital Marketing (w/m/x)", company: "Vellena SE", location: "Düsseldorf, Nordrhein-Westfalen", date: "20. Mai 2026", score: 66 },
  { title: "Operations Manager HR & Marketing (m/w/d)", company: "Nordpfeil Recruitment GmbH", location: "Düsseldorf, Nordrhein-Westfalen", date: "Mai 2026", score: 63 },
  { title: "Product Manager Marketplace (m/w/d)", company: "Klingenstein & Söhne", location: "Köln, Nordrhein-Westfalen", date: "18. Mai 2026", score: 78 },
];

const STUDENT_MATCHES = [
  { title: "Fachinformatiker:in", sub: "Anwendungsentwicklung · Ausbildung", score: 92 },
  { title: "Wirtschaftsinformatik", sub: "Bachelor of Science · Universität", score: 87 },
  { title: "Software Engineering", sub: "Duales Studium · Hochschule", score: 81 },
];

// ───────────────────────────────────────────────────────────────
// PhoneFrame — light theme by default now (matches actual app)
// ───────────────────────────────────────────────────────────────
function PhoneFrame({ children, scale = 1, theme = "light" }) {
  const W = 264, H = 552;
  const bg = theme === "dark" ? "#1c1a17" : APP_LIGHT.bg;
  const ink = theme === "dark" ? E_PALETTE.text : APP_LIGHT.text;
  return (
    <div style={{ width: W * scale, height: H * scale, transformOrigin: "top center" }}>
      <div style={{
        width: W, height: H,
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: "top left",
        borderRadius: 42, padding: 7,
        background: "linear-gradient(180deg, #2a2823, #15130f)",
        boxShadow: "0 30px 80px -20px rgba(0,0,0,.55), inset 0 0 0 1px rgba(255,255,255,.06)",
        position: "relative",
      }}>
        <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", width: 84, height: 22, borderRadius: 20, background: "#000", zIndex: 5 }} />
        <div style={{
          width: "100%", height: "100%", borderRadius: 36, background: bg,
          padding: "40px 14px 14px", overflow: "hidden", position: "relative",
          color: ink,
          fontFamily: '"Geist", -apple-system, system-ui, sans-serif',
          letterSpacing: "-.005em",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, opacity: .55, marginBottom: 12, fontFeatureSettings: "'tnum'" }}>
            <span>13:38</span><span>●●●●●  100%</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Helper: Owl chat bubble
// ───────────────────────────────────────────────────────────────
function OwlBubble({ children, size = "md" }) {
  const avatar = size === "sm" ? 24 : 30;
  const padY = size === "sm" ? 7 : 9;
  const fontSize = size === "sm" ? 10 : 11;
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
      <div style={{
        width: avatar, height: avatar, borderRadius: avatar / 2, flexShrink: 0,
        background: APP_LIGHT.purpleSoft, padding: 3,
      }}>
        <img src="assets/appi-logo.png" alt="Appi" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{
        background: APP_LIGHT.owlBubble, borderRadius: 14, padding: `${padY}px 12px`,
        fontSize, lineHeight: 1.35, color: APP_LIGHT.text, flex: 1,
      }}>{children}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Helper: Score ring (orange progress ring)
// ───────────────────────────────────────────────────────────────
function ScoreRing({ score, size = 40, fontSize = 11 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: `conic-gradient(${APP_LIGHT.orange} ${score}%, ${APP_LIGHT.orangeSoft} 0)`,
      display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: Math.max(3, size * 0.08), borderRadius: "50%",
        background: APP_LIGHT.card,
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      }}>
        <span style={{ fontSize, fontWeight: 700, color: APP_LIGHT.text, lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: Math.max(6, fontSize * 0.55), color: APP_LIGHT.dim }}>%</span>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Helper: Bottom tab bar (matches the pill nav in screenshots)
// ───────────────────────────────────────────────────────────────
function BottomTabs({ active = "pipeline", pipelineBadge = 0 }) {
  const Item = ({ icon, label, id, badge }) => {
    const isActive = id === active;
    return (
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
        background: isActive ? APP_LIGHT.tealSoft : "transparent",
        padding: "6px 10px", borderRadius: 99,
        position: "relative",
      }}>
        <span style={{ fontSize: 12, color: isActive ? APP_LIGHT.teal : APP_LIGHT.text2, position: "relative" }}>
          {icon}
          {badge ? (
            <span style={{
              position: "absolute", top: -4, right: -8,
              width: 11, height: 11, borderRadius: "50%",
              background: "#d44", color: "#fff", fontSize: 7, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{badge}</span>
          ) : null}
        </span>
        <span style={{ fontSize: 8, color: isActive ? APP_LIGHT.teal : APP_LIGHT.text2, fontWeight: isActive ? 600 : 400 }}>{label}</span>
      </div>
    );
  };
  return (
    <div style={{
      position: "absolute", bottom: 12, left: 14, right: 14,
      background: APP_LIGHT.card, borderRadius: 99, padding: 4,
      boxShadow: "0 2px 14px rgba(0,0,0,.06), 0 0 0 1px rgba(0,0,0,.04)",
      display: "flex", justifyContent: "space-around", alignItems: "center",
    }}>
      <Item icon="👤" label="Profil" id="profil" />
      <Item icon="📡" label="Radar" id="radar" />
      <Item icon="📋" label="Pipeline" id="pipeline" badge={pipelineBadge} />
      <Item icon="☰" label="Menü" id="menu" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 1. RADAR — daily job swipe view (matches screenshot 3)
// ═══════════════════════════════════════════════════════════════
function ScreenRadar({ accent }) {
  const job = JOBS[2]; // Operations Manager — fictional
  return (
    <React.Fragment>
      <OwlBubble>Deine 4 Tagesvorschläge — swipe durch und finde deinen Traumjob!</OwlBubble>

      {/* Big job card */}
      <div style={{
        marginTop: 6, background: APP_LIGHT.card, borderRadius: 16, padding: 14,
        boxShadow: "0 4px 16px -8px rgba(0,0,0,.08), 0 0 0 1px rgba(0,0,0,.04)",
      }}>
        {/* Vermittler pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          padding: "3px 9px", background: "#f1efe7", borderRadius: 99,
          fontSize: 8.5, color: APP_LIGHT.text2, marginBottom: 10,
        }}>
          <span>👥</span> Vermittler
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: APP_LIGHT.dim, marginBottom: 2 }}>{job.company}</div>
            <div style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.2, color: APP_LIGHT.text }}>{job.title}</div>
          </div>
          <ScoreRing score={job.score} size={42} fontSize={12} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 9, color: APP_LIGHT.dim }}>{job.location}</span>
          <span style={{
            fontSize: 8.5, padding: "2px 8px", borderRadius: 99,
            background: APP_LIGHT.purpleSoft, color: APP_LIGHT.purple, fontWeight: 500,
          }}>Mittelstand</span>
        </div>

        {/* Owl insight */}
        <div style={{ marginTop: 12, padding: "8px 10px", background: APP_LIGHT.owlBubble, borderRadius: 12, display: "flex", gap: 8 }}>
          <div style={{
            width: 20, height: 20, flexShrink: 0, borderRadius: "50%",
            background: APP_LIGHT.purpleSoft, padding: 2,
          }}>
            <img src="assets/appi-logo.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <p style={{ fontSize: 9.5, lineHeight: 1.4, color: APP_LIGHT.text2, fontStyle: "italic", margin: 0 }}>
            Deine Organisationsstärke passt zur Koordinierung interner Prozesse.
          </p>
        </div>

        {/* Darüber hinaus passt */}
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 10, color: APP_LIGHT.teal, fontWeight: 600, marginBottom: 6 }}>Darüber hinaus passt…</div>
          <div style={{ padding: 10, background: APP_LIGHT.tealSoft, borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: APP_LIGHT.text, marginBottom: 6, display: "flex", gap: 7 }}>
              <span>📈</span><span>Dein Erfahrungslevel passt</span>
            </div>
            <div style={{ fontSize: 10, color: APP_LIGHT.text, display: "flex", gap: 7 }}>
              <span>💜</span><span>Innovationsfreudig, Nachhaltigkeitsbew…</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 10, fontSize: 9, color: APP_LIGHT.faint }}>
          Tippe für alle Details ›
        </div>
      </div>

      {/* Swipe action buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 14 }}>
        {[
          { icon: "↶", bg: "#fef2e0", color: APP_LIGHT.orange },
          { icon: "✕", bg: "#fde4e4", color: "#d44" },
          { icon: "✦", bg: APP_LIGHT.blueSoft, color: APP_LIGHT.blue },
          { icon: "✓", bg: APP_LIGHT.tealSoft, color: APP_LIGHT.teal },
        ].map((a, i) => (
          <div key={i} style={{
            width: 32, height: 32, borderRadius: "50%", background: a.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: a.color, fontSize: 13, fontWeight: 700,
          }}>{a.icon}</div>
        ))}
      </div>

      <BottomTabs active="radar" pipelineBadge={1} />
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════════════
// 2. PIPELINE — kanban-status view (matches screenshot 1)
// ═══════════════════════════════════════════════════════════════
function ScreenPipeline({ accent, activeStage = "beworben" }) {
  const stages = [
    { id: "entdeckt",  count: 2, label: "Entdeckt",  icon: "✦", bg: APP_LIGHT.tealSoft,   color: APP_LIGHT.teal },
    { id: "beworben",  count: 2, label: "Beworben",  icon: "✈", bg: APP_LIGHT.blueSoft,   color: APP_LIGHT.blue },
    { id: "interview", count: 1, label: "Interview", icon: "👥", bg: APP_LIGHT.purpleSoft, color: APP_LIGHT.purple },
    { id: "feedback",  count: 0, label: "Feedback",  icon: "✉", bg: APP_LIGHT.greenSoft,  color: APP_LIGHT.green },
  ];
  const pipelineJobs = JOBS.slice(0, 2);

  return (
    <React.Fragment>
      <OwlBubble size="sm">2 neue Bewerbungen warten</OwlBubble>

      {/* Status tiles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5, marginTop: 14, marginBottom: 14 }}>
        {stages.map((s) => {
          const isActive = s.id === activeStage;
          return (
            <div key={s.id} style={{ textAlign: "center" }}>
              <div style={{
                background: s.bg, borderRadius: 11,
                aspectRatio: "1 / 1",
                border: isActive ? `2px solid ${s.color}` : "2px solid transparent",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2,
              }}>
                <span style={{ fontSize: 14, color: s.color, lineHeight: 1 }}>{s.icon}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: APP_LIGHT.text, lineHeight: 1 }}>{s.count}</span>
              </div>
              <div style={{ fontSize: 8.5, color: isActive ? s.color : APP_LIGHT.text2, marginTop: 5, fontWeight: isActive ? 600 : 400 }}>{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Job cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {pipelineJobs.map((job, i) => (
          <div key={i} style={{
            background: APP_LIGHT.card, borderRadius: 12, padding: 10,
            boxShadow: "0 1px 3px rgba(0,0,0,.04), 0 0 0 1px rgba(0,0,0,.03)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 700, lineHeight: 1.25, color: APP_LIGHT.text }}>{job.title}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5 }}>
                  <span style={{ fontSize: 9, color: APP_LIGHT.dim }}>🏢</span>
                  <span style={{ fontSize: 8.5, color: APP_LIGHT.dim, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{job.company}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                  <span style={{ fontSize: 9, color: APP_LIGHT.dim }}>📍</span>
                  <span style={{ fontSize: 8.5, color: APP_LIGHT.dim, flex: 1 }}>{job.location.split(",")[0]}</span>
                  <span style={{ fontSize: 8.5, color: APP_LIGHT.faint }}>{job.date}</span>
                </div>
              </div>
              <ScoreRing score={job.score} size={34} fontSize={10} />
            </div>
            <div style={{
              marginTop: 8, padding: "6px 10px", background: APP_LIGHT.tealSoft, borderRadius: 8,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontSize: 9, color: APP_LIGHT.teal, fontWeight: 500, display: "flex", alignItems: "center", gap: 5 }}>
                <span>✦</span>Interview-Fragen vorbereiten
              </span>
              <span style={{ fontSize: 10, color: APP_LIGHT.teal }}>›</span>
            </div>
          </div>
        ))}
      </div>

      <BottomTabs active="pipeline" pipelineBadge={2} />
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════════════
// 3. JOB DETAIL — sheet with Auf einen Blick + Job-Fit (screenshot 2)
// ═══════════════════════════════════════════════════════════════
function ScreenJobDetail({ accent }) {
  const job = JOBS[2];
  const fit = [
    { label: "Standort",        score: 12, max: 12, sub: "Düsseldorf, NRW — passt zu deiner Suche", good: true },
    { label: "Wunschberuf",     score: 25, max: 25, sub: "\"Marketing\" im Titel", good: true },
    { label: "Erfahrungslevel", score: 9,  max: 12, sub: "Leicht überqualifiziert", good: false },
    { label: "Aktualität",      score: 1,  max: 3,  sub: "Vor 1–2 Wochen", good: false },
  ];

  return (
    <React.Fragment>
      {/* Sheet drag handle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
        <div style={{ width: 32, height: 4, borderRadius: 2, background: "#d4d4d4" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
        <span style={{
          width: 20, height: 20, borderRadius: "50%", background: "#ececec",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: APP_LIGHT.text2,
        }}>×</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 9, color: APP_LIGHT.dim }}>{job.company}</div>
          <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.2, color: APP_LIGHT.text, marginTop: 2 }}>{job.title}</div>
        </div>
        <ScoreRing score={job.score} size={44} fontSize={12} />
      </div>

      <div style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        padding: "3px 9px", background: "#f1efe7", borderRadius: 99,
        fontSize: 8.5, color: APP_LIGHT.text2, marginBottom: 12,
      }}>
        <span>👥</span> Vermittler
      </div>

      {/* Auf einen Blick header */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: APP_LIGHT.text, marginBottom: 8 }}>
        <span style={{ fontSize: 12 }}>📋</span> Auf einen Blick
      </div>
      <div style={{ background: APP_LIGHT.card, borderRadius: 12, marginBottom: 10, boxShadow: "0 0 0 1px rgba(0,0,0,.04)" }}>
        {[
          ["📍", "Standort", "Düsseldorf, NRW"],
          ["📅", "Start", "Mai 2026"],
          ["👥", "Vermittler", "Ja"],
        ].map(([icon, k, v], i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "9px 11px",
            borderBottom: i < 2 ? `1px solid ${APP_LIGHT.divider}` : "none",
            fontSize: 9.5,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: APP_LIGHT.text2 }}>
              <span style={{ color: APP_LIGHT.teal }}>{icon}</span>{k}
            </span>
            <span style={{ color: APP_LIGHT.text, fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button style={{
        width: "100%", padding: "10px 12px", borderRadius: 10, background: APP_LIGHT.tealSoft,
        color: APP_LIGHT.teal, border: 0, fontSize: 10.5, fontWeight: 600, fontFamily: "inherit",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      }}>
        <span>🧭</span> Zur Originalanzeige
      </button>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", fontSize: 10, color: APP_LIGHT.teal, fontWeight: 600 }}>
        <span>Vollständige Beschreibung</span><span>›</span>
      </div>

      <div style={{ borderTop: `1px solid ${APP_LIGHT.divider}`, paddingTop: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: APP_LIGHT.text, marginBottom: 8 }}>
          <span>💼</span> Job-Fit im Detail
        </div>
        <div style={{ fontSize: 9, color: APP_LIGHT.teal, marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{
            width: 12, height: 12, borderRadius: "50%", background: APP_LIGHT.teal,
            color: "#fff", fontSize: 8, fontWeight: 700,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>✓</span>
          Stärken: Standort · Wunschberuf
        </div>
        {fit.map((f, i) => {
          const c = f.good ? APP_LIGHT.teal : APP_LIGHT.orange;
          return (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{
                  width: 13, height: 13, borderRadius: "50%", background: c,
                  color: "#fff", fontSize: 9, fontWeight: 700, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{f.good ? "✓" : "−"}</span>
                <span style={{ fontSize: 10, color: APP_LIGHT.text, fontWeight: 500, flexShrink: 0 }}>{f.label}</span>
                <div style={{ flex: 1, height: 4, background: APP_LIGHT.divider, borderRadius: 2, overflow: "hidden", marginLeft: 4 }}>
                  <div style={{ height: "100%", width: `${(f.score / f.max) * 100}%`, background: c, borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 8.5, color: APP_LIGHT.dim, fontFeatureSettings: "'tnum'", width: 26, textAlign: "right" }}>{f.score}/{f.max}</span>
              </div>
              <div style={{ fontSize: 8.5, color: APP_LIGHT.faint, marginLeft: 19, marginTop: 2 }}>{f.sub}</div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════════════
// 4. ONBOARDING — binary "Was ist dir wichtiger?" card (matches real app)
// ═══════════════════════════════════════════════════════════════
function ScreenOnboarding({ accent }) {
  return (
    <React.Fragment>
      <OwlBubble>Was ist dir wichtiger?</OwlBubble>

      {/* Big white card split into two choice halves */}
      <div style={{
        marginTop: 24, background: APP_LIGHT.card, borderRadius: 18,
        boxShadow: "0 4px 16px -8px rgba(0,0,0,.08), 0 0 0 1px rgba(0,0,0,.04)",
        display: "flex", flexDirection: "column",
        height: 360,
      }}>
        <div style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, fontWeight: 700, color: APP_LIGHT.text,
          letterSpacing: "-.01em",
        }}>Flexible Zeiten</div>
        <div style={{ height: 1, background: APP_LIGHT.divider, margin: "0 24px" }} />
        <div style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, fontWeight: 700, color: APP_LIGHT.text,
          letterSpacing: "-.01em",
        }}>Feste Strukturen</div>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 18, padding: "0 4px" }}>
        <div style={{ height: 3, background: APP_LIGHT.divider, borderRadius: 2, overflow: "hidden" }}>
          <div style={{ width: "50%", height: "100%", background: APP_LIGHT.teal }} />
        </div>
        <div style={{ textAlign: "center", fontSize: 10, color: APP_LIGHT.dim, marginTop: 8, fontFeatureSettings: "'tnum'" }}>
          5 / 10
        </div>
      </div>
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════════════
// 5. STUDENT RESULT — matching careers (light themed)
// ═══════════════════════════════════════════════════════════════
function ScreenStudentResult({ accent }) {
  return (
    <React.Fragment>
      <OwlBubble size="sm">Hier sind die Berufe, die zu dir passen.</OwlBubble>
      <div style={{ marginTop: 16, fontSize: 10, color: APP_LIGHT.teal, textTransform: "uppercase", letterSpacing: ".12em", fontWeight: 600 }}>Dein Ergebnis</div>
      <div style={{ fontSize: 18, lineHeight: 1.15, fontFamily: '"Source Serif 4", serif', fontWeight: 400, marginTop: 6, marginBottom: 4, color: APP_LIGHT.text }}>
        Das passt zu <span style={{ fontStyle: "italic", color: APP_LIGHT.teal }}>dir</span>.
      </div>
      <div style={{ fontSize: 10, color: APP_LIGHT.dim, marginBottom: 14 }}>Basierend auf deinem Profil</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {STUDENT_MATCHES.map((m, i) => (
          <div key={i} style={{
            borderRadius: 12, padding: 12,
            background: APP_LIGHT.card,
            boxShadow: i === 0
              ? `0 0 0 1.5px ${APP_LIGHT.teal}`
              : "0 0 0 1px rgba(0,0,0,.05)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
              <span style={{ fontSize: 11.5, fontWeight: 700, fontFamily: '"Source Serif 4", serif', color: APP_LIGHT.text }}>{m.title}</span>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: APP_LIGHT.teal, fontFeatureSettings: "'tnum'" }}>{m.score}</span>
                <span style={{ fontSize: 8, color: APP_LIGHT.dim }}>%</span>
              </div>
            </div>
            <div style={{ fontSize: 9, color: APP_LIGHT.dim, marginBottom: 8 }}>{m.sub}</div>
            <div style={{ height: 3, background: APP_LIGHT.divider, borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: `${m.score}%`, height: "100%", background: APP_LIGHT.teal }} />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

// Full-bleed app screenshot — used as the LEFT phone on the Schüler card
function ScreenResultImage({ accent }) {
  return (
    <div style={{
      position: "absolute", inset: 0, borderRadius: 36, overflow: "hidden",
      background: APP_LIGHT.bg,
    }}>
      <img
        src="assets/app-result.png"
        alt="Troubleshooter Ergebnis"
        style={{
          width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center",
          display: "block",
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// 6. CV / Profile (light themed)
// ═══════════════════════════════════════════════════════════════
function ScreenCV({ accent }) {
  return (
    <React.Fragment>
      <div style={{ fontSize: 10, color: APP_LIGHT.text2, marginBottom: 14, display: "flex", justifyContent: "space-between" }}>
        <span>Profil</span><span style={{ color: APP_LIGHT.teal, fontWeight: 600 }}>Bearbeiten</span>
      </div>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{
          width: 60, height: 60, borderRadius: "50%", margin: "0 auto 10px",
          background: `linear-gradient(135deg, ${APP_LIGHT.teal}, #4cb89e)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 22, fontWeight: 700,
        }}>AK</div>
        <div style={{ fontSize: 14, fontFamily: '"Source Serif 4", serif', fontWeight: 500, color: APP_LIGHT.text }}>Anna Köhler</div>
        <div style={{ fontSize: 10, color: APP_LIGHT.dim, marginTop: 2 }}>Marketing Manager · 6 Jahre Erfahrung</div>
      </div>
      <div style={{ borderTop: `1px solid ${APP_LIGHT.divider}`, paddingTop: 14 }}>
        <div style={{ fontSize: 9, color: APP_LIGHT.dim, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 10, fontWeight: 600 }}>Erfahrung</div>
        {[
          { role: "Marketing Lead", company: "Brennstoff Mediengruppe", years: "2022 — Heute" },
          { role: "Junior Marketing Manager", company: "Vellena SE", years: "2019 — 2022" },
        ].map((e, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 8, paddingBottom: 10, marginBottom: 10, borderBottom: i === 0 ? `1px solid ${APP_LIGHT.divider}` : "none" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: APP_LIGHT.text }}>{e.role}</div>
              <div style={{ fontSize: 9, color: APP_LIGHT.dim, marginTop: 1 }}>{e.company}</div>
            </div>
            <span style={{ fontSize: 9, color: APP_LIGHT.faint, whiteSpace: "nowrap" }}>{e.years}</span>
          </div>
        ))}
        <div style={{ fontSize: 9, color: APP_LIGHT.dim, textTransform: "uppercase", letterSpacing: ".1em", marginTop: 14, marginBottom: 8, fontWeight: 600 }}>Skills</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {["B2B-Marketing", "Kampagnen", "SEO", "Branding", "HubSpot"].map(s => (
            <span key={s} style={{ fontSize: 9, padding: "4px 8px", borderRadius: 99, background: APP_LIGHT.tealSoft, color: APP_LIGHT.teal, fontWeight: 500 }}>{s}</span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════════════
// 7. WAITLIST CONFIRM (light themed)
// ═══════════════════════════════════════════════════════════════
function ScreenWaitlistConfirm({ accent, t, count = 28, lang = "de" }) {
  const w = t.waitlist;
  const fmt = (n) => n.toLocaleString(lang === "en" ? "en-US" : "de-DE");
  const positionLabel = lang === "en" ? `Spot #${fmt(count)}` : `Platz ${fmt(count)}`;
  const totalLabel = lang === "en" ? `of ${fmt(count + 12)} signups` : `von ${fmt(count + 12)} Anmeldungen`;
  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
        <div style={{ width: 22, height: 22, borderRadius: 6, background: APP_LIGHT.teal, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>A</div>
        <span style={{ fontSize: 11, fontFamily: '"Source Serif 4", serif', fontStyle: "italic", color: APP_LIGHT.text }}>ApplyOS</span>
      </div>
      <div style={{
        width: 64, height: 64, borderRadius: "50%", margin: "16px auto 14px",
        background: APP_LIGHT.tealSoft, border: `2px solid ${APP_LIGHT.teal}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: APP_LIGHT.teal, fontSize: 28, position: "relative",
      }}>
        <span style={{ fontWeight: 700 }}>✓</span>
        <span style={{ position: "absolute", inset: -8, borderRadius: "50%", border: `1px solid ${APP_LIGHT.teal}33` }} />
      </div>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <div style={{ fontSize: 15, fontFamily: '"Source Serif 4", serif', fontWeight: 400, color: APP_LIGHT.text }}>
          <span style={{ fontStyle: "italic", color: APP_LIGHT.teal }}>{w.confirm.title}</span>
        </div>
        <div style={{ fontSize: 10, color: APP_LIGHT.dim, marginTop: 4 }}>{w.confirm.sub}</div>
      </div>
      <div style={{
        background: APP_LIGHT.card, borderRadius: 12, padding: 12,
        boxShadow: "0 0 0 1px rgba(0,0,0,.05)", textAlign: "center", marginBottom: 10,
      }}>
        <div style={{ fontSize: 8, color: APP_LIGHT.dim, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 4, fontWeight: 600 }}>Deine Position</div>
        <div style={{ fontSize: 22, fontFamily: '"Source Serif 4", serif', fontStyle: "italic", color: APP_LIGHT.teal, lineHeight: 1 }}>{positionLabel}</div>
        <div style={{ fontSize: 9, color: APP_LIGHT.dim, marginTop: 6 }}>{totalLabel}</div>
      </div>
      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 8, color: APP_LIGHT.dim, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 6, display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
          <span>Beta-Start</span><span>Q3 ’26</span>
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {Array.from({length: 12}).map((_, i) => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 1, background: i < 5 ? APP_LIGHT.teal : APP_LIGHT.divider }} />
          ))}
        </div>
      </div>
      <div style={{
        marginTop: 14, padding: "9px 11px", borderRadius: 10, background: APP_LIGHT.tealSoft,
        fontSize: 9.5, color: APP_LIGHT.teal, display: "flex", alignItems: "center", gap: 7, fontWeight: 500,
      }}>
        <span>✦</span>Wir benachrichtigen dich per E-Mail.
      </div>
    </React.Fragment>
  );
}

Object.assign(window, {
  PhoneFrame, OwlBubble, ScoreRing, BottomTabs,
  APP_LIGHT, E_PALETTE, JOBS, STUDENT_MATCHES,
  ScreenRadar, ScreenPipeline, ScreenJobDetail,
  ScreenOnboarding, ScreenStudentResult, ScreenResultImage, ScreenCV,
  ScreenWaitlistConfirm,
  // Back-compat aliases (so variant-e.jsx still works during transition)
  ScreenJobFeed: ScreenPipeline,
  ScreenMatchDetail: ScreenJobDetail,
  ScreenSwipe: ScreenRadar,
  ScreenKanban: ScreenPipeline,
  ScreenMatchCard: ScreenRadar,
  ScreenCoverLetter: ScreenJobDetail,
});
