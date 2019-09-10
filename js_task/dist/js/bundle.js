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

/***/ "./src/js/EventHandlers/ArrayProcessorHandler.js":
/*!*******************************************************!*\
  !*** ./src/js/EventHandlers/ArrayProcessorHandler.js ***!
  \*******************************************************/
/*! exports provided: APT_input_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APT_input_action", function() { return APT_input_action; });
/* harmony import */ var _modules_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Helper */ "./src/js/modules/Helper.js");
/* harmony import */ var _modules_ArrayProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ArrayProcessor */ "./src/js/modules/ArrayProcessor.js");


function APT_input_action(input, output) {
  var numbers = input.value.match(/-?\d+/g);

  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
  }

  output.textContent = '';
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArrayProcessor__WEBPACK_IMPORTED_MODULE_1__["ArrayProcessor"].subSum, numbers);
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArrayProcessor__WEBPACK_IMPORTED_MODULE_1__["ArrayProcessor"].getMaxIncSubSeq, numbers);
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArrayProcessor__WEBPACK_IMPORTED_MODULE_1__["ArrayProcessor"].getMax, numbers);
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArrayProcessor__WEBPACK_IMPORTED_MODULE_1__["ArrayProcessor"].getMin, numbers);
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArrayProcessor__WEBPACK_IMPORTED_MODULE_1__["ArrayProcessor"].getMedium, numbers);
}

/***/ }),

/***/ "./src/js/EventHandlers/ArraySorterHandler.js":
/*!****************************************************!*\
  !*** ./src/js/EventHandlers/ArraySorterHandler.js ***!
  \****************************************************/
/*! exports provided: ArraySorter_input_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySorter_input_action", function() { return ArraySorter_input_action; });
/* harmony import */ var _modules_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Helper */ "./src/js/modules/Helper.js");
/* harmony import */ var _modules_ArraySorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ArraySorter */ "./src/js/modules/ArraySorter.js");


function ArraySorter_input_action(input, output) {
  var numbers = input.value.match(/-?\d+/g);

  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
  }

  output.textContent = '';
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArraySorter__WEBPACK_IMPORTED_MODULE_1__["ArraySorter"].bubbleSort, numbers);
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArraySorter__WEBPACK_IMPORTED_MODULE_1__["ArraySorter"].insertionSort, numbers);
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArraySorter__WEBPACK_IMPORTED_MODULE_1__["ArraySorter"].selectionSort, numbers);
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].functionOutput(_modules_ArraySorter__WEBPACK_IMPORTED_MODULE_1__["ArraySorter"].mergeSort.bind(_modules_ArraySorter__WEBPACK_IMPORTED_MODULE_1__["ArraySorter"]), numbers);
}

/***/ }),

/***/ "./src/js/EventHandlers/BinaryConverterHandler.js":
/*!********************************************************!*\
  !*** ./src/js/EventHandlers/BinaryConverterHandler.js ***!
  \********************************************************/
/*! exports provided: BinaryConverter_input_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryConverter_input_action", function() { return BinaryConverter_input_action; });
/* harmony import */ var _modules_BinaryConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/BinaryConverter */ "./src/js/modules/BinaryConverter.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function BinaryConverter_input_action(input, args, output) {
  var numbers = input.value.match(/-?[\da-zA-Z]/g);
  var params = args.map(function (el) {
    return el.value;
  });

  try {
    output.textContent = _modules_BinaryConverter__WEBPACK_IMPORTED_MODULE_0__["numberConvert"].apply(void 0, [numbers].concat(_toConsumableArray(params)));
  } catch (err) {
    output.textContent = err;
  }
}

/***/ }),

/***/ "./src/js/EventHandlers/CacherHandler.js":
/*!***********************************************!*\
  !*** ./src/js/EventHandlers/CacherHandler.js ***!
  \***********************************************/
/*! exports provided: Cacher_input_acion, Cacher_clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cacher_input_acion", function() { return Cacher_input_acion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cacher_clear", function() { return Cacher_clear; });
/* harmony import */ var _modules_Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Cache */ "./src/js/modules/Cache.js");

function Cacher_input_acion(input, limit, output) {
  var cachedFunc = _modules_Cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].reg(say, limit.value);
  cachedFunc(input.value);
  var cache = JSON.stringify(cachedFunc.getCache()).replace(/,/g, '\n');
  output.textContent = cache + '\n';
}
function Cacher_clear(output) {
  _modules_Cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].register = [];
  output.textContent = '';
}

