import{j as e}from"./jsx-runtime-DMt_yit2.js";import{n as i}from"./image-BC_zGh6x.js";import"./iframe-Ci18ShzC.js";import"./preload-helper-PPVm8Dsz.js";function l(){return e.jsx("div",{className:"relative h-[43.176px] w-[122.93px] shrink-0",children:e.jsx(i,{src:"/images/logo.svg",alt:"מגדל",fill:!0,className:"object-contain",priority:!0})})}l.__docgenInfo={description:"",methods:[],displayName:"MigdalLogo"};function r({onBack:s,onNewProcess:d}={}){return e.jsx("header",{dir:"rtl",className:"flex w-full flex-col bg-white",children:e.jsxs("div",{className:"flex w-full items-start justify-between px-6 pb-[32px] pt-6",children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(l,{}),s&&e.jsx("button",{type:"button",onClick:s,className:"mt-6 flex size-10 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]","aria-label":"חזור",children:e.jsx(i,{src:"/images/icons/Submenu/CTA/Icon Link/Mid.png",alt:"",width:24,height:24,className:"size-6"})})]}),e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsxs("button",{type:"button",className:"flex h-[44px] w-[181px] items-center justify-center gap-3 rounded-[4px] bg-[#020140] px-4 text-[18px] hover:opacity-90",children:[e.jsx("span",{className:"font-bold text-[#a2eb9a]",children:"הי טל"}),e.jsx("span",{className:"text-[#a2eb9a]",children:"|"}),e.jsx("span",{className:"underline decoration-solid text-[#a2eb9a]",children:"התנתק"})]}),d&&e.jsxs("button",{type:"button",onClick:d,className:"mt-6 flex h-10 items-center justify-center gap-2 text-[20px] font-normal text-[#020140] hover:opacity-80",children:[e.jsx(i,{src:"/images/icons/Right Icon.png",alt:"",width:24,height:24}),"תהליך חדש"]})]})]})})}r.__docgenInfo={description:"",methods:[],displayName:"Header"};const h={title:"Design System/Header",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{onBack:{action:"back"},onNewProcess:{action:"newProcess"}}},c=({children:s})=>e.jsx("div",{dir:"rtl",className:"min-h-[300px] w-full bg-[#f4f8fc]",children:s}),a={render:()=>e.jsx(c,{children:e.jsx(r,{})}),parameters:{docs:{description:{story:"לוגו + כפתור עליון (הי טל | התנתק) - לדף הבית"}}}},t={render:()=>e.jsx(c,{children:e.jsx(r,{onBack:()=>alert("חזרה")})}),parameters:{docs:{description:{story:"לוגו + חץ חזרה"}}}},n={render:()=>e.jsx(c,{children:e.jsx(r,{onNewProcess:()=>alert("תהליך חדש")})}),parameters:{docs:{description:{story:"לוגו + כפתור עליון + תהליך חדש"}}}},o={render:()=>e.jsx(c,{children:e.jsx(r,{onBack:()=>alert("חזרה"),onNewProcess:()=>alert("תהליך חדש")})}),parameters:{docs:{description:{story:"מלא - לוגו, חץ חזרה, כפתור עליון, תהליך חדש"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "לוגו + כפתור עליון (הי טל | התנתק) - לדף הבית"
      }
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onBack={() => alert("חזרה")} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "לוגו + חץ חזרה"
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onNewProcess={() => alert("תהליך חדש")} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "לוגו + כפתור עליון + תהליך חדש"
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onBack={() => alert("חזרה")} onNewProcess={() => alert("תהליך חדש")} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "מלא - לוגו, חץ חזרה, כפתור עליון, תהליך חדש"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const f=["LogoOnly","WithBackArrow","WithNewProcess","Full"];export{o as Full,a as LogoOnly,t as WithBackArrow,n as WithNewProcess,f as __namedExportsOrder,h as default};
