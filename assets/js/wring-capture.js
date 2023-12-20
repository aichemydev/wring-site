!(function () {
    "use strict";
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
                ? e(Object(r), !0).forEach(function (e) {
                      c(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : e(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  });
        }
        return t;
    }
    function n() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        n = function () {
            return e;
        };
        var e = {},
            t = Object.prototype,
            r = t.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            a = i.toStringTag || "@@toStringTag";
        function c(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
            c({}, "");
        } catch (e) {
            c = function (e, t, n) {
                return (e[t] = n);
            };
        }
        function u(e, t, n, r) {
            var i = t && t.prototype instanceof p ? t : p,
                o = Object.create(i.prototype),
                s = new x(r || []);
            return (
                (o._invoke = (function (e, t, n) {
                    var r = "suspendedStart";
                    return function (i, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw o;
                            return E();
                        }
                        for (n.method = i, n.arg = o; ; ) {
                            var s = n.delegate;
                            if (s) {
                                var a = b(s, n);
                                if (a) {
                                    if (a === d) continue;
                                    return a;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var c = l(e, t, n);
                            if ("normal" === c.type) {
                                if (((r = n.done ? "completed" : "suspendedYield"), c.arg === d)) continue;
                                return { value: c.arg, done: n.done };
                            }
                            "throw" === c.type && ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
                        }
                    };
                })(e, n, s)),
                o
            );
        }
        function l(e, t, n) {
            try {
                return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        e.wrap = u;
        var d = {};
        function p() {}
        function f() {}
        function h() {}
        var _ = {};
        c(_, o, function () {
            return this;
        });
        var g = Object.getPrototypeOf,
            v = g && g(g(O([])));
        v && v !== t && r.call(v, o) && (_ = v);
        var y = (h.prototype = p.prototype = Object.create(_));
        function m(e) {
            ["next", "throw", "return"].forEach(function (t) {
                c(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function w(e, t) {
            function n(i, o, s, a) {
                var c = l(e[i], e, o);
                if ("throw" !== c.type) {
                    var u = c.arg,
                        d = u.value;
                    return d && "object" == typeof d && r.call(d, "__await")
                        ? t.resolve(d.__await).then(
                              function (e) {
                                  n("next", e, s, a);
                              },
                              function (e) {
                                  n("throw", e, s, a);
                              }
                          )
                        : t.resolve(d).then(
                              function (e) {
                                  (u.value = e), s(u);
                              },
                              function (e) {
                                  return n("throw", e, s, a);
                              }
                          );
                }
                a(c.arg);
            }
            var i;
            this._invoke = function (e, r) {
                function o() {
                    return new t(function (t, i) {
                        n(e, r, t, i);
                    });
                }
                return (i = i ? i.then(o, o) : o());
            };
        }
        function b(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (((t.delegate = null), "throw" === t.method)) {
                    if (e.iterator.return && ((t.method = "return"), (t.arg = void 0), b(e, t), "throw" === t.method)) return d;
                    (t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                }
                return d;
            }
            var r = l(n, e.iterator, t.arg);
            if ("throw" === r.type) return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), d;
            var i = r.arg;
            return i
                ? i.done
                    ? ((t[e.resultName] = i.value), (t.next = e.nextLoc), "return" !== t.method && ((t.method = "next"), (t.arg = void 0)), (t.delegate = null), d)
                    : i
                : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), d);
        }
        function k(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
        }
        function S(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(k, this), this.reset(!0);
        }
        function O(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        i = function t() {
                            for (; ++n < e.length; ) if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                            return (t.value = void 0), (t.done = !0), t;
                        };
                    return (i.next = i);
                }
            }
            return { next: E };
        }
        function E() {
            return { value: void 0, done: !0 };
        }
        return (
            (f.prototype = h),
            c(y, "constructor", h),
            c(h, "constructor", f),
            (f.displayName = c(h, a, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name));
            }),
            (e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), c(e, a, "GeneratorFunction")), (e.prototype = Object.create(y)), e;
            }),
            (e.awrap = function (e) {
                return { __await: e };
            }),
            m(w.prototype),
            c(w.prototype, s, function () {
                return this;
            }),
            (e.AsyncIterator = w),
            (e.async = function (t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var s = new w(u(t, n, r, i), o);
                return e.isGeneratorFunction(n)
                    ? s
                    : s.next().then(function (e) {
                          return e.done ? e.value : s.next();
                      });
            }),
            m(y),
            c(y, a, "Generator"),
            c(y, o, function () {
                return this;
            }),
            c(y, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return (
                    t.reverse(),
                    function n() {
                        for (; t.length; ) {
                            var r = t.pop();
                            if (r in e) return (n.value = r), (n.done = !1), n;
                        }
                        return (n.done = !0), n;
                    }
                );
            }),
            (e.values = O),
            (x.prototype = {
                constructor: x,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(S), !e))
                        for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;
                    function n(n, r) {
                        return (s.type = "throw"), (s.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i],
                            s = o.completion;
                        if ("root" === o.tryLoc) return n("end");
                        if (o.tryLoc <= this.prev) {
                            var a = r.call(o, "catchLoc"),
                                c = r.call(o, "finallyLoc");
                            if (a && c) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                            } else if (a) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break;
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var s = o ? o.completion : {};
                    return (s.type = e), (s.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), d) : this.complete(s);
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t),
                        d
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                S(n);
                            }
                            return i;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, t, n) {
                    return (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }), "next" === this.method && (this.arg = void 0), d;
                },
            }),
            e
        );
    }
    function r(e) {
        return (
            (r =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            r(e)
        );
    }
    function i(e, t, n, r, i, o, s) {
        try {
            var a = e[o](s),
                c = a.value;
        } catch (e) {
            return void n(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    function a(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && d(e, t);
    }
    function l(e) {
        return (
            (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            l(e)
        );
    }
    function d(e, t) {
        return (
            (d = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                      return (e.__proto__ = t), e;
                  }),
            d(e, t)
        );
    }
    function p(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        })(e);
    }
    function f(e) {
        var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
                return !1;
            }
        })();
        return function () {
            var n,
                r = l(e);
            if (t) {
                var i = l(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return p(this, n);
        };
    }
    function h(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null == n) return;
                var r,
                    i,
                    o = [],
                    s = !0,
                    a = !1;
                try {
                    for (n = n.call(e); !(s = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); s = !0);
                } catch (e) {
                    (a = !0), (i = e);
                } finally {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
                return o;
            })(e, t) ||
            g(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function _(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return v(e);
            })(e) ||
            (function (e) {
                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
            })(e) ||
            g(e) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function g(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0;
        }
    }
    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function y(e, t) {
        var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = g(e)) || (t && e && "number" == typeof e.length)) {
                n && (e = n);
                var r = 0,
                    i = function () {};
                return {
                    s: i,
                    n: function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: i,
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o,
            s = !0,
            a = !1;
        return {
            s: function () {
                n = n.call(e);
            },
            n: function () {
                var e = n.next();
                return (s = e.done), e;
            },
            e: function (e) {
                (a = !0), (o = e);
            },
            f: function () {
                try {
                    s || null == n.return || n.return();
                } finally {
                    if (a) throw o;
                }
            },
        };
    }
    var m = String.fromCharCode,
        w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        k = {};
    function S(e, t) {
        if (!k[e]) {
            k[e] = {};
            for (var n = 0; n < e.length; n++) k[e][e.charAt(n)] = n;
        }
        return k[e][t];
    }
    var x = {
            compressToBase64: function (e) {
                if (null == e) return "";
                var t = x._compress(e, 6, function (e) {
                    return w.charAt(e);
                });
                switch (t.length % 4) {
                    default:
                    case 0:
                        return t;
                    case 1:
                        return t + "===";
                    case 2:
                        return t + "==";
                    case 3:
                        return t + "=";
                }
            },
            decompressFromBase64: function (e) {
                return null == e
                    ? ""
                    : "" == e
                    ? null
                    : x._decompress(e.length, 32, function (t) {
                          return S(w, e.charAt(t));
                      });
            },
            compressToUTF16: function (e) {
                return null == e
                    ? ""
                    : x._compress(e, 15, function (e) {
                          return m(e + 32);
                      }) + " ";
            },
            decompressFromUTF16: function (e) {
                return null == e
                    ? ""
                    : "" == e
                    ? null
                    : x._decompress(e.length, 16384, function (t) {
                          return e.charCodeAt(t) - 32;
                      });
            },
            compressToUint8Array: function (e) {
                for (var t = x.compress(e), n = new Uint8Array(2 * t.length), r = 0, i = t.length; r < i; r++) {
                    var o = t.charCodeAt(r);
                    (n[2 * r] = o >>> 8), (n[2 * r + 1] = o % 256);
                }
                return n;
            },
            decompressFromUint8Array: function (e) {
                if (null == e) return x.decompress(e);
                for (var t = new Array(e.length / 2), n = 0, r = t.length; n < r; n++) t[n] = 256 * e[2 * n] + e[2 * n + 1];
                var i = [];
                return (
                    t.forEach(function (e) {
                        i.push(m(e));
                    }),
                    x.decompress(i.join(""))
                );
            },
            compressToEncodedURIComponent: function (e) {
                return null == e
                    ? ""
                    : x._compress(e, 6, function (e) {
                          return b.charAt(e);
                      });
            },
            decompressFromEncodedURIComponent: function (e) {
                return null == e
                    ? ""
                    : "" == e
                    ? null
                    : ((e = e.replace(/ /g, "+")),
                      x._decompress(e.length, 32, function (t) {
                          return S(b, e.charAt(t));
                      }));
            },
            compress: function (e) {
                return x._compress(e, 16, function (e) {
                    return m(e);
                });
            },
            _compress: function (e, t, n) {
                if (null == e) return "";
                var r,
                    i,
                    o,
                    s = "",
                    a = "",
                    c = "",
                    u = 2,
                    l = 3,
                    d = 2,
                    p = 0,
                    f = 0,
                    h = {},
                    _ = {},
                    g = [];
                for (o = 0; o < e.length; o += 1)
                    if (((s = e.charAt(o)), Object.prototype.hasOwnProperty.call(h, s) || ((h[s] = l++), (_[s] = !0)), (a = c + s), Object.prototype.hasOwnProperty.call(h, a))) c = a;
                    else {
                        if (Object.prototype.hasOwnProperty.call(_, c)) {
                            if (c.charCodeAt(0) < 256) {
                                for (r = 0; r < d; r++) (p <<= 1), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++;
                                for (i = c.charCodeAt(0), r = 0; r < 8; r++) (p = (p << 1) | (1 & i)), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i >>= 1);
                            } else {
                                for (i = 1, r = 0; r < d; r++) (p = (p << 1) | i), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i = 0);
                                for (i = c.charCodeAt(0), r = 0; r < 16; r++) (p = (p << 1) | (1 & i)), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i >>= 1);
                            }
                            0 == --u && ((u = Math.pow(2, d)), d++), delete _[c];
                        } else for (i = h[c], r = 0; r < d; r++) (p = (p << 1) | (1 & i)), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i >>= 1);
                        0 == --u && ((u = Math.pow(2, d)), d++), (h[a] = l++), (c = String(s));
                    }
                if ("" !== c) {
                    if (Object.prototype.hasOwnProperty.call(_, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (r = 0; r < d; r++) (p <<= 1), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++;
                            for (i = c.charCodeAt(0), r = 0; r < 8; r++) (p = (p << 1) | (1 & i)), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i >>= 1);
                        } else {
                            for (i = 1, r = 0; r < d; r++) (p = (p << 1) | i), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i = 0);
                            for (i = c.charCodeAt(0), r = 0; r < 16; r++) (p = (p << 1) | (1 & i)), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i >>= 1);
                        }
                        0 == --u && ((u = Math.pow(2, d)), d++), delete _[c];
                    } else for (i = h[c], r = 0; r < d; r++) (p = (p << 1) | (1 & i)), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i >>= 1);
                    0 == --u && ((u = Math.pow(2, d)), d++);
                }
                for (i = 2, r = 0; r < d; r++) (p = (p << 1) | (1 & i)), f == t - 1 ? ((f = 0), g.push(n(p)), (p = 0)) : f++, (i >>= 1);
                for (;;) {
                    if (((p <<= 1), f == t - 1)) {
                        g.push(n(p));
                        break;
                    }
                    f++;
                }
                return g.join("");
            },
            decompress: function (e) {
                return null == e
                    ? ""
                    : "" == e
                    ? null
                    : x._decompress(e.length, 32768, function (t) {
                          return e.charCodeAt(t);
                      });
            },
            _decompress: function (e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l = [],
                    d = [],
                    p = { val: n(0), position: t, index: 1 },
                    f = 4,
                    h = 4,
                    _ = 3,
                    g = "";
                for (r = 0; r < 3; r += 1) l[r] = r;
                for (o = 0, a = Math.pow(2, 2), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
                switch (o) {
                    case 0:
                        for (o = 0, a = Math.pow(2, 8), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
                        u = m(o);
                        break;
                    case 1:
                        for (o = 0, a = Math.pow(2, 16), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
                        u = m(o);
                        break;
                    case 2:
                        return "";
                }
                for (l[3] = u, i = u, d.push(u); ; ) {
                    if (p.index > e) return "";
                    for (o = 0, a = Math.pow(2, _), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
                    switch ((u = o)) {
                        case 0:
                            for (o = 0, a = Math.pow(2, 8), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
                            (l[h++] = m(o)), (u = h - 1), f--;
                            break;
                        case 1:
                            for (o = 0, a = Math.pow(2, 16), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
                            (l[h++] = m(o)), (u = h - 1), f--;
                            break;
                        case 2:
                            return d.join("");
                    }
                    if ((0 == f && ((f = Math.pow(2, _)), _++), l[u])) g = l[u];
                    else {
                        if (u !== h) return null;
                        g = i + i.charAt(0);
                    }
                    d.push(g), (l[h++] = i + g.charAt(0)), (i = g), 0 == --f && ((f = Math.pow(2, _)), _++);
                }
            },
        },
        O = { DEBUG: !1, LIB_VERSION: "1.29.0" },
        E = Array.prototype,
        I = Object.prototype,
        P = I.toString,
        F = I.hasOwnProperty,
        A = "undefined" != typeof window ? window : {},
        $ = A.navigator || { userAgent: "" },
        T = A.document || {},
        q = $.userAgent,
        C = E.forEach,
        M = E.indexOf,
        R = Array.isArray,
        j = {},
        N = function () {
            if (O.DEBUG && !V(window.console) && window.console) {
                for (var e = ("__rrweb_original__" in window.console.log) ? window.console.log.__rrweb_original__ : window.console.log, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                try {
                    e.apply(window.console, n);
                } catch (t) {
                    H(n, function (t) {
                        e(t);
                    });
                }
            }
        },
        D = function () {
            if (O.DEBUG && !V(window.console) && window.console) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = ["PostHog error:"].concat(t),
                    i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
                try {
                    i.apply(window.console, r);
                } catch (e) {
                    H(r, function (e) {
                        i(e);
                    });
                }
            }
        },
        L = function () {
            if (!V(window.console) && window.console) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = ["PostHog error:"].concat(t),
                    i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
                try {
                    i.apply(window.console, r);
                } catch (e) {
                    H(r, function (e) {
                        i(e);
                    });
                }
            }
        },
        B = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
    function U(e, t, n) {
        if (null != e)
            if (C && Array.isArray(e) && e.forEach === C) e.forEach(t, n);
            else if ("length" in e && e.length === +e.length) {
                for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === j) return;
            } else for (var o in e) if (F.call(e, o) && t.call(n, e[o], o) === j) return;
    }
    function H(e, t, n) {
        if (Array.isArray(e))
            if (C && e.forEach === C) e.forEach(t, n);
            else if ("length" in e && e.length === +e.length) for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === j) return;
    }
    var G = function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return (
                H(n, function (t) {
                    for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
                }),
                e
            );
        },
        W =
            R ||
            function (e) {
                return "[object Array]" === P.call(e);
            },
        Q = function (e) {
            try {
                return /^\s*\bfunction\b/.test(e);
            } catch (e) {
                return !1;
            }
        };
    function J(e, t) {
        return -1 !== e.indexOf(t);
    }
    var z = function (e) {
            return e === Object(e) && !W(e);
        },
        V = function (e) {
            return void 0 === e;
        },
        Z = function (e) {
            return "[object String]" == P.call(e);
        },
        X = function e(t) {
            return (
                U(t, function (n, r) {
                    !(function (e) {
                        return "[object Date]" == P.call(e);
                    })(n)
                        ? z(n) && (t[r] = e(n))
                        : (t[r] = Y(n));
                }),
                t
            );
        },
        Y = function (e) {
            function t(e) {
                return e < 10 ? "0" + e : e;
            }
            return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds());
        },
        K = function (e) {
            return function () {
                try {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e.apply(this, n);
                } catch (e) {
                    L("Implementation error. Please turn on debug and contact support@posthog.com."), O.DEBUG && L(e);
                }
            };
        },
        ee = function (e) {
            var t = {};
            return (
                U(e, function (e, n) {
                    Z(e) && e.length > 0 && (t[n] = e);
                }),
                t
            );
        },
        te = "undefined" != typeof Symbol ? Symbol("__deepCircularCopyInProgress__") : "__deepCircularCopyInProgress__";
    function ne(e, t, n) {
        return e !== Object(e)
            ? t
                ? t(e, n)
                : e
            : e[te]
            ? void 0
            : ((e[te] = !0),
              W(e)
                  ? ((r = []),
                    H(e, function (e) {
                        r.push(ne(e, t));
                    }))
                  : ((r = {}),
                    U(e, function (e, n) {
                        n !== te && (r[n] = ne(e, t, n));
                    })),
              delete e[te],
              r);
        var r;
    }
    var re = ["$performance_raw"];
    function ie(e, t) {
        return ne(e, function (e, n) {
            return n && re.indexOf(n) > -1 ? e : "string" == typeof e && null !== t ? e.slice(0, t) : e;
        });
    }
    function oe(e) {
        var t,
            n,
            r,
            i,
            o,
            s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = 0,
            c = 0,
            u = "",
            l = [];
        if (!e) return e;
        e = ae(e);
        do {
            (t = ((o = (e.charCodeAt(a++) << 16) | (e.charCodeAt(a++) << 8) | e.charCodeAt(a++)) >> 18) & 63), (n = (o >> 12) & 63), (r = (o >> 6) & 63), (i = 63 & o), (l[c++] = s.charAt(t) + s.charAt(n) + s.charAt(r) + s.charAt(i));
        } while (a < e.length);
        switch (((u = l.join("")), e.length % 3)) {
            case 1:
                u = u.slice(0, -2) + "==";
                break;
            case 2:
                u = u.slice(0, -1) + "=";
        }
        return u;
    }
    var se,
        ae = function (e) {
            var t,
                n,
                r,
                i,
                o = "";
            for (t = n = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < r; i++) {
                var s = e.charCodeAt(i),
                    a = null;
                s < 128 ? n++ : (a = s > 127 && s < 2048 ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128) : String.fromCharCode((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128)),
                    null !== a && (n > t && (o += e.substring(t, n)), (o += a), (t = n = i + 1));
            }
            return n > t && (o += e.substring(t, e.length)), o;
        },
        ce =
            ((se = function () {
                for (var e = new Date().valueOf(), t = 0; e == new Date().valueOf(); ) t++;
                return e.toString(16) + t.toString(16);
            }),
            function () {
                var e = (window.screen.height * window.screen.width).toString(16);
                return (
                    se() +
                    "-" +
                    Math.random().toString(16).replace(".", "") +
                    "-" +
                    (function () {
                        var e,
                            t,
                            n = q,
                            r = 0,
                            i = [];
                        function o(e, t) {
                            var n,
                                r = 0;
                            for (n = 0; n < t.length; n++) r |= i[n] << (8 * n);
                            return e ^ r;
                        }
                        for (e = 0; e < n.length; e++) (t = n.charCodeAt(e)), i.unshift(255 & t), i.length >= 4 && ((r = o(r, i)), (i = []));
                        return i.length > 0 && (r = o(r, i)), r.toString(16);
                    })() +
                    "-" +
                    e +
                    "-" +
                    se()
                );
            }),
        ue = function (e) {
            return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog)/i.test(e);
        },
        le = function (e, t) {
            var n = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
                r = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(e);
            if (null === r || (r && "string" != typeof r[1] && r[1].length)) return "";
            var i = r[1];
            try {
                i = decodeURIComponent(i);
            } catch (e) {
                D("Skipping decoding for malformed query param: " + i);
            }
            return i.replace(/\+/g, " ");
        },
        de = function (e, t) {
            var n = e.match(new RegExp(t + "=([^&]*)"));
            return n ? n[1] : null;
        },
        pe = (function () {
            function e(t) {
                return t && ((t.preventDefault = e.preventDefault), (t.stopPropagation = e.stopPropagation)), t;
            }
            return (
                (e.preventDefault = function () {
                    this.returnValue = !1;
                }),
                (e.stopPropagation = function () {
                    this.cancelBubble = !0;
                }),
                function (t, n, r, i, o) {
                    if (t)
                        if (t.addEventListener && !i) t.addEventListener(n, r, !!o);
                        else {
                            var s = "on" + n,
                                a = t[s];
                            t[s] = (function (t, n, r) {
                                return function (i) {
                                    if ((i = i || e(window.event))) {
                                        var o,
                                            s = !0;
                                        Q(r) && (o = r(i));
                                        var a = n.call(t, i);
                                        return (!1 !== o && !1 !== a) || (s = !1), s;
                                    }
                                };
                            })(t, r, a);
                        }
                    else D("No valid element provided to register_event");
                }
            );
        })(),
        fe = {
            campaignParams: function () {
                var e = "utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid".split(" "),
                    t = {};
                return (
                    U(e, function (e) {
                        var n = le(T.URL, e);
                        n.length && (t[e] = n);
                    }),
                    t
                );
            },
            searchEngine: function (e) {
                return 0 === e.search("https?://(.*)google.([^/?]*)")
                    ? "google"
                    : 0 === e.search("https?://(.*)bing.com")
                    ? "bing"
                    : 0 === e.search("https?://(.*)yahoo.com")
                    ? "yahoo"
                    : 0 === e.search("https?://(.*)duckduckgo.com")
                    ? "duckduckgo"
                    : null;
            },
            searchInfo: function (e) {
                var t = fe.searchEngine(e),
                    n = "yahoo" != t ? "q" : "p",
                    r = {};
                if (null !== t) {
                    r.$search_engine = t;
                    var i = le(e, n);
                    i.length && (r.ph_keyword = i);
                }
                return r;
            },
            browser: function (e, t, n) {
                return (
                    (t = t || ""),
                    n || J(e, " OPR/")
                        ? J(e, "Mini")
                            ? "Opera Mini"
                            : "Opera"
                        : /(BlackBerry|PlayBook|BB10)/i.test(e)
                        ? "BlackBerry"
                        : J(e, "IEMobile") || J(e, "WPDesktop")
                        ? "Internet Explorer Mobile"
                        : J(e, "SamsungBrowser/")
                        ? "Samsung Internet"
                        : J(e, "Edge") || J(e, "Edg/")
                        ? "Microsoft Edge"
                        : J(e, "FBIOS")
                        ? "Facebook Mobile"
                        : J(e, "Chrome")
                        ? "Chrome"
                        : J(e, "CriOS")
                        ? "Chrome iOS"
                        : J(e, "UCWEB") || J(e, "UCBrowser")
                        ? "UC Browser"
                        : J(e, "FxiOS")
                        ? "Firefox iOS"
                        : J(t, "Apple")
                        ? J(e, "Mobile")
                            ? "Mobile Safari"
                            : "Safari"
                        : J(e, "Android")
                        ? "Android Mobile"
                        : J(e, "Konqueror")
                        ? "Konqueror"
                        : J(e, "Firefox")
                        ? "Firefox"
                        : J(e, "MSIE") || J(e, "Trident/")
                        ? "Internet Explorer"
                        : J(e, "Gecko")
                        ? "Mozilla"
                        : ""
                );
            },
            browserVersion: function (e, t, n) {
                var r = {
                    "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                    "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                    Chrome: /Chrome\/(\d+(\.\d+)?)/,
                    "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                    "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                    Safari: /Version\/(\d+(\.\d+)?)/,
                    "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                    Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                    Firefox: /Firefox\/(\d+(\.\d+)?)/,
                    "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                    Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                    BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                    "Android Mobile": /android\s(\d+(\.\d+)?)/,
                    "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                    "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                    Mozilla: /rv:(\d+(\.\d+)?)/,
                }[fe.browser(e, t, n)];
                if (void 0 === r) return null;
                var i = e.match(r);
                return i ? parseFloat(i[i.length - 2]) : null;
            },
            os: function () {
                var e = q;
                return /Windows/i.test(e)
                    ? /Phone/.test(e) || /WPDesktop/.test(e)
                        ? "Windows Phone"
                        : "Windows"
                    : /(iPhone|iPad|iPod)/.test(e)
                    ? "iOS"
                    : /Android/.test(e)
                    ? "Android"
                    : /(BlackBerry|PlayBook|BB10)/i.test(e)
                    ? "BlackBerry"
                    : /Mac/i.test(e)
                    ? "Mac OS X"
                    : /Linux/.test(e)
                    ? "Linux"
                    : /CrOS/.test(e)
                    ? "Chrome OS"
                    : "";
            },
            device: function (e) {
                return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
                    ? "Windows Phone"
                    : /iPad/.test(e)
                    ? "iPad"
                    : /iPod/.test(e)
                    ? "iPod Touch"
                    : /iPhone/.test(e)
                    ? "iPhone"
                    : /(BlackBerry|PlayBook|BB10)/i.test(e)
                    ? "BlackBerry"
                    : /Android/.test(e) && !/Mobile/.test(e)
                    ? "Android Tablet"
                    : /Android/.test(e)
                    ? "Android"
                    : "";
            },
            deviceType: function (e) {
                var t = this.device(e);
                return "iPad" === t || "Android Tablet" === t ? "Tablet" : t ? "Mobile" : "Desktop";
            },
            referringDomain: function (e) {
                var t = e.split("/");
                return t.length >= 3 ? t[2] : "";
            },
            properties: function () {
                return G(ee({ $os: fe.os(), $browser: fe.browser(q, $.vendor, window.opera), $device: fe.device(q), $device_type: fe.deviceType(q) }), {
                    $current_url: window.location.href,
                    $host: window.location.host,
                    $pathname: window.location.pathname,
                    $browser_version: fe.browserVersion(q, $.vendor, window.opera),
                    $screen_height: window.screen.height,
                    $screen_width: window.screen.width,
                    $viewport_height: window.innerHeight,
                    $viewport_width: window.innerWidth,
                    $lib: "web",
                    $lib_version: O.LIB_VERSION,
                    $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                    $time:
                        ((Date.now =
                            Date.now ||
                            function () {
                                return +new Date();
                            }),
                        Date.now() / 1e3),
                });
            },
            people_properties: function () {
                return G(ee({ $os: fe.os(), $browser: fe.browser(q, $.vendor, window.opera) }), { $browser_version: fe.browserVersion(q, $.vendor, window.opera) });
            },
        };
    function he(e) {
        switch (r(e.className)) {
            case "string":
                return e.className;
            case "object":
                return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
            default:
                return "";
        }
    }
    function _e(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = "";
        return (
            (t && e.childNodes && e.childNodes.length) || (be(e, t) && !ke(e) && e.childNodes && e.childNodes.length)
                ? U(e.childNodes, function (e) {
                      ye(e) && e.textContent
                          ? t
                              ? (n = e.textContent)
                              : (n += B(e.textContent)
                                    .split(/(\s+)/)
                                    .filter(Se)
                                    .join("")
                                    .replace(/[\r\n]/g, " ")
                                    .replace(/[ ]+/g, " ")
                                    .substring(0, 255))
                          : t && e.value && (n = e.value);
                  })
                : t && (n = e.value || ""),
            B(n)
        );
    }
    function ge(e) {
        return !!e && 1 === e.nodeType;
    }
    function ve(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
    }
    function ye(e) {
        return !!e && 3 === e.nodeType;
    }
    function me(e) {
        return !!e && 11 === e.nodeType;
    }
    var we = ["a", "button", "form", "input", "select", "textarea", "label"];
    function be(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return !0;
        for (var n = e; n.parentNode && !ve(n, "body"); n = n.parentNode) {
            var r = he(n).split(" ");
            if (J(r, "ph-sensitive") || J(r, "ph-no-capture")) return !1;
        }
        if (J(he(e).split(" "), "ph-include")) return !0;
        var i = e.type || "";
        if ("string" == typeof i)
            switch (i.toLowerCase()) {
                case "hidden":
                case "password":
                    return !1;
            }
        var o = e.name || e.id || "";
        if ("string" == typeof o) {
            var s = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;
            if (s.test(o.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
        }
        return !0;
    }
    function ke(e) {
        return !!((ve(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type)) || ve(e, "select") || ve(e, "textarea") || "true" === e.getAttribute("contenteditable"));
    }
    function Se(e) {
        if (null === e || V(e)) return !1;
        if ("string" == typeof e) {
            e = B(e);
            if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, ""))) return !1;
            if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1;
        }
        return !0;
    }
    function xe(e) {
        return "string" == typeof e && ("_ngcontent" === e.substring(0, 10) || "_nghost" === e.substring(0, 7));
    }
    function Oe(e, t) {
        var n = document.createElement("script");
        (n.type = "text/javascript"), (n.src = e), (n.onload = t);
        var r,
            i = document.getElementsByTagName("script");
        i.length > 0 ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(n, i[0]) : document.body.appendChild(n);
    }
    var Ee = (function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.get_config("rageclick");
                o(this, e), (this.clicks = []), (this.instance = t), (this.enabled = n);
            }
            return (
                a(e, [
                    {
                        key: "click",
                        value: function (e, t, n) {
                            if (this.enabled) {
                                var r = this.clicks[this.clicks.length - 1];
                                r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3
                                    ? (this.clicks.push({ x: e, y: t, timestamp: n }), 3 === this.clicks.length && this.instance.capture("$rageclick"))
                                    : (this.clicks = [{ x: e, y: t, timestamp: n }]);
                            }
                        },
                    },
                ]),
                e
            );
        })(),
        Ie = {
            _initializedTokens: [],
            _previousElementSibling: function (e) {
                if (e.previousElementSibling) return e.previousElementSibling;
                var t = e;
                do {
                    t = t.previousSibling;
                } while (t && !ge(t));
                return t;
            },
            _getPropertiesFromElement: function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = e.tagName.toLowerCase(),
                    o = { tag_name: i };
                we.indexOf(i) > -1 && !n && (o.$el_text = _e(e, r));
                var s = he(e);
                s.length > 0 &&
                    (o.classes = s.split(" ").filter(function (e) {
                        return "" !== e;
                    })),
                    r ||
                        U(e.attributes, function (n) {
                            (ke(e) && -1 === ["name", "id", "class"].indexOf(n.name)) || t || !Se(n.value) || xe(n.name) || (o["attr__" + n.name] = n.value);
                        });
                for (var a = 1, c = 1, u = e; (u = this._previousElementSibling(u)); ) a++, u.tagName === e.tagName && c++;
                return (o.nth_child = a), (o.nth_of_type = c), o;
            },
            _getDefaultProperties: function (e) {
                return { $event_type: e, $ce_version: 1 };
            },
            _extractCustomPropertyValue: function (e) {
                var t = [];
                return (
                    U(document.querySelectorAll(e.css_selector), function (e) {
                        var n;
                        ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? (n = e.value) : e.textContent && (n = e.textContent), Se(n) && t.push(n);
                    }),
                    t.join(", ")
                );
            },
            _getCustomProperties: function (e) {
                var t = this,
                    n = {};
                return (
                    U(this._customProperties, function (r) {
                        U(r.event_selectors, function (i) {
                            U(document.querySelectorAll(i), function (i) {
                                J(e, i) && be(i) && (n[r.name] = t._extractCustomPropertyValue(r));
                            });
                        });
                    }),
                    n
                );
            },
            _getEventTarget: function (e) {
                return void 0 === e.target ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
                var t;
            },
            _captureEvent: function (e, t) {
                var n,
                    r = this,
                    i = this._getEventTarget(e);
                (ye(i) && (i = i.parentNode || null), "click" === e.type && e instanceof MouseEvent) && (null === (n = this.rageclicks) || void 0 === n || n.click(e.clientX, e.clientY, new Date().getTime()));
                if (
                    i &&
                    (function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!e || ve(e, "html") || !ge(e)) return !1;
                        for (var r = !1, i = [e], o = !0, s = e; s.parentNode && !ve(s, "body"); )
                            if (me(s.parentNode)) i.push(s.parentNode.host), (s = s.parentNode.host);
                            else {
                                if (!(o = s.parentNode || !1)) break;
                                if ((n && (r = !0), we.indexOf(o.tagName.toLowerCase()) > -1)) r = !0;
                                else {
                                    var a = window.getComputedStyle(o);
                                    a && "pointer" === a.getPropertyValue("cursor") && (r = !0);
                                }
                                i.push(o), (s = o);
                            }
                        var c = window.getComputedStyle(e);
                        if (c && "pointer" === c.getPropertyValue("cursor") && "click" === t.type) return !0;
                        var u = e.tagName.toLowerCase();
                        if (n) return !0;
                        switch (u) {
                            case "html":
                                return !1;
                            case "form":
                                return "submit" === t.type;
                            case "input":
                            case "select":
                            case "textarea":
                                return "change" === t.type || "click" === t.type;
                            default:
                                return r ? "click" === t.type : "click" === t.type && (we.indexOf(u) > -1 || "true" === e.getAttribute("contenteditable"));
                        }
                    })(i, e, t.get_config("advanced_capture_all_elements"))
                ) {
                    for (var o = [i], s = i; s.parentNode && !ve(s, "body"); ) me(s.parentNode) ? (o.push(s.parentNode.host), (s = s.parentNode.host)) : (o.push(s.parentNode), (s = s.parentNode));
                    var a,
                        c = [],
                        u = !1;
                    if (
                        (U(o, function (e) {
                            var n = be(e, t.get_config("advanced_capture_all_elements"));
                            "a" === e.tagName.toLowerCase() && ((a = e.getAttribute("href")), t.get_config("advanced_capture_all_elements") || (a = n && Se(a) && a)),
                                J(he(e).split(" "), "ph-no-capture") && (u = !0),
                                c.push(r._getPropertiesFromElement(e, t.get_config("mask_all_element_attributes"), t.get_config("mask_all_text"), t.get_config("advanced_capture_all_elements")));
                        }),
                        t.get_config("mask_all_text") || (c[0].$el_text = _e(i, t.get_config("advanced_capture_all_elements"))),
                        a && (c[0].attr__href = a),
                        u)
                    )
                        return !1;
                    var l = G(this._getDefaultProperties(e.type), { $elements: c }, this._getCustomProperties(o));
                    return t.capture("$autocapture", l), !0;
                }
            },
            _navigate: function (e) {
                window.location.href = e;
            },
            _addDomEventHandlers: function (e) {
                var t = this,
                    n = function (n) {
                        (n = n || window.event), t._captureEvent(n, e);
                    };
                pe(document, "submit", n, !1, !0), pe(document, "change", n, !1, !0), pe(document, "click", n, !1, !0);
            },
            _customProperties: [],
            rageclicks: null,
            init: function (e) {
                this.rageclicks = new Ee(e);
            },
            afterDecideResponse: function (e, t) {
                var n = t.get_config("token");
                this._initializedTokens.indexOf(n) > -1
                    ? N('autocapture already initialized for token "' + n + '"')
                    : (this._initializedTokens.push(n),
                      e && e.config && e.config.enable_collect_everything && t.get_config("autocapture")
                          ? (e.custom_properties && (this._customProperties = e.custom_properties), this._addDomEventHandlers(t))
                          : (t.__autocapture_enabled = !1));
            },
            enabledForProject: function (e, t, n) {
                if (!e) return !0;
                (t = V(t) ? 10 : t), (n = V(n) ? 10 : n);
                for (var r = 0, i = 0; i < e.length; i++) r += e.charCodeAt(i);
                return r % t < n;
            },
            isBrowserSupported: function () {
                return Q(document.querySelectorAll);
            },
        };
    !(function (e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = e[t].bind(e));
    })(Ie),
        (function (e) {
            for (var t in e) "function" == typeof e[t] && (e[t] = K(e[t]));
        })(Ie);
    var Pe = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Fe = {
            is_supported: function () {
                return !0;
            },
            error: function (e) {
                D("cookieStore error: " + e);
            },
            get: function (e) {
                try {
                    for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                        for (var i = n[r]; " " == i.charAt(0); ) i = i.substring(1, i.length);
                        if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length));
                    }
                } catch (e) {}
                return null;
            },
            parse: function (e) {
                var t;
                try {
                    t = JSON.parse(Fe.get(e)) || {};
                } catch (e) {}
                return t;
            },
            set: function (e, t, n, r, i) {
                try {
                    var o = "",
                        s = "",
                        a = "";
                    if (r) {
                        var c = document.location.hostname.match(Pe),
                            u = c ? c[0] : "";
                        o = u ? "; domain=." + u : "";
                    }
                    if (n) {
                        var l = new Date();
                        l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), (s = "; expires=" + l.toUTCString());
                    }
                    i && (a = "; secure");
                    var d = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; path=/" + o + a;
                    return (document.cookie = d), d;
                } catch (e) {
                    return;
                }
            },
            remove: function (e, t) {
                try {
                    Fe.set(e, "", -1, t);
                } catch (e) {
                    return;
                }
            },
        },
        Ae = null,
        $e = {
            is_supported: function () {
                if (null !== Ae) return Ae;
                var e = !0;
                if (window)
                    try {
                        var t = "__mplssupport__";
                        $e.set(t, "xyz"), '"xyz"' !== $e.get(t) && (e = !1), $e.remove(t);
                    } catch (t) {
                        e = !1;
                    }
                else e = !1;
                return e || D("localStorage unsupported; falling back to cookie store"), (Ae = e), e;
            },
            error: function (e) {
                D("localStorage error: " + e);
            },
            get: function (e) {
                try {
                    return window.localStorage.getItem(e);
                } catch (e) {
                    $e.error(e);
                }
                return null;
            },
            parse: function (e) {
                try {
                    return JSON.parse($e.get(e)) || {};
                } catch (e) {}
                return null;
            },
            set: function (e, t) {
                try {
                    window.localStorage.setItem(e, JSON.stringify(t));
                } catch (e) {
                    $e.error(e);
                }
            },
            remove: function (e) {
                try {
                    window.localStorage.removeItem(e);
                } catch (e) {
                    $e.error(e);
                }
            },
        },
        Te = t(
            t({}, $e),
            {},
            {
                parse: function (e) {
                    try {
                        var t = {};
                        try {
                            (t = Fe.parse(e) || {}).distinct_id && Fe.set(e, { distinct_id: t.distinct_id });
                        } catch (e) {}
                        var n = G(t, JSON.parse($e.get(e) || "{}"));
                        return $e.set(e, n), n;
                    } catch (e) {}
                    return null;
                },
                set: function (e, t, n, r, i) {
                    try {
                        $e.set(e, t), t.distinct_id && Fe.set(e, { distinct_id: t.distinct_id }, n, r, i);
                    } catch (e) {
                        $e.error(e);
                    }
                },
                remove: function (e, t) {
                    try {
                        window.localStorage.removeItem(e), Fe.remove(e, t);
                    } catch (e) {
                        $e.error(e);
                    }
                },
            }
        ),
        qe = {},
        Ce = {
            is_supported: function () {
                return !0;
            },
            error: function (e) {
                D("memoryStorage error: " + e);
            },
            get: function (e) {
                return qe[e] || null;
            },
            parse: function (e) {
                return qe[e] || null;
            },
            set: function (e, t) {
                qe[e] = t;
            },
            remove: function (e) {
                delete qe[e];
            },
        },
        Me = null,
        Re = {
            is_supported: function () {
                if (null !== Me) return Me;
                if (((Me = !0), window))
                    try {
                        var e = "__support__";
                        Re.set(e, "xyz"), '"xyz"' !== Re.get(e) && (Me = !1), Re.remove(e);
                    } catch (e) {
                        Me = !1;
                    }
                else Me = !1;
                return Me;
            },
            error: function (e) {
                O.DEBUG && D("sessionStorage error: ", e);
            },
            get: function (e) {
                try {
                    return window.sessionStorage.getItem(e);
                } catch (e) {
                    Re.error(e);
                }
                return null;
            },
            parse: function (e) {
                try {
                    return JSON.parse(Re.get(e)) || null;
                } catch (e) {}
                return null;
            },
            set: function (e, t) {
                try {
                    window.sessionStorage.setItem(e, JSON.stringify(t));
                } catch (e) {
                    Re.error(e);
                }
            },
            remove: function (e) {
                try {
                    window.sessionStorage.removeItem(e);
                } catch (e) {
                    Re.error(e);
                }
            },
        };
    function je(e, t) {
        We(!0, e, t);
    }
    function Ne(e, t) {
        We(!1, e, t);
    }
    function De(e, t) {
        return "1" === Ge(e, t);
    }
    function Le(e, t) {
        return (
            !!(function (e) {
                if (e && e.respectDnt) {
                    var t = (e && e.window) || A,
                        n = t.navigator || {},
                        r = !1;
                    return (
                        U([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function (e) {
                            J([!0, 1, "1", "yes"], e) && (r = !0);
                        }),
                        r
                    );
                }
                return !1;
            })(t) || "0" === Ge(e, t)
        );
    }
    function Be(e, t) {
        Ue((t = t || {})).remove(He(e, t), !!t.crossSubdomainCookie);
    }
    function Ue(e) {
        return "localStorage" === (e = e || {}).persistenceType ? $e : "localStorage+cookie" === e.persistenceType ? Te : Fe;
    }
    function He(e, t) {
        return ((t = t || {}).persistencePrefix || "__ph_opt_in_out_") + e;
    }
    function Ge(e, t) {
        return Ue(t).get(He(e, t));
    }
    function We(e, t, n) {
        var r;
        Z(t) && t.length
            ? (Ue((n = n || {})).set(He(t, n), e ? 1 : 0, ((r = n.cookieExpiration), "[object Number]" == P.call(r) ? n.cookieExpiration : null), n.crossSubdomainCookie, n.secureCookie),
              n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, { send_instantly: !0 }))
            : console.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
    }
    function Qe(e, t) {
        var n = !1;
        try {
            var r = e.get_config("token"),
                i = e.get_config("respect_dnt"),
                o = e.get_config("opt_out_capturing_persistence_type"),
                s = e.get_config("opt_out_capturing_cookie_prefix") || void 0,
                a = e.get_config("window");
            r && (n = Le(r, { respectDnt: i, persistenceType: o, persistencePrefix: s, window: a }));
        } catch (e) {
            t || console.error("Unexpected error when checking capturing opt-out status: " + e);
        }
        return n;
    }
    function Je(e, t, n) {
        return function () {
            for (var r = Qe(e, n), i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
            if (!r) return t.apply(this, o);
            var a = o[o.length - 1];
            "function" == typeof a && a(0);
        };
    }
    var ze = "$set",
        Ve = (function () {
            function e(t) {
                var n = this;
                o(this, e),
                    (this._rinq = t),
                    (this.set = Je(t, function (e, t, r) {
                        var i = n.set_action(e, t);
                        return (
                            z(e) && (r = t),
                            n._get_config("save_referrer") && n._rinq.persistence.update_referrer_info(document.referrer),
                            (i.$set = G({}, fe.people_properties(), n._rinq.persistence.get_referrer_info(), i.$set)),
                            n._send_request(i, r)
                        );
                    })),
                    (this.set_once = Je(t, function (e, t, r) {
                        var i = n.set_once_action(e, t);
                        return z(e) && (r = t), n._send_request(i, r);
                    }));
            }
            return (
                a(e, [
                    {
                        key: "toString",
                        value: function () {
                            return this._rinq.toString() + ".people";
                        },
                    },
                    {
                        key: "_send_request",
                        value: function (e, t) {
                            (e.$token = this._get_config("token")), (e.$distinct_id = this._rinq.get_distinct_id());
                            var n = this._rinq.get_property("$device_id"),
                                r = this._rinq.get_property("$user_id"),
                                i = this._rinq.get_property("$had_persisted_distinct_id");
                            n && (e.$device_id = n), r && (e.$user_id = r), i && (e.$had_persisted_distinct_id = i);
                            var o = X(e),
                                s = ie(o, this._get_config("properties_string_max_length")),
                                a = oe(JSON.stringify(o));
                            return this._rinq._send_request(this._get_config("api_host") + "/engage/", { data: a }, {}, this._rinq._prepare_callback(t, s)), s;
                        },
                    },
                    {
                        key: "_get_config",
                        value: function (e) {
                            return this._rinq.get_config(e);
                        },
                    },
                    {
                        key: "_is_reserved_property",
                        value: function (e) {
                            return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e;
                        },
                    },
                    {
                        key: "set_action",
                        value: function (e, t) {
                            return this.apiActionParser(ze, e, t);
                        },
                    },
                    {
                        key: "set_once_action",
                        value: function (e, t) {
                            return this.apiActionParser("$set_once", e, t);
                        },
                    },
                    {
                        key: "apiActionParser",
                        value: function (e, t, n) {
                            var r = this,
                                i = {},
                                o = {};
                            return (
                                z(t)
                                    ? U(t, function (e, t) {
                                          r._is_reserved_property(t) || (o[t] = e);
                                      })
                                    : (o[t] = n),
                                (i[e] = o),
                                i
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        Ze = (function () {
            function e(t) {
                o(this, e), (this.instance = t), (this._override_warning = !1), (this.flagCallReported = {}), (this.featureFlagEventHandlers = []), (this.reloadFeatureFlagsQueued = !1), (this.reloadFeatureFlagsInAction = !1);
            }
            return (
                a(e, [
                    {
                        key: "getFlags",
                        value: function () {
                            return Object.keys(this.getFlagVariants());
                        },
                    },
                    {
                        key: "getFlagVariants",
                        value: function () {
                            var e = this.instance.get_property("$enabled_feature_flags"),
                                t = this.instance.get_property("$override_feature_flags");
                            if (!t) return e || {};
                            for (var n = G({}, e), r = Object.keys(t), i = 0; i < r.length; i++) !1 === t[r[i]] ? delete n[r[i]] : (n[r[i]] = t[r[i]]);
                            return this._override_warning || (console.warn("[PostHog] Overriding feature flags!", { enabledFlags: e, overriddenFlags: t, finalFlags: n }), (this._override_warning = !0)), n;
                        },
                    },
                    {
                        key: "reloadFeatureFlags",
                        value: function () {
                            this.reloadFeatureFlagsQueued || ((this.reloadFeatureFlagsQueued = !0), this._startReloadTimer());
                        },
                    },
                    {
                        key: "setAnonymousDistinctId",
                        value: function (e) {
                            this.$anon_distinct_id = e;
                        },
                    },
                    {
                        key: "setReloadingPaused",
                        value: function (e) {
                            this.reloadFeatureFlagsInAction = e;
                        },
                    },
                    {
                        key: "resetRequestQueue",
                        value: function () {
                            this.reloadFeatureFlagsQueued = !1;
                        },
                    },
                    {
                        key: "_startReloadTimer",
                        value: function () {
                            var e = this;
                            this.reloadFeatureFlagsQueued &&
                                !this.reloadFeatureFlagsInAction &&
                                setTimeout(function () {
                                    !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && ((e.reloadFeatureFlagsQueued = !1), e._reloadFeatureFlagsRequest());
                                }, 5);
                        },
                    },
                    {
                        key: "_reloadFeatureFlagsRequest",
                        value: function () {
                            var e = this;
                            this.setReloadingPaused(!0);
                            var t = this.instance.get_config("token"),
                                n = oe(JSON.stringify({ token: t, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id }));
                            this.instance._send_request(
                                this.instance.get_config("api_host") + "/decide/?v=2",
                                { data: n },
                                { method: "POST" },
                                this.instance._prepare_callback(function (t) {
                                    (e.$anon_distinct_id = void 0), e.receivedFeatureFlags(t), e.setReloadingPaused(!1), e._startReloadTimer();
                                })
                            );
                        },
                    },
                    {
                        key: "getFeatureFlag",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.getFlags()) return console.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time."), !1;
                            var n = this.getFlagVariants()[e];
                            return (!t.send_event && "send_event" in t) || this.flagCallReported[e] || ((this.flagCallReported[e] = !0), this.instance.capture("$feature_flag_called", { $feature_flag: e, $feature_flag_response: n })), n;
                        },
                    },
                    {
                        key: "isFeatureEnabled",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return this.getFlags() ? !!this.getFeatureFlag(e, t) : (console.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time."), !1);
                        },
                    },
                    {
                        key: "addFeatureFlagsHandler",
                        value: function (e) {
                            this.featureFlagEventHandlers.push(e);
                        },
                    },
                    {
                        key: "receivedFeatureFlags",
                        value: function (e) {
                            !(function (e, t) {
                                var n = e.featureFlags;
                                if (n)
                                    if (Array.isArray(n)) {
                                        var r = {};
                                        if (n) for (var i = 0; i < n.length; i++) r[n[i]] = !0;
                                        t && t.register({ $active_feature_flags: n, $enabled_feature_flags: r });
                                    } else t && t.register({ $active_feature_flags: Object.keys(n || {}), $enabled_feature_flags: n || {} });
                                else t && (t.unregister("$active_feature_flags"), t.unregister("$enabled_feature_flags"));
                            })(e, this.instance.persistence);
                            var t = this.getFlags(),
                                n = this.getFlagVariants();
                            this.featureFlagEventHandlers.forEach(function (e) {
                                return e(t, n);
                            });
                        },
                    },
                    {
                        key: "override",
                        value: function (e) {
                            if (((this._override_warning = !1), !1 === e)) this.instance.persistence.unregister("$override_feature_flags");
                            else if (Array.isArray(e)) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
                                this.instance.persistence.register({ $override_feature_flags: t });
                            } else this.instance.persistence.register({ $override_feature_flags: e });
                        },
                    },
                    {
                        key: "onFeatureFlags",
                        value: function (e) {
                            (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) && e(this.getFlags(), this.getFlagVariants());
                        },
                    },
                ]),
                e
            );
        })(),
        Xe = "$people_distinct_id",
        Ye = "__alias",
        Ke = "__timers",
        et = "$session_recording_enabled_server_side",
        tt = "$sesid",
        nt = "$enabled_feature_flags",
        rt = ["__mps", "__mpso", "__mpus", "__mpa", "__mpap", "__mpr", "__mpu", Xe, Ye, "__cmpns", Ke, et, tt, nt],
        it = (function () {
            function e(t) {
                o(this, e);
                var n = "";
                t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
                    (this.props = {}),
                    (this.campaign_params_saved = !1),
                    t.persistence_name ? (this.name = "rq_" + t.persistence_name) : (this.name = "rq_" + n + "_rinq");
                var r = t.persistence.toLowerCase();
                "cookie" !== r && -1 === r.indexOf("localstorage") && "memory" !== r && (L("Unknown persistence type " + r + "; falling back to cookie"), (r = t.persistence = "cookie")),
                    "localstorage" === r && $e.is_supported() ? (this.storage = $e) : "localstorage+cookie" === r && Te.is_supported() ? (this.storage = Te) : (this.storage = "memory" === r ? Ce : Fe),
                    this.load(),
                    this.update_config(t),
                    this.save();
            }
            return (
                a(e, [
                    {
                        key: "properties",
                        value: function () {
                            var e = {};
                            return (
                                U(this.props, function (t, n) {
                                    if (n === nt && "object" === r(t)) for (var i = Object.keys(t), o = 0; o < i.length; o++) e["$feature/".concat(i[o])] = t[i[o]];
                                    else
                                        (a = n),
                                            (c = !1),
                                            (null === (s = rt)
                                                ? c
                                                : M && s.indexOf === M
                                                ? -1 != s.indexOf(a)
                                                : (U(s, function (e) {
                                                      if (c || (c = e === a)) return j;
                                                  }),
                                                  c)) || (e[n] = t);
                                    var s, a, c;
                                }),
                                e
                            );
                        },
                    },
                    {
                        key: "load",
                        value: function () {
                            if (!this.disabled) {
                                var e = this.storage.parse(this.name);
                                e && (this.props = G({}, e));
                            }
                        },
                    },
                    {
                        key: "save",
                        value: function () {
                            this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
                        },
                    },
                    {
                        key: "remove",
                        value: function () {
                            this.storage.remove(this.name, !1), this.storage.remove(this.name, !0);
                        },
                    },
                    {
                        key: "clear",
                        value: function () {
                            this.remove(), (this.props = {});
                        },
                    },
                    {
                        key: "register_once",
                        value: function (e, t, n) {
                            var r = this;
                            return (
                                !!z(e) &&
                                (void 0 === t && (t = "None"),
                                (this.expire_days = void 0 === n ? this.default_expiry : n),
                                U(e, function (e, n) {
                                    (r.props.hasOwnProperty(n) && r.props[n] !== t) || (r.props[n] = e);
                                }),
                                this.save(),
                                !0)
                            );
                        },
                    },
                    {
                        key: "register",
                        value: function (e, t) {
                            return !!z(e) && ((this.expire_days = void 0 === t ? this.default_expiry : t), G(this.props, e), this.save(), !0);
                        },
                    },
                    {
                        key: "unregister",
                        value: function (e) {
                            e in this.props && (delete this.props[e], this.save());
                        },
                    },
                    {
                        key: "update_campaign_params",
                        value: function () {
                            this.campaign_params_saved || (this.register(fe.campaignParams()), (this.campaign_params_saved = !0));
                        },
                    },
                    {
                        key: "update_search_keyword",
                        value: function (e) {
                            this.register(fe.searchInfo(e));
                        },
                    },
                    {
                        key: "update_referrer_info",
                        value: function (e) {
                            this.register({ $referrer: e || this.props.$referrer || "$direct", $referring_domain: fe.referringDomain(e) || this.props.$referring_domain || "$direct" });
                        },
                    },
                    {
                        key: "get_referrer_info",
                        value: function () {
                            return ee({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
                        },
                    },
                    {
                        key: "safe_merge",
                        value: function (e) {
                            return (
                                U(this.props, function (t, n) {
                                    n in e || (e[n] = t);
                                }),
                                e
                            );
                        },
                    },
                    {
                        key: "update_config",
                        value: function (e) {
                            (this.default_expiry = this.expire_days = e.cookie_expiration), this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie);
                        },
                    },
                    {
                        key: "set_disabled",
                        value: function (e) {
                            (this.disabled = e), this.disabled ? this.remove() : this.save();
                        },
                    },
                    {
                        key: "set_cross_subdomain",
                        value: function (e) {
                            e !== this.cross_subdomain && ((this.cross_subdomain = e), this.remove(), this.save());
                        },
                    },
                    {
                        key: "get_cross_subdomain",
                        value: function () {
                            return !!this.cross_subdomain;
                        },
                    },
                    {
                        key: "set_secure",
                        value: function (e) {
                            e !== this.secure && ((this.secure = e), this.remove(), this.save());
                        },
                    },
                    {
                        key: "set_event_timer",
                        value: function (e, t) {
                            var n = this.props.__timers || {};
                            (n[e] = t), (this.props.__timers = n), this.save();
                        },
                    },
                    {
                        key: "remove_event_timer",
                        value: function (e) {
                            var t = (this.props.__timers || {})[e];
                            return V(t) || (delete this.props.__timers[e], this.save()), t;
                        },
                    },
                ]),
                e
            );
        })();
    var ot = 2,
        st = 4,
        at = 6,
        ct = (function () {
            function e(t) {
                o(this, e),
                    (this.instance = t),
                    (this.captureStarted = !1),
                    (this.snapshots = []),
                    (this.emit = !1),
                    (this.endpoint = "/e/"),
                    (this.stopRrweb = void 0),
                    (this.windowId = null),
                    (this.sessionId = null),
                    (this.receivedDecide = !1);
            }
            return (
                a(e, [
                    {
                        key: "startRecordingIfEnabled",
                        value: function () {
                            this.isRecordingEnabled() ? this.startCaptureAndTrySendingQueuedSnapshots() : this.stopRecording();
                        },
                    },
                    {
                        key: "started",
                        value: function () {
                            return this.captureStarted;
                        },
                    },
                    {
                        key: "stopRecording",
                        value: function () {
                            this.captureStarted && this.stopRrweb && (this.stopRrweb(), (this.stopRrweb = void 0), (this.captureStarted = !1));
                        },
                    },
                    {
                        key: "isRecordingEnabled",
                        value: function () {
                            var e = !!this.instance.get_property(et),
                                t = !this.instance.get_config("disable_session_recording");
                            return e && t;
                        },
                    },
                    {
                        key: "afterDecideResponse",
                        value: function (e) {
                            var t, n;
                            ((this.receivedDecide = !0), this.instance.persistence && this.instance.persistence.register(c({}, et, !!e.sessionRecording)), null !== (t = e.sessionRecording) && void 0 !== t && t.endpoint) &&
                                (this.endpoint = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.endpoint);
                            this.startRecordingIfEnabled();
                        },
                    },
                    {
                        key: "startCaptureAndTrySendingQueuedSnapshots",
                        value: function () {
                            var e = this;
                            this.receivedDecide &&
                                ((this.emit = !0),
                                this.snapshots.forEach(function (t) {
                                    return e._captureSnapshot(t);
                                })),
                                this._startCapture();
                        },
                    },
                    {
                        key: "_startCapture",
                        value: function () {
                            void 0 !== Object.assign &&
                                (this.captureStarted ||
                                    this.instance.get_config("disable_session_recording") ||
                                    ((this.captureStarted = !0), Oe("https://wring.dev/assets/js/wring-session.js", this._onScriptLoaded.bind(this))));
                        },
                    },
                    {
                        key: "_updateWindowAndSessionIds",
                        value: function (e) {
                            var t,
                                n,
                                r = 3 === e.type && 0 === (null === (t = e.data) || void 0 === t ? void 0 : t.source),
                                i = this.instance.sessionManager.checkAndGetSessionAndWindowId(r, e.timestamp),
                                o = i.windowId,
                                s = i.sessionId;
                            (this.windowId === o && this.sessionId === s) || -1 !== [ot, st].indexOf(e.type) || null === (n = this.rrwebRecord) || void 0 === n || n.takeFullSnapshot();
                            (this.windowId = o), (this.sessionId = s);
                        },
                    },
                    {
                        key: "_onScriptLoaded",
                        value: function () {
                            var e,
                                n = this,
                                i = {
                                    blockClass: "ph-no-capture",
                                    blockSelector: void 0,
                                    ignoreClass: "ph-ignore-input",
                                    maskAllInputs: !0,
                                    maskInputOptions: {},
                                    maskInputFn: void 0,
                                    slimDOMOptions: {},
                                    collectFonts: !1,
                                    inlineStylesheet: !0,
                                };
                            this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord;
                            for (var o = this.instance.get_config("session_recording"), s = 0, a = Object.entries(o || {}); s < a.length; s++) {
                                var c = h(a[s], 2),
                                    u = c[0],
                                    l = c[1];
                                u in i && (i[u] = l);
                            }
                            (this.stopRrweb =
                                null === (e = this.rrwebRecord) || void 0 === e
                                    ? void 0
                                    : e.call(
                                          this,
                                          t(
                                              {
                                                  emit: function (e) {
                                                      (e = (function (e) {
                                                          if (e && "object" === r(e) && e.type === at && "object" === r(e.data) && "rrweb/console@1" === e.data.plugin) {
                                                              e.data.payload.payload.length > 10 && ((e.data.payload.payload = e.data.payload.payload.slice(0, 10)), e.data.payload.payload.push("...[truncated]"));
                                                              for (var t = [], n = 0; n < e.data.payload.payload.length; n++)
                                                                  e.data.payload.payload[n] && e.data.payload.payload[n].length > 2e3 ? t.push(e.data.payload.payload[n].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[n]);
                                                              return (e.data.payload.payload = t), e;
                                                          }
                                                          return e;
                                                      })(
                                                          (function (e) {
                                                              if (e && "object" === r(e)) {
                                                                  var t = JSON.stringify(e);
                                                                  if (t.length > 5e6) {
                                                                      var n,
                                                                          i = y(t.matchAll(/data:([\w\/\-\.]+);(\w+),([^)"]*)/gim));
                                                                      try {
                                                                          for (i.s(); !(n = i.n()).done; ) {
                                                                              var o = n.value;
                                                                              t =
                                                                                  "image/" === o[1].toLocaleLowerCase().slice(0, 6)
                                                                                      ? t.replace(
                                                                                            o[0],
                                                                                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg=="
                                                                                        )
                                                                                      : t.replace(o[0], "");
                                                                          }
                                                                      } catch (e) {
                                                                          i.e(e);
                                                                      } finally {
                                                                          i.f();
                                                                      }
                                                                  }
                                                                  return JSON.parse(t);
                                                              }
                                                              return e;
                                                          })(e)
                                                      )),
                                                          n._updateWindowAndSessionIds(e);
                                                      var t = { $snapshot_data: e, $session_id: n.sessionId, $window_id: n.windowId };
                                                      n.instance._captureMetrics.incr("rrweb-record"), n.instance._captureMetrics.incr("rrweb-record-".concat(e.type)), n.emit ? n._captureSnapshot(t) : n.snapshots.push(t);
                                                  },
                                                  plugins: window.rrwebConsoleRecord && this.instance.get_config("enable_recording_console_log") ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : [],
                                              },
                                              i
                                          )
                                      )),
                                this.instance._addCaptureHook(function (e) {
                                    var t;
                                    "$pageview" === e && (null === (t = n.rrwebRecord) || void 0 === t || t.addCustomEvent("$pageview", { href: window.location.href }));
                                });
                        },
                    },
                    {
                        key: "_captureSnapshot",
                        value: function (e) {
                            this.instance.capture("$snapshot", e, {
                                transport: "XHR",
                                method: "POST",
                                endpoint: this.endpoint,
                                _noTruncate: !0,
                                _batchKey: "sessionRecording",
                                _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === ot },
                            });
                        },
                    },
                ]),
                e
            );
        })(),
        ut = (function () {
            function e(t) {
                o(this, e), (this.instance = t), (this.instance.decideEndpointWasHit = !1);
            }
            return (
                a(e, [
                    {
                        key: "call",
                        value: function () {
                            var e = this,
                                t = oe(JSON.stringify({ token: this.instance.get_config("token"), distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups() }));
                            this.instance._send_request("".concat(this.instance.get_config("api_host"), "/decide/?v=2"), { data: t, verbose: !0 }, { method: "POST" }, function (t) {
                                return e.parseDecideResponse(t);
                            });
                        },
                    },
                    {
                        key: "parseDecideResponse",
                        value: function (e) {
                            var t,
                                n = this;
                            if (0 !== (null == e ? void 0 : e.status)) {
                                if (((this.instance.decideEndpointWasHit = !0), !document || !document.body))
                                    return (
                                        console.log("document not ready yet, trying again in 500 milliseconds..."),
                                        void setTimeout(function () {
                                            n.parseDecideResponse(e);
                                        }, 500)
                                    );
                                if (
                                    (this.instance.toolbar.afterDecideResponse(e),
                                    null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e),
                                    Ie.afterDecideResponse(e, this.instance),
                                    this.instance.featureFlags.receivedFeatureFlags(e),
                                    e.supportedCompression)
                                ) {
                                    var r,
                                        i = {},
                                        o = y(e.supportedCompression);
                                    try {
                                        for (o.s(); !(r = o.n()).done; ) {
                                            i[r.value] = !0;
                                        }
                                    } catch (e) {
                                        o.e(e);
                                    } finally {
                                        o.f();
                                    }
                                    this.instance.compression = i;
                                } else this.instance.compression = {};
                            } else console.error("Failed to fetch feature flags from PostHog.");
                        },
                    },
                ]),
                e
            );
        })(),
        lt = (function () {
            function e(t) {
                o(this, e), (this.instance = t);
            }
            return (
                a(e, [
                    {
                        key: "afterDecideResponse",
                        value: function (e) {
                            var n = e.editorParams || (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {});
                            e.isAuthenticated && n.toolbarVersion && 0 === n.toolbarVersion.indexOf("toolbar") && this._loadEditor(t(t({}, n), {}, { apiURL: this.instance.get_config("api_host") }));
                        },
                    },
                    {
                        key: "maybeLoadEditor",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history;
                            try {
                                if (!t) {
                                    try {
                                        window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test");
                                    } catch (e) {
                                        return !1;
                                    }
                                    t = window.localStorage;
                                }
                                var r,
                                    i = de(e.hash, "__posthog") || de(e.hash, "state"),
                                    o = i ? JSON.parse(decodeURIComponent(i)) : null,
                                    s = o && ("mpeditor" === o.action || "ph_authorize" === o.action);
                                return (
                                    s
                                        ? (r = o) &&
                                          Object.keys(r).length > 0 &&
                                          (t.setItem("_postHogEditorParams", JSON.stringify(r)), o.desiredHash ? (e.hash = o.desiredHash) : n ? n.replaceState("", document.title, e.pathname + e.search) : (e.hash = ""))
                                        : delete (r = JSON.parse(t.getItem("_postHogEditorParams") || "{}")).userIntent,
                                    (r.apiURL = this.instance.get_config("api_host")),
                                    !(!r.token || this.instance.get_config("token") !== r.token) && (this._loadEditor(r), !0)
                                );
                            } catch (e) {
                                return !1;
                            }
                        },
                    },
                    {
                        key: "_loadEditor",
                        value: function (e) {
                            var n = this;
                            if (!window._postHogToolbarLoaded) {
                                window._postHogToolbarLoaded = !0;
                                var r = e.jsURL || e.apiURL || this.instance.get_config("api_host"),
                                    i = r + (r.endsWith("/") ? "" : "/") + "static/toolbar.js?_ts=" + new Date().getTime(),
                                    o = "https://app.posthog.com" !== this.instance.get_config("api_host") && this.instance.get_config("advanced_disable_toolbar_metrics");
                                return (
                                    (e = t(t({}, e), o ? { instrument: !1 } : {})),
                                    Oe(i, function () {
                                        window.ph_load_editor(e, n.instance);
                                    }),
                                    pe(window, "turbolinks:load", function () {
                                        (window._postHogToolbarLoaded = !1), n._loadEditor(e);
                                    }),
                                    !0
                                );
                            }
                            return !1;
                        },
                    },
                ]),
                e
            );
        })(),
        dt = (function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
                o(this, e), (this.isPolling = !0), (this._event_queue = []), (this._empty_queue_count = 0), (this._poller = void 0), (this._pollInterval = t);
            }
            return (
                a(e, [
                    {
                        key: "setPollInterval",
                        value: function (e) {
                            (this._pollInterval = e), this.isPolling && this.poll();
                        },
                    },
                    { key: "poll", value: function () {} },
                    { key: "unload", value: function () {} },
                    {
                        key: "getTime",
                        value: function () {
                            return new Date().getTime();
                        },
                    },
                ]),
                e
            );
        })(),
        pt = (function (e) {
            u(r, e);
            var n = f(r);
            function r(e, t) {
                var i,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
                return o(this, r), ((i = n.call(this, s)).handlePollRequest = t), (i.captureMetrics = e), i;
            }
            return (
                a(r, [
                    {
                        key: "enqueue",
                        value: function (e, t, n) {
                            this.captureMetrics.incr("batch-enqueue"), this._event_queue.push({ url: e, data: t, options: n }), this.isPolling || ((this.isPolling = !0), this.poll());
                        },
                    },
                    {
                        key: "poll",
                        value: function () {
                            var e = this;
                            clearTimeout(this._poller),
                                (this._poller = setTimeout(function () {
                                    if (e._event_queue.length > 0) {
                                        var t = e.formatQueue(),
                                            n = function (n) {
                                                var r = t[n],
                                                    i = r.url,
                                                    o = r.data,
                                                    s = r.options;
                                                U(o, function (t, n) {
                                                    (o[n].offset = Math.abs(o[n].timestamp - e.getTime())), delete o[n].timestamp;
                                                }),
                                                    e.handlePollRequest(i, o, s),
                                                    e.captureMetrics.incr("batch-requests"),
                                                    e.captureMetrics.incr("batch-requests-".concat(i.slice(i.length - 2))),
                                                    e.captureMetrics.incr("batch-handle", o.length),
                                                    e.captureMetrics.incr("batch-handle-".concat(i.slice(i.length - 2)), o.length);
                                            };
                                        for (var r in t) n(r);
                                        (e._event_queue.length = 0), (e._empty_queue_count = 0);
                                    } else e._empty_queue_count++;
                                    e._empty_queue_count > 4 && ((e.isPolling = !1), (e._empty_queue_count = 0)), e.isPolling && e.poll();
                                }, this._pollInterval));
                        },
                    },
                    {
                        key: "updateUnloadMetrics",
                        value: function () {
                            var e = this.formatQueue();
                            for (var t in e) {
                                var n = e[t],
                                    r = n.url,
                                    i = n.data;
                                this.captureMetrics.incr("batch-unload-requests"),
                                    this.captureMetrics.incr("batch-unload-requests-".concat(r.slice(r.length - 2))),
                                    this.captureMetrics.incr("batch-unload", i.length),
                                    this.captureMetrics.incr("batch-unload-".concat(r.slice(r.length - 2)), i.length);
                            }
                        },
                    },
                    {
                        key: "unload",
                        value: function () {
                            clearTimeout(this._poller);
                            var e = this._event_queue.length > 0 ? this.formatQueue() : {};
                            for (var n in ((this._event_queue.length = 0), e)) {
                                var r = e[n],
                                    i = r.url,
                                    o = r.data,
                                    s = r.options;
                                this.handlePollRequest(i, o, t(t({}, s), {}, { transport: "sendBeacon" }));
                            }
                        },
                    },
                    {
                        key: "formatQueue",
                        value: function () {
                            var e = {};
                            return (
                                U(this._event_queue, function (t) {
                                    var n = t.url,
                                        r = t.data,
                                        i = t.options,
                                        o = (i ? i._batchKey : null) || n;
                                    void 0 === e[o] && (e[o] = { data: [], url: n, options: i }),
                                        i && e[o].options && e[o].options._metrics && !e[o].options._metrics.rrweb_full_snapshot && (e[o].options._metrics.rrweb_full_snapshot = i._metrics.rrweb_full_snapshot),
                                        e[o].data.push(r);
                                }),
                                e
                            );
                        },
                    },
                ]),
                r
            );
        })(dt),
        ft = (function () {
            function e(t) {
                o(this, e), (this.enabled = t), (this.metrics = {});
            }
            return (
                a(e, [
                    {
                        key: "incr",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            this.enabled && ((e = "phjs-".concat(e)), (this.metrics[e] = (this.metrics[e] || 0) + t));
                        },
                    },
                    {
                        key: "decr",
                        value: function (e) {
                            this.enabled && ((e = "phjs-".concat(e)), (this.metrics[e] = (this.metrics[e] || 0) - 1));
                        },
                    },
                ]),
                e
            );
        })(),
        ht = Uint8Array,
        _t = Uint16Array,
        gt = Uint32Array,
        vt = new ht([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        yt = new ht([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        mt = new ht([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        wt = function (e, t) {
            for (var n = new _t(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
            var i = new gt(n[30]);
            for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
            return [n, i];
        },
        bt = wt(vt, 2),
        kt = bt[0],
        St = bt[1];
    (kt[28] = 258), (St[258] = 28);
    for (var xt = wt(yt, 0)[1], Ot = new _t(32768), Et = 0; Et < 32768; ++Et) {
        var It = ((43690 & Et) >>> 1) | ((21845 & Et) << 1);
        (It = ((61680 & (It = ((52428 & It) >>> 2) | ((13107 & It) << 2))) >>> 4) | ((3855 & It) << 4)), (Ot[Et] = (((65280 & It) >>> 8) | ((255 & It) << 8)) >>> 1);
    }
    var Pt = function (e, t, n) {
            for (var r = e.length, i = 0, o = new _t(t); i < r; ++i) ++o[e[i] - 1];
            var s,
                a = new _t(t);
            for (i = 0; i < t; ++i) a[i] = (a[i - 1] + o[i - 1]) << 1;
            if (n) {
                s = new _t(1 << t);
                var c = 15 - t;
                for (i = 0; i < r; ++i) if (e[i]) for (var u = (i << 4) | e[i], l = t - e[i], d = a[e[i] - 1]++ << l, p = d | ((1 << l) - 1); d <= p; ++d) s[Ot[d] >>> c] = u;
            } else for (s = new _t(r), i = 0; i < r; ++i) s[i] = Ot[a[e[i] - 1]++] >>> (15 - e[i]);
            return s;
        },
        Ft = new ht(288);
    for (Et = 0; Et < 144; ++Et) Ft[Et] = 8;
    for (Et = 144; Et < 256; ++Et) Ft[Et] = 9;
    for (Et = 256; Et < 280; ++Et) Ft[Et] = 7;
    for (Et = 280; Et < 288; ++Et) Ft[Et] = 8;
    var At = new ht(32);
    for (Et = 0; Et < 32; ++Et) At[Et] = 5;
    var $t,
        Tt = Pt(Ft, 9, 0),
        qt = Pt(At, 5, 0),
        Ct = function (e) {
            return ((e / 8) >> 0) + (7 & e && 1);
        },
        Mt = function (e, t, n) {
            (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
            var r = new (e instanceof _t ? _t : e instanceof gt ? gt : ht)(n - t);
            return r.set(e.subarray(t, n)), r;
        },
        Rt = function (e, t, n) {
            n <<= 7 & t;
            var r = (t / 8) >> 0;
            (e[r] |= n), (e[r + 1] |= n >>> 8);
        },
        jt = function (e, t, n) {
            n <<= 7 & t;
            var r = (t / 8) >> 0;
            (e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16);
        },
        Nt = function (e, t) {
            for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
            var i = n.length,
                o = n.slice();
            if (!i) return [new ht(0), 0];
            if (1 == i) {
                var s = new ht(n[0].s + 1);
                return (s[n[0].s] = 1), [s, 1];
            }
            n.sort(function (e, t) {
                return e.f - t.f;
            }),
                n.push({ s: -1, f: 25001 });
            var a = n[0],
                c = n[1],
                u = 0,
                l = 1,
                d = 2;
            for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; l != i - 1; ) (a = n[n[u].f < n[d].f ? u++ : d++]), (c = n[u != l && n[u].f < n[d].f ? u++ : d++]), (n[l++] = { s: -1, f: a.f + c.f, l: a, r: c });
            var p = o[0].s;
            for (r = 1; r < i; ++r) o[r].s > p && (p = o[r].s);
            var f = new _t(p + 1),
                h = Dt(n[l - 1], f, 0);
            if (h > t) {
                r = 0;
                var _ = 0,
                    g = h - t,
                    v = 1 << g;
                for (
                    o.sort(function (e, t) {
                        return f[t.s] - f[e.s] || e.f - t.f;
                    });
                    r < i;
                    ++r
                ) {
                    var y = o[r].s;
                    if (!(f[y] > t)) break;
                    (_ += v - (1 << (h - f[y]))), (f[y] = t);
                }
                for (_ >>>= g; _ > 0; ) {
                    var m = o[r].s;
                    f[m] < t ? (_ -= 1 << (t - f[m]++ - 1)) : ++r;
                }
                for (; r >= 0 && _; --r) {
                    var w = o[r].s;
                    f[w] == t && (--f[w], ++_);
                }
                h = t;
            }
            return [new ht(f), h];
        },
        Dt = function e(t, n, r) {
            return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r);
        },
        Lt = function (e) {
            for (var t = e.length; t && !e[--t]; );
            for (
                var n = new _t(++t),
                    r = 0,
                    i = e[0],
                    o = 1,
                    s = function (e) {
                        n[r++] = e;
                    },
                    a = 1;
                a <= t;
                ++a
            )
                if (e[a] == i && a != t) ++o;
                else {
                    if (!i && o > 2) {
                        for (; o > 138; o -= 138) s(32754);
                        o > 2 && (s(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0));
                    } else if (o > 3) {
                        for (s(i), --o; o > 6; o -= 6) s(8304);
                        o > 2 && (s(((o - 3) << 5) | 8208), (o = 0));
                    }
                    for (; o--; ) s(i);
                    (o = 1), (i = e[a]);
                }
            return [n.subarray(0, r), t];
        },
        Bt = function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
            return n;
        },
        Ut = function (e, t, n) {
            var r = n.length,
                i = Ct(t + 2);
            (e[i] = 255 & r), (e[i + 1] = r >>> 8), (e[i + 2] = 255 ^ e[i]), (e[i + 3] = 255 ^ e[i + 1]);
            for (var o = 0; o < r; ++o) e[i + o + 4] = n[o];
            return 8 * (i + 4 + r);
        },
        Ht = function (e, t, n, r, i, o, s, a, c, u, l) {
            Rt(t, l++, n), ++i[256];
            for (var d = Nt(i, 15), p = d[0], f = d[1], h = Nt(o, 15), _ = h[0], g = h[1], v = Lt(p), y = v[0], m = v[1], w = Lt(_), b = w[0], k = w[1], S = new _t(19), x = 0; x < y.length; ++x) S[31 & y[x]]++;
            for (x = 0; x < b.length; ++x) S[31 & b[x]]++;
            for (var O = Nt(S, 7), E = O[0], I = O[1], P = 19; P > 4 && !E[mt[P - 1]]; --P);
            var F,
                A,
                $,
                T,
                q = (u + 5) << 3,
                C = Bt(i, Ft) + Bt(o, At) + s,
                M = Bt(i, p) + Bt(o, _) + s + 14 + 3 * P + Bt(S, E) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
            if (q <= C && q <= M) return Ut(t, l, e.subarray(c, c + u));
            if ((Rt(t, l, 1 + (M < C)), (l += 2), M < C)) {
                (F = Pt(p, f, 0)), (A = p), ($ = Pt(_, g, 0)), (T = _);
                var R = Pt(E, I, 0);
                Rt(t, l, m - 257), Rt(t, l + 5, k - 1), Rt(t, l + 10, P - 4), (l += 14);
                for (x = 0; x < P; ++x) Rt(t, l + 3 * x, E[mt[x]]);
                l += 3 * P;
                for (var j = [y, b], N = 0; N < 2; ++N) {
                    var D = j[N];
                    for (x = 0; x < D.length; ++x) {
                        var L = 31 & D[x];
                        Rt(t, l, R[L]), (l += E[L]), L > 15 && (Rt(t, l, (D[x] >>> 5) & 127), (l += D[x] >>> 12));
                    }
                }
            } else (F = Tt), (A = Ft), ($ = qt), (T = At);
            for (x = 0; x < a; ++x)
                if (r[x] > 255) {
                    L = (r[x] >>> 18) & 31;
                    jt(t, l, F[L + 257]), (l += A[L + 257]), L > 7 && (Rt(t, l, (r[x] >>> 23) & 31), (l += vt[L]));
                    var B = 31 & r[x];
                    jt(t, l, $[B]), (l += T[B]), B > 3 && (jt(t, l, (r[x] >>> 5) & 8191), (l += yt[B]));
                } else jt(t, l, F[r[x]]), (l += A[r[x]]);
            return jt(t, l, F[256]), l + A[256];
        },
        Gt = new gt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        Wt = new ht(0),
        Qt = (function () {
            for (var e = new gt(256), t = 0; t < 256; ++t) {
                for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1);
                e[t] = n;
            }
            return e;
        })(),
        Jt = function (e, t, n, r, i) {
            return (function (e, t, n, r, i, o) {
                var s = e.length,
                    a = new ht(r + s + 5 * (1 + Math.floor(s / 7e3)) + i),
                    c = a.subarray(r, a.length - i),
                    u = 0;
                if (!t || s < 8)
                    for (var l = 0; l <= s; l += 65535) {
                        var d = l + 65535;
                        d < s ? (u = Ut(c, u, e.subarray(l, d))) : ((c[l] = o), (u = Ut(c, u, e.subarray(l, s))));
                    }
                else {
                    for (
                        var p = Gt[t - 1],
                            f = p >>> 13,
                            h = 8191 & p,
                            _ = (1 << n) - 1,
                            g = new _t(32768),
                            v = new _t(_ + 1),
                            y = Math.ceil(n / 3),
                            m = 2 * y,
                            w = function (t) {
                                return (e[t] ^ (e[t + 1] << y) ^ (e[t + 2] << m)) & _;
                            },
                            b = new gt(25e3),
                            k = new _t(288),
                            S = new _t(32),
                            x = 0,
                            O = 0,
                            E = ((l = 0), 0),
                            I = 0,
                            P = 0;
                        l < s;
                        ++l
                    ) {
                        var F = w(l),
                            A = 32767 & l,
                            $ = v[F];
                        if (((g[A] = $), (v[F] = A), I <= l)) {
                            var T = s - l;
                            if ((x > 7e3 || E > 24576) && T > 423) {
                                (u = Ht(e, c, 0, b, k, S, O, E, P, l - P, u)), (E = x = O = 0), (P = l);
                                for (var q = 0; q < 286; ++q) k[q] = 0;
                                for (q = 0; q < 30; ++q) S[q] = 0;
                            }
                            var C = 2,
                                M = 0,
                                R = h,
                                j = (A - $) & 32767;
                            if (T > 2 && F == w(l - j))
                                for (var N = Math.min(f, T) - 1, D = Math.min(32767, l), L = Math.min(258, T); j <= D && --R && A != $; ) {
                                    if (e[l + C] == e[l + C - j]) {
                                        for (var B = 0; B < L && e[l + B] == e[l + B - j]; ++B);
                                        if (B > C) {
                                            if (((C = B), (M = j), B > N)) break;
                                            var U = Math.min(j, B - 2),
                                                H = 0;
                                            for (q = 0; q < U; ++q) {
                                                var G = (l - j + q + 32768) & 32767,
                                                    W = (G - g[G] + 32768) & 32767;
                                                W > H && ((H = W), ($ = G));
                                            }
                                        }
                                    }
                                    j += ((A = $) - ($ = g[A]) + 32768) & 32767;
                                }
                            if (M) {
                                b[E++] = 268435456 | (St[C] << 18) | xt[M];
                                var Q = 31 & St[C],
                                    J = 31 & xt[M];
                                (O += vt[Q] + yt[J]), ++k[257 + Q], ++S[J], (I = l + C), ++x;
                            } else (b[E++] = e[l]), ++k[e[l]];
                        }
                    }
                    (u = Ht(e, c, o, b, k, S, O, E, P, l - P, u)), o || (u = Ut(c, u, Wt));
                }
                return Mt(a, 0, r + Ct(u) + i);
            })(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !i);
        },
        zt = function (e, t, n) {
            for (; n; ++t) (e[t] = n), (n >>>= 8);
        };
    function Vt(e, t) {
        void 0 === t && (t = {});
        var n = (function () {
                var e = 4294967295;
                return {
                    p: function (t) {
                        for (var n = e, r = 0; r < t.length; ++r) n = Qt[(255 & n) ^ t[r]] ^ (n >>> 8);
                        e = n;
                    },
                    d: function () {
                        return 4294967295 ^ e;
                    },
                };
            })(),
            r = e.length;
        n.p(e);
        var i,
            o = Jt(e, t, 10 + (((i = t).filename && i.filename.length + 1) || 0), 8),
            s = o.length;
        return (
            (function (e, t) {
                var n = t.filename;
                if (((e[0] = 31), (e[1] = 139), (e[2] = 8), (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0), (e[9] = 3), 0 != t.mtime && zt(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n)) {
                    e[3] = 8;
                    for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r);
                }
            })(o, t),
            zt(o, s - 8, n.d()),
            zt(o, s - 4, r),
            o
        );
    }
    function Zt(e, t) {
        var n = e.length;
        if (!t && "undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
        for (
            var r = new ht(e.length + (e.length >>> 1)),
                i = 0,
                o = function (e) {
                    r[i++] = e;
                },
                s = 0;
            s < n;
            ++s
        ) {
            if (i + 5 > r.length) {
                var a = new ht(i + 8 + ((n - s) << 1));
                a.set(r), (r = a);
            }
            var c = e.charCodeAt(s);
            c < 128 || t
                ? o(c)
                : c < 2048
                ? (o(192 | (c >>> 6)), o(128 | (63 & c)))
                : c > 55295 && c < 57344
                ? (o(240 | ((c = (65536 + (1047552 & c)) | (1023 & e.charCodeAt(++s))) >>> 18)), o(128 | ((c >>> 12) & 63)), o(128 | ((c >>> 6) & 63)), o(128 | (63 & c)))
                : (o(224 | (c >>> 12)), o(128 | ((c >>> 6) & 63)), o(128 | (63 & c)));
        }
        return Mt(r, 0, i);
    }
    !(function (e) {
        (e.GZipJS = "gzip-js"), (e.LZ64 = "lz64"), (e.Base64 = "base64");
    })($t || ($t = {}));
    var Xt = function (e, t, n) {
            var r = t || {};
            (r.ip = n.ip ? 1 : 0), (r._ = new Date().getTime().toString()), (r.ver = O.LIB_VERSION);
            var i = e.split("?");
            if (i.length > 1) {
                var o,
                    s = y(i[1].split("&"));
                try {
                    for (s.s(); !(o = s.n()).done; ) {
                        var a = o.value.split("=")[0];
                        r[a] && delete r[a];
                    }
                } catch (e) {
                    s.e(e);
                } finally {
                    s.f();
                }
            }
            var c = e.indexOf("?") > -1 ? "&" : "?";
            return (
                e +
                c +
                (function (e) {
                    var t,
                        n,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                        i = [];
                    return (
                        U(e, function (e, r) {
                            (t = encodeURIComponent(e.toString())), (n = encodeURIComponent(r)), (i[i.length] = n + "=" + t);
                        }),
                        i.join(r)
                    );
                })(r)
            );
        },
        Yt = function e(t, n) {
            if (n.blob && t.buffer) return new Blob([t.buffer], { type: "text/plain" });
            if (n.sendBeacon || n.blob) {
                var r = e(t, { method: "POST" });
                return new Blob([r], { type: "application/x-www-form-urlencoded" });
            }
            if ("POST" !== n.method) return null;
            var i, o;
            return (
                (i = Array.isArray(t) || ((o = t), "[object Uint8Array]" === Object.prototype.toString.call(o)) ? "data=" + encodeURIComponent(t) : "data=" + encodeURIComponent(t.data)),
                "compression" in t && t.compression && (i += "&compression=" + t.compression),
                i
            );
        },
        Kt = function (e) {
            var t = e.url,
                n = e.data,
                r = e.headers,
                i = e.options,
                o = e.captureMetrics,
                s = e.callback,
                a = e.retriesPerformedSoFar,
                c = e.retryQueue,
                u = e.onXHRError,
                l = new XMLHttpRequest();
            l.open(i.method || "GET", t, !0);
            var d = Yt(n, i);
            o.incr("_send_request"),
                o.incr("_send_request_inflight"),
                U(r, function (e, t) {
                    l.setRequestHeader(t, e);
                }),
                "POST" !== i.method || i.blob || l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                (l.withCredentials = !0),
                (l.onreadystatechange = function () {
                    if (4 === l.readyState)
                        if ((o.incr("xhr-response"), o.incr("xhr-response-".concat(l.status)), o.decr("_send_request_inflight"), 200 === l.status)) {
                            if (s) {
                                var e;
                                try {
                                    e = JSON.parse(l.responseText);
                                } catch (e) {
                                    return void D(e);
                                }
                                s(e);
                            }
                        } else "function" == typeof u && u(l), [401, 403, 404, 500].indexOf(l.status) < 0 && c.enqueue({ url: t, data: n, options: i, headers: r, retriesPerformedSoFar: (a || 0) + 1, callback: s }), s && s({ status: 0 });
                }),
                l.send(d);
        },
        en = (function (e) {
            u(r, e);
            var n = f(r);
            function r(e, t) {
                var i;
                return (
                    o(this, r),
                    ((i = n.call(this)).captureMetrics = e),
                    (i.isPolling = !1),
                    (i.queue = []),
                    (i.areWeOnline = !0),
                    (i.onXHRError = t),
                    "onLine" in window.navigator &&
                        ((i.areWeOnline = window.navigator.onLine),
                        window.addEventListener("online", function () {
                            i._handleWeAreNowOnline();
                        }),
                        window.addEventListener("offline", function () {
                            i.areWeOnline = !1;
                        })),
                    i
                );
            }
            return (
                a(r, [
                    {
                        key: "enqueue",
                        value: function (e) {
                            var t = e.retriesPerformedSoFar || 0;
                            if (!(t >= 10)) {
                                var n = 3e3 * Math.pow(2, t),
                                    r = new Date(Date.now() + n);
                                console.warn("Enqueued failed request for retry in ".concat(n)), this.queue.push({ retryAt: r, requestData: e }), this.isPolling || ((this.isPolling = !0), this.poll());
                            }
                        },
                    },
                    {
                        key: "poll",
                        value: function () {
                            var e = this;
                            this._poller && clearTimeout(this._poller),
                                (this._poller = setTimeout(function () {
                                    e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll();
                                }, this._pollInterval));
                        },
                    },
                    {
                        key: "flush",
                        value: function () {
                            var e = new Date(Date.now()),
                                t = this.queue.filter(function (t) {
                                    return t.retryAt < e;
                                });
                            if (t.length > 0) {
                                this.queue = this.queue.filter(function (t) {
                                    return t.retryAt >= e;
                                });
                                var n,
                                    r = y(t);
                                try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                        var i = n.value.requestData;
                                        this._executeXhrRequest(i);
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            }
                        },
                    },
                    {
                        key: "unload",
                        value: function () {
                            this._poller && (clearTimeout(this._poller), (this._poller = void 0));
                            var e,
                                n = y(this.queue);
                            try {
                                for (n.s(); !(e = n.n()).done; ) {
                                    var r = e.value.requestData,
                                        i = r.url,
                                        o = r.data,
                                        s = r.options;
                                    try {
                                        window.navigator.sendBeacon(i, Yt(o, t(t({}, s), {}, { sendBeacon: !0 })));
                                    } catch (e) {
                                        O.DEBUG && console.error(e);
                                    }
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                            this.queue = [];
                        },
                    },
                    {
                        key: "_executeXhrRequest",
                        value: function (e) {
                            var t = e.url,
                                n = e.data,
                                r = e.options,
                                i = e.headers,
                                o = e.callback,
                                s = e.retriesPerformedSoFar;
                            Kt({ url: t, data: n || {}, options: r || {}, headers: i || {}, retriesPerformedSoFar: s || 0, callback: o, captureMetrics: this.captureMetrics, retryQueue: this, onXHRError: this.onXHRError });
                        },
                    },
                    {
                        key: "_handleWeAreNowOnline",
                        value: function () {
                            (this.areWeOnline = !0), this.flush();
                        },
                    },
                ]),
                r
            );
        })(dt),
        tn = 18e5,
        nn = 864e5,
        rn = (function () {
            function e(t, n) {
                o(this, e),
                    (this.persistence = n),
                    (this._windowId = void 0),
                    (this._sessionId = void 0),
                    (this._sessionStartTimestamp = null),
                    (this._sessionActivityTimestamp = null),
                    t.persistence_name ? (this.window_id_storage_key = "rq_" + t.persistence_name + "_window_id") : (this.window_id_storage_key = "rq_" + t.token + "_window_id");
            }
            return (
                a(e, [
                    {
                        key: "_setWindowId",
                        value: function (e) {
                            e !== this._windowId && ((this._windowId = e), !this.persistence.disabled && Re.is_supported() && Re.set(this.window_id_storage_key, e));
                        },
                    },
                    {
                        key: "_getWindowId",
                        value: function () {
                            return this._windowId ? this._windowId : !this.persistence.disabled && Re.is_supported() ? Re.parse(this.window_id_storage_key) : null;
                        },
                    },
                    {
                        key: "_setSessionId",
                        value: function (e, t, n) {
                            (e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp) ||
                                ((this._sessionStartTimestamp = n), (this._sessionActivityTimestamp = t), (this._sessionId = e), this.persistence.register(c({}, tt, [t, e, n])));
                        },
                    },
                    {
                        key: "_getSessionId",
                        value: function () {
                            if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                            var e = this.persistence.props.$sesid;
                            return Array.isArray(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0];
                        },
                    },
                    {
                        key: "resetSessionId",
                        value: function () {
                            this._setSessionId(null, null, null);
                        },
                    },
                    {
                        key: "checkAndGetSessionAndWindowId",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = t || new Date().getTime(),
                                r = this._getSessionId(),
                                i = h(r, 3),
                                o = i[0],
                                s = i[1],
                                a = i[2],
                                c = this._getWindowId(),
                                u = a && a > 0 && Math.abs(n - a) > nn;
                            !s || (!e && Math.abs(n - o) > tn) || u ? ((s = ce()), (c = ce()), (a = n)) : c || (c = ce());
                            var l = 0 === o || !e || u ? n : o,
                                d = 0 === a ? new Date().getTime() : a;
                            return this._setWindowId(c), this._setSessionId(s, l, d), { sessionId: s, windowId: c };
                        },
                    },
                ]),
                e
            );
        })();
    function on(e) {
        return (
            e.forEach(function (t, n) {
                for (var r in t) {
                    var i = r;
                    (o = t[i]),
                        Number(o) === o && o % 1 != 0 && t[i].toString().match(/^\d+\.\d{4,}$/) && (e[n][i] = Number(t[i].toFixed(3))),
                        "serverTiming" === i && 0 === t[i].length && delete e[n][i],
                        "entryType" === i && "resource" === t[i] && delete e[n][i],
                        "nextHopProtocol" === i && delete e[n][i],
                        0 === t[i] && delete e[n][i];
                }
                var o;
            }),
            (function (e) {
                if (0 === e.length) return [];
                var t = Object.keys(e[0]);
                return [
                    t,
                    e.map(function (e) {
                        return t.map(function (t) {
                            return e[t];
                        });
                    }),
                ];
            })(e)
        );
    }
    function sn(e) {
        try {
            return on(JSON.parse(JSON.stringify(A.performance.getEntriesByType(e))));
        } catch (t) {
            return O.DEBUG && console.warn("not able to capture performance data (" + e + ") - " + t), [];
        }
    }
    var an,
        cn,
        un,
        ln = a(function e(t, n, r, i) {
            o(this, e),
                (this.name = "posthog-js"),
                (this.setupOnce = function (e) {
                    e(function (e) {
                        if ("error" !== e.level || !t.__loaded) return e;
                        e.tags || (e.tags = {}),
                            (e.tags["PostHog Person URL"] = t.config.api_host + "/person/" + t.get_distinct_id()),
                            t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.config.api_host + "/recordings/#sessionRecordingId=" + t.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId);
                        var o = { $sentry_event_id: e.event_id, $sentry_exception: e.exception };
                        return n && r && (o.$sentry_url = (i || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + e.event_id), t.capture("$exception", o), e;
                    });
                });
        });
    !(function (e) {
        (e[(e.INIT_MODULE = 0)] = "INIT_MODULE"), (e[(e.INIT_SNIPPET = 1)] = "INIT_SNIPPET");
    })(an || (an = {}));
    var dn = function () {},
        pn = {},
        fn = "rinq",
        hn = A.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
        _n = !hn && -1 === q.indexOf("MSIE") && -1 === q.indexOf("Mozilla"),
        gn = function () {
            var e, t, n;
            return {
                api_host: "https://wes.wring.dev",
                api_method: "POST",
                api_transport: "XHR",
                token: "",
                autocapture: !0,
                rageclick: !1,
                cross_subdomain_cookie: -1 === (null == T || null === (e = T.location) || void 0 === e || null === (t = e.hostname) || void 0 === t ? void 0 : t.indexOf("herokuapp.com")),
                persistence: "cookie",
                persistence_name: "",
                cookie_name: "",
                loaded: dn,
                store_google: !0,
                save_referrer: !0,
                test: !1,
                verbose: !1,
                img: !1,
                capture_pageview: !0,
                debug: !1,
                cookie_expiration: 365,
                upgrade: !1,
                disable_session_recording: !1,
                disable_persistence: !1,
                disable_cookie: !1,
                enable_recording_console_log: !1,
                secure_cookie: "https:" === (null == A || null === (n = A.location) || void 0 === n ? void 0 : n.protocol),
                ip: !0,
                opt_out_capturing_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_capturing_persistence_type: "localStorage",
                opt_out_capturing_cookie_prefix: null,
                property_blacklist: [],
                respect_dnt: !1,
                sanitize_properties: null,
                xhr_headers: {},
                inapp_protocol: "//",
                inapp_link_new_window: !1,
                request_batching: !0,
                properties_string_max_length: 65535,
                session_recording: { blockClass: "ph-no-capture", blockSelector: null, ignoreClass: "ph-ignore-input", maskAllInputs: !0, maskInputOptions: {}, maskInputFn: null, slimDOMOptions: {}, collectFonts: !1, inlineStylesheet: !0 },
                mask_all_element_attributes: !1,
                mask_all_text: !1,
                advanced_capture_all_elements: !1,
                advanced_disable_decide: !1,
                advanced_disable_toolbar_metrics: !1,
                on_xhr_error: function (e) {
                    var t = "Bad HTTP status: " + e.status + " " + e.statusText;
                    console.error(t);
                },
                get_device_id: function (e) {
                    return e;
                },
                _onCapture: dn,
                _capture_metrics: !1,
                _capture_performance: !1,
                name: "rinq",
                callback_fn: "rinq._jsc",
            };
        },
        vn = function (e, t, n) {
            var r,
                i = n !== fn && un ? (n ? un[n] : void 0) : un;
            if (i && cn === an.INIT_MODULE) r = i;
            else {
                if (i && !W(i)) return void console.error("You have already initialized " + n);
                r = new yn();
            }
            if ((r._init(e, t, n), r.toolbar.maybeLoadEditor(), (r.sessionRecording = new ct(r)), r.sessionRecording.startRecordingIfEnabled(), (r.__autocapture_enabled = r.get_config("autocapture")), r.get_config("autocapture"))) {
                Ie.enabledForProject(r.get_config("token"), 100, 100)
                    ? Ie.isBrowserSupported()
                        ? Ie.init(r)
                        : ((r.__autocapture_enabled = !1), N("Disabling Automatic Event Collection because this browser is not supported"))
                    : ((r.__autocapture_enabled = !1), N("Not in active bucket: disabling Automatic Event Collection."));
            }
            return (O.DEBUG = O.DEBUG || r.get_config("debug")), void 0 !== i && W(i) && (r._execute_array.call(r.people, i.people), r._execute_array(i)), r;
        },
        yn = (function () {
            function e() {
                o(this, e),
                    (this.config = gn()),
                    (this.compression = {}),
                    (this.decideEndpointWasHit = !1),
                    (this.SentryIntegration = ln),
                    (this.__captureHooks = []),
                    (this.__request_queue = []),
                    (this.__loaded = !1),
                    (this.__autocapture_enabled = void 0),
                    (this._jsc = function () {}),
                    (this.people = new Ve(this)),
                    (this.featureFlags = new Ze(this)),
                    (this.feature_flags = this.featureFlags),
                    (this.toolbar = new lt(this)),
                    (this.advanced_capture_all_elements = !1),
                    (this._captureMetrics = void 0),
                    (this._requestQueue = void 0),
                    (this._retryQueue = void 0),
                    (this.persistence = void 0),
                    (this.sessionManager = void 0);
            }
            var s, u;
            return (
                a(e, [
                    {
                        key: "init",
                        value: function (e, t, n) {
                            if (V(n)) console.error("You must name your new library: init(token, config, name)");
                            else {
                                if (n !== fn) {
                                    var r = vn(e, t, n);
                                    return (un[n] = r), r._loaded(), r;
                                }
                                console.error("You must initialize the main posthog object right after you include the PostHog js snippet");
                            }
                        },
                    },
                    {
                        key: "_init",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            if (
                                ((this.__loaded = !0),
                                (this.config = {}),
                                (this._triggered_notifs = []),
                                this.set_config(G({}, gn(), t, { name: n, token: e, callback_fn: (n === fn ? n : "rinq." + n) + "._jsc" })),
                                (this._jsc = function () {}),
                                (this._captureMetrics = new ft(this.get_config("_capture_metrics"))),
                                (this._requestQueue = new pt(this._captureMetrics, this._handle_queued_event.bind(this))),
                                (this._retryQueue = new en(this._captureMetrics, this.get_config("on_xhr_error"))),
                                (this.__captureHooks = []),
                                (this.__request_queue = []),
                                (this.persistence = new it(this.config)),
                                (this.sessionManager = new rn(this.config, this.persistence)),
                                this._gdpr_init(),
                                !this.get_distinct_id())
                            ) {
                                var r = this.get_config("get_device_id")(ce());
                                this.register_once({ distinct_id: r, $device_id: r }, "");
                            }
                            A.addEventListener && A.addEventListener("unload", this._handle_unload.bind(this));
                        },
                    },
                    {
                        key: "_loaded",
                        value: function () {
                            this.featureFlags.setReloadingPaused(!0);
                            try {
                                this.get_config("loaded")(this);
                            } catch (e) {
                                console.error("`loaded` function failed", e);
                            }
                            this._start_queue_if_opted_in(),
                                this.get_config("capture_pageview") && this.capture("$pageview", {}, { send_instantly: !0 }),
                                this.get_config("advanced_disable_decide") || new ut(this).call(),
                                this.featureFlags.resetRequestQueue(),
                                this.featureFlags.setReloadingPaused(!1);
                        },
                    },
                    {
                        key: "_start_queue_if_opted_in",
                        value: function () {
                            this.has_opted_out_capturing() || (this.get_config("request_batching") && this._requestQueue.poll());
                        },
                    },
                    {
                        key: "_dom_loaded",
                        value: function () {
                            var e = this;
                            this.has_opted_out_capturing() ||
                                H(this.__request_queue, function (t) {
                                    e._send_request.apply(e, _(t));
                                }),
                                (this.__request_queue = []),
                                this._start_queue_if_opted_in();
                        },
                    },
                    {
                        key: "_prepare_callback",
                        value: function (e, t) {
                            if (V(e)) return null;
                            if (hn)
                                return function (n) {
                                    e(n, t);
                                };
                            var n = this._jsc,
                                r = "" + Math.floor(1e8 * Math.random()),
                                i = this.get_config("callback_fn") + "[" + r + "]";
                            return (
                                (n[r] = function (i) {
                                    delete n[r], e(i, t);
                                }),
                                i
                            );
                        },
                    },
                    {
                        key: "_handle_unload",
                        value: function () {
                            this.get_config("request_batching")
                                ? (this.get_config("capture_pageview") && this.capture("$pageleave"),
                                  this.get_config("_capture_metrics") && (this._requestQueue.updateUnloadMetrics(), this.capture("$capture_metrics", this._captureMetrics.metrics)),
                                  this._requestQueue.unload(),
                                  this._retryQueue.unload())
                                : this.get_config("capture_pageview") && this.capture("$pageleave", null, { transport: "sendBeacon" });
                        },
                    },
                    {
                        key: "_handle_queued_event",
                        value: function (e, t, n) {
                            var r = JSON.stringify(t);
                            this.__compress_and_send_json_request(e, r, n || pn, dn);
                        },
                    },
                    {
                        key: "__compress_and_send_json_request",
                        value: function (e, n, r, i) {
                            var o,
                                s = (function (e, n, r) {
                                    return e === $t.LZ64
                                        ? [{ data: x.compressToBase64(n), compression: $t.LZ64 }, r]
                                        : e === $t.GZipJS
                                        ? [Vt(Zt(n), { mtime: 0 }), t(t({}, r), {}, { blob: !0, urlQueryArgs: { compression: $t.GZipJS } })]
                                        : [{ data: oe(n) }, r];
                                })((o = this.compression)[$t.GZipJS] ? $t.GZipJS : o[$t.LZ64] ? $t.LZ64 : $t.Base64, n, r),
                                a = h(s, 2),
                                c = a[0],
                                u = a[1];
                            this._send_request(e, c, u, i);
                        },
                    },
                    {
                        key: "_send_request",
                        value: function (e, n, r, i) {
                            if (_n) this.__request_queue.push([e, n, r, i]);
                            else {
                                var o = { method: this.get_config("api_method"), transport: this.get_config("api_transport"), verbose: this.get_config("verbose") };
                                (r = G(o, r || {})), hn || (r.method = "GET");
                                var s = "sendBeacon" in A.navigator && "sendBeacon" === r.transport;
                                if (((e = Xt(e, r.urlQueryArgs || {}, { ip: this.get_config("ip") })), z(n) && this.get_config("img"))) {
                                    var a = T.createElement("img");
                                    (a.src = e), T.body.appendChild(a);
                                } else if (s)
                                    try {
                                        A.navigator.sendBeacon(e, Yt(n, t(t({}, r), {}, { sendBeacon: !0 })));
                                    } catch (e) {
                                        this.get_config("debug") && console.error(e);
                                    }
                                else if (hn)
                                    try {
                                        Kt({
                                            url: e,
                                            data: n,
                                            headers: this.get_config("xhr_headers"),
                                            options: r,
                                            captureMetrics: this._captureMetrics,
                                            callback: i,
                                            retriesPerformedSoFar: 0,
                                            retryQueue: this._retryQueue,
                                            onXHRError: this.get_config("on_xhr_error"),
                                        });
                                    } catch (e) {
                                        console.error(e);
                                    }
                                else {
                                    var c,
                                        u = T.createElement("script");
                                    (u.type = "text/javascript"), (u.async = !0), (u.defer = !0), (u.src = e);
                                    var l = T.getElementsByTagName("script")[0];
                                    null === (c = l.parentNode) || void 0 === c || c.insertBefore(u, l);
                                }
                            }
                        },
                    },
                    {
                        key: "_execute_array",
                        value: function (e) {
                            var t,
                                n = this,
                                r = [],
                                i = [],
                                o = [];
                            H(e, function (e) {
                                e && ((t = e[0]), W(t) ? o.push(e) : "function" == typeof e ? e.call(n) : W(e) && "alias" === t ? r.push(e) : W(e) && -1 !== t.indexOf("capture") && "function" == typeof n[t] ? o.push(e) : i.push(e));
                            });
                            var s = function (e, t) {
                                H(
                                    e,
                                    function (e) {
                                        if (W(e[0])) {
                                            var n = t;
                                            U(e, function (e) {
                                                n = n[e[0]].apply(n, e.slice(1));
                                            });
                                        } else this[e[0]].apply(this, e.slice(1));
                                    },
                                    t
                                );
                            };
                            s(r, this), s(i, this), s(o, this);
                        },
                    },
                    {
                        key: "push",
                        value: function (e) {
                            this._execute_array([e]);
                        },
                    },
                    {
                        key: "wrappedCapture",
                        value: function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pn;
                            console.log("event_name: ", e),
                                console.log("properties: ", t),
                                console.log("options: ", n),
                                new Promise(function (e, t) {
                                    setTimeout(t, 1e3), console.log("res: ", e);
                                });
                        },
                    },
                    {
                        key: "capture",
                        value: function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pn;
                            if (this.__loaded && !Qe(this, !1)) {
                                this._captureMetrics.incr("capture"), "$snapshot" === e && this._captureMetrics.incr("snapshot");
                                var r = (n = n || pn).transport;
                                if ((r && (n.transport = r), V(e) || "string" != typeof e)) console.error("No event name provided to posthog.capture");
                                else if (!ue(q)) {
                                    var i = this.persistence.remove_event_timer(e);
                                    this.persistence.update_search_keyword(T.referrer),
                                        this.get_config("store_google") && this.persistence.update_campaign_params(),
                                        this.get_config("save_referrer") && this.persistence.update_referrer_info(T.referrer);
                                    var o = { event: e, properties: this._calculate_event_properties(e, t || {}, i) };
                                    "$identify" === e && n.$set && (o.$set = n.$set),
                                        ((o = ie(o, n._noTruncate ? null : this.get_config("properties_string_max_length"))).timestamp = n.timestamp || new Date()),
                                        this.get_config("debug") && N("PostHog.js send", o);
                                    var s = JSON.stringify(o),
                                        a = this.get_config("api_host") + (n.endpoint || "/e/"),
                                        c = n !== pn;
                                    return (
                                        !this.get_config("request_batching") || (c && !n._batchKey) || n.send_instantly ? this.__compress_and_send_json_request(a, s, n) : this._requestQueue.enqueue(a, o, n),
                                        this._invokeCaptureHooks(e, o),
                                        o
                                    );
                                }
                            }
                        },
                    },
                    {
                        key: "delay",
                        value:
                            ((s = n().mark(function e(t) {
                                return n().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    new Promise(function (e) {
                                                        return setTimeout(function () {
                                                            return e();
                                                        }, t);
                                                    }).then(function () {
                                                        return console.log("fired");
                                                    })
                                                );
                                            case 2:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })),
                            (u = function () {
                                var e = this,
                                    t = arguments;
                                return new Promise(function (n, r) {
                                    var o = s.apply(e, t);
                                    function a(e) {
                                        i(o, n, r, a, c, "next", e);
                                    }
                                    function c(e) {
                                        i(o, n, r, a, c, "throw", e);
                                    }
                                    a(void 0);
                                });
                            }),
                            function (e) {
                                return u.apply(this, arguments);
                            }),
                    },
                    {
                        key: "_addCaptureHook",
                        value: function (e) {
                            this.__captureHooks.push(e);
                        },
                    },
                    {
                        key: "_invokeCaptureHooks",
                        value: function (e, t) {
                            this.config._onCapture(e, t),
                                U(this.__captureHooks, function (t) {
                                    return t(e);
                                });
                        },
                    },
                    {
                        key: "_calculate_event_properties",
                        value: function (e, n, i) {
                            var o = t({}, n);
                            if (((o.token = this.get_config("token")), "$snapshot" === e)) {
                                var s = this.persistence.properties();
                                return (o.distinct_id = s.distinct_id), o;
                            }
                            if (void 0 !== i) {
                                var a = new Date().getTime() - i;
                                o.$duration = parseFloat((a / 1e3).toFixed(3));
                            }
                            if (this.sessionManager) {
                                var c = this.sessionManager.checkAndGetSessionAndWindowId(),
                                    u = c.sessionId,
                                    l = c.windowId;
                                (o.$session_id = u), (o.$window_id = l);
                            }
                            (o = G({}, fe.properties(), this.persistence.properties(), o)),
                                "$pageview" === e &&
                                    this.get_config("_capture_performance") &&
                                    (o = G(
                                        o,
                                        (function () {
                                            var e = { navigation: sn("navigation"), paint: sn("paint"), resource: sn("resource") };
                                            void 0 !== r(A) && A.performance && A.performance.clearResourceTimings && A.performance.clearResourceTimings();
                                            var t = {},
                                                n = (function (e) {
                                                    var t = e.navigation && e.navigation[0],
                                                        n = e.navigation && e.navigation[1] && e.navigation[1][0],
                                                        r = t && t.indexOf("duration");
                                                    if (r > -1) return n[r];
                                                    var i = t && t.indexOf("loadEventEnd"),
                                                        o = t && t.indexOf("startTime");
                                                    return i > -1 ? (n && n[i]) - ((n && n[o]) || 0) : void 0;
                                                })(e);
                                            return n && (t.$performance_page_loaded = n), (t.$performance_raw = JSON.stringify(e)), t;
                                        })()
                                    ));
                            var d = this.get_config("property_blacklist");
                            W(d)
                                ? U(d, function (e) {
                                      delete o[e];
                                  })
                                : console.error("Invalid value for property_blacklist config: " + d);
                            var p = this.get_config("sanitize_properties");
                            return p && (o = p(o, e)), o;
                        },
                    },
                    {
                        key: "register",
                        value: function (e, t) {
                            this.persistence.register(e, t);
                        },
                    },
                    {
                        key: "register_once",
                        value: function (e, t, n) {
                            this.persistence.register_once(e, t, n);
                        },
                    },
                    {
                        key: "unregister",
                        value: function (e) {
                            this.persistence.unregister(e);
                        },
                    },
                    {
                        key: "_register_single",
                        value: function (e, t) {
                            this.register(c({}, e, t));
                        },
                    },
                    {
                        key: "getFeatureFlag",
                        value: function (e, t) {
                            return this.featureFlags.getFeatureFlag(e, t);
                        },
                    },
                    {
                        key: "isFeatureEnabled",
                        value: function (e, t) {
                            return this.featureFlags.isFeatureEnabled(e, t);
                        },
                    },
                    {
                        key: "reloadFeatureFlags",
                        value: function () {
                            this.featureFlags.reloadFeatureFlags();
                        },
                    },
                    {
                        key: "onFeatureFlags",
                        value: function (e) {
                            return this.featureFlags.onFeatureFlags(e);
                        },
                    },
                    {
                        key: "identify",
                        value: function (e, t, n) {
                            if (e) {
                                this._captureMetrics.incr("identify");
                                var r = this.get_distinct_id();
                                if ((this.register({ $user_id: e }), !this.get_property("$device_id"))) {
                                    var i = r;
                                    this.register_once({ $had_persisted_distinct_id: !0, $device_id: i }, "");
                                }
                                e !== r && e !== this.get_property(Ye) && (this.unregister(Ye), this.register({ distinct_id: e })),
                                    e === r || (this.get_property("$device_id") && r !== this.get_property("$device_id"))
                                        ? (t && this.people.set(t), n && this.people.set_once(n))
                                        : (this.capture("$identify", { distinct_id: e, $anon_distinct_id: r }, { $set: t || {}, $set_once: n || {} }), this.featureFlags.setAnonymousDistinctId(r)),
                                    e !== r && this.reloadFeatureFlags();
                            } else console.error("Unique user id has not been set in posthog.identify");
                        },
                    },
                    {
                        key: "group",
                        value: function (e, n, r) {
                            if (e && n) {
                                this._captureMetrics.incr("group");
                                var i = this.getGroups();
                                this.register({ $groups: t(t({}, i), {}, c({}, e, n)) }), r && this.capture("$groupidentify", { $group_type: e, $group_key: n, $group_set: r }), i[e] !== n && this.reloadFeatureFlags();
                            } else console.error("posthog.group requires a group type and group key");
                        },
                    },
                    {
                        key: "reset",
                        value: function (e) {
                            var t = this.get_property("$device_id");
                            this.persistence.clear(), this.sessionManager.resetSessionId();
                            var n = this.get_config("get_device_id")(ce());
                            this.register_once({ distinct_id: n, $device_id: e ? n : t }, "");
                        },
                    },
                    {
                        key: "get_distinct_id",
                        value: function () {
                            return this.get_property("distinct_id");
                        },
                    },
                    {
                        key: "getGroups",
                        value: function () {
                            return this.get_property("$groups") || {};
                        },
                    },
                    {
                        key: "alias",
                        value: function (e, t) {
                            return e === this.get_property(Xe)
                                ? (L("Attempting to create alias for existing People user - aborting."), -2)
                                : (V(t) && (t = this.get_distinct_id()),
                                  e !== t ? (this._register_single(Ye, e), this.capture("$create_alias", { alias: e, distinct_id: t })) : (console.error("alias matches current distinct_id - skipping api call."), this.identify(e), -1));
                        },
                    },
                    {
                        key: "set_config",
                        value: function (e) {
                            var n = t({}, this.config);
                            z(e) &&
                                (G(this.config, e),
                                this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
                                this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
                                this.persistence && this.persistence.update_config(this.config),
                                $e.is_supported() && "true" === $e.get("ph_debug") && (this.config.debug = !0),
                                this.get_config("debug") && (O.DEBUG = !0),
                                this.sessionRecording &&
                                    void 0 !== e.disable_session_recording &&
                                    n.disable_session_recording !== e.disable_session_recording &&
                                    (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled()));
                        },
                    },
                    {
                        key: "startSessionRecording",
                        value: function () {
                            this.set_config({ disable_session_recording: !1 });
                        },
                    },
                    {
                        key: "stopSessionRecording",
                        value: function () {
                            this.set_config({ disable_session_recording: !0 });
                        },
                    },
                    {
                        key: "sessionRecordingStarted",
                        value: function () {
                            var e;
                            return !(null === (e = this.sessionRecording) || void 0 === e || !e.started());
                        },
                    },
                    {
                        key: "get_config",
                        value: function (e) {
                            var t;
                            return null === (t = this.config) || void 0 === t ? void 0 : t[e];
                        },
                    },
                    {
                        key: "get_property",
                        value: function (e) {
                            return this.persistence.props[e];
                        },
                    },
                    {
                        key: "toString",
                        value: function () {
                            var e,
                                t = null !== (e = this.get_config("name")) && void 0 !== e ? e : fn;
                            return t !== fn && (t = "rinq." + t), t;
                        },
                    },
                    {
                        key: "_gdpr_init",
                        value: function () {
                            "localStorage" === this.get_config("opt_out_capturing_persistence_type") &&
                                $e.is_supported() &&
                                (!this.has_opted_in_capturing() && this.has_opted_in_capturing({ persistence_type: "cookie" }) && this.opt_in_capturing({ enable_persistence: !1 }),
                                !this.has_opted_out_capturing() && this.has_opted_out_capturing({ persistence_type: "cookie" }) && this.opt_out_capturing({ clear_persistence: !1 }),
                                this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: !1 })),
                                this.has_opted_out_capturing()
                                    ? this._gdpr_update_persistence({ clear_persistence: !0 })
                                    : this.has_opted_in_capturing() ||
                                      (!this.get_config("opt_out_capturing_by_default") && !Fe.get("ph_optout")) ||
                                      (Fe.remove("ph_optout"), this.opt_out_capturing({ clear_persistence: this.get_config("opt_out_persistence_by_default") }));
                        },
                    },
                    {
                        key: "_gdpr_update_persistence",
                        value: function (e) {
                            var t;
                            if (e && e.clear_persistence) t = !0;
                            else {
                                if (!e || !e.enable_persistence) return;
                                t = !1;
                            }
                            this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t);
                        },
                    },
                    {
                        key: "_gdpr_call_func",
                        value: function (e, t) {
                            return (
                                (t = G(
                                    {
                                        capture: this.capture.bind(this),
                                        persistence_type: this.get_config("opt_out_capturing_persistence_type"),
                                        cookie_prefix: this.get_config("opt_out_capturing_cookie_prefix"),
                                        cookie_expiration: this.get_config("cookie_expiration"),
                                        cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                                        secure_cookie: this.get_config("secure_cookie"),
                                    },
                                    t || {}
                                )),
                                $e.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"),
                                e(this.get_config("token"), {
                                    capture: t.capture,
                                    captureEventName: t.capture_event_name,
                                    captureProperties: t.capture_properties,
                                    persistenceType: t.persistence_type,
                                    persistencePrefix: t.cookie_prefix,
                                    cookieExpiration: t.cookie_expiration,
                                    crossSubdomainCookie: t.cross_subdomain_cookie,
                                    secureCookie: t.secure_cookie,
                                })
                            );
                        },
                    },
                    {
                        key: "opt_in_capturing",
                        value: function (e) {
                            (e = G({ enable_persistence: !0 }, e || {})), this._gdpr_call_func(je, e), this._gdpr_update_persistence(e);
                        },
                    },
                    {
                        key: "opt_out_capturing",
                        value: function (e) {
                            var t = G({ clear_persistence: !0 }, e || {});
                            this._gdpr_call_func(Ne, t), this._gdpr_update_persistence(t);
                        },
                    },
                    {
                        key: "has_opted_in_capturing",
                        value: function (e) {
                            return this._gdpr_call_func(De, e);
                        },
                    },
                    {
                        key: "has_opted_out_capturing",
                        value: function (e) {
                            return this._gdpr_call_func(Le, e);
                        },
                    },
                    {
                        key: "clear_opt_in_out_capturing",
                        value: function (e) {
                            var t = G({ enable_persistence: !0 }, null != e ? e : {});
                            this._gdpr_call_func(Be, t), this._gdpr_update_persistence(t);
                        },
                    },
                    {
                        key: "debug",
                        value: function (e) {
                            !1 === e
                                ? (A.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: !1 }))
                                : (A.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),
                                  localStorage && localStorage.setItem("ph_debug", "true"),
                                  this.set_config({ debug: !0 }));
                        },
                    },
                    {
                        key: "decodeLZ64",
                        value: function (e) {
                            return x.decompressFromBase64(e || null);
                        },
                    },
                ]),
                e
            );
        })();
    !(function (e, t) {
        for (var n = 0; n < t.length; n++) e.prototype[t[n]] = K(e.prototype[t[n]]);
    })(yn, ["identify"]);
    var mn = {},
        wn = function () {
            un.init = function (e, t, n) {
                if (n) return un[n] || ((un[n] = mn[n] = vn(e || "", t || {}, n)), un[n]._loaded()), un[n];
                var r = un;
                return (
                    mn.rinq ? (r = mn.rinq) : e && ((r = vn(e, t || {}, fn))._loaded(), (mn.rinq = r)),
                    (un = r),
                    cn === an.INIT_SNIPPET && (A.rinq = un),
                    U(mn, function (e, t) {
                        t !== fn && (un[t] = e);
                    }),
                    r
                );
            };
        };
    (cn = an.INIT_SNIPPET),
        V(A.rinq) && (A.rinq = []),
        (un = A.rinq).__loaded || (un.config && un.persistence)
            ? console.error("PostHog library has already been downloaded at least once.")
            : (U(un._i, function (e) {
                  e && W(e) && (mn[e[2]] = vn.apply(void 0, _(e)));
              }),
              wn(),
              un.init(),
              U(mn, function (e) {
                  e._loaded();
              }),
              (function () {
                  function e() {
                      e.done ||
                          ((e.done = !0),
                          (_n = !1),
                          U(mn, function (e) {
                              e._dom_loaded();
                          }));
                  }
                  T.addEventListener && ("complete" === T.readyState ? e() : T.addEventListener("DOMContentLoaded", e, !1)), pe(A, "load", e, !0);
              })());
})();
//# sourceMappingURL=array.js.map
