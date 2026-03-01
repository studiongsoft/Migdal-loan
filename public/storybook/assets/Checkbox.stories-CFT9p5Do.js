import{j as t}from"./jsx-runtime-Eifrrug6.js";import{r as l}from"./iframe-CGSukN2e.js";import{C as o}from"./Checkbox-Bi2Ysqah.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Design System/Checkbox",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:{type:"number",min:16,max:32}}}},e={args:{checked:!1}},r={args:{checked:!0}},s={render:()=>{const[n,d]=l.useState(!1);return t.jsxs("label",{className:"flex cursor-pointer items-center gap-3",dir:"rtl",children:[t.jsx(o,{checked:n,onChange:d}),t.jsx("span",{className:"text-[18px] font-light text-[var(--color-primary)]",children:"חשבון זהה גם להעברת כספי ההלוואה וגם לגביית ההחזרים החודשיים"})]})}},a={args:{checked:!1,disabled:!0}},c={args:{checked:!0,disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <label className="flex cursor-pointer items-center gap-3" dir="rtl">
        <Checkbox checked={checked} onChange={setChecked} />
        <span className="text-[18px] font-light text-[var(--color-primary)]">
          חשבון זהה גם להעברת כספי ההלוואה וגם לגביית ההחזרים החודשיים
        </span>
      </label>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const k=["Unchecked","Checked","Interactive","Disabled","DisabledChecked"];export{r as Checked,a as Disabled,c as DisabledChecked,s as Interactive,e as Unchecked,k as __namedExportsOrder,h as default};
