(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_customer_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/List.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      paginateData: {},
      customers: [],
      total_customer: 0,
      searchText: "",
      searchMode: false,
      searchCustomers: [],
      searchPaginate: {}
    };
  },
  created: function created() {
    this.getCustomerList();
  },
  methods: {
    getCustomerList: function getCustomerList() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.is_loading = true;
      axios.get("/admin/api/customer-list?page=" + page).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.total_customer = data.total;
        _this.paginateData = data.customer;
        _this.customers = data.customer.data;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteCustomer: function deleteCustomer(customer_id, index) {
      var _this2 = this;

      // Swal
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
          axios.post("/admin/api/delete-customer", {
            customer_id: customer_id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            console.log(data);

            if (data.status == "ok") {
              _this2.customers.splice(index, 1);

              swal.fire({
                title: "Success",
                icon: "success",
                text: data.msg
              });
            } else {
              swal.fire({
                title: "Failed",
                text: "Internal Server Error",
                icon: "error"
              });
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      }); // end
    },
    searchCustomer: function searchCustomer() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.searchText != "") {
        this.searchMode = true;
        this.is_loading = true;
        axios.get("/admin/api/search-customer?page=" + page, {
          params: {
            text: this.searchText
          }
        }).then(function (resp) {
          return resp.data;
        }).then(function (data) {
          _this3.searchCustomers = data.data;
          _this3.searchPaginate = data;
          _this3.is_loading = false;
        })["catch"](function (err) {
          console.error(err.response.data);
        });
      } else {
        this.searchMode = false;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/customer/List.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/customer/List.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_83c2fd6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=83c2fd6e& */ "./resources/js/components/pages/customer/List.vue?vue&type=template&id=83c2fd6e&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/customer/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _List_vue_vue_type_template_id_83c2fd6e___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_83c2fd6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/customer/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/customer/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/customer/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/customer/List.vue?vue&type=template&id=83c2fd6e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/customer/List.vue?vue&type=template&id=83c2fd6e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_83c2fd6e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_83c2fd6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_83c2fd6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=83c2fd6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/List.vue?vue&type=template&id=83c2fd6e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/List.vue?vue&type=template&id=83c2fd6e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/customer/List.vue?vue&type=template&id=83c2fd6e& ***!
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
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _c("h4", [_vm._v("Customer List")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm btn-primary",
                  attrs: { to: { name: "customer.create" } }
                },
                [
                  _vm._v("Create new customer "),
                  _c("i", { staticClass: "fas fa-plus" })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("h6", [
                  _vm._v("Total "),
                  _c("span", { staticClass: "text-success" }, [
                    _vm._v(_vm._s(_vm.total_customer))
                  ]),
                  _vm._v(" Customers")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 mt-3" }, [
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12 mt-3" }, [
                _vm.is_loading
                  ? _c(
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
                  : _vm._e(),
                _vm._v(" "),
                !_vm.is_loading && _vm.customers.length > 0 && !_vm.searchMode
                  ? _c("div", { staticClass: "table-responsive-md" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover table-striped" },
                        [
                          _vm._m(0),
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
                                _c("td", [_vm._v(_vm._s(customer.cell_phone))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(customer.email))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(customer.pet.length))]),
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
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-success btn-sm",
                                        attrs: {
                                          to: {
                                            name: "customer.profile",
                                            params: { customerId: customer.id }
                                          }
                                        }
                                      },
                                      [_vm._v("View")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-warning",
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteCustomer(
                                              customer.id,
                                              i
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row justify-content-center mt-4" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.paginateData },
                            on: {
                              "pagination-change-page": _vm.getCustomerList
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.is_loading &&
                _vm.searchCustomers.length > 0 &&
                _vm.searchMode
                  ? _c("div", { staticClass: "table-responsive-md" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover table-striped" },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.searchCustomers, function(customer, i) {
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
                                _c("td", [_vm._v(_vm._s(customer.cell_phone))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(customer.email))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(customer.pet.length))]),
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
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-success btn-sm",
                                        attrs: {
                                          to: {
                                            name: "customer.profile",
                                            params: { customerId: customer.id }
                                          }
                                        }
                                      },
                                      [_vm._v("View")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-warning",
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteCustomer(
                                              customer.id,
                                              i
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row justify-content-center mt-4" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.searchPaginate },
                            on: { "pagination-change-page": _vm.searchCustomer }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e()
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
        _c("th", [_vm._v("Booking")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
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
        _c("th", [_vm._v("Booking")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);