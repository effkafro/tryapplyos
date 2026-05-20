import Image from "next/image";

type Props = {
  children: React.ReactNode;
  size?: "md" | "sm";
};

export function OwlBubble({ children, size = "md" }: Props) {
  const avatar = size === "sm" ? 24 : 30;
  const padY = size === "sm" ? "py-[7px]" : "py-[9px]";
  const fontSize = size === "sm" ? "text-[10px]" : "text-[11px]";
  return (
    <div className="flex items-start gap-2">
      <div
        style={{ width: avatar, height: avatar }}
        className="rounded-full shrink-0 bg-app-purple-soft p-[3px]"
      >
        <Image
          src="/appi-logo.png"
          alt="Appi"
          width={avatar}
          height={avatar}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className={`bg-app-owl-bubble rounded-[14px] px-3 ${padY} ${fontSize} leading-[1.35] text-app-text flex-1`}
      >
        {children}
      </div>
    </div>
  );
}
