"use client";

interface ChatMessageProps {
  message: string;
  type?: "system" | "user";
}

export function ChatMessage({ message, type = "system" }: ChatMessageProps) {
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
          "w-fit max-w-[500px] md:max-w-[500px] max-w-[315px]",
          "px-[24px] py-[16px]",
          "text-[18px] md:text-[18px] text-[16px]",
          "leading-normal whitespace-pre-wrap",
          "text-right",
          bubbleRadius,
          bubbleColors,
        ].join(" ")}
        dir="rtl"
      >
        {message}
      </div>
    </div>
  );
}
