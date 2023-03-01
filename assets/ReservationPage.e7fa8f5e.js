import{a8 as T,$ as x,c as V,w as q,ai as w,j as m,a0 as p,a1 as i,l as t,d as l,Y as H,b9 as S,a4 as _,k as h,F as j,a2 as C,q as E,aa as Y,a6 as n,a9 as b,a3 as B,a5 as F}from"./index.0bd11aab.js";import{Q as g,a as R}from"./QBreadcrumbs.420dd2b2.js";import{Q as $}from"./QDate.e15120c2.js";import{Q as y}from"./QSlider.fca4204e.js";import{Q as A}from"./QPage.5112d3b0.js";import{u as I}from"./reservation.b24d61df.js";import"./use-cache.b0833c75.js";import"./format.3e32b8d9.js";import"./use-slider.19053a19.js";import"./TouchPan.f88d3fc5.js";import"./touch.70a9dd44.js";const N={class:"container"},U={class:"breadcrumbs"},z=t("section",{class:"notice q-mt-xl"},[t("div",{class:"text-h3 notice-header"},"\u624B\u5200\u9810\u7D04")],-1),L={class:"reservation_card flex justify-center"},G=t("div",{class:"q-pa-lg"},[t("div",{class:"text-h6"},"\u9810\u7D04\u9808\u77E5"),t("p",{class:"q-mt-md"}," 1. \u5047\u65E5\u4F4D\u7F6E\u5982\u9047\u5BA2\u6EFF\u5C07\u4FDD\u7559\uFF11\uFF10\u5206\u9418\uFF0C\u8D85\u904E\u6642\u9593\u81EA\u52D5\u53D6\u6D88\u8A02\u4F4D\u4E0D\u53E6\u884C\u901A\u77E5\uFF0C\u8ACB\u6E96\u6642\u9032\u5834\u3002 "),t("p",null," 2. \u651C\u5E36\u5916\u98DF\u5C07\u914C\u6536\u6BCF\u4EBA\uFF15\uFF10\u5143\u6E05\u6F54\u8CBB\uFF0C\u751F\u65E5\u86CB\u7CD5\u3001\u6C34\u3001\u5B30\u5152\u98DF\u54C1\u9664\u5916\u3002 "),t("p",null," 3. \u8CC7\u6599\u9001\u51FA\u5F8C\u5F85\u9580\u5E02\u78BA\u8A8D\u8A02\u4F4D\u72C0\u6CC1\uFF0C\u4E26\u96FB\u8A71\u56DE\u8986\u8A02\u4F4D\u6210\u529F\u5F8C\u624D\u7B97\u5B8C\u6210\u8A02\u4F4D\u54E6\uFF01\uFF08\u71DF\u696D\u6642\u9593\uFF12\uFF14\uFF28\u5167\u56DE\u8986\uFF09 "),t("p",null,"4. \u5982\u6709\u5176\u4ED6\u554F\u984C\u3001\u7279\u6B8A\u60C5\u6CC1\u53EF\u4F86\u96FB\u806F\u7E6B\u5E97\u5167\u5DE5\u4F5C\u4EBA\u54E1\u3002")],-1),J=t("div",{class:"text-h6"},"\u9810\u7D04\u65E5\u671F",-1),K={class:"row justify-between"},O={key:0,class:"col-xs-12 col-xl-5 q-gutter-md flex justify-center"},W=t("div",{class:"text-h6 q-mt-md"},"\u9810\u7D04\u6642\u6578",-1),X=t("div",{class:"text-h6"},"\u9810\u7D04\u4EBA\u6578",-1),Z=t("div",{class:"confirm_text text-h4 text-center q-pb-xl"},"--- \u9810\u7D04\u78BA\u8A8D ---",-1),ee={class:"flex items-start column"},te={class:"text-h6"},ae={class:"text-h6"},se={class:"text-h6"},le={class:"text-center"},pe={__name:"ReservationPage",setup(oe){const v=I(),{submitReservation:P}=v,{reservations:k}=T(v),u=new Date,D="YYYY-MM-DD",e=x({selectedDate:"",selectedTime:"",selectedHour:1,selectedPeople:1,reserver:"",_id:k._id||"",loading:!1}),r=x([{time:"10:00 AM",available:!0},{time:"11:00 AM",available:!0},{time:"12:00 PM",available:!0},{time:"01:00 PM",available:!0},{time:"02:00 PM",available:!0},{time:"03:00 PM",available:!0},{time:"04:00 PM",available:!0},{time:"05:00 PM",available:!0},{time:"06:00 PM",available:!0},{time:"07:00 PM",available:!0},{time:"08:00 PM",available:!0},{time:"09:00 PM",available:!0}]),M=V(()=>{const c=r.findIndex(a=>a.time===e.selectedTime);if(c>-1){let a=c;for(;r[a]&&r[a].available;)a++;return a-c}else return 12});q(()=>e.selectedDate,async c=>{try{if(!e.selectedDate){r.forEach(o=>(o.available=!1,o));return}e.selectedTime="";const{data:a}=await w.post("/reservations/getdate",{selectedDate:c}),s=[];r.forEach(o=>(o.available=!0,o)),a.result.forEach(o=>{s.push({reservedTime:o.time,reservedHours:o.hour})}),s.forEach(o=>{const f=r.findIndex(d=>d.time===o.reservedTime);for(let d=f;d<=f+o.reservedHours;d++)if(r[d].available=!1,r[d]===r[r.length-1])return})}catch{}});const Q=async()=>{e.loading=!0,await P({_id:e._id,selectedDate:e.selectedDate,selectedTime:e.selectedTime,selectedHour:e.selectedHour,totalPeople:e.selectedPeople}),e.loading=!1};return e.selectedDate=`${u.getFullYear()}-0${u.getMonth()+1}-${u.getDate()}`,(c,a)=>(m(),p(A,{id:"reservation",padding:""},{default:i(()=>[t("div",N,[t("div",U,[l(R,null,{separator:i(()=>[l(H,{name:"chevron_right",size:"1.5em"})]),default:i(()=>[l(g,{icon:"mdi-home",to:"/"}),l(g,{label:"\u624B\u5200\u9810\u7D04"})]),_:1})]),z,t("section",L,[l(B,{class:"card_wrap",flat:""},{default:i(()=>[G,l(S,{class:"q-gutter-md flex flex-center column",onSubmit:Q},{default:i(()=>[l(_,{class:"row flex justify-around"},{default:i(()=>[l(_,{class:"form_area col-xs-12 q-gutter-md"},{default:i(()=>[J,t("div",K,[l($,{class:"col-xs-12 col-xl-7 q-mb-xs-lg q-mb-xl-none",modelValue:e.selectedDate,"onUpdate:modelValue":a[0]||(a[0]=s=>e.selectedDate=s),subtitle:"\u8ACB\u9078\u64C7\u9810\u7D04\u65E5\u671F","text-color":"dark",mask:D,"today-btn":"","navigation-min-year-month":"2023/02","navigation-max-year-month":"2023/12"},null,8,["modelValue"]),e.selectedDate!==""?(m(),h("div",O,[(m(!0),h(j,null,C(r,s=>(m(),p(b,{class:"timeBtn",color:s.time===e.selectedTime?"info":"secondary",onClick:o=>e.selectedTime=s.time,key:s.time,disable:!s.available,"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye"},{default:i(()=>[F(n(s.time),1)]),_:2},1032,["color","onClick","disable"]))),128))])):E("",!0),W,l(y,{class:"col-xs-12",modelValue:e.selectedHour,"onUpdate:modelValue":a[1]||(a[1]=s=>e.selectedHour=s),markers:"","marker-labels":"","thumb-color":"secondary",min:1,max:Y(M)},null,8,["modelValue","max"]),X,l(y,{class:"col-xs-12",modelValue:e.selectedPeople,"onUpdate:modelValue":a[2]||(a[2]=s=>e.selectedPeople=s),markers:"","marker-labels":"","thumb-color":"secondary",min:1,max:10},null,8,["modelValue"])])]),_:1}),l(_,{class:"confirm_area col-xs-12 flex justify-around items-center column"},{default:i(()=>[Z,t("div",ee,[t("p",te," \u6642\u9593: "+n(e.selectedDate)+" "+n(e.selectedTime),1),t("p",ae," \u6642\u6578: "+n(e.selectedHour)+" \u5C0F\u6642 ",1),t("p",se," \u4EBA\u6578: "+n(e.selectedPeople)+" \u4EBA ",1)]),t("div",le,[l(b,{class:"submit_btn",label:"\u9001\u51FA\u9810\u7D04",type:"submit",disable:e.loading},null,8,["disable"])])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1}))}};export{pe as default};
