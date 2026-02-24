import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BeforeContinueModal } from "./BeforeContinueModal";
import { Button } from "./Button";

const meta = {
  title: "Design System/BeforeContinueModal",
  component: BeforeContinueModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "פופאפ שלב 2 – לפני שממשיכים. הסבר קצר עם שלושה שלבים ממוספרים. כולל איור holdcup.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    onFinish: { action: "finished" },
  },
} satisfies Meta<typeof BeforeContinueModal>;

export default meta;

type Story = StoryObj<typeof BeforeContinueModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onFinish: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "מצב פתוח – הפופאפ עם הסבר לפני שממשיכים.",
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
          פתח פופאפ לפני שממשיכים
        </Button>
        <BeforeContinueModal
          isOpen={isOpen}
          onFinish={() => {
            alert("הבנתי! בואו נמשיך");
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
};
