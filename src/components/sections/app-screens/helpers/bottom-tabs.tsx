type TabId = "profil" | "radar" | "pipeline" | "menu";

type Props = {
  active?: TabId;
  pipelineBadge?: number;
};

type ItemProps = {
  icon: string;
  label: string;
  id: TabId;
  active: TabId;
  badge?: number;
};

function Item({ icon, label, id, active, badge }: ItemProps) {
  const isActive = id === active;
  return (
    <div
      className={`flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-full relative ${
        isActive ? "bg-app-teal-soft" : ""
      }`}
    >
      <span
        className={`text-xs relative ${
          isActive ? "text-app-teal" : "text-app-text-2"
        }`}
      >
        {icon}
        {badge ? (
          <span className="absolute -top-1 -right-2 w-[11px] h-[11px] rounded-full bg-[#d44] text-white text-[7px] font-bold flex items-center justify-center">
            {badge}
          </span>
        ) : null}
      </span>
      <span
        className={`text-[8px] ${
          isActive ? "text-app-teal font-semibold" : "text-app-text-2"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function BottomTabs({ active = "pipeline", pipelineBadge = 0 }: Props) {
  return (
    <div className="absolute bottom-3 left-3.5 right-3.5 bg-app-card rounded-full p-1 shadow-[0_2px_14px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)] flex justify-around items-center">
      <Item icon="👤" label="Profil" id="profil" active={active} />
      <Item icon="📡" label="Radar" id="radar" active={active} />
      <Item icon="📋" label="Pipeline" id="pipeline" active={active} badge={pipelineBadge} />
      <Item icon="☰" label="Menü" id="menu" active={active} />
    </div>
  );
}
