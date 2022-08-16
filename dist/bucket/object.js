"use strict";

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
    then: function then(cb) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                promiser(_this.endpoint).then(function (res) {
                  return cb(res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsInByb21pc2VyIiwiaGVhZGVycyIsImFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50IiwiZW5kcG9pbnQiLCJwYXJhbXMiLCJsaW1pdCIsInNraXAiLCJzdGF0dXMiLCJhZnRlciIsInNvcnQiLCJzaG93X21ldGFmaWVsZHMiLCJwcmV0dHkiLCJwcm9wcyIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZV9jYWNoZSIsIm9iamVjdHNDaGFpbk1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZmluZCIsInNsdWciLCJyZWFkX2tleSIsImZpbmRPbmUiLCJpZCIsInNob3dNZXRhZmllbGRzIiwidXNlQ2FjaGUiLCJ0aGVuIiwiY2IiLCJyZXMiLCJpbnNlcnRPbmUiLCJ3cml0ZV9rZXkiLCJBdXRob3JpemF0aW9uIiwiUE9TVCIsInVwZGF0ZU9uZSIsInNldCIsInVwZGF0ZXMiLCIkc2V0IiwiUEFUQ0giLCJkZWxldGVPbmUiLCJ0cmlnZ2VyX3dlYmhvb2siLCJERUxFVEUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0cyIsImdldE9iamVjdHMiLCJHRVQiLCJnZXRPYmplY3QiLCJFcnJvciIsImdldE9iamVjdFJldmlzaW9ucyIsImdldE1lcmdlUmVxdWVzdE9iamVjdHMiLCJhZGRPYmplY3QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiZ2V0T2JqZWN0TWV0YWZpZWxkcyIsImVkaXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZCIsImtleSIsImRlbGV0ZU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPLENBQUMsNkJBQUQsQ0FBUDs7ZUFFZ0JBLE9BQU8sQ0FBQyxzQkFBRCxD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M0I5QixRQUFBQSxPQUFPLEdBQUc7QUFDUitCLFVBQUFBLGFBQWEsbUJBQVliLGFBQWEsQ0FBQ1ksU0FBMUI7QUFETCxTQUFWO0FBR0Q7O0FBQ0QsYUFBT2hDLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDMkMsTUFBZCxFQUFzQnRDLFFBQXRCLEVBQWdDLElBQWhDLEVBQXNDRixPQUF0QyxDQUFyQjtBQUNEO0FBcEd1QyxHQUFwQjtBQUFBLENBQXRCOztBQXVHQTBELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJylcblxuY29uc3QgeyBVUkkgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcbmNvbnN0IHByb21pc2VyID0gcmVxdWlyZSgnLi4vaGVscGVycy9wcm9taXNlcicpXG5cbmxldCBoZWFkZXJzXG5cbmNvbnN0IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50ID0gKGVuZHBvaW50LCBwYXJhbXMpID0+IHtcbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICBlbmRwb2ludCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgIGVuZHBvaW50ICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuYWZ0ZXIpIHtcbiAgICBlbmRwb2ludCArPSBgJmFmdGVyPSR7cGFyYW1zLmFmdGVyfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zb3J0KSB7XG4gICAgZW5kcG9pbnQgKz0gYCZzb3J0PSR7cGFyYW1zLnNvcnR9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNob3dfbWV0YWZpZWxkcykge1xuICAgIGVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7cGFyYW1zLnNob3dfbWV0YWZpZWxkc31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJldHR5KSB7XG4gICAgZW5kcG9pbnQgKz0gYCZwcmV0dHk9JHtwYXJhbXMucHJldHR5fWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgZW5kcG9pbnQgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLnVzZV9jYWNoZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YFxuICB9XG4gIHJldHVybiBlbmRwb2ludFxufVxuXG5jb25zdCBvYmplY3RzQ2hhaW5NZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIC8vIEdldFxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9JHtxdWVyeSA/IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocXVlcnkpKX1gIDogJyd9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIC8vIGZpbmRPbmVcbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtxdWVyeS5pZH0/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBzb3J0KHNvcnQpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc29ydD0ke3NvcnR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNraXAoc2tpcCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZza2lwPSR7c2tpcH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtzdGF0dXN9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGFmdGVyKGFmdGVyKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmFmdGVyPSR7YWZ0ZXJ9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHNob3dNZXRhZmllbGRzKHNob3dfbWV0YWZpZWxkcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtzaG93X21ldGFmaWVsZHN9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHVzZUNhY2hlKHVzZV9jYWNoZSkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHt1c2VfY2FjaGV9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGFzeW5jIHRoZW4oY2IpIHtcbiAgICBwcm9taXNlcih0aGlzLmVuZHBvaW50KS50aGVuKChyZXMpID0+IGNiKHJlcykpXG4gIH0sXG4gIC8vIEFkZFxuICBhc3luYyBpbnNlcnRPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGF3YWl0IHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKSlcbiAgfSxcbiAgLy8gRWRpdFxuICBhc3luYyB1cGRhdGVPbmUocGFyYW1zLCBzZXQpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgY29uc3QgdXBkYXRlcyA9IHNldC4kc2V0XG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGF3YWl0IHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHVwZGF0ZXMsIGhlYWRlcnMpKVxuICB9LFxuICAvLyBEZWxldGVcbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5jb25zdCBvYmplY3RNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIG9iamVjdHM6IG9iamVjdHNDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGdldE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBwYXJhbXMgb2JqZWN0IHdpdGggb2JqZWN0IGlkJylcbiAgICB9XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3RSZXZpc2lvbnM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9ucz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE1lcmdlUmVxdWVzdE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lcmdlLXJlcXVlc3RzLyR7cGFyYW1zLmlkfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgYWRkT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2BcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy50eXBlXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZ2V0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICAvLy8gREVQUkVDQVRFRFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3RNZXRhZmllbGQ6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcy8ke3BhcmFtcy5rZXl9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIGRlbGV0ZSBwYXJhbXMua2V5XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZGVsZXRlT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdE1ldGhvZHNcbiJdfQ==