import{r as p,G as _,f as b,h as g,j as t,K as k,O as C,u as m,L as K,a6 as O,aA as w,Y as D,ad as N}from"./chunks/framework.CsZrzBQ9.js";import{a as f,f as E}from"./chunks/theme.CHGr-c71.js";function F(){const s=p(!1);function h(r){if(console.log(r),typeof navigator.clipboard.writeText=="function")navigator.clipboard.writeText(r).then(()=>{s.value=!0},n=>{s.value=!1});else if(typeof document.execCommand=="function"){const n=document.createElement("textarea");n.value=r,document.body.appendChild(n),n.select(),s.value=document.execCommand("copy"),document.body.removeChild(n)}else alert("此浏览器不支持复制到剪贴板的功能")}return{isDone:s,copyToClipboard:h}}const A={class:"container"},J={class:"flex"},P={class:"label block text-black font-bold"},G=["onClick"],I={class:"flex"},Y={class:"input-item p-3 mb-2 flex-1"},q={class:"org relative rounded-lg border-2 p-3 h-72 mb-2 mt-10"},z={class:"input-item p-3 mb-2 flex-1"},Q={class:"result relative rounded-lg border-2 p-3 h-72 mb-2 mt-10"},R={__name:"CreateData",setup(s){function h(l){switch(l){case"Date":return"$ft.time";default:return}}function r(l,e="label",o="value",d){let a=l.split(`
`),y=[];return a.forEach(M=>{var S,L;let u=M.split(";"),H=u[0].split(" ")[u[0].split(" ").length-1];if(H.includes("Code"))y.push();else{let j={[e]:(L=(S=u[1])==null?void 0:S.split("//")[1])==null?void 0:L.replace(/\/字典(\d+)/,""),[o]:H},U=h(u[0].split(" ")[u[0].split(" ").length-2]);U&&(j.formatter=U),d==null||d.forEach(B=>{j[B.label]=B.value}),y.push(j)}}),JSON.stringify(y.filter(M=>M.label))}function n(l){F().copyToClipboard(l),E.success("复制成功")}const i=p(`private String cityCode;    //省（市）/字典3   
 private String city;    //省（市）
 private String countyCode;    //区县
 private String county;    //区县
 private String townshipCode;    //乡镇
 private String township;    //乡镇/字典5;`),c=p(null),x=p(null),V=p(null),v=_([{label:"formatter",value:""}]);function T(){if(!i.value){E.warning("请输入数据");return}c.value=r(i.value,x.value||"label",V.value||"value",v||null)}function $(){v.push({label:"",value:""})}function Z(l){v.splice(l,1)}return(l,e)=>(b(),g("div",A,[e[16]||(e[16]=t("div",{class:"title p-3 font-bold text-2xl"},"生成表单数据",-1)),e[17]||(e[17]=t("div",{class:"desc p-3 text-sm"},"将目标数据转换为表单数据;",-1)),k(m(f),{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=o=>x.value=o),class:"mb-2",style:{"max-width":"600px"},placeholder:"请输入Key哟~~"},{prepend:C(()=>e[7]||(e[7]=[t("label",{class:"label block text-black font-bold"},"Key",-1)])),_:1},8,["modelValue"]),t("div",J,[k(m(f),{modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=o=>V.value=o),class:"mb-2",style:{"max-width":"600px"},placeholder:"请输入Value哟~~"},{prepend:C(()=>e[8]||(e[8]=[t("label",{class:"label block text-black font-bold"},"Value",-1)])),_:1},8,["modelValue"]),t("span",{class:"inline-block my-auto mx-2 w-[24px] cursor-pointer bg-slate-200 rounded-full hover:bg-sky-100",onClick:$},e[9]||(e[9]=[t("svg",{width:"24",height:"24",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M24.0605 10L24.0239 38",stroke:"#000000","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M10 24L38 24",stroke:"#000000","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))]),(b(!0),g(K,null,O(v,(o,d)=>(b(),g("div",{class:"flex",key:o.label},[k(m(f),{modelValue:o.value,"onUpdate:modelValue":a=>o.value=a,class:"mb-2",style:{"max-width":"600px"},placeholder:"请输入Value哟~~"},{prepend:C(()=>[t("label",P,[k(m(f),{modelValue:o.label,"onUpdate:modelValue":a=>o.label=a,placeholder:"请输入key",clearable:""},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1032,["modelValue","onUpdate:modelValue"]),t("span",{class:"inline-block my-auto mx-2 w-[24px] cursor-pointer bg-slate-200 rounded-full hover:bg-sky-100",onClick:a=>Z(d)},e[10]||(e[10]=[w('<svg class="m-auto" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 10V44H39V10H9Z" fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round"></path><path d="M20 20V33" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 20V33" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 10H44" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 10L19.289 4H28.7771L32 10H16Z" fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round"></path></svg>',1)]),8,G)]))),128)),t("div",I,[t("div",Y,[e[13]||(e[13]=t("div",{class:"input-title underline font-bold"},"目标数据:",-1)),t("div",q,[D(t("textarea",{class:"w-full h-full","onUpdate:modelValue":e[2]||(e[2]=o=>i.value=o),name:"",id:"",cols:"30",rows:"10"},null,512),[[N,i.value]]),t("button",{class:"close absolute top-0 right-0 m-2 p-1 cursor-pointer",onClick:e[3]||(e[3]=o=>i.value=null),title:"清空"},e[11]||(e[11]=[w('<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.91406H28V13.9141H43V21.9141H5V13.9141H20V5.91406Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 40H40V22H8V40Z" fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round"></path><path d="M16 39.8976V33.9141" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 39.8977V33.8977" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 39.8976V33.9141" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 40H36" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',1)])),t("button",{class:"transformation absolute bottom-0 right-0 m-2 p-1 cursor-pointer",title:"转换",onClick:e[4]||(e[4]=o=>T())},e[12]||(e[12]=[w('<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 19H5.99998" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 7L42 19" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.79897 29H42.799" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.79895 29L18.799 41" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',1)]))])]),t("div",z,[e[15]||(e[15]=t("div",{class:"input-title underline font-bold"},"结果数据:",-1)),t("div",Q,[t("div",{class:"close absolute top-0 right-0 m-2 cursor-pointer",onClick:e[5]||(e[5]=o=>n(c.value)),title:"复制"},e[14]||(e[14]=[w('<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 38H41V16H30V4H13V38Z" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 4L41 16" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V44H28" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 20H23" stroke="#000000" stroke-width="4" stroke-linecap="round"></path><path d="M19 28H31" stroke="#000000" stroke-width="4" stroke-linecap="round"></path></svg>',1)])),D(t("textarea",{class:"w-full h-full","onUpdate:modelValue":e[6]||(e[6]=o=>c.value=o),name:"",id:"",cols:"30",rows:"10"},null,512),[[N,c.value]])])])])]))}},te=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/扩展工具/生成表单数据/index.md","filePath":"插件扩展/扩展工具/生成表单数据/index.md","lastUpdated":1713864848000}'),W={name:"插件扩展/扩展工具/生成表单数据/index.md"},oe=Object.assign(W,{setup(s){return(h,r)=>(b(),g("div",null,[k(R)]))}});export{te as __pageData,oe as default};
