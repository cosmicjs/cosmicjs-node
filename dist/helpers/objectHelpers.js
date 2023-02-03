"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var promiser = require('./promiser');

/**
 * Takes in an endpoint and adds the params to the end of the endpoint.
 * @param endpoint - the endpoint to add the params to.
 * @param params - the params to add to the endpoint.
 * @returns the endpoint with the params added.
 */
var addParamsToObjectsEndpoint = function addParamsToObjectsEndpoint(endpoint, params) {
  var ep = endpoint;
  /**
   * > Checks if the parameter is present
   * > Add the parameter to the end of the URL if it is present.
   * @param params - The parameters object.
   * @returns None
   */
  if (params) {
    if (params.limit) {
      ep += "&limit=".concat(params.limit);
    }
    if (params.skip) {
      ep += "&skip=".concat(params.skip);
    }
    if (params.status) {
      ep += "&status=".concat(params.status);
    }
    if (params.after) {
      ep += "&after=".concat(params.after);
    }
    if (params.sort) {
      ep += "&sort=".concat(params.sort);
    }
    if (params.show_metafields) {
      ep += "&show_metafields=".concat(params.show_metafields);
    }
    if (params.pretty) {
      ep += "&pretty=".concat(params.pretty);
    }
    if (params.props) {
      var propStr = params.props;
      if (Array.isArray(propStr)) {
        propStr = propStr.filter(function (prop) {
          return typeof prop === 'string';
        }).map(function (prop) {
          return prop.trim();
        }).filter(function (prop) {
          return !!prop;
        }).toString();
      }
      ep += "&props=".concat(propStr);
    }
    if (params.query) {
      ep += "&query=".concat(encodeURI(JSON.stringify(params.query)));
    }
    if (typeof params.use_cache !== 'undefined') {
      ep += "&use_cache=".concat(params.use_cache);
    }
    if (params.depth && typeof params.depth === 'number') {
      ep += "&depth=".concat(params.depth);
    }
  }
  return ep;
};

/**
 * Finds the chain of properties that lead to the given property.
 * @param endpoint - the endpoint to query for the chain of properties.
 * @returns A promise that resolves to the chain of properties that lead to the given property.
 */
