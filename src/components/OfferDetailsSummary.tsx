"use client";

import { useState } from "react";
import type { ProductItem } from "./SelfConfigureProductSelection";
import type { ScheduleProduct } from "./AmortizationSchedule";
import {
  LoanOfferCard,
  type LoanOfferData,
  type LoanOfferInfoContent,
} from "./LoanOfferCard";
import { ActionButtons } from "./Button";
import { SummaryValueCard } from "./SummaryValueCard";

interface ProductConditions {
  productId: string;
  loanAmount: number;
  interestType: "fixed" | "variable";
  loanType: "spitzer" | "balloon" | "partial_balloon";
  graceMonths?: number;
  hasGrace?: boolean;
}

const LOAN_TYPE_LABELS: Record<string, string> = {
  spitzer: "שפיצר",
  balloon: "בלון",
  partial_balloon: "בלון חלקי",
};

interface OfferDetailsSummaryProps {
  products: ProductItem[];
  conditions: ProductConditions[];
  loanMonths: number;
  onContinueToBank: () => void;
  onScheduleClick?: (amount: number, monthly: number, rate: number, products?: ScheduleProduct[]) => void;
}

const INFO_LIQUID: LoanOfferInfoContent = {
  title: "כספים נזילים",
  body: "אלו כספים שניתן לגשת אליהם במהירות ובקלות, כמו מזומן או כסף בחשבון בנק. הם מאפשרים לבצע רכישות מידיות או לשלם חובות ללא עיכובים.",
};

const INFO_ILLIQUID: LoanOfferInfoContent = {
  title: "כספים לא נזילים",
  body: "אלו כספים שאינם ניתנים למשיכה מיידית, כמו כספים בקופות גמל או קרנות השתלמות. גישה אליהם כרוכה בתהליכים ובתנאים מסוימים.",
};

function estimateMonthly(amount: number, months: number, ratePercent: number): number {
  const r = ratePercent / 100 / 12;
  if (r === 0) return amount / months;
  return (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

export function OfferDetailsSummary({
  products,
  conditions,
  loanMonths,
  onContinueToBank,
  onScheduleClick,
}: OfferDetailsSummaryProps) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const totalMonthly = conditions.reduce((s, c) => {
    const p = products.find((x) => x.id === c.productId);
    if (!p) return s;
    const rate = c.interestType === "fixed" ? 3.1 : 3.3;
    return s + estimateMonthly(c.loanAmount, loanMonths, rate);
  }, 0);

  const toggleExpanded = (key: string) => {
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  type ConditionItem = { condition: (typeof conditions)[number]; product: ProductItem };

  const liquidItems = conditions
    .map((c) => {
      const p = products.find((x) => x.id === c.productId);
      return p?.fundStatus === "liquid" ? { condition: c, product: p } : null;
    })
    .filter((x): x is ConditionItem => x !== null);

  const illiquidItems = conditions
    .map((c) => {
      const p = products.find((x) => x.id === c.productId);
      return p?.fundStatus === "illiquid" ? { condition: c, product: p } : null;
    })
    .filter((x): x is ConditionItem => x !== null);

  const buildOffer = (
    items: ConditionItem[],
    titleAccent: string,
  ): LoanOfferData => {
    const loanAmount = items.reduce((s, x) => s + x.condition.loanAmount, 0);
    const monthly = items.reduce((s, x) => {
      const rate = x.condition.interestType === "fixed" ? 3.1 : 3.3;
      return s + estimateMonthly(x.condition.loanAmount, loanMonths, rate);
    }, 0);
    const productBreakdown = items.map((x) => ({
      productType: `${x.product.name} | ${x.product.fundId}`,
      amount: x.condition.loanAmount,
    }));
    return {
      titleBase: "פרטי הלוואה ",
      titleAccent,
      prime: { label: "משתנה פריים- 3.3%", monthly: Math.round(monthly) },
      fixed: { label: "קבועה 3.1%", monthly: Math.round(monthly) },
      loanAmount,
      productBreakdown,
    };
  };

  const liquidOffer = liquidItems.length > 0 ? buildOffer(liquidItems, "כספים נזילים") : null;
  const illiquidOffer = illiquidItems.length > 0 ? buildOffer(illiquidItems, "כספים לא נזילים") : null;

  const liquidMonthly = liquidItems.reduce((s, x) => {
    const rate = x.condition.interestType === "fixed" ? 3.1 : 3.3;
    return s + estimateMonthly(x.condition.loanAmount, loanMonths, rate);
  }, 0);
  const illiquidMonthly = illiquidItems.reduce((s, x) => {
    const rate = x.condition.interestType === "fixed" ? 3.1 : 3.3;
    return s + estimateMonthly(x.condition.loanAmount, loanMonths, rate);
  }, 0);

  const handleScheduleClick = (items: ConditionItem[]) => {
    if (!onScheduleClick || items.length === 0) return;
    const first = items[0];
    const amount = items.reduce((s, x) => s + x.condition.loanAmount, 0);
    const rate = first.condition.interestType === "fixed" ? 3.1 : 3.3;
    const monthly = items.reduce((s, x) => {
      const r = x.condition.interestType === "fixed" ? 3.1 : 3.3;
      return s + estimateMonthly(x.condition.loanAmount, loanMonths, r);
    }, 0);
    const scheduleProducts: ScheduleProduct[] = items.map((x, i) => ({
      id: x.product.id + "-" + i,
      name: `${x.product.name} | ${x.product.fundId}`,
      loanAmount: x.condition.loanAmount,
      annualRatePercent: x.condition.interestType === "fixed" ? 3.1 : 3.3,
      months: loanMonths,
      graceMonths: x.condition.hasGrace ? (x.condition.graceMonths ?? 2) : 0,
      loanType: LOAN_TYPE_LABELS[x.condition.loanType] ?? "שפיצר",
    }));
    onScheduleClick(amount, Math.round(monthly), rate, scheduleProducts);
  };

  return (
    <div dir="rtl" className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-6">
        {liquidOffer && (
          <LoanOfferCard
            offer={liquidOffer}
            isExpanded={expandedCards["liquid"] ?? false}
            onToggleExpand={() => toggleExpanded("liquid")}
            onScheduleClick={
              onScheduleClick ? () => handleScheduleClick(liquidItems) : undefined
            }
            infoContent={INFO_LIQUID}
            loanMonths={loanMonths}
            summaryMode
            monthlyOverride={Math.round(liquidMonthly)}
          />
        )}
        {illiquidOffer && (
          <LoanOfferCard
            offer={illiquidOffer}
            isExpanded={expandedCards["illiquid"] ?? false}
            onToggleExpand={() => toggleExpanded("illiquid")}
            onScheduleClick={
              onScheduleClick ? () => handleScheduleClick(illiquidItems) : undefined
            }
            infoContent={INFO_ILLIQUID}
            loanMonths={loanMonths}
            summaryMode
            monthlyOverride={Math.round(illiquidMonthly)}
          />
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <SummaryValueCard label="החזר משוער חודשי:" value={totalMonthly} />
        <ActionButtons
          primaryLabel="להמשיך עם הצעה זו"
          onPrimaryClick={onContinueToBank}
          primaryMinWidth="256px"
        />
      </div>
    </div>
  );
}
