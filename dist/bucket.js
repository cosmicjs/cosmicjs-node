"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var objectMethods = require('./bucket/object');

var objectTypeMethods = require('./bucket/object-type');

var mediaMethods = require('./bucket/media');

var userMethods = require('./bucket/user'); // const webhookMethods = require('./bucket/webhook') // TODO
// const extensionMethods = require('./bucket/extension') // TODO


var bucket_methods = function bucket_methods(bucket_config) {
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, objectMethods(bucket_config)), objectTypeMethods(bucket_config)), mediaMethods(bucket_config)), userMethods(bucket_config));
};

module.exports = bucket_methods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idWNrZXQuanMiXSwibmFtZXMiOlsib2JqZWN0TWV0aG9kcyIsInJlcXVpcmUiLCJvYmplY3RUeXBlTWV0aG9kcyIsIm1lZGlhTWV0aG9kcyIsInVzZXJNZXRob2RzIiwiYnVja2V0X21ldGhvZHMiLCJidWNrZXRfY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxpQkFBRCxDQUE3Qjs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBR0QsT0FBTyxDQUFDLHNCQUFELENBQWpDOztBQUNBLElBQU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGdCQUFELENBQTVCOztBQUNBLElBQU1HLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGVBQUQsQ0FBM0IsQyxDQUNBO0FBQ0E7OztBQUVBLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsYUFBRDtBQUFBLHFFQUNsQk4sYUFBYSxDQUFDTSxhQUFELENBREssR0FFbEJKLGlCQUFpQixDQUFFSSxhQUFGLENBRkMsR0FHbEJILFlBQVksQ0FBRUcsYUFBRixDQUhNLEdBSWxCRixXQUFXLENBQUNFLGFBQUQsQ0FKTztBQUFBLENBQXZCOztBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb2JqZWN0TWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L29iamVjdCcpXG5jb25zdCBvYmplY3RUeXBlTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L29iamVjdC10eXBlJylcbmNvbnN0IG1lZGlhTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L21lZGlhJylcbmNvbnN0IHVzZXJNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvdXNlcicpXG4vLyBjb25zdCB3ZWJob29rTWV0aG9kcyA9IHJlcXVpcmUoJy4vYnVja2V0L3dlYmhvb2snKSAvLyBUT0RPXG4vLyBjb25zdCBleHRlbnNpb25NZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvZXh0ZW5zaW9uJykgLy8gVE9ET1xuXG5jb25zdCBidWNrZXRfbWV0aG9kcyA9IChidWNrZXRfY29uZmlnKSA9PiAoe1xuICAuLi5vYmplY3RNZXRob2RzKGJ1Y2tldF9jb25maWcpLFxuICAuLi5vYmplY3RUeXBlTWV0aG9kcygoYnVja2V0X2NvbmZpZykpLFxuICAuLi5tZWRpYU1ldGhvZHMoKGJ1Y2tldF9jb25maWcpKSxcbiAgLi4udXNlck1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIC8vIC4uLndlYmhvb2tNZXRob2RzKGJ1Y2tldF9jb25maWcpLCAvLyBUT0RPXG4gIC8vIC4uLmV4dGVuc2lvbk1ldGhvZHMoYnVja2V0X2NvbmZpZykgLy8gVE9ET1xufSlcblxubW9kdWxlLmV4cG9ydHMgPSBidWNrZXRfbWV0aG9kc1xuIl19