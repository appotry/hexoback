$(function(){let e=function(){let e="animated pulse";$("article .article").hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)});$("#recommend-sections .post-card").hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)})};e();let t=function(){jQuery("main.content").css("min-height",window.innerHeight-165)};let n=function(){fixPostCardWidth("navContainer");fixPostCardWidth("artDetail","prenext-posts");t()};n();jQuery(window).resize(function(){n();AOS.refresh();jQuery("#articles").masonry("reloadItems");progressBarInit()});jQuery("#articles").masonry({itemSelector:".article"});AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});$("#read_mode i, #read_mode span, .code-area .code-show-expand").on("click",function(e){if(e.target!==this)return;var t=$(this).hasClass("code-show-expand");var n=$(this).parent().parent().parent().parent();n.toggleClass("card-block-fullscreen");$("html").toggleClass("card-block-fullscreen-html-scroll");if(t){if(n.hasClass("code-block-fullscreen")){n.removeClass("code-block-fullscreen");$("html").removeClass("code-block-fullscreen-html-scroll")}else{n.addClass("code-block-fullscreen");$("html").addClass("code-block-fullscreen-html-scroll")}}var i=$(this).is("i")?$(this):$(this).prev("i");if(i.hasClass("fa-expand-arrows-alt")){i.removeClass("fa-expand-arrows-alt").addClass("fa-compress-arrows-alt")}else{i.removeClass("fa-compress-arrows-alt").addClass("fa-expand-arrows-alt")}});let i=function(){$("#articleContent a[href^='http']").attr("target","_blank");$("#articleContent img").each(function(){let e=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+e+'" data-sub-html=".caption"></div>');$(this).css("max-width","99%");$(this).addClass("img-shadow img-margin");let t=$(this).attr("alt");let n=$(this).attr("title");let i="";if(t===undefined||t===""){if(n!==undefined&&n!==""){i=n}}else{i=t}if(i!==""){let e=document.createElement("div");e.className="caption";let t=document.createElement("b");t.className="center-caption";t.innerText=i;e.appendChild(t);this.insertAdjacentElement("afterend",e)}});$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:true});$(document).find("img[data-original]").each(function(){$(this).parent().attr("href",$(this).attr("data-original"))})};i();progressBarInit();Matery.events.registerRefreshCallback(function(){n();AOS.refresh();jQuery("#articles").masonry("reloadItems");progressBarInit()});$(".modal").modal();jQuery("#headNav .sidenav").sidenav();let a=$("#headNav");let r=$(".top-scroll");var o=0;s($(window).scrollTop());$(window).scroll(function(){let e=$(window).scrollTop();s(e);if($("#artDetail").length>0){if(o-e<=0){if(e>100){a.removeClass("nav-transparent");a.addClass("nav-transparent-none")}}else{a.removeClass("nav-transparent-none")}o=e}});function s(e){let t=100;if(e<t){a.addClass("nav-transparent");r.slideUp(300)}else{a.removeClass("nav-transparent");r.slideDown(300)}}$(".nav-menu>li").hover(function(){$(this).children("ul").stop(true,true).show();$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(true,true).hide();$(".nav-item.nav-show").removeClass("nav-show")});$(".m-nav-item>a").on("click",function(){if($(this).next("ul").css("display")=="none"){$(".m-nav-item").children("ul").slideUp(300);$(this).next("ul").slideDown(100);$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")}else{$(this).next("ul").slideUp(100);$(".m-nav-item.m-nav-show").removeClass("m-nav-show")}});jQuery(".tooltipped").tooltip()});function windowResizeEvent(){window.onresize=function(){var e=this;if(e.resizeFlag){clearTimeout(e.resizeFlag)}e.resizeFlag=setTimeout(function(){AOS.refresh();e.resizeFlag=null},100)}}function progressBarInit(){const n=window.document.querySelector(".progress-bar");if(n){new ScrollProgress((e,t)=>{n.style.width=t*100+"%"})}}function scrollToElement(e,t){var n=jQuery(e).offset();if(n){jQuery("html,body").animate({scrollTop:n.top+(t||0),easing:"swing"})}}function registerScrollDownArrowEvent(){var e=jQuery(".cover.scroll-down-bar");if(e.length===0){return false}e.on("click",function(){scrollToElement("main.content",-jQuery("#headNav").height()+30)})}function registerScrollBackCommentEvent(){var e=jQuery("#to_comment");if(e.length===0){return false}e.on("click",function(){scrollToElement("#comments",-jQuery("#headNav").height()+30)})}function postOutdate(){var e=document.getElementsByTagName("time");if(e.length===0){return}var t=document.getElementsByClassName("article-card-content");if(t.length===0){return}var n=new Date(e[0].dateTime);var i=new Date(e[1].dateTime);var a=Date.now();var r=parseInt(a-n);var o=parseInt(a-i);var s=CONFIG.outdate.warning_day;if(o>3600*24*s*1e3){var l=parseInt(r/864e5);var c=parseInt(o/864e5);articleContent.innerHTML='<div class="admonition warning"><p class="admonition-title">文章时效性提示</p><p>这是一篇发布于 '+l+" 天前，最近更新于 "+c+" 天前的文章，部分信息可能已发生改变，请注意甄别！"+"</p></div>"+articleContent.innerHTML}}function setLS(e,t){try{localStorage.setItem(e,t)}catch(e){}}function removeLS(e){try{localStorage.removeItem(e)}catch(e){}}function getLS(e){try{return localStorage.getItem(e)}catch(e){return null}}function registerColorToggleCallback(e,t,n){var i="#color-toggle-btn";var a=document.querySelector(i);a.addEventListener("click",function(){e.dispose();e=echarts.init(document.getElementById(t),getLS(colorSchemaInitStorageKey));e.setOption(n)})}function fixPostCardWidth(e,t){let n=$("#"+e);if(n.length===0){return}let i=n.width();if(i>=450){i=i+21}else if(i>=350&&i<450){i=i+18}else if(i>=300&&i<350){i=i+16}else{i=i+14}$("#"+t).width(i)}function inPageScroll(){var e=function(e,t,n){for(var i=0;i<e.length;i++){t.call(n,i,e[i])}};var t=document.querySelectorAll("#articleContent a[href^='#']");if(window.scrollTo){e(t,function(e,t){var n=document.getElementById(t.getAttribute("href").substring(1));t.addEventListener("click",function(e){e.preventDefault();window.scrollTo(0,n.offsetTop)})})}}function handleVideoWithCondition(e,t){if($(window).width()>e&&Number(t)>3){var n=CONFIG.fun_features.videobg.url;$.getJSON(n,function(e){handleVideoData(e)})}}function setAjaxBackgroundImage(t,n){$.ajax({url:t,method:"GET",cache:true,success:function(){var e=$("<img>");e.attr("src",t);e.css({"background-image":"url("+t+")","background-repeat":"no-repeat","background-size":"cover","background-attachment":"fixed",position:"fixed",height:"100%","z-index":"-999"});adjustVideoSize(e);jQuery(window).resize(function(){adjustVideoSize(e)});n.prepend(e)}})}function setBackgroundImage(e,t){var n=$("<img>");n.on("load",function(){n.css({"background-image":"url("+e+")","background-repeat":"no-repeat","background-size":"cover","background-attachment":"fixed",position:"fixed",height:"100%","z-index":"-999"});adjustVideoSize(n);jQuery(window).resize(function(){adjustVideoSize(n)});t.prepend(n)});n.attr("src",e)}function adjustVideoSize(e){var t=document.documentElement.clientHeight;var n=document.documentElement.clientWidth;if(t/n<.56){e.css({width:"100%",height:"auto"})}else{e.css({width:"auto",height:"100%"})}}function insertAjaxVideo(t,n){$.ajax({url:t,method:"GET",cache:true,success:function(){var e=document.createElement("video");e.src=t;e.autoplay=true;e.loop=true;e.muted=true;e.style.position="fixed";e.style.zIndex="-888";adjustVideoSize($(e));jQuery(window).resize(function(){adjustVideoSize($(e))});n.prepend(e)}})}function insertVideo(e,t){var n=document.createElement("video");n.src=e;n.autoplay=true;n.loop=true;n.muted=true;n.style.position="fixed";n.style.zIndex="-888";n.addEventListener("loadedmetadata",function(){adjustVideoSize($(n));window.addEventListener("resize",function(){adjustVideoSize($(n))});t.prepend(n)})}function handleVideoData(e){if(true){var t=e.length;var n=Math.random();index=Math.floor(n*t);videoUrl=e[index][0];imageUrl=e[index][1];var i=$("body");setBackgroundImage(imageUrl,i);var a=navigator.userAgent;var r=null;if(a){var o=a.match(/(iPad).*OS\s([\d_]+)/);var s=!o&&a.match(/(iPhone\sOS)\s([\d_]+)/);var l=a.match(/(Android)\s+([\d.]+)/);var r=s||l}else{console.log("无法确定用户代理，执行默认操作")}if(r===null){var i=$("body");insertVideo(videoUrl,i)}}}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;Matery.utils={listenScroll:function(e){var t=new Debouncer(e);window.addEventListener("scroll",t,false);t.handleEvent();return t},unlistenScroll:function(e){window.removeEventListener("scroll",e)},listenDOMLoaded(e){if(document.readyState!=="loading"){e()}else{document.addEventListener("DOMContentLoaded",function(){e()})}},scrollToElement:function(e,t){var n=jQuery(e).offset();if(n){jQuery("html,body").animate({scrollTop:n.top+(t||0),easing:"swing"})}},elementVisible:function(e,t){t=t&&t>=0?t:0;var n=e.getBoundingClientRect();const i=window.innerHeight||document.documentElement.clientHeight;return n.top>=0&&n.top<=i*(1+t)+n.height/2||n.bottom>=0&&n.bottom<=i*(1+t)+n.height/2},waitElementVisible:function(e,i,a){var t=typeof window!=="undefined";var n=t&&!("onscroll"in window)||typeof navigator!=="undefined"&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);if(!t||n){return}a=a&&a>=0?a:0;function r(n){Matery.utils.listenDOMLoaded(function(){if(Matery.utils.elementVisible(n,a)){i();return}if("IntersectionObserver"in window){var e=new IntersectionObserver(function(e,t){if(e[0].isIntersecting){i();t.disconnect()}},{threshold:[0],rootMargin:(window.innerHeight||document.documentElement.clientHeight)*a+"px"});e.observe(n)}else{var t=Matery.utils.listenScroll(function(){if(Matery.utils.elementVisible(n,a)){Matery.utils.unlistenScroll(t);i()}})}})}if(typeof e==="string"){this.waitElementLoaded(e,function(e){r(e)})}else{r(e)}},waitElementLoaded:function(i,a){var e=typeof window!=="undefined";var t=e&&!("onscroll"in window)||typeof navigator!=="undefined"&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);if(!e||t){return}if("MutationObserver"in window){var n=new MutationObserver(function(e,t){var n=document.querySelector(i);if(n){a(n);t.disconnect()}});n.observe(document,{childList:true,subtree:true})}else{Matery.utils.listenDOMLoaded(function(){var t=function(){var e=document.querySelector(i);if(e){a(e)}else{setTimeout(t,100)}};t()})}},createScript:function(e,t){var n=document.createElement("script");n.setAttribute("src",e);n.setAttribute("type","text/javascript");n.setAttribute("charset","UTF-8");n.async=false;if(typeof t==="function"){if(window.attachEvent){n.onreadystatechange=function(){var e=n.readyState;if(e==="loaded"||e==="complete"){n.onreadystatechange=null;t()}}}else{n.onload=t}}var i=document.getElementsByTagName("script");var a=i.length>0?i[i.length-1]:document.head||document.documentElement;a.parentNode.insertBefore(n,a.nextSibling)},createAsyncScript:function(e,t,n){var i=document.createElement("script");i.setAttribute("src",e);i.setAttribute("type","text/javascript");i.setAttribute("charset","UTF-8");i.async=t;if(typeof n==="function"){if(window.attachEvent){i.onreadystatechange=function(){var e=i.readyState;if(e==="loaded"||e==="complete"){i.onreadystatechange=null;n()}}}else{i.onload=n}}var a=document.getElementsByTagName("script");var r=a.length>0?a[a.length-1]:document.head||document.documentElement;r.parentNode.insertBefore(i,r.nextSibling)},createCssLink:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("type","text/css");t.setAttribute("href",e);var n=document.getElementsByTagName("link")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement;n.parentNode.insertBefore(t,n)},loadComments:function(e,t){var n=document.querySelector("#comments[lazyload]");if(n){var i=function(){t();n.removeAttribute("lazyload")};Matery.utils.waitElementVisible(e,i,CONFIG.lazyload.offset_factor)}else{t()}},getBackgroundLightness(e){var t=e;if(typeof e==="string"){t=document.querySelector(e)}var n=t.ownerDocument.defaultView;if(!n){n=window}var i=n.getComputedStyle(t).backgroundColor.replace(/rgba*\(/,"").replace(")","").split(/,\s*/);if(i.length<3){return 0}var a=.213*i[0]+.715*i[1]+.072*i[2];return a===0||a>255/2?1:-1},retry(e,t,n){if(n<=0){return}var i=function(){if(--n>=0&&!e()){setTimeout(i,t)}};setTimeout(i,t)}};function Debouncer(e){this.callback=e;this.ticking=false}Debouncer.prototype={constructor:Debouncer,update:function(){this.callback&&this.callback();this.ticking=false},requestTick:function(){if(!this.ticking){requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this)));this.ticking=true}},handleEvent:function(){this.requestTick()}};