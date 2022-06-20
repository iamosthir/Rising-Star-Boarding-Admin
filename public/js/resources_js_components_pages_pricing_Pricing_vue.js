(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_pricing_Pricing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/pricing/Pricing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/pricing/Pricing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading1: true,
      is_loading2: true,
      priceForm: new Form({
        per_kennel: '',
        additional_dog: ''
      }),
      discountPriceForm: new Form({
        discount_day: '',
        booking_day: ''
      }),
      showCreateForm: false,
      discounts: []
    };
  },
  methods: {
    getPricing: function getPricing() {
      var _this = this;

      axios.get("/admin/api/get-pricing").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.priceForm.per_kennel = data.price_per_kennel;
        _this.priceForm.additional_dog = data.price_for_additional_dog;
        _this.is_loading1 = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    updatePrice: function updatePrice() {
      this.priceForm.post("/admin/api/update-price").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    getDiscounts: function getDiscounts() {
      var _this2 = this;

      axios.get("/admin/api/get-discount-list").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this2.discounts = data;
        _this2.is_loading2 = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    addDiscount: function addDiscount() {
      var _this3 = this;

      this.discountPriceForm.post("/admin/api/add-discount-price").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");

          _this3.discountPriceForm.reset();

          _this3.discounts.push(data.data);

          _this3.showCreateForm = false;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteDiscount: function deleteDiscount(id, index) {
      var _this4 = this;

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
          axios.post("/admin/api/delete-discount", {
            id: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this4.discounts.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  created: function created() {
    this.getPricing();
    this.getDiscounts();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/pricing/Pricing.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pages/pricing/Pricing.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pricing_vue_vue_type_template_id_701097d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pricing.vue?vue&type=template&id=701097d7& */ "./resources/js/components/pages/pricing/Pricing.vue?vue&type=template&id=701097d7&");
/* harmony import */ var _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pricing.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/pricing/Pricing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Pricing_vue_vue_type_template_id_701097d7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pricing_vue_vue_type_template_id_701097d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/pricing/Pricing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/pricing/Pricing.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/pricing/Pricing.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pricing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/pricing/Pricing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/pricing/Pricing.vue?vue&type=template&id=701097d7&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/pricing/Pricing.vue?vue&type=template&id=701097d7& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_701097d7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_701097d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_701097d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pricing.vue?vue&type=template&id=701097d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/pricing/Pricing.vue?vue&type=template&id=701097d7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/pricing/Pricing.vue?vue&type=template&id=701097d7&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/pricing/Pricing.vue?vue&type=template&id=701097d7& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
            _c(
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
                _vm.is_loading1
                  ? _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Price Per Kennel for 1 night (USD)")
                          ]),
                          _vm._v(" "),
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(
                              "Price for additional dog in same kennel (USD)"
                            )
                          ]),
                          _vm._v(" "),
                          _c("skeleton", {
                            attrs: { width: "100%", height: "40px" }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.is_loading1
                  ? _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Price Per Kennel for 1 night (USD)")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.priceForm.per_kennel,
                                expression: "priceForm.per_kennel"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.priceForm.errors.has(
                                "per_kennel"
                              )
                            },
                            attrs: { type: "number" },
                            domProps: { value: _vm.priceForm.per_kennel },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.priceForm,
                                  "per_kennel",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("HasError", {
                            attrs: { form: _vm.priceForm, field: "per_kennel" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v(
                              "Price for additional dog in same kennel (USD)"
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.priceForm.additional_dog,
                                expression: "priceForm.additional_dog"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.priceForm.errors.has(
                                "additional_dog"
                              )
                            },
                            attrs: { type: "number" },
                            domProps: { value: _vm.priceForm.additional_dog },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.priceForm,
                                  "additional_dog",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("HasError", {
                            attrs: {
                              form: _vm.priceForm,
                              field: "additional_dog"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 form-group" },
                        [
                          _c(
                            "Button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { form: _vm.priceForm }
                            },
                            [_vm._v("Update")]
                          )
                        ],
                        1
                      )
                    ])
                  : _vm._e()
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _c("h4", { staticClass: "text-muted" }, [_vm._v("Dicscounts")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary",
                  on: {
                    click: function($event) {
                      _vm.showCreateForm = true
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-plus" }), _vm._v(" Add")]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.showCreateForm
              ? _c("div", { attrs: { id: "addForm" } }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.addDiscount.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-6 form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Booking Days")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.discountPriceForm.booking_day,
                                  expression: "discountPriceForm.booking_day"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.discountPriceForm.errors.has(
                                  "booking_day"
                                )
                              },
                              attrs: { type: "number", placeholder: "Days.." },
                              domProps: {
                                value: _vm.discountPriceForm.booking_day
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.discountPriceForm,
                                    "booking_day",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("HasError", {
                              attrs: {
                                form: _vm.discountPriceForm,
                                field: "booking_day"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6 form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Will Charge for...")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.discountPriceForm.discount_day,
                                  expression: "discountPriceForm.discount_day"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.discountPriceForm.errors.has(
                                  "discount_day"
                                )
                              },
                              attrs: { type: "number", placeholder: "Days.." },
                              domProps: {
                                value: _vm.discountPriceForm.discount_day
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.discountPriceForm,
                                    "discount_day",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("HasError", {
                              attrs: {
                                form: _vm.discountPriceForm,
                                field: "discount_day"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12 form-group" }, [
                          _vm.discountPriceForm.booking_day &&
                          _vm.discountPriceForm.discount_day
                            ? _c("p", [
                                _c("strong", [
                                  _vm._v(
                                    "For " +
                                      _vm._s(
                                        _vm.discountPriceForm.booking_day
                                      ) +
                                      " Days booking, System will charge for " +
                                      _vm._s(
                                        _vm.discountPriceForm.discount_day
                                      ) +
                                      " days"
                                  )
                                ])
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group col-md-6" },
                          [
                            _c(
                              "Button",
                              {
                                staticClass: "btn btn-success",
                                attrs: { form: _vm.discountPriceForm }
                              },
                              [_vm._v("Add")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.showCreateForm = false
                                    _vm.discountPriceForm.reset()
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
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.showCreateForm
              ? _c("div", { attrs: { id: "list" } }, [
                  _vm.is_loading2
                    ? _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(5, function(n) {
                          return _c(
                            "div",
                            { key: n, staticClass: "col-md-12" },
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
                  !_vm.is_loading2
                    ? _c("div", { staticClass: "table-responsive" }, [
                        _c("table", { staticClass: "table" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.discounts, function(disc, i) {
                              return _c("tr", { key: i }, [
                                _c("td", [_vm._v(_vm._s(i + 1))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(disc.booking_day) + " Days")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(disc.discount_day) + " Days")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-danger",
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteDiscount(disc.id, i)
                                        }
                                      }
                                    },
                                    [_vm._v("Delete")]
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ])
                      ])
                    : _vm._e()
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
      _c("h4", { staticClass: "text-muted" }, [_vm._v("Pricing")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Booking Day")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount Day")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);