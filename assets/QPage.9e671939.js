import{A as g,ae as t,c as r,h,B as p,g as d,i as s,af as f,ag as y}from"./index.a99e079c.js";var C=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:o}}=d(),e=s(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(s(y,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=r(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=r(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:c.value},p(i.default))}});export{C as Q};
