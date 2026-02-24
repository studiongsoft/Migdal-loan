import{j as r}from"./jsx-runtime-DMt_yit2.js";import{r as a}from"./iframe-Ci18ShzC.js";import{B as t}from"./BankConnectedSuccessModal-C66mm3IN.js";import{B as i}from"./Button-_FKim5JR.js";import"./preload-helper-PPVm8Dsz.js";import"./image-BC_zGh6x.js";const g={title:"Design System/BankConnectedSuccessModal",component:t,parameters:{layout:"centered",docs:{description:{component:"פופאפ שלב 3 – החשבון חובר בהצלחה. כולל calc.png, אנימציית קונפטי, וכפתור סיום."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},onFinish:{action:"finished"}}},e={args:{isOpen:!0,onFinish:()=>{},onAdd:()=>{}},parameters:{docs:{description:{story:"מצב פתוח – הפופאפ עם הודעת הצלחה וקונפטי."}}}},n={render:function(){const[o,s]=a.useState(!1);return r.jsxs("div",{dir:"rtl",className:"flex flex-col items-center gap-4",children:[r.jsx(i,{variant:"primary",onClick:()=>s(!0),children:"פתח פופאפ החשבון חובר בהצלחה"}),r.jsx(t,{isOpen:o,onFinish:()=>{alert("סיום"),s(!1)},onAdd:()=>{alert("הוסף חשבון נוסף"),s(!1)}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const O=["Default","WithTrigger"];export{e as Default,n as WithTrigger,O as __namedExportsOrder,g as default};
