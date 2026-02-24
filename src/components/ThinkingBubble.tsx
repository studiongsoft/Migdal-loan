"use client";

/** בועית "חושב" עם 3 נקודות אנימטיביות */
export function ThinkingBubble() {
  return (
    <div className="flex w-full justify-start">
      <div
        className="flex w-fit items-center gap-[6px] rounded-tr-[0px] rounded-br-[27px] rounded-bl-[27px] rounded-tl-[27px] bg-[#EAF1FA] px-[24px] py-[16px]"
        dir="rtl"
      >
        <span className="animate-thinking-dot size-2 rounded-full bg-[var(--color-primary)]/60" />
        <span className="animate-thinking-dot size-2 rounded-full bg-[var(--color-primary)]/60" style={{ animationDelay: "0.2s" }} />
        <span className="animate-thinking-dot size-2 rounded-full bg-[var(--color-primary)]/60" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
}
