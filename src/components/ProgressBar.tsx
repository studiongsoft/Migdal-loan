import Image from "next/image";

export interface ProgressStage {
  title: string;
  status: "complete" | "current" | "pending";
}

interface ProgressBarProps {
  stages: ProgressStage[];
  onStepClick?: (index: number) => void;
}

/** מובייל – stepper אופקי בכרטיס */
function ProgressBarMobile({ stages }: { stages: ProgressStage[] }) {
  const currentStage = stages.find((s) => s.status === "current");
  return (
    <div
      dir="rtl"
      className="flex w-full items-center justify-between rounded-[8px] bg-white px-5 pb-2 pt-3 shadow-[0px_2px_24px_0px_rgba(200,200,200,0.5)] md:hidden"
    >
      <p className="shrink-0 text-right text-[14px] font-normal leading-7 tracking-[0.14px] text-[var(--color-primary)]">
        {currentStage?.title ?? stages[0]?.title ?? ""}
      </p>
      <div className="flex items-center gap-[4px]">
        {stages.map((stage, i) => (
          <div
            key={i}
            className={`h-[10px] shrink-0 rounded-[10px] ${
              stage.status === "current"
                ? "w-[36px] bg-[var(--color-accent-blue)]"
                : "size-[10px] bg-[#ecf0fc]"
            }`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

export function ProgressBar({ stages, onStepClick }: ProgressBarProps) {
  return (
    <>
      {/* מובייל */}
      <ProgressBarMobile stages={stages} />

      {/* דסקטופ */}
      <div className="hidden flex-col items-start gap-0 md:flex" dir="rtl">
      {stages.map((stage, index) => (
        <div key={index} className="flex flex-col items-start">
          {/* Row: Circle + Label */}
          {onStepClick ? (
            <button
              type="button"
              onClick={() => onStepClick(index)}
              aria-label={`שלב ${index + 1}: ${stage.title}`}
              className="flex items-center gap-4 border-0 bg-transparent p-0 text-right cursor-pointer hover:opacity-80"
            >
              <div
                className={`relative flex size-[32px] shrink-0 items-center justify-center rounded-full ${
                  stage.status === "current" ? "bg-[#e1e9f3]" : "bg-[#fbfbfb]"
                }`}
                aria-hidden
              >
                {stage.status === "pending" ? (
                  <Image src="/images/State empty.png" alt="" width={32} height={32} className="size-full" aria-hidden />
                ) : stage.status === "complete" ? (
                  <Image src="/images/Complete.png" alt="" width={32} height={32} className="size-full" aria-hidden />
                ) : (
                  <Image src="/images/State.png" alt="" width={32} height={32} className="size-full" aria-hidden />
                )}
              </div>
              <p
                className={`min-w-[150px] shrink-0 text-right text-[17px] leading-[18.6px] ${
                  stage.status === "current"
                    ? "font-bold text-[var(--color-primary)]"
                    : stage.status === "complete"
                      ? "font-normal text-[var(--color-primary)]"
                      : "font-light text-[#a4a4a4]"
                }`}
              >
                {stage.title}
              </p>
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <div
                className={`relative flex size-[32px] shrink-0 items-center justify-center rounded-full ${
                  stage.status === "current" ? "bg-[#e1e9f3]" : "bg-[#fbfbfb]"
                }`}
                aria-hidden
              >
                {stage.status === "pending" ? (
                  <Image src="/images/State empty.png" alt="" width={32} height={32} className="size-full" aria-hidden />
                ) : stage.status === "complete" ? (
                  <Image src="/images/Complete.png" alt="" width={32} height={32} className="size-full" aria-hidden />
                ) : (
                  <Image src="/images/State.png" alt="" width={32} height={32} className="size-full" aria-hidden />
                )}
              </div>
              <p
                className={`min-w-[150px] shrink-0 text-right text-[17px] leading-[18.6px] ${
                  stage.status === "current"
                    ? "font-bold text-[var(--color-primary)]"
                    : stage.status === "complete"
                      ? "font-normal text-[var(--color-primary)]"
                      : "font-light text-[#a4a4a4]"
                }`}
              >
                {stage.title}
              </p>
            </div>
          )}
          {/* Vertical connecting line - aligned under circle */}
          {index < stages.length - 1 && (
            <div className="flex w-8 justify-center">
              <div
                className={`h-[24px] w-[2px] shrink-0 ${
                  stage.status === "complete" ? "bg-[#3c65e3]" : "bg-[#e1e9f3]"
                }`}
              />
            </div>
          )}
        </div>
      ))}
      </div>
    </>
  );
}
