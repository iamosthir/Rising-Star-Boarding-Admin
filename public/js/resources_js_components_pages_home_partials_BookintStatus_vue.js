(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_home_partials_BookintStatus_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      boardingStatus: false,
      groomingStatus: false
    };
  },
  methods: {
    getStatus: function getStatus() {
      var _this = this;

      axios.get("/admin/api/get-all-booking-statuses").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.isLoading = false;
          _this.boardingStatus = data.data.boarding_status == 'true' ? true : false;
          _this.groomingStatus = data.data.grooming_status == 'true' ? true : false;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    updateBoardingStatus: function updateBoardingStatus() {
      var _this2 = this;

      axios.post("/admin/api/update-boarding-status", {
        status: this.boardingStatus
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          if (data.type == "service_online") {
            _this2.$toast.success(data.msg);
          } else {
            _this2.$toast.error(data.msg);
          }
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    updateGroomingStatus: function updateGroomingStatus() {
      var _this3 = this;

      axios.post("/admin/api/update-grooming-status", {
        status: this.groomingStatus
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          if (data.type == "service_online") {
            _this3.$toast.success(data.msg);
          } else {
            _this3.$toast.error(data.msg);
          }
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getStatus();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/home/partials/BookintStatus.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/BookintStatus.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookintStatus_vue_vue_type_template_id_ad21d376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookintStatus.vue?vue&type=template&id=ad21d376& */ "./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=template&id=ad21d376&");
/* harmony import */ var _BookintStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookintStatus.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BookintStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BookintStatus_vue_vue_type_template_id_ad21d376___WEBPACK_IMPORTED_MODULE_0__.render,
  _BookintStatus_vue_vue_type_template_id_ad21d376___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/home/partials/BookintStatus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookintStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookintStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookintStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=template&id=ad21d376&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=template&id=ad21d376& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookintStatus_vue_vue_type_template_id_ad21d376___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookintStatus_vue_vue_type_template_id_ad21d376___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookintStatus_vue_vue_type_template_id_ad21d376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookintStatus.vue?vue&type=template&id=ad21d376& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=template&id=ad21d376&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=template&id=ad21d376&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/home/partials/BookintStatus.vue?vue&type=template&id=ad21d376& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "section" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _vm.isLoading
              ? _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "20px" }
                      }),
                      _vm._v(" "),
                      _c("skeleton", {
                        attrs: { width: "100%", height: "20px" }
                      })
                    ],
                    1
                  )
                ])
              : _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 mb-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("h6", [
                        _vm._v(
                          "Boarding Bookings \n                                  "
                        ),
                        !_vm.boardingStatus
                          ? _c("span", { staticClass: "text-danger" }, [
                              _c("small", [_vm._v("(ofline)")])
                            ])
                          : _c("span", { staticClass: "text-success" }, [
                              _c("small", [_vm._v("(online)")])
                            ])
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "custom-switch mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.boardingStatus,
                              expression: "boardingStatus"
                            }
                          ],
                          staticClass: "custom-switch-input",
                          attrs: {
                            type: "checkbox",
                            name: "custom-switch-checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(_vm.boardingStatus)
                              ? _vm._i(_vm.boardingStatus, null) > -1
                              : _vm.boardingStatus
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.boardingStatus,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.boardingStatus = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.boardingStatus = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.boardingStatus = $$c
                                }
                              },
                              _vm.updateBoardingStatus
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-switch-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-switch-description" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.boardingStatus == true
                                  ? "Trun Off"
                                  : "Trun On"
                              )
                            )
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("h6", [
                        _vm._v(
                          "Grooming Bookings \n                                  "
                        ),
                        !_vm.groomingStatus
                          ? _c("span", { staticClass: "text-danger" }, [
                              _c("small", [_vm._v("(ofline)")])
                            ])
                          : _c("span", { staticClass: "text-success" }, [
                              _c("small", [_vm._v("(online)")])
                            ])
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "custom-switch mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.groomingStatus,
                              expression: "groomingStatus"
                            }
                          ],
                          staticClass: "custom-switch-input",
                          attrs: {
                            type: "checkbox",
                            name: "custom-switch-checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(_vm.groomingStatus)
                              ? _vm._i(_vm.groomingStatus, null) > -1
                              : _vm.groomingStatus
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.groomingStatus,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.groomingStatus = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.groomingStatus = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.groomingStatus = $$c
                                }
                              },
                              _vm.updateGroomingStatus
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-switch-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-switch-description" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.groomingStatus == true
                                  ? "Trun Off"
                                  : "Trun On"
                              )
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);