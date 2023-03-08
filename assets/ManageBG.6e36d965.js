import{aB as We,A as Ee,bE as Ye,L as Xe,bF as Je,bG as xe,bH as Ze,N as et,r as E,c as q,bI as Te,bJ as tt,bv as ot,bK as lt,bL as nt,bM as at,Q as it,bN as st,w as Y,x as we,bO as Ce,b0 as Se,bP as rt,b1 as ze,a_ as qe,E as ut,h as w,I as dt,g as $e,bQ as ct,B as Fe,Z as Ne,aN as mt,aP as He,aL as Ve,aa as O,X as W,Y as K,S as de,bm as ft,M as pt,O as gt,bR as ht,o as vt,v as yt,bS as bt,_ as wt,a8 as kt,$ as se,j as G,a0 as re,a1 as f,a9 as _t,l as h,d as u,aq as Z,ak as ue,ab as D,bf as xt,a3 as F,b9 as Tt,a4 as N,U as Ct,a6 as R,q as St,k as Pe,a2 as Ie,F as Le,aR as zt,bD as qt,s as Vt,t as Pt}from"./index.a99e079c.js";import{Q as It}from"./QToggle.b63e0112.js";import{Q as Oe,a as Lt}from"./QTable.bfd03ea3.js";import{u as Ot,a as Ut,b as Bt}from"./use-fullscreen.12008d3e.js";import{Q as ve}from"./QFile.66a0be33.js";import{Q as H}from"./QCheckbox.64577118.js";import{Q as Et}from"./QRange.5eed4fbd.js";import{Q as $t}from"./QCardActions.ea2582bc.js";import{Q as Ft}from"./QPage.9e671939.js";import{u as Nt}from"./boardgame.e5fadc36.js";import"./QSelect.58b6b680.js";import"./QChip.1b0ce41c.js";import"./format.3e32b8d9.js";import"./use-slider.9e93ebd2.js";import"./TouchPan.9644bd03.js";import"./touch.70a9dd44.js";function Qe(e,t){if(t&&e===t)return null;const l=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(l)===!0)return e;const d=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,m=d.display;return m==="block"||m==="table"?e:Qe(e.parentNode)}function ye(e,t,l){return!e||e===document.body?!1:l===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Re(e,t,l){if(l||(l=document.createRange(),l.selectNode(e),l.setStart(e,0)),t.count===0)l.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(l.setEnd(e,t.count),t.count=0);else for(let d=0;t.count!==0&&d<e.childNodes.length;d++)l=Re(e.childNodes[d],t,l);return l}const Ht=/^https?:\/\//;class Qt{constructor(t,l){this.el=t,this.eVm=l,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(ye(t.anchorNode,this.el,!0)&&ye(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length>0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const l=t.startContainer;return l.nodeType===document.ELEMENT_NODE?l:l.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?Qe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const l=document.createRange(),d=document.getSelection();t!==null?(l.setStart(t.startContainer,t.startOffset),l.setEnd(t.endContainer,t.endOffset),d.removeAllRanges(),d.addRange(l)):(d.selectAllChildren(this.el),d.collapseToEnd())}savePosition(){let t=-1,l;const d=document.getSelection(),m=this.el.parentNode;if(d.focusNode&&ye(d.focusNode,m))for(l=d.focusNode,t=d.focusOffset;l&&l!==m;)l!==this.el&&l.previousSibling?(l=l.previousSibling,t+=l.textContent.length):l=l.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const l=window.getSelection(),d=Re(this.el,{count:this.savedPos});d&&(d.collapse(!1),l.removeAllRanges(),l.addRange(d))}}hasParent(t,l){const d=l?this.parent:this.blockParent;return d!==null?d.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,l,d=this.parent){return d===null?!1:t.includes(d.nodeName.toLowerCase())===!0?!0:l===!0?this.hasParents(t,l,d.parentNode):!1}is(t,l){if(this.selection===null)return!1;switch(t){case"formatBlock":return l==="DIV"&&this.parent===this.el||this.hasParent(l,l==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===l;case"fontName":const d=document.queryCommandValue(t);return d===`"${l}"`||d===l;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const m=document.queryCommandState(t);return l!==void 0?m===l:m}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,l,d=We){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(l)&&this.is(t,l)&&(t="outdent",l=null),l==="PRE"&&this.is(t,"PRE")&&(l="P");else if(t==="print"){d();const m=window.open();m.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),m.print(),m.close();return}else if(t==="link"){const m=this.getParentAttribute("href");if(m===null){const v=this.selectWord(this.selection),c=v?v.toString():"";if(!c.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=Ht.test(c)?c:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(v.getRangeAt(0))}else this.eVm.editLinkUrl.value=m,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),d();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),d();return}document.execCommand(t,!1,l),d()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const l=document.createRange();l.setStart(t.anchorNode,t.anchorOffset),l.setEnd(t.focusNode,t.focusOffset);const d=l.collapsed?["backward","forward"]:["forward","backward"];l.detach();const m=t.focusNode,v=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",d[0],"character"),t.modify("move",d[1],"word"),t.extend(m,v),t.modify("extend",d[1],"character"),t.modify("extend",d[0],"word"),t}}var Rt=Ee({name:"QTooltip",inheritAttrs:!1,props:{...Ye,...Xe,...Je,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:xe},self:{type:String,default:"top middle",validator:xe},offset:{type:Array,default:()=>[14,14],validator:Ze},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...et],setup(e,{slots:t,emit:l,attrs:d}){let m,v;const c=$e(),{proxy:{$q:g}}=c,p=E(null),_=E(!1),x=q(()=>Te(e.anchor,g.lang.rtl)),z=q(()=>Te(e.self,g.lang.rtl)),o=q(()=>e.persistent!==!0),{registerTick:b,removeTick:I}=tt(),{registerTimeout:L}=ot(),{transitionProps:U,transitionStyle:V}=lt(e),{localScrollTarget:B,changeScrollEvent:Q,unconfigureScrollTarget:X}=nt(e,ne),{anchorEl:r,canShow:n,anchorEvents:a}=at({showing:_,configureAnchorEl:he}),{show:T,hide:J}=it({showing:_,canShow:n,handleShow:me,handleHide:fe,hideOnRouteChange:o,processOnMount:!0});Object.assign(a,{delayShow:pe,delayHide:ge});const{showPortal:te,hidePortal:oe,renderPortal:ce}=st(c,p,ie,"tooltip");if(g.platform.is.mobile===!0){const k={anchorEl:r,innerRef:p,onClickOutside(S){return J(S),S.target.classList.contains("q-dialog__backdrop")&&Ne(S),!0}},j=q(()=>e.modelValue===null&&e.persistent!==!0&&_.value===!0);Y(j,S=>{(S===!0?ct:Ce)(k)}),we(()=>{Ce(k)})}function me(k){te(),b(()=>{v=new MutationObserver(()=>A()),v.observe(p.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),A(),ne()}),m===void 0&&(m=Y(()=>g.screen.width+"|"+g.screen.height+"|"+e.self+"|"+e.anchor+"|"+g.lang.rtl,A)),L(()=>{te(!0),l("show",k)},e.transitionDuration)}function fe(k){I(),oe(),le(),L(()=>{oe(!0),l("hide",k)},e.transitionDuration)}function le(){v!==void 0&&(v.disconnect(),v=void 0),m!==void 0&&(m(),m=void 0),X(),Se(a,"tooltipTemp")}function A(){const k=p.value;r.value===null||!k||rt({el:k,offset:e.offset,anchorEl:r.value,anchorOrigin:x.value,selfOrigin:z.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function pe(k){if(g.platform.is.mobile===!0){ze(),document.body.classList.add("non-selectable");const j=r.value,S=["touchmove","touchcancel","touchend","click"].map(M=>[j,M,"delayHide","passiveCapture"]);qe(a,"tooltipTemp",S)}L(()=>{T(k)},e.delay)}function ge(k){g.platform.is.mobile===!0&&(Se(a,"tooltipTemp"),ze(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),L(()=>{J(k)},e.hideDelay)}function he(){if(e.noParentEvent===!0||r.value===null)return;const k=g.platform.is.mobile===!0?[[r.value,"touchstart","delayShow","passive"]]:[[r.value,"mouseenter","delayShow","passive"],[r.value,"mouseleave","delayHide","passive"]];qe(a,"anchor",k)}function ne(){if(r.value!==null||e.scrollTarget!==void 0){B.value=ut(r.value,e.scrollTarget);const k=e.noParentEvent===!0?A:J;Q(B.value,k)}}function ae(){return _.value===!0?w("div",{...d,ref:p,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",d.class],style:[d.style,V.value],role:"tooltip"},Fe(t.default)):null}function ie(){return w(dt,U.value,ae)}return we(le),Object.assign(c.proxy,{updatePosition:A}),ce}});function Ae(e,t,l){t.handler?t.handler(e,l,l.caret):l.runCmd(t.cmd,t.param)}function ke(e){return w("div",{class:"q-editor__toolbar-group"},e)}function je(e,t,l,d=!1){const m=d||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),v=[];if(t.tip&&e.$q.platform.is.desktop){const c=t.key?w("div",[w("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;v.push(w(Rt,{delay:1e3},()=>[w("div",{innerHTML:t.tip}),c]))}return w(O,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:m?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:m&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(c){l&&l(),Ae(c,t,e)}},()=>v)}function At(e,t){const l=t.list==="only-icons";let d=t.label,m=t.icon!==null?t.icon:void 0,v,c;function g(){_.component.proxy.hide()}if(l)c=t.options.map(x=>{const z=x.type===void 0?e.caret.is(x.cmd,x.param):!1;return z&&(d=x.tip,m=x.icon!==null?x.icon:void 0),je(e,x,g,z)}),v=e.toolbarBackgroundClass.value,c=[ke(c)];else{const x=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,z=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,o=t.list==="no-icons";c=t.options.map(b=>{const I=b.disable?b.disable(e):!1,L=b.type===void 0?e.caret.is(b.cmd,b.param):!1;L&&(d=b.tip,m=b.icon!==null?b.icon:void 0);const U=b.htmlTip;return w(de,{active:L,activeClass:x,clickable:!0,disable:I,dense:!0,onClick(V){g(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),Ae(V,b,e)}},()=>[o===!0?null:w(W,{class:L?x:z,side:!0},()=>w(K,{name:b.icon!==null?b.icon:void 0})),w(W,U?()=>w("div",{class:"text-no-wrap",innerHTML:b.htmlTip}):b.tip?()=>w("div",{class:"text-no-wrap"},b.tip):void 0)])}),v=[e.toolbarBackgroundClass.value,z]}const p=t.highlight&&d!==t.label,_=w(ft,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:p?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:p&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:d,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:m,contentClass:v},()=>c);return _}function jt(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(l=>l.cmd==="viewsource")).map(t=>ke(t.map(l=>e.isViewingSource.value&&l.cmd!=="viewsource"?!1:l.type==="slot"?Fe(e.slots[l.slot]):l.type==="dropdown"?At(e,l):je(e,l))))}function Dt(e,t,l,d={}){const m=Object.keys(d);if(m.length===0)return{};const v={default_font:{cmd:"fontName",param:e,icon:l,tip:t}};return m.forEach(c=>{const g=d[c];v[c]={cmd:"fontName",param:g,icon:l,tip:g,htmlTip:`<font face="${g}">${g}</font>`}}),v}function Mt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let l=e.editLinkUrl.value;const d=()=>{e.caret.restore(),l!==e.editLinkUrl.value&&document.execCommand("createLink",!1,l===""?" ":l),e.editLinkUrl.value=null};return[w("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),w("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:l,onInput:m=>{mt(m),l=m.target.value},onKeydown:m=>{if(He(m)!==!0)switch(m.keyCode){case 13:return Ve(m),d();case 27:Ve(m),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),ke([w(O,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),w(O,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:d})])]}}const Gt=Object.prototype.toString,be=Object.prototype.hasOwnProperty,Kt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function Ue(e){if(e!==Object(e)||Kt.has(Gt.call(e))===!0||e.constructor&&be.call(e,"constructor")===!1&&be.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||be.call(e,t)}function De(){let e,t,l,d,m,v,c=arguments[0]||{},g=1,p=!1;const _=arguments.length;for(typeof c=="boolean"&&(p=c,c=arguments[1]||{},g=2),Object(c)!==c&&typeof c!="function"&&(c={}),_===g&&(c=this,g--);g<_;g++)if((e=arguments[g])!==null)for(t in e)l=c[t],d=e[t],c!==d&&(p===!0&&d&&((m=Array.isArray(d))||Ue(d)===!0)?(m===!0?v=Array.isArray(l)===!0?l:[]:v=Ue(l)===!0?l:{},c[t]=De(p,v,d)):d!==void 0&&(c[t]=d));return c}var ee=Ee({name:"QEditor",props:{...pt,...Ot,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...Ut,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur"],setup(e,{slots:t,emit:l,attrs:d}){const{proxy:m,vnode:v}=$e(),{$q:c}=m,g=gt(e,c),{inFullscreen:p,toggleFullscreen:_}=Bt(),x=ht(d,v),z=E(null),o=E(null),b=E(null),I=E(!1),L=q(()=>!e.readonly&&!e.disable);let U,V,B=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),U=window.getComputedStyle(document.body).fontFamily;const Q=q(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),X=q(()=>{const i=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:i,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!L.value,size:"sm"}}),r=q(()=>{const i=c.lang.editor,s=c.iconSet.editor;return{bold:{cmd:"bold",icon:s.bold,tip:i.bold,key:66},italic:{cmd:"italic",icon:s.italic,tip:i.italic,key:73},strike:{cmd:"strikeThrough",icon:s.strikethrough,tip:i.strikethrough,key:83},underline:{cmd:"underline",icon:s.underline,tip:i.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:s.unorderedList,tip:i.unorderedList},ordered:{cmd:"insertOrderedList",icon:s.orderedList,tip:i.orderedList},subscript:{cmd:"subscript",icon:s.subscript,tip:i.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:s.superscript,tip:i.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:y=>y.caret&&!y.caret.can("link"),icon:s.hyperlink,tip:i.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:s.toggleFullscreen,tip:i.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:s.viewSource,tip:i.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:s.quote,tip:i.quote,key:81},left:{cmd:"justifyLeft",icon:s.left,tip:i.left},center:{cmd:"justifyCenter",icon:s.center,tip:i.center},right:{cmd:"justifyRight",icon:s.right,tip:i.right},justify:{cmd:"justifyFull",icon:s.justify,tip:i.justify},print:{type:"no-state",cmd:"print",icon:s.print,tip:i.print,key:80},outdent:{type:"no-state",disable:y=>y.caret&&!y.caret.can("outdent"),cmd:"outdent",icon:s.outdent,tip:i.outdent},indent:{type:"no-state",disable:y=>y.caret&&!y.caret.can("indent"),cmd:"indent",icon:s.indent,tip:i.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:s.removeFormat,tip:i.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:s.hr,tip:i.hr},undo:{type:"no-state",cmd:"undo",icon:s.undo,tip:i.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:s.redo,tip:i.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:s.heading1||s.heading,tip:i.heading1,htmlTip:`<h1 class="q-ma-none">${i.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:s.heading2||s.heading,tip:i.heading2,htmlTip:`<h2 class="q-ma-none">${i.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:s.heading3||s.heading,tip:i.heading3,htmlTip:`<h3 class="q-ma-none">${i.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:s.heading4||s.heading,tip:i.heading4,htmlTip:`<h4 class="q-ma-none">${i.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:s.heading5||s.heading,tip:i.heading5,htmlTip:`<h5 class="q-ma-none">${i.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:s.heading6||s.heading,tip:i.heading6,htmlTip:`<h6 class="q-ma-none">${i.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:s.heading,tip:i.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:s.code,htmlTip:`<code>${i.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:s.size1||s.size,tip:i.size1,htmlTip:`<font size="1">${i.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:s.size2||s.size,tip:i.size2,htmlTip:`<font size="2">${i.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:s.size3||s.size,tip:i.size3,htmlTip:`<font size="3">${i.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:s.size4||s.size,tip:i.size4,htmlTip:`<font size="4">${i.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:s.size5||s.size,tip:i.size5,htmlTip:`<font size="5">${i.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:s.size6||s.size,tip:i.size6,htmlTip:`<font size="6">${i.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:s.size7||s.size,tip:i.size7,htmlTip:`<font size="7">${i.size7}</font>`}}}),n=q(()=>{const i=e.definitions||{},s=e.definitions||e.fonts?De(!0,{},r.value,i,Dt(U,c.lang.editor.defaultFont,c.iconSet.editor.font,e.fonts)):r.value;return e.toolbar.map(y=>y.map(C=>{if(C.options)return{type:"dropdown",icon:C.icon,label:C.label,size:"sm",dense:!0,fixedLabel:C.fixedLabel,fixedIcon:C.fixedIcon,highlight:C.highlight,list:C.list,options:C.options.map(Ke=>s[Ke])};const $=s[C];return $?$.type==="no-state"||i[C]&&($.cmd===void 0||r.value[$.cmd]&&r.value[$.cmd].type==="no-state")?$:Object.assign({type:"toggle"},$):{type:"slot",slot:C}}))}),a={$q:c,props:e,slots:t,inFullscreen:p,toggleFullscreen:_,runCmd:j,isViewingSource:I,editLinkUrl:b,toolbarBackgroundClass:Q,buttonProps:X,contentRef:o,buttons:n,setContent:k};Y(()=>e.modelValue,i=>{B!==i&&(B=i,k(i,!0))});const T=q(()=>e.toolbar&&e.toolbar.length>0),J=q(()=>{const i={},s=y=>{y.key&&(i[y.key]={cmd:y.cmd,param:y.param})};return n.value.forEach(y=>{y.forEach(C=>{C.options?C.options.forEach(s):s(C)})}),i}),te=q(()=>p.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),oe=q(()=>`q-editor q-editor--${I.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(p.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(g.value===!0?" q-editor--dark q-dark":"")),ce=q(()=>[e.contentClass,"q-editor__content",{col:p.value,"overflow-auto":p.value||e.maxHeight}]),me=q(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function fe(){if(o.value!==null){const i=`inner${I.value===!0?"Text":"HTML"}`,s=o.value[i];s!==e.modelValue&&(B=s,l("update:modelValue",s))}}function le(i){if(l("keydown",i),i.ctrlKey!==!0||He(i)===!0){S();return}const s=i.keyCode,y=J.value[s];if(y!==void 0){const{cmd:C,param:$}=y;Ne(i),j(C,$,!1)}}function A(i){S(),l("click",i)}function pe(i){if(o.value!==null){const{scrollTop:s,scrollHeight:y}=o.value;V=y-s}a.caret.save(),l("blur",i)}function ge(i){yt(()=>{o.value!==null&&V!==void 0&&(o.value.scrollTop=o.value.scrollHeight-V)}),l("focus",i)}function he(i){const s=z.value;if(s!==null&&s.contains(i.target)===!0&&(i.relatedTarget===null||s.contains(i.relatedTarget)!==!0)){const y=`inner${I.value===!0?"Text":"HTML"}`;a.caret.restorePosition(o.value[y].length),S()}}function ne(i){const s=z.value;s!==null&&s.contains(i.target)===!0&&(i.relatedTarget===null||s.contains(i.relatedTarget)!==!0)&&(a.caret.savePosition(),S())}function ae(){V=void 0}function ie(i){a.caret.save()}function k(i,s){if(o.value!==null){s===!0&&a.caret.savePosition();const y=`inner${I.value===!0?"Text":"HTML"}`;o.value[y]=i,s===!0&&(a.caret.restorePosition(o.value[y].length),S())}}function j(i,s,y=!0){M(),a.caret.restore(),a.caret.apply(i,s,()=>{M(),a.caret.save(),y&&S()})}function S(){setTimeout(()=>{b.value=null,m.$forceUpdate()},1)}function M(){bt(()=>{o.value!==null&&o.value.focus({preventScroll:!0})})}function Ge(){return o.value}return vt(()=>{a.caret=m.caret=new Qt(o.value,a),k(e.modelValue),S(),document.addEventListener("selectionchange",ie)}),we(()=>{document.removeEventListener("selectionchange",ie)}),Object.assign(m,{runCmd:j,refreshToolbar:S,focus:M,getContentEl:Ge}),()=>{let i;if(T.value){const s=[w("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+Q.value},jt(a))];b.value!==null&&s.push(w("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+Q.value},Mt(a))),i=w("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},s)}return w("div",{ref:z,class:oe.value,style:{height:p.value===!0?"100%":null},...me.value,onFocusin:he,onFocusout:ne},[i,w("div",{ref:o,style:te.value,class:ce.value,contenteditable:L.value,placeholder:e.placeholder,...x.listeners.value,onInput:fe,onKeydown:le,onClick:A,onBlur:pe,onFocus:ge,onMousedown:ae,onTouchstartPassive:ae})])}}});const Wt=["https://www.youtube.com/","https://www.youtube.com/shorts/","http://www.youtube.com/","https://youtube.com/","http://youtube.com/","http://youtu.be/","https://youtu.be/","https://m.youtube.com/","http://m.youtube.com/","m.youtube.com/","https://youtube.com/shorts/I1I1i1i1I1I"],_e=e=>Wt.some(t=>e.includes(t)),Yt=e=>_e(e)&&(e.includes("channel")||e.includes("user")||e.includes("c"))?e.split("/")[4]:null,Me=e=>_e(e)?e.includes("youtu.be")||e.includes("https://www.youtube.com/shorts/")||e.includes("https://youtube.com/shorts/")||e.includes("http://m.youtube.com/shorts/")||e.includes("https://m.youtube.com/shorts/")||e.includes("youtube.com/watch?v=")?!0:!!e.includes("m.youtube.com/watch?v="):!1,Xt=e=>Me(e)?e.includes("youtu.be")?e.split("/")[3]:e.includes("https://www.youtube.com/shorts/")||e.includes("https://youtube.com/shorts/")?e.split("/")[4].split("?")[0]:e.includes("youtube.com")||e.includes("m.youtube.com")?e.split("=")[1]:null:null;var Be={getVideoId:Xt,isValidUrl:_e,getChannelId:Yt,isVideo:Me};const P=e=>(Vt("data-v-085cf3b6"),e=e(),Pt(),e),Jt={class:"container"},Zt={class:"row"},eo={class:"col-12"},to={class:"text-h4 text-center"},oo=P(()=>h("div",{class:"text-h6"},"\u684C\u904A\u540D\u7A31",-1)),lo=P(()=>h("div",{class:"text-h6"},"\u684C\u904A\u4ECB\u7D39",-1)),no={style:{"white-space":"pre-line"}},ao=P(()=>h("div",{class:"text-h6"},"\u684C\u904A\u5361\u7247\u5716",-1)),io={class:"row q-pa-md"},so=P(()=>h("div",{class:"text-h6"},"\u684C\u904A\u4E3B\u5716",-1)),ro={class:"row q-pa-md"},uo=P(()=>h("div",{class:"text-h6 q-pt-md"},"Youtube\u6559\u5B78\u5F71\u7247",-1)),co=P(()=>h("div",{class:"text-h6"},"\u904A\u6232\u6642\u9593",-1)),mo={class:"count flex flex-center col-12"},fo=P(()=>h("div",{class:"text-h6"},"\u9069\u5408\u5E74\u9F61",-1)),po={class:"count flex flex-center col-12"},go=P(()=>h("div",{class:"row items-center"},[h("div",{class:"text-h6 q-mr-sm"},"\u684C\u904A\u985E\u578B?"),h("div",{class:"text-subtitle1"},"(\u53EF\u8907\u9078)")],-1)),ho={class:"q-gutter-lg"},vo=P(()=>h("div",{class:"text-h6"},"\u904A\u73A9\u4EBA\u6578",-1)),yo={class:"text-h6 text-center q-pt-md",color:"secondary"},bo=P(()=>h("div",{class:"text-h6"},"\u5167\u5BB9\u7269\u4ECB\u7D39",-1)),wo={style:{"white-space":"pre-line"}},ko=P(()=>h("div",{class:"text-h6"},"\u5167\u5BB9\u7269\u5716\u7247",-1)),_o={class:"row q-pa-md"},xo=P(()=>h("div",{class:"text-h6"},"\u904A\u6232\u914D\u7F6E",-1)),To={style:{"white-space":"pre-line"}},Co=P(()=>h("div",{class:"text-h6"},"\u904A\u6232\u6D41\u7A0B",-1)),So={style:{"white-space":"pre-line"}},zo=P(()=>h("div",{class:"text-h6"},"\u904A\u6232\u7D50\u675F",-1)),qo={style:{"white-space":"pre-line"}},Vo={__name:"ManageBG",setup(e){const t=_t(),l=Nt(),{deleteBoardgame:d,submitBoardgame:m,getAllBoardgames:v}=l,{boardgames:c}=kt(l);v();const g=E({min:1,max:12}),p=se({camp:{type:!1,label:"\u9663\u71DF"},strategy:{type:!1,label:"\u7B56\u7565"},abstract:{type:!1,label:"\u62BD\u8C61"},crafty:{type:!1,label:"\u5FC3\u6A5F"},card:{type:!1,label:"\u5361\u724C"},party:{type:!1,label:"\u6D3E\u5C0D"},family:{type:!1,label:"\u5BB6\u5EAD"},children:{type:!1,label:"\u5152\u7AE5"}}),_=E(""),x=E([]),z=E([]),o=se({_id:"",introduction:"",name:"",cardImage:void 0,mainImages:[],types:[],players:"",gameTime:0,age:0,ytVideo:"",componentImages:[],componentTexts:"",setup:"",gameFlow:"",endGame:"",post:!1,loading:!1,dialog:!1,index:-1}),b=(r,n)=>{if(r&&typeof r!="string"&&r.type.startsWith("image/")){const a=new FileReader;a.addEventListener("load",T=>{typeof n=="object"?n.push(T.target.result):_.value=T.target.result}),a.readAsDataURL(r)}else typeof n=="object"?n.push(r):_.value=r};Y(()=>o.cardImage,r=>{_.value="",b(r,_.value)}),Y(()=>o.mainImages,r=>{x.value=[],r.forEach(n=>{b(n,x.value)})}),Y(()=>o.componentImages,r=>{z.value=[],r.forEach(n=>{b(n,z.value)})});const I=E(""),L=[{name:"image",label:"\u684C\u904A\u5716",field:r=>r.cardImage,align:"center"},{name:"name",label:"\u684C\u904A\u540D\u7A31",field:r=>r.name,align:"center",sortable:!0},{name:"types",label:"\u985E\u578B",field:r=>r.types,align:"center",sortable:!0,format:r=>r.join(" ")},{name:"post",label:"\u5F35\u8CBC",field:r=>r.post,align:"center",sortable:!0},{name:"edit",label:"\u7DE8\u8F2F/\u522A\u9664",field:r=>r.edit,align:"center"}],U=se([[{label:t.lang.editor.align,icon:t.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:t.lang.editor.align,icon:t.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:t.lang.editor.formatting,icon:t.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:t.lang.editor.fontSize,icon:t.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:t.lang.editor.defaultFont,icon:t.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]]),V=se({arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}),B={required(r){return r&&r.length>0||"\u6B04\u4F4D\u5FC5\u586B"},isYtUrl(r){return Be.isValidUrl(r)||"Youtube \u7DB2\u5740\u932F\u8AA4"},gameTime(r){return r&&r>=10||"\u4E0D\u5F97\u5C0F\u65BC 10"},age(r){return r&&r>=4||"\u4E0D\u5F97\u5C0F\u65BC 4"}},Q=r=>{const n=c.value.findIndex(a=>a._id===r);r===-1?(o._id="",o.introduction="",o.name="",o.cardImage=void 0,o.mainImages=[],o.types=[],o.players="",o.gameTime=0,o.age=0,o.ytVideo="",o.componentImages=[],o.componentTexts="",o.setup="",o.gameFlow="",o.endGame="",g.value.min=1,g.value.max=12,o.post=!1,o.loading=!1,o.index=-1):(o._id=c.value[n]._id,o.introduction=c.value[n].introduction,o.name=c.value[n].name,o.cardImage=c.value[n].cardImage,o.mainImages=c.value[n].mainImages,o.types=c.value[n].types,o.gameTime=c.value[n].gameTime,o.age=c.value[n].age,o.ytVideo=`https://www.youtube.com/watch?v=${c.value[n].ytVideo}`,o.componentImages=c.value[n].componentImages,o.componentTexts=c.value[n].componentTexts,o.setup=c.value[n].setup,o.gameFlow=c.value[n].gameFlow,o.endGame=c.value[n].endGame,o.post=c.value[n].post,o.loading=!1,o.idx=n,g.value.min=c.value[n].players.split("~")[0],g.value.max=c.value[n].players.split("~")[1]),o.dialog=!0},X=async()=>{o.loading=!0;const r=new FormData;r.append("introduction",o.introduction),r.append("name",o.name),r.append("cardImage",o.cardImage);for(const T of o.mainImages)r.append("mainImages",T);Object.entries(p).forEach(T=>{T[1].type&&r.append("types",T[1].label)});const a=`${g.value.min} ~ ${g.value.max}`;r.append("players",a),r.append("gameTime",o.gameTime),r.append("age",o.age),r.append("ytVideo",Be.getVideoId(o.ytVideo));for(const T of o.componentImages)r.append("componentImages",T);r.append("componentTexts",o.componentTexts),r.append("setup",o.setup),r.append("gameFlow",o.gameFlow),r.append("endGame",o.endGame),r.append("post",o.post),await m(r,o._id),o.loading=!1,o.dialog=!1};return(r,n)=>(G(),re(Ft,{id:"manage_boardgames",padding:""},{default:f(()=>[h("div",Jt,[h("div",Zt,[h("div",eo,[u(Lt,{class:"table",rows:D(c),columns:L,"row-key":"_id",filter:I.value,"rows-per-page-options":[5,10,15,0]},{"top-left":f(()=>[u(O,{class:"add_btn",onClick:n[0]||(n[0]=a=>Q(-1)),label:"\u65B0\u589E\u684C\u904A"})]),"top-right":f(()=>[u(Z,{debounce:"300",modelValue:I.value,"onUpdate:modelValue":n[1]||(n[1]=a=>I.value=a),placeholder:"Search"},{append:f(()=>[u(K,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-image":f(a=>[u(ue,{src:a.row.cardImage,height:"200px"},null,8,["src"])]),"body-cell-post":f(a=>[u(Oe,{class:"text-center"},{default:f(()=>[u(It,{modelValue:a.row.post,"onUpdate:modelValue":T=>a.row.post=T,color:"accent"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),"body-cell-edit":f(a=>[u(Oe,{class:"text-center q-gutter-sm"},{default:f(()=>[u(O,{icon:"edit",color:"info","fab-mini":"",unelevated:"",size:"sm",onClick:T=>Q(a.row._id)},null,8,["onClick"]),u(O,{icon:"delete",color:"secondary","fab-mini":"",unelevated:"",onClick:T=>D(d)(a.row._id)},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])]),u(zt,{modelValue:o.dialog,"onUpdate:modelValue":n[29]||(n[29]=a=>o.dialog=a),persistent:""},{default:f(()=>[u(xt,{class:"edit",container:""},{default:f(()=>[u(F,{flat:""},{default:f(()=>[u(Tt,{onSubmit:X},{default:f(()=>[u(N,{class:"flex justify-end"},{default:f(()=>[Ct(u(O,{push:"",icon:"mdi-close"},null,512),[[qt]])]),_:1}),h("div",to,R(o._id.length>0?"\u7DE8\u8F2F\u684C\u904A":"\u65B0\u589E\u684C\u904A"),1),u(N,{class:"justify-center q-mx-lg"},{default:f(()=>[u(N,null,{default:f(()=>[oo,u(Z,{modelValue:o.name,"onUpdate:modelValue":n[2]||(n[2]=a=>o.name=a),filled:"",label:"\u8ACB\u8F38\u5165\u684C\u904A\u540D\u7A31",clearable:"","clear-icon":"close",rules:[B.required]},null,8,["modelValue","rules"]),lo,u(ee,{modelValue:o.introduction,"onUpdate:modelValue":n[3]||(n[3]=a=>o.introduction=a),dense:D(t).screen.lt.md,toolbar:U,fonts:V,"min-height":"5rem",placeholder:"\u8ACB\u8F38\u5165\u684C\u904A\u4ECB\u7D39"},{default:f(()=>[u(F,{flat:"",bordered:""},{default:f(()=>[u(N,null,{default:f(()=>[h("pre",no,R(o.introduction),1)]),_:1})]),_:1})]),_:1},8,["modelValue","dense","toolbar","fonts"]),ao,u(ve,{filled:"",modelValue:o.cardImage,"onUpdate:modelValue":n[4]||(n[4]=a=>o.cardImage=a),"use-chips":"",label:"\u8ACB\u9078\u64C7\u5361\u7247\u5716(\u55AE\u9078)"},{prepend:f(()=>[u(K,{name:"attach_file"})]),_:1},8,["modelValue"]),h("div",io,[u(F,null,{default:f(()=>[o.cardImage?(G(),re(ue,{key:0,src:_.value,width:"100px"},null,8,["src"])):St("",!0)]),_:1})]),so,u(ve,{filled:"",modelValue:o.mainImages,"onUpdate:modelValue":n[5]||(n[5]=a=>o.mainImages=a),label:"\u8ACB\u9078\u64C7\u4E3B\u5716\u7247(\u53EF\u8907\u9078)","use-chips":"",multiple:""},{prepend:f(()=>[u(K,{name:"attach_file"})]),_:1},8,["modelValue"]),h("div",ro,[(G(!0),Pe(Le,null,Ie(x.value,a=>(G(),re(F,{class:"q-mr-sm",key:a},{default:f(()=>[u(ue,{src:a,width:"100px"},null,8,["src"])]),_:2},1024))),128))]),uo,u(Z,{modelValue:o.ytVideo,"onUpdate:modelValue":n[6]||(n[6]=a=>o.ytVideo=a),type:"url",filled:"",label:"\u8ACB\u8F38\u5165\u5F71\u7247\u7DB2\u5740",clearable:"",rules:[B.isYtUrl]},null,8,["modelValue","rules"]),u(de,null,{default:f(()=>[u(W,{class:"items-center"},{default:f(()=>[co,h("div",mo,[u(O,{class:"remove",icon:"remove",onClick:n[7]||(n[7]=a=>o.gameTime--)}),u(Z,{class:"num",modelValue:o.gameTime,"onUpdate:modelValue":n[8]||(n[8]=a=>o.gameTime=a),rules:[B.gameTime],suffix:"\u5206\u9418"},null,8,["modelValue","rules"]),u(O,{class:"add",icon:"add",onClick:n[9]||(n[9]=a=>o.gameTime++)})])]),_:1}),u(W,{class:"items-center"},{default:f(()=>[fo,h("div",po,[u(O,{class:"remove",icon:"remove",onClick:n[10]||(n[10]=a=>o.age--)}),u(Z,{class:"num",modelValue:o.age,"onUpdate:modelValue":n[11]||(n[11]=a=>o.age=a),rules:[B.age],suffix:"\u6B72"},null,8,["modelValue","rules"]),u(O,{class:"add",icon:"add",onClick:n[12]||(n[12]=a=>o.age++)})])]),_:1})]),_:1}),go,h("div",ho,[u(H,{size:"lg",modelValue:p.camp.type,"onUpdate:modelValue":n[13]||(n[13]=a=>p.camp.type=a),label:p.camp.label},null,8,["modelValue","label"]),u(H,{size:"lg",modelValue:p.strategy.type,"onUpdate:modelValue":n[14]||(n[14]=a=>p.strategy.type=a),label:p.strategy.label},null,8,["modelValue","label"]),u(H,{size:"lg",modelValue:p.abstract.type,"onUpdate:modelValue":n[15]||(n[15]=a=>p.abstract.type=a),label:p.abstract.label},null,8,["modelValue","label"]),u(H,{size:"lg",modelValue:p.crafty.type,"onUpdate:modelValue":n[16]||(n[16]=a=>p.crafty.type=a),label:p.crafty.label},null,8,["modelValue","label"]),u(H,{size:"lg",modelValue:p.card.type,"onUpdate:modelValue":n[17]||(n[17]=a=>p.card.type=a),label:p.card.label},null,8,["modelValue","label"]),u(H,{size:"lg",modelValue:p.party.type,"onUpdate:modelValue":n[18]||(n[18]=a=>p.party.type=a),label:p.party.label},null,8,["modelValue","label"]),u(H,{size:"lg",modelValue:p.family.type,"onUpdate:modelValue":n[19]||(n[19]=a=>p.family.type=a),label:p.family.label},null,8,["modelValue","label"]),u(H,{size:"lg",modelValue:p.children.type,"onUpdate:modelValue":n[20]||(n[20]=a=>p.children.type=a),label:p.children.label},null,8,["modelValue","label"])]),u(de,null,{default:f(()=>[vo]),_:1}),u(de,{class:"items-start"},{default:f(()=>[u(W,{avatar:""},{default:f(()=>[u(K,{name:"mdi-account-group",size:"md"})]),_:1}),u(W,null,{default:f(()=>[u(Et,{modelValue:g.value,"onUpdate:modelValue":n[21]||(n[21]=a=>g.value=a),min:1,max:12,label:"",markers:"","marker-labels":"",snap:""},null,8,["modelValue"]),h("div",yo,R(g.value.min)+" ~ "+R(g.value.max)+" \u4EBA",1)]),_:1})]),_:1})]),_:1}),u(N,{class:"q-gutter-sm"},{default:f(()=>[bo,u(ee,{modelValue:o.componentTexts,"onUpdate:modelValue":n[22]||(n[22]=a=>o.componentTexts=a),dense:D(t).screen.lt.md,toolbar:U,fonts:V,"min-height":"5rem",placeholder:"\u8ACB\u8F38\u5165\u5167\u5BB9\u7269\u4ECB\u7D39"},{default:f(()=>[u(F,{flat:"",bordered:""},{default:f(()=>[u(N,null,{default:f(()=>[h("pre",wo,R(o.componentTexts),1)]),_:1})]),_:1})]),_:1},8,["modelValue","dense","toolbar","fonts"]),ko,u(ve,{filled:"",modelValue:o.componentImages,"onUpdate:modelValue":n[23]||(n[23]=a=>o.componentImages=a),label:"\u9078\u64C7\u5716\u7247(\u53EF\u8907\u9078)","use-chips":"",multiple:""},{prepend:f(()=>[u(K,{name:"attach_file"})]),_:1},8,["modelValue"]),h("div",_o,[(G(!0),Pe(Le,null,Ie(z.value,a=>(G(),re(F,{class:"q-mr-sm",key:a},{default:f(()=>[u(ue,{src:a,width:"100px"},null,8,["src"])]),_:2},1024))),128))]),xo,u(ee,{modelValue:o.setup,"onUpdate:modelValue":n[24]||(n[24]=a=>o.setup=a),dense:D(t).screen.lt.md,toolbar:U,fonts:V,"min-height":"5rem",placeholder:"\u8ACB\u8F38\u5165\u904A\u6232\u914D\u7F6E"},{default:f(()=>[u(F,{flat:"",bordered:""},{default:f(()=>[u(N,null,{default:f(()=>[h("pre",To,R(o.setup),1)]),_:1})]),_:1})]),_:1},8,["modelValue","dense","toolbar","fonts"]),Co,u(ee,{modelValue:o.gameFlow,"onUpdate:modelValue":n[25]||(n[25]=a=>o.gameFlow=a),dense:D(t).screen.lt.md,toolbar:U,fonts:V,"min-height":"5rem",placeholder:"\u8ACB\u8F38\u5165\u904A\u6232\u914D\u7F6E"},{default:f(()=>[u(F,{flat:"",bordered:""},{default:f(()=>[u(N,null,{default:f(()=>[h("pre",So,R(o.gameFlow),1)]),_:1})]),_:1})]),_:1},8,["modelValue","dense","toolbar","fonts"]),zo,u(ee,{modelValue:o.endGame,"onUpdate:modelValue":n[26]||(n[26]=a=>o.endGame=a),dense:D(t).screen.lt.md,toolbar:U,fonts:V,"min-height":"5rem",placeholder:"\u8ACB\u8F38\u5165\u904A\u6232\u914D\u7F6E"},{default:f(()=>[u(F,{flat:"",bordered:""},{default:f(()=>[u(N,null,{default:f(()=>[h("pre",qo,R(o.endGame),1)]),_:1})]),_:1})]),_:1},8,["modelValue","dense","toolbar","fonts"]),u(H,{class:"q-mt-md",label:"\u5F35\u8CBC\u684C\u904A",modelValue:o.post,"onUpdate:modelValue":n[27]||(n[27]=a=>o.post=a),size:"lg",rules:[B.required]},null,8,["modelValue","rules"])]),_:1})]),_:1}),u($t,{class:"flex justify-center q-pb-md q-gutter-md"},{default:f(()=>[u(O,{label:"\u53D6\u6D88",onClick:n[28]||(n[28]=a=>o.dialog=!1),disable:o.loading},null,8,["disable"]),u(O,{class:"submit_btn",label:"\u9001\u51FA",type:"submit",disable:o.loading},null,8,["disable"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};var Mo=wt(Vo,[["__scopeId","data-v-085cf3b6"]]);export{Mo as default};
