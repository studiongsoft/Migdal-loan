# מגדל קשת - Chat Interface Implementation

## הסקירה (Overview)
יישום של ממשק צ'אט עם בר התקדמות עבור מערכת פדיון קשת, מבוסס על עיצוב Figma.

## תכונות עיקריות (Key Features)

### 📊 בר התקדמות (Progress Bar)
- מציג 4 שלבים בתהליך הפדיון
- מצבי התקדמות שונים:
  - ✅ **הושלם** - עם סימן V ירוק
  - 🔵 **שלב נוכחי** - נקודה כחולה עם רקע בהיר
  - ⚪ **ממתין** - נקודה אפורה
- קווי חיבור מקווקווים בין השלבים
- מיקום בצד ימין של המסך

### 💬 ממשק צ'אט (Chat Interface)
- הודעות מערכת עם רקע תכלת
- תמיכה מלאה ב-RTL עבור עברית
- עיצוב מעוגל וידידותי
- גלילה חלקה

### 📋 כרטיס סיכום (Summary Card)
- הצגת סכום החיסכון הכולל
- הצגת רווחים בשנים האחרונות
- איור ארגז אוצר דקורטיבי
- צל ומסגרת מעוצבים

## מבנה הפרויקט (Project Structure)

```
src/
├── app/
│   ├── page.tsx           # דף הבית
│   ├── chat/
│   │   └── page.tsx       # דף הצ'אט
│   ├── layout.tsx
│   └── globals.css
└── components/
    ├── ProgressBar.tsx    # קומפוננטת בר התקדמות
    ├── ChatMessage.tsx    # קומפוננטת הודעת צ'אט
    ├── SummaryCard.tsx    # קומפוננטת כרטיס סיכום
    ├── Header.tsx         # קומפוננטת כותרת
    ├── Button.tsx         # קומפוננטת כפתור
    └── index.ts           # ייצוא קומפוננטות
```

## התקנה והרצה (Installation & Running)

### התקנת תלויות (Install Dependencies)
```bash
npm install
```

### הרצה במצב פיתוח (Development Mode)
```bash
npm run dev
```

הפרויקט יעלה על: http://localhost:3000

### בנייה לייצור (Production Build)
```bash
npm run build
npm start
```

## ניווט (Navigation)

1. **דף הבית** (`/`)
   - הצגת מסך הגיבור (Hero Section)
   - כפתור "הבנתי, בואו נתחיל" מנווט לצ'אט

2. **דף הצ'אט** (`/chat`)
   - ממשק צ'אט מלא
   - בר התקדמות בצד ימין
   - הודעות מערכת וכרטיס סיכום
   - כפתורי פעולה

## טכנולוגיות (Technologies)

- **Next.js 16** - פריימוורק React
- **TypeScript** - טייפינג סטטי
- **Tailwind CSS 4** - עיצוב
- **React 18** - ספריית UI

## עיצוב והתאמה (Design & Customization)

### צבעי מערכת (System Colors)
```css
--color-primary: #020140       /* כחול כהה */
--color-accent-green: #a2eb9a  /* ירוק בהיר */
--color-light-blue-1: #dee9f5  /* תכלת בהיר */
--color-light-blue-2: #b8d3ee  /* תכלת בינוני */
```

### מרווחים (Spacing)
```css
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 24px
--spacing-lg: 32px
```

## קומפוננטות (Components)

### ProgressBar
```tsx
<ProgressBar 
  stages={[
    { title: "פרטי הבקשה", status: "complete" },
    { title: "פרטי המשיכה", status: "current" },
    { title: "חשבון בנק", status: "pending" }
  ]} 
/>
```

### ChatMessage
```tsx
<ChatMessage 
  message="שלום! כיף לעזור לך"
  type="system"
/>
```

### SummaryCard
```tsx
<SummaryCard />
```

## פיתוח עתידי (Future Development)

- [ ] אנימציות למעברי התקדמות
- [ ] ניהול מצב עם Context/Redux
- [ ] חיבור ל-API
- [ ] טפסים עם ולידציה
- [ ] הודעות משתמש דו-כיווניות
- [ ] שמירת התקדמות ב-localStorage

## תמיכה (Support)

לשאלות או בעיות, אנא פנה לצוות הפיתוח.

---

**Built with ❤️ for Migdal**
