"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('regenerator-runtime/runtime');

var FormData = require('form-data');

var _require = require('../helpers/constants'),
    URI = _require.URI,
    UPLOAD_API_URL = _require.UPLOAD_API_URL,
    API_VERSION = _require.API_VERSION;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var promiser = require('../helpers/promiser');

var mediaChainMethods = function mediaChainMethods(bucket_config) {
  return {
    // Get
    find: function find(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media?read_key=").concat(bucket_config.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return this;
    },
    // findOne
    findOne: function findOne(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(query.id, "?read_key=").concat(bucket_config.read_key);
      return this;
    },
    props: function props(_props) {
      this.endpoint += "&props=".concat(_props);
      return this;
    },
    sort: function sort(_sort) {
      this.endpoint += "&sort=".concat(_sort);
      return this;
    },
    limit: function limit(_limit) {
      this.endpoint += "&limit=".concat(_limit);
      return this;
    },
    skip: function skip(_skip) {
      this.endpoint += "&skip=".concat(_skip);
      return this;
    },
    // insertOne
    insertOne: function insertOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var endpoint, data, getHeaders;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                endpoint = "".concat(UPLOAD_API_URL, "/").concat(API_VERSION, "/buckets/").concat(bucket_config.slug, "/media");
                data = new FormData();

                if (params.media.buffer) {
                  data.append('media', params.media.buffer, params.media.originalname);
                } else {
                  data.append('media', params.media, params.media.name);
                }

                if (bucket_config.write_key) {
                  data.append('write_key', bucket_config.write_key);
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
                  headers.Authorization = "Bearer ".concat(bucket_config.write_key);
                  return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
                })["catch"](function (error) {
                  throw error.response.data;
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Delete
    deleteOne: function deleteOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var endpoint, headers;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');

                if (bucket_config.write_key) {
                  headers = {
                    Authorization: "Bearer ".concat(bucket_config.write_key)
                  };
                }

                return _context2.abrupt("return", requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    then: function then(resolve, reject) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
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
          }
        }, _callee3);
      }))();
    }
  };
};

