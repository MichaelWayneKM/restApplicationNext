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
exports.id = "pages/api/domain/search";
exports.ids = ["pages/api/domain/search"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./middleware/server.js":
/*!******************************!*\
  !*** ./middleware/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst connectDB = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            // Use current db connection\n            return handler(req, res);\n        }\n        // Use new db connection\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useUnifiedTopology: true,\n            //useFindAndModify: false,\n            //useCreateIndex: true,\n            useNewUrlParser: true\n        });\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL3NlcnZlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDL0JDLG9EQUF3QjtBQUN4QixLQUFLLENBQUNFLFNBQVMsSUFBR0MsT0FBTyxVQUFXQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO1FBQ2hELEVBQUUsRUFBRU4sMkVBQWtDLEVBQUUsQ0FBQztZQUN2QyxFQUE0QjtZQUM1QixNQUFNLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO1FBQ3pCLENBQUM7UUFDRCxFQUF3QjtRQUN4QixLQUFLLENBQUNOLHVEQUFnQixDQUFDVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFLENBQUM7WUFDL0NDLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsRUFBMEI7WUFDMUIsRUFBdUI7WUFDdkJDLGVBQWUsRUFBRSxJQUFJO1FBQ3ZCLENBQUM7UUFDRCxNQUFNLENBQUNWLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3pCLENBQUM7O0FBRUQsaUVBQWVILFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dheW5lLW5leHQvLi9taWRkbGV3YXJlL3NlcnZlci5qcz9mNzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKClcclxuY29uc3QgY29ubmVjdERCID0gaGFuZGxlciA9PiBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgLy8gVXNlIGN1cnJlbnQgZGIgY29ubmVjdGlvblxyXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xyXG4gIH1cclxuICAvLyBVc2UgbmV3IGRiIGNvbm5lY3Rpb25cclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAvL3VzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgLy91c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZVxyXG4gIH0pO1xyXG4gIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29uZmlnIiwiY29ubmVjdERCIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/server.js\n");

/***/ }),

/***/ "./models/domains.js":
/*!***************************!*\
  !*** ./models/domains.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst domainSchema = mongoose.Schema({\n    domainName: {\n        required: true,\n        unique: true,\n        type: String\n    },\n    ownerName: {\n        required: true,\n        type: String\n    },\n    ownerID: {\n        required: true,\n        type: String\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.model('domain', domainSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvZG9tYWlucy5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsS0FBSyxDQUFDQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVU7QUFFbkMsS0FBSyxDQUFDQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUM7SUFDbENDLFVBQVUsRUFBRSxDQUFDO1FBQ1RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLElBQUksRUFBRUMsTUFBTTtJQUNoQixDQUFDO0lBQ0RDLFNBQVMsRUFBRSxDQUFDO1FBQ1JKLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLElBQUksRUFBRUMsTUFBTTtJQUNoQixDQUFDO0lBQ0RFLE9BQU8sRUFBRSxDQUFDO1FBQ05MLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLElBQUksRUFBRUMsTUFBTTtJQUNoQixDQUFDO0FBRUwsQ0FBQyxFQUFFLENBQUM7SUFBQ0csVUFBVSxFQUFFLElBQUk7QUFBQSxDQUFDO0FBRXRCQyxNQUFNLENBQUNDLE9BQU8sR0FBR2IsUUFBUSxDQUFDYyxLQUFLLENBQUMsQ0FBUSxTQUFFWixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F5bmUtbmV4dC8uL21vZGVscy9kb21haW5zLmpzPzkyMjgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgZG9tYWluU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGRvbWFpbk5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgb3duZXJOYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgb3duZXJJRDoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuXHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZX0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgnZG9tYWluJywgZG9tYWluU2NoZW1hKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiZG9tYWluU2NoZW1hIiwiU2NoZW1hIiwiZG9tYWluTmFtZSIsInJlcXVpcmVkIiwidW5pcXVlIiwidHlwZSIsIlN0cmluZyIsIm93bmVyTmFtZSIsIm93bmVySUQiLCJ0aW1lc3RhbXBzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/domains.js\n");

/***/ }),