function say(arg) {
  return 'Hello ' + arg;
}

/***/ }),

/***/ "./src/js/EventHandlers/DateFromatterHandler.js":
/*!******************************************************!*\
  !*** ./src/js/EventHandlers/DateFromatterHandler.js ***!
  \******************************************************/
/*! exports provided: DateFormatter_input_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter_input_action", function() { return DateFormatter_input_action; });
/* harmony import */ var _modules_DateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DateFormatter */ "./src/js/modules/DateFormatter.js");
/* harmony import */ var _modules_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Helper */ "./src/js/modules/Helper.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



function DateFormatter_input_action(input, output) {
  var numbs = input.value.match(/(\d+.?\d+.?\d+)/)[0];
  var formats = input.value.match(/[YMD]+.?[YMD]+.?[YMD]+/g);

  var date = _construct(_modules_DateFormatter__WEBPACK_IMPORTED_MODULE_0__["DateFormatter"], [numbs].concat(_toConsumableArray(formats)));

  output.textContent = date.toString() + '\n';
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.getDate.bind(date));
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.getMonth.bind(date));
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.getDay.bind(date));
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.getFullYear.bind(date));
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.getFormattedDay.bind(date));
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.getFormattedMonth.bind(date));
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.getFormattedDate.bind(date));
  output.textContent += _modules_Helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].functionOutput(date.fromNow.bind(date));
}

/***/ }),

/***/ "./src/js/EventHandlers/StringCalculator.js":
/*!**************************************************!*\
  !*** ./src/js/EventHandlers/StringCalculator.js ***!
  \**************************************************/
/*! exports provided: StringCalculator_input_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringCalculator_input_action", function() { return StringCalculator_input_action; });
/* harmony import */ var _modules_CachingCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/CachingCalculator */ "./src/js/modules/CachingCalculator.js");

function StringCalculator_input_action(input, output) {
  output.textContent = _modules_CachingCalculator__WEBPACK_IMPORTED_MODULE_0__["CachingCalculator"].exec(input.value) + '\n';
  var calcCache = JSON.stringify(_modules_CachingCalculator__WEBPACK_IMPORTED_MODULE_0__["CachingCalculator"].exec.getCache()).replace(/,/g, '\n');
  output.textContent += calcCache;
}

/***/ }),

/***/ "./src/js/EventHandlers/TextFormatterHandler.js":
/*!******************************************************!*\
  !*** ./src/js/EventHandlers/TextFormatterHandler.js ***!
  \******************************************************/
/*! exports provided: TextFormatter_input_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatter_input_action", function() { return TextFormatter_input_action; });
/* harmony import */ var _modules_TextFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/TextFormatter */ "./src/js/modules/TextFormatter.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function TextFormatter_input_action(input, args, output) {
  var params = args.map(function (el) {
    return el.value;
  });
  var formattedText = _modules_TextFormatter__WEBPACK_IMPORTED_MODULE_0__["textFormatter"].apply(void 0, [input.value].concat(_toConsumableArray(params)));
  output.textContent = '';
  if (formattedText.forEach) formattedText.forEach(function (el) {
    el += '\n';
    output.textContent += el;
  });else output.textContent = formattedText;
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventHandlers_ArrayProcessorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventHandlers/ArrayProcessorHandler */ "./src/js/EventHandlers/ArrayProcessorHandler.js");
/* harmony import */ var _EventHandlers_DateFromatterHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandlers/DateFromatterHandler */ "./src/js/EventHandlers/DateFromatterHandler.js");
/* harmony import */ var _EventHandlers_TextFormatterHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandlers/TextFormatterHandler */ "./src/js/EventHandlers/TextFormatterHandler.js");
/* harmony import */ var _EventHandlers_ArraySorterHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventHandlers/ArraySorterHandler */ "./src/js/EventHandlers/ArraySorterHandler.js");
/* harmony import */ var _EventHandlers_BinaryConverterHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventHandlers/BinaryConverterHandler */ "./src/js/EventHandlers/BinaryConverterHandler.js");
/* harmony import */ var _EventHandlers_StringCalculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventHandlers/StringCalculator */ "./src/js/EventHandlers/StringCalculator.js");
/* harmony import */ var _EventHandlers_CacherHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventHandlers/CacherHandler */ "./src/js/EventHandlers/CacherHandler.js");







