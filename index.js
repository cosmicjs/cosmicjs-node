require('es6-promise').polyfill();
require('isomorphic-fetch');
var _ = require('lodash');

var api_url = 'https://api.cosmicjs.com';
var api_version = 'v1';

module.exports = {

  getBucket: function(config, callback){
    var bucket_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/?read_key=' + config.bucket.read_key;
    fetch(bucket_url)
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          "message" : "There was an error with this request."
        }
        return callback(err, false);
      }
      return response.json()
    })
    .then(function(response){
      return callback(false, response);
    });
  },
	
  getObjects: function(config, callback){
    var objects_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/objects?read_key=' + config.bucket.read_key;
    fetch(objects_url)
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          "message" : "There was an error with this request."
        }
        return callback(err, false);
      }
      return response.json()
    })
    .then(function(response){
      // Constructor
      var cosmic = {};
      var objects = response.objects;
      cosmic.objects = {};
      cosmic.objects.all = objects;
      cosmic.objects.type = _.groupBy(objects, "type_slug");
      cosmic.object = _.map(objects, keyMetafields);
      cosmic.object = _.indexBy(cosmic.object, "slug");
      return callback(false, cosmic);
    });
  },

  getMedia: function(config, callback){
    var media_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/media?read_key=' + config.bucket.read_key;
    fetch(bucket_url)
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          "message" : "There was an error with this request."
        }
        return callback(err, false);
      }
      return response.json()
    })
    .then(function(response){
      return callback(false, response);
    });
  },

  addObject: function(config, object, callback){
    var add_object_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/add-object';
    fetch(add_object_url,{
      method: 'post',
      headers: {  
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: transformRequest(object)
    })
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          "message" : "There was an error with this request."
        }
        return callback(err, false);
      }
      return response.json()
    })
    .then(function(response){
      return callback(false, response);
    });
  },

  editObject: function(config, object, callback){
    var edit_object_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/edit-object';
    fetch(edit_object_url,{
      method: 'post',
      headers: {  
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: transformRequest(object)
    })
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          "message" : "There was an error with this request."
        }
        return callback(err, false);
      }
      return response.json()
    })
    .then(function(response){
      return callback(false, response);
    });
  },

  deleteObject: function(config, object, callback){
    var delete_object_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/delete-object';
    fetch(delete_object_url,{
      method: 'post',
      headers: {  
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: transformRequest(object)
    })
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          "message" : "There was an error with this request."
        }
        return callback(err, false);
      }
      return response.json()
    })
    .then(function(response){
      return callback(false, response);
    });
  }
};

// Functions
function keyMetafields(object){
  var metafields = object.metafields;
  if(metafields){
    object.metafield = _.indexBy(metafields, "key");
  }
  return object;
}
function transformRequest(obj){
  var str = [];
  for(var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  return str.join("&");
}