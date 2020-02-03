var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){(null!=e||t.value)&&(t.value=e)}function h(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let b;function v(t){b=t}function y(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const x=[],w=[],E=[],_=[],k=Promise.resolve();let S=!1;function I(t){E.push(t)}const L=new Set;function N(){do{for(;x.length;){const t=x.shift();v(t),j(t.$$)}for(;w.length;)w.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];L.has(e)||(L.add(e),e())}E.length=0}while(x.length);for(;_.length;)_.pop()();S=!1,L.clear()}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const A=new Set;function C(t,e){t&&t.i&&(A.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push(()=>{A.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function R(t){t&&t.c()}function B(t,n,c){const{fragment:a,on_mount:s,on_destroy:l,after_update:i}=t.$$;a&&a.m(n,c),I(()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(I)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(x.push(t),S||(S=!0,k.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,r,c,a,s,l,i=[-1]){const u=b;v(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:i};let m=!1;d.ctx=c?c(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&T(e,t)),n}):[],d.update(),m=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&C(e.$$.fragment),B(e,r.target,r.anchor),N()),v(u)}class D{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function P(t){let e,n,o,r,c,a,p,b;const v=t[5].default,y=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(v,t,t[4],null);return{c(){e=f("div"),n=f("i"),o=m(),r=f("span"),c=d(t[0]),a=m(),y&&y.c(),g(n,"class",t[3]),h(r,"padding","0px 0px 0px 5px"),h(r,"top","auto"),h(r,"bottom","auto"),g(e,"class",t[2])},m(s,u){i(s,e,u),l(e,n),l(e,o),l(e,r),l(r,c),l(e,a),y&&y.m(e,null),p=!0,b=$(e,"click",t[1])},p(t,[o]){(!p||8&o)&&g(n,"class",t[3]),(!p||1&o)&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(c,t[0]),y&&y.p&&16&o&&y.p(s(v,t,t[4],null),function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(v,t[4],o,null)),(!p||4&o)&&g(e,"class",t[2])},i(t){p||(C(y,t),p=!0)},o(t){O(y,t),p=!1},d(t){t&&u(e),y&&y.d(t),b()}}}function q(t,e,n){let{caption:o}=e,{callback:r=null}=e,{className:c="footer-item"}=e,{icon:a}=e,{$$slots:s={},$$scope:l}=e;return t.$set=t=>{"caption"in t&&n(0,o=t.caption),"callback"in t&&n(1,r=t.callback),"className"in t&&n(2,c=t.className),"icon"in t&&n(3,a=t.icon),"$$scope"in t&&n(4,l=t.$$scope)},[o,r,c,a,l,s]}class M extends D{constructor(t){super(),U(this,t,q,P,c,{caption:0,callback:1,className:2,icon:3})}}const z=[];function G(e,n=t){let o;const r=[];function a(t){if(c(e,t)&&(e=t,o)){const t=!z.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),z.push(n,e)}if(t){for(let t=0;t<z.length;t+=2)z[t][0](z[t+1]);z.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(c,s=t){const l=[c,s];return r.push(l),1===r.length&&(o=n(a)||t),c(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}let H=G(!1),J=G("default"),K=G(""),Q=G("");function V(e){let n;const o=new M({props:{callback:W,caption:"Clear",icon:"fa fa-eraser"}});return{c(){R(o.$$.fragment)},m(t,e){B(o,t,e),n=!0},p:t,i(t){n||(C(o.$$.fragment,t),n=!0)},o(t){O(o.$$.fragment,t),n=!1},d(t){F(o,t)}}}function W(){window.confirm("Delete all content from the editor?")&&(localStorage.removeItem("content"),sessionStorage.removeItem("documentName"),K.set(""),Q.set(""))}localStorage.getItem("theme")&&J.set(localStorage.getItem("theme")),localStorage.getItem("content")&&K.set(localStorage.getItem("content")),sessionStorage.getItem("documentName")&&Q.set(sessionStorage.getItem("documentName")),J.subscribe(t=>{console.log(t),t||(t="default");let e=`/themes/${t}.css`;fetch(e).then(t=>{let n=t.ok?e:"/themes/default.css";document.getElementById("stylesheet").href=n})});class X extends D{constructor(t){super(),U(this,t,null,V,c,{})}}function Y(e){let n;const o=new M({props:{callback:e[3],caption:"Export",icon:"fa fa-download"}});return{c(){R(o.$$.fragment)},m(t,e){B(o,t,e),n=!0},p:t,i(t){n||(C(o.$$.fragment,t),n=!0)},o(t){O(o.$$.fragment,t),n=!1},d(t){F(o,t)}}}function Z(t,e,n){let o,r;function c(){if(K&&o){Q&&r||Q.set(o.slice(0,10));var t=window.document.createElement("a");t.href=window.URL.createObjectURL(new Blob([K],{type:"text/plain"})),t.download=r,document.body.appendChild(t),t.click(),document.body.removeChild(t)}}a(t,K,t=>n(1,o=t)),a(t,Q,t=>n(2,r=t));return[c,o,r,()=>c()]}class tt extends D{constructor(t){super(),U(this,t,Z,Y,c,{})}}function et(e){let n,o;return{c(){n=f("input"),g(n,"id","file-input"),g(n,"type","file"),g(n,"name","name"),h(n,"display","none")},m(t,r){i(t,n,r),o=$(n,"change",e[1])},p:t,d(t){t&&u(n),o()}}}function nt(t){let e;const n=new M({props:{callback:t[0],caption:"Open",icon:"fa fa-upload",$$slots:{default:[et]},$$scope:{ctx:t}}});return{c(){R(n.$$.fragment)},m(t,o){B(n,t,o),e=!0},p(t,[e]){const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(C(n.$$.fragment,t),e=!0)},o(t){O(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function ot(t){return[()=>{document.getElementById("file-input").click()},t=>function(t){const e=t.target.files[0],n=new FileReader;n.addEventListener("load",()=>{localStorage.setItem("content",event.target.result),sessionStorage.setItem("documentName",e.name),K.set(event.target.result),Q.set(e.name)}),n.readAsText(e)}(t)]}class rt extends D{constructor(t){super(),U(this,t,ot,nt,c,{})}}function ct(e){let n;const o=new M({props:{caption:"",icon:"fa fa-compress-arrows-alt",callback:at}});return{c(){R(o.$$.fragment)},m(t,e){B(o,t,e),n=!0},p:t,i(t){n||(C(o.$$.fragment,t),n=!0)},o(t){O(o.$$.fragment,t),n=!1},d(t){F(o,t)}}}function at(){document.fullscreenElement?(document.exitFullscreen(),H.set(!1)):(document.documentElement.requestFullscreen(),H.set(!0))}class st extends D{constructor(t){super(),U(this,t,null,ct,c,{})}}const lt=["default","oasis","oldschool","saturday","simple","sunday","narrow","vscode","vault76"];function it(t,e,n){const o=t.slice();return o[0]=e[n],o}function ut(e){let n,o,r,c=e[0]+"";return{c(){n=f("option"),o=d(c),n.__value=r=e[0],n.value=n.__value},m(t,e){i(t,n,e),l(n,o)},p:t,d(t){t&&u(n)}}}function ft(t){let e,n,o=lt,r=[];for(let e=0;e<o.length;e+=1)r[e]=ut(it(t,o,e));return{c(){e=f("select");for(let t=0;t<r.length;t+=1)r[t].c();g(e,"id","themeSelector"),h(e,"cursor","pointer")},m(t,o){i(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=$(e,"change",mt)},p(t,n){if(0&n){let c;for(o=lt,c=0;c<o.length;c+=1){const a=it(t,o,c);r[c]?r[c].p(a,n):(r[c]=ut(a),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},d(t){t&&u(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),n()}}}function dt(t){let e;const n=new M({props:{caption:"",icon:"fa fa-palette",$$slots:{default:[ft]},$$scope:{ctx:t}}});return{c(){R(n.$$.fragment)},m(t,o){B(n,t,o),e=!0},p(t,[e]){const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(C(n.$$.fragment,t),e=!0)},o(t){O(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function mt(t){const e=t.target.value;localStorage.setItem("theme",e),J.set(e)}class $t extends D{constructor(t){super(),U(this,t,null,dt,c,{})}}var gt="1.0.3",pt={type:"git",url:"git://github.com/ajboni/txtdit.git",repo_url:"https://github.com/ajboni/txtdit"};function ht(e){let n,o,r,c,a,s,d,$,p;const h=new $t({}),b=new M({props:{caption:gt,icon:"fab fa-github",callback:e[0]}}),v=new X({}),y=new rt({}),x=new tt({}),w=new st({});return{c(){n=f("div"),R(h.$$.fragment),o=m(),r=f("div"),R(b.$$.fragment),c=m(),a=f("div"),R(v.$$.fragment),s=m(),R(y.$$.fragment),d=m(),R(x.$$.fragment),$=m(),R(w.$$.fragment),g(n,"class","footer-item-container"),g(r,"class","footer-middle"),g(a,"class","footer-item-container")},m(t,e){i(t,n,e),B(h,n,null),i(t,o,e),i(t,r,e),B(b,r,null),i(t,c,e),i(t,a,e),B(v,a,null),l(a,s),B(y,a,null),l(a,d),B(x,a,null),l(a,$),B(w,a,null),p=!0},p:t,i(t){p||(C(h.$$.fragment,t),C(b.$$.fragment,t),C(v.$$.fragment,t),C(y.$$.fragment,t),C(x.$$.fragment,t),C(w.$$.fragment,t),p=!0)},o(t){O(h.$$.fragment,t),O(b.$$.fragment,t),O(v.$$.fragment,t),O(y.$$.fragment,t),O(x.$$.fragment,t),O(w.$$.fragment,t),p=!1},d(t){t&&u(n),F(h),t&&u(o),t&&u(r),F(b),t&&u(c),t&&u(a),F(v),F(y),F(x),F(w)}}}function bt(t){return[()=>window.open(pt.repo_url,"_blank")]}class vt extends D{constructor(t){super(),U(this,t,bt,ht,c,{})}}function yt(t){return y(()=>{let t=document.getElementById("main");function e(t){t.preventDefault(),t.stopPropagation()}function n(e){t.classList.add("highlight")}function o(e){t.classList.remove("highlight")}function r(t){localStorage.setItem("content",t.target.result),K.set(t.target.result)}["dragenter","dragover","dragleave","drop"].forEach(n=>{t.addEventListener(n,e,!1)}),["dragenter","dragover"].forEach(e=>{t.addEventListener(e,n,!1)}),["dragleave","drop"].forEach(e=>{t.addEventListener(e,o,!1)}),t.addEventListener("drop",(function(t){let e=t.dataTransfer.files[0];localStorage.setItem("documentName",e.name),Q.set(e.name),console.log(e.name);window.URL.createObjectURL(e);const n=new FileReader;n.addEventListener("load",r),n.readAsText(e)}),!1)}),[]}class xt extends D{constructor(t){super(),U(this,t,yt,null,c,{})}}function wt(t){let e,n,r,c,a;const s=new xt({});return{c(){e=f("div"),n=f("textarea"),r=m(),R(s.$$.fragment),g(n,"name","editor"),g(n,"id","editor"),g(n,"cols","30"),g(n,"rows","10"),g(e,"class","editor-text-container")},m(o,u){i(o,e,u),l(e,n),p(n,t[0]),l(e,r),B(s,e,null),c=!0,a=[$(n,"input",t[1]),$(n,"keydown",_t),$(n,"keyup",Et)]},p(t,[e]){1&e&&p(n,t[0])},i(t){c||(C(s.$$.fragment,t),c=!0)},o(t){O(s.$$.fragment,t),c=!1},d(t){t&&u(e),F(s),o(a)}}}function Et(t){localStorage.setItem("content",t.target.value)}function _t(t){if(9==t.keyCode||9==t.which){t.preventDefault();var e=this.selectionStart;this.value=this.value.substring(0,this.selectionStart)+"\t"+this.value.substring(this.selectionEnd),this.selectionEnd=e+1}}function kt(t,e,n){let o;return a(t,K,t=>n(0,o=t)),[o,function(){o=this.value,K.set(o)}]}class St extends D{constructor(t){super(),U(this,t,kt,wt,c,{})}}function It(e){let n,o,r,c,a;const s=new St({}),d=new vt({});return{c(){n=f("main"),o=f("div"),R(s.$$.fragment),r=m(),c=f("div"),R(d.$$.fragment),g(o,"class","editor-container"),g(c,"class","footer-container"),g(n,"id","main")},m(t,e){i(t,n,e),l(n,o),B(s,o,null),l(n,r),l(n,c),B(d,c,null),a=!0},p:t,i(t){a||(C(s.$$.fragment,t),C(d.$$.fragment,t),a=!0)},o(t){O(s.$$.fragment,t),O(d.$$.fragment,t),a=!1},d(t){t&&u(n),F(s),F(d)}}}return new class extends D{constructor(t){super(),U(this,t,null,It,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
