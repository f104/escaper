/*!
 * Materialize v0.98.2 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
;/*
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
 */;// Custom Easing
jQuery.extend( jQuery.easing,
{
  easeInOutMaterial: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return c/4*((t-=2)*t*t + 2) + b;
  }
});;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));
;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));
;// Required for Meteor package, the use of window prevents export by Meteor
(function(window){
  if(window.Package){
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);


/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function(window) {
  var lastTime = 0,
    vendors = ['webkit', 'moz'],
    requestAnimationFrame = window.requestAnimationFrame,
    cancelAnimationFrame = window.cancelAnimationFrame,
    i = vendors.length;

  // try to un-prefix existing raf
  while (--i >= 0 && !requestAnimationFrame) {
    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
  }

  // polyfill with setTimeout fallback
  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback) {
      var now = +Date.now(),
        nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function() {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    cancelAnimationFrame = clearTimeout;
  }

  // export to window
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
}(window));


/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
Materialize.objectSelectorString = function(obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g,'');
};


// Unique Random ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function(hash) {
  return hash.replace( /(:|\.|\[|\]|,|=)/g, "\\$1" );
};

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};


/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = (Date.now || function () {
  return new Date().getTime();
});


/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
Materialize.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};


// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
  Vel = jQuery.Velocity;
} else if ($) {
  Vel = $.Velocity;
} else {
  Vel = Velocity;
}
;(function ($) {
  $.fn.collapsible = function(options, methodParam) {
    var defaults = {
      accordion: undefined,
      onOpen: undefined,
      onClose: undefined
    };

    var methodName = options;
    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      /****************
      Helper Functions
      ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');

        // Close previously open accordion elements.
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).each(function() {
          if ($(this).is(':visible')) {
            $(this).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete:
                function() {
                  $(this).css('height', '');
                  execCallbacks($(this).siblings('.collapsible-header'));
                }
            });
          }
        });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else {
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
      }

      // Open collapsible. object: .collapsible-header
      function collapsibleOpen(object, noToggle) {
        if (!noToggle) {
          object.toggleClass('active');
        }

        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
          accordionOpen(object);
        } else { // Handle Expandables
          expandableOpen(object);
        }

        execCallbacks(object);
      }

      // Handle callbacks
      function execCallbacks(object) {
        if (object.hasClass('active')) {
          if (typeof(options.onOpen) === "function") {
            options.onOpen.call(this, object.parent());
          }
        } else {
          if (typeof(options.onClose) === "function") {
            options.onClose.call(this, object.parent());
          }
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }


      // Turn off any existing event handlers
      function removeEventHandlers() {
        $this.off('click.collapse', '> li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/


      // Methods
      if (methodName === 'destroy') {
        removeEventHandlers();
        return;
      } else if (methodParam >= 0 &&
          methodParam < $panel_headers.length) {
        var $curr_header = $panel_headers.eq(methodParam);
        if ($curr_header.length &&
            (methodName === 'open' ||
            (methodName === 'close' &&
            $curr_header.hasClass('active')))) {
          collapsibleOpen($curr_header);
        }
        return;
      }


      removeEventHandlers();


      // Add click handler to only direct collapsible header children
      $this.on('click.collapse', '> li > .collapsible-header', function(e) {
        var element = $(e.target);

        if (isChildrenOfPanelHeader(element)) {
          element = getPanelHeader(element);
        }

        collapsibleOpen(element);
      });


      // Open first active
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        collapsibleOpen($panel_headers.filter('.active').first(), true);

      } else { // Handle Expandables
        $panel_headers.filter('.active').each(function() {
          collapsibleOpen($(this), true);
        });
      }

    });
  };

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}( jQuery ));;(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === "open") {
      this.each(function() {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === "close") {
      this.each(function() {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function(){
      var origin = $(this);
      var curr_options = $.extend({}, defaults, options);
      var isFocused = false;

      // Dropdown menu
      var activates = $("#"+ origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined)
          curr_options.inDuration = origin.data('induration');
        if (origin.data('outduration') !== undefined)
          curr_options.outDuration = origin.data('outduration');
        if (origin.data('constrainwidth') !== undefined)
          curr_options.constrainWidth = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined)
          curr_options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined)
          curr_options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined)
          curr_options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined)
          curr_options.alignment = origin.data('alignment');
        if (origin.data('stoppropagation') !== undefined)
          curr_options.stopPropagation = origin.data('stoppropagation');
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        // Constrain width
        if (curr_options.constrainWidth === true) {
          activates.css('width', origin.outerWidth());

        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = curr_options.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        // Below Origin
        var verticalOffset = 0;
        if (curr_options.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }


        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';

        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = curr_options.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        }
        else if (currAlignment === 'right') {
          var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
          gutterSpacing = -curr_options.gutter;
          leftPosition =  offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });


        // Show dropdown
        activates.stop(true, true).css('opacity', 0)
          .slideDown({
            queue: false,
            duration: curr_options.inDuration,
            easing: 'easeOutCubic',
            complete: function() {
              $(this).css('height', '');
            }
          })
          .animate( {opacity: 1}, {queue: false, duration: curr_options.inDuration, easing: 'easeOutSine'});

        // Add click close handler to document
        setTimeout(function() {
          $(document).bind('click.'+ activates.attr('id'), function (e) {
            hideDropdown();
            $(document).unbind('click.'+ activates.attr('id'));
          });
        }, 0);
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(curr_options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        $(document).unbind('click.'+ activates.attr('id'));
        setTimeout(function() { activates.css('max-height', ''); }, curr_options.outDuration);
      }

      // Hover
      if (curr_options.hover) {
        var open = false;
        origin.unbind('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function(e){ // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function(e){
          // If hover on origin then to something other than dropdown content, then close
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if(!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function(e){ // Mouse out
          var toEl = e.toElement || e.relatedTarget;
          if(!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.unbind('click.' + origin.attr('id'));
        origin.bind('click.'+origin.attr('id'), function(e){
          if (!isFocused) {
            if ( origin[0] == e.currentTarget &&
                 !origin.hasClass('active') &&
                 ($(e.target).closest('.dropdown-content').length === 0)) {
              e.preventDefault(); // Prevents button click from moving window
              if (curr_options.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            }
            // If origin is clicked and menu is open, close menu
            else if (origin.hasClass('active')) {
              hideDropdown();
              $(document).unbind('click.'+ activates.attr('id'));
            }
          }
        });

      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function(e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);


    });
  }; // End dropdown plugin

  $(document).ready(function(){
    $('.dropdown-button').dropdown();
  });
}( jQuery ));
;(function($) {
  var _stack = 0,
  _lastID = 0,
  _generateID = function() {
    _lastID++;
    return 'materialize-modal-overlay-' + _lastID;
  };

  var methods = {
    init : function(options) {
      var defaults = {
        opacity: 0.5,
        inDuration: 350,
        outDuration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        startingTop: '4%',
        endingTop: '10%'
      };

      // Override defaults
      options = $.extend(defaults, options);

      return this.each(function() {
        var $modal = $(this);
        var modal_id = $(this).attr("id") || '#' + $(this).data('target');

        var closeModal = function() {
          var overlayID = $modal.data('overlay-id');
          var $overlay = $('#' + overlayID);
          $modal.removeClass('open');

          // Enable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $modal.find('.modal-close').off('click.close');
          $(document).off('keyup.modal' + overlayID);

          $overlay.velocity( { opacity: 0}, {duration: options.outDuration, queue: false, ease: "easeOutQuart"});


          // Define Bottom Sheet animation
          var exitVelocityOptions = {
            duration: options.outDuration,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function() {
              $(this).css({display:"none"});

              // Call complete callback
              if (typeof(options.complete) === "function") {
                options.complete.call(this, $modal);
              }
              $overlay.remove();
              _stack--;
            }
          };
          if ($modal.hasClass('bottom-sheet')) {
            $modal.velocity({bottom: "-100%", opacity: 0}, exitVelocityOptions);
          }
          else {
            $modal.velocity(
              { top: options.startingTop, opacity: 0, scaleX: 0.7},
              exitVelocityOptions
            );
          }
        };

        var openModal = function($trigger) {
          var $body = $('body');
          var oldWidth = $body.innerWidth();
          $body.css('overflow', 'hidden');
          $body.width(oldWidth);

          if ($modal.hasClass('open')) {
            return;
          }

          var overlayID = _generateID();
          var $overlay = $('<div class="modal-overlay"></div>');
          lStack = (++_stack);

          // Store a reference of the overlay
          $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
          $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
          $modal.addClass('open');

          $("body").append($overlay);

          if (options.dismissible) {
            $overlay.click(function() {
              closeModal();
            });
            // Return on ESC
            $(document).on('keyup.modal' + overlayID, function(e) {
              if (e.keyCode === 27) {   // ESC key
                closeModal();
              }
            });
          }

          $modal.find(".modal-close").on('click.close', function(e) {
            closeModal();
          });

          $overlay.css({ display : "block", opacity : 0 });

          $modal.css({
            display : "block",
            opacity: 0
          });

          $overlay.velocity({opacity: options.opacity}, {duration: options.inDuration, queue: false, ease: "easeOutCubic"});
          $modal.data('associated-overlay', $overlay[0]);

          // Define Bottom Sheet animation
          var enterVelocityOptions = {
            duration: options.inDuration,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function() {
              if (typeof(options.ready) === "function") {
                options.ready.call(this, $modal, $trigger);
              }
            }
          };
          if ($modal.hasClass('bottom-sheet')) {
            $modal.velocity({bottom: "0", opacity: 1}, enterVelocityOptions);
          }
          else {
            $.Velocity.hook($modal, "scaleX", 0.7);
            $modal.css({ top: options.startingTop });
            $modal.velocity({top: options.endingTop, opacity: 1, scaleX: '1'}, enterVelocityOptions);
          }

        };

        // Reset handlers
        $(document).off('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]');
        $(this).off('openModal');
        $(this).off('closeModal');

        // Close Handlers
        $(document).on('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]', function(e) {
          options.startingTop = ($(this).offset().top - $(window).scrollTop()) /1.15;
          openModal($(this));
          e.preventDefault();
        }); // done set on click

        $(this).on('openModal', function() {
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          openModal();
        });

        $(this).on('closeModal', function() {
          closeModal();
        });
      }); // done return
    },
    open : function() {
      $(this).trigger('openModal');
    },
    close : function() {
      $(this).trigger('closeModal');
    }
  };

  $.fn.modal = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.modal' );
    }
  };
})(jQuery);
;(function ($) {

  $.fn.materialbox = function () {

    return this.each(function() {

      if ($(this).hasClass('initialized')) {
        return;
      }

      $(this).addClass('initialized');

      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;
      var ancestorsChanged;
      var ancestor;
      var originInlineStyles = origin.attr('style');
      origin.wrap(placeholder);


      origin.on('click', function(){
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();


        // If already modal, return to original
        if (doneAnimating === false) {
          returnToOriginal();
          return false;
        }
        else if (overlayActive && doneAnimating===true) {
          returnToOriginal();
          return false;
        }


        // Set states
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;

        // Set positioning for placeholder
        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        });

        // Find ancestor with overflow: hidden; and remove it
        ancestorsChanged = undefined;
        ancestor = placeholder[0].parentNode;
        var count = 0;
        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);
          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');
            if (ancestorsChanged === undefined) {
              ancestorsChanged = curr;
            }
            else {
              ancestorsChanged = ancestorsChanged.add(curr);
            }
          }
          ancestor = ancestor.parentNode;
        }

        // Set css on origin
        origin.css({
          position: 'absolute',
          'z-index': 1000,
          'will-change': 'left, top, width, height'
        })
        .data('width', originalWidth)
        .data('height', originalHeight);

        // Add overlay
        var overlay = $('<div id="materialbox-overlay"></div>')
          .css({
            opacity: 0
          })
          .click(function(){
            if (doneAnimating === true)
            returnToOriginal();
          });

        // Put before in origin image to preserve z-index layering.
        origin.before(overlay);

        // Set dimensions if needed
        var overlayOffset = overlay[0].getBoundingClientRect();
        overlay.css({
          width: windowWidth,
          height: windowHeight,
          left: -1 * overlayOffset.left,
          top: -1 * overlayOffset.top
        })

        // Animate Overlay
        overlay.velocity({opacity: 1},
                           {duration: inDuration, queue: false, easing: 'easeOutQuad'} );

        // Add and animate caption if it exists
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div>');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({ "display": "inline" });
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});
        }

        // Resize Image
        var ratio = 0;
        var widthPercent = originalWidth / windowWidth;
        var heightPercent = originalHeight / windowHeight;
        var newWidth = 0;
        var newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = windowWidth * 0.9;
          newHeight = windowWidth * 0.9 * ratio;
        }
        else {
          ratio = originalWidth / originalHeight;
          newWidth = (windowHeight * 0.9) * ratio;
          newHeight = windowHeight * 0.9;
        }

        // Animate image + set z-index
        if(origin.hasClass('responsive-img')) {
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,
            complete: function(){
              origin.css({left: 0, top: 0})
              .velocity(
                {
                  height: newHeight,
                  width: newWidth,
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },
                {
                  duration: inDuration,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function(){doneAnimating = true;}
                }
              );
            } // End Complete
          }); // End Velocity
        }
        else {
          origin.css('left', 0)
          .css('top', 0)
          .velocity(
            {
              height: newHeight,
              width: newWidth,
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },
            {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad',
              complete: function(){doneAnimating = true;}
            }
            ); // End Velocity
        }

      }); // End origin on click


      // Return on scroll
      $(window).scroll(function() {
        if (overlayActive) {
          returnToOriginal();
        }
      });

      // Return on ESC
      $(document).keyup(function(e) {

        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key
          if (overlayActive) {
            returnToOriginal();
          }
        }
      });


      // This function returns the modaled image to the original spot
      function returnToOriginal() {

        doneAnimating = false;

        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.data('width');
        var originalHeight = origin.data('height');

        origin.velocity("stop", true);
        $('#materialbox-overlay').velocity("stop", true);
        $('.materialbox-caption').velocity("stop", true);


        $('#materialbox-overlay').velocity({opacity: 0}, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function(){
            // Remove Overlay
            overlayActive = false;
            $(this).remove();
          }
        });

        // Resize Image
        origin.velocity(
          {
            width: originalWidth,
            height: originalHeight,
            left: 0,
            top: 0
          },
          {
            duration: outDuration,
            queue: false, easing: 'easeOutQuad',
            complete: function() {
              placeholder.css({
                height: '',
                width: '',
                position: '',
                top: '',
                left: ''
              });

              origin.removeAttr('style');
              origin.attr('style', originInlineStyles);

              // Remove class
              origin.removeClass('active');
              doneAnimating = true;

              // Remove overflow overrides on ancestors
              if (ancestorsChanged) {
                ancestorsChanged.css('overflow', '');
              }
            }
          }
        );

        // Remove Caption + reset css settings on image
        $('.materialbox-caption').velocity({opacity: 0}, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function(){
            $(this).remove();
          }
        });

      }
    });
  };

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

}( jQuery ));
;(function ($) {

  $.fn.parallax = function () {
    var window_width = $(window).width();
    // Parallax Scripts
    return this.each(function(i) {
      var $this = $(this);
      $this.addClass('parallax');

      function updateParallax(initial) {
        var container_height;
        if (window_width < 601) {
          container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
        }
        else {
          container_height = ($this.height() > 0) ? $this.height() : 500;
        }
        var $img = $this.children("img").first();
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round((parallax_dist * percentScrolled));

        if (initial) {
          $img.css('display', 'block');
        }
        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
        }

      }

      // Wait for image load
      $this.children("img").one("load", function() {
        updateParallax(true);
      }).each(function() {
        if (this.complete) $(this).trigger("load");
      });

      $(window).scroll(function() {
        window_width = $(window).width();
        updateParallax(false);
      });

      $(window).resize(function() {
        window_width = $(window).width();
        updateParallax(false);
      });

    });

  };
}( jQuery ));
;(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        onShow: null,
        swipeable: false,
        responsiveThreshold: Infinity, // breakpoint for swipeable
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function(i) {

      var uniqueNamespace = namespace+i;

      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $this = $(this),
          window_width = $(window).width();

      var $active, $content, $links = $this.find('li.tab a'),
          $tabs_width = $this.width(),
          $tabs_content = $(),
          $tabs_wrapper,
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
          $indicator,
          index = prev_index = 0,
          clicked = false,
          clickedTimeout,
          transition = 300;


      // Finds right attribute for indicator based on active tab.
      // el: jQuery Object
      var calcRightPos = function(el) {
        return Math.ceil($tabs_width - el.position().left - el.outerWidth() - $this.scrollLeft());
      };

      // Finds left attribute for indicator based on active tab.
      // el: jQuery Object
      var calcLeftPos = function(el) {
        return Math.floor(el.position().left + $this.scrollLeft());
      };

      // Animates Indicator to active tab.
      // prev_index: Number
      var animateIndicator = function(prev_index) {
        if ((index - prev_index) >= 0) {
          $indicator.velocity({"right": calcRightPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": calcLeftPos($active) }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});

        } else {
          $indicator.velocity({"left": calcLeftPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"right": calcRightPos($active) }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});
        }
      };

      // Change swipeable according to responsive threshold
      if (options.swipeable) {
        if (window_width > options.responsiveThreshold) {
          options.swipeable = false;
        }
      }


      // If the location.hash matches one of the links, use that as the active tab.
      $active = $($links.filter('[href="'+location.hash+'"]'));

      // If no match is found, use the first link or any with class 'active' as the initial active tab.
      if ($active.length === 0) {
        $active = $(this).find('li.tab a.active').first();
      }
      if ($active.length === 0) {
        $active = $(this).find('li.tab a').first();
      }

      $active.addClass('active');
      index = $links.index($active);
      if (index < 0) {
        index = 0;
      }

      if ($active[0] !== undefined) {
        $content = $($active[0].hash);
        $content.addClass('active');
      }

      // append indicator then set indicator width to tab width
      if (!$this.find('.indicator').length) {
        $this.append('<div class="indicator"></div>');
      }
      $indicator = $this.find('.indicator');

      // we make sure that the indicator is at the end of the tabs
      $this.append($indicator);

      if ($this.is(":visible")) {
        // $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
        // $indicator.css({"left": index * $tab_width});
        setTimeout(function() {
          $indicator.css({"right": calcRightPos($active) });
          $indicator.css({"left": calcLeftPos($active) });
        }, 0);
      }
      $(window).off('resize.tabs-'+uniqueNamespace).on('resize.tabs-'+uniqueNamespace, function () {
        $tabs_width = $this.width();
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
        if (index < 0) {
          index = 0;
        }
        if ($tab_width !== 0 && $tabs_width !== 0) {
          $indicator.css({"right": calcRightPos($active) });
          $indicator.css({"left": calcLeftPos($active) });
        }
      });

      // Initialize Tabs Content.
      if (options.swipeable) {
        // TODO: Duplicate calls with swipeable? handle multiple div wrapping.
        $links.each(function () {
          var $curr_content = $(Materialize.escapeHash(this.hash));
          $curr_content.addClass('carousel-item');
          $tabs_content = $tabs_content.add($curr_content);
        });
        $tabs_wrapper = $tabs_content.wrapAll('<div class="tabs-content carousel"></div>');
        $tabs_content.css('display', '');
        $('.tabs-content.carousel').carousel({
          fullWidth: true,
          noWrap: true,
          onCycleTo: function(item) {
            if (!clicked) {
              var prev_index = index;
              index = $tabs_wrapper.index(item);
              $active = $links.eq(index);
              animateIndicator(prev_index);
            }
          },
        });
      } else {
        // Hide the remaining content
        $links.not($active).each(function () {
          $(Materialize.escapeHash(this.hash)).hide();
        });
      }


      // Bind the click event handler
      $this.off('click.tabs').on('click.tabs', 'a', function(e) {
        if ($(this).parent().hasClass('disabled')) {
          e.preventDefault();
          return;
        }

        // Act as regular link if target attribute is specified.
        if (!!$(this).attr("target")) {
          return;
        }

        clicked = true;
        $tabs_width = $this.width();
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

        // Make the old tab inactive.
        $active.removeClass('active');
        var $oldContent = $content

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(Materialize.escapeHash(this.hash));
        $links = $this.find('li.tab a');
        var activeRect = $active.position();

        // Make the tab active.
        $active.addClass('active');
        prev_index = index;
        index = $links.index($(this));
        if (index < 0) {
          index = 0;
        }
        // Change url to current tab
        // window.location.hash = $active.attr('href');

        // Swap content
        if (options.swipeable) {
          if ($tabs_content.length) {
            $tabs_content.carousel('set', index);
          }
        } else {
          if ($content !== undefined) {
            $content.show();
            $content.addClass('active');
            if (typeof(options.onShow) === "function") {
              options.onShow.call(this, $content);
            }
          }

          if ($oldContent !== undefined &&
              !$oldContent.is($content)) {
            $oldContent.hide();
            $oldContent.removeClass('active');
          }
        }

        // Reset clicked state
        clickedTimeout = setTimeout(function(){ clicked = false; }, transition);

        // Update indicator
        animateIndicator(prev_index);

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    },
    select_tab : function( id ) {
      this.find('a[href="#' + id + '"]').trigger('click');
    }
  };

  $.fn.tabs = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tabs' );
    }
  };

  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
}( jQuery ));
;(function ($) {
    $.fn.tooltip = function (options) {
      var timeout = null,
      margin = -7;

      // Defaults
      var defaults = {
        delay: 350,
        tooltip: '',
        position: 'bottom',
        html: false
      };

      // Remove tooltip from the activator
      if (options === "remove") {
        this.each(function() {
          $('#' + $(this).attr('data-tooltip-id')).remove();
          $(this).off('mouseenter.tooltip mouseleave.tooltip');
        });
        return false;
      }

      options = $.extend(defaults, options);

      return this.each(function() {
        var tooltipId = Materialize.guid();
        var origin = $(this);

        // Destroy old tooltip
        if (origin.attr('data-tooltip-id')) {
          $('#' + origin.attr('data-tooltip-id')).remove();
        }

        origin.attr('data-tooltip-id', tooltipId);

        // Get attributes.
        var allowHtml,
            tooltipDelay,
            tooltipPosition,
            tooltipText,
            tooltipEl,
            backdrop;
        var setAttributes = function() {
          allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
          tooltipDelay = origin.attr('data-delay');
          tooltipDelay = (tooltipDelay === undefined || tooltipDelay === '') ?
              options.delay : tooltipDelay;
          tooltipPosition = origin.attr('data-position');
          tooltipPosition = (tooltipPosition === undefined || tooltipPosition === '') ?
              options.position : tooltipPosition;
          tooltipText = origin.attr('data-tooltip');
          tooltipText = (tooltipText === undefined || tooltipText === '') ?
              options.tooltip : tooltipText;
        };
        setAttributes();

        var renderTooltipEl = function() {
          var tooltip = $('<div class="material-tooltip"></div>');

          // Create Text span
          if (allowHtml) {
            tooltipText = $('<span></span>').html(tooltipText);
          } else{
            tooltipText = $('<span></span>').text(tooltipText);
          }

          // Create tooltip
          tooltip.append(tooltipText)
            .appendTo($('body'))
            .attr('id', tooltipId);

          // Create backdrop
          backdrop = $('<div class="backdrop"></div>');
          backdrop.appendTo(tooltip);
          return tooltip;
        };
        tooltipEl = renderTooltipEl();

        // Destroy previously binded events
        origin.off('mouseenter.tooltip mouseleave.tooltip');
        // Mouse In
        var started = false, timeoutRef;
        origin.on({'mouseenter.tooltip': function(e) {
          var showTooltip = function() {
            setAttributes();
            started = true;
            tooltipEl.velocity('stop');
            backdrop.velocity('stop');
            tooltipEl.css({ visibility: 'visible', left: '0px', top: '0px' });

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();
            var tooltipHeight = tooltipEl.outerHeight();
            var tooltipWidth = tooltipEl.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var backdropOffsetWidth = backdrop[0].offsetWidth;
            var backdropOffsetHeight = backdrop[0].offsetHeight;
            var scaleXFactor = 8;
            var scaleYFactor = 8;
            var scaleFactor = 0;
            var targetTop, targetLeft, newCoordinates;

            if (tooltipPosition === "top") {
              // Top Position
              targetTop = origin.offset().top - tooltipHeight - margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '-10px';
              backdrop.css({
                bottom: 0,
                left: 0,
                borderRadius: '14px 14px 0 0',
                transformOrigin: '50% 100%',
                marginTop: tooltipHeight,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }
            // Left Position
            else if (tooltipPosition === "left") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft =  origin.offset().left - tooltipWidth - margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '-10px';
              backdrop.css({
                top: '-7px',
                right: 0,
                width: '14px',
                height: '14px',
                borderRadius: '14px 0 0 14px',
                transformOrigin: '95% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: tooltipWidth
              });
            }
            // Right Position
            else if (tooltipPosition === "right") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft = origin.offset().left + originWidth + margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '+10px';
              backdrop.css({
                top: '-7px',
                left: 0,
                width: '14px',
                height: '14px',
                borderRadius: '0 14px 14px 0',
                transformOrigin: '5% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: '0px'
              });
            }
            else {
              // Bottom Position
              targetTop = origin.offset().top + origin.outerHeight() + margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '+10px';
              backdrop.css({
                top: 0,
                left: 0,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }

            // Set tooptip css placement
            tooltipEl.css({
              top: newCoordinates.y,
              left: newCoordinates.x
            });

            // Calculate Scale to fill
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdropOffsetWidth);
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdropOffsetHeight);
            scaleFactor = Math.max(scaleXFactor, scaleYFactor);

            tooltipEl.velocity({ translateY: tooltipVerticalMovement, translateX: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});
            backdrop.css({ visibility: 'visible' })
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
              .velocity({scaleX: scaleFactor, scaleY: scaleFactor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});
          };

          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

        // Mouse Out
        },
        'mouseleave.tooltip': function(){
          // Reset State
          started = false;
          clearTimeout(timeoutRef);

          // Animate back
          setTimeout(function() {
            if (started !== true) {
              tooltipEl.velocity({
                opacity: 0, translateY: 0, translateX: 0}, { duration: 225, queue: false});
              backdrop.velocity({opacity: 0, scaleX: 1, scaleY: 1}, {
                duration:225,
                queue: false,
                complete: function(){
                  backdrop.css({ visibility: 'hidden' });
                  tooltipEl.css({ visibility: 'hidden' });
                  started = false;}
              });
            }
          },225);
        }
        });
    });
  };

  var repositionWithinScreen = function(x, y, width, height) {
    var newX = x;
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return {x: newX, y: newY};
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));
;/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);
;Materialize.toast = function (message, displayLength, className, completeCallback) {
  className = className || "";

  var container = document.getElementById('toast-container');

  // Create toast container if it does not exist
  if (container === null) {
    // create notification container
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  // Select and append toast
  var newToast = createToast(message);

  // only append toast if message is not undefined
  if(message){
    container.appendChild(newToast);
  }

  newToast.style.opacity = 0;

  // Animate toast in
  Vel(newToast, {translateY: '-35px',  opacity: 1 }, {duration: 300,
    easing: 'easeOutCubic',
    queue: false});

  // Allows timer to be pause while being panned
  var timeLeft = displayLength;
  var counterInterval;
  if (timeLeft != null)  {
    counterInterval = setInterval (function(){
      if (newToast.parentNode === null)
        window.clearInterval(counterInterval);

      // If toast is not being dragged, decrease its time remaining
      if (!newToast.classList.contains('panning')) {
        timeLeft -= 20;
      }

      if (timeLeft <= 0) {
        // Animate toast out
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,
            easing: 'easeOutExpo',
            queue: false,
            complete: function(){
              // Call the optional callback
              if(typeof(completeCallback) === "function")
                completeCallback();
              // Remove toast after it times out
              this[0].parentNode.removeChild(this[0]);
            }
          });
        window.clearInterval(counterInterval);
      }
    }, 20);
  }



  function createToast(html) {

    // Create toast
    var toast = document.createElement('div');
    toast.classList.add('toast');
    if (className) {
      var classes = className.split(' ');

      for (var i = 0, count = classes.length; i < count; i++) {
        toast.classList.add(classes[i]);
      }
    }
  // If type of parameter is HTML Element
    if ( typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName==="string"
) {
      toast.appendChild(html);
    }
    else if (html instanceof jQuery) {
      // Check if it is jQuery object
      toast.appendChild(html[0]);
    }
    else {
      // Insert as text;
      toast.innerHTML = html;
    }
    // Bind hammer
    var hammerHandler = new Hammer(toast, {prevent_default: false});
    hammerHandler.on('pan', function(e) {
      var deltaX = e.deltaX;
      var activationDistance = 80;

      // Change toast state
      if (!toast.classList.contains('panning')){
        toast.classList.add('panning');
      }

      var opacityPercent = 1-Math.abs(deltaX / activationDistance);
      if (opacityPercent < 0)
        opacityPercent = 0;

      Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});

    });

    hammerHandler.on('panend', function(e) {
      var deltaX = e.deltaX;
      var activationDistance = 80;

      // If toast dragged past activation point
      if (Math.abs(deltaX) > activationDistance) {
        Vel(toast, {marginTop: '-40px'}, { duration: 375,
          easing: 'easeOutExpo',
          queue: false,
          complete: function(){
            if(typeof(completeCallback) === "function") {
              completeCallback();
            }
            toast.parentNode.removeChild(toast);
          }
        });

      } else {
        toast.classList.remove('panning');
        // Put toast back into original position
        Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
          easing: 'easeOutExpo',
          queue: false
        });

      }
    });

    return toast;
  }
};
;(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true
      };
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menuId = $this.attr('data-activates');
        var menu = $("#"+ menuId);

        // Set to width
        if (options.menuWidth != 300) {
          menu.css('width', options.menuWidth);
        }

        // Add Touch Area
        var $dragTarget = $('.drag-target[data-sidenav="' + menuId + '"]');
        if (options.draggable) {
          // Regenerate dragTarget
          if ($dragTarget.length) {
            $dragTarget.remove();
          }

          $dragTarget = $('<div class="drag-target"></div>').attr('data-sidenav', menuId);
          $('body').append($dragTarget);
        } else {
          $dragTarget = $();
        }

        if (options.edge == 'left') {
          menu.css('transform', 'translateX(-100%)');
          $dragTarget.css({'left': 0}); // Add Touch Area
        }
        else {
          menu.addClass('right-aligned') // Change text-alignment to right
            .css('transform', 'translateX(100%)');
          $dragTarget.css({'right': 0}); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu.hasClass('fixed')) {
            if (window.innerWidth > 992) {
              menu.css('transform', 'translateX(0)');
            }
          }

        // Window resize to reset on large screens fixed
        if (menu.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').length !== 0 && menuOut) {
                removeMenu(true);
              }
              else {
                // menu.removeAttr('style');
                menu.css('transform', 'translateX(0%)');
                // menu.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left') {
                menu.css('transform', 'translateX(-100%)');
              } else {
                menu.css('transform', 'translateX(100%)');
              }

            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu.on("click.itemclick", "a:not(.collapsible-header)", function(){
            removeMenu();
          });
        }

        var removeMenu = function(restoreNav) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200,
              queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $dragTarget.css({width: '', right: '', left: '0'});
            menu.velocity(
              {'translateX': '-100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            $dragTarget.css({width: '', right: '0', left: ''});
            menu.velocity(
              {'translateX': '100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }
              });
          }
        };



        // Touch Event
        var panning = false;
        var menuOut = false;

        if (options.draggable) {
          $dragTarget.on('click', function(){
            if (menuOut) {
              removeMenu();
            }
          });

          $dragTarget.hammer({
            prevent_default: false
          }).bind('pan', function(e) {

            if (e.gesture.pointerType == "touch") {

              var direction = e.gesture.direction;
              var x = e.gesture.center.x;
              var y = e.gesture.center.y;
              var velocityX = e.gesture.velocityX;

              // Disable Scrolling
              var $body = $('body');
              var $overlay = $('#sidenav-overlay');
              var oldWidth = $body.innerWidth();
              $body.css('overflow', 'hidden');
              $body.width(oldWidth);

              // If overlay does not exist, create one and if it is clicked, close menu
              if ($overlay.length === 0) {
                $overlay = $('<div id="sidenav-overlay"></div>');
                $overlay.css('opacity', 0).click( function(){
                  removeMenu();
                });
                $('body').append($overlay);
              }

              // Keep within boundaries
              if (options.edge === 'left') {
                if (x > options.menuWidth) { x = options.menuWidth; }
                else if (x < 0) { x = 0; }
              }

              if (options.edge === 'left') {
                // Left Direction
                if (x < (options.menuWidth / 2)) { menuOut = false; }
                // Right Direction
                else if (x >= (options.menuWidth / 2)) { menuOut = true; }
                menu.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');
              }
              else {
                // Left Direction
                if (x < (window.innerWidth - options.menuWidth / 2)) {
                  menuOut = true;
                }
                // Right Direction
                else if (x >= (window.innerWidth - options.menuWidth / 2)) {
                 menuOut = false;
               }
                var rightPos = (x - options.menuWidth / 2);
                if (rightPos < 0) {
                  rightPos = 0;
                }

                menu.css('transform', 'translateX(' + rightPos + 'px)');
              }


              // Percentage overlay
              var overlayPerc;
              if (options.edge === 'left') {
                overlayPerc = x / options.menuWidth;
                $overlay.velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
              }
              else {
                overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                $overlay.velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
              }
            }

          }).bind('panend', function(e) {

            if (e.gesture.pointerType == "touch") {
              var $overlay = $('#sidenav-overlay');
              var velocityX = e.gesture.velocityX;
              var x = e.gesture.center.x;
              var leftPos = x - options.menuWidth;
              var rightPos = x - options.menuWidth / 2;
              if (leftPos > 0 ) {
                leftPos = 0;
              }
              if (rightPos < 0) {
                rightPos = 0;
              }
              panning = false;

              if (options.edge === 'left') {
                // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
                if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                  // Return menu to open
                  if (leftPos !== 0) {
                    menu.velocity({'translateX': [0, leftPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                  }

                  $overlay.velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                  $dragTarget.css({width: '50%', right: 0, left: ''});
                  menuOut = true;
                }
                else if (!menuOut || velocityX > 0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });
                  // Slide menu closed
                  menu.velocity({'translateX': [-1 * options.menuWidth - 10, leftPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                  $overlay.velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      $(this).remove();
                    }});
                  $dragTarget.css({width: '10px', right: '', left: 0});
                }
              }
              else {
                if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                  // Return menu to open
                  if (rightPos !== 0) {
                    menu.velocity({'translateX': [0, rightPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                  }

                  $overlay.velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                  $dragTarget.css({width: '50%', right: '', left: 0});
                  menuOut = true;
                }
                else if (!menuOut || velocityX < -0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });

                  // Slide menu closed
                  menu.velocity({'translateX': [options.menuWidth + 10, rightPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                  $overlay.velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      $(this).remove();
                    }});
                  $dragTarget.css({width: '10px', right: 0, left: ''});
                }
              }

            }
          });
        }

        $this.off('click.sidenav').on('click.sidenav', function() {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          }
          else {

            // Disable Scrolling
            var $body = $('body');
            var $overlay = $('<div id="sidenav-overlay"></div>');
            var oldWidth = $body.innerWidth();
            $body.css('overflow', 'hidden');
            $body.width(oldWidth);

            // Push current drag target on top of DOM tree
            $('body').append($dragTarget);

            if (options.edge === 'left') {
              $dragTarget.css({width: '50%', right: 0, left: ''});
              menu.velocity({'translateX': [0, -1 * options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else {
              $dragTarget.css({width: '50%', right: '', left: 0});
              menu.velocity({'translateX': [0, options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }

            $overlay.css('opacity', 0)
            .click(function(){
              menuOut = false;
              panning = false;
              removeMenu();
              $overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function() {
                  $(this).remove();
                } });

            });
            $('body').append($overlay);
            $overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
              complete: function () {
                menuOut = true;
                panning = false;
              }
            });
          }

          return false;
        });
      });


    },
    destroy: function () {
      var $overlay = $('#sidenav-overlay');
      var $dragTarget = $('.drag-target[data-sidenav="' + $(this).attr('data-activates') + '"]');
      $overlay.trigger('click');
      $dragTarget.remove();
      $(this).off('click');
      $overlay.remove();
    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {
      $('#sidenav-overlay').trigger('click');
    }
  };


  $.fn.sideNav = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );
    }
  }; // Plugin end
}( jQuery ));
;/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var unique_id = 1;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			if (element.height() > 0) {
				var elTop = element.offset().top,
					elLeft = element.offset().left,
					elRight = elLeft + element.width(),
					elBottom = elTop + element.height();

				var isIntersect = !(elLeft > right ||
					elRight < left ||
					elTop > bottom ||
					elBottom < top);

				if (isIntersect) {
					hits.push(element);
				}
			}
		});

		return hits;
	}


	/**
	 * Called when the user scrolls the window
	 */
	function onScroll(scrollOffset) {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
		var intersections = findElements(top+offset.top + scrollOffset || 200, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {

			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}


	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
        throttle : number -> scrollspy throttling. Default: 100 ms
        offsetTop : number -> offset from top. Default: 0
        offsetRight : number -> offset from right. Default: 0
        offsetBottom : number -> offset from bottom. Default: 0
        offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
	  var defaults = {
			throttle: 100,
			scrollOffset: 200 // offset - 200 allows elements near bottom of page to scroll
    };
    options = $.extend(defaults, options);

		var visible = [];
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
			$(element).data("scrollSpy:id", i);
			// Smooth scroll to section
		  $('a[href="#' + $(element).attr('id') + '"]').click(function(e) {
		    e.preventDefault();
		    var offset = $(Materialize.escapeHash(this.hash)).offset().top + 1;
	    	$('html, body').animate({ scrollTop: offset - options.scrollOffset }, {duration: 400, queue: false, easing: 'easeOutCubic'});
		  });
		});

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = Materialize.throttle(function() {
			onScroll(options.scrollOffset);
		}, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);


		selector.on('scrollSpy:enter', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			var $this = $(this);

			if (visible[0]) {
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
					visible.unshift($(this));
				}
				else {
					visible.push($(this));
				}
			}
			else {
				visible.push($(this));
			}


			$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
		});
		selector.on('scrollSpy:exit', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			if (visible[0]) {
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
				var $this = $(this);
				visible = $.grep(visible, function(value) {
	        return value.attr('id') != $this.attr('id');
	      });
	      if (visible[0]) { // Check if empty
					$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
	      }
			}
		});

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', Materialize.throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);
;(function ($) {
  $(document).ready(function() {

    // Function to update labels of text fields
    Materialize.updateTextFields = function() {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {
        var $this = $(this);
        if ($(element).val().length > 0 || element.autofocus || $this.attr('placeholder') !== undefined) {
          $this.siblings('label').addClass('active');
        } else if ($(element)[0].validity) {
          $this.siblings('label').toggleClass('active', $(element)[0].validity.badInput === true);
        } else {
          $this.siblings('label').removeClass('active');
        }
      });
    };

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function(e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, .prefix').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this);
      var selector = ".prefix";

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        selector += ", label";
      }

      $inputElement.siblings(selector).removeClass('active');

      validate_field($inputElement);
    });

    window.validate_field = function(object) {
      var hasLength = object.attr('data-length') !== undefined;
      var lenAttr = parseInt(object.attr('data-length'));
      var len = object.val().length;

      if (object.val().length === 0 && object[0].validity.badInput === false) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      }
      else {
        if (object.hasClass('validate')) {
          // Check for character counter attributes
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
            object.removeClass('invalid');
            object.addClass('valid');
          }
          else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    };

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup.radio', radio_checkbox, function(e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === 9) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function(e) {

          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');
      var lineHeight = $textarea.css('line-height');

      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }
      if (lineHeight) { hiddenDiv.css('line-height', lineHeight); }

      if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal")
                 .css('white-space', "pre");
      }

      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);


      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      }
      else {
        hiddenDiv.css('width', $(window).width()/2);
      }

      /**
       * Resize if the new height is greater than the
       * original height of the textarea
       */
      if ($textarea.data("original-height") <= hiddenDiv.height()) {
        $textarea.css('height', hiddenDiv.height());
      } else if ($textarea.val().length < $textarea.data("previous-length")) {
        /**
         * In case the new height is less than original height, it
         * means the textarea has less text than before
         * So we set the height to the original one
         */
        $textarea.css('height', $textarea.data("original-height"));
      }
      $textarea.data("previous-length", $textarea.val().length);
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      /**
       * Instead of resizing textarea on document load,
       * store the original height and the original length
       */
      $textarea.data("original-height", $textarea.height());
      $textarea.data("previous-length", $textarea.val().length);
    });

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files      = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]';
    var range_mousedown = false;
    var left;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var showRangeBubble = function(thumb) {
      var paddingLeft = parseInt(thumb.parent().css('padding-left'));
      var marginLeft = (-7 + paddingLeft) + 'px';
      thumb.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: marginLeft}, { duration: 300, easing: 'easeOutExpo' });
    };

    var calcRangeOffset = function(range) {
      var width = range.width() - 15;
      var max = parseFloat(range.attr('max'));
      var min = parseFloat(range.attr('min'));
      var percent = (parseFloat(range.val()) - min) / (max - min);
      return percent * width;
    }

    var range_wrapper = '.range-field';
    $(document).on('change', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');
      thumb.find('.value').html($(this).val());

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      var offsetLeft = calcRangeOffset($(this));
      thumb.addClass('active').css('left', offsetLeft);
    });

    $(document).on('mousedown touchstart', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');

      // If thumb indicator does not exist yet, create it
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).after(thumb);
      }

      // Set indicator value
      thumb.find('.value').html($(this).val());

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      if (e.type !== 'input') {
        var offsetLeft = calcRangeOffset($(this));
        thumb.addClass('active').css('left', offsetLeft);
      }
    });

    $(document).on('mouseup touchend', range_wrapper, function() {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on('input mousemove touchmove', range_wrapper, function(e) {
      var thumb = $(this).children('.thumb');
      var left;
      var input = $(this).find(range_type);

      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          showRangeBubble(thumb);
        }

        var offsetLeft = calcRangeOffset(input);
        thumb.addClass('active').css('left', offsetLeft);
        thumb.find('.value').html(thumb.siblings(range_type).val());
      }
    });

    $(document).on('mouseout touchleave', range_wrapper, function() {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');
        var paddingLeft = parseInt($(this).css('padding-left'));
        var marginLeft = (7 + paddingLeft) + 'px';

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: marginLeft}, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });

    /**************************
     * Auto complete plugin  *
     *************************/
    $.fn.autocomplete = function (options) {
      // Defaults
      var defaults = {
        data: {},
        limit: Infinity,
        onAutocomplete: null,
        minLength: 1
      };

      options = $.extend(defaults, options);

      return this.each(function() {
        var $input = $(this);
        var data = options.data,
            count = 0,
            activeIndex = -1,
            oldVal,
            $inputDiv = $input.closest('.input-field'); // Div to append on

        // Check if data isn't empty
        if (!$.isEmptyObject(data)) {
          var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');
          var $oldAutocomplete;

          // Append autocomplete element.
          // Prevent double structure init.
          if ($inputDiv.length) {
            $oldAutocomplete = $inputDiv.children('.autocomplete-content.dropdown-content').first();
            if (!$oldAutocomplete.length) {
              $inputDiv.append($autocomplete); // Set ul in body
            }
          } else {
            $oldAutocomplete = $input.next('.autocomplete-content.dropdown-content');
            if (!$oldAutocomplete.length) {
              $input.after($autocomplete);
            }
          }
          if ($oldAutocomplete.length) {
            $autocomplete = $oldAutocomplete;
          }

          // Highlight partial match.
          var highlight = function(string, $el) {
            var img = $el.find('img');
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                matchEnd = matchStart + string.length - 1,
                beforeMatch = $el.text().slice(0, matchStart),
                matchText = $el.text().slice(matchStart, matchEnd + 1),
                afterMatch = $el.text().slice(matchEnd + 1);
            $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
            if (img.length) {
              $el.prepend(img);
            }
          };

          // Reset current element position
          var resetCurrentElement = function() {
            activeIndex = -1;
            $autocomplete.find('.active').removeClass('active');
          }

          // Remove autocomplete elements
          var removeAutocomplete = function() {
            $autocomplete.empty();
            resetCurrentElement();
            oldVal = undefined;
          };

          $input.off('blur.autocomplete').on('blur.autocomplete', function() {
            removeAutocomplete();
          });

          // Perform search
          $input.off('keyup.autocomplete focus.autocomplete').on('keyup.autocomplete focus.autocomplete', function (e) {
            // Reset count.
            count = 0;
            var val = $input.val().toLowerCase();

            // Don't capture enter or arrow key usage.
            if (e.which === 13 ||
                e.which === 38 ||
                e.which === 40) {
              return;
            }


            // Check if the input isn't empty
            if (oldVal !== val) {
              removeAutocomplete();

              if (val.length >= options.minLength) {
                for(var key in data) {
                  if (data.hasOwnProperty(key) &&
                      key.toLowerCase().indexOf(val) !== -1 &&
                      key.toLowerCase() !== val) {
                    // Break if past limit
                    if (count >= options.limit) {
                      break;
                    }

                    var autocompleteOption = $('<li></li>');
                    if (!!data[key]) {
                      autocompleteOption.append('<img src="'+ data[key] +'" class="right circle"><span>'+ key +'</span>');
                    } else {
                      autocompleteOption.append('<span>'+ key +'</span>');
                    }

                    $autocomplete.append(autocompleteOption);
                    highlight(val, autocompleteOption);
                    count++;
                  }
                }
              }
            }

            // Update oldVal
            oldVal = val;
          });

          $input.off('keydown.autocomplete').on('keydown.autocomplete', function (e) {
            // Arrow keys and enter key usage
            var keyCode = e.which,
                liElement,
                numItems = $autocomplete.children('li').length,
                $active = $autocomplete.children('.active').first();

            // select element on Enter
            if (keyCode === 13 && activeIndex >= 0) {
              liElement = $autocomplete.children('li').eq(activeIndex);
              if (liElement.length) {
                liElement.trigger('mousedown.autocomplete');
                e.preventDefault();
              }
              return;
            }

            // Capture up and down key
            if ( keyCode === 38 || keyCode === 40 ) {
              e.preventDefault();

              if (keyCode === 38 &&
                  activeIndex > 0) {
                activeIndex--;
              }

              if (keyCode === 40 &&
                  activeIndex < (numItems - 1)) {
                activeIndex++;
              }

              $active.removeClass('active');
              if (activeIndex >= 0) {
                $autocomplete.children('li').eq(activeIndex).addClass('active');
              }
            }
          });

          // Set input value
          $autocomplete.on('mousedown.autocomplete touchstart.autocomplete', 'li', function () {
            var text = $(this).text().trim();
            $input.val(text);
            $input.trigger('change');
            removeAutocomplete();

            // Handle onAutocomplete callback.
            if (typeof(options.onAutocomplete) === "function") {
              options.onAutocomplete.call(this, text);
            }
          });
        }
      });
    };

  }); // End of $(document).ready

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function(){
      var $select = $(this);

      if ($select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      var multiple = $select.attr('multiple') ? true : false,
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt

      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-'+lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if(callback === 'destroy') {
        $select.data('select-id', null).removeClass('initialized');
        return;
      }

      var uniqueID = Materialize.guid();
      $select.data('select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),
          valuesSelected = [],
          optionsHover = false;

      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";

      // Function that renders and appends the option taking into
      // account type and possible image icon.
      var appendOptionWithIcon = function(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';
        var optgroupClass = (type === 'optgroup-option') ? 'optgroup-option ' : '';
        var multipleCheckbox = multiple ? '<input type="checkbox"' + disabledClass + '/><label></label>' : '';

        // add icons
        var icon_url = option.data('icon');
        var classes = option.attr('class');
        if (!!icon_url) {
          var classString = '';
          if (!!classes) classString = ' class="' + classes + '"';

          // Check for multiple type.
          options.append($('<li class="' + disabledClass + optgroupClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span>' + multipleCheckbox + option.html() + '</span></li>'));
          return true;
        }

        // Check for multiple type.
        options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + multipleCheckbox + option.html() + '</span></li>'));
      };

      /* Create dropdown structure. */
      if (selectChildren.length) {
        selectChildren.each(function() {
          if ($(this).is('option')) {
            // Direct descendant option.
            if (multiple) {
              appendOptionWithIcon($select, $(this), 'multiple');

            } else {
              appendOptionWithIcon($select, $(this));
            }
          } else if ($(this).is('optgroup')) {
            // Optgroup.
            var selectOptions = $(this).children('option');
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

            selectOptions.each(function() {
              appendOptionWithIcon($select, $(this), 'optgroup-option');
            });
          }
        });
      }

      options.find('li:not(.optgroup)').each(function (i) {
        $(this).click(function (e) {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            var selected = true;

            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });
              selected = toggleEntryFromArray(valuesSelected, i, $select);
              $newSelect.trigger('focus');
            } else {
              options.find('li').removeClass('active');
              $(this).toggleClass('active');
              $newSelect.val($(this).text());
            }

            activateOption(options, $(this));
            $select.find('option').eq(i).prop('selected', selected);
            // Trigger onchange() event
            $select.trigger('change');
            if (typeof callback !== 'undefined') callback();
          }

          e.stopPropagation();
        });
      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<span class="caret">&#9660;</span>');
      if ($select.is(':disabled'))
        dropdownIcon.addClass('disabled');

      // escape double quotes
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $newSelect.after(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({'hover': false});
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on({
        'focus': function (){
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close');
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus']);
            var label = $(this).val();
            if (multiple && label.indexOf(',') >= 0) {
              label = label.split(',')[0];
            }

            var selectedOption = options.find('li').filter(function() {
              return $(this).text().toLowerCase() === label.toLowerCase();
            })[0];
            activateOption(options, selectedOption, true);
          }
        },
        'click': function (e){
          e.stopPropagation();
        }
      });

      $newSelect.on('blur', function() {
        if (!multiple) {
          $(this).trigger('close');
        }
        options.find('li.selected').removeClass('selected');
      });

      options.hover(function() {
        optionsHover = true;
      }, function () {
        optionsHover = false;
      });

      $(window).on({
        'click': function () {
          multiple && (optionsHover || $newSelect.trigger('close'));
        }
      });

      // Add initial multiple selections.
      if (multiple) {
        $select.find("option:selected:not(:disabled)").each(function () {
          var index = $(this).index();

          toggleEntryFromArray(valuesSelected, index, $select);
          options.find("li").eq(index).find(":checkbox").prop("checked", true);
        });
      }

      /**
       * Make option as selected and scroll to selected position
       * @param {jQuery} collection  Select options jQuery element
       * @param {Element} newOption  element of the new option
       * @param {Boolean} firstActivation  If on first activation of select
       */
      var activateOption = function(collection, newOption, firstActivation) {
        if (newOption) {
          collection.find('li.selected').removeClass('selected');
          var option = $(newOption);
          option.addClass('selected');
          if (!multiple || !!firstActivation) {
            options.scrollTo(option);
          }
        }
      };

      // Allow user to search by typing
      // this array is cleared after 1 second
      var filterQuery = [],
          onKeyDown = function(e){
            // TAB - switch to another input
            if(e.which == 9){
              $newSelect.trigger('close');
              return;
            }

            // ARROW DOWN WHEN SELECT IS CLOSED - open select options
            if(e.which == 40 && !options.is(':visible')){
              $newSelect.trigger('open');
              return;
            }

            // ENTER WHEN SELECT IS CLOSED - submit form
            if(e.which == 13 && !options.is(':visible')){
              return;
            }

            e.preventDefault();

            // CASE WHEN USER TYPE LETTERS
            var letter = String.fromCharCode(e.which).toLowerCase(),
                nonLetters = [9,13,27,38,40];
            if (letter && (nonLetters.indexOf(e.which) === -1)) {
              filterQuery.push(letter);

              var string = filterQuery.join(''),
                  newOption = options.find('li').filter(function() {
                    return $(this).text().toLowerCase().indexOf(string) === 0;
                  })[0];

              if (newOption) {
                activateOption(options, newOption);
              }
            }

            // ENTER - select option and close when select options are opened
            if (e.which == 13) {
              var activeOption = options.find('li.selected:not(.disabled)')[0];
              if(activeOption){
                $(activeOption).trigger('click');
                if (!multiple) {
                  $newSelect.trigger('close');
                }
              }
            }

            // ARROW DOWN - move to next not disabled option
            if (e.which == 40) {
              if (options.find('li.selected').length) {
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];
              } else {
                newOption = options.find('li:not(.disabled)')[0];
              }
              activateOption(options, newOption);
            }

            // ESC - close options
            if (e.which == 27) {
              $newSelect.trigger('close');
            }

            // ARROW UP - move to previous not disabled option
            if (e.which == 38) {
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
              if(newOption)
                activateOption(options, newOption);
            }

            // Automaticaly clean filter query so user can search again by starting letters
            setTimeout(function(){ filterQuery = []; }, 1000);
          };

      $newSelect.on('keydown', onKeyDown);
    });

    function toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
          notAdded = index === -1;

      if (notAdded) {
        entriesArray.push(entryIndex);
      } else {
        entriesArray.splice(index, 1);
      }

      select.siblings('ul.dropdown-content').find('li:not(.optgroup)').eq(entryIndex).toggleClass('active');

      // use notAdded instead of true (to detect if the option is selected or not)
      select.find('option').eq(entryIndex).prop('selected', notAdded);
      setValueToInput(entriesArray, select);

      return notAdded;
    }

    function setValueToInput(entriesArray, select) {
      var value = '';

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text();

        i === 0 ? value += text : value += ', ' + text;
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text();
      }

      select.siblings('input.select-dropdown').val(value);
    }
  };

}( jQuery ));
;(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        indicators: true,
        height: 400,
        transition: 500,
        interval: 6000
      };
      options = $.extend(defaults, options);

      return this.each(function() {

        // For each slider, we want to keep track of
        // which slide is active and its associated content
        var $this = $(this);
        var $slider = $this.find('ul.slides').first();
        var $slides = $slider.find('> li');
        var $active_index = $slider.find('.active').index();
        var $active, $indicators, $interval;
        if ($active_index != -1) { $active = $slides.eq($active_index); }

        // Transitions the caption depending on alignment
        function captionTransition(caption, duration) {
          if (caption.hasClass("center-align")) {
            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("right-align")) {
            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("left-align")) {
            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
          }
        }

        // This function will transition the slide to any index of the next slide
        function moveToSlide(index) {
          // Wrap around indices.
          if (index >= $slides.length) index = 0;
          else if (index < 0) index = $slides.length -1;

          $active_index = $slider.find('.active').index();

          // Only do if index changes
          if ($active_index != index) {
            $active = $slides.eq($active_index);
            $caption = $active.find('.caption');

            $active.removeClass('active');
            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
                              complete: function() {
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                              } });
            captionTransition($caption, options.transition);


            // Update indicators
            if (options.indicators) {
              $indicators.eq($active_index).removeClass('active');
            }

            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).addClass('active');


            // Update indicators
            if (options.indicators) {
              $indicators.eq(index).addClass('active');
            }
          }
        }

        // Set height of slider
        // If fullscreen, do nothing
        if (!$this.hasClass('fullscreen')) {
          if (options.indicators) {
            // Add height if indicators are present
            $this.height(options.height + 40);
          }
          else {
            $this.height(options.height);
          }
          $slider.height(options.height);
        }


        // Set initial positions of captions
        $slides.find('.caption').each(function () {
          captionTransition($(this), 0);
        });

        // Move img src into background-image
        $slides.find('img').each(function () {
          var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          if ($(this).attr('src') !== placeholderBase64) {
            $(this).css('background-image', 'url(' + $(this).attr('src') + ')' );
            $(this).attr('src', placeholderBase64);
          }
        });

        // dynamically add indicators
        if (options.indicators) {
          $indicators = $('<ul class="indicators"></ul>');
          $slides.each(function( index ) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Handle clicks on indicators
            $indicator.click(function () {
              var $parent = $slider.parent();
              var curr_index = $parent.find($(this)).index();
              moveToSlide(curr_index);

              // reset interval
              clearInterval($interval);
              $interval = setInterval(
                function(){
                  $active_index = $slider.find('.active').index();
                  if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                  else $active_index += 1;

                  moveToSlide($active_index);

                }, options.transition + options.interval
              );
            });
            $indicators.append($indicator);
          });
          $this.append($indicators);
          $indicators = $this.find('ul.indicators').find('li.indicator-item');
        }

        if ($active) {
          $active.show();
        }
        else {
          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

          $active_index = 0;
          $active = $slides.eq($active_index);

          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).addClass('active');
          }
        }

        // Adjust height to current slide
        $active.find('img').each(function() {
          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
        });

        // auto scroll
        $interval = setInterval(
          function(){
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index + 1);

          }, options.transition + options.interval
        );


        // HammerJS, Swipe navigation

        // Touch Event
        var panning = false;
        var swipeLeft = false;
        var swipeRight = false;

        $this.hammer({
            prevent_default: false
        }).bind('pan', function(e) {
          if (e.gesture.pointerType === "touch") {

            // reset interval
            clearInterval($interval);

            var direction = e.gesture.direction;
            var x = e.gesture.deltaX;
            var velocityX = e.gesture.velocityX;
            var velocityY = e.gesture.velocityY;

            $curr_slide = $slider.find('.active');
            if (Math.abs(velocityX) > Math.abs(velocityY)) {
              $curr_slide.velocity({ translateX: x
                  }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }

            // Swipe Left
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
              swipeRight = true;
            }
            // Swipe Right
            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
              swipeLeft = true;
            }

            // Make Slide Behind active slide visible
            var next_slide;
            if (swipeLeft) {
              next_slide = $curr_slide.next();
              if (next_slide.length === 0) {
                next_slide = $slides.first();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            if (swipeRight) {
              next_slide = $curr_slide.prev();
              if (next_slide.length === 0) {
                next_slide = $slides.last();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }


          }

        }).bind('panend', function(e) {
          if (e.gesture.pointerType === "touch") {

            $curr_slide = $slider.find('.active');
            panning = false;
            curr_index = $slider.find('.active').index();

            if (!swipeRight && !swipeLeft || $slides.length <=1) {
              // Return to original spot
              $curr_slide.velocity({ translateX: 0
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else if (swipeLeft) {
              moveToSlide(curr_index + 1);
              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            else if (swipeRight) {
              moveToSlide(curr_index - 1);
              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            swipeLeft = false;
            swipeRight = false;

            // Restart interval
            clearInterval($interval);
            $interval = setInterval(
              function(){
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);

              }, options.transition + options.interval
            );
          }
        });

        $this.on('sliderPause', function() {
          clearInterval($interval);
        });

        $this.on('sliderStart', function() {
          clearInterval($interval);
          $interval = setInterval(
            function(){
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
              else $active_index += 1;

              moveToSlide($active_index);

            }, options.transition + options.interval
          );
        });

        $this.on('sliderNext', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);
        });

        $this.on('sliderPrev', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index - 1);
        });

      });



    },
    pause : function() {
      $(this).trigger('sliderPause');
    },
    start : function() {
      $(this).trigger('sliderStart');
    },
    next : function() {
      $(this).trigger('sliderNext');
    },
    prev : function() {
      $(this).trigger('sliderPrev');
    }
  };


  $.fn.slider = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
    }
  }; // Plugin end
}( jQuery ));
;(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }
    });

  });
}( jQuery ));;(function ($) {
  var materialChipsDefaults = {
    data: [],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {},
  };

  $(document).ready(function() {
    // Handle removal of static chips.
    $(document).on('click', '.chip .close', function(e){
      var $chips = $(this).closest('.chips');
      if ($chips.attr('data-initialized')) {
        return;
      }
      $(this).closest('.chip').remove();
    });
  });

  $.fn.material_chip = function (options) {
    var self = this;
    this.$el = $(this);
    this.$document = $(document);
    this.SELS = {
      CHIPS: '.chips',
      CHIP: '.chip',
      INPUT: 'input',
      DELETE: '.material-icons',
      SELECTED_CHIP: '.selected',
    };

    if ('data' === options) {
      return this.$el.data('chips');
    }

    var curr_options = $.extend({}, materialChipsDefaults, options);
    self.hasAutocomplete = !$.isEmptyObject(curr_options.autocompleteOptions.data);

    // Initialize
    this.init = function() {
      var i = 0;
      var chips;
      self.$el.each(function(){
        var $chips = $(this);
        var chipId = Materialize.guid();
        self.chipId = chipId;

        if (!curr_options.data || !(curr_options.data instanceof Array)) {
          curr_options.data = [];
        }
        $chips.data('chips', curr_options.data);
        $chips.attr('data-index', i);
        $chips.attr('data-initialized', true);

        if (!$chips.hasClass(self.SELS.CHIPS)) {
          $chips.addClass('chips');
        }

        self.chips($chips, chipId);
        i++;
      });
    };

    this.handleEvents = function() {
      var SELS = self.SELS;

      self.$document.off('click.chips-focus', SELS.CHIPS).on('click.chips-focus', SELS.CHIPS, function(e){
        $(e.target).find(SELS.INPUT).focus();
      });

      self.$document.off('click.chips-select', SELS.CHIP).on('click.chips-select', SELS.CHIP, function(e){
        var $chip = $(e.target);
        if ($chip.length) {
          var wasSelected = $chip.hasClass('selected');
          var $chips = $chip.closest(SELS.CHIPS);
          $(SELS.CHIP).removeClass('selected');

          if (!wasSelected) {
            self.selectChip($chip.index(), $chips);
          }
        }
      });

      self.$document.off('keydown.chips').on('keydown.chips', function(e){
        if ($(e.target).is('input, textarea')) {
          return;
        }

        // delete
        var $chip = self.$document.find(SELS.CHIP + SELS.SELECTED_CHIP);
        var $chips = $chip.closest(SELS.CHIPS);
        var length = $chip.siblings(SELS.CHIP).length;
        var index;

        if (!$chip.length) {
          return;
        }

        if (e.which === 8 || e.which === 46) {
          e.preventDefault();

          index = $chip.index();
          self.deleteChip(index, $chips);

          var selectIndex = null;
          if ((index + 1) < length) {
            selectIndex = index;
          } else if (index === length || (index + 1) === length) {
            selectIndex = length - 1;
          }

          if (selectIndex < 0) selectIndex = null;

          if (null !== selectIndex) {
            self.selectChip(selectIndex, $chips);
          }
          if (!length) $chips.find('input').focus();

        // left
        } else if (e.which === 37) {
          index = $chip.index() - 1;
          if (index < 0) {
            return;
          }
          $(SELS.CHIP).removeClass('selected');
          self.selectChip(index, $chips);

        // right
        } else if (e.which === 39) {
          index = $chip.index() + 1;
          $(SELS.CHIP).removeClass('selected');
          if (index > length) {
            $chips.find('input').focus();
            return;
          }
          self.selectChip(index, $chips);
        }
      });

      self.$document.off('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.addClass('focus');
        $currChips.siblings('label, .prefix').addClass('active');
        $(SELS.CHIP).removeClass('selected');
      });

      self.$document.off('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.removeClass('focus');

        // Remove active if empty
        if (!$currChips.data('chips').length) {
          $currChips.siblings('label').removeClass('active');
        }
        $currChips.siblings('.prefix').removeClass('active');
      });

      self.$document.off('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT).on('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var chipsLength = $chips.children(SELS.CHIP).length;

        // enter
        if (13 === e.which) {
          // Override enter if autocompleting.
          if (self.hasAutocomplete &&
              $chips.find('.autocomplete-content.dropdown-content').length &&
              $chips.find('.autocomplete-content.dropdown-content').children().length) {
            return;
          }

          e.preventDefault();
          self.addChip({tag: $target.val()}, $chips);
          $target.val('');
          return;
        }

        // delete or left
        if ((8 === e.keyCode || 37 === e.keyCode) && '' === $target.val() && chipsLength) {
          e.preventDefault();
          self.selectChip(chipsLength - 1, $chips);
          $target.blur();
          return;
        }
      });

      // Click on delete icon in chip.
      self.$document.off('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE).on('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE, function(e) {
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var $chip = $target.closest(SELS.CHIP);
        e.stopPropagation();
        self.deleteChip($chip.index(), $chips);
        $chips.find('input').focus();
      });
    };

    this.chips = function($chips, chipId) {
      $chips.empty();
      $chips.data('chips').forEach(function(elem){
        $chips.append(self.renderChip(elem));
      });
      $chips.append($('<input id="' + chipId +'" class="input" placeholder="">'));
      self.setPlaceholder($chips);

      // Set for attribute for label
      var label = $chips.next('label');
      if (label.length) {
        label.attr('for', chipId);

        if ($chips.data('chips').length) {
          label.addClass('active');
        }
      }

      // Setup autocomplete if needed.
      var input = $('#' + chipId);
      if (self.hasAutocomplete) {
        curr_options.autocompleteOptions.onAutocomplete = function(val) {
          self.addChip({tag: val}, $chips);
          input.val('');
          input.focus();
        }
        input.autocomplete(curr_options.autocompleteOptions);
      }
    };

    /**
     * Render chip jQuery element.
     * @param {Object} elem
     * @return {jQuery}
     */
    this.renderChip = function(elem) {
      if (!elem.tag) return;

      var $renderedChip = $('<div class="chip"></div>');
      $renderedChip.text(elem.tag);
      $renderedChip.append($('<i class="material-icons close">close</i>'));
      return $renderedChip;
    };

    this.setPlaceholder = function($chips) {
      if ($chips.data('chips').length && curr_options.placeholder) {
        $chips.find('input').prop('placeholder', curr_options.placeholder);

      } else if (!$chips.data('chips').length && curr_options.secondaryPlaceholder) {
        $chips.find('input').prop('placeholder', curr_options.secondaryPlaceholder);
      }
    };

    this.isValid = function($chips, elem) {
      var chips = $chips.data('chips');
      var exists = false;
      for (var i=0; i < chips.length; i++) {
        if (chips[i].tag === elem.tag) {
            exists = true;
            return;
        }
      }
      return '' !== elem.tag && !exists;
    };

    this.addChip = function(elem, $chips) {
      if (!self.isValid($chips, elem)) {
        return;
      }
      var $renderedChip = self.renderChip(elem);
      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        newData.push(oldData[i]);
      }
      newData.push(elem);

      $chips.data('chips', newData);
      $renderedChip.insertBefore($chips.find('input'));
      $chips.trigger('chip.add', elem);
      self.setPlaceholder($chips);
    };

    this.deleteChip = function(chipIndex, $chips) {
      var chip = $chips.data('chips')[chipIndex];
      $chips.find('.chip').eq(chipIndex).remove();

      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        if (i !== chipIndex) {
          newData.push(oldData[i]);
        }
      }

      $chips.data('chips', newData);
      $chips.trigger('chip.delete', chip);
      self.setPlaceholder($chips);
    };

    this.selectChip = function(chipIndex, $chips) {
      var $chip = $chips.find('.chip').eq(chipIndex);
      if ($chip && false === $chip.hasClass('selected')) {
        $chip.addClass('selected');
        $chips.trigger('chip.select', $chips.data('chips')[chipIndex]);
      }
    };

    this.getChipsElement = function(index, $chips) {
      return $chips.eq(index);
    };

    // init
    this.init();

    this.handleEvents();
  };
}( jQuery ));
;(function ($) {
  $.fn.pushpin = function (options) {
    // Defaults
    var defaults = {
      top: 0,
      bottom: Infinity,
      offset: 0
    };

    // Remove pushpin event and classes
    if (options === "remove") {
      this.each(function () {
        if (id = $(this).data('pushpin-id')) {
          $(window).off('scroll.' + id);
          $(this).removeData('pushpin-id').removeClass('pin-top pinned pin-bottom').removeAttr('style');
        }
      });
      return false;
    }

    options = $.extend(defaults, options);


    $index = 0;
    return this.each(function() {
      var $uniqueId = Materialize.guid(),
          $this = $(this),
          $original_offset = $(this).offset().top;

      function removePinClasses(object) {
        object.removeClass('pin-top');
        object.removeClass('pinned');
        object.removeClass('pin-bottom');
      }

      function updateElements(objects, scrolled) {
        objects.each(function () {
          // Add position fixed (because its between top and bottom)
          if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
            removePinClasses($(this));
            $(this).css('top', options.offset);
            $(this).addClass('pinned');
          }

          // Add pin-top (when scrolled position is above top)
          if (scrolled < options.top && !$(this).hasClass('pin-top')) {
            removePinClasses($(this));
            $(this).css('top', 0);
            $(this).addClass('pin-top');
          }

          // Add pin-bottom (when scrolled position is below bottom)
          if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
            removePinClasses($(this));
            $(this).addClass('pin-bottom');
            $(this).css('top', options.bottom - $original_offset);
          }
        });
      }

      $(this).data('pushpin-id', $uniqueId);
      updateElements($this, $(window).scrollTop());
      $(window).on('scroll.' + $uniqueId, function () {
        var $scrolled = $(window).scrollTop() + options.offset;
        updateElements($this, $scrolled);
      });

    });

  };
}( jQuery ));;(function ($) {
  $(document).ready(function() {

    // jQuery reverse
    $.fn.reverse = [].reverse;

    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
      var $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
      var $this = $(this);
      closeFABMenu($this);
    });

    // Toggle-on-click behaviour.
    $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function(e) {
      var $this = $(this);
      var $menu = $this.parent();
      if ($menu.hasClass('active')) {
        closeFABMenu($menu);
      } else {
        openFABMenu($menu);
      }
    });

    // Toolbar transition behaviour.
    $(document).on('click.fabToolbar', '.fixed-action-btn.toolbar > a', function(e) {
      var $this = $(this);
      var $menu = $this.parent();
      FABtoToolbar($menu);
    });

  });

  $.fn.extend({
    openFAB: function() {
      openFABMenu($(this));
    },
    closeFAB: function() {
      closeFABMenu($(this));
    },
    openToolbar: function() {
      FABtoToolbar($(this));
    },
    closeToolbar: function() {
      toolbarToFAB($(this));
    }
  });


  var openFABMenu = function (btn) {
    var $this = btn;
    if ($this.hasClass('active') === false) {

      // Get direction option
      var horizontal = $this.hasClass('horizontal');
      var offsetY, offsetX;

      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }

      $this.addClass('active');
      $this.find('ul .btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
        { duration: 0 });

      var time = 0;
      $this.find('ul .btn-floating').reverse().each( function () {
        $(this).velocity(
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},
          { duration: 80, delay: time });
        time += 40;
      });
    }
  };

  var closeFABMenu = function (btn) {
    var $this = btn;
    // Get direction option
    var horizontal = $this.hasClass('horizontal');
    var offsetY, offsetX;

    if (horizontal === true) {
      offsetX = 40;
    } else {
      offsetY = 40;
    }

    $this.removeClass('active');
    var time = 0;
    $this.find('ul .btn-floating').velocity("stop", true);
    $this.find('ul .btn-floating').velocity(
      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
      { duration: 80 }
    );
  };


  /**
   * Transform FAB into toolbar
   * @param  {Object}  object jQuery object
   */
  var FABtoToolbar = function(btn) {
    if (btn.attr('data-open') === "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnRect = btn[0].getBoundingClientRect();
    var anchor = btn.find('> a').first();
    var menu = btn.find('> ul').first();
    var backdrop = $('<div class="fab-backdrop"></div>');
    var fabColor = anchor.css('background-color');
    anchor.append(backdrop);

    offsetX = btnRect.left - (windowWidth / 2) + (btnRect.width / 2);
    offsetY = windowHeight - btnRect.bottom;
    scaleFactor = windowWidth / backdrop.width();
    btn.attr('data-origin-bottom', btnRect.bottom);
    btn.attr('data-origin-left', btnRect.left);
    btn.attr('data-origin-width', btnRect.width);

    // Set initial state
    btn.addClass('active');
    btn.attr('data-open', true);
    btn.css({
      'text-align': 'center',
      width: '100%',
      bottom: 0,
      left: 0,
      transform: 'translateX(' + offsetX + 'px)',
      transition: 'none'
    });
    anchor.css({
      transform: 'translateY(' + -offsetY + 'px)',
      transition: 'none'
    });
    backdrop.css({
      'background-color': fabColor
    });


    setTimeout(function() {
      btn.css({
        transform: '',
        transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
      });
      anchor.css({
        overflow: 'visible',
        transform: '',
        transition: 'transform .2s'
      });

      setTimeout(function() {
        btn.css({
          overflow: 'hidden',
          'background-color': fabColor
        });
        backdrop.css({
          transform: 'scale(' + scaleFactor + ')',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
        menu.find('> li > a').css({
          opacity: 1
        });

        // Scroll to close.
        $(window).on('scroll.fabToolbarClose', function() {
          toolbarToFAB(btn);
          $(window).off('scroll.fabToolbarClose');
          $(document).off('click.fabToolbarClose');
        });

        $(document).on('click.fabToolbarClose', function(e) {
          if (!$(e.target).closest(menu).length) {
            toolbarToFAB(btn);
            $(window).off('scroll.fabToolbarClose');
            $(document).off('click.fabToolbarClose');
          }
        });
      }, 100);
    }, 0);
  };

  /**
   * Transform toolbar back into FAB
   * @param  {Object}  object jQuery object
   */
  var toolbarToFAB = function(btn) {
    if (btn.attr('data-open') !== "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnWidth = btn.attr('data-origin-width');
    var btnBottom = btn.attr('data-origin-bottom');
    var btnLeft = btn.attr('data-origin-left');
    var anchor = btn.find('> .btn-floating').first();
    var menu = btn.find('> ul').first();
    var backdrop = btn.find('.fab-backdrop');
    var fabColor = anchor.css('background-color');

    offsetX = btnLeft - (windowWidth / 2) + (btnWidth / 2);
    offsetY = windowHeight - btnBottom;
    scaleFactor = windowWidth / backdrop.width();


    // Hide backdrop
    btn.removeClass('active');
    btn.attr('data-open', false);
    btn.css({
      'background-color': 'transparent',
      transition: 'none'
    });
    anchor.css({
      transition: 'none'
    });
    backdrop.css({
      transform: 'scale(0)',
      'background-color': fabColor
    });
    menu.find('> li > a').css({
      opacity: ''
    });

    setTimeout(function() {
      backdrop.remove();

      // Set initial state.
      btn.css({
        'text-align': '',
        width: '',
        bottom: '',
        left: '',
        overflow: '',
        'background-color': '',
        transform: 'translate3d(' + -offsetX + 'px,0,0)'
      });
      anchor.css({
        overflow: '',
        transform: 'translate3d(0,' + offsetY + 'px,0)'
      });

      setTimeout(function() {
        btn.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s'
        });
        anchor.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
      }, 20);
    }, 200);
  };


}( jQuery ));
;(function ($) {
  // Image transition function
  Materialize.fadeInImage = function(selectorOrEl) {
    var element;
    if (typeof(selectorOrEl) === 'string') {
      element = $(selectorOrEl);
    } else if (typeof(selectorOrEl) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    element.css({opacity: 0});
    $(element).velocity({opacity: 1}, {
      duration: 650,
      queue: false,
      easing: 'easeOutSine'
    });
    $(element).velocity({opacity: 1}, {
      duration: 1300,
      queue: false,
      easing: 'swing',
      step: function(now, fx) {
        fx.start = 100;
        var grayscale_setting = now/100;
        var brightness_setting = 150 - (100 - now)/1.75;

        if (brightness_setting < 100) {
          brightness_setting = 100;
        }
        if (now >= 0) {
          $(this).css({
              "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",
              "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"
          });
        }
      }
    });
  };

  // Horizontal staggered list
  Materialize.showStaggeredList = function(selectorOrEl) {
    var element;
    if (typeof(selectorOrEl) === 'string') {
      element = $(selectorOrEl);
    } else if (typeof(selectorOrEl) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    var time = 0;
    element.find('li').velocity(
        { translateX: "-100px"},
        { duration: 0 });

    element.find('li').each(function() {
      $(this).velocity(
        { opacity: "1", translateX: "0"},
        { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });
  };


  $(document).ready(function() {
    // Hardcoded .staggered-list scrollFire
    // var staggeredListOptions = [];
    // $('ul.staggered-list').each(function (i) {

    //   var label = 'scrollFire-' + i;
    //   $(this).addClass(label);
    //   staggeredListOptions.push(
    //     {selector: 'ul.staggered-list.' + label,
    //      offset: 200,
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
    // });
    // scrollFire(staggeredListOptions);

    // HammerJS, Swipe navigation

    // Touch Event
    var swipeLeft = false;
    var swipeRight = false;


    // Dismissible Collections
    $('.dismissable').each(function() {
      $(this).hammer({
        prevent_default: false
      }).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $this.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
            swipeLeft = true;
          }

          // Swipe Right
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).bind('panend', function(e) {
        // Reset if collection is moved back into original position
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
          swipeRight = false;
          swipeLeft = false;
        }

        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) { fullWidth = $this.innerWidth(); }
            else { fullWidth = -1 * $this.innerWidth(); }

            $this.velocity({ translateX: fullWidth,
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:
              function() {
                $this.css('border', 'none');
                $this.velocity({ height: 0, padding: 0,
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:
                    function() { $this.remove(); }
                  });
              }
            });
          }
          else {
            $this.velocity({ translateX: 0,
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });

    });


    // time = 0
    // // Vertical Staggered list
    // $('ul.staggered-list.vertical li').velocity(
    //     { translateY: "100px"},
    //     { duration: 0 });

    // $('ul.staggered-list.vertical li').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", translateY: "0"},
    //     { duration: 800, delay: time, easing: [60, 25] });
    //   time += 120;
    // });

    // // Fade in and Scale
    // $('.fade-in.scale').velocity(
    //     { scaleX: .4, scaleY: .4, translateX: -600},
    //     { duration: 0});
    // $('.fade-in').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
    //     { duration: 800, easing: [60, 10] });
    // });
  });
}( jQuery ));
;(function($) {

  var scrollFireEventsHandled = false;

  // Input: Array of JSON objects {selector, offset, callback}
  Materialize.scrollFire = function(options) {
    var onScroll = function() {
      var windowScroll = window.pageYOffset + window.innerHeight;

      for (var i = 0 ; i < options.length; i++) {
        // Get options from each line
        var value = options[i];
        var selector = value.selector,
            offset = value.offset,
            callback = value.callback;

        var currentElement = document.querySelector(selector);
        if ( currentElement !== null) {
          var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

          if (windowScroll > (elementOffset + offset)) {
            if (value.done !== true) {
              if (typeof(callback) === 'function') {
                callback.call(this, currentElement);
              } else if (typeof(callback) === 'string') {
                var callbackFunc = new Function(callback);
                callbackFunc(currentElement);
              }
              value.done = true;
            }
          }
        }
      }
    };


    var throttledScroll = Materialize.throttle(function() {
      onScroll();
    }, options.throttle || 100);

    if (!scrollFireEventsHandled) {
      window.addEventListener("scroll", throttledScroll);
      window.addEventListener("resize", throttledScroll);
      scrollFireEventsHandled = true;
    }

    // perform a scan once, after current execution context, and after dom is ready
    setTimeout(throttledScroll, 0);
  };

})(jQuery);
;/*!
 * pickadate.js v3.5.0, 2014/04/13
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('jquery') )

    // Browser globals.
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root with a holder and then prepare it.
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) P.$root.html( createWrappedComponent() )
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root element’s jQuery object.
                    // * Workaround for iOS8 to bring the picker’s root into view.
                    P.$root.eq(0).focus()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$root.children()[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight ).close()
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                    // The focus is triggered *after* the close has completed - causing it
                    // to open again. So unbind and rebind the event at the next tick.
                    P.$root.off( 'focus.toOpen' ).eq(0).focus()
                    setTimeout( function() {
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )
                    }, 0 )
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // Remove the tabindex.
            attr('tabindex', -1).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // On focus/click, focus onto the root to open it up.
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {
                    event.preventDefault()
                    P.$root.eq(0).focus()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

        P.$root.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                // When something within the root is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the root so that users can click away
                            // from elements focused within the picker.
                            P.$root.eq(0).focus()
                        }
                    }
                }
            }).

            // Add/remove the “target” class on focus and blur.
            on({
                focus: function() {
                    $ELEMENT.addClass( CLASSES.target )
                },
                blur: function() {
                    $ELEMENT.removeClass( CLASSES.target )
                }
            }).

            // Open the picker and adjust the root “focused” state
            on( 'focus.toOpen', handleFocusToOpenEvent ).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$root.eq(0).focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear().close( true )
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$root

        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })


        // Insert the hidden input as specified in the settings.
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )
        else $ELEMENT.after( P._hidden )
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on “escape”.
        if ( keycode == 27 ) {
            P.close()
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Separated for IE
    function handleFocusToOpenEvent( event ) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // If it’s a focus event, add the “focused” class to the root.
        if ( event.type == 'focus' ) {
            P.$root.addClass( CLASSES.focused )
        }

        // And then finally open the picker.
        P.open()
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));


;/*!
 * Date picker for pickadate.js v3.5.0
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, { format: formatString })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || !options.nav ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        var word = string.match( /\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn

        // Materialize modified
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        //Materialize modified
        createMonthLabel = function(override) {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

             // Materialize modified
            if (override == "short_months") {
              monthsCollection = settings.monthsShort;
            }

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths  && override == undefined) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth + ' browser-default',
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // Materialize modified
            if (override == "short_months")
                if (selectedObject != null)
                return _.node( 'div', monthsCollection[ selectedObject.month ] );
                else return _.node( 'div', monthsCollection[ viewsetObject.month ] );

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        // Materialize modified
        createYearLabel = function(override) {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                if ( settings.selectYears  && override == undefined ) {
                    return _.node( 'select',
                        _.group({
                            min: lowestYear,
                            max: highestYear,
                            i: 1,
                            node: 'option',
                            item: function( loopedYear ) {
                                return [

                                    // The looped year and no classes.
                                    loopedYear, 0,

                                    // Set the value and selected index.
                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                                ]
                            }
                        }),
                        settings.klass.selectYear + ' browser-default',
                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'
                    )
                }
            }

            // Materialize modified
            if (override == "raw")
                return _.node( 'div', focusedYear )

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


        // Materialize modified
        createDayLabel = function() {
                if (selectedObject != null)
                    return _.node( 'div', selectedObject.date)
                else return _.node( 'div', nowObject.date)
            }
        createWeekdayLabel = function() {
            var display_day;

            if (selectedObject != null)
                display_day = selectedObject.day;
            else
                display_day = nowObject.day;
            var weekday = settings.weekdaysFull[ display_day ]
            return weekday
        }


    // Create and return the entire calendar.
return _.node(
        // Date presentation View
        'div',
            _.node(
                'div',
                createWeekdayLabel(),
                "picker__weekday-display"
            )+
            _.node(
                // Div for short Month
                'div',
                createMonthLabel("short_months"),
                settings.klass.month_display
            )+
            _.node(
                // Div for Day
                'div',
                createDayLabel() ,
                settings.klass.day_display
            )+
            _.node(
                // Div for Year
                'div',
                createYearLabel("raw") ,
                settings.klass.year_display
            ),
        settings.klass.date_display
    )+
    // Calendar container
    _.node('div',
        _.node('div',
        ( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    )
    , settings.klass.calendar_container) // end calendar

     +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, "btn-flat picker__today",
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, "btn-flat picker__clear",
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, "btn-flat picker__close",
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Materialize modified
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',


            // Materialize Added klasses
            date_display: prefix + 'date-display',
            day_display: prefix + 'day-display',
            month_display: prefix + 'month-display',
            year_display: prefix + 'year-display',
            calendar_container: prefix + 'calendar-container',
            // end



            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));


;(function ($) {

  $.fn.characterCounter = function(){
    return this.each(function(){
      var $input = $(this);
      var $counterElement = $input.parent().find('span[class="character-counter"]');

      // character counter has already been added appended to the parent container
      if ($counterElement.length) {
        return;
      }

      var itHasLengthAttribute = $input.attr('data-length') !== undefined;

      if(itHasLengthAttribute){
        $input.on('input', updateCounter);
        $input.on('focus', updateCounter);
        $input.on('blur', removeCounterElement);

        addCounterElement($input);
      }

    });
  };

  function updateCounter(){
    var maxLength     = +$(this).attr('data-length'),
    actualLength      = +$(this).val().length,
    isValidLength     = actualLength <= maxLength;

    $(this).parent().find('span[class="character-counter"]')
                    .html( actualLength + '/' + maxLength);

    addInputStyle(isValidLength, $(this));
  }

  function addCounterElement($input) {
    var $counterElement = $input.parent().find('span[class="character-counter"]');

    if ($counterElement.length) {
      return;
    }

    $counterElement = $('<span/>')
                        .addClass('character-counter')
                        .css('float','right')
                        .css('font-size','12px')
                        .css('height', 1);

    $input.parent().append($counterElement);
  }

  function removeCounterElement(){
    $(this).parent().find('span[class="character-counter"]').html('');
  }

  function addInputStyle(isValidLength, $input){
    var inputHasInvalidClass = $input.hasClass('invalid');
    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('invalid');
    }
    else if(!isValidLength && !inputHasInvalidClass){
      $input.removeClass('valid');
      $input.addClass('invalid');
    }
  }

  $(document).ready(function(){
    $('input, textarea').characterCounter();
  });

}( jQuery ));
;(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        duration: 200, // ms
        dist: -100, // zoom scale TODO: make this more intuitive as an option
        shift: 0, // spacing for center image
        padding: 0, // Padding between non center items
        fullWidth: false, // Change to full width styles
        indicators: false, // Toggle indicators
        noWrap: false, // Don't wrap around and cycle through items.
        onCycleTo: null // Callback for when a new slide is cycled to.
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function(i) {

        var uniqueNamespace = namespace+i;
        var images, item_width, item_height, offset, center, pressed, dim, count,
            reference, referenceY, amplitude, target, velocity, scrolling,
            xform, frame, timestamp, ticker, dragged, vertical_dragged;
        var $indicators = $('<ul class="indicators"></ul>');
        var scrollingTimeout = null;


        // Initialize
        var view = $(this);
        var showIndicators = view.attr('data-indicators') || options.indicators;


        // Options
        var setCarouselHeight = function() {
          var firstImage = view.find('.carousel-item img').first();
          if (firstImage.length) {
            if (firstImage.prop('complete')) {
              view.css('height', firstImage.height());
            } else {
              firstImage.on('load', function(){
                view.css('height', $(this).height());
              });
            }
          } else {
            var imageHeight = view.find('.carousel-item').first().height();
            view.css('height', imageHeight);
          }
        };

        if (options.fullWidth) {
          options.dist = 0;
          setCarouselHeight();

          // Offset fixed items when indicators.
          if (showIndicators) {
            view.find('.carousel-fixed-item').addClass('with-indicators');
          }
        }


        // Don't double initialize.
        if (view.hasClass('initialized')) {
          // Recalculate variables
          $(window).trigger('resize');

          // Redraw carousel.
          $(this).trigger('carouselNext', [0.000001]);
          return true;
        }


        view.addClass('initialized');
        pressed = false;
        offset = target = 0;
        images = [];
        item_width = view.find('.carousel-item').first().innerWidth();
        item_height = view.find('.carousel-item').first().innerHeight();
        dim = item_width * 2 + options.padding;

        view.find('.carousel-item').each(function (i) {
          images.push($(this)[0]);
          if (showIndicators) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Add active to first by default.
            if (i === 0) {
              $indicator.addClass('active');
            }

            // Handle clicks on indicators.
            $indicator.click(function (e) {
              e.stopPropagation();

              var index = $(this).index();
              cycleTo(index);
            });
            $indicators.append($indicator);
          }
        });

        if (showIndicators) {
          view.append($indicators);
        }
        count = images.length;


        function setupEvents() {
          if (typeof window.ontouchstart !== 'undefined') {
            view[0].addEventListener('touchstart', tap);
            view[0].addEventListener('touchmove', drag);
            view[0].addEventListener('touchend', release);
          }
          view[0].addEventListener('mousedown', tap);
          view[0].addEventListener('mousemove', drag);
          view[0].addEventListener('mouseup', release);
          view[0].addEventListener('mouseleave', release);
          view[0].addEventListener('click', click);
        }

        function xpos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientX;
          }

          // mouse event
          return e.clientX;
        }

        function ypos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientY;
          }

          // mouse event
          return e.clientY;
        }

        function wrap(x) {
          return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;
        }

        function scroll(x) {
          // Track scrolling state
          scrolling = true;
          if (!view.hasClass('scrolling')) {
            view.addClass('scrolling');
          }
          if (scrollingTimeout != null) {
            window.clearTimeout(scrollingTimeout);
          }
          scrollingTimeout = window.setTimeout(function() {
            scrolling = false;
            view.removeClass('scrolling');
          }, options.duration);

          // Start actual scroll
          var i, half, delta, dir, tween, el, alignment, xTranslation;
          var lastCenter = center;

          offset = (typeof x === 'number') ? x : offset;
          center = Math.floor((offset + dim / 2) / dim);
          delta = offset - center * dim;
          dir = (delta < 0) ? 1 : -1;
          tween = -dir * delta * 2 / dim;
          half = count >> 1;

          if (!options.fullWidth) {
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';
            alignment += 'translateY(' + (view[0].clientHeight - item_height) / 2 + 'px)';
          } else {
            alignment = 'translateX(0)';
          }

          // Set indicator active
          if (showIndicators) {
            var diff = (center % count);
            var activeIndicator = $indicators.find('.indicator-item.active');
            if (activeIndicator.index() !== diff) {
              activeIndicator.removeClass('active');
              $indicators.find('.indicator-item').eq(diff).addClass('active');
            }
          }

          // center
          // Don't show wrapped items.
          if (!options.noWrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];

            // Add active class to center item.
            if (!$(el).hasClass('active')) {
              view.find('.carousel-item').removeClass('active');
              $(el).addClass('active');
            }
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween * i) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          for (i = 1; i <= half; ++i) {
            // right side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 + tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);
            }
            // Don't show wrapped items.
            if (!options.noWrap || center + i < count) {
              el = images[wrap(center + i)];
              el.style[xform] = alignment +
                ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }


            // left side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 - tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);
            }
            // Don't show wrapped items.
            if (!options.noWrap || center - i >= 0) {
              el = images[wrap(center - i)];
              el.style[xform] = alignment +
                ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
          }

          // center
          // Don't show wrapped items.
          if (!options.noWrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          // onCycleTo callback
          if (lastCenter !== center &&
              typeof(options.onCycleTo) === "function") {
            var $curr_item = view.find('.carousel-item').eq(wrap(center));
            options.onCycleTo.call(this, $curr_item, dragged);
          }
        }

        function track() {
          var now, elapsed, delta, v;

          now = Date.now();
          elapsed = now - timestamp;
          timestamp = now;
          delta = offset - frame;
          frame = offset;

          v = 1000 * delta / (1 + elapsed);
          velocity = 0.8 * v + 0.2 * velocity;
        }

        function autoScroll() {
          var elapsed, delta;

          if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = amplitude * Math.exp(-elapsed / options.duration);
            if (delta > 2 || delta < -2) {
                scroll(target - delta);
                requestAnimationFrame(autoScroll);
            } else {
                scroll(target);
            }
          }
        }

        function click(e) {
          // Disable clicks if carousel was dragged.
          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
            return false;

          } else if (!options.fullWidth) {
            var clickedIndex = $(e.target).closest('.carousel-item').index();
            var diff = (center % count) - clickedIndex;

            // Disable clicks if carousel was shifted by click
            if (diff !== 0) {
              e.preventDefault();
              e.stopPropagation();
            }
            cycleTo(clickedIndex);
          }
        }

        function cycleTo(n) {
          var diff = (center % count) - n;

          // Account for wraparound.
          if (!options.noWrap) {
            if (diff < 0) {
              if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }

            } else if (diff > 0) {
              if (Math.abs(diff - count) < diff) { diff -= count; }
            }
          }

          // Call prev or next accordingly.
          if (diff < 0) {
            view.trigger('carouselNext', [Math.abs(diff)]);

          } else if (diff > 0) {
            view.trigger('carouselPrev', [diff]);
          }
        }

        function tap(e) {
          e.preventDefault();
          pressed = true;
          dragged = false;
          vertical_dragged = false;
          reference = xpos(e);
          referenceY = ypos(e);

          velocity = amplitude = 0;
          frame = offset;
          timestamp = Date.now();
          clearInterval(ticker);
          ticker = setInterval(track, 100);
        }

        function drag(e) {
          var x, delta, deltaY;
          if (pressed) {
            x = xpos(e);
            y = ypos(e);
            delta = reference - x;
            deltaY = Math.abs(referenceY - y);
            if (deltaY < 30 && !vertical_dragged) {
              // If vertical scrolling don't allow dragging.
              if (delta > 2 || delta < -2) {
                dragged = true;
                reference = x;
                scroll(offset + delta);
              }

            } else if (dragged) {
              // If dragging don't allow vertical scroll.
              e.preventDefault();
              e.stopPropagation();
              return false;

            } else {
              // Vertical scrolling.
              vertical_dragged = true;
            }
          }

          if (dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }

        function release(e) {
          if (pressed) {
            pressed = false;
          } else {
            return;
          }

          clearInterval(ticker);
          target = offset;
          if (velocity > 10 || velocity < -10) {
            amplitude = 0.9 * velocity;
            target = offset + amplitude;
          }
          target = Math.round(target / dim) * dim;

          // No wrap of items.
          if (options.noWrap) {
            if (target >= dim * (count - 1)) {
              target = dim * (count - 1);
            } else if (target < 0) {
              target = 0;
            }
          }
          amplitude = target - offset;
          timestamp = Date.now();
          requestAnimationFrame(autoScroll);

          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
          }
          return false;
        }

        xform = 'transform';
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
          var e = prefix + 'Transform';
          if (typeof document.body.style[e] !== 'undefined') {
            xform = e;
            return false;
          }
          return true;
        });


        $(window).off('resize.carousel-'+uniqueNamespace).on('resize.carousel-'+uniqueNamespace, function() {
          if (options.fullWidth) {
            item_width = view.find('.carousel-item').first().innerWidth();
            item_height = view.find('.carousel-item').first().innerHeight();
            dim = item_width * 2 + options.padding;
            offset = center * 2 * item_width;
            target = offset;
          } else {
            scroll();
          }
        });

        setupEvents();
        scroll(offset);

        $(this).on('carouselNext', function(e, n) {
          if (n === undefined) {
            n = 1;
          }
          target = (dim * Math.round(offset / dim)) + (dim * n);
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselPrev', function(e, n) {
          if (n === undefined) {
            n = 1;
          }
          target = (dim * Math.round(offset / dim)) - (dim * n);
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselSet', function(e, n) {
          if (n === undefined) {
            n = 0;
          }
          cycleTo(n);
        });

      });



    },
    next : function(n) {
      $(this).trigger('carouselNext', [n]);
    },
    prev : function(n) {
      $(this).trigger('carouselPrev', [n]);
    },
    set : function(n) {
      $(this).trigger('carouselSet', [n]);
    }
  };


    $.fn.carousel = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );
      }
    }; // Plugin end
}( jQuery ));;(function ($) {

  var methods = {
  init: function (options) {
    return this.each(function() {
    var origin = $('#'+$(this).attr('data-activates'));
    var screen = $('body');

    // Creating tap target
    var tapTargetEl = $(this);
    var tapTargetWrapper = tapTargetEl.parent('.tap-target-wrapper');
    var tapTargetWave = tapTargetWrapper.find('.tap-target-wave');
    var tapTargetOriginEl = tapTargetWrapper.find('.tap-target-origin');
    var tapTargetContentEl = tapTargetEl.find('.tap-target-content');

    // Creating wrapper
    if (!tapTargetWrapper.length) {
      tapTargetWrapper = tapTargetEl.wrap($('<div class="tap-target-wrapper"></div>')).parent();
    }

    // Creating content
    if (!tapTargetContentEl.length) {
      tapTargetContentEl = $('<div class="tap-target-content"></div>');
      tapTargetEl.append(tapTargetContentEl);
    }

    // Creating foreground wave
    if (!tapTargetWave.length) {
      tapTargetWave = $('<div class="tap-target-wave"></div>');

      // Creating origin
      if (!tapTargetOriginEl.length) {
        tapTargetOriginEl = origin.clone(true, true);
        tapTargetOriginEl.addClass('tap-target-origin');
        tapTargetOriginEl.removeAttr('id');
        tapTargetOriginEl.removeAttr('style');
        tapTargetWave.append(tapTargetOriginEl);
      }

      tapTargetWrapper.append(tapTargetWave);
    }

    // Open
    var openTapTarget = function() {
      if (tapTargetWrapper.is('.open')) {
        return;
      }

      // Adding open class
      tapTargetWrapper.addClass('open');

      setTimeout(function() {
        tapTargetOriginEl.off('click.tapTarget').on('click.tapTarget', function(e) {
          closeTapTarget();
          tapTargetOriginEl.off('click.tapTarget');
        });

        $(document).off('click.tapTarget').on('click.tapTarget', function(e) {
          closeTapTarget();
          $(document).off('click.tapTarget');
        });

        var throttledCalc = Materialize.throttle(function() {
          calculateTapTarget();
        }, 200);
        $(window).off('resize.tapTarget').on('resize.tapTarget', throttledCalc);
      }, 0);
    };

    // Close
    var closeTapTarget = function(){
      if (!tapTargetWrapper.is('.open')) {
        return;
      }

      tapTargetWrapper.removeClass('open');
      tapTargetOriginEl.off('click.tapTarget')
      $(document).off('click.tapTarget');
      $(window).off('resize.tapTarget');
    };

    // Pre calculate
    var calculateTapTarget = function() {
      // Element or parent is fixed position?
      var isFixed = origin.css('position') === 'fixed';
      if (!isFixed) {
        var parents = origin.parents();
        for(var i = 0; i < parents.length; i++) {
          isFixed = $(parents[i]).css('position') == 'fixed';
          if (isFixed) {
            break;
          }
        }
      }

      // Calculating origin
      var originWidth = origin.outerWidth();
      var originHeight = origin.outerHeight();
      var originTop = isFixed ? origin.offset().top - $(document).scrollTop() : origin.offset().top;
      var originLeft = isFixed ? origin.offset().left - $(document).scrollLeft() : origin.offset().left;

      // Calculating screen
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var centerX = windowWidth / 2;
      var centerY = windowHeight / 2;
      var isLeft = originLeft <= centerX;
      var isRight = originLeft > centerX;
      var isTop = originTop <= centerY;
      var isBottom = originTop > centerY;
      var isCenterX = originLeft >= windowWidth*0.25 && originLeft <= windowWidth*0.75;
      var isCenterY = originTop >= windowHeight*0.25 && originTop <= windowHeight*0.75;

      // Calculating tap target
      var tapTargetWidth = tapTargetEl.outerWidth();
      var tapTargetHeight = tapTargetEl.outerHeight();
      var tapTargetTop = originTop + originHeight/2 - tapTargetHeight/2;
      var tapTargetLeft = originLeft + originWidth/2 - tapTargetWidth/2;
      var tapTargetPosition = isFixed ? 'fixed' : 'absolute';

      // Calculating content
      var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth/2 + originWidth;
      var tapTargetTextHeight = tapTargetHeight/2;
      var tapTargetTextTop = isTop ? tapTargetHeight/2 : 0;
      var tapTargetTextBottom = 0;
      var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth/2 - originWidth : 0;
      var tapTargetTextRight = 0;
      var tapTargetTextPadding = originWidth;
      var tapTargetTextAlign = isBottom ? 'bottom' : 'top';

      // Calculating wave
      var tapTargetWaveWidth = originWidth > originHeight ? originWidth*2 : originWidth*2;
      var tapTargetWaveHeight = tapTargetWaveWidth;
      var tapTargetWaveTop = tapTargetHeight/2 - tapTargetWaveHeight/2;
      var tapTargetWaveLeft = tapTargetWidth/2 - tapTargetWaveWidth/2;

      // Setting tap target
      var tapTargetWrapperCssObj = {};
      tapTargetWrapperCssObj.top = isTop ? tapTargetTop : '';
      tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth : '';
      tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight : '';
      tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft : '';
      tapTargetWrapperCssObj.position = tapTargetPosition;
      tapTargetWrapper.css(tapTargetWrapperCssObj);

      // Setting content
      tapTargetContentEl.css({
        width: tapTargetTextWidth,
        height: tapTargetTextHeight,
        top: tapTargetTextTop,
        right: tapTargetTextRight,
        bottom: tapTargetTextBottom,
        left: tapTargetTextLeft,
        padding: tapTargetTextPadding,
        verticalAlign: tapTargetTextAlign
      });

      // Setting wave
      tapTargetWave.css({
        top: tapTargetWaveTop,
        left: tapTargetWaveLeft,
        width: tapTargetWaveWidth,
        height: tapTargetWaveHeight
      });
    }

    if (options == 'open') {
      calculateTapTarget();
      openTapTarget();
    }

    if (options == 'close')
      closeTapTarget();
    });
  },
  open: function() {},
  close: function() {}
  };

  $.fn.tapTarget = function(methodOrOptions) {
  if (methods[methodOrOptions] || typeof methodOrOptions === 'object')
    return methods.init.apply( this, arguments );

  $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tap-target' );
  };

}( jQuery ));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWJzL21hdGVyaWFsaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBNYXRlcmlhbGl6ZSB2MC45OC4yIChodHRwOi8vbWF0ZXJpYWxpemVjc3MuY29tKVxyXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1IE1hdGVyaWFsaXplXHJcbiAqIE1JVCBMaWNlbnNlIChodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcbi8vIENoZWNrIGZvciBqUXVlcnkuXHJcbmlmICh0eXBlb2YoalF1ZXJ5KSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICB2YXIgalF1ZXJ5O1xyXG4gIC8vIENoZWNrIGlmIHJlcXVpcmUgaXMgYSBkZWZpbmVkIGZ1bmN0aW9uLlxyXG4gIGlmICh0eXBlb2YocmVxdWlyZSkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGpRdWVyeSA9ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuICAvLyBFbHNlIHVzZSB0aGUgZG9sbGFyIHNpZ24gYWxpYXMuXHJcbiAgfSBlbHNlIHtcclxuICAgIGpRdWVyeSA9ICQ7XHJcbiAgfVxyXG59XHJcbjsvKlxyXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjMgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXHJcbiAqXHJcbiAqIFVzZXMgdGhlIGJ1aWx0IGluIGVhc2luZyBjYXBhYmlsaXRpZXMgYWRkZWQgSW4galF1ZXJ5IDEuMVxyXG4gKiB0byBvZmZlciBtdWx0aXBsZSBlYXNpbmcgb3B0aW9uc1xyXG4gKlxyXG4gKiBURVJNUyBPRiBVU0UgLSBqUXVlcnkgRWFzaW5nXHJcbiAqXHJcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMDggR2VvcmdlIE1jR2lubGV5IFNtaXRoXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICpcclxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2ZcclxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdFxyXG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFsc1xyXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqXHJcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlXHJcbiAqIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTllcclxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxyXG4gKiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFXHJcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRURcclxuICogQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcclxuICogIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEXHJcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICpcclxuKi9cclxuXHJcbi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnSW5uSW5nIHZhbHVlLCBjOiBjaGFuZ2UgSW4gdmFsdWUsIGQ6IGR1cmF0aW9uXHJcbmpRdWVyeS5lYXNpbmdbJ2pzd2luZyddID0galF1ZXJ5LmVhc2luZ1snc3dpbmcnXTtcclxuXHJcbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5lYXNpbmcsXHJcbntcclxuXHRkZWY6ICdlYXNlT3V0UXVhZCcsXHJcblx0c3dpbmc6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHQvL2FsZXJ0KGpRdWVyeS5lYXNpbmcuZGVmYXVsdCk7XHJcblx0XHRyZXR1cm4galF1ZXJ5LmVhc2luZ1tqUXVlcnkuZWFzaW5nLmRlZl0oeCwgdCwgYiwgYywgZCk7XHJcblx0fSxcclxuXHRlYXNlSW5RdWFkOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZU91dFF1YWQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gLWMgKih0Lz1kKSoodC0yKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQgKyBiO1xyXG5cdFx0cmV0dXJuIC1jLzIgKiAoKC0tdCkqKHQtMikgLSAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5DdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjKih0Lz1kKSp0KnQgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZU91dEN1YmljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuIGMqKCh0PXQvZC0xKSp0KnQgKyAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQgKyBiO1xyXG5cdFx0cmV0dXJuIGMvMiooKHQtPTIpKnQqdCArIDIpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJblF1YXJ0OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQqdCp0ICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRRdWFydDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiAtYyAqICgodD10L2QtMSkqdCp0KnQgLSAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XHJcblx0XHRyZXR1cm4gLWMvMiAqICgodC09MikqdCp0KnQgLSAyKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5RdWludDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjKih0Lz1kKSp0KnQqdCp0ICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRRdWludDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjKigodD10L2QtMSkqdCp0KnQqdCArIDEpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0KnQgKyBiO1xyXG5cdFx0cmV0dXJuIGMvMiooKHQtPTIpKnQqdCp0KnQgKyAyKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5TaW5lOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuIC1jICogTWF0aC5jb3ModC9kICogKE1hdGguUEkvMikpICsgYyArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0U2luZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjICogTWF0aC5zaW4odC9kICogKE1hdGguUEkvMikpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gLWMvMiAqIChNYXRoLmNvcyhNYXRoLlBJKnQvZCkgLSAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5FeHBvOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuICh0PT0wKSA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodC9kIC0gMSkpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRFeHBvOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuICh0PT1kKSA/IGIrYyA6IGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQvZCkgKyAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRFeHBvOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0aWYgKHQ9PTApIHJldHVybiBiO1xyXG5cdFx0aWYgKHQ9PWQpIHJldHVybiBiK2M7XHJcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XHJcblx0XHRyZXR1cm4gYy8yICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluQ2lyYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0Lz1kKSp0KSAtIDEpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRDaXJjOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0PXQvZC0xKSp0KSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIC1jLzIgKiAoTWF0aC5zcXJ0KDEgLSB0KnQpIC0gMSkgKyBiO1xyXG5cdFx0cmV0dXJuIGMvMiAqIChNYXRoLnNxcnQoMSAtICh0LT0yKSp0KSArIDEpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJbkVsYXN0aWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHR2YXIgcz0xLjcwMTU4O3ZhciBwPTA7dmFyIGE9YztcclxuXHRcdGlmICh0PT0wKSByZXR1cm4gYjsgIGlmICgodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCouMztcclxuXHRcdGlmIChhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyB2YXIgcz1wLzQ7IH1cclxuXHRcdGVsc2UgdmFyIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luIChjL2EpO1xyXG5cdFx0cmV0dXJuIC0oYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0dmFyIHM9MS43MDE1ODt2YXIgcD0wO3ZhciBhPWM7XHJcblx0XHRpZiAodD09MCkgcmV0dXJuIGI7ICBpZiAoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYgKCFwKSBwPWQqLjM7XHJcblx0XHRpZiAoYSA8IE1hdGguYWJzKGMpKSB7IGE9YzsgdmFyIHM9cC80OyB9XHJcblx0XHRlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcclxuXHRcdHJldHVybiBhKk1hdGgucG93KDIsLTEwKnQpICogTWF0aC5zaW4oICh0KmQtcykqKDIqTWF0aC5QSSkvcCApICsgYyArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRFbGFzdGljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0dmFyIHM9MS43MDE1ODt2YXIgcD0wO3ZhciBhPWM7XHJcblx0XHRpZiAodD09MCkgcmV0dXJuIGI7ICBpZiAoKHQvPWQvMik9PTIpIHJldHVybiBiK2M7ICBpZiAoIXApIHA9ZCooLjMqMS41KTtcclxuXHRcdGlmIChhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyB2YXIgcz1wLzQ7IH1cclxuXHRcdGVsc2UgdmFyIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luIChjL2EpO1xyXG5cdFx0aWYgKHQgPCAxKSByZXR1cm4gLS41KihhKk1hdGgucG93KDIsMTAqKHQtPTEpKSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSkgKyBiO1xyXG5cdFx0cmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqKHQtPTEpKSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSouNSArIGMgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluQmFjazogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQsIHMpIHtcclxuXHRcdGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gYyoodC89ZCkqdCooKHMrMSkqdCAtIHMpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRCYWNrOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCwgcykge1xyXG5cdFx0aWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcclxuXHRcdHJldHVybiBjKigodD10L2QtMSkqdCooKHMrMSkqdCArIHMpICsgMSkgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluT3V0QmFjazogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQsIHMpIHtcclxuXHRcdGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKih0KnQqKCgocyo9KDEuNTI1KSkrMSkqdCAtIHMpKSArIGI7XHJcblx0XHRyZXR1cm4gYy8yKigodC09MikqdCooKChzKj0oMS41MjUpKSsxKSp0ICsgcykgKyAyKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gYyAtIGpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZSAoeCwgZC10LCAwLCBjLCBkKSArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0Qm91bmNlOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0aWYgKCh0Lz1kKSA8ICgxLzIuNzUpKSB7XHJcblx0XHRcdHJldHVybiBjKig3LjU2MjUqdCp0KSArIGI7XHJcblx0XHR9IGVsc2UgaWYgKHQgPCAoMi8yLjc1KSkge1xyXG5cdFx0XHRyZXR1cm4gYyooNy41NjI1Kih0LT0oMS41LzIuNzUpKSp0ICsgLjc1KSArIGI7XHJcblx0XHR9IGVsc2UgaWYgKHQgPCAoMi41LzIuNzUpKSB7XHJcblx0XHRcdHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjI1LzIuNzUpKSp0ICsgLjkzNzUpICsgYjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjYyNS8yLjc1KSkqdCArIC45ODQzNzUpICsgYjtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdGlmICh0IDwgZC8yKSByZXR1cm4galF1ZXJ5LmVhc2luZy5lYXNlSW5Cb3VuY2UgKHgsIHQqMiwgMCwgYywgZCkgKiAuNSArIGI7XHJcblx0XHRyZXR1cm4galF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlICh4LCB0KjItZCwgMCwgYywgZCkgKiAuNSArIGMqLjUgKyBiO1xyXG5cdH1cclxufSk7XHJcblxyXG4vKlxyXG4gKlxyXG4gKiBURVJNUyBPRiBVU0UgLSBFQVNJTkcgRVFVQVRJT05TXHJcbiAqXHJcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMDEgUm9iZXJ0IFBlbm5lclxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mXHJcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3RcclxuICogb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHNcclxuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKlxyXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZVxyXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZXHJcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcclxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxyXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEXHJcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXHJcbiAqICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRFxyXG4gKiBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqXHJcbiAqLzsvLyBDdXN0b20gRWFzaW5nXHJcbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5lYXNpbmcsXHJcbntcclxuICBlYXNlSW5PdXRNYXRlcmlhbDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcclxuICAgIHJldHVybiBjLzQqKCh0LT0yKSp0KnQgKyAyKSArIGI7XHJcbiAgfVxyXG59KTs7LyohIFZlbG9jaXR5SlMub3JnICgxLjIuMykuIChDKSAyMDE0IEp1bGlhbiBTaGFwaXJvLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqL1xyXG4vKiEgVmVsb2NpdHlKUy5vcmcgalF1ZXJ5IFNoaW0gKDEuMC4xKS4gKEMpIDIwMTQgVGhlIGpRdWVyeSBGb3VuZGF0aW9uLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS4gKi9cclxuLyohIE5vdGUgdGhhdCB0aGlzIGhhcyBiZWVuIG1vZGlmaWVkIGJ5IE1hdGVyaWFsaXplIHRvIGNvbmZpcm0gdGhhdCBWZWxvY2l0eSBpcyBub3QgYWxyZWFkeSBiZWluZyBpbXBvcnRlZC4gKi9cclxualF1ZXJ5LlZlbG9jaXR5P2NvbnNvbGUubG9nKFwiVmVsb2NpdHkgaXMgYWxyZWFkeSBsb2FkZWQuIFlvdSBtYXkgYmUgbmVlZGxlc3NseSBpbXBvcnRpbmcgVmVsb2NpdHkgYWdhaW47IG5vdGUgdGhhdCBNYXRlcmlhbGl6ZSBpbmNsdWRlcyBWZWxvY2l0eS5cIik6KCFmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3ZhciB0PWUubGVuZ3RoLGE9ci50eXBlKGUpO3JldHVyblwiZnVuY3Rpb25cIj09PWF8fHIuaXNXaW5kb3coZSk/ITE6MT09PWUubm9kZVR5cGUmJnQ/ITA6XCJhcnJheVwiPT09YXx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlfWlmKCFlLmpRdWVyeSl7dmFyIHI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IHIuZm4uaW5pdChlLHQpfTtyLmlzV2luZG93PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT1lLndpbmRvd30sci50eXBlPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW2kuY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9LHIuaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cImFycmF5XCI9PT1yLnR5cGUoZSl9LHIuaXNQbGFpbk9iamVjdD1mdW5jdGlvbihlKXt2YXIgdDtpZighZXx8XCJvYmplY3RcIiE9PXIudHlwZShlKXx8ZS5ub2RlVHlwZXx8ci5pc1dpbmRvdyhlKSlyZXR1cm4hMTt0cnl7aWYoZS5jb25zdHJ1Y3RvciYmIW8uY2FsbChlLFwiY29uc3RydWN0b3JcIikmJiFvLmNhbGwoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGEpe3JldHVybiExfWZvcih0IGluIGUpO3JldHVybiB2b2lkIDA9PT10fHxvLmNhbGwoZSx0KX0sci5lYWNoPWZ1bmN0aW9uKGUscixhKXt2YXIgbixvPTAsaT1lLmxlbmd0aCxzPXQoZSk7aWYoYSl7aWYocylmb3IoO2k+byYmKG49ci5hcHBseShlW29dLGEpLG4hPT0hMSk7bysrKTtlbHNlIGZvcihvIGluIGUpaWYobj1yLmFwcGx5KGVbb10sYSksbj09PSExKWJyZWFrfWVsc2UgaWYocylmb3IoO2k+byYmKG49ci5jYWxsKGVbb10sbyxlW29dKSxuIT09ITEpO28rKyk7ZWxzZSBmb3IobyBpbiBlKWlmKG49ci5jYWxsKGVbb10sbyxlW29dKSxuPT09ITEpYnJlYWs7cmV0dXJuIGV9LHIuZGF0YT1mdW5jdGlvbihlLHQsbil7aWYodm9pZCAwPT09bil7dmFyIG89ZVtyLmV4cGFuZG9dLGk9byYmYVtvXTtpZih2b2lkIDA9PT10KXJldHVybiBpO2lmKGkmJnQgaW4gaSlyZXR1cm4gaVt0XX1lbHNlIGlmKHZvaWQgMCE9PXQpe3ZhciBvPWVbci5leHBhbmRvXXx8KGVbci5leHBhbmRvXT0rK3IudXVpZCk7cmV0dXJuIGFbb109YVtvXXx8e30sYVtvXVt0XT1uLG59fSxyLnJlbW92ZURhdGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj1lW3IuZXhwYW5kb10sbz1uJiZhW25dO28mJnIuZWFjaCh0LGZ1bmN0aW9uKGUsdCl7ZGVsZXRlIG9bdF19KX0sci5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LGEsbixvLGkscz1hcmd1bWVudHNbMF18fHt9LGw9MSx1PWFyZ3VtZW50cy5sZW5ndGgsYz0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBzJiYoYz1zLHM9YXJndW1lbnRzW2xdfHx7fSxsKyspLFwib2JqZWN0XCIhPXR5cGVvZiBzJiZcImZ1bmN0aW9uXCIhPT1yLnR5cGUocykmJihzPXt9KSxsPT09dSYmKHM9dGhpcyxsLS0pO3U+bDtsKyspaWYobnVsbCE9KG89YXJndW1lbnRzW2xdKSlmb3IobiBpbiBvKWU9c1tuXSxhPW9bbl0scyE9PWEmJihjJiZhJiYoci5pc1BsYWluT2JqZWN0KGEpfHwodD1yLmlzQXJyYXkoYSkpKT8odD8odD0hMSxpPWUmJnIuaXNBcnJheShlKT9lOltdKTppPWUmJnIuaXNQbGFpbk9iamVjdChlKT9lOnt9LHNbbl09ci5leHRlbmQoYyxpLGEpKTp2b2lkIDAhPT1hJiYoc1tuXT1hKSk7cmV0dXJuIHN9LHIucXVldWU9ZnVuY3Rpb24oZSxhLG4pe2Z1bmN0aW9uIG8oZSxyKXt2YXIgYT1yfHxbXTtyZXR1cm4gbnVsbCE9ZSYmKHQoT2JqZWN0KGUpKT8hZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9K3QubGVuZ3RoLGE9MCxuPWUubGVuZ3RoO3I+YTspZVtuKytdPXRbYSsrXTtpZihyIT09cilmb3IoO3ZvaWQgMCE9PXRbYV07KWVbbisrXT10W2ErK107cmV0dXJuIGUubGVuZ3RoPW4sZX0oYSxcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6W10ucHVzaC5jYWxsKGEsZSkpLGF9aWYoZSl7YT0oYXx8XCJmeFwiKStcInF1ZXVlXCI7dmFyIGk9ci5kYXRhKGUsYSk7cmV0dXJuIG4/KCFpfHxyLmlzQXJyYXkobik/aT1yLmRhdGEoZSxhLG8obikpOmkucHVzaChuKSxpKTppfHxbXX19LHIuZGVxdWV1ZT1mdW5jdGlvbihlLHQpe3IuZWFjaChlLm5vZGVUeXBlP1tlXTplLGZ1bmN0aW9uKGUsYSl7dD10fHxcImZ4XCI7dmFyIG49ci5xdWV1ZShhLHQpLG89bi5zaGlmdCgpO1wiaW5wcm9ncmVzc1wiPT09byYmKG89bi5zaGlmdCgpKSxvJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxvLmNhbGwoYSxmdW5jdGlvbigpe3IuZGVxdWV1ZShhLHQpfSkpfSl9LHIuZm49ci5wcm90b3R5cGU9e2luaXQ6ZnVuY3Rpb24oZSl7aWYoZS5ub2RlVHlwZSlyZXR1cm4gdGhpc1swXT1lLHRoaXM7dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgRE9NIG5vZGUuXCIpfSxvZmZzZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdD90aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOnt0b3A6MCxsZWZ0OjB9O3JldHVybnt0b3A6dC50b3ArKGUucGFnZVlPZmZzZXR8fGRvY3VtZW50LnNjcm9sbFRvcHx8MCktKGRvY3VtZW50LmNsaWVudFRvcHx8MCksbGVmdDp0LmxlZnQrKGUucGFnZVhPZmZzZXR8fGRvY3VtZW50LnNjcm9sbExlZnR8fDApLShkb2N1bWVudC5jbGllbnRMZWZ0fHwwKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2Zvcih2YXIgZT10aGlzLm9mZnNldFBhcmVudHx8ZG9jdW1lbnQ7ZSYmXCJodG1sXCI9PT0hZS5ub2RlVHlwZS50b0xvd2VyQ2FzZSYmXCJzdGF0aWNcIj09PWUuc3R5bGUucG9zaXRpb247KWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fGRvY3VtZW50fXZhciB0PXRoaXNbMF0sZT1lLmFwcGx5KHQpLGE9dGhpcy5vZmZzZXQoKSxuPS9eKD86Ym9keXxodG1sKSQvaS50ZXN0KGUubm9kZU5hbWUpP3t0b3A6MCxsZWZ0OjB9OnIoZSkub2Zmc2V0KCk7cmV0dXJuIGEudG9wLT1wYXJzZUZsb2F0KHQuc3R5bGUubWFyZ2luVG9wKXx8MCxhLmxlZnQtPXBhcnNlRmxvYXQodC5zdHlsZS5tYXJnaW5MZWZ0KXx8MCxlLnN0eWxlJiYobi50b3ArPXBhcnNlRmxvYXQoZS5zdHlsZS5ib3JkZXJUb3BXaWR0aCl8fDAsbi5sZWZ0Kz1wYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKXx8MCkse3RvcDphLnRvcC1uLnRvcCxsZWZ0OmEubGVmdC1uLmxlZnR9fX07dmFyIGE9e307ci5leHBhbmRvPVwidmVsb2NpdHlcIisobmV3IERhdGUpLmdldFRpbWUoKSxyLnV1aWQ9MDtmb3IodmFyIG49e30sbz1uLmhhc093blByb3BlcnR5LGk9bi50b1N0cmluZyxzPVwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxsPTA7bDxzLmxlbmd0aDtsKyspbltcIltvYmplY3QgXCIrc1tsXStcIl1cIl09c1tsXS50b0xvd2VyQ2FzZSgpO3IuZm4uaW5pdC5wcm90b3R5cGU9ci5mbixlLlZlbG9jaXR5PXtVdGlsaXRpZXM6cn19fSh3aW5kb3cpLGZ1bmN0aW9uKGUpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTplKCl9KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxyLGEpe2Z1bmN0aW9uIG4oZSl7Zm9yKHZhciB0PS0xLHI9ZT9lLmxlbmd0aDowLGE9W107Kyt0PHI7KXt2YXIgbj1lW3RdO24mJmEucHVzaChuKX1yZXR1cm4gYX1mdW5jdGlvbiBvKGUpe3JldHVybiBtLmlzV3JhcHBlZChlKT9lPVtdLnNsaWNlLmNhbGwoZSk6bS5pc05vZGUoZSkmJihlPVtlXSksZX1mdW5jdGlvbiBpKGUpe3ZhciB0PWYuZGF0YShlLFwidmVsb2NpdHlcIik7cmV0dXJuIG51bGw9PT10P2E6dH1mdW5jdGlvbiBzKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5yb3VuZCh0KmUpKigxL2UpfX1mdW5jdGlvbiBsKGUscixhLG4pe2Z1bmN0aW9uIG8oZSx0KXtyZXR1cm4gMS0zKnQrMyplfWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gMyp0LTYqZX1mdW5jdGlvbiBzKGUpe3JldHVybiAzKmV9ZnVuY3Rpb24gbChlLHQscil7cmV0dXJuKChvKHQscikqZStpKHQscikpKmUrcyh0KSkqZX1mdW5jdGlvbiB1KGUsdCxyKXtyZXR1cm4gMypvKHQscikqZSplKzIqaSh0LHIpKmUrcyh0KX1mdW5jdGlvbiBjKHQscil7Zm9yKHZhciBuPTA7bT5uOysrbil7dmFyIG89dShyLGUsYSk7aWYoMD09PW8pcmV0dXJuIHI7dmFyIGk9bChyLGUsYSktdDtyLT1pL299cmV0dXJuIHJ9ZnVuY3Rpb24gcCgpe2Zvcih2YXIgdD0wO2I+dDsrK3Qpd1t0XT1sKHQqeCxlLGEpfWZ1bmN0aW9uIGYodCxyLG4pe3ZhciBvLGkscz0wO2RvIGk9cisobi1yKS8yLG89bChpLGUsYSktdCxvPjA/bj1pOnI9aTt3aGlsZShNYXRoLmFicyhvKT5oJiYrK3M8dik7cmV0dXJuIGl9ZnVuY3Rpb24gZCh0KXtmb3IodmFyIHI9MCxuPTEsbz1iLTE7biE9byYmd1tuXTw9dDsrK24pcis9eDstLW47dmFyIGk9KHQtd1tuXSkvKHdbbisxXS13W25dKSxzPXIraSp4LGw9dShzLGUsYSk7cmV0dXJuIGw+PXk/Yyh0LHMpOjA9PWw/czpmKHQscixyK3gpfWZ1bmN0aW9uIGcoKXtWPSEwLChlIT1yfHxhIT1uKSYmcCgpfXZhciBtPTQseT0uMDAxLGg9MWUtNyx2PTEwLGI9MTEseD0xLyhiLTEpLFM9XCJGbG9hdDMyQXJyYXlcImluIHQ7aWYoNCE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciBQPTA7ND5QOysrUClpZihcIm51bWJlclwiIT10eXBlb2YgYXJndW1lbnRzW1BdfHxpc05hTihhcmd1bWVudHNbUF0pfHwhaXNGaW5pdGUoYXJndW1lbnRzW1BdKSlyZXR1cm4hMTtlPU1hdGgubWluKGUsMSksYT1NYXRoLm1pbihhLDEpLGU9TWF0aC5tYXgoZSwwKSxhPU1hdGgubWF4KGEsMCk7dmFyIHc9Uz9uZXcgRmxvYXQzMkFycmF5KGIpOm5ldyBBcnJheShiKSxWPSExLEM9ZnVuY3Rpb24odCl7cmV0dXJuIFZ8fGcoKSxlPT09ciYmYT09PW4/dDowPT09dD8wOjE9PT10PzE6bChkKHQpLHIsbil9O0MuZ2V0Q29udHJvbFBvaW50cz1mdW5jdGlvbigpe3JldHVyblt7eDplLHk6cn0se3g6YSx5Om59XX07dmFyIFQ9XCJnZW5lcmF0ZUJlemllcihcIitbZSxyLGEsbl0rXCIpXCI7cmV0dXJuIEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gVH0sQ31mdW5jdGlvbiB1KGUsdCl7dmFyIHI9ZTtyZXR1cm4gbS5pc1N0cmluZyhlKT9iLkVhc2luZ3NbZV18fChyPSExKTpyPW0uaXNBcnJheShlKSYmMT09PWUubGVuZ3RoP3MuYXBwbHkobnVsbCxlKTptLmlzQXJyYXkoZSkmJjI9PT1lLmxlbmd0aD94LmFwcGx5KG51bGwsZS5jb25jYXQoW3RdKSk6bS5pc0FycmF5KGUpJiY0PT09ZS5sZW5ndGg/bC5hcHBseShudWxsLGUpOiExLHI9PT0hMSYmKHI9Yi5FYXNpbmdzW2IuZGVmYXVsdHMuZWFzaW5nXT9iLmRlZmF1bHRzLmVhc2luZzp2KSxyfWZ1bmN0aW9uIGMoZSl7aWYoZSl7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCkscj1iLlN0YXRlLmNhbGxzLmxlbmd0aDtyPjFlNCYmKGIuU3RhdGUuY2FsbHM9bihiLlN0YXRlLmNhbGxzKSk7Zm9yKHZhciBvPTA7cj5vO28rKylpZihiLlN0YXRlLmNhbGxzW29dKXt2YXIgcz1iLlN0YXRlLmNhbGxzW29dLGw9c1swXSx1PXNbMl0sZD1zWzNdLGc9ISFkLHk9bnVsbDtkfHwoZD1iLlN0YXRlLmNhbGxzW29dWzNdPXQtMTYpO2Zvcih2YXIgaD1NYXRoLm1pbigodC1kKS91LmR1cmF0aW9uLDEpLHY9MCx4PWwubGVuZ3RoO3g+djt2Kyspe3ZhciBQPWxbdl0sVj1QLmVsZW1lbnQ7aWYoaShWKSl7dmFyIEM9ITE7aWYodS5kaXNwbGF5IT09YSYmbnVsbCE9PXUuZGlzcGxheSYmXCJub25lXCIhPT11LmRpc3BsYXkpe2lmKFwiZmxleFwiPT09dS5kaXNwbGF5KXt2YXIgVD1bXCItd2Via2l0LWJveFwiLFwiLW1vei1ib3hcIixcIi1tcy1mbGV4Ym94XCIsXCItd2Via2l0LWZsZXhcIl07Zi5lYWNoKFQsZnVuY3Rpb24oZSx0KXtTLnNldFByb3BlcnR5VmFsdWUoVixcImRpc3BsYXlcIix0KX0pfVMuc2V0UHJvcGVydHlWYWx1ZShWLFwiZGlzcGxheVwiLHUuZGlzcGxheSl9dS52aXNpYmlsaXR5IT09YSYmXCJoaWRkZW5cIiE9PXUudmlzaWJpbGl0eSYmUy5zZXRQcm9wZXJ0eVZhbHVlKFYsXCJ2aXNpYmlsaXR5XCIsdS52aXNpYmlsaXR5KTtmb3IodmFyIGsgaW4gUClpZihcImVsZW1lbnRcIiE9PWspe3ZhciBBLEY9UFtrXSxqPW0uaXNTdHJpbmcoRi5lYXNpbmcpP2IuRWFzaW5nc1tGLmVhc2luZ106Ri5lYXNpbmc7aWYoMT09PWgpQT1GLmVuZFZhbHVlO2Vsc2V7dmFyIEU9Ri5lbmRWYWx1ZS1GLnN0YXJ0VmFsdWU7aWYoQT1GLnN0YXJ0VmFsdWUrRSpqKGgsdSxFKSwhZyYmQT09PUYuY3VycmVudFZhbHVlKWNvbnRpbnVlfWlmKEYuY3VycmVudFZhbHVlPUEsXCJ0d2VlblwiPT09ayl5PUE7ZWxzZXtpZihTLkhvb2tzLnJlZ2lzdGVyZWRba10pe3ZhciBIPVMuSG9va3MuZ2V0Um9vdChrKSxOPWkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXTtOJiYoRi5yb290UHJvcGVydHlWYWx1ZT1OKX12YXIgTD1TLnNldFByb3BlcnR5VmFsdWUoVixrLEYuY3VycmVudFZhbHVlKygwPT09cGFyc2VGbG9hdChBKT9cIlwiOkYudW5pdFR5cGUpLEYucm9vdFByb3BlcnR5VmFsdWUsRi5zY3JvbGxEYXRhKTtTLkhvb2tzLnJlZ2lzdGVyZWRba10mJihpKFYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSF09Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0hdP1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtIXShcImV4dHJhY3RcIixudWxsLExbMV0pOkxbMV0pLFwidHJhbnNmb3JtXCI9PT1MWzBdJiYoQz0hMCl9fXUubW9iaWxlSEEmJmkoVikudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9PT1hJiYoaShWKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD1cIigwcHgsIDBweCwgMHB4KVwiLEM9ITApLEMmJlMuZmx1c2hUcmFuc2Zvcm1DYWNoZShWKX19dS5kaXNwbGF5IT09YSYmXCJub25lXCIhPT11LmRpc3BsYXkmJihiLlN0YXRlLmNhbGxzW29dWzJdLmRpc3BsYXk9ITEpLHUudmlzaWJpbGl0eSE9PWEmJlwiaGlkZGVuXCIhPT11LnZpc2liaWxpdHkmJihiLlN0YXRlLmNhbGxzW29dWzJdLnZpc2liaWxpdHk9ITEpLHUucHJvZ3Jlc3MmJnUucHJvZ3Jlc3MuY2FsbChzWzFdLHNbMV0saCxNYXRoLm1heCgwLGQrdS5kdXJhdGlvbi10KSxkLHkpLDE9PT1oJiZwKG8pfX1iLlN0YXRlLmlzVGlja2luZyYmdyhjKX1mdW5jdGlvbiBwKGUsdCl7aWYoIWIuU3RhdGUuY2FsbHNbZV0pcmV0dXJuITE7Zm9yKHZhciByPWIuU3RhdGUuY2FsbHNbZV1bMF0sbj1iLlN0YXRlLmNhbGxzW2VdWzFdLG89Yi5TdGF0ZS5jYWxsc1tlXVsyXSxzPWIuU3RhdGUuY2FsbHNbZV1bNF0sbD0hMSx1PTAsYz1yLmxlbmd0aDtjPnU7dSsrKXt2YXIgcD1yW3VdLmVsZW1lbnQ7aWYodHx8by5sb29wfHwoXCJub25lXCI9PT1vLmRpc3BsYXkmJlMuc2V0UHJvcGVydHlWYWx1ZShwLFwiZGlzcGxheVwiLG8uZGlzcGxheSksXCJoaWRkZW5cIj09PW8udmlzaWJpbGl0eSYmUy5zZXRQcm9wZXJ0eVZhbHVlKHAsXCJ2aXNpYmlsaXR5XCIsby52aXNpYmlsaXR5KSksby5sb29wIT09ITAmJihmLnF1ZXVlKHApWzFdPT09YXx8IS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdChmLnF1ZXVlKHApWzFdKSkmJmkocCkpe2kocCkuaXNBbmltYXRpbmc9ITEsaShwKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlPXt9O3ZhciBkPSExO2YuZWFjaChTLkxpc3RzLnRyYW5zZm9ybXMzRCxmdW5jdGlvbihlLHQpe3ZhciByPS9ec2NhbGUvLnRlc3QodCk/MTowLG49aShwKS50cmFuc2Zvcm1DYWNoZVt0XTtpKHApLnRyYW5zZm9ybUNhY2hlW3RdIT09YSYmbmV3IFJlZ0V4cChcIl5cXFxcKFwiK3IrXCJbXi5dXCIpLnRlc3QobikmJihkPSEwLGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlW3RdKX0pLG8ubW9iaWxlSEEmJihkPSEwLGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSxkJiZTLmZsdXNoVHJhbnNmb3JtQ2FjaGUocCksUy5WYWx1ZXMucmVtb3ZlQ2xhc3MocCxcInZlbG9jaXR5LWFuaW1hdGluZ1wiKX1pZighdCYmby5jb21wbGV0ZSYmIW8ubG9vcCYmdT09PWMtMSl0cnl7by5jb21wbGV0ZS5jYWxsKG4sbil9Y2F0Y2goZyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGd9LDEpfXMmJm8ubG9vcCE9PSEwJiZzKG4pLGkocCkmJm8ubG9vcD09PSEwJiYhdCYmKGYuZWFjaChpKHApLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihlLHQpey9ecm90YXRlLy50ZXN0KGUpJiYzNjA9PT1wYXJzZUZsb2F0KHQuZW5kVmFsdWUpJiYodC5lbmRWYWx1ZT0wLHQuc3RhcnRWYWx1ZT0zNjApLC9eYmFja2dyb3VuZFBvc2l0aW9uLy50ZXN0KGUpJiYxMDA9PT1wYXJzZUZsb2F0KHQuZW5kVmFsdWUpJiZcIiVcIj09PXQudW5pdFR5cGUmJih0LmVuZFZhbHVlPTAsdC5zdGFydFZhbHVlPTEwMCl9KSxiKHAsXCJyZXZlcnNlXCIse2xvb3A6ITAsZGVsYXk6by5kZWxheX0pKSxvLnF1ZXVlIT09ITEmJmYuZGVxdWV1ZShwLG8ucXVldWUpfWIuU3RhdGUuY2FsbHNbZV09ITE7Zm9yKHZhciBtPTAseT1iLlN0YXRlLmNhbGxzLmxlbmd0aDt5Pm07bSsrKWlmKGIuU3RhdGUuY2FsbHNbbV0hPT0hMSl7bD0hMDticmVha31sPT09ITEmJihiLlN0YXRlLmlzVGlja2luZz0hMSxkZWxldGUgYi5TdGF0ZS5jYWxscyxiLlN0YXRlLmNhbGxzPVtdKX12YXIgZixkPWZ1bmN0aW9uKCl7aWYoci5kb2N1bWVudE1vZGUpcmV0dXJuIHIuZG9jdW1lbnRNb2RlO2Zvcih2YXIgZT03O2U+NDtlLS0pe3ZhciB0PXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZih0LmlubmVySFRNTD1cIjwhLS1baWYgSUUgXCIrZStcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiLHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpLmxlbmd0aClyZXR1cm4gdD1udWxsLGV9cmV0dXJuIGF9KCksZz1mdW5jdGlvbigpe3ZhciBlPTA7cmV0dXJuIHQud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7dmFyIHIsYT0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gcj1NYXRoLm1heCgwLDE2LShhLWUpKSxlPWErcixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChhK3IpfSxyKX19KCksbT17aXNTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX0saXNOb2RlOmZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLm5vZGVUeXBlfSxpc05vZGVMaXN0OmZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiYvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKSYmZS5sZW5ndGghPT1hJiYoMD09PWUubGVuZ3RofHxcIm9iamVjdFwiPT10eXBlb2YgZVswXSYmZVswXS5ub2RlVHlwZT4wKX0saXNXcmFwcGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlJiYoZS5qcXVlcnl8fHQuWmVwdG8mJnQuWmVwdG8uemVwdG8uaXNaKGUpKX0saXNTVkc6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuU1ZHRWxlbWVudCYmZSBpbnN0YW5jZW9mIHQuU1ZHRWxlbWVudH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH19LHk9ITE7aWYoZS5mbiYmZS5mbi5qcXVlcnk/KGY9ZSx5PSEwKTpmPXQuVmVsb2NpdHkuVXRpbGl0aWVzLDg+PWQmJiF5KXRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO2lmKDc+PWQpcmV0dXJuIHZvaWQoalF1ZXJ5LmZuLnZlbG9jaXR5PWpRdWVyeS5mbi5hbmltYXRlKTt2YXIgaD00MDAsdj1cInN3aW5nXCIsYj17U3RhdGU6e2lzTW9iaWxlOi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0FuZHJvaWQ6L0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzR2luZ2VyYnJlYWQ6L0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNDaHJvbWU6dC5jaHJvbWUsaXNGaXJlZm94Oi9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxwcmVmaXhFbGVtZW50OnIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwcmVmaXhNYXRjaGVzOnt9LHNjcm9sbEFuY2hvcjpudWxsLHNjcm9sbFByb3BlcnR5TGVmdDpudWxsLHNjcm9sbFByb3BlcnR5VG9wOm51bGwsaXNUaWNraW5nOiExLGNhbGxzOltdfSxDU1M6e30sVXRpbGl0aWVzOmYsUmVkaXJlY3RzOnt9LEVhc2luZ3M6e30sUHJvbWlzZTp0LlByb21pc2UsZGVmYXVsdHM6e3F1ZXVlOlwiXCIsZHVyYXRpb246aCxlYXNpbmc6dixiZWdpbjphLGNvbXBsZXRlOmEscHJvZ3Jlc3M6YSxkaXNwbGF5OmEsdmlzaWJpbGl0eTphLGxvb3A6ITEsZGVsYXk6ITEsbW9iaWxlSEE6ITAsX2NhY2hlVmFsdWVzOiEwfSxpbml0OmZ1bmN0aW9uKGUpe2YuZGF0YShlLFwidmVsb2NpdHlcIix7aXNTVkc6bS5pc1NWRyhlKSxpc0FuaW1hdGluZzohMSxjb21wdXRlZFN0eWxlOm51bGwsdHdlZW5zQ29udGFpbmVyOm51bGwscm9vdFByb3BlcnR5VmFsdWVDYWNoZTp7fSx0cmFuc2Zvcm1DYWNoZTp7fX0pfSxob29rOm51bGwsbW9jazohMSx2ZXJzaW9uOnttYWpvcjoxLG1pbm9yOjIscGF0Y2g6Mn0sZGVidWc6ITF9O3QucGFnZVlPZmZzZXQhPT1hPyhiLlN0YXRlLnNjcm9sbEFuY2hvcj10LGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwicGFnZVhPZmZzZXRcIixiLlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwicGFnZVlPZmZzZXRcIik6KGIuU3RhdGUuc2Nyb2xsQW5jaG9yPXIuZG9jdW1lbnRFbGVtZW50fHxyLmJvZHkucGFyZW50Tm9kZXx8ci5ib2R5LGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwic2Nyb2xsTGVmdFwiLGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJzY3JvbGxUb3BcIik7dmFyIHg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3JldHVybi1lLnRlbnNpb24qZS54LWUuZnJpY3Rpb24qZS52fWZ1bmN0aW9uIHQodCxyLGEpe3ZhciBuPXt4OnQueCthLmR4KnIsdjp0LnYrYS5kdipyLHRlbnNpb246dC50ZW5zaW9uLGZyaWN0aW9uOnQuZnJpY3Rpb259O3JldHVybntkeDpuLnYsZHY6ZShuKX19ZnVuY3Rpb24gcihyLGEpe3ZhciBuPXtkeDpyLnYsZHY6ZShyKX0sbz10KHIsLjUqYSxuKSxpPXQociwuNSphLG8pLHM9dChyLGEsaSksbD0xLzYqKG4uZHgrMiooby5keCtpLmR4KStzLmR4KSx1PTEvNioobi5kdisyKihvLmR2K2kuZHYpK3MuZHYpO3JldHVybiByLng9ci54K2wqYSxyLnY9ci52K3UqYSxyfXJldHVybiBmdW5jdGlvbiBhKGUsdCxuKXt2YXIgbyxpLHMsbD17eDotMSx2OjAsdGVuc2lvbjpudWxsLGZyaWN0aW9uOm51bGx9LHU9WzBdLGM9MCxwPTFlLTQsZj0uMDE2O2ZvcihlPXBhcnNlRmxvYXQoZSl8fDUwMCx0PXBhcnNlRmxvYXQodCl8fDIwLG49bnx8bnVsbCxsLnRlbnNpb249ZSxsLmZyaWN0aW9uPXQsbz1udWxsIT09bixvPyhjPWEoZSx0KSxpPWMvbipmKTppPWY7cz1yKHN8fGwsaSksdS5wdXNoKDErcy54KSxjKz0xNixNYXRoLmFicyhzLngpPnAmJk1hdGguYWJzKHMudik+cDspO3JldHVybiBvP2Z1bmN0aW9uKGUpe3JldHVybiB1W2UqKHUubGVuZ3RoLTEpfDBdfTpjfX0oKTtiLkVhc2luZ3M9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxzcHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuIDEtTWF0aC5jb3MoNC41KmUqTWF0aC5QSSkqTWF0aC5leHAoNiotZSl9fSxmLmVhY2goW1tcImVhc2VcIixbLjI1LC4xLC4yNSwxXV0sW1wiZWFzZS1pblwiLFsuNDIsMCwxLDFdXSxbXCJlYXNlLW91dFwiLFswLDAsLjU4LDFdXSxbXCJlYXNlLWluLW91dFwiLFsuNDIsMCwuNTgsMV1dLFtcImVhc2VJblNpbmVcIixbLjQ3LDAsLjc0NSwuNzE1XV0sW1wiZWFzZU91dFNpbmVcIixbLjM5LC41NzUsLjU2NSwxXV0sW1wiZWFzZUluT3V0U2luZVwiLFsuNDQ1LC4wNSwuNTUsLjk1XV0sW1wiZWFzZUluUXVhZFwiLFsuNTUsLjA4NSwuNjgsLjUzXV0sW1wiZWFzZU91dFF1YWRcIixbLjI1LC40NiwuNDUsLjk0XV0sW1wiZWFzZUluT3V0UXVhZFwiLFsuNDU1LC4wMywuNTE1LC45NTVdXSxbXCJlYXNlSW5DdWJpY1wiLFsuNTUsLjA1NSwuNjc1LC4xOV1dLFtcImVhc2VPdXRDdWJpY1wiLFsuMjE1LC42MSwuMzU1LDFdXSxbXCJlYXNlSW5PdXRDdWJpY1wiLFsuNjQ1LC4wNDUsLjM1NSwxXV0sW1wiZWFzZUluUXVhcnRcIixbLjg5NSwuMDMsLjY4NSwuMjJdXSxbXCJlYXNlT3V0UXVhcnRcIixbLjE2NSwuODQsLjQ0LDFdXSxbXCJlYXNlSW5PdXRRdWFydFwiLFsuNzcsMCwuMTc1LDFdXSxbXCJlYXNlSW5RdWludFwiLFsuNzU1LC4wNSwuODU1LC4wNl1dLFtcImVhc2VPdXRRdWludFwiLFsuMjMsMSwuMzIsMV1dLFtcImVhc2VJbk91dFF1aW50XCIsWy44NiwwLC4wNywxXV0sW1wiZWFzZUluRXhwb1wiLFsuOTUsLjA1LC43OTUsLjAzNV1dLFtcImVhc2VPdXRFeHBvXCIsWy4xOSwxLC4yMiwxXV0sW1wiZWFzZUluT3V0RXhwb1wiLFsxLDAsMCwxXV0sW1wiZWFzZUluQ2lyY1wiLFsuNiwuMDQsLjk4LC4zMzVdXSxbXCJlYXNlT3V0Q2lyY1wiLFsuMDc1LC44MiwuMTY1LDFdXSxbXCJlYXNlSW5PdXRDaXJjXCIsWy43ODUsLjEzNSwuMTUsLjg2XV1dLGZ1bmN0aW9uKGUsdCl7Yi5FYXNpbmdzW3RbMF1dPWwuYXBwbHkobnVsbCx0WzFdKX0pO3ZhciBTPWIuQ1NTPXtSZWdFeDp7aXNIZXg6L14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLHZhbHVlVW53cmFwOi9eW0Etel0rXFwoKC4qKVxcKSQvaSx3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOi9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/Lyx2YWx1ZVNwbGl0Oi8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2dpfSxMaXN0czp7Y29sb3JzOltcImZpbGxcIixcInN0cm9rZVwiLFwic3RvcENvbG9yXCIsXCJjb2xvclwiLFwiYmFja2dyb3VuZENvbG9yXCIsXCJib3JkZXJDb2xvclwiLFwiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJMZWZ0Q29sb3JcIixcIm91dGxpbmVDb2xvclwiXSx0cmFuc2Zvcm1zQmFzZTpbXCJ0cmFuc2xhdGVYXCIsXCJ0cmFuc2xhdGVZXCIsXCJzY2FsZVwiLFwic2NhbGVYXCIsXCJzY2FsZVlcIixcInNrZXdYXCIsXCJza2V3WVwiLFwicm90YXRlWlwiXSx0cmFuc2Zvcm1zM0Q6W1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIixcInRyYW5zbGF0ZVpcIixcInNjYWxlWlwiLFwicm90YXRlWFwiLFwicm90YXRlWVwiXX0sSG9va3M6e3RlbXBsYXRlczp7dGV4dFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1clwiLFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sYm94U2hhZG93OltcIkNvbG9yIFggWSBCbHVyIFNwcmVhZFwiLFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLGNsaXA6W1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsXCIwcHggMHB4IDBweCAwcHhcIl0sYmFja2dyb3VuZFBvc2l0aW9uOltcIlggWVwiLFwiMCUgMCVcIl0sdHJhbnNmb3JtT3JpZ2luOltcIlggWSBaXCIsXCI1MCUgNTAlIDBweFwiXSxwZXJzcGVjdGl2ZU9yaWdpbjpbXCJYIFlcIixcIjUwJSA1MCVcIl19LHJlZ2lzdGVyZWQ6e30scmVnaXN0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPFMuTGlzdHMuY29sb3JzLmxlbmd0aDtlKyspe3ZhciB0PVwiY29sb3JcIj09PVMuTGlzdHMuY29sb3JzW2VdP1wiMCAwIDAgMVwiOlwiMjU1IDI1NSAyNTUgMVwiO1MuSG9va3MudGVtcGxhdGVzW1MuTGlzdHMuY29sb3JzW2VdXT1bXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLHRdfXZhciByLGEsbjtpZihkKWZvcihyIGluIFMuSG9va3MudGVtcGxhdGVzKXthPVMuSG9va3MudGVtcGxhdGVzW3JdLG49YVswXS5zcGxpdChcIiBcIik7dmFyIG89YVsxXS5tYXRjaChTLlJlZ0V4LnZhbHVlU3BsaXQpO1wiQ29sb3JcIj09PW5bMF0mJihuLnB1c2gobi5zaGlmdCgpKSxvLnB1c2goby5zaGlmdCgpKSxTLkhvb2tzLnRlbXBsYXRlc1tyXT1bbi5qb2luKFwiIFwiKSxvLmpvaW4oXCIgXCIpXSl9Zm9yKHIgaW4gUy5Ib29rcy50ZW1wbGF0ZXMpe2E9Uy5Ib29rcy50ZW1wbGF0ZXNbcl0sbj1hWzBdLnNwbGl0KFwiIFwiKTtmb3IodmFyIGUgaW4gbil7dmFyIGk9cituW2VdLHM9ZTtTLkhvb2tzLnJlZ2lzdGVyZWRbaV09W3Isc119fX0sZ2V0Um9vdDpmdW5jdGlvbihlKXt2YXIgdD1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07cmV0dXJuIHQ/dFswXTplfSxjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuUmVnRXgudmFsdWVVbndyYXAudGVzdCh0KSYmKHQ9dC5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXSksUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUodCkmJih0PVMuSG9va3MudGVtcGxhdGVzW2VdWzFdKSx0fSxleHRyYWN0VmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYocil7dmFyIGE9clswXSxuPXJbMV07cmV0dXJuIHQ9Uy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGEsdCksdC50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdClbbl19cmV0dXJuIHR9LGluamVjdFZhbHVlOmZ1bmN0aW9uKGUsdCxyKXt2YXIgYT1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYoYSl7dmFyIG4sbyxpPWFbMF0scz1hWzFdO3JldHVybiByPVMuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShpLHIpLG49ci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCksbltzXT10LG89bi5qb2luKFwiIFwiKX1yZXR1cm4gcn19LE5vcm1hbGl6YXRpb25zOntyZWdpc3RlcmVkOntjbGlwOmZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwiY2xpcFwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgYTtyZXR1cm4gUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3Qocik/YT1yOihhPXIudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKSxhPWE/YVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKTpyKSxhO2Nhc2VcImluamVjdFwiOnJldHVyblwicmVjdChcIityK1wiKVwifX0sYmx1cjpmdW5jdGlvbihlLHQscil7c3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gYi5TdGF0ZS5pc0ZpcmVmb3g/XCJmaWx0ZXJcIjpcIi13ZWJraXQtZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhPXBhcnNlRmxvYXQocik7aWYoIWEmJjAhPT1hKXt2YXIgbj1yLnRvU3RyaW5nKCkubWF0Y2goL2JsdXJcXCgoWzAtOV0rW0Etel0rKVxcKS9pKTthPW4/blsxXTowfXJldHVybiBhO2Nhc2VcImluamVjdFwiOnJldHVybiBwYXJzZUZsb2F0KHIpP1wiYmx1cihcIityK1wiKVwiOlwibm9uZVwifX0sb3BhY2l0eTpmdW5jdGlvbihlLHQscil7aWYoOD49ZClzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwiZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhPXIudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7cmV0dXJuIHI9YT9hWzFdLzEwMDoxO2Nhc2VcImluamVjdFwiOnJldHVybiB0LnN0eWxlLnpvb209MSxwYXJzZUZsb2F0KHIpPj0xP1wiXCI6XCJhbHBoYShvcGFjaXR5PVwiK3BhcnNlSW50KDEwMCpwYXJzZUZsb2F0KHIpLDEwKStcIilcIn1lbHNlIHN3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJvcGFjaXR5XCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiByO2Nhc2VcImluamVjdFwiOnJldHVybiByfX19LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7OT49ZHx8Yi5TdGF0ZS5pc0dpbmdlcmJyZWFkfHwoUy5MaXN0cy50cmFuc2Zvcm1zQmFzZT1TLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdChTLkxpc3RzLnRyYW5zZm9ybXMzRCkpO2Zvcih2YXIgZT0wO2U8Uy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7ZSsrKSFmdW5jdGlvbigpe3ZhciB0PVMuTGlzdHMudHJhbnNmb3Jtc0Jhc2VbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdPWZ1bmN0aW9uKGUscixuKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwidHJhbnNmb3JtXCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBpKHIpPT09YXx8aShyKS50cmFuc2Zvcm1DYWNoZVt0XT09PWE/L15zY2FsZS9pLnRlc3QodCk/MTowOmkocikudHJhbnNmb3JtQ2FjaGVbdF0ucmVwbGFjZSgvWygpXS9nLFwiXCIpO2Nhc2VcImluamVjdFwiOnZhciBvPSExO3N3aXRjaCh0LnN1YnN0cigwLHQubGVuZ3RoLTEpKXtjYXNlXCJ0cmFuc2xhdGVcIjpvPSEvKCV8cHh8ZW18cmVtfHZ3fHZofFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJzY2FsXCI6Y2FzZVwic2NhbGVcIjpiLlN0YXRlLmlzQW5kcm9pZCYmaShyKS50cmFuc2Zvcm1DYWNoZVt0XT09PWEmJjE+biYmKG49MSksbz0hLyhcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZVwic2tld1wiOm89IS8oZGVnfFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJyb3RhdGVcIjpvPSEvKGRlZ3xcXGQpJC9pLnRlc3Qobil9cmV0dXJuIG98fChpKHIpLnRyYW5zZm9ybUNhY2hlW3RdPVwiKFwiK24rXCIpXCIpLGkocikudHJhbnNmb3JtQ2FjaGVbdF19fX0oKTtmb3IodmFyIGU9MDtlPFMuTGlzdHMuY29sb3JzLmxlbmd0aDtlKyspIWZ1bmN0aW9uKCl7dmFyIHQ9Uy5MaXN0cy5jb2xvcnNbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdPWZ1bmN0aW9uKGUscixuKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVybiB0O2Nhc2VcImV4dHJhY3RcIjp2YXIgbztpZihTLlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChuKSlvPW47ZWxzZXt2YXIgaSxzPXtibGFjazpcInJnYigwLCAwLCAwKVwiLGJsdWU6XCJyZ2IoMCwgMCwgMjU1KVwiLGdyYXk6XCJyZ2IoMTI4LCAxMjgsIDEyOClcIixncmVlbjpcInJnYigwLCAxMjgsIDApXCIscmVkOlwicmdiKDI1NSwgMCwgMClcIix3aGl0ZTpcInJnYigyNTUsIDI1NSwgMjU1KVwifTsvXltBLXpdKyQvaS50ZXN0KG4pP2k9c1tuXSE9PWE/c1tuXTpzLmJsYWNrOlMuUmVnRXguaXNIZXgudGVzdChuKT9pPVwicmdiKFwiK1MuVmFsdWVzLmhleFRvUmdiKG4pLmpvaW4oXCIgXCIpK1wiKVwiOi9ecmdiYT9cXCgvaS50ZXN0KG4pfHwoaT1zLmJsYWNrKSxvPShpfHxuKS50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpfXJldHVybiA4Pj1kfHwzIT09by5zcGxpdChcIiBcIikubGVuZ3RofHwobys9XCIgMVwiKSxvO2Nhc2VcImluamVjdFwiOnJldHVybiA4Pj1kPzQ9PT1uLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihuPW4uc3BsaXQoL1xccysvKS5zbGljZSgwLDMpLmpvaW4oXCIgXCIpKTozPT09bi5zcGxpdChcIiBcIikubGVuZ3RoJiYobis9XCIgMVwiKSwoOD49ZD9cInJnYlwiOlwicmdiYVwiKStcIihcIituLnJlcGxhY2UoL1xccysvZyxcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZyxcIlwiKStcIilcIn19fSgpfX0sTmFtZXM6e2NhbWVsQ2FzZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9KX0sU1ZHQXR0cmlidXRlOmZ1bmN0aW9uKGUpe3ZhciB0PVwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuKGR8fGIuU3RhdGUuaXNBbmRyb2lkJiYhYi5TdGF0ZS5pc0Nocm9tZSkmJih0Kz1cInx0cmFuc2Zvcm1cIiksbmV3IFJlZ0V4cChcIl4oXCIrdCtcIikkXCIsXCJpXCIpLnRlc3QoZSl9LHByZWZpeENoZWNrOmZ1bmN0aW9uKGUpe2lmKGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXSlyZXR1cm5bYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdLCEwXTtmb3IodmFyIHQ9W1wiXCIsXCJXZWJraXRcIixcIk1velwiLFwibXNcIixcIk9cIl0scj0wLGE9dC5sZW5ndGg7YT5yO3IrKyl7dmFyIG47aWYobj0wPT09cj9lOnRbcl0rZS5yZXBsYWNlKC9eXFx3LyxmdW5jdGlvbihlKXtyZXR1cm4gZS50b1VwcGVyQ2FzZSgpfSksbS5pc1N0cmluZyhiLlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbbl0pKXJldHVybiBiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV09bixbbiwhMF19cmV0dXJuW2UsITFdfX0sVmFsdWVzOntoZXhUb1JnYjpmdW5jdGlvbihlKXt2YXIgdCxyPS9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksYT0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pO3JldHVybiBlPWUucmVwbGFjZShyLGZ1bmN0aW9uKGUsdCxyLGEpe3JldHVybiB0K3QrcityK2ErYX0pLHQ9YS5leGVjKGUpLHQ/W3BhcnNlSW50KHRbMV0sMTYpLHBhcnNlSW50KHRbMl0sMTYpLHBhcnNlSW50KHRbM10sMTYpXTpbMCwwLDBdfSxpc0NTU051bGxWYWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gMD09ZXx8L14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QoZSl9LGdldFVuaXRUeXBlOmZ1bmN0aW9uKGUpe3JldHVybi9eKHJvdGF0ZXxza2V3KS9pLnRlc3QoZSk/XCJkZWdcIjovKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGUpP1wiXCI6XCJweFwifSxnZXREaXNwbGF5VHlwZTpmdW5jdGlvbihlKXt2YXIgdD1lJiZlLnRhZ05hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO3JldHVybi9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdCh0KT9cImlubGluZVwiOi9eKGxpKSQvaS50ZXN0KHQpP1wibGlzdC1pdGVtXCI6L14odHIpJC9pLnRlc3QodCk/XCJ0YWJsZS1yb3dcIjovXih0YWJsZSkkL2kudGVzdCh0KT9cInRhYmxlXCI6L14odGJvZHkpJC9pLnRlc3QodCk/XCJ0YWJsZS1yb3ctZ3JvdXBcIjpcImJsb2NrXCJ9LGFkZENsYXNzOmZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuYWRkKHQpOmUuY2xhc3NOYW1lKz0oZS5jbGFzc05hbWUubGVuZ3RoP1wiIFwiOlwiXCIpK3R9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QucmVtb3ZlKHQpOmUuY2xhc3NOYW1lPWUuY2xhc3NOYW1lLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrdC5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXHN8JClcIixcImdpXCIpLFwiIFwiKX19LGdldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSxyLG4sbyl7ZnVuY3Rpb24gcyhlLHIpe2Z1bmN0aW9uIG4oKXt1JiZTLnNldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIixcIm5vbmVcIil9dmFyIGw9MDtpZig4Pj1kKWw9Zi5jc3MoZSxyKTtlbHNle3ZhciB1PSExO2lmKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KHIpJiYwPT09Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJkaXNwbGF5XCIpJiYodT0hMCxTLnNldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIixTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShlKSkpLCFvKXtpZihcImhlaWdodFwiPT09ciYmXCJib3JkZXItYm94XCIhPT1TLmdldFByb3BlcnR5VmFsdWUoZSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBjPWUub2Zmc2V0SGVpZ2h0LShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyVG9wV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcImJvcmRlckJvdHRvbVdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nVG9wXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nQm90dG9tXCIpKXx8MCk7cmV0dXJuIG4oKSxjfWlmKFwid2lkdGhcIj09PXImJlwiYm9yZGVyLWJveFwiIT09Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgcD1lLm9mZnNldFdpZHRoLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyTGVmdFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJSaWdodFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nTGVmdFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwicGFkZGluZ1JpZ2h0XCIpKXx8MCk7cmV0dXJuIG4oKSxwfX12YXIgZztnPWkoZSk9PT1hP3QuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpOmkoZSkuY29tcHV0ZWRTdHlsZT9pKGUpLmNvbXB1dGVkU3R5bGU6aShlKS5jb21wdXRlZFN0eWxlPXQuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLFwiYm9yZGVyQ29sb3JcIj09PXImJihyPVwiYm9yZGVyVG9wQ29sb3JcIiksbD05PT09ZCYmXCJmaWx0ZXJcIj09PXI/Zy5nZXRQcm9wZXJ0eVZhbHVlKHIpOmdbcl0sKFwiXCI9PT1sfHxudWxsPT09bCkmJihsPWUuc3R5bGVbcl0pLG4oKX1pZihcImF1dG9cIj09PWwmJi9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChyKSl7dmFyIG09cyhlLFwicG9zaXRpb25cIik7KFwiZml4ZWRcIj09PW18fFwiYWJzb2x1dGVcIj09PW0mJi90b3B8bGVmdC9pLnRlc3QocikpJiYobD1mKGUpLnBvc2l0aW9uKClbcl0rXCJweFwiKX1yZXR1cm4gbH12YXIgbDtpZihTLkhvb2tzLnJlZ2lzdGVyZWRbcl0pe3ZhciB1PXIsYz1TLkhvb2tzLmdldFJvb3QodSk7bj09PWEmJihuPVMuZ2V0UHJvcGVydHlWYWx1ZShlLFMuTmFtZXMucHJlZml4Q2hlY2soYylbMF0pKSxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10mJihuPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImV4dHJhY3RcIixlLG4pKSxsPVMuSG9va3MuZXh0cmFjdFZhbHVlKHUsbil9ZWxzZSBpZihTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0pe3ZhciBwLGc7cD1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsZSksXCJ0cmFuc2Zvcm1cIiE9PXAmJihnPXMoZSxTLk5hbWVzLnByZWZpeENoZWNrKHApWzBdKSxTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShnKSYmUy5Ib29rcy50ZW1wbGF0ZXNbcl0mJihnPVMuSG9va3MudGVtcGxhdGVzW3JdWzFdKSksbD1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJleHRyYWN0XCIsZSxnKX1pZighL15bXFxkLV0vLnRlc3QobCkpaWYoaShlKSYmaShlKS5pc1NWRyYmUy5OYW1lcy5TVkdBdHRyaWJ1dGUocikpaWYoL14oaGVpZ2h0fHdpZHRoKSQvaS50ZXN0KHIpKXRyeXtsPWUuZ2V0QkJveCgpW3JdfWNhdGNoKG0pe2w9MH1lbHNlIGw9ZS5nZXRBdHRyaWJ1dGUocik7ZWxzZSBsPXMoZSxTLk5hbWVzLnByZWZpeENoZWNrKHIpWzBdKTtyZXR1cm4gUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUobCkmJihsPTApLGIuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiR2V0IFwiK3IrXCI6IFwiK2wpLGx9LHNldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSxyLGEsbixvKXt2YXIgcz1yO2lmKFwic2Nyb2xsXCI9PT1yKW8uY29udGFpbmVyP28uY29udGFpbmVyW1wic2Nyb2xsXCIrby5kaXJlY3Rpb25dPWE6XCJMZWZ0XCI9PT1vLmRpcmVjdGlvbj90LnNjcm9sbFRvKGEsby5hbHRlcm5hdGVWYWx1ZSk6dC5zY3JvbGxUbyhvLmFsdGVybmF0ZVZhbHVlLGEpO2Vsc2UgaWYoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdJiZcInRyYW5zZm9ybVwiPT09Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLGUpKVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImluamVjdFwiLGUsYSkscz1cInRyYW5zZm9ybVwiLGE9aShlKS50cmFuc2Zvcm1DYWNoZVtyXTtlbHNle2lmKFMuSG9va3MucmVnaXN0ZXJlZFtyXSl7dmFyIGw9cix1PVMuSG9va3MuZ2V0Um9vdChyKTtuPW58fFMuZ2V0UHJvcGVydHlWYWx1ZShlLHUpLGE9Uy5Ib29rcy5pbmplY3RWYWx1ZShsLGEsbikscj11fWlmKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSYmKGE9Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiaW5qZWN0XCIsZSxhKSxyPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIixlKSkscz1TLk5hbWVzLnByZWZpeENoZWNrKHIpWzBdLDg+PWQpdHJ5e2Uuc3R5bGVbc109YX1jYXRjaChjKXtiLmRlYnVnJiZjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIrYStcIl0gZm9yIFtcIitzK1wiXVwiKX1lbHNlIGkoZSkmJmkoZSkuaXNTVkcmJlMuTmFtZXMuU1ZHQXR0cmlidXRlKHIpP2Uuc2V0QXR0cmlidXRlKHIsYSk6ZS5zdHlsZVtzXT1hO2IuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiU2V0IFwiK3IrXCIgKFwiK3MrXCIpOiBcIithKX1yZXR1cm5bcyxhXX0sZmx1c2hUcmFuc2Zvcm1DYWNoZTpmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe3JldHVybiBwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLHQpKX12YXIgcj1cIlwiO2lmKChkfHxiLlN0YXRlLmlzQW5kcm9pZCYmIWIuU3RhdGUuaXNDaHJvbWUpJiZpKGUpLmlzU1ZHKXt2YXIgYT17dHJhbnNsYXRlOlt0KFwidHJhbnNsYXRlWFwiKSx0KFwidHJhbnNsYXRlWVwiKV0sc2tld1g6W3QoXCJza2V3WFwiKV0sc2tld1k6W3QoXCJza2V3WVwiKV0sc2NhbGU6MSE9PXQoXCJzY2FsZVwiKT9bdChcInNjYWxlXCIpLHQoXCJzY2FsZVwiKV06W3QoXCJzY2FsZVhcIiksdChcInNjYWxlWVwiKV0scm90YXRlOlt0KFwicm90YXRlWlwiKSwwLDBdfTtmLmVhY2goaShlKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihlKXsvXnRyYW5zbGF0ZS9pLnRlc3QoZSk/ZT1cInRyYW5zbGF0ZVwiOi9ec2NhbGUvaS50ZXN0KGUpP2U9XCJzY2FsZVwiOi9ecm90YXRlL2kudGVzdChlKSYmKGU9XCJyb3RhdGVcIiksYVtlXSYmKHIrPWUrXCIoXCIrYVtlXS5qb2luKFwiIFwiKStcIikgXCIsZGVsZXRlIGFbZV0pfSl9ZWxzZXt2YXIgbixvO2YuZWFjaChpKGUpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKHQpe3JldHVybiBuPWkoZSkudHJhbnNmb3JtQ2FjaGVbdF0sXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiPT09dD8obz1uLCEwKTooOT09PWQmJlwicm90YXRlWlwiPT09dCYmKHQ9XCJyb3RhdGVcIiksdm9pZChyKz10K24rXCIgXCIpKX0pLG8mJihyPVwicGVyc3BlY3RpdmVcIitvK1wiIFwiK3IpfVMuc2V0UHJvcGVydHlWYWx1ZShlLFwidHJhbnNmb3JtXCIscil9fTtTLkhvb2tzLnJlZ2lzdGVyKCksUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLGIuaG9vaz1mdW5jdGlvbihlLHQscil7dmFyIG49YTtyZXR1cm4gZT1vKGUpLGYuZWFjaChlLGZ1bmN0aW9uKGUsbyl7aWYoaShvKT09PWEmJmIuaW5pdChvKSxyPT09YSluPT09YSYmKG49Yi5DU1MuZ2V0UHJvcGVydHlWYWx1ZShvLHQpKTtlbHNle3ZhciBzPWIuQ1NTLnNldFByb3BlcnR5VmFsdWUobyx0LHIpO1widHJhbnNmb3JtXCI9PT1zWzBdJiZiLkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKG8pLG49c319KSxufTt2YXIgUD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gcz9rLnByb21pc2V8fG51bGw6bH1mdW5jdGlvbiBuKCl7ZnVuY3Rpb24gZShlKXtmdW5jdGlvbiBwKGUsdCl7dmFyIHI9YSxuPWEsaT1hO3JldHVybiBtLmlzQXJyYXkoZSk/KHI9ZVswXSwhbS5pc0FycmF5KGVbMV0pJiYvXltcXGQtXS8udGVzdChlWzFdKXx8bS5pc0Z1bmN0aW9uKGVbMV0pfHxTLlJlZ0V4LmlzSGV4LnRlc3QoZVsxXSk/aT1lWzFdOihtLmlzU3RyaW5nKGVbMV0pJiYhUy5SZWdFeC5pc0hleC50ZXN0KGVbMV0pfHxtLmlzQXJyYXkoZVsxXSkpJiYobj10P2VbMV06dShlWzFdLHMuZHVyYXRpb24pLGVbMl0hPT1hJiYoaT1lWzJdKSkpOnI9ZSx0fHwobj1ufHxzLmVhc2luZyksbS5pc0Z1bmN0aW9uKHIpJiYocj1yLmNhbGwobyxWLHcpKSxtLmlzRnVuY3Rpb24oaSkmJihpPWkuY2FsbChvLFYsdykpLFtyfHwwLG4saV19ZnVuY3Rpb24gZChlLHQpe3ZhciByLGE7cmV0dXJuIGE9KHR8fFwiMFwiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWyVBLXpdKyQvLGZ1bmN0aW9uKGUpe3JldHVybiByPWUsXCJcIn0pLHJ8fChyPVMuVmFsdWVzLmdldFVuaXRUeXBlKGUpKSxbYSxyXX1mdW5jdGlvbiBoKCl7dmFyIGU9e215UGFyZW50Om8ucGFyZW50Tm9kZXx8ci5ib2R5LHBvc2l0aW9uOlMuZ2V0UHJvcGVydHlWYWx1ZShvLFwicG9zaXRpb25cIiksZm9udFNpemU6Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sXCJmb250U2l6ZVwiKX0sYT1lLnBvc2l0aW9uPT09TC5sYXN0UG9zaXRpb24mJmUubXlQYXJlbnQ9PT1MLmxhc3RQYXJlbnQsbj1lLmZvbnRTaXplPT09TC5sYXN0Rm9udFNpemU7TC5sYXN0UGFyZW50PWUubXlQYXJlbnQsTC5sYXN0UG9zaXRpb249ZS5wb3NpdGlvbixMLmxhc3RGb250U2l6ZT1lLmZvbnRTaXplO3ZhciBzPTEwMCxsPXt9O2lmKG4mJmEpbC5lbVRvUHg9TC5sYXN0RW1Ub1B4LGwucGVyY2VudFRvUHhXaWR0aD1MLmxhc3RQZXJjZW50VG9QeFdpZHRoLGwucGVyY2VudFRvUHhIZWlnaHQ9TC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ7ZWxzZXt2YXIgdT1pKG8pLmlzU1ZHP3IuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInJlY3RcIik6ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IuaW5pdCh1KSxlLm15UGFyZW50LmFwcGVuZENoaWxkKHUpLGYuZWFjaChbXCJvdmVyZmxvd1wiLFwib3ZlcmZsb3dYXCIsXCJvdmVyZmxvd1lcIl0sZnVuY3Rpb24oZSx0KXtiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsdCxcImhpZGRlblwiKX0pLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcInBvc2l0aW9uXCIsZS5wb3NpdGlvbiksYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LFwiZm9udFNpemVcIixlLmZvbnRTaXplKSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJib3hTaXppbmdcIixcImNvbnRlbnQtYm94XCIpLGYuZWFjaChbXCJtaW5XaWR0aFwiLFwibWF4V2lkdGhcIixcIndpZHRoXCIsXCJtaW5IZWlnaHRcIixcIm1heEhlaWdodFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGUsdCl7Yi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LHQscytcIiVcIil9KSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJwYWRkaW5nTGVmdFwiLHMrXCJlbVwiKSxsLnBlcmNlbnRUb1B4V2lkdGg9TC5sYXN0UGVyY2VudFRvUHhXaWR0aD0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSxcIndpZHRoXCIsbnVsbCwhMCkpfHwxKS9zLGwucGVyY2VudFRvUHhIZWlnaHQ9TC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ9KHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsXCJoZWlnaHRcIixudWxsLCEwKSl8fDEpL3MsbC5lbVRvUHg9TC5sYXN0RW1Ub1B4PShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LFwicGFkZGluZ0xlZnRcIikpfHwxKS9zLGUubXlQYXJlbnQucmVtb3ZlQ2hpbGQodSl9cmV0dXJuIG51bGw9PT1MLnJlbVRvUHgmJihMLnJlbVRvUHg9cGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoci5ib2R5LFwiZm9udFNpemVcIikpfHwxNiksbnVsbD09PUwudndUb1B4JiYoTC52d1RvUHg9cGFyc2VGbG9hdCh0LmlubmVyV2lkdGgpLzEwMCxMLnZoVG9QeD1wYXJzZUZsb2F0KHQuaW5uZXJIZWlnaHQpLzEwMCksbC5yZW1Ub1B4PUwucmVtVG9QeCxsLnZ3VG9QeD1MLnZ3VG9QeCxsLnZoVG9QeD1MLnZoVG9QeCxiLmRlYnVnPj0xJiZjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIitKU09OLnN0cmluZ2lmeShsKSxvKSxsfWlmKHMuYmVnaW4mJjA9PT1WKXRyeXtzLmJlZ2luLmNhbGwoZyxnKX1jYXRjaCh4KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgeH0sMSl9aWYoXCJzY3JvbGxcIj09PUEpe3ZhciBQLEMsVCxGPS9eeCQvaS50ZXN0KHMuYXhpcyk/XCJMZWZ0XCI6XCJUb3BcIixqPXBhcnNlRmxvYXQocy5vZmZzZXQpfHwwO3MuY29udGFpbmVyP20uaXNXcmFwcGVkKHMuY29udGFpbmVyKXx8bS5pc05vZGUocy5jb250YWluZXIpPyhzLmNvbnRhaW5lcj1zLmNvbnRhaW5lclswXXx8cy5jb250YWluZXIsUD1zLmNvbnRhaW5lcltcInNjcm9sbFwiK0ZdLFQ9UCtmKG8pLnBvc2l0aW9uKClbRi50b0xvd2VyQ2FzZSgpXStqKTpzLmNvbnRhaW5lcj1udWxsOihQPWIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiK0ZdXSxDPWIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiKyhcIkxlZnRcIj09PUY/XCJUb3BcIjpcIkxlZnRcIildXSxUPWYobykub2Zmc2V0KClbRi50b0xvd2VyQ2FzZSgpXStqKSxsPXtzY3JvbGw6e3Jvb3RQcm9wZXJ0eVZhbHVlOiExLHN0YXJ0VmFsdWU6UCxjdXJyZW50VmFsdWU6UCxlbmRWYWx1ZTpULHVuaXRUeXBlOlwiXCIsZWFzaW5nOnMuZWFzaW5nLHNjcm9sbERhdGE6e2NvbnRhaW5lcjpzLmNvbnRhaW5lcixkaXJlY3Rpb246RixhbHRlcm5hdGVWYWx1ZTpDfX0sZWxlbWVudDpvfSxiLmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoc2Nyb2xsKTogXCIsbC5zY3JvbGwsbyl9ZWxzZSBpZihcInJldmVyc2VcIj09PUEpe2lmKCFpKG8pLnR3ZWVuc0NvbnRhaW5lcilyZXR1cm4gdm9pZCBmLmRlcXVldWUobyxzLnF1ZXVlKTtcIm5vbmVcIj09PWkobykub3B0cy5kaXNwbGF5JiYoaShvKS5vcHRzLmRpc3BsYXk9XCJhdXRvXCIpLFwiaGlkZGVuXCI9PT1pKG8pLm9wdHMudmlzaWJpbGl0eSYmKGkobykub3B0cy52aXNpYmlsaXR5PVwidmlzaWJsZVwiKSxpKG8pLm9wdHMubG9vcD0hMSxpKG8pLm9wdHMuYmVnaW49bnVsbCxpKG8pLm9wdHMuY29tcGxldGU9bnVsbCx2LmVhc2luZ3x8ZGVsZXRlIHMuZWFzaW5nLHYuZHVyYXRpb258fGRlbGV0ZSBzLmR1cmF0aW9uLHM9Zi5leHRlbmQoe30saShvKS5vcHRzLHMpO3ZhciBFPWYuZXh0ZW5kKCEwLHt9LGkobykudHdlZW5zQ29udGFpbmVyKTtmb3IodmFyIEggaW4gRSlpZihcImVsZW1lbnRcIiE9PUgpe3ZhciBOPUVbSF0uc3RhcnRWYWx1ZTtFW0hdLnN0YXJ0VmFsdWU9RVtIXS5jdXJyZW50VmFsdWU9RVtIXS5lbmRWYWx1ZSxFW0hdLmVuZFZhbHVlPU4sbS5pc0VtcHR5T2JqZWN0KHYpfHwoRVtIXS5lYXNpbmc9cy5lYXNpbmcpLGIuZGVidWcmJmNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiK0grXCIpOiBcIitKU09OLnN0cmluZ2lmeShFW0hdKSxvKX1sPUV9ZWxzZSBpZihcInN0YXJ0XCI9PT1BKXt2YXIgRTtpKG8pLnR3ZWVuc0NvbnRhaW5lciYmaShvKS5pc0FuaW1hdGluZz09PSEwJiYoRT1pKG8pLnR3ZWVuc0NvbnRhaW5lciksZi5lYWNoKHksZnVuY3Rpb24oZSx0KXtpZihSZWdFeHAoXCJeXCIrUy5MaXN0cy5jb2xvcnMuam9pbihcIiR8XlwiKStcIiRcIikudGVzdChlKSl7dmFyIHI9cCh0LCEwKSxuPXJbMF0sbz1yWzFdLGk9clsyXTtpZihTLlJlZ0V4LmlzSGV4LnRlc3Qobikpe2Zvcih2YXIgcz1bXCJSZWRcIixcIkdyZWVuXCIsXCJCbHVlXCJdLGw9Uy5WYWx1ZXMuaGV4VG9SZ2IobiksdT1pP1MuVmFsdWVzLmhleFRvUmdiKGkpOmEsYz0wO2M8cy5sZW5ndGg7YysrKXt2YXIgZj1bbFtjXV07byYmZi5wdXNoKG8pLHUhPT1hJiZmLnB1c2godVtjXSkseVtlK3NbY11dPWZ9ZGVsZXRlIHlbZV19fX0pO2Zvcih2YXIgeiBpbiB5KXt2YXIgTz1wKHlbel0pLHE9T1swXSwkPU9bMV0sTT1PWzJdO3o9Uy5OYW1lcy5jYW1lbENhc2Uoeik7dmFyIEk9Uy5Ib29rcy5nZXRSb290KHopLEI9ITE7aWYoaShvKS5pc1NWR3x8XCJ0d2VlblwiPT09SXx8Uy5OYW1lcy5wcmVmaXhDaGVjayhJKVsxXSE9PSExfHxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSV0hPT1hKXsocy5kaXNwbGF5IT09YSYmbnVsbCE9PXMuZGlzcGxheSYmXCJub25lXCIhPT1zLmRpc3BsYXl8fHMudmlzaWJpbGl0eSE9PWEmJlwiaGlkZGVuXCIhPT1zLnZpc2liaWxpdHkpJiYvb3BhY2l0eXxmaWx0ZXIvLnRlc3QoeikmJiFNJiYwIT09cSYmKE09MCkscy5fY2FjaGVWYWx1ZXMmJkUmJkVbel0/KE09PT1hJiYoTT1FW3pdLmVuZFZhbHVlK0Vbel0udW5pdFR5cGUpLEI9aShvKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ldKTpTLkhvb2tzLnJlZ2lzdGVyZWRbel0/TT09PWE/KEI9Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sSSksTT1TLmdldFByb3BlcnR5VmFsdWUobyx6LEIpKTpCPVMuSG9va3MudGVtcGxhdGVzW0ldWzFdOk09PT1hJiYoTT1TLmdldFByb3BlcnR5VmFsdWUobyx6KSk7dmFyIFcsRyxZLEQ9ITE7aWYoVz1kKHosTSksTT1XWzBdLFk9V1sxXSxXPWQoeixxKSxxPVdbMF0ucmVwbGFjZSgvXihbKy1cXC8qXSk9LyxmdW5jdGlvbihlLHQpe3JldHVybiBEPXQsXCJcIn0pLEc9V1sxXSxNPXBhcnNlRmxvYXQoTSl8fDAscT1wYXJzZUZsb2F0KHEpfHwwLFwiJVwiPT09RyYmKC9eKGZvbnRTaXplfGxpbmVIZWlnaHQpJC8udGVzdCh6KT8ocS89MTAwLEc9XCJlbVwiKTovXnNjYWxlLy50ZXN0KHopPyhxLz0xMDAsRz1cIlwiKTovKFJlZHxHcmVlbnxCbHVlKSQvaS50ZXN0KHopJiYocT1xLzEwMCoyNTUsRz1cIlwiKSksL1tcXC8qXS8udGVzdChEKSlHPVk7ZWxzZSBpZihZIT09RyYmMCE9PU0paWYoMD09PXEpRz1ZO2Vsc2V7bj1ufHxoKCk7dmFyIFE9L21hcmdpbnxwYWRkaW5nfGxlZnR8cmlnaHR8d2lkdGh8dGV4dHx3b3JkfGxldHRlci9pLnRlc3Qoeil8fC9YJC8udGVzdCh6KXx8XCJ4XCI9PT16P1wieFwiOlwieVwiO3N3aXRjaChZKXtjYXNlXCIlXCI6TSo9XCJ4XCI9PT1RP24ucGVyY2VudFRvUHhXaWR0aDpuLnBlcmNlbnRUb1B4SGVpZ2h0O2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpNKj1uW1krXCJUb1B4XCJdfXN3aXRjaChHKXtjYXNlXCIlXCI6TSo9MS8oXCJ4XCI9PT1RP24ucGVyY2VudFRvUHhXaWR0aDpuLnBlcmNlbnRUb1B4SGVpZ2h0KTticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6TSo9MS9uW0crXCJUb1B4XCJdfX1zd2l0Y2goRCl7Y2FzZVwiK1wiOnE9TStxO2JyZWFrO2Nhc2VcIi1cIjpxPU0tcTticmVhaztjYXNlXCIqXCI6cT1NKnE7YnJlYWs7Y2FzZVwiL1wiOnE9TS9xfWxbel09e3Jvb3RQcm9wZXJ0eVZhbHVlOkIsc3RhcnRWYWx1ZTpNLGN1cnJlbnRWYWx1ZTpNLGVuZFZhbHVlOnEsdW5pdFR5cGU6RyxlYXNpbmc6JH0sYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKFwiK3orXCIpOiBcIitKU09OLnN0cmluZ2lmeShsW3pdKSxvKX1lbHNlIGIuZGVidWcmJmNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiK0krXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKX1sLmVsZW1lbnQ9b31sLmVsZW1lbnQmJihTLlZhbHVlcy5hZGRDbGFzcyhvLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpLFIucHVzaChsKSxcIlwiPT09cy5xdWV1ZSYmKGkobykudHdlZW5zQ29udGFpbmVyPWwsaShvKS5vcHRzPXMpLGkobykuaXNBbmltYXRpbmc9ITAsVj09PXctMT8oYi5TdGF0ZS5jYWxscy5wdXNoKFtSLGcscyxudWxsLGsucmVzb2x2ZXJdKSxiLlN0YXRlLmlzVGlja2luZz09PSExJiYoYi5TdGF0ZS5pc1RpY2tpbmc9ITAsYygpKSk6VisrKX12YXIgbixvPXRoaXMscz1mLmV4dGVuZCh7fSxiLmRlZmF1bHRzLHYpLGw9e307c3dpdGNoKGkobyk9PT1hJiZiLmluaXQobykscGFyc2VGbG9hdChzLmRlbGF5KSYmcy5xdWV1ZSE9PSExJiZmLnF1ZXVlKG8scy5xdWV1ZSxmdW5jdGlvbihlKXtiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsaShvKS5kZWxheVRpbWVyPXtzZXRUaW1lb3V0OnNldFRpbWVvdXQoZSxwYXJzZUZsb2F0KHMuZGVsYXkpKSxuZXh0OmV9fSkscy5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImZhc3RcIjpzLmR1cmF0aW9uPTIwMDticmVhaztjYXNlXCJub3JtYWxcIjpzLmR1cmF0aW9uPWg7YnJlYWs7Y2FzZVwic2xvd1wiOnMuZHVyYXRpb249NjAwO2JyZWFrO2RlZmF1bHQ6cy5kdXJhdGlvbj1wYXJzZUZsb2F0KHMuZHVyYXRpb24pfHwxfWIubW9jayE9PSExJiYoYi5tb2NrPT09ITA/cy5kdXJhdGlvbj1zLmRlbGF5PTE6KHMuZHVyYXRpb24qPXBhcnNlRmxvYXQoYi5tb2NrKXx8MSxzLmRlbGF5Kj1wYXJzZUZsb2F0KGIubW9jayl8fDEpKSxzLmVhc2luZz11KHMuZWFzaW5nLHMuZHVyYXRpb24pLHMuYmVnaW4mJiFtLmlzRnVuY3Rpb24ocy5iZWdpbikmJihzLmJlZ2luPW51bGwpLHMucHJvZ3Jlc3MmJiFtLmlzRnVuY3Rpb24ocy5wcm9ncmVzcykmJihzLnByb2dyZXNzPW51bGwpLHMuY29tcGxldGUmJiFtLmlzRnVuY3Rpb24ocy5jb21wbGV0ZSkmJihzLmNvbXBsZXRlPW51bGwpLHMuZGlzcGxheSE9PWEmJm51bGwhPT1zLmRpc3BsYXkmJihzLmRpc3BsYXk9cy5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcImF1dG9cIj09PXMuZGlzcGxheSYmKHMuZGlzcGxheT1iLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUobykpKSxzLnZpc2liaWxpdHkhPT1hJiZudWxsIT09cy52aXNpYmlsaXR5JiYocy52aXNpYmlsaXR5PXMudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLHMubW9iaWxlSEE9cy5tb2JpbGVIQSYmYi5TdGF0ZS5pc01vYmlsZSYmIWIuU3RhdGUuaXNHaW5nZXJicmVhZCxzLnF1ZXVlPT09ITE/cy5kZWxheT9zZXRUaW1lb3V0KGUscy5kZWxheSk6ZSgpOmYucXVldWUobyxzLnF1ZXVlLGZ1bmN0aW9uKHQscil7cmV0dXJuIHI9PT0hMD8oay5wcm9taXNlJiZrLnJlc29sdmVyKGcpLCEwKTooYi52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLHZvaWQgZSh0KSl9KSxcIlwiIT09cy5xdWV1ZSYmXCJmeFwiIT09cy5xdWV1ZXx8XCJpbnByb2dyZXNzXCI9PT1mLnF1ZXVlKG8pWzBdfHxmLmRlcXVldWUobyl9dmFyIHMsbCxkLGcseSx2LHg9YXJndW1lbnRzWzBdJiYoYXJndW1lbnRzWzBdLnB8fGYuaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykmJiFhcmd1bWVudHNbMF0ucHJvcGVydGllcy5uYW1lc3x8bS5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpO2lmKG0uaXNXcmFwcGVkKHRoaXMpPyhzPSExLGQ9MCxnPXRoaXMsbD10aGlzKToocz0hMCxkPTEsZz14P2FyZ3VtZW50c1swXS5lbGVtZW50c3x8YXJndW1lbnRzWzBdLmU6YXJndW1lbnRzWzBdKSxnPW8oZykpe3g/KHk9YXJndW1lbnRzWzBdLnByb3BlcnRpZXN8fGFyZ3VtZW50c1swXS5wLHY9YXJndW1lbnRzWzBdLm9wdGlvbnN8fGFyZ3VtZW50c1swXS5vKTooeT1hcmd1bWVudHNbZF0sdj1hcmd1bWVudHNbZCsxXSk7dmFyIHc9Zy5sZW5ndGgsVj0wO2lmKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdCh5KSYmIWYuaXNQbGFpbk9iamVjdCh2KSl7dmFyIEM9ZCsxO3Y9e307Zm9yKHZhciBUPUM7VDxhcmd1bWVudHMubGVuZ3RoO1QrKyltLmlzQXJyYXkoYXJndW1lbnRzW1RdKXx8IS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW1RdKSYmIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tUXSk/bS5pc1N0cmluZyhhcmd1bWVudHNbVF0pfHxtLmlzQXJyYXkoYXJndW1lbnRzW1RdKT92LmVhc2luZz1hcmd1bWVudHNbVF06bS5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tUXSkmJih2LmNvbXBsZXRlPWFyZ3VtZW50c1tUXSk6di5kdXJhdGlvbj1hcmd1bWVudHNbVF19dmFyIGs9e3Byb21pc2U6bnVsbCxyZXNvbHZlcjpudWxsLHJlamVjdGVyOm51bGx9O3MmJmIuUHJvbWlzZSYmKGsucHJvbWlzZT1uZXcgYi5Qcm9taXNlKGZ1bmN0aW9uKGUsdCl7ay5yZXNvbHZlcj1lLGsucmVqZWN0ZXI9dH0pKTt2YXIgQTtzd2l0Y2goeSl7Y2FzZVwic2Nyb2xsXCI6QT1cInNjcm9sbFwiO2JyZWFrO2Nhc2VcInJldmVyc2VcIjpBPVwicmV2ZXJzZVwiO2JyZWFrO2Nhc2VcImZpbmlzaFwiOmNhc2VcInN0b3BcIjpmLmVhY2goZyxmdW5jdGlvbihlLHQpe2kodCkmJmkodCkuZGVsYXlUaW1lciYmKGNsZWFyVGltZW91dChpKHQpLmRlbGF5VGltZXIuc2V0VGltZW91dCksaSh0KS5kZWxheVRpbWVyLm5leHQmJmkodCkuZGVsYXlUaW1lci5uZXh0KCksZGVsZXRlIGkodCkuZGVsYXlUaW1lcil9KTt2YXIgRj1bXTtyZXR1cm4gZi5lYWNoKGIuU3RhdGUuY2FsbHMsZnVuY3Rpb24oZSx0KXt0JiZmLmVhY2godFsxXSxmdW5jdGlvbihyLG4pe3ZhciBvPXY9PT1hP1wiXCI6djtyZXR1cm4gbz09PSEwfHx0WzJdLnF1ZXVlPT09b3x8dj09PWEmJnRbMl0ucXVldWU9PT0hMT92b2lkIGYuZWFjaChnLGZ1bmN0aW9uKHIsYSl7YT09PW4mJigodj09PSEwfHxtLmlzU3RyaW5nKHYpKSYmKGYuZWFjaChmLnF1ZXVlKGEsbS5pc1N0cmluZyh2KT92OlwiXCIpLGZ1bmN0aW9uKGUsdCl7XHJcbm0uaXNGdW5jdGlvbih0KSYmdChudWxsLCEwKX0pLGYucXVldWUoYSxtLmlzU3RyaW5nKHYpP3Y6XCJcIixbXSkpLFwic3RvcFwiPT09eT8oaShhKSYmaShhKS50d2VlbnNDb250YWluZXImJm8hPT0hMSYmZi5lYWNoKGkoYSkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGUsdCl7dC5lbmRWYWx1ZT10LmN1cnJlbnRWYWx1ZX0pLEYucHVzaChlKSk6XCJmaW5pc2hcIj09PXkmJih0WzJdLmR1cmF0aW9uPTEpKX0pOiEwfSl9KSxcInN0b3BcIj09PXkmJihmLmVhY2goRixmdW5jdGlvbihlLHQpe3AodCwhMCl9KSxrLnByb21pc2UmJmsucmVzb2x2ZXIoZykpLGUoKTtkZWZhdWx0OmlmKCFmLmlzUGxhaW5PYmplY3QoeSl8fG0uaXNFbXB0eU9iamVjdCh5KSl7aWYobS5pc1N0cmluZyh5KSYmYi5SZWRpcmVjdHNbeV0pe3ZhciBqPWYuZXh0ZW5kKHt9LHYpLEU9ai5kdXJhdGlvbixIPWouZGVsYXl8fDA7cmV0dXJuIGouYmFja3dhcmRzPT09ITAmJihnPWYuZXh0ZW5kKCEwLFtdLGcpLnJldmVyc2UoKSksZi5lYWNoKGcsZnVuY3Rpb24oZSx0KXtwYXJzZUZsb2F0KGouc3RhZ2dlcik/ai5kZWxheT1IK3BhcnNlRmxvYXQoai5zdGFnZ2VyKSplOm0uaXNGdW5jdGlvbihqLnN0YWdnZXIpJiYoai5kZWxheT1IK2ouc3RhZ2dlci5jYWxsKHQsZSx3KSksai5kcmFnJiYoai5kdXJhdGlvbj1wYXJzZUZsb2F0KEUpfHwoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdCh5KT8xZTM6aCksai5kdXJhdGlvbj1NYXRoLm1heChqLmR1cmF0aW9uKihqLmJhY2t3YXJkcz8xLWUvdzooZSsxKS93KSwuNzUqai5kdXJhdGlvbiwyMDApKSxiLlJlZGlyZWN0c1t5XS5jYWxsKHQsdCxqfHx7fSxlLHcsZyxrLnByb21pc2U/azphKX0pLGUoKX12YXIgTj1cIlZlbG9jaXR5OiBGaXJzdCBhcmd1bWVudCAoXCIreStcIikgd2FzIG5vdCBhIHByb3BlcnR5IG1hcCwgYSBrbm93biBhY3Rpb24sIG9yIGEgcmVnaXN0ZXJlZCByZWRpcmVjdC4gQWJvcnRpbmcuXCI7cmV0dXJuIGsucHJvbWlzZT9rLnJlamVjdGVyKG5ldyBFcnJvcihOKSk6Y29uc29sZS5sb2coTiksZSgpfUE9XCJzdGFydFwifXZhciBMPXtsYXN0UGFyZW50Om51bGwsbGFzdFBvc2l0aW9uOm51bGwsbGFzdEZvbnRTaXplOm51bGwsbGFzdFBlcmNlbnRUb1B4V2lkdGg6bnVsbCxsYXN0UGVyY2VudFRvUHhIZWlnaHQ6bnVsbCxsYXN0RW1Ub1B4Om51bGwscmVtVG9QeDpudWxsLHZ3VG9QeDpudWxsLHZoVG9QeDpudWxsfSxSPVtdO2YuZWFjaChnLGZ1bmN0aW9uKGUsdCl7bS5pc05vZGUodCkmJm4uY2FsbCh0KX0pO3ZhciB6LGo9Zi5leHRlbmQoe30sYi5kZWZhdWx0cyx2KTtpZihqLmxvb3A9cGFyc2VJbnQoai5sb29wKSx6PTIqai5sb29wLTEsai5sb29wKWZvcih2YXIgTz0wO3o+TztPKyspe3ZhciBxPXtkZWxheTpqLmRlbGF5LHByb2dyZXNzOmoucHJvZ3Jlc3N9O089PT16LTEmJihxLmRpc3BsYXk9ai5kaXNwbGF5LHEudmlzaWJpbGl0eT1qLnZpc2liaWxpdHkscS5jb21wbGV0ZT1qLmNvbXBsZXRlKSxQKGcsXCJyZXZlcnNlXCIscSl9cmV0dXJuIGUoKX19O2I9Zi5leHRlbmQoUCxiKSxiLmFuaW1hdGU9UDt2YXIgdz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZztyZXR1cm4gYi5TdGF0ZS5pc01vYmlsZXx8ci5oaWRkZW49PT1hfHxyLmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtyLmhpZGRlbj8odz1mdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2UoITApfSwxNil9LGMoKSk6dz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8Z30pLGUuVmVsb2NpdHk9YixlIT09dCYmKGUuZm4udmVsb2NpdHk9UCxlLmZuLnZlbG9jaXR5LmRlZmF1bHRzPWIuZGVmYXVsdHMpLGYuZWFjaChbXCJEb3duXCIsXCJVcFwiXSxmdW5jdGlvbihlLHQpe2IuUmVkaXJlY3RzW1wic2xpZGVcIit0XT1mdW5jdGlvbihlLHIsbixvLGkscyl7dmFyIGw9Zi5leHRlbmQoe30sciksdT1sLmJlZ2luLGM9bC5jb21wbGV0ZSxwPXtoZWlnaHQ6XCJcIixtYXJnaW5Ub3A6XCJcIixtYXJnaW5Cb3R0b206XCJcIixwYWRkaW5nVG9wOlwiXCIscGFkZGluZ0JvdHRvbTpcIlwifSxkPXt9O2wuZGlzcGxheT09PWEmJihsLmRpc3BsYXk9XCJEb3duXCI9PT10P1wiaW5saW5lXCI9PT1iLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZSk/XCJpbmxpbmUtYmxvY2tcIjpcImJsb2NrXCI6XCJub25lXCIpLGwuYmVnaW49ZnVuY3Rpb24oKXt1JiZ1LmNhbGwoaSxpKTtmb3IodmFyIHIgaW4gcCl7ZFtyXT1lLnN0eWxlW3JdO3ZhciBhPWIuQ1NTLmdldFByb3BlcnR5VmFsdWUoZSxyKTtwW3JdPVwiRG93blwiPT09dD9bYSwwXTpbMCxhXX1kLm92ZXJmbG93PWUuc3R5bGUub3ZlcmZsb3csZS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwifSxsLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIGQpZS5zdHlsZVt0XT1kW3RdO2MmJmMuY2FsbChpLGkpLHMmJnMucmVzb2x2ZXIoaSl9LGIoZSxwLGwpfX0pLGYuZWFjaChbXCJJblwiLFwiT3V0XCJdLGZ1bmN0aW9uKGUsdCl7Yi5SZWRpcmVjdHNbXCJmYWRlXCIrdF09ZnVuY3Rpb24oZSxyLG4sbyxpLHMpe3ZhciBsPWYuZXh0ZW5kKHt9LHIpLHU9e29wYWNpdHk6XCJJblwiPT09dD8xOjB9LGM9bC5jb21wbGV0ZTtsLmNvbXBsZXRlPW4hPT1vLTE/bC5iZWdpbj1udWxsOmZ1bmN0aW9uKCl7YyYmYy5jYWxsKGksaSkscyYmcy5yZXNvbHZlcihpKX0sbC5kaXNwbGF5PT09YSYmKGwuZGlzcGxheT1cIkluXCI9PT10P1wiYXV0b1wiOlwibm9uZVwiKSxiKHRoaXMsdSxsKX19KSxifSh3aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG98fHdpbmRvdyx3aW5kb3csZG9jdW1lbnQpfSkpO1xyXG47IWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGsoYSxiLGMpe3JldHVybiBzZXRUaW1lb3V0KHEoYSxjKSxiKX1mdW5jdGlvbiBsKGEsYixjKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKT8obShhLGNbYl0sYyksITApOiExfWZ1bmN0aW9uIG0oYSxiLGMpe3ZhciBlO2lmKGEpaWYoYS5mb3JFYWNoKWEuZm9yRWFjaChiLGMpO2Vsc2UgaWYoYS5sZW5ndGghPT1kKWZvcihlPTA7ZTxhLmxlbmd0aDspYi5jYWxsKGMsYVtlXSxlLGEpLGUrKztlbHNlIGZvcihlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmYi5jYWxsKGMsYVtlXSxlLGEpfWZ1bmN0aW9uIG4oYSxiLGMpe2Zvcih2YXIgZT1PYmplY3Qua2V5cyhiKSxmPTA7ZjxlLmxlbmd0aDspKCFjfHxjJiZhW2VbZl1dPT09ZCkmJihhW2VbZl1dPWJbZVtmXV0pLGYrKztyZXR1cm4gYX1mdW5jdGlvbiBvKGEsYil7cmV0dXJuIG4oYSxiLCEwKX1mdW5jdGlvbiBwKGEsYixjKXt2YXIgZSxkPWIucHJvdG90eXBlO2U9YS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShkKSxlLmNvbnN0cnVjdG9yPWEsZS5fc3VwZXI9ZCxjJiZuKGUsYyl9ZnVuY3Rpb24gcShhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcihhLGIpe3JldHVybiB0eXBlb2YgYT09Zz9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gcyhhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gdChhLGIsYyl7bSh4KGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gdShhLGIsYyl7bSh4KGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gdihhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gdyhhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24geChhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24geShhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHooYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gQShhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTt5KGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIEIoYSxiKXtmb3IodmFyIGMsZixnPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGg9MDtoPGUubGVuZ3RoOyl7aWYoYz1lW2hdLGY9Yz9jK2c6YixmIGluIGEpcmV0dXJuIGY7aCsrfXJldHVybiBkfWZ1bmN0aW9uIEQoKXtyZXR1cm4gQysrfWZ1bmN0aW9uIEUoYSl7dmFyIGI9YS5vd25lckRvY3VtZW50O3JldHVybiBiLmRlZmF1bHRWaWV3fHxiLnBhcmVudFdpbmRvd31mdW5jdGlvbiBhYihhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtyKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiBiYihhKXt2YXIgYixjPWEub3B0aW9ucy5pbnB1dENsYXNzO3JldHVybiBiPWM/YzpIP3diOkk/RWI6Rz9HYjpyYixuZXcgYihhLGNiKX1mdW5jdGlvbiBjYihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJk8mJjA9PT1kLWUsZz1iJihRfFIpJiYwPT09ZC1lO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLGRiKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIGRiKGEsYil7dmFyIGM9YS5zZXNzaW9uLGQ9Yi5wb2ludGVycyxlPWQubGVuZ3RoO2MuZmlyc3RJbnB1dHx8KGMuZmlyc3RJbnB1dD1nYihiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1nYihiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPWhiKGQpO2IudGltZVN0YW1wPWooKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPWxiKGgsaSksYi5kaXN0YW5jZT1rYihoLGkpLGViKGMsYiksYi5vZmZzZXREaXJlY3Rpb249amIoYi5kZWx0YVgsYi5kZWx0YVkpLGIuc2NhbGU9Zz9uYihnLnBvaW50ZXJzLGQpOjEsYi5yb3RhdGlvbj1nP21iKGcucG9pbnRlcnMsZCk6MCxmYihjLGIpO3ZhciBrPWEuZWxlbWVudDt2KGIuc3JjRXZlbnQudGFyZ2V0LGspJiYoaz1iLnNyY0V2ZW50LnRhcmdldCksYi50YXJnZXQ9a31mdW5jdGlvbiBlYihhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307KGIuZXZlbnRUeXBlPT09T3x8Zi5ldmVudFR5cGU9PT1RKSYmKGU9YS5wcmV2RGVsdGE9e3g6Zi5kZWx0YVh8fDAseTpmLmRlbHRhWXx8MH0sZD1hLm9mZnNldERlbHRhPXt4OmMueCx5OmMueX0pLGIuZGVsdGFYPWUueCsoYy54LWQueCksYi5kZWx0YVk9ZS55KyhjLnktZC55KX1mdW5jdGlvbiBmYihhLGIpe3ZhciBmLGcsaCxqLGM9YS5sYXN0SW50ZXJ2YWx8fGIsZT1iLnRpbWVTdGFtcC1jLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9UiYmKGU+Tnx8Yy52ZWxvY2l0eT09PWQpKXt2YXIgaz1jLmRlbHRhWC1iLmRlbHRhWCxsPWMuZGVsdGFZLWIuZGVsdGFZLG09aWIoZSxrLGwpO2c9bS54LGg9bS55LGY9aShtLngpPmkobS55KT9tLng6bS55LGo9amIoayxsKSxhLmxhc3RJbnRlcnZhbD1ifWVsc2UgZj1jLnZlbG9jaXR5LGc9Yy52ZWxvY2l0eVgsaD1jLnZlbG9jaXR5WSxqPWMuZGlyZWN0aW9uO2IudmVsb2NpdHk9ZixiLnZlbG9jaXR5WD1nLGIudmVsb2NpdHlZPWgsYi5kaXJlY3Rpb249an1mdW5jdGlvbiBnYihhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5wb2ludGVycy5sZW5ndGg7KWJbY109e2NsaWVudFg6aChhLnBvaW50ZXJzW2NdLmNsaWVudFgpLGNsaWVudFk6aChhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpqKCkscG9pbnRlcnM6YixjZW50ZXI6aGIoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gaGIoYSl7dmFyIGI9YS5sZW5ndGg7aWYoMT09PWIpcmV0dXJue3g6aChhWzBdLmNsaWVudFgpLHk6aChhWzBdLmNsaWVudFkpfTtmb3IodmFyIGM9MCxkPTAsZT0wO2I+ZTspYys9YVtlXS5jbGllbnRYLGQrPWFbZV0uY2xpZW50WSxlKys7cmV0dXJue3g6aChjL2IpLHk6aChkL2IpfX1mdW5jdGlvbiBpYihhLGIsYyl7cmV0dXJue3g6Yi9hfHwwLHk6Yy9hfHwwfX1mdW5jdGlvbiBqYihhLGIpe3JldHVybiBhPT09Yj9TOmkoYSk+PWkoYik/YT4wP1Q6VTpiPjA/VjpXfWZ1bmN0aW9uIGtiKGEsYixjKXtjfHwoYz0kKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkKmQrZSplKX1mdW5jdGlvbiBsYihhLGIsYyl7Y3x8KGM9JCk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiAxODAqTWF0aC5hdGFuMihlLGQpL01hdGguUEl9ZnVuY3Rpb24gbWIoYSxiKXtyZXR1cm4gbGIoYlsxXSxiWzBdLF8pLWxiKGFbMV0sYVswXSxfKX1mdW5jdGlvbiBuYihhLGIpe3JldHVybiBrYihiWzBdLGJbMV0sXykva2IoYVswXSxhWzFdLF8pfWZ1bmN0aW9uIHJiKCl7dGhpcy5ldkVsPXBiLHRoaXMuZXZXaW49cWIsdGhpcy5hbGxvdz0hMCx0aGlzLnByZXNzZWQ9ITEsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIHdiKCl7dGhpcy5ldkVsPXViLHRoaXMuZXZXaW49dmIsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBBYigpe3RoaXMuZXZUYXJnZXQ9eWIsdGhpcy5ldldpbj16Yix0aGlzLnN0YXJ0ZWQ9ITEsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIEJiKGEsYil7dmFyIGM9eihhLnRvdWNoZXMpLGQ9eihhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoUXxSKSYmKGM9QShjLmNvbmNhdChkKSxcImlkZW50aWZpZXJcIiwhMCkpLFtjLGRdfWZ1bmN0aW9uIEViKCl7dGhpcy5ldlRhcmdldD1EYix0aGlzLnRhcmdldElkcz17fSxhYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gRmIoYSxiKXt2YXIgYz16KGEudG91Y2hlcyksZD10aGlzLnRhcmdldElkcztpZihiJihPfFApJiYxPT09Yy5sZW5ndGgpcmV0dXJuIGRbY1swXS5pZGVudGlmaWVyXT0hMCxbYyxjXTt2YXIgZSxmLGc9eihhLmNoYW5nZWRUb3VjaGVzKSxoPVtdLGk9dGhpcy50YXJnZXQ7aWYoZj1jLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gdihhLnRhcmdldCxpKX0pLGI9PT1PKWZvcihlPTA7ZTxmLmxlbmd0aDspZFtmW2VdLmlkZW50aWZpZXJdPSEwLGUrKztmb3IoZT0wO2U8Zy5sZW5ndGg7KWRbZ1tlXS5pZGVudGlmaWVyXSYmaC5wdXNoKGdbZV0pLGImKFF8UikmJmRlbGV0ZSBkW2dbZV0uaWRlbnRpZmllcl0sZSsrO3JldHVybiBoLmxlbmd0aD9bQShmLmNvbmNhdChoKSxcImlkZW50aWZpZXJcIiwhMCksaF06dm9pZCAwfWZ1bmN0aW9uIEdiKCl7YWIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBhPXEodGhpcy5oYW5kbGVyLHRoaXMpO3RoaXMudG91Y2g9bmV3IEViKHRoaXMubWFuYWdlcixhKSx0aGlzLm1vdXNlPW5ldyByYih0aGlzLm1hbmFnZXIsYSl9ZnVuY3Rpb24gUGIoYSxiKXt0aGlzLm1hbmFnZXI9YSx0aGlzLnNldChiKX1mdW5jdGlvbiBRYihhKXtpZih3KGEsTWIpKXJldHVybiBNYjt2YXIgYj13KGEsTmIpLGM9dyhhLE9iKTtyZXR1cm4gYiYmYz9OYitcIiBcIitPYjpifHxjP2I/TmI6T2I6dyhhLExiKT9MYjpLYn1mdW5jdGlvbiBZYihhKXt0aGlzLmlkPUQoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnM9byhhfHx7fSx0aGlzLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuZW5hYmxlPXModGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1SYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFpiKGEpe3JldHVybiBhJldiP1wiY2FuY2VsXCI6YSZVYj9cImVuZFwiOmEmVGI/XCJtb3ZlXCI6YSZTYj9cInN0YXJ0XCI6XCJcIn1mdW5jdGlvbiAkYihhKXtyZXR1cm4gYT09Vz9cImRvd25cIjphPT1WP1widXBcIjphPT1UP1wibGVmdFwiOmE9PVU/XCJyaWdodFwiOlwiXCJ9ZnVuY3Rpb24gX2IoYSxiKXt2YXIgYz1iLm1hbmFnZXI7cmV0dXJuIGM/Yy5nZXQoYSk6YX1mdW5jdGlvbiBhYygpe1liLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBiYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIGNjKCl7YWMuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRjKCl7WWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbH1mdW5jdGlvbiBlYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBmYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBnYygpe1liLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGhjKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1zKGIucmVjb2duaXplcnMsaGMuZGVmYXVsdHMucHJlc2V0KSxuZXcga2MoYSxiKX1mdW5jdGlvbiBrYyhhLGIpe2I9Ynx8e30sdGhpcy5vcHRpb25zPW8oYixoYy5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9YmIodGhpcyksdGhpcy50b3VjaEFjdGlvbj1uZXcgUGIodGhpcyx0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pLGxjKHRoaXMsITApLG0oYi5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGxjKGEsYil7dmFyIGM9YS5lbGVtZW50O20oYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGEsZCl7Yy5zdHlsZVtCKGMuc3R5bGUsZCldPWI/YTpcIlwifSl9ZnVuY3Rpb24gbWMoYSxjKXt2YXIgZD1iLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwhMCwhMCksZC5nZXN0dXJlPWMsYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKX12YXIgZT1bXCJcIixcIndlYmtpdFwiLFwibW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0sZj1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZz1cImZ1bmN0aW9uXCIsaD1NYXRoLnJvdW5kLGk9TWF0aC5hYnMsaj1EYXRlLm5vdyxDPTEsRj0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksRz1cIm9udG91Y2hzdGFydFwiaW4gYSxIPUIoYSxcIlBvaW50ZXJFdmVudFwiKSE9PWQsST1HJiZGLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksSj1cInRvdWNoXCIsSz1cInBlblwiLEw9XCJtb3VzZVwiLE09XCJraW5lY3RcIixOPTI1LE89MSxQPTIsUT00LFI9OCxTPTEsVD0yLFU9NCxWPTgsVz0xNixYPVR8VSxZPVZ8VyxaPVh8WSwkPVtcInhcIixcInlcIl0sXz1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO2FiLnByb3RvdHlwZT17aGFuZGxlcjpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe3RoaXMuZXZFbCYmdCh0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmdCh0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmdChFKHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZ1KHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZ1KHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZ1KEUodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9fTt2YXIgb2I9e21vdXNlZG93bjpPLG1vdXNlbW92ZTpQLG1vdXNldXA6UX0scGI9XCJtb3VzZWRvd25cIixxYj1cIm1vdXNlbW92ZSBtb3VzZXVwXCI7cChyYixhYix7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1vYlthLnR5cGVdO2ImTyYmMD09PWEuYnV0dG9uJiYodGhpcy5wcmVzc2VkPSEwKSxiJlAmJjEhPT1hLndoaWNoJiYoYj1RKSx0aGlzLnByZXNzZWQmJnRoaXMuYWxsb3cmJihiJlEmJih0aGlzLnByZXNzZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOlthXSxjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOkwsc3JjRXZlbnQ6YX0pKX19KTt2YXIgc2I9e3BvaW50ZXJkb3duOk8scG9pbnRlcm1vdmU6UCxwb2ludGVydXA6USxwb2ludGVyY2FuY2VsOlIscG9pbnRlcm91dDpSfSx0Yj17MjpKLDM6Syw0OkwsNTpNfSx1Yj1cInBvaW50ZXJkb3duXCIsdmI9XCJwb2ludGVybW92ZSBwb2ludGVydXAgcG9pbnRlcmNhbmNlbFwiO2EuTVNQb2ludGVyRXZlbnQmJih1Yj1cIk1TUG9pbnRlckRvd25cIix2Yj1cIk1TUG9pbnRlck1vdmUgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCIpLHAod2IsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdG9yZSxjPSExLGQ9YS50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIm1zXCIsXCJcIiksZT1zYltkXSxmPXRiW2EucG9pbnRlclR5cGVdfHxhLnBvaW50ZXJUeXBlLGc9Zj09SixoPXkoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJk8mJigwPT09YS5idXR0b258fGcpPzA+aCYmKGIucHVzaChhKSxoPWIubGVuZ3RoLTEpOmUmKFF8UikmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciB4Yj17dG91Y2hzdGFydDpPLHRvdWNobW92ZTpQLHRvdWNoZW5kOlEsdG91Y2hjYW5jZWw6Un0seWI9XCJ0b3VjaHN0YXJ0XCIsemI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoQWIsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9eGJbYS50eXBlXTtpZihiPT09TyYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1CYi5jYWxsKHRoaXMsYSxiKTtiJihRfFIpJiYwPT09Y1swXS5sZW5ndGgtY1sxXS5sZW5ndGgmJih0aGlzLnN0YXJ0ZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6SixzcmNFdmVudDphfSl9fX0pO3ZhciBDYj17dG91Y2hzdGFydDpPLHRvdWNobW92ZTpQLHRvdWNoZW5kOlEsdG91Y2hjYW5jZWw6Un0sRGI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoRWIsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9Q2JbYS50eXBlXSxjPUZiLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6SixzcmNFdmVudDphfSl9fSkscChHYixhYix7aGFuZGxlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVyVHlwZT09SixlPWMucG9pbnRlclR5cGU9PUw7aWYoZCl0aGlzLm1vdXNlLmFsbG93PSExO2Vsc2UgaWYoZSYmIXRoaXMubW91c2UuYWxsb3cpcmV0dXJuO2ImKFF8UikmJih0aGlzLm1vdXNlLmFsbG93PSEwKSx0aGlzLmNhbGxiYWNrKGEsYixjKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMudG91Y2guZGVzdHJveSgpLHRoaXMubW91c2UuZGVzdHJveSgpfX0pO3ZhciBIYj1CKGYuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxJYj1IYiE9PWQsSmI9XCJjb21wdXRlXCIsS2I9XCJhdXRvXCIsTGI9XCJtYW5pcHVsYXRpb25cIixNYj1cIm5vbmVcIixOYj1cInBhbi14XCIsT2I9XCJwYW4teVwiO1BiLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PUpiJiYoYT10aGlzLmNvbXB1dGUoKSksSWImJih0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZVtIYl09YSksdGhpcy5hY3Rpb25zPWEudG9Mb3dlckNhc2UoKS50cmltKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2V0KHRoaXMubWFuYWdlci5vcHRpb25zLnRvdWNoQWN0aW9uKX0sY29tcHV0ZTpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBtKHRoaXMubWFuYWdlci5yZWNvZ25pemVycyxmdW5jdGlvbihiKXtyKGIub3B0aW9ucy5lbmFibGUsW2JdKSYmKGE9YS5jb25jYXQoYi5nZXRUb3VjaEFjdGlvbigpKSl9KSxRYihhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe2lmKCFJYil7dmFyIGI9YS5zcmNFdmVudCxjPWEub2Zmc2V0RGlyZWN0aW9uO2lmKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZClyZXR1cm4gYi5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgMDt2YXIgZD10aGlzLmFjdGlvbnMsZT13KGQsTWIpLGY9dyhkLE9iKSxnPXcoZCxOYik7cmV0dXJuIGV8fGYmJmMmWHx8ZyYmYyZZP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9fSxwcmV2ZW50U3JjOmZ1bmN0aW9uKGEpe3RoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZD0hMCxhLnByZXZlbnREZWZhdWx0KCl9fTt2YXIgUmI9MSxTYj0yLFRiPTQsVWI9OCxWYj1VYixXYj0xNixYYj0zMjtZYi5wcm90b3R5cGU9e2RlZmF1bHRzOnt9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gbih0aGlzLm9wdGlvbnMsYSksdGhpcy5tYW5hZ2VyJiZ0aGlzLm1hbmFnZXIudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30scmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtpZihsKGEsXCJyZWNvZ25pemVXaXRoXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5zaW11bHRhbmVvdXM7cmV0dXJuIGE9X2IoYSx0aGlzKSxiW2EuaWRdfHwoYlthLmlkXT1hLGEucmVjb2duaXplV2l0aCh0aGlzKSksdGhpc30sZHJvcFJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGwoYSxcImRyb3BSZWNvZ25pemVXaXRoXCIsdGhpcyk/dGhpczooYT1fYihhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYobChhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPV9iKGEsdGhpcyksLTE9PT15KGIsYSkmJihiLnB1c2goYSksYS5yZXF1aXJlRmFpbHVyZSh0aGlzKSksdGhpc30sZHJvcFJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGwoYSxcImRyb3BSZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO2E9X2IoYSx0aGlzKTt2YXIgYj15KHRoaXMucmVxdWlyZUZhaWwsYSk7cmV0dXJuIGI+LTEmJnRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsMSksdGhpc30saGFzUmVxdWlyZUZhaWx1cmVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoPjB9LGNhblJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXX0sZW1pdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBkKGQpe2IubWFuYWdlci5lbWl0KGIub3B0aW9ucy5ldmVudCsoZD9aYihjKTpcIlwiKSxhKX12YXIgYj10aGlzLGM9dGhpcy5zdGF0ZTtVYj5jJiZkKCEwKSxkKCksYz49VWImJmQoITApfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6KHRoaXMuc3RhdGU9WGIsdm9pZCAwKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKFhifFJiKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9bih7fSxhKTtyZXR1cm4gcih0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYoVmJ8V2J8WGIpJiYodGhpcy5zdGF0ZT1SYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdGhpcy5zdGF0ZSYoU2J8VGJ8VWJ8V2IpJiZ0aGlzLnRyeUVtaXQoYiksdm9pZCAwKToodGhpcy5yZXNldCgpLHRoaXMuc3RhdGU9WGIsdm9pZCAwKX0scHJvY2VzczpmdW5jdGlvbigpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0scChhYyxZYix7ZGVmYXVsdHM6e3BvaW50ZXJzOjF9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5wb2ludGVycztyZXR1cm4gMD09PWJ8fGEucG9pbnRlcnMubGVuZ3RoPT09Yn0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0YXRlLGM9YS5ldmVudFR5cGUsZD1iJihTYnxUYiksZT10aGlzLmF0dHJUZXN0KGEpO3JldHVybiBkJiYoYyZSfHwhZSk/YnxXYjpkfHxlP2MmUT9ifFViOmImU2I/YnxUYjpTYjpYYn19KSxwKGJjLGFjLHtkZWZhdWx0czp7ZXZlbnQ6XCJwYW5cIix0aHJlc2hvbGQ6MTAscG9pbnRlcnM6MSxkaXJlY3Rpb246Wn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLGI9W107cmV0dXJuIGEmWCYmYi5wdXNoKE9iKSxhJlkmJmIucHVzaChOYiksYn0sZGlyZWN0aW9uVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz0hMCxkPWEuZGlzdGFuY2UsZT1hLmRpcmVjdGlvbixmPWEuZGVsdGFYLGc9YS5kZWx0YVk7cmV0dXJuIGUmYi5kaXJlY3Rpb258fChiLmRpcmVjdGlvbiZYPyhlPTA9PT1mP1M6MD5mP1Q6VSxjPWYhPXRoaXMucFgsZD1NYXRoLmFicyhhLmRlbHRhWCkpOihlPTA9PT1nP1M6MD5nP1Y6VyxjPWchPXRoaXMucFksZD1NYXRoLmFicyhhLmRlbHRhWSkpKSxhLmRpcmVjdGlvbj1lLGMmJmQ+Yi50aHJlc2hvbGQmJmUmYi5kaXJlY3Rpb259LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiBhYy5wcm90b3R5cGUuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYodGhpcy5zdGF0ZSZTYnx8ISh0aGlzLnN0YXRlJlNiKSYmdGhpcy5kaXJlY3Rpb25UZXN0KGEpKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnBYPWEuZGVsdGFYLHRoaXMucFk9YS5kZWx0YVk7dmFyIGI9JGIoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLHAoY2MsYWMse2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTWJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJlNiKX0sZW1pdDpmdW5jdGlvbihhKXtpZih0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKSwxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpfX19KSxwKGRjLFliLHtkZWZhdWx0czp7ZXZlbnQ6XCJwcmVzc1wiLHBvaW50ZXJzOjEsdGltZTo1MDAsdGhyZXNob2xkOjV9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW0tiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGU9YS5kZWx0YVRpbWU+Yi50aW1lO2lmKHRoaXMuX2lucHV0PWEsIWR8fCFjfHxhLmV2ZW50VHlwZSYoUXxSKSYmIWUpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmTyl0aGlzLnJlc2V0KCksdGhpcy5fdGltZXI9ayhmdW5jdGlvbigpe3RoaXMuc3RhdGU9VmIsdGhpcy50cnlFbWl0KCl9LGIudGltZSx0aGlzKTtlbHNlIGlmKGEuZXZlbnRUeXBlJlEpcmV0dXJuIFZiO3JldHVybiBYYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMuc3RhdGU9PT1WYiYmKGEmJmEuZXZlbnRUeXBlJlE/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPWooKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKSl9fSkscChlYyxhYyx7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTWJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZTYil9fSkscChmYyxhYyx7ZGVmYXVsdHM6e2V2ZW50Olwic3dpcGVcIix0aHJlc2hvbGQ6MTAsdmVsb2NpdHk6LjY1LGRpcmVjdGlvbjpYfFkscG9pbnRlcnM6MX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gYmMucHJvdG90eXBlLmdldFRvdWNoQWN0aW9uLmNhbGwodGhpcyl9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBjLGI9dGhpcy5vcHRpb25zLmRpcmVjdGlvbjtyZXR1cm4gYiYoWHxZKT9jPWEudmVsb2NpdHk6YiZYP2M9YS52ZWxvY2l0eVg6YiZZJiYoYz1hLnZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZiJmEuZGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJmkoYyk+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZRfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPSRiKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSkscChnYyxZYix7ZGVmYXVsdHM6e2V2ZW50OlwidGFwXCIscG9pbnRlcnM6MSx0YXBzOjEsaW50ZXJ2YWw6MzAwLHRpbWU6MjUwLHRocmVzaG9sZDoyLHBvc1RocmVzaG9sZDoxMH0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTGJdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZT1hLmRlbHRhVGltZTxiLnRpbWU7aWYodGhpcy5yZXNldCgpLGEuZXZlbnRUeXBlJk8mJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZSYmYyl7aWYoYS5ldmVudFR5cGUhPVEpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZj10aGlzLnBUaW1lP2EudGltZVN0YW1wLXRoaXMucFRpbWU8Yi5pbnRlcnZhbDohMCxnPSF0aGlzLnBDZW50ZXJ8fGtiKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsZyYmZj90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBoPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1oKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1rKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1WYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxTYik6VmJ9cmV0dXJuIFhifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1rKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1YYn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLFhifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1WYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksaGMuVkVSU0lPTj1cIjIuMC40XCIsaGMuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjpKYixlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbZWMse2VuYWJsZTohMX1dLFtjYyx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtmYyx7ZGlyZWN0aW9uOlh9XSxbYmMse2RpcmVjdGlvbjpYfSxbXCJzd2lwZVwiXV0sW2djXSxbZ2Mse2V2ZW50OlwiZG91YmxldGFwXCIsdGFwczoyfSxbXCJ0YXBcIl1dLFtkY11dLGNzc1Byb3BzOnt1c2VyU2VsZWN0OlwiZGVmYXVsdFwiLHRvdWNoU2VsZWN0Olwibm9uZVwiLHRvdWNoQ2FsbG91dDpcIm5vbmVcIixjb250ZW50Wm9vbWluZzpcIm5vbmVcIix1c2VyRHJhZzpcIm5vbmVcIix0YXBIaWdobGlnaHRDb2xvcjpcInJnYmEoMCwwLDAsMClcIn19O3ZhciBpYz0xLGpjPTI7a2MucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4odGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT9qYzppY30scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJlZiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT1qY3x8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKFNifFRifFViKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgWWIpcmV0dXJuIGE7Zm9yKHZhciBiPXRoaXMucmVjb2duaXplcnMsYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGJbY10ub3B0aW9ucy5ldmVudD09YSlyZXR1cm4gYltjXTtyZXR1cm4gbnVsbH0sYWRkOmZ1bmN0aW9uKGEpe2lmKGwoYSxcImFkZFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGImJnRoaXMucmVtb3ZlKGIpLHRoaXMucmVjb2duaXplcnMucHVzaChhKSxhLm1hbmFnZXI9dGhpcyx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGF9LHJlbW92ZTpmdW5jdGlvbihhKXtpZihsKGEsXCJyZW1vdmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlY29nbml6ZXJzO3JldHVybiBhPXRoaXMuZ2V0KGEpLGIuc3BsaWNlKHkoYixhKSwxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc30sb2ZmOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLGZ1bmN0aW9uKGEpe2I/Y1thXS5zcGxpY2UoeShjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc30sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJm1jKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmxjKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0sbihoYyx7SU5QVVRfU1RBUlQ6TyxJTlBVVF9NT1ZFOlAsSU5QVVRfRU5EOlEsSU5QVVRfQ0FOQ0VMOlIsU1RBVEVfUE9TU0lCTEU6UmIsU1RBVEVfQkVHQU46U2IsU1RBVEVfQ0hBTkdFRDpUYixTVEFURV9FTkRFRDpVYixTVEFURV9SRUNPR05JWkVEOlZiLFNUQVRFX0NBTkNFTExFRDpXYixTVEFURV9GQUlMRUQ6WGIsRElSRUNUSU9OX05PTkU6UyxESVJFQ1RJT05fTEVGVDpULERJUkVDVElPTl9SSUdIVDpVLERJUkVDVElPTl9VUDpWLERJUkVDVElPTl9ET1dOOlcsRElSRUNUSU9OX0hPUklaT05UQUw6WCxESVJFQ1RJT05fVkVSVElDQUw6WSxESVJFQ1RJT05fQUxMOlosTWFuYWdlcjprYyxJbnB1dDphYixUb3VjaEFjdGlvbjpQYixUb3VjaElucHV0OkViLE1vdXNlSW5wdXQ6cmIsUG9pbnRlckV2ZW50SW5wdXQ6d2IsVG91Y2hNb3VzZUlucHV0OkdiLFNpbmdsZVRvdWNoSW5wdXQ6QWIsUmVjb2duaXplcjpZYixBdHRyUmVjb2duaXplcjphYyxUYXA6Z2MsUGFuOmJjLFN3aXBlOmZjLFBpbmNoOmNjLFJvdGF0ZTplYyxQcmVzczpkYyxvbjp0LG9mZjp1LGVhY2g6bSxtZXJnZTpvLGV4dGVuZDpuLGluaGVyaXQ6cCxiaW5kRm46cSxwcmVmaXhlZDpCfSksdHlwZW9mIGRlZmluZT09ZyYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gaGN9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1oYzphW2NdPWhjfSh3aW5kb3csZG9jdW1lbnQsXCJIYW1tZXJcIik7OyhmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5JywgJ2hhbW1lcmpzJ10sIGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCdoYW1tZXJqcycpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFjdG9yeShqUXVlcnksIEhhbW1lcik7XHJcbiAgICB9XHJcbn0oZnVuY3Rpb24oJCwgSGFtbWVyKSB7XHJcbiAgICBmdW5jdGlvbiBoYW1tZXJpZnkoZWwsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgJGVsID0gJChlbCk7XHJcbiAgICAgICAgaWYoISRlbC5kYXRhKFwiaGFtbWVyXCIpKSB7XHJcbiAgICAgICAgICAgICRlbC5kYXRhKFwiaGFtbWVyXCIsIG5ldyBIYW1tZXIoJGVsWzBdLCBvcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQuZm4uaGFtbWVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhhbW1lcmlmeSh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZXh0ZW5kIHRoZSBlbWl0IG1ldGhvZCB0byBhbHNvIHRyaWdnZXIgalF1ZXJ5IGV2ZW50c1xyXG4gICAgSGFtbWVyLk1hbmFnZXIucHJvdG90eXBlLmVtaXQgPSAoZnVuY3Rpb24ob3JpZ2luYWxFbWl0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHR5cGUsIGRhdGEpIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxFbWl0LmNhbGwodGhpcywgdHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBnZXN0dXJlOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9KShIYW1tZXIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCk7XHJcbn0pKTtcclxuOy8vIFJlcXVpcmVkIGZvciBNZXRlb3IgcGFja2FnZSwgdGhlIHVzZSBvZiB3aW5kb3cgcHJldmVudHMgZXhwb3J0IGJ5IE1ldGVvclxyXG4oZnVuY3Rpb24od2luZG93KXtcclxuICBpZih3aW5kb3cuUGFja2FnZSl7XHJcbiAgICBNYXRlcmlhbGl6ZSA9IHt9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aW5kb3cuTWF0ZXJpYWxpemUgPSB7fTtcclxuICB9XHJcbn0pKHdpbmRvdyk7XHJcblxyXG5cclxuLypcclxuICogcmFmLmpzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3J5bWFuL3JhZi5qc1xyXG4gKlxyXG4gKiBvcmlnaW5hbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyXHJcbiAqIGluc3BpcmVkIGZyb20gcGF1bF9pcmlzaCBnaXN0IGFuZCBwb3N0XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMyBuZ3J5bWFuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuICovXHJcbihmdW5jdGlvbih3aW5kb3cpIHtcclxuICB2YXIgbGFzdFRpbWUgPSAwLFxyXG4gICAgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddLFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLFxyXG4gICAgaSA9IHZlbmRvcnMubGVuZ3RoO1xyXG5cclxuICAvLyB0cnkgdG8gdW4tcHJlZml4IGV4aXN0aW5nIHJhZlxyXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcbiAgfVxyXG5cclxuICAvLyBwb2x5ZmlsbCB3aXRoIHNldFRpbWVvdXQgZmFsbGJhY2tcclxuICAvLyBoZWF2aWx5IGluc3BpcmVkIGZyb20gQGRhcml1cyBnaXN0IG1vZDogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEjY29tbWVudC04Mzc5NDVcclxuICBpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciBub3cgPSArRGF0ZS5ub3coKSxcclxuICAgICAgICBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xyXG4gICAgICB9LCBuZXh0VGltZSAtIG5vdyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xyXG4gIH1cclxuXHJcbiAgLy8gZXhwb3J0IHRvIHdpbmRvd1xyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbn0od2luZG93KSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGFwcHJveGltYXRlZCBzZWxlY3RvciBzdHJpbmcgZm9yIGEgalF1ZXJ5IG9iamVjdFxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gb2JqICBqUXVlcnkgb2JqZWN0IHRvIGJlIHBhcnNlZFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcgPSBmdW5jdGlvbihvYmopIHtcclxuICB2YXIgdGFnU3RyID0gb2JqLnByb3AoJ3RhZ05hbWUnKSB8fCAnJztcclxuICB2YXIgaWRTdHIgPSBvYmouYXR0cignaWQnKSB8fCAnJztcclxuICB2YXIgY2xhc3NTdHIgPSBvYmouYXR0cignY2xhc3MnKSB8fCAnJztcclxuICByZXR1cm4gKHRhZ1N0ciArIGlkU3RyICsgY2xhc3NTdHIpLnJlcGxhY2UoL1xccy9nLCcnKTtcclxufTtcclxuXHJcblxyXG4vLyBVbmlxdWUgUmFuZG9tIElEXHJcbk1hdGVyaWFsaXplLmd1aWQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gIH1cclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxuICB9O1xyXG59KSgpO1xyXG5cclxuLyoqXHJcbiAqIEVzY2FwZXMgaGFzaCBmcm9tIHNwZWNpYWwgY2hhcmFjdGVyc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAgU3RyaW5nIHJldHVybmVkIGZyb20gdGhpcy5oYXNoXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5NYXRlcmlhbGl6ZS5lc2NhcGVIYXNoID0gZnVuY3Rpb24oaGFzaCkge1xyXG4gIHJldHVybiBoYXNoLnJlcGxhY2UoIC8oOnxcXC58XFxbfFxcXXwsfD0pL2csIFwiXFxcXCQxXCIgKTtcclxufTtcclxuXHJcbk1hdGVyaWFsaXplLmVsZW1lbnRPclBhcmVudElzRml4ZWQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgdmFyICRjaGVja0VsZW1lbnRzID0gJGVsZW1lbnQuYWRkKCRlbGVtZW50LnBhcmVudHMoKSk7XHJcbiAgICB2YXIgaXNGaXhlZCA9IGZhbHNlO1xyXG4gICAgJGNoZWNrRWxlbWVudHMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgICAgICAgaXNGaXhlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpc0ZpeGVkO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGltZSBpbiBtc1xyXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXHJcbiAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGdldFRpbWUgPSAoRGF0ZS5ub3cgfHwgZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxufSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxyXG4gKiBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cclxuICogYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xyXG4gKiBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xyXG4gKiBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cclxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0XHJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5NYXRlcmlhbGl6ZS50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcclxuICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xyXG4gIHZhciB0aW1lb3V0ID0gbnVsbDtcclxuICB2YXIgcHJldmlvdXMgPSAwO1xyXG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XHJcbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IGdldFRpbWUoKTtcclxuICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcclxuICB9O1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbm93ID0gZ2V0VGltZSgpO1xyXG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcclxuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcclxuICAgIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgYXJncyA9IGFyZ3VtZW50cztcclxuICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICBwcmV2aW91cyA9IG5vdztcclxuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xyXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG4vLyBWZWxvY2l0eSBoYXMgY29uZmxpY3RzIHdoZW4gbG9hZGVkIHdpdGggalF1ZXJ5LCB0aGlzIHdpbGwgY2hlY2sgZm9yIGl0XHJcbi8vIEZpcnN0LCBjaGVjayBpZiBpbiBub0NvbmZsaWN0IG1vZGVcclxudmFyIFZlbDtcclxuaWYgKGpRdWVyeSkge1xyXG4gIFZlbCA9IGpRdWVyeS5WZWxvY2l0eTtcclxufSBlbHNlIGlmICgkKSB7XHJcbiAgVmVsID0gJC5WZWxvY2l0eTtcclxufSBlbHNlIHtcclxuICBWZWwgPSBWZWxvY2l0eTtcclxufVxyXG47KGZ1bmN0aW9uICgkKSB7XHJcbiAgJC5mbi5jb2xsYXBzaWJsZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIG1ldGhvZFBhcmFtKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgIGFjY29yZGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICBvbk9wZW46IHVuZGVmaW5lZCxcclxuICAgICAgb25DbG9zZTogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBtZXRob2ROYW1lID0gb3B0aW9ucztcclxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG5cclxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgdmFyICRwYW5lbF9oZWFkZXJzID0gJCh0aGlzKS5maW5kKCc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xyXG5cclxuICAgICAgdmFyIGNvbGxhcHNpYmxlX3R5cGUgPSAkdGhpcy5kYXRhKFwiY29sbGFwc2libGVcIik7XHJcblxyXG4gICAgICAvKioqKioqKioqKioqKioqKlxyXG4gICAgICBIZWxwZXIgRnVuY3Rpb25zXHJcbiAgICAgICoqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgICAvLyBBY2NvcmRpb24gT3BlblxyXG4gICAgICBmdW5jdGlvbiBhY2NvcmRpb25PcGVuKG9iamVjdCkge1xyXG4gICAgICAgICRwYW5lbF9oZWFkZXJzID0gJHRoaXMuZmluZCgnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZURvd24oeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuc2xpZGVVcCh7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcGFuZWxfaGVhZGVycy5ub3Qob2JqZWN0KS5yZW1vdmVDbGFzcygnYWN0aXZlJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAvLyBDbG9zZSBwcmV2aW91c2x5IG9wZW4gYWNjb3JkaW9uIGVsZW1lbnRzLlxyXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLm5vdChvYmplY3QpLnBhcmVudCgpLmNoaWxkcmVuKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2xpZGVVcCh7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDM1MCxcclxuICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsXHJcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlOlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgIGV4ZWNDYWxsYmFja3MoJCh0aGlzKS5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWhlYWRlcicpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEV4cGFuZGFibGUgT3BlblxyXG4gICAgICBmdW5jdGlvbiBleHBhbmRhYmxlT3BlbihvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZURvd24oeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlVXAoeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3BlbiBjb2xsYXBzaWJsZS4gb2JqZWN0OiAuY29sbGFwc2libGUtaGVhZGVyXHJcbiAgICAgIGZ1bmN0aW9uIGNvbGxhcHNpYmxlT3BlbihvYmplY3QsIG5vVG9nZ2xlKSB7XHJcbiAgICAgICAgaWYgKCFub1RvZ2dsZSkge1xyXG4gICAgICAgICAgb2JqZWN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLmFjY29yZGlvbiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSBcImFjY29yZGlvblwiIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IHVuZGVmaW5lZCkgeyAvLyBIYW5kbGUgQWNjb3JkaW9uXHJcbiAgICAgICAgICBhY2NvcmRpb25PcGVuKG9iamVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gSGFuZGxlIEV4cGFuZGFibGVzXHJcbiAgICAgICAgICBleHBhbmRhYmxlT3BlbihvYmplY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhlY0NhbGxiYWNrcyhvYmplY3QpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBIYW5kbGUgY2FsbGJhY2tzXHJcbiAgICAgIGZ1bmN0aW9uIGV4ZWNDYWxsYmFja3Mob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbk9wZW4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbk9wZW4uY2FsbCh0aGlzLCBvYmplY3QucGFyZW50KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25DbG9zZSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBvYmplY3QucGFyZW50KCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIENoZWNrIGlmIG9iamVjdCBpcyBjaGlsZHJlbiBvZiBwYW5lbCBoZWFkZXJcclxuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IEpxdWVyeSBvYmplY3RcclxuICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBpdCBpcyBjaGlsZHJlblxyXG4gICAgICAgKi9cclxuICAgICAgZnVuY3Rpb24gaXNDaGlsZHJlbk9mUGFuZWxIZWFkZXIob2JqZWN0KSB7XHJcblxyXG4gICAgICAgIHZhciBwYW5lbEhlYWRlciA9IGdldFBhbmVsSGVhZGVyKG9iamVjdCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYW5lbEhlYWRlci5sZW5ndGggPiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogR2V0IHBhbmVsIGhlYWRlciBmcm9tIGEgY2hpbGRyZW4gZWxlbWVudFxyXG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9iamVjdCBKcXVlcnkgb2JqZWN0XHJcbiAgICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFuZWwgaGVhZGVyIG9iamVjdFxyXG4gICAgICAgKi9cclxuICAgICAgZnVuY3Rpb24gZ2V0UGFuZWxIZWFkZXIob2JqZWN0KSB7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3QuY2xvc2VzdCgnbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBUdXJuIG9mZiBhbnkgZXhpc3RpbmcgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICAkdGhpcy5vZmYoJ2NsaWNrLmNvbGxhcHNlJywgJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKioqKiAgRW5kIEhlbHBlciBGdW5jdGlvbnMgICoqKioqL1xyXG5cclxuXHJcbiAgICAgIC8vIE1ldGhvZHNcclxuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdkZXN0cm95Jykge1xyXG4gICAgICAgIHJlbW92ZUV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kUGFyYW0gPj0gMCAmJlxyXG4gICAgICAgICAgbWV0aG9kUGFyYW0gPCAkcGFuZWxfaGVhZGVycy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgJGN1cnJfaGVhZGVyID0gJHBhbmVsX2hlYWRlcnMuZXEobWV0aG9kUGFyYW0pO1xyXG4gICAgICAgIGlmICgkY3Vycl9oZWFkZXIubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIChtZXRob2ROYW1lID09PSAnb3BlbicgfHxcclxuICAgICAgICAgICAgKG1ldGhvZE5hbWUgPT09ICdjbG9zZScgJiZcclxuICAgICAgICAgICAgJGN1cnJfaGVhZGVyLmhhc0NsYXNzKCdhY3RpdmUnKSkpKSB7XHJcbiAgICAgICAgICBjb2xsYXBzaWJsZU9wZW4oJGN1cnJfaGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xyXG5cclxuXHJcbiAgICAgIC8vIEFkZCBjbGljayBoYW5kbGVyIHRvIG9ubHkgZGlyZWN0IGNvbGxhcHNpYmxlIGhlYWRlciBjaGlsZHJlblxyXG4gICAgICAkdGhpcy5vbignY2xpY2suY29sbGFwc2UnLCAnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKGlzQ2hpbGRyZW5PZlBhbmVsSGVhZGVyKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICBlbGVtZW50ID0gZ2V0UGFuZWxIZWFkZXIoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2xsYXBzaWJsZU9wZW4oZWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIC8vIE9wZW4gZmlyc3QgYWN0aXZlXHJcbiAgICAgIGlmIChvcHRpb25zLmFjY29yZGlvbiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSBcImFjY29yZGlvblwiIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IHVuZGVmaW5lZCkgeyAvLyBIYW5kbGUgQWNjb3JkaW9uXHJcbiAgICAgICAgY29sbGFwc2libGVPcGVuKCRwYW5lbF9oZWFkZXJzLmZpbHRlcignLmFjdGl2ZScpLmZpcnN0KCksIHRydWUpO1xyXG5cclxuICAgICAgfSBlbHNlIHsgLy8gSGFuZGxlIEV4cGFuZGFibGVzXHJcbiAgICAgICAgJHBhbmVsX2hlYWRlcnMuZmlsdGVyKCcuYWN0aXZlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbGxhcHNpYmxlT3BlbigkKHRoaXMpLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuY29sbGFwc2libGUnKS5jb2xsYXBzaWJsZSgpO1xyXG4gIH0pO1xyXG59KCBqUXVlcnkgKSk7OyhmdW5jdGlvbiAoJCkge1xyXG5cclxuICAvLyBBZGQgcG9zaWJpbGl0eSB0byBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXHJcbiAgLy8gdXNlZnVsbCBmb3Igc2VsZWN0IGZvciBleGFtcGxlXHJcbiAgJC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgICQodGhpcykuc2Nyb2xsVG9wKCQodGhpcykuc2Nyb2xsVG9wKCkgLSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQoZWxlbSkub2Zmc2V0KCkudG9wKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gICQuZm4uZHJvcGRvd24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICBpbkR1cmF0aW9uOiAzMDAsXHJcbiAgICAgIG91dER1cmF0aW9uOiAyMjUsXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiB0cnVlLCAvLyBDb25zdHJhaW5zIHdpZHRoIG9mIGRyb3Bkb3duIHRvIHRoZSBhY3RpdmF0b3JcclxuICAgICAgaG92ZXI6IGZhbHNlLFxyXG4gICAgICBndXR0ZXI6IDAsIC8vIFNwYWNpbmcgZnJvbSBlZGdlXHJcbiAgICAgIGJlbG93T3JpZ2luOiBmYWxzZSxcclxuICAgICAgYWxpZ25tZW50OiAnbGVmdCcsXHJcbiAgICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgLy8gT3BlbiBkcm9wZG93bi5cclxuICAgIGlmIChvcHRpb25zID09PSBcIm9wZW5cIikge1xyXG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvc2UgZHJvcGRvd24uXHJcbiAgICBpZiAob3B0aW9ucyA9PT0gXCJjbG9zZVwiKSB7XHJcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgY3Vycl9vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgdmFyIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gRHJvcGRvd24gbWVudVxyXG4gICAgICB2YXIgYWN0aXZhdGVzID0gJChcIiNcIisgb3JpZ2luLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucygpIHtcclxuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2luZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmluRHVyYXRpb24gPSBvcmlnaW4uZGF0YSgnaW5kdXJhdGlvbicpO1xyXG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnb3V0ZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgY3Vycl9vcHRpb25zLm91dER1cmF0aW9uID0gb3JpZ2luLmRhdGEoJ291dGR1cmF0aW9uJyk7XHJcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdjb25zdHJhaW53aWR0aCcpICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICBjdXJyX29wdGlvbnMuY29uc3RyYWluV2lkdGggPSBvcmlnaW4uZGF0YSgnY29uc3RyYWlud2lkdGgnKTtcclxuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2hvdmVyJykgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5ob3ZlciA9IG9yaWdpbi5kYXRhKCdob3ZlcicpO1xyXG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnZ3V0dGVyJykgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5ndXR0ZXIgPSBvcmlnaW4uZGF0YSgnZ3V0dGVyJyk7XHJcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdiZWxvd29yaWdpbicpICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICBjdXJyX29wdGlvbnMuYmVsb3dPcmlnaW4gPSBvcmlnaW4uZGF0YSgnYmVsb3dvcmlnaW4nKTtcclxuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICBjdXJyX29wdGlvbnMuYWxpZ25tZW50ID0gb3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpO1xyXG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJykgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24gPSBvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZU9wdGlvbnMoKTtcclxuXHJcbiAgICAgIC8vIEF0dGFjaCBkcm9wZG93biB0byBpdHMgYWN0aXZhdG9yXHJcbiAgICAgIG9yaWdpbi5hZnRlcihhY3RpdmF0ZXMpO1xyXG5cclxuICAgICAgLypcclxuICAgICAgICBIZWxwZXIgZnVuY3Rpb24gdG8gcG9zaXRpb24gYW5kIHJlc2l6ZSBkcm9wZG93bi5cclxuICAgICAgICBVc2VkIGluIGhvdmVyIGFuZCBjbGljayBoYW5kbGVyLlxyXG4gICAgICAqL1xyXG4gICAgICBmdW5jdGlvbiBwbGFjZURyb3Bkb3duKGV2ZW50VHlwZSkge1xyXG4gICAgICAgIC8vIENoZWNrIGZvciBzaW11bHRhbmVvdXMgZm9jdXMgYW5kIGNsaWNrIGV2ZW50cy5cclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnZm9jdXMnKSB7XHJcbiAgICAgICAgICBpc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaHRtbCBkYXRhIGF0dHJpYnV0ZXNcclxuICAgICAgICB1cGRhdGVPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIC8vIFNldCBEcm9wZG93biBzdGF0ZVxyXG4gICAgICAgIGFjdGl2YXRlcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgb3JpZ2luLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RyYWluIHdpZHRoXHJcbiAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5jb25zdHJhaW5XaWR0aCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgYWN0aXZhdGVzLmNzcygnd2lkdGgnLCBvcmlnaW4ub3V0ZXJXaWR0aCgpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ3doaXRlLXNwYWNlJywgJ25vd3JhcCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT2Zmc2NyZWVuIGRldGVjdGlvblxyXG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdmFyIG9mZnNldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdmFyIGN1cnJBbGlnbm1lbnQgPSBjdXJyX29wdGlvbnMuYWxpZ25tZW50O1xyXG4gICAgICAgIHZhciBndXR0ZXJTcGFjaW5nID0gMDtcclxuICAgICAgICB2YXIgbGVmdFBvc2l0aW9uID0gMDtcclxuXHJcbiAgICAgICAgLy8gQmVsb3cgT3JpZ2luXHJcbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gMDtcclxuICAgICAgICBpZiAoY3Vycl9vcHRpb25zLmJlbG93T3JpZ2luID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IG9yaWdpbkhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBzY3JvbGxpbmcgcG9zaXRpb25lZCBjb250YWluZXIuXHJcbiAgICAgICAgdmFyIHNjcm9sbFlPZmZzZXQgPSAwO1xyXG4gICAgICAgIHZhciBzY3JvbGxYT2Zmc2V0ID0gMDtcclxuICAgICAgICB2YXIgd3JhcHBlciA9IG9yaWdpbi5wYXJlbnQoKTtcclxuICAgICAgICBpZiAoIXdyYXBwZXIuaXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgaWYgKHdyYXBwZXJbMF0uc2Nyb2xsSGVpZ2h0ID4gd3JhcHBlclswXS5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2Nyb2xsWU9mZnNldCA9IHdyYXBwZXJbMF0uc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHdyYXBwZXJbMF0uc2Nyb2xsV2lkdGggPiB3cmFwcGVyWzBdLmNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFhPZmZzZXQgPSB3cmFwcGVyWzBdLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKG9mZnNldExlZnQgKyBhY3RpdmF0ZXMuaW5uZXJXaWR0aCgpID4gJCh3aW5kb3cpLndpZHRoKCkpIHtcclxuICAgICAgICAgIC8vIERyb3Bkb3duIGdvZXMgcGFzdCBzY3JlZW4gb24gcmlnaHQsIGZvcmNlIHJpZ2h0IGFsaWdubWVudFxyXG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdyaWdodCc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0TGVmdCAtIGFjdGl2YXRlcy5pbm5lcldpZHRoKCkgKyBvcmlnaW4uaW5uZXJXaWR0aCgpIDwgMCkge1xyXG4gICAgICAgICAgLy8gRHJvcGRvd24gZ29lcyBwYXN0IHNjcmVlbiBvbiBsZWZ0LCBmb3JjZSBsZWZ0IGFsaWdubWVudFxyXG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdsZWZ0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVmVydGljYWwgYm90dG9tIG9mZnNjcmVlbiBkZXRlY3Rpb25cclxuICAgICAgICBpZiAob2Zmc2V0VG9wICsgYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPiB3aW5kb3dIZWlnaHQpIHtcclxuICAgICAgICAgIC8vIElmIGdvaW5nIHVwd2FyZHMgc3RpbGwgZ29lcyBvZmZzY3JlZW4sIGp1c3QgY3JvcCBoZWlnaHQgb2YgZHJvcGRvd24uXHJcbiAgICAgICAgICBpZiAob2Zmc2V0VG9wICsgb3JpZ2luSGVpZ2h0IC0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIG9mZnNldFRvcCAtIHZlcnRpY2FsT2Zmc2V0O1xyXG4gICAgICAgICAgICBhY3RpdmF0ZXMuY3NzKCdtYXgtaGVpZ2h0JywgYWRqdXN0ZWRIZWlnaHQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmxvdyB1cHdhcmRzLlxyXG4gICAgICAgICAgICBpZiAoIXZlcnRpY2FsT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgKz0gb3JpZ2luSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0IC09IGFjdGl2YXRlcy5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGVkZ2UgYWxpZ25tZW50XHJcbiAgICAgICAgaWYgKGN1cnJBbGlnbm1lbnQgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgZ3V0dGVyU3BhY2luZyA9IGN1cnJfb3B0aW9ucy5ndXR0ZXI7XHJcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgZ3V0dGVyU3BhY2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3VyckFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgdmFyIG9mZnNldFJpZ2h0ID0gb3JpZ2luLnBvc2l0aW9uKCkubGVmdCArIG9yaWdpbi5vdXRlcldpZHRoKCkgLSBhY3RpdmF0ZXMub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgZ3V0dGVyU3BhY2luZyA9IC1jdXJyX29wdGlvbnMuZ3V0dGVyO1xyXG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gIG9mZnNldFJpZ2h0ICsgZ3V0dGVyU3BhY2luZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9uIGRyb3Bkb3duXHJcbiAgICAgICAgYWN0aXZhdGVzLmNzcyh7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgIHRvcDogb3JpZ2luLnBvc2l0aW9uKCkudG9wICsgdmVydGljYWxPZmZzZXQgKyBzY3JvbGxZT2Zmc2V0LFxyXG4gICAgICAgICAgbGVmdDogbGVmdFBvc2l0aW9uICsgc2Nyb2xsWE9mZnNldFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gU2hvdyBkcm9wZG93blxyXG4gICAgICAgIGFjdGl2YXRlcy5zdG9wKHRydWUsIHRydWUpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAuc2xpZGVEb3duKHtcclxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogY3Vycl9vcHRpb25zLmluRHVyYXRpb24sXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmFuaW1hdGUoIHtvcGFjaXR5OiAxfSwge3F1ZXVlOiBmYWxzZSwgZHVyYXRpb246IGN1cnJfb3B0aW9ucy5pbkR1cmF0aW9uLCBlYXNpbmc6ICdlYXNlT3V0U2luZSd9KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGNsaWNrIGNsb3NlIGhhbmRsZXIgdG8gZG9jdW1lbnRcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJChkb2N1bWVudCkuYmluZCgnY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJyksIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNpbXVsdGFuZW91cyBmb2N1cyBhbmQgY2xpY2sgZXZlbnRzLlxyXG4gICAgICAgIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2YXRlcy5mYWRlT3V0KGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XHJcbiAgICAgICAgYWN0aXZhdGVzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBvcmlnaW4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGFjdGl2YXRlcy5jc3MoJ21heC1oZWlnaHQnLCAnJyk7IH0sIGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEhvdmVyXHJcbiAgICAgIGlmIChjdXJyX29wdGlvbnMuaG92ZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIG9yaWdpbi51bmJpbmQoJ2NsaWNrLicgKyBvcmlnaW4uYXR0cignaWQnKSk7XHJcbiAgICAgICAgLy8gSG92ZXIgaGFuZGxlciB0byBzaG93IGRyb3Bkb3duXHJcbiAgICAgICAgb3JpZ2luLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSl7IC8vIE1vdXNlIG92ZXJcclxuICAgICAgICAgIGlmIChvcGVuID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBwbGFjZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9yaWdpbi5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgLy8gSWYgaG92ZXIgb24gb3JpZ2luIHRoZW4gdG8gc29tZXRoaW5nIG90aGVyIHRoYW4gZHJvcGRvd24gY29udGVudCwgdGhlbiBjbG9zZVxyXG4gICAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7IC8vIGFkZGVkIGJyb3dzZXIgY29tcGF0aWJpbGl0eSBmb3IgdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICAgIGlmKCEkKHRvRWwpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykuaXMoYWN0aXZhdGVzKSkge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWN0aXZhdGVzLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7IC8vIE1vdXNlIG91dFxyXG4gICAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7XHJcbiAgICAgICAgICBpZighJCh0b0VsKS5jbG9zZXN0KCcuZHJvcGRvd24tYnV0dG9uJykuaXMob3JpZ2luKSkge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xpY2tcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDbGljayBoYW5kbGVyIHRvIHNob3cgZHJvcGRvd25cclxuICAgICAgICBvcmlnaW4udW5iaW5kKCdjbGljay4nICsgb3JpZ2luLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIG9yaWdpbi5iaW5kKCdjbGljay4nK29yaWdpbi5hdHRyKCdpZCcpLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGlmICghaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgICAgIGlmICggb3JpZ2luWzBdID09IGUuY3VycmVudFRhcmdldCAmJlxyXG4gICAgICAgICAgICAgICAgICFvcmlnaW4uaGFzQ2xhc3MoJ2FjdGl2ZScpICYmXHJcbiAgICAgICAgICAgICAgICAgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudHMgYnV0dG9uIGNsaWNrIGZyb20gbW92aW5nIHdpbmRvd1xyXG4gICAgICAgICAgICAgIGlmIChjdXJyX29wdGlvbnMuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwbGFjZURyb3Bkb3duKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIG9yaWdpbiBpcyBjbGlja2VkIGFuZCBtZW51IGlzIG9wZW4sIGNsb3NlIG1lbnVcclxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZ2luLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICAgICQoZG9jdW1lbnQpLnVuYmluZCgnY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IC8vIEVuZCBlbHNlXHJcblxyXG4gICAgICAvLyBMaXN0ZW4gdG8gb3BlbiBhbmQgY2xvc2UgZXZlbnQgLSB1c2VmdWwgZm9yIHNlbGVjdCBjb21wb25lbnRcclxuICAgICAgb3JpZ2luLm9uKCdvcGVuJywgZnVuY3Rpb24oZSwgZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgcGxhY2VEcm9wZG93bihldmVudFR5cGUpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3JpZ2luLm9uKCdjbG9zZScsIGhpZGVEcm9wZG93bik7XHJcblxyXG5cclxuICAgIH0pO1xyXG4gIH07IC8vIEVuZCBkcm9wZG93biBwbHVnaW5cclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJy5kcm9wZG93bi1idXR0b24nKS5kcm9wZG93bigpO1xyXG4gIH0pO1xyXG59KCBqUXVlcnkgKSk7XHJcbjsoZnVuY3Rpb24oJCkge1xyXG4gIHZhciBfc3RhY2sgPSAwLFxyXG4gIF9sYXN0SUQgPSAwLFxyXG4gIF9nZW5lcmF0ZUlEID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfbGFzdElEKys7XHJcbiAgICByZXR1cm4gJ21hdGVyaWFsaXplLW1vZGFsLW92ZXJsYXktJyArIF9sYXN0SUQ7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG1ldGhvZHMgPSB7XHJcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgIGluRHVyYXRpb246IDM1MCxcclxuICAgICAgICBvdXREdXJhdGlvbjogMjUwLFxyXG4gICAgICAgIHJlYWR5OiB1bmRlZmluZWQsXHJcbiAgICAgICAgY29tcGxldGU6IHVuZGVmaW5lZCxcclxuICAgICAgICBkaXNtaXNzaWJsZTogdHJ1ZSxcclxuICAgICAgICBzdGFydGluZ1RvcDogJzQlJyxcclxuICAgICAgICBlbmRpbmdUb3A6ICcxMCUnXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBPdmVycmlkZSBkZWZhdWx0c1xyXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJG1vZGFsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgbW9kYWxfaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKSB8fCAnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpO1xyXG5cclxuICAgICAgICB2YXIgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIG92ZXJsYXlJRCA9ICRtb2RhbC5kYXRhKCdvdmVybGF5LWlkJyk7XHJcbiAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjJyArIG92ZXJsYXlJRCk7XHJcbiAgICAgICAgICAkbW9kYWwucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAvLyBFbmFibGUgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAkKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxyXG4gICAgICAgICAgICB3aWR0aDogJydcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRtb2RhbC5maW5kKCcubW9kYWwtY2xvc2UnKS5vZmYoJ2NsaWNrLmNsb3NlJyk7XHJcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwLm1vZGFsJyArIG92ZXJsYXlJRCk7XHJcblxyXG4gICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoIHsgb3BhY2l0eTogMH0sIHtkdXJhdGlvbjogb3B0aW9ucy5vdXREdXJhdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNlOiBcImVhc2VPdXRRdWFydFwifSk7XHJcblxyXG5cclxuICAgICAgICAgIC8vIERlZmluZSBCb3R0b20gU2hlZXQgYW5pbWF0aW9uXHJcbiAgICAgICAgICB2YXIgZXhpdFZlbG9jaXR5T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMub3V0RHVyYXRpb24sXHJcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcclxuICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIixcclxuICAgICAgICAgICAgLy8gSGFuZGxlIG1vZGFsIHJlYWR5IGNhbGxiYWNrXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7ZGlzcGxheTpcIm5vbmVcIn0pO1xyXG5cclxuICAgICAgICAgICAgICAvLyBDYWxsIGNvbXBsZXRlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLmNvbXBsZXRlKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbXBsZXRlLmNhbGwodGhpcywgJG1vZGFsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgX3N0YWNrLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKCdib3R0b20tc2hlZXQnKSkge1xyXG4gICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoe2JvdHRvbTogXCItMTAwJVwiLCBvcGFjaXR5OiAwfSwgZXhpdFZlbG9jaXR5T3B0aW9ucyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KFxyXG4gICAgICAgICAgICAgIHsgdG9wOiBvcHRpb25zLnN0YXJ0aW5nVG9wLCBvcGFjaXR5OiAwLCBzY2FsZVg6IDAuN30sXHJcbiAgICAgICAgICAgICAgZXhpdFZlbG9jaXR5T3B0aW9uc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBvcGVuTW9kYWwgPSBmdW5jdGlvbigkdHJpZ2dlcikge1xyXG4gICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xyXG4gICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAgICRib2R5LndpZHRoKG9sZFdpZHRoKTtcclxuXHJcbiAgICAgICAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHZhciBvdmVybGF5SUQgPSBfZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIj48L2Rpdj4nKTtcclxuICAgICAgICAgIGxTdGFjayA9ICgrK19zdGFjayk7XHJcblxyXG4gICAgICAgICAgLy8gU3RvcmUgYSByZWZlcmVuY2Ugb2YgdGhlIG92ZXJsYXlcclxuICAgICAgICAgICRvdmVybGF5LmF0dHIoJ2lkJywgb3ZlcmxheUlEKS5jc3MoJ3otaW5kZXgnLCAxMDAwICsgbFN0YWNrICogMik7XHJcbiAgICAgICAgICAkbW9kYWwuZGF0YSgnb3ZlcmxheS1pZCcsIG92ZXJsYXlJRCkuY3NzKCd6LWluZGV4JywgMTAwMCArIGxTdGFjayAqIDIgKyAxKTtcclxuICAgICAgICAgICRtb2RhbC5hZGRDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICQoXCJib2R5XCIpLmFwcGVuZCgkb3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZGlzbWlzc2libGUpIHtcclxuICAgICAgICAgICAgJG92ZXJsYXkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIG9uIEVTQ1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAubW9kYWwnICsgb3ZlcmxheUlELCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgICAvLyBFU0Mga2V5XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkbW9kYWwuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vbignY2xpY2suY2xvc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRvdmVybGF5LmNzcyh7IGRpc3BsYXkgOiBcImJsb2NrXCIsIG9wYWNpdHkgOiAwIH0pO1xyXG5cclxuICAgICAgICAgICRtb2RhbC5jc3Moe1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogb3B0aW9ucy5vcGFjaXR5fSwge2R1cmF0aW9uOiBvcHRpb25zLmluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIn0pO1xyXG4gICAgICAgICAgJG1vZGFsLmRhdGEoJ2Fzc29jaWF0ZWQtb3ZlcmxheScsICRvdmVybGF5WzBdKTtcclxuXHJcbiAgICAgICAgICAvLyBEZWZpbmUgQm90dG9tIFNoZWV0IGFuaW1hdGlvblxyXG4gICAgICAgICAgdmFyIGVudGVyVmVsb2NpdHlPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5pbkR1cmF0aW9uLFxyXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBtb2RhbCByZWFkeSBjYWxsYmFja1xyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLnJlYWR5KSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJlYWR5LmNhbGwodGhpcywgJG1vZGFsLCAkdHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKCRtb2RhbC5oYXNDbGFzcygnYm90dG9tLXNoZWV0JykpIHtcclxuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KHtib3R0b206IFwiMFwiLCBvcGFjaXR5OiAxfSwgZW50ZXJWZWxvY2l0eU9wdGlvbnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQuVmVsb2NpdHkuaG9vaygkbW9kYWwsIFwic2NhbGVYXCIsIDAuNyk7XHJcbiAgICAgICAgICAgICRtb2RhbC5jc3MoeyB0b3A6IG9wdGlvbnMuc3RhcnRpbmdUb3AgfSk7XHJcbiAgICAgICAgICAgICRtb2RhbC52ZWxvY2l0eSh7dG9wOiBvcHRpb25zLmVuZGluZ1RvcCwgb3BhY2l0eTogMSwgc2NhbGVYOiAnMSd9LCBlbnRlclZlbG9jaXR5T3B0aW9ucyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGhhbmRsZXJzXHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5tb2RhbFRyaWdnZXInLCAnYVtocmVmPVwiIycgKyBtb2RhbF9pZCArICdcIl0sIFtkYXRhLXRhcmdldD1cIicgKyBtb2RhbF9pZCArICdcIl0nKTtcclxuICAgICAgICAkKHRoaXMpLm9mZignb3Blbk1vZGFsJyk7XHJcbiAgICAgICAgJCh0aGlzKS5vZmYoJ2Nsb3NlTW9kYWwnKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgSGFuZGxlcnNcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2subW9kYWxUcmlnZ2VyJywgJ2FbaHJlZj1cIiMnICsgbW9kYWxfaWQgKyAnXCJdLCBbZGF0YS10YXJnZXQ9XCInICsgbW9kYWxfaWQgKyAnXCJdJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgb3B0aW9ucy5zdGFydGluZ1RvcCA9ICgkKHRoaXMpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKSkgLzEuMTU7XHJcbiAgICAgICAgICBvcGVuTW9kYWwoJCh0aGlzKSk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7IC8vIGRvbmUgc2V0IG9uIGNsaWNrXHJcblxyXG4gICAgICAgICQodGhpcykub24oJ29wZW5Nb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIG1vZGFsX2lkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSB8fCAnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQodGhpcykub24oJ2Nsb3NlTW9kYWwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7IC8vIGRvbmUgcmV0dXJuXHJcbiAgICB9LFxyXG4gICAgb3BlbiA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ29wZW5Nb2RhbCcpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VNb2RhbCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICQuZm4ubW9kYWwgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcclxuICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xyXG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XHJcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcclxuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxyXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5tb2RhbCcgKTtcclxuICAgIH1cclxuICB9O1xyXG59KShqUXVlcnkpO1xyXG47KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICQuZm4ubWF0ZXJpYWxib3ggPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xyXG5cclxuICAgICAgdmFyIG92ZXJsYXlBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdmFyIGRvbmVBbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICB2YXIgaW5EdXJhdGlvbiA9IDI3NTtcclxuICAgICAgdmFyIG91dER1cmF0aW9uID0gMjAwO1xyXG4gICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcclxuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gJCgnPGRpdj48L2Rpdj4nKS5hZGRDbGFzcygnbWF0ZXJpYWwtcGxhY2Vob2xkZXInKTtcclxuICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSAwO1xyXG4gICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSAwO1xyXG4gICAgICB2YXIgYW5jZXN0b3JzQ2hhbmdlZDtcclxuICAgICAgdmFyIGFuY2VzdG9yO1xyXG4gICAgICB2YXIgb3JpZ2luSW5saW5lU3R5bGVzID0gb3JpZ2luLmF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgIG9yaWdpbi53cmFwKHBsYWNlaG9sZGVyKTtcclxuXHJcblxyXG4gICAgICBvcmlnaW4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKTtcclxuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gb3JpZ2luLndpZHRoKCk7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gb3JpZ2luLmhlaWdodCgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBtb2RhbCwgcmV0dXJuIHRvIG9yaWdpbmFsXHJcbiAgICAgICAgaWYgKGRvbmVBbmltYXRpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG92ZXJsYXlBY3RpdmUgJiYgZG9uZUFuaW1hdGluZz09PXRydWUpIHtcclxuICAgICAgICAgIHJldHVyblRvT3JpZ2luYWwoKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBTZXQgc3RhdGVzXHJcbiAgICAgICAgZG9uZUFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIG9yaWdpbi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgb3ZlcmxheUFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFNldCBwb3NpdGlvbmluZyBmb3IgcGxhY2Vob2xkZXJcclxuICAgICAgICBwbGFjZWhvbGRlci5jc3Moe1xyXG4gICAgICAgICAgd2lkdGg6IHBsYWNlaG9sZGVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiBwbGFjZWhvbGRlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRmluZCBhbmNlc3RvciB3aXRoIG92ZXJmbG93OiBoaWRkZW47IGFuZCByZW1vdmUgaXRcclxuICAgICAgICBhbmNlc3RvcnNDaGFuZ2VkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGFuY2VzdG9yID0gcGxhY2Vob2xkZXJbMF0ucGFyZW50Tm9kZTtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgIHdoaWxlIChhbmNlc3RvciAhPT0gbnVsbCAmJiAhJChhbmNlc3RvcikuaXMoZG9jdW1lbnQpKSB7XHJcbiAgICAgICAgICB2YXIgY3VyciA9ICQoYW5jZXN0b3IpO1xyXG4gICAgICAgICAgaWYgKGN1cnIuY3NzKCdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHtcclxuICAgICAgICAgICAgY3Vyci5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgaWYgKGFuY2VzdG9yc0NoYW5nZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGFuY2VzdG9yc0NoYW5nZWQgPSBjdXJyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGFuY2VzdG9yc0NoYW5nZWQgPSBhbmNlc3RvcnNDaGFuZ2VkLmFkZChjdXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IGNzcyBvbiBvcmlnaW5cclxuICAgICAgICBvcmlnaW4uY3NzKHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgJ3otaW5kZXgnOiAxMDAwLFxyXG4gICAgICAgICAgJ3dpbGwtY2hhbmdlJzogJ2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kYXRhKCd3aWR0aCcsIG9yaWdpbmFsV2lkdGgpXHJcbiAgICAgICAgLmRhdGEoJ2hlaWdodCcsIG9yaWdpbmFsSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIG92ZXJsYXlcclxuICAgICAgICB2YXIgb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJtYXRlcmlhbGJveC1vdmVybGF5XCI+PC9kaXY+JylcclxuICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChkb25lQW5pbWF0aW5nID09PSB0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUHV0IGJlZm9yZSBpbiBvcmlnaW4gaW1hZ2UgdG8gcHJlc2VydmUgei1pbmRleCBsYXllcmluZy5cclxuICAgICAgICBvcmlnaW4uYmVmb3JlKG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAvLyBTZXQgZGltZW5zaW9ucyBpZiBuZWVkZWRcclxuICAgICAgICB2YXIgb3ZlcmxheU9mZnNldCA9IG92ZXJsYXlbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgb3ZlcmxheS5jc3Moe1xyXG4gICAgICAgICAgd2lkdGg6IHdpbmRvd1dpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3dIZWlnaHQsXHJcbiAgICAgICAgICBsZWZ0OiAtMSAqIG92ZXJsYXlPZmZzZXQubGVmdCxcclxuICAgICAgICAgIHRvcDogLTEgKiBvdmVybGF5T2Zmc2V0LnRvcFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgT3ZlcmxheVxyXG4gICAgICAgIG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDF9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHVyYXRpb246IGluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSApO1xyXG5cclxuICAgICAgICAvLyBBZGQgYW5kIGFuaW1hdGUgY2FwdGlvbiBpZiBpdCBleGlzdHNcclxuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2NhcHRpb24nKSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgdmFyICRwaG90b19jYXB0aW9uID0gJCgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsYm94LWNhcHRpb25cIj48L2Rpdj4nKTtcclxuICAgICAgICAgICRwaG90b19jYXB0aW9uLnRleHQob3JpZ2luLmRhdGEoJ2NhcHRpb24nKSk7XHJcbiAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwaG90b19jYXB0aW9uKTtcclxuICAgICAgICAgICRwaG90b19jYXB0aW9uLmNzcyh7IFwiZGlzcGxheVwiOiBcImlubGluZVwiIH0pO1xyXG4gICAgICAgICAgJHBob3RvX2NhcHRpb24udmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IGluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNpemUgSW1hZ2VcclxuICAgICAgICB2YXIgcmF0aW8gPSAwO1xyXG4gICAgICAgIHZhciB3aWR0aFBlcmNlbnQgPSBvcmlnaW5hbFdpZHRoIC8gd2luZG93V2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodFBlcmNlbnQgPSBvcmlnaW5hbEhlaWdodCAvIHdpbmRvd0hlaWdodDtcclxuICAgICAgICB2YXIgbmV3V2lkdGggPSAwO1xyXG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBpZiAod2lkdGhQZXJjZW50ID4gaGVpZ2h0UGVyY2VudCkge1xyXG4gICAgICAgICAgcmF0aW8gPSBvcmlnaW5hbEhlaWdodCAvIG9yaWdpbmFsV2lkdGg7XHJcbiAgICAgICAgICBuZXdXaWR0aCA9IHdpbmRvd1dpZHRoICogMC45O1xyXG4gICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93V2lkdGggKiAwLjkgKiByYXRpbztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByYXRpbyA9IG9yaWdpbmFsV2lkdGggLyBvcmlnaW5hbEhlaWdodDtcclxuICAgICAgICAgIG5ld1dpZHRoID0gKHdpbmRvd0hlaWdodCAqIDAuOSkgKiByYXRpbztcclxuICAgICAgICAgIG5ld0hlaWdodCA9IHdpbmRvd0hlaWdodCAqIDAuOTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGUgaW1hZ2UgKyBzZXQgei1pbmRleFxyXG4gICAgICAgIGlmKG9yaWdpbi5oYXNDbGFzcygncmVzcG9uc2l2ZS1pbWcnKSkge1xyXG4gICAgICAgICAgb3JpZ2luLnZlbG9jaXR5KHsnbWF4LXdpZHRoJzogbmV3V2lkdGgsICd3aWR0aCc6IG9yaWdpbmFsV2lkdGh9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgb3JpZ2luLmNzcyh7bGVmdDogMCwgdG9wOiAwfSlcclxuICAgICAgICAgICAgICAudmVsb2NpdHkoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKSArIHdpbmRvd1dpZHRoLzIgLSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKS5vZmZzZXQoKS5sZWZ0IC0gbmV3V2lkdGgvMixcclxuICAgICAgICAgICAgICAgICAgdG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIHdpbmRvd0hlaWdodC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkudG9wIC0gbmV3SGVpZ2h0LyAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogaW5EdXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe2RvbmVBbmltYXRpbmcgPSB0cnVlO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IC8vIEVuZCBDb21wbGV0ZVxyXG4gICAgICAgICAgfSk7IC8vIEVuZCBWZWxvY2l0eVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG9yaWdpbi5jc3MoJ2xlZnQnLCAwKVxyXG4gICAgICAgICAgLmNzcygndG9wJywgMClcclxuICAgICAgICAgIC52ZWxvY2l0eShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0LFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aCxcclxuICAgICAgICAgICAgICBsZWZ0OiAkKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCkgKyB3aW5kb3dXaWR0aC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkubGVmdCAtIG5ld1dpZHRoLzIsXHJcbiAgICAgICAgICAgICAgdG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIHdpbmRvd0hlaWdodC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkudG9wIC0gbmV3SGVpZ2h0LyAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogaW5EdXJhdGlvbixcclxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe2RvbmVBbmltYXRpbmcgPSB0cnVlO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApOyAvLyBFbmQgVmVsb2NpdHlcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTsgLy8gRW5kIG9yaWdpbiBvbiBjbGlja1xyXG5cclxuXHJcbiAgICAgIC8vIFJldHVybiBvbiBzY3JvbGxcclxuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAob3ZlcmxheUFjdGl2ZSkge1xyXG4gICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBSZXR1cm4gb24gRVNDXHJcbiAgICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgZG9uZUFuaW1hdGluZyA9PT0gdHJ1ZSkgeyAgIC8vIEVTQyBrZXlcclxuICAgICAgICAgIGlmIChvdmVybGF5QWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblRvT3JpZ2luYWwoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbW9kYWxlZCBpbWFnZSB0byB0aGUgb3JpZ2luYWwgc3BvdFxyXG4gICAgICBmdW5jdGlvbiByZXR1cm5Ub09yaWdpbmFsKCkge1xyXG5cclxuICAgICAgICBkb25lQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpO1xyXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSBvcmlnaW4uZGF0YSgnd2lkdGgnKTtcclxuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSBvcmlnaW4uZGF0YSgnaGVpZ2h0Jyk7XHJcblxyXG4gICAgICAgIG9yaWdpbi52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgJCgnI21hdGVyaWFsYm94LW92ZXJsYXknKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XHJcbiAgICAgICAgJCgnLm1hdGVyaWFsYm94LWNhcHRpb24nKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAkKCcjbWF0ZXJpYWxib3gtb3ZlcmxheScpLnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge1xyXG4gICAgICAgICAgZHVyYXRpb246IG91dER1cmF0aW9uLCAvLyBEZWxheSBwcmV2ZW50cyBhbmltYXRpb24gb3ZlcmxhcHBpbmdcclxuICAgICAgICAgIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxyXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBPdmVybGF5XHJcbiAgICAgICAgICAgIG92ZXJsYXlBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVzaXplIEltYWdlXHJcbiAgICAgICAgb3JpZ2luLnZlbG9jaXR5KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogb3JpZ2luYWxXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBvcmlnaW5hbEhlaWdodCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogb3V0RHVyYXRpb24sXHJcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICcnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogJydcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgb3JpZ2luLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgb3JpZ2luLmF0dHIoJ3N0eWxlJywgb3JpZ2luSW5saW5lU3R5bGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNsYXNzXHJcbiAgICAgICAgICAgICAgb3JpZ2luLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICBkb25lQW5pbWF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIG92ZXJmbG93IG92ZXJyaWRlcyBvbiBhbmNlc3RvcnNcclxuICAgICAgICAgICAgICBpZiAoYW5jZXN0b3JzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgYW5jZXN0b3JzQ2hhbmdlZC5jc3MoJ292ZXJmbG93JywgJycpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBDYXB0aW9uICsgcmVzZXQgY3NzIHNldHRpbmdzIG9uIGltYWdlXHJcbiAgICAgICAgJCgnLm1hdGVyaWFsYm94LWNhcHRpb24nKS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtcclxuICAgICAgICAgIGR1cmF0aW9uOiBvdXREdXJhdGlvbiwgLy8gRGVsYXkgcHJldmVudHMgYW5pbWF0aW9uIG92ZXJsYXBwaW5nXHJcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcclxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJy5tYXRlcmlhbGJveGVkJykubWF0ZXJpYWxib3goKTtcclxuICB9KTtcclxuXHJcbn0oIGpRdWVyeSApKTtcclxuOyhmdW5jdGlvbiAoJCkge1xyXG5cclxuICAkLmZuLnBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgLy8gUGFyYWxsYXggU2NyaXB0c1xyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICR0aGlzLmFkZENsYXNzKCdwYXJhbGxheCcpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoaW5pdGlhbCkge1xyXG4gICAgICAgIHZhciBjb250YWluZXJfaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aW5kb3dfd2lkdGggPCA2MDEpIHtcclxuICAgICAgICAgIGNvbnRhaW5lcl9oZWlnaHQgPSAoJHRoaXMuaGVpZ2h0KCkgPiAwKSA/ICR0aGlzLmhlaWdodCgpIDogJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICgkdGhpcy5oZWlnaHQoKSA+IDApID8gJHRoaXMuaGVpZ2h0KCkgOiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciAkaW1nID0gJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuZmlyc3QoKTtcclxuICAgICAgICB2YXIgaW1nX2hlaWdodCA9ICRpbWcuaGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHBhcmFsbGF4X2Rpc3QgPSBpbWdfaGVpZ2h0IC0gY29udGFpbmVyX2hlaWdodDtcclxuICAgICAgICB2YXIgYm90dG9tID0gJHRoaXMub2Zmc2V0KCkudG9wICsgY29udGFpbmVyX2hlaWdodDtcclxuICAgICAgICB2YXIgdG9wID0gJHRoaXMub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB2YXIgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0O1xyXG4gICAgICAgIHZhciBwZXJjZW50U2Nyb2xsZWQgPSAod2luZG93Qm90dG9tIC0gdG9wKSAvIChjb250YWluZXJfaGVpZ2h0ICsgd2luZG93SGVpZ2h0KTtcclxuICAgICAgICB2YXIgcGFyYWxsYXggPSBNYXRoLnJvdW5kKChwYXJhbGxheF9kaXN0ICogcGVyY2VudFNjcm9sbGVkKSk7XHJcblxyXG4gICAgICAgIGlmIChpbml0aWFsKSB7XHJcbiAgICAgICAgICAkaW1nLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGJvdHRvbSA+IHNjcm9sbFRvcCkgJiYgKHRvcCA8IChzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQpKSkge1xyXG4gICAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM0QoLTUwJSxcIiArIHBhcmFsbGF4ICsgXCJweCwgMClcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gV2FpdCBmb3IgaW1hZ2UgbG9hZFxyXG4gICAgICAkdGhpcy5jaGlsZHJlbihcImltZ1wiKS5vbmUoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KHRydWUpO1xyXG4gICAgICB9KS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlKSAkKHRoaXMpLnRyaWdnZXIoXCJsb2FkXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxufSggalF1ZXJ5ICkpO1xyXG47KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gIHZhciBtZXRob2RzID0ge1xyXG4gICAgaW5pdCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgIG9uU2hvdzogbnVsbCxcclxuICAgICAgICBzd2lwZWFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmVUaHJlc2hvbGQ6IEluZmluaXR5LCAvLyBicmVha3BvaW50IGZvciBzd2lwZWFibGVcclxuICAgICAgfTtcclxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgdmFyIG5hbWVzcGFjZSA9IE1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKCQodGhpcykpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKSB7XHJcblxyXG4gICAgICB2YXIgdW5pcXVlTmFtZXNwYWNlID0gbmFtZXNwYWNlK2k7XHJcblxyXG4gICAgICAvLyBGb3IgZWFjaCBzZXQgb2YgdGFicywgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mXHJcbiAgICAgIC8vIHdoaWNoIHRhYiBpcyBhY3RpdmUgYW5kIGl0cyBhc3NvY2lhdGVkIGNvbnRlbnRcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgdmFyICRhY3RpdmUsICRjb250ZW50LCAkbGlua3MgPSAkdGhpcy5maW5kKCdsaS50YWIgYScpLFxyXG4gICAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpLFxyXG4gICAgICAgICAgJHRhYnNfY29udGVudCA9ICQoKSxcclxuICAgICAgICAgICR0YWJzX3dyYXBwZXIsXHJcbiAgICAgICAgICAkdGFiX3dpZHRoID0gTWF0aC5tYXgoJHRhYnNfd2lkdGgsICR0aGlzWzBdLnNjcm9sbFdpZHRoKSAvICRsaW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICAkaW5kaWNhdG9yLFxyXG4gICAgICAgICAgaW5kZXggPSBwcmV2X2luZGV4ID0gMCxcclxuICAgICAgICAgIGNsaWNrZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGNsaWNrZWRUaW1lb3V0LFxyXG4gICAgICAgICAgdHJhbnNpdGlvbiA9IDMwMDtcclxuXHJcblxyXG4gICAgICAvLyBGaW5kcyByaWdodCBhdHRyaWJ1dGUgZm9yIGluZGljYXRvciBiYXNlZCBvbiBhY3RpdmUgdGFiLlxyXG4gICAgICAvLyBlbDogalF1ZXJ5IE9iamVjdFxyXG4gICAgICB2YXIgY2FsY1JpZ2h0UG9zID0gZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCR0YWJzX3dpZHRoIC0gZWwucG9zaXRpb24oKS5sZWZ0IC0gZWwub3V0ZXJXaWR0aCgpIC0gJHRoaXMuc2Nyb2xsTGVmdCgpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEZpbmRzIGxlZnQgYXR0cmlidXRlIGZvciBpbmRpY2F0b3IgYmFzZWQgb24gYWN0aXZlIHRhYi5cclxuICAgICAgLy8gZWw6IGpRdWVyeSBPYmplY3RcclxuICAgICAgdmFyIGNhbGNMZWZ0UG9zID0gZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihlbC5wb3NpdGlvbigpLmxlZnQgKyAkdGhpcy5zY3JvbGxMZWZ0KCkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQW5pbWF0ZXMgSW5kaWNhdG9yIHRvIGFjdGl2ZSB0YWIuXHJcbiAgICAgIC8vIHByZXZfaW5kZXg6IE51bWJlclxyXG4gICAgICB2YXIgYW5pbWF0ZUluZGljYXRvciA9IGZ1bmN0aW9uKHByZXZfaW5kZXgpIHtcclxuICAgICAgICBpZiAoKGluZGV4IC0gcHJldl9pbmRleCkgPj0gMCkge1xyXG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSwgeyBkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9LCB7ZHVyYXRpb246IHRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBkZWxheTogOTB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9LCB7IGR1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xyXG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSwge2R1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgZGVsYXk6IDkwfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQ2hhbmdlIHN3aXBlYWJsZSBhY2NvcmRpbmcgdG8gcmVzcG9uc2l2ZSB0aHJlc2hvbGRcclxuICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd193aWR0aCA+IG9wdGlvbnMucmVzcG9uc2l2ZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgb3B0aW9ucy5zd2lwZWFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBJZiB0aGUgbG9jYXRpb24uaGFzaCBtYXRjaGVzIG9uZSBvZiB0aGUgbGlua3MsIHVzZSB0aGF0IGFzIHRoZSBhY3RpdmUgdGFiLlxyXG4gICAgICAkYWN0aXZlID0gJCgkbGlua3MuZmlsdGVyKCdbaHJlZj1cIicrbG9jYXRpb24uaGFzaCsnXCJdJykpO1xyXG5cclxuICAgICAgLy8gSWYgbm8gbWF0Y2ggaXMgZm91bmQsIHVzZSB0aGUgZmlyc3QgbGluayBvciBhbnkgd2l0aCBjbGFzcyAnYWN0aXZlJyBhcyB0aGUgaW5pdGlhbCBhY3RpdmUgdGFiLlxyXG4gICAgICBpZiAoJGFjdGl2ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkYWN0aXZlID0gJCh0aGlzKS5maW5kKCdsaS50YWIgYS5hY3RpdmUnKS5maXJzdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkYWN0aXZlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICRhY3RpdmUgPSAkKHRoaXMpLmZpbmQoJ2xpLnRhYiBhJykuZmlyc3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJGFjdGl2ZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIGluZGV4ID0gJGxpbmtzLmluZGV4KCRhY3RpdmUpO1xyXG4gICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJGFjdGl2ZVswXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJGNvbnRlbnQgPSAkKCRhY3RpdmVbMF0uaGFzaCk7XHJcbiAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBlbmQgaW5kaWNhdG9yIHRoZW4gc2V0IGluZGljYXRvciB3aWR0aCB0byB0YWIgd2lkdGhcclxuICAgICAgaWYgKCEkdGhpcy5maW5kKCcuaW5kaWNhdG9yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJHRoaXMuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+Jyk7XHJcbiAgICAgIH1cclxuICAgICAgJGluZGljYXRvciA9ICR0aGlzLmZpbmQoJy5pbmRpY2F0b3InKTtcclxuXHJcbiAgICAgIC8vIHdlIG1ha2Ugc3VyZSB0aGF0IHRoZSBpbmRpY2F0b3IgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGFic1xyXG4gICAgICAkdGhpcy5hcHBlbmQoJGluZGljYXRvcik7XHJcblxyXG4gICAgICBpZiAoJHRoaXMuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgIC8vICRpbmRpY2F0b3IuY3NzKHtcInJpZ2h0XCI6ICR0YWJzX3dpZHRoIC0gKChpbmRleCArIDEpICogJHRhYl93aWR0aCl9KTtcclxuICAgICAgICAvLyAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGluZGV4ICogJHRhYl93aWR0aH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSk7XHJcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGNhbGNMZWZ0UG9zKCRhY3RpdmUpIH0pO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcbiAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS50YWJzLScrdW5pcXVlTmFtZXNwYWNlKS5vbigncmVzaXplLnRhYnMtJyt1bmlxdWVOYW1lc3BhY2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkdGFic193aWR0aCA9ICR0aGlzLndpZHRoKCk7XHJcbiAgICAgICAgJHRhYl93aWR0aCA9IE1hdGgubWF4KCR0YWJzX3dpZHRoLCAkdGhpc1swXS5zY3JvbGxXaWR0aCkgLyAkbGlua3MubGVuZ3RoO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCR0YWJfd2lkdGggIT09IDAgJiYgJHRhYnNfd2lkdGggIT09IDApIHtcclxuICAgICAgICAgICRpbmRpY2F0b3IuY3NzKHtcInJpZ2h0XCI6IGNhbGNSaWdodFBvcygkYWN0aXZlKSB9KTtcclxuICAgICAgICAgICRpbmRpY2F0b3IuY3NzKHtcImxlZnRcIjogY2FsY0xlZnRQb3MoJGFjdGl2ZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgVGFicyBDb250ZW50LlxyXG4gICAgICBpZiAob3B0aW9ucy5zd2lwZWFibGUpIHtcclxuICAgICAgICAvLyBUT0RPOiBEdXBsaWNhdGUgY2FsbHMgd2l0aCBzd2lwZWFibGU/IGhhbmRsZSBtdWx0aXBsZSBkaXYgd3JhcHBpbmcuXHJcbiAgICAgICAgJGxpbmtzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyICRjdXJyX2NvbnRlbnQgPSAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSk7XHJcbiAgICAgICAgICAkY3Vycl9jb250ZW50LmFkZENsYXNzKCdjYXJvdXNlbC1pdGVtJyk7XHJcbiAgICAgICAgICAkdGFic19jb250ZW50ID0gJHRhYnNfY29udGVudC5hZGQoJGN1cnJfY29udGVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJHRhYnNfd3JhcHBlciA9ICR0YWJzX2NvbnRlbnQud3JhcEFsbCgnPGRpdiBjbGFzcz1cInRhYnMtY29udGVudCBjYXJvdXNlbFwiPjwvZGl2PicpO1xyXG4gICAgICAgICR0YWJzX2NvbnRlbnQuY3NzKCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgICQoJy50YWJzLWNvbnRlbnQuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7XHJcbiAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICBub1dyYXA6IHRydWUsXHJcbiAgICAgICAgICBvbkN5Y2xlVG86IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKCFjbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHByZXZfaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICBpbmRleCA9ICR0YWJzX3dyYXBwZXIuaW5kZXgoaXRlbSk7XHJcbiAgICAgICAgICAgICAgJGFjdGl2ZSA9ICRsaW5rcy5lcShpbmRleCk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZUluZGljYXRvcihwcmV2X2luZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBIaWRlIHRoZSByZW1haW5pbmcgY29udGVudFxyXG4gICAgICAgICRsaW5rcy5ub3QoJGFjdGl2ZSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gQmluZCB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAkdGhpcy5vZmYoJ2NsaWNrLnRhYnMnKS5vbignY2xpY2sudGFicycsICdhJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBY3QgYXMgcmVndWxhciBsaW5rIGlmIHRhcmdldCBhdHRyaWJ1dGUgaXMgc3BlY2lmaWVkLlxyXG4gICAgICAgIGlmICghISQodGhpcykuYXR0cihcInRhcmdldFwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpO1xyXG4gICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gTWFrZSB0aGUgb2xkIHRhYiBpbmFjdGl2ZS5cclxuICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB2YXIgJG9sZENvbnRlbnQgPSAkY29udGVudFxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHZhcmlhYmxlcyB3aXRoIHRoZSBuZXcgbGluayBhbmQgY29udGVudFxyXG4gICAgICAgICRhY3RpdmUgPSAkKHRoaXMpO1xyXG4gICAgICAgICRjb250ZW50ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpO1xyXG4gICAgICAgICRsaW5rcyA9ICR0aGlzLmZpbmQoJ2xpLnRhYiBhJyk7XHJcbiAgICAgICAgdmFyIGFjdGl2ZVJlY3QgPSAkYWN0aXZlLnBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIE1ha2UgdGhlIHRhYiBhY3RpdmUuXHJcbiAgICAgICAgJGFjdGl2ZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgcHJldl9pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGluZGV4ID0gJGxpbmtzLmluZGV4KCQodGhpcykpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hhbmdlIHVybCB0byBjdXJyZW50IHRhYlxyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJGFjdGl2ZS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIC8vIFN3YXAgY29udGVudFxyXG4gICAgICAgIGlmIChvcHRpb25zLnN3aXBlYWJsZSkge1xyXG4gICAgICAgICAgaWYgKCR0YWJzX2NvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICR0YWJzX2NvbnRlbnQuY2Fyb3VzZWwoJ3NldCcsIGluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCRjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgJGNvbnRlbnQuc2hvdygpO1xyXG4gICAgICAgICAgICAkY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vblNob3cpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICBvcHRpb25zLm9uU2hvdy5jYWxsKHRoaXMsICRjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICgkb2xkQ29udGVudCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgISRvbGRDb250ZW50LmlzKCRjb250ZW50KSkge1xyXG4gICAgICAgICAgICAkb2xkQ29udGVudC5oaWRlKCk7XHJcbiAgICAgICAgICAgICRvbGRDb250ZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGNsaWNrZWQgc3RhdGVcclxuICAgICAgICBjbGlja2VkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgY2xpY2tlZCA9IGZhbHNlOyB9LCB0cmFuc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvclxyXG4gICAgICAgIGFuaW1hdGVJbmRpY2F0b3IocHJldl9pbmRleCk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGFuY2hvcidzIGRlZmF1bHQgY2xpY2sgYWN0aW9uXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICBzZWxlY3RfdGFiIDogZnVuY3Rpb24oIGlkICkge1xyXG4gICAgICB0aGlzLmZpbmQoJ2FbaHJlZj1cIiMnICsgaWQgKyAnXCJdJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkLmZuLnRhYnMgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcclxuICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xyXG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XHJcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcclxuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxyXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50YWJzJyApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCd1bC50YWJzJykudGFicygpO1xyXG4gIH0pO1xyXG59KCBqUXVlcnkgKSk7XHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuICAgICQuZm4udG9vbHRpcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgIHZhciB0aW1lb3V0ID0gbnVsbCxcclxuICAgICAgbWFyZ2luID0gLTc7XHJcblxyXG4gICAgICAvLyBEZWZhdWx0c1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgZGVsYXk6IDM1MCxcclxuICAgICAgICB0b29sdGlwOiAnJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgaHRtbDogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSB0b29sdGlwIGZyb20gdGhlIGFjdGl2YXRvclxyXG4gICAgICBpZiAob3B0aW9ucyA9PT0gXCJyZW1vdmVcIikge1xyXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICQoJyMnICsgJCh0aGlzKS5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRvb2x0aXBJZCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcclxuICAgICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gRGVzdHJveSBvbGQgdG9vbHRpcFxyXG4gICAgICAgIGlmIChvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJykpIHtcclxuICAgICAgICAgICQoJyMnICsgb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcpKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnLCB0b29sdGlwSWQpO1xyXG5cclxuICAgICAgICAvLyBHZXQgYXR0cmlidXRlcy5cclxuICAgICAgICB2YXIgYWxsb3dIdG1sLFxyXG4gICAgICAgICAgICB0b29sdGlwRGVsYXksXHJcbiAgICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbixcclxuICAgICAgICAgICAgdG9vbHRpcFRleHQsXHJcbiAgICAgICAgICAgIHRvb2x0aXBFbCxcclxuICAgICAgICAgICAgYmFja2Ryb3A7XHJcbiAgICAgICAgdmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGFsbG93SHRtbCA9IG9yaWdpbi5hdHRyKCdkYXRhLWh0bWwnKSA/IG9yaWdpbi5hdHRyKCdkYXRhLWh0bWwnKSA9PT0gJ3RydWUnIDogb3B0aW9ucy5odG1sO1xyXG4gICAgICAgICAgdG9vbHRpcERlbGF5ID0gb3JpZ2luLmF0dHIoJ2RhdGEtZGVsYXknKTtcclxuICAgICAgICAgIHRvb2x0aXBEZWxheSA9ICh0b29sdGlwRGVsYXkgPT09IHVuZGVmaW5lZCB8fCB0b29sdGlwRGVsYXkgPT09ICcnKSA/XHJcbiAgICAgICAgICAgICAgb3B0aW9ucy5kZWxheSA6IHRvb2x0aXBEZWxheTtcclxuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9IG9yaWdpbi5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XHJcbiAgICAgICAgICB0b29sdGlwUG9zaXRpb24gPSAodG9vbHRpcFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcFBvc2l0aW9uID09PSAnJykgP1xyXG4gICAgICAgICAgICAgIG9wdGlvbnMucG9zaXRpb24gOiB0b29sdGlwUG9zaXRpb247XHJcbiAgICAgICAgICB0b29sdGlwVGV4dCA9IG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAnKTtcclxuICAgICAgICAgIHRvb2x0aXBUZXh0ID0gKHRvb2x0aXBUZXh0ID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcFRleHQgPT09ICcnKSA/XHJcbiAgICAgICAgICAgICAgb3B0aW9ucy50b29sdGlwIDogdG9vbHRpcFRleHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRBdHRyaWJ1dGVzKCk7XHJcblxyXG4gICAgICAgIHZhciByZW5kZXJUb29sdGlwRWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciB0b29sdGlwID0gJCgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRvb2x0aXBcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAvLyBDcmVhdGUgVGV4dCBzcGFuXHJcbiAgICAgICAgICBpZiAoYWxsb3dIdG1sKSB7XHJcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLmh0bWwodG9vbHRpcFRleHQpO1xyXG4gICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICB0b29sdGlwVGV4dCA9ICQoJzxzcGFuPjwvc3Bhbj4nKS50ZXh0KHRvb2x0aXBUZXh0KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBDcmVhdGUgdG9vbHRpcFxyXG4gICAgICAgICAgdG9vbHRpcC5hcHBlbmQodG9vbHRpcFRleHQpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpXHJcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIHRvb2x0aXBJZCk7XHJcblxyXG4gICAgICAgICAgLy8gQ3JlYXRlIGJhY2tkcm9wXHJcbiAgICAgICAgICBiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgYmFja2Ryb3AuYXBwZW5kVG8odG9vbHRpcCk7XHJcbiAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRvb2x0aXBFbCA9IHJlbmRlclRvb2x0aXBFbCgpO1xyXG5cclxuICAgICAgICAvLyBEZXN0cm95IHByZXZpb3VzbHkgYmluZGVkIGV2ZW50c1xyXG4gICAgICAgIG9yaWdpbi5vZmYoJ21vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXAnKTtcclxuICAgICAgICAvLyBNb3VzZSBJblxyXG4gICAgICAgIHZhciBzdGFydGVkID0gZmFsc2UsIHRpbWVvdXRSZWY7XHJcbiAgICAgICAgb3JpZ2luLm9uKHsnbW91c2VlbnRlci50b29sdGlwJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgdmFyIHNob3dUb29sdGlwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoKTtcclxuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSgnc3RvcCcpO1xyXG4gICAgICAgICAgICBiYWNrZHJvcC52ZWxvY2l0eSgnc3RvcCcpO1xyXG4gICAgICAgICAgICB0b29sdGlwRWwuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnLCBsZWZ0OiAnMHB4JywgdG9wOiAnMHB4JyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvb2x0aXAgcG9zaXRpb25pbmdcclxuICAgICAgICAgICAgdmFyIG9yaWdpbldpZHRoID0gb3JpZ2luLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcEhlaWdodCA9IHRvb2x0aXBFbC5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcFdpZHRoID0gdG9vbHRpcEVsLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgdmFyIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJzBweCc7XHJcbiAgICAgICAgICAgIHZhciB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJzBweCc7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcE9mZnNldFdpZHRoID0gYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcE9mZnNldEhlaWdodCA9IGJhY2tkcm9wWzBdLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgdmFyIHNjYWxlWEZhY3RvciA9IDg7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZVlGYWN0b3IgPSA4O1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVGYWN0b3IgPSAwO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0VG9wLCB0YXJnZXRMZWZ0LCBuZXdDb29yZGluYXRlcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgICAvLyBUb3AgUG9zaXRpb25cclxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wIC0gdG9vbHRpcEhlaWdodCAtIG1hcmdpbjtcclxuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aC8yIC0gdG9vbHRpcFdpZHRoLzI7XHJcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcclxuICAgICAgICAgICAgICB0b29sdGlwVmVydGljYWxNb3ZlbWVudCA9ICctMTBweCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDE0cHggMCAwJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICh0b29sdGlwV2lkdGgvMikgLSAoYmFja2Ryb3BPZmZzZXRXaWR0aC8yKVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIExlZnQgUG9zaXRpb25cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9vbHRpcFBvc2l0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRvb2x0aXBIZWlnaHQvMjtcclxuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIG9yaWdpbi5vZmZzZXQoKS5sZWZ0IC0gdG9vbHRpcFdpZHRoIC0gbWFyZ2luO1xyXG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgIHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQgPSAnLTEwcHgnO1xyXG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6ICctN3B4JyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTRweCAwIDAgMTRweCcsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc5NSUgNTAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodC8yLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdG9vbHRpcFdpZHRoXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmlnaHQgUG9zaXRpb25cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9vbHRpcFBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luSGVpZ2h0LzIgLSB0b29sdGlwSGVpZ2h0LzI7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGggKyBtYXJnaW47XHJcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICcrMTBweCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzAgMTRweCAxNHB4IDAnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNSUgNTAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodC8yLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBCb3R0b20gUG9zaXRpb25cclxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luLm91dGVySGVpZ2h0KCkgKyBtYXJnaW47XHJcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRvb2x0aXBXaWR0aC8yO1xyXG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQgPSAnKzEwcHgnO1xyXG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogKHRvb2x0aXBXaWR0aC8yKSAtIChiYWNrZHJvcE9mZnNldFdpZHRoLzIpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0b29wdGlwIGNzcyBwbGFjZW1lbnRcclxuICAgICAgICAgICAgdG9vbHRpcEVsLmNzcyh7XHJcbiAgICAgICAgICAgICAgdG9wOiBuZXdDb29yZGluYXRlcy55LFxyXG4gICAgICAgICAgICAgIGxlZnQ6IG5ld0Nvb3JkaW5hdGVzLnhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgU2NhbGUgdG8gZmlsbFxyXG4gICAgICAgICAgICBzY2FsZVhGYWN0b3IgPSBNYXRoLlNRUlQyICogdG9vbHRpcFdpZHRoIC8gcGFyc2VJbnQoYmFja2Ryb3BPZmZzZXRXaWR0aCk7XHJcbiAgICAgICAgICAgIHNjYWxlWUZhY3RvciA9IE1hdGguU1FSVDIgKiB0b29sdGlwSGVpZ2h0IC8gcGFyc2VJbnQoYmFja2Ryb3BPZmZzZXRIZWlnaHQpO1xyXG4gICAgICAgICAgICBzY2FsZUZhY3RvciA9IE1hdGgubWF4KHNjYWxlWEZhY3Rvciwgc2NhbGVZRmFjdG9yKTtcclxuXHJcbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVk6IHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50LCB0cmFuc2xhdGVYOiB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50fSwgeyBkdXJhdGlvbjogMzUwLCBxdWV1ZTogZmFsc2UgfSlcclxuICAgICAgICAgICAgICAudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IDMwMCwgZGVsYXk6IDUwLCBxdWV1ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pXHJcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjogNTUsIGRlbGF5OiAwLCBxdWV1ZTogZmFsc2V9KVxyXG4gICAgICAgICAgICAgIC52ZWxvY2l0eSh7c2NhbGVYOiBzY2FsZUZhY3Rvciwgc2NhbGVZOiBzY2FsZUZhY3Rvcn0sIHtkdXJhdGlvbjogMzAwLCBkZWxheTogMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJ30pO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICB0aW1lb3V0UmVmID0gc2V0VGltZW91dChzaG93VG9vbHRpcCwgdG9vbHRpcERlbGF5KTsgLy8gRW5kIEludGVydmFsXHJcblxyXG4gICAgICAgIC8vIE1vdXNlIE91dFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ21vdXNlbGVhdmUudG9vbHRpcCc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAvLyBSZXNldCBTdGF0ZVxyXG4gICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYpO1xyXG5cclxuICAgICAgICAgIC8vIEFuaW1hdGUgYmFja1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICB0b29sdGlwRWwudmVsb2NpdHkoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCwgdHJhbnNsYXRlWTogMCwgdHJhbnNsYXRlWDogMH0sIHsgZHVyYXRpb246IDIyNSwgcXVldWU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AudmVsb2NpdHkoe29wYWNpdHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxfSwge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246MjI1LFxyXG4gICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICB0b29sdGlwRWwuY3NzKHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTt9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sMjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgcmVwb3NpdGlvbldpdGhpblNjcmVlbiA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBuZXdYID0geDtcclxuICAgIHZhciBuZXdZID0geTtcclxuXHJcbiAgICBpZiAobmV3WCA8IDApIHtcclxuICAgICAgbmV3WCA9IDQ7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1ggKyB3aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAgIG5ld1ggLT0gbmV3WCArIHdpZHRoIC0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1kgPCAwKSB7XHJcbiAgICAgIG5ld1kgPSA0O1xyXG4gICAgfSBlbHNlIGlmIChuZXdZICsgaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0ICsgJCh3aW5kb3cpLnNjcm9sbFRvcCkge1xyXG4gICAgICBuZXdZIC09IG5ld1kgKyBoZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt4OiBuZXdYLCB5OiBuZXdZfTtcclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICQoJy50b29sdGlwcGVkJykudG9vbHRpcCgpO1xyXG4gICB9KTtcclxufSggalF1ZXJ5ICkpO1xyXG47LyohXHJcbiAqIFdhdmVzIHYwLjYuNFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbjsoZnVuY3Rpb24od2luZG93KSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIFdhdmVzID0gV2F2ZXMgfHwge307XHJcbiAgICB2YXIgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xyXG5cclxuICAgIC8vIEZpbmQgZXhhY3QgcG9zaXRpb24gb2YgZWxlbWVudFxyXG4gICAgZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW0pIHtcclxuICAgICAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtKSB7XHJcbiAgICAgICAgdmFyIGRvY0VsZW0sIHdpbixcclxuICAgICAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH0sXHJcbiAgICAgICAgICAgIGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuICAgICAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcclxuICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRTdHlsZShvYmopIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgYSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShhKSkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gKGEgKyAnOicgKyBvYmpbYV0gKyAnOycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIEVmZmVjdCA9IHtcclxuXHJcbiAgICAgICAgLy8gRWZmZWN0IGRlbGF5XHJcbiAgICAgICAgZHVyYXRpb246IDc1MCxcclxuXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24oZSwgZWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSByaWdodCBjbGlja1xyXG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudCB8fCB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHJpcHBsZVxyXG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSAnd2F2ZXMtcmlwcGxlJztcclxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQocmlwcGxlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBjbGljayBjb29yZGluYXRlIGFuZCBlbGVtZW50IHdpdGRoXHJcbiAgICAgICAgICAgIHZhciBwb3MgICAgICAgICA9IG9mZnNldChlbCk7XHJcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVkgICA9IChlLnBhZ2VZIC0gcG9zLnRvcCk7XHJcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVggICA9IChlLnBhZ2VYIC0gcG9zLmxlZnQpO1xyXG4gICAgICAgICAgICB2YXIgc2NhbGUgICAgICAgPSAnc2NhbGUoJysoKGVsLmNsaWVudFdpZHRoIC8gMTAwKSAqIDEwKSsnKSc7XHJcblxyXG4gICAgICAgICAgICAvLyBTdXBwb3J0IGZvciB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgIGlmICgndG91Y2hlcycgaW4gZSkge1xyXG4gICAgICAgICAgICAgIHJlbGF0aXZlWSAgID0gKGUudG91Y2hlc1swXS5wYWdlWSAtIHBvcy50b3ApO1xyXG4gICAgICAgICAgICAgIHJlbGF0aXZlWCAgID0gKGUudG91Y2hlc1swXS5wYWdlWCAtIHBvcy5sZWZ0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXR0YWNoIGRhdGEgdG8gZWxlbWVudFxyXG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnLCBEYXRlLm5vdygpKTtcclxuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zY2FsZScsIHNjYWxlKTtcclxuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgcmVsYXRpdmVYKTtcclxuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgcmVsYXRpdmVZKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCByaXBwbGUgcG9zaXRpb25cclxuICAgICAgICAgICAgdmFyIHJpcHBsZVN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSsncHgnLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiByZWxhdGl2ZVgrJ3B4J1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUgKyAnIHdhdmVzLW5vdHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XHJcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSByaXBwbGUuY2xhc3NOYW1lLnJlcGxhY2UoJ3dhdmVzLW5vdHJhbnNpdGlvbicsICcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYWxlIHRoZSByaXBwbGVcclxuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzY2FsZTtcclxuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNmb3JtJ10gPSBzY2FsZTtcclxuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9IHNjYWxlO1xyXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNmb3JtJ10gPSBzY2FsZTtcclxuICAgICAgICAgICAgcmlwcGxlU3R5bGUudHJhbnNmb3JtID0gc2NhbGU7XHJcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlLm9wYWNpdHkgICA9ICcxJztcclxuXHJcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XHJcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zaXRpb24tZHVyYXRpb24nXSAgICA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XHJcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2l0aW9uLWR1cmF0aW9uJ10gICAgICA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XHJcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gICAgICAgICA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XHJcblxyXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xyXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xyXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xyXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICAgICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xyXG5cclxuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUocmlwcGxlU3R5bGUpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoaWRlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaHVwKGUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWwuY2xpZW50V2lkdGggKiAxLjQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgZmlyc3QgcmlwcGxlXHJcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgcmlwcGxlcyA9IGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdmVzLXJpcHBsZScpO1xyXG4gICAgICAgICAgICBpZiAocmlwcGxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByaXBwbGUgPSByaXBwbGVzW3JpcHBsZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVggICA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xyXG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVZICAgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcclxuICAgICAgICAgICAgdmFyIHNjYWxlICAgICAgID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS1zY2FsZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IGRlbGF5IGJlZXR3ZWVuIG1vdXNlZG93biBhbmQgbW91c2UgbGVhdmVcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSBEYXRlLm5vdygpIC0gTnVtYmVyKHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG9sZCcpKTtcclxuICAgICAgICAgICAgdmFyIGRlbGF5ID0gMzUwIC0gZGlmZjtcclxuXHJcbiAgICAgICAgICAgIGlmIChkZWxheSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRmFkZSBvdXQgcmlwcGxlIGFmdGVyIGRlbGF5XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSsncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYKydweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIER1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcclxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBzY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBzY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nOiBzY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogc2NhbGUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHN0eWxlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChyaXBwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgRWZmZWN0LmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIExpdHRsZSBoYWNrIHRvIG1ha2UgPGlucHV0PiBjYW4gcGVyZm9ybSB3YXZlcyBlZmZlY3RcclxuICAgICAgICB3cmFwSW5wdXQ6IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgZWxlbWVudHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2FdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaW5wdXQgYWxyZWFkeSBoYXZlIHBhcmVudCBqdXN0IHBhc3MgdGhyb3VnaFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaScgJiYgcGFyZW50LmNsYXNzTmFtZS5pbmRleE9mKCd3YXZlcy1lZmZlY3QnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBQdXQgZWxlbWVudCBjbGFzcyBhbmQgc3R5bGUgdG8gdGhlIHNwZWNpZmllZCBwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSArICcgd2F2ZXMtaW5wdXQtd3JhcHBlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50U3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZWxlbWVudFN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3dhdmVzLWJ1dHRvbi1pbnB1dCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBQdXQgZWxlbWVudCBhcyBjaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQod3JhcHBlciwgZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlIG1vdXNlZG93biBldmVudCBmb3IgNTAwbXMgZHVyaW5nIGFuZCBhZnRlciB0b3VjaFxyXG4gICAgICovXHJcbiAgICB2YXIgVG91Y2hIYW5kbGVyID0ge1xyXG4gICAgICAgIC8qIHVzZXMgYW4gaW50ZWdlciByYXRoZXIgdGhhbiBib29sIHNvIHRoZXJlJ3Mgbm8gaXNzdWVzIHdpdGhcclxuICAgICAgICAgKiBuZWVkaW5nIHRvIGNsZWFyIHRpbWVvdXRzIGlmIGFub3RoZXIgdG91Y2ggZXZlbnQgb2NjdXJyZWRcclxuICAgICAgICAgKiB3aXRoaW4gdGhlIDUwMG1zLiBDYW5ub3QgbW91c2V1cCBiZXR3ZWVuIHRvdWNoc3RhcnQgYW5kXHJcbiAgICAgICAgICogdG91Y2hlbmQsIG5vciBpbiB0aGUgNTAwbXMgYWZ0ZXIgdG91Y2hlbmQuICovXHJcbiAgICAgICAgdG91Y2hlczogMCxcclxuICAgICAgICBhbGxvd0V2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBhbGxvdyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzICs9IDE7IC8vcHVzaFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3VjaEhhbmRsZXIudG91Y2hlcyAtPSAxOyAvL3BvcCBhZnRlciA1MDBtc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiBUb3VjaEhhbmRsZXIudG91Y2hlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFsbG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbGxvdztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNodXA6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgVG91Y2hIYW5kbGVyLmFsbG93RXZlbnQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlciBmb3IgLndhdmVzLWVmZmVjdCBlbGVtZW50LlxyXG4gICAgICogcmV0dXJucyBudWxsIHdoZW4gLndhdmVzLWVmZmVjdCBlbGVtZW50IG5vdCBpbiBcImNsaWNrIHRyZWVcIlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRXYXZlc0VmZmVjdEVsZW1lbnQoZSkge1xyXG4gICAgICAgIGlmIChUb3VjaEhhbmRsZXIuYWxsb3dFdmVudChlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRhcmdldC5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpICYmIHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignd2F2ZXMtZWZmZWN0JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnd2F2ZXMtZWZmZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnViYmxlIHRoZSBjbGljayBhbmQgc2hvdyBlZmZlY3QgaWYgLndhdmVzLWVmZmVjdCBlbGVtIHdhcyBmb3VuZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBzaG93RWZmZWN0KGUpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGdldFdhdmVzRWZmZWN0RWxlbWVudChlKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgRWZmZWN0LnNob3coZSwgZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBXYXZlcy5kaXNwbGF5RWZmZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICBpZiAoJ2R1cmF0aW9uJyBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIEVmZmVjdC5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1dyYXAgaW5wdXQgaW5zaWRlIDxpPiB0YWdcclxuICAgICAgICBFZmZlY3Qud3JhcElucHV0KCQkKCcud2F2ZXMtZWZmZWN0JykpO1xyXG5cclxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNob3dFZmZlY3QsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBXYXZlcyB0byBhbiBpbnB1dCBlbGVtZW50IChvciBhbnkgZWxlbWVudCB3aGljaCBkb2Vzbid0XHJcbiAgICAgKiBidWJibGUgbW91c2V1cC9tb3VzZWRvd24gZXZlbnRzKS5cclxuICAgICAqICAgSW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoIGR5bmFtaWNhbGx5IGxvYWRlZCBmb3Jtcy9pbnB1dHMsIG9yXHJcbiAgICAgKiB3aGVyZSB0aGUgdXNlciBkb2Vzbid0IHdhbnQgYSBkZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlci5cclxuICAgICAqL1xyXG4gICAgV2F2ZXMuYXR0YWNoID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIC8vRlVUVVJFOiBhdXRvbWF0aWNhbGx5IGFkZCB3YXZlcyBjbGFzc2VzIGFuZCBhbGxvdyB1c2Vyc1xyXG4gICAgICAgIC8vIHRvIHNwZWNpZnkgdGhlbSB3aXRoIGFuIG9wdGlvbnMgcGFyYW0/IEVnLiBsaWdodC9jbGFzc2ljL2J1dHRvblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICBFZmZlY3Qud3JhcElucHV0KFtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNob3dFZmZlY3QsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuV2F2ZXMgPSBXYXZlcztcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F2ZXMuZGlzcGxheUVmZmVjdCgpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG5cclxufSkod2luZG93KTtcclxuO01hdGVyaWFsaXplLnRvYXN0ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGRpc3BsYXlMZW5ndGgsIGNsYXNzTmFtZSwgY29tcGxldGVDYWxsYmFjaykge1xyXG4gIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcIlwiO1xyXG5cclxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0LWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBDcmVhdGUgdG9hc3QgY29udGFpbmVyIGlmIGl0IGRvZXMgbm90IGV4aXN0XHJcbiAgaWYgKGNvbnRhaW5lciA9PT0gbnVsbCkge1xyXG4gICAgLy8gY3JlYXRlIG5vdGlmaWNhdGlvbiBjb250YWluZXJcclxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ3RvYXN0LWNvbnRhaW5lcic7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvLyBTZWxlY3QgYW5kIGFwcGVuZCB0b2FzdFxyXG4gIHZhciBuZXdUb2FzdCA9IGNyZWF0ZVRvYXN0KG1lc3NhZ2UpO1xyXG5cclxuICAvLyBvbmx5IGFwcGVuZCB0b2FzdCBpZiBtZXNzYWdlIGlzIG5vdCB1bmRlZmluZWRcclxuICBpZihtZXNzYWdlKXtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2FzdCk7XHJcbiAgfVxyXG5cclxuICBuZXdUb2FzdC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgLy8gQW5pbWF0ZSB0b2FzdCBpblxyXG4gIFZlbChuZXdUb2FzdCwge3RyYW5zbGF0ZVk6ICctMzVweCcsICBvcGFjaXR5OiAxIH0sIHtkdXJhdGlvbjogMzAwLFxyXG4gICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcclxuICAgIHF1ZXVlOiBmYWxzZX0pO1xyXG5cclxuICAvLyBBbGxvd3MgdGltZXIgdG8gYmUgcGF1c2Ugd2hpbGUgYmVpbmcgcGFubmVkXHJcbiAgdmFyIHRpbWVMZWZ0ID0gZGlzcGxheUxlbmd0aDtcclxuICB2YXIgY291bnRlckludGVydmFsO1xyXG4gIGlmICh0aW1lTGVmdCAhPSBudWxsKSAge1xyXG4gICAgY291bnRlckludGVydmFsID0gc2V0SW50ZXJ2YWwgKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmIChuZXdUb2FzdC5wYXJlbnROb2RlID09PSBudWxsKVxyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGNvdW50ZXJJbnRlcnZhbCk7XHJcblxyXG4gICAgICAvLyBJZiB0b2FzdCBpcyBub3QgYmVpbmcgZHJhZ2dlZCwgZGVjcmVhc2UgaXRzIHRpbWUgcmVtYWluaW5nXHJcbiAgICAgIGlmICghbmV3VG9hc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYW5uaW5nJykpIHtcclxuICAgICAgICB0aW1lTGVmdCAtPSAyMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcclxuICAgICAgICAvLyBBbmltYXRlIHRvYXN0IG91dFxyXG4gICAgICAgIFZlbChuZXdUb2FzdCwge1wib3BhY2l0eVwiOiAwLCBtYXJnaW5Ub3A6ICctNDBweCd9LCB7IGR1cmF0aW9uOiAzNzUsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcclxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBvcHRpb25hbCBjYWxsYmFja1xyXG4gICAgICAgICAgICAgIGlmKHR5cGVvZihjb21wbGV0ZUNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSB0b2FzdCBhZnRlciBpdCB0aW1lcyBvdXRcclxuICAgICAgICAgICAgICB0aGlzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGNvdW50ZXJJbnRlcnZhbCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDIwKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlVG9hc3QoaHRtbCkge1xyXG5cclxuICAgIC8vIENyZWF0ZSB0b2FzdFxyXG4gICAgdmFyIHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKCd0b2FzdCcpO1xyXG4gICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGNvdW50ID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC8vIElmIHR5cGUgb2YgcGFyYW1ldGVyIGlzIEhUTUwgRWxlbWVudFxyXG4gICAgaWYgKCB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBodG1sIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiBodG1sICYmIHR5cGVvZiBodG1sID09PSBcIm9iamVjdFwiICYmIGh0bWwgIT09IG51bGwgJiYgaHRtbC5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2YgaHRtbC5ub2RlTmFtZT09PVwic3RyaW5nXCJcclxuKSB7XHJcbiAgICAgIHRvYXN0LmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaHRtbCBpbnN0YW5jZW9mIGpRdWVyeSkge1xyXG4gICAgICAvLyBDaGVjayBpZiBpdCBpcyBqUXVlcnkgb2JqZWN0XHJcbiAgICAgIHRvYXN0LmFwcGVuZENoaWxkKGh0bWxbMF0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIEluc2VydCBhcyB0ZXh0O1xyXG4gICAgICB0b2FzdC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgfVxyXG4gICAgLy8gQmluZCBoYW1tZXJcclxuICAgIHZhciBoYW1tZXJIYW5kbGVyID0gbmV3IEhhbW1lcih0b2FzdCwge3ByZXZlbnRfZGVmYXVsdDogZmFsc2V9KTtcclxuICAgIGhhbW1lckhhbmRsZXIub24oJ3BhbicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xyXG4gICAgICB2YXIgYWN0aXZhdGlvbkRpc3RhbmNlID0gODA7XHJcblxyXG4gICAgICAvLyBDaGFuZ2UgdG9hc3Qgc3RhdGVcclxuICAgICAgaWYgKCF0b2FzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bhbm5pbmcnKSl7XHJcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LmFkZCgncGFubmluZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgb3BhY2l0eVBlcmNlbnQgPSAxLU1hdGguYWJzKGRlbHRhWCAvIGFjdGl2YXRpb25EaXN0YW5jZSk7XHJcbiAgICAgIGlmIChvcGFjaXR5UGVyY2VudCA8IDApXHJcbiAgICAgICAgb3BhY2l0eVBlcmNlbnQgPSAwO1xyXG5cclxuICAgICAgVmVsKHRvYXN0LCB7bGVmdDogZGVsdGFYLCBvcGFjaXR5OiBvcGFjaXR5UGVyY2VudCB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGhhbW1lckhhbmRsZXIub24oJ3BhbmVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xyXG4gICAgICB2YXIgYWN0aXZhdGlvbkRpc3RhbmNlID0gODA7XHJcblxyXG4gICAgICAvLyBJZiB0b2FzdCBkcmFnZ2VkIHBhc3QgYWN0aXZhdGlvbiBwb2ludFxyXG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IGFjdGl2YXRpb25EaXN0YW5jZSkge1xyXG4gICAgICAgIFZlbCh0b2FzdCwge21hcmdpblRvcDogJy00MHB4J30sIHsgZHVyYXRpb246IDM3NSxcclxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcclxuICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcclxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YoY29tcGxldGVDYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2FzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LnJlbW92ZSgncGFubmluZycpO1xyXG4gICAgICAgIC8vIFB1dCB0b2FzdCBiYWNrIGludG8gb3JpZ2luYWwgcG9zaXRpb25cclxuICAgICAgICBWZWwodG9hc3QsIHsgbGVmdDogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbycsXHJcbiAgICAgICAgICBxdWV1ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0b2FzdDtcclxuICB9XHJcbn07XHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgdmFyIG1ldGhvZHMgPSB7XHJcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgbWVudVdpZHRoOiAzMDAsXHJcbiAgICAgICAgZWRnZTogJ2xlZnQnLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBtZW51SWQgPSAkdGhpcy5hdHRyKCdkYXRhLWFjdGl2YXRlcycpO1xyXG4gICAgICAgIHZhciBtZW51ID0gJChcIiNcIisgbWVudUlkKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRvIHdpZHRoXHJcbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVdpZHRoICE9IDMwMCkge1xyXG4gICAgICAgICAgbWVudS5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIFRvdWNoIEFyZWFcclxuICAgICAgICB2YXIgJGRyYWdUYXJnZXQgPSAkKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJyArIG1lbnVJZCArICdcIl0nKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGUpIHtcclxuICAgICAgICAgIC8vIFJlZ2VuZXJhdGUgZHJhZ1RhcmdldFxyXG4gICAgICAgICAgaWYgKCRkcmFnVGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkZHJhZ1RhcmdldCA9ICQoJzxkaXYgY2xhc3M9XCJkcmFnLXRhcmdldFwiPjwvZGl2PicpLmF0dHIoJ2RhdGEtc2lkZW5hdicsIG1lbnVJZCk7XHJcbiAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRkcmFnVGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGRyYWdUYXJnZXQgPSAkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKC0xMDAlKScpO1xyXG4gICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsnbGVmdCc6IDB9KTsgLy8gQWRkIFRvdWNoIEFyZWFcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBtZW51LmFkZENsYXNzKCdyaWdodC1hbGlnbmVkJykgLy8gQ2hhbmdlIHRleHQtYWxpZ25tZW50IHRvIHJpZ2h0XHJcbiAgICAgICAgICAgIC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyk7XHJcbiAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeydyaWdodCc6IDB9KTsgLy8gQWRkIFRvdWNoIEFyZWFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZpeGVkIHNpZGVuYXYsIGJyaW5nIG1lbnUgb3V0XHJcbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XHJcbiAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDApJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2luZG93IHJlc2l6ZSB0byByZXNldCBvbiBsYXJnZSBzY3JlZW5zIGZpeGVkXHJcbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcclxuICAgICAgICAgICQod2luZG93KS5yZXNpemUoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcclxuICAgICAgICAgICAgICAvLyBDbG9zZSBtZW51IGlmIHdpbmRvdyBpcyByZXNpemVkIGJpZ2dlciB0aGFuIDk5MiBhbmQgdXNlciBoYXMgZml4ZWQgc2lkZW5hdlxyXG4gICAgICAgICAgICAgIGlmICgkKCcjc2lkZW5hdi1vdmVybGF5JykubGVuZ3RoICE9PSAwICYmIG1lbnVPdXQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xyXG4gICAgICAgICAgICAgICAgLy8gbWVudS5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtZW51T3V0ID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgxMDAlKScpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIGNsb3NlT25DbGljaywgdGhlbiBhZGQgY2xvc2UgZXZlbnQgZm9yIGFsbCBhIHRhZ3MgaW4gc2lkZSBzaWRlTmF2XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xvc2VPbkNsaWNrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBtZW51Lm9uKFwiY2xpY2suaXRlbWNsaWNrXCIsIFwiYTpub3QoLmNvbGxhcHNpYmxlLWhlYWRlcilcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVtb3ZlTWVudSA9IGZ1bmN0aW9uKHJlc3RvcmVOYXYpIHtcclxuICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcclxuICAgICAgICAgIC8vIFJlZW5hYmxlIHNjcm9sbGluZ1xyXG4gICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcnXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKCcjc2lkZW5hdi1vdmVybGF5JykudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7ZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gfSk7XHJcbiAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgcGhhbnRvbSBkaXZcclxuICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJycsIHJpZ2h0OiAnJywgbGVmdDogJzAnfSk7XHJcbiAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoXHJcbiAgICAgICAgICAgICAgeyd0cmFuc2xhdGVYJzogJy0xMDAlJ30sXHJcbiAgICAgICAgICAgICAgeyBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3RvcmVOYXYgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIEZpeGVkIHNpZGVuYXZcclxuICAgICAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBSZXNldCBwaGFudG9tIGRpdlxyXG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnJywgcmlnaHQ6ICcwJywgbGVmdDogJyd9KTtcclxuICAgICAgICAgICAgbWVudS52ZWxvY2l0eShcclxuICAgICAgICAgICAgICB7J3RyYW5zbGF0ZVgnOiAnMTAwJSd9LFxyXG4gICAgICAgICAgICAgIHsgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlTmF2ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBGaXhlZCBzaWRlbmF2XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gVG91Y2ggRXZlbnRcclxuICAgICAgICB2YXIgcGFubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtZW51T3V0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZSkge1xyXG4gICAgICAgICAgJGRyYWdUYXJnZXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKG1lbnVPdXQpIHtcclxuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRkcmFnVGFyZ2V0LmhhbW1lcih7XHJcbiAgICAgICAgICAgIHByZXZlbnRfZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT0gXCJ0b3VjaFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLmdlc3R1cmUuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmNlbnRlci54O1xyXG4gICAgICAgICAgICAgIHZhciB5ID0gZS5nZXN0dXJlLmNlbnRlci55O1xyXG4gICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xyXG5cclxuICAgICAgICAgICAgICAvLyBEaXNhYmxlIFNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XHJcbiAgICAgICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgICAvLyBJZiBvdmVybGF5IGRvZXMgbm90IGV4aXN0LCBjcmVhdGUgb25lIGFuZCBpZiBpdCBpcyBjbGlja2VkLCBjbG9zZSBtZW51XHJcbiAgICAgICAgICAgICAgaWYgKCRvdmVybGF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS5jc3MoJ29wYWNpdHknLCAwKS5jbGljayggZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRvdmVybGF5KTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4ID4gb3B0aW9ucy5tZW51V2lkdGgpIHsgeCA9IG9wdGlvbnMubWVudVdpZHRoOyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4IDwgMCkgeyB4ID0gMDsgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKHggPCAob3B0aW9ucy5tZW51V2lkdGggLyAyKSkgeyBtZW51T3V0ID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IERpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA+PSAob3B0aW9ucy5tZW51V2lkdGggLyAyKSkgeyBtZW51T3V0ID0gdHJ1ZTsgfVxyXG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAoeCAtIG9wdGlvbnMubWVudVdpZHRoKSArICdweCknKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKHggPCAod2luZG93LmlubmVyV2lkdGggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgRGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID49ICh3aW5kb3cuaW5uZXJXaWR0aCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHtcclxuICAgICAgICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciByaWdodFBvcyA9ICh4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIGlmIChyaWdodFBvcyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgcmlnaHRQb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgcmlnaHRQb3MgKyAncHgpJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgLy8gUGVyY2VudGFnZSBvdmVybGF5XHJcbiAgICAgICAgICAgICAgdmFyIG92ZXJsYXlQZXJjO1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSB4IC8gb3B0aW9ucy5tZW51V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogb3ZlcmxheVBlcmMgfSwge2R1cmF0aW9uOiAxMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5UGVyYyA9IE1hdGguYWJzKCh4IC0gd2luZG93LmlubmVyV2lkdGgpIC8gb3B0aW9ucy5tZW51V2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IG92ZXJsYXlQZXJjIH0sIHtkdXJhdGlvbjogMTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSkuYmluZCgncGFuZW5kJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PSBcInRvdWNoXCIpIHtcclxuICAgICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XHJcbiAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XHJcbiAgICAgICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuY2VudGVyLng7XHJcbiAgICAgICAgICAgICAgdmFyIGxlZnRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGg7XHJcbiAgICAgICAgICAgICAgdmFyIHJpZ2h0UG9zID0geCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICBpZiAobGVmdFBvcyA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0UG9zID0gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRQb3MgPSAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdmVsb2NpdHlYIDw9IDAuMyB0aGVuIHRoZSB1c2VyIGlzIGZsaW5naW5nIHRoZSBtZW51IGNsb3NlZCBzbyBpZ25vcmUgbWVudU91dFxyXG4gICAgICAgICAgICAgICAgaWYgKChtZW51T3V0ICYmIHZlbG9jaXR5WCA8PSAwLjMpIHx8IHZlbG9jaXR5WCA8IC0wLjUpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxyXG4gICAgICAgICAgICAgICAgICBpZiAobGVmdFBvcyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWzAsIGxlZnRQb3NdfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAxIH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogMCwgbGVmdDogJyd9KTtcclxuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbWVudU91dCB8fCB2ZWxvY2l0eVggPiAwLjMpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAvLyBTbGlkZSBtZW51IGNsb3NlZFxyXG4gICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFstMSAqIG9wdGlvbnMubWVudVdpZHRoIC0gMTAsIGxlZnRQb3NdfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAwIH0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICcxMHB4JywgcmlnaHQ6ICcnLCBsZWZ0OiAwfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKChtZW51T3V0ICYmIHZlbG9jaXR5WCA+PSAtMC4zKSB8fCB2ZWxvY2l0eVggPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxyXG4gICAgICAgICAgICAgICAgICBpZiAocmlnaHRQb3MgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCByaWdodFBvc119LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDEgfSwge2R1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzUwJScsIHJpZ2h0OiAnJywgbGVmdDogMH0pO1xyXG4gICAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFtZW51T3V0IHx8IHZlbG9jaXR5WCA8IC0wLjMpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gU2xpZGUgbWVudSBjbG9zZWRcclxuICAgICAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbb3B0aW9ucy5tZW51V2lkdGggKyAxMCwgcmlnaHRQb3NdfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAwIH0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICcxMHB4JywgcmlnaHQ6IDAsIGxlZnQ6ICcnfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkdGhpcy5vZmYoJ2NsaWNrLnNpZGVuYXYnKS5vbignY2xpY2suc2lkZW5hdicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKG1lbnVPdXQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBTY3JvbGxpbmdcclxuICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIHZhciBvbGRXaWR0aCA9ICRib2R5LmlubmVyV2lkdGgoKTtcclxuICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHVzaCBjdXJyZW50IGRyYWcgdGFyZ2V0IG9uIHRvcCBvZiBET00gdHJlZVxyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRkcmFnVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogMCwgbGVmdDogJyd9KTtcclxuICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCAtMSAqIG9wdGlvbnMubWVudVdpZHRoXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogJycsIGxlZnQ6IDB9KTtcclxuICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCBvcHRpb25zLm1lbnVXaWR0aF19LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJG92ZXJsYXkuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XHJcbiAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJG92ZXJsYXkpO1xyXG4gICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcclxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XHJcbiAgICAgIHZhciAkZHJhZ1RhcmdldCA9ICQoJy5kcmFnLXRhcmdldFtkYXRhLXNpZGVuYXY9XCInICsgJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2YXRlcycpICsgJ1wiXScpO1xyXG4gICAgICAkb3ZlcmxheS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAkZHJhZ1RhcmdldC5yZW1vdmUoKTtcclxuICAgICAgJCh0aGlzKS5vZmYoJ2NsaWNrJyk7XHJcbiAgICAgICRvdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIHNob3cgOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfSxcclxuICAgIGhpZGUgOiBmdW5jdGlvbigpIHtcclxuICAgICAgJCgnI3NpZGVuYXYtb3ZlcmxheScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gICQuZm4uc2lkZU5hdiA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xyXG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XHJcbiAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApKTtcclxuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kT3JPcHRpb25zICkge1xyXG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXHJcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZGVOYXYnICk7XHJcbiAgICB9XHJcbiAgfTsgLy8gUGx1Z2luIGVuZFxyXG59KCBqUXVlcnkgKSk7XHJcbjsvKipcclxuICogRXh0ZW5kIGpxdWVyeSB3aXRoIGEgc2Nyb2xsc3B5IHBsdWdpbi5cclxuICogVGhpcyB3YXRjaGVzIHRoZSB3aW5kb3cgc2Nyb2xsIGFuZCBmaXJlcyBldmVudHMgd2hlbiBlbGVtZW50cyBhcmUgc2Nyb2xsZWQgaW50byB2aWV3cG9ydC5cclxuICpcclxuICogdGhyb3R0bGUoKSBhbmQgZ2V0VGltZSgpIHRha2VuIGZyb20gVW5kZXJzY29yZS5qc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcclxuICpcclxuICogQGF1dGhvciBDb3B5cmlnaHQgMjAxMyBKb2huIFNtYXJ0XHJcbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vdGhlc21hcnQvanF1ZXJ5LXNjcm9sbHNweS9tYXN0ZXIvTElDRU5TRVxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVzbWFydFxyXG4gKiBAdmVyc2lvbiAwLjEuMlxyXG4gKi9cclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0dmFyIGpXaW5kb3cgPSAkKHdpbmRvdyk7XHJcblx0dmFyIGVsZW1lbnRzID0gW107XHJcblx0dmFyIGVsZW1lbnRzSW5WaWV3ID0gW107XHJcblx0dmFyIGlzU3B5aW5nID0gZmFsc2U7XHJcblx0dmFyIHRpY2tzID0gMDtcclxuXHR2YXIgdW5pcXVlX2lkID0gMTtcclxuXHR2YXIgb2Zmc2V0ID0ge1xyXG5cdFx0dG9wIDogMCxcclxuXHRcdHJpZ2h0IDogMCxcclxuXHRcdGJvdHRvbSA6IDAsXHJcblx0XHRsZWZ0IDogMCxcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmQgZWxlbWVudHMgdGhhdCBhcmUgd2l0aGluIHRoZSBib3VuZGFyeVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0b3BcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gcmlnaHRcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gYm90dG9tXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcclxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9XHRcdEEgY29sbGVjdGlvbiBvZiBlbGVtZW50c1xyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGZpbmRFbGVtZW50cyh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpIHtcclxuXHRcdHZhciBoaXRzID0gJCgpO1xyXG5cdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XHJcblx0XHRcdGlmIChlbGVtZW50LmhlaWdodCgpID4gMCkge1xyXG5cdFx0XHRcdHZhciBlbFRvcCA9IGVsZW1lbnQub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHRcdFx0ZWxMZWZ0ID0gZWxlbWVudC5vZmZzZXQoKS5sZWZ0LFxyXG5cdFx0XHRcdFx0ZWxSaWdodCA9IGVsTGVmdCArIGVsZW1lbnQud2lkdGgoKSxcclxuXHRcdFx0XHRcdGVsQm90dG9tID0gZWxUb3AgKyBlbGVtZW50LmhlaWdodCgpO1xyXG5cclxuXHRcdFx0XHR2YXIgaXNJbnRlcnNlY3QgPSAhKGVsTGVmdCA+IHJpZ2h0IHx8XHJcblx0XHRcdFx0XHRlbFJpZ2h0IDwgbGVmdCB8fFxyXG5cdFx0XHRcdFx0ZWxUb3AgPiBib3R0b20gfHxcclxuXHRcdFx0XHRcdGVsQm90dG9tIDwgdG9wKTtcclxuXHJcblx0XHRcdFx0aWYgKGlzSW50ZXJzZWN0KSB7XHJcblx0XHRcdFx0XHRoaXRzLnB1c2goZWxlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gaGl0cztcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRoZSB3aW5kb3dcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBvblNjcm9sbChzY3JvbGxPZmZzZXQpIHtcclxuXHRcdC8vIHVuaXF1ZSB0aWNrIGlkXHJcblx0XHQrK3RpY2tzO1xyXG5cclxuXHRcdC8vIHZpZXdwb3J0IHJlY3RhbmdsZVxyXG5cdFx0dmFyIHRvcCA9IGpXaW5kb3cuc2Nyb2xsVG9wKCksXHJcblx0XHRcdGxlZnQgPSBqV2luZG93LnNjcm9sbExlZnQoKSxcclxuXHRcdFx0cmlnaHQgPSBsZWZ0ICsgaldpbmRvdy53aWR0aCgpLFxyXG5cdFx0XHRib3R0b20gPSB0b3AgKyBqV2luZG93LmhlaWdodCgpO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGljaCBlbGVtZW50cyBhcmUgaW4gdmlld1xyXG5cdFx0dmFyIGludGVyc2VjdGlvbnMgPSBmaW5kRWxlbWVudHModG9wK29mZnNldC50b3AgKyBzY3JvbGxPZmZzZXQgfHwgMjAwLCByaWdodCtvZmZzZXQucmlnaHQsIGJvdHRvbStvZmZzZXQuYm90dG9tLCBsZWZ0K29mZnNldC5sZWZ0KTtcclxuXHRcdCQuZWFjaChpbnRlcnNlY3Rpb25zLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XHJcblxyXG5cdFx0XHR2YXIgbGFzdFRpY2sgPSBlbGVtZW50LmRhdGEoJ3Njcm9sbFNweTp0aWNrcycpO1xyXG5cdFx0XHRpZiAodHlwZW9mIGxhc3RUaWNrICE9ICdudW1iZXInKSB7XHJcblx0XHRcdFx0Ly8gZW50ZXJlZCBpbnRvIHZpZXdcclxuXHRcdFx0XHRlbGVtZW50LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxTcHk6ZW50ZXInKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIHRpY2sgaWRcclxuXHRcdFx0ZWxlbWVudC5kYXRhKCdzY3JvbGxTcHk6dGlja3MnLCB0aWNrcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hpY2ggZWxlbWVudHMgYXJlIG5vIGxvbmdlciBpbiB2aWV3XHJcblx0XHQkLmVhY2goZWxlbWVudHNJblZpZXcsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIGxhc3RUaWNrID0gZWxlbWVudC5kYXRhKCdzY3JvbGxTcHk6dGlja3MnKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBsYXN0VGljayA9PSAnbnVtYmVyJyAmJiBsYXN0VGljayAhPT0gdGlja3MpIHtcclxuXHRcdFx0XHQvLyBleGl0ZWQgZnJvbSB2aWV3XHJcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VySGFuZGxlcignc2Nyb2xsU3B5OmV4aXQnKTtcclxuXHRcdFx0XHRlbGVtZW50LmRhdGEoJ3Njcm9sbFNweTp0aWNrcycsIG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyByZW1lbWJlciBlbGVtZW50cyBpbiB2aWV3IGZvciBuZXh0IHRpY2tcclxuXHRcdGVsZW1lbnRzSW5WaWV3ID0gaW50ZXJzZWN0aW9ucztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxlZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcblx0Ki9cclxuXHRmdW5jdGlvbiBvbldpblNpemUoKSB7XHJcblx0XHRqV2luZG93LnRyaWdnZXIoJ3Njcm9sbFNweTp3aW5TaXplJyk7XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRW5hYmxlcyBTY3JvbGxTcHkgdXNpbmcgYSBzZWxlY3RvclxyXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fHN0cmluZ30gc2VsZWN0b3IgIFRoZSBlbGVtZW50cyBjb2xsZWN0aW9uLCBvciBhIHNlbGVjdG9yXHJcblx0ICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXHRPcHRpb25hbC5cclxuICAgICAgICB0aHJvdHRsZSA6IG51bWJlciAtPiBzY3JvbGxzcHkgdGhyb3R0bGluZy4gRGVmYXVsdDogMTAwIG1zXHJcbiAgICAgICAgb2Zmc2V0VG9wIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHRvcC4gRGVmYXVsdDogMFxyXG4gICAgICAgIG9mZnNldFJpZ2h0IDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHJpZ2h0LiBEZWZhdWx0OiAwXHJcbiAgICAgICAgb2Zmc2V0Qm90dG9tIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIGJvdHRvbS4gRGVmYXVsdDogMFxyXG4gICAgICAgIG9mZnNldExlZnQgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gbGVmdC4gRGVmYXVsdDogMFxyXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl9XHJcblx0ICovXHJcblx0JC5zY3JvbGxTcHkgPSBmdW5jdGlvbihzZWxlY3Rvciwgb3B0aW9ucykge1xyXG5cdCAgdmFyIGRlZmF1bHRzID0ge1xyXG5cdFx0XHR0aHJvdHRsZTogMTAwLFxyXG5cdFx0XHRzY3JvbGxPZmZzZXQ6IDIwMCAvLyBvZmZzZXQgLSAyMDAgYWxsb3dzIGVsZW1lbnRzIG5lYXIgYm90dG9tIG9mIHBhZ2UgdG8gc2Nyb2xsXHJcbiAgICB9O1xyXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcblx0XHR2YXIgdmlzaWJsZSA9IFtdO1xyXG5cdFx0c2VsZWN0b3IgPSAkKHNlbGVjdG9yKTtcclxuXHRcdHNlbGVjdG9yLmVhY2goZnVuY3Rpb24oaSwgZWxlbWVudCkge1xyXG5cdFx0XHRlbGVtZW50cy5wdXNoKCQoZWxlbWVudCkpO1xyXG5cdFx0XHQkKGVsZW1lbnQpLmRhdGEoXCJzY3JvbGxTcHk6aWRcIiwgaSk7XHJcblx0XHRcdC8vIFNtb290aCBzY3JvbGwgdG8gc2VjdGlvblxyXG5cdFx0ICAkKCdhW2hyZWY9XCIjJyArICQoZWxlbWVudCkuYXR0cignaWQnKSArICdcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHQgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ICAgIHZhciBvZmZzZXQgPSAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkub2Zmc2V0KCkudG9wICsgMTtcclxuXHQgICAgXHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogb2Zmc2V0IC0gb3B0aW9ucy5zY3JvbGxPZmZzZXQgfSwge2R1cmF0aW9uOiA0MDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dEN1YmljJ30pO1xyXG5cdFx0ICB9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG9mZnNldC50b3AgPSBvcHRpb25zLm9mZnNldFRvcCB8fCAwO1xyXG5cdFx0b2Zmc2V0LnJpZ2h0ID0gb3B0aW9ucy5vZmZzZXRSaWdodCB8fCAwO1xyXG5cdFx0b2Zmc2V0LmJvdHRvbSA9IG9wdGlvbnMub2Zmc2V0Qm90dG9tIHx8IDA7XHJcblx0XHRvZmZzZXQubGVmdCA9IG9wdGlvbnMub2Zmc2V0TGVmdCB8fCAwO1xyXG5cclxuXHRcdHZhciB0aHJvdHRsZWRTY3JvbGwgPSBNYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpIHtcclxuXHRcdFx0b25TY3JvbGwob3B0aW9ucy5zY3JvbGxPZmZzZXQpO1xyXG5cdFx0fSwgb3B0aW9ucy50aHJvdHRsZSB8fCAxMDApO1xyXG5cdFx0dmFyIHJlYWR5U2Nyb2xsID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0JChkb2N1bWVudCkucmVhZHkodGhyb3R0bGVkU2Nyb2xsKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCFpc1NweWluZykge1xyXG5cdFx0XHRqV2luZG93Lm9uKCdzY3JvbGwnLCByZWFkeVNjcm9sbCk7XHJcblx0XHRcdGpXaW5kb3cub24oJ3Jlc2l6ZScsIHJlYWR5U2Nyb2xsKTtcclxuXHRcdFx0aXNTcHlpbmcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBlcmZvcm0gYSBzY2FuIG9uY2UsIGFmdGVyIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQsIGFuZCBhZnRlciBkb20gaXMgcmVhZHlcclxuXHRcdHNldFRpbWVvdXQocmVhZHlTY3JvbGwsIDApO1xyXG5cclxuXHJcblx0XHRzZWxlY3Rvci5vbignc2Nyb2xsU3B5OmVudGVyJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZpc2libGUgPSAkLmdyZXAodmlzaWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcclxuXHQgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcclxuXHQgICAgfSk7XHJcblxyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKHZpc2libGVbMF0pIHtcclxuXHRcdFx0XHQkKCdhW2hyZWY9XCIjJyArIHZpc2libGVbMF0uYXR0cignaWQnKSArICdcIl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKCR0aGlzLmRhdGEoJ3Njcm9sbFNweTppZCcpIDwgdmlzaWJsZVswXS5kYXRhKCdzY3JvbGxTcHk6aWQnKSkge1xyXG5cdFx0XHRcdFx0dmlzaWJsZS51bnNoaWZ0KCQodGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHZpc2libGUucHVzaCgkKHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dmlzaWJsZS5wdXNoKCQodGhpcykpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0JCgnYVtocmVmPVwiIycgKyB2aXNpYmxlWzBdLmF0dHIoJ2lkJykgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0XHRzZWxlY3Rvci5vbignc2Nyb2xsU3B5OmV4aXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmlzaWJsZSA9ICQuZ3JlcCh2aXNpYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdCAgICAgIHJldHVybiB2YWx1ZS5oZWlnaHQoKSAhPSAwO1xyXG5cdCAgICB9KTtcclxuXHJcblx0XHRcdGlmICh2aXNpYmxlWzBdKSB7XHJcblx0XHRcdFx0JCgnYVtocmVmPVwiIycgKyB2aXNpYmxlWzBdLmF0dHIoJ2lkJykgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblx0XHRcdFx0dmlzaWJsZSA9ICQuZ3JlcCh2aXNpYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdCAgICAgICAgcmV0dXJuIHZhbHVlLmF0dHIoJ2lkJykgIT0gJHRoaXMuYXR0cignaWQnKTtcclxuXHQgICAgICB9KTtcclxuXHQgICAgICBpZiAodmlzaWJsZVswXSkgeyAvLyBDaGVjayBpZiBlbXB0eVxyXG5cdFx0XHRcdFx0JCgnYVtocmVmPVwiIycgKyB2aXNpYmxlWzBdLmF0dHIoJ2lkJykgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHNlbGVjdG9yO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIExpc3RlbiBmb3Igd2luZG93IHJlc2l6ZSBldmVudHNcclxuXHQgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcdFx0XHRcdFx0XHRPcHRpb25hbC4gU2V0IHsgdGhyb3R0bGU6IG51bWJlciB9IHRvIGNoYW5nZSB0aHJvdHRsaW5nLiBEZWZhdWx0OiAxMDAgbXNcclxuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fVx0XHQkKHdpbmRvdylcclxuXHQgKi9cclxuXHQkLndpblNpemVTcHkgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHQkLndpblNpemVTcHkgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGpXaW5kb3c7IH07IC8vIGxvY2sgZnJvbSBtdWx0aXBsZSBjYWxsc1xyXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge1xyXG5cdFx0XHR0aHJvdHRsZTogMTAwXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIGpXaW5kb3cub24oJ3Jlc2l6ZScsIE1hdGVyaWFsaXplLnRocm90dGxlKG9uV2luU2l6ZSwgb3B0aW9ucy50aHJvdHRsZSB8fCAxMDApKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBFbmFibGVzIFNjcm9sbFNweSBvbiBhIGNvbGxlY3Rpb24gb2YgZWxlbWVudHNcclxuXHQgKiBlLmcuICQoJy5zY3JvbGxTcHknKS5zY3JvbGxTcHkoKVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1x0T3B0aW9uYWwuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aHJvdHRsZSA6IG51bWJlciAtPiBzY3JvbGxzcHkgdGhyb3R0bGluZy4gRGVmYXVsdDogMTAwIG1zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXRUb3AgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gdG9wLiBEZWZhdWx0OiAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXRSaWdodCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSByaWdodC4gRGVmYXVsdDogMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0Qm90dG9tIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIGJvdHRvbS4gRGVmYXVsdDogMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0TGVmdCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSBsZWZ0LiBEZWZhdWx0OiAwXHJcblx0ICogQHJldHVybnMge2pRdWVyeX1cclxuXHQgKi9cclxuXHQkLmZuLnNjcm9sbFNweSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiAkLnNjcm9sbFNweSgkKHRoaXMpLCBvcHRpb25zKTtcclxuXHR9O1xyXG5cclxufSkoalF1ZXJ5KTtcclxuOyhmdW5jdGlvbiAoJCkge1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBsYWJlbHMgb2YgdGV4dCBmaWVsZHNcclxuICAgIE1hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGlucHV0X3NlbGVjdG9yID0gJ2lucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYSc7XHJcbiAgICAgICQoaW5wdXRfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIGlmICgkKGVsZW1lbnQpLnZhbCgpLmxlbmd0aCA+IDAgfHwgZWxlbWVudC5hdXRvZm9jdXMgfHwgJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkKGVsZW1lbnQpWzBdLnZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnbGFiZWwnKS50b2dnbGVDbGFzcygnYWN0aXZlJywgJChlbGVtZW50KVswXS52YWxpZGl0eS5iYWRJbnB1dCA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUZXh0IGJhc2VkIGlucHV0c1xyXG4gICAgdmFyIGlucHV0X3NlbGVjdG9yID0gJ2lucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYSc7XHJcblxyXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBmb3JtIGF1dG8gY29tcGxldGVcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCAhPT0gMCB8fCAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhbGlkYXRlX2ZpZWxkKCQodGhpcykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBpbnB1dCBlbGVtZW50IGhhcyBiZWVuIHByZS1wb3B1bGF0ZWQgb24gZG9jdW1lbnQgcmVhZHlcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICBNYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIVE1MIERPTSBGT1JNIFJFU0VUIGhhbmRsaW5nXHJcbiAgICAkKGRvY3VtZW50KS5vbigncmVzZXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBmb3JtUmVzZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgaWYgKGZvcm1SZXNldC5pcygnZm9ybScpKSB7XHJcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoaW5wdXRfc2VsZWN0b3IpLnJlbW92ZUNsYXNzKCd2YWxpZCcpLnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XHJcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoaW5wdXRfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykuYXR0cigndmFsdWUnKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IHNlbGVjdFxyXG4gICAgICAgIGZvcm1SZXNldC5maW5kKCdzZWxlY3QuaW5pdGlhbGl6ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciByZXNldF90ZXh0ID0gZm9ybVJlc2V0LmZpbmQoJ29wdGlvbltzZWxlY3RlZF0nKS50ZXh0KCk7XHJcbiAgICAgICAgICBmb3JtUmVzZXQuc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnZhbChyZXNldF90ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGFjdGl2ZSB3aGVuIGVsZW1lbnQgaGFzIGZvY3VzXHJcbiAgICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCwgLnByZWZpeCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdibHVyJywgaW5wdXRfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICRpbnB1dEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIi5wcmVmaXhcIjtcclxuXHJcbiAgICAgIGlmICgkaW5wdXRFbGVtZW50LnZhbCgpLmxlbmd0aCA9PT0gMCAmJiAkaW5wdXRFbGVtZW50WzBdLnZhbGlkaXR5LmJhZElucHV0ICE9PSB0cnVlICYmICRpbnB1dEVsZW1lbnQuYXR0cigncGxhY2Vob2xkZXInKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc2VsZWN0b3IgKz0gXCIsIGxhYmVsXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRpbnB1dEVsZW1lbnQuc2libGluZ3Moc2VsZWN0b3IpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIHZhbGlkYXRlX2ZpZWxkKCRpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LnZhbGlkYXRlX2ZpZWxkID0gZnVuY3Rpb24ob2JqZWN0KSB7XHJcbiAgICAgIHZhciBoYXNMZW5ndGggPSBvYmplY3QuYXR0cignZGF0YS1sZW5ndGgnKSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICB2YXIgbGVuQXR0ciA9IHBhcnNlSW50KG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcclxuICAgICAgdmFyIGxlbiA9IG9iamVjdC52YWwoKS5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LnZhbCgpLmxlbmd0aCA9PT0gMCAmJiBvYmplY3RbMF0udmFsaWRpdHkuYmFkSW5wdXQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygndmFsaWRhdGUnKSkge1xyXG4gICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xyXG4gICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ3ZhbGlkYXRlJykpIHtcclxuICAgICAgICAgIC8vIENoZWNrIGZvciBjaGFyYWN0ZXIgY291bnRlciBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICBpZiAoKG9iamVjdC5pcygnOnZhbGlkJykgJiYgaGFzTGVuZ3RoICYmIChsZW4gPD0gbGVuQXR0cikpIHx8IChvYmplY3QuaXMoJzp2YWxpZCcpICYmICFoYXNMZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xyXG4gICAgICAgICAgICBvYmplY3QuYWRkQ2xhc3MoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICBvYmplY3QuYWRkQ2xhc3MoJ2ludmFsaWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gUmFkaW8gYW5kIENoZWNrYm94IGZvY3VzIGNsYXNzXHJcbiAgICB2YXIgcmFkaW9fY2hlY2tib3ggPSAnaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hdJztcclxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cC5yYWRpbycsIHJhZGlvX2NoZWNrYm94LCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8vIFRBQiwgY2hlY2sgaWYgdGFiYmluZyB0byByYWRpbyBvciBjaGVja2JveC5cclxuICAgICAgaWYgKGUud2hpY2ggPT09IDkpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0YWJiZWQnKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICR0aGlzLm9uZSgnYmx1cicsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0YWJiZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRleHRhcmVhIEF1dG8gUmVzaXplXHJcbiAgICB2YXIgaGlkZGVuRGl2ID0gJCgnLmhpZGRlbmRpdicpLmZpcnN0KCk7XHJcbiAgICBpZiAoIWhpZGRlbkRpdi5sZW5ndGgpIHtcclxuICAgICAgaGlkZGVuRGl2ID0gJCgnPGRpdiBjbGFzcz1cImhpZGRlbmRpdiBjb21tb25cIj48L2Rpdj4nKTtcclxuICAgICAgJCgnYm9keScpLmFwcGVuZChoaWRkZW5EaXYpO1xyXG4gICAgfVxyXG4gICAgdmFyIHRleHRfYXJlYV9zZWxlY3RvciA9ICcubWF0ZXJpYWxpemUtdGV4dGFyZWEnO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRleHRhcmVhQXV0b1Jlc2l6ZSgkdGV4dGFyZWEpIHtcclxuICAgICAgLy8gU2V0IGZvbnQgcHJvcGVydGllcyBvZiBoaWRkZW5EaXZcclxuXHJcbiAgICAgIHZhciBmb250RmFtaWx5ID0gJHRleHRhcmVhLmNzcygnZm9udC1mYW1pbHknKTtcclxuICAgICAgdmFyIGZvbnRTaXplID0gJHRleHRhcmVhLmNzcygnZm9udC1zaXplJyk7XHJcbiAgICAgIHZhciBsaW5lSGVpZ2h0ID0gJHRleHRhcmVhLmNzcygnbGluZS1oZWlnaHQnKTtcclxuXHJcbiAgICAgIGlmIChmb250U2l6ZSkgeyBoaWRkZW5EaXYuY3NzKCdmb250LXNpemUnLCBmb250U2l6ZSk7IH1cclxuICAgICAgaWYgKGZvbnRGYW1pbHkpIHsgaGlkZGVuRGl2LmNzcygnZm9udC1mYW1pbHknLCBmb250RmFtaWx5KTsgfVxyXG4gICAgICBpZiAobGluZUhlaWdodCkgeyBoaWRkZW5EaXYuY3NzKCdsaW5lLWhlaWdodCcsIGxpbmVIZWlnaHQpOyB9XHJcblxyXG4gICAgICBpZiAoJHRleHRhcmVhLmF0dHIoJ3dyYXAnKSA9PT0gXCJvZmZcIikge1xyXG4gICAgICAgIGhpZGRlbkRpdi5jc3MoJ292ZXJmbG93LXdyYXAnLCBcIm5vcm1hbFwiKVxyXG4gICAgICAgICAgICAgICAgIC5jc3MoJ3doaXRlLXNwYWNlJywgXCJwcmVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpZGRlbkRpdi50ZXh0KCR0ZXh0YXJlYS52YWwoKSArICdcXG4nKTtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBoaWRkZW5EaXYuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpO1xyXG4gICAgICBoaWRkZW5EaXYuaHRtbChjb250ZW50KTtcclxuXHJcblxyXG4gICAgICAvLyBXaGVuIHRleHRhcmVhIGlzIGhpZGRlbiwgd2lkdGggZ29lcyBjcmF6eS5cclxuICAgICAgLy8gQXBwcm94aW1hdGUgd2l0aCBoYWxmIG9mIHdpbmRvdyBzaXplXHJcblxyXG4gICAgICBpZiAoJHRleHRhcmVhLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCAkdGV4dGFyZWEud2lkdGgoKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCAkKHdpbmRvdykud2lkdGgoKS8yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlc2l6ZSBpZiB0aGUgbmV3IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gdGhlXHJcbiAgICAgICAqIG9yaWdpbmFsIGhlaWdodCBvZiB0aGUgdGV4dGFyZWFcclxuICAgICAgICovXHJcbiAgICAgIGlmICgkdGV4dGFyZWEuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiKSA8PSBoaWRkZW5EaXYuaGVpZ2h0KCkpIHtcclxuICAgICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCBoaWRkZW5EaXYuaGVpZ2h0KCkpO1xyXG4gICAgICB9IGVsc2UgaWYgKCR0ZXh0YXJlYS52YWwoKS5sZW5ndGggPCAkdGV4dGFyZWEuZGF0YShcInByZXZpb3VzLWxlbmd0aFwiKSkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluIGNhc2UgdGhlIG5ldyBoZWlnaHQgaXMgbGVzcyB0aGFuIG9yaWdpbmFsIGhlaWdodCwgaXRcclxuICAgICAgICAgKiBtZWFucyB0aGUgdGV4dGFyZWEgaGFzIGxlc3MgdGV4dCB0aGFuIGJlZm9yZVxyXG4gICAgICAgICAqIFNvIHdlIHNldCB0aGUgaGVpZ2h0IHRvIHRoZSBvcmlnaW5hbCBvbmVcclxuICAgICAgICAgKi9cclxuICAgICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCAkdGV4dGFyZWEuZGF0YShcIm9yaWdpbmFsLWhlaWdodFwiKSk7XHJcbiAgICAgIH1cclxuICAgICAgJHRleHRhcmVhLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIiwgJHRleHRhcmVhLnZhbCgpLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgJCh0ZXh0X2FyZWFfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHRleHRhcmVhID0gJCh0aGlzKTtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEluc3RlYWQgb2YgcmVzaXppbmcgdGV4dGFyZWEgb24gZG9jdW1lbnQgbG9hZCxcclxuICAgICAgICogc3RvcmUgdGhlIG9yaWdpbmFsIGhlaWdodCBhbmQgdGhlIG9yaWdpbmFsIGxlbmd0aFxyXG4gICAgICAgKi9cclxuICAgICAgJHRleHRhcmVhLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIiwgJHRleHRhcmVhLmhlaWdodCgpKTtcclxuICAgICAgJHRleHRhcmVhLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIiwgJHRleHRhcmVhLnZhbCgpLmxlbmd0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2tleXVwIGtleWRvd24gYXV0b3Jlc2l6ZScsIHRleHRfYXJlYV9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0ZXh0YXJlYUF1dG9SZXNpemUoJCh0aGlzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGaWxlIElucHV0IFBhdGhcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmZpbGUtZmllbGQgaW5wdXRbdHlwZT1cImZpbGVcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBmaWxlX2ZpZWxkID0gJCh0aGlzKS5jbG9zZXN0KCcuZmlsZS1maWVsZCcpO1xyXG4gICAgICB2YXIgcGF0aF9pbnB1dCA9IGZpbGVfZmllbGQuZmluZCgnaW5wdXQuZmlsZS1wYXRoJyk7XHJcbiAgICAgIHZhciBmaWxlcyAgICAgID0gJCh0aGlzKVswXS5maWxlcztcclxuICAgICAgdmFyIGZpbGVfbmFtZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZpbGVfbmFtZXMucHVzaChmaWxlc1tpXS5uYW1lKTtcclxuICAgICAgfVxyXG4gICAgICBwYXRoX2lucHV0LnZhbChmaWxlX25hbWVzLmpvaW4oXCIsIFwiKSk7XHJcbiAgICAgIHBhdGhfaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKlxyXG4gICAgKiAgUmFuZ2UgSW5wdXQgICpcclxuICAgICoqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgdmFyIHJhbmdlX3R5cGUgPSAnaW5wdXRbdHlwZT1yYW5nZV0nO1xyXG4gICAgdmFyIHJhbmdlX21vdXNlZG93biA9IGZhbHNlO1xyXG4gICAgdmFyIGxlZnQ7XHJcblxyXG4gICAgJChyYW5nZV90eXBlKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRodW1iID0gJCgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpO1xyXG4gICAgICAkKHRoaXMpLmFmdGVyKHRodW1iKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzaG93UmFuZ2VCdWJibGUgPSBmdW5jdGlvbih0aHVtYikge1xyXG4gICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUludCh0aHVtYi5wYXJlbnQoKS5jc3MoJ3BhZGRpbmctbGVmdCcpKTtcclxuICAgICAgdmFyIG1hcmdpbkxlZnQgPSAoLTcgKyBwYWRkaW5nTGVmdCkgKyAncHgnO1xyXG4gICAgICB0aHVtYi52ZWxvY2l0eSh7IGhlaWdodDogXCIzMHB4XCIsIHdpZHRoOiBcIjMwcHhcIiwgdG9wOiBcIi0zMHB4XCIsIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnR9LCB7IGR1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNhbGNSYW5nZU9mZnNldCA9IGZ1bmN0aW9uKHJhbmdlKSB7XHJcbiAgICAgIHZhciB3aWR0aCA9IHJhbmdlLndpZHRoKCkgLSAxNTtcclxuICAgICAgdmFyIG1heCA9IHBhcnNlRmxvYXQocmFuZ2UuYXR0cignbWF4JykpO1xyXG4gICAgICB2YXIgbWluID0gcGFyc2VGbG9hdChyYW5nZS5hdHRyKCdtaW4nKSk7XHJcbiAgICAgIHZhciBwZXJjZW50ID0gKHBhcnNlRmxvYXQocmFuZ2UudmFsKCkpIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG4gICAgICByZXR1cm4gcGVyY2VudCAqIHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByYW5nZV93cmFwcGVyID0gJy5yYW5nZS1maWVsZCc7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgcmFuZ2VfdHlwZSwgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLnNpYmxpbmdzKCcudGh1bWInKTtcclxuICAgICAgdGh1bWIuZmluZCgnLnZhbHVlJykuaHRtbCgkKHRoaXMpLnZhbCgpKTtcclxuXHJcbiAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgc2hvd1JhbmdlQnViYmxlKHRodW1iKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoJCh0aGlzKSk7XHJcbiAgICAgIHRodW1iLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWRvd24gdG91Y2hzdGFydCcsIHJhbmdlX3R5cGUsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5zaWJsaW5ncygnLnRodW1iJyk7XHJcblxyXG4gICAgICAvLyBJZiB0aHVtYiBpbmRpY2F0b3IgZG9lcyBub3QgZXhpc3QgeWV0LCBjcmVhdGUgaXRcclxuICAgICAgaWYgKHRodW1iLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgdGh1bWIgPSAkKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+Jyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZnRlcih0aHVtYik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNldCBpbmRpY2F0b3IgdmFsdWVcclxuICAgICAgdGh1bWIuZmluZCgnLnZhbHVlJykuaHRtbCgkKHRoaXMpLnZhbCgpKTtcclxuXHJcbiAgICAgIHJhbmdlX21vdXNlZG93biA9IHRydWU7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgaWYgKCF0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICBzaG93UmFuZ2VCdWJibGUodGh1bWIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZS50eXBlICE9PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoJCh0aGlzKSk7XHJcbiAgICAgICAgdGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIG9mZnNldExlZnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2V1cCB0b3VjaGVuZCcsIHJhbmdlX3dyYXBwZXIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByYW5nZV9tb3VzZWRvd24gPSBmYWxzZTtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignaW5wdXQgbW91c2Vtb3ZlIHRvdWNobW92ZScsIHJhbmdlX3dyYXBwZXIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5jaGlsZHJlbignLnRodW1iJyk7XHJcbiAgICAgIHZhciBsZWZ0O1xyXG4gICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLmZpbmQocmFuZ2VfdHlwZSk7XHJcblxyXG4gICAgICBpZiAocmFuZ2VfbW91c2Vkb3duKSB7XHJcbiAgICAgICAgaWYgKCF0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgIHNob3dSYW5nZUJ1YmJsZSh0aHVtYik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGNhbGNSYW5nZU9mZnNldChpbnB1dCk7XHJcbiAgICAgICAgdGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIG9mZnNldExlZnQpO1xyXG4gICAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwodGh1bWIuc2libGluZ3MocmFuZ2VfdHlwZSkudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VvdXQgdG91Y2hsZWF2ZScsIHJhbmdlX3dyYXBwZXIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIXJhbmdlX21vdXNlZG93bikge1xyXG5cclxuICAgICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLmNoaWxkcmVuKCcudGh1bWInKTtcclxuICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUludCgkKHRoaXMpLmNzcygncGFkZGluZy1sZWZ0JykpO1xyXG4gICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gKDcgKyBwYWRkaW5nTGVmdCkgKyAncHgnO1xyXG5cclxuICAgICAgICBpZiAodGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICB0aHVtYi52ZWxvY2l0eSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCB0b3A6ICcxMHB4JywgbWFyZ2luTGVmdDogbWFyZ2luTGVmdH0sIHsgZHVyYXRpb246IDEwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGh1bWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAqIEF1dG8gY29tcGxldGUgcGx1Z2luICAqXHJcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICQuZm4uYXV0b2NvbXBsZXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgLy8gRGVmYXVsdHNcclxuICAgICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIGxpbWl0OiBJbmZpbml0eSxcclxuICAgICAgICBvbkF1dG9jb21wbGV0ZTogbnVsbCxcclxuICAgICAgICBtaW5MZW5ndGg6IDFcclxuICAgICAgfTtcclxuXHJcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhLFxyXG4gICAgICAgICAgICBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gLTEsXHJcbiAgICAgICAgICAgIG9sZFZhbCxcclxuICAgICAgICAgICAgJGlucHV0RGl2ID0gJGlucHV0LmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpOyAvLyBEaXYgdG8gYXBwZW5kIG9uXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGRhdGEgaXNuJ3QgZW1wdHlcclxuICAgICAgICBpZiAoISQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xyXG4gICAgICAgICAgdmFyICRhdXRvY29tcGxldGUgPSAkKCc8dWwgY2xhc3M9XCJhdXRvY29tcGxldGUtY29udGVudCBkcm9wZG93bi1jb250ZW50XCI+PC91bD4nKTtcclxuICAgICAgICAgIHZhciAkb2xkQXV0b2NvbXBsZXRlO1xyXG5cclxuICAgICAgICAgIC8vIEFwcGVuZCBhdXRvY29tcGxldGUgZWxlbWVudC5cclxuICAgICAgICAgIC8vIFByZXZlbnQgZG91YmxlIHN0cnVjdHVyZSBpbml0LlxyXG4gICAgICAgICAgaWYgKCRpbnB1dERpdi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJG9sZEF1dG9jb21wbGV0ZSA9ICRpbnB1dERpdi5jaGlsZHJlbignLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnQnKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoISRvbGRBdXRvY29tcGxldGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgJGlucHV0RGl2LmFwcGVuZCgkYXV0b2NvbXBsZXRlKTsgLy8gU2V0IHVsIGluIGJvZHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG9sZEF1dG9jb21wbGV0ZSA9ICRpbnB1dC5uZXh0KCcuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudCcpO1xyXG4gICAgICAgICAgICBpZiAoISRvbGRBdXRvY29tcGxldGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgJGlucHV0LmFmdGVyKCRhdXRvY29tcGxldGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoJG9sZEF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZSA9ICRvbGRBdXRvY29tcGxldGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gSGlnaGxpZ2h0IHBhcnRpYWwgbWF0Y2guXHJcbiAgICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gZnVuY3Rpb24oc3RyaW5nLCAkZWwpIHtcclxuICAgICAgICAgICAgdmFyIGltZyA9ICRlbC5maW5kKCdpbWcnKTtcclxuICAgICAgICAgICAgdmFyIG1hdGNoU3RhcnQgPSAkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIlwiICsgc3RyaW5nLnRvTG93ZXJDYXNlKCkgKyBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIHN0cmluZy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlTWF0Y2ggPSAkZWwudGV4dCgpLnNsaWNlKDAsIG1hdGNoU3RhcnQpLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2hUZXh0ID0gJGVsLnRleHQoKS5zbGljZShtYXRjaFN0YXJ0LCBtYXRjaEVuZCArIDEpLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJNYXRjaCA9ICRlbC50ZXh0KCkuc2xpY2UobWF0Y2hFbmQgKyAxKTtcclxuICAgICAgICAgICAgJGVsLmh0bWwoXCI8c3Bhbj5cIiArIGJlZm9yZU1hdGNoICsgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5cIiArIG1hdGNoVGV4dCArIFwiPC9zcGFuPlwiICsgYWZ0ZXJNYXRjaCArIFwiPC9zcGFuPlwiKTtcclxuICAgICAgICAgICAgaWYgKGltZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAkZWwucHJlcGVuZChpbWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIC8vIFJlc2V0IGN1cnJlbnQgZWxlbWVudCBwb3NpdGlvblxyXG4gICAgICAgICAgdmFyIHJlc2V0Q3VycmVudEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFJlbW92ZSBhdXRvY29tcGxldGUgZWxlbWVudHNcclxuICAgICAgICAgIHZhciByZW1vdmVBdXRvY29tcGxldGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5lbXB0eSgpO1xyXG4gICAgICAgICAgICByZXNldEN1cnJlbnRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIG9sZFZhbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgJGlucHV0Lm9mZignYmx1ci5hdXRvY29tcGxldGUnKS5vbignYmx1ci5hdXRvY29tcGxldGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVtb3ZlQXV0b2NvbXBsZXRlKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBQZXJmb3JtIHNlYXJjaFxyXG4gICAgICAgICAgJGlucHV0Lm9mZigna2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZScpLm9uKCdrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgY291bnQuXHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgdmFyIHZhbCA9ICRpbnB1dC52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRG9uJ3QgY2FwdHVyZSBlbnRlciBvciBhcnJvdyBrZXkgdXNhZ2UuXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAxMyB8fFxyXG4gICAgICAgICAgICAgICAgZS53aGljaCA9PT0gMzggfHxcclxuICAgICAgICAgICAgICAgIGUud2hpY2ggPT09IDQwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGlucHV0IGlzbid0IGVtcHR5XHJcbiAgICAgICAgICAgIGlmIChvbGRWYWwgIT09IHZhbCkge1xyXG4gICAgICAgICAgICAgIHJlbW92ZUF1dG9jb21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+PSBvcHRpb25zLm1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IC0xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKSAhPT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnJlYWsgaWYgcGFzdCBsaW1pdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGVPcHRpb24gPSAkKCc8bGk+PC9saT4nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoJzxpbWcgc3JjPVwiJysgZGF0YVtrZXldICsnXCIgY2xhc3M9XCJyaWdodCBjaXJjbGVcIj48c3Bhbj4nKyBrZXkgKyc8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoJzxzcGFuPicrIGtleSArJzwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRhdXRvY29tcGxldGUuYXBwZW5kKGF1dG9jb21wbGV0ZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0KHZhbCwgYXV0b2NvbXBsZXRlT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgb2xkVmFsXHJcbiAgICAgICAgICAgIG9sZFZhbCA9IHZhbDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRpbnB1dC5vZmYoJ2tleWRvd24uYXV0b2NvbXBsZXRlJykub24oJ2tleWRvd24uYXV0b2NvbXBsZXRlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8gQXJyb3cga2V5cyBhbmQgZW50ZXIga2V5IHVzYWdlXHJcbiAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZS53aGljaCxcclxuICAgICAgICAgICAgICAgIGxpRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIG51bUl0ZW1zID0gJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignbGknKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAkYWN0aXZlID0gJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignLmFjdGl2ZScpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZWxlY3QgZWxlbWVudCBvbiBFbnRlclxyXG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMTMgJiYgYWN0aXZlSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgIGxpRWxlbWVudCA9ICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJ2xpJykuZXEoYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgICAgICAgIGlmIChsaUVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsaUVsZW1lbnQudHJpZ2dlcignbW91c2Vkb3duLmF1dG9jb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENhcHR1cmUgdXAgYW5kIGRvd24ga2V5XHJcbiAgICAgICAgICAgIGlmICgga2V5Q29kZSA9PT0gMzggfHwga2V5Q29kZSA9PT0gNDAgKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMzggJiZcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleC0tO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDQwICYmXHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4IDwgKG51bUl0ZW1zIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICBpZiAoYWN0aXZlSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignbGknKS5lcShhY3RpdmVJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gU2V0IGlucHV0IHZhbHVlXHJcbiAgICAgICAgICAkYXV0b2NvbXBsZXRlLm9uKCdtb3VzZWRvd24uYXV0b2NvbXBsZXRlIHRvdWNoc3RhcnQuYXV0b2NvbXBsZXRlJywgJ2xpJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykudGV4dCgpLnRyaW0oKTtcclxuICAgICAgICAgICAgJGlucHV0LnZhbCh0ZXh0KTtcclxuICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICByZW1vdmVBdXRvY29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBvbkF1dG9jb21wbGV0ZSBjYWxsYmFjay5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uQXV0b2NvbXBsZXRlKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9ucy5vbkF1dG9jb21wbGV0ZS5jYWxsKHRoaXMsIHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgfSk7IC8vIEVuZCBvZiAkKGRvY3VtZW50KS5yZWFkeVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKlxyXG4gICAqICBTZWxlY3QgUGx1Z2luICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKi9cclxuICAkLmZuLm1hdGVyaWFsX3NlbGVjdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciAkc2VsZWN0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIGlmICgkc2VsZWN0Lmhhc0NsYXNzKCdicm93c2VyLWRlZmF1bHQnKSkge1xyXG4gICAgICAgIHJldHVybjsgLy8gQ29udGludWUgdG8gbmV4dCAocmV0dXJuIGZhbHNlIGJyZWFrcyBvdXQgb2YgZW50aXJlIGxvb3ApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBtdWx0aXBsZSA9ICRzZWxlY3QuYXR0cignbXVsdGlwbGUnKSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIGxhc3RJRCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0LWlkJyk7IC8vIFRlYXIgZG93biBzdHJ1Y3R1cmUgaWYgU2VsZWN0IG5lZWRzIHRvIGJlIHJlYnVpbHRcclxuXHJcbiAgICAgIGlmIChsYXN0SUQpIHtcclxuICAgICAgICAkc2VsZWN0LnBhcmVudCgpLmZpbmQoJ3NwYW4uY2FyZXQnKS5yZW1vdmUoKTtcclxuICAgICAgICAkc2VsZWN0LnBhcmVudCgpLmZpbmQoJ2lucHV0JykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICRzZWxlY3QudW53cmFwKCk7XHJcbiAgICAgICAgJCgndWwjc2VsZWN0LW9wdGlvbnMtJytsYXN0SUQpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiBkZXN0cm95aW5nIHRoZSBzZWxlY3QsIHJlbW92ZSB0aGUgc2VsZWxjdC1pZCBhbmQgcmVzZXQgaXQgdG8gaXQncyB1bmluaXRpYWxpemVkIHN0YXRlLlxyXG4gICAgICBpZihjYWxsYmFjayA9PT0gJ2Rlc3Ryb3knKSB7XHJcbiAgICAgICAgJHNlbGVjdC5kYXRhKCdzZWxlY3QtaWQnLCBudWxsKS5yZW1vdmVDbGFzcygnaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB1bmlxdWVJRCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcclxuICAgICAgJHNlbGVjdC5kYXRhKCdzZWxlY3QtaWQnLCB1bmlxdWVJRCk7XHJcbiAgICAgIHZhciB3cmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+PC9kaXY+Jyk7XHJcbiAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJHNlbGVjdC5hdHRyKCdjbGFzcycpKTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSAkKCc8dWwgaWQ9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKydcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcgKyAobXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duJyA6ICcnKSArICdcIj48L3VsPicpLFxyXG4gICAgICAgICAgc2VsZWN0Q2hpbGRyZW4gPSAkc2VsZWN0LmNoaWxkcmVuKCdvcHRpb24sIG9wdGdyb3VwJyksXHJcbiAgICAgICAgICB2YWx1ZXNTZWxlY3RlZCA9IFtdLFxyXG4gICAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgICB2YXIgbGFiZWwgPSAkc2VsZWN0LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmh0bWwoKSB8fCAkc2VsZWN0LmZpbmQoJ29wdGlvbjpmaXJzdCcpLmh0bWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgLy8gRnVuY3Rpb24gdGhhdCByZW5kZXJzIGFuZCBhcHBlbmRzIHRoZSBvcHRpb24gdGFraW5nIGludG9cclxuICAgICAgLy8gYWNjb3VudCB0eXBlIGFuZCBwb3NzaWJsZSBpbWFnZSBpY29uLlxyXG4gICAgICB2YXIgYXBwZW5kT3B0aW9uV2l0aEljb24gPSBmdW5jdGlvbihzZWxlY3QsIG9wdGlvbiwgdHlwZSkge1xyXG4gICAgICAgIC8vIEFkZCBkaXNhYmxlZCBhdHRyIGlmIGRpc2FibGVkXHJcbiAgICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSAob3B0aW9uLmlzKCc6ZGlzYWJsZWQnKSkgPyAnZGlzYWJsZWQgJyA6ICcnO1xyXG4gICAgICAgIHZhciBvcHRncm91cENsYXNzID0gKHR5cGUgPT09ICdvcHRncm91cC1vcHRpb24nKSA/ICdvcHRncm91cC1vcHRpb24gJyA6ICcnO1xyXG4gICAgICAgIHZhciBtdWx0aXBsZUNoZWNrYm94ID0gbXVsdGlwbGUgPyAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiJyArIGRpc2FibGVkQ2xhc3MgKyAnLz48bGFiZWw+PC9sYWJlbD4nIDogJyc7XHJcblxyXG4gICAgICAgIC8vIGFkZCBpY29uc1xyXG4gICAgICAgIHZhciBpY29uX3VybCA9IG9wdGlvbi5kYXRhKCdpY29uJyk7XHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBvcHRpb24uYXR0cignY2xhc3MnKTtcclxuICAgICAgICBpZiAoISFpY29uX3VybCkge1xyXG4gICAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgICBpZiAoISFjbGFzc2VzKSBjbGFzc1N0cmluZyA9ICcgY2xhc3M9XCInICsgY2xhc3NlcyArICdcIic7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIG11bHRpcGxlIHR5cGUuXHJcbiAgICAgICAgICBvcHRpb25zLmFwcGVuZCgkKCc8bGkgY2xhc3M9XCInICsgZGlzYWJsZWRDbGFzcyArIG9wdGdyb3VwQ2xhc3MgKyAnXCI+PGltZyBhbHQ9XCJcIiBzcmM9XCInICsgaWNvbl91cmwgKyAnXCInICsgY2xhc3NTdHJpbmcgKyAnPjxzcGFuPicgKyBtdWx0aXBsZUNoZWNrYm94ICsgb3B0aW9uLmh0bWwoKSArICc8L3NwYW4+PC9saT4nKSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBtdWx0aXBsZSB0eXBlLlxyXG4gICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIicgKyBkaXNhYmxlZENsYXNzICsgb3B0Z3JvdXBDbGFzcyArICdcIj48c3Bhbj4nICsgbXVsdGlwbGVDaGVja2JveCArIG9wdGlvbi5odG1sKCkgKyAnPC9zcGFuPjwvbGk+JykpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLyogQ3JlYXRlIGRyb3Bkb3duIHN0cnVjdHVyZS4gKi9cclxuICAgICAgaWYgKHNlbGVjdENoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGVjdENoaWxkcmVuLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgLy8gRGlyZWN0IGRlc2NlbmRhbnQgb3B0aW9uLlxyXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpLCAnbXVsdGlwbGUnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYXBwZW5kT3B0aW9uV2l0aEljb24oJHNlbGVjdCwgJCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5pcygnb3B0Z3JvdXAnKSkge1xyXG4gICAgICAgICAgICAvLyBPcHRncm91cC5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwib3B0Z3JvdXBcIj48c3Bhbj4nICsgJCh0aGlzKS5hdHRyKCdsYWJlbCcpICsgJzwvc3Bhbj48L2xpPicpKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpLCAnb3B0Z3JvdXAtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvcHRpb25zLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIC8vIENoZWNrIGlmIG9wdGlvbiBlbGVtZW50IGlzIGRpc2FibGVkXHJcbiAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgISQodGhpcykuaGFzQ2xhc3MoJ29wdGdyb3VwJykpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmdW5jdGlvbihpLCB2KSB7IHJldHVybiAhdjsgfSk7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0b2dnbGVFbnRyeUZyb21BcnJheSh2YWx1ZXNTZWxlY3RlZCwgaSwgJHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9wdGlvbnMuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC52YWwoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCAkKHRoaXMpKTtcclxuICAgICAgICAgICAgJHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShpKS5wcm9wKCdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciBvbmNoYW5nZSgpIGV2ZW50XHJcbiAgICAgICAgICAgICRzZWxlY3QudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gV3JhcCBFbGVtZW50c1xyXG4gICAgICAkc2VsZWN0LndyYXAod3JhcHBlcik7XHJcbiAgICAgIC8vIEFkZCBTZWxlY3QgRGlzcGxheSBFbGVtZW50XHJcbiAgICAgIHZhciBkcm9wZG93bkljb24gPSAkKCc8c3BhbiBjbGFzcz1cImNhcmV0XCI+JiM5NjYwOzwvc3Bhbj4nKTtcclxuICAgICAgaWYgKCRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpKVxyXG4gICAgICAgIGRyb3Bkb3duSWNvbi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgIC8vIGVzY2FwZSBkb3VibGUgcXVvdGVzXHJcbiAgICAgIHZhciBzYW5pdGl6ZWRMYWJlbEh0bWwgPSBsYWJlbC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XHJcblxyXG4gICAgICB2YXIgJG5ld1NlbGVjdCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duXCIgcmVhZG9ubHk9XCJ0cnVlXCIgJyArICgoJHNlbGVjdC5pcygnOmRpc2FibGVkJykpID8gJ2Rpc2FibGVkJyA6ICcnKSArICcgZGF0YS1hY3RpdmF0ZXM9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKydcIiB2YWx1ZT1cIicrIHNhbml0aXplZExhYmVsSHRtbCArJ1wiLz4nKTtcclxuICAgICAgJHNlbGVjdC5iZWZvcmUoJG5ld1NlbGVjdCk7XHJcbiAgICAgICRuZXdTZWxlY3QuYmVmb3JlKGRyb3Bkb3duSWNvbik7XHJcblxyXG4gICAgICAkbmV3U2VsZWN0LmFmdGVyKG9wdGlvbnMpO1xyXG4gICAgICAvLyBDaGVjayBpZiBzZWN0aW9uIGVsZW1lbnQgaXMgZGlzYWJsZWRcclxuICAgICAgaWYgKCEkc2VsZWN0LmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICRuZXdTZWxlY3QuZHJvcGRvd24oeydob3Zlcic6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENvcHkgdGFiaW5kZXhcclxuICAgICAgaWYgKCRzZWxlY3QuYXR0cigndGFiaW5kZXgnKSkge1xyXG4gICAgICAgICQoJG5ld1NlbGVjdFswXSkuYXR0cigndGFiaW5kZXgnLCAkc2VsZWN0LmF0dHIoJ3RhYmluZGV4JykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2VsZWN0LmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xyXG5cclxuICAgICAgJG5ld1NlbGVjdC5vbih7XHJcbiAgICAgICAgJ2ZvY3VzJzogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICBpZiAoJCgndWwuc2VsZWN0LWRyb3Bkb3duJykubm90KG9wdGlvbnNbMF0pLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICQoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnRyaWdnZXIoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJywgWydmb2N1cyddKTtcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgaWYgKG11bHRpcGxlICYmIGxhYmVsLmluZGV4T2YoJywnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zcGxpdCgnLCcpWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpID09PSBsYWJlbC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgc2VsZWN0ZWRPcHRpb24sIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJG5ld1NlbGVjdC5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghbXVsdGlwbGUpIHtcclxuICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG9wdGlvbnMuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb3B0aW9uc0hvdmVyID0gdHJ1ZTtcclxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9wdGlvbnNIb3ZlciA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQod2luZG93KS5vbih7XHJcbiAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgbXVsdGlwbGUgJiYgKG9wdGlvbnNIb3ZlciB8fCAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBZGQgaW5pdGlhbCBtdWx0aXBsZSBzZWxlY3Rpb25zLlxyXG4gICAgICBpZiAobXVsdGlwbGUpIHtcclxuICAgICAgICAkc2VsZWN0LmZpbmQoXCJvcHRpb246c2VsZWN0ZWQ6bm90KDpkaXNhYmxlZClcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcblxyXG4gICAgICAgICAgdG9nZ2xlRW50cnlGcm9tQXJyYXkodmFsdWVzU2VsZWN0ZWQsIGluZGV4LCAkc2VsZWN0KTtcclxuICAgICAgICAgIG9wdGlvbnMuZmluZChcImxpXCIpLmVxKGluZGV4KS5maW5kKFwiOmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTWFrZSBvcHRpb24gYXMgc2VsZWN0ZWQgYW5kIHNjcm9sbCB0byBzZWxlY3RlZCBwb3NpdGlvblxyXG4gICAgICAgKiBAcGFyYW0ge2pRdWVyeX0gY29sbGVjdGlvbiAgU2VsZWN0IG9wdGlvbnMgalF1ZXJ5IGVsZW1lbnRcclxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBuZXdPcHRpb24gIGVsZW1lbnQgb2YgdGhlIG5ldyBvcHRpb25cclxuICAgICAgICogQHBhcmFtIHtCb29sZWFufSBmaXJzdEFjdGl2YXRpb24gIElmIG9uIGZpcnN0IGFjdGl2YXRpb24gb2Ygc2VsZWN0XHJcbiAgICAgICAqL1xyXG4gICAgICB2YXIgYWN0aXZhdGVPcHRpb24gPSBmdW5jdGlvbihjb2xsZWN0aW9uLCBuZXdPcHRpb24sIGZpcnN0QWN0aXZhdGlvbikge1xyXG4gICAgICAgIGlmIChuZXdPcHRpb24pIHtcclxuICAgICAgICAgIGNvbGxlY3Rpb24uZmluZCgnbGkuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIHZhciBvcHRpb24gPSAkKG5ld09wdGlvbik7XHJcbiAgICAgICAgICBvcHRpb24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICBpZiAoIW11bHRpcGxlIHx8ICEhZmlyc3RBY3RpdmF0aW9uKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsVG8ob3B0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBBbGxvdyB1c2VyIHRvIHNlYXJjaCBieSB0eXBpbmdcclxuICAgICAgLy8gdGhpcyBhcnJheSBpcyBjbGVhcmVkIGFmdGVyIDEgc2Vjb25kXHJcbiAgICAgIHZhciBmaWx0ZXJRdWVyeSA9IFtdLFxyXG4gICAgICAgICAgb25LZXlEb3duID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIC8vIFRBQiAtIHN3aXRjaCB0byBhbm90aGVyIGlucHV0XHJcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT0gOSl7XHJcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQVJST1cgRE9XTiBXSEVOIFNFTEVDVCBJUyBDTE9TRUQgLSBvcGVuIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT0gNDAgJiYgIW9wdGlvbnMuaXMoJzp2aXNpYmxlJykpe1xyXG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignb3BlbicpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRU5URVIgV0hFTiBTRUxFQ1QgSVMgQ0xPU0VEIC0gc3VibWl0IGZvcm1cclxuICAgICAgICAgICAgaWYoZS53aGljaCA9PSAxMyAmJiAhb3B0aW9ucy5pcygnOnZpc2libGUnKSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDQVNFIFdIRU4gVVNFUiBUWVBFIExFVFRFUlNcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgIG5vbkxldHRlcnMgPSBbOSwxMywyNywzOCw0MF07XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgJiYgKG5vbkxldHRlcnMuaW5kZXhPZihlLndoaWNoKSA9PT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgZmlsdGVyUXVlcnkucHVzaChsZXR0ZXIpO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gZmlsdGVyUXVlcnkuam9pbignJyksXHJcbiAgICAgICAgICAgICAgICAgIG5ld09wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGknKS5maWx0ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJpbmcpID09PSAwO1xyXG4gICAgICAgICAgICAgICAgICB9KVswXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKG5ld09wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVOVEVSIC0gc2VsZWN0IG9wdGlvbiBhbmQgY2xvc2Ugd2hlbiBzZWxlY3Qgb3B0aW9ucyBhcmUgb3BlbmVkXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGFjdGl2ZU9wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQ6bm90KC5kaXNhYmxlZCknKVswXTtcclxuICAgICAgICAgICAgICBpZihhY3RpdmVPcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgJChhY3RpdmVPcHRpb24pLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFSUk9XIERPV04gLSBtb3ZlIHRvIG5leHQgbm90IGRpc2FibGVkIG9wdGlvblxyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSA0MCkge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykubmV4dCgnbGk6bm90KC5kaXNhYmxlZCknKVswXTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaTpub3QoLmRpc2FibGVkKScpWzBdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBFU0MgLSBjbG9zZSBvcHRpb25zXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDI3KSB7XHJcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBUlJPVyBVUCAtIG1vdmUgdG8gcHJldmlvdXMgbm90IGRpc2FibGVkIG9wdGlvblxyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAzOCkge1xyXG4gICAgICAgICAgICAgIG5ld09wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5wcmV2KCdsaTpub3QoLmRpc2FibGVkKScpWzBdO1xyXG4gICAgICAgICAgICAgIGlmKG5ld09wdGlvbilcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsIG5ld09wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEF1dG9tYXRpY2FseSBjbGVhbiBmaWx0ZXIgcXVlcnkgc28gdXNlciBjYW4gc2VhcmNoIGFnYWluIGJ5IHN0YXJ0aW5nIGxldHRlcnNcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBmaWx0ZXJRdWVyeSA9IFtdOyB9LCAxMDAwKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAkbmV3U2VsZWN0Lm9uKCdrZXlkb3duJywgb25LZXlEb3duKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUVudHJ5RnJvbUFycmF5KGVudHJpZXNBcnJheSwgZW50cnlJbmRleCwgc2VsZWN0KSB7XHJcbiAgICAgIHZhciBpbmRleCA9IGVudHJpZXNBcnJheS5pbmRleE9mKGVudHJ5SW5kZXgpLFxyXG4gICAgICAgICAgbm90QWRkZWQgPSBpbmRleCA9PT0gLTE7XHJcblxyXG4gICAgICBpZiAobm90QWRkZWQpIHtcclxuICAgICAgICBlbnRyaWVzQXJyYXkucHVzaChlbnRyeUluZGV4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyaWVzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0LnNpYmxpbmdzKCd1bC5kcm9wZG93bi1jb250ZW50JykuZmluZCgnbGk6bm90KC5vcHRncm91cCknKS5lcShlbnRyeUluZGV4KS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAvLyB1c2Ugbm90QWRkZWQgaW5zdGVhZCBvZiB0cnVlICh0byBkZXRlY3QgaWYgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZCBvciBub3QpXHJcbiAgICAgIHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShlbnRyeUluZGV4KS5wcm9wKCdzZWxlY3RlZCcsIG5vdEFkZGVkKTtcclxuICAgICAgc2V0VmFsdWVUb0lucHV0KGVudHJpZXNBcnJheSwgc2VsZWN0KTtcclxuXHJcbiAgICAgIHJldHVybiBub3RBZGRlZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZVRvSW5wdXQoZW50cmllc0FycmF5LCBzZWxlY3QpIHtcclxuICAgICAgdmFyIHZhbHVlID0gJyc7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMCwgY291bnQgPSBlbnRyaWVzQXJyYXkubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGVudHJpZXNBcnJheVtpXSkudGV4dCgpO1xyXG5cclxuICAgICAgICBpID09PSAwID8gdmFsdWUgKz0gdGV4dCA6IHZhbHVlICs9ICcsICcgKyB0ZXh0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgdmFsdWUgPSBzZWxlY3QuZmluZCgnb3B0aW9uOmRpc2FibGVkJykuZXEoMCkudGV4dCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3Quc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnZhbCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0oIGpRdWVyeSApKTtcclxuOyhmdW5jdGlvbiAoJCkge1xyXG5cclxuICB2YXIgbWV0aG9kcyA9IHtcclxuXHJcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgaW5kaWNhdG9yczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICB0cmFuc2l0aW9uOiA1MDAsXHJcbiAgICAgICAgaW50ZXJ2YWw6IDYwMDBcclxuICAgICAgfTtcclxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vIEZvciBlYWNoIHNsaWRlciwgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mXHJcbiAgICAgICAgLy8gd2hpY2ggc2xpZGUgaXMgYWN0aXZlIGFuZCBpdHMgYXNzb2NpYXRlZCBjb250ZW50XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgJHNsaWRlciA9ICR0aGlzLmZpbmQoJ3VsLnNsaWRlcycpLmZpcnN0KCk7XHJcbiAgICAgICAgdmFyICRzbGlkZXMgPSAkc2xpZGVyLmZpbmQoJz4gbGknKTtcclxuICAgICAgICB2YXIgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgdmFyICRhY3RpdmUsICRpbmRpY2F0b3JzLCAkaW50ZXJ2YWw7XHJcbiAgICAgICAgaWYgKCRhY3RpdmVfaW5kZXggIT0gLTEpIHsgJGFjdGl2ZSA9ICRzbGlkZXMuZXEoJGFjdGl2ZV9pbmRleCk7IH1cclxuXHJcbiAgICAgICAgLy8gVHJhbnNpdGlvbnMgdGhlIGNhcHRpb24gZGVwZW5kaW5nIG9uIGFsaWdubWVudFxyXG4gICAgICAgIGZ1bmN0aW9uIGNhcHRpb25UcmFuc2l0aW9uKGNhcHRpb24sIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICBpZiAoY2FwdGlvbi5oYXNDbGFzcyhcImNlbnRlci1hbGlnblwiKSkge1xyXG4gICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiAtMTAwfSwge2R1cmF0aW9uOiBkdXJhdGlvbiwgcXVldWU6IGZhbHNlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChjYXB0aW9uLmhhc0NsYXNzKFwicmlnaHQtYWxpZ25cIikpIHtcclxuICAgICAgICAgICAgY2FwdGlvbi52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogMTAwfSwge2R1cmF0aW9uOiBkdXJhdGlvbiwgcXVldWU6IGZhbHNlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChjYXB0aW9uLmhhc0NsYXNzKFwibGVmdC1hbGlnblwiKSkge1xyXG4gICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAtMTAwfSwge2R1cmF0aW9uOiBkdXJhdGlvbiwgcXVldWU6IGZhbHNlfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgdHJhbnNpdGlvbiB0aGUgc2xpZGUgdG8gYW55IGluZGV4IG9mIHRoZSBuZXh0IHNsaWRlXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVRvU2xpZGUoaW5kZXgpIHtcclxuICAgICAgICAgIC8vIFdyYXAgYXJvdW5kIGluZGljZXMuXHJcbiAgICAgICAgICBpZiAoaW5kZXggPj0gJHNsaWRlcy5sZW5ndGgpIGluZGV4ID0gMDtcclxuICAgICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMCkgaW5kZXggPSAkc2xpZGVzLmxlbmd0aCAtMTtcclxuXHJcbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcclxuXHJcbiAgICAgICAgICAvLyBPbmx5IGRvIGlmIGluZGV4IGNoYW5nZXNcclxuICAgICAgICAgIGlmICgkYWN0aXZlX2luZGV4ICE9IGluZGV4KSB7XHJcbiAgICAgICAgICAgICRhY3RpdmUgPSAkc2xpZGVzLmVxKCRhY3RpdmVfaW5kZXgpO1xyXG4gICAgICAgICAgICAkY2FwdGlvbiA9ICRhY3RpdmUuZmluZCgnLmNhcHRpb24nKTtcclxuXHJcbiAgICAgICAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkYWN0aXZlLnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlcy5ub3QoJy5hY3RpdmUnKS52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMH0sIHtkdXJhdGlvbjogMCwgcXVldWU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSk7XHJcbiAgICAgICAgICAgIGNhcHRpb25UcmFuc2l0aW9uKCRjYXB0aW9uLCBvcHRpb25zLnRyYW5zaXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcclxuICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5lcSgkYWN0aXZlX2luZGV4KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLmZpbmQoJy5jYXB0aW9uJykudmVsb2NpdHkoe29wYWNpdHk6IDEsIHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgZGVsYXk6IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICAgJHNsaWRlcy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcclxuICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgaGVpZ2h0IG9mIHNsaWRlclxyXG4gICAgICAgIC8vIElmIGZ1bGxzY3JlZW4sIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAoISR0aGlzLmhhc0NsYXNzKCdmdWxsc2NyZWVuJykpIHtcclxuICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcclxuICAgICAgICAgICAgLy8gQWRkIGhlaWdodCBpZiBpbmRpY2F0b3JzIGFyZSBwcmVzZW50XHJcbiAgICAgICAgICAgICR0aGlzLmhlaWdodChvcHRpb25zLmhlaWdodCArIDQwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkdGhpcy5oZWlnaHQob3B0aW9ucy5oZWlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNsaWRlci5oZWlnaHQob3B0aW9ucy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFNldCBpbml0aWFsIHBvc2l0aW9ucyBvZiBjYXB0aW9uc1xyXG4gICAgICAgICRzbGlkZXMuZmluZCgnLmNhcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNhcHRpb25UcmFuc2l0aW9uKCQodGhpcyksIDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBNb3ZlIGltZyBzcmMgaW50byBiYWNrZ3JvdW5kLWltYWdlXHJcbiAgICAgICAgJHNsaWRlcy5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBwbGFjZWhvbGRlckJhc2U2NCA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQkFQLy8vd0FBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09JztcclxuICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3NyYycpICE9PSBwbGFjZWhvbGRlckJhc2U2NCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArICQodGhpcykuYXR0cignc3JjJykgKyAnKScgKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCBwbGFjZWhvbGRlckJhc2U2NCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGR5bmFtaWNhbGx5IGFkZCBpbmRpY2F0b3JzXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xyXG4gICAgICAgICAgJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcclxuICAgICAgICAgICRzbGlkZXMuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XHJcbiAgICAgICAgICAgIHZhciAkaW5kaWNhdG9yID0gJCgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIGNsaWNrcyBvbiBpbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICRpbmRpY2F0b3IuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJHNsaWRlci5wYXJlbnQoKTtcclxuICAgICAgICAgICAgICB2YXIgY3Vycl9pbmRleCA9ICRwYXJlbnQuZmluZCgkKHRoaXMpKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgIG1vdmVUb1NsaWRlKGN1cnJfaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAvLyByZXNldCBpbnRlcnZhbFxyXG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcclxuICAgICAgICAgICAgICAkaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJHNsaWRlcy5sZW5ndGggPT0gJGFjdGl2ZV9pbmRleCArIDEpICRhY3RpdmVfaW5kZXggPSAwOyAvLyBsb29wIHRvIHN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgIGVsc2UgJGFjdGl2ZV9pbmRleCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy50cmFuc2l0aW9uICsgb3B0aW9ucy5pbnRlcnZhbFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkaW5kaWNhdG9ycy5hcHBlbmQoJGluZGljYXRvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICR0aGlzLmFwcGVuZCgkaW5kaWNhdG9ycyk7XHJcbiAgICAgICAgICAkaW5kaWNhdG9ycyA9ICR0aGlzLmZpbmQoJ3VsLmluZGljYXRvcnMnKS5maW5kKCdsaS5pbmRpY2F0b3ItaXRlbScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRhY3RpdmUpIHtcclxuICAgICAgICAgICRhY3RpdmUuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICRzbGlkZXMuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJykudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuXHJcbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gMDtcclxuICAgICAgICAgICRhY3RpdmUgPSAkc2xpZGVzLmVxKCRhY3RpdmVfaW5kZXgpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXHJcbiAgICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XHJcbiAgICAgICAgICAgICRpbmRpY2F0b3JzLmVxKCRhY3RpdmVfaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBoZWlnaHQgdG8gY3VycmVudCBzbGlkZVxyXG4gICAgICAgICRhY3RpdmUuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRhY3RpdmUuZmluZCgnLmNhcHRpb24nKS52ZWxvY2l0eSh7b3BhY2l0eTogMSwgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMH0sIHtkdXJhdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhdXRvIHNjcm9sbFxyXG4gICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxyXG4gICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEhhbW1lckpTLCBTd2lwZSBuYXZpZ2F0aW9uXHJcblxyXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50XHJcbiAgICAgICAgdmFyIHBhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc3dpcGVMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHN3aXBlUmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGFtbWVyKHtcclxuICAgICAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzZXQgaW50ZXJ2YWxcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmRlbHRhWDtcclxuICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XHJcbiAgICAgICAgICAgIHZhciB2ZWxvY2l0eVkgPSBlLmdlc3R1cmUudmVsb2NpdHlZO1xyXG5cclxuICAgICAgICAgICAgJGN1cnJfc2xpZGUgPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZlbG9jaXR5WCkgPiBNYXRoLmFicyh2ZWxvY2l0eVkpKSB7XHJcbiAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiB4XHJcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN3aXBlIExlZnRcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gNCAmJiAoeCA+ICgkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPCAtMC42NSkpIHtcclxuICAgICAgICAgICAgICBzd2lwZVJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTd2lwZSBSaWdodFxyXG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IDIgJiYgKHggPCAoLTEgKiAkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPiAwLjY1KSkge1xyXG4gICAgICAgICAgICAgIHN3aXBlTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1ha2UgU2xpZGUgQmVoaW5kIGFjdGl2ZSBzbGlkZSB2aXNpYmxlXHJcbiAgICAgICAgICAgIHZhciBuZXh0X3NsaWRlO1xyXG4gICAgICAgICAgICBpZiAoc3dpcGVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRjdXJyX3NsaWRlLm5leHQoKTtcclxuICAgICAgICAgICAgICBpZiAobmV4dF9zbGlkZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkc2xpZGVzLmZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG5leHRfc2xpZGUudmVsb2NpdHkoeyBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzd2lwZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRjdXJyX3NsaWRlLnByZXYoKTtcclxuICAgICAgICAgICAgICBpZiAobmV4dF9zbGlkZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkc2xpZGVzLmxhc3QoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbmV4dF9zbGlkZS52ZWxvY2l0eSh7IG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KS5iaW5kKCdwYW5lbmQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHtcclxuXHJcbiAgICAgICAgICAgICRjdXJyX3NsaWRlID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3Vycl9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXN3aXBlUmlnaHQgJiYgIXN3aXBlTGVmdCB8fCAkc2xpZGVzLmxlbmd0aCA8PTEpIHtcclxuICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gb3JpZ2luYWwgc3BvdFxyXG4gICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogMFxyXG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzd2lwZUxlZnQpIHtcclxuICAgICAgICAgICAgICBtb3ZlVG9TbGlkZShjdXJyX2luZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6IC0xICogJHRoaXMuaW5uZXJXaWR0aCgpIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAwfSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzd2lwZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoY3Vycl9pbmRleCAtIDEpO1xyXG4gICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOiAkdGhpcy5pbm5lcldpZHRoKCkgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDB9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzd2lwZVJpZ2h0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXN0YXJ0IGludGVydmFsXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcclxuICAgICAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzbGlkZXMubGVuZ3RoID09ICRhY3RpdmVfaW5kZXggKyAxKSAkYWN0aXZlX2luZGV4ID0gMDsgLy8gbG9vcCB0byBzdGFydFxyXG4gICAgICAgICAgICAgICAgZWxzZSAkYWN0aXZlX2luZGV4ICs9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgIH0sIG9wdGlvbnMudHJhbnNpdGlvbiArIG9wdGlvbnMuaW50ZXJ2YWxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHRoaXMub24oJ3NsaWRlclBhdXNlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR0aGlzLm9uKCdzbGlkZXJTdGFydCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgICAgICAgaWYgKCRzbGlkZXMubGVuZ3RoID09ICRhY3RpdmVfaW5kZXggKyAxKSAkYWN0aXZlX2luZGV4ID0gMDsgLy8gbG9vcCB0byBzdGFydFxyXG4gICAgICAgICAgICAgIGVsc2UgJGFjdGl2ZV9pbmRleCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4KTtcclxuXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMudHJhbnNpdGlvbiArIG9wdGlvbnMuaW50ZXJ2YWxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR0aGlzLm9uKCdzbGlkZXJOZXh0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcclxuICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggKyAxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHRoaXMub24oJ3NsaWRlclByZXYnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCAtIDEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgcGF1c2UgOiBmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJQYXVzZScpO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0IDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyU3RhcnQnKTtcclxuICAgIH0sXHJcbiAgICBuZXh0IDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyTmV4dCcpO1xyXG4gICAgfSxcclxuICAgIHByZXYgOiBmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJQcmV2Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gICQuZm4uc2xpZGVyID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XHJcbiAgICBpZiAoIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSApIHtcclxuICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xyXG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XHJcbiAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcclxuICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudG9vbHRpcCcgKTtcclxuICAgIH1cclxuICB9OyAvLyBQbHVnaW4gZW5kXHJcbn0oIGpRdWVyeSApKTtcclxuOyhmdW5jdGlvbiAoJCkge1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5jYXJkJywgJy5jYXJkJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKCQodGhpcykuZmluZCgnPiAuY2FyZC1yZXZlYWwnKS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoJCgnLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlJykpIHx8ICQoZS50YXJnZXQpLmlzKCQoJy5jYXJkLXJldmVhbCAuY2FyZC10aXRsZSBpJykpKSB7XHJcbiAgICAgICAgICAvLyBNYWtlIFJldmVhbCBhbmltYXRlIGRvd24gYW5kIGRpc3BsYXkgbm9uZVxyXG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcuY2FyZC1yZXZlYWwnKS52ZWxvY2l0eShcclxuICAgICAgICAgICAge3RyYW5zbGF0ZVk6IDB9LCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIyNSxcclxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyAkKHRoaXMpLmNzcyh7IGRpc3BsYXk6ICdub25lJ30pOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmlzKCQoJy5jYXJkIC5hY3RpdmF0b3InKSkgfHxcclxuICAgICAgICAgICAgICAgICAkKGUudGFyZ2V0KS5pcygkKCcuY2FyZCAuYWN0aXZhdG9yIGknKSkgKSB7XHJcbiAgICAgICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2FyZCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5jYXJkLXJldmVhbCcpLmNzcyh7IGRpc3BsYXk6ICdibG9jayd9KS52ZWxvY2l0eShcInN0b3BcIiwgZmFsc2UpLnZlbG9jaXR5KHt0cmFuc2xhdGVZOiAnLTEwMCUnfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCd9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxufSggalF1ZXJ5ICkpOzsoZnVuY3Rpb24gKCQpIHtcclxuICB2YXIgbWF0ZXJpYWxDaGlwc0RlZmF1bHRzID0ge1xyXG4gICAgZGF0YTogW10sXHJcbiAgICBwbGFjZWhvbGRlcjogJycsXHJcbiAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogJycsXHJcbiAgICBhdXRvY29tcGxldGVPcHRpb25zOiB7fSxcclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIEhhbmRsZSByZW1vdmFsIG9mIHN0YXRpYyBjaGlwcy5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hpcCAuY2xvc2UnLCBmdW5jdGlvbihlKXtcclxuICAgICAgdmFyICRjaGlwcyA9ICQodGhpcykuY2xvc2VzdCgnLmNoaXBzJyk7XHJcbiAgICAgIGlmICgkY2hpcHMuYXR0cignZGF0YS1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoaXAnKS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmZuLm1hdGVyaWFsX2NoaXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4kZWwgPSAkKHRoaXMpO1xyXG4gICAgdGhpcy4kZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcclxuICAgIHRoaXMuU0VMUyA9IHtcclxuICAgICAgQ0hJUFM6ICcuY2hpcHMnLFxyXG4gICAgICBDSElQOiAnLmNoaXAnLFxyXG4gICAgICBJTlBVVDogJ2lucHV0JyxcclxuICAgICAgREVMRVRFOiAnLm1hdGVyaWFsLWljb25zJyxcclxuICAgICAgU0VMRUNURURfQ0hJUDogJy5zZWxlY3RlZCcsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgnZGF0YScgPT09IG9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGVsLmRhdGEoJ2NoaXBzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGN1cnJfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBtYXRlcmlhbENoaXBzRGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgc2VsZi5oYXNBdXRvY29tcGxldGUgPSAhJC5pc0VtcHR5T2JqZWN0KGN1cnJfb3B0aW9ucy5hdXRvY29tcGxldGVPcHRpb25zLmRhdGEpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemVcclxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaSA9IDA7XHJcbiAgICAgIHZhciBjaGlwcztcclxuICAgICAgc2VsZi4kZWwuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkY2hpcHMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBjaGlwSWQgPSBNYXRlcmlhbGl6ZS5ndWlkKCk7XHJcbiAgICAgICAgc2VsZi5jaGlwSWQgPSBjaGlwSWQ7XHJcblxyXG4gICAgICAgIGlmICghY3Vycl9vcHRpb25zLmRhdGEgfHwgIShjdXJyX29wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmRhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGNoaXBzLmRhdGEoJ2NoaXBzJywgY3Vycl9vcHRpb25zLmRhdGEpO1xyXG4gICAgICAgICRjaGlwcy5hdHRyKCdkYXRhLWluZGV4JywgaSk7XHJcbiAgICAgICAgJGNoaXBzLmF0dHIoJ2RhdGEtaW5pdGlhbGl6ZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKCEkY2hpcHMuaGFzQ2xhc3Moc2VsZi5TRUxTLkNISVBTKSkge1xyXG4gICAgICAgICAgJGNoaXBzLmFkZENsYXNzKCdjaGlwcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5jaGlwcygkY2hpcHMsIGNoaXBJZCk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIFNFTFMgPSBzZWxmLlNFTFM7XHJcblxyXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2NsaWNrLmNoaXBzLWZvY3VzJywgU0VMUy5DSElQUykub24oJ2NsaWNrLmNoaXBzLWZvY3VzJywgU0VMUy5DSElQUywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgJChlLnRhcmdldCkuZmluZChTRUxTLklOUFVUKS5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZignY2xpY2suY2hpcHMtc2VsZWN0JywgU0VMUy5DSElQKS5vbignY2xpY2suY2hpcHMtc2VsZWN0JywgU0VMUy5DSElQLCBmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgJGNoaXAgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAoJGNoaXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICB2YXIgd2FzU2VsZWN0ZWQgPSAkY2hpcC5oYXNDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIHZhciAkY2hpcHMgPSAkY2hpcC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xyXG4gICAgICAgICAgJChTRUxTLkNISVApLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgIGlmICghd2FzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RDaGlwKCRjaGlwLmluZGV4KCksICRjaGlwcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZigna2V5ZG93bi5jaGlwcycpLm9uKCdrZXlkb3duLmNoaXBzJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKCdpbnB1dCwgdGV4dGFyZWEnKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVsZXRlXHJcbiAgICAgICAgdmFyICRjaGlwID0gc2VsZi4kZG9jdW1lbnQuZmluZChTRUxTLkNISVAgKyBTRUxTLlNFTEVDVEVEX0NISVApO1xyXG4gICAgICAgIHZhciAkY2hpcHMgPSAkY2hpcC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSAkY2hpcC5zaWJsaW5ncyhTRUxTLkNISVApLmxlbmd0aDtcclxuICAgICAgICB2YXIgaW5kZXg7XHJcblxyXG4gICAgICAgIGlmICghJGNoaXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS53aGljaCA9PT0gOCB8fCBlLndoaWNoID09PSA0Nikge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIGluZGV4ID0gJGNoaXAuaW5kZXgoKTtcclxuICAgICAgICAgIHNlbGYuZGVsZXRlQ2hpcChpbmRleCwgJGNoaXBzKTtcclxuXHJcbiAgICAgICAgICB2YXIgc2VsZWN0SW5kZXggPSBudWxsO1xyXG4gICAgICAgICAgaWYgKChpbmRleCArIDEpIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBsZW5ndGggfHwgKGluZGV4ICsgMSkgPT09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3RJbmRleCA9IGxlbmd0aCAtIDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNlbGVjdEluZGV4IDwgMCkgc2VsZWN0SW5kZXggPSBudWxsO1xyXG5cclxuICAgICAgICAgIGlmIChudWxsICE9PSBzZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoc2VsZWN0SW5kZXgsICRjaGlwcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWxlbmd0aCkgJGNoaXBzLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS53aGljaCA9PT0gMzcpIHtcclxuICAgICAgICAgIGluZGV4ID0gJGNoaXAuaW5kZXgoKSAtIDE7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChpbmRleCwgJGNoaXBzKTtcclxuXHJcbiAgICAgICAgLy8gcmlnaHRcclxuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDM5KSB7XHJcbiAgICAgICAgICBpbmRleCA9ICRjaGlwLmluZGV4KCkgKyAxO1xyXG4gICAgICAgICAgJChTRUxTLkNISVApLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRjaGlwcy5maW5kKCdpbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChpbmRleCwgJGNoaXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdmb2N1c2luLmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQpLm9uKCdmb2N1c2luLmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHZhciAkY3VyckNoaXBzID0gJChlLnRhcmdldCkuY2xvc2VzdChTRUxTLkNISVBTKTtcclxuICAgICAgICAkY3VyckNoaXBzLmFkZENsYXNzKCdmb2N1cycpO1xyXG4gICAgICAgICRjdXJyQ2hpcHMuc2libGluZ3MoJ2xhYmVsLCAucHJlZml4JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2ZvY3Vzb3V0LmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQpLm9uKCdmb2N1c291dC5jaGlwcycsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVULCBmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgJGN1cnJDaGlwcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoU0VMUy5DSElQUyk7XHJcbiAgICAgICAgJGN1cnJDaGlwcy5yZW1vdmVDbGFzcygnZm9jdXMnKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBpZiBlbXB0eVxyXG4gICAgICAgIGlmICghJGN1cnJDaGlwcy5kYXRhKCdjaGlwcycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgJGN1cnJDaGlwcy5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRjdXJyQ2hpcHMuc2libGluZ3MoJy5wcmVmaXgnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdrZXlkb3duLmNoaXBzLWFkZCcsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVUKS5vbigna2V5ZG93bi5jaGlwcy1hZGQnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICB2YXIgJGNoaXBzID0gJHRhcmdldC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xyXG4gICAgICAgIHZhciBjaGlwc0xlbmd0aCA9ICRjaGlwcy5jaGlsZHJlbihTRUxTLkNISVApLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gZW50ZXJcclxuICAgICAgICBpZiAoMTMgPT09IGUud2hpY2gpIHtcclxuICAgICAgICAgIC8vIE92ZXJyaWRlIGVudGVyIGlmIGF1dG9jb21wbGV0aW5nLlxyXG4gICAgICAgICAgaWYgKHNlbGYuaGFzQXV0b2NvbXBsZXRlICYmXHJcbiAgICAgICAgICAgICAgJGNoaXBzLmZpbmQoJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgJGNoaXBzLmZpbmQoJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykuY2hpbGRyZW4oKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHNlbGYuYWRkQ2hpcCh7dGFnOiAkdGFyZ2V0LnZhbCgpfSwgJGNoaXBzKTtcclxuICAgICAgICAgICR0YXJnZXQudmFsKCcnKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRlbGV0ZSBvciBsZWZ0XHJcbiAgICAgICAgaWYgKCg4ID09PSBlLmtleUNvZGUgfHwgMzcgPT09IGUua2V5Q29kZSkgJiYgJycgPT09ICR0YXJnZXQudmFsKCkgJiYgY2hpcHNMZW5ndGgpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChjaGlwc0xlbmd0aCAtIDEsICRjaGlwcyk7XHJcbiAgICAgICAgICAkdGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ2xpY2sgb24gZGVsZXRlIGljb24gaW4gY2hpcC5cclxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdjbGljay5jaGlwcy1kZWxldGUnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5ERUxFVEUpLm9uKCdjbGljay5jaGlwcy1kZWxldGUnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5ERUxFVEUsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIHZhciAkY2hpcHMgPSAkdGFyZ2V0LmNsb3Nlc3QoU0VMUy5DSElQUyk7XHJcbiAgICAgICAgdmFyICRjaGlwID0gJHRhcmdldC5jbG9zZXN0KFNFTFMuQ0hJUCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBzZWxmLmRlbGV0ZUNoaXAoJGNoaXAuaW5kZXgoKSwgJGNoaXBzKTtcclxuICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jaGlwcyA9IGZ1bmN0aW9uKCRjaGlwcywgY2hpcElkKSB7XHJcbiAgICAgICRjaGlwcy5lbXB0eSgpO1xyXG4gICAgICAkY2hpcHMuZGF0YSgnY2hpcHMnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xyXG4gICAgICAgICRjaGlwcy5hcHBlbmQoc2VsZi5yZW5kZXJDaGlwKGVsZW0pKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRjaGlwcy5hcHBlbmQoJCgnPGlucHV0IGlkPVwiJyArIGNoaXBJZCArJ1wiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlwiPicpKTtcclxuICAgICAgc2VsZi5zZXRQbGFjZWhvbGRlcigkY2hpcHMpO1xyXG5cclxuICAgICAgLy8gU2V0IGZvciBhdHRyaWJ1dGUgZm9yIGxhYmVsXHJcbiAgICAgIHZhciBsYWJlbCA9ICRjaGlwcy5uZXh0KCdsYWJlbCcpO1xyXG4gICAgICBpZiAobGFiZWwubGVuZ3RoKSB7XHJcbiAgICAgICAgbGFiZWwuYXR0cignZm9yJywgY2hpcElkKTtcclxuXHJcbiAgICAgICAgaWYgKCRjaGlwcy5kYXRhKCdjaGlwcycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgbGFiZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgYXV0b2NvbXBsZXRlIGlmIG5lZWRlZC5cclxuICAgICAgdmFyIGlucHV0ID0gJCgnIycgKyBjaGlwSWQpO1xyXG4gICAgICBpZiAoc2VsZi5oYXNBdXRvY29tcGxldGUpIHtcclxuICAgICAgICBjdXJyX29wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucy5vbkF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgc2VsZi5hZGRDaGlwKHt0YWc6IHZhbH0sICRjaGlwcyk7XHJcbiAgICAgICAgICBpbnB1dC52YWwoJycpO1xyXG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQuYXV0b2NvbXBsZXRlKGN1cnJfb3B0aW9ucy5hdXRvY29tcGxldGVPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciBjaGlwIGpRdWVyeSBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1cclxuICAgICAqIEByZXR1cm4ge2pRdWVyeX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW5kZXJDaGlwID0gZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICBpZiAoIWVsZW0udGFnKSByZXR1cm47XHJcblxyXG4gICAgICB2YXIgJHJlbmRlcmVkQ2hpcCA9ICQoJzxkaXYgY2xhc3M9XCJjaGlwXCI+PC9kaXY+Jyk7XHJcbiAgICAgICRyZW5kZXJlZENoaXAudGV4dChlbGVtLnRhZyk7XHJcbiAgICAgICRyZW5kZXJlZENoaXAuYXBwZW5kKCQoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2xvc2VcIj5jbG9zZTwvaT4nKSk7XHJcbiAgICAgIHJldHVybiAkcmVuZGVyZWRDaGlwO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyID0gZnVuY3Rpb24oJGNoaXBzKSB7XHJcbiAgICAgIGlmICgkY2hpcHMuZGF0YSgnY2hpcHMnKS5sZW5ndGggJiYgY3Vycl9vcHRpb25zLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgJGNoaXBzLmZpbmQoJ2lucHV0JykucHJvcCgncGxhY2Vob2xkZXInLCBjdXJyX29wdGlvbnMucGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgfSBlbHNlIGlmICghJGNoaXBzLmRhdGEoJ2NoaXBzJykubGVuZ3RoICYmIGN1cnJfb3B0aW9ucy5zZWNvbmRhcnlQbGFjZWhvbGRlcikge1xyXG4gICAgICAgICRjaGlwcy5maW5kKCdpbnB1dCcpLnByb3AoJ3BsYWNlaG9sZGVyJywgY3Vycl9vcHRpb25zLnNlY29uZGFyeVBsYWNlaG9sZGVyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlzVmFsaWQgPSBmdW5jdGlvbigkY2hpcHMsIGVsZW0pIHtcclxuICAgICAgdmFyIGNoaXBzID0gJGNoaXBzLmRhdGEoJ2NoaXBzJyk7XHJcbiAgICAgIHZhciBleGlzdHMgPSBmYWxzZTtcclxuICAgICAgZm9yICh2YXIgaT0wOyBpIDwgY2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2hpcHNbaV0udGFnID09PSBlbGVtLnRhZykge1xyXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJyAhPT0gZWxlbS50YWcgJiYgIWV4aXN0cztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hZGRDaGlwID0gZnVuY3Rpb24oZWxlbSwgJGNoaXBzKSB7XHJcbiAgICAgIGlmICghc2VsZi5pc1ZhbGlkKCRjaGlwcywgZWxlbSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdmFyICRyZW5kZXJlZENoaXAgPSBzZWxmLnJlbmRlckNoaXAoZWxlbSk7XHJcbiAgICAgIHZhciBuZXdEYXRhID0gW107XHJcbiAgICAgIHZhciBvbGREYXRhID0gJGNoaXBzLmRhdGEoJ2NoaXBzJyk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG5ld0RhdGEucHVzaChvbGREYXRhW2ldKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdEYXRhLnB1c2goZWxlbSk7XHJcblxyXG4gICAgICAkY2hpcHMuZGF0YSgnY2hpcHMnLCBuZXdEYXRhKTtcclxuICAgICAgJHJlbmRlcmVkQ2hpcC5pbnNlcnRCZWZvcmUoJGNoaXBzLmZpbmQoJ2lucHV0JykpO1xyXG4gICAgICAkY2hpcHMudHJpZ2dlcignY2hpcC5hZGQnLCBlbGVtKTtcclxuICAgICAgc2VsZi5zZXRQbGFjZWhvbGRlcigkY2hpcHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRlbGV0ZUNoaXAgPSBmdW5jdGlvbihjaGlwSW5kZXgsICRjaGlwcykge1xyXG4gICAgICB2YXIgY2hpcCA9ICRjaGlwcy5kYXRhKCdjaGlwcycpW2NoaXBJbmRleF07XHJcbiAgICAgICRjaGlwcy5maW5kKCcuY2hpcCcpLmVxKGNoaXBJbmRleCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICB2YXIgbmV3RGF0YSA9IFtdO1xyXG4gICAgICB2YXIgb2xkRGF0YSA9ICRjaGlwcy5kYXRhKCdjaGlwcycpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSAhPT0gY2hpcEluZGV4KSB7XHJcbiAgICAgICAgICBuZXdEYXRhLnB1c2gob2xkRGF0YVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkY2hpcHMuZGF0YSgnY2hpcHMnLCBuZXdEYXRhKTtcclxuICAgICAgJGNoaXBzLnRyaWdnZXIoJ2NoaXAuZGVsZXRlJywgY2hpcCk7XHJcbiAgICAgIHNlbGYuc2V0UGxhY2Vob2xkZXIoJGNoaXBzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZWxlY3RDaGlwID0gZnVuY3Rpb24oY2hpcEluZGV4LCAkY2hpcHMpIHtcclxuICAgICAgdmFyICRjaGlwID0gJGNoaXBzLmZpbmQoJy5jaGlwJykuZXEoY2hpcEluZGV4KTtcclxuICAgICAgaWYgKCRjaGlwICYmIGZhbHNlID09PSAkY2hpcC5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICRjaGlwLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICRjaGlwcy50cmlnZ2VyKCdjaGlwLnNlbGVjdCcsICRjaGlwcy5kYXRhKCdjaGlwcycpW2NoaXBJbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0Q2hpcHNFbGVtZW50ID0gZnVuY3Rpb24oaW5kZXgsICRjaGlwcykge1xyXG4gICAgICByZXR1cm4gJGNoaXBzLmVxKGluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaW5pdFxyXG4gICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVFdmVudHMoKTtcclxuICB9O1xyXG59KCBqUXVlcnkgKSk7XHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuICAkLmZuLnB1c2hwaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgLy8gRGVmYXVsdHNcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IEluZmluaXR5LFxyXG4gICAgICBvZmZzZXQ6IDBcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVtb3ZlIHB1c2hwaW4gZXZlbnQgYW5kIGNsYXNzZXNcclxuICAgIGlmIChvcHRpb25zID09PSBcInJlbW92ZVwiKSB7XHJcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlkID0gJCh0aGlzKS5kYXRhKCdwdXNocGluLWlkJykpIHtcclxuICAgICAgICAgICQod2luZG93KS5vZmYoJ3Njcm9sbC4nICsgaWQpO1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVEYXRhKCdwdXNocGluLWlkJykucmVtb3ZlQ2xhc3MoJ3Bpbi10b3AgcGlubmVkIHBpbi1ib3R0b20nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuXHJcbiAgICAkaW5kZXggPSAwO1xyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyICR1bmlxdWVJZCA9IE1hdGVyaWFsaXplLmd1aWQoKSxcclxuICAgICAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICRvcmlnaW5hbF9vZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZVBpbkNsYXNzZXMob2JqZWN0KSB7XHJcbiAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdwaW4tdG9wJyk7XHJcbiAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdwaW5uZWQnKTtcclxuICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3Bpbi1ib3R0b20nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gdXBkYXRlRWxlbWVudHMob2JqZWN0cywgc2Nyb2xsZWQpIHtcclxuICAgICAgICBvYmplY3RzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gQWRkIHBvc2l0aW9uIGZpeGVkIChiZWNhdXNlIGl0cyBiZXR3ZWVuIHRvcCBhbmQgYm90dG9tKVxyXG4gICAgICAgICAgaWYgKG9wdGlvbnMudG9wIDw9IHNjcm9sbGVkICYmIG9wdGlvbnMuYm90dG9tID49IHNjcm9sbGVkICYmICEkKHRoaXMpLmhhc0NsYXNzKCdwaW5uZWQnKSkge1xyXG4gICAgICAgICAgICByZW1vdmVQaW5DbGFzc2VzKCQodGhpcykpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgb3B0aW9ucy5vZmZzZXQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaW5uZWQnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBBZGQgcGluLXRvcCAod2hlbiBzY3JvbGxlZCBwb3NpdGlvbiBpcyBhYm92ZSB0b3ApXHJcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPCBvcHRpb25zLnRvcCAmJiAhJCh0aGlzKS5oYXNDbGFzcygncGluLXRvcCcpKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVBpbkNsYXNzZXMoJCh0aGlzKSk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCd0b3AnLCAwKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGluLXRvcCcpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEFkZCBwaW4tYm90dG9tICh3aGVuIHNjcm9sbGVkIHBvc2l0aW9uIGlzIGJlbG93IGJvdHRvbSlcclxuICAgICAgICAgIGlmIChzY3JvbGxlZCA+IG9wdGlvbnMuYm90dG9tICYmICEkKHRoaXMpLmhhc0NsYXNzKCdwaW4tYm90dG9tJykpIHtcclxuICAgICAgICAgICAgcmVtb3ZlUGluQ2xhc3NlcygkKHRoaXMpKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGluLWJvdHRvbScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygndG9wJywgb3B0aW9ucy5ib3R0b20gLSAkb3JpZ2luYWxfb2Zmc2V0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKCdwdXNocGluLWlkJywgJHVuaXF1ZUlkKTtcclxuICAgICAgdXBkYXRlRWxlbWVudHMoJHRoaXMsICQod2luZG93KS5zY3JvbGxUb3AoKSk7XHJcbiAgICAgICQod2luZG93KS5vbignc2Nyb2xsLicgKyAkdW5pcXVlSWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgb3B0aW9ucy5vZmZzZXQ7XHJcbiAgICAgICAgdXBkYXRlRWxlbWVudHMoJHRoaXMsICRzY3JvbGxlZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG59KCBqUXVlcnkgKSk7OyhmdW5jdGlvbiAoJCkge1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIGpRdWVyeSByZXZlcnNlXHJcbiAgICAkLmZuLnJldmVyc2UgPSBbXS5yZXZlcnNlO1xyXG5cclxuICAgIC8vIEhvdmVyIGJlaGF2aW91cjogbWFrZSBzdXJlIHRoaXMgZG9lc24ndCB3b3JrIG9uIC5jbGljay10by10b2dnbGUgRkFCcyFcclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWVudGVyLmZpeGVkQWN0aW9uQnRuJywgJy5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICBvcGVuRkFCTWVudSgkdGhpcyk7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWxlYXZlLmZpeGVkQWN0aW9uQnRuJywgJy5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICBjbG9zZUZBQk1lbnUoJHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVG9nZ2xlLW9uLWNsaWNrIGJlaGF2aW91ci5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5mYWJDbGlja1RvZ2dsZScsICcuZml4ZWQtYWN0aW9uLWJ0bi5jbGljay10by10b2dnbGUgPiBhJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgJG1lbnUgPSAkdGhpcy5wYXJlbnQoKTtcclxuICAgICAgaWYgKCRtZW51Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGNsb3NlRkFCTWVudSgkbWVudSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3BlbkZBQk1lbnUoJG1lbnUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUb29sYmFyIHRyYW5zaXRpb24gYmVoYXZpb3VyLlxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYlRvb2xiYXInLCAnLmZpeGVkLWFjdGlvbi1idG4udG9vbGJhciA+IGEnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgIHZhciAkbWVudSA9ICR0aGlzLnBhcmVudCgpO1xyXG4gICAgICBGQUJ0b1Rvb2xiYXIoJG1lbnUpO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkLmZuLmV4dGVuZCh7XHJcbiAgICBvcGVuRkFCOiBmdW5jdGlvbigpIHtcclxuICAgICAgb3BlbkZBQk1lbnUoJCh0aGlzKSk7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VGQUI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbG9zZUZBQk1lbnUoJCh0aGlzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlblRvb2xiYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBGQUJ0b1Rvb2xiYXIoJCh0aGlzKSk7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VUb29sYmFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgdG9vbGJhclRvRkFCKCQodGhpcykpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgdmFyIG9wZW5GQUJNZW51ID0gZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgdmFyICR0aGlzID0gYnRuO1xyXG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgIC8vIEdldCBkaXJlY3Rpb24gb3B0aW9uXHJcbiAgICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcclxuICAgICAgdmFyIG9mZnNldFksIG9mZnNldFg7XHJcblxyXG4gICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG9mZnNldFggPSA0MDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvZmZzZXRZID0gNDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KFxyXG4gICAgICAgIHsgc2NhbGVZOiBcIi40XCIsIHNjYWxlWDogXCIuNFwiLCB0cmFuc2xhdGVZOiBvZmZzZXRZICsgJ3B4JywgdHJhbnNsYXRlWDogb2Zmc2V0WCArICdweCd9LFxyXG4gICAgICAgIHsgZHVyYXRpb246IDAgfSk7XHJcblxyXG4gICAgICB2YXIgdGltZSA9IDA7XHJcbiAgICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS5yZXZlcnNlKCkuZWFjaCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykudmVsb2NpdHkoXHJcbiAgICAgICAgICB7IG9wYWNpdHk6IFwiMVwiLCBzY2FsZVg6IFwiMVwiLCBzY2FsZVk6IFwiMVwiLCB0cmFuc2xhdGVZOiBcIjBcIiwgdHJhbnNsYXRlWDogJzAnfSxcclxuICAgICAgICAgIHsgZHVyYXRpb246IDgwLCBkZWxheTogdGltZSB9KTtcclxuICAgICAgICB0aW1lICs9IDQwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgY2xvc2VGQUJNZW51ID0gZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgdmFyICR0aGlzID0gYnRuO1xyXG4gICAgLy8gR2V0IGRpcmVjdGlvbiBvcHRpb25cclxuICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcclxuICAgIHZhciBvZmZzZXRZLCBvZmZzZXRYO1xyXG5cclxuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XHJcbiAgICAgIG9mZnNldFggPSA0MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9mZnNldFkgPSA0MDtcclxuICAgIH1cclxuXHJcbiAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB2YXIgdGltZSA9IDA7XHJcbiAgICAkdGhpcy5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJykudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xyXG4gICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KFxyXG4gICAgICB7IG9wYWNpdHk6IFwiMFwiLCBzY2FsZVg6IFwiLjRcIiwgc2NhbGVZOiBcIi40XCIsIHRyYW5zbGF0ZVk6IG9mZnNldFkgKyAncHgnLCB0cmFuc2xhdGVYOiBvZmZzZXRYICsgJ3B4J30sXHJcbiAgICAgIHsgZHVyYXRpb246IDgwIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSBGQUIgaW50byB0b29sYmFyXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IGpRdWVyeSBvYmplY3RcclxuICAgKi9cclxuICB2YXIgRkFCdG9Ub29sYmFyID0gZnVuY3Rpb24oYnRuKSB7XHJcbiAgICBpZiAoYnRuLmF0dHIoJ2RhdGEtb3BlbicpID09PSBcInRydWVcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9mZnNldFgsIG9mZnNldFksIHNjYWxlRmFjdG9yO1xyXG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgdmFyIGJ0blJlY3QgPSBidG5bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB2YXIgYW5jaG9yID0gYnRuLmZpbmQoJz4gYScpLmZpcnN0KCk7XHJcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcclxuICAgIHZhciBiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJmYWItYmFja2Ryb3BcIj48L2Rpdj4nKTtcclxuICAgIHZhciBmYWJDb2xvciA9IGFuY2hvci5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgIGFuY2hvci5hcHBlbmQoYmFja2Ryb3ApO1xyXG5cclxuICAgIG9mZnNldFggPSBidG5SZWN0LmxlZnQgLSAod2luZG93V2lkdGggLyAyKSArIChidG5SZWN0LndpZHRoIC8gMik7XHJcbiAgICBvZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gYnRuUmVjdC5ib3R0b207XHJcbiAgICBzY2FsZUZhY3RvciA9IHdpbmRvd1dpZHRoIC8gYmFja2Ryb3Aud2lkdGgoKTtcclxuICAgIGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1ib3R0b20nLCBidG5SZWN0LmJvdHRvbSk7XHJcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4tbGVmdCcsIGJ0blJlY3QubGVmdCk7XHJcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4td2lkdGgnLCBidG5SZWN0LndpZHRoKTtcclxuXHJcbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxyXG4gICAgYnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIGJ0bi5hdHRyKCdkYXRhLW9wZW4nLCB0cnVlKTtcclxuICAgIGJ0bi5jc3Moe1xyXG4gICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArIG9mZnNldFggKyAncHgpJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICB9KTtcclxuICAgIGFuY2hvci5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyAtb2Zmc2V0WSArICdweCknLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcclxuICAgIH0pO1xyXG4gICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJ0bi5jc3Moe1xyXG4gICAgICAgIHRyYW5zZm9ybTogJycsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSwgYmFja2dyb3VuZC1jb2xvciAwcyBsaW5lYXIgLjJzJ1xyXG4gICAgICB9KTtcclxuICAgICAgYW5jaG9yLmNzcyh7XHJcbiAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICcnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYnRuLmNzcyh7XHJcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKCcgKyBzY2FsZUZhY3RvciArICcpJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWVudS5maW5kKCc+IGxpID4gYScpLmNzcyh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNjcm9sbCB0byBjbG9zZS5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRvb2xiYXJUb0ZBQihidG4pO1xyXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLmZhYlRvb2xiYXJDbG9zZScpO1xyXG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYlRvb2xiYXJDbG9zZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdChtZW51KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdG9vbGJhclRvRkFCKGJ0bik7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnKTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH0sIDApO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSB0b29sYmFyIGJhY2sgaW50byBGQUJcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgalF1ZXJ5IG9iamVjdFxyXG4gICAqL1xyXG4gIHZhciB0b29sYmFyVG9GQUIgPSBmdW5jdGlvbihidG4pIHtcclxuICAgIGlmIChidG4uYXR0cignZGF0YS1vcGVuJykgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb2Zmc2V0WCwgb2Zmc2V0WSwgc2NhbGVGYWN0b3I7XHJcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB2YXIgYnRuV2lkdGggPSBidG4uYXR0cignZGF0YS1vcmlnaW4td2lkdGgnKTtcclxuICAgIHZhciBidG5Cb3R0b20gPSBidG4uYXR0cignZGF0YS1vcmlnaW4tYm90dG9tJyk7XHJcbiAgICB2YXIgYnRuTGVmdCA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1sZWZ0Jyk7XHJcbiAgICB2YXIgYW5jaG9yID0gYnRuLmZpbmQoJz4gLmJ0bi1mbG9hdGluZycpLmZpcnN0KCk7XHJcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcclxuICAgIHZhciBiYWNrZHJvcCA9IGJ0bi5maW5kKCcuZmFiLWJhY2tkcm9wJyk7XHJcbiAgICB2YXIgZmFiQ29sb3IgPSBhbmNob3IuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcblxyXG4gICAgb2Zmc2V0WCA9IGJ0bkxlZnQgLSAod2luZG93V2lkdGggLyAyKSArIChidG5XaWR0aCAvIDIpO1xyXG4gICAgb2Zmc2V0WSA9IHdpbmRvd0hlaWdodCAtIGJ0bkJvdHRvbTtcclxuICAgIHNjYWxlRmFjdG9yID0gd2luZG93V2lkdGggLyBiYWNrZHJvcC53aWR0aCgpO1xyXG5cclxuXHJcbiAgICAvLyBIaWRlIGJhY2tkcm9wXHJcbiAgICBidG4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgYnRuLmF0dHIoJ2RhdGEtb3BlbicsIGZhbHNlKTtcclxuICAgIGJ0bi5jc3Moe1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICdub25lJ1xyXG4gICAgfSk7XHJcbiAgICBhbmNob3IuY3NzKHtcclxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXHJcbiAgICB9KTtcclxuICAgIGJhY2tkcm9wLmNzcyh7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxyXG4gICAgfSk7XHJcbiAgICBtZW51LmZpbmQoJz4gbGkgPiBhJykuY3NzKHtcclxuICAgICAgb3BhY2l0eTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJhY2tkcm9wLnJlbW92ZSgpO1xyXG5cclxuICAgICAgLy8gU2V0IGluaXRpYWwgc3RhdGUuXHJcbiAgICAgIGJ0bi5jc3Moe1xyXG4gICAgICAgICd0ZXh0LWFsaWduJzogJycsXHJcbiAgICAgICAgd2lkdGg6ICcnLFxyXG4gICAgICAgIGJvdHRvbTogJycsXHJcbiAgICAgICAgbGVmdDogJycsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJycsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIC1vZmZzZXRYICsgJ3B4LDAsMCknXHJcbiAgICAgIH0pO1xyXG4gICAgICBhbmNob3IuY3NzKHtcclxuICAgICAgICBvdmVyZmxvdzogJycsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwnICsgb2Zmc2V0WSArICdweCwwKSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ0bi5jc3Moe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFuY2hvci5jc3Moe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDIwKTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfTtcclxuXHJcblxyXG59KCBqUXVlcnkgKSk7XHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuICAvLyBJbWFnZSB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgTWF0ZXJpYWxpemUuZmFkZUluSW1hZ2UgPSBmdW5jdGlvbihzZWxlY3Rvck9yRWwpIHtcclxuICAgIHZhciBlbGVtZW50O1xyXG4gICAgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnc3RyaW5nJykge1xyXG4gICAgICBlbGVtZW50ID0gJChzZWxlY3Rvck9yRWwpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Yoc2VsZWN0b3JPckVsKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsZW1lbnQuY3NzKHtvcGFjaXR5OiAwfSk7XHJcbiAgICAkKGVsZW1lbnQpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge1xyXG4gICAgICBkdXJhdGlvbjogNjUwLFxyXG4gICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ1xyXG4gICAgfSk7XHJcbiAgICAkKGVsZW1lbnQpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge1xyXG4gICAgICBkdXJhdGlvbjogMTMwMCxcclxuICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdywgZngpIHtcclxuICAgICAgICBmeC5zdGFydCA9IDEwMDtcclxuICAgICAgICB2YXIgZ3JheXNjYWxlX3NldHRpbmcgPSBub3cvMTAwO1xyXG4gICAgICAgIHZhciBicmlnaHRuZXNzX3NldHRpbmcgPSAxNTAgLSAoMTAwIC0gbm93KS8xLjc1O1xyXG5cclxuICAgICAgICBpZiAoYnJpZ2h0bmVzc19zZXR0aW5nIDwgMTAwKSB7XHJcbiAgICAgICAgICBicmlnaHRuZXNzX3NldHRpbmcgPSAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub3cgPj0gMCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgIFwiLXdlYmtpdC1maWx0ZXJcIjogXCJncmF5c2NhbGUoXCIrZ3JheXNjYWxlX3NldHRpbmcrXCIpXCIgKyBcImJyaWdodG5lc3MoXCIrYnJpZ2h0bmVzc19zZXR0aW5nK1wiJSlcIixcclxuICAgICAgICAgICAgICBcImZpbHRlclwiOiBcImdyYXlzY2FsZShcIitncmF5c2NhbGVfc2V0dGluZytcIilcIiArIFwiYnJpZ2h0bmVzcyhcIiticmlnaHRuZXNzX3NldHRpbmcrXCIlKVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEhvcml6b250YWwgc3RhZ2dlcmVkIGxpc3RcclxuICBNYXRlcmlhbGl6ZS5zaG93U3RhZ2dlcmVkTGlzdCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3JFbCkge1xyXG4gICAgdmFyIGVsZW1lbnQ7XHJcbiAgICBpZiAodHlwZW9mKHNlbGVjdG9yT3JFbCkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGVsZW1lbnQgPSAkKHNlbGVjdG9yT3JFbCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHRpbWUgPSAwO1xyXG4gICAgZWxlbWVudC5maW5kKCdsaScpLnZlbG9jaXR5KFxyXG4gICAgICAgIHsgdHJhbnNsYXRlWDogXCItMTAwcHhcIn0sXHJcbiAgICAgICAgeyBkdXJhdGlvbjogMCB9KTtcclxuXHJcbiAgICBlbGVtZW50LmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS52ZWxvY2l0eShcclxuICAgICAgICB7IG9wYWNpdHk6IFwiMVwiLCB0cmFuc2xhdGVYOiBcIjBcIn0sXHJcbiAgICAgICAgeyBkdXJhdGlvbjogODAwLCBkZWxheTogdGltZSwgZWFzaW5nOiBbNjAsIDEwXSB9KTtcclxuICAgICAgdGltZSArPSAxMjA7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBIYXJkY29kZWQgLnN0YWdnZXJlZC1saXN0IHNjcm9sbEZpcmVcclxuICAgIC8vIHZhciBzdGFnZ2VyZWRMaXN0T3B0aW9ucyA9IFtdO1xyXG4gICAgLy8gJCgndWwuc3RhZ2dlcmVkLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblxyXG4gICAgLy8gICB2YXIgbGFiZWwgPSAnc2Nyb2xsRmlyZS0nICsgaTtcclxuICAgIC8vICAgJCh0aGlzKS5hZGRDbGFzcyhsYWJlbCk7XHJcbiAgICAvLyAgIHN0YWdnZXJlZExpc3RPcHRpb25zLnB1c2goXHJcbiAgICAvLyAgICAge3NlbGVjdG9yOiAndWwuc3RhZ2dlcmVkLWxpc3QuJyArIGxhYmVsLFxyXG4gICAgLy8gICAgICBvZmZzZXQ6IDIwMCxcclxuICAgIC8vICAgICAgY2FsbGJhY2s6ICdzaG93U3RhZ2dlcmVkTGlzdChcInVsLnN0YWdnZXJlZC1saXN0LicgKyBsYWJlbCArICdcIiknfSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHNjcm9sbEZpcmUoc3RhZ2dlcmVkTGlzdE9wdGlvbnMpO1xyXG5cclxuICAgIC8vIEhhbW1lckpTLCBTd2lwZSBuYXZpZ2F0aW9uXHJcblxyXG4gICAgLy8gVG91Y2ggRXZlbnRcclxuICAgIHZhciBzd2lwZUxlZnQgPSBmYWxzZTtcclxuICAgIHZhciBzd2lwZVJpZ2h0ID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8vIERpc21pc3NpYmxlIENvbGxlY3Rpb25zXHJcbiAgICAkKCcuZGlzbWlzc2FibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmhhbW1lcih7XHJcbiAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxyXG4gICAgICB9KS5iaW5kKCdwYW4nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XHJcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XHJcbiAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5kZWx0YVg7XHJcbiAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcclxuXHJcbiAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IHhcclxuICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xyXG5cclxuICAgICAgICAgIC8vIFN3aXBlIExlZnRcclxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDQgJiYgKHggPiAoJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYIDwgLTAuNzUpKSB7XHJcbiAgICAgICAgICAgIHN3aXBlTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gU3dpcGUgUmlnaHRcclxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDIgJiYgKHggPCAoLTEgKiAkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPiAwLjc1KSkge1xyXG4gICAgICAgICAgICBzd2lwZVJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLmJpbmQoJ3BhbmVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAvLyBSZXNldCBpZiBjb2xsZWN0aW9uIGlzIG1vdmVkIGJhY2sgaW50byBvcmlnaW5hbCBwb3NpdGlvblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhlLmdlc3R1cmUuZGVsdGFYKSA8ICgkKHRoaXMpLmlubmVyV2lkdGgoKSAvIDIpKSB7XHJcbiAgICAgICAgICBzd2lwZVJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICBzd2lwZUxlZnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xyXG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgIGlmIChzd2lwZUxlZnQgfHwgc3dpcGVSaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgZnVsbFdpZHRoO1xyXG4gICAgICAgICAgICBpZiAoc3dpcGVMZWZ0KSB7IGZ1bGxXaWR0aCA9ICR0aGlzLmlubmVyV2lkdGgoKTsgfVxyXG4gICAgICAgICAgICBlbHNlIHsgZnVsbFdpZHRoID0gLTEgKiAkdGhpcy5pbm5lcldpZHRoKCk7IH1cclxuXHJcbiAgICAgICAgICAgICR0aGlzLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogZnVsbFdpZHRoLFxyXG4gICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMTAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgY29tcGxldGU6XHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5jc3MoJ2JvcmRlcicsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IGhlaWdodDogMCwgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBjb21wbGV0ZTpcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgJHRoaXMucmVtb3ZlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAxMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzd2lwZUxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgIHN3aXBlUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyB0aW1lID0gMFxyXG4gICAgLy8gLy8gVmVydGljYWwgU3RhZ2dlcmVkIGxpc3RcclxuICAgIC8vICQoJ3VsLnN0YWdnZXJlZC1saXN0LnZlcnRpY2FsIGxpJykudmVsb2NpdHkoXHJcbiAgICAvLyAgICAgeyB0cmFuc2xhdGVZOiBcIjEwMHB4XCJ9LFxyXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDAgfSk7XHJcblxyXG4gICAgLy8gJCgndWwuc3RhZ2dlcmVkLWxpc3QudmVydGljYWwgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAkKHRoaXMpLnZlbG9jaXR5KFxyXG4gICAgLy8gICAgIHsgb3BhY2l0eTogXCIxXCIsIHRyYW5zbGF0ZVk6IFwiMFwifSxcclxuICAgIC8vICAgICB7IGR1cmF0aW9uOiA4MDAsIGRlbGF5OiB0aW1lLCBlYXNpbmc6IFs2MCwgMjVdIH0pO1xyXG4gICAgLy8gICB0aW1lICs9IDEyMDtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIC8vIEZhZGUgaW4gYW5kIFNjYWxlXHJcbiAgICAvLyAkKCcuZmFkZS1pbi5zY2FsZScpLnZlbG9jaXR5KFxyXG4gICAgLy8gICAgIHsgc2NhbGVYOiAuNCwgc2NhbGVZOiAuNCwgdHJhbnNsYXRlWDogLTYwMH0sXHJcbiAgICAvLyAgICAgeyBkdXJhdGlvbjogMH0pO1xyXG4gICAgLy8gJCgnLmZhZGUtaW4nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAkKHRoaXMpLnZlbG9jaXR5KFxyXG4gICAgLy8gICAgIHsgb3BhY2l0eTogXCIxXCIsIHNjYWxlWDogMSwgc2NhbGVZOiAxLCB0cmFuc2xhdGVYOiAwfSxcclxuICAgIC8vICAgICB7IGR1cmF0aW9uOiA4MDAsIGVhc2luZzogWzYwLCAxMF0gfSk7XHJcbiAgICAvLyB9KTtcclxuICB9KTtcclxufSggalF1ZXJ5ICkpO1xyXG47KGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgdmFyIHNjcm9sbEZpcmVFdmVudHNIYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIC8vIElucHV0OiBBcnJheSBvZiBKU09OIG9iamVjdHMge3NlbGVjdG9yLCBvZmZzZXQsIGNhbGxiYWNrfVxyXG4gIE1hdGVyaWFsaXplLnNjcm9sbEZpcmUgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICB2YXIgb25TY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBHZXQgb3B0aW9ucyBmcm9tIGVhY2ggbGluZVxyXG4gICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdmFsdWUuc2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG9mZnNldCA9IHZhbHVlLm9mZnNldCxcclxuICAgICAgICAgICAgY2FsbGJhY2sgPSB2YWx1ZS5jYWxsYmFjaztcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCBjdXJyZW50RWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBjdXJyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgaWYgKHdpbmRvd1Njcm9sbCA+IChlbGVtZW50T2Zmc2V0ICsgb2Zmc2V0KSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZG9uZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGN1cnJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tGdW5jID0gbmV3IEZ1bmN0aW9uKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYyhjdXJyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhbHVlLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB2YXIgdGhyb3R0bGVkU2Nyb2xsID0gTWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIG9uU2Nyb2xsKCk7XHJcbiAgICB9LCBvcHRpb25zLnRocm90dGxlIHx8IDEwMCk7XHJcblxyXG4gICAgaWYgKCFzY3JvbGxGaXJlRXZlbnRzSGFuZGxlZCkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aHJvdHRsZWRTY3JvbGwpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRTY3JvbGwpO1xyXG4gICAgICBzY3JvbGxGaXJlRXZlbnRzSGFuZGxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGVyZm9ybSBhIHNjYW4gb25jZSwgYWZ0ZXIgY3VycmVudCBleGVjdXRpb24gY29udGV4dCwgYW5kIGFmdGVyIGRvbSBpcyByZWFkeVxyXG4gICAgc2V0VGltZW91dCh0aHJvdHRsZWRTY3JvbGwsIDApO1xyXG4gIH07XHJcblxyXG59KShqUXVlcnkpO1xyXG47LyohXHJcbiAqIHBpY2thZGF0ZS5qcyB2My41LjAsIDIwMTQvMDQvMTNcclxuICogQnkgQW1zdWwsIGh0dHA6Ly9hbXN1bC5jYVxyXG4gKiBIb3N0ZWQgb24gaHR0cDovL2Ftc3VsLmdpdGh1Yi5pby9waWNrYWRhdGUuanNcclxuICogTGljZW5zZWQgdW5kZXIgTUlUXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICggZmFjdG9yeSApIHtcclxuXHJcbiAgICAvLyBBTUQuXHJcbiAgICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kIClcclxuICAgICAgICBkZWZpbmUoICdwaWNrZXInLCBbJ2pxdWVyeSddLCBmYWN0b3J5IClcclxuXHJcbiAgICAvLyBOb2RlLmpzL2Jyb3dzZXJpZnkuXHJcbiAgICBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgKVxyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggcmVxdWlyZSgnanF1ZXJ5JykgKVxyXG5cclxuICAgIC8vIEJyb3dzZXIgZ2xvYmFscy5cclxuICAgIGVsc2UgdGhpcy5QaWNrZXIgPSBmYWN0b3J5KCBqUXVlcnkgKVxyXG5cclxufShmdW5jdGlvbiggJCApIHtcclxuXHJcbnZhciAkd2luZG93ID0gJCggd2luZG93IClcclxudmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50IClcclxudmFyICRodG1sID0gJCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IClcclxuXHJcblxyXG4vKipcclxuICogVGhlIHBpY2tlciBjb25zdHJ1Y3RvciB0aGF0IGNyZWF0ZXMgYSBibGFuayBwaWNrZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBQaWNrZXJDb25zdHJ1Y3RvciggRUxFTUVOVCwgTkFNRSwgQ09NUE9ORU5ULCBPUFRJT05TICkge1xyXG5cclxuICAgIC8vIElmIHRoZXJl4oCZcyBubyBlbGVtZW50LCByZXR1cm4gdGhlIHBpY2tlciBjb25zdHJ1Y3Rvci5cclxuICAgIGlmICggIUVMRU1FTlQgKSByZXR1cm4gUGlja2VyQ29uc3RydWN0b3JcclxuXHJcblxyXG4gICAgdmFyXHJcbiAgICAgICAgSVNfREVGQVVMVF9USEVNRSA9IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgLy8gVGhlIHN0YXRlIG9mIHRoZSBwaWNrZXIuXHJcbiAgICAgICAgU1RBVEUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBFTEVNRU5ULmlkIHx8ICdQJyArIE1hdGguYWJzKCB+fihNYXRoLnJhbmRvbSgpICogbmV3IERhdGUoKSkgKVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdHMgYW5kIG9wdGlvbnMgcGFzc2VkLlxyXG4gICAgICAgIFNFVFRJTkdTID0gQ09NUE9ORU5UID8gJC5leHRlbmQoIHRydWUsIHt9LCBDT01QT05FTlQuZGVmYXVsdHMsIE9QVElPTlMgKSA6IE9QVElPTlMgfHwge30sXHJcblxyXG5cclxuICAgICAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdCBjbGFzc2VzIHdpdGggdGhlIHNldHRpbmdzIGNsYXNzZXMuXHJcbiAgICAgICAgQ0xBU1NFUyA9ICQuZXh0ZW5kKCB7fSwgUGlja2VyQ29uc3RydWN0b3Iua2xhc3NlcygpLCBTRVRUSU5HUy5rbGFzcyApLFxyXG5cclxuXHJcbiAgICAgICAgLy8gVGhlIGVsZW1lbnQgbm9kZSB3cmFwcGVyIGludG8gYSBqUXVlcnkgb2JqZWN0LlxyXG4gICAgICAgICRFTEVNRU5UID0gJCggRUxFTUVOVCApLFxyXG5cclxuXHJcbiAgICAgICAgLy8gUHNldWRvIHBpY2tlciBjb25zdHJ1Y3Rvci5cclxuICAgICAgICBQaWNrZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIFRoZSBwaWNrZXIgcHJvdG90eXBlLlxyXG4gICAgICAgIFAgPSBQaWNrZXJJbnN0YW5jZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcjogUGlja2VySW5zdGFuY2UsXHJcblxyXG4gICAgICAgICAgICAkbm9kZTogJEVMRU1FTlQsXHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEluaXRpYWxpemUgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbHJlYWR5IHN0YXJ0ZWQsIGRvIG5vdGhpbmcuXHJcbiAgICAgICAgICAgICAgICBpZiAoIFNUQVRFICYmIFNUQVRFLnN0YXJ0ICkgcmV0dXJuIFBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwaWNrZXIgc3RhdGVzLlxyXG4gICAgICAgICAgICAgICAgU1RBVEUubWV0aG9kcyA9IHt9XHJcbiAgICAgICAgICAgICAgICBTVEFURS5zdGFydCA9IHRydWVcclxuICAgICAgICAgICAgICAgIFNUQVRFLm9wZW4gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgU1RBVEUudHlwZSA9IEVMRU1FTlQudHlwZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDb25maXJtIGZvY3VzIHN0YXRlLCBjb252ZXJ0IGludG8gdGV4dCBpbnB1dCB0byByZW1vdmUgVUEgc3R5bGluZ3MsXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgc2V0IGFzIHJlYWRvbmx5IHRvIHByZXZlbnQga2V5Ym9hcmQgcG9wdXAuXHJcbiAgICAgICAgICAgICAgICBFTEVNRU5ULmF1dG9mb2N1cyA9IEVMRU1FTlQgPT0gZ2V0QWN0aXZlRWxlbWVudCgpXHJcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnJlYWRPbmx5ID0gIVNFVFRJTkdTLmVkaXRhYmxlXHJcbiAgICAgICAgICAgICAgICBFTEVNRU5ULmlkID0gRUxFTUVOVC5pZCB8fCBTVEFURS5pZFxyXG4gICAgICAgICAgICAgICAgaWYgKCBFTEVNRU5ULnR5cGUgIT0gJ3RleHQnICkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVMRU1FTlQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGlja2VyIGNvbXBvbmVudCB3aXRoIHRoZSBzZXR0aW5ncy5cclxuICAgICAgICAgICAgICAgIFAuY29tcG9uZW50ID0gbmV3IENPTVBPTkVOVChQLCBTRVRUSU5HUylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBwaWNrZXIgcm9vdCB3aXRoIGEgaG9sZGVyIGFuZCB0aGVuIHByZXBhcmUgaXQuXHJcbiAgICAgICAgICAgICAgICBQLiRyb290ID0gJCggUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCdkaXYnLCBjcmVhdGVXcmFwcGVkQ29tcG9uZW50KCksIENMQVNTRVMucGlja2VyLCAnaWQ9XCInICsgRUxFTUVOVC5pZCArICdfcm9vdFwiIHRhYmluZGV4PVwiMFwiJykgKVxyXG4gICAgICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnRSb290KClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmXigJlzIGEgZm9ybWF0IGZvciB0aGUgaGlkZGVuIGlucHV0IGVsZW1lbnQsIGNyZWF0ZSB0aGUgZWxlbWVudC5cclxuICAgICAgICAgICAgICAgIGlmICggU0VUVElOR1MuZm9ybWF0U3VibWl0ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVFbGVtZW50SGlkZGVuKClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJlcGFyZSB0aGUgaW5wdXQgZWxlbWVudC5cclxuICAgICAgICAgICAgICAgIHByZXBhcmVFbGVtZW50KClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSByb290IGFzIHNwZWNpZmllZCBpbiB0aGUgc2V0dGluZ3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoIFNFVFRJTkdTLmNvbnRhaW5lciApICQoIFNFVFRJTkdTLmNvbnRhaW5lciApLmFwcGVuZCggUC4kcm9vdCApXHJcbiAgICAgICAgICAgICAgICBlbHNlICRFTEVNRU5ULmFmdGVyKCBQLiRyb290IClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmluZCB0aGUgZGVmYXVsdCBjb21wb25lbnQgYW5kIHNldHRpbmdzIGV2ZW50cy5cclxuICAgICAgICAgICAgICAgIFAub24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBQLmNvbXBvbmVudC5vblN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogUC5jb21wb25lbnQub25SZW5kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcDogUC5jb21wb25lbnQub25TdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IFAuY29tcG9uZW50Lm9uT3BlbixcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZTogUC5jb21wb25lbnQub25DbG9zZSxcclxuICAgICAgICAgICAgICAgICAgICBzZXQ6IFAuY29tcG9uZW50Lm9uU2V0XHJcbiAgICAgICAgICAgICAgICB9KS5vbih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFNFVFRJTkdTLm9uU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBTRVRUSU5HUy5vblJlbmRlcixcclxuICAgICAgICAgICAgICAgICAgICBzdG9wOiBTRVRUSU5HUy5vblN0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogU0VUVElOR1Mub25PcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiBTRVRUSU5HUy5vbkNsb3NlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldDogU0VUVElOR1Mub25TZXRcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uY2Ugd2XigJlyZSBhbGwgc2V0LCBjaGVjayB0aGUgdGhlbWUgaW4gdXNlLlxyXG4gICAgICAgICAgICAgICAgSVNfREVGQVVMVF9USEVNRSA9IGlzVXNpbmdEZWZhdWx0VGhlbWUoIFAuJHJvb3QuY2hpbGRyZW4oKVsgMCBdIClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGF1dG9mb2N1cywgb3BlbiB0aGUgcGlja2VyLlxyXG4gICAgICAgICAgICAgICAgaWYgKCBFTEVNRU5ULmF1dG9mb2N1cyApIHtcclxuICAgICAgICAgICAgICAgICAgICBQLm9wZW4oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHF1ZXVlZCB0aGUg4oCcc3RhcnTigJ0gYW5kIOKAnHJlbmRlcuKAnSBldmVudHMuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAnc3RhcnQnICkudHJpZ2dlciggJ3JlbmRlcicgKVxyXG4gICAgICAgICAgICB9LCAvL3N0YXJ0XHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJlbmRlciBhIG5ldyBwaWNrZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oIGVudGlyZUNvbXBvbmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYSBuZXcgY29tcG9uZW50IGhvbGRlciBpbiB0aGUgcm9vdCBvciBib3guXHJcbiAgICAgICAgICAgICAgICBpZiAoIGVudGlyZUNvbXBvbmVudCApIFAuJHJvb3QuaHRtbCggY3JlYXRlV3JhcHBlZENvbXBvbmVudCgpIClcclxuICAgICAgICAgICAgICAgIGVsc2UgUC4kcm9vdC5maW5kKCAnLicgKyBDTEFTU0VTLmJveCApLmh0bWwoIFAuY29tcG9uZW50Lm5vZGVzKCBTVEFURS5vcGVuICkgKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxyZW5kZXLigJ0gZXZlbnRzLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFAudHJpZ2dlciggJ3JlbmRlcicgKVxyXG4gICAgICAgICAgICB9LCAvL3JlbmRlclxyXG5cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZXN0cm95IGV2ZXJ5dGhpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbHJlYWR5IHN0b3BwZWQsIGRvIG5vdGhpbmcuXHJcbiAgICAgICAgICAgICAgICBpZiAoICFTVEFURS5zdGFydCApIHJldHVybiBQXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGhlbiBjbG9zZSB0aGUgcGlja2VyLlxyXG4gICAgICAgICAgICAgICAgUC5jbG9zZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBoaWRkZW4gZmllbGQuXHJcbiAgICAgICAgICAgICAgICBpZiAoIFAuX2hpZGRlbiApIHtcclxuICAgICAgICAgICAgICAgICAgICBQLl9oaWRkZW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggUC5faGlkZGVuIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJvb3QuXHJcbiAgICAgICAgICAgICAgICBQLiRyb290LnJlbW92ZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbnB1dCBjbGFzcywgcmVtb3ZlIHRoZSBzdG9yZWQgZGF0YSwgYW5kIHVuYmluZFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGV2ZW50cyAoYWZ0ZXIgYSB0aWNrIGZvciBJRSAtIHNlZSBgUC5jbG9zZWApLlxyXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQucmVtb3ZlQ2xhc3MoIENMQVNTRVMuaW5wdXQgKS5yZW1vdmVEYXRhKCBOQU1FIClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRFTEVNRU5ULm9mZiggJy4nICsgU1RBVEUuaWQgKVxyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBlbGVtZW50IHN0YXRlXHJcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnR5cGUgPSBTVEFURS50eXBlXHJcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnJlYWRPbmx5ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBxdWV1ZWQg4oCcc3RvcOKAnSBldmVudHMuXHJcbiAgICAgICAgICAgICAgICBQLnRyaWdnZXIoICdzdG9wJyApXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHBpY2tlciBzdGF0ZXMuXHJcbiAgICAgICAgICAgICAgICBTVEFURS5tZXRob2RzID0ge31cclxuICAgICAgICAgICAgICAgIFNUQVRFLnN0YXJ0ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUFxyXG4gICAgICAgICAgICB9LCAvL3N0b3BcclxuXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3BlbiB1cCB0aGUgcGlja2VyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZG9udEdpdmVGb2N1cyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBvcGVuLCBkbyBub3RoaW5nLlxyXG4gICAgICAgICAgICAgICAgaWYgKCBTVEFURS5vcGVuICkgcmV0dXJuIFBcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIOKAnGFjdGl2ZeKAnSBjbGFzcy5cclxuICAgICAgICAgICAgICAgICRFTEVNRU5ULmFkZENsYXNzKCBDTEFTU0VTLmFjdGl2ZSApXHJcbiAgICAgICAgICAgICAgICBhcmlhKCBFTEVNRU5ULCAnZXhwYW5kZWQnLCB0cnVlIClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAqIEEgRmlyZWZveCBidWcsIHdoZW4gYGh0bWxgIGhhcyBgb3ZlcmZsb3c6aGlkZGVuYCwgcmVzdWx0cyBpblxyXG4gICAgICAgICAgICAgICAgLy8gICBraWxsaW5nIHRyYW5zaXRpb25zIDooLiBTbyBhZGQgdGhlIOKAnG9wZW5lZOKAnSBzdGF0ZSBvbiB0aGUgbmV4dCB0aWNrLlxyXG4gICAgICAgICAgICAgICAgLy8gICBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYyNTI4OVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUg4oCcb3BlbmVk4oCdIGNsYXNzIHRvIHRoZSBwaWNrZXIgcm9vdC5cclxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmFkZENsYXNzKCBDTEFTU0VTLm9wZW5lZCApXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYSggUC4kcm9vdFswXSwgJ2hpZGRlbicsIGZhbHNlIClcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwIClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRvIGdpdmUgZm9jdXMsIGJpbmQgdGhlIGVsZW1lbnQgYW5kIGRvYyBldmVudHMuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGRvbnRHaXZlRm9jdXMgIT09IGZhbHNlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaXQgYXMgb3Blbi5cclxuICAgICAgICAgICAgICAgICAgICBTVEFURS5vcGVuID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBwYWdlIGZyb20gc2Nyb2xsaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggSVNfREVGQVVMVF9USEVNRSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdvdmVyZmxvdycsICdoaWRkZW4nICkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdwYWRkaW5nLXJpZ2h0JywgJys9JyArIGdldFNjcm9sbGJhcldpZHRoKCkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBmb2N1cyB0byB0aGUgcm9vdCBlbGVtZW504oCZcyBqUXVlcnkgb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICogV29ya2Fyb3VuZCBmb3IgaU9TOCB0byBicmluZyB0aGUgcGlja2Vy4oCZcyByb290IGludG8gdmlldy5cclxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmluZCB0aGUgZG9jdW1lbnQgZXZlbnRzLlxyXG4gICAgICAgICAgICAgICAgICAgICRkb2N1bWVudC5vbiggJ2NsaWNrLicgKyBTVEFURS5pZCArICcgZm9jdXNpbi4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50IGlzIG5vdCB0aGUgZWxlbWVudCwgY2xvc2UgdGhlIHBpY2tlciBwaWNrZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICogRG9u4oCZdCB3b3JyeSBhYm91dCBjbGlja3Mgb3IgZm9jdXNpbnMgb24gdGhlIHJvb3QgYmVjYXVzZSB0aG9zZSBkb27igJl0IGJ1YmJsZSB1cC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBBbHNvLCBmb3IgRmlyZWZveCwgYSBjbGljayBvbiBhbiBgb3B0aW9uYCBlbGVtZW50IGJ1YmJsZXMgdXAgZGlyZWN0bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0byB0aGUgZG9jLiBTbyBtYWtlIHN1cmUgdGhlIHRhcmdldCB3YXNuJ3QgdGhlIGRvYy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBJbiBGaXJlZm94IHN0b3BQcm9wYWdhdGlvbigpIGRvZXNu4oCZdCBwcmV2ZW50IHJpZ2h0LWNsaWNrIGV2ZW50cyBmcm9tIGJ1YmJsaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdoaWNoIGNhdXNlcyB0aGUgcGlja2VyIHRvIHVuZXhwZWN0ZWRseSBjbG9zZSB3aGVuIHJpZ2h0LWNsaWNraW5nIGl0LiBTbyBtYWtlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgc3VyZSB0aGUgZXZlbnQgd2FzbuKAmXQgYSByaWdodC1jbGljay5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0YXJnZXQgIT0gRUxFTUVOVCAmJiB0YXJnZXQgIT0gZG9jdW1lbnQgJiYgZXZlbnQud2hpY2ggIT0gMyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IHdhcyB0aGUgaG9sZGVyIHRoYXQgY292ZXJzIHRoZSBzY3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZSBlbGVtZW50IGZvY3VzZWQgdG8gbWFpbnRhaW4gdGFiaW5kZXguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0YXJnZXQgPT09IFAuJHJvb3QuY2hpbGRyZW4oKVswXSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkub24oICdrZXlkb3duLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGtleWNvZGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXljb2RlID0gZXZlbnQua2V5Q29kZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc2xhdGUgdGhhdCB0byBhIHNlbGVjdGlvbiBjaGFuZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXljb2RlVG9Nb3ZlID0gUC5jb21wb25lbnQua2V5WyBrZXljb2RlIF0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JhYiB0aGUgdGFyZ2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gZXNjYXBlLCBjbG9zZSB0aGUgcGlja2VyIGFuZCBnaXZlIGZvY3VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGtleWNvZGUgPT0gMjcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEga2V5IG1vdmVtZW50IG9yIOKAnGVudGVy4oCdIGtleXByZXNzIG9uIHRoZSBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0ID09IFAuJHJvb3RbMF0gJiYgKCBrZXljb2RlVG9Nb3ZlIHx8IGtleWNvZGUgPT0gMTMgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiB0byBzdG9wIHBhZ2UgbW92ZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUga2V5IG1vdmVtZW50IGFjdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgga2V5Y29kZVRvTW92ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIFAuY29tcG9uZW50LmtleS5nbywgUCwgWyBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGtleWNvZGVUb01vdmUgKSBdIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiDigJxlbnRlcuKAnSwgaWYgdGhlIGhpZ2hsaWdodGVkIGl0ZW0gaXNu4oCZdCBkaXNhYmxlZCwgc2V0IHRoZSB2YWx1ZSBhbmQgY2xvc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggIVAuJHJvb3QuZmluZCggJy4nICsgQ0xBU1NFUy5oaWdobGlnaHRlZCApLmhhc0NsYXNzKCBDTEFTU0VTLmRpc2FibGVkICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5zZXQoICdzZWxlY3QnLCBQLmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCApLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgd2l0aGluIHRoZSByb290IGFuZCDigJxlbnRlcuKAnSBpcyBwcmVzc2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiBhbmQgdHJpZ2dlciBhIGNsaWNrIG9uIHRoZSB0YXJnZXQgaW5zdGVhZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICQuY29udGFpbnMoIFAuJHJvb3RbMF0sIHRhcmdldCApICYmIGtleWNvZGUgPT0gMTMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xpY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBxdWV1ZWQg4oCcb3BlbuKAnSBldmVudHMuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAnb3BlbicgKVxyXG4gICAgICAgICAgICB9LCAvL29wZW5cclxuXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2xvc2UgdGhlIHBpY2tlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBnaXZlRm9jdXMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBnaXZlIGZvY3VzLCBkbyBpdCBiZWZvcmUgY2hhbmdpbmcgc3RhdGVzLlxyXG4gICAgICAgICAgICAgICAgaWYgKCBnaXZlRm9jdXMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uLmFoIHllcyEgSXQgd291bGTigJl2ZSBiZWVuIGluY29tcGxldGUgd2l0aG91dCBhIGNyYXp5IHdvcmthcm91bmQgZm9yIElFIDp8XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZvY3VzIGlzIHRyaWdnZXJlZCAqYWZ0ZXIqIHRoZSBjbG9zZSBoYXMgY29tcGxldGVkIC0gY2F1c2luZyBpdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIG9wZW4gYWdhaW4uIFNvIHVuYmluZCBhbmQgcmViaW5kIHRoZSBldmVudCBhdCB0aGUgbmV4dCB0aWNrLlxyXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3Qub2ZmKCAnZm9jdXMudG9PcGVuJyApLmVxKDApLmZvY3VzKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5vbiggJ2ZvY3VzLnRvT3BlbicsIGhhbmRsZUZvY3VzVG9PcGVuRXZlbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUg4oCcYWN0aXZl4oCdIGNsYXNzLlxyXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQucmVtb3ZlQ2xhc3MoIENMQVNTRVMuYWN0aXZlIClcclxuICAgICAgICAgICAgICAgIGFyaWEoIEVMRU1FTlQsICdleHBhbmRlZCcsIGZhbHNlIClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAqIEEgRmlyZWZveCBidWcsIHdoZW4gYGh0bWxgIGhhcyBgb3ZlcmZsb3c6aGlkZGVuYCwgcmVzdWx0cyBpblxyXG4gICAgICAgICAgICAgICAgLy8gICBraWxsaW5nIHRyYW5zaXRpb25zIDooLiBTbyByZW1vdmUgdGhlIOKAnG9wZW5lZOKAnSBzdGF0ZSBvbiB0aGUgbmV4dCB0aWNrLlxyXG4gICAgICAgICAgICAgICAgLy8gICBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYyNTI4OVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUg4oCcb3BlbmVk4oCdIGFuZCDigJxmb2N1c2Vk4oCdIGNsYXNzIGZyb20gdGhlIHBpY2tlciByb290LlxyXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QucmVtb3ZlQ2xhc3MoIENMQVNTRVMub3BlbmVkICsgJyAnICsgQ0xBU1NFUy5mb2N1c2VkIClcclxuICAgICAgICAgICAgICAgICAgICBhcmlhKCBQLiRyb290WzBdLCAnaGlkZGVuJywgdHJ1ZSApXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMCApXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFscmVhZHkgY2xvc2VkLCBkbyBub3RoaW5nIG1vcmUuXHJcbiAgICAgICAgICAgICAgICBpZiAoICFTVEFURS5vcGVuICkgcmV0dXJuIFBcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgaXQgYXMgY2xvc2VkLlxyXG4gICAgICAgICAgICAgICAgU1RBVEUub3BlbiA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWxsb3cgdGhlIHBhZ2UgdG8gc2Nyb2xsLlxyXG4gICAgICAgICAgICAgICAgaWYgKCBJU19ERUZBVUxUX1RIRU1FICkge1xyXG4gICAgICAgICAgICAgICAgICAgICRodG1sLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdvdmVyZmxvdycsICcnICkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcyggJ3BhZGRpbmctcmlnaHQnLCAnLT0nICsgZ2V0U2Nyb2xsYmFyV2lkdGgoKSApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBkb2N1bWVudCBldmVudHMuXHJcbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQub2ZmKCAnLicgKyBTVEFURS5pZCApXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcXVldWVkIOKAnGNsb3Nl4oCdIGV2ZW50cy5cclxuICAgICAgICAgICAgICAgIHJldHVybiBQLnRyaWdnZXIoICdjbG9zZScgKVxyXG4gICAgICAgICAgICB9LCAvL2Nsb3NlXHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENsZWFyIHRoZSB2YWx1ZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQLnNldCggJ2NsZWFyJywgbnVsbCwgb3B0aW9ucyApXHJcbiAgICAgICAgICAgIH0sIC8vY2xlYXJcclxuXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU2V0IHNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiggdGhpbmcsIHZhbHVlLCBvcHRpb25zICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0aGluZ0l0ZW0sIHRoaW5nVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpbmdJc09iamVjdCA9ICQuaXNQbGFpbk9iamVjdCggdGhpbmcgKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGluZ09iamVjdCA9IHRoaW5nSXNPYmplY3QgPyB0aGluZyA6IHt9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgdXNhYmxlIG9wdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gdGhpbmdJc09iamVjdCAmJiAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICkgPyB2YWx1ZSA6IG9wdGlvbnMgfHwge31cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGhpbmcgaXNu4oCZdCBhbiBvYmplY3QsIG1ha2UgaXQgb25lLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaW5nSXNPYmplY3QgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0WyB0aGluZyBdID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIHRoaW5ncyBvZiBpdGVtcyB0byBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICggdGhpbmdJdGVtIGluIHRoaW5nT2JqZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JhYiB0aGUgdmFsdWUgb2YgdGhlIHRoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGluZ1ZhbHVlID0gdGhpbmdPYmplY3RbIHRoaW5nSXRlbSBdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCwgaWYgdGhlIGl0ZW0gZXhpc3RzIGFuZCB0aGVyZeKAmXMgYSB2YWx1ZSwgc2V0IGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaW5nSXRlbSBpbiBQLmNvbXBvbmVudC5pdGVtICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ1ZhbHVlID09PSB1bmRlZmluZWQgKSB0aGluZ1ZhbHVlID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5jb21wb25lbnQuc2V0KCB0aGluZ0l0ZW0sIHRoaW5nVmFsdWUsIG9wdGlvbnMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVuLCBjaGVjayB0byB1cGRhdGUgdGhlIGVsZW1lbnQgdmFsdWUgYW5kIGJyb2FkY2FzdCBhIGNoYW5nZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ0l0ZW0gPT0gJ3NlbGVjdCcgfHwgdGhpbmdJdGVtID09ICdjbGVhcicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwoIHRoaW5nSXRlbSA9PSAnY2xlYXInID8gJycgOiBQLmdldCggdGhpbmdJdGVtLCBTRVRUSU5HUy5mb3JtYXQgKSApLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIoICdjaGFuZ2UnIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIGEgbmV3IHBpY2tlci5cclxuICAgICAgICAgICAgICAgICAgICBQLnJlbmRlcigpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgbWV0aG9kIGlzbuKAmXQgbXV0ZWQsIHRyaWdnZXIgcXVldWVkIOKAnHNldOKAnSBldmVudHMgYW5kIHBhc3MgdGhlIGB0aGluZ09iamVjdGAuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5tdXRlZCA/IFAgOiBQLnRyaWdnZXIoICdzZXQnLCB0aGluZ09iamVjdCApXHJcbiAgICAgICAgICAgIH0sIC8vc2V0XHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdldCBzb21ldGhpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oIHRoaW5nLCBmb3JtYXQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJl4oCZcyBzb21ldGhpbmcgdG8gZ2V0LlxyXG4gICAgICAgICAgICAgICAgdGhpbmcgPSB0aGluZyB8fCAndmFsdWUnXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBwaWNrZXIgc3RhdGUgZXhpc3RzLCByZXR1cm4gdGhhdC5cclxuICAgICAgICAgICAgICAgIGlmICggU1RBVEVbIHRoaW5nIF0gIT0gbnVsbCApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU1RBVEVbIHRoaW5nIF1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHN1Ym1pc3Npb24gdmFsdWUsIGlmIHRoYXQuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nID09ICd2YWx1ZVN1Ym1pdCcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBQLl9oaWRkZW4gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQLl9oaWRkZW4udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpbmcgPSAndmFsdWUnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSwgaWYgdGhhdC5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgPT0gJ3ZhbHVlJyApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRUxFTUVOVC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGEgY29tcG9uZW50IGl0ZW0gZXhpc3RzLCByZXR1cm4gdGhhdC5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgaW4gUC5jb21wb25lbnQuaXRlbSApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb3JtYXQgPT0gJ3N0cmluZycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGluZ1ZhbHVlID0gUC5jb21wb25lbnQuZ2V0KCB0aGluZyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGluZ1ZhbHVlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudC5mb3JtYXRzLnRvU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuY29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgZm9ybWF0LCB0aGluZ1ZhbHVlIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUC5jb21wb25lbnQuZ2V0KCB0aGluZyApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIC8vZ2V0XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBCaW5kIGV2ZW50cyBvbiB0aGUgdGhpbmdzLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb246IGZ1bmN0aW9uKCB0aGluZywgbWV0aG9kLCBpbnRlcm5hbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpbmdOYW1lLCB0aGluZ01ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGluZ0lzT2JqZWN0ID0gJC5pc1BsYWluT2JqZWN0KCB0aGluZyApLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0ID0gdGhpbmdJc09iamVjdCA/IHRoaW5nIDoge31cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGhpbmcgaXNu4oCZdCBhbiBvYmplY3QsIG1ha2UgaXQgb25lLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaW5nSXNPYmplY3QgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0WyB0aGluZyBdID0gbWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSB0aGluZ3MgdG8gYmluZCB0by5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0aGluZ05hbWUgaW4gdGhpbmdPYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHcmFiIHRoZSBtZXRob2Qgb2YgdGhlIHRoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGluZ01ldGhvZCA9IHRoaW5nT2JqZWN0WyB0aGluZ05hbWUgXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgd2FzIGFuIGludGVybmFsIGJpbmRpbmcsIHByZWZpeCBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpbnRlcm5hbCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nTmFtZSA9ICdfJyArIHRoaW5nTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHRoaW5nIG1ldGhvZHMgY29sbGVjdGlvbiBleGlzdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNUQVRFLm1ldGhvZHNbIHRoaW5nTmFtZSBdID0gU1RBVEUubWV0aG9kc1sgdGhpbmdOYW1lIF0gfHwgW11cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgbWV0aG9kIHRvIHRoZSByZWxhdGl2ZSBtZXRob2QgY29sbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBVEUubWV0aG9kc1sgdGhpbmdOYW1lIF0ucHVzaCggdGhpbmdNZXRob2QgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUFxyXG4gICAgICAgICAgICB9LCAvL29uXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBVbmJpbmQgZXZlbnRzIG9uIHRoZSB0aGluZ3MuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvZmY6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIHRoaW5nTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lcyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwLCBuYW1lc0NvdW50ID0gbmFtZXMubGVuZ3RoOyBpIDwgbmFtZXNDb3VudDsgaSArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nTmFtZSA9IG5hbWVzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ05hbWUgaW4gU1RBVEUubWV0aG9kcyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIFNUQVRFLm1ldGhvZHNbdGhpbmdOYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBQXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEZpcmUgb2ZmIG1ldGhvZCBldmVudHMuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiggbmFtZSwgZGF0YSApIHtcclxuICAgICAgICAgICAgICAgIHZhciBfdHJpZ2dlciA9IGZ1bmN0aW9uKCBuYW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2RMaXN0ID0gU1RBVEUubWV0aG9kc1sgbmFtZSBdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXRob2RMaXN0ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RMaXN0Lm1hcCggZnVuY3Rpb24oIG1ldGhvZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggbWV0aG9kLCBQLCBbIGRhdGEgXSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RyaWdnZXIoICdfJyArIG5hbWUgKVxyXG4gICAgICAgICAgICAgICAgX3RyaWdnZXIoIG5hbWUgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBcclxuICAgICAgICAgICAgfSAvL3RyaWdnZXJcclxuICAgICAgICB9IC8vUGlja2VySW5zdGFuY2UucHJvdG90eXBlXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JhcCB0aGUgcGlja2VyIGhvbGRlciBjb21wb25lbnRzIHRvZ2V0aGVyLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVXcmFwcGVkQ29tcG9uZW50KCkge1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgd3JhcHBlciBob2xkZXJcclxuICAgICAgICByZXR1cm4gUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBpY2tlciB3cmFwcGVyIG5vZGVcclxuICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgZnJhbWVcclxuICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSggJ2RpdicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBpY2tlciBib3ggbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSggJ2RpdicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbXBvbmVudHMgbm9kZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFAuY29tcG9uZW50Lm5vZGVzKCBTVEFURS5vcGVuICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcGlja2VyIGJveCBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDTEFTU0VTLmJveFxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBpY2tlciB3cmFwIGNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgQ0xBU1NFUy53cmFwXHJcbiAgICAgICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFBpY2tlciBmcmFtZSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgQ0xBU1NFUy5mcmFtZVxyXG4gICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgLy8gUGlja2VyIGhvbGRlciBjbGFzc1xyXG4gICAgICAgICAgICBDTEFTU0VTLmhvbGRlclxyXG4gICAgICAgICkgLy9lbmRyZXR1cm5cclxuICAgIH0gLy9jcmVhdGVXcmFwcGVkQ29tcG9uZW50XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByZXBhcmUgdGhlIGlucHV0IGVsZW1lbnQgd2l0aCBhbGwgYmluZGluZ3MuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVFbGVtZW50KCkge1xyXG5cclxuICAgICAgICAkRUxFTUVOVC5cclxuXHJcbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBwaWNrZXIgZGF0YSBieSBjb21wb25lbnQgbmFtZS5cclxuICAgICAgICAgICAgZGF0YShOQU1FLCBQKS5cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUg4oCcaW5wdXTigJ0gY2xhc3MgbmFtZS5cclxuICAgICAgICAgICAgYWRkQ2xhc3MoQ0xBU1NFUy5pbnB1dCkuXHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRhYmluZGV4LlxyXG4gICAgICAgICAgICBhdHRyKCd0YWJpbmRleCcsIC0xKS5cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGBkYXRhLXZhbHVlYCwgdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudC5cclxuICAgICAgICAgICAgdmFsKCAkRUxFTUVOVC5kYXRhKCd2YWx1ZScpID9cclxuICAgICAgICAgICAgICAgIFAuZ2V0KCdzZWxlY3QnLCBTRVRUSU5HUy5mb3JtYXQpIDpcclxuICAgICAgICAgICAgICAgIEVMRU1FTlQudmFsdWVcclxuICAgICAgICAgICAgKVxyXG5cclxuXHJcbiAgICAgICAgLy8gT25seSBiaW5kIGtleWRvd24gZXZlbnRzIGlmIHRoZSBlbGVtZW50IGlzbuKAmXQgZWRpdGFibGUuXHJcbiAgICAgICAgaWYgKCAhU0VUVElOR1MuZWRpdGFibGUgKSB7XHJcblxyXG4gICAgICAgICAgICAkRUxFTUVOVC5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbiBmb2N1cy9jbGljaywgZm9jdXMgb250byB0aGUgcm9vdCB0byBvcGVuIGl0IHVwLlxyXG4gICAgICAgICAgICAgICAgb24oICdmb2N1cy4nICsgU1RBVEUuaWQgKyAnIGNsaWNrLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcclxuICAgICAgICAgICAgICAgIH0pLlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBrZXlib2FyZCBldmVudCBiYXNlZCBvbiB0aGUgcGlja2VyIGJlaW5nIG9wZW5lZCBvciBub3QuXHJcbiAgICAgICAgICAgICAgICBvbiggJ2tleWRvd24uJyArIFNUQVRFLmlkLCBoYW5kbGVLZXlkb3duRXZlbnQgKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYXJpYSBhdHRyaWJ1dGVzLlxyXG4gICAgICAgIGFyaWEoRUxFTUVOVCwge1xyXG4gICAgICAgICAgICBoYXNwb3B1cDogdHJ1ZSxcclxuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICAgICAgICAgIG93bnM6IEVMRU1FTlQuaWQgKyAnX3Jvb3QnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmVwYXJlIHRoZSByb290IHBpY2tlciBlbGVtZW50IHdpdGggYWxsIGJpbmRpbmdzLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcmVwYXJlRWxlbWVudFJvb3QoKSB7XHJcblxyXG4gICAgICAgIFAuJHJvb3QuXHJcblxyXG4gICAgICAgICAgICBvbih7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIGlPUzguXHJcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBoYW5kbGVLZXlkb3duRXZlbnQsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzb21ldGhpbmcgd2l0aGluIHRoZSByb290IGlzIGZvY3VzZWQsIHN0b3AgZnJvbSBidWJibGluZ1xyXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIGRvYyBhbmQgcmVtb3ZlIHRoZSDigJxmb2N1c2Vk4oCdIHN0YXRlIGZyb20gdGhlIHJvb3QuXHJcbiAgICAgICAgICAgICAgICBmb2N1c2luOiBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5yZW1vdmVDbGFzcyggQ0xBU1NFUy5mb2N1c2VkIClcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNvbWV0aGluZyB3aXRoaW4gdGhlIHJvb3QgaG9sZGVyIGlzIGNsaWNrZWQsIHN0b3AgaXRcclxuICAgICAgICAgICAgICAgIC8vIGZyb20gYnViYmxpbmcgdG8gdGhlIGRvYy5cclxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24gY2xpY2snOiBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0YXJnZXQgaXNu4oCZdCB0aGUgcm9vdCBob2xkZXIgc28gaXQgY2FuIGJ1YmJsZSB1cC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldCAhPSBQLiRyb290LmNoaWxkcmVuKClbIDAgXSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqIEZvciBtb3VzZWRvd24gZXZlbnRzLCBjYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uIGluIG9yZGVyIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcHJldmVudCBjYXNlcyB3aGVyZSBmb2N1cyBpcyBzaGlmdGVkIG9udG8gZXh0ZXJuYWwgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3aGVuIHVzaW5nIHRoaW5ncyBsaWtlIGpRdWVyeSBtb2JpbGUgb3IgTWFnbmlmaWNQb3B1cCAocmVmOiAjMjQ5ICYgIzEyMCkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgQWxzbywgZm9yIEZpcmVmb3gsIGRvbuKAmXQgcHJldmVudCBhY3Rpb24gb24gdGhlIGBvcHRpb25gIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJyAmJiAhJCggdGFyZ2V0ICkuaXMoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBvcHRpb24nICkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmUtZm9jdXMgb250byB0aGUgcm9vdCBzbyB0aGF0IHVzZXJzIGNhbiBjbGljayBhd2F5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGVsZW1lbnRzIGZvY3VzZWQgd2l0aGluIHRoZSBwaWNrZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuXHJcblxyXG4gICAgICAgICAgICAvLyBBZGQvcmVtb3ZlIHRoZSDigJx0YXJnZXTigJ0gY2xhc3Mgb24gZm9jdXMgYW5kIGJsdXIuXHJcbiAgICAgICAgICAgIG9uKHtcclxuICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5hZGRDbGFzcyggQ0xBU1NFUy50YXJnZXQgKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRFTEVNRU5ULnJlbW92ZUNsYXNzKCBDTEFTU0VTLnRhcmdldCApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLlxyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiB0aGUgcGlja2VyIGFuZCBhZGp1c3QgdGhlIHJvb3Qg4oCcZm9jdXNlZOKAnSBzdGF0ZVxyXG4gICAgICAgICAgICBvbiggJ2ZvY3VzLnRvT3BlbicsIGhhbmRsZUZvY3VzVG9PcGVuRXZlbnQgKS5cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGNsaWNrIG9uIGFuIGFjdGlvbmFibGUgZWxlbWVudCwgY2Fycnkgb3V0IHRoZSBhY3Rpb25zLlxyXG4gICAgICAgICAgICBvbiggJ2NsaWNrJywgJ1tkYXRhLXBpY2tdLCBbZGF0YS1uYXZdLCBbZGF0YS1jbGVhcl0sIFtkYXRhLWNsb3NlXScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJCggdGhpcyApLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkdGFyZ2V0LmRhdGEoKSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXREaXNhYmxlZCA9ICR0YXJnZXQuaGFzQ2xhc3MoIENMQVNTRVMubmF2RGlzYWJsZWQgKSB8fCAkdGFyZ2V0Lmhhc0NsYXNzKCBDTEFTU0VTLmRpc2FibGVkICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICogRm9yIElFLCBub24tZm9jdXNhYmxlIGVsZW1lbnRzIGNhbiBiZSBhY3RpdmUgZWxlbWVudHMgYXMgd2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2ODQ1NjEpLlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBnZXRBY3RpdmVFbGVtZW50KClcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudCAmJiAoIGFjdGl2ZUVsZW1lbnQudHlwZSB8fCBhY3RpdmVFbGVtZW50LmhyZWYgKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGl04oCZcyBkaXNhYmxlZCBvciBub3RoaW5nIGluc2lkZSBpcyBhY3RpdmVseSBmb2N1c2VkLCByZS1mb2N1cyB0aGUgZWxlbWVudC5cclxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0RGlzYWJsZWQgfHwgYWN0aXZlRWxlbWVudCAmJiAhJC5jb250YWlucyggUC4kcm9vdFswXSwgYWN0aXZlRWxlbWVudCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QuZXEoMCkuZm9jdXMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBzdXBlcmZpY2lhbGx5IGNoYW5nZWQsIHVwZGF0ZSB0aGUgYGhpZ2hsaWdodGAgYmFzZWQgb24gdGhlIGBuYXZgLlxyXG4gICAgICAgICAgICAgICAgaWYgKCAhdGFyZ2V0RGlzYWJsZWQgJiYgdGFyZ2V0RGF0YS5uYXYgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUC5zZXQoICdoaWdobGlnaHQnLCBQLmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCwgeyBuYXY6IHRhcmdldERhdGEubmF2IH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBwaWNrZWQsIHNldCBgc2VsZWN0YCB0aGVuIGNsb3NlIHdpdGggZm9jdXMuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggIXRhcmdldERpc2FibGVkICYmICdwaWNrJyBpbiB0YXJnZXREYXRhICkge1xyXG4gICAgICAgICAgICAgICAgICAgIFAuc2V0KCAnc2VsZWN0JywgdGFyZ2V0RGF0YS5waWNrIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhIOKAnGNsZWFy4oCdIGJ1dHRvbiBpcyBwcmVzc2VkLCBlbXB0eSB0aGUgdmFsdWVzIGFuZCBjbG9zZSB3aXRoIGZvY3VzLlxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldERhdGEuY2xlYXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUC5jbGVhcigpLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggdGFyZ2V0RGF0YS5jbG9zZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pIC8vUC4kcm9vdFxyXG5cclxuICAgICAgICBhcmlhKCBQLiRyb290WzBdLCAnaGlkZGVuJywgdHJ1ZSApXHJcbiAgICB9XHJcblxyXG5cclxuICAgICAvKipcclxuICAgICAgKiBQcmVwYXJlIHRoZSBoaWRkZW4gaW5wdXQgZWxlbWVudCBhbG9uZyB3aXRoIGFsbCBiaW5kaW5ncy5cclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVFbGVtZW50SGlkZGVuKCkge1xyXG5cclxuICAgICAgICB2YXIgbmFtZVxyXG5cclxuICAgICAgICBpZiAoIFNFVFRJTkdTLmhpZGRlbk5hbWUgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBFTEVNRU5ULm5hbWVcclxuICAgICAgICAgICAgRUxFTUVOVC5uYW1lID0gJydcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBbXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgU0VUVElOR1MuaGlkZGVuUHJlZml4ID09ICdzdHJpbmcnID8gU0VUVElOR1MuaGlkZGVuUHJlZml4IDogJycsXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgU0VUVElOR1MuaGlkZGVuU3VmZml4ID09ICdzdHJpbmcnID8gU0VUVElOR1MuaGlkZGVuU3VmZml4IDogJ19zdWJtaXQnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgbmFtZSA9IG5hbWVbMF0gKyBFTEVNRU5ULm5hbWUgKyBuYW1lWzFdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBQLl9oaWRkZW4gPSAkKFxyXG4gICAgICAgICAgICAnPGlucHV0ICcgK1xyXG4gICAgICAgICAgICAndHlwZT1oaWRkZW4gJyArXHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIG5hbWUgdXNpbmcgdGhlIG9yaWdpbmFsIGlucHV04oCZcyB3aXRoIGEgcHJlZml4IGFuZCBzdWZmaXguXHJcbiAgICAgICAgICAgICduYW1lPVwiJyArIG5hbWUgKyAnXCInICtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIHZhbHVlLCBzZXQgdGhlIGhpZGRlbiB2YWx1ZSBhcyB3ZWxsLlxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAkRUxFTUVOVC5kYXRhKCd2YWx1ZScpIHx8IEVMRU1FTlQudmFsdWUgP1xyXG4gICAgICAgICAgICAgICAgICAgICcgdmFsdWU9XCInICsgUC5nZXQoJ3NlbGVjdCcsIFNFVFRJTkdTLmZvcm1hdFN1Ym1pdCkgKyAnXCInIDpcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICApICtcclxuICAgICAgICAgICAgJz4nXHJcbiAgICAgICAgKVswXVxyXG5cclxuICAgICAgICAkRUxFTUVOVC5cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBjaGFuZ2VzLCB1cGRhdGUgdGhlIGhpZGRlbiBpbnB1dCB3aXRoIHRoZSBjb3JyZWN0IGZvcm1hdC5cclxuICAgICAgICAgICAgb24oJ2NoYW5nZS4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgUC5faGlkZGVuLnZhbHVlID0gRUxFTUVOVC52YWx1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgUC5nZXQoJ3NlbGVjdCcsIFNFVFRJTkdTLmZvcm1hdFN1Ym1pdCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAvLyBJbnNlcnQgdGhlIGhpZGRlbiBpbnB1dCBhcyBzcGVjaWZpZWQgaW4gdGhlIHNldHRpbmdzLlxyXG4gICAgICAgIGlmICggU0VUVElOR1MuY29udGFpbmVyICkgJCggU0VUVElOR1MuY29udGFpbmVyICkuYXBwZW5kKCBQLl9oaWRkZW4gKVxyXG4gICAgICAgIGVsc2UgJEVMRU1FTlQuYWZ0ZXIoIFAuX2hpZGRlbiApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEZvciBpT1M4LlxyXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5ZG93bkV2ZW50KCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdmFyIGtleWNvZGUgPSBldmVudC5rZXlDb2RlLFxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgb25lIG9mIHRoZSBkZWxldGUga2V5cyB3YXMgcHJlc3NlZC5cclxuICAgICAgICAgICAgaXNLZXljb2RlRGVsZXRlID0gL14oOHw0NikkLy50ZXN0KGtleWNvZGUpXHJcblxyXG4gICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBJRSBjbGVhcnMgdGhlIGlucHV0IHZhbHVlIG9uIOKAnGVzY2FwZeKAnS5cclxuICAgICAgICBpZiAoIGtleWNvZGUgPT0gMjcgKSB7XHJcbiAgICAgICAgICAgIFAuY2xvc2UoKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGBzcGFjZWAgb3IgYGRlbGV0ZWAgd2FzIHByZXNzZWQgb3IgdGhlIHBpY2tlciBpcyBjbG9zZWQgd2l0aCBhIGtleSBtb3ZlbWVudC5cclxuICAgICAgICBpZiAoIGtleWNvZGUgPT0gMzIgfHwgaXNLZXljb2RlRGVsZXRlIHx8ICFTVEFURS5vcGVuICYmIFAuY29tcG9uZW50LmtleVtrZXljb2RlXSApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgaXQgZnJvbSBtb3ZpbmcgdGhlIHBhZ2UgYW5kIGJ1YmJsaW5nIHRvIGRvYy5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgYGRlbGV0ZWAgd2FzIHByZXNzZWQsIGNsZWFyIHRoZSB2YWx1ZXMgYW5kIGNsb3NlIHRoZSBwaWNrZXIuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBvcGVuIHRoZSBwaWNrZXIuXHJcbiAgICAgICAgICAgIGlmICggaXNLZXljb2RlRGVsZXRlICkgeyBQLmNsZWFyKCkuY2xvc2UoKSB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBQLm9wZW4oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBTZXBhcmF0ZWQgZm9yIElFXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGb2N1c1RvT3BlbkV2ZW50KCBldmVudCApIHtcclxuXHJcbiAgICAgICAgLy8gU3RvcCB0aGUgZXZlbnQgZnJvbSBwcm9wYWdhdGluZyB0byB0aGUgZG9jLlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgIC8vIElmIGl04oCZcyBhIGZvY3VzIGV2ZW50LCBhZGQgdGhlIOKAnGZvY3VzZWTigJ0gY2xhc3MgdG8gdGhlIHJvb3QuXHJcbiAgICAgICAgaWYgKCBldmVudC50eXBlID09ICdmb2N1cycgKSB7XHJcbiAgICAgICAgICAgIFAuJHJvb3QuYWRkQ2xhc3MoIENMQVNTRVMuZm9jdXNlZCApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBbmQgdGhlbiBmaW5hbGx5IG9wZW4gdGhlIHBpY2tlci5cclxuICAgICAgICBQLm9wZW4oKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZXR1cm4gYSBuZXcgcGlja2VyIGluc3RhbmNlLlxyXG4gICAgcmV0dXJuIG5ldyBQaWNrZXJJbnN0YW5jZSgpXHJcbn0gLy9QaWNrZXJDb25zdHJ1Y3RvclxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgY2xhc3NlcyBhbmQgcHJlZml4IHRvIHVzZSBmb3IgdGhlIEhUTUwgY2xhc3Nlcy5cclxuICovXHJcblBpY2tlckNvbnN0cnVjdG9yLmtsYXNzZXMgPSBmdW5jdGlvbiggcHJlZml4ICkge1xyXG4gICAgcHJlZml4ID0gcHJlZml4IHx8ICdwaWNrZXInXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBwaWNrZXI6IHByZWZpeCxcclxuICAgICAgICBvcGVuZWQ6IHByZWZpeCArICctLW9wZW5lZCcsXHJcbiAgICAgICAgZm9jdXNlZDogcHJlZml4ICsgJy0tZm9jdXNlZCcsXHJcblxyXG4gICAgICAgIGlucHV0OiBwcmVmaXggKyAnX19pbnB1dCcsXHJcbiAgICAgICAgYWN0aXZlOiBwcmVmaXggKyAnX19pbnB1dC0tYWN0aXZlJyxcclxuICAgICAgICB0YXJnZXQ6IHByZWZpeCArICdfX2lucHV0LS10YXJnZXQnLFxyXG5cclxuICAgICAgICBob2xkZXI6IHByZWZpeCArICdfX2hvbGRlcicsXHJcblxyXG4gICAgICAgIGZyYW1lOiBwcmVmaXggKyAnX19mcmFtZScsXHJcbiAgICAgICAgd3JhcDogcHJlZml4ICsgJ19fd3JhcCcsXHJcblxyXG4gICAgICAgIGJveDogcHJlZml4ICsgJ19fYm94J1xyXG4gICAgfVxyXG59IC8vUGlja2VyQ29uc3RydWN0b3Iua2xhc3Nlc1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGRlZmF1bHQgdGhlbWUgaXMgYmVpbmcgdXNlZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzVXNpbmdEZWZhdWx0VGhlbWUoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgdmFyIHRoZW1lLFxyXG4gICAgICAgIHByb3AgPSAncG9zaXRpb24nXHJcblxyXG4gICAgLy8gRm9yIElFLlxyXG4gICAgaWYgKCBlbGVtZW50LmN1cnJlbnRTdHlsZSApIHtcclxuICAgICAgICB0aGVtZSA9IGVsZW1lbnQuY3VycmVudFN0eWxlW3Byb3BdXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIG5vcm1hbCBicm93c2Vycy5cclxuICAgIGVsc2UgaWYgKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSApIHtcclxuICAgICAgICB0aGVtZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW1lbnQgKVtwcm9wXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGVtZSA9PSAnZml4ZWQnXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgd2lkdGggb2YgdGhlIGJyb3dzZXLigJlzIHNjcm9sbGJhci5cclxuICogVGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL1ZvZGthQmVhcnMvUmVtb2RhbC9ibG9iL21hc3Rlci9zcmMvanF1ZXJ5LnJlbW9kYWwuanNcclxuICovXHJcbmZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xyXG5cclxuICAgIGlmICggJGh0bWwuaGVpZ2h0KCkgPD0gJHdpbmRvdy5oZWlnaHQoKSApIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciAkb3V0ZXIgPSAkKCAnPGRpdiBzdHlsZT1cInZpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjEwMHB4XCIgLz4nICkuXHJcbiAgICAgICAgYXBwZW5kVG8oICdib2R5JyApXHJcblxyXG4gICAgLy8gR2V0IHRoZSB3aWR0aCB3aXRob3V0IHNjcm9sbGJhcnMuXHJcbiAgICB2YXIgd2lkdGhXaXRob3V0U2Nyb2xsID0gJG91dGVyWzBdLm9mZnNldFdpZHRoXHJcblxyXG4gICAgLy8gRm9yY2UgYWRkaW5nIHNjcm9sbGJhcnMuXHJcbiAgICAkb3V0ZXIuY3NzKCAnb3ZlcmZsb3cnLCAnc2Nyb2xsJyApXHJcblxyXG4gICAgLy8gQWRkIHRoZSBpbm5lciBkaXYuXHJcbiAgICB2YXIgJGlubmVyID0gJCggJzxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz4nICkuYXBwZW5kVG8oICRvdXRlciApXHJcblxyXG4gICAgLy8gR2V0IHRoZSB3aWR0aCB3aXRoIHNjcm9sbGJhcnMuXHJcbiAgICB2YXIgd2lkdGhXaXRoU2Nyb2xsID0gJGlubmVyWzBdLm9mZnNldFdpZHRoXHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBkaXZzLlxyXG4gICAgJG91dGVyLnJlbW92ZSgpXHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHdpZHRocy5cclxuICAgIHJldHVybiB3aWR0aFdpdGhvdXRTY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUGlja2VyQ29uc3RydWN0b3IgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5QaWNrZXJDb25zdHJ1Y3Rvci5fID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgZ3JvdXAgb2Ygbm9kZXMuIEV4cGVjdHM6XHJcbiAgICAgKiBgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaW46ICAgIHtJbnRlZ2VyfSxcclxuICAgICAgICAgICAgbWF4OiAgICB7SW50ZWdlcn0sXHJcbiAgICAgICAgICAgIGk6ICAgICAge0ludGVnZXJ9LFxyXG4gICAgICAgICAgICBub2RlOiAgIHtTdHJpbmd9LFxyXG4gICAgICAgICAgICBpdGVtOiAgIHtGdW5jdGlvbn1cclxuICAgICAgICB9XHJcbiAgICAgKiBgXHJcbiAgICAgKi9cclxuICAgIGdyb3VwOiBmdW5jdGlvbiggZ3JvdXBPYmplY3QgKSB7XHJcblxyXG4gICAgICAgIHZhclxyXG4gICAgICAgICAgICAvLyBTY29wZSBmb3IgdGhlIGxvb3BlZCBvYmplY3RcclxuICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlLFxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBub2RlcyBsaXN0XHJcbiAgICAgICAgICAgIG5vZGVzTGlzdCA9ICcnLFxyXG5cclxuICAgICAgICAgICAgLy8gVGhlIGNvdW50ZXIgc3RhcnRzIGZyb20gdGhlIGBtaW5gXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGdyb3VwT2JqZWN0Lm1pbiwgZ3JvdXBPYmplY3QgKVxyXG5cclxuXHJcbiAgICAgICAgLy8gTG9vcCBmcm9tIHRoZSBgbWluYCB0byBgbWF4YCwgaW5jcmVtZW50aW5nIGJ5IGBpYFxyXG4gICAgICAgIGZvciAoIDsgY291bnRlciA8PSBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGdyb3VwT2JqZWN0Lm1heCwgZ3JvdXBPYmplY3QsIFsgY291bnRlciBdICk7IGNvdW50ZXIgKz0gZ3JvdXBPYmplY3QuaSApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGBpdGVtYCBmdW5jdGlvbiB3aXRoaW4gc2NvcGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICAgICAgICBsb29wT2JqZWN0U2NvcGUgPSBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGdyb3VwT2JqZWN0Lml0ZW0sIGdyb3VwT2JqZWN0LCBbIGNvdW50ZXIgXSApXHJcblxyXG4gICAgICAgICAgICAvLyBTcGxpY2UgdGhlIHN1Ymdyb3VwIGFuZCBjcmVhdGUgbm9kZXMgb3V0IG9mIHRoZSBzdWIgbm9kZXNcclxuICAgICAgICAgICAgbm9kZXNMaXN0ICs9IFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZShcclxuICAgICAgICAgICAgICAgIGdyb3VwT2JqZWN0Lm5vZGUsXHJcbiAgICAgICAgICAgICAgICBsb29wT2JqZWN0U2NvcGVbIDAgXSwgICAvLyB0aGUgbm9kZVxyXG4gICAgICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlWyAxIF0sICAgLy8gdGhlIGNsYXNzZXNcclxuICAgICAgICAgICAgICAgIGxvb3BPYmplY3RTY29wZVsgMiBdICAgIC8vIHRoZSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJldHVybiB0aGUgbGlzdCBvZiBub2Rlc1xyXG4gICAgICAgIHJldHVybiBub2Rlc0xpc3RcclxuICAgIH0sIC8vZ3JvdXBcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBkb20gbm9kZSBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgbm9kZTogZnVuY3Rpb24oIHdyYXBwZXIsIGl0ZW0sIGtsYXNzLCBhdHRyaWJ1dGUgKSB7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBpdGVtIGlzIGZhbHNlLXksIGp1c3QgcmV0dXJuIGFuIGVtcHR5IHN0cmluZ1xyXG4gICAgICAgIGlmICggIWl0ZW0gKSByZXR1cm4gJydcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGl0ZW0gaXMgYW4gYXJyYXksIGRvIGEgam9pblxyXG4gICAgICAgIGl0ZW0gPSAkLmlzQXJyYXkoIGl0ZW0gKSA/IGl0ZW0uam9pbiggJycgKSA6IGl0ZW1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRoZSBjbGFzc1xyXG4gICAgICAgIGtsYXNzID0ga2xhc3MgPyAnIGNsYXNzPVwiJyArIGtsYXNzICsgJ1wiJyA6ICcnXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBhbnkgYXR0cmlidXRlc1xyXG4gICAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZSA/ICcgJyArIGF0dHJpYnV0ZSA6ICcnXHJcblxyXG4gICAgICAgIC8vIFJldHVybiB0aGUgd3JhcHBlZCBpdGVtXHJcbiAgICAgICAgcmV0dXJuICc8JyArIHdyYXBwZXIgKyBrbGFzcyArIGF0dHJpYnV0ZSArICc+JyArIGl0ZW0gKyAnPC8nICsgd3JhcHBlciArICc+J1xyXG4gICAgfSwgLy9ub2RlXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGVhZCBudW1iZXJzIGJlbG93IDEwIHdpdGggYSB6ZXJvLlxyXG4gICAgICovXHJcbiAgICBsZWFkOiBmdW5jdGlvbiggbnVtYmVyICkge1xyXG4gICAgICAgIHJldHVybiAoIG51bWJlciA8IDEwID8gJzAnOiAnJyApICsgbnVtYmVyXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgYSBmdW5jdGlvbiBvdGhlcndpc2UgcmV0dXJuIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oIGNhbGxiYWNrLCBzY29wZSwgYXJncyApIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjay5hcHBseSggc2NvcGUsIGFyZ3MgfHwgW10gKSA6IGNhbGxiYWNrXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRoZSBzZWNvbmQgY2hhcmFjdGVyIGlzIGEgZGlnaXQsIGxlbmd0aCBpcyAyIG90aGVyd2lzZSAxLlxyXG4gICAgICovXHJcbiAgICBkaWdpdHM6IGZ1bmN0aW9uKCBzdHJpbmcgKSB7XHJcbiAgICAgICAgcmV0dXJuICggL1xcZC8gKS50ZXN0KCBzdHJpbmdbIDEgXSApID8gMiA6IDFcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVsbCBpZiBzb21ldGhpbmcgaXMgYSBkYXRlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgaXNEYXRlOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwoIHZhbHVlICkuaW5kZXhPZiggJ0RhdGUnICkgPiAtMSAmJiB0aGlzLmlzSW50ZWdlciggdmFsdWUuZ2V0RGF0ZSgpIClcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVsbCBpZiBzb21ldGhpbmcgaXMgYW4gaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgaXNJbnRlZ2VyOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwoIHZhbHVlICkuaW5kZXhPZiggJ051bWJlcicgKSA+IC0xICYmIHZhbHVlICUgMSA9PT0gMFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgQVJJQSBhdHRyaWJ1dGUgc3RyaW5ncy5cclxuICAgICAqL1xyXG4gICAgYXJpYUF0dHI6IGFyaWFBdHRyXHJcbn0gLy9QaWNrZXJDb25zdHJ1Y3Rvci5fXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHRlbmQgdGhlIHBpY2tlciB3aXRoIGEgY29tcG9uZW50IGFuZCBkZWZhdWx0cy5cclxuICovXHJcblBpY2tlckNvbnN0cnVjdG9yLmV4dGVuZCA9IGZ1bmN0aW9uKCBuYW1lLCBDb21wb25lbnQgKSB7XHJcblxyXG4gICAgLy8gRXh0ZW5kIGpRdWVyeS5cclxuICAgICQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBvcHRpb25zLCBhY3Rpb24gKSB7XHJcblxyXG4gICAgICAgIC8vIEdyYWIgdGhlIGNvbXBvbmVudCBkYXRhLlxyXG4gICAgICAgIHZhciBjb21wb25lbnREYXRhID0gdGhpcy5kYXRhKCBuYW1lIClcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHBpY2tlciBpcyByZXF1ZXN0ZWQsIHJldHVybiB0aGUgZGF0YSBvYmplY3QuXHJcbiAgICAgICAgaWYgKCBvcHRpb25zID09ICdwaWNrZXInICkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50RGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGNvbXBvbmVudCBkYXRhIGV4aXN0cyBhbmQgYG9wdGlvbnNgIGlzIGEgc3RyaW5nLCBjYXJyeSBvdXQgdGhlIGFjdGlvbi5cclxuICAgICAgICBpZiAoIGNvbXBvbmVudERhdGEgJiYgdHlwZW9mIG9wdGlvbnMgPT0gJ3N0cmluZycgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGNvbXBvbmVudERhdGFbIG9wdGlvbnMgXSwgY29tcG9uZW50RGF0YSwgWyBhY3Rpb24gXSApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCBlYWNoIG1hdGNoZWQgZWxlbWVudCBhbmQgaWYgdGhlIGNvbXBvbmVudFxyXG4gICAgICAgIC8vIGRvZXNu4oCZdCBleGlzdCwgY3JlYXRlIGEgbmV3IHBpY2tlciB1c2luZyBgdGhpc2AgZWxlbWVudFxyXG4gICAgICAgIC8vIGFuZCBtZXJnaW5nIHRoZSBkZWZhdWx0cyBhbmQgb3B0aW9ucyB3aXRoIGEgZGVlcCBjb3B5LlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKCB0aGlzIClcclxuICAgICAgICAgICAgaWYgKCAhJHRoaXMuZGF0YSggbmFtZSApICkge1xyXG4gICAgICAgICAgICAgICAgbmV3IFBpY2tlckNvbnN0cnVjdG9yKCB0aGlzLCBuYW1lLCBDb21wb25lbnQsIG9wdGlvbnMgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzLlxyXG4gICAgJC5mblsgbmFtZSBdLmRlZmF1bHRzID0gQ29tcG9uZW50LmRlZmF1bHRzXHJcbn0gLy9QaWNrZXJDb25zdHJ1Y3Rvci5leHRlbmRcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXJpYShlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XHJcbiAgICBpZiAoICQuaXNQbGFpbk9iamVjdChhdHRyaWJ1dGUpICkge1xyXG4gICAgICAgIGZvciAoIHZhciBrZXkgaW4gYXR0cmlidXRlICkge1xyXG4gICAgICAgICAgICBhcmlhU2V0KGVsZW1lbnQsIGtleSwgYXR0cmlidXRlW2tleV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXJpYVNldChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFyaWFTZXQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgKGF0dHJpYnV0ZSA9PSAncm9sZScgPyAnJyA6ICdhcmlhLScpICsgYXR0cmlidXRlLFxyXG4gICAgICAgIHZhbHVlXHJcbiAgICApXHJcbn1cclxuZnVuY3Rpb24gYXJpYUF0dHIoYXR0cmlidXRlLCBkYXRhKSB7XHJcbiAgICBpZiAoICEkLmlzUGxhaW5PYmplY3QoYXR0cmlidXRlKSApIHtcclxuICAgICAgICBhdHRyaWJ1dGUgPSB7IGF0dHJpYnV0ZTogZGF0YSB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0gJydcclxuICAgIGZvciAoIHZhciBrZXkgaW4gYXR0cmlidXRlICkge1xyXG4gICAgICAgIHZhciBhdHRyID0gKGtleSA9PSAncm9sZScgPyAnJyA6ICdhcmlhLScpICsga2V5LFxyXG4gICAgICAgICAgICBhdHRyVmFsID0gYXR0cmlidXRlW2tleV1cclxuICAgICAgICBkYXRhICs9IGF0dHJWYWwgPT0gbnVsbCA/ICcnIDogYXR0ciArICc9XCInICsgYXR0cmlidXRlW2tleV0gKyAnXCInXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG4vLyBJRTggYnVnIHRocm93cyBhbiBlcnJvciBmb3IgYWN0aXZlRWxlbWVudHMgd2l0aGluIGlmcmFtZXMuXHJcbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50XHJcbiAgICB9IGNhdGNoICggZXJyICkgeyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRXhwb3NlIHRoZSBwaWNrZXIgY29uc3RydWN0b3IuXHJcbnJldHVybiBQaWNrZXJDb25zdHJ1Y3RvclxyXG5cclxuXHJcbn0pKTtcclxuXHJcblxyXG47LyohXHJcbiAqIERhdGUgcGlja2VyIGZvciBwaWNrYWRhdGUuanMgdjMuNS4wXHJcbiAqIGh0dHA6Ly9hbXN1bC5naXRodWIuaW8vcGlja2FkYXRlLmpzL2RhdGUuaHRtXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICggZmFjdG9yeSApIHtcclxuXHJcbiAgICAvLyBBTUQuXHJcbiAgICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kIClcclxuICAgICAgICBkZWZpbmUoIFsncGlja2VyJywgJ2pxdWVyeSddLCBmYWN0b3J5IClcclxuXHJcbiAgICAvLyBOb2RlLmpzL2Jyb3dzZXJpZnkuXHJcbiAgICBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgKVxyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggcmVxdWlyZSgnLi9waWNrZXIuanMnKSwgcmVxdWlyZSgnanF1ZXJ5JykgKVxyXG5cclxuICAgIC8vIEJyb3dzZXIgZ2xvYmFscy5cclxuICAgIGVsc2UgZmFjdG9yeSggUGlja2VyLCBqUXVlcnkgKVxyXG5cclxufShmdW5jdGlvbiggUGlja2VyLCAkICkge1xyXG5cclxuXHJcbi8qKlxyXG4gKiBHbG9iYWxzIGFuZCBjb25zdGFudHNcclxuICovXHJcbnZhciBEQVlTX0lOX1dFRUsgPSA3LFxyXG4gICAgV0VFS1NfSU5fQ0FMRU5EQVIgPSA2LFxyXG4gICAgXyA9IFBpY2tlci5fXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgZGF0ZSBwaWNrZXIgY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIERhdGVQaWNrZXIoIHBpY2tlciwgc2V0dGluZ3MgKSB7XHJcblxyXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcclxuICAgICAgICBlbGVtZW50ID0gcGlja2VyLiRub2RlWyAwIF0sXHJcbiAgICAgICAgZWxlbWVudFZhbHVlID0gZWxlbWVudC52YWx1ZSxcclxuICAgICAgICBlbGVtZW50RGF0YVZhbHVlID0gcGlja2VyLiRub2RlLmRhdGEoICd2YWx1ZScgKSxcclxuICAgICAgICB2YWx1ZVN0cmluZyA9IGVsZW1lbnREYXRhVmFsdWUgfHwgZWxlbWVudFZhbHVlLFxyXG4gICAgICAgIGZvcm1hdFN0cmluZyA9IGVsZW1lbnREYXRhVmFsdWUgPyBzZXR0aW5ncy5mb3JtYXRTdWJtaXQgOiBzZXR0aW5ncy5mb3JtYXQsXHJcbiAgICAgICAgaXNSVEwgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmN1cnJlbnRTdHlsZSA/XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIElFLlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50U3R5bGUuZGlyZWN0aW9uID09ICdydGwnIDpcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGb3Igbm9ybWFsIGJyb3dzZXJzLlxyXG4gICAgICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSggcGlja2VyLiRyb290WzBdICkuZGlyZWN0aW9uID09ICdydGwnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGNhbGVuZGFyLnNldHRpbmdzID0gc2V0dGluZ3NcclxuICAgIGNhbGVuZGFyLiRub2RlID0gcGlja2VyLiRub2RlXHJcblxyXG4gICAgLy8gVGhlIHF1ZXVlIG9mIG1ldGhvZHMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gYnVpbGQgaXRlbSBvYmplY3RzLlxyXG4gICAgY2FsZW5kYXIucXVldWUgPSB7XHJcbiAgICAgICAgbWluOiAnbWVhc3VyZSBjcmVhdGUnLFxyXG4gICAgICAgIG1heDogJ21lYXN1cmUgY3JlYXRlJyxcclxuICAgICAgICBub3c6ICdub3cgY3JlYXRlJyxcclxuICAgICAgICBzZWxlY3Q6ICdwYXJzZSBjcmVhdGUgdmFsaWRhdGUnLFxyXG4gICAgICAgIGhpZ2hsaWdodDogJ3BhcnNlIG5hdmlnYXRlIGNyZWF0ZSB2YWxpZGF0ZScsXHJcbiAgICAgICAgdmlldzogJ3BhcnNlIGNyZWF0ZSB2YWxpZGF0ZSB2aWV3c2V0JyxcclxuICAgICAgICBkaXNhYmxlOiAnZGVhY3RpdmF0ZScsXHJcbiAgICAgICAgZW5hYmxlOiAnYWN0aXZhdGUnXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGNvbXBvbmVudCdzIGl0ZW0gb2JqZWN0LlxyXG4gICAgY2FsZW5kYXIuaXRlbSA9IHt9XHJcblxyXG4gICAgY2FsZW5kYXIuaXRlbS5jbGVhciA9IG51bGxcclxuICAgIGNhbGVuZGFyLml0ZW0uZGlzYWJsZSA9ICggc2V0dGluZ3MuZGlzYWJsZSB8fCBbXSApLnNsaWNlKCAwIClcclxuICAgIGNhbGVuZGFyLml0ZW0uZW5hYmxlID0gLShmdW5jdGlvbiggY29sbGVjdGlvbkRpc2FibGVkICkge1xyXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uRGlzYWJsZWRbIDAgXSA9PT0gdHJ1ZSA/IGNvbGxlY3Rpb25EaXNhYmxlZC5zaGlmdCgpIDogLTFcclxuICAgIH0pKCBjYWxlbmRhci5pdGVtLmRpc2FibGUgKVxyXG5cclxuICAgIGNhbGVuZGFyLlxyXG4gICAgICAgIHNldCggJ21pbicsIHNldHRpbmdzLm1pbiApLlxyXG4gICAgICAgIHNldCggJ21heCcsIHNldHRpbmdzLm1heCApLlxyXG4gICAgICAgIHNldCggJ25vdycgKVxyXG5cclxuICAgIC8vIFdoZW4gdGhlcmXigJlzIGEgdmFsdWUsIHNldCB0aGUgYHNlbGVjdGAsIHdoaWNoIGluIHR1cm5cclxuICAgIC8vIGFsc28gc2V0cyB0aGUgYGhpZ2hsaWdodGAgYW5kIGB2aWV3YC5cclxuICAgIGlmICggdmFsdWVTdHJpbmcgKSB7XHJcbiAgICAgICAgY2FsZW5kYXIuc2V0KCAnc2VsZWN0JywgdmFsdWVTdHJpbmcsIHsgZm9ybWF0OiBmb3JtYXRTdHJpbmcgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGVyZeKAmXMgbm8gdmFsdWUsIGRlZmF1bHQgdG8gaGlnaGxpZ2h0aW5nIOKAnHRvZGF54oCdLlxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2FsZW5kYXIuXHJcbiAgICAgICAgICAgIHNldCggJ3NlbGVjdCcsIG51bGwgKS5cclxuICAgICAgICAgICAgc2V0KCAnaGlnaGxpZ2h0JywgY2FsZW5kYXIuaXRlbS5ub3cgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBUaGUga2V5Y29kZSB0byBtb3ZlbWVudCBtYXBwaW5nLlxyXG4gICAgY2FsZW5kYXIua2V5ID0ge1xyXG4gICAgICAgIDQwOiA3LCAvLyBEb3duXHJcbiAgICAgICAgMzg6IC03LCAvLyBVcFxyXG4gICAgICAgIDM5OiBmdW5jdGlvbigpIHsgcmV0dXJuIGlzUlRMKCkgPyAtMSA6IDEgfSwgLy8gUmlnaHRcclxuICAgICAgICAzNzogZnVuY3Rpb24oKSB7IHJldHVybiBpc1JUTCgpID8gMSA6IC0xIH0sIC8vIExlZnRcclxuICAgICAgICBnbzogZnVuY3Rpb24oIHRpbWVDaGFuZ2UgKSB7XHJcbiAgICAgICAgICAgIHZhciBoaWdobGlnaHRlZE9iamVjdCA9IGNhbGVuZGFyLml0ZW0uaGlnaGxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKCBoaWdobGlnaHRlZE9iamVjdC55ZWFyLCBoaWdobGlnaHRlZE9iamVjdC5tb250aCwgaGlnaGxpZ2h0ZWRPYmplY3QuZGF0ZSArIHRpbWVDaGFuZ2UgKVxyXG4gICAgICAgICAgICBjYWxlbmRhci5zZXQoXHJcbiAgICAgICAgICAgICAgICAnaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgIHRhcmdldERhdGUsXHJcbiAgICAgICAgICAgICAgICB7IGludGVydmFsOiB0aW1lQ2hhbmdlIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBCaW5kIHNvbWUgcGlja2VyIGV2ZW50cy5cclxuICAgIHBpY2tlci5cclxuICAgICAgICBvbiggJ3JlbmRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0TW9udGggKS5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKCB2YWx1ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBwaWNrZXIuc2V0KCAnaGlnaGxpZ2h0JywgWyBwaWNrZXIuZ2V0KCAndmlldycgKS55ZWFyLCB2YWx1ZSwgcGlja2VyLmdldCggJ2hpZ2hsaWdodCcgKS5kYXRlIF0gKVxyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RNb250aCApLnRyaWdnZXIoICdmb2N1cycgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0WWVhciApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoIHZhbHVlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci5zZXQoICdoaWdobGlnaHQnLCBbIHZhbHVlLCBwaWNrZXIuZ2V0KCAndmlldycgKS5tb250aCwgcGlja2VyLmdldCggJ2hpZ2hsaWdodCcgKS5kYXRlIF0gKVxyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RZZWFyICkudHJpZ2dlciggJ2ZvY3VzJyApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgMSApLlxyXG4gICAgICAgIG9uKCAnb3BlbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaW5jbHVkZVRvZGF5ID0gJydcclxuICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5kaXNhYmxlZCggY2FsZW5kYXIuZ2V0KCdub3cnKSApICkge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVRvZGF5ID0gJzpub3QoLicgKyBzZXR0aW5ncy5rbGFzcy5idXR0b25Ub2RheSArICcpJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnYnV0dG9uJyArIGluY2x1ZGVUb2RheSArICcsIHNlbGVjdCcgKS5hdHRyKCAnZGlzYWJsZWQnLCBmYWxzZSApXHJcbiAgICAgICAgfSwgMSApLlxyXG4gICAgICAgIG9uKCAnY2xvc2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGlja2VyLiRyb290LmZpbmQoICdidXR0b24sIHNlbGVjdCcgKS5hdHRyKCAnZGlzYWJsZWQnLCB0cnVlIClcclxuICAgICAgICB9LCAxIClcclxuXHJcbn0gLy9EYXRlUGlja2VyXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldCBhIGRhdGVwaWNrZXIgaXRlbSBvYmplY3QuXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcclxuICAgICAgICBjYWxlbmRhckl0ZW0gPSBjYWxlbmRhci5pdGVtXHJcblxyXG4gICAgLy8gSWYgdGhlIHZhbHVlIGlzIGBudWxsYCBqdXN0IHNldCBpdCBpbW1lZGlhdGVseS5cclxuICAgIGlmICggdmFsdWUgPT09IG51bGwgKSB7XHJcbiAgICAgICAgaWYgKCB0eXBlID09ICdjbGVhcicgKSB0eXBlID0gJ3NlbGVjdCdcclxuICAgICAgICBjYWxlbmRhckl0ZW1bIHR5cGUgXSA9IHZhbHVlXHJcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggdGhlIHF1ZXVlIG9mIG1ldGhvZHMsIGFuZCBpbnZva2UgdGhlIGZ1bmN0aW9ucy5cclxuICAgIC8vIFVwZGF0ZSB0aGlzIGFzIHRoZSB0aW1lIHVuaXQsIGFuZCBzZXQgdGhlIGZpbmFsIHZhbHVlIGFzIHRoaXMgaXRlbS5cclxuICAgIC8vICogSW4gdGhlIGNhc2Ugb2YgYGVuYWJsZWAsIGtlZXAgdGhlIHF1ZXVlIGJ1dCBzZXQgYGRpc2FibGVgIGluc3RlYWQuXHJcbiAgICAvLyAgIEFuZCBpbiB0aGUgY2FzZSBvZiBgZmxpcGAsIGtlZXAgdGhlIHF1ZXVlIGJ1dCBzZXQgYGVuYWJsZWAgaW5zdGVhZC5cclxuICAgIGNhbGVuZGFySXRlbVsgKCB0eXBlID09ICdlbmFibGUnID8gJ2Rpc2FibGUnIDogdHlwZSA9PSAnZmxpcCcgPyAnZW5hYmxlJyA6IHR5cGUgKSBdID0gY2FsZW5kYXIucXVldWVbIHR5cGUgXS5zcGxpdCggJyAnICkubWFwKCBmdW5jdGlvbiggbWV0aG9kICkge1xyXG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXJbIG1ldGhvZCBdKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9KS5wb3AoKVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gY2FzY2FkZSB0aHJvdWdoIG1vcmUgdXBkYXRlcy5cclxuICAgIGlmICggdHlwZSA9PSAnc2VsZWN0JyApIHtcclxuICAgICAgICBjYWxlbmRhci5zZXQoICdoaWdobGlnaHQnLCBjYWxlbmRhckl0ZW0uc2VsZWN0LCBvcHRpb25zIClcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0eXBlID09ICdoaWdobGlnaHQnICkge1xyXG4gICAgICAgIGNhbGVuZGFyLnNldCggJ3ZpZXcnLCBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0LCBvcHRpb25zIClcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0eXBlLm1hdGNoKCAvXihmbGlwfG1pbnxtYXh8ZGlzYWJsZXxlbmFibGUpJC8gKSApIHtcclxuICAgICAgICBpZiAoIGNhbGVuZGFySXRlbS5zZWxlY3QgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGNhbGVuZGFySXRlbS5zZWxlY3QgKSApIHtcclxuICAgICAgICAgICAgY2FsZW5kYXIuc2V0KCAnc2VsZWN0JywgY2FsZW5kYXJJdGVtLnNlbGVjdCwgb3B0aW9ucyApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCAmJiBjYWxlbmRhci5kaXNhYmxlZCggY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCApICkge1xyXG4gICAgICAgICAgICBjYWxlbmRhci5zZXQoICdoaWdobGlnaHQnLCBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0LCBvcHRpb25zIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbGVuZGFyXHJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5zZXRcclxuXHJcblxyXG4vKipcclxuICogR2V0IGEgZGF0ZXBpY2tlciBpdGVtIG9iamVjdC5cclxuICovXHJcbkRhdGVQaWNrZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCB0eXBlICkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbVsgdHlwZSBdXHJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5nZXRcclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgcGlja2VyIGRhdGUgb2JqZWN0LlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xyXG5cclxuICAgIHZhciBpc0luZmluaXRlVmFsdWUsXHJcbiAgICAgICAgY2FsZW5kYXIgPSB0aGlzXHJcblxyXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIHZhbHVlLCB1c2UgdGhlIHR5cGUgYXMgdGhlIHZhbHVlLlxyXG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdHlwZSA6IHZhbHVlXHJcblxyXG5cclxuICAgIC8vIElmIGl04oCZcyBpbmZpbml0eSwgdXBkYXRlIHRoZSB2YWx1ZS5cclxuICAgIGlmICggdmFsdWUgPT0gLUluZmluaXR5IHx8IHZhbHVlID09IEluZmluaXR5ICkge1xyXG4gICAgICAgIGlzSW5maW5pdGVWYWx1ZSA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXTigJlzIGFuIG9iamVjdCwgdXNlIHRoZSBuYXRpdmUgZGF0ZSBvYmplY3QuXHJcbiAgICBlbHNlIGlmICggJC5pc1BsYWluT2JqZWN0KCB2YWx1ZSApICYmIF8uaXNJbnRlZ2VyKCB2YWx1ZS5waWNrICkgKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5vYmpcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdOKAmXMgYW4gYXJyYXksIGNvbnZlcnQgaXQgaW50byBhIGRhdGUgYW5kIG1ha2Ugc3VyZVxyXG4gICAgLy8gdGhhdCBpdOKAmXMgYSB2YWxpZCBkYXRlIOKAkyBvdGhlcndpc2UgZGVmYXVsdCB0byB0b2RheS5cclxuICAgIGVsc2UgaWYgKCAkLmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSggdmFsdWVbIDAgXSwgdmFsdWVbIDEgXSwgdmFsdWVbIDIgXSApXHJcbiAgICAgICAgdmFsdWUgPSBfLmlzRGF0ZSggdmFsdWUgKSA/IHZhbHVlIDogY2FsZW5kYXIuY3JlYXRlKCkub2JqXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXTigJlzIGEgbnVtYmVyIG9yIGRhdGUgb2JqZWN0LCBtYWtlIGEgbm9ybWFsaXplZCBkYXRlLlxyXG4gICAgZWxzZSBpZiAoIF8uaXNJbnRlZ2VyKCB2YWx1ZSApIHx8IF8uaXNEYXRlKCB2YWx1ZSApICkge1xyXG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIubm9ybWFsaXplKCBuZXcgRGF0ZSggdmFsdWUgKSwgb3B0aW9ucyApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXTigJlzIGEgbGl0ZXJhbCB0cnVlIG9yIGFueSBvdGhlciBjYXNlLCBzZXQgaXQgdG8gbm93LlxyXG4gICAgZWxzZSAvKmlmICggdmFsdWUgPT09IHRydWUgKSovIHtcclxuICAgICAgICB2YWx1ZSA9IGNhbGVuZGFyLm5vdyggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgY29tcGlsZWQgb2JqZWN0LlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB5ZWFyOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBtb250aDogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldE1vbnRoKCksXHJcbiAgICAgICAgZGF0ZTogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldERhdGUoKSxcclxuICAgICAgICBkYXk6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZS5nZXREYXkoKSxcclxuICAgICAgICBvYmo6IGlzSW5maW5pdGVWYWx1ZSB8fCB2YWx1ZSxcclxuICAgICAgICBwaWNrOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0VGltZSgpXHJcbiAgICB9XHJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5jcmVhdGVcclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgcmFuZ2UgbGltaXQgb2JqZWN0IHVzaW5nIGFuIGFycmF5LCBkYXRlIG9iamVjdCxcclxuICogbGl0ZXJhbCDigJx0cnVl4oCdLCBvciBpbnRlZ2VyIHJlbGF0aXZlIHRvIGFub3RoZXIgdGltZS5cclxuICovXHJcbkRhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVJhbmdlID0gZnVuY3Rpb24oIGZyb20sIHRvICkge1xyXG5cclxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXHJcbiAgICAgICAgY3JlYXRlRGF0ZSA9IGZ1bmN0aW9uKCBkYXRlICkge1xyXG4gICAgICAgICAgICBpZiAoIGRhdGUgPT09IHRydWUgfHwgJC5pc0FycmF5KCBkYXRlICkgfHwgXy5pc0RhdGUoIGRhdGUgKSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxlbmRhci5jcmVhdGUoIGRhdGUgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBvYmplY3RzIGlmIHBvc3NpYmxlLlxyXG4gICAgaWYgKCAhXy5pc0ludGVnZXIoIGZyb20gKSApIHtcclxuICAgICAgICBmcm9tID0gY3JlYXRlRGF0ZSggZnJvbSApXHJcbiAgICB9XHJcbiAgICBpZiAoICFfLmlzSW50ZWdlciggdG8gKSApIHtcclxuICAgICAgICB0byA9IGNyZWF0ZURhdGUoIHRvIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgcmVsYXRpdmUgZGF0ZXMuXHJcbiAgICBpZiAoIF8uaXNJbnRlZ2VyKCBmcm9tICkgJiYgJC5pc1BsYWluT2JqZWN0KCB0byApICkge1xyXG4gICAgICAgIGZyb20gPSBbIHRvLnllYXIsIHRvLm1vbnRoLCB0by5kYXRlICsgZnJvbSBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIF8uaXNJbnRlZ2VyKCB0byApICYmICQuaXNQbGFpbk9iamVjdCggZnJvbSApICkge1xyXG4gICAgICAgIHRvID0gWyBmcm9tLnllYXIsIGZyb20ubW9udGgsIGZyb20uZGF0ZSArIHRvIF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmcm9tOiBjcmVhdGVEYXRlKCBmcm9tICksXHJcbiAgICAgICAgdG86IGNyZWF0ZURhdGUoIHRvIClcclxuICAgIH1cclxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVJhbmdlXHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgZGF0ZSB1bml0IGZhbGxzIHdpdGhpbiBhIGRhdGUgcmFuZ2Ugb2JqZWN0LlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUud2l0aGluUmFuZ2UgPSBmdW5jdGlvbiggcmFuZ2UsIGRhdGVVbml0ICkge1xyXG4gICAgcmFuZ2UgPSB0aGlzLmNyZWF0ZVJhbmdlKHJhbmdlLmZyb20sIHJhbmdlLnRvKVxyXG4gICAgcmV0dXJuIGRhdGVVbml0LnBpY2sgPj0gcmFuZ2UuZnJvbS5waWNrICYmIGRhdGVVbml0LnBpY2sgPD0gcmFuZ2UudG8ucGlja1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHR3byBkYXRlIHJhbmdlIG9iamVjdHMgb3ZlcmxhcC5cclxuICovXHJcbkRhdGVQaWNrZXIucHJvdG90eXBlLm92ZXJsYXBSYW5nZXMgPSBmdW5jdGlvbiggb25lLCB0d28gKSB7XHJcblxyXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpc1xyXG5cclxuICAgIC8vIENvbnZlcnQgdGhlIHJhbmdlcyBpbnRvIGNvbXBhcmFibGUgZGF0ZXMuXHJcbiAgICBvbmUgPSBjYWxlbmRhci5jcmVhdGVSYW5nZSggb25lLmZyb20sIG9uZS50byApXHJcbiAgICB0d28gPSBjYWxlbmRhci5jcmVhdGVSYW5nZSggdHdvLmZyb20sIHR3by50byApXHJcblxyXG4gICAgcmV0dXJuIGNhbGVuZGFyLndpdGhpblJhbmdlKCBvbmUsIHR3by5mcm9tICkgfHwgY2FsZW5kYXIud2l0aGluUmFuZ2UoIG9uZSwgdHdvLnRvICkgfHxcclxuICAgICAgICBjYWxlbmRhci53aXRoaW5SYW5nZSggdHdvLCBvbmUuZnJvbSApIHx8IGNhbGVuZGFyLndpdGhpblJhbmdlKCB0d28sIG9uZS50byApXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogR2V0IHRoZSBkYXRlIHRvZGF5LlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUubm93ID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xyXG4gICAgdmFsdWUgPSBuZXcgRGF0ZSgpXHJcbiAgICBpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5yZWwgKSB7XHJcbiAgICAgICAgdmFsdWUuc2V0RGF0ZSggdmFsdWUuZ2V0RGF0ZSgpICsgb3B0aW9ucy5yZWwgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCB2YWx1ZSwgb3B0aW9ucyApXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogTmF2aWdhdGUgdG8gbmV4dC9wcmV2IG1vbnRoLlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUubmF2aWdhdGUgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIHRhcmdldERhdGVPYmplY3QsXHJcbiAgICAgICAgdGFyZ2V0WWVhcixcclxuICAgICAgICB0YXJnZXRNb250aCxcclxuICAgICAgICB0YXJnZXREYXRlLFxyXG4gICAgICAgIGlzVGFyZ2V0QXJyYXkgPSAkLmlzQXJyYXkoIHZhbHVlICksXHJcbiAgICAgICAgaXNUYXJnZXRPYmplY3QgPSAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICksXHJcbiAgICAgICAgdmlld3NldE9iamVjdCA9IHRoaXMuaXRlbS52aWV3LyosXHJcbiAgICAgICAgc2FmZXR5ID0gMTAwKi9cclxuXHJcblxyXG4gICAgaWYgKCBpc1RhcmdldEFycmF5IHx8IGlzVGFyZ2V0T2JqZWN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIGlzVGFyZ2V0T2JqZWN0ICkge1xyXG4gICAgICAgICAgICB0YXJnZXRZZWFyID0gdmFsdWUueWVhclxyXG4gICAgICAgICAgICB0YXJnZXRNb250aCA9IHZhbHVlLm1vbnRoXHJcbiAgICAgICAgICAgIHRhcmdldERhdGUgPSB2YWx1ZS5kYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXRZZWFyID0gK3ZhbHVlWzBdXHJcbiAgICAgICAgICAgIHRhcmdldE1vbnRoID0gK3ZhbHVlWzFdXHJcbiAgICAgICAgICAgIHRhcmdldERhdGUgPSArdmFsdWVbMl1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHdl4oCZcmUgbmF2aWdhdGluZyBtb250aHMgYnV0IHRoZSB2aWV3IGlzIGluIGEgZGlmZmVyZW50XHJcbiAgICAgICAgLy8gbW9udGgsIG5hdmlnYXRlIHRvIHRoZSB2aWV34oCZcyB5ZWFyIGFuZCBtb250aC5cclxuICAgICAgICBpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5uYXYgJiYgdmlld3NldE9iamVjdCAmJiB2aWV3c2V0T2JqZWN0Lm1vbnRoICE9PSB0YXJnZXRNb250aCApIHtcclxuICAgICAgICAgICAgdGFyZ2V0WWVhciA9IHZpZXdzZXRPYmplY3QueWVhclxyXG4gICAgICAgICAgICB0YXJnZXRNb250aCA9IHZpZXdzZXRPYmplY3QubW9udGhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIGV4cGVjdGVkIHRhcmdldCB5ZWFyIGFuZCBtb250aC5cclxuICAgICAgICB0YXJnZXREYXRlT2JqZWN0ID0gbmV3IERhdGUoIHRhcmdldFllYXIsIHRhcmdldE1vbnRoICsgKCBvcHRpb25zICYmIG9wdGlvbnMubmF2ID8gb3B0aW9ucy5uYXYgOiAwICksIDEgKVxyXG4gICAgICAgIHRhcmdldFllYXIgPSB0YXJnZXREYXRlT2JqZWN0LmdldEZ1bGxZZWFyKClcclxuICAgICAgICB0YXJnZXRNb250aCA9IHRhcmdldERhdGVPYmplY3QuZ2V0TW9udGgoKVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgbW9udGggd2XigJlyZSBnb2luZyB0byBkb2VzbuKAmXQgaGF2ZSBlbm91Z2ggZGF5cyxcclxuICAgICAgICAvLyBrZWVwIGRlY3JlYXNpbmcgdGhlIGRhdGUgdW50aWwgd2UgcmVhY2ggdGhlIG1vbnRo4oCZcyBsYXN0IGRhdGUuXHJcbiAgICAgICAgd2hpbGUgKCAvKnNhZmV0eSAmJiovIG5ldyBEYXRlKCB0YXJnZXRZZWFyLCB0YXJnZXRNb250aCwgdGFyZ2V0RGF0ZSApLmdldE1vbnRoKCkgIT09IHRhcmdldE1vbnRoICkge1xyXG4gICAgICAgICAgICB0YXJnZXREYXRlIC09IDFcclxuICAgICAgICAgICAgLypzYWZldHkgLT0gMVxyXG4gICAgICAgICAgICBpZiAoICFzYWZldHkgKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnRmVsbCBpbnRvIGFuIGluZmluaXRlIGxvb3Agd2hpbGUgbmF2aWdhdGluZyB0byAnICsgbmV3IERhdGUoIHRhcmdldFllYXIsIHRhcmdldE1vbnRoLCB0YXJnZXREYXRlICkgKyAnLidcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZSA9IFsgdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGgsIHRhcmdldERhdGUgXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZVxyXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUubmF2aWdhdGVcclxuXHJcblxyXG4vKipcclxuICogTm9ybWFsaXplIGEgZGF0ZSBieSBzZXR0aW5nIHRoZSBob3VycyB0byBtaWRuaWdodC5cclxuICovXHJcbkRhdGVQaWNrZXIucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKCB2YWx1ZS8qLCBvcHRpb25zKi8gKSB7XHJcbiAgICB2YWx1ZS5zZXRIb3VycyggMCwgMCwgMCwgMCApXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBNZWFzdXJlIHRoZSByYW5nZSBvZiBkYXRlcy5cclxuICovXHJcbkRhdGVQaWNrZXIucHJvdG90eXBlLm1lYXN1cmUgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUvKiwgb3B0aW9ucyovICkge1xyXG5cclxuICAgIHZhciBjYWxlbmRhciA9IHRoaXNcclxuXHJcbiAgICAvLyBJZiBpdOKAmXMgYW55dGhpbmcgZmFsc2UteSwgcmVtb3ZlIHRoZSBsaW1pdHMuXHJcbiAgICBpZiAoICF2YWx1ZSApIHtcclxuICAgICAgICB2YWx1ZSA9IHR5cGUgPT0gJ21pbicgPyAtSW5maW5pdHkgOiBJbmZpbml0eVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGl04oCZcyBhIHN0cmluZywgcGFyc2UgaXQuXHJcbiAgICBlbHNlIGlmICggdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnICkge1xyXG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIucGFyc2UoIHR5cGUsIHZhbHVlIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGFuIGludGVnZXIsIGdldCBhIGRhdGUgcmVsYXRpdmUgdG8gdG9kYXkuXHJcbiAgICBlbHNlIGlmICggXy5pc0ludGVnZXIoIHZhbHVlICkgKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjYWxlbmRhci5ub3coIHR5cGUsIHZhbHVlLCB7IHJlbDogdmFsdWUgfSApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbn0gLy8vRGF0ZVBpY2tlci5wcm90b3R5cGUubWVhc3VyZVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSB2aWV3c2V0IG9iamVjdCBiYXNlZCBvbiBuYXZpZ2F0aW9uLlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUudmlld3NldCA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlT2JqZWN0LyosIG9wdGlvbnMqLyApIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZShbIGRhdGVPYmplY3QueWVhciwgZGF0ZU9iamVjdC5tb250aCwgMSBdKVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGEgZGF0ZSBhcyBlbmFibGVkIGFuZCBzaGlmdCBpZiBuZWVkZWQuXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlT2JqZWN0LCBvcHRpb25zICkge1xyXG5cclxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXHJcblxyXG4gICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGRhdGUuXHJcbiAgICAgICAgb3JpZ2luYWxEYXRlT2JqZWN0ID0gZGF0ZU9iamVjdCxcclxuXHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYW4gaW50ZXJ2YWwuXHJcbiAgICAgICAgaW50ZXJ2YWwgPSBvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJ2YWwgPyBvcHRpb25zLmludGVydmFsIDogMSxcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbGVuZGFyIGVuYWJsZWQgZGF0ZXMgYXJlIGludmVydGVkLlxyXG4gICAgICAgIGlzRmxpcHBlZEJhc2UgPSBjYWxlbmRhci5pdGVtLmVuYWJsZSA9PT0gLTEsXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW55IGVuYWJsZWQgZGF0ZXMgYWZ0ZXIvYmVmb3JlIG5vdy5cclxuICAgICAgICBoYXNFbmFibGVkQmVmb3JlVGFyZ2V0LCBoYXNFbmFibGVkQWZ0ZXJUYXJnZXQsXHJcblxyXG4gICAgICAgIC8vIFRoZSBtaW4gJiBtYXggbGltaXRzLlxyXG4gICAgICAgIG1pbkxpbWl0T2JqZWN0ID0gY2FsZW5kYXIuaXRlbS5taW4sXHJcbiAgICAgICAgbWF4TGltaXRPYmplY3QgPSBjYWxlbmRhci5pdGVtLm1heCxcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2XigJl2ZSByZWFjaGVkIHRoZSBsaW1pdCBkdXJpbmcgc2hpZnRpbmcuXHJcbiAgICAgICAgcmVhY2hlZE1pbiwgcmVhY2hlZE1heCxcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbGVuZGFyIGlzIGludmVydGVkIGFuZCBhdCBsZWFzdCBvbmUgd2Vla2RheSBpcyBlbmFibGVkLlxyXG4gICAgICAgIGhhc0VuYWJsZWRXZWVrZGF5cyA9IGlzRmxpcHBlZEJhc2UgJiYgY2FsZW5kYXIuaXRlbS5kaXNhYmxlLmZpbHRlciggZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmXigJlzIGEgZGF0ZSwgY2hlY2sgd2hlcmUgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIHRhcmdldC5cclxuICAgICAgICAgICAgaWYgKCAkLmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVRpbWUgPSBjYWxlbmRhci5jcmVhdGUoIHZhbHVlICkucGlja1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkYXRlVGltZSA8IGRhdGVPYmplY3QucGljayApIGhhc0VuYWJsZWRCZWZvcmVUYXJnZXQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggZGF0ZVRpbWUgPiBkYXRlT2JqZWN0LnBpY2sgKSBoYXNFbmFibGVkQWZ0ZXJUYXJnZXQgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJldHVybiBvbmx5IGludGVnZXJzIGZvciBlbmFibGVkIHdlZWtkYXlzLlxyXG4gICAgICAgICAgICByZXR1cm4gXy5pc0ludGVnZXIoIHZhbHVlIClcclxuICAgICAgICB9KS5sZW5ndGgvKixcclxuXHJcbiAgICAgICAgc2FmZXR5ID0gMTAwKi9cclxuXHJcblxyXG5cclxuICAgIC8vIENhc2VzIHRvIHZhbGlkYXRlIGZvcjpcclxuICAgIC8vIFsxXSBOb3QgaW52ZXJ0ZWQgYW5kIGRhdGUgZGlzYWJsZWQuXHJcbiAgICAvLyBbMl0gSW52ZXJ0ZWQgYW5kIHNvbWUgZGF0ZXMgZW5hYmxlZC5cclxuICAgIC8vIFszXSBOb3QgaW52ZXJ0ZWQgYW5kIG91dCBvZiByYW5nZS5cclxuICAgIC8vXHJcbiAgICAvLyBDYXNlcyB0byAqKm5vdCoqIHZhbGlkYXRlIGZvcjpcclxuICAgIC8vIOKAoiBOYXZpZ2F0aW5nIG1vbnRocy5cclxuICAgIC8vIOKAoiBOb3QgaW52ZXJ0ZWQgYW5kIGRhdGUgZW5hYmxlZC5cclxuICAgIC8vIOKAoiBJbnZlcnRlZCBhbmQgYWxsIGRhdGVzIGRpc2FibGVkLlxyXG4gICAgLy8g4oCiIC4uYW5kIGFueXRoaW5nIGVsc2UuXHJcbiAgICBpZiAoICFvcHRpb25zIHx8ICFvcHRpb25zLm5hdiApIGlmIChcclxuICAgICAgICAvKiAxICovICggIWlzRmxpcHBlZEJhc2UgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGRhdGVPYmplY3QgKSApIHx8XHJcbiAgICAgICAgLyogMiAqLyAoIGlzRmxpcHBlZEJhc2UgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGRhdGVPYmplY3QgKSAmJiAoIGhhc0VuYWJsZWRXZWVrZGF5cyB8fCBoYXNFbmFibGVkQmVmb3JlVGFyZ2V0IHx8IGhhc0VuYWJsZWRBZnRlclRhcmdldCApICkgfHxcclxuICAgICAgICAvKiAzICovICggIWlzRmxpcHBlZEJhc2UgJiYgKGRhdGVPYmplY3QucGljayA8PSBtaW5MaW1pdE9iamVjdC5waWNrIHx8IGRhdGVPYmplY3QucGljayA+PSBtYXhMaW1pdE9iamVjdC5waWNrKSApXHJcbiAgICApIHtcclxuXHJcblxyXG4gICAgICAgIC8vIFdoZW4gaW52ZXJ0ZWQsIGZsaXAgdGhlIGRpcmVjdGlvbiBpZiB0aGVyZSBhcmVu4oCZdCBhbnkgZW5hYmxlZCB3ZWVrZGF5c1xyXG4gICAgICAgIC8vIGFuZCB0aGVyZSBhcmUgbm8gZW5hYmxlZCBkYXRlcyBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBpbnRlcnZhbC5cclxuICAgICAgICBpZiAoIGlzRmxpcHBlZEJhc2UgJiYgIWhhc0VuYWJsZWRXZWVrZGF5cyAmJiAoICggIWhhc0VuYWJsZWRBZnRlclRhcmdldCAmJiBpbnRlcnZhbCA+IDAgKSB8fCAoICFoYXNFbmFibGVkQmVmb3JlVGFyZ2V0ICYmIGludGVydmFsIDwgMCApICkgKSB7XHJcbiAgICAgICAgICAgIGludGVydmFsICo9IC0xXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gS2VlcCBsb29waW5nIHVudGlsIHdlIHJlYWNoIGFuIGVuYWJsZWQgZGF0ZS5cclxuICAgICAgICB3aGlsZSAoIC8qc2FmZXR5ICYmKi8gY2FsZW5kYXIuZGlzYWJsZWQoIGRhdGVPYmplY3QgKSApIHtcclxuXHJcbiAgICAgICAgICAgIC8qc2FmZXR5IC09IDFcclxuICAgICAgICAgICAgaWYgKCAhc2FmZXR5ICkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ZlbGwgaW50byBhbiBpbmZpbml0ZSBsb29wIHdoaWxlIHZhbGlkYXRpbmcgJyArIGRhdGVPYmplY3Qub2JqICsgJy4nXHJcbiAgICAgICAgICAgIH0qL1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdl4oCZdmUgbG9vcGVkIGludG8gdGhlIG5leHQvcHJldiBtb250aCB3aXRoIGEgbGFyZ2UgaW50ZXJ2YWwsIHJldHVybiB0byB0aGUgb3JpZ2luYWwgZGF0ZSBhbmQgZmxhdHRlbiB0aGUgaW50ZXJ2YWwuXHJcbiAgICAgICAgICAgIGlmICggTWF0aC5hYnMoIGludGVydmFsICkgPiAxICYmICggZGF0ZU9iamVjdC5tb250aCA8IG9yaWdpbmFsRGF0ZU9iamVjdC5tb250aCB8fCBkYXRlT2JqZWN0Lm1vbnRoID4gb3JpZ2luYWxEYXRlT2JqZWN0Lm1vbnRoICkgKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlT2JqZWN0ID0gb3JpZ2luYWxEYXRlT2JqZWN0XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGludGVydmFsID4gMCA/IDEgOiAtMVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gSWYgd2XigJl2ZSByZWFjaGVkIHRoZSBtaW4vbWF4IGxpbWl0LCByZXZlcnNlIHRoZSBkaXJlY3Rpb24sIGZsYXR0ZW4gdGhlIGludGVydmFsIGFuZCBzZXQgaXQgdG8gdGhlIGxpbWl0LlxyXG4gICAgICAgICAgICBpZiAoIGRhdGVPYmplY3QucGljayA8PSBtaW5MaW1pdE9iamVjdC5waWNrICkge1xyXG4gICAgICAgICAgICAgICAgcmVhY2hlZE1pbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIGludGVydmFsID0gMVxyXG4gICAgICAgICAgICAgICAgZGF0ZU9iamVjdCA9IGNhbGVuZGFyLmNyZWF0ZShbXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTGltaXRPYmplY3QueWVhcixcclxuICAgICAgICAgICAgICAgICAgICBtaW5MaW1pdE9iamVjdC5tb250aCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5MaW1pdE9iamVjdC5kYXRlICsgKGRhdGVPYmplY3QucGljayA9PT0gbWluTGltaXRPYmplY3QucGljayA/IDAgOiAtMSlcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIGRhdGVPYmplY3QucGljayA+PSBtYXhMaW1pdE9iamVjdC5waWNrICkge1xyXG4gICAgICAgICAgICAgICAgcmVhY2hlZE1heCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGludGVydmFsID0gLTFcclxuICAgICAgICAgICAgICAgIGRhdGVPYmplY3QgPSBjYWxlbmRhci5jcmVhdGUoW1xyXG4gICAgICAgICAgICAgICAgICAgIG1heExpbWl0T2JqZWN0LnllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGltaXRPYmplY3QubW9udGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TGltaXRPYmplY3QuZGF0ZSArIChkYXRlT2JqZWN0LnBpY2sgPT09IG1heExpbWl0T2JqZWN0LnBpY2sgPyAwIDogMSlcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBJZiB3ZeKAmXZlIHJlYWNoZWQgYm90aCBsaW1pdHMsIGp1c3QgYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxyXG4gICAgICAgICAgICBpZiAoIHJlYWNoZWRNaW4gJiYgcmVhY2hlZE1heCApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBjcmVhdGUgdGhlIHNoaWZ0ZWQgZGF0ZSB1c2luZyB0aGUgaW50ZXJ2YWwgYW5kIGtlZXAgbG9vcGluZy5cclxuICAgICAgICAgICAgZGF0ZU9iamVjdCA9IGNhbGVuZGFyLmNyZWF0ZShbIGRhdGVPYmplY3QueWVhciwgZGF0ZU9iamVjdC5tb250aCwgZGF0ZU9iamVjdC5kYXRlICsgaW50ZXJ2YWwgXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSAvL2VuZGlmXHJcblxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgZGF0ZSBvYmplY3Qgc2V0dGxlZCBvbi5cclxuICAgIHJldHVybiBkYXRlT2JqZWN0XHJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS52YWxpZGF0ZVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgZGlzYWJsZWQuXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS5kaXNhYmxlZCA9IGZ1bmN0aW9uKCBkYXRlVG9WZXJpZnkgKSB7XHJcblxyXG4gICAgdmFyXHJcbiAgICAgICAgY2FsZW5kYXIgPSB0aGlzLFxyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgdGhyb3VnaCB0aGUgZGlzYWJsZWQgZGF0ZXMgdG8gY2hlY2sgaWYgdGhpcyBpcyBvbmUuXHJcbiAgICAgICAgaXNEaXNhYmxlZE1hdGNoID0gY2FsZW5kYXIuaXRlbS5kaXNhYmxlLmZpbHRlciggZnVuY3Rpb24oIGRhdGVUb0Rpc2FibGUgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGF0ZSBpcyBhIG51bWJlciwgbWF0Y2ggdGhlIHdlZWtkYXkgd2l0aCAwaW5kZXggYW5kIGBmaXJzdERheWAgY2hlY2suXHJcbiAgICAgICAgICAgIGlmICggXy5pc0ludGVnZXIoIGRhdGVUb0Rpc2FibGUgKSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlVG9WZXJpZnkuZGF5ID09PSAoIGNhbGVuZGFyLnNldHRpbmdzLmZpcnN0RGF5ID8gZGF0ZVRvRGlzYWJsZSA6IGRhdGVUb0Rpc2FibGUgLSAxICkgJSA3XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbiBhcnJheSBvciBhIG5hdGl2ZSBKUyBkYXRlLCBjcmVhdGUgYW5kIG1hdGNoIHRoZSBleGFjdCBkYXRlLlxyXG4gICAgICAgICAgICBpZiAoICQuaXNBcnJheSggZGF0ZVRvRGlzYWJsZSApIHx8IF8uaXNEYXRlKCBkYXRlVG9EaXNhYmxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZVRvVmVyaWZ5LnBpY2sgPT09IGNhbGVuZGFyLmNyZWF0ZSggZGF0ZVRvRGlzYWJsZSApLnBpY2tcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFuIG9iamVjdCwgbWF0Y2ggYSBkYXRlIHdpdGhpbiB0aGUg4oCcZnJvbeKAnSBhbmQg4oCcdG/igJ0gcmFuZ2UuXHJcbiAgICAgICAgICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCBkYXRlVG9EaXNhYmxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsZW5kYXIud2l0aGluUmFuZ2UoIGRhdGVUb0Rpc2FibGUsIGRhdGVUb1ZlcmlmeSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIC8vIElmIHRoaXMgZGF0ZSBtYXRjaGVzIGEgZGlzYWJsZWQgZGF0ZSwgY29uZmlybSBpdOKAmXMgbm90IGludmVydGVkLlxyXG4gICAgaXNEaXNhYmxlZE1hdGNoID0gaXNEaXNhYmxlZE1hdGNoLmxlbmd0aCAmJiAhaXNEaXNhYmxlZE1hdGNoLmZpbHRlcihmdW5jdGlvbiggZGF0ZVRvRGlzYWJsZSApIHtcclxuICAgICAgICByZXR1cm4gJC5pc0FycmF5KCBkYXRlVG9EaXNhYmxlICkgJiYgZGF0ZVRvRGlzYWJsZVszXSA9PSAnaW52ZXJ0ZWQnIHx8XHJcbiAgICAgICAgICAgICQuaXNQbGFpbk9iamVjdCggZGF0ZVRvRGlzYWJsZSApICYmIGRhdGVUb0Rpc2FibGUuaW52ZXJ0ZWRcclxuICAgIH0pLmxlbmd0aFxyXG5cclxuICAgIC8vIENoZWNrIHRoZSBjYWxlbmRhciDigJxlbmFibGVk4oCdIGZsYWcgYW5kIHJlc3BlY3RpdmVseSBmbGlwIHRoZVxyXG4gICAgLy8gZGlzYWJsZWQgc3RhdGUuIFRoZW4gYWxzbyBjaGVjayBpZiBpdOKAmXMgYmV5b25kIHRoZSBtaW4vbWF4IGxpbWl0cy5cclxuICAgIHJldHVybiBjYWxlbmRhci5pdGVtLmVuYWJsZSA9PT0gLTEgPyAhaXNEaXNhYmxlZE1hdGNoIDogaXNEaXNhYmxlZE1hdGNoIHx8XHJcbiAgICAgICAgZGF0ZVRvVmVyaWZ5LnBpY2sgPCBjYWxlbmRhci5pdGVtLm1pbi5waWNrIHx8XHJcbiAgICAgICAgZGF0ZVRvVmVyaWZ5LnBpY2sgPiBjYWxlbmRhci5pdGVtLm1heC5waWNrXHJcblxyXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuZGlzYWJsZWRcclxuXHJcblxyXG4vKipcclxuICogUGFyc2UgYSBzdHJpbmcgaW50byBhIHVzYWJsZSB0eXBlLlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcclxuICAgICAgICBwYXJzaW5nT2JqZWN0ID0ge31cclxuXHJcbiAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBwYXJzZWQsIHdl4oCZcmUgZ29vZC5cclxuICAgIGlmICggIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJyApIHtcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSBuZWVkIGEgYC5mb3JtYXRgIHRvIHBhcnNlIHRoZSB2YWx1ZSB3aXRoLlxyXG4gICAgaWYgKCAhKCBvcHRpb25zICYmIG9wdGlvbnMuZm9ybWF0ICkgKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cclxuICAgICAgICBvcHRpb25zLmZvcm1hdCA9IGNhbGVuZGFyLnNldHRpbmdzLmZvcm1hdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgdGhlIGZvcm1hdCBpbnRvIGFuIGFycmF5IGFuZCB0aGVuIG1hcCB0aHJvdWdoIGl0LlxyXG4gICAgY2FsZW5kYXIuZm9ybWF0cy50b0FycmF5KCBvcHRpb25zLmZvcm1hdCApLm1hcCggZnVuY3Rpb24oIGxhYmVsICkge1xyXG5cclxuICAgICAgICB2YXJcclxuICAgICAgICAgICAgLy8gR3JhYiB0aGUgZm9ybWF0dGluZyBsYWJlbC5cclxuICAgICAgICAgICAgZm9ybWF0dGluZ0xhYmVsID0gY2FsZW5kYXIuZm9ybWF0c1sgbGFiZWwgXSxcclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSBmb3JtYXQgbGVuZ3RoIGlzIGZyb20gdGhlIGZvcm1hdHRpbmcgbGFiZWwgZnVuY3Rpb24gb3IgdGhlXHJcbiAgICAgICAgICAgIC8vIGxhYmVsIGxlbmd0aCB3aXRob3V0IHRoZSBlc2NhcGluZyBleGNsYW1hdGlvbiAoISkgbWFyay5cclxuICAgICAgICAgICAgZm9ybWF0TGVuZ3RoID0gZm9ybWF0dGluZ0xhYmVsID8gXy50cmlnZ2VyKCBmb3JtYXR0aW5nTGFiZWwsIGNhbGVuZGFyLCBbIHZhbHVlLCBwYXJzaW5nT2JqZWN0IF0gKSA6IGxhYmVsLnJlcGxhY2UoIC9eIS8sICcnICkubGVuZ3RoXHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSBmb3JtYXQgbGFiZWwsIHNwbGl0IHRoZSB2YWx1ZSB1cCB0byB0aGUgZm9ybWF0IGxlbmd0aC5cclxuICAgICAgICAvLyBUaGVuIGFkZCBpdCB0byB0aGUgcGFyc2luZyBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSBsYWJlbC5cclxuICAgICAgICBpZiAoIGZvcm1hdHRpbmdMYWJlbCApIHtcclxuICAgICAgICAgICAgcGFyc2luZ09iamVjdFsgbGFiZWwgXSA9IHZhbHVlLnN1YnN0ciggMCwgZm9ybWF0TGVuZ3RoIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgYXMgdGhlIHN1YnN0cmluZyBmcm9tIGZvcm1hdCBsZW5ndGggdG8gZW5kLlxyXG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKCBmb3JtYXRMZW5ndGggKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBDb21wZW5zYXRlIGZvciBtb250aCAwaW5kZXguXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNpbmdPYmplY3QueXl5eSB8fCBwYXJzaW5nT2JqZWN0Lnl5LFxyXG4gICAgICAgICsoIHBhcnNpbmdPYmplY3QubW0gfHwgcGFyc2luZ09iamVjdC5tICkgLSAxLFxyXG4gICAgICAgIHBhcnNpbmdPYmplY3QuZGQgfHwgcGFyc2luZ09iamVjdC5kXHJcbiAgICBdXHJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5wYXJzZVxyXG5cclxuXHJcbi8qKlxyXG4gKiBWYXJpb3VzIGZvcm1hdHMgdG8gZGlzcGxheSB0aGUgb2JqZWN0IGluLlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUuZm9ybWF0cyA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZCBpbiBhIGNvbGxlY3Rpb24uXHJcbiAgICBmdW5jdGlvbiBnZXRXb3JkTGVuZ3RoRnJvbUNvbGxlY3Rpb24oIHN0cmluZywgY29sbGVjdGlvbiwgZGF0ZU9iamVjdCApIHtcclxuXHJcbiAgICAgICAgLy8gR3JhYiB0aGUgZmlyc3Qgd29yZCBmcm9tIHRoZSBzdHJpbmcuXHJcbiAgICAgICAgdmFyIHdvcmQgPSBzdHJpbmcubWF0Y2goIC9cXHcrLyApWyAwIF1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBtb250aCBpbmRleCwgYWRkIGl0IHRvIHRoZSBkYXRlIG9iamVjdFxyXG4gICAgICAgIGlmICggIWRhdGVPYmplY3QubW0gJiYgIWRhdGVPYmplY3QubSApIHtcclxuICAgICAgICAgICAgZGF0ZU9iamVjdC5tID0gY29sbGVjdGlvbi5pbmRleE9mKCB3b3JkICkgKyAxXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgd29yZC5cclxuICAgICAgICByZXR1cm4gd29yZC5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZCBpbiBhIHN0cmluZy5cclxuICAgIGZ1bmN0aW9uIGdldEZpcnN0V29yZExlbmd0aCggc3RyaW5nICkge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmcubWF0Y2goIC9cXHcrLyApWyAwIF0ubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgc3RyaW5nLCB0aGVuIGdldCB0aGUgZGlnaXRzIGxlbmd0aC5cclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgZGF0ZS5cclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IF8uZGlnaXRzKCBzdHJpbmcgKSA6IGRhdGVPYmplY3QuZGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDIuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIGRhdGUgd2l0aCBhIGxlYWRpbmcgemVyby5cclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IDIgOiBfLmxlYWQoIGRhdGVPYmplY3QuZGF0ZSApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSBmaXJzdCB3b3JkLlxyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzaG9ydCBzZWxlY3RlZCB3ZWVrZGF5LlxyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gZ2V0Rmlyc3RXb3JkTGVuZ3RoKCBzdHJpbmcgKSA6IHRoaXMuc2V0dGluZ3Mud2Vla2RheXNTaG9ydFsgZGF0ZU9iamVjdC5kYXkgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGRkZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIGZpcnN0IHdvcmQuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIGZ1bGwgc2VsZWN0ZWQgd2Vla2RheS5cclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldEZpcnN0V29yZExlbmd0aCggc3RyaW5nICkgOiB0aGlzLnNldHRpbmdzLndlZWtkYXlzRnVsbFsgZGF0ZU9iamVjdC5kYXkgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIGRpZ2l0c1xyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBtb250aCB3aXRoIDBpbmRleCBjb21wZW5zYXRpb24uXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBfLmRpZ2l0cyggc3RyaW5nICkgOiBkYXRlT2JqZWN0Lm1vbnRoICsgMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDIuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIHdpdGggMGluZGV4IGFuZCBsZWFkaW5nIHplcm8uXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyAyIDogXy5sZWFkKCBkYXRlT2JqZWN0Lm1vbnRoICsgMSApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuc2V0dGluZ3MubW9udGhzU2hvcnRcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIGdldCBsZW5ndGggb2YgdGhlIHJlbGV2YW50IG1vbnRoIGZyb20gdGhlIHNob3J0XHJcbiAgICAgICAgICAgIC8vIG1vbnRocyBjb2xsZWN0aW9uLiBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBtb250aCBmcm9tIHRoYXQgY29sbGVjdGlvbi5cclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldFdvcmRMZW5ndGhGcm9tQ29sbGVjdGlvbiggc3RyaW5nLCBjb2xsZWN0aW9uLCBkYXRlT2JqZWN0ICkgOiBjb2xsZWN0aW9uWyBkYXRlT2JqZWN0Lm1vbnRoIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1tbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuc2V0dGluZ3MubW9udGhzRnVsbFxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgZ2V0IGxlbmd0aCBvZiB0aGUgcmVsZXZhbnQgbW9udGggZnJvbSB0aGUgZnVsbFxyXG4gICAgICAgICAgICAvLyBtb250aHMgY29sbGVjdGlvbi4gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgbW9udGggZnJvbSB0aGF0IGNvbGxlY3Rpb24uXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBnZXRXb3JkTGVuZ3RoRnJvbUNvbGxlY3Rpb24oIHN0cmluZywgY29sbGVjdGlvbiwgZGF0ZU9iamVjdCApIDogY29sbGVjdGlvblsgZGF0ZU9iamVjdC5tb250aCBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5eTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgMi5cclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgeWVhciBieSBzbGljaW5nIG91dCB0aGUgZmlyc3QgMiBkaWdpdHMuXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyAyIDogKCAnJyArIGRhdGVPYmplY3QueWVhciApLnNsaWNlKCAyIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHl5eXk6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDQuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIHllYXIuXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyA0IDogZGF0ZU9iamVjdC55ZWFyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IGJ5IHNwbGl0dGluZyB0aGUgZm9ybWF0dGluZyBzdHJpbmcgcGFzc2VkLlxyXG4gICAgICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCBmb3JtYXRTdHJpbmcgKSB7IHJldHVybiBmb3JtYXRTdHJpbmcuc3BsaXQoIC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nICkgfSxcclxuXHJcbiAgICAgICAgLy8gRm9ybWF0IGFuIG9iamVjdCBpbnRvIGEgc3RyaW5nIHVzaW5nIHRoZSBmb3JtYXR0aW5nIG9wdGlvbnMuXHJcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICggZm9ybWF0U3RyaW5nLCBpdGVtT2JqZWN0ICkge1xyXG4gICAgICAgICAgICB2YXIgY2FsZW5kYXIgPSB0aGlzXHJcbiAgICAgICAgICAgIHJldHVybiBjYWxlbmRhci5mb3JtYXRzLnRvQXJyYXkoIGZvcm1hdFN0cmluZyApLm1hcCggZnVuY3Rpb24oIGxhYmVsICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJpZ2dlciggY2FsZW5kYXIuZm9ybWF0c1sgbGFiZWwgXSwgY2FsZW5kYXIsIFsgMCwgaXRlbU9iamVjdCBdICkgfHwgbGFiZWwucmVwbGFjZSggL14hLywgJycgKVxyXG4gICAgICAgICAgICB9KS5qb2luKCAnJyApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpIC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuZm9ybWF0c1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHR3byBkYXRlIHVuaXRzIGFyZSB0aGUgZXhhY3QuXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS5pc0RhdGVFeGFjdCA9IGZ1bmN0aW9uKCBvbmUsIHR3byApIHtcclxuXHJcbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzXHJcblxyXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCB3ZWVrZGF5cywgZG8gYSBkaXJlY3QgY29tcGFyaXNvbi5cclxuICAgIGlmIChcclxuICAgICAgICAoIF8uaXNJbnRlZ2VyKCBvbmUgKSAmJiBfLmlzSW50ZWdlciggdHdvICkgKSB8fFxyXG4gICAgICAgICggdHlwZW9mIG9uZSA9PSAnYm9vbGVhbicgJiYgdHlwZW9mIHR3byA9PSAnYm9vbGVhbicgKVxyXG4gICAgICkge1xyXG4gICAgICAgIHJldHVybiBvbmUgPT09IHR3b1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggZGF0ZSByZXByZXNlbnRhdGlvbnMsIGNvbXBhcmUgdGhlIOKAnHBpY2vigJ0gdmFsdWUuXHJcbiAgICBpZiAoXHJcbiAgICAgICAgKCBfLmlzRGF0ZSggb25lICkgfHwgJC5pc0FycmF5KCBvbmUgKSApICYmXHJcbiAgICAgICAgKCBfLmlzRGF0ZSggdHdvICkgfHwgJC5pc0FycmF5KCB0d28gKSApXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gY2FsZW5kYXIuY3JlYXRlKCBvbmUgKS5waWNrID09PSBjYWxlbmRhci5jcmVhdGUoIHR3byApLnBpY2tcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIHdl4oCZcmUgd29ya2luZyB3aXRoIHJhbmdlIG9iamVjdHMsIGNvbXBhcmUgdGhlIOKAnGZyb23igJ0gYW5kIOKAnHRv4oCdLlxyXG4gICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIG9uZSApICYmICQuaXNQbGFpbk9iamVjdCggdHdvICkgKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBvbmUuZnJvbSwgdHdvLmZyb20gKSAmJiBjYWxlbmRhci5pc0RhdGVFeGFjdCggb25lLnRvLCB0d28udG8gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHR3byBkYXRlIHVuaXRzIG92ZXJsYXAuXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS5pc0RhdGVPdmVybGFwID0gZnVuY3Rpb24oIG9uZSwgdHdvICkge1xyXG5cclxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXHJcbiAgICAgICAgZmlyc3REYXkgPSBjYWxlbmRhci5zZXR0aW5ncy5maXJzdERheSA/IDEgOiAwXHJcblxyXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCBhIHdlZWtkYXkgaW5kZXgsIGNvbXBhcmUgdGhlIGRheXMuXHJcbiAgICBpZiAoIF8uaXNJbnRlZ2VyKCBvbmUgKSAmJiAoIF8uaXNEYXRlKCB0d28gKSB8fCAkLmlzQXJyYXkoIHR3byApICkgKSB7XHJcbiAgICAgICAgb25lID0gb25lICUgNyArIGZpcnN0RGF5XHJcbiAgICAgICAgcmV0dXJuIG9uZSA9PT0gY2FsZW5kYXIuY3JlYXRlKCB0d28gKS5kYXkgKyAxXHJcbiAgICB9XHJcbiAgICBpZiAoIF8uaXNJbnRlZ2VyKCB0d28gKSAmJiAoIF8uaXNEYXRlKCBvbmUgKSB8fCAkLmlzQXJyYXkoIG9uZSApICkgKSB7XHJcbiAgICAgICAgdHdvID0gdHdvICUgNyArIGZpcnN0RGF5XHJcbiAgICAgICAgcmV0dXJuIHR3byA9PT0gY2FsZW5kYXIuY3JlYXRlKCBvbmUgKS5kYXkgKyAxXHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiB3ZeKAmXJlIHdvcmtpbmcgd2l0aCByYW5nZSBvYmplY3RzLCBjaGVjayBpZiB0aGUgcmFuZ2VzIG92ZXJsYXAuXHJcbiAgICBpZiAoICQuaXNQbGFpbk9iamVjdCggb25lICkgJiYgJC5pc1BsYWluT2JqZWN0KCB0d28gKSApIHtcclxuICAgICAgICByZXR1cm4gY2FsZW5kYXIub3ZlcmxhcFJhbmdlcyggb25lLCB0d28gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEZsaXAgdGhlIOKAnGVuYWJsZWTigJ0gc3RhdGUuXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS5mbGlwRW5hYmxlID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgICB2YXIgaXRlbU9iamVjdCA9IHRoaXMuaXRlbVxyXG4gICAgaXRlbU9iamVjdC5lbmFibGUgPSB2YWwgfHwgKGl0ZW1PYmplY3QuZW5hYmxlID09IC0xID8gMSA6IC0xKVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcmsgYSBjb2xsZWN0aW9uIG9mIGRhdGVzIGFzIOKAnGRpc2FibGVk4oCdLlxyXG4gKi9cclxuRGF0ZVBpY2tlci5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlc1RvRGlzYWJsZSApIHtcclxuXHJcbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxyXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBjYWxlbmRhci5pdGVtLmRpc2FibGUuc2xpY2UoMClcclxuXHJcblxyXG4gICAgLy8gSWYgd2XigJlyZSBmbGlwcGluZywgdGhhdOKAmXMgYWxsIHdlIG5lZWQgdG8gZG8uXHJcbiAgICBpZiAoIGRhdGVzVG9EaXNhYmxlID09ICdmbGlwJyApIHtcclxuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKClcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmICggZGF0ZXNUb0Rpc2FibGUgPT09IGZhbHNlICkge1xyXG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoMSlcclxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmICggZGF0ZXNUb0Rpc2FibGUgPT09IHRydWUgKSB7XHJcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgtMSlcclxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cclxuICAgIH1cclxuXHJcbiAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCB0aGUgZGF0ZXMgdG8gZGlzYWJsZS5cclxuICAgIGVsc2Uge1xyXG5cclxuICAgICAgICBkYXRlc1RvRGlzYWJsZS5tYXAoZnVuY3Rpb24oIHVuaXRUb0Rpc2FibGUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWF0Y2hGb3VuZFxyXG5cclxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIGRpc2FibGVkIGl0ZW1zLCBjaGVjayBmb3IgbWF0Y2hlcy5cclxuICAgICAgICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIG1hdGNoZWQsIGltbWVkaWF0ZWx5IGJyZWFrIG91dC5cclxuICAgICAgICAgICAgZm9yICggdmFyIGluZGV4ID0gMDsgaW5kZXggPCBkaXNhYmxlZEl0ZW1zLmxlbmd0aDsgaW5kZXggKz0gMSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggY2FsZW5kYXIuaXNEYXRlRXhhY3QoIHVuaXRUb0Rpc2FibGUsIGRpc2FibGVkSXRlbXNbaW5kZXhdICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hGb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCwgYWRkIHRoZSB2YWxpZGF0ZWQgdW5pdCB0byB0aGUgY29sbGVjdGlvbi5cclxuICAgICAgICAgICAgaWYgKCAhbWF0Y2hGb3VuZCApIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBfLmlzSW50ZWdlciggdW5pdFRvRGlzYWJsZSApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgXy5pc0RhdGUoIHVuaXRUb0Rpc2FibGUgKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICQuaXNBcnJheSggdW5pdFRvRGlzYWJsZSApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCAkLmlzUGxhaW5PYmplY3QoIHVuaXRUb0Rpc2FibGUgKSAmJiB1bml0VG9EaXNhYmxlLmZyb20gJiYgdW5pdFRvRGlzYWJsZS50byApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZEl0ZW1zLnB1c2goIHVuaXRUb0Rpc2FibGUgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHVwZGF0ZWQgY29sbGVjdGlvbi5cclxuICAgIHJldHVybiBkaXNhYmxlZEl0ZW1zXHJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5kZWFjdGl2YXRlXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcmsgYSBjb2xsZWN0aW9uIG9mIGRhdGVzIGFzIOKAnGVuYWJsZWTigJ0uXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlc1RvRW5hYmxlICkge1xyXG5cclxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXHJcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IGNhbGVuZGFyLml0ZW0uZGlzYWJsZSxcclxuICAgICAgICBkaXNhYmxlZEl0ZW1zQ291bnQgPSBkaXNhYmxlZEl0ZW1zLmxlbmd0aFxyXG5cclxuICAgIC8vIElmIHdl4oCZcmUgZmxpcHBpbmcsIHRoYXTigJlzIGFsbCB3ZSBuZWVkIHRvIGRvLlxyXG4gICAgaWYgKCBkYXRlc1RvRW5hYmxlID09ICdmbGlwJyApIHtcclxuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKClcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmICggZGF0ZXNUb0VuYWJsZSA9PT0gdHJ1ZSApIHtcclxuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKDEpXHJcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoIGRhdGVzVG9FbmFibGUgPT09IGZhbHNlICkge1xyXG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoLTEpXHJcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggdGhlIGRpc2FibGVkIGRhdGVzLlxyXG4gICAgZWxzZSB7XHJcblxyXG4gICAgICAgIGRhdGVzVG9FbmFibGUubWFwKGZ1bmN0aW9uKCB1bml0VG9FbmFibGUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWF0Y2hGb3VuZCxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkVW5pdCxcclxuICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgaXNFeGFjdFJhbmdlXHJcblxyXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSBkaXNhYmxlZCBpdGVtcyBhbmQgdHJ5IHRvIGZpbmQgYSBtYXRjaC5cclxuICAgICAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXNDb3VudDsgaW5kZXggKz0gMSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFVuaXQgPSBkaXNhYmxlZEl0ZW1zW2luZGV4XVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gYW4gZXhhY3QgbWF0Y2ggaXMgZm91bmQsIHJlbW92ZSBpdCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5pc0RhdGVFeGFjdCggZGlzYWJsZWRVbml0LCB1bml0VG9FbmFibGUgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gZGlzYWJsZWRJdGVtc1tpbmRleF0gPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNFeGFjdFJhbmdlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBhbiBvdmVybGFwcGVkIG1hdGNoIGlzIGZvdW5kLCBhZGQgdGhlIOKAnGludmVydGVk4oCdIHN0YXRlIHRvIGl0LlxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGNhbGVuZGFyLmlzRGF0ZU92ZXJsYXAoIGRpc2FibGVkVW5pdCwgdW5pdFRvRW5hYmxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIHVuaXRUb0VuYWJsZSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0VG9FbmFibGUuaW52ZXJ0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB1bml0VG9FbmFibGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICQuaXNBcnJheSggdW5pdFRvRW5hYmxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB1bml0VG9FbmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhbWF0Y2hGb3VuZFszXSApIG1hdGNoRm91bmQucHVzaCggJ2ludmVydGVkJyApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmlzRGF0ZSggdW5pdFRvRW5hYmxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSBbIHVuaXRUb0VuYWJsZS5nZXRGdWxsWWVhcigpLCB1bml0VG9FbmFibGUuZ2V0TW9udGgoKSwgdW5pdFRvRW5hYmxlLmdldERhdGUoKSwgJ2ludmVydGVkJyBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGEgbWF0Y2ggd2FzIGZvdW5kLCByZW1vdmUgYSBwcmV2aW91cyBkdXBsaWNhdGUgZW50cnkuXHJcbiAgICAgICAgICAgIGlmICggbWF0Y2hGb3VuZCApIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBkaXNhYmxlZEl0ZW1zQ291bnQ7IGluZGV4ICs9IDEgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBkaXNhYmxlZEl0ZW1zW2luZGV4XSwgdW5pdFRvRW5hYmxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtc1tpbmRleF0gPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSW4gdGhlIGV2ZW50IHRoYXQgd2XigJlyZSBkZWFsaW5nIHdpdGggYW4gZXhhY3QgcmFuZ2Ugb2YgZGF0ZXMsXHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8g4oCcaW52ZXJ0ZWTigJ0gZGF0ZXMgYmVjYXVzZSBvZiBpdC5cclxuICAgICAgICAgICAgaWYgKCBpc0V4YWN0UmFuZ2UgKSBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZGlzYWJsZWRJdGVtc0NvdW50OyBpbmRleCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5pc0RhdGVPdmVybGFwKCBkaXNhYmxlZEl0ZW1zW2luZGV4XSwgdW5pdFRvRW5hYmxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtc1tpbmRleF0gPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIHN0aWxsIG1hdGNoZWQsIGFkZCBpdCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxyXG4gICAgICAgICAgICBpZiAoIG1hdGNoRm91bmQgKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZEl0ZW1zLnB1c2goIG1hdGNoRm91bmQgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHVwZGF0ZWQgY29sbGVjdGlvbi5cclxuICAgIHJldHVybiBkaXNhYmxlZEl0ZW1zLmZpbHRlcihmdW5jdGlvbiggdmFsICkgeyByZXR1cm4gdmFsICE9IG51bGwgfSlcclxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmFjdGl2YXRlXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdGhlIG5vZGVzIGluIHRoZSBwaWNrZXIuXHJcbiAqL1xyXG5EYXRlUGlja2VyLnByb3RvdHlwZS5ub2RlcyA9IGZ1bmN0aW9uKCBpc09wZW4gKSB7XHJcblxyXG4gICAgdmFyXHJcbiAgICAgICAgY2FsZW5kYXIgPSB0aGlzLFxyXG4gICAgICAgIHNldHRpbmdzID0gY2FsZW5kYXIuc2V0dGluZ3MsXHJcbiAgICAgICAgY2FsZW5kYXJJdGVtID0gY2FsZW5kYXIuaXRlbSxcclxuICAgICAgICBub3dPYmplY3QgPSBjYWxlbmRhckl0ZW0ubm93LFxyXG4gICAgICAgIHNlbGVjdGVkT2JqZWN0ID0gY2FsZW5kYXJJdGVtLnNlbGVjdCxcclxuICAgICAgICBoaWdobGlnaHRlZE9iamVjdCA9IGNhbGVuZGFySXRlbS5oaWdobGlnaHQsXHJcbiAgICAgICAgdmlld3NldE9iamVjdCA9IGNhbGVuZGFySXRlbS52aWV3LFxyXG4gICAgICAgIGRpc2FibGVkQ29sbGVjdGlvbiA9IGNhbGVuZGFySXRlbS5kaXNhYmxlLFxyXG4gICAgICAgIG1pbkxpbWl0T2JqZWN0ID0gY2FsZW5kYXJJdGVtLm1pbixcclxuICAgICAgICBtYXhMaW1pdE9iamVjdCA9IGNhbGVuZGFySXRlbS5tYXgsXHJcblxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNhbGVuZGFyIHRhYmxlIGhlYWQgdXNpbmcgYSBjb3B5IG9mIHdlZWtkYXkgbGFiZWxzIGNvbGxlY3Rpb24uXHJcbiAgICAgICAgLy8gKiBXZSBkbyBhIGNvcHkgc28gd2UgZG9uJ3QgbXV0YXRlIHRoZSBvcmlnaW5hbCBhcnJheS5cclxuICAgICAgICB0YWJsZUhlYWQgPSAoZnVuY3Rpb24oIGNvbGxlY3Rpb24sIGZ1bGxDb2xsZWN0aW9uICkge1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGRheSBzaG91bGQgYmUgTW9uZGF5LCBtb3ZlIFN1bmRheSB0byB0aGUgZW5kLlxyXG4gICAgICAgICAgICBpZiAoIHNldHRpbmdzLmZpcnN0RGF5ICkge1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKCBjb2xsZWN0aW9uLnNoaWZ0KCkgKVxyXG4gICAgICAgICAgICAgICAgZnVsbENvbGxlY3Rpb24ucHVzaCggZnVsbENvbGxlY3Rpb24uc2hpZnQoKSApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHRoZSB0YWJsZSBoZWFkIGdyb3VwLlxyXG4gICAgICAgICAgICByZXR1cm4gXy5ub2RlKFxyXG4gICAgICAgICAgICAgICAgJ3RoZWFkJyxcclxuICAgICAgICAgICAgICAgIF8ubm9kZShcclxuICAgICAgICAgICAgICAgICAgICAndHInLFxyXG4gICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogREFZU19JTl9XRUVLIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogJ3RoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIGNvdW50ZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25bIGNvdW50ZXIgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5rbGFzcy53ZWVrZGF5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2NvcGU9Y29sIHRpdGxlPVwiJyArIGZ1bGxDb2xsZWN0aW9uWyBjb3VudGVyIF0gKyAnXCInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIC8vZW5kcmV0dXJuXHJcblxyXG4gICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXHJcbiAgICAgICAgfSkoICggc2V0dGluZ3Muc2hvd1dlZWtkYXlzRnVsbCA/IHNldHRpbmdzLndlZWtkYXlzRnVsbCA6IHNldHRpbmdzLndlZWtkYXlzTGV0dGVyICkuc2xpY2UoIDAgKSwgc2V0dGluZ3Mud2Vla2RheXNGdWxsLnNsaWNlKCAwICkgKSwgLy90YWJsZUhlYWRcclxuXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbmF2IGZvciBuZXh0L3ByZXYgbW9udGguXHJcbiAgICAgICAgY3JlYXRlTW9udGhOYXYgPSBmdW5jdGlvbiggbmV4dCApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBjcmVhdGVkIG1vbnRoIHRhZy5cclxuICAgICAgICAgICAgcmV0dXJuIF8ubm9kZShcclxuICAgICAgICAgICAgICAgICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgJyAnLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3NbICduYXYnICsgKCBuZXh0ID8gJ05leHQnIDogJ1ByZXYnICkgXSArIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGZvY3VzZWQgbW9udGggaXMgb3V0c2lkZSB0aGUgcmFuZ2UsIGRpc2FibGVkIHRoZSBidXR0b24uXHJcbiAgICAgICAgICAgICAgICAgICAgKCBuZXh0ICYmIHZpZXdzZXRPYmplY3QueWVhciA+PSBtYXhMaW1pdE9iamVjdC55ZWFyICYmIHZpZXdzZXRPYmplY3QubW9udGggPj0gbWF4TGltaXRPYmplY3QubW9udGggKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICggIW5leHQgJiYgdmlld3NldE9iamVjdC55ZWFyIDw9IG1pbkxpbWl0T2JqZWN0LnllYXIgJiYgdmlld3NldE9iamVjdC5tb250aCA8PSBtaW5MaW1pdE9iamVjdC5tb250aCApID9cclxuICAgICAgICAgICAgICAgICAgICAnICcgKyBzZXR0aW5ncy5rbGFzcy5uYXZEaXNhYmxlZCA6ICcnXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEtbmF2PScgKyAoIG5leHQgfHwgLTEgKSArICcgJyArXHJcbiAgICAgICAgICAgICAgICBfLmFyaWFBdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgKyAnX3RhYmxlJ1xyXG4gICAgICAgICAgICAgICAgfSkgKyAnICcgK1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlPVwiJyArIChuZXh0ID8gc2V0dGluZ3MubGFiZWxNb250aE5leHQgOiBzZXR0aW5ncy5sYWJlbE1vbnRoUHJldiApICsgJ1wiJ1xyXG4gICAgICAgICAgICApIC8vZW5kcmV0dXJuXHJcbiAgICAgICAgfSwgLy9jcmVhdGVNb250aE5hdlxyXG5cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBtb250aCBsYWJlbC5cclxuICAgICAgICAvL01hdGVyaWFsaXplIG1vZGlmaWVkXHJcbiAgICAgICAgY3JlYXRlTW9udGhMYWJlbCA9IGZ1bmN0aW9uKG92ZXJyaWRlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgbW9udGhzQ29sbGVjdGlvbiA9IHNldHRpbmdzLnNob3dNb250aHNTaG9ydCA/IHNldHRpbmdzLm1vbnRoc1Nob3J0IDogc2V0dGluZ3MubW9udGhzRnVsbFxyXG5cclxuICAgICAgICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSA9PSBcInNob3J0X21vbnRoc1wiKSB7XHJcbiAgICAgICAgICAgICAgbW9udGhzQ29sbGVjdGlvbiA9IHNldHRpbmdzLm1vbnRoc1Nob3J0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbW9udGhzIHRvIHNlbGVjdCwgYWRkIGEgZHJvcGRvd24gbWVudS5cclxuICAgICAgICAgICAgaWYgKCBzZXR0aW5ncy5zZWxlY3RNb250aHMgICYmIG92ZXJyaWRlID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdzZWxlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6ICdvcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiggbG9vcGVkTW9udGggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGxvb3BlZCBtb250aCBhbmQgbm8gY2xhc3Nlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aHNDb2xsZWN0aW9uWyBsb29wZWRNb250aCBdLCAwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGFuZCBzZWxlY3RlZCBpbmRleC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWU9JyArIGxvb3BlZE1vbnRoICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHZpZXdzZXRPYmplY3QubW9udGggPT0gbG9vcGVkTW9udGggPyAnIHNlbGVjdGVkJyA6ICcnICkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB2aWV3c2V0T2JqZWN0LnllYXIgPT0gbWluTGltaXRPYmplY3QueWVhciAmJiBsb29wZWRNb250aCA8IG1pbkxpbWl0T2JqZWN0Lm1vbnRoICkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggdmlld3NldE9iamVjdC55ZWFyID09IG1heExpbWl0T2JqZWN0LnllYXIgJiYgbG9vcGVkTW9udGggPiBtYXhMaW1pdE9iamVjdC5tb250aCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGRpc2FibGVkJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3Muc2VsZWN0TW9udGggKyAnIGJyb3dzZXItZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgKCBpc09wZW4gPyAnJyA6ICdkaXNhYmxlZCcgKSArICcgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCArICdfdGFibGUnIH0pICsgJyAnICtcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGU9XCInICsgc2V0dGluZ3MubGFiZWxNb250aFNlbGVjdCArICdcIidcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlID09IFwic2hvcnRfbW9udGhzXCIpXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3QgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBtb250aHNDb2xsZWN0aW9uWyBzZWxlY3RlZE9iamVjdC5tb250aCBdICk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBfLm5vZGUoICdkaXYnLCBtb250aHNDb2xsZWN0aW9uWyB2aWV3c2V0T2JqZWN0Lm1vbnRoIF0gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBuZWVkIGZvciBhIG1vbnRoIHNlbGVjdG9yXHJcbiAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBtb250aHNDb2xsZWN0aW9uWyB2aWV3c2V0T2JqZWN0Lm1vbnRoIF0sIHNldHRpbmdzLmtsYXNzLm1vbnRoIClcclxuICAgICAgICB9LCAvL2NyZWF0ZU1vbnRoTGFiZWxcclxuXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgeWVhciBsYWJlbC5cclxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxyXG4gICAgICAgIGNyZWF0ZVllYXJMYWJlbCA9IGZ1bmN0aW9uKG92ZXJyaWRlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZm9jdXNlZFllYXIgPSB2aWV3c2V0T2JqZWN0LnllYXIsXHJcblxyXG4gICAgICAgICAgICAvLyBJZiB5ZWFycyBzZWxlY3RvciBpcyBzZXQgdG8gYSBsaXRlcmFsIFwidHJ1ZVwiLCBzZXQgaXQgdG8gNS4gT3RoZXJ3aXNlXHJcbiAgICAgICAgICAgIC8vIGRpdmlkZSBpbiBoYWxmIHRvIGdldCBoYWxmIGJlZm9yZSBhbmQgaGFsZiBhZnRlciBmb2N1c2VkIHllYXIuXHJcbiAgICAgICAgICAgIG51bWJlclllYXJzID0gc2V0dGluZ3Muc2VsZWN0WWVhcnMgPT09IHRydWUgPyA1IDogfn4oIHNldHRpbmdzLnNlbGVjdFllYXJzIC8gMiApXHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgeWVhcnMgdG8gc2VsZWN0LCBhZGQgYSBkcm9wZG93biBtZW51LlxyXG4gICAgICAgICAgICBpZiAoIG51bWJlclllYXJzICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhclxyXG4gICAgICAgICAgICAgICAgICAgIG1pblllYXIgPSBtaW5MaW1pdE9iamVjdC55ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFllYXIgPSBtYXhMaW1pdE9iamVjdC55ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgPSBmb2N1c2VkWWVhciAtIG51bWJlclllYXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RZZWFyID0gZm9jdXNlZFllYXIgKyBudW1iZXJZZWFyc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBtaW4geWVhciBpcyBncmVhdGVyIHRoYW4gdGhlIGxvd2VzdCB5ZWFyLCBpbmNyZWFzZSB0aGUgaGlnaGVzdCB5ZWFyXHJcbiAgICAgICAgICAgICAgICAvLyBieSB0aGUgZGlmZmVyZW5jZSBhbmQgc2V0IHRoZSBsb3dlc3QgeWVhciB0byB0aGUgbWluIHllYXIuXHJcbiAgICAgICAgICAgICAgICBpZiAoIG1pblllYXIgPiBsb3dlc3RZZWFyICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RZZWFyICs9IG1pblllYXIgLSBsb3dlc3RZZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0WWVhciA9IG1pblllYXJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbWF4IHllYXIgaXMgbGVzcyB0aGFuIHRoZSBoaWdoZXN0IHllYXIsIGRlY3JlYXNlIHRoZSBsb3dlc3QgeWVhclxyXG4gICAgICAgICAgICAgICAgLy8gYnkgdGhlIGxvd2VyIG9mIHRoZSB0d286IGF2YWlsYWJsZSBhbmQgbmVlZGVkIHllYXJzLiBUaGVuIHNldCB0aGVcclxuICAgICAgICAgICAgICAgIC8vIGhpZ2hlc3QgeWVhciB0byB0aGUgbWF4IHllYXIuXHJcbiAgICAgICAgICAgICAgICBpZiAoIG1heFllYXIgPCBoaWdoZXN0WWVhciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YWlsYWJsZVllYXJzID0gbG93ZXN0WWVhciAtIG1pblllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRlZFllYXJzID0gaGlnaGVzdFllYXIgLSBtYXhZZWFyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgLT0gYXZhaWxhYmxlWWVhcnMgPiBuZWVkZWRZZWFycyA/IG5lZWRlZFllYXJzIDogYXZhaWxhYmxlWWVhcnNcclxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0WWVhciA9IG1heFllYXJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNldHRpbmdzLnNlbGVjdFllYXJzICAmJiBvdmVycmlkZSA9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ3NlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBsb3dlc3RZZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBoaWdoZXN0WWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiAnb3B0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKCBsb29wZWRZZWFyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbG9vcGVkIHllYXIgYW5kIG5vIGNsYXNzZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BlZFllYXIsIDAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGFuZCBzZWxlY3RlZCBpbmRleC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlPScgKyBsb29wZWRZZWFyICsgKCBmb2N1c2VkWWVhciA9PSBsb29wZWRZZWFyID8gJyBzZWxlY3RlZCcgOiAnJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3Muc2VsZWN0WWVhciArICcgYnJvd3Nlci1kZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBpc09wZW4gPyAnJyA6ICdkaXNhYmxlZCcgKSArICcgJyArIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgKyAnX3RhYmxlJyB9KSArICcgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZT1cIicgKyBzZXR0aW5ncy5sYWJlbFllYXJTZWxlY3QgKyAnXCInXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgPT0gXCJyYXdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBmb2N1c2VkWWVhciApXHJcblxyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UganVzdCByZXR1cm4gdGhlIHllYXIgZm9jdXNlZFxyXG4gICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2JywgZm9jdXNlZFllYXIsIHNldHRpbmdzLmtsYXNzLnllYXIgKVxyXG4gICAgICAgIH0gLy9jcmVhdGVZZWFyTGFiZWxcclxuXHJcblxyXG4gICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXHJcbiAgICAgICAgY3JlYXRlRGF5TGFiZWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9iamVjdCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLm5vZGUoICdkaXYnLCBzZWxlY3RlZE9iamVjdC5kYXRlKVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gXy5ub2RlKCAnZGl2Jywgbm93T2JqZWN0LmRhdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjcmVhdGVXZWVrZGF5TGFiZWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGRpc3BsYXlfZGF5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5X2RheSA9IHNlbGVjdGVkT2JqZWN0LmRheTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheV9kYXkgPSBub3dPYmplY3QuZGF5O1xyXG4gICAgICAgICAgICB2YXIgd2Vla2RheSA9IHNldHRpbmdzLndlZWtkYXlzRnVsbFsgZGlzcGxheV9kYXkgXVxyXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gdGhlIGVudGlyZSBjYWxlbmRhci5cclxucmV0dXJuIF8ubm9kZShcclxuICAgICAgICAvLyBEYXRlIHByZXNlbnRhdGlvbiBWaWV3XHJcbiAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgICAgIF8ubm9kZShcclxuICAgICAgICAgICAgICAgICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlV2Vla2RheUxhYmVsKCksXHJcbiAgICAgICAgICAgICAgICBcInBpY2tlcl9fd2Vla2RheS1kaXNwbGF5XCJcclxuICAgICAgICAgICAgKStcclxuICAgICAgICAgICAgXy5ub2RlKFxyXG4gICAgICAgICAgICAgICAgLy8gRGl2IGZvciBzaG9ydCBNb250aFxyXG4gICAgICAgICAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVNb250aExhYmVsKFwic2hvcnRfbW9udGhzXCIpLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3MubW9udGhfZGlzcGxheVxyXG4gICAgICAgICAgICApK1xyXG4gICAgICAgICAgICBfLm5vZGUoXHJcbiAgICAgICAgICAgICAgICAvLyBEaXYgZm9yIERheVxyXG4gICAgICAgICAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXlMYWJlbCgpICxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLmRheV9kaXNwbGF5XHJcbiAgICAgICAgICAgICkrXHJcbiAgICAgICAgICAgIF8ubm9kZShcclxuICAgICAgICAgICAgICAgIC8vIERpdiBmb3IgWWVhclxyXG4gICAgICAgICAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVZZWFyTGFiZWwoXCJyYXdcIikgLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3MueWVhcl9kaXNwbGF5XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgc2V0dGluZ3Mua2xhc3MuZGF0ZV9kaXNwbGF5XHJcbiAgICApK1xyXG4gICAgLy8gQ2FsZW5kYXIgY29udGFpbmVyXHJcbiAgICBfLm5vZGUoJ2RpdicsXHJcbiAgICAgICAgXy5ub2RlKCdkaXYnLFxyXG4gICAgICAgICggc2V0dGluZ3Muc2VsZWN0WWVhcnMgPyAgY3JlYXRlTW9udGhMYWJlbCgpICsgY3JlYXRlWWVhckxhYmVsKCkgOiBjcmVhdGVNb250aExhYmVsKCkgKyBjcmVhdGVZZWFyTGFiZWwoKSApICtcclxuICAgICAgICBjcmVhdGVNb250aE5hdigpICsgY3JlYXRlTW9udGhOYXYoIDEgKSxcclxuICAgICAgICBzZXR0aW5ncy5rbGFzcy5oZWFkZXJcclxuICAgICkgKyBfLm5vZGUoXHJcbiAgICAgICAgJ3RhYmxlJyxcclxuICAgICAgICB0YWJsZUhlYWQgK1xyXG4gICAgICAgIF8ubm9kZShcclxuICAgICAgICAgICAgJ3Rib2R5JyxcclxuICAgICAgICAgICAgXy5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IFdFRUtTX0lOX0NBTEVOREFSIC0gMSxcclxuICAgICAgICAgICAgICAgIGk6IDEsXHJcbiAgICAgICAgICAgICAgICBub2RlOiAndHInLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIHJvd0NvdW50ZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IGFuZCB0aGUgbW9udGggc3RhcnRzIG9uIFN1bmRheSwgc2hpZnQgdGhlIGRhdGUgYmFjayBhIHdlZWsuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNoaWZ0RGF0ZUJ5ID0gc2V0dGluZ3MuZmlyc3REYXkgJiYgY2FsZW5kYXIuY3JlYXRlKFsgdmlld3NldE9iamVjdC55ZWFyLCB2aWV3c2V0T2JqZWN0Lm1vbnRoLCAxIF0pLmRheSA9PT0gMCA/IC03IDogMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmdyb3VwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogREFZU19JTl9XRUVLICogcm93Q291bnRlciAtIHZpZXdzZXRPYmplY3QuZGF5ICsgc2hpZnREYXRlQnkgKyAxLCAvLyBBZGQgMSBmb3Igd2Vla2RheSAwaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWluICsgREFZU19JTl9XRUVLIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiAndGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIHRhcmdldERhdGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHRpbWUgZGF0ZSBmcm9tIGEgcmVsYXRpdmUgZGF0ZSB0byBhIHRhcmdldCBkYXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGUgPSBjYWxlbmRhci5jcmVhdGUoWyB2aWV3c2V0T2JqZWN0LnllYXIsIHZpZXdzZXRPYmplY3QubW9udGgsIHRhcmdldERhdGUgKyAoIHNldHRpbmdzLmZpcnN0RGF5ID8gMSA6IDAgKSBdKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHNlbGVjdGVkT2JqZWN0ICYmIHNlbGVjdGVkT2JqZWN0LnBpY2sgPT0gdGFyZ2V0RGF0ZS5waWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkID0gaGlnaGxpZ2h0ZWRPYmplY3QgJiYgaGlnaGxpZ2h0ZWRPYmplY3QucGljayA9PSB0YXJnZXREYXRlLnBpY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQgPSBkaXNhYmxlZENvbGxlY3Rpb24gJiYgY2FsZW5kYXIuZGlzYWJsZWQoIHRhcmdldERhdGUgKSB8fCB0YXJnZXREYXRlLnBpY2sgPCBtaW5MaW1pdE9iamVjdC5waWNrIHx8IHRhcmdldERhdGUucGljayA+IG1heExpbWl0T2JqZWN0LnBpY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBfLnRyaWdnZXIoIGNhbGVuZGFyLmZvcm1hdHMudG9TdHJpbmcsIGNhbGVuZGFyLCBbIHNldHRpbmdzLmZvcm1hdCwgdGFyZ2V0RGF0ZSBdIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5ub2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oIGtsYXNzZXMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYGluZm9jdXNgIG9yIGBvdXRmb2N1c2AgY2xhc3NlcyBiYXNlZCBvbiBtb250aCBpbiB2aWV3LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzZXMucHVzaCggdmlld3NldE9iamVjdC5tb250aCA9PSB0YXJnZXREYXRlLm1vbnRoID8gc2V0dGluZ3Mua2xhc3MuaW5mb2N1cyA6IHNldHRpbmdzLmtsYXNzLm91dGZvY3VzIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgdG9kYXlgIGNsYXNzIGlmIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG5vd09iamVjdC5waWNrID09IHRhcmdldERhdGUucGljayApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5ub3cgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgc2VsZWN0ZWRgIGNsYXNzIGlmIHNvbWV0aGluZydzIHNlbGVjdGVkIGFuZCB0aGUgdGltZSBtYXRjaGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNTZWxlY3RlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5zZWxlY3RlZCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGBoaWdobGlnaHRlZGAgY2xhc3MgaWYgc29tZXRoaW5nJ3MgaGlnaGxpZ2h0ZWQgYW5kIHRoZSB0aW1lIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0hpZ2hsaWdodGVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHNldHRpbmdzLmtsYXNzLmhpZ2hsaWdodGVkIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYGRpc2FibGVkYCBjbGFzcyBpZiBzb21ldGhpbmcncyBkaXNhYmxlZCBhbmQgdGhlIG9iamVjdCBtYXRjaGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNEaXNhYmxlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5kaXNhYmxlZCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2xhc3Nlcy5qb2luKCAnICcgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoWyBzZXR0aW5ncy5rbGFzcy5kYXkgXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1waWNrPScgKyB0YXJnZXREYXRlLnBpY2sgKyAnICcgKyBfLmFyaWFBdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiAnZ3JpZGNlbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmb3JtYXR0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkICYmIGNhbGVuZGFyLiRub2RlLnZhbCgpID09PSBmb3JtYXR0ZWREYXRlID8gdHJ1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlZGVzY2VuZGFudDogaXNIaWdobGlnaHRlZCA/IHRydWUgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmFyaWFBdHRyKHsgcm9sZTogJ3ByZXNlbnRhdGlvbicgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIC8vZW5kcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXSAvL2VuZHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICksXHJcbiAgICAgICAgc2V0dGluZ3Mua2xhc3MudGFibGUsXHJcbiAgICAgICAgJ2lkPVwiJyArIGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZScgKyAnXCIgJyArIF8uYXJpYUF0dHIoe1xyXG4gICAgICAgICAgICByb2xlOiAnZ3JpZCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCxcclxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgKVxyXG4gICAgLCBzZXR0aW5ncy5rbGFzcy5jYWxlbmRhcl9jb250YWluZXIpIC8vIGVuZCBjYWxlbmRhclxyXG5cclxuICAgICArXHJcblxyXG4gICAgLy8gKiBGb3IgRmlyZWZveCBmb3JtcyB0byBzdWJtaXQsIG1ha2Ugc3VyZSB0byBzZXQgdGhlIGJ1dHRvbnPigJkgYHR5cGVgIGF0dHJpYnV0ZXMgYXMg4oCcYnV0dG9u4oCdLlxyXG4gICAgXy5ub2RlKFxyXG4gICAgICAgICdkaXYnLFxyXG4gICAgICAgIF8ubm9kZSggJ2J1dHRvbicsIHNldHRpbmdzLnRvZGF5LCBcImJ0bi1mbGF0IHBpY2tlcl9fdG9kYXlcIixcclxuICAgICAgICAgICAgJ3R5cGU9YnV0dG9uIGRhdGEtcGljaz0nICsgbm93T2JqZWN0LnBpY2sgK1xyXG4gICAgICAgICAgICAoIGlzT3BlbiAmJiAhY2FsZW5kYXIuZGlzYWJsZWQobm93T2JqZWN0KSA/ICcnIDogJyBkaXNhYmxlZCcgKSArICcgJyArXHJcbiAgICAgICAgICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgfSkgKSArXHJcbiAgICAgICAgXy5ub2RlKCAnYnV0dG9uJywgc2V0dGluZ3MuY2xlYXIsIFwiYnRuLWZsYXQgcGlja2VyX19jbGVhclwiLFxyXG4gICAgICAgICAgICAndHlwZT1idXR0b24gZGF0YS1jbGVhcj0xJyArXHJcbiAgICAgICAgICAgICggaXNPcGVuID8gJycgOiAnIGRpc2FibGVkJyApICsgJyAnICtcclxuICAgICAgICAgICAgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCB9KSApICtcclxuICAgICAgICBfLm5vZGUoJ2J1dHRvbicsIHNldHRpbmdzLmNsb3NlLCBcImJ0bi1mbGF0IHBpY2tlcl9fY2xvc2VcIixcclxuICAgICAgICAgICAgJ3R5cGU9YnV0dG9uIGRhdGEtY2xvc2U9dHJ1ZSAnICtcclxuICAgICAgICAgICAgKCBpc09wZW4gPyAnJyA6ICcgZGlzYWJsZWQnICkgKyAnICcgK1xyXG4gICAgICAgICAgICBfLmFyaWFBdHRyKHsgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkIH0pICksXHJcbiAgICAgICAgc2V0dGluZ3Mua2xhc3MuZm9vdGVyXHJcbiAgICApIC8vZW5kcmV0dXJuXHJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5ub2Rlc1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBkYXRlIHBpY2tlciBkZWZhdWx0cy5cclxuICovXHJcbkRhdGVQaWNrZXIuZGVmYXVsdHMgPSAoZnVuY3Rpb24oIHByZWZpeCApIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyBUaGUgdGl0bGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgbW9udGggbmF2IGJ1dHRvbnNcclxuICAgICAgICBsYWJlbE1vbnRoTmV4dDogJ05leHQgbW9udGgnLFxyXG4gICAgICAgIGxhYmVsTW9udGhQcmV2OiAnUHJldmlvdXMgbW9udGgnLFxyXG5cclxuICAgICAgICAvLyBUaGUgdGl0bGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZHJvcGRvd24gc2VsZWN0b3JzXHJcbiAgICAgICAgbGFiZWxNb250aFNlbGVjdDogJ1NlbGVjdCBhIG1vbnRoJyxcclxuICAgICAgICBsYWJlbFllYXJTZWxlY3Q6ICdTZWxlY3QgYSB5ZWFyJyxcclxuXHJcbiAgICAgICAgLy8gTW9udGhzIGFuZCB3ZWVrZGF5c1xyXG4gICAgICAgIG1vbnRoc0Z1bGw6IFsgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInIF0sXHJcbiAgICAgICAgbW9udGhzU2hvcnQ6IFsgJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJyBdLFxyXG4gICAgICAgIHdlZWtkYXlzRnVsbDogWyAnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknIF0sXHJcbiAgICAgICAgd2Vla2RheXNTaG9ydDogWyAnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JyBdLFxyXG5cclxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxyXG4gICAgICAgIHdlZWtkYXlzTGV0dGVyOiBbICdTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJyBdLFxyXG5cclxuICAgICAgICAvLyBUb2RheSBhbmQgY2xlYXJcclxuICAgICAgICB0b2RheTogJ1RvZGF5JyxcclxuICAgICAgICBjbGVhcjogJ0NsZWFyJyxcclxuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcclxuXHJcbiAgICAgICAgLy8gVGhlIGZvcm1hdCB0byBzaG93IG9uIHRoZSBgaW5wdXRgIGVsZW1lbnRcclxuICAgICAgICBmb3JtYXQ6ICdkIG1tbW0sIHl5eXknLFxyXG5cclxuICAgICAgICAvLyBDbGFzc2VzXHJcbiAgICAgICAga2xhc3M6IHtcclxuXHJcbiAgICAgICAgICAgIHRhYmxlOiBwcmVmaXggKyAndGFibGUnLFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyOiBwcmVmaXggKyAnaGVhZGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBNYXRlcmlhbGl6ZSBBZGRlZCBrbGFzc2VzXHJcbiAgICAgICAgICAgIGRhdGVfZGlzcGxheTogcHJlZml4ICsgJ2RhdGUtZGlzcGxheScsXHJcbiAgICAgICAgICAgIGRheV9kaXNwbGF5OiBwcmVmaXggKyAnZGF5LWRpc3BsYXknLFxyXG4gICAgICAgICAgICBtb250aF9kaXNwbGF5OiBwcmVmaXggKyAnbW9udGgtZGlzcGxheScsXHJcbiAgICAgICAgICAgIHllYXJfZGlzcGxheTogcHJlZml4ICsgJ3llYXItZGlzcGxheScsXHJcbiAgICAgICAgICAgIGNhbGVuZGFyX2NvbnRhaW5lcjogcHJlZml4ICsgJ2NhbGVuZGFyLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIC8vIGVuZFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBuYXZQcmV2OiBwcmVmaXggKyAnbmF2LS1wcmV2JyxcclxuICAgICAgICAgICAgbmF2TmV4dDogcHJlZml4ICsgJ25hdi0tbmV4dCcsXHJcbiAgICAgICAgICAgIG5hdkRpc2FibGVkOiBwcmVmaXggKyAnbmF2LS1kaXNhYmxlZCcsXHJcblxyXG4gICAgICAgICAgICBtb250aDogcHJlZml4ICsgJ21vbnRoJyxcclxuICAgICAgICAgICAgeWVhcjogcHJlZml4ICsgJ3llYXInLFxyXG5cclxuICAgICAgICAgICAgc2VsZWN0TW9udGg6IHByZWZpeCArICdzZWxlY3QtLW1vbnRoJyxcclxuICAgICAgICAgICAgc2VsZWN0WWVhcjogcHJlZml4ICsgJ3NlbGVjdC0teWVhcicsXHJcblxyXG4gICAgICAgICAgICB3ZWVrZGF5czogcHJlZml4ICsgJ3dlZWtkYXknLFxyXG5cclxuICAgICAgICAgICAgZGF5OiBwcmVmaXggKyAnZGF5JyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHByZWZpeCArICdkYXktLWRpc2FibGVkJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHByZWZpeCArICdkYXktLXNlbGVjdGVkJyxcclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ6IHByZWZpeCArICdkYXktLWhpZ2hsaWdodGVkJyxcclxuICAgICAgICAgICAgbm93OiBwcmVmaXggKyAnZGF5LS10b2RheScsXHJcbiAgICAgICAgICAgIGluZm9jdXM6IHByZWZpeCArICdkYXktLWluZm9jdXMnLFxyXG4gICAgICAgICAgICBvdXRmb2N1czogcHJlZml4ICsgJ2RheS0tb3V0Zm9jdXMnLFxyXG5cclxuICAgICAgICAgICAgZm9vdGVyOiBwcmVmaXggKyAnZm9vdGVyJyxcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkNsZWFyOiBwcmVmaXggKyAnYnV0dG9uLS1jbGVhcicsXHJcbiAgICAgICAgICAgIGJ1dHRvblRvZGF5OiBwcmVmaXggKyAnYnV0dG9uLS10b2RheScsXHJcbiAgICAgICAgICAgIGJ1dHRvbkNsb3NlOiBwcmVmaXggKyAnYnV0dG9uLS1jbG9zZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCBQaWNrZXIua2xhc3NlcygpLnBpY2tlciArICdfXycgKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHRlbmQgdGhlIHBpY2tlciB0byBhZGQgdGhlIGRhdGUgcGlja2VyLlxyXG4gKi9cclxuUGlja2VyLmV4dGVuZCggJ3BpY2thZGF0ZScsIERhdGVQaWNrZXIgKVxyXG5cclxuXHJcbn0pKTtcclxuXHJcblxyXG47KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICQuZm4uY2hhcmFjdGVyQ291bnRlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgJGNvdW50ZXJFbGVtZW50ID0gJGlucHV0LnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpO1xyXG5cclxuICAgICAgLy8gY2hhcmFjdGVyIGNvdW50ZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCBhcHBlbmRlZCB0byB0aGUgcGFyZW50IGNvbnRhaW5lclxyXG4gICAgICBpZiAoJGNvdW50ZXJFbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGl0SGFzTGVuZ3RoQXR0cmlidXRlID0gJGlucHV0LmF0dHIoJ2RhdGEtbGVuZ3RoJykgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmKGl0SGFzTGVuZ3RoQXR0cmlidXRlKXtcclxuICAgICAgICAkaW5wdXQub24oJ2lucHV0JywgdXBkYXRlQ291bnRlcik7XHJcbiAgICAgICAgJGlucHV0Lm9uKCdmb2N1cycsIHVwZGF0ZUNvdW50ZXIpO1xyXG4gICAgICAgICRpbnB1dC5vbignYmx1cicsIHJlbW92ZUNvdW50ZXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgYWRkQ291bnRlckVsZW1lbnQoJGlucHV0KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKXtcclxuICAgIHZhciBtYXhMZW5ndGggICAgID0gKyQodGhpcykuYXR0cignZGF0YS1sZW5ndGgnKSxcclxuICAgIGFjdHVhbExlbmd0aCAgICAgID0gKyQodGhpcykudmFsKCkubGVuZ3RoLFxyXG4gICAgaXNWYWxpZExlbmd0aCAgICAgPSBhY3R1YWxMZW5ndGggPD0gbWF4TGVuZ3RoO1xyXG5cclxuICAgICQodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJylcclxuICAgICAgICAgICAgICAgICAgICAuaHRtbCggYWN0dWFsTGVuZ3RoICsgJy8nICsgbWF4TGVuZ3RoKTtcclxuXHJcbiAgICBhZGRJbnB1dFN0eWxlKGlzVmFsaWRMZW5ndGgsICQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkQ291bnRlckVsZW1lbnQoJGlucHV0KSB7XHJcbiAgICB2YXIgJGNvdW50ZXJFbGVtZW50ID0gJGlucHV0LnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpO1xyXG5cclxuICAgIGlmICgkY291bnRlckVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkY291bnRlckVsZW1lbnQgPSAkKCc8c3Bhbi8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjaGFyYWN0ZXItY291bnRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ2Zsb2F0JywncmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdmb250LXNpemUnLCcxMnB4JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnaGVpZ2h0JywgMSk7XHJcblxyXG4gICAgJGlucHV0LnBhcmVudCgpLmFwcGVuZCgkY291bnRlckVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQ291bnRlckVsZW1lbnQoKXtcclxuICAgICQodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbCgnJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRJbnB1dFN0eWxlKGlzVmFsaWRMZW5ndGgsICRpbnB1dCl7XHJcbiAgICB2YXIgaW5wdXRIYXNJbnZhbGlkQ2xhc3MgPSAkaW5wdXQuaGFzQ2xhc3MoJ2ludmFsaWQnKTtcclxuICAgIGlmIChpc1ZhbGlkTGVuZ3RoICYmIGlucHV0SGFzSW52YWxpZENsYXNzKSB7XHJcbiAgICAgICRpbnB1dC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighaXNWYWxpZExlbmd0aCAmJiAhaW5wdXRIYXNJbnZhbGlkQ2xhc3Mpe1xyXG4gICAgICAkaW5wdXQucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XHJcbiAgICAgICRpbnB1dC5hZGRDbGFzcygnaW52YWxpZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJ2lucHV0LCB0ZXh0YXJlYScpLmNoYXJhY3RlckNvdW50ZXIoKTtcclxuICB9KTtcclxuXHJcbn0oIGpRdWVyeSApKTtcclxuOyhmdW5jdGlvbiAoJCkge1xyXG5cclxuICB2YXIgbWV0aG9kcyA9IHtcclxuXHJcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDIwMCwgLy8gbXNcclxuICAgICAgICBkaXN0OiAtMTAwLCAvLyB6b29tIHNjYWxlIFRPRE86IG1ha2UgdGhpcyBtb3JlIGludHVpdGl2ZSBhcyBhbiBvcHRpb25cclxuICAgICAgICBzaGlmdDogMCwgLy8gc3BhY2luZyBmb3IgY2VudGVyIGltYWdlXHJcbiAgICAgICAgcGFkZGluZzogMCwgLy8gUGFkZGluZyBiZXR3ZWVuIG5vbiBjZW50ZXIgaXRlbXNcclxuICAgICAgICBmdWxsV2lkdGg6IGZhbHNlLCAvLyBDaGFuZ2UgdG8gZnVsbCB3aWR0aCBzdHlsZXNcclxuICAgICAgICBpbmRpY2F0b3JzOiBmYWxzZSwgLy8gVG9nZ2xlIGluZGljYXRvcnNcclxuICAgICAgICBub1dyYXA6IGZhbHNlLCAvLyBEb24ndCB3cmFwIGFyb3VuZCBhbmQgY3ljbGUgdGhyb3VnaCBpdGVtcy5cclxuICAgICAgICBvbkN5Y2xlVG86IG51bGwgLy8gQ2FsbGJhY2sgZm9yIHdoZW4gYSBuZXcgc2xpZGUgaXMgY3ljbGVkIHRvLlxyXG4gICAgICB9O1xyXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICB2YXIgbmFtZXNwYWNlID0gTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcoJCh0aGlzKSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuXHJcbiAgICAgICAgdmFyIHVuaXF1ZU5hbWVzcGFjZSA9IG5hbWVzcGFjZStpO1xyXG4gICAgICAgIHZhciBpbWFnZXMsIGl0ZW1fd2lkdGgsIGl0ZW1faGVpZ2h0LCBvZmZzZXQsIGNlbnRlciwgcHJlc3NlZCwgZGltLCBjb3VudCxcclxuICAgICAgICAgICAgcmVmZXJlbmNlLCByZWZlcmVuY2VZLCBhbXBsaXR1ZGUsIHRhcmdldCwgdmVsb2NpdHksIHNjcm9sbGluZyxcclxuICAgICAgICAgICAgeGZvcm0sIGZyYW1lLCB0aW1lc3RhbXAsIHRpY2tlciwgZHJhZ2dlZCwgdmVydGljYWxfZHJhZ2dlZDtcclxuICAgICAgICB2YXIgJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcclxuICAgICAgICB2YXIgc2Nyb2xsaW5nVGltZW91dCA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplXHJcbiAgICAgICAgdmFyIHZpZXcgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBzaG93SW5kaWNhdG9ycyA9IHZpZXcuYXR0cignZGF0YS1pbmRpY2F0b3JzJykgfHwgb3B0aW9ucy5pbmRpY2F0b3JzO1xyXG5cclxuXHJcbiAgICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICAgIHZhciBzZXRDYXJvdXNlbEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIGZpcnN0SW1hZ2UgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtIGltZycpLmZpcnN0KCk7XHJcbiAgICAgICAgICBpZiAoZmlyc3RJbWFnZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGZpcnN0SW1hZ2UucHJvcCgnY29tcGxldGUnKSkge1xyXG4gICAgICAgICAgICAgIHZpZXcuY3NzKCdoZWlnaHQnLCBmaXJzdEltYWdlLmhlaWdodCgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBmaXJzdEltYWdlLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZpZXcuY3NzKCdoZWlnaHQnLCAkKHRoaXMpLmhlaWdodCgpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZpZXcuY3NzKCdoZWlnaHQnLCBpbWFnZUhlaWdodCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XHJcbiAgICAgICAgICBvcHRpb25zLmRpc3QgPSAwO1xyXG4gICAgICAgICAgc2V0Q2Fyb3VzZWxIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAvLyBPZmZzZXQgZml4ZWQgaXRlbXMgd2hlbiBpbmRpY2F0b3JzLlxyXG4gICAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XHJcbiAgICAgICAgICAgIHZpZXcuZmluZCgnLmNhcm91c2VsLWZpeGVkLWl0ZW0nKS5hZGRDbGFzcygnd2l0aC1pbmRpY2F0b3JzJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgZG91YmxlIGluaXRpYWxpemUuXHJcbiAgICAgICAgaWYgKHZpZXcuaGFzQ2xhc3MoJ2luaXRpYWxpemVkJykpIHtcclxuICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIHZhcmlhYmxlc1xyXG4gICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xyXG5cclxuICAgICAgICAgIC8vIFJlZHJhdyBjYXJvdXNlbC5cclxuICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2Fyb3VzZWxOZXh0JywgWzAuMDAwMDAxXSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2aWV3LmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xyXG4gICAgICAgIHByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICBvZmZzZXQgPSB0YXJnZXQgPSAwO1xyXG4gICAgICAgIGltYWdlcyA9IFtdO1xyXG4gICAgICAgIGl0ZW1fd2lkdGggPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XHJcbiAgICAgICAgaXRlbV9oZWlnaHQgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIGRpbSA9IGl0ZW1fd2lkdGggKiAyICsgb3B0aW9ucy5wYWRkaW5nO1xyXG5cclxuICAgICAgICB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgaW1hZ2VzLnB1c2goJCh0aGlzKVswXSk7XHJcbiAgICAgICAgICBpZiAoc2hvd0luZGljYXRvcnMpIHtcclxuICAgICAgICAgICAgdmFyICRpbmRpY2F0b3IgPSAkKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgYWN0aXZlIHRvIGZpcnN0IGJ5IGRlZmF1bHQuXHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgJGluZGljYXRvci5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBjbGlja3Mgb24gaW5kaWNhdG9ycy5cclxuICAgICAgICAgICAgJGluZGljYXRvci5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICAgICAgICBjeWNsZVRvKGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRpbmRpY2F0b3JzLmFwcGVuZCgkaW5kaWNhdG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XHJcbiAgICAgICAgICB2aWV3LmFwcGVuZCgkaW5kaWNhdG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50ID0gaW1hZ2VzLmxlbmd0aDtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwRXZlbnRzKCkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0YXApO1xyXG4gICAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWcpO1xyXG4gICAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcmVsZWFzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRhcCk7XHJcbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWcpO1xyXG4gICAgICAgICAgdmlld1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVsZWFzZSk7XHJcbiAgICAgICAgICB2aWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZWxlYXNlKTtcclxuICAgICAgICAgIHZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGljayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB4cG9zKGUpIHtcclxuICAgICAgICAgIC8vIHRvdWNoIGV2ZW50XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBtb3VzZSBldmVudFxyXG4gICAgICAgICAgcmV0dXJuIGUuY2xpZW50WDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHlwb3MoZSkge1xyXG4gICAgICAgICAgLy8gdG91Y2ggZXZlbnRcclxuICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIG1vdXNlIGV2ZW50XHJcbiAgICAgICAgICByZXR1cm4gZS5jbGllbnRZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd3JhcCh4KSB7XHJcbiAgICAgICAgICByZXR1cm4gKHggPj0gY291bnQpID8gKHggJSBjb3VudCkgOiAoeCA8IDApID8gd3JhcChjb3VudCArICh4ICUgY291bnQpKSA6IHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGwoeCkge1xyXG4gICAgICAgICAgLy8gVHJhY2sgc2Nyb2xsaW5nIHN0YXRlXHJcbiAgICAgICAgICBzY3JvbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKCF2aWV3Lmhhc0NsYXNzKCdzY3JvbGxpbmcnKSkge1xyXG4gICAgICAgICAgICB2aWV3LmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzY3JvbGxpbmdUaW1lb3V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChzY3JvbGxpbmdUaW1lb3V0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNjcm9sbGluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZpZXcucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xyXG4gICAgICAgICAgfSwgb3B0aW9ucy5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgLy8gU3RhcnQgYWN0dWFsIHNjcm9sbFxyXG4gICAgICAgICAgdmFyIGksIGhhbGYsIGRlbHRhLCBkaXIsIHR3ZWVuLCBlbCwgYWxpZ25tZW50LCB4VHJhbnNsYXRpb247XHJcbiAgICAgICAgICB2YXIgbGFzdENlbnRlciA9IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBvZmZzZXQgPSAodHlwZW9mIHggPT09ICdudW1iZXInKSA/IHggOiBvZmZzZXQ7XHJcbiAgICAgICAgICBjZW50ZXIgPSBNYXRoLmZsb29yKChvZmZzZXQgKyBkaW0gLyAyKSAvIGRpbSk7XHJcbiAgICAgICAgICBkZWx0YSA9IG9mZnNldCAtIGNlbnRlciAqIGRpbTtcclxuICAgICAgICAgIGRpciA9IChkZWx0YSA8IDApID8gMSA6IC0xO1xyXG4gICAgICAgICAgdHdlZW4gPSAtZGlyICogZGVsdGEgKiAyIC8gZGltO1xyXG4gICAgICAgICAgaGFsZiA9IGNvdW50ID4+IDE7XHJcblxyXG4gICAgICAgICAgaWYgKCFvcHRpb25zLmZ1bGxXaWR0aCkge1xyXG4gICAgICAgICAgICBhbGlnbm1lbnQgPSAndHJhbnNsYXRlWCgnICsgKHZpZXdbMF0uY2xpZW50V2lkdGggLSBpdGVtX3dpZHRoKSAvIDIgKyAncHgpICc7XHJcbiAgICAgICAgICAgIGFsaWdubWVudCArPSAndHJhbnNsYXRlWSgnICsgKHZpZXdbMF0uY2xpZW50SGVpZ2h0IC0gaXRlbV9oZWlnaHQpIC8gMiArICdweCknO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxpZ25tZW50ID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFNldCBpbmRpY2F0b3IgYWN0aXZlXHJcbiAgICAgICAgICBpZiAoc2hvd0luZGljYXRvcnMpIHtcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSAoY2VudGVyICUgY291bnQpO1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlSW5kaWNhdG9yID0gJGluZGljYXRvcnMuZmluZCgnLmluZGljYXRvci1pdGVtLmFjdGl2ZScpO1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlSW5kaWNhdG9yLmluZGV4KCkgIT09IGRpZmYpIHtcclxuICAgICAgICAgICAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICRpbmRpY2F0b3JzLmZpbmQoJy5pbmRpY2F0b3ItaXRlbScpLmVxKGRpZmYpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNlbnRlclxyXG4gICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxyXG4gICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCB8fCAoY2VudGVyID49IDAgJiYgY2VudGVyIDwgY291bnQpKSB7XHJcbiAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyKV07XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIGNlbnRlciBpdGVtLlxyXG4gICAgICAgICAgICBpZiAoISQoZWwpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgIHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgJChlbCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsLnN0eWxlW3hmb3JtXSA9IGFsaWdubWVudCArXHJcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoLWRlbHRhIC8gMikgKyAncHgpJyArXHJcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoZGlyICogb3B0aW9ucy5zaGlmdCAqIHR3ZWVuICogaSkgKyAncHgpJyArXHJcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyAob3B0aW9ucy5kaXN0ICogdHdlZW4pICsgJ3B4KSc7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkgeyB0d2VlbmVkT3BhY2l0eSA9IDE7IH1cclxuICAgICAgICAgICAgZWxzZSB7IHR3ZWVuZWRPcGFjaXR5ID0gMSAtIDAuMiAqIHR3ZWVuOyB9XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0d2VlbmVkT3BhY2l0eTtcclxuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9yIChpID0gMTsgaSA8PSBoYWxmOyArK2kpIHtcclxuICAgICAgICAgICAgLy8gcmlnaHQgc2lkZVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHtcclxuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3Q7XHJcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAoaSA9PT0gaGFsZiAmJiBkZWx0YSA8IDApID8gMSAtIHR3ZWVuIDogMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3QgKiAoaSAqIDIgKyB0d2VlbiAqIGRpcik7XHJcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogKGkgKiAyICsgdHdlZW4gKiBkaXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCB8fCBjZW50ZXIgKyBpIDwgY291bnQpIHtcclxuICAgICAgICAgICAgICBlbCA9IGltYWdlc1t3cmFwKGNlbnRlciArIGkpXTtcclxuICAgICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xyXG4gICAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAob3B0aW9ucy5zaGlmdCArIChkaW0gKiBpIC0gZGVsdGEpIC8gMikgKyAncHgpJyArXHJcbiAgICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVooJyArIHpUcmFuc2xhdGlvbiArICdweCknO1xyXG4gICAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IC1pO1xyXG4gICAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0d2VlbmVkT3BhY2l0eTtcclxuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGxlZnQgc2lkZVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHtcclxuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3Q7XHJcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAoaSA9PT0gaGFsZiAmJiBkZWx0YSA+IDApID8gMSAtIHR3ZWVuIDogMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB6VHJhbnNsYXRpb24gPSBvcHRpb25zLmRpc3QgKiAoaSAqIDIgLSB0d2VlbiAqIGRpcik7XHJcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogKGkgKiAyIC0gdHdlZW4gKiBkaXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLm5vV3JhcCB8fCBjZW50ZXIgLSBpID49IDApIHtcclxuICAgICAgICAgICAgICBlbCA9IGltYWdlc1t3cmFwKGNlbnRlciAtIGkpXTtcclxuICAgICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xyXG4gICAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoLW9wdGlvbnMuc2hpZnQgKyAoLWRpbSAqIGkgLSBkZWx0YSkgLyAyKSArICdweCknICtcclxuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWignICsgelRyYW5zbGF0aW9uICsgJ3B4KSc7XHJcbiAgICAgICAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gLWk7XHJcbiAgICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IHR3ZWVuZWRPcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gY2VudGVyXHJcbiAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXHJcbiAgICAgICAgICBpZiAoIW9wdGlvbnMubm9XcmFwIHx8IChjZW50ZXIgPj0gMCAmJiBjZW50ZXIgPCBjb3VudCkpIHtcclxuICAgICAgICAgICAgZWwgPSBpbWFnZXNbd3JhcChjZW50ZXIpXTtcclxuICAgICAgICAgICAgZWwuc3R5bGVbeGZvcm1dID0gYWxpZ25tZW50ICtcclxuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArICgtZGVsdGEgLyAyKSArICdweCknICtcclxuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArIChkaXIgKiBvcHRpb25zLnNoaWZ0ICogdHdlZW4pICsgJ3B4KScgK1xyXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWignICsgKG9wdGlvbnMuZGlzdCAqIHR3ZWVuKSArICdweCknO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAwO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHsgdHdlZW5lZE9wYWNpdHkgPSAxOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB0d2VlbmVkT3BhY2l0eSA9IDEgLSAwLjIgKiB0d2VlbjsgfVxyXG4gICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIG9uQ3ljbGVUbyBjYWxsYmFja1xyXG4gICAgICAgICAgaWYgKGxhc3RDZW50ZXIgIT09IGNlbnRlciAmJlxyXG4gICAgICAgICAgICAgIHR5cGVvZihvcHRpb25zLm9uQ3ljbGVUbykgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB2YXIgJGN1cnJfaXRlbSA9IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5lcSh3cmFwKGNlbnRlcikpO1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uQ3ljbGVUby5jYWxsKHRoaXMsICRjdXJyX2l0ZW0sIGRyYWdnZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdHJhY2soKSB7XHJcbiAgICAgICAgICB2YXIgbm93LCBlbGFwc2VkLCBkZWx0YSwgdjtcclxuXHJcbiAgICAgICAgICBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgZWxhcHNlZCA9IG5vdyAtIHRpbWVzdGFtcDtcclxuICAgICAgICAgIHRpbWVzdGFtcCA9IG5vdztcclxuICAgICAgICAgIGRlbHRhID0gb2Zmc2V0IC0gZnJhbWU7XHJcbiAgICAgICAgICBmcmFtZSA9IG9mZnNldDtcclxuXHJcbiAgICAgICAgICB2ID0gMTAwMCAqIGRlbHRhIC8gKDEgKyBlbGFwc2VkKTtcclxuICAgICAgICAgIHZlbG9jaXR5ID0gMC44ICogdiArIDAuMiAqIHZlbG9jaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYXV0b1Njcm9sbCgpIHtcclxuICAgICAgICAgIHZhciBlbGFwc2VkLCBkZWx0YTtcclxuXHJcbiAgICAgICAgICBpZiAoYW1wbGl0dWRlKSB7XHJcbiAgICAgICAgICAgIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICBkZWx0YSA9IGFtcGxpdHVkZSAqIE1hdGguZXhwKC1lbGFwc2VkIC8gb3B0aW9ucy5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDIgfHwgZGVsdGEgPCAtMikge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsKHRhcmdldCAtIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvU2Nyb2xsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGljayhlKSB7XHJcbiAgICAgICAgICAvLyBEaXNhYmxlIGNsaWNrcyBpZiBjYXJvdXNlbCB3YXMgZHJhZ2dlZC5cclxuICAgICAgICAgIGlmIChkcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuZnVsbFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkSW5kZXggPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2Fyb3VzZWwtaXRlbScpLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHZhciBkaWZmID0gKGNlbnRlciAlIGNvdW50KSAtIGNsaWNrZWRJbmRleDtcclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgY2xpY2tzIGlmIGNhcm91c2VsIHdhcyBzaGlmdGVkIGJ5IGNsaWNrXHJcbiAgICAgICAgICAgIGlmIChkaWZmICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3ljbGVUbyhjbGlja2VkSW5kZXgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3ljbGVUbyhuKSB7XHJcbiAgICAgICAgICB2YXIgZGlmZiA9IChjZW50ZXIgJSBjb3VudCkgLSBuO1xyXG5cclxuICAgICAgICAgIC8vIEFjY291bnQgZm9yIHdyYXBhcm91bmQuXHJcbiAgICAgICAgICBpZiAoIW9wdGlvbnMubm9XcmFwKSB7XHJcbiAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xyXG4gICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmICsgY291bnQpIDwgTWF0aC5hYnMoZGlmZikpIHsgZGlmZiArPSBjb3VudDsgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmIC0gY291bnQpIDwgZGlmZikgeyBkaWZmIC09IGNvdW50OyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBDYWxsIHByZXYgb3IgbmV4dCBhY2NvcmRpbmdseS5cclxuICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xyXG4gICAgICAgICAgICB2aWV3LnRyaWdnZXIoJ2Nhcm91c2VsTmV4dCcsIFtNYXRoLmFicyhkaWZmKV0pO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgdmlldy50cmlnZ2VyKCdjYXJvdXNlbFByZXYnLCBbZGlmZl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdGFwKGUpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgZHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdmVydGljYWxfZHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcmVmZXJlbmNlID0geHBvcyhlKTtcclxuICAgICAgICAgIHJlZmVyZW5jZVkgPSB5cG9zKGUpO1xyXG5cclxuICAgICAgICAgIHZlbG9jaXR5ID0gYW1wbGl0dWRlID0gMDtcclxuICAgICAgICAgIGZyYW1lID0gb2Zmc2V0O1xyXG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGlja2VyKTtcclxuICAgICAgICAgIHRpY2tlciA9IHNldEludGVydmFsKHRyYWNrLCAxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZHJhZyhlKSB7XHJcbiAgICAgICAgICB2YXIgeCwgZGVsdGEsIGRlbHRhWTtcclxuICAgICAgICAgIGlmIChwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHggPSB4cG9zKGUpO1xyXG4gICAgICAgICAgICB5ID0geXBvcyhlKTtcclxuICAgICAgICAgICAgZGVsdGEgPSByZWZlcmVuY2UgLSB4O1xyXG4gICAgICAgICAgICBkZWx0YVkgPSBNYXRoLmFicyhyZWZlcmVuY2VZIC0geSk7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVkgPCAzMCAmJiAhdmVydGljYWxfZHJhZ2dlZCkge1xyXG4gICAgICAgICAgICAgIC8vIElmIHZlcnRpY2FsIHNjcm9sbGluZyBkb24ndCBhbGxvdyBkcmFnZ2luZy5cclxuICAgICAgICAgICAgICBpZiAoZGVsdGEgPiAyIHx8IGRlbHRhIDwgLTIpIHtcclxuICAgICAgICAgICAgICAgIGRyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlID0geDtcclxuICAgICAgICAgICAgICAgIHNjcm9sbChvZmZzZXQgKyBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgZHJhZ2dpbmcgZG9uJ3QgYWxsb3cgdmVydGljYWwgc2Nyb2xsLlxyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gVmVydGljYWwgc2Nyb2xsaW5nLlxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsX2RyYWdnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGRyYWdnZWQpIHtcclxuICAgICAgICAgICAgLy8gSWYgZHJhZ2dpbmcgZG9uJ3QgYWxsb3cgdmVydGljYWwgc2Nyb2xsLlxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbGVhc2UoZSkge1xyXG4gICAgICAgICAgaWYgKHByZXNzZWQpIHtcclxuICAgICAgICAgICAgcHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGlja2VyKTtcclxuICAgICAgICAgIHRhcmdldCA9IG9mZnNldDtcclxuICAgICAgICAgIGlmICh2ZWxvY2l0eSA+IDEwIHx8IHZlbG9jaXR5IDwgLTEwKSB7XHJcbiAgICAgICAgICAgIGFtcGxpdHVkZSA9IDAuOSAqIHZlbG9jaXR5O1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBvZmZzZXQgKyBhbXBsaXR1ZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YXJnZXQgPSBNYXRoLnJvdW5kKHRhcmdldCAvIGRpbSkgKiBkaW07XHJcblxyXG4gICAgICAgICAgLy8gTm8gd3JhcCBvZiBpdGVtcy5cclxuICAgICAgICAgIGlmIChvcHRpb25zLm5vV3JhcCkge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID49IGRpbSAqIChjb3VudCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gZGltICogKGNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0IDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhcmdldCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFtcGxpdHVkZSA9IHRhcmdldCAtIG9mZnNldDtcclxuICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XHJcblxyXG4gICAgICAgICAgaWYgKGRyYWdnZWQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeGZvcm0gPSAndHJhbnNmb3JtJztcclxuICAgICAgICBbJ3dlYmtpdCcsICdNb3onLCAnTycsICdtcyddLmV2ZXJ5KGZ1bmN0aW9uIChwcmVmaXgpIHtcclxuICAgICAgICAgIHZhciBlID0gcHJlZml4ICsgJ1RyYW5zZm9ybSc7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbZV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHhmb3JtID0gZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuY2Fyb3VzZWwtJyt1bmlxdWVOYW1lc3BhY2UpLm9uKCdyZXNpemUuY2Fyb3VzZWwtJyt1bmlxdWVOYW1lc3BhY2UsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XHJcbiAgICAgICAgICAgIGl0ZW1fd2lkdGggPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XHJcbiAgICAgICAgICAgIGl0ZW1faGVpZ2h0ID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgZGltID0gaXRlbV93aWR0aCAqIDIgKyBvcHRpb25zLnBhZGRpbmc7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IGNlbnRlciAqIDIgKiBpdGVtX3dpZHRoO1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzY3JvbGwoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0dXBFdmVudHMoKTtcclxuICAgICAgICBzY3JvbGwob2Zmc2V0KTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5vbignY2Fyb3VzZWxOZXh0JywgZnVuY3Rpb24oZSwgbikge1xyXG4gICAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBuID0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhcmdldCA9IChkaW0gKiBNYXRoLnJvdW5kKG9mZnNldCAvIGRpbSkpICsgKGRpbSAqIG4pO1xyXG4gICAgICAgICAgaWYgKG9mZnNldCAhPT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGFtcGxpdHVkZSA9IHRhcmdldCAtIG9mZnNldDtcclxuICAgICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9TY3JvbGwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKHRoaXMpLm9uKCdjYXJvdXNlbFByZXYnLCBmdW5jdGlvbihlLCBuKSB7XHJcbiAgICAgICAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG4gPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFyZ2V0ID0gKGRpbSAqIE1hdGgucm91bmQob2Zmc2V0IC8gZGltKSkgLSAoZGltICogbik7XHJcbiAgICAgICAgICBpZiAob2Zmc2V0ICE9PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgYW1wbGl0dWRlID0gdGFyZ2V0IC0gb2Zmc2V0O1xyXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQodGhpcykub24oJ2Nhcm91c2VsU2V0JywgZnVuY3Rpb24oZSwgbikge1xyXG4gICAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBuID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGN5Y2xlVG8obik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBuZXh0IDogZnVuY3Rpb24obikge1xyXG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nhcm91c2VsTmV4dCcsIFtuXSk7XHJcbiAgICB9LFxyXG4gICAgcHJldiA6IGZ1bmN0aW9uKG4pIHtcclxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbFByZXYnLCBbbl0pO1xyXG4gICAgfSxcclxuICAgIHNldCA6IGZ1bmN0aW9uKG4pIHtcclxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbFNldCcsIFtuXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gICAgJC5mbi5jYXJvdXNlbCA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xyXG4gICAgICBpZiAoIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSApIHtcclxuICAgICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICEgbWV0aG9kT3JPcHRpb25zICkge1xyXG4gICAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcclxuICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkLmVycm9yKCAnTWV0aG9kICcgKyAgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuY2Fyb3VzZWwnICk7XHJcbiAgICAgIH1cclxuICAgIH07IC8vIFBsdWdpbiBlbmRcclxufSggalF1ZXJ5ICkpOzsoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgdmFyIG1ldGhvZHMgPSB7XHJcbiAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgb3JpZ2luID0gJCgnIycrJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2YXRlcycpKTtcclxuICAgIHZhciBzY3JlZW4gPSAkKCdib2R5Jyk7XHJcblxyXG4gICAgLy8gQ3JlYXRpbmcgdGFwIHRhcmdldFxyXG4gICAgdmFyIHRhcFRhcmdldEVsID0gJCh0aGlzKTtcclxuICAgIHZhciB0YXBUYXJnZXRXcmFwcGVyID0gdGFwVGFyZ2V0RWwucGFyZW50KCcudGFwLXRhcmdldC13cmFwcGVyJyk7XHJcbiAgICB2YXIgdGFwVGFyZ2V0V2F2ZSA9IHRhcFRhcmdldFdyYXBwZXIuZmluZCgnLnRhcC10YXJnZXQtd2F2ZScpO1xyXG4gICAgdmFyIHRhcFRhcmdldE9yaWdpbkVsID0gdGFwVGFyZ2V0V3JhcHBlci5maW5kKCcudGFwLXRhcmdldC1vcmlnaW4nKTtcclxuICAgIHZhciB0YXBUYXJnZXRDb250ZW50RWwgPSB0YXBUYXJnZXRFbC5maW5kKCcudGFwLXRhcmdldC1jb250ZW50Jyk7XHJcblxyXG4gICAgLy8gQ3JlYXRpbmcgd3JhcHBlclxyXG4gICAgaWYgKCF0YXBUYXJnZXRXcmFwcGVyLmxlbmd0aCkge1xyXG4gICAgICB0YXBUYXJnZXRXcmFwcGVyID0gdGFwVGFyZ2V0RWwud3JhcCgkKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC13cmFwcGVyXCI+PC9kaXY+JykpLnBhcmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0aW5nIGNvbnRlbnRcclxuICAgIGlmICghdGFwVGFyZ2V0Q29udGVudEVsLmxlbmd0aCkge1xyXG4gICAgICB0YXBUYXJnZXRDb250ZW50RWwgPSAkKCc8ZGl2IGNsYXNzPVwidGFwLXRhcmdldC1jb250ZW50XCI+PC9kaXY+Jyk7XHJcbiAgICAgIHRhcFRhcmdldEVsLmFwcGVuZCh0YXBUYXJnZXRDb250ZW50RWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0aW5nIGZvcmVncm91bmQgd2F2ZVxyXG4gICAgaWYgKCF0YXBUYXJnZXRXYXZlLmxlbmd0aCkge1xyXG4gICAgICB0YXBUYXJnZXRXYXZlID0gJCgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd2F2ZVwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgLy8gQ3JlYXRpbmcgb3JpZ2luXHJcbiAgICAgIGlmICghdGFwVGFyZ2V0T3JpZ2luRWwubGVuZ3RoKSB7XHJcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwgPSBvcmlnaW4uY2xvbmUodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwuYWRkQ2xhc3MoJ3RhcC10YXJnZXQtb3JpZ2luJyk7XHJcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwucmVtb3ZlQXR0cignaWQnKTtcclxuICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIHRhcFRhcmdldFdhdmUuYXBwZW5kKHRhcFRhcmdldE9yaWdpbkVsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFwVGFyZ2V0V3JhcHBlci5hcHBlbmQodGFwVGFyZ2V0V2F2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlblxyXG4gICAgdmFyIG9wZW5UYXBUYXJnZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRhcFRhcmdldFdyYXBwZXIuaXMoJy5vcGVuJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZGluZyBvcGVuIGNsYXNzXHJcbiAgICAgIHRhcFRhcmdldFdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwub2ZmKCdjbGljay50YXBUYXJnZXQnKS5vbignY2xpY2sudGFwVGFyZ2V0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgY2xvc2VUYXBUYXJnZXQoKTtcclxuICAgICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLm9mZignY2xpY2sudGFwVGFyZ2V0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudGFwVGFyZ2V0Jykub24oJ2NsaWNrLnRhcFRhcmdldCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGNsb3NlVGFwVGFyZ2V0KCk7XHJcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdGhyb3R0bGVkQ2FsYyA9IE1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY2FsY3VsYXRlVGFwVGFyZ2V0KCk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUudGFwVGFyZ2V0Jykub24oJ3Jlc2l6ZS50YXBUYXJnZXQnLCB0aHJvdHRsZWRDYWxjKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENsb3NlXHJcbiAgICB2YXIgY2xvc2VUYXBUYXJnZXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICBpZiAoIXRhcFRhcmdldFdyYXBwZXIuaXMoJy5vcGVuJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhcFRhcmdldFdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwub2ZmKCdjbGljay50YXBUYXJnZXQnKVxyXG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLnRhcFRhcmdldCcpO1xyXG4gICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUudGFwVGFyZ2V0Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFByZSBjYWxjdWxhdGVcclxuICAgIHZhciBjYWxjdWxhdGVUYXBUYXJnZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gRWxlbWVudCBvciBwYXJlbnQgaXMgZml4ZWQgcG9zaXRpb24/XHJcbiAgICAgIHZhciBpc0ZpeGVkID0gb3JpZ2luLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJztcclxuICAgICAgaWYgKCFpc0ZpeGVkKSB7XHJcbiAgICAgICAgdmFyIHBhcmVudHMgPSBvcmlnaW4ucGFyZW50cygpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpc0ZpeGVkID0gJChwYXJlbnRzW2ldKS5jc3MoJ3Bvc2l0aW9uJykgPT0gJ2ZpeGVkJztcclxuICAgICAgICAgIGlmIChpc0ZpeGVkKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRpbmcgb3JpZ2luXHJcbiAgICAgIHZhciBvcmlnaW5XaWR0aCA9IG9yaWdpbi5vdXRlcldpZHRoKCk7XHJcbiAgICAgIHZhciBvcmlnaW5IZWlnaHQgPSBvcmlnaW4ub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgdmFyIG9yaWdpblRvcCA9IGlzRml4ZWQgPyBvcmlnaW4ub2Zmc2V0KCkudG9wIC0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgOiBvcmlnaW4ub2Zmc2V0KCkudG9wO1xyXG4gICAgICB2YXIgb3JpZ2luTGVmdCA9IGlzRml4ZWQgPyBvcmlnaW4ub2Zmc2V0KCkubGVmdCAtICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKSA6IG9yaWdpbi5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRpbmcgc2NyZWVuXHJcbiAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICB2YXIgY2VudGVyWCA9IHdpbmRvd1dpZHRoIC8gMjtcclxuICAgICAgdmFyIGNlbnRlclkgPSB3aW5kb3dIZWlnaHQgLyAyO1xyXG4gICAgICB2YXIgaXNMZWZ0ID0gb3JpZ2luTGVmdCA8PSBjZW50ZXJYO1xyXG4gICAgICB2YXIgaXNSaWdodCA9IG9yaWdpbkxlZnQgPiBjZW50ZXJYO1xyXG4gICAgICB2YXIgaXNUb3AgPSBvcmlnaW5Ub3AgPD0gY2VudGVyWTtcclxuICAgICAgdmFyIGlzQm90dG9tID0gb3JpZ2luVG9wID4gY2VudGVyWTtcclxuICAgICAgdmFyIGlzQ2VudGVyWCA9IG9yaWdpbkxlZnQgPj0gd2luZG93V2lkdGgqMC4yNSAmJiBvcmlnaW5MZWZ0IDw9IHdpbmRvd1dpZHRoKjAuNzU7XHJcbiAgICAgIHZhciBpc0NlbnRlclkgPSBvcmlnaW5Ub3AgPj0gd2luZG93SGVpZ2h0KjAuMjUgJiYgb3JpZ2luVG9wIDw9IHdpbmRvd0hlaWdodCowLjc1O1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRpbmcgdGFwIHRhcmdldFxyXG4gICAgICB2YXIgdGFwVGFyZ2V0V2lkdGggPSB0YXBUYXJnZXRFbC5vdXRlcldpZHRoKCk7XHJcbiAgICAgIHZhciB0YXBUYXJnZXRIZWlnaHQgPSB0YXBUYXJnZXRFbC5vdXRlckhlaWdodCgpO1xyXG4gICAgICB2YXIgdGFwVGFyZ2V0VG9wID0gb3JpZ2luVG9wICsgb3JpZ2luSGVpZ2h0LzIgLSB0YXBUYXJnZXRIZWlnaHQvMjtcclxuICAgICAgdmFyIHRhcFRhcmdldExlZnQgPSBvcmlnaW5MZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRhcFRhcmdldFdpZHRoLzI7XHJcbiAgICAgIHZhciB0YXBUYXJnZXRQb3NpdGlvbiA9IGlzRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0aW5nIGNvbnRlbnRcclxuICAgICAgdmFyIHRhcFRhcmdldFRleHRXaWR0aCA9IGlzQ2VudGVyWCA/IHRhcFRhcmdldFdpZHRoIDogdGFwVGFyZ2V0V2lkdGgvMiArIG9yaWdpbldpZHRoO1xyXG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dEhlaWdodCA9IHRhcFRhcmdldEhlaWdodC8yO1xyXG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dFRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0SGVpZ2h0LzIgOiAwO1xyXG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dEJvdHRvbSA9IDA7XHJcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0TGVmdCA9IGlzTGVmdCAmJiAhaXNDZW50ZXJYID8gdGFwVGFyZ2V0V2lkdGgvMiAtIG9yaWdpbldpZHRoIDogMDtcclxuICAgICAgdmFyIHRhcFRhcmdldFRleHRSaWdodCA9IDA7XHJcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0UGFkZGluZyA9IG9yaWdpbldpZHRoO1xyXG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dEFsaWduID0gaXNCb3R0b20gPyAnYm90dG9tJyA6ICd0b3AnO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRpbmcgd2F2ZVxyXG4gICAgICB2YXIgdGFwVGFyZ2V0V2F2ZVdpZHRoID0gb3JpZ2luV2lkdGggPiBvcmlnaW5IZWlnaHQgPyBvcmlnaW5XaWR0aCoyIDogb3JpZ2luV2lkdGgqMjtcclxuICAgICAgdmFyIHRhcFRhcmdldFdhdmVIZWlnaHQgPSB0YXBUYXJnZXRXYXZlV2lkdGg7XHJcbiAgICAgIHZhciB0YXBUYXJnZXRXYXZlVG9wID0gdGFwVGFyZ2V0SGVpZ2h0LzIgLSB0YXBUYXJnZXRXYXZlSGVpZ2h0LzI7XHJcbiAgICAgIHZhciB0YXBUYXJnZXRXYXZlTGVmdCA9IHRhcFRhcmdldFdpZHRoLzIgLSB0YXBUYXJnZXRXYXZlV2lkdGgvMjtcclxuXHJcbiAgICAgIC8vIFNldHRpbmcgdGFwIHRhcmdldFxyXG4gICAgICB2YXIgdGFwVGFyZ2V0V3JhcHBlckNzc09iaiA9IHt9O1xyXG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0VG9wIDogJyc7XHJcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmoucmlnaHQgPSBpc1JpZ2h0ID8gd2luZG93V2lkdGggLSB0YXBUYXJnZXRMZWZ0IC0gdGFwVGFyZ2V0V2lkdGggOiAnJztcclxuICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5ib3R0b20gPSBpc0JvdHRvbSA/IHdpbmRvd0hlaWdodCAtIHRhcFRhcmdldFRvcCAtIHRhcFRhcmdldEhlaWdodCA6ICcnO1xyXG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmxlZnQgPSBpc0xlZnQgPyB0YXBUYXJnZXRMZWZ0IDogJyc7XHJcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmoucG9zaXRpb24gPSB0YXBUYXJnZXRQb3NpdGlvbjtcclxuICAgICAgdGFwVGFyZ2V0V3JhcHBlci5jc3ModGFwVGFyZ2V0V3JhcHBlckNzc09iaik7XHJcblxyXG4gICAgICAvLyBTZXR0aW5nIGNvbnRlbnRcclxuICAgICAgdGFwVGFyZ2V0Q29udGVudEVsLmNzcyh7XHJcbiAgICAgICAgd2lkdGg6IHRhcFRhcmdldFRleHRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRhcFRhcmdldFRleHRIZWlnaHQsXHJcbiAgICAgICAgdG9wOiB0YXBUYXJnZXRUZXh0VG9wLFxyXG4gICAgICAgIHJpZ2h0OiB0YXBUYXJnZXRUZXh0UmlnaHQsXHJcbiAgICAgICAgYm90dG9tOiB0YXBUYXJnZXRUZXh0Qm90dG9tLFxyXG4gICAgICAgIGxlZnQ6IHRhcFRhcmdldFRleHRMZWZ0LFxyXG4gICAgICAgIHBhZGRpbmc6IHRhcFRhcmdldFRleHRQYWRkaW5nLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IHRhcFRhcmdldFRleHRBbGlnblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFNldHRpbmcgd2F2ZVxyXG4gICAgICB0YXBUYXJnZXRXYXZlLmNzcyh7XHJcbiAgICAgICAgdG9wOiB0YXBUYXJnZXRXYXZlVG9wLFxyXG4gICAgICAgIGxlZnQ6IHRhcFRhcmdldFdhdmVMZWZ0LFxyXG4gICAgICAgIHdpZHRoOiB0YXBUYXJnZXRXYXZlV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRXYXZlSGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zID09ICdvcGVuJykge1xyXG4gICAgICBjYWxjdWxhdGVUYXBUYXJnZXQoKTtcclxuICAgICAgb3BlblRhcFRhcmdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zID09ICdjbG9zZScpXHJcbiAgICAgIGNsb3NlVGFwVGFyZ2V0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9wZW46IGZ1bmN0aW9uKCkge30sXHJcbiAgY2xvc2U6IGZ1bmN0aW9uKCkge31cclxuICB9O1xyXG5cclxuICAkLmZuLnRhcFRhcmdldCA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xyXG4gIGlmIChtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gfHwgdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcpXHJcbiAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuXHJcbiAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhcC10YXJnZXQnICk7XHJcbiAgfTtcclxuXHJcbn0oIGpRdWVyeSApKTsiXSwiZmlsZSI6ImxpYnMvbWF0ZXJpYWxpemUuanMifQ==
