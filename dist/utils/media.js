"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('regenerator-runtime/runtime');
var FormData = require('form-data');
var HTTP_METHODS = require('../constants/httpMethods.constants');
var _require = require('../helpers/requestHandler'),
  requestHandler = _require.requestHandler;
var promiser = require('../helpers/promiser');

/**
 * Finds media in the bucket.
 * @param query - The query to find media with.
 * @returns A promise that resolves to the media found.
 */
var mediaChainMethods = function mediaChainMethods(bucketConfig) {
  return {
    /**
     * Find media in the bucket.
     * @param query - The query to search for.
     * @returns A new Media object.
     */
    find: function find(query) {
      this.endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/media?read_key=").concat(bucketConfig.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return this;
    },
    /**
     * Finds a single media object by its ID.
     * @param query - The query object.
     * @returns The Media object.
     */
    findOne: function findOne(query) {
      this.endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/media/").concat(query.id, "?read_key=").concat(bucketConfig.read_key);
      return this;
    },
    /**
     * Adds the given props to the endpoint.
     * @param props - the props to add to the endpoint.
     * @returns None
     */
    props: function props(_props) {
      this.endpoint += "&props=".concat(_props);
      return this;
    },
    /**
     * Sort the results by the given field.
     * @param sort - The field to sort by.
     * @returns None
     */
    sort: function sort(_sort) {
      this.endpoint += "&sort=".concat(_sort);
      return this;
    },
    /**
     * Limit the number of results returned.
     * @param limit - The number of results to return.
     * @returns None
     */
    limit: function limit(_limit) {
      this.endpoint += "&limit=".concat(_limit);
      return this;
    },
    /**
     * Skip the given number of results.
     * @param skip - The number of results to skip.
     * @returns None
     */
    skip: function skip(_skip) {
      this.endpoint += "&skip=".concat(_skip);
      return this;
    },
    /**
     * Uploads a file to the bucket.
     * @param params - The parameters to upload the file with.
     * @returns A promise that resolves to the uploaded file.
     */
    insertOne: function insertOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var endpoint, data, getHeaders;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "".concat(bucketConfig.uploadUri, "/buckets/").concat(bucketConfig.slug, "/media");
              data = new FormData();
              if (params.media.buffer) {
                data.append('media', params.media.buffer, params.media.originalname);
              } else {
                data.append('media', params.media, params.media.name);
              }
              if (bucketConfig.write_key) {
                data.append('write_key', bucketConfig.write_key);
              }
              if (params.folder) {
                data.append('folder', params.folder);
              }
              if (params.metadata) {
                data.append('metadata', JSON.stringify(params.metadata));
              }
              if (params.trigger_webhook) {
                data.append('trigger_webhook', params.trigger_webhook.toString());
              }
              getHeaders = function getHeaders(form) {
                return new Promise(function (resolve, reject) {
                  if (params.media.buffer) {
                    form.getLength(function (err, length) {
                      if (err) reject(err);
                      var headers = _objectSpread({
                        'Content-Length': length
                      }, form.getHeaders());
                      resolve(headers);
                    });
                  } else {
                    resolve({
                      'Content-Type': 'multipart/form-data'
                    });
                  }
                });
              };
              return _context.abrupt("return", getHeaders(data).then(function (headers) {
                headers.Authorization = "Bearer ".concat(bucketConfig.write_key);
                return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
              })["catch"](function (error) {
                throw error.response.data;
              }));
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * Deletes a single media from the bucket.
     * @param params - The parameters for the request, including id
     * @returns None
     */
    deleteOne: function deleteOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var endpoint, headers;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/media/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');
              if (bucketConfig.write_key) {
                headers = {
                  Authorization: "Bearer ".concat(bucketConfig.write_key)
                };
              }
              return _context2.abrupt("return", requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    then: function then(resolve, reject) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              promiser(_this.endpoint).then(function (res) {
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
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };
};

// Legacy Methods

/**
 * A set of methods for interacting with media in a bucket.
 * @param bucketConfig - The bucket configuration object.
 * @returns A set of methods for interacting with media in a bucket.
 */
var mediaMethods = function mediaMethods(bucketConfig) {
  return {
    media: mediaChainMethods(bucketConfig),
    addMedia: function addMedia(params) {
      var endpoint = "".concat(bucketConfig.uploadUri, "/buckets/").concat(bucketConfig.slug, "/media");
      var data = new FormData();
      if (params.media.buffer) {
        data.append('media', params.media.buffer, params.media.originalname);
      } else {
        data.append('media', params.media, params.media.name);
      }
      if (bucketConfig.write_key) {
        data.append('write_key', bucketConfig.write_key);
      }
      if (params.folder) {
        data.append('folder', params.folder);
      }
      if (params.metadata) {
        data.append('metadata', JSON.stringify(params.metadata));
      }
      if (params.trigger_webhook) {
        data.append('trigger_webhook', params.trigger_webhook.toString());
      }
      var getHeaders = function getHeaders(form) {
        return new Promise(function (resolve, reject) {
          if (params.media.buffer) {
            form.getLength(function (err, length) {
              if (err) reject(err);
              var headers = _objectSpread({
                'Content-Length': length
              }, form.getHeaders());
              resolve(headers);
            });
          } else {
            resolve({
              'Content-Type': 'multipart/form-data'
            });
          }
        });
      };
      return getHeaders(data).then(function (headers) {
        headers.Authorization = "Bearer ".concat(bucketConfig.write_key);
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
      })["catch"](function (error) {
        throw error.response.data;
      });
    },
    getMedia: function getMedia(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/media?read_key=").concat(bucketConfig.read_key);
      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }
      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }
      if (params && params.query) {
        endpoint += "&query=".concat(encodeURI(JSON.stringify(params.query)));
      }
      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    getSingleMedia: function getSingleMedia(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/media/").concat(params.id, "?read_key=").concat(bucketConfig.read_key);
      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    deleteMedia: function deleteMedia(params) {
      var endpoint = "".concat(bucketConfig.uri, "/buckets/").concat(bucketConfig.slug, "/media/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');
      var headers;
      if (bucketConfig.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucketConfig.write_key)
        };
      }
      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};
module.exports = mediaMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiRm9ybURhdGEiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsInByb21pc2VyIiwibWVkaWFDaGFpbk1ldGhvZHMiLCJidWNrZXRDb25maWciLCJmaW5kIiwicXVlcnkiLCJlbmRwb2ludCIsInVyaSIsInNsdWciLCJyZWFkX2tleSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaW5kT25lIiwiaWQiLCJwcm9wcyIsInNvcnQiLCJsaW1pdCIsInNraXAiLCJpbnNlcnRPbmUiLCJwYXJhbXMiLCJ1cGxvYWRVcmkiLCJkYXRhIiwibWVkaWEiLCJidWZmZXIiLCJhcHBlbmQiLCJvcmlnaW5hbG5hbWUiLCJuYW1lIiwid3JpdGVfa2V5IiwiZm9sZGVyIiwibWV0YWRhdGEiLCJ0cmlnZ2VyX3dlYmhvb2siLCJ0b1N0cmluZyIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImRlbGV0ZU9uZSIsIkRFTEVURSIsInJlcyIsIm1lZGlhTWV0aG9kcyIsImFkZE1lZGlhIiwiZ2V0TWVkaWEiLCJHRVQiLCJnZXRTaW5nbGVNZWRpYSIsImRlbGV0ZU1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnKTtcblxuY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKTtcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9odHRwTWV0aG9kcy5jb25zdGFudHMnKTtcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdEhhbmRsZXInKTtcbmNvbnN0IHByb21pc2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9wcm9taXNlcicpO1xuXG4vKipcbiAqIEZpbmRzIG1lZGlhIGluIHRoZSBidWNrZXQuXG4gKiBAcGFyYW0gcXVlcnkgLSBUaGUgcXVlcnkgdG8gZmluZCBtZWRpYSB3aXRoLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG1lZGlhIGZvdW5kLlxuICovXG5jb25zdCBtZWRpYUNoYWluTWV0aG9kcyA9IChidWNrZXRDb25maWcpID0+ICh7XG4gIC8qKlxuICAgKiBGaW5kIG1lZGlhIGluIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBxdWVyeSAtIFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyBBIG5ldyBNZWRpYSBvYmplY3QuXG4gICAqL1xuICBmaW5kKHF1ZXJ5KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtcbiAgICAgIGJ1Y2tldENvbmZpZy5zbHVnXG4gICAgfS9tZWRpYT9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX0ke1xuICAgICAgcXVlcnkgPyBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSl9YCA6ICcnXG4gICAgfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBGaW5kcyBhIHNpbmdsZSBtZWRpYSBvYmplY3QgYnkgaXRzIElELlxuICAgKiBAcGFyYW0gcXVlcnkgLSBUaGUgcXVlcnkgb2JqZWN0LlxuICAgKiBAcmV0dXJucyBUaGUgTWVkaWEgb2JqZWN0LlxuICAgKi9cbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L21lZGlhLyR7cXVlcnkuaWR9P3JlYWRfa2V5PSR7YnVja2V0Q29uZmlnLnJlYWRfa2V5fWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBwcm9wcyB0byB0aGUgZW5kcG9pbnQuXG4gICAqIEBwYXJhbSBwcm9wcyAtIHRoZSBwcm9wcyB0byBhZGQgdG8gdGhlIGVuZHBvaW50LlxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBTb3J0IHRoZSByZXN1bHRzIGJ5IHRoZSBnaXZlbiBmaWVsZC5cbiAgICogQHBhcmFtIHNvcnQgLSBUaGUgZmllbGQgdG8gc29ydCBieS5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgc29ydChzb3J0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNvcnQ9JHtzb3J0fWA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBMaW1pdCB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgcmV0dXJuZWQuXG4gICAqIEBwYXJhbSBsaW1pdCAtIFRoZSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm4uXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFNraXAgdGhlIGdpdmVuIG51bWJlciBvZiByZXN1bHRzLlxuICAgKiBAcGFyYW0gc2tpcCAtIFRoZSBudW1iZXIgb2YgcmVzdWx0cyB0byBza2lwLlxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBza2lwKHNraXApIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2tpcD0ke3NraXB9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFVwbG9hZHMgYSBmaWxlIHRvIHRoZSBidWNrZXQuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byB1cGxvYWQgdGhlIGZpbGUgd2l0aC5cbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHVwbG9hZGVkIGZpbGUuXG4gICAqL1xuICBhc3luYyBpbnNlcnRPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXBsb2FkVXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L21lZGlhYDtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYS5idWZmZXIsIHBhcmFtcy5tZWRpYS5vcmlnaW5hbG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEsIHBhcmFtcy5tZWRpYS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd3cml0ZV9rZXknLCBidWNrZXRDb25maWcud3JpdGVfa2V5KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5mb2xkZXIpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdmb2xkZXInLCBwYXJhbXMuZm9sZGVyKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMudHJpZ2dlcl93ZWJob29rKSB7XG4gICAgICBkYXRhLmFwcGVuZCgndHJpZ2dlcl93ZWJob29rJywgcGFyYW1zLnRyaWdnZXJfd2ViaG9vay50b1N0cmluZygpKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0SGVhZGVycyA9IChmb3JtKSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1MZW5ndGgnOiBsZW5ndGgsIC4uLmZvcm0uZ2V0SGVhZGVycygpIH07XG4gICAgICAgICAgICByZXNvbHZlKGhlYWRlcnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2J1Y2tldENvbmZpZy53cml0ZV9rZXl9YDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgc2luZ2xlIG1lZGlhIGZyb20gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgcmVxdWVzdCwgaW5jbHVkaW5nIGlkXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIGFzeW5jIGRlbGV0ZU9uZShwYXJhbXMpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vbWVkaWEvJHtcbiAgICAgIHBhcmFtcy5pZFxuICAgIH0ke3BhcmFtcy50cmlnZ2VyX3dlYmhvb2sgPyAnP3RyaWdnZXJfd2ViaG9vaz10cnVlJyA6ICcnfWA7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpO1xuICB9LFxuICBhc3luYyB0aGVuKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHByb21pc2VyKHRoaXMuZW5kcG9pbnQpXG4gICAgICAudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcywgbnVsbCkpXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHJlamVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUobnVsbCwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sXG59KTtcblxuLy8gTGVnYWN5IE1ldGhvZHNcblxuLyoqXG4gKiBBIHNldCBvZiBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIG1lZGlhIGluIGEgYnVja2V0LlxuICogQHBhcmFtIGJ1Y2tldENvbmZpZyAtIFRoZSBidWNrZXQgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBAcmV0dXJucyBBIHNldCBvZiBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIG1lZGlhIGluIGEgYnVja2V0LlxuICovXG5jb25zdCBtZWRpYU1ldGhvZHMgPSAoYnVja2V0Q29uZmlnKSA9PiAoe1xuICBtZWRpYTogbWVkaWFDaGFpbk1ldGhvZHMoYnVja2V0Q29uZmlnKSxcbiAgYWRkTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cGxvYWRVcml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vbWVkaWFgO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLm1ldGFkYXRhKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMubWV0YWRhdGEpKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50cmlnZ2VyX3dlYmhvb2spIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd0cmlnZ2VyX3dlYmhvb2snLCBwYXJhbXMudHJpZ2dlcl93ZWJob29rLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKGZvcm0pID0+XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfTtcbiAgICAgICAgICAgIHJlc29sdmUoaGVhZGVycyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBnZXRIZWFkZXJzKGRhdGEpXG4gICAgICAudGhlbigoaGVhZGVycykgPT4ge1xuICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gO1xuICAgICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBkYXRhLCBoZWFkZXJzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICB9KTtcbiAgfSxcbiAgZ2V0TWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0Q29uZmlnLnJlYWRfa2V5fWA7XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YDtcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YDtcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YDtcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgfSxcbiAgZ2V0U2luZ2xlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldENvbmZpZy5yZWFkX2tleX1gO1xuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWA7XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludCk7XG4gIH0sXG4gIGRlbGV0ZU1lZGlhOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtidWNrZXRDb25maWcudXJpfS9idWNrZXRzLyR7YnVja2V0Q29uZmlnLnNsdWd9L21lZGlhLyR7XG4gICAgICBwYXJhbXMuaWRcbiAgICB9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gO1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKTtcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhTWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQUEsT0FBTyxDQUFDLDZCQUE2QixDQUFDO0FBRXRDLElBQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNyQyxJQUFNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztBQUNsRSxlQUEyQkEsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0VBQXZERyxjQUFjLFlBQWRBLGNBQWM7QUFDdEIsSUFBTUMsUUFBUSxHQUFHSixPQUFPLENBQUMscUJBQXFCLENBQUM7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCLENBQUlDLFlBQVk7RUFBQSxPQUFNO0lBQzNDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsSUFBSSxnQkFBQ0MsS0FBSyxFQUFFO01BQ1YsSUFBSSxDQUFDQyxRQUFRLGFBQU1ILFlBQVksQ0FBQ0ksR0FBRyxzQkFDakNKLFlBQVksQ0FBQ0ssSUFBSSw2QkFDQUwsWUFBWSxDQUFDTSxRQUFRLFNBQ3RDSixLQUFLLG9CQUFhSyxTQUFTLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxLQUFLLENBQUMsQ0FBQyxJQUFLLEVBQUUsQ0FDekQ7TUFDRixPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFUSxPQUFPLG1CQUFDUixLQUFLLEVBQUU7TUFDYixJQUFJLENBQUNDLFFBQVEsYUFBTUgsWUFBWSxDQUFDSSxHQUFHLHNCQUFZSixZQUFZLENBQUNLLElBQUksb0JBQVVILEtBQUssQ0FBQ1MsRUFBRSx1QkFBYVgsWUFBWSxDQUFDTSxRQUFRLENBQUU7TUFDdEgsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRU0sS0FBSyxpQkFBQ0EsTUFBSyxFQUFFO01BQ1gsSUFBSSxDQUFDVCxRQUFRLHFCQUFjUyxNQUFLLENBQUU7TUFDbEMsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsSUFBSSxnQkFBQ0EsS0FBSSxFQUFFO01BQ1QsSUFBSSxDQUFDVixRQUFRLG9CQUFhVSxLQUFJLENBQUU7TUFDaEMsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsS0FBSyxpQkFBQ0EsTUFBSyxFQUFFO01BQ1gsSUFBSSxDQUFDWCxRQUFRLHFCQUFjVyxNQUFLLENBQUU7TUFDbEMsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsSUFBSSxnQkFBQ0EsS0FBSSxFQUFFO01BQ1QsSUFBSSxDQUFDWixRQUFRLG9CQUFhWSxLQUFJLENBQUU7TUFDaEMsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDUUMsU0FBUyxxQkFBQ0MsTUFBTSxFQUFFO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNoQmQsUUFBUSxhQUFNSCxZQUFZLENBQUNrQixTQUFTLHNCQUFZbEIsWUFBWSxDQUFDSyxJQUFJO2NBQ2pFYyxJQUFJLEdBQUcsSUFBSXhCLFFBQVEsRUFBRTtjQUMzQixJQUFJc0IsTUFBTSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sRUFBRTtnQkFDdkJGLElBQUksQ0FBQ0csTUFBTSxDQUFDLE9BQU8sRUFBRUwsTUFBTSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sRUFBRUosTUFBTSxDQUFDRyxLQUFLLENBQUNHLFlBQVksQ0FBQztjQUN0RSxDQUFDLE1BQU07Z0JBQ0xKLElBQUksQ0FBQ0csTUFBTSxDQUFDLE9BQU8sRUFBRUwsTUFBTSxDQUFDRyxLQUFLLEVBQUVILE1BQU0sQ0FBQ0csS0FBSyxDQUFDSSxJQUFJLENBQUM7Y0FDdkQ7Y0FDQSxJQUFJeEIsWUFBWSxDQUFDeUIsU0FBUyxFQUFFO2dCQUMxQk4sSUFBSSxDQUFDRyxNQUFNLENBQUMsV0FBVyxFQUFFdEIsWUFBWSxDQUFDeUIsU0FBUyxDQUFDO2NBQ2xEO2NBQ0EsSUFBSVIsTUFBTSxDQUFDUyxNQUFNLEVBQUU7Z0JBQ2pCUCxJQUFJLENBQUNHLE1BQU0sQ0FBQyxRQUFRLEVBQUVMLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDO2NBQ3RDO2NBQ0EsSUFBSVQsTUFBTSxDQUFDVSxRQUFRLEVBQUU7Z0JBQ25CUixJQUFJLENBQUNHLE1BQU0sQ0FBQyxVQUFVLEVBQUVkLElBQUksQ0FBQ0MsU0FBUyxDQUFDUSxNQUFNLENBQUNVLFFBQVEsQ0FBQyxDQUFDO2NBQzFEO2NBQ0EsSUFBSVYsTUFBTSxDQUFDVyxlQUFlLEVBQUU7Z0JBQzFCVCxJQUFJLENBQUNHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRUwsTUFBTSxDQUFDVyxlQUFlLENBQUNDLFFBQVEsRUFBRSxDQUFDO2NBQ25FO2NBQ01DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLElBQUk7Z0JBQUEsT0FDdEIsSUFBSUMsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO2tCQUMvQixJQUFJakIsTUFBTSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sRUFBRTtvQkFDdkJVLElBQUksQ0FBQ0ksU0FBUyxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsTUFBTSxFQUFLO3NCQUM5QixJQUFJRCxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDO3NCQUNwQixJQUFNRSxPQUFPO3dCQUFLLGdCQUFnQixFQUFFRDtzQkFBTSxHQUFLTixJQUFJLENBQUNELFVBQVUsRUFBRSxDQUFFO3NCQUNsRUcsT0FBTyxDQUFDSyxPQUFPLENBQUM7b0JBQ2xCLENBQUMsQ0FBQztrQkFDSixDQUFDLE1BQU07b0JBQ0xMLE9BQU8sQ0FBQztzQkFBRSxjQUFjLEVBQUU7b0JBQXNCLENBQUMsQ0FBQztrQkFDcEQ7Z0JBQ0YsQ0FBQyxDQUFDO2NBQUE7Y0FBQSxpQ0FDR0gsVUFBVSxDQUFDWCxJQUFJLENBQUMsQ0FDcEJvQixJQUFJLENBQUMsVUFBQ0QsT0FBTyxFQUFLO2dCQUNqQkEsT0FBTyxDQUFDRSxhQUFhLG9CQUFheEMsWUFBWSxDQUFDeUIsU0FBUyxDQUFFO2dCQUMxRCxPQUFPNUIsY0FBYyxDQUFDRCxZQUFZLENBQUM2QyxJQUFJLEVBQUV0QyxRQUFRLEVBQUVnQixJQUFJLEVBQUVtQixPQUFPLENBQUM7Y0FDbkUsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDSSxLQUFLLEVBQUs7Z0JBQ2hCLE1BQU1BLEtBQUssQ0FBQ0MsUUFBUSxDQUFDeEIsSUFBSTtjQUMzQixDQUFDLENBQUM7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFDTixDQUFDO0lBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNReUIsU0FBUyxxQkFBQzNCLE1BQU0sRUFBRTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FDaEJkLFFBQVEsYUFBTUgsWUFBWSxDQUFDSSxHQUFHLHNCQUFZSixZQUFZLENBQUNLLElBQUksb0JBQy9EWSxNQUFNLENBQUNOLEVBQUUsU0FDUk0sTUFBTSxDQUFDVyxlQUFlLEdBQUcsdUJBQXVCLEdBQUcsRUFBRTtjQUV4RCxJQUFJNUIsWUFBWSxDQUFDeUIsU0FBUyxFQUFFO2dCQUMxQmEsT0FBTyxHQUFHO2tCQUNSRSxhQUFhLG1CQUFZeEMsWUFBWSxDQUFDeUIsU0FBUztnQkFDakQsQ0FBQztjQUNIO2NBQUMsa0NBQ001QixjQUFjLENBQUNELFlBQVksQ0FBQ2lELE1BQU0sRUFBRTFDLFFBQVEsRUFBRSxJQUFJLEVBQUVtQyxPQUFPLENBQUM7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFDckUsQ0FBQztJQUNLQyxJQUFJLGdCQUFDTixPQUFPLEVBQUVDLE1BQU0sRUFBRTtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDMUJwQyxRQUFRLENBQUMsS0FBSSxDQUFDSyxRQUFRLENBQUMsQ0FDcEJvQyxJQUFJLENBQUMsVUFBQ08sR0FBRztnQkFBQSxPQUFLYixPQUFPLENBQUNhLEdBQUcsRUFBRSxJQUFJLENBQUM7Y0FBQSxFQUFDLFNBQzVCLENBQUMsVUFBQ1YsR0FBRyxFQUFLO2dCQUNkLElBQUksT0FBT0YsTUFBTSxLQUFLLFVBQVUsRUFBRTtrQkFDaENBLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDO2dCQUNiLENBQUMsTUFBTTtrQkFDTEgsT0FBTyxDQUFDLElBQUksRUFBRUcsR0FBRyxDQUFDO2dCQUNwQjtjQUNGLENBQUMsQ0FBQztZQUFDO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUNQO0VBQ0YsQ0FBQztBQUFBLENBQUM7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUkvQyxZQUFZO0VBQUEsT0FBTTtJQUN0Q29CLEtBQUssRUFBRXJCLGlCQUFpQixDQUFDQyxZQUFZLENBQUM7SUFDdENnRCxRQUFRLEVBQUUsa0JBQUMvQixNQUFNLEVBQUs7TUFDcEIsSUFBTWQsUUFBUSxhQUFNSCxZQUFZLENBQUNrQixTQUFTLHNCQUFZbEIsWUFBWSxDQUFDSyxJQUFJLFdBQVE7TUFDL0UsSUFBTWMsSUFBSSxHQUFHLElBQUl4QixRQUFRLEVBQUU7TUFDM0IsSUFBSXNCLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxNQUFNLEVBQUU7UUFDdkJGLElBQUksQ0FBQ0csTUFBTSxDQUFDLE9BQU8sRUFBRUwsTUFBTSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sRUFBRUosTUFBTSxDQUFDRyxLQUFLLENBQUNHLFlBQVksQ0FBQztNQUN0RSxDQUFDLE1BQU07UUFDTEosSUFBSSxDQUFDRyxNQUFNLENBQUMsT0FBTyxFQUFFTCxNQUFNLENBQUNHLEtBQUssRUFBRUgsTUFBTSxDQUFDRyxLQUFLLENBQUNJLElBQUksQ0FBQztNQUN2RDtNQUNBLElBQUl4QixZQUFZLENBQUN5QixTQUFTLEVBQUU7UUFDMUJOLElBQUksQ0FBQ0csTUFBTSxDQUFDLFdBQVcsRUFBRXRCLFlBQVksQ0FBQ3lCLFNBQVMsQ0FBQztNQUNsRDtNQUNBLElBQUlSLE1BQU0sQ0FBQ1MsTUFBTSxFQUFFO1FBQ2pCUCxJQUFJLENBQUNHLE1BQU0sQ0FBQyxRQUFRLEVBQUVMLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDO01BQ3RDO01BQ0EsSUFBSVQsTUFBTSxDQUFDVSxRQUFRLEVBQUU7UUFDbkJSLElBQUksQ0FBQ0csTUFBTSxDQUFDLFVBQVUsRUFBRWQsSUFBSSxDQUFDQyxTQUFTLENBQUNRLE1BQU0sQ0FBQ1UsUUFBUSxDQUFDLENBQUM7TUFDMUQ7TUFDQSxJQUFJVixNQUFNLENBQUNXLGVBQWUsRUFBRTtRQUMxQlQsSUFBSSxDQUFDRyxNQUFNLENBQUMsaUJBQWlCLEVBQUVMLE1BQU0sQ0FBQ1csZUFBZSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztNQUNuRTtNQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLElBQUk7UUFBQSxPQUN0QixJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7VUFDL0IsSUFBSWpCLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxNQUFNLEVBQUU7WUFDdkJVLElBQUksQ0FBQ0ksU0FBUyxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsTUFBTSxFQUFLO2NBQzlCLElBQUlELEdBQUcsRUFBRUYsTUFBTSxDQUFDRSxHQUFHLENBQUM7Y0FDcEIsSUFBTUUsT0FBTztnQkFBSyxnQkFBZ0IsRUFBRUQ7Y0FBTSxHQUFLTixJQUFJLENBQUNELFVBQVUsRUFBRSxDQUFFO2NBQ2xFRyxPQUFPLENBQUNLLE9BQU8sQ0FBQztZQUNsQixDQUFDLENBQUM7VUFDSixDQUFDLE1BQU07WUFDTEwsT0FBTyxDQUFDO2NBQUUsY0FBYyxFQUFFO1lBQXNCLENBQUMsQ0FBQztVQUNwRDtRQUNGLENBQUMsQ0FBQztNQUFBO01BQ0osT0FBT0gsVUFBVSxDQUFDWCxJQUFJLENBQUMsQ0FDcEJvQixJQUFJLENBQUMsVUFBQ0QsT0FBTyxFQUFLO1FBQ2pCQSxPQUFPLENBQUNFLGFBQWEsb0JBQWF4QyxZQUFZLENBQUN5QixTQUFTLENBQUU7UUFDMUQsT0FBTzVCLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDNkMsSUFBSSxFQUFFdEMsUUFBUSxFQUFFZ0IsSUFBSSxFQUFFbUIsT0FBTyxDQUFDO01BQ25FLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ0ksS0FBSyxFQUFLO1FBQ2hCLE1BQU1BLEtBQUssQ0FBQ0MsUUFBUSxDQUFDeEIsSUFBSTtNQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0Q4QixRQUFRLEVBQUUsa0JBQUNoQyxNQUFNLEVBQUs7TUFDcEIsSUFBSWQsUUFBUSxhQUFNSCxZQUFZLENBQUNJLEdBQUcsc0JBQVlKLFlBQVksQ0FBQ0ssSUFBSSw2QkFBbUJMLFlBQVksQ0FBQ00sUUFBUSxDQUFFO01BQ3pHLElBQUlXLE1BQU0sSUFBSUEsTUFBTSxDQUFDSCxLQUFLLEVBQUU7UUFDMUJYLFFBQVEscUJBQWNjLE1BQU0sQ0FBQ0gsS0FBSyxDQUFFO01BQ3RDO01BQ0EsSUFBSUcsTUFBTSxJQUFJQSxNQUFNLENBQUNGLElBQUksRUFBRTtRQUN6QlosUUFBUSxvQkFBYWMsTUFBTSxDQUFDRixJQUFJLENBQUU7TUFDcEM7TUFDQSxJQUFJRSxNQUFNLElBQUlBLE1BQU0sQ0FBQ2YsS0FBSyxFQUFFO1FBQzFCQyxRQUFRLHFCQUFjSSxTQUFTLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUSxNQUFNLENBQUNmLEtBQUssQ0FBQyxDQUFDLENBQUU7TUFDakU7TUFDQSxJQUFJZSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFO1FBQzFCVCxRQUFRLHFCQUFjYyxNQUFNLENBQUNMLEtBQUssQ0FBRTtNQUN0QztNQUNBLE9BQU9mLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDc0QsR0FBRyxFQUFFL0MsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFDRGdELGNBQWMsRUFBRSx3QkFBQ2xDLE1BQU0sRUFBSztNQUMxQixJQUFJZCxRQUFRLGFBQU1ILFlBQVksQ0FBQ0ksR0FBRyxzQkFBWUosWUFBWSxDQUFDSyxJQUFJLG9CQUFVWSxNQUFNLENBQUNOLEVBQUUsdUJBQWFYLFlBQVksQ0FBQ00sUUFBUSxDQUFFO01BQ3RILElBQUlXLE1BQU0sSUFBSUEsTUFBTSxDQUFDTCxLQUFLLEVBQUU7UUFDMUJULFFBQVEscUJBQWNjLE1BQU0sQ0FBQ0wsS0FBSyxDQUFFO01BQ3RDO01BQ0EsT0FBT2YsY0FBYyxDQUFDRCxZQUFZLENBQUNzRCxHQUFHLEVBQUUvQyxRQUFRLENBQUM7SUFDbkQsQ0FBQztJQUNEaUQsV0FBVyxFQUFFLHFCQUFDbkMsTUFBTSxFQUFLO01BQ3ZCLElBQU1kLFFBQVEsYUFBTUgsWUFBWSxDQUFDSSxHQUFHLHNCQUFZSixZQUFZLENBQUNLLElBQUksb0JBQy9EWSxNQUFNLENBQUNOLEVBQUUsU0FDUk0sTUFBTSxDQUFDVyxlQUFlLEdBQUcsdUJBQXVCLEdBQUcsRUFBRSxDQUFFO01BQzFELElBQUlVLE9BQU87TUFDWCxJQUFJdEMsWUFBWSxDQUFDeUIsU0FBUyxFQUFFO1FBQzFCYSxPQUFPLEdBQUc7VUFDUkUsYUFBYSxtQkFBWXhDLFlBQVksQ0FBQ3lCLFNBQVM7UUFDakQsQ0FBQztNQUNIO01BQ0EsT0FBTzVCLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDaUQsTUFBTSxFQUFFMUMsUUFBUSxFQUFFLElBQUksRUFBRW1DLE9BQU8sQ0FBQztJQUNyRTtFQUNGLENBQUM7QUFBQSxDQUFDO0FBRUZlLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHUCxZQUFZIn0=