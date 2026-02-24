import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BankConnectedSuccessModal } from "./BankConnectedSuccessModal";
import { Button } from "./Button";

const meta = {
  title: "Design System/BankConnectedSuccessModal",
  component: BankConnectedSuccessModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "פופאפ שלב 3 – החשבון חובר בהצלחה. כולל calc.png, אנימציית קונפטי, וכפתור סיום.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    onFinish: { action: "finished" },
  },
} satisfies Meta<typeof BankConnectedSuccessModal>;

export default meta;

type Story = StoryObj<typeof BankConnectedSuccessModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onFinish: () => {},
    onAdd: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "מצב פתוח – הפופאפ עם הודעת הצלחה וקונפטי.",
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
          פתח פופאפ החשבון חובר בהצלחה
        </Button>
        <BankConnectedSuccessModal
          isOpen={isOpen}
          onFinish={() => {
            alert("סיום");
            setIsOpen(false);
          }}
          onAdd={() => {
            alert("הוסף חשבון נוסף");
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
};
