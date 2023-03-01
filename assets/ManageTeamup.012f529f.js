import{a8 as k,r as p,$ as T,w as C,j as D,a0 as S,a1 as n,l as i,d as o,aq as U,Y as g,ak as f,a9 as d,aa as _,bg as z,a3 as b,b9 as j,a4 as v,U as F,aR as $,bD as q}from"./index.117b2c87.js";import{Q as B,a as L}from"./QTable.0a4cdeeb.js";import{Q as R}from"./QFile.8c8e9b1e.js";import{Q as h}from"./QSlider.0ca26388.js";import{Q as A}from"./QCardActions.16a14790.js";import{Q as M}from"./QPage.9360651c.js";import{u as N}from"./teamup.4500790c.js";import"./QSelect.b93734ad.js";import"./QChip.44854a0e.js";import"./format.3e32b8d9.js";import"./QCheckbox.29fc3986.js";import"./use-fullscreen.018ff8d7.js";import"./use-slider.25dd3831.js";import"./TouchPan.5b8c697a.js";import"./touch.70a9dd44.js";const E={class:"container"},H={class:"row"},W={class:"col-12"},Y=i("div",{class:"text-h4 text-center"},"\u7DE8\u8F2F\u63EA\u5718\u8CC7\u6599",-1),G=i("div",{class:"text-subtitle1"},"\u63EA\u5718\u5361\u7247\u5716",-1),J={class:"row q-pa-md flex flex-center"},K=i("div",{class:"text-subtitle1"},"\u76EE\u524D\u4EBA\u6578",-1),O=i("div",{class:"text-subtitle1"},"\u63EA\u5718\u4EBA\u6578",-1),ge={__name:"ManageTeamup",setup(X){const m=N(),{getAllTeamups:x,submitTeamup:P,deleteTeamup:Q}=m,{teamups:r}=k(m);x();const s=p(""),a=T({_id:"",organizer:"",participant:[],date:Date,time:"",hour:0,currentPeople:0,totalPeople:0,cardImage:void 0,types:[],title:"",content:"",loading:!1,dialog:!1}),u=p(""),w=[{name:"image",label:"\u63EA\u5718\u5716\u7247",field:e=>e.cardImage,align:"center"},{name:"organizer",label:"\u63EA\u5718\u767C\u8D77\u4EBA",field:e=>e.organizer.nickname,align:"center",sortable:!0},{name:"phone",label:"\u767C\u8D77\u4EBA\u96FB\u8A71",field:e=>e.organizer.phone,align:"center",sortable:!0},{name:"participant",label:"\u53C3\u52A0\u4EBA\u8CC7\u8A0A",field:e=>e.participant,align:"center",sortable:!0,format:(e,t)=>t.participant.map(l=>`${l.nickname} (${l.phone})`).join(`
`)},{name:"date",label:"\u65E5\u671F",field:e=>new Date(e.date).toLocaleDateString(),align:"center",sortable:!0},{name:"time",label:"\u6642\u9593",field:e=>e.time,align:"center",sortable:!0},{name:"hour",label:"\u6642\u6578",field:e=>e.hour,align:"center",sortable:!0},{name:"currentPeople",label:"\u76EE\u524D\u4EBA\u6578",field:e=>e.currentPeople,align:"center",sortable:!0},{name:"totalPeople",label:"\u63EA\u5718\u4EBA\u6578",field:e=>e.totalPeople,align:"center",sortable:!0},{name:"edit",label:"\u7DE8\u8F2F/\u522A\u9664",field:e=>e.edit,align:"center"}],y=(e,t)=>{if(e&&typeof e!="string"&&e.type.startsWith("image/")){const l=new FileReader;l.addEventListener("load",c=>{s.value=c.target.result}),l.readAsDataURL(e)}else typeof t=="object"?t.push(e):s.value=e};C(()=>a.cardImage,e=>{s.value="",y(e,s.value)});const V=e=>{const t=r.value.findIndex(l=>l._id===e);a._id=r.value[t]._id,a.organizer=r.value[t].organizer,a.participant=r.value[t].participant,a.date=r.value[t].date,a.time=r.value[t].time,a.hour=r.value[t].hour,a.currentPeople=r.value[t].currentPeople,a.totalPeople=r.value[t].totalPeople,a.cardImage=r.value[t].cardImage,a.title=r.value[t].title,a.content=r.value[t].content,a.dialog=!0},I=async()=>{a.loading=!0;const e=new FormData;e.append("cardImage",a.cardImage),e.append("currentPeople",a.currentPeople),e.append("totalPeople",a.totalPeople),await P(e,a._id),a.loading=!1,a.dialog=!1};return(e,t)=>(D(),S(M,{id:"manage_reservation",padding:""},{default:n(()=>[i("div",E,[i("div",H,[i("div",W,[o(L,{class:"table",title:"Teamups",rows:_(r),columns:w,"row-key":"_id","rows-per-page-options":[10,15,0],filter:u.value},{"top-right":n(()=>[o(U,{debounce:"300",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=l=>u.value=l),placeholder:"Search"},{append:n(()=>[o(g,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-image":n(l=>[o(f,{src:l.row.cardImage,height:"150px"},null,8,["src"])]),"body-cell-edit":n(l=>[o(B,{class:"text-center q-gutter-sm"},{default:n(()=>[o(d,{icon:"mdi-pencil",color:"info","fab-mini":"",unelevated:"",size:"sm",onClick:c=>V(l.row._id)},null,8,["onClick"]),o(d,{icon:"delete",color:"secondary","fab-mini":"",unelevated:"",onClick:c=>_(Q)(l.row._id)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])]),o($,{modelValue:a.dialog,"onUpdate:modelValue":t[4]||(t[4]=l=>a.dialog=l),persistent:""},{default:n(()=>[o(z,{class:"edit_dialog",container:""},{default:n(()=>[o(b,null,{default:n(()=>[o(j,{onSubmit:I},{default:n(()=>[o(v,{class:"flex justify-end"},{default:n(()=>[F(o(d,{push:"",dense:"",icon:"mdi-close"},null,512),[[q]])]),_:1}),Y,o(v,null,{default:n(()=>[G,o(R,{rounded:"",standout:"",modelValue:a.cardImage,"onUpdate:modelValue":t[1]||(t[1]=l=>a.cardImage=l),"use-chips":"",label:"\u8ACB\u9078\u64C7\u5361\u7247\u5716"},{prepend:n(()=>[o(g,{name:"attach_file"})]),_:1},8,["modelValue"]),i("div",J,[o(b,null,{default:n(()=>[o(f,{class:"text-center",src:s.value,width:"200px",height:"200px"},null,8,["src"])]),_:1})]),K,o(h,{modelValue:a.currentPeople,"onUpdate:modelValue":t[2]||(t[2]=l=>a.currentPeople=l),markers:"","marker-labels":"","thumb-color":"secondary",min:1,max:10},null,8,["modelValue"]),O,o(h,{modelValue:a.totalPeople,"onUpdate:modelValue":t[3]||(t[3]=l=>a.totalPeople=l),markers:"","marker-labels":"","thumb-color":"secondary",min:1,max:10},null,8,["modelValue"])]),_:1}),o(A,{class:"flex justify-center q-pa-md"},{default:n(()=>[o(d,{class:"submit_btn text-center",type:"submit",label:"\u78BA\u8A8D\u4FEE\u6539",loading:a.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{ge as default};
