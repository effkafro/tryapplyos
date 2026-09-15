import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

// Full-bleed App-Screenshot — füllt den PhoneFrame komplett (inkl. Statusleisten-Bereich)
export function ScreenImage({ src, alt }: Props) {
  return (
    <div className="absolute inset-0 rounded-[36px] overflow-hidden bg-app-bg">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="264px"
        className="object-cover object-top"
        priority={false}
      />
    </div>
  );
}
