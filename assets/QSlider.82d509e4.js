import{A as S,aS as T,r,w as $,c as o,Z as w,h as A,g as F}from"./index.f4a3cd01.js";import{u as P,a as B,b as I,k as q}from"./use-slider.5e0e121c.js";import{b as f}from"./format.3e32b8d9.js";const D=()=>({});var E=S({name:"QSlider",props:{...P,modelValue:{required:!0,default:null,validator:e=>typeof e=="number"||e===null},labelValue:[String,Number]},emits:B,setup(e,{emit:s}){const{proxy:{$q:b}}=F(),{state:l,methods:t}=I({updateValue:g,updatePosition:h,getDragging:y,formAttrs:T(e)}),c=r(null),d=r(0),n=r(0);function v(){n.value=e.modelValue===null?l.innerMin.value:f(e.modelValue,l.innerMin.value,l.innerMax.value)}$(()=>`${e.modelValue}|${l.innerMin.value}|${l.innerMax.value}`,v),v();const C=o(()=>t.convertModelToRatio(n.value)),m=o(()=>l.active.value===!0?d.value:C.value),M=o(()=>{const a={[l.positionProp.value]:`${100*l.innerMinRatio.value}%`,[l.sizeProp.value]:`${100*(m.value-l.innerMinRatio.value)}%`};return e.selectionImg!==void 0&&(a.backgroundImage=`url(${e.selectionImg}) !important`),a}),V=t.getThumbRenderFn({focusValue:!0,getNodeData:D,ratio:m,label:o(()=>e.labelValue!==void 0?e.labelValue:n.value),thumbColor:o(()=>e.thumbColor||e.color),labelColor:o(()=>e.labelColor),labelTextColor:o(()=>e.labelTextColor)}),R=o(()=>l.editable.value!==!0?{}:b.platform.is.mobile===!0?{onClick:t.onMobileClick}:{onMousedown:t.onActivate,onFocus:k,onBlur:t.onBlur,onKeydown:x,onKeyup:t.onKeyup});function g(a){n.value!==e.modelValue&&s("update:modelValue",n.value),a===!0&&s("change",n.value)}function y(){return c.value.getBoundingClientRect()}function h(a,u=l.dragging.value){const i=t.getDraggingRatio(a,u);n.value=t.convertRatioToModel(i),d.value=e.snap!==!0||e.step===0?i:t.convertModelToRatio(n.value)}function k(){l.focus.value=!0}function x(a){if(!q.includes(a.keyCode))return;w(a);const u=([34,33].includes(a.keyCode)?10:1)*l.step.value,i=([34,37,40].includes(a.keyCode)?-1:1)*(l.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*u;n.value=f(parseFloat((n.value+i).toFixed(l.decimals.value)),l.innerMin.value,l.innerMax.value),g()}return()=>{const a=t.getContent(M,l.tabindex,R,u=>{u.push(V())});return A("div",{ref:c,class:l.classes.value+(e.modelValue===null?" q-slider--no-value":""),...l.attributes.value,"aria-valuenow":e.modelValue},a)}}});export{E as Q};
