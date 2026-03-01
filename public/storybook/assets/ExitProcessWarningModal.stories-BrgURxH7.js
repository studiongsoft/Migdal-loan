import{j as r}from"./jsx-runtime-CGdb-zRh.js";import{r as s}from"./iframe-B4fJKyuY.js";import{E as n}from"./ExitProcessWarningModal-nXnjwilN.js";import{B as a}from"./Button-BYX2HB-8.js";import"./preload-helper-PPVm8Dsz.js";import"./image-aUGlxb43.js";import"./Popup--OmUp2fu.js";const x={title:"Design System/ExitProcessWarningModal",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={render:function(){const[o,t]=s.useState(!1);return r.jsxs("div",{dir:"rtl",children:[r.jsx(a,{variant:"primary",onClick:()=>t(!0),children:"פתח אזהרת יציאה"}),r.jsx(n,{isOpen:o,onClose:()=>t(!1),onConfirm:()=>{t(!1),alert("יציאה מאושרת")}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function DefaultStory() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח אזהרת יציאה
        </Button>
        <ExitProcessWarningModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => {
        setOpen(false);
        alert("יציאה מאושרת");
      }} />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,x as default};
