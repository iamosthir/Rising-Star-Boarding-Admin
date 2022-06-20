(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Pending_Grooming_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Grooming.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Grooming.vue?vue&type=script&lang=js& ***!
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
      groomings: [],
      paginateData: {},
      moment: moment,
      emailError: false,
      emailErrorText: ""
    };
  },
  created: function created() {
    this.getGroomingData();
  },
  methods: {
    getGroomingData: function getGroomingData() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.is_loading = true;
      var type = $('input[name="radio1"]:checked').val();
      axios.get("/admin/api/get-pending-grooming-booking?page=" + page, {
        params: {
          type: type
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.groomings = data.data;
        _this.paginateData = data;
        _this.is_loading = false;
      })["catch"](function (err) {
        err.response.data;
      });
    },
    appointmentStatus: function appointmentStatus(status, id, index, e) {
      var _this2 = this;

      $(e.target).find("span").show();
      $(e.target).attr("disabled", true);
      axios.post("/admin/api/change-grooming-status", {
        id: id,
        status: status
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");

          _this2.groomings.splice(index, 1);

          $(e.target).find("span").hide();
          $(e.target).attr("disabled", false);
        }
      })["catch"](function (err) {
        console.error(err.response.data);
        swal.fire("Success", "This booking was approved", "success");

        _this2.groomings.splice(index, 1);

        $(e.target).find("span").hide();
        $(e.target).attr("disabled", false);
        _this2.emailError = true;
        _this2.emailErrorText = err.response.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Pending/Grooming.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/Pending/Grooming.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grooming_vue_vue_type_template_id_614cf20e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grooming.vue?vue&type=template&id=614cf20e& */ "./resources/js/components/pages/Pending/Grooming.vue?vue&type=template&id=614cf20e&");
/* harmony import */ var _Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grooming.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Pending/Grooming.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Grooming_vue_vue_type_template_id_614cf20e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grooming_vue_vue_type_template_id_614cf20e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Pending/Grooming.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Pending/Grooming.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/Pending/Grooming.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grooming.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Grooming.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Pending/Grooming.vue?vue&type=template&id=614cf20e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/Pending/Grooming.vue?vue&type=template&id=614cf20e& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_template_id_614cf20e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_template_id_614cf20e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grooming_vue_vue_type_template_id_614cf20e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grooming.vue?vue&type=template&id=614cf20e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Grooming.vue?vue&type=template&id=614cf20e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Grooming.vue?vue&type=template&id=614cf20e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Pending/Grooming.vue?vue&type=template&id=614cf20e& ***!
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
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _vm.is_loading
              ? _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "section" },
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
            !_vm.is_loading && _vm.groomings.length > 0
              ? _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      { staticClass: "table table-hover table-striped" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.groomings, function(grooming, i) {
                            return _c("tr", { key: i }, [
                              _c("td", [
                                _c("strong", [_vm._v(_vm._s(grooming.id))])
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    _vm._s(
                                      grooming.customer.first_name +
                                        " " +
                                        grooming.customer.last_name
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "ul",
                                  { staticClass: "text-success" },
                                  _vm._l(grooming.pets, function(pet, i) {
                                    return _c("li", { key: i }, [
                                      _vm._v(
                                        _vm._s(pet.name + " - " + pet.color)
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(grooming.price || 0) + " USD")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm
                                      .moment(grooming.appointment_date)
                                      .format("MMMM Do YYYY, h:mm:ss a")
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm
                                      .moment(grooming.end_time)
                                      .format("MMMM Do YYYY, h:mm a")
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm
                                      .moment(grooming.created_at)
                                      .format("Do MMM YYYY h:mm a")
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                grooming.status == "ongoing"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-pill badge-warning"
                                      },
                                      [_vm._v("On Going")]
                                    )
                                  : grooming.status == "completed"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-pill badge-success"
                                      },
                                      [_vm._v("Completed")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                grooming.status == "canceled"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-pill badge-danger"
                                      },
                                      [_vm._v("Canceled")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                grooming.status == "pending"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-pill badge-warning"
                                      },
                                      [_vm._v("Pending")]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  grooming.status == "ongoing"
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-sm btn-success",
                                          on: {
                                            click: function($event) {
                                              return _vm.appointmentStatus(
                                                "finish",
                                                grooming.id,
                                                i,
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("span", {
                                            staticClass:
                                              "spinner-border spinner-border-sm",
                                            staticStyle: { display: "none" },
                                            attrs: {
                                              role: "status",
                                              "aria-hidden": "true"
                                            }
                                          }),
                                          _vm._v(
                                            "\n                                                Finish"
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-sm btn-primary",
                                      attrs: {
                                        to: {
                                          name: "grooming.edit",
                                          params: { id: grooming.id }
                                        }
                                      }
                                    },
                                    [_vm._v("View")]
                                  ),
                                  _vm._v(" "),
                                  grooming.status == "pending"
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-sm btn-success",
                                          on: {
                                            click: function($event) {
                                              return _vm.appointmentStatus(
                                                "ongoing",
                                                grooming.id,
                                                i,
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("span", {
                                            staticClass:
                                              "spinner-border spinner-border-sm",
                                            staticStyle: { display: "none" },
                                            attrs: {
                                              role: "status",
                                              "aria-hidden": "true"
                                            }
                                          }),
                                          _vm._v(
                                            "\n                                                Approve"
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  grooming.status == "ongoing" ||
                                  grooming.status == "pending"
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.appointmentStatus(
                                                "cancel",
                                                grooming.id,
                                                i,
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("span", {
                                            staticClass:
                                              "spinner-border spinner-border-sm",
                                            staticStyle: { display: "none" },
                                            attrs: {
                                              role: "status",
                                              "aria-hidden": "true"
                                            }
                                          }),
                                          _vm._v(
                                            "\n                                             Cancel"
                                          )
                                        ]
                                      )
                                    : _vm._e()
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
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 mt-3" }, [
              _c(
                "div",
                { staticClass: "row justify-content-center" },
                [
                  _c("pagination", {
                    attrs: { data: _vm.paginateData },
                    on: { "pagination-change-page": _vm.getGroomingData }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            !_vm.is_loading && _vm.groomings.length == 0
              ? _c("div", { staticClass: "col-md-12" }, [
                  _c("h5", { staticClass: "text-center text-danger" }, [
                    _vm._v("No Booking Records")
                  ])
                ])
              : _vm._e()
          ])
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
                attrs: { to: { name: "grooming.list-view" } }
              },
              [_vm._v("View All Approved Bookings")]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _vm.emailError
      ? _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            {
              staticClass: "alert alert-danger alert-dismissible fade show",
              attrs: { role: "alert" }
            },
            [
              _c("h4", { staticClass: "alert-heading" }, [_vm._v("Warning!")]),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "alert",
                    "aria-label": "Close"
                  },
                  on: {
                    click: function($event) {
                      _vm.emailError = false
                      _vm.emailErrorText = ""
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "This booking was approved successfully but there were some problem with the server"
                )
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("ul", [
                _c(
                  "li",
                  [
                    _vm._v("Try to set a default email account from "),
                    _c(
                      "router-link",
                      { attrs: { to: { name: "admin-email" } } },
                      [_vm._v("Email Setup")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", [_vm._v("Try to add a new email")]),
                _vm._v(" "),
                _c("li", [_vm._v("Check your email server configuration")]),
                _vm._v(" "),
                _c("li", [_vm._v("Check your email credentials")]),
                _vm._v(" "),
                _c("li", [_vm._v("Contact with developer for more support")])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.emailErrorText))])
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Grooming - Pending List")])
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
        _c("th", [_vm._v("Customer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pets")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Appointment Date & Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("End Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Booking Created At")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "ml-3" }, [
      _c("strong", [_vm._v("Possible Soulutions :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("ERROR_DETAILS")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);