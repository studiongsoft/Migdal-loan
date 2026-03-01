"use client";

import { useState, useEffect } from "react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { Header } from "@/components/Header";
import { AmortizationSchedulePopup } from "@/components/AmortizationSchedulePopup";
import type { ScheduleProduct } from "@/components/AmortizationSchedule";
import { PreferencesChatFlow } from "@/components/PreferencesChatFlow";
import {
  SelfConfigureProductSelection,
  type ProductItem,
  type ProductConditions,
} from "@/components/SelfConfigureProductSelection";
import { OfferDetailsSummary } from "@/components/OfferDetailsSummary";
import { BankDetailsForm } from "@/components/BankDetailsForm";
import { OpenBankingIntro } from "@/components/OpenBankingIntro";
import { OpenFinanceConnectModal } from "@/components/OpenFinanceConnectModal";
import { DocumentsAndSignatures } from "@/components/DocumentsAndSignatures";
import { TermsOfUsePopup } from "@/components/TermsOfUsePopup";
import { CompletionScreen } from "@/components/CompletionScreen";
import { LoanOfferCard } from "@/components/LoanOfferCard";
import { SummaryValueCard } from "@/components/SummaryValueCard";
import { ActionButtons, Button } from "@/components/Button";
import { ProgressBar, type ProgressStage } from "@/components/ProgressBar";
import { SliderField } from "@/components/SliderField";
import { Loader } from "@/components/Loader";
import { LoanSimulatorOpeningScreen } from "@/components/LoanSimulatorOpeningScreen";
import { ExitProcessWarningModal } from "@/components/ExitProcessWarningModal";

const PROGRESS_STAGES = [
  "בירור צרכים",
  "פרטי הלוואה",
  "פרטי בנק",
  "מסמכים והצהרות",
  "סיום",
] as const;

