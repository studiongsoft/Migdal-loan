/**
 * Component Usage Examples
 * 
 * This file demonstrates how to use the newly created components
 */

import { useState } from "react";
import { ProgressBar, ChatMessage, SummaryCard } from "@/components";

// ========================================
// Example 1: Progress Bar with Different States
// ========================================

export function ProgressBarExample() {
  const stages = [
    { title: "פרטי הבקשה", status: "complete" as const },
    { title: "פרטי המשיכה", status: "current" as const },
    { title: "חשבון בנק", status: "pending" as const },
    { title: "אצורות", status: "pending" as const },
  ];

  return <ProgressBar stages={stages} />;
}

// ========================================
// Example 2: Chat Messages
// ========================================

export function ChatMessagesExample() {
  return (
    <div className="flex flex-col gap-4">
      {/* System message */}
      <ChatMessage
        message={`שלום! 
אני כאן כדי לעזור לך.
מה תרצה לעשות היום?`}
        type="system"
      />

      {/* User message (if needed in future) */}
      <ChatMessage
        message="אני רוצה למשוך כסף מהקופה"
        type="user"
      />
    </div>
  );
}

// ========================================
// Example 3: Summary Card
// ========================================

export function SummaryCardExample() {
  return (
    <div className="flex justify-center">
      <SummaryCard />
    </div>
  );
}

// ========================================
// Example 4: Complete Chat Flow
// ========================================

export function CompleteChatFlowExample() {
  return (
    <div className="flex gap-8">
      {/* Chat area */}
      <div className="flex-1 flex flex-col gap-6">
        <ChatMessage
          message="שלום! בואו נתחיל בתהליך הפדיון"
          type="system"
        />
        
        <SummaryCard />
        
        <ChatMessage
          message="האם תרצה להמשיך?"
          type="system"
        />
      </div>

      {/* Progress bar */}
      <div>
        <ProgressBar
          stages={[
            { title: "שלב 1", status: "complete" },
            { title: "שלב 2", status: "current" },
            { title: "שלב 3", status: "pending" },
          ]}
        />
      </div>
    </div>
  );
}

// ========================================
// Example 5: Dynamic Progress Updates
// ========================================

export function DynamicProgressExample() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const stages = [
    "פרטי הבקשה",
    "פרטי המשיכה", 
    "חשבון בנק",
    "אצורות"
  ];

  const progressStages = stages.map((title, index) => ({
    title,
    status: 
      index < currentStep ? "complete" as const :
      index === currentStep ? "current" as const :
      "pending" as const
  }));

  return (
    <div>
      <ProgressBar stages={progressStages} />
      
      <button onClick={() => setCurrentStep(prev => 
        Math.min(prev + 1, stages.length - 1)
      )}>
        המשך לשלב הבא
      </button>
    </div>
  );
}

// ========================================
// Example 6: Custom Chat Message Styling
// ========================================

export function CustomChatExample() {
  return (
    <div className="max-w-[900px] flex flex-col gap-4">
      <ChatMessage
        message="זהו דוגמה להודעה ארוכה יותר שמכילה מידע חשוב על התהליך. ההודעה תתאים את עצמה לגובה התוכן ותישאר מיושרת לימין בהתאם לתמיכה ב-RTL."
      />
    </div>
  );
}

// ========================================
// TypeScript Interface Reference
// ========================================

/**
 * ProgressBar Props
 */
interface ProgressBarProps {
  stages: Array<{
    title: string;
    status: "complete" | "current" | "pending";
  }>;
}

/**
 * ChatMessage Props
 */
interface ChatMessageProps {
  message: string;
  type?: "system" | "user";
}

/**
 * SummaryCard Props
 * No props needed - displays static content
 */

// ========================================
// Integration Tips
// ========================================

/**
 * 1. Always use the components within a proper RTL context
 * 2. Wrap long lists of chat messages in a scrollable container
 * 3. Update progress bar state based on user actions
 * 4. Consider adding loading states for async operations
 * 5. Use proper spacing between components (24px recommended)
 */
