import{ah as u,$ as p,ai as n,aj as i}from"./index.fa62bada.js";const C=u("teamup",()=>{const c=p([]),m=p([]);async function l(a,o){var e,t;try{if(o===""){const{data:s}=await n.post("/teamups",a);c.push(s.result),i.create({message:"\u63EA\u5718\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}else{const{data:s}=await n.patch("/teamups/"+o,a),d=c.findIndex(r=>r._id===o);c[d]=s.result,i.create({message:"\u4FEE\u6539\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}}catch(s){i.create({message:"\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((t=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}}return{teamups:c,joinedTeamups:m,submitTeamup:l,getAllTeamups:async()=>{var a,o;try{const{data:e}=await n.get("/teamups/all");c.splice(0,c.length,...e.result)}catch(e){i.create({message:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}},getMyTeamup:async()=>{var a,o;try{const{data:e}=await n.get("/teamups/member?people=organizer"),{data:t}=await n.get("/teamups/member?people=participant");c.splice(0,c.length,...e.result),m.splice(0,m.length,...t.result)}catch(e){i.create({message:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}},deleteTeamup:async a=>{var o,e;try{await n.patch("/teamups/delete/"+a);const t=c.findIndex(s=>s._id===a);c.splice(t,1),i.create({message:"\u522A\u9664\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}catch(t){i.create({message:"\u8CC7\u6599\u522A\u9664\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((e=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}},deleteMyTeamup:async a=>{var o,e;try{console.log(a),await n.patch("/teamups/delete/member/"+a);const t=c.findIndex(s=>s._id===a);c.splice(t,1),i.create({message:"\u522A\u9664\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}catch(t){i.create({message:"\u8CC7\u6599\u522A\u9664\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((e=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}},deleteMyJoinedTeamup:async a=>{var o,e;try{await n.post("/teamups/"+a);const t=m.findIndex(s=>s._id===a);m.splice(t,1),i.create({message:"\u522A\u9664\u6210\u529F",textColor:"primary",icon:"mdi-emoticon-happy-outline",color:"white"})}catch(t){i.create({message:"\u8CC7\u6599\u522A\u9664\u5931\u6557",textColor:"secondary",color:"white",icon:"mdi-emoticon-dead-outline",caption:((e=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}}}});export{C as u};
