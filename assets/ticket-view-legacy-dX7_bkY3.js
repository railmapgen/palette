System.register(["./chakra-legacy-vtnVmaLc.js","./react-legacy-l6OxjFzU.js","./index-legacy-4zKMc443.js","./index.esm-legacy-c4exRJL9.js","./line-detail-card-legacy-xdkRPuS1.js"],(function(e,n){"use strict";var t,s,i,r,o,a,l,c,d,u,h,x,j,g,p,m,y,f,v,C,b,w,k,S,L,E,R,O,P,I,z,N,U,A,F,M,D,J,T,q,$,B,G,K,V,W,_,H,Y,Z,Q,X,ee,ne,te,se,ie,re,oe,ae,le,ce,de,ue,he,xe,je,ge,pe,me,ye,fe,ve,Ce;return{setters:[e=>{t=e.j,s=e._,i=e.O,r=e.s,o=e.a0,a=e.f,l=e.r,c=e.a2,d=e.e,u=e.t,h=e.$,x=e.v,j=e.a3,g=e.w,p=e.a4,m=e.a5,y=e.M,f=e.a6,v=e.p,C=e.q,b=e.F},e=>{w=e.u,k=e.r,S=e.m},e=>{L=e.c,E=e.a,R=e.L,O=e.j,P=e.k,I=e.l,z=e.m,N=e.n,U=e.o,A=e.p,F=e.q,M=e.t,D=e.v,J=e.w,T=e.x,q=e.y,$=e.z,B=e.A,G=e.B,K=e.C,V=e.D,W=e.F,_=e.G,H=e.H,Y=e.I,Z=e.J,Q=e.K,X=e.N,ee=e.O,ne=e.P,te=e.Q,se=e.S,ie=e.T,re=e.U,oe=e.r,ae=e.V,le=e.W,ce=e.h,de=e.i,ue=e.E},e=>{he=e.R,xe=e.M,je=e.a,ge=e.b,pe=e.c,me=e.d},e=>{ye=e.u,fe=e.M,ve=e.g,Ce=e.L}],execute:function(){function n(){const{t:e,i18n:n}=w(),r=ye(),o=L(),{countryList:a}=E((e=>e.app)),{country:l,newCountry:c,countryName:d,newCountryLang:u}=E((e=>e.ticket)),h={...a.map((e=>[e.id,r(e.name)])).sort(((e,t)=>e[1].localeCompare(t[1],n.languages[0]))).reduce(((e,n)=>"UN"===n[0]?e:{...e,[n[0]]:n[1]}),{"":e("Please select...")}),new:e("Add a country/region...")},x=Object.entries(R).reduce(((e,n)=>({...e,[n[0]]:r(n[1])})),{}),j=[{type:"select",label:e("Country/Region"),value:l,options:h,disabledOptions:[""],onChange:e=>o(O(e))},{type:"input",label:e("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:c,validator:e=>""!==e&&!!e.match(/^[A-Z]{2}$|^GB[A-Z]{3}$/),onChange:e=>o(P(e)),hidden:"new"!==l},{type:"select",label:e("Official language"),value:u,options:x,onChange:e=>o(I(e||void 0)),hidden:"new"!==l}];return t.jsxs(z,{children:[t.jsx(N,{children:t.jsx(s,{as:"h5",size:"sm",children:e("Country/Region")})}),t.jsxs(i.div,{px:1,children:[t.jsx(he,{fields:j}),"new"===l&&t.jsx(fe,{entries:d,onUpdate:(e,n)=>o(U({lang:e,name:n})),onLangSwitch:(e,n)=>o(A({prevLang:e,nextLang:n})),onRemove:e=>o(F(e))})]})]})}function be(){const{t:e,i18n:n}=w(),r=L(),o=ye(),{cityList:a}=E((e=>e.app)),{country:l,city:c,newCity:d,cityName:u}=E((e=>e.ticket)),h={...a.filter((e=>e.country===l)).map((e=>[e.id,o(e.name)])).sort(((e,t)=>e[1].localeCompare(t[1],n.languages[0]))).reduce(((e,n)=>({...e,[n[0]]:n[1]})),{"":e("Please select...")}),new:e("Add a city")+"..."},x=[{type:"select",label:e("City"),value:c,options:h,disabledOptions:[""],onChange:e=>(async e=>{if("new"===e)return void r(q("new"));const n=await $(e,a);r(n?B(n):G())})(e)},{type:"input",label:e("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:d,onChange:e=>r(M(e)),validator:e=>""!==e&&!e.match(/[^a-z]/),hidden:"new"!==c}];return t.jsxs(z,{children:[t.jsx(N,{children:t.jsx(s,{as:"h5",size:"sm",children:e("City")})}),t.jsxs(i.div,{px:1,children:[t.jsx(he,{fields:x}),"new"===c&&t.jsx(fe,{entries:u,onUpdate:(e,n)=>r(D({lang:e,name:n})),onLangSwitch:(e,n)=>r(J({prevLang:e,nextLang:n})),onRemove:e=>r(T(e))})]})]})}function we(){const{t:e}=w(),n=L(),{pantoneReady:s}=E((e=>e.app));return k.useEffect((()=>{const e=new AbortController;return ve("130 C",e.signal).then((e=>n(K(!!e)))).catch((()=>n(K(!1)))),()=>{e.abort()}}),[]),t.jsx(r,{as:"i",fontSize:"xs",children:void 0===s?e("Checking Pantone service availability..."):s?e("Pantone service is ready")+" ✅":e("Pantone service is not available")+" ⚠️"})}function ke(){const{t:e}=w(),n=L(),i=E((e=>e.ticket.lines));return t.jsxs(z,{children:[t.jsxs(N,{children:[t.jsx(s,{as:"h5",size:"sm",mr:"auto",children:e("Lines")}),t.jsx(we,{})]}),t.jsxs(o,{spacing:1,px:1,children:[Object.entries(i).map((([e,s])=>t.jsx(Ce,{lineDetail:s,editable:!0,onUpdate:t=>n(V({entryId:e,updates:t})),onMoveUp:()=>n(W(e)),onMoveDown:()=>n(_(e)),onCopy:()=>n(H(e)),onRemove:()=>n(Y(e)),onNameUpdate:(t,s)=>n(Z({entryId:e,lang:t,name:s})),onLangSwitch:(t,s)=>n(Q({entryId:e,prevLang:t,nextLang:s})),onNameRemove:t=>n(X({entryId:e,lang:t}))},e))),t.jsx(a,{size:"xs",variant:"ghost",leftIcon:t.jsx(xe,{}),ml:"auto !important",onClick:()=>n(ee()),children:e("Add a line")})]})]})}function Se(e){const{countryErrors:n,cityErrors:i,lineErrors:o,onIgnore:x,onClose:j}=e,{t:g}=w(),p=ye();return t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(r,{children:g("Your inputs contain the following errors. Please consider fixing it before submitting.")}),n.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{as:"h5",size:"sm",my:2,children:g("Country/Region")}),t.jsx(c,{"aria-label":"List of country errors",children:n.map(((e,n)=>t.jsx(d,{children:p(ne[e])},n)))})]}),i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{as:"h5",size:"sm",my:2,children:g("City")}),t.jsx(c,{"aria-label":"List of city errors",children:i.map(((e,n)=>t.jsx(d,{children:p(ne[e])},n)))})]}),Object.values(o).flat().length>0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{as:"h5",size:"sm",my:2,children:g("Lines")}),t.jsx(c,{"aria-label":"List of line errors",children:Object.entries(o).map((([e,n])=>t.jsxs(d,{children:[e,t.jsx(c,{children:n.map(((e,n)=>t.jsx(d,{children:p(ne[e])},n)))})]},e)))})]})]}),t.jsx(u,{children:t.jsxs(h,{children:[t.jsx(a,{onClick:x,children:g("Submit anyway")}),t.jsx(a,{colorScheme:"primary",onClick:j,children:g("Go back")})]})})]})}e("default",(function(){const{t:e}=w(),s=L(),i=S(),{isDataLoading:r}=E((e=>e.app)),[o,l]=k.useState(),[c,d]=k.useState(!1),[u,x]=k.useState(!1);return k.useEffect((()=>{const e=oe.storage.get(ae);if(e)try{const n=JSON.parse(e);Object.keys(n.lines).length>0&&Object.values(n.lines)[0].id&&(l(n),d(!0))}catch(n){console.error("TicketView:: unable to restore draft ticket",e)}}),[]),t.jsxs(ce,{alignSelf:"center",sx:{width:{base:"100%",md:520}},children:[r&&t.jsx(de,{isIndeterminate:!0}),t.jsxs(b,{direction:"column",flex:1,overflowY:"auto",bg:"inherit",children:[t.jsx(n,{}),t.jsx(be,{}),t.jsx(ke,{})]}),t.jsxs(b,{my:2,children:[t.jsx(a,{size:"sm",onClick:()=>{oe.isStandaloneWindow()?i("/"):oe.openApp("rmg-palette")},children:e("Go back")}),t.jsxs(h,{ml:"auto",children:[t.jsx(a,{size:"sm",variant:"outline",onClick:()=>{s(le()),oe.storage.remove(ae),oe.event(ue.RESET_TICKET,{})},children:e("Reset")}),t.jsx(a,{size:"sm",colorScheme:"primary",onClick:()=>x(!0),children:e("Submit")})]})]}),t.jsx(Pe,{isOpen:c,onClose:()=>d(!1),incomingState:o}),t.jsx(Oe,{isOpen:u,onClose:()=>x(!1)})]})}));const Le=e=>{var n;return!(null===(n=e.match(/^https?:\/\//))||void 0===n||!n[0])};function Ee(e){const{refLink:n,onRefLinkChange:s,justification:i,onJustificationChange:o,onPrev:c,onNext:d}=e,{t:h}=w(),x=[{type:"input",value:n,label:h("Reference link"),placeholder:h("Enter a valid URL, e.g.")+" https://en.wikipedia.org",onChange:s,validator:Le},{type:"textarea",value:i,label:h("Justification"),placeholder:h("Briefly describe your changes and provide justification"),onChange:o}],j=!n||!i||!Le(n);return t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(r,{children:h("Please provide suitable source and justification.")}),t.jsx(he,{fields:x,minW:"full"})]}),t.jsxs(u,{children:[c&&t.jsx(a,{variant:"ghost",onClick:c,mr:"auto",leftIcon:t.jsx(je,{}),children:h("Previous")}),t.jsx(a,{colorScheme:"primary",onClick:d,rightIcon:t.jsx(ge,{}),isDisabled:j,children:h("Next")})]})]})}function Re(e){var n,s;const{countryEntry:i,cityEntry:o,paletteList:c,refLink:h,justification:m,onPrev:y}=e,{t:f}=w(),v=x("primary.500","primary.300"),C=k.useRef(null),b=[`**Reference link:** ${h||"(REPLACE ME)"}`,`**Justification:** ${m||"(REPLACE ME)"}`,te,se("country",i),se("city",o),se("lines",c)].join("\n\n"),S=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==o||null===(n=o.name)||void 0===n?void 0:n.en),body:b}),L=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==o||null===(s=o.name)||void 0===s?void 0:s.en)});return t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx(r,{children:f("If the button below doesn't work for you, please follow the instructions below:")}),t.jsxs(j,{children:[t.jsxs(d,{children:[f("Open")," ",t.jsxs(g,{color:v,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+L.toString(),isExternal:!0,children:["Issue: New Palettes Request ",t.jsx(p,{as:pe})]})]}),t.jsxs(d,{children:[f("Paste following text to the issue body")," ",t.jsx(a,{size:"xs",leftIcon:t.jsx(me,{}),onClick:async()=>{null!=C&&C.current&&(C.current.select(),await navigator.clipboard.writeText(b))},children:f("Copy")}),t.jsx(ie,{ref:C,isReadOnly:!0,defaultValue:b,onClick:({target:e})=>e.select()})]})]})]}),t.jsxs(u,{children:[t.jsx(a,{variant:"ghost",onClick:y,mr:"auto",leftIcon:t.jsx(je,{}),children:f("Previous")}),t.jsx(a,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+S.toString(),"_blank"),children:f("1-click open issue")})]})]})}function Oe(e){const{isOpen:n,onClose:s}=e,{t:i}=w(),[r,o]=k.useState([]),[a,l]=k.useState([]),[c,d]=k.useState({}),[u,h]=k.useState(""),[x,j]=k.useState(""),[g,p]=k.useState(!1),[b,S]=k.useState(!1),{countryList:L}=E((e=>e.app)),R=E((e=>e.ticket)),O=re.getCountryEntry(R),P=re.getCityEntry(R),I=re.getPalettes(R);k.useEffect((()=>{n?(o(re.getCountryErrors(R)),l(re.getCityErrors(R,L)),d(re.getLineErrors(R,L))):(p(!1),h(""),j(""),S(!1))}),[n]);const z=r.length>0||a.length>0||Object.values(c).flat().length>0,N=z&&!g,U=!N&&!b;return t.jsxs(m,{blockScrollOnMount:!1,isOpen:n,onClose:s,scrollBehavior:"inside",children:[t.jsx(y,{}),t.jsxs(f,{children:[t.jsx(v,{children:i("Submit palettes")}),t.jsx(C,{onClick:()=>{N||U||oe.storage.remove(ae),s()}}),N&&t.jsx(Se,{countryErrors:r,cityErrors:a,lineErrors:c,onIgnore:()=>p(!0),onClose:s}),U&&t.jsx(Ee,{refLink:u,onRefLinkChange:h,justification:x,onJustificationChange:j,onPrev:z?()=>p(!1):void 0,onNext:()=>S(!0)}),!N&&!U&&t.jsx(Re,{countryEntry:O,cityEntry:P,paletteList:I,refLink:u,justification:x,onPrev:()=>S(!1)})]})]})}function Pe(e){const{isOpen:n,onClose:s,incomingState:i}=e,{t:r}=w(),o=L();return t.jsxs(m,{isOpen:n,onClose:s,children:[t.jsx(y,{}),t.jsxs(f,{children:[t.jsx(v,{children:r("Unsaved draft")}),t.jsx(C,{}),t.jsx(l,{children:r("Do you want to continue with your last unsaved ticket?")}),t.jsx(u,{children:t.jsxs(h,{children:[t.jsx(a,{onClick:()=>{oe.storage.remove(ae),s()},children:r("Discard")}),t.jsx(a,{colorScheme:"primary",onClick:()=>{i&&o(le(i)),s()},children:r("Continue")})]})})]})]})}}}}));
