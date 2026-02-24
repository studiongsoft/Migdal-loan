import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  LoanOfferCard,
  type LoanOfferData,
  type LoanOfferInfoContent,
} from "./LoanOfferCard";

const OFFER_LIQUID: LoanOfferData = {
  titleBase: "פרטי הלוואה ",
  titleAccent: "כספים נזילים",
  prime: { label: "משתנה פריים- 3.3%", monthly: 2300 },
  fixed: { label: "קבועה - 3%", monthly: 2200 },
  loanAmount: 42200,
  productBreakdown: [
    { productType: "קרן השתלמות", amount: 22200 },
    { productType: "קופת גמל להשקעה", amount: 20000 },
  ],
};

const OFFER_ILLIQUID: LoanOfferData = {
  titleBase: "פרטי הלוואה ",
  titleAccent: "כספים לא נזילים",
  prime: { label: "משתנה פריים- 3.3%", monthly: 1200 },
  fixed: { label: "קבועה 3.1%", monthly: 1100 },
  loanAmount: 7800,
  productBreakdown: [{ productType: "קרן השתלמות", amount: 7800 }],
};

const INFO_LIQUID: LoanOfferInfoContent = {
  title: "כספים נזילים",
  body: "אלו כספים שניתן לגשת אליהם במהירות ובקלות, כמו מזומן או כסף בחשבון בנק. הם מאפשרים לבצע רכישות מידיות או לשלם חובות ללא עיכובים.",
};

const INFO_ILLIQUID: LoanOfferInfoContent = {
  title: "כספים לא נזילים",
  body: "אלו כספים שאינם ניתנים למשיכה מיידית, כמו כספים בקופות גמל או קרנות השתלמות. גישה אליהם כרוכה בתהליכים ובתנאים מסוימים.",
};

const meta = {
  title: "Design System/LoanOfferCard",
  component: LoanOfferCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoanOfferCard>;

export default meta;

type Story = StoryObj<typeof LoanOfferCard>;

export const LiquidFunds: Story = {
  render: () => {
    const [rate, setRate] = useState<"prime" | "fixed">("fixed");
    const [expanded, setExpanded] = useState(false);
    return (
      <LoanOfferCard
        offer={OFFER_LIQUID}
        selectedRate={rate}
        onRateChange={setRate}
        isExpanded={expanded}
        onToggleExpand={() => setExpanded(!expanded)}
        onScheduleClick={() => alert("לוח סילוקין")}
        infoContent={INFO_LIQUID}
        loanMonths={84}
      />
    );
  },
};

export const IlliquidFunds: Story = {
  render: () => {
    const [rate, setRate] = useState<"prime" | "fixed">("prime");
    const [expanded, setExpanded] = useState(false);
    return (
      <LoanOfferCard
        offer={OFFER_ILLIQUID}
        selectedRate={rate}
        onRateChange={setRate}
        isExpanded={expanded}
        onToggleExpand={() => setExpanded(!expanded)}
        onScheduleClick={() => alert("לוח סילוקין")}
        infoContent={INFO_ILLIQUID}
        loanMonths={84}
      />
    );
  },
};
