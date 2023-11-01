import{d as _,u as d,a as p,c as m,b as u,r as h,o as s,e as n,f as t,t as a,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-6ef1431d.js";import{N as w}from"./NoteDisplay-b6cd09f3.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(E){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const c=u(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(s(),n("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",L,[t("h1",S,a(l(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(c.value,(e,i)=>(s(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(l(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(s(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),R=P(C,[["__file","E:/project/ppt/Repoter/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
