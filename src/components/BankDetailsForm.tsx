"use client";

import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { FormField } from "./FormField";
import { ActionButtons } from "./Button";

const ISRAELI_BANKS = [
  { value: "leumi", label: "בנק לאומי" },
  { value: "hapoalim", label: "בנק הפועלים" },
  { value: "discount", label: "בנק דיסקונט" },
  { value: "mizrahi", label: "בנק מזרחי טפחות" },
  { value: "igud", label: "בנק איגוד" },
  { value: "massad", label: "בנק מסד" },
  { value: "post", label: "בנק הדואר" },
  { value: "jerusalem", label: "בנק ירושלים" },
  { value: "bezalel", label: "בנק בצלאל" },
  { value: "mercantile", label: "מרכנטיל" },
  { value: "first", label: "בנק ראשון לציון" },
  { value: "yavne", label: "בנק יבנה" },
  { value: "massaad", label: "בנק massad" },
  { value: "otsar", label: "אוצר החייל" },
];

export interface BankDetailsSubmitData {
  bankName: string;
  branchNumber: string;
  accountNumber: string;
  sameAccount: boolean;
  /** When sameAccount is false: account for collecting repayments */
  repaymentBankName?: string;
  repaymentBranchNumber?: string;
  repaymentAccountNumber?: string;
}

interface BankDetailsFormProps {
  loanAmount: number;
  loanMonths: number;
  onSubmit: (data: BankDetailsSubmitData) => void;
}

const VALIDATION_NOTE = "יש למלא את כל השדות המסומנים בכוכבית";

