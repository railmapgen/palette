System.register(["./chakra-legacy-S6iHddlO.js","./index-legacy-OvoKeKql.js","./react-legacy-KN5lAqTZ.js","./pantone-input-legacy-joxm_-M1.js"],(function(e,n){"use strict";var t,a,o,l,i,s,c,r,u,d,p,v,x,h,g,j,m,b,f,y,k;return{setters:[e=>{t=e.H,a=e.aq,o=e.ac,l=e.B,i=e.F},e=>{s=e.u,c=e.M,r=e.W,u=e.X,d=e.L},e=>{p=e.l,v=e.r},e=>{x=e.P,h=e.R,g=e.u,j=e.M,m=e.e,b=e.f,f=e.g,y=e.h,k=e.d}],execute:function(){function n(e){var n;const{lineDetail:a,onUpdate:o}=e,{t:l}=p(),{pantoneReady:i}=s((e=>e.app)),[u,d]=v.useState(!!a.pantone),g=[{label:l("Yes"),value:!0},{label:l("No"),value:!1}],j=[{label:l("Black"),value:c.black},{label:l("White"),value:c.white}],m=[{type:"input",label:l("Line code"),placeholder:"e.g. twl, gz1, sh1",value:a.id,onChange:e=>o({id:e}),validator:e=>""!==e&&!e.match(/[^a-z0-9]/)},{type:"input",label:l("Background colour"),variant:u?"text":"color",value:a.colour,onChange:e=>o({colour:e,pantone:void 0}),isDisabled:i&&u},{type:"custom",label:l("Use Pantone®"),component:t.jsx(r,{selections:g,defaultValue:u,onChange:e=>d(e)}),hidden:!i},{type:"custom",label:l("Pantone® code"),component:t.jsx(x,{value:null!==(n=a.pantone)&&void 0!==n?n:"",onChange:(e,n)=>o({pantone:e,colour:n})}),hidden:!i||!u},{type:"custom",label:l("Foreground colour"),component:t.jsx(r,{selections:j,defaultValue:a.fg,onChange:e=>o({fg:e})})}];return t.jsx(h,{fields:m})}e({L:function(e){const{lineDetail:l,editable:s,onUpdate:c,onMoveUp:r,onMoveDown:d,onCopy:x,onRemove:h,onNameUpdate:j,onLangSwitch:C,onNameRemove:R}=e,{t:z}=p(),D=g(),[L,U]=v.useState(!1),S=v.useMemo((()=>({bg:l.colour,m:-1,w:"calc(100% + var(--chakra-space-1) * 2)",px:2,"&, button":{color:l.fg},"& > div:first-of-type":{overflow:"hidden",textWrap:"nowrap",textOverflow:"ellipsis"},"& > div:nth-of-type(2)":{ml:"auto"}})),[l.colour,l.fg]),B=D(Object.fromEntries(l.nameEntity));return t.jsxs(u,{direction:"column",sx:{pb:0},children:[t.jsxs(u,{sx:S,children:[t.jsx("div",{children:B}),s&&t.jsxs(a,{spacing:.5,children:[t.jsx(o,{size:"xs",variant:"ghost","aria-label":z("Move up"),title:z("Move up"),icon:t.jsx(b,{}),onClick:r}),t.jsx(o,{size:"xs",variant:"ghost","aria-label":z("Move down"),title:z("Move down"),icon:t.jsx(f,{}),onClick:d}),t.jsx(o,{size:"xs",variant:"ghost","aria-label":z("Edit"),title:z("Edit"),icon:t.jsx(y,{}),onClick:()=>U((e=>!e))}),t.jsx(o,{size:"xs",variant:"ghost","aria-label":z("Duplicate"),title:z("Duplicate"),icon:t.jsx(k,{}),onClick:x}),t.jsx(o,{size:"xs",variant:"ghost","aria-label":z("Remove"),title:z("Remove"),icon:t.jsx(m,{}),onClick:h})]})]}),L&&t.jsxs(i,{direction:"column",position:"relative",my:1,children:[t.jsx(n,{lineDetail:l,onUpdate:e=>null==c?void 0:c(e)}),t.jsx(w,{entries:l.nameEntity,onUpdate:(e,n)=>null==j?void 0:j(e,n),onLangSwitch:(e,n)=>null==C?void 0:C(e,n),onRemove:e=>null==R?void 0:R(e)})]}),!s&&t.jsx(i,{direction:"column",my:1,children:t.jsx(M,{lineDetail:l})})]})},M:function(e){return t.jsx(u,{direction:"column",children:t.jsx(w,{...e})})}});const C={"& > div:first-of-type":{flex:1}},w=e=>{var n;const{onUpdate:i,onLangSwitch:s,onRemove:c}=e,r=null!==(n=e.entries)&&void 0!==n?n:[],{t:u}=p(),v=g(),x=(e,n)=>[{type:"select",label:u("Language"),value:e,options:Object.entries(d).reduce(((e,n)=>({...e,[n[0]]:v(n[1])})),{}),disabledOptions:r.filter((n=>n[0]!==e)).map((e=>e[0])),onChange:n=>s(e,n)},{type:"input",label:u("Name"),value:n,onChange:n=>i(e,n),validator:e=>!!e}],b=()=>{const e=Object.keys(d).filter((e=>!r.find((n=>n[0]===e))))[0];i(e,"")};return t.jsx(t.Fragment,{children:r.map((([e,n],i,s)=>t.jsxs(a,{sx:C,"data-testid":"entry-card-stack-"+e,children:[t.jsx(h,{fields:x(e,n),noLabel:i>0}),i===s.length-1?t.jsx(o,{size:"sm",variant:"ghost","aria-label":u("Add a name in another language"),title:u("Add a name in another language"),onClick:b,icon:t.jsx(j,{})}):t.jsx(l,{minW:8}),s.length>1&&t.jsx(o,{size:"sm",variant:"ghost","aria-label":u("Remove this name"),title:u("Remove this name"),onClick:()=>c(e),icon:t.jsx(m,{})})]},i)))})};function M(e){const{lineDetail:n}=e,{t:a}=p(),o=[{type:"output",label:a("Line code"),value:n.id},{type:"output",label:a("Background colour"),value:n.colour},{type:"output",label:a("Pantone® code"),value:n.pantone,hidden:!n.pantone},{type:"output",label:a("Foreground colour"),value:n.fg===c.black?a("Black"):a("White")}];return t.jsx(h,{fields:o})}}}}));
