import Image from "next/image";
import { MigdalLogo } from "./MigdalLogo";

interface HeaderProps {
  onBack?: () => void;
  onNewProcess?: () => void;
  /** במובייל – פתיחת תפריט (חזור / תהליך חדש) */
  onMenuClick?: () => void;
}

export function Header({ onBack, onNewProcess, onMenuClick }: HeaderProps = {}) {
  return (
    <header dir="rtl" className="flex w-full flex-col bg-white">
      {/* מובייל – חץ/תפריט | לוגו | פרופיל(+תפריט כשקיים חזור) */}
      <div className="flex h-[60px] w-full items-center justify-between px-[21px] py-2 md:hidden">
        {/* צד שמאל: חץ חזרה (אם יש) או תפריט */}
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="flex size-11 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]"
            aria-label="חזור"
          >
            <Image
              src="/images/icons/Submenu/CTA/Icon Link/Mid.png"
              alt=""
              width={24}
              height={24}
              className="size-6"
              aria-hidden
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={onMenuClick}
            className="flex size-11 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]"
            aria-label="תפריט"
          >
            <Image
              src="/images/Headers/icons/menu.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
              aria-hidden
            />
          </button>
        )}
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/images/Headers/Layer_1.svg"
            alt="מגדל"
            width={37}
            height={44}
            className="object-contain"
          />
        </div>
        {/* צד ימין: תפריט + פרופיל (כשיש חזור) או רק פרופיל */}
        <div className="flex shrink-0 items-center gap-0">
          {onBack && onMenuClick && (
            <button
              type="button"
              onClick={onMenuClick}
              className="flex size-11 items-center justify-center rounded-md hover:bg-[#f4f8fc]"
              aria-label="תפריט"
            >
              <Image
                src="/images/Headers/icons/menu.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
                aria-hidden
              />
            </button>
          )}
          <button
            type="button"
            className="flex size-11 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]"
            aria-label="פרופיל"
          >
            <Image
              src="/images/Headers/icons/Headers/profile.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
              aria-hidden
            />
          </button>
        </div>
      </div>

      {/* דסקטופ – לוגו + חזור | התנתק + תהליך חדש */}
      <div className="hidden w-full items-start justify-between px-6 pb-[32px] pt-6 md:flex">
        <div className="flex flex-col items-start">
          <MigdalLogo />
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="mt-6 flex size-10 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]"
              aria-label="חזור"
            >
              <Image
                src="/images/icons/Submenu/CTA/Icon Link/Mid.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
                aria-hidden
              />
            </button>
          )}
        </div>

        <div className="flex flex-col items-end">
          <button
            type="button"
            className="flex h-[44px] w-[181px] items-center justify-center gap-3 rounded-[4px] bg-[#020140] px-4 text-[18px] hover:opacity-90"
          >
            <span className="font-bold text-[#a2eb9a]">הי טל</span>
            <span className="text-[#a2eb9a]">|</span>
            <span className="underline decoration-solid text-[#a2eb9a]">התנתק</span>
          </button>
          {onNewProcess && (
            <button
              type="button"
              onClick={onNewProcess}
              className="mt-6 flex h-10 items-center justify-center gap-2 text-[20px] font-normal text-[#020140] hover:opacity-80"
            >
              <Image src="/images/icons/Right Icon.png" alt="" width={24} height={24} aria-hidden />
              תהליך חדש
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

