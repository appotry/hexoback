!function(p){var a=p.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,s){(a="string"==typeof a?[a]:a).forEach(function(a){var e=function(a){a.inside||(a.inside={}),a.inside.rest=s},n="doc-comment";if(t=p.languages[a]){var t,r=t[n];if((r=r?r:(t=p.languages.insertBefore(a,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[n])instanceof RegExp&&(r=t[n]={pattern:r}),Array.isArray(r))for(var o=0,i=r.length;o<i;o++)r[o]instanceof RegExp&&(r[o]={pattern:r[o]}),e(r[o]);else e(r)}})}}),a.addSupport(["java","javascript","php"],a)}(Prism);