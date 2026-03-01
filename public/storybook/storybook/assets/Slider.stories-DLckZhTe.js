import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as m}from"./iframe-B4fJKyuY.js";import{S as l}from"./Slider-srqZN1oj.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Design System/Slider",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"}}},c=r=>new Intl.NumberFormat("he-IL").format(r)+" ₪",t={args:{value:50,min:0,max:100,onChange:()=>{}}},n={render:()=>{const[r,a]=m.useState(5e4);return e.jsxs("div",{dir:"rtl",className:"w-full max-w-[400px]",children:[e.jsx(l,{value:r,min:1e3,max:1e5,onChange:a,formatValue:c}),e.jsx("p",{className:"mt-2 text-[18px] font-normal text-[var(--color-primary)]",children:"יש לבחור סכום בין 1,000 ₪ ל- 100,000 ₪"})]})}},s={render:()=>{const[r,a]=m.useState(14);return e.jsxs("div",{dir:"rtl",className:"w-full max-w-[400px]",children:[e.jsx(l,{value:r,min:14,max:84,onChange:a,formatValue:u=>String(u)}),e.jsx("p",{className:"mt-2 text-[18px] font-normal text-[var(--color-primary)]",children:"יש לבחור בין 14 ל- 84 חודשים"})]})}},o={render:()=>{const[r,a]=m.useState(50);return e.jsxs("div",{dir:"rtl",className:"w-full max-w-[400px]",children:[e.jsxs("p",{className:"mb-2 text-[16px] font-bold text-[var(--color-primary)]",children:["ערך: ",r]}),e.jsx(l,{value:r,min:0,max:100,onChange:a})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    min: 0,
    max: 100,
    onChange: () => {}
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50000);
    return <div dir="rtl" className="w-full max-w-[400px]">
        <Slider value={value} min={1000} max={100000} onChange={setValue} formatValue={formatCurrency} />
        <p className="mt-2 text-[18px] font-normal text-[var(--color-primary)]">
          יש לבחור סכום בין 1,000 ₪ ל- 100,000 ₪
        </p>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(14);
    return <div dir="rtl" className="w-full max-w-[400px]">
        <Slider value={value} min={14} max={84} onChange={setValue} formatValue={v => String(v)} />
        <p className="mt-2 text-[18px] font-normal text-[var(--color-primary)]">
          יש לבחור בין 14 ל- 84 חודשים
        </p>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <div dir="rtl" className="w-full max-w-[400px]">
        <p className="mb-2 text-[16px] font-bold text-[var(--color-primary)]">ערך: {value}</p>
        <Slider value={value} min={0} max={100} onChange={setValue} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","LoanAmount","LoanMonths","Interactive"];export{t as Default,o as Interactive,n as LoanAmount,s as LoanMonths,f as __namedExportsOrder,v as default};
