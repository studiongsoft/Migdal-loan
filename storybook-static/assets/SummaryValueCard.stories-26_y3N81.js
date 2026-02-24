import{j as e}from"./jsx-runtime-DMt_yit2.js";import"./iframe-Ci18ShzC.js";import"./preload-helper-PPVm8Dsz.js";function l({label:n,value:o,className:c=""}){const m=new Intl.NumberFormat("he-IL").format(o);return e.jsxs("div",{className:`flex flex-col items-center ${c}`,children:[e.jsx("p",{className:"text-center text-[24px] font-bold text-[var(--color-primary-light)]",children:n}),e.jsx("div",{className:"flex items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-4 py-2",children:e.jsxs("p",{className:"flex items-baseline gap-0.5",children:[e.jsx("span",{className:"text-[15px] font-bold text-[var(--color-accent-green)]",children:"₪"}),e.jsx("span",{className:"text-[24px] font-bold text-[var(--color-accent-green)]",children:m})]})})]})}l.__docgenInfo={description:"",methods:[],displayName:"SummaryValueCard",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const p={title:"Design System/SummaryValueCard",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0}}}},a={args:{label:"החזר משוער חודשי:",value:4600}},r={args:{label:"סכום הלוואה כולל:",value:5e4}},s={args:{label:"החזר משוער כולל:",value:6663}},t={render:()=>e.jsxs("div",{dir:"rtl",className:"flex flex-wrap justify-center gap-4",children:[e.jsx(l,{label:"סכום הלוואה כולל:",value:5e4}),e.jsx(l,{label:"החזר משוער כולל:",value:6663})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "החזר משוער חודשי:",
    value: 4600
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "סכום הלוואה כולל:",
    value: 50000
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "החזר משוער כולל:",
    value: 6663
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="flex flex-wrap justify-center gap-4">
      <SummaryValueCard label="סכום הלוואה כולל:" value={50000} />
      <SummaryValueCard label="החזר משוער כולל:" value={6663} />
    </div>
}`,...t.parameters?.docs?.source}}};const x=["MonthlyPayment","TotalLoanAmount","EstimatedTotalRepayment","SideBySide"];export{s as EstimatedTotalRepayment,a as MonthlyPayment,t as SideBySide,r as TotalLoanAmount,x as __namedExportsOrder,p as default};