const DECLARATIONS_CONTENT = [
  'חיווי אשראי - לצורך בדיקת הבקשה אנו מתכוונים לפנות ללשכת האשראי קופאס בי.די.אי בע"מ על מנת לקבל חיווי אשראי בשאלה אם להתקשר איתך בעסקת אשראי. מובהר בזאת שלצורך קבלת החיווי לשכת האשראי תגיש לבנק ישראל בקשה לקבלת נתוני אשראי לגביך הכלולים במאגר. הפנייה ללשכת אשראי לצורך קבלת חיווי הינה בכל מקרה של בקשה לקבלת הלוואה באמצעות החברה.',
  'המידע אשר הלווה מסר או שהתקבל לגביו, מכל גורם וצד שלישי, בקשר לבקשת ההלוואה והסכם ההלוואה, לרבות פרטים אישיים ומידע רגיש כהגדרתו בחוק הגנת הפרטיות, התשמ"א – 1981, מידע לפי חוק נתוני אשראי, התשע"ו 2016- ומידע שנמצא במאגרי המידע של החברה ו/או מי מהתאגידים בקבוצת מגדל ("המידע") יישמר במאגרי מידע ממוחשבים של החברה ו/או של מי מהתאגידים האחרים בקבוצת מגדל.',
  'הלווה מסכים לכך שהחברה תהיה רשאית לעשות שימוש במידע לצורך: (1) ביצוע הסכם ההלוואה, לרבות על ידי גורמים חיצוניים שיבצעו זאת עבורה ו-(2) עמידה בהוראות הדין, ובכלל זה העברת מידע למאגר המידע בהתאם לחוק נתוני אשראי, התשע"ו - 2016.',
  'הלווה מצהיר כי הוא מוסר את המידע מרצונו וידוע לו כי לא חלה עליו כל חובה חוקית למוסרו. יחד עם זאת, הימנעות ממסירת המידע יכולה לגרום שלא יהיה ניתן לספק ללווה שירותים ו/או הטבות, בכלל או באופן חלקי, ובכלל זה העמדת ההלוואה וביצוע הסכם זה.',
  'בנוסף, ככל שהלווה אישר באופן מפורש דבר זה: (1) החברה (וכן תאגידים אחרים מקבוצת מגדל שלגביהם ניתנה באופן ספציפי הסכמה כאמור), יהיו רשאים להשתמש במידע לצורך הצעות נוספות לרבות הצעות למוצרי חיסכון, פנסיה, ביטוח, אשראי, מתן הטבות, שיפור השירות, מניעת הונאות, קשרי לקוחות, עריכת סקרים ומחקרי שוק ולדיוור ישיר (בדואר, בדואר אלקטרוני, בטלפון, בפקסימיליה, בהודעות שונות לטלפון הסלולארי, לרבות מסרונים או בכל דרך אחרת) הן למידע והן לפרסומת, ובכדי להציע לו מצרכים או שירותים שונים של החברה ותאגידים אחרים בקבוצת מגדל שעשוי להיות לו עניין בהם, מעת לעת - והכל בכפוף ובהתאם להסכמת הלווה האמורה ולהוראות הדין ו-(2) החברה תהיה רשאית למסור את המידע לסוכן המטפל עבור הלווה בפוליסות ובתוכניות שנרכשו מהחברה.',
  'מבלי לגרוע מכלליות האמור לעיל, הלווה מאשר שידוע לו שהחברה אוגרת ועושה שימוש במידע המתקבל אצלה או אצל תאגידים אחרים בקבוצת מגדל בקשר עם הלווה מצווים שיפוטיים ורשויות מוסמכות ובכלל זה מכוח הוראות חוק ההוצאה לפועל, פקודת המיסים (גביה), תקנות סדר הדין אזרחי וחוק נתוני אשראי (להלן - "המידע השיפוטי") ומכל מקור מידע חוקי אחר. מידע השיפוטי נשמר, ככל שהדבר מותר על פי הדין, לצורך ניהול סיכונים, לרבות החלטות בעניין מתן שירותים שונים, ולתקופה לפי שיקול דעת החברה וכן למטרות אחרות, ככל שהדבר מותר על פי הדין או לפי הסכמת הלווה. נמסר ללווה כי המידע השיפוטי חיוני לחברה לצורך ניהול וניטור סיכוניה, וכי חוסר במידע כאמור עלול שלא לאפשר לחברה להעריך את סיכוניה בקשר להלוואה ופירעונה, ולכן במקרה בו הלווה יבטל הסכמתו כאמור לעיל, תהיה החברה רשאית להעמיד את ההלוואה לפירעון מיידי.',
  'הלווה יהיה רשאי לבקש בכל עת מהחברה ובאמצעותה להסיר אותו מרשימת הדיוור האמורה, ולהגביל את השימוש במידע לנדרש לצורך ניהול ההלוואה.',
];

const OFFER_LIQUID = {
  title: "פרטי הלוואה כספים נזילים",
  titleBase: "פרטי הלוואה ",
  titleAccent: "כספים נזילים",
  prime: { label: "משתנה פריים- 3.3%", monthly: 2300 },
  fixed: { label: "קבועה - 3%", monthly: 2200 },
  loanAmount: 42200,
  products: "קרן השתלמות, קופת גמל להשקעה, לוח סילוקין",
  expandedDetails: [
    { label: "החזר חודשי משוער", value: "₪2,200" },
    { label: "מוצרים", value: "קרן השתלמות, קופת גמל להשקעה" },
    { label: "סוג הלוואה", value: "שפיצר" },
    { label: "סכום הלוואה", value: "₪42,200" },
    { label: "סוג מוצר", value: "גמל" },
    { label: "קרן השתלמות", value: "₪22,200" },
    { label: "קופת גמל להשקעה", value: "₪20,000" },
  ],
  productBreakdown: [
    { productType: "קרן השתלמות", amount: 22200 },
    { productType: "קופת גמל להשקעה", amount: 20000 },
  ],
};

