# Button

## Purpose
- כפתור פעולה עיקרי באפליקציה לביצוע פעולות משתמש
- משמש בכל מקום שדורש אינטראקציה עם המשתמש (טפסים, דיאלוגים, דפי נחיתה)

## Figma
- Link: https://www.figma.com/design/LSrhZD0FVH3SOgnORox1cK/IDE-%D7%A7%D7%A9%D7%AA?node-id=1-2690&m=dev
- Frames: Button Component (Node 1-2690)
- Variants: 
  - Primary (`Buttons Updated`)
  - Secondary (`Buttonsl`)
  - TODO: Ghost variant (מוזכר בדרישות אך לא מיושם)
- Notes: 
  - RTL: כן, הקומפוננטה תומכת ב-RTL
  - הטקסט מיושר למרכז
  - גובה קבוע של 40px

## API
### Props
| Name     | Type                              | Default | Description                                    |
|----------|-----------------------------------|---------|------------------------------------------------|
| children | React.ReactNode                   | -       | תוכן הכפתור (טקסט או אלמנטים)                 |
| variant  | "primary" \| "secondary"          | -       | סוג הכפתור                                     |
| onClick  | () => void                        | -       | פונקציה שתקרא בלחיצה על הכפתור (אופציונלי)    |

TODO: להוסיף prop עבור variant "ghost"

### Events
- `onClick`: נקרא בעת לחיצה על הכפתור

## Variants
- **Primary**: כפתור עיקרי עם רקע ירוק (`--color-accent-green`) וטקסט בולד
  - שימוש: פעולות ראשיות (שליחת טופס, אישור, התחלת תהליך)
  - דוגמה: "הבנתי, בואו נתחיל"
  
- **Secondary**: כפתור משני עם רקע לבן, מסגרת ואופציטי של 80%
  - שימוש: פעולות משניות (ביטול, חזרה, דילוג)
  - דוגמה: "חזרה לעמוד הבית"

- **Ghost**: TODO - לא מיושם בקוד או ב-Figma

## States
- **Default**: TODO - לתעד התנהגות ברירת מחדל
- **Hover**: `opacity: 0.9` (transition-all)
- **Active**: TODO - לתעד מצב לחוץ
- **Focus**: TODO - להוסיף focus ring לנגישות
- **Disabled**: TODO - להוסיף מצב disabled
- **Loading**: TODO - להוסיף מצב loading אם נדרש

## Layout and spacing
- **Padding**: 
  - Horizontal: `80px` (desktop), `24px` (mobile)
  - Vertical: `14px`
- **Gap**: `10px` (בין אלמנטים פנימיים אם ישנם)
- **Width behavior**: 
  - Mobile: `w-full` (100% רוחב)
  - Desktop: `w-auto` (רוחב דינמי לפי תוכן)
- **Height**: `40px` (קבוע)
- **Border radius**: `4px`
- **Alignment (RTL rules)**: 
  - הטקסט ממורכז (`justify-center`, `items-center`)
  - Flexbox עם `gap` תומך ב-RTL אוטומטית

## Typography
- **Font**: `1_Migdal_RagSans`
- **Sizes**: `18px`
- **Weights**: 
  - Primary: Bold (700)
  - Secondary: Regular (400)
- **Line-height**: `100%` (normal)
- **Letter-spacing**: `0`
- **Text align**: Center

## Colors and tokens
### Primary variant:
- **Background**: `var(--color-accent-green)` / `var(--button-color, #a2eb9a)`
- **Border**: None
- **Text**: `var(--color-primary)` / `var(--main-color-text, #020140)`
- **Shadow**: None

### Secondary variant:
- **Background**: `var(--color-white)` / `white`
- **Border**: `1px solid var(--color-primary)` / `var(--main-color-text, #020140)`
- **Text**: `var(--color-primary)` / `#020140`
- **Opacity**: `0.8`
- **Shadow**: None

### Tokens used:
- `--color-accent-green` / `--button-color`
- `--color-primary` / `--main-color-text`
- `--color-white`
- `--18` (font size token)

## Accessibility
- **Keyboard behavior**: TODO - לוודא תמיכה ב-Enter ו-Space
- **Focus ring**: TODO - להוסיף focus-visible outline נגיש
- **ARIA**: 
  - להוסיף `aria-disabled` למצב disabled
  - להוסיף `aria-busy` למצב loading (אם יתווסף)
  - לשקול `role="button"` אם נדרש

TODO: לוודא שהכפתור נגיש למקלדת ולקוראי מסך

## Implementation notes
- ✅ משתמש ב-design tokens קיימים (`var(--color-*)`)
- ✅ Responsive עם padding שונה למובייל ודסקטופ
- ✅ Pixel-accurate ל-Figma (40px height, 4px radius)
- ⚠️ חסר variant "ghost" שהוזכר בדרישות
- ⚠️ חסרים states של disabled, focus, active
- ⚠️ חסר loading state
- 📝 לשקול להוסיף prop `fullWidth` במקום responsive classes
- 📝 לשקול להוסיף prop `size` לגדלים שונים
- 📝 הקוד הנוכחי אינו משתמש ב-data attributes (node-id מ-Figma)

## Test checklist
- [x] RTL check - הקומפוננטה תומכת ב-RTL
- [x] Responsive check - יש התנהגות שונה למובייל (padding ורוחב)
- [ ] Hover check - יש hover state (opacity 0.9)
- [ ] Focus check - TODO: להוסיף focus ring
- [ ] Disabled check - TODO: לא מיושם
- [ ] Snapshot test - TODO: להוסיף storybook story
