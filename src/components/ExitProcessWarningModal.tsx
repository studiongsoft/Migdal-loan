"use client";

import Image from "next/image";
import { Popup } from "./Popup";
import { Button } from "./Button";

interface ExitProcessWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** לחיצה על הכפתור הראשי – מאשר יציאה (למשל התנתקות/חזרה לדף הבית) */
  onConfirm: () => void;
}

export function ExitProcessWarningModal({
  isOpen,
  onClose,
  onConfirm,
}: ExitProcessWarningModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="640px"
      closeOnBackdropClick={true}
    >
      {(handleClose) => (
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
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="whitespace-nowrap text-[24px] font-bold leading-normal text-[#020140] md:text-[40px]">
                  כל מה שעשית יישמר לחודש
                </h3>
                <p className="text-center text-[18px] font-light leading-normal text-[#020140] md:whitespace-nowrap md:text-[20px]">
                  התהליך שלך יישמר למשך 30 יום, אפשר לחזור אליו דרך &quot;תהליכים שלא סיימתי&quot;
                </p>
              </div>
            </div>
            <Button
              variant="primary"
              onClick={handleConfirm}
              className="min-w-[256px]"
            >
              הבנתי, תודה
            </Button>
          </div>
        </div>
      )}
    </Popup>
  );
}
