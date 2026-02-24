import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "./Slider";

const meta = {
  title: "Design System/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

const formatCurrency = (v: number) => new Intl.NumberFormat("he-IL").format(v) + " ₪";
const formatMonths = (v: number) => `${v} חודשים`;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    onChange: () => {},
  },
};

export const LoanAmount: Story = {
  render: () => {
    const [value, setValue] = useState(50000);
    return (
      <div dir="rtl" className="w-full max-w-[400px]">
        <Slider
          value={value}
          min={1000}
          max={100000}
          onChange={setValue}
          formatValue={formatCurrency}
        />
        <p className="mt-2 text-[18px] font-normal text-[var(--color-primary)]">
          יש לבחור סכום בין 1,000 ₪ ל- 100,000 ₪
        </p>
      </div>
    );
  },
};

export const LoanMonths: Story = {
  render: () => {
    const [value, setValue] = useState(14);
    return (
      <div dir="rtl" className="w-full max-w-[400px]">
        <Slider
          value={value}
          min={14}
          max={84}
          onChange={setValue}
          formatValue={(v) => String(v)}
        />
        <p className="mt-2 text-[18px] font-normal text-[var(--color-primary)]">
          יש לבחור בין 14 ל- 84 חודשים
        </p>
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div dir="rtl" className="w-full max-w-[400px]">
        <p className="mb-2 text-[16px] font-bold text-[var(--color-primary)]">ערך: {value}</p>
        <Slider value={value} min={0} max={100} onChange={setValue} />
      </div>
    );
  },
};
