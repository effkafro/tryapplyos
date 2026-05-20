import { OwlBubble } from "./helpers/owl-bubble";
import { ScoreRing } from "./helpers/score-ring";
import { BottomTabs } from "./helpers/bottom-tabs";
import { JOBS } from "./data";

type Props = {
  activeStage?: "entdeckt" | "beworben" | "interview" | "feedback";
};

export function ScreenPipeline({ activeStage = "beworben" }: Props) {
  const stages = [
    { id: "entdeckt", count: 2, label: "Entdeckt", icon: "✦", bgClass: "bg-app-teal-soft", colorClass: "text-app-teal", borderClass: "border-app-teal" },
    { id: "beworben", count: 2, label: "Beworben", icon: "✈", bgClass: "bg-app-blue-soft", colorClass: "text-app-blue", borderClass: "border-app-blue" },
    { id: "interview", count: 1, label: "Interview", icon: "👥", bgClass: "bg-app-purple-soft", colorClass: "text-app-purple", borderClass: "border-app-purple" },
    { id: "feedback", count: 0, label: "Feedback", icon: "✉", bgClass: "bg-app-green-soft", colorClass: "text-app-green", borderClass: "border-app-green" },
  ] as const;
  const pipelineJobs = JOBS.slice(0, 2);

  return (
    <>
      <OwlBubble size="sm">2 neue Bewerbungen warten</OwlBubble>

      <div className="grid grid-cols-4 gap-[5px] mt-3.5 mb-3.5">
        {stages.map((s) => {
          const isActive = s.id === activeStage;
          return (
            <div key={s.id} className="text-center">
              <div
                className={`${s.bgClass} rounded-[11px] aspect-square flex flex-col items-center justify-center gap-0.5 border-2 ${
                  isActive ? s.borderClass : "border-transparent"
                }`}
              >
                <span className={`text-sm ${s.colorClass} leading-none`}>{s.icon}</span>
                <span className="text-base font-bold text-app-text leading-none">
                  {s.count}
                </span>
              </div>
              <div
                className={`text-[8.5px] mt-1 ${
                  isActive ? `${s.colorClass} font-semibold` : "text-app-text-2"
                }`}
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        {pipelineJobs.map((job, i) => (
          <div
            key={i}
            className="bg-app-card rounded-xl p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.03)]"
          >
            <div className="flex justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold leading-tight text-app-text">
                  {job.title}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[9px] text-app-dim">🏢</span>
                  <span className="text-[8.5px] text-app-dim truncate">{job.company}</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[9px] text-app-dim">📍</span>
                  <span className="text-[8.5px] text-app-dim flex-1">
                    {job.location.split(",")[0]}
                  </span>
                  <span className="text-[8.5px] text-app-faint">{job.date}</span>
                </div>
              </div>
              <ScoreRing score={job.score} size={34} fontSize={10} />
            </div>
            <div className="mt-2 px-2.5 py-1.5 bg-app-teal-soft rounded-lg flex justify-between items-center">
              <span className="text-[9px] text-app-teal font-medium flex items-center gap-1">
                <span>✦</span>Interview-Fragen vorbereiten
              </span>
              <span className="text-[10px] text-app-teal">›</span>
            </div>
          </div>
        ))}
      </div>

      <BottomTabs active="pipeline" pipelineBadge={2} />
    </>
  );
}
