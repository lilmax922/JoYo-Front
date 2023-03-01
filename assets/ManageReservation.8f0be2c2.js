import{a8 as h,$ as x,r as y,j as w,a0 as P,a1 as l,l as i,d as a,aq as V,Y as k,a9 as r,aa as m,bg as C,a3 as R,b9 as S,a4 as c,U as D,aR as B,bD as U}from"./index.17eb0914.js";import{Q as j,a as q}from"./QTable.c7fe9622.js";import{Q as I}from"./QSlider.63f5991a.js";import{Q as T}from"./QCardActions.6c0bf558.js";import{Q as $}from"./QPage.c8eb9aeb.js";import{u as z}from"./reservation.06d76e00.js";import"./QSelect.58ffe984.js";import"./QChip.47286114.js";import"./format.3e32b8d9.js";import"./QCheckbox.05f67b78.js";import"./use-fullscreen.d7571153.js";import"./use-slider.5983c6f8.js";import"./TouchPan.8cc694e6.js";import"./touch.70a9dd44.js";const A={class:"container"},F={class:"row"},L={class:"col-12"},M=i("div",{class:"text-h4 text-center"},"\u7DE8\u8F2F\u9810\u7D04",-1),N=i("div",{class:"text-subtitle1"},"\u9810\u7D04\u4EBA\u6578",-1),se={__name:"ManageReservation",setup(Y){const u=z(),{getAllReservations:p,deleteReservation:f,submitReservation:_}=u,{reservations:n}=h(u);p();const t=x({_id:"",date:Date,time:"",hour:0,totalPeople:0,loading:!1,dialog:!1}),d=y(""),g=[{name:"reserver",label:"\u9810\u7D04\u4EBA",field:e=>e.reserver.nickname,align:"left",sortable:!0},{name:"phone",label:"\u806F\u7D61\u96FB\u8A71",field:e=>e.reserver.phone,align:"left",sortable:!0},{name:"date",label:"\u65E5\u671F",field:e=>new Date(e.date).toLocaleDateString(),align:"left",sortable:!0},{name:"time",label:"\u6642\u9593",field:e=>e.time,align:"left",sortable:!0},{name:"hour",label:"\u6642\u6578",field:e=>e.hour,align:"left",sortable:!0},{name:"totalPeople",label:"\u4EBA\u6578",field:e=>e.totalPeople,align:"left",sortable:!0},{name:"edit",label:"\u7DE8\u8F2F/\u522A\u9664",field:e=>e.edit,align:"center"},{headerStyle:"font-size 20px"}],v=e=>{const o=n.value.findIndex(s=>s._id===e);t._id=n.value[o]._id,t.totalPeople=n.value[o].totalPeople,t.dialog=!0},b=async()=>{t.loading=!0,await _({_id:t._id,totalPeople:t.totalPeople}),t.loading=!1,t.dialog=!1};return(e,o)=>(w(),P($,{id:"manage_reservation",padding:""},{default:l(()=>[i("div",A,[i("div",F,[i("div",L,[a(q,{class:"table",title:"\u9810\u7D04\u7BA1\u7406",rows:m(n),columns:g,"row-key":"_id","rows-per-page-options":[10,15,0],filter:d.value},{"top-right":l(()=>[a(V,{debounce:"300",modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=s=>d.value=s),placeholder:"Search"},{append:l(()=>[a(k,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-edit":l(s=>[a(j,{class:"text-center q-gutter-sm"},{default:l(()=>[a(r,{icon:"mdi-pencil",color:"info","fab-mini":"",unelevated:"",size:"sm",onClick:Q=>v(s.row._id)},null,8,["onClick"]),a(r,{icon:"delete",color:"secondary","fab-mini":"",unelevated:"",onClick:Q=>m(f)(s.row._id)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])]),a(B,{modelValue:t.dialog,"onUpdate:modelValue":o[2]||(o[2]=s=>t.dialog=s),persistent:""},{default:l(()=>[a(C,{class:"edit_dialog",container:""},{default:l(()=>[a(R,null,{default:l(()=>[a(S,{onSubmit:b},{default:l(()=>[a(c,{class:"flex justify-end"},{default:l(()=>[D(a(r,{push:"",dense:"",icon:"mdi-close"},null,512),[[U]])]),_:1}),M,a(c,null,{default:l(()=>[N,a(I,{modelValue:t.totalPeople,"onUpdate:modelValue":o[1]||(o[1]=s=>t.totalPeople=s),markers:"","marker-labels":"","thumb-color":"secondary",min:1,max:10},null,8,["modelValue"])]),_:1}),a(T,{class:"flex justify-center q-pa-md"},{default:l(()=>[a(r,{class:"submit_btn text-center",type:"submit",label:"\u78BA\u8A8D\u4FEE\u6539",loading:t.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{se as default};