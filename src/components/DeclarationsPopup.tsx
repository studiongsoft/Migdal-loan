"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export type DeclarationPopupType = "privacy" | "full";

interface DeclarationsPopupProps {
  type: DeclarationPopupType;
  isOpen: boolean;
  onClose: () => void;
  onApprove: () => void;
  onBack?: () => void;
}

const PRIVACY_POLICY_CONTENT = (
  <div className="text-right text-[20px] leading-normal font-light text-[var(--color-primary)]" dir="rtl">
    <p className="mb-3">
      ידוע לי כי המידע שמסרתי ו/או אמסור (ביחד: &quot;המידע&quot;) יישמר במאגרי המידע של קבוצת מגדל ו/או ישותף בין החברות בקבוצה ויעובד בהתאם למדיניות הפרטיות של הקבוצה (הזמינה באפליקציה ובאתר הקבוצה-{" "}
      <a
        href="https://www.migdal.co.il/support/privacy-and-data-security"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3369ff] underline"
      >
        https://www.migdal.co.il/support/privacy-and-data-security
      </a>
      ), לרבות לצורך ניהול, תפעול, מתן שירותים, עיבוד סטטיסטי, דיוור ישיר, יצירת קשר עמי וקיום חובות שבדין, וכי המידע עשוי להיות מועבר לצדדים שלישיים לצורך המטרות הנ&quot;ל.
    </p>
    <p className="mb-3">
      אני מאשר כי המידע נמסר מרצוני ובהסכמתי, וכי אי מסירתו עלולה למנוע מהקבוצה את היכולת לספק לי את השירותים באופן מיטבי.
    </p>
    <p className="mb-3">
      ידוע לי כי אני רשאי לעיין במידע שנאסף עליי ולבקש את תיקונו אם נמצא שאינו שלם או מעודכן, לפרטים נוספים ניתן לפנות למוקד קשרי הלקוחות 03-9201010 או בדוא&quot;ל{" "}
      <a href="mailto:mokedge@migdal.co.il" className="text-[#3369ff] underline">
        mokedge@migdal.co.il
      </a>
    </p>
  </div>
);

const FULL_DECLARATIONS_ITEMS = [
  "אני מצהיר כי הובאו לידיעתי כל הסייגים וההגבלות החלים על החשבון הנדון במסגרת בקשתי זו.",
  'במקרה שהסכום ששולם במסגרת בקשה זו יעלה על הסכומים המגיעים לעמית על פי ספרי הקופה (להלן "הסכום העודף"), אני מתחייב להחזיר לקופה כל סכום עודף ששולם כאמור מיד עם דרישתה הראשונה של החברה המנהלת בתוספת כל הסכומים שהיו מצטברים על הסכום העודף לו היה נותר מופקד בקופה מיום תשלומו ועד ליום השבה בפועל לקופה.',
  "ידוע לי כי על מנת להגן על זכויות העמית, החברה המנהלת תהא רשאית לעכב או שלא לבצע את בקשת המשיכה במידה ומכל סיבה שהיא תעורר חשד ביחס לתקינות בקשת המשיכה ו/או לא הוגשו במסגרתה כל המסמכים הנדרשים. התנאים להגשת בקשת המשיכה וביצועה כפופים להוראות כל דין, כפי שתהיינה באותה עת.",
  "ידוע לי כי ריבית, הפרשי הצמדה ורווחים אחרים יחויבו במס רווחי הון בכפוף להוראות הדין.",
  "ידוע לי כי החברה המנהלת תהא רשאית לקזז מהכספים הנמשכים כל סכום כסף שהינו בחזקת חוב ו/או הלוואה אשר העמית מותר חב כלפיה ו/או כלפי הקרן מכל סיבה שהיא במהלך היותו עמית בקרן.",
  "ידוע לי כי במידה ובחשבון קיימת יתרת הלוואה קופה שטרם נפרעה, ביצוע המשיכה יהיה כפוף לקיזוז יתרה זו מהכספים בחשבון.",
  'ככל שהמצהיר הינו אפוטרופוס: אני מצהיר בזה כי אני פועל בשם החסוי ולטובתו בהתאם ובכפוף לחוק הכשרות המשפטית והאפוטרופסות, התשכ"ב- 1962.',
  "אני מסכים כי כחלק מן השירותים שיימסרו לי על-ידי החברה, יישלחו אליי הודעות SMS ועל-פי פרטים המצויים ברשות החברה וכי מחובתי לעדכן את החברה בדבר שינויים שיחולו בפרטי ההתקשרות שלי.",
  'ידוע לי כי במקרה של ביצוע משיכה בה הזיכוי הינו לחשבון בנק בחו"ל אשא בכל ההוצאות הכרוכות בגין התשלום לחו"ל. הוצאות אלו יקוזזו מסכום התשלום.',
  "הצהרה לעניין - FATCA החברה הודיעה לי כי אם (1) אצהיר כי אני אזרח או תושב ארצות הברית לצרכי מס או (2) אם הפרטים שמסרתי לחברה מצביעים על אינדיקציה שיכול ואני אזרח או תושב ארצות הברית לצרכי מס יסירבתי למלא את הטפסים לבקשת החברה תוך המועד שנתבקשתי לכך, החברה תהיה מחויבת למסור פרטים ביחס לפרטי הזיהוי שלי והחיסכון שלי בהתאם להוראות ה-FATCA.",
  "הצהרה לעניין CRS - החברה הודיעה לי כי אם (1) אצהיר כי אני תושב מדינה זרה לצרכי מס או (2) אם הפרטים שמסרתי לחברה מצביעים על אינדיקציה שיכול ואני תושב מדינה זרה לצרכי מס יסירבתי למלא את הטפסים לבקשת החברה תוך המועד שנתבקשתי לכך, החברה תהיה מחויבת למסור פרטים ביחס לפרטי הזיהוי שלי בהתאם להוראות CRS.",
];

