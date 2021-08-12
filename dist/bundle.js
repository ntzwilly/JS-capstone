(()=>{var t={426:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: large;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 30px;\r\n  margin-left: 250px;\r\n  margin-right: 300px;\r\n}\r\n\r\n.logo {\r\n  border: 2px solid #000;\r\n  height: 80px;\r\n  width: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center; \r\n  border-radius: 50%;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style-type: none;\r\n  margin-left: 10px;\r\n}\r\n\r\nnav ul li {\r\n  margin-left: 100px;\r\n}\r\n\r\nnav ul li a {\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n\r\n.spaceship {\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr;\r\n  margin: 100px auto;\r\n}\r\n\r\n.image {\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 200px;\r\n  justify-content: space-between;\r\n  padding: 20px 10px;\r\n}\r\n\r\nbutton {\r\n  margin-left: 20px;\r\n  margin-bottom: 30px;\r\n  padding: 10px 10px;\r\n  background-color: #fff;\r\n  border: 2px solid black;\r\n  box-shadow: 5px 5px 2px 1px black;\r\n  font-size: 0.8em;\r\n  cursor: pointer;\r\n  align-self: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\nfooter {\r\n  padding: 30px 100px;\r\n  border-top: 2px solid black;\r\n}",""]);const i=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=p;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",m={};function g(){}function v(){}function y(){}var x={};s(x,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(_([])));b&&b!==r&&n.call(b,i)&&(x=b);var C=y.prototype=g.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=y,s(C,"constructor",y),s(y,"constructor",v),v.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},E(L.prototype),s(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(C),s(C,c,"Generator"),s(C,i,(function(){return this})),s(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],l=n.base?s[0]+n.base:s[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var f=r(p),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(e[f].references++,e[f].updater(h)):e.push({identifier:p,updater:o(h,n),references:1}),a.push(p)}return a}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=n(t,o),l=0;l<i.length;l++){var u=r(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},704:(t,e,r)=>{"use strict";t.exports=r.p+"35384cfe509651ff371d.svg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";var t=r(379),e=r.n(t),n=r(795),o=r.n(n),i=r(569),a=r.n(i),c=r(565),s=r.n(c),l=r(216),u=r.n(l),p=r(589),f=r.n(p),h=r(426),d={};d.styleTagTransform=f(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=u(),e()(h.Z,d),h.Z&&h.Z.locals&&h.Z.locals;var m=r(704);r(666);const g=(t,e)=>{const r=document.createElement(t);return e&&(r.className=e),r},v=g("header"),y=g("div","logo");y.textContent="Sci-Fi logo";const x=g("nav"),w=g("ul"),b=g("li","spaceship"),C=g("a");C.href="#",C.textContent="Spaceship(6)";const E=g("li"),L=g("a");L.href="#",L.textContent="Planets";const j=g("li"),S=g("a");S.href="#",S.textContent="Races",b.appendChild(C),E.appendChild(L),j.appendChild(S),w.appendChild(b),w.appendChild(E),w.appendChild(j),x.appendChild(w),v.appendChild(y),v.appendChild(x);const T=g("main");fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((t=>t.json())).then((t=>{for(const e of t.meals){const t=g("section"),r=g("img","image");r.src=e.strMealThumb,r.alt="space-image";const n=g("div","likes"),o=g("p");o.textContent=e.strMeal;const i=g("div","like-counter"),a=g("img");a.src=m,a.alt="heart-image";const c=g("p");c.textContent="like",i.appendChild(a),i.appendChild(c),n.appendChild(o),n.appendChild(i);const s=g("button");s.textContent="comments";const l=g("button");l.textContent="reservations",t.appendChild(r),t.appendChild(n),t.appendChild(s),t.appendChild(l),T.appendChild(t)}})).catch(console.error),(async()=>{const t=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");(await t.json()).meals.length})();const k=g("footer");k.textContent="Created By Ade & Willy under CC licence";const _=document.getElementById("root");_.appendChild(v),_.appendChild(T),_.appendChild(k)})()})();