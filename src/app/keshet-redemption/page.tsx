"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ExitProcessWarningModal } from "@/components/ExitProcessWarningModal";
import { ProgressBar, type ProgressStage } from "@/components/ProgressBar";
import { ChatMessage } from "@/components/ChatMessage";
import { FundSelectionCard } from "@/components/FundSelectionCard";
import { WithdrawalOptionsCard } from "@/components/WithdrawalOptionsCard";
import { Button } from "@/components/Button";
import { FooterIllustration } from "@/components/FooterIllustration";
import { DeclarationsPopup } from "@/components/DeclarationsPopup";
import type { Fund } from "@/components/FundSelectionCard";

const INITIAL_PROGRESS: ProgressStage[] = [
  { title: "פרטי הבקשה", status: "current" },
  { title: "פרטי המשיכה", status: "pending" },
  { title: "חשבון בנק", status: "pending" },
  { title: "הצהרות", status: "pending" },
];

export type KeshetFundScenario = "no-loan" | "one-loan" | "two-loans";

function KeshetRedemptionContent() {
  const searchParams = useSearchParams();
  const router = useTransitionRouter();
  const fundScenario =
    (searchParams.get("fundScenario") as KeshetFundScenario) || "no-loan";
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showFollowUpMessage, setShowFollowUpMessage] = useState(false);
  const [showFundSelection, setShowFundSelection] = useState(false);
  const [selectedFund, setSelectedFund] = useState<string | null>(null);
  const [showWithdrawalOptions, setShowWithdrawalOptions] = useState(false);
  const [selectedWithdrawalOption, setSelectedWithdrawalOption] = useState<string | null>(null);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [showDeclarationButton, setShowDeclarationButton] = useState(false);
  const [declarationsPopupType, setDeclarationsPopupType] = useState<"privacy" | "full" | null>(null);
  const [declarationsApproved, setDeclarationsApproved] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exitWarningOpen, setExitWarningOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const resetFlow = () => {
    setUserChoice(null);
    setShowFirstMessage(true);
    setShowSummary(true);
    setShowSecondMessage(true);
    setShowButtons(true);
    setShowFollowUpMessage(false);
    setShowFundSelection(false);
    setSelectedFund(null);
    setShowWithdrawalOptions(false);
    setSelectedWithdrawalOption(null);
    setShowCompletionMessage(false);
    setShowDeclarationButton(false);
    setDeclarationsApproved(false);
    setDeclarationsPopupType(null);
    setProgressStages(INITIAL_PROGRESS);
  };

  // Progress stages - dynamic based on current step
  const [progressStages, setProgressStages] = useState<ProgressStage[]>(INITIAL_PROGRESS);

  // Available funds – משתנה לפי תרחיש (קיימת הלוואה על 0 / 1 / 2 קופות)
  const fundsByScenario: Record<KeshetFundScenario, Fund[]> = {
    "no-loan": [
      { id: "321654", name: "קופה 321654 – סה״כ צבירה 180,000₪", amount: "180,000", hasInfo: true },
      { id: "887799", name: "קופה 887799 – סה״כ צבירה 5,000₪", amount: "5,000", hasInfo: false },
    ],
    "one-loan": [
      { id: "123456", name: "קופה 123456 – סה״כ צבירה 15,000₪", amount: "15,000", hasExistingLoan: true },
      { id: "321654", name: "קופה 321654 – סה״כ צבירה 180,000₪", amount: "180,000", hasInfo: true },
      { id: "887799", name: "קופה 887799 – סה״כ צבירה 5,000₪", amount: "5,000", hasInfo: false },
    ],
    "two-loans": [
      { id: "123456", name: "קופה 123456 – סה״כ צבירה 15,000₪", amount: "15,000", hasExistingLoan: true },
      { id: "321654", name: "קופה 321654 – סה״כ צבירה 180,000₪", amount: "180,000", hasInfo: true, hasExistingLoan: true },
      { id: "887799", name: "קופה 887799 – סה״כ צבירה 5,000₪", amount: "5,000", hasInfo: false },
    ],
  };
  const funds = fundsByScenario[fundScenario];
  const hasExistingLoansOnFunds = fundScenario === "one-loan" || fundScenario === "two-loans";

  // Withdrawal options
  const withdrawalOptions = [
    { id: "partial", text: "למשוך סכום של  10,000₪ ללא צורך בקיזוז הלוואה" },
    { id: "full", text: "לפרוע את כל הצבירה  כולל החזר של ההלוואה הקיימת" },
  ];

  // Animation sequence
  useEffect(() => {
    // Show first message immediately
    setShowFirstMessage(true);

    // Show summary after 1 second
    const summaryTimer = setTimeout(() => {
      setShowSummary(true);
    }, 1000);

    // Show second message after 2 seconds
    const secondMessageTimer = setTimeout(() => {
      setShowSecondMessage(true);
    }, 2000);

    // Show buttons after 3 seconds
    const buttonsTimer = setTimeout(() => {
      setShowButtons(true);
    }, 3000);

    return () => {
      clearTimeout(summaryTimer);
      clearTimeout(secondMessageTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  // Update progress bar when fund selection card is shown
  useEffect(() => {
    if (showFundSelection) {
      setProgressStages([
        { title: "פרטי הבקשה", status: "complete" as const },
        { title: "פרטי המשיכה", status: "current" as const },
        { title: "חשבון בנק", status: "pending" as const },
        { title: "הצהרות", status: "pending" as const },
      ]);
    }
  }, [showFundSelection]);

  // Update progress bar when declaration button is shown (declarations step)
  useEffect(() => {
    if (showDeclarationButton) {
      setProgressStages([
        { title: "פרטי הבקשה", status: "complete" as const },
        { title: "פרטי המשיכה", status: "complete" as const },
        { title: "חשבון בנק", status: "complete" as const },
        { title: "הצהרות", status: "current" as const },
      ]);
    }
  }, [showDeclarationButton]);

  // Handle user choice
  const handleUserChoice = (choice: string) => {
    setUserChoice(choice);
    setShowButtons(false);

    // Scroll to show the user's message
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);

    // Show follow-up message after user choice (only if they chose to withdraw)
    if (choice === "רוצה למשוך") {
      setTimeout(() => {
        setShowFollowUpMessage(true);
        // Scroll again to show the follow-up message
        setTimeout(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
        }, 100);

        // Show fund selection after follow-up message
        setTimeout(() => {
          setShowFundSelection(true);
          // Scroll to show fund selection
          setTimeout(() => {
            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
          }, 100);
        }, 1000);
      }, 1000);
    }
  };

  // Handle fund selection confirmation
  const handleFundConfirm = (fundId: string) => {
    const fund = funds.find((f) => f.id === fundId);
    if (fund) {
      setSelectedFund(fundId);
      setShowFundSelection(false);

      // Scroll to show the selected fund message
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 100);

      // Show withdrawal options after fund selection
      setTimeout(() => {
        setShowWithdrawalOptions(true);
        // Scroll to show withdrawal options
        setTimeout(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
        }, 100);
      }, 1000);
    }
  };

  // Handle edit fund selection
  const handleEditFund = () => {
    setSelectedFund(null);
    setShowFundSelection(true);
    setShowWithdrawalOptions(false);
    setSelectedWithdrawalOption(null);
    setShowCompletionMessage(false);
    setShowDeclarationButton(false);
  };

  // Handle withdrawal option confirmation
  const handleWithdrawalConfirm = (optionId: string) => {
    const option = withdrawalOptions.find((o) => o.id === optionId);
    if (option) {
      setSelectedWithdrawalOption(optionId);
      setShowWithdrawalOptions(false);

      // Scroll to show the selected option
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 100);

      // Show completion message after withdrawal option selection
      setTimeout(() => {
        setShowCompletionMessage(true);
        // Scroll to show completion message
        setTimeout(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
        }, 100);

        // Show declaration button after completion message
        setTimeout(() => {
          setShowDeclarationButton(true);
          // Scroll to show button
          setTimeout(() => {
            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
          }, 100);
        }, 1000);
      }, 1000);
    }
  };

  // Handle edit withdrawal option
  const handleEditWithdrawalOption = () => {
    setSelectedWithdrawalOption(null);
    setShowWithdrawalOptions(true);
    setShowCompletionMessage(false);
    setShowDeclarationButton(false);
  };

  // Handle declarations popup flow
  const handleOpenDeclarations = () => {
    setDeclarationsPopupType("privacy");
  };

  const handlePrivacyApprove = () => {
    setDeclarationsPopupType("full");
  };

  const handleFullDeclarationsApprove = () => {
    setDeclarationsPopupType(null);
    setDeclarationsApproved(true);
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleCloseDeclarationsPopup = () => {
    setDeclarationsPopupType(null);
  };

  return (
    <main dir="rtl" className="relative flex min-h-screen w-full flex-col bg-white">
      {/* Background Illustration - Bottom - Hidden on mobile */}
      <div className="pointer-events-none absolute bottom-0 left-[-20px] z-0 hidden md:block">
        <FooterIllustration />
      </div>

      {/* Header - כמו בסימולטור הלוואות */}
      <div className="sticky top-0 z-20 shrink-0 bg-white">
        <Header
          onBack={() => router.push("/")}
          onNewProcess={resetFlow}
          onDisconnect={() => setExitWarningOpen(true)}
          onMenuClick={() => setMobileMenuOpen(true)}
        />
      </div>

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
            <div className="flex flex-col gap-2">
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
              <button
                type="button"
                onClick={() => {
                  resetFlow();
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[18px] font-normal text-[var(--color-primary)] hover:bg-[#f4f8fc]"
              >
                <Image src="/images/icons/Right Icon.png" alt="" width={24} height={24} />
                תהליך חדש
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content area - Chat and Progress Bar - 40px from header */}
      <div className="relative z-10 mt-4 flex w-full justify-center px-[54px] md:px-[54px] px-[16px]">
        <div className="flex w-full max-w-[1812px] items-start justify-between gap-[60px] md:gap-[60px] gap-[16px]">
          {/* Progress Bar - Right side in RTL - visible on md+ */}
          <div className="hidden shrink-0 md:flex">
            <ProgressBar stages={progressStages} />
          </div>

          {/* Chat Section */}
          <div className="flex flex-1 flex-col items-center">
            {/* Page Title - Centered above chat */}
            <div className="mb-[24px] md:mb-[24px] mb-[16px] flex w-full max-w-[948px] items-center justify-center">
              <h1 className="text-center text-[36px] md:text-[36px] text-[24px] leading-[1.3] text-[#040043]">
                <span className="font-bold">פדיון</span> קשת
              </h1>
            </div>

            <div className="flex h-[862px] md:h-[862px] h-[calc(100vh-120px)] w-full max-w-[948px] md:max-w-[948px] max-w-[343px] flex-col rounded-[16px] md:rounded-[16px] rounded-none bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.08)] md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.08)] shadow-none">
              {/* Chat content */}
              <div
                ref={chatContainerRef}
                className="flex flex-1 flex-col items-stretch gap-[24px] overflow-auto px-[24px] md:px-[24px] px-[16px] pt-[24px] md:pt-[24px] pt-[16px] scroll-smooth"
              >
                <div className="flex w-full flex-col items-stretch gap-[24px]">
                  {/* First chat message - System */}
                  {showFirstMessage && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="system"
                        message={`שלום ישראל ! 
אני כאן כדי לעזור לך למשוך כספים מקופת פדיון קשת שלך. 
אשמח לעזור לך בכל שלב בתהליך.`}
                      />
                    </div>
                  )}

                  {/* Summary Card Section */}
                  {showSummary && (
                    <div className="flex w-full flex-col items-center gap-[8px] animate-fade-in">
                      <div className="relative w-full max-w-[900px] md:max-w-[900px] max-w-[343px]">
                        <Image
                          src="/images/Summary and comment.png"
                          alt="Summary"
                          width={900}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Second chat message - System */}
                  {showSecondMessage && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="system"
                        message="האם עדיין תרצה למשוך את כספי הקופה?"
                      />
                    </div>
                  )}

                  {/* User choice - shown after clicking button */}
                  {userChoice && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="user"
                        message={userChoice}
                        onEdit={() => {
                          setUserChoice(null);
                          setShowButtons(true);
                          setShowFollowUpMessage(false);
                          setShowFundSelection(false);
                          setSelectedFund(null);
                          setShowWithdrawalOptions(false);
                          setSelectedWithdrawalOption(null);
                          setShowCompletionMessage(false);
                          setShowDeclarationButton(false);
                          // Reset progress bar to initial state
                          setProgressStages([
                            { title: "פרטי הבקשה", status: "current" as const },
                            { title: "פרטי המשיכה", status: "pending" as const },
                            { title: "חשבון בנק", status: "pending" as const },
                            { title: "הצהרות", status: "pending" as const },
                          ]);
                        }}
                      />
                    </div>
                  )}

                  {/* Follow-up message after user chooses to withdraw */}
                  {showFollowUpMessage && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="system"
                        message={`בכל בקשה ניתן למשוך כספים מקופה אחת בלבד. 
אל תדאג, בסוף התהליך הדיגיטלי נאפשר לך לבחור קופה נוספת למשיכה`}
                      />
                    </div>
                  )}

                  {/* Fund selection card */}
                  {showFundSelection && (
                    <div className="animate-fade-in w-full">
                      <FundSelectionCard
                        funds={funds}
                        onConfirm={handleFundConfirm}
                        hasExistingLoans={hasExistingLoansOnFunds}
                      />
                    </div>
                  )}

                  {/* Selected fund - shown after fund confirmation */}
                  {selectedFund && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="user"
                        message={`קופה ${selectedFund} סה״כ צבירה ${funds.find((f) => f.id === selectedFund)?.amount}₪`}
                        onEdit={handleEditFund}
                      />
                    </div>
                  )}

                  {/* Withdrawal options card */}
                  {showWithdrawalOptions && (
                    <div className="animate-fade-in w-full">
                      <WithdrawalOptionsCard
                        options={withdrawalOptions}
                        onConfirm={handleWithdrawalConfirm}
                      />
                    </div>
                  )}

                  {/* Selected withdrawal option - shown after confirmation */}
                  {selectedWithdrawalOption && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="user"
                        message={
                          withdrawalOptions.find((o) => o.id === selectedWithdrawalOption)?.text || ""
                        }
                        onEdit={handleEditWithdrawalOption}
                      />
                    </div>
                  )}

                  {/* Completion message after withdrawal option selection */}
                  {showCompletionMessage && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="system"
                        message={`מצוין, כדי שנוכל זה לאשר את הבקשה וסיימנו
הבקשה תתבצע תוך 14 ימי עסקים בהתאם לקפורט
בהצהרות`}
                      />
                    </div>
                  )}

                  {/* Client text after approving both declarations */}
                  {declarationsApproved && (
                    <div className="animate-fade-in">
                      <ChatMessage
                        type="user"
                        message="קראתי ואישרתי את ההצהרות"
                        onEdit={() => {
                          setDeclarationsApproved(false);
                          setDeclarationsPopupType("privacy");
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Declaration button - shown after completion message */}
              {showDeclarationButton && (
                <div className="flex w-full items-center justify-center px-[24px] md:px-[24px] px-[16px] py-[24px] md:py-[24px] py-[16px] animate-fade-in">
                  <Button variant="primary" onClick={handleOpenDeclarations}>
                    לעיון ואישור ההצהרות
                  </Button>
                </div>
              )}

              {/* Bottom buttons */}
              {showButtons && !userChoice && (
                <div className="flex w-full items-center justify-center gap-[16px] md:gap-[16px] gap-[12px] px-[24px] md:px-[24px] px-[16px] py-[24px] md:py-[24px] py-[16px] animate-fade-in flex-col md:flex-row">
                  <Button variant="primary" onClick={() => handleUserChoice("רוצה למשוך")}>
                    רוצה למשוך
                  </Button>
                  <Button variant="secondary" onClick={() => handleUserChoice("אמשיך לחסוך")}>
                    אמשיך לחסוך
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Declarations popups - Privacy Policy and Full Declarations */}
      {declarationsPopupType === "privacy" && (
        <DeclarationsPopup
          type="privacy"
          isOpen={true}
          onClose={handleCloseDeclarationsPopup}
          onApprove={handlePrivacyApprove}
          onBack={handleCloseDeclarationsPopup}
        />
      )}
      {declarationsPopupType === "full" && (
        <DeclarationsPopup
          type="full"
          isOpen={true}
          onClose={handleCloseDeclarationsPopup}
          onApprove={handleFullDeclarationsApprove}
        />
      )}

      <ExitProcessWarningModal
        isOpen={exitWarningOpen}
        onClose={() => setExitWarningOpen(false)}
        onConfirm={() => router.push("/")}
      />
    </main>
  );
}

export default function KeshetRedemptionPage() {
  return (
    <Suspense fallback={null}>
      <KeshetRedemptionContent />
    </Suspense>
  );
}
