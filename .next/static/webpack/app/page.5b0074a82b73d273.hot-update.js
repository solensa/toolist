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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst tools = [\n    {\n        id: \"1\",\n        pic: \"/1.svg\",\n        name: \"LOR Learn\",\n        exp: \"One stop shop for all things learning.\",\n        desc: \"Find all things to do with learning on LOR Learn, including 20,000 digital courses from LinkedIn Learning and our internal specialists, Guilds, Mentors and more.\",\n        link: \"ok\",\n        guideLink: \"ok\"\n    },\n    {\n        id: \"2\",\n        pic: \"/2.svg\",\n        name: \"Coins\",\n        exp: \"Asite\",\n        desc: \"Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.\",\n        link: \"\",\n        guideLink: \"\"\n    },\n    {\n        id: \"2\",\n        pic: \"/2.svg\",\n        name: \"Coins\",\n        exp: \"Asite\",\n        desc: \"Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.\",\n        link: \"\",\n        guideLink: \"\"\n    },\n    {\n        id: \"2\",\n        pic: \"/2.svg\",\n        name: \"Coins\",\n        exp: \"Asite\",\n        desc: \"Laing O&apos;Rourke&apos;s (LOR) chosen Business-to-Business (B2B) technology partner, providing LOR with the software to manage processes throughout our business: collaboration, tendering and contract management. The tool promotes more efficient interaction and better communication between companies, enabling access to current, accurate and consistent data and providing decision-makers with better visibility and control.\",\n        link: \"\",\n        guideLink: \"\"\n    }\n];\nfunction Home() {\n    _s();\n    const [searchItem, setSearchItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredTools, setFilteredTools] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tools);\n    // const imageRef = useRef<HTMLImageElement | null>(null);\n    // const [showList, setShowList] = useState(false);\n    const handleInputChange = (e)=>{\n        const searchTerm = e.target.value;\n        setSearchItem(searchTerm);\n        const filteredItems = tools.filter((tool)=>tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.exp.toLowerCase().includes(searchTerm.toLowerCase()) || tool.desc.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredTools(filteredItems);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"white-bg flex min-h-screen flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-6/12 md:w-5/12 h-12 p-4 rounded-l sb-grey\",\n                            type: \"text\",\n                            value: searchItem,\n                            onChange: handleInputChange,\n                            placeholder: \"Search for tool or action e.g. timesheets\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-1/12 md:w-24 h-12 p-2 rounded-r lor-yellow strong inline-block align-middle\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"w-11/12 md:w-[918px]\",\n                    children: filteredTools.map((tool)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"box-content p-4 rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"min-w-36 h-36 mr-10 flex flex-col rounded strong sb-grey justify-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"min-w-20 h-20\",\n                                                src: tool.pic,\n                                                alt: \"lorlearn\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-[15px] mt-2 flex justify-center uppercase\",\n                                                children: tool.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-[20px] font-bold\",\n                                                children: tool.exp\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-[15px] leading-6 mt-2\",\n                                                children: tool.desc\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"www.google.com\",\n                                                target: \"_blank\",\n                                                className: (tool.link != \"\" ? \"block \" : \"hidden \") + \"text-[14px] font-bold w-1/12 mt-4 md:w-24 h-9 p-2 rounded lor-yellow inline-block align-middle\",\n                                                children: \"Go there\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"www.google.com\",\n                                                target: \"_blank\",\n                                                className: (tool.guideLink != \"\" ? \"block \" : \"hidden \") + \"text-[14px] font-bold w-3/12 mt-4 md:w-32 ml-3 h-9 p-2 rounded lor-yellow inline-block align-middle\",\n                                                children: \"Watch a guide\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        }, tool.id, false, {\n                            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertclaridge/Documents/GitHub/toolist/src/app/page.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"GrrweYKzPogjH1ydxhy77fvGtqs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXlDO0FBRXpDLE1BQU1DLFFBQVE7SUFDWjtRQUNFQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDWSxlQUFlQyxpQkFBaUIsR0FBR2IsK0NBQVFBLENBQUNDO0lBQ25ELDBEQUEwRDtJQUMxRCxtREFBbUQ7SUFFbkQsTUFBTWEsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLGFBQWFELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUNqQ1AsY0FBY0s7UUFDZCxNQUFNRyxnQkFBZ0JsQixNQUFNbUIsTUFBTSxDQUNoQyxDQUFDQyxPQUNDQSxLQUFLakIsSUFBSSxDQUFDa0IsV0FBVyxHQUFHQyxRQUFRLENBQUNQLFdBQVdNLFdBQVcsT0FDdkRELEtBQUtoQixHQUFHLENBQUNpQixXQUFXLEdBQUdDLFFBQVEsQ0FBQ1AsV0FBV00sV0FBVyxPQUN0REQsS0FBS2YsSUFBSSxDQUFDZ0IsV0FBVyxHQUFHQyxRQUFRLENBQUNQLFdBQVdNLFdBQVc7UUFFM0RULGlCQUFpQk07SUFDbkI7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0s7WUFBS0MsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NGLFdBQVU7NEJBQ1ZHLE1BQUs7NEJBQ0xWLE9BQU9SOzRCQUNQbUIsVUFBVWY7NEJBQ1ZnQixhQUFZOzs7Ozs7c0NBRWQsOERBQUNDOzRCQUFPTixXQUFVO3NDQUFnRjs7Ozs7Ozs7Ozs7OzhCQUlwRyw4REFBQ087b0JBQUdQLFdBQVU7OEJBQ1hiLGNBQWNxQixHQUFHLENBQUMsQ0FBQ1oscUJBQ2xCLDhEQUFDYTs0QkFBaUJULFdBQVU7c0NBQzFCLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFJRCxXQUFVOzswREFDYiw4REFBQ1U7Z0RBQUlWLFdBQVU7Z0RBQWdCVyxLQUFLZixLQUFLbEIsR0FBRztnREFBRWtDLEtBQUk7Ozs7OzswREFDbEQsOERBQUNYO2dEQUFJRCxXQUFVOzBEQUFrREosS0FBS2pCLElBQUk7Ozs7Ozs7Ozs7OztrREFFNUUsOERBQUNzQjs7MERBQ0MsOERBQUNBO2dEQUFJRCxXQUFVOzBEQUF5QkosS0FBS2hCLEdBQUc7Ozs7OzswREFDaEQsOERBQUNxQjtnREFBSUQsV0FBVTswREFBOEJKLEtBQUtmLElBQUk7Ozs7OzswREFDdEQsOERBQUNnQztnREFDQ0MsTUFBSztnREFDTHRCLFFBQU87Z0RBQ1BRLFdBQ0UsQ0FBQ0osS0FBS2QsSUFBSSxJQUFJLEtBQUssV0FBVyxTQUFRLElBQ3RDOzBEQUVIOzs7Ozs7MERBR0QsOERBQUMrQjtnREFDQ0MsTUFBSztnREFDTHRCLFFBQU87Z0RBQ1BRLFdBQ0UsQ0FBQ0osS0FBS2IsU0FBUyxJQUFJLEtBQUssV0FBVyxTQUFRLElBQzNDOzBEQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBMUJFYSxLQUFLbkIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQzVCO0dBdkV3Qk87S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRvb2xzID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHBpYzogXCIvMS5zdmdcIixcbiAgICBuYW1lOiBcIkxPUiBMZWFyblwiLFxuICAgIGV4cDogXCJPbmUgc3RvcCBzaG9wIGZvciBhbGwgdGhpbmdzIGxlYXJuaW5nLlwiLFxuICAgIGRlc2M6IFwiRmluZCBhbGwgdGhpbmdzIHRvIGRvIHdpdGggbGVhcm5pbmcgb24gTE9SIExlYXJuLCBpbmNsdWRpbmcgMjAsMDAwIGRpZ2l0YWwgY291cnNlcyBmcm9tIExpbmtlZEluIExlYXJuaW5nIGFuZCBvdXIgaW50ZXJuYWwgc3BlY2lhbGlzdHMsIEd1aWxkcywgTWVudG9ycyBhbmQgbW9yZS5cIixcbiAgICBsaW5rOiBcIm9rXCIsXG4gICAgZ3VpZGVMaW5rOiBcIm9rXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgcGljOiBcIi8yLnN2Z1wiLFxuICAgIG5hbWU6IFwiQ29pbnNcIixcbiAgICBleHA6IFwiQXNpdGVcIixcbiAgICBkZXNjOiBcIkxhaW5nIE8mYXBvcztSb3Vya2UmYXBvcztzIChMT1IpIGNob3NlbiBCdXNpbmVzcy10by1CdXNpbmVzcyAoQjJCKSB0ZWNobm9sb2d5IHBhcnRuZXIsIHByb3ZpZGluZyBMT1Igd2l0aCB0aGUgc29mdHdhcmUgdG8gbWFuYWdlIHByb2Nlc3NlcyB0aHJvdWdob3V0IG91ciBidXNpbmVzczogY29sbGFib3JhdGlvbiwgdGVuZGVyaW5nIGFuZCBjb250cmFjdCBtYW5hZ2VtZW50LiBUaGUgdG9vbCBwcm9tb3RlcyBtb3JlIGVmZmljaWVudCBpbnRlcmFjdGlvbiBhbmQgYmV0dGVyIGNvbW11bmljYXRpb24gYmV0d2VlbiBjb21wYW5pZXMsIGVuYWJsaW5nIGFjY2VzcyB0byBjdXJyZW50LCBhY2N1cmF0ZSBhbmQgY29uc2lzdGVudCBkYXRhIGFuZCBwcm92aWRpbmcgZGVjaXNpb24tbWFrZXJzIHdpdGggYmV0dGVyIHZpc2liaWxpdHkgYW5kIGNvbnRyb2wuXCIsXG4gICAgbGluazogXCJcIixcbiAgICBndWlkZUxpbms6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgcGljOiBcIi8yLnN2Z1wiLFxuICAgIG5hbWU6IFwiQ29pbnNcIixcbiAgICBleHA6IFwiQXNpdGVcIixcbiAgICBkZXNjOiBcIkxhaW5nIE8mYXBvcztSb3Vya2UmYXBvcztzIChMT1IpIGNob3NlbiBCdXNpbmVzcy10by1CdXNpbmVzcyAoQjJCKSB0ZWNobm9sb2d5IHBhcnRuZXIsIHByb3ZpZGluZyBMT1Igd2l0aCB0aGUgc29mdHdhcmUgdG8gbWFuYWdlIHByb2Nlc3NlcyB0aHJvdWdob3V0IG91ciBidXNpbmVzczogY29sbGFib3JhdGlvbiwgdGVuZGVyaW5nIGFuZCBjb250cmFjdCBtYW5hZ2VtZW50LiBUaGUgdG9vbCBwcm9tb3RlcyBtb3JlIGVmZmljaWVudCBpbnRlcmFjdGlvbiBhbmQgYmV0dGVyIGNvbW11bmljYXRpb24gYmV0d2VlbiBjb21wYW5pZXMsIGVuYWJsaW5nIGFjY2VzcyB0byBjdXJyZW50LCBhY2N1cmF0ZSBhbmQgY29uc2lzdGVudCBkYXRhIGFuZCBwcm92aWRpbmcgZGVjaXNpb24tbWFrZXJzIHdpdGggYmV0dGVyIHZpc2liaWxpdHkgYW5kIGNvbnRyb2wuXCIsXG4gICAgbGluazogXCJcIixcbiAgICBndWlkZUxpbms6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgcGljOiBcIi8yLnN2Z1wiLFxuICAgIG5hbWU6IFwiQ29pbnNcIixcbiAgICBleHA6IFwiQXNpdGVcIixcbiAgICBkZXNjOiBcIkxhaW5nIE8mYXBvcztSb3Vya2UmYXBvcztzIChMT1IpIGNob3NlbiBCdXNpbmVzcy10by1CdXNpbmVzcyAoQjJCKSB0ZWNobm9sb2d5IHBhcnRuZXIsIHByb3ZpZGluZyBMT1Igd2l0aCB0aGUgc29mdHdhcmUgdG8gbWFuYWdlIHByb2Nlc3NlcyB0aHJvdWdob3V0IG91ciBidXNpbmVzczogY29sbGFib3JhdGlvbiwgdGVuZGVyaW5nIGFuZCBjb250cmFjdCBtYW5hZ2VtZW50LiBUaGUgdG9vbCBwcm9tb3RlcyBtb3JlIGVmZmljaWVudCBpbnRlcmFjdGlvbiBhbmQgYmV0dGVyIGNvbW11bmljYXRpb24gYmV0d2VlbiBjb21wYW5pZXMsIGVuYWJsaW5nIGFjY2VzcyB0byBjdXJyZW50LCBhY2N1cmF0ZSBhbmQgY29uc2lzdGVudCBkYXRhIGFuZCBwcm92aWRpbmcgZGVjaXNpb24tbWFrZXJzIHdpdGggYmV0dGVyIHZpc2liaWxpdHkgYW5kIGNvbnRyb2wuXCIsXG4gICAgbGluazogXCJcIixcbiAgICBndWlkZUxpbms6IFwiXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VhcmNoSXRlbSwgc2V0U2VhcmNoSXRlbV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpbHRlcmVkVG9vbHMsIHNldEZpbHRlcmVkVG9vbHNdID0gdXNlU3RhdGUodG9vbHMpO1xuICAvLyBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIC8vIGNvbnN0IFtzaG93TGlzdCwgc2V0U2hvd0xpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFNlYXJjaEl0ZW0oc2VhcmNoVGVybSk7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRvb2xzLmZpbHRlcihcbiAgICAgICh0b29sKSA9PlxuICAgICAgICB0b29sLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgIHRvb2wuZXhwLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICB0b29sLmRlc2MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBzZXRGaWx0ZXJlZFRvb2xzKGZpbHRlcmVkSXRlbXMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3aGl0ZS1iZyBmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbWItMTJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNi8xMiBtZDp3LTUvMTIgaC0xMiBwLTQgcm91bmRlZC1sIHNiLWdyZXlcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaEl0ZW19XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdG9vbCBvciBhY3Rpb24gZS5nLiB0aW1lc2hlZXRzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0xLzEyIG1kOnctMjQgaC0xMiBwLTIgcm91bmRlZC1yIGxvci15ZWxsb3cgc3Ryb25nIGlubGluZS1ibG9jayBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInctMTEvMTIgbWQ6dy1bOTE4cHhdXCI+XG4gICAgICAgICAge2ZpbHRlcmVkVG9vbHMubWFwKCh0b29sKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt0b29sLmlkfSBjbGFzc05hbWU9XCJib3gtY29udGVudCBwLTQgcm91bmRlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0zNiBoLTM2IG1yLTEwIGZsZXggZmxleC1jb2wgcm91bmRlZCBzdHJvbmcgc2ItZ3JleSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtaW4tdy0yMCBoLTIwXCIgc3JjPXt0b29sLnBpY30gYWx0PVwibG9ybGVhcm5cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBtdC0yIGZsZXgganVzdGlmeS1jZW50ZXIgdXBwZXJjYXNlXCI+e3Rvb2wubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBmb250LWJvbGRcIj57dG9vbC5leHB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIGxlYWRpbmctNiBtdC0yXCI+e3Rvb2wuZGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ3d3cuZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgKHRvb2wubGluayAhPSBcIlwiID8gXCJibG9jayBcIiA6IFwiaGlkZGVuIFwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LVsxNHB4XSBmb250LWJvbGQgdy0xLzEyIG10LTQgbWQ6dy0yNCBoLTkgcC0yIHJvdW5kZWQgbG9yLXllbGxvdyBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHbyB0aGVyZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cInd3dy5nb29nbGUuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAodG9vbC5ndWlkZUxpbmsgIT0gXCJcIiA/IFwiYmxvY2sgXCIgOiBcImhpZGRlbiBcIikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1bMTRweF0gZm9udC1ib2xkIHctMy8xMiBtdC00IG1kOnctMzIgbWwtMyBoLTkgcC0yIHJvdW5kZWQgbG9yLXllbGxvdyBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBXYXRjaCBhIGd1aWRlXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInRvb2xzIiwiaWQiLCJwaWMiLCJuYW1lIiwiZXhwIiwiZGVzYyIsImxpbmsiLCJndWlkZUxpbmsiLCJIb21lIiwic2VhcmNoSXRlbSIsInNldFNlYXJjaEl0ZW0iLCJmaWx0ZXJlZFRvb2xzIiwic2V0RmlsdGVyZWRUb29scyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInNlYXJjaFRlcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJ0b29sIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJsaSIsImltZyIsInNyYyIsImFsdCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});