(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Notification_Notification_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Notification/Notification.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Notification/Notification.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "from-now": function fromNow() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_partials_FromNowTimer_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../partials/FromNowTimer.vue */ "./resources/js/components/partials/FromNowTimer.vue"));
    }
  },
  data: function data() {
    return {
      is_loading: true,
      notifications: [],
      paginateData: {}
    };
  },
  methods: {
    getAllNotifications: function getAllNotifications() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/admin/api/get-all-notifications-list?page=" + page).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.paginateData = data;
        _this.notifications = data.data;
        _this.is_loading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteNotification: function deleteNotification(id, index) {
      var _this2 = this;

      axios.post('/admin/api/delete-notification', {
        id: id
      }).then(function (resp) {
        if (resp.data.status == "ok") {
          _this2.notifications.splice(index, 1);

          _this2.$root.$refs.headerNotification.deleteIfExists(id);
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    clearAll: function clearAll() {
      var _this3 = this;

      axios.post("/admin/api/clear-all-notification").then(function (resp) {
        if (resp.data.status == "ok") {
          _this3.notifications = [];
          swal.fire('Notification cleard', resp.data.msg, "success");

          _this3.$root.$refs.headerNotification.resetAll();
        }
      });
    },
    openNotification: function openNotification(id, index, status, type, bookingId) {
      var _this4 = this;

      if (status == "unseen") {
        this.notifications[index].status = "seen";
        axios.post("/admin/api/seen-notification", {
          id: id
        }).then(function (resp) {
          if (resp.data.status == "ok") {
            _this4.$root.$refs.headerNotification.makeSeen(id, status == "seen" ? false : true);
          }
        })["catch"](function (err) {
          console.error(err.response.data);
        });
      }

      if (type == "boarding") {
        this.$router.push({
          name: "boarding.edit",
          params: {
            id: bookingId
          }
        });
      } else {
        this.$router.push({
          name: "grooming.edit",
          params: {
            id: bookingId
          }
        });
      }
    }
  },
  created: function created() {
    this.getAllNotifications();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/Notification/Notification.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/pages/Notification/Notification.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notification_vue_vue_type_template_id_548fe989___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=548fe989& */ "./resources/js/components/pages/Notification/Notification.vue?vue&type=template&id=548fe989&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Notification/Notification.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Notification_vue_vue_type_template_id_548fe989___WEBPACK_IMPORTED_MODULE_0__.render,
  _Notification_vue_vue_type_template_id_548fe989___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Notification/Notification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Notification/Notification.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/Notification/Notification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Notification/Notification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/Notification/Notification.vue?vue&type=template&id=548fe989&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/Notification/Notification.vue?vue&type=template&id=548fe989& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_548fe989___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_548fe989___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_548fe989___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notification.vue?vue&type=template&id=548fe989& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Notification/Notification.vue?vue&type=template&id=548fe989&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Notification/Notification.vue?vue&type=template&id=548fe989&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Notification/Notification.vue?vue&type=template&id=548fe989& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header d-flex justify-content-between" },
          [
            _c("h4", { staticClass: "text-muted" }, [_vm._v("Notifications")]),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                { staticClass: "btn", on: { click: _vm.clearAll } },
                [_c("i", { staticClass: "fas fa-trash" }), _vm._v(" Clear All")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm.is_loading
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(10, function(n) {
                  return _c(
                    "div",
                    { key: n, staticClass: "col-md-12" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "60px" }
                      })
                    ],
                    1
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.is_loading
            ? _c(
                "div",
                { staticClass: "row" },
                [
                  _vm.notifications.length == 0
                    ? _c("div", { staticClass: "col-md-12 text-center" }, [
                        _c("h6", { staticClass: "text-muted" }, [
                          _vm._v("No new notifications")
                        ])
                      ])
                    : _vm._l(_vm.notifications, function(notify, i) {
                        return [
                          notify.type == "boarding"
                            ? _c(
                                "div",
                                {
                                  key: i,
                                  staticClass: "col-md-12 notification",
                                  class: { unread: notify.status == "unseen" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between w-75 pull-left",
                                      on: {
                                        click: function($event) {
                                          return _vm.openNotification(
                                            notify.id,
                                            i,
                                            notify.status,
                                            notify.type,
                                            notify.booking_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._m(0, true),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "id" }, [
                                        _c("p", [
                                          _vm._v(
                                            "Boarding ID #" +
                                              _vm._s(notify.booking_id)
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "content" }, [
                                        _c("h6", [
                                          _c("strong", [
                                            _vm._v(
                                              "Boarding | " +
                                                _vm._s(notify.boarding_string)
                                            )
                                          ])
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "time" },
                                        [
                                          _c("from-now", {
                                            attrs: { date: notify.created_at }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "action w-auto pull-right" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-info btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteNotification(
                                                notify.id,
                                                i
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          notify.type == "grooming"
                            ? _c(
                                "div",
                                {
                                  key: i,
                                  staticClass: "col-md-12 notification",
                                  class: { unread: notify.status == "unseen" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between w-75 pull-left",
                                      on: {
                                        click: function($event) {
                                          return _vm.openNotification(
                                            notify.id,
                                            i,
                                            notify.status,
                                            notify.type,
                                            notify.booking_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._m(1, true),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "id" }, [
                                        _c("p", [
                                          _vm._v(
                                            "Grooming ID #" +
                                              _vm._s(notify.booking_id)
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "content" }, [
                                        _c("h6", [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(notify.grooming_string)
                                            )
                                          ])
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "time" },
                                        [
                                          _c("from-now", {
                                            attrs: { date: notify.created_at }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "action w-auto pull-right" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-outline-info btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteNotification(
                                                notify.id,
                                                i
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      })
                ],
                2
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer" }, [
          _c(
            "div",
            { staticClass: "row justify-content-center" },
            [
              _c("pagination", {
                attrs: { data: _vm.paginateData },
                on: { "pagination-change-page": _vm.getAllNotifications }
              })
            ],
            1
          )
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
    return _c(
      "span",
      { staticClass: "dropdown-item-icon bg-white text-white" },
      [
        _c("img", {
          attrs: { src: "/images/boarding.png", width: "25px", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticClass: "dropdown-item-icon bg-white text-white" },
      [
        _c("img", {
          attrs: { src: "/images/grooming.png", width: "25px", alt: "" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);