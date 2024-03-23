var __assign=function(){__assign=Object.assign||function e(t){for(var o,i=1,r=arguments.length;i<r;i++){o=arguments[i];for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a))t[a]=o[a]}return t};return __assign.apply(this,arguments)};var videoSettings={autoplayFirstVideo:true,youTubePlayerParams:false,vimeoPlayerParams:false,wistiaPlayerParams:false,gotoNextSlideOnVideoEnd:true,autoplayVideoOnSlide:false,videojs:false,videojsTheme:"",videojsOptions:{}};var lGEvents={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"};var param=function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")};var paramsToObject=function(e){var t=e.slice(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var o=t.map(decodeURIComponent),i=o[0],r=o[1];e[i]=r;return e},{});return t};var getYouTubeParams=function(e,t){if(!e.youtube)return"";var o=e.youtube[2]?paramsToObject(e.youtube[2]):"";var i={wmode:"opaque",autoplay:0,mute:1,enablejsapi:1};var r=t||{};var a=__assign(__assign(__assign({},i),r),o);var s="?"+param(a);return s};var isYouTubeNoCookie=function(e){return e.includes("youtube-nocookie.com")};var getVimeoURLParams=function(e,t){if(!t||!t.vimeo)return"";var o=t.vimeo[2]||"";var i=e&&Object.keys(e).length!==0?"&"+param(e):"";var r=t.vimeo[0].split("/").pop()||"";var a=r.split("?")[0]||"";var s=a.split("#")[0];var l=t.vimeo[1]!==s;if(l){o=o.replace("/"+s,"")}o=o[0]=="?"?"&"+o.slice(1):o||"";var n="?autoplay=0&muted=1"+(l?"&h="+s:"")+i+o;return n};var Video=function(){function e(e){this.core=e;this.settings=__assign(__assign({},videoSettings),this.core.settings);return this}e.prototype.init=function(){var t=this;this.core.LGel.on(lGEvents.hasVideo+".video",this.onHasVideo.bind(this));this.core.LGel.on(lGEvents.posterClick+".video",function(){var e=t.core.getSlideItem(t.core.index);t.loadVideoOnPosterClick(e)});this.core.LGel.on(lGEvents.slideItemLoad+".video",this.onSlideItemLoad.bind(this));this.core.LGel.on(lGEvents.beforeSlide+".video",this.onBeforeSlide.bind(this));this.core.LGel.on(lGEvents.afterSlide+".video",this.onAfterSlide.bind(this))};e.prototype.onSlideItemLoad=function(e){var t=this;var o=e.detail,i=o.isFirstSlide,r=o.index;if(this.settings.autoplayFirstVideo&&i&&r===this.core.index){setTimeout(function(){t.loadAndPlayVideo(r)},200)}if(!i&&this.settings.autoplayVideoOnSlide&&r===this.core.index){this.loadAndPlayVideo(r)}};e.prototype.onHasVideo=function(e){var t=e.detail,o=t.index,i=t.src,r=t.html5Video,a=t.hasPoster;if(!a){this.appendVideos(this.core.getSlideItem(o),{src:i,addClass:"lg-object",index:o,html5Video:r});this.gotoNextSlideOnVideoEnd(i,o)}};e.prototype.onBeforeSlide=function(e){if(this.core.lGalleryOn){var t=e.detail.prevIndex;this.pauseVideo(t)}};e.prototype.onAfterSlide=function(e){var t=this;var o=e.detail,i=o.index,r=o.prevIndex;var a=this.core.getSlideItem(i);if(this.settings.autoplayVideoOnSlide&&i!==r){if(a.hasClass("lg-complete")){setTimeout(function(){t.loadAndPlayVideo(i)},100)}}};e.prototype.loadAndPlayVideo=function(e){var t=this.core.getSlideItem(e);var o=this.core.galleryItems[e];if(o.poster){this.loadVideoOnPosterClick(t,true)}else{this.playVideo(e)}};e.prototype.playVideo=function(e){this.controlVideo(e,"play")};e.prototype.pauseVideo=function(e){this.controlVideo(e,"pause")};e.prototype.getVideoHtml=function(e,t,o,i){var r="";var a=this.core.galleryItems[o].__slideVideoInfo||{};var s=this.core.galleryItems[o];var l=s.title||s.alt;l=l?'title="'+l+'"':"";var n='allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';if(a.youtube){var d="lg-youtube"+o;var c=getYouTubeParams(a,this.settings.youTubePlayerParams);var u=isYouTubeNoCookie(e);var f=u?"//www.youtube-nocookie.com/":"//www.youtube.com/";r='<iframe allow="autoplay" id='+d+' class="lg-video-object lg-youtube '+t+'" '+l+' src="'+f+"embed/"+(a.youtube[1]+c)+'" '+n+"></iframe>"}else if(a.vimeo){var d="lg-vimeo"+o;var v=getVimeoURLParams(this.settings.vimeoPlayerParams,a);r='<iframe allow="autoplay" id='+d+' class="lg-video-object lg-vimeo '+t+'" '+l+' src="//player.vimeo.com/video/'+(a.vimeo[1]+v)+'" '+n+"></iframe>"}else if(a.wistia){var g="lg-wistia"+o;var v=param(this.settings.wistiaPlayerParams);v=v?"?"+v:"";r='<iframe allow="autoplay" id="'+g+'" src="//fast.wistia.net/embed/iframe/'+(a.wistia[4]+v)+'" '+l+' class="wistia_embed lg-video-object lg-wistia '+t+'" name="wistia_embed" '+n+"></iframe>"}else if(a.html5){var p="";for(var h=0;h<i.source.length;h++){p+='<source src="'+i.source[h].src+'" type="'+i.source[h].type+'">'}if(i.tracks){var m=function(e){var t="";var o=i.tracks[e];Object.keys(o||{}).forEach(function(e){t+=e+'="'+o[e]+'" '});p+="<track "+t+">"};for(var h=0;h<i.tracks.length;h++){m(h)}}var y="";var b=i.attributes||{};Object.keys(b||{}).forEach(function(e){y+=e+'="'+b[e]+'" '});r='<video class="lg-video-object lg-html5 '+(this.settings.videojs&&this.settings.videojsTheme?this.settings.videojsTheme+" ":"")+" "+(this.settings.videojs?" video-js":"")+'" '+y+">\n                "+p+"\n                Your browser does not support HTML5 video.\n            </video>"}return r};e.prototype.appendVideos=function(e,t){var o;var i=this.getVideoHtml(t.src,t.addClass,t.index,t.html5Video);e.find(".lg-video-cont").append(i);var r=e.find(".lg-video-object").first();if(t.html5Video){r.on("mousedown.lg.video",function(e){e.stopPropagation()})}if(this.settings.videojs&&((o=this.core.galleryItems[t.index].__slideVideoInfo)===null||o===void 0?void 0:o.html5)){try{return videojs(r.get(),this.settings.videojsOptions)}catch(e){console.error("lightGallery:- Make sure you have included videojs")}}};e.prototype.gotoNextSlideOnVideoEnd=function(e,t){var o=this;var i=this.core.getSlideItem(t).find(".lg-video-object").first();var r=this.core.galleryItems[t].__slideVideoInfo||{};if(this.settings.gotoNextSlideOnVideoEnd){if(r.html5){i.on("ended",function(){o.core.goToNextSlide()})}else if(r.vimeo){try{new Vimeo.Player(i.get()).on("ended",function(){o.core.goToNextSlide()})}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}}else if(r.wistia){try{window._wq=window._wq||[];window._wq.push({id:i.attr("id"),onReady:function(e){e.bind("end",function(){o.core.goToNextSlide()})}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}}}};e.prototype.controlVideo=function(e,t){var o=this.core.getSlideItem(e).find(".lg-video-object").first();var i=this.core.galleryItems[e].__slideVideoInfo||{};if(!o.get())return;if(i.youtube){try{o.get().contentWindow.postMessage('{"event":"command","func":"'+t+'Video","args":""}',"*")}catch(e){console.error("lightGallery:- "+e)}}else if(i.vimeo){try{new Vimeo.Player(o.get())[t]()}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}}else if(i.html5){if(this.settings.videojs){try{videojs(o.get())[t]()}catch(e){console.error("lightGallery:- Make sure you have included videojs")}}else{o.get()[t]()}}else if(i.wistia){try{window._wq=window._wq||[];window._wq.push({id:o.attr("id"),onReady:function(e){e[t]()}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}}};e.prototype.loadVideoOnPosterClick=function(e,t){var o=this;if(!e.hasClass("lg-video-loaded")){if(!e.hasClass("lg-has-video")){e.addClass("lg-has-video");var i=void 0;var r=this.core.galleryItems[this.core.index].src;var a=this.core.galleryItems[this.core.index].video;if(a){i=typeof a==="string"?JSON.parse(a):a}var s=this.appendVideos(e,{src:r,addClass:"",index:this.core.index,html5Video:i});this.gotoNextSlideOnVideoEnd(r,this.core.index);var l=e.find(".lg-object").first().get();e.find(".lg-video-cont").first().append(l);e.addClass("lg-video-loading");s&&s.ready(function(){s.on("loadedmetadata",function(){o.onVideoLoadAfterPosterClick(e,o.core.index)})});e.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg",function(){setTimeout(function(){o.onVideoLoadAfterPosterClick(e,o.core.index)},50)})}else{this.playVideo(this.core.index)}}else if(t){this.playVideo(this.core.index)}};e.prototype.onVideoLoadAfterPosterClick=function(e,t){e.addClass("lg-video-loaded");this.playVideo(t)};e.prototype.destroy=function(){this.core.LGel.off(".lg.video");this.core.LGel.off(".video")};return e}();export default Video;