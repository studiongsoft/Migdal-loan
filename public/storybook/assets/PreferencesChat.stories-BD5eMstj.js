import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as i}from"./iframe-B4fJKyuY.js";import{C as b}from"./ChatMessage-BksOzjpG.js";import"./preload-helper-PPVm8Dsz.js";import"./image-aUGlxb43.js";function x(){return e.jsx("div",{className:"flex w-full justify-start",children:e.jsxs("div",{className:"flex w-fit items-center gap-[6px] rounded-tr-[0px] rounded-br-[27px] rounded-bl-[27px] rounded-tl-[27px] bg-[#EAF1FA] px-[24px] py-[16px]",dir:"rtl",children:[e.jsx("span",{className:"animate-thinking-dot size-2 rounded-full bg-[var(--color-primary)]/60"}),e.jsx("span",{className:"animate-thinking-dot size-2 rounded-full bg-[var(--color-primary)]/60",style:{animationDelay:"0.2s"}}),e.jsx("span",{className:"animate-thinking-dot size-2 rounded-full bg-[var(--color-primary)]/60",style:{animationDelay:"0.4s"}})]})})}x.__docgenInfo={description:'בועית "חושב" עם 3 נקודות אנימטיביות',methods:[],displayName:"ThinkingBubble"};function f({messages:t,currentQuestion:o,selectedOption:v,options:p=[],isCalculating:l=!1,onOptionSelect:g,onUserMessageEdit:c,chatHeight:m="400px"}){const h=i.useRef(null),u=i.useRef(null);i.useEffect(()=>{requestAnimationFrame(()=>{u.current?.scrollIntoView({behavior:"smooth",block:"end"})})},[t,o,l]);const d=[...t];return o&&d.push({type:"system",text:o}),e.jsxs("div",{dir:"rtl",className:"flex flex-col gap-6",children:[e.jsxs("div",{ref:h,className:"flex flex-col gap-4 overflow-y-auto overflow-x-hidden scroll-smooth",style:{minHeight:m,maxHeight:m},children:[d.map((s,y)=>e.jsx("div",{className:"animate-chat-bubble-in",children:e.jsx(b,{message:s.text,type:s.type,onEdit:s.type==="user"&&c?()=>c(Math.floor((y-1)/2)):void 0})},y)),l&&e.jsx("div",{className:"animate-chat-bubble-in",children:e.jsx(x,{})}),e.jsx("div",{ref:u,className:"h-px shrink-0","aria-hidden":!0})]}),!l&&p.length>0&&e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:p.map(s=>e.jsx("button",{type:"button",onClick:()=>g(s),className:"flex cursor-pointer items-center gap-3 rounded-[8px] border border-[#E1E9F3] bg-white px-4 py-3 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.08)] transition-colors hover:border-[var(--color-primary)]/30 hover:bg-[#f4f8fc]",children:e.jsx("span",{className:"text-right text-[16px] font-normal text-[var(--color-primary)]",children:s.label})},s.value))})]})}f.__docgenInfo={description:"",methods:[],displayName:"PreferencesChat",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"ChatItem"}],raw:"ChatItem[]"},description:"היסטוריית ההודעות - מערכת ומשתמש"},currentQuestion:{required:!1,tsType:{name:"string"},description:"השאלה הנוכחית (הודעת מערכת)"},selectedOption:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"תשובת המשתמש הנוכחית (אם נבחרה) - מתווספת ל-messages ע״י ההורה"},options:{required:!1,tsType:{name:"Array",elements:[{name:"ChatOption"}],raw:"ChatOption[]"},description:"האפשרויות לבחירה",defaultValue:{value:"[]",computed:!1}},isCalculating:{required:!1,tsType:{name:"boolean"},description:"במצב חישוב (מציג 3 נקודות אנימטיביות)",defaultValue:{value:"false",computed:!1}},onOptionSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(opt: ChatOption) => void",signature:{arguments:[{type:{name:"ChatOption"},name:"opt"}],return:{name:"void"}}},description:"בחירת אפשרות"},onUserMessageEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(stepIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"stepIndex"}],return:{name:"void"}}},description:"לחיצה על עריכה בתשובת משתמש - מקבל אינדקס השלב (0, 1, 2...)"},chatHeight:{required:!1,tsType:{name:"string"},description:"גובה לאזור הצ'אט (מינימלי ומקסימלי - לאזור גלילה קבוע)",defaultValue:{value:'"400px"',computed:!1}}}};const O={title:"Design System/Chat/PreferencesChat",component:f,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{dir:"rtl",className:"w-[500px] max-w-full rounded-[16px] border border-[#E6ECF5] bg-white p-6",children:e.jsx(t,{})})]},r={args:{messages:[],currentQuestion:"רוצה שנציע לך הצעה נוספת לפי העדפות שלך",options:[{value:"yes",label:"כן"},{value:"self",label:"לא, אני רוצה לבנות לעצמי לבד את ההצעה",goToSelf:!0}],onOptionSelect:t=>console.log("Selected:",t)}},n={args:{messages:[{type:"system",text:"רוצה שנציע לך הצעה נוספת לפי העדפות שלך"},{type:"user",text:"כן"},{type:"system",text:`רוצה להתחיל להחזיר רק בעוד מספר חודשים?
אפשרי לדחות תשלום כדי להתארגן כלכלית`},{type:"user",text:"כן"}],currentQuestion:"רוצה להתחיל עם החזרים קטנים – ורק בהמשך לשלם את הקרן?",options:[{value:"yes",label:"כן"},{value:"no",label:"לא"}],onOptionSelect:t=>console.log("Selected:",t)}},a={args:{messages:[{type:"system",text:"רוצה שנציע לך הצעה נוספת לפי העדפות שלך"},{type:"user",text:"כן"},{type:"system",text:"רוצה להתחיל להחזיר רק בעוד מספר חודשים?"},{type:"user",text:"כן"},{type:"system",text:"רוצה להתחיל עם החזרים קטנים?"},{type:"user",text:"כן"},{type:"system",text:"רוצה להחזיר את כל הסכום בסוף התקופה?"},{type:"user",text:"לא"},{type:"system",text:"איזה סוג ריבית עדיף לך?"},{type:"user",text:"קבועה - וודאות"}],isCalculating:!0,options:[],onOptionSelect:()=>{}},parameters:{docs:{description:{story:"מציג בועית עם 3 נקודות אנימטיביות במצב חישוב"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [],
    currentQuestion: "רוצה שנציע לך הצעה נוספת לפי העדפות שלך",
    options: [{
      value: "yes",
      label: "כן"
    }, {
      value: "self",
      label: "לא, אני רוצה לבנות לעצמי לבד את ההצעה",
      goToSelf: true
    }],
    onOptionSelect: opt => console.log("Selected:", opt)
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      type: "system",
      text: "רוצה שנציע לך הצעה נוספת לפי העדפות שלך"
    }, {
      type: "user",
      text: "כן"
    }, {
      type: "system",
      text: "רוצה להתחיל להחזיר רק בעוד מספר חודשים?\\nאפשרי לדחות תשלום כדי להתארגן כלכלית"
    }, {
      type: "user",
      text: "כן"
    }],
    currentQuestion: "רוצה להתחיל עם החזרים קטנים – ורק בהמשך לשלם את הקרן?",
    options: [{
      value: "yes",
      label: "כן"
    }, {
      value: "no",
      label: "לא"
    }],
    onOptionSelect: opt => console.log("Selected:", opt)
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      type: "system",
      text: "רוצה שנציע לך הצעה נוספת לפי העדפות שלך"
    }, {
      type: "user",
      text: "כן"
    }, {
      type: "system",
      text: "רוצה להתחיל להחזיר רק בעוד מספר חודשים?"
    }, {
      type: "user",
      text: "כן"
    }, {
      type: "system",
      text: "רוצה להתחיל עם החזרים קטנים?"
    }, {
      type: "user",
      text: "כן"
    }, {
      type: "system",
      text: 'רוצה להחזיר את כל הסכום בסוף התקופה?'
    }, {
      type: "user",
      text: "לא"
    }, {
      type: "system",
      text: "איזה סוג ריבית עדיף לך?"
    }, {
      type: "user",
      text: "קבועה - וודאות"
    }],
    isCalculating: true,
    options: [],
    onOptionSelect: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: "מציג בועית עם 3 נקודות אנימטיביות במצב חישוב"
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const T=["FirstStep","WithHistory","Calculating"];export{a as Calculating,r as FirstStep,n as WithHistory,T as __namedExportsOrder,O as default};