/***/ "./pages/api/domain/search.js":
/*!************************************!*\
  !*** ./pages/api/domain/search.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _middleware_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../middleware/server */ \"./middleware/server.js\");\n/* harmony import */ var _models_domains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/domains */ \"./models/domains.js\");\n/* harmony import */ var _models_domains__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_domains__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst search = async (req, res)=>{\n    var noMatch = null;\n    if (req.query.q) {\n        const regex = new RegExp(escapeRegex(req.query.q), 'gi');\n        // Get all campgrounds from DB\n        _models_domains__WEBPACK_IMPORTED_MODULE_1___default().find({\n            domainName: regex\n        }, function(err, alldomains) {\n            if (err) {\n                console.log(err);\n                res.send(err.message);\n            } else {\n                if (alldomains.length < 1) {\n                    noMatch = \"No campgrounds match that query, please try again.\";\n                }\n                res.json({\n                    domains: alldomains,\n                    noMatch: noMatch\n                });\n            }\n        });\n    } else {\n        // Get all campgrounds from DB\n        _models_domains__WEBPACK_IMPORTED_MODULE_1___default().find({\n        }, function(err, alldomains) {\n            if (err) {\n                console.log(err);\n            } else {\n                res.json({\n                    domains: alldomains\n                });\n            }\n        });\n    }\n};\nfunction escapeRegex(text) {\n    return text.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, \"\\\\$&\");\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZG9tYWluL3NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ0w7QUFDN0MsS0FBSyxDQUFDRSxNQUFNLFVBQVNDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDL0IsR0FBRyxDQUFDQyxPQUFPLEdBQUcsSUFBSTtJQUNsQixFQUFFLEVBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxDQUFDLEVBQUUsQ0FBQztRQUNiLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxXQUFXLENBQUNQLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxDQUFDLEdBQUcsQ0FBSTtRQUN2RCxFQUE4QjtRQUM5Qk4sMkRBQVksQ0FBQyxDQUFDVztZQUFBQSxVQUFVLEVBQUVKLEtBQUs7UUFBQSxDQUFDLEVBQUUsUUFBUSxDQUFDSyxHQUFHLEVBQUVDLFVBQVUsRUFBQyxDQUFDO1lBQ3pELEVBQUUsRUFBQ0QsR0FBRyxFQUFDLENBQUM7Z0JBQ0pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHO2dCQUNmVCxHQUFHLENBQUNhLElBQUksQ0FBQ0osR0FBRyxDQUFDSyxPQUFPO1lBQ3hCLENBQUMsTUFBTSxDQUFDO2dCQUNMLEVBQUUsRUFBQ0osVUFBVSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZCZCxPQUFPLEdBQUcsQ0FBb0Q7Z0JBQ2xFLENBQUM7Z0JBQ0RELEdBQUcsQ0FBQ2dCLElBQUksQ0FBQyxDQUFDbkI7b0JBQUFBLE9BQU8sRUFBQ2EsVUFBVTtvQkFBRVQsT0FBTyxFQUFFQSxPQUFPO2dCQUFBLENBQUM7WUFDbEQsQ0FBQztRQUNKLENBQUM7SUFDTCxDQUFDLE1BQU0sQ0FBQztRQUNKLEVBQThCO1FBQzlCSiwyREFBWSxDQUFDLENBQUM7UUFBQSxDQUFDLEVBQUUsUUFBUSxDQUFDWSxHQUFHLEVBQUVDLFVBQVUsRUFBQyxDQUFDO1lBQ3hDLEVBQUUsRUFBQ0QsR0FBRyxFQUFDLENBQUM7Z0JBQ0pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHO1lBQ25CLENBQUMsTUFBTSxDQUFDO2dCQUNQVCxHQUFHLENBQUNnQixJQUFJLENBQUMsQ0FBQ25CO29CQUFBQSxPQUFPLEVBQUNhLFVBQVU7Z0JBQUEsQ0FBQztZQUM5QixDQUFDO1FBQ0osQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO1NBRVFKLFdBQVcsQ0FBQ1csSUFBSSxFQUFFLENBQUM7SUFDeEIsTUFBTSxDQUFDQSxJQUFJLENBQUNDLE9BQU8sNkJBQTZCLENBQU07QUFDMUQsQ0FBQzs7QUFFRCxpRUFBZXRCLDhEQUFTLENBQUNFLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dheW5lLW5leHQvLi9wYWdlcy9hcGkvZG9tYWluL3NlYXJjaC5qcz84MWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9zZXJ2ZXInO1xyXG5pbXBvcnQgZG9tYWlucyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZG9tYWlucyc7XHJcbmNvbnN0IHNlYXJjaCA9IGFzeW5jKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB2YXIgbm9NYXRjaCA9IG51bGw7XHJcbiAgICBpZihyZXEucXVlcnkucSkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdleChyZXEucXVlcnkucSksICdnaScpO1xyXG4gICAgICAgIC8vIEdldCBhbGwgY2FtcGdyb3VuZHMgZnJvbSBEQlxyXG4gICAgICAgIGRvbWFpbnMuZmluZCh7ZG9tYWluTmFtZTogcmVnZXh9LCBmdW5jdGlvbihlcnIsIGFsbGRvbWFpbnMpe1xyXG4gICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgIHJlcy5zZW5kKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYoYWxsZG9tYWlucy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5vTWF0Y2ggPSBcIk5vIGNhbXBncm91bmRzIG1hdGNoIHRoYXQgcXVlcnksIHBsZWFzZSB0cnkgYWdhaW4uXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlcy5qc29uKHtkb21haW5zOmFsbGRvbWFpbnMsIG5vTWF0Y2g6IG5vTWF0Y2h9KTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEdldCBhbGwgY2FtcGdyb3VuZHMgZnJvbSBEQlxyXG4gICAgICAgIGRvbWFpbnMuZmluZCh7fSwgZnVuY3Rpb24oZXJyLCBhbGxkb21haW5zKXtcclxuICAgICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHtkb21haW5zOmFsbGRvbWFpbnN9KVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXNjYXBlUmVnZXgodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCKHNlYXJjaCkiXSwibmFtZXMiOlsiY29ubmVjdERCIiwiZG9tYWlucyIsInNlYXJjaCIsInJlcSIsInJlcyIsIm5vTWF0Y2giLCJxdWVyeSIsInEiLCJyZWdleCIsIlJlZ0V4cCIsImVzY2FwZVJlZ2V4IiwiZmluZCIsImRvbWFpbk5hbWUiLCJlcnIiLCJhbGxkb21haW5zIiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJtZXNzYWdlIiwibGVuZ3RoIiwianNvbiIsInRleHQiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/domain/search.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/domain/search.js"));
module.exports = __webpack_exports__;

})();