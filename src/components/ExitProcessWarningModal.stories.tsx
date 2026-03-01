import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ExitProcessWarningModal } from "./ExitProcessWarningModal";
import { Button } from "./Button";

const meta = {
  title: "Design System/ExitProcessWarningModal",
  component: ExitProcessWarningModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExitProcessWarningModal>;

export default meta;

type Story = StoryObj<typeof ExitProcessWarningModal>;

export const Default: Story = {
  render: function DefaultStory() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח אזהרת יציאה
        </Button>
        <ExitProcessWarningModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            setOpen(false);
            alert("יציאה מאושרת");
          }}
        />
      </div>
    );
  },
};
