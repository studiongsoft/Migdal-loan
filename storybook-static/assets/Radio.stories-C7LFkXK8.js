import{j as e}from"./jsx-runtime-DMt_yit2.js";import{r as t}from"./iframe-Ci18ShzC.js";import{R as n}from"./Radio-CILNj6qV.js";import"./preload-helper-PPVm8Dsz.js";import"./InfoTooltip-C9zkFLtA.js";import"./image-BC_zGh6x.js";const y={title:"Design System/Radio",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["card","minimal"]}}},o={args:{value:"option1",label:"אפשרות ראשונה",name:"demo",checked:!1,onChange:()=>{}}},c={args:{value:"option1",label:"אפשרות ראשונה",name:"demo",checked:!0,onChange:()=>{}}},i={render:()=>{const[r,s]=t.useState("fixed"),l=[{value:"fixed",label:"קבועה 3.1%"},{value:"variable",label:"משתנה פריים- 3.3%"}];return e.jsx("div",{className:"flex flex-wrap gap-2",dir:"rtl",children:l.map(a=>e.jsx(n,{value:a.value,label:a.label,name:"interest",checked:r===a.value,onChange:()=>s(a.value)},a.value))})}},d={render:()=>{const[r,s]=t.useState("fixed"),[l,a]=t.useState("spitzer"),[h,b]=t.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-6",dir:"rtl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-[14px] font-normal text-[#5E5D9A]",children:"ריבית"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{value:"fixed",label:"קבועה 3.1%",name:"rate",checked:r==="fixed",onChange:()=>s("fixed")}),e.jsx(n,{value:"variable",label:"משתנה פריים- 3.3%",name:"rate",checked:r==="variable",onChange:()=>s("variable")})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-[14px] font-normal text-[#5E5D9A]",children:"סוג הלוואה"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{value:"spitzer",label:"שפיצר",name:"loanType",checked:l==="spitzer",onChange:()=>a("spitzer")}),e.jsx(n,{value:"balloon",label:"בלון",name:"loanType",checked:l==="balloon",onChange:()=>a("balloon")}),e.jsx(n,{value:"partial_balloon",label:"בלון חלקי",name:"loanType",checked:l==="partial_balloon",onChange:()=>a("partial_balloon")})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-[14px] font-normal text-[#5E5D9A]",children:"גרייס"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{value:"yes",label:"כן",name:"grace",checked:h,onChange:()=>b(!0)}),e.jsx(n,{value:"no",label:"ללא",name:"grace",checked:!h,onChange:()=>b(!1)})]})]})]})}},m={args:{value:"option1",label:"אפשרות לא זמינה",name:"demo",checked:!1,onChange:()=>{},disabled:!0}},p={args:{value:"option1",label:"אפשרות נבחרת (לא זמינה)",name:"demo",checked:!0,onChange:()=>{},disabled:!0}},u={args:{value:"variable",label:"משתנה פריים- 3.3%",name:"interest",checked:!1,onChange:()=>{},variant:"minimal"}},v={args:{value:"fixed",label:"קבועה 3.1%",name:"interest",checked:!0,onChange:()=>{},variant:"minimal"}},x={render:()=>{const[r,s]=t.useState("fixed"),l=[{value:"fixed",label:"קבועה 3.1%"},{value:"variable",label:"משתנה פריים- 3.3%"}];return e.jsxs("div",{dir:"rtl",children:[e.jsx("p",{className:"mb-3 text-[14px] font-normal text-[#5E5D9A]",children:"ריבית"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:l.map(a=>e.jsx(n,{value:a.value,label:a.label,name:"interest-minimal",checked:r===a.value,onChange:()=>s(a.value),variant:"minimal"},a.value))})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: "option1",
    label: "אפשרות ראשונה",
    name: "demo",
    checked: false,
    onChange: () => {}
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: "option1",
    label: "אפשרות ראשונה",
    name: "demo",
    checked: true,
    onChange: () => {}
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("fixed");
    const options = [{
      value: "fixed",
      label: "קבועה 3.1%"
    }, {
      value: "variable",
      label: "משתנה פריים- 3.3%"
    }];
    return <div className="flex flex-wrap gap-2" dir="rtl">
        {options.map(opt => <Radio key={opt.value} value={opt.value} label={opt.label} name="interest" checked={selected === opt.value} onChange={() => setSelected(opt.value)} />)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rate, setRate] = useState("fixed");
    const [loanType, setLoanType] = useState("spitzer");
    const [hasGrace, setHasGrace] = useState(false);
    return <div className="flex flex-col gap-6" dir="rtl">
        <div>
          <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">ריבית</p>
          <div className="flex flex-wrap gap-2">
            <Radio value="fixed" label="קבועה 3.1%" name="rate" checked={rate === "fixed"} onChange={() => setRate("fixed")} />
            <Radio value="variable" label="משתנה פריים- 3.3%" name="rate" checked={rate === "variable"} onChange={() => setRate("variable")} />
          </div>
        </div>
        <div>
          <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">סוג הלוואה</p>
          <div className="flex flex-wrap gap-2">
            <Radio value="spitzer" label="שפיצר" name="loanType" checked={loanType === "spitzer"} onChange={() => setLoanType("spitzer")} />
            <Radio value="balloon" label="בלון" name="loanType" checked={loanType === "balloon"} onChange={() => setLoanType("balloon")} />
            <Radio value="partial_balloon" label="בלון חלקי" name="loanType" checked={loanType === "partial_balloon"} onChange={() => setLoanType("partial_balloon")} />
          </div>
        </div>
        <div>
          <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">גרייס</p>
          <div className="flex flex-wrap gap-2">
            <Radio value="yes" label="כן" name="grace" checked={hasGrace} onChange={() => setHasGrace(true)} />
            <Radio value="no" label="ללא" name="grace" checked={!hasGrace} onChange={() => setHasGrace(false)} />
          </div>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: "option1",
    label: "אפשרות לא זמינה",
    name: "demo",
    checked: false,
    onChange: () => {},
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: "option1",
    label: "אפשרות נבחרת (לא זמינה)",
    name: "demo",
    checked: true,
    onChange: () => {},
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: "variable",
    label: "משתנה פריים- 3.3%",
    name: "interest",
    checked: false,
    onChange: () => {},
    variant: "minimal"
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: "fixed",
    label: "קבועה 3.1%",
    name: "interest",
    checked: true,
    onChange: () => {},
    variant: "minimal"
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("fixed");
    const options = [{
      value: "fixed",
      label: "קבועה 3.1%"
    }, {
      value: "variable",
      label: "משתנה פריים- 3.3%"
    }];
    return <div dir="rtl">
        <p className="mb-3 text-[14px] font-normal text-[#5E5D9A]">ריבית</p>
        <div className="flex flex-wrap gap-6">
          {options.map(opt => <Radio key={opt.value} value={opt.value} label={opt.label} name="interest-minimal" checked={selected === opt.value} onChange={() => setSelected(opt.value)} variant="minimal" />)}
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};const N=["Unchecked","Checked","Interactive","GroupExample","Disabled","DisabledChecked","MinimalUnchecked","MinimalChecked","MinimalInteractive"];export{c as Checked,m as Disabled,p as DisabledChecked,d as GroupExample,i as Interactive,v as MinimalChecked,x as MinimalInteractive,u as MinimalUnchecked,o as Unchecked,N as __namedExportsOrder,y as default};
