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
          s(t, e, r[e]);
        })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : e(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
  }
  function n(e) {
    return (
      (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
            return typeof e;
          }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }),
        n(e)
    );
  }
  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  function o(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
  }
  function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && u(e, t);
  }
  function c(e) {
    return (
      (c = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
        c(e)
    );
  }
  function u(e, t) {
    return (
      (u = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
          return (e.__proto__ = t), e;
        }),
        u(e, t)
    );
  }
  function l(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return (function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    })(e);
  }
  function d(e) {
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
        r = c(e);
      if (t) {
        var i = c(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return l(this, n);
    };
  }
  function p(e, t) {
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
      h(e, t) ||
      (function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })()
    );
  }
  function f(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return _(e);
      })(e) ||
      (function (e) {
        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
      })(e) ||
      h(e) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })()
    );
  }
  function h(e, t) {
    if (e) {
      if ("string" == typeof e) return _(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0;
    }
  }
  function _(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function g(e, t) {
    var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = h(e)) || (t && e && "number" == typeof e.length)) {
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
  var v = String.fromCharCode,
    y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
    w = {};
  function b(e, t) {
    if (!w[e]) {
      w[e] = {};
      for (var n = 0; n < e.length; n++) w[e][e.charAt(n)] = n;
    }
    return w[e][t];
  }
  var k = {
      compressToBase64: function (e) {
        if (null == e) return "";
        var t = k._compress(e, 6, function (e) {
          return y.charAt(e);
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
            : k._decompress(e.length, 32, function (t) {
              return b(y, e.charAt(t));
            });
      },
      compressToUTF16: function (e) {
        return null == e
          ? ""
          : k._compress(e, 15, function (e) {
          return v(e + 32);
        }) + " ";
      },
      decompressFromUTF16: function (e) {
        return null == e
          ? ""
          : "" == e
            ? null
            : k._decompress(e.length, 16384, function (t) {
              return e.charCodeAt(t) - 32;
            });
      },
      compressToUint8Array: function (e) {
        for (var t = k.compress(e), n = new Uint8Array(2 * t.length), r = 0, i = t.length; r < i; r++) {
          var o = t.charCodeAt(r);
          (n[2 * r] = o >>> 8), (n[2 * r + 1] = o % 256);
        }
        return n;
      },
      decompressFromUint8Array: function (e) {
        if (null == e) return k.decompress(e);
        for (var t = new Array(e.length / 2), n = 0, r = t.length; n < r; n++) t[n] = 256 * e[2 * n] + e[2 * n + 1];
        var i = [];
        return (
          t.forEach(function (e) {
            i.push(v(e));
          }),
            k.decompress(i.join(""))
        );
      },
      compressToEncodedURIComponent: function (e) {
        return null == e
          ? ""
          : k._compress(e, 6, function (e) {
            return m.charAt(e);
          });
      },
      decompressFromEncodedURIComponent: function (e) {
        return null == e
          ? ""
          : "" == e
            ? null
            : ((e = e.replace(/ /g, "+")),
              k._decompress(e.length, 32, function (t) {
                return b(m, e.charAt(t));
              }));
      },
      compress: function (e) {
        return k._compress(e, 16, function (e) {
          return v(e);
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
            : k._decompress(e.length, 32768, function (t) {
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
            u = v(o);
            break;
          case 1:
            for (o = 0, a = Math.pow(2, 16), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
            u = v(o);
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
              (l[h++] = v(o)), (u = h - 1), f--;
              break;
            case 1:
              for (o = 0, a = Math.pow(2, 16), c = 1; c != a; ) (s = p.val & p.position), (p.position >>= 1), 0 == p.position && ((p.position = t), (p.val = n(p.index++))), (o |= (s > 0 ? 1 : 0) * c), (c <<= 1);
              (l[h++] = v(o)), (u = h - 1), f--;
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
    S = { DEBUG: !1, LIB_VERSION: "1.29.0" },
    I = Array.prototype,
    O = Object.prototype,
    x = O.toString,
    A = O.hasOwnProperty,
    E = "undefined" != typeof window ? window : {},
    F = E.navigator || { userAgent: "" },
    P = E.document || {},
    $ = F.userAgent,
    C = I.forEach,
    T = I.indexOf,
    M = Array.isArray,
    R = {},
    q = function () {
      if (S.DEBUG && !J(window.console) && window.console) {
        for (var e = ("__rrweb_original__" in window.console.log) ? window.console.log.__rrweb_original__ : window.console.log, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        try {
          e.apply(window.console, n);
        } catch (t) {
          L(n, function (t) {
            e(t);
          });
        }
      }
    },
    j = function () {
      if (S.DEBUG && !J(window.console) && window.console) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = ["PostHog error:"].concat(t),
          i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
        try {
          i.apply(window.console, r);
        } catch (e) {
          L(r, function (e) {
            i(e);
          });
        }
      }
    },
    N = function () {
      if (!J(window.console) && window.console) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = ["PostHog error:"].concat(t),
          i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
        try {
          i.apply(window.console, r);
        } catch (e) {
          L(r, function (e) {
            i(e);
          });
        }
      }
    },
    D = function (e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
  function B(e, t, n) {
    if (null != e)
      if (C && Array.isArray(e) && e.forEach === C) e.forEach(t, n);
      else if ("length" in e && e.length === +e.length) {
        for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === R) return;
      } else for (var o in e) if (A.call(e, o) && t.call(n, e[o], o) === R) return;
  }
  function L(e, t, n) {
    if (Array.isArray(e))
      if (C && e.forEach === C) e.forEach(t, n);
      else if ("length" in e && e.length === +e.length) for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === R) return;
  }
  var U = function (e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return (
        L(n, function (t) {
          for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
        }),
          e
      );
    },
    H =
      M ||
      function (e) {
        return "[object Array]" === x.call(e);
      },
    W = function (e) {
      try {
        return /^\s*\bfunction\b/.test(e);
      } catch (e) {
        return !1;
      }
    };
  function Q(e, t) {
    return -1 !== e.indexOf(t);
  }
  var G = function (e) {
      return e === Object(e) && !H(e);
    },
    J = function (e) {
      return void 0 === e;
    },
    z = function (e) {
      return "[object String]" == x.call(e);
    },
    V = function e(t) {
      return (
        B(t, function (n, r) {
          !(function (e) {
            return "[object Date]" == x.call(e);
          })(n)
            ? G(n) && (t[r] = e(n))
            : (t[r] = Z(n));
        }),
          t
      );
    },
    Z = function (e) {
      function t(e) {
        return e < 10 ? "0" + e : e;
      }
      return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds());
    },
    X = function (e) {
      return function () {
        try {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return e.apply(this, n);
        } catch (e) {
          N("Implementation error. Please turn on debug and contact support@posthog.com."), S.DEBUG && N(e);
        }
      };
    },
    Y = function (e) {
      var t = {};
      return (
        B(e, function (e, n) {
          z(e) && e.length > 0 && (t[n] = e);
        }),
          t
      );
    },
    K = "undefined" != typeof Symbol ? Symbol("__deepCircularCopyInProgress__") : "__deepCircularCopyInProgress__";
  function ee(e, t, n) {
    return e !== Object(e)
      ? t
        ? t(e, n)
        : e
      : e[K]
        ? void 0
        : ((e[K] = !0),
          H(e)
            ? ((r = []),
              L(e, function (e) {
                r.push(ee(e, t));
              }))
            : ((r = {}),
              B(e, function (e, n) {
                n !== K && (r[n] = ee(e, t, n));
              })),
          delete e[K],
          r);
    var r;
  }
  var te = ["$performance_raw"];
  function ne(e, t) {
    return ee(e, function (e, n) {
      return n && te.indexOf(n) > -1 ? e : "string" == typeof e && null !== t ? e.slice(0, t) : e;
    });
  }
  function re(e) {
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
    e = oe(e);
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
  var ie,
    oe = function (e) {
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
    se =
      ((ie = function () {
        for (var e = new Date().valueOf(), t = 0; e == new Date().valueOf(); ) t++;
        return e.toString(16) + t.toString(16);
      }),
        function () {
          var e = (window.screen.height * window.screen.width).toString(16);
          return (
            ie() +
            "-" +
            Math.random().toString(16).replace(".", "") +
            "-" +
            (function () {
              var e,
                t,
                n = $,
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
            ie()
          );
        }),
    ae = function (e) {
      return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog)/i.test(e);
    },
    ce = function (e, t) {
      var n = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
        r = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(e);
      if (null === r || (r && "string" != typeof r[1] && r[1].length)) return "";
      var i = r[1];
      try {
        i = decodeURIComponent(i);
      } catch (e) {
        j("Skipping decoding for malformed query param: " + i);
      }
      return i.replace(/\+/g, " ");
    },
    ue = function (e, t) {
      var n = e.match(new RegExp(t + "=([^&]*)"));
      return n ? n[1] : null;
    },
    le = (function () {
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
                      W(r) && (o = r(i));
                      var a = n.call(t, i);
                      return (!1 !== o && !1 !== a) || (s = !1), s;
                    }
                  };
                })(t, r, a);
              }
            else j("No valid element provided to register_event");
          }
      );
    })(),
    de = {
      campaignParams: function () {
        var e = "utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid".split(" "),
          t = {};
        return (
          B(e, function (e) {
            var n = ce(P.URL, e);
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
        var t = de.searchEngine(e),
          n = "yahoo" != t ? "q" : "p",
          r = {};
        if (null !== t) {
          r.$search_engine = t;
          var i = ce(e, n);
          i.length && (r.ph_keyword = i);
        }
        return r;
      },
      browser: function (e, t, n) {
        return (
          (t = t || ""),
            n || Q(e, " OPR/")
              ? Q(e, "Mini")
              ? "Opera Mini"
              : "Opera"
              : /(BlackBerry|PlayBook|BB10)/i.test(e)
              ? "BlackBerry"
              : Q(e, "IEMobile") || Q(e, "WPDesktop")
                ? "Internet Explorer Mobile"
                : Q(e, "SamsungBrowser/")
                  ? "Samsung Internet"
                  : Q(e, "Edge") || Q(e, "Edg/")
                    ? "Microsoft Edge"
                    : Q(e, "FBIOS")
                      ? "Facebook Mobile"
                      : Q(e, "Chrome")
                        ? "Chrome"
                        : Q(e, "CriOS")
                          ? "Chrome iOS"
                          : Q(e, "UCWEB") || Q(e, "UCBrowser")
                            ? "UC Browser"
                            : Q(e, "FxiOS")
                              ? "Firefox iOS"
                              : Q(t, "Apple")
                                ? Q(e, "Mobile")
                                  ? "Mobile Safari"
                                  : "Safari"
                                : Q(e, "Android")
                                  ? "Android Mobile"
                                  : Q(e, "Konqueror")
                                    ? "Konqueror"
                                    : Q(e, "Firefox")
                                      ? "Firefox"
                                      : Q(e, "MSIE") || Q(e, "Trident/")
                                        ? "Internet Explorer"
                                        : Q(e, "Gecko")
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
        }[de.browser(e, t, n)];
        if (void 0 === r) return null;
        var i = e.match(r);
        return i ? parseFloat(i[i.length - 2]) : null;
      },
      os: function () {
        var e = $;
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
        return U(Y({ $os: de.os(), $browser: de.browser($, F.vendor, window.opera), $device: de.device($), $device_type: de.deviceType($) }), {
          $current_url: window.location.href,
          $host: window.location.host,
          $pathname: window.location.pathname,
          $browser_version: de.browserVersion($, F.vendor, window.opera),
          $screen_height: window.screen.height,
          $screen_width: window.screen.width,
          $viewport_height: window.innerHeight,
          $viewport_width: window.innerWidth,
          $lib: "web",
          $lib_version: S.LIB_VERSION,
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
        return U(Y({ $os: de.os(), $browser: de.browser($, F.vendor, window.opera) }), { $browser_version: de.browserVersion($, F.vendor, window.opera) });
      },
    };
  function pe(e) {
    switch (n(e.className)) {
      case "string":
        return e.className;
      case "object":
        return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
      default:
        return "";
    }
  }
  function fe(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = "";
    return (
      (t && e.childNodes && e.childNodes.length) || (me(e, t) && !we(e) && e.childNodes && e.childNodes.length)
        ? B(e.childNodes, function (e) {
          ge(e) && e.textContent
            ? t
            ? (n = e.textContent)
            : (n += D(e.textContent)
              .split(/(\s+)/)
              .filter(be)
              .join("")
              .replace(/[\r\n]/g, " ")
              .replace(/[ ]+/g, " ")
              .substring(0, 255))
            : t && e.value && (n = e.value);
        })
        : t && (n = e.value || ""),
        D(n)
    );
  }
  function he(e) {
    return !!e && 1 === e.nodeType;
  }
  function _e(e, t) {
    return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
  }
  function ge(e) {
    return !!e && 3 === e.nodeType;
  }
  function ve(e) {
    return !!e && 11 === e.nodeType;
  }
  var ye = ["a", "button", "form", "input", "select", "textarea", "label"];
  function me(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return !0;
    for (var n = e; n.parentNode && !_e(n, "body"); n = n.parentNode) {
      var r = pe(n).split(" ");
      if (Q(r, "ph-sensitive") || Q(r, "ph-no-capture")) return !1;
    }
    if (Q(pe(e).split(" "), "ph-include")) return !0;
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
  function we(e) {
    return !!((_e(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type)) || _e(e, "select") || _e(e, "textarea") || "true" === e.getAttribute("contenteditable"));
  }
  function be(e) {
    if (null === e || J(e)) return !1;
    if ("string" == typeof e) {
      e = D(e);
      if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, ""))) return !1;
      if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1;
    }
    return !0;
  }
  function ke(e) {
    return "string" == typeof e && ("_ngcontent" === e.substring(0, 10) || "_nghost" === e.substring(0, 7));
  }
  // function Se(e, t) {
  //   var n = document.createElement("script");
  //   (n.type = "text/javascript"), (n.src = e), (n.onload = t);
  //   var r,
  //     i = document.getElementsByTagName("script");
  //   i.length > 0 ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(n, i[0]) : document.body.appendChild(n);
  // }
  function Se(e,t) {
    console.log("Script insert, doing nothing as the script is likely already loaded?");
    t();
  }

  var Ie = (function () {
      function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.get_config("rageclick");
        r(this, e), (this.clicks = []), (this.instance = t), (this.enabled = n);
      }
      return (
        o(e, [
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
    Oe = {
      _initializedTokens: [],
      _previousElementSibling: function (e) {
        if (e.previousElementSibling) return e.previousElementSibling;
        var t = e;
        do {
          t = t.previousSibling;
        } while (t && !he(t));
        return t;
      },
      _getPropertiesFromElement: function (e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = e.tagName.toLowerCase(),
          o = { tag_name: i };
        ye.indexOf(i) > -1 && !n && (o.$el_text = fe(e, r));
        var s = pe(e);
        s.length > 0 &&
        (o.classes = s.split(" ").filter(function (e) {
          return "" !== e;
        })),
        r ||
        B(e.attributes, function (n) {
          (we(e) && -1 === ["name", "id", "class"].indexOf(n.name)) || t || !be(n.value) || ke(n.name) || (o["attr__" + n.name] = n.value);
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
          B(document.querySelectorAll(e.css_selector), function (e) {
            var n;
            ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? (n = e.value) : e.textContent && (n = e.textContent), be(n) && t.push(n);
          }),
            t.join(", ")
        );
      },
      _getCustomProperties: function (e) {
        var t = this,
          n = {};
        return (
          B(this._customProperties, function (r) {
            B(r.event_selectors, function (i) {
              B(document.querySelectorAll(i), function (i) {
                Q(e, i) && me(i) && (n[r.name] = t._extractCustomPropertyValue(r));
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
        (ge(i) && (i = i.parentNode || null), "click" === e.type && e instanceof MouseEvent) && (null === (n = this.rageclicks) || void 0 === n || n.click(e.clientX, e.clientY, new Date().getTime()));
        if (
          i &&
          (function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e || _e(e, "html") || !he(e)) return !1;
            for (var r = !1, i = [e], o = !0, s = e; s.parentNode && !_e(s, "body"); )
              if (ve(s.parentNode)) i.push(s.parentNode.host), (s = s.parentNode.host);
              else {
                if (!(o = s.parentNode || !1)) break;
                if ((n && (r = !0), ye.indexOf(o.tagName.toLowerCase()) > -1)) r = !0;
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
                return r ? "click" === t.type : "click" === t.type && (ye.indexOf(u) > -1 || "true" === e.getAttribute("contenteditable"));
            }
          })(i, e, t.get_config("advanced_capture_all_elements"))
        ) {
          for (var o = [i], s = i; s.parentNode && !_e(s, "body"); ) ve(s.parentNode) ? (o.push(s.parentNode.host), (s = s.parentNode.host)) : (o.push(s.parentNode), (s = s.parentNode));
          var a,
            c = [],
            u = !1;
          if (
            (B(o, function (e) {
              var n = me(e, t.get_config("advanced_capture_all_elements"));
              "a" === e.tagName.toLowerCase() && ((a = e.getAttribute("href")), t.get_config("advanced_capture_all_elements") || (a = n && be(a) && a)),
              Q(pe(e).split(" "), "ph-no-capture") && (u = !0),
                c.push(r._getPropertiesFromElement(e, t.get_config("mask_all_element_attributes"), t.get_config("mask_all_text"), t.get_config("advanced_capture_all_elements")));
            }),
            t.get_config("mask_all_text") || (c[0].$el_text = fe(i, t.get_config("advanced_capture_all_elements"))),
            a && (c[0].attr__href = a),
              u)
          )
            return !1;
          var l = U(this._getDefaultProperties(e.type), { $elements: c }, this._getCustomProperties(o));
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
        le(document, "submit", n, !1, !0), le(document, "change", n, !1, !0), le(document, "click", n, !1, !0);
      },
      _customProperties: [],
      rageclicks: null,
      init: function (e) {
        this.rageclicks = new Ie(e);
      },
      afterDecideResponse: function (e, t) {
        var n = t.get_config("token");
        this._initializedTokens.indexOf(n) > -1
          ? q('autocapture already initialized for token "' + n + '"')
          : (this._initializedTokens.push(n),
            e && e.config && e.config.enable_collect_everything && t.get_config("autocapture")
              ? (e.custom_properties && (this._customProperties = e.custom_properties), this._addDomEventHandlers(t))
              : (t.__autocapture_enabled = !1));
      },
      enabledForProject: function (e, t, n) {
        if (!e) return !0;
        (t = J(t) ? 10 : t), (n = J(n) ? 10 : n);
        for (var r = 0, i = 0; i < e.length; i++) r += e.charCodeAt(i);
        return r % t < n;
      },
      isBrowserSupported: function () {
        return W(document.querySelectorAll);
      },
    };
  !(function (e) {
    for (var t in e) "function" == typeof e[t] && (e[t] = e[t].bind(e));
  })(Oe),
    (function (e) {
      for (var t in e) "function" == typeof e[t] && (e[t] = X(e[t]));
    })(Oe);
  var xe = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
    Ae = {
      is_supported: function () {
        return !0;
      },
      error: function (e) {
        j("cookieStore error: " + e);
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
          t = JSON.parse(Ae.get(e)) || {};
        } catch (e) {}
        return t;
      },
      set: function (e, t, n, r, i) {
        try {
          var o = "",
            s = "",
            a = "";
          if (r) {
            var c = document.location.hostname.match(xe),
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
          Ae.set(e, "", -1, t);
        } catch (e) {
          return;
        }
      },
    },
    Ee = null,
    Fe = {
      is_supported: function () {
        if (null !== Ee) return Ee;
        var e = !0;
        if (window)
          try {
            var t = "__mplssupport__";
            Fe.set(t, "xyz"), '"xyz"' !== Fe.get(t) && (e = !1), Fe.remove(t);
          } catch (t) {
            e = !1;
          }
        else e = !1;
        return e || j("localStorage unsupported; falling back to cookie store"), (Ee = e), e;
      },
      error: function (e) {
        j("localStorage error: " + e);
      },
      get: function (e) {
        try {
          return window.localStorage.getItem(e);
        } catch (e) {
          Fe.error(e);
        }
        return null;
      },
      parse: function (e) {
        try {
          return JSON.parse(Fe.get(e)) || {};
        } catch (e) {}
        return null;
      },
      set: function (e, t) {
        try {
          window.localStorage.setItem(e, JSON.stringify(t));
        } catch (e) {
          Fe.error(e);
        }
      },
      remove: function (e) {
        try {
          window.localStorage.removeItem(e);
        } catch (e) {
          Fe.error(e);
        }
      },
    },
    Pe = t(
      t({}, Fe),
      {},
      {
        parse: function (e) {
          try {
            var t = {};
            try {
              (t = Ae.parse(e) || {}).distinct_id && Ae.set(e, { distinct_id: t.distinct_id });
            } catch (e) {}
            var n = U(t, JSON.parse(Fe.get(e) || "{}"));
            return Fe.set(e, n), n;
          } catch (e) {}
          return null;
        },
        set: function (e, t, n, r, i) {
          try {
            Fe.set(e, t), t.distinct_id && Ae.set(e, { distinct_id: t.distinct_id }, n, r, i);
          } catch (e) {
            Fe.error(e);
          }
        },
        remove: function (e, t) {
          try {
            window.localStorage.removeItem(e), Ae.remove(e, t);
          } catch (e) {
            Fe.error(e);
          }
        },
      }
    ),
    $e = {},
    Ce = {
      is_supported: function () {
        return !0;
      },
      error: function (e) {
        j("memoryStorage error: " + e);
      },
      get: function (e) {
        return $e[e] || null;
      },
      parse: function (e) {
        return $e[e] || null;
      },
      set: function (e, t) {
        $e[e] = t;
      },
      remove: function (e) {
        delete $e[e];
      },
    },
    Te = null,
    Me = {
      is_supported: function () {
        if (null !== Te) return Te;
        if (((Te = !0), window))
          try {
            var e = "__support__";
            Me.set(e, "xyz"), '"xyz"' !== Me.get(e) && (Te = !1), Me.remove(e);
          } catch (e) {
            Te = !1;
          }
        else Te = !1;
        return Te;
      },
      error: function (e) {
        S.DEBUG && j("sessionStorage error: ", e);
      },
      get: function (e) {
        try {
          return window.sessionStorage.getItem(e);
        } catch (e) {
          Me.error(e);
        }
        return null;
      },
      parse: function (e) {
        try {
          return JSON.parse(Me.get(e)) || null;
        } catch (e) {}
        return null;
      },
      set: function (e, t) {
        try {
          window.sessionStorage.setItem(e, JSON.stringify(t));
        } catch (e) {
          Me.error(e);
        }
      },
      remove: function (e) {
        try {
          window.sessionStorage.removeItem(e);
        } catch (e) {
          Me.error(e);
        }
      },
    };
  function Re(e, t) {
    He(!0, e, t);
  }
  function qe(e, t) {
    He(!1, e, t);
  }
  function je(e, t) {
    return "1" === Ue(e, t);
  }
  function Ne(e, t) {
    return (
      !!(function (e) {
        if (e && e.respectDnt) {
          var t = (e && e.window) || E,
            n = t.navigator || {},
            r = !1;
          return (
            B([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function (e) {
              Q([!0, 1, "1", "yes"], e) && (r = !0);
            }),
              r
          );
        }
        return !1;
      })(t) || "0" === Ue(e, t)
    );
  }
  function De(e, t) {
    Be((t = t || {})).remove(Le(e, t), !!t.crossSubdomainCookie);
  }
  function Be(e) {
    return "localStorage" === (e = e || {}).persistenceType ? Fe : "localStorage+cookie" === e.persistenceType ? Pe : Ae;
  }
  function Le(e, t) {
    return ((t = t || {}).persistencePrefix || "__ph_opt_in_out_") + e;
  }
  function Ue(e, t) {
    return Be(t).get(Le(e, t));
  }
  function He(e, t, n) {
    var r;
    z(t) && t.length
      ? (Be((n = n || {})).set(Le(t, n), e ? 1 : 0, ((r = n.cookieExpiration), "[object Number]" == x.call(r) ? n.cookieExpiration : null), n.crossSubdomainCookie, n.secureCookie),
      n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, { send_instantly: !0 }))
      : console.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
  }
  function We(e, t) {
    var n = !1;
    try {
      var r = e.get_config("token"),
        i = e.get_config("respect_dnt"),
        o = e.get_config("opt_out_capturing_persistence_type"),
        s = e.get_config("opt_out_capturing_cookie_prefix") || void 0,
        a = e.get_config("window");
      r && (n = Ne(r, { respectDnt: i, persistenceType: o, persistencePrefix: s, window: a }));
    } catch (e) {
      t || console.error("Unexpected error when checking capturing opt-out status: " + e);
    }
    return n;
  }
  function Qe(e, t, n) {
    return function () {
      for (var r = We(e, n), i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
      if (!r) return t.apply(this, o);
      var a = o[o.length - 1];
      "function" == typeof a && a(0);
    };
  }
  var Ge = "$set",
    Je = (function () {
      function e(t) {
        var n = this;
        r(this, e),
          (this._posthog = t),
          (this.set = Qe(t, function (e, t, r) {
            var i = n.set_action(e, t);
            return (
              G(e) && (r = t),
              n._get_config("save_referrer") && n._posthog.persistence.update_referrer_info(document.referrer),
                (i.$set = U({}, de.people_properties(), n._posthog.persistence.get_referrer_info(), i.$set)),
                n._send_request(i, r)
            );
          })),
          (this.set_once = Qe(t, function (e, t, r) {
            var i = n.set_once_action(e, t);
            return G(e) && (r = t), n._send_request(i, r);
          }));
      }
      return (
        o(e, [
          {
            key: "toString",
            value: function () {
              return this._posthog.toString() + ".people";
            },
          },
          {
            key: "_send_request",
            value: function (e, t) {
              (e.$token = this._get_config("token")), (e.$distinct_id = this._posthog.get_distinct_id());
              var n = this._posthog.get_property("$device_id"),
                r = this._posthog.get_property("$user_id"),
                i = this._posthog.get_property("$had_persisted_distinct_id");
              n && (e.$device_id = n), r && (e.$user_id = r), i && (e.$had_persisted_distinct_id = i);
              var o = V(e),
                s = ne(o, this._get_config("properties_string_max_length")),
                a = re(JSON.stringify(o));
              return this._posthog._send_request(this._get_config("api_host") + "/engage/", { data: a }, {}, this._posthog._prepare_callback(t, s)), s;
            },
          },
          {
            key: "_get_config",
            value: function (e) {
              return this._posthog.get_config(e);
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
              return this.apiActionParser(Ge, e, t);
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
                G(t)
                  ? B(t, function (e, t) {
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
    ze = (function () {
      function e(t) {
        r(this, e), (this.instance = t), (this._override_warning = !1), (this.flagCallReported = {}), (this.featureFlagEventHandlers = []), (this.reloadFeatureFlagsQueued = !1), (this.reloadFeatureFlagsInAction = !1);
      }
      return (
        o(e, [
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
              for (var n = U({}, e), r = Object.keys(t), i = 0; i < r.length; i++) !1 === t[r[i]] ? delete n[r[i]] : (n[r[i]] = t[r[i]]);
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
                n = re(JSON.stringify({ token: t, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id }));
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
    Ve = "$people_distinct_id",
    Ze = "__alias",
    Xe = "__timers",
    Ye = "$session_recording_enabled_server_side",
    Ke = "$sesid",
    et = "$enabled_feature_flags",
    tt = ["__mps", "__mpso", "__mpus", "__mpa", "__mpap", "__mpr", "__mpu", Ve, Ze, "__cmpns", Xe, Ye, Ke, et],
    nt = (function () {
      function e(t) {
        r(this, e);
        var n = "";
        t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
          (this.props = {}),
          (this.campaign_params_saved = !1),
          t.persistence_name ? (this.name = "ph_" + t.persistence_name) : (this.name = "ph_" + n + "_posthog");
        var i = t.persistence.toLowerCase();
        "cookie" !== i && -1 === i.indexOf("localstorage") && "memory" !== i && (N("Unknown persistence type " + i + "; falling back to cookie"), (i = t.persistence = "cookie")),
          "localstorage" === i && Fe.is_supported() ? (this.storage = Fe) : "localstorage+cookie" === i && Pe.is_supported() ? (this.storage = Pe) : (this.storage = "memory" === i ? Ce : Ae),
          this.load(),
          this.update_config(t),
          this.save();
      }
      return (
        o(e, [
          {
            key: "properties",
            value: function () {
              var e = {};
              return (
                B(this.props, function (t, r) {
                  if (r === et && "object" === n(t)) for (var i = Object.keys(t), o = 0; o < i.length; o++) e["$feature/".concat(i[o])] = t[i[o]];
                  else
                    (a = r),
                      (c = !1),
                    (null === (s = tt)
                      ? c
                      : T && s.indexOf === T
                        ? -1 != s.indexOf(a)
                        : (B(s, function (e) {
                          if (c || (c = e === a)) return R;
                        }),
                          c)) || (e[r] = t);
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
                e && (this.props = U({}, e));
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
                !!G(e) &&
                (void 0 === t && (t = "None"),
                  (this.expire_days = void 0 === n ? this.default_expiry : n),
                  B(e, function (e, n) {
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
              return !!G(e) && ((this.expire_days = void 0 === t ? this.default_expiry : t), U(this.props, e), this.save(), !0);
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
              this.campaign_params_saved || (this.register(de.campaignParams()), (this.campaign_params_saved = !0));
            },
          },
          {
            key: "update_search_keyword",
            value: function (e) {
              this.register(de.searchInfo(e));
            },
          },
          {
            key: "update_referrer_info",
            value: function (e) {
              this.register({ $referrer: e || this.props.$referrer || "$direct", $referring_domain: de.referringDomain(e) || this.props.$referring_domain || "$direct" });
            },
          },
          {
            key: "get_referrer_info",
            value: function () {
              return Y({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
            },
          },
          {
            key: "safe_merge",
            value: function (e) {
              return (
                B(this.props, function (t, n) {
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
              return J(t) || (delete this.props.__timers[e], this.save()), t;
            },
          },
        ]),
          e
      );
    })();
  var rt = 2,
    it = 4,
    ot = 6,
    st = (function () {
      function e(t) {
        r(this, e),
          (this.instance = t),
          (this.captureStarted = !1),
          (this.snapshots = []),
          (this.emit = !1),
          (this.endpoint = "/e"),
          (this.stopRrweb = void 0),
          (this.windowId = null),
          (this.sessionId = null),
          (this.receivedDecide = !1);
      }
      return (
        o(e, [
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
              var e = !!this.instance.get_property(Ye),
                t = !this.instance.get_config("disable_session_recording");
              return e && t;
            },
          },
          {
            key: "afterDecideResponse",
            value: function (e) {
              var t, n;
              ((this.receivedDecide = !0), this.instance.persistence && this.instance.persistence.register(s({}, Ye, !!e.sessionRecording)), null !== (t = e.sessionRecording) && void 0 !== t && t.endpoint) &&
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
          // {
          //   key: "_startCapture",
          //   value: function () {
          //     void 0 !== Object.assign && (this.captureStarted || this.instance.get_config("disable_session_recording") || (this.captureStarted = !0));
          //   },
          // },
          {
            key: "_startCapture",
            value: function () {
              void 0 !== Object.assign &&
              (this.captureStarted ||
                this.instance.get_config("disable_session_recording") ||
                ((this.captureStarted = !0), Se(this.instance.get_config("api_host") + "/static/recorder.js?v=" + S.LIB_VERSION, this._onScriptLoaded.bind(this))));
              // console.log("startcapture: ", r);
              // return r;
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
              (this.windowId === o && this.sessionId === s) || -1 !== [rt, it].indexOf(e.type) || null === (n = this.rrwebRecord) || void 0 === n || n.takeFullSnapshot();
              (this.windowId = o), (this.sessionId = s);
            },
          },
          {
            key: "_onScriptLoaded",
            value: function () {
              var e,
                r = this,
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
                var c = p(a[s], 2),
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
                          if (e && "object" === n(e) && e.type === ot && "object" === n(e.data) && "rrweb/console@1" === e.data.plugin) {
                            e.data.payload.payload.length > 10 && ((e.data.payload.payload = e.data.payload.payload.slice(0, 10)), e.data.payload.payload.push("...[truncated]"));
                            for (var t = [], r = 0; r < e.data.payload.payload.length; r++)
                              e.data.payload.payload[r] && e.data.payload.payload[r].length > 2e3 ? t.push(e.data.payload.payload[r].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[r]);
                            return (e.data.payload.payload = t), e;
                          }
                          return e;
                        })(
                          (function (e) {
                            if (e && "object" === n(e)) {
                              var t = JSON.stringify(e);
                              if (t.length > 5e6) {
                                var r,
                                  i = g(t.matchAll(/data:([\w\/\-\.]+);(\w+),([^)"]*)/gim));
                                try {
                                  for (i.s(); !(r = i.n()).done; ) {
                                    var o = r.value;
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
                          r._updateWindowAndSessionIds(e);
                        var t = { $snapshot_data: e, $session_id: r.sessionId, $window_id: r.windowId };
                        r.instance._captureMetrics.incr("rrweb-record"), r.instance._captureMetrics.incr("rrweb-record-".concat(e.type)), r.emit ? r._captureSnapshot(t) : r.snapshots.push(t);
                      },
                      plugins: window.rrwebConsoleRecord && this.instance.get_config("enable_recording_console_log") ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : [],
                    },
                    i
                  )
                  )),
                this.instance._addCaptureHook(function (e) {
                  var t;
                  "$pageview" === e && (null === (t = r.rrwebRecord) || void 0 === t || t.addCustomEvent("$pageview", { href: window.location.href }));
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
                _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === rt },
              });
            },
          },
        ]),
          e
      );
    })(),
    at = (function () {
      function e(t) {
        r(this, e), (this.instance = t), (this.instance.decideEndpointWasHit = !1);
      }
      return (
        o(e, [
          {
            key: "call",
            value: function () {
              var e = this,
                t = re(JSON.stringify({ token: this.instance.get_config("token"), distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups() }));
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
                    Oe.afterDecideResponse(e, this.instance),
                    this.instance.featureFlags.receivedFeatureFlags(e),
                    e.supportedCompression)
                ) {
                  var r,
                    i = {},
                    o = g(e.supportedCompression);
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
    ct = (function () {
      function e(t) {
        r(this, e), (this.instance = t);
      }
      return (
        o(e, [
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
                  i = ue(e.hash, "__posthog") || ue(e.hash, "state"),
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
                    Se(i, function () {
                      window.ph_load_editor(e, n.instance);
                    }),
                    le(window, "turbolinks:load", function () {
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
    ut = (function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
        r(this, e), (this.isPolling = !0), (this._event_queue = []), (this._empty_queue_count = 0), (this._poller = void 0), (this._pollInterval = t);
      }
      return (
        o(e, [
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
    lt = (function (e) {
      a(i, e);
      var n = d(i);
      function i(e, t) {
        var o,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
        return r(this, i), ((o = n.call(this, s)).handlePollRequest = t), (o.captureMetrics = e), o;
      }
      return (
        o(i, [
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
                        B(o, function (t, n) {
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
                B(this._event_queue, function (t) {
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
          i
      );
    })(ut),
    dt = (function () {
      function e(t) {
        r(this, e), (this.enabled = t), (this.metrics = {});
      }
      return (
        o(e, [
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
    pt = Uint8Array,
    ft = Uint16Array,
    ht = Uint32Array,
    _t = new pt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    gt = new pt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
    vt = new pt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    yt = function (e, t) {
      for (var n = new ft(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
      var i = new ht(n[30]);
      for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
      return [n, i];
    },
    mt = yt(_t, 2),
    wt = mt[0],
    bt = mt[1];
  (wt[28] = 258), (bt[258] = 28);
  for (var kt = yt(gt, 0)[1], St = new ft(32768), It = 0; It < 32768; ++It) {
    var Ot = ((43690 & It) >>> 1) | ((21845 & It) << 1);
    (Ot = ((61680 & (Ot = ((52428 & Ot) >>> 2) | ((13107 & Ot) << 2))) >>> 4) | ((3855 & Ot) << 4)), (St[It] = (((65280 & Ot) >>> 8) | ((255 & Ot) << 8)) >>> 1);
  }
  var xt = function (e, t, n) {
      for (var r = e.length, i = 0, o = new ft(t); i < r; ++i) ++o[e[i] - 1];
      var s,
        a = new ft(t);
      for (i = 0; i < t; ++i) a[i] = (a[i - 1] + o[i - 1]) << 1;
      if (n) {
        s = new ft(1 << t);
        var c = 15 - t;
        for (i = 0; i < r; ++i) if (e[i]) for (var u = (i << 4) | e[i], l = t - e[i], d = a[e[i] - 1]++ << l, p = d | ((1 << l) - 1); d <= p; ++d) s[St[d] >>> c] = u;
      } else for (s = new ft(r), i = 0; i < r; ++i) s[i] = St[a[e[i] - 1]++] >>> (15 - e[i]);
      return s;
    },
    At = new pt(288);
  for (It = 0; It < 144; ++It) At[It] = 8;
  for (It = 144; It < 256; ++It) At[It] = 9;
  for (It = 256; It < 280; ++It) At[It] = 7;
  for (It = 280; It < 288; ++It) At[It] = 8;
  var Et = new pt(32);
  for (It = 0; It < 32; ++It) Et[It] = 5;
  var Ft,
    Pt = xt(At, 9, 0),
    $t = xt(Et, 5, 0),
    Ct = function (e) {
      return ((e / 8) >> 0) + (7 & e && 1);
    },
    Tt = function (e, t, n) {
      (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
      var r = new (e instanceof ft ? ft : e instanceof ht ? ht : pt)(n - t);
      return r.set(e.subarray(t, n)), r;
    },
    Mt = function (e, t, n) {
      n <<= 7 & t;
      var r = (t / 8) >> 0;
      (e[r] |= n), (e[r + 1] |= n >>> 8);
    },
    Rt = function (e, t, n) {
      n <<= 7 & t;
      var r = (t / 8) >> 0;
      (e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16);
    },
    qt = function (e, t) {
      for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
      var i = n.length,
        o = n.slice();
      if (!i) return [new pt(0), 0];
      if (1 == i) {
        var s = new pt(n[0].s + 1);
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
      var f = new ft(p + 1),
        h = jt(n[l - 1], f, 0);
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
      return [new pt(f), h];
    },
    jt = function e(t, n, r) {
      return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r);
    },
    Nt = function (e) {
      for (var t = e.length; t && !e[--t]; );
      for (
        var n = new ft(++t),
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
    Dt = function (e, t) {
      for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
      return n;
    },
    Bt = function (e, t, n) {
      var r = n.length,
        i = Ct(t + 2);
      (e[i] = 255 & r), (e[i + 1] = r >>> 8), (e[i + 2] = 255 ^ e[i]), (e[i + 3] = 255 ^ e[i + 1]);
      for (var o = 0; o < r; ++o) e[i + o + 4] = n[o];
      return 8 * (i + 4 + r);
    },
    Lt = function (e, t, n, r, i, o, s, a, c, u, l) {
      Mt(t, l++, n), ++i[256];
      for (var d = qt(i, 15), p = d[0], f = d[1], h = qt(o, 15), _ = h[0], g = h[1], v = Nt(p), y = v[0], m = v[1], w = Nt(_), b = w[0], k = w[1], S = new ft(19), I = 0; I < y.length; ++I) S[31 & y[I]]++;
      for (I = 0; I < b.length; ++I) S[31 & b[I]]++;
      for (var O = qt(S, 7), x = O[0], A = O[1], E = 19; E > 4 && !x[vt[E - 1]]; --E);
      var F,
        P,
        $,
        C,
        T = (u + 5) << 3,
        M = Dt(i, At) + Dt(o, Et) + s,
        R = Dt(i, p) + Dt(o, _) + s + 14 + 3 * E + Dt(S, x) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
      if (T <= M && T <= R) return Bt(t, l, e.subarray(c, c + u));
      if ((Mt(t, l, 1 + (R < M)), (l += 2), R < M)) {
        (F = xt(p, f, 0)), (P = p), ($ = xt(_, g, 0)), (C = _);
        var q = xt(x, A, 0);
        Mt(t, l, m - 257), Mt(t, l + 5, k - 1), Mt(t, l + 10, E - 4), (l += 14);
        for (I = 0; I < E; ++I) Mt(t, l + 3 * I, x[vt[I]]);
        l += 3 * E;
        for (var j = [y, b], N = 0; N < 2; ++N) {
          var D = j[N];
          for (I = 0; I < D.length; ++I) {
            var B = 31 & D[I];
            Mt(t, l, q[B]), (l += x[B]), B > 15 && (Mt(t, l, (D[I] >>> 5) & 127), (l += D[I] >>> 12));
          }
        }
      } else (F = Pt), (P = At), ($ = $t), (C = Et);
      for (I = 0; I < a; ++I)
        if (r[I] > 255) {
          B = (r[I] >>> 18) & 31;
          Rt(t, l, F[B + 257]), (l += P[B + 257]), B > 7 && (Mt(t, l, (r[I] >>> 23) & 31), (l += _t[B]));
          var L = 31 & r[I];
          Rt(t, l, $[L]), (l += C[L]), L > 3 && (Rt(t, l, (r[I] >>> 5) & 8191), (l += gt[L]));
        } else Rt(t, l, F[r[I]]), (l += P[r[I]]);
      return Rt(t, l, F[256]), l + P[256];
    },
    Ut = new ht([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    Ht = new pt(0),
    Wt = (function () {
      for (var e = new ht(256), t = 0; t < 256; ++t) {
        for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1);
        e[t] = n;
      }
      return e;
    })(),
    Qt = function (e, t, n, r, i) {
      return (function (e, t, n, r, i, o) {
        var s = e.length,
          a = new pt(r + s + 5 * (1 + Math.floor(s / 7e3)) + i),
          c = a.subarray(r, a.length - i),
          u = 0;
        if (!t || s < 8)
          for (var l = 0; l <= s; l += 65535) {
            var d = l + 65535;
            d < s ? (u = Bt(c, u, e.subarray(l, d))) : ((c[l] = o), (u = Bt(c, u, e.subarray(l, s))));
          }
        else {
          for (
            var p = Ut[t - 1],
              f = p >>> 13,
              h = 8191 & p,
              _ = (1 << n) - 1,
              g = new ft(32768),
              v = new ft(_ + 1),
              y = Math.ceil(n / 3),
              m = 2 * y,
              w = function (t) {
                return (e[t] ^ (e[t + 1] << y) ^ (e[t + 2] << m)) & _;
              },
              b = new ht(25e3),
              k = new ft(288),
              S = new ft(32),
              I = 0,
              O = 0,
              x = ((l = 0), 0),
              A = 0,
              E = 0;
            l < s;
            ++l
          ) {
            var F = w(l),
              P = 32767 & l,
              $ = v[F];
            if (((g[P] = $), (v[F] = P), A <= l)) {
              var C = s - l;
              if ((I > 7e3 || x > 24576) && C > 423) {
                (u = Lt(e, c, 0, b, k, S, O, x, E, l - E, u)), (x = I = O = 0), (E = l);
                for (var T = 0; T < 286; ++T) k[T] = 0;
                for (T = 0; T < 30; ++T) S[T] = 0;
              }
              var M = 2,
                R = 0,
                q = h,
                j = (P - $) & 32767;
              if (C > 2 && F == w(l - j))
                for (var N = Math.min(f, C) - 1, D = Math.min(32767, l), B = Math.min(258, C); j <= D && --q && P != $; ) {
                  if (e[l + M] == e[l + M - j]) {
                    for (var L = 0; L < B && e[l + L] == e[l + L - j]; ++L);
                    if (L > M) {
                      if (((M = L), (R = j), L > N)) break;
                      var U = Math.min(j, L - 2),
                        H = 0;
                      for (T = 0; T < U; ++T) {
                        var W = (l - j + T + 32768) & 32767,
                          Q = (W - g[W] + 32768) & 32767;
                        Q > H && ((H = Q), ($ = W));
                      }
                    }
                  }
                  j += ((P = $) - ($ = g[P]) + 32768) & 32767;
                }
              if (R) {
                b[x++] = 268435456 | (bt[M] << 18) | kt[R];
                var G = 31 & bt[M],
                  J = 31 & kt[R];
                (O += _t[G] + gt[J]), ++k[257 + G], ++S[J], (A = l + M), ++I;
              } else (b[x++] = e[l]), ++k[e[l]];
            }
          }
          (u = Lt(e, c, o, b, k, S, O, x, E, l - E, u)), o || (u = Bt(c, u, Ht));
        }
        return Tt(a, 0, r + Ct(u) + i);
      })(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !i);
    },
    Gt = function (e, t, n) {
      for (; n; ++t) (e[t] = n), (n >>>= 8);
    };
  function Jt(e, t) {
    void 0 === t && (t = {});
    var n = (function () {
        var e = 4294967295;
        return {
          p: function (t) {
            for (var n = e, r = 0; r < t.length; ++r) n = Wt[(255 & n) ^ t[r]] ^ (n >>> 8);
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
      o = Qt(e, t, 10 + (((i = t).filename && i.filename.length + 1) || 0), 8),
      s = o.length;
    return (
      (function (e, t) {
        var n = t.filename;
        if (((e[0] = 31), (e[1] = 139), (e[2] = 8), (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0), (e[9] = 3), 0 != t.mtime && Gt(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n)) {
          e[3] = 8;
          for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r);
        }
      })(o, t),
        Gt(o, s - 8, n.d()),
        Gt(o, s - 4, r),
        o
    );
  }
  function zt(e, t) {
    var n = e.length;
    if (!t && "undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
    for (
      var r = new pt(e.length + (e.length >>> 1)),
        i = 0,
        o = function (e) {
          r[i++] = e;
        },
        s = 0;
      s < n;
      ++s
    ) {
      if (i + 5 > r.length) {
        var a = new pt(i + 8 + ((n - s) << 1));
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
    return Tt(r, 0, i);
  }
  !(function (e) {
    (e.GZipJS = "gzip-js"), (e.LZ64 = "lz64"), (e.Base64 = "base64");
  })(Ft || (Ft = {}));
  var Vt = function (e, t, n) {
      var r = t || {};
      console.log("e: ", e);
      console.log("t: ", t);
      console.log("n: ", n);
      (r.ip = n.ip ? 1 : 0), (r._ = new Date().getTime().toString()), (r.ver = S.LIB_VERSION), (r.projectId = n.projectId);
      var i = e.split("?");
      if (i.length > 1) {
        var o,
          s = g(i[1].split("&"));
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
            B(e, function (e, r) {
              (t = encodeURIComponent(e.toString())), (n = encodeURIComponent(r)), (i[i.length] = n + "=" + t);
            }),
              i.join(r)
          );
        })(r)
      );
    },
    Zt = function e(t, n) {
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
    Xt = function (e) {
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
      var d = Zt(n, i);
      o.incr("_send_request"),
        o.incr("_send_request_inflight"),
        B(r, function (e, t) {
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
                  return void j(e);
                }
                s(e);
              }
            } else "function" == typeof u && u(l), [401, 403, 404, 500].indexOf(l.status) < 0 && c.enqueue({ url: t, data: n, options: i, headers: r, retriesPerformedSoFar: (a || 0) + 1, callback: s }), s && s({ status: 0 });
        }),
        l.send(d);
    },
    Yt = (function (e) {
      a(i, e);
      var n = d(i);
      function i(e, t) {
        var o;
        return (
          r(this, i),
            ((o = n.call(this)).captureMetrics = e),
            (o.isPolling = !1),
            (o.queue = []),
            (o.areWeOnline = !0),
            (o.onXHRError = t),
          "onLine" in window.navigator &&
          ((o.areWeOnline = window.navigator.onLine),
            window.addEventListener("online", function () {
              o._handleWeAreNowOnline();
            }),
            window.addEventListener("offline", function () {
              o.areWeOnline = !1;
            })),
            o
        );
      }
      return (
        o(i, [
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
                  r = g(t);
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
                n = g(this.queue);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value.requestData,
                    i = r.url,
                    o = r.data,
                    s = r.options;
                  try {
                    window.navigator.sendBeacon(i, Zt(o, t(t({}, s), {}, { sendBeacon: !0 })));
                  } catch (e) {
                    S.DEBUG && console.error(e);
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
              Xt({ url: t, data: n || {}, options: r || {}, headers: i || {}, retriesPerformedSoFar: s || 0, callback: o, captureMetrics: this.captureMetrics, retryQueue: this, onXHRError: this.onXHRError });
            },
          },
          {
            key: "_handleWeAreNowOnline",
            value: function () {
              (this.areWeOnline = !0), this.flush();
            },
          },
        ]),
          i
      );
    })(ut),
    Kt = 18e5,
    en = 864e5,
    tn = (function () {
      function e(t, n) {
        r(this, e),
          (this.persistence = n),
          (this._windowId = void 0),
          (this._sessionId = void 0),
          (this._sessionStartTimestamp = null),
          (this._sessionActivityTimestamp = null),
          t.persistence_name ? (this.window_id_storage_key = "ph_" + t.persistence_name + "_window_id") : (this.window_id_storage_key = "ph_" + t.token + "_window_id");
      }
      return (
        o(e, [
          {
            key: "_setWindowId",
            value: function (e) {
              e !== this._windowId && ((this._windowId = e), !this.persistence.disabled && Me.is_supported() && Me.set(this.window_id_storage_key, e));
            },
          },
          {
            key: "_getWindowId",
            value: function () {
              return this._windowId ? this._windowId : !this.persistence.disabled && Me.is_supported() ? Me.parse(this.window_id_storage_key) : null;
            },
          },
          {
            key: "_setSessionId",
            value: function (e, t, n) {
              (e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp) ||
              ((this._sessionStartTimestamp = n), (this._sessionActivityTimestamp = t), (this._sessionId = e), this.persistence.register(s({}, Ke, [t, e, n])));
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
                i = p(r, 3),
                o = i[0],
                s = i[1],
                a = i[2],
                c = this._getWindowId(),
                u = a && a > 0 && Math.abs(n - a) > en;
              !s || (!e && Math.abs(n - o) > Kt) || u ? ((s = se()), (c = se()), (a = n)) : c || (c = se());
              var l = 0 === o || !e || u ? n : o,
                d = 0 === a ? new Date().getTime() : a;
              return this._setWindowId(c), this._setSessionId(s, l, d), { sessionId: s, windowId: c };
            },
          },
        ]),
          e
      );
    })();
  function nn(e) {
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
  function rn(e) {
    try {
      return nn(JSON.parse(JSON.stringify(E.performance.getEntriesByType(e))));
    } catch (t) {
      return S.DEBUG && console.warn("not able to capture performance data (" + e + ") - " + t), [];
    }
  }
  var on,
    sn,
    an,
    cn = o(function e(t, n, i, o) {
      r(this, e),
        (this.name = "posthog-js"),
        (this.setupOnce = function (e) {
          e(function (e) {
            if ("error" !== e.level || !t.__loaded) return e;
            e.tags || (e.tags = {}),
              (e.tags["PostHog Person URL"] = t.config.api_host + "/person/" + t.get_distinct_id()),
            t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.config.api_host + "/recordings/#sessionRecordingId=" + t.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId);
            var r = { $sentry_event_id: e.event_id, $sentry_exception: e.exception };
            return n && i && (r.$sentry_url = (o || "https://sentry.io/organizations/") + n + "/issues/?project=" + i + "&query=" + e.event_id), t.capture("$exception", r), e;
          });
        });
    });
  !(function (e) {
    (e[(e.INIT_MODULE = 0)] = "INIT_MODULE"), (e[(e.INIT_SNIPPET = 1)] = "INIT_SNIPPET");
  })(on || (on = {}));
  var un = function () {},
    ln = {},
    dn = "posthog",
    pn = E.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
    fn = !pn && -1 === $.indexOf("MSIE") && -1 === $.indexOf("Mozilla"),
    hn = function () {
      var e, t, n;
      return {
        api_host: "https://app.posthog.com",
        api_method: "POST",
        api_transport: "XHR",
        token: "",
        autocapture: !0,
        rageclick: !1,
        cross_subdomain_cookie: -1 === (null == P || null === (e = P.location) || void 0 === e || null === (t = e.hostname) || void 0 === t ? void 0 : t.indexOf("herokuapp.com")),
        persistence: "cookie",
        persistence_name: "",
        cookie_name: "",
        loaded: un,
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
        secure_cookie: "https:" === (null == E || null === (n = E.location) || void 0 === n ? void 0 : n.protocol),
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
        _onCapture: un,
        _capture_metrics: !1,
        _capture_performance: !1,
        name: "posthog",
        callback_fn: "posthog._jsc",
      };
    },
    _n = function (e, t, n) {
      var r,
        i = n !== dn && an ? (n ? an[n] : void 0) : an;
      if (i && sn === on.INIT_MODULE) r = i;
      else {
        if (i && !H(i)) return void console.error("You have already initialized " + n);
        r = new gn();
      }
      if ((r._init(e, t, n), r.toolbar.maybeLoadEditor(), (r.sessionRecording = new st(r)), r.sessionRecording.startRecordingIfEnabled(), (r.__autocapture_enabled = r.get_config("autocapture")), r.get_config("autocapture"))) {
        Oe.enabledForProject(r.get_config("token"), 100, 100)
          ? Oe.isBrowserSupported()
          ? Oe.init(r)
          : ((r.__autocapture_enabled = !1), q("Disabling Automatic Event Collection because this browser is not supported"))
          : ((r.__autocapture_enabled = !1), q("Not in active bucket: disabling Automatic Event Collection."));
      }
      return (S.DEBUG = S.DEBUG || r.get_config("debug")), void 0 !== i && H(i) && (r._execute_array.call(r.people, i.people), r._execute_array(i)), r;
    },
    gn = (function () {
      function e() {
        r(this, e),
          (this.config = hn()),
          (this.compression = {}),
          (this.decideEndpointWasHit = !1),
          (this.SentryIntegration = cn),
          (this.__captureHooks = []),
          (this.__request_queue = []),
          (this.__loaded = !1),
          (this.__autocapture_enabled = void 0),
          (this._jsc = function () {}),
          (this.people = new Je(this)),
          (this.featureFlags = new ze(this)),
          (this.feature_flags = this.featureFlags),
          (this.toolbar = new ct(this)),
          (this.advanced_capture_all_elements = !1),
          (this._captureMetrics = void 0),
          (this._requestQueue = void 0),
          (this._retryQueue = void 0),
          (this.persistence = void 0),
          (this.sessionManager = void 0);
      }
      return (
        o(e, [
          {
            key: "init",
            value: function (e, t, n) {
              if (J(n)) console.error("You must name your new library: init(token, config, name)");
              else {
                if (n !== dn) {
                  var r = _n(e, t, n);
                  return (an[n] = r), r._loaded(), r;
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
                  this.set_config(U({}, hn(), t, { name: n, token: e, callback_fn: (n === dn ? n : "posthog." + n) + "._jsc" })),
                  (this._jsc = function () {}),
                  (this._captureMetrics = new dt(this.get_config("_capture_metrics"))),
                  (this._requestQueue = new lt(this._captureMetrics, this._handle_queued_event.bind(this))),
                  (this._retryQueue = new Yt(this._captureMetrics, this.get_config("on_xhr_error"))),
                  (this.__captureHooks = []),
                  (this.__request_queue = []),
                  (this.persistence = new nt(this.config)),
                  (this.sessionManager = new tn(this.config, this.persistence)),
                  this._gdpr_init(),
                  !this.get_distinct_id())
              ) {
                var r = this.get_config("get_device_id")(se());
                this.register_once({ distinct_id: r, $device_id: r }, "");
              }
              E.addEventListener && E.addEventListener("unload", this._handle_unload.bind(this));
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
              this.get_config("advanced_disable_decide") || new at(this).call(),
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
              L(this.__request_queue, function (t) {
                e._send_request.apply(e, f(t));
              }),
                (this.__request_queue = []),
                this._start_queue_if_opted_in();
            },
          },
          {
            key: "_prepare_callback",
            value: function (e, t) {
              if (J(e)) return null;
              if (pn)
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
              this.__compress_and_send_json_request(e, r, n || ln, un);
            },
          },
          {
            key: "__compress_and_send_json_request",
            value: function (e, n, r, i) {
              var o,
                s = (function (e, n, r) {
                  return e === Ft.LZ64
                    ? [{ data: k.compressToBase64(n), compression: Ft.LZ64 }, r]
                    : e === Ft.GZipJS
                      ? [Jt(zt(n), { mtime: 0 }), t(t({}, r), {}, { blob: !0, urlQueryArgs: { compression: Ft.GZipJS } })]
                      : [{ data: re(n) }, r];
                })((o = this.compression)[Ft.GZipJS] ? Ft.GZipJS : o[Ft.LZ64] ? Ft.LZ64 : Ft.Base64, n, r),
                a = p(s, 2),
                c = a[0],
                u = a[1];
              this._send_request(e, c, u, i);
            },
          },
          {
            key: "_send_request",
            value: function (e, n, r, i) {
              if (fn) this.__request_queue.push([e, n, r, i]);
              else {
                var o = { method: this.get_config("api_method"), transport: this.get_config("api_transport"), verbose: this.get_config("verbose") };
                (r = U(o, r || {})), pn || (r.method = "GET");
                var s = "sendBeacon" in E.navigator && "sendBeacon" === r.transport;
                if (((e = Vt(e, r.urlQueryArgs || {}, { ip: this.get_config("ip"), projectId: this.get_config("projectId")})), G(n) && this.get_config("img"))) {
                  var a = P.createElement("img");
                  (a.src = e), P.body.appendChild(a);
                } else if (s)
                  try {
                    E.navigator.sendBeacon(e, Zt(n, t(t({}, r), {}, { sendBeacon: !0 })));
                  } catch (e) {
                    this.get_config("debug") && console.error(e);
                  }
                else if (pn)
                  try {
                    Xt({
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
                    u = P.createElement("script");
                  (u.type = "text/javascript"), (u.async = !0), (u.defer = !0), (u.src = e);
                  var l = P.getElementsByTagName("script")[0];
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
              L(e, function (e) {
                e && ((t = e[0]), H(t) ? o.push(e) : "function" == typeof e ? e.call(n) : H(e) && "alias" === t ? r.push(e) : H(e) && -1 !== t.indexOf("capture") && "function" == typeof n[t] ? o.push(e) : i.push(e));
              });
              var s = function (e, t) {
                L(
                  e,
                  function (e) {
                    if (H(e[0])) {
                      var n = t;
                      B(e, function (e) {
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
            key: "capture",
            value: function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ln;
              if (this.__loaded && !We(this, !1)) {
                this._captureMetrics.incr("capture"), "$snapshot" === e && this._captureMetrics.incr("snapshot");
                var r = (n = n || ln).transport;
                if ((r && (n.transport = r), J(e) || "string" != typeof e)) console.error("No event name provided to posthog.capture");
                else if (!ae($)) {
                  var i = this.persistence.remove_event_timer(e);
                  this.persistence.update_search_keyword(P.referrer),
                  this.get_config("store_google") && this.persistence.update_campaign_params(),
                  this.get_config("save_referrer") && this.persistence.update_referrer_info(P.referrer);
                  var o = { event: e, properties: this._calculate_event_properties(e, t || {}, i) };
                  "$identify" === e && n.$set && (o.$set = n.$set),
                    ((o = ne(o, n._noTruncate ? null : this.get_config("properties_string_max_length"))).timestamp = n.timestamp || new Date()),
                  this.get_config("debug") && q("PostHog.js send", o);
                  var s = JSON.stringify(o),
                    a = this.get_config("api_host") + (n.endpoint || "/e"),
                    c = n !== ln;
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
            key: "_addCaptureHook",
            value: function (e) {
              this.__captureHooks.push(e);
            },
          },
          {
            key: "_invokeCaptureHooks",
            value: function (e, t) {
              this.config._onCapture(e, t),
                B(this.__captureHooks, function (t) {
                  return t(e);
                });
            },
          },
          {
            key: "_calculate_event_properties",
            value: function (e, r, i) {
              var o = t({}, r);
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
              (o = U({}, de.properties(), this.persistence.properties(), o)),
              "$pageview" === e &&
              this.get_config("_capture_performance") &&
              (o = U(
                o,
                (function () {
                  var e = { navigation: rn("navigation"), paint: rn("paint"), resource: rn("resource") };
                  void 0 !== n(E) && E.performance && E.performance.clearResourceTimings && E.performance.clearResourceTimings();
                  var t = {},
                    r = (function (e) {
                      var t = e.navigation && e.navigation[0],
                        n = e.navigation && e.navigation[1] && e.navigation[1][0],
                        r = t && t.indexOf("duration");
                      if (r > -1) return n[r];
                      var i = t && t.indexOf("loadEventEnd"),
                        o = t && t.indexOf("startTime");
                      return i > -1 ? (n && n[i]) - ((n && n[o]) || 0) : void 0;
                    })(e);
                  return r && (t.$performance_page_loaded = r), (t.$performance_raw = JSON.stringify(e)), t;
                })()
              ));
              var d = this.get_config("property_blacklist");
              H(d)
                ? B(d, function (e) {
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
              this.register(s({}, e, t));
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
                e !== r && e !== this.get_property(Ze) && (this.unregister(Ze), this.register({ distinct_id: e })),
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
                this.register({ $groups: t(t({}, i), {}, s({}, e, n)) }), r && this.capture("$groupidentify", { $group_type: e, $group_key: n, $group_set: r }), i[e] !== n && this.reloadFeatureFlags();
              } else console.error("posthog.group requires a group type and group key");
            },
          },
          {
            key: "reset",
            value: function (e) {
              var t = this.get_property("$device_id");
              this.persistence.clear(), this.sessionManager.resetSessionId();
              var n = this.get_config("get_device_id")(se());
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
              return e === this.get_property(Ve)
                ? (N("Attempting to create alias for existing People user - aborting."), -2)
                : (J(t) && (t = this.get_distinct_id()),
                  e !== t ? (this._register_single(Ze, e), this.capture("$create_alias", { alias: e, distinct_id: t })) : (console.error("alias matches current distinct_id - skipping api call."), this.identify(e), -1));
            },
          },
          {
            key: "set_config",
            value: function (e) {
              var n = t({}, this.config);
              G(e) &&
              (U(this.config, e),
              this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
              this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
              this.persistence && this.persistence.update_config(this.config),
              Fe.is_supported() && "true" === Fe.get("ph_debug") && (this.config.debug = !0),
              this.get_config("debug") && (S.DEBUG = !0),
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
                t = null !== (e = this.get_config("name")) && void 0 !== e ? e : dn;
              return t !== dn && (t = "posthog." + t), t;
            },
          },
          {
            key: "_gdpr_init",
            value: function () {
              "localStorage" === this.get_config("opt_out_capturing_persistence_type") &&
              Fe.is_supported() &&
              (!this.has_opted_in_capturing() && this.has_opted_in_capturing({ persistence_type: "cookie" }) && this.opt_in_capturing({ enable_persistence: !1 }),
              !this.has_opted_out_capturing() && this.has_opted_out_capturing({ persistence_type: "cookie" }) && this.opt_out_capturing({ clear_persistence: !1 }),
                this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: !1 })),
                this.has_opted_out_capturing()
                  ? this._gdpr_update_persistence({ clear_persistence: !0 })
                  : this.has_opted_in_capturing() ||
                  (!this.get_config("opt_out_capturing_by_default") && !Ae.get("ph_optout")) ||
                  (Ae.remove("ph_optout"), this.opt_out_capturing({ clear_persistence: this.get_config("opt_out_persistence_by_default") }));
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
                (t = U(
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
                Fe.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"),
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
              (e = U({ enable_persistence: !0 }, e || {})), this._gdpr_call_func(Re, e), this._gdpr_update_persistence(e);
            },
          },
          {
            key: "opt_out_capturing",
            value: function (e) {
              var t = U({ clear_persistence: !0 }, e || {});
              this._gdpr_call_func(qe, t), this._gdpr_update_persistence(t);
            },
          },
          {
            key: "has_opted_in_capturing",
            value: function (e) {
              return this._gdpr_call_func(je, e);
            },
          },
          {
            key: "has_opted_out_capturing",
            value: function (e) {
              return this._gdpr_call_func(Ne, e);
            },
          },
          {
            key: "clear_opt_in_out_capturing",
            value: function (e) {
              var t = U({ enable_persistence: !0 }, null != e ? e : {});
              this._gdpr_call_func(De, t), this._gdpr_update_persistence(t);
            },
          },
          {
            key: "debug",
            value: function (e) {
              !1 === e
                ? (E.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: !1 }))
                : (E.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),
                localStorage && localStorage.setItem("ph_debug", "true"),
                  this.set_config({ debug: !0 }));
            },
          },
          {
            key: "decodeLZ64",
            value: function (e) {
              return k.decompressFromBase64(e || null);
            },
          },
        ]),
          e
      );
    })();
  !(function (e, t) {
    for (var n = 0; n < t.length; n++) e.prototype[t[n]] = X(e.prototype[t[n]]);
  })(gn, ["identify"]);
  var vn = {},
    yn = function () {
      an.init = function (e, t, n) {
        if (n) return an[n] || ((an[n] = vn[n] = _n(e || "", t || {}, n)), an[n]._loaded()), an[n];
        var r = an;
        return (
          vn.posthog ? (r = vn.posthog) : e && ((r = _n(e, t || {}, dn))._loaded(), (vn.posthog = r)),
            (an = r),
          sn === on.INIT_SNIPPET && (E.posthog = an),
            B(vn, function (e, t) {
              t !== dn && (an[t] = e);
            }),
            r
        );
      };
    };
  (sn = on.INIT_SNIPPET),
  J(E.wring) && (E.wring = []),
    (an = E.wring).__loaded || (an.config && an.persistence)
      ? console.error("PostHog library has already been downloaded at least once.")
      : (B(an._i, function (e) {
        e && H(e) && (vn[e[2]] = _n.apply(void 0, f(e)));
      }),
        yn(),
        an.init(),
        B(vn, function (e) {
          e._loaded();
        }),
        (function () {
          function e() {
            e.done ||
            ((e.done = !0),
              (fn = !1),
              B(vn, function (e) {
                e._dom_loaded();
              }));
          }
          P.addEventListener && ("complete" === P.readyState ? e() : P.addEventListener("DOMContentLoaded", e, !1)), le(E, "load", e, !0);
        })());
})();
//# sourceMappingURL=array.js.map
