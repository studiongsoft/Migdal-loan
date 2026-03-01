"use client";

import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ThinkingBubble } from "./ThinkingBubble";

export interface ChatItem {
  type: "system" | "user";
  text: string;
}

export interface ChatOption {
  value: string;
  label: string;
  goToSelf?: boolean;
}

export interface PreferencesChatProps {
  /** היסטוריית ההודעות - מערכת ומשתמש */
  messages: ChatItem[];
  /** השאלה הנוכחית (הודעת מערכת) */
  currentQuestion?: string;
  /** תשובת המשתמש הנוכחית (אם נבחרה) - מתווספת ל-messages ע״י ההורה */
  selectedOption?: string | null;
  /** האפשרויות לבחירה */
  options?: ChatOption[];
  /** במצב חישוב (מציג 3 נקודות אנימטיביות) */
  isCalculating?: boolean;
  /** בחירת אפשרות */
  onOptionSelect: (opt: ChatOption) => void;
  /** לחיצה על עריכה בתשובת משתמש - מקבל אינדקס השלב (0, 1, 2...) */
  onUserMessageEdit?: (stepIndex: number) => void;
  /** גובה לאזור הצ'אט (מינימלי ומקסימלי - לאזור גלילה קבוע) */
  chatHeight?: string;
}

export function PreferencesChat({
  messages,
  currentQuestion,
  selectedOption,
  options = [],
  isCalculating = false,
  onOptionSelect,
  onUserMessageEdit,
  chatHeight = "400px",
}: PreferencesChatProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      requestAnimationFrame(() => {
        bottomSentinelRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      });
    };
    scrollToBottom();
  }, [messages, currentQuestion, isCalculating]);

  const displayMessages: ChatItem[] = [...messages];
  if (currentQuestion) {
    displayMessages.push({ type: "system", text: currentQuestion });
  }

  return (
    <div dir="rtl" className="flex flex-col gap-6">
      {/* אזור הצ'אט */}
      <div
        ref={scrollRef}
        className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{ minHeight: chatHeight, maxHeight: chatHeight }}
      >
        {displayMessages.map((m, i) => (
          <div key={i} className="animate-chat-bubble-in">
            <ChatMessage
              message={m.text}
              type={m.type}
              onEdit={
                m.type === "user" && onUserMessageEdit
                  ? () => onUserMessageEdit(Math.floor((i - 1) / 2))
                  : undefined
              }
            />
          </div>
        ))}
        {isCalculating && (
          <div className="animate-chat-bubble-in">
            <ThinkingBubble />
          </div>
        )}
        {/* Sentinel for scroll-to-bottom */}
        <div ref={bottomSentinelRef} className="h-px shrink-0" aria-hidden />
      </div>

      {/* כפתורי בחירה */}
      {!isCalculating && options.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onOptionSelect(opt)}
              className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-[#E1E9F3] bg-white px-4 py-3 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.08)] transition-colors hover:border-[var(--color-primary)]/30 hover:bg-[#f4f8fc]"
            >
              <span className="text-right text-[16px] font-normal text-[var(--color-primary)]">
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
