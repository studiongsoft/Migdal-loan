import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Design System/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "number", min: 16, max: 32 } },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <label className="flex cursor-pointer items-center gap-3" dir="rtl">
        <Checkbox checked={checked} onChange={setChecked} />
        <span className="text-[18px] font-light text-[var(--color-primary)]">
          חשבון זהה גם להעברת כספי ההלוואה וגם לגביית ההחזרים החודשיים
        </span>
      </label>
    );
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
