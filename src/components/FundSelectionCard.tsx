"use client";

import { useState } from "react";
import { Button } from "./Button";
import { InfoTooltip } from "./InfoTooltip";

export interface Fund {
  id: string;
  name: string;
  /** סכום צבירה להצגה (למשל "180,000") - אופציונלי, אם לא קיים משתמשים ב-name */
  amount?: string;
  hasInfo?: boolean;
  hasExistingLoan?: boolean;
  tooltipTitle?: string;
  tooltipBody?: string;
}

export interface FundSelectionCardProps {
  funds: Fund[];
  onConfirm: (selectedFundId: string) => void;
  /** כאשר יש הלוואות על קופות – טקסט מקדים לפי Figma */
  hasExistingLoans?: boolean;
}

const INTRO_NO_LOANS = `בכל בקשה ניתן למשוך כספים מקופה אחת בלבד.
אל תדאג, בסוף התהליך הדיגיטלי נאפשר לך לבחור
קופה נוספת למשיכה`;

const INTRO_WITH_LOANS = `הנה רשימת הקופות שיש לך והצבירה בכל אחת.
מאיזה קופה אתה רוצה למשוך את הכסף?`;

export function FundSelectionCard({ funds, onConfirm, hasExistingLoans }: FundSelectionCardProps) {
  const [selectedFund, setSelectedFund] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedFund) onConfirm(selectedFund);
  };

  const introText = hasExistingLoans ? INTRO_WITH_LOANS : INTRO_NO_LOANS;

  return (
    <div className="w-full flex justify-start">
      <div className="w-fit max-w-[500px] md:max-w-[500px] max-w-[315px] rounded-tr-[0px] rounded-tl-[27px] rounded-br-[27px] rounded-bl-[27px] px-[24px] py-[16px] bg-[#EAF1FA]">
        <div className="flex flex-col gap-[8px] items-end">
          <p className="text-right text-[18px] md:text-[18px] text-[16px] leading-normal text-[#262565] whitespace-pre-wrap">
            {introText}
          </p>

          <p className="w-full text-right text-[18px] md:text-[18px] text-[16px] font-bold leading-normal text-[#3c65e3]">
            קופה לבחירה
          </p>

          <div className="flex flex-col gap-[12px] w-full">
            {funds.map((fund) => (
              <label
                key={fund.id}
                className="flex items-center justify-between gap-[8px] cursor-pointer"
              >
                {/* Radio */}
                <div className="relative w-[20px] h-[20px] shrink-0">
                  <input
                    type="radio"
                    name="fund-selection"
                    value={fund.id}
                    checked={selectedFund === fund.id}
                    onChange={(e) => setSelectedFund(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-full h-full rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedFund === fund.id
                        ? "border-[#3c65e3]"
                        : "border-[#020140]"
                    }`}
                  >
                    {selectedFund === fund.id && (
                      <div className="w-[10px] h-[10px] rounded-full bg-[#3c65e3]" />
                    )}
                  </div>
                </div>

                {/* Text + Badge */}
                <div className="flex flex-1 items-center justify-end gap-[8px] flex-wrap">
                  <span className="text-[18px] md:text-[18px] text-[16px] leading-normal text-[#262565] text-right">
                    {fund.amount != null
                      ? `קופה ${fund.id} – סה״כ צבירה ${fund.amount}₪`
                      : fund.name}
                  </span>
                  {fund.hasExistingLoan && (
                    <span className="rounded-[4px] bg-[#020140] px-2 py-0.5 text-[12px] font-normal text-white shrink-0">
                      קיימת הלוואה
                    </span>
                  )}
                </div>

                {/* Info icon */}
                {fund.hasInfo ? (
                  <InfoTooltip
                    title={fund.tooltipTitle ?? "מידע על הקופה"}
                    body={fund.tooltipBody ?? "מידע נוסף על הקופה הנבחרת."}
                    iconSize={16}
                  />
                ) : (
                  <div className="w-[16px] h-[16px] shrink-0" />
                )}
              </label>
            ))}
          </div>

          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={!selectedFund}
            className="w-full md:w-full self-stretch"
          >
            אישור
          </Button>
        </div>
      </div>
    </div>
  );
}
