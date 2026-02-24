"use client";

import { useState } from "react";
import { ActionButtons } from "./Button";
import { Checkbox } from "./Checkbox";
import { FileUploadSlot } from "./FileUploadSlot";
import { Signature } from "./Signature";

interface DocumentsAndSignaturesProps {
  loanAmount: number;
  loanMonths: number;
  monthlyPayment: number;
  productType?: string;
  interestRate?: string;
  loanType?: string;
  onTermsClick: () => void;
  onFinish: () => void;
}

function ClickableHere({ onClick, label }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      aria-label={label ?? "למידע נוסף על פרטיות ולחץ כאן"}
      className="inline text-[#3369FF] underline hover:opacity-80"
    >
      כאן
    </button>
  );
}

const DECLARATION_1_PARTS = {
  before1: "קראתי את הצהרת המבוטח ואני מאשר/ת ומסכימ/ה לאמור בהן המידע נמסר מרצונך ובהסכמתך וישמש למטרות המפורטות ",
  after1: ", כדי ללמוד עוד על פרטיותך יש ללחוץ ",
};

const DECLARATION_2_PARTS = {
  before: "קראתי והסכמתי שלא תינתן הלוואה לעמית אם קיימים עיכולים/שעבודים בחשבון, או בהחזרי תכנית קודמת כהשתלמות (עד 68% בראיית נזילות מלא) במסלולים סגורים הלוואת הינה עד 78% מיתרת רכיב התגמולים בניכוי זכאות חוסך או מיתרת רכיב החשבון והעדכנית בניכוי השתלמות ",
};