export function DeclarationsPopup({
  type,
  isOpen,
  onClose,
  onApprove,
  onBack,
}: DeclarationsPopupProps) {
  const [isChecked, setIsChecked] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsChecked(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isPrivacy = type === "privacy";

  return (
    <div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-8"
      dir="rtl"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-[700px] flex-col rounded-[4px] bg-white p-6 shadow-[0px_4px_40px_0px_rgba(60,101,227,0.08)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex w-full justify-end mb-4">
          <button
            onClick={onClose}
            className="flex size-[24px] items-center justify-center hover:opacity-80"
            aria-label="סגור"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Content - scrollable */}
        <div className="flex flex-1 flex-col gap-6 overflow-hidden">
          {/* Title section */}
          <div className="flex flex-col items-center gap-4">
            {/* Icon */}
            {isPrivacy ? (
              <div className="size-[42px]">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path
                    d="M21 2C17 2 13 4 10 7C7 10 5 14 5 18V24C5 26 6 28 8 29V31C8 33 10 35 12 35H30C32 35 34 33 34 31V29C36 28 37 26 37 24V18C37 14 35 10 32 7C29 4 25 2 21 2ZM21 6C24 6 27 7 29 9C31 11 33 14 33 18V24C33 24 32 25 31 25H11C10 25 9 24 9 24V18C9 14 11 11 13 9C15 7 18 6 21 6ZM21 12C19 12 17 14 17 16V20C17 22 18 23 20 23V29H22V23C24 23 25 22 25 20V16C25 14 23 12 21 12Z"
                    fill="var(--color-primary)"
                  />
                </svg>
              </div>
            ) : (
              <div className="size-[42px]">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path
                    d="M8 4C6 4 4 6 4 8V34C4 36 6 38 8 38H34C36 38 38 36 38 34V8C38 6 36 4 34 4H8ZM8 8H34V34H8V8ZM12 12V16H30V12H12ZM12 20V24H30V20H12ZM12 28V32H22V28H12Z"
                    fill="var(--color-primary)"
                  />
                </svg>
              </div>
            )}
            <div className="flex w-full flex-col items-center text-center">
              <h2 className="text-[40px] font-bold text-[var(--color-primary)]">
                {isPrivacy ? "מדיניות פרטיות" : "הצהרות מלאות"}
              </h2>
              <p className="text-[24px] font-normal text-[var(--color-primary)]">
                {isPrivacy ? "כיצד אנו מגנים על המידע שלך" : "הצהרות, אחריות משפטית וייעוץ פיננסי"}
              </p>
            </div>
          </div>

          {/* Scrollable text content */}
          <div
            ref={contentRef}
            className="max-h-[248px] overflow-y-auto overflow-x-hidden px-1"
          >
            {isPrivacy ? (
              PRIVACY_POLICY_CONTENT
            ) : (
              <ol className="list-decimal space-y-3 text-right text-[20px] leading-normal font-light text-[var(--color-primary)] ms-[30px]" dir="rtl" start={1}>
                {FULL_DECLARATIONS_ITEMS.map((item, index) => (
                  <li key={index} className="ps-2">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-4">
            <p className="flex-1 text-right text-[18px] font-light text-[var(--color-primary)]">
              {isPrivacy
                ? "ידוע לי כי המידע שמסרתי יישמר במאגרי המידע של קבוצת מגדל בהתאם למדיניות הפרטיות של הקבוצה"
                : "קראתי ואישרתי את ההצהרות המלאות"}
            </p>
            <Checkbox checked={isChecked} onChange={setIsChecked} size={20} />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Button
              variant="primary"
              onClick={() => isChecked && onApprove()}
              disabled={!isChecked}
              className="flex-1 min-w-[256px]"
            >
              <svg width="21" height="14" viewBox="0 0 21 14" fill="none" className="rtl:rotate-180 shrink-0">
                <path d="M14 1L20 7L14 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {isPrivacy ? "אישור ההצהרות" : "הבא"}
            </Button>
            {isPrivacy && onBack && (
              <Button variant="secondary" onClick={onBack} className="flex-1 min-w-[120px]">
                הקודם
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
