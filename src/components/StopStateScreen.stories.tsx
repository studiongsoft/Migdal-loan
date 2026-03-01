import type { Meta, StoryObj } from "@storybook/react";
import { StopStateScreen } from "./StopStateScreen";

const meta = {
  title: "Design System/StopStateScreen",
  component: StopStateScreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StopStateScreen>;

export default meta;

type Story = StoryObj<typeof StopStateScreen>;

/** מצב עצירה – לא ניתן להמשיך (בדיקת אשראי) */
export const CreditCheckFailed: Story = {
  args: {
    title: "לצערנו לא ניתן להמשיך",
    subtitle: "לאחר בדיקת האשראי נראה כי לא ניתן לתת לך הלוואה",
    primaryButton: {
      label: "לדף הבית",
      onClick: () => {},
    },
  },
};

/** מצב עצירה – לא נמצאו תוכניות חיסכון */
export const NoSavingsPlans: Story = {
  args: {
    title: "לצערנו לא ניתן להמשיך",
    subtitle: "לא נמצאו תוכניות חיסכון",
    primaryButton: {
      label: "להלוואה על בסיס אשראי חיצוני",
      onClick: () => {},
    },
    secondaryButton: {
      label: "לדף הבית",
      onClick: () => {},
    },
  },
};
