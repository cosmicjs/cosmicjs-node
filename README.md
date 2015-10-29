[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo-w-brand.jpg)](https://cosmicjs.com/)
## Cosmic JS Client for Node

### Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and setup a bucket.

NOTE: This is a package for server-side apps using Node.js.  For all browser-based apps, use the [official Cosmic JS Browser package](https://github.com/cosmicjs/cosmicjs-node).  These two packages will soon be merged to allow for universal application development with Cosmic JS.

#### Install
```
npm install cosmicjs
```

#### Usage

```javascript
var Cosmic = require('cosmicjs');

/* Configure
================================ */
var config = {};
config.bucket = {
	slug: 'client-example',
	read_key: '', // add read_key if added to your Cosmic JS bucket settings
	write_key: '' // add write_key if added to your Cosmic JS bucket settings
};

/* Get bucket
================================ */
Cosmic.getBucket(config, function(err, bucket){
				
	// do something with bucket

});

/* Get objects
================================ */
Cosmic.getObjects(config, function(err, objects){
				
	// do something with objects

});

/* Get media
================================ */
Cosmic.getMedia(config, function(err, media){
			
	// do something with media

});

/* Add object
================================ */
var object = {
	"type_slug": "pages",
	"title": "Test Title",
	"content": "Test Content"
};

Cosmic.addObject(config, object, function(err, object){
	
	// say hi to your new object
	
});

/* Edit object
================================ */
var object = {
	"slug": "test-title",
	"type_slug": "pages",
	"title": "New Title",
	"content": "New Content"
};

Cosmic.editObject(config, object, function(err, object){
	
	// say hi to your edited object

});

/* Delete object
================================ */
var object = {
	"_id": "55e3aedff03ccb191c00000b"
};

or

var object = {
	"slug": "test-title"
};

Cosmic.deleteObject(config, object, function(err, object){

	// say goodbye to your object

});
```
