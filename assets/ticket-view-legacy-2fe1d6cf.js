!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(R){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),c=new S(r||[]);return i(a,"_invoke",{value:k(e,n,c)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}n.wrap=f;var d={};function p(){}function y(){}function v(){}var g={};s(g,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(j([])));b&&b!==r&&o.call(b,c)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(t,n){function r(i,a,c,u){var l=h(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):n.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,o){r(e,t,n,o)}))}return a=a?a.then(o,o):o()}})}function k(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},n.awrap=function(e){return{__await:e}},x(C.prototype),s(C.prototype,u,(function(){return this})),n.AsyncIterator=C,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new C(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,u,"next",e)}function u(e){n(a,o,i,c,u,"throw",e)}c(void 0)}))}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(s){l=!0,o=s}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./vendor-legacy-8a2e8ad9.js","./index.esm-legacy-c18d2c72.js","./index-legacy-ad381bd0.js"],(function(e,n){"use strict";var i,a,l,s,f,h,d,p,y,v,g,m,b,w,x,C,k,L,E,O,S,j,P,R,I,z,N,A,_,T,G,U,q,D,F,J,M,B,W,Y,K,V,H,$,Q,X,Z,ee,te,ne,re,oe,ie,ae,ce,ue,le,se,fe,he,de,pe,ye,ve,ge,me,be,we,xe,Ce,ke,Le,Ee,Oe;return{setters:[function(e){i=e.e,a=e.f,l=e.J,s=e.j,f=e.v,h=e.t,d=e.D,p=e.K,y=e.L,v=e.H,g=e.h,m=e.T,b=e.M,w=e.z,x=e.N,C=e.C,k=e.O,L=e.w,E=e.Q,O=e.U,S=e.V,j=e.W,P=e.X,R=e.Y,I=e.Z,z=e._,N=e.$,A=e.a0,_=e.a1,T=e.a2,G=e.a3,U=e.a4,q=e.q,D=e.F,F=e.r},function(e){J=e.u,M=e.a,B=e.b,W=e.M,Y=e.c,K=e.d,V=e.e,H=e.f},function(e){$=e.a,Q=e.u,X=e.c,Z=e.C,ee=e.d,te=e.e,ne=e.f,re=e.g,oe=e.h,ie=e.r,ae=e.i,ce=e.j,ue=e.k,le=e.l,se=e.m,fe=e.n,he=e.M,de=e.o,pe=e.q,ye=e.t,ve=e.v,ge=e.w,me=e.x,be=e.y,we=e.z,xe=e.I,Ce=e.G,ke=e.A,Le=e.B,Ee=e.D,Oe=e.E}],execute:function(){e("default",(function(){var e=i().t,t=$(),n=q(),r=o(g.useState(!1),2),c=r[0],u=r[1];return s(D,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[s(x,{direction:"column",flex:1,overflowY:"auto",children:[a(je,{}),a(Pe,{}),a(Ae,{})]}),s(x,{my:2,children:[a(L,{size:"sm",onClick:function(){return n("/")},children:e("Go back")}),s(f,{ml:"auto",children:[a(L,{size:"sm",variant:"outline",onClick:function(){t(Ee()),F.event(Oe.RESET_TICKET,{})},children:e("Reset")}),a(L,{size:"sm",colorScheme:"primary",onClick:function(){return u(!0)},children:e("Submit")})]})]}),a(qe,{isOpen:c,onClose:function(){return u(!1)}})]})}));var n={"& > div:first-of-type":{flex:1}};function Se(e){var t,r=e.onUpdate,v=e.onLangSwitch,g=e.onRemove,m=null!==(t=e.entries)&&void 0!==t?t:[],b=i().t,w=J(),x=function(e,t){return[{type:"select",label:b("Language"),value:e,options:Object.entries(y).reduce((function(e,t){return c(c({},e),{},u({},t[0],w(t[1])))}),{}),disabledOptions:m.filter((function(t){return t[0]!==e})).map((function(e){return e[0]})),onChange:function(t){return v(e,t)}},{type:"input",label:b("Name"),value:t,onChange:function(t){return r(e,t)},validator:function(e){return!!e}}]},C=function(){var e=Object.keys(y).filter((function(e){return!m.find((function(t){return t[0]===e}))}))[0];r(e,"")};return a(l,{direction:"column",children:m.map((function(e,t,r){var i=o(e,2),c=i[0],u=i[1];return s(f,{sx:n,"data-testid":"entry-card-stack-"+c,children:[a(h,{fields:x(c,u),noLabel:t>0}),t===r.length-1?a(d,{size:"sm",variant:"ghost","aria-label":b("Add a name in another language"),title:b("Add a name in another language"),onClick:C,icon:a(M,{})}):a(p,{minW:8}),r.length>1&&a(d,{size:"sm",variant:"ghost","aria-label":b("Remove this name"),title:b("Remove this name"),onClick:function(){return g(c)},icon:a(B,{})})]},t)}))})}function je(){var e=i(),t=e.t,n=e.i18n,r=J(),o=$(),l=Q((function(e){return e.ticket})),f=l.country,d=l.newCountry,g=l.countryName,m=l.newCountryLang,b=c(c({},X.map((function(e){return[e.id,r(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],n.languages[0])})).reduce((function(e,t){return t[0]===Z.UN?e:c(c({},e),{},u({},t[0],t[1]))}),{})),{},{new:t("Add a country/region...")}),w=Object.entries(y).reduce((function(e,t){return c(c({},e),{},u({},t[0],r(t[1])))}),{}),x=[{type:"select",label:t("Country / Region"),value:f,options:b,onChange:function(e){return o(ee(e))}},{type:"input",label:t("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:d,onChange:function(e){return o(te(e))},hidden:"new"!==f},{type:"select",label:t("Offical language"),value:m,options:w,onChange:function(e){return o(ne(e||void 0))},hidden:"new"!==f}];return s(p,{as:"section",children:[a(v,{as:"h5",size:"sm",mb:2,children:t("Country / Region")}),a(h,{fields:x}),"new"===f&&a(Se,{entries:g,onUpdate:function(e,t){return o(re({lang:e,name:t}))},onLangSwitch:function(e,t){return o(oe({prevLang:e,nextLang:t}))},onRemove:function(e){return o(ie(e))}})]})}function Pe(){var e=i().t,t=$(),n=Q((function(e){return e.ticket})),r=n.city,o=n.cityName,c=[{type:"input",label:e("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:r,onChange:function(e){return t(ae(e))},validator:function(e){return""!==e&&!e.match(/[^a-z]/)}}];return s(p,{as:"section",children:[a(v,{as:"h5",size:"sm",mt:3,mb:2,children:e("City")}),a(h,{fields:c}),a(Se,{entries:o,onUpdate:function(e,n){return t(ce({lang:e,name:n}))},onLangSwitch:function(e,n){return t(ue({prevLang:e,nextLang:n}))},onRemove:function(e){return t(le(e))}})]})}var Re=function(e){return'{ getColor(code:"'.concat(e,'") { code, rgb { r g b }, hex, cmyk { c m y k } } }')},Ie=function(){var e=r(t().mark((function e(n,r){var o,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:Re(n)}),signal:r});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return","#"+i.data.getColor.hex);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function ze(e){var t=e.ready,n=e.onReady,r=i().t;return g.useEffect((function(){var e=new AbortController;return Ie("130 C",e.signal).then((function(e){return n(!!e)})).catch((function(){return n(!1)})),function(){e.abort()}}),[]),a(m,{as:"i",fontSize:"xs",children:void 0===t?r("Checking Pantone service availability..."):t?r("Pantone service is ready")+" ✅":r("Pantone service is not available")+" ⚠️"})}function Ne(e){var n,c=e.entryId,l=e.pantoneReady,s=i().t,f=$(),d=Q((function(e){return e.ticket.lines})),p=d[c],y=o(g.useState("hex"),2),v=y[0],m=y[1],x=o(g.useState(""),2),C=x[0],k=x[1],L=g.useRef(new AbortController);g.useEffect((function(){L.current.abort();var e=d[c];null!=e&&e.pantone?(k(e.pantone),m("pantone")):(k(""),m("hex"))}),[c]);var E=function(){var e=r(t().mark((function e(n){var r,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.current.abort(),p&&l){e.next=3;break}return e.abrupt("return");case 3:return L.current=new AbortController,e.prev=4,e.next=7,Ie(n,L.current.signal);case 7:r=e.sent,f(pe({entryId:c,pantone:n,hex:r})),k(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),w.flushSync((function(){k(n)})),k(null!==(o=p.pantone)&&void 0!==o?o:"");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),O=[{label:"RGB",value:"hex"},{label:s("Pantone"),value:"pantone"}],S=[{type:"input",label:s("Line code"),placeholder:"e.g. twl, gz1, sh1",value:p.id,onChange:function(e){return f(se({entryId:c,lineId:e}))},validator:function(e){return""!==e&&!e.match(/[^a-z0-9]/)}},{type:"custom",label:s("Colour mode"),component:a(b,{selections:O,defaultValue:v,onChange:function(e){return m(e)}}),hidden:!l},{type:"input",label:s("Background colour"),variant:"color",value:p.colour,onChange:function(e){return f(fe({entryId:c,bgColour:e}))},hidden:l&&"pantone"===v},{type:"input",label:s("Pantone code"),value:C,onChange:E,debouncedDelay:1500,hidden:!l||"pantone"!==v},{type:"select",label:s("Foreground colour"),value:p.fg,options:(n={},u(n,he.white,s("White")),u(n,he.black,s("Black")),n),onChange:function(e){return f(de({entryId:c,fgColour:e}))}}];return a(h,{fields:S})}function Ae(){var e,t=i().t,n=J(),r=$(),c=Q((function(e){return e.ticket.lines})),u=o(g.useState(Object.keys(c)[0]),2),l=u[0],h=u[1],y=o(g.useState(),2),m=y[0],b=y[1];return s(p,{as:"section",children:[s(x,{mt:3,mb:2,alignItems:"center",children:[a(v,{as:"h5",size:"sm",mr:"auto",children:t("Lines")}),a(ze,{ready:m,onReady:b})]}),s(f,{flexWrap:"wrap",sx:{"& .chakra-badge":{mb:1}},children:[Object.entries(c).map((function(e){var i=o(e,2),c=i[0],u=i[1],l=n(Object.fromEntries(u.nameEntity));return a(C,{name:l,bg:u.colour,fg:u.fg,actions:s(k,{children:[a(d,{size:"xs",variant:"ghost",color:u.fg,"aria-label":t("Edit")+" "+l,title:t("Edit")+" "+l,icon:a(W,{}),onClick:function(){return h(c)}}),a(d,{size:"xs",variant:"ghost",color:u.fg,"aria-label":t("Copy")+" "+l,title:t("Copy")+" "+l,icon:a(Y,{}),onClick:function(){return r(ye(c))}}),a(d,{size:"xs",variant:"ghost",color:u.fg,"aria-label":t("Remove")+" "+l,title:t("Remove")+" "+l,icon:a(B,{}),onClick:function(){return r(ve(c))}})]})},c)})),a(L,{size:"xs",variant:"ghost",leftIcon:a(M,{}),ml:"auto !important",onClick:function(){return r(ge())},children:t("Add a line")})]}),c[l]&&a(Ne,{entryId:l,pantoneReady:m}),a(Se,{entries:null===(e=c[l])||void 0===e?void 0:e.nameEntity,onUpdate:function(e,t){return r(me({entryId:l,lang:e,name:t}))},onLangSwitch:function(e,t){return r(be({entryId:l,prevLang:e,nextLang:t}))},onRemove:function(e){return r(we({entryId:l,lang:e}))}})]})}function _e(e){var t=e.countryErrors,n=e.cityErrors,r=e.lineErrors,c=e.onIgnore,u=e.onClose,l=i().t,h=J();return s(k,{children:[s(E,{children:[a(m,{children:l("Your inputs contain the following errors. Please consider fixing it before submitting.")}),t.length>0&&s(k,{children:[a(v,{as:"h5",size:"sm",my:2,children:l("Country / Region")}),a(O,{"aria-label":"List of country errors",children:t.map((function(e,t){return a(S,{children:h(xe[e])},t)}))})]}),n.length>0&&s(k,{children:[a(v,{as:"h5",size:"sm",my:2,children:l("City")}),a(O,{"aria-label":"List of city errors",children:n.map((function(e,t){return a(S,{children:h(xe[e])},t)}))})]}),Object.values(r).flat().length>0&&s(k,{children:[a(v,{as:"h5",size:"sm",my:2,children:l("Lines")}),a(O,{"aria-label":"List of line errors",children:Object.entries(r).map((function(e){var t=o(e,2),n=t[0],r=t[1];return s(S,{children:[n,a(O,{children:r.map((function(e,t){return a(S,{children:h(xe[e])},t)}))})]},n)}))})]})]}),a(j,{children:s(f,{children:[a(L,{onClick:c,children:l("Submit anyway")}),a(L,{colorScheme:"primary",onClick:u,children:l("Go back")})]})})]})}var Te=function(e){var t;return!(null===(t=e.match(/^https?:\/\//))||void 0===t||!t[0])};function Ge(e){var t=e.refLink,n=e.onRefLinkChange,r=e.justification,o=e.onJustificationChange,c=e.onPrev,u=e.onNext,l=i().t,f=[{type:"input",value:t,label:l("Reference link"),placeholder:l("Enter a valid URL"),onChange:n,validator:Te},{type:"textarea",value:r,label:l("Justification"),placeholder:l("Briefly describe your changes and provide justification"),onChange:o}],d=!t||!r||!Te(t);return s(k,{children:[s(E,{children:[a(m,{children:l("Please provide suitable source and justification.")}),a(h,{fields:f,minW:"full"})]}),s(j,{children:[c&&a(L,{variant:"ghost",onClick:c,mr:"auto",leftIcon:a(K,{}),children:l("Previous")}),a(L,{colorScheme:"primary",onClick:u,rightIcon:a(V,{}),isDisabled:d,children:l("Next")})]})]})}function Ue(e){var n,o,c=e.countryEntry,u=e.cityEntry,l=e.paletteList,f=e.refLink,h=e.justification,d=e.onPrev,p=i().t,y=P("primary.500","primary.300"),v=g.useRef(null),b=["**Reference link:** ".concat(f||"(REPLACE ME)"),"**Justification:** ".concat(h||"(REPLACE ME)"),Ce,ke("country",c),ke("city",u),ke("lines",l)].join("\n\n"),w=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==u||null===(n=u.name)||void 0===n?void 0:n.en),body:b}),x=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==u||null===(o=u.name)||void 0===o?void 0:o.en)}),C=function(){var e=r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==v||!v.current){e.next=4;break}return v.current.select(),e.next=4,navigator.clipboard.writeText(b);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s(k,{children:[s(E,{children:[a(m,{children:p("If the button below doesn't work for you, please follow the instructions below:")}),s(R,{children:[s(S,{children:[p("Open")," ",s(I,{color:y,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+x.toString(),isExternal:!0,children:["Issue: New Palettes Request ",a(z,{as:H})]})]}),s(S,{children:[p("Paste following text to the issue body")," ",a(L,{size:"xs",leftIcon:a(Y,{}),onClick:C,children:p("Copy")}),a(N,{ref:v,isReadOnly:!0,defaultValue:b,onClick:function(e){return e.target.select()}})]})]})]}),s(j,{children:[a(L,{variant:"ghost",onClick:d,mr:"auto",leftIcon:a(K,{}),children:p("Previous")}),a(L,{colorScheme:"primary",onClick:function(){return window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+w.toString(),"_blank")},children:p("1-click open issue")})]})]})}function qe(e){var t=e.isOpen,n=e.onClose,r=i().t,c=o(g.useState([]),2),u=c[0],l=c[1],f=o(g.useState([]),2),h=f[0],d=f[1],p=o(g.useState({}),2),y=p[0],v=p[1],m=o(g.useState(""),2),b=m[0],w=m[1],x=o(g.useState(""),2),C=x[0],k=x[1],L=o(g.useState(!1),2),E=L[0],O=L[1],S=o(g.useState(!1),2),j=S[0],P=S[1],R=Q((function(e){return e.ticket})),I=Le.getCountryEntry(R),z=Le.getCityEntry(R),N=Le.getPalettes(R);g.useEffect((function(){t?(l(Le.getCountryErrors(R)),d(Le.getCityErrors(R)),v(Le.getLineErrors(R))):(O(!1),w(""),k(""),P(!1))}),[t]);var q=u.length>0||h.length>0||Object.values(y).flat().length>0,D=q&&!E,F=!D&&!j;return s(A,{blockScrollOnMount:!1,isOpen:t,onClose:n,scrollBehavior:"inside",children:[a(_,{}),s(T,{children:[a(G,{children:r("Submit palettes")}),a(U,{}),D&&a(_e,{countryErrors:u,cityErrors:h,lineErrors:y,onIgnore:function(){return O(!0)},onClose:n}),F&&a(Ge,{refLink:b,onRefLinkChange:w,justification:C,onJustificationChange:k,onPrev:q?function(){return O(!1)}:void 0,onNext:function(){return P(!0)}}),!D&&!F&&a(Ue,{countryEntry:I,cityEntry:z,paletteList:N,refLink:b,justification:C,onPrev:function(){return P(!1)}})]})]})}}}}))}();
