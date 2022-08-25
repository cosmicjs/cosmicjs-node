"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('regenerator-runtime/runtime');

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var promiser = require('../helpers/promiser');

var headers;

var addParamsToObjectsEndpoint = function addParamsToObjectsEndpoint(endpoint, params) {
  if (params && params.limit) {
    endpoint += "&limit=".concat(params.limit);
  }

  if (params && params.skip) {
    endpoint += "&skip=".concat(params.skip);
  }

  if (params && params.status) {
    endpoint += "&status=".concat(params.status);
  }

  if (params && params.after) {
    endpoint += "&after=".concat(params.after);
  }

  if (params && params.sort) {
    endpoint += "&sort=".concat(params.sort);
  }

  if (params && params.show_metafields) {
    endpoint += "&show_metafields=".concat(params.show_metafields);
  }

  if (params && params.pretty) {
    endpoint += "&pretty=".concat(params.pretty);
  }

  if (params && params.props) {
    endpoint += "&props=".concat(params.props);
  }

  if (params && params.query) {
    endpoint += "&query=".concat(encodeURI(JSON.stringify(params.query)));
  }

  if (params && typeof params.use_cache !== 'undefined') {
    endpoint += "&use_cache=".concat(params.use_cache);
  }

  return endpoint;
};

var objectsChainMethods = function objectsChainMethods(bucket_config) {
  return {
    // Get
    find: function find(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return this;
    },
    // findOne
    findOne: function findOne(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(query.id, "?read_key=").concat(bucket_config.read_key);
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
    status: function status(_status) {
      this.endpoint += "&status=".concat(_status);
      return this;
    },
    after: function after(_after) {
      this.endpoint += "&after=".concat(_after);
      return this;
    },
    showMetafields: function showMetafields(show_metafields) {
      this.endpoint += "&show_metafields=".concat(show_metafields);
      return this;
    },
    useCache: function useCache(use_cache) {
      this.endpoint += "&use_cache=".concat(use_cache);
      return this;
    },
    then: function then(resolve, reject) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Add
    insertOne: function insertOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var endpoint;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects");

                if (bucket_config.write_key) {
                  headers = {
                    Authorization: "Bearer ".concat(bucket_config.write_key)
                  };
                }

                _context2.next = 4;
                return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // Edit
    updateOne: function updateOne(params, set) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var endpoint, updates;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id);
                updates = set.$set;

                if (bucket_config.write_key) {
                  headers = {
                    Authorization: "Bearer ".concat(bucket_config.write_key)
                  };
                }

                _context3.next = 5;
                return requestHandler(HTTP_METHODS.PATCH, endpoint, updates, headers);

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // Delete
    deleteOne: function deleteOne(params) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var endpoint;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id).concat(params.trigger_webhook ? '?trigger_webhook=true' : '');

                if (bucket_config.write_key) {
                  headers = {
                    Authorization: "Bearer ".concat(bucket_config.write_key)
                  };
                }

                return _context4.abrupt("return", requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  };
};

