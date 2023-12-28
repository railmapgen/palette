import{j as n,F as B,_ as N,f as b,a7 as U,a8 as W,G as X,a1 as G,$ as Y}from"./chakra-gKOpfgMF.js";import{a as A,Z as V,M as y,b as _,X as L,n as K,c as Z,r as v,E,h as q,i as J,_ as Q,$ as T}from"./index-yXsYoQo9.js";import{u as I,r as C,n as ee}from"./react-7VcayjvX.js";import{u as te}from"./use-palette-cs62f2sd.js";import{R,i as ne}from"./index.esm-cTRquryR.js";const se=u=>{const t=u.toUpperCase().split("");return t.length===2?t.map(l=>((l.codePointAt(0)||0)+127397).toString(16).toUpperCase()):t.length===5?["1F3F4",...t.map(l=>((l.codePointAt(0)||0)+917536).toString(16).toUpperCase()),"E007F"]:[]},oe=u=>{const t=se(u);return String.fromCodePoint(...t.map(l=>parseInt(l,16)))};function ae(u){const{defaultValueId:t,onChange:l}=u,{i18n:i}=I(),{cityList:f}=A(e=>e.app),h=t?f.find(e=>e.id===t):void 0,a=e=>{var o,c;return(c=(o=i.languages.map(s=>e.name[s]).find(s=>s!==void 0))!=null?o:e.name.en)!=null?c:""},x=e=>{const o=e.country==="TW"&&["zh-Hans","zh-CN"].includes(i.languages[0]),c=i.languages.map(s=>e.name[s]).find(s=>s!==void 0);return n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"flag-emoji",children:o?"🏴":oe(e.country)}),n.jsx("span",{children:c})]})},p=(e,o)=>Object.values(e.name).some(c=>c.toLowerCase().includes(o.toLowerCase())),d=f.slice().sort((e,o)=>e.id==="other"?1:o.id==="other"?-1:a(e).localeCompare(a(o),i.languages[0]));return n.jsx(V,{data:d,displayValue:a,displayHandler:x,predicate:p,defaultValue:h,onChange:e=>l==null?void 0:l(e.id)})}function re(u){const{city:t,defaultValueId:l,onChange:i}=u,{i18n:f}=I(),h=te(t),a=l?h.find(e=>e.id===l):void 0,x=e=>{var o;return(o=f.languages.map(c=>e.name[c]).find(c=>c!==void 0))!=null?o:""},p=e=>{const o=x(e);return n.jsx(_,{name:o,fg:e.fg||y.white,bg:e.colour})},d=(e,o)=>Object.values(e.name).some(c=>c.includes(o));return n.jsx(V,{data:h,displayValue:x,displayHandler:p,predicate:d,defaultValue:a,onChange:e=>i==null?void 0:i(e.id,e.colour,e.fg||y.white)})}const F=u=>!!u.match(/^#[0-9a-fA-F]{6}$/),le={flexDirection:"column",flex:1,mx:2,overflowX:"hidden",overflowY:"scroll","& .chakra-badge":{fontSize:"1em",width:"fit-content",alignSelf:"center",m:1},"& > section:first-of-type":{p:1},"& > section:last-of-type":{w:"100%","& > div:last-of-type":{px:2},"& .rmg-section__header button":{ml:"auto"}}};function ce(u){const{defaultTheme:t,sessionId:l,onSubmit:i,onClose:f,onClearHistory:h}=u,{t:a}=I(),{recentlyUsed:x}=A(r=>r.app),[p,d]=C.useState(t==null?void 0:t[0]),[e,o]=C.useState(t==null?void 0:t[1]),[c,s]=C.useState((t==null?void 0:t[2])||"#AAAAAA"),[m,g]=C.useState((t==null?void 0:t[3])||y.white),[j,w]=C.useState("color");C.useEffect(()=>{l&&t&&(d(t[0]),o(t[1]),s(t[2]),g(t[3]))},[l,t==null?void 0:t.toString()]);const k=[{label:a("Select"),value:"color"},{label:a("Key in"),value:"text"}],D=[{label:a("Black"),value:y.black},{label:a("White"),value:y.white}],H=[{type:"custom",label:a("City"),component:n.jsx(ae,{defaultValueId:p,onChange:r=>{d(r),o(void 0),s("#AAAAAA"),g(y.white)}})},{type:"custom",label:a("Line"),component:n.jsx(re,{city:p,defaultValueId:e,onChange:(r,S,z)=>{o(r),s(S),g(z)}})}],O=[{type:"custom",label:a("Input mode"),component:n.jsx(L,{selections:k,defaultValue:j,onChange:r=>w(r)})},{type:"input",label:a("Background colour"),variant:j,value:c,placeholder:"#F3D03E",validator:F,onChange:r=>{d("other"),o("other"),s(r)}},{type:"custom",label:a("Foreground colour"),component:n.jsx(L,{selections:D,defaultValue:m,onChange:r=>{d("other"),o("other"),g(r)}})}],P=p&&e&&c&&m&&F(c),M=()=>{if(P){const r="".concat(p," - ").concat(e);i==null||i([p,e,c,m],r)}},$=r=>{d(r[0]),o(r[1]),s(r[2]),g(r[3])};return n.jsxs(n.Fragment,{children:[n.jsxs(B,{sx:le,children:[n.jsx(_,{name:a("Example"),fg:m,bg:c}),n.jsxs("section",{children:[n.jsx(R,{fields:H}),n.jsx(R,{fields:O})]}),n.jsxs("section",{children:[n.jsxs(K,{children:[n.jsx(N,{as:"h5",size:"xs",children:a("Recently used")}),n.jsx(b,{variant:"ghost",size:"xs",onClick:h,children:a("Clear")})]}),n.jsx(U,{children:x.map(({theme:r,displayName:S})=>n.jsx(W,{children:n.jsx(X,{size:"xs","aria-label":a("Apply"),title:S,mt:"0.45px",color:r[3],bg:r[2],icon:n.jsx(ne,{}),onClick:()=>$(r)})},r.join("-")))})]})]}),n.jsx(G,{}),n.jsxs(Y,{p:2,justifyContent:"flex-end",children:[n.jsx(b,{size:"sm",onClick:f,children:a("Cancel")}),n.jsx(b,{size:"sm",colorScheme:"primary",onClick:M,isDisabled:!P,children:a("Confirm")})]})]})}const ie="rmg-palette-bridge--";function Ce(){const[u]=ee(),t=u.get("parentId"),l=u.get("parentComponent"),i=Z(),{isDataLoading:f}=A(s=>s.app),[h,a]=C.useState(),[x,p]=C.useState(),d=C.useRef();C.useEffect(()=>{const s=new BroadcastChannel(ie+t);return d.current=s,v.event(E.APP_CLIP_VIEW_OPENED,{parentComponent:l}),s.onmessage=m=>{const{event:g,data:j}=m.data;console.log("[".concat(s.name,"] Received event from parent component:"),g),g==="OPEN"&&(a(crypto.randomUUID()),p(j))},console.log("[".concat(s.name,"] App clip connection established, parentComponent=").concat(l)),s.postMessage({event:"LOADED"}),()=>{s.close()}},[]);const e=(s,m)=>{var g,j;console.log("[".concat((g=d.current)==null?void 0:g.name,"] Emitting SELECT event, theme:"),s),(j=d.current)==null||j.postMessage({event:"SELECT",data:s}),i(Q({theme:s,displayName:m})),v.event(E.APP_CLIP_VIEW_SELECT,{parentComponent:l,theme:s})},o=()=>{var s,m;console.log("[".concat((s=d.current)==null?void 0:s.name,"] Emitting CLOSE event")),(m=d.current)==null||m.postMessage({event:"CLOSE"}),v.event(E.APP_CLIP_VIEW_CLOSED,{parentComponent:l})},c=()=>{i(T()),v.event(E.CLEAR_HISTORY,{})};return n.jsxs(q,{children:[f&&n.jsx(J,{isIndeterminate:!0}),n.jsx(ce,{defaultTheme:x,sessionId:h,onSubmit:e,onClose:o,onClearHistory:c})]})}export{Ce as default};
