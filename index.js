require('es6-promise').polyfill();
require('isomorphic-fetch');
var _ = require('lodash');
var superagent = require('superagent');
var FormData = require('form-data');

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
      cosmic.object = _.keyBy(cosmic.object, 'slug');
      return callback(false, cosmic);
    });
  },

  getObjectsByType: function(config, object, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-type/' + object.type_slug + '?read_key=' + config.bucket.read_key;
    if (object.limit) endpoint += '&limit=' + object.limit;
    if (object.skip) endpoint +=  '&skip=' + object.skip;
    if (object.locale) endpoint += '&locale=' + object.locale;
    if (object.status) endpoint += '&status=' + object.status;
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
      cosmic.object = _.keyBy(cosmic.object, "slug");
      cosmic.total = response.total;
      return callback(false, cosmic);
    });
  },

  // DEPRECATE THIS
  getObjectType: function(config, object, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-type/' + object.type_slug + '?read_key=' + config.bucket.read_key;
    if (object.limit) endpoint += '&limit=' + object.limit;
    if (object.skip) endpoint +=  '&skip=' + object.skip;
    if (object.locale) endpoint += '&locale=' + object.locale;
    if (object.sort) endpoint += '&sort=' + object.sort;
    if (object.status) endpoint += '&status=' + object.status;
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
      cosmic.object = _.keyBy(cosmic.object, "slug");
      cosmic.total = response.total;
      return callback(false, cosmic);
    });
  },

  getObject: function(config, object, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object/' + object.slug + '?read_key=' + config.bucket.read_key;
    if (object._id) {
      endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-by-id/' + object._id + '?read_key=' + config.bucket.read_key;
    }
    if (object.status) endpoint += '&status=' + object.status;
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
        object.metafield = _.keyBy(metafields, "key");
      }
      cosmic.object = object;
      return callback(false, cosmic);
    });
  },

  getObjectsBySearch: function(config, object , callback){
    var searchParams = '/search?metafield_key=' + object.metafield_key;
    if (object.metafield_value) searchParams += '&metafield_value=' + object.metafield_value;
    else if (object.metafield_object_slug) searchParams += '&metafield_object_slug=' + object.metafield_object_slug;
    else searchParams += '&metafield_value_has=' + object.metafield_value_has;
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-type/' + object.type_slug + searchParams + '&read_key=' + config.bucket.read_key;
    if (object.limit) endpoint += '&limit=' + object.limit;
    if (object.skip) endpoint +=  '&skip=' + object.skip;
    if (object.sort) endpoint += '&sort=' + object.sort;
    if (object.locale) endpoint += '&locale=' + object.locale;
    if (object.status) endpoint += '&status=' + object.status;
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
      cosmic.object = _.keyBy(cosmic.object, "slug");
      cosmic.total = response.total;
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
  },

  addMedia: function(config, params, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/media';
    var form = new FormData();
    if (config.bucket.write_key)
      form.append('write_key', config.bucket.write_key);
    form.append('media', params.media);
    if (params.folder)
      form.append('folder', params.folder);
    superagent.post(endpoint)
      .send(form)
      .end(function(err, response) {
        if (response.status >= 400) {
          var err = {
            'message': 'There was an error with this request.'
          }
          return callback(err, false);
        }
        return callback(false, response);
    });
  },

  deleteMedia: function(config, object, callback){
    var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/media/' + object.media_id;
    fetch(endpoint, {
      method: 'delete',
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
    object.metafield = _.keyBy(metafields, 'key');
  }
  return object;
}
