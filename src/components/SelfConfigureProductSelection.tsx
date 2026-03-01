"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ProductDisplayCard, type ProductCondition, type ProductItem } from "./ProductDisplayCard";
import { SliderField } from "./SliderField";
import { SummaryValueCard } from "./SummaryValueCard";

export type { ProductItem } from "./ProductDisplayCard";

export interface ProductConditions {
  productId: string;
  loanAmount: number;
  interestType: "fixed" | "variable";
  loanType: "spitzer" | "balloon" | "partial_balloon";
  graceMonths: number;
  hasGrace: boolean;
}

const MOCK_PRODUCTS: ProductItem[] = [
  { id: "1", name: "קרן השתלמות", fundId: "2143245453", fundStatus: "liquid", maxWithdrawal: 70000 },
  { id: "2", name: "קופת גמל להשקעה", fundId: "654655764", fundStatus: "liquid", maxWithdrawal: 210000 },
  { id: "3", name: "קרן השתלמות", fundId: "2978756434", fundStatus: "illiquid", maxWithdrawal: 140000 },
];

interface SelfConfigureProductSelectionProps {
  loanMonths: number;
  onMonthsChange: (m: number) => void;
  onContinue: (selectedIds: string[], conditions: ProductConditions[]) => void;
}

export function SelfConfigureProductSelection({
  loanMonths,
  onMonthsChange,
  onContinue,
}: SelfConfigureProductSelectionProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [conditions, setConditions] = useState<Record<string, ProductCondition>>({});
  const [continueError, setContinueError] = useState<string | null>(null);
  const [errorClosing, setErrorClosing] = useState(false);

  useEffect(() => {
    if (!errorClosing) return;
    const t = setTimeout(() => {
      setContinueError(null);
      setErrorClosing(false);
    }, 250);
    return () => clearTimeout(t);
  }, [errorClosing]);
  const getOrCreateCondition = (p: ProductItem): ProductCondition => {
    const c = conditions[p.id];
    if (c) return c;
    return {
      productId: p.id,
      loanAmount: Math.min(10000, p.maxWithdrawal),
      interestType: "fixed",
      loanType: "spitzer",
      graceMonths: 6,
      hasGrace: false,
    };
  };

  const estimateMonthly = (amount: number, ratePercent: number) => {
    const r = ratePercent / 100 / 12;
    const m = loanMonths;
    if (r === 0) return amount / m;
    return (amount * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1);
  };

  const toggleProduct = (id: string) => {
    if (continueError) setErrorClosing(true);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalLoan = Array.from(selectedIds).reduce(
    (s, id) => s + (conditions[id]?.loanAmount ?? 0),
    0
  );
  const totalMonthly = Array.from(selectedIds).reduce((s, id) => {
    const c = conditions[id];
    if (!c) return s;
    const rate = c.interestType === "fixed" ? 3.1 : 3.3;
    return s + estimateMonthly(c.loanAmount, rate);
  }, 0);

  return (
    <div dir="rtl" className="flex w-full flex-col items-center gap-8">
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center">
        <SliderField
          label="לכמה חודשים?"
          value={loanMonths}
          min={14}
          max={84}
          onChange={onMonthsChange}
          variant="months"
          hint="יש לבחור בין 14 ל- 84 חודשים"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        {MOCK_PRODUCTS.map((p) => {
          const cond = getOrCreateCondition(p);
          const monthly = selectedIds.has(p.id)
            ? estimateMonthly(cond.loanAmount, cond.interestType === "fixed" ? 3.1 : 3.3)
            : 0;
          return (
            <ProductDisplayCard
              key={p.id}
              product={p}
              selected={selectedIds.has(p.id)}
              onToggle={() => toggleProduct(p.id)}
              condition={cond}
              onConditionChange={(c) => setConditions((prev) => ({ ...prev, [p.id]: c }))}
              estimatedMonthly={monthly}
              loanMonths={loanMonths}
            />
          );
        })}
      </div>

      <div className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-4">
        <div className="flex flex-nowrap justify-center gap-[40px]" dir="rtl">
          <SummaryValueCard label="סכום הלוואה כולל:" value={totalLoan} variant="total" />
          <SummaryValueCard label="החזר משוער כולל:" value={totalMonthly} />
        </div>
        <div className="flex flex-col items-center gap-2 overflow-hidden">
          {continueError && (
            <div
              className={`flex w-full items-center justify-center gap-2 overflow-hidden rounded-[4px] bg-[#f7e6e6] px-4 py-3 ${errorClosing ? "animate-div-out" : "animate-div-in"}`}
              dir="rtl"
              role="alert"
            >
              <img src="/images/ErrorRounded.svg" alt="" width={16} height={16} className="size-4 shrink-0" />
              <p className="text-[14px] font-normal text-[#af0404]">{continueError}</p>
            </div>
          )}
          <Button
            variant="primary"
            onClick={() => {
              if (selectedIds.size === 0) {
                setErrorClosing(false);
                setContinueError("יש לבחור לפחות מוצר אחד");
                return;
              }
              const conds: ProductConditions[] = Array.from(selectedIds).map((id) => {
                const c = conditions[id] ?? getOrCreateCondition(MOCK_PRODUCTS.find((x) => x.id === id)!);
                return {
                  productId: c.productId,
                  loanAmount: c.loanAmount,
                  interestType: c.interestType,
                  loanType: c.loanType,
                  graceMonths: c.graceMonths,
                  hasGrace: c.hasGrace,
                };
              });
              onContinue(Array.from(selectedIds), conds);
            }}
            className="min-w-[200px]"
          >
            המשך
          </Button>
        </div>
    </div>

    </div>
  );
}
