"use client";

import Image from "next/image";
import { Button } from "./Button";

interface CompletionScreenProps {
  loanAmount: number;
  loanMonths: number;
  monthlyPayment?: number;
  onPersonalArea?: () => void;
  onDownloadForm?: () => void;
  onAmortizationSchedule?: () => void;
  onAnotherLoan?: () => void;
  /** @deprecated Use onAnotherLoan instead */
  onNewProcess?: () => void;
}

export function CompletionScreen({
  loanAmount,
  loanMonths,
  monthlyPayment = 0,
  onPersonalArea,
  onDownloadForm,
  onAmortizationSchedule,
  onAnotherLoan,
  onNewProcess,
}: CompletionScreenProps) {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-12">
      {/* Main content - centered, no border/shadow */}
      <div className="flex max-w-[665px] flex-col items-center gap-8 text-center">
        <Image
          src="/images/Envelope animation.png"
          alt=""
          width={128}
          height={128}
          className="object-contain"
          aria-hidden
        />
        <h2 className="text-[32px] font-bold text-[var(--color-primary)] md:text-[40px]">
          זהו, סיימנו
        </h2>
        <p className="max-w-[600px] text-[18px] font-normal leading-[1.6] text-[var(--color-primary)]">
          ההלוואה תכנס לחשבונך ב-3 ימי העסקים הקרובים. חשוב! ההלוואה תועבר במידה וכל הנתונים
          שהזנת נכונים. במידה שניתקל בבעיה בהפקת ההלוואה, נדאג לעדכנך ב-sms
        </p>

        <div className="flex flex-col items-center gap-4 text-[18px] font-normal text-[var(--color-primary)]">
          {onDownloadForm && (
            <p>
              להורדת טופס הבקשה לחץ{" "}
              <button
                type="button"
                onClick={onDownloadForm}
                className="font-medium text-[#3c65e3] hover:underline"
              >
                כאן
              </button>
            </p>
          )}
          {onAmortizationSchedule && (
            <p>
              ללוח סילוקין לחץ{" "}
              <button
                type="button"
                onClick={onAmortizationSchedule}
                className="font-medium text-[#3c65e3] hover:underline"
              >
                כאן
              </button>
            </p>
          )}
        </div>

        {onPersonalArea && (
          <Button
            variant="primary"
            onClick={onPersonalArea}
            className="min-w-[200px]"
          >
            לאיזור האישי
          </Button>
        )}
      </div>

      {/* Bottom section - need another loan */}
      {(onAnotherLoan || onNewProcess) && (
        <div className="mt-6 flex w-full max-w-[665px] flex-col items-center gap-[40px] md:flex-row md:items-start md:gap-[40px]">
          <div className="flex shrink-0 order-2 md:order-1">
            <Image
              src="/images/man.png"
              alt=""
              width={200}
              height={180}
              className="object-contain"
              aria-hidden
            />
          </div>
          <div className="flex flex-1 min-w-0 flex-col items-center gap-4 p-6 text-center md:order-2 md:items-start md:text-right">
            <h3 className="text-[24px] font-bold text-[var(--color-primary)]">
              צריך הלוואה נוספת?
            </h3>
            <p className="text-[18px] font-normal leading-[1.6] text-[var(--color-primary)]">
              יש לנו שיתוף פעולה שיכול לעזור לך
            </p>
            <Button
              variant="secondary"
              onClick={onAnotherLoan ?? onNewProcess}
              className="min-w-[200px]"
            >
              להלוואה נוספת
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
