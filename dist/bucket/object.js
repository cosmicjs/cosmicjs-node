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
    then: function then(resolve, reject) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsInByb21pc2VyIiwiaGVhZGVycyIsImFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50IiwiZW5kcG9pbnQiLCJwYXJhbXMiLCJsaW1pdCIsInNraXAiLCJzdGF0dXMiLCJhZnRlciIsInNvcnQiLCJzaG93X21ldGFmaWVsZHMiLCJwcmV0dHkiLCJwcm9wcyIsInF1ZXJ5IiwiZW5jb2RlVVJJIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZV9jYWNoZSIsIm9iamVjdHNDaGFpbk1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZmluZCIsInNsdWciLCJyZWFkX2tleSIsImZpbmRPbmUiLCJpZCIsInNob3dNZXRhZmllbGRzIiwidXNlQ2FjaGUiLCJ0aGVuIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcyIsImVyciIsImluc2VydE9uZSIsIndyaXRlX2tleSIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwidXBkYXRlT25lIiwic2V0IiwidXBkYXRlcyIsIiRzZXQiLCJQQVRDSCIsImRlbGV0ZU9uZSIsInRyaWdnZXJfd2ViaG9vayIsIkRFTEVURSIsIm9iamVjdE1ldGhvZHMiLCJvYmplY3RzIiwiZ2V0T2JqZWN0cyIsIkdFVCIsImdldE9iamVjdCIsIkVycm9yIiwiZ2V0T2JqZWN0UmV2aXNpb25zIiwiZ2V0TWVyZ2VSZXF1ZXN0T2JqZWN0cyIsImFkZE9iamVjdCIsImFkZE9iamVjdFJldmlzaW9uIiwidHlwZSIsImVkaXRPYmplY3QiLCJnZXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZHMiLCJlZGl0T2JqZWN0TWV0YWZpZWxkIiwia2V5IiwiZGVsZXRlT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLE9BQU8sQ0FBQyw2QkFBRCxDQUFQOztlQUVn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QXFCckMsUUFBckIsRUFBK0JDLE1BQS9CLEVBQXVDSCxPQUF2QyxDQUFyQjtBQUNELEtBM0Z1QztBQTRGeEMyRCxJQUFBQSxZQUFZLEVBQUUsc0JBQUN4RCxNQUFELEVBQVk7QUFDeEIsVUFBTUQsUUFBUSxhQUFNTixHQUFOLHNCQUFxQnNCLGFBQWEsQ0FBQ0UsSUFBbkMsc0JBQW1EakIsTUFBTSxDQUFDb0IsRUFBMUQsQ0FBZDs7QUFDQSxVQUFJTCxhQUFhLENBQUNjLFNBQWxCLEVBQTZCO0FBQzNCaEMsUUFBQUEsT0FBTyxHQUFHO0FBQ1JpQyxVQUFBQSxhQUFhLG1CQUFZZixhQUFhLENBQUNjLFNBQTFCO0FBREwsU0FBVjtBQUdEOztBQUNELGFBQU9sQyxjQUFjLENBQUNELFlBQVksQ0FBQzZDLE1BQWQsRUFBc0J4QyxRQUF0QixFQUFnQyxJQUFoQyxFQUFzQ0YsT0FBdEMsQ0FBckI7QUFDRDtBQXBHdUMsR0FBcEI7QUFBQSxDQUF0Qjs7QUF1R0E0RCxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZScpXG5cbmNvbnN0IHsgVVJJIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbnN0YW50cycpXG5jb25zdCBIVFRQX01FVEhPRFMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2h0dHBfbWV0aG9kcycpXG5jb25zdCB7IHJlcXVlc3RIYW5kbGVyIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3JlcXVlc3RfaGFuZGxlcicpXG5jb25zdCBwcm9taXNlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcHJvbWlzZXInKVxuXG5sZXQgaGVhZGVyc1xuXG5jb25zdCBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCA9IChlbmRwb2ludCwgcGFyYW1zKSA9PiB7XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLmFmdGVyKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZhZnRlcj0ke3BhcmFtcy5hZnRlcn1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc29ydCkge1xuICAgIGVuZHBvaW50ICs9IGAmc29ydD0ke3BhcmFtcy5zb3J0fWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5zaG93X21ldGFmaWVsZHMpIHtcbiAgICBlbmRwb2ludCArPSBgJnNob3dfbWV0YWZpZWxkcz0ke3BhcmFtcy5zaG93X21ldGFmaWVsZHN9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXR0eSkge1xuICAgIGVuZHBvaW50ICs9IGAmcHJldHR5PSR7cGFyYW1zLnByZXR0eX1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgfVxuICByZXR1cm4gZW5kcG9pbnRcbn1cblxuY29uc3Qgb2JqZWN0c0NoYWluTWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICAvLyBHZXRcbiAgZmluZChxdWVyeSkge1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fSR7cXVlcnkgPyBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSl9YCA6ICcnfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICAvLyBmaW5kT25lXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cXVlcnkuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgcHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmcHJvcHM9JHtwcm9wc31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc29ydChzb3J0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNvcnQ9JHtzb3J0fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBsaW1pdChsaW1pdCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZsaW1pdD0ke2xpbWl0fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBza2lwKHNraXApIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHN0YXR1cyhzdGF0dXMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc3RhdHVzPSR7c3RhdHVzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBhZnRlcihhZnRlcikge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZhZnRlcj0ke2FmdGVyfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBzaG93TWV0YWZpZWxkcyhzaG93X21ldGFmaWVsZHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7c2hvd19tZXRhZmllbGRzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICB1c2VDYWNoZSh1c2VfY2FjaGUpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmdXNlX2NhY2hlPSR7dXNlX2NhY2hlfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBhc3luYyB0aGVuKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHByb21pc2VyKHRoaXMuZW5kcG9pbnQpLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMsIG51bGwpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHJlamVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShudWxsLCBlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8gQWRkXG4gIGFzeW5jIGluc2VydE9uZShwYXJhbXMpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0c2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpKVxuICB9LFxuICAvLyBFZGl0XG4gIGFzeW5jIHVwZGF0ZU9uZShwYXJhbXMsIHNldCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBjb25zdCB1cGRhdGVzID0gc2V0LiRzZXRcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgdXBkYXRlcywgaGVhZGVycykpXG4gIH0sXG4gIC8vIERlbGV0ZVxuICBhc3luYyBkZWxldGVPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH1cbn0pXG5cbmNvbnN0IG9iamVjdE1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgb2JqZWN0czogb2JqZWN0c0NoYWluTWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgZ2V0T2JqZWN0czogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3VwcGx5IHBhcmFtcyBvYmplY3Qgd2l0aCBvYmplY3QgaWQnKVxuICAgIH1cbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE9iamVjdFJldmlzaW9uczogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vcmV2aXNpb25zP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0TWVyZ2VSZXF1ZXN0T2JqZWN0czogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVyZ2UtcmVxdWVzdHMvJHtwYXJhbXMuaWR9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBhZGRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0c2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgYWRkT2JqZWN0UmV2aXNpb246IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vcmV2aXNpb25zYFxuICAgIGRlbGV0ZSBwYXJhbXMuaWRcbiAgICBkZWxldGUgcGFyYW1zLnR5cGVcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZWRpdE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpZFxuICAgIGRlbGV0ZSBwYXJhbXMuaWRcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBnZXRPYmplY3RNZXRhZmllbGRzOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L21ldGFmaWVsZHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIC8vLyBERVBSRUNBVEVEXG4gIGVkaXRPYmplY3RNZXRhZmllbGRzOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L21ldGFmaWVsZHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZWRpdE9iamVjdE1ldGFmaWVsZDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzLyR7cGFyYW1zLmtleX1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy5rZXlcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBkZWxldGVPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0TWV0aG9kc1xuIl19