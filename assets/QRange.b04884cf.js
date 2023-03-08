import{u as j,a as q,b as G,k as Q}from"./use-slider.3c59eede.js";import{A as z,c as o,r as d,w as H,Z as W,h as Z,g as J}from"./index.6ab7ca4a.js";import{b as x}from"./format.3e32b8d9.js";const s={MIN:0,RANGE:1,MAX:2};var p=z({name:"QRange",props:{...j,modelValue:{type:Object,default:()=>({min:null,max:null}),validator:e=>"min"in e&&"max"in e},dragRange:Boolean,dragOnlyRange:Boolean,leftLabelColor:String,leftLabelTextColor:String,rightLabelColor:String,rightLabelTextColor:String,leftLabelValue:[String,Number],rightLabelValue:[String,Number],leftThumbColor:String,rightThumbColor:String},emits:q,setup(e,{emit:g}){const{proxy:{$q:b}}=J(),{state:a,methods:m}=G({updateValue:S,updatePosition:X,getDragging:P,formAttrs:o(()=>({type:"hidden",name:e.name,value:`${e.modelValue.min}|${e.modelValue.max}`}))}),y=d(null),M=d(0),R=d(0),l=d({min:0,max:0});function V(){l.value.min=e.modelValue.min===null?a.innerMin.value:x(e.modelValue.min,a.innerMin.value,a.innerMax.value),l.value.max=e.modelValue.max===null?a.innerMax.value:x(e.modelValue.max,a.innerMin.value,a.innerMax.value)}H(()=>`${e.modelValue.min}|${e.modelValue.max}|${a.innerMin.value}|${a.innerMax.value}`,V),V();const T=o(()=>m.convertModelToRatio(l.value.min)),k=o(()=>m.convertModelToRatio(l.value.max)),h=o(()=>a.active.value===!0?M.value:T.value),F=o(()=>a.active.value===!0?R.value:k.value),$=o(()=>{const n={[a.positionProp.value]:`${100*h.value}%`,[a.sizeProp.value]:`${100*(F.value-h.value)}%`};return e.selectionImg!==void 0&&(n.backgroundImage=`url(${e.selectionImg}) !important`),n}),w=o(()=>{if(a.editable.value!==!0)return{};if(b.platform.is.mobile===!0)return{onClick:m.onMobileClick};const n={onMousedown:m.onActivate};return(e.dragRange===!0||e.dragOnlyRange===!0)&&Object.assign(n,{onFocus:()=>{a.focus.value="both"},onBlur:m.onBlur,onKeydown:A,onKeyup:m.onKeyup}),n});function L(n){return b.platform.is.mobile!==!0&&a.editable.value===!0&&e.dragOnlyRange!==!0?{onFocus:()=>{a.focus.value=n},onBlur:m.onBlur,onKeydown:A,onKeyup:m.onKeyup}:{}}const O=o(()=>e.dragOnlyRange!==!0?a.tabindex.value:null),B=o(()=>b.platform.is.mobile!==!0&&(e.dragRange||e.dragOnlyRange===!0)?a.tabindex.value:null),C=d(null),E=o(()=>L("min")),I=m.getThumbRenderFn({focusValue:"min",getNodeData:()=>({ref:C,key:"tmin",...E.value,tabindex:O.value}),ratio:h,label:o(()=>e.leftLabelValue!==void 0?e.leftLabelValue:l.value.min),thumbColor:o(()=>e.leftThumbColor||e.thumbColor||e.color),labelColor:o(()=>e.leftLabelColor||e.labelColor),labelTextColor:o(()=>e.leftLabelTextColor||e.labelTextColor)}),D=o(()=>L("max")),K=m.getThumbRenderFn({focusValue:"max",getNodeData:()=>({...D.value,key:"tmax",tabindex:O.value}),ratio:F,label:o(()=>e.rightLabelValue!==void 0?e.rightLabelValue:l.value.max),thumbColor:o(()=>e.rightThumbColor||e.thumbColor||e.color),labelColor:o(()=>e.rightLabelColor||e.labelColor),labelTextColor:o(()=>e.rightLabelTextColor||e.labelTextColor)});function S(n){(l.value.min!==e.modelValue.min||l.value.max!==e.modelValue.max)&&g("update:modelValue",{...l.value}),n===!0&&g("change",{...l.value})}function P(n){const{left:t,top:r,width:u,height:v}=y.value.getBoundingClientRect(),f=e.dragOnlyRange===!0?0:e.vertical===!0?C.value.offsetHeight/(2*v):C.value.offsetWidth/(2*u),i={left:t,top:r,width:u,height:v,valueMin:l.value.min,valueMax:l.value.max,ratioMin:T.value,ratioMax:k.value},c=m.getDraggingRatio(n,i);return e.dragOnlyRange!==!0&&c<i.ratioMin+f?i.type=s.MIN:e.dragOnlyRange===!0||c<i.ratioMax-f?e.dragRange===!0||e.dragOnlyRange===!0?(i.type=s.RANGE,Object.assign(i,{offsetRatio:c,offsetModel:m.convertRatioToModel(c),rangeValue:i.valueMax-i.valueMin,rangeRatio:i.ratioMax-i.ratioMin})):i.type=i.ratioMax-c<c-i.ratioMin?s.MAX:s.MIN:i.type=s.MAX,i}function X(n,t=a.dragging.value){let r;const u=m.getDraggingRatio(n,t),v=m.convertRatioToModel(u);switch(t.type){case s.MIN:u<=t.ratioMax?(r={minR:u,maxR:t.ratioMax,min:v,max:t.valueMax},a.focus.value="min"):(r={minR:t.ratioMax,maxR:u,min:t.valueMax,max:v},a.focus.value="max");break;case s.MAX:u>=t.ratioMin?(r={minR:t.ratioMin,maxR:u,min:t.valueMin,max:v},a.focus.value="max"):(r={minR:u,maxR:t.ratioMin,min:v,max:t.valueMin},a.focus.value="min");break;case s.RANGE:const f=u-t.offsetRatio,i=x(t.ratioMin+f,0,1-t.rangeRatio),c=v-t.offsetModel,N=x(t.valueMin+c,e.min,e.max-t.rangeValue);r={minR:i,maxR:i+t.rangeRatio,min:parseFloat(N.toFixed(a.decimals.value)),max:parseFloat((N+t.rangeValue).toFixed(a.decimals.value))},a.focus.value="both";break}l.value=l.value.min===null||l.value.max===null?{min:r.min||e.min,max:r.max||e.max}:{min:r.min,max:r.max},e.snap!==!0||e.step===0?(M.value=r.minR,R.value=r.maxR):(M.value=m.convertModelToRatio(l.value.min),R.value=m.convertModelToRatio(l.value.max))}function A(n){if(!Q.includes(n.keyCode))return;W(n);const t=([34,33].includes(n.keyCode)?10:1)*a.step.value,r=([34,37,40].includes(n.keyCode)?-1:1)*(a.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*t;if(a.focus.value==="both"){const u=l.value.max-l.value.min,v=x(parseFloat((l.value.min+r).toFixed(a.decimals.value)),a.innerMin.value,a.innerMax.value-u);l.value={min:v,max:parseFloat((v+u).toFixed(a.decimals.value))}}else{if(a.focus.value===!1)return;{const u=a.focus.value;l.value={...l.value,[u]:x(parseFloat((l.value[u]+r).toFixed(a.decimals.value)),u==="min"?a.innerMin.value:l.value.min,u==="max"?a.innerMax.value:l.value.max)}}}S()}return()=>{const n=m.getContent($,B,w,t=>{t.push(I(),K())});return Z("div",{ref:y,class:"q-range "+a.classes.value+(e.modelValue.min===null||e.modelValue.max===null?" q-slider--no-value":""),...a.attributes.value,"aria-valuenow":e.modelValue.min+"|"+e.modelValue.max},n)}}});export{p as Q};
