(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Email_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      emails: [],
      is_loading: true,
      createMode: false,
      form: new Form({
        host: '',
        port: '',
        driver: 'smtp',
        encryption: 'ssl',
        user: '',
        pass: '',
        sender_name: '',
        sender_email: '',
        defaultMail: false
      })
    };
  },
  methods: {
    getMails: function getMails() {
      var _this = this;

      axios.get("/admin/api/get-emails").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.emails = data;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.form.post("/admin/api/create-email-setup").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Email Account Added", data.msg, "success").then(function () {
            _this2.emails.unshift(data.data);

            _this2.form.reset();

            _this2.createMode = false;
          });
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteEmail: function deleteEmail(id, index) {
      var _this3 = this;

      axios.post("/admin/api/delete-email", {
        id: id
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Item deleted", data.msg, "success");

          _this3.emails.splice(index, 1);
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    setDefault: function setDefault(id, index) {
      var _this4 = this;

      axios.post("/admin/api/set-default-email", {
        id: id
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this4.emails.forEach(function (item, i) {
            item.default_email = 0;
          });

          _this4.emails[index].default_email = 1;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getMails();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Email/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/Email/Index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_e520b44e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=e520b44e& */ "./resources/js/components/pages/Email/Index.vue?vue&type=template&id=e520b44e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Email/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_e520b44e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_e520b44e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Email/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Email/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/Email/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Email/Index.vue?vue&type=template&id=e520b44e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/Email/Index.vue?vue&type=template&id=e520b44e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e520b44e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e520b44e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_e520b44e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=e520b44e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Index.vue?vue&type=template&id=e520b44e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Index.vue?vue&type=template&id=e520b44e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Index.vue?vue&type=template&id=e520b44e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _vm.createMode == true
        ? _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-header d-flex justify-content-end" },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.createMode = false
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h3", { staticClass: "text-muted text-center" }, [
                _vm._v("Email Setup")
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submitForm.apply(null, arguments)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "row justify-content-center mt-5" },
                    [
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("HOST NAME")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.host,
                              expression: "form.host"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "example.com" },
                          domProps: { value: _vm.form.host },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "host", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("PORT NUMBER")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.port,
                              expression: "form.port"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "number", placeholder: "e.g: 465" },
                          domProps: { value: _vm.form.port },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "port", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("MAIL DRIVER (SMTP Recommended)")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.driver,
                                expression: "form.driver"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "driver",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "smtp" } }, [
                              _vm._v("SMTP")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "mailgun" } }, [
                              _vm._v("MAIL GUN")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "sendmail" } }, [
                              _vm._v("SEND MAIL")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "postmark" } }, [
                              _vm._v("POST MARK")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v(
                            "ENCRYPTION TYPE (SSL Recommended | Use 'TLS' for GMAIL)"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.encryption,
                                expression: "form.encryption"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "encryption",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "ssl" } }, [
                              _vm._v("SSL")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "tls" } }, [
                              _vm._v("TLS")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("USER EMAIL")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.user,
                              expression: "form.user"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            placeholder: "youruser@name.com",
                            autocomplete: "off"
                          },
                          domProps: { value: _vm.form.user },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "user", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("USER PASSWORD")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.pass,
                              expression: "form.pass"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Type your password",
                            autocomplete: "off"
                          },
                          domProps: { value: _vm.form.pass },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "pass", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("SENDER EMAIL (Optional)")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.sender_email,
                              expression: "form.sender_email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            placeholder: "youruser@name.com"
                          },
                          domProps: { value: _vm.form.sender_email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "sender_email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("SENDER NAME (Optional)")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.sender_name,
                              expression: "form.sender_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "youruser@name.com"
                          },
                          domProps: { value: _vm.form.sender_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "sender_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-7 mt-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.defaultMail,
                              expression: "form.defaultMail"
                            }
                          ],
                          attrs: { type: "checkbox", id: "defaultMail" },
                          domProps: {
                            checked: Array.isArray(_vm.form.defaultMail)
                              ? _vm._i(_vm.form.defaultMail, null) > -1
                              : _vm.form.defaultMail
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.form.defaultMail,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.form,
                                      "defaultMail",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.form,
                                      "defaultMail",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.form, "defaultMail", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "ml-2",
                            attrs: { for: "defaultMail" }
                          },
                          [_vm._v("Set as default email")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-7 mt-4 mb-4 text-center" },
                        [
                          _c(
                            "Button",
                            {
                              staticClass: "btn btn-primary w-100",
                              attrs: { form: _vm.form }
                            },
                            [_vm._v("SAVE")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-7 mt-4 mb-4" },
                        [
                          _c("AlertErrors", {
                            attrs: {
                              form: _vm.form,
                              message: "Something went wrong"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.createMode == false
        ? _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-header d-flex justify-content-between" },
              [
                _c("h4", [_vm._v("Email Accounts")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.createMode = true
                      }
                    }
                  },
                  [_vm._v("Add new "), _c("i", { staticClass: "fas fa-plus" })]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-stripped" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm.is_loading
                        ? _c("tr", [
                            _c(
                              "td",
                              { attrs: { colspan: "8" } },
                              _vm._l(10, function(n) {
                                return _c("skeleton", {
                                  key: n,
                                  staticClass: "mt-2",
                                  attrs: { width: "100%", height: "40px" }
                                })
                              }),
                              1
                            )
                          ])
                        : _vm._l(_vm.emails, function(email, i) {
                            return _c("tr", { key: i }, [
                              _c("td", [_vm._v(_vm._s(i + 1))]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-muted" }, [
                                _c("strong", [_vm._v(_vm._s(email.user_name))])
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(email.host))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(email.port))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(email.encryption))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(email.sender_name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(email.sender_email))]),
                              _vm._v(" "),
                              _c("td", [
                                email.default_email
                                  ? _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-check"
                                        }),
                                        _vm._v(" Default")
                                      ]
                                    )
                                  : _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-primary",
                                        on: {
                                          click: function($event) {
                                            return _vm.setDefault(email.id, i)
                                          }
                                        }
                                      },
                                      [_vm._v("Set Default")]
                                    )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-sm btn-warning",
                                      attrs: {
                                        to: {
                                          name: "admin-email.edit",
                                          params: { id: email.id }
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-edit" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-danger",
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteEmail(email.id, i)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-trash" })]
                                  )
                                ],
                                1
                              )
                            ])
                          })
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4 text-muted" }, [
      _c("strong", [_vm._v("HOST INFO")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4 text-muted" }, [
      _c("strong", [_vm._v("USER CREDENTIALS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("USER NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("HOST")]),
        _vm._v(" "),
        _c("th", [_vm._v("PORT")]),
        _vm._v(" "),
        _c("th", [_vm._v("ENCRYPTION TYPE")]),
        _vm._v(" "),
        _c("th", [_vm._v("SENDER NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("SENDER EMAIL")]),
        _vm._v(" "),
        _c("th", [_vm._v("DEFAULT")]),
        _vm._v(" "),
        _c("th", [_vm._v("ACTION")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);