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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2ae003c5a948\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E0ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyYWUwMDNjNWE5NDhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Nav = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [userBalance, setuserBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const connectWallet = async ()=>{\n        if (\"solana\" in window) {\n            const provider = window.solana;\n            if (provider.isPhantom) {\n                await provider.connect();\n                setUser(provider.publicKey.toString());\n            // const response = await axios.get(`https://your-api.com/user/${user}`);\n            // console.log(response.data);\n            }\n        } else {\n            console.log(\"Please install Phantom wallet\");\n        }\n    };\n    connectWallet();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex-between w-full mb-16 pt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"flex gap-2 items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \" head_text text-center\",\n                    style: {\n                        fontSize: 40\n                    },\n                    children: \"Help Map\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex justify-center space-x-4 my-4 mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setTab(\"help\");\n                        },\n                        className: \"px-4 py-2 text-white bg-red-500 rounded hover:bg-black-600\",\n                        children: \"Help Map\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setTab(\"wish\");\n                        },\n                        className: \"px-4 py-2 text-white bg-red-500 rounded hover:bg-black-600\",\n                        children: \"Wish List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontSize: 20\n                        },\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: 20,\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"Account: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 41\n                            }, undefined),\n                            \" \",\n                            user.substring(0, 10) + \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            fontSize: 20\n                        },\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: 20,\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"Amount: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 41\n                            }, undefined),\n                            \" \",\n                            userBalance + \" USDT\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ganba\\\\Masa\\xfcst\\xfc\\\\Masa\\xfcst\\xfc\\\\Yeni klas\\xf6r\\\\frontend\\\\components\\\\Nav.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"xk1kV44AkFbWN2LwqEE2ysC25rs=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2QjtBQUNHO0FBQ047QUFLMUIsTUFBTUcsTUFBTTs7SUFFVixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1PLGdCQUFnQjtRQUNwQixJQUFJLFlBQVlDLFFBQVE7WUFDdEIsTUFBTUMsV0FBV0QsT0FBT0UsTUFBTTtZQUM5QixJQUFJRCxTQUFTRSxTQUFTLEVBQUU7Z0JBQ3RCLE1BQU1GLFNBQVNHLE9BQU87Z0JBQ3RCUixRQUFTSyxTQUFTSSxTQUFTLENBQUNDLFFBQVE7WUFFcEMseUVBQXlFO1lBQ3pFLDhCQUE4QjtZQUNoQztRQUNGLE9BQU87WUFDTEMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUVBVDtJQUdBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ25CLGtEQUFJQTtnQkFBQ29CLE1BQUs7Z0JBQUlELFdBQVU7MEJBQ3ZCLDRFQUFDRTtvQkFBS0YsV0FBVTtvQkFBeUJHLE9BQU87d0JBQUVDLFVBQVU7b0JBQUc7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVwRSw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFBT0MsU0FBUzs0QkFBUUMsT0FBTzt3QkFBTzt3QkFBR1AsV0FBVTtrQ0FBNkQ7Ozs7OztrQ0FDakgsOERBQUNLO3dCQUFPQyxTQUFTOzRCQUFRQyxPQUFPO3dCQUFPO3dCQUFHUCxXQUFVO2tDQUE2RDs7Ozs7Ozs7Ozs7OzBCQUVuSCw4REFBQ1E7O2tDQUNDLDhEQUFDTjt3QkFBS0MsT0FBTzs0QkFBRUMsVUFBVTt3QkFBRzs7NEJBQUc7MENBQUMsOERBQUNGO2dDQUFLQyxPQUFPO29DQUFFQyxVQUFVO29DQUFJSyxZQUFXO2dDQUFPOzBDQUFHOzs7Ozs7NEJBQWdCOzRCQUFFeEIsS0FBS3lCLFNBQVMsQ0FBQyxHQUFFLE1BQUk7Ozs7Ozs7a0NBQ3pILDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNUO3dCQUFLQyxPQUFPOzRCQUFFQyxVQUFVO3dCQUFHOzs0QkFBRzswQ0FBQyw4REFBQ0Y7Z0NBQUtDLE9BQU87b0NBQUVDLFVBQVU7b0NBQUlLLFlBQVk7Z0NBQU87MENBQUc7Ozs7Ozs0QkFBZTs0QkFBRXRCLGNBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEg7R0F2Q01IO0tBQUFBO0FBeUNOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzeD85ODk5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VyQmFsYW5jZSwgc2V0dXNlckJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoXCJzb2xhbmFcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSB3aW5kb3cuc29sYW5hO1xyXG4gICAgICBpZiAocHJvdmlkZXIuaXNQaGFudG9tKSB7XHJcbiAgICAgICAgYXdhaXQgcHJvdmlkZXIuY29ubmVjdCgpO1xyXG4gICAgICAgIHNldFVzZXIoIHByb3ZpZGVyLnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8veW91ci1hcGkuY29tL3VzZXIvJHt1c2VyfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIFBoYW50b20gd2FsbGV0XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbm5lY3RXYWxsZXQoKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT0nZmxleC1iZXR3ZWVuIHctZnVsbCBtYi0xNiBwdC0zJz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9J2ZsZXggZ2FwLTIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyBoZWFkX3RleHQgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGZvbnRTaXplOiA0MCB9fT5IZWxwIE1hcDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC00IG15LTQgbXQtMTBcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2V0VGFiKCdoZWxwJyl9fSBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC13aGl0ZSBiZy1yZWQtNTAwIHJvdW5kZWQgaG92ZXI6YmctYmxhY2stNjAwXCI+SGVscCBNYXA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2V0VGFiKCd3aXNoJyl9fSBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC13aGl0ZSBiZy1yZWQtNTAwIHJvdW5kZWQgaG92ZXI6YmctYmxhY2stNjAwXCI+V2lzaCBMaXN0PC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+IDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDonYm9sZCcgfX0+QWNjb3VudDogPC9zcGFuPiB7dXNlci5zdWJzdHJpbmcoMCwxMCkrXCIuLi5cIn08L3NwYW4+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19PiA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5BbW91bnQ6IDwvc3Bhbj4ge3VzZXJCYWxhbmNlK1wiIFVTRFRcIn08L3NwYW4+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiYXhpb3MiLCJOYXYiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJCYWxhbmNlIiwic2V0dXNlckJhbGFuY2UiLCJjb25uZWN0V2FsbGV0Iiwid2luZG93IiwicHJvdmlkZXIiLCJzb2xhbmEiLCJpc1BoYW50b20iLCJjb25uZWN0IiwicHVibGljS2V5IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNwYW4iLCJzdHlsZSIsImZvbnRTaXplIiwiYnV0dG9uIiwib25DbGljayIsInNldFRhYiIsInNlY3Rpb24iLCJmb250V2VpZ2h0Iiwic3Vic3RyaW5nIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.jsx\n"));

/***/ })

});