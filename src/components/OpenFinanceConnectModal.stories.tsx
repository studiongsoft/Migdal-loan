import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { OpenFinanceConnectModal } from "./OpenFinanceConnectModal";
import { Button } from "./Button";

const meta = {
  title: "Design System/OpenFinanceConnectModal",
  component: OpenFinanceConnectModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "פופאפ מאוחד עם מעבר סליידר: שלב 1 (אישור הלוואה) → שלב 2 (לפני שממשיכים) → שלב 3 (החשבון חובר בהצלחה). התוכן מתחלף בחלקו הפנימי ללא סגירה ופתיחה מחדש.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    onStart: { action: "started" },
    onFinish: { action: "finished" },
    onAdd: { action: "add" },
  },
} satisfies Meta<typeof OpenFinanceConnectModal>;

export default meta;

type Story = StoryObj<typeof OpenFinanceConnectModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onStart: () => {},
    onFinish: () => {},
    onAdd: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "מצב פתוח – סליידר במסך ראשון (אישור הלוואה מהיר).",
      },
    },
  },
};

export const WithTrigger: Story = {
  render: function WithTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div dir="rtl" className="flex flex-col items-center gap-4">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          פתח פופאפ בנקאות פתוחה
        </Button>
        <OpenFinanceConnectModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onStart={() => {}}
          onFinish={() => setIsOpen(false)}
          onAdd={() => {}}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "לחיצה על הכפתור פותחת את הפופאפ. המעבר בין השלבים נעשה כמו סליידר בתוך הפופאפ.",
      },
    },
  },
};

/** זרימת 3 השלבים – סליידר בתוך פופאפ אחד */
export const FullFlow: Story = {
  render: function FullFlow() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div dir="rtl" className="flex flex-col items-center gap-4">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          התחל זרימה
        </Button>
        <OpenFinanceConnectModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onStart={() => {}}
          onFinish={() => {
            alert("סיום!");
            setIsOpen(false);
          }}
          onAdd={() => {
            alert("הוסף חשבון נוסף – חוזר למסך ראשון");
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "זרימה מלאה בסליידר אחד: התחל → הבנתי! → סיום. כפתור הוסף מחזיר למסך הראשון.",
      },
    },
  },
};
