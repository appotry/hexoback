$((function(){var e=$('<i class="fas fa-clipboard code_copy" title="复制代码" aria-hidden="true"></i>'),o=$('<div class="codecopy_notice"></div>');$(".code-area").prepend(e).prepend(o),$(".code-area .code_copy").on("click",(function(){var e=window.getSelection(),o=document.createRange(),t=(o.selectNodeContents($(this).siblings("pre").find("code")[0]),e.removeAllRanges(),e.addRange(o),e.toString(),this);if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),$(t).prev(".codecopy_notice").text("复制成功").animate({opacity:1,top:30},450,(function(){setTimeout((function(){$(t).prev(".codecopy_notice").animate({opacity:0,top:0},650)}),400)}))}catch(e){$(t).prev(".codecopy_notice").text("复制失败").animate({opacity:1,top:30},650,(function(){setTimeout((function(){$(t).prev(".codecopy_notice").animate({opacity:0,top:0},650)}),400)}))}else $(t).prev(".codecopy_notice").text("浏览器不支持复制");e.removeAllRanges()}))}));