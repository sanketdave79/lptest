/*! Picturefill - v3.0.1 - 2015-09-30
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){z[b]=!1,aa()},d.onload=function(){z[b]=1===d.width,aa()},d.src=c,"pending"}function f(){L=!1,O=a.devicePixelRatio,M={},N={},s.DPR=O||1,P.width=Math.max(a.innerWidth||0,y.clientWidth),P.height=Math.max(a.innerHeight||0,y.clientHeight),P.vw=P.width/100,P.vh=P.height/100,r=[P.height,P.width,O].join("-"),P.em=s.getEmValue(),P.rem=P.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===A.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),W.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):X.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):W.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(S),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(T),m>=l)return n;g=c(U),h=[],","===g.slice(-1)?(g=g.replace(V,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=function(){},u=b.createElement("img"),v=u.getAttribute,w=u.setAttribute,x=u.removeAttribute,y=b.documentElement,z={},A={algorithm:""},B="data-pfsrc",C=B+"set",D=navigator.userAgent,E=/rident/.test(D)||/ecko/.test(D)&&D.match(/rv\:(\d+)/)&&RegExp.$1>35,F="currentSrc",G=/\s+\+?\d+(e\d+)?w/,H=/(\([^)]+\))?\s*(.+)/,I=a.picturefillCFG,J="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",K="font-size:100%!important;",L=!0,M={},N={},O=a.devicePixelRatio,P={px:1,"in":96},Q=b.createElement("a"),R=!1,S=/^[ \t\n\r\u000c]+/,T=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,V=/[,]+$/,W=/^\d+$/,X=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in M))if(M[b]=!1,d&&(e=b.match(a)))M[b]=e[1]*P[e[2]];else try{M[b]=new Function("e",c(b))(P)}catch(f){}return M[b]}}(),_=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},aa=function(a){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),R=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}};o=a.console&&console.warn?function(a){console.warn(a)}:t,F in u||(F="src"),z["image/jpeg"]=!0,z["image/gif"]=!0,z["image/png"]=!0,z["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in u,s.supSizes="sizes"in u,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){u.srcset="data:,a",a.src="data:,a",s.supSrcset=u.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=A,s.supSrcset&&(s.sel+=",img["+C+"]"),s.DPR=O||1,s.u=P,s.types=z,q=s.supSrcset&&!s.supSizes,s.setSize=t,s.makeUrl=Z(function(a){return Q.href=a,Q.href}),s.qsa=function(a,b){return a.querySelectorAll(b)},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?$(a):!0},s.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?z[a]:!0},s.parseSize=Z(function(a){var b=(a||"").match(H);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=y.style.cssText,e=a.style.cssText;c.style.cssText=J,y.style.cssText=K,a.style.cssText=K,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),y.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in N)||A.uT){var b=s.calcLength(n(a));N[a]=b?b:P.width}return N[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},s.setRes.res=_,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[F],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=E&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=v.call(a,"src"),j.src?w.call(a,B,j.src):x.call(a,B)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=v.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:v.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&G.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g),h&&s.supSrcset&&!j.supported&&(e?(w.call(a,C,e),a.srcset=""):x.call(a,C)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!R||L||O!==a.devicePixelRatio)&&f()},s.supPicture?(aa=t,s.fillImg=t):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=y.clientHeight,i=function(){L=Math.max(a.innerWidth||0,y.clientWidth)!==P.width||y.clientHeight!==h,h=y.clientHeight,L&&s.fillImgs()};Y(a,"resize",g(i,99)),Y(b,"readystatechange",e)}(),s.picturefill=aa,s.fillImgs=aa,s.teardownRun=t,aa._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(A[b]=a[0],R&&s.fillImgs({reselect:!0}))}};for(;I&&I.length;)a.picturefillCFG.push(I.shift());a.picturefill=aa,"object"==typeof module&&"object"==typeof module.exports?module.exports=aa:"function"==typeof define&&define.amd&&define("picturefill",function(){return aa}),s.supPicture||(z["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*
jquery.animate-enhanced plugin v1.02
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(d,J,K){function P(a,b,d,l,j,h,c,n,q){var t=!1;c=!0===c&&!0===n;b=b||{};b.original||(b.original={},t=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};n=b.meta;for(var k=b.original,x=b.properties,Q=b.secondary,D=r.length-1;0<=D;D--){var F=r[D]+"transition-property",y=r[D]+"transition-duration",e=r[D]+"transition-timing-function";d=c?r[D]+"transform":d;t&&(k[F]=a.css(F)||"",k[y]=a.css(y)||"",k[e]=a.css(e)||"");Q[d]=c?!0===q||!0===G&&!1!==q&&L?"translate3d("+n.left+"px, "+n.top+
"px, 0)":"translate("+n.left+"px,"+n.top+"px)":h;x[F]=(x[F]?x[F]+",":"")+d;x[y]=(x[y]?x[y]+",":"")+l+"ms";x[e]=(x[e]?x[e]+",":"")+j}return b}function B(a){for(var b in a)return!1;return!0}function R(a){a=a.toUpperCase();var b={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return"string"==typeof b[a]?b[a]:"block"}function H(a){return parseFloat(a.replace(a.match(/\D+$/),
""))}function M(a){var b=!0;a.each(function(a,d){return b=b&&d.ownerDocument});return b}var S="top right bottom left opacity height width".split(" "),I=["top","right","bottom","left"],r=["-webkit-","-moz-","-o-",""],T=["avoidTransforms","useTranslate3d","leaveTransforms"],U=/^([+-]=)?([\d+-.]+)(.*)$/,V=/([A-Z])/g,W={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},N=null,C=!1,z=(document.body||document.documentElement).style,O=void 0!==z.WebkitTransition||void 0!==z.MozTransition||void 0!==z.OTransition||
void 0!==z.transition,L="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,G=L;d.expr&&d.expr.filters&&(N=d.expr.filters.animated,d.expr.filters.animated=function(a){return d(a).data("events")&&d(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:N.call(this,a)});d.extend({toggle3DByDefault:function(){return G=!G},toggleDisabledByDefault:function(){return C=!C},setDisabledByDefault:function(a){return C=a}});d.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],
null),d={x:0,y:0};if(a)for(var p=r.length-1;0<=p;p--){var l=a.getPropertyValue(r[p]+"transform");if(l&&/matrix/i.test(l)){a=l.replace(/^matrix\(/i,"").split(/, |\)$/g);d={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return d};d.fn.animate=function(a,b,p,l){a=a||{};var j=!("undefined"!==typeof a.bottom||"undefined"!==typeof a.right),h=d.speed(b,p,l),c=this,n=0,q=function(){n--;0===n&&"function"===typeof h.complete&&h.complete.apply(c,arguments)},t;if(!(t=!0===("undefined"!==typeof a.avoidCSSTransitions?
a.avoidCSSTransitions:C)))if(!(t=!O))if(!(t=B(a))){var k;a:{for(k in a)if(("width"==k||"height"==k)&&("show"==a[k]||"hide"==a[k]||"toggle"==a[k])){k=!0;break a}k=!1}t=k||0>=h.duration}return t?J.apply(this,arguments):this[!0===h.queue?"queue":"each"](function(){var b=d(this),c=d.extend({},h),l=function(c){var g=b.data("jQe")||{original:{}},f={};if(2==c.eventPhase){if(!0!==a.leaveTransforms){for(c=r.length-1;0<=c;c--)f[r[c]+"transform"]="";if(j&&"undefined"!==typeof g.meta){c=0;for(var e;e=I[c];++c)f[e]=
g.meta[e+"_o"]+"px",d(this).css(e,f[e])}}b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(g.original).css(f).data("jQe",null);"hide"===a.opacity&&b.css({display:"none",opacity:""});q.call(this)}},k={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",
easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",
easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",
easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},y={},k=k[c.easing||"swing"]?k[c.easing||"swing"]:c.easing||"swing",e;for(e in a)if(-1===d.inArray(e,T)){var p=-1<d.inArray(e,I),m;var g=b,w=a[e],u=e,s=p&&!0!==a.avoidTransforms;if("d"==u)m=void 0;else if(M(g)){var f=U.exec(w);m="auto"===g.css(u)?0:g.css(u);m="string"==typeof m?H(m):m;"string"==typeof w&&H(w);var s=!0===s?0:m,t=g.is(":hidden"),v=g.translation();"left"==u&&(s=parseInt(m,10)+v.x);"right"==u&&(s=parseInt(m,10)+v.x);"top"==u&&
(s=parseInt(m,10)+v.y);"bottom"==u&&(s=parseInt(m,10)+v.y);!f&&"show"==w?(s=1,t&&g.css({display:R(g.context.tagName),opacity:0})):!f&&"hide"==w&&(s=0);f?(g=parseFloat(f[2]),f[1]&&(g=("-="===f[1]?-1:1)*g+parseInt(s,10)),m=g):m=s}else m=void 0;f=e;g=m;w=b;if(M(w)){u=-1<d.inArray(f,S);if(("width"==f||"height"==f||"opacity"==f)&&parseFloat(g)===parseFloat(w.css(f)))u=!1;f=u}else f=!1;if(f){var f=b,g=e,w=c.duration,u=k,p=p&&!0!==a.avoidTransforms,s=j,t=a.useTranslate3d,v=(v=f.data("jQe"))&&!B(v)?v:d.extend(!0,
{},W),A=m;if(-1<d.inArray(g,I)){var E=v.meta,C=H(f.css(g))||0,z=g+"_o",A=m-C;E[g]=A;E[z]="auto"==f.css(g)?0+A:C+A||0;v.meta=E;s&&0===A&&(A=0-E[z],E[g]=A,E[z]=0)}f.data("jQe",P(f,v,g,w,u,A,p,s,t))}else y[e]=a[e]}b.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((e=b.data("jQe"))&&!B(e)&&!B(e.secondary)){n++;b.css(e.properties);var G=e.secondary;setTimeout(function(){b.bind("webkitTransitionEnd oTransitionEnd transitionend",l).css(G)})}else c.queue=!1;B(y)||(n++,J.apply(b,[y,{duration:c.duration,
easing:d.easing[c.easing]?c.easing:d.easing.swing?"swing":"linear",complete:q,queue:c.queue}]));return!0})};d.fn.animate.defaults={};d.fn.stop=function(a,b,p){if(!O)return K.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var l=d(this),j=l.data("jQe");if(j&&!B(j)){var h,c={};if(b){if(c=j.secondary,!p&&void 0!==typeof j.meta.left_o||void 0!==typeof j.meta.top_o){c.left=void 0!==typeof j.meta.left_o?j.meta.left_o:"auto";c.top=void 0!==typeof j.meta.top_o?j.meta.top_o:"auto";for(h=r.length-
1;0<=h;h--)c[r[h]+"transform"]=""}}else if(!B(j.secondary)){var n=window.getComputedStyle(l[0],null);if(n)for(var q in j.secondary)if(j.secondary.hasOwnProperty(q)&&(q=q.replace(V,"-$1").toLowerCase(),c[q]=n.getPropertyValue(q),!p&&/matrix/i.test(c[q]))){h=c[q].replace(/^matrix\(/i,"").split(/, |\)$/g);c.left=parseFloat(h[4])+parseFloat(l.css("left"))+"px"||"auto";c.top=parseFloat(h[5])+parseFloat(l.css("top"))+"px"||"auto";for(h=r.length-1;0<=h;h--)c[r[h]+"transform"]=""}}l.unbind("webkitTransitionEnd oTransitionEnd transitionend");
l.css(j.original).css(c).data("jQe",null)}else K.apply(l,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);;
/*! Superslides - v0.6.3-wip - 2013-12-17
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(window, $) {

var Superslides, plugin = 'superslides';

Superslides = function(el, options) {
  this.options = $.extend({
    play: false,
    animation_speed: 600,
    animation_easing: 'swing',
    animation: 'slide',
    inherit_width_from: window,
    inherit_height_from: window,
    pagination: true,
    hashchange: false,
    scrollable: true,
    elements: {
      preserve: '.preserve',
      nav: '.slides-navigation',
      container: '.slides-container',
      pagination: '.slides-pagination'
    }
  }, options);

  var that       = this,
      $control   = $('<div>', { "class": 'slides-control' }),
      multiplier = 1;

  this.$el        = $(el);
  this.$container = this.$el.find(this.options.elements.container);

  // Private Methods
  var initialize = function() {
    multiplier = that._findMultiplier();

    that.$el.on('click', that.options.elements.nav + " a", function(e) {
      e.preventDefault();

      that.stop();
      if ($(this).hasClass('next')) {
        that.animate('next', function() {
          that.start();
        });
      } else {
        that.animate('prev', function() {
          that.start();
        });
      }
    });

    $(document).on('keyup', function(e) {
      if (e.keyCode === 37) {
        that.animate('prev');
      }
      if (e.keyCode === 39) {
        that.animate('next');
      }
    });

    $(window).on('resize', function() {
      setTimeout(function() {
        var $children = that.$container.children();

        that.width  = that._findWidth();
        that.height = that._findHeight();

        $children.css({
          width: that.width,
          left: that.width
        });

        that.css.containers();
        that.css.images();
      }, 10);
    });

    if (that.options.hashchange) {
      $(window).on('hashchange', function() {
        var hash = that._parseHash(), index;

        index = that._upcomingSlide(hash);

        if (index >= 0 && index !== that.current) {
          that.animate(index);
        }
      });
    }

    that.pagination._events();

    that.start();
    return that;
  };

var css = {
  containers: function() {
    if (that.init) {
      that.$el.css({
        height: that.height
      });

      that.$control.css({
        width: that.width * multiplier,
        left: -that.width
      });

      that.$container.css({

      });
    } else {
      $('body').css({
        margin: 0
      });

      that.$el.css({
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: that.height
      });

      that.$control.css({
        position: 'relative',
        transform: 'translate3d(0)',
        height: '100%',
        width: that.width * multiplier,
        left: -that.width
      });

      that.$container.css({
        display: 'none',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        position: 'relative',
        height: '100%'
      });
    }

    if (that.size() === 1) {
      that.$el.find(that.options.elements.nav).hide();
    }
  },
  images: function() {
    var $images = that.$container.find('img')
                                 .not(that.options.elements.preserve)

    $images.removeAttr('width').removeAttr('height')
      .css({
        "-webkit-backface-visibility": 'hidden',
        "-ms-interpolation-mode": 'bicubic',
        "position": 'absolute',
        "left": '0',
        "top": '0',
        "z-index": '-1',
        "max-width": 'none'
      });

    $images.each(function() {
      var image_aspect_ratio = that.image._aspectRatio(this),
          image = this;

      if (!$.data(this, 'processed')) {
        var img = new Image();
        img.onload = function() {
          that.image._scale(image, image_aspect_ratio);
          that.image._center(image, image_aspect_ratio);
          $.data(image, 'processed', true);
        };
        img.src = this.src;

      } else {
        that.image._scale(image, image_aspect_ratio);
        that.image._center(image, image_aspect_ratio);
      }
    });
  },
  children: function() {
    var $children = that.$container.children();

    if ($children.is('img')) {
      $children.each(function() {
        if ($(this).is('img')) {
          $(this).wrap('<div>');

          // move id attribute
          var id = $(this).attr('id');
          $(this).removeAttr('id');
          $(this).parent().attr('id', id);
        }
      });

      $children = that.$container.children();
    }

    if (!that.init) {
      $children.css({
        display: 'none',
        left: that.width * 2
      });
    }

    $children.css({
      position: 'absolute',
      overflow: 'hidden',
      height: '100%',
      width: that.width,
      top: 0,
      zIndex: 0
    });

  }
}

var fx = {
  slide: function(orientation, complete) {
    var $children = that.$container.children(),
        $target   = $children.eq(orientation.upcoming_slide);

    $target.css({
      left: orientation.upcoming_position,
      display: 'block'
    });

    that.$control.animate({
      left: orientation.offset
    },
    that.options.animation_speed,
    that.options.animation_easing,
    function() {
      if (that.size() > 1) {
        that.$control.css({
          left: -that.width
        });

        $children.eq(orientation.upcoming_slide).css({
          left: that.width,
          zIndex: 2
        });

        if (orientation.outgoing_slide >= 0) {
          $children.eq(orientation.outgoing_slide).css({
            left: that.width,
            display: 'none',
            zIndex: 0
          });
        }
      }

      complete();
    });
  },
  fade: function(orientation, complete) {
    var that = this,
        $children = that.$container.children(),
        $outgoing = $children.eq(orientation.outgoing_slide),
        $target = $children.eq(orientation.upcoming_slide);

    $target.css({
      left: this.width,
      opacity: 0,
      display: 'block'
    }).animate({
          opacity: 1
        },
        that.options.animation_speed,
        that.options.animation_easing
    );

    if (orientation.outgoing_slide >= 0) {
      $outgoing.animate({
        opacity: 0
      },
      that.options.animation_speed,
      that.options.animation_easing,
      function() {
        if (that.size() > 1) {
          $children.eq(orientation.upcoming_slide).css({
            zIndex: 2
          });

          if (orientation.outgoing_slide >= 0) {
            $children.eq(orientation.outgoing_slide).css({
              opacity: 1,
              display: 'none',
              zIndex: 0
            });
          }
        }

        complete();
      });
    } else {
      $target.css({
        zIndex: 2
      });
      complete();
    }
  }
};

fx = $.extend(fx, $.fn.superslides.fx);

var image = {
  _centerY: function(image) {
    var $img = $(image);

    $img.css({
      top: (that.height - $img.height()) / 2
    });
  },
  _centerX: function(image) {
    var $img = $(image);

    $img.css({
      left: (that.width - $img.width()) / 2
    });
  },
  _center: function(image) {
    that.image._centerX(image);
    that.image._centerY(image);
  },
  _aspectRatio: function(image) {
    if (!image.naturalHeight && !image.naturalWidth) {
      var img = new Image();
      img.src = image.src;
      image.naturalHeight = img.height;
      image.naturalWidth = img.width;
    }

    return image.naturalHeight / image.naturalWidth;
  },
  _scale: function(image, image_aspect_ratio) {
    image_aspect_ratio = image_aspect_ratio || that.image._aspectRatio(image);

    var container_aspect_ratio = that.height / that.width,
        $img = $(image);

    if (container_aspect_ratio > image_aspect_ratio) {
      $img.css({
        height: that.height,
        width: that.height / image_aspect_ratio
      });

    } else {
      $img.css({
        height: that.width * image_aspect_ratio,
        width: that.width
      });
    }
  }
};

var pagination = {
  _setCurrent: function(i) {
    if (!that.$pagination) { return; }

    var $pagination_children = that.$pagination.children();

    $pagination_children.removeClass('current');
    $pagination_children.eq(i)
      .addClass('current');
  },
  _addItem: function(i) {
    var slide_number = i + 1,
        href = slide_number,
        $slide = that.$container.children().eq(i),
        slide_id = $slide.attr('id');

    if (slide_id) {
      href = slide_id;
    }

    var $item = $("<a>", {
      'href': "#" + href,
      'text': href
    });

    $item.appendTo(that.$pagination);
  },
  _setup: function() {
    if (!that.options.pagination || that.size() === 1) { return; }

    var $pagination = $("<nav>", {
      'class': that.options.elements.pagination.replace(/^\./, '')
    });

    that.$pagination = $pagination.appendTo(that.$el);

    for (var i = 0; i < that.size(); i++) {
      that.pagination._addItem(i);
    }
  },
  _events: function() {
    that.$el.on('click', that.options.elements.pagination + ' a', function(e) {
      e.preventDefault();

      var hash  = that._parseHash(this.hash), index;
      index = that._upcomingSlide(hash, true);

      if (index !== that.current) {
        that.animate(index, function() {
          that.start();
        });
      }
    });
  }
};

  this.css = css;
  this.image = image;
  this.pagination = pagination;
  this.fx = fx;
  this.animation = this.fx[this.options.animation];

  this.$control = this.$container.wrap($control).parent('.slides-control');

  that._findPositions();
  that.width  = that._findWidth();
  that.height = that._findHeight();

  this.css.children();
  this.css.containers();
  this.css.images();
  this.pagination._setup();

  return initialize();
};

Superslides.prototype = {
  _findWidth: function() {
    return $(this.options.inherit_width_from).width();
  },
  _findHeight: function() {
    return $(this.options.inherit_height_from).height();
  },

  _findMultiplier: function() {
    return this.size() === 1 ? 1 : 3;
  },

  _upcomingSlide: function(direction, from_hash_change) {
    if (from_hash_change && !isNaN(direction)) {
      direction = direction - 1;
    }

    if ((/next/).test(direction)) {
      return this._nextInDom();

    } else if ((/prev/).test(direction)) {
      return this._prevInDom();

    } else if ((/\d/).test(direction)) {
      return +direction;

    } else if (direction && (/\w/).test(direction)) {
      var index = this._findSlideById(direction);
      if (index >= 0) {
        return index;
      } else {
        return 0;
      }

    } else {
      return 0;
    }
  },

  _findSlideById: function(id) {
    return this.$container.find('#' + id).index();
  },

  _findPositions: function(current, thisRef) {
    thisRef = thisRef || this;

    if (current === undefined) {
      current = -1;
    }

    thisRef.current = current;
    thisRef.next    = thisRef._nextInDom();
    thisRef.prev    = thisRef._prevInDom();
  },

  _nextInDom: function() {
    var index = this.current + 1;

    if (index === this.size()) {
      index = 0;
    }

    return index;
  },

  _prevInDom: function() {
    var index = this.current - 1;

    if (index < 0) {
      index = this.size() - 1;
    }

    return index;
  },

  _parseHash: function(hash) {
    hash = hash || window.location.hash;
    hash = hash.replace(/^#/, '');

    if (hash && !isNaN(+hash)) {
      hash = +hash;
    }

    return hash;
  },

  size: function() {
    return this.$container.children().length;
  },

  destroy: function() {
    return this.$el.removeData();
  },

  update: function() {
    this.css.children();
    this.css.containers();
    this.css.images();

    this.pagination._addItem(this.size())

    this._findPositions(this.current);
    this.$el.trigger('updated.slides');
  },

  stop: function() {
    clearInterval(this.play_id);
    delete this.play_id;

    this.$el.trigger('stopped.slides');
  },

  start: function() {
    var that = this;

    if (that.options.hashchange) {
      $(window).trigger('hashchange');
    } else {
      this.animate();
    }

    if (this.options.play) {
      if (this.play_id) {
        this.stop();
      }

      this.play_id = setInterval(function() {
        that.animate();
      }, this.options.play);
    }

    this.$el.trigger('started.slides');
  },

  animate: function(direction, userCallback) {
    var that = this,
        orientation = {};

    if (this.animating) {
      return;
    }

    this.animating = true;

    if (direction === undefined) {
      direction = 'next';
    }

    orientation.upcoming_slide = this._upcomingSlide(direction);

    if (orientation.upcoming_slide >= this.size()) {
      return;
    }

    orientation.outgoing_slide    = this.current;
    orientation.upcoming_position = this.width * 2;
    orientation.offset            = -orientation.upcoming_position;

    if (direction === 'prev' || direction < orientation.outgoing_slide) {
      orientation.upcoming_position = 0;
      orientation.offset            = 0;
    }

    if (that.size() > 1) {
      that.pagination._setCurrent(orientation.upcoming_slide);
    }

    if (that.options.hashchange) {
      var hash = orientation.upcoming_slide + 1,
          id = that.$container.children(':eq(' + orientation.upcoming_slide + ')').attr('id');

      if (id) {
        window.location.hash = id;
      } else {
        window.location.hash = hash;
      }
    }
    if (that.size() === 1) {
      that.stop();
      that.options.play = 0;
      that.options.animation_speed = 0;
      orientation.upcoming_slide    = 0;
      orientation.outgoing_slide    = -1;
    }
    that.$el.trigger('animating.slides', [orientation]);

    that.animation(orientation, function() {
      that._findPositions(orientation.upcoming_slide, that);

      if (typeof userCallback === 'function') {
        userCallback();
      }

      that.animating = false;
      that.$el.trigger('animated.slides');

      if (!that.init) {
        that.$el.trigger('init.slides');
        that.init = true;
        that.$container.fadeIn('fast');
      }
    });
  }
};

// jQuery plugin definition

$.fn[plugin] = function(option, args) {
  var result = [];

  this.each(function() {
    var $this, data, options;

    $this = $(this);
    data = $this.data(plugin);
    options = typeof option === 'object' && option;

    if (!data) {
      result = $this.data(plugin, (data = new Superslides(this, options)));
    }

    if (typeof option === "string") {
      result = data[option];
      if (typeof result === 'function') {
        return result = result.call(data, args);
      }
    }
  });

  return result;
};

$.fn[plugin].fx = {};

})(this, jQuery);
;
/**
 * @file
 */

