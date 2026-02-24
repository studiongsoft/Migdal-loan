import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PreferencesChat, type ChatItem } from "./PreferencesChat";

const meta = {
  title: "Design System/Chat/PreferencesChat",
  component: PreferencesChat,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div dir="rtl" className="w-[500px] max-w-full rounded-[16px] border border-[#E6ECF5] bg-white p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PreferencesChat>;

export default meta;

type Story = StoryObj<typeof PreferencesChat>;

export const FirstStep: Story = {
  args: {
    messages: [],
    currentQuestion: "רוצה שנציע לך הצעה נוספת לפי העדפות שלך",
    options: [
      { value: "yes", label: "כן" },
      { value: "self", label: "לא, אני רוצה לבנות לעצמי לבד את ההצעה", goToSelf: true },
    ],
    onOptionSelect: (opt) => console.log("Selected:", opt),
  },
};

export const WithHistory: Story = {
  args: {
    messages: [
      { type: "system", text: "רוצה שנציע לך הצעה נוספת לפי העדפות שלך" },
      { type: "user", text: "כן" },
      { type: "system", text: "רוצה להתחיל להחזיר רק בעוד מספר חודשים?\nאפשרי לדחות תשלום כדי להתארגן כלכלית" },
      { type: "user", text: "כן" },
    ],
    currentQuestion: "רוצה להתחיל עם החזרים קטנים – ורק בהמשך לשלם את הקרן?",
    options: [
      { value: "yes", label: "כן" },
      { value: "no", label: "לא" },
    ],
    onOptionSelect: (opt) => console.log("Selected:", opt),
  },
};

export const Calculating: Story = {
  args: {
    messages: [
      { type: "system", text: "רוצה שנציע לך הצעה נוספת לפי העדפות שלך" },
      { type: "user", text: "כן" },
      { type: "system", text: "רוצה להתחיל להחזיר רק בעוד מספר חודשים?" },
      { type: "user", text: "כן" },
      { type: "system", text: "רוצה להתחיל עם החזרים קטנים?" },
      { type: "user", text: "כן" },
      { type: "system", text: 'רוצה להחזיר את כל הסכום בסוף התקופה?' },
      { type: "user", text: "לא" },
      { type: "system", text: "איזה סוג ריבית עדיף לך?" },
      { type: "user", text: "קבועה - וודאות" },
    ],
    isCalculating: true,
    options: [],
    onOptionSelect: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "מציג בועית עם 3 נקודות אנימטיביות במצב חישוב",
      },
    },
  },
};
