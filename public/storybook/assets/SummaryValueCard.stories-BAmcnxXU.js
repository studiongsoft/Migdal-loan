import{j as e}from"./jsx-runtime-Eifrrug6.js";import{n as p}from"./image-DvEAMrFU.js";import"./iframe-CGSukN2e.js";import"./preload-helper-PPVm8Dsz.js";const x={monthly:"/images/Pilesofmoney.svg",total:"/images/Money Growth.svg"},i={monthly:{width:40,height:68},total:{width:76,height:67}};function a({label:m,value:c,variant:o="monthly",className:d=""}){const u=new Intl.NumberFormat("he-IL").format(c);return e.jsxs("div",{className:`relative flex h-[102px] shrink-0 flex-col items-center justify-center overflow-visible rounded-[8px] border border-[#d4e5f5] bg-[#e3eef8] px-5 py-6 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)] md:px-8 md:py-6 ${d}`,dir:"rtl",children:[e.jsxs("div",{className:"flex h-[54px] flex-col items-center justify-center gap-2 ps-5",children:[e.jsx("p",{className:"flex h-[32px] items-center justify-center text-center text-[24px] font-normal leading-normal text-[#3c65e3]",children:m}),e.jsxs("div",{className:"flex h-[14px] items-center justify-center gap-0.5",children:[e.jsx("span",{className:"text-[15px] font-bold text-[var(--color-primary)]",children:"₪"}),e.jsx("span",{className:"text-[24px] font-bold leading-normal text-[var(--color-primary)]",children:u})]})]}),e.jsx(p,{src:x[o],alt:"",width:i[o].width,height:i[o].height,className:"absolute -right-4 top-[44px] object-contain","aria-hidden":!0})]})}a.__docgenInfo={description:"",methods:[],displayName:"SummaryValueCard",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"monthly" | "total"',elements:[{name:"literal",value:'"monthly"'},{name:"literal",value:'"total"'}]},description:"",defaultValue:{value:'"monthly"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const g={title:"Design System/SummaryValueCard",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0}},variant:{control:"select",options:["monthly","total"]}}},r={args:{label:"החזר משוער חודשי:",value:4600}},t={args:{label:"סכום הלוואה כולל:",value:5e4,variant:"total"}},l={args:{label:"החזר משוער כולל:",value:6663}},s={render:()=>e.jsxs("div",{dir:"rtl",className:"flex flex-nowrap justify-center gap-[40px]",children:[e.jsx(a,{label:"סכום הלוואה כולל:",value:5e4,variant:"total"}),e.jsx(a,{label:"החזר משוער כולל:",value:6663})]})},n={render:()=>e.jsxs("div",{dir:"rtl",className:"flex flex-col items-center gap-6",children:[e.jsx(a,{label:"החזר משוער חודשי:",value:4600}),e.jsxs("div",{className:"flex flex-nowrap justify-center gap-[40px]",children:[e.jsx(a,{label:"סכום הלוואה כולל:",value:5e4,variant:"total"}),e.jsx(a,{label:"החזר משוער כולל:",value:6663})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "החזר משוער חודשי:",
    value: 4600
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "סכום הלוואה כולל:",
    value: 50000,
    variant: "total"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "החזר משוער כולל:",
    value: 6663
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="flex flex-nowrap justify-center gap-[40px]">
      <SummaryValueCard label="סכום הלוואה כולל:" value={50000} variant="total" />
      <SummaryValueCard label="החזר משוער כולל:" value={6663} />
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="flex flex-col items-center gap-6">
      <SummaryValueCard label="החזר משוער חודשי:" value={4600} />
      <div className="flex flex-nowrap justify-center gap-[40px]">
        <SummaryValueCard label="סכום הלוואה כולל:" value={50000} variant="total" />
        <SummaryValueCard label="החזר משוער כולל:" value={6663} />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const b=["MonthlyPayment","TotalLoanAmount","EstimatedTotalRepayment","SideBySide","AllVariants"];export{n as AllVariants,l as EstimatedTotalRepayment,r as MonthlyPayment,s as SideBySide,t as TotalLoanAmount,b as __namedExportsOrder,g as default};
