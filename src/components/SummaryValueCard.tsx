"use client";

interface SummaryValueCardProps {
  label: string;
  value: number;
  className?: string;
}

export function SummaryValueCard({ label, value, className = "" }: SummaryValueCardProps) {
  const formatted = new Intl.NumberFormat("he-IL").format(value);
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-center text-[24px] font-bold text-[var(--color-primary-light)]">{label}</p>
      <div className="flex items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-4 py-2">
        <p className="flex items-baseline gap-0.5">
          <span className="text-[15px] font-bold text-[var(--color-accent-green)]">₪</span>
          <span className="text-[24px] font-bold text-[var(--color-accent-green)]">{formatted}</span>
        </p>
      </div>
    </div>
  );
}
