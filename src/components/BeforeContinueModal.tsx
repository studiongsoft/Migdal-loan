"use client";

import Image from "next/image";
import { Button } from "./Button";

interface BeforeContinueModalProps {
  isOpen: boolean;
  onFinish: () => void;
}

export function BeforeContinueModal({ isOpen, onFinish }: BeforeContinueModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-4"
      onClick={onFinish}
    >
      <div
        role="dialog"
        aria-modal="true"
        dir="rtl"
        className="relative w-full max-w-[390px] overflow-hidden rounded-[7px] bg-white shadow-[0px_0px_24px_0px_rgba(200,200,200,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* איור חומה – חלק עליון */}
        <div className="relative h-[48px] w-full overflow-hidden">
          <Image
            src="/images/popspecialback.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
            aria-hidden
          />
        </div>

        {/* Content area – צבע חומה */}
        <div className="flex max-h-[85vh] flex-col gap-4 overflow-y-auto bg-[#f5f8fc] px-6 pb-4 pt-4">
          {/* Title & subtitle */}
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-[24px] font-bold leading-7 text-[var(--color-primary)]">
              לפני שממשיכים
            </h3>
            <p className="text-[17px] font-light leading-[23px] text-[var(--color-primary)]">
              הסבר קצר
            </p>
          </div>

          {/* Numbered points */}
          <div className="flex flex-col gap-3 text-right">
            <div>
              <p className="text-[15px] font-bold text-[var(--color-primary)]">1. עוברים אתר</p>
              <p className="text-[15px] font-light leading-5 text-[var(--color-primary)]">
                במידה וכרגע אתה מחובר מהמחשב, תועבר בשלב הבא לאתר של ספק המידע שבחרת. במידה ואתה מהנייד והאפליקציה מותקנת אצלך, תועבר לאפליקציה. אם לא, לאתר
              </p>
            </div>
            <div>
              <p className="text-[15px] font-bold text-[var(--color-primary)]">2. התחברות לחשבון</p>
              <p className="text-[15px] font-light leading-5 text-[var(--color-primary)]">
                אם אינך מצליח להתחבר לחשבונך, אנא נסה לצאת מהאפליקציה ולהכנס אליה עצמאית לפני שאתה מתקדם משלב זה
              </p>
            </div>
            <div>
              <p className="text-[15px] font-bold text-[var(--color-primary)]">3. וודא הרשאות</p>
              <p className="text-[15px] font-light leading-5 text-[var(--color-primary)]">
                אם בסוף ההתחברות קיבלת שגיאה כללית בבנק שלא מאפשרת לך להמשיך, אנא וודא באפליקציה או דרך בנקאי שקיימת לך הרשאה לביצוע פעולות בדיגיטל
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button variant="primary" onClick={onFinish}>
              הבנתי! בואו נמשיך
            </Button>
          </div>

          {/* Illustration - holdcup */}
          <div className="relative mx-auto mt-2 h-[150px] w-[150px]">
            <Image
              src="/images/holdcup.png"
              alt=""
              width={150}
              height={150}
              className="h-full w-auto object-contain"
              aria-hidden
            />
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onFinish}
          className="absolute end-4 top-4 z-10 flex size-8 shrink-0 items-center justify-center rounded hover:bg-white/80"
          aria-label="סגור"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#020140"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
