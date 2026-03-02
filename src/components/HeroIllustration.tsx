import Image from "next/image";

export function HeroIllustration() {
  return (
    <div className="relative h-[315px] md:h-[315px] h-[161px] w-[552px] md:w-[552px] w-[282px]">
      <Image
        src="/images/main-image.svg"
        alt="קופת פדיון קשת - איור עם מטבעות"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
