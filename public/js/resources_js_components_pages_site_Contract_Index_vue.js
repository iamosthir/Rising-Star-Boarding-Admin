(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_site_Contract_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      desc: '',
      form: new Form({
        desc: ''
      }),
      editMode: false
    };
  },
  methods: {
    getContactData: function getContactData() {
      var _this = this;

      axios.get('/admin/api/get-about-us').then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.desc = data.content_contract;
        _this.form.desc = data.content_contract;
      })["catch"](function (err) {
        console.error(err.repsonse.data);
      });
    },
    updateContract: function updateContract() {
      var _this2 = this;

      this.form.post("/admin/api/update-contract").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Data updated", data.msg, "success");
          _this2.desc = _this2.form.desc;
          _this2.editMode = false;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  created: function created() {
    this.getContactData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n[data-v-690239d7]:root{\n    --text-color: rgb(97, 97, 97);\n}\nbody[data-v-690239d7]{\n    background: white;\n}\n.title[data-v-690239d7]{\n    text-align: center;\n    width: 100%;\n    border-bottom: 1px solid rgba(104, 104, 104,0.5);\n}\n.title img[data-v-690239d7]{\n    width: 250px;\n    height: auto; /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n}\n.title p[data-v-690239d7]{\n    margin-top: 10px;\n    font-weight: 600;\n    color: var(--text-color)\n}\n.section-title[data-v-690239d7]{\n    text-align: center;\n    font-weight: 800;\n    font-size: 20px;\n    margin-top: 5px;\n}\n.left[data-v-690239d7] {\n    float: left;\n    font-weight: 600;\n    font-size: 14px;\n    color: rgb(58, 58, 58);\n    margin-right: 10px;\n}\n.right[data-v-690239d7] {\n    overflow: hidden;\n    border-bottom: 1px solid rgb(126, 126, 126);\n    border-bottom-style: dashed;\n    font-size: 14px;\n    color: rgb(58, 58, 58);\n    font-weight: 600;\n}\n.dog-card[data-v-690239d7]{\n    padding: 15px 0;\n    position: relative;\n}\n.dog-card[data-v-690239d7]:nth-child(even){\n    background-color: #ececec;\n}\n.dog-card[data-v-690239d7]:nth-child(odd){\n    background-color: white;\n}\n.desc[data-v-690239d7]{\n    color: black;\n    font-size: 12px;\n    text-align: center;\n    margin-top: 15px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/pages/site/Contract/Index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/site/Contract/Index.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_690239d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=690239d7&scoped=true& */ "./resources/js/components/pages/site/Contract/Index.vue?vue&type=template&id=690239d7&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/site/Contract/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_690239d7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css& */ "./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_690239d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_690239d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "690239d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/site/Contract/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/site/Contract/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Contract/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/site/Contract/Index.vue?vue&type=template&id=690239d7&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Contract/Index.vue?vue&type=template&id=690239d7&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_690239d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_690239d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_690239d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=690239d7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=template&id=690239d7&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_690239d7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_690239d7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_690239d7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_690239d7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_690239d7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=template&id=690239d7&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=template&id=690239d7&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-12 mt-2" },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("h4", { staticClass: "section-title" }, [
                    _vm._v("Customer Information")
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("h4", { staticClass: "section-title mt-3" }, [
                    _vm._v("DOG(s)")
                  ]),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  !_vm.editMode
                    ? [
                        _c("div", { staticClass: "text-right" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-warning",
                              on: {
                                click: function($event) {
                                  _vm.editMode = true
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-edit" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "desc" }, [
                          _vm._v(_vm._s(_vm.desc))
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editMode
                    ? [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.desc,
                                expression: "form.desc"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { height: "500px !important" },
                            attrs: {
                              rows: "10",
                              placeholder: "Write your content..."
                            },
                            domProps: { value: _vm.form.desc },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "desc", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "mt-4 btn btn-sm btn-success",
                              on: { click: _vm.updateContract }
                            },
                            [_vm._v("Save")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "mt-4 btn btn-sm btn-danger",
                              on: {
                                click: function($event) {
                                  _vm.editMode = false
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-times" }),
                              _vm._v(" Cancel")
                            ]
                          )
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _vm._m(9)
                ],
                2
              )
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
      _c("h4", [_vm._v("Contract Form Preview")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 mt-2" }, [
      _c("div", { staticClass: "title" }, [
        _c("img", { attrs: { src: "/images/logo.png", alt: "" } }),
        _vm._v(" "),
        _c("p", [_vm._v("Contact Information & Waiver")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("p", { staticClass: "text-muted" }, [
          _c("strong", [
            _vm._v("Contract/Booking ID : "),
            _c(
              "span",
              {
                staticStyle: {
                  "border-bottom": "1px solid rgb(126,126,126)",
                  "border-bottom-style": "dashed"
                }
              },
              [_vm._v("115")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 text-right" }, [
        _c("p", { staticClass: "text-muted" }, [
          _c("strong", [
            _vm._v("Booking Date : "),
            _c(
              "span",
              {
                staticStyle: {
                  "border-bottom": "1px solid rgb(126,126,126)",
                  "border-bottom-style": "dashed"
                }
              },
              [_vm._v("2021-05-17 - 12:12 pm")]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Name :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("John Doe")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Address :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _vm._v("PARK LANE STREET, 13/A ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Phone :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("015XXXXXXXX")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Secondary Phone :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("015XXXXXXXX")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [
            _vm._v("Emergency Contact Person :")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Phone :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Veterinarian Name :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Phone :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row dog-card" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Name :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Delta")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Breed :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Color :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Sex :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Male")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Current :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Yes")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Rabies :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("2022-5-14")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 mt-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Medications :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _vm._v(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus?"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2 mt-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Kennel ID :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("M")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row dog-card" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Name :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Delta")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Breed :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Color :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Sex :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Male")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Current :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Yes")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Rabies :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("2022-5-14")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 mt-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Medications :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _vm._v(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus?"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2 mt-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Kennel ID :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("M")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row dog-card" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Name :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Delta")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Breed :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Color :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("N/A")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Sex :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Male")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Current :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("Yes")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Rabies :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("2022-5-14")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 mt-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Medications :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _vm._v(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, delectus?"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2 mt-2" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Kennel ID :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("M")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Days Boarding :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("7 days")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Price Qutoed :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("100 USD")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Price Paid :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v("50 USD")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Deposit Paid :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v(".")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mt-3" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Balance :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v(".")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row", staticStyle: { "margin-top": "150px" } },
      [
        _c("div", { staticClass: "col-6" }, [
          _c("div", [
            _c("div", { staticClass: "left" }, [
              _vm._v("Customer/Owner Signature :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "right" }, [_vm._v(".")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("div", [
            _c("div", { staticClass: "left" }, [_vm._v("Date :")]),
            _vm._v(" "),
            _c("div", { staticClass: "right" }, [_vm._v(".")])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Kennel Perssonel :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v(".")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", [
          _c("div", { staticClass: "left" }, [_vm._v("Date :")]),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [_vm._v(".")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/site/Contract/Index.vue?vue&type=style&index=0&id=690239d7&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5e81a426", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);