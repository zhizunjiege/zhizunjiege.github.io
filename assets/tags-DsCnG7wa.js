import{a8 as O,aA as R,d as k,i as V,o as c,b as $,g as f,t as S,X as W,Y as j,e as G,u as K,a7 as X,O as Z,K as J,G as C,H as Q,T as U,N as tt,q as t,w as n,c as T,Z as et,f as s,a3 as nt,F as b,m as st,n as at,v as ot,$ as rt,V as it,a1 as ct,a0 as lt,s as ut}from"./app-Bkzu69aX.js";import{_ as mt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-D3OyX8a8.js";import{a as pt,u as _t}from"./animation-BninvUpd.js";import{_ as ft}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DF9C8biv.js";import"./index-x8TNrC4q.js";function gt(u={primary:"#0078E7"}){const a=O(),o=new R("#999999"),r=new R(u.primary);return{tags:a,getTagStyle:i=>{const p=Array.from(a.value).map(([d,h])=>h.count),g=Math.max(...p),e=Math.min(...p),y=g-e,_=(i-e)/y;return{"--yun-tag-color":o.mix(r,_*100).toString(),fontSize:`${_*36+12}px`}}}}const yt={"inline-flex":""},dt={"inline-flex":"",text:"xs"},ht=k({__name:"YunLayoutPostTag",props:{i:{},title:{},count:{}},setup(u){const a=u,o=V();return pt(o,{i:a.i||0,delay:25}),(r,m)=>(c(),$("span",{ref_key:"tagRef",ref:o,"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},[f("span",yt,"#"+S(r.title),1),f("span",dt,"["+S(r.count)+"]",1)],512))}}),vt={class:"yun-text-light",text:"center",p:"2"},xt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},Lt=k({__name:"tags",setup(u){W([j({"@type":"CollectionPage"})]);const a=G(),o=K(),r=X(),{t:m}=Z(),i=J(),{tags:p,getTagStyle:g}=gt({primary:r.value.colors.primary}),e=C(()=>a.query.tag||""),y=Q(),_=C(()=>y.postList.filter(l=>l.tags?typeof l.tags=="string"?l.tags===e.value:l.tags.includes(e.value):!1)),d=V(),{show:h}=_t(d);function A(v){o.push({query:{tag:v}}),h()}const B=U(i),Y=C(()=>Array.from(p.value).sort());return(v,l)=>{const F=rt,w=ft,N=ht,L=tt("RouterView"),q=mt,E=it,z=ct,D=lt,H=ut;return c(),$(b,null,[t(D,null,{default:n(()=>[t(F),t(L,null,{default:n(({Component:I})=>[(c(),T(et(I),null,{"main-header":n(()=>[t(w,{title:s(B)||s(m)("menu.tags"),icon:s(i).icon||"i-ri-tag-line",color:s(i).color,"page-title-class":s(i).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":n(()=>[t(nt,{"enter-active-class":"animate-fade-in animate-duration-400",appear:""},{default:n(()=>[f("div",vt,S(s(m)("counter.tags",Y.value.length)),1)]),_:1}),f("div",xt,[(c(!0),$(b,null,st(Y.value,([x,P],M)=>(c(),T(N,{key:x,i:M,title:x,count:P.count,style:at(s(g)(P.count)),onClick:Ct=>A(x.toString())},null,8,["i","title","count","style","onClick"]))),128))]),t(L)]),"main-nav-before":n(()=>[e.value?(c(),T(E,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:n(()=>[t(w,{title:e.value,icon:"i-ri-hashtag"},null,8,["title"]),t(q,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:_.value},null,8,["posts"])]),_:1},512)):ot("v-if",!0)]),_:2},1024))]),_:1}),t(z)]),_:1}),t(H)],64)}}});export{Lt as default};
