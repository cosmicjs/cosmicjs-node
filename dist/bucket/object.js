"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var FindChainMethod = /*#__PURE__*/function () {
  function FindChainMethod(endpoint) {
    _classCallCheck(this, FindChainMethod);

    this.endpoint = endpoint;
  }

  _createClass(FindChainMethod, [{
    key: "props",
    value: function props(_props) {
      this.endpoint += "&props=".concat(_props);
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
      var _then = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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

  return FindChainMethod;
}();

var objectsChainMethods = function objectsChainMethods(bucket_config) {
  return {
    // Get
    find: function find(query) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key).concat(query ? "&query=".concat(encodeURI(JSON.stringify(query))) : '');
      return new FindChainMethod(endpoint);
    },
    // findOne
    findOne: function findOne(query) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects/").concat(query.id, "?read_key=").concat(bucket_config.read_key);
      return new FindChainMethod(endpoint);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsInByb21pc2VyIiwiaGVhZGVycyIsImFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50IiwiZW5kcG9pbnQiLCJwYXJhbXMiLCJlcCIsImxpbWl0Iiwic2tpcCIsInN0YXR1cyIsImFmdGVyIiwic29ydCIsInNob3dfbWV0YWZpZWxkcyIsInByZXR0eSIsInByb3BzIiwicXVlcnkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlX2NhY2hlIiwiRmluZENoYWluTWV0aG9kIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJvYmplY3RzQ2hhaW5NZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImZpbmQiLCJzbHVnIiwicmVhZF9rZXkiLCJmaW5kT25lIiwiaWQiLCJpbnNlcnRPbmUiLCJ3cml0ZV9rZXkiLCJBdXRob3JpemF0aW9uIiwiUE9TVCIsInVwZGF0ZU9uZSIsInNldCIsInVwZGF0ZXMiLCIkc2V0IiwiUEFUQ0giLCJkZWxldGVPbmUiLCJ0cmlnZ2VyX3dlYmhvb2siLCJERUxFVEUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0cyIsImdldE9iamVjdHMiLCJHRVQiLCJnZXRPYmplY3QiLCJFcnJvciIsImdldE9iamVjdFJldmlzaW9ucyIsImdldE1lcmdlUmVxdWVzdE9iamVjdHMiLCJhZGRPYmplY3QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiZ2V0T2JqZWN0TWV0YWZpZWxkcyIsImVkaXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZCIsImtleSIsImRlbGV0ZU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUMsNkJBQUQsQ0FBUDs7ZUFF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QUFDUmlDLFVBQUFBLGFBQWEsbUJBQVlSLGFBQWEsQ0FBQ08sU0FBMUI7QUFETCxTQUFWO0FBR0Q7O0FBQ0QsYUFBT2xDLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDNkMsTUFBZCxFQUFzQnhDLFFBQXRCLEVBQWdDLElBQWhDLEVBQXNDRixPQUF0QyxDQUFyQjtBQUNEO0FBcEd1QyxHQUFwQjtBQUFBLENBQXRCOztBQXVHQTRELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJylcblxuY29uc3QgeyBVUkkgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcbmNvbnN0IHByb21pc2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9wcm9taXNlcicpXG5cbmxldCBoZWFkZXJzXG5cbmNvbnN0IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50ID0gKGVuZHBvaW50LCBwYXJhbXMpID0+IHtcbiAgbGV0IGVwID0gZW5kcG9pbnRcbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICBlcCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgZXAgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgIGVwICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuYWZ0ZXIpIHtcbiAgICBlcCArPSBgJmFmdGVyPSR7cGFyYW1zLmFmdGVyfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zb3J0KSB7XG4gICAgZXAgKz0gYCZzb3J0PSR7cGFyYW1zLnNvcnR9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNob3dfbWV0YWZpZWxkcykge1xuICAgIGVwICs9IGAmc2hvd19tZXRhZmllbGRzPSR7cGFyYW1zLnNob3dfbWV0YWZpZWxkc31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJldHR5KSB7XG4gICAgZXAgKz0gYCZwcmV0dHk9JHtwYXJhbXMucHJldHR5fWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgIGVwICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgZXAgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLnVzZV9jYWNoZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlcCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YFxuICB9XG4gIHJldHVybiBlcFxufVxuXG5jbGFzcyBGaW5kQ2hhaW5NZXRob2Qge1xuICBjb25zdHJ1Y3RvcihlbmRwb2ludCkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludFxuICB9XG5cbiAgcHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmcHJvcHM9JHtwcm9wc31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBza2lwKHNraXApIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnN0YXR1cz0ke3N0YXR1c31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFmdGVyKGFmdGVyKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmFmdGVyPSR7YWZ0ZXJ9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzaG93TWV0YWZpZWxkcyhzaG93X21ldGFmaWVsZHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7c2hvd19tZXRhZmllbGRzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdXNlQ2FjaGUodXNlX2NhY2hlKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3VzZV9jYWNoZX1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJvbWlzZXIodGhpcy5lbmRwb2ludCkudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcywgbnVsbCkpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKG51bGwsIGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IG9iamVjdHNDaGFpbk1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLy8gR2V0XG4gIGZpbmQocXVlcnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9JHtxdWVyeSA/IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocXVlcnkpKX1gIDogJyd9YFxuICAgIHJldHVybiBuZXcgRmluZENoYWluTWV0aG9kKGVuZHBvaW50KVxuICB9LFxuICAvLyBmaW5kT25lXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3F1ZXJ5LmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIHJldHVybiBuZXcgRmluZENoYWluTWV0aG9kKGVuZHBvaW50KVxuICB9LFxuICAvLyBBZGRcbiAgYXN5bmMgaW5zZXJ0T25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICAvLyBFZGl0XG4gIGFzeW5jIHVwZGF0ZU9uZShwYXJhbXMsIHNldCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBjb25zdCB1cGRhdGVzID0gc2V0LiRzZXRcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCB1cGRhdGVzLCBoZWFkZXJzKVxuICB9LFxuICAvLyBEZWxldGVcbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5jb25zdCBvYmplY3RNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIG9iamVjdHM6IG9iamVjdHNDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGdldE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBwYXJhbXMgb2JqZWN0IHdpdGggb2JqZWN0IGlkJylcbiAgICB9XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3RSZXZpc2lvbnM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9ucz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE1lcmdlUmVxdWVzdE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lcmdlLXJlcXVlc3RzLyR7cGFyYW1zLmlkfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgYWRkT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2BcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy50eXBlXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZ2V0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICAvLy8gREVQUkVDQVRFRFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3RNZXRhZmllbGQ6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcy8ke3BhcmFtcy5rZXl9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIGRlbGV0ZSBwYXJhbXMua2V5XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZGVsZXRlT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdE1ldGhvZHNcbiJdfQ==