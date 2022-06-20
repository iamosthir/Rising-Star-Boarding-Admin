(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Pending_Boarding_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Boarding.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Boarding.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      boardings: [],
      paginateData: {},
      is_loading: true,
      moment: moment
    };
  },
  methods: {
    getPendingBoarding: function getPendingBoarding() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/admin/api/get-pending-bookings-boarding?page=" + page).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.paginateData = data.paginate;
        _this.boardings = data.main_data;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getPendingBoarding();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Pending/Boarding.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/Pending/Boarding.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Boarding_vue_vue_type_template_id_3605286a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Boarding.vue?vue&type=template&id=3605286a& */ "./resources/js/components/pages/Pending/Boarding.vue?vue&type=template&id=3605286a&");
/* harmony import */ var _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Boarding.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Pending/Boarding.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Boarding_vue_vue_type_template_id_3605286a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Boarding_vue_vue_type_template_id_3605286a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Pending/Boarding.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Pending/Boarding.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/Pending/Boarding.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Boarding.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Pending/Boarding.vue?vue&type=template&id=3605286a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/Pending/Boarding.vue?vue&type=template&id=3605286a& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_3605286a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_3605286a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_3605286a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=template&id=3605286a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Boarding.vue?vue&type=template&id=3605286a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Boarding.vue?vue&type=template&id=3605286a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Boarding.vue?vue&type=template&id=3605286a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row mt-4" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm.is_loading
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(10, function(n) {
                  return _c(
                    "div",
                    { key: n, staticClass: "col-12" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "40px" }
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
            ? _c("div", [
                _vm.boardings.length > 0
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _vm._l(_vm.boardings, function(boarding, i) {
                          return _c(
                            "div",
                            { key: i, staticClass: "col-md-6" },
                            [
                              _c("div", { staticClass: "card" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card-header d-flex justify-content-between"
                                  },
                                  [
                                    _c("span", { staticClass: "text-muted" }, [
                                      _vm._v(
                                        "Booking ID #" +
                                          _vm._s(boarding.booking_data.id)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v("Booking Date : "),
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(
                                            _vm
                                              .moment(
                                                boarding.booking_data.created_at
                                              )
                                              .format("DD MMM YYYY, hh:mm a")
                                          )
                                        )
                                      ])
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" }, [
                                  _vm._m(1, true),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "justify-content-between d-flex"
                                    },
                                    [
                                      _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Customer Name : "),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              boarding.booking_data.customer
                                                .first_name +
                                                " " +
                                                boarding.booking_data.customer
                                                  .last_name
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "text-muted" }, [
                                        _vm._v(
                                          "\n                                                  \n                                                  Requested Kennel : "
                                        ),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              boarding.booking_data
                                                .requested_kennel
                                            )
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Contact : "),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              boarding.booking_data.customer
                                                .cell_phone
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Total Price: "),
                                        _c(
                                          "strong",
                                          { staticClass: "text-success" },
                                          [
                                            _vm._v(
                                              "$ " +
                                                _vm._s(
                                                  boarding.booking_data.price ||
                                                    0
                                                )
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Booking Range : "),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              _vm
                                                .moment(
                                                  boarding.booking_data
                                                    .start_date
                                                )
                                                .format("DD MMM YYYY")
                                            ) +
                                              " \n                                                  to " +
                                              _vm._s(
                                                _vm
                                                  .moment(
                                                    boarding.booking_data
                                                      .ending_date
                                                  )
                                                  .format("DD MMM YYYY")
                                              )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "text-muted" }, [
                                        _vm._v("Total Days: "),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              boarding.booking_data.stay_day
                                            ) + " Days"
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c("table", { staticClass: "table" }, [
                                        _vm._m(2, true),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          _vm._l(boarding.pet_data, function(
                                            pet_data,
                                            p
                                          ) {
                                            return _c("tr", { key: p }, [
                                              _c("td", [_vm._v(_vm._s(p + 1))]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(pet_data.pet.name)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(pet_data.kennel_id)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-outline-success",
                                                    attrs: {
                                                      title: "Print Pet Info"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.printData(
                                                          boarding.booking_data
                                                            .id,
                                                          pet_data.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-print"
                                                    })
                                                  ]
                                                )
                                              ])
                                            ])
                                          }),
                                          0
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card-footer" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-sm btn-warning",
                                        attrs: {
                                          to: {
                                            name: "boarding.edit",
                                            params: {
                                              id: boarding.booking_data.id
                                            }
                                          }
                                        }
                                      },
                                      [_vm._v("Details")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              _c("pagination", {
                                attrs: { data: _vm.paginateData },
                                on: {
                                  "pagination-change-page":
                                    _vm.getPendingBoarding
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ],
                      2
                    )
                  : _c("div", { staticClass: "text-center" }, [
                      _c("h4", { staticClass: "text-danger" }, [
                        _vm._v("No Booking Records found")
                      ])
                    ])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-footer text-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-outline-success",
                attrs: { to: { name: "boarding.list" } }
              },
              [_vm._v("View All Approved Bookings")]
            )
          ],
          1
        )
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
      _c("h4", { staticClass: "text-muted" }, [
        _vm._v("Pending Boarding Reservations")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-end" }, [
      _c("p", [
        _c("span", { staticClass: "badge badge-pill badge-warning" }, [
          _vm._v("Pending")
        ])
      ])
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
          _c("td", [_vm._v("#")]),
          _vm._v(" "),
          _c("td", [_vm._v("Pet Name")]),
          _vm._v(" "),
          _c("td", [_vm._v("Assigned Kennel")]),
          _vm._v(" "),
          _c("td")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);