import Image from "next/image";

export function SummaryCard() {
  return (
    <div className="flex w-full flex-col items-center gap-[8px]">
      {/* Comment text */}
      <p className="text-center text-[16px] leading-[24px] text-[#3b3b4d]">
        קופת קשת הוא מוצר חיסכון מעולה עם יתרונות רבים:
      </p>

      {/* Summary box with background image */}
      <div className="relative flex h-[257px] w-[498px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#d4e5f5] px-[93px] py-[24px] shadow-[0px_4px_162.2px_0px_rgba(0,0,0,0.25)]">
        {/* Background Image - Summary back.png (includes Chest Box) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Summary back.png"
            alt="Summary Background with Treasure Chest"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content - Overlay on background */}
        <div className="relative z-10 flex flex-col items-center gap-[8px]">
          {/* Title */}
          <p className="text-right text-[24px] text-[#3c65e3]">
            <span className="leading-none">עד היום </span>
            <span className="leading-none underline decoration-solid">חסכת</span>
            <span className="leading-none"> בקופות קשת שלך</span>
          </p>

          {/* Main amount */}
          <div className="text-center">
            <p className="text-[52px] font-bold leading-[50px] text-[var(--color-primary)]">
              220,000 <span className="text-[32px]">₪</span>
            </p>
          </div>

          {/* Profit info */}
          <div className="flex flex-col items-center text-center text-[#3b3b4d]">
            <p className="text-[24px] leading-[24px]">ב-3 שנים האחרונות הרווחת:</p>
            <p className="text-[32px] leading-[1.3]">
              20,000<span className="text-[16px] leading-[24px]">₪</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
