require('es6-promise').polyfill();
require('isomorphic-fetch');
var _ = require('lodash');

var api_url = 'https://api.cosmicjs.com';
var api_version = 'v1';

module.exports = {

  getBucket: function(config, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/?read_key=' + config.bucket.read_key;
    fetch(endpoint)
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
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
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/objects?read_key=' + config.bucket.read_key;
    fetch(endpoint)
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
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
      cosmic.objects.type = _.groupBy(objects, 'type_slug');
      cosmic.object = _.map(objects, keyMetafields);
      cosmic.object = _.indexBy(cosmic.object, 'slug');
      return callback(false, cosmic);
    });
  },

  getObjectType: function(config, object, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-type/' + object.type_slug + '?read_key=' + config.bucket.read_key;
    if (object.limit) endpoint += '&limit=' + object.limit;
    if (object.skip) endpoint +=  '&skip=' + object.skip;
    fetch(endpoint)
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
      cosmic.object = _.map(objects, keyMetafields);
      cosmic.object = _.indexBy(cosmic.object, "slug");
      return callback(false, cosmic);
    });
  },

  getObject: function(config, object, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object/' + object.slug + '?read_key=' + config.bucket.read_key;
    if (object._id) {
      endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-by-id/' + object._id + '?read_key=' + config.bucket.read_key;
    }
    fetch(endpoint)
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
        }
        return callback(err, false);
      }
      return response.json()
    })
    .then(function(response){
      // Constructor
      var cosmic = {};
      var object = response.object;
      var metafields = object.metafields;
      if(metafields){
        object.metafield = _.indexBy(metafields, "key");
      }
      cosmic.object = object;
      return callback(false, cosmic);
    });
  },

  getMedia: function(config, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/media?read_key=' + config.bucket.read_key;
    fetch(endpoint)
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
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
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/add-object';
    fetch(endpoint, {
      method: 'post',
      headers: {  
        'Content-type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
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
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/edit-object';
    fetch(endpoint, {
      method: 'put',
      headers: {  
        'Content-type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
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
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/delete-object';
    fetch(endpoint, {
      method: 'post',
      headers: {  
        'Content-type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(function(response){
      if (response.status >= 400) {
        var err = {
          'message': 'There was an error with this request.'
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
    object.metafield = _.indexBy(metafields, 'key');
  }
  return object;
}
