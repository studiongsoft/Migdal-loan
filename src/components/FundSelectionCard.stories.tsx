import type { Meta, StoryObj } from "@storybook/react";
import { FundSelectionCard, type Fund } from "./FundSelectionCard";

const meta = {
  title: "Design System/Cards/FundSelectionCard",
  component: FundSelectionCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof FundSelectionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const demoFunds: Fund[] = [
  { id: "321654", name: "קופה 321654 – סה״כ צבירה ₪180,000", hasInfo: true },
  { id: "887799", name: "קופה 887799 – סה״כ צבירה ₪5,000" },
];

export const Default: Story = {
  args: {
    funds: demoFunds,
    onConfirm: (id: string) => console.log("Selected fund:", id),
  },
  render: (args) => (
    <div className="w-[900px] bg-white p-10 flex justify-end">
      <FundSelectionCard {...args} />
    </div>
  ),
};

export const Narrow: Story = {
  args: {
    funds: demoFunds,
    onConfirm: (id: string) => console.log("Selected fund:", id),
  },
  render: (args) => (
    <div className="w-[360px] bg-white p-6 flex justify-end">
      <FundSelectionCard {...args} />
    </div>
  ),
};
