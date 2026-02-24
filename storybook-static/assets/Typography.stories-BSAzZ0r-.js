import{j as a}from"./jsx-runtime-DMt_yit2.js";import"./iframe-Ci18ShzC.js";import"./preload-helper-PPVm8Dsz.js";const i={h1:"text-[48px] font-black leading-[1.1]",h2:"text-[36px] font-bold leading-[1.2]",h3:"text-[28px] font-bold leading-[1.3]","body-lg":"text-[20px] font-regular leading-[1.6]","body-md":"text-[18px] font-regular leading-[1.6]","body-sm":"text-[16px] font-light leading-[1.6]",caption:"text-[14px] font-light leading-[1.4]"};function e({variant:n,children:r,className:o=""}){return a.jsx("div",{className:`font-migdal ${i[n]} ${o}`,children:r})}e.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:`| "h1"
| "h2"
| "h3"
| "body-lg"
| "body-md"
| "body-sm"
| "caption"`,elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"body-lg"'},{name:"literal",value:'"body-md"'},{name:"literal",value:'"body-sm"'},{name:"literal",value:'"caption"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const s={title:"Design System/Typography",component:e,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>a.jsxs("div",{className:"flex flex-col gap-6 w-[700px]",children:[a.jsx(e,{variant:"h1",children:"כותרת ראשית H1"}),a.jsx(e,{variant:"h2",children:"כותרת משנית H2"}),a.jsx(e,{variant:"h3",children:"כותרת קטנה H3"}),a.jsx(e,{variant:"body-lg",children:"טקסט גוף גדול"}),a.jsx(e,{variant:"body-md",children:"טקסט גוף רגיל"}),a.jsx(e,{variant:"body-sm",children:"טקסט גוף קטן"}),a.jsx(e,{variant:"caption",children:"כיתוב קטן / Caption"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[700px]">
      <Typography variant="h1">כותרת ראשית H1</Typography>
      <Typography variant="h2">כותרת משנית H2</Typography>
      <Typography variant="h3">כותרת קטנה H3</Typography>
      <Typography variant="body-lg">טקסט גוף גדול</Typography>
      <Typography variant="body-md">טקסט גוף רגיל</Typography>
      <Typography variant="body-sm">טקסט גוף קטן</Typography>
      <Typography variant="caption">כיתוב קטן / Caption</Typography>
    </div>
}`,...t.parameters?.docs?.source}}};const y=["AllVariants"];export{t as AllVariants,y as __namedExportsOrder,s as default};
