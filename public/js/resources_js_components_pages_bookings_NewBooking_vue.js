(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_bookings_NewBooking_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/NewBooking.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/NewBooking.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: false,
      customers: [],
      searchText: null
    };
  },
  methods: {
    searchCustomer: function searchCustomer() {
      var _this = this;

      if (this.searchText != "") {
        this.is_loading = true;
        axios.get("/admin/api/search-customer", {
          params: {
            text: this.searchText
          }
        }).then(function (resp) {
          return resp.data;
        }).then(function (data) {
          _this.customers = data.data;
          _this.is_loading = false;
        })["catch"](function (err) {
          console.error(err.response.data);
        });
      } else {
        this.is_loading = false;
        this.customers = [];
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/bookings/NewBooking.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/bookings/NewBooking.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewBooking_vue_vue_type_template_id_edf086b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewBooking.vue?vue&type=template&id=edf086b0& */ "./resources/js/components/pages/bookings/NewBooking.vue?vue&type=template&id=edf086b0&");
/* harmony import */ var _NewBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewBooking.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/bookings/NewBooking.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NewBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NewBooking_vue_vue_type_template_id_edf086b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewBooking_vue_vue_type_template_id_edf086b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/bookings/NewBooking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/bookings/NewBooking.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/bookings/NewBooking.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBooking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/NewBooking.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/bookings/NewBooking.vue?vue&type=template&id=edf086b0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/bookings/NewBooking.vue?vue&type=template&id=edf086b0& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBooking_vue_vue_type_template_id_edf086b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBooking_vue_vue_type_template_id_edf086b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBooking_vue_vue_type_template_id_edf086b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBooking.vue?vue&type=template&id=edf086b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/NewBooking.vue?vue&type=template&id=edf086b0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/NewBooking.vue?vue&type=template&id=edf086b0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/NewBooking.vue?vue&type=template&id=edf086b0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body", staticStyle: { height: "100vh" } },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Search Customer")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchText,
                        expression: "searchText"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "search",
                      placeholder: "Search Customer by name, email, phone"
                    },
                    domProps: { value: _vm.searchText },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.searchText = $event.target.value
                        },
                        _vm.searchCustomer
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm.is_loading
                ? _c("div", { staticClass: "row mt-3" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-12 mt-2" },
                      _vm._l(10, function(n, i) {
                        return _c("skeleton", {
                          key: i,
                          staticClass: "mt-2",
                          attrs: { width: "100%", height: "40px" }
                        })
                      }),
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  !_vm.is_loading && _vm.customers.length > 0
                    ? _c("div", { staticClass: "table-responsive-md" }, [
                        _c(
                          "table",
                          { staticClass: "table table-hover table-striped" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.customers, function(customer, i) {
                                return _c("tr", { key: i }, [
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        customer.first_name +
                                          " " +
                                          customer.last_name
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(customer.cell_phone))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(customer.email))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(customer.pet.length))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("div", { staticClass: "dropdown" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn sm btn-primary dropdown-toggle",
                                          attrs: {
                                            type: "button",
                                            id: "dropdownMenuButton",
                                            "data-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        New booking\n                                                      "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu",
                                          attrs: {
                                            "aria-labelledby":
                                              "dropdownMenuButton"
                                          }
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "booking.boarding",
                                                  params: { id: customer.id }
                                                },
                                                href: "#"
                                              }
                                            },
                                            [_vm._v("Boarding")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "booking.grooming",
                                                  params: { id: customer.id }
                                                },
                                                href: "#"
                                              }
                                            },
                                            [_vm._v("Grooming")]
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.is_loading && _vm.customers.length == 0
                    ? _c(
                        "div",
                        { staticClass: "text-center mt-5" },
                        [
                          _c("h5", { staticClass: "text-muted" }, [
                            _vm._v("Search Customer")
                          ]),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { to: { name: "customer.create" } }
                            },
                            [
                              _c("i", { staticClass: "fas fa-plus" }),
                              _vm._v(" Add new customer")
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ])
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("New Booking")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Csutomer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cell Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Pets")]),
        _vm._v(" "),
        _c("th", [_vm._v("Booking")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-muted" }, [
      _c("strong", [_vm._v("Or")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);