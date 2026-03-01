import{j as r}from"./jsx-runtime-Eifrrug6.js";import{r as s}from"./iframe-CGSukN2e.js";import{S as n}from"./SystemErrorModal-dPJa32Yw.js";import{B as a}from"./Button-Du-WEOmL.js";import"./preload-helper-PPVm8Dsz.js";import"./image-DvEAMrFU.js";import"./Popup-BqFb1dI8.js";const S={title:"Design System/SystemErrorModal",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={render:function(){const[o,t]=s.useState(!1);return r.jsxs("div",{dir:"rtl",children:[r.jsx(a,{variant:"primary",onClick:()=>t(!0),children:"הצג תקלת מערכת"}),r.jsx(n,{isOpen:o,onClose:()=>t(!1),onContinue:()=>{t(!1),alert("המשך")}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
