"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJvYmplY3RNZXRob2RzIiwicmVxdWlyZSIsIm9iamVjdFR5cGVNZXRob2RzIiwibWVkaWFNZXRob2RzIiwidXNlck1ldGhvZHMiLCJidWNrZXRfbWV0aG9kcyIsImJ1Y2tldF9jb25maWciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2J1Y2tldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvYmplY3RNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvb2JqZWN0JylcbmNvbnN0IG9iamVjdFR5cGVNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvb2JqZWN0LXR5cGUnKVxuY29uc3QgbWVkaWFNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvbWVkaWEnKVxuY29uc3QgdXNlck1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC91c2VyJylcbi8vIGNvbnN0IHdlYmhvb2tNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvd2ViaG9vaycpIC8vIFRPRE9cbi8vIGNvbnN0IGV4dGVuc2lvbk1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC9leHRlbnNpb24nKSAvLyBUT0RPXG5cbmNvbnN0IGJ1Y2tldF9tZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIC4uLm9iamVjdE1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIC4uLm9iamVjdFR5cGVNZXRob2RzKChidWNrZXRfY29uZmlnKSksXG4gIC4uLm1lZGlhTWV0aG9kcygoYnVja2V0X2NvbmZpZykpLFxuICAuLi51c2VyTWV0aG9kcyhidWNrZXRfY29uZmlnKVxuICAvLyAuLi53ZWJob29rTWV0aG9kcyhidWNrZXRfY29uZmlnKSwgLy8gVE9ET1xuICAvLyAuLi5leHRlbnNpb25NZXRob2RzKGJ1Y2tldF9jb25maWcpIC8vIFRPRE9cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gYnVja2V0X21ldGhvZHNcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxpQkFBRCxDQUE3Qjs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBR0QsT0FBTyxDQUFDLHNCQUFELENBQWpDOztBQUNBLElBQU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGdCQUFELENBQTVCOztBQUNBLElBQU1HLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGVBQUQsQ0FBM0IsQyxDQUNBO0FBQ0E7OztBQUVBLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsYUFBRDtFQUFBLG1FQUNsQk4sYUFBYSxDQUFDTSxhQUFELENBREssR0FFbEJKLGlCQUFpQixDQUFFSSxhQUFGLENBRkMsR0FHbEJILFlBQVksQ0FBRUcsYUFBRixDQUhNLEdBSWxCRixXQUFXLENBQUNFLGFBQUQsQ0FKTztBQUFBLENBQXZCOztBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILGNBQWpCIn0=