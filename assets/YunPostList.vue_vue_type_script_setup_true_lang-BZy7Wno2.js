import{e as L,G as c,d as S,N as Y,o as t,b as n,f as o,c as h,w as x,g as p,v as l,F as z,m as T,h as N,t as C,S as b,_ as j,O as B,q as $,n as R,W as V,V as M,i as H,H as I,I as E}from"./app-Bkzu69aX.js";import{b as F,_ as G,a as q}from"./YunPostMeta.vue_vue_type_style_index_0_lang-B8fC3Mta.js";import{u as A}from"./post-CFViN5ca.js";function D(f){const m=L(),s=c(()=>Number.parseInt(m.params.page||"1")),a=c(()=>Math.ceil(f.total/f.pageSize)),d=c(()=>s.value===1||s.value===a.value?3:2);function e(r){return r===1||r===a.value?!0:r>s.value-d.value&&r<s.value+d.value}function u(r){return r===1?"/":`/page/${r}`}const _=c(()=>u(s.value-1)),g=c(()=>u(s.value+1)),i=c(()=>s.value>1),y=c(()=>s.value<a.value);return{curPage:s,totalPages:a,showPage:e,surLen:d,getTo:u,prevTo:_,nextTo:g,showPrev:i,showNext:y}}const O={class:"pagination"},W=S({__name:"YunPagination",props:{total:{},pageSize:{}},setup(f,{expose:m}){const s=f,{curPage:a,totalPages:d,showPage:e,getTo:u,surLen:_,prevTo:g,nextTo:i,showPrev:y,showNext:r}=D({total:s.total,pageSize:s.pageSize});return m({curPage:a}),(P,w)=>{const k=Y("RouterLink");return t(),n("nav",O,[o(y)?(t(),h(k,{key:0,class:"page-number",to:o(g),"aria-label":"prev"},{default:x(()=>w[0]||(w[0]=[p("div",{"i-ri-arrow-left-s-line":""},null,-1)])),_:1},8,["to"])):l("v-if",!0),(t(!0),n(z,null,T(o(d),v=>(t(),n(z,null,[o(e)(v)?(t(),h(k,{key:v,class:b(["page-number",o(a)===v&&"active"]),to:o(u)(v)},{default:x(()=>[N(C(v),1)]),_:2},1032,["class","to"])):v===o(a)-o(_)?(t(),n("span",{key:`prev-space-${v}`,class:"space",disabled:""}," ... ")):v===o(a)+o(_)?(t(),n("span",{key:`next-space-${v}`,class:"space",disabled:""}," ... ")):l("v-if",!0)],64))),256)),o(r)?(t(),h(k,{key:1,class:"page-number",to:o(i),"aria-label":"next"},{default:x(()=>w[1]||(w[1]=[p("div",{"i-ri-arrow-right-s-line":""},null,-1)])),_:1},8,["to"])):l("v-if",!0)])}}}),J={},K={w:"full",h:"10",class:"absolute bottom-0 bg-gradient-to-t from-$va-c-bg-light to-transparent z-1"};function Q(f,m){return t(),n("div",K)}const U=j(J,[["render",Q]]),X={class:"flex flex-1 of-hidden justify-start items-start post-card-info",w:"full"},Z=["src","alt"],ee={class:"flex-center title text-2xl",text:"center",font:"serif black"},te={flex:"~ grow col",w:"full",justify:"center",items:"center"},se={key:0,py:"1"},oe=["innerHTML"],ne={key:2,m:"b-5"},ae=["href"],re={w:"full",class:"yun-card-actions flex justify-between","min-h":"10",text:"sm"},le={class:"post-categories inline-flex",flex:"wrap 1",items:"center"},ie=S({__name:"YunPostCard",props:{post:{}},setup(f){const m=f,{t:s}=B(),{icon:a,styles:d}=A(m.post.type);return(e,u)=>{const _=V,g=F,i=U,y=G,r=q,P=M;return t(),h(P,{class:b(["w-full",e.post.cover?"post-card-image":"post-card"]),m:"auto",overflow:"hidden",style:R(o(d))},{default:x(()=>[p("div",X,[e.post.cover?(t(),n("img",{key:0,src:e.post.cover,alt:o(s)("post.cover"),width:"320",height:"180",w:"40%",h:"54",class:"cover object-cover object-center md:shadow",loading:"lazy"},null,8,Z)):l("v-if",!0),p("div",{class:b(["flex flex-col items-center relative",e.post.cover&&"h-54"]),w:"full"},[$(_,{class:b(["post-title-link cursor-pointer",e.post.postTitleClass]),to:e.post.path||"",m:"t-3"},{default:x(()=>[p("div",ee,[e.post.type?(t(),n("div",{key:0,class:b(["inline-flex",o(a)]),m:"r-1"},null,2)):l("v-if",!0),p("span",null,C(e.post.title),1)])]),_:1},8,["to","class"]),$(g,{frontmatter:e.post},null,8,["frontmatter"]),p("div",te,[e.post.excerpt_type==="text"?(t(),n("div",se)):l("v-if",!0),e.post.excerpt?(t(),n("div",{key:1,class:"markdown-body",op:"90",text:"left",w:"full",p:"x-6 lt-sm:4 y-2",innerHTML:e.post.excerpt},null,8,oe)):(t(),n("div",ne))]),l(' <div m="b-5" /> '),e.post.excerpt?(t(),h(i,{key:0})):l("v-if",!0),e.post.url?(t(),n("a",{key:1,href:e.post.url,class:"post-link-btn shadow hover:shadow-md z-2",rounded:"",target:"_blank",m:"b-4"},C(o(s)("post.view_link")),9,ae)):l("v-if",!0)],2)]),l(" always show "),p("div",re,[p("div",le,[$(y,{m:"l-1",categories:e.post.categories},null,8,["categories"])]),e.post.tags?(t(),h(r,{key:0,m:"1",tags:e.post.tags},null,8,["tags"])):l("v-if",!0)])]),_:1},8,["class","style"])}}}),ce={flex:"~ col",class:"yun-post-list gap-4",w:"full",p:"x-4 lt-sm:0"},ue={key:0,py2:"",op50:"","text-center":""},_e=S({__name:"YunPostList",props:{type:{},posts:{}},setup(f){const m=f,s=H(),a=c(()=>{var i;return((i=s.value)==null?void 0:i.curPage)||1}),d=I(),e=E(),u=c(()=>e.value.pageSize),_=c(()=>(m.posts||d.postList).filter(i=>!i.hide)),g=c(()=>_.value.slice((a.value-1)*u.value,a.value*u.value));return(i,y)=>{const r=ie,P=W;return t(),n(z,null,[p("div",ce,[g.value.length?l("v-if",!0):(t(),n("div",ue," 博主还什么都没写哦～ ")),(t(!0),n(z,null,T(g.value,(w,k)=>(t(),h(r,{key:k,post:w},null,8,["post"]))),128))]),$(P,{ref_key:"paginationRef",ref:s,class:"mt-5",total:_.value.length,"page-size":u.value},null,8,["total","page-size"])],64)}}});export{_e as _};
