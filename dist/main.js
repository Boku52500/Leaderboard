(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),c=e.n(a)()(o());c.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Press Start 2P'; /* stylelint-disable-line font-family-no-missing-generic-family-keyword */\r\n  font-weight: 600;\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  background-image: url(https://www.gifcen.com/wp-content/uploads/2022/03/attack-on-titan-gif-4.gif);\r\n  background-size: cover;\r\n  height: 100vh;\r\n}\r\n\r\nform h1 {\r\n  color: blue;\r\n  text-shadow: black 5px 5px;\r\n}\r\n\r\n.titleMain h1 {\r\n  font-size: 55px;\r\n  margin-left: 20px;\r\n  margin-top: 30px;\r\n  color: yellow;\r\n  text-shadow: black 5px 5px;\r\n}\r\n\r\n.main-section {\r\n  display: flex;\r\n  gap: 20%;\r\n  margin-left: 5%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.refreshDiv {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.refreshDiv h2 {\r\n  color: blue;\r\n  text-shadow: black 5px 5px;\r\n}\r\n\r\n.buttons {\r\n  font-size: 18px;\r\n  height: 30px;\r\n  color: black;\r\n  background-color: red;\r\n  box-shadow: black 2px 2px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\ninput {\r\n  border: black solid;\r\n  font-size: 20px;\r\n  font-weight: bolder;\r\n}\r\n\r\nul {\r\n  border: 2px solid black;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  gap: 10px;\r\n  padding: 7px 10px;\r\n}\r\n\r\nli:nth-child(odd) {\r\n  background-color: red;\r\n}\r\n\r\nli:nth-child(even) {\r\n  background-color: blue;\r\n}\r\n",""]);const i=c},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],l=t.base?s[0]+t.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=o(f,t);t.byIndex=i,r.splice(i,0,{identifier:d,updater:h,references:1})}c.push(d)}return c}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);r[i].references--}for(var s=t(n,o),l=0;l<a.length;l++){var u=e(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),c=e.n(a),i=e(565),s=e.n(i),l=e(216),u=e.n(l),d=e(589),p=e.n(d),f=e(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:5UJ3uAfYRXbJ57tyDjFq/scores",m=()=>{!async function(){const n=document.querySelector("#board-list");n.innerHTML="";const r=await fetch(v);(await r.json()).result.forEach((r=>{n.innerHTML+=`\n      <li>${r.user}: ${r.score}</li>\n      `}))}()};document.addEventListener("DOMContentLoaded",m()),document.querySelector("#add").addEventListener("click",(n=>{n.preventDefault(),(()=>{const n=document.querySelector("#name").value,r=document.querySelector("#score").value;fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n,score:r})}).then((n=>n.json())).then((n=>{console.log("Success:",n)})).catch((n=>{console.error("Error:",n)}))})(),document.querySelector("#name").value="",document.querySelector("#score").value=""})),document.querySelector("#refresh").addEventListener("click",(()=>{m()}))})()})();