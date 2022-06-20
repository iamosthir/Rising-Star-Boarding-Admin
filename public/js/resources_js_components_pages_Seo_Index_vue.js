(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Seo_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Seo/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Seo/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: new Form({
        title: "",
        desc: "",
        srch_keyword: "",
        robot_web: "",
        robot_link: "",
        lang: "",
        author: ""
      }),
      seoData: {},
      is_loading: true
    };
  },
  methods: {
    seoUpdate: function seoUpdate() {
      this.form.post("/admin/api/update-seo").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    getSeo: function getSeo() {
      var _this = this;

      axios.get('/admin/api/get-seo').then(function (resp) {
        console.log(resp.data);
        _this.form.title = resp.data.title;
        _this.form.desc = resp.data.desc;
        _this.form.srch_keyword = resp.data.keywords;
        _this.form.robot_web = resp.data.robot_website;
        _this.form.robot_link = resp.data.robot_link;
        _this.form.lang = resp.data.lang;
        _this.form.author = resp.data.author;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getSeo();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Seo/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pages/Seo/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_304681da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=304681da& */ "./resources/js/components/pages/Seo/Index.vue?vue&type=template&id=304681da&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Seo/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_304681da___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_304681da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Seo/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Seo/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/Seo/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Seo/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Seo/Index.vue?vue&type=template&id=304681da&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/Seo/Index.vue?vue&type=template&id=304681da& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_304681da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_304681da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_304681da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=304681da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Seo/Index.vue?vue&type=template&id=304681da&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Seo/Index.vue?vue&type=template&id=304681da&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Seo/Index.vue?vue&type=template&id=304681da& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm.is_loading
          ? _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("skeleton", { attrs: { width: "100%", height: "40px" } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("skeleton", { attrs: { width: "100%", height: "40px" } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("skeleton", {
                      attrs: { width: "100%", height: "150px" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("skeleton", {
                      attrs: { width: "100%", height: "150px" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("skeleton", { attrs: { width: "100%", height: "40px" } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("skeleton", { attrs: { width: "100%", height: "40px" } })
                  ],
                  1
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.is_loading
          ? _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.seoUpdate.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.title,
                            expression: "form.title"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("title") },
                        attrs: {
                          type: "text",
                          placeholder: "Site title...",
                          maxlength: "70"
                        },
                        domProps: { value: _vm.form.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "title", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(_vm.form.title ? _vm.form.title.length : 0) +
                            "/70"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Author")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.author,
                            expression: "form.author"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Author name...",
                          maxlength: "70"
                        },
                        domProps: { value: _vm.form.author },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "author", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(_vm.form.author ? _vm.form.author.length : 0) +
                            "/70"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _vm._m(2),
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
                        class: { "is-invalid": _vm.form.errors.has("desc") },
                        staticStyle: { height: "150px !important" },
                        attrs: {
                          maxlength: "150",
                          placeholder: "Site description"
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
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(_vm.form.desc ? _vm.form.desc.length : 0) +
                            "/150"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.srch_keyword,
                            expression: "form.srch_keyword"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("srch_keyword")
                        },
                        staticStyle: { height: "150px !important" },
                        attrs: {
                          maxlength: "150",
                          placeholder: "keyword1,keyword2,keyword3"
                        },
                        domProps: { value: _vm.form.srch_keyword },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "srch_keyword",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Allow robots to index your website?")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.robot_web,
                              expression: "form.robot_web"
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
                                "robot_web",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", hidden: "" } }, [
                            _vm._v("Select option")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "index" } }, [
                            _vm._v("Yes")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "noindex" } }, [
                            _vm._v("No")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c("label", [
                        _vm._v("Allow robots to follow all links?")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.robot_link,
                              expression: "form.robot_link"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "robotsLinks" },
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
                                "robot_link",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", hidden: "" } }, [
                            _vm._v("Select option")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "follow" } }, [
                            _vm._v("Yes")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "nofollow" } }, [
                            _vm._v("No")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c("label", [
                        _vm._v("What is your site primary language?")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.lang,
                              expression: "form.lang"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "language" },
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
                                "lang",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "", hidden: "" } }, [
                            _vm._v("Select option")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "English" } }, [
                            _vm._v("English")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "French" } }, [
                            _vm._v("French")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Spanish" } }, [
                            _vm._v("Spanish")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Russian" } }, [
                            _vm._v("Russian")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Arabic" } }, [
                            _vm._v("Arabic")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Japanese" } }, [
                            _vm._v("Japanese")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Korean" } }, [
                            _vm._v("Korean")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Hindi" } }, [
                            _vm._v("Hindi")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Portuguese" } }, [
                            _vm._v("Portuguese")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-12 form-group" },
                      [
                        _c(
                          "Button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { form: _vm.form }
                          },
                          [_vm._v("Optimize")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          : _vm._e()
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
      { staticClass: "card-header d-flex justify-content-between" },
      [
        _c("h4", { staticClass: "text-muted" }, [
          _vm._v("\n                    SEO Tools\n                ")
        ]),
        _vm._v(" "),
        _c("div", [
          _c("button", { staticClass: "btn", attrs: { title: "Refresh" } }, [
            _c("i", { staticClass: "fas fa-sync" })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Site Title "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Site Description "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Search Keywords (Separate with commas) "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);