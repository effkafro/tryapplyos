type Props = {
  score: number;
  size?: number;
  fontSize?: number;
};

export function ScoreRing({ score, size = 40, fontSize = 11 }: Props) {
  const inset = Math.max(3, Math.round(size * 0.08));
  const percentFontSize = Math.max(6, Math.round(fontSize * 0.55));
  return (
    <div
      style={{
        width: size,
        height: size,
        background: `conic-gradient(var(--color-app-orange) ${score}%, var(--color-app-orange-soft) 0)`,
      }}
      className="rounded-full shrink-0 flex items-center justify-center relative"
    >
      <div
        style={{ inset }}
        className="absolute rounded-full bg-app-card flex flex-col items-center justify-center"
      >
        <span
          style={{ fontSize }}
          className="font-bold text-app-text leading-none"
        >
          {score}
        </span>
        <span
          style={{ fontSize: percentFontSize }}
          className="text-app-dim"
        >
          %
        </span>
      </div>
    </div>
  );
}
