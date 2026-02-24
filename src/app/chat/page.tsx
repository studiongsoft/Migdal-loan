"use client";

import { useState, useEffect, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ProgressBar, type ProgressStage } from "@/components/ProgressBar";
import { ChatMessage } from "@/components/ChatMessage";
import { UserChoiceMessage } from "@/components/UserChoiceMessage";
import { FundSelectionCard } from "@/components/FundSelectionCard";
import { WithdrawalOptionsCard } from "@/components/WithdrawalOptionsCard";
import { Button } from "@/components/Button";
import { FooterIllustration } from "@/components/FooterIllustration";
import { DeclarationsPopup } from "@/components/DeclarationsPopup";

export default function ChatPage() {
  const router = useTransitionRouter();
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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Progress stages - dynamic based on current step
  const [progressStages, setProgressStages] = useState<ProgressStage[]>([
    { title: "פרטי הבקשה", status: "current" },
    { title: "פרטי המשיכה", status: "pending" },
    { title: "חשבון בנק", status: "pending" },
    { title: "הצהרות", status: "pending" },
  ]);

  // Available funds
  const funds = [
    { id: "321654", name: "קופה 321654 – סה״כ צבירה 180,000₪", amount: "180,000", hasInfo: true },
    { id: "887799", name: "קופה 887799 – סה״כ צבירה 5,000₪", amount: "5,000", hasInfo: false },
  ];

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
    const fund = funds.find(f => f.id === fundId);
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
    const option = withdrawalOptions.find(o => o.id === optionId);
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

      {/* Header - Logo + Back arrow + Progress */}
      <div className="relative z-20 shrink-0">
        <Header onBack={() => router.push("/")} />
      </div>

      {/* Main content area - Chat and Progress Bar - 40px from header */}
      <div className="relative z-10 mt-4 flex w-full justify-center px-[54px] md:px-[54px] px-[16px]">
        <div className="flex w-full max-w-[1812px] items-start justify-between gap-[60px] md:gap-[60px] gap-[16px]">
          {/* Progress Bar - Right side in RTL - visible on md+ */}
          <div className="hidden shrink-0 md:flex">
            <ProgressBar stages={progressStages} />
          </div>

          {/* Chat Section */}
          <div className="flex flex-1 flex-col items-center">
            {/* Page Title and Actions - Centered above chat */}
            <div className="mb-[24px] md:mb-[24px] mb-[16px] flex w-full max-w-[948px] items-center justify-center gap-[52px] md:gap-[52px] gap-[16px] flex-col md:flex-row">
              {/* Title on the left */}
              <div className="flex w-[261px] md:w-[261px] w-full flex-col items-start justify-center">
                <div className="flex w-full items-center justify-center">
                  <h1 className="text-center text-[36px] md:text-[36px] text-[24px] leading-[1.3] text-[#040043]">
                    <span className="font-bold">פדיון</span> קשת
                  </h1>
                </div>
              </div>

              {/* Actions on the right */}
              <div className="flex items-center gap-[16px] md:gap-[16px] gap-[12px] flex-wrap justify-center">
                <Button variant="secondary" onClick={() => router.push("/")}>
                  <p className="whitespace-nowrap">ניקוי והתחלה מחדש</p>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="shrink-0">
                    <path d="M12 2C16.4 2 20 5.6 20 10C20 14.4 16.4 18 12 18C9.2 18 6.8 16.6 5.4 14.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 14L5 17L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V10L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
                <Button variant="secondary" onClick={() => router.push("/")}>
                  יציאה
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <path d="M12 2H14C15.1 2 16 2.9 16 4V14C16 15.1 15.1 16 14 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12L12 9L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Button>
              </div>
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
אני כאן כדי לעזור לך למשוך כספים מקופת קשת שלך. 
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
                      <UserChoiceMessage
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
                      />
                    </div>
                  )}

                  {/* Selected fund - shown after fund confirmation */}
                  {selectedFund && (
                    <div className="animate-fade-in">
                      <UserChoiceMessage
                        message={`קופה ${selectedFund} סה״כ צבירה ${funds.find(f => f.id === selectedFund)?.amount}₪`}
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
                      <UserChoiceMessage
                        message={withdrawalOptions.find(o => o.id === selectedWithdrawalOption)?.text || ""}
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
                      <UserChoiceMessage
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
                  <Button 
                    variant="primary" 
                    onClick={() => handleUserChoice("רוצה למשוך")}
                  >
                    רוצה למשוך
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={() => handleUserChoice("אמשיך לחסוך")}
                  >
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
    </main>
  );
}
