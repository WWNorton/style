!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/style/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter(e=>t in e),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp("^"+location.origin),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"d304c7b3326d837fa0a3da29bce5247d","url":"01a85c17.dd872f21.js"},{"revision":"3ecb7267857d8b39b1d4a9dae5d713da","url":"1107bc6d.e44ca821.js"},{"revision":"cc17d904ba7349680a79f0e789b5f30a","url":"17896441.e56cc218.js"},{"revision":"502bbf0d1dee2dcbbfaac4abd43b67b0","url":"19.5adc34ab.js"},{"revision":"42cf8e73bdebaa6287f6b79d6d52b0a5","url":"19958b68.e8a5ec5f.js"},{"revision":"09fc9113ac0bad56455efdb8e0a56802","url":"20.b92b413b.js"},{"revision":"aaa2010a2cd14d01473dd11dbff54ca9","url":"21.8ddbd0bc.js"},{"revision":"042b70a8fc383bc1abe750a674d3f800","url":"22.d14b9d00.js"},{"revision":"a4bb93bab0d65e940be3009be7457dcf","url":"23.9a0a35f2.js"},{"revision":"30642d1eca50bbe51f3fa055dabcc641","url":"24.5c0acacb.js"},{"revision":"c504987ac39305587361cef3d5e9e685","url":"25.79ece18b.js"},{"revision":"f4ad5aee09706e2e97f76102c87d324e","url":"26.3d87b3d2.js"},{"revision":"804e0d80c8d29f80cc6273138fd608ec","url":"27.137c1287.js"},{"revision":"56d2ed9cf1e13761f8587e94204bf2c0","url":"28.1c681e7b.js"},{"revision":"1249585f66fde67a9a228aaae005e3d2","url":"3570154c.665fb68c.js"},{"revision":"48af43246e54efd88b99274a4b54c968","url":"404.html"},{"revision":"d9808a3928cad5655a33e97583ec85c2","url":"4186ebd0.ee638c2f.js"},{"revision":"050c6ef68487cc69e2d9c45c9c728ecb","url":"5095e272.d9919533.js"},{"revision":"06f4f0f6c1c15cac892f1a2d84dfb383","url":"5191dec3.023f0c2f.js"},{"revision":"8334cda28627482359b2f8ed481eb1ae","url":"555e3275.c1b9cdd4.js"},{"revision":"b54bb276d753cf5e2f07c618d1248ce0","url":"8a961ab0.ada3e294.js"},{"revision":"b73539d6ea39ba59c7f1189655db69db","url":"8d192aaa.e7e0afae.js"},{"revision":"024d944d1017878f782a388985eadb0e","url":"algolia.1022e710.js"},{"revision":"f044c33ca72a1b8878399490559c32fe","url":"algolia.12a6eb6e.css"},{"revision":"744f67d5e0ed16f718851aa654c1ad41","url":"algolia.fa09a651.js"},{"revision":"9856137c05dccd36a7b5bdaefaca17db","url":"blog/hello-world/index.html"},{"revision":"ad5f76c3bc3258602d68387e57ac587a","url":"blog/index.html"},{"revision":"e2ebcdcacf3ce2d3d0cb867382585e48","url":"blog/tags/guidelines/index.html"},{"revision":"cfccb3656bf509f0415e74690cd80018","url":"blog/tags/index.html"},{"revision":"127c4fe77b9d15f02272451ed220eee2","url":"blog/tags/style/index.html"},{"revision":"b89fc4fb7a3be67ad8a4a6832e98f434","url":"c1510a3a.68d960ce.js"},{"revision":"7bd7f5fb0866e9dc4eebf8d15b1564a8","url":"c4f5d8e4.2ebb3c9b.js"},{"revision":"4e62310a2529d3fbd72ef25414c752e0","url":"common.09620517.js"},{"revision":"6eb3dd41efd84ae8192f0493d17b6f0c","url":"d610846f.6f016683.js"},{"revision":"bbb0c5fdd422ec19adb38f5b258492e5","url":"docs/css-sass/index.html"},{"revision":"2fee98efb205c0e3c9aec2aedd1fb696","url":"docs/index.html"},{"revision":"b1babdcea8be05b212494b7e5c39a061","url":"docs/react/index.html"},{"revision":"77bd4d9f6a7247cab94502072756ed02","url":"docs/typescript/index.html"},{"revision":"e8f56e970b4a4789fce46f093311dc0a","url":"index.html"},{"revision":"cbe73bab378b0eeaf091cf2434603bd7","url":"main.67a59983.css"},{"revision":"56517a523b28e13945508b9063845163","url":"main.72143423.js"},{"revision":"8c22bd44c5300d175a430861c6d0a943","url":"manifest.json"},{"revision":"ff2d89a074bbb9ef23d6826ff83b69dd","url":"runtime~main.87f4bb8a.js"},{"revision":"2838a6f7207af75ba74e2327fe46bf48","url":"styles.a64e9271.js"},{"revision":"f7b4c291bf39c8002192c883c0e5fc46","url":"styles.ef39e9e2.css"},{"revision":"9e0d3d423f29f546b94484e055322df4","url":"img/android-chrome-192x192.png"},{"revision":"c08e5fbe4500cf0c73e481840b7d661b","url":"img/android-chrome-512x512.png"},{"revision":"f70e691f71a86359e45869920d99dbca","url":"img/apple-touch-icon.png"},{"revision":"fa414a3c0feb1c4f1b454473440a42a3","url":"img/favicon-16x16.png"},{"revision":"ead76ffe91828bd4783af333cc952e6d","url":"img/favicon-32x32.png"},{"revision":"f35b1adf72cd5ee68585c82a9486eafd","url":"img/favicon.ico"},{"revision":"0f754365df37fdde2036c8fb72356ae9","url":"img/logo.svg"},{"revision":"2b3c360a43341e93285108d4d119b496","url":"img/seagull-dark.svg"},{"revision":"9aeb61582be39ed50221f8283da2819a","url":"img/seagull-light.svg"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){void 0}(),self.addEventListener("install",e=>{e.waitUntil(n.install())}),self.addEventListener("activate",e=>{e.waitUntil(n.activate())}),self.addEventListener("fetch",async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(n.href+"index.html"):t.push(n.href+"/index.html")),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}}),self.addEventListener("message",async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()})})()}]);