var APT_input = document.getElementById('APT__input');
var APT_output = document.getElementById('APT__output');
var DF_input = document.getElementById('DateFormatter__input');
var DF_output = document.getElementById('DateFormaatter__output');
var TF_wrap = document.getElementById('text-formatter__wrap');
var TF_length = document.getElementById('text-formatter__length');
var TF_rows = document.getElementById('text-formatter__rows');
var TF_input = document.getElementById('text-formatter__input');
var TF_output = document.getElementById('text-formatter__output');
var TF_args = [TF_length, TF_rows, TF_wrap];
var TF_selectors = '#text-formatter__input, #text-formatter__length, #text-formatter__rows, #text-formatter__wrap';
var AS_input = document.getElementById('sorter__input');
var AS_output = document.getElementById('sorter__output');
var BC_input = document.getElementById('converter__input');
var BC_output = document.getElementById('converter__output');
var BC_base = document.getElementById('converter__base');
var BC_new_base = document.getElementById('converter__new-base');
var BC_args = [BC_base, BC_new_base];
var Bc_selectors = '#converter__input, #converter__base, #converter__new-base';
var SC_input = document.getElementById('string-calc__input');
var SC_output = document.getElementById('string-calc__output');
var Cache_input = document.getElementById('cacher__input');
var Cache_output = document.getElementById('cacher__output');
var Cache_limit = document.getElementById('cacher__limit');
var Cache_clear = document.getElementById('cacher__clear'); //I'd like to test the perfomance of this approach

window.addEventListener('input', function (event) {
  switch (true) {
    case controller(event, '#APT__input', true):
      return Object(_EventHandlers_ArrayProcessorHandler__WEBPACK_IMPORTED_MODULE_0__["APT_input_action"])(APT_input, APT_output);

    case controller(event, '#DateFormatter__input', true):
      return Object(_EventHandlers_DateFromatterHandler__WEBPACK_IMPORTED_MODULE_1__["DateFormatter_input_action"])(DF_input, DF_output);

    case controller(event, TF_selectors, true):
      return Object(_EventHandlers_TextFormatterHandler__WEBPACK_IMPORTED_MODULE_2__["TextFormatter_input_action"])(TF_input, TF_args, TF_output);

    case controller(event, '#sorter__input', true):
      return Object(_EventHandlers_ArraySorterHandler__WEBPACK_IMPORTED_MODULE_3__["ArraySorter_input_action"])(AS_input, AS_output);

    case controller(event, Bc_selectors, true):
      return Object(_EventHandlers_BinaryConverterHandler__WEBPACK_IMPORTED_MODULE_4__["BinaryConverter_input_action"])(BC_input, BC_args, BC_output);

    case controller(event, '#string-calc__input', true):
      return Object(_EventHandlers_StringCalculator__WEBPACK_IMPORTED_MODULE_5__["StringCalculator_input_action"])(SC_input, SC_output);

    case controller(event, '#cacher__input', true):
      return Object(_EventHandlers_CacherHandler__WEBPACK_IMPORTED_MODULE_6__["Cacher_input_acion"])(Cache_input, Cache_limit, Cache_output);
  }

  ;
});
window.addEventListener('click', function (event) {
  switch (true) {
    case controller(event, '#cacher__clear', true):
      return Object(_EventHandlers_CacherHandler__WEBPACK_IMPORTED_MODULE_6__["Cacher_clear"])(Cache_output);
  }

  ;
});
window.addEventListener('load', function () {
  Object(_EventHandlers_ArrayProcessorHandler__WEBPACK_IMPORTED_MODULE_0__["APT_input_action"])(APT_input, APT_output);
  Object(_EventHandlers_DateFromatterHandler__WEBPACK_IMPORTED_MODULE_1__["DateFormatter_input_action"])(DF_input, DF_output);
  Object(_EventHandlers_TextFormatterHandler__WEBPACK_IMPORTED_MODULE_2__["TextFormatter_input_action"])(TF_input, TF_args, TF_output);
  Object(_EventHandlers_ArraySorterHandler__WEBPACK_IMPORTED_MODULE_3__["ArraySorter_input_action"])(AS_input, AS_output);
  Object(_EventHandlers_BinaryConverterHandler__WEBPACK_IMPORTED_MODULE_4__["BinaryConverter_input_action"])(BC_input, BC_args, BC_output);
  Object(_EventHandlers_StringCalculator__WEBPACK_IMPORTED_MODULE_5__["StringCalculator_input_action"])(SC_input, SC_output);
  Object(_EventHandlers_CacherHandler__WEBPACK_IMPORTED_MODULE_6__["Cacher_input_acion"])(Cache_input, Cache_limit, Cache_output);
});

