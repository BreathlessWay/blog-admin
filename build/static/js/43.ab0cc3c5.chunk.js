(this['webpackJsonpblog-admin'] = this['webpackJsonpblog-admin'] || []).push([
	[43],
	{
		395: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.ReactCSS = t.loop = t.handleActive = t.handleHover = t.hover = void 0);
			var r = c(n(731)),
				o = c(n(735)),
				a = c(n(752)),
				l = c(n(753)),
				i = c(n(754)),
				u = c(n(755));
			function c(e) {
				return e && e.__esModule ? e : { default: e };
			}
			(t.hover = l.default),
				(t.handleHover = l.default),
				(t.handleActive = i.default),
				(t.loop = u.default);
			var s = (t.ReactCSS = function(e) {
				for (
					var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1;
					l < t;
					l++
				)
					n[l - 1] = arguments[l];
				var i = (0, r.default)(n),
					u = (0, o.default)(e, i);
				return (0, a.default)(u);
			});
			t.default = s;
		},
		399: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			var r = n(756);
			Object.defineProperty(t, 'Alpha', {
				enumerable: !0,
				get: function() {
					return d(r).default;
				},
			});
			var o = n(623);
			Object.defineProperty(t, 'Checkboard', {
				enumerable: !0,
				get: function() {
					return d(o).default;
				},
			});
			var a = n(759);
			Object.defineProperty(t, 'EditableInput', {
				enumerable: !0,
				get: function() {
					return d(a).default;
				},
			});
			var l = n(760);
			Object.defineProperty(t, 'Hue', {
				enumerable: !0,
				get: function() {
					return d(l).default;
				},
			});
			var i = n(762);
			Object.defineProperty(t, 'Raised', {
				enumerable: !0,
				get: function() {
					return d(i).default;
				},
			});
			var u = n(763);
			Object.defineProperty(t, 'Saturation', {
				enumerable: !0,
				get: function() {
					return d(u).default;
				},
			});
			var c = n(671);
			Object.defineProperty(t, 'ColorWrap', {
				enumerable: !0,
				get: function() {
					return d(c).default;
				},
			});
			var s = n(768);
			function d(e) {
				return e && e.__esModule ? e : { default: e };
			}
			Object.defineProperty(t, 'Swatch', {
				enumerable: !0,
				get: function() {
					return d(s).default;
				},
			});
		},
		423: function(e, t, n) {
			(function(e) {
				var r = n(130),
					o = n(508),
					a = t && !t.nodeType && t,
					l = a && 'object' == typeof e && e && !e.nodeType && e,
					i = l && l.exports === a ? r.Buffer : void 0,
					u = (i ? i.isBuffer : void 0) || o;
				e.exports = u;
			}.call(this, n(212)(e)));
		},
		427: function(e, t, n) {
			var r = n(402),
				o = n(498),
				a = n(499),
				l = n(500),
				i = n(501),
				u = n(502);
			function c(e) {
				var t = (this.__data__ = new r(e));
				this.size = t.size;
			}
			(c.prototype.clear = o),
				(c.prototype.delete = a),
				(c.prototype.get = l),
				(c.prototype.has = i),
				(c.prototype.set = u),
				(e.exports = c);
		},
		428: function(e, t, n) {
			var r = n(469),
				o = n(532),
				a = n(429);
			e.exports = function(e) {
				return a(e) ? r(e) : o(e);
			};
		},
		429: function(e, t, n) {
			var r = n(425),
				o = n(414);
			e.exports = function(e) {
				return null != e && o(e.length) && !r(e);
			};
		},
		430: function(e, t, n) {
			var r = n(658),
				o = n(662)(function(e, t, n) {
					r(e, t, n);
				});
			e.exports = o;
		},
		431: function(e, t, n) {
			var r = n(509),
				o = n(458),
				a = n(459),
				l = a && a.isTypedArray,
				i = l ? o(l) : r;
			e.exports = i;
		},
		435: function(e, t) {
			e.exports = function(e) {
				var t = -1,
					n = Array(e.size);
				return (
					e.forEach(function(e) {
						n[++t] = e;
					}),
					n
				);
			};
		},
		445: function(e, t) {
			e.exports = function(e) {
				return e;
			};
		},
		446: function(e, t, n) {
			var r = n(524),
				o = n(206);
			e.exports = function e(t, n, a, l, i) {
				return (
					t === n ||
					(null == t || null == n || (!o(t) && !o(n))
						? t !== t && n !== n
						: r(t, n, a, l, e, i))
				);
			};
		},
		447: function(e, t, n) {
			var r = n(456),
				o = n(527),
				a = n(457);
			e.exports = function(e, t, n, l, i, u) {
				var c = 1 & n,
					s = e.length,
					d = t.length;
				if (s != d && !(c && d > s)) return !1;
				var f = u.get(e);
				if (f && u.get(t)) return f == t;
				var p = -1,
					h = !0,
					b = 2 & n ? new r() : void 0;
				for (u.set(e, t), u.set(t, e); ++p < s; ) {
					var g = e[p],
						v = t[p];
					if (l) var x = c ? l(v, g, p, t, e, u) : l(g, v, p, e, t, u);
					if (void 0 !== x) {
						if (x) continue;
						h = !1;
						break;
					}
					if (b) {
						if (
							!o(t, function(e, t) {
								if (!a(b, t) && (g === e || i(g, e, n, l, u))) return b.push(t);
							})
						) {
							h = !1;
							break;
						}
					} else if (g !== v && !i(g, v, n, l, u)) {
						h = !1;
						break;
					}
				}
				return u.delete(e), u.delete(t), h;
			};
		},
		448: function(e, t, n) {
			var r = n(131);
			e.exports = function(e) {
				return e === e && !r(e);
			};
		},
		449: function(e, t) {
			e.exports = function(e, t) {
				return function(n) {
					return null != n && n[e] === t && (void 0 !== t || e in Object(n));
				};
			};
		},
		450: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.red = t.getContrastingColor = t.isValidHex = t.toState = t.simpleCheckForValidColor = void 0);
			var r = a(n(766)),
				o = a(n(219));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			t.simpleCheckForValidColor = function(e) {
				var t = 0,
					n = 0;
				return (
					(0, r.default)(['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'], function(r) {
						if (
							e[r] &&
							((t += 1), isNaN(e[r]) || (n += 1), 's' === r || 'l' === r)
						) {
							/^\d+%$/.test(e[r]) && (n += 1);
						}
					}),
					t === n && e
				);
			};
			var l = (t.toState = function(e, t) {
				var n = e.hex ? (0, o.default)(e.hex) : (0, o.default)(e),
					r = n.toHsl(),
					a = n.toHsv(),
					l = n.toRgb(),
					i = n.toHex();
				return (
					0 === r.s && ((r.h = t || 0), (a.h = t || 0)),
					{
						hsl: r,
						hex: '000000' === i && 0 === l.a ? 'transparent' : '#' + i,
						rgb: l,
						hsv: a,
						oldHue: e.h || t || r.h,
						source: e.source,
					}
				);
			});
			(t.isValidHex = function(e) {
				var t = '#' === String(e).charAt(0) ? 1 : 0;
				return (
					e.length !== 4 + t && e.length < 7 + t && (0, o.default)(e).isValid()
				);
			}),
				(t.getContrastingColor = function(e) {
					if (!e) return '#fff';
					var t = l(e);
					return 'transparent' === t.hex
						? 'rgba(0,0,0,0.4)'
						: (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
						? '#000'
						: '#fff';
				}),
				(t.red = {
					hsl: { a: 1, h: 0, l: 0.5, s: 1 },
					hex: '#ff0000',
					rgb: { r: 255, g: 0, b: 0, a: 1 },
					hsv: { h: 0, s: 1, v: 1, a: 1 },
				});
			t.default = t;
		},
		452: function(e, t) {
			var n = Object.prototype;
			e.exports = function(e) {
				var t = e && e.constructor;
				return e === (('function' == typeof t && t.prototype) || n);
			};
		},
		455: function(e, t, n) {
			var r = n(522),
				o = n(538),
				a = n(445),
				l = n(394),
				i = n(541);
			e.exports = function(e) {
				return 'function' == typeof e
					? e
					: null == e
					? a
					: 'object' == typeof e
					? l(e)
						? o(e[0], e[1])
						: r(e)
					: i(e);
			};
		},
		456: function(e, t, n) {
			var r = n(416),
				o = n(525),
				a = n(526);
			function l(e) {
				var t = -1,
					n = null == e ? 0 : e.length;
				for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
			}
			(l.prototype.add = l.prototype.push = o),
				(l.prototype.has = a),
				(e.exports = l);
		},
		457: function(e, t) {
			e.exports = function(e, t) {
				return e.has(t);
			};
		},
		458: function(e, t) {
			e.exports = function(e) {
				return function(t) {
					return e(t);
				};
			};
		},
		459: function(e, t, n) {
			(function(e) {
				var r = n(214),
					o = t && !t.nodeType && t,
					a = o && 'object' == typeof e && e && !e.nodeType && e,
					l = a && a.exports === o && r.process,
					i = (function() {
						try {
							var e = a && a.require && a.require('util').types;
							return e || (l && l.binding && l.binding('util'));
						} catch (t) {}
					})();
				e.exports = i;
			}.call(this, n(212)(e)));
		},
		460: function(e, t, n) {
			var r = n(534),
				o = n(417),
				a = n(535),
				l = n(461),
				i = n(536),
				u = n(207),
				c = n(437),
				s = c(r),
				d = c(o),
				f = c(a),
				p = c(l),
				h = c(i),
				b = u;
			((r && '[object DataView]' != b(new r(new ArrayBuffer(1)))) ||
				(o && '[object Map]' != b(new o())) ||
				(a && '[object Promise]' != b(a.resolve())) ||
				(l && '[object Set]' != b(new l())) ||
				(i && '[object WeakMap]' != b(new i()))) &&
				(b = function(e) {
					var t = u(e),
						n = '[object Object]' == t ? e.constructor : void 0,
						r = n ? c(n) : '';
					if (r)
						switch (r) {
							case s:
								return '[object DataView]';
							case d:
								return '[object Map]';
							case f:
								return '[object Promise]';
							case p:
								return '[object Set]';
							case h:
								return '[object WeakMap]';
						}
					return t;
				}),
				(e.exports = b);
		},
		461: function(e, t, n) {
			var r = n(396)(n(130), 'Set');
			e.exports = r;
		},
		464: function(e, t, n) {
			var r = n(424),
				o = n(422),
				a = n(394),
				l = n(420),
				i = n(414),
				u = n(400);
			e.exports = function(e, t, n) {
				for (var c = -1, s = (t = r(t, e)).length, d = !1; ++c < s; ) {
					var f = u(t[c]);
					if (!(d = null != e && n(e, f))) break;
					e = e[f];
				}
				return d || ++c != s
					? d
					: !!(s = null == e ? 0 : e.length) &&
							i(s) &&
							l(f, s) &&
							(a(e) || o(e));
			};
		},
		467: function(e, t, n) {
			var r = n(130).Uint8Array;
			e.exports = r;
		},
		468: function(e, t, n) {
			var r = n(531),
				o = n(506),
				a = Object.prototype.propertyIsEnumerable,
				l = Object.getOwnPropertySymbols,
				i = l
					? function(e) {
							return null == e
								? []
								: ((e = Object(e)),
								  r(l(e), function(t) {
										return a.call(e, t);
								  }));
					  }
					: o;
			e.exports = i;
		},
		469: function(e, t, n) {
			var r = n(507),
				o = n(422),
				a = n(394),
				l = n(423),
				i = n(420),
				u = n(431),
				c = Object.prototype.hasOwnProperty;
			e.exports = function(e, t) {
				var n = a(e),
					s = !n && o(e),
					d = !n && !s && l(e),
					f = !n && !s && !d && u(e),
					p = n || s || d || f,
					h = p ? r(e.length, String) : [],
					b = h.length;
				for (var g in e)
					(!t && !c.call(e, g)) ||
						(p &&
							('length' == g ||
								(d && ('offset' == g || 'parent' == g)) ||
								(f &&
									('buffer' == g || 'byteLength' == g || 'byteOffset' == g)) ||
								i(g, b))) ||
						h.push(g);
				return h;
			};
		},
		470: function(e, t) {
			e.exports = function(e, t) {
				return function(n) {
					return e(t(n));
				};
			};
		},
		498: function(e, t, n) {
			var r = n(402);
			e.exports = function() {
				(this.__data__ = new r()), (this.size = 0);
			};
		},
		499: function(e, t) {
			e.exports = function(e) {
				var t = this.__data__,
					n = t.delete(e);
				return (this.size = t.size), n;
			};
		},
		500: function(e, t) {
			e.exports = function(e) {
				return this.__data__.get(e);
			};
		},
		501: function(e, t) {
			e.exports = function(e) {
				return this.__data__.has(e);
			};
		},
		502: function(e, t, n) {
			var r = n(402),
				o = n(417),
				a = n(416);
			e.exports = function(e, t) {
				var n = this.__data__;
				if (n instanceof r) {
					var l = n.__data__;
					if (!o || l.length < 199)
						return l.push([e, t]), (this.size = ++n.size), this;
					n = this.__data__ = new a(l);
				}
				return n.set(e, t), (this.size = n.size), this;
			};
		},
		503: function(e, t, n) {
			var r = n(504),
				o = n(468),
				a = n(428);
			e.exports = function(e) {
				return r(e, a, o);
			};
		},
		504: function(e, t, n) {
			var r = n(505),
				o = n(394);
			e.exports = function(e, t, n) {
				var a = t(e);
				return o(e) ? a : r(a, n(e));
			};
		},
		505: function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
				return e;
			};
		},
		506: function(e, t) {
			e.exports = function() {
				return [];
			};
		},
		507: function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
				return r;
			};
		},
		508: function(e, t) {
			e.exports = function() {
				return !1;
			};
		},
		509: function(e, t, n) {
			var r = n(207),
				o = n(414),
				a = n(206),
				l = {};
			(l['[object Float32Array]'] = l['[object Float64Array]'] = l[
				'[object Int8Array]'
			] = l['[object Int16Array]'] = l['[object Int32Array]'] = l[
				'[object Uint8Array]'
			] = l['[object Uint8ClampedArray]'] = l['[object Uint16Array]'] = l[
				'[object Uint32Array]'
			] = !0),
				(l['[object Arguments]'] = l['[object Array]'] = l[
					'[object ArrayBuffer]'
				] = l['[object Boolean]'] = l['[object DataView]'] = l[
					'[object Date]'
				] = l['[object Error]'] = l['[object Function]'] = l[
					'[object Map]'
				] = l['[object Number]'] = l['[object Object]'] = l[
					'[object RegExp]'
				] = l['[object Set]'] = l['[object String]'] = l[
					'[object WeakMap]'
				] = !1),
				(e.exports = function(e) {
					return a(e) && o(e.length) && !!l[r(e)];
				});
		},
		511: function(e, t, n) {
			var r = n(465),
				o = n(455),
				a = n(733),
				l = n(394);
			e.exports = function(e, t) {
				return (l(e) ? r : a)(e, o(t, 3));
			};
		},
		522: function(e, t, n) {
			var r = n(523),
				o = n(537),
				a = n(449);
			e.exports = function(e) {
				var t = o(e);
				return 1 == t.length && t[0][2]
					? a(t[0][0], t[0][1])
					: function(n) {
							return n === e || r(n, e, t);
					  };
			};
		},
		523: function(e, t, n) {
			var r = n(427),
				o = n(446);
			e.exports = function(e, t, n, a) {
				var l = n.length,
					i = l,
					u = !a;
				if (null == e) return !i;
				for (e = Object(e); l--; ) {
					var c = n[l];
					if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
				}
				for (; ++l < i; ) {
					var s = (c = n[l])[0],
						d = e[s],
						f = c[1];
					if (u && c[2]) {
						if (void 0 === d && !(s in e)) return !1;
					} else {
						var p = new r();
						if (a) var h = a(d, f, s, e, t, p);
						if (!(void 0 === h ? o(f, d, 3, a, p) : h)) return !1;
					}
				}
				return !0;
			};
		},
		524: function(e, t, n) {
			var r = n(427),
				o = n(447),
				a = n(528),
				l = n(530),
				i = n(460),
				u = n(394),
				c = n(423),
				s = n(431),
				d = '[object Object]',
				f = Object.prototype.hasOwnProperty;
			e.exports = function(e, t, n, p, h, b) {
				var g = u(e),
					v = u(t),
					x = g ? '[object Array]' : i(e),
					y = v ? '[object Array]' : i(t),
					m = (x = '[object Arguments]' == x ? d : x) == d,
					w = (y = '[object Arguments]' == y ? d : y) == d,
					C = x == y;
				if (C && c(e)) {
					if (!c(t)) return !1;
					(g = !0), (m = !1);
				}
				if (C && !m)
					return (
						b || (b = new r()),
						g || s(e) ? o(e, t, n, p, h, b) : a(e, t, x, n, p, h, b)
					);
				if (!(1 & n)) {
					var S = m && f.call(e, '__wrapped__'),
						_ = w && f.call(t, '__wrapped__');
					if (S || _) {
						var E = S ? e.value() : e,
							k = _ ? t.value() : t;
						return b || (b = new r()), h(E, k, n, p, b);
					}
				}
				return !!C && (b || (b = new r()), l(e, t, n, p, h, b));
			};
		},
		525: function(e, t) {
			e.exports = function(e) {
				return this.__data__.set(e, '__lodash_hash_undefined__'), this;
			};
		},
		526: function(e, t) {
			e.exports = function(e) {
				return this.__data__.has(e);
			};
		},
		527: function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
					if (t(e[n], n, e)) return !0;
				return !1;
			};
		},
		528: function(e, t, n) {
			var r = n(135),
				o = n(467),
				a = n(413),
				l = n(447),
				i = n(529),
				u = n(435),
				c = r ? r.prototype : void 0,
				s = c ? c.valueOf : void 0;
			e.exports = function(e, t, n, r, c, d, f) {
				switch (n) {
					case '[object DataView]':
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
							return !1;
						(e = e.buffer), (t = t.buffer);
					case '[object ArrayBuffer]':
						return !(e.byteLength != t.byteLength || !d(new o(e), new o(t)));
					case '[object Boolean]':
					case '[object Date]':
					case '[object Number]':
						return a(+e, +t);
					case '[object Error]':
						return e.name == t.name && e.message == t.message;
					case '[object RegExp]':
					case '[object String]':
						return e == t + '';
					case '[object Map]':
						var p = i;
					case '[object Set]':
						var h = 1 & r;
						if ((p || (p = u), e.size != t.size && !h)) return !1;
						var b = f.get(e);
						if (b) return b == t;
						(r |= 2), f.set(e, t);
						var g = l(p(e), p(t), r, c, d, f);
						return f.delete(e), g;
					case '[object Symbol]':
						if (s) return s.call(e) == s.call(t);
				}
				return !1;
			};
		},
		529: function(e, t) {
			e.exports = function(e) {
				var t = -1,
					n = Array(e.size);
				return (
					e.forEach(function(e, r) {
						n[++t] = [r, e];
					}),
					n
				);
			};
		},
		530: function(e, t, n) {
			var r = n(503),
				o = Object.prototype.hasOwnProperty;
			e.exports = function(e, t, n, a, l, i) {
				var u = 1 & n,
					c = r(e),
					s = c.length;
				if (s != r(t).length && !u) return !1;
				for (var d = s; d--; ) {
					var f = c[d];
					if (!(u ? f in t : o.call(t, f))) return !1;
				}
				var p = i.get(e);
				if (p && i.get(t)) return p == t;
				var h = !0;
				i.set(e, t), i.set(t, e);
				for (var b = u; ++d < s; ) {
					var g = e[(f = c[d])],
						v = t[f];
					if (a) var x = u ? a(v, g, f, t, e, i) : a(g, v, f, e, t, i);
					if (!(void 0 === x ? g === v || l(g, v, n, a, i) : x)) {
						h = !1;
						break;
					}
					b || (b = 'constructor' == f);
				}
				if (h && !b) {
					var y = e.constructor,
						m = t.constructor;
					y != m &&
						'constructor' in e &&
						'constructor' in t &&
						!(
							'function' == typeof y &&
							y instanceof y &&
							'function' == typeof m &&
							m instanceof m
						) &&
						(h = !1);
				}
				return i.delete(e), i.delete(t), h;
			};
		},
		531: function(e, t) {
			e.exports = function(e, t) {
				for (
					var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
					++n < r;

				) {
					var l = e[n];
					t(l, n, e) && (a[o++] = l);
				}
				return a;
			};
		},
		532: function(e, t, n) {
			var r = n(452),
				o = n(533),
				a = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				if (!r(e)) return o(e);
				var t = [];
				for (var n in Object(e))
					a.call(e, n) && 'constructor' != n && t.push(n);
				return t;
			};
		},
		533: function(e, t, n) {
			var r = n(470)(Object.keys, Object);
			e.exports = r;
		},
		534: function(e, t, n) {
			var r = n(396)(n(130), 'DataView');
			e.exports = r;
		},
		535: function(e, t, n) {
			var r = n(396)(n(130), 'Promise');
			e.exports = r;
		},
		536: function(e, t, n) {
			var r = n(396)(n(130), 'WeakMap');
			e.exports = r;
		},
		537: function(e, t, n) {
			var r = n(448),
				o = n(428);
			e.exports = function(e) {
				for (var t = o(e), n = t.length; n--; ) {
					var a = t[n],
						l = e[a];
					t[n] = [a, l, r(l)];
				}
				return t;
			};
		},
		538: function(e, t, n) {
			var r = n(446),
				o = n(466),
				a = n(539),
				l = n(419),
				i = n(448),
				u = n(449),
				c = n(400);
			e.exports = function(e, t) {
				return l(e) && i(t)
					? u(c(e), t)
					: function(n) {
							var l = o(n, e);
							return void 0 === l && l === t ? a(n, e) : r(t, l, 3);
					  };
			};
		},
		539: function(e, t, n) {
			var r = n(540),
				o = n(464);
			e.exports = function(e, t) {
				return null != e && o(e, t, r);
			};
		},
		540: function(e, t) {
			e.exports = function(e, t) {
				return null != e && t in Object(e);
			};
		},
		541: function(e, t, n) {
			var r = n(542),
				o = n(543),
				a = n(419),
				l = n(400);
			e.exports = function(e) {
				return a(e) ? r(l(e)) : o(e);
			};
		},
		542: function(e, t) {
			e.exports = function(e) {
				return function(t) {
					return null == t ? void 0 : t[e];
				};
			};
		},
		543: function(e, t, n) {
			var r = n(438);
			e.exports = function(e) {
				return function(t) {
					return r(t, e);
				};
			};
		},
		548: function(e, t, n) {
			var r = n(585),
				o = n(551);
			e.exports = function(e, t, n, a) {
				var l = !n;
				n || (n = {});
				for (var i = -1, u = t.length; ++i < u; ) {
					var c = t[i],
						s = a ? a(n[c], e[c], c, n, e) : void 0;
					void 0 === s && (s = e[c]), l ? o(n, c, s) : r(n, c, s);
				}
				return n;
			};
		},
		549: function(e, t, n) {
			var r = n(469),
				o = n(654),
				a = n(429);
			e.exports = function(e) {
				return a(e) ? r(e, !0) : o(e);
			};
		},
		581: function(e, t, n) {
			var r = n(470)(Object.getPrototypeOf, Object);
			e.exports = r;
		},
		595: function(e, t, n) {
			var r = n(467);
			e.exports = function(e) {
				var t = new e.constructor(e.byteLength);
				return new r(t).set(new r(e)), t;
			};
		},
		600: function(e, t, n) {
			var r = n(551),
				o = n(413);
			e.exports = function(e, t, n) {
				((void 0 === n || o(e[t], n)) && (void 0 !== n || t in e)) ||
					r(e, t, n);
			};
		},
		601: function(e, t) {
			e.exports = function(e, t) {
				if (
					('constructor' !== t || 'function' !== typeof e[t]) &&
					'__proto__' != t
				)
					return e[t];
			};
		},
		616: function(e, t, n) {
			var r = n(649),
				o = n(651);
			e.exports = function(e, t) {
				return e && r(e, o(t));
			};
		},
		617: function(e, t, n) {
			var r = n(650)();
			e.exports = r;
		},
		618: function(e, t, n) {
			var r = n(207),
				o = n(581),
				a = n(206),
				l = Function.prototype,
				i = Object.prototype,
				u = l.toString,
				c = i.hasOwnProperty,
				s = u.call(Object);
			e.exports = function(e) {
				if (!a(e) || '[object Object]' != r(e)) return !1;
				var t = o(e);
				if (null === t) return !0;
				var n = c.call(t, 'constructor') && t.constructor;
				return 'function' == typeof n && n instanceof n && u.call(n) == s;
			};
		},
		619: function(e, t, n) {
			(function(e) {
				var r = n(130),
					o = t && !t.nodeType && t,
					a = o && 'object' == typeof e && e && !e.nodeType && e,
					l = a && a.exports === o ? r.Buffer : void 0,
					i = l ? l.allocUnsafe : void 0;
				e.exports = function(e, t) {
					if (t) return e.slice();
					var n = e.length,
						r = i ? i(n) : new e.constructor(n);
					return e.copy(r), r;
				};
			}.call(this, n(212)(e)));
		},
		620: function(e, t) {
			e.exports = function(e, t) {
				var n = -1,
					r = e.length;
				for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
				return t;
			};
		},
		621: function(e, t, n) {
			var r = n(595);
			e.exports = function(e, t) {
				var n = t ? r(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.length);
			};
		},
		622: function(e, t, n) {
			var r = n(657),
				o = n(581),
				a = n(452);
			e.exports = function(e) {
				return 'function' != typeof e.constructor || a(e) ? {} : r(o(e));
			};
		},
		623: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Checkboard = void 0);
			var r = l(n(0)),
				o = l(n(395)),
				a = (function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return (t.default = e), t;
				})(n(758));
			function l(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var i = (t.Checkboard = function(e) {
				var t = e.white,
					n = e.grey,
					l = e.size,
					i = e.renderers,
					u = e.borderRadius,
					c = e.boxShadow,
					s = (0, o.default)({
						default: {
							grid: {
								borderRadius: u,
								boxShadow: c,
								absolute: '0px 0px 0px 0px',
								background: 'url(' + a.get(t, n, l, i.canvas) + ') center left',
							},
						},
					});
				return r.default.createElement('div', { style: s.grid });
			});
			(i.defaultProps = {
				size: 8,
				white: 'transparent',
				grey: 'rgba(0,0,0,.08)',
				renderers: {},
			}),
				(t.default = i);
		},
		649: function(e, t, n) {
			var r = n(617),
				o = n(428);
			e.exports = function(e, t) {
				return e && r(e, t, o);
			};
		},
		650: function(e, t) {
			e.exports = function(e) {
				return function(t, n, r) {
					for (var o = -1, a = Object(t), l = r(t), i = l.length; i--; ) {
						var u = l[e ? i : ++o];
						if (!1 === n(a[u], u, a)) break;
					}
					return t;
				};
			};
		},
		651: function(e, t, n) {
			var r = n(445);
			e.exports = function(e) {
				return 'function' == typeof e ? e : r;
			};
		},
		652: function(e, t, n) {
			var r = n(649),
				o = n(734)(r);
			e.exports = o;
		},
		653: function(e, t) {
			e.exports = function(e, t) {
				for (
					var n = -1, r = null == e ? 0 : e.length;
					++n < r && !1 !== t(e[n], n, e);

				);
				return e;
			};
		},
		654: function(e, t, n) {
			var r = n(131),
				o = n(452),
				a = n(655),
				l = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				if (!r(e)) return a(e);
				var t = o(e),
					n = [];
				for (var i in e)
					('constructor' != i || (!t && l.call(e, i))) && n.push(i);
				return n;
			};
		},
		655: function(e, t) {
			e.exports = function(e) {
				var t = [];
				if (null != e) for (var n in Object(e)) t.push(n);
				return t;
			};
		},
		656: function(e, t, n) {
			var r = n(505),
				o = n(581),
				a = n(468),
				l = n(506),
				i = Object.getOwnPropertySymbols
					? function(e) {
							for (var t = []; e; ) r(t, a(e)), (e = o(e));
							return t;
					  }
					: l;
			e.exports = i;
		},
		657: function(e, t, n) {
			var r = n(131),
				o = Object.create,
				a = (function() {
					function e() {}
					return function(t) {
						if (!r(t)) return {};
						if (o) return o(t);
						e.prototype = t;
						var n = new e();
						return (e.prototype = void 0), n;
					};
				})();
			e.exports = a;
		},
		658: function(e, t, n) {
			var r = n(427),
				o = n(600),
				a = n(617),
				l = n(659),
				i = n(131),
				u = n(549),
				c = n(601);
			e.exports = function e(t, n, s, d, f) {
				t !== n &&
					a(
						n,
						function(a, u) {
							if ((f || (f = new r()), i(a))) l(t, n, u, s, e, d, f);
							else {
								var p = d ? d(c(t, u), a, u + '', t, n, f) : void 0;
								void 0 === p && (p = a), o(t, u, p);
							}
						},
						u,
					);
			};
		},
		659: function(e, t, n) {
			var r = n(600),
				o = n(619),
				a = n(621),
				l = n(620),
				i = n(622),
				u = n(422),
				c = n(394),
				s = n(660),
				d = n(423),
				f = n(425),
				p = n(131),
				h = n(618),
				b = n(431),
				g = n(601),
				v = n(661);
			e.exports = function(e, t, n, x, y, m, w) {
				var C = g(e, n),
					S = g(t, n),
					_ = w.get(S);
				if (_) r(e, n, _);
				else {
					var E = m ? m(C, S, n + '', e, t, w) : void 0,
						k = void 0 === E;
					if (k) {
						var O = c(S),
							j = !O && d(S),
							M = !O && !j && b(S);
						(E = S),
							O || j || M
								? c(C)
									? (E = C)
									: s(C)
									? (E = l(C))
									: j
									? ((k = !1), (E = o(S, !0)))
									: M
									? ((k = !1), (E = a(S, !0)))
									: (E = [])
								: h(S) || u(S)
								? ((E = C), u(C) ? (E = v(C)) : (p(C) && !f(C)) || (E = i(S)))
								: (k = !1);
					}
					k && (w.set(S, E), y(E, S, x, m, w), w.delete(S)), r(e, n, E);
				}
			};
		},
		660: function(e, t, n) {
			var r = n(429),
				o = n(206);
			e.exports = function(e) {
				return o(e) && r(e);
			};
		},
		661: function(e, t, n) {
			var r = n(548),
				o = n(549);
			e.exports = function(e) {
				return r(e, o(e));
			};
		},
		662: function(e, t, n) {
			var r = n(663),
				o = n(670);
			e.exports = function(e) {
				return r(function(t, n) {
					var r = -1,
						a = n.length,
						l = a > 1 ? n[a - 1] : void 0,
						i = a > 2 ? n[2] : void 0;
					for (
						l = e.length > 3 && 'function' == typeof l ? (a--, l) : void 0,
							i && o(n[0], n[1], i) && ((l = a < 3 ? void 0 : l), (a = 1)),
							t = Object(t);
						++r < a;

					) {
						var u = n[r];
						u && e(t, u, r, l);
					}
					return t;
				});
			};
		},
		663: function(e, t, n) {
			var r = n(445),
				o = n(664),
				a = n(666);
			e.exports = function(e, t) {
				return a(o(e, t, r), e + '');
			};
		},
		664: function(e, t, n) {
			var r = n(665),
				o = Math.max;
			e.exports = function(e, t, n) {
				return (
					(t = o(void 0 === t ? e.length - 1 : t, 0)),
					function() {
						for (
							var a = arguments, l = -1, i = o(a.length - t, 0), u = Array(i);
							++l < i;

						)
							u[l] = a[t + l];
						l = -1;
						for (var c = Array(t + 1); ++l < t; ) c[l] = a[l];
						return (c[t] = n(u)), r(e, this, c);
					}
				);
			};
		},
		665: function(e, t) {
			e.exports = function(e, t, n) {
				switch (n.length) {
					case 0:
						return e.call(t);
					case 1:
						return e.call(t, n[0]);
					case 2:
						return e.call(t, n[0], n[1]);
					case 3:
						return e.call(t, n[0], n[1], n[2]);
				}
				return e.apply(t, n);
			};
		},
		666: function(e, t, n) {
			var r = n(667),
				o = n(669)(r);
			e.exports = o;
		},
		667: function(e, t, n) {
			var r = n(668),
				o = n(599),
				a = n(445),
				l = o
					? function(e, t) {
							return o(e, 'toString', {
								configurable: !0,
								enumerable: !1,
								value: r(t),
								writable: !0,
							});
					  }
					: a;
			e.exports = l;
		},
		668: function(e, t) {
			e.exports = function(e) {
				return function() {
					return e;
				};
			};
		},
		669: function(e, t) {
			var n = Date.now;
			e.exports = function(e) {
				var t = 0,
					r = 0;
				return function() {
					var o = n(),
						a = 16 - (o - r);
					if (((r = o), a > 0)) {
						if (++t >= 800) return arguments[0];
					} else t = 0;
					return e.apply(void 0, arguments);
				};
			};
		},
		670: function(e, t, n) {
			var r = n(413),
				o = n(429),
				a = n(420),
				l = n(131);
			e.exports = function(e, t, n) {
				if (!l(n)) return !1;
				var i = typeof t;
				return (
					!!('number' == i
						? o(n) && a(t, n.length)
						: 'string' == i && t in n) && r(n[t], e)
				);
			};
		},
		671: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.ColorWrap = void 0);
			var r =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				o = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				a = n(0),
				l = c(a),
				i = c(n(145)),
				u = c(n(450));
			function c(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var s = (t.ColorWrap = function(e) {
				var t = (function(t) {
					function n(e) {
						!(function(e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, n);
						var t = (function(e, t) {
							if (!e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called",
								);
							return !t || ('object' !== typeof t && 'function' !== typeof t)
								? e
								: t;
						})(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
						return (
							(t.handleChange = function(e, n) {
								if (u.default.simpleCheckForValidColor(e)) {
									var r = u.default.toState(e, e.h || t.state.oldHue);
									t.setState(r),
										t.props.onChangeComplete &&
											t.debounce(t.props.onChangeComplete, r, n),
										t.props.onChange && t.props.onChange(r, n);
								}
							}),
							(t.handleSwatchHover = function(e, n) {
								if (u.default.simpleCheckForValidColor(e)) {
									var r = u.default.toState(e, e.h || t.state.oldHue);
									t.props.onSwatchHover && t.props.onSwatchHover(r, n);
								}
							}),
							(t.state = r({}, u.default.toState(e.color, 0))),
							(t.debounce = (0, i.default)(function(e, t, n) {
								e(t, n);
							}, 100)),
							t
						);
					}
					return (
						(function(e, t) {
							if ('function' !== typeof t && null !== t)
								throw new TypeError(
									'Super expression must either be null or a function, not ' +
										typeof t,
								);
							(e.prototype = Object.create(t && t.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0,
								},
							})),
								t &&
									(Object.setPrototypeOf
										? Object.setPrototypeOf(e, t)
										: (e.__proto__ = t));
						})(n, t),
						o(
							n,
							[
								{
									key: 'render',
									value: function() {
										var t = {};
										return (
											this.props.onSwatchHover &&
												(t.onSwatchHover = this.handleSwatchHover),
											l.default.createElement(
												e,
												r(
													{},
													this.props,
													this.state,
													{ onChange: this.handleChange },
													t,
												),
											)
										);
									},
								},
							],
							[
								{
									key: 'getDerivedStateFromProps',
									value: function(e, t) {
										return r({}, u.default.toState(e.color, t.oldHue));
									},
								},
							],
						),
						n
					);
				})(a.PureComponent || a.Component);
				return (
					(t.propTypes = r({}, e.propTypes)),
					(t.defaultProps = r({}, e.defaultProps, {
						color: { h: 250, s: 0.5, l: 0.2, a: 1 },
					})),
					t
				);
			});
			t.default = s;
		},
		672: function(e, t, n) {
			'use strict';
			n.r(t),
				n.d(t, 'red', function() {
					return r;
				}),
				n.d(t, 'pink', function() {
					return o;
				}),
				n.d(t, 'purple', function() {
					return a;
				}),
				n.d(t, 'deepPurple', function() {
					return l;
				}),
				n.d(t, 'indigo', function() {
					return i;
				}),
				n.d(t, 'blue', function() {
					return u;
				}),
				n.d(t, 'lightBlue', function() {
					return c;
				}),
				n.d(t, 'cyan', function() {
					return s;
				}),
				n.d(t, 'teal', function() {
					return d;
				}),
				n.d(t, 'green', function() {
					return f;
				}),
				n.d(t, 'lightGreen', function() {
					return p;
				}),
				n.d(t, 'lime', function() {
					return h;
				}),
				n.d(t, 'yellow', function() {
					return b;
				}),
				n.d(t, 'amber', function() {
					return g;
				}),
				n.d(t, 'orange', function() {
					return v;
				}),
				n.d(t, 'deepOrange', function() {
					return x;
				}),
				n.d(t, 'brown', function() {
					return y;
				}),
				n.d(t, 'grey', function() {
					return m;
				}),
				n.d(t, 'blueGrey', function() {
					return w;
				}),
				n.d(t, 'darkText', function() {
					return C;
				}),
				n.d(t, 'lightText', function() {
					return S;
				}),
				n.d(t, 'darkIcons', function() {
					return _;
				}),
				n.d(t, 'lightIcons', function() {
					return E;
				}),
				n.d(t, 'white', function() {
					return k;
				}),
				n.d(t, 'black', function() {
					return O;
				});
			var r = {
					50: '#ffebee',
					100: '#ffcdd2',
					200: '#ef9a9a',
					300: '#e57373',
					400: '#ef5350',
					500: '#f44336',
					600: '#e53935',
					700: '#d32f2f',
					800: '#c62828',
					900: '#b71c1c',
					a100: '#ff8a80',
					a200: '#ff5252',
					a400: '#ff1744',
					a700: '#d50000',
				},
				o = {
					50: '#fce4ec',
					100: '#f8bbd0',
					200: '#f48fb1',
					300: '#f06292',
					400: '#ec407a',
					500: '#e91e63',
					600: '#d81b60',
					700: '#c2185b',
					800: '#ad1457',
					900: '#880e4f',
					a100: '#ff80ab',
					a200: '#ff4081',
					a400: '#f50057',
					a700: '#c51162',
				},
				a = {
					50: '#f3e5f5',
					100: '#e1bee7',
					200: '#ce93d8',
					300: '#ba68c8',
					400: '#ab47bc',
					500: '#9c27b0',
					600: '#8e24aa',
					700: '#7b1fa2',
					800: '#6a1b9a',
					900: '#4a148c',
					a100: '#ea80fc',
					a200: '#e040fb',
					a400: '#d500f9',
					a700: '#aa00ff',
				},
				l = {
					50: '#ede7f6',
					100: '#d1c4e9',
					200: '#b39ddb',
					300: '#9575cd',
					400: '#7e57c2',
					500: '#673ab7',
					600: '#5e35b1',
					700: '#512da8',
					800: '#4527a0',
					900: '#311b92',
					a100: '#b388ff',
					a200: '#7c4dff',
					a400: '#651fff',
					a700: '#6200ea',
				},
				i = {
					50: '#e8eaf6',
					100: '#c5cae9',
					200: '#9fa8da',
					300: '#7986cb',
					400: '#5c6bc0',
					500: '#3f51b5',
					600: '#3949ab',
					700: '#303f9f',
					800: '#283593',
					900: '#1a237e',
					a100: '#8c9eff',
					a200: '#536dfe',
					a400: '#3d5afe',
					a700: '#304ffe',
				},
				u = {
					50: '#e3f2fd',
					100: '#bbdefb',
					200: '#90caf9',
					300: '#64b5f6',
					400: '#42a5f5',
					500: '#2196f3',
					600: '#1e88e5',
					700: '#1976d2',
					800: '#1565c0',
					900: '#0d47a1',
					a100: '#82b1ff',
					a200: '#448aff',
					a400: '#2979ff',
					a700: '#2962ff',
				},
				c = {
					50: '#e1f5fe',
					100: '#b3e5fc',
					200: '#81d4fa',
					300: '#4fc3f7',
					400: '#29b6f6',
					500: '#03a9f4',
					600: '#039be5',
					700: '#0288d1',
					800: '#0277bd',
					900: '#01579b',
					a100: '#80d8ff',
					a200: '#40c4ff',
					a400: '#00b0ff',
					a700: '#0091ea',
				},
				s = {
					50: '#e0f7fa',
					100: '#b2ebf2',
					200: '#80deea',
					300: '#4dd0e1',
					400: '#26c6da',
					500: '#00bcd4',
					600: '#00acc1',
					700: '#0097a7',
					800: '#00838f',
					900: '#006064',
					a100: '#84ffff',
					a200: '#18ffff',
					a400: '#00e5ff',
					a700: '#00b8d4',
				},
				d = {
					50: '#e0f2f1',
					100: '#b2dfdb',
					200: '#80cbc4',
					300: '#4db6ac',
					400: '#26a69a',
					500: '#009688',
					600: '#00897b',
					700: '#00796b',
					800: '#00695c',
					900: '#004d40',
					a100: '#a7ffeb',
					a200: '#64ffda',
					a400: '#1de9b6',
					a700: '#00bfa5',
				},
				f = {
					50: '#e8f5e9',
					100: '#c8e6c9',
					200: '#a5d6a7',
					300: '#81c784',
					400: '#66bb6a',
					500: '#4caf50',
					600: '#43a047',
					700: '#388e3c',
					800: '#2e7d32',
					900: '#1b5e20',
					a100: '#b9f6ca',
					a200: '#69f0ae',
					a400: '#00e676',
					a700: '#00c853',
				},
				p = {
					50: '#f1f8e9',
					100: '#dcedc8',
					200: '#c5e1a5',
					300: '#aed581',
					400: '#9ccc65',
					500: '#8bc34a',
					600: '#7cb342',
					700: '#689f38',
					800: '#558b2f',
					900: '#33691e',
					a100: '#ccff90',
					a200: '#b2ff59',
					a400: '#76ff03',
					a700: '#64dd17',
				},
				h = {
					50: '#f9fbe7',
					100: '#f0f4c3',
					200: '#e6ee9c',
					300: '#dce775',
					400: '#d4e157',
					500: '#cddc39',
					600: '#c0ca33',
					700: '#afb42b',
					800: '#9e9d24',
					900: '#827717',
					a100: '#f4ff81',
					a200: '#eeff41',
					a400: '#c6ff00',
					a700: '#aeea00',
				},
				b = {
					50: '#fffde7',
					100: '#fff9c4',
					200: '#fff59d',
					300: '#fff176',
					400: '#ffee58',
					500: '#ffeb3b',
					600: '#fdd835',
					700: '#fbc02d',
					800: '#f9a825',
					900: '#f57f17',
					a100: '#ffff8d',
					a200: '#ffff00',
					a400: '#ffea00',
					a700: '#ffd600',
				},
				g = {
					50: '#fff8e1',
					100: '#ffecb3',
					200: '#ffe082',
					300: '#ffd54f',
					400: '#ffca28',
					500: '#ffc107',
					600: '#ffb300',
					700: '#ffa000',
					800: '#ff8f00',
					900: '#ff6f00',
					a100: '#ffe57f',
					a200: '#ffd740',
					a400: '#ffc400',
					a700: '#ffab00',
				},
				v = {
					50: '#fff3e0',
					100: '#ffe0b2',
					200: '#ffcc80',
					300: '#ffb74d',
					400: '#ffa726',
					500: '#ff9800',
					600: '#fb8c00',
					700: '#f57c00',
					800: '#ef6c00',
					900: '#e65100',
					a100: '#ffd180',
					a200: '#ffab40',
					a400: '#ff9100',
					a700: '#ff6d00',
				},
				x = {
					50: '#fbe9e7',
					100: '#ffccbc',
					200: '#ffab91',
					300: '#ff8a65',
					400: '#ff7043',
					500: '#ff5722',
					600: '#f4511e',
					700: '#e64a19',
					800: '#d84315',
					900: '#bf360c',
					a100: '#ff9e80',
					a200: '#ff6e40',
					a400: '#ff3d00',
					a700: '#dd2c00',
				},
				y = {
					50: '#efebe9',
					100: '#d7ccc8',
					200: '#bcaaa4',
					300: '#a1887f',
					400: '#8d6e63',
					500: '#795548',
					600: '#6d4c41',
					700: '#5d4037',
					800: '#4e342e',
					900: '#3e2723',
				},
				m = {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#eeeeee',
					300: '#e0e0e0',
					400: '#bdbdbd',
					500: '#9e9e9e',
					600: '#757575',
					700: '#616161',
					800: '#424242',
					900: '#212121',
				},
				w = {
					50: '#eceff1',
					100: '#cfd8dc',
					200: '#b0bec5',
					300: '#90a4ae',
					400: '#78909c',
					500: '#607d8b',
					600: '#546e7a',
					700: '#455a64',
					800: '#37474f',
					900: '#263238',
				},
				C = {
					primary: 'rgba(0, 0, 0, 0.87)',
					secondary: 'rgba(0, 0, 0, 0.54)',
					disabled: 'rgba(0, 0, 0, 0.38)',
					dividers: 'rgba(0, 0, 0, 0.12)',
				},
				S = {
					primary: 'rgba(255, 255, 255, 1)',
					secondary: 'rgba(255, 255, 255, 0.7)',
					disabled: 'rgba(255, 255, 255, 0.5)',
					dividers: 'rgba(255, 255, 255, 0.12)',
				},
				_ = { active: 'rgba(0, 0, 0, 0.54)', inactive: 'rgba(0, 0, 0, 0.38)' },
				E = {
					active: 'rgba(255, 255, 255, 1)',
					inactive: 'rgba(255, 255, 255, 0.5)',
				},
				k = '#ffffff',
				O = '#000000';
			t.default = {
				red: r,
				pink: o,
				purple: a,
				deepPurple: l,
				indigo: i,
				blue: u,
				lightBlue: c,
				cyan: s,
				teal: d,
				green: f,
				lightGreen: p,
				lime: h,
				yellow: b,
				amber: g,
				orange: v,
				deepOrange: x,
				brown: y,
				grey: m,
				blueGrey: w,
				darkText: C,
				lightText: S,
				darkIcons: _,
				lightIcons: E,
				white: k,
				black: O,
			};
		},
		729: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.CustomPicker = t.TwitterPicker = t.SwatchesPicker = t.SliderPicker = t.SketchPicker = t.PhotoshopPicker = t.MaterialPicker = t.HuePicker = t.GithubPicker = t.CompactPicker = t.ChromePicker = t.default = t.CirclePicker = t.BlockPicker = t.AlphaPicker = void 0);
			var r = n(730);
			Object.defineProperty(t, 'AlphaPicker', {
				enumerable: !0,
				get: function() {
					return x(r).default;
				},
			});
			var o = n(771);
			Object.defineProperty(t, 'BlockPicker', {
				enumerable: !0,
				get: function() {
					return x(o).default;
				},
			});
			var a = n(773);
			Object.defineProperty(t, 'CirclePicker', {
				enumerable: !0,
				get: function() {
					return x(a).default;
				},
			});
			var l = n(775);
			Object.defineProperty(t, 'ChromePicker', {
				enumerable: !0,
				get: function() {
					return x(l).default;
				},
			});
			var i = n(780);
			Object.defineProperty(t, 'CompactPicker', {
				enumerable: !0,
				get: function() {
					return x(i).default;
				},
			});
			var u = n(783);
			Object.defineProperty(t, 'GithubPicker', {
				enumerable: !0,
				get: function() {
					return x(u).default;
				},
			});
			var c = n(785);
			Object.defineProperty(t, 'HuePicker', {
				enumerable: !0,
				get: function() {
					return x(c).default;
				},
			});
			var s = n(787);
			Object.defineProperty(t, 'MaterialPicker', {
				enumerable: !0,
				get: function() {
					return x(s).default;
				},
			});
			var d = n(788);
			Object.defineProperty(t, 'PhotoshopPicker', {
				enumerable: !0,
				get: function() {
					return x(d).default;
				},
			});
			var f = n(794);
			Object.defineProperty(t, 'SketchPicker', {
				enumerable: !0,
				get: function() {
					return x(f).default;
				},
			});
			var p = n(797);
			Object.defineProperty(t, 'SliderPicker', {
				enumerable: !0,
				get: function() {
					return x(p).default;
				},
			});
			var h = n(801);
			Object.defineProperty(t, 'SwatchesPicker', {
				enumerable: !0,
				get: function() {
					return x(h).default;
				},
			});
			var b = n(805);
			Object.defineProperty(t, 'TwitterPicker', {
				enumerable: !0,
				get: function() {
					return x(b).default;
				},
			});
			var g = n(671);
			Object.defineProperty(t, 'CustomPicker', {
				enumerable: !0,
				get: function() {
					return x(g).default;
				},
			});
			var v = x(l);
			function x(e) {
				return e && e.__esModule ? e : { default: e };
			}
			t.default = v.default;
		},
		730: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.AlphaPicker = void 0);
			var r =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				o = u(n(0)),
				a = u(n(395)),
				l = n(399),
				i = u(n(770));
			function u(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var c = (t.AlphaPicker = function(e) {
				var t = e.rgb,
					n = e.hsl,
					i = e.width,
					u = e.height,
					c = e.onChange,
					s = e.direction,
					d = e.style,
					f = e.renderers,
					p = e.pointer,
					h = e.className,
					b = void 0 === h ? '' : h,
					g = (0, a.default)({
						default: {
							picker: { position: 'relative', width: i, height: u },
							alpha: { radius: '2px', style: d },
						},
					});
				return o.default.createElement(
					'div',
					{ style: g.picker, className: 'alpha-picker ' + b },
					o.default.createElement(
						l.Alpha,
						r({}, g.alpha, {
							rgb: t,
							hsl: n,
							pointer: p,
							renderers: f,
							onChange: c,
							direction: s,
						}),
					),
				);
			});
			(c.defaultProps = {
				width: '316px',
				height: '16px',
				direction: 'horizontal',
				pointer: i.default,
			}),
				(t.default = (0, l.ColorWrap)(c));
		},
		731: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.flattenNames = void 0);
			var r = i(n(732)),
				o = i(n(616)),
				a = i(n(618)),
				l = i(n(511));
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.flattenNames = function e() {
				var t =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					n = [];
				return (
					(0, l.default)(t, function(t) {
						Array.isArray(t)
							? e(t).map(function(e) {
									return n.push(e);
							  })
							: (0, a.default)(t)
							? (0, o.default)(t, function(e, t) {
									!0 === e && n.push(t), n.push(t + '-' + e);
							  })
							: (0, r.default)(t) && n.push(t);
					}),
					n
				);
			});
			t.default = u;
		},
		732: function(e, t, n) {
			var r = n(207),
				o = n(394),
				a = n(206);
			e.exports = function(e) {
				return (
					'string' == typeof e || (!o(e) && a(e) && '[object String]' == r(e))
				);
			};
		},
		733: function(e, t, n) {
			var r = n(652),
				o = n(429);
			e.exports = function(e, t) {
				var n = -1,
					a = o(e) ? Array(e.length) : [];
				return (
					r(e, function(e, r, o) {
						a[++n] = t(e, r, o);
					}),
					a
				);
			};
		},
		734: function(e, t, n) {
			var r = n(429);
			e.exports = function(e, t) {
				return function(n, o) {
					if (null == n) return n;
					if (!r(n)) return e(n, o);
					for (
						var a = n.length, l = t ? a : -1, i = Object(n);
						(t ? l-- : ++l < a) && !1 !== o(i[l], l, i);

					);
					return n;
				};
			};
		},
		735: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.mergeClasses = void 0);
			var r = l(n(616)),
				o = l(n(736)),
				a =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					};
			function l(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var i = (t.mergeClasses = function(e) {
				var t =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					n = (e.default && (0, o.default)(e.default)) || {};
				return (
					t.map(function(t) {
						var o = e[t];
						return (
							o &&
								(0, r.default)(o, function(e, t) {
									n[t] || (n[t] = {}), (n[t] = a({}, n[t], o[t]));
								}),
							t
						);
					}),
					n
				);
			});
			t.default = i;
		},
		736: function(e, t, n) {
			var r = n(737);
			e.exports = function(e) {
				return r(e, 5);
			};
		},
		737: function(e, t, n) {
			var r = n(427),
				o = n(653),
				a = n(585),
				l = n(738),
				i = n(739),
				u = n(619),
				c = n(620),
				s = n(740),
				d = n(741),
				f = n(503),
				p = n(742),
				h = n(460),
				b = n(743),
				g = n(744),
				v = n(622),
				x = n(394),
				y = n(423),
				m = n(748),
				w = n(131),
				C = n(750),
				S = n(428),
				_ = {};
			(_['[object Arguments]'] = _['[object Array]'] = _[
				'[object ArrayBuffer]'
			] = _['[object DataView]'] = _['[object Boolean]'] = _[
				'[object Date]'
			] = _['[object Float32Array]'] = _['[object Float64Array]'] = _[
				'[object Int8Array]'
			] = _['[object Int16Array]'] = _['[object Int32Array]'] = _[
				'[object Map]'
			] = _['[object Number]'] = _['[object Object]'] = _[
				'[object RegExp]'
			] = _['[object Set]'] = _['[object String]'] = _['[object Symbol]'] = _[
				'[object Uint8Array]'
			] = _['[object Uint8ClampedArray]'] = _['[object Uint16Array]'] = _[
				'[object Uint32Array]'
			] = !0),
				(_['[object Error]'] = _['[object Function]'] = _[
					'[object WeakMap]'
				] = !1),
				(e.exports = function e(t, n, E, k, O, j) {
					var M,
						P = 1 & n,
						R = 2 & n,
						B = 4 & n;
					if ((E && (M = O ? E(t, k, O, j) : E(t)), void 0 !== M)) return M;
					if (!w(t)) return t;
					var T = x(t);
					if (T) {
						if (((M = b(t)), !P)) return c(t, M);
					} else {
						var I = h(t),
							F = '[object Function]' == I || '[object GeneratorFunction]' == I;
						if (y(t)) return u(t, P);
						if (
							'[object Object]' == I ||
							'[object Arguments]' == I ||
							(F && !O)
						) {
							if (((M = R || F ? {} : v(t)), !P))
								return R ? d(t, i(M, t)) : s(t, l(M, t));
						} else {
							if (!_[I]) return O ? t : {};
							M = g(t, I, P);
						}
					}
					j || (j = new r());
					var A = j.get(t);
					if (A) return A;
					j.set(t, M),
						C(t)
							? t.forEach(function(r) {
									M.add(e(r, n, E, r, t, j));
							  })
							: m(t) &&
							  t.forEach(function(r, o) {
									M.set(o, e(r, n, E, o, t, j));
							  });
					var D = B ? (R ? p : f) : R ? keysIn : S,
						H = T ? void 0 : D(t);
					return (
						o(H || t, function(r, o) {
							H && (r = t[(o = r)]), a(M, o, e(r, n, E, o, t, j));
						}),
						M
					);
				});
		},
		738: function(e, t, n) {
			var r = n(548),
				o = n(428);
			e.exports = function(e, t) {
				return e && r(t, o(t), e);
			};
		},
		739: function(e, t, n) {
			var r = n(548),
				o = n(549);
			e.exports = function(e, t) {
				return e && r(t, o(t), e);
			};
		},
		740: function(e, t, n) {
			var r = n(548),
				o = n(468);
			e.exports = function(e, t) {
				return r(e, o(e), t);
			};
		},
		741: function(e, t, n) {
			var r = n(548),
				o = n(656);
			e.exports = function(e, t) {
				return r(e, o(e), t);
			};
		},
		742: function(e, t, n) {
			var r = n(504),
				o = n(656),
				a = n(549);
			e.exports = function(e) {
				return r(e, a, o);
			};
		},
		743: function(e, t) {
			var n = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				var t = e.length,
					r = new e.constructor(t);
				return (
					t &&
						'string' == typeof e[0] &&
						n.call(e, 'index') &&
						((r.index = e.index), (r.input = e.input)),
					r
				);
			};
		},
		744: function(e, t, n) {
			var r = n(595),
				o = n(745),
				a = n(746),
				l = n(747),
				i = n(621);
			e.exports = function(e, t, n) {
				var u = e.constructor;
				switch (t) {
					case '[object ArrayBuffer]':
						return r(e);
					case '[object Boolean]':
					case '[object Date]':
						return new u(+e);
					case '[object DataView]':
						return o(e, n);
					case '[object Float32Array]':
					case '[object Float64Array]':
					case '[object Int8Array]':
					case '[object Int16Array]':
					case '[object Int32Array]':
					case '[object Uint8Array]':
					case '[object Uint8ClampedArray]':
					case '[object Uint16Array]':
					case '[object Uint32Array]':
						return i(e, n);
					case '[object Map]':
						return new u();
					case '[object Number]':
					case '[object String]':
						return new u(e);
					case '[object RegExp]':
						return a(e);
					case '[object Set]':
						return new u();
					case '[object Symbol]':
						return l(e);
				}
			};
		},
		745: function(e, t, n) {
			var r = n(595);
			e.exports = function(e, t) {
				var n = t ? r(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.byteLength);
			};
		},
		746: function(e, t) {
			var n = /\w*$/;
			e.exports = function(e) {
				var t = new e.constructor(e.source, n.exec(e));
				return (t.lastIndex = e.lastIndex), t;
			};
		},
		747: function(e, t, n) {
			var r = n(135),
				o = r ? r.prototype : void 0,
				a = o ? o.valueOf : void 0;
			e.exports = function(e) {
				return a ? Object(a.call(e)) : {};
			};
		},
		748: function(e, t, n) {
			var r = n(749),
				o = n(458),
				a = n(459),
				l = a && a.isMap,
				i = l ? o(l) : r;
			e.exports = i;
		},
		749: function(e, t, n) {
			var r = n(460),
				o = n(206);
			e.exports = function(e) {
				return o(e) && '[object Map]' == r(e);
			};
		},
		750: function(e, t, n) {
			var r = n(751),
				o = n(458),
				a = n(459),
				l = a && a.isSet,
				i = l ? o(l) : r;
			e.exports = i;
		},
		751: function(e, t, n) {
			var r = n(460),
				o = n(206);
			e.exports = function(e) {
				return o(e) && '[object Set]' == r(e);
			};
		},
		752: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.autoprefix = void 0);
			var r,
				o = n(616),
				a = (r = o) && r.__esModule ? r : { default: r },
				l =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					};
			var i = {
					borderRadius: function(e) {
						return {
							msBorderRadius: e,
							MozBorderRadius: e,
							OBorderRadius: e,
							WebkitBorderRadius: e,
							borderRadius: e,
						};
					},
					boxShadow: function(e) {
						return {
							msBoxShadow: e,
							MozBoxShadow: e,
							OBoxShadow: e,
							WebkitBoxShadow: e,
							boxShadow: e,
						};
					},
					userSelect: function(e) {
						return {
							WebkitTouchCallout: e,
							KhtmlUserSelect: e,
							MozUserSelect: e,
							msUserSelect: e,
							WebkitUserSelect: e,
							userSelect: e,
						};
					},
					flex: function(e) {
						return {
							WebkitBoxFlex: e,
							MozBoxFlex: e,
							WebkitFlex: e,
							msFlex: e,
							flex: e,
						};
					},
					flexBasis: function(e) {
						return { WebkitFlexBasis: e, flexBasis: e };
					},
					justifyContent: function(e) {
						return { WebkitJustifyContent: e, justifyContent: e };
					},
					transition: function(e) {
						return {
							msTransition: e,
							MozTransition: e,
							OTransition: e,
							WebkitTransition: e,
							transition: e,
						};
					},
					transform: function(e) {
						return {
							msTransform: e,
							MozTransform: e,
							OTransform: e,
							WebkitTransform: e,
							transform: e,
						};
					},
					absolute: function(e) {
						var t = e && e.split(' ');
						return {
							position: 'absolute',
							top: t && t[0],
							right: t && t[1],
							bottom: t && t[2],
							left: t && t[3],
						};
					},
					extend: function(e, t) {
						var n = t[e];
						return n || { extend: e };
					},
				},
				u = (t.autoprefix = function(e) {
					var t = {};
					return (
						(0, a.default)(e, function(e, n) {
							var r = {};
							(0, a.default)(e, function(e, t) {
								var n = i[t];
								n ? (r = l({}, r, n(e))) : (r[t] = e);
							}),
								(t[n] = r);
						}),
						t
					);
				});
			t.default = u;
		},
		753: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.hover = void 0);
			var r,
				o =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				a = n(0),
				l = (r = a) && r.__esModule ? r : { default: r };
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function u(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
			}
			function c(e, t) {
				if ('function' !== typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t,
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t));
			}
			var s = (t.hover = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: 'span';
				return (function(n) {
					function r() {
						var n, a, c;
						i(this, r);
						for (var s = arguments.length, d = Array(s), f = 0; f < s; f++)
							d[f] = arguments[f];
						return (
							(a = c = u(
								this,
								(n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
									n,
									[this].concat(d),
								),
							)),
							(c.state = { hover: !1 }),
							(c.handleMouseOver = function() {
								return c.setState({ hover: !0 });
							}),
							(c.handleMouseOut = function() {
								return c.setState({ hover: !1 });
							}),
							(c.render = function() {
								return l.default.createElement(
									t,
									{
										onMouseOver: c.handleMouseOver,
										onMouseOut: c.handleMouseOut,
									},
									l.default.createElement(e, o({}, c.props, c.state)),
								);
							}),
							u(c, a)
						);
					}
					return c(r, n), r;
				})(l.default.Component);
			});
			t.default = s;
		},
		754: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.active = void 0);
			var r,
				o =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				a = n(0),
				l = (r = a) && r.__esModule ? r : { default: r };
			function i(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function u(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
			}
			function c(e, t) {
				if ('function' !== typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t,
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t));
			}
			var s = (t.active = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: 'span';
				return (function(n) {
					function r() {
						var n, a, c;
						i(this, r);
						for (var s = arguments.length, d = Array(s), f = 0; f < s; f++)
							d[f] = arguments[f];
						return (
							(a = c = u(
								this,
								(n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
									n,
									[this].concat(d),
								),
							)),
							(c.state = { active: !1 }),
							(c.handleMouseDown = function() {
								return c.setState({ active: !0 });
							}),
							(c.handleMouseUp = function() {
								return c.setState({ active: !1 });
							}),
							(c.render = function() {
								return l.default.createElement(
									t,
									{
										onMouseDown: c.handleMouseDown,
										onMouseUp: c.handleMouseUp,
									},
									l.default.createElement(e, o({}, c.props, c.state)),
								);
							}),
							u(c, a)
						);
					}
					return c(r, n), r;
				})(l.default.Component);
			});
			t.default = s;
		},
		755: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			t.default = function(e, t) {
				var n = {},
					r = function(e) {
						var t =
							!(arguments.length > 1 && void 0 !== arguments[1]) ||
							arguments[1];
						n[e] = t;
					};
				return (
					0 === e && r('first-child'),
					e === t - 1 && r('last-child'),
					(0 === e || e % 2 === 0) && r('even'),
					1 === Math.abs(e % 2) && r('odd'),
					r('nth-child', e),
					n
				);
			};
		},
		756: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.Alpha = void 0);
			var r =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				o = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				a = n(0),
				l = s(a),
				i = s(n(395)),
				u = (function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return (t.default = e), t;
				})(n(757)),
				c = s(n(623));
			function s(e) {
				return e && e.__esModule ? e : { default: e };
			}
			function d(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function f(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
			}
			var p = (t.Alpha = (function(e) {
				function t() {
					var e, n, r;
					d(this, t);
					for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
						a[l] = arguments[l];
					return (
						(n = r = f(
							this,
							(e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
								e,
								[this].concat(a),
							),
						)),
						(r.handleChange = function(e) {
							var t = u.calculateChange(
								e,
								r.props.hsl,
								r.props.direction,
								r.props.a,
								r.container,
							);
							t &&
								'function' === typeof r.props.onChange &&
								r.props.onChange(t, e);
						}),
						(r.handleMouseDown = function(e) {
							r.handleChange(e),
								window.addEventListener('mousemove', r.handleChange),
								window.addEventListener('mouseup', r.handleMouseUp);
						}),
						(r.handleMouseUp = function() {
							r.unbindEventListeners();
						}),
						(r.unbindEventListeners = function() {
							window.removeEventListener('mousemove', r.handleChange),
								window.removeEventListener('mouseup', r.handleMouseUp);
						}),
						f(r, n)
					);
				}
				return (
					(function(e, t) {
						if ('function' !== typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function, not ' +
									typeof t,
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							t &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(e, t)
									: (e.__proto__ = t));
					})(t, e),
					o(t, [
						{
							key: 'componentWillUnmount',
							value: function() {
								this.unbindEventListeners();
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this,
									t = this.props.rgb,
									n = (0, i.default)(
										{
											default: {
												alpha: {
													absolute: '0px 0px 0px 0px',
													borderRadius: this.props.radius,
												},
												checkboard: {
													absolute: '0px 0px 0px 0px',
													overflow: 'hidden',
													borderRadius: this.props.radius,
												},
												gradient: {
													absolute: '0px 0px 0px 0px',
													background:
														'linear-gradient(to right, rgba(' +
														t.r +
														',' +
														t.g +
														',' +
														t.b +
														', 0) 0%,\n           rgba(' +
														t.r +
														',' +
														t.g +
														',' +
														t.b +
														', 1) 100%)',
													boxShadow: this.props.shadow,
													borderRadius: this.props.radius,
												},
												container: {
													position: 'relative',
													height: '100%',
													margin: '0 3px',
												},
												pointer: {
													position: 'absolute',
													left: 100 * t.a + '%',
												},
												slider: {
													width: '4px',
													borderRadius: '1px',
													height: '8px',
													boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
													background: '#fff',
													marginTop: '1px',
													transform: 'translateX(-2px)',
												},
											},
											vertical: {
												gradient: {
													background:
														'linear-gradient(to bottom, rgba(' +
														t.r +
														',' +
														t.g +
														',' +
														t.b +
														', 0) 0%,\n           rgba(' +
														t.r +
														',' +
														t.g +
														',' +
														t.b +
														', 1) 100%)',
												},
												pointer: { left: 0, top: 100 * t.a + '%' },
											},
											overwrite: r({}, this.props.style),
										},
										{
											vertical: 'vertical' === this.props.direction,
											overwrite: !0,
										},
									);
								return l.default.createElement(
									'div',
									{ style: n.alpha },
									l.default.createElement(
										'div',
										{ style: n.checkboard },
										l.default.createElement(c.default, {
											renderers: this.props.renderers,
										}),
									),
									l.default.createElement('div', { style: n.gradient }),
									l.default.createElement(
										'div',
										{
											style: n.container,
											ref: function(t) {
												return (e.container = t);
											},
											onMouseDown: this.handleMouseDown,
											onTouchMove: this.handleChange,
											onTouchStart: this.handleChange,
										},
										l.default.createElement(
											'div',
											{ style: n.pointer },
											this.props.pointer
												? l.default.createElement(
														this.props.pointer,
														this.props,
												  )
												: l.default.createElement('div', { style: n.slider }),
										),
									),
								);
							},
						},
					]),
					t
				);
			})(a.PureComponent || a.Component));
			t.default = p;
		},
		757: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			t.calculateChange = function(e, t, n, r, o) {
				var a = o.clientWidth,
					l = o.clientHeight,
					i = 'number' === typeof e.pageX ? e.pageX : e.touches[0].pageX,
					u = 'number' === typeof e.pageY ? e.pageY : e.touches[0].pageY,
					c = i - (o.getBoundingClientRect().left + window.pageXOffset),
					s = u - (o.getBoundingClientRect().top + window.pageYOffset);
				if ('vertical' === n) {
					var d = void 0;
					if (
						((d = s < 0 ? 0 : s > l ? 1 : Math.round((100 * s) / l) / 100),
						t.a !== d)
					)
						return { h: t.h, s: t.s, l: t.l, a: d, source: 'rgb' };
				} else {
					var f = void 0;
					if (
						r !== (f = c < 0 ? 0 : c > a ? 1 : Math.round((100 * c) / a) / 100)
					)
						return { h: t.h, s: t.s, l: t.l, a: f, source: 'rgb' };
				}
				return null;
			};
		},
		758: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			var r = {},
				o = (t.render = function(e, t, n, r) {
					if ('undefined' === typeof document && !r) return null;
					var o = r ? new r() : document.createElement('canvas');
					(o.width = 2 * n), (o.height = 2 * n);
					var a = o.getContext('2d');
					return a
						? ((a.fillStyle = e),
						  a.fillRect(0, 0, o.width, o.height),
						  (a.fillStyle = t),
						  a.fillRect(0, 0, n, n),
						  a.translate(n, n),
						  a.fillRect(0, 0, n, n),
						  o.toDataURL())
						: null;
				});
			t.get = function(e, t, n, a) {
				var l = e + '-' + t + '-' + n + (a ? '-server' : '');
				if (r[l]) return r[l];
				var i = o(e, t, n, a);
				return (r[l] = i), i;
			};
		},
		759: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.EditableInput = void 0);
			var r = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				o = n(0),
				a = i(o),
				l = i(n(395));
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = [38, 40],
				c = (t.EditableInput = (function(e) {
					function t(e) {
						!(function(e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						})(this, t);
						var n = (function(e, t) {
							if (!e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called",
								);
							return !t || ('object' !== typeof t && 'function' !== typeof t)
								? e
								: t;
						})(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
						return (
							(n.handleBlur = function() {
								n.state.blurValue &&
									n.setState({ value: n.state.blurValue, blurValue: null });
							}),
							(n.handleChange = function(e) {
								n.setUpdatedValue(e.target.value, e);
							}),
							(n.handleKeyDown = function(e) {
								var t,
									r = (function(e) {
										return Number(String(e).replace(/%/g, ''));
									})(e.target.value);
								if (!isNaN(r) && ((t = e.keyCode), u.indexOf(t) > -1)) {
									var o = n.getArrowOffset(),
										a = 38 === e.keyCode ? r + o : r - o;
									n.setUpdatedValue(a, e);
								}
							}),
							(n.handleDrag = function(e) {
								if (n.props.dragLabel) {
									var t = Math.round(n.props.value + e.movementX);
									t >= 0 &&
										t <= n.props.dragMax &&
										n.props.onChange &&
										n.props.onChange(n.getValueObjectWithLabel(t), e);
								}
							}),
							(n.handleMouseDown = function(e) {
								n.props.dragLabel &&
									(e.preventDefault(),
									n.handleDrag(e),
									window.addEventListener('mousemove', n.handleDrag),
									window.addEventListener('mouseup', n.handleMouseUp));
							}),
							(n.handleMouseUp = function() {
								n.unbindEventListeners();
							}),
							(n.unbindEventListeners = function() {
								window.removeEventListener('mousemove', n.handleDrag),
									window.removeEventListener('mouseup', n.handleMouseUp);
							}),
							(n.state = {
								value: String(e.value).toUpperCase(),
								blurValue: String(e.value).toUpperCase(),
							}),
							n
						);
					}
					return (
						(function(e, t) {
							if ('function' !== typeof t && null !== t)
								throw new TypeError(
									'Super expression must either be null or a function, not ' +
										typeof t,
								);
							(e.prototype = Object.create(t && t.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0,
								},
							})),
								t &&
									(Object.setPrototypeOf
										? Object.setPrototypeOf(e, t)
										: (e.__proto__ = t));
						})(t, e),
						r(t, [
							{
								key: 'componentDidUpdate',
								value: function(e, t) {
									this.props.value === this.state.value ||
										(e.value === this.props.value &&
											t.value === this.state.value) ||
										(this.input === document.activeElement
											? this.setState({
													blurValue: String(this.props.value).toUpperCase(),
											  })
											: this.setState({
													value: String(this.props.value).toUpperCase(),
													blurValue:
														!this.state.blurValue &&
														String(this.props.value).toUpperCase(),
											  }));
								},
							},
							{
								key: 'componentWillUnmount',
								value: function() {
									this.unbindEventListeners();
								},
							},
							{
								key: 'getValueObjectWithLabel',
								value: function(e) {
									return (function(e, t, n) {
										return (
											t in e
												? Object.defineProperty(e, t, {
														value: n,
														enumerable: !0,
														configurable: !0,
														writable: !0,
												  })
												: (e[t] = n),
											e
										);
									})({}, this.props.label, e);
								},
							},
							{
								key: 'getArrowOffset',
								value: function() {
									return this.props.arrowOffset || 1;
								},
							},
							{
								key: 'setUpdatedValue',
								value: function(e, t) {
									var n = this.props.label
										? this.getValueObjectWithLabel(e)
										: e;
									this.props.onChange && this.props.onChange(n, t);
									var r,
										o = (function(e) {
											return String(e).indexOf('%') > -1;
										})(t.target.value);
									this.setState({ value: o ? ((r = e), r + '%') : e });
								},
							},
							{
								key: 'render',
								value: function() {
									var e = this,
										t = (0, l.default)(
											{
												default: { wrap: { position: 'relative' } },
												'user-override': {
													wrap:
														this.props.style && this.props.style.wrap
															? this.props.style.wrap
															: {},
													input:
														this.props.style && this.props.style.input
															? this.props.style.input
															: {},
													label:
														this.props.style && this.props.style.label
															? this.props.style.label
															: {},
												},
												'dragLabel-true': { label: { cursor: 'ew-resize' } },
											},
											{ 'user-override': !0 },
											this.props,
										);
									return a.default.createElement(
										'div',
										{ style: t.wrap },
										a.default.createElement('input', {
											style: t.input,
											ref: function(t) {
												return (e.input = t);
											},
											value: this.state.value,
											onKeyDown: this.handleKeyDown,
											onChange: this.handleChange,
											onBlur: this.handleBlur,
											placeholder: this.props.placeholder,
											spellCheck: 'false',
										}),
										this.props.label && !this.props.hideLabel
											? a.default.createElement(
													'span',
													{ style: t.label, onMouseDown: this.handleMouseDown },
													this.props.label,
											  )
											: null,
									);
								},
							},
						]),
						t
					);
				})(o.PureComponent || o.Component));
			t.default = c;
		},
		760: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.Hue = void 0);
			var r = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				o = n(0),
				a = u(o),
				l = u(n(395)),
				i = (function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return (t.default = e), t;
				})(n(761));
			function u(e) {
				return e && e.__esModule ? e : { default: e };
			}
			function c(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function s(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
			}
			var d = (t.Hue = (function(e) {
				function t() {
					var e, n, r;
					c(this, t);
					for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
						a[l] = arguments[l];
					return (
						(n = r = s(
							this,
							(e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
								e,
								[this].concat(a),
							),
						)),
						(r.handleChange = function(e) {
							var t = i.calculateChange(
								e,
								r.props.direction,
								r.props.hsl,
								r.container,
							);
							t &&
								'function' === typeof r.props.onChange &&
								r.props.onChange(t, e);
						}),
						(r.handleMouseDown = function(e) {
							r.handleChange(e),
								window.addEventListener('mousemove', r.handleChange),
								window.addEventListener('mouseup', r.handleMouseUp);
						}),
						(r.handleMouseUp = function() {
							r.unbindEventListeners();
						}),
						s(r, n)
					);
				}
				return (
					(function(e, t) {
						if ('function' !== typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function, not ' +
									typeof t,
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							t &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(e, t)
									: (e.__proto__ = t));
					})(t, e),
					r(t, [
						{
							key: 'componentWillUnmount',
							value: function() {
								this.unbindEventListeners();
							},
						},
						{
							key: 'unbindEventListeners',
							value: function() {
								window.removeEventListener('mousemove', this.handleChange),
									window.removeEventListener('mouseup', this.handleMouseUp);
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this,
									t = this.props.direction,
									n = void 0 === t ? 'horizontal' : t,
									r = (0, l.default)(
										{
											default: {
												hue: {
													absolute: '0px 0px 0px 0px',
													borderRadius: this.props.radius,
													boxShadow: this.props.shadow,
												},
												container: {
													padding: '0 2px',
													position: 'relative',
													height: '100%',
													borderRadius: this.props.radius,
												},
												pointer: {
													position: 'absolute',
													left: (100 * this.props.hsl.h) / 360 + '%',
												},
												slider: {
													marginTop: '1px',
													width: '4px',
													borderRadius: '1px',
													height: '8px',
													boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
													background: '#fff',
													transform: 'translateX(-2px)',
												},
											},
											vertical: {
												pointer: {
													left: '0px',
													top: (-100 * this.props.hsl.h) / 360 + 100 + '%',
												},
											},
										},
										{ vertical: 'vertical' === n },
									);
								return a.default.createElement(
									'div',
									{ style: r.hue },
									a.default.createElement(
										'div',
										{
											className: 'hue-' + n,
											style: r.container,
											ref: function(t) {
												return (e.container = t);
											},
											onMouseDown: this.handleMouseDown,
											onTouchMove: this.handleChange,
											onTouchStart: this.handleChange,
										},
										a.default.createElement(
											'style',
											null,
											'\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          ',
										),
										a.default.createElement(
											'div',
											{ style: r.pointer },
											this.props.pointer
												? a.default.createElement(
														this.props.pointer,
														this.props,
												  )
												: a.default.createElement('div', { style: r.slider }),
										),
									),
								);
							},
						},
					]),
					t
				);
			})(o.PureComponent || o.Component));
			t.default = d;
		},
		761: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			t.calculateChange = function(e, t, n, r) {
				var o = r.clientWidth,
					a = r.clientHeight,
					l = 'number' === typeof e.pageX ? e.pageX : e.touches[0].pageX,
					i = 'number' === typeof e.pageY ? e.pageY : e.touches[0].pageY,
					u = l - (r.getBoundingClientRect().left + window.pageXOffset),
					c = i - (r.getBoundingClientRect().top + window.pageYOffset);
				if ('vertical' === t) {
					var s = void 0;
					if (c < 0) s = 359;
					else if (c > a) s = 0;
					else {
						s = (360 * ((-100 * c) / a + 100)) / 100;
					}
					if (n.h !== s) return { h: s, s: n.s, l: n.l, a: n.a, source: 'rgb' };
				} else {
					var d = void 0;
					if (u < 0) d = 0;
					else if (u > o) d = 359;
					else {
						d = (360 * ((100 * u) / o)) / 100;
					}
					if (n.h !== d) return { h: d, s: n.s, l: n.l, a: n.a, source: 'rgb' };
				}
				return null;
			};
		},
		762: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Raised = void 0);
			var r = i(n(0)),
				o = i(n(3)),
				a = i(n(395)),
				l = i(n(430));
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.Raised = function(e) {
				var t = e.zDepth,
					n = e.radius,
					o = e.background,
					i = e.children,
					u = e.styles,
					c = void 0 === u ? {} : u,
					s = (0, a.default)(
						(0, l.default)(
							{
								default: {
									wrap: { position: 'relative', display: 'inline-block' },
									content: { position: 'relative' },
									bg: {
										absolute: '0px 0px 0px 0px',
										boxShadow: '0 ' + t + 'px ' + 4 * t + 'px rgba(0,0,0,.24)',
										borderRadius: n,
										background: o,
									},
								},
								'zDepth-0': { bg: { boxShadow: 'none' } },
								'zDepth-1': {
									bg: {
										boxShadow:
											'0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)',
									},
								},
								'zDepth-2': {
									bg: {
										boxShadow:
											'0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)',
									},
								},
								'zDepth-3': {
									bg: {
										boxShadow:
											'0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)',
									},
								},
								'zDepth-4': {
									bg: {
										boxShadow:
											'0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)',
									},
								},
								'zDepth-5': {
									bg: {
										boxShadow:
											'0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)',
									},
								},
								square: { bg: { borderRadius: '0' } },
								circle: { bg: { borderRadius: '50%' } },
							},
							c,
						),
						{ 'zDepth-1': 1 === t },
					);
				return r.default.createElement(
					'div',
					{ style: s.wrap },
					r.default.createElement('div', { style: s.bg }),
					r.default.createElement('div', { style: s.content }, i),
				);
			});
			(u.propTypes = {
				background: o.default.string,
				zDepth: o.default.oneOf([0, 1, 2, 3, 4, 5]),
				radius: o.default.number,
				styles: o.default.object,
			}),
				(u.defaultProps = {
					background: '#fff',
					zDepth: 1,
					radius: 2,
					styles: {},
				}),
				(t.default = u);
		},
		763: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Saturation = void 0);
			var r = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				o = n(0),
				a = c(o),
				l = c(n(395)),
				i = c(n(764)),
				u = (function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return (t.default = e), t;
				})(n(765));
			function c(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var s = (t.Saturation = (function(e) {
				function t(e) {
					!(function(e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, t);
					var n = (function(e, t) {
						if (!e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called",
							);
						return !t || ('object' !== typeof t && 'function' !== typeof t)
							? e
							: t;
					})(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return (
						(n.handleChange = function(e) {
							'function' === typeof n.props.onChange &&
								n.throttle(
									n.props.onChange,
									u.calculateChange(e, n.props.hsl, n.container),
									e,
								);
						}),
						(n.handleMouseDown = function(e) {
							n.handleChange(e),
								window.addEventListener('mousemove', n.handleChange),
								window.addEventListener('mouseup', n.handleMouseUp);
						}),
						(n.handleMouseUp = function() {
							n.unbindEventListeners();
						}),
						(n.throttle = (0, i.default)(function(e, t, n) {
							e(t, n);
						}, 50)),
						n
					);
				}
				return (
					(function(e, t) {
						if ('function' !== typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function, not ' +
									typeof t,
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							t &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(e, t)
									: (e.__proto__ = t));
					})(t, e),
					r(t, [
						{
							key: 'componentWillUnmount',
							value: function() {
								this.throttle.cancel(), this.unbindEventListeners();
							},
						},
						{
							key: 'unbindEventListeners',
							value: function() {
								window.removeEventListener('mousemove', this.handleChange),
									window.removeEventListener('mouseup', this.handleMouseUp);
							},
						},
						{
							key: 'render',
							value: function() {
								var e = this,
									t = this.props.style || {},
									n = t.color,
									r = t.white,
									o = t.black,
									i = t.pointer,
									u = t.circle,
									c = (0, l.default)(
										{
											default: {
												color: {
													absolute: '0px 0px 0px 0px',
													background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
													borderRadius: this.props.radius,
												},
												white: {
													absolute: '0px 0px 0px 0px',
													borderRadius: this.props.radius,
												},
												black: {
													absolute: '0px 0px 0px 0px',
													boxShadow: this.props.shadow,
													borderRadius: this.props.radius,
												},
												pointer: {
													position: 'absolute',
													top: -100 * this.props.hsv.v + 100 + '%',
													left: 100 * this.props.hsv.s + '%',
													cursor: 'default',
												},
												circle: {
													width: '4px',
													height: '4px',
													boxShadow:
														'0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
													borderRadius: '50%',
													cursor: 'hand',
													transform: 'translate(-2px, -2px)',
												},
											},
											custom: {
												color: n,
												white: r,
												black: o,
												pointer: i,
												circle: u,
											},
										},
										{ custom: !!this.props.style },
									);
								return a.default.createElement(
									'div',
									{
										style: c.color,
										ref: function(t) {
											return (e.container = t);
										},
										onMouseDown: this.handleMouseDown,
										onTouchMove: this.handleChange,
										onTouchStart: this.handleChange,
									},
									a.default.createElement(
										'style',
										null,
										'\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        ',
									),
									a.default.createElement(
										'div',
										{ style: c.white, className: 'saturation-white' },
										a.default.createElement('div', {
											style: c.black,
											className: 'saturation-black',
										}),
										a.default.createElement(
											'div',
											{ style: c.pointer },
											this.props.pointer
												? a.default.createElement(
														this.props.pointer,
														this.props,
												  )
												: a.default.createElement('div', { style: c.circle }),
										),
									),
								);
							},
						},
					]),
					t
				);
			})(o.PureComponent || o.Component));
			t.default = s;
		},
		764: function(e, t, n) {
			var r = n(145),
				o = n(131);
			e.exports = function(e, t, n) {
				var a = !0,
					l = !0;
				if ('function' != typeof e) throw new TypeError('Expected a function');
				return (
					o(n) &&
						((a = 'leading' in n ? !!n.leading : a),
						(l = 'trailing' in n ? !!n.trailing : l)),
					r(e, t, { leading: a, maxWait: t, trailing: l })
				);
			};
		},
		765: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			t.calculateChange = function(e, t, n) {
				var r = n.getBoundingClientRect(),
					o = r.width,
					a = r.height,
					l = 'number' === typeof e.pageX ? e.pageX : e.touches[0].pageX,
					i = 'number' === typeof e.pageY ? e.pageY : e.touches[0].pageY,
					u = l - (n.getBoundingClientRect().left + window.pageXOffset),
					c = i - (n.getBoundingClientRect().top + window.pageYOffset);
				u < 0 ? (u = 0) : u > o && (u = o), c < 0 ? (c = 0) : c > a && (c = a);
				var s = u / o,
					d = 1 - c / a;
				return { h: t.h, s: s, v: d, a: t.a, source: 'rgb' };
			};
		},
		766: function(e, t, n) {
			e.exports = n(767);
		},
		767: function(e, t, n) {
			var r = n(653),
				o = n(652),
				a = n(651),
				l = n(394);
			e.exports = function(e, t) {
				return (l(e) ? r : o)(e, a(t));
			};
		},
		768: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Swatch = void 0);
			var r =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				o = u(n(0)),
				a = u(n(395)),
				l = n(769),
				i = u(n(623));
			function u(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var c = (t.Swatch = function(e) {
				var t = e.color,
					n = e.style,
					l = e.onClick,
					u = void 0 === l ? function() {} : l,
					c = e.onHover,
					s = e.title,
					d = void 0 === s ? t : s,
					f = e.children,
					p = e.focus,
					h = e.focusStyle,
					b = void 0 === h ? {} : h,
					g = 'transparent' === t,
					v = (0, a.default)({
						default: {
							swatch: r(
								{
									background: t,
									height: '100%',
									width: '100%',
									cursor: 'pointer',
									position: 'relative',
									outline: 'none',
								},
								n,
								p ? b : {},
							),
						},
					}),
					x = {};
				return (
					c &&
						(x.onMouseOver = function(e) {
							return c(t, e);
						}),
					o.default.createElement(
						'div',
						r(
							{
								style: v.swatch,
								onClick: function(e) {
									return u(t, e);
								},
								title: d,
								tabIndex: 0,
								onKeyDown: function(e) {
									return 13 === e.keyCode && u(t, e);
								},
							},
							x,
						),
						f,
						g &&
							o.default.createElement(i.default, {
								borderRadius: v.swatch.borderRadius,
								boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
							}),
					)
				);
			});
			t.default = (0, l.handleFocus)(c);
		},
		769: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.handleFocus = void 0);
			var r,
				o =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				a = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				l = n(0),
				i = (r = l) && r.__esModule ? r : { default: r };
			function u(e, t) {
				if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function');
			}
			function c(e, t) {
				if (!e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
			}
			function s(e, t) {
				if ('function' !== typeof t && null !== t)
					throw new TypeError(
						'Super expression must either be null or a function, not ' +
							typeof t,
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
					t &&
						(Object.setPrototypeOf
							? Object.setPrototypeOf(e, t)
							: (e.__proto__ = t));
			}
			t.handleFocus = function(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: 'span';
				return (function(n) {
					function r() {
						var e, t, n;
						u(this, r);
						for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
							a[l] = arguments[l];
						return (
							(t = n = c(
								this,
								(e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
									e,
									[this].concat(a),
								),
							)),
							(n.state = { focus: !1 }),
							(n.handleFocus = function() {
								return n.setState({ focus: !0 });
							}),
							(n.handleBlur = function() {
								return n.setState({ focus: !1 });
							}),
							c(n, t)
						);
					}
					return (
						s(r, n),
						a(r, [
							{
								key: 'render',
								value: function() {
									return i.default.createElement(
										t,
										{ onFocus: this.handleFocus, onBlur: this.handleBlur },
										i.default.createElement(e, o({}, this.props, this.state)),
									);
								},
							},
						]),
						r
					);
				})(i.default.Component);
			};
		},
		770: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.AlphaPointer = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.AlphaPointer = function(e) {
				var t = e.direction,
					n = (0, o.default)(
						{
							default: {
								picker: {
									width: '18px',
									height: '18px',
									borderRadius: '50%',
									transform: 'translate(-9px, -1px)',
									backgroundColor: 'rgb(248, 248, 248)',
									boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
								},
							},
							vertical: { picker: { transform: 'translate(-3px, -9px)' } },
						},
						{ vertical: 'vertical' === t },
					);
				return r.default.createElement('div', { style: n.picker });
			});
			t.default = l;
		},
		771: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }), (t.Block = void 0);
			var r = s(n(0)),
				o = s(n(3)),
				a = s(n(395)),
				l = s(n(430)),
				i = s(n(450)),
				u = n(399),
				c = s(n(772));
			function s(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var d = (t.Block = function(e) {
				var t = e.onChange,
					n = e.onSwatchHover,
					o = e.hex,
					s = e.colors,
					d = e.width,
					f = e.triangle,
					p = e.styles,
					h = void 0 === p ? {} : p,
					b = e.className,
					g = void 0 === b ? '' : b,
					v = 'transparent' === o,
					x = function(e, n) {
						i.default.isValidHex(e) && t({ hex: e, source: 'hex' }, n);
					},
					y = (0, a.default)(
						(0, l.default)(
							{
								default: {
									card: {
										width: d,
										background: '#fff',
										boxShadow: '0 1px rgba(0,0,0,.1)',
										borderRadius: '6px',
										position: 'relative',
									},
									head: {
										height: '110px',
										background: o,
										borderRadius: '6px 6px 0 0',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										position: 'relative',
									},
									body: { padding: '10px' },
									label: {
										fontSize: '18px',
										color: i.default.getContrastingColor(o),
										position: 'relative',
									},
									triangle: {
										width: '0px',
										height: '0px',
										borderStyle: 'solid',
										borderWidth: '0 10px 10px 10px',
										borderColor:
											'transparent transparent ' + o + ' transparent',
										position: 'absolute',
										top: '-10px',
										left: '50%',
										marginLeft: '-10px',
									},
									input: {
										width: '100%',
										fontSize: '12px',
										color: '#666',
										border: '0px',
										outline: 'none',
										height: '22px',
										boxShadow: 'inset 0 0 0 1px #ddd',
										borderRadius: '4px',
										padding: '0 7px',
										boxSizing: 'border-box',
									},
								},
								'hide-triangle': { triangle: { display: 'none' } },
							},
							h,
						),
						{ 'hide-triangle': 'hide' === f },
					);
				return r.default.createElement(
					'div',
					{ style: y.card, className: 'block-picker ' + g },
					r.default.createElement('div', { style: y.triangle }),
					r.default.createElement(
						'div',
						{ style: y.head },
						v &&
							r.default.createElement(u.Checkboard, {
								borderRadius: '6px 6px 0 0',
							}),
						r.default.createElement('div', { style: y.label }, o),
					),
					r.default.createElement(
						'div',
						{ style: y.body },
						r.default.createElement(c.default, {
							colors: s,
							onClick: x,
							onSwatchHover: n,
						}),
						r.default.createElement(u.EditableInput, {
							style: { input: y.input },
							value: o,
							onChange: x,
						}),
					),
				);
			});
			(d.propTypes = {
				width: o.default.oneOfType([o.default.string, o.default.number]),
				colors: o.default.arrayOf(o.default.string),
				triangle: o.default.oneOf(['top', 'hide']),
				styles: o.default.object,
			}),
				(d.defaultProps = {
					width: 170,
					colors: [
						'#D9E3F0',
						'#F47373',
						'#697689',
						'#37D67A',
						'#2CCCE4',
						'#555555',
						'#dce775',
						'#ff8a65',
						'#ba68c8',
					],
					triangle: 'top',
					styles: {},
				}),
				(t.default = (0, u.ColorWrap)(d));
		},
		772: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.BlockSwatches = void 0);
			var r = i(n(0)),
				o = i(n(395)),
				a = i(n(511)),
				l = n(399);
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.BlockSwatches = function(e) {
				var t = e.colors,
					n = e.onClick,
					i = e.onSwatchHover,
					u = (0, o.default)({
						default: {
							swatches: { marginRight: '-10px' },
							swatch: {
								width: '22px',
								height: '22px',
								float: 'left',
								marginRight: '10px',
								marginBottom: '10px',
								borderRadius: '4px',
							},
							clear: { clear: 'both' },
						},
					});
				return r.default.createElement(
					'div',
					{ style: u.swatches },
					(0, a.default)(t, function(e) {
						return r.default.createElement(l.Swatch, {
							key: e,
							color: e,
							style: u.swatch,
							onClick: n,
							onHover: i,
							focusStyle: { boxShadow: '0 0 4px ' + e },
						});
					}),
					r.default.createElement('div', { style: u.clear }),
				);
			});
			t.default = u;
		},
		773: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Circle = void 0);
			var r = d(n(0)),
				o = d(n(3)),
				a = d(n(395)),
				l = d(n(511)),
				i = d(n(430)),
				u = (function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return (t.default = e), t;
				})(n(672)),
				c = n(399),
				s = d(n(774));
			function d(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var f = (t.Circle = function(e) {
				var t = e.width,
					n = e.onChange,
					o = e.onSwatchHover,
					u = e.colors,
					c = e.hex,
					d = e.circleSize,
					f = e.styles,
					p = void 0 === f ? {} : f,
					h = e.circleSpacing,
					b = e.className,
					g = void 0 === b ? '' : b,
					v = (0, a.default)(
						(0, i.default)(
							{
								default: {
									card: {
										width: t,
										display: 'flex',
										flexWrap: 'wrap',
										marginRight: -h,
										marginBottom: -h,
									},
								},
							},
							p,
						),
					),
					x = function(e, t) {
						return n({ hex: e, source: 'hex' }, t);
					};
				return r.default.createElement(
					'div',
					{ style: v.card, className: 'circle-picker ' + g },
					(0, l.default)(u, function(e) {
						return r.default.createElement(s.default, {
							key: e,
							color: e,
							onClick: x,
							onSwatchHover: o,
							active: c === e.toLowerCase(),
							circleSize: d,
							circleSpacing: h,
						});
					}),
				);
			});
			(f.propTypes = {
				width: o.default.oneOfType([o.default.string, o.default.number]),
				circleSize: o.default.number,
				circleSpacing: o.default.number,
				styles: o.default.object,
			}),
				(f.defaultProps = {
					width: 252,
					circleSize: 28,
					circleSpacing: 14,
					colors: [
						u.red[500],
						u.pink[500],
						u.purple[500],
						u.deepPurple[500],
						u.indigo[500],
						u.blue[500],
						u.lightBlue[500],
						u.cyan[500],
						u.teal[500],
						u.green[500],
						u.lightGreen[500],
						u.lime[500],
						u.yellow[500],
						u.amber[500],
						u.orange[500],
						u.deepOrange[500],
						u.brown[500],
						u.blueGrey[500],
					],
					styles: {},
				}),
				(t.default = (0, c.ColorWrap)(f));
		},
		774: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.CircleSwatch = void 0);
			var r = i(n(0)),
				o = n(395),
				a = i(o),
				l = n(399);
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.CircleSwatch = function(e) {
				var t = e.color,
					n = e.onClick,
					o = e.onSwatchHover,
					i = e.hover,
					u = e.active,
					c = e.circleSize,
					s = e.circleSpacing,
					d = (0, a.default)(
						{
							default: {
								swatch: {
									width: c,
									height: c,
									marginRight: s,
									marginBottom: s,
									transform: 'scale(1)',
									transition: '100ms transform ease',
								},
								Swatch: {
									borderRadius: '50%',
									background: 'transparent',
									boxShadow: 'inset 0 0 0 ' + c / 2 + 'px ' + t,
									transition: '100ms box-shadow ease',
								},
							},
							hover: { swatch: { transform: 'scale(1.2)' } },
							active: { Swatch: { boxShadow: 'inset 0 0 0 3px ' + t } },
						},
						{ hover: i, active: u },
					);
				return r.default.createElement(
					'div',
					{ style: d.swatch },
					r.default.createElement(l.Swatch, {
						style: d.Swatch,
						color: t,
						onClick: n,
						onHover: o,
						focusStyle: { boxShadow: d.Swatch.boxShadow + ', 0 0 5px ' + t },
					}),
				);
			});
			(u.defaultProps = { circleSize: 28, circleSpacing: 14 }),
				(t.default = (0, o.handleHover)(u));
		},
		775: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Chrome = void 0);
			var r = d(n(0)),
				o = d(n(3)),
				a = d(n(395)),
				l = d(n(430)),
				i = n(399),
				u = d(n(776)),
				c = d(n(778)),
				s = d(n(779));
			function d(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var f = (t.Chrome = function(e) {
				var t = e.width,
					n = e.onChange,
					o = e.disableAlpha,
					d = e.rgb,
					f = e.hsl,
					p = e.hsv,
					h = e.hex,
					b = e.renderers,
					g = e.styles,
					v = void 0 === g ? {} : g,
					x = e.className,
					y = void 0 === x ? '' : x,
					m = e.defaultView,
					w = (0, a.default)(
						(0, l.default)(
							{
								default: {
									picker: {
										width: t,
										background: '#fff',
										borderRadius: '2px',
										boxShadow:
											'0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
										boxSizing: 'initial',
										fontFamily: 'Menlo',
									},
									saturation: {
										width: '100%',
										paddingBottom: '55%',
										position: 'relative',
										borderRadius: '2px 2px 0 0',
										overflow: 'hidden',
									},
									Saturation: { radius: '2px 2px 0 0' },
									body: { padding: '16px 16px 12px' },
									controls: { display: 'flex' },
									color: { width: '32px' },
									swatch: {
										marginTop: '6px',
										width: '16px',
										height: '16px',
										borderRadius: '8px',
										position: 'relative',
										overflow: 'hidden',
									},
									active: {
										absolute: '0px 0px 0px 0px',
										borderRadius: '8px',
										boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
										background:
											'rgba(' +
											d.r +
											', ' +
											d.g +
											', ' +
											d.b +
											', ' +
											d.a +
											')',
										zIndex: '2',
									},
									toggles: { flex: '1' },
									hue: {
										height: '10px',
										position: 'relative',
										marginBottom: '8px',
									},
									Hue: { radius: '2px' },
									alpha: { height: '10px', position: 'relative' },
									Alpha: { radius: '2px' },
								},
								disableAlpha: {
									color: { width: '22px' },
									alpha: { display: 'none' },
									hue: { marginBottom: '0px' },
									swatch: { width: '10px', height: '10px', marginTop: '0px' },
								},
							},
							v,
						),
						{ disableAlpha: o },
					);
				return r.default.createElement(
					'div',
					{ style: w.picker, className: 'chrome-picker ' + y },
					r.default.createElement(
						'div',
						{ style: w.saturation },
						r.default.createElement(i.Saturation, {
							style: w.Saturation,
							hsl: f,
							hsv: p,
							pointer: s.default,
							onChange: n,
						}),
					),
					r.default.createElement(
						'div',
						{ style: w.body },
						r.default.createElement(
							'div',
							{ style: w.controls, className: 'flexbox-fix' },
							r.default.createElement(
								'div',
								{ style: w.color },
								r.default.createElement(
									'div',
									{ style: w.swatch },
									r.default.createElement('div', { style: w.active }),
									r.default.createElement(i.Checkboard, { renderers: b }),
								),
							),
							r.default.createElement(
								'div',
								{ style: w.toggles },
								r.default.createElement(
									'div',
									{ style: w.hue },
									r.default.createElement(i.Hue, {
										style: w.Hue,
										hsl: f,
										pointer: c.default,
										onChange: n,
									}),
								),
								r.default.createElement(
									'div',
									{ style: w.alpha },
									r.default.createElement(i.Alpha, {
										style: w.Alpha,
										rgb: d,
										hsl: f,
										pointer: c.default,
										renderers: b,
										onChange: n,
									}),
								),
							),
						),
						r.default.createElement(u.default, {
							rgb: d,
							hsl: f,
							hex: h,
							view: m,
							onChange: n,
							disableAlpha: o,
						}),
					),
				);
			});
			(f.propTypes = {
				width: o.default.oneOfType([o.default.string, o.default.number]),
				disableAlpha: o.default.bool,
				styles: o.default.object,
				defaultView: o.default.oneOf(['hex', 'rgb', 'hsl']),
			}),
				(f.defaultProps = { width: 225, disableAlpha: !1, styles: {} }),
				(t.default = (0, i.ColorWrap)(f));
		},
		776: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.ChromeFields = void 0);
			var r = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				o = c(n(0)),
				a = c(n(395)),
				l = c(n(450)),
				i = n(399),
				u = c(n(777));
			function c(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var s = (t.ChromeFields = (function(e) {
				function t(e) {
					!(function(e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, t);
					var n = (function(e, t) {
						if (!e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called",
							);
						return !t || ('object' !== typeof t && 'function' !== typeof t)
							? e
							: t;
					})(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return (
						(n.toggleViews = function() {
							'hex' === n.state.view
								? n.setState({ view: 'rgb' })
								: 'rgb' === n.state.view
								? n.setState({ view: 'hsl' })
								: 'hsl' === n.state.view &&
								  (1 === n.props.hsl.a
										? n.setState({ view: 'hex' })
										: n.setState({ view: 'rgb' }));
						}),
						(n.handleChange = function(e, t) {
							e.hex
								? l.default.isValidHex(e.hex) &&
								  n.props.onChange({ hex: e.hex, source: 'hex' }, t)
								: e.r || e.g || e.b
								? n.props.onChange(
										{
											r: e.r || n.props.rgb.r,
											g: e.g || n.props.rgb.g,
											b: e.b || n.props.rgb.b,
											source: 'rgb',
										},
										t,
								  )
								: e.a
								? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
								  n.props.onChange(
										{
											h: n.props.hsl.h,
											s: n.props.hsl.s,
											l: n.props.hsl.l,
											a: Math.round(100 * e.a) / 100,
											source: 'rgb',
										},
										t,
								  ))
								: (e.h || e.s || e.l) &&
								  ('string' === typeof e.s &&
										e.s.includes('%') &&
										(e.s = e.s.replace('%', '')),
								  'string' === typeof e.l &&
										e.l.includes('%') &&
										(e.l = e.l.replace('%', '')),
								  n.props.onChange(
										{
											h: e.h || n.props.hsl.h,
											s: Number((e.s && e.s) || n.props.hsl.s),
											l: Number((e.l && e.l) || n.props.hsl.l),
											source: 'hsl',
										},
										t,
								  ));
						}),
						(n.showHighlight = function(e) {
							e.currentTarget.style.background = '#eee';
						}),
						(n.hideHighlight = function(e) {
							e.currentTarget.style.background = 'transparent';
						}),
						1 !== e.hsl.a && 'hex' === e.view
							? (n.state = { view: 'rgb' })
							: (n.state = { view: e.view }),
						n
					);
				}
				return (
					(function(e, t) {
						if ('function' !== typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function, not ' +
									typeof t,
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							t &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(e, t)
									: (e.__proto__ = t));
					})(t, e),
					r(
						t,
						[
							{
								key: 'render',
								value: function() {
									var e = this,
										t = (0, a.default)(
											{
												default: {
													wrap: { paddingTop: '16px', display: 'flex' },
													fields: {
														flex: '1',
														display: 'flex',
														marginLeft: '-6px',
													},
													field: { paddingLeft: '6px', width: '100%' },
													alpha: { paddingLeft: '6px', width: '100%' },
													toggle: {
														width: '32px',
														textAlign: 'right',
														position: 'relative',
													},
													icon: {
														marginRight: '-4px',
														marginTop: '12px',
														cursor: 'pointer',
														position: 'relative',
													},
													iconHighlight: {
														position: 'absolute',
														width: '24px',
														height: '28px',
														background: '#eee',
														borderRadius: '4px',
														top: '10px',
														left: '12px',
														display: 'none',
													},
													input: {
														fontSize: '11px',
														color: '#333',
														width: '100%',
														borderRadius: '2px',
														border: 'none',
														boxShadow: 'inset 0 0 0 1px #dadada',
														height: '21px',
														textAlign: 'center',
													},
													label: {
														textTransform: 'uppercase',
														fontSize: '11px',
														lineHeight: '11px',
														color: '#969696',
														textAlign: 'center',
														display: 'block',
														marginTop: '12px',
													},
													svg: {
														fill: '#333',
														width: '24px',
														height: '24px',
														border: '1px transparent solid',
														borderRadius: '5px',
													},
												},
												disableAlpha: { alpha: { display: 'none' } },
											},
											this.props,
											this.state,
										),
										n = void 0;
									return (
										'hex' === this.state.view
											? (n = o.default.createElement(
													'div',
													{ style: t.fields, className: 'flexbox-fix' },
													o.default.createElement(
														'div',
														{ style: t.field },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'hex',
															value: this.props.hex,
															onChange: this.handleChange,
														}),
													),
											  ))
											: 'rgb' === this.state.view
											? (n = o.default.createElement(
													'div',
													{ style: t.fields, className: 'flexbox-fix' },
													o.default.createElement(
														'div',
														{ style: t.field },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'r',
															value: this.props.rgb.r,
															onChange: this.handleChange,
														}),
													),
													o.default.createElement(
														'div',
														{ style: t.field },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'g',
															value: this.props.rgb.g,
															onChange: this.handleChange,
														}),
													),
													o.default.createElement(
														'div',
														{ style: t.field },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'b',
															value: this.props.rgb.b,
															onChange: this.handleChange,
														}),
													),
													o.default.createElement(
														'div',
														{ style: t.alpha },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'a',
															value: this.props.rgb.a,
															arrowOffset: 0.01,
															onChange: this.handleChange,
														}),
													),
											  ))
											: 'hsl' === this.state.view &&
											  (n = o.default.createElement(
													'div',
													{ style: t.fields, className: 'flexbox-fix' },
													o.default.createElement(
														'div',
														{ style: t.field },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'h',
															value: Math.round(this.props.hsl.h),
															onChange: this.handleChange,
														}),
													),
													o.default.createElement(
														'div',
														{ style: t.field },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 's',
															value: Math.round(100 * this.props.hsl.s) + '%',
															onChange: this.handleChange,
														}),
													),
													o.default.createElement(
														'div',
														{ style: t.field },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'l',
															value: Math.round(100 * this.props.hsl.l) + '%',
															onChange: this.handleChange,
														}),
													),
													o.default.createElement(
														'div',
														{ style: t.alpha },
														o.default.createElement(i.EditableInput, {
															style: { input: t.input, label: t.label },
															label: 'a',
															value: this.props.hsl.a,
															arrowOffset: 0.01,
															onChange: this.handleChange,
														}),
													),
											  )),
										o.default.createElement(
											'div',
											{ style: t.wrap, className: 'flexbox-fix' },
											n,
											o.default.createElement(
												'div',
												{ style: t.toggle },
												o.default.createElement(
													'div',
													{
														style: t.icon,
														onClick: this.toggleViews,
														ref: function(t) {
															return (e.icon = t);
														},
													},
													o.default.createElement(u.default, {
														style: t.svg,
														onMouseOver: this.showHighlight,
														onMouseEnter: this.showHighlight,
														onMouseOut: this.hideHighlight,
													}),
												),
											),
										)
									);
								},
							},
						],
						[
							{
								key: 'getDerivedStateFromProps',
								value: function(e, t) {
									return 1 !== e.hsl.a && 'hex' === t.view
										? { view: 'rgb' }
										: null;
								},
							},
						],
					),
					t
				);
			})(o.default.Component));
			(s.defaultProps = { view: 'hex' }), (t.default = s);
		},
		777: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			var r,
				o =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				a = n(0),
				l = (r = a) && r.__esModule ? r : { default: r };
			t.default = function(e) {
				var t = e.fill,
					n = void 0 === t ? 'currentColor' : t,
					r = e.width,
					a = void 0 === r ? 24 : r,
					i = e.height,
					u = void 0 === i ? 24 : i,
					c = e.style,
					s = void 0 === c ? {} : c,
					d = (function(e, t) {
						var n = {};
						for (var r in e)
							t.indexOf(r) >= 0 ||
								(Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
						return n;
					})(e, ['fill', 'width', 'height', 'style']);
				return l.default.createElement(
					'svg',
					o(
						{
							viewBox: '0 0 24 24',
							style: o({ fill: n, width: a, height: u }, s),
						},
						d,
					),
					l.default.createElement('path', {
						d:
							'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
					}),
				);
			};
		},
		778: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.ChromePointer = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.ChromePointer = function() {
				var e = (0, o.default)({
					default: {
						picker: {
							width: '12px',
							height: '12px',
							borderRadius: '6px',
							transform: 'translate(-6px, -1px)',
							backgroundColor: 'rgb(248, 248, 248)',
							boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
						},
					},
				});
				return r.default.createElement('div', { style: e.picker });
			});
			t.default = l;
		},
		779: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.ChromePointerCircle = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.ChromePointerCircle = function() {
				var e = (0, o.default)({
					default: {
						picker: {
							width: '12px',
							height: '12px',
							borderRadius: '6px',
							boxShadow: 'inset 0 0 0 1px #fff',
							transform: 'translate(-6px, -6px)',
						},
					},
				});
				return r.default.createElement('div', { style: e.picker });
			});
			t.default = l;
		},
		780: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Compact = void 0);
			var r = f(n(0)),
				o = f(n(3)),
				a = f(n(395)),
				l = f(n(511)),
				i = f(n(430)),
				u = f(n(450)),
				c = n(399),
				s = f(n(781)),
				d = f(n(782));
			function f(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var p = (t.Compact = function(e) {
				var t = e.onChange,
					n = e.onSwatchHover,
					o = e.colors,
					f = e.hex,
					p = e.rgb,
					h = e.styles,
					b = void 0 === h ? {} : h,
					g = e.className,
					v = void 0 === g ? '' : g,
					x = (0, a.default)(
						(0, i.default)(
							{
								default: {
									Compact: { background: '#f6f6f6', radius: '4px' },
									compact: {
										paddingTop: '5px',
										paddingLeft: '5px',
										boxSizing: 'initial',
										width: '240px',
									},
									clear: { clear: 'both' },
								},
							},
							b,
						),
					),
					y = function(e, n) {
						e.hex
							? u.default.isValidHex(e.hex) &&
							  t({ hex: e.hex, source: 'hex' }, n)
							: t(e, n);
					};
				return r.default.createElement(
					c.Raised,
					{ style: x.Compact, styles: b },
					r.default.createElement(
						'div',
						{ style: x.compact, className: 'compact-picker ' + v },
						r.default.createElement(
							'div',
							null,
							(0, l.default)(o, function(e) {
								return r.default.createElement(s.default, {
									key: e,
									color: e,
									active: e.toLowerCase() === f,
									onClick: y,
									onSwatchHover: n,
								});
							}),
							r.default.createElement('div', { style: x.clear }),
						),
						r.default.createElement(d.default, { hex: f, rgb: p, onChange: y }),
					),
				);
			});
			(p.propTypes = {
				colors: o.default.arrayOf(o.default.string),
				styles: o.default.object,
			}),
				(p.defaultProps = {
					colors: [
						'#4D4D4D',
						'#999999',
						'#FFFFFF',
						'#F44E3B',
						'#FE9200',
						'#FCDC00',
						'#DBDF00',
						'#A4DD00',
						'#68CCCA',
						'#73D8FF',
						'#AEA1FF',
						'#FDA1FF',
						'#333333',
						'#808080',
						'#cccccc',
						'#D33115',
						'#E27300',
						'#FCC400',
						'#B0BC00',
						'#68BC00',
						'#16A5A5',
						'#009CE0',
						'#7B64FF',
						'#FA28FF',
						'#000000',
						'#666666',
						'#B3B3B3',
						'#9F0500',
						'#C45100',
						'#FB9E00',
						'#808900',
						'#194D33',
						'#0C797D',
						'#0062B1',
						'#653294',
						'#AB149E',
					],
					styles: {},
				}),
				(t.default = (0, c.ColorWrap)(p));
		},
		781: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.CompactColor = void 0);
			var r = i(n(0)),
				o = i(n(395)),
				a = i(n(450)),
				l = n(399);
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.CompactColor = function(e) {
				var t = e.color,
					n = e.onClick,
					i = void 0 === n ? function() {} : n,
					u = e.onSwatchHover,
					c = e.active,
					s = (0, o.default)(
						{
							default: {
								color: {
									background: t,
									width: '15px',
									height: '15px',
									float: 'left',
									marginRight: '5px',
									marginBottom: '5px',
									position: 'relative',
									cursor: 'pointer',
								},
								dot: {
									absolute: '5px 5px 5px 5px',
									background: a.default.getContrastingColor(t),
									borderRadius: '50%',
									opacity: '0',
								},
							},
							active: { dot: { opacity: '1' } },
							'color-#FFFFFF': {
								color: { boxShadow: 'inset 0 0 0 1px #ddd' },
								dot: { background: '#000' },
							},
							transparent: { dot: { background: '#000' } },
						},
						{
							active: c,
							'color-#FFFFFF': '#FFFFFF' === t,
							transparent: 'transparent' === t,
						},
					);
				return r.default.createElement(
					l.Swatch,
					{
						style: s.color,
						color: t,
						onClick: i,
						onHover: u,
						focusStyle: { boxShadow: '0 0 4px ' + t },
					},
					r.default.createElement('div', { style: s.dot }),
				);
			});
			t.default = u;
		},
		782: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.CompactFields = void 0);
			var r = l(n(0)),
				o = l(n(395)),
				a = n(399);
			function l(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var i = (t.CompactFields = function(e) {
				var t = e.hex,
					n = e.rgb,
					l = e.onChange,
					i = (0, o.default)({
						default: {
							fields: {
								display: 'flex',
								paddingBottom: '6px',
								paddingRight: '5px',
								position: 'relative',
							},
							active: {
								position: 'absolute',
								top: '6px',
								left: '5px',
								height: '9px',
								width: '9px',
								background: t,
							},
							HEXwrap: { flex: '6', position: 'relative' },
							HEXinput: {
								width: '80%',
								padding: '0px',
								paddingLeft: '20%',
								border: 'none',
								outline: 'none',
								background: 'none',
								fontSize: '12px',
								color: '#333',
								height: '16px',
							},
							HEXlabel: { display: 'none' },
							RGBwrap: { flex: '3', position: 'relative' },
							RGBinput: {
								width: '70%',
								padding: '0px',
								paddingLeft: '30%',
								border: 'none',
								outline: 'none',
								background: 'none',
								fontSize: '12px',
								color: '#333',
								height: '16px',
							},
							RGBlabel: {
								position: 'absolute',
								top: '3px',
								left: '0px',
								lineHeight: '16px',
								textTransform: 'uppercase',
								fontSize: '12px',
								color: '#999',
							},
						},
					}),
					u = function(e, t) {
						e.r || e.g || e.b
							? l(
									{
										r: e.r || n.r,
										g: e.g || n.g,
										b: e.b || n.b,
										source: 'rgb',
									},
									t,
							  )
							: l({ hex: e.hex, source: 'hex' }, t);
					};
				return r.default.createElement(
					'div',
					{ style: i.fields, className: 'flexbox-fix' },
					r.default.createElement('div', { style: i.active }),
					r.default.createElement(a.EditableInput, {
						style: { wrap: i.HEXwrap, input: i.HEXinput, label: i.HEXlabel },
						label: 'hex',
						value: t,
						onChange: u,
					}),
					r.default.createElement(a.EditableInput, {
						style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
						label: 'r',
						value: n.r,
						onChange: u,
					}),
					r.default.createElement(a.EditableInput, {
						style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
						label: 'g',
						value: n.g,
						onChange: u,
					}),
					r.default.createElement(a.EditableInput, {
						style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
						label: 'b',
						value: n.b,
						onChange: u,
					}),
				);
			});
			t.default = i;
		},
		783: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Github = void 0);
			var r = s(n(0)),
				o = s(n(3)),
				a = s(n(395)),
				l = s(n(511)),
				i = s(n(430)),
				u = n(399),
				c = s(n(784));
			function s(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var d = (t.Github = function(e) {
				var t = e.width,
					n = e.colors,
					o = e.onChange,
					u = e.onSwatchHover,
					s = e.triangle,
					d = e.styles,
					f = void 0 === d ? {} : d,
					p = e.className,
					h = void 0 === p ? '' : p,
					b = (0, a.default)(
						(0, i.default)(
							{
								default: {
									card: {
										width: t,
										background: '#fff',
										border: '1px solid rgba(0,0,0,0.2)',
										boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
										borderRadius: '4px',
										position: 'relative',
										padding: '5px',
										display: 'flex',
										flexWrap: 'wrap',
									},
									triangle: {
										position: 'absolute',
										border: '7px solid transparent',
										borderBottomColor: '#fff',
									},
									triangleShadow: {
										position: 'absolute',
										border: '8px solid transparent',
										borderBottomColor: 'rgba(0,0,0,0.15)',
									},
								},
								'hide-triangle': {
									triangle: { display: 'none' },
									triangleShadow: { display: 'none' },
								},
								'top-left-triangle': {
									triangle: { top: '-14px', left: '10px' },
									triangleShadow: { top: '-16px', left: '9px' },
								},
								'top-right-triangle': {
									triangle: { top: '-14px', right: '10px' },
									triangleShadow: { top: '-16px', right: '9px' },
								},
								'bottom-left-triangle': {
									triangle: {
										top: '35px',
										left: '10px',
										transform: 'rotate(180deg)',
									},
									triangleShadow: {
										top: '37px',
										left: '9px',
										transform: 'rotate(180deg)',
									},
								},
								'bottom-right-triangle': {
									triangle: {
										top: '35px',
										right: '10px',
										transform: 'rotate(180deg)',
									},
									triangleShadow: {
										top: '37px',
										right: '9px',
										transform: 'rotate(180deg)',
									},
								},
							},
							f,
						),
						{
							'hide-triangle': 'hide' === s,
							'top-left-triangle': 'top-left' === s,
							'top-right-triangle': 'top-right' === s,
							'bottom-left-triangle': 'bottom-left' === s,
							'bottom-right-triangle': 'bottom-right' === s,
						},
					),
					g = function(e, t) {
						return o({ hex: e, source: 'hex' }, t);
					};
				return r.default.createElement(
					'div',
					{ style: b.card, className: 'github-picker ' + h },
					r.default.createElement('div', { style: b.triangleShadow }),
					r.default.createElement('div', { style: b.triangle }),
					(0, l.default)(n, function(e) {
						return r.default.createElement(c.default, {
							color: e,
							key: e,
							onClick: g,
							onSwatchHover: u,
						});
					}),
				);
			});
			(d.propTypes = {
				width: o.default.oneOfType([o.default.string, o.default.number]),
				colors: o.default.arrayOf(o.default.string),
				triangle: o.default.oneOf([
					'hide',
					'top-left',
					'top-right',
					'bottom-left',
					'bottom-right',
				]),
				styles: o.default.object,
			}),
				(d.defaultProps = {
					width: 200,
					colors: [
						'#B80000',
						'#DB3E00',
						'#FCCB00',
						'#008B02',
						'#006B76',
						'#1273DE',
						'#004DCF',
						'#5300EB',
						'#EB9694',
						'#FAD0C3',
						'#FEF3BD',
						'#C1E1C5',
						'#BEDADC',
						'#C4DEF6',
						'#BED3F3',
						'#D4C4FB',
					],
					triangle: 'top-left',
					styles: {},
				}),
				(t.default = (0, u.ColorWrap)(d));
		},
		784: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.GithubSwatch = void 0);
			var r = i(n(0)),
				o = n(395),
				a = i(o),
				l = n(399);
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.GithubSwatch = function(e) {
				var t = e.hover,
					n = e.color,
					o = e.onClick,
					i = e.onSwatchHover,
					u = {
						position: 'relative',
						zIndex: '2',
						outline: '2px solid #fff',
						boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)',
					},
					c = (0, a.default)(
						{
							default: {
								swatch: { width: '25px', height: '25px', fontSize: '0' },
							},
							hover: { swatch: u },
						},
						{ hover: t },
					);
				return r.default.createElement(
					'div',
					{ style: c.swatch },
					r.default.createElement(l.Swatch, {
						color: n,
						onClick: o,
						onHover: i,
						focusStyle: u,
					}),
				);
			});
			t.default = (0, o.handleHover)(u);
		},
		785: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.HuePicker = void 0);
			var r =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				o = s(n(0)),
				a = s(n(3)),
				l = s(n(395)),
				i = s(n(430)),
				u = n(399),
				c = s(n(786));
			function s(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var d = (t.HuePicker = function(e) {
				var t = e.width,
					n = e.height,
					a = e.onChange,
					c = e.hsl,
					s = e.direction,
					d = e.pointer,
					f = e.styles,
					p = void 0 === f ? {} : f,
					h = e.className,
					b = void 0 === h ? '' : h,
					g = (0, l.default)(
						(0, i.default)(
							{
								default: {
									picker: { position: 'relative', width: t, height: n },
									hue: { radius: '2px' },
								},
							},
							p,
						),
					);
				return o.default.createElement(
					'div',
					{ style: g.picker, className: 'hue-picker ' + b },
					o.default.createElement(
						u.Hue,
						r({}, g.hue, {
							hsl: c,
							pointer: d,
							onChange: function(e) {
								return a({ a: 1, h: e.h, l: 0.5, s: 1 });
							},
							direction: s,
						}),
					),
				);
			});
			(d.propTypes = { styles: a.default.object }),
				(d.defaultProps = {
					width: '316px',
					height: '16px',
					direction: 'horizontal',
					pointer: c.default,
					styles: {},
				}),
				(t.default = (0, u.ColorWrap)(d));
		},
		786: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SliderPointer = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.SliderPointer = function(e) {
				var t = e.direction,
					n = (0, o.default)(
						{
							default: {
								picker: {
									width: '18px',
									height: '18px',
									borderRadius: '50%',
									transform: 'translate(-9px, -1px)',
									backgroundColor: 'rgb(248, 248, 248)',
									boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
								},
							},
							vertical: { picker: { transform: 'translate(-3px, -9px)' } },
						},
						{ vertical: 'vertical' === t },
					);
				return r.default.createElement('div', { style: n.picker });
			});
			t.default = l;
		},
		787: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Material = void 0);
			var r = u(n(0)),
				o = u(n(395)),
				a = u(n(430)),
				l = u(n(450)),
				i = n(399);
			function u(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var c = (t.Material = function(e) {
				var t = e.onChange,
					n = e.hex,
					u = e.rgb,
					c = e.styles,
					s = void 0 === c ? {} : c,
					d = e.className,
					f = void 0 === d ? '' : d,
					p = (0, o.default)(
						(0, a.default)(
							{
								default: {
									material: {
										width: '98px',
										height: '98px',
										padding: '16px',
										fontFamily: 'Roboto',
									},
									HEXwrap: { position: 'relative' },
									HEXinput: {
										width: '100%',
										marginTop: '12px',
										fontSize: '15px',
										color: '#333',
										padding: '0px',
										border: '0px',
										borderBottom: '2px solid ' + n,
										outline: 'none',
										height: '30px',
									},
									HEXlabel: {
										position: 'absolute',
										top: '0px',
										left: '0px',
										fontSize: '11px',
										color: '#999999',
										textTransform: 'capitalize',
									},
									Hex: { style: {} },
									RGBwrap: { position: 'relative' },
									RGBinput: {
										width: '100%',
										marginTop: '12px',
										fontSize: '15px',
										color: '#333',
										padding: '0px',
										border: '0px',
										borderBottom: '1px solid #eee',
										outline: 'none',
										height: '30px',
									},
									RGBlabel: {
										position: 'absolute',
										top: '0px',
										left: '0px',
										fontSize: '11px',
										color: '#999999',
										textTransform: 'capitalize',
									},
									split: {
										display: 'flex',
										marginRight: '-10px',
										paddingTop: '11px',
									},
									third: { flex: '1', paddingRight: '10px' },
								},
							},
							s,
						),
					),
					h = function(e, n) {
						e.hex
							? l.default.isValidHex(e.hex) &&
							  t({ hex: e.hex, source: 'hex' }, n)
							: (e.r || e.g || e.b) &&
							  t(
									{
										r: e.r || u.r,
										g: e.g || u.g,
										b: e.b || u.b,
										source: 'rgb',
									},
									n,
							  );
					};
				return r.default.createElement(
					i.Raised,
					{ styles: s },
					r.default.createElement(
						'div',
						{ style: p.material, className: 'material-picker ' + f },
						r.default.createElement(i.EditableInput, {
							style: { wrap: p.HEXwrap, input: p.HEXinput, label: p.HEXlabel },
							label: 'hex',
							value: n,
							onChange: h,
						}),
						r.default.createElement(
							'div',
							{ style: p.split, className: 'flexbox-fix' },
							r.default.createElement(
								'div',
								{ style: p.third },
								r.default.createElement(i.EditableInput, {
									style: {
										wrap: p.RGBwrap,
										input: p.RGBinput,
										label: p.RGBlabel,
									},
									label: 'r',
									value: u.r,
									onChange: h,
								}),
							),
							r.default.createElement(
								'div',
								{ style: p.third },
								r.default.createElement(i.EditableInput, {
									style: {
										wrap: p.RGBwrap,
										input: p.RGBinput,
										label: p.RGBlabel,
									},
									label: 'g',
									value: u.g,
									onChange: h,
								}),
							),
							r.default.createElement(
								'div',
								{ style: p.third },
								r.default.createElement(i.EditableInput, {
									style: {
										wrap: p.RGBwrap,
										input: p.RGBinput,
										label: p.RGBlabel,
									},
									label: 'b',
									value: u.b,
									onChange: h,
								}),
							),
						),
					),
				);
			});
			t.default = (0, i.ColorWrap)(c);
		},
		788: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Photoshop = void 0);
			var r = (function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								'value' in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				o = h(n(0)),
				a = h(n(3)),
				l = h(n(395)),
				i = h(n(430)),
				u = n(399),
				c = h(n(789)),
				s = h(n(790)),
				d = h(n(791)),
				f = h(n(792)),
				p = h(n(793));
			function h(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var b = (t.Photoshop = (function(e) {
				function t(e) {
					!(function(e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, t);
					var n = (function(e, t) {
						if (!e)
							throw new ReferenceError(
								"this hasn't been initialised - super() hasn't been called",
							);
						return !t || ('object' !== typeof t && 'function' !== typeof t)
							? e
							: t;
					})(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return (n.state = { currentColor: e.hex }), n;
				}
				return (
					(function(e, t) {
						if ('function' !== typeof t && null !== t)
							throw new TypeError(
								'Super expression must either be null or a function, not ' +
									typeof t,
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})),
							t &&
								(Object.setPrototypeOf
									? Object.setPrototypeOf(e, t)
									: (e.__proto__ = t));
					})(t, e),
					r(t, [
						{
							key: 'render',
							value: function() {
								var e = this.props,
									t = e.styles,
									n = void 0 === t ? {} : t,
									r = e.className,
									a = void 0 === r ? '' : r,
									h = (0, l.default)(
										(0, i.default)(
											{
												default: {
													picker: {
														background: '#DCDCDC',
														borderRadius: '4px',
														boxShadow:
															'0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
														boxSizing: 'initial',
														width: '513px',
													},
													head: {
														backgroundImage:
															'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
														borderBottom: '1px solid #B1B1B1',
														boxShadow:
															'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
														height: '23px',
														lineHeight: '24px',
														borderRadius: '4px 4px 0 0',
														fontSize: '13px',
														color: '#4D4D4D',
														textAlign: 'center',
													},
													body: { padding: '15px 15px 0', display: 'flex' },
													saturation: {
														width: '256px',
														height: '256px',
														position: 'relative',
														border: '2px solid #B3B3B3',
														borderBottom: '2px solid #F0F0F0',
														overflow: 'hidden',
													},
													hue: {
														position: 'relative',
														height: '256px',
														width: '19px',
														marginLeft: '10px',
														border: '2px solid #B3B3B3',
														borderBottom: '2px solid #F0F0F0',
													},
													controls: { width: '180px', marginLeft: '10px' },
													top: { display: 'flex' },
													previews: { width: '60px' },
													actions: { flex: '1', marginLeft: '20px' },
												},
											},
											n,
										),
									);
								return o.default.createElement(
									'div',
									{ style: h.picker, className: 'photoshop-picker ' + a },
									o.default.createElement(
										'div',
										{ style: h.head },
										this.props.header,
									),
									o.default.createElement(
										'div',
										{ style: h.body, className: 'flexbox-fix' },
										o.default.createElement(
											'div',
											{ style: h.saturation },
											o.default.createElement(u.Saturation, {
												hsl: this.props.hsl,
												hsv: this.props.hsv,
												pointer: s.default,
												onChange: this.props.onChange,
											}),
										),
										o.default.createElement(
											'div',
											{ style: h.hue },
											o.default.createElement(u.Hue, {
												direction: 'vertical',
												hsl: this.props.hsl,
												pointer: d.default,
												onChange: this.props.onChange,
											}),
										),
										o.default.createElement(
											'div',
											{ style: h.controls },
											o.default.createElement(
												'div',
												{ style: h.top, className: 'flexbox-fix' },
												o.default.createElement(
													'div',
													{ style: h.previews },
													o.default.createElement(p.default, {
														rgb: this.props.rgb,
														currentColor: this.state.currentColor,
													}),
												),
												o.default.createElement(
													'div',
													{ style: h.actions },
													o.default.createElement(f.default, {
														label: 'OK',
														onClick: this.props.onAccept,
														active: !0,
													}),
													o.default.createElement(f.default, {
														label: 'Cancel',
														onClick: this.props.onCancel,
													}),
													o.default.createElement(c.default, {
														onChange: this.props.onChange,
														rgb: this.props.rgb,
														hsv: this.props.hsv,
														hex: this.props.hex,
													}),
												),
											),
										),
									),
								);
							},
						},
					]),
					t
				);
			})(o.default.Component));
			(b.propTypes = { header: a.default.string, styles: a.default.object }),
				(b.defaultProps = { header: 'Color Picker', styles: {} }),
				(t.default = (0, u.ColorWrap)(b));
		},
		789: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.PhotoshopPicker = void 0);
			var r = i(n(0)),
				o = i(n(395)),
				a = i(n(450)),
				l = n(399);
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.PhotoshopPicker = function(e) {
				var t = e.onChange,
					n = e.rgb,
					i = e.hsv,
					u = e.hex,
					c = (0, o.default)({
						default: {
							fields: {
								paddingTop: '5px',
								paddingBottom: '9px',
								width: '80px',
								position: 'relative',
							},
							divider: { height: '5px' },
							RGBwrap: { position: 'relative' },
							RGBinput: {
								marginLeft: '40%',
								width: '40%',
								height: '18px',
								border: '1px solid #888888',
								boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
								marginBottom: '5px',
								fontSize: '13px',
								paddingLeft: '3px',
								marginRight: '10px',
							},
							RGBlabel: {
								left: '0px',
								width: '34px',
								textTransform: 'uppercase',
								fontSize: '13px',
								height: '18px',
								lineHeight: '22px',
								position: 'absolute',
							},
							HEXwrap: { position: 'relative' },
							HEXinput: {
								marginLeft: '20%',
								width: '80%',
								height: '18px',
								border: '1px solid #888888',
								boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
								marginBottom: '6px',
								fontSize: '13px',
								paddingLeft: '3px',
							},
							HEXlabel: {
								position: 'absolute',
								top: '0px',
								left: '0px',
								width: '14px',
								textTransform: 'uppercase',
								fontSize: '13px',
								height: '18px',
								lineHeight: '22px',
							},
							fieldSymbols: {
								position: 'absolute',
								top: '5px',
								right: '-7px',
								fontSize: '13px',
							},
							symbol: {
								height: '20px',
								lineHeight: '22px',
								paddingBottom: '7px',
							},
						},
					}),
					s = function(e, r) {
						e['#']
							? a.default.isValidHex(e['#']) &&
							  t({ hex: e['#'], source: 'hex' }, r)
							: e.r || e.g || e.b
							? t(
									{
										r: e.r || n.r,
										g: e.g || n.g,
										b: e.b || n.b,
										source: 'rgb',
									},
									r,
							  )
							: (e.h || e.s || e.v) &&
							  t(
									{
										h: e.h || i.h,
										s: e.s || i.s,
										v: e.v || i.v,
										source: 'hsv',
									},
									r,
							  );
					};
				return r.default.createElement(
					'div',
					{ style: c.fields },
					r.default.createElement(l.EditableInput, {
						style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
						label: 'h',
						value: Math.round(i.h),
						onChange: s,
					}),
					r.default.createElement(l.EditableInput, {
						style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
						label: 's',
						value: Math.round(100 * i.s),
						onChange: s,
					}),
					r.default.createElement(l.EditableInput, {
						style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
						label: 'v',
						value: Math.round(100 * i.v),
						onChange: s,
					}),
					r.default.createElement('div', { style: c.divider }),
					r.default.createElement(l.EditableInput, {
						style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
						label: 'r',
						value: n.r,
						onChange: s,
					}),
					r.default.createElement(l.EditableInput, {
						style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
						label: 'g',
						value: n.g,
						onChange: s,
					}),
					r.default.createElement(l.EditableInput, {
						style: { wrap: c.RGBwrap, input: c.RGBinput, label: c.RGBlabel },
						label: 'b',
						value: n.b,
						onChange: s,
					}),
					r.default.createElement('div', { style: c.divider }),
					r.default.createElement(l.EditableInput, {
						style: { wrap: c.HEXwrap, input: c.HEXinput, label: c.HEXlabel },
						label: '#',
						value: u.replace('#', ''),
						onChange: s,
					}),
					r.default.createElement(
						'div',
						{ style: c.fieldSymbols },
						r.default.createElement('div', { style: c.symbol }, '\xb0'),
						r.default.createElement('div', { style: c.symbol }, '%'),
						r.default.createElement('div', { style: c.symbol }, '%'),
					),
				);
			});
			t.default = u;
		},
		790: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.PhotoshopPointerCircle = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.PhotoshopPointerCircle = function(e) {
				var t = e.hsl,
					n = (0, o.default)(
						{
							default: {
								picker: {
									width: '12px',
									height: '12px',
									borderRadius: '6px',
									boxShadow: 'inset 0 0 0 1px #fff',
									transform: 'translate(-6px, -6px)',
								},
							},
							'black-outline': {
								picker: { boxShadow: 'inset 0 0 0 1px #000' },
							},
						},
						{ 'black-outline': t.l > 0.5 },
					);
				return r.default.createElement('div', { style: n.picker });
			});
			t.default = l;
		},
		791: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.PhotoshopPointerCircle = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.PhotoshopPointerCircle = function() {
				var e = (0, o.default)({
					default: {
						triangle: {
							width: 0,
							height: 0,
							borderStyle: 'solid',
							borderWidth: '4px 0 4px 6px',
							borderColor: 'transparent transparent transparent #fff',
							position: 'absolute',
							top: '1px',
							left: '1px',
						},
						triangleBorder: {
							width: 0,
							height: 0,
							borderStyle: 'solid',
							borderWidth: '5px 0 5px 8px',
							borderColor: 'transparent transparent transparent #555',
						},
						left: {
							Extend: 'triangleBorder',
							transform: 'translate(-13px, -4px)',
						},
						leftInside: {
							Extend: 'triangle',
							transform: 'translate(-8px, -5px)',
						},
						right: {
							Extend: 'triangleBorder',
							transform: 'translate(20px, -14px) rotate(180deg)',
						},
						rightInside: {
							Extend: 'triangle',
							transform: 'translate(-8px, -5px)',
						},
					},
				});
				return r.default.createElement(
					'div',
					{ style: e.pointer },
					r.default.createElement(
						'div',
						{ style: e.left },
						r.default.createElement('div', { style: e.leftInside }),
					),
					r.default.createElement(
						'div',
						{ style: e.right },
						r.default.createElement('div', { style: e.rightInside }),
					),
				);
			});
			t.default = l;
		},
		792: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.PhotoshopButton = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.PhotoshopButton = function(e) {
				var t = e.onClick,
					n = e.label,
					a = e.children,
					l = e.active,
					i = (0, o.default)(
						{
							default: {
								button: {
									backgroundImage:
										'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
									border: '1px solid #878787',
									borderRadius: '2px',
									height: '20px',
									boxShadow: '0 1px 0 0 #EAEAEA',
									fontSize: '14px',
									color: '#000',
									lineHeight: '20px',
									textAlign: 'center',
									marginBottom: '10px',
									cursor: 'pointer',
								},
							},
							active: { button: { boxShadow: '0 0 0 1px #878787' } },
						},
						{ active: l },
					);
				return r.default.createElement(
					'div',
					{ style: i.button, onClick: t },
					n || a,
				);
			});
			t.default = l;
		},
		793: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.PhotoshopPreviews = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.PhotoshopPreviews = function(e) {
				var t = e.rgb,
					n = e.currentColor,
					a = (0, o.default)({
						default: {
							swatches: {
								border: '1px solid #B3B3B3',
								borderBottom: '1px solid #F0F0F0',
								marginBottom: '2px',
								marginTop: '1px',
							},
							new: {
								height: '34px',
								background: 'rgb(' + t.r + ',' + t.g + ', ' + t.b + ')',
								boxShadow:
									'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000',
							},
							current: {
								height: '34px',
								background: n,
								boxShadow:
									'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000',
							},
							label: { fontSize: '14px', color: '#000', textAlign: 'center' },
						},
					});
				return r.default.createElement(
					'div',
					null,
					r.default.createElement('div', { style: a.label }, 'new'),
					r.default.createElement(
						'div',
						{ style: a.swatches },
						r.default.createElement('div', { style: a.new }),
						r.default.createElement('div', { style: a.current }),
					),
					r.default.createElement('div', { style: a.label }, 'current'),
				);
			});
			t.default = l;
		},
		794: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Sketch = void 0);
			var r =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				o = d(n(0)),
				a = d(n(3)),
				l = d(n(395)),
				i = d(n(430)),
				u = n(399),
				c = d(n(795)),
				s = d(n(796));
			function d(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var f = (t.Sketch = function(e) {
				var t = e.width,
					n = e.rgb,
					a = e.hex,
					d = e.hsv,
					f = e.hsl,
					p = e.onChange,
					h = e.onSwatchHover,
					b = e.disableAlpha,
					g = e.presetColors,
					v = e.renderers,
					x = e.styles,
					y = void 0 === x ? {} : x,
					m = e.className,
					w = void 0 === m ? '' : m,
					C = (0, l.default)(
						(0, i.default)(
							{
								default: r(
									{
										picker: {
											width: t,
											padding: '10px 10px 0',
											boxSizing: 'initial',
											background: '#fff',
											borderRadius: '4px',
											boxShadow:
												'0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
										},
										saturation: {
											width: '100%',
											paddingBottom: '75%',
											position: 'relative',
											overflow: 'hidden',
										},
										Saturation: {
											radius: '3px',
											shadow:
												'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
										},
										controls: { display: 'flex' },
										sliders: { padding: '4px 0', flex: '1' },
										color: {
											width: '24px',
											height: '24px',
											position: 'relative',
											marginTop: '4px',
											marginLeft: '4px',
											borderRadius: '3px',
										},
										activeColor: {
											absolute: '0px 0px 0px 0px',
											borderRadius: '2px',
											background:
												'rgba(' + n.r + ',' + n.g + ',' + n.b + ',' + n.a + ')',
											boxShadow:
												'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
										},
										hue: {
											position: 'relative',
											height: '10px',
											overflow: 'hidden',
										},
										Hue: {
											radius: '2px',
											shadow:
												'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
										},
										alpha: {
											position: 'relative',
											height: '10px',
											marginTop: '4px',
											overflow: 'hidden',
										},
										Alpha: {
											radius: '2px',
											shadow:
												'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
										},
									},
									y,
								),
								disableAlpha: {
									color: { height: '10px' },
									hue: { height: '10px' },
									alpha: { display: 'none' },
								},
							},
							y,
						),
						{ disableAlpha: b },
					);
				return o.default.createElement(
					'div',
					{ style: C.picker, className: 'sketch-picker ' + w },
					o.default.createElement(
						'div',
						{ style: C.saturation },
						o.default.createElement(u.Saturation, {
							style: C.Saturation,
							hsl: f,
							hsv: d,
							onChange: p,
						}),
					),
					o.default.createElement(
						'div',
						{ style: C.controls, className: 'flexbox-fix' },
						o.default.createElement(
							'div',
							{ style: C.sliders },
							o.default.createElement(
								'div',
								{ style: C.hue },
								o.default.createElement(u.Hue, {
									style: C.Hue,
									hsl: f,
									onChange: p,
								}),
							),
							o.default.createElement(
								'div',
								{ style: C.alpha },
								o.default.createElement(u.Alpha, {
									style: C.Alpha,
									rgb: n,
									hsl: f,
									renderers: v,
									onChange: p,
								}),
							),
						),
						o.default.createElement(
							'div',
							{ style: C.color },
							o.default.createElement(u.Checkboard, null),
							o.default.createElement('div', { style: C.activeColor }),
						),
					),
					o.default.createElement(c.default, {
						rgb: n,
						hsl: f,
						hex: a,
						onChange: p,
						disableAlpha: b,
					}),
					o.default.createElement(s.default, {
						colors: g,
						onClick: p,
						onSwatchHover: h,
					}),
				);
			});
			(f.propTypes = {
				disableAlpha: a.default.bool,
				width: a.default.oneOfType([a.default.string, a.default.number]),
				styles: a.default.object,
			}),
				(f.defaultProps = {
					disableAlpha: !1,
					width: 200,
					styles: {},
					presetColors: [
						'#D0021B',
						'#F5A623',
						'#F8E71C',
						'#8B572A',
						'#7ED321',
						'#417505',
						'#BD10E0',
						'#9013FE',
						'#4A90E2',
						'#50E3C2',
						'#B8E986',
						'#000000',
						'#4A4A4A',
						'#9B9B9B',
						'#FFFFFF',
					],
				}),
				(t.default = (0, u.ColorWrap)(f));
		},
		795: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SketchFields = void 0);
			var r = i(n(0)),
				o = i(n(395)),
				a = i(n(450)),
				l = n(399);
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.SketchFields = function(e) {
				var t = e.onChange,
					n = e.rgb,
					i = e.hsl,
					u = e.hex,
					c = e.disableAlpha,
					s = (0, o.default)(
						{
							default: {
								fields: { display: 'flex', paddingTop: '4px' },
								single: { flex: '1', paddingLeft: '6px' },
								alpha: { flex: '1', paddingLeft: '6px' },
								double: { flex: '2' },
								input: {
									width: '80%',
									padding: '4px 10% 3px',
									border: 'none',
									boxShadow: 'inset 0 0 0 1px #ccc',
									fontSize: '11px',
								},
								label: {
									display: 'block',
									textAlign: 'center',
									fontSize: '11px',
									color: '#222',
									paddingTop: '3px',
									paddingBottom: '4px',
									textTransform: 'capitalize',
								},
							},
							disableAlpha: { alpha: { display: 'none' } },
						},
						{ disableAlpha: c },
					),
					d = function(e, r) {
						e.hex
							? a.default.isValidHex(e.hex) &&
							  t({ hex: e.hex, source: 'hex' }, r)
							: e.r || e.g || e.b
							? t(
									{
										r: e.r || n.r,
										g: e.g || n.g,
										b: e.b || n.b,
										a: n.a,
										source: 'rgb',
									},
									r,
							  )
							: e.a &&
							  (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
							  (e.a /= 100),
							  t({ h: i.h, s: i.s, l: i.l, a: e.a, source: 'rgb' }, r));
					};
				return r.default.createElement(
					'div',
					{ style: s.fields, className: 'flexbox-fix' },
					r.default.createElement(
						'div',
						{ style: s.double },
						r.default.createElement(l.EditableInput, {
							style: { input: s.input, label: s.label },
							label: 'hex',
							value: u.replace('#', ''),
							onChange: d,
						}),
					),
					r.default.createElement(
						'div',
						{ style: s.single },
						r.default.createElement(l.EditableInput, {
							style: { input: s.input, label: s.label },
							label: 'r',
							value: n.r,
							onChange: d,
							dragLabel: 'true',
							dragMax: '255',
						}),
					),
					r.default.createElement(
						'div',
						{ style: s.single },
						r.default.createElement(l.EditableInput, {
							style: { input: s.input, label: s.label },
							label: 'g',
							value: n.g,
							onChange: d,
							dragLabel: 'true',
							dragMax: '255',
						}),
					),
					r.default.createElement(
						'div',
						{ style: s.single },
						r.default.createElement(l.EditableInput, {
							style: { input: s.input, label: s.label },
							label: 'b',
							value: n.b,
							onChange: d,
							dragLabel: 'true',
							dragMax: '255',
						}),
					),
					r.default.createElement(
						'div',
						{ style: s.alpha },
						r.default.createElement(l.EditableInput, {
							style: { input: s.input, label: s.label },
							label: 'a',
							value: Math.round(100 * n.a),
							onChange: d,
							dragLabel: 'true',
							dragMax: '100',
						}),
					),
				);
			});
			t.default = u;
		},
		796: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SketchPresetColors = void 0);
			var r =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				o = u(n(0)),
				a = u(n(3)),
				l = u(n(395)),
				i = n(399);
			function u(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var c = (t.SketchPresetColors = function(e) {
				var t = e.colors,
					n = e.onClick,
					a = void 0 === n ? function() {} : n,
					u = e.onSwatchHover,
					c = (0, l.default)(
						{
							default: {
								colors: {
									margin: '0 -10px',
									padding: '10px 0 0 10px',
									borderTop: '1px solid #eee',
									display: 'flex',
									flexWrap: 'wrap',
									position: 'relative',
								},
								swatchWrap: {
									width: '16px',
									height: '16px',
									margin: '0 10px 10px 0',
								},
								swatch: {
									borderRadius: '3px',
									boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
								},
							},
							'no-presets': { colors: { display: 'none' } },
						},
						{ 'no-presets': !t || !t.length },
					),
					s = function(e, t) {
						a({ hex: e, source: 'hex' }, t);
					};
				return o.default.createElement(
					'div',
					{ style: c.colors, className: 'flexbox-fix' },
					t.map(function(e) {
						var t = 'string' === typeof e ? { color: e } : e,
							n = '' + t.color + (t.title || '');
						return o.default.createElement(
							'div',
							{ key: n, style: c.swatchWrap },
							o.default.createElement(
								i.Swatch,
								r({}, t, {
									style: c.swatch,
									onClick: s,
									onHover: u,
									focusStyle: {
										boxShadow:
											'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + t.color,
									},
								}),
							),
						);
					}),
				);
			});
			(c.propTypes = {
				colors: a.default.arrayOf(
					a.default.oneOfType([
						a.default.string,
						a.default.shape({
							color: a.default.string,
							title: a.default.string,
						}),
					]),
				).isRequired,
			}),
				(t.default = c);
		},
		797: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Slider = void 0);
			var r = s(n(0)),
				o = s(n(3)),
				a = s(n(395)),
				l = s(n(430)),
				i = n(399),
				u = s(n(798)),
				c = s(n(800));
			function s(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var d = (t.Slider = function(e) {
				var t = e.hsl,
					n = e.onChange,
					o = e.pointer,
					c = e.styles,
					s = void 0 === c ? {} : c,
					d = e.className,
					f = void 0 === d ? '' : d,
					p = (0, a.default)(
						(0, l.default)(
							{
								default: {
									hue: { height: '12px', position: 'relative' },
									Hue: { radius: '2px' },
								},
							},
							s,
						),
					);
				return r.default.createElement(
					'div',
					{ style: p.wrap || {}, className: 'slider-picker ' + f },
					r.default.createElement(
						'div',
						{ style: p.hue },
						r.default.createElement(i.Hue, {
							style: p.Hue,
							hsl: t,
							pointer: o,
							onChange: n,
						}),
					),
					r.default.createElement(
						'div',
						{ style: p.swatches },
						r.default.createElement(u.default, { hsl: t, onClick: n }),
					),
				);
			});
			(d.propTypes = { styles: o.default.object }),
				(d.defaultProps = { pointer: c.default, styles: {} }),
				(t.default = (0, i.ColorWrap)(d));
		},
		798: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SliderSwatches = void 0);
			var r = l(n(0)),
				o = l(n(395)),
				a = l(n(799));
			function l(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var i = (t.SliderSwatches = function(e) {
				var t = e.onClick,
					n = e.hsl,
					l = (0, o.default)({
						default: {
							swatches: { marginTop: '20px' },
							swatch: {
								boxSizing: 'border-box',
								width: '20%',
								paddingRight: '1px',
								float: 'left',
							},
							clear: { clear: 'both' },
						},
					});
				return r.default.createElement(
					'div',
					{ style: l.swatches },
					r.default.createElement(
						'div',
						{ style: l.swatch },
						r.default.createElement(a.default, {
							hsl: n,
							offset: '.80',
							active: Math.abs(n.l - 0.8) < 0.1 && Math.abs(n.s - 0.5) < 0.1,
							onClick: t,
							first: !0,
						}),
					),
					r.default.createElement(
						'div',
						{ style: l.swatch },
						r.default.createElement(a.default, {
							hsl: n,
							offset: '.65',
							active: Math.abs(n.l - 0.65) < 0.1 && Math.abs(n.s - 0.5) < 0.1,
							onClick: t,
						}),
					),
					r.default.createElement(
						'div',
						{ style: l.swatch },
						r.default.createElement(a.default, {
							hsl: n,
							offset: '.50',
							active: Math.abs(n.l - 0.5) < 0.1 && Math.abs(n.s - 0.5) < 0.1,
							onClick: t,
						}),
					),
					r.default.createElement(
						'div',
						{ style: l.swatch },
						r.default.createElement(a.default, {
							hsl: n,
							offset: '.35',
							active: Math.abs(n.l - 0.35) < 0.1 && Math.abs(n.s - 0.5) < 0.1,
							onClick: t,
						}),
					),
					r.default.createElement(
						'div',
						{ style: l.swatch },
						r.default.createElement(a.default, {
							hsl: n,
							offset: '.20',
							active: Math.abs(n.l - 0.2) < 0.1 && Math.abs(n.s - 0.5) < 0.1,
							onClick: t,
							last: !0,
						}),
					),
					r.default.createElement('div', { style: l.clear }),
				);
			});
			t.default = i;
		},
		799: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SliderSwatch = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.SliderSwatch = function(e) {
				var t = e.hsl,
					n = e.offset,
					a = e.onClick,
					l = void 0 === a ? function() {} : a,
					i = e.active,
					u = e.first,
					c = e.last,
					s = (0, o.default)(
						{
							default: {
								swatch: {
									height: '12px',
									background: 'hsl(' + t.h + ', 50%, ' + 100 * n + '%)',
									cursor: 'pointer',
								},
							},
							first: { swatch: { borderRadius: '2px 0 0 2px' } },
							last: { swatch: { borderRadius: '0 2px 2px 0' } },
							active: {
								swatch: { transform: 'scaleY(1.8)', borderRadius: '3.6px/2px' },
							},
						},
						{ active: i, first: u, last: c },
					);
				return r.default.createElement('div', {
					style: s.swatch,
					onClick: function(e) {
						return l({ h: t.h, s: 0.5, l: n, source: 'hsl' }, e);
					},
				});
			});
			t.default = l;
		},
		800: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SliderPointer = void 0);
			var r = a(n(0)),
				o = a(n(395));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var l = (t.SliderPointer = function() {
				var e = (0, o.default)({
					default: {
						picker: {
							width: '14px',
							height: '14px',
							borderRadius: '6px',
							transform: 'translate(-7px, -1px)',
							backgroundColor: 'rgb(248, 248, 248)',
							boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
						},
					},
				});
				return r.default.createElement('div', { style: e.picker });
			});
			t.default = l;
		},
		801: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Swatches = void 0);
			var r = f(n(0)),
				o = f(n(3)),
				a = f(n(395)),
				l = f(n(511)),
				i = f(n(430)),
				u = f(n(450)),
				c = (function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return (t.default = e), t;
				})(n(672)),
				s = n(399),
				d = f(n(802));
			function f(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var p = (t.Swatches = function(e) {
				var t = e.width,
					n = e.height,
					o = e.onChange,
					c = e.onSwatchHover,
					f = e.colors,
					p = e.hex,
					h = e.styles,
					b = void 0 === h ? {} : h,
					g = e.className,
					v = void 0 === g ? '' : g,
					x = (0, a.default)(
						(0, i.default)(
							{
								default: {
									picker: { width: t, height: n },
									overflow: { height: n, overflowY: 'scroll' },
									body: { padding: '16px 0 6px 16px' },
									clear: { clear: 'both' },
								},
							},
							b,
						),
					),
					y = function(e, t) {
						u.default.isValidHex(e) && o({ hex: e, source: 'hex' }, t);
					};
				return r.default.createElement(
					'div',
					{ style: x.picker, className: 'swatches-picker ' + v },
					r.default.createElement(
						s.Raised,
						null,
						r.default.createElement(
							'div',
							{ style: x.overflow },
							r.default.createElement(
								'div',
								{ style: x.body },
								(0, l.default)(f, function(e) {
									return r.default.createElement(d.default, {
										key: e.toString(),
										group: e,
										active: p,
										onClick: y,
										onSwatchHover: c,
									});
								}),
								r.default.createElement('div', { style: x.clear }),
							),
						),
					),
				);
			});
			(p.propTypes = {
				width: o.default.oneOfType([o.default.string, o.default.number]),
				height: o.default.oneOfType([o.default.string, o.default.number]),
				colors: o.default.arrayOf(o.default.arrayOf(o.default.string)),
				styles: o.default.object,
			}),
				(p.defaultProps = {
					width: 320,
					height: 240,
					colors: [
						[c.red[900], c.red[700], c.red[500], c.red[300], c.red[100]],
						[c.pink[900], c.pink[700], c.pink[500], c.pink[300], c.pink[100]],
						[
							c.purple[900],
							c.purple[700],
							c.purple[500],
							c.purple[300],
							c.purple[100],
						],
						[
							c.deepPurple[900],
							c.deepPurple[700],
							c.deepPurple[500],
							c.deepPurple[300],
							c.deepPurple[100],
						],
						[
							c.indigo[900],
							c.indigo[700],
							c.indigo[500],
							c.indigo[300],
							c.indigo[100],
						],
						[c.blue[900], c.blue[700], c.blue[500], c.blue[300], c.blue[100]],
						[
							c.lightBlue[900],
							c.lightBlue[700],
							c.lightBlue[500],
							c.lightBlue[300],
							c.lightBlue[100],
						],
						[c.cyan[900], c.cyan[700], c.cyan[500], c.cyan[300], c.cyan[100]],
						[c.teal[900], c.teal[700], c.teal[500], c.teal[300], c.teal[100]],
						['#194D33', c.green[700], c.green[500], c.green[300], c.green[100]],
						[
							c.lightGreen[900],
							c.lightGreen[700],
							c.lightGreen[500],
							c.lightGreen[300],
							c.lightGreen[100],
						],
						[c.lime[900], c.lime[700], c.lime[500], c.lime[300], c.lime[100]],
						[
							c.yellow[900],
							c.yellow[700],
							c.yellow[500],
							c.yellow[300],
							c.yellow[100],
						],
						[
							c.amber[900],
							c.amber[700],
							c.amber[500],
							c.amber[300],
							c.amber[100],
						],
						[
							c.orange[900],
							c.orange[700],
							c.orange[500],
							c.orange[300],
							c.orange[100],
						],
						[
							c.deepOrange[900],
							c.deepOrange[700],
							c.deepOrange[500],
							c.deepOrange[300],
							c.deepOrange[100],
						],
						[
							c.brown[900],
							c.brown[700],
							c.brown[500],
							c.brown[300],
							c.brown[100],
						],
						[
							c.blueGrey[900],
							c.blueGrey[700],
							c.blueGrey[500],
							c.blueGrey[300],
							c.blueGrey[100],
						],
						['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF'],
					],
					styles: {},
				}),
				(t.default = (0, s.ColorWrap)(p));
		},
		802: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SwatchesGroup = void 0);
			var r = i(n(0)),
				o = i(n(395)),
				a = i(n(511)),
				l = i(n(803));
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var u = (t.SwatchesGroup = function(e) {
				var t = e.onClick,
					n = e.onSwatchHover,
					i = e.group,
					u = e.active,
					c = (0, o.default)({
						default: {
							group: {
								paddingBottom: '10px',
								width: '40px',
								float: 'left',
								marginRight: '10px',
							},
						},
					});
				return r.default.createElement(
					'div',
					{ style: c.group },
					(0, a.default)(i, function(e, o) {
						return r.default.createElement(l.default, {
							key: e,
							color: e,
							active: e.toLowerCase() === u,
							first: 0 === o,
							last: o === i.length - 1,
							onClick: t,
							onSwatchHover: n,
						});
					}),
				);
			});
			t.default = u;
		},
		803: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.SwatchesColor = void 0);
			var r = u(n(0)),
				o = u(n(395)),
				a = u(n(450)),
				l = n(399),
				i = u(n(804));
			function u(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var c = (t.SwatchesColor = function(e) {
				var t = e.color,
					n = e.onClick,
					u = void 0 === n ? function() {} : n,
					c = e.onSwatchHover,
					s = e.first,
					d = e.last,
					f = e.active,
					p = (0, o.default)(
						{
							default: {
								color: {
									width: '40px',
									height: '24px',
									cursor: 'pointer',
									background: t,
									marginBottom: '1px',
								},
								check: {
									color: a.default.getContrastingColor(t),
									marginLeft: '8px',
									display: 'none',
								},
							},
							first: {
								color: { overflow: 'hidden', borderRadius: '2px 2px 0 0' },
							},
							last: {
								color: { overflow: 'hidden', borderRadius: '0 0 2px 2px' },
							},
							active: { check: { display: 'block' } },
							'color-#FFFFFF': {
								color: { boxShadow: 'inset 0 0 0 1px #ddd' },
								check: { color: '#333' },
							},
							transparent: { check: { color: '#333' } },
						},
						{
							first: s,
							last: d,
							active: f,
							'color-#FFFFFF': '#FFFFFF' === t,
							transparent: 'transparent' === t,
						},
					);
				return r.default.createElement(
					l.Swatch,
					{
						color: t,
						style: p.color,
						onClick: u,
						onHover: c,
						focusStyle: { boxShadow: '0 0 4px ' + t },
					},
					r.default.createElement(
						'div',
						{ style: p.check },
						r.default.createElement(i.default, null),
					),
				);
			});
			t.default = c;
		},
		804: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 });
			var r,
				o =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					},
				a = n(0),
				l = (r = a) && r.__esModule ? r : { default: r };
			t.default = function(e) {
				var t = e.fill,
					n = void 0 === t ? 'currentColor' : t,
					r = e.width,
					a = void 0 === r ? 24 : r,
					i = e.height,
					u = void 0 === i ? 24 : i,
					c = e.style,
					s = void 0 === c ? {} : c,
					d = (function(e, t) {
						var n = {};
						for (var r in e)
							t.indexOf(r) >= 0 ||
								(Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
						return n;
					})(e, ['fill', 'width', 'height', 'style']);
				return l.default.createElement(
					'svg',
					o(
						{
							viewBox: '0 0 24 24',
							style: o({ fill: n, width: a, height: u }, s),
						},
						d,
					),
					l.default.createElement('path', {
						d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
					}),
				);
			};
		},
		805: function(e, t, n) {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				(t.Twitter = void 0);
			var r = s(n(0)),
				o = s(n(3)),
				a = s(n(395)),
				l = s(n(511)),
				i = s(n(430)),
				u = s(n(450)),
				c = n(399);
			function s(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var d = (t.Twitter = function(e) {
				var t = e.onChange,
					n = e.onSwatchHover,
					o = e.hex,
					s = e.colors,
					d = e.width,
					f = e.triangle,
					p = e.styles,
					h = void 0 === p ? {} : p,
					b = e.className,
					g = void 0 === b ? '' : b,
					v = (0, a.default)(
						(0, i.default)(
							{
								default: {
									card: {
										width: d,
										background: '#fff',
										border: '0 solid rgba(0,0,0,0.25)',
										boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
										borderRadius: '4px',
										position: 'relative',
									},
									body: { padding: '15px 9px 9px 15px' },
									label: { fontSize: '18px', color: '#fff' },
									triangle: {
										width: '0px',
										height: '0px',
										borderStyle: 'solid',
										borderWidth: '0 9px 10px 9px',
										borderColor: 'transparent transparent #fff transparent',
										position: 'absolute',
									},
									triangleShadow: {
										width: '0px',
										height: '0px',
										borderStyle: 'solid',
										borderWidth: '0 9px 10px 9px',
										borderColor:
											'transparent transparent rgba(0,0,0,.1) transparent',
										position: 'absolute',
									},
									hash: {
										background: '#F0F0F0',
										height: '30px',
										width: '30px',
										borderRadius: '4px 0 0 4px',
										float: 'left',
										color: '#98A1A4',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									},
									input: {
										width: '100px',
										fontSize: '14px',
										color: '#666',
										border: '0px',
										outline: 'none',
										height: '28px',
										boxShadow: 'inset 0 0 0 1px #F0F0F0',
										boxSizing: 'content-box',
										borderRadius: '0 4px 4px 0',
										float: 'left',
										paddingLeft: '8px',
									},
									swatch: {
										width: '30px',
										height: '30px',
										float: 'left',
										borderRadius: '4px',
										margin: '0 6px 6px 0',
									},
									clear: { clear: 'both' },
								},
								'hide-triangle': {
									triangle: { display: 'none' },
									triangleShadow: { display: 'none' },
								},
								'top-left-triangle': {
									triangle: { top: '-10px', left: '12px' },
									triangleShadow: { top: '-11px', left: '12px' },
								},
								'top-right-triangle': {
									triangle: { top: '-10px', right: '12px' },
									triangleShadow: { top: '-11px', right: '12px' },
								},
							},
							h,
						),
						{
							'hide-triangle': 'hide' === f,
							'top-left-triangle': 'top-left' === f,
							'top-right-triangle': 'top-right' === f,
						},
					),
					x = function(e, n) {
						u.default.isValidHex(e) && t({ hex: e, source: 'hex' }, n);
					};
				return r.default.createElement(
					'div',
					{ style: v.card, className: 'twitter-picker ' + g },
					r.default.createElement('div', { style: v.triangleShadow }),
					r.default.createElement('div', { style: v.triangle }),
					r.default.createElement(
						'div',
						{ style: v.body },
						(0, l.default)(s, function(e, t) {
							return r.default.createElement(c.Swatch, {
								key: t,
								color: e,
								hex: e,
								style: v.swatch,
								onClick: x,
								onHover: n,
								focusStyle: { boxShadow: '0 0 4px ' + e },
							});
						}),
						r.default.createElement('div', { style: v.hash }, '#'),
						r.default.createElement(c.EditableInput, {
							label: null,
							style: { input: v.input },
							value: o.replace('#', ''),
							onChange: x,
						}),
						r.default.createElement('div', { style: v.clear }),
					),
				);
			});
			(d.propTypes = {
				width: o.default.oneOfType([o.default.string, o.default.number]),
				triangle: o.default.oneOf(['hide', 'top-left', 'top-right']),
				colors: o.default.arrayOf(o.default.string),
				styles: o.default.object,
			}),
				(d.defaultProps = {
					width: 276,
					colors: [
						'#FF6900',
						'#FCB900',
						'#7BDCB5',
						'#00D084',
						'#8ED1FC',
						'#0693E3',
						'#ABB8C3',
						'#EB144C',
						'#F78DA7',
						'#9900EF',
					],
					triangle: 'top-left',
					styles: {},
				}),
				(t.default = (0, c.ColorWrap)(d));
		},
		915: function(e, t, n) {},
		916: function(e, t, n) {
			var r;
			window,
				(r = function(e, t, n, r, o) {
					return (function(e) {
						var t = {};
						function n(r) {
							if (t[r]) return t[r].exports;
							var o = (t[r] = { i: r, l: !1, exports: {} });
							return (
								e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
							);
						}
						return (
							(n.m = e),
							(n.c = t),
							(n.d = function(e, t, r) {
								n.o(e, t) ||
									Object.defineProperty(e, t, { enumerable: !0, get: r });
							}),
							(n.r = function(e) {
								'undefined' !== typeof Symbol &&
									Symbol.toStringTag &&
									Object.defineProperty(e, Symbol.toStringTag, {
										value: 'Module',
									}),
									Object.defineProperty(e, '__esModule', { value: !0 });
							}),
							(n.t = function(e, t) {
								if ((1 & t && (e = n(e)), 8 & t)) return e;
								if (4 & t && 'object' === typeof e && e && e.__esModule)
									return e;
								var r = Object.create(null);
								if (
									(n.r(r),
									Object.defineProperty(r, 'default', {
										enumerable: !0,
										value: e,
									}),
									2 & t && 'string' != typeof e)
								)
									for (var o in e)
										n.d(
											r,
											o,
											function(t) {
												return e[t];
											}.bind(null, o),
										);
								return r;
							}),
							(n.n = function(e) {
								var t =
									e && e.__esModule
										? function() {
												return e.default;
										  }
										: function() {
												return e;
										  };
								return n.d(t, 'a', t), t;
							}),
							(n.o = function(e, t) {
								return Object.prototype.hasOwnProperty.call(e, t);
							}),
							(n.p = '/'),
							n((n.s = 43))
						);
					})([
						function(e, t) {
							e.exports = function(e) {
								if (void 0 === e)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called",
									);
								return e;
							};
						},
						function(t, n) {
							t.exports = e;
						},
						function(e, t) {
							e.exports = function(e, t, n) {
								return (
									t in e
										? Object.defineProperty(e, t, {
												value: n,
												enumerable: !0,
												configurable: !0,
												writable: !0,
										  })
										: (e[t] = n),
									e
								);
							};
						},
						function(e, n) {
							e.exports = t;
						},
						function(e, t) {
							e.exports = n;
						},
						function(e, t, n) {
							var r = n(2);
							e.exports = function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {},
										o = Object.keys(n);
									'function' === typeof Object.getOwnPropertySymbols &&
										(o = o.concat(
											Object.getOwnPropertySymbols(n).filter(function(e) {
												return Object.getOwnPropertyDescriptor(n, e).enumerable;
											}),
										)),
										o.forEach(function(t) {
											r(e, t, n[t]);
										});
								}
								return e;
							};
						},
						function(e, t) {
							e.exports = r;
						},
						function(e, t, n) {
							'use strict';
							n.r(t),
								n.d(t, 'rebuildTableBlocks', function() {
									return g;
								}),
								n.d(t, 'rebuildTableNode', function() {
									return v;
								}),
								n.d(t, 'getCellCountForInsert', function() {
									return x;
								}),
								n.d(t, 'getCellsInsideRect', function() {
									return y;
								}),
								n.d(t, 'insertCell', function() {
									return m;
								}),
								n.d(t, 'insertCells', function() {
									return w;
								}),
								n.d(t, 'insertTable', function() {
									return C;
								}),
								n.d(t, 'removeTable', function() {
									return S;
								}),
								n.d(t, 'insertColumn', function() {
									return _;
								}),
								n.d(t, 'removeColumn', function() {
									return E;
								}),
								n.d(t, 'insertRow', function() {
									return k;
								}),
								n.d(t, 'removeRow', function() {
									return O;
								}),
								n.d(t, 'mergeCells', function() {
									return j;
								}),
								n.d(t, 'splitCell', function() {
									return M;
								});
							var r = n(13),
								o = n.n(r),
								a = n(5),
								l = n.n(a),
								i = n(3),
								u = n(4),
								c = n.n(u),
								s = n(6),
								d = function(e, t, n) {
									switch (n) {
										case '==':
											return e == t;
										case '>=':
											return e >= t;
										case '<=':
											return e <= t;
										case '>':
											return e > t;
										case '<':
											return e < t;
									}
								},
								f = function(e) {
									var t = (e = l()({ colSpan: 1, rowSpan: 1, text: '' }, e)),
										n = t.tableKey,
										r = t.key,
										o = t.colIndex,
										a = t.rowIndex,
										u = t.colSpan,
										s = t.rowSpan,
										d = t.text,
										f = t.isHead;
									return new i.ContentBlock({
										key: r || Object(i.genKey)(),
										type: 'table-cell',
										text: d,
										data: c.a.Map({
											tableKey: n,
											colIndex: o,
											rowIndex: a,
											colSpan: u,
											rowSpan: s,
											isHead: f,
										}),
										characterList: c.a.List(
											c.a.Repeat(i.CharacterMetadata.create(), d.length),
										),
									});
								},
								p = function() {
									var e = Object(i.genKey)();
									return [
										e,
										new i.ContentBlock({
											key: e,
											type: 'unstyled',
											text: '',
											data: c.a.Map({}),
											characterList: c.a.List([]),
										}),
									];
								},
								h = function(e, t, n, r, o) {
									var a = e.getBlockMap().toSeq(),
										l = a.takeUntil(function(e) {
											return e.getData().get('tableKey') === o;
										}),
										i = a
											.skipUntil(function(t, n) {
												var r = e.getKeyAfter(n);
												return (
													t.getData().get('tableKey') === o &&
													r &&
													e
														.getBlockForKey(r)
														.getData()
														.get('tableKey') !== o
												);
											})
											.rest();
									return e.merge({
										blockMap: l.concat(r, i).toOrderedMap(),
										selectionBefore: t,
										selectionAfter: t.merge({
											anchorKey: n,
											anchorOffset: 0,
											focusKey: n,
											focusOffset: 0,
											hasFocus: !1,
											isBackward: !1,
										}),
									});
								},
								b = function(e, t, n) {
									var r =
										arguments.length > 3 && void 0 !== arguments[3]
											? arguments[3]
											: '==';
									return e.filter(function(e) {
										return d(e.getData().get(t), n, r);
									});
								},
								g = function(e) {
									var t = {},
										n = [];
									return e.map(function(e) {
										var r = e.getData(),
											o = r.get('rowIndex'),
											a = r.get('colSpan') || 1,
											i = r.get('rowSpan') || 1;
										(n[o] = n[o] || 0), n[o]++;
										for (var u, s, d = n[o] - 1; t[o] && t[o][d]; d++, n[o]++);
										if (i > 1 || a > 1)
											for (u = o; u < o + i; u++)
												for (s = d; s < d + a; s++)
													(t[u] = t[u] || {}), (t[u][s] = !0);
										return e.merge({
											data: c.a.Map(l()({}, r.toJS(), { colIndex: d })),
										});
									});
								},
								v = function(e) {
									var t = Object(i.genKey)(),
										n = {};
									[].forEach.call(e.rows, function(e, r) {
										[].forEach.call(e.cells, function(e, o) {
											for (var a, l, i = o; n[r] && n[r][i]; i++);
											var u = e.rowSpan,
												c = e.colSpan;
											if (u > 1 || c > 1)
												for (a = r; a < r + u; a++)
													for (l = i; l < i + c; l++)
														(n[a] = n[a] || {}), (n[a][l] = !0);
											(e.innerHTML = e.innerHTML.replace(/\n\s*$/, '')),
												(e.dataset.tableKey = t),
												(e.dataset.colIndex = i),
												(e.dataset.rowIndex = r);
										});
									});
								},
								x = function(e, t) {
									return b(e, 'rowIndex', t).reduce(function(e, t) {
										return e + 1 * (t.getData().get('colSpan') || 1);
									}, 0);
								},
								y = function(e, t, n, r) {
									for (
										var a = o()(n, 2),
											l = a[0],
											i = a[1],
											u = o()(r, 2),
											s = u[0],
											d = u[1],
											f = Math.min(l, s),
											p = Math.max(l, s),
											h = Math.min(i, d),
											g = Math.max(i, d),
											v = [],
											x = f;
										x <= p;
										x++
									)
										for (var y = h; y <= g; y++) v.push([x, y]);
									if (0 === v.length) return c.a.OrderedMap([]);
									var m = e.getCurrentContent().getBlockMap(),
										w = b(m, 'tableKey', t),
										C = [],
										S = [],
										_ = c.a.List([]),
										E = c.a.List([]);
									return (
										w.forEach(function(e) {
											var t = e.getData(),
												n = e.getKey(),
												r = t.get('colIndex'),
												a = t.get('rowIndex'),
												l = t.get('colSpan'),
												i = t.get('rowSpan');
											v.forEach(function(t) {
												var u = o()(t, 2),
													c = u[0],
													s = u[1];
												r === c && a === s
													? (-1 === C.indexOf(n) &&
															(_ = _.push(e)) &&
															C.push(n),
													  (l > 1 || i > 1) &&
															-1 === S.indexOf(n) &&
															(E = E.push(e)) &&
															S.push(n))
													: (l > 1 || i > 1) &&
													  r <= c &&
													  r + l > c &&
													  a <= s &&
													  a + i > s &&
													  -1 === S.indexOf(n) &&
													  (E = E.push(e)) &&
													  S.push(n);
											});
										}),
										{
											cellBlocks: _.merge(E),
											cellKeys: C.concat(S),
											spannedCellBlocks: E,
											spannedCellBlockKeys: S,
										}
									);
								},
								m = function(e, t) {
									var n, r, o;
									t instanceof i.ContentBlock
										? ((n = t.getData().get('colIndex')),
										  (r = t.getData().get('rowIndex')),
										  (o = t))
										: ((n = t.colIndex), (r = t.rowIndex), (o = f(t)));
									var a = e.takeUntil(function(e) {
											var t = e.getData().get('rowIndex');
											return (
												(e.getData().get('colIndex') >= n && t === r) || t > r
											);
										}),
										l = e.skipUntil(function(e) {
											var t = e.getData().get('rowIndex');
											return (
												(e.getData().get('colIndex') >= n && t === r) || t > r
											);
										});
									return a.concat(c.a.OrderedMap([[o.getKey(), o]]).toSeq(), l);
								},
								w = function(e) {
									var t =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: [];
									return t.reduce(function(e, t) {
										return m(e, t);
									}, e);
								},
								C = function(e) {
									var t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: 3,
										n =
											arguments.length > 2 && void 0 !== arguments[2]
												? arguments[2]
												: 3;
									if (s.ContentUtils.selectionContainsStrictBlock(e)) return e;
									for (
										var r = e.getSelection(),
											o = e.getCurrentContent(),
											a = o.getBlockMap(),
											l = Object(i.genKey)(),
											u = [p()],
											d = 0;
										d < n;
										d++
									)
										for (var h = 0; h < t; h++) {
											var b = f({ tableKey: l, colIndex: h, rowIndex: d });
											u.push([b.getKey(), b]);
										}
									u.push(p());
									var g = r.getStartKey(),
										v = o.getBlockForKey(g),
										x = a.toSeq().takeUntil(function(e) {
											return e === v;
										}),
										y = a
											.toSeq()
											.skipUntil(function(e) {
												return e === v;
											})
											.rest(),
										m = c.a.OrderedMap(u).toSeq(),
										w = u[1][0],
										C = x
											.concat(c.a.OrderedMap([[g, v]]).toSeq(), m, y)
											.toOrderedMap(),
										S = o.merge({
											blockMap: C,
											selectionBefore: r,
											selectionAfter: r.merge({
												anchorKey: w,
												anchorOffset: r.getStartOffset(),
												focusKey: w,
												focusOffset: r.getStartOffset(),
												isBackward: !1,
											}),
										});
									return i.EditorState.push(e, S, 'insert-table');
								},
								S = function(e, t) {
									if (!t) return e;
									var n = e.getSelection(),
										r = e.getCurrentContent(),
										o = r.getBlockMap(),
										a = b(o, 'tableKey', t),
										l = o.filter(function(e) {
											return (
												'table-cell' !== e.getType() ||
												e.getData().get('tableKey') !== t
											);
										}),
										u = (
											(a.first() && r.getBlockBefore(a.first().getKey())) ||
											l.first()
										).getKey(),
										c = r.merge({
											blockMap: l,
											selectionBefore: n,
											selectionAfter: n.merge({
												anchorKey: u,
												anchorOffset: n.getStartOffset(),
												focusKey: u,
												focusOffset: n.getStartOffset(),
												isBackward: !1,
											}),
										});
									return i.EditorState.push(e, c, 'remove-table');
								},
								_ = function(e, t, n, r) {
									var o = e.getCurrentContent(),
										a = o.getBlockMap(),
										u = b(a, 'tableKey', t),
										s = [];
									if (0 === r)
										for (var d = 0; d < n; d++)
											s.push({
												text: '',
												colIndex: 0,
												rowIndex: d,
												colSpan: 1,
												rowSpan: 1,
												tableKey: t,
											});
									var f = u.map(function(e) {
										var n = e.getData().toJS(),
											o = n.colIndex,
											a = n.rowIndex,
											i = n.colSpan,
											u = n.rowSpan,
											d = o < r ? o : o + 1,
											f = o < r && i > 1 && o + i > r ? i + 1 : i,
											p = d !== o || f !== i;
										if ((1 === i && o === r - 1) || (i > 1 && o + i === r))
											for (var h = a; h < a + u; h++)
												s.push({
													text: '',
													colIndex: r,
													rowIndex: h,
													colSpan: 1,
													rowSpan: 1,
													tableKey: t,
												});
										return p
											? e.merge({
													data: c.a.Map(
														l()({}, n, { colIndex: d, colSpan: f }),
													),
											  })
											: e;
									});
									if (0 === s.length) return e;
									var p = (s[0].key = Object(i.genKey)()),
										g = h(o, e.getSelection(), p, w(f, s), t);
									return i.EditorState.push(e, g, 'insert-table-column');
								},
								E = function(e, t, n) {
									var r = e.getCurrentContent(),
										o = r.getBlockMap().toSeq(),
										a = b(o, 'tableKey', t),
										u = b(a, 'colIndex', n).reduce(function(e, n) {
											var r = n.getData().toJS(),
												o = r.colIndex,
												a = r.rowIndex,
												l = r.colSpan,
												i = r.rowSpan;
											return (
												l > 1 &&
													e.push({
														text: n.getText(),
														tableKey: t,
														colIndex: o,
														rowIndex: a,
														colSpan: l - 1,
														rowSpan: i,
													}),
												e
											);
										}, []),
										c = a
											.filter(function(e) {
												return 1 * e.getData().get('colIndex') !== n;
											})
											.map(function(e) {
												var t = e.getData().toJS(),
													r = t.colIndex,
													o = t.colSpan,
													a = r > n ? r - 1 : r,
													i = r < n && r + o > n ? o - 1 : o;
												return a !== r || i !== o
													? e.merge({
															data: l()({}, t, { colIndex: a, colSpan: i }),
													  })
													: e;
											}),
										s = (
											c.first() ||
											r.getBlockBefore(a.first().getKey()) ||
											r.getBlockAfter(a.first().getKey())
										).getKey(),
										d = h(r, e.getSelection(), s, w(c, u), t);
									return i.EditorState.push(e, d, 'remove-table-column');
								},
								k = function(e, t, n, r) {
									var o = e.getCurrentContent(),
										a = o.getBlockMap().toSeq(),
										u = b(a, 'tableKey', t),
										s = b(u, 'rowIndex', r, '<').map(function(e) {
											var t = e.getData().toJS(),
												n = t.rowIndex,
												o = t.rowSpan;
											if (n > r) return e;
											var a = o && n + o > r ? 1 * o + 1 : o;
											return e.merge({
												data: c.a.Map(l()({}, t, { rowSpan: a })),
											});
										}),
										d = b(u, 'rowIndex', r, '>=').map(function(e) {
											var t = e.getData().toJS();
											return e.merge({
												data: c.a.Map(
													l()({}, t, { rowIndex: 1 * t.rowIndex + 1 }),
												),
											});
										}),
										p = x(u, r),
										v = (function(e, t, n) {
											var r =
													arguments.length > 3 && void 0 !== arguments[3]
														? arguments[3]
														: '',
												o = c.a
													.Range(0, n)
													.map(function(n) {
														var o = f({
															tableKey: e,
															colIndex: n,
															rowIndex: t,
															text: 0 === n ? r : '',
														});
														return [o.getKey(), o];
													})
													.toArray();
											return c.a.OrderedMap(o).toSeq();
										})(t, r, p || n),
										y = v.first().getKey(),
										m = g(s.concat(v, d)),
										w = h(o, e.getSelection(), y, m, t);
									return i.EditorState.push(e, w, 'insert-table-row');
								},
								O = function(e, t, n) {
									var r = e.getCurrentContent(),
										o = r.getBlockMap().toSeq(),
										a = b(o, 'tableKey', t),
										u = b(a, 'rowIndex', n, '<').map(function(e) {
											var t = e.getData().toJS(),
												r = t.rowIndex,
												o = t.rowSpan;
											if (r > n) return e;
											var a = o && r + o > n ? 1 * o - 1 : o;
											return e.merge({
												data: c.a.Map(l()({}, t, { rowSpan: a })),
											});
										}),
										s = b(a, 'rowIndex', n, '>').map(function(e) {
											var t = e.getData().toJS();
											return e.merge({
												data: c.a.Map(
													l()({}, t, { rowIndex: 1 * t.rowIndex - 1 }),
												),
											});
										}),
										d = b(a, 'rowIndex', n).reduce(function(e, n) {
											var r = n.getData().toJS(),
												o = r.colIndex,
												a = r.rowIndex,
												l = r.colSpan,
												i = r.rowSpan;
											return (
												i > 1 &&
													e.push({
														text: n.getText(),
														tableKey: t,
														colIndex: o,
														rowIndex: a,
														colSpan: l,
														rowSpan: i - 1,
													}),
												e
											);
										}, []),
										f = (s.first() || u.last() || o.first()).getKey(),
										p = w(u.concat(s), d),
										g = h(r, e.getSelection(), f, p, t);
									return i.EditorState.push(e, g, 'remove-table-row');
								},
								j = function(e, t, n) {
									var r = e.getCurrentContent(),
										o = r.getBlockMap(),
										a = [],
										u = '',
										s = b(o, 'tableKey', t).filter(function(e) {
											return (
												!~n.indexOf(e.getKey()) ||
												((u += e.getText()),
												a.push(l()({ key: e.getKey() }, e.getData().toJS())),
												!1)
											);
										}),
										d = a.sort(function(e, t) {
											return (
												t.colIndex + t.rowIndex - (e.colIndex + e.rowIndex)
											);
										}),
										f = d.slice(-1)[0],
										p = d[0],
										g = r.getBlockForKey(f.key).merge({
											text: u,
											data: c.a.Map(
												l()({}, f, {
													colSpan: p.colIndex - f.colIndex + 1,
													rowSpan: p.rowIndex - f.rowIndex + 1,
												}),
											),
											characterList: c.a.List(
												c.a.Repeat(i.CharacterMetadata.create(), u.length),
											),
										}),
										v = h(r, e.getSelection(), f.key, m(s, g), t);
									return i.EditorState.push(e, v, 'merge-table-cell');
								},
								M = function(e, t, n) {
									var r = e.getCurrentContent(),
										o = r.getBlockMap(),
										a = [],
										u = b(o, 'tableKey', t).map(function(e) {
											if (e.getKey() === n) {
												var r = e.getData().toJS(),
													o = r.colIndex,
													i = r.rowIndex,
													u = r.colSpan,
													s = r.rowSpan;
												if (1 === u && 1 === s) return e;
												for (var d = o; d < o + u; d++)
													for (var f = i; f < i + s; f++)
														(d === o && f === i) ||
															a.push({
																text: '',
																tableKey: t,
																colIndex: d,
																rowIndex: f,
																colSpan: 1,
																rowSpan: 1,
															});
												return e.merge({
													data: c.a.Map(l()({}, r, { colSpan: 1, rowSpan: 1 })),
												});
											}
											return e;
										}),
										s = h(r, e.getSelection(), n, w(u, a), t);
									return i.EditorState.push(e, s, 'merge-table-cell');
								};
						},
						function(e, t) {
							e.exports = function(e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							};
						},
						function(e, t) {
							function n(e, t) {
								for (var n = 0; n < t.length; n++) {
									var r = t[n];
									(r.enumerable = r.enumerable || !1),
										(r.configurable = !0),
										'value' in r && (r.writable = !0),
										Object.defineProperty(e, r.key, r);
								}
							}
							e.exports = function(e, t, r) {
								return t && n(e.prototype, t), r && n(e, r), e;
							};
						},
						function(e, t, n) {
							var r = n(15),
								o = n(0);
							e.exports = function(e, t) {
								return !t || ('object' !== r(t) && 'function' !== typeof t)
									? o(e)
									: t;
							};
						},
						function(e, t) {
							function n(t) {
								return (
									(e.exports = n = Object.setPrototypeOf
										? Object.getPrototypeOf
										: function(e) {
												return e.__proto__ || Object.getPrototypeOf(e);
										  }),
									n(t)
								);
							}
							e.exports = n;
						},
						function(e, t, n) {
							var r = n(16);
							e.exports = function(e, t) {
								if ('function' !== typeof t && null !== t)
									throw new TypeError(
										'Super expression must either be null or a function',
									);
								(e.prototype = Object.create(t && t.prototype, {
									constructor: { value: e, writable: !0, configurable: !0 },
								})),
									t && r(e, t);
							};
						},
						function(e, t, n) {
							var r = n(19),
								o = n(20),
								a = n(21);
							e.exports = function(e, t) {
								return r(e) || o(e, t) || a();
							};
						},
						,
						function(e, t) {
							function n(e) {
								return (n =
									'function' === typeof Symbol &&
									'symbol' === typeof Symbol.iterator
										? function(e) {
												return typeof e;
										  }
										: function(e) {
												return e &&
													'function' === typeof Symbol &&
													e.constructor === Symbol &&
													e !== Symbol.prototype
													? 'symbol'
													: typeof e;
										  })(e);
							}
							function r(t) {
								return (
									'function' === typeof Symbol &&
									'symbol' === n(Symbol.iterator)
										? (e.exports = r = function(e) {
												return n(e);
										  })
										: (e.exports = r = function(e) {
												return e &&
													'function' === typeof Symbol &&
													e.constructor === Symbol &&
													e !== Symbol.prototype
													? 'symbol'
													: n(e);
										  }),
									r(t)
								);
							}
							e.exports = r;
						},
						function(e, t) {
							function n(t, r) {
								return (
									(e.exports = n =
										Object.setPrototypeOf ||
										function(e, t) {
											return (e.__proto__ = t), e;
										}),
									n(t, r)
								);
							}
							e.exports = n;
						},
						function(e, t, n) {
							'use strict';
							(function(e) {
								n.d(t, 'a', function() {
									return j;
								}),
									n.d(t, 'b', function() {
										return P;
									});
								var r = n(22),
									o = n.n(r),
									a = n(8),
									l = n.n(a),
									i = n(9),
									u = n.n(i),
									c = n(10),
									s = n.n(c),
									d = n(11),
									f = n.n(d),
									p = n(12),
									h = n.n(p),
									b = n(0),
									g = n.n(b),
									v = n(2),
									x = n.n(v),
									y = n(1),
									m = n.n(y),
									w = n(4),
									C = n.n(w),
									S = n(18),
									_ = n(7),
									E = n(28),
									k = n.n(E),
									O = function(e) {
										var t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: '';
										return isNaN(e)
											? !(t && e && e.target && e.target.dataset.role === t) &&
													!!(
														e &&
														e.currentTarget &&
														e.currentTarget.dataset.index
													) &&
													1 * e.currentTarget.dataset.index
											: 1 * e;
									},
									j = function(e) {
										var t = e.editorProps.language;
										return 'function' === typeof t
											? t(S.a, 'braft-table')
											: S.a[t] || S.a.zh;
									},
									M = (function(t) {
										function n(t) {
											var r;
											return (
												l()(this, n),
												(r = s()(this, f()(n).call(this, t))),
												x()(g()(g()(r)), 'state', {
													tableRows: [],
													colToolHandlers: [],
													rowToolHandlers: [],
													defaultColWidth: 0,
													colResizing: !1,
													colResizeOffset: 0,
													selectedCells: [],
													selectedRowIndex: -1,
													selectedColumnIndex: -1,
													setFirstRowAsHead: !1,
													dragSelecting: !1,
													draggingRectBounding: null,
													cellsMergeable: !1,
													cellSplittable: !1,
													contextMenuPosition: null,
												}),
												x()(g()(g()(r)), '__tableRef', null),
												x()(g()(g()(r)), '__colRefs', {}),
												x()(g()(g()(r)), '__rowRefs', {}),
												x()(g()(g()(r)), '__colResizeIndex', 0),
												x()(g()(g()(r)), '__colResizeStartAt', 0),
												x()(g()(g()(r)), '__startCellKey', null),
												x()(g()(g()(r)), '__endCellKey', null),
												x()(g()(g()(r)), '__dragSelecting', !1),
												x()(g()(g()(r)), '__dragSelected', !1),
												x()(
													g()(g()(r)),
													'__dragSelectingStartColumnIndex',
													null,
												),
												x()(g()(g()(r)), '__dragSelectingStartRowIndex', null),
												x()(g()(g()(r)), '__dragSelectingEndColumnIndex', null),
												x()(g()(g()(r)), '__dragSelectingEndRowIndex', null),
												x()(g()(g()(r)), '__draggingRectBoundingUpdating', !1),
												x()(g()(g()(r)), '__selectedCellsCleared', !1),
												x()(g()(g()(r)), 'handleToolbarMouseDown', function(e) {
													e.preventDefault();
												}),
												x()(g()(g()(r)), 'handleKeyDown', function(e) {
													if (8 === e.keyCode) {
														var t = r.state,
															n = t.selectedColumnIndex,
															o = t.selectedRowIndex;
														n > -1
															? (r.removeColumn(), e.preventDefault())
															: o > -1 && (r.removeRow(), e.preventDefault());
													}
												}),
												x()(g()(g()(r)), 'handleMouseUp', function(e) {
													if (0 !== e.button) return !1;
													if (r.state.colResizing) {
														var t = r.state,
															n = t.defaultColWidth,
															a = t.colToolHandlers,
															l = t.colResizeOffset,
															i = o()(a);
														(i[r.__colResizeIndex - 1].width =
															(i[r.__colResizeIndex - 1].width || n) + l),
															(i[r.__colResizeIndex].width =
																(i[r.__colResizeIndex].width || n) - l),
															(r.__colResizeIndex = 0),
															(r.__colResizeStartAt = 0),
															r.setState({
																contextMenuPosition: null,
																colToolHandlers: i,
																colResizeOffset: 0,
																colResizing: !1,
															});
													} else r.setState({ contextMenuPosition: null });
												}),
												x()(g()(g()(r)), 'handleMouseMove', function(e) {
													r.state.colResizing &&
														r.setState({
															colResizeOffset: r.getResizeOffset(
																e.clientX - r.__colResizeStartAt,
															),
														});
												}),
												x()(g()(g()(r)), 'handleColResizerMouseDown', function(
													e,
												) {
													(r.__colResizeIndex =
														1 * e.currentTarget.dataset.index),
														(r.__colResizeStartAt = e.clientX),
														r.setState({ colResizing: !0 });
												}),
												x()(g()(g()(r)), 'handleCellContexrMenu', function(e) {
													var t = r.state.selectedCells,
														n = e.currentTarget.dataset.cellKey;
													~t.indexOf(n) || r.selectCell(e);
													var o = r.__tableRef.getBoundingClientRect(),
														a = o.top,
														l = o.left,
														i = o.width,
														u = e.clientY - a + 15,
														c = e.clientX - l + 10;
													c + 150 > i && (c = i - 150),
														r.setState({
															contextMenuPosition: { top: u, left: c },
														}),
														e.preventDefault();
												}),
												x()(
													g()(g()(r)),
													'handleContextMenuContextMenu',
													function(e) {
														e.preventDefault();
													},
												),
												x()(g()(g()(r)), 'handleCellMouseDown', function(e) {
													(r.__dragSelecting = !0),
														(r.__dragSelectingStartColumnIndex =
															e.currentTarget.dataset.colIndex),
														(r.__dragSelectingStartRowIndex =
															e.currentTarget.dataset.rowIndex),
														(r.__draggingStartPoint = {
															x: e.clientX,
															y: e.clientY,
														}),
														r.setState({ dragSelecting: !0 });
												}),
												x()(g()(g()(r)), 'handleCellMouseUp', function() {
													(r.__dragSelecting = !1),
														(r.__dragSelected = !1),
														(r.__dragSelectingStartColumnIndex = null),
														(r.__dragSelectingStartRowIndex = null),
														(r.__dragSelectingEndColumnIndex = null),
														(r.__dragSelectingEndRowIndex = null),
														r.setState({
															dragSelecting: !1,
															draggingRectBounding: null,
														});
												}),
												x()(g()(g()(r)), 'handleCellMouseEnter', function(e) {
													r.__dragSelecting &&
														((r.__dragSelectingEndColumnIndex =
															e.currentTarget.dataset.colIndex),
														(r.__dragSelectingEndRowIndex =
															e.currentTarget.dataset.rowIndex),
														r.__dragSelectingEndColumnIndex !==
															r.__dragSelectingStartColumnIndex ||
														r.__dragSelectingEndRowIndex !==
															r.__dragSelectingStartRowIndex
															? ((r.__dragSelected = !0), e.preventDefault())
															: (r.__dragSelected = !1),
														r.confirmDragSelecting());
												}),
												x()(g()(g()(r)), 'handleTableMouseMove', function(e) {
													r.__dragSelecting &&
														r.__dragSelected &&
														(r.updateDraggingRectBounding(e),
														e.preventDefault());
												}),
												x()(g()(g()(r)), 'handleTableMouseLeave', function(e) {
													r.__dragSelecting &&
														e.currentTarget &&
														'table' === e.currentTarget.dataset.role &&
														r.handleCellMouseUp(),
														e.preventDefault();
												}),
												x()(g()(g()(r)), 'confirmDragSelecting', function() {
													if (
														!r.__dragSelectingStartColumnIndex ||
														!r.__dragSelectingStartRowIndex ||
														!r.__dragSelectingEndColumnIndex ||
														!r.__dragSelectingEndRowIndex
													)
														return !1;
													var e = _.getCellsInsideRect(
															r.props.editorState,
															r.tableKey,
															[
																r.__dragSelectingStartColumnIndex,
																r.__dragSelectingStartRowIndex,
															],
															[
																r.__dragSelectingEndColumnIndex,
																r.__dragSelectingEndRowIndex,
															],
														),
														t = e.cellKeys,
														n = e.spannedCellBlockKeys;
													if (t.length < 2) return !1;
													r.setState(
														{
															selectedColumnIndex: -1,
															selectedRowIndex: -1,
															cellsMergeable: 0 === n.length,
															cellSplittable: !1,
															selectedCells: t,
														},
														r.renderCells,
													);
												}),
												x()(g()(g()(r)), 'updateDraggingRectBounding', function(
													e,
												) {
													if (
														r.__draggingRectBoundingUpdating ||
														!r.__dragSelecting
													)
														return !1;
													r.__draggingRectBoundingUpdating = !0;
													var t = r.__tableRef.getBoundingClientRect(),
														n = r.__draggingStartPoint,
														o = n.x,
														a = n.y,
														l = e.clientX,
														i = e.clientY,
														u = {};
													l <= o
														? (u.right = t.left + t.width - o)
														: (u.left = o - t.left + 9),
														i <= a
															? (u.bottom = t.top + t.height - a)
															: (u.top = a - t.top + 9),
														(u.width = Math.abs(l - o)),
														(u.height = Math.abs(i - a)),
														r.setState({ draggingRectBounding: u }, function() {
															setTimeout(function() {
																r.__draggingRectBoundingUpdating = !1;
															}, 100);
														});
												}),
												x()(g()(g()(r)), 'selectCell', function(e) {
													var t = r.state.selectedCells,
														n = e.currentTarget.dataset.cellKey,
														o = e.currentTarget,
														a = o.colSpan,
														l = o.rowSpan,
														i = ~t.indexOf(n) ? [] : [n],
														u = i.length && (a > 1 || l > 1);
													r.setState(
														{
															selectedCells: i,
															cellSplittable: u,
															cellsMergeable: !1,
															selectedRowIndex: -1,
															selectedColumnIndex: -1,
														},
														r.renderCells,
													);
												}),
												x()(g()(g()(r)), 'selectColumn', function(e) {
													var t = O(e, 'insert-column');
													if (!1 === t) return !1;
													if (r.state.selectedColumnIndex === t)
														return (
															r.setState(
																{
																	selectedCells: [],
																	cellsMergeable: !1,
																	cellSplittable: !1,
																	selectedColumnIndex: -1,
																},
																r.renderCells,
															),
															!1
														);
													var n = _.getCellsInsideRect(
															r.props.editorState,
															r.tableKey,
															[t, 0],
															[t, r.state.rowToolHandlers.length - 1],
														),
														o = n.cellKeys,
														a = n.spannedCellBlockKeys;
													r.setState(
														{
															selectedColumnIndex: t,
															selectedRowIndex: -1,
															cellSplittable: !1,
															cellsMergeable: 0 === a.length,
															selectedCells: o,
														},
														r.renderCells,
													);
												}),
												x()(g()(g()(r)), 'selectRow', function(e) {
													var t = O(e, 'insert-row');
													if (!1 === t) return !1;
													if (r.state.selectedRowIndex === t)
														return (
															r.setState(
																{
																	selectedCells: [],
																	cellsMergeable: !1,
																	cellSplittable: !1,
																	selectedRowIndex: -1,
																},
																r.renderCells,
															),
															!1
														);
													var n = _.getCellsInsideRect(
															r.props.editorState,
															r.tableKey,
															[0, t],
															[r.state.colToolHandlers.length, t],
														),
														o = n.cellKeys,
														a = n.spannedCellBlockKeys;
													r.setState(
														{
															selectedColumnIndex: -1,
															selectedRowIndex: t,
															cellSplittable: !1,
															cellsMergeable: 0 === a.length,
															selectedCells: o,
														},
														r.renderCells,
													);
												}),
												x()(g()(g()(r)), 'insertColumn', function(e) {
													var t = O(e);
													if (!1 === t) return !1;
													r.setState(
														{
															selectedCells: [],
															selectedRowIndex: -1,
															selectedColumnIndex: -1,
														},
														function() {
															r.props.editor.setValue(
																_.insertColumn(
																	r.props.editorState,
																	r.tableKey,
																	r.state.tableRows.length,
																	t,
																),
															);
														},
													);
												}),
												x()(g()(g()(r)), 'removeColumn', function() {
													var t = r.state.selectedColumnIndex;
													t >= 0 &&
														r.setState({ selectedColumnIndex: -1 }, function() {
															r.props.editor.draftInstance.blur(),
																e(function() {
																	var e = _.removeColumn(
																		r.props.editorState,
																		r.tableKey,
																		t,
																	);
																	r.props.editor.setValue(r.validateContent(e));
																});
														});
												}),
												x()(g()(g()(r)), 'insertRow', function(e) {
													var t = O(e);
													if (!1 === t) return !1;
													r.setState(
														{
															selectedCells: [],
															selectedRowIndex: -1,
															selectedColumnIndex: -1,
														},
														function() {
															r.props.editor.setValue(
																_.insertRow(
																	r.props.editorState,
																	r.tableKey,
																	r.colLength,
																	t,
																),
															);
														},
													);
												}),
												x()(g()(g()(r)), 'validateContent', function(e) {
													return e.toRAW(!0).blocks.length
														? e
														: k.a.createEditorState(null);
												}),
												x()(g()(g()(r)), 'removeRow', function() {
													var t = r.state.selectedRowIndex;
													t >= 0 &&
														r.setState({ selectedRowIndex: -1 }, function() {
															r.props.editor.draftInstance.blur(),
																e(function() {
																	var e = _.removeRow(
																		r.props.editorState,
																		r.tableKey,
																		t,
																	);
																	r.props.editor.setValue(r.validateContent(e));
																});
														});
												}),
												x()(g()(g()(r)), 'mergeCells', function() {
													var e = r.state,
														t = e.selectedCells;
													e.cellsMergeable &&
														t.length > 1 &&
														r.setState(
															{
																selectedCells: [t[0]],
																cellSplittable: !0,
																cellsMergeable: !1,
																selectedRowIndex: -1,
																selectedColumnIndex: -1,
															},
															function() {
																r.props.editor.setValue(
																	_.mergeCells(
																		r.props.editorState,
																		r.tableKey,
																		t,
																	),
																);
															},
														);
												}),
												x()(g()(g()(r)), 'splitCell', function() {
													var e = r.state,
														t = e.selectedCells;
													e.cellSplittable &&
														1 === t.length &&
														r.setState(
															{
																cellSplittable: !1,
																cellsMergeable: !1,
																selectedRowIndex: -1,
																selectedColumnIndex: -1,
															},
															function() {
																r.props.editor.setValue(
																	_.splitCell(
																		r.props.editorState,
																		r.tableKey,
																		t[0],
																	),
																);
															},
														);
												}),
												x()(g()(g()(r)), 'removeTable', function() {
													r.props.editor.setValue(
														_.removeTable(r.props.editorState, r.tableKey),
													);
												}),
												(r.language = j(t.editor)),
												r
											);
										}
										return (
											h()(n, t),
											u()(n, [
												{
													key: 'componentDidMount',
													value: function() {
														this.renderCells(this.props),
															document.body.addEventListener(
																'keydown',
																this.handleKeyDown,
																!1,
															),
															document.body.addEventListener(
																'mousemove',
																this.handleMouseMove,
																!1,
															),
															document.body.addEventListener(
																'mouseup',
																this.handleMouseUp,
																!1,
															);
													},
												},
												{
													key: 'componentWillReceiveProps',
													value: function(e) {
														this.renderCells(e);
													},
												},
												{
													key: 'componentWillUnmount',
													value: function() {
														document.body.removeEventListener(
															'keydown',
															this.handleKeyDown,
															!1,
														),
															document.body.removeEventListener(
																'mousemove',
																this.handleMouseMove,
																!1,
															),
															document.body.removeEventListener(
																'mouseup',
																this.handleMouseUp,
																!1,
															);
													},
												},
												{
													key: 'getResizeOffset',
													value: function(e) {
														var t,
															n,
															r = this.state,
															o = r.colToolHandlers,
															a = r.defaultColWidth;
														return (e =
															(e =
																e <
																(t =
																	-1 *
																	((o[this.__colResizeIndex - 1].width || a) -
																		30))
																	? t
																	: e) >
															(n = (o[this.__colResizeIndex].width || a) - 30)
																? n
																: e);
													},
												},
												{
													key: 'adjustToolbarHandlers',
													value: function() {
														var e = this,
															t = !1,
															n = o()(this.state.rowToolHandlers);
														Object.keys(this.__rowRefs).forEach(function(r) {
															var o = e.__rowRefs[r]
																? e.__rowRefs[r].getBoundingClientRect().height
																: 40;
															n[r] &&
																n[r].height !== o &&
																((t = !0), (n[r].height = o));
														}),
															t && this.setState({ rowToolHandlers: n });
													},
												},
												{
													key: 'renderCells',
													value: function(e) {
														var t = this;
														(e = e || this.props), (this.colLength = 0);
														var n = [],
															r = [],
															o = [],
															a = e,
															l = a.editorState,
															i = a.children;
														(this.__startCellKey = i[0].key),
															(this.__endCellKey = i[i.length - 1].key),
															i.forEach(function(e, a) {
																var i = l
																		.getCurrentContent()
																		.getBlockForKey(e.key)
																		.getData(),
																	u = i.get('tableKey'),
																	c = 1 * i.get('colIndex'),
																	s = 1 * i.get('rowIndex'),
																	d = i.get('colSpan'),
																	f = i.get('rowSpan');
																if (((t.tableKey = u), 0 === s)) {
																	for (
																		var p = 1 * (i.get('colSpan') || 1),
																			h = t.colLength;
																		h < t.colLength + p;
																		h++
																	)
																		r[h] = { key: e.key, width: 0 };
																	t.colLength += p;
																}
																for (
																	var b = m.a.cloneElement(e, {
																			'data-active': !!~t.state.selectedCells.indexOf(
																				e.key,
																			),
																			'data-row-index': s,
																			'data-col-index':
																				c || (n[s] || []).length,
																			'data-cell-index': a,
																			'data-cell-key': e.key,
																			'data-table-key': u,
																			className: 'bf-table-cell '.concat(
																				e.props.className,
																			),
																			colSpan: d,
																			rowSpan: f,
																			onClick: t.selectCell,
																			onContextMenu: t.handleCellContexrMenu,
																			onMouseDown: t.handleCellMouseDown,
																			onMouseUp: t.handleCellMouseUp,
																			onMouseEnter: t.handleCellMouseEnter,
																		}),
																		g = s;
																	g < s + f;
																	g++
																)
																	(o[g] = { key: e.key, height: 0 }),
																		(n[g] = n[g] || []);
																n[s] ? n[s].push(b) : (n[s] = [b]);
															});
														var u =
															this.__tableRef.getBoundingClientRect().width /
															this.colLength;
														this.setState(
															{
																tableRows: n,
																colToolHandlers: r,
																rowToolHandlers: o,
																defaultColWidth: u,
															},
															this.adjustToolbarHandlers,
														);
													},
												},
												{
													key: 'createColGroup',
													value: function() {
														var e = this;
														return m.a.createElement(
															'colgroup',
															null,
															this.state.colToolHandlers.map(function(t, n) {
																return m.a.createElement('col', {
																	ref: function(t) {
																		return (e.__colRefs[n] = t);
																	},
																	width: t.width || e.state.defaultColWidth,
																	key: n,
																});
															}),
														);
													},
												},
												{
													key: 'createColTools',
													value: function() {
														var e = this,
															t = this.state,
															n = t.colResizing,
															r = t.colToolHandlers,
															o = t.selectedColumnIndex,
															a = t.defaultColWidth;
														return m.a.createElement(
															'div',
															{
																'data-active': o >= 0,
																contentEditable: !1,
																'data-key': 'bf-col-toolbar',
																className: 'bf-table-col-tools'.concat(
																	n ? ' resizing' : '',
																),
																onMouseDown: this.handleToolbarMouseDown,
															},
															r.map(function(t, n) {
																return m.a.createElement(
																	'div',
																	{
																		key: n,
																		'data-key': t.key,
																		'data-index': n,
																		'data-active': o == n,
																		className: 'bf-col-tool-handler',
																		style: { width: t.width || a },
																		onClick: e.selectColumn,
																	},
																	m.a.createElement(
																		'div',
																		{ className: 'bf-col-tool-left' },
																		m.a.createElement(
																			'div',
																			{
																				'data-index': n,
																				'data-role': 'insert-column',
																				className: 'bf-insert-col-before',
																				onClick: e.insertColumn,
																			},
																			m.a.createElement('i', {
																				className: 'bfi-add',
																			}),
																		),
																	),
																	m.a.createElement(
																		'div',
																		{ className: 'bf-col-tool-center' },
																		m.a.createElement(
																			'div',
																			{
																				'data-index': n,
																				'data-role': 'remove-col',
																				className: 'bf-remove-col',
																				onClick: e.removeColumn,
																			},
																			m.a.createElement('i', {
																				className: 'bfi-bin',
																			}),
																		),
																	),
																	m.a.createElement(
																		'div',
																		{ className: 'bf-col-tool-right' },
																		m.a.createElement(
																			'div',
																			{
																				'data-index': n + 1,
																				'data-role': 'insert-column',
																				className: 'bf-insert-col-after',
																				onClick: e.insertColumn,
																			},
																			m.a.createElement('i', {
																				className: 'bfi-add',
																			}),
																		),
																	),
																);
															}),
														);
													},
												},
												{
													key: 'createRowTools',
													value: function() {
														var e = this,
															t = this.state,
															n = t.rowToolHandlers,
															r = t.selectedRowIndex;
														return m.a.createElement(
															'div',
															{
																'data-active': r >= 0,
																contentEditable: !1,
																className: 'bf-table-row-tools',
																onMouseDown: this.handleToolbarMouseDown,
															},
															n.map(function(t, n) {
																return m.a.createElement(
																	'div',
																	{
																		key: n,
																		'data-key': t.key,
																		'data-index': n,
																		'data-active': r == n,
																		className: 'bf-row-tool-handler',
																		style: { height: t.height },
																		onClick: e.selectRow,
																	},
																	m.a.createElement(
																		'div',
																		{ className: 'bf-row-tool-up' },
																		m.a.createElement(
																			'div',
																			{
																				'data-index': n,
																				'data-role': 'insert-row',
																				className: 'bf-insert-row-before',
																				onClick: e.insertRow,
																			},
																			m.a.createElement('i', {
																				className: 'bfi-add',
																			}),
																		),
																	),
																	m.a.createElement(
																		'div',
																		{ className: 'bf-row-tool-center' },
																		m.a.createElement(
																			'div',
																			{
																				'data-index': n,
																				'data-role': 'remove-row',
																				className: 'bf-remove-row',
																				onClick: e.removeRow,
																			},
																			m.a.createElement('i', {
																				className: 'bfi-bin',
																			}),
																		),
																	),
																	m.a.createElement(
																		'div',
																		{ className: 'bf-row-tool-down' },
																		m.a.createElement(
																			'div',
																			{
																				'data-index': n + 1,
																				'data-role': 'insert-row',
																				className: 'bf-insert-row-after',
																				onClick: e.insertRow,
																			},
																			m.a.createElement('i', {
																				className: 'bfi-add',
																			}),
																		),
																	),
																);
															}),
														);
													},
												},
												{
													key: 'createContextMenu',
													value: function() {
														var e = this.state,
															t = e.cellsMergeable,
															n = e.cellSplittable,
															r = e.contextMenuPosition;
														return r
															? m.a.createElement(
																	'div',
																	{
																		className: 'bf-table-context-menu',
																		onContextMenu: this
																			.handleContextMenuContextMenu,
																		contentEditable: !1,
																		style: r,
																	},
																	m.a.createElement(
																		'div',
																		{
																			className: 'context-menu-item',
																			onMouseDown: this.mergeCells,
																			'data-disabled': !t,
																		},
																		this.language.mergeCells,
																	),
																	m.a.createElement(
																		'div',
																		{
																			className: 'context-menu-item',
																			onMouseDown: this.splitCell,
																			'data-disabled': !n,
																		},
																		this.language.splitCell,
																	),
																	m.a.createElement(
																		'div',
																		{
																			className: 'context-menu-item',
																			onMouseDown: this.removeTable,
																		},
																		this.language.removeTable,
																	),
															  )
															: null;
													},
												},
												{
													key: 'render',
													value: function() {
														var e = this,
															t = this.state,
															n = t.tableRows,
															r = t.dragSelecting,
															o = t.draggingRectBounding,
															a = this.props.editor.props.readOnly;
														return m.a.createElement(
															'div',
															{ className: 'bf-table-container' },
															m.a.createElement(
																'table',
																{
																	'data-role': 'table',
																	className: 'bf-table'.concat(
																		r ? ' dragging' : '',
																	),
																	ref: function(t) {
																		return (e.__tableRef = t);
																	},
																	onMouseDown: this.handleTableMouseDown,
																	onMouseUp: this.hanldeTableMouseUp,
																	onMouseMove: this.handleTableMouseMove,
																	onMouseLeave: this.handleTableMouseLeave,
																},
																this.createColGroup(),
																m.a.createElement(
																	'tbody',
																	null,
																	n.map(function(t, n) {
																		return m.a.createElement(
																			'tr',
																			{
																				ref: function(t) {
																					return (e.__rowRefs[n] = t);
																				},
																				key: n,
																			},
																			t,
																		);
																	}),
																),
															),
															r
																? m.a.createElement('div', {
																		className: 'dragging-rect',
																		style: o,
																  })
																: null,
															!a && this.createContextMenu(),
															!a && this.createColTools(),
															!a && this.createRowTools(),
														);
													},
												},
											]),
											n
										);
									})(m.a.Component),
									P = function(e) {
										return C.a.Map({
											'table-cell': {
												element: 'td',
												wrapper: m.a.createElement(M, {
													editor: e.editor,
													editorState: e.editorState,
												}),
											},
										});
									};
							}.call(this, n(36).setImmediate));
						},
						function(e, t, n) {
							'use strict';
							t.a = {
								zh: {
									rows: '\u884c\u6570',
									columns: '\u5217\u6570',
									cancel: '\u53d6\u6d88',
									insertTable: '\u63d2\u5165',
									removeTable: '\u5220\u9664\u8868\u683c',
									insertColumn: '\u63d2\u5165\u5217',
									removeColumn: '\u5220\u9664\u5217',
									insertRow: '\u63d2\u5165\u884c',
									removeRow: '\u5220\u9664\u884c',
									mergeCells: '\u5408\u5e76\u5355\u5143\u683c',
									splitCell: '\u62c6\u5206\u5355\u5143\u683c',
								},
								zhHant: {
									rows: '\u884c\u6570',
									columns: '\u5217\u6570',
									cancel: '\u53d6\u6d88',
									insertTable: '\u63d2\u5165',
									removeTable: '\u5220\u9664\u8868\u683c',
									insertColumn: '\u63d2\u5165\u5217',
									removeColumn: '\u5220\u9664\u5217',
									insertRow: '\u63d2\u5165\u884c',
									removeRow: '\u5220\u9664\u884c',
									mergeCells: '\u5408\u5e76\u5355\u5143\u683c',
									splitCell: '\u62c6\u5206\u5355\u5143\u683c',
								},
								en: {
									rows: 'Rows',
									columns: 'Columns',
									cancel: 'Cancel',
									insertTable: 'Insert',
									removeTable: 'Remove Table',
									insertColumn: 'Insert Column',
									removeColumn: 'Remove Column',
									insertRow: 'Insert Row',
									removeRow: 'Remove Row',
									mergeCells: 'Merge Cells',
									splitCell: 'Split Cell',
								},
								pl: {
									rows: 'Wiersz',
									columns: 'Kolumn\u0119',
									cancel: 'Anuluj',
									insertTable: 'Wstaw',
									removeTable: 'Usu\u0144 tabel\u0119',
									insertColumn: 'Wstaw kolumn\u0119',
									removeColumn: 'Usu\u0144 kolumn\u0119',
									insertRow: 'Wstaw wiersz',
									removeRow: 'Usu\u0144 wiersz',
									mergeCells: 'Scal kom\xf3rki',
									splitCell: 'Podziel kom\xf3rk\u0119',
								},
								jpn: {
									rows: '\u884c\u6570',
									columns: '\u5217\u6570',
									cancel: '\u30ad\u30e3\u30f3\u30bb\u30eb',
									insertTable: '\u633f\u5165\u3059\u308b',
									removeTable: '\u30d5\u30a9\u30fc\u30e0\u3092\u524a\u9664',
									insertColumn: '\u5217\u3092\u633f\u5165',
									removeColumn: '\u5217\u3092\u524a\u9664',
									insertRow: '\u884c\u3092\u633f\u5165',
									removeRow: '\u884c\u3092\u524a\u9664',
									mergeCells: '\u30bb\u30eb\u3092\u7d50\u5408',
									splitCell: '\u5206\u5272\u30bb\u30eb',
								},
								kr: {
									rows: '\ud589\uc218',
									columns: '\uc5f4\uc218',
									cancel: '\ucde8\uc18c',
									insertTable: '\uc0bd\uc785',
									removeTable: '\uc591\uc2dd\uc0ad\uc81c',
									insertColumn: '\uc5f4\uc0bd\uc785',
									removeColumn: '\uc5f4\uc0ad\uc81c',
									insertRow: '\ud589\uc0bd\uc785',
									removeRow: '\ud589\uc0ad\uc81c',
									mergeCells: '\ud589\uc0bd\uc785',
									splitCell: '\uc140\ubd84\ud560',
								},
							};
						},
						function(e, t) {
							e.exports = function(e) {
								if (Array.isArray(e)) return e;
							};
						},
						function(e, t) {
							e.exports = function(e, t) {
								var n = [],
									r = !0,
									o = !1,
									a = void 0;
								try {
									for (
										var l, i = e[Symbol.iterator]();
										!(r = (l = i.next()).done) &&
										(n.push(l.value), !t || n.length !== t);
										r = !0
									);
								} catch (u) {
									(o = !0), (a = u);
								} finally {
									try {
										r || null == i.return || i.return();
									} finally {
										if (o) throw a;
									}
								}
								return n;
							};
						},
						function(e, t) {
							e.exports = function() {
								throw new TypeError(
									'Invalid attempt to destructure non-iterable instance',
								);
							};
						},
						function(e, t, n) {
							var r = n(39),
								o = n(40),
								a = n(41);
							e.exports = function(e) {
								return r(e) || o(e) || a();
							};
						},
						function(e, t) {
							var n;
							n = (function() {
								return this;
							})();
							try {
								n = n || Function('return this')() || (0, eval)('this');
							} catch (r) {
								'object' === typeof window && (n = window);
							}
							e.exports = n;
						},
						,
						,
						,
						,
						function(e, t) {
							e.exports = o;
						},
						,
						,
						,
						,
						,
						,
						,
						function(e, t, n) {
							(function(e) {
								var r =
										('undefined' !== typeof e && e) ||
										('undefined' !== typeof self && self) ||
										window,
									o = Function.prototype.apply;
								function a(e, t) {
									(this._id = e), (this._clearFn = t);
								}
								(t.setTimeout = function() {
									return new a(o.call(setTimeout, r, arguments), clearTimeout);
								}),
									(t.setInterval = function() {
										return new a(
											o.call(setInterval, r, arguments),
											clearInterval,
										);
									}),
									(t.clearTimeout = t.clearInterval = function(e) {
										e && e.close();
									}),
									(a.prototype.unref = a.prototype.ref = function() {}),
									(a.prototype.close = function() {
										this._clearFn.call(r, this._id);
									}),
									(t.enroll = function(e, t) {
										clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
									}),
									(t.unenroll = function(e) {
										clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
									}),
									(t._unrefActive = t.active = function(e) {
										clearTimeout(e._idleTimeoutId);
										var t = e._idleTimeout;
										t >= 0 &&
											(e._idleTimeoutId = setTimeout(function() {
												e._onTimeout && e._onTimeout();
											}, t));
									}),
									n(37),
									(t.setImmediate =
										('undefined' !== typeof self && self.setImmediate) ||
										('undefined' !== typeof e && e.setImmediate) ||
										(this && this.setImmediate)),
									(t.clearImmediate =
										('undefined' !== typeof self && self.clearImmediate) ||
										('undefined' !== typeof e && e.clearImmediate) ||
										(this && this.clearImmediate));
							}.call(this, n(23)));
						},
						function(e, t, n) {
							(function(e, t) {
								!(function(e, n) {
									'use strict';
									if (!e.setImmediate) {
										var r,
											o = 1,
											a = {},
											l = !1,
											i = e.document,
											u = Object.getPrototypeOf && Object.getPrototypeOf(e);
										(u = u && u.setTimeout ? u : e),
											'[object process]' === {}.toString.call(e.process)
												? (r = function(e) {
														t.nextTick(function() {
															s(e);
														});
												  })
												: (function() {
														if (e.postMessage && !e.importScripts) {
															var t = !0,
																n = e.onmessage;
															return (
																(e.onmessage = function() {
																	t = !1;
																}),
																e.postMessage('', '*'),
																(e.onmessage = n),
																t
															);
														}
												  })()
												? (function() {
														var t = 'setImmediate$' + Math.random() + '$',
															n = function(n) {
																n.source === e &&
																	'string' === typeof n.data &&
																	0 === n.data.indexOf(t) &&
																	s(+n.data.slice(t.length));
															};
														e.addEventListener
															? e.addEventListener('message', n, !1)
															: e.attachEvent('onmessage', n),
															(r = function(n) {
																e.postMessage(t + n, '*');
															});
												  })()
												: e.MessageChannel
												? (function() {
														var e = new MessageChannel();
														(e.port1.onmessage = function(e) {
															s(e.data);
														}),
															(r = function(t) {
																e.port2.postMessage(t);
															});
												  })()
												: i && 'onreadystatechange' in i.createElement('script')
												? (function() {
														var e = i.documentElement;
														r = function(t) {
															var n = i.createElement('script');
															(n.onreadystatechange = function() {
																s(t),
																	(n.onreadystatechange = null),
																	e.removeChild(n),
																	(n = null);
															}),
																e.appendChild(n);
														};
												  })()
												: (r = function(e) {
														setTimeout(s, 0, e);
												  }),
											(u.setImmediate = function(e) {
												'function' !== typeof e && (e = new Function('' + e));
												for (
													var t = new Array(arguments.length - 1), n = 0;
													n < t.length;
													n++
												)
													t[n] = arguments[n + 1];
												var l = { callback: e, args: t };
												return (a[o] = l), r(o), o++;
											}),
											(u.clearImmediate = c);
									}
									function c(e) {
										delete a[e];
									}
									function s(e) {
										if (l) setTimeout(s, 0, e);
										else {
											var t = a[e];
											if (t) {
												l = !0;
												try {
													!(function(e) {
														var t = e.callback,
															n = e.args;
														switch (n.length) {
															case 0:
																t();
																break;
															case 1:
																t(n[0]);
																break;
															case 2:
																t(n[0], n[1]);
																break;
															case 3:
																t(n[0], n[1], n[2]);
																break;
															default:
																t.apply(void 0, n);
														}
													})(t);
												} finally {
													c(e), (l = !1);
												}
											}
										}
									}
								})(
									'undefined' === typeof self
										? 'undefined' === typeof e
											? this
											: e
										: self,
								);
							}.call(this, n(23), n(38)));
						},
						function(e, t) {
							var n,
								r,
								o = (e.exports = {});
							function a() {
								throw new Error('setTimeout has not been defined');
							}
							function l() {
								throw new Error('clearTimeout has not been defined');
							}
							function i(e) {
								if (n === setTimeout) return setTimeout(e, 0);
								if ((n === a || !n) && setTimeout)
									return (n = setTimeout), setTimeout(e, 0);
								try {
									return n(e, 0);
								} catch (t) {
									try {
										return n.call(null, e, 0);
									} catch (t) {
										return n.call(this, e, 0);
									}
								}
							}
							!(function() {
								try {
									n = 'function' === typeof setTimeout ? setTimeout : a;
								} catch (e) {
									n = a;
								}
								try {
									r = 'function' === typeof clearTimeout ? clearTimeout : l;
								} catch (e) {
									r = l;
								}
							})();
							var u,
								c = [],
								s = !1,
								d = -1;
							function f() {
								s &&
									u &&
									((s = !1),
									u.length ? (c = u.concat(c)) : (d = -1),
									c.length && p());
							}
							function p() {
								if (!s) {
									var e = i(f);
									s = !0;
									for (var t = c.length; t; ) {
										for (u = c, c = []; ++d < t; ) u && u[d].run();
										(d = -1), (t = c.length);
									}
									(u = null),
										(s = !1),
										(function(e) {
											if (r === clearTimeout) return clearTimeout(e);
											if ((r === l || !r) && clearTimeout)
												return (r = clearTimeout), clearTimeout(e);
											try {
												r(e);
											} catch (t) {
												try {
													return r.call(null, e);
												} catch (t) {
													return r.call(this, e);
												}
											}
										})(e);
								}
							}
							function h(e, t) {
								(this.fun = e), (this.array = t);
							}
							function b() {}
							(o.nextTick = function(e) {
								var t = new Array(arguments.length - 1);
								if (arguments.length > 1)
									for (var n = 1; n < arguments.length; n++)
										t[n - 1] = arguments[n];
								c.push(new h(e, t)), 1 !== c.length || s || i(p);
							}),
								(h.prototype.run = function() {
									this.fun.apply(null, this.array);
								}),
								(o.title = 'browser'),
								(o.browser = !0),
								(o.env = {}),
								(o.argv = []),
								(o.version = ''),
								(o.versions = {}),
								(o.on = b),
								(o.addListener = b),
								(o.once = b),
								(o.off = b),
								(o.removeListener = b),
								(o.removeAllListeners = b),
								(o.emit = b),
								(o.prependListener = b),
								(o.prependOnceListener = b),
								(o.listeners = function(e) {
									return [];
								}),
								(o.binding = function(e) {
									throw new Error('process.binding is not supported');
								}),
								(o.cwd = function() {
									return '/';
								}),
								(o.chdir = function(e) {
									throw new Error('process.chdir is not supported');
								}),
								(o.umask = function() {
									return 0;
								});
						},
						function(e, t) {
							e.exports = function(e) {
								if (Array.isArray(e)) {
									for (var t = 0, n = new Array(e.length); t < e.length; t++)
										n[t] = e[t];
									return n;
								}
							};
						},
						function(e, t) {
							e.exports = function(e) {
								if (
									Symbol.iterator in Object(e) ||
									'[object Arguments]' === Object.prototype.toString.call(e)
								)
									return Array.from(e);
							};
						},
						function(e, t) {
							e.exports = function() {
								throw new TypeError(
									'Invalid attempt to spread non-iterable instance',
								);
							};
						},
						,
						function(e, t, n) {
							'use strict';
							n.r(t);
							var r = n(5),
								o = n.n(r),
								a = (n(49), n(1)),
								l = n.n(a),
								i = n(6),
								u = n(3),
								c = n(7),
								s = n(17),
								d = n(8),
								f = n.n(d),
								p = n(9),
								h = n.n(p),
								b = n(10),
								g = n.n(b),
								v = n(11),
								x = n.n(v),
								y = n(12),
								m = n.n(y),
								w = n(0),
								C = n.n(w),
								S = n(2),
								_ = n.n(S),
								E = (function(e) {
									function t() {
										var e, n;
										f()(this, t);
										for (
											var r = arguments.length, o = new Array(r), a = 0;
											a < r;
											a++
										)
											o[a] = arguments[a];
										return (
											(n = g()(
												this,
												(e = x()(t)).call.apply(e, [this].concat(o)),
											)),
											_()(C()(C()(n)), 'state', { rows: 3, columns: 3 }),
											_()(C()(C()(n)), 'inputValue', function(e) {
												n.setState(_()({}, e.target.name, e.target.value));
											}),
											_()(C()(C()(n)), 'confirmInsert', function() {
												n.props.onConfirm(n.state);
											}),
											_()(C()(C()(n)), 'cancelInsert', function() {
												n.props.onCancel();
											}),
											n
										);
									}
									return (
										m()(t, e),
										h()(t, [
											{
												key: 'componentDidMount',
												value: function() {
													this.setState({
														rows: this.props.defaultRows,
														columns: this.props.defaultColumns,
													});
												},
											},
											{
												key: 'render',
												value: function() {
													return l.a.createElement(
														'div',
														{ className: 'bf-table-dropdown-control' },
														l.a.createElement('input', {
															placeholder: this.props.language.columns,
															className: 'input',
															type: 'text',
															name: 'columns',
															value: this.state.columns,
															onChange: this.inputValue,
														}),
														l.a.createElement(
															'label',
															{ className: 'label' },
															'x',
														),
														l.a.createElement('input', {
															placeholder: this.props.language.rows,
															className: 'input',
															type: 'text',
															name: 'rows',
															value: this.state.rows,
															onChange: this.inputValue,
														}),
														l.a.createElement(
															'button',
															{
																disabled:
																	!this.state.rows || !this.state.columns,
																className: 'button primary',
																onClick: this.confirmInsert,
															},
															this.props.language.insertTable,
														),
													);
												},
											},
										]),
										t
									);
								})(l.a.Component),
								k = function(e, t) {
									if (
										('body' !== e &&
											t &&
											t.querySelector &&
											t.querySelector(':scope > table') &&
											t.parentNode.insertBefore(
												t.querySelector(':scope > table'),
												t.nextSibling,
											),
										'table' === e && Object(c.rebuildTableNode)(t),
										'th' === e || 'td' === e)
									) {
										var n = {
											tableKey: t.dataset.tableKey,
											colIndex: 1 * t.dataset.colIndex,
											rowIndex: 1 * t.dataset.rowIndex,
											colSpan: t.colSpan,
											rowSpan: t.rowSpan,
										};
										return (
											(n.isHead = 'th' === e),
											t.style && t.style.textAlign
												? (n.textAlign = t.style.textAlign)
												: t.align && (n.textAlign = t.align),
											{ type: 'table-cell', data: n }
										);
									}
									return null;
								},
								O = function(e) {
									return function(t, n) {
										if ('table-cell' !== n.type.toLowerCase()) return null;
										var r = t.getBlockBefore(n.key),
											o = t.getBlockAfter(n.key),
											a = r ? r.getType() : null,
											l = r ? r.getData().toJS() : {},
											i = o ? o.getType() : null,
											u = o ? o.getData().toJS() : {},
											c = '',
											s = '',
											d = '';
										return (
											n.data.textAlign &&
												(d += ' style="text-align:'.concat(
													n.data.textAlign,
													';"',
												)),
											(c =
												'table-cell' !== a
													? '<table '
															.concat(e, '><tr><td')
															.concat(d, ' colSpan="')
															.concat(n.data.colSpan, '" rowSpan="')
															.concat(n.data.rowSpan, '">')
													: l.rowIndex !== n.data.rowIndex
													? '<tr><td'
															.concat(d, ' colSpan="')
															.concat(n.data.colSpan, '" rowSpan="')
															.concat(n.data.rowSpan, '">')
													: '<td'
															.concat(d, ' colSpan="')
															.concat(n.data.colSpan, '" rowSpan="')
															.concat(n.data.rowSpan, '">')),
											(s =
												'table-cell' !== i
													? '</td></tr></table>'
													: u.rowIndex !== n.data.rowIndex
													? '</td></tr>'
													: '</td>'),
											a || (c = '<p></p>' + c),
											i || (s += '<p></p>'),
											{ start: c, end: s }
										);
									};
								};
							n.d(t, 'dropdownInstance', function() {
								return j;
							}),
								n.d(t, 'TableUtils', function() {
									return P;
								}),
								i.ContentUtils.registerStrictBlockType('table-cell');
							var j = null,
								M = function(e) {
									return (j = e);
								},
								P = c;
							t.default = function(e) {
								var t = (e = o()(
										{
											defaultColumns: 3,
											defaultRows: 3,
											withDropdown: !1,
											exportAttrString: '',
										},
										e,
									)),
									n = t.includeEditors,
									r = t.excludeEditors,
									a = t.defaultColumns,
									d = t.defaultRows,
									f = t.withDropdown,
									p = t.exportAttrString;
								return [
									f
										? {
												type: 'control',
												includeEditors: n,
												excludeEditors: r,
												control: function(e) {
													var t = Object(s.a)(e.editor);
													return {
														key: 'table',
														replace: 'table',
														type: 'dropdown',
														title: t.insertTable,
														text: l.a.createElement('i', {
															className: 'bfi-table',
														}),
														showArrow: !1,
														autoHide: !0,
														ref: M,
														component: l.a.createElement(E, {
															language: t,
															defaultRows: d,
															defaultColumns: a,
															onConfirm: function(t) {
																var n = t.columns,
																	r = t.rows;
																e.editor.setValue(
																	P.insertTable(e.editorState, n, r),
																),
																	j && j.hide();
															},
														}),
													};
												},
										  }
										: {
												type: 'control',
												includeEditors: n,
												excludeEditors: r,
												control: function(e) {
													return {
														key: 'table',
														replace: 'table',
														type: 'button',
														title: Object(s.a)(e.editor).insertTable,
														text: l.a.createElement('i', {
															className: 'bfi-table',
														}),
														onClick: function() {
															e.editor.setValue(
																P.insertTable(e.editorState, a, d),
															);
														},
													};
												},
										  },
									{
										type: 'prop-interception',
										includeEditors: n,
										excludeEditors: r,
										interceptor: function(e) {
											var t;
											return (
												(e.handleKeyCommand =
													((t = e.handleKeyCommand),
													function(e, n, r) {
														if (t && 'handled' === t(e, n, r)) return 'handled';
														if ('backspace' === e) {
															var o = n.getCurrentContent();
															if (0 === n.getSelection().getFocusOffset()) {
																var a = i.ContentUtils.getSelectionBlock(n),
																	l = o.getBlockBefore(a.getKey());
																if (!l) return 'not-handled';
																if ('table-cell' === l.getType()) {
																	var u = l.getData().get('tableKey');
																	return (
																		r.setValue(c.removeTable(n, u)), 'handled'
																	);
																}
															}
														}
														var s = i.ContentUtils.getSelectedBlocks(n);
														if (
															!s.find(function(e) {
																return 'table-cell' === e.getType();
															})
														)
															return 'not-handled';
														var d = i.ContentUtils.getSelectionBlock(n);
														if (['backspace', 'delete'].indexOf(e) > -1) {
															if (s.length > 1) return 'handled';
															var f = d.getLength();
															if (0 === f) return 'handled';
															var p = n.getSelection().getFocusOffset();
															if ('backspace' === e && 0 === p)
																return 'handled';
															if ('delete' === e && p === f) return 'handled';
														} else if ('tab' === e) return 'handled';
													})),
												(e.handleReturn = (function(e) {
													return function(t, n, r) {
														return e && 'handled' === e(t, n, r)
															? 'handled'
															: i.ContentUtils.selectionContainsBlockType(
																	n,
																	'table-cell',
															  )
															? 'table-cell' !==
															  i.ContentUtils.getSelectionBlockType(n)
																? 'not-handled'
																: (r.setValue(u.RichUtils.insertSoftNewline(n)),
																  'handled')
															: 'not-handled';
													};
												})(e.handleReturn)),
												(e.handleDroppedFiles = (function(e) {
													return function(t, n, r) {
														return e && 'handled' === e(t, n, r)
															? 'handled'
															: i.ContentUtils.selectionContainsBlockType(
																	r.state.editorState,
																	'table-cell',
															  )
															? 'table-cell' ===
															  i.ContentUtils.getSelectionBlock(
																	r.state.editorState,
															  ).getType()
																? 'handled'
																: void 0
															: 'not-handled';
													};
												})(e.handleDroppedFiles)),
												(e.handlePastedFiles = (function(e) {
													return function(t, n) {
														return e && 'handled' === e(t, n)
															? 'handled'
															: i.ContentUtils.selectionContainsBlockType(
																	n.state.editorState,
																	'table-cell',
															  )
															? 'table-cell' ===
															  i.ContentUtils.getSelectionBlock(
																	n.state.editorState,
															  ).getType()
																? 'handled'
																: void 0
															: 'not-handled';
													};
												})(e.handlePastedFiles)),
												(e.handlePastedText = (function(e) {
													return function(t, n, r, o) {
														if (e && 'handled' === e(t, n, r, o))
															return 'handled';
														var a = i.ContentUtils.getSelectedBlocks(
															o.state.editorState,
														);
														return a.find(function(e) {
															return 'table-cell' === e.getType();
														})
															? (1 === a.length &&
																	o.setValue(
																		i.ContentUtils.insertText(
																			o.state.editorState,
																			t,
																		),
																	),
															  'handled')
															: 'not-handled';
													};
												})(e.handlePastedText)),
												e
											);
										},
									},
									{
										type: 'block',
										name: 'table-cell',
										includeEditors: n,
										excludeEditors: r,
										renderMap: s.b,
										importer: k,
										exporter: O(p),
									},
								];
							};
						},
						,
						,
						,
						,
						,
						function(e, t) {},
					]);
				}),
				(e.exports = r(n(0), n(13), n(4), n(221), n(104)));
		},
		917: function(e, t, n) {},
		918: function(e, t, n) {
			var r;
			window,
				(r = function(e, t) {
					return (function(e) {
						var t = {};
						function n(r) {
							if (t[r]) return t[r].exports;
							var o = (t[r] = { i: r, l: !1, exports: {} });
							return (
								e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
							);
						}
						return (
							(n.m = e),
							(n.c = t),
							(n.d = function(e, t, r) {
								n.o(e, t) ||
									Object.defineProperty(e, t, { enumerable: !0, get: r });
							}),
							(n.r = function(e) {
								'undefined' !== typeof Symbol &&
									Symbol.toStringTag &&
									Object.defineProperty(e, Symbol.toStringTag, {
										value: 'Module',
									}),
									Object.defineProperty(e, '__esModule', { value: !0 });
							}),
							(n.t = function(e, t) {
								if ((1 & t && (e = n(e)), 8 & t)) return e;
								if (4 & t && 'object' === typeof e && e && e.__esModule)
									return e;
								var r = Object.create(null);
								if (
									(n.r(r),
									Object.defineProperty(r, 'default', {
										enumerable: !0,
										value: e,
									}),
									2 & t && 'string' != typeof e)
								)
									for (var o in e)
										n.d(
											r,
											o,
											function(t) {
												return e[t];
											}.bind(null, o),
										);
								return r;
							}),
							(n.n = function(e) {
								var t =
									e && e.__esModule
										? function() {
												return e.default;
										  }
										: function() {
												return e;
										  };
								return n.d(t, 'a', t), t;
							}),
							(n.o = function(e, t) {
								return Object.prototype.hasOwnProperty.call(e, t);
							}),
							(n.p = '/'),
							n((n.s = 31))
						);
					})({
						1: function(t, n) {
							t.exports = e;
						},
						14: function(e, t) {
							function n() {
								return (
									(e.exports = n =
										Object.assign ||
										function(e) {
											for (var t = 1; t < arguments.length; t++) {
												var n = arguments[t];
												for (var r in n)
													Object.prototype.hasOwnProperty.call(n, r) &&
														(e[r] = n[r]);
											}
											return e;
										}),
									n.apply(this, arguments)
								);
							}
							e.exports = n;
						},
						2: function(e, t) {
							e.exports = function(e, t, n) {
								return (
									t in e
										? Object.defineProperty(e, t, {
												value: n,
												enumerable: !0,
												configurable: !0,
												writable: !0,
										  })
										: (e[t] = n),
									e
								);
							};
						},
						26: function(e, t, n) {
							var r = n(32);
							e.exports = function(e, t) {
								if (null == e) return {};
								var n,
									o,
									a = r(e, t);
								if (Object.getOwnPropertySymbols) {
									var l = Object.getOwnPropertySymbols(e);
									for (o = 0; o < l.length; o++)
										(n = l[o]),
											t.indexOf(n) >= 0 ||
												(Object.prototype.propertyIsEnumerable.call(e, n) &&
													(a[n] = e[n]));
								}
								return a;
							};
						},
						27: function(e, n) {
							e.exports = t;
						},
						31: function(e, t, n) {
							'use strict';
							n.r(t);
							var r = n(5),
								o = n.n(r),
								a = n(14),
								l = n.n(a),
								i = n(26),
								u = n.n(i),
								c = (n(47), n(1)),
								s = n.n(c),
								d = n(27);
							t.default = function(e) {
								var t = (e = o()(
									{
										theme: 'dark',
										clearButtonText: '\u6e05\u9664',
										closeButtonText: '\u5173\u95ed',
									},
									e,
								));
								return {
									type: 'prop-interception',
									includeEditors: t.includeEditors,
									excludeEditors: t.excludeEditors,
									interceptor: function(t) {
										var n;
										return (
											(t.colorPicker =
												((n = e),
												function(e) {
													var t = e.onChange,
														r = e.color,
														o = e.presetColors,
														a = u()(e, ['onChange', 'color', 'presetColors']);
													return (
														(r = r || o[0]),
														s.a.createElement(
															'div',
															{
																className: 'braft-color-picker '.concat(
																	n.theme,
																	'-theme',
																),
															},
															s.a.createElement(
																d.SketchPicker,
																l()(
																	{
																		color: r,
																		presetColors: o,
																		onChangeComplete: function(e) {
																			if (e.hex === r) return !1;
																			t(e.hex, !1),
																				n.onChange && n.onChange(e.hex);
																		},
																	},
																	a,
																),
															),
															s.a.createElement(
																'footer',
																{ className: 'footer' },
																s.a.createElement(
																	'button',
																	{
																		type: 'button',
																		className:
																			'button control-item button-clear',
																		onClick: function() {
																			return t(r, !1);
																		},
																		disabled: !r,
																	},
																	n.clearButtonText,
																),
																s.a.createElement(
																	'button',
																	{
																		type: 'button',
																		className:
																			'button control-item button-close',
																		onClick: function() {
																			return t(null, !0);
																		},
																	},
																	n.closeButtonText,
																),
															),
														)
													);
												})),
											(t.colorPickerTheme = e.theme),
											t
										);
									},
								};
							};
						},
						32: function(e, t) {
							e.exports = function(e, t) {
								if (null == e) return {};
								var n,
									r,
									o = {},
									a = Object.keys(e);
								for (r = 0; r < a.length; r++)
									(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
								return o;
							};
						},
						47: function(e, t) {},
						5: function(e, t, n) {
							var r = n(2);
							e.exports = function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {},
										o = Object.keys(n);
									'function' === typeof Object.getOwnPropertySymbols &&
										(o = o.concat(
											Object.getOwnPropertySymbols(n).filter(function(e) {
												return Object.getOwnPropertyDescriptor(n, e).enumerable;
											}),
										)),
										o.forEach(function(t) {
											r(e, t, n[t]);
										});
								}
								return e;
							};
						},
					});
				}),
				(e.exports = r(n(0), n(729)));
		},
		919: function(e, t, n) {},
	},
]);
