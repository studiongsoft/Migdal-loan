"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

interface TermsOfUsePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const TERMS_TEXT = `הצהרה למבקשים לקבל הודעות בדואר אלקטרוני:
אני מסכים כי בכל מקום בו מכוח החוק ו/או הפוליסות שיש לי במגדל חברה לביטוח בע"מ, נדרשת החברה, או מי מטעמה, להעביר למבוטח מידע ו/או מסמך בכתב, תהיה לחברה או למי מטעמה אפשרות להעביר אלי את המידע ו/או המסמך בדואר אלקטרוני לכתובת האי-מייל שנרשמה על ידי בטופס זה, במקום בדואר, אף אם הוא כולל "מידע רגיש " כהגדרתו בחוק הגנת הפרטיות.

אישור למשלוח מסמכים ומידע לסוכן הביטוח בדבר תביעה זו.

הריני מאשר בזאת למגדל חברה לביטוח בע"מ (להלן - "מגדל") לשלוח ו/או להעביר לידי סוכן הביטוח בפוליסה זו את כל התכתובות ו/או המסמכים הקשורים לתביעה זו, לרבות מידע רפואי בקשר עם תביעה זו ו/או מידע רפואי שנודע למגדל אגב תביעה זו, ולא תהיה לי כל טענה ו/או תביעה כלפי "מגדל" בכל הנוגע להעברת המיידעים ו/או המסמכים, לרבות המידע הרפואי לסוכן הביטוח ו/או באמצעותו.

הצהרה לנכונות פרטי החשבון
1. כל הנתונים שמסרתי לכם לגבי העברה הבנקאית הנ"ל נכונים, מדויקים ונבדקו על ידי.
2. אני מצהיר בזאת שהחשבון הוא על שמי ו/או משותף לי ולבן/בת זוגי.
3. ההעברה הבנקאית הנ"ל מבוצעת בהתאם לבקשתי ועל אחריותי בלבד.
4. אני מוותר על כל טענה / דרישה / תביעה בקשר להעברה הבנקאית הנ"ל.
5. ידוע לי שאין בהסכמתי זו משום התחייבות כלשהי של חברת הביטוח להכיר בכיסוי הביטוחי או בגובה תגמולי הביטוח.
6. אני מאשר העברת פרטים אלו וגובה תגמולי הביטוח לבנק המפעיל את האפליקציה לצורך התשלום.

קראתי ואישרתי את נכונותן של כל אחת מההצהרות לעיל`;

export function TermsOfUsePopup({ isOpen, onClose, onConfirm }: TermsOfUsePopupProps) {
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (agreed) {
      onConfirm();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div
        dir="rtl"
        className="flex max-h-[90vh] w-full max-w-[700px] flex-col rounded-[12px] bg-white shadow-[0px_0px_24px_0px_rgba(200,200,200,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#E1E9F3] p-6">
          <h3 className="text-[24px] font-bold text-[var(--color-primary)]">תנאי השימוש</h3>
          <button type="button" onClick={onClose} className="flex size-8 items-center justify-center rounded hover:bg-[#f4f8fc]" aria-label="סגור">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="#020140" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-6 overflow-hidden p-6">
          <div className="max-h-[400px] overflow-y-auto rounded-lg border border-[#eaf3fa] px-6 py-4">
            <p className="whitespace-pre-wrap text-right text-[16px] font-light leading-[1.7] text-[var(--color-primary)]">{TERMS_TEXT}</p>
          </div>
          <label className="flex cursor-pointer items-center gap-3">
            <Checkbox checked={agreed} onChange={setAgreed} size={20} />
            <span className="text-right text-[17px] font-normal text-[var(--color-primary)]">אני מאשר את תנאי התקנון</span>
          </label>
          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={!agreed}
            className="w-full max-w-[256px] self-center"
          >
            אפשר להמשיך
          </Button>
        </div>
      </div>
    </div>
  );
}
