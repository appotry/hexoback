$((function(){!function(){let t="animated pulse";$("article .article").hover((function(){$(this).addClass(t)}),(function(){$(this).removeClass(t)}))}(),$(".sidenav").sidenav();let t=function(t,e){let n=$("#"+t);if(0===n.length)return;let i=n.width();i+=i>=450?21:i>=350&&i<450?18:i>=300&&i<350?16:14,$("#"+e).width(i)},e=function(){t("navContainer"),t("artDetail","prenext-posts"),$(".content").css("min-height",window.innerHeight-165)};e(),$(window).resize((function(){e()})),$("#articles").masonry({itemSelector:".article"}),AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});!function(){$("#articleContent a").attr("target","_blank"),$("#articleContent img").each((function(){let t=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+t+'" data-sub-html=".caption"></div>'),$(this).css("max-width","99%"),$(this).addClass("img-shadow img-margin");let e=$(this).attr("alt"),n=$(this).attr("title"),i="";if(void 0===e||""===e?void 0!==n&&""!==n&&(i=n):i=e,""!==i){let t=document.createElement("div");t.className="caption";let e=document.createElement("b");e.className="center-caption",e.innerText=i,t.appendChild(e),this.insertAdjacentElement("afterend",t)}})),$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:!0}),$(document).find("img[data-original]").each((function(){$(this).parent().attr("href",$(this).attr("data-original"))}));const t=window.document.querySelector(".progress-bar");t&&new ScrollProgress(((e,n)=>{t.style.width=100*n+"%"}))}(),$(".modal").modal(),$("#backTop").click((function(){return $("body,html").animate({scrollTop:0},400),!1}));let n,i=$("#headNav"),a=$(".top-scroll");function s(t){t<100?(i.addClass("nav-transparent"),a.slideUp(300)):(i.removeClass("nav-transparent"),a.slideDown(300))}s($(window).scrollTop()),$(window).scroll((function(){s($(window).scrollTop())})),$(".nav-menu>li").hover((function(){$(this).children("ul").stop(!0,!0).show(),$(this).addClass("nav-show").siblings("li").removeClass("nav-show")}),(function(){$(this).children("ul").stop(!0,!0).hide(),$(".nav-item.nav-show").removeClass("nav-show")})),$(".m-nav-item>a").on("click",(function(){"none"==$(this).next("ul").css("display")?($(".m-nav-item").children("ul").slideUp(300),$(this).next("ul").slideDown(100),$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")):($(this).next("ul").slideUp(100),$(".m-nav-item.m-nav-show").removeClass("m-nav-show"))})),$(".tooltipped").tooltip(),setTimeout((function(){if(((new Date).getHours()>=19||(new Date).getHours()<7)&&!$("head").hasClass("DarkMode")){let t='<span style="color:#97b8b2;border-radius: 10px;><i class="fa fa-bellaria-hidden="true"></i>晚上使用深色模式阅读更好哦。(ﾟ▽ﾟ)</span>';M.toast({html:t})}}),2200),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(){console.log("Service Worker Registered")}));let o=themeStorage.getItem("title");window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),n=t,function(){let t="<span>使<b>"+o+'</b>可以离线访问？</span><button class="btn-flat toast-action" onclick="addToHomeScreen()">Yes</button>';M.toast({html:t})}()}))}));