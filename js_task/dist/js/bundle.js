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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/ArrayProcessor.js":
/*!**********************************!*\
  !*** ./src/js/ArrayProcessor.js ***!
  \**********************************/
/*! exports provided: ArrayProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProcessor", function() { return ArrayProcessor; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ArrayProcessor = {
  subSum: function subSum(arr) {
    var curSum = 0;
    var lastElemIndex = 0;

    for (var i = 0; i < arr.length; i++) {
      if (curSum + arr[i] >= curSum) {
        curSum = curSum + arr[i];
        lastElemIndex = i;
      } else {
        if (arr[i] + arr[i + 1] >= 0 && curSum >= arr[i + 1] && lastElemIndex + 1 == i) {
          //case when subSum still inc
          curSum = curSum + arr[i] + arr[i + 1];
          lastElemIndex = i + 1;
        } else {
          //case when subArray inperupts
          curSum = arr[i + 1] >= curSum ? arr[i + 1] : curSum;
        }

        i++;
      }
    }

    return curSum;
  },
  getMax: function getMax(arr) {
    var arrSorted = _toConsumableArray(arr).sort();

    return arrSorted[arrSorted.length - 1];
  },
  getMin: function getMin(arr) {
    var arrSorted = _toConsumableArray(arr).sort();

    return arrSorted[0];
  },
  getMedium: function getMedium(arr) {
    var arrSorted = _toConsumableArray(arr).sort();

    var len = arr.length;
    if (len % 2 == 0) return (arrSorted[len / 2] + arrSorted[len / 2 - 1]) / 2;else return arrSorted[(len - 1) / 2];
  },
  getMaxSubSeq: function getMaxSubSeq(arr) {
    var seqIncr = [];
    var seqDecr = [];
    var tmpSequence = [arr[0]];
    var curEl = arr[0];

    for (var i = 1; i < arr.length;) {
      while (curEl <= arr[i] && i < arr.length) {
        //console.log('compare inc', curEl, arr[i]);
        tmpSequence.push(arr[i]);
        curEl = arr[i];
        i++;
      } //console.log('compare inc seq', tmpSequence, seqIncr);


      if (seqIncr.length < tmpSequence.length) {
        seqIncr = _toConsumableArray(tmpSequence);
      }

      tmpSequence = [curEl]; //console.log('reslt inc', tmpSequence, seqIncr, curEl, arr[i]);
      //I need to skip decreasing seq, though i'd like to save it

      while (curEl >= arr[i] && i < arr.length) {
        console.log('compare decr', curEl, arr[i]);
        tmpSequence.push(arr[i]);
        curEl = arr[i];
        i++;
      } //console.log('compare dec seq', tmpSequence, seqDecr);


      if (seqDecr.length < tmpSequence.length) {
        seqDecr = _toConsumableArray(tmpSequence);
      }

      tmpSequence = [curEl]; //console.log('reslt dec', tmpSequence, seqDecr, curEl, arr[i]);
      //console.log('iter');
    }

    if (seqIncr.length == 1) seqIncr.pop();
    if (seqDecr.length == 1) seqDecr.pop();
    return {
      seqIncr: seqIncr,
      seqDecr: seqDecr
    };
  },
  getMaxIncSubSeq: function getMaxIncSubSeq(arr) {
    var seqIncr = [];
    var tmpSequence = [arr[0]];
    var curEl = arr[0];

    for (var i = 1; i < arr.length; i++) {
      console.log('compare inc', curEl, arr[i]);

      if (curEl <= arr[i]) {
        tmpSequence.push(arr[i]);
        console.log('com', tmpSequence, seqIncr);
      } else {
        console.log('compare inc seq', tmpSequence, seqIncr, seqIncr.length < tmpSequence.length);

        if (seqIncr.length < tmpSequence.length) {
          seqIncr = _toConsumableArray(tmpSequence);
        }

        tmpSequence = [arr[i]];
      }

      curEl = arr[i];
    }

    if (seqIncr.length < tmpSequence.length) {
      seqIncr = _toConsumableArray(tmpSequence);
    }

    if (seqIncr.length == 1) seqIncr.pop();
    return seqIncr;
  }
};

/***/ }),

