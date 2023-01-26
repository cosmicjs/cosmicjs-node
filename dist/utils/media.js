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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRGF0YSIsInJlcXVpcmUiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsInByb21pc2VyIiwibWVkaWFDaGFpbk1ldGhvZHMiLCJidWNrZXRDb25maWciLCJmaW5kIiwicXVlcnkiLCJlbmRwb2ludCIsInVyaSIsInNsdWciLCJyZWFkX2tleSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaW5kT25lIiwiaWQiLCJwcm9wcyIsInNvcnQiLCJsaW1pdCIsInNraXAiLCJpbnNlcnRPbmUiLCJwYXJhbXMiLCJ1cGxvYWRVcmkiLCJkYXRhIiwibWVkaWEiLCJidWZmZXIiLCJhcHBlbmQiLCJvcmlnaW5hbG5hbWUiLCJuYW1lIiwid3JpdGVfa2V5IiwiZm9sZGVyIiwibWV0YWRhdGEiLCJ0cmlnZ2VyX3dlYmhvb2siLCJ0b1N0cmluZyIsImdldEhlYWRlcnMiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRMZW5ndGgiLCJlcnIiLCJsZW5ndGgiLCJoZWFkZXJzIiwidGhlbiIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwiZXJyb3IiLCJyZXNwb25zZSIsImRlbGV0ZU9uZSIsIkRFTEVURSIsInJlcyIsIm1lZGlhTWV0aG9kcyIsImFkZE1lZGlhIiwiZ2V0TWVkaWEiLCJHRVQiLCJnZXRTaW5nbGVNZWRpYSIsImRlbGV0ZU1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpO1xuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL2h0dHBNZXRob2RzLmNvbnN0YW50cycpO1xuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0SGFuZGxlcicpO1xuY29uc3QgcHJvbWlzZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Byb21pc2VyJyk7XG5cbi8qKlxuICogRmluZHMgbWVkaWEgaW4gdGhlIGJ1Y2tldC5cbiAqIEBwYXJhbSBxdWVyeSAtIFRoZSBxdWVyeSB0byBmaW5kIG1lZGlhIHdpdGguXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbWVkaWEgZm91bmQuXG4gKi9cbmNvbnN0IG1lZGlhQ2hhaW5NZXRob2RzID0gKGJ1Y2tldENvbmZpZykgPT4gKHtcbiAgLyoqXG4gICAqIEZpbmQgbWVkaWEgaW4gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHF1ZXJ5IC0gVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3IuXG4gICAqIEByZXR1cm5zIEEgbmV3IE1lZGlhIG9iamVjdC5cbiAgICovXG4gIGZpbmQocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke1xuICAgICAgYnVja2V0Q29uZmlnLnNsdWdcbiAgICB9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0Q29uZmlnLnJlYWRfa2V5fSR7XG4gICAgICBxdWVyeSA/IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocXVlcnkpKX1gIDogJydcbiAgICB9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIEZpbmRzIGEgc2luZ2xlIG1lZGlhIG9iamVjdCBieSBpdHMgSUQuXG4gICAqIEBwYXJhbSBxdWVyeSAtIFRoZSBxdWVyeSBvYmplY3QuXG4gICAqIEByZXR1cm5zIFRoZSBNZWRpYSBvYmplY3QuXG4gICAqL1xuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vbWVkaWEvJHtxdWVyeS5pZH0/cmVhZF9rZXk9JHtidWNrZXRDb25maWcucmVhZF9rZXl9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIHByb3BzIHRvIHRoZSBlbmRwb2ludC5cbiAgICogQHBhcmFtIHByb3BzIC0gdGhlIHByb3BzIHRvIGFkZCB0byB0aGUgZW5kcG9pbnQuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIHByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnByb3BzPSR7cHJvcHN9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFNvcnQgdGhlIHJlc3VsdHMgYnkgdGhlIGdpdmVuIGZpZWxkLlxuICAgKiBAcGFyYW0gc29ydCAtIFRoZSBmaWVsZCB0byBzb3J0IGJ5LlxuICAgKiBAcmV0dXJucyBOb25lXG4gICAqL1xuICBzb3J0KHNvcnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc29ydD0ke3NvcnR9YDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIExpbWl0IHRoZSBudW1iZXIgb2YgcmVzdWx0cyByZXR1cm5lZC5cbiAgICogQHBhcmFtIGxpbWl0IC0gVGhlIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVybi5cbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgbGltaXQobGltaXQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmbGltaXQ9JHtsaW1pdH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogU2tpcCB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHJlc3VsdHMuXG4gICAqIEBwYXJhbSBza2lwIC0gVGhlIG51bWJlciBvZiByZXN1bHRzIHRvIHNraXAuXG4gICAqIEByZXR1cm5zIE5vbmVcbiAgICovXG4gIHNraXAoc2tpcCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZza2lwPSR7c2tpcH1gO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogVXBsb2FkcyBhIGZpbGUgdG8gdGhlIGJ1Y2tldC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIHVwbG9hZCB0aGUgZmlsZSB3aXRoLlxuICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgdXBsb2FkZWQgZmlsZS5cbiAgICovXG4gIGFzeW5jIGluc2VydE9uZShwYXJhbXMpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cGxvYWRVcml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vbWVkaWFgO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZWRpYScsIHBhcmFtcy5tZWRpYSwgcGFyYW1zLm1lZGlhLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ3dyaXRlX2tleScsIGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmZvbGRlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ2ZvbGRlcicsIHBhcmFtcy5mb2xkZXIpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLm1ldGFkYXRhKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMubWV0YWRhdGEpKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50cmlnZ2VyX3dlYmhvb2spIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd0cmlnZ2VyX3dlYmhvb2snLCBwYXJhbXMudHJpZ2dlcl93ZWJob29rLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBjb25zdCBnZXRIZWFkZXJzID0gKGZvcm0pID0+XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgICAgZm9ybS5nZXRMZW5ndGgoKGVyciwgbGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LUxlbmd0aCc6IGxlbmd0aCwgLi4uZm9ybS5nZXRIZWFkZXJzKCkgfTtcbiAgICAgICAgICAgIHJlc29sdmUoaGVhZGVycyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBnZXRIZWFkZXJzKGRhdGEpXG4gICAgICAudGhlbigoaGVhZGVycykgPT4ge1xuICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7YnVja2V0Q29uZmlnLndyaXRlX2tleX1gO1xuICAgICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBkYXRhLCBoZWFkZXJzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBzaW5nbGUgbWVkaWEgZnJvbSB0aGUgYnVja2V0LlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSByZXF1ZXN0LCBpbmNsdWRpbmcgaWRcbiAgICogQHJldHVybnMgTm9uZVxuICAgKi9cbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZWRpYS8ke1xuICAgICAgcGFyYW1zLmlkXG4gICAgfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YDtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoYnVja2V0Q29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldENvbmZpZy53cml0ZV9rZXl9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycyk7XG4gIH0sXG4gIGFzeW5jIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJvbWlzZXIodGhpcy5lbmRwb2ludClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlc29sdmUocmVzLCBudWxsKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShudWxsLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG4vLyBMZWdhY3kgTWV0aG9kc1xuXG4vKipcbiAqIEEgc2V0IG9mIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggbWVkaWEgaW4gYSBidWNrZXQuXG4gKiBAcGFyYW0gYnVja2V0Q29uZmlnIC0gVGhlIGJ1Y2tldCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIEEgc2V0IG9mIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggbWVkaWEgaW4gYSBidWNrZXQuXG4gKi9cbmNvbnN0IG1lZGlhTWV0aG9kcyA9IChidWNrZXRDb25maWcpID0+ICh7XG4gIG1lZGlhOiBtZWRpYUNoYWluTWV0aG9kcyhidWNrZXRDb25maWcpLFxuICBhZGRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7YnVja2V0Q29uZmlnLnVwbG9hZFVyaX0vYnVja2V0cy8ke2J1Y2tldENvbmZpZy5zbHVnfS9tZWRpYWA7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnbWVkaWEnLCBwYXJhbXMubWVkaWEuYnVmZmVyLCBwYXJhbXMubWVkaWEub3JpZ2luYWxuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSk7XG4gICAgfVxuICAgIGlmIChidWNrZXRDb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0Q29uZmlnLndyaXRlX2tleSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcik7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubWV0YWRhdGEpIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5tZXRhZGF0YSkpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnRyaWdnZXJfd2ViaG9vaykge1xuICAgICAgZGF0YS5hcHBlbmQoJ3RyaWdnZXJfd2ViaG9vaycsIHBhcmFtcy50cmlnZ2VyX3dlYmhvb2sudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoZm9ybSkgPT5cbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5tZWRpYS5idWZmZXIpIHtcbiAgICAgICAgICBmb3JtLmdldExlbmd0aCgoZXJyLCBsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGdldEhlYWRlcnMoZGF0YSlcbiAgICAgIC50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWA7XG4gICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIGRhdGEsIGhlYWRlcnMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pO1xuICB9LFxuICBnZXRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRDb25maWcucmVhZF9rZXl9YDtcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gO1xuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gO1xuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gO1xuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpO1xuICB9LFxuICBnZXRTaW5nbGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vbWVkaWEvJHtwYXJhbXMuaWR9P3JlYWRfa2V5PSR7YnVja2V0Q29uZmlnLnJlYWRfa2V5fWA7XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgfSxcbiAgZGVsZXRlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke2J1Y2tldENvbmZpZy51cml9L2J1Y2tldHMvJHtidWNrZXRDb25maWcuc2x1Z30vbWVkaWEvJHtcbiAgICAgIHBhcmFtcy5pZFxuICAgIH0ke3BhcmFtcy50cmlnZ2VyX3dlYmhvb2sgPyAnP3RyaWdnZXJfd2ViaG9vaz10cnVlJyA6ICcnfWA7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGJ1Y2tldENvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRDb25maWcud3JpdGVfa2V5fWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWFNZXRob2RzO1xuIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNyQyxJQUFNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztBQUNsRSxlQUEyQkEsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0VBQXZERSxjQUFjLFlBQWRBLGNBQWM7QUFDdEIsSUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUMscUJBQXFCLENBQUM7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCLENBQUlDLFlBQVk7RUFBQSxPQUFNO0lBQzNDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsSUFBSSxnQkFBQ0MsS0FBSyxFQUFFO01BQ1YsSUFBSSxDQUFDQyxRQUFRLGFBQU1ILFlBQVksQ0FBQ0ksR0FBRyxzQkFDakNKLFlBQVksQ0FBQ0ssSUFBSSw2QkFDQUwsWUFBWSxDQUFDTSxRQUFRLFNBQ3RDSixLQUFLLG9CQUFhSyxTQUFTLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxLQUFLLENBQUMsQ0FBQyxJQUFLLEVBQUUsQ0FDekQ7TUFDRixPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFUSxPQUFPLG1CQUFDUixLQUFLLEVBQUU7TUFDYixJQUFJLENBQUNDLFFBQVEsYUFBTUgsWUFBWSxDQUFDSSxHQUFHLHNCQUFZSixZQUFZLENBQUNLLElBQUksb0JBQVVILEtBQUssQ0FBQ1MsRUFBRSx1QkFBYVgsWUFBWSxDQUFDTSxRQUFRLENBQUU7TUFDdEgsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNEO0FBQ0Y7QUFDQTtBQUNB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