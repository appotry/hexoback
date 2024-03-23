var __assign=function(){__assign=Object.assign||function t(e){for(var i,s=1,n=arguments.length;s<n;s++){i=arguments[s];for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a))e[a]=i[a]}return e};return __assign.apply(this,arguments)};var thumbnailsSettings={thumbnail:true,animateThumb:true,currentPagerPosition:"middle",alignThumbnails:"middle",thumbWidth:100,thumbHeight:"80px",thumbMargin:5,appendThumbnailsTo:".lg-components",toggleThumb:false,enableThumbDrag:true,enableThumbSwipe:true,thumbnailSwipeThreshold:10,loadYouTubeThumbnail:true,youTubeThumbSize:1,thumbnailPluginStrings:{toggleThumbnails:"Toggle thumbnails"}};var lGEvents={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"};var Thumbnail=function(){function t(t,e){this.thumbOuterWidth=0;this.thumbTotalWidth=0;this.translateX=0;this.thumbClickable=false;this.core=t;this.$LG=e;return this}t.prototype.init=function(){this.settings=__assign(__assign({},thumbnailsSettings),this.core.settings);this.thumbOuterWidth=0;this.thumbTotalWidth=this.core.galleryItems.length*(this.settings.thumbWidth+this.settings.thumbMargin);this.translateX=0;this.setAnimateThumbStyles();if(!this.core.settings.allowMediaOverlap){this.settings.toggleThumb=false}if(this.settings.thumbnail){this.build();if(this.settings.animateThumb){if(this.settings.enableThumbDrag){this.enableThumbDrag()}if(this.settings.enableThumbSwipe){this.enableThumbSwipe()}this.thumbClickable=false}else{this.thumbClickable=true}this.toggleThumbBar();this.thumbKeyPress()}};t.prototype.build=function(){var i=this;this.setThumbMarkup();this.manageActiveClassOnSlideChange();this.$lgThumb.first().on("click.lg touchend.lg",function(t){var e=i.$LG(t.target);if(!e.hasAttribute("data-lg-item-id")){return}setTimeout(function(){if(i.thumbClickable&&!i.core.lgBusy){var t=parseInt(e.attr("data-lg-item-id"));i.core.slide(t,false,true,false)}},50)});this.core.LGel.on(lGEvents.beforeSlide+".thumb",function(t){var e=t.detail.index;i.animateThumb(e)});this.core.LGel.on(lGEvents.beforeOpen+".thumb",function(){i.thumbOuterWidth=i.core.outer.get().offsetWidth});this.core.LGel.on(lGEvents.updateSlides+".thumb",function(){i.rebuildThumbnails()});this.core.LGel.on(lGEvents.containerResize+".thumb",function(){if(!i.core.lgOpened)return;setTimeout(function(){i.thumbOuterWidth=i.core.outer.get().offsetWidth;i.animateThumb(i.core.index);i.thumbOuterWidth=i.core.outer.get().offsetWidth},50)})};t.prototype.setThumbMarkup=function(){var t="lg-thumb-outer ";if(this.settings.alignThumbnails){t+="lg-thumb-align-"+this.settings.alignThumbnails}var e='<div class="'+t+'">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';this.core.outer.addClass("lg-has-thumb");if(this.settings.appendThumbnailsTo===".lg-components"){this.core.$lgComponents.append(e)}else{this.core.outer.append(e)}this.$thumbOuter=this.core.outer.find(".lg-thumb-outer").first();this.$lgThumb=this.core.outer.find(".lg-thumb").first();if(this.settings.animateThumb){this.core.outer.find(".lg-thumb").css("transition-duration",this.core.settings.speed+"ms").css("width",this.thumbTotalWidth+"px").css("position","relative")}this.setThumbItemHtml(this.core.galleryItems)};t.prototype.enableThumbDrag=function(){var e=this;var i={cords:{startX:0,endX:0},isMoved:false,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0};var s=false;this.$thumbOuter.addClass("lg-grab");this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb",function(t){if(e.thumbTotalWidth>e.thumbOuterWidth){t.preventDefault();i.cords.startX=t.pageX;i.startTime=new Date;e.thumbClickable=false;s=true;e.core.outer.get().scrollLeft+=1;e.core.outer.get().scrollLeft-=1;e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing")}});this.$LG(window).on("mousemove.lg.thumb.global"+this.core.lgId,function(t){if(!e.core.lgOpened)return;if(s){i.cords.endX=t.pageX;i=e.onThumbTouchMove(i)}});this.$LG(window).on("mouseup.lg.thumb.global"+this.core.lgId,function(){if(!e.core.lgOpened)return;if(i.isMoved){i=e.onThumbTouchEnd(i)}else{e.thumbClickable=true}if(s){s=false;e.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")}})};t.prototype.enableThumbSwipe=function(){var e=this;var i={cords:{startX:0,endX:0},isMoved:false,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0};this.$lgThumb.on("touchstart.lg",function(t){if(e.thumbTotalWidth>e.thumbOuterWidth){t.preventDefault();i.cords.startX=t.targetTouches[0].pageX;e.thumbClickable=false;i.startTime=new Date}});this.$lgThumb.on("touchmove.lg",function(t){if(e.thumbTotalWidth>e.thumbOuterWidth){t.preventDefault();i.cords.endX=t.targetTouches[0].pageX;i=e.onThumbTouchMove(i)}});this.$lgThumb.on("touchend.lg",function(){if(i.isMoved){i=e.onThumbTouchEnd(i)}else{e.thumbClickable=true}})};t.prototype.rebuildThumbnails=function(){var t=this;this.$thumbOuter.addClass("lg-rebuilding-thumbnails");setTimeout(function(){t.thumbTotalWidth=t.core.galleryItems.length*(t.settings.thumbWidth+t.settings.thumbMargin);t.$lgThumb.css("width",t.thumbTotalWidth+"px");t.$lgThumb.empty();t.setThumbItemHtml(t.core.galleryItems);t.animateThumb(t.core.index)},50);setTimeout(function(){t.$thumbOuter.removeClass("lg-rebuilding-thumbnails")},200)};t.prototype.setTranslate=function(t){this.$lgThumb.css("transform","translate3d(-"+t+"px, 0px, 0px)")};t.prototype.getPossibleTransformX=function(t){if(t>this.thumbTotalWidth-this.thumbOuterWidth){t=this.thumbTotalWidth-this.thumbOuterWidth}if(t<0){t=0}return t};t.prototype.animateThumb=function(t){this.$lgThumb.css("transition-duration",this.core.settings.speed+"ms");if(this.settings.animateThumb){var e=0;switch(this.settings.currentPagerPosition){case"left":e=0;break;case"middle":e=this.thumbOuterWidth/2-this.settings.thumbWidth/2;break;case"right":e=this.thumbOuterWidth-this.settings.thumbWidth}this.translateX=(this.settings.thumbWidth+this.settings.thumbMargin)*t-1-e;if(this.translateX>this.thumbTotalWidth-this.thumbOuterWidth){this.translateX=this.thumbTotalWidth-this.thumbOuterWidth}if(this.translateX<0){this.translateX=0}this.setTranslate(this.translateX)}};t.prototype.onThumbTouchMove=function(t){t.newTranslateX=this.translateX;t.isMoved=true;t.touchMoveTime=(new Date).valueOf();t.newTranslateX-=t.cords.endX-t.cords.startX;t.newTranslateX=this.getPossibleTransformX(t.newTranslateX);this.setTranslate(t.newTranslateX);this.$thumbOuter.addClass("lg-dragging");return t};t.prototype.onThumbTouchEnd=function(t){t.isMoved=false;t.endTime=new Date;this.$thumbOuter.removeClass("lg-dragging");var e=t.endTime.valueOf()-t.startTime.valueOf();var i=t.cords.endX-t.cords.startX;var s=Math.abs(i)/e;if(s>.15&&t.endTime.valueOf()-t.touchMoveTime<30){s+=1;if(s>2){s+=1}s=s+s*(Math.abs(i)/this.thumbOuterWidth);this.$lgThumb.css("transition-duration",Math.min(s-1,2)+"settings");i=i*s;this.translateX=this.getPossibleTransformX(this.translateX-i);this.setTranslate(this.translateX)}else{this.translateX=t.newTranslateX}if(Math.abs(t.cords.endX-t.cords.startX)<this.settings.thumbnailSwipeThreshold){this.thumbClickable=true}return t};t.prototype.getThumbHtml=function(t,e,i){var s=this.core.galleryItems[e].__slideVideoInfo||{};var n;if(s.youtube){if(this.settings.loadYouTubeThumbnail){n="//img.youtube.com/vi/"+s.youtube[1]+"/"+this.settings.youTubeThumbSize+".jpg"}else{n=t}}else{n=t}var a=i?'alt="'+i+'"':"";return'<div data-lg-item-id="'+e+'" class="lg-thumb-item '+(e===this.core.index?" active":"")+'"\n        style="width:'+this.settings.thumbWidth+"px; height: "+this.settings.thumbHeight+";\n            margin-right: "+this.settings.thumbMargin+'px;">\n            <img '+a+' data-lg-item-id="'+e+'" src="'+n+'" />\n        </div>'};t.prototype.getThumbItemHtml=function(t){var e="";for(var i=0;i<t.length;i++){e+=this.getThumbHtml(t[i].thumb,i,t[i].alt)}return e};t.prototype.setThumbItemHtml=function(t){var e=this.getThumbItemHtml(t);this.$lgThumb.html(e)};t.prototype.setAnimateThumbStyles=function(){if(this.settings.animateThumb){this.core.outer.addClass("lg-animate-thumb")}};t.prototype.manageActiveClassOnSlideChange=function(){var s=this;this.core.LGel.on(lGEvents.beforeSlide+".thumb",function(t){var e=s.core.outer.find(".lg-thumb-item");var i=t.detail.index;e.removeClass("active");e.eq(i).addClass("active")})};t.prototype.toggleThumbBar=function(){var t=this;if(this.settings.toggleThumb){this.core.outer.addClass("lg-can-toggle");this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.thumbnailPluginStrings["toggleThumbnails"]+'" class="lg-toggle-thumb lg-icon"></button>');this.core.outer.find(".lg-toggle-thumb").first().on("click.lg",function(){t.core.outer.toggleClass("lg-components-open")})}};t.prototype.thumbKeyPress=function(){var e=this;this.$LG(window).on("keydown.lg.thumb.global"+this.core.lgId,function(t){if(!e.core.lgOpened||!e.settings.toggleThumb)return;if(t.keyCode===38){t.preventDefault();e.core.outer.addClass("lg-components-open")}else if(t.keyCode===40){t.preventDefault();e.core.outer.removeClass("lg-components-open")}})};t.prototype.destroy=function(){if(this.settings.thumbnail){this.$LG(window).off(".lg.thumb.global"+this.core.lgId);this.core.LGel.off(".lg.thumb");this.core.LGel.off(".thumb");this.$thumbOuter.remove();this.core.outer.removeClass("lg-has-thumb")}};return t}();export default Thumbnail;