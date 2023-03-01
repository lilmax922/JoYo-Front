import{c as M,bb as Ge,bc as xt,A as Ht,aH as Ct,M as qt,O as kt,aS as Ot,r as A,aU as It,w as p,x as Re,h,I as ne,B as Tt,g as Vt,aW as jt,a9 as N}from"./index.090b319c.js";import{u as $t}from"./use-cache.b0833c75.js";import{p as _}from"./format.3e32b8d9.js";const z=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Ft(e,r,c){return Object.prototype.toString.call(e)==="[object Date]"&&(c=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Zt(qe(e,r,c))}function ze(e,r,c){return pe(Nt(e,r,c))}function Et(e){return At(e)===0}function ve(e,r){return r<=6?31:r<=11||Et(e)?30:29}function At(e){const r=z.length;let c=z[0],o,d,l,D,u;if(e<c||e>=z[r-1])throw new Error("Invalid Jalaali year "+e);for(u=1;u<r&&(o=z[u],d=o-c,!(e<o));u+=1)c=o;return D=e-c,d-D<6&&(D=D-d+w(d+4,33)*33),l=I(I(D+1,33)-1,4),l===-1&&(l=4),l}function Ke(e,r){const c=z.length,o=e+621;let d=-14,l=z[0],D,u,m,x,f;if(e<l||e>=z[c-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<c&&(D=z[f],u=D-l,!(e<D));f+=1)d=d+w(u,33)*8+w(I(u,33),4),l=D;x=e-l,d=d+w(x,33)*8+w(I(x,33)+3,4),I(u,33)===4&&u-x===4&&(d+=1);const Y=w(o,4)-w((w(o,100)+1)*3,4)-150,F=20+d-Y;return r||(u-x<6&&(x=x-u+w(u+4,33)*33),m=I(I(x+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:o,march:F}}function Nt(e,r,c){const o=Ke(e,!0);return qe(o.gy,3,o.march)+(r-1)*31-w(r,7)*(r-7)+c-1}function Zt(e){const r=pe(e).gy;let c=r-621,o,d,l;const D=Ke(c,!1),u=qe(r,3,D.march);if(l=e-u,l>=0){if(l<=185)return d=1+w(l,31),o=I(l,31)+1,{jy:c,jm:d,jd:o};l-=186}else c-=1,l+=179,D.leap===1&&(l+=1);return d=7+w(l,30),o=I(l,30)+1,{jy:c,jm:d,jd:o}}function qe(e,r,c){let o=w((e+w(r-8,6)+100100)*1461,4)+w(153*I(r+9,12)+2,5)+c-34840408;return o=o-w(w(e+100100+w(r-8,6),100)*3,4)+752,o}function pe(e){let r=4*e+139361631;r=r+w(w(4*e+183187720,146097)*3,4)*4-3908;const c=w(I(r,1461),4)*5+308,o=w(I(c,153),5)+1,d=I(w(c,153),12)+1;return{gy:w(r,1461)-100100+w(8-d,6),gm:d,gd:o}}function w(e,r){return~~(e/r)}function I(e,r){return e-~~(e/r)*r}const Bt=["gregorian","persian"],Lt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Bt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Rt=["update:modelValue"];function L(e){return e.year+"/"+_(e.month)+"/"+_(e.day)}function zt(e,r){const c=M(()=>e.disable!==!0&&e.readonly!==!0),o=M(()=>e.editable===!0?0:-1),d=M(()=>{const u=[];return e.color!==void 0&&u.push(`bg-${e.color}`),e.textColor!==void 0&&u.push(`text-${e.textColor}`),u.join(" ")});function l(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function D(u){const m=new Date,x=u===!0?null:0;if(e.calendar==="persian"){const f=Ft(m);return{year:f.jy,month:f.jm,day:f.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:x,minute:x,second:x,millisecond:x}}return{editable:c,tabindex:o,headerClass:d,getLocale:l,getCurrentDate:D}}const et=864e5,Qt=36e5,Ce=6e4,tt="YYYY-MM-DDTHH:mm:ss.SSSZ",Xt=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Pt=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,xe={};function Wt(e,r){const c="("+r.days.join("|")+")",o=e+c;if(xe[o]!==void 0)return xe[o];const d="("+r.daysShort.join("|")+")",l="("+r.months.join("|")+")",D="("+r.monthsShort.join("|")+")",u={};let m=0;const x=e.replace(Pt,Y=>{switch(m++,Y){case"YY":return u.YY=m,"(-?\\d{1,2})";case"YYYY":return u.YYYY=m,"(-?\\d{1,4})";case"M":return u.M=m,"(\\d{1,2})";case"MM":return u.M=m,"(\\d{2})";case"MMM":return u.MMM=m,D;case"MMMM":return u.MMMM=m,l;case"D":return u.D=m,"(\\d{1,2})";case"Do":return u.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return u.D=m,"(\\d{2})";case"H":return u.H=m,"(\\d{1,2})";case"HH":return u.H=m,"(\\d{2})";case"h":return u.h=m,"(\\d{1,2})";case"hh":return u.h=m,"(\\d{2})";case"m":return u.m=m,"(\\d{1,2})";case"mm":return u.m=m,"(\\d{2})";case"s":return u.s=m,"(\\d{1,2})";case"ss":return u.s=m,"(\\d{2})";case"S":return u.S=m,"(\\d{1})";case"SS":return u.S=m,"(\\d{2})";case"SSS":return u.S=m,"(\\d{3})";case"A":return u.A=m,"(AM|PM)";case"a":return u.a=m,"(am|pm)";case"aa":return u.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return c;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return u.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return u.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return u.X=m,"(-?\\d+)";case"x":return u.x=m,"(-?\\d{4,})";default:return m--,Y[0]==="["&&(Y=Y.substring(1,Y.length-1)),Y.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:u,regex:new RegExp("^"+x)};return xe[o]=f,f}function at(e,r){return e!==void 0?e:r!==void 0?r.date:xt.date}function Qe(e,r=""){const c=e>0?"-":"+",o=Math.abs(e),d=Math.floor(o/60),l=o%60;return c+_(d)+r+_(l)}function Jt(e,r,c,o,d){const l={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(l,d),e==null||e===""||typeof e!="string")return l;r===void 0&&(r=tt);const D=at(c,Ge.props),u=D.months,m=D.monthsShort,{regex:x,map:f}=Wt(r,D),Y=e.match(x);if(Y===null)return l;let F="";if(f.X!==void 0||f.x!==void 0){const V=parseInt(Y[f.X!==void 0?f.X:f.x],10);if(isNaN(V)===!0||V<0)return l;const j=new Date(V*(f.X!==void 0?1e3:1));l.year=j.getFullYear(),l.month=j.getMonth()+1,l.day=j.getDate(),l.hour=j.getHours(),l.minute=j.getMinutes(),l.second=j.getSeconds(),l.millisecond=j.getMilliseconds()}else{if(f.YYYY!==void 0)l.year=parseInt(Y[f.YYYY],10);else if(f.YY!==void 0){const V=parseInt(Y[f.YY],10);l.year=V<0?V:2e3+V}if(f.M!==void 0){if(l.month=parseInt(Y[f.M],10),l.month<1||l.month>12)return l}else f.MMM!==void 0?l.month=m.indexOf(Y[f.MMM])+1:f.MMMM!==void 0&&(l.month=u.indexOf(Y[f.MMMM])+1);if(f.D!==void 0){if(l.day=parseInt(Y[f.D],10),l.year===null||l.month===null||l.day<1)return l;const V=o!=="persian"?new Date(l.year,l.month,0).getDate():ve(l.year,l.month);if(l.day>V)return l}f.H!==void 0?l.hour=parseInt(Y[f.H],10)%24:f.h!==void 0&&(l.hour=parseInt(Y[f.h],10)%12,(f.A&&Y[f.A]==="PM"||f.a&&Y[f.a]==="pm"||f.aa&&Y[f.aa]==="p.m.")&&(l.hour+=12),l.hour=l.hour%24),f.m!==void 0&&(l.minute=parseInt(Y[f.m],10)%60),f.s!==void 0&&(l.second=parseInt(Y[f.s],10)%60),f.S!==void 0&&(l.millisecond=parseInt(Y[f.S],10)*10**(3-Y[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(F=f.Z!==void 0?Y[f.Z].replace(":",""):Y[f.ZZ],l.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return l.dateHash=_(l.year,6)+"/"+_(l.month)+"/"+_(l.day),l.timeHash=_(l.hour)+":"+_(l.minute)+":"+_(l.second)+F,l}function Xe(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const c=new Date(r.getFullYear(),0,4);c.setDate(c.getDate()-(c.getDay()+6)%7+3);const o=r.getTimezoneOffset()-c.getTimezoneOffset();r.setHours(r.getHours()-o);const d=(r-c)/(et*7);return 1+Math.floor(d)}function Z(e,r,c){const o=new Date(e),d=`set${c===!0?"UTC":""}`;switch(r){case"year":case"years":o[`${d}Month`](0);case"month":case"months":o[`${d}Date`](1);case"day":case"days":case"date":o[`${d}Hours`](0);case"hour":case"hours":o[`${d}Minutes`](0);case"minute":case"minutes":o[`${d}Seconds`](0);case"second":case"seconds":o[`${d}Milliseconds`](0)}return o}function de(e,r,c){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/c}function nt(e,r,c="days"){const o=new Date(e),d=new Date(r);switch(c){case"years":case"year":return o.getFullYear()-d.getFullYear();case"months":case"month":return(o.getFullYear()-d.getFullYear())*12+o.getMonth()-d.getMonth();case"days":case"day":case"date":return de(Z(o,"day"),Z(d,"day"),et);case"hours":case"hour":return de(Z(o,"hour"),Z(d,"hour"),Qt);case"minutes":case"minute":return de(Z(o,"minute"),Z(d,"minute"),Ce);case"seconds":case"second":return de(Z(o,"second"),Z(d,"second"),1e3)}}function Pe(e){return nt(e,Z(e,"year"),"days")+1}function We(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Je={YY(e,r,c){const o=this.YYYY(e,r,c)%100;return o>=0?_(o):"-"+_(Math.abs(o))},YYYY(e,r,c){return c!=null?c:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return _(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return We(this.Q(e))},D(e){return e.getDate()},Do(e){return We(e.getDate())},DD(e){return _(e.getDate())},DDD(e){return Pe(e)},DDDD(e){return _(Pe(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Xe(e)},ww(e){return _(Xe(e))},H(e){return e.getHours()},HH(e){return _(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return _(this.h(e))},m(e){return e.getMinutes()},mm(e){return _(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return _(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return _(Math.floor(e.getMilliseconds()/10))},SSS(e){return _(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,c,o){const d=o==null?e.getTimezoneOffset():o;return Qe(d,":")},ZZ(e,r,c,o){const d=o==null?e.getTimezoneOffset():o;return Qe(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function Ut(e,r,c,o,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const l=new Date(e);if(isNaN(l))return;r===void 0&&(r=tt);const D=at(c,Ge.props);return r.replace(Xt,(u,m)=>u in Je?Je[u](l,D,o,d):m===void 0?u:m.split("\\]").join("]"))}const W=20,Gt=["Calendar","Years","Months"],Ue=e=>Gt.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" \u2014 ";function R(e){return e.year+"/"+_(e.month)}var ta=Ht({name:"QDate",props:{...Lt,...Ct,...qt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ue}},emits:[...Rt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:c}){const{proxy:o}=Vt(),{$q:d}=o,l=kt(e,d),{getCache:D}=$t(),{tabindex:u,headerClass:m,getLocale:x,getCurrentDate:f}=zt(e,d);let Y;const F=Ot(e),V=jt(F),j=A(null),Q=A(Fe()),H=A(x()),rt=M(()=>Fe()),lt=M(()=>x()),E=M(()=>f()),g=A(Ee(Q.value,H.value)),O=A(e.defaultView),ke=d.lang.rtl===!0?"right":"left",re=A(ke.value),fe=A(ke.value),me=g.value.year,le=A(me-me%W-(me<0?W:0)),C=A(null),ot=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(l.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),X=M(()=>e.color||"primary"),J=M(()=>e.textColor||"white"),oe=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),he=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),$=M(()=>he.value.filter(t=>typeof t=="string").map(t=>De(t,Q.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),U=M(()=>{const t=a=>De(a,Q.value,H.value);return he.value.filter(a=>It(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ue=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=ze(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ge=M(()=>e.calendar==="persian"?L:(t,a,n)=>Ut(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?Q.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),te=M(()=>$.value.length+U.value.reduce((t,a)=>t+1+nt(ue.value(a.to),ue.value(a.from)),0)),Oe=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length>0)return e.title;if(C.value!==null){const n=C.value.init,s=ue.value(n);return H.value.daysShort[s.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(te.value===0)return ee;if(te.value>1)return`${te.value} ${H.value.pluralDay}`;const t=$.value[0],a=ue.value(t);return isNaN(a.valueOf())===!0?ee:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),ut=M(()=>$.value.concat(U.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),it=M(()=>$.value.concat(U.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ie=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length>0)return e.subtitle;if(te.value===0)return ee;if(te.value>1){const t=ut.value,a=it.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return $.value[0].year}),ie=M(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),Te=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),st=M(()=>{const t=H.value.daysShort,a=Te.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),B=M(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ve(t.year,t.month)}),ct=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),q=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),k=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),ye=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return q.value!==null&&q.value.year>=g.value.year&&(t.year.prev=!1,q.value.year===g.value.year&&q.value.month>=g.value.month&&(t.month.prev=!1)),k.value!==null&&k.value.year<=g.value.year&&(t.year.next=!1,k.value.year===g.value.year&&k.value.month<=g.value.month&&(t.month.next=!1)),t}),se=M(()=>{const t={};return $.value.forEach(a=>{const n=R(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Ve=M(()=>{const t={};return U.value.forEach(a=>{const n=R(a.from),s=R(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===s?a.to.day:void 0,range:a}),n<s){let i;const{year:b,month:v}=a.from,y=v<12?{year:b,month:v+1}:{year:b+1,month:1};for(;(i=R(y))<=s;)t[i]===void 0&&(t[i]=[]),t[i].push({from:void 0,to:i===s?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ae=M(()=>{if(C.value===null)return;const{init:t,initHash:a,final:n,finalHash:s}=C.value,[i,b]=a<=s?[t,n]:[n,t],v=R(i),y=R(b);if(v!==T.value&&y!==T.value)return;const S={};return v===T.value?(S.from=i.day,S.includeFrom=!0):S.from=1,y===T.value?(S.to=b.day,S.includeTo=!0):S.to=B.value,S}),T=M(()=>R(g.value)),dt=M(()=>{const t={};if(e.options===void 0){for(let n=1;n<=B.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=B.value;n++){const s=T.value+"/"+_(n);t[n]=a(s)}return t}),vt=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=B.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=B.value;n++){const s=T.value+"/"+_(n);t[n]=a(s)===!0&&ct.value(s)}}return t}),ft=M(()=>{let t,a;const{year:n,month:s}=g.value;if(e.calendar!=="persian")t=new Date(n,s-1,1),a=new Date(n,s-1,0).getDate();else{const i=ze(n,s,1);t=new Date(i.gy,i.gm-1,i.gd);let b=s-1,v=n;b===0&&(b=12,v--),a=ve(v,b)}return{days:t.getDay()-Te.value-1,endDay:a}}),je=M(()=>{const t=[],{days:a,endDay:n}=ft.value,s=a<0?a+7:a;if(s<6)for(let v=n-s;v<=n;v++)t.push({i:v,fill:!0});const i=t.length;for(let v=1;v<=B.value;v++){const y={i:v,event:vt.value[v],classes:[]};dt.value[v]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(se.value[T.value]!==void 0&&se.value[T.value].forEach(v=>{const y=i+v-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:X.value,textColor:J.value})}),Ve.value[T.value]!==void 0&&Ve.value[T.value].forEach(v=>{if(v.from!==void 0){const y=i+v.from-1,S=i+(v.to||B.value)-1;for(let Se=y;Se<=S;Se++)Object.assign(t[Se],{range:v.range,unelevated:!0,color:X.value,textColor:J.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),v.to!==void 0&&Object.assign(t[S],{rangeTo:!0,flat:!1})}else if(v.to!==void 0){const y=i+v.to-1;for(let S=i;S<=y;S++)Object.assign(t[S],{range:v.range,unelevated:!0,color:X.value,textColor:J.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=i+B.value-1;for(let S=i;S<=y;S++)Object.assign(t[S],{range:v.range,unelevated:!0,color:X.value,textColor:J.value})}}),ae.value!==void 0){const v=i+ae.value.from-1,y=i+ae.value.to-1;for(let S=v;S<=y;S++)t[S].color=X.value,t[S].editRange=!0;ae.value.includeFrom===!0&&(t[v].editRangeFrom=!0),ae.value.includeTo===!0&&(t[y].editRangeTo=!0)}g.value.year===E.value.year&&g.value.month===E.value.month&&(t[i+E.value.day-1].today=!0);const b=t.length%7;if(b>0){const v=7-b;for(let y=1;y<=v;y++)t.push({i:y,fill:!0})}return t.forEach(v=>{let y="q-date__calendar-item ";v.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${v.in===!0?"in":"out"}`,v.range!==void 0&&(y+=` q-date__range${v.rangeTo===!0?"-to":v.rangeFrom===!0?"-from":""}`),v.editRange===!0&&(y+=` q-date__edit-range${v.editRangeFrom===!0?"-from":""}${v.editRangeTo===!0?"-to":""}`),(v.range!==void 0||v.editRange===!0)&&(y+=` text-${v.color}`)),v.classes=y}),t}),mt=M(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});p(()=>e.modelValue,t=>{if(Y===t)Y=0;else{const{year:a,month:n}=Ee(Q.value,H.value);G(a,n)}}),p(O,()=>{j.value!==null&&o.$el.contains(document.activeElement)===!0&&j.value.focus()}),p(()=>g.value.year,t=>{c("navigation",{year:t,month:g.value.month})}),p(()=>g.value.month,t=>{c("navigation",{year:g.value.year,month:t})}),p(rt,t=>{Le(t,H.value,"mask"),Q.value=t}),p(lt,t=>{Le(Q.value,t,"locale"),H.value=t});function $e(){const t=E.value,a=se.value[R(t)];(a===void 0||a.includes(t.day)===!1)&&be(t),Me(t.year,t.month)}function ht(t){Ue(t)===!0&&(O.value=t)}function gt(t,a){["month","year"].includes(t)&&(t==="month"?Ne:Ye)(a===!0?-1:1)}function Me(t,a){O.value="Calendar",G(t,a)}function yt(t,a){if(e.range===!1||!t){C.value=null;return}const n=Object.assign({...g.value},t),s=a!==void 0?Object.assign({...g.value},a):n;C.value={init:n,initHash:L(n),final:s,finalHash:L(s)},Me(n.year,n.month)}function Fe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function De(t,a,n){return Jt(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ee(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ae();const s=n[n.length-1],i=De(s.from!==void 0?s.from:s,t,a);return i.dateHash===null?Ae():i}function Ae(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=E.value!==void 0?E.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+_(a)+"/01"}}function Ne(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),G(a,n),oe.value===!0&&ce("month")}function Ye(t){const a=Number(g.value.year)+t;G(a,g.value.month),oe.value===!0&&ce("year")}function Mt(t){G(t,g.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",oe.value===!0&&ce("year")}function Dt(t){G(g.value.year,t),O.value="Calendar",oe.value===!0&&ce("month")}function Yt(t,a){const n=se.value[a];(n!==void 0&&n.includes(t.day)===!0?_e:be)(t)}function P(t){return{year:t.year,month:t.month,day:t.day}}function G(t,a){q.value!==null&&t<=q.value.year&&(t=q.value.year,a<q.value.month&&(a=q.value.month)),k.value!==null&&t>=k.value.year&&(t=k.value.year,a>k.value.month&&(a=k.value.month));const n=t+"/"+_(a)+"/01";n!==g.value.dateHash&&(re.value=g.value.dateHash<n==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(fe.value=re.value),Re(()=>{le.value=t-t%W-(t<0?W:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:n})}))}function Ze(t,a,n){const s=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;Y=s;const{reason:i,details:b}=Be(a,n);c("update:modelValue",s,i,b)}function ce(t){const a=$.value[0]!==void 0&&$.value[0].dateHash!==null?{...$.value[0]}:{...g.value};Re(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ve(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const s=K(a);Y=s;const{details:i}=Be("",a);c("update:modelValue",s,t,i)})}function Be(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...P(a.target),from:P(a.from),to:P(a.to)}}:{reason:`${t}-day`,details:P(a)}}function K(t,a,n){return t.from!==void 0?{from:ge.value(t.from,a,n),to:ge.value(t.to,a,n)}:ge.value(t,a,n)}function be(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=L(t.from),s=L(t.to),i=$.value.filter(v=>v.dateHash<n||v.dateHash>s),b=U.value.filter(({from:v,to:y})=>y.dateHash<n||v.dateHash>s);a=i.concat(b).concat(t).map(v=>K(v))}else{const n=he.value.slice();n.push(K(t)),a=n}else a=K(t);Ze(a,"add",t)}function _e(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=K(t);t.from!==void 0?a=e.modelValue.filter(s=>s.from!==void 0?s.from!==n.from&&s.to!==n.to:!0):a=e.modelValue.filter(s=>s!==n),a.length===0&&(a=null)}Ze(a,"remove",t)}function Le(t,a,n){const s=$.value.concat(U.value).map(i=>K(i,t,a)).filter(i=>i.from!==void 0?i.from.dateHash!==null&&i.to.dateHash!==null:i.dateHash!==null);c("update:modelValue",(e.multiple===!0?s:s[0])||null,n)}function bt(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(ne,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ie.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:u.value,...D("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[Ie.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(ne,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Oe.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:u.value,...D("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[Oe.value]))]),e.todayBtn===!0?h(N,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:u.value,onClick:$e}):null])])}function we({label:t,type:a,key:n,dir:s,goTo:i,boundaries:b,cls:v}){return[h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[0],tabindex:u.value,disable:b.prev===!1,...D("go-#"+a,{onClick(){i(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+v},[h(ne,{name:"q-transition--jump-"+s},()=>h("div",{key:n},[h(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:u.value,...D("view#"+a,{onClick:()=>{O.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[1],tabindex:u.value,disable:b.next===!1,...D("go+#"+a,{onClick(){i(1)}})})])]}const _t={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},we({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:re.value,goTo:Ne,boundaries:ye.value.month,cls:" col"}).concat(we({label:g.value.year,type:"Years",key:g.value.year,dir:fe.value,goTo:Ye,boundaries:ye.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},st.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(ne,{name:"q-transition--slide-"+re.value},()=>h("div",{key:T.value,class:"q-date__calendar-days fit"},je.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:u.value,...D("day#"+t.i,{onClick:()=>{wt(t.i)},onMouseover:()=>{St(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===E.value.year,a=s=>q.value!==null&&g.value.year===q.value.year&&q.value.month>s||k.value!==null&&g.value.year===k.value.year&&k.value.month<s,n=H.value.monthsShort.map((s,i)=>{const b=g.value.month===i+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(N,{class:t===!0&&E.value.month===i+1?"q-date__today":null,flat:b!==!0,label:s,unelevated:b,color:b===!0?X.value:null,textColor:b===!0?J.value:null,tabindex:u.value,disable:a(i+1),...D("month#"+i,{onClick:()=>{Dt(i+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[we({label:g.value.year,type:"Years",key:g.value.year,dir:fe.value,goTo:Ye,boundaries:ye.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=le.value,a=t+W,n=[],s=i=>q.value!==null&&q.value.year>i||k.value!==null&&k.value.year<i;for(let i=t;i<=a;i++){const b=g.value.year===i;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(N,{key:"yr"+i,class:E.value.year===i?"q-date__today":null,flat:!b,label:i,dense:!0,unelevated:b,color:b===!0?X.value:null,textColor:b===!0?J.value:null,tabindex:u.value,disable:s(i),...D("yr#"+i,{onClick:()=>{Mt(i)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:ie.value[0],tabindex:u.value,disable:s(t),...D("y-",{onClick:()=>{le.value-=W}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:ie.value[1],tabindex:u.value,disable:s(a),...D("y+",{onClick:()=>{le.value+=W}})})])])}};function wt(t){const a={...g.value,day:t};if(e.range===!1){Yt(a,T.value);return}if(C.value===null){const n=je.value.find(i=>i.fill!==!0&&i.i===t);if(e.noUnset!==!0&&n.range!==void 0){_e({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){_e(a);return}const s=L(a);C.value={init:a,initHash:s,final:a,finalHash:s},c("rangeStart",P(a))}else{const n=C.value.initHash,s=L(a),i=n<=s?{from:C.value.init,to:a}:{from:a,to:C.value.init};C.value=null,be(n===s?a:{target:a,...i}),c("rangeEnd",{from:P(i.from),to:P(i.to)})}}function St(t){if(C.value!==null){const a={...g.value,day:t};Object.assign(C.value,{final:a,finalHash:L(a)})}}return Object.assign(o,{setToday:$e,setView:ht,offsetCalendar:gt,setCalendarTo:Me,setEditingRange:yt}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(ne,{name:"q-transition--fade"},_t[O.value])])],a=Tt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&V(t,"push"),h("div",{class:ot.value,...mt.value},[bt(),h("div",{ref:j,class:"q-date__main col column",tabindex:-1},t)])}}});export{ta as Q};
