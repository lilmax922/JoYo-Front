import{Q as X,a as me}from"./QBreadcrumbs.a95108b2.js";import{aX as ve,aY as E,aB as pe,aZ as fe,a_ as H,a$ as W,aV as oe,Z as j,b1 as ge,b0 as Z,r as K,c as g,w as ne,x as _e,g as ce,h as y,I as he,aw as ye,B as ae,b2 as be,A as de,M as xe,O as we,aT as Pe,o as qe,y as Se,an as Ce,a9 as J,at as Ie,_ as Te,b3 as ke,b4 as Be,a8 as Ve,$ as Ae,b5 as $e,j as S,a0 as N,a1 as C,l as i,d as w,Y as G,a6 as O,k as Y,a2 as R,F as U,a5 as ee,aa as te,ab as Me,ac as Le,s as Ee,t as Ne}from"./index.f4a3cd01.js";import{Q as De}from"./QChip.33ec3cf1.js";import{g as se,s as ie}from"./touch.70a9dd44.js";import{u as Qe}from"./use-cache.b0833c75.js";import{u as Fe,a as ze,b as He}from"./use-fullscreen.e06b3b4f.js";import{Q as Ge}from"./QPage.d5e6c946.js";import{u as Oe}from"./use-quasar.243d6d8b.js";import{S as Ye,a as Re}from"./swiper-slide.5feb31c1.js";import{A as Ue}from"./pagination.min.ee06ab66.js";import{u as Ke}from"./boardgame.f5b41042.js";import{_ as Xe}from"./BoardgameCard.6d300d28.js";function We(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,h)=>{const l=parseFloat(d);l&&(r[h]=l)}),r}var je=ve({name:"touch-swipe",beforeMount(e,{value:r,arg:d,modifiers:h}){if(h.mouse!==!0&&E.has.touch!==!0)return;const l=h.mouseCapture===!0?"Capture":"",t={handler:r,sensitivity:We(d),direction:se(h),noop:pe,mouseStart(s){ie(s,t)&&fe(s)&&(H(t,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(s,!0))},touchStart(s){if(ie(s,t)){const v=s.target;H(t,"temp",[[v,"touchmove","move","notPassiveCapture"],[v,"touchcancel","end","notPassiveCapture"],[v,"touchend","end","notPassiveCapture"]]),t.start(s)}},start(s,v){E.is.firefox===!0&&W(e,!0);const b=oe(s);t.event={x:b.left,y:b.top,time:Date.now(),mouse:v===!0,dir:!1}},move(s){if(t.event===void 0)return;if(t.event.dir!==!1){j(s);return}const v=Date.now()-t.event.time;if(v===0)return;const b=oe(s),o=b.left-t.event.x,m=Math.abs(o),_=b.top-t.event.y,u=Math.abs(_);if(t.event.mouse!==!0){if(m<t.sensitivity[1]&&u<t.sensitivity[1]){t.end(s);return}}else if(m<t.sensitivity[2]&&u<t.sensitivity[2])return;const n=m/v,p=u/v;t.direction.vertical===!0&&m<u&&m<100&&p>t.sensitivity[0]&&(t.event.dir=_<0?"up":"down"),t.direction.horizontal===!0&&m>u&&u<100&&n>t.sensitivity[0]&&(t.event.dir=o<0?"left":"right"),t.direction.up===!0&&m<u&&_<0&&m<100&&p>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&m<u&&_>0&&m<100&&p>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&m>u&&o<0&&u<100&&n>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&m>u&&o>0&&u<100&&n>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(j(s),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ge(),t.styleCleanup=B=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(P,50):P()}),t.handler({evt:s,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:v,distance:{x:m,y:u}})):t.end(s)},end(s){t.event!==void 0&&(Z(t,"temp"),E.is.firefox===!0&&W(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),s!==void 0&&t.event.dir!==!1&&j(s),t.event=void 0)}};if(e.__qtouchswipe=t,h.mouse===!0){const s=h.mouseCapture===!0||h.mousecapture===!0?"Capture":"";H(t,"main",[[e,"mousedown","mouseStart",`passive${s}`]])}E.has.touch===!0&&H(t,"main",[[e,"touchstart","touchStart",`passive${h.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const d=e.__qtouchswipe;d!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&d.end(),d.handler=r.value),d.direction=se(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(Z(r,"main"),Z(r,"temp"),E.is.firefox===!0&&W(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}});const Ze={name:{required:!0},disable:Boolean},re={setup(e,{slots:r}){return()=>y("div",{class:"q-panel scroll",role:"tabpanel"},ae(r.default))}},Je={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},et=["update:modelValue","beforeTransition","transition"];function tt(){const{props:e,emit:r,proxy:d}=ce(),{getCacheWithFn:h}=Qe();let l,t;const s=K(null),v=K(null);function b(a){const c=e.vertical===!0?"up":"left";q((d.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const o=g(()=>[[je,b,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),m=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),_=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),u=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),n=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),p=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),B=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);ne(()=>e.modelValue,(a,c)=>{const x=I(a)===!0?$(a):-1;t!==!0&&V(x===-1?0:x<$(c)?-1:1),s.value!==x&&(s.value=x,r("beforeTransition",a,c),_e(()=>{r("transition",a,c)}))});function P(){q(1)}function Q(){q(-1)}function A(a){r("update:modelValue",a)}function I(a){return a!=null&&a!==""}function $(a){return l.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function F(){return l.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function V(a){const c=a!==0&&e.animated===!0&&s.value!==-1?"q-transition--"+(a===-1?m.value:_.value):null;v.value!==c&&(v.value=c)}function q(a,c=s.value){let x=c+a;for(;x>-1&&x<l.length;){const k=l[x];if(k!==void 0&&k.props.disable!==""&&k.props.disable!==!0){V(a),t=!0,r("update:modelValue",k.props.name),setTimeout(()=>{t=!1});return}x+=a}e.infinite===!0&&l.length>0&&c!==-1&&c!==l.length&&q(a,a===-1?l.length:-1)}function M(){const a=$(e.modelValue);return s.value!==a&&(s.value=a),!0}function z(){const a=I(e.modelValue)===!0&&M()&&l[s.value];return e.keepAlive===!0?[y(be,p.value,[y(B.value===!0?h(n.value,()=>({...re,name:n.value})):re,{key:n.value,style:u.value},()=>a)])]:[y("div",{class:"q-panel scroll",style:u.value,key:n.value,role:"tabpanel"},[a])]}function f(){if(l.length!==0)return e.animated===!0?[y(he,{name:v.value},z)]:z()}function T(a){return l=ye(ae(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&I(c.props.name)===!0),l.length}function L(){return l}return Object.assign(d,{next:P,previous:Q,goTo:A}),{panelIndex:s,panelDirectives:o,updatePanelsList:T,updatePanelIndex:M,getPanelContent:f,getEnabledPanels:F,getPanels:L,isValidPanelName:I,keepAliveProps:p,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:q,goToPanel:A,nextPanel:P,previousPanel:Q}}var le=de({name:"QCarouselSlide",props:{...Ze,imgSrc:String},setup(e,{slots:r}){const d=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>y("div",{class:"q-carousel__slide",style:d.value},ae(r.default))}});const nt=["top","right","bottom","left"],at=["regular","flat","outline","push","unelevated"];var ue=de({name:"QCarousel",props:{...xe,...Je,...Fe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>at.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>nt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ze,...et],setup(e,{slots:r}){const{proxy:{$q:d}}=ce(),h=we(e,d);let l=null,t;const{updatePanelsList:s,getPanelContent:v,panelDirectives:b,goToPanel:o,previousPanel:m,nextPanel:_,getEnabledPanels:u,panelIndex:n}=tt(),{inFullscreen:p}=He(),B=g(()=>p.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=g(()=>e.vertical===!0?"vertical":"horizontal"),Q=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(p.value===!0?" fullscreen":"")+(h.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${F.value}`:"")),A=g(()=>{const f=[e.prevIcon||d.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||d.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&d.lang.rtl===!0?f.reverse():f}),I=g(()=>e.navigationIcon||d.iconSet.carousel.navigationIcon),$=g(()=>e.navigationActiveIcon||I.value),F=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),V=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));ne(()=>e.modelValue,()=>{e.autoplay&&q()}),ne(()=>e.autoplay,f=>{f?q():l!==null&&(clearTimeout(l),l=null)});function q(){const f=Pe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,f>=0?_():m()},f)}qe(()=>{e.autoplay&&q()}),Se(()=>{l!==null&&clearTimeout(l)});function M(f,T){return y("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${f} q-carousel__navigation--${F.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[y("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},u().map(T))])}function z(){const f=[];if(e.navigation===!0){const T=r["navigation-icon"]!==void 0?r["navigation-icon"]:a=>y(J,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),L=t-1;f.push(M("buttons",(a,c)=>{const x=a.props.name,k=n.value===c;return T({index:c,maxIndex:L,name:x,active:k,btnProps:{icon:k===!0?$.value:I.value,size:"sm",...V.value},onClick:()=>{o(x)}})}))}else if(e.thumbnails===!0){const T=e.controlColor!==void 0?` text-${e.controlColor}`:"";f.push(M("thumbnails",L=>{const a=L.props;return y("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+T,src:a.imgSrc||a["img-src"],onClick:()=>{o(a.name)}})}))}return e.arrows===!0&&n.value>=0&&((e.infinite===!0||n.value>0)&&f.push(y("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[y(J,{icon:A.value[0],...V.value,onClick:m})])),(e.infinite===!0||n.value<t-1)&&f.push(y("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[y(J,{icon:A.value[1],...V.value,onClick:_})]))),Ie(r.control,f)}return()=>(t=s(r),y("div",{class:Q.value,style:B.value},[Ce("div",{class:"q-carousel__slides-container"},v(),"sl-cont",e.swipeable,()=>b.value)].concat(z())))}});const D=e=>(Ee("data-v-70e12af6"),e=e(),Ne(),e),ot={class:"container"},st={class:"breadcrumbs"},it={class:"row q-mt-xl"},rt={class:"col-4"},lt={class:"info-area q-mb-lg"},ut={class:"introduce column"},ct=D(()=>i("div",{class:"header text-h6 q-mb-md"},"\u904A\u6232\u4ECB\u7D39",-1)),dt={class:"text-h4 text-accent q-mb-md"},mt=["innerHTML"],vt={class:"icon_area flex column q-gutter-sm q-mt-md text-h6"},pt={class:"flex items-center"},ft={class:"mainImages-area"},gt={class:"col-8"},_t={class:"component-area q-mb-lg"},ht={class:"component column"},yt=D(()=>i("div",{class:"header text-h6 q-mb-md"},"\u5167\u5BB9\u7269\u4ECB\u7D39",-1)),bt={class:"component_carousel"},xt=["innerHTML"],wt={class:"gameflow-area q-mb-lg"},Pt={class:"gameflow column"},qt=D(()=>i("div",{class:"header text-h6 q-mb-md"},"\u904A\u6232\u6D41\u7A0B",-1)),St=["innerHTML"],Ct={class:"endgame-area q-mb-lg"},It={class:"endgame column"},Tt=D(()=>i("div",{class:"header text-h6 q-mb-md"},"\u7D50\u675F\u904A\u6232",-1)),kt=["innerHTML"],Bt={id:"also_like"},Vt={class:"row"},At={class:"col-12"},$t=D(()=>i("div",{class:"title text-h4"},"YOU MAY ALSO LIKE",-1)),Mt={class:"q-mt-lg"},Lt={__name:"BGInfoPage",setup(e){const r=Oe(),d=ke(),h=Be(),l=Ke(),{getPostBoardgames:t}=l,{boardgames:s}=Ve(l);t();const v=[Ue];K(0);const b=K([0,0]),o=Ae({_id:"",introduction:"",name:"",cardImage:"",mainImages:[],types:[],players:"",gameTime:5,age:4,ytVideo:"",componentImages:[],componentTexts:"",setup:"",gameFlow:"",endGame:"",post:!0}),m=g(()=>s.value.filter(_=>_._id!==o._id&&_.types.some(u=>o.types.includes(u))));return(async()=>{var _,u;try{const{data:n}=await $e.get("/boardgames/"+d.params.id);o._id=n.result._id,o.introduction=n.result.introduction,o.name=n.result.name,o.cardImage=n.result.cardImage,o.mainImages=n.result.mainImages,o.types=n.result.types,o.players=n.result.players,o.gameTime=n.result.gameTime,o.age=n.result.age,o.ytVideo=n.result.ytVideo,o.componentImages=n.result.componentImages,o.componentTexts=n.result.componentTexts,o.setup=n.result.setup,o.gameFlow=n.result.gameFlow,o.endGame=n.result.endGame,o.post=n.result.post,document.title="\u63EA\u904A | "+o.name}catch(n){r.notify({position:"top",message:((u=(_=n==null?void 0:n.response)==null?void 0:_.data)==null?void 0:u.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"}),h.go(-1)}})(),(_,u)=>(S(),N(Ge,{id:"bg_info",padding:""},{default:C(()=>[i("div",ot,[i("div",st,[w(me,null,{separator:C(()=>[w(G,{size:"1.5em",name:"chevron_right"})]),default:C(()=>[w(X,{icon:"mdi-home",to:"/"}),w(X,{label:"\u63A2\u7D22\u684C\u904A",to:"/exploreBGs"}),w(X,{label:o.name},null,8,["label"])]),_:1})]),i("section",it,[i("div",rt,[i("div",lt,[i("div",ut,[ct,i("div",dt,O(o.name),1),i("div",{innerHTML:o.introduction},null,8,mt),i("div",vt,[i("div",pt,[w(G,{class:"q-mr-sm",name:"mdi-google-downasaur",size:"sm"}),(S(!0),Y(U,null,R(o.types,(n,p)=>(S(),N(De,{class:"type_tag",key:p,color:"secondary","text-color":"white",size:"md"},{default:C(()=>[ee(" #"+O(n),1)]),_:2},1024))),128))]),i("div",null,[w(G,{name:"mdi-account-group q-mr-sm",size:"sm"}),ee(" "+O(o.players)+" \u4EBA ",1)]),i("div",null,[w(G,{name:"mdi-timer-sand q-mr-sm",size:"sm"}),ee(" \u7D04 "+O(o.gameTime)+" \u5206\u9418 ",1)])])]),i("div",ft,[w(ue,{swipeable:"",animated:"",modelValue:b.value[1],"onUpdate:modelValue":u[0]||(u[0]=n=>b.value[1]=n),thumbnails:"",infinite:""},{default:C(()=>[(S(!0),Y(U,null,R(o.mainImages,(n,p)=>(S(),N(le,{key:p,name:p,"img-src":n},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])])])]),i("div",gt,[i("div",_t,[i("div",ht,[yt,i("div",bt,[w(ue,{swipeable:"",animated:"",modelValue:b.value[0],"onUpdate:modelValue":u[1]||(u[1]=n=>b.value[0]=n),thumbnails:"",infinite:""},{default:C(()=>[(S(!0),Y(U,null,R(o.componentImages,(n,p)=>(S(),N(le,{key:p,name:p,"img-src":n},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])]),i("div",{class:"q-mt-lg",innerHTML:o.componentTexts},null,8,xt)])]),i("div",wt,[i("div",Pt,[qt,i("div",{innerHTML:o.gameFlow},null,8,St)])]),i("div",Ct,[i("div",It,[Tt,i("div",{innerHTML:o.endGame},null,8,kt)])])])]),i("section",Bt,[i("div",Vt,[i("div",At,[$t,i("div",Mt,[w(te(Ye),{class:"mySwiper",modules:v,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:30,breakpoints:{576:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:40},1500:{slidesPerView:4,spaceBetween:50}}},{default:C(()=>[(S(!0),Y(U,null,R(te(m),n=>(S(),N(te(Re),{key:n},{default:C(()=>[w(Xe,Me(Le(n)),null,16)]),_:2},1024))),128))]),_:1})])])])])])]),_:1}))}};var Kt=Te(Lt,[["__scopeId","data-v-70e12af6"]]);export{Kt as default};
