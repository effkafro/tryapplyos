import { OwlBubble } from "./helpers/owl-bubble";
import { STUDENT_MATCHES } from "./data";

export function ScreenStudentResult() {
  return (
    <>
      <OwlBubble size="sm">Hier sind die Berufe, die zu dir passen.</OwlBubble>
      <div className="mt-4 text-[10px] text-app-teal uppercase tracking-[0.12em] font-semibold">
        Dein Ergebnis
      </div>
      <div className="font-serif text-lg leading-[1.15] font-normal mt-1.5 mb-1 text-app-text">
        Das passt zu <span className="italic text-app-teal">dir</span>.
      </div>
      <div className="text-[10px] text-app-dim mb-3.5">Basierend auf deinem Profil</div>
      <div className="flex flex-col gap-2">
        {STUDENT_MATCHES.map((m, i) => (
          <div
            key={i}
            className={`rounded-xl p-3 bg-app-card ${
              i === 0
                ? "shadow-[0_0_0_1.5px_var(--color-app-teal)]"
                : "shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
            }`}
          >
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-[11.5px] font-bold font-serif text-app-text">
                {m.title}
              </span>
              <div className="flex items-baseline">
                <span className="text-[13px] font-bold text-app-teal tabular-nums">
                  {m.score}
                </span>
                <span className="text-[8px] text-app-dim">%</span>
              </div>
            </div>
            <div className="text-[9px] text-app-dim mb-2">{m.sub}</div>
            <div className="h-[3px] bg-app-divider rounded overflow-hidden">
              <div
                style={{ width: `${m.score}%` }}
                className="h-full bg-app-teal"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