var objectMethods = function objectMethods(bucket_config) {
  return {
    objects: objectsChainMethods(bucket_config),
    getObjects: function getObjects(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key);
      endpoint = addParamsToObjectsEndpoint(endpoint, params);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    getObject: function getObject(params) {
      if (!params) {
        throw new Error('Must supply params object with object id');
      }

      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id, "?read_key=").concat(bucket_config.read_key);

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
    getObjectRevisions: function getObjectRevisions(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id, "/revisions?read_key=").concat(bucket_config.read_key);
      endpoint = addParamsToObjectsEndpoint(endpoint, params);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    getMergeRequestObjects: function getMergeRequestObjects(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/merge-requests/").concat(params.id, "/objects?read_key=").concat(bucket_config.read_key);
      endpoint = addParamsToObjectsEndpoint(endpoint, params);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    addObject: function addObject(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects");

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
    },
    addObjectRevision: function addObjectRevision(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id, "/revisions");
      delete params.id;
      delete params.type;

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
    },
    editObject: function editObject(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id);

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      } // Remove id


      delete params.id;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
    },
    getObjectMetafields: function getObjectMetafields(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id, "/metafields?read_key=").concat(bucket_config.read_key);
      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    /// DEPRECATED
    editObjectMetafields: function editObjectMetafields(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id, "/metafields");

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      } // Remove id


      delete params.id;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
    },
    editObjectMetafield: function editObjectMetafield(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id, "/metafields/").concat(params.key);

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      } // Remove id


      delete params.id;
      delete params.key;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
    },
    deleteObject: function deleteObject(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id);

      if (bucket_config.write_key) {
        headers = {
          Authorization: "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};

module.exports = objectMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiVVJJIiwiSFRUUF9NRVRIT0RTIiwicmVxdWVzdEhhbmRsZXIiLCJwcm9taXNlciIsImhlYWRlcnMiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsImVuZHBvaW50IiwicGFyYW1zIiwibGltaXQiLCJza2lwIiwic3RhdHVzIiwiYWZ0ZXIiLCJzb3J0Iiwic2hvd19tZXRhZmllbGRzIiwicHJldHR5IiwicHJvcHMiLCJxdWVyeSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VfY2FjaGUiLCJvYmplY3RzQ2hhaW5NZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImZpbmQiLCJzbHVnIiwicmVhZF9rZXkiLCJmaW5kT25lIiwiaWQiLCJzaG93TWV0YWZpZWxkcyIsInVzZUNhY2hlIiwidGhlbiIsInJlc29sdmUiLCJyZWplY3QiLCJyZXMiLCJlcnIiLCJpbnNlcnRPbmUiLCJ3cml0ZV9rZXkiLCJBdXRob3JpemF0aW9uIiwiUE9TVCIsInVwZGF0ZU9uZSIsInNldCIsInVwZGF0ZXMiLCIkc2V0IiwiUEFUQ0giLCJkZWxldGVPbmUiLCJ0cmlnZ2VyX3dlYmhvb2siLCJERUxFVEUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0cyIsImdldE9iamVjdHMiLCJHRVQiLCJnZXRPYmplY3QiLCJFcnJvciIsImdldE9iamVjdFJldmlzaW9ucyIsImdldE1lcmdlUmVxdWVzdE9iamVjdHMiLCJhZGRPYmplY3QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiZ2V0T2JqZWN0TWV0YWZpZWxkcyIsImVkaXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZCIsImtleSIsImRlbGV0ZU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYnVja2V0L29iamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnKVxuXG5jb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuY29uc3QgcHJvbWlzZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Byb21pc2VyJylcblxubGV0IGhlYWRlcnNcblxuY29uc3QgYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQgPSAoZW5kcG9pbnQsIHBhcmFtcykgPT4ge1xuICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5hZnRlcikge1xuICAgIGVuZHBvaW50ICs9IGAmYWZ0ZXI9JHtwYXJhbXMuYWZ0ZXJ9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICBlbmRwb2ludCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd19tZXRhZmllbGRzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtwYXJhbXMuc2hvd19tZXRhZmllbGRzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICBlbmRwb2ludCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVuZHBvaW50ICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gXG4gIH1cbiAgcmV0dXJuIGVuZHBvaW50XG59XG5cbmNvbnN0IG9iamVjdHNDaGFpbk1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLy8gR2V0XG4gIGZpbmQocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX0ke3F1ZXJ5ID8gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShxdWVyeSkpfWAgOiAnJ31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgLy8gZmluZE9uZVxuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3F1ZXJ5LmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnByb3BzPSR7cHJvcHN9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgbGltaXQobGltaXQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmbGltaXQ9JHtsaW1pdH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc2tpcChza2lwKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNraXA9JHtza2lwfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBzdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnN0YXR1cz0ke3N0YXR1c31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgYWZ0ZXIoYWZ0ZXIpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmYWZ0ZXI9JHthZnRlcn1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc2hvd01ldGFmaWVsZHMoc2hvd19tZXRhZmllbGRzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNob3dfbWV0YWZpZWxkcz0ke3Nob3dfbWV0YWZpZWxkc31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgdXNlQ2FjaGUodXNlX2NhY2hlKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3VzZV9jYWNoZX1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgYXN5bmMgdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlcih0aGlzLmVuZHBvaW50KS50aGVuKChyZXMpID0+IHJlc29sdmUocmVzLCBudWxsKSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUobnVsbCwgZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIEFkZFxuICBhc3luYyBpbnNlcnRPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGF3YWl0IHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKSlcbiAgfSxcbiAgLy8gRWRpdFxuICBhc3luYyB1cGRhdGVPbmUocGFyYW1zLCBzZXQpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgY29uc3QgdXBkYXRlcyA9IHNldC4kc2V0XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGF3YWl0IHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHVwZGF0ZXMsIGhlYWRlcnMpKVxuICB9LFxuICAvLyBEZWxldGVcbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5jb25zdCBvYmplY3RNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIG9iamVjdHM6IG9iamVjdHNDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGdldE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBwYXJhbXMgb2JqZWN0IHdpdGggb2JqZWN0IGlkJylcbiAgICB9XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3RSZXZpc2lvbnM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9ucz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE1lcmdlUmVxdWVzdE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lcmdlLXJlcXVlc3RzLyR7cGFyYW1zLmlkfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgYWRkT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2BcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy50eXBlXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZ2V0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICAvLy8gREVQUkVDQVRFRFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3RNZXRhZmllbGQ6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcy8ke3BhcmFtcy5rZXl9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIGRlbGV0ZSBwYXJhbXMua2V5XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZGVsZXRlT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdE1ldGhvZHNcbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQ0FDQSxvSjs7Ozs7O0FBREFBLE9BQU8sQ0FBQyw2QkFBRCxDQUFQOztBQUVBLGVBQWdCQSxPQUFPLENBQUMsc0JBQUQsQ0FBdkI7QUFBQSxJQUFRQyxHQUFSLFlBQVFBLEdBQVI7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHRixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O0FBQ0EsZ0JBQTJCQSxPQUFPLENBQUMsNEJBQUQsQ0FBbEM7QUFBQSxJQUFRRyxjQUFSLGFBQVFBLGNBQVI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHSixPQUFPLENBQUMscUJBQUQsQ0FBeEI7O0FBRUEsSUFBSUssT0FBSjs7QUFFQSxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxFQUFzQjtFQUN2RCxJQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsS0FBckIsRUFBNEI7SUFDMUJGLFFBQVEscUJBQWND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