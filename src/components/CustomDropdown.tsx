"use client";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  maxWidth?: number;
}

export function CustomDropdown({
  options,
  value,
  onChange,
  label,
  placeholder = "בחר",
  maxWidth = 400,
}: CustomDropdownProps) {
  return (
    <div className="flex flex-col gap-2" dir="rtl" style={{ maxWidth }}>
      <label className="text-right text-[14px] font-normal text-[#5E5D9A]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[4px] border border-[#E1E9F3] bg-white px-4 py-3 text-right text-[16px] text-[var(--color-primary)] outline-none"
        dir="rtl"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
