"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('regenerator-runtime/runtime');
var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require = require('../helpers/requestHandler'),
  requestHandler = _require.requestHandler;
var _require2 = require('../helpers/objectHelpers'),
  addParamsToObjectsEndpoint = _require2.addParamsToObjectsEndpoint,
  FindChaining = _require2.FindChaining;
var headers;

/**
 * A group of chained functions that you can use on Objects
 * @param endpoint - The endpoint to send the request to.
 * @returns None
 */
var objectsChainMethods = function objectsChainMethods(bucketConfig) {
  return {
    /**
     * Find objects in the bucket.
     * @param query - The query to use for the find.  This can be a string, an object, or an array of objects.
     * @returns A FindChaining object that can be used to chain find calls.
     */
    find: function find(query) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects?read_key=").concat(bucketConfig.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return new FindChaining(endpoint);
    },
    /**
     * Finds a single object in the bucket.
     * @param query - The query to find the object.
     * @returns A FindChaining object that can be chained with other functions.
     */
    findOne: function findOne(query) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(query.id, "?read_key=").concat(bucketConfig.read_key);
      return new FindChaining(endpoint);
    },
    /**
     * Inserts one object into the bucket.
     * @param params - The object to insert.
     * @returns None
     */
    insertOne: function insertOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var endpoint;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects");
              if (bucketConfig.write_key) {
                headers = {
                  Authorization: "Bearer ".concat(bucketConfig.write_key)
                };
              }
              return _context.abrupt("return", requestHandler(HTTP_METHODS.POST, endpoint, params, headers));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * Update a single object in the bucket.
     * @param params - The parameters to update the object with.
     * @param set - The set of updates to apply to the object.
     * @returns None
     */
    updateOne: function updateOne(params, set) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var endpoint, updates;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id);
              updates = set.$set;
              if (bucketConfig.write_key) {
                headers = {
                  Authorization: "Bearer ".concat(bucketConfig.write_key)
                };
              }
              return _context2.abrupt("return", requestHandler(HTTP_METHODS.PATCH, endpoint, updates, headers));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    /**
     * Delete an object from the bucket.
     * @param params - The parameters to pass to the API.
     * @returns A promise that resolves to the response from the API.
     */
    deleteOne: function deleteOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var endpoint;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');
              if (bucketConfig.write_key) {
                headers = {
                  Authorization: "Bearer ".concat(bucketConfig.write_key)
                };
              }
              return _context3.abrupt("return", requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };
};

/**
 * Object methods for the bucket.
 * @param bucketConfig - The bucket configuration object.
 * @returns An object with methods for the bucket.
 */
