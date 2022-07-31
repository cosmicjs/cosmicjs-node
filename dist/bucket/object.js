"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

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

var findObjectsChain = function findObjectsChain(bucket_config) {
  return {
    find: function find(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key, "&query=").concat(encodeURI(JSON.stringify(query)));
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
    toArray: function () {
      var _toArray = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return requestHandler(HTTP_METHODS.GET, this.endpoint);

              case 2:
                return _context.abrupt("return", _context.sent.objects);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toArray() {
        return _toArray.apply(this, arguments);
      }

      return toArray;
    }(),
    done: function () {
      var _done = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", requestHandler(HTTP_METHODS.GET, this.endpoint));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function done() {
        return _done.apply(this, arguments);
      }

      return done;
    }()
  };
};

var objectMethods = function objectMethods(bucket_config) {
  return {
    objects: findObjectsChain(bucket_config),
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
          "Authorization": "Bearer ".concat(bucket_config.write_key)
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
          "Authorization": "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
    },
    editObject: function editObject(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id);

      if (bucket_config.write_key) {
        headers = {
          "Authorization": "Bearer ".concat(bucket_config.write_key)
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
          "Authorization": "Bearer ".concat(bucket_config.write_key)
        };
      } // Remove id


      delete params.id;
      return requestHandler(HTTP_METHODS.PATCH, endpoint, params, headers);
    },
    editObjectMetafield: function editObjectMetafield(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(params.id, "/metafields/").concat(params.key);

      if (bucket_config.write_key) {
        headers = {
          "Authorization": "Bearer ".concat(bucket_config.write_key)
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
          "Authorization": "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.DELETE, endpoint, null, headers);
    }
  };
};

module.exports = objectMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiVVJJIiwiSFRUUF9NRVRIT0RTIiwicmVxdWVzdEhhbmRsZXIiLCJoZWFkZXJzIiwiYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQiLCJlbmRwb2ludCIsInBhcmFtcyIsImxpbWl0Iiwic2tpcCIsInN0YXR1cyIsImFmdGVyIiwic29ydCIsInNob3dfbWV0YWZpZWxkcyIsInByZXR0eSIsInByb3BzIiwicXVlcnkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlX2NhY2hlIiwiZmluZE9iamVjdHNDaGFpbiIsImJ1Y2tldF9jb25maWciLCJmaW5kIiwic2x1ZyIsInJlYWRfa2V5IiwidG9BcnJheSIsIkdFVCIsIm9iamVjdHMiLCJkb25lIiwib2JqZWN0TWV0aG9kcyIsImdldE9iamVjdHMiLCJnZXRPYmplY3QiLCJFcnJvciIsImlkIiwiZ2V0T2JqZWN0UmV2aXNpb25zIiwiZ2V0TWVyZ2VSZXF1ZXN0T2JqZWN0cyIsImFkZE9iamVjdCIsIndyaXRlX2tleSIsIlBPU1QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiUEFUQ0giLCJnZXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZHMiLCJlZGl0T2JqZWN0TWV0YWZpZWxkIiwia2V5IiwiZGVsZXRlT2JqZWN0IiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgVVJJIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbnN0YW50cycpXG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2h0dHBfbWV0aG9kcycpXG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RfaGFuZGxlcicpXG5sZXQgaGVhZGVycztcblxuY29uc3QgYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQgPSAoZW5kcG9pbnQsIHBhcmFtcykgPT4ge1xuICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5hZnRlcikge1xuICAgIGVuZHBvaW50ICs9IGAmYWZ0ZXI9JHtwYXJhbXMuYWZ0ZXJ9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICBlbmRwb2ludCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd19tZXRhZmllbGRzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtwYXJhbXMuc2hvd19tZXRhZmllbGRzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICBlbmRwb2ludCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVuZHBvaW50ICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gXG4gIH1cbiAgcmV0dXJuIGVuZHBvaW50XG59XG5cbmNvbnN0IGZpbmRPYmplY3RzQ2hhaW4gPSAoYnVja2V0X2NvbmZpZykgPT4ge1xuICByZXR1cm4ge1xuICAgIGZpbmQ6IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgdGhpcy5lbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9JnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSl9YFxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIHByb3BzOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWBcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBzb3J0OiBmdW5jdGlvbiAoc29ydCkge1xuICAgICAgdGhpcy5lbmRwb2ludCArPSBgJnNvcnQ9JHtzb3J0fWBcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBsaW1pdDogZnVuY3Rpb24gKGxpbWl0KSB7XG4gICAgICB0aGlzLmVuZHBvaW50ICs9IGAmbGltaXQ9JHtsaW1pdH1gXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgc2tpcDogZnVuY3Rpb24gKHNraXApIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZza2lwPSR7c2tpcH1gXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgdG9BcnJheTogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChhd2FpdCByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCB0aGlzLmVuZHBvaW50KSkub2JqZWN0c1xuICAgIH0sXG4gICAgZG9uZTogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIHRoaXMuZW5kcG9pbnQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9iamVjdE1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgb2JqZWN0czogZmluZE9iamVjdHNDaGFpbihidWNrZXRfY29uZmlnKSxcbiAgZ2V0T2JqZWN0czogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3VwcGx5IHBhcmFtcyBvYmplY3Qgd2l0aCBvYmplY3QgaWQnKVxuICAgIH1cbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE9iamVjdFJldmlzaW9uczogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vcmV2aXNpb25zP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0TWVyZ2VSZXF1ZXN0T2JqZWN0czogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVyZ2UtcmVxdWVzdHMvJHtwYXJhbXMuaWR9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBhZGRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0c2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2BcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy50eXBlXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBlZGl0T2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpZFxuICAgIGRlbGV0ZSBwYXJhbXMuaWQ7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZ2V0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KTtcbiAgfSxcbiAgLy8vIERFUFJFQ0FURURcbiAgZWRpdE9iamVjdE1ldGFmaWVsZHM6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkc2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkO1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3RNZXRhZmllbGQ6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcy8ke3BhcmFtcy5rZXl9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpZFxuICAgIGRlbGV0ZSBwYXJhbXMuaWQ7XG4gICAgZGVsZXRlIHBhcmFtcy5rZXk7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZGVsZXRlT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RNZXRob2RzXG4iXSwibWFwcGluZ3MiOiI7Ozs7K0NBQ0Esb0o7Ozs7OztBQURBLGVBQWdCQSxPQUFPLENBQUMsc0JBQUQsQ0FBdkI7QUFBQSxJQUFRQyxHQUFSLFlBQVFBLEdBQVI7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHRixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O0FBQ0EsZ0JBQTJCQSxPQUFPLENBQUMsNEJBQUQsQ0FBbEM7QUFBQSxJQUFRRyxjQUFSLGFBQVFBLGNBQVI7O0FBQ0EsSUFBSUMsT0FBSjs7QUFFQSxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxFQUFzQjtFQUN2RCxJQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsS0FBckIsRUFBNEI7SUFDMUJGLFFBQVEscUJBQWNDLE1BQU0sQ0FBQ0MsS0FBckIsQ0FBUjtFQUNEOztFQUNELElBQUlELE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxJQUFyQixFQUEyQjtJQUN6QkgsUUFBUSxvQkFBYUMsTUFB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