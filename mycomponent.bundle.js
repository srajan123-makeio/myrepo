var L, f, Pe, S, oe, Ee, J, Y, K, Q, A = {}, Se = [], Ie = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, V = Array.isArray;
function x(e, t) {
  for (var _ in t) e[_] = t[_];
  return e;
}
function Ne(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function P(e, t, _) {
  var n, o, r, l = {};
  for (r in t) r == "key" ? n = t[r] : r == "ref" ? o = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? L.call(arguments, 2) : _), typeof e == "function" && e.defaultProps != null) for (r in e.defaultProps) l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return U(e, l, n, o, null);
}
function U(e, t, _, n, o) {
  var r = { type: e, props: t, key: _, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Pe, __i: -1, __u: 0 };
  return o == null && f.vnode != null && f.vnode(r), r;
}
function N(e) {
  return e.children;
}
function $(e, t) {
  this.props = e, this.context = t;
}
function H(e, t) {
  if (t == null) return e.__ ? H(e.__, e.__i + 1) : null;
  for (var _; t < e.__k.length; t++) if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
  return typeof e.type == "function" ? H(e) : null;
}
function He(e) {
  var t, _;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((_ = e.__k[t]) != null && _.__e != null) {
      e.__e = e.__c.base = _.__e;
      break;
    }
    return He(e);
  }
}
function re(e) {
  (!e.__d && (e.__d = !0) && S.push(e) && !I.__r++ || oe !== f.debounceRendering) && ((oe = f.debounceRendering) || Ee)(I);
}
function I() {
  var e, t, _, n, o, r, l, a;
  for (S.sort(J); e = S.shift(); ) e.__d && (t = S.length, n = void 0, r = (o = (_ = e).__v).__e, l = [], a = [], _.__P && ((n = x({}, o)).__v = o.__v + 1, f.vnode && f.vnode(n), ee(_.__P, n, o, _.__n, _.__P.namespaceURI, 32 & o.__u ? [r] : null, l, r ?? H(o), !!(32 & o.__u), a), n.__v = o.__v, n.__.__k[n.__i] = n, Ue(l, n, a), n.__e != r && He(n)), S.length > t && S.sort(J));
  I.__r = 0;
}
function Oe(e, t, _, n, o, r, l, a, c, u, p) {
  var i, g, s, v, b, m = n && n.__k || Se, h = t.length;
  for (_.__d = c, Be(_, t, m), c = _.__d, i = 0; i < h; i++) (s = _.__k[i]) != null && (g = s.__i === -1 ? A : m[s.__i] || A, s.__i = i, ee(e, s, g, o, r, l, a, c, u, p), v = s.__e, s.ref && g.ref != s.ref && (g.ref && te(g.ref, null, s), p.push(s.ref, s.__c || v, s)), b == null && v != null && (b = v), 65536 & s.__u || g.__k === s.__k ? c = Te(s, c, e) : typeof s.type == "function" && s.__d !== void 0 ? c = s.__d : v && (c = v.nextSibling), s.__d = void 0, s.__u &= -196609);
  _.__d = c, _.__e = b;
}
function Be(e, t, _) {
  var n, o, r, l, a, c = t.length, u = _.length, p = u, i = 0;
  for (e.__k = [], n = 0; n < c; n++) (o = t[n]) != null && typeof o != "boolean" && typeof o != "function" ? (l = n + i, (o = e.__k[n] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? U(null, o, null, null, null) : V(o) ? U(N, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? U(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = e, o.__b = e.__b + 1, r = null, (a = o.__i = Ve(o, _, l, p)) !== -1 && (p--, (r = _[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && i--, typeof o.type != "function" && (o.__u |= 65536)) : a !== l && (a == l - 1 ? i-- : a == l + 1 ? i++ : (a > l ? i-- : i++, o.__u |= 65536))) : o = e.__k[n] = null;
  if (p) for (n = 0; n < u; n++) (r = _[n]) != null && !(131072 & r.__u) && (r.__e == e.__d && (e.__d = H(r)), Ae(r, r));
}
function Te(e, t, _) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = Te(n[o], t, _));
    return t;
  }
  e.__e != t && (t && e.type && !_.contains(t) && (t = H(e)), _.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function B(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (V(e) ? e.some(function(_) {
    B(_, t);
  }) : t.push(e)), t;
}
function Ve(e, t, _, n) {
  var o = e.key, r = e.type, l = _ - 1, a = _ + 1, c = t[_];
  if (c === null || c && o == c.key && r === c.type && !(131072 & c.__u)) return _;
  if ((typeof r != "function" || r === N || o) && n > (c != null && !(131072 & c.__u) ? 1 : 0)) for (; l >= 0 || a < t.length; ) {
    if (l >= 0) {
      if ((c = t[l]) && !(131072 & c.__u) && o == c.key && r === c.type) return l;
      l--;
    }
    if (a < t.length) {
      if ((c = t[a]) && !(131072 & c.__u) && o == c.key && r === c.type) return a;
      a++;
    }
  }
  return -1;
}
function ie(e, t, _) {
  t[0] === "-" ? e.setProperty(t, _ ?? "") : e[t] = _ == null ? "" : typeof _ != "number" || Ie.test(t) ? _ : _ + "px";
}
function j(e, t, _, n, o) {
  var r;
  e: if (t === "style") if (typeof _ == "string") e.style.cssText = _;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) _ && t in _ || ie(e.style, t, "");
    if (_) for (t in _) n && _[t] === n[t] || ie(e.style, t, _[t]);
  }
  else if (t[0] === "o" && t[1] === "n") r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = _, _ ? n ? _.u = n.u : (_.u = Y, e.addEventListener(t, r ? Q : K, r)) : e.removeEventListener(t, r ? Q : K, r);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = _ ?? "";
      break e;
    } catch {
    }
    typeof _ == "function" || (_ == null || _ === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && _ == 1 ? "" : _));
  }
}
function le(e) {
  return function(t) {
    if (this.l) {
      var _ = this.l[t.type + e];
      if (t.t == null) t.t = Y++;
      else if (t.t < _.u) return;
      return f.event && (t = f.event(t)), "handleEvent" in _ ? _.handleEvent(t) : _(t);
    }
  };
}
function ee(e, t, _, n, o, r, l, a, c, u) {
  var p, i, g, s, v, b, m, h, d, O, C, M, T, ne, D, z, k = t.type;
  if (t.constructor !== void 0) return null;
  128 & _.__u && (c = !!(32 & _.__u), r = [a = t.__e = _.__e]), (p = f.__b) && p(t);
  e: if (typeof k == "function") try {
    if (h = t.props, d = "prototype" in k && k.prototype.render, O = (p = k.contextType) && n[p.__c], C = p ? O ? O.props.value : p.__ : n, _.__c ? m = (i = t.__c = _.__c).__ = i.__E : (d ? t.__c = i = new k(h, C) : (t.__c = i = new $(h, C), i.constructor = k, i.render = ze), O && O.sub(i), i.props = h, i.state || (i.state = {}), i.context = C, i.__n = n, g = i.__d = !0, i.__h = [], i._sb = []), d && i.__s == null && (i.__s = i.state), d && k.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = x({}, i.__s)), x(i.__s, k.getDerivedStateFromProps(h, i.__s))), s = i.props, v = i.state, i.__v = t, g) d && k.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), d && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (d && k.getDerivedStateFromProps == null && h !== s && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, C), !i.__e && (i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, C) === !1 || t.__v === _.__v)) {
        for (t.__v !== _.__v && (i.props = h, i.state = i.__s, i.__d = !1), t.__e = _.__e, t.__k = _.__k, t.__k.some(function(F) {
          F && (F.__ = t);
        }), M = 0; M < i._sb.length; M++) i.__h.push(i._sb[M]);
        i._sb = [], i.__h.length && l.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, C), d && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(s, v, b);
      });
    }
    if (i.context = C, i.props = h, i.__P = e, i.__e = !1, T = f.__r, ne = 0, d) {
      for (i.state = i.__s, i.__d = !1, T && T(t), p = i.render(i.props, i.state, i.context), D = 0; D < i._sb.length; D++) i.__h.push(i._sb[D]);
      i._sb = [];
    } else do
      i.__d = !1, T && T(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++ne < 25);
    i.state = i.__s, i.getChildContext != null && (n = x(x({}, n), i.getChildContext())), d && !g && i.getSnapshotBeforeUpdate != null && (b = i.getSnapshotBeforeUpdate(s, v)), Oe(e, V(z = p != null && p.type === N && p.key == null ? p.props.children : p) ? z : [z], t, _, n, o, r, l, a, c, u), i.base = t.__e, t.__u &= -161, i.__h.length && l.push(i), m && (i.__E = i.__ = null);
  } catch (F) {
    if (t.__v = null, c || r != null) {
      for (t.__u |= c ? 160 : 128; a && a.nodeType === 8 && a.nextSibling; ) a = a.nextSibling;
      r[r.indexOf(a)] = null, t.__e = a;
    } else t.__e = _.__e, t.__k = _.__k;
    f.__e(F, t, _);
  }
  else r == null && t.__v === _.__v ? (t.__k = _.__k, t.__e = _.__e) : t.__e = qe(_.__e, t, _, n, o, r, l, c, u);
  (p = f.diffed) && p(t);
}
function Ue(e, t, _) {
  t.__d = void 0;
  for (var n = 0; n < _.length; n++) te(_[n], _[++n], _[++n]);
  f.__c && f.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      f.__e(r, o.__v);
    }
  });
}
function qe(e, t, _, n, o, r, l, a, c) {
  var u, p, i, g, s, v, b, m = _.props, h = t.props, d = t.type;
  if (d === "svg" ? o = "http://www.w3.org/2000/svg" : d === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (u = 0; u < r.length; u++) if ((s = r[u]) && "setAttribute" in s == !!d && (d ? s.localName === d : s.nodeType === 3)) {
      e = s, r[u] = null;
      break;
    }
  }
  if (e == null) {
    if (d === null) return document.createTextNode(h);
    e = document.createElementNS(o, d, h.is && h), a && (f.__m && f.__m(t, r), a = !1), r = null;
  }
  if (d === null) m === h || a && e.data === h || (e.data = h);
  else {
    if (r = r && L.call(e.childNodes), m = _.props || A, !a && r != null) for (m = {}, u = 0; u < e.attributes.length; u++) m[(s = e.attributes[u]).name] = s.value;
    for (u in m) if (s = m[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") i = s;
      else if (!(u in h)) {
        if (u == "value" && "defaultValue" in h || u == "checked" && "defaultChecked" in h) continue;
        j(e, u, null, s, o);
      }
    }
    for (u in h) s = h[u], u == "children" ? g = s : u == "dangerouslySetInnerHTML" ? p = s : u == "value" ? v = s : u == "checked" ? b = s : a && typeof s != "function" || m[u] === s || j(e, u, s, m[u], o);
    if (p) a || i && (p.__html === i.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
    else if (i && (e.innerHTML = ""), Oe(e, V(g) ? g : [g], t, _, n, d === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, l, r ? r[0] : _.__k && H(_, 0), a, c), r != null) for (u = r.length; u--; ) Ne(r[u]);
    a || (u = "value", d === "progress" && v == null ? e.removeAttribute("value") : v !== void 0 && (v !== e[u] || d === "progress" && !v || d === "option" && v !== m[u]) && j(e, u, v, m[u], o), u = "checked", b !== void 0 && b !== e[u] && j(e, u, b, m[u], o));
  }
  return e;
}
function te(e, t, _) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    f.__e(o, _);
  }
}
function Ae(e, t, _) {
  var n, o;
  if (f.unmount && f.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || te(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (r) {
      f.__e(r, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && Ae(n[o], t, _ || typeof e.type != "function");
  _ || Ne(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function ze(e, t, _) {
  return this.constructor(e, _);
}
function q(e, t, _) {
  var n, o, r, l;
  f.__ && f.__(e, t), o = (n = typeof _ == "function") ? null : _ && _.__k || t.__k, r = [], l = [], ee(t, e = (!n && _ || t).__k = P(N, null, [e]), o || A, A, t.namespaceURI, !n && _ ? [_] : o ? null : t.firstChild ? L.call(t.childNodes) : null, r, !n && _ ? _ : o ? o.__e : t.firstChild, n, l), Ue(r, e, l);
}
function Le(e, t) {
  q(e, t, Le);
}
function Me(e, t, _) {
  var n, o, r, l, a = x({}, e.props);
  for (r in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) r == "key" ? n = t[r] : r == "ref" ? o = t[r] : a[r] = t[r] === void 0 && l !== void 0 ? l[r] : t[r];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? L.call(arguments, 2) : _), U(e.type, a, n || e.key, o || e.ref, null);
}
L = Se.slice, f = { __e: function(e, t, _, n) {
  for (var o, r, l; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), l = o.__d), l) return o.__E = o;
  } catch (a) {
    e = a;
  }
  throw e;
} }, Pe = 0, $.prototype.setState = function(e, t) {
  var _;
  _ = this.__s != null && this.__s !== this.state ? this.__s : this.__s = x({}, this.state), typeof e == "function" && (e = e(x({}, _), this.props)), e && x(_, e), e != null && this.__v && (t && this._sb.push(t), re(this));
}, $.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), re(this));
}, $.prototype.render = N, S = [], Ee = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, J = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, I.__r = 0, Y = 0, K = le(!1), Q = le(!0);
function _e() {
  return (_e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var _ = arguments[t];
      for (var n in _) Object.prototype.hasOwnProperty.call(_, n) && (e[n] = _[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ze = ["context", "children"];
function Ge(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, _ = function(n, o) {
    if (n == null) return {};
    var r, l, a = {}, c = Object.keys(n);
    for (l = 0; l < c.length; l++) o.indexOf(r = c[l]) >= 0 || (a[r] = n[r]);
    return a;
  }(e, Ze);
  return Me(t, _);
}
function Je() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = P(Ge, _e({}, this._props, { context: e.detail.context }), function t(_, n) {
    if (_.nodeType === 3) return _.data;
    if (_.nodeType !== 1) return null;
    var o = [], r = {}, l = 0, a = _.attributes, c = _.childNodes;
    for (l = a.length; l--; ) a[l].name !== "slot" && (r[a[l].name] = a[l].value, r[De(a[l].name)] = a[l].value);
    for (l = c.length; l--; ) {
      var u = t(c[l], null), p = c[l].slot;
      p ? r[p] = P(ae, { name: p }, u) : o[l] = u;
    }
    var i = n ? P(ae, null, o) : o;
    return P(n || _.nodeName.toLowerCase(), r, i);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Le : q)(this._vdom, this._root);
}
function De(e) {
  return e.replace(/-(\w)/g, function(t, _) {
    return _ ? _.toUpperCase() : "";
  });
}
function Ke(e, t, _) {
  if (this._vdom) {
    var n = {};
    n[e] = _ = _ ?? void 0, n[De(e)] = _, this._vdom = Me(this._vdom, n), q(this._vdom, this._root);
  }
}
function Qe() {
  q(this._vdom = null, this._root);
}
function ae(e, t) {
  var _ = this;
  return P("slot", _e({}, e, { ref: function(n) {
    n ? (_.ref = n, _._listener || (_._listener = function(o) {
      o.stopPropagation(), o.detail.context = t;
    }, n.addEventListener("_preact", _._listener))) : _.ref.removeEventListener("_preact", _._listener);
  } }));
}
function Xe(e, t, _, n) {
  function o() {
    var r = Reflect.construct(HTMLElement, [], o);
    return r._vdomComponent = e, r._root = n && n.shadow ? r.attachShadow({ mode: n.mode || "open" }) : r, r;
  }
  return (o.prototype = Object.create(HTMLElement.prototype)).constructor = o, o.prototype.connectedCallback = Je, o.prototype.attributeChangedCallback = Ke, o.prototype.disconnectedCallback = Qe, _ = _ || e.observedAttributes || Object.keys(e.propTypes || {}), o.observedAttributes = _, _.forEach(function(r) {
    Object.defineProperty(o.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(l) {
      this._vdom ? this.attributeChangedCallback(r, null, l) : (this._props || (this._props = {}), this._props[r] = l, this.connectedCallback());
      var a = typeof l;
      l != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(r, l);
    } });
  }), customElements.define(t, o);
}
var Ye = 0;
function E(e, t, _, n, o, r) {
  t || (t = {});
  var l, a, c = t;
  "ref" in t && (l = t.ref, delete t.ref);
  var u = { type: e, props: c, key: _, ref: l, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Ye, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof e == "function" && (l = e.defaultProps)) for (a in l) c[a] === void 0 && (c[a] = l[a]);
  return f.vnode && f.vnode(u), u;
}
var w, Z, ue, Fe = [], y = f, ce = y.__b, se = y.__r, fe = y.diffed, pe = y.__c, he = y.unmount, de = y.__;
function et() {
  for (var e; e = Fe.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(W), e.__H.__h.forEach(X), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], y.__e(t, e.__v);
  }
}
y.__b = function(e) {
  w = null, ce && ce(e);
}, y.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), de && de(e, t);
}, y.__r = function(e) {
  se && se(e);
  var t = (w = e.__c).__H;
  t && (Z === w ? (t.__h = [], w.__h = [], t.__.forEach(function(_) {
    _.__N && (_.__ = _.__N), _.i = _.__N = void 0;
  })) : (t.__h.forEach(W), t.__h.forEach(X), t.__h = [])), Z = w;
}, y.diffed = function(e) {
  fe && fe(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Fe.push(t) !== 1 && ue === y.requestAnimationFrame || ((ue = y.requestAnimationFrame) || tt)(et)), t.__H.__.forEach(function(_) {
    _.i && (_.__H = _.i), _.i = void 0;
  })), Z = w = null;
}, y.__c = function(e, t) {
  t.some(function(_) {
    try {
      _.__h.forEach(W), _.__h = _.__h.filter(function(n) {
        return !n.__ || X(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], y.__e(n, _.__v);
    }
  }), pe && pe(e, t);
}, y.unmount = function(e) {
  he && he(e);
  var t, _ = e.__c;
  _ && _.__H && (_.__H.__.forEach(function(n) {
    try {
      W(n);
    } catch (o) {
      t = o;
    }
  }), _.__H = void 0, t && y.__e(t, _.__v));
};
var ve = typeof requestAnimationFrame == "function";
function tt(e) {
  var t, _ = function() {
    clearTimeout(n), ve && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(_, 100);
  ve && (t = requestAnimationFrame(_));
}
function W(e) {
  var t = w, _ = e.__c;
  typeof _ == "function" && (e.__c = void 0, _()), w = t;
}
function X(e) {
  var t = w;
  e.__c = e.__(), w = t;
}
function me(e, t) {
  for (var _ in e) if (_ !== "__source" && !(_ in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function ye(e, t) {
  this.props = e, this.context = t;
}
(ye.prototype = new $()).isPureReactComponent = !0, ye.prototype.shouldComponentUpdate = function(e, t) {
  return me(this.props, e) || me(this.state, t);
};
var ge = f.__b;
f.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ge && ge(e);
};
var _t = f.__e;
f.__e = function(e, t, _, n) {
  if (e.then) {
    for (var o, r = t; r = r.__; ) if ((o = r.__c) && o.__c) return t.__e == null && (t.__e = _.__e, t.__k = _.__k), o.__c(e, t);
  }
  _t(e, t, _, n);
};
var be = f.unmount;
function je(e, t, _) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = function(n, o) {
    for (var r in o) n[r] = o[r];
    return n;
  }({}, e)).__c != null && (e.__c.__P === _ && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return je(n, t, _);
  })), e;
}
function Re(e, t, _) {
  return e && _ && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Re(n, t, _);
  }), e.__c && e.__c.__P === t && (e.__e && _.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = _)), e;
}
function G() {
  this.__u = 0, this.o = null, this.__b = null;
}
function We(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function R() {
  this.i = null, this.l = null;
}
f.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), be && be(e);
}, (G.prototype = new $()).__c = function(e, t) {
  var _ = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(_);
  var o = We(n.__v), r = !1, l = function() {
    r || (r = !0, _.__R = null, o ? o(a) : a());
  };
  _.__R = l;
  var a = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = Re(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.o.pop(); ) u.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(l, l);
}, G.prototype.componentWillUnmount = function() {
  this.o = [];
}, G.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var _ = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = je(this.__b, _, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && P(N, null, e.fallback);
  return o && (o.__u &= -33), [P(N, null, t.__a ? null : e.children), o];
};
var ke = function(e, t, _) {
  if (++_[1] === _[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (_ = e.i; _; ) {
    for (; _.length > 3; ) _.pop()();
    if (_[1] < _[0]) break;
    e.i = _ = _[2];
  }
};
(R.prototype = new $()).__a = function(e) {
  var t = this, _ = We(t.__v), n = t.l.get(e);
  return n[0]++, function(o) {
    var r = function() {
      t.props.revealOrder ? (n.push(o), ke(t, e, n)) : o();
    };
    _ ? _(r) : r();
  };
}, R.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = B(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var _ = t.length; _--; ) this.l.set(t[_], this.i = [1, 0, this.i]);
  return e.children;
}, R.prototype.componentDidUpdate = R.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, _) {
    ke(e, _, t);
  });
};
var nt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ot = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, rt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, it = /[A-Z0-9]/g, lt = typeof document < "u", at = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
$.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty($.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var we = f.event;
function ut() {
}
function ct() {
  return this.cancelBubble;
}
function st() {
  return this.defaultPrevented;
}
f.event = function(e) {
  return we && (e = we(e)), e.persist = ut, e.isPropagationStopped = ct, e.isDefaultPrevented = st, e.nativeEvent = e;
};
var ft = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, xe = f.vnode;
f.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var _ = t.props, n = t.type, o = {}, r = n.indexOf("-") === -1;
    for (var l in _) {
      var a = _[l];
      if (!(l === "value" && "defaultValue" in _ && a == null || lt && l === "children" && n === "noscript" || l === "class" || l === "className")) {
        var c = l.toLowerCase();
        l === "defaultValue" && "value" in _ && _.value == null ? l = "value" : l === "download" && a === !0 ? a = "" : c === "translate" && a === "no" ? a = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? l = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || at(_.type) ? c === "onfocus" ? l = "onfocusin" : c === "onblur" ? l = "onfocusout" : rt.test(l) && (l = c) : c = l = "oninput" : r && ot.test(l) ? l = l.replace(it, "-$&").toLowerCase() : a === null && (a = void 0), c === "oninput" && o[l = c] && (l = "oninputCapture"), o[l] = a;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = B(_.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = B(_.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), _.class && !_.className ? (o.class = _.class, Object.defineProperty(o, "className", ft)) : (_.className && !_.class || _.class && _.className) && (o.class = o.className = _.className), t.props = o;
  }(e), e.$$typeof = nt, xe && xe(e);
};
var $e = f.__r;
f.__r = function(e) {
  $e && $e(e), e.__c;
};
var Ce = f.diffed;
f.diffed = function(e) {
  Ce && Ce(e);
  var t = e.props, _ = e.__e;
  _ != null && e.type === "textarea" && "value" in t && t.value !== _.value && (_.value = t.value == null ? "" : t.value);
};
const pt = ({ width: e, bgColor: t, title: _, content: n, alignment: o, image: r }) => /* @__PURE__ */ E(
  "div",
  {
    className: "",
    style: { backgroundColor: t, width: e },
    children: /* @__PURE__ */ E("div", { className: `flex ${o === "right" ? "flex-row-reverse" : "flex-row"} h-[570px] justify-center gap-8`, children: [
      /* @__PURE__ */ E("div", { className: "basis-2/5 py-[55px] px-[50px] flex flex-col", children: [
        /* @__PURE__ */ E("h2", { className: "text-h2 font-weight-bold my-4", children: _ }),
        /* @__PURE__ */ E("p", { children: n })
      ] }),
      r && /* @__PURE__ */ E("div", { className: "flex flex-grow", children: /* @__PURE__ */ E(
        "img",
        {
          src: r,
          alt: _,
          className: "w-full h-auto object-cover"
        }
      ) })
    ] })
  }
);
customElements.get("custom-wrapper") || Xe(pt, "custom-wrapper", [
  "width",
  "bgColor",
  "title",
  "content",
  "alignment",
  "image"
], { shadow: !1 });

