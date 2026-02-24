import Image from "next/image";

export function FooterIllustration() {
  return (
    <div className="relative h-[364px] w-[302px]">
      <Image
        src="/images/background-illustration.svg"
        alt="איור מחסן עם מדפים ומלגזה"
        fill
        className="object-contain"
      />
    </div>
  );
}
