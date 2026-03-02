"use client";

import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function Home() {
  const router = useTransitionRouter();

  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gradient-to-b from-[#f8fafc] to-white px-4 py-12"
    >
      {/* לוגו מגדל קטן בפינה */}
      <div className="absolute start-4 top-4 z-10 flex shrink-0">
        <Image
          src="/images/logo.svg"
          alt="מגדל"
          width={70}
          height={25}
          className="object-contain"
        />
      </div>
      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] md:text-3xl">
          תרחישים
        </h1>
        <p className="mt-2 text-[15px] font-normal text-[var(--color-muted)]">
          בחר תרחיש לבדיקה
        </p>
        <a
          href="http://localhost:6006"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-[14px] text-[#3c65e3] underline hover:opacity-80"
        >
          Storybook
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* 2 columns */}
      <div className="flex w-full max-w-[820px] flex-col gap-10 md:flex-row md:gap-16">
        {/* עמודה שמאלית – פדיון קשת */}
        <section className="flex min-w-0 flex-1 flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:min-w-[320px] md:p-8">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-[var(--color-primary)]">פדיון קשת</h2>
            <p className="mt-1 text-[13px] text-[var(--color-muted)]">
              (עוד לא מוכן – עדיין בתהליך)
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2.5">
            <Button
              variant="secondary"
              onClick={() => router.push("/keshet-redemption")}
              className="w-full justify-center px-5 py-2.5 text-[15px]"
            >
              משיכה רגילה
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/keshet-redemption?fundScenario=one-loan")}
              className="w-full justify-center whitespace-nowrap px-5 py-2.5 text-[15px]"
            >
              קיימת הלוואה על קופה אחת
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/keshet-redemption?fundScenario=two-loans")}
              className="w-full justify-center whitespace-nowrap px-5 py-2.5 text-[15px]"
            >
              קיימת הלוואה על 2 קופות
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/keshet-redemption?scenario=no-balance")}
              className="w-full justify-center px-5 py-2.5 text-[15px]"
            >
              אין יתרה למשיכה
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/keshet-redemption?scenario=system-error")}
              className="w-full justify-center px-5 py-2.5 text-[15px]"
            >
              תקלת מערכת
            </Button>
          </div>
        </section>

        {/* עמודה ימנית – סימולטור הלוואות */}
        <section className="flex min-w-0 flex-1 flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:min-w-[320px] md:p-8">
          <h2 className="mb-5 text-lg font-bold text-[var(--color-primary)]">סימולטור הלוואות</h2>
          <div className="flex flex-col items-stretch gap-2.5">
            <Button
              variant="secondary"
              onClick={() => router.push("/loan-simulator?scenario=multi-accounts")}
              className="w-full justify-center px-5 py-2.5 text-[15px]"
            >
              מספר חשבונות
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/loan-simulator?scenario=single-account")}
              className="w-full justify-center px-5 py-2.5 text-[15px]"
            >
              חשבון אחד
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/loan-simulator?scenario=no-accounts")}
              className="w-full justify-center px-5 py-2.5 text-[15px]"
            >
              אין חשבונות
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/loan-simulator?scenario=system-error")}
              className="w-full justify-center px-5 py-2.5 text-[15px]"
            >
              תקלת מערכת
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
