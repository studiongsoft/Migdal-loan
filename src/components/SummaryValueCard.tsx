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
      className={`relative flex h-[102px] shrink-0 flex-col items-center justify-center overflow-visible rounded-[8px] border border-[#d4e5f5] bg-[#e3eef8] px-5 py-6 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)] md:px-8 md:py-6 ${className}`}
      dir="rtl"
    >
      <div className="flex h-[54px] flex-col items-center justify-center gap-2 ps-5">
        <p className="flex h-[32px] items-center justify-center text-center text-[24px] font-normal leading-normal text-[#3c65e3]">{label}</p>
        <div className="flex h-[14px] items-center justify-center gap-0.5">
          <span className="text-[15px] font-bold text-[var(--color-primary)]">₪</span>
          <span className="text-[24px] font-bold leading-normal text-[var(--color-primary)]">{formatted}</span>
        </div>
      </div>
      <Image
        src={VARIANT_IMAGE[variant]}
        alt=""
        width={VARIANT_IMAGE_SIZE[variant].width}
        height={VARIANT_IMAGE_SIZE[variant].height}
        className="absolute -right-4 top-[44px] object-contain"
        aria-hidden
      />
    </div>
  );
}
