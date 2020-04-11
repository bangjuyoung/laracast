(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadersAndAnimations.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadersAndAnimations.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LoadersAndAnimations",
  mounted: function mounted() {
    lottie_web__WEBPACK_IMPORTED_MODULE_0___default.a.loadAnimation({
      container: this.$refs.lottie,
      render: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/spinner.json'
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "h1",
      { staticClass: "font-normal text-3xl text-gray-700 leading-none mb-8" },
      [_vm._v("\n        Loaders and Animations\n    ")]
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "border shadow rounded-lg flex items-center justify-center mb-8"
      },
      [
        _c("div", {
          ref: "lottie",
          staticClass: "w-64",
          staticStyle: { height: "457px" }
        })
      ]
    ),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-10 text-gray-700 font-thin" }, [
      _vm._v("\n        This spinner uses AirBnb's\n        "),
      _c(
        "a",
        {
          staticClass: "font-bold text-blue-700",
          attrs: { href: "http://airbnb.io/lottie/#/web" }
        },
        [_vm._v("Lottie")]
      ),
      _vm._v(
        "\n        library to render its animation. You may download the necessary assets below.\n    "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        {
          staticClass:
            "font-bold border border-gray-300 px-8 py-2 rounded-full text-black text-xs hover:bg-blue-100",
          attrs: { href: "/animations/spinner.zip" }
        },
        [_vm._v("\n            spinner.zip\n        ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/LoadersAndAnimations.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/LoadersAndAnimations.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadersAndAnimations_vue_vue_type_template_id_10167db1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true& */ "./resources/js/components/LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true&");
/* harmony import */ var _LoadersAndAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadersAndAnimations.vue?vue&type=script&lang=js& */ "./resources/js/components/LoadersAndAnimations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadersAndAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadersAndAnimations_vue_vue_type_template_id_10167db1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadersAndAnimations_vue_vue_type_template_id_10167db1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10167db1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoadersAndAnimations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoadersAndAnimations.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/LoadersAndAnimations.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadersAndAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadersAndAnimations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadersAndAnimations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadersAndAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadersAndAnimations_vue_vue_type_template_id_10167db1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadersAndAnimations.vue?vue&type=template&id=10167db1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadersAndAnimations_vue_vue_type_template_id_10167db1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadersAndAnimations_vue_vue_type_template_id_10167db1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);