(function ($) {
  'use strict';

  function do_slide(autoplaySelector, autoplayInterval) {
    setInterval(
    function () {
      jQuery(autoplaySelector).click();
    }, autoplayInterval
   );
  }

  Drupal.behaviors.superSlides = {
    attach: function (context, settings) {
            // jQuery once ensures that code does not run after an AJAX or other function that calls Drupal.attachBehaviors().
      $('body').once('superSlides').each(
                function () {

                  var superslidesView = settings.views.superslidesViews;

                  for (var i in superslidesView) {

                    if (!superslidesView.hasOwnProperty(i)) {
                      continue;
                    }

                    var obj = superslidesView[i];

                    for (var prop in obj) {
                      if (obj.hasOwnProperty(prop)) {

                        var selector = '#slider-dom-id-' + obj.view_dom_id.trim();
                        var autoplay = obj.autoplay;
                        var autoplayInterval = parseInt(obj.autoplayinterval);
                        var slideshow_animation = obj.slideshow_animation;

                        if (autoplay === 1) {
                          var autoplaySelector = selector + ' .slides-navigation .next';
                          do_slide(autoplaySelector, autoplayInterval);
                        }

                        if (slideshow_animation !== null) {
                          $(selector).superslides(
                            {
                              hashchange: false,
                              animation: slideshow_animation
                            }
                                );
                        }
			else {
			  $(selector).superslides(
                            {
                              hashchange: false
                            }
                                );
			}
                      }
                    }
                  }
                }
            );
    }
  };
})(jQuery);
;
