import Image from "next/image";

export function MigdalLogo() {
  return (
    <div className="relative h-[43.176px] w-[122.93px] shrink-0">
      <Image
        src="/images/logo.svg"
        alt="מגדל"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
