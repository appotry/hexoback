$(function(){let e=function(){let e="animated pulse";$("article .article").hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)});$("#recommend-sections .post-card").hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)})};e();let t=function(){jQuery("main.content").css("min-height",window.innerHeight-165)};let n=function(){fixPostCardWidth("navContainer");fixPostCardWidth("artDetail","prenext-posts");t()};n();jQuery(window).resize(function(){n();AOS.refresh();jQuery("#articles").masonry("reloadItems");progressBarInit()});jQuery("#articles").masonry({itemSelector:".article"});AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});$("#read_mode i, #read_mode span, .code-area .code-show-expand").on("click",function(e){if(e.target!==this)return;var t=$(this).hasClass("code-show-expand");var n=$(this).parent().parent().parent().parent();n.toggleClass("card-block-fullscreen");$("html").toggleClass("card-block-fullscreen-html-scroll");if(t){if(n.hasClass("code-block-fullscreen")){n.removeClass("code-block-fullscreen");$("html").removeClass("code-block-fullscreen-html-scroll")}else{n.addClass("code-block-fullscreen");$("html").addClass("code-block-fullscreen-html-scroll")}}var r=$(this).is("i")?$(this):$(this).prev("i");if(r.hasClass("fa-expand-arrows-alt")){r.removeClass("fa-expand-arrows-alt").addClass("fa-compress-arrows-alt")}else{r.removeClass("fa-compress-arrows-alt").addClass("fa-expand-arrows-alt")}});let r=function(){$("#articleContent a[href^='http']").attr("target","_blank");$("#articleContent img").each(function(){let e=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+e+'" data-sub-html=".caption"></div>');$(this).css("max-width","99%");$(this).addClass("img-shadow img-margin");let t=$(this).attr("alt");let n=$(this).attr("title");let r="";if(t===undefined||t===""){if(n!==undefined&&n!==""){r=n}}else{r=t}if(r!==""){let e=document.createElement("div");e.className="caption";let t=document.createElement("b");t.className="center-caption";t.innerText=r;e.appendChild(t);this.insertAdjacentElement("afterend",e)}});$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:true});$(document).find("img[data-original]").each(function(){$(this).parent().attr("href",$(this).attr("data-original"))})};r();progressBarInit();Matery.events.registerRefreshCallback(function(){n();AOS.refresh();M.AutoInit();jQuery("#articles").masonry("reloadItems");progressBarInit()});$(".modal").modal();jQuery("#headNav .sidenav").sidenav();let o=$("#headNav");let i=$(".top-scroll");var a=0;s($(window).scrollTop());$(window).scroll(function(){let e=$(window).scrollTop();s(e);if($("#artDetail").length>0){if(a-e<=0){if(e>100){o.removeClass("nav-transparent");o.addClass("nav-transparent-none")}}else{o.removeClass("nav-transparent-none")}a=e}});function s(e){let t=100;if(e<t){o.addClass("nav-transparent");i.slideUp(300)}else{o.removeClass("nav-transparent");i.slideDown(300)}}$(".nav-menu>li").hover(function(){$(this).children("ul").stop(true,true).show();$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(true,true).hide();$(".nav-item.nav-show").removeClass("nav-show")});$(".m-nav-item>a").on("click",function(){if($(this).next("ul").css("display")=="none"){$(".m-nav-item").children("ul").slideUp(300);$(this).next("ul").slideDown(100);$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")}else{$(this).next("ul").slideUp(100);$(".m-nav-item.m-nav-show").removeClass("m-nav-show")}});jQuery(".tooltipped").tooltip();const c="/sw.js";const l="/";const d=/cacheStorageKey\s*=\s*['"]?([^'";]+)['"]?/;if("serviceWorker"in navigator){const w=localStorage.getItem("cacheStorageKey");if(!w){navigator.serviceWorker.register(c,{scope:l}).then(async r=>{fetch(c).then(e=>{if(!e.ok){throw new Error("Network response was not ok")}return e.text()}).then(e=>{const t=e.match(d);if(t&&t[1]){const n=t[1];f();h(n);localStorage.setItem("cacheStorageKey",n);console.log("[PWA] Service Worker registered with scope:",r.scope)}else{console.error("[PWA] Cache Storage Key not found in sw.js")}}).catch(e=>{console.error("[PWA] Failed to fetch sw.js:",e)})}).catch(e=>{console.error("[PWA] Service Worker registration failed:",e)})}else{fetch(c).then(e=>{if(!e.ok){throw new Error("Failed to fetch sw.js")}return e.text()}).then(e=>{const t=e.match(d);if(t&&t[1]){const n=t[1];console.log("[PWA] Latest cacheStorageKey:",n);console.log("[PWA] Stored cacheStorageKey:",w);if(n!==w){console.log("[PWA] unregister then register ServiceWorker");f();h(n);localStorage.setItem("cacheStorageKey",n)}else{console.log("[PWA] Service Worker is already up to date.")}}else{console.error("[PWA] Unable to extract cacheStorageKey from sw.js")}}).catch(e=>{console.error("[PWA] Failed to fetch sw.js:",e)})}}else{console.log("[PWA] Service Worker is not supported in this browser.")}function u(){navigator.serviceWorker.getRegistrations().then(e=>{e.forEach(t=>{const n="17laiIdentifier";t.postMessage({action:"checkIdentifier"});t.addEventListener("message",e=>{if(e.data&&e.data.identifier===n){t.unregister().then(e=>{if(e){console.log("[PWA] Unregistered Service Worker with scope:",t.scope);h(latestCacheStorageKey)}else{console.log("[PWA]Failed to unregister Service Worker with scope:",t.scope)}}).catch(e=>{console.error("[PWA] An error occurred while unregistering Service Worker:",e);h(latestCacheStorageKey)})}})})}).catch(e=>{console.error("Failed to get Service Worker registrations:",e);h(latestCacheStorageKey)})}function f(){navigator.serviceWorker.getRegistrations().then(e=>{let r=false;e.forEach(t=>{const n="17laiIdentifier";t.active.postMessage({action:"checkIdentifier",identifier:n});t.active.addEventListener("message",e=>{if(e.data&&e.data.identifier===n){r=true;t.unregister().then(e=>{if(e){console.log("[PWA]Service Worker unregistered with scope:",t.scope)}else{console.log("[PWA]Failed to unregister Service Worker with scope:",t.scope)}}).catch(e=>{console.error("[PWA]Error while unregistering Service Worker:",e)})}})});if(!r){console.log("No registered Service Worker with the specified identifier found.")}}).catch(e=>{console.error("Failed to get Service Worker registrations:",e)})}function h(e){navigator.serviceWorker.register(c,{scope:l}).then(t=>{console.log("[PWA] Service Worker registered with scope:",t.scope);t.addEventListener("updatefound",()=>{const e=t.installing;e.addEventListener("statechange",()=>{if(e.state==="installed"){console.log("[PWA] New Service Worker installed, activating...");e.postMessage({action:"skipWaiting"})}})})}).catch(e=>{console.error("[PWA] Service Worker registration failed:",e)})}let m;let g=themeStorage.getItem("title");window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();m=e;v()});function v(){let e="<span>使<b>"+g+'</b>可以离线访问？</span><button class="btn-flat toast-action" onclick="addToHomeScreen()">Yes</button>';M.toast({html:e})}function p(){m.prompt();m.userChoice.then(function(e){if(e.outcome==="accepted"){console.log("User accepted the A2HS prompt")}else{console.log("User dismissed the A2HS prompt")}m=null})}});function windowResizeEvent(){window.onresize=function(){var e=this;if(e.resizeFlag){clearTimeout(e.resizeFlag)}e.resizeFlag=setTimeout(function(){AOS.refresh();e.resizeFlag=null},100)}}function progressBarInit(){const n=window.document.querySelector(".progress-bar");if(n){new ScrollProgress((e,t)=>{n.style.width=t*100+"%"})}}function scrollToElement(e,t){var n=jQuery(e).offset();if(n){jQuery("html,body").animate({scrollTop:n.top+(t||0),easing:"swing"})}}function registerScrollDownArrowEvent(){var e=jQuery(".cover.scroll-down-bar");if(e.length===0){return false}e.on("click",function(){scrollToElement("main.content",-jQuery("#headNav").height()+30)})}function registerScrollBackCommentEvent(){var e=jQuery("#to_comment");if(e.length===0){return false}e.on("click",function(){scrollToElement("#comments",-jQuery("#headNav").height()+30)})}function postOutdate(){var e=document.getElementsByTagName("time");if(e.length===0){return}var t=document.getElementsByClassName("article-card-content");if(t.length===0){return}var n=new Date(e[0].dateTime);var r=new Date(e[1].dateTime);var o=Date.now();var i=parseInt(o-n);var a=parseInt(o-r);var s=CONFIG.outdate.warning_day;if(a>3600*24*s*1e3){var c=parseInt(i/864e5);var l=parseInt(a/864e5);articleContent.innerHTML='<div class="admonition warning"><p class="admonition-title">文章时效性提示</p><p>这是一篇发布于 '+c+" 天前，最近更新于 "+l+" 天前的文章，部分信息可能已发生改变，请注意甄别！"+"</p></div>"+articleContent.innerHTML}}function setLS(e,t){try{localStorage.setItem(e,t)}catch(e){}}function removeLS(e){try{localStorage.removeItem(e)}catch(e){}}function getLS(e){try{return localStorage.getItem(e)}catch(e){return null}}function registerColorToggleCallback(e,t,n){var r="#color-toggle-btn";var o=document.querySelector(r);o.addEventListener("click",function(){e.dispose();e=echarts.init(document.getElementById(t),getLS(colorSchemaInitStorageKey));e.setOption(n)})}function fixPostCardWidth(e,t){let n=$("#"+e);if(n.length===0){return}let r=n.width();if(r>=450){r=r+21}else if(r>=350&&r<450){r=r+18}else if(r>=300&&r<350){r=r+16}else{r=r+14}$("#"+t).width(r)}function inPageScroll(){var e=function(e,t,n){for(var r=0;r<e.length;r++){t.call(n,r,e[r])}};var t=document.querySelectorAll("#articleContent a[href^='#']");if(window.scrollTo){e(t,function(e,t){var n=document.getElementById(t.getAttribute("href").substring(1));t.addEventListener("click",function(e){e.preventDefault();window.scrollTo(0,n.offsetTop)})})}}function handleVideoWithCondition(e,t){if($(window).width()>e&&Number(t)>2){var n=localStorage.getItem("video_url_cache");var r=CONFIG.fun_features.videobg.url;if(n){handleVideoData(JSON.parse(n))}else{$.getJSON(r,function(e){handleVideoData(e);localStorage.setItem("video_url_cache",JSON.stringify(e))})}}}function setAjaxBackgroundImage(t,n){$.ajax({url:t,method:"GET",cache:true,success:function(){var e=$("<img>");e.attr("src",t);e.css({"background-image":"url("+t+")","background-repeat":"no-repeat","background-size":"cover","background-attachment":"fixed",position:"fixed",height:"100%","z-index":"-999"});adjustVideoSize(e);jQuery(window).resize(function(){adjustVideoSize(e)});n.prepend(e)}})}function setBackgroundImage(e,t){var n=$("<img>");n.on("load",function(){n.css({"background-image":"url("+e+")","background-repeat":"no-repeat","background-size":"cover","background-attachment":"fixed",position:"fixed",height:"100%","z-index":"-999"});adjustVideoSize(n);jQuery(window).resize(function(){adjustVideoSize(n)});t.prepend(n)});n.attr("src",e)}function adjustVideoSize(e){var t=document.documentElement.clientHeight;var n=document.documentElement.clientWidth;if(t/n<.56){e.css({width:"100%",height:"auto"})}else{e.css({width:"auto",height:"100%"})}}function insertAjaxVideo(t,n){$.ajax({url:t,method:"GET",cache:true,success:function(){var e=document.createElement("video");e.src=t;e.autoplay=true;e.loop=true;e.muted=true;e.style.position="fixed";e.style.zIndex="-888";adjustVideoSize($(e));jQuery(window).resize(function(){adjustVideoSize($(e))});n.prepend(e)}})}function insertVideo(e,t){var n=document.createElement("video");n.src=e;n.autoplay=true;n.loop=true;n.muted=true;n.style.position="fixed";n.style.zIndex="-888";adjustVideoSize($(n));jQuery(window).resize(function(){adjustVideoSize($(n))});t.prepend(n)}function handleVideoData(e){if(true){var t=e.length;var n=Math.random();index=Math.floor(n*t);videoUrl=e[index][0];imageUrl=e[index][1];var r=$("body");setBackgroundImage(imageUrl,r);var o=navigator.userAgent;var i=null;if(o){var a=o.match(/(iPad).*OS\s([\d_]+)/);var s=!a&&o.match(/(iPhone\sOS)\s([\d_]+)/);var c=o.match(/(Android)\s+([\d.]+)/);var i=s||c}else{console.log("无法确定用户代理，执行默认操作")}if(i===null){var r=$("body");insertVideo(videoUrl,r)}}}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;Matery.utils={listenScroll:function(e){var t=new Debouncer(e);window.addEventListener("scroll",t,false);t.handleEvent();return t},unlistenScroll:function(e){window.removeEventListener("scroll",e)},listenDOMLoaded(e){if(document.readyState!=="loading"){e()}else{document.addEventListener("DOMContentLoaded",function(){e()})}},scrollToElement:function(e,t){var n=jQuery(e).offset();if(n){jQuery("html,body").animate({scrollTop:n.top+(t||0),easing:"swing"})}},elementVisible:function(e,t){t=t&&t>=0?t:0;var n=e.getBoundingClientRect();const r=window.innerHeight||document.documentElement.clientHeight;return n.top>=0&&n.top<=r*(1+t)+n.height/2||n.bottom>=0&&n.bottom<=r*(1+t)+n.height/2},waitElementVisible:function(e,r,o){var t=typeof window!=="undefined";var n=t&&!("onscroll"in window)||typeof navigator!=="undefined"&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);if(!t||n){return}o=o&&o>=0?o:0;function i(n){Matery.utils.listenDOMLoaded(function(){if(Matery.utils.elementVisible(n,o)){r();return}if("IntersectionObserver"in window){var e=new IntersectionObserver(function(e,t){if(e[0].isIntersecting){r();t.disconnect()}},{threshold:[0],rootMargin:(window.innerHeight||document.documentElement.clientHeight)*o+"px"});e.observe(n)}else{var t=Matery.utils.listenScroll(function(){if(Matery.utils.elementVisible(n,o)){Matery.utils.unlistenScroll(t);r()}})}})}if(typeof e==="string"){this.waitElementLoaded(e,function(e){i(e)})}else{i(e)}},waitElementLoaded:function(r,o){var e=typeof window!=="undefined";var t=e&&!("onscroll"in window)||typeof navigator!=="undefined"&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);if(!e||t){return}if("MutationObserver"in window){var n=new MutationObserver(function(e,t){var n=document.querySelector(r);if(n){o(n);t.disconnect()}});n.observe(document,{childList:true,subtree:true})}else{Matery.utils.listenDOMLoaded(function(){var t=function(){var e=document.querySelector(r);if(e){o(e)}else{setTimeout(t,100)}};t()})}},createScript:function(e,t){var n=document.createElement("script");n.setAttribute("src",e);n.setAttribute("type","text/javascript");n.setAttribute("charset","UTF-8");n.async=false;if(typeof t==="function"){if(window.attachEvent){n.onreadystatechange=function(){var e=n.readyState;if(e==="loaded"||e==="complete"){n.onreadystatechange=null;t()}}}else{n.onload=t}}var r=document.getElementsByTagName("script");var o=r.length>0?r[r.length-1]:document.head||document.documentElement;o.parentNode.insertBefore(n,o.nextSibling)},createAsyncScript:function(e,t,n){var r=document.createElement("script");r.setAttribute("src",e);r.setAttribute("type","text/javascript");r.setAttribute("charset","UTF-8");r.async=t;if(typeof n==="function"){if(window.attachEvent){r.onreadystatechange=function(){var e=r.readyState;if(e==="loaded"||e==="complete"){r.onreadystatechange=null;n()}}}else{r.onload=n}}var o=document.getElementsByTagName("script");var i=o.length>0?o[o.length-1]:document.head||document.documentElement;i.parentNode.insertBefore(r,i.nextSibling)},createCssLink:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("type","text/css");t.setAttribute("href",e);var n=document.getElementsByTagName("link")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement;n.parentNode.insertBefore(t,n)},loadComments:function(e,t){var n=document.querySelector("#comments[lazyload]");if(n){var r=function(){t();n.removeAttribute("lazyload")};Matery.utils.waitElementVisible(e,r,CONFIG.lazyload.offset_factor)}else{t()}},getBackgroundLightness(e){var t=e;if(typeof e==="string"){t=document.querySelector(e)}var n=t.ownerDocument.defaultView;if(!n){n=window}var r=n.getComputedStyle(t).backgroundColor.replace(/rgba*\(/,"").replace(")","").split(/,\s*/);if(r.length<3){return 0}var o=.213*r[0]+.715*r[1]+.072*r[2];return o===0||o>255/2?1:-1},retry(e,t,n){if(n<=0){return}var r=function(){if(--n>=0&&!e()){setTimeout(r,t)}};setTimeout(r,t)}};function Debouncer(e){this.callback=e;this.ticking=false}Debouncer.prototype={constructor:Debouncer,update:function(){this.callback&&this.callback();this.ticking=false},requestTick:function(){if(!this.ticking){requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this)));this.ticking=true}},handleEvent:function(){this.requestTick()}};