import{A as me,M as ye,r as d,O as ze,c as i,aC as xe,w as f,br as le,aE as Ae,aF as pe,y as Se,h as S,at as De,bs as ue,bt as He,U as ie,g as ge,bu as se,L as Le,N as We,bv as je,i as Fe,ad as re,Q as Qe,bw as Ie,x as ce,o as Re,an as ve,B as Ve,bx as Ne,ae as Ee}from"./index.97471163.js";import{T as V}from"./TouchPan.4e4fafe1.js";import{b as B}from"./format.3e32b8d9.js";const de=["vertical","horizontal"],oe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},fe={prevent:!0,mouse:!0,mouseAllDir:!0},he=e=>e>=250?50:Math.ceil(e/5);var Ke=me({name:"QScrollArea",props:{...ye,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:W,emit:k}){const P=d(!1),b=d(!1),m=d(!1),s={vertical:d(0),horizontal:d(0)},a={vertical:{ref:d(null),position:d(0),size:d(0)},horizontal:{ref:d(null),position:d(0),size:d(0)}},{proxy:T}=ge(),J=ze(e,T.$q);let r=null,D;const h=d(null),$=i(()=>"q-scrollarea"+(J.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=i(()=>{const l=a.vertical.size.value-s.vertical.value;if(l<=0)return 0;const o=B(a.vertical.position.value/l,0,1);return Math.round(o*1e4)/1e4}),a.vertical.thumbHidden=i(()=>(e.visible===null?m.value:e.visible)!==!0&&P.value===!1&&b.value===!1||a.vertical.size.value<=s.vertical.value+1),a.vertical.thumbStart=i(()=>a.vertical.percentage.value*(s.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=i(()=>Math.round(B(s.vertical.value*s.vertical.value/a.vertical.size.value,he(s.vertical.value),s.vertical.value))),a.vertical.style=i(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=i(()=>{const l=a.horizontal.size.value-s.horizontal.value;if(l<=0)return 0;const o=B(Math.abs(a.horizontal.position.value)/l,0,1);return Math.round(o*1e4)/1e4}),a.horizontal.thumbHidden=i(()=>(e.visible===null?m.value:e.visible)!==!0&&P.value===!1&&b.value===!1||a.horizontal.size.value<=s.horizontal.value+1),a.horizontal.thumbStart=i(()=>a.horizontal.percentage.value*(s.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=i(()=>Math.round(B(s.horizontal.value*s.horizontal.value/a.horizontal.size.value,he(s.horizontal.value),s.horizontal.value))),a.horizontal.style=i(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[T.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const v=i(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),x=[[V,l=>{E(l,"vertical")},void 0,{vertical:!0,...fe}]],y=[[V,l=>{E(l,"horizontal")},void 0,{horizontal:!0,...fe}]];function c(){const l={};return de.forEach(o=>{const u=a[o];l[o+"Position"]=u.position.value,l[o+"Percentage"]=u.percentage.value,l[o+"Size"]=u.size.value,l[o+"ContainerSize"]=s[o].value}),l}const j=xe(()=>{const l=c();l.ref=T,k("scroll",l)},0);function F(l,o,u){if(de.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?se:le)(h.value,o,u)}function N({height:l,width:o}){let u=!1;s.vertical.value!==l&&(s.vertical.value=l,u=!0),s.horizontal.value!==o&&(s.horizontal.value=o,u=!0),u===!0&&_()}function Q({position:l}){let o=!1;a.vertical.position.value!==l.top&&(a.vertical.position.value=l.top,o=!0),a.horizontal.position.value!==l.left&&(a.horizontal.position.value=l.left,o=!0),o===!0&&_()}function A({height:l,width:o}){a.horizontal.size.value!==o&&(a.horizontal.size.value=o,_()),a.vertical.size.value!==l&&(a.vertical.size.value=l,_())}function E(l,o){const u=a[o];if(l.isFirst===!0){if(u.thumbHidden.value===!0)return;D=u.position.value,b.value=!0}else if(b.value!==!0)return;l.isFinal===!0&&(b.value=!1);const g=oe[o],L=s[o].value,K=(u.size.value-L)/(L-u.thumbSize.value),G=l.distance[g.dist],X=D+(l.direction===g.dir?1:-1)*G*K;I(X,o)}function U(l,o){const u=a[o];if(u.thumbHidden.value!==!0){const g=l[oe[o].offset];if(g<u.thumbStart.value||g>u.thumbStart.value+u.thumbSize.value){const L=g-u.thumbSize.value/2;I(L/s[o].value*u.size.value,o)}u.ref.value!==null&&u.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function H(l){U(l,"vertical")}function q(l){U(l,"horizontal")}function _(){P.value=!0,r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,P.value=!1},e.delay),e.onScroll!==void 0&&j()}function I(l,o){h.value[oe[o].scroll]=l}function M(){m.value=!0}function R(){m.value=!1}let p=null;return f(()=>T.$q.lang.rtl,l=>{h.value!==null&&le(h.value,Math.abs(a.horizontal.position.value)*(l===!0?-1:1))}),Ae(()=>{p={top:a.vertical.position.value,left:a.horizontal.position.value}}),pe(()=>{if(p===null)return;const l=h.value;l!==null&&(le(l,p.left),se(l,p.top))}),Se(j.cancel),Object.assign(T,{getScrollTarget:()=>h.value,getScroll:c,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:F,setScrollPercentage(l,o,u){F(l,o*(a[l].size.value-s[l].value)*(l==="horizontal"&&T.$q.lang.rtl===!0?-1:1),u)}}),()=>S("div",{class:$.value,onMouseenter:M,onMouseleave:R},[S("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[S("div",{class:"q-scrollarea__content absolute",style:v.value},De(W.default,[S(ue,{debounce:0,onResize:A})])),S(He,{axis:"both",onScroll:Q})]),S(ue,{debounce:0,onResize:N}),S("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:H}),S("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:q}),ie(S("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),x),ie(S("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),y)])}});const be=150;var Ge=me({name:"QDrawer",inheritAttrs:!1,props:{...Le,...ye,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...We,"onLayout","miniState"],setup(e,{slots:W,emit:k,attrs:P}){const b=ge(),{proxy:{$q:m}}=b,s=ze(e,m),{preventBodyScroll:a}=Ne(),{registerTimeout:T,removeTimeout:J}=je(),r=Fe(Ee,re);if(r===re)return console.error("QDrawer needs to be child of QLayout"),re;let D,h=null,$;const v=d(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),x=i(()=>e.mini===!0&&v.value!==!0),y=i(()=>x.value===!0?e.miniWidth:e.width),c=d(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),j=i(()=>e.persistent!==!0&&(v.value===!0||L.value===!0));function F(t,n){if(E(),t!==!1&&r.animate(),w(0),v.value===!0){const z=r.instances[l.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),C(1),r.isContainer.value!==!0&&a(!0)}else C(0),t!==!1&&ee(!1);T(()=>{t!==!1&&ee(!0),n!==!0&&k("show",t)},be)}function N(t,n){U(),t!==!1&&r.animate(),C(0),w(_.value*y.value),te(),n!==!0?T(()=>{k("hide",t)},be):J()}const{show:Q,hide:A}=Qe({showing:c,hideOnRouteChange:j,handleShow:F,handleHide:N}),{addToHistory:E,removeFromHistory:U}=Ie(c,A,j),H={belowBreakpoint:v,hide:A},q=i(()=>e.side==="right"),_=i(()=>(m.lang.rtl===!0?-1:1)*(q.value===!0?1:-1)),I=d(0),M=d(!1),R=d(!1),p=d(y.value*_.value),l=i(()=>q.value===!0?"left":"right"),o=i(()=>c.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:y.value:0),u=i(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(q.value?"R":"L")>-1||m.platform.is.ios===!0&&r.isContainer.value===!0),g=i(()=>e.overlay===!1&&c.value===!0&&v.value===!1),L=i(()=>e.overlay===!0&&c.value===!0&&v.value===!1),K=i(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&M.value===!1?" hidden":"")),G=i(()=>({backgroundColor:`rgba(0,0,0,${I.value*.4})`})),X=i(()=>q.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),we=i(()=>q.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),qe=i(()=>{const t={};return r.header.space===!0&&X.value===!1&&(u.value===!0?t.top=`${r.header.offset}px`:r.header.space===!0&&(t.top=`${r.header.size}px`)),r.footer.space===!0&&we.value===!1&&(u.value===!0?t.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(t.bottom=`${r.footer.size}px`)),t}),_e=i(()=>{const t={width:`${y.value}px`,transform:`translateX(${p.value}px)`};return v.value===!0?t:Object.assign(t,qe.value)}),ke=i(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Te=i(()=>`q-drawer q-drawer--${e.side}`+(R.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(u.value===!0||g.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(X.value===!0?" q-drawer--top-padding":""))),Me=i(()=>{const t=m.lang.rtl===!0?e.side:l.value;return[[V,Pe,void 0,{[t]:!0,mouse:!0}]]}),Ce=i(()=>{const t=m.lang.rtl===!0?l.value:e.side;return[[V,ne,void 0,{[t]:!0,mouse:!0}]]}),Oe=i(()=>{const t=m.lang.rtl===!0?l.value:e.side;return[[V,ne,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function Z(){$e(v,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}f(v,t=>{t===!0?(D=c.value,c.value===!0&&A(!1)):e.overlay===!1&&e.behavior!=="mobile"&&D!==!1&&(c.value===!0?(w(0),C(0),te()):Q(!1))}),f(()=>e.side,(t,n)=>{r.instances[n]===H&&(r.instances[n]=void 0,r[n].space=!1,r[n].offset=0),r.instances[t]=H,r[t].size=y.value,r[t].space=g.value,r[t].offset=o.value}),f(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&Z()}),f(()=>e.behavior+e.breakpoint,Z),f(r.isContainer,t=>{c.value===!0&&a(t!==!0),t===!0&&Z()}),f(r.scrollbarWidth,()=>{w(c.value===!0?0:void 0)}),f(o,t=>{O("offset",t)}),f(g,t=>{k("onLayout",t),O("space",t)}),f(q,()=>{w()}),f(y,t=>{w(),ae(e.miniToOverlay,t)}),f(()=>e.miniToOverlay,t=>{ae(t,y.value)}),f(()=>m.lang.rtl,()=>{w()}),f(()=>e.mini,()=>{e.modelValue===!0&&(Be(),r.animate())}),f(x,t=>{k("miniState",t)});function w(t){t===void 0?ce(()=>{t=c.value===!0?0:y.value,w(_.value*t)}):(r.isContainer.value===!0&&q.value===!0&&(v.value===!0||Math.abs(t)===y.value)&&(t+=_.value*r.scrollbarWidth.value),p.value=t)}function C(t){I.value=t}function ee(t){const n=t===!0?"remove":r.isContainer.value!==!0?"add":"";n!==""&&document.body.classList[n]("q-body--drawer-toggle")}function Be(){h!==null&&clearTimeout(h),b.proxy&&b.proxy.$el&&b.proxy.$el.classList.add("q-drawer--mini-animate"),R.value=!0,h=setTimeout(()=>{h=null,R.value=!1,b&&b.proxy&&b.proxy.$el&&b.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Pe(t){if(c.value!==!1)return;const n=y.value,z=B(t.distance.x,0,n);if(t.isFinal===!0){z>=Math.min(75,n)===!0?Q():(r.animate(),C(0),w(_.value*n)),M.value=!1;return}w((m.lang.rtl===!0?q.value!==!0:q.value)?Math.max(n-z,0):Math.min(0,z-n)),C(B(z/n,0,1)),t.isFirst===!0&&(M.value=!0)}function ne(t){if(c.value!==!0)return;const n=y.value,z=t.direction===e.side,Y=(m.lang.rtl===!0?z!==!0:z)?B(t.distance.x,0,n):0;if(t.isFinal===!0){Math.abs(Y)<Math.min(75,n)===!0?(r.animate(),C(1),w(0)):A(),M.value=!1;return}w(_.value*Y),C(B(1-Y/n,0,1)),t.isFirst===!0&&(M.value=!0)}function te(){a(!1),ee(!0)}function O(t,n){r.update(e.side,t,n)}function $e(t,n){t.value!==n&&(t.value=n)}function ae(t,n){O("size",t===!0?e.miniWidth:n)}return r.instances[e.side]=H,ae(e.miniToOverlay,y.value),O("space",g.value),O("offset",o.value),e.showIfAbove===!0&&e.modelValue!==!0&&c.value===!0&&e["onUpdate:modelValue"]!==void 0&&k("update:modelValue",!0),Re(()=>{k("onLayout",g.value),k("miniState",x.value),D=e.showIfAbove===!0;const t=()=>{(c.value===!0?F:N)(!1,!0)};if(r.totalWidth.value!==0){ce(t);return}$=f(r.totalWidth,()=>{$(),$=void 0,c.value===!1&&e.showIfAbove===!0&&v.value===!1?Q(!1):t()})}),Se(()=>{$!==void 0&&$(),h!==null&&(clearTimeout(h),h=null),c.value===!0&&te(),r.instances[e.side]===H&&(r.instances[e.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const t=[];v.value===!0&&(e.noSwipeOpen===!1&&t.push(ie(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Me.value)),t.push(ve("div",{ref:"backdrop",class:K.value,style:G.value,"aria-hidden":"true",onClick:A},void 0,"backdrop",e.noSwipeBackdrop!==!0&&c.value===!0,()=>Oe.value)));const n=x.value===!0&&W.mini!==void 0,z=[S("div",{...P,key:""+n,class:[ke.value,P.class]},n===!0?W.mini():Ve(W.default))];return e.elevated===!0&&c.value===!0&&z.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ve("aside",{ref:"content",class:Te.value,style:_e.value},z,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>Ce.value)),S("div",{class:"q-drawer-container"},t)}}}),Ze="/JoYo-Front/assets/backImage.94f0d6e6.png";export{Ke as Q,Ze as _,Ge as a};