function controller(event, selector) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var checker;
  if (strict) checker = Element.prototype.matches.bind(event.target);else checker = Element.prototype.closest.bind(event.target);
  console.log(event.target, selector, checker(selector));
  if (checker(selector)) return true;
}

/***/ }),

/***/ "./src/js/modules/ArrayProcessor.js":
/*!******************************************!*\
  !*** ./src/js/modules/ArrayProcessor.js ***!
  \******************************************/
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
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (max < arr[i]) max = arr[i];
    }

    return max;
  },
  getMin: function getMin(arr) {
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (min > arr[i]) min = arr[i];
    }

    return min;
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
        tmpSequence.push(arr[i]);
        curEl = arr[i];
        i++;
      }

      if (seqIncr.length < tmpSequence.length) {
        seqIncr = _toConsumableArray(tmpSequence);
      }

      tmpSequence = [curEl]; //I need to skip decreasing seq, though i'd like to save it

      while (curEl >= arr[i] && i < arr.length) {
        console.log('compare decr', curEl, arr[i]);
        tmpSequence.push(arr[i]);
        curEl = arr[i];
        i++;
      }

      if (seqDecr.length < tmpSequence.length) {
        seqDecr = _toConsumableArray(tmpSequence);
      }

      tmpSequence = [curEl];
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
      if (curEl <= arr[i]) {
        tmpSequence.push(arr[i]);
      } else {
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

/***/ "./src/js/modules/ArraySorter.js":
/*!***************************************!*\
  !*** ./src/js/modules/ArraySorter.js ***!
  \***************************************/
/*! exports provided: ArraySorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySorter", function() { return ArraySorter; });
var ArraySorter = {
  bubbleSort: function bubbleSort(arr, comparator) {
    var checker;
    if (comparator) checker = comparator;else checker = function checker(a, b) {
      return a - b;
    };

    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (checker(arr[i], arr[j]) > 0) {
          var _ref = [arr[j], arr[i]];
          arr[i] = _ref[0];
          arr[j] = _ref[1];
        }
      }
    }

    return arr;
  },
  insertionSort: function insertionSort(arr, comparator) {
    var checker;
    if (comparator) checker = comparator;else checker = function checker(a, b) {
      return a - b;
    };

    for (var i = 0; i < arr.length - 1; i++) {
      if (checker(arr[i], arr[i + 1]) <= 0) continue;
      var j = i + 1;

      do {
        var _ref2 = [arr[j - 1], arr[j]];
        arr[j] = _ref2[0];
        arr[j - 1] = _ref2[1];
        j--;
      } while (checker(arr[j], arr[j - 1]) < 0 && j > 0);
    }

    return arr;
  },
  selectionSort: function selectionSort(arr, comparator) {
    var checker;
    if (comparator) checker = comparator;else checker = function checker(a, b) {
      return a - b;
    };

    for (var i = 0; i < arr.length - 1; i++) {
      var minInd = i;

      for (var j = i + 1; j < arr.length; j++) {
        if (checker(arr[i], arr[j]) > 0) minInd = j;
      }

      var _ref3 = [arr[minInd], arr[i]];
      arr[i] = _ref3[0];
      arr[minInd] = _ref3[1];
    }

    return arr;
  },
  mergeSort: function mergeSort(arr) {
    var increasing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (arr.length <= 1) {
      return arr;
    }

    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(this.mergeSort(left), this.mergeSort(right));

    function merge(left, right) {
      var leftIndex = 0;
      var rightIndex = 0;
      var results = [];
      if (increasing) while (leftIndex < left.length || rightIndex < right.length) {
        if (leftIndex === left.length) {
          results.push(right[rightIndex]);
          rightIndex++;
        } else if (rightIndex === right.length || left[leftIndex] <= right[rightIndex]) {
          results.push(left[leftIndex]);
          leftIndex++;
        } else {
          results.push(right[rightIndex]);
          rightIndex++;
        }
      } else while (leftIndex < left.length || rightIndex < right.length) {
        if (leftIndex === left.length) {
          results.unshift(right[rightIndex]);
          rightIndex++;
        } else if (rightIndex === right.length || left[leftIndex] <= right[rightIndex]) {
          results.unshift(left[leftIndex]);
          leftIndex++;
        } else {
          results.unshift(right[rightIndex]);
          rightIndex++;
        }
      }
      return results;
    }
  }
};

/***/ }),

