import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  scale?: number;
  theme?: "light" | "dark";
  className?: string;
};

export function PhoneFrame({ children, scale = 1, theme = "light", className }: Props) {
  const W = 264;
  const H = 552;
  return (
    <div
      style={{ width: W * scale, height: H * scale, transformOrigin: "top center" }}
      className={cn("shrink-0", className)}
    >
      <div
        style={{
          width: W,
          height: H,
          transform: scale !== 1 ? `scale(${scale})` : undefined,
        }}
        className="relative rounded-[42px] p-[7px] origin-top-left bg-gradient-to-b from-[#2a2823] to-[#15130f] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        {/* Notch */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[84px] h-[22px] rounded-[20px] bg-black z-[5]" />
        {/* Screen */}
        <div
          className={cn(
            "w-full h-full rounded-[36px] overflow-hidden relative font-sans tracking-[-0.005em] pt-10 px-3.5 pb-3.5",
            theme === "light" ? "bg-app-bg text-app-text" : "bg-e-bg text-e-text",
          )}
        >
          {/* Status bar */}
          <div className="flex justify-between text-[10px] opacity-55 mb-3 tabular-nums">
            <span>13:38</span>
            <span>●●●●●  100%</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
