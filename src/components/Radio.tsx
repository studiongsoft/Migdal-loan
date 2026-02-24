"use client";

import { InfoTooltip } from "./InfoTooltip";

type RadioVariant = "card" | "minimal";

interface RadioProps {
  value: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  variant?: RadioVariant;
  className?: string;
  /** Optional tooltip for this option */
  tooltip?: { title: string; body: string };
}

export function Radio({
  value,
  label,
  name,
  checked,
  onChange,
  disabled = false,
  variant = "card",
  className = "",
  tooltip,
}: RadioProps) {
  const isMinimal = variant === "minimal";

  const baseClasses = "flex cursor-pointer items-center gap-2";
  const variantClasses = isMinimal
    ? "shrink-0 gap-2"
    : `flex-1 rounded-[8px] px-4 py-3 min-w-[80px] transition-[border-color,border-width,box-shadow] duration-200 ease-out active:scale-[0.99] ${
        checked
          ? "border-2 border-[var(--color-primary)] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.15)]"
          : "border border-[#E1E9F3] bg-white shadow-[0px_0px_11px_0px_rgba(0,0,0,0.08)]"
      }`;
  const disabledClasses = disabled ? "cursor-not-allowed opacity-50" : "";

  return (
    <label className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="peer sr-only"
      />
      <span
        className="flex size-4 shrink-0 items-center justify-center rounded-full border-[1.5px] border-solid transition-[border-color,background-color] duration-200 ease-out"
        style={{
          borderColor: checked ? "var(--color-primary)" : "#666",
          backgroundColor: checked ? "var(--color-primary)" : "transparent",
        }}
      >
        <span
          className={`rounded-full bg-white transition-[opacity,transform] duration-200 ${
            checked ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{
            width: 6,
            height: 6,
            transitionTimingFunction: checked ? "cubic-bezier(0.34, 1.2, 0.64, 1)" : "ease-in",
          }}
        />
      </span>
      <span
        className={`text-right text-[16px] text-[var(--color-primary)] ${isMinimal ? "whitespace-nowrap shrink-0" : "flex-1"}`}
      >
        {label}
      </span>
      {tooltip && (
        <span onClick={(e) => e.stopPropagation()} className="shrink-0">
          <InfoTooltip title={tooltip.title} body={tooltip.body} />
        </span>
      )}
    </label>
  );
}
