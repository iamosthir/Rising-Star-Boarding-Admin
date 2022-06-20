(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_home_partials_TopSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/TopSection.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/TopSection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      utilData: {}
    };
  },
  methods: {
    getUtilsInfo: function getUtilsInfo() {
      var _this = this;

      axios.get("/admin/api/get-utils-info").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.utilData = data;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getUtilsInfo();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/home/partials/TopSection.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/TopSection.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopSection_vue_vue_type_template_id_0d33cad3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopSection.vue?vue&type=template&id=0d33cad3& */ "./resources/js/components/pages/home/partials/TopSection.vue?vue&type=template&id=0d33cad3&");
/* harmony import */ var _TopSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopSection.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/home/partials/TopSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TopSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TopSection_vue_vue_type_template_id_0d33cad3___WEBPACK_IMPORTED_MODULE_0__.render,
  _TopSection_vue_vue_type_template_id_0d33cad3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/home/partials/TopSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/home/partials/TopSection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/TopSection.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/TopSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/home/partials/TopSection.vue?vue&type=template&id=0d33cad3&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/TopSection.vue?vue&type=template&id=0d33cad3& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSection_vue_vue_type_template_id_0d33cad3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSection_vue_vue_type_template_id_0d33cad3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSection_vue_vue_type_template_id_0d33cad3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopSection.vue?vue&type=template&id=0d33cad3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/TopSection.vue?vue&type=template&id=0d33cad3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/TopSection.vue?vue&type=template&id=0d33cad3&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/TopSection.vue?vue&type=template&id=0d33cad3& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "section" }, [
    _vm.is_loading
      ? _c(
          "div",
          { staticClass: "row" },
          _vm._l(4, function(n, i) {
            return _c(
              "div",
              { key: i, staticClass: "col-md-3 col-6" },
              [
                _c("skeleton", {
                  staticClass: "shadow",
                  attrs: { width: "100%", height: "180px" }
                })
              ],
              1
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.is_loading
      ? _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12" },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-statistic-4" }, [
                  _c(
                    "div",
                    {
                      staticClass: "align-items-center justify-content-between"
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3"
                          },
                          [
                            _c("div", { staticClass: "card-content" }, [
                              _c("h5", { staticClass: "font-15" }, [
                                _vm._v("New Boarding")
                              ]),
                              _vm._v(" "),
                              _c("h2", { staticClass: "mb-3 font-18" }, [
                                _vm._v(_vm._s(_vm.utilData.boardingCount))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v("All On Progress Boarding")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(0)
                      ])
                    ]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12" },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-statistic-4" }, [
                  _c(
                    "div",
                    {
                      staticClass: "align-items-center justify-content-between"
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3"
                          },
                          [
                            _c("div", { staticClass: "card-content" }, [
                              _c("h5", { staticClass: "font-15" }, [
                                _vm._v("New Groomings")
                              ]),
                              _vm._v(" "),
                              _c("h2", { staticClass: "mb-3 font-18" }, [
                                _vm._v(_vm._s(_vm.utilData.groomingCount))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v("All Pending Grooming")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12" },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-statistic-4" }, [
                  _c(
                    "div",
                    {
                      staticClass: "align-items-center justify-content-between"
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3"
                          },
                          [
                            _c("div", { staticClass: "card-content" }, [
                              _c("h5", { staticClass: "font-15" }, [
                                _vm._v("Customers")
                              ]),
                              _vm._v(" "),
                              _c("h2", { staticClass: "mb-3 font-18" }, [
                                _vm._v(_vm._s(_vm.utilData.customerCount))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v("With "),
                                _c("span", { staticClass: "col-green" }, [
                                  _vm._v(_vm._s(_vm.utilData.petCount))
                                ]),
                                _vm._v(" Registered pets")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(2)
                      ])
                    ]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12" },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-statistic-4" }, [
                  _c(
                    "div",
                    {
                      staticClass: "align-items-center justify-content-between"
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3"
                          },
                          [
                            _c("div", { staticClass: "card-content" }, [
                              _c("h5", { staticClass: "font-15" }, [
                                _vm._v("Earnings (This Month)")
                              ]),
                              _vm._v(" "),
                              _c("h2", { staticClass: "mb-3 font-18" }, [
                                _vm._v("$" + _vm._s(_vm.utilData.earningCount))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v("Boarding & Grooming")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(3)
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0" },
      [
        _c("div", { staticClass: "banner-img" }, [
          _c("img", { attrs: { src: "/assets/img/banner/1.png", alt: "" } })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0" },
      [
        _c("div", { staticClass: "banner-img" }, [
          _c("img", { attrs: { src: "/assets/img/banner/3.png", alt: "" } })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0" },
      [
        _c("div", { staticClass: "banner-img" }, [
          _c("img", { attrs: { src: "/assets/img/banner/2.png", alt: "" } })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0" },
      [
        _c("div", { staticClass: "banner-img" }, [
          _c("img", { attrs: { src: "/assets/img/banner/4.png", alt: "" } })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);