const safeGoFun={NzcheckLink:async t=>{const c=document.querySelectorAll(t);if(c){let r=new RegExp(/^[#].*/);for(let n=0;n<c.length;n++){const a=c[n];let t=a.getAttribute("href"),e=a.getAttribute("data-download"),o=a.getAttribute("rel");if(!r.test(t)&&o!=="prev"&&o!=="next"&&o!=="category"&&o!=="tag"&&t!=="javascript:void(0);"){if(!await safeGoFun.NzcheckLocalSite(t)&&!e){a.setAttribute("href","/safe-go/go.html?goUrl="+encodeURIComponent(t))}else if(!await safeGoFun.NzcheckLocalSite(t)&&e==="goDown"){a.setAttribute("href","/safe-go/go.html?goUrl="+encodeURIComponent(t)+"&type=goDown")}}}}},NzcheckLocalSite:async o=>{try{const n=["localhost:7800","17lai.com","blog.17lai.site","blog.17lai.fun"];let e=false;for(let t=0;t<n.length;t++){const r=n[t];if(o.includes(r)){e=true;break}}return e}catch(t){return true}}};Object.keys(safeGoFun).forEach(t=>{window[t]=safeGoFun[t]});document.addEventListener("DOMContentLoaded",function(){window.NzcheckLink('.card-content a:not(.social-share-icon):not(.fancybox):not(.not-check-link):not([href^="/"]):not([href^="https://blog.17lai"]):not([href^="https://17lai"]):not([href$=".png"]):not([href$=".jpg"]):not([href$=".jpeg"]):not([href$=".gif"]):not([href$=".webp"]):not([href$=".PNG"]):not([href$=".JPG"]):not([href$=".JPEG"]):not([href$=".GIF"]):not([href$=".WEBP"]):not(:has(.img-item))')});