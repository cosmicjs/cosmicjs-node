"use strict";

var _require = require('../helpers/constants'),
    URI = _require.URI;

var HTTP_METHODS = require('../helpers/http_methods');

var _require2 = require('../helpers/request_handler'),
    requestHandler = _require2.requestHandler;

var headers;

var objectMethods = function objectMethods(bucket_config) {
  return {
    getObjects: function getObjects(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects?read_key=").concat(bucket_config.read_key);

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

      return requestHandler(HTTP_METHODS.GET, endpoint);
    },
    // TODO in REST v2
    // getMergeRequestObjects: (params) => {
    //   let endpoint = `${URI}/buckets/${bucket_config.slug}/merge-requests/${params.id}/objects?read_key=${bucket_config.read_key}`
    //   if (params && params.limit) {
    //     endpoint += `&limit=${params.limit}`
    //   }
    //   if (params && params.skip) {
    //     endpoint += `&skip=${params.skip}`
    //   }
    //   if (params && params.status) {
    //     endpoint += `&status=${params.status}`
    //   }
    //   if (params && params.after) {
    //     endpoint += `&after=${params.after}`
    //   }
    //   if (params && params.sort) {
    //     endpoint += `&sort=${params.sort}`
    //   }
    //   if (params && params.show_metafields) {
    //     endpoint += `&show_metafields=${params.show_metafields}`
    //   }
    //   if (params && params.pretty) {
    //     endpoint += `&pretty=${params.pretty}`
    //   }
    //   if (params && params.props) {
    //     endpoint += `&props=${params.props}`
    //   }
    //   if (params && params.query) {
    //     endpoint += `&query=${encodeURI(JSON.stringify(params.query))}`
    //   }
    //   if (params && typeof params.use_cache !== 'undefined') {
    //     endpoint += `&use_cache=${params.use_cache}`
    //   }
    //   return requestHandler(HTTP_METHODS.GET, endpoint)
    // },
    addObject: function addObject(params) {
      var endpoint = "".concat(URI, "/buckets/").concat(bucket_config.slug, "/objects");

      if (bucket_config.write_key) {
        headers = {
          "Authorization": "Bearer ".concat(bucket_config.write_key)
        };
      }

      return requestHandler(HTTP_METHODS.POST, endpoint, params, headers);
    },
    // TODO in REST v2
    // addObjectRevision: (params) => {
    //   const endpoint = `${URI}/buckets/${bucket_config.slug}/objects/${params.id}/revisions`
    //   if (bucket_config.write_key) {
    //     headers = {
    //       "Authorization": `Bearer ${bucket_config.write_key}`
    //     }
    //   }
    //   return requestHandler(HTTP_METHODS.POST, endpoint, params, headers)
    // },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXQvb2JqZWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJVUkkiLCJIVFRQX01FVEhPRFMiLCJyZXF1ZXN0SGFuZGxlciIsImhlYWRlcnMiLCJvYmplY3RNZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsImdldE9iamVjdHMiLCJwYXJhbXMiLCJlbmRwb2ludCIsInNsdWciLCJyZWFkX2tleSIsImxpbWl0Iiwic2tpcCIsInN0YXR1cyIsImFmdGVyIiwic29ydCIsInNob3dfbWV0YWZpZWxkcyIsInByZXR0eSIsInByb3BzIiwicXVlcnkiLCJlbmNvZGVVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlX2NhY2hlIiwiR0VUIiwiZ2V0T2JqZWN0IiwiRXJyb3IiLCJpZCIsImdldE9iamVjdFJldmlzaW9ucyIsImFkZE9iamVjdCIsIndyaXRlX2tleSIsIlBPU1QiLCJlZGl0T2JqZWN0IiwiUEFUQ0giLCJlZGl0T2JqZWN0TWV0YWZpZWxkcyIsImRlbGV0ZU9iamVjdCIsIkRFTEVURSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O2VBQWdCQSxPQUFPLENBQUMsc0JBQUQsQztJQUFmQyxHLFlBQUFBLEc7O0FBQ1IsSUFBTUMsWUFBWSxHQUFHRixPQUFPLENBQUMseUJBQUQsQ0FBNUI7O2dCQUMyQkEsT0FBTyxDQUFDLDRCQUFELEM7SUFBMUJHLGMsYUFBQUEsYzs7QUFDUixJQUFJQyxPQUFKOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsYUFBRDtBQUFBLFNBQW9CO0FBQ3hDQyxJQUFBQSxVQUFVLEVBQUUsb0JBQUNDLE1BQUQsRUFBWTtBQUN0QixVQUFJQyxRQUFRLGFBQU1SLEdBQU4sc0JBQXFCSyxhQUFhLENBQUNJLElBQW5DLCtCQUE0REosYUFBYSxDQUFDSyxRQUExRSxDQUFaOztBQUNBLFVBQUlILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxLQUFyQixFQUE0QjtBQUMxQkgsUUFBQUEs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QUFzQjVCLFFBQXRCLEVBQWdDLElBQWhDLEVBQXNDTCxPQUF0QyxDQUFyQjtBQUNEO0FBekt1QyxHQUFwQjtBQUFBLENBQXRCOztBQTRLQWtDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxDLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBVUkkgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29uc3RhbnRzJylcbmNvbnN0IEhUVFBfTUVUSE9EUyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaHR0cF9tZXRob2RzJylcbmNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcmVxdWVzdF9oYW5kbGVyJylcbmxldCBoZWFkZXJzO1xuXG5jb25zdCBvYmplY3RNZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIGdldE9iamVjdHM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHM/cmVhZF9rZXk9JHtidWNrZXRfY29uZmlnLnJlYWRfa2V5fWBcbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZsaW1pdD0ke3BhcmFtcy5saW1pdH1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2tpcD0ke3BhcmFtcy5za2lwfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc3RhdHVzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnN0YXR1cz0ke3BhcmFtcy5zdGF0dXN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5hZnRlcikge1xuICAgICAgZW5kcG9pbnQgKz0gYCZhZnRlcj0ke3BhcmFtcy5hZnRlcn1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnNvcnQpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc29ydD0ke3BhcmFtcy5zb3J0fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd19tZXRhZmllbGRzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnNob3dfbWV0YWZpZWxkcz0ke3BhcmFtcy5zaG93X21ldGFmaWVsZHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV0dHkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJldHR5PSR7cGFyYW1zLnByZXR0eX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByb3BzKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnByb3BzPSR7cGFyYW1zLnByb3BzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucXVlcnkpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcXVlcnk9JHtlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkocGFyYW1zLnF1ZXJ5KSl9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN1cHBseSBwYXJhbXMgb2JqZWN0IHdpdGggb2JqZWN0IGlkJylcbiAgICB9XG4gICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfT9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN0YXR1cykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzdGF0dXM9JHtwYXJhbXMuc3RhdHVzfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMudXNlX2NhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZW5kcG9pbnQgKz0gYCZ1c2VfY2FjaGU9JHtwYXJhbXMudXNlX2NhY2hlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5HRVQsIGVuZHBvaW50KVxuICB9LFxuICBnZXRPYmplY3RSZXZpc2lvbnM6IChwYXJhbXMpID0+IHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9ucz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gICAgICBlbmRwb2ludCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmFmdGVyKSB7XG4gICAgICBlbmRwb2ludCArPSBgJmFmdGVyPSR7cGFyYW1zLmFmdGVyfWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc29ydCkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZzb3J0PSR7cGFyYW1zLnNvcnR9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5zaG93X21ldGFmaWVsZHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7cGFyYW1zLnNob3dfbWV0YWZpZWxkc31gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXR0eSkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZwcmV0dHk9JHtwYXJhbXMucHJldHR5fWBcbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAgICAgZW5kcG9pbnQgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gXG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YFxuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIH0sXG4gIC8vIFRPRE8gaW4gUkVTVCB2MlxuICAvLyBnZXRNZXJnZVJlcXVlc3RPYmplY3RzOiAocGFyYW1zKSA9PiB7XG4gIC8vICAgbGV0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9tZXJnZS1yZXF1ZXN0cy8ke3BhcmFtcy5pZH0vb2JqZWN0cz9yZWFkX2tleT0ke2J1Y2tldF9jb25maWcucmVhZF9rZXl9YFxuICAvLyAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB7XG4gIC8vICAgICBlbmRwb2ludCArPSBgJmxpbWl0PSR7cGFyYW1zLmxpbWl0fWBcbiAgLy8gICB9XG4gIC8vICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkge1xuICAvLyAgICAgZW5kcG9pbnQgKz0gYCZza2lwPSR7cGFyYW1zLnNraXB9YFxuICAvLyAgIH1cbiAgLy8gICBpZiAocGFyYW1zICYmIHBhcmFtcy5zdGF0dXMpIHtcbiAgLy8gICAgIGVuZHBvaW50ICs9IGAmc3RhdHVzPSR7cGFyYW1zLnN0YXR1c31gXG4gIC8vICAgfVxuICAvLyAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmFmdGVyKSB7XG4gIC8vICAgICBlbmRwb2ludCArPSBgJmFmdGVyPSR7cGFyYW1zLmFmdGVyfWBcbiAgLy8gICB9XG4gIC8vICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc29ydCkge1xuICAvLyAgICAgZW5kcG9pbnQgKz0gYCZzb3J0PSR7cGFyYW1zLnNvcnR9YFxuICAvLyAgIH1cbiAgLy8gICBpZiAocGFyYW1zICYmIHBhcmFtcy5zaG93X21ldGFmaWVsZHMpIHtcbiAgLy8gICAgIGVuZHBvaW50ICs9IGAmc2hvd19tZXRhZmllbGRzPSR7cGFyYW1zLnNob3dfbWV0YWZpZWxkc31gXG4gIC8vICAgfVxuICAvLyAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXR0eSkge1xuICAvLyAgICAgZW5kcG9pbnQgKz0gYCZwcmV0dHk9JHtwYXJhbXMucHJldHR5fWBcbiAgLy8gICB9XG4gIC8vICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJvcHMpIHtcbiAgLy8gICAgIGVuZHBvaW50ICs9IGAmcHJvcHM9JHtwYXJhbXMucHJvcHN9YFxuICAvLyAgIH1cbiAgLy8gICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeSkge1xuICAvLyAgICAgZW5kcG9pbnQgKz0gYCZxdWVyeT0ke2VuY29kZVVSSShKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKX1gXG4gIC8vICAgfVxuICAvLyAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy51c2VfY2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vICAgICBlbmRwb2ludCArPSBgJnVzZV9jYWNoZT0ke3BhcmFtcy51c2VfY2FjaGV9YFxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLkdFVCwgZW5kcG9pbnQpXG4gIC8vIH0sXG4gIGFkZE9iamVjdDogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuUE9TVCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgLy8gVE9ETyBpbiBSRVNUIHYyXG4gIC8vIGFkZE9iamVjdFJldmlzaW9uOiAocGFyYW1zKSA9PiB7XG4gIC8vICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9L3JldmlzaW9uc2BcbiAgLy8gICBpZiAoYnVja2V0X2NvbmZpZy53cml0ZV9rZXkpIHtcbiAgLy8gICAgIGhlYWRlcnMgPSB7XG4gIC8vICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YnVja2V0X2NvbmZpZy53cml0ZV9rZXl9YFxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBPU1QsIGVuZHBvaW50LCBwYXJhbXMsIGhlYWRlcnMpXG4gIC8vIH0sXG4gIGVkaXRPYmplY3Q6IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke1VSSX0vYnVja2V0cy8ke2J1Y2tldF9jb25maWcuc2x1Z30vb2JqZWN0cy8ke3BhcmFtcy5pZH1gXG4gICAgaWYgKGJ1Y2tldF9jb25maWcud3JpdGVfa2V5KSB7XG4gICAgICBoZWFkZXJzID0ge1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2J1Y2tldF9jb25maWcud3JpdGVfa2V5fWBcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGlkXG4gICAgZGVsZXRlIHBhcmFtcy5pZDtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoSFRUUF9NRVRIT0RTLlBBVENILCBlbmRwb2ludCwgcGFyYW1zLCBoZWFkZXJzKVxuICB9LFxuICBlZGl0T2JqZWN0TWV0YWZpZWxkczogKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7VVJJfS9idWNrZXRzLyR7YnVja2V0X2NvbmZpZy5zbHVnfS9vYmplY3RzLyR7cGFyYW1zLmlkfS9tZXRhZmllbGRzYFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSBpZFxuICAgIGRlbGV0ZSBwYXJhbXMuaWQ7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKEhUVFBfTUVUSE9EUy5QQVRDSCwgZW5kcG9pbnQsIHBhcmFtcywgaGVhZGVycylcbiAgfSxcbiAgZGVsZXRlT2JqZWN0OiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVUkl9L2J1Y2tldHMvJHtidWNrZXRfY29uZmlnLnNsdWd9L29iamVjdHMvJHtwYXJhbXMuaWR9YFxuICAgIGlmIChidWNrZXRfY29uZmlnLndyaXRlX2tleSkge1xuICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtidWNrZXRfY29uZmlnLndyaXRlX2tleX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihIVFRQX01FVEhPRFMuREVMRVRFLCBlbmRwb2ludCwgbnVsbCwgaGVhZGVycylcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RNZXRob2RzXG4iXX0=