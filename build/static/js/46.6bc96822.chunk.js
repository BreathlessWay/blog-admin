(this['webpackJsonpblog-admin'] = this['webpackJsonpblog-admin'] || []).push([
	[46],
	{
		921: function(e, t, n) {
			window,
				(e.exports = (function(e) {
					var t = {};
					function n(r) {
						if (t[r]) return t[r].exports;
						var o = (t[r] = { i: r, l: !1, exports: {} });
						return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
					}
					return (
						(n.m = e),
						(n.c = t),
						(n.d = function(e, t, r) {
							n.o(e, t) ||
								Object.defineProperty(e, t, { enumerable: !0, get: r });
						}),
						(n.r = function(e) {
							'undefined' != typeof Symbol &&
								Symbol.toStringTag &&
								Object.defineProperty(e, Symbol.toStringTag, {
									value: 'Module',
								}),
								Object.defineProperty(e, '__esModule', { value: !0 });
						}),
						(n.t = function(e, t) {
							if ((1 & t && (e = n(e)), 8 & t)) return e;
							if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
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
						n((n.s = 5))
					);
				})([
					function(e, t, n) {
						'use strict';
						e.exports = n(6);
					},
					function(e, t, n) {
						'use strict';
						e.exports = function(e) {
							var t = [];
							return (
								(t.toString = function() {
									return this.map(function(t) {
										var n = (function(e, t) {
											var n,
												r = e[1] || '',
												o = e[3];
											if (!o) return r;
											if (t && 'function' == typeof btoa) {
												var i =
														((n = o),
														'/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
															btoa(
																unescape(encodeURIComponent(JSON.stringify(n))),
															) +
															' */'),
													a = o.sources.map(function(e) {
														return '/*# sourceURL=' + o.sourceRoot + e + ' */';
													});
												return [r]
													.concat(a)
													.concat([i])
													.join('\n');
											}
											return [r].join('\n');
										})(t, e);
										return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
									}).join('');
								}),
								(t.i = function(e, n) {
									'string' == typeof e && (e = [[null, e, '']]);
									for (var r = {}, o = 0; o < this.length; o++) {
										var i = this[o][0];
										null != i && (r[i] = !0);
									}
									for (o = 0; o < e.length; o++) {
										var a = e[o];
										(null != a[0] && r[a[0]]) ||
											(n && !a[2]
												? (a[2] = n)
												: n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
											t.push(a));
									}
								}),
								t
							);
						};
					},
					function(e, t, n) {
						var r,
							o,
							i = {},
							a =
								((r = function() {
									return window && document && document.all && !window.atob;
								}),
								function() {
									return void 0 === o && (o = r.apply(this, arguments)), o;
								}),
							s = (function(e) {
								var t = {};
								return function(e, n) {
									if ('function' == typeof e) return e();
									if (void 0 === t[e]) {
										var r = function(e, t) {
											return t ? t.querySelector(e) : document.querySelector(e);
										}.call(this, e, n);
										if (
											window.HTMLIFrameElement &&
											r instanceof window.HTMLIFrameElement
										)
											try {
												r = r.contentDocument.head;
											} catch (e) {
												r = null;
											}
										t[e] = r;
									}
									return t[e];
								};
							})(),
							l = null,
							c = 0,
							u = [],
							f = n(25);
						function d(e, t) {
							for (var n = 0; n < e.length; n++) {
								var r = e[n],
									o = i[r.id];
								if (o) {
									o.refs++;
									for (var a = 0; a < o.parts.length; a++)
										o.parts[a](r.parts[a]);
									for (; a < r.parts.length; a++)
										o.parts.push(v(r.parts[a], t));
								} else {
									var s = [];
									for (a = 0; a < r.parts.length; a++) s.push(v(r.parts[a], t));
									i[r.id] = { id: r.id, refs: 1, parts: s };
								}
							}
						}
						function p(e, t) {
							for (var n = [], r = {}, o = 0; o < e.length; o++) {
								var i = e[o],
									a = t.base ? i[0] + t.base : i[0],
									s = { css: i[1], media: i[2], sourceMap: i[3] };
								r[a]
									? r[a].parts.push(s)
									: n.push((r[a] = { id: a, parts: [s] }));
							}
							return n;
						}
						function h(e, t) {
							var n = s(e.insertInto);
							if (!n)
								throw new Error(
									"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
								);
							var r = u[u.length - 1];
							if ('top' === e.insertAt)
								r
									? r.nextSibling
										? n.insertBefore(t, r.nextSibling)
										: n.appendChild(t)
									: n.insertBefore(t, n.firstChild),
									u.push(t);
							else if ('bottom' === e.insertAt) n.appendChild(t);
							else {
								if ('object' != typeof e.insertAt || !e.insertAt.before)
									throw new Error(
										"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
									);
								var o = s(e.insertAt.before, n);
								n.insertBefore(t, o);
							}
						}
						function g(e) {
							if (null === e.parentNode) return !1;
							e.parentNode.removeChild(e);
							var t = u.indexOf(e);
							t >= 0 && u.splice(t, 1);
						}
						function m(e) {
							var t = document.createElement('style');
							if (
								(void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
								void 0 === e.attrs.nonce)
							) {
								var r = n.nc;
								r && (e.attrs.nonce = r);
							}
							return b(t, e.attrs), h(e, t), t;
						}
						function b(e, t) {
							Object.keys(t).forEach(function(n) {
								e.setAttribute(n, t[n]);
							});
						}
						function v(e, t) {
							var n, r, o, i;
							if (t.transform && e.css) {
								if (
									!(i =
										'function' == typeof t.transform
											? t.transform(e.css)
											: t.transform.default(e.css))
								)
									return function() {};
								e.css = i;
							}
							if (t.singleton) {
								var a = c++;
								(n = l || (l = m(t))),
									(r = x.bind(null, n, a, !1)),
									(o = x.bind(null, n, a, !0));
							} else
								e.sourceMap &&
								'function' == typeof URL &&
								'function' == typeof URL.createObjectURL &&
								'function' == typeof URL.revokeObjectURL &&
								'function' == typeof Blob &&
								'function' == typeof btoa
									? ((n = (function(e) {
											var t = document.createElement('link');
											return (
												void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
												(e.attrs.rel = 'stylesheet'),
												b(t, e.attrs),
												h(e, t),
												t
											);
									  })(t)),
									  (r = function(e, t, n) {
											var r = n.css,
												o = n.sourceMap,
												i = void 0 === t.convertToAbsoluteUrls && o;
											(t.convertToAbsoluteUrls || i) && (r = f(r)),
												o &&
													(r +=
														'\n/*# sourceMappingURL=data:application/json;base64,' +
														btoa(
															unescape(encodeURIComponent(JSON.stringify(o))),
														) +
														' */');
											var a = new Blob([r], { type: 'text/css' }),
												s = e.href;
											(e.href = URL.createObjectURL(a)),
												s && URL.revokeObjectURL(s);
									  }.bind(null, n, t)),
									  (o = function() {
											g(n), n.href && URL.revokeObjectURL(n.href);
									  }))
									: ((n = m(t)),
									  (r = function(e, t) {
											var n = t.css,
												r = t.media;
											if ((r && e.setAttribute('media', r), e.styleSheet))
												e.styleSheet.cssText = n;
											else {
												for (; e.firstChild; ) e.removeChild(e.firstChild);
												e.appendChild(document.createTextNode(n));
											}
									  }.bind(null, n)),
									  (o = function() {
											g(n);
									  }));
							return (
								r(e),
								function(t) {
									if (t) {
										if (
											t.css === e.css &&
											t.media === e.media &&
											t.sourceMap === e.sourceMap
										)
											return;
										r((e = t));
									} else o();
								}
							);
						}
						e.exports = function(e, t) {
							if (
								'undefined' != typeof DEBUG &&
								DEBUG &&
								'object' != typeof document
							)
								throw new Error(
									'The style-loader cannot be used in a non-browser environment',
								);
							((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
								t.singleton ||
									'boolean' == typeof t.singleton ||
									(t.singleton = a()),
								t.insertInto || (t.insertInto = 'head'),
								t.insertAt || (t.insertAt = 'bottom');
							var n = p(e, t);
							return (
								d(n, t),
								function(e) {
									for (var r = [], o = 0; o < n.length; o++) {
										var a = n[o];
										(s = i[a.id]).refs--, r.push(s);
									}
									for (e && d(p(e, t), t), o = 0; o < r.length; o++) {
										var s;
										if (0 === (s = r[o]).refs) {
											for (var l = 0; l < s.parts.length; l++) s.parts[l]();
											delete i[s.id];
										}
									}
								}
							);
						};
						var y,
							w =
								((y = []),
								function(e, t) {
									return (y[e] = t), y.filter(Boolean).join('\n');
								});
						function x(e, t, n, r) {
							var o = n ? '' : r.css;
							if (e.styleSheet) e.styleSheet.cssText = w(t, o);
							else {
								var i = document.createTextNode(o),
									a = e.childNodes;
								a[t] && e.removeChild(a[t]),
									a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
							}
						}
					},
					function(e, t, n) {
						var r;
						!(function() {
							'use strict';
							var n = {}.hasOwnProperty;
							function o() {
								for (var e = [], t = 0; t < arguments.length; t++) {
									var r = arguments[t];
									if (r) {
										var i = typeof r;
										if ('string' === i || 'number' === i) e.push(r);
										else if (Array.isArray(r) && r.length) {
											var a = o.apply(null, r);
											a && e.push(a);
										} else if ('object' === i)
											for (var s in r) n.call(r, s) && r[s] && e.push(s);
									}
								}
								return e.join(' ');
							}
							e.exports
								? ((o.default = o), (e.exports = o))
								: void 0 ===
										(r = function() {
											return o;
										}.apply(t, [])) || (e.exports = r);
						})();
					},
					function(e, t, n) {
						e.exports = n.p + 'static/fonts/iconfont.0f693eba.eot';
					},
					function(e, t, n) {
						'use strict';
						var r,
							o =
								(this && this.__extends) ||
								((r = function(e, t) {
									return (r =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function(e, t) {
												e.__proto__ = t;
											}) ||
										function(e, t) {
											for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
										})(e, t);
								}),
								function(e, t) {
									function n() {
										this.constructor = e;
									}
									r(e, t),
										(e.prototype =
											null === t
												? Object.create(t)
												: ((n.prototype = t.prototype), new n()));
								}),
							i =
								(this && this.__assign) ||
								function() {
									return (i =
										Object.assign ||
										function(e) {
											for (var t, n = 1, r = arguments.length; n < r; n++)
												for (var o in (t = arguments[n]))
													Object.prototype.hasOwnProperty.call(t, o) &&
														(e[o] = t[o]);
											return e;
										}).apply(this, arguments);
								},
							a =
								(this && this.__importStar) ||
								function(e) {
									if (e && e.__esModule) return e;
									var t = {};
									if (null != e)
										for (var n in e)
											Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
									return (t.default = e), t;
								},
							s =
								(this && this.__importDefault) ||
								function(e) {
									return e && e.__esModule ? e : { default: e };
								};
						t.__esModule = !0;
						var l = a(n(0)),
							c = s(n(3)),
							u = s(n(8)),
							f = s(n(19)),
							d = s(n(20)),
							p = s(n(21)),
							h = n(22);
						n(23), n(26), n(32);
						var g = n(34),
							m = (function(e) {
								function t(t) {
									var n = e.call(this, t) || this;
									return (
										(n.$vm = l.createRef()),
										(n.$scrollEdit = l.createRef()),
										(n.$scrollPreview = l.createRef()),
										(n.$blockEdit = l.createRef()),
										(n.$blockPreview = l.createRef()),
										(n.initLanguage = function() {
											var e = n.props.language,
												t = g.CONFIG.langList.indexOf(e) >= 0 ? e : 'zh-CN';
											n.setState({ words: g.CONFIG.language[t] });
										}),
										(n.handleChange = function(e) {
											var t = e.target.value;
											n.props.onChange(t);
										}),
										(n.saveHistory = function(e) {
											var t = n.state,
												r = t.history,
												o = t.historyIndex;
											r.splice(o + 1, r.length),
												r.length >= 20 && r.shift(),
												(o = r.length),
												r.push(e),
												n.setState({ history: r, historyIndex: o });
										}),
										(n.save = function() {
											n.props.onSave(n.$vm.current.value);
										}),
										(n.undo = function() {
											var e = n.state,
												t = e.history,
												r = e.historyIndex;
											(r -= 1) < 0 ||
												(n.props.onChange(t[r]),
												n.setState({ historyIndex: r }));
										}),
										(n.redo = function() {
											var e = n.state,
												t = e.history,
												r = e.historyIndex;
											(r += 1) >= t.length ||
												(n.props.onChange(t[r]),
												n.setState({ historyIndex: r }));
										}),
										(n.toolBarLeftClick = function(e) {
											var t = n.state.words,
												r = {
													h1: { prefix: '# ', subfix: '', str: t.h1 },
													h2: { prefix: '## ', subfix: '', str: t.h2 },
													h3: { prefix: '### ', subfix: '', str: t.h3 },
													h4: { prefix: '#### ', subfix: '', str: t.h4 },
													img: { prefix: '![alt](', subfix: ')', str: 'url' },
													link: { prefix: '[title](', subfix: ')', str: 'url' },
													code: {
														prefix: '```',
														subfix: '\n\n```',
														str: 'language',
													},
													tab: { prefix: '  ', subfix: '', str: '' },
												};
											if (r.hasOwnProperty(e) && n.$vm.current) {
												var o = h.insertText(n.$vm.current, r[e]);
												n.props.onChange(o);
											}
											var i = { undo: n.undo, redo: n.redo, save: n.save };
											i.hasOwnProperty(e) && i[e]();
										}),
										(n.addImg = function(e, t) {
											n.props.addImg(e, t);
										}),
										(n.$img2Url = function(e, t) {
											var r = h.insertText(n.$vm.current, {
												prefix: '![' + e + '](' + t + ')',
												subfix: '',
												str: '',
											});
											n.props.onChange(r);
										}),
										(n.toolBarRightClick = function(e) {
											var t = {
												preview: function() {
													n.setState({ preview: !n.state.preview });
												},
												expand: function() {
													n.setState({ expand: !n.state.expand });
												},
												subfield: function() {
													var e = n.state,
														t = e.preview,
														r = e.subfield;
													t
														? r
															? n.setState({ subfield: !1, preview: !1 })
															: n.setState({ subfield: !0 })
														: r
														? n.setState({ subfield: !1 })
														: n.setState({ preview: !0, subfield: !0 });
												},
											};
											t.hasOwnProperty(e) && t[e]();
										}),
										(n.focusText = function() {
											n.$vm.current.focus();
										}),
										(n.handleScoll = function(e) {
											var t =
												n.$blockEdit.current.scrollTop /
												(n.$scrollEdit.current.scrollHeight -
													e.currentTarget.offsetHeight);
											n.$blockPreview.current.scrollTop =
												(n.$scrollPreview.current.scrollHeight -
													n.$blockPreview.current.offsetHeight) *
												t;
										}),
										(n.state = {
											preview: t.preview,
											expand: t.expand,
											subfield: t.subfield,
											history: [],
											historyIndex: 0,
											lineIndex: 1,
											value: t.value,
											words: {},
										}),
										n
									);
								}
								return (
									o(t, e),
									(t.prototype.componentDidMount = function() {
										var e = this,
											t = this.props.value;
										f.default(this.$vm.current, function(t) {
											e.toolBarLeftClick(t);
										}),
											this.reLineNum(t),
											this.initLanguage();
									}),
									(t.prototype.componentDidUpdate = function(e) {
										var t = this,
											n = this.props,
											r = n.value,
											o = n.preview,
											i = n.expand,
											a = n.subfield,
											s = this.state,
											l = s.history,
											c = s.historyIndex;
										e.value !== r && this.reLineNum(r),
											r !== l[c] &&
												(window.clearTimeout(this.currentTimeout),
												(this.currentTimeout = window.setTimeout(function() {
													t.saveHistory(r);
												}, 500))),
											a !== e.subfield &&
												this.state.subfield !== a &&
												this.setState({ subfield: a }),
											o !== e.preview &&
												this.state.preview !== o &&
												this.setState({ preview: o }),
											i !== e.expand &&
												this.state.expand !== i &&
												this.setState({ expand: i });
									}),
									(t.prototype.reLineNum = function(e) {
										var t = e ? e.split('\n').length : 1;
										this.setState({ lineIndex: t });
									}),
									(t.prototype.render = function() {
										var e = this.state,
											t = e.preview,
											n = e.expand,
											r = e.subfield,
											o = e.lineIndex,
											a = e.words,
											s = this.props,
											f = s.value,
											h = s.placeholder,
											g = s.fontSize,
											m = s.disabled,
											b = s.height,
											v = s.style,
											y = s.toolbar,
											w = c.default({
												'for-editor-edit': !0,
												'for-panel': !0,
												'for-active': t && r,
												'for-edit-preview': t && !r,
											}),
											x = c.default({
												'for-panel': !0,
												'for-editor-preview': !0,
												'for-active': t && r,
											}),
											k = c.default({
												'for-container': !0,
												'for-fullscreen': n,
											}),
											_ = c.default({
												'for-line-num': !0,
												hidden: !this.props.lineNum,
											});
										return l.createElement(
											'div',
											{ className: k, style: i({ height: b }, v) },
											Boolean(Object.keys(y).length) &&
												l.createElement(
													'div',
													{ className: 'for-toolbar' },
													l.createElement(
														d.default,
														i(
															{
																toolbar: y,
																words: a,
																onClick: this.toolBarLeftClick,
																addImg: this.addImg,
															},
															this.props,
														),
													),
													l.createElement(p.default, {
														toolbar: y,
														words: a,
														preview: t,
														expand: n,
														subfield: r,
														onClick: this.toolBarRightClick,
													}),
												),
											l.createElement(
												'div',
												{ className: 'for-editor', style: { fontSize: g } },
												l.createElement(
													'div',
													{
														className: w,
														ref: this.$blockEdit,
														onScroll: this.handleScoll,
														onClick: this.focusText,
													},
													l.createElement(
														'div',
														{
															className: 'for-editor-block',
															ref: this.$scrollEdit,
														},
														(function() {
															for (var e = [], t = 0; t < o; t++)
																e.push(
																	l.createElement('li', { key: t + 1 }, t + 1),
																);
															return l.createElement('ul', { className: _ }, e);
														})(),
														l.createElement(
															'div',
															{ className: 'for-editor-content' },
															l.createElement('pre', null, f, ' '),
															l.createElement('textarea', {
																ref: this.$vm,
																value: f,
																disabled: m,
																onChange: this.handleChange,
																placeholder: h || a.placeholder,
															}),
														),
													),
												),
												l.createElement(
													'div',
													{ className: x, ref: this.$blockPreview },
													l.createElement('div', {
														ref: this.$scrollPreview,
														className: 'for-preview for-markdown-preview',
														dangerouslySetInnerHTML: { __html: u.default(f) },
													}),
												),
											),
										);
									}),
									(t.defaultProps = {
										lineNum: !0,
										onChange: function() {},
										onSave: function() {},
										addImg: function() {},
										fontSize: '14px',
										disabled: !1,
										preview: !1,
										expand: !1,
										subfield: !1,
										style: {},
										toolbar: g.CONFIG.toolbar,
										language: 'zh-CN',
									}),
									t
								);
							})(l.Component);
						t.default = m;
					},
					function(e, t, n) {
						'use strict';
						var r = n(7),
							o = 'function' == typeof Symbol && Symbol.for,
							i = o ? Symbol.for('react.element') : 60103,
							a = o ? Symbol.for('react.portal') : 60106,
							s = o ? Symbol.for('react.fragment') : 60107,
							l = o ? Symbol.for('react.strict_mode') : 60108,
							c = o ? Symbol.for('react.profiler') : 60114,
							u = o ? Symbol.for('react.provider') : 60109,
							f = o ? Symbol.for('react.context') : 60110,
							d = o ? Symbol.for('react.concurrent_mode') : 60111,
							p = o ? Symbol.for('react.forward_ref') : 60112,
							h = o ? Symbol.for('react.suspense') : 60113,
							g = o ? Symbol.for('react.memo') : 60115,
							m = o ? Symbol.for('react.lazy') : 60116,
							b = 'function' == typeof Symbol && Symbol.iterator;
						function v(e) {
							for (
								var t = arguments.length - 1,
									n =
										'https://reactjs.org/docs/error-decoder.html?invariant=' +
										e,
									r = 0;
								r < t;
								r++
							)
								n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
							!(function(e, t, n, r, o, i, a, s) {
								if (!e) {
									if (((e = void 0), void 0 === t))
										e = Error(
											'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
										);
									else {
										var l = [n, void 0, void 0, void 0, void 0, void 0],
											c = 0;
										(e = Error(
											t.replace(/%s/g, function() {
												return l[c++];
											}),
										)).name = 'Invariant Violation';
									}
									throw ((e.framesToPop = 1), e);
								}
							})(
								!1,
								'Minified React error #' +
									e +
									'; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
								n,
							);
						}
						var y = {
								isMounted: function() {
									return !1;
								},
								enqueueForceUpdate: function() {},
								enqueueReplaceState: function() {},
								enqueueSetState: function() {},
							},
							w = {};
						function x(e, t, n) {
							(this.props = e),
								(this.context = t),
								(this.refs = w),
								(this.updater = n || y);
						}
						function k() {}
						function _(e, t, n) {
							(this.props = e),
								(this.context = t),
								(this.refs = w),
								(this.updater = n || y);
						}
						(x.prototype.isReactComponent = {}),
							(x.prototype.setState = function(e, t) {
								'object' != typeof e &&
									'function' != typeof e &&
									null != e &&
									v('85'),
									this.updater.enqueueSetState(this, e, t, 'setState');
							}),
							(x.prototype.forceUpdate = function(e) {
								this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
							}),
							(k.prototype = x.prototype);
						var E = (_.prototype = new k());
						(E.constructor = _),
							r(E, x.prototype),
							(E.isPureReactComponent = !0);
						var O = { current: null },
							N = { current: null },
							S = Object.prototype.hasOwnProperty,
							C = { key: !0, ref: !0, __self: !0, __source: !0 };
						function R(e, t, n) {
							var r = void 0,
								o = {},
								a = null,
								s = null;
							if (null != t)
								for (r in (void 0 !== t.ref && (s = t.ref),
								void 0 !== t.key && (a = '' + t.key),
								t))
									S.call(t, r) && !C.hasOwnProperty(r) && (o[r] = t[r]);
							var l = arguments.length - 2;
							if (1 === l) o.children = n;
							else if (1 < l) {
								for (var c = Array(l), u = 0; u < l; u++)
									c[u] = arguments[u + 2];
								o.children = c;
							}
							if (e && e.defaultProps)
								for (r in (l = e.defaultProps))
									void 0 === o[r] && (o[r] = l[r]);
							return {
								$$typeof: i,
								type: e,
								key: a,
								ref: s,
								props: o,
								_owner: N.current,
							};
						}
						function A(e) {
							return 'object' == typeof e && null !== e && e.$$typeof === i;
						}
						var M = /\/+/g,
							T = [];
						function I(e, t, n, r) {
							if (T.length) {
								var o = T.pop();
								return (
									(o.result = e),
									(o.keyPrefix = t),
									(o.func = n),
									(o.context = r),
									(o.count = 0),
									o
								);
							}
							return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
						}
						function j(e) {
							(e.result = null),
								(e.keyPrefix = null),
								(e.func = null),
								(e.context = null),
								(e.count = 0),
								10 > T.length && T.push(e);
						}
						function L(e, t, n) {
							return null == e
								? 0
								: (function e(t, n, r, o) {
										var s = typeof t;
										('undefined' !== s && 'boolean' !== s) || (t = null);
										var l = !1;
										if (null === t) l = !0;
										else
											switch (s) {
												case 'string':
												case 'number':
													l = !0;
													break;
												case 'object':
													switch (t.$$typeof) {
														case i:
														case a:
															l = !0;
													}
											}
										if (l) return r(o, t, '' === n ? '.' + D(t, 0) : n), 1;
										if (
											((l = 0),
											(n = '' === n ? '.' : n + ':'),
											Array.isArray(t))
										)
											for (var c = 0; c < t.length; c++) {
												var u = n + D((s = t[c]), c);
												l += e(s, u, r, o);
											}
										else if (
											'function' ==
											typeof (u =
												null === t || 'object' != typeof t
													? null
													: 'function' ==
													  typeof (u = (b && t[b]) || t['@@iterator'])
													? u
													: null)
										)
											for (t = u.call(t), c = 0; !(s = t.next()).done; )
												l += e((s = s.value), (u = n + D(s, c++)), r, o);
										else
											'object' === s &&
												v(
													'31',
													'[object Object]' == (r = '' + t)
														? 'object with keys {' +
																Object.keys(t).join(', ') +
																'}'
														: r,
													'',
												);
										return l;
								  })(e, '', t, n);
						}
						function D(e, t) {
							return 'object' == typeof e && null !== e && null != e.key
								? (function(e) {
										var t = { '=': '=0', ':': '=2' };
										return (
											'$' +
											('' + e).replace(/[=:]/g, function(e) {
												return t[e];
											})
										);
								  })(e.key)
								: t.toString(36);
						}
						function z(e, t) {
							e.func.call(e.context, t, e.count++);
						}
						function B(e, t, n) {
							var r = e.result,
								o = e.keyPrefix;
							(e = e.func.call(e.context, t, e.count++)),
								Array.isArray(e)
									? U(e, r, n, function(e) {
											return e;
									  })
									: null != e &&
									  (A(e) &&
											(e = (function(e, t) {
												return {
													$$typeof: i,
													type: e.type,
													key: t,
													ref: e.ref,
													props: e.props,
													_owner: e._owner,
												};
											})(
												e,
												o +
													(!e.key || (t && t.key === e.key)
														? ''
														: ('' + e.key).replace(M, '$&/') + '/') +
													n,
											)),
									  r.push(e));
						}
						function U(e, t, n, r, o) {
							var i = '';
							null != n && (i = ('' + n).replace(M, '$&/') + '/'),
								L(e, B, (t = I(t, i, r, o))),
								j(t);
						}
						function P() {
							var e = O.current;
							return null === e && v('321'), e;
						}
						var $ = {
								Children: {
									map: function(e, t, n) {
										if (null == e) return e;
										var r = [];
										return U(e, r, null, t, n), r;
									},
									forEach: function(e, t, n) {
										if (null == e) return e;
										L(e, z, (t = I(null, null, t, n))), j(t);
									},
									count: function(e) {
										return L(
											e,
											function() {
												return null;
											},
											null,
										);
									},
									toArray: function(e) {
										var t = [];
										return (
											U(e, t, null, function(e) {
												return e;
											}),
											t
										);
									},
									only: function(e) {
										return A(e) || v('143'), e;
									},
								},
								createRef: function() {
									return { current: null };
								},
								Component: x,
								PureComponent: _,
								createContext: function(e, t) {
									return (
										void 0 === t && (t = null),
										((e = {
											$$typeof: f,
											_calculateChangedBits: t,
											_currentValue: e,
											_currentValue2: e,
											_threadCount: 0,
											Provider: null,
											Consumer: null,
										}).Provider = { $$typeof: u, _context: e }),
										(e.Consumer = e)
									);
								},
								forwardRef: function(e) {
									return { $$typeof: p, render: e };
								},
								lazy: function(e) {
									return { $$typeof: m, _ctor: e, _status: -1, _result: null };
								},
								memo: function(e, t) {
									return {
										$$typeof: g,
										type: e,
										compare: void 0 === t ? null : t,
									};
								},
								useCallback: function(e, t) {
									return P().useCallback(e, t);
								},
								useContext: function(e, t) {
									return P().useContext(e, t);
								},
								useEffect: function(e, t) {
									return P().useEffect(e, t);
								},
								useImperativeHandle: function(e, t, n) {
									return P().useImperativeHandle(e, t, n);
								},
								useDebugValue: function() {},
								useLayoutEffect: function(e, t) {
									return P().useLayoutEffect(e, t);
								},
								useMemo: function(e, t) {
									return P().useMemo(e, t);
								},
								useReducer: function(e, t, n) {
									return P().useReducer(e, t, n);
								},
								useRef: function(e) {
									return P().useRef(e);
								},
								useState: function(e) {
									return P().useState(e);
								},
								Fragment: s,
								StrictMode: l,
								Suspense: h,
								createElement: R,
								cloneElement: function(e, t, n) {
									null == e && v('267', e);
									var o = void 0,
										a = r({}, e.props),
										s = e.key,
										l = e.ref,
										c = e._owner;
									if (null != t) {
										void 0 !== t.ref && ((l = t.ref), (c = N.current)),
											void 0 !== t.key && (s = '' + t.key);
										var u = void 0;
										for (o in (e.type &&
											e.type.defaultProps &&
											(u = e.type.defaultProps),
										t))
											S.call(t, o) &&
												!C.hasOwnProperty(o) &&
												(a[o] = void 0 === t[o] && void 0 !== u ? u[o] : t[o]);
									}
									if (1 === (o = arguments.length - 2)) a.children = n;
									else if (1 < o) {
										u = Array(o);
										for (var f = 0; f < o; f++) u[f] = arguments[f + 2];
										a.children = u;
									}
									return {
										$$typeof: i,
										type: e.type,
										key: s,
										ref: l,
										props: a,
										_owner: c,
									};
								},
								createFactory: function(e) {
									var t = R.bind(null, e);
									return (t.type = e), t;
								},
								isValidElement: A,
								version: '16.8.6',
								unstable_ConcurrentMode: d,
								unstable_Profiler: c,
								__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
									ReactCurrentDispatcher: O,
									ReactCurrentOwner: N,
									assign: r,
								},
							},
							q = { default: $ },
							Z = (q && $) || q;
						e.exports = Z.default || Z;
					},
					function(e, t, n) {
						'use strict';
						var r = Object.getOwnPropertySymbols,
							o = Object.prototype.hasOwnProperty,
							i = Object.prototype.propertyIsEnumerable;
						function a(e) {
							if (null == e)
								throw new TypeError(
									'Object.assign cannot be called with null or undefined',
								);
							return Object(e);
						}
						e.exports = (function() {
							try {
								if (!Object.assign) return !1;
								var e = new String('abc');
								if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
									return !1;
								for (var t = {}, n = 0; n < 10; n++)
									t['_' + String.fromCharCode(n)] = n;
								if (
									'0123456789' !==
									Object.getOwnPropertyNames(t)
										.map(function(e) {
											return t[e];
										})
										.join('')
								)
									return !1;
								var r = {};
								return (
									'abcdefghijklmnopqrst'.split('').forEach(function(e) {
										r[e] = e;
									}),
									'abcdefghijklmnopqrst' ===
										Object.keys(Object.assign({}, r)).join('')
								);
							} catch (e) {
								return !1;
							}
						})()
							? Object.assign
							: function(e, t) {
									for (var n, s, l = a(e), c = 1; c < arguments.length; c++) {
										for (var u in (n = Object(arguments[c])))
											o.call(n, u) && (l[u] = n[u]);
										if (r) {
											s = r(n);
											for (var f = 0; f < s.length; f++)
												i.call(n, s[f]) && (l[s[f]] = n[s[f]]);
										}
									}
									return l;
							  };
					},
					function(e, t, n) {
						'use strict';
						var r =
							(this && this.__importDefault) ||
							function(e) {
								return e && e.__esModule ? e : { default: e };
							};
						t.__esModule = !0;
						var o = r(n(9)),
							i = r(n(11));
						o.default.setOptions({
							renderer: new o.default.Renderer(),
							gfm: !0,
							tables: !0,
							breaks: !1,
							pedantic: !1,
							sanitize: !1,
							smartLists: !0,
							smartypants: !1,
							highlight: function(e) {
								return i.default.highlightAuto(e).value;
							},
						});
						var a = new o.default.Renderer();
						(a.paragraph = function(e) {
							return '<p>' + e + '</p>';
						}),
							(a.link = function(e, t, n) {
								return (
									'<a href=' +
									e +
									'\n      title=' +
									(t || e) +
									"\n      target='_blank'\n      }>" +
									n +
									'</a>'
								);
							}),
							(t.default = function(e) {
								return 'string' != typeof e
									? ''
									: o.default(e, { renderer: a });
							});
					},
					function(e, t, n) {
						(function(t) {
							!(function(t) {
								'use strict';
								var n = {
									newline: /^\n+/,
									code: /^( {4}[^\n]+\n*)+/,
									fences: m,
									hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
									heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
									nptable: m,
									blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
									list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
									html:
										'^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
									def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
									table: m,
									lheading: /^([^\n]+)\n {0,3}(=|-){2,} *(?:\n+|$)/,
									paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
									text: /^[^\n]+/,
								};
								function r(e) {
									(this.tokens = []),
										(this.tokens.links = Object.create(null)),
										(this.options = e || x.defaults),
										(this.rules = n.normal),
										this.options.pedantic
											? (this.rules = n.pedantic)
											: this.options.gfm &&
											  (this.options.tables
													? (this.rules = n.tables)
													: (this.rules = n.gfm));
								}
								(n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
									(n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
									(n.def = d(n.def)
										.replace('label', n._label)
										.replace('title', n._title)
										.getRegex()),
									(n.bullet = /(?:[*+-]|\d{1,9}\.)/),
									(n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
									(n.item = d(n.item, 'gm')
										.replace(/bull/g, n.bullet)
										.getRegex()),
									(n.list = d(n.list)
										.replace(/bull/g, n.bullet)
										.replace(
											'hr',
											'\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))',
										)
										.replace('def', '\\n+(?=' + n.def.source + ')')
										.getRegex()),
									(n._tag =
										'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
									(n._comment = /<!--(?!-?>)[\s\S]*?-->/),
									(n.html = d(n.html, 'i')
										.replace('comment', n._comment)
										.replace('tag', n._tag)
										.replace(
											'attribute',
											/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
										)
										.getRegex()),
									(n.paragraph = d(n.paragraph)
										.replace('hr', n.hr)
										.replace('heading', n.heading)
										.replace('lheading', n.lheading)
										.replace('tag', n._tag)
										.getRegex()),
									(n.blockquote = d(n.blockquote)
										.replace('paragraph', n.paragraph)
										.getRegex()),
									(n.normal = b({}, n)),
									(n.gfm = b({}, n.normal, {
										fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
										paragraph: /^/,
										heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
									})),
									(n.gfm.paragraph = d(n.paragraph)
										.replace(
											'(?!',
											'(?!' +
												n.gfm.fences.source.replace('\\1', '\\2') +
												'|' +
												n.list.source.replace('\\1', '\\3') +
												'|',
										)
										.getRegex()),
									(n.tables = b({}, n.gfm, {
										nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
										table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
									})),
									(n.pedantic = b({}, n.normal, {
										html: d(
											'^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))',
										)
											.replace('comment', n._comment)
											.replace(
												/tag/g,
												'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
											)
											.getRegex(),
										def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
									})),
									(r.rules = n),
									(r.lex = function(e, t) {
										return new r(t).lex(e);
									}),
									(r.prototype.lex = function(e) {
										return (
											(e = e
												.replace(/\r\n|\r/g, '\n')
												.replace(/\t/g, '    ')
												.replace(/\u00a0/g, ' ')
												.replace(/\u2424/g, '\n')),
											this.token(e, !0)
										);
									}),
									(r.prototype.token = function(e, t) {
										var r, o, i, a, s, l, c, u, f, d, p, h, g, m, b, w;
										for (e = e.replace(/^ +$/gm, ''); e; )
											if (
												((i = this.rules.newline.exec(e)) &&
													((e = e.substring(i[0].length)),
													i[0].length > 1 &&
														this.tokens.push({ type: 'space' })),
												(i = this.rules.code.exec(e)))
											) {
												var x = this.tokens[this.tokens.length - 1];
												(e = e.substring(i[0].length)),
													x && 'paragraph' === x.type
														? (x.text += '\n' + i[0].trimRight())
														: ((i = i[0].replace(/^ {4}/gm, '')),
														  this.tokens.push({
																type: 'code',
																codeBlockStyle: 'indented',
																text: this.options.pedantic ? i : y(i, '\n'),
														  }));
											} else if ((i = this.rules.fences.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({
														type: 'code',
														lang: i[2] ? i[2].trim() : i[2],
														text: i[3] || '',
													});
											else if ((i = this.rules.heading.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({
														type: 'heading',
														depth: i[1].length,
														text: i[2],
													});
											else if (
												(i = this.rules.nptable.exec(e)) &&
												(l = {
													type: 'table',
													header: v(i[1].replace(/^ *| *\| *$/g, '')),
													align: i[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
													cells: i[3]
														? i[3].replace(/\n$/, '').split('\n')
														: [],
												}).header.length === l.align.length
											) {
												for (
													e = e.substring(i[0].length), p = 0;
													p < l.align.length;
													p++
												)
													/^ *-+: *$/.test(l.align[p])
														? (l.align[p] = 'right')
														: /^ *:-+: *$/.test(l.align[p])
														? (l.align[p] = 'center')
														: /^ *:-+ *$/.test(l.align[p])
														? (l.align[p] = 'left')
														: (l.align[p] = null);
												for (p = 0; p < l.cells.length; p++)
													l.cells[p] = v(l.cells[p], l.header.length);
												this.tokens.push(l);
											} else if ((i = this.rules.hr.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({ type: 'hr' });
											else if ((i = this.rules.blockquote.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({ type: 'blockquote_start' }),
													(i = i[0].replace(/^ *> ?/gm, '')),
													this.token(i, t),
													this.tokens.push({ type: 'blockquote_end' });
											else if ((i = this.rules.list.exec(e))) {
												for (
													e = e.substring(i[0].length),
														c = {
															type: 'list_start',
															ordered: (m = (a = i[2]).length > 1),
															start: m ? +a : '',
															loose: !1,
														},
														this.tokens.push(c),
														u = [],
														r = !1,
														g = (i = i[0].match(this.rules.item)).length,
														p = 0;
													p < g;
													p++
												)
													(d = (l = i[p]).length),
														~(l = l.replace(/^ *([*+-]|\d+\.) */, '')).indexOf(
															'\n ',
														) &&
															((d -= l.length),
															(l = this.options.pedantic
																? l.replace(/^ {1,4}/gm, '')
																: l.replace(
																		new RegExp('^ {1,' + d + '}', 'gm'),
																		'',
																  ))),
														p !== g - 1 &&
															((s = n.bullet.exec(i[p + 1])[0]),
															(a.length > 1
																? 1 === s.length
																: s.length > 1 ||
																  (this.options.smartLists && s !== a)) &&
																((e = i.slice(p + 1).join('\n') + e),
																(p = g - 1))),
														(o = r || /\n\n(?!\s*$)/.test(l)),
														p !== g - 1 &&
															((r = '\n' === l.charAt(l.length - 1)),
															o || (o = r)),
														o && (c.loose = !0),
														(w = void 0),
														(b = /^\[[ xX]\] /.test(l)) &&
															((w = ' ' !== l[1]),
															(l = l.replace(/^\[[ xX]\] +/, ''))),
														(f = {
															type: 'list_item_start',
															task: b,
															checked: w,
															loose: o,
														}),
														u.push(f),
														this.tokens.push(f),
														this.token(l, !1),
														this.tokens.push({ type: 'list_item_end' });
												if (c.loose)
													for (g = u.length, p = 0; p < g; p++) u[p].loose = !0;
												this.tokens.push({ type: 'list_end' });
											} else if ((i = this.rules.html.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({
														type: this.options.sanitize ? 'paragraph' : 'html',
														pre:
															!this.options.sanitizer &&
															('pre' === i[1] ||
																'script' === i[1] ||
																'style' === i[1]),
														text: i[0],
													});
											else if (t && (i = this.rules.def.exec(e)))
												(e = e.substring(i[0].length)),
													i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
													(h = i[1].toLowerCase().replace(/\s+/g, ' ')),
													this.tokens.links[h] ||
														(this.tokens.links[h] = {
															href: i[2],
															title: i[3],
														});
											else if (
												(i = this.rules.table.exec(e)) &&
												(l = {
													type: 'table',
													header: v(i[1].replace(/^ *| *\| *$/g, '')),
													align: i[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
													cells: i[3]
														? i[3].replace(/\n$/, '').split('\n')
														: [],
												}).header.length === l.align.length
											) {
												for (
													e = e.substring(i[0].length), p = 0;
													p < l.align.length;
													p++
												)
													/^ *-+: *$/.test(l.align[p])
														? (l.align[p] = 'right')
														: /^ *:-+: *$/.test(l.align[p])
														? (l.align[p] = 'center')
														: /^ *:-+ *$/.test(l.align[p])
														? (l.align[p] = 'left')
														: (l.align[p] = null);
												for (p = 0; p < l.cells.length; p++)
													l.cells[p] = v(
														l.cells[p].replace(/^ *\| *| *\| *$/g, ''),
														l.header.length,
													);
												this.tokens.push(l);
											} else if ((i = this.rules.lheading.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({
														type: 'heading',
														depth: '=' === i[2] ? 1 : 2,
														text: i[1],
													});
											else if (t && (i = this.rules.paragraph.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({
														type: 'paragraph',
														text:
															'\n' === i[1].charAt(i[1].length - 1)
																? i[1].slice(0, -1)
																: i[1],
													});
											else if ((i = this.rules.text.exec(e)))
												(e = e.substring(i[0].length)),
													this.tokens.push({ type: 'text', text: i[0] });
											else if (e)
												throw new Error(
													'Infinite loop on byte: ' + e.charCodeAt(0),
												);
										return this.tokens;
									});
								var o = {
									escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
									autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
									url: m,
									tag:
										'^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
									link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
									reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
									nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
									strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
									em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
									code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
									br: /^( {2,}|\\)\n(?!\s*$)/,
									del: m,
									text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
								};
								function i(e, t) {
									if (
										((this.options = t || x.defaults),
										(this.links = e),
										(this.rules = o.normal),
										(this.renderer = this.options.renderer || new a()),
										(this.renderer.options = this.options),
										!this.links)
									)
										throw new Error(
											'Tokens array requires a `links` property.',
										);
									this.options.pedantic
										? (this.rules = o.pedantic)
										: this.options.gfm &&
										  (this.options.breaks
												? (this.rules = o.breaks)
												: (this.rules = o.gfm));
								}
								function a(e) {
									this.options = e || x.defaults;
								}
								function s() {}
								function l(e) {
									(this.tokens = []),
										(this.token = null),
										(this.options = e || x.defaults),
										(this.options.renderer = this.options.renderer || new a()),
										(this.renderer = this.options.renderer),
										(this.renderer.options = this.options),
										(this.slugger = new c());
								}
								function c() {
									this.seen = {};
								}
								function u(e, t) {
									if (t) {
										if (u.escapeTest.test(e))
											return e.replace(u.escapeReplace, function(e) {
												return u.replacements[e];
											});
									} else if (u.escapeTestNoEncode.test(e))
										return e.replace(u.escapeReplaceNoEncode, function(e) {
											return u.replacements[e];
										});
									return e;
								}
								function f(e) {
									return e.replace(
										/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
										function(e, t) {
											return 'colon' === (t = t.toLowerCase())
												? ':'
												: '#' === t.charAt(0)
												? 'x' === t.charAt(1)
													? String.fromCharCode(parseInt(t.substring(2), 16))
													: String.fromCharCode(+t.substring(1))
												: '';
										},
									);
								}
								function d(e, t) {
									return (
										(e = e.source || e),
										(t = t || ''),
										{
											replace: function(t, n) {
												return (
													(n = (n = n.source || n).replace(
														/(^|[^\[])\^/g,
														'$1',
													)),
													(e = e.replace(t, n)),
													this
												);
											},
											getRegex: function() {
												return new RegExp(e, t);
											},
										}
									);
								}
								function p(e, t, n) {
									if (e) {
										try {
											var r = decodeURIComponent(f(n))
												.replace(/[^\w:]/g, '')
												.toLowerCase();
										} catch (e) {
											return null;
										}
										if (
											0 === r.indexOf('javascript:') ||
											0 === r.indexOf('vbscript:') ||
											0 === r.indexOf('data:')
										)
											return null;
									}
									t &&
										!g.test(n) &&
										(n = (function(e, t) {
											return (
												h[' ' + e] ||
													(/^[^:]+:\/*[^\/]*$/.test(e)
														? (h[' ' + e] = e + '/')
														: (h[' ' + e] = y(e, '/', !0))),
												(e = h[' ' + e]),
												'//' === t.slice(0, 2)
													? e.replace(/:[\s\S]*/, ':') + t
													: '/' === t.charAt(0)
													? e.replace(/(:\/*[^\/]*)[\s\S]*/, '$1') + t
													: e + t
											);
										})(t, n));
									try {
										n = encodeURI(n).replace(/%25/g, '%');
									} catch (e) {
										return null;
									}
									return n;
								}
								(o._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~'),
									(o.em = d(o.em)
										.replace(/punctuation/g, o._punctuation)
										.getRegex()),
									(o._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g),
									(o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
									(o._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
									(o.autolink = d(o.autolink)
										.replace('scheme', o._scheme)
										.replace('email', o._email)
										.getRegex()),
									(o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
									(o.tag = d(o.tag)
										.replace('comment', n._comment)
										.replace('attribute', o._attribute)
										.getRegex()),
									(o._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/),
									(o._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/),
									(o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
									(o.link = d(o.link)
										.replace('label', o._label)
										.replace('href', o._href)
										.replace('title', o._title)
										.getRegex()),
									(o.reflink = d(o.reflink)
										.replace('label', o._label)
										.getRegex()),
									(o.normal = b({}, o)),
									(o.pedantic = b({}, o.normal, {
										strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
										em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
										link: d(/^!?\[(label)\]\((.*?)\)/)
											.replace('label', o._label)
											.getRegex(),
										reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
											.replace('label', o._label)
											.getRegex(),
									})),
									(o.gfm = b({}, o.normal, {
										escape: d(o.escape)
											.replace('])', '~|])')
											.getRegex(),
										_extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
										url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
										_backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
										del: /^~+(?=\S)([\s\S]*?\S)~+/,
										text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
									})),
									(o.gfm.url = d(o.gfm.url, 'i')
										.replace('email', o.gfm._extended_email)
										.getRegex()),
									(o.breaks = b({}, o.gfm, {
										br: d(o.br)
											.replace('{2,}', '*')
											.getRegex(),
										text: d(o.gfm.text)
											.replace('\\b_', '\\b_| {2,}\\n')
											.replace(/\{2,\}/g, '*')
											.getRegex(),
									})),
									(i.rules = o),
									(i.output = function(e, t, n) {
										return new i(t, n).output(e);
									}),
									(i.prototype.output = function(e) {
										for (var t, n, r, o, a, s, l = ''; e; )
											if ((a = this.rules.escape.exec(e)))
												(e = e.substring(a[0].length)), (l += u(a[1]));
											else if ((a = this.rules.tag.exec(e)))
												!this.inLink && /^<a /i.test(a[0])
													? (this.inLink = !0)
													: this.inLink &&
													  /^<\/a>/i.test(a[0]) &&
													  (this.inLink = !1),
													!this.inRawBlock &&
													/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])
														? (this.inRawBlock = !0)
														: this.inRawBlock &&
														  /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) &&
														  (this.inRawBlock = !1),
													(e = e.substring(a[0].length)),
													(l += this.options.sanitize
														? this.options.sanitizer
															? this.options.sanitizer(a[0])
															: u(a[0])
														: a[0]);
											else if ((a = this.rules.link.exec(e))) {
												var c = w(a[2], '()');
												if (c > -1) {
													var f =
														a[0].length -
														(a[2].length - c) -
														(a[3] || '').length;
													(a[2] = a[2].substring(0, c)),
														(a[0] = a[0].substring(0, f).trim()),
														(a[3] = '');
												}
												(e = e.substring(a[0].length)),
													(this.inLink = !0),
													(r = a[2]),
													this.options.pedantic
														? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))
															? ((r = t[1]), (o = t[3]))
															: (o = '')
														: (o = a[3] ? a[3].slice(1, -1) : ''),
													(r = r.trim().replace(/^<([\s\S]*)>$/, '$1')),
													(l += this.outputLink(a, {
														href: i.escapes(r),
														title: i.escapes(o),
													})),
													(this.inLink = !1);
											} else if (
												(a = this.rules.reflink.exec(e)) ||
												(a = this.rules.nolink.exec(e))
											) {
												if (
													((e = e.substring(a[0].length)),
													(t = (a[2] || a[1]).replace(/\s+/g, ' ')),
													!(t = this.links[t.toLowerCase()]) || !t.href)
												) {
													(l += a[0].charAt(0)), (e = a[0].substring(1) + e);
													continue;
												}
												(this.inLink = !0),
													(l += this.outputLink(a, t)),
													(this.inLink = !1);
											} else if ((a = this.rules.strong.exec(e)))
												(e = e.substring(a[0].length)),
													(l += this.renderer.strong(
														this.output(a[4] || a[3] || a[2] || a[1]),
													));
											else if ((a = this.rules.em.exec(e)))
												(e = e.substring(a[0].length)),
													(l += this.renderer.em(
														this.output(
															a[6] || a[5] || a[4] || a[3] || a[2] || a[1],
														),
													));
											else if ((a = this.rules.code.exec(e)))
												(e = e.substring(a[0].length)),
													(l += this.renderer.codespan(u(a[2].trim(), !0)));
											else if ((a = this.rules.br.exec(e)))
												(e = e.substring(a[0].length)),
													(l += this.renderer.br());
											else if ((a = this.rules.del.exec(e)))
												(e = e.substring(a[0].length)),
													(l += this.renderer.del(this.output(a[1])));
											else if ((a = this.rules.autolink.exec(e)))
												(e = e.substring(a[0].length)),
													(r =
														'@' === a[2]
															? 'mailto:' + (n = u(this.mangle(a[1])))
															: (n = u(a[1]))),
													(l += this.renderer.link(r, null, n));
											else if (this.inLink || !(a = this.rules.url.exec(e))) {
												if ((a = this.rules.text.exec(e)))
													(e = e.substring(a[0].length)),
														this.inRawBlock
															? (l += this.renderer.text(a[0]))
															: (l += this.renderer.text(
																	u(this.smartypants(a[0])),
															  ));
												else if (e)
													throw new Error(
														'Infinite loop on byte: ' + e.charCodeAt(0),
													);
											} else {
												if ('@' === a[2]) r = 'mailto:' + (n = u(a[0]));
												else {
													do {
														(s = a[0]),
															(a[0] = this.rules._backpedal.exec(a[0])[0]);
													} while (s !== a[0]);
													(n = u(a[0])),
														(r = 'www.' === a[1] ? 'http://' + n : n);
												}
												(e = e.substring(a[0].length)),
													(l += this.renderer.link(r, null, n));
											}
										return l;
									}),
									(i.escapes = function(e) {
										return e ? e.replace(i.rules._escapes, '$1') : e;
									}),
									(i.prototype.outputLink = function(e, t) {
										var n = t.href,
											r = t.title ? u(t.title) : null;
										return '!' !== e[0].charAt(0)
											? this.renderer.link(n, r, this.output(e[1]))
											: this.renderer.image(n, r, u(e[1]));
									}),
									(i.prototype.smartypants = function(e) {
										return this.options.smartypants
											? e
													.replace(/---/g, '\u2014')
													.replace(/--/g, '\u2013')
													.replace(/(^|[-\u2014\/(\[{"\s])'/g, '$1\u2018')
													.replace(/'/g, '\u2019')
													.replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, '$1\u201c')
													.replace(/"/g, '\u201d')
													.replace(/\.{3}/g, '\u2026')
											: e;
									}),
									(i.prototype.mangle = function(e) {
										if (!this.options.mangle) return e;
										for (var t, n = '', r = e.length, o = 0; o < r; o++)
											(t = e.charCodeAt(o)),
												Math.random() > 0.5 && (t = 'x' + t.toString(16)),
												(n += '&#' + t + ';');
										return n;
									}),
									(a.prototype.code = function(e, t, n) {
										var r = (t || '').match(/\S*/)[0];
										if (this.options.highlight) {
											var o = this.options.highlight(e, r);
											null != o && o !== e && ((n = !0), (e = o));
										}
										return r
											? '<pre><code class="' +
													this.options.langPrefix +
													u(r, !0) +
													'">' +
													(n ? e : u(e, !0)) +
													'</code></pre>\n'
											: '<pre><code>' + (n ? e : u(e, !0)) + '</code></pre>';
									}),
									(a.prototype.blockquote = function(e) {
										return '<blockquote>\n' + e + '</blockquote>\n';
									}),
									(a.prototype.html = function(e) {
										return e;
									}),
									(a.prototype.heading = function(e, t, n, r) {
										return this.options.headerIds
											? '<h' +
													t +
													' id="' +
													this.options.headerPrefix +
													r.slug(n) +
													'">' +
													e +
													'</h' +
													t +
													'>\n'
											: '<h' + t + '>' + e + '</h' + t + '>\n';
									}),
									(a.prototype.hr = function() {
										return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
									}),
									(a.prototype.list = function(e, t, n) {
										var r = t ? 'ol' : 'ul';
										return (
											'<' +
											r +
											(t && 1 !== n ? ' start="' + n + '"' : '') +
											'>\n' +
											e +
											'</' +
											r +
											'>\n'
										);
									}),
									(a.prototype.listitem = function(e) {
										return '<li>' + e + '</li>\n';
									}),
									(a.prototype.checkbox = function(e) {
										return (
											'<input ' +
											(e ? 'checked="" ' : '') +
											'disabled="" type="checkbox"' +
											(this.options.xhtml ? ' /' : '') +
											'> '
										);
									}),
									(a.prototype.paragraph = function(e) {
										return '<p>' + e + '</p>\n';
									}),
									(a.prototype.table = function(e, t) {
										return (
											t && (t = '<tbody>' + t + '</tbody>'),
											'<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
										);
									}),
									(a.prototype.tablerow = function(e) {
										return '<tr>\n' + e + '</tr>\n';
									}),
									(a.prototype.tablecell = function(e, t) {
										var n = t.header ? 'th' : 'td';
										return (
											(t.align
												? '<' + n + ' align="' + t.align + '">'
												: '<' + n + '>') +
											e +
											'</' +
											n +
											'>\n'
										);
									}),
									(a.prototype.strong = function(e) {
										return '<strong>' + e + '</strong>';
									}),
									(a.prototype.em = function(e) {
										return '<em>' + e + '</em>';
									}),
									(a.prototype.codespan = function(e) {
										return '<code>' + e + '</code>';
									}),
									(a.prototype.br = function() {
										return this.options.xhtml ? '<br/>' : '<br>';
									}),
									(a.prototype.del = function(e) {
										return '<del>' + e + '</del>';
									}),
									(a.prototype.link = function(e, t, n) {
										if (
											null ===
											(e = p(this.options.sanitize, this.options.baseUrl, e))
										)
											return n;
										var r = '<a href="' + u(e) + '"';
										return (
											t && (r += ' title="' + t + '"'), r + '>' + n + '</a>'
										);
									}),
									(a.prototype.image = function(e, t, n) {
										if (
											null ===
											(e = p(this.options.sanitize, this.options.baseUrl, e))
										)
											return n;
										var r = '<img src="' + e + '" alt="' + n + '"';
										return (
											t && (r += ' title="' + t + '"'),
											r + (this.options.xhtml ? '/>' : '>')
										);
									}),
									(a.prototype.text = function(e) {
										return e;
									}),
									(s.prototype.strong = s.prototype.em = s.prototype.codespan = s.prototype.del = s.prototype.text = function(
										e,
									) {
										return e;
									}),
									(s.prototype.link = s.prototype.image = function(e, t, n) {
										return '' + n;
									}),
									(s.prototype.br = function() {
										return '';
									}),
									(l.parse = function(e, t) {
										return new l(t).parse(e);
									}),
									(l.prototype.parse = function(e) {
										(this.inline = new i(e.links, this.options)),
											(this.inlineText = new i(
												e.links,
												b({}, this.options, { renderer: new s() }),
											)),
											(this.tokens = e.reverse());
										for (var t = ''; this.next(); ) t += this.tok();
										return t;
									}),
									(l.prototype.next = function() {
										return (this.token = this.tokens.pop()), this.token;
									}),
									(l.prototype.peek = function() {
										return this.tokens[this.tokens.length - 1] || 0;
									}),
									(l.prototype.parseText = function() {
										for (var e = this.token.text; 'text' === this.peek().type; )
											e += '\n' + this.next().text;
										return this.inline.output(e);
									}),
									(l.prototype.tok = function() {
										switch (this.token.type) {
											case 'space':
												return '';
											case 'hr':
												return this.renderer.hr();
											case 'heading':
												return this.renderer.heading(
													this.inline.output(this.token.text),
													this.token.depth,
													f(this.inlineText.output(this.token.text)),
													this.slugger,
												);
											case 'code':
												return this.renderer.code(
													this.token.text,
													this.token.lang,
													this.token.escaped,
												);
											case 'table':
												var e,
													t,
													n,
													r,
													o = '',
													i = '';
												for (n = '', e = 0; e < this.token.header.length; e++)
													n += this.renderer.tablecell(
														this.inline.output(this.token.header[e]),
														{ header: !0, align: this.token.align[e] },
													);
												for (
													o += this.renderer.tablerow(n), e = 0;
													e < this.token.cells.length;
													e++
												) {
													for (
														t = this.token.cells[e], n = '', r = 0;
														r < t.length;
														r++
													)
														n += this.renderer.tablecell(
															this.inline.output(t[r]),
															{ header: !1, align: this.token.align[r] },
														);
													i += this.renderer.tablerow(n);
												}
												return this.renderer.table(o, i);
											case 'blockquote_start':
												for (i = ''; 'blockquote_end' !== this.next().type; )
													i += this.tok();
												return this.renderer.blockquote(i);
											case 'list_start':
												i = '';
												for (
													var a = this.token.ordered, s = this.token.start;
													'list_end' !== this.next().type;

												)
													i += this.tok();
												return this.renderer.list(i, a, s);
											case 'list_item_start':
												i = '';
												var l = this.token.loose,
													c = this.token.checked,
													u = this.token.task;
												for (
													this.token.task && (i += this.renderer.checkbox(c));
													'list_item_end' !== this.next().type;

												)
													i +=
														l || 'text' !== this.token.type
															? this.tok()
															: this.parseText();
												return this.renderer.listitem(i, u, c);
											case 'html':
												return this.renderer.html(this.token.text);
											case 'paragraph':
												return this.renderer.paragraph(
													this.inline.output(this.token.text),
												);
											case 'text':
												return this.renderer.paragraph(this.parseText());
											default:
												var d =
													'Token with "' +
													this.token.type +
													'" type was not found.';
												if (!this.options.silent) throw new Error(d);
												console.log(d);
										}
									}),
									(c.prototype.slug = function(e) {
										var t = e
											.toLowerCase()
											.trim()
											.replace(
												/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,
												'',
											)
											.replace(/\s/g, '-');
										if (this.seen.hasOwnProperty(t)) {
											var n = t;
											do {
												this.seen[n]++, (t = n + '-' + this.seen[n]);
											} while (this.seen.hasOwnProperty(t));
										}
										return (this.seen[t] = 0), t;
									}),
									(u.escapeTest = /[&<>"']/),
									(u.escapeReplace = /[&<>"']/g),
									(u.replacements = {
										'&': '&amp;',
										'<': '&lt;',
										'>': '&gt;',
										'"': '&quot;',
										"'": '&#39;',
									}),
									(u.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
									(u.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
								var h = {},
									g = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
								function m() {}
								function b(e) {
									for (var t, n, r = 1; r < arguments.length; r++)
										for (n in (t = arguments[r]))
											Object.prototype.hasOwnProperty.call(t, n) &&
												(e[n] = t[n]);
									return e;
								}
								function v(e, t) {
									var n = e
											.replace(/\|/g, function(e, t, n) {
												for (var r = !1, o = t; --o >= 0 && '\\' === n[o]; )
													r = !r;
												return r ? '|' : ' |';
											})
											.split(/ \|/),
										r = 0;
									if (n.length > t) n.splice(t);
									else for (; n.length < t; ) n.push('');
									for (; r < n.length; r++)
										n[r] = n[r].trim().replace(/\\\|/g, '|');
									return n;
								}
								function y(e, t, n) {
									if (0 === e.length) return '';
									for (var r = 0; r < e.length; ) {
										var o = e.charAt(e.length - r - 1);
										if (o !== t || n) {
											if (o === t || !n) break;
											r++;
										} else r++;
									}
									return e.substr(0, e.length - r);
								}
								function w(e, t) {
									if (-1 === e.indexOf(t[1])) return -1;
									for (var n = 0, r = 0; r < e.length; r++)
										if ('\\' === e[r]) r++;
										else if (e[r] === t[0]) n++;
										else if (e[r] === t[1] && --n < 0) return r;
									return -1;
								}
								function x(e, t, n) {
									if (null == e)
										throw new Error(
											'marked(): input parameter is undefined or null',
										);
									if ('string' != typeof e)
										throw new Error(
											'marked(): input parameter is of type ' +
												Object.prototype.toString.call(e) +
												', string expected',
										);
									if (n || 'function' == typeof t) {
										n || ((n = t), (t = null));
										var o,
											i,
											a = (t = b({}, x.defaults, t || {})).highlight,
											s = 0;
										try {
											o = r.lex(e, t);
										} catch (e) {
											return n(e);
										}
										i = o.length;
										var c = function(e) {
											if (e) return (t.highlight = a), n(e);
											var r;
											try {
												r = l.parse(o, t);
											} catch (t) {
												e = t;
											}
											return (t.highlight = a), e ? n(e) : n(null, r);
										};
										if (!a || a.length < 3) return c();
										if ((delete t.highlight, !i)) return c();
										for (; s < o.length; s++)
											!(function(e) {
												'code' !== e.type
													? --i || c()
													: a(e.text, e.lang, function(t, n) {
															return t
																? c(t)
																: null == n || n === e.text
																? --i || c()
																: ((e.text = n),
																  (e.escaped = !0),
																  void (--i || c()));
													  });
											})(o[s]);
									} else
										try {
											return (
												t && (t = b({}, x.defaults, t)), l.parse(r.lex(e, t), t)
											);
										} catch (e) {
											if (
												((e.message +=
													'\nPlease report this to https://github.com/markedjs/marked.'),
												(t || x.defaults).silent)
											)
												return (
													'<p>An error occurred:</p><pre>' +
													u(e.message + '', !0) +
													'</pre>'
												);
											throw e;
										}
								}
								(m.exec = m),
									(x.options = x.setOptions = function(e) {
										return b(x.defaults, e), x;
									}),
									(x.getDefaults = function() {
										return {
											baseUrl: null,
											breaks: !1,
											gfm: !0,
											headerIds: !0,
											headerPrefix: '',
											highlight: null,
											langPrefix: 'language-',
											mangle: !0,
											pedantic: !1,
											renderer: new a(),
											sanitize: !1,
											sanitizer: null,
											silent: !1,
											smartLists: !1,
											smartypants: !1,
											tables: !0,
											xhtml: !1,
										};
									}),
									(x.defaults = x.getDefaults()),
									(x.Parser = l),
									(x.parser = l.parse),
									(x.Renderer = a),
									(x.TextRenderer = s),
									(x.Lexer = r),
									(x.lexer = r.lex),
									(x.InlineLexer = i),
									(x.inlineLexer = i.output),
									(x.Slugger = c),
									(x.parse = x),
									(e.exports = x);
							})(this || ('undefined' != typeof window && window));
						}.call(this, n(10)));
					},
					function(e, t) {
						var n;
						n = (function() {
							return this;
						})();
						try {
							n = n || new Function('return this')();
						} catch (e) {
							'object' == typeof window && (n = window);
						}
						e.exports = n;
					},
					function(e, t, n) {
						'use strict';
						t.__esModule = !0;
						var r = n(12);
						r.registerLanguage('css', n(13)),
							r.registerLanguage('json', n(14)),
							r.registerLanguage('less', n(15)),
							r.registerLanguage('scss', n(16)),
							r.registerLanguage('javascript', n(17)),
							r.registerLanguage('typescript', n(18)),
							(t.default = r);
					},
					function(e, t, n) {
						('object' == typeof window && window) ||
							('object' == typeof self && self),
							(function(e) {
								var t = [],
									n = Object.keys,
									r = {},
									o = {},
									i = /^(no-?highlight|plain|text)$/i,
									a = /\blang(?:uage)?-([\w-]+)\b/i,
									s = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
									l = '</span>',
									c = {
										classPrefix: 'hljs-',
										tabReplace: null,
										useBR: !1,
										languages: void 0,
									};
								function u(e) {
									return e
										.replace(/&/g, '&amp;')
										.replace(/</g, '&lt;')
										.replace(/>/g, '&gt;');
								}
								function f(e) {
									return e.nodeName.toLowerCase();
								}
								function d(e, t) {
									var n = e && e.exec(t);
									return n && 0 === n.index;
								}
								function p(e) {
									return i.test(e);
								}
								function h(e) {
									var t,
										n = {},
										r = Array.prototype.slice.call(arguments, 1);
									for (t in e) n[t] = e[t];
									return (
										r.forEach(function(e) {
											for (t in e) n[t] = e[t];
										}),
										n
									);
								}
								function g(e) {
									var t = [];
									return (
										(function e(n, r) {
											for (var o = n.firstChild; o; o = o.nextSibling)
												3 === o.nodeType
													? (r += o.nodeValue.length)
													: 1 === o.nodeType &&
													  (t.push({ event: 'start', offset: r, node: o }),
													  (r = e(o, r)),
													  f(o).match(/br|hr|img|input/) ||
															t.push({ event: 'stop', offset: r, node: o }));
											return r;
										})(e, 0),
										t
									);
								}
								function m(e) {
									function t(e) {
										return (e && e.source) || e;
									}
									function r(n, r) {
										return new RegExp(
											t(n),
											'm' + (e.case_insensitive ? 'i' : '') + (r ? 'g' : ''),
										);
									}
									!(function o(i, a) {
										if (!i.compiled) {
											if (
												((i.compiled = !0),
												(i.keywords = i.keywords || i.beginKeywords),
												i.keywords)
											) {
												var s = {},
													l = function(t, n) {
														e.case_insensitive && (n = n.toLowerCase()),
															n.split(' ').forEach(function(e) {
																var n = e.split('|');
																s[n[0]] = [t, n[1] ? Number(n[1]) : 1];
															});
													};
												'string' == typeof i.keywords
													? l('keyword', i.keywords)
													: n(i.keywords).forEach(function(e) {
															l(e, i.keywords[e]);
													  }),
													(i.keywords = s);
											}
											(i.lexemesRe = r(i.lexemes || /\w+/, !0)),
												a &&
													(i.beginKeywords &&
														(i.begin =
															'\\b(' +
															i.beginKeywords.split(' ').join('|') +
															')\\b'),
													i.begin || (i.begin = /\B|\b/),
													(i.beginRe = r(i.begin)),
													i.endSameAsBegin && (i.end = i.begin),
													i.end || i.endsWithParent || (i.end = /\B|\b/),
													i.end && (i.endRe = r(i.end)),
													(i.terminator_end = t(i.end) || ''),
													i.endsWithParent &&
														a.terminator_end &&
														(i.terminator_end +=
															(i.end ? '|' : '') + a.terminator_end)),
												i.illegal && (i.illegalRe = r(i.illegal)),
												null == i.relevance && (i.relevance = 1),
												i.contains || (i.contains = []),
												(i.contains = Array.prototype.concat.apply(
													[],
													i.contains.map(function(e) {
														return (function(e) {
															return (
																e.variants &&
																	!e.cached_variants &&
																	(e.cached_variants = e.variants.map(function(
																		t,
																	) {
																		return h(e, { variants: null }, t);
																	})),
																e.cached_variants ||
																	(e.endsWithParent && [h(e)]) || [e]
															);
														})('self' === e ? i : e);
													}),
												)),
												i.contains.forEach(function(e) {
													o(e, i);
												}),
												i.starts && o(i.starts, a);
											var c = i.contains
												.map(function(e) {
													return e.beginKeywords
														? '\\.?(?:' + e.begin + ')\\.?'
														: e.begin;
												})
												.concat([i.terminator_end, i.illegal])
												.map(t)
												.filter(Boolean);
											i.terminators = c.length
												? r(
														(function(e, n) {
															for (
																var r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
																	o = 0,
																	i = '',
																	a = 0;
																a < e.length;
																a++
															) {
																var s = o,
																	l = t(e[a]);
																for (a > 0 && (i += '|'); l.length > 0; ) {
																	var c = r.exec(l);
																	if (null == c) {
																		i += l;
																		break;
																	}
																	(i += l.substring(0, c.index)),
																		(l = l.substring(c.index + c[0].length)),
																		'\\' == c[0][0] && c[1]
																			? (i += '\\' + String(Number(c[1]) + s))
																			: ((i += c[0]), '(' == c[0] && o++);
																}
															}
															return i;
														})(c),
														!0,
												  )
												: {
														exec: function() {
															return null;
														},
												  };
										}
									})(e);
								}
								function b(e, t, n, o) {
									function i(e) {
										return new RegExp(
											e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
											'm',
										);
									}
									function a(e, t) {
										var n = g.case_insensitive ? t[0].toLowerCase() : t[0];
										return e.keywords.hasOwnProperty(n) && e.keywords[n];
									}
									function s(e, t, n, r) {
										var o = '<span class="' + (r ? '' : c.classPrefix);
										return e ? (o += e + '">') + t + (n ? '' : l) : t;
									}
									function f() {
										(_ +=
											null != w.subLanguage
												? (function() {
														var e = 'string' == typeof w.subLanguage;
														if (e && !r[w.subLanguage]) return u(E);
														var t = e
															? b(w.subLanguage, E, !0, x[w.subLanguage])
															: v(
																	E,
																	w.subLanguage.length ? w.subLanguage : void 0,
															  );
														return (
															w.relevance > 0 && (O += t.relevance),
															e && (x[w.subLanguage] = t.top),
															s(t.language, t.value, !1, !0)
														);
												  })()
												: (function() {
														var e, t, n, r;
														if (!w.keywords) return u(E);
														for (
															r = '',
																t = 0,
																w.lexemesRe.lastIndex = 0,
																n = w.lexemesRe.exec(E);
															n;

														)
															(r += u(E.substring(t, n.index))),
																(e = a(w, n))
																	? ((O += e[1]), (r += s(e[0], u(n[0]))))
																	: (r += u(n[0])),
																(t = w.lexemesRe.lastIndex),
																(n = w.lexemesRe.exec(E));
														return r + u(E.substr(t));
												  })()),
											(E = '');
									}
									function p(e) {
										(_ += e.className ? s(e.className, '', !0) : ''),
											(w = Object.create(e, { parent: { value: w } }));
									}
									function h(e, t) {
										if (((E += e), null == t)) return f(), 0;
										var r = (function(e, t) {
											var n, r;
											for (n = 0, r = t.contains.length; n < r; n++)
												if (d(t.contains[n].beginRe, e))
													return (
														t.contains[n].endSameAsBegin &&
															(t.contains[n].endRe = i(
																t.contains[n].beginRe.exec(e)[0],
															)),
														t.contains[n]
													);
										})(t, w);
										if (r)
											return (
												r.skip
													? (E += t)
													: (r.excludeBegin && (E += t),
													  f(),
													  r.returnBegin || r.excludeBegin || (E = t)),
												p(r),
												r.returnBegin ? 0 : t.length
											);
										var o = (function e(t, n) {
											if (d(t.endRe, n)) {
												for (; t.endsParent && t.parent; ) t = t.parent;
												return t;
											}
											if (t.endsWithParent) return e(t.parent, n);
										})(w, t);
										if (o) {
											var a = w;
											a.skip
												? (E += t)
												: (a.returnEnd || a.excludeEnd || (E += t),
												  f(),
												  a.excludeEnd && (E = t));
											do {
												w.className && (_ += l),
													w.skip || w.subLanguage || (O += w.relevance),
													(w = w.parent);
											} while (w !== o.parent);
											return (
												o.starts &&
													(o.endSameAsBegin && (o.starts.endRe = o.endRe),
													p(o.starts)),
												a.returnEnd ? 0 : t.length
											);
										}
										if (
											(function(e, t) {
												return !n && d(t.illegalRe, e);
											})(t, w)
										)
											throw new Error(
												'Illegal lexeme "' +
													t +
													'" for mode "' +
													(w.className || '<unnamed>') +
													'"',
											);
										return (E += t), t.length || 1;
									}
									var g = k(e);
									if (!g) throw new Error('Unknown language: "' + e + '"');
									m(g);
									var y,
										w = o || g,
										x = {},
										_ = '';
									for (y = w; y !== g; y = y.parent)
										y.className && (_ = s(y.className, '', !0) + _);
									var E = '',
										O = 0;
									try {
										for (
											var N, S, C = 0;
											(w.terminators.lastIndex = C),
												(N = w.terminators.exec(t));

										)
											(S = h(t.substring(C, N.index), N[0])), (C = N.index + S);
										for (h(t.substr(C)), y = w; y.parent; y = y.parent)
											y.className && (_ += l);
										return { relevance: O, value: _, language: e, top: w };
									} catch (e) {
										if (e.message && -1 !== e.message.indexOf('Illegal'))
											return { relevance: 0, value: u(t) };
										throw e;
									}
								}
								function v(e, t) {
									t = t || c.languages || n(r);
									var o = { relevance: 0, value: u(e) },
										i = o;
									return (
										t
											.filter(k)
											.filter(_)
											.forEach(function(t) {
												var n = b(t, e, !1);
												(n.language = t),
													n.relevance > i.relevance && (i = n),
													n.relevance > o.relevance && ((i = o), (o = n));
											}),
										i.language && (o.second_best = i),
										o
									);
								}
								function y(e) {
									return c.tabReplace || c.useBR
										? e.replace(s, function(e, t) {
												return c.useBR && '\n' === e
													? '<br>'
													: c.tabReplace
													? t.replace(/\t/g, c.tabReplace)
													: '';
										  })
										: e;
								}
								function w(e) {
									var n,
										r,
										i,
										s,
										l,
										d = (function(e) {
											var t,
												n,
												r,
												o,
												i = e.className + ' ';
											if (
												((i += e.parentNode ? e.parentNode.className : ''),
												(n = a.exec(i)))
											)
												return k(n[1]) ? n[1] : 'no-highlight';
											for (t = 0, r = (i = i.split(/\s+/)).length; t < r; t++)
												if (p((o = i[t])) || k(o)) return o;
										})(e);
									p(d) ||
										(c.useBR
											? ((n = document.createElementNS(
													'http://www.w3.org/1999/xhtml',
													'div',
											  )).innerHTML = e.innerHTML
													.replace(/\n/g, '')
													.replace(/<br[ \/]*>/g, '\n'))
											: (n = e),
										(l = n.textContent),
										(i = d ? b(d, l, !0) : v(l)),
										(r = g(n)).length &&
											(((s = document.createElementNS(
												'http://www.w3.org/1999/xhtml',
												'div',
											)).innerHTML = i.value),
											(i.value = (function(e, n, r) {
												var o = 0,
													i = '',
													a = [];
												function s() {
													return e.length && n.length
														? e[0].offset !== n[0].offset
															? e[0].offset < n[0].offset
																? e
																: n
															: 'start' === n[0].event
															? e
															: n
														: e.length
														? e
														: n;
												}
												function l(e) {
													i +=
														'<' +
														f(e) +
														t.map
															.call(e.attributes, function(e) {
																return (
																	' ' +
																	e.nodeName +
																	'="' +
																	u(e.value).replace('"', '&quot;') +
																	'"'
																);
															})
															.join('') +
														'>';
												}
												function c(e) {
													i += '</' + f(e) + '>';
												}
												function d(e) {
													('start' === e.event ? l : c)(e.node);
												}
												for (; e.length || n.length; ) {
													var p = s();
													if (
														((i += u(r.substring(o, p[0].offset))),
														(o = p[0].offset),
														p === e)
													) {
														a.reverse().forEach(c);
														do {
															d(p.splice(0, 1)[0]), (p = s());
														} while (p === e && p.length && p[0].offset === o);
														a.reverse().forEach(l);
													} else
														'start' === p[0].event
															? a.push(p[0].node)
															: a.pop(),
															d(p.splice(0, 1)[0]);
												}
												return i + u(r.substr(o));
											})(r, g(s), l))),
										(i.value = y(i.value)),
										(e.innerHTML = i.value),
										(e.className = (function(e, t, n) {
											var r = t ? o[t] : n,
												i = [e.trim()];
											return (
												e.match(/\bhljs\b/) || i.push('hljs'),
												-1 === e.indexOf(r) && i.push(r),
												i.join(' ').trim()
											);
										})(e.className, d, i.language)),
										(e.result = { language: i.language, re: i.relevance }),
										i.second_best &&
											(e.second_best = {
												language: i.second_best.language,
												re: i.second_best.relevance,
											}));
								}
								function x() {
									if (!x.called) {
										x.called = !0;
										var e = document.querySelectorAll('pre code');
										t.forEach.call(e, w);
									}
								}
								function k(e) {
									return (e = (e || '').toLowerCase()), r[e] || r[o[e]];
								}
								function _(e) {
									var t = k(e);
									return t && !t.disableAutodetect;
								}
								(e.highlight = b),
									(e.highlightAuto = v),
									(e.fixMarkup = y),
									(e.highlightBlock = w),
									(e.configure = function(e) {
										c = h(c, e);
									}),
									(e.initHighlighting = x),
									(e.initHighlightingOnLoad = function() {
										addEventListener('DOMContentLoaded', x, !1),
											addEventListener('load', x, !1);
									}),
									(e.registerLanguage = function(t, n) {
										var i = (r[t] = n(e));
										i.aliases &&
											i.aliases.forEach(function(e) {
												o[e] = t;
											});
									}),
									(e.listLanguages = function() {
										return n(r);
									}),
									(e.getLanguage = k),
									(e.autoDetection = _),
									(e.inherit = h),
									(e.IDENT_RE = '[a-zA-Z]\\w*'),
									(e.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'),
									(e.NUMBER_RE = '\\b\\d+(\\.\\d+)?'),
									(e.C_NUMBER_RE =
										'(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
									(e.BINARY_NUMBER_RE = '\\b(0b[01]+)'),
									(e.RE_STARTERS_RE =
										'!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
									(e.BACKSLASH_ESCAPE = {
										begin: '\\\\[\\s\\S]',
										relevance: 0,
									}),
									(e.APOS_STRING_MODE = {
										className: 'string',
										begin: "'",
										end: "'",
										illegal: '\\n',
										contains: [e.BACKSLASH_ESCAPE],
									}),
									(e.QUOTE_STRING_MODE = {
										className: 'string',
										begin: '"',
										end: '"',
										illegal: '\\n',
										contains: [e.BACKSLASH_ESCAPE],
									}),
									(e.PHRASAL_WORDS_MODE = {
										begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
									}),
									(e.COMMENT = function(t, n, r) {
										var o = e.inherit(
											{ className: 'comment', begin: t, end: n, contains: [] },
											r || {},
										);
										return (
											o.contains.push(e.PHRASAL_WORDS_MODE),
											o.contains.push({
												className: 'doctag',
												begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
												relevance: 0,
											}),
											o
										);
									}),
									(e.C_LINE_COMMENT_MODE = e.COMMENT('//', '$')),
									(e.C_BLOCK_COMMENT_MODE = e.COMMENT('/\\*', '\\*/')),
									(e.HASH_COMMENT_MODE = e.COMMENT('#', '$')),
									(e.NUMBER_MODE = {
										className: 'number',
										begin: e.NUMBER_RE,
										relevance: 0,
									}),
									(e.C_NUMBER_MODE = {
										className: 'number',
										begin: e.C_NUMBER_RE,
										relevance: 0,
									}),
									(e.BINARY_NUMBER_MODE = {
										className: 'number',
										begin: e.BINARY_NUMBER_RE,
										relevance: 0,
									}),
									(e.CSS_NUMBER_MODE = {
										className: 'number',
										begin:
											e.NUMBER_RE +
											'(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
										relevance: 0,
									}),
									(e.REGEXP_MODE = {
										className: 'regexp',
										begin: /\//,
										end: /\/[gimuy]*/,
										illegal: /\n/,
										contains: [
											e.BACKSLASH_ESCAPE,
											{
												begin: /\[/,
												end: /\]/,
												relevance: 0,
												contains: [e.BACKSLASH_ESCAPE],
											},
										],
									}),
									(e.TITLE_MODE = {
										className: 'title',
										begin: e.IDENT_RE,
										relevance: 0,
									}),
									(e.UNDERSCORE_TITLE_MODE = {
										className: 'title',
										begin: e.UNDERSCORE_IDENT_RE,
										relevance: 0,
									}),
									(e.METHOD_GUARD = {
										begin: '\\.\\s*' + e.UNDERSCORE_IDENT_RE,
										relevance: 0,
									});
							})(t);
					},
					function(e, t) {
						e.exports = function(e) {
							var t = {
								begin: /[A-Z\_\.\-]+\s*:/,
								returnBegin: !0,
								end: ';',
								endsWithParent: !0,
								contains: [
									{
										className: 'attribute',
										begin: /\S/,
										end: ':',
										excludeEnd: !0,
										starts: {
											endsWithParent: !0,
											excludeEnd: !0,
											contains: [
												{
													begin: /[\w-]+\(/,
													returnBegin: !0,
													contains: [
														{ className: 'built_in', begin: /[\w-]+/ },
														{
															begin: /\(/,
															end: /\)/,
															contains: [
																e.APOS_STRING_MODE,
																e.QUOTE_STRING_MODE,
															],
														},
													],
												},
												e.CSS_NUMBER_MODE,
												e.QUOTE_STRING_MODE,
												e.APOS_STRING_MODE,
												e.C_BLOCK_COMMENT_MODE,
												{ className: 'number', begin: '#[0-9A-Fa-f]+' },
												{ className: 'meta', begin: '!important' },
											],
										},
									},
								],
							};
							return {
								case_insensitive: !0,
								illegal: /[=\/|'\$]/,
								contains: [
									e.C_BLOCK_COMMENT_MODE,
									{ className: 'selector-id', begin: /#[A-Za-z0-9_-]+/ },
									{ className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/ },
									{
										className: 'selector-attr',
										begin: /\[/,
										end: /\]/,
										illegal: '$',
									},
									{
										className: 'selector-pseudo',
										begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/,
									},
									{
										begin: '@(font-face|page)',
										lexemes: '[a-z-]+',
										keywords: 'font-face page',
									},
									{
										begin: '@',
										end: '[{;]',
										illegal: /:/,
										contains: [
											{ className: 'keyword', begin: /\w+/ },
											{
												begin: /\s/,
												endsWithParent: !0,
												excludeEnd: !0,
												relevance: 0,
												contains: [
													e.APOS_STRING_MODE,
													e.QUOTE_STRING_MODE,
													e.CSS_NUMBER_MODE,
												],
											},
										],
									},
									{
										className: 'selector-tag',
										begin: '[a-zA-Z-][a-zA-Z0-9_-]*',
										relevance: 0,
									},
									{
										begin: '{',
										end: '}',
										illegal: /\S/,
										contains: [e.C_BLOCK_COMMENT_MODE, t],
									},
								],
							};
						};
					},
					function(e, t) {
						e.exports = function(e) {
							var t = { literal: 'true false null' },
								n = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
								r = {
									end: ',',
									endsWithParent: !0,
									excludeEnd: !0,
									contains: n,
									keywords: t,
								},
								o = {
									begin: '{',
									end: '}',
									contains: [
										{
											className: 'attr',
											begin: /"/,
											end: /"/,
											contains: [e.BACKSLASH_ESCAPE],
											illegal: '\\n',
										},
										e.inherit(r, { begin: /:/ }),
									],
									illegal: '\\S',
								},
								i = {
									begin: '\\[',
									end: '\\]',
									contains: [e.inherit(r)],
									illegal: '\\S',
								};
							return (
								n.splice(n.length, 0, o, i),
								{ contains: n, keywords: t, illegal: '\\S' }
							);
						};
					},
					function(e, t) {
						e.exports = function(e) {
							var t = '([\\w-]+|@{[\\w-]+})',
								n = [],
								r = [],
								o = function(e) {
									return { className: 'string', begin: '~?' + e + '.*?' + e };
								},
								i = function(e, t, n) {
									return { className: e, begin: t, relevance: n };
								},
								a = { begin: '\\(', end: '\\)', contains: r, relevance: 0 };
							r.push(
								e.C_LINE_COMMENT_MODE,
								e.C_BLOCK_COMMENT_MODE,
								o("'"),
								o('"'),
								e.CSS_NUMBER_MODE,
								{
									begin: '(url|data-uri)\\(',
									starts: {
										className: 'string',
										end: '[\\)\\n]',
										excludeEnd: !0,
									},
								},
								i('number', '#[0-9A-Fa-f]+\\b'),
								a,
								i('variable', '@@?[\\w-]+', 10),
								i('variable', '@{[\\w-]+}'),
								i('built_in', '~?`[^`]*?`'),
								{
									className: 'attribute',
									begin: '[\\w-]+\\s*:',
									end: ':',
									returnBegin: !0,
									excludeEnd: !0,
								},
								{ className: 'meta', begin: '!important' },
							);
							var s = r.concat({ begin: '{', end: '}', contains: n }),
								l = {
									beginKeywords: 'when',
									endsWithParent: !0,
									contains: [{ beginKeywords: 'and not' }].concat(r),
								},
								c = {
									begin: t + '\\s*:',
									returnBegin: !0,
									end: '[;}]',
									relevance: 0,
									contains: [
										{
											className: 'attribute',
											begin: t,
											end: ':',
											excludeEnd: !0,
											starts: {
												endsWithParent: !0,
												illegal: '[<=$]',
												relevance: 0,
												contains: r,
											},
										},
									],
								},
								u = {
									className: 'keyword',
									begin:
										'@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
									starts: {
										end: '[;{}]',
										returnEnd: !0,
										contains: r,
										relevance: 0,
									},
								},
								f = {
									className: 'variable',
									variants: [
										{ begin: '@[\\w-]+\\s*:', relevance: 15 },
										{ begin: '@[\\w-]+' },
									],
									starts: { end: '[;}]', returnEnd: !0, contains: s },
								},
								d = {
									variants: [
										{ begin: '[\\.#:&\\[>]', end: '[;{}]' },
										{ begin: t, end: '{' },
									],
									returnBegin: !0,
									returnEnd: !0,
									illegal: '[<=\'$"]',
									relevance: 0,
									contains: [
										e.C_LINE_COMMENT_MODE,
										e.C_BLOCK_COMMENT_MODE,
										l,
										i('keyword', 'all\\b'),
										i('variable', '@{[\\w-]+}'),
										i('selector-tag', t + '%?', 0),
										i('selector-id', '#' + t),
										i('selector-class', '\\.' + t, 0),
										i('selector-tag', '&', 0),
										{ className: 'selector-attr', begin: '\\[', end: '\\]' },
										{
											className: 'selector-pseudo',
											begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/,
										},
										{ begin: '\\(', end: '\\)', contains: s },
										{ begin: '!important' },
									],
								};
							return (
								n.push(
									e.C_LINE_COMMENT_MODE,
									e.C_BLOCK_COMMENT_MODE,
									u,
									f,
									c,
									d,
								),
								{ case_insensitive: !0, illegal: '[=>\'/<($"]', contains: n }
							);
						};
					},
					function(e, t) {
						e.exports = function(e) {
							var t = {
									className: 'variable',
									begin: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b',
								},
								n = { className: 'number', begin: '#[0-9A-Fa-f]+' };
							return (
								e.CSS_NUMBER_MODE,
								e.QUOTE_STRING_MODE,
								e.APOS_STRING_MODE,
								e.C_BLOCK_COMMENT_MODE,
								{
									case_insensitive: !0,
									illegal: "[=/|']",
									contains: [
										e.C_LINE_COMMENT_MODE,
										e.C_BLOCK_COMMENT_MODE,
										{
											className: 'selector-id',
											begin: '\\#[A-Za-z0-9_-]+',
											relevance: 0,
										},
										{
											className: 'selector-class',
											begin: '\\.[A-Za-z0-9_-]+',
											relevance: 0,
										},
										{
											className: 'selector-attr',
											begin: '\\[',
											end: '\\]',
											illegal: '$',
										},
										{
											className: 'selector-tag',
											begin:
												'\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
											relevance: 0,
										},
										{
											begin:
												':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)',
										},
										{
											begin:
												'::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)',
										},
										t,
										{
											className: 'attribute',
											begin:
												'\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
											illegal: '[^\\s]',
										},
										{
											begin:
												'\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b',
										},
										{
											begin: ':',
											end: ';',
											contains: [
												t,
												n,
												e.CSS_NUMBER_MODE,
												e.QUOTE_STRING_MODE,
												e.APOS_STRING_MODE,
												{ className: 'meta', begin: '!important' },
											],
										},
										{
											begin: '@',
											end: '[{;]',
											keywords:
												'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
											contains: [
												t,
												e.QUOTE_STRING_MODE,
												e.APOS_STRING_MODE,
												n,
												e.CSS_NUMBER_MODE,
												{ begin: '\\s[A-Za-z0-9_.-]+', relevance: 0 },
											],
										},
									],
								}
							);
						};
					},
					function(e, t) {
						e.exports = function(e) {
							var t = '[A-Za-z$_][0-9A-Za-z$_]*',
								n = {
									keyword:
										'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
									literal: 'true false null undefined NaN Infinity',
									built_in:
										'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise',
								},
								r = {
									className: 'number',
									variants: [
										{ begin: '\\b(0[bB][01]+)' },
										{ begin: '\\b(0[oO][0-7]+)' },
										{ begin: e.C_NUMBER_RE },
									],
									relevance: 0,
								},
								o = {
									className: 'subst',
									begin: '\\$\\{',
									end: '\\}',
									keywords: n,
									contains: [],
								},
								i = {
									className: 'string',
									begin: '`',
									end: '`',
									contains: [e.BACKSLASH_ESCAPE, o],
								};
							o.contains = [
								e.APOS_STRING_MODE,
								e.QUOTE_STRING_MODE,
								i,
								r,
								e.REGEXP_MODE,
							];
							var a = o.contains.concat([
								e.C_BLOCK_COMMENT_MODE,
								e.C_LINE_COMMENT_MODE,
							]);
							return {
								aliases: ['js', 'jsx'],
								keywords: n,
								contains: [
									{
										className: 'meta',
										relevance: 10,
										begin: /^\s*['"]use (strict|asm)['"]/,
									},
									{ className: 'meta', begin: /^#!/, end: /$/ },
									e.APOS_STRING_MODE,
									e.QUOTE_STRING_MODE,
									i,
									e.C_LINE_COMMENT_MODE,
									e.C_BLOCK_COMMENT_MODE,
									r,
									{
										begin: /[{,]\s*/,
										relevance: 0,
										contains: [
											{
												begin: t + '\\s*:',
												returnBegin: !0,
												relevance: 0,
												contains: [
													{ className: 'attr', begin: t, relevance: 0 },
												],
											},
										],
									},
									{
										begin:
											'(' +
											e.RE_STARTERS_RE +
											'|\\b(case|return|throw)\\b)\\s*',
										keywords: 'return throw case',
										contains: [
											e.C_LINE_COMMENT_MODE,
											e.C_BLOCK_COMMENT_MODE,
											e.REGEXP_MODE,
											{
												className: 'function',
												begin: '(\\(.*?\\)|' + t + ')\\s*=>',
												returnBegin: !0,
												end: '\\s*=>',
												contains: [
													{
														className: 'params',
														variants: [
															{ begin: t },
															{ begin: /\(\s*\)/ },
															{
																begin: /\(/,
																end: /\)/,
																excludeBegin: !0,
																excludeEnd: !0,
																keywords: n,
																contains: a,
															},
														],
													},
												],
											},
											{ className: '', begin: /\s/, end: /\s*/, skip: !0 },
											{
												begin: /</,
												end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
												subLanguage: 'xml',
												contains: [
													{ begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: !0 },
													{
														begin: /<[A-Za-z0-9\\._:-]+/,
														end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
														skip: !0,
														contains: [
															{ begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: !0 },
															'self',
														],
													},
												],
											},
										],
										relevance: 0,
									},
									{
										className: 'function',
										beginKeywords: 'function',
										end: /\{/,
										excludeEnd: !0,
										contains: [
											e.inherit(e.TITLE_MODE, { begin: t }),
											{
												className: 'params',
												begin: /\(/,
												end: /\)/,
												excludeBegin: !0,
												excludeEnd: !0,
												contains: a,
											},
										],
										illegal: /\[|%/,
									},
									{ begin: /\$[(.]/ },
									e.METHOD_GUARD,
									{
										className: 'class',
										beginKeywords: 'class',
										end: /[{;=]/,
										excludeEnd: !0,
										illegal: /[:"\[\]]/,
										contains: [
											{ beginKeywords: 'extends' },
											e.UNDERSCORE_TITLE_MODE,
										],
									},
									{
										beginKeywords: 'constructor get set',
										end: /\{/,
										excludeEnd: !0,
									},
								],
								illegal: /#(?!!)/,
							};
						};
					},
					function(e, t) {
						e.exports = function(e) {
							var t = {
									keyword:
										'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
									literal: 'true false null undefined NaN Infinity',
									built_in:
										'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise',
								},
								n = { className: 'meta', begin: '@[A-Za-z$_][0-9A-Za-z$_]*' },
								r = {
									begin: '\\(',
									end: /\)/,
									keywords: t,
									contains: [
										'self',
										e.QUOTE_STRING_MODE,
										e.APOS_STRING_MODE,
										e.NUMBER_MODE,
									],
								},
								o = {
									className: 'params',
									begin: /\(/,
									end: /\)/,
									excludeBegin: !0,
									excludeEnd: !0,
									keywords: t,
									contains: [
										e.C_LINE_COMMENT_MODE,
										e.C_BLOCK_COMMENT_MODE,
										n,
										r,
									],
								};
							return {
								aliases: ['ts'],
								keywords: t,
								contains: [
									{ className: 'meta', begin: /^\s*['"]use strict['"]/ },
									e.APOS_STRING_MODE,
									e.QUOTE_STRING_MODE,
									{
										className: 'string',
										begin: '`',
										end: '`',
										contains: [
											e.BACKSLASH_ESCAPE,
											{ className: 'subst', begin: '\\$\\{', end: '\\}' },
										],
									},
									e.C_LINE_COMMENT_MODE,
									e.C_BLOCK_COMMENT_MODE,
									{
										className: 'number',
										variants: [
											{ begin: '\\b(0[bB][01]+)' },
											{ begin: '\\b(0[oO][0-7]+)' },
											{ begin: e.C_NUMBER_RE },
										],
										relevance: 0,
									},
									{
										begin:
											'(' +
											e.RE_STARTERS_RE +
											'|\\b(case|return|throw)\\b)\\s*',
										keywords: 'return throw case',
										contains: [
											e.C_LINE_COMMENT_MODE,
											e.C_BLOCK_COMMENT_MODE,
											e.REGEXP_MODE,
											{
												className: 'function',
												begin: '(\\(.*?\\)|' + e.IDENT_RE + ')\\s*=>',
												returnBegin: !0,
												end: '\\s*=>',
												contains: [
													{
														className: 'params',
														variants: [
															{ begin: e.IDENT_RE },
															{ begin: /\(\s*\)/ },
															{
																begin: /\(/,
																end: /\)/,
																excludeBegin: !0,
																excludeEnd: !0,
																keywords: t,
																contains: [
																	'self',
																	e.C_LINE_COMMENT_MODE,
																	e.C_BLOCK_COMMENT_MODE,
																],
															},
														],
													},
												],
											},
										],
										relevance: 0,
									},
									{
										className: 'function',
										begin: 'function',
										end: /[\{;]/,
										excludeEnd: !0,
										keywords: t,
										contains: [
											'self',
											e.inherit(e.TITLE_MODE, {
												begin: '[A-Za-z$_][0-9A-Za-z$_]*',
											}),
											o,
										],
										illegal: /%/,
										relevance: 0,
									},
									{
										beginKeywords: 'constructor',
										end: /\{/,
										excludeEnd: !0,
										contains: ['self', o],
									},
									{
										begin: /module\./,
										keywords: { built_in: 'module' },
										relevance: 0,
									},
									{ beginKeywords: 'module', end: /\{/, excludeEnd: !0 },
									{
										beginKeywords: 'interface',
										end: /\{/,
										excludeEnd: !0,
										keywords: 'interface extends',
									},
									{ begin: /\$[(.]/ },
									{ begin: '\\.' + e.IDENT_RE, relevance: 0 },
									n,
									r,
								],
							};
						};
					},
					function(e, t, n) {
						'use strict';
						(t.__esModule = !0),
							(t.default = function(e, t) {
								e.addEventListener('keydown', function(e) {
									if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
										if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey)
											switch (e.keyCode) {
												case 90:
													e.preventDefault(), t('undo');
													break;
												case 89:
													e.preventDefault(), t('redo');
													break;
												case 83:
													e.preventDefault(), t('save');
											}
									} else
										switch (e.keyCode) {
											case 9:
												e.preventDefault(), t('tab');
										}
								});
							});
					},
					function(e, t, n) {
						'use strict';
						var r,
							o =
								(this && this.__extends) ||
								((r = function(e, t) {
									return (r =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function(e, t) {
												e.__proto__ = t;
											}) ||
										function(e, t) {
											for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
										})(e, t);
								}),
								function(e, t) {
									function n() {
										this.constructor = e;
									}
									r(e, t),
										(e.prototype =
											null === t
												? Object.create(t)
												: ((n.prototype = t.prototype), new n()));
								}),
							i =
								(this && this.__importStar) ||
								function(e) {
									if (e && e.__esModule) return e;
									var t = {};
									if (null != e)
										for (var n in e)
											Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
									return (t.default = e), t;
								};
						t.__esModule = !0;
						var a = i(n(0)),
							s = (function(e) {
								function t(t) {
									var n = e.call(this, t) || this;
									return (n.state = { imgHidden: !0, imgList: [] }), n;
								}
								return (
									o(t, e),
									(t.prototype.onClick = function(e) {
										this.props.onClick(e);
									}),
									(t.prototype.imgClick = function() {
										this.setState({ imgHidden: !this.state.imgHidden });
									}),
									(t.prototype.imgMouseOver = function() {
										window.clearTimeout(this.timer),
											this.setState({ imgHidden: !1 });
									}),
									(t.prototype.imgMouseOut = function() {
										var e = this;
										this.timer = window.setTimeout(function() {
											e.setState({ imgHidden: !0 });
										}, 150);
									}),
									(t.prototype.addImgUrl = function() {
										this.props.onClick('img');
									}),
									(t.prototype.addImgFile = function(e) {
										var t = this.state.imgList,
											n = t.length;
										t.push(e.target.files[0]),
											this.setState({ imgList: t }),
											this.props.addImg(e.target.files[0], n),
											(e.target.value = '');
									}),
									(t.prototype.render = function() {
										var e = this,
											t = this.props,
											n = t.toolbar,
											r = t.words,
											o = this.state.imgHidden;
										return a.createElement(
											'ul',
											null,
											n.undo &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('undo');
														},
														title: r.undo + ' (ctrl+z)',
													},
													a.createElement('i', {
														className: 'foricon for-undo',
													}),
												),
											n.redo &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('redo');
														},
														title: r.redo + ' (ctrl+y)',
													},
													a.createElement('i', {
														className: 'foricon for-redo',
													}),
												),
											n.h1 &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('h1');
														},
														title: r.h1,
													},
													'H1',
												),
											n.h2 &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('h2');
														},
														title: r.h2,
													},
													'H2',
												),
											n.h3 &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('h3');
														},
														title: r.h3,
													},
													'H3',
												),
											n.h4 &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('h4');
														},
														title: r.h4,
													},
													'H4',
												),
											n.img &&
												a.createElement(
													'li',
													{
														className: 'for-toolbar-img',
														onMouseOver: function() {
															return e.imgMouseOver();
														},
														onMouseOut: function() {
															return e.imgMouseOut();
														},
													},
													a.createElement('i', {
														className: 'foricon for-image',
													}),
													a.createElement(
														'ul',
														{ style: o ? { display: 'none' } : {} },
														a.createElement(
															'li',
															{
																onClick: function() {
																	return e.addImgUrl();
																},
															},
															r.addImgLink,
														),
														a.createElement(
															'li',
															null,
															r.addImg,
															a.createElement('input', {
																type: 'file',
																accept:
																	'image/gif,image/jpeg,image/jpg,image/png,image/svg',
																onChange: function(t) {
																	return e.addImgFile(t);
																},
															}),
														),
													),
												),
											n.link &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('link');
														},
														title: r.link,
													},
													a.createElement('i', {
														className: 'foricon for-link',
													}),
												),
											n.code &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('code');
														},
														title: r.code,
													},
													a.createElement('i', {
														className: 'foricon for-code',
													}),
												),
											n.save &&
												a.createElement(
													'li',
													{
														onClick: function() {
															return e.onClick('save');
														},
														title: r.save + ' (ctrl+s)',
													},
													a.createElement('i', {
														className: 'foricon for-save',
													}),
												),
										);
									}),
									(t.defaultProps = {
										onClick: function() {},
										toolbar: {},
										words: {},
									}),
									t
								);
							})(a.Component);
						t.default = s;
					},
					function(e, t, n) {
						'use strict';
						var r,
							o =
								(this && this.__extends) ||
								((r = function(e, t) {
									return (r =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function(e, t) {
												e.__proto__ = t;
											}) ||
										function(e, t) {
											for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
										})(e, t);
								}),
								function(e, t) {
									function n() {
										this.constructor = e;
									}
									r(e, t),
										(e.prototype =
											null === t
												? Object.create(t)
												: ((n.prototype = t.prototype), new n()));
								}),
							i =
								(this && this.__importStar) ||
								function(e) {
									if (e && e.__esModule) return e;
									var t = {};
									if (null != e)
										for (var n in e)
											Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
									return (t.default = e), t;
								},
							a =
								(this && this.__importDefault) ||
								function(e) {
									return e && e.__esModule ? e : { default: e };
								};
						t.__esModule = !0;
						var s = i(n(0)),
							l = a(n(3)),
							c = (function(e) {
								function t() {
									return (null !== e && e.apply(this, arguments)) || this;
								}
								return (
									o(t, e),
									(t.prototype.onClick = function(e) {
										this.props.onClick(e);
									}),
									(t.prototype.render = function() {
										var e = this,
											t = this.props,
											n = t.preview,
											r = t.expand,
											o = t.subfield,
											i = t.toolbar,
											a = t.words,
											c = l.default({ 'for-active': n }),
											u = l.default({ 'for-active': r }),
											f = l.default({ 'for-active': o });
										return s.createElement(
											'ul',
											null,
											i.expand &&
												s.createElement(
													'li',
													{
														className: u,
														onClick: function() {
															return e.onClick('expand');
														},
														title: u ? a.fullscreenOff : a.fullscreenOn,
													},
													u
														? s.createElement('i', {
																className: 'foricon for-contract',
														  })
														: s.createElement('i', {
																className: 'foricon for-expand',
														  }),
												),
											i.preview &&
												s.createElement(
													'li',
													{
														className: c,
														onClick: function() {
															return e.onClick('preview');
														},
														title: a.preview,
													},
													c
														? s.createElement('i', {
																className: 'foricon for-eye-off',
														  })
														: s.createElement('i', {
																className: 'foricon for-eye',
														  }),
												),
											i.subfield &&
												s.createElement(
													'li',
													{
														className: f,
														onClick: function() {
															return e.onClick('subfield');
														},
														title: f ? a.singleColumn : a.doubleColumn,
													},
													s.createElement('i', {
														className: 'foricon for-subfield',
													}),
												),
										);
									}),
									(t.defaultProps = {
										onClick: function() {},
										toolbars: {},
										words: {},
									}),
									t
								);
							})(s.Component);
						t.default = c;
					},
					function(e, t, n) {
						'use strict';
						(t.__esModule = !0),
							(t.insertText = function(e, t) {
								var n = t.prefix,
									r = t.str,
									o = void 0 === r ? '' : r,
									i = t.subfix,
									a = void 0 === i ? '' : i,
									s = e.value;
								if (e.selectionStart || 0 === e.selectionStart) {
									var l = e.selectionStart,
										c = e.selectionEnd,
										u = e.scrollTop;
									l === c
										? ((e.value =
												s.substring(0, l) +
												n +
												o +
												a +
												s.substring(c, s.length)),
										  (e.selectionStart = l + n.length),
										  (e.selectionEnd = c + n.length + o.length))
										: ((e.value =
												s.substring(0, l) +
												n +
												s.substring(l, c) +
												a +
												s.substring(c, s.length)),
										  (e.selectionStart = l + n.length),
										  (e.selectionEnd = c + n.length)),
										e.focus(),
										u >= 0 && (e.scrollTop = u);
								}
								return e.value;
							});
					},
					function(e, t, n) {
						var r = n(24);
						'string' == typeof r && (r = [[e.i, r, '']]),
							n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }),
							r.locals && (e.exports = r.locals);
					},
					function(e, t, n) {
						(e.exports = n(1)(!1)).push([
							e.i,
							'/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n  color: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n  color: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #8959a8;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: white;\n  color: #4d4d4c;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n',
							'',
						]);
					},
					function(e, t) {
						e.exports = function(e) {
							var t = 'undefined' != typeof window && window.location;
							if (!t) throw new Error('fixUrls requires window.location');
							if (!e || 'string' != typeof e) return e;
							var n = t.protocol + '//' + t.host,
								r = n + t.pathname.replace(/\/[^\/]*$/, '/');
							return e.replace(
								/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
								function(e, t) {
									var o,
										i = t
											.trim()
											.replace(/^"(.*)"$/, function(e, t) {
												return t;
											})
											.replace(/^'(.*)'$/, function(e, t) {
												return t;
											});
									return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
										i,
									)
										? e
										: ((o =
												0 === i.indexOf('//')
													? i
													: 0 === i.indexOf('/')
													? n + i
													: r + i.replace(/^\.\//, '')),
										  'url(' + JSON.stringify(o) + ')');
								},
							);
						};
					},
					function(e, t, n) {
						var r = n(27);
						'string' == typeof r && (r = [[e.i, r, '']]),
							n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }),
							r.locals && (e.exports = r.locals);
					},
					function(e, t, n) {
						t = e.exports = n(1)(!1);
						var r = n(28),
							o = r(n(4)),
							i = r(n(4) + '#iefix'),
							a = r(n(29)),
							s = r(n(30)),
							l = r(n(31) + '#foricon');
						t.push([
							e.i,
							'@font-face {font-family: "foricon";\n  src: url(' +
								o +
								'); /* IE9 */\n  src: url(' +
								i +
								") format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAiYAAsAAAAAEKwAAAhKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCECgqTEI8pATYCJAM0CxwABCAFhGEHgQgb4Q2jopRu9sj+IsE2lvbwQSEYAzUIDVc+fN1ilSTZf3ZUbnJocJqIh//2+98+M3NF/0fUmunqJEIRD43EIpEgxN8JiYiHpKF4KJDe5VxtAY3K+PZI3iMqVJhLNy2nn24PFGj5yvD846b94P0JUAkJVZkYzCTMlO2FZE47N3oeTjm480jroXU6c2FiGrchXq82lhAo7AS5xIq3b779XN2Nd6hHnWV6+XfTs203xPQjYiERNSQ8ingVbYRMKpRCKQl4vjE1L2vqzkLL0a+QscB230ygt13EuH5++wC+IqJBm8d5ysFXUhRDWGidtebEIl4CR5ueqw4DL8qfj78m4ZNUWXTgjbtnCRz+YHeaqDcK5znXAIu7LIw3I+MoUMbiodZ9GyyWEZY+x3baTAtdfkhRwA/k5qvFqJOsqFb/8hqtTm8wErWIjUxYUVJ/IJViyYmU4IaU4Y5U4IFUwROphhdSA2+kFj5IHXyRevghDXBhvTKvqdNmYC/I49z8ThR4W05S+ZeFpy0ThYMzZAuBmbDIyGgsOiEhMSEjI6+mOkWmRx5dxoTjBoMeajQe0Y/n8JzFRWcdGwkBkpW8xLiENNZpaVQFTRwMJqOMkkSMjB3OC+Mlih4D5umdPFvbEF+8NaOqzlqwhTVVbbZqCrdkmmu3xWuLto7meWjyi4RakkizIIASXFaf0XWu86jObvjpsYenOyd9mpFeEu4mtfRMmz2lI1Vw7Uk3GpAQxCtC6OcBcAKKqOiSimu9xOQ6MAhqD1+33ZTlFSdcO24CEbuNGlYqrsnToAvHd2e3YDFeagAaIKVlTXY1YNM5NgBAEMjJ1+iZJLoohKdxJkaJ35SfZU5SUSrxCRbkRKHdZhJ5xg4HdNQvsTi6ynS4+niCqvREGzQg4PLpHL7Q4nRZz7Hqoq3j9d9zNuRxum6//2+93lVNWKmhlpRQtHpDo/pYoZpEpWKirGvoYFtChH6cx/GqjKocuu4054kzgZqwxUunh876yaH50kyBZBsOBd6Wwy1Xn6WuCuchUbOxcShOrKkqsJR2QerPtBFQsnZddm0TtuGcd57n6xIeQ2UeI66FdK4DwNdBzB+qTw9B6NtyddlwTtukgTQK9eB1VOFAECwdAzfPIiCvoqesKRAT6/j5e7xFvmGiCcMneA43EeRbDL8K5NW8wvGovzXFhDkMMm7lFv11nGWhQEpkp0XdKL88ngmvZoFznZiq8TMV46ddte2GqhKr61izpqrqbKYgz0sR7FLMdLkKf4ZDu7iD9iIzjBrMjGmN0jhbRNpGG7RvWxvfyA5tG9Ng2s0Ldmi/uVZrC9kibEfkwo6EBKFb127dEIRN3+f2z9xqa41mZJ3bjPTP6zWrtXZ61ffrpVu1HpI5qtq2MSbeJue72Tc/3y7b4XZol0tVcnOdTyemjS5pfU4xl98FlPJF4Hhg9nf51vyxs/YX/K36W3sxNHBkPjll8PiLwV+POsH06cCp6e1299YcHjkYi3brvH0HxQ6hqFf/DuprNehxZ2sQ3leMKRjowzBmn+L7dz2kmfAVpdbWv3s/n1DI+f170tkblmCe+SRsXqE1V7S3lKkQy+pQogcBRaezZLfvgkwYNWXecCuFGAyVmvmtliWkRqRmF3PM11Yb9NO05dQmJjdpYyvQGUxrVSqHP4RN5dQ0ba6+WjvfsTShlcG2NL77fG2VLpdSDbfOyx8/CunSLidTqwPBbT9yLgMwuLhB+kJd68z+9ilz5CGGXkcbjUEGczCqJzB9FGhxRhX8lfP2aNOpl4/uRNt9v9f/c+n5PzAi+Do1XTpgwC5k1ZomR+yeJZqgjBrmPHvpPLM+8UUXupI0gEkeEBqY7BqQfNn7Y1gTj10+8qUHvv33P1zb1T1c9MP3PXp17FXQs1OPnj5f6J+Lz/+FnPw67XFxx/7i3i77o0AhlWQLos9SV66OciUPBMlKiufT/6N7p7eWSnqRzj9Nnny5eUx7U7RRNkYZgSnKRFa0iQoaDSdlji95p/vwxeQwU2aHabvREabCDiOYc7sEewoR9Mny6/IX7Dr2RUaWP0FL7t/zkM+IxY40zWYIqqAl9x54iGekd0mJTIv0RpWKpajnwb2SBvS6BVSWIvAp9t6UDR2a8QeWlKr9NFh4M6iA5W9/IwHp2bvv4M08Op/0zC4Oz37406nThlFsXkD3bjoUdzLMF3/prOovDTsws+J0SJtOm6aj6ZhWoXwox5SXuYBJo9Hjup5Df5jTydvFWHoCt/IZylTWVES2pyXRYP0P2+anqkkAi7Alq1PUsDdJ1inWRg3YjRJ+yLlsfkph0CxBZG3VyMDxGQwifUX993Anz6TaH93m3dc++i9yxvc/eXZQsgjbwE1xK4loOMR//SzCCWVli1Knshi71OwgcfKEW5XQx+UsQFSw2td5xDoxzkmjWMYgwa0gwz2gwMO6yuCUrtY4r+sdcbL5YI2GJUpHK7FFF2avQIKvQYafQIGfdZX1/km9gv91vZvhXXCwP17CE42cMGGzFcuFamTipjCjetD6DtO+4npiLeKeUHd5GRsPRrX6C2xQtz+gm6cTIsmkVjU7792SsKoUa7UqUNAgI2qnw6HUHToQqobQNRriKDdNMDOr5DlBacgcEu5cur/ZHZTqVfh4CP0QStgTJN0EszhmbGBkBheskQx5DZ07c6kJirMklhLdr6sx51elQKpxjcK0elIMmgtkIGtR1ZoaxlNJKRucV9ShvQB60QdOkSJHiSrqaKKNLvoYYowpZuWWStDJa56ihSt0cdnyJrE1Jsrum+xw56NXhHaVN6Xd8Tn6L0tFmgvyhEfESkpPqKqvmw4AAA==') format('woff2'),\n  url(" +
								a +
								") format('woff'),\n  url(" +
								s +
								") format('truetype'), \n  url(" +
								l +
								') format(\'svg\'); /* iOS 4.1- */\n}\n\n.foricon {\n  font-family: "foricon" !important;\n  font-size: inherit;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.for-code:before {\n  content: "\\e620";\n}\n\n.for-image:before {\n  content: "\\e621";\n}\n\n.for-eye:before {\n  content: "\\e622";\n}\n\n.for-expand:before {\n  content: "\\e623";\n}\n\n.for-redo:before {\n  content: "\\e624";\n}\n\n.for-undo:before {\n  content: "\\e625";\n}\n\n.for-quote:before {\n  content: "\\e626";\n}\n\n.for-link:before {\n  content: "\\e627";\n}\n\n.for-save:before {\n  content: "\\e628";\n}\n\n.for-contract:before {\n  content: "\\e629";\n}\n\n.for-eye-off:before {\n  content: "\\e62a";\n}\n\n.for-subfield:before {\n  content: "\\e62b";\n}\n\n',
							'',
						]);
					},
					function(e, t, n) {
						'use strict';
						e.exports = function(e, t) {
							return 'string' != typeof e
								? e
								: (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
								  /["'() \t\n]/.test(e) || t
										? '"' + e.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
										: e);
						};
					},
					function(e, t, n) {
						e.exports = n.p + 'static/fonts/iconfont.fe07082d.woff';
					},
					function(e, t, n) {
						e.exports = n.p + 'static/fonts/iconfont.a614fc0f.ttf';
					},
					function(e, t, n) {
						e.exports = n.p + 'static/fonts/iconfont.35e220a6.svg';
					},
					function(e, t, n) {
						var r = n(33);
						'string' == typeof r && (r = [[e.i, r, '']]),
							n(2)(r, { hmr: !0, transform: void 0, insertInto: void 0 }),
							r.locals && (e.exports = r.locals);
					},
					function(e, t, n) {
						(e.exports = n(1)(!1)).push([
							e.i,
							".for-container {\n  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 12px;\n  background: #fff;\n  font-size: 14px; }\n  .for-container ul,\n  .for-container ol,\n  .for-container li {\n    margin: 0;\n    padding: 0; }\n  .for-container.for-fullscreen {\n    position: fixed;\n    z-index: 99999;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 100% !important; }\n  .for-container > div:first-child {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px; }\n  .for-container .for-hidden {\n    display: none; }\n  .for-container .for-toolbar {\n    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 6px;\n    border-bottom: 1px solid #ddd;\n    color: #555;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    .for-container .for-toolbar > ul {\n      display: flex; }\n      .for-container .for-toolbar > ul > li {\n        display: flex;\n        align-items: center;\n        padding: 4px 6px;\n        margin: 8px 4px;\n        border-radius: 4px;\n        line-height: normal; }\n        .for-container .for-toolbar > ul > li.for-toolbar-img {\n          position: relative; }\n          .for-container .for-toolbar > ul > li.for-toolbar-img > ul {\n            position: absolute;\n            top: 100%;\n            left: -50px;\n            width: 140px;\n            margin-top: 4px;\n            background: #fff;\n            border-radius: 4px;\n            box-shadow: rgba(0, 0, 0, 0.1) 0 2px 8px 0;\n            z-index: 99;\n            line-height: 2.8;\n            text-align: center; }\n            .for-container .for-toolbar > ul > li.for-toolbar-img > ul li {\n              position: relative; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li:hover {\n                background: #e9e9e9; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li:first-child {\n                border-radius: 4px 4px 0 0; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li:last-child {\n                border-radius: 0 0 4px 4px; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li input {\n                position: absolute;\n                width: 100%;\n                opacity: 0;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                cursor: pointer; }\n        .for-container .for-toolbar > ul > li.for-active {\n          background: #ddd; }\n        .for-container .for-toolbar > ul > li:hover {\n          cursor: pointer;\n          background: #e9e9e9; }\n        .for-container .for-toolbar > ul > li i {\n          font-size: 1.2em; }\n  .for-container .for-editor {\n    display: flex;\n    justify-content: space-between;\n    height: 100%;\n    color: #2c3e50;\n    border-radius: 0 0 8px 8px;\n    overflow: hidden; }\n    .for-container .for-editor .for-panel {\n      height: 100%;\n      flex: 0 0 100%;\n      overflow: auto;\n      transition: all 0.2s linear 0s; }\n      .for-container .for-editor .for-panel.for-active {\n        flex: 0 0 50%; }\n      .for-container .for-editor .for-panel .for-preview {\n        min-height: 100%;\n        box-sizing: border-box;\n        padding: 10px 14px;\n        background: #fcfcfc; }\n    .for-container .for-editor .for-editor-edit {\n      line-height: 1.6;\n      height: 100%; }\n      .for-container .for-editor .for-editor-edit.for-edit-preview {\n        width: 0;\n        flex: 0 0 0; }\n      .for-container .for-editor .for-editor-edit .for-editor-block {\n        display: flex;\n        min-height: 100%; }\n      .for-container .for-editor .for-editor-edit .for-line-num {\n        list-style: none;\n        background: #eee;\n        padding: 8px 0 120px;\n        min-width: 30px;\n        text-align: center; }\n        .for-container .for-editor .for-editor-edit .for-line-num.hidden {\n          display: none; }\n        .for-container .for-editor .for-editor-edit .for-line-num li {\n          list-style: none; }\n      .for-container .for-editor .for-editor-edit .for-editor-content {\n        flex: 1;\n        position: relative;\n        height: 100%;\n        margin-left: 10px; }\n        .for-container .for-editor .for-editor-edit .for-editor-content pre {\n          padding: 8px 0;\n          display: block;\n          white-space: pre-wrap;\n          word-wrap: break-word;\n          visibility: hidden;\n          margin: 0;\n          font-family: inherit; }\n  .for-container textarea {\n    font-family: 'Consolas', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    padding: 8px 0;\n    display: block;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    resize: none;\n    border: none;\n    outline: none;\n    font-size: inherit;\n    color: inherit;\n    background: none;\n    line-height: inherit; }\n  .for-container .for-markdown-preview {\n    line-height: 2; }\n    .for-container .for-markdown-preview p,\n    .for-container .for-markdown-preview blockquote,\n    .for-container .for-markdown-preview ul,\n    .for-container .for-markdown-preview ol,\n    .for-container .for-markdown-preview dl,\n    .for-container .for-markdown-preview pre {\n      margin-top: 0;\n      margin-bottom: 0.6em; }\n    .for-container .for-markdown-preview h1,\n    .for-container .for-markdown-preview h2 {\n      border-bottom: 1px solid #e2e2e2; }\n    .for-container .for-markdown-preview h1,\n    .for-container .for-markdown-preview h2,\n    .for-container .for-markdown-preview h3,\n    .for-container .for-markdown-preview h4,\n    .for-container .for-markdown-preview h5,\n    .for-container .for-markdown-preview h6 {\n      padding: 0;\n      margin: 0 0 0.6em;\n      font-weight: 600;\n      text-indent: 0; }\n      .for-container .for-markdown-preview h1:target,\n      .for-container .for-markdown-preview h2:target,\n      .for-container .for-markdown-preview h3:target,\n      .for-container .for-markdown-preview h4:target,\n      .for-container .for-markdown-preview h5:target,\n      .for-container .for-markdown-preview h6:target {\n        padding-top: 4.5rem; }\n    .for-container .for-markdown-preview a {\n      color: #0366d6;\n      text-decoration: none; }\n      .for-container .for-markdown-preview a:hover {\n        text-decoration: underline; }\n    .for-container .for-markdown-preview ul,\n    .for-container .for-markdown-preview ol {\n      padding: 0.2em 0.8em; }\n      .for-container .for-markdown-preview ul > li,\n      .for-container .for-markdown-preview ol > li {\n        line-height: 2;\n        padding-left: 0.2em;\n        margin-left: 0.2em;\n        list-style-type: disc; }\n        .for-container .for-markdown-preview ul > li > p,\n        .for-container .for-markdown-preview ol > li > p {\n          text-indent: 0; }\n        .for-container .for-markdown-preview ul > li > ul:last-child,\n        .for-container .for-markdown-preview ol > li > ul:last-child {\n          margin-bottom: 0; }\n        .for-container .for-markdown-preview ul > li > ul li,\n        .for-container .for-markdown-preview ol > li > ul li {\n          list-style-type: circle; }\n          .for-container .for-markdown-preview ul > li > ul li > ul li,\n          .for-container .for-markdown-preview ol > li > ul li > ul li {\n            list-style-type: square; }\n    .for-container .for-markdown-preview > ul,\n    .for-container .for-markdown-preview ol {\n      padding: 0 20px; }\n    .for-container .for-markdown-preview ol > li {\n      list-style-type: decimal; }\n    .for-container .for-markdown-preview blockquote {\n      margin: 0;\n      margin-bottom: 0.6em;\n      padding: 0 1em;\n      color: #6a737d;\n      border-left: 0.25em solid #dfe2e5; }\n      .for-container .for-markdown-preview blockquote p {\n        text-indent: 0; }\n        .for-container .for-markdown-preview blockquote p:first-child {\n          margin-top: 0; }\n        .for-container .for-markdown-preview blockquote p:last-child {\n          margin-bottom: 0; }\n    .for-container .for-markdown-preview pre {\n      padding: 0.6em;\n      overflow: auto;\n      line-height: 1.6;\n      background-color: #f0f0f0;\n      border-radius: 3px; }\n      .for-container .for-markdown-preview pre code {\n        padding: 0;\n        margin: 0;\n        font-size: 100%;\n        background: transparent; }\n    .for-container .for-markdown-preview code {\n      padding: 0.2em 0.4em;\n      margin: 0;\n      background-color: #f0f0f0;\n      border-radius: 3px; }\n    .for-container .for-markdown-preview hr {\n      margin-bottom: 0.6em;\n      height: 1px;\n      background: #dadada;\n      border: none; }\n    .for-container .for-markdown-preview table {\n      width: 100%;\n      border: 1px solid #ddd;\n      margin-bottom: 0.6em;\n      border-collapse: collapse;\n      text-align: left; }\n      .for-container .for-markdown-preview table thead {\n        background: #eee; }\n      .for-container .for-markdown-preview table th,\n      .for-container .for-markdown-preview table td {\n        padding: 0.1em 0.4em;\n        border: 1px solid #ddd; }\n    .for-container .for-markdown-preview img {\n      display: block;\n      margin: 0 auto;\n      max-width: 100%;\n      margin-bottom: 0.6em; }\n",
							'',
						]);
					},
					function(e, t, n) {
						'use strict';
						var r =
							(this && this.__importDefault) ||
							function(e) {
								return e && e.__esModule ? e : { default: e };
							};
						t.__esModule = !0;
						var o = r(n(35)),
							i = r(n(36));
						t.CONFIG = {
							language: { 'zh-CN': o.default, en: i.default },
							langList: ['zh-CN', 'en'],
							toolbar: {
								h1: !0,
								h2: !0,
								h3: !0,
								h4: !0,
								img: !0,
								link: !0,
								code: !0,
								preview: !0,
								expand: !0,
								undo: !0,
								redo: !0,
								save: !0,
								subfield: !0,
							},
						};
					},
					function(e) {
						e.exports = JSON.parse(
							'{"placeholder":"\u5f00\u59cb\u7f16\u8f91...","undo":"\u4e0a\u4e00\u6b65","redo":"\u4e0b\u4e00\u6b65","h1":"\u4e00\u7ea7\u6807\u9898","h2":"\u4e8c\u7ea7\u6807\u9898","h3":"\u4e09\u7ea7\u6807\u9898","h4":"\u56db\u7ea7\u6807\u9898","img":"\u6dfb\u52a0\u56fe\u7247\u94fe\u63a5","link":"\u94fe\u63a5","code":"\u4ee3\u7801\u5757","save":"\u4fdd\u5b58","preview":"\u9884\u89c8","singleColumn":"\u5355\u680f","doubleColumn":"\u53cc\u680f","fullscreenOn":"\u5168\u5c4f\u7f16\u8f91","fullscreenOff":"\u9000\u51fa\u5168\u5c4f","addImgLink":"\u6dfb\u52a0\u56fe\u7247\u94fe\u63a5","addImg":"\u4e0a\u4f20\u56fe\u7247"}',
						);
					},
					function(e) {
						e.exports = JSON.parse(
							'{"placeholder":"Begin editing...","undo":"Undo","redo":"Redo","h1":"Header 1","h2":"Header 2","h3":"Header 3","h4":"Header 4","img":"Image Link","link":"Link","code":"Code","save":"Save","preview":"Preview","singleColumn":"Single Column","doubleColumn":"Double Columns","fullscreenOn":"FullScreen ON","fullscreenOff":"FullScreen OFF","addImgLink":"Add Image Link","addImg":"Upload Image"}',
						);
					},
				]));
		},
	},
]);
