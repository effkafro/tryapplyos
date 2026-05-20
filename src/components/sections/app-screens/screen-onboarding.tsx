import { OwlBubble } from "./helpers/owl-bubble";

export function ScreenOnboarding() {
  return (
    <>
      <OwlBubble>Was ist dir wichtiger?</OwlBubble>

      <div className="mt-6 bg-app-card rounded-[18px] shadow-[0_4px_16px_-8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] flex flex-col h-[360px]">
        <div className="flex-1 flex items-center justify-center text-lg font-bold text-app-text tracking-tight">
          Flexible Zeiten
        </div>
        <div className="h-px bg-app-divider mx-6" />
        <div className="flex-1 flex items-center justify-center text-lg font-bold text-app-text tracking-tight">
          Feste Strukturen
        </div>
      </div>

      <div className="mt-4 px-1">
        <div className="h-[3px] bg-app-divider rounded overflow-hidden">
          <div className="w-1/2 h-full bg-app-teal" />
        </div>
        <div className="text-center text-[10px] text-app-dim mt-2 tabular-nums">5 / 10</div>
      </div>
    </>
  );
}