/***/ "./src/js/modules/BinaryConverter.js":
/*!*******************************************!*\
  !*** ./src/js/modules/BinaryConverter.js ***!
  \*******************************************/
/*! exports provided: numberConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberConvert", function() { return numberConvert; });
function numberConvert(arr, baseFrom, baseTo) {
  if (!arr) return arr;
  arr.forEach(function (el) {
    var decimalElem = parseInt(el, baseFrom);
    if (isNaN(decimalElem) && el) throw new TypeError('Wrong base: digit "' + el + '" has no equivalent in ' + baseFrom + ' number system');
  });
  arr = arr.join('');
  var decimal = parseInt(arr, baseFrom);
  var converted = decimal.toString(baseTo);
  return converted;
}

/***/ }),

/***/ "./src/js/modules/Cache.js":
/*!*********************************!*\
  !*** ./src/js/modules/Cache.js ***!
  \*********************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
var Cache = {
  register: [],
  find: function find(func) {
    try {
      var a = this.register.find(function (el) {
        return el.origin.name == func.name;
      });
      if (a) return a;
    } catch (err) {
      console.error(err);
    }
  },
  reg: function reg(func) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    var unitedStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var cache;
    var data = {};

    if (unitedStorage) {
      var registredFunc = this.find(func);

      if (!registredFunc) {
        cache = {};
        data.origin = func;
        data.cached = f;
        this.register.unshift(data);
      } else {
        cache = registredFunc.cached.getCache();
      }
    } else {
      cache = {};
      data.origin = func;
      data.cached = f;
      this.register.unshift(data);
    }

    function f() {
      var sortedArgs = Array.prototype.slice.call(arguments).sort();

      if (sortedArgs in cache) {
        console.log('got from cache');
        return cache[sortedArgs];
      }

      if (Object.keys(cache).length < limit) {
        cache[sortedArgs] = func.apply(void 0, arguments);
        return cache[sortedArgs];
      }

      return func.apply(this, arguments);
    }

    ;

    f.getCache = function () {
      return cache;
    };

    f.clearCache = function () {
      Object.keys(cache).forEach(function (el) {
        delete cache[el];
      });
    };

    return f;
  },
  getCache: function getCache(func) {
    var f = this.find(func);
    if (f) return f.getCache();
  },
  clearCache: function clearCache(func) {
    var f = this.find(func);

    if (f) {
      f.clearCache();
    }
  }
};

/***/ }),

/***/ "./src/js/modules/CachingCalculator.js":
/*!*********************************************!*\
  !*** ./src/js/modules/CachingCalculator.js ***!
  \*********************************************/
/*! exports provided: CachingCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingCalculator", function() { return CachingCalculator; });
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./src/js/modules/Cache.js");
/* harmony import */ var _StringCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StringCalculator */ "./src/js/modules/StringCalculator.js");


