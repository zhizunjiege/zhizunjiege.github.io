import{d as f,o as s,b as a,g as o,r as C,i as v,l as x,ah as F,ab as V,S as h,n as z,I as A,F as R,m as P,c as k,f as m,J as B,_ as M,q as c,a7 as D,t as g,v as y,aa as H,w as L,W as G,ai as I,a3 as E,aj as W,ak as O,G as w,al as J,e as K,N as Q,s as U,a0 as X}from"./app-Bkzu69aX.js";import{c as N}from"./index-x8TNrC4q.js";import{g as T}from"./animation-DL3tqwl3.js";const Z={class:"w-full px-4 flex-center"},ee={class:"yun-notice w-full"},te=["innerHTML"],ne=f({__name:"YunNotice",props:{content:{}},setup(l){return(t,e)=>(s(),a("div",Z,[o("div",ee,[o("span",{innerHTML:t.content},null,8,te),C(t.$slots,"default")])]))}}),se={class:"size-10 inline-flex-center"},oe=["href","title"],ae=f({__name:"PrologueSocialIcon",props:{social:{},delay:{}},setup(l){const t=l,e=v();return x(e,{initial:{scale:.8,x:0,y:20,opacity:0},enter:{scale:1,x:0,y:0,opacity:1,transition:{type:"spring",duration:2e4,damping:8,delay:t.delay}}}),(n,r)=>{const i=F("tooltip");return V((s(),a("div",se,[o("a",{ref_key:"iconRef",ref:e,class:"prologue-social-icon inline-flex-center w-full h-full text-white bg-$c-brand hover:bg-white hover:text-$c-brand",rel:"noopener",href:n.social.link,title:n.social.name,target:"_blank",style:z(`--c-brand:${n.social.color}`)},[o("div",{class:h(["size-6",n.social.icon])},null,2)],12,oe)])),[[i,n.social.name]])}}}),re={flex:"~ wrap",class:"justify-center items-center mx-5"},ie=f({__name:"PrologueSocialLinks",setup(l){const t=A();return(e,n)=>{const r=ae;return s(),a("div",re,[(s(!0),a(R,null,P(m(t).social,(i,u)=>(s(),k(r,{key:u,social:i,delay:u*50+1e3},null,8,["social","delay"]))),128))])}}}),ce=f({__name:"YunAERect",setup(l){const t=v(),e=v(),n=v(),r=v(),i=v(),u={type:"tween",duration:600,ease:N.easeIn};return x(t,{initial:{backgroundColor:"rgba(255, 255, 255, 0)"},enter:{backgroundColor:"rgba(255, 255, 255, 0.05)",transition:{type:"keyframes",duration:1e3,ease:N.easeIn}}}),x(e,{initial:{x:"-100%"},enter:{x:"0%",transition:u}}),x(n,{initial:{y:"-100%"},enter:{y:"0%",transition:u}}),x(r,{initial:{x:"100%"},enter:{x:"0%",transition:u}}),x(i,{initial:{y:"100%"},enter:{y:"0%",transition:u}}),(d,_)=>(s(),a("div",{ref_key:"rectRef",ref:t,class:"absolute ae-rect"},[o("div",{ref_key:"tRef",ref:e},null,512),o("div",{ref_key:"lRef",ref:n},null,512),o("div",{ref_key:"bRef",ref:r},null,512),o("div",{ref_key:"rRef",ref:i},null,512)],512))}}),le=f({__name:"YunAEFrame",setup(l){const t=v(!1);return B(()=>{t.value=!0}),(e,n)=>(s(),a("div",{class:h(["yun-ae-frame",{play:t.value}])},n[0]||(n[0]=[o("div",{class:"tl absolute"},null,-1),o("div",{class:"tr absolute"},null,-1),o("div",{class:"bl absolute"},null,-1),o("div",{class:"br absolute"},null,-1)]),2))}}),ue={},_e={class:"grid-bg"},pe={flex:"~ col",class:"justify-center items-center absolute bottom-$rect-margin left-0 right-0"};function fe(l,t){const e=le,n=ce,r=ie;return s(),a("div",_e,[c(e),c(n),o("div",pe,[c(r)])])}const me=M(ue,[["render",fe]]),de={class:"say"},ve={key:0,class:"say-content animate-fade-in animate-iteration-1"},he={key:1,class:"say-author"},ye={key:2,class:"say-from"},be=f({__name:"YunSay",setup(l){const t=D(),e=v(""),n=v(""),r=v("");function i(){const u=t.value.say.hitokoto.enable?t.value.say.hitokoto.api:t.value.say.api;u&&fetch(u).then(d=>{if(d.ok)d.json().then(_=>{if(t.value.say.hitokoto.enable)e.value=_.hitokoto,n.value=_.from_who,r.value=_.from;else{const p=_[Math.floor(Math.random()*_.length)];p.content?(e.value=p.content,n.value=p.author,r.value=p.from):e.value=p}});else throw new Error(`${t.value.say.api}, HTTP error, status = ${d.status}`)}).catch(d=>{console.error(d.message)})}return B(()=>{i()}),(u,d)=>(s(),a("div",de,[e.value?(s(),a("span",ve,g(e.value),1)):y("v-if",!0),n.value?(s(),a("span",he,g(n.value),1)):y("v-if",!0),r.value?(s(),a("span",ye,g(r.value),1)):y("v-if",!0)]))}}),ge=f({__name:"YunGoDown",setup(l){return(t,e)=>(s(),a("button",{class:"go-down w-20 bottom-0 text-sm md:bottom-2 md:text-40px","aria-label":"go-down",onClick:e[0]||(e[0]=(...n)=>m(T)&&m(T)(...n))},e[1]||(e[1]=[o("div",{"i-ri-arrow-down-s-fill":"","inline-flex":""},null,-1)])))}}),$e=f({__name:"YunSiteLinkItem",props:{page:{}},setup(l){const t=H();return(e,n)=>{const r=G;return s(),k(r,{class:"link-item inline-flex-center gap-2 transition rounded text-base p-1 md:text-xl md:p-3 text-$va-c-text","inline-flex":"",to:e.page.url,title:e.page.name,style:z(`color:${e.page.color}`),hover:"bg-white/80 dark:bg-black/80",onClick:n[0]||(n[0]=i=>m(t).fullscreenMenu.isOpen=!1)},{default:L(()=>[o("div",{class:h([e.page.icon,"icon"])},null,2),o("span",null,g(e.page.name),1)]),_:1},8,["to","title","style"])}}}),ke={key:0,class:"site-description text-$va-c-text text-sm"},xe=f({__name:"YunSiteDescription",setup(l){const t=A();return(e,n)=>m(t).description?(s(),a("div",ke,g(m(t).description),1)):y("v-if",!0)}}),we={key:0,class:"site-subtitle block text-$va-c-text op-80",text:"sm"},Ye=f({__name:"YunSiteSubtitle",setup(l){const t=A();return(e,n)=>m(t).subtitle?(s(),a("h4",we,g(m(t).subtitle),1)):y("v-if",!0)}}),Se={},Ce={class:"h-1px bg-black/50 dark:bg-white/80 my-4 md:my-6"};function Ae(l,t){return s(),a("div",Ce)}const Re=M(Se,[["render",Ae]]),ze={key:0,class:"site-author-intro",m:"t-0 b-4"},Le=f({__name:"YunAuthorIntro",setup(l){const t=A();return(e,n)=>m(t).author.intro?(s(),a("div",ze,g(m(t).author.intro),1)):y("v-if",!0)}}),Ie=["src"],Pe=f({__name:"YunAuthorAvatar",setup(l){const t=A();return(e,n)=>(s(),a("img",{class:"rounded-full size-full",src:m(t).author.avatar,alt:"avatar"},null,8,Ie))}}),Be={key:0,class:"line-burst-effects absolute"},De=f({__name:"LineBurstEffects",props:{delay:{},duration:{}},setup(l){const t=l,e=v(!0);return B(async()=>{await I(t.delay),e.value=!1,await I(t.duration),e.value=!0}),(n,r)=>e.value?y("v-if",!0):(s(),a("div",Be,[(s(),a(R,null,P(8,i=>o("div",{key:i,class:"line"},r[0]||(r[0]=[o("div",null,[o("span")],-1)]))),64))]))}}),je={flex:"~ col",class:"yun-square-container items-center justify-center text-center size-$total-char-height"},Ee={flex:"~ col",class:"absolute yun-square bg-$va-c-text square-rotate z-1"},Ne={flex:"~ col",class:"gap-2 items-center justify-center"},Te={class:"mt-4 flex-center w-64 md:w-100 m-auto gap-2",flex:"~ wrap",p:"x-$rect-margin"},Me=f({__name:"PrologueSquare",setup(l){const t=D(),e=v(!1);return(n,r)=>{const i=De,u=Pe,d=W,_=Le,p=Re,$=O,Y=Ye,S=xe,b=$e;return s(),a("div",je,[C(n.$slots,"default"),o("div",{flex:"~ col center",class:h(["info-with-avatar relative duration-800 transition-cubic-bezier-ease-in",{show:e.value}])},[c(E,{"enter-from-class":"enter-from","enter-to-class":"enter-to",appear:"",onAfterAppear:r[0]||(r[0]=j=>e.value=!0)},{default:L(()=>[o("div",Ee,[c(i,{class:"absolute top-0 left-0 right-0 bottom-0 size-full scale-200",delay:200,duration:400}),c(E,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-400 delay-400",appear:""},{default:L(()=>[c(u)]),_:1})])]),_:1}),o("div",{class:h(["info",{show:e.value}])},[c(d,{class:"mt-3"}),c(_),c(p),o("div",Ne,[c($),c(Y),c(S)]),c(p),o("div",Te,[c(b,{page:{name:"博客文章",icon:"i-ri-article-line",url:"/posts/"}}),C(n.$slots,"default"),(s(!0),a(R,null,P(m(t).pages,(j,q)=>(s(),k(b,{key:q,page:j},null,8,["page"]))),128))])],2)],2)])}}}),qe={class:"banner-line-container"},Fe={key:0,class:"banner-char-container"},Ve={class:"char"},He={class:"banner-line-container bottom"},Ge=f({__name:"YunBanner",setup(l){const t=D(),e=w(()=>{const _=[];for(let p=0;p<t.value.banner.title.length;p++){const $=J(1.5,3.5);_.push($)}return _}),n=w(()=>e.value.reduce((_,p)=>_+p,0)),r=w(()=>({"--total-char-height":`${n.value}rem`,"--banner-line-height":`calc(var(--banner-height, 100 * var(--vh)) / 2 - ${n.value/2}rem)`,"justify-content":"space-between"})),i=v("enter"),u=w(()=>i.value),d=v("banner");return B(async()=>{await I(500),i.value="active",await I(500),i.value="exit",d.value="prologue"}),(_,p)=>{const $=Me,Y=ge;return s(),a("div",{id:"yun-banner",style:z(r.value)},[o("div",qe,[o("div",{class:h(["banner-line vertical-line-top",u.value])},null,2)]),d.value==="banner"?(s(),a("div",Fe,[(s(!0),a(R,null,P(m(t).banner.title,(S,b)=>(s(),a("div",{key:b,class:"char-box"},[o("span",{class:h([b%2!==0?"char-right":"char-left"]),style:z({"--banner-char-size":`${e.value[b]}rem`})},[o("span",Ve,g(S),1)],6)]))),128))])):(s(),k($,{key:1,class:"z-1"})),o("div",He,[o("div",{class:h(["banner-line vertical-line-bottom",u.value])},null,2)]),c(Y)],4)}}}),Ke=f({__name:"home",setup(l){const t=K(),e=D(),n=w(()=>t.path.startsWith("/page")),r=w(()=>{const i=e.value.notice;return i.enable&&(n.value?!i.hideInPages:!0)});return(i,u)=>{const d=Ge,_=be,p=me,$=ne,Y=Q("RouterView"),S=U,b=X;return s(),k(b,{class:h(["items-center flex-col",{"mt-0!":!n.value}])},{default:L(()=>[n.value?y("v-if",!0):(s(),a(R,{key:0},[c(d),m(e).say.enable?(s(),k(_,{key:0,w:"full"})):y("v-if",!0),c(p,{class:"absolute left-0 top-0 right-0 bottom-0"})],64)),r.value?(s(),k($,{key:1,class:h(["mb-2 md:mb-6",{"mt-4":!n.value}]),content:m(e).notice.content},null,8,["class","content"])):y("v-if",!0),C(i.$slots,"board"),C(i.$slots,"default",{},()=>[c(Y)]),c(S)]),_:3},8,["class"])}}});export{Ke as default};
