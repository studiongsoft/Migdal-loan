import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ExitProcessWarningModal } from "./ExitProcessWarningModal";
import { SystemErrorModal } from "./SystemErrorModal";
import { Button } from "./Button";

const meta = {
  title: "Design System/Modals",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ExitProcessWarning: Story = {
  render: function ExitProcessWarningStory() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl" className="flex flex-col gap-4">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח אזהרת יציאה
        </Button>
        <ExitProcessWarningModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const SystemError: Story = {
  render: function SystemErrorStory() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl" className="flex flex-col gap-4">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג תקלת מערכת
        </Button>
        <SystemErrorModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onContinue={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const BothModals: Story = {
  render: function BothModalsStory() {
    const [exitOpen, setExitOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    return (
      <div dir="rtl" className="flex flex-wrap gap-4">
        <Button variant="primary" onClick={() => setExitOpen(true)}>
          אזהרת יציאה
        </Button>
        <Button variant="secondary" onClick={() => setErrorOpen(true)}>
          תקלת מערכת
        </Button>
        <ExitProcessWarningModal
          isOpen={exitOpen}
          onClose={() => setExitOpen(false)}
          onConfirm={() => setExitOpen(false)}
        />
        <SystemErrorModal
          isOpen={errorOpen}
          onClose={() => setErrorOpen(false)}
          onContinue={() => setErrorOpen(false)}
        />
      </div>
    );
  },
};