var CachingCalculator = {};
var calcProps = Object.getOwnPropertyNames(_StringCalculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = calcProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    CachingCalculator[i] = _Cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].reg(_StringCalculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"][i].bind(CachingCalculator));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),

/***/ "./src/js/modules/DateFormatter.js":
/*!*****************************************!*\
  !*** ./src/js/modules/DateFormatter.js ***!
  \*****************************************/
/*! exports provided: DateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return DateFormatter; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

  function DateFormatter(dateStr, format, toFormat) {
    var _getPrototypeOf3;

    var _this;

    _classCallCheck(this, DateFormatter);

    if (!dateStr) {
      var _super2 = _this = _possibleConstructorReturn(this, _getPrototypeOf(DateFormatter).call(this));

      initProps.apply(_assertThisInitialized(_this));
      return _possibleConstructorReturn(_this, _super2);
    }

    var matchedWord = dateStr.match(/[a-zA-Z]+/); //handle numbers, not valid args and Month names to Date

    if (!dateStr.length || matchedWord) {
      var _super3 = _this = _possibleConstructorReturn(this, _getPrototypeOf(DateFormatter).call(this, dateStr));

      initProps.apply(_assertThisInitialized(_this));
      return _possibleConstructorReturn(_this, _super3);
    } //default format


    if (!format) {
      var separator = dateStr.match(/[^a-zA-Z0-9]/) || '';
      format = "DD".concat(separator, "MM").concat(separator, "YYYY");
    } //parse format


    var matched = [format.match(/Y+/), format.match(/M+/), format.match(/D+/)];
    var values = matched.map(function (el) {
      if (el[0] == "MM") return getValue(el, dateStr) - 1;
      return getValue(el, dateStr);
    });
    dateStr = dateStr.toString();
    dateStr = dateStr.match(/\d+/g); //length 1 => no separator

    if (dateStr.length == 1) {
      var _getPrototypeOf2;

      var _super4 = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateFormatter)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(values))));

      initProps.apply(_assertThisInitialized(_this));
      return _possibleConstructorReturn(_this, _super4);
    }

    var _super = _this = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DateFormatter)).call.apply(_getPrototypeOf3, [this].concat(_toConsumableArray(dateStr))));

    initProps.apply(_assertThisInitialized(_this));
    return _possibleConstructorReturn(_this, _super); //helper-block

    function getValue(matched, dateStr) {
      var val = dateStr.toString().slice(matched.index, matched.index + matched[0].length);
      return val;
    }

    function getMonthFixer(func) {
      return function getMonth() {
        return func.apply(this) + 1;
      };
    }

    function initProps() {
      this.toFormat = toFormat;
      this.constructor.prototype.getMonth = getMonthFixer(this.getMonth); //Date indicates month from 0, but task requares from 1
    }

    return _possibleConstructorReturn(_this);
  }

  _createClass(DateFormatter, [{
    key: "getFullDate",
    value: function getFullDate() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
      var date = [this.getDate(), this.getMonth(), this.getFullYear()];
      return date.join(separator);
    }
  }, {
    key: "getFormattedDate",
    value: function getFormattedDate() {
      var day = this.getDate().toString().length == 1 ? '0' + this.getDate() : this.getDate();
      var year = this.getMonth().toString().length == 1 ? '0' + this.getMonth() : this.getMonth();
      if (this.toFormat) return this.toFormat.replace(/Y+/, this.getFullYear()).replace(/D+/, day).replace(/M+/, year);
      return "".concat(this.getDate(), " ").concat(this.getFormattedMonth(), " ").concat(this.getFullYear());
    }
  }, {
    key: "getFormattedDay",
    value: function getFormattedDay() {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[this.getDay()];
    }
  }, {
    key: "getFormattedMonth",
    value: function getFormattedMonth() {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[this.getMonth() - 1];
    }
  }, {
    key: "fromNow",
    value: function fromNow() {
      var curDate = new Date();
      var hasDate = this;
      var diff = new Date(curDate - hasDate);
      var diffYear = diff.getFullYear() - 1970;
      var diffProps = [DiffProp(diffYear, 'years'), DiffProp(diff.getMonth(), 'month'), DiffProp(diff.getDate(), 'days')];
      var diffStrs = diffProps.map(function (el) {
        return diffTostr(el.val, el.descr);
      });
      return diffYear > 0 ? diffStrs.join(' ') + ' ago' : diffStrs.join(' '); //helper-block

      function diffTostr(diffPar, discription) {
        if (diffPar > 0) return diffPar + ' ' + discription;
        if (diffPar < 0) return -diffPar + ' ' + discription;
        return '';
      }

      function DiffProp(val, descr) {
        return {
          val: val,
          descr: descr
        };
      }
    }
  }]);

  return DateFormatter;
}(_wrapNativeSuper(Date));

/***/ }),

/***/ "./src/js/modules/Helper.js":
/*!**********************************!*\
  !*** ./src/js/modules/Helper.js ***!
  \**********************************/
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

    return "".concat(func.name.replace("bound", ''), " result: ").concat(func.apply(void 0, params), "\n");
  }
};

/***/ }),

