import{e as k,aF as U,f as r,h as d,u as t,L as S,j as e,T as p,S as v,R as B,K as c,O as C,aG as D,aH as L,a7 as P,aI as N,aJ as R,U as y,aK as z,aL as F,r as f,aM as H,aN as O,aO as T,a8 as w,I as E,ak as j,aP as A,b as Y,Y as _,af as $,aQ as G,aR as J}from"./chunks/framework.DMTyxyBf.js";import{E as I}from"./chunks/theme.C9Wx135e.js";const K={class:"card-page"},q={key:1},Q=k({__name:"index",setup(g){const{isSupported:l,open:s,sRGBHex:i}=U();return(u,n)=>(r(),d("div",K,[t(l)?(r(),d(S,{key:0},[e("div",null,"是否支持: "+p(t(l)?"YES":"NO"),1),e("div",null,[n[1]||(n[1]=v("sRGBHex: ")),e("span",{style:B({color:t(i)})},p(t(i)),5)]),c(t(I),{disabled:!t(l),onClick:n[0]||(n[0]=()=>t(s)()),style:{margin:"10px 0"}},{default:C(()=>n[2]||(n[2]=[v(" 点击获取你需要的颜色 ")])),_:1},8,["disabled"])],64)):(r(),d("div",q,n[3]||(n[3]=[e("span",null,"Not Supported by Your Browser",-1)])))]))}}),W={class:"card-page"},X={key:0,"i-carbon-moon":"","inline-block":"","align-middle":"",class:"align-middle"},Z={key:1,"i-carbon-sun":"","inline-block":"","align-middle":"",class:"align-middle"},ee={key:2,"i-carbon-cafe":"","inline-block":"","align-middle":"",class:"align-middle"},se={key:3,"i-carbon-contrast":"","inline-block":"","align-middle":"",class:"align-middle"},ne={key:4,"i-carbon-laptop":"","inline-block":"","align-middle":"",class:"align-middle"},te={class:"ml-2 capitalize"},le={__name:"index",setup(g){const l=D({emitAuto:!0,modes:{contrast:"contrast",cafe:"cafe"}}),{state:s,next:i}=L(["dark","light","cafe","contrast","auto"],{initialValue:l});P(()=>l.value=s.value);const u=N();return R(u),(n,o)=>(r(),d("div",W,[c(t(I),{onClick:o[0]||(o[0]=b=>t(i)())},{default:C(()=>[t(s)==="dark"?(r(),d("i",X)):y("",!0),t(s)==="light"?(r(),d("i",Z)):y("",!0),t(s)==="cafe"?(r(),d("i",ee)):y("",!0),t(s)==="contrast"?(r(),d("i",se)):y("",!0),t(s)==="auto"?(r(),d("i",ne)):y("",!0),e("span",te,p(t(s)),1)]),_:1})]))}},ae={key:0,class:"inline-grid grid-cols-2 gap-x-4 gap-y-2 card-page"},ie={key:1},oe=k({__name:"index",setup(g){function l(u){return`${(u/1024/1024).toFixed(2)} MB`}const{isSupported:s,memory:i}=z();return(u,n)=>t(s)&&t(i)?(r(),d("div",ae,[t(i)?(r(),d(S,{key:0},[e("div",null,[n[0]||(n[0]=e("span",{opacity:"50"}," 使用: ",-1)),e("span",null,p(l(t(i).usedJSHeapSize)),1)]),e("div",null,[n[1]||(n[1]=e("span",{opacity:"50"}," 分配: ",-1)),e("span",null,p(l(t(i).totalJSHeapSize)),1)]),e("div",null,[n[2]||(n[2]=e("span",{opacity:"50"}," 限制: ",-1)),e("span",null,p(l(t(i).jsHeapSizeLimit)),1)])],64)):y("",!0)])):(r(),d("div",ie," Your browser does not support performance memory API "))}}),re={class:"card-page"},de={class:"inline-grid grid-cols-2 gap-x-4 gap-y-2"},ue=k({__name:"index",setup(g){const{top:l,right:s,bottom:i,left:u}=F();return(n,o)=>(r(),d("div",re,[o[4]||(o[4]=e("a",{href:"https://vueuse.org/core/useScreenSafeArea/"},"文档地址",-1)),o[5]||(o[5]=e("br",null,null,-1)),e("div",de,[e("div",null,[o[0]||(o[0]=e("span",{opacity:"50"}," top: ",-1)),e("span",null,p(t(l)),1)]),e("div",null,[o[1]||(o[1]=e("span",{opacity:"50"}," right: ",-1)),e("span",null,p(t(s)),1)]),e("div",null,[o[2]||(o[2]=e("span",{opacity:"50"}," bottom: ",-1)),e("span",null,p(t(i)),1)]),e("div",null,[o[3]||(o[3]=e("span",{opacity:"50"}," left: ",-1)),e("span",null,p(t(u)),1)])])]))}}),pe={class:"flex flex-col gap-4 text-center card-page"},ve=k({__name:"index",setup(g){const l=f(),{stream:s,enabled:i}=H();return P(()=>{l.value&&(l.value.srcObject=s.value)}),(u,n)=>(r(),d("div",pe,[e("div",null,[e("button",{onClick:n[0]||(n[0]=o=>i.value=!t(i))},p(t(i)?"Stop":"Start")+" sharing my screen ",1)]),e("div",null,[e("video",{ref_key:"video",ref:l,muted:"",autoplay:"",controls:"",class:"h-100 w-auto"},null,512)])]))}}),me={class:"flex flex-col gap-4 text-center card-page"},be=["onClick"],ce=k({__name:"index",setup(g){const l=f(),{videoInputs:s}=O({requestPermissions:!0,onUpdated(){var o;s.value.find(b=>b.deviceId===l.value)||(l.value=(o=s.value[0])==null?void 0:o.deviceId)}}),i=f(),{stream:u,enabled:n}=T({constraints:{video:{deviceId:l}}});return P(()=>{i.value&&(i.value.srcObject=u.value)}),(o,b)=>(r(),d("div",me,[e("div",null,[e("button",{onClick:b[0]||(b[0]=x=>n.value=!t(n))},p(t(n)?"Stop":"Start"),1)]),e("div",null,[(r(!0),d(S,null,w(t(s),x=>(r(),d("div",{key:x.deviceId,class:E(["px-2 py-1 cursor-pointer",{"text-primary":l.value===x.deviceId}]),onClick:h=>l.value=x.deviceId},p(x.label),11,be))),128))]),e("div",null,[e("video",{ref_key:"video",ref:i,muted:"",autoplay:"",controls:"",class:"h-100 w-auto"},null,512)])]))}}),fe={class:"card-page"},ge={key:0},xe={key:1},ye={class:"select",bg:"$vp-c-bg",border:"$vp-c-divider 1","inline-flex":"","items-center":"",relative:"",rounded:""},ke=["value"],_e={"inline-flex":"","items-center":""},Se={class:"mt-1","inline-flex":""},$e={"inline-flex":"","items-center":""},Pe={class:"mt-1","inline-flex":""},he={class:"mt-2"},Ce=["disabled"],we=["disabled"],Ie=["disabled"],Ve={__name:"index",setup(g){const l=f(),s=f("Hello, everyone! Good morning!"),i=f(1),u=f(1),n=A(s,{voice:l,pitch:i,rate:u});let o;const b=f([]);Y(()=>{n.isSupported.value&&setTimeout(()=>{o=window.speechSynthesis,b.value=o.getVoices(),l.value=b.value[0]})});function x(){n.status.value==="pause"?(console.log("resume"),window.speechSynthesis.resume()):n.speak()}function h(){window.speechSynthesis.pause()}function V(){n.stop()}return(Le,a)=>(r(),d("div",fe,[t(n).isSupported?(r(),d("div",xe,[a[10]||(a[10]=e("label",{class:"font-bold mr-2"},"Spoken Text",-1)),_(e("input",{"onUpdate:modelValue":a[0]||(a[0]=m=>s.value=m),class:"!inline-block",type:"text"},null,512),[[$,s.value]]),a[11]||(a[11]=e("br",null,null,-1)),a[12]||(a[12]=e("label",{class:"font-bold mr-2"},"Language",-1)),e("div",ye,[a[6]||(a[6]=e("i",{"i-carbon-language":"",absolute:"","left-2":"","opacity-80":"","pointer-events-none":""},null,-1)),_(e("select",{"onUpdate:modelValue":a[1]||(a[1]=m=>l.value=m),"px-8":"","border-0":"","bg-transparent":"","h-9":"",rounded:"","appearance-none":""},[a[5]||(a[5]=e("option",{bg:"$vp-c-bg",disabled:""}," Select Language ",-1)),(r(!0),d(S,null,w(b.value,(m,M)=>(r(),d("option",{key:M,bg:"$vp-c-bg",value:m},p(`${m.name} (${m.lang})`),9,ke))),128))],512),[[G,l.value]]),a[7]||(a[7]=e("i",{"i-carbon-chevron-down":"",absolute:"","right-2":"","opacity-80":"","pointer-events-none":""},null,-1))]),a[13]||(a[13]=e("br",null,null,-1)),e("div",_e,[a[8]||(a[8]=e("label",{class:"font-bold mr-2"},"Pitch",-1)),e("div",Se,[_(e("input",{"onUpdate:modelValue":a[2]||(a[2]=m=>i.value=m),type:"range",min:"0.5",max:"2",step:"0.1"},null,512),[[$,i.value]])])]),a[14]||(a[14]=e("br",null,null,-1)),e("div",$e,[a[9]||(a[9]=e("label",{class:"font-bold mr-3"},"Rate",-1)),e("div",Pe,[_(e("input",{"onUpdate:modelValue":a[3]||(a[3]=m=>u.value=m),type:"range",min:"0.5",max:"2",step:"0.1"},null,512),[[$,u.value]])])]),e("div",he,[e("button",{disabled:t(n).isPlaying.value,onClick:x},p(t(n).status.value==="pause"?"Resume":"Speak"),9,Ce),e("button",{disabled:!t(n).isPlaying.value,class:"orange",onClick:h}," Pause ",8,we),e("button",{disabled:!t(n).isPlaying.value,class:"red",onClick:V}," Stop ",8,Ie)])])):(r(),d("div",ge,a[4]||(a[4]=[v(" Your browser does not support SpeechSynthesis API, "),e("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank"},"more details",-1)])))]))}},Me=j(Ve,[["__scopeId","data-v-412c84b2"]]),Ue={class:"card-page"},Be={__name:"index",setup(g){const l=f(null),{toggle:s,isFullscreen:i,element:u}=J(l);function n(){s()}return(o,b)=>(r(),d("div",Ue,[e("video",{ref_key:"videoRef",ref:l,controls:"",width:"300"},null,512),e("button",{onClick:n},"Toggle Fullscreen Video")]))}},ze=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/vue全家桶/vueuse/index.md","filePath":"基础知识/vue全家桶/vueuse/index.md","lastUpdated":1713792803000}'),De={name:"基础知识/vue全家桶/vueuse/index.md"},Fe=Object.assign(De,{setup(g){return(l,s)=>(r(),d("div",null,[s[0]||(s[0]=e("h2",{id:"vueuse",tabindex:"-1"},[v("vueuse "),e("a",{class:"header-anchor",href:"#vueuse","aria-label":'Permalink to "vueuse"'},"​")],-1)),s[1]||(s[1]=e("h3",{id:"颜色吸管工具",tabindex:"-1"},[v("颜色吸管工具 "),e("a",{class:"header-anchor",href:"#颜色吸管工具","aria-label":'Permalink to "颜色吸管工具"'},"​")],-1)),s[2]||(s[2]=e("br",null,null,-1)),c(Q),s[3]||(s[3]=e("h3",{id:"主题切换",tabindex:"-1"},[v("主题切换 "),e("a",{class:"header-anchor",href:"#主题切换","aria-label":'Permalink to "主题切换"'},"​")],-1)),s[4]||(s[4]=e("br",null,null,-1)),c(le),s[5]||(s[5]=e("h3",{id:"内存",tabindex:"-1"},[v("内存 "),e("a",{class:"header-anchor",href:"#内存","aria-label":'Permalink to "内存"'},"​")],-1)),s[6]||(s[6]=e("br",null,null,-1)),c(oe),s[7]||(s[7]=e("h3",{id:"屏幕安全区域",tabindex:"-1"},[v("屏幕安全区域 "),e("a",{class:"header-anchor",href:"#屏幕安全区域","aria-label":'Permalink to "屏幕安全区域"'},"​")],-1)),s[8]||(s[8]=e("br",null,null,-1)),c(ue),s[9]||(s[9]=e("h3",{id:"共享屏幕",tabindex:"-1"},[v("共享屏幕 "),e("a",{class:"header-anchor",href:"#共享屏幕","aria-label":'Permalink to "共享屏幕"'},"​")],-1)),s[10]||(s[10]=e("br",null,null,-1)),c(ve),s[11]||(s[11]=e("h3",{id:"用户媒体",tabindex:"-1"},[v("用户媒体 "),e("a",{class:"header-anchor",href:"#用户媒体","aria-label":'Permalink to "用户媒体"'},"​")],-1)),s[12]||(s[12]=e("br",null,null,-1)),c(ce),s[13]||(s[13]=e("h3",{id:"使用语音合成",tabindex:"-1"},[v("使用语音合成 "),e("a",{class:"header-anchor",href:"#使用语音合成","aria-label":'Permalink to "使用语音合成"'},"​")],-1)),s[14]||(s[14]=e("br",null,null,-1)),c(Me),s[15]||(s[15]=e("h3",{id:"全屏",tabindex:"-1"},[v("全屏 "),e("a",{class:"header-anchor",href:"#全屏","aria-label":'Permalink to "全屏"'},"​")],-1)),s[16]||(s[16]=e("br",null,null,-1)),c(Be)]))}});export{ze as __pageData,Fe as default};
