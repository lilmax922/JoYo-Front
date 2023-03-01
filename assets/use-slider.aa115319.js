import{T as we}from"./TouchPan.286de1c0.js";import{O as Be,r as $,c as t,aT as Te,aU as A,y as Ne,M as Fe,aH as Ie,g as ze,aV as Ae,h as i,an as Pe,aW as Re}from"./index.090b319c.js";import{b as L}from"./format.3e32b8d9.js";const Q="q-slider__marker-labels",De=n=>({value:n}),je=({marker:n})=>i("div",{key:n.value,style:n.style,class:n.classes},n.label),Ee=[34,37,40,33,39,38],He={...Fe,...Ie,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:n=>n>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},Ke=["pan","update:modelValue","change"];function Xe({updateValue:n,updatePosition:p,getDragging:M,formAttrs:Y}){const{props:a,emit:P,slots:q,proxy:{$q:_}}=ze(),Z=Be(a,_),V=Re(Y),d=$(!1),k=$(!1),v=$(!1),h=$(!1),u=t(()=>a.vertical===!0?"--v":"--h"),ee=t(()=>"-"+(a.switchLabelSide===!0?"switched":"standard")),m=t(()=>a.vertical===!0?a.reverse===!0:a.reverse!==(_.lang.rtl===!0)),b=t(()=>isNaN(a.innerMin)===!0||a.innerMin<a.min?a.min:a.innerMin),f=t(()=>isNaN(a.innerMax)===!0||a.innerMax>a.max?a.max:a.innerMax),C=t(()=>a.disable!==!0&&a.readonly!==!0&&b.value<f.value),w=t(()=>(String(a.step).trim().split(".")[1]||"").length),R=t(()=>a.step===0?1:a.step),ae=t(()=>C.value===!0?a.tabindex||0:-1),g=t(()=>a.max-a.min),D=t(()=>f.value-b.value),x=t(()=>T(b.value)),B=t(()=>T(f.value)),S=t(()=>a.vertical===!0?m.value===!0?"bottom":"top":m.value===!0?"right":"left"),j=t(()=>a.vertical===!0?"height":"width"),te=t(()=>a.vertical===!0?"width":"height"),E=t(()=>a.vertical===!0?"vertical":"horizontal"),re=t(()=>{const e={role:"slider","aria-valuemin":b.value,"aria-valuemax":f.value,"aria-orientation":E.value,"data-step":a.step};return a.disable===!0?e["aria-disabled"]="true":a.readonly===!0&&(e["aria-readonly"]="true"),e}),le=t(()=>`q-slider q-slider${u.value} q-slider--${d.value===!0?"":"in"}active inline no-wrap `+(a.vertical===!0?"row":"column")+(a.disable===!0?" disabled":" q-slider--enabled"+(C.value===!0?" q-slider--editable":""))+(v.value==="both"?" q-slider--focus":"")+(a.label||a.labelAlways===!0?" q-slider--label":"")+(a.labelAlways===!0?" q-slider--label-always":"")+(Z.value===!0?" q-slider--dark":"")+(a.dense===!0?" q-slider--dense q-slider--dense"+u.value:""));function y(e){const r="q-slider__"+e;return`${r} ${r}${u.value} ${r}${u.value}${ee.value}`}function O(e){const r="q-slider__"+e;return`${r} ${r}${u.value}`}const se=t(()=>{const e=a.selectionColor||a.color;return"q-slider__selection absolute"+(e!==void 0?` text-${e}`:"")}),ne=t(()=>O("markers")+" absolute overflow-hidden"),oe=t(()=>O("track-container")),ie=t(()=>y("pin")),ue=t(()=>y("label")),ce=t(()=>y("text-container")),ve=t(()=>y("marker-labels-container")+(a.markerLabelsClass!==void 0?` ${a.markerLabelsClass}`:"")),de=t(()=>"q-slider__track relative-position no-outline"+(a.trackColor!==void 0?` bg-${a.trackColor}`:"")),me=t(()=>{const e={[te.value]:a.trackSize};return a.trackImg!==void 0&&(e.backgroundImage=`url(${a.trackImg}) !important`),e}),be=t(()=>"q-slider__inner absolute"+(a.innerTrackColor!==void 0?` bg-${a.innerTrackColor}`:"")),U=t(()=>{const e={[S.value]:`${100*x.value}%`,[j.value]:`${100*(B.value-x.value)}%`};return a.innerTrackImg!==void 0&&(e.backgroundImage=`url(${a.innerTrackImg}) !important`),e});function fe(e){const{min:r,max:l,step:s}=a;let o=r+e*(l-r);if(s>0){const c=(o-r)%s;o+=(Math.abs(c)>=s/2?(c<0?-1:1)*s:0)-c}return w.value>0&&(o=parseFloat(o.toFixed(w.value))),L(o,b.value,f.value)}function T(e){return g.value===0?0:(e-a.min)/g.value}function pe(e,r){const l=Ae(e),s=a.vertical===!0?L((l.top-r.top)/r.height,0,1):L((l.left-r.left)/r.width,0,1);return L(m.value===!0?1-s:s,x.value,B.value)}const W=t(()=>Te(a.markers)===!0?a.markers:R.value),H=t(()=>{const e=[],r=W.value,l=a.max;let s=a.min;do e.push(s),s+=r;while(s<l);return e.push(l),e}),K=t(()=>{const e=` ${Q}${u.value}-`;return Q+`${e}${a.switchMarkerLabelsSide===!0?"switched":"standard"}${e}${m.value===!0?"rtl":"ltr"}`}),N=t(()=>a.markerLabels===!1?null:he(a.markerLabels).map((e,r)=>({index:r,value:e.value,label:e.label||e.value,classes:K.value+(e.classes!==void 0?" "+e.classes:""),style:{...G(e.value),...e.style||{}}}))),X=t(()=>({markerList:N.value,markerMap:Ce.value,classes:K.value,getStyle:G})),ke=t(()=>{if(D.value!==0){const e=100*W.value/D.value;return{...U.value,backgroundSize:a.vertical===!0?`2px ${e}%`:`${e}% 2px`}}return null});function he(e){if(e===!1)return null;if(e===!0)return H.value.map(De);if(typeof e=="function")return H.value.map(l=>{const s=e(l);return A(s)===!0?{...s,value:l}:{value:l,label:s}});const r=({value:l})=>l>=a.min&&l<=a.max;return Array.isArray(e)===!0?e.map(l=>A(l)===!0?l:{value:l}).filter(r):Object.keys(e).map(l=>{const s=e[l],o=Number(l);return A(s)===!0?{...s,value:o}:{value:o,label:s}}).filter(r)}function G(e){return{[S.value]:`${100*(e-a.min)/g.value}%`}}const Ce=t(()=>{if(a.markerLabels===!1)return null;const e={};return N.value.forEach(r=>{e[r.value]=r}),e});function ge(){if(q["marker-label-group"]!==void 0)return q["marker-label-group"](X.value);const e=q["marker-label"]||je;return N.value.map(r=>e({marker:r,...X.value}))}const xe=t(()=>[[we,Se,void 0,{[E.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function Se(e){e.isFinal===!0?(h.value!==void 0&&(p(e.evt),e.touch===!0&&n(!0),h.value=void 0,P("pan","end")),d.value=!1,v.value=!1):e.isFirst===!0?(h.value=M(e.evt),p(e.evt),n(),d.value=!0,P("pan","start")):(p(e.evt),n())}function J(){v.value=!1}function ye(e){p(e,M(e)),n(),k.value=!0,d.value=!0,document.addEventListener("mouseup",F,!0)}function F(){k.value=!1,d.value=!1,n(!0),J(),document.removeEventListener("mouseup",F,!0)}function $e(e){p(e,M(e)),n(!0)}function Le(e){Ee.includes(e.keyCode)&&n(!0)}function Me(e){if(a.vertical===!0)return null;const r=_.lang.rtl!==a.reverse?1-e:e;return{transform:`translateX(calc(${2*r-1} * ${a.thumbSize} / 2 + ${50-100*r}%))`}}function qe(e){const r=t(()=>k.value===!1&&(v.value===e.focusValue||v.value==="both")?" q-slider--focus":""),l=t(()=>`q-slider__thumb q-slider__thumb${u.value} q-slider__thumb${u.value}-${m.value===!0?"rtl":"ltr"} absolute non-selectable`+r.value+(e.thumbColor.value!==void 0?` text-${e.thumbColor.value}`:"")),s=t(()=>({width:a.thumbSize,height:a.thumbSize,[S.value]:`${100*e.ratio.value}%`,zIndex:v.value===e.focusValue?2:void 0})),o=t(()=>e.labelColor.value!==void 0?` text-${e.labelColor.value}`:""),c=t(()=>Me(e.ratio.value)),I=t(()=>"q-slider__text"+(e.labelTextColor.value!==void 0?` text-${e.labelTextColor.value}`:""));return()=>{const z=[i("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[i("path",{d:a.thumbPath})]),i("div",{class:"q-slider__focus-ring fit"})];return(a.label===!0||a.labelAlways===!0)&&(z.push(i("div",{class:ie.value+" absolute fit no-pointer-events"+o.value},[i("div",{class:ue.value,style:{minWidth:a.thumbSize}},[i("div",{class:ce.value,style:c.value},[i("span",{class:I.value},e.label.value)])])])),a.name!==void 0&&a.disable!==!0&&V(z,"push")),i("div",{class:l.value,style:s.value,...e.getNodeData()},z)}}function _e(e,r,l,s){const o=[];a.innerTrackColor!=="transparent"&&o.push(i("div",{key:"inner",class:be.value,style:U.value})),a.selectionColor!=="transparent"&&o.push(i("div",{key:"selection",class:se.value,style:e.value})),a.markers!==!1&&o.push(i("div",{key:"marker",class:ne.value,style:ke.value})),s(o);const c=[Pe("div",{key:"trackC",class:oe.value,tabindex:r.value,...l.value},[i("div",{class:de.value,style:me.value},o)],"slide",C.value,()=>xe.value)];if(a.markerLabels!==!1){const I=a.switchMarkerLabelsSide===!0?"unshift":"push";c[I](i("div",{key:"markerL",class:ve.value},ge()))}return c}return Ne(()=>{document.removeEventListener("mouseup",F,!0)}),{state:{active:d,focus:v,preventFocus:k,dragging:h,editable:C,classes:le,tabindex:ae,attributes:re,step:R,decimals:w,trackLen:g,innerMin:b,innerMinRatio:x,innerMax:f,innerMaxRatio:B,positionProp:S,sizeProp:j,isReversed:m},methods:{onActivate:ye,onMobileClick:$e,onBlur:J,onKeyup:Le,getContent:_e,getThumbRenderFn:qe,convertRatioToModel:fe,convertModelToRatio:T,getDraggingRatio:pe}}}export{Ke as a,Xe as b,Ee as k,He as u};
