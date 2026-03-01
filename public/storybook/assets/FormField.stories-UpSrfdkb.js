import{j as e}from"./jsx-runtime-CGdb-zRh.js";import{r as h}from"./iframe-B4fJKyuY.js";import{F as a}from"./FormField-B1WzPUZF.js";import"./preload-helper-PPVm8Dsz.js";const F={title:"Design System/FormField",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{required:{control:"boolean"},type:{control:"select",options:["text","dropdown"]}}},x=[{value:"leumi",label:"בנק לאומי"},{value:"hapoalim",label:"בנק הפועלים"},{value:"discount",label:"בנק דיסקונט"}],w=[{value:"1",label:"ערך 1"},{value:"2",label:"ערך 2"},{value:"3",label:"ערך 3"},{value:"4",label:"ערך 4"}],t={args:{label:"שם מלא",value:"",onChange:()=>{},className:"min-w-[349px] max-w-[389px]"}},l={args:{label:"שם מלא",value:"דניאל לבובסקי",onChange:()=>{}}},d={args:{label:"שם מלא",value:"דניאל לבובסקי",onChange:()=>{},error:"הודעת שגיאה"}},p={args:{label:"שם מלא",value:"דניאל לבובסקי",onChange:()=>{},note:"השם כפי שמופיע בתעודת זהות"}},c={args:{label:"שם מלא",value:"",onChange:()=>{},required:!0}},u={args:{label:"שם הבנק",value:"",onChange:()=>{},type:"dropdown",options:x,placeholder:"בחר בנק"}},n={render:()=>e.jsxs("div",{dir:"rtl",className:"flex flex-col gap-6",children:[e.jsx(a,{label:"סוג הטיפול",value:"",onChange:()=>{},type:"dropdown",options:w,required:!0}),e.jsx(a,{label:"סוג הטיפול",value:"1",onChange:()=>{},type:"dropdown",options:w,required:!0})]})},s={render:()=>{const[r,o]=h.useState("");return e.jsx("div",{dir:"rtl",className:"flex flex-col gap-6",children:e.jsx(a,{label:"סוג הטיפול",value:r,onChange:o,type:"dropdown",options:w,required:!0})})}},i={args:{label:"שם הבנק",value:"leumi",onChange:()=>{},type:"dropdown",options:x}},m={args:{label:"שם הבנק",value:"",onChange:()=>{},type:"dropdown",options:x,placeholder:"בחר בנק",required:!0,error:"הודעת שגיאה"}},g={render:()=>{const[r,o]=h.useState(""),[y,b]=h.useState(""),N=()=>{if(!r.trim()){b("שדה חובה");return}b("")};return e.jsxs("div",{dir:"rtl",className:"flex flex-col gap-4",children:[e.jsx(a,{label:"שם מלא",value:r,onChange:S=>{o(S),b("")},error:y,required:!0,placeholder:"הכנס שם מלא"}),e.jsx("button",{type:"button",onClick:N,className:"rounded-[4px] bg-[var(--color-primary)] px-4 py-2 text-white",children:"בדוק"})]})}},v={render:()=>{const[r,o]=h.useState("");return e.jsx("div",{dir:"rtl",className:"flex flex-col gap-4",children:e.jsx(a,{label:"שם הבנק",value:r,onChange:o,type:"dropdown",options:x,placeholder:"בחר בנק"})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם מלא",
    value: "",
    onChange: () => {},
    className: "min-w-[349px] max-w-[389px]"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם מלא",
    value: "דניאל לבובסקי",
    onChange: () => {}
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם מלא",
    value: "דניאל לבובסקי",
    onChange: () => {},
    error: "הודעת שגיאה"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם מלא",
    value: "דניאל לבובסקי",
    onChange: () => {},
    note: "השם כפי שמופיע בתעודת זהות"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם מלא",
    value: "",
    onChange: () => {},
    required: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם הבנק",
    value: "",
    onChange: () => {},
    type: "dropdown",
    options: BANK_OPTIONS,
    placeholder: "בחר בנק"
  }
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="flex flex-col gap-6">
      <FormField label="סוג הטיפול" value="" onChange={() => {}} type="dropdown" options={TREATMENT_OPTIONS} required />
      <FormField label="סוג הטיפול" value="1" onChange={() => {}} type="dropdown" options={TREATMENT_OPTIONS} required />
    </div>
}`,...n.parameters?.docs?.source},description:{story:"עיצוב מ-Figma node 1101-28726 - שדה dropdown עם מצבי ריק, פוקוס ומלא",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div dir="rtl" className="flex flex-col gap-6">
        <FormField label="סוג הטיפול" value={value} onChange={setValue} type="dropdown" options={TREATMENT_OPTIONS} required />
      </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:"אינטראקטיבי - כמו עיצוב Figma 1101-28726",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם הבנק",
    value: "leumi",
    onChange: () => {},
    type: "dropdown",
    options: BANK_OPTIONS
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "שם הבנק",
    value: "",
    onChange: () => {},
    type: "dropdown",
    options: BANK_OPTIONS,
    placeholder: "בחר בנק",
    required: true,
    error: "הודעת שגיאה"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const validate = () => {
      if (!value.trim()) {
        setError("שדה חובה");
        return;
      }
      setError("");
    };
    return <div dir="rtl" className="flex flex-col gap-4">
        <FormField label="שם מלא" value={value} onChange={v => {
        setValue(v);
        setError("");
      }} error={error} required placeholder="הכנס שם מלא" />
        <button type="button" onClick={validate} className="rounded-[4px] bg-[var(--color-primary)] px-4 py-2 text-white">
          בדוק
        </button>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div dir="rtl" className="flex flex-col gap-4">
        <FormField label="שם הבנק" value={value} onChange={setValue} type="dropdown" options={BANK_OPTIONS} placeholder="בחר בנק" />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const O=["Empty","Filled","Error","WithNote","Required","EmptyDropdown","DropdownTreatmentType","InteractiveTreatmentDropdown","DropdownWithValue","DropdownError","Interactive","InteractiveDropdown"];export{m as DropdownError,n as DropdownTreatmentType,i as DropdownWithValue,t as Empty,u as EmptyDropdown,d as Error,l as Filled,g as Interactive,v as InteractiveDropdown,s as InteractiveTreatmentDropdown,c as Required,p as WithNote,O as __namedExportsOrder,F as default};
