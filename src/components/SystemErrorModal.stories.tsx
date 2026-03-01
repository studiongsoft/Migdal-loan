import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SystemErrorModal } from "./SystemErrorModal";
import { Button } from "./Button";

const meta = {
  title: "Design System/SystemErrorModal",
  component: SystemErrorModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SystemErrorModal>;

export default meta;

type Story = StoryObj<typeof SystemErrorModal>;

export const Default: Story = {
  render: function DefaultStory() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג תקלת מערכת
        </Button>
        <SystemErrorModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onContinue={() => {
            setOpen(false);
            alert("המשך");
          }}
        />
      </div>
    );
  },
};
