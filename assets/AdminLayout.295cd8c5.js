import{b8 as S,a8 as j,bf as v,j as d,a0 as L,a1 as e,bg as R,d as a,bh as A,bi as I,bj as D,bk as c,bl as G,l as r,bm as N,bn as _,ak as m,aa as n,a7 as f,S as o,X as t,a5 as l,a6 as i,R as k,W as Q,k as w,a2 as y,F as T,a9 as p,aQ as V,bo as F,bp as H,bq as U,Y as B,U as z,ap as E}from"./index.213d9b47.js";import{Q as M,_ as P,a as W}from"./backImage.7e4eeca6.js";import"./TouchPan.4b9be3d6.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";const X=r("img",{class:"logo",src:U},null,-1),Y={class:"flex items-center justify-end col-xs-8 col-md-3"},J={class:"absolute-bottom bg-transparent"},K={class:"flex items-center"},O=["src"],Z={class:"text-weight-bold text-h5 text-primary q-ml-md"},$={class:"flex justify-end"},ca={__name:"AdminLayout",setup(aa){const b=S(),{avatar:u,nickname:x}=j(b),{logout:g}=b,h=[{icon:"mdi-google-downasaur",text:"\u684C\u904A\u7BA1\u7406",to:"/admin/manageBG"},{icon:"mdi-account-edit",text:"\u5E33\u865F\u7BA1\u7406",to:"/admin/manageAccount"},{icon:"mdi-calendar-edit",text:"\u9810\u7D04\u7BA1\u7406",to:"/admin/manageReservation"},{icon:"mdi-account-group",text:"\u63EA\u5718\u7BA1\u7406",to:"/admin/manageTeamup"}];return(ea,ta)=>{const q=v("router-link"),C=v("router-view");return d(),L(R,{id:"adminlayout",view:"hHh lpR fff"},{default:e(()=>[a(F,{class:"header flex flex-center",reveal:""},{default:e(()=>[a(A,{class:"row",style:{width:"100%"}},{default:e(()=>[a(I,{class:"col-xs-4 col-md-3"},{default:e(()=>[a(q,{to:"/"},{default:e(()=>[X]),_:1})]),_:1}),a(D,{"active-color":"primary",dense:"",class:"gt-md col-md-6 flex items-end"},{default:e(()=>[a(c,{to:"/",label:"\u9996\u9801"}),a(c,{to:"/exploreBGs",label:"\u63A2\u7D22\u684C\u904A"}),a(c,{to:"/searchTeamups",label:"\u63EA\u5718\u7D44\u968A"}),a(c,{to:"/teamup",label:"\u6211\u8981\u63EA\u5718"}),a(c,{to:"/reservation",label:"\u624B\u5200\u9810\u7D04"})]),_:1}),a(G),r("div",Y,[a(N,{class:"q-ml-sm",flat:""},{label:e(()=>[a(_,null,{default:e(()=>[a(m,{src:n(u)},null,8,["src"])]),_:1})]),default:e(()=>[a(f,{class:"q-pa-xs"},{default:e(()=>[a(o,null,{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(_,null,{default:e(()=>[a(m,{src:n(u)},null,8,["src"])]),_:1})]),_:1}),a(t,{class:"flex-center"},{default:e(()=>[l(i(n(x)),1)]),_:1})]),_:1}),a(k),a(Q,{class:"q-pa-sm",overline:""},{default:e(()=>[l("\u6211\u7684\u4E3B\u9801")]),_:1}),(d(),w(T,null,y(h,s=>a(o,{key:s,to:s.to,clickable:""},{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(B,{name:s.icon},null,8,["name"])]),_:2},1024),a(t,null,{default:e(()=>[l(i(s.text),1)]),_:2},1024)]),_:2},1032,["to"])),64)),a(k),a(o,null,{default:e(()=>[a(t,null,{default:e(()=>[a(p,{onClick:n(g),icon:"fa-solid fa-person-walking-arrow-right",label:"\u767B\u51FA",flat:"",dense:""},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{class:"lt-lg",dense:"",flat:"",round:"",icon:"menu"},{default:e(()=>[a(V,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:e(()=>[a(f,{style:{"min-width":"100px"}},{default:e(()=>[a(o,{clickable:"",to:"/"},{default:e(()=>[a(t,null,{default:e(()=>[l("\u9996\u9801")]),_:1})]),_:1}),a(o,{clickable:"",to:"/exploreBGs"},{default:e(()=>[a(t,null,{default:e(()=>[l("\u63A2\u7D22\u684C\u904A")]),_:1})]),_:1}),a(o,{clickable:"",to:"/searchTeamups"},{default:e(()=>[a(t,null,{default:e(()=>[l("\u63EA\u5718\u7D44\u968A")]),_:1})]),_:1}),a(o,{clickable:"",to:"/teamup"},{default:e(()=>[a(t,null,{default:e(()=>[l("\u6211\u8981\u63EA\u5718")]),_:1})]),_:1}),a(o,{clickable:"",to:"/reservation"},{default:e(()=>[a(t,null,{default:e(()=>[l("\u624B\u5200\u9810\u7D04")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),a(W,{class:"drawer","show-if-above":"",width:200,breakpoint:500},{default:e(()=>[a(M,{style:{height:"calc(100% - 150px)","margin-top":"150px"}},{default:e(()=>[a(f,{padding:""},{default:e(()=>[a(Q,{class:"q-pa-sm",overline:""},{default:e(()=>[l("\u5F8C\u53F0\u7DE8\u8F2F")]),_:1}),(d(),w(T,null,y(h,s=>z(a(o,{key:s,to:s.to,clickable:""},{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(B,{name:s.icon},null,8,["name"])]),_:2},1024),a(t,null,{default:e(()=>[l(i(s.text),1)]),_:2},1024)]),_:2},1032,["to"]),[[E]])),64))]),_:1})]),_:1}),a(m,{class:"absolute-top",src:P,style:{height:"150px"}},{default:e(()=>[r("div",J,[r("div",K,[a(_,{class:"q-mb-sm",size:"56px"},{default:e(()=>[r("img",{src:n(u),alt:"avatar"},null,8,O)]),_:1}),r("div",Z,i(n(x)),1)]),r("div",$,[a(p,{onClick:n(g),class:"logout_btn",icon:"fa-solid fa-person-walking-arrow-right",label:"\u767B\u51FA",dense:""},null,8,["onClick"])])])]),_:1})]),_:1}),a(H,null,{default:e(()=>[a(C)]),_:1})]),_:1})}}};export{ca as default};
