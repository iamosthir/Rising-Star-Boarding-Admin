(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_boarding_DraftBoarding_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      bookings: [],
      isLoading: true,
      paginateData: {},
      moment: moment
    };
  },
  methods: {
    getDraftBooking: function getDraftBooking() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true; // Get data

      axios.get("/admin/api/get-all-boarding-booking?page=" + page, {
        params: {
          type: "draft"
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.bookings = data.main_data;
        _this.paginateData = data.paginate;
        _this.isLoading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteBooking: function deleteBooking(index, id) {
      var _this2 = this;

      swal.fire({
        title: "Are you sure?",
        text: "Once deleted can't be restored",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (res) {
        if (res.isConfirmed) {
          axios.post('/admin/api/delete-boardng-booking', {
            boardingId: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this2.bookings.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  created: function created() {
    this.getDraftBooking();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/boarding/DraftBoarding.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pages/boarding/DraftBoarding.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DraftBoarding_vue_vue_type_template_id_00291440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftBoarding.vue?vue&type=template&id=00291440& */ "./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=template&id=00291440&");
/* harmony import */ var _DraftBoarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftBoarding.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DraftBoarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DraftBoarding_vue_vue_type_template_id_00291440___WEBPACK_IMPORTED_MODULE_0__.render,
  _DraftBoarding_vue_vue_type_template_id_00291440___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/boarding/DraftBoarding.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DraftBoarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DraftBoarding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DraftBoarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=template&id=00291440&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=template&id=00291440& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DraftBoarding_vue_vue_type_template_id_00291440___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DraftBoarding_vue_vue_type_template_id_00291440___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DraftBoarding_vue_vue_type_template_id_00291440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DraftBoarding.vue?vue&type=template&id=00291440& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=template&id=00291440&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=template&id=00291440&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/DraftBoarding.vue?vue&type=template&id=00291440& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.isLoading
              ? _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(10, function(n) {
                    return _c(
                      "div",
                      { key: n, staticClass: "col-12" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "30px" }
                        })
                      ],
                      1
                    )
                  }),
                  0
                )
              : _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover table-striped" },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.bookings, function(booking, i) {
                              return _c("tr", { key: i }, [
                                _c("td", [
                                  _vm._v("#" + _vm._s(booking.booking_data.id))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm
                                        .moment(booking.booking_data.created_at)
                                        .format("DD MMM YYYY - hh:mm a")
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      booking.booking_data.customer.first_name +
                                        " " +
                                        booking.booking_data.customer.last_name
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                                " +
                                      _vm._s(
                                        _vm
                                          .moment(
                                            booking.booking_data.start_date
                                          )
                                          .format("DD MMM YYYY")
                                      ) +
                                      " \n                                                  to " +
                                      _vm._s(
                                        _vm
                                          .moment(
                                            booking.booking_data.ending_date
                                          )
                                          .format("DD MMM YYYY")
                                      ) +
                                      "\n                                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      booking.booking_data.requested_kennel
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-sm btn-primary",
                                        attrs: {
                                          to: {
                                            name: "booking.draft-continue",
                                            params: {
                                              bookingId: booking.booking_data.id
                                            }
                                          }
                                        }
                                      },
                                      [_vm._v("Continue with order")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-danger",
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteBooking(
                                              i,
                                              booking.booking_data.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Delete")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      { staticClass: "row justify-content-center" },
                      [
                        _c("pagination", {
                          attrs: { data: _vm.paginateData },
                          on: { "pagination-change-page": _vm.getDraftBooking }
                        })
                      ],
                      1
                    )
                  ])
                ])
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Draft bookings")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Booking ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Booking Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Customer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Booking Range")]),
        _vm._v(" "),
        _c("th", [_vm._v("Requested Kennels")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);