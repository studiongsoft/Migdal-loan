import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./Button";
import { AmortizationSchedulePopup } from "./AmortizationSchedulePopup";

const meta = {
  title: "Design System/Schedule/AmortizationSchedulePopup",
  component: AmortizationSchedulePopup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
  },
} satisfies Meta<typeof AmortizationSchedulePopup>;

export default meta;

type Story = StoryObj<typeof AmortizationSchedulePopup>;

const SINGLE_PRODUCT = [
  {
    id: "1",
    name: "קרן השתלמות",
    loanAmount: 22200,
    annualRatePercent: 3.1,
    months: 17,
    graceMonths: 2,
    loanType: "שפיצר",
  },
];

const MULTI_PRODUCT = [
  {
    id: "1",
    name: "קרן השתלמות | 2143245453",
    loanAmount: 22200,
    annualRatePercent: 3.1,
    months: 17,
    graceMonths: 2,
    loanType: "שפיצר",
  },
  {
    id: "2",
    name: "קופת גמל להשקעה | 654655764",
    loanAmount: 20000,
    annualRatePercent: 3.1,
    months: 17,
    graceMonths: 2,
    loanType: "שפיצר",
  },
];

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג לוח סילוקין
        </Button>
        <AmortizationSchedulePopup
          isOpen={open}
          onClose={() => setOpen(false)}
          loanAmount={22200}
          monthlyPayment={1350}
          products={SINGLE_PRODUCT}
        />
      </div>
    );
  },
};

export const MultipleProducts: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג לוח סילוקין (מספר מוצרים)
        </Button>
        <AmortizationSchedulePopup
          isOpen={open}
          onClose={() => setOpen(false)}
          loanAmount={22200}
          monthlyPayment={1350}
          products={MULTI_PRODUCT}
        />
      </div>
    );
  },
};
