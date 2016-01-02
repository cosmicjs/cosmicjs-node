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
  // console.log(bucket);
});

/* Get objects
================================ */
Cosmic.getObjects(config, function(err, objects){
  // console.log(objects);
});

/* Get object
================================ */
var object = {
  slug: 'object-slug'
}
Cosmic.getObject(config, object, function(err, object){
  // console.log(object);
});

/* Get media
================================ */
Cosmic.getMedia(config, function(err, media){
  // console.log(media);
});

/* Add object
================================ */
var object = {
  'write_key': config.bucket.write_key,
  'type_slug': 'pages',
  'title': 'Test Title',
  'content': 'Test Content'
};
Cosmic.addObject(config, object, function(err, object){
  // console.log(object);
});

/* Edit object
================================ */
var object = {
  'write_key': config.bucket.write_key,
  'slug': 'test-title',
  'type_slug': 'pages',
  'title': 'New Title',
  'content': 'New Content'
};
Cosmic.editObject(config, object, function(err, object){
  // console.log(object);
});

/* Delete object
================================ */
var object = {
  'write_key': config.bucket.write_key,
  'slug': 'test-title'
};
Cosmic.deleteObject(config, object, function(err, object){
  // console.log(object);
});
```
