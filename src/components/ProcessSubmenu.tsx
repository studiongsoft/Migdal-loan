"use client";

import Image from "next/image";

interface ProcessSubmenuProps {
  onBack?: () => void;
  onNewProcess: () => void;
}

export function ProcessSubmenu({ onBack, onNewProcess }: ProcessSubmenuProps) {
  return (
    <div dir="rtl" className="flex items-center justify-between gap-4 px-4 py-2 md:px-16">
      <div className="flex items-center gap-4">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="flex size-10 items-center justify-center rounded-md hover:bg-[#f4f8fc]"
            aria-label="חזור"
          >
            <Image
              src="/images/icons/Submenu/CTA/Icon Link/Mid.png"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </button>
        )}
        <button
          type="button"
          onClick={onNewProcess}
          className="flex items-center gap-2 text-[16px] font-normal text-[var(--color-primary)] hover:opacity-80"
        >
          התחל תהליך חדש
          <Image src="/images/icons/Right Icon.png" alt="" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}
