"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e8971d033e27\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E0ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlODk3MWQwMzNlMjdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Nav = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [userBalance, setuserBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const connectWallet = async ()=>{\n        if (\"solana\" in window) {\n            const provider = window.solana;\n            if (provider.isPhantom) {\n                await provider.connect();\n                const user = provider.publicKey.toString();\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://localhost:3000/\".concat(user));\n                console.log(response.data);\n            }\n        } else {\n            console.log(\"Please install Phantom wallet\");\n        }\n    };\n    connectWallet();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex-between w-full mb-16 pt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"flex gap-2 items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \" head_text text-center\",\n                    style: {\n                        fontSize: 40\n                    },\n                    children: \"Help Map\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontSize: 20\n                        },\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: 20,\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"Account: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 41\n                            }, undefined),\n                            \" \",\n                            user.substring(0, 10) + \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontSize: 20\n                        },\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: 20,\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"Amount: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 41\n                            }, undefined),\n                            \" \",\n                            userBalance + \" USDT\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"xk1kV44AkFbWN2LwqEE2ysC25rs=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDNkI7QUFDRztBQUNOO0FBSzFCLE1BQU1HLE1BQU07O0lBRVYsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTyxnQkFBZ0I7UUFDcEIsSUFBSSxZQUFZQyxRQUFRO1lBQ3RCLE1BQU1DLFdBQVdELE9BQU9FLE1BQU07WUFDOUIsSUFBSUQsU0FBU0UsU0FBUyxFQUFFO2dCQUN0QixNQUFNRixTQUFTRyxPQUFPO2dCQUN0QixNQUFNVCxPQUFPTSxTQUFTSSxTQUFTLENBQUNDLFFBQVE7Z0JBRXhDLE1BQU1DLFdBQVcsTUFBTWQsNkNBQUtBLENBQUNlLEdBQUcsQ0FBQywwQkFBK0IsT0FBTGI7Z0JBQzNEYyxRQUFRQyxHQUFHLENBQUNILFNBQVNJLElBQUk7WUFDM0I7UUFDRixPQUFPO1lBQ0xGLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQVg7SUFHQSxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN0QixrREFBSUE7Z0JBQUN1QixNQUFLO2dCQUFJRCxXQUFVOzBCQUN2Qiw0RUFBQ0U7b0JBQUtGLFdBQVU7b0JBQXlCRyxPQUFPO3dCQUFFQyxVQUFVO29CQUFHOzhCQUFHOzs7Ozs7Ozs7OzswQkFFcEUsOERBQUNDOztrQ0FDQyw4REFBQ0g7d0JBQUtDLE9BQU87NEJBQUVDLFVBQVU7d0JBQUc7OzRCQUFHOzBDQUFDLDhEQUFDRjtnQ0FBS0MsT0FBTztvQ0FBRUMsVUFBVTtvQ0FBSUUsWUFBVztnQ0FBTzswQ0FBRzs7Ozs7OzRCQUFnQjs0QkFBRXhCLEtBQUt5QixTQUFTLENBQUMsR0FBRSxNQUFJOzs7Ozs7O2tDQUN6SCw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDTjt3QkFBS0MsT0FBTzs0QkFBRUMsVUFBVTt3QkFBRzs7NEJBQUc7MENBQUMsOERBQUNGO2dDQUFLQyxPQUFPO29DQUFFQyxVQUFVO29DQUFJRSxZQUFZO2dDQUFPOzBDQUFHOzs7Ozs7NEJBQWU7NEJBQUV0QixjQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhIO0dBbkNNSDtLQUFBQTtBQXFDTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qc3g/OTg5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlckJhbGFuY2UsIHNldHVzZXJCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKFwic29sYW5hXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gd2luZG93LnNvbGFuYTtcclxuICAgICAgaWYgKHByb3ZpZGVyLmlzUGhhbnRvbSkge1xyXG4gICAgICAgIGF3YWl0IHByb3ZpZGVyLmNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gcHJvdmlkZXIucHVibGljS2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vbG9jYWxob3N0OjMwMDAvJHt1c2VyfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIFBoYW50b20gd2FsbGV0XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbm5lY3RXYWxsZXQoKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT0nZmxleC1iZXR3ZWVuIHctZnVsbCBtYi0xNiBwdC0zJz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9J2ZsZXggZ2FwLTIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyBoZWFkX3RleHQgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGZvbnRTaXplOiA0MCB9fT5IZWxwIE1hcDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+IDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDonYm9sZCcgfX0+QWNjb3VudDogPC9zcGFuPiB7dXNlci5zdWJzdHJpbmcoMCwxMCkrXCIuLi5cIn08L3NwYW4+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19PiA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5BbW91bnQ6IDwvc3Bhbj4ge3VzZXJCYWxhbmNlK1wiIFVTRFRcIn08L3NwYW4+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiYXhpb3MiLCJOYXYiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJCYWxhbmNlIiwic2V0dXNlckJhbGFuY2UiLCJjb25uZWN0V2FsbGV0Iiwid2luZG93IiwicHJvdmlkZXIiLCJzb2xhbmEiLCJpc1BoYW50b20iLCJjb25uZWN0IiwicHVibGljS2V5IiwidG9TdHJpbmciLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNwYW4iLCJzdHlsZSIsImZvbnRTaXplIiwic2VjdGlvbiIsImZvbnRXZWlnaHQiLCJzdWJzdHJpbmciLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.jsx\n"));

/***/ })

});