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
  if (params && params.limit) {
    ep += "&limit=".concat(params.limit);
  }
  if (params && params.skip) {
    ep += "&skip=".concat(params.skip);
  }
  if (params && params.status) {
    ep += "&status=".concat(params.status);
  }
  if (params && params.after) {
    ep += "&after=".concat(params.after);
  }
  if (params && params.sort) {
    ep += "&sort=".concat(params.sort);
  }
  if (params && params.show_metafields) {
    ep += "&show_metafields=".concat(params.show_metafields);
  }
  if (params && params.pretty) {
    ep += "&pretty=".concat(params.pretty);
  }
  if (params && params.props) {
    ep += "&props=".concat(params.props);
  }
  if (params && params.query) {
    ep += "&query=".concat(encodeURI(JSON.stringify(params.query)));
  }
  if (params && typeof params.use_cache !== 'undefined') {
    ep += "&use_cache=".concat(params.use_cache);
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
      this.endpoint += "&props=".concat(_props);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm9taXNlciIsInJlcXVpcmUiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsImVuZHBvaW50IiwicGFyYW1zIiwiZXAiLCJsaW1pdCIsInNraXAiLCJzdGF0dXMiLCJhZnRlciIsInNvcnQiLCJzaG93X21ldGFmaWVsZHMiLCJwcmV0dHkiLCJwcm9wcyIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZV9jYWNoZSIsIkZpbmRDaGFpbmluZyIsImRlcHRoIiwic2hvd01ldGFmaWVsZHMiLCJ1c2VDYWNoZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwicmVzIiwiZXJyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvbWlzZXIgPSByZXF1aXJlKCcuL3Byb21pc2VyJyk7XG5cbi8qKlxuICogVGFrZXMgaW4gYW4gZW5kcG9pbnQgYW5kIGFkZHMgdGhlIHBhcmFtcyB0byB0aGUgZW5kIG9mIHRoZSBlbmRwb2ludC5cbiAqIEBwYXJhbSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBhZGQgdGhlIHBhcmFtcyB0by5cbiAqIEBwYXJhbSBwYXJhbXMgLSB0aGUgcGFyYW1zIHRvIGFkZCB0byB0aGUgZW5kcG9pbnQuXG4gKiBAcmV0dXJucyB0aGUgZW5kcG9pbnQgd2l0aCB0aGUgcGFyYW1zIGFkZGVkLlxuICovXG5jb25zdCBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCA9IChlbmRwb2ludCwgcGFyYW1zKSA9PiB7XG4gIGxldCBlcCA9IGVuZHBvaW50O1xuICAvKipcbiAgICogPiBDaGVja3MgaWYgdGhlIHBhcmFtZXRlciBpcyBwcmVzZW50XG4gICAqID4gQWRkIHRoZSBwYXJhbWV0ZXIgdG8gdGhlIGVuZCBvZiB0aGUgVVJMIGlmIGl0IGlzIHByZXNlbnQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBvYmplY3QuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgZXAgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICBlcCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgIGVwICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLmFmdGVyKSB7XG4gICAgZXAgKz0gYCZhZnRlcj0ke3BhcmFtcy5hZnRlcn1gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICBlcCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNob3dfbWV0YWZpZWxkcykge1xuICAgIGVwICs9IGAmc2hvd19tZXRhZmllbGRzPSR7cGFyYW1zLnNob3dfbWV0YWZpZWxkc31gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXR0eSkge1xuICAgIGVwICs9IGAmcHJldHR5PSR7cGFyYW1zLnByZXR0eX1gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgZXAgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgZXAgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gO1xuICB9XG4gIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXAgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWA7XG4gIH1cbiAgcmV0dXJuIGVwO1xufTtcblxuLyoqXG4gKiBGaW5kcyB0aGUgY2hhaW4gb2YgcHJvcGVydGllcyB0aGF0IGxlYWQgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxuICogQHBhcmFtIGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIHF1ZXJ5IGZvciB0aGUgY2hhaW4gb2YgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBjaGFpbiBvZiBwcm9wZXJ0aWVzIHRoYXQgbGVhZCB0byB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKi9cbmNsYXNzIEZpbmRDaGFpbmluZyB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgdGhlIEZpbmRDaGFpbmluZyBjbGFzcy5cbiAgICogQHBhcmFtIGVuZHBvaW50IC0gVGhlIGVuZHBvaW50IHRvIHNlbmQgdGhlIHJlcXVlc3QgdG8uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbmRwb2ludCkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludDtcbiAgfVxuXG4gIC8qKiBQcm9wZXJ0aWVzIGZvciB0aGUgRmluZENoYWluaW5nIGNsYXNzICovXG4gIHByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnByb3BzPSR7cHJvcHN9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlcHRoKGRlcHRoKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmRlcHRoPSR7ZGVwdGh9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGltaXQobGltaXQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmbGltaXQ9JHtsaW1pdH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2tpcChza2lwKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNraXA9JHtza2lwfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnN0YXR1cz0ke3N0YXR1c31gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWZ0ZXIoYWZ0ZXIpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmYWZ0ZXI9JHthZnRlcn1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2hvd01ldGFmaWVsZHMoc2hvd01ldGFmaWVsZHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7c2hvd01ldGFmaWVsZHN9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVzZUNhY2hlKHVzZUNhY2hlKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3VzZUNhY2hlfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQSB3cmFwcGVyIGFyb3VuZCB0aGUgYHByb21pc2VyYCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LlxuICAgKiBAcGFyYW0gZW5kcG9pbnQgLSBUaGUgZW5kcG9pbnQgdG8gcmVxdWVzdC5cbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LlxuICAgKi9cbiAgYXN5bmMgdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlcih0aGlzLmVuZHBvaW50KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMsIG51bGwpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKG51bGwsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCwgRmluZENoYWluaW5nIH07XG4iXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTBCLENBQUlDLFFBQVEsRUFBRUMsTUFBTSxFQUFLO0VBQ3ZELElBQUlDLEVBQUUsR0FBR0YsUUFBUTtFQUNqQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFJQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFO0lBQzFCRCxFQUFFLHFCQUFjRCxNQUFNLENBQUNFLEtBQUssQ0FBRTtFQUNoQztFQUNBLElBQUlGLE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxJQUFJLEVBQUU7SUFDekJGLEVBQUUsb0JBQWFELE1BQU0sQ0FBQ0csSUFBSSxDQUFFO0VBQzlCO0VBQ0EsSUFBSUgsTUFBTSxJQUFJQSxNQUFNLENBQUNJLE1BQU0sRUFBRTtJQUMzQkgsRUFBRSxzQkFBZUQsTUFBTSxDQUFDSSxNQUFNLENBQUU7RUFDbEM7RUFDQSxJQUFJSixNQUFNLElBQUlBLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFO0lBQzFCSixFQUFFLHFCQUFjRCxNQUFNLENBQUNLLEtBQUssQ0FBRTtFQUNoQztFQUNBLElBQUlMLE1BQU0sSUFBSUEsTUFBTSxDQUFDTSxJQUFJLEVBQUU7SUFDekJMLEVBQUUsb0JBQWFELE1BQU0sQ0FBQ00sSUFBSSxDQUFFO0VBQzlCO0VBQ0EsSUFBSU4sTUFBTSxJQUFJQSxNQUFNLENBQUNPLGVBQWUsRUFBRTtJQUNwQ04sRUFBRSwrQkFBd0JELE1BQU0sQ0FBQ08sZUFBZSxDQUFF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