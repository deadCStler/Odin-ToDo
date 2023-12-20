(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(81),r=n.n(i),d=n(645),a=n.n(d)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap);"]),a.push([e.id,'* {\n  padding: 0;\n  margin: 0;\n  font-family: "Montserrat", sans-serif;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 1fr;\n}\n\n.navigation_menu {\n  color: #fbfbfb;\n  background-color: #232323;\n  display: grid;\n  grid-template-rows: 100px 1fr 50px;\n}\n\n.logo,\n.links {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n}\n\n.navigation_options {\n  display: grid;\n  grid-template-rows: 48px 1fr;\n}\n\n.overview,\n.categories > ul {\n  font-size: 28px;\n  margin: 5px 20px;\n}\n\n.categories > ul > li {\n  color: #fbfbfb;\n  font-size: 22px;\n  margin: 5px 5px 5px 20px;\n}\n\n.new_category {\n  padding-left: 20px;\n  font-size: 20px;\n}\n\ndialog {\n  margin: auto;\n  font-size: 25px;\n}\n\ndialog > form {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\ndialog > form > div {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\nbutton {\n  padding: 5px;\n  font-size: 20px;\n}\n\ninput,\nselect,\ntextarea {\n  resize: none;\n  padding: 5px;\n}\n\n.main_body {\n  background-color: #d8d8ea;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: solid 1px #fbfbfb;\n  font-size: 22px;\n  font-weight: 700;\n}\n\n.options {\n  margin: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.new_note {\n  margin: 10px;\n  color: #232323;\n}\n\n.options > div {\n  padding: 5px 10px;\n}\n\n.notes_body {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.note{\n    background-color: #fbfbfb;\n    min-height: 200px;\n    min-width: 200px\n}',""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,d){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&a[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var d={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],s=d[c]||0,p="".concat(c," ").concat(s);d[c]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,i);i.byIndex=o,t.splice(o,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var d=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<d.length;a++){var o=n(d[a]);t[o].references--}for(var l=i(e,r),c=0;c<d.length;c++){var s=n(d[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}d=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var d=t[i]={id:i,exports:{}};return e[i](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=[];class t{constructor(t,n,i,r,d,a){this.id=e.length,this.title=t,this.desc=n,this.duedate=i,this.priority=r,this.category=d,this.status=a}}function i(t){let n=document.querySelector(".notes_body"),i=document.createElement("div");i.setAttribute("id",t.id),i.classList.add("note");let r=document.createElement("div");r.innerHTML=t.duedate;let d=document.createElement("div");d.innerHTML=t.title,i.appendChild(r),i.appendChild(d),n.appendChild(i),i.addEventListener("click",(()=>{!function(t){const n=document.querySelector(".notes_body");let i=document.createElement("dialog"),r=document.createElement("div");r.innerHTML=`<p>Title:</p><div>${e[t].title}</div>`;let d=document.createElement("div");d.innerHTML=`<p>Description:</p><div>${e[t].desc}</div>`;let a=document.createElement("div");a.innerHTML=`<p>Status:</p><div>${e[t].status}</div>`;let o=document.createElement("div");o.innerHTML=`<p>Due Date:</p><div>${e[t].duedate}</div>`;let l=document.createElement("div");l.innerHTML=`<p>Priority:</p><div>${e[t].priority}</div>`;let c=document.createElement("div");c.innerHTML=`<p>Category:</p><div>${e[t].category}</div>`;let s=document.createElement("button");s.innerHTML="Close",s.addEventListener("click",(e=>{e.preventDefault(),i.close()})),i.appendChild(o),i.appendChild(r),i.appendChild(d),i.appendChild(c),i.appendChild(l),i.appendChild(a),i.appendChild(s),n.appendChild(i),i.showModal()}(i.getAttribute("id"))}))}const r=[];class d{constructor(e){this.name=e}}function a(t){let n=new d(t);r.push(n),function(t){let n=document.querySelector(".options"),r=document.createElement("div");r.classList.add(`opt_${t}`),r.innerHTML=t,n.appendChild(r),r.addEventListener("click",(()=>{!function(t){const n=t.getAttribute("class").split("_")[1];document.querySelector(".notes_body").innerHTML="",e.forEach((function(e){e.category===n&&i(e)}))}(r)}))}(t),function(e){let t=document.querySelector(".categories>ul"),n=document.createElement("li");n.innerHTML=e,t.append(n)}(t)}var o=n(379),l=n.n(o),c=n(795),s=n.n(c),p=n(569),u=n.n(p),m=n(565),f=n.n(m),h=n(216),v=n.n(h),g=n(589),b=n.n(g),y=n(426),C={};C.styleTagTransform=b(),C.setAttributes=f(),C.insert=u().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=v(),l()(y.Z,C),y.Z&&y.Z.locals&&y.Z.locals;let E=document.createElement("div");E.classList.add("main_body");let x=document.createElement("div");x.classList.add("notes_body"),E.appendChild(function(){let e=document.createElement("div");e.classList.add("header");let t=document.createElement("div");t.classList.add("options");let n=document.createElement("div");n.classList.add("opt_all"),n.innerHTML="All",t.appendChild(n);let i=document.createElement("div");return i.classList.add("new_note"),i.innerHTML="+ Add a New Note",e.appendChild(t),e.appendChild(i),e}()),E.appendChild(x);const L=document.querySelector("#content");L.appendChild(function(){let e=document.createElement("div");e.classList.add("navigation_menu");let t=document.createElement("h1");t.innerHTML="TaskTrackr",t.classList.add("logo");let n=document.createElement("div");n.classList.add("navigation_options");let i=document.createElement("div");i.classList.add("overview"),i.innerHTML="Overview";let r=document.createElement("div");r.classList.add("categories"),r.innerHTML="<ul>Categories</ul>";let d=document.createElement("div");d.classList.add("new_category"),d.innerHTML="+ Add New Category",r.appendChild(d),n.appendChild(i),n.appendChild(r);let a=document.createElement("div");a.classList.add("links");let o=document.createElement("div");return o.innerHTML="<a href='https://github.com/deadCStler'>GitHub</a>",o.classList.add("github"),a.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(a),e}()),L.appendChild(E),document.querySelector(".new_category").addEventListener("click",(()=>{!function(){const e=document.querySelector(".categories"),t=function(){let e=document.createElement("dialog");e.classList.add("categoryModal");let t=document.createElement("form");t.setAttribute("id","categoryForm");let n=document.createElement("div"),i=document.createElement("label");i.setAttribute("for","categoryName"),i.innerHTML="Enter the name of the category:";let r=document.createElement("input");r.setAttribute("id","categoryName"),r.setAttribute("type","text"),r.setAttribute("required","true");let d=document.createElement("div"),a=document.createElement("button");a.innerHTML="Close",a.addEventListener("click",(t=>{t.preventDefault(),e.close()}));let o=document.createElement("button");return o.innerHTML="Submit",n.appendChild(i),n.appendChild(r),d.appendChild(o),d.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t),e}();e.appendChild(t),t.showModal(),t.querySelector("form").addEventListener("submit",(n=>{n.preventDefault(),a(document.querySelector("#categoryName").value),t.close(),e.removeChild(t)}))}()})),document.querySelector(".new_note").addEventListener("click",(()=>{0==r.length?alert("Create a category first"):function(n){const r=document.querySelector(".notes_body"),d=function(e){let t=document.createElement("dialog");t.classList.add("noteModal");let n=document.createElement("form");n.setAttribute("id","noteForm");let i=document.createElement("div"),r=document.createElement("label");r.setAttribute("for","titleInput"),r.innerHTML="Enter Title";let d=document.createElement("input");d.setAttribute("id","titleInput"),d.setAttribute("name","title"),d.setAttribute("type","text"),d.setAttribute("required","true"),i.appendChild(r),i.appendChild(d);let a=document.createElement("div"),o=document.createElement("label");o.setAttribute("for","descInput"),o.innerHTML="Enter Description";let l=document.createElement("textarea");l.setAttribute("id","descInput"),l.setAttribute("name","description"),l.setAttribute("type","textarea"),l.setAttribute("rows","7"),l.setAttribute("cols","50");let c=document.createElement("div"),s=document.createElement("label");s.setAttribute("for","Category"),s.innerHTML="Select the category:";let p=document.createElement("select");p.setAttribute("id","Category"),p.setAttribute("name","category"),p.setAttribute("required","true"),e.forEach((e=>{let t=document.createElement("option");t.value=e.name,t.text=e.name,p.appendChild(t)}));let u=document.createElement("div"),m=document.createElement("label");m.setAttribute("for","Priority"),m.innerHTML="Select the Priority:";let f=document.createElement("select");f.setAttribute("id","Priority"),f.setAttribute("name","priority"),f.setAttribute("required","true");let h=document.createElement("option");h.value="Low",h.text="Low";let v=document.createElement("option");v.value="Medium",v.text="Medium";let g=document.createElement("option");g.value="High",g.text="High",f.appendChild(h),f.appendChild(v),f.appendChild(g);let b=document.createElement("div"),y=document.createElement("label");y.setAttribute("for","Status"),y.innerHTML="Select the Status:";let C=document.createElement("select");C.setAttribute("id","Status"),C.setAttribute("name","status"),C.setAttribute("required","true");let E=document.createElement("option");E.value="YettoStart",E.text="Yet to Start";let x=document.createElement("option");x.value="Ongoing",x.text="Ongoing";let L=document.createElement("option");L.value="Completed",L.text="Completed",C.appendChild(E),C.appendChild(x),C.appendChild(L);let M=document.createElement("div"),A=document.createElement("label");A.setAttribute("for","dueDate"),A.setAttribute("name","duedate"),A.innerHTML="Select the Date:";let T=document.createElement("input");T.setAttribute("id","dueDate"),T.setAttribute("type","date"),T.setAttribute("required","true"),i.appendChild(r),i.appendChild(d),a.appendChild(o),a.appendChild(l),c.appendChild(s),c.appendChild(p),u.appendChild(m),u.appendChild(f),b.appendChild(y),b.appendChild(C),M.appendChild(A),M.appendChild(T);let w=document.createElement("button");w.innerHTML="Close",w.addEventListener("click",(e=>{e.preventDefault(),t.close()}));let H=document.createElement("button");return H.innerHTML="Submit",n.appendChild(i),n.appendChild(a),n.appendChild(c),n.appendChild(u),n.appendChild(b),n.appendChild(M),n.appendChild(H),n.appendChild(w),t.appendChild(n),t}(n);r.appendChild(d),d.showModal(),d.querySelector("form").addEventListener("submit",(n=>{n.preventDefault();let a=document.forms.noteForm,o=a.elements.dueDate;!function(n,r){const d=new t(n.get("title"),n.get("description"),r.value,n.get("priority"),n.get("category"),n.get("status"));e.push(d),i(d)}(new FormData(a),o),d.close(),r.removeChild(d)}))}(r)})),document.querySelector(".opt_all").addEventListener("click",(()=>{document.querySelector(".notes_body").innerHTML="",e.forEach((function(e){i(e)}))}))})()})();