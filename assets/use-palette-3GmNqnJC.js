import{a0 as n}from"./index-fyAEgCfE.js";import{r as a}from"./react-w_kKxQCt.js";function c(t){const[o,e]=a.useState([]);return a.useEffect(()=>{if(!t){e([]);return}const r=new AbortController;return n(t,r.signal).then(s=>e(s)).catch(()=>e([])),()=>{r.abort()}},[t]),o}export{c as u};
