!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,i,u=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(s){c=!0,o=s}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./chakra-legacy-bcf12f6c.js","./index-legacy-3187f7ee.js","./react-legacy-2ad49228.js","./use-palette-legacy-833395c8.js","./index.esm-legacy-8174c88a.js"],(function(t,r){"use strict";var o,a,i,u,l,c,s,d,f,m,p,v,h,g,y,j,C,x,b,S,A,E,I,w,P,V;return{setters:[function(e){o=e.j,a=e.$,i=e.Z,u=e.a5,l=e.a6,c=e.H,s=e.a7,d=e._,f=e.f},function(e){m=e.e,p=e.U,v=e.M,h=e.b,g=e.a,y=e.z,j=e.d,C=e.r,x=e.E,b=e.f,S=e.V},function(e){A=e.u,E=e.r,I=e.o},function(e){w=e.u},function(e){P=e.R,V=e.i}],execute:function(){t("default",(function(){var n=e(I(),1)[0],t=n.get("parentId"),r=n.get("parentComponent"),a=j(),i=e(E.useState(),2),u=i[0],l=i[1],c=e(E.useState(),2),s=c[0],d=c[1],f=E.useRef();E.useEffect((function(){var e=new BroadcastChannel(F+t);f.current=e,C.event(x.APP_CLIP_VIEW_OPENED,{parentComponent:r}),e.onmessage=function(n){var t=n.data,r=t.event,o=t.data;console.log("[".concat(e.name,"] Received event from parent component:"),r),"OPEN"===r&&(l(crypto.randomUUID()),d(o))},console.log("[".concat(e.name,"] App clip connection established, parentComponent=").concat(r));var n=document.createElement("style");return n.textContent=".rmg-window__header{margin-left: unset;}",document.head.appendChild(n),e.postMessage({event:"LOADED"}),function(){e.close(),document.head.removeChild(n)}}),[]);return o.jsx(b,{children:o.jsx(z,{defaultTheme:s,sessionId:u,onSubmit:function(e,n){var t,o;console.log("[".concat(null===(t=f.current)||void 0===t?void 0:t.name,"] Emitting SELECT event, theme:"),e),null===(o=f.current)||void 0===o||o.postMessage({event:"SELECT",data:e}),a(S({theme:e,displayName:n})),C.event(x.APP_CLIP_VIEW_SELECT,{parentComponent:r,theme:e})},onClose:function(){var e,n;console.log("[".concat(null===(e=f.current)||void 0===e?void 0:e.name,"] Emitting CLOSE event")),null===(n=f.current)||void 0===n||n.postMessage({event:"CLOSE"}),C.event(x.APP_CLIP_VIEW_CLOSED,{parentComponent:r})}})})}));var r=function(e){var t=function(e){var t=e.toUpperCase().split("");return 2===t.length?t.map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):5===t.length?["1F3F4"].concat(n(t.map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()}))),["E007F"]):[]}(e);return String.fromCodePoint.apply(String,n(t.map((function(e){return parseInt(e,16)}))))};function L(e){var n=e.defaultValueId,t=e.onChange,a=A().i18n,i=n?m.find((function(e){return e.id===n})):void 0,u=function(e){var n,t;return null!==(n=null!==(t=a.languages.map((function(n){return e.name[n]})).find((function(e){return void 0!==e})))&&void 0!==t?t:e.name.en)&&void 0!==n?n:""},l=m.slice().sort((function(e,n){return"other"===e.id?1:"other"===n.id?-1:u(e).localeCompare(u(n),a.languages[0])}));return o.jsx(p,{data:l,displayValue:u,displayHandler:function(e){var n="TW"===e.country&&["zh-Hans","zh-CN"].includes(a.languages[0]),t=a.languages.map((function(n){return e.name[n]})).find((function(e){return void 0!==e}));return o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"flag-emoji",children:n?"🏴":r(e.country)}),o.jsx("span",{children:t})]})},predicate:function(e,n){return Object.values(e.name).some((function(e){return e.toLowerCase().includes(n.toLowerCase())}))},defaultValue:i,onChange:function(e){return null==t?void 0:t(e.id)}})}function O(e){var n=e.city,t=e.defaultValueId,r=e.onChange,a=A().i18n,i=w(n),u=t?i.find((function(e){return e.id===t})):void 0,l=function(e){var n;return null!==(n=a.languages.map((function(n){return e.name[n]})).find((function(e){return void 0!==e})))&&void 0!==n?n:""};return o.jsx(p,{data:i,displayValue:l,displayHandler:function(e){var n=l(e);return o.jsx(h,{name:n,fg:e.fg||v.white,bg:e.colour})},predicate:function(e,n){return Object.values(e.name).some((function(e){return e.includes(n)}))},defaultValue:u,onChange:function(e){return null==r?void 0:r(e.id,e.colour,e.fg||v.white)}})}var _=function(e){return!!e.match(/^#[0-9a-fA-F]{6}$/)},k={flex:1,mx:2,"& .chakra-badge":{fontSize:"1em"},"& > .chakra-stack":{w:"100%",p:2,"& > div":{w:"100%"}},"& h5":{alignSelf:"flex-start"}};function z(n){var t=n.defaultTheme,r=n.sessionId,m=n.onSubmit,p=n.onClose,j=A().t,C=g((function(e){return e.app})).recentlyUsed,x=e(E.useState(null==t?void 0:t[0]),2),b=x[0],S=x[1],I=e(E.useState(null==t?void 0:t[1]),2),w=I[0],z=I[1],F=e(E.useState((null==t?void 0:t[2])||"#AAAAAA"),2),T=F[0],U=F[1],D=e(E.useState((null==t?void 0:t[3])||v.white),2),N=D[0],M=D[1],W=e(E.useState("color"),2),H=W[0],R=W[1];E.useEffect((function(){r&&t&&(S(t[0]),z(t[1]),U(t[2]),M(t[3]))}),[r,null==t?void 0:t.toString()]);var B=[{label:j("Select"),value:"color"},{label:j("Key in"),value:"text"}],$=[{label:j("Black"),value:v.black},{label:j("White"),value:v.white}],K=[{type:"custom",label:j("City"),component:o.jsx(L,{defaultValueId:b,onChange:function(e){S(e),z(void 0),U("#AAAAAA"),M(v.white)}})},{type:"custom",label:j("Line"),component:o.jsx(O,{city:b,defaultValueId:w,onChange:function(e,n,t){z(e),U(n),M(t)}})}],Z=[{type:"custom",label:j("Input mode"),component:o.jsx(y,{selections:B,defaultValue:H,onChange:function(e){return R(e)}})},{type:"input",label:j("Background colour"),variant:H,value:T,placeholder:"#F3D03E",validator:_,onChange:function(e){S("other"),z("other"),U(e)}},{type:"custom",label:j("Foreground colour"),component:o.jsx(y,{selections:$,defaultValue:N,onChange:function(e){S("other"),z("other"),M(e)}})}],q=b&&w&&T&&N&&_(T);return o.jsxs(o.Fragment,{children:[o.jsxs(a,{sx:k,children:[o.jsx(h,{name:j("Example"),fg:N,bg:T}),o.jsxs(a,{children:[o.jsx(P,{fields:K}),o.jsx(P,{fields:Z})]}),o.jsxs(a,{children:[o.jsx(i,{as:"h5",size:"xs",children:j("Recently used")}),o.jsx(u,{children:C.map((function(e){var n=e.theme,t=e.displayName;return o.jsx(l,{children:o.jsx(c,{size:"xs","aria-label":j("Apply"),title:t,mt:"0.45px",color:n[3],bg:n[2],icon:o.jsx(V,{}),onClick:function(){return function(e){S(e[0]),z(e[1]),U(e[2]),M(e[3])}(n)}})},n.join("-"))}))})]})]}),o.jsx(s,{}),o.jsxs(d,{p:2,justifyContent:"flex-end",children:[o.jsx(f,{size:"sm",onClick:p,children:j("Cancel")}),o.jsx(f,{size:"sm",colorScheme:"primary",onClick:function(){if(q){var e="".concat(b," - ").concat(w);null==m||m([b,w,T,N],e)}},isDisabled:!q,children:j("Confirm")})]})]})}var F="rmg-palette-bridge--"}}}))}();
