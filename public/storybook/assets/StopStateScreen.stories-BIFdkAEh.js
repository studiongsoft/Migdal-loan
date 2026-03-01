import{j as e}from"./jsx-runtime-Eifrrug6.js";import{n as p}from"./image-DvEAMrFU.js";import{B as n}from"./Button-Du-WEOmL.js";import"./iframe-CGSukN2e.js";import"./preload-helper-PPVm8Dsz.js";function i({title:o,subtitle:l,primaryButton:a,secondaryButton:r}){const c=a||r;return e.jsx("div",{dir:"rtl",className:"flex flex-col items-center gap-12",children:e.jsxs("div",{className:"flex max-w-[665px] flex-col items-center gap-8 text-center",children:[e.jsx(p,{src:"/images/stop.png",alt:"",width:225,height:347,className:"object-contain","aria-hidden":!0}),e.jsx("h2",{className:"text-[32px] font-bold leading-[1.3] text-black md:text-[40px] lg:text-[52px]",children:o}),e.jsx("p",{className:"max-w-[600px] text-[18px] font-light leading-[1.3] text-black md:text-[24px]",children:l}),c&&e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-[40px]",children:[a&&e.jsx(n,{variant:"primary",onClick:a.onClick,className:"min-w-[256px]",children:a.label}),r&&e.jsx(n,{variant:"secondary",onClick:r.onClick,className:"min-w-[256px]",children:r.label})]})]})})}i.__docgenInfo={description:"",methods:[],displayName:"StopStateScreen",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},primaryButton:{required:!1,tsType:{name:"StopStateButton"},description:""},secondaryButton:{required:!1,tsType:{name:"StopStateButton"},description:""}}};const f={title:"Design System/StopStateScreen",component:i,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{title:"לצערנו לא ניתן להמשיך",subtitle:"לאחר בדיקת האשראי נראה כי לא ניתן לתת לך הלוואה",primaryButton:{label:"לדף הבית",onClick:()=>{}}}},s={args:{title:"לצערנו לא ניתן להמשיך",subtitle:"לא נמצאו תוכניות חיסכון",primaryButton:{label:"להלוואה על בסיס אשראי חיצוני",onClick:()=>{}},secondaryButton:{label:"לדף הבית",onClick:()=>{}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "לצערנו לא ניתן להמשיך",
    subtitle: "לאחר בדיקת האשראי נראה כי לא ניתן לתת לך הלוואה",
    primaryButton: {
      label: "לדף הבית",
      onClick: () => {}
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"מצב עצירה – לא ניתן להמשיך (בדיקת אשראי)",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "לצערנו לא ניתן להמשיך",
    subtitle: "לא נמצאו תוכניות חיסכון",
    primaryButton: {
      label: "להלוואה על בסיס אשראי חיצוני",
      onClick: () => {}
    },
    secondaryButton: {
      label: "לדף הבית",
      onClick: () => {}
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"מצב עצירה – לא נמצאו תוכניות חיסכון",...s.parameters?.docs?.description}}};const S=["CreditCheckFailed","NoSavingsPlans"];export{t as CreditCheckFailed,s as NoSavingsPlans,S as __namedExportsOrder,f as default};
