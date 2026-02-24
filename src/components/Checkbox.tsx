"use client";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
  className?: string;
  disabled?: boolean;
  /** Accessible label when used without visible text (e.g. aria-label="אשר תנאים") */
  "aria-label"?: string;
  /** ID of element that labels the checkbox when used with aria-labelledby */
  "aria-labelledby"?: string;
}

export function Checkbox({
  checked,
  onChange,
  size = 20,
  className = "",
  disabled = false,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`flex shrink-0 items-center justify-center rounded-[3.2px] border-[0.8px] border-solid transition-[border-color,background-color,transform] duration-200 ease-out active:scale-95 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
        checked
          ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
          : "border-[#666] bg-white"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.4}
        height={size * 0.32}
        viewBox="0 0 8 6"
        fill="none"
        className={`text-white transition-[opacity,transform] duration-200 ${
          checked ? "scale-100 opacity-100" : "scale-[0.4] opacity-0"
        }`}
        style={{
          transitionTimingFunction: checked ? "cubic-bezier(0.34, 1.2, 0.64, 1)" : "ease-in",
        }}
      >
        <path
          d="M1 3L3 5L7 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
