import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as a}from"./iframe-B4fJKyuY.js";import{B as p}from"./Button-BYX2HB-8.js";import{P as o}from"./Popup--OmUp2fu.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Design System/Popup",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},closeOnBackdropClick:{control:"boolean"}}},i=()=>e.jsxs("div",{dir:"rtl",className:"flex flex-col gap-4",children:[e.jsx("h2",{className:"text-right text-[24px] font-bold text-[var(--color-primary)]",children:"כותרת לדוגמה"}),e.jsx("p",{className:"text-right text-[16px] text-[var(--color-primary)]",children:"זהו תוכן לדוגמה בפופאפ. לחיצה על הרקע או על כפתור הסגירה תסגור אותו."})]}),t={render:function(){const[s,n]=a.useState(!1);return e.jsxs("div",{dir:"rtl",className:"p-8",children:[e.jsx(p,{variant:"primary",onClick:()=>n(!0),children:"פתח פופאפ"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),children:e.jsx(i,{})})]})}},r={render:function(){const[s,n]=a.useState(!1);return e.jsxs("div",{dir:"rtl",className:"p-8",children:[e.jsx(p,{variant:"primary",onClick:()=>n(!0),children:"פתח פופאפ רחב"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),maxWidth:"500px",children:e.jsx(i,{})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח פופאפ
        </Button>
        <Popup isOpen={open} onClose={() => setOpen(false)}>
          <DemoContent />
        </Popup>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          פתח פופאפ רחב
        </Button>
        <Popup isOpen={open} onClose={() => setOpen(false)} maxWidth="500px">
          <DemoContent />
        </Popup>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const h=["Default","CustomWidth"];export{r as CustomWidth,t as Default,h as __namedExportsOrder,f as default};
