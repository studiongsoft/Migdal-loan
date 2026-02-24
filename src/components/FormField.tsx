"use client";

import { useState, useRef, useEffect, useId } from "react";

export interface FormFieldOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  note?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: "text" | "dropdown";
  options?: FormFieldOption[];
  className?: string;
  /** For dropdown: selected option label when value is set (optional, derived from options if not provided) */
  dropdownLabel?: string;
}

export function FormField({
  label,
  value,
  onChange,
  error,
  note,
  required = false,
  placeholder,
  disabled = false,
  type = "text",
  options = [],
  className = "",
  dropdownLabel,
}: FormFieldProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldId = useId();

  const hasValue = value.trim().length > 0;
  const selectedOption = options.find((o) => o.value === value);
  const resolvedDropdownLabel = dropdownLabel ?? selectedOption?.label ?? value;

  const isActive = isDropdownOpen || isFocused;
  const hasError = Boolean(error);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const borderClasses = hasError
    ? "border-2 border-[#ee6a5f]"
    : note
      ? "border border-[#ee6a5f]"
      : isActive
        ? "border border-[#3c65e3]"
        : "border border-[#E1E9F3]";

  const inputOrDisplay = (
    <>
      {type === "text" ? (
        <input
          id={fieldId}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={!hasValue ? placeholder ?? label : undefined}
          disabled={disabled}
          dir="rtl"
          className="flex-1 min-w-0 bg-transparent text-start text-[#020140] outline-none placeholder:font-light placeholder:text-[#666] disabled:opacity-50"
          style={{ fontSize: hasValue ? "20px" : "18px" }}
          aria-invalid={hasError}
          aria-required={required}
          aria-label={label}
        />
      ) : (
        <button
          id={fieldId}
          type="button"
          onClick={() => !disabled && setIsDropdownOpen((v) => !v)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {}}
          disabled={disabled}
          dir="rtl"
          className="flex flex-1 min-w-0 items-center justify-start gap-1 bg-transparent pe-[28px] text-start outline-none disabled:opacity-50"
          style={{ fontSize: hasValue ? "20px" : "18px" }}
          aria-expanded={isDropdownOpen}
          aria-haspopup="listbox"
          aria-label={label}
        >
          <span
            className={`truncate ${!hasValue ? "font-light text-[#666]" : "font-normal text-[#020140]"}`}
          >
            {hasValue ? resolvedDropdownLabel : placeholder ?? label}
          </span>
        </button>
      )}
    </>
  );

  return (
    <div
      ref={containerRef}
      className={`relative flex w-full min-w-0 flex-col items-start gap-[8px] ${className}`}
      dir="rtl"
    >
      <div
        className={`flex h-[60px] w-full items-center gap-[2px] rounded-[8px] border-solid bg-white px-[16px] py-3 transition-colors ${borderClasses}`}
      >
        <div
          className={`flex flex-1 min-w-0 flex-col items-start justify-center gap-[2px] ${type === "dropdown" ? "pe-[28px]" : ""}`}
        >
          {(hasValue || (hasError && type === "dropdown")) && (
            <label htmlFor={fieldId} className="flex w-full cursor-default items-center justify-start gap-1" dir="rtl">
              {required && <span className="shrink-0 text-[14px] font-light text-[#ee6a5f]">*</span>}
              <span className="text-[14px] font-light leading-normal text-[#666]">{label}</span>
            </label>
          )}
          <div
            className={`flex w-full min-w-0 items-center justify-start ${!(hasValue || (hasError && type === "dropdown")) ? "gap-1" : ""}`}
          >
            {!(hasValue || (hasError && type === "dropdown")) && required && (
              <span className="shrink-0 text-[18px] font-light text-[#ee6a5f]">*</span>
            )}
            {inputOrDisplay}
          </div>
        </div>
        {type === "dropdown" && (
          <button
            type="button"
            onClick={() => !disabled && setIsDropdownOpen((v) => !v)}
            disabled={disabled}
            className="absolute left-[12px] top-[18px] flex size-[24px] shrink-0 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={isDropdownOpen ? "סגור רשימה" : "פתח רשימה"}
          >
            <img
              src="/images/chevron.svg"
              alt=""
              width={24}
              height={24}
              className={`size-full transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        )}
      </div>

      {/* Error / Note - below the field */}
      <div className="flex min-h-[8px] w-full flex-col gap-1">
        {hasError && (
          <div
            className="flex w-full items-center justify-start gap-1 rounded-[4px] bg-[#f7e6e6] px-[8px] py-[4px]"
            dir="rtl"
            role="alert"
          >
            <img
              src="/images/ErrorRounded.svg"
              alt=""
              width={16}
              height={16}
              className="size-[16px] shrink-0"
              aria-hidden
            />
            <p className="flex-1 min-w-0 text-start text-[14px] font-normal leading-[16px] text-[#af0404]">
              {error}
            </p>
          </div>
        )}
        {note && !hasError && (
          <p className="text-start text-[14px] font-normal text-[#666]">{note}</p>
        )}
      </div>

      {/* Dropdown open list */}
      {type === "dropdown" && isDropdownOpen && options.length > 0 && (
        <div
          className="absolute inset-x-0 top-[68px] z-50 max-h-[176px] overflow-y-auto overflow-x-clip rounded-[8px] border border-[#E1E9F3] border-solid bg-white px-px py-[8px] shadow-[0px_2px_24px_0px_rgba(200,200,200,0.5)]"
          dir="rtl"
          role="listbox"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              onClick={() => {
                onChange(opt.value);
                setIsDropdownOpen(false);
                setIsFocused(false);
              }}
              className={`flex h-[40px] w-full items-center justify-start px-[16px] py-[8px] text-start text-[18px] font-light transition-colors hover:bg-[#f4f8fc] ${
                opt.value === value
                  ? "bg-[#eaf1fa] font-normal text-[#020140]"
                  : "text-[#666]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
