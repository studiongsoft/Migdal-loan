"use client";

import { useState } from "react";
import { PreferencesChat, type ChatItem, type ChatOption } from "./PreferencesChat";

const CHAT_STEPS: {
  question: string;
  options: ChatOption[];
}[] = [
  {
    question: "רוצה שנציע לך הצעה נוספת לפי העדפות שלך",
    options: [
      { value: "yes", label: "כן" },
      { value: "self", label: "לא, אני רוצה לבנות לעצמי לבד את ההצעה", goToSelf: true },
    ],
  },
  {
    question: "רוצה להתחיל להחזיר רק בעוד מספר חודשים?\nאפשרי לדחות תשלום כדי להתארגן כלכלית",
    options: [
      { value: "yes", label: "כן" },
      { value: "no", label: "לא" },
    ],
  },
  {
    question: "רוצה להתחיל עם החזרים קטנים – ורק בהמשך לשלם את הקרן?",
    options: [
      { value: "yes", label: "כן" },
      { value: "no", label: "לא" },
    ],
  },
  {
    question: "רוצה להחזיר את כל הסכום בסוף התקופה?",
    options: [
      { value: "yes", label: "כן" },
      { value: "no", label: "לא" },
    ],
  },
  {
    question: "איזה סוג ריבית עדיף לך?",
    options: [
      { value: "fixed", label: "קבועה - וודאות" },
      { value: "variable", label: "משתנה - עשויה להיות נמוכה יותר" },
    ],
  },
];

interface PreferencesChatFlowProps {
  loanAmount: number;
  loanMonths: number;
  onComplete: () => void;
  onSelfConfigure: () => void;
  onBack?: () => void;
}

export function PreferencesChatFlow({
  loanAmount,
  loanMonths,
  onComplete,
  onSelfConfigure,
}: PreferencesChatFlowProps) {
  const [chatStep, setChatStep] = useState(0);
  const [messages, setMessages] = useState<ChatItem[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleOptionSelect = (opt: ChatOption) => {
    if (opt.goToSelf) {
      onSelfConfigure();
      return;
    }
    setSelectedOption(opt.value);
    const stepData = CHAT_STEPS[chatStep];
    const label = stepData?.options.find((o) => o.value === opt.value)?.label ?? opt.label;

    setMessages((prev) => [...prev, { type: "user" as const, text: label }]);

    if (chatStep >= CHAT_STEPS.length - 1) {
      setIsCalculating(true);
      setTimeout(() => onComplete(), 1500);
      return;
    }
    setChatStep((s) => s + 1);
    setSelectedOption(null);
  };

  const currentStep = CHAT_STEPS[chatStep];
  const chatHistory: ChatItem[] = [];
  for (let i = 0; i < chatStep; i++) {
    chatHistory.push({ type: "system", text: CHAT_STEPS[i].question });
    if (messages[i]) chatHistory.push(messages[i]);
  }

  return (
    <PreferencesChat
      messages={chatHistory}
      currentQuestion={currentStep?.question}
      selectedOption={selectedOption}
      options={currentStep?.options ?? []}
      isCalculating={isCalculating}
      onOptionSelect={handleOptionSelect}
      chatHeight="400px"
    />
  );
}
