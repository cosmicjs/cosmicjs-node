"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var objectMethods = function objectMethods(bucket_config) {
  return {
    getObjects: function getObjects(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key);

      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }

      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }

      if (params && params.locale) {
        endpoint += "&locale=".concat(params.locale);
      }

      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }

      if (params && params.sort) {
        endpoint += "&sort=".concat(params.sort);
      } // Type param


      if (params && params.type) {
        endpoint += "&type=".concat(params.type);
      } // Search params


      if (params && params.q) {
        endpoint += "&q=".concat(params.q);
      }

      if (params && params.metafield_key) {
        endpoint += "&metafield_key=".concat(params.metafield_key);
      }

      if (params && params.metafield_value) {
        endpoint += "&metafield_value=".concat(params.metafield_value);
      }

      if (params && params.metafield_object_id) {
        endpoint += "&metafield_object_id=".concat(params.metafield_object_id);
      }

      if (params && params.hide_metafields) {
        endpoint += "&hide_metafields=".concat(params.hide_metafields);
      }

      if (params && params.pretty) {
        endpoint += "&pretty=".concat(params.pretty);
      }

      if (params && params.filters) {
        Object.keys(params.filters).forEach(function (key) {
          endpoint += "&filters[".concat(key, "]=").concat(params.filters[key]);
        });
      }

      if (params && params.metadata) {
        Object.keys(params.metadata).forEach(function (key) {
          endpoint += "&metadata[".concat(key, "]=").concat(params.metadata[key]);
        });
      }

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      if (params && typeof params.created_by !== 'undefined') {
        endpoint += "&created_by=".concat(params.created_by);
      }

      if (params && typeof params.depth !== 'undefined') {
        endpoint += "&depth=".concat(params.depth);
      }

      if (params && params.query) {
        endpoint += "&query=".concat(encodeURI(JSON.stringify(params.query)));
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    getObject: function getObject(params) {
      if (!params) {
        throw new Error('Must supply params object with object slug');
      }

      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/object/").concat(params.slug, "?read_key=").concat(bucket_config.read_key);

      if (params && params.locale) {
        endpoint += "&locale=".concat(params.locale);
      }

      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }

      if (params && params.revision) {
        endpoint += "&revision=".concat(params.revision);
      }

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      if (params && typeof params.depth !== 'undefined') {
        endpoint += "&depth=".concat(params.depth);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    getObjectRevisions: function getObjectRevisions(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/object/").concat(params.slug, "/revisions?read_key=").concat(bucket_config.read_key);

      if (params && params.limit) {
        endpoint += "&limit=".concat(params.limit);
      }

      if (params && params.skip) {
        endpoint += "&skip=".concat(params.skip);
      }

      if (params && params.locale) {
        endpoint += "&locale=".concat(params.locale);
      }

      if (params && params.status) {
        endpoint += "&status=".concat(params.status);
      }

      if (params && params.sort) {
        endpoint += "&sort=".concat(params.sort);
      }

      if (params && params.hide_metafields) {
        endpoint += "&hide_metafields=".concat(params.hide_metafields);
      }

      if (params && params.pretty) {
        endpoint += "&pretty=".concat(params.pretty);
      }

      if (params && params.filters) {
        Object.keys(params.filters).forEach(function (key) {
          endpoint += "&filters[".concat(key, "]=").concat(params.filters[key]);
        });
      }

      if (params && params.metadata) {
        Object.keys(params.metadata).forEach(function (key) {
          endpoint += "&metadata[".concat(key, "]=").concat(params.metadata[key]);
        });
      }

      if (params && params.props) {
        endpoint += "&props=".concat(params.props);
      }

      if (params && typeof params.created_by !== 'undefined') {
        endpoint += "&created_by=".concat(params.created_by);
      }

      if (params && typeof params.depth !== 'undefined') {
        endpoint += "&depth=".concat(params.depth);
      }

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    addObject: function addObject(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/add-object");

      if (bucket_config.write_key) {
        params.write_key = bucket_config.write_key;
      }

      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    addObjectRevision: function addObjectRevision(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/object/").concat(params.slug, "/revisions");

      if (bucket_config.write_key) {
        params.write_key = bucket_config.write_key;
      }

      return requestHandler(HTTP_METHODS.POST, endpoint, params);
    },
    editObject: function editObject(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/edit-object");

      if (bucket_config.write_key) {
        params.write_key = bucket_config.write_key;
      }

      return requestHandler(HTTP_METHODS.PUT, endpoint, params);
    },
    editObjectMetafields: function editObjectMetafields(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/edit-object-metafields");

      if (bucket_config.write_key) {
        params.write_key = bucket_config.write_key;
      }

      return requestHandler(HTTP_METHODS.PATCH, endpoint, params);
    },
    deleteObject: function deleteObject(params) {
      var endpoint = "".concat(URI, "/").concat(bucket_config.slug, "/objects/").concat(params.slug);

      var bucket_data = _objectSpread({}, bucket_config);

      var data = Object.assign(bucket_data, params);
      return requestHandler(HTTP_METHODS.DELETE, endpoint, data);
    }
  };
};

module.exports = objectMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsIm9iamVjdE1ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwiZ2V0T2JqZWN0cyIsInBhcmFtcyIsImVuZHBvaW50Iiwic2x1ZyIsInJlYWRfa2V5IiwibGltaXQiLCJza2lwIiwibG9jYWxlIiwic3RhdHVzIiwic29ydCIsInR5cGUiLCJxIiwibWV0YWZpZWxkX2tleSIsIm1ldGFmaWVsZF92YWx1ZSIsIm1ldGFmaWVsZF9vYmplY3RfaWQiLCJoaWRlX21ldGFmaWVsZHMiLCJwcmV0dHkiLCJmaWx0ZXJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJtZXRhZGF0YSIsInByb3BzIiwiY3JlYXRlZF9ieSIsImRlcHRoIiwicXVlcnkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwiR0VUIiwiZ2V0T2JqZWN0IiwiRXJyb3IiLCJyZXZpc2lvbiIsImdldE9iamVjdFJldmlzaW9ucyIsImFkZE9iamVjdCIsIndyaXRlX2tleSIsIlBPU1QiLCJhZGRPYmplY3RSZXZpc2lvbiIsImVkaXRPYmplY3QiLCJQVVQiLCJlZGl0T2JqZWN0TWV0YWZpZWxkcyIsIlBBVENIIiwiZGVsZXRlT2JqZWN0IiwiYnVja2V0X2RhdGEiLCJkYXRhIiwiYXNzaWduIiwiREVMRVRFIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7ZUFBZ0JBLE9BQU8sQ0FBQyxzQkFBRCxDO0lBQWZDLEcsWUFBQUEsRzs7QUFDUixJQUFNQyxZQUFZLEdBQUdGLE9BQU8sQ0FBQyx5QkFBRCxDQUE1Qjs7Z0JBQzJCQSxPQUFPLENBQUMsNEJBQUQsQztJQUExQkcsYyxhQUFBQSxjOztBQUVSLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsYUFBRDtBQUFBLFNBQW9CO0FBQ3hDQyxJQUFB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LENBQUNtRCxNQUFkLEVBQXNCN0MsUUFBdEIsRUFBZ0MyQyxJQUFoQyxDQUFyQjtBQUNEO0FBcEt1QyxHQUFwQjtBQUFBLENBQXRCOztBQXVLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkQsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFVSSSB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb25zdGFudHMnKVxuY29uc3QgSFRUUF9NRVRIT0RTID0gcmVxdWlyZSgnLi4vaGVscGVycy9odHRwX21ldGhvZHMnKVxuY29uc3QgeyByZXF1ZXN0SGFuZGxlciB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXF1ZXN0X2hhbmRsZXInKVxuXG5jb25zdCBvYmplY3RNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIGdldE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzP3JlYWRfa2V5PSR7YnVja2V0X2NvbmZpZy5yZWFkX2tleX1gXG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubGltaXQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbGltaXQ9JHtwYXJhbXMubGltaXR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5za2lwKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNraXA9JHtwYXJhbXMuc2tpcH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxvY2FsZSkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsb2NhbGU9JHtwYXJhbXMubG9jYWxlfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zb3J0KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNvcnQ9JHtwYXJhbXMuc29ydH1gXG4gICAgfVxuICAgIC8vIFR5cGUgcGFyYW1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy50eXBlKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnR5cGU9JHtwYXJhbXMudHlwZX1gXG4gICAgfVxuICAgIC8vIFNlYXJjaCBwYXJhbXNcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5xKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnE9JHtwYXJhbXMucX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLm1ldGFmaWVsZF9rZXkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbWV0YWZpZWxkX2tleT0ke3BhcmFtcy5tZXRhZmllbGRfa2V5fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubWV0YWZpZWxkX3ZhbHVlKSB7XG4gICAgICBlbmRwb2ludCArPSBgJm1ldGFmaWVsZF92YWx1ZT0ke3BhcmFtcy5tZXRhZmllbGRfdmFsdWV9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5tZXRhZmllbGRfb2JqZWN0X2lkKSB7XG4gICAgICBlbmRwb2ludCArPSBgJm1ldGFmaWVsZF9vYmplY3RfaWQ9JHtwYXJhbXMubWV0YWZpZWxkX29iamVjdF9pZH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmhpZGVfbWV0YWZpZWxkcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZoaWRlX21ldGFmaWVsZHM9JHtwYXJhbXMuaGlkZV9tZXRhZmllbGRzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJldHR5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByZXR0eT0ke3BhcmFtcy5wcmV0dHl9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5maWx0ZXJzKSB7XG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMuZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGVuZHBvaW50ICs9IGAmZmlsdGVyc1ske2tleX1dPSR7cGFyYW1zLmZpbHRlcnNba2V5XX1gXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5tZXRhZGF0YSkge1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1zLm1ldGFkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgZW5kcG9pbnQgKz0gYCZtZXRhZGF0YVske2tleX1dPSR7cGFyYW1zLm1ldGFkYXRhW2tleV19YFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMuY3JlYXRlZF9ieSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmY3JlYXRlZF9ieT0ke3BhcmFtcy5jcmVhdGVkX2J5fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLmRlcHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZkZXB0aD0ke3BhcmFtcy5kZXB0aH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBlbmRwb2ludCArPSBgJnF1ZXJ5PSR7ZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KHBhcmFtcy5xdWVyeSkpfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBwYXJhbXMgb2JqZWN0IHdpdGggb2JqZWN0IHNsdWcnKVxuICAgIH1cbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9LyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3QvJHtwYXJhbXMuc2x1Z30/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5sb2NhbGUpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmbG9jYWxlPSR7cGFyYW1zLmxvY2FsZX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucmV2aXNpb24pIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcmV2aXNpb249JHtwYXJhbXMucmV2aXNpb259YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5kZXB0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmZGVwdGg9JHtwYXJhbXMuZGVwdGh9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIGdldE9iamVjdFJldmlzaW9uczogKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdC8ke3BhcmFtcy5zbHVnfS9yZXZpc2lvbnM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubG9jYWxlKSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxvY2FsZT0ke3BhcmFtcy5sb2NhbGV9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc29ydD0ke3BhcmFtcy5zb3J0fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuaGlkZV9tZXRhZmllbGRzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJmhpZGVfbWV0YWZpZWxkcz0ke3BhcmFtcy5oaWRlX21ldGFmaWVsZHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJldHR5PSR7cGFyYW1zLnByZXR0eX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmZpbHRlcnMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcy5maWx0ZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgZW5kcG9pbnQgKz0gYCZmaWx0ZXJzWyR7a2V5fV09JHtwYXJhbXMuZmlsdGVyc1trZXldfWBcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLm1ldGFkYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMubWV0YWRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBlbmRwb2ludCArPSBgJm1ldGFkYXRhWyR7a2V5fV09JHtwYXJhbXMubWV0YWRhdGFba2V5XX1gXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcm9wcykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcm9wcz0ke3BhcmFtcy5wcm9wc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5jcmVhdGVkX2J5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZjcmVhdGVkX2J5PSR7cGFyYW1zLmNyZWF0ZWRfYnl9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMuZGVwdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbmRwb2ludCArPSBgJmRlcHRoPSR7cGFyYW1zLmRlcHRofWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBhZGRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L2FkZC1vYmplY3RgXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBwYXJhbXMud3JpdGVfa2V5ID0gYnVja2V0X2NvbmZpZy53cml0ZV9rZXlcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QT1NULCBlbmRwb2ludCwgcGFyYW1zKVxuICB9LFxuICBhZGRPYmplY3RSZXZpc2lvbjogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0LyR7cGFyYW1zLnNsdWd9L3JldmlzaW9uc2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIHBhcmFtcy53cml0ZV9rZXkgPSBidWNrZXRfY29uZmlnLndyaXRlX2tleVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMpXG4gIH0sXG4gIGVkaXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L2VkaXQtb2JqZWN0YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgcGFyYW1zLndyaXRlX2tleSA9IGJ1Y2tldF9jb25maWcud3JpdGVfa2V5XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUFVULCBlbmRwb2ludCwgcGFyYW1zKVxuICB9LFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS8ke2J1Y2tldF9jb25maWcuc2x1Z30vZWRpdC1vYmplY3QtbWV0YWZpZWxkc2BcbiAgICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgICAgIHBhcmFtcy53cml0ZV9rZXkgPSBidWNrZXRfY29uZmlnLndyaXRlX2tleVxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zKVxuICB9LFxuICBkZWxldGVPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuc2x1Z31gXG4gICAgY29uc3QgYnVja2V0X2RhdGEgPSB7IC4uLmJ1Y2tldF9jb25maWcgfVxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKGJ1Y2tldF9kYXRhLCBwYXJhbXMpXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5ERUxFVEUsIGVuZHBvaW50LCBkYXRhKVxuICB9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdE1ldGhvZHNcbiJdfQ==