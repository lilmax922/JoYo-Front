import{a8 as u,j as p,a0 as f,a1 as t,l as r,d as a,aq as _,Y as v,a9 as b,aa as n}from"./index.090b319c.js";import{Q as g,a as y}from"./QTable.bea3adc5.js";import{Q as h}from"./QPage.0fdc9f0c.js";import{u as w}from"./reservation.c8cb37ae.js";import"./QSelect.f9a00f5f.js";import"./QChip.9481a5d1.js";import"./format.3e32b8d9.js";import"./QCheckbox.49b1cda1.js";import"./use-fullscreen.9d4a9d44.js";const Q={class:"container"},R={class:"row"},k={class:"col-12"},N={__name:"MyReservation",setup(V){const s=w(),{getMyReservation:i,deleteMyReservation:d}=s,{reservations:c}=u(s);i();const m=[{name:"date",label:"\u65E5\u671F",field:e=>new Date(e.date).toLocaleDateString(),align:"left",sortable:!0},{name:"time",label:"\u6642\u9593",field:e=>e.time,align:"left",sortable:!0},{name:"hour",label:"\u6642\u6578",field:e=>e.hour,align:"left",sortable:!0},{name:"totalPeople",label:"\u4EBA\u6578",field:e=>e.totalPeople,align:"left",sortable:!0},{name:"delete",label:"\u522A\u9664",field:e=>e.delete,align:"center"}];return(e,o)=>(p(),f(h,{id:"my_reservation",padding:""},{default:t(()=>[r("div",Q,[r("div",R,[r("div",k,[a(y,{class:"table",title:"\u6211\u7684\u9810\u7D04",rows:n(c),columns:m,"row-key":"_id","rows-per-page-options":[10,15,0],filter:e.filter},{"top-right":t(()=>[a(_,{debounce:"300",modelValue:e.filter,"onUpdate:modelValue":o[0]||(o[0]=l=>e.filter=l),placeholder:"Search"},{append:t(()=>[a(v,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-delete":t(l=>[a(g,{class:"text-center q-gutter-sm"},{default:t(()=>[a(b,{icon:"delete",color:"secondary","fab-mini":"",unelevated:"",onClick:B=>n(d)(l.row._id)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])])])]),_:1}))}};export{N as default};
