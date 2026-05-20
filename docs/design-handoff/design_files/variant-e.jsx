// Variant E — Twilight (warm graphite · zwischen A & B)
// Mit echten App-Screen-Mockups (siehe screens-e.jsx).
function VariantE({ t, accent = "#3aab83", lang = "de" }) {
  const colors = E_PALETTE;
  const sans = `"Geist", "Söhne", -apple-system, system-ui, sans-serif`;
  const serif = `"Source Serif 4", "Instrument Serif", "Tiempos", Georgia, serif`;

  // ── Live waitlist count (persists across reloads) ─────────────────
  const [waitlistCount, setWaitlistCount] = React.useState(() => {
    try {
      const stored = localStorage.getItem("applyOS_waitlist_count");
      if (stored) return parseInt(stored, 10);
    } catch (e) {}
    return 28;
  });
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [shake, setShake] = React.useState(false);

  const formatCount = (n) => n.toLocaleString(lang === "en" ? "en-US" : "de-DE");
  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    const next = waitlistCount + 1;
    setWaitlistCount(next);
    try {localStorage.setItem("applyOS_waitlist_count", String(next));} catch (e) {}
    setSubmitted(true);
  };

  const Eyebrow = ({ children, centered, dashed = true }) =>
  <div style={{
    fontSize: 12, color: accent, textTransform: "uppercase", letterSpacing: ".14em",
    fontWeight: 500, marginBottom: 16, textAlign: centered ? "center" : "left"
  }}>
      {dashed ? `— ${children} —` : children}
    </div>;


  // Each feature gets its own screen preview
  const featureScreens = [
  { Screen: ScreenRadar, label: "Radar" },
  { Screen: ScreenJobDetail, label: "Job-Detail" },
  { Screen: ScreenPipeline, label: "Pipeline" }];


  // How-it-works step screens
  const stepScreens = [ScreenOnboarding, ScreenRadar, ScreenPipeline];

  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: sans, letterSpacing: "-.005em" }}>
      {/* ─── Nav ─── */}
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(28,26,23,.88)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${colors.line}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="assets/appi-logo.png" style={{ width: 28, height: 28, borderRadius: 6 }} />
            <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-.01em", fontFamily: serif, fontStyle: "italic" }}>ApplyOS</span>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 13, color: colors.text2 }}>
            <a>{t.nav.features}</a><a>{t.nav.why}</a><a>{t.nav.how}</a><a>{t.nav.faq}</a>
          </div>
          <button style={{ background: accent, color: colors.bg, padding: "9px 18px", borderRadius: 99, border: 0, fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}>{t.nav.download}</button>
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section style={{ position: "relative", padding: "110px 40px 80px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 900, height: 600, background: `radial-gradient(ellipse, ${accent}1a, transparent 60%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "center", position: "relative" }}>
          <div>
            {/* Editorial kicker — vertical accent bar + tracked label, no AI pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ width: 2, height: 16, background: accent }} />
              <span style={{ fontSize: 11, color: colors.text2, textTransform: "uppercase", letterSpacing: ".22em", fontWeight: 500 }}>{t.hero.eyebrow}</span>
            </div>
            <h1 style={{ fontSize: 72, lineHeight: 1, letterSpacing: "-.035em", fontWeight: 400, margin: 0, fontFamily: serif }}>
              {t.hero.title[0]}<br />
              <span style={{ fontStyle: "italic", color: accent }}>{t.hero.title[1]}</span>
            </h1>
            <p style={{ fontSize: 18, color: colors.text2, lineHeight: 1.55, maxWidth: 500, marginTop: 28 }}>{t.hero.subtitle}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 36 }}>
              <button style={{
                background: accent, color: colors.bg, padding: "14px 24px", borderRadius: 99, border: 0,
                fontSize: 14, fontWeight: 600, fontFamily: "inherit", display: "flex", alignItems: "center", gap: 10
              }}>
                <span style={{ fontSize: 18 }}>􀎫</span> {t.hero.cta}
              </button>
              <span style={{ fontSize: 12, color: colors.faint }}>{t.hero.meta}</span>
            </div>
          </div>
          {/* Hero phone stack — main + smaller offset */}
          <div style={{ position: "relative", height: 600, display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Background phone (Job-Detail), rotated */}
            <div style={{ position: "absolute", left: -10, top: 80, transform: "rotate(-6deg)", opacity: .55, filter: "blur(.4px)" }}>
              <PhoneFrame scale={.78}><ScreenJobDetail accent={accent} /></PhoneFrame>
            </div>
            {/* Foreground phone */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <PhoneFrame><ScreenRadar accent={accent} /></PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features (with screens) ─── */}
      <section style={{ padding: "100px 40px", background: colors.bg2 || colors.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <Eyebrow dashed={false}>— {t.features.eyebrow}</Eyebrow>
            <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 400, margin: 0, fontFamily: serif, maxWidth: 720 }}>
              {t.features.title.split(" ").slice(0, -1).join(" ")} <span style={{ fontStyle: "italic" }}>{t.features.title.split(" ").slice(-1)}</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {t.features.items.map((it, i) => {
              const { Screen, label } = featureScreens[i];
              return (
                <div key={i} style={{
                  border: `1px solid ${colors.line}`, borderRadius: 20,
                  background: colors.bg, display: "flex", flexDirection: "column", overflow: "hidden"
                }}>
                  {/* Screen preview */}
                  <div style={{
                    background: `radial-gradient(ellipse at top, ${accent}10, transparent 70%), linear-gradient(180deg, #221f1b, ${colors.bg})`,
                    padding: "32px 32px 0", display: "flex", justifyContent: "center",
                    borderBottom: `1px solid ${colors.line}`, minHeight: 360, position: "relative", overflow: "hidden"
                  }}>
                    <div style={{ position: "absolute", top: 18, right: 22, fontSize: 9, color: colors.faint, letterSpacing: ".14em", textTransform: "uppercase", zIndex: 2 }}>
                      {label}
                    </div>
                    <div style={{ transform: "translateY(36px)" }}>
                      <PhoneFrame scale={.78}>
                        <Screen accent={accent} />
                      </PhoneFrame>
                    </div>
                  </div>
                  <div style={{ padding: 32 }}>
                    <div style={{ fontSize: 12, color: accent, fontFamily: serif, fontStyle: "italic", marginBottom: 12 }}>— {it.tag}</div>
                    <h3 style={{ fontSize: 24, fontWeight: 400, letterSpacing: "-.02em", margin: 0, fontFamily: serif }}>{it.title}</h3>
                    <p style={{ fontSize: 14, color: colors.text2, lineHeight: 1.6, marginTop: 12, margin: "12px 0 0" }}>{it.desc}</p>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* ─── Why (kept editorial, text only) ─── */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow centered>{t.why.eyebrow}</Eyebrow>
            <h2 style={{ fontSize: 56, letterSpacing: "-.035em", fontWeight: 400, margin: 0, fontFamily: serif, lineHeight: 1 }}>
              <span style={{ fontStyle: "italic" }}>{t.why.title}</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: colors.line, border: `1px solid ${colors.line}`, borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: 32, background: colors.bg, opacity: .85 }}>
              <div style={{ fontSize: 11, color: "#d77a7a", textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 14 }}>— {t.why.problem.label}</div>
              <p style={{ fontSize: 15, color: colors.dim, lineHeight: 1.65, margin: 0, fontFamily: serif }}>{t.why.problem.text}</p>
            </div>
            <div style={{ padding: 32, background: colors.paper }}>
              <div style={{ fontSize: 11, color: accent, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 14 }}>— {t.why.solution.label}</div>
              <p style={{ fontSize: 15, color: colors.text, lineHeight: 1.65, margin: 0, fontFamily: serif }}>{t.why.solution.text}</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: colors.line, border: `1px solid ${colors.line}`, borderRadius: 16, marginTop: 16, overflow: "hidden" }}>
            {t.why.stats.map((s, i) =>
            <div key={i} style={{ background: colors.bg, padding: "32px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 44, fontFamily: serif, fontStyle: "italic", color: accent, letterSpacing: "-.02em", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: colors.dim, marginTop: 10, textTransform: "uppercase", letterSpacing: ".12em" }}>{s.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Target Groups (with phones) ─── */}
      <section style={{ padding: "100px 40px", background: colors.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Eyebrow centered>{t.groups.eyebrow}</Eyebrow>
            <h2 style={{ fontSize: 56, letterSpacing: "-.035em", fontWeight: 400, margin: 0, fontFamily: serif, lineHeight: 1 }}>
              {t.groups.title.split(".")[0]}. <span style={{ fontStyle: "italic" }}>{t.groups.title.split(".")[1].trim()}.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {t.groups.cards.map((card, i) => {
              const c = card.accent === "teal" ? accent : "#c9a587";
              const reverse = i % 2 === 1;
              // Phone content per group
              const phones = i === 0 ?
              [<ScreenPipeline accent={accent} key="p" />, <ScreenJobDetail accent={accent} key="d" />] :
              [<ScreenResultImage accent={accent} key="r" />, <ScreenStudentResult accent={accent} key="s" />];
              return (
                <div key={i} style={{
                  border: `1px solid ${colors.line}`, borderRadius: 24, overflow: "hidden",
                  background: colors.bg2 || colors.bg,
                  display: "grid",
                  gridTemplateColumns: reverse ? "1.1fr 1fr" : "1fr 1.1fr",
                  alignItems: "stretch", minHeight: 480
                }}>
                  {/* Phone column */}
                  <div style={{
                    background: `radial-gradient(ellipse at center, ${c}14, transparent 70%)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: 40, gap: 16, position: "relative",
                    gridColumn: reverse ? 2 : 1, gridRow: 1
                  }}>
                    <div style={{ transform: "rotate(-4deg) translateY(12px)", opacity: .8 }}>
                      <PhoneFrame scale={.7}>{phones[0]}</PhoneFrame>
                    </div>
                    <div style={{ transform: "rotate(3deg) translateY(-12px)", zIndex: 2 }}>
                      <PhoneFrame scale={.78}>{phones[1]}</PhoneFrame>
                    </div>
                  </div>
                  {/* Content column */}
                  <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center", gridColumn: reverse ? 1 : 2, gridRow: 1 }}>
                    <h3 style={{ fontSize: 36, fontWeight: 400, margin: 0, fontFamily: serif, letterSpacing: "-.025em", lineHeight: 1.05 }}>{card.title}</h3>
                    <p style={{ fontSize: 13, color: colors.dim, margin: "8px 0 0", textTransform: "uppercase", letterSpacing: ".12em" }}>{card.sub}</p>
                    <div style={{ height: 1, background: colors.line, margin: "24px 0 0" }} />
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {card.points.map((p, j) =>
                      <li key={j} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: j < card.points.length - 1 ? `1px solid ${colors.line}` : "none", fontSize: 14, color: colors.text2, lineHeight: 1.5 }}>
                          <span style={{ color: c, fontFamily: serif, fontStyle: "italic", fontSize: 12, paddingTop: 3 }}>{String(j + 1).padStart(2, "0")}</span>
                          <span>{p}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* ─── How it works (with screens per step) ─── */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Eyebrow centered>{t.how.eyebrow}</Eyebrow>
            <h2 style={{ fontSize: 52, letterSpacing: "-.035em", fontWeight: 400, margin: 0, fontFamily: serif, lineHeight: 1 }}>
              <span style={{ fontStyle: "italic" }}>{t.how.title}</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {t.how.steps.map((step, i) => {
              const Screen = stepScreens[i];
              return (
                <div key={i} style={{
                  border: `1px solid ${colors.line}`, borderRadius: 20, background: colors.paper,
                  overflow: "hidden", display: "flex", flexDirection: "column"
                }}>
                  <div style={{
                    background: `radial-gradient(ellipse at top, ${accent}14, transparent 70%), linear-gradient(180deg, #221f1b, ${colors.paper})`,
                    padding: "28px 24px 0", display: "flex", justifyContent: "center", minHeight: 360,
                    position: "relative"
                  }}>
                    <div style={{ transform: "translateY(28px)" }}>
                      <PhoneFrame scale={.78}><Screen accent={accent} /></PhoneFrame>
                    </div>
                  </div>
                  <div style={{ padding: 28, borderTop: `1px solid ${colors.line}`, background: colors.paper }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
                      <span style={{ fontSize: 44, fontFamily: serif, fontStyle: "italic", color: accent, lineHeight: .9 }}>{i + 1}.</span>
                      <span style={{ fontSize: 10, color: colors.faint, textTransform: "uppercase", letterSpacing: ".14em" }}>Schritt</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 400, margin: 0, letterSpacing: "-.01em", fontFamily: serif }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: colors.text2, lineHeight: 1.6, marginTop: 10, margin: "10px 0 0" }}>{step.desc}</p>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* ─── Waitlist (Exclusive Early Access) ─── */}
      <section style={{
        padding: "120px 40px", background: colors.paper,
        position: "relative", overflow: "hidden",
        borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}`
      }}>
        {/* Decorative scarcity grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: .4,
          backgroundImage: `radial-gradient(${colors.line} 1px, transparent 1px)`,
          backgroundSize: "32px 32px", pointerEvents: "none"
        }} />
        <div style={{ position: "absolute", top: -150, right: -150, width: 500, height: 500, background: `radial-gradient(circle, ${accent}1f, transparent 60%)`, pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 60, alignItems: "center" }}>
          <div>
            <style>{`@keyframes ping { 75%, 100% { transform: scale(2.2); opacity: 0; } } @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } } @keyframes pulse-count { 0% { transform: scale(1); } 50% { transform: scale(1.06); } 100% { transform: scale(1); } }`}</style>

            <h2 style={{ fontSize: 72, lineHeight: .98, letterSpacing: "-.04em", fontWeight: 400, margin: 0, fontFamily: serif }}>
              {t.waitlist.title[0]}<br />
              <span style={{ fontStyle: "italic", color: accent }}>{t.waitlist.title[1]}</span>
            </h2>
            <p style={{ fontSize: 17, color: colors.text2, lineHeight: 1.55, maxWidth: 480, marginTop: 24, fontFamily: serif, fontStyle: "italic" }}>{t.waitlist.sub}</p>

            {/* Form */}
            <div style={{
              marginTop: 36, padding: 6, borderRadius: 99,
              border: `1px solid ${submitted ? accent + "88" : colors.lineHi}`, background: colors.bg,
              display: "flex", gap: 6, alignItems: "center", maxWidth: 480,
              animation: shake ? "shake .4s ease" : "none",
              transition: "border-color .2s"
            }}>
              <input
                type="email"
                placeholder={t.waitlist.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {if (e.key === "Enter") handleSubmit();}}
                disabled={submitted}
                style={{
                  flex: 1, padding: "12px 18px", background: "transparent",
                  border: 0, outline: "none", color: colors.text,
                  fontSize: 14, fontFamily: sans
                }} />
              
              <button
                onClick={handleSubmit}
                disabled={submitted}
                style={{
                  background: accent, color: colors.bg, padding: "12px 22px",
                  borderRadius: 99, border: 0, fontSize: 13, fontWeight: 600, fontFamily: sans,
                  whiteSpace: "nowrap", cursor: submitted ? "default" : "pointer",
                  opacity: submitted ? .65 : 1
                }}>
                {submitted ?
                lang === "en" ? "Confirmed ✓" : "Eingetragen ✓" :
                `${t.waitlist.submit} →`}
              </button>
            </div>

            {submitted &&
            <p style={{ fontSize: 12, color: accent, marginTop: 10, maxWidth: 480, display: "flex", alignItems: "center", gap: 6 }}>
                <span>✦</span>
                {lang === "en" ?
              `You're on the list — spot #${formatCount(waitlistCount)}.` :
              `Du bist dabei — Platz ${formatCount(waitlistCount)}.`}
              </p>
            }

            {/* Stats row */}
            <div style={{ marginTop: 36, paddingTop: 28, borderTop: `1px solid ${colors.line}`, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 480 }}>
              {t.waitlist.stats.map((s, i) => {
                // index 1 is the live waitlist count
                const isLive = i === 1;
                const num = isLive ? formatCount(waitlistCount) : s.num;
                return (
                  <div key={i}>
                    <div style={{ fontSize: 28, fontFamily: serif, fontStyle: "italic", color: i === 0 ? accent : colors.text, lineHeight: 1, letterSpacing: "-.02em", display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span key={num} style={{ display: "inline-block", animation: isLive && submitted ? "pulse-count .4s ease" : "none" }}>{num}</span>
                      {isLive &&
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, fontFamily: sans, fontStyle: "normal", color: accent, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 600 }}>
                          <span style={{ position: "relative", display: "inline-flex", width: 6, height: 6 }}>
                            <span style={{ position: "absolute", inset: 0, borderRadius: 99, background: accent, opacity: .5, animation: "ping 2s cubic-bezier(0,0,.2,1) infinite" }} />
                            <span style={{ position: "relative", width: 6, height: 6, borderRadius: 99, background: accent }} />
                          </span>
                          Live
                        </span>
                      }
                    </div>
                    <div style={{ fontSize: 10, color: colors.dim, marginTop: 6, textTransform: "uppercase", letterSpacing: ".12em" }}>{s.label}</div>
                  </div>);

              })}
            </div>
          </div>

          {/* Right column — phone + perks */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
            <PhoneFrame scale={.88}>
              <ScreenWaitlistConfirm accent={accent} t={t} count={waitlistCount} lang={lang} />
            </PhoneFrame>
            <div style={{
              border: `1px solid ${colors.line}`, borderRadius: 16,
              padding: 20, background: colors.bg, maxWidth: 340, width: "100%"
            }}>
              <div style={{ fontSize: 10, color: accent, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 16, height: 1, background: accent }} />{t.waitlist.perks.label}
              </div>
              {t.waitlist.perks.items.map((item, i) =>
              <div key={i} style={{
                display: "flex", gap: 12, fontSize: 12, color: colors.text2, lineHeight: 1.5,
                padding: "8px 0",
                borderBottom: i < t.waitlist.perks.items.length - 1 && i !== 0 ? `1px solid ${colors.line}` : "none"
              }}>
                  <span style={{ color: accent, fontSize: 10, paddingTop: 2 }}>✦</span>
                  <span>{item}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: "100px 40px", background: colors.paper }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60 }}>
            <div>
              <Eyebrow>{t.faq.eyebrow}</Eyebrow>
              <h2 style={{ fontSize: 44, letterSpacing: "-.03em", fontWeight: 400, margin: 0, fontFamily: serif, lineHeight: 1, position: "sticky", top: 100 }}>
                <span style={{ fontStyle: "italic" }}>{t.faq.title}</span>
              </h2>
            </div>
            <div>
              {t.faq.items.map((it, i) =>
              <div key={i} style={{ borderTop: `1px solid ${colors.line}`, padding: "24px 0", borderBottom: i === t.faq.items.length - 1 ? `1px solid ${colors.line}` : "none" }}>
                  <div style={{ fontSize: 11, color: accent, fontFamily: serif, fontStyle: "italic", marginBottom: 8 }}>Q. {String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 10, fontFamily: serif, letterSpacing: "-.01em", color: colors.text }}>{it.q}</div>
                  <p style={{ fontSize: 14, color: colors.text2, lineHeight: 1.65, margin: 0 }}>{it.a}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "110px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${accent}1f, transparent 60%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 60, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 64, letterSpacing: "-.035em", fontWeight: 400, margin: 0, lineHeight: 1, fontFamily: serif }}>
              <span style={{ fontStyle: "italic", color: accent }}>{t.cta.title}</span>
            </h2>
            <p style={{ fontSize: 18, color: colors.text2, marginTop: 24, marginBottom: 40, fontFamily: serif, fontStyle: "italic" }}>{t.cta.sub}</p>
            <button style={{ background: accent, color: colors.bg, padding: "16px 30px", borderRadius: 99, border: 0, fontSize: 15, fontWeight: 600, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>􀎫</span> {t.cta.btn}
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ transform: "rotate(-3deg)" }}>
              <PhoneFrame scale={.72}><ScreenCV accent={accent} /></PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{ background: "#15130f", padding: "60px 40px 32px", borderTop: `1px solid ${colors.line}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <img src="assets/appi-logo.png" style={{ width: 28, height: 28, borderRadius: 6 }} />
                <span style={{ fontSize: 16, fontWeight: 600, fontFamily: serif, fontStyle: "italic" }}>ApplyOS</span>
              </div>
              <p style={{ fontSize: 13, color: colors.text2, lineHeight: 1.6, maxWidth: 320, margin: 0 }}>{t.footer.tagline}</p>
            </div>
            <div>
              <div style={{ fontSize: 11, color: colors.faint, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 14 }}>{t.footer.product}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: colors.text2 }}>
                <a>{t.footer.links.features}</a><a>{t.footer.links.how}</a><a>{t.footer.links.faq}</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: colors.faint, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 14 }}>{t.footer.legal}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: colors.text2 }}>
                <a>{t.footer.links.privacy}</a><a>{t.footer.links.terms}</a><a>{t.footer.links.imprint}</a><a>{t.footer.links.cookies}</a>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: 24, borderTop: `1px solid ${colors.line}`, fontSize: 12, color: colors.faint }}>{t.footer.copyright}</div>
        </div>
      </footer>
    </div>);

}

window.VariantE = VariantE;