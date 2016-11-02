[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo-w-brand.jpg)](https://cosmicjs.com/)<br><br>
This is the Official Cosmic JS JavaScript Client which allows you to easily create, read, update and delete content from your Cosmic JS buckets.

This package now comes with `cosmicjs.browser.min.js` for easy integration in the browser.

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
Cosmic.getBucket(config, function(error, response){
  // console.log(response);
});

/* Get objects
================================ */
Cosmic.getObjects(config, function(error, response){
  // console.log(response);
});

/* Get objects by type
================================ */
var object_type = 'pages';
Cosmic.getObjectType(config, object_type, function(error, response){
  // console.log(response);
});

/* Get object
================================ */
var object = {
  slug: 'object-slug'
}
Cosmic.getObject(config, object, function(error, response){
  // console.log(response);
});

/* Get media
================================ */
Cosmic.getMedia(config, function(error, response){
  // console.log(response);
});

/* Add object
================================ */
var object = {
  write_key: config.bucket.write_key,
  type_slug: 'pages',
  title: 'Test Title',
  content: 'Test Content'
};
Cosmic.addObject(config, object, function(error, response){
  // console.log(response);
});

/* Edit object
================================ */
var object = {
  write_key: config.bucket.write_key,
  slug: 'test-title',
  type_slug: 'pages',
  title: 'New Title',
  content: 'New Content'
};
Cosmic.editObject(config, object, function(error, response){
  // console.log(response);
});

/* Delete object
================================ */
var object = {
  write_key: config.bucket.write_key,
  slug: 'test-title'
};
Cosmic.deleteObject(config, object, function(error, response){
  // console.log(response);
});
```
#### Easy Browser Example
```html
<!DOCTYPE html>
<html>
<head>
  <title>Cosmic JS Easy Browser Example</title>
</head>
<body>
<h1 id="title">If you see this, something isn't working...</h1>
<div id="content"></div>
<div id="metafields"></div>
<script src="cosmicjs.browser.min.js"></script>
<script>
var config = {
  bucket: {
    slug: 'easy-browser-example'
  },
  object: {
    slug: 'home'
  }
};
Cosmic.getObject(config, config.object, (err, res) => {
  var object = res.object;
  document.getElementById('title').innerHTML = object.title;
  document.getElementById('content').innerHTML = object.content;
  var metafields = object.metafields;
  var objects = '';
  metafields.forEach(function(metafield){
    objects += '<h2>' + metafield.title + '</h2>';
    objects += '<img width="300" src="' + metafield.url + '"/>';
    objects += '<br><br>';
  });
  document.getElementById('metafields').innerHTML = objects;
});
</script>
</body>
</html>
```
