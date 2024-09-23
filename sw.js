const cacheStorageKeyPrefix="17lai-cache-";const cacheStorageKey=`17lai-cache-20240923162614`;var cacheList=["/css/matery.css?v=1.1.9","/css/my.css?v=1.0.3","/css/highlight.css?v=1.0.0","/css/highlight-dark.css?v=1.0.0","/libs/awesome/css/all.min.css?v=5.15.4","/libs/jquery/jquery.min.js?v=3.7.1","/libs/materialize/materialize.min.js?v=1.2.2","/libs/materialize/materialize.min.css?v=1.2.2","/libs/masonry/masonry.pkgd.min.js?v=4.2.2","/libs/aos/aos.min.css","/libs/aos/aos.min.js","/libs/waline/waline-count.js","/js/ana.js?v=1.0.5","/js/color-schema.js?v=1.0.0","/js/plugins.js?v=1.0.0","/js/tw_cn.js?v=1.0.1","/js/boot.js?v=1.0.0","/js/utils.js?v=1.0.11","/js/events.js?v=1.0.0"];self.addEventListener("install",e=>{e.waitUntil(caches.open(cacheStorageKey).then(e=>e.addAll(cacheList)).then(()=>self.skipWaiting()))});self.addEventListener("message",e=>{if(e.data&&e.data.action==="skipWaiting"){self.skipWaiting();console.log("[PWA] rec message skipWaiting")}});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>{return Promise.all(e.map(e=>{if(e.startsWith(cacheStorageKeyPrefix)){if(e!==cacheStorageKey){console.log("[PWA] Removing old cache:",e);return caches.delete(e)}}}))}).then(()=>{console.log("[PWA] Found caching resources",cacheStorageKey);return caches.open(cacheStorageKey).then(e=>{return e.addAll(cacheList)})}).then(()=>{console.log("[PWA] Activation complete");return self.clients.claim()}))});const customIdentifier="17laiIdentifier";self.addEventListener("message",e=>{if(e.data&&e.data.action==="checkIdentifier"){e.source.postMessage({identifier:customIdentifier})}});const proxyMap=new Map([["https://cdn.jsdelivr.net","https://fastly.jsdelivr.net"],["https://unpkg.com/@waline/emojis","https://fastly.jsdelivr.net/npm/@waline/emojis"],["https://fastly.jsdelivr.net/npm/@waline/emojis","https://unpkg.com/@waline/emojis"],["https://cdn.webpushr.com","https://cdn-push.17lai.site"],["https://bot.webpushr.com","https://bot-push.17lai.site"],["https://analytics.webpushr.com","https://analytics-push.17lai.site"],["https://notevents.webpushr.com","https://notevents-push.17lai.site"]]);function isProxyRequired(e){const t=new URL(e);for(const[s,n]of proxyMap.entries()){const r=new URL(s);if(t.origin===r.origin&&t.pathname.startsWith(r.pathname)){return n}}return null}function getMirrorRequired(e){const t=new URL(e);for(const[s,n]of proxyMap.entries()){const r=new URL(s);if(t.origin===r.origin&&t.pathname.startsWith(r.pathname)){const a=e.replace(s,n);return a}}return e}function refreshCacheList(e){return caches.open(e).then(s=>{return Promise.all(cacheList.map(t=>{return s.match(t).then(e=>{if(!e){console.log("[PWA] Resource not found in cache, fetching from network:",t);return fetch(t,{cache:"default"}).then(e=>{if(e.ok){console.log("[PWA] Caching resource:",t);s.put(t,e.clone());return e}else{throw new Error(`Failed to fetch ${t}`)}})}else{return e}})}))}).catch(e=>{console.error("[PWA] Failed to refresh cache list:",e)})}async function fetchData(e){try{return await fetch(e)}catch(e){throw e}}self.addEventListener("fetch",t=>{if(isProxyRequired(t.request.url)){t.respondWith(handleProxyRequest(t.request))}else{t.respondWith(caches.open(cacheStorageKey).then(e=>e.match(t.request,{ignoreSearch:true})).then(e=>{return e||fetchData(t.request)}))}});async function handleProxyRequest(t){try{const e=await caches.match(t,{ignoreSearch:true});if(e){return e}else{return fetchData(t).then(e=>{if(e.ok){return e}else{return fetchData(new Request(getMirrorRequired(t.url),t)).then(e=>{return e})}}).catch(e=>{return fetch(t)})}}catch(e){console.error("[PWA] Proxy request failed:",e);return fetch(t)}}