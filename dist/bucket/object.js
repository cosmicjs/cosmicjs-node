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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsInByb21pc2VyIiwiaGVhZGVycyIsImFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50IiwiZW5kcG9pbnQiLCJwYXJhbXMiLCJlcCIsImxpbWl0Iiwic2tpcCIsInN0YXR1cyIsImFmdGVyIiwic29ydCIsInNob3dfbWV0YWZpZWxkcyIsInByZXR0eSIsInByb3BzIiwicXVlcnkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlX2NhY2hlIiwiRmluZENoYWluaW5nIiwiZGVwdGgiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInJlcyIsImVyciIsIm9iamVjdHNDaGFpbk1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZmluZCIsInNsdWciLCJyZWFkX2tleSIsImZpbmRPbmUiLCJpZCIsImluc2VydE9uZSIsIndyaXRlX2tleSIsIkF1dGhvcml6YXRpb24iLCJQT1NUIiwidXBkYXRlT25lIiwic2V0IiwidXBkYXRlcyIsIiRzZXQiLCJQQVRDSCIsImRlbGV0ZU9uZSIsInRyaWdnZXJfd2ViaG9vayIsIkRFTEVURSIsIm9iamVjdE1ldGhvZHMiLCJvYmplY3RzIiwiZ2V0T2JqZWN0cyIsIkdFVCIsImdldE9iamVjdCIsIkVycm9yIiwiZ2V0T2JqZWN0UmV2aXNpb25zIiwiZ2V0TWVyZ2VSZXF1ZXN0T2JqZWN0cyIsImFkZE9iamVjdCIsImFkZE9iamVjdFJldmlzaW9uIiwidHlwZSIsImVkaXRPYmplY3QiLCJnZXRPYmplY3RNZXRhZmllbGRzIiwiZWRpdE9iamVjdE1ldGFmaWVsZHMiLCJlZGl0T2JqZWN0TWV0YWZpZWxkIiwia2V5IiwiZGVsZXRlT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQyw2QkFBRCxDQUFQOztlQUVnQkEsT0FBTyxDQUFDLHNCQUFELEM7SUFBZkMsRyxZQUFBQSxHOztBQUNSLElBQU1DLFlBQVksR0FBR0YsT0FBTyxDQUFDLHlCQUFELENBQTVCOztnQkFDMkJBLE9BQU8sQ0FBQyw0QkFBRCxDO0lBQTFCRyxjLGFBQUFBLGM7O0FBQ1IsSUFBTUMsUUFBUSxHQUFHSixPQUFPLENBQUMscUJBQUQsQ0FBeEI7O0FBRUEsSUFBSUssT0FBSjs7QUFFQSxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNDLFFBQUQsRUFBV0MsTUFBWCxFQUFzQjtBQUN2RCxNQUFJQyxFQUFFLEdBQUdGLFFBQVQ7O0FBQ0EsTUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNFLEtBQXJCLEVBQTRCO0FBQzFCRCxJQUFBQSxFQUFFLHFCQUFjRCxNQUFNLENBQUNFLEtBQXJCLENBQUY7QUFDRDs7QUFDRCxNQUFJRixNQUFNLElBQUlBLE1BQU0sQ0FBQ0csSUFBckIsRUFBMkI7QUFDekJGLElBQUFBLEVBQUUsb0JBQWFELE1BQU0sQ0FBQ0csSUFBcEIsQ0FBRjtBQUNEOztBQUNELE1BQUlILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxNQUFyQixFQUE2QjtBQUMzQkgsSUFBQUEsRUFBRSxzQkFBZUQsTUFBTSxDQUFDSSxNQUF0QixDQUFGO0FBQ0Q7O0FBQ0QsTUFBSUosTUFBTSxJQUFJQSxNQUFNLENBQUNLLEtBQXJCLEVBQTRCO0FBQzFCSixJQUFBQSxFQUFFLHFCQUFjRCxNQUFNLENBQUNLLEtBQXJCLENBQUY7QUFDRDs7QUFDRCxNQUFJTCxNQUFNLElBQUlBLE1BQU0sQ0FBQ00sSUFBckIsRUFBMkI7QUFDekJMLElBQUFBLEVBQUUsb0JBQWFELE1BQU0sQ0FBQ00sSUFBcEIsQ0FBRjtBQUNEOztBQUNELE1BQUlOLE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxlQUFyQixFQUFzQztBQUNwQ04sSUFBQUEsRUFBRSwrQkFBd0JELE1BQU0sQ0FBQ08sZUFBL0IsQ0FBRjtBQUNEOztBQUNELE1BQUlQLE1BQU0sSUFBSUEsTUFBTSxDQUFDUSxNQUFyQixFQUE2QjtBQUMzQlAsSUFBQUEsRUFBRSxzQkFBZUQsTUFBTSxDQUFDUSxNQUF0QixDQUFGO0FBQ0Q7O0FBQ0QsTUFBSVIsTUFBTSxJQUFJQSxNQUFNLENBQUNTLEtBQXJCLEVBQTRCO0FBQzFCUixJQUFBQSxFQUFFLHFCQUFjRCxNQUFNLENBQUNTLEtBQXJCLENBQUY7QUFDRDs7QUFDRCxNQUFJVCxNQUFNLElBQUlBLE1BQU0sQ0FBQ1UsS0FBckIsRUFBNEI7QUFDMUJULElBQUFBLEVBQUUscUJBQWNVLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWViLE1BQU0sQ0FBQ1UsS0FBdEIsQ0FBRCxDQUF2QixDQUFGO0FBQ0Q7O0FBQ0QsTUFBSVYsTUFBTSxJQUFJLE9BQU9BLE1BQU0sQ0FBQ2MsU0FBZCxLQUE0QixXQUExQyxFQUF1RDtBQUNyRGIsSUFBQUEsRUFBRSx5QkFBa0JELE1BQU0sQ0FBQ2MsU0FBekIsQ0FBRjtBQUNEOztBQUNELFNBQU9iLEVBQVA7QUFDRCxDQWpDRDs7SUFtQ01jLFk7QUFDSix3QkFBWWhCLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzswQkFFS1UsTSxFQUFPO0FBQ1gsV0FBS1YsUUFBTCxxQkFBMkJVLE1BQTNCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzswQkFFS08sTSxFQUFPO0FBQ1gsV0FBS2pCLFFBQUwscUJBQTJCaUIsTUFBM0I7QUFDQSxhQUFPLElBQVA7QUFDRDs7O3lCQUVJVixLLEVBQU07QUFDVCxXQUFLUCxRQUFMLG9CQUEwQk8sS0FBMUI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzBCQUVLSixNLEVBQU87QUFDWCxXQUFLSCxRQUFMLHFCQUEyQkcsTUFBM0I7QUFDQSxhQUFPLElBQVA7QUFDRDs7O3lCQUVJQyxLLEVBQU07QUFDVCxXQUFLSixRQUFMLG9CQUEwQkksS0FBMUI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzJCQUVNQyxPLEVBQVE7QUFDYixXQUFLTCxRQUFMLHNCQUE0QkssT0FBNUI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzBCQUVLQyxNLEVBQU87QUFDWCxXQUFLTixRQUFMLHFCQUEyQk0sTUFBM0I7QUFDQSxhQUFPLElBQVA7QUFDRDs7O21DQUVjRSxlLEVBQWlCO0FBQzlCLFdBQUtSLFFBQUwsK0JBQXFDUSxlQUFyQztBQUNBLGFBQU8sSUFBUDtBQUNEOzs7NkJBRVFPLFMsRUFBVztBQUNsQixXQUFLZixRQUFMLHlCQUErQmUsU0FBL0I7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzsyRkFFVUcsTyxFQUFTQyxNOzs7OztBQUNsQnRCLGdCQUFBQSxRQUFRLENBQUMsS0FBS0csUUFBTixDQUFSLENBQXdCb0IsSUFBeEIsQ0FBNkIsVUFBQ0MsR0FBRDtBQUFBLHlCQUFTSCxPQUFPLENBQUNHLEdBQUQsRUFBTSxJQUFOLENBQWhCO0FBQUEsaUJBQTdCLFdBQWdFLFVBQUNDLEdBQUQsRUFBUztBQUN2RSxzQkFBSSxPQUFPSCxNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQ2hDQSxvQkFBQUEsTUFBTSxDQUFDRyxHQUFELENBQU47QUFDRCxtQkFGRCxNQUVPO0FBQ0xKLG9CQUFBQSxPQUFPLENBQUMsSUFBRCxFQUFPSSxHQUFQLENBQVA7QUFDRDtBQUNGLGlCQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVSixJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLGFBQUQ7QUFBQSxTQUFvQjtBQUM5QztBQUNBQyxJQUFBQSxJQUY4QyxnQkFFekNkLEtBRnlDLEVBRWxDO0FBQ1YsVUFBTVgsUUFBUSxhQUFNTixHQUFOLHNCQUFxQjhCLGFBQWEsQ0FBQ0UsSUFBbkMsK0JBQTRERixhQUFhLENBQUNHLFFBQTFFLFNBQXFGaEIsS0FBSyxvQkFBYUMsU0FBUyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsS0FBZixDQUFELENBQXRCLElBQWtELEVBQTVJLENBQWQ7QUFDQSxhQUFPLElBQUlLLFlBQUosQ0FBaUJoQixRQUFqQixDQUFQO0FBQ0QsS0FMNkM7QUFNOUM7QUFDQTRCLElBQUFBLE9BUDhDLG1CQU90Q2pCLEtBUHNDLEVBTy9CO0FBQ2IsVUFBTVgsUUFBUSxhQUFNTixHQUFOLHNCQUFxQjhCLGFBQWEsQ0FBQ0UsSUFBbkMsc0JBQW1EZixLQUFLLENBQUNrQixFQUF6RCx1QkFBd0VMLGFBQWEsQ0FBQ0csUUFBdEYsQ0FBZDtBQUNBLGFBQU8sSUFBSVgsWUFBSixDQUFpQmhCLFFBQWpCLENBQVA7QUFDRCxLQVY2QztBQVc5QztBQUNNOEIsSUFBQUEsU0Fad0MscUJBWTlCN0IsTUFaOEIsRUFZdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJELGdCQUFBQSxRQURnQixhQUNGTixHQURFLHNCQUNhOEIsYUFBYSxDQUFDRSxJQUQzQjs7QUFFdEIsb0JBQUlGLGFBQWEsQ0FBQ08sU0FBbEIsRUFBNkI7QUFDM0JqQyxrQkFBQUEsT0FBTyxHQUFHO0FBQ1JrQyxvQkFBQUEsYUFBYSxtQkFBWVIsYUFBYSxDQUFDTyxTQUExQjtBQURMLG1CQUFWO0FBR0Q7O0FBTnFCLGtEQU9mbkMsY0FBYyxDQUFDRCxZQUFZLENBQUNzQyxJQUFkLEVBQW9CakMsUUFBcEIsRUFBOEJDLE1BQTlCLEVBQXNDSCxPQUF0QyxDQVBDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUXZCLEtBcEI2QztBQXFCOUM7QUFDTW9DLElBQUFBLFNBdEJ3QyxxQkFzQjlCakMsTUF0QjhCLEVBc0J0QmtDLEdBdEJzQixFQXNCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJuQyxnQkFBQUEsUUFEcUIsYUFDUE4sR0FETyxzQkFDUThCLGFBQWEsQ0FBQ0UsSUFEdEIsc0JBQ3NDekIsTUFBTSxDQUFDNEIsRUFEN0M7QUFFckJPLGdCQUFBQSxPQUZxQixHQUVYRCxHQUFHLENBQUNFLElBRk87O0FBRzNCLG9CQUFJYixhQUFhLENBQUNPLFNBQWxCLEVBQTZCO0FBQzNCakMsa0JBQUFBLE9BQU8sR0FBRztBQUNSa0Msb0JBQUFBLGFBQWEsbUJBQVlSLGFBQWEsQ0FBQ08sU0FBMUI7QUFETCxtQkFBVjtBQUdEOztBQVAwQixrREFRcEJuQyxjQUFjLENBQUNELFlBQVksQ0FBQzJDLEtBQWQsRUFBcUJ0QyxRQUFyQixFQUErQm9DLE9BQS9CLEVBQXdDdEMsT0FBeEMsQ0FSTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVM1QixLQS9CNkM7QUFnQzlDO0FBQ015QyxJQUFBQSxTQWpDd0MscUJBaUM5QnRDLE1BakM4QixFQWlDdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJELGdCQUFBQSxRQURnQixhQUNGTixHQURFLHNCQUNhOEIsYUFBYSxDQUFDRSxJQUQzQixzQkFDMkN6QixNQUFNLENBQUM0QixFQURsRCxTQUN1RDVCLE1BQU0sQ0FBQ3VDLGVBQVAsR0FBeUIsdUJBQXpCLEdBQW1ELEVBRDFHOztBQUV0QixvQkFBSWhCLGFBQWEsQ0FBQ08sU0FBbEIsRUFBNkI7QUFDM0JqQyxrQkFBQUEsT0FBTyxHQUFHO0FBQ1JrQyxvQkFBQUEsYUFBYSxtQkFBWVIsYUFBYSxDQUFDTyxTQUExQjtBQURMLG1CQUFWO0FBR0Q7O0FBTnFCLGtEQU9mbkMsY0FBYyxDQUFDRCxZQUFZLENBQUM4QyxNQUFkLEVBQXNCekMsUUFBdEIsRUFBZ0MsSUFBaEMsRUFBc0NGLE9BQXRDLENBUEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRdkI7QUF6QzZDLEdBQXBCO0FBQUEsQ0FBNUI7O0FBNENBLElBQU00QyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNsQixhQUFEO0FBQUEsU0FBb0I7QUFDeENtQixJQUFBQSxPQUFPLEVBQUVwQixtQkFBbUIsQ0FBQ0MsYUFBRCxDQURZO0FBRXhDb0IsSUFBQUEsVUFBVSxFQUFFLG9CQUFDM0MsTUFBRCxFQUFZO0FBQ3RCLFVBQUlELFFBQVEsYUFBTU4sR0FBTixzQkFBcUI4QixhQUFhLENBQUNFLElBQW5DLCtCQUE0REYsYUFBYSxDQUFDRyxRQUExRSxDQUFaO0FBQ0EzQixNQUFBQSxRQUFRLEdBQUdELDBCQUEwQixDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBckM7QUFDQSxhQUFPTCxjQUFjLENBQUNELFlBQVksQ0FBQ2tELEdBQWQsRUFBbUI3QyxRQUFuQixDQUFyQjtBQUNELEtBTnVDO0FBT3hDOEMsSUFBQUEsU0FBUyxFQUFFLG1CQUFDN0MsTUFBRCxFQUFZO0FBQ3JCLFVBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsY0FBTSxJQUFJOEMsS0FBSixDQUFVLDBDQUFWLENBQU47QUFDRDs7QUFDRCxVQUFJL0MsUUFBUSxhQUFNTixHQUFOLHNCQUFxQjhCLGFBQWEsQ0FBQ0UsSUFBbkMsc0JBQW1EekIsTUFBTSxDQUFDNEIsRUFBMUQsdUJBQXlFTCxhQUFhLENBQUNHLFFBQXZGLENBQVo7O0FBQ0EsVUFBSTFCLE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxNQUFyQixFQUE2QjtBQUMzQkwsUUFBQUEsUUFBUSxzQkFBZUMsTUFBTSxDQUFDSSxNQUF0QixDQUFSO0FBQ0Q7O0FBQ0QsVUFBSUosTUFBTSxJQUFJQSxNQUFNLENBQUNTLEtBQXJCLEVBQTRCO0FBQzFCVixRQUFBQSxRQUFRLHFCQUFjQyxNQUFNLENBQUNTLEtBQXJCLENBQVI7QUFDRDs7QUFDRCxVQUFJVCxNQUFNLElBQUksT0FBT0EsTUFBTSxDQUFDYyxTQUFkLEtBQTRCLFdBQTFDLEVBQXVEO0FBQ3JEZixRQUFBQSxRQUFRLHlCQUFrQkMsTUFBTSxDQUFDYyxTQUF6QixDQUFSO0FBQ0Q7O0FBQ0QsYUFBT25CLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDa0QsR0FBZCxFQUFtQjdDLFFBQW5CLENBQXJCO0FBQ0QsS0F0QnVDO0FBdUJ4Q2dELElBQUFBLGtCQUFrQixFQUFFLDRCQUFDL0MsTUFBRCxFQUFZO0FBQzlCLFVBQUlELFFBQVEsYUFBTU4sR0FBTixzQkFBcUI4QixhQUFhLENBQUNFLElBQW5DLHNCQUFtRHpCLE1BQU0sQ0FBQzRCLEVBQTFELGlDQUFtRkwsYUFBYSxDQUFDRyxRQUFqRyxDQUFaO0FBQ0EzQixNQUFBQSxRQUFRLEdBQUdELDBCQUEwQixDQUFDQyxRQUFELEVBQVdDLE1BQVgsQ0FBckM7QUFDQSxhQUFPTCxjQUFjLENBQUNELFlBQVksQ0FBQ2tELEdBQWQsRUFBbUI3QyxRQUFuQixDQUFyQjtBQUNELEtBM0J1QztBQTRCeENpRCxJQUFBQSxzQkFBc0IsRUFBRSxnQ0FBQ2hELE1BQUQsRUFBWTtBQUNsQyxVQUFJRCxRQUFRLGFBQU1OLEdBQU4sc0JBQXFCOEIsYUFBYSxDQUFDRSxJQUFuQyw2QkFBMER6QixNQUFNLENBQUM0QixFQUFqRSwrQkFBd0ZMLGFBQWEsQ0FBQ0csUUFBdEcsQ0FBWjtBQUNBM0IsTUFBQUEsUUFBUSxHQUFHRCwwQkFBMEIsQ0FBQ0MsUUFBRCxFQUFXQyxNQUFYLENBQXJDO0FBQ0EsYUFBT0wsY0FBYyxDQUFDRCxZQUFZLENBQUNrRCxHQUFkLEVBQW1CN0MsUUFBbkIsQ0FBckI7QUFDRCxLQWhDdUM7QUFpQ3hDa0QsSUFBQUEsU0FBUyxFQUFFLG1CQUFDakQsTUFBRCxFQUFZO0FBQ3JCLFVBQU1ELFFBQVEsYUFBTU4sR0FBTixzQkFBcUI4QixhQUFhLENBQUNFLElBQW5DLGFBQWQ7O0FBQ0EsVUFBSUYsYUFBYSxDQUFDTyxTQUFsQixFQUE2QjtBQUMzQmpDLFFBQUFBLE9BQU8sR0FBRztBQUNSa0MsVUFBQUEsYUFBYSxtQkFBWVIsYUFBYSxDQUFDTyxTQUExQjtBQURMLFNBQVY7QUFHRDs7QUFDRCxhQUFPbkMsY0FBYyxDQUFDRCxZQUFZLENBQUNzQyxJQUFkLEVBQW9CakMsUUFBcEIsRUFBOEJDLE1BQTlCLEVBQXNDSCxPQUF0QyxDQUFyQjtBQUNELEtBekN1QztBQTBDeENxRCxJQUFBQSxpQkFBaUIsRUFBRSwyQkFBQ2xELE1BQUQsRUFBWTtBQUM3QixVQUFNRCxRQUFRLGFBQU1OLEdBQU4sc0JBQXFCOEIsYUFBYSxDQUFDRSxJQUFuQyxzQkFBbUR6QixNQUFNLENBQUM0QixFQUExRCxlQUFkO0FBQ0EsYUFBTzVCLE1BQU0sQ0FBQzRCLEVBQWQ7QUFDQSxhQUFPNUIsTUFBTSxDQUFDbUQsSUFBZDs7QUFDQSxVQUFJNUIsYUFBYSxDQUFDTyxTQUFsQixFQUE2QjtBQUMzQmpDLFFBQUFBLE9BQU8sR0FBRztBQUNSa0MsVUFBQUEsYUFBYSxtQkFBWVIsYUFBYSxDQUFDTyxTQUExQjtBQURMLFNBQVY7QUFHRDs7QUFDRCxhQUFPbkMsY0FBYyxDQUFDRCxZQUFZLENBQUNzQyxJQUFkLEVBQW9CakMsUUFBcEIsRUFBOEJDLE1BQTlCLEVBQXNDSCxPQUF0QyxDQUFyQjtBQUNELEtBcER1QztBQXFEeEN1RCxJQUFBQSxVQUFVLEVBQUUsb0JBQUNwRCxNQUFELEVBQVk7QUFDdEIsVUFBTUQsUUFBUSxhQUFNTixHQUFOLHNCQUFxQjhCLGFBQWEsQ0FBQ0UsSUFBbkMsc0JBQW1EekIsTUFBTSxDQUFDNEIsRUFBMUQsQ0FBZDs7QUFDQSxVQUFJTCxhQUFhLENBQUNPLFNBQWxCLEVBQTZCO0FBQzNCakMsUUFBQUEsT0FBTyxHQUFHO0FBQ1JrQyxVQUFBQSxhQUFhLG1CQUFZUixhQUFhLENBQUNPLFNBQTFCO0FBREwsU0FBVjtBQUdELE9BTnFCLENBT3RCOzs7QUFDQSxhQUFPOUIsTUFBTSxDQUFDNEIsRUFBZDtBQUNBLGFBQU9qQyxjQUFjLENBQUNELFlBQVksQ0FBQzJDLEtBQWQsRUFBcUJ0QyxRQUFyQixFQUErQkMsTUFBL0IsRUFBdUNILE9BQXZDLENBQXJCO0FBQ0QsS0EvRHVDO0FBZ0V4Q3dELElBQUFBLG1CQUFtQixFQUFFLDZCQUFDckQsTUFBRCxFQUFZO0FBQy9CLFVBQU1ELFFBQVEsYUFBTU4sR0FBTixzQkFBcUI4QixhQUFhLENBQUNFLElBQW5DLHNCQUFtRHpCLE1BQU0sQ0FBQzRCLEVBQTFELGtDQUFvRkwsYUFBYSxDQUFDRyxRQUFsRyxDQUFkO0FBQ0EsYUFBTy9CLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDa0QsR0FBZCxFQUFtQjdDLFFBQW5CLENBQXJCO0FBQ0QsS0FuRXVDO0FBb0V4QztBQUNBdUQsSUFBQUEsb0JBQW9CLEVBQUUsOEJBQUN0RCxNQUFELEVBQVk7QUFDaEMsVUFBTUQsUUFBUSxhQUFNTixHQUFOLHNCQUFxQjhCLGFBQWEsQ0FBQ0UsSUFBbkMsc0JBQW1EekIsTUFBTSxDQUFDNEIsRUFBMUQsZ0JBQWQ7O0FBQ0EsVUFBSUwsYUFBYSxDQUFDTyxTQUFsQixFQUE2QjtBQUMzQmpDLFFBQUFBLE9BQU8sR0FBRztBQUNSa0MsVUFBQUEsYUFBYSxtQkFBWVIsYUFBYSxDQUFDTyxTQUExQjtBQURMLFNBQVY7QUFHRCxPQU4rQixDQU9oQzs7O0FBQ0EsYUFBTzlCLE1BQU0sQ0FBQzRCLEVBQWQ7QUFDQSxhQUFPakMsY0FBYyxDQUFDRCxZQUFZLENBQUMyQyxLQUFkLEVBQXFCdEMsUUFBckIsRUFBK0JDLE1BQS9CLEVBQXVDSCxPQUF2QyxDQUFyQjtBQUNELEtBL0V1QztBQWdGeEMwRCxJQUFBQSxtQkFBbUIsRUFBRSw2QkFBQ3ZELE1BQUQsRUFBWTtBQUMvQixVQUFNRCxRQUFRLGFBQU1OLEdBQU4sc0JBQXFCOEIsYUFBYSxDQUFDRSxJQUFuQyxzQkFBbUR6QixNQUFNLENBQUM0QixFQUExRCx5QkFBMkU1QixNQUFNLENBQUN3RCxHQUFsRixDQUFkOztBQUNBLFVBQUlqQyxhQUFhLENBQUNPLFNBQWxCLEVBQTZCO0FBQzNCakMsUUFBQUEsT0FBTyxHQUFHO0FBQ1JrQyxVQUFBQSxhQUFhLG1CQUFZUixhQUFhLENBQUNPLFNBQTFCO0FBREwsU0FBVjtBQUdELE9BTjhCLENBTy9COzs7QUFDQSxhQUFPOUIsTUFBTSxDQUFDNEIsRUFBZDtBQUNBLGFBQU81QixNQUFNLENBQUN3RCxHQUFkO0FBQ0EsYUFBTzdELGNBQWMsQ0FBQ0QsWUFBWSxDQUFDMkMsS0FBZCxFQUFxQnRDLFFBQXJCLEVBQStCQyxNQUEvQixFQUF1Q0gsT0FBdkMsQ0FBckI7QUFDRCxLQTNGdUM7QUE0RnhDNEQsSUFBQUEsWUFBWSxFQUFFLHNCQUFDekQsTUFBRCxFQUFZO0FBQ3hCLFVBQU1ELFFBQVEsYUFBTU4sR0FBTixzQkFBcUI4QixhQUFhLENBQUNFLElBQW5DLHNCQUFtRHpCLE1BQU0sQ0FBQzRCLEVBQTFELENBQWQ7O0FBQ0EsVUFBSUwsYUFBYSxDQUFDTyxTQUFsQixFQUE2QjtBQUMzQmpDLFFBQUFBLE9BQU8sR0FBRztBQUNSa0MsVUFBQUEsYUFBYSxtQkFBWVIsYUFBYSxDQUFDTyxTQUExQjtBQURMLFNBQVY7QUFHRDs7QUFDRCxhQUFPbkMsY0FBYyxDQUFDRCxZQUFZLENBQUM4QyxNQUFkLEVBQXNCekMsUUFBdEIsRUFBZ0MsSUFBaEMsRUFBc0NGLE9BQXRDLENBQXJCO0FBQ0Q7QUFwR3VDLEdBQXBCO0FBQUEsQ0FBdEI7O0FBdUdBNkQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnKVxuXG5jb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuY29uc3QgcHJvbWlzZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3Byb21pc2VyJylcblxubGV0IGhlYWRlcnNcblxuY29uc3QgYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQgPSAoZW5kcG9pbnQsIHBhcmFtcykgPT4ge1xuICBsZXQgZXAgPSBlbmRwb2ludFxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgIGVwICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICBlcCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgZXAgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5hZnRlcikge1xuICAgIGVwICs9IGAmYWZ0ZXI9JHtwYXJhbXMuYWZ0ZXJ9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICBlcCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd19tZXRhZmllbGRzKSB7XG4gICAgZXAgKz0gYCZzaG93X21ldGFmaWVsZHM9JHtwYXJhbXMuc2hvd19tZXRhZmllbGRzfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICBlcCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YFxuICB9XG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgZXAgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gIH1cbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICBlcCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgfVxuICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVwICs9IGAmdXNlX2NhY2hlPSR7cGFyYW1zLnVzZV9jYWNoZX1gXG4gIH1cbiAgcmV0dXJuIGVwXG59XG5cbmNsYXNzIEZpbmRDaGFpbmluZyB7XG4gIGNvbnN0cnVjdG9yKGVuZHBvaW50KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50XG4gIH1cblxuICBwcm9wcyhwcm9wcykge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3Byb3BzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVwdGgoZGVwdGgpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmZGVwdGg9JHtkZXB0aH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNvcnQoc29ydCkge1xuICAgIHRoaXMuZW5kcG9pbnQgKz0gYCZzb3J0PSR7c29ydH1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGxpbWl0KGxpbWl0KSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmxpbWl0PSR7bGltaXR9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBza2lwKHNraXApIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnN0YXR1cz0ke3N0YXR1c31gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFmdGVyKGFmdGVyKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJmFmdGVyPSR7YWZ0ZXJ9YFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzaG93TWV0YWZpZWxkcyhzaG93X21ldGFmaWVsZHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7c2hvd19tZXRhZmllbGRzfWBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdXNlQ2FjaGUodXNlX2NhY2hlKSB7XG4gICAgdGhpcy5lbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3VzZV9jYWNoZX1gXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJvbWlzZXIodGhpcy5lbmRwb2ludCkudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcywgbnVsbCkpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKG51bGwsIGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IG9iamVjdHNDaGFpbk1ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLy8gR2V0XG4gIGZpbmQocXVlcnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9JHtxdWVyeSA/IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocXVlcnkpKX1gIDogJyd9YFxuICAgIHJldHVybiBuZXcgRmluZENoYWluaW5nKGVuZHBvaW50KVxuICB9LFxuICAvLyBmaW5kT25lXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3F1ZXJ5LmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIHJldHVybiBuZXcgRmluZENoYWluaW5nKGVuZHBvaW50KVxuICB9LFxuICAvLyBBZGRcbiAgYXN5bmMgaW5zZXJ0T25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICAvLyBFZGl0XG4gIGFzeW5jIHVwZGF0ZU9uZShwYXJhbXMsIHNldCkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfWBcbiAgICBjb25zdCB1cGRhdGVzID0gc2V0LiRzZXRcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCB1cGRhdGVzLCBoZWFkZXJzKVxuICB9LFxuICAvLyBEZWxldGVcbiAgYXN5bmMgZGVsZXRlT25lKHBhcmFtcykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfSR7cGFyYW1zLnRyaWdnZXJfd2ViaG9vayA/ICc/dHJpZ2dlcl93ZWJob29rPXRydWUnIDogJyd9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5jb25zdCBvYmplY3RNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIG9iamVjdHM6IG9iamVjdHNDaGFpbk1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIGdldE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBlbmRwb2ludCA9IGFkZFBhcmFtc1RvT2JqZWN0c0VuZHBvaW50KGVuZHBvaW50LCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBwYXJhbXMgb2JqZWN0IHdpdGggb2JqZWN0IGlkJylcbiAgICB9XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3RSZXZpc2lvbnM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9ucz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGVuZHBvaW50ID0gYWRkUGFyYW1zVG9PYmplY3RzRW5kcG9pbnQoZW5kcG9pbnQsIHBhcmFtcylcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE1lcmdlUmVxdWVzdE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L21lcmdlLXJlcXVlc3RzLyR7cGFyYW1zLmlkfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgZW5kcG9pbnQgPSBhZGRQYXJhbXNUb09iamVjdHNFbmRwb2ludChlbmRwb2ludCwgcGFyYW1zKVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuR0VULCBlbmRwb2ludClcbiAgfSxcbiAgYWRkT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHNgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2BcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgZGVsZXRlIHBhcmFtcy50eXBlXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgaWRcbiAgICBkZWxldGUgcGFyYW1zLmlkXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZ2V0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICAvLy8gREVQUkVDQVRFRFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUEFUQ0gsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIH0sXG4gIGVkaXRPYmplY3RNZXRhZmllbGQ6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH0vbWV0YWZpZWxkcy8ke3BhcmFtcy5rZXl9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZFxuICAgIGRlbGV0ZSBwYXJhbXMua2V5XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZGVsZXRlT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBudWxsLCBoZWFkZXJzKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdE1ldGhvZHNcbiJdfQ==