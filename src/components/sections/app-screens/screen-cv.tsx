type Experience = {
  role: string;
  company: string;
  years: string;
};

export function ScreenCV() {
  const experience: Experience[] = [
    { role: "Marketing Lead", company: "Brennstoff Mediengruppe", years: "2022 — Heute" },
    { role: "Junior Marketing Manager", company: "Vellena SE", years: "2019 — 2022" },
  ];
  const skills = ["B2B-Marketing", "Kampagnen", "SEO", "Branding", "HubSpot"];

  return (
    <>
      <div className="text-[10px] text-app-text-2 mb-3.5 flex justify-between">
        <span>Profil</span>
        <span className="text-app-teal font-semibold">Bearbeiten</span>
      </div>

      <div className="text-center mb-4">
        <div className="w-[60px] h-[60px] rounded-full mx-auto mb-2.5 bg-gradient-to-br from-app-teal to-[#4cb89e] flex items-center justify-center text-white text-[22px] font-bold">
          AK
        </div>
        <div className="text-sm font-serif font-medium text-app-text">Anna Köhler</div>
        <div className="text-[10px] text-app-dim mt-0.5">
          Marketing Manager · 6 Jahre Erfahrung
        </div>
      </div>

      <div className="border-t border-app-divider pt-3.5">
        <div className="text-[9px] text-app-dim uppercase tracking-[0.1em] mb-2.5 font-semibold">
          Erfahrung
        </div>
        {experience.map((e, i) => (
          <div
            key={i}
            className={`flex justify-between gap-2 pb-2.5 mb-2.5 ${
              i === 0 ? "border-b border-app-divider" : ""
            }`}
          >
            <div>
              <div className="text-[11px] font-semibold text-app-text">{e.role}</div>
              <div className="text-[9px] text-app-dim mt-px">{e.company}</div>
            </div>
            <span className="text-[9px] text-app-faint whitespace-nowrap">{e.years}</span>
          </div>
        ))}
        <div className="text-[9px] text-app-dim uppercase tracking-[0.1em] mt-3.5 mb-2 font-semibold">
          Skills
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((s) => (
            <span
              key={s}
              className="text-[9px] px-2 py-1 rounded-full bg-app-teal-soft text-app-teal font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
