(function () {
  "use strict";
  var e = {
      4167: function (e, t, s) {
        var a = s(8935),
          r = function () {
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
          i = [],
          n = function () {
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
          d = s(1001),
          u = (0, d.Z)(l, n, o, !1, null, null, null),
          p = u.exports,
          m = function () {
            var e = this,
              t = e.$createElement;
            e._self._c;
            return e._m(0);
          },
          h = [
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
          f = { name: "SideNav" },
          _ = f,
          v = (0, d.Z)(_, m, h, !1, null, "c47c2f54", null),
          g = v.exports,
          C = { name: "app", components: { MainHeader: p, SideNav: g } },
          b = C,
          E = (0, d.Z)(b, r, i, !1, null, null, null),
          y = E.exports,
          w = s(2809),
          A = function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s("main", [s("CepList"), s("AddressList")], 1);
          },
          S = [],
          O = function () {
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
          D = [],
          P = function () {
            var e = this,
              t = e.$createElement,
              s = e._self._c || t;
            return s(
              "form",
              { staticClass: "cep-form" },
              [
                s("label", { staticClass: "sr-only", attrs: { for: "cep" } }, [
                  e._v("Insira um CEP"),
                ]),
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
                  { staticClass: "btn--add-cep", attrs: { method: e.addCep } },
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
          },
          x = [],
          Z = (s(6699), s(4665)),
          M = {
            name: "AddCep",
            data() {
              return { cep: "", message: "" };
            },
            computed: {
              allCeps() {
                return Object.keys(this.$store.state.ceps);
              },
              cepNumber() {
                return Number(this.cep.replace("-", ""));
              },
            },
            methods: {
              ...(0, Z.OI)(["ADD_CEP"]),
              async addCep() {
                if (this.allCeps.length >= 50)
                  this.showMessage("Limite de 50 CEPS atingido");
                else if (this.allCeps.includes(this.cep.replace("-", "")))
                  this.showMessage("CEP já listado");
                else if (
                  isNaN(this.cep.replace("-", "")) ||
                  this.cep.length < 8 ||
                  0 == this.cepNumber ||
                  this.cepNumber % 1 !== 0
                )
                  this.showMessage("Favor inserir um CEP no formato válido");
                else
                  try {
                    const e = await fetch(
                        `https://viacep.com.br/ws/${this.cepNumber}/json/`
                      ),
                      t = await e.json();
                    if (t.erro)
                      return void this.showMessage("CEP não encontrado");
                    this.ADD_CEP(t);
                  } catch {
                    return void this.showMessage(
                      "Favor inserir um CEP no formato válido"
                    );
                  } finally {
                    this.cep = "";
                  }
              },
              showMessage(e) {
                (this.message = e),
                  (document.querySelector("button.btn--add-cep").disabled = !0),
                  (this.cep = ""),
                  setTimeout(() => {
                    (this.message = ""),
                      (document.querySelector("button.btn--add-cep").disabled =
                        !1);
                  }, 1e3);
              },
              getLocalStorage() {
                const e = JSON.parse(window.localStorage.getItem("ceps"));
                e.forEach((e) => {
                  (this.cep = e), this.addCep();
                });
              },
            },
            created() {
              this.getLocalStorage();
            },
          },
          $ = M,
          N = (0, d.Z)($, P, x, !1, null, "4699ff71", null),
          j = N.exports,
          R = {
            name: "CepList",
            components: { AddCep: j },
            data() {
              return { message: "", noCep: "" };
            },
            computed: {
              allCeps() {
                return Object.values(this.$store.state.ceps);
              },
            },
            methods: {
              ...(0, Z.nv)(["deleteCepAndAddress"]),
              ...(0, Z.OI)(["ADD_ADDRESS", "REMOVE_CEP"]),
              addAddress() {
                0 === this.allCeps.length &&
                  ((this.noCep = "Nenhum CEP listado"),
                  (document.getElementById("btn--generate-address").disabled =
                    !0),
                  setTimeout(() => {
                    (this.noCep = ""),
                      (document.getElementById(
                        "btn--generate-address"
                      ).disabled = !1);
                  }, 1e3)),
                  this.allCeps.forEach((e) => {
                    this.ADD_ADDRESS(e);
                  });
              },
              removeCep(e) {
                this.REMOVE_CEP(e);
              },
            },
          },
          k = R,
          L = (0, d.Z)(k, O, D, !1, null, "90135726", null),
          I = L.exports,
          V = function () {
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
          B = [],
          F = {
            name: "AddressList",
            computed: {
              allAddresses() {
                return this.$store.state.addresses;
              },
              addressesArray() {
                return Object.keys(this.$store.state.addresses);
              },
            },
            methods: { ...(0, Z.OI)(["REMOVE_ADDRESS"]) },
          },
          T = F,
          q = (0, d.Z)(T, V, B, !1, null, "52896a57", null),
          H = q.exports,
          J = { name: "HomeView", components: { CepList: I, AddressList: H } },
          z = J,
          G = (0, d.Z)(z, A, S, !1, null, null, null),
          K = G.exports;
        a.Z.use(w.Z);
        const Q = [{ path: "/", name: "home", component: K }],
          U = new w.Z({ mode: "history", base: "/", routes: Q });
        var W = U;
        a.Z.use(Z.ZP);
        var X = new Z.ZP.Store({
            state: { ceps: {}, addresses: {} },
            mutations: {
              ADD_CEP(e, t) {
                a.Z.set(this.state.ceps, t.cep.replace("-", ""), t),
                  window.localStorage.setItem(
                    "ceps",
                    JSON.stringify(Object.keys(this.state.ceps))
                  );
              },
              ADD_ADDRESS(e, t) {
                a.Z.set(this.state.addresses, t.cep.replace("-", ""), t);
              },
              REMOVE_CEP(e, t) {
                a.Z["delete"](this.state.ceps, t.cep.replace("-", "")),
                  window.localStorage.setItem(
                    "ceps",
                    JSON.stringify(Object.keys(this.state.ceps))
                  );
              },
              REMOVE_ADDRESS(e, t) {
                a.Z["delete"](this.state.addresses, t.cep.replace("-", ""));
              },
            },
            actions: {
              deleteCepAndAddress(e, t) {
                e.commit("REMOVE_CEP", t), e.commit("REMOVE_ADDRESS", t);
              },
            },
          }),
          Y = function () {
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
          ee = [],
          te = {
            name: "ButtonPrimary",
            props: { method: { type: Function }, ariaLabel: { type: String } },
          },
          se = te,
          ae = (0, d.Z)(se, Y, ee, !1, null, "028d7a84", null),
          re = ae.exports;
        (a.Z.config.productionTip = !1),
          a.Z.component("ButtonPrimary", re),
          new a.Z({ router: W, store: X, render: (e) => e(y) }).$mount("#app");
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
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var i = (t[a] = { exports: {} });
    return e[a](i, i.exports, s), i.exports;
  }
  (s.m = e),
    (function () {
      var e = [];
      s.O = function (t, a, r, i) {
        if (!a) {
          var n = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (a = e[d][0]), (r = e[d][1]), (i = e[d][2]);
            for (var o = !0, c = 0; c < a.length; c++)
              (!1 & i || n >= i) &&
              Object.keys(s.O).every(function (e) {
                return s.O[e](a[c]);
              })
                ? a.splice(c--, 1)
                : ((o = !1), i < n && (n = i));
            if (o) {
              e.splice(d--, 1);
              var l = r();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        i = i || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
        e[d] = [a, r, i];
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
          var r,
            i,
            n = a[0],
            o = a[1],
            c = a[2],
            l = 0;
          if (
            n.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in o) s.o(o, r) && (s.m[r] = o[r]);
            if (c) var d = c(s);
          }
          for (t && t(a); l < n.length; l++)
            (i = n[l]), s.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return s.O(d);
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
//# sourceMappingURL=app.de9aedcc.js.map