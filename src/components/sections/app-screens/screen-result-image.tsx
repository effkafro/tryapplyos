import Image from "next/image";

// Full-bleed app screenshot — wird im PhoneFrame mit absoluter Positionierung gerendert
export function ScreenResultImage() {
  return (
    <div className="absolute inset-0 rounded-[36px] overflow-hidden bg-app-bg">
      <Image
        src="/app-result.png"
        alt="Troubleshooter Ergebnis"
        fill
        sizes="264px"
        className="object-cover object-top"
        priority={false}
      />
    </div>
  );
}
