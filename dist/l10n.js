module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, localeData, localeMap, isRtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale-data.js */ "./src/locale-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeData", function() { return _locale_data_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _supported_locales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supported-locales.js */ "./src/supported-locales.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _supported_locales_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeMap", function() { return _supported_locales_js__WEBPACK_IMPORTED_MODULE_1__["localeMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return _supported_locales_js__WEBPACK_IMPORTED_MODULE_1__["isRtl"]; });





/***/ }),

/***/ "./src/locale-data.js":
/*!****************************!*\
  !*** ./src/locale-data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return localeData; });
/* harmony import */ var _locale_data_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale-data/en */ "./src/locale-data/en.js");
/* harmony import */ var _locale_data_en__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locale_data_en__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_data_af__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-data/af */ "./src/locale-data/af.js");
/* harmony import */ var _locale_data_af__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_data_af__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale_data_am__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale-data/am */ "./src/locale-data/am.js");
/* harmony import */ var _locale_data_am__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locale_data_am__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locale_data_ar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-data/ar */ "./src/locale-data/ar.js");
/* harmony import */ var _locale_data_ar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locale_data_ast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale-data/ast */ "./src/locale-data/ast.js");
/* harmony import */ var _locale_data_ast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locale_data_az__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale-data/az */ "./src/locale-data/az.js");
/* harmony import */ var _locale_data_az__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_locale_data_az__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locale_data_be__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-data/be */ "./src/locale-data/be.js");
/* harmony import */ var _locale_data_be__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_locale_data_be__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _locale_data_bn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-data/bn */ "./src/locale-data/bn.js");
/* harmony import */ var _locale_data_bn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_locale_data_bn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _locale_data_bg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale-data/bg */ "./src/locale-data/bg.js");
/* harmony import */ var _locale_data_bg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_locale_data_bg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_data_ca__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-data/ca */ "./src/locale-data/ca.js");
/* harmony import */ var _locale_data_ca__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ca__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _locale_data_ckb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale-data/ckb */ "./src/locale-data/ckb.js");
/* harmony import */ var _locale_data_ckb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ckb__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _locale_data_cs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale-data/cs */ "./src/locale-data/cs.js");
/* harmony import */ var _locale_data_cs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_locale_data_cs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _locale_data_cy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locale-data/cy */ "./src/locale-data/cy.js");
/* harmony import */ var _locale_data_cy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_locale_data_cy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _locale_data_da__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./locale-data/da */ "./src/locale-data/da.js");
/* harmony import */ var _locale_data_da__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_locale_data_da__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _locale_data_de__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./locale-data/de */ "./src/locale-data/de.js");
/* harmony import */ var _locale_data_de__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_locale_data_de__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _locale_data_el__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locale-data/el */ "./src/locale-data/el.js");
/* harmony import */ var _locale_data_el__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_locale_data_el__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _locale_data_eo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./locale-data/eo */ "./src/locale-data/eo.js");
/* harmony import */ var _locale_data_eo__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_locale_data_eo__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _locale_data_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./locale-data/es */ "./src/locale-data/es.js");
/* harmony import */ var _locale_data_es__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_locale_data_es__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _locale_data_et__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./locale-data/et */ "./src/locale-data/et.js");
/* harmony import */ var _locale_data_et__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_locale_data_et__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _locale_data_eu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./locale-data/eu */ "./src/locale-data/eu.js");
/* harmony import */ var _locale_data_eu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_locale_data_eu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _locale_data_fa__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./locale-data/fa */ "./src/locale-data/fa.js");
/* harmony import */ var _locale_data_fa__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_locale_data_fa__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _locale_data_fi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./locale-data/fi */ "./src/locale-data/fi.js");
/* harmony import */ var _locale_data_fi__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_locale_data_fi__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _locale_data_fil__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./locale-data/fil */ "./src/locale-data/fil.js");
/* harmony import */ var _locale_data_fil__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_locale_data_fil__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _locale_data_fr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./locale-data/fr */ "./src/locale-data/fr.js");
/* harmony import */ var _locale_data_fr__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_locale_data_fr__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _locale_data_fy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./locale-data/fy */ "./src/locale-data/fy.js");
/* harmony import */ var _locale_data_fy__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_locale_data_fy__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _locale_data_ga__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./locale-data/ga */ "./src/locale-data/ga.js");
/* harmony import */ var _locale_data_ga__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ga__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _locale_data_gd__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./locale-data/gd */ "./src/locale-data/gd.js");
/* harmony import */ var _locale_data_gd__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_locale_data_gd__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _locale_data_gl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./locale-data/gl */ "./src/locale-data/gl.js");
/* harmony import */ var _locale_data_gl__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_locale_data_gl__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _locale_data_ha__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./locale-data/ha */ "./src/locale-data/ha.js");
/* harmony import */ var _locale_data_ha__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ha__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _locale_data_he__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./locale-data/he */ "./src/locale-data/he.js");
/* harmony import */ var _locale_data_he__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_locale_data_he__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _locale_data_hu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./locale-data/hu */ "./src/locale-data/hu.js");
/* harmony import */ var _locale_data_hu__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_locale_data_hu__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _locale_data_hr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./locale-data/hr */ "./src/locale-data/hr.js");
/* harmony import */ var _locale_data_hr__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_locale_data_hr__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _locale_data_hy__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./locale-data/hy */ "./src/locale-data/hy.js");
/* harmony import */ var _locale_data_hy__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_locale_data_hy__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _locale_data_id__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./locale-data/id */ "./src/locale-data/id.js");
/* harmony import */ var _locale_data_id__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_locale_data_id__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _locale_data_is__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./locale-data/is */ "./src/locale-data/is.js");
/* harmony import */ var _locale_data_is__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_locale_data_is__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _locale_data_it__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./locale-data/it */ "./src/locale-data/it.js");
/* harmony import */ var _locale_data_it__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_locale_data_it__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _locale_data_ja__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./locale-data/ja */ "./src/locale-data/ja.js");
/* harmony import */ var _locale_data_ja__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ja__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _locale_data_ka__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./locale-data/ka */ "./src/locale-data/ka.js");
/* harmony import */ var _locale_data_ka__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ka__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _locale_data_kk__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./locale-data/kk */ "./src/locale-data/kk.js");
/* harmony import */ var _locale_data_kk__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_locale_data_kk__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _locale_data_ko__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./locale-data/ko */ "./src/locale-data/ko.js");
/* harmony import */ var _locale_data_ko__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ko__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _locale_data_km__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./locale-data/km */ "./src/locale-data/km.js");
/* harmony import */ var _locale_data_km__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_locale_data_km__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _locale_data_ku__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./locale-data/ku */ "./src/locale-data/ku.js");
/* harmony import */ var _locale_data_ku__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ku__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _locale_data_lt__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./locale-data/lt */ "./src/locale-data/lt.js");
/* harmony import */ var _locale_data_lt__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_locale_data_lt__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _locale_data_lv__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./locale-data/lv */ "./src/locale-data/lv.js");
/* harmony import */ var _locale_data_lv__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_locale_data_lv__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _locale_data_mi__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./locale-data/mi */ "./src/locale-data/mi.js");
/* harmony import */ var _locale_data_mi__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_locale_data_mi__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _locale_data_mn__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./locale-data/mn */ "./src/locale-data/mn.js");
/* harmony import */ var _locale_data_mn__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_locale_data_mn__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _locale_data_nl__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./locale-data/nl */ "./src/locale-data/nl.js");
/* harmony import */ var _locale_data_nl__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_locale_data_nl__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _locale_data_nb__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./locale-data/nb */ "./src/locale-data/nb.js");
/* harmony import */ var _locale_data_nb__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_locale_data_nb__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _locale_data_nn__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./locale-data/nn */ "./src/locale-data/nn.js");
/* harmony import */ var _locale_data_nn__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_locale_data_nn__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _locale_data_nso__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./locale-data/nso */ "./src/locale-data/nso.js");
/* harmony import */ var _locale_data_nso__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_locale_data_nso__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _locale_data_or__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./locale-data/or */ "./src/locale-data/or.js");
/* harmony import */ var _locale_data_or__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_locale_data_or__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _locale_data_pl__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./locale-data/pl */ "./src/locale-data/pl.js");
/* harmony import */ var _locale_data_pl__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_locale_data_pl__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _locale_data_pt__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./locale-data/pt */ "./src/locale-data/pt.js");
/* harmony import */ var _locale_data_pt__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_locale_data_pt__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _locale_data_qu__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./locale-data/qu */ "./src/locale-data/qu.js");
/* harmony import */ var _locale_data_qu__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_locale_data_qu__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _locale_data_ro__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./locale-data/ro */ "./src/locale-data/ro.js");
/* harmony import */ var _locale_data_ro__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ro__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _locale_data_ru__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./locale-data/ru */ "./src/locale-data/ru.js");
/* harmony import */ var _locale_data_ru__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_locale_data_ru__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _locale_data_sl__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./locale-data/sl */ "./src/locale-data/sl.js");
/* harmony import */ var _locale_data_sl__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_locale_data_sl__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _locale_data_sk__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./locale-data/sk */ "./src/locale-data/sk.js");
/* harmony import */ var _locale_data_sk__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_locale_data_sk__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _locale_data_sr__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./locale-data/sr */ "./src/locale-data/sr.js");
/* harmony import */ var _locale_data_sr__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_locale_data_sr__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _locale_data_sv__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./locale-data/sv */ "./src/locale-data/sv.js");
/* harmony import */ var _locale_data_sv__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_locale_data_sv__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _locale_data_sw__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./locale-data/sw */ "./src/locale-data/sw.js");
/* harmony import */ var _locale_data_sw__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_locale_data_sw__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _locale_data_th__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./locale-data/th */ "./src/locale-data/th.js");
/* harmony import */ var _locale_data_th__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_locale_data_th__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _locale_data_tr__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./locale-data/tr */ "./src/locale-data/tr.js");
/* harmony import */ var _locale_data_tr__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_locale_data_tr__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _locale_data_tn__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./locale-data/tn */ "./src/locale-data/tn.js");
/* harmony import */ var _locale_data_tn__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_locale_data_tn__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _locale_data_uk__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./locale-data/uk */ "./src/locale-data/uk.js");
/* harmony import */ var _locale_data_uk__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_locale_data_uk__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _locale_data_uz__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./locale-data/uz */ "./src/locale-data/uz.js");
/* harmony import */ var _locale_data_uz__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_locale_data_uz__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _locale_data_vi__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./locale-data/vi */ "./src/locale-data/vi.js");
/* harmony import */ var _locale_data_vi__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_locale_data_vi__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _locale_data_xh__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./locale-data/xh */ "./src/locale-data/xh.js");
/* harmony import */ var _locale_data_xh__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_locale_data_xh__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _locale_data_zh__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./locale-data/zh */ "./src/locale-data/zh.js");
/* harmony import */ var _locale_data_zh__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_locale_data_zh__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _locale_data_zu__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./locale-data/zu */ "./src/locale-data/zu.js");
/* harmony import */ var _locale_data_zu__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_locale_data_zu__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _supported_locales_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./supported-locales.js */ "./src/supported-locales.js");
// temporarily we have all the locale data in scratch-l10n








































































var localeData = [].concat(_locale_data_en__WEBPACK_IMPORTED_MODULE_0___default.a, _locale_data_af__WEBPACK_IMPORTED_MODULE_1___default.a, _locale_data_am__WEBPACK_IMPORTED_MODULE_2___default.a, _locale_data_ar__WEBPACK_IMPORTED_MODULE_3___default.a, _locale_data_ast__WEBPACK_IMPORTED_MODULE_4___default.a, _locale_data_az__WEBPACK_IMPORTED_MODULE_5___default.a, _locale_data_be__WEBPACK_IMPORTED_MODULE_6___default.a, _locale_data_bg__WEBPACK_IMPORTED_MODULE_8___default.a, _locale_data_bn__WEBPACK_IMPORTED_MODULE_7___default.a, _locale_data_ca__WEBPACK_IMPORTED_MODULE_9___default.a, _locale_data_ckb__WEBPACK_IMPORTED_MODULE_10___default.a, _locale_data_cs__WEBPACK_IMPORTED_MODULE_11___default.a, _locale_data_cy__WEBPACK_IMPORTED_MODULE_12___default.a, _locale_data_da__WEBPACK_IMPORTED_MODULE_13___default.a, _locale_data_de__WEBPACK_IMPORTED_MODULE_14___default.a, _locale_data_el__WEBPACK_IMPORTED_MODULE_15___default.a, _locale_data_eo__WEBPACK_IMPORTED_MODULE_16___default.a, _locale_data_es__WEBPACK_IMPORTED_MODULE_17___default.a, _locale_data_et__WEBPACK_IMPORTED_MODULE_18___default.a, _locale_data_eu__WEBPACK_IMPORTED_MODULE_19___default.a, _locale_data_fa__WEBPACK_IMPORTED_MODULE_20___default.a, _locale_data_fi__WEBPACK_IMPORTED_MODULE_21___default.a, _locale_data_fil__WEBPACK_IMPORTED_MODULE_22___default.a, _locale_data_fr__WEBPACK_IMPORTED_MODULE_23___default.a, _locale_data_fy__WEBPACK_IMPORTED_MODULE_24___default.a, _locale_data_ga__WEBPACK_IMPORTED_MODULE_25___default.a, _locale_data_gd__WEBPACK_IMPORTED_MODULE_26___default.a, _locale_data_gl__WEBPACK_IMPORTED_MODULE_27___default.a, _locale_data_ha__WEBPACK_IMPORTED_MODULE_28___default.a, _locale_data_he__WEBPACK_IMPORTED_MODULE_29___default.a, _locale_data_hu__WEBPACK_IMPORTED_MODULE_30___default.a, _locale_data_hr__WEBPACK_IMPORTED_MODULE_31___default.a, _locale_data_hy__WEBPACK_IMPORTED_MODULE_32___default.a, _locale_data_id__WEBPACK_IMPORTED_MODULE_33___default.a, _locale_data_is__WEBPACK_IMPORTED_MODULE_34___default.a, _locale_data_it__WEBPACK_IMPORTED_MODULE_35___default.a, _locale_data_ja__WEBPACK_IMPORTED_MODULE_36___default.a, _locale_data_ka__WEBPACK_IMPORTED_MODULE_37___default.a, _locale_data_kk__WEBPACK_IMPORTED_MODULE_38___default.a, _locale_data_ko__WEBPACK_IMPORTED_MODULE_39___default.a, _locale_data_km__WEBPACK_IMPORTED_MODULE_40___default.a, _locale_data_ku__WEBPACK_IMPORTED_MODULE_41___default.a, _locale_data_lt__WEBPACK_IMPORTED_MODULE_42___default.a, _locale_data_lv__WEBPACK_IMPORTED_MODULE_43___default.a, _locale_data_mi__WEBPACK_IMPORTED_MODULE_44___default.a, _locale_data_mn__WEBPACK_IMPORTED_MODULE_45___default.a, _locale_data_nl__WEBPACK_IMPORTED_MODULE_46___default.a, _locale_data_nb__WEBPACK_IMPORTED_MODULE_47___default.a, _locale_data_nn__WEBPACK_IMPORTED_MODULE_48___default.a, _locale_data_nso__WEBPACK_IMPORTED_MODULE_49___default.a, _locale_data_or__WEBPACK_IMPORTED_MODULE_50___default.a, _locale_data_pl__WEBPACK_IMPORTED_MODULE_51___default.a, _locale_data_pt__WEBPACK_IMPORTED_MODULE_52___default.a, _locale_data_sl__WEBPACK_IMPORTED_MODULE_56___default.a, _locale_data_sk__WEBPACK_IMPORTED_MODULE_57___default.a, _locale_data_sr__WEBPACK_IMPORTED_MODULE_58___default.a, _locale_data_sv__WEBPACK_IMPORTED_MODULE_59___default.a, _locale_data_sw__WEBPACK_IMPORTED_MODULE_60___default.a, _locale_data_qu__WEBPACK_IMPORTED_MODULE_53___default.a, _locale_data_ro__WEBPACK_IMPORTED_MODULE_54___default.a, _locale_data_ru__WEBPACK_IMPORTED_MODULE_55___default.a, _locale_data_th__WEBPACK_IMPORTED_MODULE_61___default.a, _locale_data_tn__WEBPACK_IMPORTED_MODULE_63___default.a, _locale_data_tr__WEBPACK_IMPORTED_MODULE_62___default.a, _locale_data_uk__WEBPACK_IMPORTED_MODULE_64___default.a, _locale_data_uz__WEBPACK_IMPORTED_MODULE_65___default.a, _locale_data_vi__WEBPACK_IMPORTED_MODULE_66___default.a, _locale_data_xh__WEBPACK_IMPORTED_MODULE_67___default.a, _locale_data_zh__WEBPACK_IMPORTED_MODULE_68___default.a, _locale_data_zu__WEBPACK_IMPORTED_MODULE_69___default.a);
for (var lang in _supported_locales_js__WEBPACK_IMPORTED_MODULE_70__["customLocales"]) {
  localeData.push(_supported_locales_js__WEBPACK_IMPORTED_MODULE_70__["customLocales"][lang]);
}


/***/ }),

/***/ "./src/locale-data/af.js":
/*!*******************************!*\
  !*** ./src/locale-data/af.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "af",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return a ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "jaar",
        relative: {
          0: "hierdie jaar",
          1: "volgende jaar",
          "-1": "verlede jaar"
        },
        relativeTime: {
          future: {
            one: "oor {0} jaar",
            other: "oor {0} jaar"
          },
          past: {
            one: "{0} jaar gelede",
            other: "{0} jaar gelede"
          }
        }
      },
      "year-short": {
        displayName: "j.",
        relative: {
          0: "hierdie jaar",
          1: "volgende jaar",
          "-1": "verlede jaar"
        },
        relativeTime: {
          future: {
            one: "oor {0} j.",
            other: "oor {0} j."
          },
          past: {
            one: "{0} j. gelede",
            other: "{0} j. gelede"
          }
        }
      },
      month: {
        displayName: "maand",
        relative: {
          0: "vandeesmaand",
          1: "volgende maand",
          "-1": "verlede maand"
        },
        relativeTime: {
          future: {
            one: "oor {0} maand",
            other: "oor {0} maande"
          },
          past: {
            one: "{0} maand gelede",
            other: "{0} maande gelede"
          }
        }
      },
      "month-short": {
        displayName: "md.",
        relative: {
          0: "vandeesmaand",
          1: "volgende maand",
          "-1": "verlede maand"
        },
        relativeTime: {
          future: {
            one: "oor {0} md.",
            other: "oor {0} md."
          },
          past: {
            one: "{0} md. gelede",
            other: "{0} md. gelede"
          }
        }
      },
      day: {
        displayName: "dag",
        relative: {
          0: "vandag",
          1: "môre",
          2: "oormôre",
          "-2": "eergister",
          "-1": "gister"
        },
        relativeTime: {
          future: {
            one: "oor {0} dag",
            other: "oor {0} dae"
          },
          past: {
            one: "{0} dag gelede",
            other: "{0} dae gelede"
          }
        }
      },
      "day-short": {
        displayName: "d.",
        relative: {
          0: "vandag",
          1: "môre",
          2: "oormôre",
          "-2": "eergister",
          "-1": "gister"
        },
        relativeTime: {
          future: {
            one: "oor {0} dag",
            other: "oor {0} dae"
          },
          past: {
            one: "{0} dag gelede",
            other: "{0} dae gelede"
          }
        }
      },
      hour: {
        displayName: "uur",
        relative: {
          0: "hierdie uur"
        },
        relativeTime: {
          future: {
            one: "oor {0} uur",
            other: "oor {0} uur"
          },
          past: {
            one: "{0} uur gelede",
            other: "{0} uur gelede"
          }
        }
      },
      "hour-short": {
        displayName: "u.",
        relative: {
          0: "hierdie uur"
        },
        relativeTime: {
          future: {
            one: "oor {0} u.",
            other: "oor {0} u."
          },
          past: {
            one: "{0} u. gelede",
            other: "{0} u. gelede"
          }
        }
      },
      minute: {
        displayName: "minuut",
        relative: {
          0: "hierdie minuut"
        },
        relativeTime: {
          future: {
            one: "oor {0} minuut",
            other: "oor {0} minute"
          },
          past: {
            one: "{0} minuut gelede",
            other: "{0} minute gelede"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "hierdie minuut"
        },
        relativeTime: {
          future: {
            one: "oor {0} min.",
            other: "oor {0} min."
          },
          past: {
            one: "{0} min. gelede",
            other: "{0} min. gelede"
          }
        }
      },
      second: {
        displayName: "sekonde",
        relative: {
          0: "nou"
        },
        relativeTime: {
          future: {
            one: "oor {0} sekonde",
            other: "oor {0} sekondes"
          },
          past: {
            one: "{0} sekonde gelede",
            other: "{0} sekondes gelede"
          }
        }
      },
      "second-short": {
        displayName: "s.",
        relative: {
          0: "nou"
        },
        relativeTime: {
          future: {
            one: "oor {0} s.",
            other: "oor {0} s."
          },
          past: {
            one: "{0} s. gelede",
            other: "{0} s. gelede"
          }
        }
      }
    }
  }, {
    locale: "af-NA",
    parentLocale: "af"
  }];
});

/***/ }),

/***/ "./src/locale-data/am.js":
/*!*******************************!*\
  !*** ./src/locale-data/am.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "am",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : e >= 0 && e <= 1 ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "ዓመት",
        relative: {
          0: "በዚህ ዓመት",
          1: "የሚቀጥለው ዓመት",
          "-1": "ያለፈው ዓመት"
        },
        relativeTime: {
          future: {
            one: "በ{0} ዓመታት ውስጥ",
            other: "በ{0} ዓመታት ውስጥ"
          },
          past: {
            one: "ከ{0} ዓመት በፊት",
            other: "ከ{0} ዓመታት በፊት"
          }
        }
      },
      "year-short": {
        displayName: "ዓመት",
        relative: {
          0: "በዚህ ዓመት",
          1: "የሚቀጥለው ዓመት",
          "-1": "ያለፈው ዓመት"
        },
        relativeTime: {
          future: {
            one: "በ{0} ዓመታት ውስጥ",
            other: "በ{0} ዓመታት ውስጥ"
          },
          past: {
            one: "ከ{0} ዓመታት በፊት",
            other: "ከ{0} ዓመታት በፊት"
          }
        }
      },
      month: {
        displayName: "ወር",
        relative: {
          0: "በዚህ ወር",
          1: "የሚቀጥለው ወር",
          "-1": "ያለፈው ወር"
        },
        relativeTime: {
          future: {
            one: "በ{0} ወር ውስጥ",
            other: "በ{0} ወራት ውስጥ"
          },
          past: {
            one: "ከ{0} ወር በፊት",
            other: "ከ{0} ወራት በፊት"
          }
        }
      },
      "month-short": {
        displayName: "ወር",
        relative: {
          0: "በዚህ ወር",
          1: "የሚቀጥለው ወር",
          "-1": "ያለፈው ወር"
        },
        relativeTime: {
          future: {
            one: "በ{0} ወራት ውስጥ",
            other: "በ{0} ወራት ውስጥ"
          },
          past: {
            one: "ከ{0} ወራት በፊት",
            other: "ከ{0} ወራት በፊት"
          }
        }
      },
      day: {
        displayName: "ቀን",
        relative: {
          0: "ዛሬ",
          1: "ነገ",
          2: "ከነገ ወዲያ",
          "-2": "ከትናንት ወዲያ",
          "-1": "ትናንት"
        },
        relativeTime: {
          future: {
            one: "በ{0} ቀን ውስጥ",
            other: "በ{0} ቀናት ውስጥ"
          },
          past: {
            one: "ከ{0} ቀን በፊት",
            other: "ከ{0} ቀናት በፊት"
          }
        }
      },
      "day-short": {
        displayName: "ቀን",
        relative: {
          0: "ዛሬ",
          1: "ነገ",
          2: "ከነገ ወዲያ",
          "-2": "ከትናንት ወዲያ",
          "-1": "ትላንትና"
        },
        relativeTime: {
          future: {
            one: "በ{0} ቀን ውስጥ",
            other: "በ{0} ቀኖች ውስጥ"
          },
          past: {
            one: "ከ {0} ቀን በፊት",
            other: "ከ{0} ቀኖች በፊት"
          }
        }
      },
      hour: {
        displayName: "ሰዓት",
        relative: {
          0: "ይህ ሰዓት"
        },
        relativeTime: {
          future: {
            one: "በ{0} ሰዓት ውስጥ",
            other: "በ{0} ሰዓቶች ውስጥ"
          },
          past: {
            one: "ከ{0} ሰዓት በፊት",
            other: "ከ{0} ሰዓቶች በፊት"
          }
        }
      },
      "hour-short": {
        displayName: "ሰዓት",
        relative: {
          0: "ይህ ሰዓት"
        },
        relativeTime: {
          future: {
            one: "በ{0} ሰዓት ውስጥ",
            other: "በ{0} ሰዓቶች ውስጥ"
          },
          past: {
            one: "ከ{0} ሰዓት በፊት",
            other: "ከ{0} ሰዓቶች በፊት"
          }
        }
      },
      minute: {
        displayName: "ደቂቃ",
        relative: {
          0: "ይህ ደቂቃ"
        },
        relativeTime: {
          future: {
            one: "በ{0} ደቂቃ ውስጥ",
            other: "በ{0} ደቂቃዎች ውስጥ"
          },
          past: {
            one: "ከ{0} ደቂቃ በፊት",
            other: "ከ{0} ደቂቃዎች በፊት"
          }
        }
      },
      "minute-short": {
        displayName: "ደቂቃ",
        relative: {
          0: "ይህ ደቂቃ"
        },
        relativeTime: {
          future: {
            one: "በ{0} ደቂቃ ውስጥ",
            other: "በ{0} ደቂቃዎች ውስጥ"
          },
          past: {
            one: "ከ{0} ደቂቃ በፊት",
            other: "ከ{0} ደቂቃዎች በፊት"
          }
        }
      },
      second: {
        displayName: "ሰከንድ",
        relative: {
          0: "አሁን"
        },
        relativeTime: {
          future: {
            one: "በ{0} ሰከንድ ውስጥ",
            other: "በ{0} ሰከንዶች ውስጥ"
          },
          past: {
            one: "ከ{0} ሰከንድ በፊት",
            other: "ከ{0} ሰከንዶች በፊት"
          }
        }
      },
      "second-short": {
        displayName: "ሰከንድ",
        relative: {
          0: "አሁን"
        },
        relativeTime: {
          future: {
            one: "በ{0} ሰከንድ ውስጥ",
            other: "በ{0} ሰከንዶች ውስጥ"
          },
          past: {
            one: "ከ{0} ሰከንድ በፊት",
            other: "ከ{0} ሰከንዶች በፊት"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/ar.js":
/*!*******************************!*\
  !*** ./src/locale-data/ar.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ar",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var o = String(e).split("."),
        r = Number(o[0]) == e && o[0].slice(-2);
      return a ? "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : r >= 3 && r <= 10 ? "few" : r >= 11 && r <= 99 ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "السنة",
        relative: {
          0: "السنة الحالية",
          1: "السنة القادمة",
          "-1": "السنة الماضية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} سنة",
            one: "خلال سنة واحدة",
            two: "خلال سنتين",
            few: "خلال {0} سنوات",
            many: "خلال {0} سنة",
            other: "خلال {0} سنة"
          },
          past: {
            zero: "قبل {0} سنة",
            one: "قبل سنة واحدة",
            two: "قبل سنتين",
            few: "قبل {0} سنوات",
            many: "قبل {0} سنة",
            other: "قبل {0} سنة"
          }
        }
      },
      "year-short": {
        displayName: "السنة",
        relative: {
          0: "السنة الحالية",
          1: "السنة القادمة",
          "-1": "السنة الماضية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} سنة",
            one: "خلال سنة واحدة",
            two: "خلال سنتين",
            few: "خلال {0} سنوات",
            many: "خلال {0} سنة",
            other: "خلال {0} سنة"
          },
          past: {
            zero: "قبل {0} سنة",
            one: "قبل سنة واحدة",
            two: "قبل سنتين",
            few: "قبل {0} سنوات",
            many: "قبل {0} سنة",
            other: "قبل {0} سنة"
          }
        }
      },
      month: {
        displayName: "الشهر",
        relative: {
          0: "هذا الشهر",
          1: "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} شهر",
            one: "خلال شهر واحد",
            two: "خلال شهرين",
            few: "خلال {0} أشهر",
            many: "خلال {0} شهرًا",
            other: "خلال {0} شهر"
          },
          past: {
            zero: "قبل {0} شهر",
            one: "قبل شهر واحد",
            two: "قبل شهرين",
            few: "قبل {0} أشهر",
            many: "قبل {0} شهرًا",
            other: "قبل {0} شهر"
          }
        }
      },
      "month-short": {
        displayName: "الشهر",
        relative: {
          0: "هذا الشهر",
          1: "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} شهر",
            one: "خلال شهر واحد",
            two: "خلال شهرين",
            few: "خلال {0} أشهر",
            many: "خلال {0} شهرًا",
            other: "خلال {0} شهر"
          },
          past: {
            zero: "قبل {0} شهر",
            one: "قبل شهر واحد",
            two: "قبل شهرين",
            few: "خلال {0} أشهر",
            many: "قبل {0} شهرًا",
            other: "قبل {0} شهر"
          }
        }
      },
      day: {
        displayName: "يوم",
        relative: {
          0: "اليوم",
          1: "غدًا",
          2: "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} يوم",
            one: "خلال يوم واحد",
            two: "خلال يومين",
            few: "خلال {0} أيام",
            many: "خلال {0} يومًا",
            other: "خلال {0} يوم"
          },
          past: {
            zero: "قبل {0} يوم",
            one: "قبل يوم واحد",
            two: "قبل يومين",
            few: "قبل {0} أيام",
            many: "قبل {0} يومًا",
            other: "قبل {0} يوم"
          }
        }
      },
      "day-short": {
        displayName: "يوم",
        relative: {
          0: "اليوم",
          1: "غدًا",
          2: "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} يوم",
            one: "خلال يوم واحد",
            two: "خلال يومين",
            few: "خلال {0} أيام",
            many: "خلال {0} يومًا",
            other: "خلال {0} يوم"
          },
          past: {
            zero: "قبل {0} يوم",
            one: "قبل يوم واحد",
            two: "قبل يومين",
            few: "قبل {0} أيام",
            many: "قبل {0} يومًا",
            other: "قبل {0} يوم"
          }
        }
      },
      hour: {
        displayName: "الساعات",
        relative: {
          0: "الساعة الحالية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ساعة",
            one: "خلال ساعة واحدة",
            two: "خلال ساعتين",
            few: "خلال {0} ساعات",
            many: "خلال {0} ساعة",
            other: "خلال {0} ساعة"
          },
          past: {
            zero: "قبل {0} ساعة",
            one: "قبل ساعة واحدة",
            two: "قبل ساعتين",
            few: "قبل {0} ساعات",
            many: "قبل {0} ساعة",
            other: "قبل {0} ساعة"
          }
        }
      },
      "hour-short": {
        displayName: "الساعات",
        relative: {
          0: "الساعة الحالية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ساعة",
            one: "خلال ساعة واحدة",
            two: "خلال ساعتين",
            few: "خلال {0} ساعات",
            many: "خلال {0} ساعة",
            other: "خلال {0} ساعة"
          },
          past: {
            zero: "قبل {0} ساعة",
            one: "قبل ساعة واحدة",
            two: "قبل ساعتين",
            few: "قبل {0} ساعات",
            many: "قبل {0} ساعة",
            other: "قبل {0} ساعة"
          }
        }
      },
      minute: {
        displayName: "الدقائق",
        relative: {
          0: "هذه الدقيقة"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} دقيقة",
            one: "خلال دقيقة واحدة",
            two: "خلال دقيقتين",
            few: "خلال {0} دقائق",
            many: "خلال {0} دقيقة",
            other: "خلال {0} دقيقة"
          },
          past: {
            zero: "قبل {0} دقيقة",
            one: "قبل دقيقة واحدة",
            two: "قبل دقيقتين",
            few: "قبل {0} دقائق",
            many: "قبل {0} دقيقة",
            other: "قبل {0} دقيقة"
          }
        }
      },
      "minute-short": {
        displayName: "الدقائق",
        relative: {
          0: "هذه الدقيقة"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} دقيقة",
            one: "خلال دقيقة واحدة",
            two: "خلال دقيقتين",
            few: "خلال {0} دقائق",
            many: "خلال {0} دقيقة",
            other: "خلال {0} دقيقة"
          },
          past: {
            zero: "قبل {0} دقيقة",
            one: "قبل دقيقة واحدة",
            two: "قبل دقيقتين",
            few: "قبل {0} دقائق",
            many: "قبل {0} دقيقة",
            other: "قبل {0} دقيقة"
          }
        }
      },
      second: {
        displayName: "الثواني",
        relative: {
          0: "الآن"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ثانية",
            one: "خلال ثانية واحدة",
            two: "خلال ثانيتين",
            few: "خلال {0} ثوانٍ",
            many: "خلال {0} ثانية",
            other: "خلال {0} ثانية"
          },
          past: {
            zero: "قبل {0} ثانية",
            one: "قبل ثانية واحدة",
            two: "قبل ثانيتين",
            few: "قبل {0} ثوانِ",
            many: "قبل {0} ثانية",
            other: "قبل {0} ثانية"
          }
        }
      },
      "second-short": {
        displayName: "الثواني",
        relative: {
          0: "الآن"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ثانية",
            one: "خلال ثانية واحدة",
            two: "خلال ثانيتين",
            few: "خلال {0} ثوانٍ",
            many: "خلال {0} ثانية",
            other: "خلال {0} ثانية"
          },
          past: {
            zero: "قبل {0} ثانية",
            one: "قبل ثانية واحدة",
            two: "قبل ثانيتين",
            few: "قبل {0} ثوانٍ",
            many: "قبل {0} ثانية",
            other: "قبل {0} ثانية"
          }
        }
      }
    }
  }, {
    locale: "ar-AE",
    parentLocale: "ar",
    fields: {
      year: {
        displayName: "السنة",
        relative: {
          0: "هذه السنة",
          1: "السنة التالية",
          "-1": "السنة الماضية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} سنة",
            one: "خلال سنة واحدة",
            two: "خلال سنتين",
            few: "خلال {0} سنوات",
            many: "خلال {0} سنة",
            other: "خلال {0} سنة"
          },
          past: {
            zero: "قبل {0} سنة",
            one: "قبل سنة واحدة",
            two: "قبل سنتين",
            few: "قبل {0} سنوات",
            many: "قبل {0} سنة",
            other: "قبل {0} سنة"
          }
        }
      },
      "year-short": {
        displayName: "السنة",
        relative: {
          0: "هذه السنة",
          1: "السنة التالية",
          "-1": "السنة الماضية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} سنة",
            one: "خلال سنة واحدة",
            two: "خلال سنتين",
            few: "خلال {0} سنوات",
            many: "خلال {0} سنة",
            other: "خلال {0} سنة"
          },
          past: {
            zero: "قبل {0} سنة",
            one: "قبل سنة واحدة",
            two: "قبل سنتين",
            few: "قبل {0} سنوات",
            many: "قبل {0} سنة",
            other: "قبل {0} سنة"
          }
        }
      },
      month: {
        displayName: "الشهر",
        relative: {
          0: "هذا الشهر",
          1: "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} شهر",
            one: "خلال شهر واحد",
            two: "خلال شهرين",
            few: "خلال {0} أشهر",
            many: "خلال {0} شهرًا",
            other: "خلال {0} شهر"
          },
          past: {
            zero: "قبل {0} شهر",
            one: "قبل شهر واحد",
            two: "قبل شهرين",
            few: "قبل {0} أشهر",
            many: "قبل {0} شهرًا",
            other: "قبل {0} شهر"
          }
        }
      },
      "month-short": {
        displayName: "الشهر",
        relative: {
          0: "هذا الشهر",
          1: "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} شهر",
            one: "خلال شهر واحد",
            two: "خلال شهرين",
            few: "خلال {0} أشهر",
            many: "خلال {0} شهرًا",
            other: "خلال {0} شهر"
          },
          past: {
            zero: "قبل {0} شهر",
            one: "قبل شهر واحد",
            two: "قبل شهرين",
            few: "خلال {0} أشهر",
            many: "قبل {0} شهرًا",
            other: "قبل {0} شهر"
          }
        }
      },
      day: {
        displayName: "يوم",
        relative: {
          0: "اليوم",
          1: "غدًا",
          2: "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} يوم",
            one: "خلال يوم واحد",
            two: "خلال يومين",
            few: "خلال {0} أيام",
            many: "خلال {0} يومًا",
            other: "خلال {0} يوم"
          },
          past: {
            zero: "قبل {0} يوم",
            one: "قبل يوم واحد",
            two: "قبل يومين",
            few: "قبل {0} أيام",
            many: "قبل {0} يومًا",
            other: "قبل {0} يوم"
          }
        }
      },
      "day-short": {
        displayName: "يوم",
        relative: {
          0: "اليوم",
          1: "غدًا",
          2: "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} يوم",
            one: "خلال يوم واحد",
            two: "خلال يومين",
            few: "خلال {0} أيام",
            many: "خلال {0} يومًا",
            other: "خلال {0} يوم"
          },
          past: {
            zero: "قبل {0} يوم",
            one: "قبل يوم واحد",
            two: "قبل يومين",
            few: "قبل {0} أيام",
            many: "قبل {0} يومًا",
            other: "قبل {0} يوم"
          }
        }
      },
      hour: {
        displayName: "الساعات",
        relative: {
          0: "الساعة الحالية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ساعة",
            one: "خلال ساعة واحدة",
            two: "خلال ساعتين",
            few: "خلال {0} ساعات",
            many: "خلال {0} ساعة",
            other: "خلال {0} ساعة"
          },
          past: {
            zero: "قبل {0} ساعة",
            one: "قبل ساعة واحدة",
            two: "قبل ساعتين",
            few: "قبل {0} ساعات",
            many: "قبل {0} ساعة",
            other: "قبل {0} ساعة"
          }
        }
      },
      "hour-short": {
        displayName: "الساعات",
        relative: {
          0: "الساعة الحالية"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ساعة",
            one: "خلال ساعة واحدة",
            two: "خلال ساعتين",
            few: "خلال {0} ساعات",
            many: "خلال {0} ساعة",
            other: "خلال {0} ساعة"
          },
          past: {
            zero: "قبل {0} ساعة",
            one: "قبل ساعة واحدة",
            two: "قبل ساعتين",
            few: "قبل {0} ساعات",
            many: "قبل {0} ساعة",
            other: "قبل {0} ساعة"
          }
        }
      },
      minute: {
        displayName: "الدقائق",
        relative: {
          0: "هذه الدقيقة"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} دقيقة",
            one: "خلال دقيقة واحدة",
            two: "خلال دقيقتين",
            few: "خلال {0} دقائق",
            many: "خلال {0} دقيقة",
            other: "خلال {0} دقيقة"
          },
          past: {
            zero: "قبل {0} دقيقة",
            one: "قبل دقيقة واحدة",
            two: "قبل دقيقتين",
            few: "قبل {0} دقائق",
            many: "قبل {0} دقيقة",
            other: "قبل {0} دقيقة"
          }
        }
      },
      "minute-short": {
        displayName: "الدقائق",
        relative: {
          0: "هذه الدقيقة"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} دقيقة",
            one: "خلال دقيقة واحدة",
            two: "خلال دقيقتين",
            few: "خلال {0} دقائق",
            many: "خلال {0} دقيقة",
            other: "خلال {0} دقيقة"
          },
          past: {
            zero: "قبل {0} دقيقة",
            one: "قبل دقيقة واحدة",
            two: "قبل دقيقتين",
            few: "قبل {0} دقائق",
            many: "قبل {0} دقيقة",
            other: "قبل {0} دقيقة"
          }
        }
      },
      second: {
        displayName: "الثواني",
        relative: {
          0: "الآن"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ثانية",
            one: "خلال ثانية واحدة",
            two: "خلال ثانيتين",
            few: "خلال {0} ثوانٍ",
            many: "خلال {0} ثانية",
            other: "خلال {0} ثانية"
          },
          past: {
            zero: "قبل {0} ثانية",
            one: "قبل ثانية واحدة",
            two: "قبل ثانيتين",
            few: "قبل {0} ثوانِ",
            many: "قبل {0} ثانية",
            other: "قبل {0} ثانية"
          }
        }
      },
      "second-short": {
        displayName: "الثواني",
        relative: {
          0: "الآن"
        },
        relativeTime: {
          future: {
            zero: "خلال {0} ثانية",
            one: "خلال ثانية واحدة",
            two: "خلال ثانيتين",
            few: "خلال {0} ثوانٍ",
            many: "خلال {0} ثانية",
            other: "خلال {0} ثانية"
          },
          past: {
            zero: "قبل {0} ثانية",
            one: "قبل ثانية واحدة",
            two: "قبل ثانيتين",
            few: "قبل {0} ثوانٍ",
            many: "قبل {0} ثانية",
            other: "قبل {0} ثانية"
          }
        }
      }
    }
  }, {
    locale: "ar-BH",
    parentLocale: "ar"
  }, {
    locale: "ar-DJ",
    parentLocale: "ar"
  }, {
    locale: "ar-DZ",
    parentLocale: "ar"
  }, {
    locale: "ar-EG",
    parentLocale: "ar"
  }, {
    locale: "ar-EH",
    parentLocale: "ar"
  }, {
    locale: "ar-ER",
    parentLocale: "ar"
  }, {
    locale: "ar-IL",
    parentLocale: "ar"
  }, {
    locale: "ar-IQ",
    parentLocale: "ar"
  }, {
    locale: "ar-JO",
    parentLocale: "ar"
  }, {
    locale: "ar-KM",
    parentLocale: "ar"
  }, {
    locale: "ar-KW",
    parentLocale: "ar"
  }, {
    locale: "ar-LB",
    parentLocale: "ar"
  }, {
    locale: "ar-LY",
    parentLocale: "ar"
  }, {
    locale: "ar-MA",
    parentLocale: "ar"
  }, {
    locale: "ar-MR",
    parentLocale: "ar"
  }, {
    locale: "ar-OM",
    parentLocale: "ar"
  }, {
    locale: "ar-PS",
    parentLocale: "ar"
  }, {
    locale: "ar-QA",
    parentLocale: "ar"
  }, {
    locale: "ar-SA",
    parentLocale: "ar"
  }, {
    locale: "ar-SD",
    parentLocale: "ar"
  }, {
    locale: "ar-SO",
    parentLocale: "ar"
  }, {
    locale: "ar-SS",
    parentLocale: "ar"
  }, {
    locale: "ar-SY",
    parentLocale: "ar"
  }, {
    locale: "ar-TD",
    parentLocale: "ar"
  }, {
    locale: "ar-TN",
    parentLocale: "ar"
  }, {
    locale: "ar-YE",
    parentLocale: "ar"
  }];
});

/***/ }),

/***/ "./src/locale-data/ast.js":
/*!********************************!*\
  !*** ./src/locale-data/ast.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ast",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var t = !String(e).split(".")[1];
      return a ? "other" : 1 == e && t ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "añu",
        relative: {
          0: "esti añu",
          1: "l’añu viniente",
          "-1": "l’añu pasáu"
        },
        relativeTime: {
          future: {
            one: "en {0} añu",
            other: "en {0} años"
          },
          past: {
            one: "hai {0} añu",
            other: "hai {0} años"
          }
        }
      },
      "year-short": {
        displayName: "añu",
        relative: {
          0: "esti añu",
          1: "l’añu vin.",
          "-1": "l’añu pas."
        },
        relativeTime: {
          future: {
            one: "en {0} añu",
            other: "en {0} años"
          },
          past: {
            one: "hai {0} añu",
            other: "hai {0} años"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "esti mes",
          1: "el mes viniente",
          "-1": "el mes pasáu"
        },
        relativeTime: {
          future: {
            one: "en {0} mes",
            other: "en {0} meses"
          },
          past: {
            one: "hai {0} mes",
            other: "hai {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "mes",
        relative: {
          0: "esti mes",
          1: "mes vin.",
          "-1": "mes pas."
        },
        relativeTime: {
          future: {
            one: "en {0} mes",
            other: "en {0} meses"
          },
          past: {
            one: "hai {0} mes",
            other: "hai {0} meses"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "güei",
          1: "mañana",
          2: "pasao mañana",
          "-2": "antayeri",
          "-1": "ayeri"
        },
        relativeTime: {
          future: {
            one: "en {0} día",
            other: "en {0} díes"
          },
          past: {
            one: "hai {0} día",
            other: "hai {0} díes"
          }
        }
      },
      "day-short": {
        displayName: "día",
        relative: {
          0: "güei",
          1: "mañana",
          2: "pasao mañana",
          "-2": "antayeri",
          "-1": "ayeri"
        },
        relativeTime: {
          future: {
            one: "en {0} día",
            other: "en {0} díes"
          },
          past: {
            one: "hai {0} día",
            other: "hai {0} díes"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "en {0} hora",
            other: "en {0} hores"
          },
          past: {
            one: "hai {0} hora",
            other: "hai {0} hores"
          }
        }
      },
      "hour-short": {
        displayName: "h.",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "en {0} h.",
            other: "en {0} h."
          },
          past: {
            one: "hai {0} h.",
            other: "hai {0} h."
          }
        }
      },
      minute: {
        displayName: "minutu",
        relative: {
          0: "esti minutu"
        },
        relativeTime: {
          future: {
            one: "en {0} minutu",
            other: "en {0} minutos"
          },
          past: {
            one: "hai {0} minutu",
            other: "hai {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "esti min."
        },
        relativeTime: {
          future: {
            one: "en {0} min.",
            other: "en {0} min."
          },
          past: {
            one: "hai {0} min.",
            other: "hai {0} min."
          }
        }
      },
      second: {
        displayName: "segundu",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "en {0} segundu",
            other: "en {0} segundos"
          },
          past: {
            one: "hai {0} segundu",
            other: "hai {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s.",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "en {0} seg.",
            other: "en {0} seg."
          },
          past: {
            one: "hai {0} seg.",
            other: "hai {0} seg."
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/az.js":
/*!*******************************!*\
  !*** ./src/locale-data/az.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "az",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = String(e).split(".")[0],
        r = a.slice(-1),
        i = a.slice(-2),
        o = a.slice(-3);
      return t ? 1 == r || 2 == r || 5 == r || 7 == r || 8 == r || 20 == i || 50 == i || 70 == i || 80 == i ? "one" : 3 == r || 4 == r || 100 == o || 200 == o || 300 == o || 400 == o || 500 == o || 600 == o || 700 == o || 800 == o || 900 == o ? "few" : 0 == a || 6 == r || 40 == i || 60 == i || 90 == i ? "many" : "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "İl",
        relative: {
          0: "bu il",
          1: "gələn il",
          "-1": "keçən il"
        },
        relativeTime: {
          future: {
            one: "{0} il ərzində",
            other: "{0} il ərzində"
          },
          past: {
            one: "{0} il öncə",
            other: "{0} il öncə"
          }
        }
      },
      "year-short": {
        displayName: "il",
        relative: {
          0: "bu il",
          1: "gələn il",
          "-1": "keçən il"
        },
        relativeTime: {
          future: {
            one: "{0} il ərzində",
            other: "{0} il ərzində"
          },
          past: {
            one: "{0} il öncə",
            other: "{0} il öncə"
          }
        }
      },
      month: {
        displayName: "Ay",
        relative: {
          0: "bu ay",
          1: "gələn ay",
          "-1": "keçən ay"
        },
        relativeTime: {
          future: {
            one: "{0} ay ərzində",
            other: "{0} ay ərzində"
          },
          past: {
            one: "{0} ay öncə",
            other: "{0} ay öncə"
          }
        }
      },
      "month-short": {
        displayName: "ay",
        relative: {
          0: "bu ay",
          1: "gələn ay",
          "-1": "keçən ay"
        },
        relativeTime: {
          future: {
            one: "{0} ay ərzində",
            other: "{0} ay ərzində"
          },
          past: {
            one: "{0} ay öncə",
            other: "{0} ay öncə"
          }
        }
      },
      day: {
        displayName: "Gün",
        relative: {
          0: "bu gün",
          1: "sabah",
          "-1": "dünən"
        },
        relativeTime: {
          future: {
            one: "{0} gün ərzində",
            other: "{0} gün ərzində"
          },
          past: {
            one: "{0} gün öncə",
            other: "{0} gün öncə"
          }
        }
      },
      "day-short": {
        displayName: "Gün",
        relative: {
          0: "bu gün",
          1: "sabah",
          "-1": "dünən"
        },
        relativeTime: {
          future: {
            one: "{0} gün ərzində",
            other: "{0} gün ərzində"
          },
          past: {
            one: "{0} gün öncə",
            other: "{0} gün öncə"
          }
        }
      },
      hour: {
        displayName: "Saat",
        relative: {
          0: "bu saat"
        },
        relativeTime: {
          future: {
            one: "{0} saat ərzində",
            other: "{0} saat ərzində"
          },
          past: {
            one: "{0} saat öncə",
            other: "{0} saat öncə"
          }
        }
      },
      "hour-short": {
        displayName: "saat",
        relative: {
          0: "bu saat"
        },
        relativeTime: {
          future: {
            one: "{0} saat ərzində",
            other: "{0} saat ərzində"
          },
          past: {
            one: "{0} saat öncə",
            other: "{0} saat öncə"
          }
        }
      },
      minute: {
        displayName: "Dəqiqə",
        relative: {
          0: "bu dəqiqə"
        },
        relativeTime: {
          future: {
            one: "{0} dəqiqə ərzində",
            other: "{0} dəqiqə ərzində"
          },
          past: {
            one: "{0} dəqiqə öncə",
            other: "{0} dəqiqə öncə"
          }
        }
      },
      "minute-short": {
        displayName: "dəq.",
        relative: {
          0: "bu dəqiqə"
        },
        relativeTime: {
          future: {
            one: "{0} dəqiqə ərzində",
            other: "{0} dəqiqə ərzində"
          },
          past: {
            one: "{0} dəqiqə öncə",
            other: "{0} dəqiqə öncə"
          }
        }
      },
      second: {
        displayName: "Saniyə",
        relative: {
          0: "indi"
        },
        relativeTime: {
          future: {
            one: "{0} saniyə ərzində",
            other: "{0} saniyə ərzində"
          },
          past: {
            one: "{0} saniyə öncə",
            other: "{0} saniyə öncə"
          }
        }
      },
      "second-short": {
        displayName: "san.",
        relative: {
          0: "indi"
        },
        relativeTime: {
          future: {
            one: "{0} saniyə ərzində",
            other: "{0} saniyə ərzində"
          },
          past: {
            one: "{0} saniyə öncə",
            other: "{0} saniyə öncə"
          }
        }
      }
    }
  }, {
    locale: "az-Arab",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "az-Cyrl",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "az-Latn",
    parentLocale: "az"
  }];
});

/***/ }),

/***/ "./src/locale-data/be.js":
/*!*******************************!*\
  !*** ./src/locale-data/be.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "be",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = String(e).split("."),
        r = Number(a[0]) == e,
        o = r && a[0].slice(-1),
        n = r && a[0].slice(-2);
      return t ? 2 != o && 3 != o || 12 == n || 13 == n ? "other" : "few" : 1 == o && 11 != n ? "one" : o >= 2 && o <= 4 && (n < 12 || n > 14) ? "few" : r && 0 == o || o >= 5 && o <= 9 || n >= 11 && n <= 14 ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "год",
        relative: {
          0: "у гэтым годзе",
          1: "у наступным годзе",
          "-1": "у мінулым годзе"
        },
        relativeTime: {
          future: {
            one: "праз {0} год",
            few: "праз {0} гады",
            many: "праз {0} гадоў",
            other: "праз {0} года"
          },
          past: {
            one: "{0} год таму",
            few: "{0} гады таму",
            many: "{0} гадоў таму",
            other: "{0} года таму"
          }
        }
      },
      "year-short": {
        displayName: "г.",
        relative: {
          0: "у гэтым годзе",
          1: "у наступным годзе",
          "-1": "у мінулым годзе"
        },
        relativeTime: {
          future: {
            one: "праз {0} г.",
            few: "праз {0} г.",
            many: "праз {0} г.",
            other: "праз {0} г."
          },
          past: {
            one: "{0} г. таму",
            few: "{0} г. таму",
            many: "{0} г. таму",
            other: "{0} г. таму"
          }
        }
      },
      month: {
        displayName: "месяц",
        relative: {
          0: "у гэтым месяцы",
          1: "у наступным месяцы",
          "-1": "у мінулым месяцы"
        },
        relativeTime: {
          future: {
            one: "праз {0} месяц",
            few: "праз {0} месяцы",
            many: "праз {0} месяцаў",
            other: "праз {0} месяца"
          },
          past: {
            one: "{0} месяц таму",
            few: "{0} месяцы таму",
            many: "{0} месяцаў таму",
            other: "{0} месяца таму"
          }
        }
      },
      "month-short": {
        displayName: "мес.",
        relative: {
          0: "у гэтым месяцы",
          1: "у наступным месяцы",
          "-1": "у мінулым месяцы"
        },
        relativeTime: {
          future: {
            one: "праз {0} мес.",
            few: "праз {0} мес.",
            many: "праз {0} мес.",
            other: "праз {0} мес."
          },
          past: {
            one: "{0} мес. таму",
            few: "{0} мес. таму",
            many: "{0} мес. таму",
            other: "{0} мес. таму"
          }
        }
      },
      day: {
        displayName: "дзень",
        relative: {
          0: "сёння",
          1: "заўтра",
          2: "паслязаўтра",
          "-2": "пазаўчора",
          "-1": "учора"
        },
        relativeTime: {
          future: {
            one: "праз {0} дзень",
            few: "праз {0} дні",
            many: "праз {0} дзён",
            other: "праз {0} дня"
          },
          past: {
            one: "{0} дзень таму",
            few: "{0} дні таму",
            many: "{0} дзён таму",
            other: "{0} дня таму"
          }
        }
      },
      "day-short": {
        displayName: "дзень",
        relative: {
          0: "сёння",
          1: "заўтра",
          2: "паслязаўтра",
          "-2": "пазаўчора",
          "-1": "учора"
        },
        relativeTime: {
          future: {
            one: "праз {0} дзень",
            few: "праз {0} дні",
            many: "праз {0} дзён",
            other: "праз {0} дня"
          },
          past: {
            one: "{0} дзень таму",
            few: "{0} дні таму",
            many: "{0} дзён таму",
            other: "{0} дня таму"
          }
        }
      },
      hour: {
        displayName: "гадзіна",
        relative: {
          0: "у гэту гадзіну"
        },
        relativeTime: {
          future: {
            one: "праз {0} гадзіну",
            few: "праз {0} гадзіны",
            many: "праз {0} гадзін",
            other: "праз {0} гадзіны"
          },
          past: {
            one: "{0} гадзіну таму",
            few: "{0} гадзіны таму",
            many: "{0} гадзін таму",
            other: "{0} гадзіны таму"
          }
        }
      },
      "hour-short": {
        displayName: "гадз",
        relative: {
          0: "у гэту гадзіну"
        },
        relativeTime: {
          future: {
            one: "праз {0} гадз",
            few: "праз {0} гадз",
            many: "праз {0} гадз",
            other: "праз {0} гадз"
          },
          past: {
            one: "{0} гадз таму",
            few: "{0} гадз таму",
            many: "{0} гадз таму",
            other: "{0} гадз таму"
          }
        }
      },
      minute: {
        displayName: "хвіліна",
        relative: {
          0: "у гэту хвіліну"
        },
        relativeTime: {
          future: {
            one: "праз {0} хвіліну",
            few: "праз {0} хвіліны",
            many: "праз {0} хвілін",
            other: "праз {0} хвіліны"
          },
          past: {
            one: "{0} хвіліну таму",
            few: "{0} хвіліны таму",
            many: "{0} хвілін таму",
            other: "{0} хвіліны таму"
          }
        }
      },
      "minute-short": {
        displayName: "хв",
        relative: {
          0: "у гэту хвіліну"
        },
        relativeTime: {
          future: {
            one: "праз {0} хв",
            few: "праз {0} хв",
            many: "праз {0} хв",
            other: "праз {0} хв"
          },
          past: {
            one: "{0} хв таму",
            few: "{0} хв таму",
            many: "{0} хв таму",
            other: "{0} хв таму"
          }
        }
      },
      second: {
        displayName: "секунда",
        relative: {
          0: "цяпер"
        },
        relativeTime: {
          future: {
            one: "праз {0} секунду",
            few: "праз {0} секунды",
            many: "праз {0} секунд",
            other: "праз {0} секунды"
          },
          past: {
            one: "{0} секунду таму",
            few: "{0} секунды таму",
            many: "{0} секунд таму",
            other: "{0} секунды таму"
          }
        }
      },
      "second-short": {
        displayName: "с",
        relative: {
          0: "цяпер"
        },
        relativeTime: {
          future: {
            one: "праз {0} с",
            few: "праз {0} с",
            many: "праз {0} с",
            other: "праз {0} с"
          },
          past: {
            one: "{0} с таму",
            few: "{0} с таму",
            many: "{0} с таму",
            other: "{0} с таму"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/bg.js":
/*!*******************************!*\
  !*** ./src/locale-data/bg.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "bg",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "година",
        relative: {
          0: "тази година",
          1: "следващата година",
          "-1": "миналата година"
        },
        relativeTime: {
          future: {
            one: "след {0} година",
            other: "след {0} години"
          },
          past: {
            one: "преди {0} година",
            other: "преди {0} години"
          }
        }
      },
      "year-short": {
        displayName: "г.",
        relative: {
          0: "т. г.",
          1: "следв. г.",
          "-1": "мин. г."
        },
        relativeTime: {
          future: {
            one: "след {0} г.",
            other: "след {0} г."
          },
          past: {
            one: "преди {0} г.",
            other: "преди {0} г."
          }
        }
      },
      month: {
        displayName: "месец",
        relative: {
          0: "този месец",
          1: "следващ месец",
          "-1": "предходен месец"
        },
        relativeTime: {
          future: {
            one: "след {0} месец",
            other: "след {0} месеца"
          },
          past: {
            one: "преди {0} месец",
            other: "преди {0} месеца"
          }
        }
      },
      "month-short": {
        displayName: "мес.",
        relative: {
          0: "този мес.",
          1: "следв. мес.",
          "-1": "мин. мес."
        },
        relativeTime: {
          future: {
            one: "след {0} м.",
            other: "след {0} м."
          },
          past: {
            one: "преди {0} м.",
            other: "преди {0} м."
          }
        }
      },
      day: {
        displayName: "ден",
        relative: {
          0: "днес",
          1: "утре",
          2: "вдругиден",
          "-2": "онзи ден",
          "-1": "вчера"
        },
        relativeTime: {
          future: {
            one: "след {0} ден",
            other: "след {0} дни"
          },
          past: {
            one: "преди {0} ден",
            other: "преди {0} дни"
          }
        }
      },
      "day-short": {
        displayName: "д",
        relative: {
          0: "днес",
          1: "утре",
          2: "вдругиден",
          "-2": "онзи ден",
          "-1": "вчера"
        },
        relativeTime: {
          future: {
            one: "след {0} ден",
            other: "след {0} дни"
          },
          past: {
            one: "преди {0} ден",
            other: "преди {0} дни"
          }
        }
      },
      hour: {
        displayName: "час",
        relative: {
          0: "в този час"
        },
        relativeTime: {
          future: {
            one: "след {0} час",
            other: "след {0} часа"
          },
          past: {
            one: "преди {0} час",
            other: "преди {0} часа"
          }
        }
      },
      "hour-short": {
        displayName: "ч",
        relative: {
          0: "в този час"
        },
        relativeTime: {
          future: {
            one: "след {0} ч",
            other: "след {0} ч"
          },
          past: {
            one: "преди {0} ч",
            other: "преди {0} ч"
          }
        }
      },
      minute: {
        displayName: "минута",
        relative: {
          0: "в тази минута"
        },
        relativeTime: {
          future: {
            one: "след {0} минута",
            other: "след {0} минути"
          },
          past: {
            one: "преди {0} минута",
            other: "преди {0} минути"
          }
        }
      },
      "minute-short": {
        displayName: "мин",
        relative: {
          0: "в тази минута"
        },
        relativeTime: {
          future: {
            one: "след {0} мин",
            other: "след {0} мин"
          },
          past: {
            one: "преди {0} мин",
            other: "преди {0} мин"
          }
        }
      },
      second: {
        displayName: "секунда",
        relative: {
          0: "сега"
        },
        relativeTime: {
          future: {
            one: "след {0} секунда",
            other: "след {0} секунди"
          },
          past: {
            one: "преди {0} секунда",
            other: "преди {0} секунди"
          }
        }
      },
      "second-short": {
        displayName: "сек",
        relative: {
          0: "сега"
        },
        relativeTime: {
          future: {
            one: "след {0} сек",
            other: "след {0} сек"
          },
          past: {
            one: "преди {0} сек",
            other: "преди {0} сек"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/bn.js":
/*!*******************************!*\
  !*** ./src/locale-data/bn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "bn",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? 1 == e || 5 == e || 7 == e || 8 == e || 9 == e || 10 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "বছর",
        relative: {
          0: "এই বছর",
          1: "পরের বছর",
          "-1": "গত বছর"
        },
        relativeTime: {
          future: {
            one: "{0} বছরে",
            other: "{0} বছরে"
          },
          past: {
            one: "{0} বছর পূর্বে",
            other: "{0} বছর পূর্বে"
          }
        }
      },
      "year-short": {
        displayName: "বছর",
        relative: {
          0: "এই বছর",
          1: "পরের বছর",
          "-1": "গত বছর"
        },
        relativeTime: {
          future: {
            one: "{0} বছরে",
            other: "{0} বছরে"
          },
          past: {
            one: "{0} বছর পূর্বে",
            other: "{0} বছর পূর্বে"
          }
        }
      },
      month: {
        displayName: "মাস",
        relative: {
          0: "এই মাস",
          1: "পরের মাস",
          "-1": "গত মাস"
        },
        relativeTime: {
          future: {
            one: "{0} মাসে",
            other: "{0} মাসে"
          },
          past: {
            one: "{0} মাস আগে",
            other: "{0} মাস আগে"
          }
        }
      },
      "month-short": {
        displayName: "মাস",
        relative: {
          0: "এই মাস",
          1: "পরের মাস",
          "-1": "গত মাস"
        },
        relativeTime: {
          future: {
            one: "{0} মাসে",
            other: "{0} মাসে"
          },
          past: {
            one: "{0} মাস আগে",
            other: "{0} মাস আগে"
          }
        }
      },
      day: {
        displayName: "দিন",
        relative: {
          0: "আজ",
          1: "আগামীকাল",
          2: "আগামী পরশু",
          "-2": "গত পরশু",
          "-1": "গতকাল"
        },
        relativeTime: {
          future: {
            one: "{0} দিনের মধ্যে",
            other: "{0} দিনের মধ্যে"
          },
          past: {
            one: "{0} দিন আগে",
            other: "{0} দিন আগে"
          }
        }
      },
      "day-short": {
        displayName: "দিন",
        relative: {
          0: "আজ",
          1: "আগামীকাল",
          2: "আগামী পরশু",
          "-2": "গত পরশু",
          "-1": "গতকাল"
        },
        relativeTime: {
          future: {
            one: "{0} দিনের মধ্যে",
            other: "{0} দিনের মধ্যে"
          },
          past: {
            one: "{0} দিন আগে",
            other: "{0} দিন আগে"
          }
        }
      },
      hour: {
        displayName: "ঘণ্টা",
        relative: {
          0: "এই ঘণ্টায়"
        },
        relativeTime: {
          future: {
            one: "{0} ঘন্টায়",
            other: "{0} ঘন্টায়"
          },
          past: {
            one: "{0} ঘন্টা আগে",
            other: "{0} ঘন্টা আগে"
          }
        }
      },
      "hour-short": {
        displayName: "ঘণ্টা",
        relative: {
          0: "এই ঘণ্টায়"
        },
        relativeTime: {
          future: {
            one: "{0} ঘন্টায়",
            other: "{0} ঘন্টায়"
          },
          past: {
            one: "{0} ঘন্টা আগে",
            other: "{0} ঘন্টা আগে"
          }
        }
      },
      minute: {
        displayName: "মিনিট",
        relative: {
          0: "এই মিনিট"
        },
        relativeTime: {
          future: {
            one: "{0} মিনিটে",
            other: "{0} মিনিটে"
          },
          past: {
            one: "{0} মিনিট আগে",
            other: "{0} মিনিট আগে"
          }
        }
      },
      "minute-short": {
        displayName: "মিনিট",
        relative: {
          0: "এই মিনিট"
        },
        relativeTime: {
          future: {
            one: "{0} মিনিটে",
            other: "{0} মিনিটে"
          },
          past: {
            one: "{0} মিনিট আগে",
            other: "{0} মিনিট আগে"
          }
        }
      },
      second: {
        displayName: "সেকেন্ড",
        relative: {
          0: "এখন"
        },
        relativeTime: {
          future: {
            one: "{0} সেকেন্ডে",
            other: "{0} সেকেন্ডে"
          },
          past: {
            one: "{0} সেকেন্ড পূর্বে",
            other: "{0} সেকেন্ড পূর্বে"
          }
        }
      },
      "second-short": {
        displayName: "সেকেন্ড",
        relative: {
          0: "এখন"
        },
        relativeTime: {
          future: {
            one: "{0} সেকেন্ডে",
            other: "{0} সেকেন্ডে"
          },
          past: {
            one: "{0} সেকেন্ড পূর্বে",
            other: "{0} সেকেন্ড পূর্বে"
          }
        }
      }
    }
  }, {
    locale: "bn-IN",
    parentLocale: "bn"
  }];
});

/***/ }),

/***/ "./src/locale-data/ca.js":
/*!*******************************!*\
  !*** ./src/locale-data/ca.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (a, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ca",
    pluralRuleFunction: function pluralRuleFunction(a, e) {
      var t = !String(a).split(".")[1];
      return e ? 1 == a || 3 == a ? "one" : 2 == a ? "two" : 4 == a ? "few" : "other" : 1 == a && t ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "any",
        relative: {
          0: "enguany",
          1: "l’any que ve",
          "-1": "l’any passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} any",
            other: "d’aquí a {0} anys"
          },
          past: {
            one: "fa {0} any",
            other: "fa {0} anys"
          }
        }
      },
      "year-short": {
        displayName: "any",
        relative: {
          0: "enguany",
          1: "l’any que ve",
          "-1": "l’any passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} any",
            other: "d’aquí a {0} anys"
          },
          past: {
            one: "fa {0} any",
            other: "fa {0} anys"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "aquest mes",
          1: "el mes que ve",
          "-1": "el mes passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} mes",
            other: "d’aquí a {0} mesos"
          },
          past: {
            one: "fa {0} mes",
            other: "fa {0} mesos"
          }
        }
      },
      "month-short": {
        displayName: "mes",
        relative: {
          0: "aquest mes",
          1: "el mes que ve",
          "-1": "el mes passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} mes",
            other: "d’aquí a {0} mesos"
          },
          past: {
            one: "fa {0} mes",
            other: "fa {0} mesos"
          }
        }
      },
      day: {
        displayName: "dia",
        relative: {
          0: "avui",
          1: "demà",
          2: "demà passat",
          "-2": "abans-d’ahir",
          "-1": "ahir"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} dia",
            other: "d’aquí a {0} dies"
          },
          past: {
            one: "fa {0} dia",
            other: "fa {0} dies"
          }
        }
      },
      "day-short": {
        displayName: "dia",
        relative: {
          0: "avui",
          1: "demà",
          2: "demà passat",
          "-2": "abans-d’ahir",
          "-1": "ahir"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} dia",
            other: "d’aquí a {0} dies"
          },
          past: {
            one: "fa {0} dia",
            other: "fa {0} dies"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "aquesta hora"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} hora",
            other: "d’aquí a {0} hores"
          },
          past: {
            one: "fa {0} hora",
            other: "fa {0} hores"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "aquesta hora"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} h",
            other: "d’aquí a {0} h"
          },
          past: {
            one: "fa {0} h",
            other: "fa {0} h"
          }
        }
      },
      minute: {
        displayName: "minut",
        relative: {
          0: "aquest minut"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} minut",
            other: "d’aquí a {0} minuts"
          },
          past: {
            one: "fa {0} minut",
            other: "fa {0} minuts"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "aquest minut"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} min",
            other: "d’aquí a {0} min"
          },
          past: {
            one: "fa {0} min",
            other: "fa {0} min"
          }
        }
      },
      second: {
        displayName: "segon",
        relative: {
          0: "ara"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} segon",
            other: "d’aquí a {0} segons"
          },
          past: {
            one: "fa {0} segon",
            other: "fa {0} segons"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ara"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} s",
            other: "d’aquí a {0} s"
          },
          past: {
            one: "fa {0} s",
            other: "fa {0} s"
          }
        }
      }
    }
  }, {
    locale: "ca-AD",
    parentLocale: "ca"
  }, {
    locale: "ca-ES-VALENCIA",
    parentLocale: "ca-ES",
    fields: {
      year: {
        displayName: "any",
        relative: {
          0: "enguany",
          1: "l’any que ve",
          "-1": "l’any passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} any",
            other: "d’aquí a {0} anys"
          },
          past: {
            one: "fa {0} any",
            other: "fa {0} anys"
          }
        }
      },
      "year-short": {
        displayName: "any",
        relative: {
          0: "enguany",
          1: "l’any que ve",
          "-1": "l’any passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} any",
            other: "d’aquí a {0} anys"
          },
          past: {
            one: "fa {0} any",
            other: "fa {0} anys"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "aquest mes",
          1: "el mes que ve",
          "-1": "el mes passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} mes",
            other: "d’aquí a {0} mesos"
          },
          past: {
            one: "fa {0} mes",
            other: "fa {0} mesos"
          }
        }
      },
      "month-short": {
        displayName: "mes",
        relative: {
          0: "aquest mes",
          1: "el mes que ve",
          "-1": "el mes passat"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} mes",
            other: "d’aquí a {0} mesos"
          },
          past: {
            one: "fa {0} mes",
            other: "fa {0} mesos"
          }
        }
      },
      day: {
        displayName: "dia",
        relative: {
          0: "avui",
          1: "demà",
          2: "demà passat",
          "-2": "abans-d’ahir",
          "-1": "ahir"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} dia",
            other: "d’aquí a {0} dies"
          },
          past: {
            one: "fa {0} dia",
            other: "fa {0} dies"
          }
        }
      },
      "day-short": {
        displayName: "dia",
        relative: {
          0: "avui",
          1: "demà",
          2: "demà passat",
          "-2": "abans-d’ahir",
          "-1": "ahir"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} dia",
            other: "d’aquí a {0} dies"
          },
          past: {
            one: "fa {0} dia",
            other: "fa {0} dies"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "aquesta hora"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} hora",
            other: "d’aquí a {0} hores"
          },
          past: {
            one: "fa {0} hora",
            other: "fa {0} hores"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "aquesta hora"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} h",
            other: "d’aquí a {0} h"
          },
          past: {
            one: "fa {0} h",
            other: "fa {0} h"
          }
        }
      },
      minute: {
        displayName: "minut",
        relative: {
          0: "aquest minut"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} minut",
            other: "d’aquí a {0} minuts"
          },
          past: {
            one: "fa {0} minut",
            other: "fa {0} minuts"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "aquest minut"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} min",
            other: "d’aquí a {0} min"
          },
          past: {
            one: "fa {0} min",
            other: "fa {0} min"
          }
        }
      },
      second: {
        displayName: "segon",
        relative: {
          0: "ara"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} segon",
            other: "d’aquí a {0} segons"
          },
          past: {
            one: "fa {0} segon",
            other: "fa {0} segons"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ara"
        },
        relativeTime: {
          future: {
            one: "d’aquí a {0} s",
            other: "d’aquí a {0} s"
          },
          past: {
            one: "fa {0} s",
            other: "fa {0} s"
          }
        }
      }
    }
  }, {
    locale: "ca-ES",
    parentLocale: "ca"
  }, {
    locale: "ca-FR",
    parentLocale: "ca"
  }, {
    locale: "ca-IT",
    parentLocale: "ca"
  }];
});

/***/ }),

/***/ "./src/locale-data/ckb.js":
/*!********************************!*\
  !*** ./src/locale-data/ckb.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ckb",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "ckb-IR",
    parentLocale: "ckb"
  }];
});

/***/ }),

/***/ "./src/locale-data/cs.js":
/*!*******************************!*\
  !*** ./src/locale-data/cs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "cs",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var n = String(e).split("."),
        t = n[0],
        m = !n[1];
      return a ? "other" : 1 == e && m ? "one" : t >= 2 && t <= 4 && m ? "few" : m ? "other" : "many";
    },
    fields: {
      year: {
        displayName: "rok",
        relative: {
          0: "tento rok",
          1: "příští rok",
          "-1": "minulý rok"
        },
        relativeTime: {
          future: {
            one: "za {0} rok",
            few: "za {0} roky",
            many: "za {0} roku",
            other: "za {0} let"
          },
          past: {
            one: "před {0} rokem",
            few: "před {0} lety",
            many: "před {0} roku",
            other: "před {0} lety"
          }
        }
      },
      "year-short": {
        displayName: "r.",
        relative: {
          0: "tento rok",
          1: "příští rok",
          "-1": "minulý rok"
        },
        relativeTime: {
          future: {
            one: "za {0} r.",
            few: "za {0} r.",
            many: "za {0} r.",
            other: "za {0} l."
          },
          past: {
            one: "před {0} r.",
            few: "před {0} r.",
            many: "před {0} r.",
            other: "před {0} l."
          }
        }
      },
      month: {
        displayName: "měsíc",
        relative: {
          0: "tento měsíc",
          1: "příští měsíc",
          "-1": "minulý měsíc"
        },
        relativeTime: {
          future: {
            one: "za {0} měsíc",
            few: "za {0} měsíce",
            many: "za {0} měsíce",
            other: "za {0} měsíců"
          },
          past: {
            one: "před {0} měsícem",
            few: "před {0} měsíci",
            many: "před {0} měsíce",
            other: "před {0} měsíci"
          }
        }
      },
      "month-short": {
        displayName: "měs.",
        relative: {
          0: "tento měs.",
          1: "příští měs.",
          "-1": "minulý měs."
        },
        relativeTime: {
          future: {
            one: "za {0} měs.",
            few: "za {0} měs.",
            many: "za {0} měs.",
            other: "za {0} měs."
          },
          past: {
            one: "před {0} měs.",
            few: "před {0} měs.",
            many: "před {0} měs.",
            other: "před {0} měs."
          }
        }
      },
      day: {
        displayName: "den",
        relative: {
          0: "dnes",
          1: "zítra",
          2: "pozítří",
          "-2": "předevčírem",
          "-1": "včera"
        },
        relativeTime: {
          future: {
            one: "za {0} den",
            few: "za {0} dny",
            many: "za {0} dne",
            other: "za {0} dní"
          },
          past: {
            one: "před {0} dnem",
            few: "před {0} dny",
            many: "před {0} dne",
            other: "před {0} dny"
          }
        }
      },
      "day-short": {
        displayName: "den",
        relative: {
          0: "dnes",
          1: "zítra",
          2: "pozítří",
          "-2": "předevčírem",
          "-1": "včera"
        },
        relativeTime: {
          future: {
            one: "za {0} den",
            few: "za {0} dny",
            many: "za {0} dne",
            other: "za {0} dní"
          },
          past: {
            one: "před {0} dnem",
            few: "před {0} dny",
            many: "před {0} dne",
            other: "před {0} dny"
          }
        }
      },
      hour: {
        displayName: "hodina",
        relative: {
          0: "tuto hodinu"
        },
        relativeTime: {
          future: {
            one: "za {0} hodinu",
            few: "za {0} hodiny",
            many: "za {0} hodiny",
            other: "za {0} hodin"
          },
          past: {
            one: "před {0} hodinou",
            few: "před {0} hodinami",
            many: "před {0} hodiny",
            other: "před {0} hodinami"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "tuto hodinu"
        },
        relativeTime: {
          future: {
            one: "za {0} h",
            few: "za {0} h",
            many: "za {0} h",
            other: "za {0} h"
          },
          past: {
            one: "před {0} h",
            few: "před {0} h",
            many: "před {0} h",
            other: "před {0} h"
          }
        }
      },
      minute: {
        displayName: "minuta",
        relative: {
          0: "tuto minutu"
        },
        relativeTime: {
          future: {
            one: "za {0} minutu",
            few: "za {0} minuty",
            many: "za {0} minuty",
            other: "za {0} minut"
          },
          past: {
            one: "před {0} minutou",
            few: "před {0} minutami",
            many: "před {0} minuty",
            other: "před {0} minutami"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "tuto minutu"
        },
        relativeTime: {
          future: {
            one: "za {0} min",
            few: "za {0} min",
            many: "za {0} min",
            other: "za {0} min"
          },
          past: {
            one: "před {0} min",
            few: "před {0} min",
            many: "před {0} min",
            other: "před {0} min"
          }
        }
      },
      second: {
        displayName: "sekunda",
        relative: {
          0: "nyní"
        },
        relativeTime: {
          future: {
            one: "za {0} sekundu",
            few: "za {0} sekundy",
            many: "za {0} sekundy",
            other: "za {0} sekund"
          },
          past: {
            one: "před {0} sekundou",
            few: "před {0} sekundami",
            many: "před {0} sekundy",
            other: "před {0} sekundami"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "nyní"
        },
        relativeTime: {
          future: {
            one: "za {0} s",
            few: "za {0} s",
            many: "za {0} s",
            other: "za {0} s"
          },
          past: {
            one: "před {0} s",
            few: "před {0} s",
            many: "před {0} s",
            other: "před {0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/cy.js":
/*!*******************************!*\
  !*** ./src/locale-data/cy.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "cy",
    pluralRuleFunction: function pluralRuleFunction(e, n) {
      return n ? 0 == e || 7 == e || 8 == e || 9 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e || 4 == e ? "few" : 5 == e || 6 == e ? "many" : "other" : 0 == e ? "zero" : 1 == e ? "one" : 2 == e ? "two" : 3 == e ? "few" : 6 == e ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "blwyddyn",
        relative: {
          0: "eleni",
          1: "blwyddyn nesaf",
          "-1": "llynedd"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} mlynedd",
            one: "ymhen blwyddyn",
            two: "ymhen {0} flynedd",
            few: "ymhen {0} blynedd",
            many: "ymhen {0} blynedd",
            other: "ymhen {0} mlynedd"
          },
          past: {
            zero: "{0} o flynyddoedd yn ôl",
            one: "blwyddyn yn ôl",
            two: "{0} flynedd yn ôl",
            few: "{0} blynedd yn ôl",
            many: "{0} blynedd yn ôl",
            other: "{0} o flynyddoedd yn ôl"
          }
        }
      },
      "year-short": {
        displayName: "bl.",
        relative: {
          0: "eleni",
          1: "blwyddyn nesaf",
          "-1": "llynedd"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} mlynedd",
            one: "ymhen blwyddyn",
            two: "ymhen {0} flynedd",
            few: "ymhen {0} blynedd",
            many: "ymhen {0} blynedd",
            other: "ymhen {0} mlynedd"
          },
          past: {
            zero: "{0} o flynyddoedd yn ôl",
            one: "blwyddyn yn ôl",
            two: "{0} flynedd yn ôl",
            few: "{0} blynedd yn ôl",
            many: "{0} blynedd yn ôl",
            other: "{0} o flynyddoedd yn ôl"
          }
        }
      },
      month: {
        displayName: "mis",
        relative: {
          0: "y mis hwn",
          1: "mis nesaf",
          "-1": "mis diwethaf"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} mis",
            one: "ymhen mis",
            two: "ymhen deufis",
            few: "ymhen {0} mis",
            many: "ymhen {0} mis",
            other: "ymhen {0} mis"
          },
          past: {
            zero: "{0} mis yn ôl",
            one: "{0} mis yn ôl",
            two: "{0} fis yn ôl",
            few: "{0} mis yn ôl",
            many: "{0} mis yn ôl",
            other: "{0} mis yn ôl"
          }
        }
      },
      "month-short": {
        displayName: "mis",
        relative: {
          0: "y mis hwn",
          1: "mis nesaf",
          "-1": "mis diwethaf"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} mis",
            one: "ymhen mis",
            two: "ymhen deufis",
            few: "ymhen {0} mis",
            many: "ymhen {0} mis",
            other: "ymhen {0} mis"
          },
          past: {
            zero: "{0} mis yn ôl",
            one: "{0} mis yn ôl",
            two: "deufis yn ôl",
            few: "{0} mis yn ôl",
            many: "{0} mis yn ôl",
            other: "{0} mis yn ôl"
          }
        }
      },
      day: {
        displayName: "diwrnod",
        relative: {
          0: "heddiw",
          1: "yfory",
          2: "drennydd",
          "-2": "echdoe",
          "-1": "ddoe"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} diwrnod",
            one: "ymhen diwrnod",
            two: "ymhen deuddydd",
            few: "ymhen {0} diwrnod",
            many: "ymhen {0} diwrnod",
            other: "ymhen {0} diwrnod"
          },
          past: {
            zero: "{0} diwrnod yn ôl",
            one: "{0} diwrnod yn ôl",
            two: "{0} ddiwrnod yn ôl",
            few: "{0} diwrnod yn ôl",
            many: "{0} diwrnod yn ôl",
            other: "{0} diwrnod yn ôl"
          }
        }
      },
      "day-short": {
        displayName: "diwrnod",
        relative: {
          0: "heddiw",
          1: "yfory",
          2: "drennydd",
          "-2": "echdoe",
          "-1": "ddoe"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} diwrnod",
            one: "ymhen diwrnod",
            two: "ymhen deuddydd",
            few: "ymhen {0} diwrnod",
            many: "ymhen {0} diwrnod",
            other: "ymhen {0} diwrnod"
          },
          past: {
            zero: "{0} diwrnod yn ôl",
            one: "{0} diwrnod yn ôl",
            two: "{0} ddiwrnod yn ôl",
            few: "{0} diwrnod yn ôl",
            many: "{0} diwrnod yn ôl",
            other: "{0} diwrnod yn ôl"
          }
        }
      },
      hour: {
        displayName: "awr",
        relative: {
          0: "yr awr hon"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} awr",
            one: "ymhen awr",
            two: "ymhen {0} awr",
            few: "ymhen {0} awr",
            many: "ymhen {0} awr",
            other: "ymhen {0} awr"
          },
          past: {
            zero: "{0} awr yn ôl",
            one: "{0} awr yn ôl",
            two: "{0} awr yn ôl",
            few: "{0} awr yn ôl",
            many: "{0} awr yn ôl",
            other: "{0} awr yn ôl"
          }
        }
      },
      "hour-short": {
        displayName: "awr",
        relative: {
          0: "yr awr hon"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} awr",
            one: "ymhen awr",
            two: "ymhen {0} awr",
            few: "ymhen {0} awr",
            many: "ymhen {0} awr",
            other: "ymhen {0} awr"
          },
          past: {
            zero: "{0} awr yn ôl",
            one: "awr yn ôl",
            two: "{0} awr yn ôl",
            few: "{0} awr yn ôl",
            many: "{0} awr yn ôl",
            other: "{0} awr yn ôl"
          }
        }
      },
      minute: {
        displayName: "munud",
        relative: {
          0: "y funud hon"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} munud",
            one: "ymhen {0} munud",
            two: "ymhen {0} munud",
            few: "ymhen {0} munud",
            many: "ymhen {0} munud",
            other: "ymhen {0} munud"
          },
          past: {
            zero: "{0} munud yn ôl",
            one: "{0} munud yn ôl",
            two: "{0} munud yn ôl",
            few: "{0} munud yn ôl",
            many: "{0} munud yn ôl",
            other: "{0} munud yn ôl"
          }
        }
      },
      "minute-short": {
        displayName: "mun.",
        relative: {
          0: "y funud hon"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} munud",
            one: "ymhen {0} mun.",
            two: "ymhen {0} fun.",
            few: "ymhen {0} munud",
            many: "ymhen {0} munud",
            other: "ymhen {0} munud"
          },
          past: {
            zero: "{0} munud yn ôl",
            one: "{0} munud yn ôl",
            two: "{0} fun. yn ôl",
            few: "{0} munud yn ôl",
            many: "{0} munud yn ôl",
            other: "{0} munud yn ôl"
          }
        }
      },
      second: {
        displayName: "eiliad",
        relative: {
          0: "nawr"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} eiliad",
            one: "ymhen {0} eiliad",
            two: "ymhen {0} eiliad",
            few: "ymhen {0} eiliad",
            many: "ymhen {0} eiliad",
            other: "ymhen {0} eiliad"
          },
          past: {
            zero: "{0} eiliad yn ôl",
            one: "{0} eiliad yn ôl",
            two: "{0} eiliad yn ôl",
            few: "{0} eiliad yn ôl",
            many: "{0} eiliad yn ôl",
            other: "{0} eiliad yn ôl"
          }
        }
      },
      "second-short": {
        displayName: "eiliad",
        relative: {
          0: "nawr"
        },
        relativeTime: {
          future: {
            zero: "ymhen {0} eiliad",
            one: "ymhen {0} eiliad",
            two: "ymhen {0} eiliad",
            few: "ymhen {0} eiliad",
            many: "ymhen {0} eiliad",
            other: "ymhen {0} eiliad"
          },
          past: {
            zero: "{0} eiliad yn ôl",
            one: "{0} eiliad yn ôl",
            two: "{0} eiliad yn ôl",
            few: "{0} eiliad yn ôl",
            many: "{0} eiliad yn ôl",
            other: "{0} eiliad yn ôl"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/da.js":
/*!*******************************!*\
  !*** ./src/locale-data/da.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, r) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "da",
    pluralRuleFunction: function pluralRuleFunction(e, r) {
      var t = String(e).split("."),
        o = t[0],
        i = Number(t[0]) == e;
      return r ? "other" : 1 != e && (i || 0 != o && 1 != o) ? "other" : "one";
    },
    fields: {
      year: {
        displayName: "år",
        relative: {
          0: "i år",
          1: "næste år",
          "-1": "sidste år"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "for {0} år siden",
            other: "for {0} år siden"
          }
        }
      },
      "year-short": {
        displayName: "år",
        relative: {
          0: "i år",
          1: "næste år",
          "-1": "sidste år"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "for {0} år siden",
            other: "for {0} år siden"
          }
        }
      },
      month: {
        displayName: "måned",
        relative: {
          0: "denne måned",
          1: "næste måned",
          "-1": "sidste måned"
        },
        relativeTime: {
          future: {
            one: "om {0} måned",
            other: "om {0} måneder"
          },
          past: {
            one: "for {0} måned siden",
            other: "for {0} måneder siden"
          }
        }
      },
      "month-short": {
        displayName: "md.",
        relative: {
          0: "denne md.",
          1: "næste md.",
          "-1": "sidste md."
        },
        relativeTime: {
          future: {
            one: "om {0} md.",
            other: "om {0} mdr."
          },
          past: {
            one: "for {0} md. siden",
            other: "for {0} mdr. siden"
          }
        }
      },
      day: {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgen",
          2: "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} dag",
            other: "om {0} dage"
          },
          past: {
            one: "for {0} dag siden",
            other: "for {0} dage siden"
          }
        }
      },
      "day-short": {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgen",
          2: "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} dag",
            other: "om {0} dage"
          },
          past: {
            one: "for {0} dag siden",
            other: "for {0} dage siden"
          }
        }
      },
      hour: {
        displayName: "time",
        relative: {
          0: "i den kommende time"
        },
        relativeTime: {
          future: {
            one: "om {0} time",
            other: "om {0} timer"
          },
          past: {
            one: "for {0} time siden",
            other: "for {0} timer siden"
          }
        }
      },
      "hour-short": {
        displayName: "t.",
        relative: {
          0: "i den kommende time"
        },
        relativeTime: {
          future: {
            one: "om {0} time",
            other: "om {0} timer"
          },
          past: {
            one: "for {0} time siden",
            other: "for {0} timer siden"
          }
        }
      },
      minute: {
        displayName: "minut",
        relative: {
          0: "i det kommende minut"
        },
        relativeTime: {
          future: {
            one: "om {0} minut",
            other: "om {0} minutter"
          },
          past: {
            one: "for {0} minut siden",
            other: "for {0} minutter siden"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "i det kommende minut"
        },
        relativeTime: {
          future: {
            one: "om {0} min.",
            other: "om {0} min."
          },
          past: {
            one: "for {0} min. siden",
            other: "for {0} min. siden"
          }
        }
      },
      second: {
        displayName: "sekund",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "om {0} sekund",
            other: "om {0} sekunder"
          },
          past: {
            one: "for {0} sekund siden",
            other: "for {0} sekunder siden"
          }
        }
      },
      "second-short": {
        displayName: "sek.",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "om {0} sek.",
            other: "om {0} sek."
          },
          past: {
            one: "for {0} sek. siden",
            other: "for {0} sek. siden"
          }
        }
      }
    }
  }, {
    locale: "da-GL",
    parentLocale: "da"
  }];
});

/***/ }),

/***/ "./src/locale-data/de.js":
/*!*******************************!*\
  !*** ./src/locale-data/de.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "de",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var n = !String(e).split(".")[1];
      return t ? "other" : 1 == e && n ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Jahr",
        relative: {
          0: "dieses Jahr",
          1: "nächstes Jahr",
          "-1": "letztes Jahr"
        },
        relativeTime: {
          future: {
            one: "in {0} Jahr",
            other: "in {0} Jahren"
          },
          past: {
            one: "vor {0} Jahr",
            other: "vor {0} Jahren"
          }
        }
      },
      "year-short": {
        displayName: "Jahr",
        relative: {
          0: "dieses Jahr",
          1: "nächstes Jahr",
          "-1": "letztes Jahr"
        },
        relativeTime: {
          future: {
            one: "in {0} Jahr",
            other: "in {0} Jahren"
          },
          past: {
            one: "vor {0} Jahr",
            other: "vor {0} Jahren"
          }
        }
      },
      month: {
        displayName: "Monat",
        relative: {
          0: "diesen Monat",
          1: "nächsten Monat",
          "-1": "letzten Monat"
        },
        relativeTime: {
          future: {
            one: "in {0} Monat",
            other: "in {0} Monaten"
          },
          past: {
            one: "vor {0} Monat",
            other: "vor {0} Monaten"
          }
        }
      },
      "month-short": {
        displayName: "Monat",
        relative: {
          0: "diesen Monat",
          1: "nächsten Monat",
          "-1": "letzten Monat"
        },
        relativeTime: {
          future: {
            one: "in {0} Monat",
            other: "in {0} Monaten"
          },
          past: {
            one: "vor {0} Monat",
            other: "vor {0} Monaten"
          }
        }
      },
      day: {
        displayName: "Tag",
        relative: {
          0: "heute",
          1: "morgen",
          2: "übermorgen",
          "-2": "vorgestern",
          "-1": "gestern"
        },
        relativeTime: {
          future: {
            one: "in {0} Tag",
            other: "in {0} Tagen"
          },
          past: {
            one: "vor {0} Tag",
            other: "vor {0} Tagen"
          }
        }
      },
      "day-short": {
        displayName: "Tag",
        relative: {
          0: "heute",
          1: "morgen",
          2: "übermorgen",
          "-2": "vorgestern",
          "-1": "gestern"
        },
        relativeTime: {
          future: {
            one: "in {0} Tag",
            other: "in {0} Tagen"
          },
          past: {
            one: "vor {0} Tag",
            other: "vor {0} Tagen"
          }
        }
      },
      hour: {
        displayName: "Stunde",
        relative: {
          0: "in dieser Stunde"
        },
        relativeTime: {
          future: {
            one: "in {0} Stunde",
            other: "in {0} Stunden"
          },
          past: {
            one: "vor {0} Stunde",
            other: "vor {0} Stunden"
          }
        }
      },
      "hour-short": {
        displayName: "Std.",
        relative: {
          0: "in dieser Stunde"
        },
        relativeTime: {
          future: {
            one: "in {0} Std.",
            other: "in {0} Std."
          },
          past: {
            one: "vor {0} Std.",
            other: "vor {0} Std."
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "in dieser Minute"
        },
        relativeTime: {
          future: {
            one: "in {0} Minute",
            other: "in {0} Minuten"
          },
          past: {
            one: "vor {0} Minute",
            other: "vor {0} Minuten"
          }
        }
      },
      "minute-short": {
        displayName: "Min.",
        relative: {
          0: "in dieser Minute"
        },
        relativeTime: {
          future: {
            one: "in {0} Min.",
            other: "in {0} Min."
          },
          past: {
            one: "vor {0} Min.",
            other: "vor {0} Min."
          }
        }
      },
      second: {
        displayName: "Sekunde",
        relative: {
          0: "jetzt"
        },
        relativeTime: {
          future: {
            one: "in {0} Sekunde",
            other: "in {0} Sekunden"
          },
          past: {
            one: "vor {0} Sekunde",
            other: "vor {0} Sekunden"
          }
        }
      },
      "second-short": {
        displayName: "Sek.",
        relative: {
          0: "jetzt"
        },
        relativeTime: {
          future: {
            one: "in {0} Sek.",
            other: "in {0} Sek."
          },
          past: {
            one: "vor {0} Sek.",
            other: "vor {0} Sek."
          }
        }
      }
    }
  }, {
    locale: "de-AT",
    parentLocale: "de"
  }, {
    locale: "de-BE",
    parentLocale: "de"
  }, {
    locale: "de-CH",
    parentLocale: "de"
  }, {
    locale: "de-IT",
    parentLocale: "de"
  }, {
    locale: "de-LI",
    parentLocale: "de"
  }, {
    locale: "de-LU",
    parentLocale: "de"
  }];
});

/***/ }),

/***/ "./src/locale-data/el.js":
/*!*******************************!*\
  !*** ./src/locale-data/el.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "el",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "έτος",
        relative: {
          0: "φέτος",
          1: "επόμενο έτος",
          "-1": "πέρσι"
        },
        relativeTime: {
          future: {
            one: "σε {0} έτος",
            other: "σε {0} έτη"
          },
          past: {
            one: "πριν από {0} έτος",
            other: "πριν από {0} έτη"
          }
        }
      },
      "year-short": {
        displayName: "έτ.",
        relative: {
          0: "φέτος",
          1: "επόμενο έτος",
          "-1": "πέρσι"
        },
        relativeTime: {
          future: {
            one: "σε {0} έτος",
            other: "σε {0} έτη"
          },
          past: {
            one: "πριν από {0} έτος",
            other: "πριν από {0} έτη"
          }
        }
      },
      month: {
        displayName: "μήνας",
        relative: {
          0: "τρέχων μήνας",
          1: "επόμενος μήνας",
          "-1": "προηγούμενος μήνας"
        },
        relativeTime: {
          future: {
            one: "σε {0} μήνα",
            other: "σε {0} μήνες"
          },
          past: {
            one: "πριν από {0} μήνα",
            other: "πριν από {0} μήνες"
          }
        }
      },
      "month-short": {
        displayName: "μήν.",
        relative: {
          0: "τρέχων μήνας",
          1: "επόμενος μήνας",
          "-1": "προηγούμενος μήνας"
        },
        relativeTime: {
          future: {
            one: "σε {0} μήνα",
            other: "σε {0} μήνες"
          },
          past: {
            one: "πριν από {0} μήνα",
            other: "πριν από {0} μήνες"
          }
        }
      },
      day: {
        displayName: "ημέρα",
        relative: {
          0: "σήμερα",
          1: "αύριο",
          2: "μεθαύριο",
          "-2": "προχθές",
          "-1": "χθες"
        },
        relativeTime: {
          future: {
            one: "σε {0} ημέρα",
            other: "σε {0} ημέρες"
          },
          past: {
            one: "πριν από {0} ημέρα",
            other: "πριν από {0} ημέρες"
          }
        }
      },
      "day-short": {
        displayName: "ημ.",
        relative: {
          0: "σήμερα",
          1: "αύριο",
          2: "μεθαύριο",
          "-2": "προχθές",
          "-1": "χθες"
        },
        relativeTime: {
          future: {
            one: "σε {0} ημ.",
            other: "σε {0} ημ."
          },
          past: {
            one: "πριν από {0} ημ.",
            other: "πριν από {0} ημ."
          }
        }
      },
      hour: {
        displayName: "ώρα",
        relative: {
          0: "τρέχουσα ώρα"
        },
        relativeTime: {
          future: {
            one: "σε {0} ώρα",
            other: "σε {0} ώρες"
          },
          past: {
            one: "πριν από {0} ώρα",
            other: "πριν από {0} ώρες"
          }
        }
      },
      "hour-short": {
        displayName: "ώ.",
        relative: {
          0: "τρέχουσα ώρα"
        },
        relativeTime: {
          future: {
            one: "σε {0} ώ.",
            other: "σε {0} ώ."
          },
          past: {
            one: "πριν από {0} ώ.",
            other: "πριν από {0} ώ."
          }
        }
      },
      minute: {
        displayName: "λεπτό",
        relative: {
          0: "τρέχον λεπτό"
        },
        relativeTime: {
          future: {
            one: "σε {0} λεπτό",
            other: "σε {0} λεπτά"
          },
          past: {
            one: "πριν από {0} λεπτό",
            other: "πριν από {0} λεπτά"
          }
        }
      },
      "minute-short": {
        displayName: "λεπ.",
        relative: {
          0: "τρέχον λεπτό"
        },
        relativeTime: {
          future: {
            one: "σε {0} λεπ.",
            other: "σε {0} λεπ."
          },
          past: {
            one: "πριν από {0} λεπ.",
            other: "πριν από {0} λεπ."
          }
        }
      },
      second: {
        displayName: "δευτερόλεπτο",
        relative: {
          0: "τώρα"
        },
        relativeTime: {
          future: {
            one: "σε {0} δευτερόλεπτο",
            other: "σε {0} δευτερόλεπτα"
          },
          past: {
            one: "πριν από {0} δευτερόλεπτο",
            other: "πριν από {0} δευτερόλεπτα"
          }
        }
      },
      "second-short": {
        displayName: "δευτ.",
        relative: {
          0: "τώρα"
        },
        relativeTime: {
          future: {
            one: "σε {0} δευτ.",
            other: "σε {0} δευτ."
          },
          past: {
            one: "πριν από {0} δευτ.",
            other: "πριν από {0} δευτ."
          }
        }
      }
    }
  }, {
    locale: "el-CY",
    parentLocale: "el"
  }];
});

/***/ }),

/***/ "./src/locale-data/en.js":
/*!*******************************!*\
  !*** ./src/locale-data/en.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "en",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var t = String(e).split("."),
        o = !t[1],
        n = Number(t[0]) == e,
        r = n && t[0].slice(-1),
        i = n && t[0].slice(-2);
      return a ? 1 == r && 11 != i ? "one" : 2 == r && 12 != i ? "two" : 3 == r && 13 != i ? "few" : "other" : 1 == e && o ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr.",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr.",
            other: "in {0} yr."
          },
          past: {
            one: "{0} yr. ago",
            other: "{0} yr. ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mo."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mo. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr.",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr.",
            other: "in {0} hr."
          },
          past: {
            one: "{0} hr. ago",
            other: "{0} hr. ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} min."
          },
          past: {
            one: "{0} min. ago",
            other: "{0} min. ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} sec."
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} sec. ago"
          }
        }
      }
    }
  }, {
    locale: "en-001",
    parentLocale: "en",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yr"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yr ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo",
            other: "in {0} mo"
          },
          past: {
            one: "{0} mo ago",
            other: "{0} mo ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hr"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hr ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min",
            other: "in {0} min"
          },
          past: {
            one: "{0} min ago",
            other: "{0} min ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec",
            other: "in {0} sec"
          },
          past: {
            one: "{0} sec ago",
            other: "{0} sec ago"
          }
        }
      }
    }
  }, {
    locale: "en-150",
    parentLocale: "en-001"
  }, {
    locale: "en-AG",
    parentLocale: "en-001"
  }, {
    locale: "en-AI",
    parentLocale: "en-001"
  }, {
    locale: "en-AS",
    parentLocale: "en"
  }, {
    locale: "en-AT",
    parentLocale: "en-150"
  }, {
    locale: "en-AU",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yrs"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yrs ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mo."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mo. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hrs"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hrs ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} mins"
          },
          past: {
            one: "{0} min. ago",
            other: "{0} mins ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} secs"
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} secs ago"
          }
        }
      }
    }
  }, {
    locale: "en-BB",
    parentLocale: "en-001"
  }, {
    locale: "en-BE",
    parentLocale: "en-001"
  }, {
    locale: "en-BI",
    parentLocale: "en"
  }, {
    locale: "en-BM",
    parentLocale: "en-001"
  }, {
    locale: "en-BS",
    parentLocale: "en-001"
  }, {
    locale: "en-BW",
    parentLocale: "en-001"
  }, {
    locale: "en-BZ",
    parentLocale: "en-001"
  }, {
    locale: "en-CA",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr.",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr.",
            other: "in {0} yrs."
          },
          past: {
            one: "{0} yr. ago",
            other: "{0} yrs. ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mos."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mos. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr.",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr.",
            other: "in {0} hrs."
          },
          past: {
            one: "{0} hr. ago",
            other: "{0} hrs. ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} mins."
          },
          past: {
            one: "{0} min. ago",
            other: "{0} mins. ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} secs."
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} secs. ago"
          }
        }
      }
    }
  }, {
    locale: "en-CC",
    parentLocale: "en-001"
  }, {
    locale: "en-CH",
    parentLocale: "en-150"
  }, {
    locale: "en-CK",
    parentLocale: "en-001"
  }, {
    locale: "en-CM",
    parentLocale: "en-001"
  }, {
    locale: "en-CX",
    parentLocale: "en-001"
  }, {
    locale: "en-CY",
    parentLocale: "en-001"
  }, {
    locale: "en-DE",
    parentLocale: "en-150"
  }, {
    locale: "en-DG",
    parentLocale: "en-001"
  }, {
    locale: "en-DK",
    parentLocale: "en-150"
  }, {
    locale: "en-DM",
    parentLocale: "en-001"
  }, {
    locale: "en-Dsrt",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "en-ER",
    parentLocale: "en-001"
  }, {
    locale: "en-FI",
    parentLocale: "en-150"
  }, {
    locale: "en-FJ",
    parentLocale: "en-001"
  }, {
    locale: "en-FK",
    parentLocale: "en-001"
  }, {
    locale: "en-FM",
    parentLocale: "en-001"
  }, {
    locale: "en-GB",
    parentLocale: "en-001"
  }, {
    locale: "en-GD",
    parentLocale: "en-001"
  }, {
    locale: "en-GG",
    parentLocale: "en-001"
  }, {
    locale: "en-GH",
    parentLocale: "en-001"
  }, {
    locale: "en-GI",
    parentLocale: "en-001"
  }, {
    locale: "en-GM",
    parentLocale: "en-001"
  }, {
    locale: "en-GU",
    parentLocale: "en"
  }, {
    locale: "en-GY",
    parentLocale: "en-001"
  }, {
    locale: "en-HK",
    parentLocale: "en-001"
  }, {
    locale: "en-IE",
    parentLocale: "en-001"
  }, {
    locale: "en-IL",
    parentLocale: "en-001"
  }, {
    locale: "en-IM",
    parentLocale: "en-001"
  }, {
    locale: "en-IN",
    parentLocale: "en-001"
  }, {
    locale: "en-IO",
    parentLocale: "en-001"
  }, {
    locale: "en-JE",
    parentLocale: "en-001"
  }, {
    locale: "en-JM",
    parentLocale: "en-001"
  }, {
    locale: "en-KE",
    parentLocale: "en-001"
  }, {
    locale: "en-KI",
    parentLocale: "en-001"
  }, {
    locale: "en-KN",
    parentLocale: "en-001"
  }, {
    locale: "en-KY",
    parentLocale: "en-001"
  }, {
    locale: "en-LC",
    parentLocale: "en-001"
  }, {
    locale: "en-LR",
    parentLocale: "en-001"
  }, {
    locale: "en-LS",
    parentLocale: "en-001"
  }, {
    locale: "en-MG",
    parentLocale: "en-001"
  }, {
    locale: "en-MH",
    parentLocale: "en"
  }, {
    locale: "en-MO",
    parentLocale: "en-001"
  }, {
    locale: "en-MP",
    parentLocale: "en"
  }, {
    locale: "en-MS",
    parentLocale: "en-001"
  }, {
    locale: "en-MT",
    parentLocale: "en-001"
  }, {
    locale: "en-MU",
    parentLocale: "en-001"
  }, {
    locale: "en-MW",
    parentLocale: "en-001"
  }, {
    locale: "en-MY",
    parentLocale: "en-001"
  }, {
    locale: "en-NA",
    parentLocale: "en-001"
  }, {
    locale: "en-NF",
    parentLocale: "en-001"
  }, {
    locale: "en-NG",
    parentLocale: "en-001"
  }, {
    locale: "en-NL",
    parentLocale: "en-150"
  }, {
    locale: "en-NR",
    parentLocale: "en-001"
  }, {
    locale: "en-NU",
    parentLocale: "en-001"
  }, {
    locale: "en-NZ",
    parentLocale: "en-001"
  }, {
    locale: "en-PG",
    parentLocale: "en-001"
  }, {
    locale: "en-PH",
    parentLocale: "en-001"
  }, {
    locale: "en-PK",
    parentLocale: "en-001"
  }, {
    locale: "en-PN",
    parentLocale: "en-001"
  }, {
    locale: "en-PR",
    parentLocale: "en"
  }, {
    locale: "en-PW",
    parentLocale: "en-001"
  }, {
    locale: "en-RW",
    parentLocale: "en-001"
  }, {
    locale: "en-SB",
    parentLocale: "en-001"
  }, {
    locale: "en-SC",
    parentLocale: "en-001"
  }, {
    locale: "en-SD",
    parentLocale: "en-001"
  }, {
    locale: "en-SE",
    parentLocale: "en-150"
  }, {
    locale: "en-SG",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr",
          1: "next yr",
          "-1": "last yr"
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yr"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yr ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mth",
        relative: {
          0: "this mth",
          1: "next mth",
          "-1": "last mth"
        },
        relativeTime: {
          future: {
            one: "in {0} mth",
            other: "in {0} mth"
          },
          past: {
            one: "{0} mth ago",
            other: "{0} mth ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hr"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hr ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min",
            other: "in {0} min"
          },
          past: {
            one: "{0} min ago",
            other: "{0} min ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec",
            other: "in {0} sec"
          },
          past: {
            one: "{0} sec ago",
            other: "{0} sec ago"
          }
        }
      }
    }
  }, {
    locale: "en-SH",
    parentLocale: "en-001"
  }, {
    locale: "en-SI",
    parentLocale: "en-150"
  }, {
    locale: "en-SL",
    parentLocale: "en-001"
  }, {
    locale: "en-SS",
    parentLocale: "en-001"
  }, {
    locale: "en-SX",
    parentLocale: "en-001"
  }, {
    locale: "en-SZ",
    parentLocale: "en-001"
  }, {
    locale: "en-Shaw",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "en-TC",
    parentLocale: "en-001"
  }, {
    locale: "en-TK",
    parentLocale: "en-001"
  }, {
    locale: "en-TO",
    parentLocale: "en-001"
  }, {
    locale: "en-TT",
    parentLocale: "en-001"
  }, {
    locale: "en-TV",
    parentLocale: "en-001"
  }, {
    locale: "en-TZ",
    parentLocale: "en-001"
  }, {
    locale: "en-UG",
    parentLocale: "en-001"
  }, {
    locale: "en-UM",
    parentLocale: "en"
  }, {
    locale: "en-US",
    parentLocale: "en"
  }, {
    locale: "en-VC",
    parentLocale: "en-001"
  }, {
    locale: "en-VG",
    parentLocale: "en-001"
  }, {
    locale: "en-VI",
    parentLocale: "en"
  }, {
    locale: "en-VU",
    parentLocale: "en-001"
  }, {
    locale: "en-WS",
    parentLocale: "en-001"
  }, {
    locale: "en-ZA",
    parentLocale: "en-001"
  }, {
    locale: "en-ZM",
    parentLocale: "en-001"
  }, {
    locale: "en-ZW",
    parentLocale: "en-001"
  }];
});

/***/ }),

/***/ "./src/locale-data/eo.js":
/*!*******************************!*\
  !*** ./src/locale-data/eo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "eo",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/es.js":
/*!*******************************!*\
  !*** ./src/locale-data/es.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "es",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return a ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "año",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} año",
            other: "dentro de {0} años"
          },
          past: {
            one: "hace {0} año",
            other: "hace {0} años"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} a",
            other: "dentro de {0} a"
          },
          past: {
            one: "hace {0} a",
            other: "hace {0} a"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mes",
            other: "dentro de {0} meses"
          },
          past: {
            one: "hace {0} mes",
            other: "hace {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} m",
            other: "dentro de {0} m"
          },
          past: {
            one: "hace {0} m",
            other: "hace {0} m"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      "day-short": {
        displayName: "d",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "hace {0} hora",
            other: "hace {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} h",
            other: "dentro de {0} h"
          },
          past: {
            one: "hace {0} h",
            other: "hace {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "hace {0} minuto",
            other: "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} min",
            other: "dentro de {0} min"
          },
          past: {
            one: "hace {0} min",
            other: "hace {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "hace {0} segundo",
            other: "hace {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} s",
            other: "dentro de {0} s"
          },
          past: {
            one: "hace {0} s",
            other: "hace {0} s"
          }
        }
      }
    }
  }, {
    locale: "es-419",
    parentLocale: "es"
  }, {
    locale: "es-AR",
    parentLocale: "es-419",
    fields: {
      year: {
        displayName: "año",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} año",
            other: "dentro de {0} años"
          },
          past: {
            one: "hace {0} año",
            other: "hace {0} años"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} a",
            other: "dentro de {0} a"
          },
          past: {
            one: "hace {0} a",
            other: "hace {0} a"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mes",
            other: "dentro de {0} meses"
          },
          past: {
            one: "hace {0} mes",
            other: "hace {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} m",
            other: "dentro de {0} m"
          },
          past: {
            one: "hace {0} m",
            other: "hace {0} m"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      "day-short": {
        displayName: "d",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} días",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} días",
            other: "hace {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "hace {0} hora",
            other: "hace {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} h",
            other: "dentro de {0} h"
          },
          past: {
            one: "hace {0} h",
            other: "hace {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "hace {0} minuto",
            other: "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} min",
            other: "dentro de {0} min"
          },
          past: {
            one: "hace {0} min",
            other: "hace {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "hace {0} segundo",
            other: "hace {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "seg.",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} seg.",
            other: "dentro de {0} seg."
          },
          past: {
            one: "hace {0} seg.",
            other: "hace {0} seg."
          }
        }
      }
    }
  }, {
    locale: "es-BO",
    parentLocale: "es-419"
  }, {
    locale: "es-BR",
    parentLocale: "es-419"
  }, {
    locale: "es-BZ",
    parentLocale: "es-419"
  }, {
    locale: "es-CL",
    parentLocale: "es-419"
  }, {
    locale: "es-CO",
    parentLocale: "es-419"
  }, {
    locale: "es-CR",
    parentLocale: "es-419"
  }, {
    locale: "es-CU",
    parentLocale: "es-419"
  }, {
    locale: "es-DO",
    parentLocale: "es-419",
    fields: {
      year: {
        displayName: "Año",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} año",
            other: "dentro de {0} años"
          },
          past: {
            one: "hace {0} año",
            other: "hace {0} años"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} a",
            other: "dentro de {0} a"
          },
          past: {
            one: "hace {0} a",
            other: "hace {0} a"
          }
        }
      },
      month: {
        displayName: "Mes",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mes",
            other: "dentro de {0} meses"
          },
          past: {
            one: "hace {0} mes",
            other: "hace {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} m",
            other: "dentro de {0} m"
          },
          past: {
            one: "hace {0} m",
            other: "hace {0} m"
          }
        }
      },
      day: {
        displayName: "Día",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      "day-short": {
        displayName: "d",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "hace {0} hora",
            other: "hace {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} h",
            other: "dentro de {0} h"
          },
          past: {
            one: "hace {0} h",
            other: "hace {0} h"
          }
        }
      },
      minute: {
        displayName: "Minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "hace {0} minuto",
            other: "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} min",
            other: "dentro de {0} min"
          },
          past: {
            one: "hace {0} min",
            other: "hace {0} min"
          }
        }
      },
      second: {
        displayName: "Segundo",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "hace {0} segundo",
            other: "hace {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} s",
            other: "dentro de {0} s"
          },
          past: {
            one: "hace {0} s",
            other: "hace {0} s"
          }
        }
      }
    }
  }, {
    locale: "es-EA",
    parentLocale: "es"
  }, {
    locale: "es-EC",
    parentLocale: "es-419"
  }, {
    locale: "es-GQ",
    parentLocale: "es"
  }, {
    locale: "es-GT",
    parentLocale: "es-419"
  }, {
    locale: "es-HN",
    parentLocale: "es-419"
  }, {
    locale: "es-IC",
    parentLocale: "es"
  }, {
    locale: "es-MX",
    parentLocale: "es-419",
    fields: {
      year: {
        displayName: "año",
        relative: {
          0: "este año",
          1: "el año próximo",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} año",
            other: "dentro de {0} años"
          },
          past: {
            one: "hace {0} año",
            other: "hace {0} años"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "en {0} a",
            other: "en {0} a"
          },
          past: {
            one: "hace {0} a",
            other: "hace {0} a"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "este mes",
          1: "el mes próximo",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "en {0} mes",
            other: "en {0} meses"
          },
          past: {
            one: "hace {0} mes",
            other: "hace {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "en {0} m",
            other: "en {0} m"
          },
          past: {
            one: "hace {0} m",
            other: "hace {0} m"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      "day-short": {
        displayName: "d",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "en {0} día",
            other: "en {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "hace {0} hora",
            other: "hace {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "en {0} h",
            other: "en {0} n"
          },
          past: {
            one: "hace {0} h",
            other: "hace {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "hace {0} minuto",
            other: "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "en {0} min",
            other: "en {0} min"
          },
          past: {
            one: "hace {0} min",
            other: "hace {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "hace {0} segundo",
            other: "hace {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "en {0} s",
            other: "en {0} s"
          },
          past: {
            one: "hace {0} s",
            other: "hace {0} s"
          }
        }
      }
    }
  }, {
    locale: "es-NI",
    parentLocale: "es-419"
  }, {
    locale: "es-PA",
    parentLocale: "es-419"
  }, {
    locale: "es-PE",
    parentLocale: "es-419"
  }, {
    locale: "es-PH",
    parentLocale: "es"
  }, {
    locale: "es-PR",
    parentLocale: "es-419"
  }, {
    locale: "es-PY",
    parentLocale: "es-419",
    fields: {
      year: {
        displayName: "año",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} año",
            other: "dentro de {0} años"
          },
          past: {
            one: "hace {0} año",
            other: "hace {0} años"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} a",
            other: "dentro de {0} a"
          },
          past: {
            one: "hace {0} a",
            other: "hace {0} a"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mes",
            other: "dentro de {0} meses"
          },
          past: {
            one: "hace {0} mes",
            other: "hace {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} m",
            other: "dentro de {0} m"
          },
          past: {
            one: "hace {0} m",
            other: "hace {0} m"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      "day-short": {
        displayName: "d",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "hace {0} hora",
            other: "hace {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} h",
            other: "dentro de {0} h"
          },
          past: {
            one: "hace {0} h",
            other: "hace {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "hace {0} minuto",
            other: "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} min",
            other: "dentro de {0} min"
          },
          past: {
            one: "hace {0} min",
            other: "hace {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "hace {0} segundo",
            other: "hace {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "seg.",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} seg.",
            other: "dentro de {0} seg."
          },
          past: {
            one: "hace {0} seg.",
            other: "hace {0} seg."
          }
        }
      }
    }
  }, {
    locale: "es-SV",
    parentLocale: "es-419",
    fields: {
      year: {
        displayName: "año",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} año",
            other: "dentro de {0} años"
          },
          past: {
            one: "hace {0} año",
            other: "hace {0} años"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} a",
            other: "dentro de {0} a"
          },
          past: {
            one: "hace {0} a",
            other: "hace {0} a"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mes",
            other: "dentro de {0} meses"
          },
          past: {
            one: "hace {0} mes",
            other: "hace {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} m",
            other: "dentro de {0} m"
          },
          past: {
            one: "hace {0} m",
            other: "hace {0} m"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "antier",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      "day-short": {
        displayName: "d",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "hace {0} hora",
            other: "hace {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} h",
            other: "dentro de {0} h"
          },
          past: {
            one: "hace {0} h",
            other: "hace {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "hace {0} minuto",
            other: "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} min",
            other: "dentro de {0} min"
          },
          past: {
            one: "hace {0} min",
            other: "hace {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "hace {0} segundo",
            other: "hace {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} s",
            other: "dentro de {0} s"
          },
          past: {
            one: "hace {0} s",
            other: "hace {0} s"
          }
        }
      }
    }
  }, {
    locale: "es-US",
    parentLocale: "es-419",
    fields: {
      year: {
        displayName: "año",
        relative: {
          0: "este año",
          1: "el año próximo",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} año",
            other: "dentro de {0} años"
          },
          past: {
            one: "hace {0} año",
            other: "hace {0} años"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "este año",
          1: "el próximo año",
          "-1": "el año pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} a",
            other: "dentro de {0} a"
          },
          past: {
            one: "hace {0} a",
            other: "hace {0} a"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "este mes",
          1: "el mes próximo",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mes",
            other: "dentro de {0} meses"
          },
          past: {
            one: "hace {0} mes",
            other: "hace {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "este mes",
          1: "el próximo mes",
          "-1": "el mes pasado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} m",
            other: "dentro de {0} m"
          },
          past: {
            one: "hace {0} m",
            other: "hace {0} m"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      "day-short": {
        displayName: "d",
        relative: {
          0: "hoy",
          1: "mañana",
          2: "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} día",
            other: "dentro de {0} días"
          },
          past: {
            one: "hace {0} día",
            other: "hace {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "hace {0} hora",
            other: "hace {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} h",
            other: "dentro de {0} h"
          },
          past: {
            one: "hace {0} h",
            other: "hace {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "hace {0} minuto",
            other: "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} min",
            other: "dentro de {0} min"
          },
          past: {
            one: "hace {0} min",
            other: "hace {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "hace {0} segundo",
            other: "hace {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ahora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} s",
            other: "dentro de {0} s"
          },
          past: {
            one: "hace {0} s",
            other: "hace {0} s"
          }
        }
      }
    }
  }, {
    locale: "es-UY",
    parentLocale: "es-419"
  }, {
    locale: "es-VE",
    parentLocale: "es-419"
  }];
});

/***/ }),

/***/ "./src/locale-data/et.js":
/*!*******************************!*\
  !*** ./src/locale-data/et.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "et",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = !String(e).split(".")[1];
      return t ? "other" : 1 == e && a ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "aasta",
        relative: {
          0: "käesolev aasta",
          1: "järgmine aasta",
          "-1": "eelmine aasta"
        },
        relativeTime: {
          future: {
            one: "{0} aasta pärast",
            other: "{0} aasta pärast"
          },
          past: {
            one: "{0} aasta eest",
            other: "{0} aasta eest"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "käesolev aasta",
          1: "järgmine aasta",
          "-1": "eelmine aasta"
        },
        relativeTime: {
          future: {
            one: "{0} a pärast",
            other: "{0} a pärast"
          },
          past: {
            one: "{0} a eest",
            other: "{0} a eest"
          }
        }
      },
      month: {
        displayName: "kuu",
        relative: {
          0: "käesolev kuu",
          1: "järgmine kuu",
          "-1": "eelmine kuu"
        },
        relativeTime: {
          future: {
            one: "{0} kuu pärast",
            other: "{0} kuu pärast"
          },
          past: {
            one: "{0} kuu eest",
            other: "{0} kuu eest"
          }
        }
      },
      "month-short": {
        displayName: "k",
        relative: {
          0: "käesolev kuu",
          1: "järgmine kuu",
          "-1": "eelmine kuu"
        },
        relativeTime: {
          future: {
            one: "{0} kuu pärast",
            other: "{0} kuu pärast"
          },
          past: {
            one: "{0} kuu eest",
            other: "{0} kuu eest"
          }
        }
      },
      day: {
        displayName: "päev",
        relative: {
          0: "täna",
          1: "homme",
          2: "ülehomme",
          "-2": "üleeile",
          "-1": "eile"
        },
        relativeTime: {
          future: {
            one: "{0} päeva pärast",
            other: "{0} päeva pärast"
          },
          past: {
            one: "{0} päeva eest",
            other: "{0} päeva eest"
          }
        }
      },
      "day-short": {
        displayName: "p",
        relative: {
          0: "täna",
          1: "homme",
          2: "ülehomme",
          "-2": "üleeile",
          "-1": "eile"
        },
        relativeTime: {
          future: {
            one: "{0} p pärast",
            other: "{0} p pärast"
          },
          past: {
            one: "{0} p eest",
            other: "{0} p eest"
          }
        }
      },
      hour: {
        displayName: "tund",
        relative: {
          0: "praegusel tunnil"
        },
        relativeTime: {
          future: {
            one: "{0} tunni pärast",
            other: "{0} tunni pärast"
          },
          past: {
            one: "{0} tunni eest",
            other: "{0} tunni eest"
          }
        }
      },
      "hour-short": {
        displayName: "t",
        relative: {
          0: "praegusel tunnil"
        },
        relativeTime: {
          future: {
            one: "{0} t pärast",
            other: "{0} t pärast"
          },
          past: {
            one: "{0} t eest",
            other: "{0} t eest"
          }
        }
      },
      minute: {
        displayName: "minut",
        relative: {
          0: "praegusel minutil"
        },
        relativeTime: {
          future: {
            one: "{0} minuti pärast",
            other: "{0} minuti pärast"
          },
          past: {
            one: "{0} minuti eest",
            other: "{0} minuti eest"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "praegusel minutil"
        },
        relativeTime: {
          future: {
            one: "{0} min pärast",
            other: "{0} min pärast"
          },
          past: {
            one: "{0} min eest",
            other: "{0} min eest"
          }
        }
      },
      second: {
        displayName: "sekund",
        relative: {
          0: "nüüd"
        },
        relativeTime: {
          future: {
            one: "{0} sekundi pärast",
            other: "{0} sekundi pärast"
          },
          past: {
            one: "{0} sekundi eest",
            other: "{0} sekundi eest"
          }
        }
      },
      "second-short": {
        displayName: "sek",
        relative: {
          0: "nüüd"
        },
        relativeTime: {
          future: {
            one: "{0} sek pärast",
            other: "{0} sek pärast"
          },
          past: {
            one: "{0} sek eest",
            other: "{0} sek eest"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/eu.js":
/*!*******************************!*\
  !*** ./src/locale-data/eu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "eu",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return a ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "urtea",
        relative: {
          0: "aurten",
          1: "hurrengo urtean",
          "-1": "iaz"
        },
        relativeTime: {
          future: {
            one: "{0} urte barru",
            other: "{0} urte barru"
          },
          past: {
            one: "Duela {0} urte",
            other: "Duela {0} urte"
          }
        }
      },
      "year-short": {
        displayName: "urtea",
        relative: {
          0: "aurten",
          1: "hurrengo urtea",
          "-1": "aurreko urtea"
        },
        relativeTime: {
          future: {
            one: "{0} urte barru",
            other: "{0} urte barru"
          },
          past: {
            one: "Duela {0} urte",
            other: "Duela {0} urte"
          }
        }
      },
      month: {
        displayName: "hilabetea",
        relative: {
          0: "hilabete honetan",
          1: "hurrengo hilabetean",
          "-1": "aurreko hilabetean"
        },
        relativeTime: {
          future: {
            one: "{0} hilabete barru",
            other: "{0} hilabete barru"
          },
          past: {
            one: "Duela {0} hilabete",
            other: "Duela {0} hilabete"
          }
        }
      },
      "month-short": {
        displayName: "hil.",
        relative: {
          0: "hilabete honetan",
          1: "hurrengo hilabetean",
          "-1": "aurreko hilabetean"
        },
        relativeTime: {
          future: {
            one: "{0} hilabete barru",
            other: "{0} hilabete barru"
          },
          past: {
            one: "Duela {0} hilabete",
            other: "Duela {0} hilabete"
          }
        }
      },
      day: {
        displayName: "eguna",
        relative: {
          0: "gaur",
          1: "bihar",
          2: "etzi",
          "-2": "herenegun",
          "-1": "atzo"
        },
        relativeTime: {
          future: {
            one: "{0} egun barru",
            other: "{0} egun barru"
          },
          past: {
            one: "Duela {0} egun",
            other: "Duela {0} egun"
          }
        }
      },
      "day-short": {
        displayName: "eg.",
        relative: {
          0: "gaur",
          1: "bihar",
          2: "etzi",
          "-2": "herenegun",
          "-1": "atzo"
        },
        relativeTime: {
          future: {
            one: "{0} egun barru",
            other: "{0} egun barru"
          },
          past: {
            one: "Duela {0} egun",
            other: "Duela {0} egun"
          }
        }
      },
      hour: {
        displayName: "ordua",
        relative: {
          0: "ordu honetan"
        },
        relativeTime: {
          future: {
            one: "{0} ordu barru",
            other: "{0} ordu barru"
          },
          past: {
            one: "Duela {0} ordu",
            other: "Duela {0} ordu"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "ordu honetan"
        },
        relativeTime: {
          future: {
            one: "{0} ordu barru",
            other: "{0} ordu barru"
          },
          past: {
            one: "Duela {0} ordu",
            other: "Duela {0} ordu"
          }
        }
      },
      minute: {
        displayName: "minutua",
        relative: {
          0: "minutu honetan"
        },
        relativeTime: {
          future: {
            one: "{0} minutu barru",
            other: "{0} minutu barru"
          },
          past: {
            one: "Duela {0} minutu",
            other: "Duela {0} minutu"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "minutu honetan"
        },
        relativeTime: {
          future: {
            one: "{0} minutu barru",
            other: "{0} minutu barru"
          },
          past: {
            one: "Duela {0} minutu",
            other: "Duela {0} minutu"
          }
        }
      },
      second: {
        displayName: "segundoa",
        relative: {
          0: "orain"
        },
        relativeTime: {
          future: {
            one: "{0} segundo barru",
            other: "{0} segundo barru"
          },
          past: {
            one: "Duela {0} segundo",
            other: "Duela {0} segundo"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "orain"
        },
        relativeTime: {
          future: {
            one: "{0} segundo barru",
            other: "{0} segundo barru"
          },
          past: {
            one: "Duela {0} segundo",
            other: "Duela {0} segundo"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/fa.js":
/*!*******************************!*\
  !*** ./src/locale-data/fa.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "fa",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : e >= 0 && e <= 1 ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "سال",
        relative: {
          0: "امسال",
          1: "سال آینده",
          "-1": "سال گذشته"
        },
        relativeTime: {
          future: {
            one: "{0} سال بعد",
            other: "{0} سال بعد"
          },
          past: {
            one: "{0} سال پیش",
            other: "{0} سال پیش"
          }
        }
      },
      "year-short": {
        displayName: "سال",
        relative: {
          0: "امسال",
          1: "سال آینده",
          "-1": "سال گذشته"
        },
        relativeTime: {
          future: {
            one: "{0} سال بعد",
            other: "{0} سال بعد"
          },
          past: {
            one: "{0} سال پیش",
            other: "{0} سال پیش"
          }
        }
      },
      month: {
        displayName: "ماه",
        relative: {
          0: "این ماه",
          1: "ماه آینده",
          "-1": "ماه گذشته"
        },
        relativeTime: {
          future: {
            one: "{0} ماه بعد",
            other: "{0} ماه بعد"
          },
          past: {
            one: "{0} ماه پیش",
            other: "{0} ماه پیش"
          }
        }
      },
      "month-short": {
        displayName: "ماه",
        relative: {
          0: "این ماه",
          1: "ماه آینده",
          "-1": "ماه پیش"
        },
        relativeTime: {
          future: {
            one: "{0} ماه بعد",
            other: "{0} ماه بعد"
          },
          past: {
            one: "{0} ماه پیش",
            other: "{0} ماه پیش"
          }
        }
      },
      day: {
        displayName: "روز",
        relative: {
          0: "امروز",
          1: "فردا",
          2: "پس‌فردا",
          "-2": "پریروز",
          "-1": "دیروز"
        },
        relativeTime: {
          future: {
            one: "{0} روز بعد",
            other: "{0} روز بعد"
          },
          past: {
            one: "{0} روز پیش",
            other: "{0} روز پیش"
          }
        }
      },
      "day-short": {
        displayName: "روز",
        relative: {
          0: "امروز",
          1: "فردا",
          2: "پس‌فردا",
          "-2": "پریروز",
          "-1": "دیروز"
        },
        relativeTime: {
          future: {
            one: "{0} روز بعد",
            other: "{0} روز بعد"
          },
          past: {
            one: "{0} روز پیش",
            other: "{0} روز پیش"
          }
        }
      },
      hour: {
        displayName: "ساعت",
        relative: {
          0: "همین ساعت"
        },
        relativeTime: {
          future: {
            one: "{0} ساعت بعد",
            other: "{0} ساعت بعد"
          },
          past: {
            one: "{0} ساعت پیش",
            other: "{0} ساعت پیش"
          }
        }
      },
      "hour-short": {
        displayName: "ساعت",
        relative: {
          0: "همین ساعت"
        },
        relativeTime: {
          future: {
            one: "{0} ساعت بعد",
            other: "{0} ساعت بعد"
          },
          past: {
            one: "{0} ساعت پیش",
            other: "{0} ساعت پیش"
          }
        }
      },
      minute: {
        displayName: "دقیقه",
        relative: {
          0: "همین دقیقه"
        },
        relativeTime: {
          future: {
            one: "{0} دقیقه بعد",
            other: "{0} دقیقه بعد"
          },
          past: {
            one: "{0} دقیقه پیش",
            other: "{0} دقیقه پیش"
          }
        }
      },
      "minute-short": {
        displayName: "دقیقه",
        relative: {
          0: "همین دقیقه"
        },
        relativeTime: {
          future: {
            one: "{0} دقیقه بعد",
            other: "{0} دقیقه بعد"
          },
          past: {
            one: "{0} دقیقه پیش",
            other: "{0} دقیقه پیش"
          }
        }
      },
      second: {
        displayName: "ثانیه",
        relative: {
          0: "اکنون"
        },
        relativeTime: {
          future: {
            one: "{0} ثانیه بعد",
            other: "{0} ثانیه بعد"
          },
          past: {
            one: "{0} ثانیه پیش",
            other: "{0} ثانیه پیش"
          }
        }
      },
      "second-short": {
        displayName: "ثانیه",
        relative: {
          0: "اکنون"
        },
        relativeTime: {
          future: {
            one: "{0} ثانیه بعد",
            other: "{0} ثانیه بعد"
          },
          past: {
            one: "{0} ثانیه پیش",
            other: "{0} ثانیه پیش"
          }
        }
      }
    }
  }, {
    locale: "fa-AF",
    parentLocale: "fa"
  }];
});

/***/ }),

/***/ "./src/locale-data/fi.js":
/*!*******************************!*\
  !*** ./src/locale-data/fi.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "fi",
    pluralRuleFunction: function pluralRuleFunction(t, e) {
      var i = !String(t).split(".")[1];
      return e ? "other" : 1 == t && i ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "vuosi",
        relative: {
          0: "tänä vuonna",
          1: "ensi vuonna",
          "-1": "viime vuonna"
        },
        relativeTime: {
          future: {
            one: "{0} vuoden päästä",
            other: "{0} vuoden päästä"
          },
          past: {
            one: "{0} vuosi sitten",
            other: "{0} vuotta sitten"
          }
        }
      },
      "year-short": {
        displayName: "v",
        relative: {
          0: "tänä v",
          1: "ensi v",
          "-1": "viime v"
        },
        relativeTime: {
          future: {
            one: "{0} v päästä",
            other: "{0} v päästä"
          },
          past: {
            one: "{0} v sitten",
            other: "{0} v sitten"
          }
        }
      },
      month: {
        displayName: "kuukausi",
        relative: {
          0: "tässä kuussa",
          1: "ensi kuussa",
          "-1": "viime kuussa"
        },
        relativeTime: {
          future: {
            one: "{0} kuukauden päästä",
            other: "{0} kuukauden päästä"
          },
          past: {
            one: "{0} kuukausi sitten",
            other: "{0} kuukautta sitten"
          }
        }
      },
      "month-short": {
        displayName: "kk",
        relative: {
          0: "tässä kk",
          1: "ensi kk",
          "-1": "viime kk"
        },
        relativeTime: {
          future: {
            one: "{0} kk päästä",
            other: "{0} kk päästä"
          },
          past: {
            one: "{0} kk sitten",
            other: "{0} kk sitten"
          }
        }
      },
      day: {
        displayName: "päivä",
        relative: {
          0: "tänään",
          1: "huomenna",
          2: "ylihuomenna",
          "-2": "toissa päivänä",
          "-1": "eilen"
        },
        relativeTime: {
          future: {
            one: "{0} päivän päästä",
            other: "{0} päivän päästä"
          },
          past: {
            one: "{0} päivä sitten",
            other: "{0} päivää sitten"
          }
        }
      },
      "day-short": {
        displayName: "pv",
        relative: {
          0: "tänään",
          1: "huom.",
          2: "ylihuom.",
          "-2": "toissap.",
          "-1": "eilen"
        },
        relativeTime: {
          future: {
            one: "{0} pv päästä",
            other: "{0} pv päästä"
          },
          past: {
            one: "{0} pv sitten",
            other: "{0} pv sitten"
          }
        }
      },
      hour: {
        displayName: "tunti",
        relative: {
          0: "tämän tunnin aikana"
        },
        relativeTime: {
          future: {
            one: "{0} tunnin päästä",
            other: "{0} tunnin päästä"
          },
          past: {
            one: "{0} tunti sitten",
            other: "{0} tuntia sitten"
          }
        }
      },
      "hour-short": {
        displayName: "t",
        relative: {
          0: "tunnin sisällä"
        },
        relativeTime: {
          future: {
            one: "{0} t päästä",
            other: "{0} t päästä"
          },
          past: {
            one: "{0} t sitten",
            other: "{0} t sitten"
          }
        }
      },
      minute: {
        displayName: "minuutti",
        relative: {
          0: "tämän minuutin aikana"
        },
        relativeTime: {
          future: {
            one: "{0} minuutin päästä",
            other: "{0} minuutin päästä"
          },
          past: {
            one: "{0} minuutti sitten",
            other: "{0} minuuttia sitten"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "minuutin sisällä"
        },
        relativeTime: {
          future: {
            one: "{0} min päästä",
            other: "{0} min päästä"
          },
          past: {
            one: "{0} min sitten",
            other: "{0} min sitten"
          }
        }
      },
      second: {
        displayName: "sekunti",
        relative: {
          0: "nyt"
        },
        relativeTime: {
          future: {
            one: "{0} sekunnin päästä",
            other: "{0} sekunnin päästä"
          },
          past: {
            one: "{0} sekunti sitten",
            other: "{0} sekuntia sitten"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "nyt"
        },
        relativeTime: {
          future: {
            one: "{0} s päästä",
            other: "{0} s päästä"
          },
          past: {
            one: "{0} s sitten",
            other: "{0} s sitten"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/fil.js":
/*!********************************!*\
  !*** ./src/locale-data/fil.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (a, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "fil",
    pluralRuleFunction: function pluralRuleFunction(a, n) {
      var e = String(a).split("."),
        o = e[0],
        t = e[1] || "",
        s = !e[1],
        r = o.slice(-1),
        i = t.slice(-1);
      return n ? 1 == a ? "one" : "other" : s && (1 == o || 2 == o || 3 == o) || s && 4 != r && 6 != r && 9 != r || !s && 4 != i && 6 != i && 9 != i ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "taon",
        relative: {
          0: "ngayong taon",
          1: "susunod na taon",
          "-1": "nakaraang taon"
        },
        relativeTime: {
          future: {
            one: "sa {0} taon",
            other: "sa {0} (na) taon"
          },
          past: {
            one: "{0} taon ang nakalipas",
            other: "{0} (na) taon ang nakalipas"
          }
        }
      },
      "year-short": {
        displayName: "taon",
        relative: {
          0: "ngayong taon",
          1: "susunod na taon",
          "-1": "nakaraang taon"
        },
        relativeTime: {
          future: {
            one: "sa {0} taon",
            other: "sa {0} (na) taon"
          },
          past: {
            one: "{0} taon ang nakalipas",
            other: "{0} (na) taon ang nakalipas"
          }
        }
      },
      month: {
        displayName: "buwan",
        relative: {
          0: "ngayong buwan",
          1: "susunod na buwan",
          "-1": "nakaraang buwan"
        },
        relativeTime: {
          future: {
            one: "sa {0} buwan",
            other: "sa {0} (na) buwan"
          },
          past: {
            one: "{0} buwan ang nakalipas",
            other: "{0} (na) buwan ang nakalipas"
          }
        }
      },
      "month-short": {
        displayName: "buwan",
        relative: {
          0: "ngayong buwan",
          1: "susunod na buwan",
          "-1": "nakaraang buwan"
        },
        relativeTime: {
          future: {
            one: "sa {0} buwan",
            other: "sa {0} (na) buwan"
          },
          past: {
            one: "{0} buwan ang nakalipas",
            other: "{0} (na) buwan ang nakalipas"
          }
        }
      },
      day: {
        displayName: "araw",
        relative: {
          0: "ngayong araw",
          1: "bukas",
          2: "Samakalawa",
          "-2": "Araw bago ang kahapon",
          "-1": "kahapon"
        },
        relativeTime: {
          future: {
            one: "sa {0} araw",
            other: "sa {0} (na) araw"
          },
          past: {
            one: "{0} araw ang nakalipas",
            other: "{0} (na) araw ang nakalipas"
          }
        }
      },
      "day-short": {
        displayName: "araw",
        relative: {
          0: "ngayong araw",
          1: "bukas",
          2: "Samakalawa",
          "-2": "Araw bago ang kahapon",
          "-1": "kahapon"
        },
        relativeTime: {
          future: {
            one: "sa {0} (na) araw",
            other: "sa {0} (na) araw"
          },
          past: {
            one: "{0} (na) araw ang nakalipas",
            other: "{0} (na) araw ang nakalipas"
          }
        }
      },
      hour: {
        displayName: "oras",
        relative: {
          0: "ngayong oras"
        },
        relativeTime: {
          future: {
            one: "sa {0} oras",
            other: "sa {0} (na) oras"
          },
          past: {
            one: "{0} oras ang nakalipas",
            other: "{0} (na) oras ang nakalipas"
          }
        }
      },
      "hour-short": {
        displayName: "oras",
        relative: {
          0: "ngayong oras"
        },
        relativeTime: {
          future: {
            one: "sa {0} oras",
            other: "sa {0} (na) oras"
          },
          past: {
            one: "{0} oras ang nakalipas",
            other: "{0} (na) oras ang nakalipas"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "sa minutong ito"
        },
        relativeTime: {
          future: {
            one: "sa {0} minuto",
            other: "sa {0} (na) minuto"
          },
          past: {
            one: "{0} minuto ang nakalipas",
            other: "{0} (na) minuto ang nakalipas"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "sa minutong ito"
        },
        relativeTime: {
          future: {
            one: "sa {0} min.",
            other: "sa {0} (na) min."
          },
          past: {
            one: "{0} min. ang nakalipas",
            other: "{0} (na) min. ang nakalipas"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "ngayon"
        },
        relativeTime: {
          future: {
            one: "sa {0} segundo",
            other: "sa {0} (na) segundo"
          },
          past: {
            one: "{0} segundo ang nakalipas",
            other: "{0} (na) segundo ang nakalipas"
          }
        }
      },
      "second-short": {
        displayName: "seg.",
        relative: {
          0: "ngayon"
        },
        relativeTime: {
          future: {
            one: "sa {0} seg.",
            other: "sa {0} (na) seg."
          },
          past: {
            one: "{0} seg. ang nakalipas",
            other: "{0} (na) seg. nakalipas"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/fr.js":
/*!*******************************!*\
  !*** ./src/locale-data/fr.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "fr",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return a ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "année",
        relative: {
          0: "cette année",
          1: "l’année prochaine",
          "-1": "l’année dernière"
        },
        relativeTime: {
          future: {
            one: "dans {0} an",
            other: "dans {0} ans"
          },
          past: {
            one: "il y a {0} an",
            other: "il y a {0} ans"
          }
        }
      },
      "year-short": {
        displayName: "an",
        relative: {
          0: "cette année",
          1: "l’année prochaine",
          "-1": "l’année dernière"
        },
        relativeTime: {
          future: {
            one: "dans {0} a",
            other: "dans {0} a"
          },
          past: {
            one: "il y a {0} a",
            other: "il y a {0} a"
          }
        }
      },
      month: {
        displayName: "mois",
        relative: {
          0: "ce mois-ci",
          1: "le mois prochain",
          "-1": "le mois dernier"
        },
        relativeTime: {
          future: {
            one: "dans {0} mois",
            other: "dans {0} mois"
          },
          past: {
            one: "il y a {0} mois",
            other: "il y a {0} mois"
          }
        }
      },
      "month-short": {
        displayName: "m.",
        relative: {
          0: "ce mois-ci",
          1: "le mois prochain",
          "-1": "le mois dernier"
        },
        relativeTime: {
          future: {
            one: "dans {0} m.",
            other: "dans {0} m."
          },
          past: {
            one: "il y a {0} m.",
            other: "il y a {0} m."
          }
        }
      },
      day: {
        displayName: "jour",
        relative: {
          0: "aujourd’hui",
          1: "demain",
          2: "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        relativeTime: {
          future: {
            one: "dans {0} jour",
            other: "dans {0} jours"
          },
          past: {
            one: "il y a {0} jour",
            other: "il y a {0} jours"
          }
        }
      },
      "day-short": {
        displayName: "j",
        relative: {
          0: "aujourd’hui",
          1: "demain",
          2: "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        relativeTime: {
          future: {
            one: "dans {0} j",
            other: "dans {0} j"
          },
          past: {
            one: "il y a {0} j",
            other: "il y a {0} j"
          }
        }
      },
      hour: {
        displayName: "heure",
        relative: {
          0: "cette heure-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} heure",
            other: "dans {0} heures"
          },
          past: {
            one: "il y a {0} heure",
            other: "il y a {0} heures"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "cette heure-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} h",
            other: "dans {0} h"
          },
          past: {
            one: "il y a {0} h",
            other: "il y a {0} h"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "cette minute-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} minute",
            other: "dans {0} minutes"
          },
          past: {
            one: "il y a {0} minute",
            other: "il y a {0} minutes"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "cette minute-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} min",
            other: "dans {0} min"
          },
          past: {
            one: "il y a {0} min",
            other: "il y a {0} min"
          }
        }
      },
      second: {
        displayName: "seconde",
        relative: {
          0: "maintenant"
        },
        relativeTime: {
          future: {
            one: "dans {0} seconde",
            other: "dans {0} secondes"
          },
          past: {
            one: "il y a {0} seconde",
            other: "il y a {0} secondes"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "maintenant"
        },
        relativeTime: {
          future: {
            one: "dans {0} s",
            other: "dans {0} s"
          },
          past: {
            one: "il y a {0} s",
            other: "il y a {0} s"
          }
        }
      }
    }
  }, {
    locale: "fr-BE",
    parentLocale: "fr"
  }, {
    locale: "fr-BF",
    parentLocale: "fr"
  }, {
    locale: "fr-BI",
    parentLocale: "fr"
  }, {
    locale: "fr-BJ",
    parentLocale: "fr"
  }, {
    locale: "fr-BL",
    parentLocale: "fr"
  }, {
    locale: "fr-CA",
    parentLocale: "fr",
    fields: {
      year: {
        displayName: "année",
        relative: {
          0: "cette année",
          1: "l’année prochaine",
          "-1": "l’année dernière"
        },
        relativeTime: {
          future: {
            one: "Dans {0} an",
            other: "Dans {0} ans"
          },
          past: {
            one: "Il y a {0} an",
            other: "Il y a {0} ans"
          }
        }
      },
      "year-short": {
        displayName: "a",
        relative: {
          0: "cette année",
          1: "l’année prochaine",
          "-1": "l’année dernière"
        },
        relativeTime: {
          future: {
            one: "dans {0} a",
            other: "dans {0} a"
          },
          past: {
            one: "il y a {0} a",
            other: "il y a {0} a"
          }
        }
      },
      month: {
        displayName: "mois",
        relative: {
          0: "ce mois-ci",
          1: "le mois prochain",
          "-1": "le mois dernier"
        },
        relativeTime: {
          future: {
            one: "dans {0} mois",
            other: "dans {0} mois"
          },
          past: {
            one: "il y a {0} mois",
            other: "il y a {0} mois"
          }
        }
      },
      "month-short": {
        displayName: "m.",
        relative: {
          0: "ce mois-ci",
          1: "le mois prochain",
          "-1": "le mois dernier"
        },
        relativeTime: {
          future: {
            one: "dans {0} m.",
            other: "dans {0} m."
          },
          past: {
            one: "il y a {0} m.",
            other: "il y a {0} m."
          }
        }
      },
      day: {
        displayName: "jour",
        relative: {
          0: "aujourd’hui",
          1: "demain",
          2: "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        relativeTime: {
          future: {
            one: "dans {0} jour",
            other: "dans {0} jours"
          },
          past: {
            one: "il y a {0} jour",
            other: "il y a {0} jours"
          }
        }
      },
      "day-short": {
        displayName: "j",
        relative: {
          0: "aujourd’hui",
          1: "demain",
          2: "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        relativeTime: {
          future: {
            one: "dans {0} j",
            other: "dans {0} j"
          },
          past: {
            one: "il y a {0} j",
            other: "il y a {0} j"
          }
        }
      },
      hour: {
        displayName: "heure",
        relative: {
          0: "cette heure-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} heure",
            other: "dans {0} heures"
          },
          past: {
            one: "il y a {0} heure",
            other: "il y a {0} heures"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "cette heure-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} h",
            other: "dans {0} h"
          },
          past: {
            one: "il y a {0} h",
            other: "il y a {0} h"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "cette minute-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} minute",
            other: "dans {0} minutes"
          },
          past: {
            one: "il y a {0} minute",
            other: "il y a {0} minutes"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "cette minute-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} min",
            other: "dans {0} min"
          },
          past: {
            one: "il y a {0} min",
            other: "il y a {0} min"
          }
        }
      },
      second: {
        displayName: "seconde",
        relative: {
          0: "maintenant"
        },
        relativeTime: {
          future: {
            one: "dans {0} seconde",
            other: "dans {0} secondes"
          },
          past: {
            one: "il y a {0} seconde",
            other: "il y a {0} secondes"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "maintenant"
        },
        relativeTime: {
          future: {
            one: "dans {0} s",
            other: "dans {0} s"
          },
          past: {
            one: "il y a {0} s",
            other: "il y a {0} s"
          }
        }
      }
    }
  }, {
    locale: "fr-CD",
    parentLocale: "fr"
  }, {
    locale: "fr-CF",
    parentLocale: "fr"
  }, {
    locale: "fr-CG",
    parentLocale: "fr"
  }, {
    locale: "fr-CH",
    parentLocale: "fr"
  }, {
    locale: "fr-CI",
    parentLocale: "fr"
  }, {
    locale: "fr-CM",
    parentLocale: "fr"
  }, {
    locale: "fr-DJ",
    parentLocale: "fr"
  }, {
    locale: "fr-DZ",
    parentLocale: "fr"
  }, {
    locale: "fr-GA",
    parentLocale: "fr"
  }, {
    locale: "fr-GF",
    parentLocale: "fr"
  }, {
    locale: "fr-GN",
    parentLocale: "fr"
  }, {
    locale: "fr-GP",
    parentLocale: "fr"
  }, {
    locale: "fr-GQ",
    parentLocale: "fr"
  }, {
    locale: "fr-HT",
    parentLocale: "fr",
    fields: {
      year: {
        displayName: "année",
        relative: {
          0: "cette année",
          1: "l’année prochaine",
          "-1": "l’année dernière"
        },
        relativeTime: {
          future: {
            one: "dans {0} an",
            other: "dans {0} ans"
          },
          past: {
            one: "il y a {0} an",
            other: "il y a {0} ans"
          }
        }
      },
      "year-short": {
        displayName: "an",
        relative: {
          0: "cette année",
          1: "l’année prochaine",
          "-1": "l’année dernière"
        },
        relativeTime: {
          future: {
            one: "dans {0} a",
            other: "dans {0} a"
          },
          past: {
            one: "il y a {0} a",
            other: "il y a {0} a"
          }
        }
      },
      month: {
        displayName: "mois",
        relative: {
          0: "ce mois-ci",
          1: "le mois prochain",
          "-1": "le mois dernier"
        },
        relativeTime: {
          future: {
            one: "dans {0} mois",
            other: "dans {0} mois"
          },
          past: {
            one: "il y a {0} mois",
            other: "il y a {0} mois"
          }
        }
      },
      "month-short": {
        displayName: "m.",
        relative: {
          0: "ce mois-ci",
          1: "le mois prochain",
          "-1": "le mois dernier"
        },
        relativeTime: {
          future: {
            one: "dans {0} m.",
            other: "dans {0} m."
          },
          past: {
            one: "il y a {0} m.",
            other: "il y a {0} m."
          }
        }
      },
      day: {
        displayName: "jour",
        relative: {
          0: "aujourd’hui",
          1: "demain",
          2: "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        relativeTime: {
          future: {
            one: "dans {0} jour",
            other: "dans {0} jours"
          },
          past: {
            one: "il y a {0} jour",
            other: "il y a {0} jours"
          }
        }
      },
      "day-short": {
        displayName: "jr.",
        relative: {
          0: "aujourd’hui",
          1: "demain",
          2: "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        relativeTime: {
          future: {
            one: "dans {0} j",
            other: "dans {0} j"
          },
          past: {
            one: "il y a {0} j",
            other: "il y a {0} j"
          }
        }
      },
      hour: {
        displayName: "heure",
        relative: {
          0: "cette heure-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} heure",
            other: "dans {0} heures"
          },
          past: {
            one: "il y a {0} heure",
            other: "il y a {0} heures"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "cette heure-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} h",
            other: "dans {0} h"
          },
          past: {
            one: "il y a {0} h",
            other: "il y a {0} h"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "cette minute-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} minute",
            other: "dans {0} minutes"
          },
          past: {
            one: "il y a {0} minute",
            other: "il y a {0} minutes"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "cette minute-ci"
        },
        relativeTime: {
          future: {
            one: "dans {0} min",
            other: "dans {0} min"
          },
          past: {
            one: "il y a {0} min",
            other: "il y a {0} min"
          }
        }
      },
      second: {
        displayName: "seconde",
        relative: {
          0: "maintenant"
        },
        relativeTime: {
          future: {
            one: "dans {0} seconde",
            other: "dans {0} secondes"
          },
          past: {
            one: "il y a {0} seconde",
            other: "il y a {0} secondes"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "maintenant"
        },
        relativeTime: {
          future: {
            one: "dans {0} s",
            other: "dans {0} s"
          },
          past: {
            one: "il y a {0} s",
            other: "il y a {0} s"
          }
        }
      }
    }
  }, {
    locale: "fr-KM",
    parentLocale: "fr"
  }, {
    locale: "fr-LU",
    parentLocale: "fr"
  }, {
    locale: "fr-MA",
    parentLocale: "fr"
  }, {
    locale: "fr-MC",
    parentLocale: "fr"
  }, {
    locale: "fr-MF",
    parentLocale: "fr"
  }, {
    locale: "fr-MG",
    parentLocale: "fr"
  }, {
    locale: "fr-ML",
    parentLocale: "fr"
  }, {
    locale: "fr-MQ",
    parentLocale: "fr"
  }, {
    locale: "fr-MR",
    parentLocale: "fr"
  }, {
    locale: "fr-MU",
    parentLocale: "fr"
  }, {
    locale: "fr-NC",
    parentLocale: "fr"
  }, {
    locale: "fr-NE",
    parentLocale: "fr"
  }, {
    locale: "fr-PF",
    parentLocale: "fr"
  }, {
    locale: "fr-PM",
    parentLocale: "fr"
  }, {
    locale: "fr-RE",
    parentLocale: "fr"
  }, {
    locale: "fr-RW",
    parentLocale: "fr"
  }, {
    locale: "fr-SC",
    parentLocale: "fr"
  }, {
    locale: "fr-SN",
    parentLocale: "fr"
  }, {
    locale: "fr-SY",
    parentLocale: "fr"
  }, {
    locale: "fr-TD",
    parentLocale: "fr"
  }, {
    locale: "fr-TG",
    parentLocale: "fr"
  }, {
    locale: "fr-TN",
    parentLocale: "fr"
  }, {
    locale: "fr-VU",
    parentLocale: "fr"
  }, {
    locale: "fr-WF",
    parentLocale: "fr"
  }, {
    locale: "fr-YT",
    parentLocale: "fr"
  }];
});

/***/ }),

/***/ "./src/locale-data/fy.js":
/*!*******************************!*\
  !*** ./src/locale-data/fy.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "fy",
    pluralRuleFunction: function pluralRuleFunction(e, n) {
      var r = !String(e).split(".")[1];
      return n ? "other" : 1 == e && r ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Jier",
        relative: {
          0: "dit jier",
          1: "folgjend jier",
          "-1": "foarich jier"
        },
        relativeTime: {
          future: {
            one: "Oer {0} jier",
            other: "Oer {0} jier"
          },
          past: {
            one: "{0} jier lyn",
            other: "{0} jier lyn"
          }
        }
      },
      "year-short": {
        displayName: "Jier",
        relative: {
          0: "dit jier",
          1: "folgjend jier",
          "-1": "foarich jier"
        },
        relativeTime: {
          future: {
            one: "Oer {0} jier",
            other: "Oer {0} jier"
          },
          past: {
            one: "{0} jier lyn",
            other: "{0} jier lyn"
          }
        }
      },
      month: {
        displayName: "Moanne",
        relative: {
          0: "dizze moanne",
          1: "folgjende moanne",
          "-1": "foarige moanne"
        },
        relativeTime: {
          future: {
            one: "Oer {0} moanne",
            other: "Oer {0} moannen"
          },
          past: {
            one: "{0} moanne lyn",
            other: "{0} moannen lyn"
          }
        }
      },
      "month-short": {
        displayName: "Moanne",
        relative: {
          0: "dizze moanne",
          1: "folgjende moanne",
          "-1": "foarige moanne"
        },
        relativeTime: {
          future: {
            one: "Oer {0} moanne",
            other: "Oer {0} moannen"
          },
          past: {
            one: "{0} moanne lyn",
            other: "{0} moannen lyn"
          }
        }
      },
      day: {
        displayName: "dei",
        relative: {
          0: "vandaag",
          1: "morgen",
          2: "Oermorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        relativeTime: {
          future: {
            one: "Oer {0} dei",
            other: "Oer {0} deien"
          },
          past: {
            one: "{0} dei lyn",
            other: "{0} deien lyn"
          }
        }
      },
      "day-short": {
        displayName: "dei",
        relative: {
          0: "vandaag",
          1: "morgen",
          2: "Oermorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        relativeTime: {
          future: {
            one: "Oer {0} dei",
            other: "Oer {0} deien"
          },
          past: {
            one: "{0} dei lyn",
            other: "{0} deien lyn"
          }
        }
      },
      hour: {
        displayName: "oere",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "Oer {0} oere",
            other: "Oer {0} oere"
          },
          past: {
            one: "{0} oere lyn",
            other: "{0} oere lyn"
          }
        }
      },
      "hour-short": {
        displayName: "oere",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "Oer {0} oere",
            other: "Oer {0} oere"
          },
          past: {
            one: "{0} oere lyn",
            other: "{0} oere lyn"
          }
        }
      },
      minute: {
        displayName: "Minút",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "Oer {0} minút",
            other: "Oer {0} minuten"
          },
          past: {
            one: "{0} minút lyn",
            other: "{0} minuten lyn"
          }
        }
      },
      "minute-short": {
        displayName: "Minút",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "Oer {0} minút",
            other: "Oer {0} minuten"
          },
          past: {
            one: "{0} minút lyn",
            other: "{0} minuten lyn"
          }
        }
      },
      second: {
        displayName: "Sekonde",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "Oer {0} sekonde",
            other: "Oer {0} sekonden"
          },
          past: {
            one: "{0} sekonde lyn",
            other: "{0} sekonden lyn"
          }
        }
      },
      "second-short": {
        displayName: "Sekonde",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "Oer {0} sekonde",
            other: "Oer {0} sekonden"
          },
          past: {
            one: "{0} sekonde lyn",
            other: "{0} sekonden lyn"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/ga.js":
/*!*******************************!*\
  !*** ./src/locale-data/ga.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (n, i) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ga",
    pluralRuleFunction: function pluralRuleFunction(n, i) {
      var e = String(n).split("."),
        a = Number(e[0]) == n;
      return i ? 1 == n ? "one" : "other" : 1 == n ? "one" : 2 == n ? "two" : a && n >= 3 && n <= 6 ? "few" : a && n >= 7 && n <= 10 ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "Bliain",
        relative: {
          0: "an bhliain seo",
          1: "an bhliain seo chugainn",
          "-1": "anuraidh"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} bhliain",
            two: "i gceann {0} bhliain",
            few: "i gceann {0} bliana",
            many: "i gceann {0} mbliana",
            other: "i gceann {0} bliain"
          },
          past: {
            one: "{0} bhliain ó shin",
            two: "{0} bhliain ó shin",
            few: "{0} bliana ó shin",
            many: "{0} mbliana ó shin",
            other: "{0} bliain ó shin"
          }
        }
      },
      "year-short": {
        displayName: "bl.",
        relative: {
          0: "an bhl. seo",
          1: "an bhl. seo chugainn",
          "-1": "anuraidh"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} bl.",
            two: "i gceann {0} bhl.",
            few: "i gceann {0} bl.",
            many: "i gceann {0} mbl.",
            other: "i gceann {0} bl."
          },
          past: {
            one: "{0} bhl. ó shin",
            two: "{0} bhl. ó shin",
            few: "{0} bl. ó shin",
            many: "{0} mbl. ó shin",
            other: "{0} bl. ó shin"
          }
        }
      },
      month: {
        displayName: "Mí",
        relative: {
          0: "an mhí seo",
          1: "an mhí seo chugainn",
          "-1": "an mhí seo caite"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} mhí",
            two: "i gceann {0} mhí",
            few: "i gceann {0} mhí",
            many: "i gceann {0} mí",
            other: "i gceann {0} mí"
          },
          past: {
            one: "{0} mhí ó shin",
            two: "{0} mhí ó shin",
            few: "{0} mhí ó shin",
            many: "{0} mí ó shin",
            other: "{0} mí ó shin"
          }
        }
      },
      "month-short": {
        displayName: "mí",
        relative: {
          0: "an mhí seo",
          1: "an mhí seo chugainn",
          "-1": "an mhí seo caite"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} mhí",
            two: "i gceann {0} mhí",
            few: "i gceann {0} mhí",
            many: "i gceann {0} mí",
            other: "i gceann {0} mí"
          },
          past: {
            one: "{0} mhí ó shin",
            two: "{0} mhí ó shin",
            few: "{0} mhí ó shin",
            many: "{0} mí ó shin",
            other: "{0} mí ó shin"
          }
        }
      },
      day: {
        displayName: "Lá",
        relative: {
          0: "inniu",
          1: "amárach",
          2: "arú amárach",
          "-2": "arú inné",
          "-1": "inné"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} lá",
            two: "i gceann {0} lá",
            few: "i gceann {0} lá",
            many: "i gceann {0} lá",
            other: "i gceann {0} lá"
          },
          past: {
            one: "{0} lá ó shin",
            two: "{0} lá ó shin",
            few: "{0} lá ó shin",
            many: "{0} lá ó shin",
            other: "{0} lá ó shin"
          }
        }
      },
      "day-short": {
        displayName: "Lá",
        relative: {
          0: "inniu",
          1: "amárach",
          2: "arú amárach",
          "-2": "arú inné",
          "-1": "inné"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} lá",
            two: "i gceann {0} lá",
            few: "i gceann {0} lá",
            many: "i gceann {0} lá",
            other: "i gceann {0} lá"
          },
          past: {
            one: "{0} lá ó shin",
            two: "{0} lá ó shin",
            few: "{0} lá ó shin",
            many: "{0} lá ó shin",
            other: "{0} lá ó shin"
          }
        }
      },
      hour: {
        displayName: "Uair",
        relative: {
          0: "an uair seo"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} uair an chloig",
            two: "i gceann {0} uair an chloig",
            few: "i gceann {0} huaire an chloig",
            many: "i gceann {0} n-uaire an chloig",
            other: "i gceann {0} uair an chloig"
          },
          past: {
            one: "{0} uair an chloig ó shin",
            two: "{0} uair an chloig ó shin",
            few: "{0} huaire an chloig ó shin",
            many: "{0} n-uaire an chloig ó shin",
            other: "{0} uair an chloig ó shin"
          }
        }
      },
      "hour-short": {
        displayName: "uair",
        relative: {
          0: "an uair seo"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} uair",
            two: "i gceann {0} uair",
            few: "i gceann {0} huaire",
            many: "i gceann {0} n-uaire",
            other: "i gceann {0} uair"
          },
          past: {
            one: "{0} uair ó shin",
            two: "{0} uair ó shin",
            few: "{0} huaire ó shin",
            many: "{0} n-uaire ó shin",
            other: "{0} uair ó shin"
          }
        }
      },
      minute: {
        displayName: "Nóiméad",
        relative: {
          0: "an nóiméad seo"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} nóiméad",
            two: "i gceann {0} nóiméad",
            few: "i gceann {0} nóiméad",
            many: "i gceann {0} nóiméad",
            other: "i gceann {0} nóiméad"
          },
          past: {
            one: "{0} nóiméad ó shin",
            two: "{0} nóiméad ó shin",
            few: "{0} nóiméad ó shin",
            many: "{0} nóiméad ó shin",
            other: "{0} nóiméad ó shin"
          }
        }
      },
      "minute-short": {
        displayName: "nóim.",
        relative: {
          0: "an nóiméad seo"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} nóim.",
            two: "i gceann {0} nóim.",
            few: "i gceann {0} nóim.",
            many: "i gceann {0} nóim.",
            other: "i gceann {0} nóim."
          },
          past: {
            one: "{0} nóim. ó shin",
            two: "{0} nóim. ó shin",
            few: "{0} nóim. ó shin",
            many: "{0} nóim. ó shin",
            other: "{0} nóim. ó shin"
          }
        }
      },
      second: {
        displayName: "Soicind",
        relative: {
          0: "anois"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} soicind",
            two: "i gceann {0} shoicind",
            few: "i gceann {0} shoicind",
            many: "i gceann {0} soicind",
            other: "i gceann {0} soicind"
          },
          past: {
            one: "{0} soicind ó shin",
            two: "{0} shoicind ó shin",
            few: "{0} shoicind ó shin",
            many: "{0} soicind ó shin",
            other: "{0} soicind ó shin"
          }
        }
      },
      "second-short": {
        displayName: "soic.",
        relative: {
          0: "anois"
        },
        relativeTime: {
          future: {
            one: "i gceann {0} soic.",
            two: "i gceann {0} shoic.",
            few: "i gceann {0} shoic.",
            many: "i gceann {0} soic.",
            other: "i gceann {0} soic."
          },
          past: {
            one: "{0} soic. ó shin",
            two: "{0} shoic. ó shin",
            few: "{0} shoic. ó shin",
            many: "{0} soic. ó shin",
            other: "{0} soic. ó shin"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/gd.js":
/*!*******************************!*\
  !*** ./src/locale-data/gd.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (a, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "gd",
    pluralRuleFunction: function pluralRuleFunction(a, e) {
      var i = String(a).split("."),
        n = Number(i[0]) == a;
      return e ? 1 == a || 11 == a ? "one" : 2 == a || 12 == a ? "two" : 3 == a || 13 == a ? "few" : "other" : 1 == a || 11 == a ? "one" : 2 == a || 12 == a ? "two" : n && a >= 3 && a <= 10 || n && a >= 13 && a <= 19 ? "few" : "other";
    },
    fields: {
      year: {
        displayName: "bliadhna",
        relative: {
          0: "am bliadhna",
          1: "an ath-bhliadhna",
          "-2": "a-bhòn-uiridh",
          "-1": "an-uiridh"
        },
        relativeTime: {
          future: {
            one: "an ceann {0} bhliadhna",
            two: "an ceann {0} bhliadhna",
            few: "an ceann {0} bliadhnaichean",
            other: "an ceann {0} bliadhna"
          },
          past: {
            one: "{0} bhliadhna air ais",
            two: "{0} bhliadhna air ais",
            few: "{0} bhliadhnaichean air ais",
            other: "{0} bliadhna air ais"
          }
        }
      },
      "year-short": {
        displayName: "blia.",
        relative: {
          0: "am bliadhna",
          1: "an ath-bhliadhna",
          "-2": "a-bhòn-uiridh",
          "-1": "an-uiridh"
        },
        relativeTime: {
          future: {
            one: "an {0} bhlia.",
            two: "an {0} bhlia.",
            few: "an {0} blia.",
            other: "an {0} blia."
          },
          past: {
            one: "o {0} bhlia.",
            two: "o {0} bhlia.",
            few: "o {0} blia.",
            other: "o {0} blia."
          }
        }
      },
      month: {
        displayName: "mìos",
        relative: {
          0: "am mìos seo",
          1: "an ath-mhìos",
          "-1": "am mìos seo chaidh"
        },
        relativeTime: {
          future: {
            one: "an ceann {0} mhìosa",
            two: "an ceann {0} mhìosa",
            few: "an ceann {0} mìosan",
            other: "an ceann {0} mìosa"
          },
          past: {
            one: "{0} mhìos air ais",
            two: "{0} mhìos air ais",
            few: "{0} mìosan air ais",
            other: "{0} mìos air ais"
          }
        }
      },
      "month-short": {
        displayName: "mìos",
        relative: {
          0: "am mìos seo",
          1: "an ath-mhìos",
          "-1": "am mìos sa chaidh"
        },
        relativeTime: {
          future: {
            one: "an {0} mhìos.",
            two: "an {0} mhìos.",
            few: "an {0} mìos.",
            other: "an {0} mìos."
          },
          past: {
            one: "o {0} mhìos.",
            two: "o {0} mhìos.",
            few: "o {0} mìos.",
            other: "o {0} mìos."
          }
        }
      },
      day: {
        displayName: "latha",
        relative: {
          0: "an-diugh",
          1: "a-màireach",
          2: "an-earar",
          3: "an-eararais",
          "-2": "a-bhòin-dè",
          "-1": "an-dè"
        },
        relativeTime: {
          future: {
            one: "an ceann {0} latha",
            two: "an ceann {0} latha",
            few: "an ceann {0} làithean",
            other: "an ceann {0} latha"
          },
          past: {
            one: "{0} latha air ais",
            two: "{0} latha air ais",
            few: "{0} làithean air ais",
            other: "{0} latha air ais"
          }
        }
      },
      "day-short": {
        displayName: "là",
        relative: {
          0: "an-diugh",
          1: "a-màireach",
          2: "an-earar",
          3: "an-eararais",
          "-2": "a-bhòin-dè",
          "-1": "an-dè"
        },
        relativeTime: {
          future: {
            one: "an {0} là",
            two: "an {0} là",
            few: "an {0} là.",
            other: "an {0} là"
          },
          past: {
            one: "o {0} là",
            two: "o {0} là",
            few: "o {0} là.",
            other: "o {0} là"
          }
        }
      },
      hour: {
        displayName: "uair a thìde",
        relative: {
          0: "am broinn uair a thìde"
        },
        relativeTime: {
          future: {
            one: "an ceann {0} uair a thìde",
            two: "an ceann {0} uair a thìde",
            few: "an ceann {0} uairean a thìde",
            other: "an ceann {0} uair a thìde"
          },
          past: {
            one: "{0} uair a thìde air ais",
            two: "{0} uair a thìde air ais",
            few: "{0} uairean a thìde air ais",
            other: "{0} uair a thìde air ais"
          }
        }
      },
      "hour-short": {
        displayName: "uair",
        relative: {
          0: "am broinn uair"
        },
        relativeTime: {
          future: {
            one: "an {0} uair",
            two: "an {0} uair",
            few: "an {0} uair.",
            other: "an {0} uair"
          },
          past: {
            one: "o {0} uair",
            two: "o {0} uair",
            few: "o {0} uair.",
            other: "o {0} uair"
          }
        }
      },
      minute: {
        displayName: "mionaid",
        relative: {
          0: "am broinn mionaid"
        },
        relativeTime: {
          future: {
            one: "an ceann {0} mhionaid",
            two: "an ceann {0} mhionaid",
            few: "an ceann {0} mionaidean",
            other: "an ceann {0} mionaid"
          },
          past: {
            one: "{0} mhionaid air ais",
            two: "{0} mhionaid air ais",
            few: "{0} mionaidean air ais",
            other: "{0} mionaid air ais"
          }
        }
      },
      "minute-short": {
        displayName: "mion.",
        relative: {
          0: "am broinn mion."
        },
        relativeTime: {
          future: {
            one: "an {0} mhion.",
            two: "an {0} mhion.",
            few: "an {0} mion.",
            other: "an {0} mion."
          },
          past: {
            one: "o {0} mhion.",
            two: "o {0} mhion.",
            few: "o {0} mion.",
            other: "o {0} mion."
          }
        }
      },
      second: {
        displayName: "diog",
        relative: {
          0: "an-dràsta"
        },
        relativeTime: {
          future: {
            one: "an ceann {0} diog",
            two: "an ceann {0} dhiog",
            few: "an ceann {0} diogan",
            other: "an ceann {0} diog"
          },
          past: {
            one: "{0} diog air ais",
            two: "{0} dhiog air ais",
            few: "{0} diogan air ais",
            other: "{0} diog air ais"
          }
        }
      },
      "second-short": {
        displayName: "diog",
        relative: {
          0: "an-dràsta"
        },
        relativeTime: {
          future: {
            one: "an {0} diog",
            two: "an {0} dhiog",
            few: "an {0} diog.",
            other: "an {0} diog"
          },
          past: {
            one: "o {0} diog",
            two: "o {0} dhiog",
            few: "o {0} diog.",
            other: "o {0} diog"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/gl.js":
/*!*******************************!*\
  !*** ./src/locale-data/gl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "gl",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var o = !String(e).split(".")[1];
      return a ? "other" : 1 == e && o ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "ano",
        relative: {
          0: "este ano",
          1: "o próximo ano",
          "-1": "o ano pasado"
        },
        relativeTime: {
          future: {
            one: "en {0} ano",
            other: "en {0} anos"
          },
          past: {
            one: "hai {0} ano",
            other: "hai {0} anos"
          }
        }
      },
      "year-short": {
        displayName: "ano",
        relative: {
          0: "este ano",
          1: "seguinte ano",
          "-1": "ano pasado"
        },
        relativeTime: {
          future: {
            one: "en {0} ano",
            other: "en {0} anos"
          },
          past: {
            one: "hai {0} ano",
            other: "hai {0} anos"
          }
        }
      },
      month: {
        displayName: "mes",
        relative: {
          0: "este mes",
          1: "o próximo mes",
          "-1": "o mes pasado"
        },
        relativeTime: {
          future: {
            one: "en {0} mes",
            other: "en {0} meses"
          },
          past: {
            one: "hai {0} mes",
            other: "hai {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "mes",
        relative: {
          0: "este m.",
          1: "m. seguinte",
          "-1": "m. pasado"
        },
        relativeTime: {
          future: {
            one: "en {0} mes",
            other: "en {0} meses"
          },
          past: {
            one: "hai {0} mes",
            other: "hai {0} meses"
          }
        }
      },
      day: {
        displayName: "día",
        relative: {
          0: "hoxe",
          1: "mañá",
          2: "pasadomañá",
          "-2": "antonte",
          "-1": "onte"
        },
        relativeTime: {
          future: {
            one: "en {0} día",
            other: "en {0} días"
          },
          past: {
            one: "hai {0} día",
            other: "hai {0} días"
          }
        }
      },
      "day-short": {
        displayName: "día",
        relative: {
          0: "hoxe",
          1: "mañá",
          2: "pasadomañá",
          "-2": "antonte",
          "-1": "onte"
        },
        relativeTime: {
          future: {
            one: "en {0} día",
            other: "en {0} días"
          },
          past: {
            one: "hai {0} día",
            other: "hai {0} días"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "en {0} hora",
            other: "en {0} horas"
          },
          past: {
            one: "hai {0} hora",
            other: "hai {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "en {0} h",
            other: "en {0} h"
          },
          past: {
            one: "hai {0} h",
            other: "hai {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "en {0} minuto",
            other: "en {0} minutos"
          },
          past: {
            one: "hai {0} minuto",
            other: "hai {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "en {0} min",
            other: "en {0} min"
          },
          past: {
            one: "hai {0} min",
            other: "hai {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "en {0} segundo",
            other: "en {0} segundos"
          },
          past: {
            one: "hai {0} segundo",
            other: "hai {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "en {0} s",
            other: "en {0} s"
          },
          past: {
            one: "hai {0} s",
            other: "hai {0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/ha.js":
/*!*******************************!*\
  !*** ./src/locale-data/ha.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ha",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Shekara",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Shekara",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Wata",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Wata",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Kwana",
        relative: {
          0: "Yau",
          1: "Gobe",
          "-1": "Jiya"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Kwana",
        relative: {
          0: "Yau",
          1: "Gobe",
          "-1": "Jiya"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Awa",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Awa",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minti",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minti",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Daƙiƙa",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Daƙiƙa",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "ha-Arab",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "ha-GH",
    parentLocale: "ha"
  }, {
    locale: "ha-NE",
    parentLocale: "ha"
  }];
});

/***/ }),

/***/ "./src/locale-data/he.js":
/*!*******************************!*\
  !*** ./src/locale-data/he.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "he",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = String(e).split("."),
        o = a[0],
        r = !a[1],
        n = Number(a[0]) == e,
        i = n && a[0].slice(-1);
      return t ? "other" : 1 == e && r ? "one" : 2 == o && r ? "two" : r && (e < 0 || e > 10) && n && 0 == i ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "שנה",
        relative: {
          0: "השנה",
          1: "השנה הבאה",
          "-1": "השנה שעברה"
        },
        relativeTime: {
          future: {
            one: "בעוד שנה",
            two: "בעוד שנתיים",
            many: "בעוד {0} שנה",
            other: "בעוד {0} שנים"
          },
          past: {
            one: "לפני שנה",
            two: "לפני שנתיים",
            many: "לפני {0} שנה",
            other: "לפני {0} שנים"
          }
        }
      },
      "year-short": {
        displayName: "שנ׳",
        relative: {
          0: "השנה",
          1: "השנה הבאה",
          "-1": "השנה שעברה"
        },
        relativeTime: {
          future: {
            one: "בעוד שנה",
            two: "בעוד שנתיים",
            many: "בעוד {0} שנה",
            other: "בעוד {0} שנים"
          },
          past: {
            one: "לפני שנה",
            two: "לפני שנתיים",
            many: "לפני {0} שנה",
            other: "לפני {0} שנים"
          }
        }
      },
      month: {
        displayName: "חודש",
        relative: {
          0: "החודש",
          1: "החודש הבא",
          "-1": "החודש שעבר"
        },
        relativeTime: {
          future: {
            one: "בעוד חודש",
            two: "בעוד חודשיים",
            many: "בעוד {0} חודשים",
            other: "בעוד {0} חודשים"
          },
          past: {
            one: "לפני חודש",
            two: "לפני חודשיים",
            many: "לפני {0} חודשים",
            other: "לפני {0} חודשים"
          }
        }
      },
      "month-short": {
        displayName: "חו׳",
        relative: {
          0: "החודש",
          1: "החודש הבא",
          "-1": "החודש שעבר"
        },
        relativeTime: {
          future: {
            one: "בעוד חודש",
            two: "בעוד חודשיים",
            many: "בעוד {0} חודשים",
            other: "בעוד {0} חודשים"
          },
          past: {
            one: "לפני חודש",
            two: "לפני חודשיים",
            many: "לפני {0} חודשים",
            other: "לפני {0} חודשים"
          }
        }
      },
      day: {
        displayName: "יום",
        relative: {
          0: "היום",
          1: "מחר",
          2: "מחרתיים",
          "-2": "שלשום",
          "-1": "אתמול"
        },
        relativeTime: {
          future: {
            one: "בעוד יום {0}",
            two: "בעוד יומיים",
            many: "בעוד {0} ימים",
            other: "בעוד {0} ימים"
          },
          past: {
            one: "לפני יום {0}",
            two: "לפני יומיים",
            many: "לפני {0} ימים",
            other: "לפני {0} ימים"
          }
        }
      },
      "day-short": {
        displayName: "יום",
        relative: {
          0: "היום",
          1: "מחר",
          2: "מחרתיים",
          "-2": "שלשום",
          "-1": "אתמול"
        },
        relativeTime: {
          future: {
            one: "מחר",
            two: "בעוד יומיים",
            many: "בעוד {0} ימים",
            other: "בעוד {0} ימים"
          },
          past: {
            one: "אתמול",
            two: "לפני יומיים",
            many: "לפני {0} ימים",
            other: "לפני {0} ימים"
          }
        }
      },
      hour: {
        displayName: "שעה",
        relative: {
          0: "בשעה זו"
        },
        relativeTime: {
          future: {
            one: "בעוד שעה",
            two: "בעוד שעתיים",
            many: "בעוד {0} שעות",
            other: "בעוד {0} שעות"
          },
          past: {
            one: "לפני שעה",
            two: "לפני שעתיים",
            many: "לפני {0} שעות",
            other: "לפני {0} שעות"
          }
        }
      },
      "hour-short": {
        displayName: "שעה",
        relative: {
          0: "בשעה זו"
        },
        relativeTime: {
          future: {
            one: "בעוד שעה",
            two: "בעוד שעתיים",
            many: "בעוד {0} שע׳",
            other: "בעוד {0} שע׳"
          },
          past: {
            one: "לפני שעה",
            two: "לפני שעתיים",
            many: "לפני {0} שע׳",
            other: "לפני {0} שע׳"
          }
        }
      },
      minute: {
        displayName: "דקה",
        relative: {
          0: "בדקה זו"
        },
        relativeTime: {
          future: {
            one: "בעוד דקה",
            two: "בעוד שתי דקות",
            many: "בעוד {0} דקות",
            other: "בעוד {0} דקות"
          },
          past: {
            one: "לפני דקה",
            two: "לפני שתי דקות",
            many: "לפני {0} דקות",
            other: "לפני {0} דקות"
          }
        }
      },
      "minute-short": {
        displayName: "דק׳",
        relative: {
          0: "בדקה זו"
        },
        relativeTime: {
          future: {
            one: "בעוד דקה",
            two: "בעוד שתי דק׳",
            many: "בעוד {0} דק׳",
            other: "בעוד {0} דק׳"
          },
          past: {
            one: "לפני דקה",
            two: "לפני {0} דק׳",
            many: "לפני {0} דק׳",
            other: "לפני {0} דק׳"
          }
        }
      },
      second: {
        displayName: "שנייה",
        relative: {
          0: "עכשיו"
        },
        relativeTime: {
          future: {
            one: "בעוד שנייה",
            two: "בעוד שתי שניות",
            many: "בעוד {0} שניות",
            other: "בעוד {0} שניות"
          },
          past: {
            one: "לפני שנייה",
            two: "לפני שתי שניות",
            many: "לפני {0} שניות",
            other: "לפני {0} שניות"
          }
        }
      },
      "second-short": {
        displayName: "שנ׳",
        relative: {
          0: "עכשיו"
        },
        relativeTime: {
          future: {
            one: "בעוד שנ׳",
            two: "בעוד שתי שנ׳",
            many: "בעוד {0} שנ׳",
            other: "בעוד {0} שנ׳"
          },
          past: {
            one: "לפני שנ׳",
            two: "לפני שתי שנ׳",
            many: "לפני {0} שנ׳",
            other: "לפני {0} שנ׳"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/hr.js":
/*!*******************************!*\
  !*** ./src/locale-data/hr.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "hr",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var i = String(e).split("."),
        r = i[0],
        t = i[1] || "",
        o = !i[1],
        n = r.slice(-1),
        s = r.slice(-2),
        p = t.slice(-1),
        u = t.slice(-2);
      return a ? "other" : o && 1 == n && 11 != s || 1 == p && 11 != u ? "one" : o && n >= 2 && n <= 4 && (s < 12 || s > 14) || p >= 2 && p <= 4 && (u < 12 || u > 14) ? "few" : "other";
    },
    fields: {
      year: {
        displayName: "godina",
        relative: {
          0: "ove godine",
          1: "sljedeće godine",
          "-1": "prošle godine"
        },
        relativeTime: {
          future: {
            one: "za {0} godinu",
            few: "za {0} godine",
            other: "za {0} godina"
          },
          past: {
            one: "prije {0} godinu",
            few: "prije {0} godine",
            other: "prije {0} godina"
          }
        }
      },
      "year-short": {
        displayName: "g.",
        relative: {
          0: "ove god.",
          1: "sljedeće god.",
          "-1": "prošle god."
        },
        relativeTime: {
          future: {
            one: "za {0} g.",
            few: "za {0} g.",
            other: "za {0} g."
          },
          past: {
            one: "prije {0} g.",
            few: "prije {0} g.",
            other: "prije {0} g."
          }
        }
      },
      month: {
        displayName: "mjesec",
        relative: {
          0: "ovaj mjesec",
          1: "sljedeći mjesec",
          "-1": "prošli mjesec"
        },
        relativeTime: {
          future: {
            one: "za {0} mjesec",
            few: "za {0} mjeseca",
            other: "za {0} mjeseci"
          },
          past: {
            one: "prije {0} mjesec",
            few: "prije {0} mjeseca",
            other: "prije {0} mjeseci"
          }
        }
      },
      "month-short": {
        displayName: "mj.",
        relative: {
          0: "ovaj mj.",
          1: "sljedeći mj.",
          "-1": "prošli mj."
        },
        relativeTime: {
          future: {
            one: "za {0} mj.",
            few: "za {0} mj.",
            other: "za {0} mj."
          },
          past: {
            one: "prije {0} mj.",
            few: "prije {0} mj.",
            other: "prije {0} mj."
          }
        }
      },
      day: {
        displayName: "dan",
        relative: {
          0: "danas",
          1: "sutra",
          2: "prekosutra",
          "-2": "prekjučer",
          "-1": "jučer"
        },
        relativeTime: {
          future: {
            one: "za {0} dan",
            few: "za {0} dana",
            other: "za {0} dana"
          },
          past: {
            one: "prije {0} dan",
            few: "prije {0} dana",
            other: "prije {0} dana"
          }
        }
      },
      "day-short": {
        displayName: "d.",
        relative: {
          0: "danas",
          1: "sutra",
          2: "prekosutra",
          "-2": "prekjučer",
          "-1": "jučer"
        },
        relativeTime: {
          future: {
            one: "za {0} dan",
            few: "za {0} dana",
            other: "za {0} dana"
          },
          past: {
            one: "prije {0} dan",
            few: "prije {0} dana",
            other: "prije {0} dana"
          }
        }
      },
      hour: {
        displayName: "sat",
        relative: {
          0: "ovaj sat"
        },
        relativeTime: {
          future: {
            one: "za {0} sat",
            few: "za {0} sata",
            other: "za {0} sati"
          },
          past: {
            one: "prije {0} sat",
            few: "prije {0} sata",
            other: "prije {0} sati"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "ovaj sat"
        },
        relativeTime: {
          future: {
            one: "za {0} h",
            few: "za {0} h",
            other: "za {0} h"
          },
          past: {
            one: "prije {0} h",
            few: "prije {0} h",
            other: "prije {0} h"
          }
        }
      },
      minute: {
        displayName: "minuta",
        relative: {
          0: "ova minuta"
        },
        relativeTime: {
          future: {
            one: "za {0} minutu",
            few: "za {0} minute",
            other: "za {0} minuta"
          },
          past: {
            one: "prije {0} minutu",
            few: "prije {0} minute",
            other: "prije {0} minuta"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "ova minuta"
        },
        relativeTime: {
          future: {
            one: "za {0} min",
            few: "za {0} min",
            other: "za {0} min"
          },
          past: {
            one: "prije {0} min",
            few: "prije {0} min",
            other: "prije {0} min"
          }
        }
      },
      second: {
        displayName: "sekunda",
        relative: {
          0: "sad"
        },
        relativeTime: {
          future: {
            one: "za {0} sekundu",
            few: "za {0} sekunde",
            other: "za {0} sekundi"
          },
          past: {
            one: "prije {0} sekundu",
            few: "prije {0} sekunde",
            other: "prije {0} sekundi"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "sad"
        },
        relativeTime: {
          future: {
            one: "za {0} s",
            few: "za {0} s",
            other: "za {0} s"
          },
          past: {
            one: "prije {0} s",
            few: "prije {0} s",
            other: "prije {0} s"
          }
        }
      }
    }
  }, {
    locale: "hr-BA",
    parentLocale: "hr"
  }];
});

/***/ }),

/***/ "./src/locale-data/hu.js":
/*!*******************************!*\
  !*** ./src/locale-data/hu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "hu",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? 1 == e || 5 == e ? "one" : "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "év",
        relative: {
          0: "ez az év",
          1: "következő év",
          "-1": "előző év"
        },
        relativeTime: {
          future: {
            one: "{0} év múlva",
            other: "{0} év múlva"
          },
          past: {
            one: "{0} évvel ezelőtt",
            other: "{0} évvel ezelőtt"
          }
        }
      },
      "year-short": {
        displayName: "év",
        relative: {
          0: "ez az év",
          1: "következő év",
          "-1": "előző év"
        },
        relativeTime: {
          future: {
            one: "{0} év múlva",
            other: "{0} év múlva"
          },
          past: {
            one: "{0} évvel ezelőtt",
            other: "{0} évvel ezelőtt"
          }
        }
      },
      month: {
        displayName: "hónap",
        relative: {
          0: "ez a hónap",
          1: "következő hónap",
          "-1": "előző hónap"
        },
        relativeTime: {
          future: {
            one: "{0} hónap múlva",
            other: "{0} hónap múlva"
          },
          past: {
            one: "{0} hónappal ezelőtt",
            other: "{0} hónappal ezelőtt"
          }
        }
      },
      "month-short": {
        displayName: "hónap",
        relative: {
          0: "ez a hónap",
          1: "következő hónap",
          "-1": "előző hónap"
        },
        relativeTime: {
          future: {
            one: "{0} hónap múlva",
            other: "{0} hónap múlva"
          },
          past: {
            one: "{0} hónappal ezelőtt",
            other: "{0} hónappal ezelőtt"
          }
        }
      },
      day: {
        displayName: "nap",
        relative: {
          0: "ma",
          1: "holnap",
          2: "holnapután",
          "-2": "tegnapelőtt",
          "-1": "tegnap"
        },
        relativeTime: {
          future: {
            one: "{0} nap múlva",
            other: "{0} nap múlva"
          },
          past: {
            one: "{0} nappal ezelőtt",
            other: "{0} nappal ezelőtt"
          }
        }
      },
      "day-short": {
        displayName: "nap",
        relative: {
          0: "ma",
          1: "holnap",
          2: "holnapután",
          "-2": "tegnapelőtt",
          "-1": "tegnap"
        },
        relativeTime: {
          future: {
            one: "{0} nap múlva",
            other: "{0} nap múlva"
          },
          past: {
            one: "{0} napja",
            other: "{0} napja"
          }
        }
      },
      hour: {
        displayName: "óra",
        relative: {
          0: "ebben az órában"
        },
        relativeTime: {
          future: {
            one: "{0} óra múlva",
            other: "{0} óra múlva"
          },
          past: {
            one: "{0} órával ezelőtt",
            other: "{0} órával ezelőtt"
          }
        }
      },
      "hour-short": {
        displayName: "óra",
        relative: {
          0: "ebben az órában"
        },
        relativeTime: {
          future: {
            one: "{0} óra múlva",
            other: "{0} óra múlva"
          },
          past: {
            one: "{0} órával ezelőtt",
            other: "{0} órával ezelőtt"
          }
        }
      },
      minute: {
        displayName: "perc",
        relative: {
          0: "ebben a percben"
        },
        relativeTime: {
          future: {
            one: "{0} perc múlva",
            other: "{0} perc múlva"
          },
          past: {
            one: "{0} perccel ezelőtt",
            other: "{0} perccel ezelőtt"
          }
        }
      },
      "minute-short": {
        displayName: "perc",
        relative: {
          0: "ebben a percben"
        },
        relativeTime: {
          future: {
            one: "{0} perc múlva",
            other: "{0} perc múlva"
          },
          past: {
            one: "{0} perccel ezelőtt",
            other: "{0} perccel ezelőtt"
          }
        }
      },
      second: {
        displayName: "másodperc",
        relative: {
          0: "most"
        },
        relativeTime: {
          future: {
            one: "{0} másodperc múlva",
            other: "{0} másodperc múlva"
          },
          past: {
            one: "{0} másodperccel ezelőtt",
            other: "{0} másodperccel ezelőtt"
          }
        }
      },
      "second-short": {
        displayName: "másodperc",
        relative: {
          0: "most"
        },
        relativeTime: {
          future: {
            one: "{0} másodperc múlva",
            other: "{0} másodperc múlva"
          },
          past: {
            one: "{0} másodperccel ezelőtt",
            other: "{0} másodperccel ezelőtt"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/hy.js":
/*!*******************************!*\
  !*** ./src/locale-data/hy.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "hy",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "տարի",
        relative: {
          0: "այս տարի",
          1: "հաջորդ տարի",
          "-1": "նախորդ տարի"
        },
        relativeTime: {
          future: {
            one: "{0} տարուց",
            other: "{0} տարուց"
          },
          past: {
            one: "{0} տարի առաջ",
            other: "{0} տարի առաջ"
          }
        }
      },
      "year-short": {
        displayName: "տ",
        relative: {
          0: "այս տարի",
          1: "հաջորդ տարի",
          "-1": "նախորդ տարի"
        },
        relativeTime: {
          future: {
            one: "{0} տարուց",
            other: "{0} տարուց"
          },
          past: {
            one: "{0} տ առաջ",
            other: "{0} տ առաջ"
          }
        }
      },
      month: {
        displayName: "ամիս",
        relative: {
          0: "այս ամիս",
          1: "հաջորդ ամիս",
          "-1": "նախորդ ամիս"
        },
        relativeTime: {
          future: {
            one: "{0} ամսից",
            other: "{0} ամսից"
          },
          past: {
            one: "{0} ամիս առաջ",
            other: "{0} ամիս առաջ"
          }
        }
      },
      "month-short": {
        displayName: "ամս",
        relative: {
          0: "այս ամիս",
          1: "հաջորդ ամիս",
          "-1": "անցյալ ամիս"
        },
        relativeTime: {
          future: {
            one: "{0} ամսից",
            other: "{0} ամսից"
          },
          past: {
            one: "{0} ամիս առաջ",
            other: "{0} ամիս առաջ"
          }
        }
      },
      day: {
        displayName: "օր",
        relative: {
          0: "այսօր",
          1: "վաղը",
          2: "վաղը չէ մյուս օրը",
          "-2": "երեկ չէ առաջի օրը",
          "-1": "երեկ"
        },
        relativeTime: {
          future: {
            one: "{0} օրից",
            other: "{0} օրից"
          },
          past: {
            one: "{0} օր առաջ",
            other: "{0} օր առաջ"
          }
        }
      },
      "day-short": {
        displayName: "օր",
        relative: {
          0: "այսօր",
          1: "վաղը",
          2: "վաղը չէ մյուս օրը",
          "-2": "երեկ չէ առաջի օրը",
          "-1": "երեկ"
        },
        relativeTime: {
          future: {
            one: "{0} օրից",
            other: "{0} օրից"
          },
          past: {
            one: "{0} օր առաջ",
            other: "{0} օր առաջ"
          }
        }
      },
      hour: {
        displayName: "ժամ",
        relative: {
          0: "այս ժամին"
        },
        relativeTime: {
          future: {
            one: "{0} ժամից",
            other: "{0} ժամից"
          },
          past: {
            one: "{0} ժամ առաջ",
            other: "{0} ժամ առաջ"
          }
        }
      },
      "hour-short": {
        displayName: "ժ",
        relative: {
          0: "այս ժամին"
        },
        relativeTime: {
          future: {
            one: "{0} ժ-ից",
            other: "{0} ժ-ից"
          },
          past: {
            one: "{0} ժ առաջ",
            other: "{0} ժ առաջ"
          }
        }
      },
      minute: {
        displayName: "րոպե",
        relative: {
          0: "այս րոպեին"
        },
        relativeTime: {
          future: {
            one: "{0} րոպեից",
            other: "{0} րոպեից"
          },
          past: {
            one: "{0} րոպե առաջ",
            other: "{0} րոպե առաջ"
          }
        }
      },
      "minute-short": {
        displayName: "ր",
        relative: {
          0: "այս րոպեին"
        },
        relativeTime: {
          future: {
            one: "{0} ր-ից",
            other: "{0} ր-ից"
          },
          past: {
            one: "{0} ր առաջ",
            other: "{0} ր առաջ"
          }
        }
      },
      second: {
        displayName: "վայրկյան",
        relative: {
          0: "հիմա"
        },
        relativeTime: {
          future: {
            one: "{0} վայրկյանից",
            other: "{0} վայրկյանից"
          },
          past: {
            one: "{0} վայրկյան առաջ",
            other: "{0} վայրկյան առաջ"
          }
        }
      },
      "second-short": {
        displayName: "վ",
        relative: {
          0: "հիմա"
        },
        relativeTime: {
          future: {
            one: "{0} վրկ-ից",
            other: "{0} վրկ-ից"
          },
          past: {
            one: "{0} վրկ առաջ",
            other: "{0} վրկ առաջ"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/id.js":
/*!*******************************!*\
  !*** ./src/locale-data/id.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "id",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "tahun",
        relative: {
          0: "tahun ini",
          1: "tahun depan",
          "-1": "tahun lalu"
        },
        relativeTime: {
          future: {
            other: "dalam {0} tahun"
          },
          past: {
            other: "{0} tahun yang lalu"
          }
        }
      },
      "year-short": {
        displayName: "thn.",
        relative: {
          0: "tahun ini",
          1: "tahun depan",
          "-1": "tahun lalu"
        },
        relativeTime: {
          future: {
            other: "dlm {0} thn"
          },
          past: {
            other: "{0} thn lalu"
          }
        }
      },
      month: {
        displayName: "bulan",
        relative: {
          0: "bulan ini",
          1: "bulan berikutnya",
          "-1": "bulan lalu"
        },
        relativeTime: {
          future: {
            other: "dalam {0} bulan"
          },
          past: {
            other: "{0} bulan yang lalu"
          }
        }
      },
      "month-short": {
        displayName: "bln.",
        relative: {
          0: "bulan ini",
          1: "bulan berikutnya",
          "-1": "bulan lalu"
        },
        relativeTime: {
          future: {
            other: "dlm {0} bln"
          },
          past: {
            other: "{0} bln lalu"
          }
        }
      },
      day: {
        displayName: "hari",
        relative: {
          0: "hari ini",
          1: "besok",
          2: "lusa",
          "-2": "kemarin dulu",
          "-1": "kemarin"
        },
        relativeTime: {
          future: {
            other: "dalam {0} hari"
          },
          past: {
            other: "{0} hari yang lalu"
          }
        }
      },
      "day-short": {
        displayName: "h",
        relative: {
          0: "hari ini",
          1: "besok",
          2: "lusa",
          "-2": "kemarin dulu",
          "-1": "kemarin"
        },
        relativeTime: {
          future: {
            other: "dalam {0} h"
          },
          past: {
            other: "{0} h lalu"
          }
        }
      },
      hour: {
        displayName: "Jam",
        relative: {
          0: "jam ini"
        },
        relativeTime: {
          future: {
            other: "dalam {0} jam"
          },
          past: {
            other: "{0} jam yang lalu"
          }
        }
      },
      "hour-short": {
        displayName: "jam",
        relative: {
          0: "jam ini"
        },
        relativeTime: {
          future: {
            other: "dalam {0} jam"
          },
          past: {
            other: "{0} jam lalu"
          }
        }
      },
      minute: {
        displayName: "menit",
        relative: {
          0: "menit ini"
        },
        relativeTime: {
          future: {
            other: "dalam {0} menit"
          },
          past: {
            other: "{0} menit yang lalu"
          }
        }
      },
      "minute-short": {
        displayName: "mnt.",
        relative: {
          0: "menit ini"
        },
        relativeTime: {
          future: {
            other: "dlm {0} mnt"
          },
          past: {
            other: "{0} mnt lalu"
          }
        }
      },
      second: {
        displayName: "detik",
        relative: {
          0: "sekarang"
        },
        relativeTime: {
          future: {
            other: "dalam {0} detik"
          },
          past: {
            other: "{0} detik yang lalu"
          }
        }
      },
      "second-short": {
        displayName: "dtk.",
        relative: {
          0: "sekarang"
        },
        relativeTime: {
          future: {
            other: "dlm {0} dtk"
          },
          past: {
            other: "{0} dtk lalu"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/is.js":
/*!*******************************!*\
  !*** ./src/locale-data/is.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, r) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "is",
    pluralRuleFunction: function pluralRuleFunction(e, r) {
      var t = String(e).split("."),
        i = t[0],
        a = Number(t[0]) == e,
        n = i.slice(-1),
        s = i.slice(-2);
      return r ? "other" : a && 1 == n && 11 != s || !a ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "ár",
        relative: {
          0: "á þessu ári",
          1: "á næsta ári",
          "-1": "á síðasta ári"
        },
        relativeTime: {
          future: {
            one: "eftir {0} ár",
            other: "eftir {0} ár"
          },
          past: {
            one: "fyrir {0} ári",
            other: "fyrir {0} árum"
          }
        }
      },
      "year-short": {
        displayName: "ár",
        relative: {
          0: "á þessu ári",
          1: "á næsta ári",
          "-1": "á síðasta ári"
        },
        relativeTime: {
          future: {
            one: "eftir {0} ár",
            other: "eftir {0} ár"
          },
          past: {
            one: "fyrir {0} ári",
            other: "fyrir {0} árum"
          }
        }
      },
      month: {
        displayName: "mánuður",
        relative: {
          0: "í þessum mánuði",
          1: "í næsta mánuði",
          "-1": "í síðasta mánuði"
        },
        relativeTime: {
          future: {
            one: "eftir {0} mánuð",
            other: "eftir {0} mánuði"
          },
          past: {
            one: "fyrir {0} mánuði",
            other: "fyrir {0} mánuðum"
          }
        }
      },
      "month-short": {
        displayName: "mán.",
        relative: {
          0: "í þessum mán.",
          1: "í næsta mán.",
          "-1": "í síðasta mán."
        },
        relativeTime: {
          future: {
            one: "eftir {0} mán.",
            other: "eftir {0} mán."
          },
          past: {
            one: "fyrir {0} mán.",
            other: "fyrir {0} mán."
          }
        }
      },
      day: {
        displayName: "dagur",
        relative: {
          0: "í dag",
          1: "á morgun",
          2: "eftir tvo daga",
          "-2": "í fyrradag",
          "-1": "í gær"
        },
        relativeTime: {
          future: {
            one: "eftir {0} dag",
            other: "eftir {0} daga"
          },
          past: {
            one: "fyrir {0} degi",
            other: "fyrir {0} dögum"
          }
        }
      },
      "day-short": {
        displayName: "dagur",
        relative: {
          0: "í dag",
          1: "á morgun",
          2: "eftir tvo daga",
          "-2": "í fyrradag",
          "-1": "í gær"
        },
        relativeTime: {
          future: {
            one: "eftir {0} dag",
            other: "eftir {0} daga"
          },
          past: {
            one: "fyrir {0} degi",
            other: "fyrir {0} dögum"
          }
        }
      },
      hour: {
        displayName: "klukkustund",
        relative: {
          0: "þessa stundina"
        },
        relativeTime: {
          future: {
            one: "eftir {0} klukkustund",
            other: "eftir {0} klukkustundir"
          },
          past: {
            one: "fyrir {0} klukkustund",
            other: "fyrir {0} klukkustundum"
          }
        }
      },
      "hour-short": {
        displayName: "klst.",
        relative: {
          0: "þessa stundina"
        },
        relativeTime: {
          future: {
            one: "eftir {0} klst.",
            other: "eftir {0} klst."
          },
          past: {
            one: "fyrir {0} klst.",
            other: "fyrir {0} klst."
          }
        }
      },
      minute: {
        displayName: "mínúta",
        relative: {
          0: "á þessari mínútu"
        },
        relativeTime: {
          future: {
            one: "eftir {0} mínútu",
            other: "eftir {0} mínútur"
          },
          past: {
            one: "fyrir {0} mínútu",
            other: "fyrir {0} mínútum"
          }
        }
      },
      "minute-short": {
        displayName: "mín.",
        relative: {
          0: "á þessari mínútu"
        },
        relativeTime: {
          future: {
            one: "eftir {0} mín.",
            other: "eftir {0} mín."
          },
          past: {
            one: "fyrir {0} mín.",
            other: "fyrir {0} mín."
          }
        }
      },
      second: {
        displayName: "sekúnda",
        relative: {
          0: "núna"
        },
        relativeTime: {
          future: {
            one: "eftir {0} sekúndu",
            other: "eftir {0} sekúndur"
          },
          past: {
            one: "fyrir {0} sekúndu",
            other: "fyrir {0} sekúndum"
          }
        }
      },
      "second-short": {
        displayName: "sek.",
        relative: {
          0: "núna"
        },
        relativeTime: {
          future: {
            one: "eftir {0} sek.",
            other: "eftir {0} sek."
          },
          past: {
            one: "fyrir {0} sek.",
            other: "fyrir {0} sek."
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/it.js":
/*!*******************************!*\
  !*** ./src/locale-data/it.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "it",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var t = !String(e).split(".")[1];
      return a ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && t ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "anno",
        relative: {
          0: "quest’anno",
          1: "anno prossimo",
          "-1": "anno scorso"
        },
        relativeTime: {
          future: {
            one: "tra {0} anno",
            other: "tra {0} anni"
          },
          past: {
            one: "{0} anno fa",
            other: "{0} anni fa"
          }
        }
      },
      "year-short": {
        displayName: "anno",
        relative: {
          0: "quest’anno",
          1: "anno prossimo",
          "-1": "anno scorso"
        },
        relativeTime: {
          future: {
            one: "tra {0} anno",
            other: "tra {0} anni"
          },
          past: {
            one: "{0} anno fa",
            other: "{0} anni fa"
          }
        }
      },
      month: {
        displayName: "mese",
        relative: {
          0: "questo mese",
          1: "mese prossimo",
          "-1": "mese scorso"
        },
        relativeTime: {
          future: {
            one: "tra {0} mese",
            other: "tra {0} mesi"
          },
          past: {
            one: "{0} mese fa",
            other: "{0} mesi fa"
          }
        }
      },
      "month-short": {
        displayName: "mese",
        relative: {
          0: "questo mese",
          1: "mese prossimo",
          "-1": "mese scorso"
        },
        relativeTime: {
          future: {
            one: "tra {0} mese",
            other: "tra {0} mesi"
          },
          past: {
            one: "{0} mese fa",
            other: "{0} mesi fa"
          }
        }
      },
      day: {
        displayName: "giorno",
        relative: {
          0: "oggi",
          1: "domani",
          2: "dopodomani",
          "-2": "l’altro ieri",
          "-1": "ieri"
        },
        relativeTime: {
          future: {
            one: "tra {0} giorno",
            other: "tra {0} giorni"
          },
          past: {
            one: "{0} giorno fa",
            other: "{0} giorni fa"
          }
        }
      },
      "day-short": {
        displayName: "g",
        relative: {
          0: "oggi",
          1: "domani",
          2: "dopodomani",
          "-2": "l’altro ieri",
          "-1": "ieri"
        },
        relativeTime: {
          future: {
            one: "tra {0} g",
            other: "tra {0} gg"
          },
          past: {
            one: "{0} g fa",
            other: "{0} gg fa"
          }
        }
      },
      hour: {
        displayName: "ora",
        relative: {
          0: "quest’ora"
        },
        relativeTime: {
          future: {
            one: "tra {0} ora",
            other: "tra {0} ore"
          },
          past: {
            one: "{0} ora fa",
            other: "{0} ore fa"
          }
        }
      },
      "hour-short": {
        displayName: "h.",
        relative: {
          0: "quest’ora"
        },
        relativeTime: {
          future: {
            one: "tra {0} h",
            other: "tra {0} h"
          },
          past: {
            one: "{0} h fa",
            other: "{0} h fa"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "questo minuto"
        },
        relativeTime: {
          future: {
            one: "tra {0} minuto",
            other: "tra {0} minuti"
          },
          past: {
            one: "{0} minuto fa",
            other: "{0} minuti fa"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "questo minuto"
        },
        relativeTime: {
          future: {
            one: "tra {0} min",
            other: "tra {0} min"
          },
          past: {
            one: "{0} min fa",
            other: "{0} min fa"
          }
        }
      },
      second: {
        displayName: "secondo",
        relative: {
          0: "ora"
        },
        relativeTime: {
          future: {
            one: "tra {0} secondo",
            other: "tra {0} secondi"
          },
          past: {
            one: "{0} secondo fa",
            other: "{0} secondi fa"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "ora"
        },
        relativeTime: {
          future: {
            one: "tra {0} s",
            other: "tra {0} sec."
          },
          past: {
            one: "{0} s fa",
            other: "{0} sec. fa"
          }
        }
      }
    }
  }, {
    locale: "it-CH",
    parentLocale: "it"
  }, {
    locale: "it-SM",
    parentLocale: "it"
  }, {
    locale: "it-VA",
    parentLocale: "it"
  }];
});

/***/ }),

/***/ "./src/locale-data/ja.js":
/*!*******************************!*\
  !*** ./src/locale-data/ja.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ja",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "翌年",
          "-1": "昨年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "翌年",
          "-1": "昨年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "今月",
          1: "翌月",
          "-1": "先月"
        },
        relativeTime: {
          future: {
            other: "{0} か月後"
          },
          past: {
            other: "{0} か月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "今月",
          1: "翌月",
          "-1": "先月"
        },
        relativeTime: {
          future: {
            other: "{0} か月後"
          },
          past: {
            other: "{0} か月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今日",
          1: "明日",
          2: "明後日",
          "-2": "一昨日",
          "-1": "昨日"
        },
        relativeTime: {
          future: {
            other: "{0} 日後"
          },
          past: {
            other: "{0} 日前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今日",
          1: "明日",
          2: "明後日",
          "-2": "一昨日",
          "-1": "昨日"
        },
        relativeTime: {
          future: {
            other: "{0} 日後"
          },
          past: {
            other: "{0} 日前"
          }
        }
      },
      hour: {
        displayName: "時",
        relative: {
          0: "1 時間以内"
        },
        relativeTime: {
          future: {
            other: "{0} 時間後"
          },
          past: {
            other: "{0} 時間前"
          }
        }
      },
      "hour-short": {
        displayName: "時",
        relative: {
          0: "1 時間以内"
        },
        relativeTime: {
          future: {
            other: "{0} 時間後"
          },
          past: {
            other: "{0} 時間前"
          }
        }
      },
      minute: {
        displayName: "分",
        relative: {
          0: "1 分以内"
        },
        relativeTime: {
          future: {
            other: "{0} 分後"
          },
          past: {
            other: "{0} 分前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "1 分以内"
        },
        relativeTime: {
          future: {
            other: "{0} 分後"
          },
          past: {
            other: "{0} 分前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "今"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "今"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/ka.js":
/*!*******************************!*\
  !*** ./src/locale-data/ka.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ka",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = String(e).split(".")[0],
        r = a.slice(-2);
      return t ? 1 == a ? "one" : 0 == a || r >= 2 && r <= 20 || 40 == r || 60 == r || 80 == r ? "many" : "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "წელი",
        relative: {
          0: "ამ წელს",
          1: "მომავალ წელს",
          "-1": "გასულ წელს"
        },
        relativeTime: {
          future: {
            one: "{0} წელიწადში",
            other: "{0} წელიწადში"
          },
          past: {
            one: "{0} წლის წინ",
            other: "{0} წლის წინ"
          }
        }
      },
      "year-short": {
        displayName: "წ.",
        relative: {
          0: "ამ წელს",
          1: "მომავალ წელს",
          "-1": "გასულ წელს"
        },
        relativeTime: {
          future: {
            one: "{0} წელში",
            other: "{0} წელში"
          },
          past: {
            one: "{0} წლის წინ",
            other: "{0} წლის წინ"
          }
        }
      },
      month: {
        displayName: "თვე",
        relative: {
          0: "ამ თვეში",
          1: "მომავალ თვეს",
          "-1": "გასულ თვეს"
        },
        relativeTime: {
          future: {
            one: "{0} თვეში",
            other: "{0} თვეში"
          },
          past: {
            one: "{0} თვის წინ",
            other: "{0} თვის წინ"
          }
        }
      },
      "month-short": {
        displayName: "თვე",
        relative: {
          0: "ამ თვეში",
          1: "მომავალ თვეს",
          "-1": "გასულ თვეს"
        },
        relativeTime: {
          future: {
            one: "{0} თვეში",
            other: "{0} თვეში"
          },
          past: {
            one: "{0} თვის წინ",
            other: "{0} თვის წინ"
          }
        }
      },
      day: {
        displayName: "დღე",
        relative: {
          0: "დღეს",
          1: "ხვალ",
          2: "ზეგ",
          "-2": "გუშინწინ",
          "-1": "გუშინ"
        },
        relativeTime: {
          future: {
            one: "{0} დღეში",
            other: "{0} დღეში"
          },
          past: {
            one: "{0} დღის წინ",
            other: "{0} დღის წინ"
          }
        }
      },
      "day-short": {
        displayName: "დღე",
        relative: {
          0: "დღეს",
          1: "ხვალ",
          2: "ზეგ",
          "-2": "გუშინწინ",
          "-1": "გუშინ"
        },
        relativeTime: {
          future: {
            one: "{0} დღეში",
            other: "{0} დღეში"
          },
          past: {
            one: "{0} დღის წინ",
            other: "{0} დღის წინ"
          }
        }
      },
      hour: {
        displayName: "საათი",
        relative: {
          0: "ამ საათში"
        },
        relativeTime: {
          future: {
            one: "{0} საათში",
            other: "{0} საათში"
          },
          past: {
            one: "{0} საათის წინ",
            other: "{0} საათის წინ"
          }
        }
      },
      "hour-short": {
        displayName: "სთ.",
        relative: {
          0: "ამ საათში"
        },
        relativeTime: {
          future: {
            one: "{0} საათში",
            other: "{0} საათში"
          },
          past: {
            one: "{0} სთ წინ",
            other: "{0} სთ წინ"
          }
        }
      },
      minute: {
        displayName: "წუთი",
        relative: {
          0: "ამ წუთში"
        },
        relativeTime: {
          future: {
            one: "{0} წუთში",
            other: "{0} წუთში"
          },
          past: {
            one: "{0} წუთის წინ",
            other: "{0} წუთის წინ"
          }
        }
      },
      "minute-short": {
        displayName: "წთ.",
        relative: {
          0: "ამ წუთში"
        },
        relativeTime: {
          future: {
            one: "{0} წუთში",
            other: "{0} წუთში"
          },
          past: {
            one: "{0} წთ წინ",
            other: "{0} წთ წინ"
          }
        }
      },
      second: {
        displayName: "წამი",
        relative: {
          0: "ახლა"
        },
        relativeTime: {
          future: {
            one: "{0} წამში",
            other: "{0} წამში"
          },
          past: {
            one: "{0} წამის წინ",
            other: "{0} წამის წინ"
          }
        }
      },
      "second-short": {
        displayName: "წმ.",
        relative: {
          0: "ახლა"
        },
        relativeTime: {
          future: {
            one: "{0} წამში",
            other: "{0} წამში"
          },
          past: {
            one: "{0} წმ წინ",
            other: "{0} წმ წინ"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/kk.js":
/*!*******************************!*\
  !*** ./src/locale-data/kk.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "kk",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var r = String(e).split("."),
        a = Number(r[0]) == e,
        o = a && r[0].slice(-1);
      return t ? 6 == o || 9 == o || a && 0 == o && 0 != e ? "many" : "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "жыл",
        relative: {
          0: "биылғы жыл",
          1: "келесі жыл",
          "-1": "былтырғы жыл"
        },
        relativeTime: {
          future: {
            one: "{0} жылдан кейін",
            other: "{0} жылдан кейін"
          },
          past: {
            one: "{0} жыл бұрын",
            other: "{0} жыл бұрын"
          }
        }
      },
      "year-short": {
        displayName: "ж.",
        relative: {
          0: "биылғы жыл",
          1: "келесі жыл",
          "-1": "былтырғы жыл"
        },
        relativeTime: {
          future: {
            one: "{0} ж. кейін",
            other: "{0} ж. кейін"
          },
          past: {
            one: "{0} ж. бұрын",
            other: "{0} ж. бұрын"
          }
        }
      },
      month: {
        displayName: "ай",
        relative: {
          0: "осы ай",
          1: "келесі ай",
          "-1": "өткен ай"
        },
        relativeTime: {
          future: {
            one: "{0} айдан кейін",
            other: "{0} айдан кейін"
          },
          past: {
            one: "{0} ай бұрын",
            other: "{0} ай бұрын"
          }
        }
      },
      "month-short": {
        displayName: "ай",
        relative: {
          0: "осы ай",
          1: "келесі ай",
          "-1": "өткен ай"
        },
        relativeTime: {
          future: {
            one: "{0} айдан кейін",
            other: "{0} айдан кейін"
          },
          past: {
            one: "{0} ай бұрын",
            other: "{0} ай бұрын"
          }
        }
      },
      day: {
        displayName: "күн",
        relative: {
          0: "бүгін",
          1: "ертең",
          2: "бүрсігүні",
          "-2": "алдыңгүні",
          "-1": "кеше"
        },
        relativeTime: {
          future: {
            one: "{0} күннен кейін",
            other: "{0} күннен кейін"
          },
          past: {
            one: "{0} күн бұрын",
            other: "{0} күн бұрын"
          }
        }
      },
      "day-short": {
        displayName: "күн",
        relative: {
          0: "бүгін",
          1: "ертең",
          2: "бүрсігүні",
          "-2": "алдыңғы күні",
          "-1": "кеше"
        },
        relativeTime: {
          future: {
            one: "{0} күннен кейін",
            other: "{0} күннен кейін"
          },
          past: {
            one: "{0} күн бұрын",
            other: "{0} күн бұрын"
          }
        }
      },
      hour: {
        displayName: "сағат",
        relative: {
          0: "осы сағат"
        },
        relativeTime: {
          future: {
            one: "{0} сағаттан кейін",
            other: "{0} сағаттан кейін"
          },
          past: {
            one: "{0} сағат бұрын",
            other: "{0} сағат бұрын"
          }
        }
      },
      "hour-short": {
        displayName: "сағ",
        relative: {
          0: "осы сағат"
        },
        relativeTime: {
          future: {
            one: "{0} сағ. кейін",
            other: "{0} сағ. кейін"
          },
          past: {
            one: "{0} сағ. бұрын",
            other: "{0} сағ. бұрын"
          }
        }
      },
      minute: {
        displayName: "минут",
        relative: {
          0: "осы минут"
        },
        relativeTime: {
          future: {
            one: "{0} минуттан кейін",
            other: "{0} минуттан кейін"
          },
          past: {
            one: "{0} минут бұрын",
            other: "{0} минут бұрын"
          }
        }
      },
      "minute-short": {
        displayName: "мин",
        relative: {
          0: "осы минут"
        },
        relativeTime: {
          future: {
            one: "{0} мин. кейін",
            other: "{0} мин. кейін"
          },
          past: {
            one: "{0} мин. бұрын",
            other: "{0} мин. бұрын"
          }
        }
      },
      second: {
        displayName: "секунд",
        relative: {
          0: "қазір"
        },
        relativeTime: {
          future: {
            one: "{0} секундтан кейін",
            other: "{0} секундтан кейін"
          },
          past: {
            one: "{0} секунд бұрын",
            other: "{0} секунд бұрын"
          }
        }
      },
      "second-short": {
        displayName: "с",
        relative: {
          0: "қазір"
        },
        relativeTime: {
          future: {
            one: "{0} сек. кейін",
            other: "{0} сек. кейін"
          },
          past: {
            one: "{0} сек. бұрын",
            other: "{0} сек. бұрын"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/km.js":
/*!*******************************!*\
  !*** ./src/locale-data/km.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "km",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "ឆ្នាំ",
        relative: {
          0: "ឆ្នាំ​នេះ",
          1: "ឆ្នាំ​ក្រោយ",
          "-1": "ឆ្នាំ​មុន"
        },
        relativeTime: {
          future: {
            other: "{0} ឆ្នាំទៀត"
          },
          past: {
            other: "{0} ឆ្នាំ​មុន"
          }
        }
      },
      "year-short": {
        displayName: "ឆ្នាំ",
        relative: {
          0: "ឆ្នាំ​នេះ",
          1: "ឆ្នាំ​ក្រោយ",
          "-1": "ឆ្នាំ​មុន"
        },
        relativeTime: {
          future: {
            other: "{0} ឆ្នាំទៀត"
          },
          past: {
            other: "{0} ឆ្នាំ​មុន"
          }
        }
      },
      month: {
        displayName: "ខែ",
        relative: {
          0: "ខែ​នេះ",
          1: "ខែ​ក្រោយ",
          "-1": "ខែ​មុន"
        },
        relativeTime: {
          future: {
            other: "{0} ខែទៀត"
          },
          past: {
            other: "{0} ខែមុន"
          }
        }
      },
      "month-short": {
        displayName: "ខែ",
        relative: {
          0: "ខែ​នេះ",
          1: "ខែ​ក្រោយ",
          "-1": "ខែ​មុន"
        },
        relativeTime: {
          future: {
            other: "{0} ខែទៀត"
          },
          past: {
            other: "{0} ខែមុន"
          }
        }
      },
      day: {
        displayName: "ថ្ងៃ",
        relative: {
          0: "ថ្ងៃ​នេះ",
          1: "ថ្ងៃ​ស្អែក",
          2: "​ខាន​ស្អែក",
          "-2": "ម្សិល​ម៉្ងៃ",
          "-1": "ម្សិលមិញ"
        },
        relativeTime: {
          future: {
            other: "{0} ថ្ងៃទៀត"
          },
          past: {
            other: "{0} ថ្ងៃ​មុន"
          }
        }
      },
      "day-short": {
        displayName: "ថ្ងៃ",
        relative: {
          0: "ថ្ងៃ​នេះ",
          1: "ថ្ងៃស្អែក",
          2: "​ខាន​ស្អែក",
          "-2": "ម្សិល​ម៉្ងៃ",
          "-1": "ម្សិលមិញ"
        },
        relativeTime: {
          future: {
            other: "{0} ថ្ងៃទៀត"
          },
          past: {
            other: "{0} ថ្ងៃ​​មុន"
          }
        }
      },
      hour: {
        displayName: "ម៉ោង",
        relative: {
          0: "ម៉ោងនេះ"
        },
        relativeTime: {
          future: {
            other: "ក្នុង​រយៈ​ពេល {0} ម៉ោង"
          },
          past: {
            other: "{0} ម៉ោង​មុន"
          }
        }
      },
      "hour-short": {
        displayName: "ម៉ោង",
        relative: {
          0: "ម៉ោងនេះ"
        },
        relativeTime: {
          future: {
            other: "{0} ម៉ោងទៀត"
          },
          past: {
            other: "{0} ម៉ោង​មុន"
          }
        }
      },
      minute: {
        displayName: "នាទី",
        relative: {
          0: "នាទីនេះ"
        },
        relativeTime: {
          future: {
            other: "{0} នាទីទៀត"
          },
          past: {
            other: "{0} នាទី​មុន"
          }
        }
      },
      "minute-short": {
        displayName: "នាទី",
        relative: {
          0: "នាទីនេះ"
        },
        relativeTime: {
          future: {
            other: "{0} នាទីទៀត"
          },
          past: {
            other: "{0} នាទី​​មុន"
          }
        }
      },
      second: {
        displayName: "វិនាទី",
        relative: {
          0: "ឥឡូវ"
        },
        relativeTime: {
          future: {
            other: "{0} វិនាទីទៀត"
          },
          past: {
            other: "{0} វិនាទី​មុន"
          }
        }
      },
      "second-short": {
        displayName: "វិនាទី",
        relative: {
          0: "ឥឡូវ"
        },
        relativeTime: {
          future: {
            other: "{0} វិនាទីទៀត"
          },
          past: {
            other: "{0} វិនាទី​មុន"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/ko.js":
/*!*******************************!*\
  !*** ./src/locale-data/ko.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ko",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "년",
        relative: {
          0: "올해",
          1: "내년",
          "-1": "작년"
        },
        relativeTime: {
          future: {
            other: "{0}년 후"
          },
          past: {
            other: "{0}년 전"
          }
        }
      },
      "year-short": {
        displayName: "년",
        relative: {
          0: "올해",
          1: "내년",
          "-1": "작년"
        },
        relativeTime: {
          future: {
            other: "{0}년 후"
          },
          past: {
            other: "{0}년 전"
          }
        }
      },
      month: {
        displayName: "월",
        relative: {
          0: "이번 달",
          1: "다음 달",
          "-1": "지난달"
        },
        relativeTime: {
          future: {
            other: "{0}개월 후"
          },
          past: {
            other: "{0}개월 전"
          }
        }
      },
      "month-short": {
        displayName: "월",
        relative: {
          0: "이번 달",
          1: "다음 달",
          "-1": "지난달"
        },
        relativeTime: {
          future: {
            other: "{0}개월 후"
          },
          past: {
            other: "{0}개월 전"
          }
        }
      },
      day: {
        displayName: "일",
        relative: {
          0: "오늘",
          1: "내일",
          2: "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        relativeTime: {
          future: {
            other: "{0}일 후"
          },
          past: {
            other: "{0}일 전"
          }
        }
      },
      "day-short": {
        displayName: "일",
        relative: {
          0: "오늘",
          1: "내일",
          2: "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        relativeTime: {
          future: {
            other: "{0}일 후"
          },
          past: {
            other: "{0}일 전"
          }
        }
      },
      hour: {
        displayName: "시",
        relative: {
          0: "현재 시간"
        },
        relativeTime: {
          future: {
            other: "{0}시간 후"
          },
          past: {
            other: "{0}시간 전"
          }
        }
      },
      "hour-short": {
        displayName: "시",
        relative: {
          0: "현재 시간"
        },
        relativeTime: {
          future: {
            other: "{0}시간 후"
          },
          past: {
            other: "{0}시간 전"
          }
        }
      },
      minute: {
        displayName: "분",
        relative: {
          0: "현재 분"
        },
        relativeTime: {
          future: {
            other: "{0}분 후"
          },
          past: {
            other: "{0}분 전"
          }
        }
      },
      "minute-short": {
        displayName: "분",
        relative: {
          0: "현재 분"
        },
        relativeTime: {
          future: {
            other: "{0}분 후"
          },
          past: {
            other: "{0}분 전"
          }
        }
      },
      second: {
        displayName: "초",
        relative: {
          0: "지금"
        },
        relativeTime: {
          future: {
            other: "{0}초 후"
          },
          past: {
            other: "{0}초 전"
          }
        }
      },
      "second-short": {
        displayName: "초",
        relative: {
          0: "지금"
        },
        relativeTime: {
          future: {
            other: "{0}초 후"
          },
          past: {
            other: "{0}초 전"
          }
        }
      }
    }
  }, {
    locale: "ko-KP",
    parentLocale: "ko"
  }];
});

/***/ }),

/***/ "./src/locale-data/ku.js":
/*!*******************************!*\
  !*** ./src/locale-data/ku.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ku",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "sal",
        relative: {
          0: "îsal",
          1: "sala piştî",
          "-1": "par"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "sal",
        relative: {
          0: "îsal",
          1: "sala piştî",
          "-1": "par"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "meh",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "m.",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "roj",
        relative: {
          0: "îro",
          1: "sibe",
          "-1": "duh"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "r.",
        relative: {
          0: "îro",
          1: "sibe",
          "-1": "duh"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "saet",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "st.",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "deqîqe",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "d.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "saniye",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "s.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/lt.js":
/*!*******************************!*\
  !*** ./src/locale-data/lt.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, i) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "lt",
    pluralRuleFunction: function pluralRuleFunction(e, i) {
      var a = String(e).split("."),
        n = a[1] || "",
        r = Number(a[0]) == e,
        t = r && a[0].slice(-1),
        o = r && a[0].slice(-2);
      return i ? "other" : 1 == t && (o < 11 || o > 19) ? "one" : t >= 2 && t <= 9 && (o < 11 || o > 19) ? "few" : 0 != n ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "metai",
        relative: {
          0: "šiais metais",
          1: "kitais metais",
          "-1": "praėjusiais metais"
        },
        relativeTime: {
          future: {
            one: "po {0} metų",
            few: "po {0} metų",
            many: "po {0} metų",
            other: "po {0} metų"
          },
          past: {
            one: "prieš {0} metus",
            few: "prieš {0} metus",
            many: "prieš {0} metų",
            other: "prieš {0} metų"
          }
        }
      },
      "year-short": {
        displayName: "m.",
        relative: {
          0: "šiais metais",
          1: "kitais metais",
          "-1": "praėjusiais metais"
        },
        relativeTime: {
          future: {
            one: "po {0} m.",
            few: "po {0} m.",
            many: "po {0} m.",
            other: "po {0} m."
          },
          past: {
            one: "prieš {0} m.",
            few: "prieš {0} m.",
            many: "prieš {0} m.",
            other: "prieš {0} m."
          }
        }
      },
      month: {
        displayName: "mėnuo",
        relative: {
          0: "šį mėnesį",
          1: "kitą mėnesį",
          "-1": "praėjusį mėnesį"
        },
        relativeTime: {
          future: {
            one: "po {0} mėnesio",
            few: "po {0} mėnesių",
            many: "po {0} mėnesio",
            other: "po {0} mėnesių"
          },
          past: {
            one: "prieš {0} mėnesį",
            few: "prieš {0} mėnesius",
            many: "prieš {0} mėnesio",
            other: "prieš {0} mėnesių"
          }
        }
      },
      "month-short": {
        displayName: "mėn.",
        relative: {
          0: "šį mėnesį",
          1: "kitą mėnesį",
          "-1": "praėjusį mėnesį"
        },
        relativeTime: {
          future: {
            one: "po {0} mėn.",
            few: "po {0} mėn.",
            many: "po {0} mėn.",
            other: "po {0} mėn."
          },
          past: {
            one: "prieš {0} mėn.",
            few: "prieš {0} mėn.",
            many: "prieš {0} mėn.",
            other: "prieš {0} mėn."
          }
        }
      },
      day: {
        displayName: "diena",
        relative: {
          0: "šiandien",
          1: "rytoj",
          2: "poryt",
          "-2": "užvakar",
          "-1": "vakar"
        },
        relativeTime: {
          future: {
            one: "po {0} dienos",
            few: "po {0} dienų",
            many: "po {0} dienos",
            other: "po {0} dienų"
          },
          past: {
            one: "prieš {0} dieną",
            few: "prieš {0} dienas",
            many: "prieš {0} dienos",
            other: "prieš {0} dienų"
          }
        }
      },
      "day-short": {
        displayName: "d.",
        relative: {
          0: "šiandien",
          1: "rytoj",
          2: "poryt",
          "-2": "užvakar",
          "-1": "vakar"
        },
        relativeTime: {
          future: {
            one: "po {0} d.",
            few: "po {0} d.",
            many: "po {0} d.",
            other: "po {0} d."
          },
          past: {
            one: "prieš {0} d.",
            few: "prieš {0} d.",
            many: "prieš {0} d.",
            other: "prieš {0} d."
          }
        }
      },
      hour: {
        displayName: "valanda",
        relative: {
          0: "šią valandą"
        },
        relativeTime: {
          future: {
            one: "po {0} valandos",
            few: "po {0} valandų",
            many: "po {0} valandos",
            other: "po {0} valandų"
          },
          past: {
            one: "prieš {0} valandą",
            few: "prieš {0} valandas",
            many: "prieš {0} valandos",
            other: "prieš {0} valandų"
          }
        }
      },
      "hour-short": {
        displayName: "val.",
        relative: {
          0: "šią valandą"
        },
        relativeTime: {
          future: {
            one: "po {0} val.",
            few: "po {0} val.",
            many: "po {0} val.",
            other: "po {0} val."
          },
          past: {
            one: "prieš {0} val.",
            few: "prieš {0} val.",
            many: "prieš {0} val.",
            other: "prieš {0} val."
          }
        }
      },
      minute: {
        displayName: "minutė",
        relative: {
          0: "šią minutę"
        },
        relativeTime: {
          future: {
            one: "po {0} minutės",
            few: "po {0} minučių",
            many: "po {0} minutės",
            other: "po {0} minučių"
          },
          past: {
            one: "prieš {0} minutę",
            few: "prieš {0} minutes",
            many: "prieš {0} minutės",
            other: "prieš {0} minučių"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "šią minutę"
        },
        relativeTime: {
          future: {
            one: "po {0} min.",
            few: "po {0} min.",
            many: "po {0} min.",
            other: "po {0} min."
          },
          past: {
            one: "prieš {0} min.",
            few: "prieš {0} min.",
            many: "prieš {0} min.",
            other: "prieš {0} min."
          }
        }
      },
      second: {
        displayName: "sekundė",
        relative: {
          0: "dabar"
        },
        relativeTime: {
          future: {
            one: "po {0} sekundės",
            few: "po {0} sekundžių",
            many: "po {0} sekundės",
            other: "po {0} sekundžių"
          },
          past: {
            one: "prieš {0} sekundę",
            few: "prieš {0} sekundes",
            many: "prieš {0} sekundės",
            other: "prieš {0} sekundžių"
          }
        }
      },
      "second-short": {
        displayName: "sek.",
        relative: {
          0: "dabar"
        },
        relativeTime: {
          future: {
            one: "po {0} sek.",
            few: "po {0} sek.",
            many: "po {0} sek.",
            other: "po {0} sek."
          },
          past: {
            one: "prieš {0} sek.",
            few: "prieš {0} sek.",
            many: "prieš {0} sek.",
            other: "prieš {0} sek."
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/lv.js":
/*!*******************************!*\
  !*** ./src/locale-data/lv.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, r) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "lv",
    pluralRuleFunction: function pluralRuleFunction(e, r) {
      var a = String(e).split("."),
        t = a[1] || "",
        i = t.length,
        m = Number(a[0]) == e,
        s = m && a[0].slice(-1),
        n = m && a[0].slice(-2),
        p = t.slice(-2),
        o = t.slice(-1);
      return r ? "other" : m && 0 == s || n >= 11 && n <= 19 || 2 == i && p >= 11 && p <= 19 ? "zero" : 1 == s && 11 != n || 2 == i && 1 == o && 11 != p || 2 != i && 1 == o ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "gads",
        relative: {
          0: "šajā gadā",
          1: "nākamajā gadā",
          "-1": "pagājušajā gadā"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} gadiem",
            one: "pēc {0} gada",
            other: "pēc {0} gadiem"
          },
          past: {
            zero: "pirms {0} gadiem",
            one: "pirms {0} gada",
            other: "pirms {0} gadiem"
          }
        }
      },
      "year-short": {
        displayName: "g.",
        relative: {
          0: "šajā gadā",
          1: "nākamajā gadā",
          "-1": "pagājušajā gadā"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} g.",
            one: "pēc {0} g.",
            other: "pēc {0} g."
          },
          past: {
            zero: "pirms {0} g.",
            one: "pirms {0} g.",
            other: "pirms {0} g."
          }
        }
      },
      month: {
        displayName: "mēnesis",
        relative: {
          0: "šajā mēnesī",
          1: "nākamajā mēnesī",
          "-1": "pagājušajā mēnesī"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} mēnešiem",
            one: "pēc {0} mēneša",
            other: "pēc {0} mēnešiem"
          },
          past: {
            zero: "pirms {0} mēnešiem",
            one: "pirms {0} mēneša",
            other: "pirms {0} mēnešiem"
          }
        }
      },
      "month-short": {
        displayName: "mēn.",
        relative: {
          0: "šajā mēnesī",
          1: "nākamajā mēnesī",
          "-1": "pagājušajā mēnesī"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} mēn.",
            one: "pēc {0} mēn.",
            other: "pēc {0} mēn."
          },
          past: {
            zero: "pirms {0} mēn.",
            one: "pirms {0} mēn.",
            other: "pirms {0} mēn."
          }
        }
      },
      day: {
        displayName: "diena",
        relative: {
          0: "šodien",
          1: "rīt",
          2: "parīt",
          "-2": "aizvakar",
          "-1": "vakar"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} dienām",
            one: "pēc {0} dienas",
            other: "pēc {0} dienām"
          },
          past: {
            zero: "pirms {0} dienām",
            one: "pirms {0} dienas",
            other: "pirms {0} dienām"
          }
        }
      },
      "day-short": {
        displayName: "d.",
        relative: {
          0: "šodien",
          1: "rīt",
          2: "parīt",
          "-2": "aizvakar",
          "-1": "vakar"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} d.",
            one: "pēc {0} d.",
            other: "pēc {0} d."
          },
          past: {
            zero: "pirms {0} d.",
            one: "pirms {0} d.",
            other: "pirms {0} d."
          }
        }
      },
      hour: {
        displayName: "stundas",
        relative: {
          0: "šajā stundā"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} stundām",
            one: "pēc {0} stundas",
            other: "pēc {0} stundām"
          },
          past: {
            zero: "pirms {0} stundām",
            one: "pirms {0} stundas",
            other: "pirms {0} stundām"
          }
        }
      },
      "hour-short": {
        displayName: "st.",
        relative: {
          0: "šajā stundā"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} st.",
            one: "pēc {0} st.",
            other: "pēc {0} st."
          },
          past: {
            zero: "pirms {0} st.",
            one: "pirms {0} st.",
            other: "pirms {0} st."
          }
        }
      },
      minute: {
        displayName: "minūtes",
        relative: {
          0: "šajā minūtē"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} minūtēm",
            one: "pēc {0} minūtes",
            other: "pēc {0} minūtēm"
          },
          past: {
            zero: "pirms {0} minūtēm",
            one: "pirms {0} minūtes",
            other: "pirms {0} minūtēm"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "šajā minūtē"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} min.",
            one: "pēc {0} min.",
            other: "pēc {0} min."
          },
          past: {
            zero: "pirms {0} min.",
            one: "pirms {0} min.",
            other: "pirms {0} min."
          }
        }
      },
      second: {
        displayName: "sekundes",
        relative: {
          0: "tagad"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} sekundēm",
            one: "pēc {0} sekundes",
            other: "pēc {0} sekundēm"
          },
          past: {
            zero: "pirms {0} sekundēm",
            one: "pirms {0} sekundes",
            other: "pirms {0} sekundēm"
          }
        }
      },
      "second-short": {
        displayName: "sek.",
        relative: {
          0: "tagad"
        },
        relativeTime: {
          future: {
            zero: "pēc {0} sek.",
            one: "pēc {0} sek.",
            other: "pēc {0} sek."
          },
          past: {
            zero: "pirms {0} sek.",
            one: "pirms {0} sek.",
            other: "pirms {0} sek."
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/mi.js":
/*!*******************************!*\
  !*** ./src/locale-data/mi.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "mi",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "tau",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "t",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "marama",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "rā",
        relative: {
          0: "āianei",
          1: "āpōpō",
          "-1": "inanahi"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "rā",
        relative: {
          0: "āianei",
          1: "āpōpō",
          "-1": "inanahi"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "hāora",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "meneti",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "men",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "hēkona",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "hēk",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/mn.js":
/*!*******************************!*\
  !*** ./src/locale-data/mn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "mn",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "жил",
        relative: {
          0: "энэ жил",
          1: "ирэх жил",
          "-1": "өнгөрсөн жил"
        },
        relativeTime: {
          future: {
            one: "{0} жилийн дараа",
            other: "{0} жилийн дараа"
          },
          past: {
            one: "{0} жилийн өмнө",
            other: "{0} жилийн өмнө"
          }
        }
      },
      "year-short": {
        displayName: "жил",
        relative: {
          0: "энэ жил",
          1: "ирэх жил",
          "-1": "өнгөрсөн жил"
        },
        relativeTime: {
          future: {
            one: "{0} жилийн дараа",
            other: "{0} жилийн дараа"
          },
          past: {
            one: "{0} жилийн өмнө",
            other: "{0} жилийн өмнө"
          }
        }
      },
      month: {
        displayName: "сар",
        relative: {
          0: "энэ сар",
          1: "ирэх сар",
          "-1": "өнгөрсөн сар"
        },
        relativeTime: {
          future: {
            one: "{0} сарын дараа",
            other: "{0} сарын дараа"
          },
          past: {
            one: "{0} сарын өмнө",
            other: "{0} сарын өмнө"
          }
        }
      },
      "month-short": {
        displayName: "сар",
        relative: {
          0: "энэ сар",
          1: "ирэх сар",
          "-1": "өнгөрсөн сар"
        },
        relativeTime: {
          future: {
            one: "{0} сарын дараа",
            other: "{0} сарын дараа"
          },
          past: {
            one: "{0} сарын өмнө",
            other: "{0} сарын өмнө"
          }
        }
      },
      day: {
        displayName: "өдөр",
        relative: {
          0: "өнөөдөр",
          1: "маргааш",
          2: "нөгөөдөр",
          "-2": "уржигдар",
          "-1": "өчигдөр"
        },
        relativeTime: {
          future: {
            one: "{0} өдрийн дараа",
            other: "{0} өдрийн дараа"
          },
          past: {
            one: "{0} өдрийн өмнө",
            other: "{0} өдрийн өмнө"
          }
        }
      },
      "day-short": {
        displayName: "өдөр",
        relative: {
          0: "өнөөдөр",
          1: "маргааш",
          2: "нөгөөдөр",
          "-2": "уржигдар",
          "-1": "өчигдөр"
        },
        relativeTime: {
          future: {
            one: "{0} өдрийн дараа",
            other: "{0} өдрийн дараа"
          },
          past: {
            one: "{0} өдрийн өмнө",
            other: "{0} өдрийн өмнө"
          }
        }
      },
      hour: {
        displayName: "цаг",
        relative: {
          0: "энэ цаг"
        },
        relativeTime: {
          future: {
            one: "{0} цагийн дараа",
            other: "{0} цагийн дараа"
          },
          past: {
            one: "{0} цагийн өмнө",
            other: "{0} цагийн өмнө"
          }
        }
      },
      "hour-short": {
        displayName: "ц",
        relative: {
          0: "энэ цаг"
        },
        relativeTime: {
          future: {
            one: "{0} ц дараа",
            other: "{0} ц дараа"
          },
          past: {
            one: "{0} ц өмнө",
            other: "{0} ц өмнө"
          }
        }
      },
      minute: {
        displayName: "минут",
        relative: {
          0: "энэ минут"
        },
        relativeTime: {
          future: {
            one: "{0} минутын дараа",
            other: "{0} минутын дараа"
          },
          past: {
            one: "{0} минутын өмнө",
            other: "{0} минутын өмнө"
          }
        }
      },
      "minute-short": {
        displayName: "мин",
        relative: {
          0: "энэ минут"
        },
        relativeTime: {
          future: {
            one: "{0} мин дараа",
            other: "{0} мин дараа"
          },
          past: {
            one: "{0} мин өмнө",
            other: "{0} мин өмнө"
          }
        }
      },
      second: {
        displayName: "секунд",
        relative: {
          0: "одоо"
        },
        relativeTime: {
          future: {
            one: "{0} секундын дараа",
            other: "{0} секундын дараа"
          },
          past: {
            one: "{0} секундын өмнө",
            other: "{0} секундын өмнө"
          }
        }
      },
      "second-short": {
        displayName: "сек",
        relative: {
          0: "одоо"
        },
        relativeTime: {
          future: {
            one: "{0} сек дараа",
            other: "{0} сек дараа"
          },
          past: {
            one: "{0} сек өмнө",
            other: "{0} сек өмнө"
          }
        }
      }
    }
  }, {
    locale: "mn-Mong",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/nb.js":
/*!*******************************!*\
  !*** ./src/locale-data/nb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "nb",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "år",
        relative: {
          0: "i år",
          1: "neste år",
          "-1": "i fjor"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "for {0} år siden",
            other: "for {0} år siden"
          }
        }
      },
      "year-short": {
        displayName: "år",
        relative: {
          0: "i år",
          1: "neste år",
          "-1": "i fjor"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "for {0} år siden",
            other: "for {0} år siden"
          }
        }
      },
      month: {
        displayName: "måned",
        relative: {
          0: "denne måneden",
          1: "neste måned",
          "-1": "forrige måned"
        },
        relativeTime: {
          future: {
            one: "om {0} måned",
            other: "om {0} måneder"
          },
          past: {
            one: "for {0} måned siden",
            other: "for {0} måneder siden"
          }
        }
      },
      "month-short": {
        displayName: "mnd.",
        relative: {
          0: "denne md.",
          1: "neste md.",
          "-1": "forrige md."
        },
        relativeTime: {
          future: {
            one: "om {0} md.",
            other: "om {0} md."
          },
          past: {
            one: "for {0} md. siden",
            other: "for {0} md. siden"
          }
        }
      },
      day: {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgen",
          2: "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} døgn",
            other: "om {0} døgn"
          },
          past: {
            one: "for {0} døgn siden",
            other: "for {0} døgn siden"
          }
        }
      },
      "day-short": {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgen",
          2: "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} d.",
            other: "om {0} d."
          },
          past: {
            one: "for {0} d. siden",
            other: "for {0} d. siden"
          }
        }
      },
      hour: {
        displayName: "time",
        relative: {
          0: "denne timen"
        },
        relativeTime: {
          future: {
            one: "om {0} time",
            other: "om {0} timer"
          },
          past: {
            one: "for {0} time siden",
            other: "for {0} timer siden"
          }
        }
      },
      "hour-short": {
        displayName: "t",
        relative: {
          0: "denne timen"
        },
        relativeTime: {
          future: {
            one: "om {0} t",
            other: "om {0} t"
          },
          past: {
            one: "for {0} t siden",
            other: "for {0} t siden"
          }
        }
      },
      minute: {
        displayName: "minutt",
        relative: {
          0: "dette minuttet"
        },
        relativeTime: {
          future: {
            one: "om {0} minutt",
            other: "om {0} minutter"
          },
          past: {
            one: "for {0} minutt siden",
            other: "for {0} minutter siden"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "dette minuttet"
        },
        relativeTime: {
          future: {
            one: "om {0} min",
            other: "om {0} min"
          },
          past: {
            one: "for {0} min siden",
            other: "for {0} min siden"
          }
        }
      },
      second: {
        displayName: "sekund",
        relative: {
          0: "nå"
        },
        relativeTime: {
          future: {
            one: "om {0} sekund",
            other: "om {0} sekunder"
          },
          past: {
            one: "for {0} sekund siden",
            other: "for {0} sekunder siden"
          }
        }
      },
      "second-short": {
        displayName: "sek",
        relative: {
          0: "nå"
        },
        relativeTime: {
          future: {
            one: "om {0} sek",
            other: "om {0} sek"
          },
          past: {
            one: "for {0} sek siden",
            other: "for {0} sek siden"
          }
        }
      }
    }
  }, {
    locale: "nb-SJ",
    parentLocale: "nb"
  }];
});

/***/ }),

/***/ "./src/locale-data/nl.js":
/*!*******************************!*\
  !*** ./src/locale-data/nl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "nl",
    pluralRuleFunction: function pluralRuleFunction(e, n) {
      var a = !String(e).split(".")[1];
      return n ? "other" : 1 == e && a ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "jaar",
        relative: {
          0: "dit jaar",
          1: "volgend jaar",
          "-1": "vorig jaar"
        },
        relativeTime: {
          future: {
            one: "over {0} jaar",
            other: "over {0} jaar"
          },
          past: {
            one: "{0} jaar geleden",
            other: "{0} jaar geleden"
          }
        }
      },
      "year-short": {
        displayName: "jr",
        relative: {
          0: "dit jaar",
          1: "volgend jaar",
          "-1": "vorig jaar"
        },
        relativeTime: {
          future: {
            one: "over {0} jaar",
            other: "over {0} jaar"
          },
          past: {
            one: "{0} jaar geleden",
            other: "{0} jaar geleden"
          }
        }
      },
      month: {
        displayName: "maand",
        relative: {
          0: "deze maand",
          1: "volgende maand",
          "-1": "vorige maand"
        },
        relativeTime: {
          future: {
            one: "over {0} maand",
            other: "over {0} maanden"
          },
          past: {
            one: "{0} maand geleden",
            other: "{0} maanden geleden"
          }
        }
      },
      "month-short": {
        displayName: "mnd",
        relative: {
          0: "deze maand",
          1: "volgende maand",
          "-1": "vorige maand"
        },
        relativeTime: {
          future: {
            one: "over {0} maand",
            other: "over {0} maanden"
          },
          past: {
            one: "{0} maand geleden",
            other: "{0} maanden geleden"
          }
        }
      },
      day: {
        displayName: "dag",
        relative: {
          0: "vandaag",
          1: "morgen",
          2: "overmorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        relativeTime: {
          future: {
            one: "over {0} dag",
            other: "over {0} dagen"
          },
          past: {
            one: "{0} dag geleden",
            other: "{0} dagen geleden"
          }
        }
      },
      "day-short": {
        displayName: "dag",
        relative: {
          0: "vandaag",
          1: "morgen",
          2: "overmorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        relativeTime: {
          future: {
            one: "over {0} dag",
            other: "over {0} dgn"
          },
          past: {
            one: "{0} dag geleden",
            other: "{0} dgn geleden"
          }
        }
      },
      hour: {
        displayName: "uur",
        relative: {
          0: "binnen een uur"
        },
        relativeTime: {
          future: {
            one: "over {0} uur",
            other: "over {0} uur"
          },
          past: {
            one: "{0} uur geleden",
            other: "{0} uur geleden"
          }
        }
      },
      "hour-short": {
        displayName: "uur",
        relative: {
          0: "binnen een uur"
        },
        relativeTime: {
          future: {
            one: "over {0} uur",
            other: "over {0} uur"
          },
          past: {
            one: "{0} uur geleden",
            other: "{0} uur geleden"
          }
        }
      },
      minute: {
        displayName: "minuut",
        relative: {
          0: "binnen een minuut"
        },
        relativeTime: {
          future: {
            one: "over {0} minuut",
            other: "over {0} minuten"
          },
          past: {
            one: "{0} minuut geleden",
            other: "{0} minuten geleden"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "binnen een minuut"
        },
        relativeTime: {
          future: {
            one: "over {0} min.",
            other: "over {0} min."
          },
          past: {
            one: "{0} min. geleden",
            other: "{0} min. geleden"
          }
        }
      },
      second: {
        displayName: "seconde",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "over {0} seconde",
            other: "over {0} seconden"
          },
          past: {
            one: "{0} seconde geleden",
            other: "{0} seconden geleden"
          }
        }
      },
      "second-short": {
        displayName: "sec",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "over {0} sec.",
            other: "over {0} sec."
          },
          past: {
            one: "{0} sec. geleden",
            other: "{0} sec. geleden"
          }
        }
      }
    }
  }, {
    locale: "nl-AW",
    parentLocale: "nl"
  }, {
    locale: "nl-BE",
    parentLocale: "nl"
  }, {
    locale: "nl-BQ",
    parentLocale: "nl"
  }, {
    locale: "nl-CW",
    parentLocale: "nl"
  }, {
    locale: "nl-SR",
    parentLocale: "nl"
  }, {
    locale: "nl-SX",
    parentLocale: "nl"
  }];
});

/***/ }),

/***/ "./src/locale-data/nn.js":
/*!*******************************!*\
  !*** ./src/locale-data/nn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "nn",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "år",
        relative: {
          0: "i år",
          1: "neste år",
          "-1": "i fjor"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "for {0} år sidan",
            other: "for {0} år sidan"
          }
        }
      },
      "year-short": {
        displayName: "år",
        relative: {
          0: "i år",
          1: "neste år",
          "-1": "i fjor"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "for {0} år sidan",
            other: "for {0} år sidan"
          }
        }
      },
      month: {
        displayName: "månad",
        relative: {
          0: "denne månaden",
          1: "neste månad",
          "-1": "førre månad"
        },
        relativeTime: {
          future: {
            one: "om {0} månad",
            other: "om {0} månadar"
          },
          past: {
            one: "for {0} månad sidan",
            other: "for {0} månadar sidan"
          }
        }
      },
      "month-short": {
        displayName: "mnd.",
        relative: {
          0: "denne månaden",
          1: "neste månad",
          "-1": "førre månad"
        },
        relativeTime: {
          future: {
            one: "om {0} md.",
            other: "om {0} md."
          },
          past: {
            one: "for {0} md. sidan",
            other: "for {0} md. sidan"
          }
        }
      },
      day: {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgon",
          2: "i overmorgon",
          "-2": "i førgår",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} døgn",
            other: "om {0} døgn"
          },
          past: {
            one: "for {0} døgn sidan",
            other: "for {0} døgn sidan"
          }
        }
      },
      "day-short": {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgon",
          2: "i overmorgon",
          "-2": "i førgår",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} d.",
            other: "om {0} d."
          },
          past: {
            one: "for {0} d. sidan",
            other: "for {0} d. sidan"
          }
        }
      },
      hour: {
        displayName: "time",
        relative: {
          0: "denne timen"
        },
        relativeTime: {
          future: {
            one: "om {0} time",
            other: "om {0} timar"
          },
          past: {
            one: "for {0} time sidan",
            other: "for {0} timar sidan"
          }
        }
      },
      "hour-short": {
        displayName: "t",
        relative: {
          0: "denne timen"
        },
        relativeTime: {
          future: {
            one: "om {0} t",
            other: "om {0} t"
          },
          past: {
            one: "for {0} t sidan",
            other: "for {0} t sidan"
          }
        }
      },
      minute: {
        displayName: "minutt",
        relative: {
          0: "dette minuttet"
        },
        relativeTime: {
          future: {
            one: "om {0} minutt",
            other: "om {0} minutt"
          },
          past: {
            one: "for {0} minutt sidan",
            other: "for {0} minutt sidan"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "dette minuttet"
        },
        relativeTime: {
          future: {
            one: "om {0} min",
            other: "om {0} min"
          },
          past: {
            one: "for {0} min sidan",
            other: "for {0} min sidan"
          }
        }
      },
      second: {
        displayName: "sekund",
        relative: {
          0: "no"
        },
        relativeTime: {
          future: {
            one: "om {0} sekund",
            other: "om {0} sekund"
          },
          past: {
            one: "for {0} sekund sidan",
            other: "for {0} sekund sidan"
          }
        }
      },
      "second-short": {
        displayName: "sek",
        relative: {
          0: "no"
        },
        relativeTime: {
          future: {
            one: "om {0} sek",
            other: "om {0} sek"
          },
          past: {
            one: "for {0} sek sidan",
            other: "for {0} sek sidan"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/nso.js":
/*!********************************!*\
  !*** ./src/locale-data/nso.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "nso",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 0 == e || 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/or.js":
/*!*******************************!*\
  !*** ./src/locale-data/or.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "or",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var r = String(e).split("."),
        o = Number(r[0]) == e;
      return t ? 1 == e || 5 == e || o && e >= 7 && e <= 9 ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "ବର୍ଷ",
        relative: {
          0: "ଏହି ବର୍ଷ",
          1: "ଆଗାମୀ ବର୍ଷ",
          "-1": "ଗତ ବର୍ଷ"
        },
        relativeTime: {
          future: {
            one: "{0} ବର୍ଷରେ",
            other: "{0} ବର୍ଷରେ"
          },
          past: {
            one: "{0} ବର୍ଷ ପୂର୍ବେ",
            other: "{0} ବର୍ଷ ପୂର୍ବେ"
          }
        }
      },
      "year-short": {
        displayName: "ବ.",
        relative: {
          0: "ଏହି ବର୍ଷ",
          1: "ଆଗାମୀ ବର୍ଷ",
          "-1": "ଗତ ବର୍ଷ"
        },
        relativeTime: {
          future: {
            one: "{0} ବ. ରେ",
            other: "{0} ବ. ରେ"
          },
          past: {
            one: "{0} ବ. ପୂର୍ବେ",
            other: "{0} ବ. ପୂର୍ବେ"
          }
        }
      },
      month: {
        displayName: "ମାସ",
        relative: {
          0: "ଏହି ମାସ",
          1: "ଆଗାମୀ ମାସ",
          "-1": "ଗତ ମାସ"
        },
        relativeTime: {
          future: {
            one: "{0} ମାସରେ",
            other: "{0} ମାସରେ"
          },
          past: {
            one: "{0} ମାସ ପୂର୍ବେ",
            other: "{0} ମାସ ପୂର୍ବେ"
          }
        }
      },
      "month-short": {
        displayName: "ମା.",
        relative: {
          0: "ଏହି ମାସ",
          1: "ଆଗାମୀ ମାସ",
          "-1": "ଗତ ମାସ"
        },
        relativeTime: {
          future: {
            one: "{0} ମା. ରେ",
            other: "{0} ମା. ରେ"
          },
          past: {
            one: "{0} ମା. ପୂର୍ବେ",
            other: "{0} ମା. ପୂର୍ବେ"
          }
        }
      },
      day: {
        displayName: "ଦିନ",
        relative: {
          0: "ଆଜି",
          1: "ଆସନ୍ତାକାଲି",
          "-1": "ଗତକାଲି"
        },
        relativeTime: {
          future: {
            one: "{0} ଦିନରେ",
            other: "{0} ଦିନରେ"
          },
          past: {
            one: "{0} ଦିନ ପୂର୍ବେ",
            other: "{0} ଦିନ ପୂର୍ବେ"
          }
        }
      },
      "day-short": {
        displayName: "ଦିନ",
        relative: {
          0: "ଆଜି",
          1: "ଆସନ୍ତାକାଲି",
          "-1": "ଗତକାଲି"
        },
        relativeTime: {
          future: {
            one: "{0} ଦିନରେ",
            other: "{0} ଦିନରେ"
          },
          past: {
            one: "{0} ଦିନ ପୂର୍ବେ",
            other: "{0} ଦିନ ପୂର୍ବେ"
          }
        }
      },
      hour: {
        displayName: "ଘଣ୍ଟା",
        relative: {
          0: "ଏହି ଘଣ୍ଟା"
        },
        relativeTime: {
          future: {
            one: "{0} ଘଣ୍ଟାରେ",
            other: "{0} ଘଣ୍ଟାରେ"
          },
          past: {
            one: "{0} ଘଣ୍ଟା ପୂର୍ବେ",
            other: "{0} ଘଣ୍ଟା ପୂର୍ବେ"
          }
        }
      },
      "hour-short": {
        displayName: "ଘ.",
        relative: {
          0: "ଏହି ଘଣ୍ଟା"
        },
        relativeTime: {
          future: {
            one: "{0} ଘ. ରେ",
            other: "{0} ଘ. ରେ"
          },
          past: {
            one: "{0} ଘ. ପୂର୍ବେ",
            other: "{0} ଘ. ପୂର୍ବେ"
          }
        }
      },
      minute: {
        displayName: "ମିନିଟ୍",
        relative: {
          0: "ଏହି ମିନିଟ୍"
        },
        relativeTime: {
          future: {
            one: "{0} ମିନିଟ୍‌‌ରେ",
            other: "{0} ମିନିଟ୍‌‌ରେ"
          },
          past: {
            one: "{0} ମିନିଟ୍ ପୂର୍ବେ",
            other: "{0} ମିନିଟ୍ ପୂର୍ବେ"
          }
        }
      },
      "minute-short": {
        displayName: "ମି.",
        relative: {
          0: "ଏହି ମିନିଟ୍"
        },
        relativeTime: {
          future: {
            one: "{0} ମି. ରେ",
            other: "{0} ମି. ରେ"
          },
          past: {
            one: "{0} ମି. ପୂର୍ବେ",
            other: "{0} ମି. ପୂର୍ବେ"
          }
        }
      },
      second: {
        displayName: "ସେକେଣ୍ଡ୍",
        relative: {
          0: "ବର୍ତ୍ତମାନ"
        },
        relativeTime: {
          future: {
            one: "{0} ସେକେଣ୍ଡରେ",
            other: "{0} ସେକେଣ୍ଡରେ"
          },
          past: {
            one: "{0} ସେକେଣ୍ଡ ପୂର୍ବେ",
            other: "{0} ସେକେଣ୍ଡ ପୂର୍ବେ"
          }
        }
      },
      "second-short": {
        displayName: "ସେକେଣ୍ଡ୍",
        relative: {
          0: "ବର୍ତ୍ତମାନ"
        },
        relativeTime: {
          future: {
            one: "{0} ସେ. ରେ",
            other: "{0} ସେ. ରେ"
          },
          past: {
            one: "{0} ସେ. ପୂର୍ବେ",
            other: "{0} ସେ. ପୂର୍ବେ"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/pl.js":
/*!*******************************!*\
  !*** ./src/locale-data/pl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "pl",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = String(e).split("."),
        m = a[0],
        i = !a[1],
        n = m.slice(-1),
        u = m.slice(-2);
      return t ? "other" : 1 == e && i ? "one" : i && n >= 2 && n <= 4 && (u < 12 || u > 14) ? "few" : i && 1 != m && (0 == n || 1 == n) || i && n >= 5 && n <= 9 || i && u >= 12 && u <= 14 ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "rok",
        relative: {
          0: "w tym roku",
          1: "w przyszłym roku",
          "-1": "w zeszłym roku"
        },
        relativeTime: {
          future: {
            one: "za {0} rok",
            few: "za {0} lata",
            many: "za {0} lat",
            other: "za {0} roku"
          },
          past: {
            one: "{0} rok temu",
            few: "{0} lata temu",
            many: "{0} lat temu",
            other: "{0} roku temu"
          }
        }
      },
      "year-short": {
        displayName: "r.",
        relative: {
          0: "w tym roku",
          1: "w przyszłym roku",
          "-1": "w zeszłym roku"
        },
        relativeTime: {
          future: {
            one: "za {0} rok",
            few: "za {0} lata",
            many: "za {0} lat",
            other: "za {0} roku"
          },
          past: {
            one: "{0} rok temu",
            few: "{0} lata temu",
            many: "{0} lat temu",
            other: "{0} roku temu"
          }
        }
      },
      month: {
        displayName: "miesiąc",
        relative: {
          0: "w tym miesiącu",
          1: "w przyszłym miesiącu",
          "-1": "w zeszłym miesiącu"
        },
        relativeTime: {
          future: {
            one: "za {0} miesiąc",
            few: "za {0} miesiące",
            many: "za {0} miesięcy",
            other: "za {0} miesiąca"
          },
          past: {
            one: "{0} miesiąc temu",
            few: "{0} miesiące temu",
            many: "{0} miesięcy temu",
            other: "{0} miesiąca temu"
          }
        }
      },
      "month-short": {
        displayName: "mies.",
        relative: {
          0: "w tym miesiącu",
          1: "w przyszłym miesiącu",
          "-1": "w zeszłym miesiącu"
        },
        relativeTime: {
          future: {
            one: "za {0} mies.",
            few: "za {0} mies.",
            many: "za {0} mies.",
            other: "za {0} mies."
          },
          past: {
            one: "{0} mies. temu",
            few: "{0} mies. temu",
            many: "{0} mies. temu",
            other: "{0} mies. temu"
          }
        }
      },
      day: {
        displayName: "dzień",
        relative: {
          0: "dzisiaj",
          1: "jutro",
          2: "pojutrze",
          "-2": "przedwczoraj",
          "-1": "wczoraj"
        },
        relativeTime: {
          future: {
            one: "za {0} dzień",
            few: "za {0} dni",
            many: "za {0} dni",
            other: "za {0} dnia"
          },
          past: {
            one: "{0} dzień temu",
            few: "{0} dni temu",
            many: "{0} dni temu",
            other: "{0} dnia temu"
          }
        }
      },
      "day-short": {
        displayName: "dzień",
        relative: {
          0: "dzisiaj",
          1: "jutro",
          2: "pojutrze",
          "-2": "przedwczoraj",
          "-1": "wczoraj"
        },
        relativeTime: {
          future: {
            one: "za {0} dzień",
            few: "za {0} dni",
            many: "za {0} dni",
            other: "za {0} dnia"
          },
          past: {
            one: "{0} dzień temu",
            few: "{0} dni temu",
            many: "{0} dni temu",
            other: "{0} dnia temu"
          }
        }
      },
      hour: {
        displayName: "godzina",
        relative: {
          0: "ta godzina"
        },
        relativeTime: {
          future: {
            one: "za {0} godzinę",
            few: "za {0} godziny",
            many: "za {0} godzin",
            other: "za {0} godziny"
          },
          past: {
            one: "{0} godzinę temu",
            few: "{0} godziny temu",
            many: "{0} godzin temu",
            other: "{0} godziny temu"
          }
        }
      },
      "hour-short": {
        displayName: "godz.",
        relative: {
          0: "ta godzina"
        },
        relativeTime: {
          future: {
            one: "za {0} godz.",
            few: "za {0} godz.",
            many: "za {0} godz.",
            other: "za {0} godz."
          },
          past: {
            one: "{0} godz. temu",
            few: "{0} godz. temu",
            many: "{0} godz. temu",
            other: "{0} godz. temu"
          }
        }
      },
      minute: {
        displayName: "minuta",
        relative: {
          0: "ta minuta"
        },
        relativeTime: {
          future: {
            one: "za {0} minutę",
            few: "za {0} minuty",
            many: "za {0} minut",
            other: "za {0} minuty"
          },
          past: {
            one: "{0} minutę temu",
            few: "{0} minuty temu",
            many: "{0} minut temu",
            other: "{0} minuty temu"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "ta minuta"
        },
        relativeTime: {
          future: {
            one: "za {0} min",
            few: "za {0} min",
            many: "za {0} min",
            other: "za {0} min"
          },
          past: {
            one: "{0} min temu",
            few: "{0} min temu",
            many: "{0} min temu",
            other: "{0} min temu"
          }
        }
      },
      second: {
        displayName: "sekunda",
        relative: {
          0: "teraz"
        },
        relativeTime: {
          future: {
            one: "za {0} sekundę",
            few: "za {0} sekundy",
            many: "za {0} sekund",
            other: "za {0} sekundy"
          },
          past: {
            one: "{0} sekundę temu",
            few: "{0} sekundy temu",
            many: "{0} sekund temu",
            other: "{0} sekundy temu"
          }
        }
      },
      "second-short": {
        displayName: "sek.",
        relative: {
          0: "teraz"
        },
        relativeTime: {
          future: {
            one: "za {0} sek.",
            few: "za {0} sek.",
            many: "za {0} sek.",
            other: "za {0} sek."
          },
          past: {
            one: "{0} sek. temu",
            few: "{0} sek. temu",
            many: "{0} sek. temu",
            other: "{0} sek. temu"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/pt.js":
/*!*******************************!*\
  !*** ./src/locale-data/pt.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "pt",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var o = String(e).split(".")[0];
      return t ? "other" : 0 == o || 1 == o ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "ano",
        relative: {
          0: "este ano",
          1: "próximo ano",
          "-1": "ano passado"
        },
        relativeTime: {
          future: {
            one: "em {0} ano",
            other: "em {0} anos"
          },
          past: {
            one: "há {0} ano",
            other: "há {0} anos"
          }
        }
      },
      "year-short": {
        displayName: "ano",
        relative: {
          0: "este ano",
          1: "próximo ano",
          "-1": "ano passado"
        },
        relativeTime: {
          future: {
            one: "em {0} ano",
            other: "em {0} anos"
          },
          past: {
            one: "há {0} ano",
            other: "há {0} anos"
          }
        }
      },
      month: {
        displayName: "mês",
        relative: {
          0: "este mês",
          1: "próximo mês",
          "-1": "mês passado"
        },
        relativeTime: {
          future: {
            one: "em {0} mês",
            other: "em {0} meses"
          },
          past: {
            one: "há {0} mês",
            other: "há {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "mês",
        relative: {
          0: "este mês",
          1: "próximo mês",
          "-1": "mês passado"
        },
        relativeTime: {
          future: {
            one: "em {0} mês",
            other: "em {0} meses"
          },
          past: {
            one: "há {0} mês",
            other: "há {0} meses"
          }
        }
      },
      day: {
        displayName: "dia",
        relative: {
          0: "hoje",
          1: "amanhã",
          2: "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        relativeTime: {
          future: {
            one: "em {0} dia",
            other: "em {0} dias"
          },
          past: {
            one: "há {0} dia",
            other: "há {0} dias"
          }
        }
      },
      "day-short": {
        displayName: "dia",
        relative: {
          0: "hoje",
          1: "amanhã",
          2: "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        relativeTime: {
          future: {
            one: "em {0} dia",
            other: "em {0} dias"
          },
          past: {
            one: "há {0} dia",
            other: "há {0} dias"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "em {0} hora",
            other: "em {0} horas"
          },
          past: {
            one: "há {0} hora",
            other: "há {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "em {0} h",
            other: "em {0} h"
          },
          past: {
            one: "há {0} h",
            other: "há {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "em {0} minuto",
            other: "em {0} minutos"
          },
          past: {
            one: "há {0} minuto",
            other: "há {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "em {0} min.",
            other: "em {0} min."
          },
          past: {
            one: "há {0} min.",
            other: "há {0} min."
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "em {0} segundo",
            other: "em {0} segundos"
          },
          past: {
            one: "há {0} segundo",
            other: "há {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "seg.",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "em {0} seg.",
            other: "em {0} seg."
          },
          past: {
            one: "há {0} seg.",
            other: "há {0} seg."
          }
        }
      }
    }
  }, {
    locale: "pt-AO",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-PT",
    parentLocale: "pt",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var o = !String(e).split(".")[1];
      return t ? "other" : 1 == e && o ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "ano",
        relative: {
          0: "este ano",
          1: "próximo ano",
          "-1": "ano passado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} ano",
            other: "dentro de {0} anos"
          },
          past: {
            one: "há {0} ano",
            other: "há {0} anos"
          }
        }
      },
      "year-short": {
        displayName: "ano",
        relative: {
          0: "este ano",
          1: "próximo ano",
          "-1": "ano passado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} ano",
            other: "dentro de {0} anos"
          },
          past: {
            one: "há {0} ano",
            other: "há {0} anos"
          }
        }
      },
      month: {
        displayName: "mês",
        relative: {
          0: "este mês",
          1: "próximo mês",
          "-1": "mês passado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mês",
            other: "dentro de {0} meses"
          },
          past: {
            one: "há {0} mês",
            other: "há {0} meses"
          }
        }
      },
      "month-short": {
        displayName: "mês",
        relative: {
          0: "este mês",
          1: "próximo mês",
          "-1": "mês passado"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} mês",
            other: "dentro de {0} meses"
          },
          past: {
            one: "há {0} mês",
            other: "há {0} meses"
          }
        }
      },
      day: {
        displayName: "dia",
        relative: {
          0: "hoje",
          1: "amanhã",
          2: "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} dia",
            other: "dentro de {0} dias"
          },
          past: {
            one: "há {0} dia",
            other: "há {0} dias"
          }
        }
      },
      "day-short": {
        displayName: "dia",
        relative: {
          0: "hoje",
          1: "amanhã",
          2: "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} dia",
            other: "dentro de {0} dias"
          },
          past: {
            one: "há {0} dia",
            other: "há {0} dias"
          }
        }
      },
      hour: {
        displayName: "hora",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} hora",
            other: "dentro de {0} horas"
          },
          past: {
            one: "há {0} hora",
            other: "há {0} horas"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "esta hora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} h",
            other: "dentro de {0} h"
          },
          past: {
            one: "há {0} h",
            other: "há {0} h"
          }
        }
      },
      minute: {
        displayName: "minuto",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} minuto",
            other: "dentro de {0} minutos"
          },
          past: {
            one: "há {0} minuto",
            other: "há {0} minutos"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "este minuto"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} min",
            other: "dentro de {0} min"
          },
          past: {
            one: "há {0} min",
            other: "há {0} min"
          }
        }
      },
      second: {
        displayName: "segundo",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} segundo",
            other: "dentro de {0} segundos"
          },
          past: {
            one: "há {0} segundo",
            other: "há {0} segundos"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "agora"
        },
        relativeTime: {
          future: {
            one: "dentro de {0} s",
            other: "dentro de {0} s"
          },
          past: {
            one: "há {0} s",
            other: "há {0} s"
          }
        }
      }
    }
  }, {
    locale: "pt-CH",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-CV",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-GQ",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-GW",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-LU",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-MO",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-MZ",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-ST",
    parentLocale: "pt-PT"
  }, {
    locale: "pt-TL",
    parentLocale: "pt-PT"
  }];
});

/***/ }),

/***/ "./src/locale-data/qu.js":
/*!*******************************!*\
  !*** ./src/locale-data/qu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "qu",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "kunan wata",
          1: "hamuq wata",
          "-1": "qayna wata"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "kunan wata",
          1: "hamuq wata",
          "-1": "qayna wata"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "kunan killa",
          1: "hamuq killa",
          "-1": "qayna killa"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "kunan killa",
          1: "hamuq killa",
          "-1": "qayna killa"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "kunan punchaw",
          1: "paqarin",
          "-1": "qayna punchaw"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "kunan punchaw",
          1: "paqarin",
          "-1": "qayna punchaw"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "kay hora"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "kay hora"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "kay minuto"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "kay minuto"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "qu-BO",
    parentLocale: "qu"
  }, {
    locale: "qu-EC",
    parentLocale: "qu"
  }];
});

/***/ }),

/***/ "./src/locale-data/ro.js":
/*!*******************************!*\
  !*** ./src/locale-data/ro.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ro",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = String(e).split("."),
        i = !a[1],
        u = Number(a[0]) == e && a[0].slice(-2);
      return t ? 1 == e ? "one" : "other" : 1 == e && i ? "one" : !i || 0 == e || 1 != e && u >= 1 && u <= 19 ? "few" : "other";
    },
    fields: {
      year: {
        displayName: "an",
        relative: {
          0: "anul acesta",
          1: "anul viitor",
          "-1": "anul trecut"
        },
        relativeTime: {
          future: {
            one: "peste {0} an",
            few: "peste {0} ani",
            other: "peste {0} de ani"
          },
          past: {
            one: "acum {0} an",
            few: "acum {0} ani",
            other: "acum {0} de ani"
          }
        }
      },
      "year-short": {
        displayName: "an",
        relative: {
          0: "anul acesta",
          1: "anul viitor",
          "-1": "anul trecut"
        },
        relativeTime: {
          future: {
            one: "peste {0} an",
            few: "peste {0} ani",
            other: "peste {0} de ani"
          },
          past: {
            one: "acum {0} an",
            few: "acum {0} ani",
            other: "acum {0} de ani"
          }
        }
      },
      month: {
        displayName: "lună",
        relative: {
          0: "luna aceasta",
          1: "luna viitoare",
          "-1": "luna trecută"
        },
        relativeTime: {
          future: {
            one: "peste {0} lună",
            few: "peste {0} luni",
            other: "peste {0} de luni"
          },
          past: {
            one: "acum {0} lună",
            few: "acum {0} luni",
            other: "acum {0} de luni"
          }
        }
      },
      "month-short": {
        displayName: "lună",
        relative: {
          0: "luna aceasta",
          1: "luna viitoare",
          "-1": "luna trecută"
        },
        relativeTime: {
          future: {
            one: "peste {0} lună",
            few: "peste {0} luni",
            other: "peste {0} luni"
          },
          past: {
            one: "acum {0} lună",
            few: "acum {0} luni",
            other: "acum {0} luni"
          }
        }
      },
      day: {
        displayName: "zi",
        relative: {
          0: "azi",
          1: "mâine",
          2: "poimâine",
          "-2": "alaltăieri",
          "-1": "ieri"
        },
        relativeTime: {
          future: {
            one: "peste {0} zi",
            few: "peste {0} zile",
            other: "peste {0} de zile"
          },
          past: {
            one: "acum {0} zi",
            few: "acum {0} zile",
            other: "acum {0} de zile"
          }
        }
      },
      "day-short": {
        displayName: "zi",
        relative: {
          0: "azi",
          1: "mâine",
          2: "poimâine",
          "-2": "alaltăieri",
          "-1": "ieri"
        },
        relativeTime: {
          future: {
            one: "peste {0} zi",
            few: "peste {0} zile",
            other: "peste {0} de zile"
          },
          past: {
            one: "acum {0} zi",
            few: "acum {0} zile",
            other: "acum {0} de zile"
          }
        }
      },
      hour: {
        displayName: "oră",
        relative: {
          0: "ora aceasta"
        },
        relativeTime: {
          future: {
            one: "peste {0} oră",
            few: "peste {0} ore",
            other: "peste {0} de ore"
          },
          past: {
            one: "acum {0} oră",
            few: "acum {0} ore",
            other: "acum {0} de ore"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "ora aceasta"
        },
        relativeTime: {
          future: {
            one: "peste {0} h",
            few: "peste {0} h",
            other: "peste {0} h"
          },
          past: {
            one: "acum {0} h",
            few: "acum {0} h",
            other: "acum {0} h"
          }
        }
      },
      minute: {
        displayName: "minut",
        relative: {
          0: "minutul acesta"
        },
        relativeTime: {
          future: {
            one: "peste {0} minut",
            few: "peste {0} minute",
            other: "peste {0} de minute"
          },
          past: {
            one: "acum {0} minut",
            few: "acum {0} minute",
            other: "acum {0} de minute"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "minutul acesta"
        },
        relativeTime: {
          future: {
            one: "peste {0} min.",
            few: "peste {0} min.",
            other: "peste {0} min."
          },
          past: {
            one: "acum {0} min.",
            few: "acum {0} min.",
            other: "acum {0} min."
          }
        }
      },
      second: {
        displayName: "secundă",
        relative: {
          0: "acum"
        },
        relativeTime: {
          future: {
            one: "peste {0} secundă",
            few: "peste {0} secunde",
            other: "peste {0} de secunde"
          },
          past: {
            one: "acum {0} secundă",
            few: "acum {0} secunde",
            other: "acum {0} de secunde"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "acum"
        },
        relativeTime: {
          future: {
            one: "peste {0} sec.",
            few: "peste {0} sec.",
            other: "peste {0} sec."
          },
          past: {
            one: "acum {0} sec.",
            few: "acum {0} sec.",
            other: "acum {0} sec."
          }
        }
      }
    }
  }, {
    locale: "ro-MD",
    parentLocale: "ro"
  }];
});

/***/ }),

/***/ "./src/locale-data/ru.js":
/*!*******************************!*\
  !*** ./src/locale-data/ru.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "ru",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var t = String(e).split("."),
        r = t[0],
        o = !t[1],
        n = r.slice(-1),
        l = r.slice(-2);
      return a ? "other" : o && 1 == n && 11 != l ? "one" : o && n >= 2 && n <= 4 && (l < 12 || l > 14) ? "few" : o && 0 == n || o && n >= 5 && n <= 9 || o && l >= 11 && l <= 14 ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "год",
        relative: {
          0: "в этом году",
          1: "в следующем году",
          "-1": "в прошлом году"
        },
        relativeTime: {
          future: {
            one: "через {0} год",
            few: "через {0} года",
            many: "через {0} лет",
            other: "через {0} года"
          },
          past: {
            one: "{0} год назад",
            few: "{0} года назад",
            many: "{0} лет назад",
            other: "{0} года назад"
          }
        }
      },
      "year-short": {
        displayName: "г.",
        relative: {
          0: "в этом г.",
          1: "в след. г.",
          "-1": "в прошлом г."
        },
        relativeTime: {
          future: {
            one: "через {0} г.",
            few: "через {0} г.",
            many: "через {0} л.",
            other: "через {0} г."
          },
          past: {
            one: "{0} г. назад",
            few: "{0} г. назад",
            many: "{0} л. назад",
            other: "{0} г. назад"
          }
        }
      },
      month: {
        displayName: "месяц",
        relative: {
          0: "в этом месяце",
          1: "в следующем месяце",
          "-1": "в прошлом месяце"
        },
        relativeTime: {
          future: {
            one: "через {0} месяц",
            few: "через {0} месяца",
            many: "через {0} месяцев",
            other: "через {0} месяца"
          },
          past: {
            one: "{0} месяц назад",
            few: "{0} месяца назад",
            many: "{0} месяцев назад",
            other: "{0} месяца назад"
          }
        }
      },
      "month-short": {
        displayName: "мес.",
        relative: {
          0: "в этом мес.",
          1: "в следующем мес.",
          "-1": "в прошлом мес."
        },
        relativeTime: {
          future: {
            one: "через {0} мес.",
            few: "через {0} мес.",
            many: "через {0} мес.",
            other: "через {0} мес."
          },
          past: {
            one: "{0} мес. назад",
            few: "{0} мес. назад",
            many: "{0} мес. назад",
            other: "{0} мес. назад"
          }
        }
      },
      day: {
        displayName: "день",
        relative: {
          0: "сегодня",
          1: "завтра",
          2: "послезавтра",
          "-2": "позавчера",
          "-1": "вчера"
        },
        relativeTime: {
          future: {
            one: "через {0} день",
            few: "через {0} дня",
            many: "через {0} дней",
            other: "через {0} дня"
          },
          past: {
            one: "{0} день назад",
            few: "{0} дня назад",
            many: "{0} дней назад",
            other: "{0} дня назад"
          }
        }
      },
      "day-short": {
        displayName: "дн.",
        relative: {
          0: "сегодня",
          1: "завтра",
          2: "послезавтра",
          "-2": "позавчера",
          "-1": "вчера"
        },
        relativeTime: {
          future: {
            one: "через {0} дн.",
            few: "через {0} дн.",
            many: "через {0} дн.",
            other: "через {0} дн."
          },
          past: {
            one: "{0} дн. назад",
            few: "{0} дн. назад",
            many: "{0} дн. назад",
            other: "{0} дн. назад"
          }
        }
      },
      hour: {
        displayName: "час",
        relative: {
          0: "в этот час"
        },
        relativeTime: {
          future: {
            one: "через {0} час",
            few: "через {0} часа",
            many: "через {0} часов",
            other: "через {0} часа"
          },
          past: {
            one: "{0} час назад",
            few: "{0} часа назад",
            many: "{0} часов назад",
            other: "{0} часа назад"
          }
        }
      },
      "hour-short": {
        displayName: "ч",
        relative: {
          0: "в этот час"
        },
        relativeTime: {
          future: {
            one: "через {0} ч.",
            few: "через {0} ч.",
            many: "через {0} ч.",
            other: "через {0} ч."
          },
          past: {
            one: "{0} ч. назад",
            few: "{0} ч. назад",
            many: "{0} ч. назад",
            other: "{0} ч. назад"
          }
        }
      },
      minute: {
        displayName: "минута",
        relative: {
          0: "в эту минуту"
        },
        relativeTime: {
          future: {
            one: "через {0} минуту",
            few: "через {0} минуты",
            many: "через {0} минут",
            other: "через {0} минуты"
          },
          past: {
            one: "{0} минуту назад",
            few: "{0} минуты назад",
            many: "{0} минут назад",
            other: "{0} минуты назад"
          }
        }
      },
      "minute-short": {
        displayName: "мин.",
        relative: {
          0: "в эту минуту"
        },
        relativeTime: {
          future: {
            one: "через {0} мин.",
            few: "через {0} мин.",
            many: "через {0} мин.",
            other: "через {0} мин."
          },
          past: {
            one: "{0} мин. назад",
            few: "{0} мин. назад",
            many: "{0} мин. назад",
            other: "{0} мин. назад"
          }
        }
      },
      second: {
        displayName: "секунда",
        relative: {
          0: "сейчас"
        },
        relativeTime: {
          future: {
            one: "через {0} секунду",
            few: "через {0} секунды",
            many: "через {0} секунд",
            other: "через {0} секунды"
          },
          past: {
            one: "{0} секунду назад",
            few: "{0} секунды назад",
            many: "{0} секунд назад",
            other: "{0} секунды назад"
          }
        }
      },
      "second-short": {
        displayName: "сек.",
        relative: {
          0: "сейчас"
        },
        relativeTime: {
          future: {
            one: "через {0} сек.",
            few: "через {0} сек.",
            many: "через {0} сек.",
            other: "через {0} сек."
          },
          past: {
            one: "{0} сек. назад",
            few: "{0} сек. назад",
            many: "{0} сек. назад",
            other: "{0} сек. назад"
          }
        }
      }
    }
  }, {
    locale: "ru-BY",
    parentLocale: "ru"
  }, {
    locale: "ru-KG",
    parentLocale: "ru"
  }, {
    locale: "ru-KZ",
    parentLocale: "ru"
  }, {
    locale: "ru-MD",
    parentLocale: "ru"
  }, {
    locale: "ru-UA",
    parentLocale: "ru"
  }];
});

/***/ }),

/***/ "./src/locale-data/sk.js":
/*!*******************************!*\
  !*** ./src/locale-data/sk.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, o) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = o() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "sk",
    pluralRuleFunction: function pluralRuleFunction(e, o) {
      var r = String(e).split("."),
        a = r[0],
        t = !r[1];
      return o ? "other" : 1 == e && t ? "one" : a >= 2 && a <= 4 && t ? "few" : t ? "other" : "many";
    },
    fields: {
      year: {
        displayName: "rok",
        relative: {
          0: "tento rok",
          1: "budúci rok",
          "-1": "minulý rok"
        },
        relativeTime: {
          future: {
            one: "o {0} rok",
            few: "o {0} roky",
            many: "o {0} roka",
            other: "o {0} rokov"
          },
          past: {
            one: "pred {0} rokom",
            few: "pred {0} rokmi",
            many: "pred {0} roka",
            other: "pred {0} rokmi"
          }
        }
      },
      "year-short": {
        displayName: "r.",
        relative: {
          0: "tento rok",
          1: "budúci rok",
          "-1": "minulý rok"
        },
        relativeTime: {
          future: {
            one: "o {0} r.",
            few: "o {0} r.",
            many: "o {0} r.",
            other: "o {0} r."
          },
          past: {
            one: "pred {0} r.",
            few: "pred {0} r.",
            many: "pred {0} r.",
            other: "pred {0} r."
          }
        }
      },
      month: {
        displayName: "mesiac",
        relative: {
          0: "tento mesiac",
          1: "budúci mesiac",
          "-1": "minulý mesiac"
        },
        relativeTime: {
          future: {
            one: "o {0} mesiac",
            few: "o {0} mesiace",
            many: "o {0} mesiaca",
            other: "o {0} mesiacov"
          },
          past: {
            one: "pred {0} mesiacom",
            few: "pred {0} mesiacmi",
            many: "pred {0} mesiaca",
            other: "pred {0} mesiacmi"
          }
        }
      },
      "month-short": {
        displayName: "mes.",
        relative: {
          0: "tento mes.",
          1: "budúci mes.",
          "-1": "minulý mes."
        },
        relativeTime: {
          future: {
            one: "o {0} mes.",
            few: "o {0} mes.",
            many: "o {0} mes.",
            other: "o {0} mes."
          },
          past: {
            one: "pred {0} mes.",
            few: "pred {0} mes.",
            many: "pred {0} mes.",
            other: "pred {0} mes."
          }
        }
      },
      day: {
        displayName: "deň",
        relative: {
          0: "dnes",
          1: "zajtra",
          2: "pozajtra",
          "-2": "predvčerom",
          "-1": "včera"
        },
        relativeTime: {
          future: {
            one: "o {0} deň",
            few: "o {0} dni",
            many: "o {0} dňa",
            other: "o {0} dní"
          },
          past: {
            one: "pred {0} dňom",
            few: "pred {0} dňami",
            many: "pred {0} dňa",
            other: "pred {0} dňami"
          }
        }
      },
      "day-short": {
        displayName: "d.",
        relative: {
          0: "dnes",
          1: "zajtra",
          2: "pozajtra",
          "-2": "predvčerom",
          "-1": "včera"
        },
        relativeTime: {
          future: {
            one: "o {0} d.",
            few: "o {0} d.",
            many: "o {0} d.",
            other: "o {0} d."
          },
          past: {
            one: "pred {0} d.",
            few: "pred {0} d.",
            many: "pred {0} d.",
            other: "pred {0} d."
          }
        }
      },
      hour: {
        displayName: "hodina",
        relative: {
          0: "v tejto hodine"
        },
        relativeTime: {
          future: {
            one: "o {0} hodinu",
            few: "o {0} hodiny",
            many: "o {0} hodiny",
            other: "o {0} hodín"
          },
          past: {
            one: "pred {0} hodinou",
            few: "pred {0} hodinami",
            many: "pred {0} hodinou",
            other: "pred {0} hodinami"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "v tejto hodine"
        },
        relativeTime: {
          future: {
            one: "o {0} h",
            few: "o {0} h",
            many: "o {0} h",
            other: "o {0} h"
          },
          past: {
            one: "pred {0} h",
            few: "pred {0} h",
            many: "pred {0} h",
            other: "pred {0} h"
          }
        }
      },
      minute: {
        displayName: "minúta",
        relative: {
          0: "v tejto minúte"
        },
        relativeTime: {
          future: {
            one: "o {0} minútu",
            few: "o {0} minúty",
            many: "o {0} minúty",
            other: "o {0} minút"
          },
          past: {
            one: "pred {0} minútou",
            few: "pred {0} minútami",
            many: "pred {0} minúty",
            other: "pred {0} minútami"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "v tejto minúte"
        },
        relativeTime: {
          future: {
            one: "o {0} min",
            few: "o {0} min",
            many: "o {0} min",
            other: "o {0} min"
          },
          past: {
            one: "pred {0} min",
            few: "pred {0} min",
            many: "pred {0} min",
            other: "pred {0} min"
          }
        }
      },
      second: {
        displayName: "sekunda",
        relative: {
          0: "teraz"
        },
        relativeTime: {
          future: {
            one: "o {0} sekundu",
            few: "o {0} sekundy",
            many: "o {0} sekundy",
            other: "o {0} sekúnd"
          },
          past: {
            one: "pred {0} sekundou",
            few: "pred {0} sekundami",
            many: "pred {0} sekundy",
            other: "pred {0} sekundami"
          }
        }
      },
      "second-short": {
        displayName: "s",
        relative: {
          0: "teraz"
        },
        relativeTime: {
          future: {
            one: "o {0} s",
            few: "o {0} s",
            many: "o {0} s",
            other: "o {0} s"
          },
          past: {
            one: "pred {0} s",
            few: "pred {0} s",
            many: "pred {0} s",
            other: "pred {0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/sl.js":
/*!*******************************!*\
  !*** ./src/locale-data/sl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "sl",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var r = String(e).split("."),
        o = r[0],
        a = !r[1],
        i = o.slice(-2);
      return t ? "other" : a && 1 == i ? "one" : a && 2 == i ? "two" : a && (3 == i || 4 == i) || !a ? "few" : "other";
    },
    fields: {
      year: {
        displayName: "leto",
        relative: {
          0: "letos",
          1: "naslednje leto",
          "-1": "lani"
        },
        relativeTime: {
          future: {
            one: "čez {0} leto",
            two: "čez {0} leti",
            few: "čez {0} leta",
            other: "čez {0} let"
          },
          past: {
            one: "pred {0} letom",
            two: "pred {0} letoma",
            few: "pred {0} leti",
            other: "pred {0} leti"
          }
        }
      },
      "year-short": {
        displayName: "leto",
        relative: {
          0: "letos",
          1: "naslednje leto",
          "-1": "lani"
        },
        relativeTime: {
          future: {
            one: "čez {0} leto",
            two: "čez {0} leti",
            few: "čez {0} leta",
            other: "čez {0} let"
          },
          past: {
            one: "pred {0} letom",
            two: "pred {0} letoma",
            few: "pred {0} leti",
            other: "pred {0} leti"
          }
        }
      },
      month: {
        displayName: "mesec",
        relative: {
          0: "ta mesec",
          1: "naslednji mesec",
          "-1": "prejšnji mesec"
        },
        relativeTime: {
          future: {
            one: "čez {0} mesec",
            two: "čez {0} meseca",
            few: "čez {0} mesece",
            other: "čez {0} mesecev"
          },
          past: {
            one: "pred {0} mesecem",
            two: "pred {0} mesecema",
            few: "pred {0} meseci",
            other: "pred {0} meseci"
          }
        }
      },
      "month-short": {
        displayName: "mes.",
        relative: {
          0: "ta mesec",
          1: "naslednji mesec",
          "-1": "prejšnji mesec"
        },
        relativeTime: {
          future: {
            one: "čez {0} mes.",
            two: "čez {0} mes.",
            few: "čez {0} mes.",
            other: "čez {0} mes."
          },
          past: {
            one: "pred {0} mes.",
            two: "pred {0} mes.",
            few: "pred {0} mes.",
            other: "pred {0} mes."
          }
        }
      },
      day: {
        displayName: "dan",
        relative: {
          0: "danes",
          1: "jutri",
          2: "pojutrišnjem",
          "-2": "predvčerajšnjim",
          "-1": "včeraj"
        },
        relativeTime: {
          future: {
            one: "čez {0} dan",
            two: "čez {0} dneva",
            few: "čez {0} dni",
            other: "čez {0} dni"
          },
          past: {
            one: "pred {0} dnevom",
            two: "pred {0} dnevoma",
            few: "pred {0} dnevi",
            other: "pred {0} dnevi"
          }
        }
      },
      "day-short": {
        displayName: "dan",
        relative: {
          0: "danes",
          1: "jutri",
          2: "pojutrišnjem",
          "-2": "predvčerajšnjim",
          "-1": "včeraj"
        },
        relativeTime: {
          future: {
            one: "čez {0} dan",
            two: "čez {0} dneva",
            few: "čez {0} dni",
            other: "čez {0} dni"
          },
          past: {
            one: "pred {0} dnevom",
            two: "pred {0} dnevoma",
            few: "pred {0} dnevi",
            other: "pred {0} dnevi"
          }
        }
      },
      hour: {
        displayName: "ura",
        relative: {
          0: "v tej uri"
        },
        relativeTime: {
          future: {
            one: "čez {0} uro",
            two: "čez {0} uri",
            few: "čez {0} ure",
            other: "čez {0} ur"
          },
          past: {
            one: "pred {0} uro",
            two: "pred {0} urama",
            few: "pred {0} urami",
            other: "pred {0} urami"
          }
        }
      },
      "hour-short": {
        displayName: "ura",
        relative: {
          0: "v tej uri"
        },
        relativeTime: {
          future: {
            one: "čez {0} uro",
            two: "čez {0} uri",
            few: "čez {0} ure",
            other: "čez {0} ur"
          },
          past: {
            one: "pred {0} uro",
            two: "pred {0} urama",
            few: "pred {0} urami",
            other: "pred {0} urami"
          }
        }
      },
      minute: {
        displayName: "minuta",
        relative: {
          0: "to minuto"
        },
        relativeTime: {
          future: {
            one: "čez {0} minuto",
            two: "čez {0} minuti",
            few: "čez {0} minute",
            other: "čez {0} minut"
          },
          past: {
            one: "pred {0} minuto",
            two: "pred {0} minutama",
            few: "pred {0} minutami",
            other: "pred {0} minutami"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "to minuto"
        },
        relativeTime: {
          future: {
            one: "čez {0} min.",
            two: "čez {0} min.",
            few: "čez {0} min.",
            other: "čez {0} min."
          },
          past: {
            one: "pred {0} min.",
            two: "pred {0} min.",
            few: "pred {0} min.",
            other: "pred {0} min."
          }
        }
      },
      second: {
        displayName: "sekunda",
        relative: {
          0: "zdaj"
        },
        relativeTime: {
          future: {
            one: "čez {0} sekundo",
            two: "čez {0} sekundi",
            few: "čez {0} sekunde",
            other: "čez {0} sekund"
          },
          past: {
            one: "pred {0} sekundo",
            two: "pred {0} sekundama",
            few: "pred {0} sekundami",
            other: "pred {0} sekundami"
          }
        }
      },
      "second-short": {
        displayName: "sek.",
        relative: {
          0: "zdaj"
        },
        relativeTime: {
          future: {
            one: "čez {0} s",
            two: "čez {0} s",
            few: "čez {0} s",
            other: "čez {0} s"
          },
          past: {
            one: "pred {0} s",
            two: "pred {0} s",
            few: "pred {0} s",
            other: "pred {0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/sr.js":
/*!*******************************!*\
  !*** ./src/locale-data/sr.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "sr",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var r = String(e).split("."),
        t = r[0],
        o = r[1] || "",
        i = !r[1],
        s = t.slice(-1),
        n = t.slice(-2),
        l = o.slice(-1),
        p = o.slice(-2);
      return a ? "other" : i && 1 == s && 11 != n || 1 == l && 11 != p ? "one" : i && s >= 2 && s <= 4 && (n < 12 || n > 14) || l >= 2 && l <= 4 && (p < 12 || p > 14) ? "few" : "other";
    },
    fields: {
      year: {
        displayName: "година",
        relative: {
          0: "ове године",
          1: "следеће године",
          "-1": "прошле године"
        },
        relativeTime: {
          future: {
            one: "за {0} годину",
            few: "за {0} године",
            other: "за {0} година"
          },
          past: {
            one: "пре {0} године",
            few: "пре {0} године",
            other: "пре {0} година"
          }
        }
      },
      "year-short": {
        displayName: "год.",
        relative: {
          0: "ове год.",
          1: "следеће год.",
          "-1": "прошле год."
        },
        relativeTime: {
          future: {
            one: "за {0} год.",
            few: "за {0} год.",
            other: "за {0} год."
          },
          past: {
            one: "пре {0} год.",
            few: "пре {0} год.",
            other: "пре {0} год."
          }
        }
      },
      month: {
        displayName: "месец",
        relative: {
          0: "овог месеца",
          1: "следећег месеца",
          "-1": "прошлог месеца"
        },
        relativeTime: {
          future: {
            one: "за {0} месец",
            few: "за {0} месеца",
            other: "за {0} месеци"
          },
          past: {
            one: "пре {0} месеца",
            few: "пре {0} месеца",
            other: "пре {0} месеци"
          }
        }
      },
      "month-short": {
        displayName: "мес.",
        relative: {
          0: "овог мес.",
          1: "следећег мес.",
          "-1": "прошлог мес."
        },
        relativeTime: {
          future: {
            one: "за {0} мес.",
            few: "за {0} мес.",
            other: "за {0} мес."
          },
          past: {
            one: "пре {0} мес.",
            few: "пре {0} мес.",
            other: "пре {0} мес."
          }
        }
      },
      day: {
        displayName: "дан",
        relative: {
          0: "данас",
          1: "сутра",
          2: "прекосутра",
          "-2": "прекјуче",
          "-1": "јуче"
        },
        relativeTime: {
          future: {
            one: "за {0} дан",
            few: "за {0} дана",
            other: "за {0} дана"
          },
          past: {
            one: "пре {0} дана",
            few: "пре {0} дана",
            other: "пре {0} дана"
          }
        }
      },
      "day-short": {
        displayName: "д.",
        relative: {
          0: "данас",
          1: "сутра",
          2: "прекосутра",
          "-2": "прекјуче",
          "-1": "јуче"
        },
        relativeTime: {
          future: {
            one: "за {0} д.",
            few: "за {0} д.",
            other: "за {0} д."
          },
          past: {
            one: "пре {0} д.",
            few: "пре {0} д.",
            other: "пре {0} д."
          }
        }
      },
      hour: {
        displayName: "сат",
        relative: {
          0: "овог сата"
        },
        relativeTime: {
          future: {
            one: "за {0} сат",
            few: "за {0} сата",
            other: "за {0} сати"
          },
          past: {
            one: "пре {0} сата",
            few: "пре {0} сата",
            other: "пре {0} сати"
          }
        }
      },
      "hour-short": {
        displayName: "ч.",
        relative: {
          0: "овог сата"
        },
        relativeTime: {
          future: {
            one: "за {0} ч.",
            few: "за {0} ч.",
            other: "за {0} ч."
          },
          past: {
            one: "пре {0} ч.",
            few: "пре {0} ч.",
            other: "пре {0} ч."
          }
        }
      },
      minute: {
        displayName: "минут",
        relative: {
          0: "овог минута"
        },
        relativeTime: {
          future: {
            one: "за {0} минут",
            few: "за {0} минута",
            other: "за {0} минута"
          },
          past: {
            one: "пре {0} минута",
            few: "пре {0} минута",
            other: "пре {0} минута"
          }
        }
      },
      "minute-short": {
        displayName: "мин.",
        relative: {
          0: "овог минута"
        },
        relativeTime: {
          future: {
            one: "за {0} мин.",
            few: "за {0} мин.",
            other: "за {0} мин."
          },
          past: {
            one: "пре {0} мин.",
            few: "пре {0} мин.",
            other: "пре {0} мин."
          }
        }
      },
      second: {
        displayName: "секунд",
        relative: {
          0: "сада"
        },
        relativeTime: {
          future: {
            one: "за {0} секунду",
            few: "за {0} секунде",
            other: "за {0} секунди"
          },
          past: {
            one: "пре {0} секунде",
            few: "пре {0} секунде",
            other: "пре {0} секунди"
          }
        }
      },
      "second-short": {
        displayName: "сек.",
        relative: {
          0: "сада"
        },
        relativeTime: {
          future: {
            one: "за {0} сек.",
            few: "за {0} сек.",
            other: "за {0} сек."
          },
          past: {
            one: "пре {0} сек.",
            few: "пре {0} сек.",
            other: "пре {0} сек."
          }
        }
      }
    }
  }, {
    locale: "sr-Cyrl",
    parentLocale: "sr"
  }, {
    locale: "sr-Cyrl-BA",
    parentLocale: "sr-Cyrl"
  }, {
    locale: "sr-Cyrl-ME",
    parentLocale: "sr-Cyrl"
  }, {
    locale: "sr-Cyrl-XK",
    parentLocale: "sr-Cyrl"
  }, {
    locale: "sr-Latn",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "godina",
        relative: {
          0: "ove godine",
          1: "sledeće godine",
          "-1": "prošle godine"
        },
        relativeTime: {
          future: {
            one: "za {0} godinu",
            few: "za {0} godine",
            other: "za {0} godina"
          },
          past: {
            one: "pre {0} godine",
            few: "pre {0} godine",
            other: "pre {0} godina"
          }
        }
      },
      "year-short": {
        displayName: "god.",
        relative: {
          0: "ove god.",
          1: "sledeće god.",
          "-1": "prošle god."
        },
        relativeTime: {
          future: {
            one: "za {0} god.",
            few: "za {0} god.",
            other: "za {0} god."
          },
          past: {
            one: "pre {0} god.",
            few: "pre {0} god.",
            other: "pre {0} god."
          }
        }
      },
      month: {
        displayName: "mesec",
        relative: {
          0: "ovog meseca",
          1: "sledećeg meseca",
          "-1": "prošlog meseca"
        },
        relativeTime: {
          future: {
            one: "za {0} mesec",
            few: "za {0} meseca",
            other: "za {0} meseci"
          },
          past: {
            one: "pre {0} meseca",
            few: "pre {0} meseca",
            other: "pre {0} meseci"
          }
        }
      },
      "month-short": {
        displayName: "mes.",
        relative: {
          0: "ovog mes.",
          1: "sledećeg mes.",
          "-1": "prošlog mes."
        },
        relativeTime: {
          future: {
            one: "za {0} mes.",
            few: "za {0} mes.",
            other: "za {0} mes."
          },
          past: {
            one: "pre {0} mes.",
            few: "pre {0} mes.",
            other: "pre {0} mes."
          }
        }
      },
      day: {
        displayName: "dan",
        relative: {
          0: "danas",
          1: "sutra",
          2: "prekosutra",
          "-2": "prekjuče",
          "-1": "juče"
        },
        relativeTime: {
          future: {
            one: "za {0} dan",
            few: "za {0} dana",
            other: "za {0} dana"
          },
          past: {
            one: "pre {0} dana",
            few: "pre {0} dana",
            other: "pre {0} dana"
          }
        }
      },
      "day-short": {
        displayName: "d.",
        relative: {
          0: "danas",
          1: "sutra",
          2: "prekosutra",
          "-2": "prekjuče",
          "-1": "juče"
        },
        relativeTime: {
          future: {
            one: "za {0} d.",
            few: "za {0} d.",
            other: "za {0} d."
          },
          past: {
            one: "pre {0} d.",
            few: "pre {0} d.",
            other: "pre {0} d."
          }
        }
      },
      hour: {
        displayName: "sat",
        relative: {
          0: "ovog sata"
        },
        relativeTime: {
          future: {
            one: "za {0} sat",
            few: "za {0} sata",
            other: "za {0} sati"
          },
          past: {
            one: "pre {0} sata",
            few: "pre {0} sata",
            other: "pre {0} sati"
          }
        }
      },
      "hour-short": {
        displayName: "č.",
        relative: {
          0: "ovog sata"
        },
        relativeTime: {
          future: {
            one: "za {0} č.",
            few: "za {0} č.",
            other: "za {0} č."
          },
          past: {
            one: "pre {0} č.",
            few: "pre {0} č.",
            other: "pre {0} č."
          }
        }
      },
      minute: {
        displayName: "minut",
        relative: {
          0: "ovog minuta"
        },
        relativeTime: {
          future: {
            one: "za {0} minut",
            few: "za {0} minuta",
            other: "za {0} minuta"
          },
          past: {
            one: "pre {0} minuta",
            few: "pre {0} minuta",
            other: "pre {0} minuta"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "ovog minuta"
        },
        relativeTime: {
          future: {
            one: "za {0} min.",
            few: "za {0} min.",
            other: "za {0} min."
          },
          past: {
            one: "pre {0} min.",
            few: "pre {0} min.",
            other: "pre {0} min."
          }
        }
      },
      second: {
        displayName: "sekund",
        relative: {
          0: "sada"
        },
        relativeTime: {
          future: {
            one: "za {0} sekundu",
            few: "za {0} sekunde",
            other: "za {0} sekundi"
          },
          past: {
            one: "pre {0} sekunde",
            few: "pre {0} sekunde",
            other: "pre {0} sekundi"
          }
        }
      },
      "second-short": {
        displayName: "sek.",
        relative: {
          0: "sada"
        },
        relativeTime: {
          future: {
            one: "za {0} sek.",
            few: "za {0} sek.",
            other: "za {0} sek."
          },
          past: {
            one: "pre {0} sek.",
            few: "pre {0} sek.",
            other: "pre {0} sek."
          }
        }
      }
    }
  }, {
    locale: "sr-Latn-BA",
    parentLocale: "sr-Latn"
  }, {
    locale: "sr-Latn-ME",
    parentLocale: "sr-Latn"
  }, {
    locale: "sr-Latn-XK",
    parentLocale: "sr-Latn"
  }];
});

/***/ }),

/***/ "./src/locale-data/sv.js":
/*!*******************************!*\
  !*** ./src/locale-data/sv.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, r) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "sv",
    pluralRuleFunction: function pluralRuleFunction(e, r) {
      var t = String(e).split("."),
        a = !t[1],
        n = Number(t[0]) == e,
        o = n && t[0].slice(-1),
        m = n && t[0].slice(-2);
      return r ? 1 != o && 2 != o || 11 == m || 12 == m ? "other" : "one" : 1 == e && a ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "år",
        relative: {
          0: "i år",
          1: "nästa år",
          "-1": "i fjol"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "för {0} år sedan",
            other: "för {0} år sedan"
          }
        }
      },
      "year-short": {
        displayName: "år",
        relative: {
          0: "i år",
          1: "nästa år",
          "-1": "i fjol"
        },
        relativeTime: {
          future: {
            one: "om {0} år",
            other: "om {0} år"
          },
          past: {
            one: "för {0} år sen",
            other: "för {0} år sen"
          }
        }
      },
      month: {
        displayName: "månad",
        relative: {
          0: "denna månad",
          1: "nästa månad",
          "-1": "förra månaden"
        },
        relativeTime: {
          future: {
            one: "om {0} månad",
            other: "om {0} månader"
          },
          past: {
            one: "för {0} månad sedan",
            other: "för {0} månader sedan"
          }
        }
      },
      "month-short": {
        displayName: "m",
        relative: {
          0: "denna mån.",
          1: "nästa mån.",
          "-1": "förra mån."
        },
        relativeTime: {
          future: {
            one: "om {0} mån.",
            other: "om {0} mån."
          },
          past: {
            one: "för {0} mån. sen",
            other: "för {0} mån. sen"
          }
        }
      },
      day: {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgon",
          2: "i övermorgon",
          "-2": "i förrgår",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} dag",
            other: "om {0} dagar"
          },
          past: {
            one: "för {0} dag sedan",
            other: "för {0} dagar sedan"
          }
        }
      },
      "day-short": {
        displayName: "dag",
        relative: {
          0: "i dag",
          1: "i morgon",
          2: "i övermorgon",
          "-2": "i förrgår",
          "-1": "i går"
        },
        relativeTime: {
          future: {
            one: "om {0} d",
            other: "om {0} d"
          },
          past: {
            one: "för {0} d sedan",
            other: "för {0} d sedan"
          }
        }
      },
      hour: {
        displayName: "timme",
        relative: {
          0: "denna timme"
        },
        relativeTime: {
          future: {
            one: "om {0} timme",
            other: "om {0} timmar"
          },
          past: {
            one: "för {0} timme sedan",
            other: "för {0} timmar sedan"
          }
        }
      },
      "hour-short": {
        displayName: "tim",
        relative: {
          0: "denna timme"
        },
        relativeTime: {
          future: {
            one: "om {0} tim",
            other: "om {0} tim"
          },
          past: {
            one: "för {0} tim sedan",
            other: "för {0} tim sedan"
          }
        }
      },
      minute: {
        displayName: "minut",
        relative: {
          0: "denna minut"
        },
        relativeTime: {
          future: {
            one: "om {0} minut",
            other: "om {0} minuter"
          },
          past: {
            one: "för {0} minut sedan",
            other: "för {0} minuter sedan"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "denna minut"
        },
        relativeTime: {
          future: {
            one: "om {0} min",
            other: "om {0} min"
          },
          past: {
            one: "för {0} min sen",
            other: "för {0} min sen"
          }
        }
      },
      second: {
        displayName: "sekund",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "om {0} sekund",
            other: "om {0} sekunder"
          },
          past: {
            one: "för {0} sekund sedan",
            other: "för {0} sekunder sedan"
          }
        }
      },
      "second-short": {
        displayName: "sek",
        relative: {
          0: "nu"
        },
        relativeTime: {
          future: {
            one: "om {0} sek",
            other: "om {0} sek"
          },
          past: {
            one: "för {0} s sen",
            other: "för {0} s sen"
          }
        }
      }
    }
  }, {
    locale: "sv-AX",
    parentLocale: "sv"
  }, {
    locale: "sv-FI",
    parentLocale: "sv"
  }];
});

/***/ }),

/***/ "./src/locale-data/sw.js":
/*!*******************************!*\
  !*** ./src/locale-data/sw.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (a, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "sw",
    pluralRuleFunction: function pluralRuleFunction(a, e) {
      var i = !String(a).split(".")[1];
      return e ? "other" : 1 == a && i ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "mwaka",
        relative: {
          0: "mwaka huu",
          1: "mwaka ujao",
          "-1": "mwaka uliopita"
        },
        relativeTime: {
          future: {
            one: "baada ya mwaka {0}",
            other: "baada ya miaka {0}"
          },
          past: {
            one: "mwaka {0} uliopita",
            other: "miaka {0} iliyopita"
          }
        }
      },
      "year-short": {
        displayName: "mwaka",
        relative: {
          0: "mwaka huu",
          1: "mwaka ujao",
          "-1": "mwaka uliopita"
        },
        relativeTime: {
          future: {
            one: "baada ya mwaka {0}",
            other: "baada ya miaka {0}"
          },
          past: {
            one: "mwaka {0} uliopita",
            other: "miaka {0} iliyopita"
          }
        }
      },
      month: {
        displayName: "mwezi",
        relative: {
          0: "mwezi huu",
          1: "mwezi ujao",
          "-1": "mwezi uliopita"
        },
        relativeTime: {
          future: {
            one: "baada ya mwezi {0}",
            other: "baada ya miezi {0}"
          },
          past: {
            one: "mwezi {0} uliopita",
            other: "miezi {0} iliyopita"
          }
        }
      },
      "month-short": {
        displayName: "mwezi",
        relative: {
          0: "mwezi huu",
          1: "mwezi ujao",
          "-1": "mwezi uliopita"
        },
        relativeTime: {
          future: {
            one: "baada ya mwezi {0}",
            other: "baada ya miezi {0}"
          },
          past: {
            one: "mwezi {0} uliopita",
            other: "miezi {0} iliyopita"
          }
        }
      },
      day: {
        displayName: "siku",
        relative: {
          0: "leo",
          1: "kesho",
          2: "kesho kutwa",
          "-2": "juzi",
          "-1": "jana"
        },
        relativeTime: {
          future: {
            one: "baada ya siku {0}",
            other: "baada ya siku {0}"
          },
          past: {
            one: "siku {0} iliyopita",
            other: "siku {0} zilizopita"
          }
        }
      },
      "day-short": {
        displayName: "siku",
        relative: {
          0: "leo",
          1: "kesho",
          2: "kesho kutwa",
          "-2": "juzi",
          "-1": "jana"
        },
        relativeTime: {
          future: {
            one: "baada ya siku {0}",
            other: "baada ya siku {0}"
          },
          past: {
            one: "siku {0} iliyopita",
            other: "siku {0} zilizopita"
          }
        }
      },
      hour: {
        displayName: "saa",
        relative: {
          0: "saa hii"
        },
        relativeTime: {
          future: {
            one: "baada ya saa {0}",
            other: "baada ya saa {0}"
          },
          past: {
            one: "saa {0} iliyopita",
            other: "saa {0} zilizopita"
          }
        }
      },
      "hour-short": {
        displayName: "saa",
        relative: {
          0: "saa hii"
        },
        relativeTime: {
          future: {
            one: "baada ya saa {0}",
            other: "baada ya saa {0}"
          },
          past: {
            one: "saa {0} iliyopita",
            other: "saa {0} zilizopita"
          }
        }
      },
      minute: {
        displayName: "dakika",
        relative: {
          0: "dakika hii"
        },
        relativeTime: {
          future: {
            one: "baada ya dakika {0}",
            other: "baada ya dakika {0}"
          },
          past: {
            one: "dakika {0} iliyopita",
            other: "dakika {0} zilizopita"
          }
        }
      },
      "minute-short": {
        displayName: "dak",
        relative: {
          0: "dakika hii"
        },
        relativeTime: {
          future: {
            one: "baada ya dakika {0}",
            other: "baada ya dakika {0}"
          },
          past: {
            one: "dakika {0} iliyopita",
            other: "dakika {0} zilizopita"
          }
        }
      },
      second: {
        displayName: "sekunde",
        relative: {
          0: "sasa hivi"
        },
        relativeTime: {
          future: {
            one: "baada ya sekunde {0}",
            other: "baada ya sekunde {0}"
          },
          past: {
            one: "Sekunde {0} iliyopita",
            other: "Sekunde {0} zilizopita"
          }
        }
      },
      "second-short": {
        displayName: "sek",
        relative: {
          0: "sasa hivi"
        },
        relativeTime: {
          future: {
            one: "baada ya sekunde {0}",
            other: "baada ya sekunde {0}"
          },
          past: {
            one: "sekunde {0} iliyopita",
            other: "sekunde {0} zilizopita"
          }
        }
      }
    }
  }, {
    locale: "sw-CD",
    parentLocale: "sw"
  }, {
    locale: "sw-KE",
    parentLocale: "sw"
  }, {
    locale: "sw-UG",
    parentLocale: "sw"
  }];
});

/***/ }),

/***/ "./src/locale-data/th.js":
/*!*******************************!*\
  !*** ./src/locale-data/th.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "th",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "ปี",
        relative: {
          0: "ปีนี้",
          1: "ปีหน้า",
          "-1": "ปีที่แล้ว"
        },
        relativeTime: {
          future: {
            other: "ในอีก {0} ปี"
          },
          past: {
            other: "{0} ปีที่แล้ว"
          }
        }
      },
      "year-short": {
        displayName: "ปี",
        relative: {
          0: "ปีนี้",
          1: "ปีหน้า",
          "-1": "ปีที่แล้ว"
        },
        relativeTime: {
          future: {
            other: "ใน {0} ปี"
          },
          past: {
            other: "{0} ปีที่แล้ว"
          }
        }
      },
      month: {
        displayName: "เดือน",
        relative: {
          0: "เดือนนี้",
          1: "เดือนหน้า",
          "-1": "เดือนที่แล้ว"
        },
        relativeTime: {
          future: {
            other: "ในอีก {0} เดือน"
          },
          past: {
            other: "{0} เดือนที่ผ่านมา"
          }
        }
      },
      "month-short": {
        displayName: "เดือน",
        relative: {
          0: "เดือนนี้",
          1: "เดือนหน้า",
          "-1": "เดือนที่แล้ว"
        },
        relativeTime: {
          future: {
            other: "ใน {0} เดือน"
          },
          past: {
            other: "{0} เดือนที่แล้ว"
          }
        }
      },
      day: {
        displayName: "วัน",
        relative: {
          0: "วันนี้",
          1: "พรุ่งนี้",
          2: "มะรืนนี้",
          "-2": "เมื่อวานซืน",
          "-1": "เมื่อวาน"
        },
        relativeTime: {
          future: {
            other: "ในอีก {0} วัน"
          },
          past: {
            other: "{0} วันที่ผ่านมา"
          }
        }
      },
      "day-short": {
        displayName: "วัน",
        relative: {
          0: "วันนี้",
          1: "พรุ่งนี้",
          2: "มะรืนนี้",
          "-2": "เมื่อวานซืน",
          "-1": "เมื่อวาน"
        },
        relativeTime: {
          future: {
            other: "ใน {0} วัน"
          },
          past: {
            other: "{0} วันที่แล้ว"
          }
        }
      },
      hour: {
        displayName: "ชั่วโมง",
        relative: {
          0: "ชั่วโมงนี้"
        },
        relativeTime: {
          future: {
            other: "ในอีก {0} ชั่วโมง"
          },
          past: {
            other: "{0} ชั่วโมงที่ผ่านมา"
          }
        }
      },
      "hour-short": {
        displayName: "ชม.",
        relative: {
          0: "ชั่วโมงนี้"
        },
        relativeTime: {
          future: {
            other: "ใน {0} ชม."
          },
          past: {
            other: "{0} ชม. ที่แล้ว"
          }
        }
      },
      minute: {
        displayName: "นาที",
        relative: {
          0: "นาทีนี้"
        },
        relativeTime: {
          future: {
            other: "ในอีก {0} นาที"
          },
          past: {
            other: "{0} นาทีที่ผ่านมา"
          }
        }
      },
      "minute-short": {
        displayName: "น.",
        relative: {
          0: "นาทีนี้"
        },
        relativeTime: {
          future: {
            other: "ใน {0} นาที"
          },
          past: {
            other: "{0} นาทีที่แล้ว"
          }
        }
      },
      second: {
        displayName: "วินาที",
        relative: {
          0: "ขณะนี้"
        },
        relativeTime: {
          future: {
            other: "ในอีก {0} วินาที"
          },
          past: {
            other: "{0} วินาทีที่ผ่านมา"
          }
        }
      },
      "second-short": {
        displayName: "วิ",
        relative: {
          0: "ขณะนี้"
        },
        relativeTime: {
          future: {
            other: "ใน {0} วินาที"
          },
          past: {
            other: "{0} วินาทีที่แล้ว"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/tn.js":
/*!*******************************!*\
  !*** ./src/locale-data/tn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "tn",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/tr.js":
/*!*******************************!*\
  !*** ./src/locale-data/tr.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "tr",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return a ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "yıl",
        relative: {
          0: "bu yıl",
          1: "gelecek yıl",
          "-1": "geçen yıl"
        },
        relativeTime: {
          future: {
            one: "{0} yıl sonra",
            other: "{0} yıl sonra"
          },
          past: {
            one: "{0} yıl önce",
            other: "{0} yıl önce"
          }
        }
      },
      "year-short": {
        displayName: "yıl",
        relative: {
          0: "bu yıl",
          1: "gelecek yıl",
          "-1": "geçen yıl"
        },
        relativeTime: {
          future: {
            one: "{0} yıl sonra",
            other: "{0} yıl sonra"
          },
          past: {
            one: "{0} yıl önce",
            other: "{0} yıl önce"
          }
        }
      },
      month: {
        displayName: "ay",
        relative: {
          0: "bu ay",
          1: "gelecek ay",
          "-1": "geçen ay"
        },
        relativeTime: {
          future: {
            one: "{0} ay sonra",
            other: "{0} ay sonra"
          },
          past: {
            one: "{0} ay önce",
            other: "{0} ay önce"
          }
        }
      },
      "month-short": {
        displayName: "ay",
        relative: {
          0: "bu ay",
          1: "gelecek ay",
          "-1": "geçen ay"
        },
        relativeTime: {
          future: {
            one: "{0} ay sonra",
            other: "{0} ay sonra"
          },
          past: {
            one: "{0} ay önce",
            other: "{0} ay önce"
          }
        }
      },
      day: {
        displayName: "gün",
        relative: {
          0: "bugün",
          1: "yarın",
          2: "öbür gün",
          "-2": "evvelsi gün",
          "-1": "dün"
        },
        relativeTime: {
          future: {
            one: "{0} gün sonra",
            other: "{0} gün sonra"
          },
          past: {
            one: "{0} gün önce",
            other: "{0} gün önce"
          }
        }
      },
      "day-short": {
        displayName: "gün",
        relative: {
          0: "bugün",
          1: "yarın",
          2: "öbür gün",
          "-2": "evvelsi gün",
          "-1": "dün"
        },
        relativeTime: {
          future: {
            one: "{0} gün sonra",
            other: "{0} gün sonra"
          },
          past: {
            one: "{0} gün önce",
            other: "{0} gün önce"
          }
        }
      },
      hour: {
        displayName: "saat",
        relative: {
          0: "bu saat"
        },
        relativeTime: {
          future: {
            one: "{0} saat sonra",
            other: "{0} saat sonra"
          },
          past: {
            one: "{0} saat önce",
            other: "{0} saat önce"
          }
        }
      },
      "hour-short": {
        displayName: "sa.",
        relative: {
          0: "bu saat"
        },
        relativeTime: {
          future: {
            one: "{0} sa. sonra",
            other: "{0} sa. sonra"
          },
          past: {
            one: "{0} sa. önce",
            other: "{0} sa. önce"
          }
        }
      },
      minute: {
        displayName: "dakika",
        relative: {
          0: "bu dakika"
        },
        relativeTime: {
          future: {
            one: "{0} dakika sonra",
            other: "{0} dakika sonra"
          },
          past: {
            one: "{0} dakika önce",
            other: "{0} dakika önce"
          }
        }
      },
      "minute-short": {
        displayName: "dk.",
        relative: {
          0: "bu dakika"
        },
        relativeTime: {
          future: {
            one: "{0} dk. sonra",
            other: "{0} dk. sonra"
          },
          past: {
            one: "{0} dk. önce",
            other: "{0} dk. önce"
          }
        }
      },
      second: {
        displayName: "saniye",
        relative: {
          0: "şimdi"
        },
        relativeTime: {
          future: {
            one: "{0} saniye sonra",
            other: "{0} saniye sonra"
          },
          past: {
            one: "{0} saniye önce",
            other: "{0} saniye önce"
          }
        }
      },
      "second-short": {
        displayName: "sn.",
        relative: {
          0: "şimdi"
        },
        relativeTime: {
          future: {
            one: "{0} sn. sonra",
            other: "{0} sn. sonra"
          },
          past: {
            one: "{0} sn. önce",
            other: "{0} sn. önce"
          }
        }
      }
    }
  }, {
    locale: "tr-CY",
    parentLocale: "tr"
  }];
});

/***/ }),

/***/ "./src/locale-data/uk.js":
/*!*******************************!*\
  !*** ./src/locale-data/uk.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "uk",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      var a = String(e).split("."),
        r = a[0],
        o = !a[1],
        n = Number(a[0]) == e,
        i = n && a[0].slice(-1),
        m = n && a[0].slice(-2),
        l = r.slice(-1),
        f = r.slice(-2);
      return t ? 3 == i && 13 != m ? "few" : "other" : o && 1 == l && 11 != f ? "one" : o && l >= 2 && l <= 4 && (f < 12 || f > 14) ? "few" : o && 0 == l || o && l >= 5 && l <= 9 || o && f >= 11 && f <= 14 ? "many" : "other";
    },
    fields: {
      year: {
        displayName: "рік",
        relative: {
          0: "цього року",
          1: "наступного року",
          "-1": "торік"
        },
        relativeTime: {
          future: {
            one: "через {0} рік",
            few: "через {0} роки",
            many: "через {0} років",
            other: "через {0} року"
          },
          past: {
            one: "{0} рік тому",
            few: "{0} роки тому",
            many: "{0} років тому",
            other: "{0} року тому"
          }
        }
      },
      "year-short": {
        displayName: "р.",
        relative: {
          0: "цього року",
          1: "наступного року",
          "-1": "торік"
        },
        relativeTime: {
          future: {
            one: "через {0} р.",
            few: "через {0} р.",
            many: "через {0} р.",
            other: "через {0} р."
          },
          past: {
            one: "{0} р. тому",
            few: "{0} р. тому",
            many: "{0} р. тому",
            other: "{0} р. тому"
          }
        }
      },
      month: {
        displayName: "місяць",
        relative: {
          0: "цього місяця",
          1: "наступного місяця",
          "-1": "минулого місяця"
        },
        relativeTime: {
          future: {
            one: "через {0} місяць",
            few: "через {0} місяці",
            many: "через {0} місяців",
            other: "через {0} місяця"
          },
          past: {
            one: "{0} місяць тому",
            few: "{0} місяці тому",
            many: "{0} місяців тому",
            other: "{0} місяця тому"
          }
        }
      },
      "month-short": {
        displayName: "міс.",
        relative: {
          0: "цього місяця",
          1: "наступного місяця",
          "-1": "минулого місяця"
        },
        relativeTime: {
          future: {
            one: "через {0} міс.",
            few: "через {0} міс.",
            many: "через {0} міс.",
            other: "через {0} міс."
          },
          past: {
            one: "{0} міс. тому",
            few: "{0} міс. тому",
            many: "{0} міс. тому",
            other: "{0} міс. тому"
          }
        }
      },
      day: {
        displayName: "день",
        relative: {
          0: "сьогодні",
          1: "завтра",
          2: "післязавтра",
          "-2": "позавчора",
          "-1": "учора"
        },
        relativeTime: {
          future: {
            one: "через {0} день",
            few: "через {0} дні",
            many: "через {0} днів",
            other: "через {0} дня"
          },
          past: {
            one: "{0} день тому",
            few: "{0} дні тому",
            many: "{0} днів тому",
            other: "{0} дня тому"
          }
        }
      },
      "day-short": {
        displayName: "д.",
        relative: {
          0: "сьогодні",
          1: "завтра",
          2: "післязавтра",
          "-2": "позавчора",
          "-1": "учора"
        },
        relativeTime: {
          future: {
            one: "через {0} дн.",
            few: "через {0} дн.",
            many: "через {0} дн.",
            other: "через {0} дн."
          },
          past: {
            one: "{0} дн. тому",
            few: "{0} дн. тому",
            many: "{0} дн. тому",
            other: "{0} дн. тому"
          }
        }
      },
      hour: {
        displayName: "година",
        relative: {
          0: "цієї години"
        },
        relativeTime: {
          future: {
            one: "через {0} годину",
            few: "через {0} години",
            many: "через {0} годин",
            other: "через {0} години"
          },
          past: {
            one: "{0} годину тому",
            few: "{0} години тому",
            many: "{0} годин тому",
            other: "{0} години тому"
          }
        }
      },
      "hour-short": {
        displayName: "год.",
        relative: {
          0: "цієї години"
        },
        relativeTime: {
          future: {
            one: "через {0} год",
            few: "через {0} год",
            many: "через {0} год",
            other: "через {0} год"
          },
          past: {
            one: "{0} год тому",
            few: "{0} год тому",
            many: "{0} год тому",
            other: "{0} год тому"
          }
        }
      },
      minute: {
        displayName: "хвилина",
        relative: {
          0: "цієї хвилини"
        },
        relativeTime: {
          future: {
            one: "через {0} хвилину",
            few: "через {0} хвилини",
            many: "через {0} хвилин",
            other: "через {0} хвилини"
          },
          past: {
            one: "{0} хвилину тому",
            few: "{0} хвилини тому",
            many: "{0} хвилин тому",
            other: "{0} хвилини тому"
          }
        }
      },
      "minute-short": {
        displayName: "хв.",
        relative: {
          0: "цієї хвилини"
        },
        relativeTime: {
          future: {
            one: "через {0} хв",
            few: "через {0} хв",
            many: "через {0} хв",
            other: "через {0} хв"
          },
          past: {
            one: "{0} хв тому",
            few: "{0} хв тому",
            many: "{0} хв тому",
            other: "{0} хв тому"
          }
        }
      },
      second: {
        displayName: "секунда",
        relative: {
          0: "зараз"
        },
        relativeTime: {
          future: {
            one: "через {0} секунду",
            few: "через {0} секунди",
            many: "через {0} секунд",
            other: "через {0} секунди"
          },
          past: {
            one: "{0} секунду тому",
            few: "{0} секунди тому",
            many: "{0} секунд тому",
            other: "{0} секунди тому"
          }
        }
      },
      "second-short": {
        displayName: "с",
        relative: {
          0: "зараз"
        },
        relativeTime: {
          future: {
            one: "через {0} с",
            few: "через {0} с",
            many: "через {0} с",
            other: "через {0} с"
          },
          past: {
            one: "{0} с тому",
            few: "{0} с тому",
            many: "{0} с тому",
            other: "{0} с тому"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/uz.js":
/*!*******************************!*\
  !*** ./src/locale-data/uz.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "uz",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "yil",
        relative: {
          0: "shu yil",
          1: "keyingi yil",
          "-1": "o‘tgan yil"
        },
        relativeTime: {
          future: {
            one: "{0} yildan keyin",
            other: "{0} yildan keyin"
          },
          past: {
            one: "{0} yil oldin",
            other: "{0} yil oldin"
          }
        }
      },
      "year-short": {
        displayName: "yil",
        relative: {
          0: "bu yil",
          1: "keyingi yil",
          "-1": "oʻtgan yil"
        },
        relativeTime: {
          future: {
            one: "{0} yildan keyin",
            other: "{0} yildan keyin"
          },
          past: {
            one: "{0} yil oldin",
            other: "{0} yil oldin"
          }
        }
      },
      month: {
        displayName: "oy",
        relative: {
          0: "shu oy",
          1: "keyingi oy",
          "-1": "o‘tgan oy"
        },
        relativeTime: {
          future: {
            one: "{0} oydan keyin",
            other: "{0} oydan keyin"
          },
          past: {
            one: "{0} oy oldin",
            other: "{0} oy oldin"
          }
        }
      },
      "month-short": {
        displayName: "oy",
        relative: {
          0: "shu oy",
          1: "keyingi oy",
          "-1": "o‘tgan oy"
        },
        relativeTime: {
          future: {
            one: "{0} oydan keyin",
            other: "{0} oydan keyin"
          },
          past: {
            one: "{0} oy oldin",
            other: "{0} oy oldin"
          }
        }
      },
      day: {
        displayName: "kun",
        relative: {
          0: "bugun",
          1: "ertaga",
          "-1": "kecha"
        },
        relativeTime: {
          future: {
            one: "{0} kundan keyin",
            other: "{0} kundan keyin"
          },
          past: {
            one: "{0} kun oldin",
            other: "{0} kun oldin"
          }
        }
      },
      "day-short": {
        displayName: "kun",
        relative: {
          0: "bugun",
          1: "ertaga",
          "-1": "kecha"
        },
        relativeTime: {
          future: {
            one: "{0} kundan keyin",
            other: "{0} kundan keyin"
          },
          past: {
            one: "{0} kun oldin",
            other: "{0} kun oldin"
          }
        }
      },
      hour: {
        displayName: "soat",
        relative: {
          0: "shu soatda"
        },
        relativeTime: {
          future: {
            one: "{0} soatdan keyin",
            other: "{0} soatdan keyin"
          },
          past: {
            one: "{0} soat oldin",
            other: "{0} soat oldin"
          }
        }
      },
      "hour-short": {
        displayName: "soat",
        relative: {
          0: "shu soatda"
        },
        relativeTime: {
          future: {
            one: "{0} soatdan keyin",
            other: "{0} soatdan keyin"
          },
          past: {
            one: "{0} soat oldin",
            other: "{0} soat oldin"
          }
        }
      },
      minute: {
        displayName: "daqiqa",
        relative: {
          0: "shu daqiqada"
        },
        relativeTime: {
          future: {
            one: "{0} daqiqadan keyin",
            other: "{0} daqiqadan keyin"
          },
          past: {
            one: "{0} daqiqa oldin",
            other: "{0} daqiqa oldin"
          }
        }
      },
      "minute-short": {
        displayName: "daq.",
        relative: {
          0: "shu daqiqada"
        },
        relativeTime: {
          future: {
            one: "{0} daqiqadan keyin",
            other: "{0} daqiqadan keyin"
          },
          past: {
            one: "{0} daqiqa oldin",
            other: "{0} daqiqa oldin"
          }
        }
      },
      second: {
        displayName: "soniya",
        relative: {
          0: "hozir"
        },
        relativeTime: {
          future: {
            one: "{0} soniyadan keyin",
            other: "{0} soniyadan keyin"
          },
          past: {
            one: "{0} soniya oldin",
            other: "{0} soniya oldin"
          }
        }
      },
      "second-short": {
        displayName: "son.",
        relative: {
          0: "hozir"
        },
        relativeTime: {
          future: {
            one: "{0} soniyadan keyin",
            other: "{0} soniyadan keyin"
          },
          past: {
            one: "{0} soniya oldin",
            other: "{0} soniya oldin"
          }
        }
      }
    }
  }, {
    locale: "uz-Arab",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "uz-Cyrl",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Йил",
        relative: {
          0: "бу йил",
          1: "кейинги йил",
          "-1": "ўтган йил"
        },
        relativeTime: {
          future: {
            one: "{0} йилдан сўнг",
            other: "{0} йилдан сўнг"
          },
          past: {
            one: "{0} йил аввал",
            other: "{0} йил аввал"
          }
        }
      },
      "year-short": {
        displayName: "Йил",
        relative: {
          0: "бу йил",
          1: "кейинги йил",
          "-1": "ўтган йил"
        },
        relativeTime: {
          future: {
            one: "{0} йилдан сўнг",
            other: "{0} йилдан сўнг"
          },
          past: {
            one: "{0} йил аввал",
            other: "{0} йил аввал"
          }
        }
      },
      month: {
        displayName: "Ой",
        relative: {
          0: "бу ой",
          1: "кейинги ой",
          "-1": "ўтган ой"
        },
        relativeTime: {
          future: {
            one: "{0} ойдан сўнг",
            other: "{0} ойдан сўнг"
          },
          past: {
            one: "{0} ой аввал",
            other: "{0} ой аввал"
          }
        }
      },
      "month-short": {
        displayName: "Ой",
        relative: {
          0: "бу ой",
          1: "кейинги ой",
          "-1": "ўтган ой"
        },
        relativeTime: {
          future: {
            one: "{0} ойдан сўнг",
            other: "{0} ойдан сўнг"
          },
          past: {
            one: "{0} ой аввал",
            other: "{0} ой аввал"
          }
        }
      },
      day: {
        displayName: "Кун",
        relative: {
          0: "бугун",
          1: "эртага",
          "-1": "кеча"
        },
        relativeTime: {
          future: {
            one: "{0} кундан сўнг",
            other: "{0} кундан сўнг"
          },
          past: {
            one: "{0} кун олдин",
            other: "{0} кун олдин"
          }
        }
      },
      "day-short": {
        displayName: "Кун",
        relative: {
          0: "бугун",
          1: "эртага",
          "-1": "кеча"
        },
        relativeTime: {
          future: {
            one: "{0} кундан сўнг",
            other: "{0} кундан сўнг"
          },
          past: {
            one: "{0} кун олдин",
            other: "{0} кун олдин"
          }
        }
      },
      hour: {
        displayName: "Соат",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "{0} соатдан сўнг",
            other: "{0} соатдан сўнг"
          },
          past: {
            one: "{0} соат олдин",
            other: "{0} соат олдин"
          }
        }
      },
      "hour-short": {
        displayName: "Соат",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "{0} соатдан сўнг",
            other: "{0} соатдан сўнг"
          },
          past: {
            one: "{0} соат олдин",
            other: "{0} соат олдин"
          }
        }
      },
      minute: {
        displayName: "Дақиқа",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "{0} дақиқадан сўнг",
            other: "{0} дақиқадан сўнг"
          },
          past: {
            one: "{0} дақиқа олдин",
            other: "{0} дақиқа олдин"
          }
        }
      },
      "minute-short": {
        displayName: "Дақиқа",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "{0} дақиқадан сўнг",
            other: "{0} дақиқадан сўнг"
          },
          past: {
            one: "{0} дақиқа олдин",
            other: "{0} дақиқа олдин"
          }
        }
      },
      second: {
        displayName: "Сония",
        relative: {
          0: "ҳозир"
        },
        relativeTime: {
          future: {
            one: "{0} сониядан сўнг",
            other: "{0} сониядан сўнг"
          },
          past: {
            one: "{0} сония олдин",
            other: "{0} сония олдин"
          }
        }
      },
      "second-short": {
        displayName: "Сония",
        relative: {
          0: "ҳозир"
        },
        relativeTime: {
          future: {
            one: "{0} сониядан сўнг",
            other: "{0} сониядан сўнг"
          },
          past: {
            one: "{0} сония олдин",
            other: "{0} сония олдин"
          }
        }
      }
    }
  }, {
    locale: "uz-Latn",
    parentLocale: "uz"
  }];
});

/***/ }),

/***/ "./src/locale-data/vi.js":
/*!*******************************!*\
  !*** ./src/locale-data/vi.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "vi",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t && 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Năm",
        relative: {
          0: "năm nay",
          1: "năm sau",
          "-1": "năm ngoái"
        },
        relativeTime: {
          future: {
            other: "sau {0} năm nữa"
          },
          past: {
            other: "{0} năm trước"
          }
        }
      },
      "year-short": {
        displayName: "Năm",
        relative: {
          0: "năm nay",
          1: "năm sau",
          "-1": "năm ngoái"
        },
        relativeTime: {
          future: {
            other: "sau {0} năm nữa"
          },
          past: {
            other: "{0} năm trước"
          }
        }
      },
      month: {
        displayName: "Tháng",
        relative: {
          0: "tháng này",
          1: "tháng sau",
          "-1": "tháng trước"
        },
        relativeTime: {
          future: {
            other: "sau {0} tháng nữa"
          },
          past: {
            other: "{0} tháng trước"
          }
        }
      },
      "month-short": {
        displayName: "Tháng",
        relative: {
          0: "tháng này",
          1: "tháng sau",
          "-1": "tháng trước"
        },
        relativeTime: {
          future: {
            other: "sau {0} tháng nữa"
          },
          past: {
            other: "{0} tháng trước"
          }
        }
      },
      day: {
        displayName: "Ngày",
        relative: {
          0: "Hôm nay",
          1: "Ngày mai",
          2: "Ngày kia",
          "-2": "Hôm kia",
          "-1": "Hôm qua"
        },
        relativeTime: {
          future: {
            other: "sau {0} ngày nữa"
          },
          past: {
            other: "{0} ngày trước"
          }
        }
      },
      "day-short": {
        displayName: "Ngày",
        relative: {
          0: "Hôm nay",
          1: "Ngày mai",
          2: "Ngày kia",
          "-2": "Hôm kia",
          "-1": "Hôm qua"
        },
        relativeTime: {
          future: {
            other: "sau {0} ngày nữa"
          },
          past: {
            other: "{0} ngày trước"
          }
        }
      },
      hour: {
        displayName: "Giờ",
        relative: {
          0: "giờ này"
        },
        relativeTime: {
          future: {
            other: "sau {0} giờ nữa"
          },
          past: {
            other: "{0} giờ trước"
          }
        }
      },
      "hour-short": {
        displayName: "Giờ",
        relative: {
          0: "giờ này"
        },
        relativeTime: {
          future: {
            other: "sau {0} giờ nữa"
          },
          past: {
            other: "{0} giờ trước"
          }
        }
      },
      minute: {
        displayName: "Phút",
        relative: {
          0: "phút này"
        },
        relativeTime: {
          future: {
            other: "sau {0} phút nữa"
          },
          past: {
            other: "{0} phút trước"
          }
        }
      },
      "minute-short": {
        displayName: "Phút",
        relative: {
          0: "phút này"
        },
        relativeTime: {
          future: {
            other: "sau {0} phút nữa"
          },
          past: {
            other: "{0} phút trước"
          }
        }
      },
      second: {
        displayName: "Giây",
        relative: {
          0: "bây giờ"
        },
        relativeTime: {
          future: {
            other: "sau {0} giây nữa"
          },
          past: {
            other: "{0} giây trước"
          }
        }
      },
      "second-short": {
        displayName: "Giây",
        relative: {
          0: "bây giờ"
        },
        relativeTime: {
          future: {
            other: "sau {0} giây nữa"
          },
          past: {
            other: "{0} giây trước"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/xh.js":
/*!*******************************!*\
  !*** ./src/locale-data/xh.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "xh",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/locale-data/zh.js":
/*!*******************************!*\
  !*** ./src/locale-data/zh.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "zh",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒钟后"
          },
          past: {
            other: "{0}秒钟前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hans",
    parentLocale: "zh"
  }, {
    locale: "zh-Hans-HK",
    parentLocale: "zh-Hans",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hans-MO",
    parentLocale: "zh-Hans",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hans-SG",
    parentLocale: "zh-Hans",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0}年后"
          },
          past: {
            other: "{0}年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下个月",
          "-1": "上个月"
        },
        relativeTime: {
          future: {
            other: "{0}个月后"
          },
          past: {
            other: "{0}个月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0}天后"
          },
          past: {
            other: "{0}天前"
          }
        }
      },
      hour: {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      "hour-short": {
        displayName: "小时",
        relative: {
          0: "这一时间 / 此时"
        },
        relativeTime: {
          future: {
            other: "{0}小时后"
          },
          past: {
            other: "{0}小时前"
          }
        }
      },
      minute: {
        displayName: "分钟",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      "minute-short": {
        displayName: "分",
        relative: {
          0: "此刻"
        },
        relativeTime: {
          future: {
            other: "{0}分钟后"
          },
          past: {
            other: "{0}分钟前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "现在"
        },
        relativeTime: {
          future: {
            other: "{0}秒后"
          },
          past: {
            other: "{0}秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hant",
    pluralRuleFunction: function pluralRuleFunction(e, t) {
      return "other";
    },
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "明年",
          "-1": "去年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0} 天後"
          },
          past: {
            other: "{0} 天前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今天",
          1: "明天",
          2: "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        relativeTime: {
          future: {
            other: "{0} 天後"
          },
          past: {
            other: "{0} 天前"
          }
        }
      },
      hour: {
        displayName: "小時",
        relative: {
          0: "這一小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      "hour-short": {
        displayName: "小時",
        relative: {
          0: "這一小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      minute: {
        displayName: "分鐘",
        relative: {
          0: "這一分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      "minute-short": {
        displayName: "分鐘",
        relative: {
          0: "這一分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hant-HK",
    parentLocale: "zh-Hant",
    fields: {
      year: {
        displayName: "年",
        relative: {
          0: "今年",
          1: "下年",
          "-1": "上年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      "year-short": {
        displayName: "年",
        relative: {
          0: "今年",
          1: "下年",
          "-1": "上年"
        },
        relativeTime: {
          future: {
            other: "{0} 年後"
          },
          past: {
            other: "{0} 年前"
          }
        }
      },
      month: {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      "month-short": {
        displayName: "月",
        relative: {
          0: "本月",
          1: "下個月",
          "-1": "上個月"
        },
        relativeTime: {
          future: {
            other: "{0} 個月後"
          },
          past: {
            other: "{0} 個月前"
          }
        }
      },
      day: {
        displayName: "日",
        relative: {
          0: "今日",
          1: "明日",
          2: "後日",
          "-2": "前日",
          "-1": "昨日"
        },
        relativeTime: {
          future: {
            other: "{0} 日後"
          },
          past: {
            other: "{0} 日前"
          }
        }
      },
      "day-short": {
        displayName: "日",
        relative: {
          0: "今日",
          1: "明日",
          2: "後日",
          "-2": "前日",
          "-1": "昨日"
        },
        relativeTime: {
          future: {
            other: "{0} 日後"
          },
          past: {
            other: "{0} 日前"
          }
        }
      },
      hour: {
        displayName: "小時",
        relative: {
          0: "這個小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      "hour-short": {
        displayName: "小時",
        relative: {
          0: "這個小時"
        },
        relativeTime: {
          future: {
            other: "{0} 小時後"
          },
          past: {
            other: "{0} 小時前"
          }
        }
      },
      minute: {
        displayName: "分鐘",
        relative: {
          0: "這分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      "minute-short": {
        displayName: "分鐘",
        relative: {
          0: "這分鐘"
        },
        relativeTime: {
          future: {
            other: "{0} 分鐘後"
          },
          past: {
            other: "{0} 分鐘前"
          }
        }
      },
      second: {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      },
      "second-short": {
        displayName: "秒",
        relative: {
          0: "現在"
        },
        relativeTime: {
          future: {
            other: "{0} 秒後"
          },
          past: {
            other: "{0} 秒前"
          }
        }
      }
    }
  }, {
    locale: "zh-Hant-MO",
    parentLocale: "zh-Hant-HK"
  }];
});

/***/ }),

/***/ "./src/locale-data/zu.js":
/*!*******************************!*\
  !*** ./src/locale-data/zu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function () {
  "use strict";

  return [{
    locale: "zu",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return a ? "other" : e >= 0 && e <= 1 ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "Unyaka",
        relative: {
          0: "kulo nyaka",
          1: "unyaka ozayo",
          "-1": "onyakeni odlule"
        },
        relativeTime: {
          future: {
            one: "onyakeni ongu-{0} ozayo",
            other: "eminyakeni engu-{0} ezayo"
          },
          past: {
            one: "{0} unyaka odlule",
            other: "{0} iminyaka edlule"
          }
        }
      },
      "year-short": {
        displayName: "Unyaka",
        relative: {
          0: "kulo nyaka",
          1: "unyaka ozayo",
          "-1": "onyakeni odlule"
        },
        relativeTime: {
          future: {
            one: "onyakeni ongu-{0} ozayo",
            other: "eminyakeni engu-{0} ezayo"
          },
          past: {
            one: "{0} unyaka odlule",
            other: "{0} unyaka odlule"
          }
        }
      },
      month: {
        displayName: "Inyanga",
        relative: {
          0: "le nyanga",
          1: "inyanga ezayo",
          "-1": "inyanga edlule"
        },
        relativeTime: {
          future: {
            one: "enyangeni engu-{0}",
            other: "ezinyangeni ezingu-{0} ezizayo"
          },
          past: {
            one: "{0} inyanga edlule",
            other: "{0} izinyanga ezedlule"
          }
        }
      },
      "month-short": {
        displayName: "Inyanga",
        relative: {
          0: "le nyanga",
          1: "inyanga ezayo",
          "-1": "inyanga edlule"
        },
        relativeTime: {
          future: {
            one: "ezinyangeni ezingu-{0} ezizayo",
            other: "ezinyangeni ezingu-{0} ezizayo"
          },
          past: {
            one: "{0} izinyanga ezedlule",
            other: "{0} izinyanga ezedlule"
          }
        }
      },
      day: {
        displayName: "Usuku",
        relative: {
          0: "namhlanje",
          1: "kusasa",
          2: "usuku olulandela olwakusasa",
          "-2": "usuku olwandulela olwayizolo",
          "-1": "izolo"
        },
        relativeTime: {
          future: {
            one: "osukwini olungu-{0} oluzayo",
            other: "ezinsukwini ezingu-{0} ezizayo"
          },
          past: {
            one: "osukwini olungu-{0} olwedlule",
            other: "ezinsukwini ezingu-{0} ezedlule."
          }
        }
      },
      "day-short": {
        displayName: "Usuku",
        relative: {
          0: "namhlanje",
          1: "kusasa",
          2: "usuku olulandela olwakusasa",
          "-2": "usuku olwandulela olwayizolo",
          "-1": "izolo"
        },
        relativeTime: {
          future: {
            one: "osukwini olungu-{0} oluzayo",
            other: "ezinsukwini ezingu-{0} ezizayo"
          },
          past: {
            one: "{0} usuku olwedlule",
            other: "{0} izinsuku ezedlule"
          }
        }
      },
      hour: {
        displayName: "Ihora",
        relative: {
          0: "leli hora"
        },
        relativeTime: {
          future: {
            one: "ehoreni elingu-{0} elizayo",
            other: "emahoreni angu-{0} ezayo"
          },
          past: {
            one: "{0} ihora eledlule",
            other: "emahoreni angu-{0} edlule"
          }
        }
      },
      "hour-short": {
        displayName: "Ihora",
        relative: {
          0: "leli hora"
        },
        relativeTime: {
          future: {
            one: "ehoreni elingu-{0} elizayo",
            other: "emahoreni angu-{0} ezayo"
          },
          past: {
            one: "{0} ihora eledlule",
            other: "emahoreni angu-{0} edlule"
          }
        }
      },
      minute: {
        displayName: "Iminithi",
        relative: {
          0: "leli minithi"
        },
        relativeTime: {
          future: {
            one: "kuminithi elingu-{0} elizayo",
            other: "kumaminithi angu-{0} ezayo"
          },
          past: {
            one: "{0} iminithi eledlule",
            other: "{0} amaminithi edlule"
          }
        }
      },
      "minute-short": {
        displayName: "Iminithi",
        relative: {
          0: "leli minithi"
        },
        relativeTime: {
          future: {
            one: "kuminithi elingu-{0} elizayo",
            other: "kumaminithi angu-{0} ezayo"
          },
          past: {
            one: "{0} iminithi eledlule",
            other: "{0} amaminithi edlule"
          }
        }
      },
      second: {
        displayName: "Isekhondi",
        relative: {
          0: "manje"
        },
        relativeTime: {
          future: {
            one: "kusekhondi elingu-{0} elizayo",
            other: "kumasekhondi angu-{0} ezayo"
          },
          past: {
            one: "{0} isekhondi eledlule",
            other: "{0} amasekhondi edlule"
          }
        }
      },
      "second-short": {
        displayName: "Isekhondi",
        relative: {
          0: "manje"
        },
        relativeTime: {
          future: {
            one: "kusekhondi elingu-{0} elizayo",
            other: "kumasekhondi angu-{0} ezayo"
          },
          past: {
            one: "{0} isekhondi eledlule",
            other: "{0} amasekhondi edlule"
          }
        }
      }
    }
  }];
});

/***/ }),

/***/ "./src/supported-locales.js":
/*!**********************************!*\
  !*** ./src/supported-locales.js ***!
  \**********************************/
/*! exports provided: default, customLocales, localeMap, isRtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customLocales", function() { return customLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMap", function() { return localeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return isRtl; });
/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */

var locales = {
  'ab': {
    name: 'Аҧсшәа'
  },
  'af': {
    name: 'Afrikaans'
  },
  'ar': {
    name: 'العربية'
  },
  'am': {
    name: 'አማርኛ'
  },
  'an': {
    name: 'Aragonés'
  },
  'ast': {
    name: 'Asturianu'
  },
  'az': {
    name: 'Azeri'
  },
  'id': {
    name: 'Bahasa Indonesia'
  },
  'bn': {
    name: 'বাংলা'
  },
  'be': {
    name: 'Беларуская'
  },
  'bg': {
    name: 'Български'
  },
  'ca': {
    name: 'Català'
  },
  'cs': {
    name: 'Česky'
  },
  'cy': {
    name: 'Cymraeg'
  },
  'da': {
    name: 'Dansk'
  },
  'de': {
    name: 'Deutsch'
  },
  'et': {
    name: 'Eesti'
  },
  'el': {
    name: 'Ελληνικά'
  },
  'en': {
    name: 'English'
  },
  'es': {
    name: 'Español (España)'
  },
  'es-419': {
    name: 'Español Latinoamericano'
  },
  'eo': {
    name: 'Esperanto'
  },
  'eu': {
    name: 'Euskara'
  },
  'fa': {
    name: 'فارسی'
  },
  'fil': {
    name: 'Filipino'
  },
  'fr': {
    name: 'Français'
  },
  'fy': {
    name: 'Frysk'
  },
  'ga': {
    name: 'Gaeilge'
  },
  'gd': {
    name: 'Gàidhlig'
  },
  'gl': {
    name: 'Galego'
  },
  'ko': {
    name: '한국어'
  },
  'ha': {
    name: 'Hausa'
  },
  'hy': {
    name: 'Հայերեն'
  },
  'he': {
    name: 'עִבְרִית'
  },
  'hr': {
    name: 'Hrvatski'
  },
  'xh': {
    name: 'isiXhosa'
  },
  'zu': {
    name: 'isiZulu'
  },
  'is': {
    name: 'Íslenska'
  },
  'it': {
    name: 'Italiano'
  },
  'ka': {
    name: 'ქართული ენა'
  },
  'kk': {
    name: 'қазақша'
  },
  'qu': {
    name: 'Kichwa'
  },
  'sw': {
    name: 'Kiswahili'
  },
  'ht': {
    name: 'Kreyòl ayisyen'
  },
  'ku': {
    name: 'Kurdî'
  },
  'ckb': {
    name: 'کوردیی ناوەندی'
  },
  'lv': {
    name: 'Latviešu'
  },
  'lt': {
    name: 'Lietuvių'
  },
  'hu': {
    name: 'Magyar'
  },
  'mi': {
    name: 'Māori'
  },
  'mn': {
    name: 'Монгол хэл'
  },
  'nl': {
    name: 'Nederlands'
  },
  'ja': {
    name: '日本語'
  },
  'ja-Hira': {
    name: 'にほんご'
  },
  'nb': {
    name: 'Norsk Bokmål'
  },
  'nn': {
    name: 'Norsk Nynorsk'
  },
  'oc': {
    name: 'Occitan'
  },
  'or': {
    name: 'ଓଡ଼ିଆ'
  },
  'uz': {
    name: 'Oʻzbekcha'
  },
  'th': {
    name: 'ไทย'
  },
  'km': {
    name: 'ភាសាខ្មែរ'
  },
  'pl': {
    name: 'Polski'
  },
  'pt': {
    name: 'Português'
  },
  'pt-br': {
    name: 'Português Brasileiro'
  },
  'rap': {
    name: 'Rapa Nui'
  },
  'ro': {
    name: 'Română'
  },
  'ru': {
    name: 'Русский'
  },
  'nso': {
    name: 'Sepedi'
  },
  'tn': {
    name: 'Setswana'
  },
  'sk': {
    name: 'Slovenčina'
  },
  'sl': {
    name: 'Slovenščina'
  },
  'sr': {
    name: 'Српски'
  },
  'fi': {
    name: 'Suomi'
  },
  'sv': {
    name: 'Svenska'
  },
  'vi': {
    name: 'Tiếng Việt'
  },
  'tr': {
    name: 'Türkçe'
  },
  'uk': {
    name: 'Українська'
  },
  'zh-cn': {
    name: '简体中文'
  },
  'zh-tw': {
    name: '繁體中文'
  }
};
var customLocales = {
  'ab': {
    locale: 'ab',
    parentLocale: 'ru'
  },
  // Aragonese is not in the locale data, using es for Spain
  'an': {
    locale: 'an',
    parentLocale: 'es'
  },
  // haitian creole is not in locale-langData
  'ht': {
    locale: 'ht',
    parentLocale: 'fr'
  },
  'oc': {
    locale: 'oc',
    parentLocale: 'fr'
  },
  'rap': {
    locale: 'rap',
    parentLocale: 'es'
  },
  // TODO: replace zh-cn, zh-tw with zh-Hans and zh-Hant then customLocales is unnecessary
  'zh-cn': {
    locale: 'zh-cn',
    parentLocale: 'zh'
  },
  'zh-tw': {
    locale: 'zh-tw',
    parentLocale: 'zh'
  }
};
var localeMap = {
  'aa-dj': 'aa_DJ',
  'es-419': 'es_419',
  // ja-Hira: no map - it's 'ja-Hira' on transifex
  'pt-br': 'pt_BR',
  'zh-cn': 'zh_CN',
  'zh-tw': 'zh_TW'
};

// list of RTL locales supported, and a function to check whether a locale is RTL
var rtlLocales = ['ar', 'ckb', 'fa', 'he'];
var isRtl = function isRtl(locale) {
  return rtlLocales.indexOf(locale) !== -1;
};


/***/ })

/******/ });
//# sourceMappingURL=l10n.js.map