(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_boarding_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/Edit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      boarding: {},
      moment: moment,
      is_loading: true,
      checkOut: new Form({
        date: '',
        checkOutForm: false,
        bookingId: this.$route.params.id
      }),
      dropForm: new Form({
        date: "",
        dropForm: false,
        bookingId: this.$route.params.id
      }),
      kennelData: new Form({
        boardingId: this.$route.params.id,
        price: "",
        assignedKennels: []
      }),
      priceForm: new Form({
        boardingId: this.$route.params.id,
        price: ""
      }),
      kennelError: false,
      priceError: false,
      kennels: [],
      emailError: false,
      emailErrorText: "",
      editDateRange: false,
      dateRangeForm: new Form({
        boardingId: this.$route.params.id,
        startDate: '',
        endDate: ''
      }),
      priceEditMode: false,
      kennelEditMode: false,
      kennelUpdateForm: new Form([])
    };
  },
  methods: {
    updateKennels: function updateKennels() {
      var _this = this;

      this.kennelData.post("/admin/api/update-kennel").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.kennelEditMode = false;

          _this.kennelData.assignedKennels.forEach(function (item, i) {
            _this.boarding.pet_data[i].kennel_id = item.kennel_id;
          });

          swal.fire("Update successfull", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    kennelEdit: function kennelEdit(index) {
      this.kennelEditMode = true;
      this.kennelEditIndex = index;
    },
    updatePrice: function updatePrice() {
      var _this2 = this;

      this.priceForm.post("/admin/api/update-boarding-price").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this2.priceEditMode = false;
          _this2.boarding.booking_data.price = _this2.priceForm.price;
          swal.fire("Price updated", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    getBoardingData: function getBoardingData() {
      var _this3 = this;

      axios.get("/admin/api/get-boarding-data", {
        params: {
          bookingId: this.$route.params.id
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this3.boarding = data.main_data;

          _this3.boarding.pet_data.forEach(function (item, i) {
            _this3.kennelData.assignedKennels.push({
              boardingPetId: item.id,
              kennel_id: item.kennel_id
            });
          });

          _this3.dateRangeForm.startDate = _this3.boarding.booking_data.start_date;
          _this3.dateRangeForm.endDate = _this3.boarding.booking_data.ending_date;
          _this3.priceForm.price = _this3.boarding.booking_data.price;
          _this3.is_loading = false;
        } else {
          _this3.$router.go(-1);
        }
      })["catch"](function (err) {
        console.error(err.response.data);

        _this3.$router.go(-1);
      });
    },
    printData: function printData(bookingId, petId) {
      window.open("/admin/api/print-pet-info?petId=" + petId + "&bookingId=" + bookingId).focus();
    },
    changeStatus: function changeStatus(bookingId, status, index) {
      var _this4 = this;

      axios.post("/admin/api/change-boarding-status", {
        bookingId: bookingId,
        status: status
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("success", data.msg, "success");
          _this4.boarding.booking_data.status = data.action;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    checkIn: function checkIn() {
      var _this5 = this;

      this.dropForm.post("/admin/api/boarding-check-in", {
        bookingId: this.$route.params.id
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this5.dropForm.reset();

          _this5.boarding.booking_data.checkIn = data.checkIn;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    checkOutData: function checkOutData() {
      var _this6 = this;

      this.checkOut.post("/admin/api/boarding-check-out").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this6.checkOut.reset();

          _this6.checkOut.checkOutForm = false;
          _this6.boarding.booking_data.checkOut = data.checkOut;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    approveBoarding: function approveBoarding() {
      var _this7 = this;

      this.kennelData.assignedKennels.forEach(function (item, i) {
        if (item.kennel_id == "") {
          _this7.kennelError = true;
        } else {
          _this7.kennelError = false;
        }
      });

      if (this.kennelData.price == "") {
        this.priceError = true;
      } else {
        this.priceError = false;
      }

      if (!this.kennelError && !this.priceError) {
        this.kennelData.post("/admin/api/approve-boarding").then(function (resp) {
          return resp.data;
        }).then(function (data) {
          console.log(data);

          if (data.status == "ok") {
            swal.fire("Booking Approved", data.msg, "success");

            _this7.boarding.pet_data.forEach(function (item, i) {
              item.kennel_id = _this7.kennelData.assignedKennels[i].kennel_id;
            });

            _this7.boarding.booking_data.status = "onprogress";
          }
        })["catch"](function (err) {
          console.error(err.response.data); // 

          swal.fire("Booking Approved", "Booking is now approved", "success");

          _this7.boarding.pet_data.forEach(function (item, i) {
            item.kennel_id = _this7.kennelData.assignedKennels[i].kennel_id;
          });

          _this7.boarding.booking_data.status = "onprogress";
          _this7.emailError = true;
          _this7.emailErrorText = err.response.data.message;
        });
      }
    },
    getKennels: function getKennels() {
      var _this8 = this;

      axios.get("/admin/api/list-all-kennels").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this8.kennels = data;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    updateDateRange: function updateDateRange() {
      var _this9 = this;

      this.dateRangeForm.post("/admin/api/update-boarding-date-range").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Updated", data.msg, "success");
          _this9.boarding.booking_data.start_date = _this9.dateRangeForm.startDate;
          _this9.boarding.booking_data.ending_date = _this9.dateRangeForm.endDate;
          _this9.editDateRange = false;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getBoardingData();
    this.getKennels();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/boarding/Edit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/boarding/Edit.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_7ca31b17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=7ca31b17& */ "./resources/js/components/pages/boarding/Edit.vue?vue&type=template&id=7ca31b17&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/boarding/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_7ca31b17___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_7ca31b17___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/boarding/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/boarding/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/boarding/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/boarding/Edit.vue?vue&type=template&id=7ca31b17&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/boarding/Edit.vue?vue&type=template&id=7ca31b17& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7ca31b17___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7ca31b17___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7ca31b17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=7ca31b17& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/Edit.vue?vue&type=template&id=7ca31b17&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/Edit.vue?vue&type=template&id=7ca31b17&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/boarding/Edit.vue?vue&type=template&id=7ca31b17& ***!
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
  return _c("section", { staticClass: "section" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _vm.is_loading
          ? _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-header d-flex justify-content-between" },
                [
                  _c("skeleton", { attrs: { width: "10%", height: "20px" } }),
                  _vm._v(" "),
                  _c("skeleton", { attrs: { width: "30%", height: "20px" } })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "mt-3 d-flex justify-content-between" },
                  [
                    _c("skeleton", { attrs: { width: "40%", height: "20px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "40%", height: "20px" } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-3 d-flex justify-content-between" },
                  [
                    _c("skeleton", { attrs: { width: "40%", height: "20px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "40%", height: "20px" } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-3 d-flex justify-content-between" },
                  [
                    _c("skeleton", { attrs: { width: "40%", height: "20px" } }),
                    _vm._v(" "),
                    _c("skeleton", { attrs: { width: "40%", height: "20px" } })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row mt-4" },
                  _vm._l(4, function(n) {
                    return _c(
                      "div",
                      { key: n, staticClass: "col-md-12 mt-2" },
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
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.is_loading
          ? _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-header d-flex justify-content-between" },
                [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(
                      "Booking ID #" + _vm._s(_vm.boarding.booking_data.id)
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v("Booking Date :\n            "),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm
                            .moment(_vm.boarding.booking_data.created_at)
                            .format("DD MMM YYYY, hh:mm a")
                        )
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("div", { staticClass: "justify-content-between d-flex" }, [
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v("\n              Customer Name :\n              "),
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.boarding.booking_data.customer.first_name +
                              " " +
                              _vm.boarding.booking_data.customer.last_name
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm.boarding.booking_data.status == "onprogress"
                        ? _c(
                            "span",
                            { staticClass: "badge badge-pill badge-warning" },
                            [_vm._v("On Progress")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.boarding.booking_data.status == "canceled"
                        ? _c(
                            "span",
                            { staticClass: "badge badge-pill badge-danger" },
                            [_vm._v("Canceled")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.boarding.booking_data.status == "completed"
                        ? _c(
                            "span",
                            { staticClass: "badge badge-pill badge-success" },
                            [_vm._v("Completed")]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v("\n              Contact : "),
                      _c("strong", [
                        _vm._v(
                          _vm._s(_vm.boarding.booking_data.customer.cell_phone)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm.boarding.booking_data.status != "pending"
                        ? _c(
                            "span",
                            {
                              staticStyle: { cursor: "pointer" },
                              attrs: { title: "Edit Price" },
                              on: {
                                click: function($event) {
                                  _vm.priceEditMode = true
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-edit" })]
                          )
                        : _vm._e(),
                      _vm._v(" Total Price: "),
                      _c("strong", { staticClass: "text-success" }, [
                        _vm._v(
                          "$ " + _vm._s(_vm.boarding.booking_data.price || 0)
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.priceEditMode
                    ? _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updatePrice.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "row mb-3 justify-content-end" },
                            [
                              _c("div", { staticClass: "col-3" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "input-group input-group-sm mb-3"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.priceForm.price,
                                          expression: "priceForm.price"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.priceForm.errors.has(
                                          "price"
                                        )
                                      },
                                      attrs: {
                                        type: "number",
                                        placeholder: "Set your price...",
                                        "aria-label": "Recipient's username"
                                      },
                                      domProps: { value: _vm.priceForm.price },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.priceForm,
                                            "price",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "input-group-append" },
                                      [
                                        _c(
                                          "Button",
                                          {
                                            staticClass:
                                              "btn btn-success pl-4 pr-4",
                                            attrs: {
                                              form: _vm.priceForm,
                                              type: "submit",
                                              title: "Update"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-check"
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "input-group-append" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-danger pl-4 pr-4",
                                            attrs: {
                                              type: "button",
                                              title: "Cancel"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.priceEditMode = false
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-times"
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v("\n              Booking Range :\n              "),
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm
                              .moment(_vm.boarding.booking_data.start_date)
                              .format("DD MMM YYYY")
                          ) +
                            " to\n                " +
                            _vm._s(
                              _vm
                                .moment(_vm.boarding.booking_data.ending_date)
                                .format("DD MMM YYYY")
                            )
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "ml-4",
                          staticStyle: { cursor: "pointer" },
                          attrs: { title: "Edit date range" },
                          on: {
                            click: function($event) {
                              _vm.editDateRange = true
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-edit" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v("\n              Total Days: "),
                      _c("strong", [
                        _vm._v(
                          _vm._s(_vm.boarding.booking_data.stay_day) + " Days"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.editDateRange
                    ? _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateDateRange.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row mb-3" }, [
                            _c("div", { staticClass: "col-3 mt-3" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Start Date :")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.dateRangeForm.startDate,
                                    expression: "dateRangeForm.startDate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: {
                                  value: _vm.dateRangeForm.startDate
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.dateRangeForm,
                                      "startDate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-3 mt-3" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("End Date :")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.dateRangeForm.endDate,
                                    expression: "dateRangeForm.endDate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: { value: _vm.dateRangeForm.endDate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.dateRangeForm,
                                      "endDate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 mt-3" },
                              [
                                _c(
                                  "Button",
                                  {
                                    staticClass: "btn btn-sm btn-success",
                                    attrs: { form: _vm.dateRangeForm }
                                  },
                                  [_vm._v("Update")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-danger",
                                    on: {
                                      click: function($event) {
                                        _vm.editDateRange = false
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                )
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v("\n              Drop Off Time : "),
                      _c("strong", { staticClass: "text-warning" }, [
                        _vm._v(
                          _vm._s(
                            _vm.boarding.booking_data.checkIn
                              ? _vm
                                  .moment(_vm.boarding.booking_data.checkIn)
                                  .format("DD MMM YYYY - hh:mm A")
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.dropForm.dropForm == false &&
                      _vm.boarding.booking_data.status != "pending"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary",
                              on: {
                                click: function($event) {
                                  _vm.dropForm.dropForm = true
                                }
                              }
                            },
                            [_vm._v("Set Drop Time")]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v("\n              Pick Up Time: "),
                      _c("strong", { staticClass: "text-warning" }, [
                        _vm._v(
                          _vm._s(
                            _vm.boarding.booking_data.checkOut
                              ? _vm
                                  .moment(_vm.boarding.booking_data.checkOut)
                                  .format("DD MMM YYYY - hh:mm A")
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.checkOut.checkOutForm == false &&
                      _vm.boarding.booking_data.status != "pending"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary",
                              on: {
                                click: function($event) {
                                  _vm.checkOut.checkOutForm = true
                                }
                              }
                            },
                            [_vm._v("Set Pick Up Time")]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.dropForm.dropForm == true
                    ? _c("div", { staticClass: "row justify-content-start" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("p", [_vm._v("Drop Off Time")]),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.checkIn.apply(null, arguments)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.dropForm.date,
                                      expression: "dropForm.date"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "datetime-local" },
                                  domProps: { value: _vm.dropForm.date },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.dropForm,
                                        "date",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "Button",
                                    {
                                      staticClass: "btn btn-sm btn-success",
                                      attrs: { form: _vm.dropForm }
                                    },
                                    [_vm._v("Set")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-danger",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.dropForm.dropForm = false
                                          _vm.dropForm.reset()
                                        }
                                      }
                                    },
                                    [_vm._v("Cancel")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.checkOut.checkOutForm == true
                    ? _c("div", { staticClass: "row justify-content-end" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("p", [_vm._v("Pick up Time")]),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.checkOutData.apply(null, arguments)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.checkOut.date,
                                      expression: "checkOut.date"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "datetime-local" },
                                  domProps: { value: _vm.checkOut.date },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.checkOut,
                                        "date",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "Button",
                                    {
                                      staticClass: "btn btn-sm btn-success",
                                      attrs: { form: _vm.checkOut }
                                    },
                                    [_vm._v("Set")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-danger",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.checkOut.checkOutForm = false
                                          _vm.checkOut.reset()
                                        }
                                      }
                                    },
                                    [_vm._v("Cancel")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  [
                    _vm.boarding.booking_data.checkIn == null &&
                    _vm.boarding.booking_data.status == "onprogress"
                      ? _c("p", { staticClass: "text-warning" }, [_vm._m(0)])
                      : _vm.boarding.booking_data.checkIn != null &&
                        _vm.boarding.booking_data.status == "onprogress"
                      ? _c("p", { staticClass: "text-success" }, [_vm._m(1)])
                      : _vm.boarding.booking_data.checkIn != null &&
                        _vm.boarding.booking_data.status == "completed"
                      ? _c("p", { staticClass: "text-success" }, [_vm._m(2)])
                      : _vm.boarding.booking_data.status == "canceled"
                      ? _c("p", { staticClass: "text-danger" }, [_vm._m(3)])
                      : _vm.boarding.booking_data.status == "pending"
                      ? _c("p", { staticClass: "text-warning" }, [_vm._m(4)])
                      : _vm._e()
                  ],
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive" }, [
                    _c("table", { staticClass: "table" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.boarding.pet_data, function(pet_data, p) {
                            return _c("tr", { key: p }, [
                              _c("td", [_vm._v(_vm._s(p + 1))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(pet_data.pet.name))]),
                              _vm._v(" "),
                              _c("td", { attrs: { width: "20%" } }, [
                                pet_data.kennel_id == null || _vm.kennelEditMode
                                  ? _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.kennelData.assignedKennels[p]
                                                .kennel_id,
                                            expression:
                                              "kennelData.assignedKennels[p].kennel_id"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.kennelData.assignedKennels[p],
                                              "kennel_id",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          { attrs: { value: "", hidden: "" } },
                                          [_vm._v("Assign a kennel")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.kennels, function(
                                          kennel,
                                          i
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: i,
                                              domProps: {
                                                value: kennel.unique_id
                                              }
                                            },
                                            [_vm._v(_vm._s(kennel.title))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  : pet_data.kennel_id != null &&
                                    !_vm.kennelEditMode
                                  ? _c("strong", [
                                      _vm._v(_vm._s(pet_data.kennel_id))
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-success",
                                    attrs: { title: "Print Pet Info" },
                                    on: {
                                      click: function($event) {
                                        return _vm.printData(
                                          _vm.boarding.booking_data.id,
                                          pet_data.pet_id
                                        )
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-print" })]
                                )
                              ])
                            ])
                          }),
                          _vm._v(" "),
                          _vm.boarding.booking_data.status != "pending"
                            ? _c("tr", [
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    !_vm.kennelEditMode
                                      ? [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-info",
                                              on: {
                                                click: function($event) {
                                                  _vm.kennelEditMode = true
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-edit"
                                              }),
                                              _vm._v(" Edit Kennels")
                                            ]
                                          )
                                        ]
                                      : [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-success",
                                              on: { click: _vm.updateKennels }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-check"
                                              }),
                                              _vm._v(" Save")
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-danger",
                                              on: {
                                                click: function($event) {
                                                  _vm.kennelEditMode = false
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-times"
                                              }),
                                              _vm._v(" Cancel")
                                            ]
                                          )
                                        ]
                                  ],
                                  2
                                )
                              ])
                            : _vm._e()
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.boarding.booking_data.status == "pending"
                    ? _c("div", { staticClass: "row mt-4" }, [
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Set Price")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.kennelData.price,
                                expression: "kennelData.price"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", placeholder: "$" },
                            domProps: { value: _vm.kennelData.price },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.kennelData,
                                  "price",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.boarding.booking_data.status != "pending"
                    ? _c("div", { staticClass: "row mt-4" }, [
                        _c("div", { staticClass: "col-md-12 text-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-outline-secondary",
                              attrs: {
                                href:
                                  "/admin/api/print-boarding-contract?boardingId=" +
                                  _vm.boarding.booking_data.id,
                                target: "_blank"
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-print" }),
                              _vm._v(" Download Contract")
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _vm.boarding.booking_data.checkIn == null &&
                _vm.boarding.booking_data.status != "pending" &&
                _vm.boarding.booking_data.status != "canceled"
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-success",
                        on: { click: _vm.checkIn }
                      },
                      [_vm._v("Check In")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.boarding.booking_data.status == "pending" ||
                _vm.boarding.booking_data.status == "pending"
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-success",
                        attrs: { disabled: _vm.kennelData.busy },
                        on: { click: _vm.approveBoarding }
                      },
                      [
                        _vm.kennelData.busy
                          ? _c("span", {
                              staticClass: "spinner-border spinner-border-sm",
                              attrs: { role: "status", "aria-hidden": "true" }
                            })
                          : _vm._e(),
                        _vm._v(" \n            Approve\n          ")
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.boarding.booking_data.status == "onprogress" ||
                _vm.boarding.booking_data.status == "pending"
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        on: {
                          click: function($event) {
                            return _vm.changeStatus(
                              _vm.boarding.booking_data.id,
                              "canceled"
                            )
                          }
                        }
                      },
                      [_vm._v("\n            Cancel\n          ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.boarding.booking_data.status == "onprogress"
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        on: {
                          click: function($event) {
                            return _vm.changeStatus(
                              _vm.boarding.booking_data.id,
                              "completed"
                            )
                          }
                        }
                      },
                      [_vm._v("\n            Finish\n          ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.kennelError
                  ? _c("div", { staticClass: "row mt-5" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "alert alert-danger alert-dismissible fade show",
                            attrs: { role: "alert" }
                          },
                          [
                            _c("strong", [_vm._v("Warning!")]),
                            _vm._v(
                              "   Please assign kennels for all pets.\n                "
                            ),
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
                                    _vm.kennelError = false
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("×")]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.priceError
                  ? _c("div", { staticClass: "row mt-3" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "alert alert-danger alert-dismissible fade show",
                            attrs: { role: "alert" }
                          },
                          [
                            _c("strong", [_vm._v("Warning!")]),
                            _vm._v(
                              "   Please set a price for this booking.\n                "
                            ),
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
                                    _vm.priceError = false
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("×")]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.emailError
                  ? _c("div", { staticClass: "row mt-3 mb-4" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "alert alert-danger alert-dismissible fade show",
                            attrs: { role: "alert" }
                          },
                          [
                            _c("h4", { staticClass: "alert-heading" }, [
                              _vm._v("Warning!")
                            ]),
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
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("×")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "This booking was approved successfully but there were some problem with the server"
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(6),
                            _vm._v(" "),
                            _c("ul", [
                              _c(
                                "li",
                                [
                                  _vm._v(
                                    "Try to set a default email account from "
                                  ),
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
                              _c("li", [
                                _vm._v("Check your email server configuration")
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v("Check your email credentials")
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _vm._v(
                                  "Contact with developer for more support"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("hr"),
                            _vm._v(" "),
                            _vm._m(7),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(_vm.emailErrorText))])
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
              ])
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
    return _c("strong", [
      _c("i", { staticClass: "fas fa-circle" }),
      _vm._v(" Waiting For Customer Check in")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fas fa-circle" }),
      _vm._v(" Reservation Started")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fas fa-circle" }),
      _vm._v(" Booking was completed")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fas fa-circle" }),
      _vm._v(" Booking was canceled")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fas fa-circle" }),
      _vm._v(" Waiting for approval")
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