import{ah as m,$ as l,ai as n,aj as i}from"./index.135b86f9.js";const w=m("boardgame",()=>{const o=l([]);return{boardgames:o,getPostBoardgames:async()=>{var t,a;try{const{data:e}=await n.get("/boardgames");o.splice(0,o.length,...e.result)}catch(e){i.create({message:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}},getAllBoardgames:async()=>{var t,a;try{const{data:e}=await n.get("/boardgames/all");o.splice(0,o.length,...e.result)}catch(e){i.create({message:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}},deleteBoardgame:async t=>{var a,e;try{await n.patch("/boardgames/delete/"+t,{status:1});const c=o.findIndex(s=>s._id===t);o.splice(c,1),i.create({message:"\u522A\u9664\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}catch(c){i.create({message:"\u8CC7\u6599\u522A\u9664\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((e=(a=c==null?void 0:c.response)==null?void 0:a.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}},submitBoardgame:async(t,a)=>{var e,c;try{if(a===""){const{data:s}=await n.post("/boardgames",t);o.push(s.result),i.create({message:"\u65B0\u589E\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}else{const{data:s}=await n.patch("/boardgames/"+a,t),r=o.findIndex(d=>d._id===a);o[r]=s.result,i.create({message:"\u4FEE\u6539\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}}catch(s){i.create({message:"\u8CC7\u6599\u4E0A\u50B3\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((c=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:c.message)||"\u767C\u751F\u932F\u8AA4"})}}}});export{w as u};
