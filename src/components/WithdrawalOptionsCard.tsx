import { useState } from "react";
import { Button } from "./Button";

interface WithdrawalOption {
  id: string;
  text: string;
}

interface WithdrawalOptionsCardProps {
  options: WithdrawalOption[];
  onConfirm: (selectedOptionId: string) => void;
}

export function WithdrawalOptionsCard({ options, onConfirm }: WithdrawalOptionsCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedOption) {
      onConfirm(selectedOption);
    }
  };

  return (
    <div className="w-full flex justify-start">
      <div className="w-fit max-w-[500px] md:max-w-[500px] max-w-[315px] rounded-tr-[0px] rounded-tl-[27px] rounded-br-[27px] rounded-bl-[27px] px-[24px] py-[16px] bg-[#EAF1FA]">
        <div className="flex flex-col gap-[8px] items-end">
          {/* Title text */}
          <p className="w-full text-right text-[18px] md:text-[18px] text-[16px] leading-normal text-[#262565] mb-[8px]">
            אנא בחר אחת מהאפשרויות הבאות:
          </p>

          {/* Withdrawal options */}
          <div className="flex flex-col gap-[12px] w-full">
            {options.map((option) => (
              <label
                key={option.id}
                className="flex items-start justify-between gap-[8px] cursor-pointer"
              >
                {/* Radio button - Left side */}
                <div className="relative w-[20px] h-[20px] shrink-0 mt-[2px]">
                  <input
                    type="radio"
                    name="withdrawal-option"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-full h-full rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedOption === option.id
                        ? "border-[#3c65e3]"
                        : "border-[#020140]"
                    }`}
                  >
                    {selectedOption === option.id && (
                      <div className="w-[10px] h-[10px] rounded-full bg-[#3c65e3]" />
                    )}
                  </div>
                </div>

                {/* Option text - Right side */}
                <span className="text-[18px] md:text-[18px] text-[16px] leading-normal text-[#262565] text-right flex-1">
                  {option.text}
                </span>
              </label>
            ))}
          </div>

          {/* Confirm button */}
          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={!selectedOption}
            className="mt-[8px] w-full"
          >
            אישור
          </Button>
        </div>
      </div>
    </div>
  );
}
