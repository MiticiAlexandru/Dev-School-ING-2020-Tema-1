/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={669:(e,t,n)=>{n(609)},448:(e,t,n)=>{"use strict";var r=n(867),s=n(26),i=n(372),o=n(327),a=n(97),c=n(109),l=n(985),u=n(61);e.exports=function(e){return new Promise((function(t,n){var d=e.data,h=e.headers;r.isFormData(d)&&delete h["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(f+":"+m)}var g=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};s(t,n,i),p=null}},p.onabort=function(){p&&(n(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||l(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;y&&(h[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(h,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete h[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),d||(d=null),p.send(d)}))}},609:(e,t,n)=>{"use strict";var r=n(867),s=n(849),i=n(321),o=n(185);function a(e){var t=new i(e),n=s(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=a(n(655));c.Axios=i,c.create=function(e){return a(o(c.defaults,e))},c.Cancel=n(263),c.CancelToken=n(972),c.isCancel=n(502),c.all=function(e){return Promise.all(e)},c.spread=n(713),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),s=n(327),i=n(782),o=n(572),a=n(185);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},782:(e,t,n)=>{"use strict";var r=n(867);function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:(e,t,n)=>{"use strict";var r=n(793),s=n(303);e.exports=function(e,t){return e&&!r(t)?s(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,s,i){var o=new Error(e);return r(o,t,n,s,i)}},572:(e,t,n)=>{"use strict";var r=n(867),s=n(527),i=n(502),o=n(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={},s=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function l(s){r.isUndefined(t[s])?r.isUndefined(e[s])||(n[s]=c(void 0,e[s])):n[s]=c(e[s],t[s])}r.forEach(s,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(i,l),r.forEach(o,(function(s){r.isUndefined(t[s])?r.isUndefined(e[s])||(n[s]=c(void 0,e[s])):n[s]=c(void 0,t[s])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var u=s.concat(i).concat(o).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(d,l),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var s=n.config.validateStatus;n.status&&s&&!s(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),s=n(16),i={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=n(448)),a),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))})))})),i=o.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,s,i,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(s)&&a.push("path="+s),r.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function s(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=s(window.location.href),function(t){var n=r.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,o={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(o[t]&&s.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,n)=>{"use strict";var r=n(849),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===s.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:l,isStream:function(e){return a(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,s=arguments.length;r<s;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,s){e[s]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(()=>{"use strict";const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${s}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],a=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,p=0;const{strings:f,values:{length:m}}=e;for(;p<m;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)c(t[e].name,o)&&r++;for(;r-- >0;){const t=f[p],n=d.exec(t)[2],r=n.toLowerCase()+o,s=e.getAttribute(r);e.removeAttribute(r);const a=s.split(i);this.parts.push({type:"attribute",index:h,name:n,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,s=t.split(i),a=s.length-1;for(let t=0;t<a;t++){let n,i=s[t];if(""===i)n=u();else{const e=d.exec(i);null!==e&&c(e[2],o)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-o.length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++h})}""===s[a]?(r.insertBefore(u(),e),n.push(e)):e.data=s[a],p+=a}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(u(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(n.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const c=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},l=e=>-1!==e.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:n},parts:r}=e,s=document.createTreeWalker(n,133,null,!1);let i=f(r),o=r[i],a=-1,c=0;const l=[];let u=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==o&&o.index===a;)o.index=null!==u?-1:o.index-c,i=f(r,i),o=r[i]}l.forEach((e=>e.parentNode.removeChild(e)))}const p=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},f=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(l(t))return n}return-1},m=new WeakMap,g=e=>"function"==typeof e&&m.has(e),y={},_={};class v{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,c=s.nextNode();for(;o<r.length;)if(i=r[o],l(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(n.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=n.pop(),c=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const S=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=` ${r} `;class w{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],a=e.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===e.indexOf("--\x3e",a+1);const c=d.exec(e);t+=null===c?e+(n?b:s):e.substr(0,c.index)+c[1]+c[2]+o+c[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==S&&(t=S.createHTML(t)),e.innerHTML=t,e}}const x=e=>null===e||!("object"==typeof e||"function"==typeof e),C=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!C(e))return e}let r="";for(let s=0;s<t;s++){r+=e[s];const t=n[s];if(void 0!==t){const e=t.value;if(x(e)||!C(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||x(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):C(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const n=new v(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)n=t[r],void 0===n&&(n=new P(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class A extends E{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends N{}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class R{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function U(e){let t=B.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},B.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(r);return n=t.keyString.get(s),void 0===n&&(n=new a(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const B=new Map,$=new WeakMap,V=new class{handleAttributeExpressions(e,t,n,r){const s=t[0];return"."===s?new A(e,t.slice(1),n).parts:"@"===s?[new R(e,t.slice(1),r.eventContext)]:"?"===s?[new T(e,t.slice(1),n)]:new E(e,t,n).parts}handleTextExpression(e){return new P(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const L=(e,...t)=>new w(e,t,"html",V),F=(e,t)=>`${e}--${t}`;let M=!0;void 0===window.ShadyCSS?M=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),M=!1);const q=e=>t=>{const n=F(t.type,e);let s=B.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},B.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(r);if(i=s.keyString.get(o),void 0===i){const n=t.getTemplateElement();M&&window.ShadyCSS.prepareTemplateDom(n,e),i=new a(t,n),s.keyString.set(o,i)}return s.stringsArray.set(t.strings,i),i},I=["html","svg"],z=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:H};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdateInternal(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=H){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||D,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||D.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=J){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const s=this.constructor;n=n||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;const K=Element.prototype;K.msMatchesSelector||K.webkitMatchesSelector;const X=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class Z{constructor(e,t){if(t!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=e=>new Z(String(e),G),Y=(e,...t)=>{const n=t.reduce(((t,n,r)=>t+(e=>{if(e instanceof Z)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]);return new Z(n,G)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ee={};class te extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),r=[];n.forEach((e=>r.unshift(e))),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!X){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return Q(t)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ee&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ee}}te.finalized=!0,te.render=(e,n,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,i=$.has(n),o=M&&11===n.nodeType&&!!n.host,a=o&&!z.has(s),c=a?document.createDocumentFragment():n;if(((e,n,r)=>{let s=$.get(n);void 0===s&&(t(n,n.firstChild),$.set(n,s=new P(Object.assign({templateFactory:U},r))),s.appendInto(n)),s.setValue(e),s.commit()})(e,c,Object.assign({templateFactory:q(s)},r)),a){const e=$.get(c);$.delete(c);((e,t,n)=>{z.add(e);const r=n?n.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{I.forEach((t=>{const n=B.get(F(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),h(e,n)}))}))})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let o=f(s),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=p(t),n.parentNode.insertBefore(t,n));-1!==o&&s[o].index===c;){if(a>0){for(;-1!==o;)s[o].index+=a,o=f(s,o);return}o=f(s,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),h(n,e)}})(s,c,e.value instanceof v?e.value.template:void 0),t(n,n.firstChild),n.appendChild(c),$.set(n,e)}!i&&o&&window.ShadyCSS.styleElement(n.host)};const ne="\n    .art_home_img {\n        flex: 5;\n    }\n    \n    .art_home_text_0 {\n        flex-grow: 4;\n        box-sizing: border-box;\n        padding-left: 2%;\n        flex-basis: 0;\n    }\n    \n    .art_home_text_1 {\n        flex-grow: 4;\n        box-sizing: border-box;\n        padding-right: 2%;\n        flex-basis: 0;\n    }\n    \n    .art_destination_img {\n        flex: 1;\n    }\n    \n    .art_destination_text {\n        flex-grow: 5;\n        box-sizing: border-box;\n        padding-left: 2%;\n        flex-basis: 0;\n    }\n    \n    .artImg {\n        width: 100%;\n        height: auto;\n        vertical-align: middle;\n        object-fit: contain;\n        left: 0;\n        top: 0;\n    }\n    ",re="\n    .art {\n        background-color: white;\n        display: flex;\n\n        padding: 1.25%;\n        border-radius: 12px;\n        margin-top: 1.375%;\n        margin-bottom: 1.375%;\n        margin-left: 2.75%;\n        margin-right: 2.75%;\n    }\n    ";function se(e){document.getElementById("imgFullscreenButton").innerHTML=`<img class="imgFullscreen" src="../img/${e}" alt="${e}"></img>`,document.getElementById("imgFullscreenContainer").style.display="block"}customElements.define("article-home",class extends te{static get styles(){return Y`${Q(ne)}`}static get properties(){return{title:{type:String},subtitle:{type:String},image:{type:String},content:{type:String},alignleft:{type:Boolean}}}render(){return this.alignleft?L`
                <div class="art_home_img">
                    <img class="artImg" src="../img/${this.image}" alt="${this.image}"
                        @click=${()=>this.handleClick(this.image)}
                    </img>
                </div>
                <div class="art_home_text_0">
                    <h2>${this.title}</h2>
                    <h3>${this.subtitle}</h3>
                    ${this.content}
                </div>
            `:L`
                <div class="art_home_text_1">
                    <h2>${this.title}</h2>
                    <h3>${this.subtitle}</h3>
                    ${this.content}
                </div>
                <div class="art_home_img">
                    <img class="artImg" src="../img/${this.image}" alt="${this.image}"
                        @click=${()=>this.handleClick(this.image)}
                    </img>
                <div>
            `}handleClick(e){se(e)}}),customElements.define("article-destinations",class extends te{static get styles(){return Y`${Q(ne)}`}static get properties(){return{title:{type:String},link:{type:String},image:{type:String},content:{type:String}}}render(){return L`
            <div class="art_destination_img">
                <img class="artImg" src="../img/${this.image}" alt="${this.image}"
                    @click=${()=>this.handleClick(this.image)}
                </img>
            </div>
            <div class="art_destination_text">
                <h2> ${this.title} </h2>
                <br> ${this.content} <br> <br>
                <a href="${this.link}"  target="_blank" class="link">Click here for more info..
                </a>
            </div>
        `}handleClick(e){se(e)}}),customElements.define("art-container",class extends te{static get styles(){return Y`${Q(re)}`}static get properties(){return{articles:{type:Array}}}constructor(){super(),this.articles=[]}render(){return L`${this.articles.map((e=>L`
                    <article-home class="art"
                        .title="${e.title}"
                        .subtitle="${e.subtitle}"
                        .image="${e.image}"
                        .content="${e.content}"
                        .alignleft="${e.alignleft}"
                    ></article-home>
                `))}`}connectedCallback(){super.connectedCallback(),fetch("https://devschool-2020.firebaseio.com/alexandru-mitici/home.json").then((e=>{e.json().then((e=>this.articles=e["-MNste_K-ry7UK3c6X7k"].data))}))}}),customElements.define("art-container-dest",class extends te{static get styles(){return Y`${Q(re)}`}static get properties(){return{articles:{type:Array}}}constructor(){super(),this.articles=[]}render(){return L`${this.articles.map((e=>L`
                    <article-destinations class="art"
                        .title="${e.title}"
                        .link="${e.link}"
                        .image="${e.image}"
                        .content="${e.content}"
                    ></article-destinations>
                `))}`}connectedCallback(){super.connectedCallback(),fetch("https://devschool-2020.firebaseio.com/alexandru-mitici/destination.json").then((e=>{e.json().then((e=>this.articles=e["-MNsu2urcprKRMp6LEKT"].data))}))}}),n(669),customElements.define("main-componenet",class extends te{render(){return L`
        <script src="../JS/utils.js"></script>
        <script type="module" src="../JS/navigation.js"></script>

        <header>
            <navigation-element>
                <h1 slot="title">Home</h1>
            </navigation-element>
        </header>

        <picture>
            <source media="(max-width:650px)" srcset="../img/title_2.jpg">
            <img id="titleImage" src="../img/title_1.jpg" alt="Title image" style="width:auto;">
        </picture>

        <section id="homeDescription">
            <h2 style="text-align: center;">Travel site</h2> <br>
            <span translate="no"> Welcome to our travel site! On our home page you'll find some interesting articles related to this topic. Check out our destinations page as well. Bienvenue sur notre site de voyage! Sur notre page d'accueil, vous trouverez des articles intéressants liés à ce sujet. Consultez également notre page de destinations. Willkommen auf unserer Reiseseite! Auf unserer Homepage finden Sie einige interessante Artikel zu diesem Thema. Schauen Sie sich auch unsere Zielseite an. </span>
        </section>

        <art-container id="grd">

        </art-container>

        <div id="imgFullscreenContainer">
            <button id="imgFullscreenButton" class="imgFullscreenButtonClose"
            onClick="closeFullscreen()"></button>
        </div>

        <div id="google_translate_element" hidden></div>

        <script type="text/javascript">
        function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }
        </script>

        <script type="text/javascript" src="../JS/f.js"></script>

        <footer>
            <my-footer></my-footer>
        </footer>

        <script>
            window.onload = () => {
                var frame = document.querySelector("iframe");
                frame.onload = changeLanguageInit(frame, true);
            }
        </script>
        `}static get styles(){return css`
            :root {
                --gray1: rgb(138, 138, 138);
                --gray2: rgb(218, 218, 218);
                --gray3: rgb(245, 245, 245);
            
                --themeLightGreen: rgba(64, 247, 223);
                --themeLightBlue: rgba(64, 177, 247);
                --themeRed: rgba(222, 52, 92);
                --themeBrown: rgba(147, 36, 50);
                --themeViolet: rgba(60, 24, 116);
                --themeGrayGreen: rgba(40, 55, 71);
                --themeDarkBlue: rgb(6, 58, 95);
            }
            
            body {
                margin: 0;
                color: var(--gray1);
                font-family: Verdana;
                background-image: linear-gradient(to top right, var(--themeLightGreen), var(--themeDarkBlue));
                background-attachment: fixed;
            }
            
            header {
                width: 100%;
                text-align: center;
                font-size: 2.5vw;
            
                padding-top: 1.5%;
                padding-bottom: 0;
            
                background-color: white;
            }
            
            h1 {
                margin-top: 0;
                margin-bottom: 0;
                padding-bottom: 0.25%;
                color: var(--themeDarkBlue);
            }
            
            h2 {
                margin-top: 0;
                margin-bottom: 0;
                color: var(--themeDarkBlue);
            }
            
            #homeDescription {
                background-color: white;
                padding-left: 5%;
                padding-right: 5%;
                padding-top: 2.5%;
                padding-bottom: 2.5%;
                width: 90%;
            }
            
            #titleImage {
                max-width: 100%;
                height: auto;
                vertical-align: middle;
                object-fit: contain;
            }
            
            #grd {
                padding-top: 1.375%;
                padding-bottom: 1.375%;
            }
            
            .languageForm {
                background-color: white;
            
                padding: 1.25%;
                border-radius: 12px;
                margin-top: 1.375%;
                margin-bottom: 1.375%;
                margin-left: 2.75%;
                margin-right: 2.75%;
            }
            
            .languageFormTitle {
                width: 100%;
                text-align: center;
            }
            
            .languageFormElement {
                width: 5%;
                margin-left: 45%;
                text-align: center;
            }
            
            .languageFormSubmit {
                width: 15%;
                margin-left: 45%;
                text-align: center;
            }
            
            .link {
                color: var(--gray1);
            }
            
            .link:hover {
                color: var(--gray2);
            }
            
            .navBar ul li {
                box-sizing: border-box;
            
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
            
                border-radius: 12px;
                background-color: var(--gray3);
            }
            
            #imgFullscreenContainer {
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
            
                position: fixed;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.9);
                display: none;
            }
            
            .imgFullscreenButton {
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                padding: 0;
                margin: 0;
                border: 0;
                background-color: rgba(0, 0, 0, 0);
            }
            
            .imgFullscreenButtonClose {
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                padding: 5%;
                margin: 0;
                border: 0;
                background-color: rgba(0, 0, 0, 0);
            }
            
            .imgFullscreen {
                max-width: 100%;
                max-height: 100%;
                vertical-align: middle;
                object-fit: contain;
                left: 0;
                top: 0;
            }
        `}})})()})();