(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_home_partials_BoardingSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      boardingData: {}
    };
  },
  methods: {
    getBoardingData: function getBoardingData() {
      var _this = this;

      axios.get("/admin/api/get-utils-boarding").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.boardingData = data;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getBoardingData();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/home/partials/BoardingSection.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/BoardingSection.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BoardingSection_vue_vue_type_template_id_60807096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardingSection.vue?vue&type=template&id=60807096& */ "./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=template&id=60807096&");
/* harmony import */ var _BoardingSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardingSection.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BoardingSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BoardingSection_vue_vue_type_template_id_60807096___WEBPACK_IMPORTED_MODULE_0__.render,
  _BoardingSection_vue_vue_type_template_id_60807096___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/home/partials/BoardingSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardingSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BoardingSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardingSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=template&id=60807096&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=template&id=60807096& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardingSection_vue_vue_type_template_id_60807096___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardingSection_vue_vue_type_template_id_60807096___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardingSection_vue_vue_type_template_id_60807096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BoardingSection.vue?vue&type=template&id=60807096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=template&id=60807096&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=template&id=60807096&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BoardingSection.vue?vue&type=template&id=60807096& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "section mt-5" }, [
    _vm.is_loading
      ? _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("skeleton", {
                staticClass: "shadow",
                attrs: { width: "100%", height: "400px" }
              })
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.is_loading
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("table", { staticClass: "table mt-4" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _vm.boardingData.arrivalPets.length > 0
                        ? _c(
                            "tbody",
                            _vm._l(_vm.boardingData.arrivalPets, function(
                              pet,
                              i
                            ) {
                              return _c("tr", { key: i }, [
                                _c("td", [
                                  pet.photo
                                    ? _c("img", {
                                        staticClass: "pet-round-thumb",
                                        attrs: {
                                          src:
                                            "/uploads/customer/" +
                                            pet.customer_id +
                                            "/" +
                                            pet.photo,
                                          alt: ""
                                        }
                                      })
                                    : _c("img", {
                                        staticClass: "pet-round-thumb",
                                        attrs: {
                                          src:
                                            "/images/dog-placeholder-tall.svg",
                                          alt: ""
                                        }
                                      })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("strong", [_vm._v(_vm._s(pet.name))])
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      pet.customer.first_name +
                                        " " +
                                        pet.customer.last_name
                                    )
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        : _c("tbody", [_vm._m(3)])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("table", { staticClass: "table mt-4" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _vm.boardingData.leavingPets.length > 0
                        ? _c(
                            "tbody",
                            _vm._l(_vm.boardingData.leavingPets, function(
                              pet,
                              i
                            ) {
                              return _c("tr", { key: i }, [
                                _c("td", [
                                  pet.photo
                                    ? _c("img", {
                                        staticClass: "pet-round-thumb",
                                        attrs: {
                                          src:
                                            "/uploads/customer/" +
                                            pet.customer_id +
                                            "/" +
                                            pet.photo,
                                          alt: ""
                                        }
                                      })
                                    : _c("img", {
                                        staticClass: "pet-round-thumb",
                                        attrs: {
                                          src:
                                            "/images/dog-placeholder-tall.svg",
                                          alt: ""
                                        }
                                      })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("strong", [_vm._v(_vm._s(pet.name))])
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      pet.customer.first_name +
                                        " " +
                                        pet.customer.last_name
                                    )
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        : _c("tbody", [_vm._m(6)])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Boardings")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "text-muted" }, [
      _c("strong", [_vm._v("Dogs Arrived Today")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticStyle: { "background-color": "lightblue" } }, [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pet Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Owner")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticClass: "text-center text-danger", attrs: { colspan: "3" } },
        [_vm._v("No records found")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "text-warning" }, [
      _c("strong", [_vm._v("Dogs Leaving Today")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "thead",
      { staticStyle: { "background-color": "antiquewhite" } },
      [
        _c("tr", [
          _c("th", [_vm._v("#")]),
          _vm._v(" "),
          _c("th", [_vm._v("Pet Name")]),
          _vm._v(" "),
          _c("th", [_vm._v("Owner")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        { staticClass: "text-center text-danger", attrs: { colspan: "3" } },
        [_vm._v("No records found")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);