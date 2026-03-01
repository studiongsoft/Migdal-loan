import{j as r}from"./jsx-runtime-CGdb-zRh.js";import{r as s}from"./iframe-B4fJKyuY.js";import{S as n}from"./SystemErrorModal-BfOyLlAy.js";import{B as a}from"./Button-BYX2HB-8.js";import"./preload-helper-PPVm8Dsz.js";import"./image-aUGlxb43.js";import"./Popup--OmUp2fu.js";const S={title:"Design System/SystemErrorModal",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={render:function(){const[o,t]=s.useState(!1);return r.jsxs("div",{dir:"rtl",children:[r.jsx(a,{variant:"primary",onClick:()=>t(!0),children:"הצג תקלת מערכת"}),r.jsx(n,{isOpen:o,onClose:()=>t(!1),onContinue:()=>{t(!1),alert("המשך")}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function DefaultStory() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג תקלת מערכת
        </Button>
        <SystemErrorModal isOpen={open} onClose={() => setOpen(false)} onContinue={() => {
        setOpen(false);
        alert("המשך");
      }} />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,S as default};
