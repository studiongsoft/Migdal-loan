import{j as e}from"./jsx-runtime-DMt_yit2.js";import{r as l}from"./iframe-Ci18ShzC.js";import{n as a}from"./image-BC_zGh6x.js";import{B as x}from"./Button-_FKim5JR.js";import{B as f}from"./BeforeContinueModal-DoFQMgLU.js";import{B as g}from"./BankConnectedSuccessModal-C66mm3IN.js";import"./preload-helper-PPVm8Dsz.js";function c({isOpen:p,onClose:s,onStart:t}){return p?e.jsx("div",{className:"fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/60 p-4",onClick:s,children:e.jsxs("div",{dir:"rtl",className:"relative w-full max-w-[390px] overflow-hidden rounded-[7px] bg-white shadow-[0px_0px_24px_0px_rgba(200,200,200,0.25)]",onClick:n=>n.stopPropagation(),children:[e.jsx("div",{className:"relative h-[48px] w-full overflow-hidden",children:e.jsx(a,{src:"/images/popspecialback.png",alt:"",fill:!0,className:"object-cover object-top",priority:!0})}),e.jsxs("div",{className:"flex max-h-[85vh] flex-col gap-4 overflow-y-auto bg-[#f5f8fc] px-4 pb-4 pt-4",children:[e.jsxs("div",{className:"flex flex-col gap-1 text-center",children:[e.jsx("h3",{className:"text-[24px] font-bold leading-7 text-[var(--color-primary)]",children:"אישור הלוואה מהיר"}),e.jsx("p",{className:"text-[17px] font-light leading-[23px] text-[var(--color-primary)]",children:"Open Finance מבקשת להתחבר אל חשבונך"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-start gap-[9px]",children:[e.jsx("div",{className:"size-[42px] shrink-0",children:e.jsx(a,{src:"/images/card.png",alt:"",width:42,height:42,className:"size-full object-contain"})}),e.jsxs("div",{className:"min-w-0 flex-1 text-right",children:[e.jsx("p",{className:"text-[15px] font-bold leading-5 tracking-[0.3px] text-[var(--color-primary)]",children:"התחבר ללא מאמץ!"}),e.jsx("p",{className:"text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]",children:"Open-Finance.ai"}),e.jsx("p",{className:"text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]",children:"מאפשרת לך לחבר את החשבונות הפיננסים שלך בדרך מאובטחת"})]})]}),e.jsxs("div",{className:"flex items-start gap-[9px]",children:[e.jsx("div",{className:"size-[42px] shrink-0",children:e.jsx(a,{src:"/images/eye.png",alt:"",width:42,height:42,className:"size-full object-contain"})}),e.jsxs("div",{className:"min-w-0 flex-1 text-right",children:[e.jsx("p",{className:"text-[15px] font-bold leading-5 tracking-[0.3px] text-[var(--color-primary)]",children:"המידע שלך שייך רק לך!"}),e.jsx("p",{className:"text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]",children:"Open-Finance.ai"}),e.jsx("p",{className:"text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]",children:"לא מוכרת מידע אישי, ותעשה במידע שימוש רק ברשותך"})]})]})]}),e.jsxs("p",{className:"text-center text-[15px] font-light leading-5 tracking-[0.3px] text-[var(--color-primary)]",children:["בלחיצה על התחל אתם מסכימים",e.jsx("button",{type:"button",className:"text-[#3369FF] underline hover:opacity-80",onClick:n=>n.stopPropagation(),children:"למדיניות הפרטיות ותנאי השימוש"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(x,{variant:"primary",onClick:t,className:"h-[46px] w-[256px] px-4 py-3 text-[17px]",children:"התחל"})}),e.jsx("div",{className:"relative mx-auto mt-2 h-[150px] w-[150px]",children:e.jsx(a,{src:"/images/bankimage.png",alt:"",width:150,height:150,className:"h-full w-auto object-contain"})})]}),e.jsx("button",{type:"button",onClick:s,className:"absolute end-4 top-4 z-10 flex size-8 shrink-0 items-center justify-center rounded hover:bg-white/80","aria-label":"סגור",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12",stroke:"#020140",strokeWidth:"2",strokeLinecap:"round"})})})]})}):null}c.__docgenInfo={description:"",methods:[],displayName:"OpenFinanceConnectModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onStart:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O={title:"Design System/OpenFinanceConnectModal",component:c,parameters:{layout:"centered",docs:{description:{component:"פופאפ שלב 1 – אישור הלוואה מהיר. רקע מיוחד, כותרת דקורטיבית, שני בלוקי יתרונות, וכפתור התחל. כולל איור bankimage בתחתית."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},onClose:{action:"closed"},onStart:{action:"started"}}},i={args:{isOpen:!0,onClose:()=>{},onStart:()=>{}},parameters:{docs:{description:{story:"מצב פתוח – הפופאפ במלואו עם רקע, דקורציה עליונה, ואיור."}}}},o={render:function(){const[s,t]=l.useState(!1);return e.jsxs("div",{dir:"rtl",className:"flex flex-col items-center gap-4",children:[e.jsx(x,{variant:"primary",onClick:()=>t(!0),children:"פתח פופאפ בנקאות פתוחה"}),e.jsx(c,{isOpen:s,onClose:()=>t(!1),onStart:()=>{alert("התחל לחיצה!"),t(!1)}})]})},parameters:{docs:{description:{story:"לחיצה על הכפתור פותחת את הפופאפ. לחיצה על התחל או סגור סוגרת."}}}},r={render:function(){const[s,t]=l.useState(!1),[n,m]=l.useState(!1),[u,d]=l.useState(!1);return e.jsxs("div",{dir:"rtl",className:"flex flex-col items-center gap-4",children:[e.jsx(x,{variant:"primary",onClick:()=>t(!0),children:"התחל זרימה – פופאפ 1"}),e.jsx(c,{isOpen:s,onClose:()=>t(!1),onStart:()=>{t(!1),setTimeout(()=>m(!0),300)}}),e.jsx(f,{isOpen:n,onFinish:()=>{m(!1),setTimeout(()=>d(!0),300)}}),e.jsx(g,{isOpen:u,onFinish:()=>d(!1),onAdd:()=>{d(!1),setTimeout(()=>t(!0),300)}})]})},parameters:{docs:{description:{story:"זרימה מלאה: פופאפ 1 (התחל) → פופאפ 2 (הבנתי!) → פופאפ 3 (סיום)."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    onStart: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: "מצב פתוח – הפופאפ במלואו עם רקע, דקורציה עליונה, ואיור."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function WithTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    return <div dir="rtl" className="flex flex-col items-center gap-4">
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          פתח פופאפ בנקאות פתוחה
        </Button>
        <OpenFinanceConnectModal isOpen={isOpen} onClose={() => setIsOpen(false)} onStart={() => {
        alert("התחל לחיצה!");
        setIsOpen(false);
      }} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "לחיצה על הכפתור פותחת את הפופאפ. לחיצה על התחל או סגור סוגרת."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function FullFlow() {
    const [step1, setStep1] = useState(false);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    return <div dir="rtl" className="flex flex-col items-center gap-4">
        <Button variant="primary" onClick={() => setStep1(true)}>
          התחל זרימה – פופאפ 1
        </Button>
        <OpenFinanceConnectModal isOpen={step1} onClose={() => setStep1(false)} onStart={() => {
        setStep1(false);
        setTimeout(() => setStep2(true), 300);
      }} />
        <BeforeContinueModal isOpen={step2} onFinish={() => {
        setStep2(false);
        setTimeout(() => setStep3(true), 300);
      }} />
        <BankConnectedSuccessModal isOpen={step3} onFinish={() => setStep3(false)} onAdd={() => {
        setStep3(false);
        setTimeout(() => setStep1(true), 300);
      }} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "זרימה מלאה: פופאפ 1 (התחל) → פופאפ 2 (הבנתי!) → פופאפ 3 (סיום)."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"זרימת 3 השלבים – פופאפ 1 → 2 → 3",...r.parameters?.docs?.description}}};const b=["Default","WithTrigger","FullFlow"];export{i as Default,r as FullFlow,o as WithTrigger,b as __namedExportsOrder,O as default};
