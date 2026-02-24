interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "link";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}

export function Button({
  children,
  variant,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-[10px] rounded-[4px] px-[24px] py-[14px] text-[18px] transition-all hover:opacity-90 w-full md:w-auto h-[40px] disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = {
    primary:
      "bg-[var(--color-accent-green)] text-[var(--color-primary)] font-bold",
    secondary:
      "bg-[var(--color-white)] text-[var(--color-primary)] border border-[var(--color-primary)] opacity-80",
    link:
      "h-auto min-h-0 w-auto bg-transparent px-0 py-0 text-[16px] font-normal text-[#3c65e3] opacity-100 hover:underline",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

interface ActionButtonsProps {
  primaryLabel: string;
  onPrimaryClick: () => void;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  primaryMinWidth?: string;
  /** @deprecated Use validation flow instead - button is never disabled */
  primaryDisabled?: boolean;
  /** הערת validation - מוצגת 20px מעל אזור הכפתור, צבע #AF0404 */
  validationNote?: string;
}

export function ActionButtons({
  primaryLabel,
  onPrimaryClick,
  secondaryLabel,
  onSecondaryClick,
  primaryMinWidth = "200px",
  primaryDisabled = false,
  validationNote,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-col items-center">
      {validationNote && (
        <p className="mb-5 text-center text-[14px] font-normal text-[#AF0404]" dir="rtl">
          {validationNote}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {secondaryLabel && onSecondaryClick && (
          <button
            type="button"
            onClick={onSecondaryClick}
            className="flex items-center justify-center gap-[10px] rounded-[4px] border border-[var(--color-primary)] bg-[var(--color-white)] px-[24px] py-[14px] text-[18px] font-normal text-[var(--color-primary)] opacity-80 transition-all hover:opacity-90"
          >
            {secondaryLabel}
          </button>
        )}
        <button
        type="button"
        onClick={onPrimaryClick}
        className="flex min-w-[200px] items-center justify-center gap-[10px] rounded-[4px] bg-[var(--color-accent-green)] px-[24px] py-[14px] text-[18px] font-bold text-[var(--color-primary)] transition-all hover:opacity-90"
        style={{ minWidth: primaryMinWidth }}
      >
        {primaryLabel}
      </button>
      </div>
    </div>
  );
}
