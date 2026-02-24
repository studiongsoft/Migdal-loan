"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./Button";

interface OpenFinanceConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
  /** Called when user finishes the full flow (clicks סיום) */
  onFinish: () => void;
  /** When true, shows "הוסף" button on success screen to add another account */
  onAdd?: () => void;
}

type SlideIndex = 0 | 1 | 2;

export function OpenFinanceConnectModal({
  isOpen,
  onClose,
  onStart,
  onFinish,
  onAdd,
}: OpenFinanceConnectModalProps) {
  const [slide, setSlide] = useState<SlideIndex>(0);

  useEffect(() => {
    if (isOpen) setSlide(0);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStart = () => {
    setSlide(1);
    onStart();
  };

  const handleBeforeContinue = () => {
    setSlide(2);
  };

  const handleFinish = () => {
    onFinish();
    onClose();
  };

  const handleAdd = () => {
    setSlide(0);
    onAdd?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        dir="rtl"
        className="relative w-full max-w-[390px] overflow-hidden rounded-[7px] bg-white shadow-[0px_0px_24px_0px_rgba(200,200,200,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header – איור חומה */}
        <div className="relative h-[48px] w-full shrink-0 overflow-hidden">
          <Image
            src="/images/popspecialback.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
            aria-hidden
          />
        </div>

        {/* Slider content – מעבר חלק בין המסכים. dir=ltr כדי שנראה את המסך הראשון (שמאלי) ולא את האחרון */}
        <div dir="ltr" className="relative overflow-hidden bg-[#f5f8fc]">
          <div
            className="flex w-full flex-row transition-transform duration-300 ease-out"
            dir="ltr"
            style={{
              width: "300%",
              transform: `translateX(${(-slide * 100) / 3}%)`,
            }}
          >
            {/* Slide 0: אישור הלוואה מהיר / Open Finance */}
            <div dir="rtl" className="flex w-1/3 shrink-0 flex-col gap-4 overflow-y-auto px-4 pb-4 pt-4">
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-[24px] font-bold leading-7 text-[var(--color-primary)]">
                  אישור הלוואה מהיר
                </h3>
                <p className="text-[17px] font-light leading-[23px] text-[var(--color-primary)]">
                  Open Finance מבקשת להתחבר אל חשבונך
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-[9px]">
                  <div className="size-[42px] shrink-0">
                    <Image
                      src="/images/card.png"
                      alt=""
                      width={42}
                      height={42}
                      className="size-full object-contain"
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-[15px] font-bold leading-5 tracking-[0.3px] text-[var(--color-primary)]">
                      התחבר ללא מאמץ!
                    </p>
                    <p className="text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]">
                      Open-Finance.ai
                    </p>
                    <p className="text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]">
                      מאפשרת לך לחבר את החשבונות הפיננסים שלך בדרך מאובטחת
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[9px]">
                  <div className="size-[42px] shrink-0">
                    <Image
                      src="/images/eye.png"
                      alt=""
                      width={42}
                      height={42}
                      className="size-full object-contain"
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-[15px] font-bold leading-5 tracking-[0.3px] text-[var(--color-primary)]">
                      המידע שלך שייך רק לך!
                    </p>
                    <p className="text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]">
                      Open-Finance.ai
                    </p>
                    <p className="text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]">
                      לא מוכרת מידע אישי, ותעשה במידע שימוש רק ברשותך
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]">
                בלחיצה על התחל אתם מסכימים
                <button
                  type="button"
                  className="text-[#3369FF] underline hover:opacity-80"
                  onClick={(e) => e.stopPropagation()}
                >
                  למדיניות הפרטיות ותנאי השימוש
                </button>
              </p>

              <div className="flex justify-center">
                <Button variant="primary" onClick={handleStart} className="h-[46px] w-[256px] px-4 py-3 text-[17px]">
                  התחל
                </Button>
              </div>

              <div className="relative mx-auto mt-2 h-[150px] w-[150px]">
                <Image
                  src="/images/bankimage.png"
                  alt=""
                  width={150}
                  height={150}
                  className="h-full w-auto object-contain"
                  aria-hidden
                />
              </div>
            </div>

            {/* Slide 1: לפני שממשיכים */}
            <div dir="rtl" className="flex w-1/3 shrink-0 flex-col gap-4 overflow-y-auto px-6 pb-4 pt-4">
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-[24px] font-bold leading-7 text-[var(--color-primary)]">
                  לפני שממשיכים
                </h3>
                <p className="text-[17px] font-light leading-[23px] text-[var(--color-primary)]">
                  הסבר קצר
                </p>
              </div>

              <div className="flex flex-col gap-3 text-right">
                <div>
                  <p className="text-[15px] font-bold text-[var(--color-primary)]">1. עוברים אתר</p>
                  <p className="text-[15px] font-light leading-5 text-[var(--color-primary)]">
                    במידה וכרגע אתה מחובר מהמחשב, תועבר בשלב הבא לאתר של ספק המידע שבחרת. במידה ואתה מהנייד
                    והאפליקציה מותקנת אצלך, תועבר לאפליקציה. אם לא, לאתר
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[var(--color-primary)]">2. התחברות לחשבון</p>
                  <p className="text-[15px] font-light leading-5 text-[var(--color-primary)]">
                    אם אינך מצליח להתחבר לחשבונך, אנא נסה לצאת מהאפליקציה ולהכנס אליה עצמאית לפני שאתה מתקדם
                    משלב זה
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[var(--color-primary)]">3. וודא הרשאות</p>
                  <p className="text-[15px] font-light leading-5 text-[var(--color-primary)]">
                    אם בסוף ההתחברות קיבלת שגיאה כללית בבנק שלא מאפשרת לך להמשיך, אנא וודא באפליקציה או דרך בנקאי
                    שקיימת לך הרשאה לביצוע פעולות בדיגיטל
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="primary" onClick={handleBeforeContinue}>
                  הבנתי! בואו נמשיך
                </Button>
              </div>

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

            {/* Slide 2: החשבון חובר בהצלחה */}
            <div dir="rtl" className="flex w-1/3 shrink-0 flex-col gap-4 overflow-y-auto px-6 pb-4 pt-4">
              <div className="relative mx-auto flex h-[150px] w-[150px] min-w-[150px] items-center justify-center overflow-visible">
                <div className="absolute inset-0 flex items-center justify-center opacity-90">
                  <Image
                    src="/images/open-finance/Confetti.gif"
                    alt=""
                    width={150}
                    height={150}
                    className="object-contain"
                    unoptimized
                    aria-hidden
                  />
                </div>
                <div className="relative z-10">
                  <Image
                    src="/images/calc.png"
                    alt=""
                    width={60}
                    height={60}
                    className="object-contain"
                    aria-hidden
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-[24px] font-bold leading-7 text-[var(--color-primary)]">
                  החשבון חובר בהצלחה
                </h3>
              </div>

              <div className="flex flex-col gap-2 text-center text-[15px] font-light leading-5 text-[var(--color-primary)]">
                <p>החשבון חובר בהצלחה.</p>
                <p>לחיבור חשבונות נוספים יש ללחוץ ״הוסף״</p>
                <p className="pt-2">לסיום יש ללחוץ ״סיום״</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                {onAdd && (
                  <Button variant="secondary" onClick={handleAdd} className="w-full max-w-[256px] bg-transparent">
                    הוסף
                  </Button>
                )}
                <Button variant="primary" onClick={handleFinish}>
                  סיום
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
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
