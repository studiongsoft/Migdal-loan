import{j as e}from"./jsx-runtime-Eifrrug6.js";import{A as o}from"./AmortizationSchedule-zsONde5E.js";import"./iframe-CGSukN2e.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Du-WEOmL.js";import"./InfoTooltip-BXz6zNVu.js";import"./image-DvEAMrFU.js";import"./Radio-CD43ZnkA.js";const S={title:"Design System/Schedule/AmortizationSchedule",component:o,parameters:{layout:"centered"},tags:["autodocs"]},c=[{id:"1",name:"קרן השתלמות",loanAmount:22200,annualRatePercent:3.1,months:17,graceMonths:2,loanType:"שפיצר"}],m=[{id:"1",name:"קרן השתלמות | 2143245453",loanAmount:22200,annualRatePercent:3.1,months:17,graceMonths:2,loanType:"שפיצר"},{id:"2",name:"קופת גמל להשקעה | 654655764",loanAmount:2e4,annualRatePercent:3.1,months:17,graceMonths:2,loanType:"שפיצר"},{id:"3",name:"קרן השתלמות | 2978756434",loanAmount:7800,annualRatePercent:3.3,months:14,graceMonths:0,loanType:"בלון"}],s=({children:r})=>e.jsx("div",{dir:"rtl",className:"w-[780px] rounded-[16px] border border-[#E6ECF5] bg-white p-6",children:r}),t={args:{products:c},render:r=>e.jsx(s,{children:e.jsx(o,{...r})})},n={args:{products:m},render:r=>e.jsx(s,{children:e.jsx(o,{...r})})},a={args:{products:c,primaryButtonLabel:"אפשר להמשיך",onPrimaryButtonClick:()=>alert("לחיצה")},render:r=>e.jsx(s,{children:e.jsx(o,{...r})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    products: SINGLE_PRODUCT
  },
  render: args => <Frame>
      <AmortizationSchedule {...args} />
    </Frame>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    products: MULTI_PRODUCT
  },
  render: args => <Frame>
      <AmortizationSchedule {...args} />
    </Frame>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    products: SINGLE_PRODUCT,
    primaryButtonLabel: "אפשר להמשיך",
    onPrimaryButtonClick: () => alert("לחיצה")
  },
  render: args => <Frame>
      <AmortizationSchedule {...args} />
    </Frame>
}`,...a.parameters?.docs?.source}}};const x=["SingleProduct","MultipleProducts","WithButton"];export{n as MultipleProducts,t as SingleProduct,a as WithButton,x as __namedExportsOrder,S as default};
