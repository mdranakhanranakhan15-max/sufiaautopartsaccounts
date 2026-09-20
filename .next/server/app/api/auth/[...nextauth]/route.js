"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mdshohelrana_Project_Sufia_Auto_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/mdshohelrana/Project/Sufia Auto/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_mdshohelrana_Project_Sufia_Auto_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1kc2hvaGVscmFuYSUyRlByb2plY3QlMkZTdWZpYSUyMEF1dG8lMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWRzaG9oZWxyYW5hJTJGUHJvamVjdCUyRlN1ZmlhJTIwQXV0byZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWZpYS1hdXRvLXBvcy8/NWMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWRzaG9oZWxyYW5hL1Byb2plY3QvU3VmaWEgQXV0by9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbWRzaG9oZWxyYW5hL1Byb2plY3QvU3VmaWEgQXV0by9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   dynamic: () => (/* binding */ dynamic),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.js\");\n\n\n// Pin this route to the Node.js runtime.\n// The credentials provider opens TCP sockets via mongoose and hashes with\n// bcryptjs, neither of which is available on the Edge runtime — on Edge the\n// request hangs instead of failing, which is what froze the login form.\nconst runtime = \"nodejs\";\n// Never statically optimize an auth handler: it must run per request.\nconst dynamic = \"force-dynamic\";\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1E7QUFFekMseUNBQXlDO0FBQ3pDLDBFQUEwRTtBQUMxRSw0RUFBNEU7QUFDNUUsd0VBQXdFO0FBQ2pFLE1BQU1FLFVBQVUsU0FBUztBQUVoQyxzRUFBc0U7QUFDL0QsTUFBTUMsVUFBVSxnQkFBZ0I7QUFFdkMsTUFBTUMsVUFBVUosZ0RBQVFBLENBQUNDLGtEQUFXQTtBQUVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VmaWEtYXV0by1wb3MvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz9kYTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcblxuLy8gUGluIHRoaXMgcm91dGUgdG8gdGhlIE5vZGUuanMgcnVudGltZS5cbi8vIFRoZSBjcmVkZW50aWFscyBwcm92aWRlciBvcGVucyBUQ1Agc29ja2V0cyB2aWEgbW9uZ29vc2UgYW5kIGhhc2hlcyB3aXRoXG4vLyBiY3J5cHRqcywgbmVpdGhlciBvZiB3aGljaCBpcyBhdmFpbGFibGUgb24gdGhlIEVkZ2UgcnVudGltZSDigJQgb24gRWRnZSB0aGVcbi8vIHJlcXVlc3QgaGFuZ3MgaW5zdGVhZCBvZiBmYWlsaW5nLCB3aGljaCBpcyB3aGF0IGZyb3plIHRoZSBsb2dpbiBmb3JtLlxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSAnbm9kZWpzJztcblxuLy8gTmV2ZXIgc3RhdGljYWxseSBvcHRpbWl6ZSBhbiBhdXRoIGhhbmRsZXI6IGl0IG11c3QgcnVuIHBlciByZXF1ZXN0LlxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSAnZm9yY2UtZHluYW1pYyc7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcblxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJydW50aW1lIiwiZHluYW1pYyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.js\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"admin@sufiaauto.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Please enter both email and password.\");\n                }\n                const email = String(credentials.email).toLowerCase().trim();\n                const password = String(credentials.password);\n                // STRICT try-catch: the database connection, the user lookup and the password\n                // comparison ALL live inside this boundary. Every failure must be converted\n                // into an explicit rejection — an escaped throw, or an await that never\n                // settled, is what left the login form spinning forever on Vercel.\n                try {\n                    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                    // Seed initial admin if no users exist in database\n                    const userCount = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].countDocuments();\n                    if (userCount === 0) {\n                        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(\"admin123\", 10);\n                        await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                            name: \"System Admin\",\n                            email: \"admin@sufiaauto.com\",\n                            password: hashedPassword,\n                            role: \"admin\",\n                            isActive: true\n                        });\n                    }\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email\n                    });\n                    if (!user) {\n                        throw new Error(\"No user found for the supplied email\");\n                    }\n                    if (!user.isActive) {\n                        throw new Error(\"User account is deactivated\");\n                    }\n                    // bcryptjs (pure JavaScript) is the ONLY hashing library allowed here: the\n                    // native \"bcrypt\" package blocks the serverless event loop and hangs the\n                    // whole invocation instead of returning an error.\n                    const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);\n                    if (!isMatch) {\n                        throw new Error(\"Password does not match\");\n                    }\n                    return {\n                        id: user._id.toString(),\n                        name: user.name,\n                        email: user.email,\n                        role: user.role\n                    };\n                } catch (error) {\n                    // Log the real cause for the Vercel function logs, but ALWAYS hand the client\n                    // an explicit rejection so the sign-in request terminates instead of hanging.\n                    console.error(\"[auth] authorize() failed:\", error);\n                    throw new Error(\"Database or Auth Error\");\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET || \"sufia_auto_pos_super_secret_key_2026_jwt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pCO0lBQ0FDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZSxJQUFJO0FBQ3pDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWZpYS1hdXRvLXBvcy8uL2xpYi9hdXRoLmpzPzI4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBjb25uZWN0VG9EYXRhYmFzZSBmcm9tICdAL2xpYi9tb25nb2RiJztcbmltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL1VzZXInO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnLCBwbGFjZWhvbGRlcjogJ2FkbWluQHN1ZmlhYXV0by5jb20nIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBib3RoIGVtYWlsIGFuZCBwYXNzd29yZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVtYWlsID0gU3RyaW5nKGNyZWRlbnRpYWxzLmVtYWlsKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBTdHJpbmcoY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuXG4gICAgICAgIC8vIFNUUklDVCB0cnktY2F0Y2g6IHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uLCB0aGUgdXNlciBsb29rdXAgYW5kIHRoZSBwYXNzd29yZFxuICAgICAgICAvLyBjb21wYXJpc29uIEFMTCBsaXZlIGluc2lkZSB0aGlzIGJvdW5kYXJ5LiBFdmVyeSBmYWlsdXJlIG11c3QgYmUgY29udmVydGVkXG4gICAgICAgIC8vIGludG8gYW4gZXhwbGljaXQgcmVqZWN0aW9uIOKAlCBhbiBlc2NhcGVkIHRocm93LCBvciBhbiBhd2FpdCB0aGF0IG5ldmVyXG4gICAgICAgIC8vIHNldHRsZWQsIGlzIHdoYXQgbGVmdCB0aGUgbG9naW4gZm9ybSBzcGlubmluZyBmb3JldmVyIG9uIFZlcmNlbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgICAgICAgLy8gU2VlZCBpbml0aWFsIGFkbWluIGlmIG5vIHVzZXJzIGV4aXN0IGluIGRhdGFiYXNlXG4gICAgICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgVXNlci5jb3VudERvY3VtZW50cygpO1xuICAgICAgICAgIGlmICh1c2VyQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goJ2FkbWluMTIzJywgMTApO1xuICAgICAgICAgICAgYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICBuYW1lOiAnU3lzdGVtIEFkbWluJyxcbiAgICAgICAgICAgICAgZW1haWw6ICdhZG1pbkBzdWZpYWF1dG8uY29tJyxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICAgICAgICByb2xlOiAnYWRtaW4nLFxuICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBmb3VuZCBmb3IgdGhlIHN1cHBsaWVkIGVtYWlsJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF1c2VyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgYWNjb3VudCBpcyBkZWFjdGl2YXRlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGJjcnlwdGpzIChwdXJlIEphdmFTY3JpcHQpIGlzIHRoZSBPTkxZIGhhc2hpbmcgbGlicmFyeSBhbGxvd2VkIGhlcmU6IHRoZVxuICAgICAgICAgIC8vIG5hdGl2ZSBcImJjcnlwdFwiIHBhY2thZ2UgYmxvY2tzIHRoZSBzZXJ2ZXJsZXNzIGV2ZW50IGxvb3AgYW5kIGhhbmdzIHRoZVxuICAgICAgICAgIC8vIHdob2xlIGludm9jYXRpb24gaW5zdGVhZCBvZiByZXR1cm5pbmcgYW4gZXJyb3IuXG4gICAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIExvZyB0aGUgcmVhbCBjYXVzZSBmb3IgdGhlIFZlcmNlbCBmdW5jdGlvbiBsb2dzLCBidXQgQUxXQVlTIGhhbmQgdGhlIGNsaWVudFxuICAgICAgICAgIC8vIGFuIGV4cGxpY2l0IHJlamVjdGlvbiBzbyB0aGUgc2lnbi1pbiByZXF1ZXN0IHRlcm1pbmF0ZXMgaW5zdGVhZCBvZiBoYW5naW5nLlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1thdXRoXSBhdXRob3JpemUoKSBmYWlsZWQ6JywgZXJyb3IpO1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhYmFzZSBvciBBdXRoIEVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCAnc3VmaWFfYXV0b19wb3Nfc3VwZXJfc2VjcmV0X2tleV8yMDI2X2p3dCcsXG59O1xuXG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiVXNlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ1c2VyQ291bnQiLCJjb3VudERvY3VtZW50cyIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsImNyZWF0ZSIsInJvbGUiLCJpc0FjdGl2ZSIsInVzZXIiLCJmaW5kT25lIiwiaXNNYXRjaCIsImNvbXBhcmUiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzdHJhdGVneSIsIm1heEFnZSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    const MONGODB_URI = process.env.MONGODB_URI;\n    if (!MONGODB_URI) {\n        throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n    }\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        // These timeouts are what stop the login request from hanging forever:\n        // by default mongoose retries server selection for 30s+ (and longer on Vercel\n        // where the socket may never error), while the awaited connect() inside\n        // authorize() would simply never settle, leaving the client spinning.\n        const opts = {\n            bufferCommands: false,\n            serverSelectionTimeoutMS: 8000,\n            connectTimeoutMS: 8000,\n            socketTimeoutMS: 20000\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongooseInstance)=>{\n            return mongooseInstance;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (error) {\n        cached.promise = null;\n        throw error;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsU0FBU0MsT0FBT0YsUUFBUTtBQUU1QixJQUFJLENBQUNDLFFBQVE7SUFDWEEsU0FBU0MsT0FBT0YsUUFBUSxHQUFHO1FBQUVHLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7SUFFM0MsSUFBSSxDQUFDQSxhQUFhO1FBQ2hCLE1BQU0sSUFBSUcsTUFBTTtJQUNsQjtJQUVBLElBQUlSLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQix1RUFBdUU7UUFDdkUsOEVBQThFO1FBQzlFLHdFQUF3RTtRQUN4RSxzRUFBc0U7UUFDdEUsTUFBTU0sT0FBTztZQUNYQyxnQkFBZ0I7WUFDaEJDLDBCQUEwQjtZQUMxQkMsa0JBQWtCO1lBQ2xCQyxpQkFBaUI7UUFDbkI7UUFFQWIsT0FBT0csT0FBTyxHQUFHSix1REFBZ0IsQ0FBQ00sYUFBYUksTUFBTU0sSUFBSSxDQUFDLENBQUNDO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRmhCLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT2MsT0FBTztRQUNkakIsT0FBT0csT0FBTyxHQUFHO1FBQ2pCLE1BQU1jO0lBQ1I7SUFFQSxPQUFPakIsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWZpYS1hdXRvLXBvcy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBjb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG4gIGlmICghTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJyk7XG4gIH1cblxuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgLy8gVGhlc2UgdGltZW91dHMgYXJlIHdoYXQgc3RvcCB0aGUgbG9naW4gcmVxdWVzdCBmcm9tIGhhbmdpbmcgZm9yZXZlcjpcbiAgICAvLyBieSBkZWZhdWx0IG1vbmdvb3NlIHJldHJpZXMgc2VydmVyIHNlbGVjdGlvbiBmb3IgMzBzKyAoYW5kIGxvbmdlciBvbiBWZXJjZWxcbiAgICAvLyB3aGVyZSB0aGUgc29ja2V0IG1heSBuZXZlciBlcnJvciksIHdoaWxlIHRoZSBhd2FpdGVkIGNvbm5lY3QoKSBpbnNpZGVcbiAgICAvLyBhdXRob3JpemUoKSB3b3VsZCBzaW1wbHkgbmV2ZXIgc2V0dGxlLCBsZWF2aW5nIHRoZSBjbGllbnQgc3Bpbm5pbmcuXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgIHNlcnZlclNlbGVjdGlvblRpbWVvdXRNUzogODAwMCwgLy8gZmFpbCBmYXN0IGlmIHRoZSBEQiBpcyB1bnJlYWNoYWJsZS9ub3Qgd2hpdGVsaXN0ZWRcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDgwMDAsXG4gICAgICBzb2NrZXRUaW1lb3V0TVM6IDIwMDAwLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlSW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZUluc3RhbmNlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvRGF0YWJhc2U7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJjb25uZWN0VGltZW91dE1TIiwic29ja2V0VGltZW91dE1TIiwiY29ubmVjdCIsInRoZW4iLCJtb25nb29zZUluc3RhbmNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a name\"\n        ],\n        trim: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\",\n            \"manager\",\n            \"staff\"\n        ],\n        default: \"staff\"\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXdCO1FBQ3pDQyxNQUFNO0lBQ1I7SUFDQUMsT0FBTztRQUNMSixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUEwQjtRQUMzQ0csUUFBUTtRQUNSQyxXQUFXO1FBQ1hILE1BQU07SUFDUjtJQUNBSSxVQUFVO1FBQ1JQLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTRCO0lBQy9DO0lBQ0FNLE1BQU07UUFDSlIsTUFBTUM7UUFDTlEsTUFBTTtZQUFDO1lBQVM7WUFBVztTQUFRO1FBQ25DQyxTQUFTO0lBQ1g7SUFDQUMsVUFBVTtRQUNSWCxNQUFNWTtRQUNORixTQUFTO0lBQ1g7QUFDRixHQUNBO0lBQ0VHLFlBQVk7QUFDZDtBQUdGLGlFQUFlakIsd0RBQWUsQ0FBQ21CLElBQUksSUFBSW5CLHFEQUFjLENBQUMsUUFBUUMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1ZmlhLWF1dG8tcG9zLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBwcm92aWRlIGEgbmFtZSddLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgcHJvdmlkZSBhbiBlbWFpbCddLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkJ10sXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBlbnVtOiBbJ2FkbWluJywgJ21hbmFnZXInLCAnc3RhZmYnXSxcbiAgICAgIGRlZmF1bHQ6ICdzdGFmZicsXG4gICAgfSxcbiAgICBpc0FjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XG5cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsImVtYWlsIiwidW5pcXVlIiwibG93ZXJjYXNlIiwicGFzc3dvcmQiLCJyb2xlIiwiZW51bSIsImRlZmF1bHQiLCJpc0FjdGl2ZSIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/uuid","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmdshohelrana%2FProject%2FSufia%20Auto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();