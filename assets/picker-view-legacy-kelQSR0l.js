System.register(["./chakra-legacy-0hWQw7Oq.js","./index-legacy-q-mJBn-s.js","./react-legacy-KN5lAqTZ.js","./use-palette-legacy-GPGuqvqV.js","./index.esm-legacy-EE4yblBw.js"],(function(e,n){"use strict";var t,o,a,l,s,i,r,c,d,u,p,m,g,h,f,v,x,C,j,y,b,E,S,A,I,L,P,_;return{setters:[e=>{t=e.j,o=e.F,a=e._,l=e.f,s=e.a7,i=e.a8,r=e.G,c=e.a1,d=e.$},e=>{u=e.u,p=e.Y,m=e.M,g=e.a,h=e.W,f=e.m,v=e.b,x=e.r,C=e.E,j=e.g,y=e.h,b=e.Z,E=e._},e=>{S=e.l,A=e.r,I=e.p},e=>{L=e.u},e=>{P=e.R,_=e.i}],execute:function(){e("default",(function(){const[e]=I(),n=e.get("parentId"),o=e.get("parentComponent"),a=v(),{isDataLoading:l}=u((e=>e.app)),[s,i]=A.useState(),[r,c]=A.useState(),d=A.useRef();return A.useEffect((()=>{const e=new BroadcastChannel(O+n);return d.current=e,x.event(C.APP_CLIP_VIEW_OPENED,{parentComponent:o}),e.onmessage=n=>{const{event:t,data:o}=n.data;console.log(`[${e.name}] Received event from parent component:`,t),"OPEN"===t&&(i(crypto.randomUUID()),c(o))},console.log(`[${e.name}] App clip connection established, parentComponent=${o}`),e.postMessage({event:"LOADED"}),()=>{e.close()}}),[]),t.jsxs(j,{children:[l&&t.jsx(y,{isIndeterminate:!0}),t.jsx(F,{defaultTheme:r,sessionId:s,onSubmit:(e,n)=>{var t,l;console.log(`[${null===(t=d.current)||void 0===t?void 0:t.name}] Emitting SELECT event, theme:`,e),null===(l=d.current)||void 0===l||l.postMessage({event:"SELECT",data:e}),a(b({theme:e,displayName:n})),x.event(C.APP_CLIP_VIEW_SELECT,{parentComponent:o,theme:e})},onClose:()=>{var e,n;console.log(`[${null===(e=d.current)||void 0===e?void 0:e.name}] Emitting CLOSE event`),null===(n=d.current)||void 0===n||n.postMessage({event:"CLOSE"}),x.event(C.APP_CLIP_VIEW_CLOSED,{parentComponent:o})},onClearHistory:()=>{a(E()),x.event(C.CLEAR_HISTORY,{})}})]})}));const n=e=>{const n=(e=>{const n=e.toUpperCase().split("");return 2===n.length?n.map((e=>((e.codePointAt(0)||0)+127397).toString(16).toUpperCase())):5===n.length?["1F3F4",...n.map((e=>((e.codePointAt(0)||0)+917536).toString(16).toUpperCase())),"E007F"]:[]})(e);return String.fromCodePoint(...n.map((e=>parseInt(e,16))))};function V(e){const{defaultValueId:o,onChange:a}=e,{i18n:l}=S(),{cityList:s}=u((e=>e.app)),i=o?s.find((e=>e.id===o)):void 0,r=e=>{var n,t;return null!==(n=null!==(t=l.languages.map((n=>e.name[n])).find((e=>void 0!==e)))&&void 0!==t?t:e.name.en)&&void 0!==n?n:""},c=s.slice().sort(((e,n)=>"other"===e.id?1:"other"===n.id?-1:r(e).localeCompare(r(n),l.languages[0])));return t.jsx(p,{data:c,displayValue:r,displayHandler:e=>{const o="TW"===e.country&&["zh-Hans","zh-CN"].includes(l.languages[0]),a=l.languages.map((n=>e.name[n])).find((e=>void 0!==e));return t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"flag-emoji",children:o?"🏴":n(e.country)}),t.jsx("span",{children:a})]})},predicate:(e,n)=>Object.values(e.name).some((e=>e.toLowerCase().includes(n.toLowerCase()))),defaultValue:i,onChange:e=>null==a?void 0:a(e.id)})}function w(e){const{city:n,defaultValueId:o,onChange:a}=e,{i18n:l}=S(),s=L(n),i=o?s.find((e=>e.id===o)):void 0,r=e=>{var n;return null!==(n=l.languages.map((n=>e.name[n])).find((e=>void 0!==e)))&&void 0!==n?n:""};return t.jsx(p,{data:s,displayValue:r,displayHandler:e=>{const n=r(e);return t.jsx(g,{name:n,fg:e.fg||m.white,bg:e.colour})},predicate:(e,n)=>Object.values(e.name).some((e=>e.includes(n))),defaultValue:i,onChange:e=>null==a?void 0:a(e.id,e.colour,e.fg||m.white)})}const k=e=>!!e.match(/^#[0-9a-fA-F]{6}$/),D={flexDirection:"column",flex:1,mx:2,overflowX:"hidden",overflowY:"scroll","& .chakra-badge":{fontSize:"1em",width:"fit-content",alignSelf:"center",m:1},"& > section:first-of-type":{p:1},"& > section:last-of-type":{w:"100%","& > div:last-of-type":{px:2},"& .rmg-section__header button":{ml:"auto"}}};function F(e){const{defaultTheme:n,sessionId:p,onSubmit:v,onClose:x,onClearHistory:C}=e,{t:j}=S(),{recentlyUsed:y}=u((e=>e.app)),[b,E]=A.useState(null==n?void 0:n[0]),[I,L]=A.useState(null==n?void 0:n[1]),[F,O]=A.useState((null==n?void 0:n[2])||"#AAAAAA"),[$,z]=A.useState((null==n?void 0:n[3])||m.white),[T,H]=A.useState("color");A.useEffect((()=>{p&&n&&(E(n[0]),L(n[1]),O(n[2]),z(n[3]))}),[p,null==n?void 0:n.toString()]);const N=[{label:j("Select"),value:"color"},{label:j("Key in"),value:"text"}],R=[{label:j("Black"),value:m.black},{label:j("White"),value:m.white}],U=[{type:"custom",label:j("City"),component:t.jsx(V,{defaultValueId:b,onChange:e=>{E(e),L(void 0),O("#AAAAAA"),z(m.white)}})},{type:"custom",label:j("Line"),component:t.jsx(w,{city:b,defaultValueId:I,onChange:(e,n,t)=>{L(e),O(n),z(t)}})}],W=[{type:"custom",label:j("Input mode"),component:t.jsx(h,{selections:N,defaultValue:T,onChange:e=>H(e)})},{type:"input",label:j("Background colour"),variant:T,value:F,placeholder:"#F3D03E",validator:k,onChange:e=>{E("other"),L("other"),O(e)}},{type:"custom",label:j("Foreground colour"),component:t.jsx(h,{selections:R,defaultValue:$,onChange:e=>{E("other"),L("other"),z(e)}})}],M=b&&I&&F&&$&&k(F);return t.jsxs(t.Fragment,{children:[t.jsxs(o,{sx:D,children:[t.jsx(g,{name:j("Example"),fg:$,bg:F}),t.jsxs("section",{children:[t.jsx(P,{fields:U}),t.jsx(P,{fields:W})]}),t.jsxs("section",{children:[t.jsxs(f,{children:[t.jsx(a,{as:"h5",size:"xs",children:j("Recently used")}),t.jsx(l,{variant:"ghost",size:"xs",onClick:C,children:j("Clear")})]}),t.jsx(s,{children:y.map((({theme:e,displayName:n})=>t.jsx(i,{children:t.jsx(r,{size:"xs","aria-label":j("Apply"),title:n,mt:"0.45px",color:e[3],bg:e[2],icon:t.jsx(_,{}),onClick:()=>(e=>{E(e[0]),L(e[1]),O(e[2]),z(e[3])})(e)})},e.join("-"))))})]})]}),t.jsx(c,{}),t.jsxs(d,{p:2,justifyContent:"flex-end",children:[t.jsx(l,{size:"sm",onClick:x,children:j("Cancel")}),t.jsx(l,{size:"sm",colorScheme:"primary",onClick:()=>{M&&(null==v||v([b,I,F,$],`${b} - ${I}`))},isDisabled:!M,children:j("Confirm")})]})]})}const O="rmg-palette-bridge--"}}}));
