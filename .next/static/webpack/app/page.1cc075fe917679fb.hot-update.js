"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst tools = [\n    {\n        id: \"1\",\n        pic: \"/1.svg\",\n        name: \"LOR Learn\",\n        exp: \"One stop shop for all things learning.\",\n        desc: \"Find all things to do with learning on LOR Learn, including 20,000 digital courses from LinkedIn Learning and our internal specialists, Guilds, Mentors and more.\",\n        link: \"ok\",\n        guideLink: \"ok\"\n    },\n    {\n        id: \"2\",\n        pic: \"/2.svg\",\n        name: \"Coins\",\n        exp: \"Asite\",\n        desc: \"Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.\",\n        link: \"\",\n        guideLink: \"\"\n    },\n    {\n        id: \"2\",\n        pic: \"/2.svg\",\n        name: \"Coins\",\n        exp: \"Asite\",\n        desc: \"Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.\",\n        link: \"\",\n        guideLink: \"\"\n    },\n    {\n        id: \"2\",\n        pic: \"/2.svg\",\n        name: \"Coins\",\n        exp: \"Asite\",\n        desc: \"Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.\",\n        link: \"\",\n        guideLink: \"\"\n    }\n];\nfunction Home() {\n    _s();\n    const [searchItem, setSearchItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredTools, setFilteredTools] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tools);\n    // const imageRef = useRef<HTMLImageElement | null>(null);\n    // const [showList, setShowList] = useState(false);\n    const handleInputChange = (e)=>{\n        const searchTerm = e.target.value;\n        setSearchItem(searchTerm);\n        const filteredItems = tools.filter((tool)=>tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.exp.toLowerCase().includes(searchTerm.toLowerCase()) || tool.desc.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredTools(filteredItems);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"white-bg flex min-h-screen flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row mb-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-6/12 md:w-5/12 h-12 p-4 rounded-l sb-grey\",\n                            type: \"text\",\n                            value: searchItem,\n                            onChange: handleInputChange,\n                            placeholder: \"Search for tool or action e.g. timesheets\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-1/12 md:w-24 h-12 p-2 rounded-r lor-yellow strong inline-block align-middle\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"w-11/12 md:w-[918px]\",\n                    children: filteredTools.map((tool)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"box-content p-4 rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"min-w-36 h-36 mr-10 flex flex-col rounded strong sb-grey justify-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"min-w-20 h-20\",\n                                                src: tool.pic,\n                                                alt: \"lorlearn\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-[15px] mt-2 flex justify-center uppercase\",\n                                                children: tool.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-[20px] font-bold\",\n                                                children: tool.exp\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-[15px] leading-6 mt-2\",\n                                                children: tool.desc\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (tool.link != \"\" ? \"block \" : \"hidden \") + \"text-[15px] font-bold w-1/12 mt-3 md:w-24 h-9 p-2 rounded lor-yellow inline-block align-middle\",\n                                                children: \"Go there\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (tool.guideLink != \"\" ? \"block \" : \"hidden \") + \"text-[15px] font-bold w-3/12 mt-3 md:w-48 h-9 p-2 rounded lor-yellow inline-block align-middle\",\n                                                children: \"Watch a guide\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        }, tool.id, false, {\n                            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"GrrweYKzPogjH1ydxhy77fvGtqs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXlDO0FBRXpDLE1BQU1DLFFBQVE7SUFDWjtRQUNFQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDWSxlQUFlQyxpQkFBaUIsR0FBR2IsK0NBQVFBLENBQUNDO0lBQ25ELDBEQUEwRDtJQUMxRCxtREFBbUQ7SUFFbkQsTUFBTWEsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLGFBQWFELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUNqQ1AsY0FBY0s7UUFDZCxNQUFNRyxnQkFBZ0JsQixNQUFNbUIsTUFBTSxDQUNoQyxDQUFDQyxPQUNDQSxLQUFLakIsSUFBSSxDQUFDa0IsV0FBVyxHQUFHQyxRQUFRLENBQUNQLFdBQVdNLFdBQVcsT0FDdkRELEtBQUtoQixHQUFHLENBQUNpQixXQUFXLEdBQUdDLFFBQVEsQ0FBQ1AsV0FBV00sV0FBVyxPQUN0REQsS0FBS2YsSUFBSSxDQUFDZ0IsV0FBVyxHQUFHQyxRQUFRLENBQUNQLFdBQVdNLFdBQVc7UUFFM0RULGlCQUFpQk07SUFDbkI7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0s7WUFBS0MsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NGLFdBQVU7NEJBQ1ZHLE1BQUs7NEJBQ0xWLE9BQU9SOzRCQUNQbUIsVUFBVWY7NEJBQ1ZnQixhQUFZOzs7Ozs7c0NBRWQsOERBQUNDOzRCQUFPTixXQUFVO3NDQUFnRjs7Ozs7Ozs7Ozs7OzhCQUlwRyw4REFBQ087b0JBQUdQLFdBQVU7OEJBQ1hiLGNBQWNxQixHQUFHLENBQUMsQ0FBQ1oscUJBQ2xCLDhEQUFDYTs0QkFBaUJULFdBQVU7c0NBQzFCLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFJRCxXQUFVOzswREFDYiw4REFBQ1U7Z0RBQUlWLFdBQVU7Z0RBQWdCVyxLQUFLZixLQUFLbEIsR0FBRztnREFBRWtDLEtBQUk7Ozs7OzswREFDbEQsOERBQUNYO2dEQUFJRCxXQUFVOzBEQUFrREosS0FBS2pCLElBQUk7Ozs7Ozs7Ozs7OztrREFFNUUsOERBQUNzQjs7MERBQ0MsOERBQUNBO2dEQUFJRCxXQUFVOzBEQUF5QkosS0FBS2hCLEdBQUc7Ozs7OzswREFDaEQsOERBQUNxQjtnREFBSUQsV0FBVTswREFBOEJKLEtBQUtmLElBQUk7Ozs7OzswREFDdEQsOERBQUN5QjtnREFDQ04sV0FDRSxDQUFDSixLQUFLZCxJQUFJLElBQUksS0FBSyxXQUFXLFNBQVEsSUFDdEM7MERBRUg7Ozs7OzswREFHRCw4REFBQ3dCO2dEQUNDTixXQUNFLENBQUNKLEtBQUtiLFNBQVMsSUFBSSxLQUFLLFdBQVcsU0FBUSxJQUMzQzswREFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXRCRWEsS0FBS25CLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUM1QjtHQW5Fd0JPO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB0b29scyA9IFtcbiAge1xuICAgIGlkOiBcIjFcIixcbiAgICBwaWM6IFwiLzEuc3ZnXCIsXG4gICAgbmFtZTogXCJMT1IgTGVhcm5cIixcbiAgICBleHA6IFwiT25lIHN0b3Agc2hvcCBmb3IgYWxsIHRoaW5ncyBsZWFybmluZy5cIixcbiAgICBkZXNjOiBcIkZpbmQgYWxsIHRoaW5ncyB0byBkbyB3aXRoIGxlYXJuaW5nIG9uIExPUiBMZWFybiwgaW5jbHVkaW5nIDIwLDAwMCBkaWdpdGFsIGNvdXJzZXMgZnJvbSBMaW5rZWRJbiBMZWFybmluZyBhbmQgb3VyIGludGVybmFsIHNwZWNpYWxpc3RzLCBHdWlsZHMsIE1lbnRvcnMgYW5kIG1vcmUuXCIsXG4gICAgbGluazogXCJva1wiLFxuICAgIGd1aWRlTGluazogXCJva1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIHBpYzogXCIvMi5zdmdcIixcbiAgICBuYW1lOiBcIkNvaW5zXCIsXG4gICAgZXhwOiBcIkFzaXRlXCIsXG4gICAgZGVzYzogXCJMYWluZyBPJmFwb3M7Um91cmtlJmFwb3M7cyAoTE9SKSBjaG9zZW4gQnVzaW5lc3MtdG8tQnVzaW5lc3MgKEIyQikgdGVjaG5vbG9neSBwYXJ0bmVyLCBwcm92aWRpbmcgTE9SIHdpdGggdGhlIHNvZnR3YXJlIHRvIG1hbmFnZSBwcm9jZXNzZXMgdGhyb3VnaG91dCBvdXIgYnVzaW5lc3M6IGNvbGxhYm9yYXRpb24sIHRlbmRlcmluZyBhbmQgY29udHJhY3QgbWFuYWdlbWVudC4gVGhlIHRvb2wgcHJvbW90ZXMgbW9yZSBlZmZpY2llbnQgaW50ZXJhY3Rpb24gYW5kIGJldHRlciBjb21tdW5pY2F0aW9uIGJldHdlZW4gY29tcGFuaWVzLCBlbmFibGluZyBhY2Nlc3MgdG8gY3VycmVudCwgYWNjdXJhdGUgYW5kIGNvbnNpc3RlbnQgZGF0YSBhbmQgcHJvdmlkaW5nIGRlY2lzaW9uLW1ha2VycyB3aXRoIGJldHRlciB2aXNpYmlsaXR5IGFuZCBjb250cm9sLlwiLFxuICAgIGxpbms6IFwiXCIsXG4gICAgZ3VpZGVMaW5rOiBcIlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIHBpYzogXCIvMi5zdmdcIixcbiAgICBuYW1lOiBcIkNvaW5zXCIsXG4gICAgZXhwOiBcIkFzaXRlXCIsXG4gICAgZGVzYzogXCJMYWluZyBPJmFwb3M7Um91cmtlJmFwb3M7cyAoTE9SKSBjaG9zZW4gQnVzaW5lc3MtdG8tQnVzaW5lc3MgKEIyQikgdGVjaG5vbG9neSBwYXJ0bmVyLCBwcm92aWRpbmcgTE9SIHdpdGggdGhlIHNvZnR3YXJlIHRvIG1hbmFnZSBwcm9jZXNzZXMgdGhyb3VnaG91dCBvdXIgYnVzaW5lc3M6IGNvbGxhYm9yYXRpb24sIHRlbmRlcmluZyBhbmQgY29udHJhY3QgbWFuYWdlbWVudC4gVGhlIHRvb2wgcHJvbW90ZXMgbW9yZSBlZmZpY2llbnQgaW50ZXJhY3Rpb24gYW5kIGJldHRlciBjb21tdW5pY2F0aW9uIGJldHdlZW4gY29tcGFuaWVzLCBlbmFibGluZyBhY2Nlc3MgdG8gY3VycmVudCwgYWNjdXJhdGUgYW5kIGNvbnNpc3RlbnQgZGF0YSBhbmQgcHJvdmlkaW5nIGRlY2lzaW9uLW1ha2VycyB3aXRoIGJldHRlciB2aXNpYmlsaXR5IGFuZCBjb250cm9sLlwiLFxuICAgIGxpbms6IFwiXCIsXG4gICAgZ3VpZGVMaW5rOiBcIlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIHBpYzogXCIvMi5zdmdcIixcbiAgICBuYW1lOiBcIkNvaW5zXCIsXG4gICAgZXhwOiBcIkFzaXRlXCIsXG4gICAgZGVzYzogXCJMYWluZyBPJmFwb3M7Um91cmtlJmFwb3M7cyAoTE9SKSBjaG9zZW4gQnVzaW5lc3MtdG8tQnVzaW5lc3MgKEIyQikgdGVjaG5vbG9neSBwYXJ0bmVyLCBwcm92aWRpbmcgTE9SIHdpdGggdGhlIHNvZnR3YXJlIHRvIG1hbmFnZSBwcm9jZXNzZXMgdGhyb3VnaG91dCBvdXIgYnVzaW5lc3M6IGNvbGxhYm9yYXRpb24sIHRlbmRlcmluZyBhbmQgY29udHJhY3QgbWFuYWdlbWVudC4gVGhlIHRvb2wgcHJvbW90ZXMgbW9yZSBlZmZpY2llbnQgaW50ZXJhY3Rpb24gYW5kIGJldHRlciBjb21tdW5pY2F0aW9uIGJldHdlZW4gY29tcGFuaWVzLCBlbmFibGluZyBhY2Nlc3MgdG8gY3VycmVudCwgYWNjdXJhdGUgYW5kIGNvbnNpc3RlbnQgZGF0YSBhbmQgcHJvdmlkaW5nIGRlY2lzaW9uLW1ha2VycyB3aXRoIGJldHRlciB2aXNpYmlsaXR5IGFuZCBjb250cm9sLlwiLFxuICAgIGxpbms6IFwiXCIsXG4gICAgZ3VpZGVMaW5rOiBcIlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NlYXJjaEl0ZW0sIHNldFNlYXJjaEl0ZW1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaWx0ZXJlZFRvb2xzLCBzZXRGaWx0ZXJlZFRvb2xzXSA9IHVzZVN0YXRlKHRvb2xzKTtcbiAgLy8gY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWY8SFRNTEltYWdlRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICAvLyBjb25zdCBbc2hvd0xpc3QsIHNldFNob3dMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRTZWFyY2hJdGVtKHNlYXJjaFRlcm0pO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0b29scy5maWx0ZXIoXG4gICAgICAodG9vbCkgPT5cbiAgICAgICAgdG9vbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICB0b29sLmV4cC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgdG9vbC5kZXNjLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgc2V0RmlsdGVyZWRUb29scyhmaWx0ZXJlZEl0ZW1zKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwid2hpdGUtYmcgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTEwXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYvMTIgbWQ6dy01LzEyIGgtMTIgcC00IHJvdW5kZWQtbCBzYi1ncmV5XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJdGVtfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHRvb2wgb3IgYWN0aW9uIGUuZy4gdGltZXNoZWV0c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMS8xMiBtZDp3LTI0IGgtMTIgcC0yIHJvdW5kZWQtciBsb3IteWVsbG93IHN0cm9uZyBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LTExLzEyIG1kOnctWzkxOHB4XVwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFRvb2xzLm1hcCgodG9vbCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17dG9vbC5pZH0gY2xhc3NOYW1lPVwiYm94LWNvbnRlbnQgcC00IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctMzYgaC0zNiBtci0xMCBmbGV4IGZsZXgtY29sIHJvdW5kZWQgc3Ryb25nIHNiLWdyZXkganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWluLXctMjAgaC0yMFwiIHNyYz17dG9vbC5waWN9IGFsdD1cImxvcmxlYXJuXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gbXQtMiBmbGV4IGp1c3RpZnktY2VudGVyIHVwcGVyY2FzZVwiPnt0b29sLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gZm9udC1ib2xkXCI+e3Rvb2wuZXhwfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBsZWFkaW5nLTYgbXQtMlwiPnt0b29sLmRlc2N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgKHRvb2wubGluayAhPSBcIlwiID8gXCJibG9jayBcIiA6IFwiaGlkZGVuIFwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LVsxNXB4XSBmb250LWJvbGQgdy0xLzEyIG10LTMgbWQ6dy0yNCBoLTkgcC0yIHJvdW5kZWQgbG9yLXllbGxvdyBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHbyB0aGVyZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgKHRvb2wuZ3VpZGVMaW5rICE9IFwiXCIgPyBcImJsb2NrIFwiIDogXCJoaWRkZW4gXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtWzE1cHhdIGZvbnQtYm9sZCB3LTMvMTIgbXQtMyBtZDp3LTQ4IGgtOSBwLTIgcm91bmRlZCBsb3IteWVsbG93IGlubGluZS1ibG9jayBhbGlnbi1taWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFdhdGNoIGEgZ3VpZGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ0b29scyIsImlkIiwicGljIiwibmFtZSIsImV4cCIsImRlc2MiLCJsaW5rIiwiZ3VpZGVMaW5rIiwiSG9tZSIsInNlYXJjaEl0ZW0iLCJzZXRTZWFyY2hJdGVtIiwiZmlsdGVyZWRUb29scyIsInNldEZpbHRlcmVkVG9vbHMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJzZWFyY2hUZXJtIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwidG9vbCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInVsIiwibWFwIiwibGkiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});