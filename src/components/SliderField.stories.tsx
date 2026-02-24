import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SliderField } from "./SliderField";

const meta = {
  title: "Design System/SliderField",
  component: SliderField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["currency", "months"] },
  },
} satisfies Meta<typeof SliderField>;

export default meta;

type Story = StoryObj<typeof SliderField>;

export const LoanAmount: Story = {
  render: () => {
    const [value, setValue] = useState(50000);
    return (
      <div dir="rtl" className="w-full max-w-[500px]">
        <SliderField
          label="בחר את סכום ההלוואה הרצוי"
          value={value}
          min={1000}
          max={100000}
          onChange={setValue}
          variant="currency"
          hint="יש לבחור סכום בין 1,000 ₪ ל- 100,000 ₪"
        />
      </div>
    );
  },
};

export const LoanMonths: Story = {
  render: () => {
    const [value, setValue] = useState(14);
    return (
      <div dir="rtl" className="w-full max-w-[400px]">
        <SliderField
          label="לכמה חודשים?"
          value={value}
          min={14}
          max={84}
          onChange={setValue}
          variant="months"
          hint="יש לבחור בין 14 ל- 84 חודשים"
        />
      </div>
    );
  },
};

export const BothVariants: Story = {
  render: () => {
    const [amount, setAmount] = useState(50000);
    const [months, setMonths] = useState(14);
    return (
      <div dir="rtl" className="flex flex-col items-center gap-[40px]">
        <SliderField
          label="בחר את סכום ההלוואה הרצוי"
          value={amount}
          min={1000}
          max={100000}
          onChange={setAmount}
          variant="currency"
          hint="יש לבחור סכום בין 1,000 ₪ ל- 100,000 ₪"
          className="max-w-[500px]"
        />
        <SliderField
          label="לכמה חודשים?"
          value={months}
          min={14}
          max={84}
          onChange={setMonths}
          variant="months"
          hint="יש לבחור בין 14 ל- 84 חודשים"
          className="max-w-[400px]"
        />
      </div>
    );
  },
};
