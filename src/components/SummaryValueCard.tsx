"use client";

import Image from "next/image";

/** "monthly" = default (Piles of money) | "total" = סכום הלוואה כולל בלבד (Money Growth) */
export type SummaryValueCardVariant = "monthly" | "total";

interface SummaryValueCardProps {
  label: string;
  value: number;
  variant?: SummaryValueCardVariant;
  className?: string;
}

const VARIANT_IMAGE: Record<SummaryValueCardVariant, string> = {
  monthly: "/images/Pilesofmoney.svg",
  total: "/images/Money Growth.svg",
};

const VARIANT_IMAGE_SIZE: Record<
  SummaryValueCardVariant,
  { width: number; height: number }
> = {
  monthly: { width: 40, height: 68 },
  total: { width: 76, height: 67 },
};

export function SummaryValueCard({
  label,
  value,
  variant = "monthly",
  className = "",
}: SummaryValueCardProps) {
  const formatted = new Intl.NumberFormat("he-IL").format(value);
  return (
    <div
      className={`relative flex min-h-[78px] min-w-0 flex-col items-center justify-center overflow-visible rounded-[8px] border border-[#d4e5f5] bg-[#e3eef8] px-2 py-3 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)] max-md:max-w-full md:h-[102px] md:px-8 md:py-6 ${className}`}
      dir="rtl"
    >
      <div className="flex min-h-[48px] w-full flex-col items-center justify-center gap-1 ps-2 pe-1 md:h-[54px] md:gap-2 md:ps-5">
        <p className="flex min-h-[2.25rem] w-full items-center justify-center text-center text-[11px] font-normal leading-[1.15] text-[#3c65e3] md:h-[32px] md:min-h-0 md:text-[24px] md:leading-normal">
          {label}
        </p>
        <div className="flex h-auto min-h-[14px] items-center justify-center gap-0.5">
          <span className="text-[12px] font-bold text-[var(--color-primary)] md:text-[15px]">₪</span>
          <span className="text-[17px] font-bold leading-none text-[var(--color-primary)] md:text-[24px] md:leading-normal">
            {formatted}
          </span>
        </div>
      </div>
      <Image
        src={VARIANT_IMAGE[variant]}
        alt=""
        width={VARIANT_IMAGE_SIZE[variant].width}
        height={VARIANT_IMAGE_SIZE[variant].height}
        className={`absolute object-contain max-md:-right-1 max-md:top-[38px] max-md:h-[46px] max-md:w-auto md:-right-4 md:top-[44px] ${
          variant === "monthly" ? "max-md:max-w-[28px]" : "max-md:max-w-[52px]"
        }`}
        aria-hidden
      />
    </div>
  );
}
