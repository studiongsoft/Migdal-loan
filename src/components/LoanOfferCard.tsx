"use client";

import { useState } from "react";
import { Button } from "./Button";
import { InfoTooltip } from "./InfoTooltip";

export interface LoanOfferProductBreakdown {
  productType: string;
  amount: number;
}

export interface LoanOfferData {
  titleBase: string;
  titleAccent: string;
  prime: { label: string; monthly: number };
  fixed: { label: string; monthly: number };
  loanAmount: number;
  productBreakdown: LoanOfferProductBreakdown[];
}

export interface LoanOfferInfoContent {
  title: string;
  body: string;
}

interface LoanOfferCardProps {
  offer: LoanOfferData;
  selectedRate?: "prime" | "fixed";
  onRateChange?: (v: "prime" | "fixed") => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onScheduleClick?: () => void;
  infoContent: LoanOfferInfoContent;
  loanMonths: number;
  /** When true, hides rate tabs and uses monthlyOverride for display. For self-configure summary. */
  summaryMode?: boolean;
  monthlyOverride?: number;
}

export function LoanOfferCard({
  offer,
  selectedRate = "fixed",
  onRateChange,
  isExpanded,
  onToggleExpand,
  onScheduleClick,
  infoContent,
  loanMonths,
  summaryMode = false,
  monthlyOverride,
}: LoanOfferCardProps) {
  const monthly =
    summaryMode && monthlyOverride !== undefined
      ? monthlyOverride
      : selectedRate === "prime"
        ? offer.prime.monthly
        : offer.fixed.monthly;

  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("he-IL").format(v) + " ₪";

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + loanMonths);

  const endDateStr = endDate
    .toLocaleDateString("he-IL", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\u200f/g, "");

  return (
    <div className="relative w-full max-w-[606px] rounded-[12px] border border-[var(--color-primary)] bg-white p-6 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] md:p-8">
      <div className="flex flex-col gap-4">
        {/* Header - centered, info icon always on the left of title, tooltip opens beside it */}
        <div className="relative flex flex-col items-center">
          <div className="flex items-center justify-center gap-2" dir="rtl">
            <h3 className="text-center text-[20px] font-bold text-[var(--color-primary)]">
              <span>{offer.titleBase} </span>
              <span className="text-[#3c65e3]">{offer.titleAccent}</span>
            </h3>

            <InfoTooltip title={infoContent.title} body={infoContent.body} />
          </div>

          {!summaryMode && (
            <p className="mt-1 text-center text-[14px] font-normal text-[var(--color-primary)]">
              יש לבחור את סוג הריבית
            </p>
          )}
        </div>

        {/* Tabs - RTL: קבועה (right) | משתנה פריים (left). Hidden in summary mode. */}
        {!summaryMode && (
          <div className="flex gap-3" dir="rtl">
            <label
              className={`flex flex-1 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[8px] px-3 py-2.5 transition-all ${
                selectedRate === "fixed"
                  ? "border-2 border-[var(--color-primary)] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.15)]"
                  : "border border-[#E1E9F3] bg-white shadow-[0px_0px_11px_0px_rgba(0,0,0,0.08)]"
              }`}
            >
              <div className="flex w-full items-center gap-1.5">
                <input
                  type="radio"
                  name={offer.titleBase + offer.titleAccent}
                  checked={selectedRate === "fixed"}
                  onChange={() => onRateChange?.("fixed")}
                  className="size-4 shrink-0 accent-[var(--color-primary)]"
                />
                <span className="flex-1 text-right text-[14px] leading-tight text-[var(--color-primary)]">
                  {offer.fixed.label}
                </span>
                <span onClick={(e) => e.stopPropagation()} className="shrink-0">
                  <InfoTooltip
                    title="ריבית קבועה"
                    body="ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים."
                  />
                </span>
              </div>
            </label>

            <label
              className={`flex flex-1 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[8px] px-3 py-2.5 transition-all ${
                selectedRate === "prime"
                  ? "border-2 border-[var(--color-primary)] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.15)]"
                  : "border border-[#E1E9F3] bg-white shadow-[0px_0px_11px_0px_rgba(0,0,0,0.08)]"
              }`}
            >
              <div className="flex w-full items-center gap-1.5">
                <input
                  type="radio"
                  name={offer.titleBase + offer.titleAccent}
                  checked={selectedRate === "prime"}
                  onChange={() => onRateChange?.("prime")}
                  className="size-4 shrink-0 accent-[var(--color-primary)]"
                />
                <span className="flex-1 text-right text-[14px] leading-tight text-[var(--color-primary)]">
                  {offer.prime.label}
                </span>
                <span onClick={(e) => e.stopPropagation()} className="shrink-0">
                  <InfoTooltip
                    title="ריבית משתנה פריים"
                    body="ריבית משתנה לפי פריים עשויה להיות נמוכה יותר, אך עלולה להשתנות לאורך התקופה בהתאם לשינויי ריבית."
                  />
                </span>
              </div>
            </label>
          </div>
        )}

        {/* Info card - summary + product breakdown, centered, no dividers */}
        <div className="flex flex-col items-center gap-4 p-4 md:gap-5">
          <div className="flex w-full max-w-[480px] flex-wrap justify-center gap-4 md:gap-6" dir="rtl">
            {/* Summary row - RTL order: סכום הלוואה | החזר חודשי משוער | סיום ההלוואה */}
            <div className="flex flex-1 min-w-[90px] flex-col items-center gap-1 text-center">
              <p className="text-[13px] font-normal leading-tight text-[rgba(38,37,101,0.8)]">
                סכום הלוואה
              </p>
              <p className="text-[17px] font-normal leading-tight text-[var(--color-primary)]">
                {formatCurrency(offer.loanAmount)}
              </p>
            </div>

            <div className="flex flex-1 min-w-[90px] flex-col items-center gap-1 text-center">
              <p className="text-[13px] font-normal leading-tight text-[rgba(38,37,101,0.8)]">
                החזר חודשי משוער
              </p>
              <p className="text-[17px] font-normal leading-tight text-[var(--color-primary)]">
                {formatCurrency(monthly)}
              </p>
            </div>

            <div className="flex flex-1 min-w-[90px] flex-col items-center justify-start gap-1 text-center">
              <p className="w-full text-center text-[13px] font-normal leading-tight text-[rgba(38,37,101,0.8)]">
                סיום ההלוואה
              </p>
              <p className="w-full text-center text-[17px] font-normal leading-tight text-[var(--color-primary)]">
                {endDateStr}
              </p>
              {onScheduleClick && (
                <button
                  type="button"
                  onClick={onScheduleClick}
                  className="mt-0.5 self-center text-[13px] font-normal text-[#3c65e3] hover:underline"
                >
                  לוח סילוקין
                </button>
              )}
            </div>
          </div>

          {/* Expanded - product breakdown (מידע נוסף) */}
          <div
            className="grid w-full transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col items-center gap-4 md:gap-5">
                {offer.productBreakdown.map((row, i) => (
                  <div
                    key={i}
                    className="flex w-full max-w-[480px] flex-wrap justify-center gap-4 md:gap-6"
                    dir="rtl"
                  >
                    <div className="flex flex-1 min-w-[90px] flex-col items-center gap-1 text-center">
                      <p className="text-[13px] font-normal leading-tight text-[rgba(38,37,101,0.8)]">
                        סוג מוצר
                      </p>
                      <p className="text-[17px] font-normal leading-tight text-[var(--color-primary)]">
                        {row.productType}
                      </p>
                    </div>

                    <div className="flex flex-1 min-w-[90px] flex-col items-center gap-1 text-center">
                      <p className="text-[13px] font-normal leading-tight text-[rgba(38,37,101,0.8)]">
                        סכום הלוואה
                      </p>
                      <p className="text-[17px] font-normal leading-tight text-[var(--color-primary)]">
                        {formatCurrency(row.amount)}
                      </p>
                    </div>

                    <div className="flex flex-1 min-w-[90px] flex-col items-center gap-1 text-center">
                      <p className="w-full text-center text-[13px] font-normal leading-tight text-[rgba(38,37,101,0.8)]">
                        סיום ההלוואה
                      </p>
                      <div className="flex w-full items-center justify-center gap-1.5" dir="rtl">
                        <p className="text-[17px] font-normal leading-tight text-[var(--color-primary)]">
                          {endDateStr}
                        </p>
                        <InfoTooltip
                          title="סיום ההלוואה"
                          body="תאריך סיום תקופת ההלוואה לכל מוצר בתמהיל."
                          iconSrc="/images/question.svg"
                          iconSize={14}
                          ariaLabel="מידע על תאריך סיום ההלוואה"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Button variant="link" onClick={onToggleExpand} className="self-center">
          {isExpanded ? "הצג פחות" : "מידע נוסף"}
        </Button>
      </div>
    </div>
  );
}