var FindChaining = /*#__PURE__*/function () {
  /**
   * Constructor for the FindChaining class.
   * @param endpoint - The endpoint to send the request to.
   */
  function FindChaining(endpoint) {
    _classCallCheck(this, FindChaining);
    this.endpoint = endpoint;
  }

  /** Properties for the FindChaining class */
  _createClass(FindChaining, [{
    key: "props",
    value: function props(_props) {
      var propStr = _props;
      if (Array.isArray(propStr)) {
        propStr = propStr.filter(function (prop) {
          return typeof prop === 'string';
        }).map(function (prop) {
          return prop.trim();
        }).filter(function (prop) {
          return !!prop;
        }).toString();
      }
      this.endpoint += "&props=".concat(propStr);
      return this;
    }
  }, {
    key: "depth",
    value: function depth(_depth) {
      this.endpoint += "&depth=".concat(_depth);
      return this;
    }
  }, {
    key: "sort",
    value: function sort(_sort) {
      this.endpoint += "&sort=".concat(_sort);
      return this;
    }
  }, {
    key: "limit",
    value: function limit(_limit) {
      this.endpoint += "&limit=".concat(_limit);
      return this;
    }
  }, {
    key: "skip",
    value: function skip(_skip) {
      this.endpoint += "&skip=".concat(_skip);
      return this;
    }
  }, {
    key: "status",
    value: function status(_status) {
      this.endpoint += "&status=".concat(_status);
      return this;
    }
  }, {
    key: "after",
    value: function after(_after) {
      this.endpoint += "&after=".concat(_after);
      return this;
    }
  }, {
    key: "showMetafields",
    value: function showMetafields(_showMetafields) {
      this.endpoint += "&show_metafields=".concat(_showMetafields);
      return this;
    }
  }, {
    key: "useCache",
    value: function useCache(_useCache) {
      this.endpoint += "&use_cache=".concat(_useCache);
      return this;
    }

    /**
     * A wrapper around the `promiser` function that returns a promise that resolves with the result of the request.
     * @param endpoint - The endpoint to request.
     * @returns A promise that resolves with the result of the request.
     */
  }, {
    key: "then",
    value: function () {
      var _then = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              promiser(this.endpoint).then(function (res) {
                return resolve(res, null);
              })["catch"](function (err) {
                if (typeof reject === 'function') {
                  reject(err);
                } else {
                  resolve(null, err);
                }
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function then(_x, _x2) {
        return _then.apply(this, arguments);
      }
      return then;
    }()
  }]);
  return FindChaining;
}();
module.exports = {
  addParamsToObjectsEndpoint: addParamsToObjectsEndpoint,
  FindChaining: FindChaining
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm9taXNlciIsInJlcXVpcmUiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsImVuZHBvaW50IiwicGFyYW1zIiwiZXAiLCJsaW1pdCIsInNraXAiLCJzdGF0dXMiLCJhZnRlciIsInNvcnQiLCJzaG93X21ldGFmaWVsZHMiLCJwcmV0dHkiLCJwcm9wcyIsInByb3BTdHIiLCJBcnJheSIsImlzQXJyYXkiLCJmaWx0ZXIiLCJwcm9wIiwibWFwIiwidHJpbSIsInRvU3RyaW5nIiwicXVlcnkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlX2NhY2hlIiwiZGVwdGgiLCJGaW5kQ2hhaW5pbmciLCJzaG93TWV0YWZpZWxkcyIsInVzZUNhY2hlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9taXNlciA9IHJlcXVpcmUoJy4vcHJvbWlzZXInKTtcblxuLyoqXG4gKiBUYWtlcyBpbiBhbiBlbmRwb2ludCBhbmQgYWRkcyB0aGUgcGFyYW1zIHRvIHRoZSBlbmQgb2YgdGhlIGVuZHBvaW50LlxuICogQHBhcmFtIGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIGFkZCB0aGUgcGFyYW1zIHRvLlxuICogQHBhcmFtIHBhcmFtcyAtIHRoZSBwYXJhbXMgdG8gYWRkIHRvIHRoZSBlbmRwb2ludC5cbiAqIEByZXR1cm5zIHRoZSBlbmRwb2ludCB3aXRoIHRoZSBwYXJhbXMgYWRkZWQuXG4gKi9cbmNvbnN0IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50ID0gKGVuZHBvaW50LCBwYXJhbXMpID0+IHtcbiAgbGV0IGVwID0gZW5kcG9pbnQ7XG4gIC8qKlxuICAgKiA+IENoZWNrcyBpZiB0aGUgcGFyYW1ldGVyIGlzIHByZXNlbnRcbiAgICogPiBBZGQgdGhlIHBhcmFtZXRlciB0byB0aGUgZW5kIG9mIHRoZSBVUkwgaWYgaXQgaXMgcHJlc2VudC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIG9iamVjdC5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgaWYgKHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMubGltaXQpIHtcbiAgICAgIGVwICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YDtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5za2lwKSB7XG4gICAgICBlcCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnN0YXR1cykge1xuICAgICAgZXAgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuYWZ0ZXIpIHtcbiAgICAgIGVwICs9IGAmYWZ0ZXI9JHtwYXJhbXMuYWZ0ZXJ9YDtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zb3J0KSB7XG4gICAgICBlcCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnNob3dfbWV0YWZpZWxkcykge1xuICAgICAgZXAgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtwYXJhbXMuc2hvd19tZXRhZmllbGRzfWA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMucHJldHR5KSB7XG4gICAgICBlcCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YDtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5wcm9wcykge1xuICAgICAgbGV0IHByb3BTdHIgPSBwYXJhbXMucHJvcHM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wU3RyKSkge1xuICAgICAgICBwcm9wU3RyID0gcHJvcFN0clxuICAgICAgICAgIC5maWx0ZXIoKHByb3ApID0+IHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJylcbiAgICAgICAgICAubWFwKChwcm9wKSA9PiBwcm9wLnRyaW0oKSlcbiAgICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiAhIXByb3ApXG4gICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICBlcCArPSBgJnByb3BzPSR7cHJvcFN0cn1gO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlcCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWA7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFyYW1zLnVzZV9jYWNoZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVwICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmRlcHRoICYmIHR5cGVvZiBwYXJhbXMuZGVwdGggPT09ICdudW1iZXInKSB7XG4gICAgICBlcCArPSBgJmRlcHRoPSR7cGFyYW1zLmRlcHRofWA7XG4gICAgfVxuICB9XG4gIHJldHVybiBlcDtcbn07XG5cbi8qKlxuICogRmluZHMgdGhlIGNoYWluIG9mIHByb3BlcnRpZXMgdGhhdCBsZWFkIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBxdWVyeSBmb3IgdGhlIGNoYWluIG9mIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY2hhaW4gb2YgcHJvcGVydGllcyB0aGF0IGxlYWQgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxuICovXG5jbGFzcyBGaW5kQ2hhaW5pbmcge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoZSBGaW5kQ2hhaW5pbmcgY2xhc3MuXG4gICAqIEBwYXJhbSBlbmRwb2ludCAtIFRoZSBlbmRwb2ludCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZW5kcG9pbnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gIH1cblxuICAvKiogUHJvcGVydGllcyBmb3IgdGhlIEZpbmRDaGFpbmluZyBjbGFzcyAqL1xuICBwcm9wcyhwcm9wcykge1xuICAgIGxldCBwcm9wU3RyID0gcHJvcHM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFN0cikpIHtcbiAgICAgIHByb3BTdHIgPSBwcm9wU3RyXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+IHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJylcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gcHJvcC50cmltKCkpXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+ICEhcHJvcClcbiAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BTdHJ9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlcHRoKGRlcHRoKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmRlcHRoPSR7ZGVwdGh9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGltaXQobGltaXQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmbGltaXQ9JHtsaW1pdH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2tpcChza2lwKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNraXA9JHtza2lwfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnN0YXR1cz0ke3N0YXR1c31gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWZ0ZXIoYWZ0ZXIpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmYWZ0ZXI9JHthZnRlcn1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2hvd01ldGFmaWVsZHMoc2hvd01ldGFmaWVsZHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7c2hvd01ldGFmaWVsZHN9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVzZUNhY2hlKHVzZUNhY2hlKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3VzZUNhY2hlfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQSB3cmFwcGVyIGFyb3VuZCB0aGUgYHByb21pc2VyYCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LlxuICAgKiBAcGFyYW0gZW5kcG9pbnQgLSBUaGUgZW5kcG9pbnQgdG8gcmVxdWVzdC5cbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LlxuICAgKi9cbiAgYXN5bmMgdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlcih0aGlzLmVuZHBvaW50KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMsIG51bGwpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKG51bGwsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCwgRmluZENoYWluaW5nIH07XG4iXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNB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