"use client";

interface CalculateLoanButtonProps {
  onClick?: () => void;
  className?: string;
}

/** כפתור חשב – עיגול מושלם, לפי Migdal Loan Simulator (Figma) */
export function CalculateLoanButton({ onClick, className = "" }: CalculateLoanButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex size-[88px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-full p-0",
        "bg-[#020140]",
        "shadow-[0px_4px_4px_0px_rgba(59,104,255,0.06),0px_10px_30px_0px_rgba(60,101,227,0.1)]",
        "transition-opacity hover:opacity-90 active:opacity-80",
        "md:size-[100px] md:gap-1",
        className,
      ].join(" ")}
      aria-label="חשב הלוואה"
    >
      <span className="flex size-[26px] items-center justify-center md:size-[30px]" aria-hidden>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-[22px] -rotate-[18deg] md:size-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#90E894" strokeWidth="1.2" />
          <rect x="6.5" y="5.5" width="5" height="4" rx="0.5" fill="#A2EB9A" />
          <rect x="6.5" y="11" width="5" height="4" rx="0.5" fill="#020140" />
          <rect x="6.5" y="16" width="5" height="2.5" rx="0.5" fill="#020140" />
          <rect x="12.5" y="11" width="5" height="4" rx="0.5" fill="#020140" />
          <rect x="12.5" y="16" width="5" height="2.5" rx="0.5" fill="#020140" />
          <rect x="12.5" y="5.5" width="5" height="4" rx="0.5" fill="#020140" />
        </svg>
      </span>
      <span className="text-center text-[15px] font-normal leading-none text-[#a2eb9a] md:text-[18px]">
        חשב
      </span>
    </button>
  );
}
