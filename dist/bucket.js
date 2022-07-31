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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJvYmplY3RNZXRob2RzIiwicmVxdWlyZSIsIm9iamVjdFR5cGVNZXRob2RzIiwibWVkaWFNZXRob2RzIiwidXNlck1ldGhvZHMiLCJidWNrZXRfbWV0aG9kcyIsImJ1Y2tldF9jb25maWciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2J1Y2tldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvYmplY3RNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvb2JqZWN0JylcbmNvbnN0IG9iamVjdFR5cGVNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvb2JqZWN0LXR5cGUnKVxuY29uc3QgbWVkaWFNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvbWVkaWEnKVxuY29uc3QgdXNlck1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC91c2VyJylcbi8vIGNvbnN0IHdlYmhvb2tNZXRob2RzID0gcmVxdWlyZSgnLi9idWNrZXQvd2ViaG9vaycpIC8vIFRPRE9cbi8vIGNvbnN0IGV4dGVuc2lvbk1ldGhvZHMgPSByZXF1aXJlKCcuL2J1Y2tldC9leHRlbnNpb24nKSAvLyBUT0RPXG5cbmNvbnN0IGJ1Y2tldF9tZXRob2RzID0gKGJ1Y2tldF9jb25maWcpID0+ICh7XG4gIC4uLm9iamVjdE1ldGhvZHMoYnVja2V0X2NvbmZpZyksXG4gIC4uLm9iamVjdFR5cGVNZXRob2RzKChidWNrZXRfY29uZmlnKSksXG4gIC4uLm1lZGlhTWV0aG9kcygoYnVja2V0X2NvbmZpZykpLFxuICAuLi51c2VyTWV0aG9kcyhidWNrZXRfY29uZmlnKSxcbiAgLy8gLi4ud2ViaG9va01ldGhvZHMoYnVja2V0X2NvbmZpZyksIC8vIFRPRE9cbiAgLy8gLi4uZXh0ZW5zaW9uTWV0aG9kcyhidWNrZXRfY29uZmlnKSAvLyBUT0RPXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1Y2tldF9tZXRob2RzXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBN0I7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUdELE9BQU8sQ0FBQyxzQkFBRCxDQUFqQzs7QUFDQSxJQUFNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxnQkFBRCxDQUE1Qjs7QUFDQSxJQUFNRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxlQUFELENBQTNCLEMsQ0FDQTtBQUNBOzs7QUFFQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLGFBQUQ7RUFBQSxtRUFDbEJOLGFBQWEsQ0FBQ00sYUFBRCxDQURLLEdBRWxCSixpQkFBaUIsQ0FBRUksYUFBRixDQUZDLEdBR2xCSCxZQUFZLENBQUVHLGFBQUYsQ0FITSxHQUlsQkYsV0FBVyxDQUFDRSxhQUFELENBSk87QUFBQSxDQUF2Qjs7QUFTQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxjQUFqQiJ9