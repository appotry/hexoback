function windowResizeEvent(){window.onresize=function(){var e=this;e.resizeFlag&&clearTimeout(e.resizeFlag),e.resizeFlag=setTimeout(function(){AOS.refresh(),e.resizeFlag=null},100)}}function progressBarInit(){const n=window.document.querySelector(".progress-bar");n&&new ScrollProgress((e,t)=>{n.style.width=100*t+"%"})}function scrollToElement(e,t){e=jQuery(e).offset();e&&jQuery("html,body").animate({scrollTop:e.top+(t||0),easing:"swing"})}function registerScrollDownArrowEvent(){var e=jQuery(".cover.scroll-down-bar");if(0===e.length)return!1;e.on("click",function(){scrollToElement("main.content",30-jQuery("#headNav").height())})}function registerScrollBackCommentEvent(){var e=jQuery("#to_comment");if(0===e.length)return!1;e.on("click",function(){scrollToElement("#comments",30-jQuery("#headNav").height())})}function postTimeliness(){var e,t,n=document.getElementsByTagName("time");0!==n.length&&0!==document.getElementsByClassName("article-card-content").length&&(t=new Date(n[0].dateTime),n=new Date(n[1].dateTime),e=Date.now(),t=parseInt(e-t),31104e6<(e=parseInt(e-n))&&(n=parseInt(t/864e5),t=parseInt(e/864e5),articleContent.innerHTML='<div class="admonition warning"><p class="admonition-title">文章时效性提示</p><p>这是一篇发布于 '+n+" 天前，最近更新于 "+t+" 天前的文章，部分信息可能已发生改变，请注意甄别！</p></div>"+articleContent.innerHTML))}function setLS(e,t){try{localStorage.setItem(e,t)}catch(e){}}function removeLS(e){try{localStorage.removeItem(e)}catch(e){}}function getLS(e){try{return localStorage.getItem(e)}catch(e){return null}}function registerColorToggleCallback(e,t,n){document.querySelector("#color-toggle-btn").addEventListener("click",function(){e.dispose(),(e=echarts.init(document.getElementById(t),getLS(colorSchemaInitStorageKey))).setOption(n)})}function inPageScroll(){var e=document.querySelectorAll("#articleContent a[href^='#']");if(window.scrollTo)for(var t=e,n=function(e,t){var n=document.getElementById(t.getAttribute("href").substring(1));t.addEventListener("click",function(e){e.preventDefault(),window.scrollTo(0,n.offsetTop)})},i=void 0,o=0;o<t.length;o++)n.call(i,o,t[o])}$(function(){{let e="animated pulse";$("article .article").hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)}),$("#recommend-sections .post-card").hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)})}function e(t,n){if(0!==(t=$("#"+t)).length){let e=t.width();450<=e?e+=21:350<=e&&e<450?e+=18:300<=e&&e<350?e+=16:e+=14,$("#"+n).width(e)}}function t(){e("navContainer"),e("artDetail","prenext-posts"),jQuery(".content").css("min-height",window.innerHeight-165)}t(),jQuery(window).resize(function(){t(),AOS.refresh(),progressBarInit()}),Matery.events.registerRefreshCallback(function(){AOS.refresh(),progressBarInit()}),jQuery("#articles").masonry({itemSelector:".article"}),AOS.init({easing:"ease-in-out-sine",duration:700,delay:100}),$("#read_mode i").on("click",function(e){e.target===this&&($(this).parent().parent().parent().parent().toggleClass("card-block-fullscreen"),$("html").toggleClass("card-block-fullscreen-html-scroll"))}),$("#read_mode span").on("click",function(e){e.target===this&&($(this).parent().parent().parent().parent().toggleClass("card-block-fullscreen"),$("html").toggleClass("card-block-fullscreen-html-scroll"))});$("#articleContent a[href^='http']").attr("target","_blank"),$("#articleContent img").each(function(){var e=$(this).attr("src"),e=($(this).wrap('<div class="img-item" data-src="'+e+'" data-sub-html=".caption"></div>'),$(this).css("max-width","99%"),$(this).addClass("img-shadow img-margin"),$(this).attr("alt")),t=$(this).attr("title");let n="";void 0===e||""===e?void 0!==t&&""!==t&&(n=t):n=e,""!==n&&((t=document.createElement("div")).className="caption",(e=document.createElement("b")).className="center-caption",e.innerText=n,t.appendChild(e),this.insertAdjacentElement("afterend",t))}),$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:!0}),$(document).find("img[data-original]").each(function(){$(this).parent().attr("href",$(this).attr("data-original"))}),progressBarInit(),$(".modal").modal(),jQuery(".sidenav").sidenav();let n=$("#headNav"),i=$(".top-scroll");function o(e){e<100?(n.addClass("nav-transparent"),i.slideUp(300)):(n.removeClass("nav-transparent"),i.slideDown(300))}o($(window).scrollTop()),$(window).scroll(function(){o($(window).scrollTop())}),$(".nav-menu>li").hover(function(){$(this).children("ul").stop(!0,!0).show(),$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(!0,!0).hide(),$(".nav-item.nav-show").removeClass("nav-show")}),$(".m-nav-item>a").on("click",function(){("none"==$(this).next("ul").css("display")?($(".m-nav-item").children("ul").slideUp(300),$(this).next("ul").slideDown(100),$(this).parent("li").addClass("m-nav-show").siblings("li")):($(this).next("ul").slideUp(100),$(".m-nav-item.m-nav-show"))).removeClass("m-nav-show")}),jQuery(".tooltipped").tooltip(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(function(){console.log("Service Worker Registered")});let r,a=themeStorage.getItem("title");window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),r=e,e="<span>使<b>"+a+'</b>可以离线访问？</span><button class="btn-flat toast-action" onclick="addToHomeScreen()">Yes</button>',M.toast({html:e})})});