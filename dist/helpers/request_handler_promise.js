"use strict";

var axios = require('axios');

var init = function init(config) {
  // Accept Encoding in Node
  if (typeof window === 'undefined') {
    axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate';
  }

  if (config && config.token) {
    axios.defaults.headers.common.Authorization = config.token;
  }
};

var requestHandler = function requestHandler(method, url, data, headers) {
  var config = {
    method: method,
    url: url,
    data: data,
    headers: headers
  };
  return axios(config);
};

module.exports = {
  init: init,
  requestHandler: requestHandler
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJpbml0IiwiY29uZmlnIiwid2luZG93IiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJBdXRob3JpemF0aW9uIiwicmVxdWVzdEhhbmRsZXIiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3JlcXVlc3RfaGFuZGxlcl9wcm9taXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBpbml0ID0gKGNvbmZpZykgPT4ge1xuICAvLyBBY2NlcHQgRW5jb2RpbmcgaW4gTm9kZVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQWNjZXB0LUVuY29kaW5nJ10gPSAnZ3ppcCwgZGVmbGF0ZSdcbiAgfVxuICBpZiAoY29uZmlnICYmIGNvbmZpZy50b2tlbikge1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uLkF1dGhvcml6YXRpb24gPSBjb25maWcudG9rZW5cbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SGFuZGxlciA9IChtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycykgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbWV0aG9kLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICAgIGhlYWRlcnNcbiAgfVxuICByZXR1cm4gYXhpb3MoY29uZmlnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCxcbiAgcmVxdWVzdEhhbmRsZXJcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLE1BQUQsRUFBWTtFQUN2QjtFQUNBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0osS0FBSyxDQUFDSyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGlCQUE5QixJQUFtRCxlQUFuRDtFQUNEOztFQUNELElBQUlKLE1BQU0sSUFBSUEsTUFBTSxDQUFDSyxLQUFyQixFQUE0QjtJQUMxQlIsS0FBSyxDQUFDSyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCRSxhQUE5QixHQUE4Q04sTUFBTSxDQUFDSyxLQUFyRDtFQUNEO0FBQ0YsQ0FSRDs7QUFVQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CUCxPQUFwQixFQUFnQztFQUNyRCxJQUFNSCxNQUFNLEdBQUc7SUFDYlEsTUFBTSxFQUFOQSxNQURhO0lBRWJDLEdBQUcsRUFBSEEsR0FGYTtJQUdiQyxJQUFJLEVBQUpBLElBSGE7SUFJYlAsT0FBTyxFQUFQQTtFQUphLENBQWY7RUFNQSxPQUFPTixLQUFLLENBQUNHLE1BQUQsQ0FBWjtBQUNELENBUkQ7O0FBVUFXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtFQUNmYixJQUFJLEVBQUpBLElBRGU7RUFFZlEsY0FBYyxFQUFkQTtBQUZlLENBQWpCIn0=