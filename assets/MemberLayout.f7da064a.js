import{b8 as S,a8 as j,bf as g,j as d,a0 as I,a1 as a,bg as L,d as e,bh as R,bi as D,bj as M,bk as c,bl as N,l as r,bm as V,bn as _,ak as m,aa as n,a7 as f,S as o,X as t,a5 as l,a6 as u,R as k,W as Q,k as w,a2 as y,F as T,a9 as p,aQ as A,bo as F,bp as G,bq as H,Y as B,U,ap as z}from"./index.17eb0914.js";import{Q as E,_ as P,a as W}from"./backImage.5e3b9b95.js";import"./TouchPan.8cc694e6.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";const X=r("img",{class:"logo",src:H},null,-1),Y={class:"flex items-center justify-end col-xs-8 col-md-3"},J={class:"absolute-bottom bg-transparent"},K={class:"flex items-center"},O=["src"],Z={class:"text-weight-bold text-h5 text-primary q-ml-md"},$={class:"flex justify-end"},ce={__name:"MemberLayout",setup(ee){const b=S(),{avatar:i,nickname:h}=j(b),{logout:x}=b,v=[{icon:"mdi-account-edit",text:"\u6703\u54E1\u8CC7\u6599",to:"/member/myInfo"},{icon:"mdi-google-downasaur",text:"\u6211\u7684\u9810\u7D04",to:"/member/myReservation"},{icon:"mdi-account-group",text:"\u6211\u7684\u63EA\u5718",to:"/member/myTeamup"}];return(ae,te)=>{const q=g("router-link"),C=g("router-view");return d(),I(L,{id:"memberlayout",view:"hHh lpR fff"},{default:a(()=>[e(F,{class:"header flex flex-center",reveal:""},{default:a(()=>[e(R,{class:"row",style:{width:"100%"}},{default:a(()=>[e(D,{class:"col-xs-4 col-md-3"},{default:a(()=>[e(q,{to:"/"},{default:a(()=>[X]),_:1})]),_:1}),e(M,{"active-color":"primary",dense:"",class:"gt-md col-md-6 flex items-end"},{default:a(()=>[e(c,{to:"/",label:"\u9996\u9801"}),e(c,{to:"/exploreBGs",label:"\u63A2\u7D22\u684C\u904A"}),e(c,{to:"/searchTeamups",label:"\u63EA\u5718\u7D44\u968A"}),e(c,{to:"/teamup",label:"\u6211\u8981\u63EA\u5718"}),e(c,{to:"/reservation",label:"\u624B\u5200\u9810\u7D04"})]),_:1}),e(N),r("div",Y,[e(V,{class:"q-ml-sm",flat:""},{label:a(()=>[e(_,null,{default:a(()=>[e(m,{src:n(i)},null,8,["src"])]),_:1})]),default:a(()=>[e(f,{class:"q-pa-xs"},{default:a(()=>[e(o,null,{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(_,null,{default:a(()=>[e(m,{src:n(i)},null,8,["src"])]),_:1})]),_:1}),e(t,{class:"flex-center"},{default:a(()=>[l(u(n(h)),1)]),_:1})]),_:1}),e(k),e(Q,{class:"q-pa-sm",overline:""},{default:a(()=>[l("\u6211\u7684\u4E3B\u9801")]),_:1}),(d(),w(T,null,y(v,s=>e(o,{key:s,to:s.to,clickable:""},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(B,{name:s.icon},null,8,["name"])]),_:2},1024),e(t,null,{default:a(()=>[l(u(s.text),1)]),_:2},1024)]),_:2},1032,["to"])),64)),e(k),e(o,null,{default:a(()=>[e(t,null,{default:a(()=>[e(p,{onClick:n(x),icon:"fa-solid fa-person-walking-arrow-right",label:"\u767B\u51FA",flat:"",dense:""},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{class:"lt-lg",dense:"",flat:"",round:"",icon:"menu"},{default:a(()=>[e(A,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:a(()=>[e(f,{style:{"min-width":"100px"}},{default:a(()=>[e(o,{clickable:"",to:"/"},{default:a(()=>[e(t,null,{default:a(()=>[l("\u9996\u9801")]),_:1})]),_:1}),e(o,{clickable:"",to:"/exploreBGs"},{default:a(()=>[e(t,null,{default:a(()=>[l("\u63A2\u7D22\u684C\u904A")]),_:1})]),_:1}),e(o,{clickable:"",to:"/searchTeamups"},{default:a(()=>[e(t,null,{default:a(()=>[l("\u63EA\u5718\u7D44\u968A")]),_:1})]),_:1}),e(o,{clickable:"",to:"/teamup"},{default:a(()=>[e(t,null,{default:a(()=>[l("\u6211\u8981\u63EA\u5718")]),_:1})]),_:1}),e(o,{clickable:"",to:"/reservation"},{default:a(()=>[e(t,null,{default:a(()=>[l("\u624B\u5200\u9810\u7D04")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),e(W,{"show-if-above":"",width:200,breakpoint:500},{default:a(()=>[e(E,{style:{height:"calc(100% - 150px)","margin-top":"150px"}},{default:a(()=>[e(f,{padding:""},{default:a(()=>[e(Q,{class:"q-pa-sm",overline:""},{default:a(()=>[l("\u6703\u54E1\u7DE8\u8F2F")]),_:1}),(d(),w(T,null,y(v,s=>U(e(o,{key:s,to:s.to,clickable:""},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(B,{name:s.icon},null,8,["name"])]),_:2},1024),e(t,null,{default:a(()=>[l(u(s.text),1)]),_:2},1024)]),_:2},1032,["to"]),[[z]])),64))]),_:1})]),_:1}),e(m,{class:"absolute-top",src:P,style:{height:"150px"}},{default:a(()=>[r("div",J,[r("div",K,[e(_,{class:"q-mb-sm",size:"56px"},{default:a(()=>[r("img",{src:n(i),alt:"avatar"},null,8,O)]),_:1}),r("div",Z,u(n(h)),1)]),r("div",$,[e(p,{onClick:n(x),class:"logout_btn",icon:"fa-solid fa-person-walking-arrow-right",label:"\u767B\u51FA",dense:""},null,8,["onClick"])])])]),_:1})]),_:1}),e(G,null,{default:a(()=>[e(C)]),_:1})]),_:1})}}};export{ce as default};
