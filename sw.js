const cacheStorageKeyPrefix="17lai-cache-";const cacheStorageKey=`17lai-cache-20240831182729`;var cacheList=["https://nblog.17lai.site/css/matery.css?v=1.1.9","https://nblog.17lai.site/css/my.css?v=1.0.3","/css/highlight.css?v=1.0.0","/css/highlight-dark.css?v=1.0.0","https://nblog.17lai.site/libs/awesome/css/all.min.css?v=5.15.4","https://nblog.17lai.site/libs/jquery/jquery.min.js?v=3.7.1","https://nblog.17lai.site/libs/materialize/materialize.min.js?v=1.2.2","https://nblog.17lai.site/libs/materialize/materialize.min.css?v=1.2.2","https://nblog.17lai.site/libs/masonry/masonry.pkgd.min.js?v=4.2.2","https://nblog.17lai.site/libs/aos/aos.min.css","https://nblog.17lai.site/libs/aos/aos.min.js","https://nblog.17lai.site/libs/waline/waline-count.js","https://nblog.17lai.site/js/ana.js?v=1.0.5","https://nblog.17lai.site/js/color-schema.js?v=1.0.0","https://nblog.17lai.site/js/plugins.js?v=1.0.0","https://nblog.17lai.site/js/tw_cn.js?v=1.0.1","https://nblog.17lai.site/js/boot.js?v=1.0.0","https://nblog.17lai.site/js/utils.js?v=1.0.11","https://nblog.17lai.site/js/events.js?v=1.0.0"];self.addEventListener("install",e=>{e.waitUntil(caches.open(cacheStorageKey).then(e=>e.addAll(cacheList)).then(()=>self.skipWaiting()))});self.addEventListener("message",e=>{if(e.data&&e.data.action==="skipWaiting"){self.skipWaiting();console.log("[PWA] rec message skipWaiting")}});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>{return Promise.all(e.map(e=>{if(e.startsWith(cacheStorageKeyPrefix)){if(e!==cacheStorageKey){console.log("[PWA] Removing old cache:",e);return caches.delete(e)}}}))}).then(()=>{console.log("[PWA] Found caching resources",cacheStorageKey);return caches.open(cacheStorageKey).then(e=>{return e.addAll(cacheList)})}).then(()=>{console.log("[PWA] Activation complete");return self.clients.claim()}))});const customIdentifier="17laiIdentifier";self.addEventListener("message",e=>{if(e.data&&e.data.action==="checkIdentifier"){e.source.postMessage({identifier:customIdentifier})}});const proxyMap=new Map([["https://cdn.jsdelivr.net","https://fastly.jsdelivr.net"],["https://unpkg.com/@waline/emojis","https://fastly.jsdelivr.net/npm/@waline/emojis"],["https://fastly.jsdelivr.net/npm/@waline/emojis","https://unpkg.com/@waline/emojis"],["https://cdn.webpushr.com","https://cdn-push.17lai.site"],["https://bot.webpushr.com","https://bot-push.17lai.site"],["https://analytics.webpushr.com","https://analytics-push.17lai.site"],["https://notevents.webpushr.com","https://notevents-push.17lai.site"]]);function isProxyRequired(e){const t=new URL(e);for(const[s,i]of proxyMap.entries()){const n=new URL(s);if(t.origin===n.origin&&t.pathname.startsWith(n.pathname)){return i}}return null}function getMirrorRequired(e){const t=new URL(e);for(const[s,i]of proxyMap.entries()){const n=new URL(s);if(t.origin===n.origin&&t.pathname.startsWith(n.pathname)){const a=e.replace(s,i);return a}}return e}function refreshCacheList(e){return caches.open(e).then(s=>{return Promise.all(cacheList.map(t=>{return s.match(t).then(e=>{if(!e){console.log("[PWA] Resource not found in cache, fetching from network:",t);return fetch(t,{cache:"default"}).then(e=>{if(e.ok){console.log("[PWA] Caching resource:",t);s.put(t,e.clone());return e}else{throw new Error(`Failed to fetch ${t}`)}})}else{return e}})}))}).catch(e=>{console.error("[PWA] Failed to refresh cache list:",e)})}async function fetchData(e){try{return await fetch(e)}catch(e){throw e}}self.addEventListener("fetch",t=>{if(isProxyRequired(t.request.url)){t.respondWith(handleProxyRequest(t.request))}else{t.respondWith(caches.open(cacheStorageKey).then(e=>e.match(t.request,{ignoreSearch:true})).then(e=>{return e||fetchData(t.request)}))}});async function handleProxyRequest(t){try{const e=await caches.match(t,{ignoreSearch:true});if(e){return e}else{return fetchData(t).then(e=>{if(e.ok){return e}else{return fetchData(new Request(getMirrorRequired(t.url),t)).then(e=>{return e})}}).catch(e=>{return fetch(t)})}}catch(e){console.error("[PWA] Proxy request failed:",e);return fetch(t)}}