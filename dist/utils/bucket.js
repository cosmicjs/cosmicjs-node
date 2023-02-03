"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var objectMethods = require('./object');
var objectTypeMethods = require('./objectType');
var mediaMethods = require('./media');
var userMethods = require('./user');

/**
 * Returns an object containing all the methods for the given bucket.
 * @param _bucketConfig - The bucket configuration object.
 * @returns An object containing all the methods for the given bucket.
 */
var bucketMethods = function bucketMethods(apiConfig) {
  return function (_bucketConfig) {
    var bucketConfig = _objectSpread(_objectSpread({}, _bucketConfig), {}, {
      uri: apiConfig.apiUrl,
      uploadUri: apiConfig.uploadUrl
    });
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, objectMethods(bucketConfig)), objectTypeMethods(bucketConfig)), mediaMethods(bucketConfig)), userMethods(bucketConfig));
  };
};
module.exports = bucketMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJvYmplY3RNZXRob2RzIiwicmVxdWlyZSIsIm9iamVjdFR5cGVNZXRob2RzIiwibWVkaWFNZXRob2RzIiwidXNlck1ldGhvZHMiLCJidWNrZXRNZXRob2RzIiwiYXBpQ29uZmlnIiwiX2J1Y2tldENvbmZpZyIsImJ1Y2tldENvbmZpZyIsInVyaSIsImFwaVVybCIsInVwbG9hZFVyaSIsInVwbG9hZFVybCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvYnVja2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9iamVjdE1ldGhvZHMgPSByZXF1aXJlKCcuL29iamVjdCcpO1xuY29uc3Qgb2JqZWN0VHlwZU1ldGhvZHMgPSByZXF1aXJlKCcuL29iamVjdFR5cGUnKTtcbmNvbnN0IG1lZGlhTWV0aG9kcyA9IHJlcXVpcmUoJy4vbWVkaWEnKTtcbmNvbnN0IHVzZXJNZXRob2RzID0gcmVxdWlyZSgnLi91c2VyJyk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG1ldGhvZHMgZm9yIHRoZSBnaXZlbiBidWNrZXQuXG4gKiBAcGFyYW0gX2J1Y2tldENvbmZpZyAtIFRoZSBidWNrZXQgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIG1ldGhvZHMgZm9yIHRoZSBnaXZlbiBidWNrZXQuXG4gKi9cbmNvbnN0IGJ1Y2tldE1ldGhvZHMgPSAoYXBpQ29uZmlnKSA9PiAoX2J1Y2tldENvbmZpZykgPT4ge1xuICBjb25zdCBidWNrZXRDb25maWcgPSB7XG4gICAgLi4uX2J1Y2tldENvbmZpZyxcbiAgICB1cmk6IGFwaUNvbmZpZy5hcGlVcmwsXG4gICAgdXBsb2FkVXJpOiBhcGlDb25maWcudXBsb2FkVXJsLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4ub2JqZWN0TWV0aG9kcyhidWNrZXRDb25maWcpLFxuICAgIC4uLm9iamVjdFR5cGVNZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gICAgLi4ubWVkaWFNZXRob2RzKGJ1Y2tldENvbmZpZyksXG4gICAgLi4udXNlck1ldGhvZHMoYnVja2V0Q29uZmlnKSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVja2V0TWV0aG9kcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDekMsSUFBTUMsaUJBQWlCLEdBQUdELE9BQU8sQ0FBQyxjQUFjLENBQUM7QUFDakQsSUFBTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLElBQU1HLFdBQVcsR0FBR0gsT0FBTyxDQUFDLFFBQVEsQ0FBQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxTQUFTO0VBQUEsT0FBSyxVQUFDQyxhQUFhLEVBQUs7SUFDdEQsSUFBTUMsWUFBWSxtQ0FDYkQsYUFBYTtNQUNoQkUsR0FBRyxFQUFFSCxTQUFTLENBQUNJLE1BQU07TUFDckJDLFNBQVMsRUFBRUwsU0FBUyxDQUFDTTtJQUFTLEVBQy9CO0lBRUQsbUVBQ0taLGFBQWEsQ0FBQ1EsWUFBWSxDQUFDLEdBQzNCTixpQkFBaUIsQ0FBQ00sWUFBWSxDQUFDLEdBQy9CTCxZQUFZLENBQUNLLFlBQVksQ0FBQyxHQUMxQkosV0FBVyxDQUFDSSxZQUFZLENBQUM7RUFFaEMsQ0FBQztBQUFBO0FBRURLLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHVCxhQUFhIn0=