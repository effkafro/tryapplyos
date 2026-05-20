import Image from "next/image";
import { OwlBubble } from "./helpers/owl-bubble";
import { ScoreRing } from "./helpers/score-ring";
import { BottomTabs } from "./helpers/bottom-tabs";
import { JOBS } from "./data";

export function ScreenRadar() {
  const job = JOBS[2];
  const actions = [
    { icon: "↶", bg: "bg-[#fef2e0]", color: "text-app-orange" },
    { icon: "✕", bg: "bg-[#fde4e4]", color: "text-[#d44]" },
    { icon: "✦", bg: "bg-app-blue-soft", color: "text-app-blue" },
    { icon: "✓", bg: "bg-app-teal-soft", color: "text-app-teal" },
  ];
  return (
    <>
      <OwlBubble>Deine 4 Tagesvorschläge — swipe durch und finde deinen Traumjob!</OwlBubble>

      <div className="mt-1.5 bg-app-card rounded-2xl p-3.5 shadow-[0_4px_16px_-8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]">
        <div className="inline-flex items-center gap-1 px-2.5 py-[3px] bg-[#f1efe7] rounded-full text-[8.5px] text-app-text-2 mb-2.5">
          <span>👥</span> Vermittler
        </div>

        <div className="flex justify-between items-start gap-2.5">
          <div className="flex-1 min-w-0">
            <div className="text-[9px] text-app-dim mb-0.5">{job.company}</div>
            <div className="text-xs font-bold leading-tight text-app-text">{job.title}</div>
          </div>
          <ScoreRing score={job.score} size={42} fontSize={12} />
        </div>

        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
          <span className="text-[9px] text-app-dim">{job.location}</span>
          <span className="text-[8.5px] px-2 py-[2px] rounded-full bg-app-purple-soft text-app-purple font-medium">
            Mittelstand
          </span>
        </div>

        <div className="mt-3 px-2.5 py-2 bg-app-owl-bubble rounded-xl flex gap-2">
          <div className="w-5 h-5 shrink-0 rounded-full bg-app-purple-soft p-0.5">
            <Image
              src="/appi-logo.png"
              alt=""
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[9.5px] leading-[1.4] text-app-text-2 italic m-0">
            Deine Organisationsstärke passt zur Koordinierung interner Prozesse.
          </p>
        </div>

        <div className="mt-3">
          <div className="text-[10px] text-app-teal font-semibold mb-1.5">
            Darüber hinaus passt…
          </div>
          <div className="p-2.5 bg-app-teal-soft rounded-[10px]">
            <div className="text-[10px] text-app-text mb-1.5 flex gap-[7px]">
              <span>📈</span>
              <span>Dein Erfahrungslevel passt</span>
            </div>
            <div className="text-[10px] text-app-text flex gap-[7px]">
              <span>💜</span>
              <span>Innovationsfreudig, Nachhaltigkeitsbew…</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-2.5 text-[9px] text-app-faint">
          Tippe für alle Details ›
        </div>
      </div>

      <div className="flex justify-center gap-2.5 mt-3.5">
        {actions.map((a, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full ${a.bg} ${a.color} flex items-center justify-center text-[13px] font-bold`}
          >
            {a.icon}
          </div>
        ))}
      </div>

      <BottomTabs active="radar" pipelineBadge={1} />
    </>
  );
}
