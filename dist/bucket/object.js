"use strict";

require("regenerator-runtime/runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImhlYWRlcnMiLCJhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludCIsImVuZHBvaW50IiwicGFyYW1zIiwibGltaXQiLCJza2lwIiwic3RhdHVzIiwiYWZ0ZXIiLCJzb3J0Iiwic2hvd19tZXRhZmllbGRzIiwicHJldHR5IiwicHJvcHMiLCJxdWVyeSIsImVuY29kZVVSSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VfY2FjaGUiLCJvYmplY3RzQ2hhaW5NZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImZpbmQiLCJzbHVnIiwicmVhZF9rZXkiLCJzaG93TWV0YWZpZWxkcyIsInVzZUNhY2hlIiwidGhlbiIsInJlc29sdmUiLCJQcm9taXNlIiwicmVzIiwiR0VUIiwiaW5zZXJ0T25lIiwid3JpdGVfa2V5IiwiQXV0aG9yaXphdGlvbiIsIlBPU1QiLCJ1cGRhdGVPbmUiLCJzZXQiLCJpZCIsInVwZGF0ZXMiLCIkc2V0IiwiUEFUQ0giLCJkZWxldGVPbmUiLCJ0cmlnZ2VyX3dlYmhvb2siLCJERUxFVEUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0cyIsImdldE9iamVjdHMiLCJnZXRPYmplY3QiLCJFcnJvciIsImdldE9iamVjdFJldmlzaW9ucyIsImdldE1lcmdlUmVxdWVzdE9iamVjdHMiLCJhZGRPYmplY3QiLCJhZGRPYmplY3RSZXZpc2lvbiIsInR5cGUiLCJlZGl0T2JqZWN0IiwiZ2V0T2JqZWN0TWV0YWZpZWxkcyIsImVkaXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZCIsImtleSIsImRlbGV0ZU9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztlQUVnQkEsT0FBTyxDQUFDLHNCQUFELEM7SUFBZkMsRyxZQUFBQSxHOztBQUNSLElBQU1D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TUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSdcblxuY29uc3QgeyBVUkkgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcblxubGV0IGhlYWRlcnNcblxuY29uc3QgYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQgPSAoZW5kcG9pbnQsIHBhcmFtcykgPT4ge1xuICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5hZnRlcikge1xuICAgIGVuZHBvaW50ICs9IGAmYWZ0ZXI9JHtwYXJhbXMuYWZ0ZXJ9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICBlbmRwb2ludCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd19tZXRhZmllbGRzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtwYXJhbXMuc2hvd19tZXRhZmllbGRzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICBlbmRwb2ludCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVuZHBvaW50ICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gXG4gIH1cbiAgcmV0dXJuIGVuZHBvaW50XG59XG5cbmNvbnN0IG9iamVjdHNDaGFpbk1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLy8gR2V0XG4gIGZpbmQocXVlcnkpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX0ke3F1ZXJ5ID8gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShxdWVyeSkpfWAgOiAnJ31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgcHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmcHJvcHM9JHtwcm9wc31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcbiAgc29ydChzb3J0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnNvcnQ9JHtzb3J0fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBsaW1pdChsaW1pdCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZsaW1pdD0ke2xpbWl0fWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBza2lwKHNraXApIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHN0YXR1cyhzdGF0dXMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc3RhdHVzPSR7c3RhdHVzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBhZnRlcihhZnRlcikge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZhZnRlcj0ke2FmdGVyfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBzaG93TWV0YWZpZWxkcyhzaG93X21ldGFmaWVsZHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7c2hvd19tZXRhZmllbGRzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICB1c2VDYWNoZSh1c2VfY2FjaGUpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmdXNlX2NhY2hlPSR7dXNlX2NhY2hlfWBcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBhc3luYyB0aGVuKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKFxuICAgICAgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICByZXMocmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgdGhpcy5lbmRwb2ludCkpXG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgLy8gQWRkXG4gIGFzeW5jIGluc2VydE9uZShwYXJhbXMpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0c2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpKVxuICB9LFxuICAvLyBFZGl0XG4gIGFzeW5jIHVwZGF0ZU9uZShwYXJhbXMsIHNldCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBjb25zdCB1cGRhdGVzID0gc2V0LiRzZXRcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgdXBkYXRlcywgaGVhZGVycykpXG4gIH0sXG4gIC8vIERlbGV0ZVxuICBhc3luYyBkZWxldGVPbmUocGFyYW1zKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9JHtwYXJhbXMudHJpZ2dlcl93ZWJob29rID8gJz90cmlnZ2VyX3dlYmhvb2s9dHJ1ZScgOiAnJ31gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH1cbn0pXG5cbmNvbnN0IG9iamVjdE1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgb2JqZWN0czogb2JqZWN0c0NoYWluTWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgZ2V0T2JqZWN0czogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3VwcGx5IHBhcmFtcyBvYmplY3Qgd2l0aCBvYmplY3QgaWQnKVxuICAgIH1cbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9P3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE9iamVjdFJldmlzaW9uczogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vcmV2aXNpb25zP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgZ2V0TWVyZ2VSZXF1ZXN0T2JqZWN0czogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vbWVyZ2UtcmVxdWVzdHMvJHtwYXJhbXMuaWR9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBhZGRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0c2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgYWRkT2JqZWN0UmV2aXNpb246IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vcmV2aXNpb25zYFxuICAgIGRlbGV0ZSBwYXJhbXMuaWRcbiAgICBkZWxldGUgcGFyYW1zLnR5cGVcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZWRpdE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpZFxuICAgIGRlbGV0ZSBwYXJhbXMuaWRcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBnZXRPYmplY3RNZXRhZmllbGRzOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L21ldGFmaWVsZHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIC8vLyBERVBSRUNBVEVEXG4gIGVkaXRPYmplY3RNZXRhZmllbGRzOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L21ldGFmaWVsZHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZWRpdE9iamVjdE1ldGFmaWVsZDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzLyR7cGFyYW1zLmtleX1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy5rZXlcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBkZWxldGVPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkRFTEVURSwgZW5kcG9pbnQsIG51bGwsIGhlYWRlcnMpXG4gIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0TWV0aG9kc1xuIl19