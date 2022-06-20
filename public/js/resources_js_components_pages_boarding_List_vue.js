(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_boarding_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      boardings: [],
      moment: moment,
      paginateData: {}
    };
  },
  created: function created() {
    this.getBoardingData();
  },
  methods: {
    getBoardingData: function getBoardingData() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.is_loading = true;
      var type = $('input[name="radio1"]:checked').val(); // Get data

      axios.get("/admin/api/get-all-boarding-booking?page=" + page, {
        params: {
          type: type
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.boardings = data.main_data;
        _this.paginateData = data.paginate;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    changeStatus: function changeStatus(bookingId, status, index) {
      var _this2 = this;

      axios.post("/admin/api/change-boarding-status", {
        bookingId: bookingId,
        status: status
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this2.boardings.splice(index, 1);

          swal.fire("success", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    printData: function printData(bookingId, petId) {
      window.open("/admin/api/print-pet-info?petId=" + petId + "&bookingId=" + bookingId).focus();
    },
    deleteBooking: function deleteBooking(index, id) {
      var _this3 = this;

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

              _this3.boardings.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/boarding/List.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/boarding/List.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_6d5af3ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=6d5af3ab& */ "./resources/js/components/pages/boarding/List.vue?vue&type=template&id=6d5af3ab&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/boarding/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _List_vue_vue_type_template_id_6d5af3ab___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_6d5af3ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/boarding/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/boarding/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/boarding/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/boarding/List.vue?vue&type=template&id=6d5af3ab&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/boarding/List.vue?vue&type=template&id=6d5af3ab& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6d5af3ab___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6d5af3ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6d5af3ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=6d5af3ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/List.vue?vue&type=template&id=6d5af3ab&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/List.vue?vue&type=template&id=6d5af3ab&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/List.vue?vue&type=template&id=6d5af3ab& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-8 col-md-6 col-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "form-label" }, [
                  _vm._v("Filter By")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "selectgroup w-100" }, [
                  _c("label", { staticClass: "selectgroup-item" }, [
                    _c("input", {
                      staticClass: "selectgroup-input-radio",
                      attrs: {
                        type: "radio",
                        name: "radio1",
                        value: "onprogress",
                        checked: ""
                      },
                      on: { change: _vm.getBoardingData }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "selectgroup-button" }, [
                      _vm._v("On Going")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "selectgroup-item" }, [
                    _c("input", {
                      staticClass: "selectgroup-input-radio",
                      attrs: {
                        type: "radio",
                        name: "radio1",
                        value: "canceled"
                      },
                      on: { change: _vm.getBoardingData }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "selectgroup-button" }, [
                      _vm._v("Canceled")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "selectgroup-item" }, [
                    _c("input", {
                      staticClass: "selectgroup-input-radio",
                      attrs: {
                        type: "radio",
                        name: "radio1",
                        value: "completed"
                      },
                      on: { change: _vm.getBoardingData }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "selectgroup-button" }, [
                      _vm._v("Completed")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _vm.is_loading
                ? _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "200px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "200px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "200px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "200px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "200px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("skeleton", {
                          attrs: { width: "100%", height: "200px" }
                        })
                      ],
                      1
                    )
                  ])
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
                                        _c(
                                          "span",
                                          { staticClass: "text-muted" },
                                          [
                                            _vm._v(
                                              "Booking ID #" +
                                                _vm._s(boarding.booking_data.id)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v("Booking Date : "),
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(
                                                _vm
                                                  .moment(
                                                    boarding.booking_data
                                                      .created_at
                                                  )
                                                  .format(
                                                    "DD MMM YYYY, hh:mm a"
                                                  )
                                              )
                                            )
                                          ])
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "card-body" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "justify-content-between d-flex"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v("Customer Name : "),
                                              _c("strong", [
                                                _vm._v(
                                                  _vm._s(
                                                    boarding.booking_data
                                                      .customer.first_name +
                                                      " " +
                                                      boarding.booking_data
                                                        .customer.last_name
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", [
                                            boarding.booking_data.status ==
                                            "onprogress"
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-pill badge-warning"
                                                  },
                                                  [_vm._v("On Progress")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            boarding.booking_data.status ==
                                            "canceled"
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
                                            boarding.booking_data.status ==
                                            "completed"
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-pill badge-success"
                                                  },
                                                  [_vm._v("Completed")]
                                                )
                                              : _vm._e()
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
                                          _c(
                                            "p",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v("Contact : "),
                                              _c("strong", [
                                                _vm._v(
                                                  _vm._s(
                                                    boarding.booking_data
                                                      .customer.cell_phone
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v("Total Price: "),
                                              _c(
                                                "strong",
                                                { staticClass: "text-success" },
                                                [
                                                  _vm._v(
                                                    "$ " +
                                                      _vm._s(
                                                        boarding.booking_data
                                                          .price
                                                      )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
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
                                          _c(
                                            "p",
                                            { staticClass: "text-muted" },
                                            [
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v("Total Days: "),
                                              _c("strong", [
                                                _vm._v(
                                                  _vm._s(
                                                    boarding.booking_data
                                                      .stay_day
                                                  ) + " Days"
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "table-responsive" },
                                        [
                                          _c(
                                            "table",
                                            { staticClass: "table" },
                                            [
                                              _vm._m(1, true),
                                              _vm._v(" "),
                                              _c(
                                                "tbody",
                                                _vm._l(
                                                  boarding.pet_data,
                                                  function(pet_data, p) {
                                                    return _c(
                                                      "tr",
                                                      { key: p },
                                                      [
                                                        _c("td", [
                                                          _vm._v(_vm._s(p + 1))
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              pet_data.pet.name
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              pet_data.kennel_id
                                                            )
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
                                                                title:
                                                                  "Print Pet Info"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.printData(
                                                                    boarding
                                                                      .booking_data
                                                                      .id,
                                                                    pet_data.pet_id
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
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "card-footer" },
                                      [
                                        boarding.booking_data.status ==
                                        "onprogress"
                                          ? _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-danger",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changeStatus(
                                                      boarding.booking_data.id,
                                                      "canceled",
                                                      i
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        boarding.booking_data.status ==
                                        "onprogress"
                                          ? _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changeStatus(
                                                      boarding.booking_data.id,
                                                      "completed",
                                                      i
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Finish")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        boarding.booking_data.status != "draft"
                                          ? _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-warning",
                                                attrs: {
                                                  to: {
                                                    name: "boarding.edit",
                                                    params: {
                                                      id:
                                                        boarding.booking_data.id
                                                    }
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                               Details"
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-danger",
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteBooking(
                                                  i,
                                                  boarding.booking_data.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-trash"
                                            }),
                                            _vm._v(" Delete")
                                          ]
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
                                        _vm.getBoardingData
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
      _c("h4", [_vm._v("Boarding List")])
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
          _c("td", [_vm._v("Kennel ID")]),
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