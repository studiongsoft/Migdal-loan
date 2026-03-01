"use client";

import Image from "next/image";
import { Popup } from "./Popup";
import { Button } from "./Button";

interface SystemErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** לחיצה על כפתור המשך */
  onContinue?: () => void;
}

export function SystemErrorModal({
  isOpen,
  onClose,
  onContinue,
}: SystemErrorModalProps) {
  const handleContinue = () => {
    onContinue?.();
    onClose();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="640px"
      closeOnBackdropClick={true}
    >
      {() => (
        <div className="flex flex-col items-center gap-8 px-0 pb-0">
          <div className="flex w-full flex-col items-center gap-8 px-8 pb-6">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/Idea Icon.svg"
                alt=""
                width={42}
                height={42}
                className="shrink-0"
                aria-hidden
              />
              <div className="flex flex-col items-center gap-4 text-center">
                <h3 className="whitespace-nowrap text-[24px] font-bold leading-normal text-[#020140] md:text-[40px]">
                  תקלת מערכת
                </h3>
                <p className="text-[18px] font-normal leading-normal text-[#020140] md:whitespace-nowrap md:text-[24px]">
                  אנחנו מתנצלים, אנחנו חווים תקלה
                </p>
                <p className="text-[18px] font-light leading-normal text-[#020140] md:whitespace-nowrap">
                  אנא נסה שוב מאוחר יותר
                </p>
              </div>
            </div>
            <Button
              variant="primary"
              onClick={handleContinue}
              className="min-w-[120px]"
            >
              המשך
            </Button>
          </div>
        </div>
      )}
    </Popup>
  );
}
