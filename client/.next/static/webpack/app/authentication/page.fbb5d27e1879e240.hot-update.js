"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authentication/page",{

/***/ "(app-client)/./src/api/authentication.tsx":
/*!************************************!*\
  !*** ./src/api/authentication.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAccessToken: function() { return /* binding */ getAccessToken; },\n/* harmony export */   getAuthorization: function() { return /* binding */ getAuthorization; }\n/* harmony export */ });\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ \"(app-client)/./src/api/http.tsx\");\n\nconst getAuthorization = async ()=>{\n    try {\n        const { data } = await _http__WEBPACK_IMPORTED_MODULE_0__.http.get(\"/musicProviderAuth\");\n        return data;\n    } catch (error) {\n        return error;\n    }\n};\nconst getAccessToken = async (code)=>{\n    try {\n        const { data } = await _http__WEBPACK_IMPORTED_MODULE_0__.http.post(\"/musicProviderAuth\", code);\n        return data;\n    } catch (error) {\n        return error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwaS9hdXRoZW50aWNhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBTXRCLE1BQU1DLG1CQUFtQjtJQUM5QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRix1Q0FBSUEsQ0FBQ0csSUFBSTtRQUVoQyxPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBWTtRQUNuQixPQUFPQTtJQUNUO0FBQ0YsRUFBQztBQUVNLE1BQU1DLGlCQUFpQixPQUFPQztJQUNuQyxJQUFJO1FBQ0YsTUFBTSxFQUFFSixJQUFJLEVBQUUsR0FBRyxNQUFNRix1Q0FBSUEsQ0FBQ08sS0FBSyxzQkFBc0JEO1FBRXZELE9BQU9KO0lBQ1QsRUFBRSxPQUFPRSxPQUFZO1FBQ25CLE9BQU9BO0lBQ1Q7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvYXV0aGVudGljYXRpb24udHN4PzMyYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHR0cCB9IGZyb20gXCIuL2h0dHBcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElHZXRBdXRoIHtcbiAgcmVkaXJlY3Rpb25VUkw6IExvY2F0aW9uXG59XG5cbmV4cG9ydCBjb25zdCBnZXRBdXRob3JpemF0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8SUdldEF1dGg+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAuZ2V0KCcvbXVzaWNQcm92aWRlckF1dGgnKVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIHJldHVybiBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9IGFzeW5jIChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cC5wb3N0KCcvbXVzaWNQcm92aWRlckF1dGgnLCBjb2RlKVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIHJldHVybiBlcnJvclxuICB9XG59XG4iXSwibmFtZXMiOlsiaHR0cCIsImdldEF1dGhvcml6YXRpb24iLCJkYXRhIiwiZ2V0IiwiZXJyb3IiLCJnZXRBY2Nlc3NUb2tlbiIsImNvZGUiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/api/authentication.tsx\n"));

/***/ })

});