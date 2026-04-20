import { cn } from "@/lib/utils";

type Props = {
  label: string;
  title: string;
  align?: "center" | "left";
  labelClassName?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  align = "center",
  labelClassName,
  className,
}: Props) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-widest text-brand-teal",
          labelClassName,
        )}
      >
        {label}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}
