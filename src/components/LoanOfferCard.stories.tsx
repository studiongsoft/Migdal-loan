import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  LoanOfferCard,
  LOAN_OFFER_DATA_VARIANTS,
  type LoanOfferInfoContent,
} from "./LoanOfferCard";

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

export const LiquidFunds2products: Story = {
  render: () => {
    const [rate, setRate] = useState<"prime" | "fixed">("fixed");
    const [expanded, setExpanded] = useState(false);
    return (
      <LoanOfferCard
        offer={LOAN_OFFER_DATA_VARIANTS.liquid}
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

export const NotLiquidFunds2products: Story = {
  render: () => {
    const [rate, setRate] = useState<"prime" | "fixed">("fixed");
    const [expanded, setExpanded] = useState(false);
    return (
      <LoanOfferCard
        offer={LOAN_OFFER_DATA_VARIANTS.illiquid2products}
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

export const IlliquidFunds_oneproduct: Story = {
  render: () => {
    const [rate, setRate] = useState<"prime" | "fixed">("prime");
    const [expanded, setExpanded] = useState(false);
    const offerWithLiquidTitle = {
      ...LOAN_OFFER_DATA_VARIANTS.illiquid,
      titleBase: "פרטי הלוואה ",
      titleAccent: "כספים נזילים",
    };
    return (
      <LoanOfferCard
        offer={offerWithLiquidTitle}
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

/** כותרת: פרטי הלוואה כספים לא נזילים */
export const notliquid_oneproduct: Story = {
  render: () => {
    const [rate, setRate] = useState<"prime" | "fixed">("prime");
    const [expanded, setExpanded] = useState(false);
    return (
      <LoanOfferCard
        offer={LOAN_OFFER_DATA_VARIANTS.illiquidFunds}
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

