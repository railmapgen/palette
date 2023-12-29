System.register(["./chakra-legacy-0hWQw7Oq.js","./react-legacy-KN5lAqTZ.js","./index-legacy-sRbwun-D.js"],(function(t,a){"use strict";var e,n,r,l,i,o,s,c,h,u,d,g,v;return{setters:[t=>{e=t.h,n=t.j,r=t.O,l=t.F,i=t.a9,o=t.aa},t=>{s=t.r,c=t.a},t=>{h=t.a0,u=t.a1,d=t.a2,g=t.Q,v=t.a3}],execute:function(){t({M:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)},P:function(t){const{value:a,onChange:e}=t,[r,l]=s.useState(a),[i,o]=s.useState(!1),h=s.useRef(new AbortController);return s.useEffect((()=>()=>{var t;null===(t=h.current)||void 0===t||t.abort()}),[]),s.useEffect((()=>{l(a)}),[a]),n.jsx(v,{defaultValue:r,onDebouncedChange:async t=>{h.current.abort(),h.current=new AbortController,o(!0);try{const a=await f(t,h.current.signal);e(t,a),l(t)}catch(n){console.warn(`[rmg-palette] Unable to find Pantone colour ${t}`),c.flushSync((()=>{l(t)})),l(a)}finally{o(!1)}},delay:1500,isDisabled:i})},R:function(t){var e=t.fields,r=t.noLabel,o=t.minW;return n.jsx(l,{wrap:"wrap",children:e.map((function(t,e){if(t.hidden)return n.jsx(s.Fragment,{},e);var l=t.minW||o,c="full"===l;return n.jsx(h,{className:c?"mw-full":"",label:t.label,flex:c?void 0:1,minW:c?void 0:l,noLabel:r,oneLine:t.oneLine,children:function(t){switch(t.type){case"input":return n.jsx(v,{placeholder:t.placeholder,defaultValue:t.value,type:t.variant,validator:t.validator,onDebouncedChange:t.onChange,delay:t.debouncedDelay,optionList:t.optionList,isDisabled:t.isDisabled});case"output":return n.jsx(a,{noWrap:!0,children:t.value});case"textarea":return n.jsx(g,{placeholder:t.placeholder,defaultValue:t.value,onDebouncedChange:t.onChange,isDisabled:t.isDisabled});case"slider":return n.jsx(d,{defaultValue:t.value,min:t.min,max:t.max,step:t.step,onThrottledChange:t.onChange,leftIcon:t.leftIcon,rightIcon:t.rightIcon,isDisabled:t.isDisabled});case"select":return n.jsx(u,{defaultValue:t.value,onChange:function(a){var e,n=a.target.value;return null===(e=t.onChange)||void 0===e?void 0:e.call(t,"number"==typeof t.value?Number(n):n.toString())},options:t.options,disabledOptions:t.disabledOptions,isInvalid:t.isInvalid,isDisabled:t.isDisabled});case"switch":return n.jsx(i,{isChecked:t.isChecked,isDisabled:t.isDisabled,onChange:function(a){var e,n=a.target.checked;return null===(e=t.onChange)||void 0===e?void 0:e.call(t,n)}});case"custom":return t.component;default:return n.jsx("div",{})}}(t)},e)}))})},a:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(t)},b:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(t)},c:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(t)},d:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(t)},e:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)},f:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}}]})(t)},g:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}]})(t)},h:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(t)},i:function(t){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}}]})(t)}});var a=function(t){var a=t.children,l=t.noWrap,i=e("RmgOutput",{noWrap:l});return n.jsx(r.output,{sx:i,children:a})};const p=t=>`{ getColor(code:"${t}") { code, rgb { r g b }, hex, cmyk { c m y k } } }`,f=t("j",(async(t,a)=>{const e=await fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:p(t)}),signal:a});return"#"+(await e.json()).data.getColor.hex}))}}}));
