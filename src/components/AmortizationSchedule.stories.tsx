import type { Meta, StoryObj } from "@storybook/react";
import { AmortizationSchedule, type ScheduleProduct } from "./AmortizationSchedule";

const meta = {
  title: "Design System/Schedule/AmortizationSchedule",
  component: AmortizationSchedule,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof AmortizationSchedule>;

export default meta;

type Story = StoryObj<typeof AmortizationSchedule>;

const SINGLE_PRODUCT: ScheduleProduct[] = [
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

const MULTI_PRODUCT: ScheduleProduct[] = [
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
  {
    id: "3",
    name: "קרן השתלמות | 2978756434",
    loanAmount: 7800,
    annualRatePercent: 3.3,
    months: 14,
    graceMonths: 0,
    loanType: "בלון",
  },
];

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div dir="rtl" className="w-[780px] rounded-[16px] border border-[#E6ECF5] bg-white p-6">
    {children}
  </div>
);

export const SingleProduct: Story = {
  args: {
    products: SINGLE_PRODUCT,
  },
  render: (args) => (
    <Frame>
      <AmortizationSchedule {...args} />
    </Frame>
  ),
};

export const MultipleProducts: Story = {
  args: {
    products: MULTI_PRODUCT,
  },
  render: (args) => (
    <Frame>
      <AmortizationSchedule {...args} />
    </Frame>
  ),
};

export const WithButton: Story = {
  args: {
    products: SINGLE_PRODUCT,
    primaryButtonLabel: "אפשר להמשיך",
    onPrimaryButtonClick: () => alert("לחיצה"),
  },
  render: (args) => (
    <Frame>
      <AmortizationSchedule {...args} />
    </Frame>
  ),
};
