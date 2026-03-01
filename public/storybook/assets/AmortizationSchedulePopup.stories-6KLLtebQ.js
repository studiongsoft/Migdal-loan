import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as i}from"./iframe-B4fJKyuY.js";import{B as p}from"./Button-BYX2HB-8.js";import{A as f}from"./AmortizationSchedule-DzAEuiNk.js";import{P as h}from"./Popup--OmUp2fu.js";import"./preload-helper-PPVm8Dsz.js";import"./InfoTooltip-CEpu9bEK.js";import"./image-aUGlxb43.js";import"./Radio-Ck9QHAfG.js";function a({isOpen:s,onClose:t,loanAmount:n,monthlyPayment:S,annualRatePercent:l=2.8,months:m=17,graceMonths:d=2,products:u}){const c=u&&u.length>0?u:[{id:"default",name:"הלוואה",loanAmount:n,annualRatePercent:l,months:m,graceMonths:d,loanType:"שפיצר"}];return e.jsx(h,{isOpen:s,onClose:t,maxWidth:"780px",children:y=>e.jsx(f,{products:c,primaryButtonLabel:"אפשר להמשיך",onPrimaryButtonClick:y})})}a.__docgenInfo={description:"",methods:[],displayName:"AmortizationSchedulePopup",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loanAmount:{required:!0,tsType:{name:"number"},description:"Single-product mode: pass loan params directly"},monthlyPayment:{required:!0,tsType:{name:"number"},description:""},annualRatePercent:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2.8",computed:!1}},months:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"17",computed:!1}},graceMonths:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},products:{required:!1,tsType:{name:"Array",elements:[{name:"ScheduleProduct"}],raw:"ScheduleProduct[]"},description:"Multi-product mode: when provided, product selection changes schedule"}}};const b={title:"Design System/Schedule/AmortizationSchedulePopup",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"}}},P=[{id:"1",name:"קרן השתלמות",loanAmount:22200,annualRatePercent:3.1,months:17,graceMonths:2,loanType:"שפיצר"}],O=[{id:"1",name:"קרן השתלמות | 2143245453",loanAmount:22200,annualRatePercent:3.1,months:17,graceMonths:2,loanType:"שפיצר"},{id:"2",name:"קופת גמל להשקעה | 654655764",loanAmount:2e4,annualRatePercent:3.1,months:17,graceMonths:2,loanType:"שפיצר"}],r={render:function(){const[t,n]=i.useState(!1);return e.jsxs("div",{dir:"rtl",className:"p-8",children:[e.jsx(p,{variant:"primary",onClick:()=>n(!0),children:"הצג לוח סילוקין"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),loanAmount:22200,monthlyPayment:1350,products:P})]})}},o={render:function(){const[t,n]=i.useState(!1);return e.jsxs("div",{dir:"rtl",className:"p-8",children:[e.jsx(p,{variant:"primary",onClick:()=>n(!0),children:"הצג לוח סילוקין (מספר מוצרים)"}),e.jsx(a,{isOpen:t,onClose:()=>n(!1),loanAmount:22200,monthlyPayment:1350,products:O})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג לוח סילוקין
        </Button>
        <AmortizationSchedulePopup isOpen={open} onClose={() => setOpen(false)} loanAmount={22200} monthlyPayment={1350} products={SINGLE_PRODUCT} />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div dir="rtl" className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          הצג לוח סילוקין (מספר מוצרים)
        </Button>
        <AmortizationSchedulePopup isOpen={open} onClose={() => setOpen(false)} loanAmount={22200} monthlyPayment={1350} products={MULTI_PRODUCT} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const q=["Default","MultipleProducts"];export{r as Default,o as MultipleProducts,q as __namedExportsOrder,b as default};
