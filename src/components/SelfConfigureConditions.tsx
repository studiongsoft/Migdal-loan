"use client";

import { useState } from "react";
import type { ProductItem } from "./SelfConfigureProductSelection";
import { Button } from "./Button";
import { FormField } from "./FormField";
import { InfoTooltip } from "./InfoTooltip";
import { SummaryValueCard } from "./SummaryValueCard";

interface ProductConditions {
  productId: string;
  loanAmount: number;
  interestType: "fixed" | "variable";
  loanType: "spitzer" | "balloon" | "partial_balloon";
  graceMonths: number;
  hasGrace: boolean;
}

interface SelfConfigureConditionsProps {
  products: ProductItem[];
  loanMonths: number;
  onContinue: (conditions: ProductConditions[]) => void;
  onBack: () => void;
}

const INTEREST_OPTIONS = [
  {
    value: "fixed" as const,
    label: "קבועה 3.1%",
    tooltip: { title: "ריבית קבועה", body: "ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים." },
  },
  {
    value: "variable" as const,
    label: "משתנה פריים- 3.3%",
    tooltip: { title: "ריבית משתנה פריים", body: "ריבית משתנה לפי פריים עשויה להיות נמוכה יותר, אך עלולה להשתנות לאורך התקופה בהתאם לשינויי ריבית." },
  },
];
const LOAN_TYPE_OPTIONS = [
  { value: "spitzer" as const, label: "שפיצר" },
  { value: "balloon" as const, label: "בלון" },
  { value: "partial_balloon" as const, label: "בלון חלקי" },
];
const GRACE_MONTHS_OPTIONS = [1, 2, 3, 4, 5, 6, 12];

function estimateMonthly(amount: number, months: number, ratePercent: number): number {
  const r = ratePercent / 100 / 12;
  if (r === 0) return amount / months;
  return (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

export function SelfConfigureConditions({ products, loanMonths, onContinue, onBack }: SelfConfigureConditionsProps) {
  const [conditions, setConditions] = useState<ProductConditions[]>(
    products.map((p) => ({
      productId: p.id,
      loanAmount: Math.min(10000, p.maxWithdrawal),
      interestType: "fixed",
      loanType: "spitzer",
      graceMonths: 6,
      hasGrace: false,
    }))
  );

  const formatCurrency = (v: number) => new Intl.NumberFormat("he-IL").format(v) + " ₪";

  const updateCondition = (productId: string, upd: Partial<ProductConditions>) => {
    setConditions((prev) =>
      prev.map((c) => (c.productId === productId ? { ...c, ...upd } : c))
    );
  };

  const totalLoan = conditions.reduce((s, c) => s + c.loanAmount, 0);
  const totalMonthly = conditions.reduce((s, c) => {
    const rate = c.interestType === "fixed" ? 3.1 : 3.3;
    return s + estimateMonthly(c.loanAmount, loanMonths, rate);
  }, 0);

  return (
    <div dir="rtl" className="flex flex-col gap-8">
      {products.map((p) => {
        const cond = conditions.find((c) => c.productId === p.id);
        if (!cond) return null;
        const monthly = estimateMonthly(cond.loanAmount, loanMonths, cond.interestType === "fixed" ? 3.1 : 3.3);
        return (
          <div
            key={p.id}
            className="flex w-full flex-col gap-4 rounded-[12px] border border-[#E1E9F3] bg-white p-6 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[14px] font-normal text-[#5E5D9A]">מוצר</p>
                <p className="text-[16px] font-bold text-[var(--color-primary)]">
                  {p.name} | {p.fundId}
                </p>
              </div>
              <div className="rounded-[4px] bg-[#eaf1fa] px-4 py-3">
                <p className="text-[14px] font-normal text-[#5E5D9A]">החזר חודשי משוער</p>
                <p className="text-[18px] font-bold text-[var(--color-primary)]">{formatCurrency(Math.round(monthly))}</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <FormField
                  label="סכום הלוואה"
                  value={String(cond.loanAmount)}
                  onChange={(v) => updateCondition(p.id, { loanAmount: Math.min(Number(v) || 0, p.maxWithdrawal) })}
                  placeholder={`עד ${formatCurrency(p.maxWithdrawal)}`}
                />
              </div>
              <div>
                <p className="text-[14px] font-normal text-[#5E5D9A]">סכום מקסימאלי למשיכה</p>
                <p className="text-[16px] font-bold text-[var(--color-primary)]">{formatCurrency(p.maxWithdrawal)}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">ריבית</p>
                <div className="flex gap-4">
                  {INTEREST_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name={`interest-${p.id}`}
                        checked={cond.interestType === opt.value}
                        onChange={() => updateCondition(p.id, { interestType: opt.value })}
                        className="size-4 accent-[var(--color-accent-blue)]"
                      />
                      <span className="text-[16px] text-[var(--color-primary)]">{opt.label}</span>
                      <span onClick={(e) => e.stopPropagation()} className="shrink-0">
                        <InfoTooltip title={opt.tooltip.title} body={opt.tooltip.body} />
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">סוג הלוואה</p>
                <div className="flex gap-4">
                  {LOAN_TYPE_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name={`loanType-${p.id}`}
                        checked={cond.loanType === opt.value}
                        onChange={() => updateCondition(p.id, { loanType: opt.value })}
                        className="ml-2 size-4 shrink-0 accent-[var(--color-primary)]"
                      />
                      <span className="text-right text-[16px] text-[var(--color-primary)]">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">גרייס</p>
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name={`grace-${p.id}`}
                      checked={!cond.hasGrace}
                      onChange={() => updateCondition(p.id, { hasGrace: false })}
                      className="ml-2 size-4 shrink-0 accent-[var(--color-primary)]"
                    />
                    <span className="text-right text-[16px] text-[var(--color-primary)]">ללא</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name={`grace-${p.id}`}
                      checked={cond.hasGrace}
                      onChange={() => updateCondition(p.id, { hasGrace: true })}
                      className="ml-2 size-4 shrink-0 accent-[var(--color-primary)]"
                    />
                    <span className="text-right text-[16px] text-[var(--color-primary)]">כן</span>
                  </label>
                  {cond.hasGrace && (
                    <FormField
                      label="חודשי דחייה"
                      value={String(cond.graceMonths)}
                      onChange={(v) => updateCondition(p.id, { graceMonths: Number(v) })}
                      type="dropdown"
                      options={GRACE_MONTHS_OPTIONS.map((m) => ({ value: String(m), label: `${m} חודשים` }))}
                      placeholder="בחר"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <SummaryValueCard label="סכום הלוואה כולל:" value={totalLoan} />
          <SummaryValueCard label="החזר משוער כולל:" value={Math.round(totalMonthly)} />
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={onBack} className="min-w-[120px]">
            חזור
          </Button>
          <Button variant="primary" onClick={() => onContinue(conditions)} className="min-w-[200px]">
            המשך
          </Button>
        </div>
      </div>
    </div>
  );
}
