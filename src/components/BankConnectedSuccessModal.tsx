"use client";

import Image from "next/image";
import { Button } from "./Button";

interface BankConnectedSuccessModalProps {
  isOpen: boolean;
  onFinish: () => void;
  onAdd?: () => void;
}

export function BankConnectedSuccessModal({ isOpen, onFinish, onAdd }: BankConnectedSuccessModalProps) {
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
          />
        </div>

        {/* Content area – צבע חומה */}
        <div className="flex max-h-[85vh] flex-col gap-4 overflow-y-auto bg-[#f5f8fc] px-6 pb-4 pt-4">
          {/* calc.png עם קונפטי מאחורי */}
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

          {/* Title */}
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-[24px] font-bold leading-7 text-[var(--color-primary)]">
              החשבון חובר בהצלחה
            </h3>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-2 text-center text-[15px] font-light leading-5 text-[var(--color-primary)]">
            <p>החשבון חובר בהצלחה.</p>
            <p>לחיבור חשבונות נוספים יש ללחוץ ״הוסף״</p>
            <p className="pt-2">לסיום יש ללחוץ ״סיום״</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3">
            {onAdd && (
              <Button variant="secondary" onClick={onAdd} className="w-full max-w-[256px] bg-transparent">
                הוסף
              </Button>
            )}
            <Button variant="primary" onClick={onFinish}>
              סיום
            </Button>
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
