import{_ as M,o as n,c as l,a as r,d as B,u as R,r as S,w as K,b as x,g as U,h as D,i as H,v as j,j as k,k as y,F as L,l as w,f as P,e as p,t as h,m as F,n as g,T as V,p as u,q as f,s as N,x as z,y as A,z as E,A as G}from"./index-93d445c1.js";import{B as q}from"./Loader-fff7293f.js";import{u as I}from"./favoriteSvg-e132a9ae.js";import{u as O,B as Z}from"./Table-9bde68a8.js";const J={},Q={width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=r("path",{d:"M17 17L21 21",stroke:"#323232","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),X=r("path",{d:"M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:"#323232","stroke-width":"2"},null,-1),Y=[W,X];function $(i,a){return n(),l("svg",Q,Y)}const ee=M(J,[["render",$]]),te={class:"input-search-wrapper"},ae={key:0,class:"input-search-suggestions"},se={class:"input-search-suggestions__list"},ne={key:0,class:""},le={key:2,class:"input-search-suggestions__item input-search-suggestions__item--disabled"},ie={key:3,class:"input-search-suggestions__item input-search-suggestions__item--disabled"},ue=B({__name:"input-search",props:{modelValue:{}},emits:["update:modelValue"],setup(i){const a=I(),e=R(i,"modelValue"),o=S(!1);K(e,async()=>{await a.getSearchPeoples(String(e.value))});const d=x(()=>a.searchResults),s=x(()=>a.countSearchResult);function t(){o.value=!1}function c(){o.value=!0}return(C,_)=>{const b=U("router-link"),m=D("click-outside");return H((n(),l("div",te,[r("label",{class:"input-search",for:"search-input",onClick:_[1]||(_[1]=v=>c())},[H(r("input",{id:"search-input",type:"search",placeholder:"Поиск","onUpdate:modelValue":_[0]||(_[0]=v=>e.value=v)},null,512),[[j,e.value]]),k(ee)]),k(V,null,{default:y(()=>[o.value?(n(),l("div",ae,[r("div",se,[s.value&&e.value?(n(),l("div",ne,[(n(!0),l(L,null,w(d.value,v=>(n(),P(b,{key:v.name,to:{name:"peoplesDetail",params:{id:F(O)(v.url)},query:C.$route.query},class:"input-search-suggestions__item"},{default:y(()=>[p(h(v.name),1)]),_:2},1032,["to"]))),128))])):s.value===null&&e.value?(n(),P(q,{key:1})):s.value===0?(n(),l("div",le,"Ничего не найдено")):e.value?g("",!0):(n(),l("div",ie,"Пожалуйста, введите текст для поиска"))])])):g("",!0)]),_:1})])),[[m,t]])}}});const de=M(ue,[["__scopeId","data-v-438c6966"]]);var re=(i,a)=>{const e=i.__vccOpts||i;for(const[o,d]of a)e[o]=d;return e};const oe={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(i){this.innerValue=i}},pages:function(){let i={};if(this.pageCount<=this.pageRange)for(let a=0;a<this.pageCount;a++){let e={index:a,content:a+1,selected:a===this.selected-1};i[a]=e}else{const a=Math.floor(this.pageRange/2);let e=t=>{let c={index:t,content:t+1,selected:t===this.selected-1};i[t]=c},o=t=>{let c={disabled:!0,breakView:!0};i[t]=c};for(let t=0;t<this.marginPages;t++)e(t);let d=0;this.selected-a>0&&(d=this.selected-1-a);let s=d+this.pageRange-1;s>=this.pageCount&&(s=this.pageCount-1,d=s-this.pageRange+1);for(let t=d;t<=s&&t<=this.pageCount-1;t++)e(t);d>this.marginPages&&o(d-1),s+1<this.pageCount-this.marginPages&&o(s+1);for(let t=this.pageCount-1;t>=this.pageCount-this.marginPages;t--)e(t)}return i}},methods:{handlePageSelected(i){this.selected!==i&&(this.innerValue=i,this.$emit("update:modelValue",i),this.clickHandler(i))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return this.selected===1},lastPageSelected(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},ce=["tabindex","innerHTML"],ge=["tabindex","innerHTML"],ve=["onClick","onKeyup"],fe=["tabindex","innerHTML"],he=["tabindex","innerHTML"],_e=["innerHTML"],ke=["innerHTML"],Ce=["onClick","onKeyup"],me=["innerHTML"],ye=["innerHTML"];function xe(i,a,e,o,d,s){return e.noLiSurround?(n(),l("div",{key:1,class:u(e.containerClass)},[e.firstLastButton?(n(),l("a",{key:0,onClick:a[8]||(a[8]=t=>s.selectFirstPage()),onKeyup:a[9]||(a[9]=f(t=>s.selectFirstPage(),["enter"])),class:u([e.pageLinkClass,s.firstPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.firstButtonText},null,42,_e)):g("",!0),s.firstPageSelected()&&e.hidePrevNext?g("",!0):(n(),l("a",{key:1,onClick:a[10]||(a[10]=t=>s.prevPage()),onKeyup:a[11]||(a[11]=f(t=>s.prevPage(),["enter"])),class:u([e.prevLinkClass,s.firstPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.prevText},null,42,ke)),(n(!0),l(L,null,w(s.pages,t=>(n(),l(L,null,[t.breakView?(n(),l("a",{key:t.index,class:u([e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""]),tabindex:"0"},[N(i.$slots,"breakViewContent",{},()=>[p(h(e.breakViewText),1)])],2)):t.disabled?(n(),l("a",{key:t.index,class:u([e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass]),tabindex:"0"},h(t.content),3)):(n(),l("a",{key:t.index,onClick:c=>s.handlePageSelected(t.index+1),onKeyup:f(c=>s.handlePageSelected(t.index+1),["enter"]),class:u([e.pageLinkClass,t.selected?e.activeClass:""]),tabindex:"0"},h(t.content),43,Ce))],64))),256)),s.lastPageSelected()&&e.hidePrevNext?g("",!0):(n(),l("a",{key:2,onClick:a[12]||(a[12]=t=>s.nextPage()),onKeyup:a[13]||(a[13]=f(t=>s.nextPage(),["enter"])),class:u([e.nextLinkClass,s.lastPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.nextText},null,42,me)),e.firstLastButton?(n(),l("a",{key:3,onClick:a[14]||(a[14]=t=>s.selectLastPage()),onKeyup:a[15]||(a[15]=f(t=>s.selectLastPage(),["enter"])),class:u([e.pageLinkClass,s.lastPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.lastButtonText},null,42,ye)):g("",!0)],2)):(n(),l("ul",{key:0,class:u(e.containerClass)},[e.firstLastButton?(n(),l("li",{key:0,class:u([e.pageClass,s.firstPageSelected()?e.disabledClass:""])},[r("a",{onClick:a[0]||(a[0]=t=>s.selectFirstPage()),onKeyup:a[1]||(a[1]=f(t=>s.selectFirstPage(),["enter"])),class:u(e.pageLinkClass),tabindex:s.firstPageSelected()?-1:0,innerHTML:e.firstButtonText},null,42,ce)],2)):g("",!0),s.firstPageSelected()&&e.hidePrevNext?g("",!0):(n(),l("li",{key:1,class:u([e.prevClass,s.firstPageSelected()?e.disabledClass:""])},[r("a",{onClick:a[2]||(a[2]=t=>s.prevPage()),onKeyup:a[3]||(a[3]=f(t=>s.prevPage(),["enter"])),class:u(e.prevLinkClass),tabindex:s.firstPageSelected()?-1:0,innerHTML:e.prevText},null,42,ge)],2)),(n(!0),l(L,null,w(s.pages,t=>(n(),l("li",{key:t.index,class:u([e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""])},[t.breakView?(n(),l("a",{key:0,class:u([e.pageLinkClass,e.breakViewLinkClass]),tabindex:"0"},[N(i.$slots,"breakViewContent",{},()=>[p(h(e.breakViewText),1)])],2)):t.disabled?(n(),l("a",{key:1,class:u(e.pageLinkClass),tabindex:"0"},h(t.content),3)):(n(),l("a",{key:2,onClick:c=>s.handlePageSelected(t.index+1),onKeyup:f(c=>s.handlePageSelected(t.index+1),["enter"]),class:u(e.pageLinkClass),tabindex:"0"},h(t.content),43,ve))],2))),128)),s.lastPageSelected()&&e.hidePrevNext?g("",!0):(n(),l("li",{key:2,class:u([e.nextClass,s.lastPageSelected()?e.disabledClass:""])},[r("a",{onClick:a[4]||(a[4]=t=>s.nextPage()),onKeyup:a[5]||(a[5]=f(t=>s.nextPage(),["enter"])),class:u(e.nextLinkClass),tabindex:s.lastPageSelected()?-1:0,innerHTML:e.nextText},null,42,fe)],2)),e.firstLastButton?(n(),l("li",{key:3,class:u([e.pageClass,s.lastPageSelected()?e.disabledClass:""])},[r("a",{onClick:a[6]||(a[6]=t=>s.selectLastPage()),onKeyup:a[7]||(a[7]=f(t=>s.selectLastPage(),["enter"])),class:u(e.pageLinkClass),tabindex:s.lastPageSelected()?-1:0,innerHTML:e.lastButtonText},null,42,he)],2)):g("",!0)],2))}var Pe=re(oe,[["render",xe]]);const be=B({__name:"pagination",props:z({peoplesCount:{},modelValue:{}},{modelValue:{}}),emits:["update:modelValue"],setup(i){const a=R(i,"modelValue"),e=x(()=>Math.ceil(i.peoplesCount/10));return(o,d)=>(n(),P(F(Pe),{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=s=>a.value=s),"page-count":e.value,"margin-pages":2,"page-class":"pagination__item","active-class":"pagination__item--selected","prev-class":"hidden","next-class":"hidden"},null,8,["modelValue","page-count"]))}});const Se={class:"container"},Le={class:"top-info"},Ve={class:"h1"},pe={key:0},Te={class:"peoples"},we={key:1,class:"peoples__list"},Me=B({__name:"peoples",setup(i){var b;const a=I(),e=A(),o=E(),d=S(!1),s=S(""),t=S(Number((b=o.query)==null?void 0:b.peoplePage)||1);G(async()=>{var m;if((m=c.value)!=null&&m.length){d.value=!1;return}await _()});const c=x(()=>a.formattedPeoples),C=x(()=>a.count||0);async function _(){d.value=!0,await a.getPeoples(t.value),d.value=!1}return K(t,async()=>{e.push({query:{peoplePage:t.value}}),await _()}),(m,v)=>(n(),l("section",null,[r("div",Se,[r("div",Le,[r("h1",Ve,[p(" Пользователи "),k(V,null,{default:y(()=>[C.value?(n(),l("span",pe," ("+h(C.value)+") ",1)):g("",!0)]),_:1})]),k(V,null,{default:y(()=>[C.value?(n(),P(de,{key:0,modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=T=>s.value=T)},null,8,["modelValue"])):g("",!0)]),_:1})]),r("div",Te,[k(V,{mode:"out-in"},{default:y(()=>[d.value?(n(),P(q,{key:0})):(n(),l("div",we,[k(Z,{peoplesList:c.value},null,8,["peoplesList"]),k(be,{modelValue:t.value,"onUpdate:modelValue":v[1]||(v[1]=T=>t.value=T),peoplesCount:C.value},null,8,["modelValue","peoplesCount"])]))]),_:1})])])]))}});const Ke=M(Me,[["__scopeId","data-v-4b0ebfbf"]]);export{Ke as default};
