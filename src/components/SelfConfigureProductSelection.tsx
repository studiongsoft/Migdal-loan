"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { CalculateLoanButton } from "./CalculateLoanButton";
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
  products?: ProductItem[];
}

export function SelfConfigureProductSelection({
  loanMonths,
  onMonthsChange,
  onContinue,
  products = MOCK_PRODUCTS,
}: SelfConfigureProductSelectionProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [conditions, setConditions] = useState<Record<string, ProductCondition>>({});
  const [continueError, setContinueError] = useState<string | null>(null);
  const [errorClosing, setErrorClosing] = useState(false);
  const [summaryPulse, setSummaryPulse] = useState(false);

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

  const findProduct = (id: string) => products.find((x) => x.id === id);

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

  const totalLoan = Array.from(selectedIds).reduce((s, id) => {
    const p = findProduct(id);
    if (!p) return s;
    const c = conditions[id] ?? getOrCreateCondition(p);
    return s + c.loanAmount;
  }, 0);
  const totalMonthly = Array.from(selectedIds).reduce((s, id) => {
    const p = findProduct(id);
    if (!p) return s;
    const c = conditions[id] ?? getOrCreateCondition(p);
    const rate = c.interestType === "fixed" ? 3.1 : 3.3;
    return s + estimateMonthly(c.loanAmount, rate);
  }, 0);

  const handleCalculate = () => {
    setSummaryPulse(true);
    window.setTimeout(() => setSummaryPulse(false), 700);
  };

  const handleContinueClick = () => {
    if (selectedIds.size === 0) {
      setErrorClosing(false);
      setContinueError("יש לבחור לפחות מוצר אחד");
      return;
    }
    const conds: ProductConditions[] = Array.from(selectedIds).map((id) => {
      const p = findProduct(id);
      if (!p) throw new Error(`Unknown product ${id}`);
      const c = conditions[id] ?? getOrCreateCondition(p);
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
  };

  return (
    <>
      {/* חשב: fixed ל-viewport — נשאר גלוי בכל הגלילה (מובייל ודסקטופ); מיושר לרוחב עמוד הסימולטור */}
      <div
        className={[
          "pointer-events-none fixed inset-x-0 bottom-0 z-[38]",
          "px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-1 md:px-16",
        ].join(" ")}
      >
        <div className="pointer-events-auto mx-auto flex w-full max-w-[900px] justify-end" dir="rtl">
          <div className="pb-1 ps-0 sm:ps-1">
            <CalculateLoanButton onClick={handleCalculate} />
          </div>
        </div>
      </div>

      <div dir="rtl" className="flex w-full flex-col items-center gap-6 pb-4">
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

        {/* בחירת מוצרים — ריווח תחתון כדי לא להסתיר כרטיסים מאחורי ה-sticky */}
        <div className="flex w-full flex-col gap-4 pb-36 md:pb-40">
          <p className="w-full text-right text-[15px] font-bold leading-snug text-[var(--color-primary)] md:text-[16px]">
            בחר מוצרים להלוואה
          </p>
          <div className="flex w-full flex-col gap-4">
            {products.map((p) => {
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
        </div>

        {/* סיכום+המשך sticky; מרווח פנימי כדי שלא ייכנס מתחת לכפתור חשב הקבוע */}
        <div
          className={[
            "sticky bottom-0 z-30 mx-auto mt-4 w-full max-w-[900px]",
            "px-2 pb-[max(12px,env(safe-area-inset-bottom))] pt-1",
          ].join(" ")}
          dir="rtl"
        >
          <div
            className={[
              "flex min-w-0 flex-col items-center gap-3 rounded-t-[12px]",
              "border border-b-0 border-[#E1E9F3] bg-white/95 px-3 pt-4 pb-3 shadow-[0_-8px_32px_rgba(2,1,64,0.08)] backdrop-blur-sm",
              "pe-[calc(88px+0.75rem)] md:pe-[calc(100px+1rem)]",
            ].join(" ")}
          >
            <div
              className={`flex w-full max-w-[600px] flex-row flex-nowrap items-stretch justify-center gap-2 sm:gap-3 md:gap-[40px] transition-shadow duration-300 ${summaryPulse ? "rounded-xl ring-2 ring-[#3c65e3]/40 ring-offset-2 ring-offset-white/80" : ""}`}
            >
              <SummaryValueCard
                label="סכום הלוואה כולל:"
                value={totalLoan}
                variant="total"
                className="min-w-0 flex-1 basis-0"
              />
              <SummaryValueCard
                label="החזר משוער כולל:"
                value={Math.round(totalMonthly)}
                className="min-w-0 flex-1 basis-0"
              />
            </div>
            <div className="flex w-full max-w-[600px] flex-col items-center gap-2 overflow-hidden px-1">
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
              <Button variant="primary" onClick={handleContinueClick} className="w-full max-w-[280px] md:w-full md:max-w-[320px]">
                המשך
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
