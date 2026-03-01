import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as d}from"./iframe-B4fJKyuY.js";import{n as a}from"./image-aUGlxb43.js";import{B as i}from"./Button-BYX2HB-8.js";import"./preload-helper-PPVm8Dsz.js";function o({isOpen:c,onFinish:t,onAdd:n}){return c?e.jsx("div",{className:"fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-4",onClick:t,children:e.jsxs("div",{role:"dialog","aria-modal":"true",dir:"rtl",className:"relative w-full max-w-[390px] overflow-hidden rounded-[7px] bg-white shadow-[0px_0px_24px_0px_rgba(200,200,200,0.25)]",onClick:l=>l.stopPropagation(),children:[e.jsx("div",{className:"relative h-[48px] w-full overflow-hidden",children:e.jsx(a,{src:"/images/popspecialback.png",alt:"",fill:!0,className:"object-cover object-top",priority:!0})}),e.jsxs("div",{className:"flex max-h-[85vh] flex-col gap-4 overflow-y-auto bg-[#f5f8fc] px-6 pb-4 pt-4",children:[e.jsxs("div",{className:"relative mx-auto flex h-[150px] w-[150px] min-w-[150px] items-center justify-center overflow-visible",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-90",children:e.jsx(a,{src:"/images/open-finance/Confetti.gif",alt:"",width:150,height:150,className:"object-contain",unoptimized:!0,"aria-hidden":!0})}),e.jsx("div",{className:"relative z-10",children:e.jsx(a,{src:"/images/calc.png",alt:"",width:60,height:60,className:"object-contain","aria-hidden":!0})})]}),e.jsx("div",{className:"flex flex-col gap-2 text-center",children:e.jsx("h3",{className:"text-[24px] font-bold leading-7 text-[var(--color-primary)]",children:"החשבון חובר בהצלחה"})}),e.jsxs("div",{className:"flex flex-col gap-2 text-center text-[15px] font-light leading-5 text-[var(--color-primary)]",children:[e.jsx("p",{children:"החשבון חובר בהצלחה."}),e.jsx("p",{children:"לחיבור חשבונות נוספים יש ללחוץ ״הוסף״"}),e.jsx("p",{className:"pt-2",children:"לסיום יש ללחוץ ״סיום״"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[n&&e.jsx(i,{variant:"secondary",onClick:n,className:"w-full max-w-[256px] bg-transparent",children:"הוסף"}),e.jsx(i,{variant:"primary",onClick:t,children:"סיום"})]})]}),e.jsx("button",{type:"button",onClick:t,className:"absolute end-4 top-4 z-10 flex size-8 shrink-0 items-center justify-center rounded hover:bg-white/80","aria-label":"סגור",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12",stroke:"#020140",strokeWidth:"2",strokeLinecap:"round"})})})]})}):null}o.__docgenInfo={description:"",methods:[],displayName:"BankConnectedSuccessModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onFinish:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const h={title:"Design System/BankConnectedSuccessModal",component:o,parameters:{layout:"centered",docs:{description:{component:"פופאפ שלב 3 – החשבון חובר בהצלחה. כולל calc.png, אנימציית קונפטי, וכפתור סיום."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},onFinish:{action:"finished"}}},r={args:{isOpen:!0,onFinish:()=>{},onAdd:()=>{}},parameters:{docs:{description:{story:"מצב פתוח – הפופאפ עם הודעת הצלחה וקונפטי."}}}},s={render:function(){const[t,n]=d.useState(!1);return e.jsxs("div",{dir:"rtl",className:"flex flex-col items-center gap-4",children:[e.jsx(i,{variant:"primary",onClick:()=>n(!0),children:"פתח פופאפ החשבון חובר בהצלחה"}),e.jsx(o,{isOpen:t,onFinish:()=>{alert("סיום"),n(!1)},onAdd:()=>{alert("הוסף חשבון נוסף"),n(!1)}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onFinish: () => {},
    onAdd: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: "מצב פתוח – הפופאפ עם הודעת הצלחה וקונפטי."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function WithTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    return <div dir="rtl" className="flex flex-col items-center gap-4">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          פתח פופאפ החשבון חובר בהצלחה
        </Button>
        <BankConnectedSuccessModal isOpen={isOpen} onFinish={() => {
        alert("סיום");
        setIsOpen(false);
      }} onAdd={() => {
        alert("הוסף חשבון נוסף");
        setIsOpen(false);
      }} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const g=["Default","WithTrigger"];export{r as Default,s as WithTrigger,g as __namedExportsOrder,h as default};
