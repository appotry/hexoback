$(document).ready((function(){var e=$('<div class="scroll-down-bar"><i class="fas fa-angle-down" ></i></div>');$(".code-area").prepend(e),$(".code-area pre").each((function(e,a){console.log($(this).height()),$(this).height()>=405&&(console.log("add show code-full"+e+": "+a),$(this).parent().addClass("show-code-full"))})),$(".code-area .scroll-down-bar").on("click",(function(){$(this).parent().hasClass("code-full")?$(this).parent().removeClass("code-full"):$(this).parent().addClass("code-full"),AOS.refresh(),progressBarInit()}))}));