/***/ "./src/js/modules/StringCalculator.js":
/*!********************************************!*\
  !*** ./src/js/modules/StringCalculator.js ***!
  \********************************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return Calculator; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Calculator = {
  exec: function exec(str) {
    getMethod = getMethod.bind(this);
    var arr = str.match(/[\d\.\d]*[+*-/%()]?/g);
    arr = arr.filter(function (el) {
      return el.length;
    }); //filter empty matches

    var parenthesisLeftInd = arr.findIndex(function (el) {
      return el == '(';
    });

    if (parenthesisLeftInd >= 0) {
      var parenthesisRightInd = arr.findIndex(function (el) {
        return el == ')';
      });
      arr.splice(parenthesisRightInd, 1);
      var innerArr = arr.splice(parenthesisLeftInd + 1, parenthesisRightInd - parenthesisLeftInd - 1);
      replacePriorityOperations(innerArr);
      arr[parenthesisLeftInd] = exec(innerArr);
    }

    replacePriorityOperations(arr);
    return exec(arr);

    function getMethod(operator) {
      switch (operator) {
        case '+':
          return this.sum;

        case '-':
          return this.dif;

        case '*':
          return this.mult;

        case '/':
          return this.div;

        case '%':
          return this.divr;
      }
    }

    function exec(arr) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length;
      var result = arr[start];

      for (var i = start; i < end - 1; i += 2) {
        result = getMethod(arr[i + 1]).apply(this, [result, arr[i + 2]]);
      }

      return result;
    }

    function replacePriorityOperations(arr) {
      var priorOperatorInd = arr.findIndex(function (el) {
        return el == ('*' || false || false);
      });

      while (priorOperatorInd >= 0) {
        var tmp = exec(arr, priorOperatorInd - 1, priorOperatorInd + 1);
        arr.splice(priorOperatorInd, 2);
        arr[priorOperatorInd - 1] = tmp;
        priorOperatorInd = arr.findIndex(function (el) {
          return el == ('*' || false || false);
        });
      }
    }
  },
  sum: function sum(a, b) {
    return a - -b;
  },
  dif: function dif(a, b) {
    return a - b;
  },
  mult: function mult(a, b) {
    return a * b;
  },
  div: function div(a, b) {
    return a / b;
  },
  divr: function divr(a, b) {
    return a % b;
  }
};
var mathProps = Object.getOwnPropertyNames(Math);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = mathProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    Calculator[i] = castFloatDecorator(Math[i]);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function castFloatDecorator(func) {
  return function () {
    var args = Array.prototype.slice.call(arguments).map(function (el) {
      return parseFloat(el);
    });
    return func.apply(void 0, _toConsumableArray(args));
  };
}

/***/ }),

/***/ "./src/js/modules/TextFormatter.js":
/*!*****************************************!*\
  !*** ./src/js/modules/TextFormatter.js ***!
  \*****************************************/
/*! exports provided: textFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textFormatter", function() { return textFormatter; });
/** 
 * @param {number = 1, 2, 3, 4 | string = "symbol", "word", "sentence", "nowrap" , "none" or any other string} whiteSpace  
 */
function textFormatter(string, maxLength, maxRows, whiteSpace) {
  if (!maxLength && (whiteSpace != 3 || whiteSpace != 'sentence') || whiteSpace == 4 || whiteSpace == 'nowrap') return string;
  if (!maxRows) maxRows = Infinity;
  var rows = [];
  var shift = 0; //ignore max length coz it wouild be wrapped by symbol or word not sentence

  if (whiteSpace == 3 || whiteSpace == 'sentence') return string.match(/[^\.]+[\.]?[\ ]?/g);

  for (var i = 0; i < maxRows; i++) {
    var tmp = string.slice(i * (maxLength - 1) + shift, (i + 1) * (maxLength - 1) + shift);
    var rowEndIndex = (i + 1) * (maxLength - 1) + shift;

    if (rowEndIndex >= string.length) {
      rows.push(tmp);
      break;
    }

    var lastLetter = string[rowEndIndex];
    var preLastLetter = string[rowEndIndex - 1];

    if (lastLetter.match(/[a-zA-Z]/) && preLastLetter.match(/[a-zA-Z]/)) {
      if (whiteSpace == 'symbol' || whiteSpace == 1) tmp += '-';

      if (whiteSpace == 'word' || whiteSpace == 2) {
        var j = 1; //find space from the row end

        for (; lastLetter != ' ' && j < tmp.length; j++) {
          lastLetter = tmp[tmp.length - j];
        } //cutting up to space character


        j -= 2;
        tmp = tmp.slice(0, -j); //shift index not to loose data

        shift -= j;
      }
    } else {
      if (preLastLetter.match(/\s/) && lastLetter.match(/[a-zA-Z]/) || preLastLetter.match(/[a-zA-Z]/) && lastLetter.match(/\s/)) {
        tmp += '';
      } else {
        tmp += lastLetter;
        shift++;
      }
    }

    rows.push(tmp);
  }

  return rows;
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map