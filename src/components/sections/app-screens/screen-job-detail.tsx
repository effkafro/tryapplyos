import { ScoreRing } from "./helpers/score-ring";
import { JOBS } from "./data";

type FitRow = {
  label: string;
  score: number;
  max: number;
  sub: string;
  good: boolean;
};

export function ScreenJobDetail() {
  const job = JOBS[2];
  const fit: FitRow[] = [
    { label: "Standort", score: 12, max: 12, sub: "Düsseldorf, NRW — passt zu deiner Suche", good: true },
    { label: "Wunschberuf", score: 25, max: 25, sub: '"Marketing" im Titel', good: true },
    { label: "Erfahrungslevel", score: 9, max: 12, sub: "Leicht überqualifiziert", good: false },
    { label: "Aktualität", score: 1, max: 3, sub: "Vor 1–2 Wochen", good: false },
  ];

  return (
    <>
      <div className="flex justify-center mb-2">
        <div className="w-8 h-1 rounded bg-[#d4d4d4]" />
      </div>
      <div className="flex justify-end mb-1.5">
        <span className="w-5 h-5 rounded-full bg-[#ececec] flex items-center justify-center text-[10px] text-app-text-2">
          ×
        </span>
      </div>

      <div className="flex justify-between items-start gap-2.5 mb-2.5">
        <div className="flex-1 min-w-0">
          <div className="text-[9px] text-app-dim">{job.company}</div>
          <div className="text-[13px] font-bold leading-tight text-app-text mt-0.5">
            {job.title}
          </div>
        </div>
        <ScoreRing score={job.score} size={44} fontSize={12} />
      </div>

      <div className="inline-flex items-center gap-1 px-2.5 py-[3px] bg-[#f1efe7] rounded-full text-[8.5px] text-app-text-2 mb-3">
        <span>👥</span> Vermittler
      </div>

      <div className="flex items-center gap-1.5 text-[11px] font-bold text-app-text mb-2">
        <span className="text-xs">📋</span> Auf einen Blick
      </div>
      <div className="bg-app-card rounded-xl mb-2.5 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
        {[
          ["📍", "Standort", "Düsseldorf, NRW"],
          ["📅", "Start", "Mai 2026"],
          ["👥", "Vermittler", "Ja"],
        ].map(([icon, k, v], i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-2.5 py-2 text-[9.5px] ${
              i < 2 ? "border-b border-app-divider" : ""
            }`}
          >
            <span className="flex items-center gap-1.5 text-app-text-2">
              <span className="text-app-teal">{icon}</span>
              {k}
            </span>
            <span className="text-app-text font-semibold">{v}</span>
          </div>
        ))}
      </div>

      <button className="w-full px-3 py-2.5 rounded-[10px] bg-app-teal-soft text-app-teal border-0 text-[10.5px] font-semibold flex items-center justify-center gap-1.5">
        <span>🧭</span> Zur Originalanzeige
      </button>

      <div className="flex justify-between items-center py-2.5 text-[10px] text-app-teal font-semibold">
        <span>Vollständige Beschreibung</span>
        <span>›</span>
      </div>

      <div className="border-t border-app-divider pt-3">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-app-text mb-2">
          <span>💼</span> Job-Fit im Detail
        </div>
        <div className="text-[9px] text-app-teal mb-2.5 flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-app-teal text-white text-[8px] font-bold flex items-center justify-center">
            ✓
          </span>
          Stärken: Standort · Wunschberuf
        </div>
        {fit.map((f, i) => {
          const colorClass = f.good ? "bg-app-teal" : "bg-app-orange";
          const barColorClass = f.good ? "bg-app-teal" : "bg-app-orange";
          return (
            <div key={i} className="mb-2">
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-3.5 h-3.5 rounded-full ${colorClass} text-white text-[9px] font-bold shrink-0 flex items-center justify-center`}
                >
                  {f.good ? "✓" : "−"}
                </span>
                <span className="text-[10px] text-app-text font-medium shrink-0">
                  {f.label}
                </span>
                <div className="flex-1 h-1 bg-app-divider rounded overflow-hidden ml-1">
                  <div
                    style={{ width: `${(f.score / f.max) * 100}%` }}
                    className={`h-full ${barColorClass} rounded`}
                  />
                </div>
                <span className="text-[8.5px] text-app-dim tabular-nums w-[26px] text-right">
                  {f.score}/{f.max}
                </span>
              </div>
              <div className="text-[8.5px] text-app-faint ml-5 mt-0.5">{f.sub}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
