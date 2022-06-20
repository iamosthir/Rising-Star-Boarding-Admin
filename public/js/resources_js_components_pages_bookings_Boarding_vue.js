(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_bookings_Boarding_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/Boarding.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/Boarding.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      customer_data: {},
      pets: [],
      dogFields: 1,
      kennels: [],
      form: new Form({
        dogs: [{
          dog_id: "",
          kennel: ""
        }],
        customer_id: this.$route.params.id,
        start_date: '',
        end_date: '',
        totalDays: '',
        price: "",
        note: "",
        requestedKennel: "1 Kennel with 1 dog",
        draft: false
      })
    };
  },
  created: function created() {
    this.getCustomerDetails();
    this.getAvailableKennels();
  },
  methods: {
    getCustomerDetails: function getCustomerDetails() {
      var _this = this;

      axios.get("/admin/api/get-customer-data", {
        params: {
          customer_id: this.$route.params.id
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.customer_data = data.data;
          _this.pets = data.data.pet;
        } else {
          _this.$router.push({
            name: "booking.new"
          });
        }
      });
    },
    getAvailableKennels: function getAvailableKennels() {
      var _this2 = this;

      axios.get("/admin/api/list-all-kennels").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this2.kennels = data;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    addField: function addField() {
      this.form.dogs.push({
        dog_id: "",
        kennel: ""
      });
      this.dogFields += 1;
    },
    removeField: function removeField() {
      this.form.dogs.pop();
      this.dogFields -= 1;
    },
    submit: function submit() {
      var _this3 = this;

      this.form.post("/admin/api/submit-boarding-order").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        console.log(data);

        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success").then(function () {
            if (data.draft == true) {
              _this3.$router.push({
                name: 'booking.draft'
              });
            } else {
              _this3.$router.push({
                name: 'boarding.list'
              });
            }
          });
        } else {
          swal.fire("Failed", "Something went wrong", "error");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    calculatePrice: function calculatePrice() {
      var _this4 = this;

      this.workingOnPrice = true;
      this.form.post("/admin/api/calculate-price").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        console.log(data);
        _this4.workingOnPrice = false;

        if (data.status == "ok") {
          _this4.price = data.price;
          _this4.discount = data.discountPrice;
          _this4.priceCalculated = true;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
        _this4.workingOnPrice = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/bookings/Boarding.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/bookings/Boarding.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Boarding_vue_vue_type_template_id_c2804cea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Boarding.vue?vue&type=template&id=c2804cea& */ "./resources/js/components/pages/bookings/Boarding.vue?vue&type=template&id=c2804cea&");
/* harmony import */ var _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Boarding.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/bookings/Boarding.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Boarding_vue_vue_type_template_id_c2804cea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Boarding_vue_vue_type_template_id_c2804cea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/bookings/Boarding.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/bookings/Boarding.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/bookings/Boarding.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/Boarding.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/bookings/Boarding.vue?vue&type=template&id=c2804cea&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/bookings/Boarding.vue?vue&type=template&id=c2804cea& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_c2804cea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_c2804cea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boarding_vue_vue_type_template_id_c2804cea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Boarding.vue?vue&type=template&id=c2804cea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/Boarding.vue?vue&type=template&id=c2804cea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/Boarding.vue?vue&type=template&id=c2804cea&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/bookings/Boarding.vue?vue&type=template&id=c2804cea& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _c("h4", [_vm._v("Bookings For Boarding")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "raise-button",
                  attrs: { tag: "button", to: { name: "booking.new" } }
                },
                [
                  _c("i", { staticClass: "fas fa-arrow-left" }),
                  _vm._v(" Go back\n          ")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("h6", { staticClass: "text-muted" }, [
              _vm._v("Customer Name: "),
              _c("strong", { staticClass: "text-success" }, [
                _vm._v(
                  _vm._s(
                    _vm.customer_data.first_name +
                      " " +
                      _vm.customer_data.last_name
                  )
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit()
                  }
                }
              },
              [
                _c("fieldset", [
                  _c("legend", [
                    _vm._v("Choose Stay Days "),
                    _vm.form.totalDays
                      ? _c("span", { staticClass: "text-warning" }, [
                          _c("strong", [
                            _vm._v(
                              "(Total : " +
                                _vm._s(_vm.form.totalDays) +
                                " days)"
                            )
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "form-group col-md-6" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.start_date,
                              expression: "form.start_date"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("start_date")
                          },
                          attrs: { type: "date", required: "" },
                          domProps: { value: _vm.form.start_date },
                          on: {
                            change: _vm.getAvailableKennels,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "start_date",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("HasError", {
                          attrs: { form: _vm.form, field: "start_date" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group col-md-6" },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.end_date,
                              expression: "form.end_date"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("end_date")
                          },
                          attrs: { type: "date", required: "" },
                          domProps: { value: _vm.form.end_date },
                          on: {
                            change: _vm.getAvailableKennels,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "end_date",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("HasError", {
                          attrs: { form: _vm.form, field: "end_date" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4 mb-3 my-form" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Select the number of kennels")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.requestedKennel,
                              expression: "form.requestedKennel"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "requestedKennel",
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
                            { attrs: { value: "1 Kennel with 1 dog" } },
                            [_vm._v("1 Kennel with 1 dog")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "1 Kennel with 2 dog" } },
                            [_vm._v("1 Kennel with 2 dog")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "1 Kennel with 3 dog" } },
                            [_vm._v("1 Kennel with 3 dog")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "2 Kennel with 1 dog each" } },
                            [_vm._v("2 Kennel with 1 dog each")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _vm._l(_vm.dogFields, function(fields, i) {
                  return _c("fieldset", { key: i }, [
                    _c("legend", [_vm._v("Dog " + _vm._s(i + 1))]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4 form-group" }, [
                        _vm._m(3, true),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.dogs[i].dog_id,
                                expression: "form.dogs[i].dog_id"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form.dogs[i],
                                  "dog_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "", hidden: "" } }, [
                              _vm._v("Select Pet")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.pets, function(pet, p) {
                              return _c(
                                "option",
                                { key: p, domProps: { value: pet.id } },
                                [
                                  _vm._v(
                                    _vm._s(pet.name) + " - " + _vm._s(pet.color)
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 form-group" }, [
                        _vm._m(4, true),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.dogs[i].kennel,
                                expression: "form.dogs[i].kennel"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form.dogs[i],
                                  "kennel",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "", hidden: "" } }, [
                              _vm._v("Choose Kennel")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.kennels, function(kennel, n) {
                              return _c(
                                "option",
                                {
                                  key: n,
                                  domProps: { value: kennel.unique_id }
                                },
                                [
                                  _vm._v(
                                    _vm._s(kennel.title) +
                                      " - " +
                                      _vm._s(kennel.unique_id) +
                                      " - " +
                                      _vm._s(kennel.size)
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-4 form-group" }, [
                    _vm.pets.length > 1 &&
                    _vm.pets.length != _vm.form.dogs.length
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-secondary",
                            attrs: { type: "button", title: "Add another dog" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.addField.apply(null, arguments)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-plus" })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.dogFields > 1
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-danger",
                            attrs: { type: "button", title: "Remove Last Row" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.removeField.apply(null, arguments)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-trash" })]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-12 form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Note")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.note,
                            expression: "form.note"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("note") },
                        attrs: { placeholder: "Write..." },
                        domProps: { value: _vm.form.note },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "note", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "note" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6 form-group" },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.price,
                            expression: "form.price"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("price") },
                        attrs: {
                          type: "number",
                          required: _vm.form.draft == false ? true : false
                        },
                        domProps: { value: _vm.form.price },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "price", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "price" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12 form-group" }, [
                    _c("label", { attrs: { for: "draftCheck" } }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.draft,
                            expression: "form.draft"
                          }
                        ],
                        attrs: { id: "draftCheck", type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.form.draft)
                            ? _vm._i(_vm.form.draft, null) > -1
                            : _vm.form.draft
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.draft,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(_vm.form, "draft", $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "draft",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "draft", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" Save this booking as draft")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-12 form-group" },
                    [
                      _c(
                        "Button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { form: _vm.form }
                        },
                        [_vm._v("Book Now")]
                      )
                    ],
                    1
                  )
                ])
              ],
              2
            )
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
    return _c("p", { staticClass: "text-muted" }, [
      _vm._v("Booking Type : "),
      _c("strong", { staticClass: "text-warning" }, [_vm._v("Boarding")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Start Date "),
      _c("span", { staticClass: "text-danger" }, [_c("strong", [_vm._v("*")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("End date "),
      _c("span", { staticClass: "text-danger" }, [_c("strong", [_vm._v("*")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Select Pet "),
      _c("span", { staticClass: "text-danger" }, [_c("strong", [_vm._v("*")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Assign Kennel "),
      _c("span", { staticClass: "text-danger" }, [_c("strong", [_vm._v("*")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Price ($) "),
      _c("span", { staticClass: "text-danger" }, [_c("strong", [_vm._v("*")])])
    ])
  }
]
render._withStripped = true



/***/ })

}]);