/***/ "./src/js/DateFormatter.js":
/*!*********************************!*\
  !*** ./src/js/DateFormatter.js ***!
  \*********************************/
/*! exports provided: DateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return DateFormatter; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DateFormatter =
/*#__PURE__*/
function (_Date) {
  _inherits(DateFormatter, _Date);

  function DateFormatter(dateStr) {
    var _this;

    var regStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "MMDDYYYY";

    _classCallCheck(this, DateFormatter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateFormatter).call(this, dateStr));
    var matchYear = regStr.match(/Y+/);
    _this.year = dateStr.toString().slice(matchYear.index, matchYear.index + matchYear[0].length);
    var matchDay = regStr.match(/D+/);
    _this.day = dateStr.toString().slice(matchDay.index, matchDay.index + matchDay[0].length);
    var matchMonth = regStr.match(/M+/);
    _this.month = dateStr.toString().slice(matchMonth.index, matchMonth.index + matchMonth[0].length);
    return _this;
  }

  _createClass(DateFormatter, [{
    key: "getYear",
    value: function getYear() {
      return parseInt(this.year);
    }
  }, {
    key: "getDay",
    value: function getDay() {
      return parseInt(this.day);
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return parseInt(this.month);
    }
  }, {
    key: "getStrMonth",
    value: function getStrMonth() {
      return this.month;
    }
  }, {
    key: "getFormattedMonth",
    value: function getFormattedMonth() {
      var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return month[parseInt(this.month - 1)];
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return "".concat(this.getStrMonth(), "-").concat(this.getDay(), "-").concat(this.getYear());
    }
  }, {
    key: "getFormattedDate",
    value: function getFormattedDate() {
      return "".concat(this.getFormattedMonth(), " ").concat(this.getDay(), " ").concat(this.getYear());
    }
  }]);

  return DateFormatter;
}(_wrapNativeSuper(Date));

/***/ }),

/***/ "./src/js/Helper.js":
/*!**************************!*\
  !*** ./src/js/Helper.js ***!
  \**************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
var Helper = {
  funcPerformance: function funcPerformance(func) {
    try {
      var timeBefore = performance.now() || Date.now();

      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      func.apply(void 0, params);
      var timeAfter = performance.now() || Date.now();
      return timeAfter - timeBefore;
    } catch (err) {
      console.error('Helpers.funcPerformance error: ' + err.message);
    }
  },
  functionOutput: function functionOutput(func) {
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    return "".concat(func.name, " result: ").concat(func.apply(void 0, params), "\n");
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_ArrayProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/ArrayProcessor */ "./src/js/ArrayProcessor.js");
/* harmony import */ var _js_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/Helper */ "./src/js/Helper.js");
/* harmony import */ var _js_DateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/DateFormatter */ "./src/js/DateFormatter.js");



'use strict';

var input = document.getElementById('work-space__input');
var output = document.getElementById('work-space__output');
input.addEventListener('change', function () {
  var numbers = this.value.match(/-?\d+/g);
  console.log('lol');

  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
  }

  output.textContent = '';
  output.textContent += _js_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(_js_ArrayProcessor__WEBPACK_IMPORTED_MODULE_0__["ArrayProcessor"].subSum, numbers);
  output.textContent += _js_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(_js_ArrayProcessor__WEBPACK_IMPORTED_MODULE_0__["ArrayProcessor"].getMaxIncSubSeq, numbers);
  output.textContent += _js_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(_js_ArrayProcessor__WEBPACK_IMPORTED_MODULE_0__["ArrayProcessor"].getMax, numbers);
  output.textContent += _js_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(_js_ArrayProcessor__WEBPACK_IMPORTED_MODULE_0__["ArrayProcessor"].getMin, numbers);
  output.textContent += _js_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(_js_ArrayProcessor__WEBPACK_IMPORTED_MODULE_0__["ArrayProcessor"].getMedium, numbers);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map