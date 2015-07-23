[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo.png)](https://cosmicjs.com/)
##Cosmic JS Driver for Node

###Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and setup a bucket.

Check out the examples folder for the following express / hogan example:

```javascript
/* !!!! CONFIGURE !!!!
================================ */
var config = {};
config.bucket = {
	slug : 'driver-example',
	read_key : '',
	write_key : ''
};

config.url = 'https://api.cosmicjs.com/v1/' + config.bucket.slug;

config.api_url = {
	objects : config.url + '/objects?read_key=' + config.bucket.read_key,
	media : config.url + '/media?read_key=' + config.bucket.read_key,
	add_object : config.url + '/add-object',
	edit_object : config.url + '/edit-object',
	delete_object : config.url + '/delete-object'
};

// Visit https://api.cosmicjs.com/v1/driver-example/objects?pretty=true in the browser to see raw data

/* Modules
================================ */
var http = require('http'),
	express = require('express'),
	app = express(),
	Cosmic = require('cosmic-driver'),
	hogan = require('hogan-express'),
	_ = require('lodash'),
	async = require('async');

/* Express
================================ */
app.engine('html', hogan);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.enable('view cache');
app.use(express.static(__dirname + '/public'));

/* Routes
================================ */
app.get('/', function(req, res) {
  
  async.series([
  	
  	/* Add object
  	============================ */
  	function(callback){
  		
  		var object = {
  			"write_key" : config.bucket.write_key,
	  		"type_slug" : "pages",
	  		"title" : "Test Title",
	  		"content" : "Test Content"
	  	};

  		// Add object
  		Cosmic.addObject(config, object, function(err, object){
				
				if(err){
					return res.end(err.message);
				}
				return callback();

		  });
  	},

  	/* Edit object
  	============================ */
  	function(callback){
  		
  		var object = {
  			"write_key" : config.bucket.write_key,
  			"slug" : "test-title",
	  		"type_slug" : "pages",
	  		"title" : "New Title",
	  		"content" : "New Content"
	  	};

  		// Edit object
  		Cosmic.editObject(config, object, function(err, object){
				
				if(err){
					return res.end(err.message);
				}

				return callback();

		  });
  	},

  	/* Delete object
  	============================ */
  	function(callback){
  		
  		var object = {
  			"write_key" : config.bucket.write_key,
  			"slug" : "test-title"
	  	};

	  	// Delete object
  		Cosmic.deleteObject(config, object, function(err, object){
				
				if(err){
					return res.end(err.message);
				}
				return callback();

		  });
  	},

  	/* Get media
  	============================ */
  	function(callback){

  		// Get media
  		Cosmic.getMedia(config, function(err, media){
			
				if(err){
					return res.end(err.message);
				}

				// Do stuff with your data
				res.locals.media = media;

				return callback();

		  });

  	},

  	/* Get objects
  	============================ */
  	function(callback){

  		// Get objects
  		Cosmic.getObjects(config, function(err, cosmic){
				
				if(err){
					return res.end(err.message);
				}
				// Make truncated blurb
				_.forEach(cosmic.objects.all, function(object){
					object.content_blurb = _.trunc(strip_tags(object.content), 200);
				});

				page = {
					title : cosmic.object.home.title,
					headline : cosmic.object.home.metafield.headline.value,
					content : cosmic.object.home.content
				}

				// Do stuff with your data
				res.locals = {
					page : page,
					articles : cosmic.objects.type.articles,
					object : cosmic.object,
					media : res.locals.media
				}

				return res.render('index');

		  });

  	},

  ]);


});

/* Functions
================================ */
function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '')
    .toLowerCase()
    .match(/<[a-z][a-z0-9]*>/g) || [])
    .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '')
    .replace(tags, function($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

app.listen(3000);
```
