import{j as e}from"./jsx-runtime-DMt_yit2.js";import{n as a}from"./image-BC_zGh6x.js";import"./iframe-Ci18ShzC.js";import"./preload-helper-PPVm8Dsz.js";function n({stages:s,onStepClick:g}){return e.jsx("div",{className:"flex flex-col items-start gap-0",dir:"rtl",children:s.map((t,p)=>e.jsxs("div",{className:"flex flex-col items-start",children:[g?e.jsxs("button",{type:"button",onClick:()=>g(p),className:"flex items-center gap-4 border-0 bg-transparent p-0 text-right cursor-pointer hover:opacity-80",children:[e.jsx("div",{className:`relative flex size-[32px] shrink-0 items-center justify-center rounded-full ${t.status==="current"?"bg-[#e1e9f3]":"bg-[#fbfbfb]"}`,children:t.status==="pending"?e.jsx(a,{src:"/images/State empty.png",alt:"",width:32,height:32,className:"size-full"}):t.status==="complete"?e.jsx(a,{src:"/images/Complete.png",alt:"",width:32,height:32,className:"size-full"}):e.jsx(a,{src:"/images/State.png",alt:"",width:32,height:32,className:"size-full"})}),e.jsx("p",{className:`min-w-[150px] shrink-0 text-right text-[17px] leading-[18.6px] ${t.status==="current"?"font-bold text-[var(--color-primary)]":t.status==="complete"?"font-normal text-[var(--color-primary)]":"font-light text-[#a4a4a4]"}`,children:t.title})]}):e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`relative flex size-[32px] shrink-0 items-center justify-center rounded-full ${t.status==="current"?"bg-[#e1e9f3]":"bg-[#fbfbfb]"}`,children:t.status==="pending"?e.jsx(a,{src:"/images/State empty.png",alt:"",width:32,height:32,className:"size-full"}):t.status==="complete"?e.jsx(a,{src:"/images/Complete.png",alt:"",width:32,height:32,className:"size-full"}):e.jsx(a,{src:"/images/State.png",alt:"",width:32,height:32,className:"size-full"})}),e.jsx("p",{className:`min-w-[150px] shrink-0 text-right text-[17px] leading-[18.6px] ${t.status==="current"?"font-bold text-[var(--color-primary)]":t.status==="complete"?"font-normal text-[var(--color-primary)]":"font-light text-[#a4a4a4]"}`,children:t.title})]}),p<s.length-1&&e.jsx("div",{className:"flex w-8 justify-center",children:e.jsx("div",{className:`h-[24px] w-[2px] shrink-0 ${t.status==="complete"?"bg-[#3c65e3]":"bg-[#e1e9f3]"}`})})]},p))})}n.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{stages:{required:!0,tsType:{name:"Array",elements:[{name:"ProgressStage"}],raw:"ProgressStage[]"},description:""},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const f={title:"Design System/Progress/ProgressBar",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r=[{title:"הזדהות",status:"pending"},{title:"בחירת קופה",status:"pending"},{title:"פרטי משיכה",status:"pending"},{title:"סיכום",status:"pending"}],m=({children:s})=>e.jsx("div",{dir:"rtl",className:"w-[360px] bg-white p-8 rounded-[16px] border border-[#E6ECF5]",children:s}),i={args:{stages:[{...r[0],status:"current"},r[1],r[2],r[3]]},render:s=>e.jsx(m,{children:e.jsx(n,{...s})})},o={args:{stages:[{...r[0],status:"complete"},{...r[1],status:"current"},r[2],r[3]]},render:s=>e.jsx(m,{children:e.jsx(n,{...s})})},l={args:{stages:[{...r[0],status:"complete"},{...r[1],status:"complete"},{...r[2],status:"current"},r[3]]},render:s=>e.jsx(m,{children:e.jsx(n,{...s})})},c={args:{stages:r.map(s=>({...s,status:"complete"}))},render:s=>e.jsx(m,{children:e.jsx(n,{...s})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    stages: [{
      ...baseStages[0],
      status: "current"
    }, baseStages[1], baseStages[2], baseStages[3]]
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    stages: [{
      ...baseStages[0],
      status: "complete"
    }, {
      ...baseStages[1],
      status: "current"
    }, baseStages[2], baseStages[3]]
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    stages: [{
      ...baseStages[0],
      status: "complete"
    }, {
      ...baseStages[1],
      status: "complete"
    }, {
      ...baseStages[2],
      status: "current"
    }, baseStages[3]]
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    stages: baseStages.map(s => ({
      ...s,
      status: "complete"
    }))
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>
}`,...c.parameters?.docs?.source}}};const b=["Step1Current","Step2Current","Step3Current","AllComplete"];export{c as AllComplete,i as Step1Current,o as Step2Current,l as Step3Current,b as __namedExportsOrder,f as default};
