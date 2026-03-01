"use client";

import Image from "next/image";

interface ChatMessageProps {
  message: string;
  type?: "system" | "user";
  onEdit?: () => void;
}

export function ChatMessage({ message, type = "system", onEdit }: ChatMessageProps) {
  const isUser = type === "user";

  // מערכת מימין, משתמש משמאל
  const align = isUser ? "justify-end" : "justify-start";

  // זנב עדין (פינה אחת 0) - משתמש משמאל (זנב ימין), מערכת מימין (זנב שמאל)
  const bubbleRadius = isUser
    ? "rounded-tl-[0px] rounded-br-[27px] rounded-bl-[27px] rounded-tr-[27px]"
    : "rounded-tr-[0px] rounded-br-[27px] rounded-bl-[27px] rounded-tl-[27px]";

  const bubbleColors = isUser
    ? "bg-[#3A0A6A] text-white"
    : "bg-[#EAF1FA] text-[var(--color-primary)]";

  return (
    <div className={`w-full flex ${align}`}>
      <div
        className={[
          "flex w-fit max-w-[500px] md:max-w-[500px] max-w-[315px] items-center gap-[10px]",
          "px-[24px] py-[16px]",
          "text-[18px] md:text-[18px] text-[16px]",
          "leading-normal whitespace-pre-wrap",
          "text-right",
          bubbleRadius,
          bubbleColors,
        ].join(" ")}
        dir="rtl"
      >
        <p className="flex-1 whitespace-pre-wrap">{message}</p>
        {isUser && (
          <button
            type="button"
            onClick={() => onEdit?.()}
            className="relative size-[24px] shrink-0 hover:opacity-80"
            aria-label="עריכה"
          >
            <Image src="/images/stylus.svg" alt="" width={24} height={24} className="size-full" />
          </button>
        )}
      </div>
    </div>
  );
}
