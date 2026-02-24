import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ProductDisplayCard, type ProductCondition, type ProductItem } from "./ProductDisplayCard";

const meta = {
  title: "Design System/ProductDisplayCard",
  component: ProductDisplayCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductDisplayCard>;

export default meta;

type Story = StoryObj<typeof ProductDisplayCard>;

const sampleProduct: ProductItem = {
  id: "1",
  name: "קרן השתלמות",
  fundId: "2143245453",
  fundStatus: "liquid",
  maxWithdrawal: 70000,
};

const defaultCondition: ProductCondition = {
  productId: "1",
  loanAmount: 10000,
  interestType: "fixed",
  loanType: "spitzer",
  graceMonths: 6,
  hasGrace: false,
};

export const Collapsed: Story = {
  args: {
    product: sampleProduct,
    selected: false,
    onToggle: () => {},
    condition: defaultCondition,
    onConditionChange: () => {},
    estimatedMonthly: 0,
    loanMonths: 60,
  },
};

export const Expanded: Story = {
  args: {
    product: sampleProduct,
    selected: true,
    onToggle: () => {},
    condition: defaultCondition,
    onConditionChange: () => {},
    estimatedMonthly: 2221,
    loanMonths: 60,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    const [condition, setCondition] = useState<ProductCondition>(defaultCondition);
    const rate = condition.interestType === "fixed" ? 3.1 : 3.3;
    const r = rate / 100 / 12;
    const m = 60;
    const monthly = (condition.loanAmount * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1);
    return (
      <div className="w-full max-w-[700px]">
        <ProductDisplayCard
          product={sampleProduct}
          selected={selected}
          onToggle={() => setSelected(!selected)}
          condition={condition}
          onConditionChange={setCondition}
          estimatedMonthly={monthly}
          loanMonths={60}
        />
      </div>
    );
  },
};
