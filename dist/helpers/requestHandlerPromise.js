"use strict";

var axios = require('axios');

/**
 * Initialize the API with the given config.
 * @param config - The config object.
 * @returns None
 */
var init = function init(config) {
  // Accept Encoding in Node
  if (typeof window === 'undefined') {
    axios.defaults.headers.common['Accept-Encoding'] = 'gzip, deflate';
  }
  if (config && config.token) {
    axios.defaults.headers.common.Authorization = config.token;
  }
};

/**
 * A wrapper for axios that makes it easier to make requests.
 * @param method - The HTTP method to use.
 * @param url - The URL to make the request to.
 * @param data - The data to send with the request.
 * @param headers - The headers to send with the request.
 * @returns A promise that resolves to the response.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJpbml0IiwiY29uZmlnIiwid2luZG93IiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJBdXRob3JpemF0aW9uIiwicmVxdWVzdEhhbmRsZXIiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3JlcXVlc3RIYW5kbGVyUHJvbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgQVBJIHdpdGggdGhlIGdpdmVuIGNvbmZpZy5cbiAqIEBwYXJhbSBjb25maWcgLSBUaGUgY29uZmlnIG9iamVjdC5cbiAqIEByZXR1cm5zIE5vbmVcbiAqL1xuY29uc3QgaW5pdCA9IChjb25maWcpID0+IHtcbiAgLy8gQWNjZXB0IEVuY29kaW5nIGluIE5vZGVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0FjY2VwdC1FbmNvZGluZyddID0gJ2d6aXAsIGRlZmxhdGUnO1xuICB9XG4gIGlmIChjb25maWcgJiYgY29uZmlnLnRva2VuKSB7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uQXV0aG9yaXphdGlvbiA9IGNvbmZpZy50b2tlbjtcbiAgfVxufTtcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIGF4aW9zIHRoYXQgbWFrZXMgaXQgZWFzaWVyIHRvIG1ha2UgcmVxdWVzdHMuXG4gKiBAcGFyYW0gbWV0aG9kIC0gVGhlIEhUVFAgbWV0aG9kIHRvIHVzZS5cbiAqIEBwYXJhbSB1cmwgLSBUaGUgVVJMIHRvIG1ha2UgdGhlIHJlcXVlc3QgdG8uXG4gKiBAcGFyYW0gZGF0YSAtIFRoZSBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cbiAqIEBwYXJhbSBoZWFkZXJzIC0gVGhlIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHJlc3BvbnNlLlxuICovXG5jb25zdCByZXF1ZXN0SGFuZGxlciA9IChtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycykgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbWV0aG9kLFxuICAgIHVybCxcbiAgICBkYXRhLFxuICAgIGhlYWRlcnMsXG4gIH07XG4gIHJldHVybiBheGlvcyhjb25maWcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQsXG4gIHJlcXVlc3RIYW5kbGVyLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSSxDQUFJQyxNQUFNLEVBQUs7RUFDdkI7RUFDQSxJQUFJLE9BQU9DLE1BQU0sS0FBSyxXQUFXLEVBQUU7SUFDakNKLEtBQUssQ0FBQ0ssUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWU7RUFDcEU7RUFDQSxJQUFJSixNQUFNLElBQUlBLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFO0lBQzFCUixLQUFLLENBQUNLLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUNFLGFBQWEsR0FBR04sTUFBTSxDQUFDSyxLQUFLO0VBQzVEO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLENBQUlDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVQLE9BQU8sRUFBSztFQUNyRCxJQUFNSCxNQUFNLEdBQUc7SUFDYlEsTUFBTSxFQUFOQSxNQUFNO0lBQ05DLEdBQUcsRUFBSEEsR0FBRztJQUNIQyxJQUFJLEVBQUpBLElBQUk7SUFDSlAsT0FBTyxFQUFQQTtFQUNGLENBQUM7RUFDRCxPQUFPTixLQUFLLENBQUNHLE1BQU0sQ0FBQztBQUN0QixDQUFDO0FBRURXLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZiLElBQUksRUFBSkEsSUFBSTtFQUNKUSxjQUFjLEVBQWRBO0FBQ0YsQ0FBQyJ9