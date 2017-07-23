/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWJzL2pxdWVyeS5jb29raWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIGpRdWVyeSBDb29raWUgUGx1Z2luIHYxLjQuMVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2FyaGFydGwvanF1ZXJ5LWNvb2tpZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNCBLbGF1cyBIYXJ0bFxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRCAoUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSlcclxuXHRcdGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0Ly8gTm9kZS9Db21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXHJcblx0XHRmYWN0b3J5KGpRdWVyeSk7XHJcblx0fVxyXG59KGZ1bmN0aW9uICgkKSB7XHJcblxyXG5cdHZhciBwbHVzZXMgPSAvXFwrL2c7XHJcblxyXG5cdGZ1bmN0aW9uIGVuY29kZShzKSB7XHJcblx0XHRyZXR1cm4gY29uZmlnLnJhdyA/IHMgOiBlbmNvZGVVUklDb21wb25lbnQocyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkZWNvZGUocykge1xyXG5cdFx0cmV0dXJuIGNvbmZpZy5yYXcgPyBzIDogZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RyaW5naWZ5Q29va2llVmFsdWUodmFsdWUpIHtcclxuXHRcdHJldHVybiBlbmNvZGUoY29uZmlnLmpzb24gPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHBhcnNlQ29va2llVmFsdWUocykge1xyXG5cdFx0aWYgKHMuaW5kZXhPZignXCInKSA9PT0gMCkge1xyXG5cdFx0XHQvLyBUaGlzIGlzIGEgcXVvdGVkIGNvb2tpZSBhcyBhY2NvcmRpbmcgdG8gUkZDMjA2OCwgdW5lc2NhcGUuLi5cclxuXHRcdFx0cyA9IHMuc2xpY2UoMSwgLTEpLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdC8vIFJlcGxhY2Ugc2VydmVyLXNpZGUgd3JpdHRlbiBwbHVzZXMgd2l0aCBzcGFjZXMuXHJcblx0XHRcdC8vIElmIHdlIGNhbid0IGRlY29kZSB0aGUgY29va2llLCBpZ25vcmUgaXQsIGl0J3MgdW51c2FibGUuXHJcblx0XHRcdC8vIElmIHdlIGNhbid0IHBhcnNlIHRoZSBjb29raWUsIGlnbm9yZSBpdCwgaXQncyB1bnVzYWJsZS5cclxuXHRcdFx0cyA9IGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGx1c2VzLCAnICcpKTtcclxuXHRcdFx0cmV0dXJuIGNvbmZpZy5qc29uID8gSlNPTi5wYXJzZShzKSA6IHM7XHJcblx0XHR9IGNhdGNoKGUpIHt9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZWFkKHMsIGNvbnZlcnRlcikge1xyXG5cdFx0dmFyIHZhbHVlID0gY29uZmlnLnJhdyA/IHMgOiBwYXJzZUNvb2tpZVZhbHVlKHMpO1xyXG5cdFx0cmV0dXJuICQuaXNGdW5jdGlvbihjb252ZXJ0ZXIpID8gY29udmVydGVyKHZhbHVlKSA6IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0dmFyIGNvbmZpZyA9ICQuY29va2llID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuXHJcblx0XHQvLyBXcml0ZVxyXG5cclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiAhJC5pc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG5cdFx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIGNvbmZpZy5kZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbnMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHR2YXIgZGF5cyA9IG9wdGlvbnMuZXhwaXJlcywgdCA9IG9wdGlvbnMuZXhwaXJlcyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0dC5zZXRNaWxsaXNlY29uZHModC5nZXRNaWxsaXNlY29uZHMoKSArIGRheXMgKiA4NjRlKzUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IFtcclxuXHRcdFx0XHRlbmNvZGUoa2V5KSwgJz0nLCBzdHJpbmdpZnlDb29raWVWYWx1ZSh2YWx1ZSksXHJcblx0XHRcdFx0b3B0aW9ucy5leHBpcmVzID8gJzsgZXhwaXJlcz0nICsgb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJywgLy8gdXNlIGV4cGlyZXMgYXR0cmlidXRlLCBtYXgtYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcclxuXHRcdFx0XHRvcHRpb25zLnBhdGggICAgPyAnOyBwYXRoPScgKyBvcHRpb25zLnBhdGggOiAnJyxcclxuXHRcdFx0XHRvcHRpb25zLmRvbWFpbiAgPyAnOyBkb21haW49JyArIG9wdGlvbnMuZG9tYWluIDogJycsXHJcblx0XHRcdFx0b3B0aW9ucy5zZWN1cmUgID8gJzsgc2VjdXJlJyA6ICcnXHJcblx0XHRcdF0uam9pbignJykpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFJlYWRcclxuXHJcblx0XHR2YXIgcmVzdWx0ID0ga2V5ID8gdW5kZWZpbmVkIDoge30sXHJcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcclxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXHJcblx0XHRcdC8vIGNhbGxpbmcgJC5jb29raWUoKS5cclxuXHRcdFx0Y29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdLFxyXG5cdFx0XHRpID0gMCxcclxuXHRcdFx0bCA9IGNvb2tpZXMubGVuZ3RoO1xyXG5cclxuXHRcdGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKSxcclxuXHRcdFx0XHRuYW1lID0gZGVjb2RlKHBhcnRzLnNoaWZ0KCkpLFxyXG5cdFx0XHRcdGNvb2tpZSA9IHBhcnRzLmpvaW4oJz0nKTtcclxuXHJcblx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcclxuXHRcdFx0XHQvLyBJZiBzZWNvbmQgYXJndW1lbnQgKHZhbHVlKSBpcyBhIGZ1bmN0aW9uIGl0J3MgYSBjb252ZXJ0ZXIuLi5cclxuXHRcdFx0XHRyZXN1bHQgPSByZWFkKGNvb2tpZSwgdmFsdWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBQcmV2ZW50IHN0b3JpbmcgYSBjb29raWUgdGhhdCB3ZSBjb3VsZG4ndCBkZWNvZGUuXHJcblx0XHRcdGlmICgha2V5ICYmIChjb29raWUgPSByZWFkKGNvb2tpZSkpICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGNvbmZpZy5kZWZhdWx0cyA9IHt9O1xyXG5cclxuXHQkLnJlbW92ZUNvb2tpZSA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcclxuXHRcdC8vIE11c3Qgbm90IGFsdGVyIG9wdGlvbnMsIHRodXMgZXh0ZW5kaW5nIGEgZnJlc2ggb2JqZWN0Li4uXHJcblx0XHQkLmNvb2tpZShrZXksICcnLCAkLmV4dGVuZCh7fSwgb3B0aW9ucywgeyBleHBpcmVzOiAtMSB9KSk7XHJcblx0XHRyZXR1cm4gISQuY29va2llKGtleSk7XHJcblx0fTtcclxuXHJcbn0pKTsiXSwiZmlsZSI6ImxpYnMvanF1ZXJ5LmNvb2tpZS5qcyJ9
