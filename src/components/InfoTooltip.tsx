"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const TOOLTIP_WIDTH = 280;
const TOOLTIP_HEIGHT_ESTIMATE = 120;
const GAP = 2;
const VIEWPORT_PADDING = 8;

type Placement = "bottom" | "top" | "right" | "left";

export interface InfoTooltipProps {
  title: string;
  body: string;
  /** Custom trigger - when provided, iconSrc and triggerVariant are ignored */
  children?: React.ReactNode;
  /** @default /images/icons/24.svg */
  iconSrc?: string;
  /** @default 24 */
  iconSize?: number;
  /** Use Status.png icon - overrides iconSrc when set */
  triggerVariant?: "default" | "status";
  ariaLabel?: string;
}

export function InfoTooltip({
  title,
  body,
  children,
  iconSrc = "/images/icons/24.svg",
  iconSize = 24,
  triggerVariant = "default",
  ariaLabel,
}: InfoTooltipProps) {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const effectiveIconSrc = triggerVariant === "status" ? "/images/Status.png" : iconSrc;
  const effectiveIconSize = triggerVariant === "status" ? 20 : iconSize;

  useLayoutEffect(() => {
    if ((!open && !isClosing) || !containerRef.current) return;
    const triggerRect = containerRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const spaceBottom = vh - triggerRect.bottom - GAP;
    const spaceTop = triggerRect.top - GAP;
    const spaceRight = vw - triggerRect.right - GAP;
    const spaceLeft = triggerRect.left - GAP;

    const fitsBottom = spaceBottom >= TOOLTIP_HEIGHT_ESTIMATE;
    const fitsTop = spaceTop >= TOOLTIP_HEIGHT_ESTIMATE;
    const fitsRight = spaceRight >= TOOLTIP_WIDTH;
    const fitsLeft = spaceLeft >= TOOLTIP_WIDTH;

    let chosen: Placement = "bottom";
    if (fitsBottom && spaceBottom >= spaceTop) chosen = "bottom";
    else if (fitsTop) chosen = "top";
    else if (fitsRight && spaceRight >= spaceLeft) chosen = "right";
    else if (fitsLeft) chosen = "left";
    else if (fitsRight) chosen = "right";
    else chosen = "bottom";

    const idealLeft = triggerRect.left + triggerRect.width / 2 - TOOLTIP_WIDTH / 2;
    const left = Math.max(
      VIEWPORT_PADDING,
      Math.min(vw - TOOLTIP_WIDTH - VIEWPORT_PADDING, idealLeft)
    );
    const idealTop = triggerRect.top + triggerRect.height / 2 - TOOLTIP_HEIGHT_ESTIMATE / 2;
    const top = Math.max(
      VIEWPORT_PADDING,
      Math.min(vh - TOOLTIP_HEIGHT_ESTIMATE - VIEWPORT_PADDING, idealTop)
    );

    let style: React.CSSProperties = { position: "fixed" };
    if (chosen === "bottom") {
      style.left = left;
      style.top = triggerRect.bottom + GAP;
    } else if (chosen === "top") {
      style.left = left;
      style.bottom = vh - triggerRect.top + GAP;
    } else if (chosen === "right") {
      style.left = triggerRect.right + GAP;
      style.top = top;
    } else {
      style.left = triggerRect.left - TOOLTIP_WIDTH - GAP;
      style.top = top;
    }
    setTooltipStyle(style);
  }, [open, isClosing]);

  const closeTooltip = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (!isClosing) return;
    const t = setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 180);
    return () => clearTimeout(t);
  }, [isClosing]);

  useEffect(() => {
    if (!open && !isClosing) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeTooltip();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, isClosing]);

  return (
    <div className="relative shrink-0" ref={containerRef}>
      {children ? (
        <button
          type="button"
          onClick={() => (open ? closeTooltip() : setOpen(true))}
          className="flex cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
          aria-label={ariaLabel ?? `מידע על ${title}`}
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => (open ? closeTooltip() : setOpen(true))}
          className="flex shrink-0 cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
          style={{ width: effectiveIconSize, height: effectiveIconSize }}
          aria-label={ariaLabel ?? `מידע על ${title}`}
        >
          <Image src={effectiveIconSrc} alt="" width={effectiveIconSize} height={effectiveIconSize} aria-hidden />
        </button>
      )}

      {(open || isClosing) && (
        <div
          dir="rtl"
          style={tooltipStyle}
          className={`z-50 w-[280px] rounded-[4px] border border-[#E1E9F3] bg-white p-4 shadow-[0px_0px_24px_0px_rgba(200,200,200,0.5)] ${
            isClosing ? "animate-tooltip-out" : "animate-tooltip-in"
          }`}
        >
          <button
            type="button"
            onClick={closeTooltip}
            className="absolute end-2 top-2 flex size-6 items-center justify-center rounded hover:bg-[#f4f8fc]"
            aria-label="סגירה"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#020140"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="flex flex-col gap-1 pt-6 text-right">
            <p className="text-[14px] font-bold text-[#262565]">{title}</p>
            <p className="text-[14px] font-normal leading-normal text-[#262565]">{body}</p>
          </div>
        </div>
      )}
    </div>
  );
}
