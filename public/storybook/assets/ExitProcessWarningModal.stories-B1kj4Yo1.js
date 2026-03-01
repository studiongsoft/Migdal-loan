import{j as r}from"./jsx-runtime-Eifrrug6.js";import{r as s}from"./iframe-CGSukN2e.js";import{E as n}from"./ExitProcessWarningModal-BokZTHYT.js";import{B as a}from"./Button-Du-WEOmL.js";import"./preload-helper-PPVm8Dsz.js";import"./image-DvEAMrFU.js";import"./Popup-BqFb1dI8.js";const x={title:"Design System/ExitProcessWarningModal",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={render:function(){const[o,t]=s.useState(!1);return r.jsxs("div",{dir:"rtl",children:[r.jsx(a,{variant:"primary",onClick:()=>t(!0),children:"פתח אזהרת יציאה"}),r.jsx(n,{isOpen:o,onClose:()=>t(!1),onConfirm:()=>{t(!1),alert("יציאה מאושרת")}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
