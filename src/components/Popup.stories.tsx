import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./Button";
import { Popup } from "./Popup";

const meta = {
  title: "Design System/Popup",
  component: Popup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    closeOnBackdropClick: { control: "boolean" },
  },
} satisfies Meta<typeof Popup>;

export default meta;

type Story = StoryObj<typeof Popup>;

const DemoContent = () => (
  <div dir="rtl" className="flex flex-col gap-4">
    <h2 className="text-right text-[24px] font-bold text-[var(--color-primary)]">כותרת לדוגמה</h2>
    <p className="text-right text-[16px] text-[var(--color-primary)]">
      זהו תוכן לדוגמה בפופאפ. לחיצה על הרקע או על כפתור הסגירה תסגור אותו.
    </p>
  </div>
);

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח פופאפ
        </Button>
        <Popup isOpen={open} onClose={() => setOpen(false)}>
          <DemoContent />
        </Popup>
      </div>
    );
  },
};

export const CustomWidth: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח פופאפ רחב
        </Button>
        <Popup isOpen={open} onClose={() => setOpen(false)} maxWidth="500px">
          <DemoContent />
        </Popup>
      </div>
    );
  },
};
