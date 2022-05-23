(function () {
  "use strict";
  var e = {
      4167: function (e, t, s) {
        s(6992), s(8674), s(9601), s(7727);
        var a = s(8935),
          n = function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s(
              "div",
              { attrs: { id: "app" } },
              [s("MainHeader"), s("SideNav"), s("router-view")],
              1
            );
          },
          r = [],
          i = function () {
            var e = this,
              t = e.$createElement;
            e._self._c;
            return e._m(0);
          },
          o = [
            function () {
              var e = this,
                t = e.$createElement,
                a = e._self._c || t;
              return a("header", { staticClass: "header" }, [
                a("div", { staticClass: "company" }, [
                  a("img", {
                    staticClass: "company__logo",
                    attrs: {
                      src: s(9574),
                      alt: "",
                      "aria-hidden": "true",
                      width: "50",
                      height: "50",
                    },
                  }),
                  a("h1", { staticClass: "company__title" }, [
                    e._v("Surreal São Paulo"),
                  ]),
                  a("h2", { staticClass: "company__subtitle" }, [e._v("Vtex")]),
                ]),
                a("div", { staticClass: "user" }, [
                  a("button", {
                    staticClass: "user__notifications",
                    attrs: { "aria-label": "Checa as notificações do usuário" },
                  }),
                  a("p", { staticClass: "user__name" }, [e._v("Olá, Joaquim")]),
                  a("img", {
                    staticClass: "user__avatar",
                    attrs: {
                      src: s(5412),
                      alt: "",
                      "aria-hidden": "true",
                      width: "54",
                      height: "54",
                    },
                  }),
                ]),
              ]);
            },
          ],
          c = { name: "MainHeader" },
          l = c,
          u = s(1001),
          d = (0, u.Z)(l, i, o, !1, null, null, null),
          p = d.exports,
          f = function () {
            var e = this,
              t = e.$createElement;
            e._self._c;
            return e._m(0);
          },
          m = [
            function () {
              var e = this,
                t = e.$createElement,
                a = e._self._c || t;
              return a("nav", { staticClass: "sidenav" }, [
                a("ul", { staticClass: "actions" }, [
                  a("li", [
                    a("a", { attrs: { href: "#" } }, [
                      a("img", {
                        attrs: {
                          src: s(4391),
                          alt: "",
                          "aria-hidden": "true",
                          width: "40",
                          height: "40",
                        },
                      }),
                      a("span", { staticClass: "sr-only" }, [
                        e._v("Faça uma busca"),
                      ]),
                    ]),
                  ]),
                  a("li", [
                    a("a", { attrs: { href: "#" } }, [
                      a("img", {
                        attrs: {
                          src: s(1293),
                          alt: "",
                          "aria-hidden": "true",
                          width: "40",
                          height: "40",
                        },
                      }),
                      a("span", { staticClass: "sr-only" }, [
                        e._v("Acesse os arquivos"),
                      ]),
                    ]),
                  ]),
                ]),
                a(
                  "button",
                  {
                    staticClass: "filter-btn",
                    attrs: { "aria-label": "Filtra as listas" },
                  },
                  [
                    a("img", {
                      attrs: {
                        src: s(8742),
                        alt: "",
                        "aria-hidden": "true",
                        width: "40",
                        height: "40",
                      },
                    }),
                  ]
                ),
              ]);
            },
          ],
          h = { name: "SideNav" },
          _ = h,
          v = (0, u.Z)(_, f, m, !1, null, "c47c2f54", null),
          g = v.exports,
          C = { name: "app", components: { MainHeader: p, SideNav: g } },
          b = C,
          E = (0, u.Z)(b, n, r, !1, null, null, null),
          y = E.exports,
          w = s(2809),
          A = function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("main", [s("CepList"), s("AddressList")], 1);
          },
          x = [],
          S = function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s(
              "section",
              { staticClass: "list-container" },
              [
                s("AddCep", { staticClass: "add-cep" }),
                s(
                  "transition-group",
                  { staticClass: "ceps-list", attrs: { tag: "ul" } },
                  e._l(this.$store.state.ceps, function (t, a) {
                    return s(
                      "li",
                      {
                        key: t + a,
                        staticClass: "ceps-item",
                        attrs: { role: "listitem" },
                      },
                      [
                        s("div", { staticClass: "ceps-item__icon" }),
                        s("p", { staticClass: "ceps-item__cep" }, [
                          e._v(" Cep "),
                          s("span", [e._v(e._s(t.cep))]),
                        ]),
                        s(
                          "button",
                          {
                            staticClass: "ceps-item__delete",
                            attrs: { "aria-label": "Apaga o CEP listado" },
                            on: {
                              click: function (s) {
                                return e.deleteCepAndAddress(t);
                              },
                            },
                          },
                          [e._v(" x ")]
                        ),
                      ]
                    );
                  }),
                  0
                ),
                s(
                  "div",
                  { staticClass: "btn--generate-address" },
                  [
                    s(
                      "ButtonPrimary",
                      {
                        attrs: {
                          method: e.addAddress,
                          id: "btn--generate-address",
                          ariaLabel: "Gera uma lista de endereços",
                        },
                      },
                      [e._v("Gerar Endereços")]
                    ),
                    s("transition", [
                      e.noCep
                        ? s("p", { staticClass: "no-cep" }, [
                            e._v(e._s(e.noCep)),
                          ])
                        : e._e(),
                    ]),
                  ],
                  1
                ),
                s("div", { staticClass: "separator" }),
              ],
              1
            );
          },
          O = [],
          Z = s(3019),
          D =
            (s(2479),
            s(1539),
            s(4747),
            function () {
              var e = this,
                t = e.$createElement,
                s = e._self._c || t;
              return s(
                "form",
                { staticClass: "cep-form" },
                [
                  s(
                    "label",
                    { staticClass: "sr-only", attrs: { for: "cep" } },
                    [e._v("Insira um CEP")]
                  ),
                  s("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.cep,
                        expression: "cep",
                      },
                    ],
                    staticClass: "cep-form__input",
                    attrs: {
                      type: "tel",
                      maxlength: "9",
                      id: "cep",
                      name: "cep",
                      placeholder: "Insira um CEP (00000-000)",
                    },
                    domProps: { value: e.cep },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.cep = t.target.value);
                      },
                    },
                  }),
                  s(
                    "ButtonPrimary",
                    {
                      staticClass: "btn--add-cep",
                      attrs: { method: e.addCep },
                    },
                    [s("span"), e._v(" Adicionar CEP")]
                  ),
                  s("transition", { attrs: { mode: "out-in" } }, [
                    e.message
                      ? s("p", { staticClass: "cep-form__message" }, [
                          e._v(e._s(e.message)),
                        ])
                      : e._e(),
                  ]),
                ],
                1
              );
            }),
          P = [],
          k = s(7906),
          M = s(6198),
          N = (s(7941), s(9653), s(4916), s(5306), s(6699), s(2023), s(4665)),
          $ = {
            name: "AddCep",
            data: function () {
              return { cep: "", message: "" };
            },
            computed: {
              allCeps: function () {
                return Object.keys(this.$store.state.ceps);
              },
              cepNumber: function () {
                return Number(this.cep.replace("-", ""));
              },
            },
            methods: (0, Z.Z)(
              (0, Z.Z)({}, (0, N.OI)(["ADD_CEP"])),
              {},
              {
                addCep: function () {
                  var e = this;
                  return (0, M.Z)(
                    (0, k.Z)().mark(function t() {
                      var s, a;
                      return (0, k.Z)().wrap(
                        function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!(e.allCeps.length >= 50)) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  e.showMessage("Limite de 50 CEPS atingido"),
                                  t.abrupt("return")
                                );
                              case 5:
                                if (
                                  !e.allCeps.includes(e.cep.replace("-", ""))
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return (
                                  e.showMessage("CEP já listado"),
                                  t.abrupt("return")
                                );
                              case 10:
                                if (
                                  !(
                                    isNaN(e.cep.replace("-", "")) ||
                                    e.cep.length < 8 ||
                                    0 == e.cepNumber ||
                                    e.cepNumber % 1 !== 0
                                  )
                                ) {
                                  t.next = 13;
                                  break;
                                }
                                return (
                                  e.showMessage(
                                    "Favor inserir um CEP no formato válido"
                                  ),
                                  t.abrupt("return")
                                );
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.next = 16),
                                  fetch(
                                    "https://viacep.com.br/ws/".concat(
                                      e.cepNumber,
                                      "/json/"
                                    )
                                  )
                                );
                              case 16:
                                return (s = t.sent), (t.next = 19), s.json();
                              case 19:
                                if (((a = t.sent), !a.erro)) {
                                  t.next = 23;
                                  break;
                                }
                                return (
                                  e.showMessage("CEP não encontrado"),
                                  t.abrupt("return")
                                );
                              case 23:
                                e.ADD_CEP(a), (t.next = 30);
                                break;
                              case 26:
                                return (
                                  (t.prev = 26),
                                  (t.t0 = t["catch"](13)),
                                  e.showMessage(
                                    "Favor inserir um CEP no formato válido"
                                  ),
                                  t.abrupt("return")
                                );
                              case 30:
                                return (
                                  (t.prev = 30), (e.cep = ""), t.finish(30)
                                );
                              case 33:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[13, 26, 30, 33]]
                      );
                    })
                  )();
                },
                showMessage: function (e) {
                  var t = this;
                  (this.message = e),
                    (document.querySelector("button.btn--add-cep").disabled =
                      !0),
                    (this.cep = ""),
                    setTimeout(function () {
                      (t.message = ""),
                        (document.querySelector(
                          "button.btn--add-cep"
                        ).disabled = !1);
                    }, 1e3);
                },
                getLocalStorage: function () {
                  var e = this,
                    t = JSON.parse(window.localStorage.getItem("ceps"));
                  t.forEach(function (t) {
                    (e.cep = t), e.addCep();
                  });
                },
              }
            ),
            created: function () {
              this.getLocalStorage();
            },
          },
          j = $,
          R = (0, u.Z)(j, D, P, !1, null, "4699ff71", null),
          L = R.exports,
          I = {
            name: "CepList",
            components: { AddCep: L },
            data: function () {
              return { message: "", noCep: "" };
            },
            computed: {
              allCeps: function () {
                return Object.values(this.$store.state.ceps);
              },
            },
            methods: (0, Z.Z)(
              (0, Z.Z)(
                (0, Z.Z)({}, (0, N.nv)(["deleteCepAndAddress"])),
                (0, N.OI)(["ADD_ADDRESS", "REMOVE_CEP"])
              ),
              {},
              {
                addAddress: function () {
                  var e = this;
                  0 === this.allCeps.length &&
                    ((this.noCep = "Nenhum CEP listado"),
                    (document.getElementById("btn--generate-address").disabled =
                      !0),
                    setTimeout(function () {
                      (e.noCep = ""),
                        (document.getElementById(
                          "btn--generate-address"
                        ).disabled = !1);
                    }, 1e3)),
                    this.allCeps.forEach(function (t) {
                      e.ADD_ADDRESS(t);
                    });
                },
                removeCep: function (e) {
                  this.REMOVE_CEP(e);
                },
              }
            ),
          },
          V = I,
          B = (0, u.Z)(V, S, O, !1, null, "90135726", null),
          F = B.exports,
          T = function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "section",
              { staticClass: "address-list" },
              [
                a("transition", { attrs: { appear: "", mode: "out-in" } }, [
                  0 === e.addressesArray.length
                    ? a("div", [
                        a("p", { staticClass: "empty" }, [
                          e._v("Nenhum endereço listado"),
                        ]),
                      ])
                    : a("div", [
                        a(
                          "ul",
                          { staticClass: "addresses" },
                          [
                            a(
                              "transition-group",
                              { attrs: { appear: "", mode: "out-in" } },
                              e._l(e.allAddresses, function (t) {
                                return a("li", { key: t.cep }, [
                                  a("div", { staticClass: "address" }, [
                                    a("img", {
                                      staticClass: "address__icon",
                                      attrs: {
                                        src: s(2263),
                                        alt: "",
                                        "aria-hidden": "true",
                                        width: "32",
                                        height: "32",
                                      },
                                    }),
                                    a("div", { staticClass: "address__info" }, [
                                      a(
                                        "p",
                                        {
                                          staticClass: "address__info--primary",
                                        },
                                        [
                                          e._v(
                                            " " +
                                              e._s(t.logradouro) +
                                              ", " +
                                              e._s(t.bairro) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      a(
                                        "p",
                                        {
                                          staticClass:
                                            "address__ info--secondary",
                                        },
                                        [
                                          e._v(
                                            " " +
                                              e._s(t.localidade) +
                                              " - " +
                                              e._s(t.uf) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ]),
                                    a(
                                      "button",
                                      {
                                        staticClass: "address__delete-btn",
                                        attrs: {
                                          "aria-label":
                                            "Apaga o card de endereço",
                                        },
                                        on: {
                                          click: function (s) {
                                            return e.REMOVE_ADDRESS(t);
                                          },
                                        },
                                      },
                                      [
                                        a("img", {
                                          attrs: {
                                            src: s(2421),
                                            alt: "",
                                            "aria-hidden": "true",
                                            width: "22",
                                            height: "22",
                                          },
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]);
                              }),
                              0
                            ),
                          ],
                          1
                        ),
                      ]),
                ]),
              ],
              1
            );
          },
          q = [],
          H = {
            name: "AddressList",
            computed: {
              allAddresses: function () {
                return this.$store.state.addresses;
              },
              addressesArray: function () {
                return Object.keys(this.$store.state.addresses);
              },
            },
            methods: (0, Z.Z)({}, (0, N.OI)(["REMOVE_ADDRESS"])),
          },
          J = H,
          z = (0, u.Z)(J, T, q, !1, null, "52896a57", null),
          G = z.exports,
          K = { name: "HomeView", components: { CepList: F, AddressList: G } },
          Q = K,
          U = (0, u.Z)(Q, A, x, !1, null, null, null),
          W = U.exports;
        a.Z.use(w.Z);
        var X = [{ path: "/", name: "home", component: W }],
          Y = new w.Z({ mode: "history", base: "/", routes: X }),
          ee = Y;
        s(8862);
        a.Z.use(N.ZP);
        var te = new N.ZP.Store({
            state: { ceps: {}, addresses: {} },
            mutations: {
              ADD_CEP: function (e, t) {
                a.Z.set(this.state.ceps, t.cep.replace("-", ""), t),
                  window.localStorage.setItem(
                    "ceps",
                    JSON.stringify(Object.keys(this.state.ceps))
                  );
              },
              ADD_ADDRESS: function (e, t) {
                a.Z.set(this.state.addresses, t.cep.replace("-", ""), t);
              },
              REMOVE_CEP: function (e, t) {
                a.Z["delete"](this.state.ceps, t.cep.replace("-", "")),
                  window.localStorage.setItem(
                    "ceps",
                    JSON.stringify(Object.keys(this.state.ceps))
                  );
              },
              REMOVE_ADDRESS: function (e, t) {
                a.Z["delete"](this.state.addresses, t.cep.replace("-", ""));
              },
            },
            actions: {
              deleteCepAndAddress: function (e, t) {
                e.commit("REMOVE_CEP", t), e.commit("REMOVE_ADDRESS", t);
              },
            },
          }),
          se = function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s(
              "button",
              {
                staticClass: "btn",
                attrs: { type: "submit", "aria-label": e.ariaLabel },
                on: {
                  click: function (t) {
                    return t.preventDefault(), e.method.apply(null, arguments);
                  },
                },
              },
              [e._t("default")],
              2
            );
          },
          ae = [],
          ne = {
            name: "ButtonPrimary",
            props: { method: { type: Function }, ariaLabel: { type: String } },
          },
          re = ne,
          ie = (0, u.Z)(re, se, ae, !1, null, "028d7a84", null),
          oe = ie.exports;
        (a.Z.config.productionTip = !1),
          a.Z.component("ButtonPrimary", oe),
          new a.Z({
            router: ee,
            store: te,
            render: function (e) {
              return e(y);
            },
          }).$mount("#app");
      },
      8742: function (e, t, s) {
        e.exports = s.p + "img/icone-ajuste.d2a07ede.svg";
      },
      4391: function (e, t, s) {
        e.exports = s.p + "img/icone-busca.668177f2.svg";
      },
      1293: function (e, t, s) {
        e.exports = s.p + "img/icone-folder2.94f35f14.svg";
      },
      2421: function (e, t, s) {
        e.exports = s.p + "img/icone-lixo.baaf7ca7.svg";
      },
      2263: function (e, t, s) {
        e.exports = s.p + "img/icone-lugar.574cba31.svg";
      },
      9574: function (e, t, s) {
        e.exports = s.p + "img/logo.984ffd2d.svg";
      },
      5412: function (e, t, s) {
        e.exports = s.p + "img/usuario.be36bc7d.svg";
      },
    },
    t = {};
  function s(a) {
    var n = t[a];
    if (void 0 !== n) return n.exports;
    var r = (t[a] = { exports: {} });
    return e[a](r, r.exports, s), r.exports;
  }
  (s.m = e),
    (function () {
      var e = [];
      s.O = function (t, a, n, r) {
        if (!a) {
          var i = 1 / 0;
          for (u = 0; u < e.length; u++) {
            (a = e[u][0]), (n = e[u][1]), (r = e[u][2]);
            for (var o = !0, c = 0; c < a.length; c++)
              (!1 & r || i >= r) &&
              Object.keys(s.O).every(function (e) {
                return s.O[e](a[c]);
              })
                ? a.splice(c--, 1)
                : ((o = !1), r < i && (i = r));
            if (o) {
              e.splice(u--, 1);
              var l = n();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        r = r || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
        e[u] = [a, n, r];
      };
    })(),
    (function () {
      s.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return s.d(t, { a: t }), t;
      };
    })(),
    (function () {
      s.d = function (e, t) {
        for (var a in t)
          s.o(t, a) &&
            !s.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (function () {
      s.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      s.p = "/";
    })(),
    (function () {
      var e = { 143: 0 };
      s.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, a) {
          var n,
            r,
            i = a[0],
            o = a[1],
            c = a[2],
            l = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (n in o) s.o(o, n) && (s.m[n] = o[n]);
            if (c) var u = c(s);
          }
          for (t && t(a); l < i.length; l++)
            (r = i[l]), s.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return s.O(u);
        },
        a = (self["webpackChunkincreazy_teste_frontend"] =
          self["webpackChunkincreazy_teste_frontend"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = s.O(void 0, [998], function () {
    return s(4167);
  });
  a = s.O(a);
})();
//# sourceMappingURL=app-legacy.957d8544.js.map
