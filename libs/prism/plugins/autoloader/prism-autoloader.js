!function(){var m,u,k,e,a,r,s,t,d;function g(e){return!(0<=e.indexOf("!"))&&((e=u[e]||e)in Prism.languages||(e=k[e])&&!e.error&&!1===e.loading)}function h(e,a,s){var r=(e="string"==typeof e?[e]:e).length,t=0,n=!1;function o(){n||++t===r&&a&&a(e)}0===r?a&&setTimeout(a,0):e.forEach(function(e){function a(){var e,a,r,s,t=k[i];(t=t||(k[i]={callbacks:[]})).callbacks.push({success:c,error:l}),!p&&g(i)?f(i,"success"):!p&&t.error?f(i,"error"):!p&&t.loading||(t.loading=!0,t.error=!1,s=i,s=d.languages_path+"prism-"+s+(d.use_minified?".min":"")+".js",e=function(){t.loading=!1,f(i,"success")},a=function(){t.loading=!1,t.error=!0,f(i,"error")},(r=document.createElement("script")).src=s,r.async=!0,r.onload=function(){document.body.removeChild(r),e&&e()},r.onerror=function(){document.body.removeChild(r),a&&a()},document.body.appendChild(r))}var i,c,l,p,r;c=o,l=function(){n||(n=!0,s&&s(e))},p=0<=(i=e).indexOf("!"),i=i.replace("!",""),i=u[i]||i,(r=m[i])&&r.length?h(r,a,l):a()})}function f(e,a){if(k[e]){for(var r=k[e].callbacks,s=0,t=r.length;s<t;s++){var i=r[s][a];i&&setTimeout(i,0)}r.length=0}}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(m={javascript:"clike",actionscript:"javascript",apex:["clike","sql"],arduino:"cpp",aspnet:["markup","csharp"],birb:"clike",bison:"c",c:"clike",csharp:"clike",cpp:"c",cfscript:"clike",chaiscript:["clike","cpp"],cilkc:"c",cilkcpp:"cpp",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",gml:"clike",glsl:"c",go:"clike",gradle:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",hlsl:"c",idris:"haskell",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike","typescript"],"js-extras":"javascript",json5:"json",jsonp:"json","js-templates":"javascript",kotlin:"clike",latte:["clike","markup-templating","php"],less:"css",lilypond:"scheme",liquid:"markup-templating",markdown:"markup","markup-templating":"markup",mongodb:"javascript",n4js:"javascript",objectivec:"c",opencl:"c",parser:"markup",php:"markup-templating",phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],purebasic:"clike",purescript:"haskell",qsharp:"clike",qml:"javascript",qore:"clike",racket:"scheme",cshtml:["markup","csharp"],jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",squirrel:"clike",stata:["mata","java","python"],"t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","vbnet"],tap:"yaml",tt2:["clike","markup-templating"],textile:"markup",twig:"markup-templating",typescript:"javascript",v:"clike",vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup","xml-doc":"markup",xquery:"markup"},u={html:"markup",xml:"markup",svg:"markup",mathml:"markup",ssml:"markup",atom:"markup",rss:"markup",js:"javascript",g4:"antlr4",ino:"arduino","arm-asm":"armasm",art:"arturo",adoc:"asciidoc",avs:"avisynth",avdl:"avro-idl",gawk:"awk",sh:"bash",shell:"bash",shortcode:"bbcode",rbnf:"bnf",oscript:"bsl",cs:"csharp",dotnet:"csharp",cfc:"cfscript","cilk-c":"cilkc","cilk-cpp":"cilkcpp",cilk:"cilkcpp",coffee:"coffeescript",conc:"concurnas",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gv:"dot",eta:"ejs",xlsx:"excel-formula",xls:"excel-formula",gamemakerlanguage:"gml",po:"gettext",gni:"gn",ld:"linker-script","go-mod":"go-module",hbs:"handlebars",mustache:"handlebars",hs:"haskell",idr:"idris",gitignore:"ignore",hgignore:"ignore",npmignore:"ignore",webmanifest:"json",kt:"kotlin",kts:"kotlin",kum:"kumir",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",nani:"naniscript",objc:"objectivec",qasm:"openqasm",objectpascal:"pascal",px:"pcaxis",pcode:"peoplecode",plantuml:"plant-uml",pq:"powerquery",mscript:"powerquery",pbfasm:"purebasic",purs:"purescript",py:"python",qs:"qsharp",rkt:"racket",razor:"cshtml",rpy:"renpy",res:"rescript",robot:"robotframework",rb:"ruby","sh-session":"shell-session",shellsession:"shell-session",smlnj:"sml",sol:"solidity",sln:"solution-file",rq:"sparql",sclang:"supercollider",t4:"t4-cs",trickle:"tremor",troy:"tremor",trig:"turtle",ts:"typescript",tsconfig:"typoscript",uscript:"unrealscript",uc:"unrealscript",url:"uri",vb:"visual-basic",vba:"visual-basic",webidl:"web-idl",mathematica:"wolfram",nb:"wolfram",wl:"wolfram",xeoracube:"xeora",yml:"yaml"},k={},e="components/",(a=Prism.util.currentScript())&&(r=/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,s=/(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,null!=(t=a.getAttribute("data-autoloader-path"))?e=t.trim().replace(/\/?$/,"/"):(t=a.src,r.test(t)?e=t.replace(r,"components/"):s.test(t)&&(e=t.replace(s,"$1components/")))),d=Prism.plugins.autoloader={languages_path:e,use_minified:!0,loadLanguages:h},Prism.hooks.add("complete",function(e){var a,r,s=e.element,e=e.language;s&&e&&"none"!==e&&((r=((a=s).getAttribute("data-dependencies")||"").trim())||(a=a.parentElement)&&"pre"===a.tagName.toLowerCase()&&(r=(a.getAttribute("data-dependencies")||"").trim()),a=r?r.split(/\s*,\s*/g):[],/^diff-./i.test(e)?(a.push("diff"),a.push(e.substr("diff-".length))):a.push(e),a.every(g)||h(a,function(){Prism.highlightElement(s)}))}))}();