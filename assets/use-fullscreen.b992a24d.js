import{r as v,b6 as F,w as f,b7 as p,aD as b,o as x,x as y,g as h}from"./index.9d55d5c2.js";let r=0;const g={fullscreen:Boolean,noRouteFullscreenExit:Boolean},E=["update:fullscreen","fullscreen"];function w(){const d=h(),{props:o,emit:m,proxy:e}=d;let n,u,a;const l=v(!1);F(d)===!0&&f(()=>e.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&t()}),f(()=>o.fullscreen,s=>{l.value!==s&&c()}),f(l,s=>{m("update:fullscreen",s),m("fullscreen",s)});function c(){l.value===!0?t():i()}function i(){l.value!==!0&&(l.value=!0,a=e.$el.parentNode,a.replaceChild(u,e.$el),document.body.appendChild(e.$el),r++,r===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:t},p.add(n))}function t(){l.value===!0&&(n!==void 0&&(p.remove(n),n=void 0),a.replaceChild(e.$el,u),l.value=!1,r=Math.max(0,r-1),r===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return b(()=>{u=document.createElement("span")}),x(()=>{o.fullscreen===!0&&i()}),y(t),Object.assign(e,{toggleFullscreen:c,setFullscreen:i,exitFullscreen:t}),{inFullscreen:l,toggleFullscreen:c}}export{E as a,w as b,g as u};
