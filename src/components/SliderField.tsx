"use client";

import { useId, useRef, useState } from "react";
import { Slider } from "./Slider";

export type SliderFieldVariant = "currency" | "months";

export interface SliderFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  variant: SliderFieldVariant;
  hint?: string;
  className?: string;
}

const currencyConfig = {
  formatDisplay: (v: number) => new Intl.NumberFormat("he-IL").format(v),
  formatSlider: (v: number) => new Intl.NumberFormat("he-IL").format(v) + " ₪",
  suffix: "₪",
  minInputWidthCh: 28,
  inputChPadding: 8,
};

const monthsConfig = {
  formatDisplay: (v: number) => String(v),
  formatSlider: (v: number) => String(v),
  suffix: "חודשים",
  inputChPadding: 8,
};

const defaultConfig = { currency: currencyConfig, months: monthsConfig };

export function SliderField({
  label,
  value,
  min,
  max,
  onChange,
  variant,
  hint,
  className = "",
}: SliderFieldProps) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const fieldId = useId();

  const config = defaultConfig[variant];

  const displayValue = editing ? inputValue : config.formatDisplay(value ?? min);
  const inputWidthCh =
    variant === "currency"
      ? Math.max(currencyConfig.minInputWidthCh, displayValue.length + currencyConfig.inputChPadding)
      : variant === "months"
        ? Math.max(14, displayValue.length + monthsConfig.inputChPadding)
        : 28;

  const handleFocus = () => {
    setEditing(true);
    setInputValue(String(value));
  };

  const handleBlur = () => {
    setEditing(false);
    const raw = inputValue.replace(/\D/g, "");
    const num = raw === "" ? min : parseInt(raw, 10);
    const clamped = Math.min(max, Math.max(min, isNaN(num) ? min : num));
    onChange(clamped);
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    setInputValue(raw);
    const num = raw === "" ? min : parseInt(raw, 10);
    if (!isNaN(num)) {
      onChange(Math.min(max, num));
    }
  };

  return (
    <div className={`flex w-full flex-col items-center gap-2 ${className}`}>
      <label
        htmlFor={fieldId}
        className={`text-[18px] text-[var(--color-primary-light)] ${variant === "currency" || variant === "months" ? "font-bold" : "font-normal"}`}
      >
        {label}
      </label>
      <div
        dir="rtl"
        onClick={() => inputRef.current?.focus()}
        className="flex h-[55px] min-w-[14ch] cursor-text items-center justify-center gap-2 border-b border-dashed border-black px-4"
        style={{ width: `${inputWidthCh}ch` }}
      >
        <input
          id={fieldId}
          ref={inputRef}
          type="text"
          inputMode="numeric"
          value={displayValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label={label}
          className="min-w-[4ch] flex-1 border-none bg-transparent text-center text-[28px] font-bold text-[#232873] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span className="shrink-0 text-[28px] font-bold text-[#232873]">
          {config.suffix}
        </span>
      </div>
      <div className="mt-[30px] w-full">
        <Slider
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          formatValue={config.formatSlider}
          aria-label={label}
        />
      </div>
      {hint && (
        <p className="text-[18px] font-normal text-[var(--color-primary)]">
          {hint}
        </p>
      )}
    </div>
  );
}
