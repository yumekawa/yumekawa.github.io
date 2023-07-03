!function (e, t) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0)  : function (e) {
    if (!e.document) throw new Error('jQuery requires a window with a document');
    return t(e)
  }
   : t(e)
}('undefined' != typeof window ? window : this, function (h, e) {
  function t(e, t) {
    return t.toUpperCase()
  }
  var f = [
  ],
  c = f.slice,
  m = f.concat,
  s = f.push,
  i = f.indexOf,
  n = {
  },
  r = n.toString,
  g = n.hasOwnProperty,
  y = {
  },
  o = '1.11.1',
  w = function (e, t) {
    return new w.fn.init(e, t)
  },
  a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  l = /^-ms-/,
  u = /-([\da-z])/gi;
  function d(e) {
    var t = e.length,
    n = w.type(e);
    return 'function' !== n && !w.isWindow(e) && (!(1 !== e.nodeType || !t) || ('array' === n || 0 === t || 'number' == typeof t && 0 < t && t - 1 in e))
  }
  w.fn = w.prototype = {
    jquery: o,
    constructor: w,
    selector: '',
    length: 0,
    toArray: function () {
      return c.call(this)
    },
    get: function (e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
    },
    pushStack: function (e) {
      e = w.merge(this.constructor(), e);
      return e.prevObject = this,
      e.context = this.context,
      e
    },
    each: function (e, t) {
      return w.each(this, e, t)
    },
    map: function (n) {
      return this.pushStack(w.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(c.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq( - 1)
    },
    eq: function (e) {
      var t = this.length,
      e = + e + (e < 0 ? t : 0);
      return this.pushStack(0 <= e && e < t ? [
        this[e]
      ] : [
      ])
    },
    end: function () {
      return this.prevObject || this.constructor(null)
    },
    push: s,
    sort: f.sort,
    splice: f.splice
  },
  w.extend = w.fn.extend = function () {
    var e,
    t,
    n,
    r,
    i,
    o = arguments[0] || {
    },
    a = 1,
    s = arguments.length,
    l = !1;
    for ('boolean' == typeof o && (l = o, o = arguments[a] || {
    }, a++), 'object' == typeof o || w.isFunction(o) || (o = {
    }), a === s && (o = this, a--); a < s; a++) if (null != (r = arguments[a])) for (n in r) i = o[n],
    o !== (t = r[n]) && (l && t && (w.isPlainObject(t) || (e = w.isArray(t))) ? (i = e ? (e = !1, i && w.isArray(i) ? i : [
    ])  : i && w.isPlainObject(i) ? i : {
    }, o[n] = w.extend(l, i, t))  : void 0 !== t && (o[n] = t));
    return o
  },
  w.extend({
    expando: 'jQuery' + (o + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {
    },
    isFunction: function (e) {
      return 'function' === w.type(e)
    },
    isArray: Array.isArray || function (e) {
      return 'array' === w.type(e)
    },
    isWindow: function (e) {
      return null != e && e == e.window
    },
    isNumeric: function (e) {
      return !w.isArray(e) && 0 <= e - parseFloat(e)
    },
    isEmptyObject: function (e) {
      for (var t in e) return !1;
      return !0
    },
    isPlainObject: function (e) {
      if (!e || 'object' !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
      try {
        if (e.constructor && !g.call(e, 'constructor') && !g.call(e.constructor.prototype, 'isPrototypeOf')) return !1
      } catch (e) {
        return !1
      }
      if (y.ownLast) for (var t in e) return g.call(e, t);
      for (t in e);
      return void 0 === t || g.call(e, t)
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? n[r.call(e)] || 'object' : typeof e
    },
    globalEval: function (e) {
      e && w.trim(e) && (h.execScript || function (e) {
        h.eval.call(h, e)
      }) (e)
    },
    camelCase: function (e) {
      return e.replace(l, 'ms-').replace(u, t)
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function (e, t, n) {
      var r = 0,
      i = e.length,
      o = d(e);
      if (n) {
        if (o) for (; r < i && !1 !== t.apply(e[r], n); r++);
         else for (r in e) if (!1 === t.apply(e[r], n)) break
      } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
       else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    trim: function (e) {
      return null == e ? '' : (e + '').replace(a, '')
    },
    makeArray: function (e, t) {
      t = t || [
      ];
      return null != e && (d(Object(e)) ? w.merge(t, 'string' == typeof e ? [
        e
      ] : e)  : s.call(t, e)),
      t
    },
    inArray: function (e, t, n) {
      var r;
      if (t) {
        if (i) return i.call(t, e, n);
        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n)  : n : 0; n < r; n++) if (n in t && t[n] === e) return n
      }
      return - 1
    },
    merge: function (e, t) {
      for (var n = + t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
      if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
      return e.length = i,
      e
    },
    grep: function (e, t, n) {
      for (var r = [
      ], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var r,
      i = 0,
      o = e.length,
      a = [
      ];
      if (d(e)) for (; i < o; i++) null != (r = t(e[i], i, n)) && a.push(r);
       else for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
      return m.apply([], a)
    },
    guid: 1,
    proxy: function (e, t) {
      var n,
      r;
      if ('string' == typeof t && (r = e[t], t = e, e = r), w.isFunction(e)) return n = c.call(arguments, 2),
      (r = function () {
        return e.apply(t || this, n.concat(c.call(arguments)))
      }).guid = e.guid = e.guid || w.guid++,
      r
    },
    now: function () {
      return + new Date
    },
    support: y
  }),
  w.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    n['[object ' + t + ']'] = t.toLowerCase()
  });
  var p = function (n) {
    function f(e, t, n) {
      var r = '0x' + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r)  : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    }
    var e,
    d,
    x,
    o,
    t,
    p,
    h,
    m,
    w,
    u,
    c,
    g,
    T,
    r,
    y,
    v,
    i,
    a,
    b,
    C = 'sizzle' + - new Date,
    N = n.document,
    E = 0,
    k = 0,
    s = ie(),
    S = ie(),
    l = ie(),
    A = function (e, t) {
      return e === t && (c = !0),
      0
    },
    D = 'undefined',
    j = {
    }.hasOwnProperty,
    L = [
    ],
    H = L.pop,
    _ = L.push,
    q = L.push,
    M = L.slice,
    O = L.indexOf || function (e) {
      for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
      return - 1
    },
    F = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
    B = '[\\x20\\t\\r\\n\\f]',
    P = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
    R = P.replace('w', 'w#'),
    W = '\\[' + B + '*(' + P + ')(?:' + B + '*([*^$|!~]?=)' + B + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + R + '))|)' + B + '*\\]',
    $ = ':(' + P + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + W + ')*)|.*)\\)|)',
    z = new RegExp('^' + B + '+|((?:^|[^\\\\])(?:\\\\.)*)' + B + '+$', 'g'),
    I = new RegExp('^' + B + '*,' + B + '*'),
    X = new RegExp('^' + B + '*([>+~]|' + B + ')' + B + '*'),
    U = new RegExp('=' + B + '*([^\\]\'"]*?)' + B + '*\\]', 'g'),
    V = new RegExp($),
    J = new RegExp('^' + R + '$'),
    Y = {
      ID: new RegExp('^#(' + P + ')'),
      CLASS: new RegExp('^\\.(' + P + ')'),
      TAG: new RegExp('^(' + P.replace('w', 'w*') + ')'),
      ATTR: new RegExp('^' + W),
      PSEUDO: new RegExp('^' + $),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + B + '*(even|odd|(([+-]|)(\\d*)n|)' + B + '*(?:([+-]|)' + B + '*(\\d+)|))' + B + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + F + ')$', 'i'),
      needsContext: new RegExp('^' + B + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + B + '*((?:-\\d)?\\d*)' + B + '*\\)|)(?=[^-]|$)', 'i')
    },
    G = /^(?:input|select|textarea|button)$/i,
    Q = /^h\d$/i,
    K = /^[^{]+\{\s*\[native \w/,
    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    ee = /[+~]/,
    te = /'|\\/g,
    ne = new RegExp('\\\\([\\da-f]{1,6}' + B + '?|(' + B + ')|.)', 'ig');
    try {
      q.apply(L = M.call(N.childNodes), N.childNodes),
      L[N.childNodes.length].nodeType
    } catch (e) {
      q = {
        apply: L.length ? function (e, t) {
          _.apply(e, M.call(t))
        }
         : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++]; );
          e.length = n - 1
        }
      }
    }
    function re(e, t, n, r) {
      var i,
      o,
      a,
      s,
      l,
      u,
      c;
      if ((t ? t.ownerDocument || t : N) !== T && g(t), n = n || [
      ], !e || 'string' != typeof e) return n;
      if (1 !== (i = (t = t || T).nodeType) && 9 !== i) return [];
      if (y && !r) {
        if (u = Z.exec(e)) if (c = u[1]) {
          if (9 === i) {
            if (!(s = t.getElementById(c)) || !s.parentNode) return n;
            if (s.id === c) return n.push(s),
            n
          } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(c)) && b(t, s) && s.id === c) return n.push(s),
          n
        } else {
          if (u[2]) return q.apply(n, t.getElementsByTagName(e)),
          n;
          if ((c = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(c)),
          n
        }
        if (d.qsa && (!v || !v.test(e))) {
          if (l = s = C, u = t, c = 9 === i && e, 1 === i && 'object' !== t.nodeName.toLowerCase()) {
            for (a = p(e), (s = t.getAttribute('id')) ? l = s.replace(te, '\\$&')  : t.setAttribute('id', l), l = '[id=\'' + l + '\'] ', o = a.length; o--; ) a[o] = l + de(a[o]);
            u = ee.test(e) && ce(t.parentNode) || t,
            c = a.join(',')
          }
          if (c) try {
            return q.apply(n, u.querySelectorAll(c)),
            n
          } catch (e) {
          } finally {
            s || t.removeAttribute('id')
          }
        }
      }
      return m(e.replace(z, '$1'), t, n, r)
    }
    function ie() {
      var n = [
      ];
      function r(e, t) {
        return n.push(e + ' ') > x.cacheLength && delete r[n.shift()],
        r[e + ' '] = t
      }
      return r
    }
    function oe(e) {
      return e[C] = !0,
      e
    }
    function ae(e) {
      var t = T.createElement('div');
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t)
      }
    }
    function se(e, t) {
      for (var n = e.split('|'), r = e.length; r--; ) x.attrHandle[n[r]] = t
    }
    function le(e, t) {
      var n = t && e,
      r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (r) return r;
      if (n) for (; n = n.nextSibling; ) if (n === t) return - 1;
      return e ? 1 : - 1
    }
    function ue(a) {
      return oe(function (o) {
        return o = + o,
        oe(function (e, t) {
          for (var n, r = a([], e.length, o), i = r.length; i--; ) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }
    function ce(e) {
      return e && typeof e.getElementsByTagName !== D && e
    }
    for (e in d = re.support = {
    }, t = re.isXML = function (e) {
      e = e && (e.ownerDocument || e).documentElement;
      return !!e && 'HTML' !== e.nodeName
    }, g = re.setDocument = function (e) {
      var l = e ? e.ownerDocument || e : N,
      e = l.defaultView;
      return l !== T && 9 === l.nodeType && l.documentElement ? (r = (T = l).documentElement, y = !t(l), e && e !== e.top && (e.addEventListener ? e.addEventListener('unload', function () {
        g()
      }, !1)  : e.attachEvent && e.attachEvent('onunload', function () {
        g()
      })), d.attributes = ae(function (e) {
        return e.className = 'i',
        !e.getAttribute('className')
      }), d.getElementsByTagName = ae(function (e) {
        return e.appendChild(l.createComment('')),
        !e.getElementsByTagName('*').length
      }), d.getElementsByClassName = K.test(l.getElementsByClassName) && ae(function (e) {
        return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>',
        e.firstChild.className = 'i',
        2 === e.getElementsByClassName('i').length
      }), d.getById = ae(function (e) {
        return r.appendChild(e).id = C,
        !l.getElementsByName || !l.getElementsByName(C).length
      }), d.getById ? (x.find.ID = function (e, t) {
        if (typeof t.getElementById !== D && y) {
          e = t.getElementById(e);
          return e && e.parentNode ? [
            e
          ] : [
          ]
        }
      }, x.filter.ID = function (e) {
        var t = e.replace(ne, f);
        return function (e) {
          return e.getAttribute('id') === t
        }
      })  : (delete x.find.ID, x.filter.ID = function (e) {
        var t = e.replace(ne, f);
        return function (e) {
          e = typeof e.getAttributeNode !== D && e.getAttributeNode('id');
          return e && e.value === t
        }
      }), x.find.TAG = d.getElementsByTagName ? function (e, t) {
        if (typeof t.getElementsByTagName !== D) return t.getElementsByTagName(e)
      }
       : function (e, t) {
        var n,
        r = [
        ],
        i = 0,
        o = t.getElementsByTagName(e);
        if ('*' !== e) return o;
        for (; n = o[i++]; ) 1 === n.nodeType && r.push(n);
        return r
      }, x.find.CLASS = d.getElementsByClassName && function (e, t) {
        if (typeof t.getElementsByClassName !== D && y) return t.getElementsByClassName(e)
      }, i = [
      ], v = [
      ], (d.qsa = K.test(l.querySelectorAll)) && (ae(function (e) {
        e.innerHTML = '<select msallowclip=\'\'><option selected=\'\'></option></select>',
        e.querySelectorAll('[msallowclip^=\'\']').length && v.push('[*^$]=' + B + '*(?:\'\'|"")'),
        e.querySelectorAll('[selected]').length || v.push('\\[' + B + '*(?:value|' + F + ')'),
        e.querySelectorAll(':checked').length || v.push(':checked')
      }), ae(function (e) {
        var t = l.createElement('input');
        t.setAttribute('type', 'hidden'),
        e.appendChild(t).setAttribute('name', 'D'),
        e.querySelectorAll('[name=d]').length && v.push('name' + B + '*[*^$|!~]?='),
        e.querySelectorAll(':enabled').length || v.push(':enabled', ':disabled'),
        e.querySelectorAll('*,:x'),
        v.push(',.*:')
      })), (d.matchesSelector = K.test(a = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ae(function (e) {
        d.disconnectedMatch = a.call(e, 'div'),
        a.call(e, '[s!=\'\']:x'),
        i.push('!=', $)
      }), v = v.length && new RegExp(v.join('|')), i = i.length && new RegExp(i.join('|')), e = K.test(r.compareDocumentPosition), b = e || K.test(r.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
        t = t && t.parentNode;
        return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t)  : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
      }
       : function (e, t) {
        if (t) for (; t = t.parentNode; ) if (t === e) return !0;
        return !1
      }, A = e ? function (e, t) {
        if (e === t) return c = !0,
        0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t)  : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === N && b(N, e) ? - 1 : t === l || t.ownerDocument === N && b(N, t) ? 1 : u ? O.call(u, e) - O.call(u, t)  : 0 : 4 & n ? - 1 : 1)
      }
       : function (e, t) {
        if (e === t) return c = !0,
        0;
        var n,
        r = 0,
        i = e.parentNode,
        o = t.parentNode,
        a = [
          e
        ],
        s = [
          t
        ];
        if (!i || !o) return e === l ? - 1 : t === l ? 1 : i ? - 1 : o ? 1 : u ? O.call(u, e) - O.call(u, t)  : 0;
        if (i === o) return le(e, t);
        for (n = e; n = n.parentNode; ) a.unshift(n);
        for (n = t; n = n.parentNode; ) s.unshift(n);
        for (; a[r] === s[r]; ) r++;
        return r ? le(a[r], s[r])  : a[r] === N ? - 1 : s[r] === N ? 1 : 0
      }, l)  : T
    }, re.matches = function (e, t) {
      return re(e, null, null, t)
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== T && g(e), t = t.replace(U, '=\'$1\']'), d.matchesSelector && y && (!i || !i.test(t)) && (!v || !v.test(t))) try {
        var n = a.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
      }
      return 0 < re(t, T, null, [
        e
      ]).length
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== T && g(e),
      b(e, t)
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== T && g(e);
      var n = x.attrHandle[t.toLowerCase()],
      n = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !y)  : void 0;
      return void 0 !== n ? n : d.attributes || !y ? e.getAttribute(t)  : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
    }, re.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }, re.uniqueSort = function (e) {
      var t,
      n = [
      ],
      r = 0,
      i = 0;
      if (c = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(A), c) {
        for (; t = e[i++]; ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1)
      }
      return u = null,
      e
    }, o = re.getText = function (e) {
      var t,
      n = '',
      r = 0,
      i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else for (; t = e[r++]; ) n += o(t);
      return n
    }, (x = re.selectors = {
      cacheLength: 50,
      createPseudo: oe,
      match: Y,
      attrHandle: {
      },
      find: {
      },
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(ne, f),
          e[3] = (e[3] || e[4] || e[5] || '').replace(ne, f),
          '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
          e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(),
          'nth' === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = + (e[4] ? e[5] + (e[6] || 1)  : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = + (e[7] + e[8] || 'odd' === e[3]))  : e[3] && re.error(e[0]),
          e
        },
        PSEUDO: function (e) {
          var t,
          n = !e[6] && e[2];
          return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && V.test(n) && (t = p(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ne, f).toLowerCase();
          return '*' === e ? function () {
            return !0
          }
           : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function (e) {
          var t = s[e + ' '];
          return t || (t = new RegExp('(^|' + B + ')' + e + '(' + B + '|$)')) && s(e, function (e) {
            return t.test('string' == typeof e.className && e.className || typeof e.getAttribute !== D && e.getAttribute('class') || '')
          })
        },
        ATTR: function (t, n, r) {
          return function (e) {
            e = re.attr(e, t);
            return null == e ? '!=' === n : !n || (e += '', '=' === n ? e === r : '!=' === n ? e !== r : '^=' === n ? r && 0 === e.indexOf(r)  : '*=' === n ? r && - 1 < e.indexOf(r)  : '$=' === n ? r && e.slice( - r.length) === r : '~=' === n ? - 1 < (' ' + e + ' ').indexOf(r)  : '|=' === n && (e === r || e.slice(0, r.length + 1) === r + '-'))
          }
        },
        CHILD: function (p, e, t, h, m) {
          var g = 'nth' !== p.slice(0, 3),
          y = 'last' !== p.slice( - 4),
          v = 'of-type' === e;
          return 1 === h && 0 === m ? function (e) {
            return !!e.parentNode
          }
           : function (e, t, n) {
            var r,
            i,
            o,
            a,
            s,
            l,
            u = g != y ? 'nextSibling' : 'previousSibling',
            c = e.parentNode,
            f = v && e.nodeName.toLowerCase(),
            d = !n && !v;
            if (c) {
              if (g) {
                for (; u; ) {
                  for (o = e; o = o[u]; ) if (v ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                  l = u = 'only' === p && !l && 'nextSibling'
                }
                return !0
              }
              if (l = [
                y ? c.firstChild : c.lastChild
              ], y && d) {
                for (s = (r = (i = c[C] || (c[C] = {
                })) [p] || [
                ]) [0] === E && r[1], a = r[0] === E && r[2], o = s && c.childNodes[s]; o = ++s && o && o[u] || (a = s = 0) || l.pop(); ) if (1 === o.nodeType && ++a && o === e) {
                  i[p] = [
                    E,
                    s,
                    a
                  ];
                  break
                }
              } else if (d && (r = (e[C] || (e[C] = {
              })) [p]) && r[0] === E) a = r[1];
               else for (; (o = ++s && o && o[u] || (a = s = 0) || l.pop()) && ((v ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++a || (d && ((o[C] || (o[C] = {
              })) [p] = [
                E,
                a
              ]), o !== e)); );
              return (a -= m) === h || a % h == 0 && 0 <= a / h
            }
          }
        },
        PSEUDO: function (e, o) {
          var t,
          a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || re.error('unsupported pseudo: ' + e);
          return a[C] ? a(o)  : 1 < a.length ? (t = [
            e,
            e,
            '',
            o
          ], x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
            for (var n, r = a(e, o), i = r.length; i--; ) e[n = O.call(e, r[i])] = !(t[n] = r[i])
          })  : function (e) {
            return a(e, 0, t)
          })  : a
        }
      },
      pseudos: {
        not: oe(function (e) {
          var r = [
          ],
          i = [
          ],
          s = h(e.replace(z, '$1'));
          return s[C] ? oe(function (e, t, n, r) {
            for (var i, o = s(e, null, r, [
            ]), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i))
          })  : function (e, t, n) {
            return r[0] = e,
            s(r, null, n, i),
            !i.pop()
          }
        }),
        has: oe(function (t) {
          return function (e) {
            return 0 < re(t, e).length
          }
        }),
        contains: oe(function (t) {
          return function (e) {
            return - 1 < (e.textContent || e.innerText || o(e)).indexOf(t)
          }
        }),
        lang: oe(function (n) {
          return J.test(n || '') || re.error('unsupported lang: ' + n),
          n = n.replace(ne, f).toLowerCase(),
          function (e) {
            var t;
            do {
              if (t = y ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        },
        root: function (e) {
          return e === r
        },
        focus: function (e) {
          return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function (e) {
          return !1 === e.disabled
        },
        disabled: function (e) {
          return !0 === e.disabled
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex,
          !0 === e.selected
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function (e) {
          return !x.pseudos.empty(e)
        },
        header: function (e) {
          return Q.test(e.nodeName)
        },
        input: function (e) {
          return G.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t
        },
        text: function (e) {
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (e = e.getAttribute('type')) || 'text' === e.toLowerCase())
        },
        first: ue(function () {
          return [0]
        }),
        last: ue(function (e, t) {
          return [t - 1]
        }),
        eq: ue(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: ue(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: ue(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: ue(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
          return e
        }),
        gt: ue(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e
        })
      }
    }).pseudos.nth = x.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) x.pseudos[e] = function (t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t
      }
    }(e);
    for (e in {
      submit: !0,
      reset: !0
    }) x.pseudos[e] = function (n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n
      }
    }(e);
    function fe() {
    }
    function de(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r
    }
    function pe(a, e, t) {
      var s = e.dir,
      l = t && 'parentNode' === s,
      u = k++;
      return e.first ? function (e, t, n) {
        for (; e = e[s]; ) if (1 === e.nodeType || l) return a(e, t, n)
      }
       : function (e, t, n) {
        var r,
        i,
        o = [
          E,
          u
        ];
        if (n) {
          for (; e = e[s]; ) if ((1 === e.nodeType || l) && a(e, t, n)) return !0
        } else for (; e = e[s]; ) if (1 === e.nodeType || l) {
          if ((r = (i = e[C] || (e[C] = {
          })) [s]) && r[0] === E && r[1] === u) return o[2] = r[2];
          if ((i[s] = o) [2] = a(e, t, n)) return !0
        }
      }
    }
    function he(i) {
      return 1 < i.length ? function (e, t, n) {
        for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
        return !0
      }
       : i[0]
    }
    function me(e, t, n, r, i) {
      for (var o, a = [
      ], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
      return a
    }
    function ge(p, h, m, g, y, e) {
      return g && !g[C] && (g = ge(g)),
      y && !y[C] && (y = ge(y, e)),
      oe(function (e, t, n, r) {
        var i,
        o,
        a,
        s = [
        ],
        l = [
        ],
        u = t.length,
        c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
          return n
        }(h || '*', n.nodeType ? [
          n
        ] : n, [
        ]),
        f = !p || !e && h ? c : me(c, s, p, n, r),
        d = m ? y || (e ? p : u || g) ? [
        ] : t : f;
        if (m && m(f, d, n, r), g) for (i = me(d, l), g(i, [
        ], n, r), o = i.length; o--; ) (a = i[o]) && (d[l[o]] = !(f[l[o]] = a));
        if (e) {
          if (y || p) {
            if (y) {
              for (i = [
              ], o = d.length; o--; ) (a = d[o]) && i.push(f[o] = a);
              y(null, d = [
              ], i, r)
            }
            for (o = d.length; o--; ) (a = d[o]) && - 1 < (i = y ? O.call(e, a)  : s[o]) && (e[i] = !(t[i] = a))
          }
        } else d = me(d === t ? d.splice(u, d.length)  : d),
        y ? y(null, t, d, r)  : q.apply(t, d)
      })
    }
    function ye(g, y) {
      function e(e, t, n, r, i) {
        var o,
        a,
        s,
        l = 0,
        u = '0',
        c = e && [
        ],
        f = [
        ],
        d = w,
        p = e || b && x.find.TAG('*', i),
        h = E += null == d ? 1 : Math.random() || 0.1,
        m = p.length;
        for (i && (w = t !== T && t); u !== m && null != (o = p[u]); u++) {
          if (b && o) {
            for (a = 0; s = g[a++]; ) if (s(o, t, n)) {
              r.push(o);
              break
            }
            i && (E = h)
          }
          v && ((o = !s && o) && l--, e && c.push(o))
        }
        if (l += u, v && u !== l) {
          for (a = 0; s = y[a++]; ) s(c, f, t, n);
          if (e) {
            if (0 < l) for (; u--; ) c[u] || f[u] || (f[u] = H.call(r));
            f = me(f)
          }
          q.apply(r, f),
          i && !e && 0 < f.length && 1 < l + y.length && re.uniqueSort(r)
        }
        return i && (E = h, w = d),
        c
      }
      var v = 0 < y.length,
      b = 0 < g.length;
      return v ? oe(e)  : e
    }
    return fe.prototype = x.filters = x.pseudos,
    x.setFilters = new fe,
    p = re.tokenize = function (e, t) {
      var n,
      r,
      i,
      o,
      a,
      s,
      l,
      u = S[e + ' '];
      if (u) return t ? 0 : u.slice(0);
      for (a = e, s = [
      ], l = x.preFilter; a; ) {
        for (o in n && !(r = I.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [
        ])), n = !1, (r = X.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(z, ' ')
        }), a = a.slice(n.length)), x.filter) !(r = Y[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? re.error(e)  : S(e, s).slice(0)
    },
    h = re.compile = function (e, t) {
      var n,
      r = [
      ],
      i = [
      ],
      o = l[e + ' '];
      if (!o) {
        for (n = (t = t || p(e)).length; n--; ) ((o = function e(t) {
          for (var r, n, i, o = t.length, a = x.relative[t[0].type], s = a || x.relative[' '], l = a ? 1 : 0, u = pe(function (e) {
            return e === r
          }, s, !0), c = pe(function (e) {
            return - 1 < O.call(r, e)
          }, s, !0), f = [
            function (e, t, n) {
              return !a && (n || t !== w) || ((r = t).nodeType ? u : c) (e, t, n)
            }
          ]; l < o; l++) if (n = x.relative[t[l].type]) f = [
            pe(he(f), n)
          ];
           else {
            if ((n = x.filter[t[l].type].apply(null, t[l].matches)) [C]) {
              for (i = ++l; i < o && !x.relative[t[i].type]; i++);
              return ge(1 < l && he(f), 1 < l && de(t.slice(0, l - 1).concat({
                value: ' ' === t[l - 2].type ? '*' : ''
              })).replace(z, '$1'), n, l < i && e(t.slice(l, i)), i < o && e(t = t.slice(i)), i < o && de(t))
            }
            f.push(n)
          }
          return he(f)
        }(t[n])) [C] ? r : i).push(o);
        (o = l(e, ye(i, r))).selector = e
      }
      return o
    },
    m = re.select = function (e, t, n, r) {
      var i,
      o,
      a,
      s,
      l,
      u = 'function' == typeof e && e,
      c = !r && p(e = u.selector || e);
      if (n = n || [
      ], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && 'ID' === (a = o[0]).type && d.getById && 9 === t.nodeType && y && x.relative[o[1].type]) {
          if (!(t = (x.find.ID(a.matches[0].replace(ne, f), t) || [
          ]) [0])) return n;
          u && (t = t.parentNode),
          e = e.slice(o.shift().value.length)
        }
        for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]); ) if ((l = x.find[s]) && (r = l(a.matches[0].replace(ne, f), ee.test(o[0].type) && ce(t.parentNode) || t))) {
          if (o.splice(i, 1), !(e = r.length && de(o))) return q.apply(n, r),
          n;
          break
        }
      }
      return (u || h(e, c)) (r, t, !y, n, ee.test(e) && ce(t.parentNode) || t),
      n
    },
    d.sortStable = C.split('').sort(A).join('') === C,
    d.detectDuplicates = !!c,
    g(),
    d.sortDetached = ae(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement('div'))
    }),
    ae(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>',
      '#' === e.firstChild.getAttribute('href')
    }) || se('type|href|height|width', function (e, t, n) {
      if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
    }),
    d.attributes && ae(function (e) {
      return e.innerHTML = '<input/>',
      e.firstChild.setAttribute('value', ''),
      '' === e.firstChild.getAttribute('value')
    }) || se('value', function (e, t, n) {
      if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
    }),
    ae(function (e) {
      return null == e.getAttribute('disabled')
    }) || se(F, function (e, t, n) {
      if (!n) return !0 === e[t] ? t.toLowerCase()  : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
    }),
    re
  }(h);
  w.find = p,
  w.expr = p.selectors,
  w.expr[':'] = w.expr.pseudos,
  w.unique = p.uniqueSort,
  w.text = p.getText,
  w.isXMLDoc = p.isXML,
  w.contains = p.contains;
  var v = w.expr.match.needsContext,
  b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  x = /^.[^:#\[\.,]*$/;
  function T(e, n, r) {
    if (w.isFunction(n)) return w.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    });
    if (n.nodeType) return w.grep(e, function (e) {
      return e === n !== r
    });
    if ('string' == typeof n) {
      if (x.test(n)) return w.filter(n, e, r);
      n = w.filter(n, e)
    }
    return w.grep(e, function (e) {
      return 0 <= w.inArray(e, n) !== r
    })
  }
  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ':not(' + e + ')'),
    1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [
      r
    ] : [
    ] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  },
  w.fn.extend({
    find: function (e) {
      var t,
      n = [
      ],
      r = this,
      i = r.length;
      if ('string' != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0
      }));
      for (t = 0; t < i; t++) w.find(e, r[t], n);
      return (n = this.pushStack(1 < i ? w.unique(n)  : n)).selector = this.selector ? this.selector + ' ' + e : e,
      n
    },
    filter: function (e) {
      return this.pushStack(T(this, e || [
      ], !1))
    },
    not: function (e) {
      return this.pushStack(T(this, e || [
      ], !0))
    },
    is: function (e) {
      return !!T(this, 'string' == typeof e && v.test(e) ? w(e)  : e || [
      ], !1).length
    }
  });
  var C = h.document,
  N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (w.fn.init = function (e, t) {
    var n,
    r;
    if (!e) return this;
    if ('string' != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this)  : w.isFunction(e) ? void 0 !== E.ready ? E.ready(e)  : e(w)  : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this));
    if (!(n = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && 3 <= e.length ? [
      null,
      e,
      null
    ] : N.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || E : this.constructor(t)).find(e);
    if (n[1]) {
      if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), b.test(n[1]) && w.isPlainObject(t)) for (n in t) w.isFunction(this[n]) ? this[n](t[n])  : this.attr(n, t[n]);
      return this
    }
    if ((r = C.getElementById(n[2])) && r.parentNode) {
      if (r.id !== n[2]) return E.find(e);
      this.length = 1,
      this[0] = r
    }
    return this.context = C,
    this.selector = e,
    this
  }).prototype = w.fn;
  var E = w(C),
  k = /^(?:parents|prev(?:Until|All))/,
  S = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  function A(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e
  }
  w.extend({
    dir: function (e, t, n) {
      for (var r = [
      ], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !w(i).is(n)); ) 1 === i.nodeType && r.push(i),
      i = i[t];
      return r
    },
    sibling: function (e, t) {
      for (var n = [
      ]; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }),
  w.fn.extend({
    has: function (e) {
      var t,
      n = w(e, this),
      r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) if (w.contains(this, n[t])) return !0
      })
    },
    closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [
      ], a = v.test(e) || 'string' != typeof e ? w(e, t || this.context)  : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? - 1 < a.index(n)  : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(1 < o.length ? w.unique(o)  : o)
    },
    index: function (e) {
      return e ? 'string' == typeof e ? w.inArray(this[0], w(e))  : w.inArray(e.jquery ? e[0] : e, this)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
    },
    add: function (e, t) {
      return this.pushStack(w.unique(w.merge(this.get(), w(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
  w.each({
    parent: function (e) {
      e = e.parentNode;
      return e && 11 !== e.nodeType ? e : null
    },
    parents: function (e) {
      return w.dir(e, 'parentNode')
    },
    parentsUntil: function (e, t, n) {
      return w.dir(e, 'parentNode', n)
    },
    next: function (e) {
      return A(e, 'nextSibling')
    },
    prev: function (e) {
      return A(e, 'previousSibling')
    },
    nextAll: function (e) {
      return w.dir(e, 'nextSibling')
    },
    prevAll: function (e) {
      return w.dir(e, 'previousSibling')
    },
    nextUntil: function (e, t, n) {
      return w.dir(e, 'nextSibling', n)
    },
    prevUntil: function (e, t, n) {
      return w.dir(e, 'previousSibling', n)
    },
    siblings: function (e) {
      return w.sibling((e.parentNode || {
      }).firstChild, e)
    },
    children: function (e) {
      return w.sibling(e.firstChild)
    },
    contents: function (e) {
      return w.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
    }
  }, function (r, i) {
    w.fn[r] = function (e, t) {
      var n = w.map(this, i, e);
      return (t = 'Until' !== r.slice( - 5) ? e : t) && 'string' == typeof t && (n = w.filter(t, n)),
      1 < this.length && (S[r] || (n = w.unique(n)), k.test(r) && (n = n.reverse())),
      this.pushStack(n)
    }
  });
  var D,
  j = /\S+/g,
  L = {
  };
  function H() {
    C.addEventListener ? (C.removeEventListener('DOMContentLoaded', _, !1), h.removeEventListener('load', _, !1))  : (C.detachEvent('onreadystatechange', _), h.detachEvent('onload', _))
  }
  function _() {
    !C.addEventListener && 'load' !== event.type && 'complete' !== C.readyState || (H(), w.ready())
  }
  w.Callbacks = function (i) {
    var e,
    n;
    i = 'string' == typeof i ? L[i] || (n = L[e = i] = {
    }, w.each(e.match(j) || [
    ], function (e, t) {
      n[t] = !0
    }), n)  : w.extend({
    }, i);
    var r,
    t,
    o,
    a,
    s,
    l,
    u = [
    ],
    c = !i.once && [
    ],
    f = function (e) {
      for (t = i.memory && e, o = !0, s = l || 0, l = 0, a = u.length, r = !0; u && s < a; s++) if (!1 === u[s].apply(e[0], e[1]) && i.stopOnFalse) {
        t = !1;
        break
      }
      r = !1,
      u && (c ? c.length && f(c.shift())  : t ? u = [
      ] : d.disable())
    },
    d = {
      add: function () {
        var e;
        return u && (e = u.length, function r(e) {
          w.each(e, function (e, t) {
            var n = w.type(t);
            'function' === n ? i.unique && d.has(t) || u.push(t)  : t && t.length && 'string' !== n && r(t)
          })
        }(arguments), r ? a = u.length : t && (l = e, f(t))),
        this
      },
      remove: function () {
        return u && w.each(arguments, function (e, t) {
          for (var n; - 1 < (n = w.inArray(t, u, n)); ) u.splice(n, 1),
          r && (n <= a && a--, n <= s && s--)
        }),
        this
      },
      has: function (e) {
        return e ? - 1 < w.inArray(e, u)  : !(!u || !u.length)
      },
      empty: function () {
        return u = [
        ],
        a = 0,
        this
      },
      disable: function () {
        return u = c = t = void 0,
        this
      },
      disabled: function () {
        return !u
      },
      lock: function () {
        return c = void 0,
        t || d.disable(),
        this
      },
      locked: function () {
        return !c
      },
      fireWith: function (e, t) {
        return !u || o && !c || (t = [
          e,
          (t = t || [
          ]).slice ? t.slice()  : t
        ], r ? c.push(t)  : f(t)),
        this
      },
      fire: function () {
        return d.fireWith(this, arguments),
        this
      },
      fired: function () {
        return !!o
      }
    };
    return d
  },
  w.extend({
    Deferred: function (e) {
      var o = [
        ['resolve',
        'done',
        w.Callbacks('once memory'),
        'resolved'],
        [
          'reject',
          'fail',
          w.Callbacks('once memory'),
          'rejected'
        ],
        [
          'notify',
          'progress',
          w.Callbacks('memory')
        ]
      ],
      i = 'pending',
      a = {
        state: function () {
          return i
        },
        always: function () {
          return s.done(arguments).fail(arguments),
          this
        },
        then: function () {
          var i = arguments;
          return w.Deferred(function (r) {
            w.each(o, function (e, t) {
              var n = w.isFunction(i[e]) && i[e];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && w.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify)  : r[t[0] + 'With'](this === a ? r.promise()  : this, n ? [
                  e
                ] : arguments)
              })
            }),
            i = null
          }).promise()
        },
        promise: function (e) {
          return null != e ? w.extend(e, a)  : a
        }
      },
      s = {
      };
      return a.pipe = a.then,
      w.each(o, function (e, t) {
        var n = t[2],
        r = t[3];
        a[t[1]] = n.add,
        r && n.add(function () {
          i = r
        }, o[1 ^ e][2].disable, o[2][2].lock),
        s[t[0]] = function () {
          return s[t[0] + 'With'](this === s ? a : this, arguments),
          this
        },
        s[t[0] + 'With'] = n.fireWith
      }),
      a.promise(s),
      e && e.call(s, s),
      s
    },
    when: function (e) {
      function t(t, n, r) {
        return function (e) {
          n[t] = this,
          r[t] = 1 < arguments.length ? c.call(arguments)  : e,
          r === i ? u.notifyWith(n, r)  : --l || u.resolveWith(n, r)
        }
      }
      var i,
      n,
      r,
      o = 0,
      a = c.call(arguments),
      s = a.length,
      l = 1 !== s || e && w.isFunction(e.promise) ? s : 0,
      u = 1 === l ? e : w.Deferred();
      if (1 < s) for (i = new Array(s), n = new Array(s), r = new Array(s); o < s; o++) a[o] && w.isFunction(a[o].promise) ? a[o].promise().done(t(o, r, a)).fail(u.reject).progress(t(o, n, i))  : --l;
      return l || u.resolveWith(r, a),
      u.promise()
    }
  }),
  w.fn.ready = function (e) {
    return w.ready.promise().done(e),
    this
  },
  w.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? w.readyWait++ : w.ready(!0)
    },
    ready: function (e) {
      if (!0 === e ? !--w.readyWait : !w.isReady) {
        if (!C.body) return setTimeout(w.ready);
        (w.isReady = !0) !== e && 0 < --w.readyWait || (D.resolveWith(C, [
          w
        ]), w.fn.triggerHandler && (w(C).triggerHandler('ready'), w(C).off('ready')))
      }
    }
  }),
  w.ready.promise = function (e) {
    if (!D) if (D = w.Deferred(), 'complete' === C.readyState) setTimeout(w.ready);
     else if (C.addEventListener) C.addEventListener('DOMContentLoaded', _, !1),
    h.addEventListener('load', _, !1);
     else {
      C.attachEvent('onreadystatechange', _),
      h.attachEvent('onload', _);
      var n = !1;
      try {
        n = null == h.frameElement && C.documentElement
      } catch (e) {
      }
      n && n.doScroll && !function t() {
        if (!w.isReady) {
          try {
            n.doScroll('left')
          } catch (e) {
            return setTimeout(t, 50)
          }
          H(),
          w.ready()
        }
      }()
    }
    return D.promise(e)
  };
  var q,
  M = 'undefined';
  for (q in w(y)) break;
  y.ownLast = '0' !== q,
  y.inlineBlockNeedsLayout = !1,
  w(function () {
    var e,
    t,
    n = C.getElementsByTagName('body') [0];
    n && n.style && (e = C.createElement('div'), (t = C.createElement('div')).style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(t).appendChild(e), typeof e.style.zoom !== M && (e.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', y.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(t))
  }),
  function () {
    var e = C.createElement('div');
    if (null == y.deleteExpando) {
      y.deleteExpando = !0;
      try {
        delete e.test
      } catch (e) {
        y.deleteExpando = !1
      }
    }
  }(),
  w.acceptData = function (e) {
    var t = w.noData[(e.nodeName + ' ').toLowerCase()],
    n = + e.nodeType || 1;
    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute('classid') === t)
  };
  var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  F = /([A-Z])/g;
  function B(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = 'data-' + t.replace(F, '-$1').toLowerCase();
      if ('string' == typeof (n = e.getAttribute(r))) {
        try {
          n = 'true' === n || 'false' !== n && ('null' === n ? null : + n + '' === n ? + n : O.test(n) ? w.parseJSON(n)  : n)
        } catch (e) {
        }
        w.data(e, t, n)
      } else n = void 0
    }
    return n
  }
  function P(e) {
    for (var t in e) if (('data' !== t || !w.isEmptyObject(e[t])) && 'toJSON' !== t) return;
    return 1
  }
  function R(e, t, n, r) {
    if (w.acceptData(e)) {
      var i,
      o = w.expando,
      a = e.nodeType,
      s = a ? w.cache : e,
      l = a ? e[o] : e[o] && o;
      if (l && s[l] && (r || s[l].data) || void 0 !== n || 'string' != typeof t) return s[l = l || (a ? e[o] = f.pop() || w.guid++ : o)] || (s[l] = a ? {
      }
       : {
        toJSON: w.noop
      }),
      'object' != typeof t && 'function' != typeof t || (r ? s[l] = w.extend(s[l], t)  : s[l].data = w.extend(s[l].data, t)),
      l = s[l],
      r || (l.data || (l.data = {
      }), l = l.data),
      void 0 !== n && (l[w.camelCase(t)] = n),
      'string' == typeof t ? null == (i = l[t]) && (i = l[w.camelCase(t)])  : i = l,
      i
    }
  }
  function W(e, t, n) {
    if (w.acceptData(e)) {
      var r,
      i,
      o = e.nodeType,
      a = o ? w.cache : e,
      s = o ? e[w.expando] : w.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          i = (t = w.isArray(t) ? t.concat(w.map(t, w.camelCase))  : t in r || (t = w.camelCase(t)) in r ? [
            t
          ] : t.split(' ')).length;
          for (; i--; ) delete r[t[i]];
          if (n ? !P(r)  : !w.isEmptyObject(r)) return
        }(n || (delete a[s].data, P(a[s]))) && (o ? w.cleanData([e], !0)  : y.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
      }
    }
  }
  w.extend({
    cache: {
    },
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (e) {
      return !!(e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando]) && !P(e)
    },
    data: function (e, t, n) {
      return R(e, t, n)
    },
    removeData: function (e, t) {
      return W(e, t)
    },
    _data: function (e, t, n) {
      return R(e, t, n, !0)
    },
    _removeData: function (e, t) {
      return W(e, t, !0)
    }
  }),
  w.fn.extend({
    data: function (e, t) {
      var n,
      r,
      i,
      o = this[0],
      a = o && o.attributes;
      if (void 0 !== e) return 'object' == typeof e ? this.each(function () {
        w.data(this, e)
      })  : 1 < arguments.length ? this.each(function () {
        w.data(this, e, t)
      })  : o ? B(o, e, w.data(o, e))  : void 0;
      if (this.length && (i = w.data(o), 1 === o.nodeType && !w._data(o, 'parsedAttrs'))) {
        for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf('data-') && B(o, r = w.camelCase(r.slice(5)), i[r]);
        w._data(o, 'parsedAttrs', !0)
      }
      return i
    },
    removeData: function (e) {
      return this.each(function () {
        w.removeData(this, e)
      })
    }
  }),
  w.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return r = w._data(e, t = (t || 'fx') + 'queue'),
      n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n))  : r.push(n)),
      r || [
      ]
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = w.queue(e, t),
      r = n.length,
      i = n.shift(),
      o = w._queueHooks(e, t);
      'inprogress' === i && (i = n.shift(), r--),
      i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, function () {
        w.dequeue(e, t)
      }, o)),
      !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return w._data(e, n) || w._data(e, n, {
        empty: w.Callbacks('once memory').add(function () {
          w._removeData(e, t + 'queue'),
          w._removeData(e, n)
        })
      })
    }
  }),
  w.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return 'string' != typeof t && (n = t, t = 'fx', e--),
      arguments.length < e ? w.queue(this[0], t)  : void 0 === n ? this : this.each(function () {
        var e = w.queue(this, t, n);
        w._queueHooks(this, t),
        'fx' === t && 'inprogress' !== e[0] && w.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        w.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', [
      ])
    },
    promise: function (e, t) {
      function n() {
        --i || o.resolveWith(a, [
          a
        ])
      }
      var r,
      i = 1,
      o = w.Deferred(),
      a = this,
      s = this.length;
      for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; s--; ) (r = w._data(a[s], e + 'queueHooks')) && r.empty && (i++, r.empty.add(n));
      return n(),
      o.promise(t)
    }
  });
  function $(e, t) {
    return 'none' === w.css(e = t || e, 'display') || !w.contains(e.ownerDocument, e)
  }
  var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  I = [
    'Top',
    'Right',
    'Bottom',
    'Left'
  ],
  X = w.access = function (e, t, n, r, i, o, a) {
    var s = 0,
    l = e.length,
    u = null == n;
    if ('object' === w.type(n)) for (s in i = !0, n) w.access(e, t, s, n[s], !0, o, a);
     else if (void 0 !== r && (i = !0, w.isFunction(r) || (a = !0), t = u ? a ? (t.call(e, r), null)  : (u = t, function (e, t, n) {
      return u.call(w(e), n)
    })  : t)) for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : u ? t.call(e)  : l ? t(e[0], n)  : o
  },
  U = /^(?:checkbox|radio)$/i;
  !function () {
    var e = C.createElement('input'),
    t = C.createElement('div'),
    n = C.createDocumentFragment();
    if (t.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', y.leadingWhitespace = 3 === t.firstChild.nodeType, y.tbody = !t.getElementsByTagName('tbody').length, y.htmlSerialize = !!t.getElementsByTagName('link').length, y.html5Clone = '<:nav></:nav>' !== C.createElement('nav').cloneNode(!0).outerHTML, e.type = 'checkbox', e.checked = !0, n.appendChild(e), y.appendChecked = e.checked, t.innerHTML = '<textarea>x</textarea>', y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>', y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, y.noCloneEvent = !0, t.attachEvent && (t.attachEvent('onclick', function () {
      y.noCloneEvent = !1
    }), t.cloneNode(!0).click()), null == y.deleteExpando) {
      y.deleteExpando = !0;
      try {
        delete t.test
      } catch (e) {
        y.deleteExpando = !1
      }
    }
  }(),
  function () {
    var e,
    t,
    n = C.createElement('div');
    for (e in {
      submit: !0,
      change: !0,
      focusin: !0
    }) (y[e + 'Bubbles'] = (t = 'on' + e) in h) || (n.setAttribute(t, 't'), y[e + 'Bubbles'] = !1 === n.attributes[t].expando)
  }();
  var V = /^(?:input|select|textarea)$/i,
  J = /^key/,
  Y = /^(?:mouse|pointer|contextmenu)|click/,
  G = /^(?:focusinfocus|focusoutblur)$/,
  Q = /^([^.]*)(?:\.(.+)|)$/;
  function K() {
    return !0
  }
  function Z() {
    return !1
  }
  function ee() {
    try {
      return C.activeElement
    } catch (e) {
    }
  }
  function te(e) {
    var t = ne.split('|'),
    n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n
  }
  w.event = {
    global: {
    },
    add: function (e, t, n, r, i) {
      var o,
      a,
      s,
      l,
      u,
      c,
      f,
      d,
      p,
      h = w._data(e);
      if (h) for (n.handler && (n = (s = n).handler, i = s.selector), n.guid || (n.guid = w.guid++), (o = h.events) || (o = h.events = {
      }), (u = h.handle) || ((u = h.handle = function (e) {
        return typeof w === M || e && w.event.triggered === e.type ? void 0 : w.event.dispatch.apply(u.elem, arguments)
      }).elem = e), a = (t = (t || '').match(j) || [
        ''
      ]).length; a--; ) f = p = (c = Q.exec(t[a]) || [
      ]) [1],
      d = (c[2] || '').split('.').sort(),
      f && (l = w.event.special[f] || {
      }, f = (i ? l.delegateType : l.bindType) || f, l = w.event.special[f] || {
      }, c = w.extend({
        type: f,
        origType: p,
        data: r,
        handler: n,
        guid: n.guid,
        selector: i,
        needsContext: i && w.expr.match.needsContext.test(i),
        namespace: d.join('.')
      }, s), (p = o[f]) || ((p = o[f] = [
      ]).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, d, u) || (e.addEventListener ? e.addEventListener(f, u, !1)  : e.attachEvent && e.attachEvent('on' + f, u))), l.add && (l.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c)  : p.push(c), w.event.global[f] = !0)
    },
    remove: function (e, t, n, r, i) {
      var o,
      a,
      s,
      l,
      u,
      c,
      f,
      d,
      p,
      h,
      m,
      g = w.hasData(e) && w._data(e);
      if (g && (c = g.events)) {
        for (u = (t = (t || '').match(j) || [
          ''
        ]).length; u--; ) if (p = m = (s = Q.exec(t[u]) || [
        ]) [1], h = (s[2] || '').split('.').sort(), p) {
          for (f = w.event.special[p] || {
          }, d = c[p = (r ? f.delegateType : f.bindType) || p] || [
          ], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), l = o = d.length; o--; ) a = d[o],
          !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ('**' !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
          l && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || w.removeEvent(e, p, g.handle), delete c[p])
        } else for (p in c) w.event.remove(e, p + t[u], n, r, !0);
        w.isEmptyObject(c) && (delete g.handle, w._removeData(e, 'events'))
      }
    },
    trigger: function (e, t, n, r) {
      var i,
      o,
      a,
      s,
      l,
      u,
      c = [
        n || C
      ],
      f = g.call(e, 'type') ? e.type : e,
      d = g.call(e, 'namespace') ? e.namespace.split('.')  : [
      ],
      p = l = n = n || C;
      if (3 !== n.nodeType && 8 !== n.nodeType && !G.test(f + w.event.triggered) && (0 <= f.indexOf('.') && (f = (d = f.split('.')).shift(), d.sort()), o = f.indexOf(':') < 0 && 'on' + f, (e = e[w.expando] ? e : new w.Event(f, 'object' == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join('.'), e.namespace_re = e.namespace ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [
        e
      ] : w.makeArray(t, [
        e
      ]), s = w.event.special[f] || {
      }, r || !s.trigger || !1 !== s.trigger.apply(n, t))) {
        if (!r && !s.noBubble && !w.isWindow(n)) {
          for (a = s.delegateType || f, G.test(a + f) || (p = p.parentNode); p; p = p.parentNode) c.push(p),
          l = p;
          l === (n.ownerDocument || C) && c.push(l.defaultView || l.parentWindow || h)
        }
        for (u = 0; (p = c[u++]) && !e.isPropagationStopped(); ) e.type = 1 < u ? a : s.bindType || f,
        (i = (w._data(p, 'events') || {
        }) [e.type] && w._data(p, 'handle')) && i.apply(p, t),
        (i = o && p[o]) && i.apply && w.acceptData(p) && (e.result = i.apply(p, t), !1 === e.result && e.preventDefault());
        if (e.type = f, !r && !e.isDefaultPrevented() && (!s._default || !1 === s._default.apply(c.pop(), t)) && w.acceptData(n) && o && n[f] && !w.isWindow(n)) {
          (l = n[o]) && (n[o] = null),
          w.event.triggered = f;
          try {
            n[f]()
          } catch (e) {
          }
          w.event.triggered = void 0,
          l && (n[o] = l)
        }
        return e.result
      }
    },
    dispatch: function (e) {
      e = w.event.fix(e);
      var t,
      n,
      r,
      i,
      o,
      a = c.call(arguments),
      s = (w._data(this, 'events') || {
      }) [e.type] || [
      ],
      l = w.event.special[e.type] || {
      };
      if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (o = w.event.handlers.call(this, e, s), t = 0; (r = o[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, i = 0; (n = r.handlers[i++]) && !e.isImmediatePropagationStopped(); ) e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n, e.data = n.data, void 0 !== (n = ((w.event.special[n.origType] || {
        }).handle || n.handler).apply(r.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e),
        e.result
      }
    },
    handlers: function (e, t) {
      var n,
      r,
      i,
      o,
      a = [
      ],
      s = t.delegateCount,
      l = e.target;
      if (s && l.nodeType && (!e.button || 'click' !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || 'click' !== e.type)) {
        for (i = [
        ], o = 0; o < s; o++) void 0 === i[n = (r = t[o]).selector + ' '] && (i[n] = r.needsContext ? 0 <= w(n, this).index(l)  : w.find(n, this, null, [
          l
        ]).length),
        i[n] && i.push(r);
        i.length && a.push({
          elem: l,
          handlers: i
        })
      }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }),
      a
    },
    fix: function (e) {
      if (e[w.expando]) return e;
      var t,
      n,
      r,
      i = e.type,
      o = e,
      a = this.fixHooks[i];
      for (a || (this.fixHooks[i] = a = Y.test(i) ? this.mouseHooks : J.test(i) ? this.keyHooks : {
      }), r = a.props ? this.props.concat(a.props)  : this.props, e = new w.Event(o), t = r.length; t--; ) e[n = r[t]] = o[n];
      return e.target || (e.target = o.srcElement || C),
      3 === e.target.nodeType && (e.target = e.target.parentNode),
      e.metaKey = !!e.metaKey,
      a.filter ? a.filter(e, o)  : e
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {
    },
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
        e
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, t) {
        var n,
        r,
        i = t.button,
        o = t.fromElement;
        return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || C).documentElement, n = n.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
        !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
        e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
        e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== ee() && this.focus) try {
            return this.focus(),
            !1
          } catch (e) {
          }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === ee() && this.blur) return this.blur(),
          !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if (w.nodeName(this, 'input') && 'checkbox' === this.type && this.click) return this.click(),
          !1
        },
        _default: function (e) {
          return w.nodeName(e.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      e = w.extend(new w.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {
        }
      });
      r ? w.event.trigger(e, null, t)  : w.event.dispatch.call(t, e),
      e.isDefaultPrevented() && n.preventDefault()
    }
  },
  w.removeEvent = C.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }
   : function (e, t, n) {
    t = 'on' + t;
    e.detachEvent && (typeof e[t] === M && (e[t] = null), e.detachEvent(t, n))
  },
  w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : Z)  : this.type = e,
    t && w.extend(this, t),
    this.timeStamp = e && e.timeStamp || w.now(),
    this[w.expando] = !0
  },
  w.Event.prototype = {
    isDefaultPrevented: Z,
    isPropagationStopped: Z,
    isImmediatePropagationStopped: Z,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = K,
      e && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1)
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = K,
      e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = K,
      e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  w.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (e, i) {
    w.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
        n = e.relatedTarget,
        r = e.handleObj;
        return n && (n === this || w.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i),
        t
      }
    }
  }),
  y.submitBubbles || (w.event.special.submit = {
    setup: function () {
      if (w.nodeName(this, 'form')) return !1;
      w.event.add(this, 'click._submit keypress._submit', function (e) {
        e = e.target,
        e = w.nodeName(e, 'input') || w.nodeName(e, 'button') ? e.form : void 0;
        e && !w._data(e, 'submitBubbles') && (w.event.add(e, 'submit._submit', function (e) {
          e._submit_bubble = !0
        }), w._data(e, 'submitBubbles', !0))
      })
    },
    postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate('submit', this.parentNode, e, !0))
    },
    teardown: function () {
      if (w.nodeName(this, 'form')) return !1;
      w.event.remove(this, '._submit')
    }
  }),
  y.changeBubbles || (w.event.special.change = {
    setup: function () {
      if (V.test(this.nodeName)) return 'checkbox' !== this.type && 'radio' !== this.type || (w.event.add(this, 'propertychange._change', function (e) {
        'checked' === e.originalEvent.propertyName && (this._just_changed = !0)
      }), w.event.add(this, 'click._change', function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1),
        w.event.simulate('change', this, e, !0)
      })),
      !1;
      w.event.add(this, 'beforeactivate._change', function (e) {
        e = e.target;
        V.test(e.nodeName) && !w._data(e, 'changeBubbles') && (w.event.add(e, 'change._change', function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || w.event.simulate('change', this.parentNode, e, !0)
        }), w._data(e, 'changeBubbles', !0))
      })
    },
    handle: function (e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || 'radio' !== t.type && 'checkbox' !== t.type) return e.handleObj.handler.apply(this, arguments)
    },
    teardown: function () {
      return w.event.remove(this, '._change'),
      !V.test(this.nodeName)
    }
  }),
  y.focusinBubbles || w.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (n, r) {
    function i(e) {
      w.event.simulate(r, e.target, w.event.fix(e), !0)
    }
    w.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this,
        t = w._data(e, r);
        t || e.addEventListener(n, i, !0),
        w._data(e, r, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this,
        t = w._data(e, r) - 1;
        t ? w._data(e, r, t)  : (e.removeEventListener(n, i, !0), w._removeData(e, r))
      }
    }
  }),
  w.fn.extend({
    on: function (e, t, n, r, i) {
      var o,
      a;
      if ('object' == typeof e) {
        for (o in 'string' != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], i);
        return this
      }
      if (null == n && null == r ? (r = t, n = t = void 0)  : null == r && ('string' == typeof t ? (r = n, n = void 0)  : (r = n, n = t, t = void 0)), !1 === r) r = Z;
       else if (!r) return this;
      return 1 === i && (a = r, (r = function (e) {
        return w().off(e),
        a.apply(this, arguments)
      }).guid = a.guid || (a.guid = w.guid++)),
      this.each(function () {
        w.event.add(this, e, r, n, t)
      })
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r,
      i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
      w(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler),
      this;
      if ('object' != typeof e) return !1 !== t && 'function' != typeof t || (n = t, t = void 0),
      !1 === n && (n = Z),
      this.each(function () {
        w.event.remove(this, e, n, t)
      });
      for (i in e) this.off(i, t, e[i]);
      return this
    },
    trigger: function (e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0)
    }
  });
  var ne = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
  re = / jQuery\d+="(?:null|\d+)"/g,
  ie = new RegExp('<(?:' + ne + ')[\\s/>]', 'i'),
  oe = /^\s+/,
  ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  se = /<([\w:]+)/,
  le = /<tbody/i,
  ue = /<|&#?\w+;/,
  ce = /<(?:script|style|link)/i,
  fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
  de = /^$|\/(?:java|ecma)script/i,
  pe = /^true\/(.*)/,
  he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  me = {
    option: [
      1,
      '<select multiple=\'multiple\'>',
      '</select>'
    ],
    legend: [
      1,
      '<fieldset>',
      '</fieldset>'
    ],
    area: [
      1,
      '<map>',
      '</map>'
    ],
    param: [
      1,
      '<object>',
      '</object>'
    ],
    thead: [
      1,
      '<table>',
      '</table>'
    ],
    tr: [
      2,
      '<table><tbody>',
      '</tbody></table>'
    ],
    col: [
      2,
      '<table><tbody></tbody><colgroup>',
      '</colgroup></table>'
    ],
    td: [
      3,
      '<table><tbody><tr>',
      '</tr></tbody></table>'
    ],
    _default: y.htmlSerialize ? [
      0,
      '',
      ''
    ] : [
      1,
      'X<div>',
      '</div>'
    ]
  },
  ge = te(C).appendChild(C.createElement('div'));
  function ye(e, t) {
    var n,
    r,
    i = 0,
    o = typeof e.getElementsByTagName !== M ? e.getElementsByTagName(t || '*')  : typeof e.querySelectorAll !== M ? e.querySelectorAll(t || '*')  : void 0;
    if (!o) for (o = [
    ], n = e.childNodes || e; null != (r = n[i]); i++) !t || w.nodeName(r, t) ? o.push(r)  : w.merge(o, ye(r, t));
    return void 0 === t || t && w.nodeName(e, t) ? w.merge([e], o)  : o
  }
  function ve(e) {
    U.test(e.type) && (e.defaultChecked = e.checked)
  }
  function be(e, t) {
    return w.nodeName(e, 'table') && w.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody') [0] || e.appendChild(e.ownerDocument.createElement('tbody'))  : e
  }
  function xe(e) {
    return e.type = (null !== w.find.attr(e, 'type')) + '/' + e.type,
    e
  }
  function we(e) {
    var t = pe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'),
    e
  }
  function Te(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) w._data(n, 'globalEval', !t || w._data(t[r], 'globalEval'))
  }
  function Ce(e, t) {
    if (1 === t.nodeType && w.hasData(e)) {
      var n,
      r,
      i,
      o = w._data(e),
      e = w._data(t, o),
      a = o.events;
      if (a) for (n in delete e.handle, e.events = {
      }, a) for (r = 0, i = a[n].length; r < i; r++) w.event.add(t, n, a[n][r]);
      e.data && (e.data = w.extend({
      }, e.data))
    }
  }
  me.optgroup = me.option,
  me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
  me.th = me.td,
  w.extend({
    clone: function (e, t, n) {
      var r,
      i,
      o,
      a,
      s,
      l = w.contains(e.ownerDocument, e);
      if (y.html5Clone || w.isXMLDoc(e) || !ie.test('<' + e.nodeName + '>') ? o = e.cloneNode(!0)  : (ge.innerHTML = e.outerHTML, ge.removeChild(o = ge.firstChild)), !(y.noCloneEvent && y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (r = ye(o), s = ye(e), a = 0; null != (i = s[a]); ++a) r[a] && function (e, t) {
        var n,
        r,
        i;
        if (1 === t.nodeType) {
          if (n = t.nodeName.toLowerCase(), !y.noCloneEvent && t[w.expando]) {
            for (r in (i = w._data(t)).events) w.removeEvent(t, r, i.handle);
            t.removeAttribute(w.expando)
          }
          'script' === n && t.text !== e.text ? (xe(t).text = e.text, we(t))  : 'object' === n ? (t.parentNode && (t.outerHTML = e.outerHTML), y.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))  : 'input' === n && U.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value))  : 'option' === n ? t.defaultSelected = t.selected = e.defaultSelected : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue)
        }
      }(i, r[a]);
      if (t) if (n) for (s = s || ye(e), r = r || ye(o), a = 0; null != (i = s[a]); a++) Ce(i, r[a]);
       else Ce(e, o);
      return 0 < (r = ye(o, 'script')).length && Te(r, !l && ye(e, 'script')),
      r = s = i = null,
      o
    },
    buildFragment: function (e, t, n, r) {
      for (var i, o, a, s, l, u, c, f = e.length, d = te(t), p = [
      ], h = 0; h < f; h++) if ((o = e[h]) || 0 === o) if ('object' === w.type(o)) w.merge(p, o.nodeType ? [
        o
      ] : o);
       else if (ue.test(o)) {
        for (s = s || d.appendChild(t.createElement('div')), l = (se.exec(o) || [
          '',
          ''
        ]) [1].toLowerCase(), c = me[l] || me._default, s.innerHTML = c[1] + o.replace(ae, '<$1></$2>') + c[2], i = c[0]; i--; ) s = s.lastChild;
        if (!y.leadingWhitespace && oe.test(o) && p.push(t.createTextNode(oe.exec(o) [0])), !y.tbody) for (i = (o = 'table' !== l || le.test(o) ? '<table>' !== c[1] || le.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--; ) w.nodeName(u = o.childNodes[i], 'tbody') && !u.childNodes.length && o.removeChild(u);
        for (w.merge(p, s.childNodes), s.textContent = ''; s.firstChild; ) s.removeChild(s.firstChild);
        s = d.lastChild
      } else p.push(t.createTextNode(o));
      for (s && d.removeChild(s), y.appendChecked || w.grep(ye(p, 'input'), ve), h = 0; o = p[h++]; ) if ((!r || - 1 === w.inArray(o, r)) && (a = w.contains(o.ownerDocument, o), s = ye(d.appendChild(o), 'script'), a && Te(s), n)) for (i = 0; o = s[i++]; ) de.test(o.type || '') && n.push(o);
      return s = null,
      d
    },
    cleanData: function (e, t) {
      for (var n, r, i, o, a = 0, s = w.expando, l = w.cache, u = y.deleteExpando, c = w.event.special; null != (n = e[a]); a++) if ((t || w.acceptData(n)) && (o = (i = n[s]) && l[i])) {
        if (o.events) for (r in o.events) c[r] ? w.event.remove(n, r)  : w.removeEvent(n, r, o.handle);
        l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== M ? n.removeAttribute(s)  : n[s] = null, f.push(i))
      }
    }
  }),
  w.fn.extend({
    text: function (e) {
      return X(this, function (e) {
        return void 0 === e ? w.text(this)  : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || be(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        var t;
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = be(this, e)).insertBefore(e, t.firstChild)
      })
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function (e, t) {
      for (var n, r = e ? w.filter(e, this)  : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || w.cleanData(ye(n)),
      n.parentNode && (t && w.contains(n.ownerDocument, n) && Te(ye(n, 'script')), n.parentNode.removeChild(n));
      return this
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && w.cleanData(ye(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
        e.options && w.nodeName(e, 'select') && (e.options.length = 0)
      }
      return this
    },
    clone: function (e, t) {
      return e = null != e && e,
      t = null == t ? e : t,
      this.map(function () {
        return w.clone(this, e, t)
      })
    },
    html: function (e) {
      return X(this, function (e) {
        var t = this[0] || {
        },
        n = 0,
        r = this.length;
        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(re, '')  : void 0;
        if ('string' == typeof e && !ce.test(e) && (y.htmlSerialize || !ie.test(e)) && (y.leadingWhitespace || !oe.test(e)) && !me[(se.exec(e) || [
          '',
          ''
        ]) [1].toLowerCase()]) {
          e = e.replace(ae, '<$1></$2>');
          try {
            for (; n < r; n++) 1 === (t = this[n] || {
            }).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var t = arguments[0];
      return this.domManip(arguments, function (e) {
        t = this.parentNode,
        w.cleanData(ye(this)),
        t && t.replaceChild(e, this)
      }),
      t && (t.length || t.nodeType) ? this : this.remove()
    },
    detach: function (e) {
      return this.remove(e, !0)
    },
    domManip: function (n, r) {
      n = m.apply([], n);
      var e,
      t,
      i,
      o,
      a,
      s,
      l = 0,
      u = this.length,
      c = this,
      f = u - 1,
      d = n[0],
      p = w.isFunction(d);
      if (p || 1 < u && 'string' == typeof d && !y.checkClone && fe.test(d)) return this.each(function (e) {
        var t = c.eq(e);
        p && (n[0] = d.call(this, e, t.html())),
        t.domManip(n, r)
      });
      if (u && (e = (s = w.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === s.childNodes.length && (s = e), e)) {
        for (i = (o = w.map(ye(s, 'script'), xe)).length; l < u; l++) t = s,
        l !== f && (t = w.clone(t, !0, !0), i && w.merge(o, ye(t, 'script'))),
        r.call(this[l], t, l);
        if (i) for (a = o[o.length - 1].ownerDocument, w.map(o, we), l = 0; l < i; l++) t = o[l],
        de.test(t.type || '') && !w._data(t, 'globalEval') && w.contains(a, t) && (t.src ? w._evalUrl && w._evalUrl(t.src)  : w.globalEval((t.text || t.textContent || t.innerHTML || '').replace(he, '')));
        s = e = null
      }
      return this
    }
  }),
  w.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, a) {
    w.fn[e] = function (e) {
      for (var t, n = 0, r = [
      ], i = w(e), o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0),
      w(i[n]) [a](t),
      s.apply(r, t.get());
      return this.pushStack(r)
    }
  });
  var Ne,
  Ee,
  ke = {
  };
  function Se(e, t) {
    var t = w(t.createElement(e)).appendTo(t.body),
    n = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(t[0])) ? n.display : w.css(t[0], 'display');
    return t.detach(),
    n
  }
  function Ae(e) {
    var t = C,
    n = ke[e];
    return n || ('none' !== (n = Se(e, t)) && n || ((t = ((Ne = (Ne || w('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(t.documentElement)) [0].contentWindow || Ne[0].contentDocument).document).write(), t.close(), n = Se(e, t), Ne.detach()), ke[e] = n),
    n
  }
  y.shrinkWrapBlocks = function () {
    return null != Ee ? Ee : (Ee = !1, (t = C.getElementsByTagName('body') [0]) && t.style ? (e = C.createElement('div'), (n = C.createElement('div')).style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', t.appendChild(n).appendChild(e), typeof e.style.zoom !== M && (e.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', e.appendChild(C.createElement('div')).style.width = '5px', Ee = 3 !== e.offsetWidth), t.removeChild(n), Ee)  : void 0);
    var e,
    t,
    n
  };
  var De,
  je,
  Le,
  He,
  _e,
  qe,
  Me = /^margin/,
  Oe = new RegExp('^(' + z + ')(?!px)[a-z%]+$', 'i'),
  Fe = /^(top|right|bottom|left)$/;
  function Be(t, n) {
    return {
      get: function () {
        var e = t();
        if (null != e) {
          if (!e) return (this.get = n).apply(this, arguments);
          delete this.get
        }
      }
    }
  }
  function Pe() {
    var e,
    t,
    n,
    r = C.getElementsByTagName('body') [0];
    r && r.style && (e = C.createElement('div'), (t = C.createElement('div')).style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', r.appendChild(t).appendChild(e), e.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', Le = He = !1, qe = !0, h.getComputedStyle && (Le = '1%' !== (h.getComputedStyle(e, null) || {
    }).top, He = '4px' === (h.getComputedStyle(e, null) || {
      width: '4px'
    }).width, (n = e.appendChild(C.createElement('div'))).style.cssText = e.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', n.style.marginRight = n.style.width = '0', e.style.width = '1px', qe = !parseFloat((h.getComputedStyle(n, null) || {
    }).marginRight)), e.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', (n = e.getElementsByTagName('td')) [0].style.cssText = 'margin:0;border:0;padding:0;display:none', (_e = 0 === n[0].offsetHeight) && (n[0].style.display = '', n[1].style.display = 'none', _e = 0 === n[0].offsetHeight), r.removeChild(t))
  }
  h.getComputedStyle ? (De = function (e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null)
  }, je = function (e, t, n) {
    var r,
    i = e.style,
    o = (n = n || De(e)) ? n.getPropertyValue(t) || n[t] : void 0;
    return n && ('' !== o || w.contains(e.ownerDocument, e) || (o = w.style(e, t)), Oe.test(o) && Me.test(t) && (r = i.width, e = i.minWidth, t = i.maxWidth, i.minWidth = i.maxWidth = i.width = o, o = n.width, i.width = r, i.minWidth = e, i.maxWidth = t)),
    void 0 === o ? o : o + ''
  })  : C.documentElement.currentStyle && (De = function (e) {
    return e.currentStyle
  }, je = function (e, t, n) {
    var r,
    i,
    o,
    a = e.style;
    return null == (o = (n = n || De(e)) ? n[t] : void 0) && a && a[t] && (o = a[t]),
    Oe.test(o) && !Fe.test(t) && (r = a.left, (n = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), a.left = 'fontSize' === t ? '1em' : o, o = a.pixelLeft + 'px', a.left = r, n && (i.left = n)),
    void 0 === o ? o : o + '' || 'auto'
  }),
  (nt = C.createElement('div')).innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>',
  (rt = (rt = nt.getElementsByTagName('a') [0]) && rt.style) && (rt.cssText = 'float:left;opacity:.5', y.opacity = '0.5' === rt.opacity, y.cssFloat = !!rt.cssFloat, nt.style.backgroundClip = 'content-box', nt.cloneNode(!0).style.backgroundClip = '', y.clearCloneStyle = 'content-box' === nt.style.backgroundClip, y.boxSizing = '' === rt.boxSizing || '' === rt.MozBoxSizing || '' === rt.WebkitBoxSizing, w.extend(y, {
    reliableHiddenOffsets: function () {
      return null == _e && Pe(),
      _e
    },
    boxSizingReliable: function () {
      return null == He && Pe(),
      He
    },
    pixelPosition: function () {
      return null == Le && Pe(),
      Le
    },
    reliableMarginRight: function () {
      return null == qe && Pe(),
      qe
    }
  })),
  w.swap = function (e, t, n, r) {
    var i,
    o = {
    };
    for (i in t) o[i] = e.style[i],
    e.style[i] = t[i];
    for (i in r = n.apply(e, r || [
    ]), t) e.style[i] = o[i];
    return r
  };
  var Re = /alpha\([^)]*\)/i,
  We = /opacity\s*=\s*([^)]*)/,
  $e = /^(none|table(?!-c[ea]).+)/,
  ze = new RegExp('^(' + z + ')(.*)$', 'i'),
  Ie = new RegExp('^([+-])=(' + z + ')', 'i'),
  Xe = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
  Ue = {
    letterSpacing: '0',
    fontWeight: '400'
  },
  Ve = [
    'Webkit',
    'O',
    'Moz',
    'ms'
  ];
  function Je(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ve.length; i--; ) if ((t = Ve[i] + n) in e) return t;
    return r
  }
  function Ye(e, t) {
    for (var n, r, i, o = [
    ], a = 0, s = e.length; a < s; a++) (r = e[a]).style && (o[a] = w._data(r, 'olddisplay'), n = r.style.display, t ? (o[a] || 'none' !== n || (r.style.display = ''), '' === r.style.display && $(r) && (o[a] = w._data(r, 'olddisplay', Ae(r.nodeName))))  : (i = $(r), (n && 'none' !== n || !i) && w._data(r, 'olddisplay', i ? n : w.css(r, 'display'))));
    for (a = 0; a < s; a++) (r = e[a]).style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? o[a] || '' : 'none'));
    return e
  }
  function Ge(e, t, n) {
    var r = ze.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px')  : t
  }
  function Qe(e, t, n, r, i) {
    for (var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, a = 0; o < 4; o += 2) 'margin' === n && (a += w.css(e, n + I[o], !0, i)),
    r ? ('content' === n && (a -= w.css(e, 'padding' + I[o], !0, i)), 'margin' !== n && (a -= w.css(e, 'border' + I[o] + 'Width', !0, i)))  : (a += w.css(e, 'padding' + I[o], !0, i), 'padding' !== n && (a += w.css(e, 'border' + I[o] + 'Width', !0, i)));
    return a
  }
  function Ke(e, t, n) {
    var r = !0,
    i = 'width' === t ? e.offsetWidth : e.offsetHeight,
    o = De(e),
    a = y.boxSizing && 'border-box' === w.css(e, 'boxSizing', !1, o);
    if (i <= 0 || null == i) {
      if (((i = je(e, t, o)) < 0 || null == i) && (i = e.style[t]), Oe.test(i)) return i;
      r = a && (y.boxSizingReliable() || i === e.style[t]),
      i = parseFloat(i) || 0
    }
    return i + Qe(e, t, n || (a ? 'border' : 'content'), r, o) + 'px'
  }
  function Ze(e, t, n, r, i) {
    return new Ze.prototype.init(e, t, n, r, i)
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            e = je(e, 'opacity');
            return '' === e ? '1' : e
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: y.cssFloat ? 'cssFloat' : 'styleFloat'
    },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
        o,
        a,
        s = w.camelCase(t),
        l = e.style;
        if (t = w.cssProps[s] || (w.cssProps[s] = Je(l, s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        if ('string' === (o = typeof n) && (i = Ie.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(w.css(e, t)), o = 'number'), null != n && n == n && ('number' !== o || w.cssNumber[s] || (n += 'px'), y.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), !(a && 'set' in a && void 0 === (n = a.set(e, n, r))))) try {
          l[t] = n
        } catch (e) {
        }
      }
    },
    css: function (e, t, n, r) {
      var i,
      o = w.camelCase(t);
      return t = w.cssProps[o] || (w.cssProps[o] = Je(e.style, o)),
      'normal' === (i = void 0 === (i = (o = w.cssHooks[t] || w.cssHooks[o]) && 'get' in o ? o.get(e, !0, n)  : i) ? je(e, t, r)  : i) && t in Ue && (i = Ue[t]),
      '' === n || n ? (t = parseFloat(i), !0 === n || w.isNumeric(t) ? t || 0 : i)  : i
    }
  }),
  w.each(['height',
  'width'], function (e, i) {
    w.cssHooks[i] = {
      get: function (e, t, n) {
        if (t) return $e.test(w.css(e, 'display')) && 0 === e.offsetWidth ? w.swap(e, Xe, function () {
          return Ke(e, i, n)
        })  : Ke(e, i, n)
      },
      set: function (e, t, n) {
        var r = n && De(e);
        return Ge(0, t, n ? Qe(e, i, n, y.boxSizing && 'border-box' === w.css(e, 'boxSizing', !1, r), r)  : 0)
      }
    }
  }),
  y.opacity || (w.cssHooks.opacity = {
    get: function (e, t) {
      return We.test((t && e.currentStyle ? e.currentStyle : e.style).filter || '') ? 0.01 * parseFloat(RegExp.$1) + '' : t ? '1' : ''
    },
    set: function (e, t) {
      var n = e.style,
      r = e.currentStyle,
      i = w.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
      e = r && r.filter || n.filter || '';
      ((n.zoom = 1) <= t || '' === t) && '' === w.trim(e.replace(Re, '')) && n.removeAttribute && (n.removeAttribute('filter'), '' === t || r && !r.filter) || (n.filter = Re.test(e) ? e.replace(Re, i)  : e + ' ' + i)
    }
  }),
  w.cssHooks.marginRight = Be(y.reliableMarginRight, function (e, t) {
    if (t) return w.swap(e, {
      display: 'inline-block'
    }, je, [
      e,
      'marginRight'
    ])
  }),
  w.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (i, o) {
    w.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {
        }, r = 'string' == typeof e ? e.split(' ')  : [
          e
        ]; t < 4; t++) n[i + I[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    },
    Me.test(i) || (w.cssHooks[i + o].set = Ge)
  }),
  w.fn.extend({
    css: function (e, t) {
      return X(this, function (e, t, n) {
        var r,
        i,
        o = {
        },
        a = 0;
        if (w.isArray(t)) {
          for (r = De(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? w.style(e, t, n)  : w.css(e, t)
      }, e, t, 1 < arguments.length)
    },
    show: function () {
      return Ye(this, !0)
    },
    hide: function () {
      return Ye(this)
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show()  : this.hide()  : this.each(function () {
        $(this) ? w(this).show()  : w(this).hide()
      })
    }
  }),
  (w.Tween = Ze).prototype = {
    constructor: Ze,
    init: function (e, t, n, r, i, o) {
      this.elem = e,
      this.prop = n,
      this.easing = i || 'swing',
      this.options = t,
      this.start = this.now = this.cur(),
      this.end = r,
      this.unit = o || (w.cssNumber[n] ? '' : 'px')
    },
    cur: function () {
      var e = Ze.propHooks[this.prop];
      return (e && e.get ? e : Ze.propHooks._default).get(this)
    },
    run: function (e) {
      var t,
      n = Ze.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)  : this.pos = t = e,
      this.now = (this.end - this.start) * t + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      (n && n.set ? n : Ze.propHooks._default).set(this),
      this
    }
  },
  Ze.prototype.init.prototype = Ze.prototype,
  Ze.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0 : e.elem[e.prop]
      },
      set: function (e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e)  : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit)  : e.elem[e.prop] = e.now
      }
    }
  },
  Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  },
  w.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2
    }
  },
  w.fx = Ze.prototype.init,
  w.fx.step = {
  };
  var et,
  tt,
  nt,
  rt,
  it = /^(?:toggle|show|hide)$/,
  ot = new RegExp('^(?:([+-])=|)(' + z + ')([a-z%]*)$', 'i'),
  at = /queueHooks$/,
  st = [
    function (t, e, n) {
      var r,
      i,
      o,
      a,
      s,
      l,
      u,
      c = this,
      f = {
      },
      d = t.style,
      p = t.nodeType && $(t),
      h = w._data(t, 'fxshow');
      n.queue || (null == (s = w._queueHooks(t, 'fx')).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
        s.unqueued || l()
      }), s.unqueued++, c.always(function () {
        c.always(function () {
          s.unqueued--,
          w.queue(t, 'fx').length || s.empty.fire()
        })
      }));
      1 === t.nodeType && ('height' in e || 'width' in e) && (n.overflow = [
        d.overflow,
        d.overflowX,
        d.overflowY
      ], u = w.css(t, 'display'), 'inline' === ('none' === u ? w._data(t, 'olddisplay') || Ae(t.nodeName)  : u) && 'none' === w.css(t, 'float') && (y.inlineBlockNeedsLayout && 'inline' !== Ae(t.nodeName) ? d.zoom = 1 : d.display = 'inline-block'));
      n.overflow && (d.overflow = 'hidden', y.shrinkWrapBlocks() || c.always(function () {
        d.overflow = n.overflow[0],
        d.overflowX = n.overflow[1],
        d.overflowY = n.overflow[2]
      }));
      for (r in e) if (i = e[r], it.exec(i)) {
        if (delete e[r], o = o || 'toggle' === i, i === (p ? 'hide' : 'show')) {
          if ('show' !== i || !h || void 0 === h[r]) continue;
          p = !0
        }
        f[r] = h && h[r] || w.style(t, r)
      } else u = void 0;
      if (w.isEmptyObject(f)) 'inline' === ('none' === u ? Ae(t.nodeName)  : u) && (d.display = u);
       else for (r in h ? 'hidden' in h && (p = h.hidden)  : h = w._data(t, 'fxshow', {
      }), o && (h.hidden = !p), p ? w(t).show()  : c.done(function () {
        w(t).hide()
      }), c.done(function () {
        for (var e in w._removeData(t, 'fxshow'), f) w.style(t, e, f[e])
      }), f) a = ft(p ? h[r] : 0, r, c),
      r in h || (h[r] = a.start, p && (a.end = a.start, a.start = 'width' === r || 'height' === r ? 1 : 0))
    }
  ],
  lt = {
    '*': [
      function (e, t) {
        var n = this.createTween(e, t),
        r = n.cur(),
        t = ot.exec(t),
        i = t && t[3] || (w.cssNumber[e] ? '' : 'px'),
        o = (w.cssNumber[e] || 'px' !== i && + r) && ot.exec(w.css(n.elem, e)),
        a = 1,
        s = 20;
        if (o && o[3] !== i) for (i = i || o[3], t = t || [
        ], o = + r || 1; o /= a = a || '.5', w.style(n.elem, e, o + i), a !== (a = n.cur() / r) && 1 !== a && --s; );
        return t && (o = n.start = + o || + r || 0, n.unit = i, n.end = t[1] ? o + (t[1] + 1) * t[2] : + t[2]),
        n
      }
    ]
  };
  function ut() {
    return setTimeout(function () {
      et = void 0
    }),
    et = w.now()
  }
  function ct(e, t) {
    var n,
    r = {
      height: e
    },
    i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r['margin' + (n = I[i])] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e),
    r
  }
  function ft(e, t, n) {
    for (var r, i = (lt[t] || [
    ]).concat(lt['*']), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
  }
  function dt(i, e, t) {
    var n,
    o,
    r = 0,
    a = st.length,
    s = w.Deferred().always(function () {
      delete l.elem
    }),
    l = function () {
      if (o) return !1;
      for (var e = et || ut(), e = Math.max(0, u.startTime + u.duration - e), t = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++) u.tweens[n].run(t);
      return s.notifyWith(i, [
        u,
        t,
        e
      ]),
      t < 1 && r ? e : (s.resolveWith(i, [
        u
      ]), !1)
    },
    u = s.promise({
      elem: i,
      props: w.extend({
      }, e),
      opts: w.extend(!0, {
        specialEasing: {
        }
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: et || ut(),
      duration: t.duration,
      tweens: [
      ],
      createTween: function (e, t) {
        e = w.Tween(i, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
        return u.tweens.push(e),
        e
      },
      stop: function (e) {
        var t = 0,
        n = e ? u.tweens.length : 0;
        if (o) return this;
        for (o = !0; t < n; t++) u.tweens[t].run(1);
        return e ? s.resolveWith(i, [
          u,
          e
        ])  : s.rejectWith(i, [
          u,
          e
        ]),
        this
      }
    }),
    c = u.props;
    for (!function (e, t) {
      var n,
      r,
      i,
      o,
      a;
      for (n in e) if (i = t[r = w.camelCase(n)], o = e[n], w.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && 'expand' in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
       else t[r] = i
    }(c, u.opts.specialEasing); r < a; r++) if (n = st[r].call(u, i, c, u.opts)) return n;
    return w.map(c, ft, u),
    w.isFunction(u.opts.start) && u.opts.start.call(i, u),
    w.fx.timer(w.extend(l, {
      elem: i,
      anim: u,
      queue: u.opts.queue
    })),
    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }
  w.Animation = w.extend(dt, {
    tweener: function (e, t) {
      for (var n, r = 0, i = (e = w.isFunction(e) ? (t = e, [
        '*'
      ])  : e.split(' ')).length; r < i; r++) n = e[r],
      lt[n] = lt[n] || [
      ],
      lt[n].unshift(t)
    },
    prefilter: function (e, t) {
      t ? st.unshift(e)  : st.push(e)
    }
  }),
  w.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? w.extend({
    }, e)  : {
      complete: n || !n && t || w.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !w.isFunction(t) && t
    };
    return r.duration = w.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default,
    null != r.queue && !0 !== r.queue || (r.queue = 'fx'),
    r.old = r.complete,
    r.complete = function () {
      w.isFunction(r.old) && r.old.call(this),
      r.queue && w.dequeue(this, r.queue)
    },
    r
  },
  w.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter($).css('opacity', 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (t, e, n, r) {
      var i = w.isEmptyObject(t),
      o = w.speed(e, n, r),
      r = function () {
        var e = dt(this, w.extend({
        }, t), o);
        (i || w._data(this, 'finish')) && e.stop(!0)
      };
      return r.finish = r,
      i || !1 === o.queue ? this.each(r)  : this.queue(o.queue, r)
    },
    stop: function (i, e, o) {
      function a(e) {
        var t = e.stop;
        delete e.stop,
        t(o)
      }
      return 'string' != typeof i && (o = e, e = i, i = void 0),
      e && !1 !== i && this.queue(i || 'fx', [
      ]),
      this.each(function () {
        var e = !0,
        t = null != i && i + 'queueHooks',
        n = w.timers,
        r = w._data(this);
        if (t) r[t] && r[t].stop && a(r[t]);
         else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
        for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || w.dequeue(this, i)
      })
    },
    finish: function (a) {
      return !1 !== a && (a = a || 'fx'),
      this.each(function () {
        var e,
        t = w._data(this),
        n = t[a + 'queue'],
        r = t[a + 'queueHooks'],
        i = w.timers,
        o = n ? n.length : 0;
        for (t.finish = !0, w.queue(this, a, [
        ]), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }),
  w.each(['toggle',
  'show',
  'hide'], function (e, r) {
    var i = w.fn[r];
    w.fn[r] = function (e, t, n) {
      return null == e || 'boolean' == typeof e ? i.apply(this, arguments)  : this.animate(ct(r, !0), e, t, n)
    }
  }),
  w.each({
    slideDown: ct('show'),
    slideUp: ct('hide'),
    slideToggle: ct('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (e, r) {
    w.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }),
  w.timers = [
  ],
  w.fx.tick = function () {
    var e,
    t = w.timers,
    n = 0;
    for (et = w.now(); n < t.length; n++) (e = t[n]) () || t[n] !== e || t.splice(n--, 1);
    t.length || w.fx.stop(),
    et = void 0
  },
  w.fx.timer = function (e) {
    w.timers.push(e),
    e() ? w.fx.start()  : w.timers.pop()
  },
  w.fx.interval = 13,
  w.fx.start = function () {
    tt = tt || setInterval(w.fx.tick, w.fx.interval)
  },
  w.fx.stop = function () {
    clearInterval(tt),
    tt = null
  },
  w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  w.fn.delay = function (r, e) {
    return r = w.fx && w.fx.speeds[r] || r,
    this.queue(e = e || 'fx', function (e, t) {
      var n = setTimeout(e, r);
      t.stop = function () {
        clearTimeout(n)
      }
    })
  },
  (o = C.createElement('div')).setAttribute('className', 't'),
  o.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>',
  p = o.getElementsByTagName('a') [0],
  rt = (nt = C.createElement('select')).appendChild(C.createElement('option')),
  z = o.getElementsByTagName('input') [0],
  p.style.cssText = 'top:1px',
  y.getSetAttribute = 't' !== o.className,
  y.style = /top/.test(p.getAttribute('style')),
  y.hrefNormalized = '/a' === p.getAttribute('href'),
  y.checkOn = !!z.value,
  y.optSelected = rt.selected,
  y.enctype = !!C.createElement('form').enctype,
  nt.disabled = !0,
  y.optDisabled = !rt.disabled,
  (z = C.createElement('input')).setAttribute('value', ''),
  y.input = '' === z.getAttribute('value'),
  z.value = 't',
  z.setAttribute('type', 'radio'),
  y.radioValue = 't' === z.value;
  var pt = /\r/g;
  w.fn.extend({
    val: function (t) {
      var n,
      e,
      r,
      i = this[0];
      return arguments.length ? (r = w.isFunction(t), this.each(function (e) {
        1 === this.nodeType && (null == (e = r ? t.call(this, e, w(this).val())  : t) ? e = '' : 'number' == typeof e ? e += '' : w.isArray(e) && (e = w.map(e, function (e) {
          return null == e ? '' : e + ''
        })), (n = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && 'set' in n && void 0 !== n.set(this, e, 'value') || (this.value = e))
      }))  : i ? (n = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && 'get' in n && void 0 !== (e = n.get(i, 'value')) ? e : 'string' == typeof (e = i.value) ? e.replace(pt, '')  : null == e ? '' : e : void 0
    }
  }),
  w.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = w.find.attr(e, 'value');
          return null != t ? t : w.trim(w.text(e))
        }
      },
      select: {
        get: function (e) {
          for (var t, n = e.options, r = e.selectedIndex, i = 'select-one' === e.type || r < 0, o = i ? null : [
          ], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++) if (((t = n[s]).selected || s === r) && (y.optDisabled ? !t.disabled : null === t.getAttribute('disabled')) && (!t.parentNode.disabled || !w.nodeName(t.parentNode, 'optgroup'))) {
            if (t = w(t).val(), i) return t;
            o.push(t)
          }
          return o
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--; ) if (r = i[a], 0 <= w.inArray(w.valHooks.option.get(r), o)) try {
            r.selected = n = !0
          } catch (e) {
            r.scrollHeight
          } else r.selected = !1;
          return n || (e.selectedIndex = - 1),
          i
        }
      }
    }
  }),
  w.each(['radio',
  'checkbox'], function () {
    w.valHooks[this] = {
      set: function (e, t) {
        if (w.isArray(t)) return e.checked = 0 <= w.inArray(w(e).val(), t)
      }
    },
    y.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value
    })
  });
  var ht,
  mt,
  gt = w.expr.attrHandle,
  yt = /^(?:checked|selected)$/i,
  vt = y.getSetAttribute,
  bt = y.input;
  w.fn.extend({
    attr: function (e, t) {
      return X(this, w.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e)
      })
    }
  }),
  w.extend({
    attr: function (e, t, n) {
      var r,
      i,
      o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === M ? w.prop(e, t, n)  : (1 === o && w.isXMLDoc(e) || (t = t.toLowerCase(), r = w.attrHooks[t] || (w.expr.match.bool.test(t) ? mt : ht)), void 0 === n ? !(r && 'get' in r && null !== (i = r.get(e, t))) && null == (i = w.find.attr(e, t)) ? void 0 : i : null !== n ? r && 'set' in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ''), n)  : void w.removeAttr(e, t))
    },
    removeAttr: function (e, t) {
      var n,
      r,
      i = 0,
      o = t && t.match(j);
      if (o && 1 === e.nodeType) for (; n = o[i++]; ) r = w.propFix[n] || n,
      w.expr.match.bool.test(n) ? bt && vt || !yt.test(n) ? e[r] = !1 : e[w.camelCase('default-' + n)] = e[r] = !1 : w.attr(e, n, ''),
      e.removeAttribute(vt ? n : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && 'radio' === t && w.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t),
            n && (e.value = n),
            t
          }
        }
      }
    }
  }),
  mt = {
    set: function (e, t, n) {
      return !1 === t ? w.removeAttr(e, n)  : bt && vt || !yt.test(n) ? e.setAttribute(!vt && w.propFix[n] || n, n)  : e[w.camelCase('default-' + n)] = e[n] = !0,
      n
    }
  },
  w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var o = gt[t] || w.find.attr;
    gt[t] = bt && vt || !yt.test(t) ? function (e, t, n) {
      var r,
      i;
      return n || (i = gt[t], gt[t] = r, r = null != o(e, t, n) ? t.toLowerCase()  : null, gt[t] = i),
      r
    }
     : function (e, t, n) {
      if (!n) return e[w.camelCase('default-' + t)] ? t.toLowerCase()  : null
    }
  }),
  bt && vt || (w.attrHooks.value = {
    set: function (e, t, n) {
      if (!w.nodeName(e, 'input')) return ht && ht.set(e, t, n);
      e.defaultValue = t
    }
  }),
  vt || (ht = {
    set: function (e, t, n) {
      var r = e.getAttributeNode(n);
      if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += '', 'value' === n || t === e.getAttribute(n)) return t
    }
  }, gt.id = gt.name = gt.coords = function (e, t, n) {
    if (!n) return (t = e.getAttributeNode(t)) && '' !== t.value ? t.value : null
  }, w.valHooks.button = {
    get: function (e, t) {
      t = e.getAttributeNode(t);
      if (t && t.specified) return t.value
    },
    set: ht.set
  }, w.attrHooks.contenteditable = {
    set: function (e, t, n) {
      ht.set(e, '' !== t && t, n)
    }
  }, w.each(['width',
  'height'], function (e, n) {
    w.attrHooks[n] = {
      set: function (e, t) {
        if ('' === t) return e.setAttribute(n, 'auto'),
        t
      }
    }
  })),
  y.style || (w.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || void 0
    },
    set: function (e, t) {
      return e.style.cssText = t + ''
    }
  });
  var xt = /^(?:input|select|textarea|button|object)$/i,
  wt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function (e, t) {
      return X(this, w.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return e = w.propFix[e] || e,
      this.each(function () {
        try {
          this[e] = void 0,
          delete this[e]
        } catch (e) {
        }
      })
    }
  }),
  w.extend({
    propFix: {
      for : 'htmlFor',
      class : 'className'
    },
    prop: function (e, t, n) {
      var r,
      i,
      o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !w.isXMLDoc(e)) && (t = w.propFix[t] || t, i = w.propHooks[t]),
      void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = w.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10)  : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : - 1
        }
      }
    }
  }),
  y.hrefNormalized || w.each(['href',
  'src'], function (e, t) {
    w.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4)
      }
    }
  }),
  y.optSelected || (w.propHooks.selected = {
    get: function (e) {
      e = e.parentNode;
      return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
      null
    }
  }),
  w.each(['tabIndex',
  'readOnly',
  'maxLength',
  'cellSpacing',
  'cellPadding',
  'rowSpan',
  'colSpan',
  'useMap',
  'frameBorder',
  'contentEditable'], function () {
    w.propFix[this.toLowerCase()] = this
  }),
  y.enctype || (w.propFix.enctype = 'encoding');
  var Tt = /[\t\r\n\f]/g;
  w.fn.extend({
    addClass: function (t) {
      var e,
      n,
      r,
      i,
      o,
      a,
      s = 0,
      l = this.length,
      u = 'string' == typeof t && t;
      if (w.isFunction(t)) return this.each(function (e) {
        w(this).addClass(t.call(this, e, this.className))
      });
      if (u) for (e = (t || '').match(j) || [
      ]; s < l; s++) if (r = 1 === (n = this[s]).nodeType && (n.className ? (' ' + n.className + ' ').replace(Tt, ' ')  : ' ')) {
        for (o = 0; i = e[o++]; ) r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
        a = w.trim(r),
        n.className !== a && (n.className = a)
      }
      return this
    },
    removeClass: function (t) {
      var e,
      n,
      r,
      i,
      o,
      a,
      s = 0,
      l = this.length,
      u = 0 === arguments.length || 'string' == typeof t && t;
      if (w.isFunction(t)) return this.each(function (e) {
        w(this).removeClass(t.call(this, e, this.className))
      });
      if (u) for (e = (t || '').match(j) || [
      ]; s < l; s++) if (r = 1 === (n = this[s]).nodeType && (n.className ? (' ' + n.className + ' ').replace(Tt, ' ')  : '')) {
        for (o = 0; i = e[o++]; ) for (; 0 <= r.indexOf(' ' + i + ' '); ) r = r.replace(' ' + i + ' ', ' ');
        a = t ? w.trim(r)  : '',
        n.className !== a && (n.className = a)
      }
      return this
    },
    toggleClass: function (i, t) {
      var o = typeof i;
      return 'boolean' == typeof t && 'string' == o ? t ? this.addClass(i)  : this.removeClass(i)  : w.isFunction(i) ? this.each(function (e) {
        w(this).toggleClass(i.call(this, e, this.className, t), t)
      })  : this.each(function () {
        if ('string' == o) for (var e, t = 0, n = w(this), r = i.match(j) || [
        ]; e = r[t++]; ) n.hasClass(e) ? n.removeClass(e)  : n.addClass(e);
         else o !== M && 'boolean' != o || (this.className && w._data(this, '__className__', this.className), this.className = !this.className && !1 !== i && w._data(this, '__className__') || '')
      })
    },
    hasClass: function (e) {
      for (var t = ' ' + e + ' ', n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && 0 <= (' ' + this[n].className + ' ').replace(Tt, ' ').indexOf(t)) return !0;
      return !1
    }
  }),
  w.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, n) {
    w.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t)  : this.trigger(n)
    }
  }),
  w.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**')  : this.off(t, e || '**', n)
    }
  });
  var Ct = w.now(),
  Nt = /\?/,
  Et = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  w.parseJSON = function (e) {
    if (h.JSON && h.JSON.parse) return h.JSON.parse(e + '');
    var i,
    o = null,
    t = w.trim(e + '');
    return t && !w.trim(t.replace(Et, function (e, t, n, r) {
      return 0 === (o = i && t ? 0 : o) ? e : (i = n || t, o += !r - !n, '')
    })) ? Function('return ' + t) ()  : w.error('Invalid JSON: ' + e)
  },
  w.parseXML = function (e) {
    var t;
    if (!e || 'string' != typeof e) return null;
    try {
      h.DOMParser ? t = (new DOMParser).parseFromString(e, 'text/xml')  : ((t = new ActiveXObject('Microsoft.XMLDOM')).async = 'false', t.loadXML(e))
    } catch (e) {
      t = void 0
    }
    return t && t.documentElement && !t.getElementsByTagName('parsererror').length || w.error('Invalid XML: ' + e),
    t
  };
  var kt,
  St,
  At = /#.*$/,
  Dt = /([?&])_=[^&]*/,
  jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  Lt = /^(?:GET|HEAD)$/,
  Ht = /^\/\//,
  _t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
  qt = {
  },
  Mt = {
  },
  Ot = '*/'.concat('*');
  try {
    St = location.href
  } catch (e) {
    (St = C.createElement('a')).href = '',
    St = St.href
  }
  function Ft(o) {
    return function (e, t) {
      'string' != typeof e && (t = e, e = '*');
      var n,
      r = 0,
      i = e.toLowerCase().match(j) || [
      ];
      if (w.isFunction(t)) for (; n = i[r++]; ) '+' === n.charAt(0) ? (n = n.slice(1) || '*', (o[n] = o[n] || [
      ]).unshift(t))  : (o[n] = o[n] || [
      ]).push(t)
    }
  }
  function Bt(t, r, i, o) {
    var a = {
    },
    s = t === Mt;
    function l(e) {
      var n;
      return a[e] = !0,
      w.each(t[e] || [
      ], function (e, t) {
        t = t(r, i, o);
        return 'string' != typeof t || s || a[t] ? s ? !(n = t)  : void 0 : (r.dataTypes.unshift(t), l(t), !1)
      }),
      n
    }
    return l(r.dataTypes[0]) || !a['*'] && l('*')
  }
  function Pt(e, t) {
    var n,
    r,
    i = w.ajaxSettings.flatOptions || {
    };
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n = n || {
    }) [r] = t[r]);
    return n && w.extend(!0, e, n),
    e
  }
  kt = _t.exec(St.toLowerCase()) || [
  ],
  w.extend({
    active: 0,
    lastModified: {
    },
    etag: {
    },
    ajaxSettings: {
      url: St,
      type: 'GET',
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Ot,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': w.parseJSON,
        'text xml': w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Pt(Pt(e, w.ajaxSettings), t)  : Pt(w.ajaxSettings, e)
    },
    ajaxPrefilter: Ft(qt),
    ajaxTransport: Ft(Mt),
    ajax: function (e, t) {
      'object' == typeof e && (t = e, e = void 0);
      var n,
      l,
      u,
      c,
      f,
      d,
      r,
      p = w.ajaxSetup({
      }, t = t || {
      }),
      h = p.context || p,
      m = p.context && (h.nodeType || h.jquery) ? w(h)  : w.event,
      g = w.Deferred(),
      y = w.Callbacks('once memory'),
      v = p.statusCode || {
      },
      i = {
      },
      o = {
      },
      b = 0,
      a = 'canceled',
      x = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;
          if (2 === b) {
            if (!r) for (r = {
            }; t = jt.exec(u); ) r[t[1].toLowerCase()] = t[2];
            t = r[e.toLowerCase()]
          }
          return null == t ? null : t
        },
        getAllResponseHeaders: function () {
          return 2 === b ? u : null
        },
        setRequestHeader: function (e, t) {
          var n = e.toLowerCase();
          return b || (e = o[n] = o[n] || e, i[e] = t),
          this
        },
        overrideMimeType: function (e) {
          return b || (p.mimeType = e),
          this
        },
        statusCode: function (e) {
          if (e) if (b < 2) for (var t in e) v[t] = [
            v[t],
            e[t]
          ];
           else x.always(e[x.status]);
          return this
        },
        abort: function (e) {
          e = e || a;
          return d && d.abort(e),
          s(0, e),
          this
        }
      };
      if (g.promise(x).complete = y.add, x.success = x.done, x.error = x.fail, p.url = ((e || p.url || St) + '').replace(At, '').replace(Ht, kt[1] + '//'), p.type = t.method || t.type || p.method || p.type, p.dataTypes = w.trim(p.dataType || '*').toLowerCase().match(j) || [
        ''
      ], null == p.crossDomain && (e = _t.exec(p.url.toLowerCase()), p.crossDomain = !(!e || e[1] === kt[1] && e[2] === kt[2] && (e[3] || ('http:' === e[1] ? '80' : '443')) === (kt[3] || ('http:' === kt[1] ? '80' : '443')))), p.data && p.processData && 'string' != typeof p.data && (p.data = w.param(p.data, p.traditional)), Bt(qt, p, t, x), 2 === b) return x;
      for (n in (f = p.global) && 0 == w.active++ && w.event.trigger('ajaxStart'), p.type = p.type.toUpperCase(), p.hasContent = !Lt.test(p.type), l = p.url, p.hasContent || (p.data && (l = p.url += (Nt.test(l) ? '&' : '?') + p.data, delete p.data), !1 === p.cache && (p.url = Dt.test(l) ? l.replace(Dt, '$1_=' + Ct++)  : l + (Nt.test(l) ? '&' : '?') + '_=' + Ct++)), p.ifModified && (w.lastModified[l] && x.setRequestHeader('If-Modified-Since', w.lastModified[l]), w.etag[l] && x.setRequestHeader('If-None-Match', w.etag[l])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && x.setRequestHeader('Content-Type', p.contentType), x.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Ot + '; q=0.01' : '')  : p.accepts['*']), p.headers) x.setRequestHeader(n, p.headers[n]);
      if (p.beforeSend && (!1 === p.beforeSend.call(h, x, p) || 2 === b)) return x.abort();
      for (n in a = 'abort', {
        success: 1,
        error: 1,
        complete: 1
      }) x[n](p[n]);
      if (d = Bt(Mt, p, t, x)) {
        x.readyState = 1,
        f && m.trigger('ajaxSend', [
          x,
          p
        ]),
        p.async && 0 < p.timeout && (c = setTimeout(function () {
          x.abort('timeout')
        }, p.timeout));
        try {
          b = 1,
          d.send(i, s)
        } catch (e) {
          if (!(b < 2)) throw e;
          s( - 1, e)
        }
      } else s( - 1, 'No Transport');
      function s(e, t, n, r) {
        var i,
        o,
        a,
        s = t;
        2 !== b && (b = 2, c && clearTimeout(c), d = void 0, u = r || '', x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
          for (var r, i, o, a, s = e.contents, l = e.dataTypes; '*' === l[0]; ) l.shift(),
          void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
          if (i) for (a in s) if (s[a] && s[a].test(i)) {
            l.unshift(a);
            break
          }
          if (l[0] in n) o = l[0];
           else {
            for (a in n) {
              if (!l[0] || e.converters[a + ' ' + l[0]]) {
                o = a;
                break
              }
              r = r || a
            }
            o = o || r
          }
          if (o) return o !== l[0] && l.unshift(o),
          n[o]
        }(p, x, n)), a = function (e, t, n, r) {
          var i,
          o,
          a,
          s,
          l,
          u = {
          },
          c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
          for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ('*' === o) o = l;
           else if ('*' !== l && l !== o) {
            if (!(a = u[l + ' ' + o] || u['* ' + o])) for (i in u) if ((s = i.split(' ')) [1] === o && (a = u[l + ' ' + s[0]] || u['* ' + s[0]])) {
              !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
              break
            }
            if (!0 !== a) if (a && e.throws) t = a(t);
             else try {
              t = a(t)
            } catch (e) {
              return {
                state: 'parsererror',
                error: a ? e : 'No conversion from ' + l + ' to ' + o
              }
            }
          }
          return {
            state: 'success',
            data: t
          }
        }(p, a, x, r), r ? (p.ifModified && ((n = x.getResponseHeader('Last-Modified')) && (w.lastModified[l] = n), (n = x.getResponseHeader('etag')) && (w.etag[l] = n)), 204 === e || 'HEAD' === p.type ? s = 'nocontent' : 304 === e ? s = 'notmodified' : (s = a.state, i = a.data, r = !(o = a.error)))  : (o = s, !e && s || (s = 'error', e < 0 && (e = 0))), x.status = e, x.statusText = (t || s) + '', r ? g.resolveWith(h, [
          i,
          s,
          x
        ])  : g.rejectWith(h, [
          x,
          s,
          o
        ]), x.statusCode(v), v = void 0, f && m.trigger(r ? 'ajaxSuccess' : 'ajaxError', [
          x,
          p,
          r ? i : o
        ]), y.fireWith(h, [
          x,
          s
        ]), f && (m.trigger('ajaxComplete', [
          x,
          p
        ]), --w.active || w.event.trigger('ajaxStop')))
      }
      return x
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, 'json')
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, 'script')
    }
  }),
  w.each(['get',
  'post'], function (e, i) {
    w[i] = function (e, t, n, r) {
      return w.isFunction(t) && (r = r || n, n = t, t = void 0),
      w.ajax({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      })
    }
  }),
  w.each(['ajaxStart',
  'ajaxStop',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
  'ajaxSend'], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e)
    }
  }),
  w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      throws: !0
    })
  },
  w.fn.extend({
    wrapAll: function (t) {
      return w.isFunction(t) ? this.each(function (e) {
        w(this).wrapAll(t.call(this, e))
      })  : (this[0] && (e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
        return e
      }).append(this)), this);
      var e
    },
    wrapInner: function (n) {
      return w.isFunction(n) ? this.each(function (e) {
        w(this).wrapInner(n.call(this, e))
      })  : this.each(function () {
        var e = w(this),
        t = e.contents();
        t.length ? t.wrapAll(n)  : e.append(n)
      })
    },
    wrap: function (t) {
      var n = w.isFunction(t);
      return this.each(function (e) {
        w(this).wrapAll(n ? t.call(this, e)  : t)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        w.nodeName(this, 'body') || w(this).replaceWith(this.childNodes)
      }).end()
    }
  }),
  w.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !y.reliableHiddenOffsets() && 'none' === (e.style && e.style.display || w.css(e, 'display'))
  },
  w.expr.filters.visible = function (e) {
    return !w.expr.filters.hidden(e)
  };
  var Rt = /%20/g,
  Wt = /\[\]$/,
  $t = /\r?\n/g,
  zt = /^(?:submit|button|image|reset|file)$/i,
  It = /^(?:input|select|textarea|keygen)/i;
  w.param = function (e, t) {
    function n(e, t) {
      t = w.isFunction(t) ? t()  : null == t ? '' : t,
      i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t)
    }
    var r,
    i = [
    ];
    if (void 0 === t && (t = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      n(this.name, this.value)
    });
     else for (r in e) !function n(r, e, i, o) {
      if (w.isArray(e)) w.each(e, function (e, t) {
        i || Wt.test(r) ? o(r, t)  : n(r + '[' + ('object' == typeof t ? e : '') + ']', t, i, o)
      });
       else if (i || 'object' !== w.type(e)) o(r, e);
       else for (var t in e) n(r + '[' + t + ']', e[t], i, o)
    }(r, e[r], t, n);
    return i.join('&').replace(Rt, '+')
  },
  w.fn.extend({
    serialize: function () {
      return w.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = w.prop(this, 'elements');
        return e ? w.makeArray(e)  : this
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(':disabled') && It.test(this.nodeName) && !zt.test(e) && (this.checked || !U.test(e))
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : w.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace($t, '\r\n')
          }
        })  : {
          name: t.name,
          value: n.replace($t, '\r\n')
        }
      }).get()
    }
  }),
  w.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Vt() || function () {
      try {
        return new h.ActiveXObject('Microsoft.XMLHTTP')
      } catch (e) {
      }
    }()
  }
   : Vt;
  var Xt = 0,
  Ut = {
  },
  z = w.ajaxSettings.xhr();
  function Vt() {
    try {
      return new h.XMLHttpRequest
    } catch (e) {
    }
  }
  h.ActiveXObject && w(h).on('unload', function () {
    for (var e in Ut) Ut[e](void 0, !0)
  }),
  y.cors = !!z && 'withCredentials' in z,
  (z = y.ajax = !!z) && w.ajaxTransport(function (l) {
    var u;
    if (!l.crossDomain || y.cors) return {
      send: function (e, o) {
        var t,
        a = l.xhr(),
        s = ++Xt;
        if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) a[t] = l.xhrFields[t];
        for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + '');
        a.send(l.hasContent && l.data || null),
        u = function (e, t) {
          var n,
          r,
          i;
          if (u && (t || 4 === a.readyState)) if (delete Ut[s], u = void 0, a.onreadystatechange = w.noop, t) 4 !== a.readyState && a.abort();
           else {
            i = {
            },
            n = a.status,
            'string' == typeof a.responseText && (i.text = a.responseText);
            try {
              r = a.statusText
            } catch (e) {
              r = ''
            }
            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204)  : n = i.text ? 200 : 404
          }
          i && o(n, r, i, a.getAllResponseHeaders())
        },
        l.async ? 4 === a.readyState ? setTimeout(u)  : a.onreadystatechange = Ut[s] = u : u()
      },
      abort: function () {
        u && u(void 0, !0)
      }
    }
  }),
  w.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      'text script': function (e) {
        return w.globalEval(e),
        e
      }
    }
  }),
  w.ajaxPrefilter('script', function (e) {
    void 0 === e.cache && (e.cache = !1),
    e.crossDomain && (e.type = 'GET', e.global = !1)
  }),
  w.ajaxTransport('script', function (t) {
    if (t.crossDomain) {
      var r,
      i = C.head || w('head') [0] || C.documentElement;
      return {
        send: function (e, n) {
          (r = C.createElement('script')).async = !0,
          t.scriptCharset && (r.charset = t.scriptCharset),
          r.src = t.url,
          r.onload = r.onreadystatechange = function (e, t) {
            !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200, 'success'))
          },
          i.insertBefore(r, i.firstChild)
        },
        abort: function () {
          r && r.onload(void 0, !0)
        }
      }
    }
  });
  var Jt = [
  ],
  Yt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Jt.pop() || w.expando + '_' + Ct++;
      return this[e] = !0,
      e
    }
  }),
  w.ajaxPrefilter('json jsonp', function (e, t, n) {
    var r,
    i,
    o,
    a = !1 !== e.jsonp && (Yt.test(e.url) ? 'url' : 'string' == typeof e.data && !(e.contentType || '').indexOf('application/x-www-form-urlencoded') && Yt.test(e.data) && 'data');
    if (a || 'jsonp' === e.dataTypes[0]) return r = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback()  : e.jsonpCallback,
    a ? e[a] = e[a].replace(Yt, '$1' + r)  : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
    e.converters['script json'] = function () {
      return o || w.error(r + ' was not called'),
      o[0]
    },
    e.dataTypes[0] = 'json',
    i = h[r],
    h[r] = function () {
      o = arguments
    },
    n.always(function () {
      h[r] = i,
      e[r] && (e.jsonpCallback = t.jsonpCallback, Jt.push(r)),
      o && w.isFunction(i) && i(o[0]),
      o = i = void 0
    }),
    'script'
  }),
  w.parseHTML = function (e, t, n) {
    if (!e || 'string' != typeof e) return null;
    'boolean' == typeof t && (n = t, t = !1),
    t = t || C;
    var r = b.exec(e),
    n = !n && [
    ];
    return r ? [
      t.createElement(r[1])
    ] : (r = w.buildFragment([e], t, n), n && n.length && w(n).remove(), w.merge([], r.childNodes))
  };
  var Gt = w.fn.load;
  w.fn.load = function (e, t, n) {
    if ('string' != typeof e && Gt) return Gt.apply(this, arguments);
    var r,
    i,
    o,
    a = this,
    s = e.indexOf(' ');
    return 0 <= s && (r = w.trim(e.slice(s, e.length)), e = e.slice(0, s)),
    w.isFunction(t) ? (n = t, t = void 0)  : t && 'object' == typeof t && (o = 'POST'),
    0 < a.length && w.ajax({
      url: e,
      type: o,
      dataType: 'html',
      data: t
    }).done(function (e) {
      i = arguments,
      a.html(r ? w('<div>').append(w.parseHTML(e)).find(r)  : e)
    }).complete(n && function (e, t) {
      a.each(n, i || [
        e.responseText,
        t,
        e
      ])
    }),
    this
  },
  w.expr.filters.animated = function (t) {
    return w.grep(w.timers, function (e) {
      return t === e.elem
    }).length
  };
  var Qt = h.document.documentElement;
  function Kt(e) {
    return w.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }
  w.offset = {
    setOffset: function (e, t, n) {
      var r,
      i,
      o,
      a,
      s = w.css(e, 'position'),
      l = w(e),
      u = {
      };
      'static' === s && (e.style.position = 'relative'),
      o = l.offset(),
      r = w.css(e, 'top'),
      a = w.css(e, 'left'),
      a = ('absolute' === s || 'fixed' === s) && - 1 < w.inArray('auto', [
        r,
        a
      ]) ? (i = (s = l.position()).top, s.left)  : (i = parseFloat(r) || 0, parseFloat(a) || 0),
      null != (t = w.isFunction(t) ? t.call(e, n, o)  : t).top && (u.top = t.top - o.top + i),
      null != t.left && (u.left = t.left - o.left + a),
      'using' in t ? t.using.call(e, u)  : l.css(u)
    }
  },
  w.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        w.offset.setOffset(this, t, e)
      });
      var e,
      n = {
        top: 0,
        left: 0
      },
      r = this[0],
      i = r && r.ownerDocument;
      return i ? (e = i.documentElement, w.contains(e, r) ? (typeof r.getBoundingClientRect !== M && (n = r.getBoundingClientRect()), i = Kt(i), {
        top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
        left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
      })  : n)  : void 0
    },
    position: function () {
      if (this[0]) {
        var e,
        t,
        n = {
          top: 0,
          left: 0
        },
        r = this[0];
        return 'fixed' === w.css(r, 'position') ? t = r.getBoundingClientRect()  : (e = this.offsetParent(), t = this.offset(), (n = !w.nodeName(e[0], 'html') ? e.offset()  : n).top += w.css(e[0], 'borderTopWidth', !0), n.left += w.css(e[0], 'borderLeftWidth', !0)),
        {
          top: t.top - n.top - w.css(r, 'marginTop', !0),
          left: t.left - n.left - w.css(r, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || Qt; e && !w.nodeName(e, 'html') && 'static' === w.css(e, 'position'); ) e = e.offsetParent;
        return e || Qt
      })
    }
  }),
  w.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (t, i) {
    var o = /Y/.test(i);
    w.fn[t] = function (e) {
      return X(this, function (e, t, n) {
        var r = Kt(e);
        if (void 0 === n) return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
        r ? r.scrollTo(o ? w(r).scrollLeft()  : n, o ? n : w(r).scrollTop())  : e[t] = n
      }, t, e, arguments.length, null)
    }
  }),
  w.each(['top',
  'left'], function (e, n) {
    w.cssHooks[n] = Be(y.pixelPosition, function (e, t) {
      if (t) return t = je(e, n),
      Oe.test(t) ? w(e).position() [n] + 'px' : t
    })
  }),
  w.each({
    Height: 'height',
    Width: 'width'
  }, function (o, a) {
    w.each({
      padding: 'inner' + o,
      content: a,
      '': 'outer' + o
    }, function (r, e) {
      w.fn[e] = function (e, t) {
        var n = arguments.length && (r || 'boolean' != typeof e),
        i = r || (!0 === e || !0 === t ? 'margin' : 'border');
        return X(this, function (e, t, n) {
          var r;
          return w.isWindow(e) ? e.document.documentElement['client' + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body['scroll' + o], r['scroll' + o], e.body['offset' + o], r['offset' + o], r['client' + o]))  : void 0 === n ? w.css(e, t, i)  : w.style(e, t, n, i)
        }, a, n ? e : void 0, n, null)
      }
    })
  }),
  w.fn.size = function () {
    return this.length
  },
  w.fn.andSelf = w.fn.addBack,
  'function' == typeof define && define.amd && define('jquery', [
  ], function () {
    return w
  });
  var Zt = h.jQuery,
  en = h.$;
  return w.noConflict = function (e) {
    return h.$ === w && (h.$ = en),
    e && h.jQuery === w && (h.jQuery = Zt),
    w
  },
  typeof e === M && (h.jQuery = h.$ = w),
  w
});
