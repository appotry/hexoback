$(document).ready((function(){window.waline_settings=Array(),window.localStorage?(waline_settings.serverURL=walineStorage.getItem("serverURL"),waline_settings.pageview="true"===walineStorage.getItem("pageview"),waline_settings.comment="true"===walineStorage.getItem("comment")):(waline_settings.serverURL="https://waline.17lai.site",waline_settings.pageview=!0,waline_settings.comment=!0,console.log("[waline]使用内部默认值!"));var e=window.location.pathname.replace(/\/$/,"")+"/";if(waline_settings.pageview){!function(){const n=Waline.pageviewCount({serverURL:walineStorage.getItem("serverURL"),path:e});setTimeout((()=>n()),3e3),wa_csp="waline_container_site_pv",document.getElementById(wa_csp),wa_cpv="waline_container_page_pv";var t=document.getElementById(wa_cpv);t?1!=function(e){for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}(t.style)?(t.style.display="inline",console.log("[waline]update pageview count!")):console.log("[waline]ewacpv.style null!"):console.log("[waline]home page!")}()}}));