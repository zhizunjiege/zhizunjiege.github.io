import{_ as Xt}from"./YunComment.vue_vue_type_style_index_0_lang-x7su-lS2.js";import{x as j,y as Gt,z as Oe,A as Kt,B as Ge,C as Ke,D as ce,E as Wt,e as at,G as O,H as Zt,k as Te,I as te,J as he,K as He,L as rt,M as We,d as ne,N as Jt,o as S,b as G,g as w,f as _,c as ge,w as ve,t as q,v as M,O as De,i as st,P as it,Q as de,R as Qt,r as L,S as Ae,j as en,T as tn,u as nn,U as on,q as J,n as an,V as rn}from"./app-Bkzu69aX.js";import{_ as sn}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DF9C8biv.js";import{u as ln}from"./post-CFViN5ca.js";function me(e,t){const n=+j(e)-+j(t);return n<0?-1:n>0?1:n}function cn(e){return Gt(e,Date.now())}function dn(e,t,n){const[o,a]=Oe(n==null?void 0:n.in,e,t),s=o.getFullYear()-a.getFullYear(),l=o.getMonth()-a.getMonth();return s*12+l}function un(e){return t=>{const o=(e?Math[e]:Math.trunc)(t);return o===0?0:o}}function lt(e,t){return+j(e)-+j(t)}function mn(e,t){const n=j(e,t==null?void 0:t.in);return n.setHours(23,59,59,999),n}function fn(e,t){const n=j(e,t==null?void 0:t.in),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}function gn(e,t){const n=j(e,t==null?void 0:t.in);return+mn(n,t)==+fn(n,t)}function vn(e,t,n){const[o,a,s]=Oe(n==null?void 0:n.in,e,e,t),l=me(a,s),i=Math.abs(dn(a,s));if(i<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-l*i);let f=me(a,s)===-l;gn(o)&&i===1&&me(o,s)===1&&(f=!1);const h=l*(i-+f);return h===0?0:h}function pn(e,t,n){const o=lt(e,t)/1e3;return un(n==null?void 0:n.roundingMethod)(o)}function hn(e,t,n){const o=Wt(),a=(n==null?void 0:n.locale)??o.locale??Kt,s=2520,l=me(e,t);if(isNaN(l))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:l}),[f,h]=Oe(n==null?void 0:n.in,...l>0?[t,e]:[e,t]),m=pn(h,f),re=(Ge(h)-Ge(f))/1e3,y=Math.round((m-re)/60);let x;if(y<2)return n!=null&&n.includeSeconds?m<5?a.formatDistance("lessThanXSeconds",5,i):m<10?a.formatDistance("lessThanXSeconds",10,i):m<20?a.formatDistance("lessThanXSeconds",20,i):m<40?a.formatDistance("halfAMinute",0,i):m<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):y===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",y,i);if(y<45)return a.formatDistance("xMinutes",y,i);if(y<90)return a.formatDistance("aboutXHours",1,i);if(y<Ke){const p=Math.round(y/60);return a.formatDistance("aboutXHours",p,i)}else{if(y<s)return a.formatDistance("xDays",1,i);if(y<ce){const p=Math.round(y/Ke);return a.formatDistance("xDays",p,i)}else if(y<ce*2)return x=Math.round(y/ce),a.formatDistance("aboutXMonths",x,i)}if(x=vn(h,f),x<12){const p=Math.round(y/ce);return a.formatDistance("xMonths",p,i)}else{const p=x%12,H=Math.trunc(x/12);return p<3?a.formatDistance("aboutXYears",H,i):p<9?a.formatDistance("overXYears",H,i):a.formatDistance("almostXYears",H+1,i)}}function bn(e,t){return hn(e,cn(e),t)}function _n(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function yn(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",_n(t,"table-container")})}function ct(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,s=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(s-window.scrollY)>window.innerHeight?window.scrollTo(0,s):window.scrollTo({top:s,behavior:"smooth"})}}function En(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:s,hash:l,target:i}=n,f=window.location,h=s.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&i!=="_blank"&&o===f.protocol&&a===f.hostname&&!(h&&h[0]!==".html")&&s===f.pathname&&(t.preventDefault(),l&&l!==f.hash&&(await e.push({hash:decodeURIComponent(l)}),ct(n,l,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function wn(e){const t=at(),n=O(()=>t.path),o=Zt(),a=O(()=>{let i=-1;return o.postList.find((f,h)=>f.path===n.value?(i=h,!0):!1),i}),s=O(()=>a.value-1>=0?o.postList[a.value-1]:null),l=O(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[s,l]}function $n(){if(Te){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,s=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!s)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let i="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(f=>i+=`${f.textContent||""}
`),i=i.slice(0,-1),l&&(i=i.replace(/^ *(\$|>) /gm,"").trim()),zn(i).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const f=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,f)})}})}}async function zn(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ue=function(t){return t.tagName==="IMG"},Ln=function(t){return NodeList.prototype.isPrototypeOf(t)},fe=function(t){return t&&t.nodeType===1},Ze=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Je=function(t){try{return Array.isArray(t)?t.filter(ue):Ln(t)?[].slice.call(t).filter(ue):fe(t)?[t].filter(ue):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(ue):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Cn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},kn=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,s=n.width,l=n.height,i=t.cloneNode(),f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,h=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=o+f+"px",i.style.left=a+h+"px",i.style.width=s+"px",i.style.height=l+"px",i.style.transform="",i},X=function(t,n){var o=Y({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},xn=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(c){function d(){}c(d,d)},a=function(c){var d=c.target;if(d===ie){p();return}k.indexOf(d)!==-1&&H({target:d})},s=function(){if(!(F||!r.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Ve-c)>g.scrollOffset&&setTimeout(p,150)}},l=function(c){var d=c.key||c.keyCode;(d==="Escape"||d==="Esc"||d===27)&&p()},i=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c;if(c.background&&(ie.style.background=c.background),c.container&&c.container instanceof Object&&(d.container=Y({},g.container,c.container)),c.template){var v=fe(c.template)?c.template:document.querySelector(c.template);d.template=v}return g=Y({},g,d),k.forEach(function(b){b.dispatchEvent(X("medium-zoom:update",{detail:{zoom:E}}))}),E},f=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Y({},g,c))},h=function(){for(var c=arguments.length,d=Array(c),v=0;v<c;v++)d[v]=arguments[v];var b=d.reduce(function(u,z){return[].concat(u,Je(z))},[]);return b.filter(function(u){return k.indexOf(u)===-1}).forEach(function(u){k.push(u),u.classList.add("medium-zoom-image")}),se.forEach(function(u){var z=u.type,A=u.listener,V=u.options;b.forEach(function(D){D.addEventListener(z,A,V)})}),E},m=function(){for(var c=arguments.length,d=Array(c),v=0;v<c;v++)d[v]=arguments[v];r.zoomed&&p();var b=d.length>0?d.reduce(function(u,z){return[].concat(u,Je(z))},[]):k;return b.forEach(function(u){u.classList.remove("medium-zoom-image"),u.dispatchEvent(X("medium-zoom:detach",{detail:{zoom:E}}))}),k=k.filter(function(u){return b.indexOf(u)===-1}),E},re=function(c,d){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(b){b.addEventListener("medium-zoom:"+c,d,v)}),se.push({type:"medium-zoom:"+c,listener:d,options:v}),E},y=function(c,d){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(b){b.removeEventListener("medium-zoom:"+c,d,v)}),se=se.filter(function(b){return!(b.type==="medium-zoom:"+c&&b.listener.toString()===d.toString())}),E},x=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target,v=function(){var u={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},z=void 0,A=void 0;if(g.container)if(g.container instanceof Object)u=Y({},u,g.container),z=u.width-u.left-u.right-g.margin*2,A=u.height-u.top-u.bottom-g.margin*2;else{var V=fe(g.container)?g.container:document.querySelector(g.container),D=V.getBoundingClientRect(),Le=D.width,Dt=D.height,Nt=D.left,Rt=D.top;u=Y({},u,{width:Le,height:Dt,left:Nt,top:Rt})}z=z||u.width-g.margin*2,A=A||u.height-g.margin*2;var Z=r.zoomedHd||r.original,Pt=Ze(Z)?z:Z.naturalWidth||z,Yt=Ze(Z)?A:Z.naturalHeight||A,le=Z.getBoundingClientRect(),jt=le.top,qt=le.left,Ce=le.width,ke=le.height,Bt=Math.min(Math.max(Ce,Pt),z)/Ce,Ut=Math.min(Math.max(ke,Yt),A)/ke,xe=Math.min(Bt,Ut),Ft=(-qt+(z-Ce)/2+g.margin+u.left)/xe,Vt=(-jt+(A-ke)/2+g.margin+u.top)/xe,Xe="scale("+xe+") translate3d("+Ft+"px, "+Vt+"px, 0)";r.zoomed.style.transform=Xe,r.zoomedHd&&(r.zoomedHd.style.transform=Xe)};return new o(function(b){if(d&&k.indexOf(d)===-1){b(E);return}var u=function Le(){F=!1,r.zoomed.removeEventListener("transitionend",Le),r.original.dispatchEvent(X("medium-zoom:opened",{detail:{zoom:E}})),b(E)};if(r.zoomed){b(E);return}if(d)r.original=d;else if(k.length>0){var z=k;r.original=z[0]}else{b(E);return}if(r.original.dispatchEvent(X("medium-zoom:open",{detail:{zoom:E}})),Ve=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,F=!0,r.zoomed=kn(r.original),document.body.appendChild(ie),g.template){var A=fe(g.template)?g.template:document.querySelector(g.template);r.template=document.createElement("div"),r.template.appendChild(A.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",p),r.zoomed.addEventListener("transitionend",u),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(V),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,v()};var V=setInterval(function(){r.zoomedHd.complete&&(clearInterval(V),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",p),document.body.appendChild(r.zoomedHd),v())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var D=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",D),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",p),document.body.appendChild(r.zoomedHd),v()})}else v()})},p=function(){return new o(function(c){if(F||!r.original){c(E);return}var d=function v(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(ie),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),F=!1,r.zoomed.removeEventListener("transitionend",v),r.original.dispatchEvent(X("medium-zoom:closed",{detail:{zoom:E}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,c(E)};F=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(X("medium-zoom:close",{detail:{zoom:E}})),r.zoomed.addEventListener("transitionend",d)})},H=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target;return r.original?p():x({target:d})},we=function(){return g},$e=function(){return k},ze=function(){return r.original},k=[],se=[],F=!1,Ve=0,g=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?g=t:(t||typeof t=="string")&&h(t),g=Y({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},g);var ie=Cn(g.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",s),window.addEventListener("resize",p);var E={open:x,close:p,toggle:H,update:i,clone:f,attach:h,detach:m,on:re,off:y,getOptions:we,getImages:$e,getZoomedImage:ze};return E};function An(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Mn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";An(Mn);function In(){const t=te().value.mediumZoom;he(()=>{t.enable&&xn(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function Sn(){const e=te(),t=He();Te&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),he(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let s;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;s=o}else s=a;for(const l of Array.from(n))l.scrollHeight>s&&l.classList.add("folded")})}function On(){const e=te(),t=O(()=>e.value.cdn.prefix);rt({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),We(`${t.value}aplayer/dist/APlayer.min.js`,()=>{We(`${t.value}meting@2/dist/Meting.min.js`)})}function Tn(){rt({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const Hn={class:"post-nav"},Dn={class:"post-nav-item"},Nn={class:"title truncate",text:"sm"},Rn={class:"post-nav-item"},Pn={class:"title truncate",text:"sm"},Yn=ne({__name:"YunPostNav",setup(e){const[t,n]=wn();return(o,a)=>{const s=Jt("RouterLink");return S(),G("div",Hn,[w("div",Dn,[_(t)?(S(),ge(s,{key:0,class:"post-nav-prev",to:_(t).path||"",title:_(t).title},{default:ve(()=>[a[0]||(a[0]=w("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),w("span",Nn,q(_(t).title),1)]),_:1},8,["to","title"])):M("v-if",!0)]),w("div",Rn,[_(n)?(S(),ge(s,{key:0,to:_(n).path||"",title:_(n).title,class:"post-nav-next"},{default:ve(()=>[w("span",Pn,q(_(n).title),1),a[1]||(a[1]=w("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))]),_:1},8,["to","title"])):M("v-if",!0)])])}}}),R=typeof window<"u",dt=R&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),ut=R&&window.devicePixelRatio>1,jn={elements_selector:".lazy",container:dt||R?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},mt=e=>Object.assign({},jn,e),Qe=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},qn=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Qe(e,n);else Qe(e,t)},T="src",Ne="srcset",Re="sizes",ft="poster",oe="llOriginalAttrs",gt="data",Pe="loading",vt="loaded",pt="applied",Bn="entered",Ye="error",ht="native",bt="data-",_t="ll-status",C=(e,t)=>e.getAttribute(bt+t),Un=(e,t,n)=>{const o=bt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ae=e=>C(e,_t),U=(e,t)=>Un(e,_t,t),be=e=>U(e,null),je=e=>ae(e)===null,Fn=e=>ae(e)===Pe,Vn=e=>ae(e)===Ye,qe=e=>ae(e)===ht,Xn=[Pe,vt,pt,Ye],Gn=e=>Xn.indexOf(ae(e))>=0,P=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},W=(e,t)=>{R&&t!==""&&e.classList.add(t)},I=(e,t)=>{R&&t!==""&&e.classList.remove(t)},Kn=e=>{e.llTempImage=document.createElement("IMG")},Wn=e=>{delete e.llTempImage},yt=e=>e.llTempImage,_e=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},Zn=e=>{e.disconnect()},Jn=(e,t,n)=>{t.unobserve_entered&&_e(e,n)},Be=(e,t)=>{e&&(e.loadingCount+=t)},Qn=e=>{e&&(e.toLoadCount-=1)},Et=(e,t)=>{e&&(e.toLoadCount=t)},eo=e=>e.loadingCount>0,to=e=>e.toLoadCount>0,wt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Ue=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&wt(n).forEach(t)},$t=(e,t)=>{wt(e).forEach(t)},ye=[T],zt=[T,ft],ee=[T,Ne,Re],Lt=[gt],Ee=e=>!!e[oe],Ct=e=>e[oe],kt=e=>delete e[oe],K=(e,t)=>{if(Ee(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[oe]=n},no=e=>{Ee(e)||(e[oe]={backgroundImage:e.style.backgroundImage})},B=(e,t)=>{if(!Ee(e))return;const n=Ct(e);t.forEach(o=>{((a,s,l)=>{l?a.setAttribute(s,l):a.removeAttribute(s)})(e,o,n[o])})},oo=e=>{if(!Ee(e))return;const t=Ct(e);e.style.backgroundImage=t.backgroundImage},xt=(e,t,n)=>{W(e,t.class_applied),U(e,pt),n&&(t.unobserve_completed&&_e(e,t),P(t.callback_applied,e,n))},At=(e,t,n)=>{W(e,t.class_loading),U(e,Pe),n&&(Be(n,1),P(t.callback_loading,e,n))},N=(e,t,n)=>{n&&e.setAttribute(t,n)},et=(e,t)=>{N(e,Re,C(e,t.data_sizes)),N(e,Ne,C(e,t.data_srcset)),N(e,T,C(e,t.data_src))},ao=(e,t)=>{Ue(e,n=>{K(n,ee),et(n,t)}),K(e,ee),et(e,t)},ro=(e,t)=>{K(e,ye),N(e,T,C(e,t.data_src))},so=(e,t)=>{$t(e,n=>{K(n,ye),N(n,T,C(n,t.data_src))}),K(e,zt),N(e,ft,C(e,t.data_poster)),N(e,T,C(e,t.data_src)),e.load()},io=(e,t)=>{K(e,Lt),N(e,gt,C(e,t.data_src))},lo=(e,t,n)=>{const o=C(e,t.data_bg),a=C(e,t.data_bg_hidpi),s=ut&&a?a:o;s&&(e.style.backgroundImage=`url("${s}")`,yt(e).setAttribute(T,s),At(e,t,n))},co=(e,t,n)=>{const o=C(e,t.data_bg_multi),a=C(e,t.data_bg_multi_hidpi),s=ut&&a?a:o;s&&(e.style.backgroundImage=s,xt(e,t,n))},uo=(e,t,n)=>{const o=C(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(s=>`image-set(${s})`);e.style.backgroundImage=a.join(),xt(e,t,n)},Mt={IMG:ao,IFRAME:ro,VIDEO:so,OBJECT:io},mo=(e,t)=>{const n=Mt[e.tagName];n&&n(e,t)},fo=(e,t,n)=>{const o=Mt[e.tagName];o&&(o(e,t),At(e,t,n))},go=["IMG","IFRAME","VIDEO","OBJECT"],vo=e=>go.indexOf(e.tagName)>-1,It=(e,t)=>{!t||eo(t)||to(t)||P(e.callback_finish,t)},tt=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},po=(e,t,n)=>{e.removeEventListener(t,n)},Fe=e=>!!e.llEvLisnrs,ho=(e,t,n)=>{Fe(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";tt(e,o,t),tt(e,"error",n)},Me=e=>{if(!Fe(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];po(e,n,o)}delete e.llEvLisnrs},St=(e,t,n)=>{Wn(e),Be(n,-1),Qn(n),I(e,t.class_loading),t.unobserve_completed&&_e(e,n)},bo=(e,t,n,o)=>{const a=qe(t);St(t,n,o),W(t,n.class_loaded),U(t,vt),P(n.callback_loaded,t,o),a||It(n,o)},_o=(e,t,n,o)=>{const a=qe(t);St(t,n,o),W(t,n.class_error),U(t,Ye),P(n.callback_error,t,o),n.restore_on_error&&B(t,ee),a||It(n,o)},Ie=(e,t,n)=>{const o=yt(e)||e;Fe(o)||ho(o,a=>{bo(0,e,t,n),Me(o)},a=>{_o(0,e,t,n),Me(o)})},Se=(e,t,n)=>{vo(e)?((o,a,s)=>{Ie(o,a,s),fo(o,a,s)})(e,t,n):((o,a,s)=>{Kn(o),Ie(o,a,s),no(o),lo(o,a,s),co(o,a,s),uo(o,a,s)})(e,t,n)},yo=(e,t,n)=>{e.setAttribute("loading","lazy"),Ie(e,t,n),mo(e,t),U(e,ht)},nt=e=>{e.removeAttribute(T),e.removeAttribute(Ne),e.removeAttribute(Re)},Eo=e=>{Ue(e,t=>{nt(t)}),nt(e)},Ot=e=>{Ue(e,t=>{B(t,ee)}),B(e,ee)},wo=e=>{$t(e,t=>{B(t,ye)}),B(e,zt),e.load()},$o=e=>{B(e,ye)},zo=e=>{B(e,Lt)},Lo={IMG:Ot,IFRAME:$o,VIDEO:wo,OBJECT:zo},Co=(e,t)=>{(n=>{const o=Lo[n.tagName];o?o(n):oo(n)})(e),((n,o)=>{je(n)||qe(n)||(I(n,o.class_entered),I(n,o.class_exited),I(n,o.class_applied),I(n,o.class_loading),I(n,o.class_loaded),I(n,o.class_error))})(e,t),be(e),kt(e)},ko=(e,t,n,o)=>{n.cancel_on_exit&&Fn(e)&&e.tagName==="IMG"&&(Me(e),Eo(e),Ot(e),I(e,n.class_loading),Be(o,-1),be(e),P(n.callback_cancel,e,t,o))},xo=(e,t,n,o)=>{const a=Gn(e);U(e,Bn),W(e,n.class_entered),I(e,n.class_exited),Jn(e,n,o),P(n.callback_enter,e,t,o),a||Se(e,n,o)},Ao=(e,t,n,o)=>{je(e)||(W(e,n.class_exited),ko(e,t,n,o),P(n.callback_exit,e,t,o))},Mo=["IMG","IFRAME","VIDEO"],Tt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,Io=(e,t,n)=>{e.forEach(o=>{Mo.indexOf(o.tagName)!==-1&&yo(o,t,n)}),Et(n,0)},So=e=>e.isIntersecting||e.intersectionRatio>0,Oo=(e,t)=>{t.forEach(n=>{e.observe(n)})},To=(e,t)=>{Zn(e),Oo(e,t)},Ho=(e,t)=>{Tt(e)||(t._observer=new IntersectionObserver(n=>{((o,a,s)=>{o.forEach(l=>So(l)?xo(l.target,l,a,s):Ao(l.target,l,a,s))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},Ht=e=>Array.prototype.slice.call(e),pe=e=>e.container.querySelectorAll(e.elements_selector),Do=e=>Ht(e).filter(je),No=e=>Vn(e),Ro=e=>Ht(e).filter(No),ot=(e,t)=>Do(e||pe(t)),Po=(e,t)=>{Ro(pe(e)).forEach(n=>{I(n,e.class_error),be(n)}),t.update()},Yo=(e,t)=>{R&&(t._onlineHandler=()=>{Po(e,t)},window.addEventListener("online",t._onlineHandler))},jo=e=>{R&&window.removeEventListener("online",e._onlineHandler)},Q=function(e,t){const n=mt(e);this._settings=n,this.loadingCount=0,Ho(n,this),Yo(n,this),this.update(t)};Q.prototype={update:function(e){const t=this._settings,n=ot(e,t);Et(this,n.length),dt?this.loadAll(n):Tt(t)?Io(n,t,this):To(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),jo(this),pe(this._settings).forEach(e=>{kt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;ot(e,t).forEach(n=>{_e(n,this),Se(n,t,this)})},restoreAll:function(){const e=this._settings;pe(e).forEach(t=>{Co(t,e)})}},Q.load=(e,t)=>{const n=mt(t);Se(e,n)},Q.resetStatus=e=>{be(e)},R&&qn(Q,window.lazyLoadOptions);function qo(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new Q({elements_selector:".lazy",...e})}function Bo(){const e=te();e.value.vanillaLazyload.enable&&he(()=>{qo(e.value.vanillaLazyload)})}function Uo(){Te&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const s=o.querySelector(".blocks");if(!s)return;const l=Array.from(s.children).find(h=>h.classList.contains("active"));if(!l)return;const i=s.children[a];if(!i||l===i)return;l.classList.remove("active"),i.classList.add("active");const f=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);f==null||f.scrollIntoView({block:"nearest"})}})}const Fo={key:0,text:"center"},Vo=["href"],Xo={m:"y-4",class:"end flex justify-center items-center"},Go={p:"x-4",font:"bold",class:"whitespace-nowrap"},Ko=ne({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=De(),o=st();return it(()=>{yn(o.value)}),he(()=>{de()}),Qt(()=>{de()}),t.frontmatter.aplayer&&On(),t.frontmatter.codepen&&Tn(),$n(),Uo(),Sn(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&In(),Bo(),(a,s)=>a.$slots.default?(S(),G("article",{key:0,class:Ae(a.frontmatter.markdownClass||"markdown-body")},[L(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:s[0]||(s[0]=(...l)=>_(de)&&_(de)(...l))}),a.frontmatter.url?(S(),G("div",Fo,[w("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},q(_(n)("post.view_link")),9,Vo)])):M("v-if",!0),a.frontmatter.end!==void 0?L(a.$slots,"end",{key:1},()=>[w("div",Xo,[s[1]||(s[1]=w("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),w("span",Go,q(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),s[2]||(s[2]=w("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])]):M("v-if",!0)],2)):M("v-if",!0)}}),Wo={key:0,class:"yun-time-warning",op:"80"},Zo=ne({__name:"YunMdTimeWarning",setup(e){const t=He(),{t:n,locale:o}=De(),a=O(()=>t.value.updated||t.value.date||new Date),s=st("");en(o,()=>{const i=bn(a.value,{addSuffix:!0});s.value=/^\d/.test(i)?` ${i}`:i},{immediate:!0});const l=O(()=>{const i=lt(new Date,a.value);return typeof t.value.time_warning=="number"?i>t.value.time_warning:t.value.time_warning});return(i,f)=>l.value?(S(),G("blockquote",Wo,q(_(n)("post.time_warning",{ago:s.value})),1)):M("v-if",!0)}}),Jo={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Qo={font:"black",flex:"","items-center":""},ea={op:"90","mt-1":""},ta=ne({__name:"YunAiExcerpt",setup(e){const t=He(),{t:n}=De();return(o,a)=>(S(),G("div",Jo,[w("div",Qo,[a[0]||(a[0]=w("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),w("div",null,q(_(n)("excerpt.ai")),1)]),w("div",ea,q(_(t).excerpt),1)]))}}),na={class:"yun-main lt-md:w-full",flex:"~ center"},oa={class:"mt-8 mb-4"},aa={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},ca=ne({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=te(),{styles:o,icon:a,color:s}=ln(t.frontmatter.type),l=tn(O(()=>t.frontmatter)),i=O(()=>t.frontmatter.aside!==!1),f=at(),h=nn();return on(()=>{f.hash&&setTimeout(()=>{ct(document.body,f.hash,{smooth:!0})},0)}),it(()=>{En(h)}),(m,re)=>{const y=sn,x=ta,p=Zo,H=Ko,we=rn,$e=Yn,ze=Xt;return S(),G("main",na,[L(m.$slots,"main",{},()=>[w("div",{class:Ae(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!i.value}]),flex:"~ col grow",p:"lt-md:0"},[J(we,{cover:m.frontmatter.cover,m:"0",class:"relative",style:an(_(o))},{default:ve(()=>[w("div",oa,[L(m.$slots,"main-header",{},()=>[J(y,{title:_(l),icon:m.frontmatter.icon||_(a),color:m.frontmatter.color||_(s),cover:m.frontmatter.cover,"page-title-class":m.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])])]),L(m.$slots,"main-header-after"),w("div",aa,[L(m.$slots,"main-content",{},()=>[M(" <Transition appear> "),J(H,{frontmatter:m.frontmatter},{default:ve(()=>[m.frontmatter.excerpt_type==="ai"&&m.frontmatter.excerpt?(S(),ge(x,{key:0})):M("v-if",!0),J(p),L(m.$slots,"main-content-md"),L(m.$slots,"default")]),_:3},8,["frontmatter"]),M(" </Transition> ")]),L(m.$slots,"main-content-after")])]),_:3},8,["cover","style"]),L(m.$slots,"main-nav-before"),L(m.$slots,"main-nav",{},()=>[m.frontmatter.nav!==!1?(S(),ge($e,{key:0})):M("v-if",!0)]),L(m.$slots,"main-nav-after"),_(n).comment.enable&&m.frontmatter.comment!==!1?L(m.$slots,"comment",{key:0},()=>[J(ze,{class:Ae(m.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):M("v-if",!0),L(m.$slots,"main-footer-before"),L(m.$slots,"main-footer-after")],2)])])}}});export{ca as _};
