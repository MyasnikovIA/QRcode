/// -------------------------------------------------------------
///    <script src="webcomponents-lite.js"></script>
///    <script src="https://cdn.jsdelivr.net/npm/webcomponents-lite@0.6.0/webcomponents-lite.min.js"></script>
///    <script src="qr-code.js"></script>
///
/// -------------------------------------------------------------
/// <qr-code data="bla bla blaaaaaaaaaahhh" format="svg"></qr-code>
/// <qr-code data="bla bla blaaaaaaaaaahhh" format="html"></qr-code>
/// <qr-code data="bla bla blaaaaaaaaaahhh" format="png"></qr-code>
/// -------------------------------------------------------------
!function (t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    r.m = t, r.c = e, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
            return t[e]
        }.bind(null, o));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 1)
}([function (t, e, r) {
    var n, o, a;
    o = [], void 0 === (a = "function" == typeof (n = function () {
        for (var t = [null, [[10, 7, 17, 13], [1, 1, 1, 1], []], [[16, 10, 28, 22], [1, 1, 1, 1], [4, 16]], [[26, 15, 22, 18], [1, 1, 2, 2], [4, 20]], [[18, 20, 16, 26], [2, 1, 4, 2], [4, 24]], [[24, 26, 22, 18], [2, 1, 4, 4], [4, 28]], [[16, 18, 28, 24], [4, 2, 4, 4], [4, 32]], [[18, 20, 26, 18], [4, 2, 5, 6], [4, 20, 36]], [[22, 24, 26, 22], [4, 2, 6, 6], [4, 22, 40]], [[22, 30, 24, 20], [5, 2, 8, 8], [4, 24, 44]], [[26, 18, 28, 24], [5, 4, 8, 8], [4, 26, 48]], [[30, 20, 24, 28], [5, 4, 11, 8], [4, 28, 52]], [[22, 24, 28, 26], [8, 4, 11, 10], [4, 30, 56]], [[22, 26, 22, 24], [9, 4, 16, 12], [4, 32, 60]], [[24, 30, 24, 20], [9, 4, 16, 16], [4, 24, 44, 64]], [[24, 22, 24, 30], [10, 6, 18, 12], [4, 24, 46, 68]], [[28, 24, 30, 24], [10, 6, 16, 17], [4, 24, 48, 72]], [[28, 28, 28, 28], [11, 6, 19, 16], [4, 28, 52, 76]], [[26, 30, 28, 28], [13, 6, 21, 18], [4, 28, 54, 80]], [[26, 28, 26, 26], [14, 7, 25, 21], [4, 28, 56, 84]], [[26, 28, 28, 30], [16, 8, 25, 20], [4, 32, 60, 88]], [[26, 28, 30, 28], [17, 8, 25, 23], [4, 26, 48, 70, 92]], [[28, 28, 24, 30], [17, 9, 34, 23], [4, 24, 48, 72, 96]], [[28, 30, 30, 30], [18, 9, 30, 25], [4, 28, 52, 76, 100]], [[28, 30, 30, 30], [20, 10, 32, 27], [4, 26, 52, 78, 104]], [[28, 26, 30, 30], [21, 12, 35, 29], [4, 30, 56, 82, 108]], [[28, 28, 30, 28], [23, 12, 37, 34], [4, 28, 56, 84, 112]], [[28, 30, 30, 30], [25, 12, 40, 34], [4, 32, 60, 88, 116]], [[28, 30, 30, 30], [26, 13, 42, 35], [4, 24, 48, 72, 96, 120]], [[28, 30, 30, 30], [28, 14, 45, 38], [4, 28, 52, 76, 100, 124]], [[28, 30, 30, 30], [29, 15, 48, 40], [4, 24, 50, 76, 102, 128]], [[28, 30, 30, 30], [31, 16, 51, 43], [4, 28, 54, 80, 106, 132]], [[28, 30, 30, 30], [33, 17, 54, 45], [4, 32, 58, 84, 110, 136]], [[28, 30, 30, 30], [35, 18, 57, 48], [4, 28, 56, 84, 112, 140]], [[28, 30, 30, 30], [37, 19, 60, 51], [4, 32, 60, 88, 116, 144]], [[28, 30, 30, 30], [38, 19, 63, 53], [4, 28, 52, 76, 100, 124, 148]], [[28, 30, 30, 30], [40, 20, 66, 56], [4, 22, 48, 74, 100, 126, 152]], [[28, 30, 30, 30], [43, 21, 70, 59], [4, 26, 52, 78, 104, 130, 156]], [[28, 30, 30, 30], [45, 22, 74, 62], [4, 30, 56, 82, 108, 134, 160]], [[28, 30, 30, 30], [47, 24, 77, 65], [4, 24, 52, 80, 108, 136, 164]], [[28, 30, 30, 30], [49, 25, 81, 68], [4, 28, 56, 84, 112, 140, 168]]], e = /^\d*$/, r = /^[A-Za-z0-9 $%*+\-.\/:]*$/, n = /^[A-Z0-9 $%*+\-.\/:]*$/, o = [], a = [-1], i = 0, u = 1; i < 255; ++i) o.push(u), a[u] = i, u = 2 * u ^ (u >= 128 ? 285 : 0);
        for (var f = [[]], i = 0; i < 30; ++i) {
            for (var c = f[i], s = [], l = 0; l <= i; ++l) {
                var h = l < i ? o[c[l]] : 0, p = o[(i + (c[l - 1] || 0)) % 255];
                s.push(a[h ^ p])
            }
            f.push(s)
        }
        for (var v = {}, i = 0; i < 45; ++i) v["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(i)] = i;
        var d = [function (t, e) {
            return (t + e) % 2 == 0
        }, function (t, e) {
            return t % 2 == 0
        }, function (t, e) {
            return e % 3 == 0
        }, function (t, e) {
            return (t + e) % 3 == 0
        }, function (t, e) {
            return ((t / 2 | 0) + (e / 3 | 0)) % 2 == 0
        }, function (t, e) {
            return t * e % 2 + t * e % 3 == 0
        }, function (t, e) {
            return (t * e % 2 + t * e % 3) % 2 == 0
        }, function (t, e) {
            return ((t + e) % 2 + t * e % 3) % 2 == 0
        }], g = function (t) {
            return t > 6
        }, y = function (e, r) {
            var n = -8 & function (e) {
                var r = t[e], n = 16 * e * e + 128 * e + 64;
                return g(e) && (n -= 36), r[2].length && (n -= 25 * r[2].length * r[2].length - 10 * r[2].length - 55), n
            }(e), o = t[e];
            return n -= 8 * o[0][r] * o[1][r]
        }, m = function (t, e) {
            switch (e) {
                case 1:
                    return t < 10 ? 10 : t < 27 ? 12 : 14;
                case 2:
                    return t < 10 ? 9 : t < 27 ? 11 : 13;
                case 4:
                    return t < 10 ? 8 : 16;
                case 8:
                    return t < 10 ? 8 : t < 27 ? 10 : 12
            }
        }, b = function (t, e, r) {
            var n = y(t, r) - 4 - m(t, e);
            switch (e) {
                case 1:
                    return 3 * (n / 10 | 0) + (n % 10 < 4 ? 0 : n % 10 < 7 ? 1 : 2);
                case 2:
                    return 2 * (n / 11 | 0) + (n % 11 < 6 ? 0 : 1);
                case 4:
                    return n / 8 | 0;
                case 8:
                    return n / 13 | 0
            }
        }, w = function (t, e) {
            for (var r = t.slice(0), n = t.length, i = e.length, u = 0; u < i; ++u) r.push(0);
            for (var u = 0; u < n;) {
                var f = a[r[u++]];
                if (f >= 0) for (var c = 0; c < i; ++c) r[u + c] ^= o[(f + e[c]) % 255]
            }
            return r.slice(n)
        }, O = function (t, e, r, n) {
            for (var o = t << n, a = e - 1; a >= 0; --a) o >> n + a & 1 && (o ^= r << a);
            return t << n | o
        }, x = function (t, e, r) {
            for (var n = d[r], o = t.length, a = 0; a < o; ++a) for (var i = 0; i < o; ++i) e[a][i] || (t[a][i] ^= n(a, i));
            return t
        }, M = function (t, e, r, n) {
            for (var o = t.length, a = 21522 ^ O(r << 3 | n, 5, 1335, 10), i = 0; i < 15; ++i) {
                var u = [0, 1, 2, 3, 4, 5, 7, 8, o - 7, o - 6, o - 5, o - 4, o - 3, o - 2, o - 1][i],
                    f = [o - 1, o - 2, o - 3, o - 4, o - 5, o - 6, o - 7, o - 8, 7, 5, 4, 3, 2, 1, 0][i];
                t[u][8] = t[8][f] = a >> i & 1
            }
            return t
        }, S = function (t) {
            for (var e = function (t) {
                for (var e = 0, r = 0; r < t.length; ++r) t[r] >= 5 && (e += t[r] - 5 + 3);
                for (var r = 5; r < t.length; r += 2) {
                    var n = t[r];
                    t[r - 1] == n && t[r - 2] == 3 * n && t[r - 3] == n && t[r - 4] == n && (t[r - 5] >= 4 * n || t[r + 1] >= 4 * n) && (e += 40)
                }
                return e
            }, r = t.length, n = 0, o = 0, a = 0; a < r; ++a) {
                var i, u = t[a];
                i = [0];
                for (var f = 0; f < r;) {
                    for (c = 0; f < r && u[f]; ++c) ++f;
                    for (i.push(c), c = 0; f < r && !u[f]; ++c) ++f;
                    i.push(c)
                }
                n += e(i), i = [0];
                for (var f = 0; f < r;) {
                    var c;
                    for (c = 0; f < r && t[f][a]; ++c) ++f;
                    for (i.push(c), c = 0; f < r && !t[f][a]; ++c) ++f;
                    i.push(c)
                }
                n += e(i);
                var s = t[a + 1] || [];
                o += u[0];
                for (var f = 1; f < r; ++f) {
                    var l = u[f];
                    o += l, u[f - 1] == l && s[f] === l && s[f - 1] === l && (n += 3)
                }
            }
            return n += 10 * (Math.abs(o / r / r - .5) / .05 | 0)
        }, P = function (e, r, n, o, a) {
            var i = t[r], u = function (t, e, r, n) {
                var o = [], a = 0, i = 8, u = r.length, f = function (t, e) {
                    if (e >= i) {
                        for (o.push(a | t >> (e -= i)); e >= 8;) o.push(t >> (e -= 8) & 255);
                        a = 0, i = 8
                    }
                    e > 0 && (a |= (t & (1 << e) - 1) << (i -= e))
                }, c = m(t, e);
                switch (f(e, 4), f(u, c), e) {
                    case 1:
                        for (var s = 2; s < u; s += 3) f(parseInt(r.substring(s - 2, s + 1), 10), 10);
                        f(parseInt(r.substring(s - 2), 10), [0, 4, 7][u % 3]);
                        break;
                    case 2:
                        for (var s = 1; s < u; s += 2) f(45 * v[r.charAt(s - 1)] + v[r.charAt(s)], 11);
                        u % 2 == 1 && f(v[r.charAt(s - 1)], 6);
                        break;
                    case 4:
                        for (var s = 0; s < u; ++s) f(r[s], 8)
                }
                for (f(0, 4), i < 8 && o.push(a); o.length + 1 < n;) o.push(236, 17);
                return o.length < n && o.push(236), o
            }(r, n, e, y(r, o) >> 3);
            u = function (t, e, r) {
                for (var n = [], o = t.length / e | 0, a = 0, i = e - t.length % e, u = 0; u < i; ++u) n.push(a), a += o;
                for (var u = i; u < e; ++u) n.push(a), a += o + 1;
                n.push(a);
                for (var f = [], u = 0; u < e; ++u) f.push(w(t.slice(n[u], n[u + 1]), r));
                for (var c = [], s = t.length / e | 0, u = 0; u < s; ++u) for (var l = 0; l < e; ++l) c.push(t[n[l] + u]);
                for (var l = i; l < e; ++l) c.push(t[n[l + 1] - 1]);
                for (var u = 0; u < r.length; ++u) for (var l = 0; l < e; ++l) c.push(f[l][u]);
                return c
            }(u, i[1][o], f[i[0][o]]);
            var c = function (e) {
                for (var r = t[e], n = function (t) {
                    return 4 * t + 17
                }(e), o = [], a = [], i = 0; i < n; ++i) o.push([]), a.push([]);
                var u = function (t, e, r, n, i) {
                    for (var u = 0; u < r; ++u) for (var f = 0; f < n; ++f) o[t + u][e + f] = i[u] >> f & 1, a[t + u][e + f] = 1
                };
                u(0, 0, 9, 9, [127, 65, 93, 93, 93, 65, 383, 0, 64]), u(n - 8, 0, 8, 9, [256, 127, 65, 93, 93, 93, 65, 127]), u(0, n - 8, 9, 8, [254, 130, 186, 186, 186, 130, 254, 0, 0]);
                for (var i = 9; i < n - 8; ++i) o[6][i] = o[i][6] = 1 & ~i, a[6][i] = a[i][6] = 1;
                for (var f = r[2], c = f.length, i = 0; i < c; ++i) for (var s = 0 == i || i == c - 1 ? 1 : 0, l = 0 == i ? c - 1 : c, h = s; h < l; ++h) u(f[i], f[h], 5, 5, [31, 17, 21, 17, 31]);
                if (g(e)) for (var p = O(e, 6, 7973, 12), v = 0, i = 0; i < 6; ++i) for (var h = 0; h < 3; ++h) o[i][n - 11 + h] = o[n - 11 + h][i] = p >> v++ & 1, a[i][n - 11 + h] = a[n - 11 + h][i] = 1;
                return {matrix: o, reserved: a}
            }(r), s = c.matrix, l = c.reserved;
            if (function (t, e, r) {
                for (var n = t.length, o = 0, a = -1, i = n - 1; i >= 0; i -= 2) {
                    6 == i && --i;
                    for (var u = a < 0 ? n - 1 : 0, f = 0; f < n; ++f) {
                        for (var c = i; c > i - 2; --c) e[u][c] || (t[u][c] = r[o >> 3] >> (7 & ~o) & 1, ++o);
                        u += a
                    }
                    a = -a
                }
            }(s, l, u), a < 0) {
                x(s, l, 0), M(s, 0, o, 0);
                var h = 0, p = S(s);
                for (x(s, l, 0), a = 1; a < 8; ++a) {
                    x(s, l, a), M(s, 0, o, a);
                    var d = S(s);
                    p > d && (p = d, h = a), x(s, l, a)
                }
                a = h
            }
            return x(s, l, a), M(s, 0, o, a), s
        }, k = {
            generate: function (t, o) {
                var a = {numeric: 1, alphanumeric: 2, octet: 4}, i = {L: 1, M: 0, Q: 3, H: 2},
                    u = (o = o || {}).version || -1, f = i[(o.ecclevel || "L").toUpperCase()],
                    c = o.mode ? a[o.mode.toLowerCase()] : -1, s = "mask" in o ? o.mask : -1;
                if (c < 0) c = "string" == typeof t ? t.match(e) ? 1 : t.match(n) ? 2 : 4 : 4; else if (1 != c && 2 != c && 4 != c) throw"invalid or unsupported mode";
                if (null === (t = function (t, n) {
                    switch (t) {
                        case 1:
                            return n.match(e) ? n : null;
                        case 2:
                            return n.match(r) ? n.toUpperCase() : null;
                        case 4:
                            if ("string" == typeof n) {
                                for (var o = [], a = 0; a < n.length; ++a) {
                                    var i = n.charCodeAt(a);
                                    i < 128 ? o.push(i) : i < 2048 ? o.push(192 | i >> 6, 128 | 63 & i) : i < 65536 ? o.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : o.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i)
                                }
                                return o
                            }
                            return n
                    }
                }(c, t))) throw"invalid data format";
                if (f < 0 || f > 3) throw"invalid ECC level";
                if (u < 0) {
                    for (u = 1; u <= 40 && !(t.length <= b(u, c, f)); ++u) ;
                    if (u > 40) throw"too large data"
                } else if (u < 1 || u > 40) throw"invalid version";
                if (-1 != s && (s < 0 || s > 8)) throw"invalid mask";
                return P(t, u, c, f, s)
            }, generateHTML: function (t, e) {
                e = e || {};
                for (var r = k.generate(t, e), n = Math.max(e.modulesize || 5, .5), o = Math.max(null !== e.margin ? e.margin : 4, 0), a = document.createElement("div"), i = r.length, u = ['<table border="0" cellspacing="0" cellpadding="0" style="border:' + n * o + 'px solid #fff;background:#fff">'], f = 0; f < i; ++f) {
                    u.push("<tr>");
                    for (var c = 0; c < i; ++c) u.push('<td style="width:' + n + "px;height:" + n + "px" + (r[f][c] ? ";background:#000" : "") + '"></td>');
                    u.push("</tr>")
                }
                return a.className = "qrcode", a.innerHTML = u.join("") + "</table>", a
            }, generateSVG: function (t, e) {
                e = e || {};
                var r = k.generate(t, e), n = r.length, o = Math.max(e.modulesize || 5, .5),
                    a = Math.max(null !== e.margin ? e.margin : 4, 0), i = o * (n + 2 * a),
                    u = ' class= "fg" width="' + o + '" height="' + o + '"/>',
                    f = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                f.setAttribute("viewBox", "0 0 " + i + " " + i), f.setAttribute("style", "shape-rendering:crispEdges"), e.modulesize && (f.setAttribute("width", i), f.setAttribute("height", i));
                for (var c = ["<style scoped>.bg{fill:#FFF}.fg{fill:#000}</style>", '<rect class="bg" x="0" y="0"', 'width="' + i + '" height="' + i + '"/>'], s = a * o, l = 0; l < n; ++l) {
                    for (var h = a * o, p = 0; p < n; ++p) r[l][p] && c.push('<rect x="' + h + '" y="' + s + '"', u), h += o;
                    s += o
                }
                return f.innerHTML = c.join(""), f
            }, generatePNG: function (t, e) {
                e = e || {};
                var r, n = k.generate(t, e), o = Math.max(e.modulesize || 5, .5),
                    a = Math.max(null !== e.margin ? e.margin : 4, 0), i = n.length, u = o * (i + 2 * a),
                    f = document.createElement("canvas");
                if (f.width = f.height = u, !(r = f.getContext("2d"))) throw"canvas support is needed for PNG output";
                r.fillStyle = "#fff", r.fillRect(0, 0, u, u), r.fillStyle = "#000";
                for (var c = 0; c < i; ++c) for (var s = 0; s < i; ++s) n[c][s] && r.fillRect(o * (a + s), o * (a + c), o, o);
                return f.toDataURL()
            }
        };
        return k
    }) ? n.apply(e, o) : n) || (t.exports = a)
}, function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0), o = r.n(n);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function u(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function f(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (f = function (t) {
            if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n)
            }

            function n() {
                return c(t, arguments, l(this).constructor)
            }

            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), s(n, t)
        })(t)
    }

    function c(t, e, r) {
        return (c = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                })), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function (t, e, r) {
            var n = [null];
            n.push.apply(n, e);
            var o = new (Function.bind.apply(t, n));
            return r && s(o, r.prototype), o
        }).apply(null, arguments)
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    var h = function (t) {
        function e() {
            var t, r, n;
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), r = this, (t = !(n = l(e).call(this)) || "object" !== a(n) && "function" != typeof n ? u(r) : n)._defineProperty = t._defineProperty.bind(u(t)), t.attachShadow({mode: "open"}), Object.keys(e.defaultAttributes).map(t._defineProperty), t
        }

        var r, n, c;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && s(t, e)
        }(e, f(HTMLElement)), r = e, c = [{
            key: "defaultAttributes", get: function () {
                return {data: null, format: "png", modulesize: 5, margin: 4}
            }
        }, {
            key: "observedAttributes", get: function () {
                return Object.keys(e.defaultAttributes)
            }
        }], (n = [{
            key: "attributeChangedCallback", value: function (t, e, r) {
                var n = this[t + "Changed"];
                n && "function" == typeof n && n.call(this, e, r), this.generate()
            }
        }, {
            key: "_defineProperty", value: function (t) {
                var r = this;
                Object.defineProperty(this, t, {
                    get: function () {
                        var n = r.getAttribute(t);
                        return null === n ? e.defaultAttributes[t] : n
                    }, set: function (e) {
                        r.setAttribute(t, e)
                    }
                })
            }
        }, {
            key: "getOptions", value: function () {
                var t = this.modulesize, e = this.margin;
                return {modulesize: null !== t ? parseInt(t) : t, margin: null !== e ? parseInt(e) : e}
            }
        }, {
            key: "generate", value: function () {
                null !== this.data ? "png" === this.format ? this.generatePNG() : "html" === this.format ? this.generateHTML() : "svg" === this.format ? this.generateSVG() : this.shadowRoot.innerHTML = "<div>qr-code: " + this.format + " not supported!</div>" : this.shadowRoot.innerHTML = "<div>qr-code: no data!</div>"
            }
        }, {
            key: "generatePNG", value: function () {
                try {
                    var t = document.createElement("img");
                    t.src = o.a.generatePNG(this.data, this.getOptions()), this.clear(), this.shadowRoot.appendChild(t)
                } catch (t) {
                    this.shadowRoot.innerHTML = "<div>qr-code: no canvas support!</div>"
                }
            }
        }, {
            key: "generateHTML", value: function () {
                var t = o.a.generateHTML(this.data, this.getOptions());
                this.clear(), this.shadowRoot.appendChild(t)
            }
        }, {
            key: "generateSVG", value: function () {
                var t = o.a.generateSVG(this.data, this.getOptions());
                this.clear(), this.shadowRoot.appendChild(t)
            }
        }, {
            key: "clear", value: function () {
                for (; this.shadowRoot.lastChild;) this.shadowRoot.removeChild(this.shadowRoot.lastChild)
            }
        }]) && i(r.prototype, n), c && i(r, c), e
    }();
    customElements.define("qr-code", h)
}]);