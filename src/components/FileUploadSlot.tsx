"use client";

import { useState } from "react";
import Image from "next/image";

const ACCEPTED_EXTENSIONS = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];
const MAX_SIZE_MB = 8;

export type UploadStatus = "idle" | "uploading" | "success" | "error";

interface FileUploadSlotProps {
  label: string;
  value: File | null;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSizeMb?: number;
  /** שגיאת validation חיצונית (למשל שדה חובה) */
  error?: string;
  /** Storybook בלבד – דילוג על סימולציית העלאה, הצגת state ישירות */
  storybookOverride?: { status: UploadStatus; progress?: number };
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  const mb = bytes / (1024 * 1024);
  return mb.toFixed(2) + " MB";
}

export function FileUploadSlot({
  label,
  value,
  onChange,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxSizeMb = MAX_SIZE_MB,
  error: externalError,
  storybookOverride,
}: FileUploadSlotProps) {
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [progress, setProgress] = useState(0);
  const displayStatus = storybookOverride?.status ?? status;
  const displayProgress = storybookOverride?.progress ?? progress;
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !ACCEPTED_EXTENSIONS.includes(ext)) {
      return `ניתן להעלות קובץ עם הסיומות PDF, DOC, DOCX, JPG, JPEG, PNG`;
    }
    if (file.size > maxSizeMb * 1024 * 1024) {
      return `גודל מקסימלי ${maxSizeMb} מ״ב`;
    }
    return null;
  };

  const processFile = (file: File) => {
    const err = validateFile(file);
    if (err) {
      setValidationError(err);
      return;
    }
    setValidationError(null);
    onChange(file);
    setStatus("uploading");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setStatus("success");
          return 100;
        }
        return p + 10;
      });
    }, 120);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleRemove = () => {
    onChange(null);
    setStatus("idle");
    setProgress(0);
    setValidationError(null);
  };

  return (
    <div dir="rtl" className="flex max-w-[333px] flex-1 flex-col gap-[var(--spacing-xs)]">
      <p className="text-right text-[17px] font-normal text-[var(--color-primary)]">{label}</p>

      <div
        className={`flex h-[120px] cursor-pointer flex-col items-center justify-center gap-[var(--spacing-xs)] rounded-[8px] border bg-[var(--color-white)] px-6 py-5 transition-colors ${
          externalError
            ? "border-2 border-[var(--color-error)]"
            : "border-[var(--color-border)] hover:bg-[var(--color-bg-hover)]"
        }`}
        role="button"
        tabIndex={0}
        aria-label="העלאת קובץ"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById(`upload-${label.replace(/\s/g, "-")}`)?.click()}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") &&
          (e.preventDefault(), document.getElementById(`upload-${label.replace(/\s/g, "-")}`)?.click())
        }
      >
        <input
          id={`upload-${label.replace(/\s/g, "-")}`}
          type="file"
          className="hidden"
          accept={accept}
          onChange={handleSelect}
        />
        <Image src="/images/icons/file-add.png" alt="" width={38} height={38} className="shrink-0" aria-hidden />
        <div className="flex flex-col items-center justify-center gap-[2px] text-center">
          <p className="text-[14px] font-normal text-[var(--color-muted)]">לחץ כאן להעלאה</p>
          <p className="text-[14px] font-normal text-[var(--color-muted)]">
            (PDF, DOC, JPG, PNG עד {maxSizeMb} מ״ב)
          </p>
        </div>
      </div>

      {(validationError || externalError) && (
        <div
          className="flex items-center justify-center gap-1 rounded-[4px] bg-[var(--color-bg-error)] px-[var(--spacing-xs)] py-[4px]"
          dir="rtl"
        >
          <p className="flex-1 text-right text-[14px] font-normal text-[var(--color-error)]">
            {externalError ?? validationError}
          </p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              fill="var(--color-error)"
            />
          </svg>
        </div>
      )}

      {value && (
        <div
          className="flex w-full max-w-[349px] gap-3 items-center rounded-[8px] border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-4"
          dir="rtl"
        >
          {/* קודם: פרטי הקובץ (שם + סטטוס) */}
        <div
          className={`flex min-w-0 flex-1 flex-col items-end text-right ${displayStatus === "uploading" ? "gap-2" : "gap-1"}`}
        >
            <p className="w-full truncate text-end text-[14px] font-normal text-[var(--color-primary)]">
              {value.name}
            </p>
            {displayStatus === "uploading" && (
              <p className="text-right text-[14px] font-normal leading-normal text-[var(--color-accent-blue)]">
                <span>{displayProgress}% מהקובץ עלה </span>
                <span className="text-[var(--color-primary)]/40">·</span>
                <span> {formatFileSize(value.size)}</span>
              </p>
            )}
            {displayStatus === "success" && (
              <div className="flex items-center justify-end gap-1" dir="rtl">
                <p className="text-right text-[14px] font-normal text-[var(--color-success)]">העלאה הסתיימה</p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="var(--color-success)"
                  />
                </svg>
              </div>
            )}
            {displayStatus === "error" && (
              <div className="flex items-center justify-end gap-1" dir="rtl">
                <p className="text-right text-[14px] font-normal text-[var(--color-error-alt)]">העלאה נכשלה</p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                    fill="var(--color-error-alt)"
                  />
                </svg>
              </div>
            )}
          </div>
          {/* אחרי: מחיקה או loader */}
          {displayStatus === "uploading" ? (
            <div className="relative size-8 shrink-0" aria-hidden>
              <svg className="size-8 -rotate-90" viewBox="0 0 32 32">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="var(--color-border)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="var(--color-accent-blue)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 14}
                  strokeDashoffset={2 * Math.PI * 14 * (1 - displayProgress / 100)}
                  strokeLinecap="round"
                  className="transition-[stroke-dashoffset] duration-150"
                />
              </svg>
            </div>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="flex size-8 shrink-0 items-center justify-center rounded p-0.5 hover:bg-[var(--color-bg-hover)]"
              aria-label="מחק קובץ"
            >
              <Image
                src="/images/icons/mobile/delete.svg"
                alt=""
                width={32}
                height={32}
                className="size-8"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
