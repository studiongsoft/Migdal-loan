"use client";

import Image from "next/image";
import { Button } from "./Button";

interface LoanSimulatorOpeningScreenProps {
  onStart: () => void;
  onBackToHome?: () => void;
}

export function LoanSimulatorOpeningScreen({
  onStart,
  onBackToHome,
}: LoanSimulatorOpeningScreenProps) {
  return (
    <section
      className="flex min-h-screen w-full flex-col items-center bg-white px-4 md:px-0"
      dir="rtl"
    >
      {/* Main Content - centered */}
      <div className="flex w-full max-w-[948px] flex-1 flex-col items-center gap-8 pt-4 md:gap-10 md:pt-8">
        {/* כספת – מעל לקבלת הלוואה */}
        <div className="hidden md:block scale-[0.8]">
          <Image
            src="/images/Safe.png"
            alt=""
            width={350}
            height={300}
            className="object-contain"
            aria-hidden
          />
        </div>
        {/* Text Content */}
        <div className="flex w-full flex-col items-center gap-8 md:gap-[72px]">
          <div className="flex w-full flex-col items-center gap-6 md:gap-10">
            {/* Title */}
            <h1 className="text-center text-[32px] font-bold leading-[1.2] text-[var(--color-primary)] md:text-[52px] md:leading-[0.92]">
              קבלת הלוואה מהירה
            </h1>

            {/* Subtitle */}
            <p className="text-center text-[24px] font-normal leading-[1] tracking-[0.32px] text-[var(--color-primary)] md:text-[32px]">
              כנגד מוצרי החיסכון שלך במגדל
            </p>

            {/* Description 1 */}
            <p className="text-center text-[18px] font-normal leading-normal text-[var(--color-primary)] md:text-[24px] md:leading-6">
              נלווה אותך בתהליך הדיגיטלי הכי פשוט ונוח שיש!
            </p>

            {/* Description 2 */}
            <p className="text-center text-[18px] font-normal leading-normal text-[var(--color-primary)] md:text-[24px] md:leading-6">
              נגדיר את סכום ההלוואה ופרטי חשבון הבנק ונשגר את הבקשה.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex w-full flex-col items-center gap-6">
            {/* Info text */}
            <p className="max-w-[620px] text-center text-[18px] font-bold leading-normal text-[var(--color-primary)]">
              לאחר אישור, הכסף יועבר אליך תוך 4 ימי עסקים בלבד
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-4">
              <Button variant="primary" onClick={onStart}>
                הבנתי, בואו נתחיל
              </Button>
              {onBackToHome && (
                <Button variant="secondary" onClick={onBackToHome}>
                  חזרה לעמוד הבית
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
