"use client";

import { Button } from "./Button";
import { HeroIllustration } from "./HeroIllustration";
import { useTransitionRouter } from "next-view-transitions";

export function HeroSection() {
  const router = useTransitionRouter();
  return (
    <section className="flex w-full flex-col items-center gap-[40px] md:gap-[40px] gap-[20px] px-[16px] md:px-0">
      {/* Illustration */}
      <div className="w-full md:w-auto flex justify-center">
        <HeroIllustration />
      </div>

      {/* Main Content */}
      <div className="flex w-[948px] md:w-[948px] w-full max-w-[342px] md:max-w-[948px] flex-col items-center gap-[72px] md:gap-[72px] gap-[32px]">
        {/* Text Content */}
        <div className="flex w-full flex-col items-center gap-[40px] md:gap-[40px] gap-[18px]">
          {/* Title and Description */}
          <div className="flex w-full flex-col items-center gap-[18px] md:gap-[40px]">
            {/* Main Title */}
            <div className="w-full">
              <h1 className="text-center text-[52px] md:text-[52px] text-[32px] font-bold leading-[1.3] md:leading-[0.92] text-[var(--color-primary)]">
                רוצה למשוך כספים מקופת הקשת?
              </h1>
            </div>

            {/* Description */}
            <div className="flex w-full flex-col items-center">
              <p className="text-center text-[24px] md:text-[24px] text-[24px] font-normal leading-[24px] text-[var(--color-primary)]">
                נגדיר את סכום המשיכה ופרטי חשבון הבנק ונשגר את הבקשה.
              </p>
            </div>

            {/* Subtitle */}
            <div className="w-full">
              <p className="text-center text-[32px] md:text-[32px] text-[17px] font-normal leading-[23px] md:leading-[1] tracking-[0.32px] md:tracking-[0.32px] tracking-[0] text-[var(--color-primary)]">
                נלווה אותך בתהליך הדיגיטלי הכי פשוט ונוח שיש!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex w-full flex-col items-center gap-[24px] md:gap-[24px] gap-0">
          {/* Info text */}
          <div className="w-[620px] md:w-[620px] w-full max-w-[282px] md:max-w-[620px]">
          <p className="text-center text-[18px] font-bold leading-[normal] text-[var(--color-primary)]">
              לאחר אישור, הכסף יועבר אליך תוך 4 ימי עסקים בלבד
            </p>
          </div>

          {/* Buttons - Keep same size on mobile */}
          <div className="flex w-[948px] md:w-[948px] w-full items-center justify-center gap-[16px] md:gap-[16px] gap-[17px] flex-col md:flex-row">
            
            <Button variant="primary" onClick={() => router.push("/chat")}>הבנתי, בואו נתחיל</Button>
            <Button variant="secondary">חזרה לעמוד הבית</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
