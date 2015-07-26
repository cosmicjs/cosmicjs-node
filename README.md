[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo-w-brand.jpg)](https://cosmicjs.com/)
## Cosmic JS Client for Node

### Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and setup a bucket.

#### Install
```
npm install cosmicjs
```

#### Usage

```javascript
/* !!!! CONFIGURE !!!!
================================ */
var config = {};
config.bucket = {
	slug : 'driver-example',
	read_key : '', // add read_key if added to your Cosmic JS bucket settings
	write_key : '' // add write_key if added to your Cosmic JS bucket settings
};

// Add object
var object = {
	"write_key" : config.bucket.write_key,
	"type_slug" : "pages",
	"title" : "Test Title",
	"content" : "Test Content"
};

Cosmic.addObject(config, object, function(err, object){
	
	if(err){
		return err.message;
	}
	
	// do something with object
	return;

});

// Edit object
var object = {
	"write_key" : config.bucket.write_key,
	"slug" : "test-title",
	"type_slug" : "pages",
	"title" : "New Title",
	"content" : "New Content"
};

Cosmic.editObject(config, object, function(err, object){
	
	if(err){
		return err.message;
	}
	
	// do something with object
	return;

});

// Delete object
var object = {
	"write_key" : config.bucket.write_key,
	"slug" : "test-title"
};

// Delete object
Cosmic.deleteObject(config, object, function(err, object){

	if(err){
		return err.message;
	}
	
	// do something with object
	return;

});

// Get objects
Cosmic.getObjects(config, function(err, objects){
				
	if(err){
		return err.message;
	}
	
	// do something with objects
	return;

});

// Get media
Cosmic.getMedia(config, function(err, media){
			
	if(err){
		return err.message;
	}
	
	// do something with media
	return;

});
```
