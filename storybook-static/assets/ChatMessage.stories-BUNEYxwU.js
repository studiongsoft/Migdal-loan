import{j as e}from"./jsx-runtime-DMt_yit2.js";import{C as s}from"./ChatMessage-BOMUY3cq.js";import"./iframe-Ci18ShzC.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Design System/Chat/ChatMessage",component:s,parameters:{layout:"centered"},tags:["autodocs"]},m=({children:r})=>e.jsx("div",{dir:"rtl",className:"w-[900px] bg-white p-10 rounded-[16px] border border-[#E6ECF5]",children:e.jsx("div",{className:"flex flex-col gap-4",children:r})}),a={args:{type:"system",message:`שלום ישראל!
אני כאן כדי לעזור לך להמשיך כספים מקופת קשת שלך.`},render:r=>e.jsx(m,{children:e.jsx(s,{...r})})},t={args:{type:"user",message:"כן, אני רוצה להמשיך"},render:r=>e.jsx(m,{children:e.jsx(s,{...r})})},n={render:()=>e.jsxs(m,{children:[e.jsx(s,{type:"system",message:`שלום ישראל!
אני כאן כדי לעזור לך בתהליך.`}),e.jsx(s,{type:"user",message:"כן, אני רוצה להמשיך"}),e.jsx(s,{type:"system",message:"מעולה, בוא נתחיל"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "system",
    message: "שלום ישראל!\\nאני כאן כדי לעזור לך להמשיך כספים מקופת קשת שלך."
  },
  render: args => <Frame>
      <ChatMessage {...args} />
    </Frame>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "user",
    message: "כן, אני רוצה להמשיך"
  },
  render: args => <Frame>
      <ChatMessage {...args} />
    </Frame>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <ChatMessage type="system" message={"שלום ישראל!\\nאני כאן כדי לעזור לך בתהליך."} />
      <ChatMessage type="user" message={"כן, אני רוצה להמשיך"} />
      <ChatMessage type="system" message={"מעולה, בוא נתחיל"} />
    </Frame>
}`,...n.parameters?.docs?.source}}};const i=["System","User","Conversation"];export{n as Conversation,a as System,t as User,i as __namedExportsOrder,d as default};
