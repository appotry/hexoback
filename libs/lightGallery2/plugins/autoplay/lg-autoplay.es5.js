var __assign=function(){__assign=Object.assign||function t(e){for(var o,s=1,r=arguments.length;s<r;s++){o=arguments[s];for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a))e[a]=o[a]}return e};return __assign.apply(this,arguments)};var lGEvents={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"};var autoplaySettings={autoplay:true,slideShowAutoplay:false,slideShowInterval:5e3,progressBar:true,forceSlideShowAutoplay:false,autoplayControls:true,appendAutoplayControlsTo:".lg-toolbar",autoplayPluginStrings:{toggleAutoplay:"Toggle Autoplay"}};var Autoplay=function(){function t(t){this.core=t;this.settings=__assign(__assign({},autoplaySettings),this.core.settings);return this}t.prototype.init=function(){var t=this;if(!this.settings.autoplay){return}this.interval=false;this.fromAuto=true;this.pausedOnTouchDrag=false;this.pausedOnSlideChange=false;if(this.settings.autoplayControls){this.controls()}if(this.settings.progressBar){this.core.outer.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>')}if(this.settings.slideShowAutoplay){this.core.LGel.once(lGEvents.slideItemLoad+".autoplay",function(){t.startAutoPlay()})}this.core.LGel.on(lGEvents.dragStart+".autoplay touchstart.lg.autoplay",function(){if(t.interval){t.stopAutoPlay();t.pausedOnTouchDrag=true}});this.core.LGel.on(lGEvents.dragEnd+".autoplay touchend.lg.autoplay",function(){if(!t.interval&&t.pausedOnTouchDrag){t.startAutoPlay();t.pausedOnTouchDrag=false}});this.core.LGel.on(lGEvents.beforeSlide+".autoplay",function(){t.showProgressBar();if(!t.fromAuto&&t.interval){t.stopAutoPlay();t.pausedOnSlideChange=true}else{t.pausedOnSlideChange=false}t.fromAuto=false});this.core.LGel.on(lGEvents.afterSlide+".autoplay",function(){if(t.pausedOnSlideChange&&!t.interval&&t.settings.forceSlideShowAutoplay){t.startAutoPlay();t.pausedOnSlideChange=false}});this.showProgressBar()};t.prototype.showProgressBar=function(){var t=this;if(this.settings.progressBar&&this.fromAuto){var e=this.core.outer.find(".lg-progress-bar");var o=this.core.outer.find(".lg-progress");if(this.interval){o.removeAttr("style");e.removeClass("lg-start");setTimeout(function(){o.css("transition","width "+(t.core.settings.speed+t.settings.slideShowInterval)+"ms ease 0s");e.addClass("lg-start")},20)}}};t.prototype.controls=function(){var t=this;var e='<button aria-label="'+this.settings.autoplayPluginStrings["toggleAutoplay"]+'" type="button" class="lg-autoplay-button lg-icon"></button>';this.core.outer.find(this.settings.appendAutoplayControlsTo).append(e);this.core.outer.find(".lg-autoplay-button").first().on("click.lg.autoplay",function(){if(t.core.outer.hasClass("lg-show-autoplay")){t.stopAutoPlay()}else{if(!t.interval){t.startAutoPlay()}}})};t.prototype.startAutoPlay=function(){var t=this;this.core.outer.find(".lg-progress").css("transition","width "+(this.core.settings.speed+this.settings.slideShowInterval)+"ms ease 0s");this.core.outer.addClass("lg-show-autoplay");this.core.outer.find(".lg-progress-bar").addClass("lg-start");this.core.LGel.trigger(lGEvents.autoplayStart,{index:this.core.index});this.interval=setInterval(function(){if(t.core.index+1<t.core.galleryItems.length){t.core.index++}else{t.core.index=0}t.core.LGel.trigger(lGEvents.autoplay,{index:t.core.index});t.fromAuto=true;t.core.slide(t.core.index,false,false,"next")},this.core.settings.speed+this.settings.slideShowInterval)};t.prototype.stopAutoPlay=function(){if(this.interval){this.core.LGel.trigger(lGEvents.autoplayStop,{index:this.core.index});this.core.outer.find(".lg-progress").removeAttr("style");this.core.outer.removeClass("lg-show-autoplay");this.core.outer.find(".lg-progress-bar").removeClass("lg-start")}clearInterval(this.interval);this.interval=false};t.prototype.closeGallery=function(){this.stopAutoPlay()};t.prototype.destroy=function(){if(this.settings.autoplay){this.core.outer.find(".lg-progress-bar").remove()}this.core.LGel.off(".lg.autoplay");this.core.LGel.off(".autoplay")};return t}();export default Autoplay;