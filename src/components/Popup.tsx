"use client";

import { useCallback, useEffect, useState } from "react";

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  /** Children receive animated close function - use it for buttons that should close with animation */
  children: React.ReactNode | ((close: () => void) => React.ReactNode);
  /** Max width of the content area */
  maxWidth?: string;
  /** Clicking backdrop closes the popup */
  closeOnBackdropClick?: boolean;
}

export function Popup({
  isOpen,
  onClose,
  children,
  maxWidth = "780px",
  closeOnBackdropClick = true,
}: PopupProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
  }, []);

  const handleContentAnimationEnd = useCallback(
    (e: React.AnimationEvent) => {
      if (e.animationName.includes("popup-content-out")) {
        setIsExiting(false);
        onClose();
      }
    },
    [onClose]
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closeOnBackdropClick) handleClose();
    },
    [closeOnBackdropClick, handleClose]
  );

  useEffect(() => {
    if (!isOpen) setIsExiting(false);
  }, [isOpen]);

  if (!isOpen && !isExiting) return null;

  const exiting = isExiting;

  return (
    <div
      className={`fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-4 [animation-duration:220ms] ${
        exiting
          ? "animate-[popup-backdrop-out_220ms_ease-in_forwards]"
          : "animate-[popup-backdrop-in_220ms_ease-out_forwards]"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        dir="rtl"
        style={{ maxWidth }}
        className={`flex max-h-[90vh] w-full flex-col overflow-hidden rounded-[16px] bg-white shadow-[0px_0px_24px_0px_rgba(200,200,200,0.5)] [animation-duration:260ms] ${
          exiting
            ? "animate-[popup-content-out_260ms_ease-in_forwards]"
            : "animate-[popup-content-in_260ms_ease-out_forwards]"
        }`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleContentAnimationEnd}
      >
        <div className="flex items-center justify-end px-6 py-4">
          <button
            type="button"
            onClick={handleClose}
            className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#f4f8fc]"
            aria-label="סגירה"
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
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {typeof children === "function" ? children(handleClose) : children}
        </div>
      </div>
    </div>
  );
}
