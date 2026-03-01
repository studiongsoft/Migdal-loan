import{j as r}from"./jsx-runtime-Eifrrug6.js";import{r as a}from"./iframe-CGSukN2e.js";import{E as c}from"./ExitProcessWarningModal-BokZTHYT.js";import{S as d}from"./SystemErrorModal-dPJa32Yw.js";import{B as i}from"./Button-Du-WEOmL.js";import"./preload-helper-PPVm8Dsz.js";import"./image-DvEAMrFU.js";import"./Popup-BqFb1dI8.js";const g={title:"Design System/Modals",parameters:{layout:"centered"},tags:["autodocs"]},s={render:function(){const[n,e]=a.useState(!1);return r.jsxs("div",{dir:"rtl",className:"flex flex-col gap-4",children:[r.jsx(i,{variant:"primary",onClick:()=>e(!0),children:"פתח אזהרת יציאה"}),r.jsx(c,{isOpen:n,onClose:()=>e(!1),onConfirm:()=>e(!1)})]})}},t={render:function(){const[n,e]=a.useState(!1);return r.jsxs("div",{dir:"rtl",className:"flex flex-col gap-4",children:[r.jsx(i,{variant:"primary",onClick:()=>e(!0),children:"הצג תקלת מערכת"}),r.jsx(d,{isOpen:n,onClose:()=>e(!1),onContinue:()=>e(!1)})]})}},o={render:function(){const[n,e]=a.useState(!1),[u,l]=a.useState(!1);return r.jsxs("div",{dir:"rtl",className:"flex flex-wrap gap-4",children:[r.jsx(i,{variant:"primary",onClick:()=>e(!0),children:"אזהרת יציאה"}),r.jsx(i,{variant:"secondary",onClick:()=>l(!0),children:"תקלת מערכת"}),r.jsx(c,{isOpen:n,onClose:()=>e(!1),onConfirm:()=>e(!1)}),r.jsx(d,{isOpen:u,onClose:()=>l(!1),onContinue:()=>l(!1)})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function ExitProcessWarningStory() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl" className="flex flex-col gap-4">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח אזהרת יציאה
        </Button>
        <ExitProcessWarningModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function SystemErrorStory() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl" className="flex flex-col gap-4">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג תקלת מערכת
        </Button>
        <SystemErrorModal isOpen={open} onClose={() => setOpen(false)} onContinue={() => setOpen(false)} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function BothModalsStory() {
    const [exitOpen, setExitOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    return <div dir="rtl" className="flex flex-wrap gap-4">
        <Button variant="primary" onClick={() => setExitOpen(true)}>
          אזהרת יציאה
        </Button>
        <Button variant="secondary" onClick={() => setErrorOpen(true)}>
          תקלת מערכת
        </Button>
        <ExitProcessWarningModal isOpen={exitOpen} onClose={() => setExitOpen(false)} onConfirm={() => setExitOpen(false)} />
        <SystemErrorModal isOpen={errorOpen} onClose={() => setErrorOpen(false)} onContinue={() => setErrorOpen(false)} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const v=["ExitProcessWarning","SystemError","BothModals"];export{o as BothModals,s as ExitProcessWarning,t as SystemError,v as __namedExportsOrder,g as default};
