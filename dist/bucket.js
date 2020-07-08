"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bucketMethods = require('./bucket/bucket');

var objectMethods = require('./bucket/object');

var objectTypeMethods = require('./bucket/object-type');

var mediaMethods = require('./bucket/media');

var userMethods = require('./bucket/user');

var webhookMethods = require('./bucket/webhook');

var extensionMethods = require('./bucket/extension');

var bucket_methods = function bucket_methods(bucket_config) {
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, bucketMethods(bucket_config)), objectMethods(bucket_config)), objectTypeMethods(bucket_config)), mediaMethods(bucket_config)), userMethods(bucket_config)), webhookMethods(bucket_config)), extensionMethods(bucket_config));
};

module.exports = bucket_methods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idWNrZXQuanMiXSwibmFtZXMiOlsiYnVja2V0TWV0aG9kcyIsInJlcXVpcmUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0VHlwZU1ldGhvZHMiLCJtZWRpYU1ldGhvZHMiLCJ1c2VyTWV0aG9kcyIsIndlYmhvb2tNZXRob2RzIiwiZXh0ZW5zaW9uTWV0aG9kcyIsImJ1Y2tldF9tZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBN0I7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBN0I7O0FBQ0EsSUFBTUUsaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQyxzQkFBRCxDQUFqQzs7QUFDQSxJQUFNRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxnQkFBRCxDQUE1Qjs7QUFDQSxJQUFNSSxXQUFXLEdBQUdKLE9BQU8sQ0FBQyxlQUFELENBQTNCOztBQUNBLElBQU1LLGNBQWMsR0FBR0wsT0FBTyxDQUFDLGtCQUFELENBQTlCOztBQUNBLElBQU1NLGdCQUFnQixHQUFHTixPQUFPLENBQUMsb0JBQUQsQ0FBaEM7O0FBRUEsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxhQUFEO0FBQUEsK0dBQ2xCVCxhQUFhLENBQUNTLGFBQUQsQ0FESyxHQUVsQlAsYUFBYSxDQUFDTyxhQUFELENBRkssR0FHbEJOLGlCQUFpQixDQUFFTSxhQUFGLENBSEMsR0FJbEJMLFlBQVksQ0FBRUssYUFBRixDQUpNLEdBS2xCSixXQUFXLENBQUNJLGFBQUQsQ0FMTyxHQU1sQkgsY0FBYyxDQUFDRyxhQUFELENBTkksR0FPbEJGLGdCQUFnQixDQUFDRSxhQUFELENBUEU7QUFBQSxDQUF2Qjs7QUFVQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1Y2tldE1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC9idWNrZXQnKVxuY29uc3Qgb2JqZWN0TWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L29iamVjdCcpXG5jb25zdCBvYmplY3RUeXBlTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L29iamVjdC10eXBlJylcbmNvbnN0IG1lZGlhTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L21lZGlhJylcbmNvbnN0IHVzZXJNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvdXNlcicpXG5jb25zdCB3ZWJob29rTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L3dlYmhvb2snKVxuY29uc3QgZXh0ZW5zaW9uTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L2V4dGVuc2lvbicpXG5cbmNvbnN0IGJ1Y2tldF9tZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIC4uLmJ1Y2tldE1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIC4uLm9iamVjdE1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIC4uLm9iamVjdFR5cGVNZXRob2RzKChidWNrZXRfY29uZmlnKSksXG4gIC4uLm1lZGlhTWV0aG9kcygoYnVja2V0X2NvbmZpZykpLFxuICAuLi51c2VyTWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgLi4ud2ViaG9va01ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIC4uLmV4dGVuc2lvbk1ldGhvZHMoYnVja2V0X2NvbmZpZylcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gYnVja2V0X21ldGhvZHNcbiJdfQ==