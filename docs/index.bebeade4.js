parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eHzx":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./index.scss");var e=$(".js-first-slider");e.rangeSlider({min:0,max:50,from:0,step:1,hasTip:!0,onChange:function(a){var i=a.split(" - "),s=e.closest(".slider").find(".js-slider-from-value"),n=e.closest(".slider").find(".js-slider-to-value");s.val(i[0]),n.val(i[1])}});var a=$(".js-second-slider");a.rangeSlider({min:0,max:200,from:10,step:1,hasTip:!0,hasInterval:!0,to:190,theme:"red",onChange:function(e){var i=e.split(" - "),s=a.closest(".slider").find(".js-slider-from-value"),n=a.closest(".slider").find(".js-slider-to-value");s.val(i[0]),n.val(i[1])}});var i=$(".js-third-slider");i.rangeSlider({min:10,max:80,from:20,step:1,hasTip:!0,theme:"aqua",isVertical:!0,onChange:function(e){var a=e.split(" - "),s=i.closest(".slider").find(".js-slider-from-value"),n=i.closest(".slider").find(".js-slider-to-value");s.val(a[0]),n.val(a[1])}}),$(".js-slider-from-value").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("blur",function(){a.update({from:+e.val()})})}),$(".js-slider-to-value").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("blur",function(){a.update({to:+e.val()})})}),$(".js-slider-min-value").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("blur",function(){a.update({min:+e.val()})})}),$(".js-slider-max-value").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("blur",function(){a.update({max:+e.val()})})}),$(".js-slider-step").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("blur",function(){a.update({step:+e.val()})})}),$(".js-slider-tip").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("change",function(){"show"===e.val()&&a.update({hasTip:!0}),"hide"===e.val()&&a.update({hasTip:!1})})}),$(".js-slider-theme").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("change",function(){"aqua"===e.val()&&a.update({theme:"aqua"}),"red"===e.val()&&a.update({theme:"red"})})}),$(".js-slider-type").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("change",function(){"single"===e.val()&&a.update({hasInterval:!1}),"double"===e.val()&&a.update({hasInterval:!0})})}),$(".js-slider-view").each(function(){var e=$(this),a=e.closest(".slider").find("input[name$=slider]").data("rangeSlider");e.on("change",function(){"horizontal"===e.val()&&a.update({isVertical:!1}),"vertical"===e.val()&&a.update({isVertical:!0})})});
},{"./index.scss":"eHzx"}]},{},["Focm"], null)
//# sourceMappingURL=/range-slider/index.bebeade4.js.map