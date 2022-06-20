(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_bookings_list_GroomingList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      groomings: [],
      paginateData: {},
      moment: moment
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
      axios.get("/admin/api/get-all-grooming-booking?page=" + page, {
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
    appointmentStatus: function appointmentStatus(status, id, index) {
      var _this2 = this;

      axios.post("/admin/api/change-grooming-status", {
        id: id,
        status: status
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");

          _this2.groomings.splice(index, 1);
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteGrooming: function deleteGrooming(index, id) {
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
          axios.post('/admin/api/delete-grooming-booking', {
            groomingId: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this3.groomings.splice(index, 1);
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

/***/ "./resources/js/components/pages/bookings/list/GroomingList.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/pages/bookings/list/GroomingList.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroomingList_vue_vue_type_template_id_82e8fe20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroomingList.vue?vue&type=template&id=82e8fe20& */ "./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=template&id=82e8fe20&");
/* harmony import */ var _GroomingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroomingList.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GroomingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GroomingList_vue_vue_type_template_id_82e8fe20___WEBPACK_IMPORTED_MODULE_0__.render,
  _GroomingList_vue_vue_type_template_id_82e8fe20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/bookings/list/GroomingList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroomingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroomingList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroomingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=template&id=82e8fe20&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=template&id=82e8fe20& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroomingList_vue_vue_type_template_id_82e8fe20___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroomingList_vue_vue_type_template_id_82e8fe20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroomingList_vue_vue_type_template_id_82e8fe20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroomingList.vue?vue&type=template&id=82e8fe20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=template&id=82e8fe20&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=template&id=82e8fe20&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/list/GroomingList.vue?vue&type=template&id=82e8fe20& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                        value: "ongoing",
                        checked: ""
                      },
                      on: { change: _vm.getGroomingData }
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
                      on: { change: _vm.getGroomingData }
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
                      on: { change: _vm.getGroomingData }
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
                                _vm._v(_vm._s(grooming.price) + " USD")
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
                                      .format("MMMM Do YYYY, h:mm:ss a")
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
                                                i
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Finish")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  grooming.status == "ongoing"
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.appointmentStatus(
                                                "cancel",
                                                grooming.id,
                                                i
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
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
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-danger",
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteGrooming(
                                            i,
                                            grooming.id
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-trash" })]
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
      _c("h4", [_vm._v("Grooming - List View")])
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
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);