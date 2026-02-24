"use client";

export interface SliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  formatValue?: (v: number) => string;
  className?: string;
  /** Accessible label for screen readers */
  "aria-label"?: string;
}

export function Slider({
  value,
  min,
  max,
  onChange,
  formatValue = (v) => String(v),
  className = "",
  "aria-label": ariaLabel,
}: SliderProps) {
  const percentage = max > min ? ((value - min) / (max - min)) * 100 : 0;

  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      <div className="flex justify-between text-[16px] font-bold text-[#41464c]">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
      <div className="relative h-[11px] w-full">
        <div className="absolute inset-0 rounded-full bg-[#f0f0f0]" />
        <div
          className="absolute right-0 top-0 h-full rounded-full bg-[var(--color-accent-blue)]"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={ariaLabel}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={ariaLabel ? formatValue(value) : undefined}
          className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:size-[18px] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[var(--color-accent-blue)] [&::-webkit-slider-thumb]:shadow-md"
        />
      </div>
    </div>
  );
}
