(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,d=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):d=-1,c.length&&h())}function h(){if(!l){var e=u(f);l=!0;for(var t=c.length;t;){for(a=c,c=[];++d<t;)a&&a[d].run();d=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),u=n("nOHt"),a=n("aUsF"),c=n.n(a);function l(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function d(){return"undefined"===typeof navigator.onLine||navigator.onLine}const f=new Map;function h(e){return f.get(e)}function p(e,t){return f.set(e,t)}const m={},v={},y={},_={},g={};const w="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),S={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,n,r,i){if(!l())return;if(n.errorRetryCount&&i.retryCount>n.errorRetryCount)return;const o=Math.min(i.retryCount||0,8),s=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,s,i)},errorRetryInterval:1e3*(w?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(w?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:c.a};let b=!1;if("undefined"!==typeof window&&window.addEventListener&&!b){const e=()=>{if(l()&&d())for(let e in y)y[e][0]&&y[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),b=!0}var j=S;const R=new WeakMap;let x=0;const C=Object(o.createContext)({});C.displayName="SWRConfigContext";var T=C;const O="undefined"===typeof window,F=O?o.useEffect:o.useLayoutEffect,E=e=>e?"err@"+e:"",z=e=>{let t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let n=0;n<e.length;++n){let r;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):R.has(e[n])?r=R.get(e[n]):(r=x,R.set(e[n],x++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t]},I=(e,t,n)=>{const r=_[e];if(e&&r)for(let i=0;i<r.length;++i)r[i](!1,t,n)},k=async(e,t,n=!0)=>{const[r]=z(e);if(!r)return;if("undefined"===typeof t)return((e,t=!0)=>{const[n]=z(e);if(!n)return;const r=_[n];if(n&&r){const e=h(n),i=h(E(n));for(let n=0;n<r.length;++n)r[n](t,e,i,!1)}})(e,n);let i,o;if(g[r]=Date.now()-1,t&&"function"===typeof t)try{i=await t(h(r))}catch(u){o=u}else if(t&&"function"===typeof t.then)try{i=await t}catch(u){o=u}else i=t;"undefined"!==typeof i&&p(r,i);const s=_[r];if(s)for(let a=0;a<s.length;++a)s[a](!!n,i,o,!1);if(o)throw o;return i};T.Provider;var A=function(...e){let t,n,r={};e.length>=1&&(t=e[0]),e.length>2?(n=e[1],r=e[2]):"function"===typeof e[1]?n=e[1]:"object"===typeof e[1]&&(r=e[1]);const[i,s]=z(t),u=E(i);r=Object.assign({},j,Object(o.useContext)(T),r),"undefined"===typeof n&&(n=r.fetcher);const a=h(i)||r.initialData,c=h(u),f=Object(o.useRef)({data:!1,error:!1,isValidating:!1}),w=Object(o.useRef)({data:a,error:c,isValidating:!1}),S=Object(o.useState)(null)[1];let b=Object(o.useCallback)(e=>{let t=!1;for(let n in e)w.current[n]=e[n],f.current[n]&&(t=!0);(t||r.suspense)&&S({})},[]);const R=Object(o.useRef)(!1),x=Object(o.useRef)(i),C=Object(o.useCallback)((e,t)=>k(i,e,t),[i]),A=Object(o.useCallback)(async(e={})=>{if(!i||!n)return!1;if(R.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,o="undefined"!==typeof m[i]&&e.dedupe;try{let e,a;if(b({isValidating:!0}),o?(a=v[i],e=await m[i]):(m[i]&&(g[i]=Date.now()-1),r.loadingTimeout&&!h(i)&&setTimeout(()=>{t&&r.onLoadingSlow(i,r)},r.loadingTimeout),m[i]=null!==s?n(...s):n(i),v[i]=a=Date.now(),e=await m[i],setTimeout(()=>{delete m[i],delete v[i]},r.dedupingInterval),r.onSuccess(e,i,r)),g[i]&&a<=g[i])return b({isValidating:!1}),!1;p(i,e),p(u,void 0),x.current=i;const c={isValidating:!1};"undefined"!==typeof w.current.error&&(c.error=void 0),r.compare(w.current.data,e)||(c.data=e),b(c),o||I(i,e,void 0)}catch(a){if(delete m[i],delete v[i],p(u,a),x.current=i,w.current.error!==a&&(b({isValidating:!1,error:a}),o||I(i,void 0,a)),r.onError(a,i,r),r.shouldRetryOnError){const t=(e.retryCount||0)+1;r.onErrorRetry(a,i,r,A,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[i]);if(F(()=>{if(!i)return;R.current=!1;const e=w.current.data,t=h(i)||r.initialData;x.current===i&&r.compare(e,t)||(b({data:t}),x.current=i);const n=()=>A({dedupe:!0});let o;r.initialData||("undefined"!==typeof t&&!O&&window.requestIdleCallback?window.requestIdleCallback(n):n()),r.revalidateOnFocus&&(o=function(e,t){let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>n=!1,t))}}(n,r.focusThrottleInterval),y[i]?y[i].push(o):y[i]=[o]);const s=(e=!0,t,o,s=!0)=>{const u={};let a=!1;return"undefined"===typeof t||r.compare(w.current.data,t)||(u.data=t,a=!0),w.current.error!==o&&(u.error=o,a=!0),a&&b(u),x.current=i,!!e&&(s?n():A())};_[i]?_[i].push(s):_[i]=[s];let u=null;return"undefined"!==typeof addEventListener&&r.revalidateOnReconnect&&(u=addEventListener("online",n)),()=>{if(b=()=>null,R.current=!0,o&&y[i]){const e=y[i],t=e.indexOf(o);t>=0&&(e[t]=e[e.length-1],e.pop())}if(_[i]){const e=_[i],t=e.indexOf(s);t>=0&&(e[t]=e[e.length-1],e.pop())}"undefined"!==typeof removeEventListener&&null!==u&&removeEventListener("online",u)}},[i,A]),F(()=>{let e=null;const t=async()=>{w.current.error||!r.refreshWhenHidden&&!l()||r.refreshWhenOffline||!d()||await A({dedupe:!0}),r.refreshInterval&&(e=setTimeout(t,r.refreshInterval))};return r.refreshInterval&&(e=setTimeout(t,r.refreshInterval)),()=>{e&&clearTimeout(e)}},[r.refreshInterval,r.refreshWhenHidden,r.refreshWhenOffline,A]),r.suspense){if(O)throw new Error("Suspense on server side is not yet supported!");let e=h(i),t=h(u);if("undefined"===typeof e&&"undefined"===typeof t){if(m[i]||A(),m[i]&&"function"===typeof m[i].then)throw m[i];e=m[i]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:A,mutate:C,isValidating:w.current.isValidating}}return Object(o.useMemo)(()=>{const e={revalidate:A,mutate:C};return Object.defineProperties(e,{error:{get:function(){return f.current.error=!0,x.current===i?w.current.error:c}},data:{get:function(){return f.current.data=!0,x.current===i?w.current.data:a}},isValidating:{get:function(){return f.current.isValidating=!0,w.current.isValidating}}}),e},[A])};new Map;var L=A,B=n("vcXL"),M=n.n(B),N=s.a.createElement;function P(e){return M()(e).then((function(e){return e.json()}))}var q=["http://datumorphism.com/api/workflows/data-quality-and-summary.json","http://datumorphism.com/api/workflows/eda.json"],V=function(e){console.log("Show data fetched. Count: ".concat(e));var t=e&&e[Math.floor(Math.random()*e.length)];return console.log("randomItem item: ",t),t};function W(){Object(u.useRouter)().query;var e=q[Math.floor(Math.random()*q.length)],t=L(e,P),n=t.data,r=t.error,o=null===n||void 0===n?void 0:n.name,s=null===n||void 0===n?void 0:n.description,a=null===n||void 0===n?void 0:n.workflow;console.log("workflow: ",a);var c=[];a&&a.forEach((function(e){return function e(t){c.push(t),t&&void 0!==t.steps&&t.steps.forEach((function(t){return e(t)}))}(e)})),c=c.flat(),console.log("all: ",c);var l=V(c);console.log("item in main: ",l);var d=l&&(null===l||void 0===l?void 0:l.name),f=l&&(null===l||void 0===l?void 0:l.description);return console.log("wf_name",d),console.log("wf_description",f),n||(s="Loading..."),r&&(function(e){throw new Error('"'+e+'" is read-only')}("wf_description"),f="Failed to fetch the quote."),N("main",{className:"jsx-119416108"},N("div",{className:"jsx-119416108 center"},d&&N("span",{className:"jsx-119416108 wf_name"},d),f&&N("div",{className:"jsx-119416108 wf_description"},f)),N("div",{className:"jsx-119416108 wf"},o,": ",s),N(i.a,{id:"119416108"},["main.jsx-119416108{width:90%;max-width:900px;margin:300px auto;text-align:center;}",".step.jsx-119416108{font-family:monospace;color:#031704;font-size:24px;padding:1em 0 1em 0;}",".wf.jsx-119416108{font-family:monospace;color:#031704;font-size:14px;position:absolute;top:1em;left:1em;}",".workflow.jsx-119416108{font-family:monospace;color:#41443f;font-size:20px;}",".wf_name.jsx-119416108{font-family:monospace;color:#41443f;font-size:20px;}",".wf_description.jsx-119416108{font-family:monospace;color:#031704;font-size:24px;padding:1em 0 1em 0;}"]))}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},aUsF:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,u,a,c=r(t),l=r(n);if(c&&l){if((u=t.length)!=n.length)return!1;for(s=u;0!==s--;)if(!e(t[s],n[s]))return!1;return!0}if(c!=l)return!1;var d=t instanceof Date,f=n instanceof Date;if(d!=f)return!1;if(d&&f)return t.getTime()==n.getTime();var h=t instanceof RegExp,p=n instanceof RegExp;if(h!=p)return!1;if(h&&p)return t.toString()==n.toString();var m=i(t);if((u=m.length)!==i(n).length)return!1;for(s=u;0!==s--;)if(!o.call(n,m[s]))return!1;for(s=u;0!==s--;)if(!e(t[a=m[s]],n[a]))return!1;return!0}return t!==t&&n!==n}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,u=t.optimizeForSpeed,a=void 0===u?r:u,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,u,a=e.prototype;return a.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(u){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),u&&n(t,u),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);