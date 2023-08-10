(function(){"use strict";var e={1635:function(e,t,a){var n=a(9242),o=a(3396);const l=(0,o._)("h2",null,"Currency Converter",-1),u={key:1},r={class:"pt-2 wrapper"},i={key:0},s={key:1};function c(e,t,a,n,c,d){const v=(0,o.up)("loading-indicator"),p=(0,o.up)("Btn"),m=(0,o.up)("SearchField"),f=(0,o.up)("ValuteCard"),w=(0,o.up)("ConverterCmp");return(0,o.wg)(),(0,o.iD)("div",null,[l,n.loading.isLoading?((0,o.wg)(),(0,o.j4)(v,{key:0})):((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(p,{onAction:t[0]||(t[0]=e=>n.active="one"),color:n.oneColor()},{default:(0,o.w5)((()=>[(0,o.Uk)("List of currencies")])),_:1},8,["color"]),(0,o.Wm)(p,{onAction:t[1]||(t[1]=e=>n.active="two"),color:n.twoColor()},{default:(0,o.w5)((()=>[(0,o.Uk)("Converter")])),_:1},8,["color"])])),((0,o.wg)(),(0,o.j4)(o.Ob,null,[(0,o._)("div",null,["one"===n.active?((0,o.wg)(),(0,o.j4)(m,{key:0,onInputSearchValue:n.runSearch},null,8,["onInputSearchValue"])):(0,o.kq)("",!0),(0,o._)("div",r,["one"===n.active?((0,o.wg)(),(0,o.iD)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.valutesList,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"listWrapper"},[(0,o.Wm)(f,{valute:e},null,8,["valute"])])))),128))])):((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(w)]))])])],1024))])}var d=a(65),v=a(4870);const p=e=>((0,o.dD)("data-v-cdde617e"),e=e(),(0,o.Cn)(),e),m={class:"lds-ripple"},f=p((()=>(0,o._)("div",null,null,-1))),w=p((()=>(0,o._)("div",null,null,-1))),g=[f,w];function V(e,t){return(0,o.wg)(),(0,o.iD)("div",m,g)}var h=a(89);const b={},y=(0,h.Z)(b,[["render",V],["__scopeId","data-v-cdde617e"]]);var k=y,C=a(7139);function _(e,t,a,n,l,u){return(0,o.wg)(),(0,o.iD)("button",{class:(0,C.C_)(["btn",a.color]),onClick:t[0]||(t[0]=t=>e.$emit("action"))},[(0,o.WI)(e.$slots,"default")],2)}var D={name:"BtnComponent",props:{color:{type:String,default:"",validator(e){return["","primary","danger"].includes(e)}}},emits:["action"]};const N=(0,h.Z)(D,[["render",_]]);var x=N,O=(a(7658),(0,d.MT)({state:{date:"",previousDate:"",timestamp:"",valute:{}},getters:{},mutations:{addActualValute(e,t){e.valute=t}},actions:{setValute({commit:e},t){e("addActualValute",t)}},modules:{}}));const S=e=>{const t=(e.Nominal/e.Value*e.Nominal).toFixed(4),a=(e.Nominal/e.Previous*e.Nominal).toFixed(4);return(t-a).toFixed(4)},F=e=>(e.Value-e.Previous).toFixed(4),B=e=>{console.log(e);const t=[];for(const a of Object.entries(e)){const e=a[1];t.push({showBaseRub:!0,valuteName:`${e.Name} ${e.CharCode}`,nominal:e.Nominal,rubForNominal:e.Value,code:e.CharCode,baseRub:{firstPart:`${e.Nominal} ${e.Name} ${e.CharCode}`,secondPart:`${e.Value} ₽ (RUB)`,rateChange:F(e)},baseValute:{firstPart:`${e.Nominal} ₽ (RUB)`,secondPart:`${(e.Nominal/e.Value*e.Nominal).toFixed(4)} ${e.Name} ${e.CharCode}`,rateChange:S(e)}})}return t},R={isLoading:!0},U=async()=>{const e=await fetch("https://www.cbr-xml-daily.ru/daily_json.js");if(e.ok){const t=await e.json();return O.commit("addActualValute",B(t.Valute)),void(R.isLoading=!1)}console.error(`Error: ${e.status}`)};U();const j={class:"oneValuteCard"},H={key:0,class:"oneValuteCardItem"},I={class:"oneValuteName"},L={key:0,class:"primary fs-2"},$={key:1,class:"danger fs-2"},W={key:1,class:"oneValuteCardItem"},P={key:0,class:"primary fs-2"},z={key:1,class:"danger fs-2"};function A(e,t,a,n,l,u){const r=(0,o.up)("Btn");return(0,o.wg)(),(0,o.iD)("div",j,[n.oneValute.showBaseRub?((0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",I,(0,C.zw)(n.oneValute.baseRub.firstPart),1),(0,o.Wm)(r,{onAction:t[0]||(t[0]=e=>n.oneValute.showBaseRub=!n.oneValute.showBaseRub)},{default:(0,o.w5)((()=>[(0,o.Uk)("⇅ ")])),_:1}),(0,o._)("div",null,[(0,o.Uk)((0,C.zw)(n.oneValute.baseRub.secondPart)+" ("+(0,C.zw)(n.oneValute.baseRub.rateChange)+" ",1),n.oneValute.baseRub.rateChange>0?((0,o.wg)(),(0,o.iD)("span",L,"⬆")):((0,o.wg)(),(0,o.iD)("span",$,"⬇")),(0,o.Uk)(") ")])])):((0,o.wg)(),(0,o.iD)("div",W,[(0,o.Uk)((0,C.zw)(n.oneValute.baseValute.firstPart)+" ",1),(0,o.Wm)(r,{onAction:t[1]||(t[1]=e=>n.oneValute.showBaseRub=!n.oneValute.showBaseRub),color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)("⇅ ")])),_:1}),(0,o._)("div",null,[(0,o.Uk)((0,C.zw)(n.oneValute.baseValute.secondPart)+" ("+(0,C.zw)(n.oneValute.baseValute.rateChange)+" ",1),n.oneValute.baseValute.rateChange>0?((0,o.wg)(),(0,o.iD)("span",P,"⬆")):((0,o.wg)(),(0,o.iD)("span",z,"⬇")),(0,o.Uk)(") ")])]))])}var Z={name:"ValuteCard",components:{Btn:x},props:["valute"],setup(e){const t=(0,v.iH)(e.valute);return{oneValute:t}}};const q=(0,h.Z)(Z,[["render",A],["__scopeId","data-v-3ab7923e"]]);var K=q;const T={class:"pt-2 form-control searchWrapper"},M={for:"searchInput"};function E(e,t,a,l,u,r){return(0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("label",M,[(0,o.Uk)(" Search "),(0,o.wy)((0,o._)("input",{id:"searchInput",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.searchValue=e),onInput:t[1]||(t[1]=t=>e.$emit("inputSearchValue",l.searchValue))},null,544),[[n.nr,l.searchValue]])])])}var Y={name:"TabBtn",emits:["inputSearchValue"],setup(){const e=(0,v.iH)("");return{searchValue:e}}};const G=(0,h.Z)(Y,[["render",E],["__scopeId","data-v-da60dd84"]]);var J=G;const Q={class:"form-control searchWrapper flex alight-center flex-column"},X={key:0,class:"flex alight-center gap-10 flex-column"},ee={class:"flex alight-center gap-5"},te={for:"converter",class:"inputValue"},ae={key:1};function ne(e,t,a,l,u,r){const i=(0,o.up)("DropDown"),s=(0,o.up)("Btn");return(0,o.wg)(),(0,o.iD)("div",Q,[(0,o.Wm)(i,{items:l.valutesList,valuteName:l.firstValuteName,onValute:l.getValuteFirst},null,8,["items","valuteName","onValute"]),l.codeFirst?((0,o.wg)(),(0,o.iD)("div",X,[(0,o._)("div",ee,[(0,o._)("label",te,[(0,o.wy)((0,o._)("input",{id:"converter",type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>l.convertValue=e),onInput:t[1]||(t[1]=(...e)=>l.calculate&&l.calculate(...e))},null,544),[[n.nr,l.convertValue]])]),(0,o._)("span",null,(0,C.zw)(l.codeFirst),1)]),l.codeFirst&&l.codeSecond?((0,o.wg)(),(0,o.j4)(s,{key:0,onAction:t[2]||(t[2]=e=>l.switchValute())},{default:(0,o.w5)((()=>[(0,o.Uk)("⇅ ")])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(i,{items:l.valutesList,valuteName:l.secondValuteName,onValute:l.getValuteSecond},null,8,["items","valuteName","onValute"]),l.codeSecond?((0,o.wg)(),(0,o.iD)("div",ae,[(0,o.Uk)((0,C.zw)(l.resultSecond)+" ",1),(0,o._)("span",null,(0,C.zw)(l.codeSecond),1)])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])}var oe=a.p+"img/chevron-down.b3d030a7.svg",le=a.p+"img/chevron-up.7d71a3f9.svg";const ue={class:"pb-1"},re={class:"pointer flex justify-center alight-center gap-5 valuteSelect"},ie={class:"chevronContainer"},se={key:0,src:oe,alt:"expand"},ce={key:1,src:le,alt:"collapse"},de={key:0,class:"sub-menu absolute"},ve=["onClick","onKeyup"];function pe(e,t,a,l,u,r){return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o._)("div",{class:"menu-item relative",onClick:t[0]||(t[0]=e=>l.isOpen=!l.isOpen),onKeyup:t[1]||(t[1]=(0,n.D2)((e=>l.isOpen=!l.isOpen),["space"]))},[(0,o._)("div",re,[(0,o._)("div",null,(0,C.zw)(l.title),1),(0,o._)("div",ie,[l.isOpen?((0,o.wg)(),(0,o.iD)("img",ce)):((0,o.wg)(),(0,o.iD)("img",se))])]),l.isOpen?((0,o.wg)(),(0,o.iD)("div",de,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.items,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"menu-item"},[(0,o._)("div",{onClick:t=>l.selectValute(e),onKeyup:(0,n.D2)((t=>l.selectValute(e)),["space"]),class:"item pointer"},(0,C.zw)(e.valuteName),41,ve)])))),128))])):(0,o.kq)("",!0)],32)])}var me={name:"DropDown",props:["items","valuteName"],emits:["valute"],setup(e,{emit:t}){const a=(0,v.iH)(!1),n=(0,v.Vh)(e,"valuteName"),o=e=>{t("valute",e)};return{isOpen:a,title:n,selectValute:o}}};const fe=(0,h.Z)(me,[["render",pe]]);var we=fe,ge={name:"ConverterCmp",components:{DropDown:we,Btn:x},setup(){const e=(0,v.iH)(1),t=(0,d.oR)(),a=(0,o.Fl)((()=>t.state.valute)),n=(0,v.iH)(),l=(0,v.iH)(),u=(0,v.iH)(),r=(0,v.iH)(!0),i=(0,v.iH)("Выберите валюту"),s=(0,v.iH)(0),c=(0,v.iH)("Выберите валюту"),p=(0,v.iH)(0),m=e=>Math.round(1e3*e)/1e3;function f(){if(console.log("calculate"),s.value&&p.value){const t=s.value/p.value;n.value=m(e.value*t)}}const w=e=>{l.value=e.code,s.value=e.rubForNominal/e.nominal,i.value=e.valuteName,f()},g=t=>{u.value=t.code,p.value=t.rubForNominal/t.nominal,n.value=m(s.value/p.value*e.value),c.value=t.valuteName,f()},V=()=>{r.value=!r.value,e.value=n.value,[s.value,p.value]=[p.value,s.value],[i.value,c.value]=[c.value,i.value],[l.value,u.value]=[u.value,l.value],f()};return{switchValute:V,getValuteFirst:w,getValuteSecond:g,calculate:f,convertValue:e,valutesList:a,resultSecond:n,showBaseRub:r,codeFirst:l,codeSecond:u,firstValuteName:i,secondValuteName:c}}};const Ve=(0,h.Z)(ge,[["render",ne],["__scopeId","data-v-26b30f2c"]]);var he=Ve,be={name:"App",components:{ConverterCmp:he,SearchField:J,ValuteCard:K,Btn:x,LoadingIndicator:k},setup(){const e=(0,d.oR)(),t=(0,o.Fl)((()=>e.state.valute)),a=(0,v.iH)("one");function n(){return"one"===a.value?"primary":""}function l(){return"two"===a.value?"primary":""}const u=e=>{const t=document.querySelectorAll(".listWrapper");setTimeout((()=>{for(let a=0;a<t.length;a++)t[a].textContent.toLowerCase().includes(e.toLowerCase())?t[a].classList.remove("is-hidden"):t[a].classList.add("is-hidden")}),300)};return{runSearch:u,valutesList:t,loading:R,active:a,oneColor:n,twoColor:l}}};const ye=(0,h.Z)(be,[["render",c]]);var ke=ye;(0,n.ri)(ke).use(O).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var u=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var r=!0,i=0;i<n.length;i++)(!1&l||u>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(r=!1,l<u&&(u=l));if(r){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/eclipse-digital-studio/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,u=n[0],r=n[1],i=n[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(i)var c=i(a)}for(t&&t(n);s<u.length;s++)l=u[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkeclipse_digital_studio"]=self["webpackChunkeclipse_digital_studio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1635)}));n=a.O(n)})();
//# sourceMappingURL=app.fe11c88e.js.map