import{_ as F,b8 as L,a8 as x,r as N,$ as D,c as S,b3 as J,j as r,a0 as _,a1 as o,b4 as Y,b5 as E,a9 as H,l as a,d as s,Y as u,a3 as U,a4 as y,ak as $,a6 as l,R as G,k,a2 as Q,F as B,aa as I,ab as h,b9 as K,a5 as M,ac as W,ad as X,s as Z,t as ee,ai as T}from"./index.26c2bba1.js";import{Q as v,a as te}from"./QBreadcrumbs.4a972d15.js";import{Q as ae}from"./QChip.4c7734c3.js";import{Q as se}from"./QPage.eb973d68.js";import{S as oe,a as ie}from"./swiper-slide.86f0b63f.js";import{A as le}from"./pagination.min.46c2a0f4.js";import{u as ne}from"./teamup.dbb4447d.js";import{T as ce}from"./TeamupCard.f02ade70.js";const re=f=>(Z("data-v-e3f74d3a"),f=f(),ee(),f),de={class:"container"},ue={class:"breadcrumb"},pe={id:"teamup_form"},me={class:"q-mb-lg"},_e={class:"nickname_area"},fe={class:"nickname"},ge={class:"title_area q-mt-md"},he={class:"text-h2"},ye={class:"content_area"},ve={class:"text-h4"},we={class:"icon_area q-mt-lg"},be={class:"type"},Pe={class:"date flex items-center"},xe={class:"time flex items-center"},Se={class:"people flex items-center"},ke={id:"search_for"},Qe={class:"row"},Be={class:"col-12"},Ie=re(()=>a("div",{class:"title text-h4"},"YOU MAY LOOKING FOR",-1)),Te={class:"q-mt-lg"},qe={__name:"JoinTeamupPage",setup(f){const q=Y(),C=E(),d=H(),w=L(),b=ne(),{isLoginHandler:z}=w,{getAllTeamups:V}=b,{_id:p}=x(w),{teamups:P}=x(b);V();const O=[le],g=N(!1),e=D({_id:P._id||"",organizer:"",participant:[],date:"",time:"",hour:1,currentPeople:1,totalPeople:1,cardImage:void 0,types:[],title:"",content:"",loading:!1}),R=S(()=>P.value.filter(i=>i._id!==e._id&&i.types.some(n=>e.types.includes(n))));(async()=>{var i,n;try{const{data:t}=await J.get("/teamups/"+q.params.id);e._id=t.result._id,e.organizer=t.result.organizer,e.participant=t.result.participant,e.date=t.result.date,e.time=t.result.time,e.hour=t.result.hour,e.currentPeople=t.result.currentPeople,e.totalPeople=t.result.totalPeople,e.cardImage=t.result.cardImage,e.types=t.result.types,e.title=t.result.title,e.content=t.result.content,g.value=e.participant.includes(p.value),document.title="\u63EA\u904A | "+e.title}catch(t){d.notify({message:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557",type:"negative",caption:((n=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:n.message)||"\u767C\u751F\u932F\u8AA4",position:"top"}),C.go(-1)}})();const j=S(()=>e.currentPeople===e.totalPeople),A=async()=>{if(p.value===e.organizer._id){d.notify({type:"negative",message:"\u7121\u6CD5\u52A0\u5165\u81EA\u5DF1\u767C\u8D77\u7684\u63EA\u5718"});return}if(!z())return;const i=async()=>{var t,m;try{await T.post("/teamups/"+e._id),d.notify({message:"\u53C3\u52A0\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}catch(c){d.notify({message:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((m=(t=c==null?void 0:c.response)==null?void 0:t.data)==null?void 0:m.message)||"\u767C\u751F\u932F\u8AA4"})}},n=async()=>{var t,m;try{await T.post("/teamups/"+e._id),d.notify({message:"\u53D6\u6D88\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}catch(c){d.notify({message:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((m=(t=c==null?void 0:c.response)==null?void 0:t.data)==null?void 0:m.message)||"\u767C\u751F\u932F\u8AA4"})}};e.participant.includes(p.value)?(e.currentPeople--,await n(),e.participant.splice(e.participant.indexOf(p.value,1)),e.loading=!1,g.value=!1):(e.currentPeople++,await i(),e.participant.push(p.value),e.loading=!1,g.value=!0)};return(i,n)=>(r(),_(se,{id:"jointeamup",padding:""},{default:o(()=>[a("div",de,[a("div",ue,[s(te,null,{separator:o(()=>[s(u,{size:"1.5em",name:"chevron_right"})]),default:o(()=>[s(v,{icon:"mdi-home",to:"/"}),s(v,{label:"\u641C\u5C0B\u63EA\u5718",to:"/searchTeamups"}),s(v,{label:e.title},null,8,["label"])]),_:1})]),a("section",pe,[s(K,{onSubmit:A,class:"teamup_wrap q-mt-xl"},{default:o(()=>[s(U,{class:"teamup_card",flat:""},{default:o(()=>[s(y,{class:"q-pa-xl row"},{default:o(()=>[s(y,{class:"col-xs-12 col-lg-5"},{default:o(()=>[s($,{class:"card_img",src:e.cardImage},null,8,["src"])]),_:1}),s(y,{class:"info_area col-xs-12 col-lg-7"},{default:o(()=>[a("div",me,[a("span",_e,[s(u,{name:"mdi-human-greeting"}),a("span",fe,l(e.organizer.nickname),1)])]),a("div",ge,[a("div",he,l(e.title),1)]),s(G,{class:"q-my-lg"}),a("div",ye,[a("div",ve,l(e.content),1)]),a("div",we,[a("div",be,[s(u,{name:"mdi-google-downasaur",class:"q-pr-sm"}),(r(!0),k(B,null,Q(e.types,t=>(r(),_(ae,{key:t,color:"secondary",size:"md"},{default:o(()=>[M(" #"+l(t),1)]),_:2},1024))),128))]),a("div",Pe,[s(u,{name:"mdi-calendar-clock"}),a("div",null," \xA0 "+l(new Date(e.date).toLocaleDateString()),1)]),a("div",xe,[s(u,{name:"mdi-clock-time-four-outline"}),a("div",null,"\xA0 "+l(e.time),1)]),a("div",Se,[s(u,{name:"mdi-account-group"}),a("div",null," \xA0 "+l(e.currentPeople)+" / "+l(e.totalPeople)+" \u4EBA ",1)]),g.value?(r(),_(I,{key:1,class:"cancelBtn",type:"submit",label:"\u53D6\u6D88\u53C3\u52A0",disable:e.loading},null,8,["disable"])):(r(),_(I,{key:0,class:"joinBtn",type:"submit",label:e.currentPeople===e.totalPeople?"\u4EBA\u6578\u5DF2\u6EFF":"\u53C3\u52A0\u63EA\u5718",disable:h(j)},null,8,["label","disable"]))])]),_:1})]),_:1})]),_:1})]),_:1})]),a("section",ke,[a("div",Qe,[a("div",Be,[Ie,a("div",Te,[s(h(oe),{class:"mySwiper",modules:O,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:30,breakpoints:{576:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:40},1500:{slidesPerView:4,spaceBetween:50}}},{default:o(()=>[(r(!0),k(B,null,Q(h(R),t=>(r(),_(h(ie),{key:t},{default:o(()=>[s(ce,W(X(t)),null,16)]),_:2},1024))),128))]),_:1})])])])])])]),_:1}))}};var Le=F(qe,[["__scopeId","data-v-e3f74d3a"]]);export{Le as default};
