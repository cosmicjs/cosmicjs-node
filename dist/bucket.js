"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bucketMethods = require('./bucket/bucket');

var objectMethods = require('./bucket/object');

var objectTypeMethods = require('./bucket/object-type');

var mediaMethods = require('./bucket/media');

var userMethods = require('./bucket/user'); // const webhookMethods = require('./bucket/webhook') // TODO
// const extensionMethods = require('./bucket/extension') // TODO


var bucket_methods = function bucket_methods(bucket_config) {
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, bucketMethods(bucket_config)), objectMethods(bucket_config)), objectTypeMethods(bucket_config)), mediaMethods(bucket_config)), userMethods(bucket_config));
};

module.exports = bucket_methods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idWNrZXQuanMiXSwibmFtZXMiOlsiYnVja2V0TWV0aG9kcyIsInJlcXVpcmUiLCJvYmplY3RNZXRob2RzIiwib2JqZWN0VHlwZU1ldGhvZHMiLCJtZWRpYU1ldGhvZHMiLCJ1c2VyTWV0aG9kcyIsImJ1Y2tldF9tZXRob2RzIiwiYnVja2V0X2NvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBN0I7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBN0I7O0FBQ0EsSUFBTUUsaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQyxzQkFBRCxDQUFqQzs7QUFDQSxJQUFNRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxnQkFBRCxDQUE1Qjs7QUFDQSxJQUFNSSxXQUFXLEdBQUdKLE9BQU8sQ0FBQyxlQUFELENBQTNCLEMsQ0FDQTtBQUNBOzs7QUFFQSxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLGFBQUQ7QUFBQSxtRkFDbEJQLGFBQWEsQ0FBQ08sYUFBRCxDQURLLEdBRWxCTCxhQUFhLENBQUNLLGFBQUQsQ0FGSyxHQUdsQkosaUJBQWlCLENBQUVJLGFBQUYsQ0FIQyxHQUlsQkgsWUFBWSxDQUFFRyxhQUFGLENBSk0sR0FLbEJGLFdBQVcsQ0FBQ0UsYUFBRCxDQUxPO0FBQUEsQ0FBdkI7O0FBVUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidWNrZXRNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvYnVja2V0JylcbmNvbnN0IG9iamVjdE1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC9vYmplY3QnKVxuY29uc3Qgb2JqZWN0VHlwZU1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC9vYmplY3QtdHlwZScpXG5jb25zdCBtZWRpYU1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC9tZWRpYScpXG5jb25zdCB1c2VyTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L3VzZXInKVxuLy8gY29uc3Qgd2ViaG9va01ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC93ZWJob29rJykgLy8gVE9ET1xuLy8gY29uc3QgZXh0ZW5zaW9uTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L2V4dGVuc2lvbicpIC8vIFRPRE9cblxuY29uc3QgYnVja2V0X21ldGhvZHMgPSAoYnVja2V0X2NvbmZpZykgPT4gKHtcbiAgLi4uYnVja2V0TWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgLi4ub2JqZWN0TWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgLi4ub2JqZWN0VHlwZU1ldGhvZHMoKGJ1Y2tldF9jb25maWcpKSxcbiAgLi4ubWVkaWFNZXRob2RzKChidWNrZXRfY29uZmlnKSksXG4gIC4uLnVzZXJNZXRob2RzKGJ1Y2tldF9jb25maWcpLFxuICAvLyAuLi53ZWJob29rTWV0aG9kcyhidWNrZXRfY29uZmlnKSwgLy8gVE9ET1xuICAvLyAuLi5leHRlbnNpb25NZXRob2RzKGJ1Y2tldF9jb25maWcpIC8vIFRPRE9cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gYnVja2V0X21ldGhvZHNcbiJdfQ==