"use client";

import { useEffect, useRef, useState } from "react";
import { Checkbox } from "./Checkbox";
import { FormField } from "./FormField";
import { InfoTooltip } from "./InfoTooltip";
import { Radio } from "./Radio";

export interface ProductItem {
  id: string;
  name: string;
  fundId: string;
  fundStatus: "liquid" | "illiquid";
  maxWithdrawal: number;
}

export interface ProductCondition {
  productId: string;
  loanAmount: number;
  interestType: "fixed" | "variable";
  loanType: "spitzer" | "balloon" | "partial_balloon";
  graceMonths: number;
  hasGrace: boolean;
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

const FUND_STATUS_TOOLTIPS = {
  liquid: { title: "כספים נזילים", body: "אלו כספים שניתן לגשת אליהם במהירות ובקלות, כמו מזומן או כסף בחשבון בנק." },
  illiquid: { title: "כספים לא נזילים", body: "אלו כספים שאינם ניתנים למשיכה מיידית, כמו כספים בקופות גמל או קרנות השתלמות." },
};

const INFO_TOOLTIPS = {
  interest: { title: "ריבית", body: "ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה. ריבית משתנה עשויה להשתנות לפי פריים." },
  loanType: { title: "סוג הלוואה", body: "שפיצר: החזרים שווים לאורך התקופה. בלון: תשלום עיקרי בסוף. בלון חלקי: שילוב של השניים." },
  grace: { title: "גרייס", body: "תקופת גרייס מאפשרת להתחיל בהחזרים רק לאחר מספר חודשים, כדי להתארגן כלכלית." },
};

interface ProductDisplayCardProps {
  product: ProductItem;
  selected: boolean;
  onToggle: () => void;
  condition: ProductCondition;
  onConditionChange: (cond: ProductCondition) => void;
  estimatedMonthly: number;
  loanMonths: number;
}

export function ProductDisplayCard({
  product,
  selected,
  onToggle,
  condition,
  onConditionChange,
  estimatedMonthly = 0,
  loanMonths,
}: ProductDisplayCardProps) {
  const formatCurrency = (v: number) => new Intl.NumberFormat("he-IL").format(v) + " ₪";
  const fundStatusTooltip = FUND_STATUS_TOOLTIPS[product.fundStatus];
  const [isClosing, setIsClosing] = useState(false);
  const prevSelected = useRef(selected);

  useEffect(() => {
    if (prevSelected.current && !selected) setIsClosing(true);
    prevSelected.current = selected;
  }, [selected]);

  useEffect(() => {
    if (selected) setIsClosing(false);
    else if (isClosing) {
      const t = setTimeout(() => setIsClosing(false), 250);
      return () => clearTimeout(t);
    }
  }, [selected, isClosing]);

  const showExpanded = selected || isClosing;

  const updateCond = (upd: Partial<ProductCondition>) => {
    onConditionChange({ ...condition, ...upd });
  };

  return (
    <div
      dir="rtl"
      className="flex w-full min-w-0 flex-col gap-4 rounded-[12px] border border-[#E1E9F3] bg-white p-6 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] md:min-w-[720px]"
    >
      {/* Header: קופסה לשם המוצר | סטטוס כספים | סכום מקסימאלי למשיכה | החזר חודשי משוער */}
      <div className="grid w-full grid-cols-1 gap-4 overflow-hidden md:grid-cols-[1fr_auto_auto_auto] md:gap-6">
        {/* קופסה לשם המוצר - לוקחת את השאר */}
        <label className="flex min-w-0 cursor-pointer items-start gap-3 overflow-hidden text-right">
          <Checkbox
            checked={selected}
            onChange={onToggle}
            size={20}
            className="mt-1 shrink-0"
          />
          <div className="min-w-0 flex-1 overflow-hidden">
            <p className="text-[14px] font-normal text-[#5E5D9A]">מוצר</p>
            <p className="break-words text-[16px] font-bold text-[var(--color-primary)]">
              {product.name} | {product.fundId}
            </p>
          </div>
        </label>
        <div className="flex shrink-0 flex-col text-right">
          <p className="text-[14px] font-normal text-[#5E5D9A]">סטטוס הכספים</p>
          <div className="flex items-center justify-start gap-2">
            <span
              className={`text-[16px] font-bold text-right ${product.fundStatus === "liquid" ? "text-[var(--color-accent-blue)]" : "text-[var(--color-primary)]"}`}
            >
              {product.fundStatus === "liquid" ? "נזילים" : "לא נזילים"}
            </span>
            <InfoTooltip title={fundStatusTooltip.title} body={fundStatusTooltip.body} />
          </div>
        </div>
        <div className="flex shrink-0 flex-col text-right">
          <p className="whitespace-nowrap text-[14px] font-normal text-[#5E5D9A]">סכום מקסימאלי למשיכה</p>
          <p className="text-[16px] font-bold text-[var(--color-primary)]">
            {formatCurrency(product.maxWithdrawal)}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-center justify-center rounded-[4px] bg-[#eaf1fa] px-4 py-3 text-center">
          <p className="whitespace-nowrap text-[14px] font-normal text-[#5E5D9A]">החזר חודשי משוער</p>
          <p className="text-[18px] font-bold text-[var(--color-primary)]">
            {formatCurrency(Math.round(estimatedMonthly))}
          </p>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4">
        {/* Expanded: Row 1 - סכום הלוואה + ריבית | Row 2 - סוג הלוואה + גרייס + כמות חודשים */}
        {showExpanded && (
          <div
            className={`mt-4 flex flex-col gap-6 pt-6 ${selected ? "animate-div-in" : "animate-div-out"}`}
          >
            {/* Row 1: סכום הלוואה + ריבית */}
            <div className="flex flex-col gap-6 md:flex-row md:flex-nowrap md:items-start md:gap-8">
              <div className="min-w-0 flex-1">
                <FormField
                  label="סכום הלוואה"
                  value={String(condition.loanAmount || "")}
                  onChange={(v) => updateCond({ loanAmount: Number(v) || 0 })}
                  placeholder={`עד ${formatCurrency(product.maxWithdrawal)}`}
                  error={
                    condition.loanAmount > product.maxWithdrawal
                      ? `הסכום חורג מהסכום המקסימאלי למשיכה (${formatCurrency(product.maxWithdrawal)})`
                      : undefined
                  }
                />
              </div>
              <div className="min-w-[180px] flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <p className="text-[14px] font-normal text-[#5E5D9A]">ריבית</p>
                  <InfoTooltip title={INFO_TOOLTIPS.interest.title} body={INFO_TOOLTIPS.interest.body} />
                </div>
                <div className="flex flex-col gap-[8px] md:flex-row md:flex-nowrap md:gap-[16px]">
                  {INTEREST_OPTIONS.map((opt) => (
                    <Radio
                      key={opt.value}
                      value={opt.value}
                      label={opt.label}
                      name={`interest-${product.id}`}
                      checked={condition.interestType === opt.value}
                      onChange={() => updateCond({ interestType: opt.value })}
                      variant="minimal"
                      tooltip={opt.tooltip}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: סוג הלוואה + גרייס */}
            <div className="flex flex-col gap-6 md:flex-row md:flex-nowrap md:items-start md:gap-8">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <p className="text-[14px] font-normal text-[#5E5D9A]">סוג הלוואה</p>
                  <InfoTooltip title={INFO_TOOLTIPS.loanType.title} body={INFO_TOOLTIPS.loanType.body} />
                </div>
                <div className="flex flex-col gap-[8px] md:flex-row md:flex-nowrap md:gap-[16px]">
                  {LOAN_TYPE_OPTIONS.map((opt) => (
                    <Radio
                      key={opt.value}
                      value={opt.value}
                      label={opt.label}
                      name={`loanType-${product.id}`}
                      checked={condition.loanType === opt.value}
                      onChange={() => updateCond({ loanType: opt.value })}
                      variant="minimal"
                    />
                  ))}
                </div>
              </div>
              <div className="min-w-0 flex-1 flex flex-col gap-4">
                <div className="mb-2 flex items-center gap-2">
                  <p className="text-[14px] font-normal text-[#5E5D9A]">גרייס</p>
                  <InfoTooltip title={INFO_TOOLTIPS.grace.title} body={INFO_TOOLTIPS.grace.body} />
                </div>
                <div className="flex flex-col gap-[8px] md:flex-row md:flex-nowrap md:gap-[16px]">
                  <Radio
                    value="yes"
                    label="כן"
                    name={`grace-${product.id}`}
                    checked={condition.hasGrace}
                    onChange={() => updateCond({ hasGrace: true })}
                    variant="minimal"
                  />
                  <Radio
                    value="no"
                    label="ללא"
                    name={`grace-${product.id}`}
                    checked={!condition.hasGrace}
                    onChange={() => updateCond({ hasGrace: false })}
                    variant="minimal"
                  />
                </div>
                {condition.hasGrace && (
                  <FormField
                    label="כמה חודשים של דחייה?"
                    value={String(condition.graceMonths)}
                    onChange={(v) => updateCond({ graceMonths: Number(v) })}
                    type="dropdown"
                    options={GRACE_MONTHS_OPTIONS.map((m) => ({ value: String(m), label: `${m} חודשים` }))}
                    placeholder="בחר"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
