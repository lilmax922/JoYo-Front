import{_ as m,j as c,k as i,d as e,a1 as t,l as d,ak as p,a4 as n,F as y,a2 as x,a0 as g,a5 as r,a6 as l,R as h,a7 as Q,S as o,X as s,Y as u,a9 as S,a3 as v}from"./index.090b319c.js";import{Q as k}from"./QChip.9481a5d1.js";const z={id:"teamup_card"},C={class:"image_area"},I={class:"types_area q-mb-sm"},q={class:"text-h5 teamup_title"},B={__name:"TeamupCard",props:{_id:{type:String,default:""},date:{type:Date,default:""},time:{type:String,default:""},participant:{type:Array,default(){return[]}},currentPeople:{type:Number,default:1},totalPeople:{type:Number},cardImage:{type:String,default:""},types:{type:Array,default(){return[]}},title:{type:String,default:""}},setup(a){return(T,N)=>(c(),i("div",z,[e(v,{flat:""},{default:t(()=>[d("div",C,[e(p,{ratio:4/3,src:a.cardImage},null,8,["src"])]),e(n,null,{default:t(()=>[d("div",I,[(c(!0),i(y,null,x(a.types,(f,_)=>(c(),g(k,{class:"types_tag",key:_,color:"secondary","text-color":"white",size:"sm"},{default:t(()=>[r(" #"+l(f),1)]),_:2},1024))),128))]),d("div",q,l(a.title),1)]),_:1}),e(h,{inset:""}),e(n,{class:"flex-center",horizontal:""},{default:t(()=>[e(n,{class:"col-8 q-pt-none"},{default:t(()=>[e(Q,null,{default:t(()=>[e(o,{class:"q-pa-none"},{default:t(()=>[e(s,null,{default:t(()=>[e(u,{name:"mdi-calendar-check",size:"xs"})]),_:1}),e(s,{style:{"font-size":"18px"}},{default:t(()=>[r(" \xA0 "+l(new Date(a.date).toLocaleDateString()),1)]),_:1})]),_:1}),e(o,{class:"q-pa-none"},{default:t(()=>[e(s,null,{default:t(()=>[e(u,{name:"mdi-clock-time-four-outline",size:"xs"})]),_:1}),e(s,{style:{"font-size":"18px"}},{default:t(()=>[r(" \xA0 "+l(a.time),1)]),_:1})]),_:1}),e(o,{class:"q-pa-none"},{default:t(()=>[e(s,null,{default:t(()=>[e(u,{name:"mdi-account-group",size:"xs"})]),_:1}),e(s,{style:{"font-size":"18px"}},{default:t(()=>[r(" \xA0 "+l(a.currentPeople)+" / "+l(a.totalPeople)+" \u4EBA ",1)]),_:1})]),_:1})]),_:1})]),_:1}),e(n,{class:"col-4 q-pa-none flex justify-center"},{default:t(()=>[e(S,{class:"moreBtn",to:"/joinTeamup/"+a._id,label:"More"},null,8,["to"])]),_:1})]),_:1})]),_:1})]))}};var P=m(B,[["__scopeId","data-v-11cc84af"]]);export{P as T};