const OFFER_ILLIQUID = {
  title: "פרטי הלוואה כספים לא נזילים",
  titleBase: "פרטי הלוואה ",
  titleAccent: "כספים לא נזילים",
  prime: { label: "משתנה פריים- 3.3%", monthly: 1200 },
  fixed: { label: "קבועה 3.1%", monthly: 1100 },
  loanAmount: 7800,
  products: "קרן השתלמות, לוח סילוקין",
  expandedDetails: [
    { label: "החזר חודשי משוער", value: "₪1,200" },
    { label: "מוצרים", value: "קרן השתלמות" },
    { label: "סוג הלוואה", value: "שפיצר" },
    { label: "סכום הלוואה", value: "₪7,800" },
    { label: "סוג מוצר", value: "גמל" },
  ],
  productBreakdown: [{ productType: "קרן השתלמות", amount: 7800 }],
};

const INFO_LIQUID = {
  title: "כספים נזילים",
  body: "אלו כספים שניתן לגשת אליהם במהירות ובקלות, כמו מזומן או כסף בחשבון בנק. הם מאפשרים לבצע רכישות מידיות או לשלם חובות ללא עיכובים.",
};

const INFO_ILLIQUID = {
  title: "כספים לא נזילים",
  body: "אלו כספים שאינם ניתנים למשיכה מיידית, כמו כספים בקופות גמל או קרנות השתלמות. גישה אליהם כרוכה בתהליכים ובתנאים מסוימים.",
};

type ViewMode =
  | "offers"
  | "preferences-chat"
  | "self-product"
  | "offer-details"
  | "bank-details"
  | "open-banking-intro"
  | "documents"
  | "completion";

const MOCK_PRODUCTS: ProductItem[] = [
  { id: "1", name: "קרן השתלמות", fundId: "2143245453", fundStatus: "liquid", maxWithdrawal: 70000 },
  { id: "2", name: "קופת גמל להשקעה", fundId: "654655764", fundStatus: "liquid", maxWithdrawal: 210000 },
  { id: "3", name: "קרן השתלמות", fundId: "2978756434", fundStatus: "illiquid", maxWithdrawal: 140000 },
];

