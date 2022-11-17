"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

require('regenerator-runtime/runtime');

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var promiser = require('../helpers/promiser');

var headers;

var addParamsToObjectsEndpoint = function addParamsToObjectsEndpoint(endpoint, params) {
  var ep = endpoint;

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

var FindChaining = /*#__PURE__*/function () {
  function FindChaining(endpoint) {
    _classCallCheck(this, FindChaining);

    this.endpoint = endpoint;
  }

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
    value: function showMetafields(show_metafields) {
      this.endpoint += "&show_metafields=".concat(show_metafields);
      return this;
    }
  }, {
    key: "useCache",
    value: function useCache(use_cache) {
      this.endpoint += "&use_cache=".concat(use_cache);
      return this;
    }
  }, {
    key: "then",
    value: function () {
      var _then = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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

var objectsChainMethods = function objectsChainMethods(bucket_config) {
  return {
    // Get
    find: function find(query) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return new FindChaining(endpoint);
    },
    // findOne
    findOne: function findOne(query) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(query.id, "?read_key=").concat(bucket_config.read_key);
      return new FindChaining(endpoint);
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

                return _context2.abrupt("return", requestHandler(HTTP_METHODS.POST, endpoint, params, headers));

              case 3:
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

                return _context3.abrupt("return", requestHandler(HTTP_METHODS.PATCH, endpoint, updates, headers));

              case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiVVJJIiwiSFRUUF9NRVRIT0RTIiwicmVxdWVzdEhhbmRsZXIiLCJwcm9taXNlciIsImhlYWRlcnMiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsImVuZHBvaW50IiwicGFyYW1zIiwiZXAiLCJsaW1pdCIsInNraXAiLCJzdGF0dXMiLCJhZnRlciIsInNvcnQiLCJzaG93X21ldGFmaWVsZHMiLCJwcmV0dHkiLCJwcm9wcyIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZV9jYWNoZSIsIkZpbmRDaGFpbmluZyIsImRlcHRoIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJvYmplY3RzQ2hhaW5NZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImZpbmQiLCJzbHVnIiwicmVhZF9rZXkiLCJmaW5kT25lIiwiaWQiLCJpbnNlcnRPbmUiLCJ3cml0ZV9rZXkiLCJBdXRob3JpemF0aW9uIiwiUE9TVCIsInVwZGF0ZU9uZSIsInNldCIsInVwZGF0ZXMiLCIkc2V0IiwiUEFUQ0giLCJkZWxldGVPbmUiLCJ0cmlnZ2VyX3dlYmhvb2siLCJERUxFVEUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0cyIsImdldE9iamVjdHMiLCJHRVQiLCJnZXRPYmplY3QiLCJFcnJvciIsImdldE9iamVjdFJldmlzaW9ucyIsImdldE1lcmdlUmVxdWVzdE9iamVjdHMiLCJhZGRPYmplY3QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiZ2V0T2JqZWN0TWV0YWZpZWxkcyIsImVkaXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZCIsImtleSIsImRlbGV0ZU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYnVja2V0L29iamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnKVxuXG5jb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuY29uc3QgcHJvbWlzZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Byb21pc2VyJylcblxubGV0IGhlYWRlcnNcblxuY29uc3QgYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQgPSAoZW5kcG9pbnQsIHBhcmFtcykgPT4ge1xuICBsZXQgZXAgPSBlbmRwb2ludFxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgIGVwICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICBlcCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgZXAgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5hZnRlcikge1xuICAgIGVwICs9IGAmYWZ0ZXI9JHtwYXJhbXMuYWZ0ZXJ9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICBlcCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd19tZXRhZmllbGRzKSB7XG4gICAgZXAgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtwYXJhbXMuc2hvd19tZXRhZmllbGRzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICBlcCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgZXAgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICBlcCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVwICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gXG4gIH1cbiAgcmV0dXJuIGVwXG59XG5cbmNsYXNzIEZpbmRDaGFpbmluZyB7XG4gIGNvbnN0cnVjdG9yKGVuZHBvaW50KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50XG4gIH1cblxuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVwdGgoZGVwdGgpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmZGVwdGg9JHtkZXB0aH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBza2lwKHNraXApIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnN0YXR1cz0ke3N0YXR1c31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFmdGVyKGFmdGVyKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmFmdGVyPSR7YWZ0ZXJ9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzaG93TWV0YWZpZWxkcyhzaG93X21ldGFmaWVsZHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7c2hvd19tZXRhZmllbGRzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdXNlQ2FjaGUodXNlX2NhY2hlKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3VzZV9jYWNoZX1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJvbWlzZXIodGhpcy5lbmRwb2ludCkudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcywgbnVsbCkpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKG51bGwsIGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IG9iamVjdHNDaGFpbk1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLy8gR2V0XG4gIGZpbmQocXVlcnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9JHtxdWVyeSA/IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocXVlcnkpKX1gIDogJyd9YFxuICAgIHJldHVybiBuZXcgRmluZENoYWluaW5nKGVuZHBvaW50KVxuICB9LFxuICAvLyBmaW5kT25lXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3F1ZXJ5LmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIHJldHVybiBuZXcgRmluZENoYWluaW5nKGVuZHBvaW50KVxuICB9LFxuICAvLyBBZGRcbiAgYXN5bmMgaW5zZXJ0T25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICAvLyBFZGl0XG4gIGFzeW5jIHVwZGF0ZU9uZShwYXJhbXMsIHNldCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBjb25zdCB1cGRhdGVzID0gc2V0LiRzZXRcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCB1cGRhdGVzLCBoZWFkZXJzKVxuICB9LFxuICAvLyBEZWxldGVcbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5jb25zdCBvYmplY3RNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIG9iamVjdHM6IG9iamVjdHNDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGdldE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBwYXJhbXMgb2JqZWN0IHdpdGggb2JqZWN0IGlkJylcbiAgICB9XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3RSZXZpc2lvbnM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9ucz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE1lcmdlUmVxdWVzdE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lcmdlLXJlcXVlc3RzLyR7cGFyYW1zLmlkfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgYWRkT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2BcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy50eXBlXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZ2V0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICAvLy8gREVQUkVDQVRFRFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3RNZXRhZmllbGQ6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcy8ke3BhcmFtcy5rZXl9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIGRlbGV0ZSBwYXJhbXMua2V5XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZGVsZXRlT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdE1ldGhvZHNcbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQ0FDQSxvSjs7Ozs7Ozs7Ozs7O0FBREFBLE9BQU8sQ0FBQyw2QkFBRCxDQUFQOztBQUVBLGVBQWdCQSxPQUFPLENBQUMsc0JBQUQsQ0FBdkI7QUFBQSxJQUFRQyxHQUFSLFlBQVFBLEdBQVI7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHRixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O0FBQ0EsZ0JBQTJCQSxPQUFPLENBQUMsNEJBQUQsQ0FBbEM7QUFBQSxJQUFRRyxjQUFSLGFBQVFBLGNBQVI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFH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