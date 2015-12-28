[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo-w-brand.jpg)](https://cosmicjs.com/)
## Official Cosmic JS Client (Now Universal!)

### Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and set up a bucket.

#### Install
```
npm install cosmicjs
```

#### Usage

```javascript
/* Configure
================================ */
var config = {};
config.bucket = {
  slug: 'react-flux-cosmicjs',
  read_key: '', // add read_key if added to your Cosmic JS bucket settings
  write_key: '' // add write_key if added to your Cosmic JS bucket settings
};

var Cosmic = require('cosmicjs');

/* Get bucket
================================ */
Cosmic.getBucket(config, function(err, bucket){
				
  // do something with the bucket

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
  "write_key": config.bucket.write_key,
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
  "write_key": config.bucket.write_key,
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
  "write_key": config.bucket.write_key,
  "slug": "test-title"
};

Cosmic.deleteObject(config, object, function(err, object){

  // say goodbye to your object

});
```
