(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Email_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: new Form({
        id: this.$route.params.id,
        host: '',
        port: '',
        driver: 'smtp',
        encryption: 'ssl',
        user: '',
        pass: '',
        sender_name: '',
        sender_email: '',
        defaultMail: true
      })
    };
  },
  methods: {
    getMail: function getMail() {
      var _this = this;

      axios.get("/admin/api/get-email-data?id=" + this.$route.params.id).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        console.log(data);

        if (data.status == "ok") {
          _this.form.host = data.data.host;
          _this.form.port = data.data.port;
          _this.form.driver = data.data.driver;
          _this.form.encryption = data.data.encryption;
          _this.form.user = data.data.user_name;
          _this.form.sender_name = data.data.sender_name;
          _this.form.sender_email = data.data.sender_email;
          _this.form.defaultMail = data.data.default_email;
        } else {
          _this.$router.push({
            name: "admin-email"
          });
        }
      })["catch"](function (err) {
        console.error(err.response.data);

        _this.$router.push({
          name: "admin-email"
        });
      });
    },
    submitForm: function submitForm() {
      this.form.post("/admin/api/update-email").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Email Account updated", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getMail();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Email/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/pages/Email/Edit.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_4cc3de53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=4cc3de53& */ "./resources/js/components/pages/Email/Edit.vue?vue&type=template&id=4cc3de53&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Email/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_4cc3de53___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_4cc3de53___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Email/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Email/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Email/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Email/Edit.vue?vue&type=template&id=4cc3de53&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/Email/Edit.vue?vue&type=template&id=4cc3de53& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4cc3de53___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4cc3de53___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4cc3de53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=4cc3de53& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Edit.vue?vue&type=template&id=4cc3de53&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Edit.vue?vue&type=template&id=4cc3de53&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Email/Edit.vue?vue&type=template&id=4cc3de53& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header d-flex justify-content-end" },
          [
            _c(
              "router-link",
              {
                staticClass: "raise-button",
                attrs: { to: { name: "admin-email" } }
              },
              [
                _c("i", { staticClass: "fas fa-arrow-left" }),
                _vm._v(" Go back")
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("h3", { staticClass: "text-muted text-center" }, [
            _vm._v("Edit Email Configuration")
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
              _c("div", { staticClass: "row justify-content-center mt-5" }, [
                _c("div", { staticClass: "col-md-7 mt-4" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "" } }, [_vm._v("HOST NAME")]),
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("PORT NUMBER")]),
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
                      _c("option", { attrs: { value: "tls" } }, [_vm._v("TLS")])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7 mt-4" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "" } }, [_vm._v("USER EMAIL")]),
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
                    attrs: { type: "email", placeholder: "youruser@name.com" },
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
                    _vm._v("CHANGE USER PASSWORD")
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
                      autocomplete: "off",
                      placeholder: "Type your password"
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
                    attrs: { type: "email", placeholder: "youruser@name.com" },
                    domProps: { value: _vm.form.sender_email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "sender_email", $event.target.value)
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
                    attrs: { type: "text", placeholder: "youruser@name.com" },
                    domProps: { value: _vm.form.sender_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "sender_name", $event.target.value)
                      }
                    }
                  })
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
                      [_vm._v(" UPDATE")]
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
                      attrs: { form: _vm.form, message: "Something went wrong" }
                    })
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ])
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
  }
]
render._withStripped = true



/***/ })

}]);