"use strict";

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

var objectsChainMethods = function objectsChainMethods(bucket_config) {
  return {
    // Get
    find: function find(query) {
      this.endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
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
    then: function then(resolve) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resolve(new Promise(function (res) {
                  res(requestHandler(HTTP_METHODS.GET, _this.endpoint));
                }));

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
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var endpoint;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var endpoint, updates;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var endpoint;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImhlYWRlcnMiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsImVuZHBvaW50IiwicGFyYW1zIiwibGltaXQiLCJza2lwIiwic3RhdHVzIiwiYWZ0ZXIiLCJzb3J0Iiwic2hvd19tZXRhZmllbGRzIiwicHJldHR5IiwicHJvcHMiLCJxdWVyeSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VfY2FjaGUiLCJvYmplY3RzQ2hhaW5NZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImZpbmQiLCJzbHVnIiwicmVhZF9rZXkiLCJzaG93TWV0YWZpZWxkcyIsInVzZUNhY2hlIiwidGhlbiIsInJlc29sdmUiLCJQcm9taXNlIiwicmVzIiwiR0VUIiwiaW5zZXJ0T25lIiwid3JpdGVfa2V5IiwiQXV0aG9yaXphdGlvbiIsIlBPU1QiLCJ1cGRhdGVPbmUiLCJzZXQiLCJpZCIsInVwZGF0ZXMiLCIkc2V0IiwiUEFUQ0giLCJkZWxldGVPbmUiLCJ0cmlnZ2VyX3dlYmhvb2siLCJERUxFVEUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0cyIsImdldE9iamVjdHMiLCJnZXRPYmplY3QiLCJFcnJvciIsImdldE9iamVjdFJldmlzaW9ucyIsImdldE1lcmdlUmVxdWVzdE9iamVjdHMiLCJhZGRPYmplY3QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiZ2V0T2JqZWN0TWV0YWZpZWxkcyIsImVkaXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZCIsImtleSIsImRlbGV0ZU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztlQUFnQkEsT0FBTyxDQUFDLHNCQUFELEM7SUFBZkMsRyxZQUFBQSxHOztBQUNSLElBQU1DLFlBQVks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QUFDQyxPQUFQLEdBQWlCakIsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5sZXQgaGVhZGVyc1xuXG5jb25zdCBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCA9IChlbmRwb2ludCwgcGFyYW1zKSA9PiB7XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLmFmdGVyKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZhZnRlcj0ke3BhcmFtcy5hZnRlcn1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc29ydCkge1xuICAgIGVuZHBvaW50ICs9IGAmc29ydD0ke3BhcmFtcy5zb3J0fWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zaG93X21ldGFmaWVsZHMpIHtcbiAgICBlbmRwb2ludCArPSBgJnNob3dfbWV0YWZpZWxkcz0ke3BhcmFtcy5zaG93X21ldGFmaWVsZHN9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXR0eSkge1xuICAgIGVuZHBvaW50ICs9IGAmcHJldHR5PSR7cGFyYW1zLnByZXR0eX1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgfVxuICByZXR1cm4gZW5kcG9pbnRcbn1cblxuY29uc3Qgb2JqZWN0c0NoYWluTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICAvLyBHZXRcbiAgZmluZChxdWVyeSkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fSR7cXVlcnkgPyBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSl9YCA6ICcnfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBzb3J0KHNvcnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc29ydD0ke3NvcnR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNraXAoc2tpcCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZza2lwPSR7c2tpcH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtzdGF0dXN9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGFmdGVyKGFmdGVyKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmFmdGVyPSR7YWZ0ZXJ9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNob3dNZXRhZmllbGRzKHNob3dfbWV0YWZpZWxkcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtzaG93X21ldGFmaWVsZHN9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHVzZUNhY2hlKHVzZV9jYWNoZSkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHt1c2VfY2FjaGV9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGFzeW5jIHRoZW4ocmVzb2x2ZSkge1xuICAgIHJlc29sdmUoXG4gICAgICBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgIHJlcyhyZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCB0aGlzLmVuZHBvaW50KSlcbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICAvLyBBZGRcbiAgYXN5bmMgaW5zZXJ0T25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChhd2FpdCByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycykpXG4gIH0sXG4gIC8vIEVkaXRcbiAgYXN5bmMgdXBkYXRlT25lKHBhcmFtcywgc2V0KSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGNvbnN0IHVwZGF0ZXMgPSBzZXQuJHNldFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChhd2FpdCByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCB1cGRhdGVzLCBoZWFkZXJzKSlcbiAgfSxcbiAgLy8gRGVsZXRlXG4gIGFzeW5jIGRlbGV0ZU9uZShwYXJhbXMpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0ke3BhcmFtcy50cmlnZ2VyX3dlYmhvb2sgPyAnP3RyaWdnZXJfd2ViaG9vaz10cnVlJyA6ICcnfWBcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxuY29uc3Qgb2JqZWN0TWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICBvYmplY3RzOiBvYmplY3RzQ2hhaW5NZXRob2RzKGJ1Y2tldF9jb25maWcpLFxuICBnZXRPYmplY3RzOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0T2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBzdXBwbHkgcGFyYW1zIG9iamVjdCB3aXRoIG9iamVjdCBpZCcpXG4gICAgfVxuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLnVzZV9jYWNoZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gXG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0T2JqZWN0UmV2aXNpb25zOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9yZXZpc2lvbnM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRNZXJnZVJlcXVlc3RPYmplY3RzOiAocGFyYW1zKSA9PiB7XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZXJnZS1yZXF1ZXN0cy8ke3BhcmFtcy5pZH0vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGFkZE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBhZGRPYmplY3RSZXZpc2lvbjogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9yZXZpc2lvbnNgXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIGRlbGV0ZSBwYXJhbXMudHlwZVxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBlZGl0T2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGdldE9iamVjdE1ldGFmaWVsZHM6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgLy8vIERFUFJFQ0FURURcbiAgZWRpdE9iamVjdE1ldGFmaWVsZHM6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkc2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpZFxuICAgIGRlbGV0ZSBwYXJhbXMuaWRcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L21ldGFmaWVsZHMvJHtwYXJhbXMua2V5fWBcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpZFxuICAgIGRlbGV0ZSBwYXJhbXMuaWRcbiAgICBkZWxldGUgcGFyYW1zLmtleVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGRlbGV0ZU9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RNZXRob2RzXG4iXX0=