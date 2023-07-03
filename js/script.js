!function () {
  (Y = {
    scope: {
    }
  }).defineProperty = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
    if (n.get || n.set) throw new TypeError('ES3 does not support getters and setters.');
    t != Array.prototype && t != Object.prototype && (t[e] = n.value)
  },
  Y.getGlobal = function (t) {
    return ('undefined' == typeof window || window !== t) && 'undefined' != typeof global && null != global ? global : t
  },
  Y.global = Y.getGlobal(this),
  Y.SYMBOL_PREFIX = 'jscomp_symbol_',
  Y.initSymbol = function () {
    Y.initSymbol = function () {
    },
    Y.global.Symbol || (Y.global.Symbol = Y.Symbol)
  },
  Y.symbolCounter_ = 0,
  Y.Symbol = function (t) {
    return Y.SYMBOL_PREFIX + (t || '') + Y.symbolCounter_++
  },
  Y.initSymbolIterator = function () {
    Y.initSymbol();
    var t = (t = Y.global.Symbol.iterator) || (Y.global.Symbol.iterator = Y.global.Symbol('iterator'));
    'function' != typeof Array.prototype[t] && Y.defineProperty(Array.prototype, t, {
      configurable: !0,
      writable: !0,
      value: function () {
        return Y.arrayIterator(this)
      }
    }),
    Y.initSymbolIterator = function () {
    }
  },
  Y.arrayIterator = function (t) {
    var e = 0;
    return Y.iteratorPrototype(function () {
      return e < t.length ? {
        done: !1,
        value: t[e++]
      }
       : {
        done: !0
      }
    })
  },
  Y.iteratorPrototype = function (t) {
    return Y.initSymbolIterator(),
    (t = {
      next: t
    }) [Y.global.Symbol.iterator] = function () {
      return this
    },
    t
  },
  Y.array = Y.array || {
  },
  Y.iteratorFromArray = function (e, n) {
    Y.initSymbolIterator(),
    e instanceof String && (e += '');
    var r = 0,
    a = {
      next: function () {
        if (r < e.length) {
          var t = r++;
          return {
            value: n(t, e[t]),
            done: !1
          }
        }
        return a.next = function () {
          return {
            done: !0,
            value: void 0
          }
        },
        a.next()
      }
    };
    return a[Symbol.iterator] = function () {
      return a
    },
    a
  },
  Y.polyfill = function (t, e, n, r) {
    if (e) {
      for (n = Y.global, t = t.split('.'), r = 0; r < t.length - 1; r++) {
        var a = t[r];
        a in n || (n[a] = {
        }),
        n = n[a]
      }(e = e(r = n[t = t[t.length - 1]])) != r && null != e && Y.defineProperty(n, t, {
        configurable: !0,
        writable: !0,
        value: e
      })
    }
  },
  Y.polyfill('Array.prototype.keys', function (t) {
    return t || function () {
      return Y.iteratorFromArray(this, function (t) {
        return t
      })
    }
  }, 'es6-impl', 'es3');
  var t,
  Y = this;
  function i(t, e) {
    var n,
    r = {
    };
    return r.x = t,
    r.y = e,
    r.color = a[anime.random(0, a.length - 1)],
    r.radius = anime.random(1, 7),
    r.endPos = (n = r, t = anime.random(0, 360) * Math.PI / 180, e = anime.random(50, 180), e = [
      - 1,
      1
    ][anime.random(0, 1)] * e, {
      x: n.x + e * Math.cos(t),
      y: n.y + e * Math.sin(t)
    }),
    r.draw = function () {
      s.beginPath(),
      s.arc(r.x, r.y, r.radius, 0, 2 * Math.PI, !0),
      s.fillStyle = r.color,
      s.fill()
    },
    r
  }
  function u(t) {
    for (var e = 0; e < t.animatables.length; e++) t.animatables[e].target.draw()
  }
  function e(t, e) {
    for (var n, r, n = (n = e, (r = {
    }).x = t, r.y = n, r.color = '#ffffff', r.radius = 0.5, r.alpha = 0.5, r.lineWidth = 10, r.draw = function () {
      s.globalAlpha = r.alpha,
      s.beginPath(),
      s.arc(r.x, r.y, r.radius, 0, 2 * Math.PI, !0),
      s.lineWidth = r.lineWidth,
      s.strokeStyle = r.color,
      s.stroke(),
      s.globalAlpha = 1
    }, r), a = [
    ], o = 0; o < l; o++) a.push(i(t, e));
    anime.timeline().add({
      targets: a,
      x: function (t) {
        return t.endPos.x
      },
      y: function (t) {
        return t.endPos.y
      },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: u
    }).add({
      targets: n,
      radius: anime.random(80, 160),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: anime.random(1, 7)
      },
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: u,
      offset: 0
    })
  }
  t = this,
  o = function () {
    function a(t) {
      if (!C.col(t)) try {
        return document.querySelectorAll(t)
      } catch (t) {
      }
    }
    function w(t, e) {
      for (var n, r = t.length, a = 2 <= arguments.length ? e : void 0, o = [
      ], i = 0; i < r; i++) i in t && (n = t[i], e.call(a, n, i, t) && o.push(n));
      return o
    }
    function l(t) {
      return t.reduce(function (t, e) {
        return t.concat(C.arr(e) ? l(e)  : e)
      }, [
      ])
    }
    function c(t) {
      return C.arr(t) ? t : (t = C.str(t) ? a(t) || t : t) instanceof NodeList || t instanceof HTMLCollection ? [
      ].slice.call(t)  : [
        t
      ]
    }
    function o(t, e) {
      return t.some(function (t) {
        return t === e
      })
    }
    function f(t) {
      var e,
      n = {
      };
      for (e in t) n[e] = t[e];
      return n
    }
    function d(t, e) {
      var n,
      r = f(t);
      for (n in t) r[n] = (e.hasOwnProperty(n) ? e : t) [n];
      return r
    }
    function p(t, e) {
      var n,
      r = f(t);
      for (n in e) r[n] = (C.und(t[n]) ? e : t) [n];
      return r
    }
    function s(t) {
      if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) return t[2]
    }
    function g(t, e) {
      return C.fnc(t) ? t(e.target, e.id, e.total)  : t
    }
    function M(t, e) {
      if (e in t.style) return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()) || '0'
    }
    function m(t, e) {
      return C.dom(t) && o(F, e) ? 'transform' : C.dom(t) && (t.getAttribute(e) || C.svg(t) && t[e]) ? 'attribute' : C.dom(t) && 'transform' !== e && M(t, e) ? 'css' : null != t[e] ? 'object' : void 0
    }
    function h(t, e) {
      switch (m(t, e)) {
        case 'transform':
          return function (t, n) {
            var e = - 1 < (e = n).indexOf('translate') || 'perspective' === e ? 'px' : - 1 < e.indexOf('rotate') || - 1 < e.indexOf('skew') ? 'deg' : void 0,
            e = - 1 < n.indexOf('scale') ? 1 : 0 + e;
            if (!(t = t.style.transform)) return e;
            for (var r, a = [
            ], o = [
            ], i = /(\w+)\((.+?)\)/g; r = i.exec(t); ) a.push(r[1]),
            o.push(r[2]);
            return (t = w(o, function (t, e) {
              return a[e] === n
            })).length ? t[0] : e
          }(t, e);
        case 'css':
          return M(t, e);
        case 'attribute':
          return t.getAttribute(e)
      }
      return t[e] || 0
    }
    function y(t, e) {
      var n = /^(\*=|\+=|-=)/.exec(t);
      if (!n) return t;
      var r = s(t) || 0;
      switch (e = parseFloat(e), t = parseFloat(t.replace(n[0], '')), n[0][0]) {
        case '+':
          return e + t + r;
        case '-':
          return e - t + r;
        case '*':
          return e * t + r
      }
    }
    function i(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }
    function n(t) {
      t = t.points;
      for (var e, n = 0, r = 0; r < t.numberOfItems; r++) {
        var a = t.getItem(r);
        0 < r && (n += i(e, a)),
        e = a
      }
      return n
    }
    function u(t) {
      if (t.getTotalLength) return t.getTotalLength();
      switch (t.tagName.toLowerCase()) {
        case 'circle':
          return 2 * Math.PI * t.getAttribute('r');
        case 'rect':
          return 2 * t.getAttribute('width') + 2 * t.getAttribute('height');
        case 'line':
          return i({
            x: t.getAttribute('x1'),
            y: t.getAttribute('y1')
          }, {
            x: t.getAttribute('x2'),
            y: t.getAttribute('y2')
          });
        case 'polyline':
          return n(t);
        case 'polygon':
          var e = t.points;
          return n(t) + i(e.getItem(e.numberOfItems - 1), e.getItem(0))
      }
    }
    function v(t, e) {
      var n,
      r,
      a = /-?\d*\.?\d+/g;
      return r = C.pth(t) ? t.totalLength : t,
      r = C.col(r) ? C.rgb(r) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r)) ? 'rgba(' + n[1] + ',1)' : r : C.hex(r) ? function (t) {
        t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, r) {
          return e + e + n + n + r + r
        });
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return 'rgba(' + (t = parseInt(e[1], 16)) + ',' + parseInt(e[2], 16) + ',' + (e = parseInt(e[3], 16)) + ',1)'
      }(r)  : C.hsl(r) ? function (t) {
        function e(t, e, n) {
          return n < 0 && (n += 1),
          1 < n && --n,
          n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
        t = parseInt(n[1]) / 360;
        var r,
        a,
        o = parseInt(n[2]) / 100,
        i = parseInt(n[3]) / 100,
        n = n[4] || 1;
        return 0 == o ? i = o = t = i : (i = e(a = 2 * i - (r = i < 0.5 ? i * (1 + o)  : i + o - i * o), r, t + 1 / 3), o = e(a, r, t), t = e(a, r, t - 1 / 3)),
        'rgba(' + 255 * i + ',' + 255 * o + ',' + 255 * t + ',' + n + ')'
      }(r)  : void 0 : (n = (n = s(r)) ? r.substr(0, r.length - n.length)  : r, e && !/\s/g.test(r) ? n + e : n),
      {
        original: r += '',
        numbers: r.match(a) ? r.match(a).map(Number)  : [
          0
        ],
        strings: C.str(t) || e ? r.split(a)  : [
        ]
      }
    }
    function b(t) {
      return w(t = t ? l(C.arr(t) ? t.map(c)  : c(t))  : [
      ], function (t, e, n) {
        return n.indexOf(t) === e
      })
    }
    function x(o, i) {
      var u;
      return o.tweens.map(function (t) {
        var e = (t = function (t, e) {
          var n,
          r = {
          };
          for (n in t) {
            var a = g(t[n], e);
            C.arr(a) && (1 === (a = a.map(function (t) {
              return g(t, e)
            })).length && (a = a[0])),
            r[n] = a
          }
          return r.duration = parseFloat(r.duration),
          r.delay = parseFloat(r.delay),
          r
        }(t, i)).value,
        n = h(i.target, o.name),
        r = u ? u.to.original : n,
        r = C.arr(e) ? e[0] : r,
        a = y(C.arr(e) ? e[1] : e, r),
        n = s(a) || s(r) || s(n);
        return t.from = v(r, n),
        t.to = v(a, n),
        t.start = u ? u.end : o.offset,
        t.end = t.start + t.delay + t.duration,
        t.easing = function (t) {
          return C.arr(t) ? k.apply(this, t)  : j[t]
        }(t.easing),
        t.elasticity = (1000 - Math.min(Math.max(t.elasticity, 1), 999)) / 1000,
        t.isPath = C.pth(e),
        t.isColor = C.col(t.from.original),
        t.isColor && (t.round = 1),
        u = t
      })
    }
    function A(e, t, n, r) {
      var a = 'delay' === e;
      return t.length ? (a ? Math.min : Math.max).apply(Math, t.map(function (t) {
        return t[e]
      }))  : a ? r.delay : n.offset + r.delay + r.duration
    }
    function r(t) {
      var e,
      n,
      r,
      a,
      o = d(S, t),
      i = d(O, t),
      n = (n = t.targets, (r = b(n)).map(function (t, e) {
        return {
          target: t,
          id: e,
          total: r.length
        }
      })),
      u = [
      ],
      s = p(o, i);
      for (e in t) s.hasOwnProperty(e) || 'targets' === e || u.push({
        name: e,
        offset: s.offset,
        tweens: function (t, n) {
          var e,
          r = f(n);
          return C.arr(t) && (2 !== (e = t.length) || C.obj(t[0]) ? C.fnc(n.duration) || (r.duration = n.duration / e)  : t = {
            value: t
          }),
          c(t).map(function (t, e) {
            return e = e ? 0 : n.delay,
            t = C.obj(t) && !C.pth(t) ? t : {
              value: t
            },
            C.und(t.delay) && (t.delay = e),
            t
          }).map(function (t) {
            return p(t, r)
          })
        }(t[e], i)
      });
      return a = u,
      p(o, {
        children: [
        ],
        animatables: n,
        animations: t = w(l(n.map(function (r) {
          return a.map(function (t) {
            var e,
            n = m(r.target, t.name);
            return t = n ? (e = x(t, r), {
              type: n,
              property: t.name,
              animatable: r,
              tweens: e,
              duration: e[e.length - 1].end,
              delay: e[0].delay
            })  : void 0
          })
        })), function (t) {
          return !C.und(t)
        }),
        duration: A('duration', t, o, i),
        delay: A('delay', t, o, i)
      })
    }
    function P(t) {
      function c() {
        return window.Promise && new Promise(function (t) {
          return v = t
        })
      }
      function f(t) {
        return x.reversed ? x.duration - t : t
      }
      function d(e) {
        for (var t = 0, n = {
        }, r = x.animations, a = r.length; t < a; ) {
          var o = r[t],
          i = o.animatable,
          u = (s = o.tweens) [f = s.length - 1];
          f && (u = w(s, function (t) {
            return e < t.end
          }) [0] || u);
          for (var s = Math.min(Math.max(e - u.start - u.delay, 0), u.duration) / u.duration, l = isNaN(s) ? 1 : u.easing(s, u.elasticity), s = u.to.strings, c = u.round, f = [
          ], d = void 0, d = u.to.numbers.length, p = 0; p < d; p++) {
            var g = void 0,
            g = u.to.numbers[p],
            m = u.from.numbers[p],
            g = u.isPath ? function (e, n) {
              function t(t) {
                return e.el.getPointAtLength(1 <= n + (t = void 0 === t ? 0 : t) ? n + t : 0)
              }
              var r = t(),
              a = t( - 1),
              o = t(1);
              switch (e.property) {
                case 'x':
                  return r.x;
                case 'y':
                  return r.y;
                case 'angle':
                  return 180 * Math.atan2(o.y - a.y, o.x - a.x) / Math.PI
              }
            }(u.value, l * g) : m + l * (g - m);
            c && (u.isColor && 2 < p || (g = Math.round(g * c) / c)),
            f.push(g)
          }
          if (u = s.length) for (d = s[0], l = 0; l < u; l++) c = s[l + 1],
          p = f[l],
          isNaN(p) || (d = c ? d + (p + c)  : d + (p + ' '));
           else d = f[0];
          E[o.type](i.target, o.property, d, n, i.id),
          o.currentValue = d,
          t++
        }
        if (t = Object.keys(n).length) for (r = 0; r < t; r++) I = I || (M(document.body, 'transform') ? 'transform' : '-webkit-transform'),
        x.animatables[r].target.style[I] = n[r].join(' ');
        x.currentTime = e,
        x.progress = e / x.duration * 100
      }
      function p(t) {
        x[t] && x[t](x)
      }
      function g() {
        x.remaining && !0 !== x.remaining && x.remaining--
      }
      function e(t) {
        var e = x.duration,
        n = x.offset,
        r = n + x.delay,
        a = x.currentTime,
        o = x.reversed,
        i = f(t);
        if (x.children.length) {
          var u = x.children,
          s = u.length;
          if (i >= x.currentTime) for (var l = 0; l < s; l++) u[l].seek(i);
           else for (; s--; ) u[s].seek(i)
        }(r <= i || !e) && (x.began || (x.began = !0, p('begin')), p('run')),
        n < i && i < e ? d(i)  : (i <= n && 0 !== a && (d(0), o && g()), (e <= i && a !== e || !e) && (d(e), o || g())),
        p('update'),
        e <= t && (x.remaining ? (h = m, 'alternate' === x.direction && (x.reversed = !x.reversed))  : (x.pause(), x.completed || (x.completed = !0, p('complete'), 'Promise' in window && (v(), b = c()))), y = 0)
      }
      t = void 0 === t ? {
      }
       : t;
      var m,
      h,
      y = 0,
      v = null,
      b = c(),
      x = r(t);
      return x.reset = function () {
        var t = x.direction,
        e = x.loop;
        for (x.currentTime = 0, x.progress = 0, x.paused = !0, x.began = !1, x.completed = !1, x.reversed = 'reverse' === t, x.remaining = 'alternate' === t && 1 === e ? 2 : e, d(0), t = x.children.length; t--; ) x.children[t].reset()
      },
      x.tick = function (t) {
        e((y + (m = t) - (h = h || m)) * P.speed)
      },
      x.seek = function (t) {
        e(f(t))
      },
      x.pause = function () {
        var t = L.indexOf(x);
        - 1 < t && L.splice(t, 1),
        x.paused = !0
      },
      x.play = function () {
        x.paused && (x.paused = !1, h = 0, y = f(x.currentTime), L.push(x), T || N())
      },
      x.reverse = function () {
        x.reversed = !x.reversed,
        h = 0,
        y = f(x.currentTime)
      },
      x.restart = function () {
        x.pause(),
        x.reset(),
        x.play()
      },
      x.finished = b,
      x.reset(),
      x.autoplay && x.play(),
      x
    }
    var I,
    S = {
      update: void 0,
      begin: void 0,
      run: void 0,
      complete: void 0,
      loop: 1,
      direction: 'normal',
      autoplay: !0,
      offset: 0
    },
    O = {
      duration: 1000,
      delay: 0,
      easing: 'easeOutElastic',
      elasticity: 500,
      round: 0
    },
    F = 'translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective'.split(' '),
    C = {
      arr: function (t) {
        return Array.isArray(t)
      },
      obj: function (t) {
        return - 1 < Object.prototype.toString.call(t).indexOf('Object')
      },
      pth: function (t) {
        return C.obj(t) && t.hasOwnProperty('totalLength')
      },
      svg: function (t) {
        return t instanceof SVGElement
      },
      dom: function (t) {
        return t.nodeType || C.svg(t)
      },
      str: function (t) {
        return 'string' == typeof t
      },
      fnc: function (t) {
        return 'function' == typeof t
      },
      und: function (t) {
        return void 0 === t
      },
      hex: function (t) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
      },
      rgb: function (t) {
        return /^rgb/.test(t)
      },
      hsl: function (t) {
        return /^hsl/.test(t)
      },
      col: function (t) {
        return C.hex(t) || C.rgb(t) || C.hsl(t)
      }
    },
    k = function (i, u, s, l) {
      if (0 <= i && i <= 1 && 0 <= s && s <= 1) {
        var c = new Float32Array(11);
        if (i !== u || s !== l) for (var t = 0; t < 11; ++t) c[t] = X(0.1 * t, i, s);
        return function (t) {
          if (i === u && s === l) return t;
          if (0 === t) return 0;
          if (1 === t) return 1;
          for (var e = 0, n = 1; 10 !== n && c[n] <= t; ++n) e += 0.1;
          var n = e + (t - c[--n]) / (c[n + 1] - c[n]) * 0.1,
          r = 3 * (1 - 3 * s + 3 * i) * n * n + 2 * (3 * s - 6 * i) * n + 3 * i;
          if (0.001 <= r) {
            for (e = 0; e < 4 && 0 !== (r = 3 * (1 - 3 * s + 3 * i) * n * n + 2 * (3 * s - 6 * i) * n + 3 * i); ++e) var a = X(n, i, s) - t,
            n = n - a / r;
            t = n
          } else if (0 === r) t = n;
           else {
            for (var n = e, e = e + 0.1, o = 0; 0 < (r = X(a = n + (e - n) / 2, i, s) - t) ? e = a : n = a, 1e-7 < Math.abs(r) && ++o < 10; );
            t = a
          }
          return X(t, u, l)
        }
      }
    },
    j = function () {
      function n(t, e) {
        return 0 === t || 1 === t ? t : - Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
      }
      var t,
      r = 'Quad Cubic Quart Quint Sine Expo Circ Back Elastic'.split(' '),
      e = {
        In: [
          [0.55,
          0.085,
          0.68,
          0.53],
          [
            0.55,
            0.055,
            0.675,
            0.19
          ],
          [
            0.895,
            0.03,
            0.685,
            0.22
          ],
          [
            0.755,
            0.05,
            0.855,
            0.06
          ],
          [
            0.47,
            0,
            0.745,
            0.715
          ],
          [
            0.95,
            0.05,
            0.795,
            0.035
          ],
          [
            0.6,
            0.04,
            0.98,
            0.335
          ],
          [
            0.6,
            - 0.28,
            0.735,
            0.045
          ],
          n
        ],
        Out: [
          [0.25,
          0.46,
          0.45,
          0.94],
          [
            0.215,
            0.61,
            0.355,
            1
          ],
          [
            0.165,
            0.84,
            0.44,
            1
          ],
          [
            0.23,
            1,
            0.32,
            1
          ],
          [
            0.39,
            0.575,
            0.565,
            1
          ],
          [
            0.19,
            1,
            0.22,
            1
          ],
          [
            0.075,
            0.82,
            0.165,
            1
          ],
          [
            0.175,
            0.885,
            0.32,
            1.275
          ],
          function (t, e) {
            return 1 - n(1 - t, e)
          }
        ],
        InOut: [
          [0.455,
          0.03,
          0.515,
          0.955],
          [
            0.645,
            0.045,
            0.355,
            1
          ],
          [
            0.77,
            0,
            0.175,
            1
          ],
          [
            0.86,
            0,
            0.07,
            1
          ],
          [
            0.445,
            0.05,
            0.55,
            0.95
          ],
          [
            1,
            0,
            0,
            1
          ],
          [
            0.785,
            0.135,
            0.15,
            0.86
          ],
          [
            0.68,
            - 0.55,
            0.265,
            1.55
          ],
          function (t, e) {
            return t < 0.5 ? n(2 * t, e) / 2 : 1 - n( - 2 * t + 2, e) / 2
          }
        ]
      },
      a = {
        linear: k(0.25, 0.25, 0.75, 0.75)
      },
      o = {
      };
      for (t in e) o.type = t,
      e[o.type].forEach(function (n) {
        return function (t, e) {
          a['ease' + n.type + r[e]] = C.fnc(t) ? t : k.apply(Y, t)
        }
      }(o)),
      o = {
        type: o.type
      };
      return a
    }(),
    E = {
      css: function (t, e, n) {
        return t.style[e] = n
      },
      attribute: function (t, e, n) {
        return t.setAttribute(e, n)
      },
      object: function (t, e, n) {
        return t[e] = n
      },
      transform: function (t, e, n, r, a) {
        r[a] || (r[a] = [
        ]),
        r[a].push(e + '(' + n + ')')
      }
    },
    L = [
    ],
    T = 0,
    N = B;
    function B() {
      T = requestAnimationFrame(t)
    }
    function t(t) {
      var e = L.length;
      if (e) {
        for (var n = 0; n < e; ) L[n] && L[n].tick(t),
        n++;
        B()
      } else cancelAnimationFrame(T),
      T = 0
    }
    function X(t, e, n) {
      return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
    }
    return P.version = '2.2.0',
    P.speed = 1,
    P.running = L,
    P.remove = function (t) {
      t = b(t);
      for (var e = L.length; e--; ) for (var n = L[e], r = n.animations, a = r.length; a--; ) o(t, r[a].animatable.target) && (r.splice(a, 1), r.length || n.pause())
    },
    P.getValue = h,
    P.path = function (t, e) {
      var n = C.str(t) ? a(t) [0] : t,
      r = e || 100;
      return function (t) {
        return {
          el: n,
          property: t,
          totalLength: u(n) * (r / 100)
        }
      }
    },
    P.setDashoffset = function (t) {
      var e = u(t);
      return t.setAttribute('stroke-dasharray', e),
      e
    },
    P.bezier = k,
    P.easings = j,
    P.timeline = function (r) {
      var a = P(r);
      return a.pause(),
      a.duration = 0,
      a.add = function (t) {
        return a.children.forEach(function (t) {
          t.began = !0,
          t.completed = !0
        }),
        c(t).forEach(function (t) {
          var e = p(t, d(O, r || {
          }));
          e.targets = e.targets || r.targets,
          t = a.duration;
          var n = e.offset;
          e.autoplay = !1,
          e.direction = a.direction,
          e.offset = C.und(n) ? t : y(n, t),
          a.began = !0,
          a.completed = !0,
          a.seek(e.offset),
          (e = P(e)).began = !0,
          e.completed = !0,
          e.duration > t && (a.duration = e.duration),
          a.children.push(e)
        }),
        a.seek(0),
        a.reset(),
        a.autoplay && a.restart(),
        a
      },
      a
    },
    P.random = function (t, e) {
      return Math.floor(Math.random() * (e - t + 1)) + t
    },
    P
  },
  'function' == typeof define && define.amd ? define([], o)  : 'object' == typeof module && module.exports ? module.exports = o()  : t.anime = o(),
  $('body').append('    <canvas id="MouseBoomContainer" style="position:fixed;left:0;top:0;z-index:99999999;pointer-events:none;"></canvas>');
  var s,
  l,
  n,
  r,
  a,
  o,
  c,
  f,
  d,
  p,
  g = document.querySelector('#MouseBoomContainer');
  g && (s = g.getContext('2d'), l = 15, r = n = 1, a = [
    '#0080FF',
    '#00FFFF',
    '#02DF82',
    '#D7FFEE'
  ], f = function () {
    g.width = 2 * window.innerWidth,
    g.height = 2 * window.innerHeight,
    g.style.width = window.innerWidth + 'px',
    g.style.height = window.innerHeight + 'px',
    g.getContext('2d').scale(2, 2)
  }, d = 500, o = function () {
    var t = this,
    e = arguments;
    clearTimeout(p),
    p = setTimeout(function () {
      f.apply(t, e)
    }, d)
  }, c = anime({
    duration: 1 / 0,
    update: function () {
      s.clearRect(0, 0, g.width, g.height)
    }
  }), document.addEventListener('mousedown', function (t) {
    'sidebar' !== t.target.id && 'toggle-sidebar' !== t.target.id && 'A' !== t.target.nodeName && 'IMG' !== t.target.nodeName && (c.play(), n = ((t = t).clientX || t.touches[0].clientX) - g.getBoundingClientRect().left, r = t.clientY || t.touches[0].clientY - g.getBoundingClientRect().top, e(n, r))
  }, !1), o(), window.addEventListener('resize', o, !1))
}();
