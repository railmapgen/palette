import{H as t,F as K,ap as X,K as I,W as q,g as Z,ac as J,D as Q,aq as T}from"./chakra-n1sSkKQH.js";import{u as A,Y as H,Z as ee,M as y,a as V,W as D,l as te,m as oe,b as ne,r as E,E as P,g as se,h as ae,_ as le,$ as re}from"./index-fyAEgCfE.js";import{l as B,r as f,p as ce}from"./react-w_kKxQCt.js";import{u as M,P as ie,R as _,i as de}from"./pantone-input-gdE60_zl.js";import{u as ue}from"./use-palette-3GmNqnJC.js";import{P as pe}from"./pantone-checker-0CNWC2iV.js";const me=u=>{const o=u.toUpperCase().split("");return o.length===2?o.map(r=>((r.codePointAt(0)||0)+127397).toString(16).toUpperCase()):o.length===5?["1F3F4",...o.map(r=>((r.codePointAt(0)||0)+917536).toString(16).toUpperCase()),"E007F"]:[]},Ce=u=>{const o=me(u);return String.fromCodePoint(...o.map(r=>parseInt(r,16)))};function ge(u){const{defaultValueId:o,onChange:r}=u,{i18n:m}=B(),g=M(),{countryList:h,cityList:a}=A(e=>e.app),x=o?a.find(e=>e.id===o):void 0,j=e=>t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"flag-emoji",children:Ce(ee(e.country))}),t.jsx("span",{children:g(e.name)})]}),d=(e,l)=>{var c,p;const n=e.toLocaleLowerCase();return l.id.toLocaleLowerCase().includes(n)||Object.values(l.name).some(i=>i.toLocaleLowerCase().includes(n))||l.country.toLocaleLowerCase().includes(n)||Object.values((p=(c=h.find(i=>l.country===i.id))==null?void 0:c.name)!=null?p:{}).some(i=>i.toLocaleLowerCase().includes(n))},C=a.slice().map(e=>({...e,value:g(e.name)})).sort((e,l)=>e.id==="other"?1:l.id==="other"?-1:e.value.localeCompare(l.value,m.languages[0]));return t.jsx(H,{data:C,displayHandler:j,filter:d,value:x&&g(x.name),onChange:e=>r==null?void 0:r(e.id)})}const fe={display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"};function he(u){const{city:o,defaultValueId:r,onChange:m,onSubmit:g}=u,h=M(),a=ue(o),x=r?a.find(e=>e.id===r):void 0,j=e=>t.jsx(V,{name:h(e.name),fg:e.fg||y.white,bg:e.colour,title:h(e.name),sx:fe}),d=(e,l)=>{const n=e.toLocaleLowerCase();return l.id.toLocaleLowerCase().includes(n)||Object.values(l.name).some(c=>c.toLocaleLowerCase().includes(n))},C=a.map(e=>({...e,value:h(e.name)}));return t.jsx(H,{data:C,displayHandler:j,filter:d,value:x&&h(x.name),onChange:e=>m==null?void 0:m(e.id,e.colour,e.fg||y.white,e.pantone),InputPropsByState:e=>({onKeyDown:({key:l})=>!e&&l==="Enter"&&(g==null?void 0:g())})})}const O=u=>!!u.match(/^#[0-9a-fA-F]{6}$/),xe={flexDirection:"column",flex:1,mx:2,overflowX:"hidden",overflowY:"auto","& .chakra-badge":{fontSize:"1em",width:"fit-content",alignSelf:"center",m:1},"& > section:first-of-type":{p:1},"& > section:last-of-type":{w:"100%","& > div:last-of-type":{px:2},"& .rmg-section__header button":{ml:"auto"}}};function je(u){const{defaultTheme:o,sessionId:r,onSubmit:m,onClose:g,onClearHistory:h}=u,{t:a}=B(),{recentlyUsed:x,pantoneReady:j}=A(s=>s.app),[d,C]=f.useState(o==null?void 0:o[0]),[e,l]=f.useState(o==null?void 0:o[1]),[n,c]=f.useState((o==null?void 0:o[2])||"#AAAAAA"),[p,i]=f.useState((o==null?void 0:o[3])||y.white),[N,S]=f.useState(""),[v,w]=f.useState("color"),b=()=>{S(""),w(s=>s==="pantone"?"color":s)};f.useEffect(()=>{r&&o&&(C(o[0]),l(o[1]),c(o[2]),i(o[3]),b())},[r,o==null?void 0:o.toString()]);const $=[{label:a("Select"),value:"color"},{label:a("RGB"),value:"text"},{label:a("Pantone®"),value:"pantone",disabled:!j}],U=[{label:a("Black"),value:y.black},{label:a("White"),value:y.white}],R=d&&e&&n&&p&&O(n),F=()=>{if(R){const s="".concat(d," - ").concat(e);m==null||m([d,e,n,p],s)}},W=[{type:"custom",label:a("City"),component:t.jsx(ge,{defaultValueId:d,onChange:s=>{C(s),l(void 0),c("#AAAAAA"),i(y.white)}})},{type:"custom",label:a("Line"),component:t.jsx(he,{city:d,defaultValueId:e,onChange:(s,L,G,k)=>{l(s),c(L),i(G),k&&S(k)},onSubmit:F})}],z=[{type:"custom",label:a("Input mode"),component:t.jsx(D,{selections:$,defaultValue:v,onChange:s=>w(s)})},{type:"custom",label:a("Pantone® code"),component:t.jsx(ie,{value:N,onChange:(s,L)=>{C("other"),l("other"),c(L),S(s)}}),hidden:v!=="pantone"},{type:"input",label:a("Background colour"),variant:v==="pantone"?"color":v,value:n,placeholder:"#F3D03E",validator:O,onChange:s=>{C("other"),l("other"),c(s),b()},isDisabled:v==="pantone"},{type:"custom",label:a("Foreground colour"),component:t.jsx(D,{selections:U,defaultValue:p,onChange:s=>{C("other"),l("other"),i(s)}})}],Y=s=>{C(s[0]),l(s[1]),c(s[2]),i(s[3]),b()};return t.jsxs(t.Fragment,{children:[t.jsxs(K,{sx:xe,children:[t.jsx(V,{name:a("Example"),fg:p,bg:n}),t.jsxs(te,{children:[t.jsx(pe,{hidden:!0}),t.jsx(_,{fields:W}),t.jsx(_,{fields:z})]}),t.jsxs("section",{children:[t.jsxs(oe,{children:[t.jsx(X,{as:"h5",size:"xs",children:a("Recently used")}),t.jsx(I,{variant:"ghost",size:"xs",onClick:h,children:a("Clear")})]}),t.jsx(q,{children:x.map(({theme:s,displayName:L})=>t.jsx(Z,{children:t.jsx(J,{size:"xs","aria-label":a("Apply"),title:L,mt:"0.45px",color:s[3],bg:s[2],icon:t.jsx(de,{}),onClick:()=>Y(s)})},s.join("-")))})]})]}),t.jsx(Q,{}),t.jsxs(T,{p:2,justifyContent:"flex-end",children:[t.jsx(I,{size:"sm",onClick:g,children:a("Cancel")}),t.jsx(I,{size:"sm",colorScheme:"primary",onClick:F,isDisabled:!R,children:a("Confirm")})]})]})}const ye="rmg-palette-bridge--";function Ie(){const[u]=ce(),o=u.get("parentId"),r=u.get("parentComponent"),m=ne(),{isDataLoading:g}=A(n=>n.app),[h,a]=f.useState(),[x,j]=f.useState(),d=f.useRef();f.useEffect(()=>{const n=new BroadcastChannel(ye+o);return d.current=n,E.event(P.APP_CLIP_VIEW_OPENED,{parentComponent:r}),n.onmessage=c=>{const{event:p,data:i}=c.data;console.log("[".concat(n.name,"] Received event from parent component:"),p),p==="OPEN"&&(a(crypto.randomUUID()),j(i))},console.log("[".concat(n.name,"] App clip connection established, parentComponent=").concat(r)),n.postMessage({event:"LOADED"}),()=>{n.close()}},[]);const C=(n,c)=>{var p,i;console.log("[".concat((p=d.current)==null?void 0:p.name,"] Emitting SELECT event, theme:"),n),(i=d.current)==null||i.postMessage({event:"SELECT",data:n}),m(le({theme:n,displayName:c})),E.event(P.APP_CLIP_VIEW_SELECT,{parentComponent:r,theme:n})},e=()=>{var n,c;console.log("[".concat((n=d.current)==null?void 0:n.name,"] Emitting CLOSE event")),(c=d.current)==null||c.postMessage({event:"CLOSE"}),E.event(P.APP_CLIP_VIEW_CLOSED,{parentComponent:r})},l=()=>{m(re()),E.event(P.CLEAR_HISTORY,{})};return t.jsxs(se,{children:[g&&t.jsx(ae,{isIndeterminate:!0}),t.jsx(je,{defaultTheme:x,sessionId:h,onSubmit:C,onClose:e,onClearHistory:l})]})}export{Ie as default};