export function DocumentsAndSignatures({
  loanAmount,
  loanMonths,
  monthlyPayment,
  productType = "גמל",
  interestRate = "2%",
  loanType = "שפיצר",
  onTermsClick,
  onFinish,
}: DocumentsAndSignaturesProps) {
  const [declaration1, setDeclaration1] = useState(false);
  const [declaration2, setDeclaration2] = useState(false);
  const [signature, setSignature] = useState("");
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [validationNote, setValidationNote] = useState<string | null>(null);

  const formatCurrency = (v: number) => new Intl.NumberFormat("he-IL").format(v) + " ₪";
  const formatMonths = (v: number) => v + " חודשים";

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + loanMonths);
  const startDate = new Date();
  const canFinish = declaration1 && declaration2 && signature.trim().length > 0 && file1 && file2;
  const showErrors = validationNote !== null;

  const handleFinish = () => {
    if (!canFinish) {
      setValidationNote("יש למלא את כל השדות המסומנים בכוכבית");
      return;
    }
    setValidationNote(null);
    onFinish();
  };

  const clearValidation = () => setValidationNote(null);

  return (
    <div dir="rtl" className="flex flex-col gap-8">
      <div className="flex flex-wrap items-start justify-center gap-x-3 gap-y-4 md:flex-nowrap" dir="rtl">
        <div className="flex min-w-0 shrink-0 flex-col items-center px-1">
          <p className="whitespace-nowrap text-center text-[14px] font-normal text-[rgba(38,37,101,0.8)]">החזר חודשי משוער</p>
          <p className="text-center text-[18px] font-normal text-[var(--color-primary)]">{formatCurrency(monthlyPayment)}</p>
        </div>
        <div className="flex min-w-0 shrink-0 flex-col items-center px-1">
          <p className="whitespace-nowrap text-center text-[14px] font-normal text-[rgba(38,37,101,0.8)]">סיום ההלוואה</p>
          <p className="text-center text-[18px] font-normal text-[var(--color-primary)]">{endDate.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "2-digit" }).replace(/\u200f/g, "")}</p>
        </div>
        <div className="flex min-w-0 shrink-0 flex-col items-center px-1">
          <p className="whitespace-nowrap text-center text-[14px] font-normal text-[rgba(38,37,101,0.8)]">תאריך תחילת תשלום</p>
          <p className="text-center text-[18px] font-normal text-[var(--color-primary)]">{startDate.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "2-digit" }).replace(/\u200f/g, "")}</p>
        </div>
        <div className="flex min-w-0 shrink-0 flex-col items-center px-1">
          <p className="whitespace-nowrap text-center text-[14px] font-normal text-[rgba(38,37,101,0.8)]">סוג מוצר</p>
          <p className="text-center text-[18px] font-normal text-[var(--color-primary)]">{productType}</p>
        </div>
        <div className="flex min-w-0 shrink-0 flex-col items-center px-1">
          <p className="whitespace-nowrap text-center text-[14px] font-normal text-[rgba(38,37,101,0.8)]">סכום הלוואה</p>
          <p className="text-center text-[18px] font-normal text-[var(--color-primary)]">{formatCurrency(loanAmount)}</p>
        </div>
        <div className="flex min-w-0 shrink-0 flex-col items-center px-1">
          <p className="whitespace-nowrap text-center text-[14px] font-normal text-[rgba(38,37,101,0.8)]">ריבית</p>
          <p className="text-center text-[18px] font-normal text-[var(--color-primary)]">{interestRate}</p>
        </div>
        <div className="flex min-w-0 shrink-0 flex-col items-center px-1">
          <p className="whitespace-nowrap text-center text-[14px] font-normal text-[rgba(38,37,101,0.8)]">סוג הלוואה</p>
          <p className="text-center text-[18px] font-normal text-[var(--color-primary)]">{loanType}</p>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-right text-[18px] font-bold text-[var(--color-primary)]">העלאת מסמכים</h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <FileUploadSlot
            label="דוח נתוני אשראי מבנק ישראל"
            value={file1}
            onChange={(f) => {
              setFile1(f);
              clearValidation();
            }}
            maxSizeMb={8}
            error={showErrors && !file1 ? "שדה חובה" : undefined}
          />
          <FileUploadSlot
            label="הרשאת ניהול חשבון *"
            value={file2}
            onChange={(f) => {
              setFile2(f);
              clearValidation();
            }}
            maxSizeMb={8}
            error={showErrors && !file2 ? "שדה חובה" : undefined}
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-right text-[18px] font-bold text-[var(--color-primary)]">חתימות</h3>
        <div className="flex flex-col gap-4">
          <div className={showErrors && !declaration1 ? "rounded-[8px] border-2 border-[#ee6a5f] p-3" : ""}>
            <label className="flex cursor-pointer items-start gap-3">
              <Checkbox
                checked={declaration1}
                onChange={(v) => {
                  setDeclaration1(v);
                  clearValidation();
                }}
                size={20}
                className="mt-1"
              />
              <span className="text-right text-[16px] font-normal leading-[1.7] text-[var(--color-primary)]">
                {DECLARATION_1_PARTS.before1}
                <ClickableHere onClick={onTermsClick} label="למד עוד על פרטיותך" />
                {DECLARATION_1_PARTS.after1}
                <ClickableHere onClick={onTermsClick} label="למד עוד על פרטיותך" />
              </span>
            </label>
          </div>
          <div className={showErrors && !declaration2 ? "rounded-[8px] border-2 border-[#ee6a5f] p-3" : ""}>
            <label className="flex cursor-pointer items-start gap-3">
              <Checkbox
                checked={declaration2}
                onChange={(v) => {
                  setDeclaration2(v);
                  clearValidation();
                }}
                size={20}
                className="mt-1"
              />
              <span className="text-right text-[16px] font-normal leading-[1.7] text-[var(--color-primary)]">
                {DECLARATION_2_PARTS.before}
                <ClickableHere onClick={onTermsClick} label="לקריאת התנאים" />
              </span>
            </label>
          </div>
        </div>
      </div>

      <Signature
        value={signature}
        onChange={(v) => {
          setSignature(v);
          clearValidation();
        }}
        className="w-full min-w-0 max-w-[349px]"
        error={showErrors && !signature.trim() ? "שדה חובה" : undefined}
      />

      <ActionButtons
        primaryLabel="סיום"
        onPrimaryClick={handleFinish}
        primaryMinWidth="200px"
        validationNote={validationNote ?? undefined}
      />
    </div>
  );
}
