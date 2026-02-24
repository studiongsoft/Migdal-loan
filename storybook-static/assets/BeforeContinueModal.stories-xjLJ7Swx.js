import{j as n}from"./jsx-runtime-DMt_yit2.js";import{r as i}from"./iframe-Ci18ShzC.js";import{B as t}from"./BeforeContinueModal-DoFQMgLU.js";import{B as a}from"./Button-_FKim5JR.js";import"./preload-helper-PPVm8Dsz.js";import"./image-BC_zGh6x.js";const g={title:"Design System/BeforeContinueModal",component:t,parameters:{layout:"centered",docs:{description:{component:"פופאפ שלב 2 – לפני שממשיכים. הסבר קצר עם שלושה שלבים ממוספרים. כולל איור holdcup."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},onFinish:{action:"finished"}}},e={args:{isOpen:!0,onFinish:()=>{}},parameters:{docs:{description:{story:"מצב פתוח – הפופאפ עם הסבר לפני שממשיכים."}}}},r={render:function(){const[o,s]=i.useState(!1);return n.jsxs("div",{dir:"rtl",className:"flex flex-col items-center gap-4",children:[n.jsx(a,{variant:"primary",onClick:()=>s(!0),children:"פתח פופאפ לפני שממשיכים"}),n.jsx(t,{isOpen:o,onFinish:()=>{alert("הבנתי! בואו נמשיך"),s(!1)}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const h=["Default","WithTrigger"];export{e as Default,r as WithTrigger,h as __namedExportsOrder,g as default};
