import{V as Be}from"./chunks/theme.BtX1Ru7Y.js";import{ay as we,az as ke,H as Ee,d as Y,aA as Ce,h as C,aB as Re,k as _,y as ee,U as $e,l as ge,o as g,b as M,J as v,w as f,m as s,n as m,p as e,Q as ne,a2 as De,e as E,c as k,F as me,K as ze,G as Me,ah as je,aC as Ye,r as j,T as He,aD as Fe,aE as Xe,t as ve,N as Ke,ar as Ue,$ as We,aq as Le,O as Ge,aF as qe,am as Qe,a as xe,a1 as Je,_ as Ne,q as Ze,s as et,Y as tt}from"./chunks/framework.DcGi6Jq3.js";import{m as Te,u as Z,E as Q,a as st,C as Oe,b as at}from"./chunks/index.B4cJBb0m.js";import{q as J,r as nt,c as ye,e as ae,s as le,t as lt,v as it,j as Ve,f as he,k as ot,E as A,x as Ae,y as rt,A as ct,B as ut,C as dt,D as pt,F as vt,_ as _e,p as ft,w as Se,G as mt,H as gt,i as yt,I as ht,g as _t}from"./chunks/use-form-item.CZYH-sBR.js";import{d as wt,g as bt,E as kt}from"./chunks/index.C5ytboSn.js";import{E as xt}from"./chunks/index.Bams4by1.js";import{E as Ie}from"./chunks/index.B6d87c4I.js";import"./chunks/use-global-config.BTnNNTQz.js";const St=(n,o)=>{if(!J||!n||!o)return!1;const t=n.getBoundingClientRect();let a;return o instanceof Element?a=o.getBoundingClientRect():a={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},t.top<a.bottom&&t.bottom>a.top&&t.right>a.left&&t.left<a.right};var Ct="Expected a function";function be(n,o,t){var a=!0,c=!0;if(typeof n!="function")throw new TypeError(Ct);return nt(t)&&(a="leading"in t?!!t.leading:a,c="trailing"in t?!!t.trailing:c),wt(n,o,{leading:a,maxWait:o,trailing:c})}const fe=n=>{const o=we(n)?n:[n],t=[];return o.forEach(a=>{var c;we(a)?t.push(...fe(a)):ke(a)&&we(a.children)?t.push(...fe(a.children)):(t.push(a),ke(a)&&((c=a.component)!=null&&c.subTree)&&t.push(...fe(a.component.subTree)))}),t},It=(n,o,t)=>fe(n.subTree).filter(d=>{var u;return ke(d)&&((u=d.type)==null?void 0:u.name)===o&&!!d.component}).map(d=>d.component.uid).map(d=>t[d]).filter(d=>!!d),Et=(n,o)=>{const t={},a=Ee([]);return{children:a,addChild:u=>{t[u.uid]=u,a.value=It(n,o,t)},removeChild:u=>{delete t[u],a.value=a.value.filter(r=>r.uid!==u)}}},$t=ye({urlList:{type:ae(Array),default:()=>Te([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:ae(String)}}),zt={close:()=>!0,switch:n=>le(n),rotate:n=>le(n)},Lt=["src","crossorigin"],Nt=Y({name:"ElImageViewer"}),Tt=Y({...Nt,props:$t,emits:zt,setup(n,{expose:o,emit:t}){var a;const c=n,d={CONTAIN:{name:"contain",icon:Ce(lt)},ORIGINAL:{name:"original",icon:Ce(it)}},{t:u}=Ve(),r=he("image-viewer"),{nextZIndex:x}=ot(),T=C(),z=C([]),B=Re(),S=C(!0),w=C(c.initialIndex),R=Ee(d.CONTAIN),y=C({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),H=C((a=c.zIndex)!=null?a:x()),te=_(()=>{const{urlList:i}=c;return i.length<=1}),K=_(()=>w.value===0),U=_(()=>w.value===c.urlList.length-1),F=_(()=>c.urlList[w.value]),W=_(()=>[r.e("btn"),r.e("prev"),r.is("disabled",!c.infinite&&K.value)]),p=_(()=>[r.e("btn"),r.e("next"),r.is("disabled",!c.infinite&&U.value)]),L=_(()=>{const{scale:i,deg:h,offsetX:b,offsetY:O,enableTransition:P}=y.value;let $=b/i,V=O/i;switch(h%360){case 90:case-270:[$,V]=[V,-$];break;case 180:case-180:[$,V]=[-$,-V];break;case 270:case-90:[$,V]=[-V,$];break}const q={transform:`scale(${i}) rotate(${h}deg) translate(${$}px, ${V}px)`,transition:P?"transform .3s":""};return R.value.name===d.CONTAIN.name&&(q.maxWidth=q.maxHeight="100%"),q});function D(){ie(),t("close")}function G(){const i=be(b=>{switch(b.code){case Q.esc:c.closeOnPressEscape&&D();break;case Q.space:de();break;case Q.left:pe();break;case Q.up:I("zoomIn");break;case Q.right:l();break;case Q.down:I("zoomOut");break}}),h=be(b=>{const O=b.deltaY||b.deltaX;I(O<0?"zoomIn":"zoomOut",{zoomRate:c.zoomRate,enableTransition:!1})});B.run(()=>{Z(document,"keydown",i),Z(document,"wheel",h)})}function ie(){B.stop()}function oe(){S.value=!1}function re(i){S.value=!1,i.target.alt=u("el.image.error")}function ce(i){if(S.value||i.button!==0||!T.value)return;y.value.enableTransition=!1;const{offsetX:h,offsetY:b}=y.value,O=i.pageX,P=i.pageY,$=be(q=>{y.value={...y.value,offsetX:h+q.pageX-O,offsetY:b+q.pageY-P}}),V=Z(document,"mousemove",$);Z(document,"mouseup",()=>{V()}),i.preventDefault()}function ue(){y.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function de(){if(S.value)return;const i=ft(d),h=Object.values(d),b=R.value.name,P=(h.findIndex($=>$.name===b)+1)%i.length;R.value=d[i[P]],ue()}function se(i){const h=c.urlList.length;w.value=(i+h)%h}function pe(){K.value&&!c.infinite||se(w.value-1)}function l(){U.value&&!c.infinite||se(w.value+1)}function I(i,h={}){if(S.value)return;const{minScale:b,maxScale:O}=c,{zoomRate:P,rotateDeg:$,enableTransition:V}={zoomRate:c.zoomRate,rotateDeg:90,enableTransition:!0,...h};switch(i){case"zoomOut":y.value.scale>b&&(y.value.scale=Number.parseFloat((y.value.scale/P).toFixed(3)));break;case"zoomIn":y.value.scale<O&&(y.value.scale=Number.parseFloat((y.value.scale*P).toFixed(3)));break;case"clockwise":y.value.deg+=$,t("rotate",y.value.deg);break;case"anticlockwise":y.value.deg-=$,t("rotate",y.value.deg);break}y.value.enableTransition=V}return ee(F,()=>{$e(()=>{const i=z.value[0];i!=null&&i.complete||(S.value=!0)})}),ee(w,i=>{ue(),t("switch",i)}),ge(()=>{var i,h;G(),(h=(i=T.value)==null?void 0:i.focus)==null||h.call(i)}),o({setActiveItem:se}),(i,h)=>(g(),M(Fe,{to:"body",disabled:!i.teleported},[v(He,{name:"viewer-fade",appear:""},{default:f(()=>[s("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:m(e(r).e("wrapper")),style:ne({zIndex:H.value})},[s("div",{class:m(e(r).e("mask")),onClick:h[0]||(h[0]=De(b=>i.hideOnClickModal&&D(),["self"]))},null,2),E(" CLOSE "),s("span",{class:m([e(r).e("btn"),e(r).e("close")]),onClick:D},[v(e(A),null,{default:f(()=>[v(e(Ae))]),_:1})],2),E(" ARROW "),e(te)?E("v-if",!0):(g(),k(me,{key:0},[s("span",{class:m(e(W)),onClick:pe},[v(e(A),null,{default:f(()=>[v(e(rt))]),_:1})],2),s("span",{class:m(e(p)),onClick:l},[v(e(A),null,{default:f(()=>[v(e(ct))]),_:1})],2)],64)),E(" ACTIONS "),s("div",{class:m([e(r).e("btn"),e(r).e("actions")])},[s("div",{class:m(e(r).e("actions__inner"))},[v(e(A),{onClick:h[1]||(h[1]=b=>I("zoomOut"))},{default:f(()=>[v(e(ut))]),_:1}),v(e(A),{onClick:h[2]||(h[2]=b=>I("zoomIn"))},{default:f(()=>[v(e(dt))]),_:1}),s("i",{class:m(e(r).e("actions__divider"))},null,2),v(e(A),{onClick:de},{default:f(()=>[(g(),M(ze(e(R).icon)))]),_:1}),s("i",{class:m(e(r).e("actions__divider"))},null,2),v(e(A),{onClick:h[3]||(h[3]=b=>I("anticlockwise"))},{default:f(()=>[v(e(pt))]),_:1}),v(e(A),{onClick:h[4]||(h[4]=b=>I("clockwise"))},{default:f(()=>[v(e(vt))]),_:1})],2)],2),E(" CANVAS "),s("div",{class:m(e(r).e("canvas"))},[(g(!0),k(me,null,Me(i.urlList,(b,O)=>je((g(),k("img",{ref_for:!0,ref:P=>z.value[O]=P,key:b,src:b,style:ne(e(L)),class:m(e(r).e("img")),crossorigin:i.crossorigin,onLoad:oe,onError:re,onMousedown:ce},null,46,Lt)),[[Ye,O===w.value]])),128))],2),j(i.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Ot=_e(Tt,[["__file","image-viewer.vue"]]);const Vt=Se(Ot),At=ye({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:ae([String,Object])},previewSrcList:{type:ae(Array),default:()=>Te([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:ae(String)}}),Pt={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>le(n),close:()=>!0,show:()=>!0},Bt=["src","loading","crossorigin"],Rt={key:0},Dt=Y({name:"ElImage",inheritAttrs:!1}),Mt=Y({...Dt,props:At,emits:Pt,setup(n,{emit:o}){const t=n;let a="";const{t:c}=Ve(),d=he("image"),u=Xe(),r=st(),x=C(),T=C(!1),z=C(!0),B=C(!1),S=C(),w=C(),R=J&&"loading"in HTMLImageElement.prototype;let y,H;const te=_(()=>[d.e("inner"),F.value&&d.e("preview"),z.value&&d.is("loading")]),K=_(()=>u.style),U=_(()=>{const{fit:l}=t;return J&&l?{objectFit:l}:{}}),F=_(()=>{const{previewSrcList:l}=t;return Array.isArray(l)&&l.length>0}),W=_(()=>{const{previewSrcList:l,initialIndex:I}=t;let i=I;return I>l.length-1&&(i=0),i}),p=_(()=>t.loading==="eager"?!1:!R&&t.loading==="lazy"||t.lazy),L=()=>{J&&(z.value=!0,T.value=!1,x.value=t.src)};function D(l){z.value=!1,T.value=!1,o("load",l)}function G(l){z.value=!1,T.value=!0,o("error",l)}function ie(){St(S.value,w.value)&&(L(),ce())}const oe=mt(ie,200,!0);async function re(){var l;if(!J)return;await $e();const{scrollContainer:I}=t;gt(I)?w.value=I:Ue(I)&&I!==""?w.value=(l=document.querySelector(I))!=null?l:void 0:S.value&&(w.value=bt(S.value)),w.value&&(y=Z(w,"scroll",oe),setTimeout(()=>ie(),100))}function ce(){!J||!w.value||!oe||(y==null||y(),w.value=void 0)}function ue(l){if(l.ctrlKey){if(l.deltaY<0)return l.preventDefault(),!1;if(l.deltaY>0)return l.preventDefault(),!1}}function de(){F.value&&(H=Z("wheel",ue,{passive:!1}),a=document.body.style.overflow,document.body.style.overflow="hidden",B.value=!0,o("show"))}function se(){H==null||H(),document.body.style.overflow=a,B.value=!1,o("close")}function pe(l){o("switch",l)}return ee(()=>t.src,()=>{p.value?(z.value=!0,T.value=!1,ce(),re()):L()}),ge(()=>{p.value?re():L()}),(l,I)=>(g(),k("div",{ref_key:"container",ref:S,class:m([e(d).b(),l.$attrs.class]),style:ne(e(K))},[T.value?j(l.$slots,"error",{key:0},()=>[s("div",{class:m(e(d).e("error"))},ve(e(c)("el.image.error")),3)]):(g(),k(me,{key:1},[x.value!==void 0?(g(),k("img",Ke({key:0},e(r),{src:x.value,loading:l.loading,style:e(U),class:e(te),crossorigin:l.crossorigin,onClick:de,onLoad:D,onError:G}),null,16,Bt)):E("v-if",!0),z.value?(g(),k("div",{key:1,class:m(e(d).e("wrapper"))},[j(l.$slots,"placeholder",{},()=>[s("div",{class:m(e(d).e("placeholder"))},null,2)])],2)):E("v-if",!0)],64)),e(F)?(g(),k(me,{key:2},[B.value?(g(),M(e(Vt),{key:0,"z-index":l.zIndex,"initial-index":e(W),infinite:l.infinite,"zoom-rate":l.zoomRate,"min-scale":l.minScale,"max-scale":l.maxScale,"url-list":l.previewSrcList,"hide-on-click-modal":l.hideOnClickModal,teleported:l.previewTeleported,"close-on-press-escape":l.closeOnPressEscape,onClose:se,onSwitch:pe},{default:f(()=>[l.$slots.viewer?(g(),k("div",Rt,[j(l.$slots,"viewer")])):E("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):E("v-if",!0)],64)):E("v-if",!0)],6))}});var jt=_e(Mt,[["__file","image.vue"]]);const Yt=Se(jt),Ht=ye({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Ft={[Oe]:(n,o)=>[n,o].every(le)},Xt=Y({name:"ElSteps"}),Kt=Y({...Xt,props:Ht,emits:Ft,setup(n,{emit:o}){const t=n,a=he("steps"),{children:c,addChild:d,removeChild:u}=Et(Le(),"ElStep");return ee(c,()=>{c.value.forEach((r,x)=>{r.setIndex(x)})}),We("ElSteps",{props:t,steps:c,addStep:d,removeStep:u}),ee(()=>t.active,(r,x)=>{o(Oe,r,x)}),(r,x)=>(g(),k("div",{class:m([e(a).b(),e(a).m(r.simple?"simple":r.direction)])},[j(r.$slots,"default")],2))}});var Ut=_e(Kt,[["__file","steps.vue"]]);const Wt=ye({title:{type:String,default:""},icon:{type:yt},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Gt=Y({name:"ElStep"}),qt=Y({...Gt,props:Wt,setup(n){const o=n,t=he("step"),a=C(-1),c=C({}),d=C(""),u=Ge("ElSteps"),r=Le();ge(()=>{ee([()=>u.props.active,()=>u.props.processStatus,()=>u.props.finishStatus],([p])=>{F(p)},{immediate:!0})}),qe(()=>{u.removeStep(W.uid)});const x=_(()=>o.status||d.value),T=_(()=>{const p=u.steps.value[a.value-1];return p?p.currentStatus:"wait"}),z=_(()=>u.props.alignCenter),B=_(()=>u.props.direction==="vertical"),S=_(()=>u.props.simple),w=_(()=>u.steps.value.length),R=_(()=>{var p;return((p=u.steps.value[w.value-1])==null?void 0:p.uid)===(r==null?void 0:r.uid)}),y=_(()=>S.value?"":u.props.space),H=_(()=>[t.b(),t.is(S.value?"simple":u.props.direction),t.is("flex",R.value&&!y.value&&!z.value),t.is("center",z.value&&!B.value&&!S.value)]),te=_(()=>{const p={flexBasis:le(y.value)?`${y.value}px`:y.value?y.value:`${100/(w.value-(z.value?0:1))}%`};return B.value||R.value&&(p.maxWidth=`${100/w.value}%`),p}),K=p=>{a.value=p},U=p=>{const L=p==="wait",D={transitionDelay:`${L?"-":""}${150*a.value}ms`},G=p===u.props.processStatus||L?0:100;D.borderWidth=G&&!S.value?"1px":0,D[u.props.direction==="vertical"?"height":"width"]=`${G}%`,c.value=D},F=p=>{p>a.value?d.value=u.props.finishStatus:p===a.value&&T.value!=="error"?d.value=u.props.processStatus:d.value="wait";const L=u.steps.value[a.value-1];L&&L.calcProgress(d.value)},W=Qe({uid:r.uid,currentStatus:x,setIndex:K,calcProgress:U});return u.addStep(W),(p,L)=>(g(),k("div",{style:ne(e(te)),class:m(e(H))},[E(" icon & line "),s("div",{class:m([e(t).e("head"),e(t).is(e(x))])},[e(S)?E("v-if",!0):(g(),k("div",{key:0,class:m(e(t).e("line"))},[s("i",{class:m(e(t).e("line-inner")),style:ne(c.value)},null,6)],2)),s("div",{class:m([e(t).e("icon"),e(t).is(p.icon||p.$slots.icon?"icon":"text")])},[j(p.$slots,"icon",{},()=>[p.icon?(g(),M(e(A),{key:0,class:m(e(t).e("icon-inner"))},{default:f(()=>[(g(),M(ze(p.icon)))]),_:1},8,["class"])):e(x)==="success"?(g(),M(e(A),{key:1,class:m([e(t).e("icon-inner"),e(t).is("status")])},{default:f(()=>[v(e(ht))]),_:1},8,["class"])):e(x)==="error"?(g(),M(e(A),{key:2,class:m([e(t).e("icon-inner"),e(t).is("status")])},{default:f(()=>[v(e(Ae))]),_:1},8,["class"])):e(S)?E("v-if",!0):(g(),k("div",{key:3,class:m(e(t).e("icon-inner"))},ve(a.value+1),3))])],2)],2),E(" title & description "),s("div",{class:m(e(t).e("main"))},[s("div",{class:m([e(t).e("title"),e(t).is(e(x))])},[j(p.$slots,"title",{},()=>[xe(ve(p.title),1)])],2),e(S)?(g(),k("div",{key:0,class:m(e(t).e("arrow"))},null,2)):(g(),k("div",{key:1,class:m([e(t).e("description"),e(t).is(e(x))])},[j(p.$slots,"description",{},()=>[xe(ve(p.description),1)])],2))],2)],6))}});var Pe=_e(qt,[["__file","item.vue"]]);const Qt=Se(Ut,{Step:Pe}),X=_t(Pe),Jt={class:"empty-container"},Zt={key:0},es={key:1},ts=s("div",{style:{display:"flex",padding:"10px 0"}},[s("h3",{style:{margin:"auto"}},"扫描关注获取密码")],-1),ss=s("div",{style:{display:"flex",padding:"10px 0"}},[s("p",{style:{margin:"auto"}},"请输入密码以继续")],-1),as={style:{display:"flex",padding:"10px 0"}},ns={style:{"text-align":"center",padding:"10px 0"}},ls={__name:"base",setup(n){const o=C(null),t=C(!1);function a(){window.localStorage.setItem("password",o.value),console.log("密码已设置")}function c(){o.value!="1024"?(t.value=!1,Ie.error("密码错误")):(t.value=!0,a(),Ie.success("密码正确"))}function d(){}return(u,r)=>(g(),k("div",Jt,[t.value?(g(),k("div",Zt,[j(u.$slots,"default")])):(g(),k("div",es,[v(e(kt),{type:"always",style:{margin:"10px 0"}},{default:f(()=>[ts,ss,s("div",as,[v(e(Yt),{style:{width:"300px",height:"300px","text-align":"center",margin:"auto"},src:"../../assets/二维码.jpg"})]),s("div",ns,[v(e(at),{style:{display:"inline","padding-right":"10px"},type:"text",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=x=>o.value=x),onChange:d,onKeydown:Je(c,["enter"])},null,8,["modelValue"]),v(e(xt),{style:{display:"inline-block"},onClick:c},{default:f(()=>[xe("提交")]),_:1})])]),_:1})]))]))}},N=n=>(Ze("data-v-2f8c4588"),n=n(),et(),n),is={style:{height:"fit-content","margin-top":"20px"}},os=N(()=>s("div",{style:{display:"flex","justify-content":"space-between"}},[s("div",{class:"title"},"农业农村环境治理项目"),s("div",{class:"create_time",style:{"font-size":".8em"}},"2023-03-2023-07")],-1)),rs=N(()=>s("ul",null,[s("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),s("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),s("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),s("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),cs=N(()=>s("div",{style:{display:"flex","justify-content":"space-between"}},[s("div",{class:"title"},"驾驶舱配置系统"),s("div",{class:"create_time",style:{"font-size":".8em"}},"2023-01-2023-05")],-1)),us=N(()=>s("ul",null,[s("li",null,"主要依托于 AirCity（DTS） CIM平台，二次开发实现 "),s("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),s("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),s("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),s("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),ds=N(()=>s("div",{style:{display:"flex","justify-content":"space-between"}},[s("div",{class:"title"},"海水淡化项目"),s("div",{class:"create_time",style:{"font-size":".8em"}},"2022-12-2023-03")],-1)),ps=N(()=>s("ul",null,[s("li",null,"以山东小钦岛，鲁北碧水源污水处理厂为背景，实现海水淡化大屏项目，海水淡化后台管理系统"),s("li",null,"大屏项目 使用echarts 展示海水 产水量 净水等多种指标 展示实时监测数据，轮播展示处理厂风貌，实时的video视频采集"),s("li",null,"后台管理系统 主要实现了对数据（污水处理指标数据、人员信息、紧急联系人、值班信息、人员所属）的维护 实现基本的crud 使用echarts 展现数据"),s("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),vs=N(()=>s("div",{style:{display:"flex","justify-content":"space-between"}},[s("div",{class:"title"},"燃气考试系统"),s("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-11")],-1)),fs=N(()=>s("ul",null,[s("li",null,"主要采用Vue框架，axios，vue-router，vuex，elementUI；uniapp（作为移动端框架）"),s("li",null,"以天津滨海新区某某燃气公司作为大环境，实现管理员，内外勤员工日常考试，安全知识学习，技能评比，投票与反馈等主要功能"),s("li",null,"设计思路 角色权限 根据用户角色赋予差异化 功能，管理员可以进行题库 人员的配置；用户根据配置 题目在约定时间范围进行考试，投票功能近乎相似不做赘述"),s("li",null,"反馈功能主要是为了更好的 提高用户体验，有利于用户对软件做出反馈与日常需求的可能性，提供基本信息检索功能，使得项目朝着更符合用户思维的方向上行走 "),s("li",null,"同时 打造来了一套更便捷的移动端系统，主要采用 uniapp 与 vantUI 实现功能与pc端基本一致 不做赘述")],-1)),ms=N(()=>s("div",{style:{display:"flex","justify-content":"space-between"}},[s("div",{class:"title"},"智慧电力可视化大屏（数据可视化项目）"),s("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-06")],-1)),gs=N(()=>s("ul",null,[s("li",null,"以四川省为背景，围绕电厂负荷监测、调节策略、执行考核、与效果分析三个层级，部署一套自主调节、快速响应、科学研判的多功能性智能电力综合管控平台。"),s("li",null,"页面数据呈现主要由 表格 ，柱形图，折线图，雷达图、响应式地图以及动画效果构成； "),s("li",null,"技术依托基于HTML5的2D、3D渲染引擎，为可视化提供了丰富的展示效果。")],-1)),ys=N(()=>s("div",{style:{display:"flex","justify-content":"space-between"}},[s("div",{class:"title"},"云问答（基于区块链问答系统）"),s("div",{class:"create_time",style:{"font-size":".8em"}},"2021-12-2022-03")],-1)),hs=N(()=>s("ul",null,[s("li",null,"以信息工程学院作为大环境，实现学生老师等用户注册登录，登录成功后即可提出问题，回复问题，为了解决学生的切实问题的平台，减轻学生的压力。"),s("li",null,"整体设计，包含前台，与后台管理，前台主要实现登录、注册、搜索、个人中心、提问、回复问题、每日文案、推广、公告等诸多业务功能；后台主要实现用户、标签、问答、评论、文章、推广管理等，数据的增删改查功能； "),s("li",null,"主要采用Vue框架，axios，vue-router，vuex，bulma，elementUI；")],-1)),_s={__name:"index",setup(n){return(o,t)=>(g(),M(ls,null,{default:f(()=>[s("main",is,[v(e(Qt),{direction:"vertical",active:14},{default:f(()=>[v(e(X),null,{title:f(()=>[os]),description:f(()=>[rs]),_:1}),v(e(X),null,{title:f(()=>[cs]),description:f(()=>[us]),_:1}),v(e(X),null,{title:f(()=>[ds]),description:f(()=>[ps]),_:1}),v(e(X),null,{title:f(()=>[vs]),description:f(()=>[fs]),_:1}),v(e(X),null,{title:f(()=>[ms]),description:f(()=>[gs]),_:1}),v(e(X),null,{title:f(()=>[ys]),description:f(()=>[hs]),_:1}),v(e(X),{title:"..."})]),_:1})])]),_:1}))}},ws=Ne(_s,[["__scopeId","data-v-2f8c4588"]]),bs=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],ks=Y({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(n){const o=C(!1);return ge(()=>{o.value=!0,tt(()=>import("./chunks/giscus-BNK3dBIH.B_EkeIy7.js"),[])}),(t,a)=>o.value?(g(),k("giscus-widget",{key:0,id:t.id,host:t.host,repo:t.repo,repoid:t.repoId,category:t.category,categoryid:t.categoryId,mapping:t.mapping,term:t.term,strict:t.strict,reactionsenabled:t.reactionsEnabled,emitmetadata:t.emitMetadata,inputposition:t.inputPosition,theme:t.theme,lang:t.lang,loading:t.loading},null,8,bs)):E("",!0)}}),xs={__name:"index",setup(n){return(o,t)=>(g(),M(e(ks),{src:"https://giscus.app/client.js",id:"Q&A",repo:"yhx-yhx/noteplus-dist",repoId:"R_kgDOLxn9OQ",category:"Q&A",categoryId:"DIC_kwDOJkptE84Cc7Yx",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"preferred_color_scheme",lang:"zh-CN",loading:"lazy"}))}},Ss=Ne(xs,[["__scopeId","data-v-d57c717c"]]),Vs=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"我的/简历/index.md","filePath":"我的/简历/index.md","lastUpdated":1713880858000}'),Cs={name:"我的/简历/index.md"},As=Object.assign(Cs,{setup(n){const o=[{avatar:"/noteplus-dist/logo.jpg",name:"YHX",title:"Creator",links:[{icon:"github",link:"https://github.com/yhx-yhx"},{icon:"gitee",link:"https://gitee.com/yhx825"},{icon:"github",link:"https://github.com/yhx-yhx"}]},{avatar:"/noteplus-dist/logo.jpg",name:"世令我",title:"Creator",links:[{icon:"github",link:"https://github.com/yhx-yhx"},{icon:"gitee",link:"https://gitee.com/yhx825"},{icon:"github",link:"https://github.com/yhx-yhx"}]}];return(t,a)=>(g(),k("div",null,[v(e(Be),{size:"small",members:o}),v(ws),v(Ss)]))}});export{Vs as __pageData,As as default};