var mediaMethods = function mediaMethods(bucket_config) {
  return {
    media: mediaChainMethods(bucket_config),
    addMedia: function addMedia(params) {
      var endpoint = "".concat(UPLOAD_API_URL, "/").concat(API_VERSION, "/buckets/").concat(bucket_config.slug, "/media");
      var data = new FormData();

      if (params.media.buffer) {
        data.append('media', params.media.buffer, params.media.originalname);
      } else {
        data.append('media', params.media, params.media.name);
      }

      if (bucket_config.write_key) {
        data.append('write_key', bucket_config.write_key);
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
        headers.Authorization = "Bearer ".concat(bucket_config.write_key);
        return requestHandler(HTTP_METHODS.POST, endpoint, data, headers);
      })["catch"](function (error) {
        throw error.response.data;
      });
    },
    getMedia: function getMedia(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media?read_key=").concat(bucket_config.read_key);

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
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(params.id, "?read_key=").concat(bucket_config.read_key);

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    deleteMedia: function deleteMedia(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/media/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');
      var headers;

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};

module.exports = mediaMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiRm9ybURhdGEiLCJVUkkiLCJVUExPQURfQVBJX1VSTCIsIkFQSV9WRVJTSU9OIiwiSFRUUF9NRVRIT0RTIiwicmVxdWVzdEhhbmRsZXIiLCJwcm9taXNlciIsIm1lZGlhQ2hhaW5NZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImZpbmQiLCJxdWVyeSIsImVuZHBvaW50Iiwic2x1ZyIsInJlYWRfa2V5IiwiZW5jb2RlVVJJIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbmRPbmUiLCJpZCIsInByb3BzIiwic29ydCIsImxpbWl0Iiwic2tpcCIsImluc2VydE9uZSIsInBhcmFtcyIsImRhdGEiLCJtZWRpYSIsImJ1ZmZlciIsImFwcGVuZCIsIm9yaWdpbmFsbmFtZSIsIm5hbWUiLCJ3cml0ZV9rZXkiLCJmb2xkZXIiLCJtZXRhZGF0YSIsInRyaWdnZXJfd2ViaG9vayIsInRvU3RyaW5nIiwiZ2V0SGVhZGVycyIsImZvcm0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldExlbmd0aCIsImVyciIsImxlbmd0aCIsImhlYWRlcnMiLCJ0aGVuIiwiQXV0aG9yaXphdGlvbiIsIlBPU1QiLCJlcnJvciIsInJlc3BvbnNlIiwiZGVsZXRlT25lIiwiREVMRVRFIiwicmVzIiwibWVkaWFNZXRob2RzIiwiYWRkTWVkaWEiLCJnZXRNZWRpYSIsIkdFVCIsImdldFNpbmdsZU1lZGlhIiwiZGVsZXRlTWVkaWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1Y2tldC9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnKVxuXG5jb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpXG5jb25zdCB7IFVSSSwgVVBMT0FEX0FQSV9VUkwsIEFQSV9WRVJTSU9OIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbnN0YW50cycpXG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2h0dHBfbWV0aG9kcycpXG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RfaGFuZGxlcicpXG5jb25zdCBwcm9taXNlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcHJvbWlzZXInKVxuXG5jb25zdCBtZWRpYUNoYWluTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICAvLyBHZXRcbiAgZmluZChxdWVyeSkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX0ke3F1ZXJ5ID8gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShxdWVyeSkpfWAgOiAnJ31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgLy8gZmluZE9uZVxuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWEvJHtxdWVyeS5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBzb3J0KHNvcnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc29ydD0ke3NvcnR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNraXAoc2tpcCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZza2lwPSR7c2tpcH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgLy8gaW5zZXJ0T25lXG4gIGFzeW5jIGluc2VydE9uZShwYXJhbXMpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VQTE9BRF9BUElfVVJMfS8ke0FQSV9WRVJTSU9OfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYWBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSlcbiAgICB9XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcilcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50cmlnZ2VyX3dlYmhvb2spIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd0cmlnZ2VyX3dlYmhvb2snLCBwYXJhbXMudHJpZ2dlcl93ZWJob29rLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoKGZvcm0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9XG4gICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIClcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycylcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhXG4gICAgICB9KVxuICB9LFxuICAvLyBEZWxldGVcbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0ke3BhcmFtcy50cmlnZ2VyX3dlYmhvb2sgPyAnP3RyaWdnZXJfd2ViaG9vaz10cnVlJyA6ICcnfWBcbiAgICBsZXQgaGVhZGVyc1xuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9LFxuICBhc3luYyB0aGVuKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHByb21pc2VyKHRoaXMuZW5kcG9pbnQpLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMsIG51bGwpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHJlamVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShudWxsLCBlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuY29uc3QgbWVkaWFNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIG1lZGlhOiBtZWRpYUNoYWluTWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgYWRkTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VQTE9BRF9BUElfVVJMfS8ke0FQSV9WRVJTSU9OfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYWBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBpZiAocGFyYW1zLm1lZGlhLmJ1ZmZlcikge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLmJ1ZmZlciwgcGFyYW1zLm1lZGlhLm9yaWdpbmFsbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhJywgcGFyYW1zLm1lZGlhLCBwYXJhbXMubWVkaWEubmFtZSlcbiAgICB9XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBkYXRhLmFwcGVuZCgnd3JpdGVfa2V5JywgYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpXG4gICAgfVxuICAgIGlmIChwYXJhbXMuZm9sZGVyKSB7XG4gICAgICBkYXRhLmFwcGVuZCgnZm9sZGVyJywgcGFyYW1zLmZvbGRlcilcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgZGF0YS5hcHBlbmQoJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zLm1ldGFkYXRhKSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50cmlnZ2VyX3dlYmhvb2spIHtcbiAgICAgIGRhdGEuYXBwZW5kKCd0cmlnZ2VyX3dlYmhvb2snLCBwYXJhbXMudHJpZ2dlcl93ZWJob29rLnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIGNvbnN0IGdldEhlYWRlcnMgPSAoKGZvcm0pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChwYXJhbXMubWVkaWEuYnVmZmVyKSB7XG4gICAgICAgIGZvcm0uZ2V0TGVuZ3RoKChlcnIsIGxlbmd0aCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpXG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtTGVuZ3RoJzogbGVuZ3RoLCAuLi5mb3JtLmdldEhlYWRlcnMoKSB9XG4gICAgICAgICAgcmVzb2x2ZShoZWFkZXJzKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIClcbiAgICByZXR1cm4gZ2V0SGVhZGVycyhkYXRhKVxuICAgICAgLnRoZW4oKGhlYWRlcnMpID0+IHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgZGF0YSwgaGVhZGVycylcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5yZXNwb25zZS5kYXRhXG4gICAgICB9KVxuICB9LFxuICBnZXRNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVkaWE/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0U2luZ2xlTWVkaWE6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lZGlhLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBkZWxldGVNZWRpYTogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZWRpYS8ke3BhcmFtcy5pZH0ke3BhcmFtcy50cmlnZ2VyX3dlYmhvb2sgPyAnP3RyaWdnZXJfd2ViaG9vaz10cnVlJyA6ICcnfWBcbiAgICBsZXQgaGVhZGVyc1xuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhTWV0aG9kc1xuIl0sIm1hcHBpbmdzIjoiOzs7OytDQUNBLG9KOzs7Ozs7Ozs7Ozs7QUFEQUEsT0FBTyxDQUFDLDZCQUFELENBQVA7O0FBRUEsSUFBTUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF4Qjs7QUFDQSxlQUE2Q0EsT0FBTyxDQUFDLHNCQUFELENBQXBEO0FBQUEsSUFBUUUsR0FBUixZQUFRQSxHQUFSO0FBQUEsSUFBYUMsY0FBYixZQUFhQSxjQUFiO0FBQUEsSUFBNkJDLFdBQTdCLFlBQTZCQSxXQUE3Qjs7QUFDQSxJQUFNQyxZQUFZLEdBQUdMLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7QUFDQSxnQkFBMkJBLE9BQU8sQ0FBQyw0QkFBRCxDQUFsQztBQUFBLElBQVFNLGNBQVIsYUFBUUEsY0FBUjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdQLE9BQU8sQ0FBQyxxQkFBRCxDQUF4Qjs7QUFFQSxJQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLGFBQUQ7RUFBQSxPQUFvQjtJQUM1QztJQUNBQyxJQUY0QyxnQkFFdkNDLEtBRnVDLEVBRWhDO01BQ1YsS0FBS0MsUUFBTCxhQUFtQlYsR0FBbkIsc0JBQWtDTyxhQUFhLENBQUNJ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