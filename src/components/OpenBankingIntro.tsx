"use client";

import Image from "next/image";
import { ActionButtons } from "./Button";

interface OpenBankingIntroProps {
  loanAmount: number;
  loanMonths: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export function OpenBankingIntro({ loanAmount, loanMonths, onConfirm, onCancel }: OpenBankingIntroProps) {
  const formatCurrency = (v: number) => new Intl.NumberFormat("he-IL").format(v) + " ₪";
  const formatMonths = (v: number) => v + " חודשים";

  return (
    <div dir="rtl" className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 rounded-[12px] bg-white p-6 md:p-8">
        <div className="flex flex-col items-center gap-6">
          <Image src="/images/treasur 1.png" alt="" width={360} height={280} className="h-[200px] w-[280px] object-contain md:h-[280px] md:w-[360px]" />
          <div className="flex max-w-[665px] flex-col items-center gap-2 text-center">
            <p className="text-[20px] font-normal leading-normal text-[var(--color-primary)]">
              מהיום אנו מאפשרים לך לקבל הלוואה דיגיטלית ללא צורך במילוי פרטים ומסמכים,
            </p>
            <p className="text-[24px] font-bold text-[var(--color-primary)]">איך אנחנו עושים את זה?</p>
            <p className="text-[20px] font-normal leading-normal text-[var(--color-primary)]">פשוט מאוד!</p>
            <p className="text-[20px] font-normal leading-normal text-[var(--color-primary)]">
              בלחיצה על כפתור ״מאשר״ נעביר אותך לשירות בנקאות פתוחה של Open Finance ודרכם נקבל מהבנק שלך רק
              את הפרטים הנחוצים לנו כדי לאשר את ההלוואה במהירות.
            </p>
          </div>
        </div>

        <ActionButtons
          primaryLabel="מאשר"
          onPrimaryClick={onConfirm}
          secondaryLabel="ביטול"
          onSecondaryClick={onCancel}
          primaryMinWidth="180px"
        />
      </div>
    </div>
  );
}
