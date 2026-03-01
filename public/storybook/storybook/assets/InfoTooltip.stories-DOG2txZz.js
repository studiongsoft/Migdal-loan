import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{I as s}from"./InfoTooltip-CEpu9bEK.js";import"./iframe-B4fJKyuY.js";import"./preload-helper-PPVm8Dsz.js";import"./image-aUGlxb43.js";const g={title:"Design System/Tooltip/InfoTooltip",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},body:{control:"text"},triggerVariant:{control:"select",options:["default","status"]}}},a=({children:r})=>e.jsx("div",{dir:"rtl",className:"bg-white p-10 rounded-[16px] border border-[#E6ECF5]",children:r}),t={args:{title:"כספים נזילים",body:"אלו כספים שניתן לגשת אליהם במהירות ובקלות, כמו מזומן או כסף בחשבון בנק."},render:r=>e.jsx(a,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[16px] text-[var(--color-primary)]",children:"סטטוס הכספים"}),e.jsx(s,{...r})]})})},n={args:{title:"ריבית קבועה",body:"ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים."},render:r=>e.jsx(a,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[16px] text-[var(--color-primary)]",children:"ריבית"}),e.jsx(s,{...r})]})})},o={args:{title:"שיעור ריבית נומינלית שנתית",body:"זהו שיעור הריבית השנתי שעל פיו מחושבים תשלומי ההחזר."},render:r=>e.jsx(a,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[18px] font-bold text-[var(--color-primary)]",children:"3.1%"}),e.jsx(s,{...r,children:e.jsx("span",{className:"flex size-5 cursor-pointer items-center justify-center rounded-full bg-[#E1E9F3] text-[12px] text-[var(--color-primary)]",children:"?"})})]})})},l={args:{title:"שיעור ריבית נומינלית שנתית",body:"זהו שיעור הריבית השנתי שעל פיו מחושבים תשלומי ההחזר. הריבית מוצגת באחוזים ומהווה מדד להערכת עלות ההלוואה.",triggerVariant:"status"},render:r=>e.jsx(a,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[18px] font-bold text-[var(--color-primary)]",children:"3.1%"}),e.jsx(s,{...r})]})})},i={render:()=>e.jsx(a,{children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[16px] text-[var(--color-primary)]",children:"ריבית קבועה"}),e.jsx(s,{title:"ריבית קבועה",body:"ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[16px] text-[var(--color-primary)]",children:"ריבית משתנה פריים"}),e.jsx(s,{title:"ריבית משתנה פריים",body:"ריבית משתנה לפי פריים עשויה להיות נמוכה יותר, אך עלולה להשתנות לאורך התקופה."})]})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "כספים נזילים",
    body: "אלו כספים שניתן לגשת אליהם במהירות ובקלות, כמו מזומן או כסף בחשבון בנק."
  },
  render: args => <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[16px] text-[var(--color-primary)]">סטטוס הכספים</span>
        <InfoTooltip {...args} />
      </div>
    </Frame>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "ריבית קבועה",
    body: "ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים."
  },
  render: args => <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[16px] text-[var(--color-primary)]">ריבית</span>
        <InfoTooltip {...args} />
      </div>
    </Frame>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "שיעור ריבית נומינלית שנתית",
    body: "זהו שיעור הריבית השנתי שעל פיו מחושבים תשלומי ההחזר."
  },
  render: args => <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[18px] font-bold text-[var(--color-primary)]">3.1%</span>
        <InfoTooltip {...args}>
          <span className="flex size-5 cursor-pointer items-center justify-center rounded-full bg-[#E1E9F3] text-[12px] text-[var(--color-primary)]">
            ?
          </span>
        </InfoTooltip>
      </div>
    </Frame>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "שיעור ריבית נומינלית שנתית",
    body: "זהו שיעור הריבית השנתי שעל פיו מחושבים תשלומי ההחזר. הריבית מוצגת באחוזים ומהווה מדד להערכת עלות ההלוואה.",
    triggerVariant: "status"
  },
  render: args => <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[18px] font-bold text-[var(--color-primary)]">3.1%</span>
        <InfoTooltip {...args} />
      </div>
    </Frame>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[16px] text-[var(--color-primary)]">ריבית קבועה</span>
          <InfoTooltip title="ריבית קבועה" body="ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים." />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[16px] text-[var(--color-primary)]">ריבית משתנה פריים</span>
          <InfoTooltip title="ריבית משתנה פריים" body="ריבית משתנה לפי פריים עשויה להיות נמוכה יותר, אך עלולה להשתנות לאורך התקופה." />
        </div>
      </div>
    </Frame>
}`,...i.parameters?.docs?.source}}};const f=["Default","InterestFixed","CustomTrigger","StatusIcon","Multiple"];export{o as CustomTrigger,t as Default,n as InterestFixed,i as Multiple,l as StatusIcon,f as __namedExportsOrder,g as default};
