$(document).ready((function(){var e=$('<i class="fas fa-clipboard code_copy" title="复制代码" aria-hidden="true"></i>'),o=$('<div class="codecopy_notice"></div>');$(".code-area").prepend(e).prepend(o),$(".code-area .code_copy").on("click",(function(){var e=window.getSelection(),o=document.createRange();o.selectNodeContents($(this).siblings("pre").find("code")[0]),e.removeAllRanges(),e.addRange(o);e.toString();!function(e,o){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),$(o).prev(".codecopy_notice").text("复制成功").animate({opacity:1,top:30},450,(function(){setTimeout((function(){$(o).prev(".codecopy_notice").animate({opacity:0,top:0},650)}),400)}))}catch(e){return $(o).prev(".codecopy_notice").text("复制失败").animate({opacity:1,top:30},650,(function(){setTimeout((function(){$(o).prev(".codecopy_notice").animate({opacity:0,top:0},650)}),400)})),!1}else $(o).prev(".codecopy_notice").text("浏览器不支持复制")}(0,this),e.removeAllRanges()}))}));