"use client";

interface SignatureProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

function DeleteIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 4l-8 8h5v8h6v-8h5l-8-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Signature({
  value,
  onChange,
  placeholder = "יש לחתום כאן",
  className = "",
  error,
}: SignatureProps) {
  const hasSignature = value.trim().length > 0;

  return (
    <div dir="rtl" className={`flex w-full min-w-0 max-w-[352px] flex-col gap-2 ${className}`}>
      {/* Header: title on right, delete on left (RTL) */}
      <div className="flex w-full items-center justify-between">
        <h3 className="text-[17px] font-normal text-[var(--color-primary)]">חתימה דיגיטלית</h3>
        {hasSignature ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="מחיקת חתימה"
            className="flex items-center gap-2 rounded-[5px] border border-[#E1E9F3] bg-white px-2 py-2.5 text-[14px] font-normal text-[var(--color-primary)] transition-colors hover:bg-[#f4f8fc]"
          >
            מחיקת חתימה
            <DeleteIcon className="size-6 shrink-0" aria-hidden />
          </button>
        ) : (
          <div />
        )}
      </div>

      {/* Signature area */}
      <div
        className={`flex w-full flex-col overflow-hidden rounded-[8px] ${
          error ? "border-2 border-[#ee6a5f]" : "border border-[#E1E9F3]"
        }`}
      >
        <div className="flex min-h-[120px] items-center justify-center bg-white px-4">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-label="חתימה דיגיטלית"
            className="w-full bg-transparent text-center text-[18px] text-[var(--color-primary)] outline-none placeholder:text-[#5E5D9A]"
            dir="rtl"
          />
        </div>

        {/* Footer bar */}
        <div className="flex items-center justify-center gap-4 bg-[#e8f4ff] px-2 py-1">
          <ArrowUpIcon className="size-4 shrink-0 text-[var(--color-primary)]" />
          <p className="text-[16px] font-light text-[var(--color-primary)]">יש לחתום כאן</p>
          <ArrowUpIcon className="size-4 shrink-0 text-[var(--color-primary)]" />
        </div>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-[14px] font-normal text-[#af0404]" dir="rtl">
          {error}
        </p>
      )}
    </div>
  );
}
