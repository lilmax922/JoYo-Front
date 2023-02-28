import{_ as y,j as n,k as o,l as a,m as c,n as m,p as u,q as _,s as w,t as V,f as S}from"./index.f4a3cd01.js";let f=0;const D={name:"VImageInput",emits:["update:modelValue","error:fileSize","error:fileType"],props:{modelValue:{type:[Object,String,null]},removable:{type:Boolean,required:!1,default:!1},maxFileSize:{type:Number,required:!1,default:10},acceptedTypes:{type:Array,required:!1,default:()=>["png","svg","jpg","jpeg"]}},data(){return f+=1,{uid:`image-input${f}`,isDragOver:!1,imgSrc:null}},computed:{acceptedTypesString(){return this.acceptedTypes.map(t=>`.${t}`).join(", ")}},watch:{modelValue:{immediate:!0,handler(t){if(!t||typeof this.modelValue=="string")this.imgSrc=t;else{const e=new FileReader;e.onload=l=>{this.imgSrc=l.target.result},e.readAsDataURL(t)}}}},methods:{isValidFileType(t){const e=t.name.toLowerCase().split("."),l=e[e.length-1];return this.acceptedTypes.map(s=>s.toLowerCase()).includes(l)},isValidFileSize(t){const e=t.size/1024/1024;return this.maxFileSize>e},handleFileDrop(t){const e=t.dataTransfer.files[0];if(!!e){if(!this.isValidFileType(e))return this.$emit("error:fileType");if(!this.isValidFileSize(e))return this.$emit("error:fileSize");this.$emit("update:modelValue",e),this.isDragOver=!1}},handleFileInput(t){const e=t.target.files[0];if(!!e){if(!this.isValidFileType(e))return this.$emit("error:fileType");if(!this.isValidFileSize(e))return this.$emit("error:fileSize");this.$emit("update:modelValue",e)}},removeImage(){this.$emit("update:modelValue",null)},onDragOver(){this.isDragOver=!0},onDragLeave(){this.isDragOver=!1}}},g=t=>(w("data-v-2b68f94a"),t=t(),V(),t),I={key:0,class:"wrapper"},b=["for"],x=g(()=>a("svg",{class:"input-icon",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",fill:"currentColor",viewBox:"0 0 460.002 460.002","xml:space":"preserve"},[a("path",{d:`M427.137,0H32.865C14.743,0,0,14.743,0,32.865v408.543c0,10.253,8.341,18.594,18.594,18.594h408.543
            c18.122,0,32.865-14.743,32.865-32.865V32.865C460.002,14.743,445.259,0,427.137,0z M139.001,56.001c39.149,0,71,31.851,71,71
            s-31.851,71-71,71c-39.149,0-71-31.851-71-71C68.001,87.852,99.852,56.001,139.001,56.001z M405.24,393.215
            c-2.634,4.801-7.675,7.786-13.151,7.786H67.913c-5.477,0-10.518-2.984-13.151-7.786c-2.634-4.802-2.442-10.657,0.501-15.275
            l77.092-120.984c2.754-4.322,7.524-6.939,12.65-6.939s9.896,2.617,12.65,6.939l37.029,58.111l72.346-113.536
            c2.754-4.323,7.524-6.939,12.65-6.939c5.125,0,9.896,2.617,12.65,6.939L404.739,377.94
            C407.682,382.559,407.874,388.414,405.24,393.215z`})],-1)),z={key:1,class:"wrapper"},F=["for"],T=["src"],C=g(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor"},[a("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"})],-1)),L=["id","value","accept"];function O(t,e,l,h,s,r){return n(),o("div",{class:"image-input",onDragleave:e[2]||(e[2]=(...i)=>r.onDragLeave&&r.onDragLeave(...i)),onDragover:e[3]||(e[3]=u((...i)=>r.onDragOver&&r.onDragOver(...i),["prevent"])),onDrop:e[4]||(e[4]=u((...i)=>r.handleFileDrop&&r.handleFileDrop(...i),["prevent"]))},[l.modelValue?(n(),o("div",z,[a("label",{for:s.uid,class:m([{"is-drag-over":s.isDragOver},"input-label hover-label pointer"])},[a("img",{class:"selected-image",alt:"",src:s.imgSrc},null,8,T)],10,F),l.removable?(n(),o("div",{key:0,onClick:e[0]||(e[0]=u((...i)=>r.removeImage&&r.removeImage(...i),["prevent"])),class:"remove-icon"},[c(t.$slots,"remove-icon",{},()=>[C],!0)])):_("",!0)])):(n(),o("div",I,[a("label",{for:s.uid,class:m(["input-label empty-layout",{"is-drag-over":s.isDragOver}])},[c(t.$slots,"empty-layout",{},()=>[x],!0)],10,b)])),a("input",{type:"file",class:"input",id:s.uid,value:l.modelValue?null:l.modelValue,onChange:e[1]||(e[1]=(...i)=>r.handleFileInput&&r.handleFileInput(...i)),accept:r.acceptedTypesString},null,40,L)],32)}var v=y(D,[["render",O],["__scopeId","data-v-2b68f94a"]]);function p(t){p.installed||(p.installed=!0,t.component("VImageInput",v))}const k={install:p};let d=null;typeof window!="undefined"?d=window.Vue:typeof global!="undefined"&&(d=global.Vue);d&&d.use(k);var j=S(({app:t})=>{t.component("v-image-input",v)});export{j as default};
