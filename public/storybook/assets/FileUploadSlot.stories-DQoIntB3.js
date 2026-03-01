import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as o}from"./iframe-B4fJKyuY.js";import{n as M}from"./image-aUGlxb43.js";import"./preload-helper-PPVm8Dsz.js";const I=["pdf","doc","docx","jpg","jpeg","png"],T=8;function q(s){return s<1024?s+" B":(s/(1024*1024)).toFixed(2)+" MB"}function t({label:s,value:l,onChange:g,accept:f=".pdf,.doc,.docx,.jpg,.jpeg,.png",maxSizeMb:b=T,error:y,storybookOverride:N}){const[D,S]=o.useState("idle"),[E,j]=o.useState(0),i=N?.status??D,w=N?.progress??E,[k,F]=o.useState(null),O=r=>{const a=r.name.split(".").pop()?.toLowerCase();return!a||!I.includes(a)?"ניתן להעלות קובץ עם הסיומות PDF, DOC, DOCX, JPG, JPEG, PNG":r.size>b*1024*1024?`גודל מקסימלי ${b} מ״ב`:null},C=r=>{const a=O(r);if(a){F(a);return}F(null),g(r),S("uploading"),j(0);const B=setInterval(()=>{j(z=>z>=100?(clearInterval(B),S("success"),100):z+10)},120)},U=r=>{const a=r.target.files?.[0];r.target.value="",a&&C(a)},P=r=>{r.preventDefault();const a=r.dataTransfer.files?.[0];a&&C(a)},W=()=>{g(null),S("idle"),j(0),F(null)};return e.jsxs("div",{dir:"rtl",className:"flex max-w-[333px] flex-1 flex-col gap-[var(--spacing-xs)]",children:[e.jsx("p",{className:"text-right text-[17px] font-normal text-[var(--color-primary)]",children:s}),e.jsxs("div",{className:`flex h-[120px] cursor-pointer flex-col items-center justify-center gap-[var(--spacing-xs)] rounded-[8px] border bg-[var(--color-white)] px-6 py-5 transition-colors ${y?"border-2 border-[var(--color-error)]":"border-[var(--color-border)] hover:bg-[var(--color-bg-hover)]"}`,role:"button",tabIndex:0,"aria-label":"העלאת קובץ",onDrop:P,onDragOver:r=>r.preventDefault(),onClick:()=>document.getElementById(`upload-${s.replace(/\s/g,"-")}`)?.click(),onKeyDown:r=>(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),document.getElementById(`upload-${s.replace(/\s/g,"-")}`)?.click()),children:[e.jsx("input",{id:`upload-${s.replace(/\s/g,"-")}`,type:"file",className:"hidden",accept:f,onChange:U}),e.jsx(M,{src:"/images/icons/file-add.png",alt:"",width:38,height:38,className:"shrink-0","aria-hidden":!0}),e.jsxs("div",{className:"flex flex-col items-center justify-center gap-[2px] text-center",children:[e.jsx("p",{className:"text-[14px] font-normal text-[var(--color-muted)]",children:"לחץ כאן להעלאה"}),e.jsxs("p",{className:"text-[14px] font-normal text-[var(--color-muted)]",children:["(PDF, DOC, JPG, PNG עד ",b," מ״ב)"]})]})]}),(k||y)&&e.jsxs("div",{className:"flex items-center justify-center gap-1 rounded-[4px] bg-[var(--color-bg-error)] px-[var(--spacing-xs)] py-[4px]",dir:"rtl",children:[e.jsx("p",{className:"flex-1 text-right text-[14px] font-normal text-[var(--color-error)]",children:y??k}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",className:"shrink-0",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",fill:"var(--color-error)"})})]}),l&&e.jsxs("div",{className:"flex w-full max-w-[349px] gap-3 items-center rounded-[8px] border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-4",dir:"rtl",children:[e.jsxs("div",{className:`flex min-w-0 flex-1 flex-col items-end text-right ${i==="uploading"?"gap-2":"gap-1"}`,children:[e.jsx("p",{className:"w-full truncate text-end text-[14px] font-normal text-[var(--color-primary)]",children:l.name}),i==="uploading"&&e.jsxs("p",{className:"text-right text-[14px] font-normal leading-normal text-[var(--color-accent-blue)]",children:[e.jsxs("span",{children:[w,"% מהקובץ עלה "]}),e.jsx("span",{className:"text-[var(--color-primary)]/40",children:"·"}),e.jsxs("span",{children:[" ",q(l.size)]})]}),i==="success"&&e.jsxs("div",{className:"flex items-center justify-end gap-1",dir:"rtl",children:[e.jsx("p",{className:"text-right text-[14px] font-normal text-[var(--color-success)]",children:"העלאה הסתיימה"}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",className:"shrink-0",children:e.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"var(--color-success)"})})]}),i==="error"&&e.jsxs("div",{className:"flex items-center justify-end gap-1",dir:"rtl",children:[e.jsx("p",{className:"text-right text-[14px] font-normal text-[var(--color-error-alt)]",children:"העלאה נכשלה"}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",className:"shrink-0",children:e.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:"var(--color-error-alt)"})})]})]}),i==="uploading"?e.jsx("div",{className:"relative size-8 shrink-0","aria-hidden":!0,children:e.jsxs("svg",{className:"size-8 -rotate-90",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"14",stroke:"var(--color-border)",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"16",cy:"16",r:"14",stroke:"var(--color-accent-blue)",strokeWidth:"2",fill:"none",strokeDasharray:2*Math.PI*14,strokeDashoffset:2*Math.PI*14*(1-w/100),strokeLinecap:"round",className:"transition-[stroke-dashoffset] duration-150"})]})}):e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),W()},className:"flex size-8 shrink-0 items-center justify-center rounded p-0.5 hover:bg-[var(--color-bg-hover)]","aria-label":"מחק קובץ",children:e.jsx(M,{src:"/images/icons/mobile/delete.svg",alt:"",width:32,height:32,className:"size-8"})})]})]})}t.__docgenInfo={description:"",methods:[],displayName:"FileUploadSlot",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'".pdf,.doc,.docx,.jpg,.jpeg,.png"',computed:!1}},maxSizeMb:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"שגיאת validation חיצונית (למשל שדה חובה)"},storybookOverride:{required:!1,tsType:{name:"signature",type:"object",raw:"{ status: UploadStatus; progress?: number }",signature:{properties:[{key:"status",value:{name:"union",raw:'"idle" | "uploading" | "success" | "error"',elements:[{name:"literal",value:'"idle"'},{name:"literal",value:'"uploading"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}],required:!0}},{key:"progress",value:{name:"number",required:!1}}]}},description:"Storybook בלבד – דילוג על סימולציית העלאה, הצגת state ישירות"}}};const X={title:"Design System/FileUploadSlot",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},maxSizeMb:{control:"number"},error:{control:"text"}}},v={args:{label:"דוח נתוני אשראי מבנק ישראל",value:null,onChange:()=>{}}},h={args:{label:"הרשאת ניהול חשבון *",value:null,onChange:()=>{},error:"שדה חובה"}},n=()=>new File([new Blob(["x".repeat(92e5)])],"Migdal-document.pdf",{type:"application/pdf"}),c={render:()=>e.jsx("div",{dir:"rtl",className:"w-full max-w-[400px]",children:e.jsx(t,{label:"דוח נתוני אשראי מבנק ישראל",value:n(),onChange:()=>{},maxSizeMb:8,storybookOverride:{status:"success"}})}),parameters:{docs:{description:{story:"מצב הצלחה – שם קובץ, 'העלאה הסתיימה' בירוק, כפתור מחיקה."}}}},d={render:()=>e.jsx("div",{dir:"rtl",className:"w-full max-w-[400px]",children:e.jsx(t,{label:"דוח נתוני אשראי מבנק ישראל",value:n(),onChange:()=>{},maxSizeMb:8,storybookOverride:{status:"uploading",progress:40}})}),parameters:{docs:{description:{story:"מצב העלאה – loader מעגלי, '40% מהקובץ עלה · X MB' בכחול."}}}},p={render:()=>e.jsx("div",{dir:"rtl",className:"w-full max-w-[400px]",children:e.jsx(t,{label:"דוח נתוני אשראי מבנק ישראל",value:n(),onChange:()=>{},maxSizeMb:8,storybookOverride:{status:"error"}})}),parameters:{docs:{description:{story:"מצב שגיאה – 'העלאה נכשלה' באדום (#af0057), כפתור מחיקה."}}}},u={render:()=>e.jsxs("div",{dir:"rtl",className:"flex flex-col gap-6",children:[e.jsx(t,{label:"העלאה הסתיימה",value:n(),onChange:()=>{},maxSizeMb:8,storybookOverride:{status:"success"}}),e.jsx(t,{label:"העלאה נכשלה",value:n(),onChange:()=>{},maxSizeMb:8,storybookOverride:{status:"error"}}),e.jsx(t,{label:"בהעלאה",value:n(),onChange:()=>{},maxSizeMb:8,storybookOverride:{status:"uploading",progress:40}})]}),parameters:{docs:{description:{story:"שלושת המצבים – Success, Error, Upload – לפי עיצוב Figma."}}}},m={render:()=>{const[s,l]=o.useState(null),[g,f]=o.useState(null);return e.jsxs("div",{dir:"rtl",className:"flex max-w-[700px] flex-col gap-6",children:[e.jsx("h3",{className:"text-right text-[18px] font-bold text-[var(--color-primary)]",children:"העלאת מסמכים"}),e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(t,{label:"דוח נתוני אשראי מבנק ישראל",value:s,onChange:l,maxSizeMb:8}),e.jsx(t,{label:"הרשאת ניהול חשבון *",value:g,onChange:f,maxSizeMb:8})]})]})},parameters:{docs:{description:{story:"מקטע העלאת מסמכים – שני שטחי העלאה, תומך בגרירה והשמה."}}}},x={render:()=>{const[s,l]=o.useState(null);return e.jsx("div",{dir:"rtl",className:"w-full max-w-[400px]",children:e.jsx(t,{label:"דוח נתוני אשראי מבנק ישראל",value:s,onChange:l,maxSizeMb:8})})},parameters:{docs:{description:{story:"ניתן להעלות קובץ (לחיצה או גרירה), לראות התקדמות ולהסיר."}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "דוח נתוני אשראי מבנק ישראל",
    value: null,
    onChange: () => {}
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "הרשאת ניהול חשבון *",
    value: null,
    onChange: () => {},
    error: "שדה חובה"
  }
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="w-full max-w-[400px]">
      <FileUploadSlot label="דוח נתוני אשראי מבנק ישראל" value={mockFile()} onChange={() => {}} maxSizeMb={8} storybookOverride={{
      status: "success"
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "מצב הצלחה – שם קובץ, 'העלאה הסתיימה' בירוק, כפתור מחיקה."
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"מצב הצלחה – העלאה הסתיימה",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="w-full max-w-[400px]">
      <FileUploadSlot label="דוח נתוני אשראי מבנק ישראל" value={mockFile()} onChange={() => {}} maxSizeMb={8} storybookOverride={{
      status: "uploading",
      progress: 40
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "מצב העלאה – loader מעגלי, '40% מהקובץ עלה · X MB' בכחול."
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"מצב העלאה – progress ו-loader מעגלי",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="w-full max-w-[400px]">
      <FileUploadSlot label="דוח נתוני אשראי מבנק ישראל" value={mockFile()} onChange={() => {}} maxSizeMb={8} storybookOverride={{
      status: "error"
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "מצב שגיאה – 'העלאה נכשלה' באדום (#af0057), כפתור מחיקה."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"מצב שגיאה – העלאה נכשלה",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="flex flex-col gap-6">
      <FileUploadSlot label="העלאה הסתיימה" value={mockFile()} onChange={() => {}} maxSizeMb={8} storybookOverride={{
      status: "success"
    }} />
      <FileUploadSlot label="העלאה נכשלה" value={mockFile()} onChange={() => {}} maxSizeMb={8} storybookOverride={{
      status: "error"
    }} />
      <FileUploadSlot label="בהעלאה" value={mockFile()} onChange={() => {}} maxSizeMb={8} storybookOverride={{
      status: "uploading",
      progress: 40
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "שלושת המצבים – Success, Error, Upload – לפי עיצוב Figma."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"כל מצבי WithFile בעמוד אחד (לפי Figma 1126-28557)",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [file1, setFile1] = useState<File | null>(null);
    const [file2, setFile2] = useState<File | null>(null);
    return <div dir="rtl" className="flex max-w-[700px] flex-col gap-6">
        <h3 className="text-right text-[18px] font-bold text-[var(--color-primary)]">
          העלאת מסמכים
        </h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <FileUploadSlot label="דוח נתוני אשראי מבנק ישראל" value={file1} onChange={setFile1} maxSizeMb={8} />
          <FileUploadSlot label="הרשאת ניהול חשבון *" value={file2} onChange={setFile2} maxSizeMb={8} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "מקטע העלאת מסמכים – שני שטחי העלאה, תומך בגרירה והשמה."
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"סקציית העלאת מסמכים כמו בעמוד מסמכים והצהרות",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    return <div dir="rtl" className="w-full max-w-[400px]">
        <FileUploadSlot label="דוח נתוני אשראי מבנק ישראל" value={file} onChange={setFile} maxSizeMb={8} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "ניתן להעלות קובץ (לחיצה או גרירה), לראות התקדמות ולהסיר."
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:"אינטראקטיבי – העלאת קובץ וניהול המצבים",...x.parameters?.docs?.description}}};const A=["Default","WithError","WithFileSuccess","WithFileUploading","WithFileError","WithFileAllStates","DocumentsSection","Interactive"];export{v as Default,m as DocumentsSection,x as Interactive,h as WithError,u as WithFileAllStates,p as WithFileError,c as WithFileSuccess,d as WithFileUploading,A as __namedExportsOrder,X as default};
