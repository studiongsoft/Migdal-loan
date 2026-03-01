import type { Meta, StoryObj } from "@storybook/react";
import { SummaryValueCard } from "./SummaryValueCard";

const meta = {
  title: "Design System/SummaryValueCard",
  component: SummaryValueCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", min: 0 } },
    variant: { control: "select", options: ["monthly", "total"] },
  },
} satisfies Meta<typeof SummaryValueCard>;

export default meta;

type Story = StoryObj<typeof SummaryValueCard>;

export const MonthlyPayment: Story = {
  args: {
    label: "החזר משוער חודשי:",
    value: 4600,
  },
};

export const TotalLoanAmount: Story = {
  args: {
    label: "סכום הלוואה כולל:",
    value: 50000,
    variant: "total",
  },
};

export const EstimatedTotalRepayment: Story = {
  args: {
    label: "החזר משוער כולל:",
    value: 6663,
  },
};

export const SideBySide: Story = {
  render: () => (
    <div dir="rtl" className="flex flex-nowrap justify-center gap-[40px]">
      <SummaryValueCard label="סכום הלוואה כולל:" value={50000} variant="total" />
      <SummaryValueCard label="החזר משוער כולל:" value={6663} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div dir="rtl" className="flex flex-col items-center gap-6">
      <SummaryValueCard label="החזר משוער חודשי:" value={4600} />
      <div className="flex flex-nowrap justify-center gap-[40px]">
        <SummaryValueCard label="סכום הלוואה כולל:" value={50000} variant="total" />
        <SummaryValueCard label="החזר משוער כולל:" value={6663} />
      </div>
    </div>
  ),
};
