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

/***/ "./src/js/Cache.js":
/*!*************************!*\
  !*** ./src/js/Cache.js ***!
  \*************************/
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
    var counter = 0;

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

      if (counter <= limit) {
        cache[sortedArgs] = func.apply(void 0, arguments);
        counter++;
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

/***/ "./src/js/CachingCalculator.js":
/*!*************************************!*\
  !*** ./src/js/CachingCalculator.js ***!
  \*************************************/
/*! exports provided: CachingCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingCalculator", function() { return CachingCalculator; });
/* harmony import */ var _js_Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/Cache */ "./src/js/Cache.js");
/* harmony import */ var _js_StringCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/StringCalculator */ "./src/js/StringCalculator.js");


var CachingCalculator = {};
var calcProps = Object.getOwnPropertyNames(_js_StringCalculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = calcProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    CachingCalculator[i] = _js_Cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].reg(_js_StringCalculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"][i].bind(CachingCalculator));
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

  function DateFormatter(dateStr, regStr, convertRegStr) {
    var _this;

    _classCallCheck(this, DateFormatter);

    //case for numbers and not valid args
    if (!dateStr.length) return _possibleConstructorReturn(_this, _this = _possibleConstructorReturn(this, _getPrototypeOf(DateFormatter).call(this, dateStr)));

    if (!regStr) {
      var separator = dateStr.match(/[^a-zA-Z0-9]/) || '-'; //console.log(separator);

      regStr = "MM".concat(separator, "DD").concat(separator, "YYYY");
    } //console.log('regex',regStr);
    //year month day - ordered params for new Date()


    var matched = [regStr.match(/Y+/), regStr.match(/M+/), regStr.match(/D+/)];
    var values = matched.map(function (el) {
      if (el[0] == "MM") return getValue(el, dateStr) - 1;
      return getValue(el, dateStr);
    }); //console.log(values);
    //console.log(matched);

    if (convertRegStr) {
      convertRegStr = formatDate(matched, convertRegStr, dateStr);
    }

    dateStr = dateStr.toString();
    var matchedWord = dateStr.match(/[a-zA-Z]+/); //don't realy want to deal with month names

    if (matchedWord) {
      console.log('word detected', matchedWord);
      return _possibleConstructorReturn(_this, _this = _possibleConstructorReturn(this, _getPrototypeOf(DateFormatter).call(this, dateStr)));
    }

    dateStr = dateStr.match(/\d+/g); //console.log(dateStr)
    //length 1 => no separator

    if (dateStr.length == 1) {
      var _console, _getPrototypeOf2;

      console.log('reg work');

      (_console = console).log.apply(_console, ['parsed vals'].concat(_toConsumableArray(values)));

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateFormatter)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(values))));
      _this.formattedDate = convertRegStr;
    } else {
      if (dateStr.length > 3) {
        var _getPrototypeOf3;

        _this = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DateFormatter)).call.apply(_getPrototypeOf3, [this].concat(_toConsumableArray(dateStr))));
      } else {
        var _getPrototypeOf4;

        _this = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(DateFormatter)).call.apply(_getPrototypeOf4, [this].concat(_toConsumableArray(values))));
        _this.formattedDate = convertRegStr;
      }
    }

    function getValue(matched, dateStr) {
      var val = dateStr.toString().slice(matched.index, matched.index + matched[0].length);
      return val;
    }

    function formatDate(matched, convertRegStr, dateStr) {
      var OrderedMatch = _toConsumableArray(matched).sort(function (a, b) {
        return a.index - b.index;
      });

      for (var _i = 0, _arr = _toConsumableArray(OrderedMatch); _i < _arr.length; _i++) {
        var i = _arr[_i];
        var dateParam = getValue(i, dateStr);
        convertRegStr = convertRegStr.replace(i[0], dateParam);
      }

      return convertRegStr;
    }

    return _possibleConstructorReturn(_this);
  }

  _createClass(DateFormatter, [{
    key: "getFormattedMonth",
    value: function getFormattedMonth() {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[this.getMonth()];
    }
  }, {
    key: "getStringDate",
    value: function getStringDate() {
      if (this.formattedDate) return this.formattedDate;
      return "".concat(this.getFullYear(), "-").concat(this.getMonth(), "-").concat(this.getDate());
    }
  }, {
    key: "getFormattedDate",
    value: function getFormattedDate() {
      return "".concat(this.getDate(), " ").concat(this.getFormattedMonth(), " ").concat(this.getFullYear());
    }
  }, {
    key: "getFormattedDay",
    value: function getFormattedDay() {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[this.getUTCDay()];
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

/***/ "./src/js/StringCalculator.js":
/*!************************************!*\
  !*** ./src/js/StringCalculator.js ***!
  \************************************/
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
  exec: function exec() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '111.2222 + 2222.3333 * 3';
    //just test example
    getMethod = getMethod.bind(this);
    var arr = str.match(/([\d.]+)?[+*-/%]?/g);
    arr = arr.filter(function (el) {
      return el.length;
    });
    var result = arr[0];

    for (var i = 1; i < arr.length - 1; i += 2) {
      result = getMethod(arr[i])(result, arr[i + 1]);
    }

    return result;

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
/* harmony import */ var _js_Cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/Cache */ "./src/js/Cache.js");
/* harmony import */ var _js_CachingCalculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/CachingCalculator */ "./src/js/CachingCalculator.js");
/* harmony import */ var _js_StringCalculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/StringCalculator */ "./src/js/StringCalculator.js");






var input = document.getElementById('APT__input');
var output = document.getElementById('APT__output');
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