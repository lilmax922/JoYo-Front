import{a8 as k,r as c,j as Q,a0 as V,a1 as l,l as r,d as t,aq as m,Y as p,a9 as f,aa as s}from"./index.090b319c.js";import{Q as _,a as b}from"./QTable.bea3adc5.js";import{Q as x}from"./QPage.0fdc9f0c.js";import{u as C}from"./teamup.afd3f324.js";import"./QSelect.f9a00f5f.js";import"./QChip.9481a5d1.js";import"./format.3e32b8d9.js";import"./QCheckbox.49b1cda1.js";import"./use-fullscreen.9d4a9d44.js";const M={class:"container"},P={class:"row"},S={class:"col-12"},q={class:"row q-mt-xl"},B={class:"col-12"},z={__name:"MyTeamup",setup(j){const d=C(),{getMyTeamup:g,deleteMyTeamup:v,deleteMyJoinedTeamup:w}=d,{teamups:y,joinedTeamups:h}=k(d);g();const n=c(""),i=c(""),u=[{name:"title",label:"\u63EA\u5718\u6A19\u984C",field:e=>e.title,align:"left"},{name:"date",label:"\u65E5\u671F",field:e=>new Date(e.date).toLocaleDateString(),align:"left",sortable:!0},{name:"time",label:"\u6642\u9593",field:e=>e.time,align:"left",sortable:!0},{name:"hour",label:"\u6642\u6578",field:e=>e.hour,align:"left",sortable:!0},{name:"currentPeople",label:"\u76EE\u524D\u4EBA\u6578",field:e=>e.currentPeople,align:"left",sortable:!0},{name:"totalPeople",label:"\u7E3D\u4EBA\u6578",field:e=>e.totalPeople,align:"left",sortable:!0},{name:"delete",label:"\u522A\u9664",field:e=>e.delete,align:"center"}];return(e,o)=>(Q(),V(x,{id:"my_teamup",padding:""},{default:l(()=>[r("div",M,[r("div",P,[r("div",S,[t(b,{class:"table",title:"\u767C\u8D77\u7684\u63EA\u5718",rows:s(y),columns:u,"row-key":"_id","rows-per-page-options":[10,15,0],filter:n.value},{"top-right":l(()=>[t(m,{debounce:"300",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),placeholder:"Search"},{append:l(()=>[t(p,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-delete":l(a=>[t(_,{class:"text-center q-gutter-sm"},{default:l(()=>[t(f,{icon:"delete",color:"secondary","fab-mini":"",unelevated:"",onClick:T=>s(v)(a.row._id)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])]),r("div",q,[r("div",B,[t(b,{title:"\u53C3\u52A0\u7684\u63EA\u5718",rows:s(h),columns:u,"row-key":"_id","rows-per-page-options":[10,15,0],filter:i.value},{"top-right":l(()=>[t(m,{debounce:"300",modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value=a),placeholder:"Search"},{append:l(()=>[t(p,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-delete":l(a=>[t(_,{class:"text-center q-gutter-sm"},{default:l(()=>[t(f,{icon:"delete",color:"secondary","fab-mini":"",unelevated:"",onClick:T=>s(w)(a.row._id)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])])])]),_:1}))}};export{z as default};
