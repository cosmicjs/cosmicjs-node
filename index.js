var request = require('request');
var	_ = require('lodash');

var api_url = 'https://api.cosmicjs.com';
var api_version = 'v1';

module.exports = {

	getBucket: function(config, callback){

		var objects_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/?read_key=' + config.bucket.read_key;
		
		request.get(objects_url, function (error, response, body) {
	 		
	 		if (!error && response.statusCode == 200) {
	 	 		
	 	 		var data = JSON.parse(body);
	 	 		
	 	 		return callback(false, data);
		  
		  } else {
		  	
		  	var err = {
		  		message: 'There was an error with this request.'
		  	}

		  	return callback(err, false);
		  
		  }

		});

	},
	
	getObjects : function(config, callback){

		var objects_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/objects?read_key=' + config.bucket.read_key;

		request.get(objects_url, function (error, response, body) {
	 		
	 		if (!error && response.statusCode == 200) {
	 	 		
	 	 		var data = JSON.parse(body);
	 	 		
	 	 		// Constructor
	 	 		var cosmic = {};
	 	 		var objects = data.objects;
	 	 		cosmic.objects = {};
	 	 		cosmic.objects.all = objects;
	 	 		cosmic.objects.type = _.groupBy(objects, "type_slug");
	 	 		cosmic.object = _.map(objects, keyMetafields);
	 	 		cosmic.object = _.indexBy(cosmic.object, "slug");

				return callback(false, cosmic);
		  
		  } else {
		  	
		  	var err = {
		  		message : 'There was an error with this request.'
		  	}

		  	return callback(err, false);
		  
		  }

		});

	},

	getMedia : function(config, callback){

		var media_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/media?read_key=' + config.bucket.read_key;

		request.get(media_url, function (error, response, body) {
	 	 
	 	 if (!error && response.statusCode == 200) {
	 	 		
	 	 		var data = JSON.parse(body);
	 	 		
	 	 		// Constructor
	 	 		var media = {};
	 	 		var media = data.media;

				return callback(false, media);
		  
		  } else {

		  	var err = {
		  		message : 'There was an error with this request.'
		  	}

		  	return callback(err, false);
		  
		  }

		});
	},

	addObject : function(config, object, callback){
		
		var add_object_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/add-object';

		object.write_key = config.bucket.write_key;

		request.post({ 
			url : add_object_url, 
			form : object 
		}, function (error, response, body) {
	 	 
	 	 	if (!error && response.statusCode == 200) {
	 	 		
	 	 		var object = JSON.parse(body);
	 	 		return callback(false, object);
		  
		  } else {

		  	var err = {
		  		message : 'There was an error with this request.'
		  	}

		  	return callback(err, false);
		  
		  }

		});
	},

	editObject : function(config, object, callback){
		
		var edit_object_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/edit-object';

		object.write_key = config.bucket.write_key;

		request.put({ 
			url : edit_object_url, 
			form : object 
		}, function (error, response, body) {
	 	 	
	 	 	if (!error && response.statusCode == 200) {
	 	 		
	 	 		var object = JSON.parse(body);
	 	 		return callback(false, object);
		  
		  } else {

		  	var err = {
		  		message : 'There was an error with this request.'
		  	}

		  	return callback(err, false);
		  
		  }

		});
	},

	deleteObject : function(config, object, callback){
		
		var delete_object_url = api_url + '/' + api_version + '/' + config.bucket.slug + '/delete-object';

		object.write_key = config.bucket.write_key;

		request.del({ 
			url : delete_object_url, 
			form : object 
		}, function (error, response, body) {
	 	 	
	 	 	if (!error && response.statusCode == 200) {
	 	 		
	 	 		var object = JSON.parse(body);
	 	 		return callback(false, object);
		  
		  } else {

		  	var err = {
		  		message : 'There was an error with this request.'
		  	}

		  	return callback(err, false);
		  
		  }

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