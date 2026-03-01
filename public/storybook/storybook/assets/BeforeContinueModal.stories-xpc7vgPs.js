import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as c}from"./iframe-B4fJKyuY.js";import{n as o}from"./image-aUGlxb43.js";import{B as l}from"./Button-BYX2HB-8.js";import"./preload-helper-PPVm8Dsz.js";function i({isOpen:a,onFinish:r}){return a?e.jsx("div",{className:"fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-4",onClick:r,children:e.jsxs("div",{role:"dialog","aria-modal":"true",dir:"rtl",className:"relative w-full max-w-[390px] overflow-hidden rounded-[7px] bg-white shadow-[0px_0px_24px_0px_rgba(200,200,200,0.25)]",onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"relative h-[48px] w-full overflow-hidden",children:e.jsx(o,{src:"/images/popspecialback.png",alt:"",fill:!0,className:"object-cover object-top",priority:!0,"aria-hidden":!0})}),e.jsxs("div",{className:"flex max-h-[85vh] flex-col gap-4 overflow-y-auto bg-[#f5f8fc] px-6 pb-4 pt-4",children:[e.jsxs("div",{className:"flex flex-col gap-1 text-center",children:[e.jsx("h3",{className:"text-[24px] font-bold leading-7 text-[var(--color-primary)]",children:"לפני שממשיכים"}),e.jsx("p",{className:"text-[17px] font-light leading-[23px] text-[var(--color-primary)]",children:"הסבר קצר"})]}),e.jsxs("div",{className:"flex flex-col gap-3 text-right",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[15px] font-bold text-[var(--color-primary)]",children:"1. עוברים אתר"}),e.jsx("p",{className:"text-[15px] font-light leading-5 text-[var(--color-primary)]",children:"במידה וכרגע אתה מחובר מהמחשב, תועבר בשלב הבא לאתר של ספק המידע שבחרת. במידה ואתה מהנייד והאפליקציה מותקנת אצלך, תועבר לאפליקציה. אם לא, לאתר"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[15px] font-bold text-[var(--color-primary)]",children:"2. התחברות לחשבון"}),e.jsx("p",{className:"text-[15px] font-light leading-5 text-[var(--color-primary)]",children:"אם אינך מצליח להתחבר לחשבונך, אנא נסה לצאת מהאפליקציה ולהכנס אליה עצמאית לפני שאתה מתקדם משלב זה"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[15px] font-bold text-[var(--color-primary)]",children:"3. וודא הרשאות"}),e.jsx("p",{className:"text-[15px] font-light leading-5 text-[var(--color-primary)]",children:"אם בסוף ההתחברות קיבלת שגיאה כללית בבנק שלא מאפשרת לך להמשיך, אנא וודא באפליקציה או דרך בנקאי שקיימת לך הרשאה לביצוע פעולות בדיגיטל"})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(l,{variant:"primary",onClick:r,children:"הבנתי! בואו נמשיך"})}),e.jsx("div",{className:"relative mx-auto mt-2 h-[150px] w-[150px]",children:e.jsx(o,{src:"/images/holdcup.png",alt:"",width:150,height:150,className:"h-full w-auto object-contain","aria-hidden":!0})})]}),e.jsx("button",{type:"button",onClick:r,className:"absolute end-4 top-4 z-10 flex size-8 shrink-0 items-center justify-center rounded hover:bg-white/80","aria-label":"סגור",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12",stroke:"#020140",strokeWidth:"2",strokeLinecap:"round"})})})]})}):null}i.__docgenInfo={description:"",methods:[],displayName:"BeforeContinueModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onFinish:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const h={title:"Design System/BeforeContinueModal",component:i,parameters:{layout:"centered",docs:{description:{component:"פופאפ שלב 2 – לפני שממשיכים. הסבר קצר עם שלושה שלבים ממוספרים. כולל איור holdcup."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},onFinish:{action:"finished"}}},s={args:{isOpen:!0,onFinish:()=>{}},parameters:{docs:{description:{story:"מצב פתוח – הפופאפ עם הסבר לפני שממשיכים."}}}},n={render:function(){const[r,t]=c.useState(!1);return e.jsxs("div",{dir:"rtl",className:"flex flex-col items-center gap-4",children:[e.jsx(l,{variant:"primary",onClick:()=>t(!0),children:"פתח פופאפ לפני שממשיכים"}),e.jsx(i,{isOpen:r,onFinish:()=>{alert("הבנתי! בואו נמשיך"),t(!1)}})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onFinish: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: "מצב פתוח – הפופאפ עם הסבר לפני שממשיכים."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function WithTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    return <div dir="rtl" className="flex flex-col items-center gap-4">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          פתח פופאפ לפני שממשיכים
        </Button>
        <BeforeContinueModal isOpen={isOpen} onFinish={() => {
        alert("הבנתי! בואו נמשיך");
        setIsOpen(false);
      }} />
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const f=["Default","WithTrigger"];export{s as Default,n as WithTrigger,f as __namedExportsOrder,h as default};
