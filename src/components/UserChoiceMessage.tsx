import Image from "next/image";

interface UserChoiceMessageProps {
  message: string;
  onEdit?: () => void;
}

export function UserChoiceMessage({ message, onEdit }: UserChoiceMessageProps) {
  return (
    <div className="flex w-full items-start justify-end">
      <div className="w-fit max-w-[500px] md:max-w-[500px] max-w-[315px] rounded-tl-[0px] rounded-tr-[27px] rounded-br-[27px] rounded-bl-[27px] bg-[#41006C] px-[24px] py-[16px]">
        <div className="flex items-start gap-[10px]">
          {/* Message text */}
          <p className="text-right text-[18px] md:text-[18px] text-[16px] leading-normal text-white whitespace-pre-wrap">
            {message}
          </p>

          {/* Edit icon */}
          <button 
            onClick={onEdit}
            className="relative h-[24px] w-[24px] shrink-0 hover:opacity-80"
          >
            <Image
              src="/images/edit.png"
              alt="Edit"
              width={24}
              height={24}
              className="size-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
