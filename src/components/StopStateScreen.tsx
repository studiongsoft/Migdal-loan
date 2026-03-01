"use client";

import Image from "next/image";
import { Button } from "./Button";

export interface StopStateButton {
  label: string;
  onClick: () => void;
}

interface StopStateScreenProps {
  title: string;
  subtitle: string;
  primaryButton?: StopStateButton;
  secondaryButton?: StopStateButton;
}

export function StopStateScreen({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
}: StopStateScreenProps) {
  const hasButtons = primaryButton || secondaryButton;

  return (
    <div dir="rtl" className="flex flex-col items-center gap-12">
      <div className="flex max-w-[665px] flex-col items-center gap-8 text-center">
        <Image
          src="/images/stop.png"
          alt=""
          width={225}
          height={347}
          className="object-contain"
          aria-hidden
        />
        <h2 className="text-[32px] font-bold leading-[1.3] text-black md:text-[40px] lg:text-[52px]">
          {title}
        </h2>
        <p className="max-w-[600px] text-[18px] font-light leading-[1.3] text-black md:text-[24px]">
          {subtitle}
        </p>
        {hasButtons && (
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-[40px]">
            {primaryButton && (
              <Button
                variant="primary"
                onClick={primaryButton.onClick}
                className="min-w-[256px]"
              >
                {primaryButton.label}
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant="secondary"
                onClick={secondaryButton.onClick}
                className="min-w-[256px]"
              >
                {secondaryButton.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
