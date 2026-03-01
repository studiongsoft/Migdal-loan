import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{n as s}from"./image-aUGlxb43.js";import"./iframe-B4fJKyuY.js";import"./preload-helper-PPVm8Dsz.js";function h(){return e.jsx("div",{className:"relative h-[43.176px] w-[122.93px] shrink-0",children:e.jsx(s,{src:"/images/logo.svg",alt:"מגדל",fill:!0,className:"object-contain",priority:!0})})}h.__docgenInfo={description:"",methods:[],displayName:"MigdalLogo"};function r({onBack:t,onNewProcess:u,onDisconnect:x,onMenuClick:p}={}){return e.jsxs("header",{dir:"rtl",className:"flex w-full flex-col bg-white",children:[e.jsxs("div",{className:"flex h-[60px] w-full items-center justify-between px-[21px] py-2 md:hidden",children:[t?e.jsx("button",{type:"button",onClick:t,className:"flex size-11 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]","aria-label":"חזור",children:e.jsx(s,{src:"/images/icons/Submenu/CTA/Icon Link/Mid.png",alt:"",width:24,height:24,className:"size-6","aria-hidden":!0})}):e.jsx("button",{type:"button",onClick:p,className:"flex size-11 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]","aria-label":"תפריט",children:e.jsx(s,{src:"/images/Headers/icons/menu.svg",alt:"",width:24,height:24,className:"size-6","aria-hidden":!0})}),e.jsx("div",{className:"flex flex-1 items-center justify-center",children:e.jsx(s,{src:"/images/Headers/Layer_1.svg",alt:"מגדל",width:37,height:44,className:"object-contain"})}),e.jsxs("div",{className:"flex shrink-0 items-center gap-0",children:[t&&p&&e.jsx("button",{type:"button",onClick:p,className:"flex size-11 items-center justify-center rounded-md hover:bg-[#f4f8fc]","aria-label":"תפריט",children:e.jsx(s,{src:"/images/Headers/icons/menu.svg",alt:"",width:24,height:24,className:"size-6","aria-hidden":!0})}),e.jsx("button",{type:"button",className:"flex size-11 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]","aria-label":"פרופיל",children:e.jsx(s,{src:"/images/Headers/icons/Headers/profile.svg",alt:"",width:24,height:24,className:"size-6","aria-hidden":!0})})]})]}),e.jsxs("div",{className:"hidden w-full items-start justify-between px-6 pb-[32px] pt-6 md:flex",children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(h,{}),t&&e.jsx("button",{type:"button",onClick:t,className:"mt-6 flex size-10 shrink-0 items-center justify-center rounded-md hover:bg-[#f4f8fc]","aria-label":"חזור",children:e.jsx(s,{src:"/images/icons/Submenu/CTA/Icon Link/Mid.png",alt:"",width:24,height:24,className:"size-6","aria-hidden":!0})})]}),e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsxs("button",{type:"button",onClick:x,className:"flex h-[44px] w-[181px] items-center justify-center gap-3 rounded-[4px] bg-[#020140] px-4 text-[18px] hover:opacity-90",children:[e.jsx("span",{className:"font-bold text-[#a2eb9a]",children:"הי טל"}),e.jsx("span",{className:"text-[#a2eb9a]",children:"|"}),e.jsx("span",{className:"underline decoration-solid text-[#a2eb9a]",children:"התנתק"})]}),u&&e.jsxs("button",{type:"button",onClick:u,className:"mt-6 flex h-10 items-center justify-center gap-2 text-[20px] font-normal text-[#020140] hover:opacity-80",children:[e.jsx(s,{src:"/images/icons/Right Icon.png",alt:"",width:24,height:24,"aria-hidden":!0}),"תהליך חדש"]})]})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"Header"};const y={title:"Design System/Header",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{onBack:{action:"back"},onNewProcess:{action:"newProcess"},onMenuClick:{action:"menuClick"}}},a=({children:t})=>e.jsx("div",{dir:"rtl",className:"min-h-[300px] w-full bg-[#f4f8fc]",children:t}),c={render:()=>e.jsx(a,{children:e.jsx(r,{})}),parameters:{docs:{description:{story:"דסקטופ – לוגו + כפתור עליון (הי טל | התנתק) לדף הבית."}}}},d={render:()=>e.jsx(a,{children:e.jsx(r,{onBack:()=>alert("חזרה")})}),parameters:{docs:{description:{story:"דסקטופ – לוגו + חץ חזרה."}}}},l={render:()=>e.jsx(a,{children:e.jsx(r,{onNewProcess:()=>alert("תהליך חדש")})}),parameters:{docs:{description:{story:"דסקטופ – לוגו + כפתור עליון + תהליך חדש."}}}},m={render:()=>e.jsx(a,{children:e.jsx(r,{onBack:()=>alert("חזרה"),onNewProcess:()=>alert("תהליך חדש")})}),parameters:{docs:{description:{story:"דסקטופ – מלא: לוגו, חץ חזרה, כפתור עליון, תהליך חדש."}}}},n={render:()=>e.jsx(a,{children:e.jsx(r,{onMenuClick:()=>alert("תפריט נפתח")})}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"מובייל – בתחילת תהליך: תפריט (3 נקודות) | לוגו מגדל (Layer_1) | פרופיל. לחיצה על תפריט פותחת sheet עם חזור/תהליך חדש."}}}},o={render:()=>e.jsx(a,{children:e.jsx(r,{onBack:()=>alert("חזרה"),onMenuClick:()=>alert("תפריט נפתח")})}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"מובייל – כשיש לאן לחזור: חץ חזרה | לוגו | תפריט + פרופיל (מקבילים). התפריט עובר לצד הפרופיל."}}}},i={render:()=>e.jsx(a,{children:e.jsx(r,{onBack:()=>alert("חזרה"),onNewProcess:()=>alert("תהליך חדש"),onMenuClick:()=>alert("תפריט נפתח")})}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"מובייל – חץ חזרה | לוגו | תפריט + פרופיל. התפריט מציג חזור ותהליך חדש."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – לוגו + כפתור עליון (הי טל | התנתק) לדף הבית."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onBack={() => alert("חזרה")} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – לוגו + חץ חזרה."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onNewProcess={() => alert("תהליך חדש")} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – לוגו + כפתור עליון + תהליך חדש."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onBack={() => alert("חזרה")} onNewProcess={() => alert("תהליך חדש")} />
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – מלא: לוגו, חץ חזרה, כפתור עליון, תהליך חדש."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onMenuClick={() => alert("תפריט נפתח")} />
    </Frame>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "מובייל – בתחילת תהליך: תפריט (3 נקודות) | לוגו מגדל (Layer_1) | פרופיל. לחיצה על תפריט פותחת sheet עם חזור/תהליך חדש."
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"מובייל – התחלת תהליך: תפריט | לוגו | פרופיל",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onBack={() => alert("חזרה")} onMenuClick={() => alert("תפריט נפתח")} />
    </Frame>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "מובייל – כשיש לאן לחזור: חץ חזרה | לוגו | תפריט + פרופיל (מקבילים). התפריט עובר לצד הפרופיל."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"מובייל – בעת ניווט: חץ חזרה | לוגו | תפריט + פרופיל",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Header onBack={() => alert("חזרה")} onNewProcess={() => alert("תהליך חדש")} onMenuClick={() => alert("תפריט נפתח")} />
    </Frame>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "מובייל – חץ חזרה | לוגו | תפריט + פרופיל. התפריט מציג חזור ותהליך חדש."
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"מובייל – מלא עם תפריט",...i.parameters?.docs?.description}}};const w=["LogoOnly","WithBackArrow","WithNewProcess","Full","MobileDefault","MobileWithBack","MobileFull"];export{m as Full,c as LogoOnly,n as MobileDefault,i as MobileFull,o as MobileWithBack,d as WithBackArrow,l as WithNewProcess,w as __namedExportsOrder,y as default};
