import{A as ie,r as R,w as Q,o as Ge,x as oe,h as x,B as Ee,C as se,D as le,E as Ye,G as Ue,H as P,I as Ke,J as Je,K as Ce,L as Xe,M as Ze,N as et,O as tt,P as ce,Q as nt,c as N,g as at,R as de,S as it,U as ot,V as rt,W as ue,X as J,Y as fe,Z as st,$ as lt,j,a0 as D,a1 as q,k as Y,F as te,a2 as ne,d as C,a3 as ct,a4 as dt,a5 as F,a6 as ut,a7 as ft,a8 as me,a9 as mt,l as o,aa as ve,ab as z,q as vt,ac as ge,ad as be}from"./index.26c2bba1.js";import{Q as gt}from"./QPage.eb973d68.js";import{S as he,a as pe}from"./swiper-slide.86f0b63f.js";import{A as bt}from"./pagination.min.46c2a0f4.js";import{u as ht}from"./boardgame.ee1d7305.js";import{u as pt}from"./teamup.dbb4447d.js";import{_ as wt}from"./BoardgameCard.46e72076.js";import{T as yt}from"./TeamupCard.f02ade70.js";import"./QChip.4c7734c3.js";function X(e){let t=!1,n,a;function i(){a=arguments,t!==!0&&(t=!0,n=requestAnimationFrame(()=>{e.apply(this,a),a=void 0,t=!1}))}return i.cancel=()=>{window.cancelAnimationFrame(n),t=!1},i}const{passive:W}=Ue;var xt=ie({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:t,emit:n}){const a=R(0),i=R(null),s=R(null),d=R(null);let r,l,v,f,g,b;Q(()=>e.height,()=>{r===!0&&I()}),Q(()=>e.scrollTarget,()=>{r===!0&&(_(),h())});let T=k=>{a.value=k,e.onScroll!==void 0&&n("scroll",k)};function I(){let k,E,O;b===window?(k=0,O=E=window.innerHeight):(k=se(b).top,E=le(b),O=k+E);const c=se(i.value).top,y=c+e.height;if(g!==void 0||y>k&&c<O){const S=(O-c)/(e.height+E);u((v-e.height)*S*e.speed),T(S)}}let u=k=>{l.style.transform=`translate3d(-50%,${Math.round(k)}px,0)`};function w(){v=l.naturalHeight||l.videoHeight||le(l),r===!0&&I()}function h(){r=!0,b=Ye(i.value,e.scrollTarget),b.addEventListener("scroll",I,W),window.addEventListener("resize",f,W),I()}function _(){r===!0&&(r=!1,b.removeEventListener("scroll",I,W),window.removeEventListener("resize",f,W),b=void 0,u.cancel(),T.cancel(),f.cancel())}return Ge(()=>{u=X(u),T=X(T),f=X(w),l=t.media!==void 0?s.value.children[0]:d.value,l.onload=l.onloadstart=l.loadedmetadata=w,w(),l.style.display="initial",window.IntersectionObserver!==void 0?(g=new IntersectionObserver(k=>{(k[0].isIntersecting===!0?h:_)()}),g.observe(i.value)):h()}),oe(()=>{_(),g!==void 0&&g.disconnect(),l.onload=l.onloadstart=l.loadedmetadata=null}),()=>x("div",{ref:i,class:"q-parallax",style:{height:`${e.height}px`}},[x("div",{ref:s,class:"q-parallax__media absolute-full"},t.media!==void 0?t.media():[x("img",{ref:d,src:e.src})]),x("div",{class:"q-parallax__content absolute-full column flex-center"},t.content!==void 0?t.content({percentScrolled:a.value}):Ee(t.default))])}}),_t="/JoYo-Front/assets/intro.112c84c5.mp4",kt="/JoYo-Front/assets/\u5E97\u5167\u684C\u904A.4fbae12a.jpg",Le="Expected a function",we=0/0,St="[object Symbol]",Tt=/^\s+|\s+$/g,Ot=/^[-+]0x[0-9a-f]+$/i,It=/^0b[01]+$/i,Et=/^0o[0-7]+$/i,Ct=parseInt,Lt=typeof P=="object"&&P&&P.Object===Object&&P,Nt=typeof self=="object"&&self&&self.Object===Object&&self,jt=Lt||Nt||Function("return this")(),qt=Object.prototype,At=qt.toString,Pt=Math.max,$t=Math.min,Z=function(){return jt.Date.now()};function Bt(e,t,n){var a,i,s,d,r,l,v=0,f=!1,g=!1,b=!0;if(typeof e!="function")throw new TypeError(Le);t=ye(t)||0,K(n)&&(f=!!n.leading,g="maxWait"in n,s=g?Pt(ye(n.maxWait)||0,t):s,b="trailing"in n?!!n.trailing:b);function T(c){var y=a,S=i;return a=i=void 0,v=c,d=e.apply(S,y),d}function I(c){return v=c,r=setTimeout(h,t),f?T(c):d}function u(c){var y=c-l,S=c-v,B=t-y;return g?$t(B,s-S):B}function w(c){var y=c-l,S=c-v;return l===void 0||y>=t||y<0||g&&S>=s}function h(){var c=Z();if(w(c))return _(c);r=setTimeout(h,u(c))}function _(c){return r=void 0,b&&a?T(c):(a=i=void 0,d)}function k(){r!==void 0&&clearTimeout(r),v=0,a=l=i=r=void 0}function E(){return r===void 0?d:_(Z())}function O(){var c=Z(),y=w(c);if(a=arguments,i=this,l=c,y){if(r===void 0)return I(l);if(g)return r=setTimeout(h,t),T(l)}return r===void 0&&(r=setTimeout(h,t)),d}return O.cancel=k,O.flush=E,O}function zt(e,t,n){var a=!0,i=!0;if(typeof e!="function")throw new TypeError(Le);return K(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),Bt(e,t,{leading:a,maxWait:t,trailing:i})}function K(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Mt(e){return!!e&&typeof e=="object"}function Ht(e){return typeof e=="symbol"||Mt(e)&&At.call(e)==St}function ye(e){if(typeof e=="number")return e;if(Ht(e))return we;if(K(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=K(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Tt,"");var n=It.test(e);return n||Et.test(e)?Ct(e.slice(2),n?2:8):Ot.test(e)?we:+e}var Rt=zt,Qt="Expected a function",xe=0/0,Dt="[object Symbol]",Ft=/^\s+|\s+$/g,Vt=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Gt=/^0o[0-7]+$/i,Yt=parseInt,Ut=typeof P=="object"&&P&&P.Object===Object&&P,Kt=typeof self=="object"&&self&&self.Object===Object&&self,Jt=Ut||Kt||Function("return this")(),Xt=Object.prototype,Zt=Xt.toString,en=Math.max,tn=Math.min,ee=function(){return Jt.Date.now()};function nn(e,t,n){var a,i,s,d,r,l,v=0,f=!1,g=!1,b=!0;if(typeof e!="function")throw new TypeError(Qt);t=_e(t)||0,ae(n)&&(f=!!n.leading,g="maxWait"in n,s=g?en(_e(n.maxWait)||0,t):s,b="trailing"in n?!!n.trailing:b);function T(c){var y=a,S=i;return a=i=void 0,v=c,d=e.apply(S,y),d}function I(c){return v=c,r=setTimeout(h,t),f?T(c):d}function u(c){var y=c-l,S=c-v,B=t-y;return g?tn(B,s-S):B}function w(c){var y=c-l,S=c-v;return l===void 0||y>=t||y<0||g&&S>=s}function h(){var c=ee();if(w(c))return _(c);r=setTimeout(h,u(c))}function _(c){return r=void 0,b&&a?T(c):(a=i=void 0,d)}function k(){r!==void 0&&clearTimeout(r),v=0,a=l=i=r=void 0}function E(){return r===void 0?d:_(ee())}function O(){var c=ee(),y=w(c);if(a=arguments,i=this,l=c,y){if(r===void 0)return I(l);if(g)return r=setTimeout(h,t),T(l)}return r===void 0&&(r=setTimeout(h,t)),d}return O.cancel=k,O.flush=E,O}function ae(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function an(e){return!!e&&typeof e=="object"}function on(e){return typeof e=="symbol"||an(e)&&Zt.call(e)==Dt}function _e(e){if(typeof e=="number")return e;if(on(e))return xe;if(ae(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ae(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ft,"");var n=Wt.test(e);return n||Gt.test(e)?Yt(e.slice(2),n?2:8):Vt.test(e)?xe:+e}var ke=nn,Ne=function(){};function je(e){var t=void 0,n=void 0,a=void 0;for(t=0;t<e.length;t+=1)if(n=e[t],n.dataset&&n.dataset.aos||(a=n.children&&je(n.children),a))return!0;return!1}function rn(e){!e||e.forEach(function(t){var n=Array.prototype.slice.call(t.addedNodes),a=Array.prototype.slice.call(t.removedNodes),i=n.concat(a);if(je(i))return Ne()})}function qe(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function sn(){return!!qe()}function ln(e,t){var n=window.document,a=qe(),i=new a(rn);Ne=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var Se={isSupported:sn,ready:ln},cn=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},dn=function(){function e(t,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),un=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fn=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,mn=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,vn=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,gn=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Te(){return navigator.userAgent||navigator.vendor||window.opera||""}var bn=function(){function e(){cn(this,e)}return dn(e,[{key:"phone",value:function(){var n=Te();return!!(fn.test(n)||mn.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=Te();return!!(vn.test(n)||gn.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}(),U=new bn,hn=function(t,n){return n&&n.forEach(function(a){return t.classList.add(a)})},pn=function(t,n){return n&&n.forEach(function(a){return t.classList.remove(a)})},G=function(t,n){var a=void 0;return U.ie11()?(a=document.createEvent("CustomEvent"),a.initCustomEvent(t,!0,!0,{detail:n})):a=new CustomEvent(t,{detail:n}),document.dispatchEvent(a)},wn=function(t,n){var a=t.options,i=t.position,s=t.node;t.data;var d=function(){!t.animated||(pn(s,a.animatedClassNames),G("aos:out",s),t.options.id&&G("aos:in:"+t.options.id,s),t.animated=!1)},r=function(){t.animated||(hn(s,a.animatedClassNames),G("aos:in",s),t.options.id&&G("aos:in:"+t.options.id,s),t.animated=!0)};a.mirror&&n>=i.out&&!a.once?d():n>=i.in?r():t.animated&&!a.once&&d()},Oe=function(t){return t.forEach(function(n,a){return wn(n,window.pageYOffset)})},Ae=function(t){for(var n=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),a+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:a,left:n}},$=function(e,t,n){var a=e.getAttribute("data-aos-"+t);if(typeof a!="undefined"){if(a==="true")return!0;if(a==="false")return!1}return a||n},yn=function(t,n,a){var i=window.innerHeight,s=$(t,"anchor"),d=$(t,"anchor-placement"),r=Number($(t,"offset",d?0:n)),l=d||a,v=t;s&&document.querySelectorAll(s)&&(v=document.querySelectorAll(s)[0]);var f=Ae(v).top-i;switch(l){case"top-bottom":break;case"center-bottom":f+=v.offsetHeight/2;break;case"bottom-bottom":f+=v.offsetHeight;break;case"top-center":f+=i/2;break;case"center-center":f+=i/2+v.offsetHeight/2;break;case"bottom-center":f+=i/2+v.offsetHeight;break;case"top-top":f+=i;break;case"bottom-top":f+=i+v.offsetHeight;break;case"center-top":f+=i+v.offsetHeight/2;break}return f+r},xn=function(t,n){var a=$(t,"anchor"),i=$(t,"offset",n),s=t;a&&document.querySelectorAll(a)&&(s=document.querySelectorAll(a)[0]);var d=Ae(s).top;return d+s.offsetHeight-i},_n=function(t,n){return t.forEach(function(a,i){var s=$(a.node,"mirror",n.mirror),d=$(a.node,"once",n.once),r=$(a.node,"id"),l=n.useClassNames&&a.node.getAttribute("data-aos"),v=[n.animatedClassName].concat(l?l.split(" "):[]).filter(function(f){return typeof f=="string"});n.initClassName&&a.node.classList.add(n.initClassName),a.position={in:yn(a.node,n.offset,n.anchorPlacement),out:s&&xn(a.node,n.offset)},a.options={once:d,mirror:s,animatedClassNames:v,id:r}}),t},Pe=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(t){return{node:t}})},A=[],Ie=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},$e=function(){return document.all&&!window.atob},kn=function(){return A=_n(A,p),Oe(A),window.addEventListener("scroll",Rt(function(){Oe(A,p.once)},p.throttleDelay)),A},H=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;t&&(Ie=!0),Ie&&kn()},Be=function(){if(A=Pe(),Me(p.disable)||$e())return ze();H()},ze=function(){A.forEach(function(t,n){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),p.initClassName&&t.node.classList.remove(p.initClassName),p.animatedClassName&&t.node.classList.remove(p.animatedClassName)})},Me=function(t){return t===!0||t==="mobile"&&U.mobile()||t==="phone"&&U.phone()||t==="tablet"&&U.tablet()||typeof t=="function"&&t()===!0},Sn=function(t){return p=un(p,t),A=Pe(),!p.disableMutationObserver&&!Se.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),p.disableMutationObserver=!0),p.disableMutationObserver||Se.ready("[data-aos]",Be),Me(p.disable)||$e()?ze():(document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),["DOMContentLoaded","load"].indexOf(p.startEvent)===-1?document.addEventListener(p.startEvent,function(){H(!0)}):window.addEventListener("load",function(){H(!0)}),p.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&H(!0),window.addEventListener("resize",ke(H,p.debounceDelay,!0)),window.addEventListener("orientationchange",ke(H,p.debounceDelay,!0)),A)},Tn={init:Sn,refresh:H,refreshHard:Be};var On=ie({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:n}){let a=!1,i,s,d=null,r=null,l,v;function f(){i&&i(),i=null,a=!1,d!==null&&(clearTimeout(d),d=null),r!==null&&(clearTimeout(r),r=null),s!==void 0&&s.removeEventListener("transitionend",l),l=null}function g(u,w,h){u.style.overflowY="hidden",w!==void 0&&(u.style.height=`${w}px`),u.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,a=!0,i=h}function b(u,w){u.style.overflowY=null,u.style.height=null,u.style.transition=null,f(),w!==v&&n(w)}function T(u,w){let h=0;s=u,a===!0?(f(),h=u.offsetHeight===u.scrollHeight?0:void 0):v="hide",g(u,h,w),d=setTimeout(()=>{d=null,u.style.height=`${u.scrollHeight}px`,l=_=>{r=null,(Object(_)!==_||_.target===u)&&b(u,"show")},u.addEventListener("transitionend",l),r=setTimeout(l,e.duration*1.1)},100)}function I(u,w){let h;s=u,a===!0?f():(v="show",h=u.scrollHeight),g(u,h,w),d=setTimeout(()=>{d=null,u.style.height=0,l=_=>{r=null,(Object(_)!==_||_.target===u)&&b(u,"hide")},u.addEventListener("transitionend",l),r=setTimeout(l,e.duration*1.1)},100)}return oe(()=>{a===!0&&f()}),()=>x(Ke,{css:!1,appear:e.appear,onEnter:T,onLeave:I},t.default)}});const M=Je({}),In=Object.keys(Ce);var En=ie({name:"QExpansionItem",props:{...Ce,...Xe,...Ze,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...et,"click","afterShow","afterHide"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=at(),i=tt(e,a),s=R(e.modelValue!==null?e.modelValue:e.defaultOpened),d=R(null),r=ce(),{show:l,hide:v,toggle:f}=nt({showing:s});let g,b;const T=N(()=>`q-expansion-item q-item-type q-expansion-item--${s.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),I=N(()=>{if(e.contentInsetLevel===void 0)return null;const m=a.lang.rtl===!0?"Right":"Left";return{["padding"+m]:e.contentInsetLevel*56+"px"}}),u=N(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),w=N(()=>{const m={};return In.forEach(L=>{m[L]=e[L]}),m}),h=N(()=>u.value===!0||e.expandIconToggle!==!0),_=N(()=>e.expandedIcon!==void 0&&s.value===!0?e.expandedIcon:e.expandIcon||a.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),k=N(()=>e.disable!==!0&&(u.value===!0||e.expandIconToggle===!0)),E=N(()=>({expanded:s.value===!0,detailsId:e.targetUid,toggle:f,show:l,hide:v})),O=N(()=>{const m=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:a.lang.label[s.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":s.value===!0?"true":"false","aria-controls":r,"aria-label":m}});Q(()=>e.group,m=>{b!==void 0&&b(),m!==void 0&&re()});function c(m){u.value!==!0&&f(m),n("click",m)}function y(m){m.keyCode===13&&S(m,!0)}function S(m,L){L!==!0&&d.value!==null&&d.value.focus(),f(m),st(m)}function B(){n("afterShow")}function He(){n("afterHide")}function re(){g===void 0&&(g=ce()),s.value===!0&&(M[e.group]=g);const m=Q(s,V=>{V===!0?M[e.group]=g:M[e.group]===g&&delete M[e.group]}),L=Q(()=>M[e.group],(V,We)=>{We===g&&V!==void 0&&V!==g&&v()});b=()=>{m(),L(),M[e.group]===g&&delete M[e.group],b=void 0}}function Re(){const m={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[x(fe,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&s.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:_.value})];return k.value===!0&&(Object.assign(m,{tabindex:0,...O.value,onClick:S,onKeyup:y}),L.unshift(x("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),x(J,m,()=>L)}function Qe(){let m;return t.header!==void 0?m=[].concat(t.header(E.value)):(m=[x(J,()=>[x(ue,{lines:e.labelLines},()=>e.label||""),e.caption?x(ue,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&m[e.switchToggleSide===!0?"push":"unshift"](x(J,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>x(fe,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&m[e.switchToggleSide===!0?"unshift":"push"](Re()),m}function De(){const m={ref:"item",style:e.headerStyle,class:e.headerClass,dark:i.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return h.value===!0&&(m.clickable=!0,m.onClick=c,Object.assign(m,u.value===!0?w.value:O.value)),x(it,m,Qe)}function Fe(){return ot(x("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:I.value,id:r},Ee(t.default)),[[rt,s.value]])}function Ve(){const m=[De(),x(On,{duration:e.duration,onShow:B,onHide:He},Fe)];return e.expandSeparator===!0&&m.push(x(de,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:i.value}),x(de,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:i.value})),m}return e.group!==void 0&&re(),oe(()=>{b!==void 0&&b()}),()=>x("div",{class:T.value},[x("div",{class:"q-expansion-item__container relative-position"},Ve())])}});const Cn={__name:"FaqAccordion",setup(e){const t=lt([{icon:"mdi-help-circle-outline",label:"\u684C\u904A\u662F\u751A\u9EBC\uFF1F",text:"\u684C\u904A\u662F\u300C\u684C\u4E0A\u904A\u6232\u300D\uFF08Board Game\uFF09 \u7684\u7C21\u7A31\uFF0C\u662F\u8FD1\u5E74\u4F86\u6B50\u7F8E\u570B\u5BB6\u65B0\u8208\u7684\u71B1\u9580\u4F11\u9592\u5A1B\u6A02\uFF0C\u8209\u51E1\u80FD\u5920\u5728\u684C\u9762\u4E0A\u9032\u884C\u7684\u5716\u7248\u3001\u9AB0\u5B50\u3001\u5361\u7247\u7B49\u300C\u4E0D\u63D2\u96FB\u300D\u904A\u6232\uFF0C\u90FD\u5C6C\u65BC\u300C\u684C\u904A\u300D\u7684\u7BC4\u7587\u3002\u5728\u53F0\u7063\u6700\u5EE3\u70BA\u4EBA\u77E5\u7684\u684C\u904A\u5C31\u662F\u300C\u5927\u5BCC\u7FC1\u300D\uFF08\u7531\u5730\u7522\u5927\u4EA8Monopoly\u6539\u7DE8\uFF09\uFF0C\u8A72\u6B3E\u904A\u6232\u96C6\u5408\u9AB0\u5B50\u548C\u8F15\u5EA6\u7684\u7B56\u7565\uFF0C\u914D\u5408\u7D93\u6FDF\u767C\u5C55\u3001\u5EFA\u8A2D\u57CE\u5E02\u7684\u4E3B\u984C\u98A8\u9761\u4E00\u6642\u3002"},{icon:"mdi-help-circle-outline",label:"\u684C\u904A\u5E97\u63D0\u4F9B\u54EA\u4E9B\u904A\u6232\uFF1F",text:"\u63EA\u904A\u63D0\u4F9B\u5404\u7A2E\u985E\u578B\u7684\u684C\u904A\uFF0C\u5305\u62EC\u7B56\u7565\u904A\u6232\u3001\u6D3E\u5C0D\u904A\u6232\u3001\u5BB6\u5EAD\u904A\u6232\u7B49\u7B49\u3002\u5728\u5E97\u88E1\u60A8\u53EF\u4EE5\u81EA\u7531\u9078\u64C7\u4E26\u904A\u73A9\u3002"},{icon:"mdi-help-circle-outline",label:"\u6709\u63D0\u4F9B\u684C\u904A\u6559\u5B78\u55CE\uFF1F\u514D\u8CBB\u55CE\uFF1F",text:"\u6709\u7684\uFF0C\u5E97\u5167\u5927\u90E8\u5206\u9664\u4E86\u300C\u81EA\u7814\u904A\u6232\u5340\u300D\u5916\u7684\u904A\u6232\u90FD\u6709\u63D0\u4F9B\u514D\u8CBB\u6559\u5B78\uFF0C\u4F46\u82E5\u662F\u9047\u5230\u5047\u65E5\u6216\u4EBA\u591A\u6642\uFF0C\u5E97\u54E1\u7A0D\u5FAE\u5FD9\u5C31\u66AB\u6642\u7121\u6CD5\u63D0\u4F9B\u9019\u984D\u5916\u7684\u670D\u52D9\u54E6\uFF0C\u5C46\u6642\u8ACB\u60A8\u591A\u591A\u64D4\u5F85\u3002"},{icon:"mdi-help-circle-outline",label:"\u6211\u53EF\u4EE5\u81EA\u5DF1\u5E36\u684C\u904A\u55CE\uFF1F",text:"\u7576\u7136\u53EF\u4EE5\uFF0C\u63EA\u904A\u63D0\u4F9B\u7684\u662F\u4E00\u500B\u53EF\u4EE5\u5B89\u5FC3\u6B61\u6A02\u66A2\u5FEB\u73A9\u684C\u904A\u4E0D\u7528\u64D4\u5FC3\u5435\u5230\u5225\u4EBA\u6216\u88AB\u8D95\u7684\u74B0\u5883\uFF0C\u56E0\u6B64\u81EA\u5E36\u684C\u904A\u4E00\u6A23\u6B63\u5E38\u8A08\u8CBB\u54E6\u3002"},{icon:"mdi-help-circle-outline",label:"\u80FD\u5E36\u5916\u98DF\u55CE",text:"\u651C\u5E36\u5916\u98DF\u5C07\u914C\u6536\u6BCF\u4EBA\uFF15\uFF10\u5143\u6E05\u6F54\u8CBB\uFF0C\u751F\u65E5\u86CB\u7CD5\u3001\u6C34\u3001\u5B30\u5152\u98DF\u54C1\u9664\u5916\u3002"}]);return(n,a)=>(j(),D(ft,{id:"faq",bordered:""},{default:q(()=>[(j(!0),Y(te,null,ne(t,i=>(j(),D(En,{key:i,group:"faq_group",icon:i.icon,label:i.label,"expand-separator":"","header-class":"text-primary","default-opened":i===t[0],popup:""},{default:q(()=>[C(ct,null,{default:q(()=>[C(dt,null,{default:q(()=>[F(ut(i.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["icon","label","default-opened"]))),128))]),_:1}))}};const Ln={class:"hero flex flex-center"},Nn={class:"row"},jn={class:"inner_container col-12"},qn={class:"banner_content text-center"},An=o("div",{class:"text-h3 text-weight-bold"},[F(" WELCOME "),o("br"),F(" TO ")],-1),Pn=o("br",null,null,-1),$n=o("div",{class:"text-h3 text-weight-bold joyo","data-aos":"zoom-in-up","data-aos-duration":"2000"}," \u63EA\u904A ",-1),Bn=o("br",null,null,-1),zn={class:"flex flex-xs-center column-xs row-md q-gutter-md q-mt-md"},Mn=o("div",{class:"video_container col-12"},[o("video",{class:"intro_video",src:_t,autoplay:"",loop:"",muted:""})],-1),Hn=o("section",{id:"about_section"},[o("div",{class:"container"},[o("div",{class:"row"},[o("div",{class:"col-12 text-center"},[o("p",{class:"about text-h6","data-aos":"fade-up","data-aos-duration":"1000"}," \u95DC\u65BC\u63EA\u904A ")]),o("p",{class:"about_title col-12 text-h5 text-accent text-center text-weight-bold","data-aos":"fade-up-right","data-aos-duration":"1500","data-aos-easing":"ease-in-sine"}," \u684C\u4E0A\u904A\u6232\uFF0C\u8B93\u6211\u5011\u62C9\u8FD1\u4EBA\u8207\u4EBA\u7684\u8DDD\u96E2\u3002 "),o("p",{class:"about_content col-12 q-pt-md text-h6 text-weight-medium text-center","data-aos":"fade-up-left","data-aos-duration":"1500","data-aos-easing":"ease-in-sine"}," \u4E00\u500B\u80FD\u5920\u805A\u5728\u4E00\u8D77\u4EAB\u53D7\u684C\u904A\u6A02\u8DA3\u7684\u5730\u65B9\uFF0C\u900F\u904E\u684C\u904A\uFF0C\u8B93\u4EBA\u5011\u80FD\u5920\u5728\u63EA\u904A\u7372\u5F97\u5FEB\u6A02\u3002 ")])])],-1),Rn={class:"row"},Qn={class:"col-12"},Dn=o("section",null,[o("div",{class:"container"},[o("div",{class:"row"},[o("div",{class:"col-12 flex flex-center",style:{"margin-top":"100px"}},[o("div",{class:"title text-h6","data-aos":"fade-up","data-aos-duration":"1000"}," WHAT YOU LOOKING FOR ")])])])],-1),Fn={id:"boardgame_section"},Vn={class:"container"},Wn={class:"row"},Gn={class:"col-12"},Yn=o("div",{"data-aos":"fade-right","data-aos-duration":"1500",class:"subtitle text-h4"}," Board Games ",-1),Un={class:"content"},Kn={key:0,id:"teamup_section"},Jn={class:"container"},Xn={class:"row"},Zn={class:"col-12"},ea=o("div",{class:"subtitle text-h4","data-aos":"fade-right","data-aos-duration":"1500"}," Teamups ",-1),ta={class:"content"},na={id:"faq_section"},aa={class:"container"},ia={class:"row"},oa={class:"col-12"},ra=o("div",{class:"text-center","data-aos":"fade-up","data-aos-duration":"2000"},[o("div",{class:"title text-h6"},"FAQs")],-1),sa={class:"content"},la=o("section",{id:"contact_section"},[o("div",{class:"container"},[o("div",{class:"row"},[o("div",{class:"col-12"},[o("div",{class:"text-center","data-aos":"fade-up","data-aos-duration":"2000"},[o("div",{class:"text-h6 title"},"CONTACT US")])]),o("div",{class:"col-sm-12 col-md-4 column flex-center content","data-aos":"fade-right","data-aos-duration":"2000",style:{"flex-grow":"1"}},[o("img",{src:"https://www.shop1688.com.tw/sys/newSys/phone.png",alt:"map",width:"150"}),o("b",{class:"q-mt-lg"},"(02) 2222-7777")]),o("div",{class:"col-sm-12 col-md-4 column flex-center content","data-aos":"zoom-in","data-aos-duration":"2000",style:{"flex-grow":"1"}},[o("img",{src:"https://www.shop1688.com.tw/sys/newSys/map.png",alt:"map",width:"150"}),o("b",{class:"q-mt-lg"},"\u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F")]),o("div",{class:"col-sm-12 col-md-4 column flex-center content","data-aos":"fade-left","data-aos-duration":"2000",style:{"flex-grow":"1"}},[o("img",{src:"https://www.shop1688.com.tw/sys/newSys/open.png",alt:"map",width:"150"}),o("b",{class:"q-mt-lg text-center"},[F("Monday to Saturday "),o("br"),F(" 10:00 - 22:00")])])])])],-1),pa={__name:"IndexPage",setup(e){Tn.init(),mt();const t=ht(),n=pt(),{getPostBoardgames:a}=t,{getAllTeamups:i}=n,{boardgames:s}=me(t),{teamups:d}=me(n);a(),i();const r=[bt];return(l,v)=>(j(),D(gt,{id:"index"},{default:q(()=>[o("section",Ln,[o("div",Nn,[o("div",jn,[o("div",qn,[An,Pn,$n,Bn,o("div",zn,[C(ve,{class:"hero_btn",to:"/reservation",label:"RESERVATION"}),C(ve,{class:"hero_btn",to:"/teamup",label:"TEAMUP"})])])]),Mn])]),Hn,o("section",null,[o("div",Rn,[o("div",Qn,[C(xt,{src:kt})])])]),Dn,o("section",Fn,[o("div",Vn,[o("div",Wn,[o("div",Gn,[Yn,o("div",Un,[C(z(he),{class:"mySwiper",modules:r,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,slidesPerView:1,spaceBetween:30,breakpoints:{576:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:40},1500:{slidesPerView:4,spaceBetween:50}}},{default:q(()=>[(j(!0),Y(te,null,ne(z(s),f=>(j(),D(z(pe),{key:f},{default:q(()=>[C(wt,ge(be(f)),null,16)]),_:2},1024))),128))]),_:1})])])])])]),z(d).length>=1?(j(),Y("section",Kn,[o("div",Jn,[o("div",Xn,[o("div",Zn,[ea,o("div",ta,[C(z(he),{class:"mySwiper",modules:r,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,slidesPerView:1,spaceBetween:30,breakpoints:{576:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:40},1500:{slidesPerView:4,spaceBetween:50}}},{default:q(()=>[(j(!0),Y(te,null,ne(z(d),f=>(j(),D(z(pe),{key:f},{default:q(()=>[C(yt,ge(be(f)),null,16)]),_:2},1024))),128))]),_:1})])])])])])):vt("",!0),o("section",na,[o("div",aa,[o("div",ia,[o("div",oa,[ra,o("div",sa,[C(Cn)])])])])]),la]),_:1}))}};export{pa as default};