var objectMethods = function objectMethods(bucketConfig) {
  return {
    objects: objectsChainMethods(bucketConfig),
    /**
     * Get objects from the bucket.
     * @param params - The parameters to add to the endpoint.
     * @returns The response from the API.
     */
    getObjects: function getObjects(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects?read_key=").concat(bucketConfig.read_key);
      endpoint = addParamsToObjectsEndpoint(endpoint, params);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Gets an object from the bucket.
     * @param params - The parameters to pass to the API.
     * @returns The object from the bucket.
     */
    getObject: function getObject(params) {
      if (!params) {
        throw new Error('Must supply params object with object id');
      }
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id, "?read_key=").concat(bucketConfig.read_key);
      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }
      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }
      if (params && typeof params.use_cache !== 'undefined') {
        endpoint += "&use_cache=".concat(params.use_cache);
      }
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Get the revisions of an object.
     * @param params - The parameters to pass to the endpoint.
     * @returns The response from the endpoint.
     */
    getObjectRevisions: function getObjectRevisions(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id, "/revisions?read_key=").concat(bucketConfig.read_key);
      endpoint = addParamsToObjectsEndpoint(endpoint, params);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Gets the objects for a merge request.
     * @param params - The parameters to pass to the endpoint.
     * @returns The objects for the merge request.
     */
    getMergeRequestObjects: function getMergeRequestObjects(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/merge-requests/").concat(params.id, "/objects?read_key=").concat(bucketConfig.read_key);
      endpoint = addParamsToObjectsEndpoint(endpoint, params);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /**
     * Add an object to the bucket.
     * @param params - The object to add.
     * @returns None
     */
    addObject: function addObject(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects");
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
    },
    /**
     * Adds an object revision to the bucket.
     * @param params - The object revision parameters.
     * @returns The response from the API.
     */
    addObjectRevision: function addObjectRevision(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id, "/revisions");
      delete params.id;
      delete params.type;
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
    },
    /**
     * Edit an object in the bucket.
     * @param params - The parameters to edit the object with.
     * @returns The response from the API.
     */
    editObject: function editObject(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id);
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      // Remove id
      delete params.id;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
    },
    /**
     * Gets the metafields for the given object.
     * @param params - The object containing the id of the object to get the metafields for.
     * @returns A promise that resolves to the metafields for the given object.
     */
    getObjectMetafields: function getObjectMetafields(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id, "/metafields?read_key=").concat(bucketConfig.read_key);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /// DEPRECATED
    editObjectMetafields: function editObjectMetafields(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id, "/metafields");
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      // Remove id
      delete params.id;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
    },
    /**
     * Edit an object's metafield.
     * @param params - The parameters to edit the object's metafield.
     * @returns The response from the API.
     */
    editObjectMetafield: function editObjectMetafield(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id, "/metafields/").concat(params.key);
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      // Remove id
      delete params.id;
      delete params.key;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
    },
    /**
     * Delete an object from the bucket.
     * @param params - The object to delete.
     * @returns None
     */
    deleteObject: function deleteObject(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/objects/").concat(params.id);
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};
module.exports = objectMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiSFRUUF9NRVRIT0RTIiwicmVxdWVzdEhhbmRsZXIiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsIkZpbmRDaGFpbmluZyIsImhlYWRlcnMiLCJvYmplY3RzQ2hhaW5NZXRob2RzIiwiYnVja2V0Q29uZmlnIiwiZmluZCIsInF1ZXJ5IiwiZW5kcG9pbnQiLCJ1cmkiLCJzbHVnIiwicmVhZF9rZXkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmluZE9uZSIsImlkIiwiaW5zZXJ0T25lIiwicGFyYW1zIiwid3JpdGVfa2V5IiwiQXV0aG9yaXphdGlvbiIsIlBPU1QiLCJ1cGRhdGVPbmUiLCJzZXQiLCJ1cGRhdGVzIiwiJHNldCIsIlBBVENIIiwiZGVsZXRlT25lIiwidHJpZ2dlcl93ZWJob29rIiwiREVMRVRFIiwib2JqZWN0TWV0aG9kcyIsIm9iamVjdHMiLCJnZXRPYmplY3RzIiwiR0VUIiwiZ2V0T2JqZWN0IiwiRXJyb3IiLCJzdGF0dXMiLCJwcm9wcyIsInVzZV9jYWNoZSIsImdldE9iamVjdFJldmlzaW9ucyIsImdldE1lcmdlUmVxdWVzdE9iamVjdHMiLCJhZGRPYmplY3QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiZ2V0T2JqZWN0TWV0YWZpZWxkcyIsImVkaXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZCIsImtleSIsImRlbGV0ZU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZScpO1xuXG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvaHR0cE1ldGhvZHMuY29uc3RhbnRzJyk7XG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RIYW5kbGVyJyk7XG5jb25zdCB7XG4gIGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50LFxuICBGaW5kQ2hhaW5pbmcsXG59ID0gcmVxdWlyZSgnLi4vaGVscGVycy9vYmplY3RIZWxwZXJzJyk7XG5cbmxldCBoZWFkZXJzO1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgY2hhaW5lZCBmdW5jdGlvbnMgdGhhdCB5b3UgY2FuIHVzZSBvbiBPYmplY3RzXG4gKiBAcGFyYW0gZW5kcG9pbnQgLSBUaGUgZW5kcG9pbnQgdG8gc2VuZCB0aGUgcmVxdWVzdCB0by5cbiAqIEByZXR1cm5zIE5vbmVcbiAqL1xuY29uc3Qgb2JqZWN0c0NoYWluTWV0aG9kcyA9IChidWNrZXRDb25maWcpID0+ICh7XG4gIC8qKlxuICAgKiBGaW5kIG9iamVjdHMgaW4gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHF1ZXJ5IC0gVGhlIHF1ZXJ5IHRvIHVzZSBmb3IgdGhlIGZpbmQuICBUaGlzIGNhbiBiZSBhIHN0cmluZywgYW4gb2JqZWN0LCBvciBhbiBhcnJheSBvZiBvYmplY3RzLlxuICAgKiBAcmV0dXJucyBBIEZpbmRDaGFpbmluZyBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGFpbiBmaW5kIGNhbGxzLlxuICAgKi9cbiAgZmluZChxdWVyeSkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke1xuICAgICAgYnVja2V0Q29uZmlnLnNsdWdcbiAgICB9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRDb25maWcucmVhZF9rZXl9JHtcbiAgICAgIHF1ZXJ5ID8gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShxdWVyeSkpfWAgOiAnJ1xuICAgIH1gO1xuICAgIHJldHVybiBuZXcgRmluZENoYWluaW5nKGVuZHBvaW50KTtcbiAgfSxcbiAgLyoqXG4gICAqIEZpbmRzIGEgc2luZ2xlIG9iamVjdCBpbiB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcXVlcnkgLSBUaGUgcXVlcnkgdG8gZmluZCB0aGUgb2JqZWN0LlxuICAgKiBAcmV0dXJucyBBIEZpbmRDaGFpbmluZyBvYmplY3QgdGhhdCBjYW4gYmUgY2hhaW5lZCB3aXRoIG90aGVyIGZ1bmN0aW9ucy5cbiAgICovXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vb2JqZWN0cy8ke3F1ZXJ5LmlkfT9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIHJldHVybiBuZXcgRmluZENoYWluaW5nKGVuZHBvaW50KTtcbiAgfSxcbiAgLyoqXG4gICAqIEluc2VydHMgb25lIG9iamVjdCBpbnRvIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgb2JqZWN0IHRvIGluc2VydC5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgYXN5bmMgaW5zZXJ0T25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3RzYDtcbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldENvbmZpZy53cml0ZV9rZXl9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycyk7XG4gIH0sXG4gIC8qKlxuICAgKiBVcGRhdGUgYSBzaW5nbGUgb2JqZWN0IGluIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byB1cGRhdGUgdGhlIG9iamVjdCB3aXRoLlxuICAgKiBAcGFyYW0gc2V0IC0gVGhlIHNldCBvZiB1cGRhdGVzIHRvIGFwcGx5IHRvIHRoZSBvYmplY3QuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGFzeW5jIHVwZGF0ZU9uZShwYXJhbXMsIHNldCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWA7XG4gICAgY29uc3QgdXBkYXRlcyA9IHNldC4kc2V0O1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHVwZGF0ZXMsIGhlYWRlcnMpO1xuICB9LFxuICAvKipcbiAgICogRGVsZXRlIGFuIG9iamVjdCBmcm9tIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBBUEkuXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBBUEkuXG4gICAqL1xuICBhc3luYyBkZWxldGVPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7XG4gICAgICBidWNrZXRDb25maWcuc2x1Z1xuICAgIH0vb2JqZWN0cy8ke3BhcmFtcy5pZH0ke1xuICAgICAgcGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJydcbiAgICB9YDtcbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldENvbmZpZy53cml0ZV9rZXl9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycyk7XG4gIH0sXG59KTtcblxuLyoqXG4gKiBPYmplY3QgbWV0aG9kcyBmb3IgdGhlIGJ1Y2tldC5cbiAqIEBwYXJhbSBidWNrZXRDb25maWcgLSBUaGUgYnVja2V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggbWV0aG9kcyBmb3IgdGhlIGJ1Y2tldC5cbiAqL1xuY29uc3Qgb2JqZWN0TWV0aG9kcyA9IChidWNrZXRDb25maWcpID0+ICh7XG4gIG9iamVjdHM6IG9iamVjdHNDaGFpbk1ldGhvZHMoYnVja2V0Q29uZmlnKSxcbiAgLyoqXG4gICAqIEdldCBvYmplY3RzIGZyb20gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGFkZCB0byB0aGUgZW5kcG9pbnQuXG4gICAqIEByZXR1cm5zIFRoZSByZXNwb25zZSBmcm9tIHRoZSBBUEkuXG4gICAqL1xuICBnZXRPYmplY3RzOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0Q29uZmlnLnJlYWRfa2V5fWA7XG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKTtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpO1xuICB9LFxuICAvKipcbiAgICogR2V0cyBhbiBvYmplY3QgZnJvbSB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgQVBJLlxuICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IGZyb20gdGhlIGJ1Y2tldC5cbiAgICovXG4gIGdldE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3VwcGx5IHBhcmFtcyBvYmplY3Qgd2l0aCBvYmplY3QgaWQnKTtcbiAgICB9XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgfSxcbiAgLyoqXG4gICAqIEdldCB0aGUgcmV2aXNpb25zIG9mIGFuIG9iamVjdC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGVuZHBvaW50LlxuICAgKiBAcmV0dXJucyBUaGUgcmVzcG9uc2UgZnJvbSB0aGUgZW5kcG9pbnQuXG4gICAqL1xuICBnZXRPYmplY3RSZXZpc2lvbnM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9ucz9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgfSxcbiAgLyoqXG4gICAqIEdldHMgdGhlIG9iamVjdHMgZm9yIGEgbWVyZ2UgcmVxdWVzdC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGVuZHBvaW50LlxuICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0cyBmb3IgdGhlIG1lcmdlIHJlcXVlc3QuXG4gICAqL1xuICBnZXRNZXJnZVJlcXVlc3RPYmplY3RzOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZXJnZS1yZXF1ZXN0cy8ke3BhcmFtcy5pZH0vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgfSxcbiAgLyoqXG4gICAqIEFkZCBhbiBvYmplY3QgdG8gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBvYmplY3QgdG8gYWRkLlxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBhZGRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vb2JqZWN0c2A7XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpO1xuICB9LFxuICAvKipcbiAgICogQWRkcyBhbiBvYmplY3QgcmV2aXNpb24gdG8gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBvYmplY3QgcmV2aXNpb24gcGFyYW1ldGVycy5cbiAgICogQHJldHVybnMgVGhlIHJlc3BvbnNlIGZyb20gdGhlIEFQSS5cbiAgICovXG4gIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2A7XG4gICAgZGVsZXRlIHBhcmFtcy5pZDtcbiAgICBkZWxldGUgcGFyYW1zLnR5cGU7XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpO1xuICB9LFxuICAvKipcbiAgICogRWRpdCBhbiBvYmplY3QgaW4gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGVkaXQgdGhlIG9iamVjdCB3aXRoLlxuICAgKiBAcmV0dXJucyBUaGUgcmVzcG9uc2UgZnJvbSB0aGUgQVBJLlxuICAgKi9cbiAgZWRpdE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWA7XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWAsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpO1xuICB9LFxuICAvKipcbiAgICogR2V0cyB0aGUgbWV0YWZpZWxkcyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgaWQgb2YgdGhlIG9iamVjdCB0byBnZXQgdGhlIG1ldGFmaWVsZHMgZm9yLlxuICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbWV0YWZpZWxkcyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICovXG4gIGdldE9iamVjdE1ldGFmaWVsZHM6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcz9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gIH0sXG4gIC8vLyBERVBSRUNBVEVEXG4gIGVkaXRPYmplY3RNZXRhZmllbGRzOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L21ldGFmaWVsZHNgO1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZDtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKTtcbiAgfSxcbiAgLyoqXG4gICAqIEVkaXQgYW4gb2JqZWN0J3MgbWV0YWZpZWxkLlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gZWRpdCB0aGUgb2JqZWN0J3MgbWV0YWZpZWxkLlxuICAgKiBAcmV0dXJucyBUaGUgcmVzcG9uc2UgZnJvbSB0aGUgQVBJLlxuICAgKi9cbiAgZWRpdE9iamVjdE1ldGFmaWVsZDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzLyR7cGFyYW1zLmtleX1gO1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZDtcbiAgICBkZWxldGUgcGFyYW1zLmtleTtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKTtcbiAgfSxcbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBvYmplY3QgZnJvbSB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIG9iamVjdCB0byBkZWxldGUuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGRlbGV0ZU9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWA7XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0TWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQURBQSxPQUFPLENBQUMsNkJBQTZCLENBQUM7QUFFdEMsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsb0NBQW9DLENBQUM7QUFDbEUsZUFBMkJBLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztFQUF2REUsY0FBYyxZQUFkQSxjQUFjO0FBQ3RCLGdCQUdJRixPQUFPLENBQUMsMEJBQTBCLENBQUM7RUFGckNHLDBCQUEwQixhQUExQkEsMEJBQTBCO0VBQzFCQyxZQUFZLGFBQVpBLFlBQVk7QUFHZCxJQUFJQyxPQUFPOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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