export function BankDetailsForm({ loanAmount, loanMonths, onSubmit }: BankDetailsFormProps) {
  const [bankName, setBankName] = useState("");
  const [branchNumber, setBranchNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [sameAccount, setSameAccount] = useState(true);
  const [repaymentBankName, setRepaymentBankName] = useState("");
  const [repaymentBranchNumber, setRepaymentBranchNumber] = useState("");
  const [repaymentAccountNumber, setRepaymentAccountNumber] = useState("");
  const [validationNote, setValidationNote] = useState<string | null>(null);

  const setBankNameWithClear = (v: string) => {
    setBankName(v);
    setValidationNote(null);
  };
  const setBranchNumberWithClear = (v: string) => {
    setBranchNumber(v);
    setValidationNote(null);
  };
  const setAccountNumberWithClear = (v: string) => {
    setAccountNumber(v);
    setValidationNote(null);
  };
  const setRepaymentBankNameWithClear = (v: string) => {
    setRepaymentBankName(v);
    setValidationNote(null);
  };
  const setRepaymentBranchNumberWithClear = (v: string) => {
    setRepaymentBranchNumber(v);
    setValidationNote(null);
  };
  const setRepaymentAccountNumberWithClear = (v: string) => {
    setRepaymentAccountNumber(v);
    setValidationNote(null);
  };

  const handleSubmit = () => {
    const isLoanAccountValid = bankName.trim() && branchNumber.trim() && accountNumber.trim();
    const isRepaymentAccountValid =
      repaymentBankName.trim() && repaymentBranchNumber.trim() && repaymentAccountNumber.trim();
    const isValid = isLoanAccountValid && (sameAccount || isRepaymentAccountValid);

    if (!isValid) {
      setValidationNote(VALIDATION_NOTE);
      return;
    }

    setValidationNote(null);
    const bankLabel = ISRAELI_BANKS.find((b) => b.value === bankName)?.label ?? bankName;
    const repaymentBankLabel = ISRAELI_BANKS.find((b) => b.value === repaymentBankName)?.label ?? repaymentBankName;
    onSubmit({
      bankName: bankLabel,
      branchNumber,
      accountNumber,
      sameAccount,
      ...(sameAccount ? {} : {
        repaymentBankName: repaymentBankLabel,
        repaymentBranchNumber,
        repaymentAccountNumber,
      }),
    });
  };

  const isLoanAccountValid = bankName.trim() && branchNumber.trim() && accountNumber.trim();
  const isRepaymentAccountValid = repaymentBankName.trim() && repaymentBranchNumber.trim() && repaymentAccountNumber.trim();
  const isValid = isLoanAccountValid && (sameAccount || isRepaymentAccountValid);
  const showErrors = validationNote !== null;

  return (
    <div dir="rtl" className="flex w-full flex-col gap-6 md:gap-[40px]">
      <div className="flex w-full max-w-[400px] flex-col items-stretch gap-6 md:gap-[40px] md:self-start">
        <div className="w-full text-start">
          <h2 className="mb-2 md:mb-4 text-[16px] md:text-[17px] font-bold text-[var(--color-primary)]">פרטי חשבון בנק</h2>
          <p className="text-[15px] md:text-[18px] font-light leading-[1.7] text-[var(--color-primary)]">
            נעביר לך את התשלום בהעברה בנקאית
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          <FormField
            label="שם הבנק"
            value={bankName}
            onChange={setBankNameWithClear}
            type="dropdown"
            options={ISRAELI_BANKS}
            placeholder="בחר בנק"
            required
            error={showErrors && !bankName.trim() ? "שדה חובה" : undefined}
            className="w-full max-w-[400px] min-w-0"
          />
          <FormField
            label="מספר סניף"
            value={branchNumber}
            onChange={setBranchNumberWithClear}
            placeholder="הכנס מספר סניף"
            required
            error={showErrors && !branchNumber.trim() ? "שדה חובה" : undefined}
            className="w-full max-w-[400px] min-w-0"
          />
          <FormField
            label="מספר חשבון"
            value={accountNumber}
            onChange={setAccountNumberWithClear}
            placeholder="הכנס מספר חשבון"
            required
            error={showErrors && !accountNumber.trim() ? "שדה חובה" : undefined}
            className="w-full max-w-[400px] min-w-0"
          />

          <label className="flex cursor-pointer items-start gap-3">
            <Checkbox
              checked={sameAccount}
              onChange={(v) => {
                setSameAccount(v);
                setValidationNote(null);
              }}
              size={20}
              className="mt-1"
            />
            <span className="text-right text-[15px] md:text-[18px] font-light leading-[1.7] text-[var(--color-primary)]">
              חשבון זהה גם להעברת כספי ההלוואה וגם לגביית ההחזרים החודשיים
            </span>
          </label>

          {!sameAccount && (
            <div className="mt-4 flex flex-col gap-2 md:gap-[8px]">
              <p className="text-right text-[15px] md:text-[18px] font-light leading-[1.7] text-[var(--color-primary)]">
                מלא את פרטי החשבון שממנו תבוצע <span className="font-bold">הגבייה</span>
              </p>
              <div className="flex flex-col gap-5 md:gap-6">
                <FormField
                  label="שם הבנק"
                  value={repaymentBankName}
                  onChange={setRepaymentBankNameWithClear}
                  type="dropdown"
                  options={ISRAELI_BANKS}
                  placeholder="בחר בנק"
                  required
                  error={showErrors && !sameAccount && !repaymentBankName.trim() ? "שדה חובה" : undefined}
                  className="w-full max-w-[400px] min-w-0"
                />
                <FormField
                  label="מספר סניף"
                  value={repaymentBranchNumber}
                  onChange={setRepaymentBranchNumberWithClear}
                  placeholder="הכנס מספר סניף"
                  required
                  error={showErrors && !sameAccount && !repaymentBranchNumber.trim() ? "שדה חובה" : undefined}
                  className="w-full max-w-[400px] min-w-0"
                />
                <FormField
                  label="מספר חשבון"
                  value={repaymentAccountNumber}
                  onChange={setRepaymentAccountNumberWithClear}
                  placeholder="הכנס מספר חשבון"
                  required
                  error={showErrors && !sameAccount && !repaymentAccountNumber.trim() ? "שדה חובה" : undefined}
                  className="w-full max-w-[400px] min-w-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex min-h-[86px] w-full min-w-0 flex-col items-center justify-center gap-4 px-4 py-4 md:px-8">
        <ActionButtons
          primaryLabel="להמשיך עם הצעה זו"
          onPrimaryClick={handleSubmit}
          primaryMinWidth="256px"
          validationNote={validationNote ?? undefined}
        />
      </div>
    </div>
  );
}