export default function LoanSimulatorPage() {
  const router = useTransitionRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanMonths, setLoanMonths] = useState(14);
  const [liquidRate, setLiquidRate] = useState<"prime" | "fixed">("fixed");
  const [illiquidRate, setIlliquidRate] = useState<"prime" | "fixed">("prime");
  const [liquidExpanded, setLiquidExpanded] = useState(false);
  const [illiquidExpanded, setIlliquidExpanded] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("offers");
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [selfConditions, setSelfConditions] = useState<ProductConditions[]>([]);
  const [openFinanceModalOpen, setOpenFinanceModalOpen] = useState(false);
  const [termsPopupOpen, setTermsPopupOpen] = useState(false);
  const [effectiveMonthlyPayment, setEffectiveMonthlyPayment] = useState(0);
  const [schedulePopup, setSchedulePopup] = useState<{
    open: boolean;
    loanAmount: number;
    monthly: number;
    rate: number;
    months: number;
    products?: ScheduleProduct[];
  }>({ open: false, loanAmount: 0, monthly: 0, rate: 2.8, months: 17 });
  const [showOpeningScreen, setShowOpeningScreen] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exitWarningOpen, setExitWarningOpen] = useState(false);

  const handleStartFromOpeningScreen = () => {
    setShowOpeningScreen(false);
    setShowLoader(true);
  };

  useEffect(() => {
    if (!showLoader) return;
    const t = setTimeout(() => setShowLoader(false), 1800);
    return () => clearTimeout(t);
  }, [showLoader]);

  const isInProcess =
    !showOpeningScreen && !showLoader && viewMode !== "completion";

  useEffect(() => {
    if (!isInProcess) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isInProcess]);

  const openSchedulePopup = (
    loanAmount: number,
    monthly: number,
    ratePercent: number,
    months: number,
    products?: ScheduleProduct[]
  ) => {
    setSchedulePopup({ open: true, loanAmount, monthly, rate: ratePercent, months, products });
  };

  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("he-IL").format(v) + " ₪";
  const formatMonths = (v: number) => v + " חודשים";

  const displayLoanAmount =
    (viewMode === "bank-details" || viewMode === "offer-details" || viewMode === "documents" || viewMode === "completion" || viewMode === "open-banking-intro") &&
    selfConditions.length > 0
      ? selfConditions.reduce((s, c) => s + c.loanAmount, 0)
      : loanAmount;

  const totalMonthly =
    (liquidRate === "prime" ? OFFER_LIQUID.prime.monthly : OFFER_LIQUID.fixed.monthly) +
    (illiquidRate === "prime" ? OFFER_ILLIQUID.prime.monthly : OFFER_ILLIQUID.fixed.monthly);

  function computeSelfFlowMonthly(): number {
    if (selfConditions.length === 0) return totalMonthly;
    const rate = 0.031; // 3.1% annual
    const r = rate / 12;
    return selfConditions.reduce((s, c) => {
      const n = loanMonths;
      const pmt = (c.loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      return s + pmt;
    }, 0);
  }

  const handleBack = () => {
    if (viewMode === "completion") setViewMode("documents");
    else if (viewMode === "documents") setViewMode("open-banking-intro");
    else if (viewMode === "open-banking-intro") setViewMode("bank-details");
    else if (viewMode === "bank-details")
      setViewMode(selfConditions.length > 0 ? "offer-details" : "offers");
    else if (viewMode === "offer-details")
      setViewMode(selfConditions.length > 0 ? "self-product" : "offers");
    else if (viewMode === "self-product" || viewMode === "preferences-chat") setViewMode("offers");
    else if (step === 3 && viewMode === "offers") setStep(2);
    else if (step === 2) setStep(1);
  };

  const canGoBack =
    step > 1 ||
    (step === 3 &&
      (viewMode === "preferences-chat" ||
        viewMode === "self-product" ||
        viewMode === "offer-details" ||
        viewMode === "bank-details" ||
        viewMode === "open-banking-intro" ||
        viewMode === "documents" ||
        viewMode === "completion"));

  const progressIndex =
    viewMode === "documents"
      ? 3
      : viewMode === "open-banking-intro" || viewMode === "bank-details"
        ? 2
        : step === 1 || viewMode === "preferences-chat"
          ? 0
          : step === 2 || viewMode === "self-product" || (step === 3 && (viewMode === "offers" || viewMode === "offer-details"))
            ? 1
            : 2;
  const progressStages: ProgressStage[] = PROGRESS_STAGES.map((title, i) => ({
    title,
    status: i < progressIndex ? "complete" : i === progressIndex ? "current" : "pending",
  }));
  const handleStepClick = (index: number) => {
    if (index === 0) {
      setStep(1);
      setViewMode("preferences-chat");
    } else if (index === 1) {
      setStep(3);
      setViewMode("offers");
    } else if (index === 2) {
      setViewMode("bank-details");
    } else if (index === 3) {
      setViewMode("documents");
    } else if (index === 4) {
      setViewMode("completion");
    }
  };

  return (
    <main dir="rtl" className="relative flex min-h-screen w-full flex-col bg-white">
      {/* Loader – מוצג אחרי לחיצה על "בואו נתחיל", נעלם ב-fade */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ease-out ${
          showLoader ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!showLoader}
        aria-busy={showLoader}
      >
        <Loader width={68} height={310} />
      </div>

      <div className="sticky top-0 z-20 shrink-0 bg-white">
        <Header
          onBack={
            showOpeningScreen
              ? undefined
              : viewMode === "completion"
                ? undefined
                : canGoBack
                  ? handleBack
                  : undefined
          }
          onNewProcess={
            showOpeningScreen
              ? undefined
              : viewMode === "completion"
                ? undefined
                : () => {
                    setStep(1);
                    setViewMode("offers");
                  }
          }
          onDisconnect={
            isInProcess ? () => setExitWarningOpen(true) : undefined
          }
          onMenuClick={
            showOpeningScreen || viewMode !== "completion"
              ? () => setMobileMenuOpen(true)
              : undefined
          }
        />
      </div>

      {/* מסך פתיחה – לפני הלואדר */}
      {showOpeningScreen && (
        <>
          <LoanSimulatorOpeningScreen
            onStart={handleStartFromOpeningScreen}
            onBackToHome={() => router.push("/")}
          />
          {/* כספת בצד – כמו בכל העמודים הפנימיים */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden md:block">
            <Image
              src="/images/Safe.png"
              alt=""
              width={350}
              height={300}
              className="object-contain"
            />
          </div>
        </>
      )}

      {/* תפריט מובייל */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="תפריט"
        >
          <div
            className="relative w-full rounded-t-[16px] bg-white p-4 pb-8 pt-12 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-md hover:bg-[#f4f8fc]"
              aria-label="סגור"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#020140"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {(showOpeningScreen || canGoBack || viewMode !== "completion") && (
              <div className="flex flex-col gap-2">
                {showOpeningScreen ? (
                  <button
                    type="button"
                    onClick={() => {
                      router.push("/");
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[18px] font-normal text-[var(--color-primary)] hover:bg-[#f4f8fc]"
                  >
                    חזרה לעמוד הבית
                  </button>
                ) : (
                  <>
                {canGoBack && (
                  <button
                    type="button"
                    onClick={() => {
                      handleBack();
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[18px] font-normal text-[var(--color-primary)] hover:bg-[#f4f8fc]"
                  >
                    חזור
                  </button>
                )}
                {viewMode !== "completion" && (
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setViewMode("offers");
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[18px] font-normal text-[var(--color-primary)] hover:bg-[#f4f8fc]"
                  >
                    <Image src="/images/icons/Right Icon.png" alt="" width={24} height={24} />
                    תהליך חדש
                  </button>
                )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {!showOpeningScreen && (
      <div className="relative z-10 mt-4 flex w-full flex-1 flex-col items-center gap-8 px-4 pb-8 md:px-16 md:pb-12">
        {/* Progress bar – מובייל בלבד, sticky, רקע מקצה לקצה (לא בשלב הטקסט המקדים) */}
        {viewMode !== "completion" && step !== 1 && (
          <div className="sticky top-[60px] z-10 -mx-4 w-[calc(100%+2rem)] bg-white py-2 md:hidden">
            <ProgressBar stages={progressStages} onStepClick={handleStepClick} />
          </div>
        )}

        {/* Title - hidden on completion screen */}
        {viewMode !== "completion" && (
          <div className="flex max-w-[1200px] flex-col items-center gap-8 text-center">
            <h1 className="text-[48px] font-bold leading-[51px] tracking-[-0.48px] text-[var(--color-primary)]">
              {step === 3 ? "לקיחת הלוואה" : "קבלת הלוואה מהירה"}
            </h1>
            <p className="max-w-[1200px] text-[24px] font-light leading-[32px] tracking-[0.24px] text-[var(--color-primary)]">
              {step === 1
                ? "כנגד מוצרי החיסכון שלך במגדל"
                : step === 2
                  ? "על בסיס מוצרי החיסכון שברשותך במגדל, באפשרותך לקבל הלוואה עד לסכום של 100,000 ש״ח."
                  : (
                      <span className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
                        <span>
                          <span className="font-light">סכום: </span>
                          <span className="text-[26px] font-bold">{formatCurrency(displayLoanAmount)}</span>
                        </span>
                        <span>
                          <span className="font-light">החזר: </span>
                          <span className="text-[26px] font-bold">{formatMonths(loanMonths)}</span>
                        </span>
                      </span>
                    )}
            </p>
          </div>
        )}

        {/* Main card */}
        <div className="w-full max-w-[900px] rounded-[12px] bg-white p-6 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.1)] md:p-8">
          {step === 1 ? (
            /* Declarations step */
            <div className="flex flex-col gap-8">
              <div className="max-h-[400px] overflow-y-auto">
                <h2 className="mb-4 text-right text-[18px] font-bold leading-[1.3] text-[var(--color-primary)]">
                  שימוש במידע:
                </h2>
                <ul className="list-disc space-y-3 ps-6 text-right text-[18px] font-light leading-[1.7] text-[var(--color-primary)]">
                  {DECLARATIONS_CONTENT.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <ActionButtons
                primaryLabel="יש אישור, נמשיך"
                onPrimaryClick={() => setStep(2)}
                secondaryLabel="סיום"
                onSecondaryClick={() => router.push("/")}
                primaryMinWidth="200px"
              />
            </div>
          ) : step === 2 ? (
            /* Loan params step - ממורכז לcard */
            <div dir="rtl" className="mx-auto flex w-full max-w-[500px] flex-col items-stretch gap-[40px]">
              <SliderField
                  label="בחר את סכום ההלוואה הרצוי"
                  value={loanAmount}
                  min={1000}
                  max={100000}
                  onChange={setLoanAmount}
                  variant="currency"
                  hint="יש לבחור סכום בין 1,000 ₪ ל- 100,000 ₪"
                />
              <SliderField
                  label="לכמה חודשים?"
                  value={loanMonths}
                  min={14}
                  max={84}
                  onChange={setLoanMonths}
                  variant="months"
                  hint="יש לבחור בין 14 ל- 84 חודשים"
                />
              <div className="flex justify-center">
              <ActionButtons
                primaryLabel="המשך"
                onPrimaryClick={() => setStep(3)}
                primaryMinWidth="256px"
              />
              </div>
            </div>
          ) : viewMode === "preferences-chat" ? (
            /* Preferences chat flow */
            <div className="flex flex-col gap-8">
              <PreferencesChatFlow
                loanAmount={loanAmount}
                loanMonths={loanMonths}
                onComplete={() => setViewMode("offers")}
                onSelfConfigure={() => setViewMode("self-product")}
              />
            </div>
          ) : viewMode === "self-product" ? (
            /* Self configure - unified: product selection + inline conditions */
            <div className="flex flex-col items-center gap-8">
              <SelfConfigureProductSelection
                loanMonths={loanMonths}
                onMonthsChange={setLoanMonths}
                onContinue={(ids, conds) => {
                  setSelectedProductIds(ids);
                  setSelfConditions(conds);
                  setViewMode("offer-details");
                }}
              />
            </div>
          ) : viewMode === "offer-details" ? (
            /* Offer details - before bank */
            <div className="flex flex-col gap-8">
              <OfferDetailsSummary
                products={MOCK_PRODUCTS.filter((p) => selectedProductIds.includes(p.id))}
                conditions={selfConditions}
                loanMonths={loanMonths}
                onContinueToBank={() => setViewMode("bank-details")}
                onScheduleClick={(amount, monthly, rate, products) =>
                  openSchedulePopup(amount, monthly, rate, loanMonths, products)
                }
              />
            </div>
          ) : viewMode === "bank-details" ? (
            /* Bank details form - full width on mobile, RTL aligned right on desktop */
            <div className="flex w-full flex-col items-stretch gap-6 md:items-start md:gap-8" dir="rtl">
              <BankDetailsForm
                loanAmount={displayLoanAmount}
                loanMonths={loanMonths}
                onSubmit={() => {
                  setEffectiveMonthlyPayment(selfConditions.length > 0 ? computeSelfFlowMonthly() : totalMonthly);
                  setViewMode("open-banking-intro");
                }}
              />
            </div>
          ) : viewMode === "open-banking-intro" ? (
            /* Open banking intro - before connect */
            <div className="flex flex-col gap-8">
              <OpenBankingIntro
                loanAmount={displayLoanAmount}
                loanMonths={loanMonths}
                onConfirm={() => setOpenFinanceModalOpen(true)}
                onCancel={() => setViewMode("bank-details")}
              />
            </div>
          ) : viewMode === "documents" ? (
            /* Documents and signatures */
            <div className="flex flex-col gap-8">
              <DocumentsAndSignatures
                loanAmount={displayLoanAmount}
                loanMonths={loanMonths}
                monthlyPayment={effectiveMonthlyPayment || totalMonthly}
                onTermsClick={() => setTermsPopupOpen(true)}
                onFinish={() => setViewMode("completion")}
              />
            </div>
          ) : viewMode === "completion" ? (
            /* Completion screen */
            <div className="flex flex-col gap-8">
              <CompletionScreen
                loanAmount={displayLoanAmount}
                loanMonths={loanMonths}
                monthlyPayment={effectiveMonthlyPayment || totalMonthly}
                onPersonalArea={() => router.push("/")}
                onDownloadForm={() => {
                  // TODO: Implement form download - add API route or static PDF
                  window.open("/#download-form", "_blank");
                }}
                onAmortizationSchedule={() =>
                  openSchedulePopup(
                    displayLoanAmount,
                    effectiveMonthlyPayment || totalMonthly,
                    3.1,
                    loanMonths
                  )
                }
                onAnotherLoan={() => {
                  setStep(1);
                  setViewMode("offers");
                }}
              />
            </div>
          ) : (
            /* Step 3 - Loan offers (default) */
            <div className="flex flex-col items-center gap-8">
              <div className="flex w-full max-w-[606px] flex-col items-center gap-6">
                <LoanOfferCard
                  offer={OFFER_LIQUID}
                  selectedRate={liquidRate}
                  onRateChange={setLiquidRate}
                  isExpanded={liquidExpanded}
                  onToggleExpand={() => setLiquidExpanded(!liquidExpanded)}
                  infoContent={INFO_LIQUID}
                  loanMonths={loanMonths}
                  onScheduleClick={() => {
                    const products: ScheduleProduct[] = OFFER_LIQUID.productBreakdown.map((p, i) => ({
                      id: `liquid-${i}`,
                      name: p.productType,
                      loanAmount: p.amount,
                      annualRatePercent: liquidRate === "prime" ? 3.3 : 3,
                      months: loanMonths,
                      graceMonths: 2,
                      loanType: "שפיצר",
                    }));
                    openSchedulePopup(
                      OFFER_LIQUID.loanAmount,
                      liquidRate === "prime" ? OFFER_LIQUID.prime.monthly : OFFER_LIQUID.fixed.monthly,
                      liquidRate === "prime" ? 3.3 : 3,
                      loanMonths,
                      products
                    );
                  }}
                />
                <LoanOfferCard
                  offer={OFFER_ILLIQUID}
                  selectedRate={illiquidRate}
                  onRateChange={setIlliquidRate}
                  isExpanded={illiquidExpanded}
                  onToggleExpand={() => setIlliquidExpanded(!illiquidExpanded)}
                  infoContent={INFO_ILLIQUID}
                  loanMonths={loanMonths}
                  onScheduleClick={() => {
                    const products: ScheduleProduct[] = OFFER_ILLIQUID.productBreakdown.map((p, i) => ({
                      id: `illiquid-${i}`,
                      name: p.productType,
                      loanAmount: p.amount,
                      annualRatePercent: illiquidRate === "prime" ? 3.3 : 3.1,
                      months: loanMonths,
                      graceMonths: 2,
                      loanType: "שפיצר",
                    }));
                    openSchedulePopup(
                      OFFER_ILLIQUID.loanAmount,
                      illiquidRate === "prime" ? OFFER_ILLIQUID.prime.monthly : OFFER_ILLIQUID.fixed.monthly,
                      illiquidRate === "prime" ? 3.3 : 3.1,
                      loanMonths,
                      products
                    );
                  }}
                />
              </div>

              {/* Summary */}
              <div className="flex flex-col items-center gap-4 gap-y-6">
                <SummaryValueCard label="החזר משוער חודשי:" value={totalMonthly} />

                <ActionButtons
                  primaryLabel="להמשיך עם הצעה זו"
                  onPrimaryClick={() => setViewMode("bank-details")}
                  primaryMinWidth="200px"
                />
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="link" onClick={() => setViewMode("preferences-chat")}>
                    הצעה נוספת לפי העדפות ←
                  </Button>
                  <Button variant="link" onClick={() => setViewMode("self-product")}>
                    אני אעשה בעצמי ←
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer – הערת בנקאות פתוחה (רק במצב open-banking-intro) */}
        {viewMode === "open-banking-intro" && (
          <p className="mt-8 w-full max-w-[900px] text-center text-[14px] font-normal leading-normal text-[var(--color-primary)] md:text-[16px]">
            שירות בנקאות פתוחה ניתן על ידי חברת Open Finance בע״מ וזאת על מנת לקצר את תהליך הזיהוי ותשמש במידע
            שתקבל אודותיך בכפוף להוראות חוק שירות מידע פיננסי ומדיניות הפרטיות של מגדל
          </p>
        )}
      </div>
      )}

      {/* Progress bar - right side (RTL), fixed בדסקטופ - לא זז עם גלילה */}
      {!showOpeningScreen && viewMode !== "completion" && step !== 1 && (
        <div className="fixed right-6 top-[156px] z-20 hidden md:block">
          <ProgressBar stages={progressStages} onStepClick={handleStepClick} />
        </div>
      )}

      <OpenFinanceConnectModal
        isOpen={openFinanceModalOpen}
        onClose={() => setOpenFinanceModalOpen(false)}
        onStart={() => {}}
        onFinish={() => {
          setOpenFinanceModalOpen(false);
          setViewMode("documents");
        }}
        onAdd={() => {}}
      />
      <TermsOfUsePopup
        isOpen={termsPopupOpen}
        onClose={() => setTermsPopupOpen(false)}
        onConfirm={() => setTermsPopupOpen(false)}
      />
      <AmortizationSchedulePopup
        isOpen={schedulePopup.open}
        onClose={() => setSchedulePopup((p) => ({ ...p, open: false }))}
        loanAmount={schedulePopup.loanAmount}
        monthlyPayment={schedulePopup.monthly}
        annualRatePercent={schedulePopup.rate}
        months={schedulePopup.months}
        graceMonths={2}
        products={schedulePopup.products}
      />
      <ExitProcessWarningModal
        isOpen={exitWarningOpen}
        onClose={() => setExitWarningOpen(false)}
        onConfirm={() => router.push("/")}
      />

      {/* Bottom illustration - changes by step, hidden on completion (treasur moved to OpenBankingIntro card) */}
      {!showOpeningScreen && viewMode !== "completion" && viewMode !== "open-banking-intro" && (
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden md:block">
          <Image
            src={
              viewMode === "bank-details"
                ? "/images/Padlock.png"
                : viewMode === "documents"
                  ? "/images/Padlock.png"
                  : step === 1 || viewMode === "preferences-chat"
                    ? "/images/Safe.png"
                    : "/images/Calculator.png"
            }
            alt="איור"
            width={350}
            height={300}
            className="object-contain"
          />
        </div>
      )}
    </main>
  );
}
