import{a8 as T,r as h,$ as C,c as N,j as c,a0 as x,a1 as m,l as e,d as l,Y as d,a9 as p,aq as S,k as u,a2 as y,F as f,aa as z,a5 as I,a6 as U,ar as E}from"./index.0ddb93eb.js";import{Q as g,a as P}from"./QBreadcrumbs.2aa2d361.js";import{Q as $}from"./QSelect.3b8544d3.js";import{Q as F}from"./QChip.529e4f4e.js";import{Q as G}from"./QSlider.ffa69a38.js";import{Q as L}from"./QRange.58c79de7.js";import{Q as R}from"./QPage.25acb277.js";import{_ as b}from"./lodash.a2dc30e9.js";import{u as j}from"./boardgame.09d76691.js";import{_ as D}from"./BoardgameCard.0ac2ecd0.js";import"./format.3e32b8d9.js";import"./use-slider.adc68d5b.js";import"./TouchPan.24f3941b.js";import"./touch.70a9dd44.js";const H={class:"container"},Y={class:"breadcrumb"},A={class:"header flex items-center q-mt-xl"},J=e("div",{class:"header-text text-h3 q-pr-lg"},"\u63A2\u7D22\u684C\u904A",-1),K={class:"boardgameList"},M={class:"search_container bg-dark row"},O={class:"col-sm-12 col-md-12 col-lg-6",style:{"flex-grow":"1"}},W={class:"search-bar col-12 q-mb-sm"},X={class:"flex items-center q-mb-sm"},Z=e("div",{class:"text-h6 q-ml-sm"},"\u95DC\u9375\u5B57\u641C\u5C0B",-1),ee={class:"game-types col-12 q-mb-sm"},se={class:"flex items-center"},te=e("div",{class:"text-h6 q-ml-sm"},"\u684C\u904A\u985E\u578B",-1),le={class:"row flex flex-center"},ae={class:"col-12"},oe={class:"col-sm-12 col-md-12 col-lg-6",style:{"flex-grow":"1"}},re={class:"game_time col-12 q-mb-md"},ie={class:"flex items-center q-mb-sm"},me=e("div",{class:"text-h6 q-ml-sm"},"\u904A\u6232\u6642\u9593",-1),ne={class:"players col-12 q-mb-md"},ce={class:"flex items-center q-mb-sm"},de=e("div",{class:"text-h6 q-ml-sm"},"\u904A\u73A9\u4EBA\u6578",-1),pe={class:"cards_container"},ue={class:"row q-mx-auto"},Ce={__name:"ExploreBGs",setup(_e){const _=j(),{getPostBoardgames:q}=_;q();const{boardgames:V}=T(_),n=h([]),r=h(""),Q=["\u9663\u71DF","\u7B56\u7565","\u5FC3\u6A5F","\u62BD\u8C61","\u5361\u724C","\u6D3E\u5C0D","\u5BB6\u5EAD","\u5152\u7AE5"],t=C({types:["\u9663\u71DF","\u7B56\u7565","\u5FC3\u6A5F","\u62BD\u8C61","\u5361\u724C","\u6D3E\u5C0D","\u5BB6\u5EAD","\u5152\u7AE5"],gameTime:0,players:{min:1,max:10}}),k=()=>{n.value=t.types.map(s=>s)},B=s=>{t.types.splice(s,1),n.value.splice(s,1)},w=N(()=>V.value.filter(s=>{const a=s.players.split("~").map(i=>i.trim());return r.value===""?t.players.min<=s.players.split("~").map(Number)[0]&&t.players.max>=s.players.split("~").map(Number)[1]&&t.gameTime<=s.gameTime&&parseInt(b.intersection(t.types,s.types).length)!==0:t.players.min<=s.players.split("~").map(Number)[0]&&t.players.max>=s.players.split("~").map(Number)[1]&&t.gameTime<=s.gameTime&&parseInt(b.intersection(t.types,s.types).length)!==0&&(a.includes(r.value)||s.name.includes(r.value)||s.gameTime.toString()===r.value)}));return(s,o)=>(c(),x(R,{id:"explore",padding:""},{default:m(()=>[e("div",H,[e("div",Y,[l(P,null,{separator:m(()=>[l(d,{size:"1.5em",name:"chevron_right"})]),default:m(()=>[l(g,{icon:"mdi-home",to:"/"}),l(g,{label:"\u63A2\u7D22\u684C\u904A"})]),_:1})]),e("section",A,[J,l(p,{class:"reservation_btn gt-sm",label:"\u6211\u8981\u9810\u7D04",to:"/reservation"})]),e("section",K,[e("div",M,[e("div",O,[e("div",W,[e("div",X,[l(d,{class:"q-pl-md",name:"mdi-text-search",size:"sm"}),Z]),e("div",null,[l(S,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),name:"search",rounded:"",standout:"",placeholder:"\u8ACB\u8F38\u5165\u95DC\u9375\u5B57",style:{"max-width":"700px"}},{append:m(()=>[l(p,{icon:"search",flat:"",rounded:""})]),_:1},8,["modelValue"])])]),e("div",ee,[e("div",se,[l(d,{class:"q-pl-md",name:"mdi-tag",size:"sm"}),te]),e("div",le,[e("div",ae,[l($,{modelValue:t.types,"onUpdate:modelValue":o[1]||(o[1]=a=>t.types=a),rounded:"",standout:"",multiple:"",options:Q,label:"\u65B0\u589E\u6A19\u7C64","bottom-slots":"",style:{"max-width":"700px"}},{append:m(()=>[l(p,{round:"",dense:"",flat:"",icon:"add",onClick:k})]),_:1},8,["modelValue"])]),e("div",null,[(c(!0),u(f,null,y(n.value,(a,i)=>(c(),x(F,{key:i,modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=v=>n.value=v),color:"secondary","text-color":"white",clickable:"",icon:"mdi-close-circle","icon-color":"white",onClick:v=>B(i)},{default:m(()=>[I(U(a),1)]),_:2},1032,["modelValue","onClick"]))),128))])])])]),e("div",oe,[e("div",re,[e("div",ie,[l(d,{class:"q-pl-md",name:"mdi-timer-sand",size:"sm"}),me]),e("div",null,[l(G,{modelValue:t.gameTime,"onUpdate:modelValue":o[3]||(o[3]=a=>t.gameTime=a),class:"q-px-lg",min:0,max:60,markers:"","marker-labels":"","thumb-color":"secondary",step:10,snap:""},null,8,["modelValue"])])]),e("div",ne,[e("div",ce,[l(d,{class:"q-pl-md",name:"mdi-account-group",size:"sm"}),de]),e("div",null,[l(L,{modelValue:t.players,"onUpdate:modelValue":o[4]||(o[4]=a=>t.players=a),class:"q-px-lg",min:1,max:10,markers:"","marker-labels":"","thumb-color":"secondary",snap:""},null,8,["modelValue"])])])])]),e("div",pe,[e("div",ue,[(c(!0),u(f,null,y(z(w),(a,i)=>(c(),u("div",{class:"col-12 col-md-6 col-lg-4 col-xl-3 flex flex-center q-mb-lg",key:i},[l(D,E({class:"bg_card q-mb-lg"},a),null,16)]))),128))])])])])]),_:1}))}};export{Ce as default};
