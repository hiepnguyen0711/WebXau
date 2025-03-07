!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : "undefined" != typeof exports
    ? (module.exports = n(require("jquery")))
    : n(jQuery);
})(function (n) {
  "use strict";
  (n.fn.priceFormat = function (t) {
    var t = n.extend(!0, {}, n.fn.priceFormat.defaults, t);
    window.ctrl_down = !1;
    var i = !1;
    return (
      n(window).bind("keyup keydown", function (n) {
        return (window.ctrl_down = n.ctrlKey), !0;
      }),
      n(this).bind("keyup keydown", function (n) {
        return (i = n.metaKey), !0;
      }),
      this.each(function () {
        function r(n) {
          h.is("input") ? h.val(n) : h.html(n), h.trigger("pricechange");
        }
        function e() {
          return (m = h.is("input") ? h.val() : h.html());
        }
        function o(n) {
          for (var t = "", i = 0; i < n.length; i++) {
            var r = n.charAt(i);
            0 == t.length && 0 == r && (r = !1),
              r && r.match(v) && (x ? t.length < x && (t += r) : (t += r));
          }
          return t;
        }
        function u(n) {
          for (; n.length < _ + 1; ) n = "0" + n;
          return n;
        }
        function f(t, i) {
          if (!i && ("" === t || t == f("0", !0)) && P) return "";
          var r = u(o(t)),
            e = "",
            a = 0;
          0 == _ && ((y = ""), (c = ""));
          var c = r.substr(r.length - _, _),
            s = r.substr(0, r.length - _);
          if (
            ((r = C ? s + y + c : "0" !== s ? s + y + c : y + c),
            b || "" != n.trim(b))
          ) {
            for (var l = s.length; l > 0; l--) {
              var p = s.substr(l - 1, 1);
              a++, a % 3 == 0 && (p = b + p), (e = p + e);
            }
            e.substr(0, 1) == b && (e = e.substring(1, e.length)),
              (r = 0 == _ ? e : e + y + c);
          }
          return (
            !F ||
              (0 == s && 0 == c) ||
              (r =
                -1 != t.indexOf("-") && t.indexOf("+") < t.indexOf("-")
                  ? "-" + r
                  : O
                  ? "+" + r
                  : "" + r),
            g && (r = g + r),
            w && (r += w),
            r
          );
        }
        function a(n) {
          var t = n.keyCode ? n.keyCode : n.which,
            e = String.fromCharCode(t),
            o = !1,
            u = m,
            a = f(u + e);
          ((t >= 48 && t <= 57) || (t >= 96 && t <= 105)) && (o = !0),
            192 == t && (o = !0),
            8 == t && (o = !0),
            9 == t && (o = !0),
            13 == t && (o = !0),
            46 == t && (o = !0),
            37 == t && (o = !0),
            39 == t && (o = !0),
            !F || (189 != t && 109 != t && 173 != t) || (o = !0),
            !O || (187 != t && 107 != t && 61 != t) || (o = !0),
            t >= 16 && t <= 20 && (o = !0),
            27 == t && (o = !0),
            t >= 33 && t <= 40 && (o = !0),
            t >= 44 && t <= 46 && (o = !0),
            (window.ctrl_down || i) &&
              (86 == t && (o = !0),
              67 == t && (o = !0),
              88 == t && (o = !0),
              82 == t && (o = !0),
              84 == t && (o = !0),
              76 == t && (o = !0),
              87 == t && (o = !0),
              81 == t && (o = !0),
              78 == t && (o = !0),
              65 == t && (o = !0)),
            o || (n.preventDefault(), n.stopPropagation(), u != a && r(a));
        }
        function c() {
          var n = e(),
            t = f(n);
          n != t && r(t), t == f("0", !0) && "0" != n && P && r("");
        }
        function s() {
          h.val(g + e());
        }
        function l() {
          h.val(e() + w);
        }
        function p() {
          if ("" != n.trim(g) && S) {
            r(e().split(g)[1]);
          }
        }
        function d() {
          if ("" != n.trim(w) && k) {
            r(e().split(w)[0]);
          }
        }
        var h = n(this),
          m = "",
          v = /[0-9]/;
        m = h.is("input") ? h.val() : h.html();
        var g = t.prefix,
          w = t.suffix,
          y = t.centsSeparator,
          b = t.thousandsSeparator,
          x = t.limit,
          _ = t.centsLimit,
          S = t.clearPrefix,
          k = t.clearSuffix,
          F = t.allowNegative,
          O = t.insertPlusSign,
          P = t.clearOnEmpty,
          C = t.leadingZero;
        O && (F = !0),
          h.bind("keydown.price_format", a),
          h.bind("keyup.price_format", c),
          h.bind("focusout.price_format", c),
          S &&
            (h.bind("focusout.price_format", function () {
              p();
            }),
            h.bind("focusin.price_format", function () {
              s();
            })),
          k &&
            (h.bind("focusout.price_format", function () {
              d();
            }),
            h.bind("focusin.price_format", function () {
              l();
            })),
          e().length > 0 && (c(), p(), d());
      })
    );
  }),
    (n.fn.unpriceFormat = function () {
      return n(this).unbind(".price_format");
    }),
    (n.fn.unmask = function () {
      var t,
        i = "";
      t = n(this).is("input") ? n(this).val() || [] : n(this).html();
      for (var r = 0; r < t.length; r++)
        (isNaN(t[r]) && "-" != t[r]) || (i += t[r]);
      return i;
    }),
    (n.fn.priceToFloat = function () {
      var t;
      return (
        (t = n(this).is("input") ? n(this).val() || [] : n(this).html()),
        parseFloat(t.replace(/[^0-9\-\.]/g, ""))
      );
    }),
    (n.fn.priceFormat.defaults = {
      prefix: "US$ ",
      suffix: "",
      centsSeparator: ".",
      thousandsSeparator: ",",
      limit: !1,
      centsLimit: 2,
      clearPrefix: !1,
      clearSufix: !1,
      allowNegative: !1,
      insertPlusSign: !1,
      clearOnEmpty: !1,
      leadingZero: !0,
    });
});
