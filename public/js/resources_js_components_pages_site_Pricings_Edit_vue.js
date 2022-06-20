(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_site_Pricings_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: new Form({
        pricingId: this.$route.params.id,
        name: '',
        bio: '',
        desc: '',
        sortNumber: 1
      })
    };
  },
  mounted: function mounted() {
    var d = this;
    $('#content').summernote({
      dialogsInBody: true,
      height: 400,
      blockquoteBreakingLevel: 0,
      lineHeights: ['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0'],
      toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'italic', 'clear', 'fontname', 'fontsize', 'strikethrough', 'superscript', 'subscript']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph', 'height']], ['insert', ['link']], ['view', ['codeview', 'help']]],
      callbacks: {
        onChange: function onChange(content, $editable) {
          d.form.desc = content;
        }
      }
    });
  },
  methods: {
    submitForm: function submitForm() {
      this.form.post("/admin/api/update-pricing").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    getData: function getData() {
      var _this = this;

      axios.get("/admin/api/get-pricing-data", {
        params: {
          pricingId: this.$route.params.id
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        console.log(data);

        if (data.status == "ok") {
          _this.form.name = data.data.name;
          _this.form.desc = data.data.desc;
          _this.form.bio = data.data.bio;
          _this.form.sortNumber = data.data.sort_number;
          $('#content').summernote("code", data.data.desc);
        } else {
          _this.$router.push({
            name: "admin-sitedata.pricing.list"
          });
        }
      })["catch"](function (err) {
        console.error(err.response.data);

        _this.$router.push({
          name: "admin-sitedata.pricing.list"
        });
      });
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/site/Pricings/Edit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/site/Pricings/Edit.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_0bb5c09a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=0bb5c09a& */ "./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=template&id=0bb5c09a&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_0bb5c09a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_0bb5c09a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/site/Pricings/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=template&id=0bb5c09a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=template&id=0bb5c09a& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0bb5c09a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0bb5c09a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0bb5c09a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=0bb5c09a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=template&id=0bb5c09a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=template&id=0bb5c09a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Pricings/Edit.vue?vue&type=template&id=0bb5c09a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "section" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _c("h4", { staticClass: "text-muted" }, [_vm._v("Edit package")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "raise-button",
                  attrs: { to: { name: "admin-sitedata.pricing.list" } }
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
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6 form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Package name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("name") },
                        attrs: { type: "text", placeholder: "Package name..." },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "name" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3 form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Arrange Number")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.sortNumber,
                          expression: "form.sortNumber"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.form.sortNumber },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "sortNumber", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6 form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Package Pricing Info")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.bio,
                            expression: "form.bio"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("name") },
                        staticStyle: { "font-size": "22px", color: "black" },
                        attrs: {
                          placeholder: "e.g: 10& / Day",
                          maxlength: "250"
                        },
                        domProps: { value: _vm.form.bio },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "bio", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.form.bio.length) + "/250")
                      ]),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "name" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 form-group" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Pricing Details")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.desc,
                          expression: "form.desc"
                        }
                      ],
                      staticClass: "form-control",
                      staticStyle: {
                        height: "450px !important",
                        "font-size": "22px"
                      },
                      domProps: { value: _vm.form.desc },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "desc", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Preview Here")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "price-card" }, [
                      _c("div", { staticClass: "ribbon" }, [
                        _vm._v(_vm._s(_vm.form.name))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "body" }, [
                        _c("h3", { staticClass: "text-center text-white" }, [
                          _vm._v(_vm._s(_vm.form.bio))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-center text-white" }, [
                          _vm._v(
                            "\n                                              " +
                              _vm._s(_vm.form.desc) +
                              "\n                                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-12 form-group" },
                    [
                      _c(
                        "Button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { form: _vm.form }
                        },
                        [_vm._v("Update")]
                      )
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "float-btn", attrs: { title: "Book Now" } },
      [_c("i", { staticClass: "fas fa-angle-right" })]
    )
  }
]
render._withStripped = true



/***/ })

}]);