import{j as e}from"./jsx-runtime-Eifrrug6.js";import{n as i}from"./image-DvEAMrFU.js";import"./iframe-CGSukN2e.js";import"./preload-helper-PPVm8Dsz.js";function b({stages:r}){const n=r.find(s=>s.status==="current");return e.jsxs("div",{dir:"rtl",className:"flex w-full items-center justify-between rounded-[8px] bg-white px-5 pb-2 pt-3 shadow-[0px_2px_24px_0px_rgba(200,200,200,0.5)] md:hidden",children:[e.jsx("p",{className:"shrink-0 text-right text-[14px] font-normal leading-7 tracking-[0.14px] text-[var(--color-primary)]",children:n?.title??r[0]?.title??""}),e.jsx("div",{className:"flex items-center gap-[4px]",children:r.map((s,o)=>e.jsx("div",{className:`h-[10px] shrink-0 rounded-[10px] ${s.status==="current"?"w-[36px] bg-[var(--color-accent-blue)]":"size-[10px] bg-[#ecf0fc]"}`,"aria-hidden":!0},o))})]})}function t({stages:r,onStepClick:n}){return e.jsxs(e.Fragment,{children:[e.jsx(b,{stages:r}),e.jsx("div",{className:"hidden flex-col items-start gap-0 md:flex",dir:"rtl",children:r.map((s,o)=>e.jsxs("div",{className:"flex flex-col items-start",children:[n?e.jsxs("button",{type:"button",onClick:()=>n(o),"aria-label":`שלב ${o+1}: ${s.title}`,className:"flex items-center gap-4 border-0 bg-transparent p-0 text-right cursor-pointer hover:opacity-80",children:[e.jsx("div",{className:`relative flex size-[32px] shrink-0 items-center justify-center rounded-full ${s.status==="current"?"bg-[#e1e9f3]":"bg-[#fbfbfb]"}`,"aria-hidden":!0,children:s.status==="pending"?e.jsx(i,{src:"/images/State empty.png",alt:"",width:32,height:32,className:"size-full","aria-hidden":!0}):s.status==="complete"?e.jsx(i,{src:"/images/Complete.png",alt:"",width:32,height:32,className:"size-full","aria-hidden":!0}):e.jsx(i,{src:"/images/State.png",alt:"",width:32,height:32,className:"size-full","aria-hidden":!0})}),e.jsx("p",{className:`min-w-[150px] shrink-0 text-right text-[17px] leading-[18.6px] ${s.status==="current"?"font-bold text-[var(--color-primary)]":s.status==="complete"?"font-normal text-[var(--color-primary)]":"font-light text-[#a4a4a4]"}`,children:s.title})]}):e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`relative flex size-[32px] shrink-0 items-center justify-center rounded-full ${s.status==="current"?"bg-[#e1e9f3]":"bg-[#fbfbfb]"}`,"aria-hidden":!0,children:s.status==="pending"?e.jsx(i,{src:"/images/State empty.png",alt:"",width:32,height:32,className:"size-full","aria-hidden":!0}):s.status==="complete"?e.jsx(i,{src:"/images/Complete.png",alt:"",width:32,height:32,className:"size-full","aria-hidden":!0}):e.jsx(i,{src:"/images/State.png",alt:"",width:32,height:32,className:"size-full","aria-hidden":!0})}),e.jsx("p",{className:`min-w-[150px] shrink-0 text-right text-[17px] leading-[18.6px] ${s.status==="current"?"font-bold text-[var(--color-primary)]":s.status==="complete"?"font-normal text-[var(--color-primary)]":"font-light text-[#a4a4a4]"}`,children:s.title})]}),o<r.length-1&&e.jsx("div",{className:"flex w-8 justify-center",children:e.jsx("div",{className:`h-[24px] w-[2px] shrink-0 ${s.status==="complete"?"bg-[#3c65e3]":"bg-[#e1e9f3]"}`})})]},o))})]})}t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{stages:{required:!0,tsType:{name:"Array",elements:[{name:"ProgressStage"}],raw:"ProgressStage[]"},description:""},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const w={title:"Design System/Progress/ProgressBar",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onStepClick:{action:"stepClick"}}},f=["בירור צרכים","פרטי הלוואה","פרטי בנק","מסמכים והצהרות","סיום"];function a(r){return f.map((n,s)=>({title:n,status:s<r?"complete":s===r?"current":"pending"}))}const c=({children:r})=>e.jsx("div",{dir:"rtl",className:"w-[360px] rounded-[16px] border border-[#E6ECF5] bg-white p-8",children:r}),S=({children:r})=>e.jsx("div",{dir:"rtl",className:"w-[360px] bg-[#f4f8fc] p-4",children:r}),l={args:{stages:a(0),onStepClick:()=>{}},render:r=>e.jsx(c,{children:e.jsx(t,{...r})}),parameters:{docs:{description:{story:"שלב 1 – בירור צרכים."}}}},d={args:{stages:a(1),onStepClick:()=>{}},render:r=>e.jsx(c,{children:e.jsx(t,{...r})}),parameters:{docs:{description:{story:"שלב 2 – פרטי הלוואה."}}}},m={args:{stages:a(2),onStepClick:()=>{}},render:r=>e.jsx(c,{children:e.jsx(t,{...r})}),parameters:{docs:{description:{story:"שלב 3 – פרטי בנק."}}}},g={args:{stages:a(3),onStepClick:()=>{}},render:r=>e.jsx(c,{children:e.jsx(t,{...r})}),parameters:{docs:{description:{story:"שלב 4 – מסמכים והצהרות."}}}},u={args:{stages:a(4),onStepClick:()=>{}},render:r=>e.jsx(c,{children:e.jsx(t,{...r})}),parameters:{docs:{description:{story:"שלב 5 – סיום."}}}},x={args:{stages:f.map(r=>({title:r,status:"complete"})),onStepClick:()=>{}},render:r=>e.jsx(c,{children:e.jsx(t,{...r})})},p={args:{stages:a(1),onStepClick:()=>{}},render:r=>e.jsx(S,{children:e.jsx(t,{...r})}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"מובייל – שלב פרטי הלוואה."}}}},h={args:{stages:a(3),onStepClick:()=>{}},render:r=>e.jsx(S,{children:e.jsx(t,{...r})}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"מובייל – שלב מסמכים והצהרות."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    stages: makeStages(0),
    onStepClick: () => {}
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "שלב 1 – בירור צרכים."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    stages: makeStages(1),
    onStepClick: () => {}
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "שלב 2 – פרטי הלוואה."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    stages: makeStages(2),
    onStepClick: () => {}
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "שלב 3 – פרטי בנק."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    stages: makeStages(3),
    onStepClick: () => {}
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "שלב 4 – מסמכים והצהרות."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    stages: makeStages(4),
    onStepClick: () => {}
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "שלב 5 – סיום."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    stages: LOAN_STAGES.map(title => ({
      title,
      status: "complete" as const
    })),
    onStepClick: () => {}
  },
  render: args => <Frame>
      <ProgressBar {...args} />
    </Frame>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    stages: makeStages(1),
    onStepClick: () => {}
  },
  render: args => <FrameMobile>
      <ProgressBar {...args} />
    </FrameMobile>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "מובייל – שלב פרטי הלוואה."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"מובייל – stepper אופקי בכרטיס",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    stages: makeStages(3),
    onStepClick: () => {}
  },
  render: args => <FrameMobile>
      <ProgressBar {...args} />
    </FrameMobile>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "מובייל – שלב מסמכים והצהרות."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const v=["Step1Current","Step2Current","Step3Current","Step4Current","Step5Current","AllComplete","MobileStep2","MobileStep4"];export{x as AllComplete,p as MobileStep2,h as MobileStep4,l as Step1Current,d as Step2Current,m as Step3Current,g as Step4Current,u as Step5Current,v as __namedExportsOrder,w as default};
